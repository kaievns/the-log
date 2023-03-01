---
slug: nIAeA
date: 1 March 2023
title: How to make a svelte preprocessor
description: A bit of a deep dive into Svelte plugins system
thumbnail: ./images/svelte-balls.jpg
tags:
    - svelte
    - javascript
---

The other day I needed to do a bit of a weird thing in Svelte on this website,
and I ended up making a small preprocessor plugin. It's a fun little project,
and I thought it's worth sharing the details.

Before I start, an acknowledgement. I didn't invent any of the code in here, I'm
just trying to walk you through how this thing works. Matter of fact, I have
lifted the o/g idea from Github comments somewhere.

## What's the problem?

I have all my posts in isolated markdown files, and I want them to know nothing
of the application that renders them. It works fine by the most part, the
[mdsvex](https://mdsvex.pngwn.io) plugin imports and preprocesses the markdown
files just fine. It's actually pretty darn great at it.

The thing is though, it doesn't really preprocess the front-matter metadata. And
that's a problem for me because I want to specify thumbnail images for my
articles, and I want those images to be processed by the svelte/vite pipelines
like everything else:

```
---
title: My article
thumbnail: ./local-image.jpg
...
---
```

I could in theory just use mdsvex for what it was designed for and just import
the image in an embedded script like so:

```md
---
title: My article
...
---

<script type="module">
    import thumb from "./local-image.jpg"
    metadata.thumbnail = thumb;
</script>

the post text
```

Call me pedantic, but, I don't like the idea because it breaks the idea of
keeping my markdown files agnostic from the application. Adn it's likely to
become a problem down the road when I decide to publish those articles somewhere
else.

So, I wanted some magic thing that would pre-process those markdown files for me
and make them compatible with the svelte/vite ecosystem without me touching the
files. And so enter the svelte plugins ecosystem.

## Svelte pre-processing plugins

When you look inside of your `svelte.config.js` file you will see the
`preprocessors` section:

```js
const config = {
    preprocessors: [
        sveltePreprocess({ ... }),
        vitePreprocess(),
        mdsvex({ ... }),
        // ....
    ]
}
```

What those plugins do is they, well, preprocess the source code files that are
being imported into the application _before_ they are finally imported and
initialized.

Think of this as basically meta programming, it's a way to modify the source
code and possibly generate more code before a module is fully initialised.
That's what `mdsvex` does in a nut shell, they turn the original markdown file
into basically a `.svelte` file which then can be imported by the svelte/vite
ecosystem as a regular module.

## How does it work?

It works quite simple on the inside, a preprocessor plugin is basically an async
function that receives a file name and content, and returns modified version of
the code and a source map of the changes.

```js
const myPlugin = {
  async markup({ content, filename }) {
    // do your thing here

    return {
      code: newContentString,
      map: theSourceMapOfChanges, // optional
    };
  },
};
```

Once you have that, you can just plug it into the `preprocessors` list in the
`svelte.conf.js` file and it will dutifully shovel everything that's being
imported into the application through your function.

To mess with the original content, svelte also has some handy functions to parse
the content into an AST and traverse the tree. Svelte is pretty dope like that.

```js
import { parse, walk } from "svelte/compiler";

const myPlugin = {
  async markup({ content, filename }) {
    const ast = parse(content, { filename });

    walk(ast.module, {
      enter(node) {
        // do your thing here
      },
    });

    return {
      code: newContentString,
      map: theSourceMapOfChanges, // optional
    };
  },
};
```

You probably don't want to edit the original content manually, though. And
instead use something like the
[magic-string](https://www.npmjs.com/package/magic-string) package to safely
edit your codebase, and generate the source-map for your changes. Like so:

```js
import { parse, walk } from "svelte/compiler";
import MagicString from "magic-string";

const myPlugin = {
  async markup({ content, filename }) {
    const ast = parse(content, { filename });
    const s = new MagicString(content);

    walk(ast.module, {
      enter(node) {
        // do your thing here
      },
    });

    return {
      code: s.toString(),
      map: s.generateMap(),
    };
  },
};
```

## An example

I have my little thumbnail preprocessing function plugged in _after_ the mdsvex
does its thing. Meaning it sees an already processed markdown file that was
turned into a `.svelte` file. And at the header of it will have a module
declaration string that looks like so:

```svelte
<script type="module">
    export const metadata = {
        title: "My article",
        description: "Blah blah blah",
        thumbnail: "./local-image.jpg",
        // ...
    }
</script>

the rest of the content
```

What I want my plugin to do is to find that `metadata` const declaration and
replace it with a svelte native image import; preferably with the imagetools
optimisation parameters.

To that end, I'm using the svelte's built in AST parser and walker; and then I
use the `magic-string` to safely patch the declaration.

```js
walk(ast.module, {
  enter(node) {
    // finding the `metadata` const declaration
    if (node.type === "VariableDeclarator" && node.id.name === "metadata") {
      for (const property of node.init.properties) {
        // finding the `thumbnail` property
        if (property.key.value === "thumbnail") {
          const importThumb =
            `import THUMBNAIL from "${property.value.value}?w=1200&h=600&metadata";`;

          // adding the native thumb import to the source code
          s.appendLeft(ast.module.content.start, importThumb);

          // replacing the o/g path with the new imported variable name
          s.overwrite(property.value.start, property.value.end, "THUMBNAIL");
        }
      }
    }
  },
});
```

And that's all there is to it. In the end this plugin will produce a `.svelte`
file that looks somewhat like this:

```svelte
<script type="module">
    import THUMBNAIL from "./local-image.jpg?w=1200&h=600&metadata";

    export const metadata = {
        title: "My article",
        description: "Blah blah blah",
        thumbnail: THUMBNAIL,
        // ...
    }
</script>

the rest of the content
```

And so, when the file is finally imported by svelte it will have the `thumbnail`
property on the `metadata` export. And that `thumbnail` will be a regular Svelte
image import. Which, you can then use normally anywhere in the app, for example
add it to the open graph meta tags like so:

```svelte
<script type="ts">
    export const post; // <- the imported .md post

    $: thumb = post.thumbnail;
</script>
<svelte:head>
{#if thumb}
    <meta property="og:image" content={thumb.src} />
    <meta property="og:image:width" content={Math.round(thumb.width)} />
    <meta property="og:image:height" content={Math.round(thumb.height)} />
{/if}
</svelte:head>
```

And that's pretty much the whole story. Enjoy!
