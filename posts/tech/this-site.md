---
slug: MzI5Mgo
title: How this site is made
date: 1 February 2023
description: a bit of technical details about how this web site was created
tags:
    - javascript
    - front-end
    - technology
---

So, I have been working on this app for a few weeks on and off now, and it's somewhat ready for it's maiden flight. So, I have figured what would be a better initial post than to explain how this thing works and what it's made of?

You can find the source code in it's entirety in [this](https://github.com/kaievns/the-log) github repo.

## Acknowledgements

Before I go any further, I'd like to acknowledge couple of people, who's work I have heavily "borrowed" to make this website.

1. Chris Williams for creating the [Astro Cactus theme](https://github.com/chrismwilliams/astro-theme-cactus)
2. Josh Collinsworth for writing [an in depth blog post](https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog) about building SvelteKit apps

Both are top notch pieces of work that I could not recommend highly enough as detailed guides. Here, I'll just focus on the technical choices and reasoning behind them.

## Technology behind

Thanks to the modern frameworks, this thing is actually rather simple under the hood. It's mainly just two pieces of tech

1. [SvelteKit](https://kit.svelte.dev) - the Svelte's official app development framework
2. [Tailwind](https://tailwindcss.com) - the infamous utility CSS framework

The reason I like both of those is kinda the same. I like practical tools that just work and I don't like dependencies.

I'll actually dig a bit deeper here. Yes, I'm well aware of the unix manifesto: "build great small things and combine them into bigger things". Although on paper that sounds like a smart idea, it actually fails the basic math test `A + B != A and B`

Hence the reason I like both SvelteKit and Tailwind. They solve a _set_ of problems, not individual small things. SvelteKit has everything one needs to build 99% of a very decent web app. And tailwind has everything one needs to apply decent styling
to a web app and not regret their life choices. They're both practical and to the point.

## Lets talk about Svelte

I'm not going to spend time debating Svelte vs. the rest of the world. Lets just say that ever since I tried Svelte I have never looked at other frameworks; and I have actively worked with the most of them throughout my career.

SvelteKit is very inline with the o/g Svelte and meaningfully extends on it. The net result is that you have a very sensible, standards based web applications development setup that covers probably 95% of use cases out of the box. Which is frankly very refreshing to see those days.

To create this web-site, which is basically a blogging platform, the only things I really had to install were a markdown processor and tailwind. And I probably didn't need the last one, I just like it. Everything else, routing, data fetching, and a very sensible container/components segregation setup were provided out of the box.

## What about Tailwind?

I hope by now you started to sense the common theme here. I don't really have the patience for messy tooling. Which sounds more negative than it is, so lets try to flip it a bit. I care deeply about software engineering tools, and I especially like the reliable and ergonomic type. I believe that a craftsman is only as good as his tools.

I've been writing CSS for 20+ years non stop. I actually like CSS, I think it's a greatly misunderstood language. And, Tailwind is by far the best, most well thought through CSS experience I've seen in my entire career. Moreover, tailwind-prose has the most well thought through typography setup.

Just add the two together, sprinkle some of this and that, and you have a pretty and responsive web-site. It fits my CSS habits so well, I basically use it as a CSS shorthand.

My only complaint about tailwind is that writing 10 words in the `class` attribute is a bit less than stellar experience from the ergonomics perspective. But, I don't have any better ideas, so I should shut up.

## What's with Markdown anyway?

A bit of a rhetorical question in this day and age, I suppose. Pragmatisch, squarisch, goot, as they say. What else would you want from a text data format? I guess, I have couple of personal notes to add to that.

Firstly, I really like the idea of separating the data from presentation. Markdown does that brilliantly, and unlike say SQL it is perfectly consumable in the raw form by both humans and the machines. And it's highly transplantable. I really value the option to take my writing some place else in a few years if I feel like it.

Secondly, well, I like writing. Well, okay, that's a lie, I hate writing, especially writing truthfully. Like most creative processes it is a lot of pain. But, I cannot stop writing, it's even more pain for me to not regularly dump the contents of my brain in files. And whenever pain meets distractions nothing of value if being produced. I need a simple utilitarian environment to sit with my pain, and write. A text editor and markdown seem to do the trick consistently for me.

## The "Architecture"

With all the whys out of the way lets look a little into the guts of this app. On the top level, there are basically two
folders, the `posts` folder where all the data lives, and the `src` folder where the Svelte app lives.

```
├─ posts/
  ├─ post-1.md
  └─ post-2.md
└─ src/
  └─ components/
    ├─ Header.svelte
    ├─ Footer.svelte
    └─ ....
  └─ routes/
    └─ posts/
      └─ [...slug]/
        └─ +page.svelte
      └─ +page.svelte
    └─ rss.xml/
      └─ +server.ts
    ├─ +layout.svelte
    └─ +page.svelte 
```

Svelte is pretty amazing at convention over configuration. Which is very neat, because it very cleanly splits between the `routes/` which is a way to group you page containers and data loading, and the `components/` which has all the generic components.

I'm not going to go at length here about all the details, but it provides a great and very unobtrusive app "architecture" and it's more than enough to make a blogging app work. I have even made the RSS feed as part of the same routing. Because SvelteKit basically let you mix the server side and the front-end in one flow, and mix and match them as you're pleased. So I just have the `rss.xml` folder that has a little "server" in there that compiles the RSS feed of the recent posts.

## How is it deployed?

That's actually the easiest part. SvelteKit has built in adapters for delivering your app. One of the basic ones that comes with the framework, basically crawls your entire app and renders it into highly optimised static website build.

Once that's plugged in, all you have to do is to push it to github pages and do some DNSing. Thankfully npm has a handy package for that as well:

```
npm install -D gh-pages
npm run build && gh-pages -d build
```

Why github pages instead of the likes of versel or netlify?

Well, I just want it it to keep running in case I'm dead. Just kidding. You probably should figure by now that I like simple and reliable tools. Since this whole thing is already on github, there is nothing to manage, just press a button and it's there.
