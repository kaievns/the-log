---
slug: xMLqU
date: 1 May 2023
title: Risk management fundamentals
description: Diving into the basics of risk management, tools and tactics
thumbnail: ./images/risk-management.png
tags:
  - management
  - leadership
  - strategy
medium:
  tags:
    - Engineering management
    - Technical leadership
    - Risk management
    - Strategy
  id: 35d7eae04d61
---

Lets talk about some boring stuff. The one that saves lives and companies alike.
The risk management. However critical this topic seems, it's surprisingly rarely
taught to new managers, especially those promoted to engineering management from
technical leads without formal education.

People skills and technical chops are great, but if we keep doing less than
stellar things with risk management we will be net negative long term. Today I'm
here to share what I have gathered so far on the subject.

## What _is_ risk?

Whatever you do in life, you take a risk. You step outside, you risk getting hit
by a bus. You apply for a job, you risk being rejected. You breath in, you risk
getting infected. Literally everything you do involves risks. Even when you
don't do anything you risk missing opportunities. And that makes risks almost
invisible to our minds; something we don't really like thinking about much.

In the most simplified way, we could say that a risk is a likelihood of a loss;
material, emotional, or any other. A risk always involves two things: damage and
probability. And that is exactly how it's defined in most industries.

Here is a typical risk classification table. On one axis we have probability on
the other there is the severity of a loss. Add two and two together and you have
a risk classification.

|                    | unlikely | probable | likely  | certain |
| ------------------ | -------- | -------- | ------- | ------- |
| no damage          | low      | low      | low     | low     |
| mildly destructive | low      | medium   | medium  | high    |
| significant damage | medium   | high     | high    | extreme |
| critical failure   | extreme  | extreme  | extreme | extreme |

Based on such risks classification a manager would normally produce a document
called **a risk register**. Which is more or less one of the most important
documents any manager supposed to maintain and communicate across the company.
It looks somewhat like so:

| Details          | Risk level | Cause             | Mitigation      |
| ---------------- | ---------- | ----------------- | --------------- |
| We get hacked    | extreme    | sloppy practices  | enforce quality |
| We have no money | extreme    | we make no money  | make sure we do |
| Dave gets upset  | low        | Dave is sensitive | give him a hug  |

Here is the thing though. A risk register, although a critical piece of
documentation, is just a useless cover-my-back proclamation if it is not paired
with sensible risk management practices and sound decision making. And that is
what we will be looking at in the rest of this article.

## Asymmetric risks

A risk is only one side of the story. The other one is a reward. There is always
one. And when you pair a risk and a reward, you have what's called **a risk to
reward ratio**.

Life being a messy endeavour, risks and rewards almost never come in equal
proportions; usually one is larger than the other. In cases when the risk is
significantly larger than the reward, it is called an asymmetric risk.

As you have probably guessed, taking asymmetric risks is not a very smart idea,
especially in a business setting where there are people and money on the line.
Generally speaking, there are two common scenarios at play when it comes to
asymmetric risks.

The first and the most common case is that risks are well understood and
documented, but rewards are not. I know, it's ironic, but, you'd be surprised
how often this happens. Comparing risks to rewards is messy work, so rewards
sometimes are glossed over.

If the reward is not well understood, it could as well be assumed to be
negligible. And in this case even low risk situations repeated often enough can
have dare consequences. A worthy goal is always a good thing to have.

The second case is on the opposite side of the scale: high risks. Generally
speaking, unless it's a life and death situation, taking high and extreme risks
is not a very smart idea regardless of the reward. In blunt terms, if the risk
ruins the company, that's not a very smart idea however you turn it.

## Compounding risks

Another part of the nature of risks that often poorly understood is that risks
compound. Risks are probabilistic, and hence the probability of independent risk
events add up:

```
P(a or b) = P(a) + P(b)
```

If say a risk register contains a dozen of independent medium risks, we are not
looking at a medium risk on average, we are looking at medium multiplied by 12.
Which means that something terrible is bound to happen sooner or later.

This rule is particularly important in software engineering industry where risk
taking can, and often is, automated. If somebody scripted a low risk process and
runs it 1000 times per minute. That's not a low risk. The law of averages does
not apply here. The runaway AWS charges is a good example of this phenomena.

