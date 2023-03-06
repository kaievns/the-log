---
slug: i8lyo
date: 6 March 2023
title: Life without estimations
description: Part two of the estimations rant
thumbnail: ./images/no-estimations.png
tags:
    - management
    - leadership
    - planning
    - agile
---

Welcome to the part two of our little estimations chat. Having committed some
rather [strongly worded criticism](/posts/3OvR4) of the ubiquitous practice of
estimating everything that moves in software engineering, I feel strongly that I
shan't leave without offering an alternative. Hence, the part two.

Let's just dive into this.

## Why do we estimate anyway?

If we get to the bottom of it, the role of a manager is to manage resources. As
in to make sure resources are not wasted on useless efforts. And managers have
their own bosses. And those bosses tend to be allergic to sophistry. Bosses want
to see a progress. And they want to see it in basic fonts, black and white
colours, and preferably with some numbers. Which is actually fair, because the
boss's job is to make sure that the bottom line moves.

The technical term for this is "accountability". Which means, that a manager
should be able to _account for_ what is going on in their area of
responsibility. And when the manager can answer the question of _when_ something
will be done, they might even feel good about themselves for a moment.

And because of the ever present scrum practices and tools like Jira, managers
have some numbers that they can latch onto. And that is where the BS bingo
sessions start.

> _Developer_: I have no idea, so I better double the number
>
> _Manager_: Those devs have no idea, so I better double their estimate
>
> _Boss_: Managers fail to deliver 60% of the time, so I better double it
>
> _Customer_: They have no idea, so I'll just complain until it's done

Everyone wants certainty. Predictability in life makes us all feel warm and
fuzzy on the inside. And so we estimate, to feed our need for certainty with
estimations. The problem is though, that in software engineering -- especially
in disruptive software engineering -- there is no such thing as certainty.

## Do we _have to_ estimate?

Unlike a factory floor where you can measure repeated work, and estimate, and
assign confidence levels. In software engineering, most products have virtually
zero marginal cost and need to be produced only once. Which means, that, in
practice, all work is really done for the first time, every time.

Physicists have a good joke about this. They say that _the accuracy of a
singular measurement is equal to zero_.

Everyone knows that those estimations are less than stellar, and the question we
should be asking is this: do we really _have to_ estimate? And, I think the
answer is a little bit more complex than **yes** or **no**. And it is complex
because there are two separate problems here: budgeting and commitments.

Budgeting is internal, it is ultimately about resources allocation. And I
strongly on the side that one doesn't need estimations to make solid progress.
Actually, estimations will hinder the progress more than help.

Commitments are external by nature. But, again not all commitments are made
equal. What we really want to think about is the _high integrity_ commitments.
And for those we will need a deadline and estimations. But, generally speaking,
we don't have to. More on this later.

## Beyond budgeting

In most companies that I've seen that wield estimations as a weapon, estimations
is essentially a form of budgeting. And from some perspective it actually makes
sense. Nobody wants to spend too much on something. There are two major problems
with this approach though.

Firstly, budgeting turns a development team essentially into an internal agency;
a cost center. Instead of actively working _on the business_, and contributing
to the bottom line, they are providing services to the company. And they are
expected to do so on time and budget, or else. It is credulous to expect optimal
performance and people caring for the company mission in this environment.

Secondly, our opinions on how long work should take have literally zero impact
on how long it will actually take. And if your company is in the business of
innovation -- like most modern software engineering companies are -- the bulk of
work that engineers do is the mission critical work; work that _has to be done_
regardless of any estimations.

Think about it this way. Since nobody really knows how long work will actually
take, there are really only two scenarios that can play out when a company
starts budgeting engineering efforts. Either engineering efforts will be
underpowered because of lack of resources, and that will hinder the overall
company mission. Or, if you give them a generous padding, it will give the
engineers a permission to spend time gold plating everything that moves once
they've done with the critical work. The technical term for both cases is a
failure in resource allocation.

You see, the truth is simple, the biggest risk any technology company has is not
budgetary. The biggest risk all of them have is that they will build the wrong
product. And the company is much more likely to push their team towards building
the wrong product by budgeting their efforts. The road to hell really is paved
with the best intentions.

## High integrity commitments

Fortunately, we don't live in the lala land. There are partners, public
launches, contractual obligations, regulatory requirements, and a whole slew of
other factors that require us to deliver on time. Meaning _we have to estimate_
those.

When you're facing such situations, do what the U.S. army does. Triple the
estimations, and then triple them again. You should have redundancy, contingency
plans, and at least two escape hatches. It is expected that your customer will
be charged a premium for the predictability of the delivery.

Here is the rub though. Unless you're shipping a video game on physical disks,
or something similar, those situations are quite rare in the grand schema of
things. Moreover, those situations _can be drastically reduced_ in number if a
company puts an effort to it.

