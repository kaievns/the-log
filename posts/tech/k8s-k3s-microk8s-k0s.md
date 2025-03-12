---
slug: zMWU0
date: 16 February 2025
title: k8s vs k3s vs microk8s vs k0s
description: Writing down my experiences with various kubernetes distributions in the context of running a homelab
tags:
  - homelab
  - kubernetes
  - technology
---
I started using kubernetes about 10 years ago when it first came out. It was a vanilla k8s deployment provided by GKE as a service. And after a while when k3s was released I started using that as a development environment. Primarily because I could just boot it as a process on my laptop and I didn't have to deal with all the wiring of a normal k8s setup.

Later, when I got into homelabing, I started using microk8s for the reasons I'll discuss in a minute. And then recently I made a transition to k0s, because, again, reasons. Now I just want to capture what I've learned on my journey.

## What's in the box?

All kubernetes variants will have roughly the same baseline functionality. I think in many ways it is almost easier to think of kubernetes as a standard of how do describe and run applications in the cloud rather than what powers it under the hood. Because the implementation can vary quite a bit. And in some ways that variation will define the purpose of each of the distributions.

The canonical k8s implementation that is beamed down on us from our lord and saviour Google is arguably the heaviest of them. It is designed to run the actual production deployments with hundreds of thousands of pods under the hood. I've heard Google uses it as basically a blunt tool to run a whole lot of its own infrastructure. 

In the early days if you'd try to run it on your local laptop environment it would likely just explode in your face. And it's not really a reflection on the quality of the original k8s variant, it's just designed for a very different use case. It will want to own several machines in their entirety as a cluster, completely separate the control and workers planes, integrate with the big cloud infrastructure in the process and run a high availability system.

So, if you pop k8s bonnet and look under the hood, chances are you'll see too much.

That is where k3s comes in. As far as I know it is one the first simplified kubernetes deployments, and it owes its initial success to the fact that one can run it basically as a single process. What engineers at SuSE did, they threw out everything that is not entirely necessary and then replaced most of what _is_ necessary with simpler, more lightweight alternatives, like flanneld and sqlite. And then they packaged everything in a single binary that runs as a single process.

As the result, k3s comes with a fully setup system with built in opinionated defaults and low system requirements. This made k3s hugely popular among enthusiasts, developers, IoT, homelabbers, etc. And there are plenty of examples of even small to medium production deployments as well, and you can easily turn it into a HA system if you have to.

Microk8s is Ubuntu's variation on the same idea. A small opinionated monolithic deployment that doesn't want to eat your entire host, but it totally will if you let it. Unlike k3s, by default microk8s comes in a HA variant with Calico CNI and such. But you can disable that in a one line command and revert it to more or less k3s stock deployment equivalent.

In many ways and choices k3s and Microk8s are very similar. But, where they are different is that microk8s, unlike k3s, comes with an ecosystem of plugins to deal with most of the everyday cluster setups, like ingress, storage, observability, etc. SuSE tries to fill that gap with its excellent Rancher UI, but not really to the same extent as microk8s.

And then there is k0s. Which I guess Google's answer to the k3s/microk8s value proposition. It is distributed as a single binary that you can start/stop as a normal process on a linux box. And it has a very simple setup with low system requirements. But, in many ways k0s is quite different from both k3s and microk8s.

For one, k0s will run all of its internal components as separate processes. Moreover, it will readily let you replace any of its default components with whatever suits your use-case better. Also, it leans heavily on GitOps style infrastructure as code configuration rather than manual or semi-manual setups like k3s and microk8s do. K0s even has a tool to manage an entire kubernetes cluster in the same manner. 

In many ways k0s is much more geared towards real production systems than k3s while maintaining a small system footprint. Well, a smallest system footprint off all of them. That's the really cool thing about k0s actually. It's just a single binary you download off the internet and just run as an executable. There is literally nothing else involved.

## Who are those distros for?

I think a better way to think of the difference between those variants is to think who are the intended users. And here I must tread carefully. I'll speak in general terms here. Just keep in mind that any of these could be pushed quite a lot to achieve things they may or may not have been indent for. What I'm trying to say here is that if my description is not fitting because you had a better use for those systems than what I am saying here. All the power to you.

And so the vanilla k8s is a bit like an industrial chainsaw. Powerful, robust, with great enterprise grade support. But, it will also chop off your leg in two seconds if you not careful with the thing. I hope you get the meaning. A whole lot of real-world production infrastructure runs on k8s and for a good reason.

Don't get me wrong here, one can roll out vanilla k8s installation with Calico CNI on an ubuntu VM in the matter of minutes if one is really determined to do so. But, I believe that is not what it is was designed for, and the value will be questionable.

Quite in contrast to k8s, k3s is a lightweight, fully featured deployment that one can install and run with just one command. K3s is intended for developers and enthusiasts because it's a ready to use system that anyone can launch and use quickly. It is also very popular among IoT/edge deployments and homelabbers because of the low resource requirements. 

