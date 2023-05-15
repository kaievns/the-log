---
slug: BfUL8
date: 15 May 2023
title: The inverse Conway's manoeuvre
description: An article about interdependency between architecture and org structure
thumbnail: ./images/inverse-conway.png
tags:
  - leadership
  - management
medium:
  tags:
    - Leadership
    - Management
    - Engineering management
    - Technical leadership
    - Strategy
  id: e92a18a200e9
---

Today we're going to be looking at an often forgotten topic: the interdependency
between the software architecture and an organisation structure; and how to use
that to one's advantage.

## Who is Conway?

There are two luminary people in software engineering named Conway who are often
mistakenly thought to be the same person. One is a british mathematician _John_
Conway famous for creating the
[game of life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life). And the
other one is _Melvin_ Conway an american computer scientist who postulated the
following idea:

> Organizations, who design systems, are constrained to produce designs which
> are copies of the communication structures of these organizations

Which eventually became known as the Conway's law.

## The Conway's law

What the Conway's law describes is the interdependency between an application
architecture and an organisational structure. Which is an important factor to
keep in mind when an organisation starts to run more than one team.

For example, if an application has a monolithic architecture then the team that
works on it will have to have a monolithic structure. If we try to run several
independent teams on an application like that, because of the internal
dependencies, that will inevitably create friction between these teams. And,
eventually, they will start _acting_ like one large team.

Conversely, if an application has a modular architecture like, for example,
microservices based architecture. That will land itself very well to be handled
by multiple independent teams.

If we look at this interdependency closely then some of the most common org
structure failings will start to make sense. Multiple independent teams working
on a monolith and stepping on each other toes. Or a single small team that
drowns in the maintenance overheads of running a microservices architecture.

Conway's law is quite ubiquitous, and it could be used to one's advantage.

## The inverse Conway's manoeuvre

In a traditional software development company we would see some Very Smart
People designing an application architecture. And then an engineering management
team would "execute" on that vision by creating teams to support that
architecture.

As the Conway's law demonstrates there is a clear dependency between the
architecture and an organisational structure. And, as such, that approach may or
may not work out in the company's favour; depending on whether the proposed
architecture matches the company's org structure.

This approach can, and should be flipped around. And that is where what's known
as the **inverse Conway's manoeuvre** comes in handy. The idea is that instead
of an architecture being handed down to the teams as a gospel, the teams
themselves should be structured _first_ in a way that would produce the needed
architecture.

The most common case scenario is that an org chart is created of small
independent teams attached to specific business value streams. And later, those
teams will produce a distributed architecture that reflects these teams
structure.

## The corollary

In the age of agile, architecture is a feeble master to serve. Because defining
architecture ahead of time in exact details is a cardinal sin akin to trying to
predict the future with product features. Sooner or later it will disappoint the
same way as waterfall practices do.

That does not mean that architectural patterns are a bad idea. It just means
that the system needs to evolve along side the product discovery process. And
since we don't know what the product will really look like after it meets the
markets, that predefined architecture will sooner or later will start getting in
the way of getting the work done.

In non-trivial cases architecture always follows the organisational structure,
and the organisational structure can be purposefully attached to the business
structure. And that structure will eventually put technology in the most
impactful position.

## A common use case

There is an interesting use-case where this tactic often used very successfully.
And that is dissolving a large monolithic application into microservices. The
case is more common that a rework of a legacy application. Most startups produce
monoliths as an MVP and then need to rework and scale their initial application.
Which is essentially the same problem structurally.

The way it normally goes is that a company hires some sort of a Very Smart
Person that will dive into the old monolith and produce a proposed microservices
based architecture. Then that new architecture is handed down to the original
team to implement.

The problem is that the Very Smart Person has no history with the application,
but the team does. They dutifully start chopping the monolith to pieces, and
then one of two scenarios occur. Either the team rebuilds the original monolith
into a distributed monolith. Or they call BS on the new architecture because
everything is hard; and then people start leaving. It's not that the proposed
architecture is bad, the Very Smart Person knows what they're doing after all.
The problem is that the architecture didn't match the way the original team was
operating.

A better approach is to partition the original team into independent squads.
Then let each squad take ownership over specific areas of the application. And
then let these squads tear the application apart along the lines of ownership.

Everyone complains the first month or two, because we have changed the way the
team used to operate. And that change started to show pain points when applied
to the old monolith. But, this pain also pushes the teams toward splitting the
old architecture as quickly and sensibly as possible. In most cases the teams
won't even need a Very Smart Person to guide them through the process.

We design the communication patterns _first_ (independent squads), and then we
let those communication patterns to drive architectural decisions.

## Wrapping up

The Conway's law is a great tool to have in your pocket whether you are an
engineering manager, or in the field of technical leadership. Scaling software
engineering organisations is surprising challenging and tools like that can get
very handy.

Also, if you liked this idea and want more, I can recommend diving into the
field of the devops topology, that have a lot more to offer.
