---
slug: MjU5MjkK
title: Svelte + Markdown blog images setup
description: A short guide how to setup image assets processing and optimisation in a svelte+markdown blog
date: 8 Feb 2023
tags:
    - svelte
    - javascript
---

There are plenty of guides online on how to setup a svelte + markdown based blog app, but they seem to be missing one key ingredient: how to attach images to your articles and manage all the post-processing and optimisations on them. So, I figured I'll throw together a short guide, maybe it'll help someone.

## Step 1, the imagetools

The first thing you need to add -- and that's regardless whether it's a blog app or any other type of svelte apps -- is the
[vite-imagetools](https://www.npmjs.com/package/vite-imagetools) plugin to your vite setup:

```js
import { sveltekit } from "@sveltejs/kit/vite";
import { imagetools } from "vite-imagetools";

const config: UserConfig = {
        plugins: [sveltekit(), imagetools()],
        // ....
```

What it does, it enables image optimisation and preprocessing for all the image assets in your Svelte/Vite based application.
Once that is installed, you can configure the optimisation preferences for the images you're importing in your app:

```svelte
<script>
    import face from "assets/face.jpg?w=400&webp";
</script>

<img src={face}>
```

Here by adding the `?w=400&webp` query string to the end of the original image file, I asked the image to be resided to the width of `400px` and converted to the `webp` format. This way you can do all sorts of magic, like having multiple sizes of the same original image for different devices, change formats, etc.

## Step 2, add markdown plugins

The great thing about [mdsvex](https://mdsvex.pngwn.io) -- the default svelte markdown processor -- is that it supports the
[remark](https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins) and 
[rehype](https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#list-of-plugins) plugins ecosystems. Long story short, remark adds features to convert markdown to HTML, and rehype adds features to convert HTML to HTML; as in post-process HTML itself.

To make this thing work, you will need two plugins. The first one is a remark plugin called
[mdsvex-relative-images](https://www.npmjs.com/package/mdsvex-relative-images). And the second one
is a rehype plugin called [rehype-figure](https://github.com/josestg/rehype-figure). 
Import them both and add them to your `svelte.config.js` file in your mdsvex config like so:

```js
import remarkRelativeImages from "mdsvex-relative-images";
import rehypeFigure from "rehype-figure";

const config = {
  preprocess: [
    mdsvex({
      extensions: [".md", ".mdx"],
      remarkPlugins: [
        remarkRelativeImages,
        // ...
      ],
      rehypePlugins: [
        [rehypeFigure, { className: "my-class" }],
        // ...
      ],
      // ...
    }),
  ],
  // ...
```

## Profit

A now a bit of explanation how it all works. The relative images plugin allows you to refer to local images that usually live next to your markdown file, like so:

```markdown
lorem ipsum blah blah blah

![alt text](./face.jpg?w=600&webp)

lorem ipsum blah blah blah
```

The plugin will not only automatically sort out the paths and file locations, but also shovel your o/g images through the imagetools optimisation pipeline. This way you can keep your o/g images in high res and whatever format, and control how they will be actually deployed in the production build.

The first plugin will produce a regular `<img />` tag, which is less than ideal for styling purposes, and that is why you need the `rehype-figure` plugin, which will turn your vanilla `<img />` tag into a proper `<figure>` envelope:

```html
<img src="/assets/face-hash459.webp" alt="Alt text" />

<!-- converted into -->

<figure class="my-class">
    <img src="/assets/face-hash459.webp" alt="Alt text">
    <figcaption>Alt text</figcaption>
</figure>
```

It also will neatly place the `figure` tag in between the `p` text blocks, which is a way easier to style nicely.

And, that's pretty much the whole story. Enjoy!