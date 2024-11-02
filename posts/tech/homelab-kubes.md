---
slug: qBiRbJ
date: 2 Nov 2024
title: Choices for homelab kubernetes setup
description: Capturing my thought process around setting up a kubernetes deployment for my homelab
tags:
  - homelab
  - kubernetes
  - linux
  - ubuntu
---
While I'm still in the moment, I thought I'd capture a bit of a "thought process" for the choices that went into setting up a kubernetes cluster in my homelab. And before you get any ideas, i want to come clean and say that this is my first homelab setup, so take it for what it's worth.

## Why do I need a homelab and kubes?

Long story short, I'm an engineer, I build stuff. And technically I don't really have to. I could build all of this in the cloud. And truth be told, maybe that's what I should have done. But, as I said, I like building stuff. And there is a lot of value in having my own hardware in house that I can mess with over and over and over again, try all sorts of different things and not be constrained or distracted by a cloud provider twiddling their cloud offerings in my face.

Some stuff that I build can be long running, and might use the same Postgres/Redis setup over and over again. I do run that on a laptop, but really it's a pain. Not to mention requires a beefy laptop to run. And honestly I just find the whole lag and account hustle around cloud systems distracting as fuck.

And so I picked a couple of sub $500 mini PCs on a prime day sale, linked them with a $50 switch and that packs about 4 times more horse power than my M1 Pro. Not to mention it's upgradeable with aftermarket parts.

So, to me, setting up my own small server hardware are:

1. fun
2. lets me self-host what i need in-house on a cheap
3. lets me use an 8 years old thinkpad and still have tonnes of horse power
4. did i mention fun?

## OS options

This part should really be a tweet and go something like this: choosing something that is not ubuntu server is a bit like going to a video game store and buying something that is not call of duty. But I'll elaborate.

I'm actually planning to run most of my stuff in kubes, and from that perspective the choice of the underlying os doesn't matter all that much. I mean, sure some marketing material will persuade you with "bare metal" terminology, but honestly, unless you're running a million dollar fleet, that's horse shit. Most minimal server deployments are basically a linux kernel with a few nuts and bolts, as a homelab owner you wont really ever notice the difference.

But here is what I have considered.

1. Arch linux. I actually run arch as my laptop os, and it's by far my favourite linux distro. But, do i really want to have a snowflake playground setup on a server that I'll likely blow up and rebuild a dozen of times? Do I really need all the AUR stuff on it? The answer is not really
2. Talos linux. Promoted as the best kubes distro ever that simplifies kubes setup, API driven and everything. That actually sounds great, infra as code and all. And I'm sure it's a great product. But really.... Setting up a kubs cluster is not that complicated, it literally takes 10 minutes end to end. Do I need a yet another opinionated layer between me and my tools to do that? Not running a million dollar HA production cluster here, so no thank you.
3. Ubuntu server. Well comes with everything you'll ever need, including all the problems you ever run into solved. Ubuntu's minimal server install is fantastic bare bone system that can ever run on IoT. Also has kernel livepatch baked in, gosh I hate rebooting the system on kernel patches. Such a barbaric practice.
4. Sorry, not now OpenBSD

Do you see what I'm telling you here? You can choose anything here really, the question is how much time you want to invest into setting up and maintaining a system? My answer is as little as possible, so ubuntu server.

## Kubes options

Long story short there are basically two options on the table at the moment. [k3s](https://k3s.io/) and [microk8s](https://microk8s.io/). I mean you could technically install kubes as our lord and saviour Google had intended, but why would you?

Full disclosure, I'm a huge fun of rancher and worked with k3s in the past, and so I thought it's a lost cause for microk8s. But I ended up becoming a convert.

Don't get me wrong k3s is fantastic, and is that's what you used to and/or you're not running ubuntu that's a perfectly legitimate choice. But, I found that microk8s can do everything k3s can do with just a flip of an option, it's addons thing actually covers 100%+ of everything I'll ever need, and in my tests it consumes a tiny bit less CPU and memory than k3s. Not like that will ever matter in my case.

In the end what won me over was the fact that it comes integrated with ubuntu server itself, has very sensible defaults (including preinstalled helm), and it updates along with the server system itself.

Really choosing ubuntu server + micrk8s simplifies the crap out of the equation. I can blow up my system 5 times a day and resurrect it in 15 minutes every time. And it will keep itself up to date patched and secure mostly automatically so that I could spend my brain cycles on something else.

Well, at least that's me. You don't have to do the same. But I hope this helped.