The most dangerous thing about compounded risks in the context of a software
engineering team is that a risks profile contains multiple independent
asynchronous risk factors, but your dealing with the aftermath is mostly
synchronous and single channelled. You can't divert a team to the next fire
until they have done with the first one.

Teams that made this mistake are always easy to spot, because they spend half of
their time putting the fires down, or playing wack-a-mole with their bug
reports. Multiple independent risk vectors, and one team to fix them all.
Welcome to the compounded risks hell.

## Drift into a failure

Nod if you have seen this story before. Something terrible happened, and then
one of the following happens:

- the person responsible gets a bad kitty treatment and everyone moves on
- a postmortem conducted, everyone concludes "shit happens" and moves on
- the team is whipped into performance by their boss and everyone moves on

A cycle or two later the same thing happens, and then again, and then again.
Everyone is just struck by this weirdest case of amnesia. It's like a ground hog
day, except no one remembers anything. Well, your boss and your investors
probably do.

This happens _a lot_. Everyone I know can recall a handful of examples like
that. It's a common dynamic, and the nature of it is quite simple. Every time
something terrible happens it creates a benchmark for us, a new threshold for
what we consider normal. And this continuous shift in perception of normalcy can
happen unnoticed for very long time.

When something abnormal happens we instinctively seek explanations. And the
easiest explanation of them all is: _"it's [name] fault. but they're alright.
they won't do it again. Lets just give them some space and move on."_

I'm here to tell you that this is a BS. A human failure is always a result of a
faulty system they operate in. People don't make mistakes because they're are
dumb, people make mistakes because systems allow for mistakes to happen. But,
because risks are probabilistic we somehow miss the fact that failures are
random and attribute them to a person who happened to be there when they occur.

When that happens and continues unchallenged, the overall system starts drifting
into an eventual failure.

## The essence of risk management

And that brings us to the point of risk management.

A manager has one job, to make sure that their team wins; repeatedly and
consistently. This one job is a rather complex one and involves building a
_system_ around people that will create a conducive to winning environment.

Sensible risks management is a critical part of building this system. Risks are
probabilistic, but given enough opportunities to try, what could fail will fail.
And that is the general mindset that we need to adopt when managing risks; that
failures _will_ happen.

There are three aspects of any decent risk management strategy: minimisation,
controls, and containment.

By risk **minimisation** we mean exactly what it says: minimizing the size of
the risk register. While it is true that we always need to risk something to
gain something, not all the risks _have to_ be taken. Avoiding taking
unnecessary risks is an art form, and needs to be part of any serious strategic
context. Partitioning risks to limit the blast radius is another useful tactic
in this group.

By **controls** we mean reducing the _probability_ of a risk occurrence. Some
risks are unavoidable. For example we have to deploy new applications, and that
comes with a risk of damaging the current operational environment. We can
_control_ this risk by automating deployments, writing tests, and employing
sensible continuous delivery practices.

And finally, by **containment** we mean a set of processes directed to dealing
with the aftermath of a failure. The basic idea here is that having the team
unprepared for dealing with a failure is a risk on its own. Preventing cascading
failures is another element in this category.

## Final notes

Risk management is a rather extensive topic and wouldn't fit into a single
article even if I could express it all. But, I hope this gave you a general idea
what it's all about and what tools you have at your disposal.

Thinking about risks requires a rather different mindset. One needs to think of
risks more as if they have already happened and less as a distant possibility.
And I think it's a healthy way to approach managerial responsibilities in
general.

We can even think of running a business as a whole as an exercise in risk
management and think about it this way: the team does the actual work, and the
manager manages the risks. So that the team could focus on doing their best work
rather than dealing with failures.

And in that light, risk management practices go way beyond managing operational
or delivery failures. All the agile practices are essentially about managing the
risks of investing development time. A good people strategy is essentially about
managing the risks of turnover. Building a good company culture is about
managing the risks associated with disagreements. The list goes on and on.

Once you start thinking of your managerial job in terms of risk management --
rather than people, technology, and processes management -- your managerial
responsibilities will start coming to you much more naturally. And it is this
risk management mindset that will eventually prepare you to take on a more
strategic role in an organisation.