Dependencies a pain on manager's existence, but they are more often than not
mailable. Delivery schedules between teams can be negotiated and amended.
Contingency plans worked out. Contracts with external parties can be made less
demanding. Regulatory compliance work can be started way in advance.

And who needs public launches those days? All they do is fill up the PR
companies pockets and tickle the founders egos. Customer acquisition is a long
term gruelling work that doesn't happen overnight because of a public launch.

It is going to sound rather counter intuitive, but by eliminating high integrity
commitments and estimations, we can remove paddings and deliver things cheaper
and faster, the agile way. Because we will focus on building only what's
necessary; iteratively.

And that is why the bulk of the industry is moving towards continuous delivery
those days rather than keep failing deadlines.

## Consider consistency

When it comes to accountability the vast majority of companies that struggle
with estimations have it backwards. Usually, this coincides with "visionary"
leadership within the company. Visionary leadership and estimations drama go
hand and hand because of the inherent dynamic in the decisions making within the
company, and it usually sounds like so:

> _Boss_: I have this idea, how much will it cost me to build?

And here is our whole problem in a nut shell. We estimate an idea that has no
market proof with tools that have no working math under them. And we do all that
while treating literally the smartest people in the company as orders takers. No
wonder that 90% of startups fail.

The reason I think it is backwards is because business value -- more
specifically customer value -- cannot be assigned, it can be only discovered.
So, what we really need to ask is this:

> _Team_: what is the best we can do for our customers in the next 2-3 weeks?

In this case we still have to get a rough estimate of a goal, but the point is
completely reversed. Instead of thinking of how much something will cost
upfront, we think about how much user value we can ship in an iteration. We set
a goal to achieve, and once that is done, the actual realised cost doesn't
matter all that much any more.

Once we start thinking in goals and iterations; experiments ideally. We start
moving towards consistency. Eventually, we will know that we are going to ship
something useful to the customer on every iteration; every 2-3 weeks.

And that is where the agile/LEAN/XP methodology starts to shine. Once a team is
focused on a specific goal to achieve on a regular basis, there are ways to
deliver on those goals consistently with a roughly 30-50% buffer.

Yes, you heard that right: 30-50% buffer, not doubling estimations and then
doubling them again.

## Planning with iterations in mind

At this point, an observant reader is probably thinking to themselves. _Didn't
we come a whole circle? First, I've spent so much time bashing on estimations,
and then told you to estimate anyway._ And in a way you're not wrong. But, there
is a key difference, and I hope you're starting to see it by now.

> all plans eventually fail, but planning is essential
>
> -- <cite>an old military saying</cite>

When you estimate to deliver on time and budget, you are forced to stick with
the original plan, because you make commitments. And, as you know by now, that
plan doesn't usually have any solid reasons to succeed. Sooner or later you're
going to disappoint either your boss or your developers.

When you're estimating a goal, the actual plan specifics and the estimations
don't matter. What really matters is reaching the goal of the iteration, because
you have all agreed that this is the best value you can deliver right now. You
actually can throw the plan and estimations away mid-iteration -- or at any
point really -- and make a new plan. Sometimes you find another way towards the
goal, and sometimes you realise that the goal or your approach was less than
great. So you just abandon the goal with the minimal financial impact and move
onto the next one.

The ultimate destination we are striving for here is to start thinking about the
delivery as a series of experiments. Each taking say roughly 2-3 weeks of
effort. And you normally might want to have a few milestones on the way. Ideally
your team should ship something to production on a daily basis.

To achieve this type of consistent output, rather than estimating better, the
team will need to spend enough time in discovery and experimentation, and then
setting up their own goals. That's why we prefer to refer to those ideally as
experiments rather than iterations.

Let me stress this again, a team might or might not formally estimate, they
might do this with whatever granularity and accuracy they want. In fact, if the
team produces estimations, those numbers should not leave the team boundaries;
because they're meaningless outside of the team. All that matters is a rough
plan that has all the critical work mapped out, and an agreement that the goal
is worth pursuing. With that in mind, the work should be allowed to take as much
as it will take.

Such is the agile way.

## Reporting without estimations

Well, that's all nice and dandy, but what about the boss and the fortnightly
reports? What do we report if there are no estimations?

Truth be told, if your boss has any brains, they know that until the work is
actually done, your estimations are just promises; often baseless ones. What
they really want to see is that you are progressing towards your goals
consistently, and how these goals align with the current business strategy.

I know a lot of agile practitioners don't like the word "roadmap", and for good
reasons. But, a decent roadmap or a gantt chart can do wonders as a reporting
tool as long as everyone understands that it represents an evolving picture. In
the end, what you need is to formulate a working hypothesis that consists of a
series of experiments/iterations. It doesn't need to be highly detailed or look
far into the future, but it needs to make sense and align with the overall
company strategy and goals.

