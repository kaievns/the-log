---
title: The five ships problem
draft: true
---

We talk a lot about vertical vs. horizontal slicing. We write user stories that
encapsulate multiple architecture layers to define _user value_. And then we
hire a whole bunch of full-stack engineers and spread those stories among the
team members.

A typical scrum sprit would usually contain a variety of those stories, plus
random bug fixes, UI improvements, performance patches, and a whole lot of other
tasks. And the team members would just grab them one by one as they go.

There is an old thought experiment that contradicts this approach to work. I
like to occasionally throw it around to test POs/TLs process thinking. And
weirdly enough a lot of them fail at the experiment; or they give the right
answer, but keep sticking to the opposite practice in their day job.

As they say, no amount of proof will change the minds of true believers. So, I'm
not here to change anyone's mind. I'm just sharing an idea.

But, before we go, the credit for this idea should go where it's due. I don't
know who's the author of this experiment, but I red about it first in a book
called "beyond the goal", and it's easily one of my top 5 management books of
all times.

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

And yeah, it's a trick question, there is no real choice.

## The mythical man month

One of the most provocative software projects management books ever written is
probably "the mythical man month". I consider it a great piece of management
satire, and it has this famous graph:

<!-- ![Mythical man month](./images/people-vs-children.png) -->

This graph describes a child birth and shows the dependency between the number
of people involved in labour and the number of children delivered.

Yes, it's a joke. But, some people take this picture for the face value and use
it as a proof that teamwork in software engineering is stupid.

Truth be told, I actually have a guilty habit of giving this book to read to new
tech leads and engineering managers as part of my coaching. It's a test. I want
to see if the person will understand the joke, or if they will start quoting the
book verbatim.

And to be frank, working in a team can be taxing indeed. As a very introvertive
friend of mine likes to joke: _"I didn't get into software engineering to work
with other people"_.

But then again. Even if you assign one person to a user story, they will work on
tasks one by one, won't they? And many of those tasks can be parallelised,
because it's vertical slicing and there are layers.

## Team goals

Okay, raise your hand if you ever been in a situation where you hand to say
something along the lines of: "erm... honestly, I have no idea. [the other team
member name] worked on this, go ask them".

Yeah, I know, it's all trick questions today isn't it? Every software engineer
was in this situation at least three times this week alone. But, wouldn't it be
amazing not to have this situation as a norm?

The answer to all of those questions is the same: "team goals"
