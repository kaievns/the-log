---
slug: mjbP47T
date: 14 November 2024
title: What and why homelab
description: Some thoughts and examples about my homelab and what I do there
tags:
  - kubernetes
  - homelab
  - linux
---
Before we go any further, I want to come clear, I'm not an expert in anything homelab, I'm just an engineer, and I like tinkering with stuff. Homelab is a new experience for me and I'm basically capturing my thought process and decisions here.

## What do I need a homelab for?

As I mentioned before, I'm just an engineer, and the main reason for having a homelab is to have my own apps and build tools sitting in my home infrastructure where I can endlessly tinker with them, try new sometimes dodgy stuff, experiment and learn.

I self-host databases, git server, build tools, my own applications that i develop, as well as some other people's software that i need. And there is a lot of interesting stuff that one can self-host. For example I run a pi-hole at home to block ads network wide, I use it for home automation, streaming services, NAS, backups, etc.

I also use it as a remote docker host and just raw data processing infrastructure, so that I didn't have to run those on my laptop and fret about putting it to sleep or it thermal throttling on me. And I can operate those things from anything, including my phone. Not being bound to the latest and beefiest laptop is great.

I actually still use a 7 years old thinkpad, the one manufactured before Lenovo decided to save 0.3mm in laptop thickness by reducing key switches travel distance. Well done Lenovo.

## Why not a cloud provider?

To be completely clear, I could do _all_ of this in a cloud infrastructure and would probably save some money in the process. But, i don't want to do that for a few reasons that might or might not appeal to other people.

Firstly, consumer grade hardware those days i _really_ good. And I can squeeze a lot of performance out of it that will rival commercial shared hardware of the cloud providers. I would definitely rather rent out a GPU for ML training, but everything else can as well live in the same room with me.

Secondly, cloud infra providers come with strings attached. Ultimately their goal is to optimise real commercial operations. And my goal is to make as many mistakes as I can, learn, and maybe push things further than would be advisable. To put it simply I'm not really their customer, and i don't really want to be.

Thirdly, having my own local hardware greatly simplifies my setup. When I don't need to bother with security keys, APIs, CLIs, etc. There is no billing or account management either. No firewalls or VPCs or anything like that.  I can just SSH into a local box and do what needs to be done. And that makes learning and experimentation much easier. Well at least for me.

Fourthly, security actually. Some of the work I do involves financial markets and money. And 20 years in the industry left me healthily paranoid about security. I sleep better by having my infra sitting behind firewalls without any access from the Internet.

## What hardware do I use?

One of the really cool things about running your own homelab, is that you can choose your own hardware, and evolve it with your needs. It definitely adds a layer of complexity to the problem, but it is a layer that I enjoy a lot given my background in hardware and electronics.

People run homelabs on all sorts of things from old laptops and PCs, to cheap mini PCs of various shapes and sizes, to straight up raspberry pis and their various clones. And you can run any combination of those too.

I personally chose two units of Beelink SER8 mini PCs that I got at sub $500 price tag on a prime day sale. I have linked them with a $50 dumb 2.5GB switch, and I literally zip tied everything on an IKEA skadis board mounted to a wall.

Those units are not the cheapest by any stretch of imagination, but they have AMD's Zen 5 8845HS CPUs, 32GB of upgradeable fast DDR5 memory and 1T of PCIe4 SSDs with a secondary slot for more. Each of those puppies have 8 cores / 16 threads, have beefy cooling mounted on top of them and they overclock like a mofo. You can literally put them into 65TDP mode and squeeze up to 30 TOPS out of each unit.

If I ever need more, I can upgrade the RAM/SSD in them, as well as adding another unit to the bunch, and that will cover all my computing needs short of a proper ML training for the next few years, at which point I could just rent those out in the cloud or add an external GPU via USB4 interface. And all of this comes at a price of an entry level laptop.

## Bottom line

I hope that answers some of the questions, and give you some ideas. But, at the end of the day, the easiest way to answer the burning question "do I need a homelab or not" is this.

Ask yourself, do you need another hobby or not? Because that's what it really is, a playground.
