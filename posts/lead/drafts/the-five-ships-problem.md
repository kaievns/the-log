---
title: The five ships problem
draft: true
---

A typical scrum sprint would have a variety of tasks. Some user stories, some
bug fixes, ongoing UI improvements, performance and security patches, and all
sorts of other tasks. And the engineers are expected to pick them one by one and
deliver as they go.

There is an old thought experiment that contradicts this approach to work. I
like to occasionally throw it around to test POs/TLs process thinking. And
weirdly enough a lot of them fail at the experiment; or they give the right
answer, but keep sticking to the opposite practices in their day job.

As they say, no amount of proof will change the minds of true believers. So, I'm
not here to change anyone's mind. I'm just sharing an idea.

## The five ships problem

Imagine there are five ships in a dock that need unloading, and you have 5
people to do the job.

<!-- ![Initial state](./images/five-ships-empty.png) -->

It takes a person roughly 5 days give or take to unload a ship. And you can
assign multiple people to the same ship if you want to.

And so the question is, how would you assign people to those five ships and why?
On one end of the spectrum you would assign each person individually to each
ship and let them work in parallel. On the ether end you assign all five people
to one ship and let them work through the ships one by one.

<!-- ![Available options](./images/five-ships-options.png) -->

Take a moment and think about it. How would you approach this task?

## The reasoning

So, yeah, I know, I rarely stop and think for myself either. Why bother if the
author will give the answer anyway, right?

Okay, last chance.

And so, the right answer is to assign all 5 of them to one ship at a time.

I know, it seems like in a theoretical scenario like this one, there should be
no difference. But, there is one, and it has to do with probabilities.

If you red my [rant about estimations](/posts/3OvR4), you know that estimations
have an asymmetric probabilities curve, and work on average takes longer than
estimated. And even if you had a normal distribution you would still have a
50/50 chance that it would take more than 5 days for a person to unload a ship.

And so, if you would assign one person per ship, in 5 days, you would have 2.5
disappointed ship captains. More likely 3 or 4 of them actually. All while
taking valuable space in the dock to keep all 5 ships moored for a week. Which
means extra expenses for the docking company.

On the other hand, if you assign all 5 people per ship. You're most likely going
to unload 4 out of 5 ships on time. But you're also going to unload the first
three ships _ahead of time_. Which no doubt will delight the captains, and let
the dock to kick them out sooner.

And so the real choice is not in how many people should be assigned to a ship.
The real choice is this:

1. 2-3 pissed off customers and full inventory overheads
2. 2-3 extra happy customers and less inventory overheads

Yes, it's a trick question, there is no real choice.

## The mythical man month

One of the most provocative software projects management books ever written is
probably "the mythical man month". I consider it a great piece of engineering
management satire, and it has this famous graph:

<!-- ![Mythical man month](./images/people-vs-children.png) -->

This graph describes a child birth and shows the dependency between the number
of people involved in labour and the number of children delivered.

Yes, it's a joke. But, some people take this picture at the face value and use
it as a proof that teamwork in software engineering is basically stupid.

Truth be told, I actually have a guilty habit of giving this book to read to new
tech leads and engineering managers as part of my coaching. It's a test. I want
to see if the person will understand the irony, or if they will start quoting
the book verbatim.

And to be frank, working in a team can be taxing indeed. As a very introvertive
friend of mine likes to joke: _"I didn't get into software engineering to work
with other people"_.

But then again. Even if you assign one person to a user story, they will work on
tasks one by one, won't they? And many of those tasks can be parallelised,
because it's vertical slicing and there are layers.

## Team goals

The point of this idea is quite simple. Multi-tasking is counter productive not
just for individuals, but for the teams as well. It is counter intuitive because
it _feels_ like you're getting more done, but you really don't.

While unlike an individual we could or could not make a strong case for the
context-switch overheads, one thing is certain a focused approach to delivering
value to a customer as fast as possible is important. And, it is even more
important in an agile team context, because unlike ships in the dock there are
priorities. Focusing on delivering the highest priority items first through a
group effort is the key.

Ideally, a team needs to move away from treating the backlog as a bucket of
random things to do, and start thinking about _team goals_ instead. What the
team is shipping in each iteration.

Although this might sound like an anti-scrum propaganda, I'm not making the case
against off the shelf agile practices here. Team goals can still be split into
user stories and tasks.

The point is that there is more than one way to split work into user stories and
tickets. And all too often this split happens to facilitate independent work
between the team members, which is counter productive. The same work could be,
in many cases, organised in a way to involve most of the team in parallel. Even
an assortment random bug fixes could be bucketed together into a team based bug
squash session.

Not only this will get the work done faster, it also will reduce cascading
failure risks, as well as improve the team cohesion by feeding their collective
sense of achievement.

## Beyond the teams

This story goes beyond specific teams and feeds into the overall organisation
design. It's a rather nebulous topic, but I will touch on it very briefly here.

Once we go beyond a single team and start considering the entire organisation
context, we inevitably going to start talking about LEAN/Agile and the
ubiquitous spotify model. All of those revolve around the idea of a value
stream.

In that context a value stream is essentially a sequence of team goals attached
to a specific theme, like auth, or content, or billing. The work is iterative
and goes one step at a time. And if a team starts meandering between multiple
goals, that's generally considered a sign that the value steam slicing could be
better.
