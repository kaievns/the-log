import{S as fn,i as pn,s as cn,k as a,q as r,a as m,l as s,m as l,r as h,h as t,c as u,n as d,b as o,F as i,C as Pi}from"./index-920be987.js";function yn(dn){let y,ht,Ae,C,mt,Ie,w,b,ne,ut,Pe,S,dt,xe,O,ft,Me,p,pt,oe,ct,yt,ae,wt,bt,Te,H,vt,qe,f,z,se,gt,kt,Et,U,le,_t,At,It,L,re,Pt,xt,Mt,N,he,Tt,qt,We,D,Wt,Be,Y,Bt,je,c,v,me,jt,ue,Ct,St,Ce,F,Ot,Se,g,Ht,de,zt,Ut,Oe,k,Lt,fe,Nt,Dt,He,J,Yt,ze,E,Ft,pe,Jt,Rt,Ue,_,A,ce,Vt,Le,R,Kt,Ne,I,Qt,ye,Gt,Xt,De,P,Zt,we,$t,ei,Ye,V,ti,Fe,K,ii,Je,x,M,be,ni,Re,T,oi,ve,ai,si,Ve,Q,li,Ke,q,ri,ge,hi,mi,Qe,G,ui,Ge,X,di,Xe,Z,fi,Ze,W,B,ke,pi,$e,$,ci,et,ee,Ee,yi,tt,te,wi;return{c(){y=a("p"),ht=r(`Welcome to the part two of our little estimations chat. Having committed some
rather strongly worded criticism of the ubiquitously spread practice of
estimating everything that moves in software engineering, I feel strongly that I
shan’t leave you without giving you an alternative. Hence, the part two.`),Ae=m(),C=a("p"),mt=r("Let’s just dive into this."),Ie=m(),w=a("h2"),b=a("a"),ne=a("span"),ut=r("Why do we estimate anyway?"),Pe=m(),S=a("p"),dt=r(`Why do we estimate anyway? It’s a bit of a silly question, isn’t it? But, the
problem with silly questions is that people tend to brush them off with some
readily made answers, like: “oh, those bastards in management just want to
control everything”. And to a degree that is true: managers gonna manage. But,
managers are not evil clowns. Okay, some of them are, but the bulk of them just
want to help.`),xe=m(),O=a("p"),ft=r(`If you get to the bottom of it, the role of a manager is to manage resources. As
in to make sure resources are not wasted on useless efforts. And managers have
their own bosses. And those bosses tend to be allergic to sophistry. Bosses want
to see progress. And they want to see it in basic fonts, black and white
colours, and with some numbers. Which is actually fair, because the boss’s job
is to make sure that the bottom line moves.`),Me=m(),p=a("p"),pt=r(`The technical term for this is “accountability”. Which means, that the manager
should be able to `),oe=a("em"),ct=r("account for"),yt=r(` what is going on in their area of
responsibility. And when a manager can answer the question of `),ae=a("em"),wt=r("when"),bt=r(` something
will be done, they might even feel good about themselves for a moment.`),Te=m(),H=a("p"),vt=r(`And because of the ever present scrum practices and tools like Jira, managers
have some numbers that they can latch onto. And that is where the BS bingo
sessions start.`),qe=m(),f=a("ul"),z=a("li"),se=a("em"),gt=r("Developer"),kt=r(": .oO(I have no idea, so I better double the number)"),Et=m(),U=a("li"),le=a("em"),_t=r("Manager"),At=r(": .oO(Those devs have no idea, so I better double their estimate)"),It=m(),L=a("li"),re=a("em"),Pt=r("Boss"),xt=r(": .oO(Managers fail to deliver 60% of the time, so I better double it)"),Mt=m(),N=a("li"),he=a("em"),Tt=r("Customer"),qt=r(": .oO(They have no idea, so I’ll just complain until it’s done)"),We=m(),D=a("p"),Wt=r(`Everyone wants certainty. Predictability in life makes as feel all warm and
fuzzy on the inside. And so we estimate, to feed our need for certainty with
estimations. The problem is though, that in software engineering, especially in
disruptive software engineering there is no certainty.`),Be=m(),Y=a("p"),Bt=r(`The whole point of running a software business is to take risks. And the more
disruptive the product is the better it pays off. You’re literally pushed to do
what others didn’t consider on a daily basis.`),je=m(),c=a("h2"),v=a("a"),me=a("span"),jt=r("Do we "),ue=a("em"),Ct=r("have to"),St=r(" estimate?"),Ce=m(),F=a("p"),Ot=r(`Unlike a factory floor, where you can measure repeated work, and estimate, and
assign confidence levels. In software engineering, most products have virtually
zero marginal cost and need to be produced only once. Which means, that
practically all work is really done for the first time, every time.`),Se=m(),g=a("p"),Ht=r("Physicists have a good joke about this. They say that "),de=a("em"),zt=r(`the accuracy of a
singular measurement is zero`),Ut=r("."),Oe=m(),k=a("p"),Lt=r(`Everyone knows that those estimations are less than stellar, and the question we
should be asking is this: do we `),fe=a("em"),Nt=r("have to"),Dt=r(` estimate? I think the answer is a
little bit complex than yes or no. And it’s complex because there are two
separate problems here: budgeting and commitments.`),He=m(),J=a("p"),Yt=r(`Budgeting is internal, it is ultimately about resources allocation. And I
strongly on the side that one doesn’t need estimations to make solid progress.
Moreover estimations will hinder the progress more than help.`),ze=m(),E=a("p"),Ft=r(`Commitments are external by nature. But, again not all commitments are made
equally. What you really want to talk about is the `),pe=a("em"),Jt=r("high integrity"),Rt=r(` commitments.
And for those you will need a deadline and estimations. But generally speaking
you don’t have to. More on this later.`),Ue=m(),_=a("h2"),A=a("a"),ce=a("span"),Vt=r("Beyond budgeting"),Le=m(),R=a("p"),Kt=r(`In most companies that I’ve seen that wield estimations as a weapon, estimations
is essentially a form of budgeting. And from some perspective it actually makes
perfect sense. Nobody wants to spend too much on something. There are two major
problems with this approach though.`),Ne=m(),I=a("p"),Qt=r(`Firstly, budgeting turns your team essentially into an internal agency; a cost
center. Instead of actively working `),ye=a("em"),Gt=r("on the business"),Xt=r(` and contributing to the
bottom line, they are providing services to the company. And they are expected
to do so on time and budget, or else.`),De=m(),P=a("p"),Zt=r(`Secondly, our opinions on how long work should take has literally zero impact on
how long it will actually take. And if your company is in the business of
innovation — like most modern software engineering companies — the bulk of
work that engineers do is the mission critical work; work that `),we=a("em"),$t=r("has to be done"),ei=r(`
regardless of any estimations.`),Ye=m(),V=a("p"),ti=r(`Think about it this way. Since nobody really knows how long will actually take,
there are really two scenarios that can play out when a company starts budgeting
engineering efforts. Either engineering efforts will be underpowered because of
lack of resources, and that will hinder the overall company mission. Or, if you
give them a generous padding, it will give the engineers a permission to spend
time gold plating everything that moves once they’ve done with the critical
work.`),Fe=m(),K=a("p"),ii=r(`You see, the truth is simple, the biggest risk any technology company has is not
budgetary. The biggest risk all of them have is that they will build the wrong
thing. And the company is much more likely to push their team towards building
the wrong thing by budgeting their efforts. The road to hell is paved with the
best intentions.`),Je=m(),x=a("h2"),M=a("a"),be=a("span"),ni=r("High integrity commitments"),Re=m(),T=a("p"),oi=r(`Fortunately, we don’t live in the lala land. There are partners, public
launches, contractual obligations, and a whole slew of other factors that
require us to deliver on time. Meaning `),ve=a("em"),ai=r("we have to estimate"),si=r(" those."),Ve=m(),Q=a("p"),li=r(`When you’re facing such situations, do what the U.S. army does. Triple the
estimations, and then triple them again. You should have redundancy, contingency
plans, and at least two escape hatches. And don’t forget a business insurance.`),Ke=m(),q=a("p"),ri=r(`Here is the rub though. Unless you’re shipping a video game on physical disks,
or something similar, those situations are quite rare. Moreover, those
situations `),ge=a("em"),hi=r("can be drastically reduced"),mi=r(` in number if a company puts an effort to
it.`),Qe=m(),G=a("p"),ui=r(`Dependencies a pain on manager’s existence, but they are more often than not
mailable. Delivery schedules between teams can be negotiated and amended.
Contingency plans worked out. Contracts with external parties can be made less
abrasive.`),Ge=m(),X=a("p"),di=r(`And who needs public launches those days? All they do is fill up the PR
companies pockets and tickle the founders egos. Customer acquisition is a long
term gruelling work that doesn’t happen overnight.`),Xe=m(),Z=a("p"),fi=r(`If a company really puts their mind to it, they can drastically reduce the need
for high integrity commitments.`),Ze=m(),W=a("h2"),B=a("a"),ke=a("span"),pi=r("Consider consistency"),$e=m(),$=a("p"),ci=r(`When it comes to accountability the vast majority of companies have it
backwards. Usually, this coincides with “visionary” leadership within the
company. Visionary leadership and estimations usually go hand and hand, because
of the dominant dynamic in the decisions making within the company, and it
normally sounds like this:`),et=m(),ee=a("blockquote"),Ee=a("p"),yi=r(`I have this idea, how much will it cost me? Well, that’s way too much, what
can I have for a half of the price?`),tt=m(),te=a("p"),wi=r(`And here is our whole problem in a nut shell. We estimate an idea that has no
market proof with tools that has no working math under them. And all while
treating literally the smartest people in the company as orders takers. No
wonder that 90% of startups fail.`),this.h()},l(e){y=s(e,"P",{});var n=l(y);ht=h(n,`Welcome to the part two of our little estimations chat. Having committed some
rather strongly worded criticism of the ubiquitously spread practice of
estimating everything that moves in software engineering, I feel strongly that I
shan’t leave you without giving you an alternative. Hence, the part two.`),n.forEach(t),Ae=u(e),C=s(e,"P",{});var xi=l(C);mt=h(xi,"Let’s just dive into this."),xi.forEach(t),Ie=u(e),w=s(e,"H2",{id:!0});var bi=l(w);b=s(bi,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Mi=l(b);ne=s(Mi,"SPAN",{class:!0}),l(ne).forEach(t),Mi.forEach(t),ut=h(bi,"Why do we estimate anyway?"),bi.forEach(t),Pe=u(e),S=s(e,"P",{});var Ti=l(S);dt=h(Ti,`Why do we estimate anyway? It’s a bit of a silly question, isn’t it? But, the
problem with silly questions is that people tend to brush them off with some
readily made answers, like: “oh, those bastards in management just want to
control everything”. And to a degree that is true: managers gonna manage. But,
managers are not evil clowns. Okay, some of them are, but the bulk of them just
want to help.`),Ti.forEach(t),xe=u(e),O=s(e,"P",{});var qi=l(O);ft=h(qi,`If you get to the bottom of it, the role of a manager is to manage resources. As
in to make sure resources are not wasted on useless efforts. And managers have
their own bosses. And those bosses tend to be allergic to sophistry. Bosses want
to see progress. And they want to see it in basic fonts, black and white
colours, and with some numbers. Which is actually fair, because the boss’s job
is to make sure that the bottom line moves.`),qi.forEach(t),Me=u(e),p=s(e,"P",{});var ie=l(p);pt=h(ie,`The technical term for this is “accountability”. Which means, that the manager
should be able to `),oe=s(ie,"EM",{});var Wi=l(oe);ct=h(Wi,"account for"),Wi.forEach(t),yt=h(ie,` what is going on in their area of
responsibility. And when a manager can answer the question of `),ae=s(ie,"EM",{});var Bi=l(ae);wt=h(Bi,"when"),Bi.forEach(t),bt=h(ie,` something
will be done, they might even feel good about themselves for a moment.`),ie.forEach(t),Te=u(e),H=s(e,"P",{});var ji=l(H);vt=h(ji,`And because of the ever present scrum practices and tools like Jira, managers
have some numbers that they can latch onto. And that is where the BS bingo
sessions start.`),ji.forEach(t),qe=u(e),f=s(e,"UL",{});var j=l(f);z=s(j,"LI",{});var vi=l(z);se=s(vi,"EM",{});var Ci=l(se);gt=h(Ci,"Developer"),Ci.forEach(t),kt=h(vi,": .oO(I have no idea, so I better double the number)"),vi.forEach(t),Et=u(j),U=s(j,"LI",{});var gi=l(U);le=s(gi,"EM",{});var Si=l(le);_t=h(Si,"Manager"),Si.forEach(t),At=h(gi,": .oO(Those devs have no idea, so I better double their estimate)"),gi.forEach(t),It=u(j),L=s(j,"LI",{});var ki=l(L);re=s(ki,"EM",{});var Oi=l(re);Pt=h(Oi,"Boss"),Oi.forEach(t),xt=h(ki,": .oO(Managers fail to deliver 60% of the time, so I better double it)"),ki.forEach(t),Mt=u(j),N=s(j,"LI",{});var Ei=l(N);he=s(Ei,"EM",{});var Hi=l(he);Tt=h(Hi,"Customer"),Hi.forEach(t),qt=h(Ei,": .oO(They have no idea, so I’ll just complain until it’s done)"),Ei.forEach(t),j.forEach(t),We=u(e),D=s(e,"P",{});var zi=l(D);Wt=h(zi,`Everyone wants certainty. Predictability in life makes as feel all warm and
fuzzy on the inside. And so we estimate, to feed our need for certainty with
estimations. The problem is though, that in software engineering, especially in
disruptive software engineering there is no certainty.`),zi.forEach(t),Be=u(e),Y=s(e,"P",{});var Ui=l(Y);Bt=h(Ui,`The whole point of running a software business is to take risks. And the more
disruptive the product is the better it pays off. You’re literally pushed to do
what others didn’t consider on a daily basis.`),Ui.forEach(t),je=u(e),c=s(e,"H2",{id:!0});var _e=l(c);v=s(_e,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Li=l(v);me=s(Li,"SPAN",{class:!0}),l(me).forEach(t),Li.forEach(t),jt=h(_e,"Do we "),ue=s(_e,"EM",{});var Ni=l(ue);Ct=h(Ni,"have to"),Ni.forEach(t),St=h(_e," estimate?"),_e.forEach(t),Ce=u(e),F=s(e,"P",{});var Di=l(F);Ot=h(Di,`Unlike a factory floor, where you can measure repeated work, and estimate, and
assign confidence levels. In software engineering, most products have virtually
zero marginal cost and need to be produced only once. Which means, that
practically all work is really done for the first time, every time.`),Di.forEach(t),Se=u(e),g=s(e,"P",{});var it=l(g);Ht=h(it,"Physicists have a good joke about this. They say that "),de=s(it,"EM",{});var Yi=l(de);zt=h(Yi,`the accuracy of a
singular measurement is zero`),Yi.forEach(t),Ut=h(it,"."),it.forEach(t),Oe=u(e),k=s(e,"P",{});var nt=l(k);Lt=h(nt,`Everyone knows that those estimations are less than stellar, and the question we
should be asking is this: do we `),fe=s(nt,"EM",{});var Fi=l(fe);Nt=h(Fi,"have to"),Fi.forEach(t),Dt=h(nt,` estimate? I think the answer is a
little bit complex than yes or no. And it’s complex because there are two
separate problems here: budgeting and commitments.`),nt.forEach(t),He=u(e),J=s(e,"P",{});var Ji=l(J);Yt=h(Ji,`Budgeting is internal, it is ultimately about resources allocation. And I
strongly on the side that one doesn’t need estimations to make solid progress.
Moreover estimations will hinder the progress more than help.`),Ji.forEach(t),ze=u(e),E=s(e,"P",{});var ot=l(E);Ft=h(ot,`Commitments are external by nature. But, again not all commitments are made
equally. What you really want to talk about is the `),pe=s(ot,"EM",{});var Ri=l(pe);Jt=h(Ri,"high integrity"),Ri.forEach(t),Rt=h(ot,` commitments.
And for those you will need a deadline and estimations. But generally speaking
you don’t have to. More on this later.`),ot.forEach(t),Ue=u(e),_=s(e,"H2",{id:!0});var _i=l(_);A=s(_i,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Vi=l(A);ce=s(Vi,"SPAN",{class:!0}),l(ce).forEach(t),Vi.forEach(t),Vt=h(_i,"Beyond budgeting"),_i.forEach(t),Le=u(e),R=s(e,"P",{});var Ki=l(R);Kt=h(Ki,`In most companies that I’ve seen that wield estimations as a weapon, estimations
is essentially a form of budgeting. And from some perspective it actually makes
perfect sense. Nobody wants to spend too much on something. There are two major
problems with this approach though.`),Ki.forEach(t),Ne=u(e),I=s(e,"P",{});var at=l(I);Qt=h(at,`Firstly, budgeting turns your team essentially into an internal agency; a cost
center. Instead of actively working `),ye=s(at,"EM",{});var Qi=l(ye);Gt=h(Qi,"on the business"),Qi.forEach(t),Xt=h(at,` and contributing to the
bottom line, they are providing services to the company. And they are expected
to do so on time and budget, or else.`),at.forEach(t),De=u(e),P=s(e,"P",{});var st=l(P);Zt=h(st,`Secondly, our opinions on how long work should take has literally zero impact on
how long it will actually take. And if your company is in the business of
innovation — like most modern software engineering companies — the bulk of
work that engineers do is the mission critical work; work that `),we=s(st,"EM",{});var Gi=l(we);$t=h(Gi,"has to be done"),Gi.forEach(t),ei=h(st,`
regardless of any estimations.`),st.forEach(t),Ye=u(e),V=s(e,"P",{});var Xi=l(V);ti=h(Xi,`Think about it this way. Since nobody really knows how long will actually take,
there are really two scenarios that can play out when a company starts budgeting
engineering efforts. Either engineering efforts will be underpowered because of
lack of resources, and that will hinder the overall company mission. Or, if you
give them a generous padding, it will give the engineers a permission to spend
time gold plating everything that moves once they’ve done with the critical
work.`),Xi.forEach(t),Fe=u(e),K=s(e,"P",{});var Zi=l(K);ii=h(Zi,`You see, the truth is simple, the biggest risk any technology company has is not
budgetary. The biggest risk all of them have is that they will build the wrong
thing. And the company is much more likely to push their team towards building
the wrong thing by budgeting their efforts. The road to hell is paved with the
best intentions.`),Zi.forEach(t),Je=u(e),x=s(e,"H2",{id:!0});var Ai=l(x);M=s(Ai,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var $i=l(M);be=s($i,"SPAN",{class:!0}),l(be).forEach(t),$i.forEach(t),ni=h(Ai,"High integrity commitments"),Ai.forEach(t),Re=u(e),T=s(e,"P",{});var lt=l(T);oi=h(lt,`Fortunately, we don’t live in the lala land. There are partners, public
launches, contractual obligations, and a whole slew of other factors that
require us to deliver on time. Meaning `),ve=s(lt,"EM",{});var en=l(ve);ai=h(en,"we have to estimate"),en.forEach(t),si=h(lt," those."),lt.forEach(t),Ve=u(e),Q=s(e,"P",{});var tn=l(Q);li=h(tn,`When you’re facing such situations, do what the U.S. army does. Triple the
estimations, and then triple them again. You should have redundancy, contingency
plans, and at least two escape hatches. And don’t forget a business insurance.`),tn.forEach(t),Ke=u(e),q=s(e,"P",{});var rt=l(q);ri=h(rt,`Here is the rub though. Unless you’re shipping a video game on physical disks,
or something similar, those situations are quite rare. Moreover, those
situations `),ge=s(rt,"EM",{});var nn=l(ge);hi=h(nn,"can be drastically reduced"),nn.forEach(t),mi=h(rt,` in number if a company puts an effort to
it.`),rt.forEach(t),Qe=u(e),G=s(e,"P",{});var on=l(G);ui=h(on,`Dependencies a pain on manager’s existence, but they are more often than not
mailable. Delivery schedules between teams can be negotiated and amended.
Contingency plans worked out. Contracts with external parties can be made less
abrasive.`),on.forEach(t),Ge=u(e),X=s(e,"P",{});var an=l(X);di=h(an,`And who needs public launches those days? All they do is fill up the PR
companies pockets and tickle the founders egos. Customer acquisition is a long
term gruelling work that doesn’t happen overnight.`),an.forEach(t),Xe=u(e),Z=s(e,"P",{});var sn=l(Z);fi=h(sn,`If a company really puts their mind to it, they can drastically reduce the need
for high integrity commitments.`),sn.forEach(t),Ze=u(e),W=s(e,"H2",{id:!0});var Ii=l(W);B=s(Ii,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ln=l(B);ke=s(ln,"SPAN",{class:!0}),l(ke).forEach(t),ln.forEach(t),pi=h(Ii,"Consider consistency"),Ii.forEach(t),$e=u(e),$=s(e,"P",{});var rn=l($);ci=h(rn,`When it comes to accountability the vast majority of companies have it
backwards. Usually, this coincides with “visionary” leadership within the
company. Visionary leadership and estimations usually go hand and hand, because
of the dominant dynamic in the decisions making within the company, and it
normally sounds like this:`),rn.forEach(t),et=u(e),ee=s(e,"BLOCKQUOTE",{});var hn=l(ee);Ee=s(hn,"P",{});var mn=l(Ee);yi=h(mn,`I have this idea, how much will it cost me? Well, that’s way too much, what
can I have for a half of the price?`),mn.forEach(t),hn.forEach(t),tt=u(e),te=s(e,"P",{});var un=l(te);wi=h(un,`And here is our whole problem in a nut shell. We estimate an idea that has no
market proof with tools that has no working math under them. And all while
treating literally the smartest people in the company as orders takers. No
wonder that 90% of startups fail.`),un.forEach(t),this.h()},h(){d(ne,"class","icon icon-link"),d(b,"aria-hidden","true"),d(b,"tabindex","-1"),d(b,"href","#why-do-we-estimate-anyway"),d(w,"id","why-do-we-estimate-anyway"),d(me,"class","icon icon-link"),d(v,"aria-hidden","true"),d(v,"tabindex","-1"),d(v,"href","#do-we-have-to-estimate"),d(c,"id","do-we-have-to-estimate"),d(ce,"class","icon icon-link"),d(A,"aria-hidden","true"),d(A,"tabindex","-1"),d(A,"href","#beyond-budgeting"),d(_,"id","beyond-budgeting"),d(be,"class","icon icon-link"),d(M,"aria-hidden","true"),d(M,"tabindex","-1"),d(M,"href","#high-integrity-commitments"),d(x,"id","high-integrity-commitments"),d(ke,"class","icon icon-link"),d(B,"aria-hidden","true"),d(B,"tabindex","-1"),d(B,"href","#consider-consistency"),d(W,"id","consider-consistency")},m(e,n){o(e,y,n),i(y,ht),o(e,Ae,n),o(e,C,n),i(C,mt),o(e,Ie,n),o(e,w,n),i(w,b),i(b,ne),i(w,ut),o(e,Pe,n),o(e,S,n),i(S,dt),o(e,xe,n),o(e,O,n),i(O,ft),o(e,Me,n),o(e,p,n),i(p,pt),i(p,oe),i(oe,ct),i(p,yt),i(p,ae),i(ae,wt),i(p,bt),o(e,Te,n),o(e,H,n),i(H,vt),o(e,qe,n),o(e,f,n),i(f,z),i(z,se),i(se,gt),i(z,kt),i(f,Et),i(f,U),i(U,le),i(le,_t),i(U,At),i(f,It),i(f,L),i(L,re),i(re,Pt),i(L,xt),i(f,Mt),i(f,N),i(N,he),i(he,Tt),i(N,qt),o(e,We,n),o(e,D,n),i(D,Wt),o(e,Be,n),o(e,Y,n),i(Y,Bt),o(e,je,n),o(e,c,n),i(c,v),i(v,me),i(c,jt),i(c,ue),i(ue,Ct),i(c,St),o(e,Ce,n),o(e,F,n),i(F,Ot),o(e,Se,n),o(e,g,n),i(g,Ht),i(g,de),i(de,zt),i(g,Ut),o(e,Oe,n),o(e,k,n),i(k,Lt),i(k,fe),i(fe,Nt),i(k,Dt),o(e,He,n),o(e,J,n),i(J,Yt),o(e,ze,n),o(e,E,n),i(E,Ft),i(E,pe),i(pe,Jt),i(E,Rt),o(e,Ue,n),o(e,_,n),i(_,A),i(A,ce),i(_,Vt),o(e,Le,n),o(e,R,n),i(R,Kt),o(e,Ne,n),o(e,I,n),i(I,Qt),i(I,ye),i(ye,Gt),i(I,Xt),o(e,De,n),o(e,P,n),i(P,Zt),i(P,we),i(we,$t),i(P,ei),o(e,Ye,n),o(e,V,n),i(V,ti),o(e,Fe,n),o(e,K,n),i(K,ii),o(e,Je,n),o(e,x,n),i(x,M),i(M,be),i(x,ni),o(e,Re,n),o(e,T,n),i(T,oi),i(T,ve),i(ve,ai),i(T,si),o(e,Ve,n),o(e,Q,n),i(Q,li),o(e,Ke,n),o(e,q,n),i(q,ri),i(q,ge),i(ge,hi),i(q,mi),o(e,Qe,n),o(e,G,n),i(G,ui),o(e,Ge,n),o(e,X,n),i(X,di),o(e,Xe,n),o(e,Z,n),i(Z,fi),o(e,Ze,n),o(e,W,n),i(W,B),i(B,ke),i(W,pi),o(e,$e,n),o(e,$,n),i($,ci),o(e,et,n),o(e,ee,n),i(ee,Ee),i(Ee,yi),o(e,tt,n),o(e,te,n),i(te,wi)},p:Pi,i:Pi,o:Pi,d(e){e&&t(y),e&&t(Ae),e&&t(C),e&&t(Ie),e&&t(w),e&&t(Pe),e&&t(S),e&&t(xe),e&&t(O),e&&t(Me),e&&t(p),e&&t(Te),e&&t(H),e&&t(qe),e&&t(f),e&&t(We),e&&t(D),e&&t(Be),e&&t(Y),e&&t(je),e&&t(c),e&&t(Ce),e&&t(F),e&&t(Se),e&&t(g),e&&t(Oe),e&&t(k),e&&t(He),e&&t(J),e&&t(ze),e&&t(E),e&&t(Ue),e&&t(_),e&&t(Le),e&&t(R),e&&t(Ne),e&&t(I),e&&t(De),e&&t(P),e&&t(Ye),e&&t(V),e&&t(Fe),e&&t(K),e&&t(Je),e&&t(x),e&&t(Re),e&&t(T),e&&t(Ve),e&&t(Q),e&&t(Ke),e&&t(q),e&&t(Qe),e&&t(G),e&&t(Ge),e&&t(X),e&&t(Xe),e&&t(Z),e&&t(Ze),e&&t(W),e&&t($e),e&&t($),e&&t(et),e&&t(ee),e&&t(tt),e&&t(te)}}}const bn={draft:!0};class vn extends fn{constructor(y){super(),pn(this,y,null,yn,cn,{})}}export{vn as default,bn as metadata};
