import{S as Na,i as Oa,s as Ha,k as a,q as r,a as h,l as s,m as n,r as p,h as t,c as f,n as u,b as l,F as o,C as Ai}from"./index-920be987.js";function Wa(Ba){let E,Wt,Xe,R,Ct,Ye,g,_,ce,zt,$e,K,Rt,et,J,Kt,tt,d,we,Jt,Zt,ye,Dt,Qt,ve,Vt,Xt,ke,Yt,ot,Z,$t,it,m,be,eo,to,Ee,oo,io,ge,ao,so,_e,no,at,D,lo,st,P,I,Pe,ro,nt,Q,po,lt,c,Ie,ho,fo,Te,uo,mo,xe,co,wo,Ae,yo,rt,V,vo,pt,X,ko,ht,C,Ua=`<code class="language-undefined">                 |
  Unplanned      |     Planned
  Business       |     Business
                 |
-----------------+------------------
                 |
  Unplanned      |     Planned
  Maintenance    |     Maintenance
                 |</code>`,ft,Y,bo,ut,T,x,Le,Eo,dt,$,go,mt,v,Me,_o,Po,je,Io,To,Se,xo,ct,ee,Ao,wt,te,Lo,yt,A,Mo,Be,jo,So,vt,oe,Bo,kt,L,M,Ue,Uo,bt,ie,qo,Et,ae,Fo,gt,se,Go,_t,z,qa='<code class="language-undefined">profit = throughput - inventory - operational expenses</code>',Pt,ne,No,It,j,S,qe,Oo,Tt,le,Ho,xt,w,Fe,Wo,Co,Ge,zo,Ro,Ne,Ko,Jo,Oe,Zo,At,B,Do,He,Qo,Vo,Lt,re,Xo,Mt,k,Yo,We,$o,ei,Ce,ti,oi,jt,pe,ii,St,U,q,ze,ai,Bt,F,si,Re,ni,li,Ut,he,ri,qt,b,pi,Ke,hi,fi,Je,ui,di,Ft,fe,mi,Gt,y,Ze,ci,wi,De,yi,vi,Qe,ki,bi,Ve,Ei;return{c(){E=a("p"),Wt=r(`I’ve seen I fair few new technology leaders and engineering managers at work,
and, by far, the most common scenario where they struggle is to manage work
priorities. New leaders often take delivery management rather literally, and
when faced business pressures, they cram the roadmap with features. And, that
plan inevitably fails.`),Xe=h(),R=a("p"),Ct=r(`To be fair, experience comes with experience, and one needs to make mistakes to
learn. Knowing the problem is half if a battle though. And so today, I’ll try to
put together a framework for thinking about work that is on the plate, how to
prioritise it, and ultimately, well, manage better.`),Ye=h(),g=a("h2"),_=a("a"),ce=a("span"),zt=r("The four types of work"),$e=h(),K=a("p"),Rt=r(`The concept of four types of work was popularised in the software engineering
community by the book called “the phoenix project”. Although, technically, the
idea was lifted—as most of the book—from another book called “The Goal” by
Eliyahu Goldratt.`),et=h(),J=a("p"),Kt=r(`The point they’re trying to make is quite simple. Generally speaking there are
four types of work in any organisation:`),tt=h(),d=a("ul"),we=a("li"),Jt=r("Business projects"),Zt=h(),ye=a("li"),Dt=r("Internal projects"),Qt=h(),ve=a("li"),Vt=r("Operational projects"),Xt=h(),ke=a("li"),Yt=r("Unplanned work"),ot=h(),Z=a("p"),$t=r(`Which is probably rather vague when applied to the software engineering context.
So, allow me to frivolously translate that into the terms we all can relate to.`),it=h(),m=a("ul"),be=a("li"),eo=r("Product features development"),to=h(),Ee=a("li"),oo=r("Core technology development"),io=h(),ge=a("li"),ao=r("Optimisations (cost, skills, reliability, performance, etc)"),so=h(),_e=a("li"),no=r("Putting the fires down"),at=h(),D=a("p"),lo=r(`The point of this model is that those four types of work are always present no
matter the business or product. And if a roadmap only consists of features, the
other types of work don’t simply disappear. Instead the work goes invisible, and
that inevitably derails the actual features development.`),st=h(),P=a("h2"),I=a("a"),Pe=a("span"),ro=r("Another way to slice it"),nt=h(),Q=a("p"),po=r(`There is a bit of a problem with this model when it’s applied to software
engineering teams. Because when we try to implement it verbatim, here is how
stakeholders see this list:`),lt=h(),c=a("ul"),Ie=a("li"),ho=r("Features development ← stuff you supposed to do!"),fo=h(),Te=a("li"),uo=r("Core technology ← gold plating"),mo=h(),xe=a("li"),co=r("Optimisations ← unnecessary, supposed to magically happen by default"),wo=h(),Ae=a("li"),yo=r("Firefighting ← basically engineering fuck-ups and avoidable heroics"),rt=h(),V=a("p"),vo=r(`As you can see, unless your roadmap is not 90% filled with features, this
categorisation might not necessarily be conducive to happy planning and
execution. And so people try another way to slice the cake.`),pt=h(),X=a("p"),ko=r(`For example, a common strategy is to slice work into categories based on two
dichotomies: Planned/Unplanned and Business/Maintenance work.`),ht=h(),C=a("pre"),ft=h(),Y=a("p"),bo=r(`This puts most of the work on a sort of even footing, and although there is
still the business/maintenance division, it is much easier to reason about. It’s
all just work on one field.`),ut=h(),T=a("h2"),x=a("a"),Le=a("span"),Eo=r("The prioritisation game"),dt=h(),$=a("p"),go=r(`Whichever categorisation system we choose, the next step is normally to
negotiate percentage allocations for each category. For example:`),mt=h(),v=a("ul"),Me=a("li"),_o=r("Planned business work (aka the roadmap) - 50%"),Po=h(),je=a("li"),Io=r("Unplanned business (aka customer feedback) - 30%"),To=h(),Se=a("li"),xo=r("Maintenance work (aka make engineers shut up) - 20%"),ct=h(),ee=a("p"),Ao=r(`And this is where everyone gets lost in the sauce a bit. Each successful company
claims to find the perfect ratio. Google was famous for having 20% time
allocated for “other stuff”, and such.`),wt=h(),te=a("p"),Lo=r(`If your company does something similar, this is a huge step forward from the
status quo: the invisible work. But unfortunately, it doesn’t quite work all
that great because there are two problems to this system.`),yt=h(),A=a("p"),Mo=r(`Firstly, a lot of tasks don’t fit neatly into those categories. Moreover, people
have a tendency to `),Be=a("em"),jo=r("present"),So=r(` the work they really want to do as the number one
category, the roadmap, even though it’s not really that.`),vt=h(),oe=a("p"),Bo=r(`The second problem is that those percent allocations are rather subjective. The
optimal percentage allocation will differ greatly on the operational context,
business pressures, state of technology, etc. Moreover, it will constantly shift
with time as a project/product evolves.`),kt=h(),L=a("h2"),M=a("a"),Ue=a("span"),Uo=r("Lost in translation"),bt=h(),ie=a("p"),qo=r(`While engineering time is always in a limited supply, and it’s understandable
why someone would like to have guarantees over budget allocation for their own
priorities, these work categorisation frameworks were never meant to be used
like a bargaining chip.`),Et=h(),ae=a("p"),Fo=r("Somehow the original intent of the four types of work was lost in translation."),gt=h(),se=a("p"),Go=r(`The original idea of this categorisation was part of the constraints theory that
Eliyahu Goldratt was developing. He was an exceptional systems thinker and he
meant this framework to serve as a guide for production optimisation. More
specifically he saw this as a process of increasing business profits`),_t=h(),z=a("pre"),Pt=h(),ne=a("p"),No=r(`And so the original meaning of the four types of work was to improve the
throughput, reduce inventory, and reduce the operational expenses. Not to
preallocate time for specific types of work.`),It=h(),j=a("h2"),S=a("a"),qe=a("span"),Oo=r("Lets try again"),Tt=h(),le=a("p"),Ho=r("Lets bring the original classification back and see how it works:"),xt=h(),w=a("ul"),Fe=a("li"),Wo=r("Business projects"),Co=h(),Ge=a("li"),zo=r("Internal projects"),Ro=h(),Ne=a("li"),Ko=r("Operational improvements"),Jo=h(),Oe=a("li"),Zo=r("Unplanned projects"),At=h(),B=a("p"),Do=r("The idea is to maximise production volume "),He=a("em"),Qo=r("while driving the cost down"),Vo=r(`. The
product itself was never the point in this framework. Building a system that
maximises the product output and drives costs down was. And that puts the whole
system upside down.`),Lt=h(),re=a("p"),Xo=r(`Normally a company would put the product work at the top of their priorities.
While understandable, that might not actually be to the best interest of the
business. To put it simply if product is put ahead of operational efficiency it
won’t necessarily result in profits.`),Mt=h(),k=a("p"),Yo=r(`And so, in Golratt’s theory it was all about finding the system’s constraints
that limit throughput and adds up the costs, and then addressing them. And to
that end the amount of work that goes into each category was supposed to be
`),We=a("em"),$o=r("tracked"),ei=r(" not "),Ce=a("em"),ti=r("preallocated"),oi=r("."),jt=h(),pe=a("p"),ii=r(`The unplanned work needs to be driven down as much as possible—preferably to
zero—through improving quality. Operational improvements should be the most
prioritised work, as they directly improve the bottom line. Second to that would
be internal projects that are aimed at reducing the inventory (aka the backlog
of unfinished work in our case).`),St=h(),U=a("h2"),q=a("a"),ze=a("span"),ai=r("The crescendo"),Bt=h(),F=a("p"),si=r(`Well, and there you have it. It blows most uninitiated people’s minds but the
most important work in any product company is not the product. The most
important work is the work that improves operational efficiency and reduces
unfinished work and firefighting (aka distractions). Because this work allows
the team to spend `),Re=a("em"),ni=r("more"),li=r(" time on the product work, aka improve throughput."),Ut=h(),he=a("p"),ri=r(`If we walk into any modern manufacturing facility, this idea that operational
efficiency is the key is accepted as universal truth. In software engineering
though we’re still look at the “quality, speed, cost” triangle and believe that
we have to pick two. That is not true, because better quality improves speed,
and the two of them together improve costs and throughput”.`),qt=h(),b=a("p"),pi=r(`To put it in even simpler terms, there is no really product vs. everything else
division. `),Ke=a("em"),hi=r("All useful work"),fi=r(` is essentially product work. It’s either about
making the product or building a system to `),Je=a("em"),ui=r("make more product"),di=r(`. And the last one
should always be a priority because it makes more impact on the bottom line than
the product development itself.`),Ft=h(),fe=a("p"),mi=r(`And that is as good of a work prioritisation guidance as you will get in a
while:`),Gt=h(),y=a("ol"),Ze=a("li"),ci=r("Reduce the unplanned work to virtually zero"),wi=h(),De=a("li"),yi=r("Prioritise work that makes the team spend more time on building the product"),vi=h(),Qe=a("li"),ki=r("Spend everything else on building the actual product"),bi=h(),Ve=a("li"),Ei=r(`Things that don’t add to either the product directly, or to making more
product should not be on the backlog, end of story`),this.h()},l(e){E=s(e,"P",{});var i=n(E);Wt=p(i,`I’ve seen I fair few new technology leaders and engineering managers at work,
and, by far, the most common scenario where they struggle is to manage work
priorities. New leaders often take delivery management rather literally, and
when faced business pressures, they cram the roadmap with features. And, that
plan inevitably fails.`),i.forEach(t),Xe=f(e),R=s(e,"P",{});var Li=n(R);Ct=p(Li,`To be fair, experience comes with experience, and one needs to make mistakes to
learn. Knowing the problem is half if a battle though. And so today, I’ll try to
put together a framework for thinking about work that is on the plate, how to
prioritise it, and ultimately, well, manage better.`),Li.forEach(t),Ye=f(e),g=s(e,"H2",{id:!0});var gi=n(g);_=s(gi,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Mi=n(_);ce=s(Mi,"SPAN",{class:!0}),n(ce).forEach(t),Mi.forEach(t),zt=p(gi,"The four types of work"),gi.forEach(t),$e=f(e),K=s(e,"P",{});var ji=n(K);Rt=p(ji,`The concept of four types of work was popularised in the software engineering
community by the book called “the phoenix project”. Although, technically, the
idea was lifted—as most of the book—from another book called “The Goal” by
Eliyahu Goldratt.`),ji.forEach(t),et=f(e),J=s(e,"P",{});var Si=n(J);Kt=p(Si,`The point they’re trying to make is quite simple. Generally speaking there are
four types of work in any organisation:`),Si.forEach(t),tt=f(e),d=s(e,"UL",{});var G=n(d);we=s(G,"LI",{});var Bi=n(we);Jt=p(Bi,"Business projects"),Bi.forEach(t),Zt=f(G),ye=s(G,"LI",{});var Ui=n(ye);Dt=p(Ui,"Internal projects"),Ui.forEach(t),Qt=f(G),ve=s(G,"LI",{});var qi=n(ve);Vt=p(qi,"Operational projects"),qi.forEach(t),Xt=f(G),ke=s(G,"LI",{});var Fi=n(ke);Yt=p(Fi,"Unplanned work"),Fi.forEach(t),G.forEach(t),ot=f(e),Z=s(e,"P",{});var Gi=n(Z);$t=p(Gi,`Which is probably rather vague when applied to the software engineering context.
So, allow me to frivolously translate that into the terms we all can relate to.`),Gi.forEach(t),it=f(e),m=s(e,"UL",{});var N=n(m);be=s(N,"LI",{});var Ni=n(be);eo=p(Ni,"Product features development"),Ni.forEach(t),to=f(N),Ee=s(N,"LI",{});var Oi=n(Ee);oo=p(Oi,"Core technology development"),Oi.forEach(t),io=f(N),ge=s(N,"LI",{});var Hi=n(ge);ao=p(Hi,"Optimisations (cost, skills, reliability, performance, etc)"),Hi.forEach(t),so=f(N),_e=s(N,"LI",{});var Wi=n(_e);no=p(Wi,"Putting the fires down"),Wi.forEach(t),N.forEach(t),at=f(e),D=s(e,"P",{});var Ci=n(D);lo=p(Ci,`The point of this model is that those four types of work are always present no
matter the business or product. And if a roadmap only consists of features, the
other types of work don’t simply disappear. Instead the work goes invisible, and
that inevitably derails the actual features development.`),Ci.forEach(t),st=f(e),P=s(e,"H2",{id:!0});var _i=n(P);I=s(_i,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var zi=n(I);Pe=s(zi,"SPAN",{class:!0}),n(Pe).forEach(t),zi.forEach(t),ro=p(_i,"Another way to slice it"),_i.forEach(t),nt=f(e),Q=s(e,"P",{});var Ri=n(Q);po=p(Ri,`There is a bit of a problem with this model when it’s applied to software
engineering teams. Because when we try to implement it verbatim, here is how
stakeholders see this list:`),Ri.forEach(t),lt=f(e),c=s(e,"UL",{});var O=n(c);Ie=s(O,"LI",{});var Ki=n(Ie);ho=p(Ki,"Features development ← stuff you supposed to do!"),Ki.forEach(t),fo=f(O),Te=s(O,"LI",{});var Ji=n(Te);uo=p(Ji,"Core technology ← gold plating"),Ji.forEach(t),mo=f(O),xe=s(O,"LI",{});var Zi=n(xe);co=p(Zi,"Optimisations ← unnecessary, supposed to magically happen by default"),Zi.forEach(t),wo=f(O),Ae=s(O,"LI",{});var Di=n(Ae);yo=p(Di,"Firefighting ← basically engineering fuck-ups and avoidable heroics"),Di.forEach(t),O.forEach(t),rt=f(e),V=s(e,"P",{});var Qi=n(V);vo=p(Qi,`As you can see, unless your roadmap is not 90% filled with features, this
categorisation might not necessarily be conducive to happy planning and
execution. And so people try another way to slice the cake.`),Qi.forEach(t),pt=f(e),X=s(e,"P",{});var Vi=n(X);ko=p(Vi,`For example, a common strategy is to slice work into categories based on two
dichotomies: Planned/Unplanned and Business/Maintenance work.`),Vi.forEach(t),ht=f(e),C=s(e,"PRE",{class:!0});var Fa=n(C);Fa.forEach(t),ft=f(e),Y=s(e,"P",{});var Xi=n(Y);bo=p(Xi,`This puts most of the work on a sort of even footing, and although there is
still the business/maintenance division, it is much easier to reason about. It’s
all just work on one field.`),Xi.forEach(t),ut=f(e),T=s(e,"H2",{id:!0});var Pi=n(T);x=s(Pi,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Yi=n(x);Le=s(Yi,"SPAN",{class:!0}),n(Le).forEach(t),Yi.forEach(t),Eo=p(Pi,"The prioritisation game"),Pi.forEach(t),dt=f(e),$=s(e,"P",{});var $i=n($);go=p($i,`Whichever categorisation system we choose, the next step is normally to
negotiate percentage allocations for each category. For example:`),$i.forEach(t),mt=f(e),v=s(e,"UL",{});var ue=n(v);Me=s(ue,"LI",{});var ea=n(Me);_o=p(ea,"Planned business work (aka the roadmap) - 50%"),ea.forEach(t),Po=f(ue),je=s(ue,"LI",{});var ta=n(je);Io=p(ta,"Unplanned business (aka customer feedback) - 30%"),ta.forEach(t),To=f(ue),Se=s(ue,"LI",{});var oa=n(Se);xo=p(oa,"Maintenance work (aka make engineers shut up) - 20%"),oa.forEach(t),ue.forEach(t),ct=f(e),ee=s(e,"P",{});var ia=n(ee);Ao=p(ia,`And this is where everyone gets lost in the sauce a bit. Each successful company
claims to find the perfect ratio. Google was famous for having 20% time
allocated for “other stuff”, and such.`),ia.forEach(t),wt=f(e),te=s(e,"P",{});var aa=n(te);Lo=p(aa,`If your company does something similar, this is a huge step forward from the
status quo: the invisible work. But unfortunately, it doesn’t quite work all
that great because there are two problems to this system.`),aa.forEach(t),yt=f(e),A=s(e,"P",{});var Nt=n(A);Mo=p(Nt,`Firstly, a lot of tasks don’t fit neatly into those categories. Moreover, people
have a tendency to `),Be=s(Nt,"EM",{});var sa=n(Be);jo=p(sa,"present"),sa.forEach(t),So=p(Nt,` the work they really want to do as the number one
category, the roadmap, even though it’s not really that.`),Nt.forEach(t),vt=f(e),oe=s(e,"P",{});var na=n(oe);Bo=p(na,`The second problem is that those percent allocations are rather subjective. The
optimal percentage allocation will differ greatly on the operational context,
business pressures, state of technology, etc. Moreover, it will constantly shift
with time as a project/product evolves.`),na.forEach(t),kt=f(e),L=s(e,"H2",{id:!0});var Ii=n(L);M=s(Ii,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var la=n(M);Ue=s(la,"SPAN",{class:!0}),n(Ue).forEach(t),la.forEach(t),Uo=p(Ii,"Lost in translation"),Ii.forEach(t),bt=f(e),ie=s(e,"P",{});var ra=n(ie);qo=p(ra,`While engineering time is always in a limited supply, and it’s understandable
why someone would like to have guarantees over budget allocation for their own
priorities, these work categorisation frameworks were never meant to be used
like a bargaining chip.`),ra.forEach(t),Et=f(e),ae=s(e,"P",{});var pa=n(ae);Fo=p(pa,"Somehow the original intent of the four types of work was lost in translation."),pa.forEach(t),gt=f(e),se=s(e,"P",{});var ha=n(se);Go=p(ha,`The original idea of this categorisation was part of the constraints theory that
Eliyahu Goldratt was developing. He was an exceptional systems thinker and he
meant this framework to serve as a guide for production optimisation. More
specifically he saw this as a process of increasing business profits`),ha.forEach(t),_t=f(e),z=s(e,"PRE",{class:!0});var Ga=n(z);Ga.forEach(t),Pt=f(e),ne=s(e,"P",{});var fa=n(ne);No=p(fa,`And so the original meaning of the four types of work was to improve the
throughput, reduce inventory, and reduce the operational expenses. Not to
preallocate time for specific types of work.`),fa.forEach(t),It=f(e),j=s(e,"H2",{id:!0});var Ti=n(j);S=s(Ti,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ua=n(S);qe=s(ua,"SPAN",{class:!0}),n(qe).forEach(t),ua.forEach(t),Oo=p(Ti,"Lets try again"),Ti.forEach(t),Tt=f(e),le=s(e,"P",{});var da=n(le);Ho=p(da,"Lets bring the original classification back and see how it works:"),da.forEach(t),xt=f(e),w=s(e,"UL",{});var H=n(w);Fe=s(H,"LI",{});var ma=n(Fe);Wo=p(ma,"Business projects"),ma.forEach(t),Co=f(H),Ge=s(H,"LI",{});var ca=n(Ge);zo=p(ca,"Internal projects"),ca.forEach(t),Ro=f(H),Ne=s(H,"LI",{});var wa=n(Ne);Ko=p(wa,"Operational improvements"),wa.forEach(t),Jo=f(H),Oe=s(H,"LI",{});var ya=n(Oe);Zo=p(ya,"Unplanned projects"),ya.forEach(t),H.forEach(t),At=f(e),B=s(e,"P",{});var Ot=n(B);Do=p(Ot,"The idea is to maximise production volume "),He=s(Ot,"EM",{});var va=n(He);Qo=p(va,"while driving the cost down"),va.forEach(t),Vo=p(Ot,`. The
product itself was never the point in this framework. Building a system that
maximises the product output and drives costs down was. And that puts the whole
system upside down.`),Ot.forEach(t),Lt=f(e),re=s(e,"P",{});var ka=n(re);Xo=p(ka,`Normally a company would put the product work at the top of their priorities.
While understandable, that might not actually be to the best interest of the
business. To put it simply if product is put ahead of operational efficiency it
won’t necessarily result in profits.`),ka.forEach(t),Mt=f(e),k=s(e,"P",{});var de=n(k);Yo=p(de,`And so, in Golratt’s theory it was all about finding the system’s constraints
that limit throughput and adds up the costs, and then addressing them. And to
that end the amount of work that goes into each category was supposed to be
`),We=s(de,"EM",{});var ba=n(We);$o=p(ba,"tracked"),ba.forEach(t),ei=p(de," not "),Ce=s(de,"EM",{});var Ea=n(Ce);ti=p(Ea,"preallocated"),Ea.forEach(t),oi=p(de,"."),de.forEach(t),jt=f(e),pe=s(e,"P",{});var ga=n(pe);ii=p(ga,`The unplanned work needs to be driven down as much as possible—preferably to
zero—through improving quality. Operational improvements should be the most
prioritised work, as they directly improve the bottom line. Second to that would
be internal projects that are aimed at reducing the inventory (aka the backlog
of unfinished work in our case).`),ga.forEach(t),St=f(e),U=s(e,"H2",{id:!0});var xi=n(U);q=s(xi,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var _a=n(q);ze=s(_a,"SPAN",{class:!0}),n(ze).forEach(t),_a.forEach(t),ai=p(xi,"The crescendo"),xi.forEach(t),Bt=f(e),F=s(e,"P",{});var Ht=n(F);si=p(Ht,`Well, and there you have it. It blows most uninitiated people’s minds but the
most important work in any product company is not the product. The most
important work is the work that improves operational efficiency and reduces
unfinished work and firefighting (aka distractions). Because this work allows
the team to spend `),Re=s(Ht,"EM",{});var Pa=n(Re);ni=p(Pa,"more"),Pa.forEach(t),li=p(Ht," time on the product work, aka improve throughput."),Ht.forEach(t),Ut=f(e),he=s(e,"P",{});var Ia=n(he);ri=p(Ia,`If we walk into any modern manufacturing facility, this idea that operational
efficiency is the key is accepted as universal truth. In software engineering
though we’re still look at the “quality, speed, cost” triangle and believe that
we have to pick two. That is not true, because better quality improves speed,
and the two of them together improve costs and throughput”.`),Ia.forEach(t),qt=f(e),b=s(e,"P",{});var me=n(b);pi=p(me,`To put it in even simpler terms, there is no really product vs. everything else
division. `),Ke=s(me,"EM",{});var Ta=n(Ke);hi=p(Ta,"All useful work"),Ta.forEach(t),fi=p(me,` is essentially product work. It’s either about
making the product or building a system to `),Je=s(me,"EM",{});var xa=n(Je);ui=p(xa,"make more product"),xa.forEach(t),di=p(me,`. And the last one
should always be a priority because it makes more impact on the bottom line than
the product development itself.`),me.forEach(t),Ft=f(e),fe=s(e,"P",{});var Aa=n(fe);mi=p(Aa,`And that is as good of a work prioritisation guidance as you will get in a
while:`),Aa.forEach(t),Gt=f(e),y=s(e,"OL",{});var W=n(y);Ze=s(W,"LI",{});var La=n(Ze);ci=p(La,"Reduce the unplanned work to virtually zero"),La.forEach(t),wi=f(W),De=s(W,"LI",{});var Ma=n(De);yi=p(Ma,"Prioritise work that makes the team spend more time on building the product"),Ma.forEach(t),vi=f(W),Qe=s(W,"LI",{});var ja=n(Qe);ki=p(ja,"Spend everything else on building the actual product"),ja.forEach(t),bi=f(W),Ve=s(W,"LI",{});var Sa=n(Ve);Ei=p(Sa,`Things that don’t add to either the product directly, or to making more
product should not be on the backlog, end of story`),Sa.forEach(t),W.forEach(t),this.h()},h(){u(ce,"class","icon icon-link"),u(_,"aria-hidden","true"),u(_,"tabindex","-1"),u(_,"href","#the-four-types-of-work"),u(g,"id","the-four-types-of-work"),u(Pe,"class","icon icon-link"),u(I,"aria-hidden","true"),u(I,"tabindex","-1"),u(I,"href","#another-way-to-slice-it"),u(P,"id","another-way-to-slice-it"),u(C,"class","language-undefined"),u(Le,"class","icon icon-link"),u(x,"aria-hidden","true"),u(x,"tabindex","-1"),u(x,"href","#the-prioritisation-game"),u(T,"id","the-prioritisation-game"),u(Ue,"class","icon icon-link"),u(M,"aria-hidden","true"),u(M,"tabindex","-1"),u(M,"href","#lost-in-translation"),u(L,"id","lost-in-translation"),u(z,"class","language-undefined"),u(qe,"class","icon icon-link"),u(S,"aria-hidden","true"),u(S,"tabindex","-1"),u(S,"href","#lets-try-again"),u(j,"id","lets-try-again"),u(ze,"class","icon icon-link"),u(q,"aria-hidden","true"),u(q,"tabindex","-1"),u(q,"href","#the-crescendo"),u(U,"id","the-crescendo")},m(e,i){l(e,E,i),o(E,Wt),l(e,Xe,i),l(e,R,i),o(R,Ct),l(e,Ye,i),l(e,g,i),o(g,_),o(_,ce),o(g,zt),l(e,$e,i),l(e,K,i),o(K,Rt),l(e,et,i),l(e,J,i),o(J,Kt),l(e,tt,i),l(e,d,i),o(d,we),o(we,Jt),o(d,Zt),o(d,ye),o(ye,Dt),o(d,Qt),o(d,ve),o(ve,Vt),o(d,Xt),o(d,ke),o(ke,Yt),l(e,ot,i),l(e,Z,i),o(Z,$t),l(e,it,i),l(e,m,i),o(m,be),o(be,eo),o(m,to),o(m,Ee),o(Ee,oo),o(m,io),o(m,ge),o(ge,ao),o(m,so),o(m,_e),o(_e,no),l(e,at,i),l(e,D,i),o(D,lo),l(e,st,i),l(e,P,i),o(P,I),o(I,Pe),o(P,ro),l(e,nt,i),l(e,Q,i),o(Q,po),l(e,lt,i),l(e,c,i),o(c,Ie),o(Ie,ho),o(c,fo),o(c,Te),o(Te,uo),o(c,mo),o(c,xe),o(xe,co),o(c,wo),o(c,Ae),o(Ae,yo),l(e,rt,i),l(e,V,i),o(V,vo),l(e,pt,i),l(e,X,i),o(X,ko),l(e,ht,i),l(e,C,i),C.innerHTML=Ua,l(e,ft,i),l(e,Y,i),o(Y,bo),l(e,ut,i),l(e,T,i),o(T,x),o(x,Le),o(T,Eo),l(e,dt,i),l(e,$,i),o($,go),l(e,mt,i),l(e,v,i),o(v,Me),o(Me,_o),o(v,Po),o(v,je),o(je,Io),o(v,To),o(v,Se),o(Se,xo),l(e,ct,i),l(e,ee,i),o(ee,Ao),l(e,wt,i),l(e,te,i),o(te,Lo),l(e,yt,i),l(e,A,i),o(A,Mo),o(A,Be),o(Be,jo),o(A,So),l(e,vt,i),l(e,oe,i),o(oe,Bo),l(e,kt,i),l(e,L,i),o(L,M),o(M,Ue),o(L,Uo),l(e,bt,i),l(e,ie,i),o(ie,qo),l(e,Et,i),l(e,ae,i),o(ae,Fo),l(e,gt,i),l(e,se,i),o(se,Go),l(e,_t,i),l(e,z,i),z.innerHTML=qa,l(e,Pt,i),l(e,ne,i),o(ne,No),l(e,It,i),l(e,j,i),o(j,S),o(S,qe),o(j,Oo),l(e,Tt,i),l(e,le,i),o(le,Ho),l(e,xt,i),l(e,w,i),o(w,Fe),o(Fe,Wo),o(w,Co),o(w,Ge),o(Ge,zo),o(w,Ro),o(w,Ne),o(Ne,Ko),o(w,Jo),o(w,Oe),o(Oe,Zo),l(e,At,i),l(e,B,i),o(B,Do),o(B,He),o(He,Qo),o(B,Vo),l(e,Lt,i),l(e,re,i),o(re,Xo),l(e,Mt,i),l(e,k,i),o(k,Yo),o(k,We),o(We,$o),o(k,ei),o(k,Ce),o(Ce,ti),o(k,oi),l(e,jt,i),l(e,pe,i),o(pe,ii),l(e,St,i),l(e,U,i),o(U,q),o(q,ze),o(U,ai),l(e,Bt,i),l(e,F,i),o(F,si),o(F,Re),o(Re,ni),o(F,li),l(e,Ut,i),l(e,he,i),o(he,ri),l(e,qt,i),l(e,b,i),o(b,pi),o(b,Ke),o(Ke,hi),o(b,fi),o(b,Je),o(Je,ui),o(b,di),l(e,Ft,i),l(e,fe,i),o(fe,mi),l(e,Gt,i),l(e,y,i),o(y,Ze),o(Ze,ci),o(y,wi),o(y,De),o(De,yi),o(y,vi),o(y,Qe),o(Qe,ki),o(y,bi),o(y,Ve),o(Ve,Ei)},p:Ai,i:Ai,o:Ai,d(e){e&&t(E),e&&t(Xe),e&&t(R),e&&t(Ye),e&&t(g),e&&t($e),e&&t(K),e&&t(et),e&&t(J),e&&t(tt),e&&t(d),e&&t(ot),e&&t(Z),e&&t(it),e&&t(m),e&&t(at),e&&t(D),e&&t(st),e&&t(P),e&&t(nt),e&&t(Q),e&&t(lt),e&&t(c),e&&t(rt),e&&t(V),e&&t(pt),e&&t(X),e&&t(ht),e&&t(C),e&&t(ft),e&&t(Y),e&&t(ut),e&&t(T),e&&t(dt),e&&t($),e&&t(mt),e&&t(v),e&&t(ct),e&&t(ee),e&&t(wt),e&&t(te),e&&t(yt),e&&t(A),e&&t(vt),e&&t(oe),e&&t(kt),e&&t(L),e&&t(bt),e&&t(ie),e&&t(Et),e&&t(ae),e&&t(gt),e&&t(se),e&&t(_t),e&&t(z),e&&t(Pt),e&&t(ne),e&&t(It),e&&t(j),e&&t(Tt),e&&t(le),e&&t(xt),e&&t(w),e&&t(At),e&&t(B),e&&t(Lt),e&&t(re),e&&t(Mt),e&&t(k),e&&t(jt),e&&t(pe),e&&t(St),e&&t(U),e&&t(Bt),e&&t(F),e&&t(Ut),e&&t(he),e&&t(qt),e&&t(b),e&&t(Ft),e&&t(fe),e&&t(Gt),e&&t(y)}}}const za={slug:"LZcMc",date:"19 June 2023",title:"The four types of work",description:"Looking into software engineering work categorisation and prioritisation",tags:["engineering management","management","leadership","strategy"],medium:{tags:["Engineering Management","Technical Leadership","Leadership","Management","Strategy"]}};class Ra extends Na{constructor(E){super(),Oa(this,E,null,Wa,Ha,{})}}export{Ra as default,za as metadata};
