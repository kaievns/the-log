import{S as Yr,i as Fr,s as Kr,k as i,q as l,a as u,l as s,m as r,r as h,h as t,c as m,n as d,b as a,F as n,C as us}from"./index-920be987.js";const Qr="png",Gr=1200,Jr=600,Vr="srgb",Xr=3,$r="uchar",Zr=132,el=!1,tl="inch",nl=!0,ol=!1,al=1,il=void 0,sl=!0,rl=!1,ll=""+new URL("../assets/no-estimations-576bc7b6.png",import.meta.url).href,hl={format:Qr,width:Gr,height:Jr,space:Vr,channels:Xr,depth:$r,density:Zr,isProgressive:el,resolutionUnit:tl,hasProfile:nl,hasAlpha:ol,orientation:al,aspect:il,withoutEnlargement:sl,withoutReduction:rl,src:ll};function ul(zr){let y,ko,Z,Eo,_o,Dt,ee,Io,Rt,b,g,et,Po,zt,te,Ao,Yt,w,To,tt,xo,qo,nt,Wo,So,Ft,ne,Mo,Kt,p,oe,ot,Bo,Co,jo,ae,at,Oo,Ho,No,ie,it,Uo,Lo,Do,se,st,Ro,zo,Qt,re,Yo,Gt,v,k,rt,Fo,lt,Ko,Qo,Jt,le,Go,Vt,E,Jo,ht,Vo,Xo,Xt,f,$o,ut,Zo,ea,mt,ta,na,dt,oa,aa,$t,he,ia,Zt,_,sa,pt,ra,la,en,I,P,ft,ha,tn,ue,ua,nn,A,ma,ct,da,pa,on,T,fa,yt,ca,ya,an,me,wa,sn,de,va,rn,x,q,wt,ba,ln,W,ga,vt,ka,Ea,hn,pe,_a,un,S,Ia,bt,Pa,Aa,mn,fe,Ta,dn,ce,xa,pn,ye,qa,fn,we,Wa,cn,M,B,gt,Sa,yn,ve,Ma,wn,be,ge,kt,Ba,Ca,vn,ke,ja,bn,Ee,Oa,gn,_e,Ie,Et,Ha,Na,kn,Pe,Ua,En,Ae,La,_n,Te,Da,In,xe,Ra,Pn,C,j,_t,za,An,O,Ya,It,Fa,Ka,Tn,H,Pt,Qa,Ga,qe,Ja,At,Va,xn,We,Xa,qn,Se,$a,Wn,Me,Za,Sn,Be,ei,Mn,Ce,ti,Bn,je,ni,Cn,N,U,Tt,oi,jn,Oe,ai,On,He,ii,Hn,Ne,si,Nn,Ue,ri,Un,c,li,xt,hi,ui,qt,mi,di,Wt,pi,fi,Ln,Le,ci,Dn,L,D,St,yi,Rn,De,wi,zn,Re,vi,Yn,ze,bi,Fn,R,gi,Mt,ki,Ei,Kn,Ye,_i,Qn,Fe,Ii,Gn,Ke,Pi,Jn,z,Ai,Bt,Ti,xi,Vn,Y,F,Ct,qi,Xn,Qe,Wi,$n,Ge,Si,Zn,Je,Mi,eo,Ve,Bi,to,Xe,Ci,no,K,ji,jt,Oi,Hi,oo,Q,Ni,Ot,Ui,Li,ao,G,Di,Ht,Ri,zi,io,J,Nt,Yi,Fi,$e,Ki,Ut,Qi;return{c(){y=i("p"),ko=l(`Welcome to the part two of our little estimations chat. Having committed some
rather `),Z=i("a"),Eo=l("strongly worded criticism"),_o=l(` of the ubiquitous practice of
estimating everything that moves in software engineering, I feel strongly that I
shan’t leave without offering an alternative. Hence, the part two.`),Dt=u(),ee=i("p"),Io=l("Let’s just dive into this."),Rt=u(),b=i("h2"),g=i("a"),et=i("span"),Po=l("Why do we estimate anyway?"),zt=u(),te=i("p"),Ao=l(`If we get to the bottom of it, the role of a manager is to manage resources. As
in to make sure resources are not wasted on useless efforts. And managers have
their own bosses. And those bosses tend to be allergic to sophistry. Bosses want
to see a progress. And they want to see it in basic fonts, black and white
colours, and preferably with some numbers. Which is actually fair, because the
boss’s job is to make sure that the bottom line moves.`),Yt=u(),w=i("p"),To=l(`The technical term for this is “accountability”. Which means, that a manager
should be able to `),tt=i("em"),xo=l("account for"),qo=l(` what is going on in their area of
responsibility. And when the manager can answer the question of `),nt=i("em"),Wo=l("when"),So=l(` something
will be done, they might even feel good about themselves for a moment.`),Ft=u(),ne=i("p"),Mo=l(`And because of the ever present scrum practices and tools like Jira, managers
have some numbers that they can latch onto. And that is where the BS bingo
sessions start.`),Kt=u(),p=i("blockquote"),oe=i("p"),ot=i("em"),Bo=l("Developer"),Co=l(": I have no idea, so I better double the number"),jo=u(),ae=i("p"),at=i("em"),Oo=l("Manager"),Ho=l(": Those devs have no idea, so I better double their estimate"),No=u(),ie=i("p"),it=i("em"),Uo=l("Boss"),Lo=l(": Managers fail to deliver 60% of the time, so I better double it"),Do=u(),se=i("p"),st=i("em"),Ro=l("Customer"),zo=l(": They have no idea, so I’ll just complain until it’s done"),Qt=u(),re=i("p"),Yo=l(`Everyone wants certainty. Predictability in life makes us all feel warm and
fuzzy on the inside. And so we estimate, to feed our need for certainty with
estimations. The problem is though, that in software engineering — especially
in disruptive software engineering — there is no such thing as certainty.`),Gt=u(),v=i("h2"),k=i("a"),rt=i("span"),Fo=l("Do we "),lt=i("em"),Ko=l("have to"),Qo=l(" estimate?"),Jt=u(),le=i("p"),Go=l(`Unlike a factory floor where you can measure repeated work, and estimate, and
assign confidence levels. In software engineering, most products have virtually
zero marginal cost and need to be produced only once. Which means, that, in
practice, all work is really done for the first time, every time.`),Vt=u(),E=i("p"),Jo=l("Physicists have a good joke about this. They say that "),ht=i("em"),Vo=l(`the accuracy of a
singular measurement is equal to zero`),Xo=l("."),Xt=u(),f=i("p"),$o=l(`Everyone knows that those estimations are less than stellar, and the question we
should be asking is this: do we really `),ut=i("em"),Zo=l("have to"),ea=l(` estimate? And, I think the
answer is a little bit more complex than `),mt=i("strong"),ta=l("yes"),na=l(" or "),dt=i("strong"),oa=l("no"),aa=l(`. And it is complex
because there are two separate problems here: budgeting and commitments.`),$t=u(),he=i("p"),ia=l(`Budgeting is internal, it is ultimately about resources allocation. And I
strongly on the side that one doesn’t need estimations to make solid progress.
Actually, estimations will hinder the progress more than help.`),Zt=u(),_=i("p"),sa=l(`Commitments are external by nature. But, again not all commitments are made
equal. What we really want to think about is the `),pt=i("em"),ra=l("high integrity"),la=l(` commitments.
And for those we will need a deadline and estimations. But, generally speaking,
we don’t have to. More on this later.`),en=u(),I=i("h2"),P=i("a"),ft=i("span"),ha=l("Beyond budgeting"),tn=u(),ue=i("p"),ua=l(`In most companies that I’ve seen that wield estimations as a weapon, estimations
is essentially a form of budgeting. And from some perspective it actually makes
sense. Nobody wants to spend too much on something. There are two major problems
with this approach though.`),nn=u(),A=i("p"),ma=l(`Firstly, budgeting turns a development team essentially into an internal agency;
a cost center. Instead of actively working `),ct=i("em"),da=l("on the business"),pa=l(`, and contributing
to the bottom line, they are providing services to the company. And they are
expected to do so on time and budget, or else. It is credulous to expect optimal
performance and people caring for the company mission in this environment.`),on=u(),T=i("p"),fa=l(`Secondly, our opinions on how long work should take have literally zero impact
on how long it will actually take. And if your company is in the business of
innovation — like most modern software engineering companies are — the bulk of
work that engineers do is the mission critical work; work that `),yt=i("em"),ca=l("has to be done"),ya=l(`
regardless of any estimations.`),an=u(),me=i("p"),wa=l(`Think about it this way. Since nobody really knows how long work will actually
take, there are really only two scenarios that can play out when a company
starts budgeting engineering efforts. Either engineering efforts will be
underpowered because of lack of resources, and that will hinder the overall
company mission. Or, if you give them a generous padding, it will give the
engineers a permission to spend time gold plating everything that moves once
they’ve done with the critical work. The technical term for both cases is a
failure in resource allocation.`),sn=u(),de=i("p"),va=l(`You see, the truth is simple, the biggest risk any technology company has is not
budgetary. The biggest risk all of them have is that they will build the wrong
product. And the company is much more likely to push their team towards building
the wrong product by budgeting their efforts. The road to hell really is paved
with the best intentions.`),rn=u(),x=i("h2"),q=i("a"),wt=i("span"),ba=l("High integrity commitments"),ln=u(),W=i("p"),ga=l(`Fortunately, we don’t live in the lala land. There are partners, public
launches, contractual obligations, regulatory requirements, and a whole slew of
other factors that require us to deliver on time. Meaning `),vt=i("em"),ka=l("we have to estimate"),Ea=l(`
those.`),hn=u(),pe=i("p"),_a=l(`When you’re facing such situations, do what the U.S. army does. Triple the
estimations, and then triple them again. You should have redundancy, contingency
plans, and at least two escape hatches. It is expected that your customer will
be charged a premium for the predictability of the delivery.`),un=u(),S=i("p"),Ia=l(`Here is the rub though. Unless you’re shipping a video game on physical disks,
or something similar, those situations are quite rare in the grand schema of
things. Moreover, those situations `),bt=i("em"),Pa=l("can be drastically reduced"),Aa=l(` in number if a
company puts an effort to it.`),mn=u(),fe=i("p"),Ta=l(`Dependencies a pain on manager’s existence, but they are more often than not
mailable. Delivery schedules between teams can be negotiated and amended.
Contingency plans worked out. Contracts with external parties can be made less
demanding. Regulatory compliance work can be started way in advance.`),dn=u(),ce=i("p"),xa=l(`And who needs public launches those days? All they do is fill up the PR
companies pockets and tickle the founders egos. Customer acquisition is a long
term gruelling work that doesn’t happen overnight because of a public launch.`),pn=u(),ye=i("p"),qa=l(`It is going to sound rather counter intuitive, but by eliminating high integrity
commitments and estimations, we can remove paddings and deliver things cheaper
and faster, the agile way. Because we will focus on building only what’s
necessary; iteratively.`),fn=u(),we=i("p"),Wa=l(`And that is why the bulk of the industry is moving towards continuous delivery
those days rather than keep failing deadlines.`),cn=u(),M=i("h2"),B=i("a"),gt=i("span"),Sa=l("Consider consistency"),yn=u(),ve=i("p"),Ma=l(`When it comes to accountability the vast majority of companies that struggle
with estimations have it backwards. Usually, this coincides with “visionary”
leadership within the company. Visionary leadership and estimations drama go
hand and hand because of the inherent dynamic in the decisions making within the
company, and it usually sounds like so:`),wn=u(),be=i("blockquote"),ge=i("p"),kt=i("em"),Ba=l("Boss"),Ca=l(": I have this idea, how much will it cost me to build?"),vn=u(),ke=i("p"),ja=l(`And here is our whole problem in a nut shell. We estimate an idea that has no
market proof with tools that have no working math under them. And we do all that
while treating literally the smartest people in the company as orders takers. No
wonder that 90% of startups fail.`),bn=u(),Ee=i("p"),Oa=l(`The reason I think it is backwards is because business value — more
specifically customer value — cannot be assigned, it can be only discovered.
So, what we really need to ask is this:`),gn=u(),_e=i("blockquote"),Ie=i("p"),Et=i("em"),Ha=l("Team"),Na=l(": what is the best we can do for our customers in the next 2-3 weeks?"),kn=u(),Pe=i("p"),Ua=l(`In this case we still have to get a rough estimate of a goal, but the point is
completely reversed. Instead of thinking of how much something will cost
upfront, we think about how much user value we can ship in an iteration. We set
a goal to achieve, and once that is done, the actual realised cost doesn’t
matter all that much any more.`),En=u(),Ae=i("p"),La=l(`Once we start thinking in goals and iterations; experiments ideally. We start
moving towards consistency. Eventually, we will know that we are going to ship
something useful to the customer on every iteration; every 2-3 weeks.`),_n=u(),Te=i("p"),Da=l(`And that is where the agile/LEAN/XP methodology starts to shine. Once a team is
focused on a specific goal to achieve on a regular basis, there are ways to
deliver on those goals consistently with a roughly 30-50% buffer.`),In=u(),xe=i("p"),Ra=l(`Yes, you heard that right: 30-50% buffer, not doubling estimations and then
doubling them again.`),Pn=u(),C=i("h2"),j=i("a"),_t=i("span"),za=l("Planning with iterations in mind"),An=u(),O=i("p"),Ya=l("At this point, an observant reader is probably thinking to themselves. "),It=i("em"),Fa=l(`Didn’t
we come a whole circle? First, I’ve spent so much time bashing on estimations,
and then told you to estimate anyway.`),Ka=l(` And in a way you’re not wrong. But, there
is a key difference, and I hope you’re starting to see it by now.`),Tn=u(),H=i("blockquote"),Pt=i("p"),Qa=l("all plans eventually fail, but planning is essential"),Ga=u(),qe=i("p"),Ja=l("— "),At=i("cite"),Va=l("an old military saying"),xn=u(),We=i("p"),Xa=l(`When you estimate to deliver on time and budget, you are forced to stick with
the original plan, because you make commitments. And, as you know by now, that
plan doesn’t usually have any solid reasons to succeed. Sooner or later you’re
going to disappoint either your boss or your developers.`),qn=u(),Se=i("p"),$a=l(`When you’re estimating a goal, the actual plan specifics and the estimations
don’t matter. What really matters is reaching the goal of the iteration, because
you have all agreed that this is the best value you can deliver right now. You
actually can throw the plan and estimations away mid-iteration — or at any
point really — and make a new plan. Sometimes you find another way towards the
goal, and sometimes you realise that the goal or your approach was less than
great. So you just abandon the goal with the minimal financial impact and move
onto the next one.`),Wn=u(),Me=i("p"),Za=l(`The ultimate destination we are striving for here is to start thinking about the
delivery as a series of experiments. Each taking say roughly 2-3 weeks of
effort. And you normally might want to have a few milestones on the way. Ideally
your team should ship something to production on a daily basis.`),Sn=u(),Be=i("p"),ei=l(`To achieve this type of consistent output, rather than estimating better, the
team will need to spend enough time in discovery and experimentation, and then
setting up their own goals. That’s why we prefer to refer to those ideally as
experiments rather than iterations.`),Mn=u(),Ce=i("p"),ti=l(`Let me stress this again, a team might or might not formally estimate, they
might do this with whatever granularity and accuracy they want. In fact, if the
team produces estimations, those numbers should not leave the team boundaries;
because they’re meaningless outside of the team. All that matters is a rough
plan that has all the critical work mapped out, and an agreement that the goal
is worth pursuing. With that in mind, the work should be allowed to take as much
as it will take.`),Bn=u(),je=i("p"),ni=l("Such is the agile way."),Cn=u(),N=i("h2"),U=i("a"),Tt=i("span"),oi=l("Reporting without estimations"),jn=u(),Oe=i("p"),ai=l(`Well, that’s all nice and dandy, but what about the boss and the fortnightly
reports? What do we report if there are no estimations?`),On=u(),He=i("p"),ii=l(`Truth be told, if your boss has any brains, they know that until the work is
actually done, your estimations are just promises; often baseless ones. What
they really want to see is that you are progressing towards your goals
consistently, and how these goals align with the current business strategy.`),Hn=u(),Ne=i("p"),si=l(`I know a lot of agile practitioners don’t like the word “roadmap”, and for good
reasons. But, a decent roadmap or a gantt chart can do wonders as a reporting
tool as long as everyone understands that it represents an evolving picture. In
the end, what you need is to formulate a working hypothesis that consists of a
series of experiments/iterations. It doesn’t need to be highly detailed or look
far into the future, but it needs to make sense and align with the overall
company strategy and goals.`),Nn=u(),Ue=i("p"),ri=l(`If your roadmap/gantt chart consists of a series of roughly two weeks
iterations, and you report on fortnightly basis, you will tick a box — a.k.a
demonstrate progress — in almost every report. If an iteration is not
completed, eyeball its completeness based on the number of finished milestones.
That will give everyone a clear idea how you’re progressing. And if you can make
it visual and consumable in 10 seconds, that’s the best case scenario.`),Un=u(),c=i("p"),li=l("Remember, unless it’s a "),xt=i("em"),hi=l("high integrity commitment"),ui=l(` you don’t have to say when
it will land. In fact, you should flat out refuse to answer the question. Show
the progress, and completeness levels of your iterations. People might `),qt=i("em"),mi=l("infer"),di=l(`
their own estimations based on this information, but that is a very different
thing from making `),Wt=i("em"),pi=l("promises"),fi=l(` on behalf of the team. You don’t have to commit to
somebody’s inferences no matter how badly they want the outcomes.`),Ln=u(),Le=i("p"),ci=l(`Trust me, you will gain much more trust and respect with your boss and your
peers by keeping them in the loop of a dynamically evolving situation, rather
than making unrealistic promises and then running the team around the clock to
deliver.`),Dn=u(),L=i("h2"),D=i("a"),St=i("span"),yi=l("Engineer’s performance without estimations"),Rn=u(),De=i("p"),wi=l(`The last point I want to address here is engineers performance measurement.
Given my background in software engineering, I tend to be rather direct on the
subject. But, this topic is regularly raised whether I like it or not. So, lets
dive into this quickly.`),zn=u(),Re=i("p"),vi=l(`It is a misconception that engineers don’t like to be measured. That is not true
at all. They just don’t like to be measured in stupid ways, especially measured
negatively in stupid ways. The number of lines of code, scrum points delivered,
and accuracy of estimations, are universally hated by all engineers as a
measurement of their output for this exact reason.`),Yn=u(),ze=i("p"),bi=l(`Over the years a lot has been said about attempts to measure results of creative
work with quantifiable metrics. And yet, managers keep routinely asking
basically the same imprudent question: “If I don’t hold developers accountable
to delivering on estimations, how am I supposed to track their performance?“.`),Fn=u(),R=i("p"),gi=l(`If that’s you, then let me level with you here for a second, friend. It is you
the manager who is `),Mt=i("em"),ki=l("accountable"),Ei=l(` for what the team is doing, not the developers.
Developers are ICs and they are here to build stuff. Don’t shift your direct
responsibilities on them, nobody is going to love you for that.`),Kn=u(),Ye=i("p"),_i=l(`In fact, how do you know that when a developer ships on time they are performing
optimally? Maybe they overestimate and then just pretend to be busy. Or, how do
you even know that they’re doing what they’re supposed to do when they sit next
to you in the office? How do you know they’re not just writing a poignant haiku
in CSS right now, because they’re pissed at your attempts to police their work?
That’s right, you don’t.`),Qn=u(),Fe=i("p"),Ii=l(`The only reliable way to make sure software engineers are doing their best is to
give them interesting, well defined, and meaningful work to do, and then empower
them to make their own decisions.`),Gn=u(),Ke=i("p"),Pi=l(`So, don’t ask developers how much it will cost to build your idea. They are not
here to enact your Steve Jobs fantasy. Feed them the strategic context, make
sure they understand the importance of their work, and then let them choose
their own goals.`),Jn=u(),z=i("p"),Ai=l("If you really "),Bt=i("em"),Ti=l("have to"),xi=l(` measure developers performance, and there is no way
around this in your organisation, then do it properly through peer and
stakeholder feedback. People will always tell you what the numbers can’t.`),Vn=u(),Y=i("h2"),F=i("a"),Ct=i("span"),qi=l("Wrapping up"),Xn=u(),Qe=i("p"),Wi=l(`In a contemporary product team environment, the product is never done. In the
environment of ever changing competitive landscape and user preferences, market
fit is everything. Which means that shipping what the users want is the only
thing that really matters.`),$n=u(),Ge=i("p"),Si=l(`In this context the best way forward is to obsess over figuring out what is the
right thing to build and prioritising that which delivers the most user value.
The goal is to get into the market as quickly as possible, and deliver as much
user value as possible.`),Zn=u(),Je=i("p"),Mi=l(`Because software has virtually zero marginal cost; also known as the cost of
producing an additional item. As long as the company produces software that the
user wants, and there is enough market, the actual production cost doesn’t
matter all that much. And that means estimations don’t really add a whole lot of
value to the process.`),eo=u(),Ve=i("p"),Bi=l(`I understand that this sounds rather blasphemous to those running the business,
because in the end of the day there is a budget, investors, and partnerships
involved. But, at the same time, you know that I am not wrong. The only way to
build a stable cash flow is to build something that customers value and ready to
pay for. And the faster we do that the faster the financials will improve. Which
means that maximising the customer value is vastly more important than
controlling the production costs.`),to=u(),Xe=i("p"),Ci=l(`And in that light what a business really should control is that the customer
research is religiously conducted, critical work is visibly mapped out, and the
team consistently builds the most important item in every iteration. That is the
path to optimal performance.`),no=u(),K=i("p"),ji=l(`In the end of the day running a business is an exercise in risk management, and
the biggest risk any software business has is not that `),jt=i("em"),Oi=l("some"),Hi=l(` work might take
300% longer than expected, the biggest risk is that the team would build a wrong
product. Consistent iterative development is the tool that allows the businesses
to course correct and make sure that doesn’t happen.`),oo=u(),Q=i("p"),Ni=l("There is a place for estimations. They can be used effectively to "),Ot=i("em"),Ui=l("eyeball"),Li=l(`
whether a goal fits an iteration cycle. Or as a rough idea for a high integrity
commitments planning. We can even constructively use comparisons between the
estimations and reality as a guide whether the team does enough discovery work.`),ao=u(),G=i("p"),Di=l(`But, when estimations turn into a bludgeoning weapon and used to routinely
answer the question of `),Ht=i("em"),Ri=l("when"),zi=l(` something will be done, that is where teams loose
the sight of what’s really important and start getting themselves into troubles.`),io=u(),J=i("blockquote"),Nt=i("p"),Yi=l(`It ain’t what you don’t know that gets you into trouble. It’s what you know
for sure that just ain’t so.`),Fi=u(),$e=i("p"),Ki=l("— "),Ut=i("cite"),Qi=l("Mark Twain"),this.h()},l(e){y=s(e,"P",{});var o=r(y);ko=h(o,`Welcome to the part two of our little estimations chat. Having committed some
rather `),Z=s(o,"A",{href:!0});var ms=r(Z);Eo=h(ms,"strongly worded criticism"),ms.forEach(t),_o=h(o,` of the ubiquitous practice of
estimating everything that moves in software engineering, I feel strongly that I
shan’t leave without offering an alternative. Hence, the part two.`),o.forEach(t),Dt=m(e),ee=s(e,"P",{});var ds=r(ee);Io=h(ds,"Let’s just dive into this."),ds.forEach(t),Rt=m(e),b=s(e,"H2",{id:!0});var Gi=r(b);g=s(Gi,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ps=r(g);et=s(ps,"SPAN",{class:!0}),r(et).forEach(t),ps.forEach(t),Po=h(Gi,"Why do we estimate anyway?"),Gi.forEach(t),zt=m(e),te=s(e,"P",{});var fs=r(te);Ao=h(fs,`If we get to the bottom of it, the role of a manager is to manage resources. As
in to make sure resources are not wasted on useless efforts. And managers have
their own bosses. And those bosses tend to be allergic to sophistry. Bosses want
to see a progress. And they want to see it in basic fonts, black and white
colours, and preferably with some numbers. Which is actually fair, because the
boss’s job is to make sure that the bottom line moves.`),fs.forEach(t),Yt=m(e),w=s(e,"P",{});var Ze=r(w);To=h(Ze,`The technical term for this is “accountability”. Which means, that a manager
should be able to `),tt=s(Ze,"EM",{});var cs=r(tt);xo=h(cs,"account for"),cs.forEach(t),qo=h(Ze,` what is going on in their area of
responsibility. And when the manager can answer the question of `),nt=s(Ze,"EM",{});var ys=r(nt);Wo=h(ys,"when"),ys.forEach(t),So=h(Ze,` something
will be done, they might even feel good about themselves for a moment.`),Ze.forEach(t),Ft=m(e),ne=s(e,"P",{});var ws=r(ne);Mo=h(ws,`And because of the ever present scrum practices and tools like Jira, managers
have some numbers that they can latch onto. And that is where the BS bingo
sessions start.`),ws.forEach(t),Kt=m(e),p=s(e,"BLOCKQUOTE",{});var V=r(p);oe=s(V,"P",{});var Ji=r(oe);ot=s(Ji,"EM",{});var vs=r(ot);Bo=h(vs,"Developer"),vs.forEach(t),Co=h(Ji,": I have no idea, so I better double the number"),Ji.forEach(t),jo=m(V),ae=s(V,"P",{});var Vi=r(ae);at=s(Vi,"EM",{});var bs=r(at);Oo=h(bs,"Manager"),bs.forEach(t),Ho=h(Vi,": Those devs have no idea, so I better double their estimate"),Vi.forEach(t),No=m(V),ie=s(V,"P",{});var Xi=r(ie);it=s(Xi,"EM",{});var gs=r(it);Uo=h(gs,"Boss"),gs.forEach(t),Lo=h(Xi,": Managers fail to deliver 60% of the time, so I better double it"),Xi.forEach(t),Do=m(V),se=s(V,"P",{});var $i=r(se);st=s($i,"EM",{});var ks=r(st);Ro=h(ks,"Customer"),ks.forEach(t),zo=h($i,": They have no idea, so I’ll just complain until it’s done"),$i.forEach(t),V.forEach(t),Qt=m(e),re=s(e,"P",{});var Es=r(re);Yo=h(Es,`Everyone wants certainty. Predictability in life makes us all feel warm and
fuzzy on the inside. And so we estimate, to feed our need for certainty with
estimations. The problem is though, that in software engineering — especially
in disruptive software engineering — there is no such thing as certainty.`),Es.forEach(t),Gt=m(e),v=s(e,"H2",{id:!0});var Lt=r(v);k=s(Lt,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var _s=r(k);rt=s(_s,"SPAN",{class:!0}),r(rt).forEach(t),_s.forEach(t),Fo=h(Lt,"Do we "),lt=s(Lt,"EM",{});var Is=r(lt);Ko=h(Is,"have to"),Is.forEach(t),Qo=h(Lt," estimate?"),Lt.forEach(t),Jt=m(e),le=s(e,"P",{});var Ps=r(le);Go=h(Ps,`Unlike a factory floor where you can measure repeated work, and estimate, and
assign confidence levels. In software engineering, most products have virtually
zero marginal cost and need to be produced only once. Which means, that, in
practice, all work is really done for the first time, every time.`),Ps.forEach(t),Vt=m(e),E=s(e,"P",{});var so=r(E);Jo=h(so,"Physicists have a good joke about this. They say that "),ht=s(so,"EM",{});var As=r(ht);Vo=h(As,`the accuracy of a
singular measurement is equal to zero`),As.forEach(t),Xo=h(so,"."),so.forEach(t),Xt=m(e),f=s(e,"P",{});var X=r(f);$o=h(X,`Everyone knows that those estimations are less than stellar, and the question we
should be asking is this: do we really `),ut=s(X,"EM",{});var Ts=r(ut);Zo=h(Ts,"have to"),Ts.forEach(t),ea=h(X,` estimate? And, I think the
answer is a little bit more complex than `),mt=s(X,"STRONG",{});var xs=r(mt);ta=h(xs,"yes"),xs.forEach(t),na=h(X," or "),dt=s(X,"STRONG",{});var qs=r(dt);oa=h(qs,"no"),qs.forEach(t),aa=h(X,`. And it is complex
because there are two separate problems here: budgeting and commitments.`),X.forEach(t),$t=m(e),he=s(e,"P",{});var Ws=r(he);ia=h(Ws,`Budgeting is internal, it is ultimately about resources allocation. And I
strongly on the side that one doesn’t need estimations to make solid progress.
Actually, estimations will hinder the progress more than help.`),Ws.forEach(t),Zt=m(e),_=s(e,"P",{});var ro=r(_);sa=h(ro,`Commitments are external by nature. But, again not all commitments are made
equal. What we really want to think about is the `),pt=s(ro,"EM",{});var Ss=r(pt);ra=h(Ss,"high integrity"),Ss.forEach(t),la=h(ro,` commitments.
And for those we will need a deadline and estimations. But, generally speaking,
we don’t have to. More on this later.`),ro.forEach(t),en=m(e),I=s(e,"H2",{id:!0});var Zi=r(I);P=s(Zi,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Ms=r(P);ft=s(Ms,"SPAN",{class:!0}),r(ft).forEach(t),Ms.forEach(t),ha=h(Zi,"Beyond budgeting"),Zi.forEach(t),tn=m(e),ue=s(e,"P",{});var Bs=r(ue);ua=h(Bs,`In most companies that I’ve seen that wield estimations as a weapon, estimations
is essentially a form of budgeting. And from some perspective it actually makes
sense. Nobody wants to spend too much on something. There are two major problems
with this approach though.`),Bs.forEach(t),nn=m(e),A=s(e,"P",{});var lo=r(A);ma=h(lo,`Firstly, budgeting turns a development team essentially into an internal agency;
a cost center. Instead of actively working `),ct=s(lo,"EM",{});var Cs=r(ct);da=h(Cs,"on the business"),Cs.forEach(t),pa=h(lo,`, and contributing
to the bottom line, they are providing services to the company. And they are
expected to do so on time and budget, or else. It is credulous to expect optimal
performance and people caring for the company mission in this environment.`),lo.forEach(t),on=m(e),T=s(e,"P",{});var ho=r(T);fa=h(ho,`Secondly, our opinions on how long work should take have literally zero impact
on how long it will actually take. And if your company is in the business of
innovation — like most modern software engineering companies are — the bulk of
work that engineers do is the mission critical work; work that `),yt=s(ho,"EM",{});var js=r(yt);ca=h(js,"has to be done"),js.forEach(t),ya=h(ho,`
regardless of any estimations.`),ho.forEach(t),an=m(e),me=s(e,"P",{});var Os=r(me);wa=h(Os,`Think about it this way. Since nobody really knows how long work will actually
take, there are really only two scenarios that can play out when a company
starts budgeting engineering efforts. Either engineering efforts will be
underpowered because of lack of resources, and that will hinder the overall
company mission. Or, if you give them a generous padding, it will give the
engineers a permission to spend time gold plating everything that moves once
they’ve done with the critical work. The technical term for both cases is a
failure in resource allocation.`),Os.forEach(t),sn=m(e),de=s(e,"P",{});var Hs=r(de);va=h(Hs,`You see, the truth is simple, the biggest risk any technology company has is not
budgetary. The biggest risk all of them have is that they will build the wrong
product. And the company is much more likely to push their team towards building
the wrong product by budgeting their efforts. The road to hell really is paved
with the best intentions.`),Hs.forEach(t),rn=m(e),x=s(e,"H2",{id:!0});var es=r(x);q=s(es,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Ns=r(q);wt=s(Ns,"SPAN",{class:!0}),r(wt).forEach(t),Ns.forEach(t),ba=h(es,"High integrity commitments"),es.forEach(t),ln=m(e),W=s(e,"P",{});var uo=r(W);ga=h(uo,`Fortunately, we don’t live in the lala land. There are partners, public
launches, contractual obligations, regulatory requirements, and a whole slew of
other factors that require us to deliver on time. Meaning `),vt=s(uo,"EM",{});var Us=r(vt);ka=h(Us,"we have to estimate"),Us.forEach(t),Ea=h(uo,`
those.`),uo.forEach(t),hn=m(e),pe=s(e,"P",{});var Ls=r(pe);_a=h(Ls,`When you’re facing such situations, do what the U.S. army does. Triple the
estimations, and then triple them again. You should have redundancy, contingency
plans, and at least two escape hatches. It is expected that your customer will
be charged a premium for the predictability of the delivery.`),Ls.forEach(t),un=m(e),S=s(e,"P",{});var mo=r(S);Ia=h(mo,`Here is the rub though. Unless you’re shipping a video game on physical disks,
or something similar, those situations are quite rare in the grand schema of
things. Moreover, those situations `),bt=s(mo,"EM",{});var Ds=r(bt);Pa=h(Ds,"can be drastically reduced"),Ds.forEach(t),Aa=h(mo,` in number if a
company puts an effort to it.`),mo.forEach(t),mn=m(e),fe=s(e,"P",{});var Rs=r(fe);Ta=h(Rs,`Dependencies a pain on manager’s existence, but they are more often than not
mailable. Delivery schedules between teams can be negotiated and amended.
Contingency plans worked out. Contracts with external parties can be made less
demanding. Regulatory compliance work can be started way in advance.`),Rs.forEach(t),dn=m(e),ce=s(e,"P",{});var zs=r(ce);xa=h(zs,`And who needs public launches those days? All they do is fill up the PR
companies pockets and tickle the founders egos. Customer acquisition is a long
term gruelling work that doesn’t happen overnight because of a public launch.`),zs.forEach(t),pn=m(e),ye=s(e,"P",{});var Ys=r(ye);qa=h(Ys,`It is going to sound rather counter intuitive, but by eliminating high integrity
commitments and estimations, we can remove paddings and deliver things cheaper
and faster, the agile way. Because we will focus on building only what’s
necessary; iteratively.`),Ys.forEach(t),fn=m(e),we=s(e,"P",{});var Fs=r(we);Wa=h(Fs,`And that is why the bulk of the industry is moving towards continuous delivery
those days rather than keep failing deadlines.`),Fs.forEach(t),cn=m(e),M=s(e,"H2",{id:!0});var ts=r(M);B=s(ts,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Ks=r(B);gt=s(Ks,"SPAN",{class:!0}),r(gt).forEach(t),Ks.forEach(t),Sa=h(ts,"Consider consistency"),ts.forEach(t),yn=m(e),ve=s(e,"P",{});var Qs=r(ve);Ma=h(Qs,`When it comes to accountability the vast majority of companies that struggle
with estimations have it backwards. Usually, this coincides with “visionary”
leadership within the company. Visionary leadership and estimations drama go
hand and hand because of the inherent dynamic in the decisions making within the
company, and it usually sounds like so:`),Qs.forEach(t),wn=m(e),be=s(e,"BLOCKQUOTE",{});var Gs=r(be);ge=s(Gs,"P",{});var ns=r(ge);kt=s(ns,"EM",{});var Js=r(kt);Ba=h(Js,"Boss"),Js.forEach(t),Ca=h(ns,": I have this idea, how much will it cost me to build?"),ns.forEach(t),Gs.forEach(t),vn=m(e),ke=s(e,"P",{});var Vs=r(ke);ja=h(Vs,`And here is our whole problem in a nut shell. We estimate an idea that has no
market proof with tools that have no working math under them. And we do all that
while treating literally the smartest people in the company as orders takers. No
wonder that 90% of startups fail.`),Vs.forEach(t),bn=m(e),Ee=s(e,"P",{});var Xs=r(Ee);Oa=h(Xs,`The reason I think it is backwards is because business value — more
specifically customer value — cannot be assigned, it can be only discovered.
So, what we really need to ask is this:`),Xs.forEach(t),gn=m(e),_e=s(e,"BLOCKQUOTE",{});var $s=r(_e);Ie=s($s,"P",{});var os=r(Ie);Et=s(os,"EM",{});var Zs=r(Et);Ha=h(Zs,"Team"),Zs.forEach(t),Na=h(os,": what is the best we can do for our customers in the next 2-3 weeks?"),os.forEach(t),$s.forEach(t),kn=m(e),Pe=s(e,"P",{});var er=r(Pe);Ua=h(er,`In this case we still have to get a rough estimate of a goal, but the point is
completely reversed. Instead of thinking of how much something will cost
upfront, we think about how much user value we can ship in an iteration. We set
a goal to achieve, and once that is done, the actual realised cost doesn’t
matter all that much any more.`),er.forEach(t),En=m(e),Ae=s(e,"P",{});var tr=r(Ae);La=h(tr,`Once we start thinking in goals and iterations; experiments ideally. We start
moving towards consistency. Eventually, we will know that we are going to ship
something useful to the customer on every iteration; every 2-3 weeks.`),tr.forEach(t),_n=m(e),Te=s(e,"P",{});var nr=r(Te);Da=h(nr,`And that is where the agile/LEAN/XP methodology starts to shine. Once a team is
focused on a specific goal to achieve on a regular basis, there are ways to
deliver on those goals consistently with a roughly 30-50% buffer.`),nr.forEach(t),In=m(e),xe=s(e,"P",{});var or=r(xe);Ra=h(or,`Yes, you heard that right: 30-50% buffer, not doubling estimations and then
doubling them again.`),or.forEach(t),Pn=m(e),C=s(e,"H2",{id:!0});var as=r(C);j=s(as,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ar=r(j);_t=s(ar,"SPAN",{class:!0}),r(_t).forEach(t),ar.forEach(t),za=h(as,"Planning with iterations in mind"),as.forEach(t),An=m(e),O=s(e,"P",{});var po=r(O);Ya=h(po,"At this point, an observant reader is probably thinking to themselves. "),It=s(po,"EM",{});var ir=r(It);Fa=h(ir,`Didn’t
we come a whole circle? First, I’ve spent so much time bashing on estimations,
and then told you to estimate anyway.`),ir.forEach(t),Ka=h(po,` And in a way you’re not wrong. But, there
is a key difference, and I hope you’re starting to see it by now.`),po.forEach(t),Tn=m(e),H=s(e,"BLOCKQUOTE",{});var fo=r(H);Pt=s(fo,"P",{});var sr=r(Pt);Qa=h(sr,"all plans eventually fail, but planning is essential"),sr.forEach(t),Ga=m(fo),qe=s(fo,"P",{});var is=r(qe);Ja=h(is,"— "),At=s(is,"CITE",{});var rr=r(At);Va=h(rr,"an old military saying"),rr.forEach(t),is.forEach(t),fo.forEach(t),xn=m(e),We=s(e,"P",{});var lr=r(We);Xa=h(lr,`When you estimate to deliver on time and budget, you are forced to stick with
the original plan, because you make commitments. And, as you know by now, that
plan doesn’t usually have any solid reasons to succeed. Sooner or later you’re
going to disappoint either your boss or your developers.`),lr.forEach(t),qn=m(e),Se=s(e,"P",{});var hr=r(Se);$a=h(hr,`When you’re estimating a goal, the actual plan specifics and the estimations
don’t matter. What really matters is reaching the goal of the iteration, because
you have all agreed that this is the best value you can deliver right now. You
actually can throw the plan and estimations away mid-iteration — or at any
point really — and make a new plan. Sometimes you find another way towards the
goal, and sometimes you realise that the goal or your approach was less than
great. So you just abandon the goal with the minimal financial impact and move
onto the next one.`),hr.forEach(t),Wn=m(e),Me=s(e,"P",{});var ur=r(Me);Za=h(ur,`The ultimate destination we are striving for here is to start thinking about the
delivery as a series of experiments. Each taking say roughly 2-3 weeks of
effort. And you normally might want to have a few milestones on the way. Ideally
your team should ship something to production on a daily basis.`),ur.forEach(t),Sn=m(e),Be=s(e,"P",{});var mr=r(Be);ei=h(mr,`To achieve this type of consistent output, rather than estimating better, the
team will need to spend enough time in discovery and experimentation, and then
setting up their own goals. That’s why we prefer to refer to those ideally as
experiments rather than iterations.`),mr.forEach(t),Mn=m(e),Ce=s(e,"P",{});var dr=r(Ce);ti=h(dr,`Let me stress this again, a team might or might not formally estimate, they
might do this with whatever granularity and accuracy they want. In fact, if the
team produces estimations, those numbers should not leave the team boundaries;
because they’re meaningless outside of the team. All that matters is a rough
plan that has all the critical work mapped out, and an agreement that the goal
is worth pursuing. With that in mind, the work should be allowed to take as much
as it will take.`),dr.forEach(t),Bn=m(e),je=s(e,"P",{});var pr=r(je);ni=h(pr,"Such is the agile way."),pr.forEach(t),Cn=m(e),N=s(e,"H2",{id:!0});var ss=r(N);U=s(ss,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var fr=r(U);Tt=s(fr,"SPAN",{class:!0}),r(Tt).forEach(t),fr.forEach(t),oi=h(ss,"Reporting without estimations"),ss.forEach(t),jn=m(e),Oe=s(e,"P",{});var cr=r(Oe);ai=h(cr,`Well, that’s all nice and dandy, but what about the boss and the fortnightly
reports? What do we report if there are no estimations?`),cr.forEach(t),On=m(e),He=s(e,"P",{});var yr=r(He);ii=h(yr,`Truth be told, if your boss has any brains, they know that until the work is
actually done, your estimations are just promises; often baseless ones. What
they really want to see is that you are progressing towards your goals
consistently, and how these goals align with the current business strategy.`),yr.forEach(t),Hn=m(e),Ne=s(e,"P",{});var wr=r(Ne);si=h(wr,`I know a lot of agile practitioners don’t like the word “roadmap”, and for good
reasons. But, a decent roadmap or a gantt chart can do wonders as a reporting
tool as long as everyone understands that it represents an evolving picture. In
the end, what you need is to formulate a working hypothesis that consists of a
series of experiments/iterations. It doesn’t need to be highly detailed or look
far into the future, but it needs to make sense and align with the overall
company strategy and goals.`),wr.forEach(t),Nn=m(e),Ue=s(e,"P",{});var vr=r(Ue);ri=h(vr,`If your roadmap/gantt chart consists of a series of roughly two weeks
iterations, and you report on fortnightly basis, you will tick a box — a.k.a
demonstrate progress — in almost every report. If an iteration is not
completed, eyeball its completeness based on the number of finished milestones.
That will give everyone a clear idea how you’re progressing. And if you can make
it visual and consumable in 10 seconds, that’s the best case scenario.`),vr.forEach(t),Un=m(e),c=s(e,"P",{});var $=r(c);li=h($,"Remember, unless it’s a "),xt=s($,"EM",{});var br=r(xt);hi=h(br,"high integrity commitment"),br.forEach(t),ui=h($,` you don’t have to say when
it will land. In fact, you should flat out refuse to answer the question. Show
the progress, and completeness levels of your iterations. People might `),qt=s($,"EM",{});var gr=r(qt);mi=h(gr,"infer"),gr.forEach(t),di=h($,`
their own estimations based on this information, but that is a very different
thing from making `),Wt=s($,"EM",{});var kr=r(Wt);pi=h(kr,"promises"),kr.forEach(t),fi=h($,` on behalf of the team. You don’t have to commit to
somebody’s inferences no matter how badly they want the outcomes.`),$.forEach(t),Ln=m(e),Le=s(e,"P",{});var Er=r(Le);ci=h(Er,`Trust me, you will gain much more trust and respect with your boss and your
peers by keeping them in the loop of a dynamically evolving situation, rather
than making unrealistic promises and then running the team around the clock to
deliver.`),Er.forEach(t),Dn=m(e),L=s(e,"H2",{id:!0});var rs=r(L);D=s(rs,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var _r=r(D);St=s(_r,"SPAN",{class:!0}),r(St).forEach(t),_r.forEach(t),yi=h(rs,"Engineer’s performance without estimations"),rs.forEach(t),Rn=m(e),De=s(e,"P",{});var Ir=r(De);wi=h(Ir,`The last point I want to address here is engineers performance measurement.
Given my background in software engineering, I tend to be rather direct on the
subject. But, this topic is regularly raised whether I like it or not. So, lets
dive into this quickly.`),Ir.forEach(t),zn=m(e),Re=s(e,"P",{});var Pr=r(Re);vi=h(Pr,`It is a misconception that engineers don’t like to be measured. That is not true
at all. They just don’t like to be measured in stupid ways, especially measured
negatively in stupid ways. The number of lines of code, scrum points delivered,
and accuracy of estimations, are universally hated by all engineers as a
measurement of their output for this exact reason.`),Pr.forEach(t),Yn=m(e),ze=s(e,"P",{});var Ar=r(ze);bi=h(Ar,`Over the years a lot has been said about attempts to measure results of creative
work with quantifiable metrics. And yet, managers keep routinely asking
basically the same imprudent question: “If I don’t hold developers accountable
to delivering on estimations, how am I supposed to track their performance?“.`),Ar.forEach(t),Fn=m(e),R=s(e,"P",{});var co=r(R);gi=h(co,`If that’s you, then let me level with you here for a second, friend. It is you
the manager who is `),Mt=s(co,"EM",{});var Tr=r(Mt);ki=h(Tr,"accountable"),Tr.forEach(t),Ei=h(co,` for what the team is doing, not the developers.
Developers are ICs and they are here to build stuff. Don’t shift your direct
responsibilities on them, nobody is going to love you for that.`),co.forEach(t),Kn=m(e),Ye=s(e,"P",{});var xr=r(Ye);_i=h(xr,`In fact, how do you know that when a developer ships on time they are performing
optimally? Maybe they overestimate and then just pretend to be busy. Or, how do
you even know that they’re doing what they’re supposed to do when they sit next
to you in the office? How do you know they’re not just writing a poignant haiku
in CSS right now, because they’re pissed at your attempts to police their work?
That’s right, you don’t.`),xr.forEach(t),Qn=m(e),Fe=s(e,"P",{});var qr=r(Fe);Ii=h(qr,`The only reliable way to make sure software engineers are doing their best is to
give them interesting, well defined, and meaningful work to do, and then empower
them to make their own decisions.`),qr.forEach(t),Gn=m(e),Ke=s(e,"P",{});var Wr=r(Ke);Pi=h(Wr,`So, don’t ask developers how much it will cost to build your idea. They are not
here to enact your Steve Jobs fantasy. Feed them the strategic context, make
sure they understand the importance of their work, and then let them choose
their own goals.`),Wr.forEach(t),Jn=m(e),z=s(e,"P",{});var yo=r(z);Ai=h(yo,"If you really "),Bt=s(yo,"EM",{});var Sr=r(Bt);Ti=h(Sr,"have to"),Sr.forEach(t),xi=h(yo,` measure developers performance, and there is no way
around this in your organisation, then do it properly through peer and
stakeholder feedback. People will always tell you what the numbers can’t.`),yo.forEach(t),Vn=m(e),Y=s(e,"H2",{id:!0});var ls=r(Y);F=s(ls,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Mr=r(F);Ct=s(Mr,"SPAN",{class:!0}),r(Ct).forEach(t),Mr.forEach(t),qi=h(ls,"Wrapping up"),ls.forEach(t),Xn=m(e),Qe=s(e,"P",{});var Br=r(Qe);Wi=h(Br,`In a contemporary product team environment, the product is never done. In the
environment of ever changing competitive landscape and user preferences, market
fit is everything. Which means that shipping what the users want is the only
thing that really matters.`),Br.forEach(t),$n=m(e),Ge=s(e,"P",{});var Cr=r(Ge);Si=h(Cr,`In this context the best way forward is to obsess over figuring out what is the
right thing to build and prioritising that which delivers the most user value.
The goal is to get into the market as quickly as possible, and deliver as much
user value as possible.`),Cr.forEach(t),Zn=m(e),Je=s(e,"P",{});var jr=r(Je);Mi=h(jr,`Because software has virtually zero marginal cost; also known as the cost of
producing an additional item. As long as the company produces software that the
user wants, and there is enough market, the actual production cost doesn’t
matter all that much. And that means estimations don’t really add a whole lot of
value to the process.`),jr.forEach(t),eo=m(e),Ve=s(e,"P",{});var Or=r(Ve);Bi=h(Or,`I understand that this sounds rather blasphemous to those running the business,
because in the end of the day there is a budget, investors, and partnerships
involved. But, at the same time, you know that I am not wrong. The only way to
build a stable cash flow is to build something that customers value and ready to
pay for. And the faster we do that the faster the financials will improve. Which
means that maximising the customer value is vastly more important than
controlling the production costs.`),Or.forEach(t),to=m(e),Xe=s(e,"P",{});var Hr=r(Xe);Ci=h(Hr,`And in that light what a business really should control is that the customer
research is religiously conducted, critical work is visibly mapped out, and the
team consistently builds the most important item in every iteration. That is the
path to optimal performance.`),Hr.forEach(t),no=m(e),K=s(e,"P",{});var wo=r(K);ji=h(wo,`In the end of the day running a business is an exercise in risk management, and
the biggest risk any software business has is not that `),jt=s(wo,"EM",{});var Nr=r(jt);Oi=h(Nr,"some"),Nr.forEach(t),Hi=h(wo,` work might take
300% longer than expected, the biggest risk is that the team would build a wrong
product. Consistent iterative development is the tool that allows the businesses
to course correct and make sure that doesn’t happen.`),wo.forEach(t),oo=m(e),Q=s(e,"P",{});var vo=r(Q);Ni=h(vo,"There is a place for estimations. They can be used effectively to "),Ot=s(vo,"EM",{});var Ur=r(Ot);Ui=h(Ur,"eyeball"),Ur.forEach(t),Li=h(vo,`
whether a goal fits an iteration cycle. Or as a rough idea for a high integrity
commitments planning. We can even constructively use comparisons between the
estimations and reality as a guide whether the team does enough discovery work.`),vo.forEach(t),ao=m(e),G=s(e,"P",{});var bo=r(G);Di=h(bo,`But, when estimations turn into a bludgeoning weapon and used to routinely
answer the question of `),Ht=s(bo,"EM",{});var Lr=r(Ht);Ri=h(Lr,"when"),Lr.forEach(t),zi=h(bo,` something will be done, that is where teams loose
the sight of what’s really important and start getting themselves into troubles.`),bo.forEach(t),io=m(e),J=s(e,"BLOCKQUOTE",{});var go=r(J);Nt=s(go,"P",{});var Dr=r(Nt);Yi=h(Dr,`It ain’t what you don’t know that gets you into trouble. It’s what you know
for sure that just ain’t so.`),Dr.forEach(t),Fi=m(go),$e=s(go,"P",{});var hs=r($e);Ki=h(hs,"— "),Ut=s(hs,"CITE",{});var Rr=r(Ut);Qi=h(Rr,"Mark Twain"),Rr.forEach(t),hs.forEach(t),go.forEach(t),this.h()},h(){d(Z,"href","/posts/3OvR4"),d(et,"class","icon icon-link"),d(g,"aria-hidden","true"),d(g,"tabindex","-1"),d(g,"href","#why-do-we-estimate-anyway"),d(b,"id","why-do-we-estimate-anyway"),d(rt,"class","icon icon-link"),d(k,"aria-hidden","true"),d(k,"tabindex","-1"),d(k,"href","#do-we-have-to-estimate"),d(v,"id","do-we-have-to-estimate"),d(ft,"class","icon icon-link"),d(P,"aria-hidden","true"),d(P,"tabindex","-1"),d(P,"href","#beyond-budgeting"),d(I,"id","beyond-budgeting"),d(wt,"class","icon icon-link"),d(q,"aria-hidden","true"),d(q,"tabindex","-1"),d(q,"href","#high-integrity-commitments"),d(x,"id","high-integrity-commitments"),d(gt,"class","icon icon-link"),d(B,"aria-hidden","true"),d(B,"tabindex","-1"),d(B,"href","#consider-consistency"),d(M,"id","consider-consistency"),d(_t,"class","icon icon-link"),d(j,"aria-hidden","true"),d(j,"tabindex","-1"),d(j,"href","#planning-with-iterations-in-mind"),d(C,"id","planning-with-iterations-in-mind"),d(Tt,"class","icon icon-link"),d(U,"aria-hidden","true"),d(U,"tabindex","-1"),d(U,"href","#reporting-without-estimations"),d(N,"id","reporting-without-estimations"),d(St,"class","icon icon-link"),d(D,"aria-hidden","true"),d(D,"tabindex","-1"),d(D,"href","#engineers-performance-without-estimations"),d(L,"id","engineers-performance-without-estimations"),d(Ct,"class","icon icon-link"),d(F,"aria-hidden","true"),d(F,"tabindex","-1"),d(F,"href","#wrapping-up"),d(Y,"id","wrapping-up")},m(e,o){a(e,y,o),n(y,ko),n(y,Z),n(Z,Eo),n(y,_o),a(e,Dt,o),a(e,ee,o),n(ee,Io),a(e,Rt,o),a(e,b,o),n(b,g),n(g,et),n(b,Po),a(e,zt,o),a(e,te,o),n(te,Ao),a(e,Yt,o),a(e,w,o),n(w,To),n(w,tt),n(tt,xo),n(w,qo),n(w,nt),n(nt,Wo),n(w,So),a(e,Ft,o),a(e,ne,o),n(ne,Mo),a(e,Kt,o),a(e,p,o),n(p,oe),n(oe,ot),n(ot,Bo),n(oe,Co),n(p,jo),n(p,ae),n(ae,at),n(at,Oo),n(ae,Ho),n(p,No),n(p,ie),n(ie,it),n(it,Uo),n(ie,Lo),n(p,Do),n(p,se),n(se,st),n(st,Ro),n(se,zo),a(e,Qt,o),a(e,re,o),n(re,Yo),a(e,Gt,o),a(e,v,o),n(v,k),n(k,rt),n(v,Fo),n(v,lt),n(lt,Ko),n(v,Qo),a(e,Jt,o),a(e,le,o),n(le,Go),a(e,Vt,o),a(e,E,o),n(E,Jo),n(E,ht),n(ht,Vo),n(E,Xo),a(e,Xt,o),a(e,f,o),n(f,$o),n(f,ut),n(ut,Zo),n(f,ea),n(f,mt),n(mt,ta),n(f,na),n(f,dt),n(dt,oa),n(f,aa),a(e,$t,o),a(e,he,o),n(he,ia),a(e,Zt,o),a(e,_,o),n(_,sa),n(_,pt),n(pt,ra),n(_,la),a(e,en,o),a(e,I,o),n(I,P),n(P,ft),n(I,ha),a(e,tn,o),a(e,ue,o),n(ue,ua),a(e,nn,o),a(e,A,o),n(A,ma),n(A,ct),n(ct,da),n(A,pa),a(e,on,o),a(e,T,o),n(T,fa),n(T,yt),n(yt,ca),n(T,ya),a(e,an,o),a(e,me,o),n(me,wa),a(e,sn,o),a(e,de,o),n(de,va),a(e,rn,o),a(e,x,o),n(x,q),n(q,wt),n(x,ba),a(e,ln,o),a(e,W,o),n(W,ga),n(W,vt),n(vt,ka),n(W,Ea),a(e,hn,o),a(e,pe,o),n(pe,_a),a(e,un,o),a(e,S,o),n(S,Ia),n(S,bt),n(bt,Pa),n(S,Aa),a(e,mn,o),a(e,fe,o),n(fe,Ta),a(e,dn,o),a(e,ce,o),n(ce,xa),a(e,pn,o),a(e,ye,o),n(ye,qa),a(e,fn,o),a(e,we,o),n(we,Wa),a(e,cn,o),a(e,M,o),n(M,B),n(B,gt),n(M,Sa),a(e,yn,o),a(e,ve,o),n(ve,Ma),a(e,wn,o),a(e,be,o),n(be,ge),n(ge,kt),n(kt,Ba),n(ge,Ca),a(e,vn,o),a(e,ke,o),n(ke,ja),a(e,bn,o),a(e,Ee,o),n(Ee,Oa),a(e,gn,o),a(e,_e,o),n(_e,Ie),n(Ie,Et),n(Et,Ha),n(Ie,Na),a(e,kn,o),a(e,Pe,o),n(Pe,Ua),a(e,En,o),a(e,Ae,o),n(Ae,La),a(e,_n,o),a(e,Te,o),n(Te,Da),a(e,In,o),a(e,xe,o),n(xe,Ra),a(e,Pn,o),a(e,C,o),n(C,j),n(j,_t),n(C,za),a(e,An,o),a(e,O,o),n(O,Ya),n(O,It),n(It,Fa),n(O,Ka),a(e,Tn,o),a(e,H,o),n(H,Pt),n(Pt,Qa),n(H,Ga),n(H,qe),n(qe,Ja),n(qe,At),n(At,Va),a(e,xn,o),a(e,We,o),n(We,Xa),a(e,qn,o),a(e,Se,o),n(Se,$a),a(e,Wn,o),a(e,Me,o),n(Me,Za),a(e,Sn,o),a(e,Be,o),n(Be,ei),a(e,Mn,o),a(e,Ce,o),n(Ce,ti),a(e,Bn,o),a(e,je,o),n(je,ni),a(e,Cn,o),a(e,N,o),n(N,U),n(U,Tt),n(N,oi),a(e,jn,o),a(e,Oe,o),n(Oe,ai),a(e,On,o),a(e,He,o),n(He,ii),a(e,Hn,o),a(e,Ne,o),n(Ne,si),a(e,Nn,o),a(e,Ue,o),n(Ue,ri),a(e,Un,o),a(e,c,o),n(c,li),n(c,xt),n(xt,hi),n(c,ui),n(c,qt),n(qt,mi),n(c,di),n(c,Wt),n(Wt,pi),n(c,fi),a(e,Ln,o),a(e,Le,o),n(Le,ci),a(e,Dn,o),a(e,L,o),n(L,D),n(D,St),n(L,yi),a(e,Rn,o),a(e,De,o),n(De,wi),a(e,zn,o),a(e,Re,o),n(Re,vi),a(e,Yn,o),a(e,ze,o),n(ze,bi),a(e,Fn,o),a(e,R,o),n(R,gi),n(R,Mt),n(Mt,ki),n(R,Ei),a(e,Kn,o),a(e,Ye,o),n(Ye,_i),a(e,Qn,o),a(e,Fe,o),n(Fe,Ii),a(e,Gn,o),a(e,Ke,o),n(Ke,Pi),a(e,Jn,o),a(e,z,o),n(z,Ai),n(z,Bt),n(Bt,Ti),n(z,xi),a(e,Vn,o),a(e,Y,o),n(Y,F),n(F,Ct),n(Y,qi),a(e,Xn,o),a(e,Qe,o),n(Qe,Wi),a(e,$n,o),a(e,Ge,o),n(Ge,Si),a(e,Zn,o),a(e,Je,o),n(Je,Mi),a(e,eo,o),a(e,Ve,o),n(Ve,Bi),a(e,to,o),a(e,Xe,o),n(Xe,Ci),a(e,no,o),a(e,K,o),n(K,ji),n(K,jt),n(jt,Oi),n(K,Hi),a(e,oo,o),a(e,Q,o),n(Q,Ni),n(Q,Ot),n(Ot,Ui),n(Q,Li),a(e,ao,o),a(e,G,o),n(G,Di),n(G,Ht),n(Ht,Ri),n(G,zi),a(e,io,o),a(e,J,o),n(J,Nt),n(Nt,Yi),n(J,Fi),n(J,$e),n($e,Ki),n($e,Ut),n(Ut,Qi)},p:us,i:us,o:us,d(e){e&&t(y),e&&t(Dt),e&&t(ee),e&&t(Rt),e&&t(b),e&&t(zt),e&&t(te),e&&t(Yt),e&&t(w),e&&t(Ft),e&&t(ne),e&&t(Kt),e&&t(p),e&&t(Qt),e&&t(re),e&&t(Gt),e&&t(v),e&&t(Jt),e&&t(le),e&&t(Vt),e&&t(E),e&&t(Xt),e&&t(f),e&&t($t),e&&t(he),e&&t(Zt),e&&t(_),e&&t(en),e&&t(I),e&&t(tn),e&&t(ue),e&&t(nn),e&&t(A),e&&t(on),e&&t(T),e&&t(an),e&&t(me),e&&t(sn),e&&t(de),e&&t(rn),e&&t(x),e&&t(ln),e&&t(W),e&&t(hn),e&&t(pe),e&&t(un),e&&t(S),e&&t(mn),e&&t(fe),e&&t(dn),e&&t(ce),e&&t(pn),e&&t(ye),e&&t(fn),e&&t(we),e&&t(cn),e&&t(M),e&&t(yn),e&&t(ve),e&&t(wn),e&&t(be),e&&t(vn),e&&t(ke),e&&t(bn),e&&t(Ee),e&&t(gn),e&&t(_e),e&&t(kn),e&&t(Pe),e&&t(En),e&&t(Ae),e&&t(_n),e&&t(Te),e&&t(In),e&&t(xe),e&&t(Pn),e&&t(C),e&&t(An),e&&t(O),e&&t(Tn),e&&t(H),e&&t(xn),e&&t(We),e&&t(qn),e&&t(Se),e&&t(Wn),e&&t(Me),e&&t(Sn),e&&t(Be),e&&t(Mn),e&&t(Ce),e&&t(Bn),e&&t(je),e&&t(Cn),e&&t(N),e&&t(jn),e&&t(Oe),e&&t(On),e&&t(He),e&&t(Hn),e&&t(Ne),e&&t(Nn),e&&t(Ue),e&&t(Un),e&&t(c),e&&t(Ln),e&&t(Le),e&&t(Dn),e&&t(L),e&&t(Rn),e&&t(De),e&&t(zn),e&&t(Re),e&&t(Yn),e&&t(ze),e&&t(Fn),e&&t(R),e&&t(Kn),e&&t(Ye),e&&t(Qn),e&&t(Fe),e&&t(Gn),e&&t(Ke),e&&t(Jn),e&&t(z),e&&t(Vn),e&&t(Y),e&&t(Xn),e&&t(Qe),e&&t($n),e&&t(Ge),e&&t(Zn),e&&t(Je),e&&t(eo),e&&t(Ve),e&&t(to),e&&t(Xe),e&&t(no),e&&t(K),e&&t(oo),e&&t(Q),e&&t(ao),e&&t(G),e&&t(io),e&&t(J)}}}const dl={slug:"i8lyo",date:"6 March 2023",title:"Life without estimations",description:"Part two of the estimations rant",thumbnail:hl,tags:["management","leadership","planning","agile"]};class pl extends Yr{constructor(y){super(),Fr(this,y,null,ul,Kr,{})}}export{pl as default,dl as metadata};
