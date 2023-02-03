---
title: How this site is made
date: 1 February 2023
description: a bit of technical details about how this web site was created
tags:
    - javascript
    - front-end
    - technology
---

So, I have been working on this app for a few weeks on and off now, and it's somewhat ready for it's maiden flight. So, I have figured what would be a better initial post than to explain how this thing works and what it's made of?

You can find the source code in it's entirety in this [github repo](https://github.com/kaievns/the-log)

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

To produces this web-site, which is basically a blogging platform, the only things I really had to install were a markdown processor and tailwind. And I probably didn't need the last one, I just like it. Everything else, routing, data fetching, and a very sensible container/components segregation setup were provided out of the box.

## What about Tailwind?

I hope by now you started to sense the common theme here. I don't really have the patience for messy tooling. Which sounds more negative than it is, so lets try to flip it a bit. I care deeply about software engineering tools, and I especially like the reliable and ergonomic type. I believe that a craftsman is only as good as his tools.

I've been writing CSS for 20+ years non stop. I actually like CSS, I think it's a greatly misunderstood language. And, Tailwind is by far the best, most well thought through CSS experience I've seen in my entire career. Moreover, tailwind-prose has the most well thought through typography setup.

Just add the two together, sprinkle some of this and that, and you have a pretty and responsive web-site. It fits my CSS habits so well, I basically use it as a CSS shorthand.

My only complaint about tailwind is that writing 10 words in the `class` attribute is a bit less than stellar experience from the ergonomics perspective. But, I don't have any better ideas, so I should shut up.

## What's with Markdown anyway?

A bit of a rhetorical question in this day and age, I suppose. Pragmatisch, squarisch, goot, as they say. What else would you want from a text data format? I guess, I have couple of personal notes to add to that.

Firstly, I really like the idea of separating the data from presentation. Markdown does that brilliantly, and unlike say SQL it is perfectly consumable in the raw form by both humans and the machines. And it's highly transplantable. I really value the option to take my writing some place else in a few years if I feel like it.

Secondly, well, I like writing. Well, okay, that's a lie, I hate writing, especially writing truthfully. Like most creative processes it is a lot of pain. But, I cannot stop writing, it's even more pain for me to not regularly dump the contents of my brain in files. And whenever pain meets distractions nothing of value if being produced. I need a simple utilitarian environment to sit with my pain, and write. A text editor and markdown seem to do the trick consistently for me.

And so I have two folders here the `posts` for markdown and the `src` for the application.
