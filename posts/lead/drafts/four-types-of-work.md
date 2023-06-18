---
slug: LZcMc
title: The four types of work
draft: true
---

I've seen I fair few new technology leaders and engineering managers at work,
and, by far, the most common scenario where they struggle is to manage work
priorities. New leaders often take delivery management rather literally, and
when faced business pressures, they cram the roadmap with features. And, that
plan inevitably fails.

To be fair, experience comes with experience, and one needs to make mistakes to
learn. Knowing the problem is half if a battle though. And so today, I'll try to
put together a framework for thinking about work that is on the plate, how to
prioritise it, and ultimately, well, manage better.

## The four types of work

The concept of four types of work was popularised in the software engineering
community by the book called "the phoenix project". Although, technically, the
idea was lifted--as most of the book--from another book called "The Goal" by
Eliyahu Goldratt.

The point they're trying to make is quite simple. Generally speaking there are
four types of work in any organisation:

- Business projects
- Internal projects
- Operational projects
- Unplanned work

Which is probably rather vague when applied to the software engineering context.
So, allow me to frivolously translate that into the terms we all can relate to.

- Product features development
- Core technology development
- Optimisations (cost, skills, reliability, performance, etc)
- Putting the fires down

The point of this model is that those four types of work are always present no
matter the business or product. And if a roadmap only consists of features, the
other types of work don't simply disappear. Instead the work goes invisible, and
that inevitably derails the actual features development.

## Another way to slice it

There is a bit of a problem with this model when it's applied to software
engineering teams. Because when we try to implement it verbatim, here is how
stakeholders see this list:

- Features development <- stuff you supposed to do!
- Core technology <- gold plating
- Optimisations <- unnecessary, supposed to magically happen by default
- Firefighting <- basically engineering fuck-ups and avoidable heroics

As you can see, unless your roadmap is not 90% filled with features, this
categorisation might not necessarily be conducive to happy planning and
execution. And so people try another way to slice the cake.

For example, a common strategy is to slice work into categories based on two
dichotomies: Planned/Unplanned and Business/Maintenance work.

```
                 |
  Unplanned      |     Planned
  Business       |     Business
                 |
-----------------+------------------
                 |
  Unplanned      |     Planned
  Maintenance    |     Maintenance
                 |
```

This puts most of the work on a sort of even footing, and although there is
still the business/maintenance division, it is much easier to reason about. It's
all just work on one field.

## The prioritisation game

Whichever categorisation system we choose, the next step is normally to
negotiate percentage allocations for each category. For example:

- Planned business work (aka the roadmap) - 50%
- Unplanned business (aka customer feedback) - 30%
- Maintenance work (aka make engineers shut up) - 20%

And this is where everyone gets lost in the sauce a bit. Each successful company
claims to find the perfect ratio. Google was famous for having 20% time
allocated for "other stuff", and such.

If your company does something similar, this is a huge step forward from the
status quo: the invisible work. But unfortunately, it doesn't quite work all
that great because there are two problems to this system.

Firstly, a lot of tasks don't fit neatly into those categories. Moreover, people
have a tendency to _present_ the work they really want to do as the number one
category, the roadmap, even though it's not really that.

The second problem is that those percent allocations are rather subjective. The
optimal percentage allocation will differ greatly on the operational context,
business pressures, state of technology, etc. Moreover, it will constantly shift
with time as a project/product evolves.

## Lost in translation

While engineering time is always in a limited supply, and it's understandable
why someone would like to have guarantees over budget allocation for their own
priorities, these work categorisation frameworks were never meant to be used
like a bargaining chip.

Somehow the original intent of the four types of work was lost in translation.

The original idea of this categorisation was part of the constraints theory that
Eliyahu Goldratt was developing. He was an exceptional systems thinker and he
meant this framework to serve as a guide for production optimisation. More
specifically he saw this as a process of increasing business profits

```
profit = throughput - inventory - operational expenses
```

And so the original meaning of the four types of work was to improve the
throughput, reduce inventory, and reduce the operational expenses. Not to
preallocate time for specific types of work.

## Lets try again

Lets bring the original classification back and see how it works:

- Business projects
- Internal projects
- Operational improvements
- Unplanned projects

The idea is to maximise production volume _while driving the cost down_. The
product itself was never the point in this framework. Building a system that
maximises the product output and drives costs down was. And that puts the whole
system upside down.

Normally a company would put the product work at the top of their priorities.
While understandable, that might not actually be to the best interest of the
business. To put it simply if product is put ahead of operational efficiency it
won't necessarily result in profits.

And so, in Golratt's theory it was all about finding the system's constraints
that limit throughput and adds up the costs, and then addressing them. And to
that end the amount of work that goes into each category was supposed to be
_tracked_ not _preallocated_.

The unplanned work needs to be driven down as much as possible--preferably to
zero--through improving quality. Operational improvements should be the most
prioritised work, as they directly improve the bottom line. Second to that would
be internal projects that are aimed at reducing the inventory (aka the backlog
of unfinished work in our case).

## The crescendo

Well, and there you have it. It blows most uninitiated people's minds but the
most important work in any product company is not the product. The most
important work is the work that improves operational efficiency and reduces
unfinished work and firefighting (aka distractions). Because this work allows
the team to spend _more_ time on the product work, aka improve throughput.

If we walk into any modern manufacturing facility, this idea that operational
efficiency is the key is accepted as universal truth. In software engineering
though we're still look at the "quality, speed, cost" triangle and believe that
we have to pick two. That is not true, because better quality improves speed,
and the two of them together improve costs and throughput".

To put it in even simpler terms, there is no really product vs. everything else
division. _All useful work_ is essentially product work. It's either about
making the product or building a system to _make more product_. And the last one
should always be a priority because it makes more impact on the bottom line than
the product development itself.

And that is as good of a work prioritisation guidance as you will get in a
while:

1. Reduce the unplanned work to virtually zero
2. Prioritise work that makes the team spend more time on building the product
3. Spend everything else on building the actual product
4. Things that don't add to either the product directly, or to making more
   product should not be on the backlog, end of story
