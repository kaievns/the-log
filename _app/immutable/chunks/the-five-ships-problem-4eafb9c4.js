import{S as mo,i as yo,s as vo,k as s,q as r,a as p,l as n,m as l,r as h,h as t,c as f,n as u,b as i,F as a,C as Bt}from"./index-920be987.js";function wo(uo){let m,Ne,V,Ce,Ue,se,g,Fe,ne,x,Re,le,T,De,re,j,Ge,he,d,y,X,Je,pe,O,Ke,fe,q,Qe,ue,B,Ve,me,S,Xe,de,v,w,Z,Ze,ye,W,$e,ve,H,et,we,Y,tt,ke,L,ot,ce,k,it,M,at,st,be,z,nt,Ee,c,lt,$,rt,ht,_e,N,pt,Ae,b,ee,ft,ut,te,mt,Ie,C,dt,Pe,E,_,oe,yt,ge,U,vt,xe,F,wt,Te,R,kt,je,D,ct,Oe,A,bt,ie,Et,_t,qe,G,At,Be,I,P,ae,It,Se,J,Pt,We,K,gt,He,Q,xt;return{c(){m=s("p"),Ne=r(`We talk a lot about vertical vs. horizontal slicing. We write user stories that
encapsulate multiple architecture layers to define `),V=s("em"),Ce=r("user value"),Ue=r(`. And then we
hire a whole bunch of full-stack engineers and spread those stories among the
team members.`),se=p(),g=s("p"),Fe=r(`A typical scrum sprit would usually contain a variety of those stories, plus
random bug fixes, UI improvements, performance patches, and a whole lot of other
tasks. And the team members would just grab them one by one as they go.`),ne=p(),x=s("p"),Re=r(`There is an old thought experiment that contradicts this approach to work. I
like to occasionally throw it around to test POs/TLs process thinking. And
weirdly enough a lot of them fail at the experiment; or they give the right
answer, but keep sticking to the opposite practice in their day job.`),le=p(),T=s("p"),De=r(`As they say, no amount of proof will change the minds of true believers. So, I’m
not here to change anyone’s mind. I’m just sharing an idea.`),re=p(),j=s("p"),Ge=r(`But, before we go, the credit for this idea should go where it’s due. I don’t
know who’s the author of this experiment, but I red about it first in a book
called “beyond the goal”, and it’s easily one of my top 5 management books of
all times.`),he=p(),d=s("h2"),y=s("a"),X=s("span"),Je=r("The five ships problem"),pe=p(),O=s("p"),Ke=r(`Imagine there are five ships in a dock that need unloading, and you have 5
people to do the job.`),fe=p(),q=s("p"),Qe=r(`It takes a person roughly 5 days give or take to unload a ship. And you can
assign multiple people to the same ship if you want to.`),ue=p(),B=s("p"),Ve=r(`And so the question is, how would you assign people to those five ships and why?
On one end of the spectrum you would assign each person individually to each
ship and let them work in parallel. On the ether end you assign all five people
to one ship and let them work through the ships one by one.`),me=p(),S=s("p"),Xe=r("Take a moment and think about it. How would you approach this task?"),de=p(),v=s("h2"),w=s("a"),Z=s("span"),Ze=r("The reasoning"),ye=p(),W=s("p"),$e=r(`So, yeah, I know, I rarely stop and think for myself either. Why bother if the
author will give the answer anyway, right?`),ve=p(),H=s("p"),et=r("Okay, last chance."),we=p(),Y=s("p"),tt=r("And so, the right answer is to assign all 5 of them to one ship at a time."),ke=p(),L=s("p"),ot=r(`I know, it seems like in a theoretical scenario like this one, there should be
no difference. But, there is one, and it has to do with probabilities.`),ce=p(),k=s("p"),it=r("If you red my "),M=s("a"),at=r("rant about estimations"),st=r(`, you know that estimations
have an asymmetric probabilities curve, and work on average takes longer than
estimated. And even if you had a normal distribution you would still have a
50/50 chance that it would take more than 5 days for a person to unload a ship.`),be=p(),z=s("p"),nt=r(`And so, if you would assign one person per ship, in 5 days, you would have 2.5
disappointed ship captains. More likely 3 or 4 of them actually. All while
taking valuable space in the dock to keep all 5 ships moored for a week. Which
means extra expenses for the docking company.`),Ee=p(),c=s("p"),lt=r(`On the other hand, if you assign all 5 people per ship. You’re most likely going
to unload 4 out of 5 ships on time. But you’re also going to unload the first
three ships `),$=s("em"),rt=r("ahead of time"),ht=r(`. Which no doubt will delight the captains, and let
the dock to kick them out sooner.`),_e=p(),N=s("p"),pt=r(`And so the real choice is not in how many people should be assigned to a ship.
The real choice is this:`),Ae=p(),b=s("ol"),ee=s("li"),ft=r("2-3 pissed off customers and full inventory overheads"),ut=p(),te=s("li"),mt=r("2-3 extra happy customers and less inventory overheads"),Ie=p(),C=s("p"),dt=r("And yeah, it’s a trick question, there is no real choice."),Pe=p(),E=s("h2"),_=s("a"),oe=s("span"),yt=r("The mythical man month"),ge=p(),U=s("p"),vt=r(`One of the most provocative software projects management books ever written is
probably “the mythical man month”. I consider it a great piece of management
satire, and it has this famous graph:`),xe=p(),F=s("p"),wt=r(`This graph describes a child birth and shows the dependency between the number
of people involved in labour and the number of children delivered.`),Te=p(),R=s("p"),kt=r(`Yes, it’s a joke. But, some people take this picture for the face value and use
it as a proof that teamwork in software engineering is stupid.`),je=p(),D=s("p"),ct=r(`Truth be told, I actually have a guilty habit of giving this book to read to new
tech leads and engineering managers as part of my coaching. It’s a test. I want
to see if the person will understand the joke, or if they will start quoting the
book verbatim.`),Oe=p(),A=s("p"),bt=r(`And to be frank, working in a team can be taxing indeed. As a very introvertive
friend of mine likes to joke: `),ie=s("em"),Et=r(`“I didn’t get into software engineering to work
with other people”`),_t=r("."),qe=p(),G=s("p"),At=r(`But then again. Even if you assign one person to a user story, they will work on
tasks one by one, won’t they? And many of those tasks can be parallelised,
because it’s vertical slicing and there are layers.`),Be=p(),I=s("h2"),P=s("a"),ae=s("span"),It=r("Team goals"),Se=p(),J=s("p"),Pt=r(`Okay, raise your hand if you ever been in a situation where you hand to say
something along the lines of: “erm… honestly, I have no idea. [the other team
member name] worked on this, go ask them”.`),We=p(),K=s("p"),gt=r(`Yeah, I know, it’s all trick questions today isn’t it? Every software engineer
was in this situation at least three times this week alone. But, wouldn’t it be
amazing not to have this situation as a norm?`),He=p(),Q=s("p"),xt=r("The answer to all of those questions is the same: “team goals”"),this.h()},l(e){m=n(e,"P",{});var o=l(m);Ne=h(o,`We talk a lot about vertical vs. horizontal slicing. We write user stories that
encapsulate multiple architecture layers to define `),V=n(o,"EM",{});var St=l(V);Ce=h(St,"user value"),St.forEach(t),Ue=h(o,`. And then we
hire a whole bunch of full-stack engineers and spread those stories among the
team members.`),o.forEach(t),se=f(e),g=n(e,"P",{});var Wt=l(g);Fe=h(Wt,`A typical scrum sprit would usually contain a variety of those stories, plus
random bug fixes, UI improvements, performance patches, and a whole lot of other
tasks. And the team members would just grab them one by one as they go.`),Wt.forEach(t),ne=f(e),x=n(e,"P",{});var Ht=l(x);Re=h(Ht,`There is an old thought experiment that contradicts this approach to work. I
like to occasionally throw it around to test POs/TLs process thinking. And
weirdly enough a lot of them fail at the experiment; or they give the right
answer, but keep sticking to the opposite practice in their day job.`),Ht.forEach(t),le=f(e),T=n(e,"P",{});var Yt=l(T);De=h(Yt,`As they say, no amount of proof will change the minds of true believers. So, I’m
not here to change anyone’s mind. I’m just sharing an idea.`),Yt.forEach(t),re=f(e),j=n(e,"P",{});var Lt=l(j);Ge=h(Lt,`But, before we go, the credit for this idea should go where it’s due. I don’t
know who’s the author of this experiment, but I red about it first in a book
called “beyond the goal”, and it’s easily one of my top 5 management books of
all times.`),Lt.forEach(t),he=f(e),d=n(e,"H2",{id:!0});var Tt=l(d);y=n(Tt,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Mt=l(y);X=n(Mt,"SPAN",{class:!0}),l(X).forEach(t),Mt.forEach(t),Je=h(Tt,"The five ships problem"),Tt.forEach(t),pe=f(e),O=n(e,"P",{});var zt=l(O);Ke=h(zt,`Imagine there are five ships in a dock that need unloading, and you have 5
people to do the job.`),zt.forEach(t),fe=f(e),q=n(e,"P",{});var Nt=l(q);Qe=h(Nt,`It takes a person roughly 5 days give or take to unload a ship. And you can
assign multiple people to the same ship if you want to.`),Nt.forEach(t),ue=f(e),B=n(e,"P",{});var Ct=l(B);Ve=h(Ct,`And so the question is, how would you assign people to those five ships and why?
On one end of the spectrum you would assign each person individually to each
ship and let them work in parallel. On the ether end you assign all five people
to one ship and let them work through the ships one by one.`),Ct.forEach(t),me=f(e),S=n(e,"P",{});var Ut=l(S);Xe=h(Ut,"Take a moment and think about it. How would you approach this task?"),Ut.forEach(t),de=f(e),v=n(e,"H2",{id:!0});var jt=l(v);w=n(jt,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Ft=l(w);Z=n(Ft,"SPAN",{class:!0}),l(Z).forEach(t),Ft.forEach(t),Ze=h(jt,"The reasoning"),jt.forEach(t),ye=f(e),W=n(e,"P",{});var Rt=l(W);$e=h(Rt,`So, yeah, I know, I rarely stop and think for myself either. Why bother if the
author will give the answer anyway, right?`),Rt.forEach(t),ve=f(e),H=n(e,"P",{});var Dt=l(H);et=h(Dt,"Okay, last chance."),Dt.forEach(t),we=f(e),Y=n(e,"P",{});var Gt=l(Y);tt=h(Gt,"And so, the right answer is to assign all 5 of them to one ship at a time."),Gt.forEach(t),ke=f(e),L=n(e,"P",{});var Jt=l(L);ot=h(Jt,`I know, it seems like in a theoretical scenario like this one, there should be
no difference. But, there is one, and it has to do with probabilities.`),Jt.forEach(t),ce=f(e),k=n(e,"P",{});var Ye=l(k);it=h(Ye,"If you red my "),M=n(Ye,"A",{href:!0});var Kt=l(M);at=h(Kt,"rant about estimations"),Kt.forEach(t),st=h(Ye,`, you know that estimations
have an asymmetric probabilities curve, and work on average takes longer than
estimated. And even if you had a normal distribution you would still have a
50/50 chance that it would take more than 5 days for a person to unload a ship.`),Ye.forEach(t),be=f(e),z=n(e,"P",{});var Qt=l(z);nt=h(Qt,`And so, if you would assign one person per ship, in 5 days, you would have 2.5
disappointed ship captains. More likely 3 or 4 of them actually. All while
taking valuable space in the dock to keep all 5 ships moored for a week. Which
means extra expenses for the docking company.`),Qt.forEach(t),Ee=f(e),c=n(e,"P",{});var Le=l(c);lt=h(Le,`On the other hand, if you assign all 5 people per ship. You’re most likely going
to unload 4 out of 5 ships on time. But you’re also going to unload the first
three ships `),$=n(Le,"EM",{});var Vt=l($);rt=h(Vt,"ahead of time"),Vt.forEach(t),ht=h(Le,`. Which no doubt will delight the captains, and let
the dock to kick them out sooner.`),Le.forEach(t),_e=f(e),N=n(e,"P",{});var Xt=l(N);pt=h(Xt,`And so the real choice is not in how many people should be assigned to a ship.
The real choice is this:`),Xt.forEach(t),Ae=f(e),b=n(e,"OL",{});var Me=l(b);ee=n(Me,"LI",{});var Zt=l(ee);ft=h(Zt,"2-3 pissed off customers and full inventory overheads"),Zt.forEach(t),ut=f(Me),te=n(Me,"LI",{});var $t=l(te);mt=h($t,"2-3 extra happy customers and less inventory overheads"),$t.forEach(t),Me.forEach(t),Ie=f(e),C=n(e,"P",{});var eo=l(C);dt=h(eo,"And yeah, it’s a trick question, there is no real choice."),eo.forEach(t),Pe=f(e),E=n(e,"H2",{id:!0});var Ot=l(E);_=n(Ot,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var to=l(_);oe=n(to,"SPAN",{class:!0}),l(oe).forEach(t),to.forEach(t),yt=h(Ot,"The mythical man month"),Ot.forEach(t),ge=f(e),U=n(e,"P",{});var oo=l(U);vt=h(oo,`One of the most provocative software projects management books ever written is
probably “the mythical man month”. I consider it a great piece of management
satire, and it has this famous graph:`),oo.forEach(t),xe=f(e),F=n(e,"P",{});var io=l(F);wt=h(io,`This graph describes a child birth and shows the dependency between the number
of people involved in labour and the number of children delivered.`),io.forEach(t),Te=f(e),R=n(e,"P",{});var ao=l(R);kt=h(ao,`Yes, it’s a joke. But, some people take this picture for the face value and use
it as a proof that teamwork in software engineering is stupid.`),ao.forEach(t),je=f(e),D=n(e,"P",{});var so=l(D);ct=h(so,`Truth be told, I actually have a guilty habit of giving this book to read to new
tech leads and engineering managers as part of my coaching. It’s a test. I want
to see if the person will understand the joke, or if they will start quoting the
book verbatim.`),so.forEach(t),Oe=f(e),A=n(e,"P",{});var ze=l(A);bt=h(ze,`And to be frank, working in a team can be taxing indeed. As a very introvertive
friend of mine likes to joke: `),ie=n(ze,"EM",{});var no=l(ie);Et=h(no,`“I didn’t get into software engineering to work
with other people”`),no.forEach(t),_t=h(ze,"."),ze.forEach(t),qe=f(e),G=n(e,"P",{});var lo=l(G);At=h(lo,`But then again. Even if you assign one person to a user story, they will work on
tasks one by one, won’t they? And many of those tasks can be parallelised,
because it’s vertical slicing and there are layers.`),lo.forEach(t),Be=f(e),I=n(e,"H2",{id:!0});var qt=l(I);P=n(qt,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ro=l(P);ae=n(ro,"SPAN",{class:!0}),l(ae).forEach(t),ro.forEach(t),It=h(qt,"Team goals"),qt.forEach(t),Se=f(e),J=n(e,"P",{});var ho=l(J);Pt=h(ho,`Okay, raise your hand if you ever been in a situation where you hand to say
something along the lines of: “erm… honestly, I have no idea. [the other team
member name] worked on this, go ask them”.`),ho.forEach(t),We=f(e),K=n(e,"P",{});var po=l(K);gt=h(po,`Yeah, I know, it’s all trick questions today isn’t it? Every software engineer
was in this situation at least three times this week alone. But, wouldn’t it be
amazing not to have this situation as a norm?`),po.forEach(t),He=f(e),Q=n(e,"P",{});var fo=l(Q);xt=h(fo,"The answer to all of those questions is the same: “team goals”"),fo.forEach(t),this.h()},h(){u(X,"class","icon icon-link"),u(y,"aria-hidden","true"),u(y,"tabindex","-1"),u(y,"href","#the-five-ships-problem"),u(d,"id","the-five-ships-problem"),u(Z,"class","icon icon-link"),u(w,"aria-hidden","true"),u(w,"tabindex","-1"),u(w,"href","#the-reasoning"),u(v,"id","the-reasoning"),u(M,"href","/posts/3OvR4"),u(oe,"class","icon icon-link"),u(_,"aria-hidden","true"),u(_,"tabindex","-1"),u(_,"href","#the-mythical-man-month"),u(E,"id","the-mythical-man-month"),u(ae,"class","icon icon-link"),u(P,"aria-hidden","true"),u(P,"tabindex","-1"),u(P,"href","#team-goals"),u(I,"id","team-goals")},m(e,o){i(e,m,o),a(m,Ne),a(m,V),a(V,Ce),a(m,Ue),i(e,se,o),i(e,g,o),a(g,Fe),i(e,ne,o),i(e,x,o),a(x,Re),i(e,le,o),i(e,T,o),a(T,De),i(e,re,o),i(e,j,o),a(j,Ge),i(e,he,o),i(e,d,o),a(d,y),a(y,X),a(d,Je),i(e,pe,o),i(e,O,o),a(O,Ke),i(e,fe,o),i(e,q,o),a(q,Qe),i(e,ue,o),i(e,B,o),a(B,Ve),i(e,me,o),i(e,S,o),a(S,Xe),i(e,de,o),i(e,v,o),a(v,w),a(w,Z),a(v,Ze),i(e,ye,o),i(e,W,o),a(W,$e),i(e,ve,o),i(e,H,o),a(H,et),i(e,we,o),i(e,Y,o),a(Y,tt),i(e,ke,o),i(e,L,o),a(L,ot),i(e,ce,o),i(e,k,o),a(k,it),a(k,M),a(M,at),a(k,st),i(e,be,o),i(e,z,o),a(z,nt),i(e,Ee,o),i(e,c,o),a(c,lt),a(c,$),a($,rt),a(c,ht),i(e,_e,o),i(e,N,o),a(N,pt),i(e,Ae,o),i(e,b,o),a(b,ee),a(ee,ft),a(b,ut),a(b,te),a(te,mt),i(e,Ie,o),i(e,C,o),a(C,dt),i(e,Pe,o),i(e,E,o),a(E,_),a(_,oe),a(E,yt),i(e,ge,o),i(e,U,o),a(U,vt),i(e,xe,o),i(e,F,o),a(F,wt),i(e,Te,o),i(e,R,o),a(R,kt),i(e,je,o),i(e,D,o),a(D,ct),i(e,Oe,o),i(e,A,o),a(A,bt),a(A,ie),a(ie,Et),a(A,_t),i(e,qe,o),i(e,G,o),a(G,At),i(e,Be,o),i(e,I,o),a(I,P),a(P,ae),a(I,It),i(e,Se,o),i(e,J,o),a(J,Pt),i(e,We,o),i(e,K,o),a(K,gt),i(e,He,o),i(e,Q,o),a(Q,xt)},p:Bt,i:Bt,o:Bt,d(e){e&&t(m),e&&t(se),e&&t(g),e&&t(ne),e&&t(x),e&&t(le),e&&t(T),e&&t(re),e&&t(j),e&&t(he),e&&t(d),e&&t(pe),e&&t(O),e&&t(fe),e&&t(q),e&&t(ue),e&&t(B),e&&t(me),e&&t(S),e&&t(de),e&&t(v),e&&t(ye),e&&t(W),e&&t(ve),e&&t(H),e&&t(we),e&&t(Y),e&&t(ke),e&&t(L),e&&t(ce),e&&t(k),e&&t(be),e&&t(z),e&&t(Ee),e&&t(c),e&&t(_e),e&&t(N),e&&t(Ae),e&&t(b),e&&t(Ie),e&&t(C),e&&t(Pe),e&&t(E),e&&t(ge),e&&t(U),e&&t(xe),e&&t(F),e&&t(Te),e&&t(R),e&&t(je),e&&t(D),e&&t(Oe),e&&t(A),e&&t(qe),e&&t(G),e&&t(Be),e&&t(I),e&&t(Se),e&&t(J),e&&t(We),e&&t(K),e&&t(He),e&&t(Q)}}}const co={title:"The five ships problem",draft:!0};class bo extends mo{constructor(m){super(),yo(this,m,null,wo,vo,{})}}export{bo as default,co as metadata};