If your roadmap/gantt chart consists of a series of roughly two weeks
iterations, and you report on fortnightly basis, you will tick a box -- a.k.a
demonstrate progress -- in almost every report. If an iteration is not
completed, eyeball its completeness based on the number of finished milestones.
That will give everyone a clear idea how you're progressing. And if you can make
it visual and consumable in 10 seconds, that's the best case scenario.

Remember, unless it's a _high integrity commitment_ you don't have to say when
it will land. In fact, you should flat out refuse to answer the question. Show
the progress, and completeness levels of your iterations. People might _infer_
their own estimations based on this information, but that is a very different
thing from making _promises_ on behalf of the team. You don't have to commit to
somebody's inferences no matter how badly they want the outcomes.

Trust me, you will gain much more trust and respect with your boss and your
peers by keeping them in the loop of a dynamically evolving situation, rather
than making unrealistic promises and then running the team around the clock to
deliver.

## Engineer's performance without estimations

The last point I want to address here is engineers performance measurement.
Given my background in software engineering, I tend to be rather direct on the
subject. But, this topic is regularly raised whether I like it or not. So, lets
dive into this quickly.

It is a misconception that engineers don't like to be measured. That is not true
at all. They just don't like to be measured in stupid ways, especially measured
negatively in stupid ways. The number of lines of code, scrum points delivered,
and accuracy of estimations, are universally hated by all engineers as a
measurement of their output for this exact reason.

Over the years a lot has been said about attempts to measure results of creative
work with quantifiable metrics. And yet, managers keep routinely asking
basically the same imprudent question: "If I don't hold developers accountable
to delivering on estimations, how am I supposed to track their performance?".

If that's you, then let me level with you here for a second, friend. It is you
the manager who is _accountable_ for what the team is doing, not the developers.
Developers are ICs and they are here to build stuff. Don't shift your direct
responsibilities on them, nobody is going to love you for that.

In fact, how do you know that when a developer ships on time they are performing
optimally? Maybe they overestimate and then just pretend to be busy. Or, how do
you even know that they're doing what they're supposed to do when they sit next
to you in the office? How do you know they're not just writing a poignant haiku
in CSS right now, because they're pissed at your attempts to police their work?
That's right, you don't.

The only reliable way to make sure software engineers are doing their best is to
give them interesting, well defined, and meaningful work to do, and then empower
them to make their own decisions.

So, don't ask developers how much it will cost to build your idea. They are not
here to enact your Steve Jobs fantasy. Feed them the strategic context, make
sure they understand the importance of their work, and then let them choose
their own goals.

If you really _have to_ measure developers performance, and there is no way
around this in your organisation, then do it properly through peer and
stakeholder feedback. People will always tell you what the numbers can't.

## Wrapping up

In a contemporary product team environment, the product is never done. In the
environment of ever changing competitive landscape and user preferences, market
fit is everything. Which means that shipping what the users want is the only
thing that really matters.

In this context the best way forward is to obsess over figuring out what is the
right thing to build and prioritising that which delivers the most user value.
The goal is to get into the market as quickly as possible, and deliver as much
user value as possible.

Because software has virtually zero marginal cost; also known as the cost of
producing an additional item. As long as the company produces software that the
user wants, and there is enough market, the actual production cost doesn't
matter all that much. And that means estimations don't really add a whole lot of
value to the process.

I understand that this sounds rather blasphemous to those running the business,
because in the end of the day there is a budget, investors, and partnerships
involved. But, at the same time, you know that I am not wrong. The only way to
build a stable cash flow is to build something that customers value and ready to
pay for. And the faster we do that the faster the financials will improve. Which
means that maximising the customer value is vastly more important than
controlling the production costs.

And in that light what a business really should control is that the customer
research is religiously conducted, critical work is visibly mapped out, and the
team consistently builds the most important item in every iteration. That is the
path to optimal performance.

In the end of the day running a business is an exercise in risk management, and
the biggest risk any software business has is not that _some_ work might take
300% longer than expected, the biggest risk is that the team would build a wrong
product. Consistent iterative development is the tool that allows the businesses
to course correct and make sure that doesn't happen.

There is a place for estimations. They can be used effectively to _eyeball_
whether a goal fits an iteration cycle. Or as a rough idea for a high integrity
commitments planning. We can even constructively use comparisons between the
estimations and reality as a guide whether the team does enough discovery work.

But, when estimations turn into a bludgeoning weapon and used to routinely
answer the question of _when_ something will be done, that is where teams loose
the sight of what's really important and start getting themselves into troubles.

> It ain’t what you don’t know that gets you into trouble. It’s what you know
> for sure that just ain’t so.
>
> -- <cite>Mark Twain</cite>
