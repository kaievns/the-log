---
slug: cO6vGW
title: Did I tell you about keyd?
description: A quick share about keyd as a keyboard config management tool
date: 22 July 2024
tags:
  - engineering
  - linux
  - keyboard
---

So, I run a custom keyboard layout. I designed one almost 10 years ago and it kind of stuck with me. Can't go back to QWERTY, impossible. Well, okay, I'm kind of a keyboard setup junkie. I run a custom build split 42% with six layers and home row mods, okay? That level of junkie.

It's actually mostly pretty great, and I enjoy it a bunch, except when it comes to linux. If you step away from the vanilla QWERTY setup in linux, you're kind of fucked. Which is ironic because the system is so open and customizable and full of weirdos.

The problem is that there is no consensus on keyboards configuration. I mean there is X11 configuration and layouts, but it's pretty limited. But then a whole lot of other systems will point blank ignore that. Wayland has it's own thing, because of course is does. But then it gets worse, because half of the apps are electron apps those days, and those don't give a damn about X or Wayland configurations. But then there are also just normal apps whose authors didn't bother to think about other layout users. And then there is Chromium, and that thing doesn't give a damn about anything in yous system and wants to be an operational system of its own it seems.

To be fair there is a little bit of that on both Windows and MacOS too. But on those we have the Karabiner, which is entirely great either, but it's neat because of the way it deals with the problem. It will register a virtual keyboard and then read the system input, remap the crap out of it and then feed that into the virtual keyboard and feed it back into the system hence bypassing the whole layouts thing. Which is pretty neat.

Turned out there are a couple of similar options on linux side too. What they do, they basically hijack input directly from kernel/udev, transform it and then feed it back into a virtual keyboard.

The most known project is probably [kmonad](https://github.com/kmonad/kmonad). It's actually pretty great, they even try to emulate some of the QMK features like mod-taps and such which are pretty neat. There are a few drawbacks to the project though. As far as I understand it the development of the project has stopped years ago. It's written in Haskell, there are binaries, but it will likely install half of the internet to compile it. And configs are written in a c-lisp. I mean, both are amazing languages, but fuck my life if i have to learn two new computer languages to configure my keyboard.

I mean I did give it a go anyways, and it actually works pretty okay. But I also felt that there was a distinct input lag with it, especially if i start messing with mod-taps. I don't know what's the deal there, whether the fact that I'm running on a beloved old thinkpad, or because the algo gets a bit confused, or it's just the processing delay of a haskell thing.

Luckily there is another similar project called [keyd](https://github.com/rvaiya/keyd) It's a bit less feature rich than kmonad, but there are a few advantages to it too. It's actively maintained, it's written in C, and configuration is in TOML-ish config. It's fully baked with systemd and available as a proper system level package, and the installation and configuration was pretty breezy actually. Also, I can't see any input lag what so ever with the thing.

So, yeah, just wanted to give the author some props. I've managed to setup my layout and mac like key bindings for everything pretty quickly, and it works great, it terminal, all apps, including electron ones are just fine. Pretty much invisible.

My only wish they'd back port some of the QMK twinky dinkies. I would really love to have some decent mod-tap and home row mods setup. That'd make my day for sure.