That is not to say that one cannot run a production deployment with k3s, there are certainly plenty of precedents of exactly that. But, it won't scale to the same massive level or provide same performance and reliability at scale as k8s.

Microk8s has a very similar intended use as k3s; it is a lightweight fully featured kubernetes deployment. They are actually mostly exactly the same when it comes to getting a bare bone kubernetes cluster up and running. Where they differ majorly is what happens after that. Because to have a kubernetes setup actually useful one will need to install additional components, such as distributed disk management, ingress controllers, telemetry, logging, etc etc.

K3s relies heavily on helms and basically manual installation by the system administrator/developer. They have the fantastic Rancher UI where one can install many of the standard components as "apps", but in reality one will need to spend a fair bit of time in a terminal with `kubectl` loading manifests to make k3s actually useable.

Microk8s takes a slightly different approach to that problem and provides an ecosystem of addons that can enable all the necessary additional functionality by using the `microk8s` CLI as basically a set of one liners. It is very handy in terms of getting a standard system up and running, but it also will obscure what actually happens to the system away. Also freshness and stability of those addons varies quite a bit, and when they don't work that quickly becomes more of a problem than a solution.

Now, k0s is marketed very similarly to k3s and microk8s as a lightweight kubernetes variant, but the intended niche and users are quite different to the other two. k0s is developed in partnership with Google by Mirantis, the company behind OpenStack and Lense. It is actually intended for production use in smaller installations where k8s might be an overkill, such as small to mid-size businesses  and projects.

Just like k3s and microk8s, k0s aims to reduce the deployment friction for kubernetes installations, but instead of leaning on an opinionated flavour it provides an open box design and GitOps style configuration and integration so that a system administrator could create a repeatable deployment system rather than rely on had build snowflakes like k3s and microk8s.

Again, it's not like one can't use infrastructure as code approach with k3s or microk8s, there are definitely solutions for those. But, in case k0s it's integrated into the project and that's the whole selling point of their system. I guess not unsimilar to Talos, but unlike Talos it is a much more flexible setup that leans on existing standards rather than creates a 3rd party configuration DSL. If that makes sense.

## Speaking of resources

All three variations, k3s, microk8s, and k0s are advertised as systems with low resources requirements. And that is definitely true when compared to the original k8s deployments.

Having run all three of them on several sets of hardware I actually think there are some differences between them. They are not huge, and mileage might differ, but from my personal experience I would grade them as such:

```
k3s > Microk8s > k0s
```

As in k3s being the heaviest of the three. Which is the complete opposite of what I have expected given how long k3s has been around and how heavily it advertises this exact aspect.

This probably doesn't matter much if your workloads are chugging through CPUs. But, if your systems spend a lot of time idling--like a lot of homelabs do--maybe this is something worth pondering about.

And so, in my experience k3s consumed noticeably more CPUs than microk8s when idle. And, it also had creeping memory consumption that expanded up to 1GB on occasion, where microk8s stayed in the ~400-600MB range consistently.

I suspect that k0s resource consumption will depend a lot on which components exactly you decide to run, but in my particular setup, which mirrors basically k3s/microk8s HA deployments, my k0s deployments consistently consumed less CPU and had stable low memory consumption within the 400-600MB range.

Again those are not dramatic differences by any stretch of imagination and I wouldn't pay too much attention to them unless your system idles a lot and you're using low powered devices to run your cluster.

## Homelab bottom line

I think a lot of this will depend on personal preferences and skill proficiency. But it will also depend on what you want to learn from using either of the flavours. And so, here is how I think about them in the context of a homelab.

If your intention is to actually learn kubernetes, tinker a lot, and maybe try wacky unusual setups. Especially if you're at that stage where you feel like spending a lot of time in terminal running commands manually is fun and teaches you a lot. In this case, I would definitely recommend k3s. It's open, lightweight, has great community around it, and tooling is fantastic too.

If all you want is a run off the mill standard kubes setup and you don't really want to look too much under the hood. Especially if you're an ubuntu fan. Try microk8s, its addons system will insulate you from many pain points and give you a stable work horse of a setup.

If you are over feeding kubes manifests by hands, and you want something more serious, flexible, and repeatable. Maybe it's time for k0s. I did my last setup with it and i like it a lot for that exact reason. I'm a big fan of infra as code, and bringing that same mentality to the kubernetes cluster setup as a whole sits very well with me.

Or,  look at Talos... I know it's not really on the list here. But, I find there are a lot of parallels between talos and k0s. The difference is that talos takes it a notch further by taking over the entire OS. Which is a great idea, but it comes at a cost of extra configuration DSL that you need to learn and manage. And also you won't be able to do anything else with your hosts either. And that's why didn't really include it on the list.  Because all four flavours will run on basically any linux distribution of your choice, and Talos doesn't particularly fit into that equation. Still it's a great option if you want to take it even further.

And that's all I have for you today, folks.

Please like and subscribe.

Just kidding.



