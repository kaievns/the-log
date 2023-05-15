import{S as ba,i as ga,s as ka,k as o,q as l,a as p,l as s,m as r,r as h,h as t,c as u,n as c,b as i,F as a,C as Ht}from"./index-920be987.js";const Ea="png",_a=1200,Aa=600,Pa="srgb",Ta=4,Ca="uchar",Sa=72,xa=!1,Ia=!1,qa=!0,Ma=void 0,Wa=!0,Va=!1,Oa=""+new URL("../assets/inverse-conway-0b067e26.png",import.meta.url).href,Ba={format:Ea,width:_a,height:Aa,space:Pa,channels:Ta,depth:Ca,density:Sa,isProgressive:xa,hasProfile:Ia,hasAlpha:qa,aspect:Ma,withoutEnlargement:Wa,withoutReduction:Va,src:Oa};function Na(va){let f,Ue,pe,w,y,Y,Fe,ue,d,je,Z,Ge,Je,q,Ke,Qe,ee,$e,De,de,M,te,Xe,me,W,Ye,fe,v,b,ae,Ze,we,V,et,ye,g,tt,ne,at,nt,ve,O,it,be,B,ot,ge,N,st,ke,k,E,ie,rt,Ee,H,lt,_e,L,ht,Ae,m,ct,oe,pt,ut,se,dt,mt,Pe,z,ft,Te,_,A,re,wt,Ce,R,yt,Se,U,vt,xe,F,bt,Ie,P,T,le,gt,qe,j,kt,Me,G,Et,We,J,_t,Ve,K,At,Oe,Q,Pt,Be,C,Tt,he,Ct,St,Ne,S,x,ce,xt,He,$,It,Le,D,qt;return{c(){f=o("p"),Ue=l(`Today we’re going to be looking at an often forgotten topic: the interdependency
between the software architecture and an organisation structure; and how to use
that to one’s advantage.`),pe=p(),w=o("h2"),y=o("a"),Y=o("span"),Fe=l("Who is Conway?"),ue=p(),d=o("p"),je=l(`There are two luminary people in software engineering named Conway who are often
mistakenly thought to be the same person. One is a british mathematician `),Z=o("em"),Ge=l("John"),Je=l(`
Conway famous for creating the
`),q=o("a"),Ke=l("game of life"),Qe=l(`. And the
other one is `),ee=o("em"),$e=l("Melvin"),De=l(` Conway an american computer scientist who postulated the
following idea:`),de=p(),M=o("blockquote"),te=o("p"),Xe=l(`Organizations, who design systems, are constrained to produce designs which
are copies of the communication structures of these organizations`),me=p(),W=o("p"),Ye=l("Which eventually became known as the Conway’s law."),fe=p(),v=o("h2"),b=o("a"),ae=o("span"),Ze=l("The Conway’s law"),we=p(),V=o("p"),et=l(`What the Conway’s law describes is the interdependency between an application
architecture and an organisational structure. Which is an important factor to
keep in mind when an organisation starts to run more than one team.`),ye=p(),g=o("p"),tt=l(`For example, if an application has a monolithic architecture then the team that
works on it will have to have a monolithic structure. If we try to run several
independent teams on an application like that, because of the internal
dependencies, that will inevitably create friction between these teams. And,
eventually, they will start `),ne=o("em"),at=l("acting"),nt=l(" like one large team."),ve=p(),O=o("p"),it=l(`Conversely, if an application has a modular architecture like, for example,
microservices based architecture. That will land itself very well to be handled
by multiple independent teams.`),be=p(),B=o("p"),ot=l(`If we look at this interdependency closely then some of the most common org
structure failings will start to make sense. Multiple independent teams working
on a monolith and stepping on each other toes. Or a single small team that
drowns in the maintenance overheads of running a microservices architecture.`),ge=p(),N=o("p"),st=l("Conway’s law is quite ubiquitous, and it could be used to one’s advantage."),ke=p(),k=o("h2"),E=o("a"),ie=o("span"),rt=l("The inverse Conway’s manoeuvre"),Ee=p(),H=o("p"),lt=l(`In a traditional software development company we would see some Very Smart
People designing an application architecture. And then an engineering management
team would “execute” on that vision by creating teams to support that
architecture.`),_e=p(),L=o("p"),ht=l(`As the Conway’s law demonstrates there is a clear dependency between the
architecture and an organisational structure. And, as such, that approach may or
may not work out in the company’s favour; depending on whether the proposed
architecture matches the company’s org structure.`),Ae=p(),m=o("p"),ct=l(`This approach can, and should be flipped around. And that is where what’s known
as the `),oe=o("strong"),pt=l("inverse Conway’s manoeuvre"),ut=l(` comes in handy. The idea is that instead
of an architecture being handed down to the teams as a gospel, the teams
themselves should be structured `),se=o("em"),dt=l("first"),mt=l(` in a way that would produce the needed
architecture.`),Pe=p(),z=o("p"),ft=l(`The most common case scenario is that an org chart is created of small
independent teams attached to specific business value streams. And later, those
teams will produce a distributed architecture that reflects these teams
structure.`),Te=p(),_=o("h2"),A=o("a"),re=o("span"),wt=l("The corollary"),Ce=p(),R=o("p"),yt=l(`In the age of agile, architecture is a feeble master to serve. Because defining
architecture ahead of time in exact details is a cardinal sin akin to trying to
predict the future with product features. Sooner or later it will disappoint the
same way as waterfall practices do.`),Se=p(),U=o("p"),vt=l(`That does not mean that architectural patterns are a bad idea. It just means
that the system needs to evolve along side the product discovery process. And
since we don’t know what the product will really look like after it meets the
markets, that predefined architecture will sooner or later will start getting in
the way of getting the work done.`),xe=p(),F=o("p"),bt=l(`In non-trivial cases architecture always follows the organisational structure,
and the organisational structure can be purposefully attached to the business
structure. And that structure will eventually put technology in the most
impactful position.`),Ie=p(),P=o("h2"),T=o("a"),le=o("span"),gt=l("A common use case"),qe=p(),j=o("p"),kt=l(`There is an interesting use-case where this tactic often used very successfully.
And that is dissolving a large monolithic application into microservices. The
case is more common that a rework of a legacy application. Most startups produce
monoliths as an MVP and then need to rework and scale their initial application.
Which is essentially the same problem structurally.`),Me=p(),G=o("p"),Et=l(`The way it normally goes is that a company hires some sort of a Very Smart
Person that will dive into the old monolith and produce a proposed microservices
based architecture. Then that new architecture is handed down to the original
team to implement.`),We=p(),J=o("p"),_t=l(`The problem is that the Very Smart Person has no history with the application,
but the team does. They dutifully start chopping the monolith to pieces, and
then one of two scenarios occur. Either the team rebuilds the original monolith
into a distributed monolith. Or they call BS on the new architecture because
everything is hard; and then people start leaving. It’s not that the proposed
architecture is bad, the Very Smart Person knows what they’re doing after all.
The problem is that the architecture didn’t match the way the original team was
operating.`),Ve=p(),K=o("p"),At=l(`A better approach is to partition the original team into independent squads.
Then let each squad take ownership over specific areas of the application. And
then let these squads tear the application apart along the lines of ownership.`),Oe=p(),Q=o("p"),Pt=l(`Everyone complains the first month or two, because we have changed the way the
team used to operate. And that change started to show pain points when applied
to the old monolith. But, this pain also pushes the teams toward splitting the
old architecture as quickly and sensibly as possible. In most cases the teams
won’t even need a Very Smart Person to guide them through the process.`),Be=p(),C=o("p"),Tt=l("We design the communication patterns "),he=o("em"),Ct=l("first"),St=l(` (independent squads), and then we
let those communication patterns to drive architectural decisions.`),Ne=p(),S=o("h2"),x=o("a"),ce=o("span"),xt=l("Wrapping up"),He=p(),$=o("p"),It=l(`The Conway’s law is a great tool to have in your pocket whether you are an
engineering manager, or in the field of technical leadership. Scaling software
engineering organisations is surprising challenging and tools like that can get
very handy.`),Le=p(),D=o("p"),qt=l(`Also, if you liked this idea and want more, I can recommend diving into the
field of the devops topology, that have a lot more to offer.`),this.h()},l(e){f=s(e,"P",{});var n=r(f);Ue=h(n,`Today we’re going to be looking at an often forgotten topic: the interdependency
between the software architecture and an organisation structure; and how to use
that to one’s advantage.`),n.forEach(t),pe=u(e),w=s(e,"H2",{id:!0});var Mt=r(w);y=s(Mt,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Lt=r(y);Y=s(Lt,"SPAN",{class:!0}),r(Y).forEach(t),Lt.forEach(t),Fe=h(Mt,"Who is Conway?"),Mt.forEach(t),ue=u(e),d=s(e,"P",{});var I=r(d);je=h(I,`There are two luminary people in software engineering named Conway who are often
mistakenly thought to be the same person. One is a british mathematician `),Z=s(I,"EM",{});var zt=r(Z);Ge=h(zt,"John"),zt.forEach(t),Je=h(I,`
Conway famous for creating the
`),q=s(I,"A",{href:!0,rel:!0});var Rt=r(q);Ke=h(Rt,"game of life"),Rt.forEach(t),Qe=h(I,`. And the
other one is `),ee=s(I,"EM",{});var Ut=r(ee);$e=h(Ut,"Melvin"),Ut.forEach(t),De=h(I,` Conway an american computer scientist who postulated the
following idea:`),I.forEach(t),de=u(e),M=s(e,"BLOCKQUOTE",{});var Ft=r(M);te=s(Ft,"P",{});var jt=r(te);Xe=h(jt,`Organizations, who design systems, are constrained to produce designs which
are copies of the communication structures of these organizations`),jt.forEach(t),Ft.forEach(t),me=u(e),W=s(e,"P",{});var Gt=r(W);Ye=h(Gt,"Which eventually became known as the Conway’s law."),Gt.forEach(t),fe=u(e),v=s(e,"H2",{id:!0});var Wt=r(v);b=s(Wt,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Jt=r(b);ae=s(Jt,"SPAN",{class:!0}),r(ae).forEach(t),Jt.forEach(t),Ze=h(Wt,"The Conway’s law"),Wt.forEach(t),we=u(e),V=s(e,"P",{});var Kt=r(V);et=h(Kt,`What the Conway’s law describes is the interdependency between an application
architecture and an organisational structure. Which is an important factor to
keep in mind when an organisation starts to run more than one team.`),Kt.forEach(t),ye=u(e),g=s(e,"P",{});var ze=r(g);tt=h(ze,`For example, if an application has a monolithic architecture then the team that
works on it will have to have a monolithic structure. If we try to run several
independent teams on an application like that, because of the internal
dependencies, that will inevitably create friction between these teams. And,
eventually, they will start `),ne=s(ze,"EM",{});var Qt=r(ne);at=h(Qt,"acting"),Qt.forEach(t),nt=h(ze," like one large team."),ze.forEach(t),ve=u(e),O=s(e,"P",{});var $t=r(O);it=h($t,`Conversely, if an application has a modular architecture like, for example,
microservices based architecture. That will land itself very well to be handled
by multiple independent teams.`),$t.forEach(t),be=u(e),B=s(e,"P",{});var Dt=r(B);ot=h(Dt,`If we look at this interdependency closely then some of the most common org
structure failings will start to make sense. Multiple independent teams working
on a monolith and stepping on each other toes. Or a single small team that
drowns in the maintenance overheads of running a microservices architecture.`),Dt.forEach(t),ge=u(e),N=s(e,"P",{});var Xt=r(N);st=h(Xt,"Conway’s law is quite ubiquitous, and it could be used to one’s advantage."),Xt.forEach(t),ke=u(e),k=s(e,"H2",{id:!0});var Vt=r(k);E=s(Vt,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Yt=r(E);ie=s(Yt,"SPAN",{class:!0}),r(ie).forEach(t),Yt.forEach(t),rt=h(Vt,"The inverse Conway’s manoeuvre"),Vt.forEach(t),Ee=u(e),H=s(e,"P",{});var Zt=r(H);lt=h(Zt,`In a traditional software development company we would see some Very Smart
People designing an application architecture. And then an engineering management
team would “execute” on that vision by creating teams to support that
architecture.`),Zt.forEach(t),_e=u(e),L=s(e,"P",{});var ea=r(L);ht=h(ea,`As the Conway’s law demonstrates there is a clear dependency between the
architecture and an organisational structure. And, as such, that approach may or
may not work out in the company’s favour; depending on whether the proposed
architecture matches the company’s org structure.`),ea.forEach(t),Ae=u(e),m=s(e,"P",{});var X=r(m);ct=h(X,`This approach can, and should be flipped around. And that is where what’s known
as the `),oe=s(X,"STRONG",{});var ta=r(oe);pt=h(ta,"inverse Conway’s manoeuvre"),ta.forEach(t),ut=h(X,` comes in handy. The idea is that instead
of an architecture being handed down to the teams as a gospel, the teams
themselves should be structured `),se=s(X,"EM",{});var aa=r(se);dt=h(aa,"first"),aa.forEach(t),mt=h(X,` in a way that would produce the needed
architecture.`),X.forEach(t),Pe=u(e),z=s(e,"P",{});var na=r(z);ft=h(na,`The most common case scenario is that an org chart is created of small
independent teams attached to specific business value streams. And later, those
teams will produce a distributed architecture that reflects these teams
structure.`),na.forEach(t),Te=u(e),_=s(e,"H2",{id:!0});var Ot=r(_);A=s(Ot,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ia=r(A);re=s(ia,"SPAN",{class:!0}),r(re).forEach(t),ia.forEach(t),wt=h(Ot,"The corollary"),Ot.forEach(t),Ce=u(e),R=s(e,"P",{});var oa=r(R);yt=h(oa,`In the age of agile, architecture is a feeble master to serve. Because defining
architecture ahead of time in exact details is a cardinal sin akin to trying to
predict the future with product features. Sooner or later it will disappoint the
same way as waterfall practices do.`),oa.forEach(t),Se=u(e),U=s(e,"P",{});var sa=r(U);vt=h(sa,`That does not mean that architectural patterns are a bad idea. It just means
that the system needs to evolve along side the product discovery process. And
since we don’t know what the product will really look like after it meets the
markets, that predefined architecture will sooner or later will start getting in
the way of getting the work done.`),sa.forEach(t),xe=u(e),F=s(e,"P",{});var ra=r(F);bt=h(ra,`In non-trivial cases architecture always follows the organisational structure,
and the organisational structure can be purposefully attached to the business
structure. And that structure will eventually put technology in the most
impactful position.`),ra.forEach(t),Ie=u(e),P=s(e,"H2",{id:!0});var Bt=r(P);T=s(Bt,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var la=r(T);le=s(la,"SPAN",{class:!0}),r(le).forEach(t),la.forEach(t),gt=h(Bt,"A common use case"),Bt.forEach(t),qe=u(e),j=s(e,"P",{});var ha=r(j);kt=h(ha,`There is an interesting use-case where this tactic often used very successfully.
And that is dissolving a large monolithic application into microservices. The
case is more common that a rework of a legacy application. Most startups produce
monoliths as an MVP and then need to rework and scale their initial application.
Which is essentially the same problem structurally.`),ha.forEach(t),Me=u(e),G=s(e,"P",{});var ca=r(G);Et=h(ca,`The way it normally goes is that a company hires some sort of a Very Smart
Person that will dive into the old monolith and produce a proposed microservices
based architecture. Then that new architecture is handed down to the original
team to implement.`),ca.forEach(t),We=u(e),J=s(e,"P",{});var pa=r(J);_t=h(pa,`The problem is that the Very Smart Person has no history with the application,
but the team does. They dutifully start chopping the monolith to pieces, and
then one of two scenarios occur. Either the team rebuilds the original monolith
into a distributed monolith. Or they call BS on the new architecture because
everything is hard; and then people start leaving. It’s not that the proposed
architecture is bad, the Very Smart Person knows what they’re doing after all.
The problem is that the architecture didn’t match the way the original team was
operating.`),pa.forEach(t),Ve=u(e),K=s(e,"P",{});var ua=r(K);At=h(ua,`A better approach is to partition the original team into independent squads.
Then let each squad take ownership over specific areas of the application. And
then let these squads tear the application apart along the lines of ownership.`),ua.forEach(t),Oe=u(e),Q=s(e,"P",{});var da=r(Q);Pt=h(da,`Everyone complains the first month or two, because we have changed the way the
team used to operate. And that change started to show pain points when applied
to the old monolith. But, this pain also pushes the teams toward splitting the
old architecture as quickly and sensibly as possible. In most cases the teams
won’t even need a Very Smart Person to guide them through the process.`),da.forEach(t),Be=u(e),C=s(e,"P",{});var Re=r(C);Tt=h(Re,"We design the communication patterns "),he=s(Re,"EM",{});var ma=r(he);Ct=h(ma,"first"),ma.forEach(t),St=h(Re,` (independent squads), and then we
let those communication patterns to drive architectural decisions.`),Re.forEach(t),Ne=u(e),S=s(e,"H2",{id:!0});var Nt=r(S);x=s(Nt,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var fa=r(x);ce=s(fa,"SPAN",{class:!0}),r(ce).forEach(t),fa.forEach(t),xt=h(Nt,"Wrapping up"),Nt.forEach(t),He=u(e),$=s(e,"P",{});var wa=r($);It=h(wa,`The Conway’s law is a great tool to have in your pocket whether you are an
engineering manager, or in the field of technical leadership. Scaling software
engineering organisations is surprising challenging and tools like that can get
very handy.`),wa.forEach(t),Le=u(e),D=s(e,"P",{});var ya=r(D);qt=h(ya,`Also, if you liked this idea and want more, I can recommend diving into the
field of the devops topology, that have a lot more to offer.`),ya.forEach(t),this.h()},h(){c(Y,"class","icon icon-link"),c(y,"aria-hidden","true"),c(y,"tabindex","-1"),c(y,"href","#who-is-conway"),c(w,"id","who-is-conway"),c(q,"href","https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"),c(q,"rel","nofollow"),c(ae,"class","icon icon-link"),c(b,"aria-hidden","true"),c(b,"tabindex","-1"),c(b,"href","#the-conways-law"),c(v,"id","the-conways-law"),c(ie,"class","icon icon-link"),c(E,"aria-hidden","true"),c(E,"tabindex","-1"),c(E,"href","#the-inverse-conways-manoeuvre"),c(k,"id","the-inverse-conways-manoeuvre"),c(re,"class","icon icon-link"),c(A,"aria-hidden","true"),c(A,"tabindex","-1"),c(A,"href","#the-corollary"),c(_,"id","the-corollary"),c(le,"class","icon icon-link"),c(T,"aria-hidden","true"),c(T,"tabindex","-1"),c(T,"href","#a-common-use-case"),c(P,"id","a-common-use-case"),c(ce,"class","icon icon-link"),c(x,"aria-hidden","true"),c(x,"tabindex","-1"),c(x,"href","#wrapping-up"),c(S,"id","wrapping-up")},m(e,n){i(e,f,n),a(f,Ue),i(e,pe,n),i(e,w,n),a(w,y),a(y,Y),a(w,Fe),i(e,ue,n),i(e,d,n),a(d,je),a(d,Z),a(Z,Ge),a(d,Je),a(d,q),a(q,Ke),a(d,Qe),a(d,ee),a(ee,$e),a(d,De),i(e,de,n),i(e,M,n),a(M,te),a(te,Xe),i(e,me,n),i(e,W,n),a(W,Ye),i(e,fe,n),i(e,v,n),a(v,b),a(b,ae),a(v,Ze),i(e,we,n),i(e,V,n),a(V,et),i(e,ye,n),i(e,g,n),a(g,tt),a(g,ne),a(ne,at),a(g,nt),i(e,ve,n),i(e,O,n),a(O,it),i(e,be,n),i(e,B,n),a(B,ot),i(e,ge,n),i(e,N,n),a(N,st),i(e,ke,n),i(e,k,n),a(k,E),a(E,ie),a(k,rt),i(e,Ee,n),i(e,H,n),a(H,lt),i(e,_e,n),i(e,L,n),a(L,ht),i(e,Ae,n),i(e,m,n),a(m,ct),a(m,oe),a(oe,pt),a(m,ut),a(m,se),a(se,dt),a(m,mt),i(e,Pe,n),i(e,z,n),a(z,ft),i(e,Te,n),i(e,_,n),a(_,A),a(A,re),a(_,wt),i(e,Ce,n),i(e,R,n),a(R,yt),i(e,Se,n),i(e,U,n),a(U,vt),i(e,xe,n),i(e,F,n),a(F,bt),i(e,Ie,n),i(e,P,n),a(P,T),a(T,le),a(P,gt),i(e,qe,n),i(e,j,n),a(j,kt),i(e,Me,n),i(e,G,n),a(G,Et),i(e,We,n),i(e,J,n),a(J,_t),i(e,Ve,n),i(e,K,n),a(K,At),i(e,Oe,n),i(e,Q,n),a(Q,Pt),i(e,Be,n),i(e,C,n),a(C,Tt),a(C,he),a(he,Ct),a(C,St),i(e,Ne,n),i(e,S,n),a(S,x),a(x,ce),a(S,xt),i(e,He,n),i(e,$,n),a($,It),i(e,Le,n),i(e,D,n),a(D,qt)},p:Ht,i:Ht,o:Ht,d(e){e&&t(f),e&&t(pe),e&&t(w),e&&t(ue),e&&t(d),e&&t(de),e&&t(M),e&&t(me),e&&t(W),e&&t(fe),e&&t(v),e&&t(we),e&&t(V),e&&t(ye),e&&t(g),e&&t(ve),e&&t(O),e&&t(be),e&&t(B),e&&t(ge),e&&t(N),e&&t(ke),e&&t(k),e&&t(Ee),e&&t(H),e&&t(_e),e&&t(L),e&&t(Ae),e&&t(m),e&&t(Pe),e&&t(z),e&&t(Te),e&&t(_),e&&t(Ce),e&&t(R),e&&t(Se),e&&t(U),e&&t(xe),e&&t(F),e&&t(Ie),e&&t(P),e&&t(qe),e&&t(j),e&&t(Me),e&&t(G),e&&t(We),e&&t(J),e&&t(Ve),e&&t(K),e&&t(Oe),e&&t(Q),e&&t(Be),e&&t(C),e&&t(Ne),e&&t(S),e&&t(He),e&&t($),e&&t(Le),e&&t(D)}}}const La={slug:"BfUL8",date:"15 May 2023",title:"The inverse Conway's manoeuvre",description:"An article about interdependency between architecture and org structure",thumbnail:Ba,tags:["leadership","management"],medium:{tags:["Leadership","Management","Engineering management","Technical leadership","Strategy"]}};class za extends ba{constructor(f){super(),ga(this,f,null,Na,ka,{})}}export{za as default,La as metadata};
