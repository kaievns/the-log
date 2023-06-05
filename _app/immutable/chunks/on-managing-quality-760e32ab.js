import{S as no,i as lo,s as ro,k as s,q as r,a as h,l as n,m as l,r as u,h as t,c,n as p,H as Nt,b as o,F as i,C as na}from"./index-920be987.js";const uo="png",ho=1200,co=600,po="srgb",fo=4,mo="uchar",yo=72,wo=!1,vo=!1,bo=!0,go=void 0,qo=!0,ko=!1,_o=""+new URL("../assets/quality-management-ce635ca6.png",import.meta.url).href,Eo={format:uo,width:ho,height:co,space:po,channels:fo,depth:mo,density:yo,isProgressive:wo,hasProfile:vo,hasAlpha:bo,aspect:go,withoutEnlargement:qo,withoutReduction:ko,src:_o},xo=""+new URL("../assets/cost-of-good-quality-65540dcf.webp",import.meta.url).href,To=""+new URL("../assets/cost-of-poor-quality-028e768d.png",import.meta.url).href,Io=""+new URL("../assets/cost-vs-quality-62ce6424.webp",import.meta.url).href,Po=""+new URL("../assets/cost-vs-quality-2-e385aaf9.png",import.meta.url).href;function Ao(so){let d,Bt,Re,O,Wt,je,m,y,ge,Lt,Ue,H,Ot,Qe,R,Ht,De,j,Rt,ze,U,qe,jt,Ve,w,Ut,ke,Qt,Dt,Je,v,b,_e,zt,Ze,Q,Vt,Ke,B,Ee,Jt,Zt,$e,g,D,la,xe,Kt,Xe,W,Te,$t,Xt,Ye,q,z,ra,Ie,Yt,et,V,ei,tt,k,J,ua,Pe,ti,it,Z,ii,at,_,E,Ae,ai,ot,x,oi,Se,si,ni,st,K,li,nt,T,$,ha,Ce,ri,lt,X,ui,rt,Y,hi,ut,ee,ci,ht,I,P,Fe,pi,ct,te,fi,pt,f,ie,Ge,di,mi,yi,ae,Me,wi,vi,bi,oe,Ne,gi,qi,ft,se,ki,dt,A,S,Be,_i,mt,ne,Ei,yt,C,We,xi,Ti,L,Ii,Le,Pi,Ai,wt,le,Si,vt,re,Ci,bt,ue,Fi,gt,he,Gi,qt,F,G,Oe,Mi,kt,ce,Ni,_t,pe,Bi,Et,fe,Wi,xt,de,Li,Tt,me,Oi,It,M,N,He,Hi,Pt,ye,Ri,At,we,ji,St,ve,Ui;return{c(){d=s("p"),Bt=r(`The quality of software engineering is a bit of a beaten up topic. But,
unfortunately, these conversations spend much of the time talking about
technical debt and why it’s, well, bad. While that’s not wrong, the subject of
quality is bit more complex than that, and today I wanted to share what I have
learned so far.`),Re=h(),O=s("p"),Wt=r(`Before we start, a quick disclaimer to avoid confusion. When I say the term
“quality” here, I mean quality of a product as a whole, not just technical debt
specifically.`),je=h(),m=s("h2"),y=s("a"),ge=s("span"),Lt=r("The intuition"),Ue=h(),H=s("p"),Ot=r(`Generally speaking, most conversations about managing quality revolve around the
following intuition. The better the quality the more expensive the product is.
And the more expensive the product the less willing the customers are to pay for
it, and hence we get less customers and profits.`),Qe=h(),R=s("p"),Ht=r(`If we add those two ideas together then it follows that some sort of an optimum
state of ballance needs to be found between investing in quality and making
profits. Which, generally speaking, makes sense.`),De=h(),j=s("p"),Rt=r("Here is another idea that universally accepted as something that makes sense:"),ze=h(),U=s("blockquote"),qe=s("p"),jt=r("Fish rots from the head down"),Ve=h(),w=s("p"),Ut=r(`It sounds right and might even correlate with our experience, but it’s factually
incorrect. Have you ever seen chefs picking up fish at a fish market? They
always sniff fish tails, because that’s where it `),ke=s("em"),Qt=r("actually"),Dt=r(" starts rotting."),Je=h(),v=s("h2"),b=s("a"),_e=s("span"),zt=r("The cost of quality"),Ze=h(),Q=s("p"),Vt=r(`Quality practitioners use two terms to describe the quality management
framework:`),Ke=h(),B=s("p"),Ee=s("strong"),Jt=r("The cost of great quality"),Zt=r(` - defines the amount of investments necessary to
bring quality higher. Just as intuition tells us, the higher the quality the
higher the cost. But, it’s not a linear relationship, it’s an exponential one.
As in the initial investments buy more quality, but eventually quality stops
growing with additional investments.`),$e=h(),g=s("figure"),D=s("img"),xe=s("figcaption"),Kt=r("Cost of great quality"),Xe=h(),W=s("p"),Te=s("strong"),$t=r("The cost of poor quality"),Xt=r(` - defines the amount of investments necessary to
maintain poor quality products. This includes costs such as operational costs
associated with fixes, product recalls, customer management, missed opportunity
cost, etc. Again a non-linear relationship, the initial small lapses in quality
cost less than more major quality issues. Which in extreme situations can cost
the company a business.`),Ye=h(),q=s("figure"),z=s("img"),Ie=s("figcaption"),Yt=r("Cost of poor quality"),et=h(),V=s("p"),ei=r(`And so, if we put those two graphs together, we would expect to see an
intersection of the lines, and that is what our intuition tells us is the sweet
spot between cost and quality that will result in maximum profits.`),tt=h(),k=s("figure"),J=s("img"),Pe=s("figcaption"),ti=r("Cost vs. quality"),it=h(),Z=s("p"),ii=r(`And just as with the fish rotting from the head down, this seems intuitively
like a sensible idea, except it is not factually correct.`),at=h(),_=s("h2"),E=s("a"),Ae=s("span"),ai=r("The problem"),ot=h(),x=s("p"),oi=r(`The main fallacy here is that there no scale to the picture. We’re sort of
`),Se=s("em"),si=r("expecting"),ni=r(` that the cost of good quality and the cost of poor quality will
revolve around the same numbers and intersect somewhere in the middle; like the
supply and demand graphs.`),st=h(),K=s("p"),li=r(`That is just not the cast in most situations. Most likely when put on the same
scale the combined graph would look like so:`),nt=h(),T=s("figure"),$=s("img"),Ce=s("figcaption"),ri=r("Cost vs. quality in reality"),lt=h(),X=s("p"),ui=r(`Generally speaking the gap between the cost of good quality and the cost of poor
quality will depend on two things: production volume and margins. The higher the
production volume the higher the poor quality overheads, because one has more
customers to serve. And conversely, the lower the production margins, the lower
the cost of good quality, because the cost of quality per an additional item is
lower.`),rt=h(),Y=s("p"),hi=r(`Now, if we think of an environment such as software engineering where the
production volume can count in hundreds of millions of users, and production of
an additional copy, aka margin cost, is virtually zero, it’s easy to understand
that the gap between the cost of good quality and the cost of the poor quality
will be exceptionally large.`),ut=h(),ee=s("p"),ci=r(`Which means that in a well functioning software engineering company there is no
really compromise to make or balance to find. The company should invest in as
much quality as it can afford, because the cost of poor quality grossly
outweighs the cost of good quality.`),ht=h(),I=s("h2"),P=s("a"),Fe=s("span"),pi=r("Another dimension"),ct=h(),te=s("p"),fi=r(`There is yet another dimension to this problem as well. Because quality in
products in not an uniformly distributed entity and actually has a deeper
structure. Virtually any set of features that a product has could be divided
into three categories:`),pt=h(),f=s("ol"),ie=s("li"),Ge=s("code"),di=r("Baseline expectations"),mi=r(` - people don’t even think about those as features.
For example, a car should have four fully inflated wheels and an engine.`),yi=h(),ae=s("li"),Me=s("code"),wi=r("Required features"),vi=r(` - those are the features that people usually use to
describe a product. For example, a car should be quiet on the inside, and it
should have a good infotainment system, and it should be comfortable for a
family of four.`),bi=h(),oe=s("li"),Ne=s("code"),gi=r("Delighters"),qi=r(` - those are the features that customers didn’t ask or even
thought about, but they enhance the value of the product in the user’s eyes.
Things like ergonomics or visual presentation would fall into this category.`),ft=h(),se=s("p"),ki=r(`This is related to quality because there are different quality expectations for
each category of features. The baseline expectations should work every single
time without a fail. For example a car must start, or a wet-site must open up.
The required features should work most of the time as well, spared some
exceptional circumstances: like for example some parts of your application could
be unavailable due to a new deployment or a production bug. And delighters are
expected to mostly work, but if they don’t it won’t affect the users much: say
if the visual blings in an app stopped working for a day or two.`),dt=h(),A=s("h2"),S=s("a"),Be=s("span"),_i=r("In practice"),mt=h(),ne=s("p"),Ei=r("So, lets quickly recap what we have gathered so far. There are two main ideas:"),yt=h(),C=s("ol"),We=s("li"),xi=r(`In a software product company the cost of poor quality grossly outweighs the
cost of good quality.`),Ti=h(),L=s("li"),Ii=r(`The internal structure of product quality dictates that the baseline features
must have great quality as a default expectation, and required features
should follow close behind. Meaning that 95+% of any application’s features
are `),Le=s("em"),Pi=r("expected"),Ai=r(" to have great quality."),wt=h(),le=s("p"),Si=r(`Both of those ideas point in the same direction, that investing in quality as
much as possible is the most sensible approach. Zero technical debt is the way
to go.`),vt=h(),re=s("p"),Ci=r(`Now, I don’t know about you, but I think this idea that you must invest in
quality as much as possible won’t sit great with most people. Who would want to
spend all their profits on quality, right? And once again, it’s just like with
the fish rotting from the head, the contradiction seems sensible, except it is
not factually correct.`),bt=h(),ue=s("p"),Fi=r(`When we step down to the real world practicalities, we will realise that spare
extreme cases, the quality is not capped by the amount of investment a company
can pour into it, the quality is capped by the state the art of the mainstream
technology that’s the company uses to create their products.`),gt=h(),he=s("p"),Gi=r(`For example, the quality of cars or smartphones manufacturing is limited by the
quality of the parts manufacturing process. Similarly the quality of a web
application service is limited by the cloud infrastructure vendor’s SLA, and the
security is limited by the security vendor’s guarantees.`),qt=h(),F=s("h2"),G=s("a"),Oe=s("span"),Mi=r("Funding the quality"),kt=h(),ce=s("p"),Ni=r(`Spare some behemoth companies like Apple, Google, or Samsung that can invest in
pushing technology beyond its limits and invest in getting even better quality
of products, most companies rely on technology vendors and hence are limited by
the best practices associated with these technologies rather than money that
they can spend on quality.`),_t=h(),pe=s("p"),Bi=r(`Still, even best practice level product development costs money. And so, often
times the conversation goes back to the idea that quality makes products more
expensive, which in turn negatively impacts sales. So, I wanted to add a few
points to that end as well.`),Et=h(),fe=s("p"),Wi=r(`The most likely situation where this might be the case is really when a company
is trying to operate in an oversaturated market and doesn’t segment it’s
offerings well. Meaning the company competes on margins rather than product
offerings. In a narrow band of highly optimised market production costs will be
everything, and unless the company invests in cheaper manufacturing processes
they won’t be able to afford quality.`),xt=h(),de=s("p"),Li=r(`That is not entirely the case in the SaaS products markets. The reason is that
the margin costs are near zero, which means that creating a 1-to-1 carbon copy
of another product will mostly produce basically an IP infringement law suit.`),Tt=h(),me=s("p"),Oi=r(`Most half-decent product strategies in the SaaS market are inherently
anticompetitive. Most successful software products operate in specific niches
and hence the cost of great quality should be priced in. Because if the quality
is not there, the company will instantly loose most of it’s customers to a
competitor that can make the same thing 10% better. Hence the products that
ultimately succeed have the quality baked in as a default`),It=h(),M=s("h2"),N=s("a"),He=s("span"),Hi=r("Wrapping up"),Pt=h(),ye=s("p"),Ri=r(`There is actual science behind this madness. And if you’re interested in the
actual statistical analysis and quantifiable methodology, I would strongly
recommend diving into lean six-sigma. It’s not entirely software engineering,
but the thinking and methods still apply.`),At=h(),we=s("p"),ji=r(`If you’re not up for that, then here is a short wrap. As far as software
development goes, you best bet is to use existing best practice as a default
expectation. Better yet, if you have some resources to spare, investing in
discovering better than the best practice will greatly improve the bottom line
outcomes.`),St=h(),ve=s("p"),Ui=r(`And conversely, operating on a level below best practice is basically throwing
the money into the wind. The main reason why situations like that exist is
because the company leadership never bothered to count the cost of poor quality,
and the expenses that go into maintaining poor quality applications largely go
unnoticed.`),this.h()},l(e){d=n(e,"P",{});var a=l(d);Bt=u(a,`The quality of software engineering is a bit of a beaten up topic. But,
unfortunately, these conversations spend much of the time talking about
technical debt and why it’s, well, bad. While that’s not wrong, the subject of
quality is bit more complex than that, and today I wanted to share what I have
learned so far.`),a.forEach(t),Re=c(e),O=n(e,"P",{});var ca=l(O);Wt=u(ca,`Before we start, a quick disclaimer to avoid confusion. When I say the term
“quality” here, I mean quality of a product as a whole, not just technical debt
specifically.`),ca.forEach(t),je=c(e),m=n(e,"H2",{id:!0});var Qi=l(m);y=n(Qi,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var pa=l(y);ge=n(pa,"SPAN",{class:!0}),l(ge).forEach(t),pa.forEach(t),Lt=u(Qi,"The intuition"),Qi.forEach(t),Ue=c(e),H=n(e,"P",{});var fa=l(H);Ot=u(fa,`Generally speaking, most conversations about managing quality revolve around the
following intuition. The better the quality the more expensive the product is.
And the more expensive the product the less willing the customers are to pay for
it, and hence we get less customers and profits.`),fa.forEach(t),Qe=c(e),R=n(e,"P",{});var da=l(R);Ht=u(da,`If we add those two ideas together then it follows that some sort of an optimum
state of ballance needs to be found between investing in quality and making
profits. Which, generally speaking, makes sense.`),da.forEach(t),De=c(e),j=n(e,"P",{});var ma=l(j);Rt=u(ma,"Here is another idea that universally accepted as something that makes sense:"),ma.forEach(t),ze=c(e),U=n(e,"BLOCKQUOTE",{});var ya=l(U);qe=n(ya,"P",{});var wa=l(qe);jt=u(wa,"Fish rots from the head down"),wa.forEach(t),ya.forEach(t),Ve=c(e),w=n(e,"P",{});var Ct=l(w);Ut=u(Ct,`It sounds right and might even correlate with our experience, but it’s factually
incorrect. Have you ever seen chefs picking up fish at a fish market? They
always sniff fish tails, because that’s where it `),ke=n(Ct,"EM",{});var va=l(ke);Qt=u(va,"actually"),va.forEach(t),Dt=u(Ct," starts rotting."),Ct.forEach(t),Je=c(e),v=n(e,"H2",{id:!0});var Di=l(v);b=n(Di,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ba=l(b);_e=n(ba,"SPAN",{class:!0}),l(_e).forEach(t),ba.forEach(t),zt=u(Di,"The cost of quality"),Di.forEach(t),Ze=c(e),Q=n(e,"P",{});var ga=l(Q);Vt=u(ga,`Quality practitioners use two terms to describe the quality management
framework:`),ga.forEach(t),Ke=c(e),B=n(e,"P",{});var zi=l(B);Ee=n(zi,"STRONG",{});var qa=l(Ee);Jt=u(qa,"The cost of great quality"),qa.forEach(t),Zt=u(zi,` - defines the amount of investments necessary to
bring quality higher. Just as intuition tells us, the higher the quality the
higher the cost. But, it’s not a linear relationship, it’s an exponential one.
As in the initial investments buy more quality, but eventually quality stops
growing with additional investments.`),zi.forEach(t),$e=c(e),g=n(e,"FIGURE",{class:!0});var Vi=l(g);D=n(Vi,"IMG",{src:!0,alt:!0}),xe=n(Vi,"FIGCAPTION",{});var ka=l(xe);Kt=u(ka,"Cost of great quality"),ka.forEach(t),Vi.forEach(t),Xe=c(e),W=n(e,"P",{});var Ji=l(W);Te=n(Ji,"STRONG",{});var _a=l(Te);$t=u(_a,"The cost of poor quality"),_a.forEach(t),Xt=u(Ji,` - defines the amount of investments necessary to
maintain poor quality products. This includes costs such as operational costs
associated with fixes, product recalls, customer management, missed opportunity
cost, etc. Again a non-linear relationship, the initial small lapses in quality
cost less than more major quality issues. Which in extreme situations can cost
the company a business.`),Ji.forEach(t),Ye=c(e),q=n(e,"FIGURE",{class:!0});var Zi=l(q);z=n(Zi,"IMG",{src:!0,alt:!0}),Ie=n(Zi,"FIGCAPTION",{});var Ea=l(Ie);Yt=u(Ea,"Cost of poor quality"),Ea.forEach(t),Zi.forEach(t),et=c(e),V=n(e,"P",{});var xa=l(V);ei=u(xa,`And so, if we put those two graphs together, we would expect to see an
intersection of the lines, and that is what our intuition tells us is the sweet
spot between cost and quality that will result in maximum profits.`),xa.forEach(t),tt=c(e),k=n(e,"FIGURE",{class:!0});var Ki=l(k);J=n(Ki,"IMG",{src:!0,alt:!0}),Pe=n(Ki,"FIGCAPTION",{});var Ta=l(Pe);ti=u(Ta,"Cost vs. quality"),Ta.forEach(t),Ki.forEach(t),it=c(e),Z=n(e,"P",{});var Ia=l(Z);ii=u(Ia,`And just as with the fish rotting from the head down, this seems intuitively
like a sensible idea, except it is not factually correct.`),Ia.forEach(t),at=c(e),_=n(e,"H2",{id:!0});var $i=l(_);E=n($i,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Pa=l(E);Ae=n(Pa,"SPAN",{class:!0}),l(Ae).forEach(t),Pa.forEach(t),ai=u($i,"The problem"),$i.forEach(t),ot=c(e),x=n(e,"P",{});var Ft=l(x);oi=u(Ft,`The main fallacy here is that there no scale to the picture. We’re sort of
`),Se=n(Ft,"EM",{});var Aa=l(Se);si=u(Aa,"expecting"),Aa.forEach(t),ni=u(Ft,` that the cost of good quality and the cost of poor quality will
revolve around the same numbers and intersect somewhere in the middle; like the
supply and demand graphs.`),Ft.forEach(t),st=c(e),K=n(e,"P",{});var Sa=l(K);li=u(Sa,`That is just not the cast in most situations. Most likely when put on the same
scale the combined graph would look like so:`),Sa.forEach(t),nt=c(e),T=n(e,"FIGURE",{class:!0});var Xi=l(T);$=n(Xi,"IMG",{src:!0,alt:!0}),Ce=n(Xi,"FIGCAPTION",{});var Ca=l(Ce);ri=u(Ca,"Cost vs. quality in reality"),Ca.forEach(t),Xi.forEach(t),lt=c(e),X=n(e,"P",{});var Fa=l(X);ui=u(Fa,`Generally speaking the gap between the cost of good quality and the cost of poor
quality will depend on two things: production volume and margins. The higher the
production volume the higher the poor quality overheads, because one has more
customers to serve. And conversely, the lower the production margins, the lower
the cost of good quality, because the cost of quality per an additional item is
lower.`),Fa.forEach(t),rt=c(e),Y=n(e,"P",{});var Ga=l(Y);hi=u(Ga,`Now, if we think of an environment such as software engineering where the
production volume can count in hundreds of millions of users, and production of
an additional copy, aka margin cost, is virtually zero, it’s easy to understand
that the gap between the cost of good quality and the cost of the poor quality
will be exceptionally large.`),Ga.forEach(t),ut=c(e),ee=n(e,"P",{});var Ma=l(ee);ci=u(Ma,`Which means that in a well functioning software engineering company there is no
really compromise to make or balance to find. The company should invest in as
much quality as it can afford, because the cost of poor quality grossly
outweighs the cost of good quality.`),Ma.forEach(t),ht=c(e),I=n(e,"H2",{id:!0});var Yi=l(I);P=n(Yi,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Na=l(P);Fe=n(Na,"SPAN",{class:!0}),l(Fe).forEach(t),Na.forEach(t),pi=u(Yi,"Another dimension"),Yi.forEach(t),ct=c(e),te=n(e,"P",{});var Ba=l(te);fi=u(Ba,`There is yet another dimension to this problem as well. Because quality in
products in not an uniformly distributed entity and actually has a deeper
structure. Virtually any set of features that a product has could be divided
into three categories:`),Ba.forEach(t),pt=c(e),f=n(e,"OL",{});var be=l(f);ie=n(be,"LI",{});var ea=l(ie);Ge=n(ea,"CODE",{});var Wa=l(Ge);di=u(Wa,"Baseline expectations"),Wa.forEach(t),mi=u(ea,` - people don’t even think about those as features.
For example, a car should have four fully inflated wheels and an engine.`),ea.forEach(t),yi=c(be),ae=n(be,"LI",{});var ta=l(ae);Me=n(ta,"CODE",{});var La=l(Me);wi=u(La,"Required features"),La.forEach(t),vi=u(ta,` - those are the features that people usually use to
describe a product. For example, a car should be quiet on the inside, and it
should have a good infotainment system, and it should be comfortable for a
family of four.`),ta.forEach(t),bi=c(be),oe=n(be,"LI",{});var ia=l(oe);Ne=n(ia,"CODE",{});var Oa=l(Ne);gi=u(Oa,"Delighters"),Oa.forEach(t),qi=u(ia,` - those are the features that customers didn’t ask or even
thought about, but they enhance the value of the product in the user’s eyes.
Things like ergonomics or visual presentation would fall into this category.`),ia.forEach(t),be.forEach(t),ft=c(e),se=n(e,"P",{});var Ha=l(se);ki=u(Ha,`This is related to quality because there are different quality expectations for
each category of features. The baseline expectations should work every single
time without a fail. For example a car must start, or a wet-site must open up.
The required features should work most of the time as well, spared some
exceptional circumstances: like for example some parts of your application could
be unavailable due to a new deployment or a production bug. And delighters are
expected to mostly work, but if they don’t it won’t affect the users much: say
if the visual blings in an app stopped working for a day or two.`),Ha.forEach(t),dt=c(e),A=n(e,"H2",{id:!0});var aa=l(A);S=n(aa,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Ra=l(S);Be=n(Ra,"SPAN",{class:!0}),l(Be).forEach(t),Ra.forEach(t),_i=u(aa,"In practice"),aa.forEach(t),mt=c(e),ne=n(e,"P",{});var ja=l(ne);Ei=u(ja,"So, lets quickly recap what we have gathered so far. There are two main ideas:"),ja.forEach(t),yt=c(e),C=n(e,"OL",{});var Gt=l(C);We=n(Gt,"LI",{});var Ua=l(We);xi=u(Ua,`In a software product company the cost of poor quality grossly outweighs the
cost of good quality.`),Ua.forEach(t),Ti=c(Gt),L=n(Gt,"LI",{});var Mt=l(L);Ii=u(Mt,`The internal structure of product quality dictates that the baseline features
must have great quality as a default expectation, and required features
should follow close behind. Meaning that 95+% of any application’s features
are `),Le=n(Mt,"EM",{});var Qa=l(Le);Pi=u(Qa,"expected"),Qa.forEach(t),Ai=u(Mt," to have great quality."),Mt.forEach(t),Gt.forEach(t),wt=c(e),le=n(e,"P",{});var Da=l(le);Si=u(Da,`Both of those ideas point in the same direction, that investing in quality as
much as possible is the most sensible approach. Zero technical debt is the way
to go.`),Da.forEach(t),vt=c(e),re=n(e,"P",{});var za=l(re);Ci=u(za,`Now, I don’t know about you, but I think this idea that you must invest in
quality as much as possible won’t sit great with most people. Who would want to
spend all their profits on quality, right? And once again, it’s just like with
the fish rotting from the head, the contradiction seems sensible, except it is
not factually correct.`),za.forEach(t),bt=c(e),ue=n(e,"P",{});var Va=l(ue);Fi=u(Va,`When we step down to the real world practicalities, we will realise that spare
extreme cases, the quality is not capped by the amount of investment a company
can pour into it, the quality is capped by the state the art of the mainstream
technology that’s the company uses to create their products.`),Va.forEach(t),gt=c(e),he=n(e,"P",{});var Ja=l(he);Gi=u(Ja,`For example, the quality of cars or smartphones manufacturing is limited by the
quality of the parts manufacturing process. Similarly the quality of a web
application service is limited by the cloud infrastructure vendor’s SLA, and the
security is limited by the security vendor’s guarantees.`),Ja.forEach(t),qt=c(e),F=n(e,"H2",{id:!0});var oa=l(F);G=n(oa,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Za=l(G);Oe=n(Za,"SPAN",{class:!0}),l(Oe).forEach(t),Za.forEach(t),Mi=u(oa,"Funding the quality"),oa.forEach(t),kt=c(e),ce=n(e,"P",{});var Ka=l(ce);Ni=u(Ka,`Spare some behemoth companies like Apple, Google, or Samsung that can invest in
pushing technology beyond its limits and invest in getting even better quality
of products, most companies rely on technology vendors and hence are limited by
the best practices associated with these technologies rather than money that
they can spend on quality.`),Ka.forEach(t),_t=c(e),pe=n(e,"P",{});var $a=l(pe);Bi=u($a,`Still, even best practice level product development costs money. And so, often
times the conversation goes back to the idea that quality makes products more
expensive, which in turn negatively impacts sales. So, I wanted to add a few
points to that end as well.`),$a.forEach(t),Et=c(e),fe=n(e,"P",{});var Xa=l(fe);Wi=u(Xa,`The most likely situation where this might be the case is really when a company
is trying to operate in an oversaturated market and doesn’t segment it’s
offerings well. Meaning the company competes on margins rather than product
offerings. In a narrow band of highly optimised market production costs will be
everything, and unless the company invests in cheaper manufacturing processes
they won’t be able to afford quality.`),Xa.forEach(t),xt=c(e),de=n(e,"P",{});var Ya=l(de);Li=u(Ya,`That is not entirely the case in the SaaS products markets. The reason is that
the margin costs are near zero, which means that creating a 1-to-1 carbon copy
of another product will mostly produce basically an IP infringement law suit.`),Ya.forEach(t),Tt=c(e),me=n(e,"P",{});var eo=l(me);Oi=u(eo,`Most half-decent product strategies in the SaaS market are inherently
anticompetitive. Most successful software products operate in specific niches
and hence the cost of great quality should be priced in. Because if the quality
is not there, the company will instantly loose most of it’s customers to a
competitor that can make the same thing 10% better. Hence the products that
ultimately succeed have the quality baked in as a default`),eo.forEach(t),It=c(e),M=n(e,"H2",{id:!0});var sa=l(M);N=n(sa,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var to=l(N);He=n(to,"SPAN",{class:!0}),l(He).forEach(t),to.forEach(t),Hi=u(sa,"Wrapping up"),sa.forEach(t),Pt=c(e),ye=n(e,"P",{});var io=l(ye);Ri=u(io,`There is actual science behind this madness. And if you’re interested in the
actual statistical analysis and quantifiable methodology, I would strongly
recommend diving into lean six-sigma. It’s not entirely software engineering,
but the thinking and methods still apply.`),io.forEach(t),At=c(e),we=n(e,"P",{});var ao=l(we);ji=u(ao,`If you’re not up for that, then here is a short wrap. As far as software
development goes, you best bet is to use existing best practice as a default
expectation. Better yet, if you have some resources to spare, investing in
discovering better than the best practice will greatly improve the bottom line
outcomes.`),ao.forEach(t),St=c(e),ve=n(e,"P",{});var oo=l(ve);Ui=u(oo,`And conversely, operating on a level below best practice is basically throwing
the money into the wind. The main reason why situations like that exist is
because the company leadership never bothered to count the cost of poor quality,
and the expenses that go into maintaining poor quality applications largely go
unnoticed.`),oo.forEach(t),this.h()},h(){p(ge,"class","icon icon-link"),p(y,"aria-hidden","true"),p(y,"tabindex","-1"),p(y,"href","#the-intuition"),p(m,"id","the-intuition"),p(_e,"class","icon icon-link"),p(b,"aria-hidden","true"),p(b,"tabindex","-1"),p(b,"href","#the-cost-of-quality"),p(v,"id","the-cost-of-quality"),Nt(D.src,la=xo)||p(D,"src",la),p(D,"alt","Cost of great quality"),p(g,"class","rehype-figure"),Nt(z.src,ra=To)||p(z,"src",ra),p(z,"alt","Cost of poor quality"),p(q,"class","rehype-figure"),Nt(J.src,ua=Io)||p(J,"src",ua),p(J,"alt","Cost vs. quality"),p(k,"class","rehype-figure"),p(Ae,"class","icon icon-link"),p(E,"aria-hidden","true"),p(E,"tabindex","-1"),p(E,"href","#the-problem"),p(_,"id","the-problem"),Nt($.src,ha=Po)||p($,"src",ha),p($,"alt","Cost vs. quality in reality"),p(T,"class","rehype-figure"),p(Fe,"class","icon icon-link"),p(P,"aria-hidden","true"),p(P,"tabindex","-1"),p(P,"href","#another-dimension"),p(I,"id","another-dimension"),p(Be,"class","icon icon-link"),p(S,"aria-hidden","true"),p(S,"tabindex","-1"),p(S,"href","#in-practice"),p(A,"id","in-practice"),p(Oe,"class","icon icon-link"),p(G,"aria-hidden","true"),p(G,"tabindex","-1"),p(G,"href","#funding-the-quality"),p(F,"id","funding-the-quality"),p(He,"class","icon icon-link"),p(N,"aria-hidden","true"),p(N,"tabindex","-1"),p(N,"href","#wrapping-up"),p(M,"id","wrapping-up")},m(e,a){o(e,d,a),i(d,Bt),o(e,Re,a),o(e,O,a),i(O,Wt),o(e,je,a),o(e,m,a),i(m,y),i(y,ge),i(m,Lt),o(e,Ue,a),o(e,H,a),i(H,Ot),o(e,Qe,a),o(e,R,a),i(R,Ht),o(e,De,a),o(e,j,a),i(j,Rt),o(e,ze,a),o(e,U,a),i(U,qe),i(qe,jt),o(e,Ve,a),o(e,w,a),i(w,Ut),i(w,ke),i(ke,Qt),i(w,Dt),o(e,Je,a),o(e,v,a),i(v,b),i(b,_e),i(v,zt),o(e,Ze,a),o(e,Q,a),i(Q,Vt),o(e,Ke,a),o(e,B,a),i(B,Ee),i(Ee,Jt),i(B,Zt),o(e,$e,a),o(e,g,a),i(g,D),i(g,xe),i(xe,Kt),o(e,Xe,a),o(e,W,a),i(W,Te),i(Te,$t),i(W,Xt),o(e,Ye,a),o(e,q,a),i(q,z),i(q,Ie),i(Ie,Yt),o(e,et,a),o(e,V,a),i(V,ei),o(e,tt,a),o(e,k,a),i(k,J),i(k,Pe),i(Pe,ti),o(e,it,a),o(e,Z,a),i(Z,ii),o(e,at,a),o(e,_,a),i(_,E),i(E,Ae),i(_,ai),o(e,ot,a),o(e,x,a),i(x,oi),i(x,Se),i(Se,si),i(x,ni),o(e,st,a),o(e,K,a),i(K,li),o(e,nt,a),o(e,T,a),i(T,$),i(T,Ce),i(Ce,ri),o(e,lt,a),o(e,X,a),i(X,ui),o(e,rt,a),o(e,Y,a),i(Y,hi),o(e,ut,a),o(e,ee,a),i(ee,ci),o(e,ht,a),o(e,I,a),i(I,P),i(P,Fe),i(I,pi),o(e,ct,a),o(e,te,a),i(te,fi),o(e,pt,a),o(e,f,a),i(f,ie),i(ie,Ge),i(Ge,di),i(ie,mi),i(f,yi),i(f,ae),i(ae,Me),i(Me,wi),i(ae,vi),i(f,bi),i(f,oe),i(oe,Ne),i(Ne,gi),i(oe,qi),o(e,ft,a),o(e,se,a),i(se,ki),o(e,dt,a),o(e,A,a),i(A,S),i(S,Be),i(A,_i),o(e,mt,a),o(e,ne,a),i(ne,Ei),o(e,yt,a),o(e,C,a),i(C,We),i(We,xi),i(C,Ti),i(C,L),i(L,Ii),i(L,Le),i(Le,Pi),i(L,Ai),o(e,wt,a),o(e,le,a),i(le,Si),o(e,vt,a),o(e,re,a),i(re,Ci),o(e,bt,a),o(e,ue,a),i(ue,Fi),o(e,gt,a),o(e,he,a),i(he,Gi),o(e,qt,a),o(e,F,a),i(F,G),i(G,Oe),i(F,Mi),o(e,kt,a),o(e,ce,a),i(ce,Ni),o(e,_t,a),o(e,pe,a),i(pe,Bi),o(e,Et,a),o(e,fe,a),i(fe,Wi),o(e,xt,a),o(e,de,a),i(de,Li),o(e,Tt,a),o(e,me,a),i(me,Oi),o(e,It,a),o(e,M,a),i(M,N),i(N,He),i(M,Hi),o(e,Pt,a),o(e,ye,a),i(ye,Ri),o(e,At,a),o(e,we,a),i(we,ji),o(e,St,a),o(e,ve,a),i(ve,Ui)},p:na,i:na,o:na,d(e){e&&t(d),e&&t(Re),e&&t(O),e&&t(je),e&&t(m),e&&t(Ue),e&&t(H),e&&t(Qe),e&&t(R),e&&t(De),e&&t(j),e&&t(ze),e&&t(U),e&&t(Ve),e&&t(w),e&&t(Je),e&&t(v),e&&t(Ze),e&&t(Q),e&&t(Ke),e&&t(B),e&&t($e),e&&t(g),e&&t(Xe),e&&t(W),e&&t(Ye),e&&t(q),e&&t(et),e&&t(V),e&&t(tt),e&&t(k),e&&t(it),e&&t(Z),e&&t(at),e&&t(_),e&&t(ot),e&&t(x),e&&t(st),e&&t(K),e&&t(nt),e&&t(T),e&&t(lt),e&&t(X),e&&t(rt),e&&t(Y),e&&t(ut),e&&t(ee),e&&t(ht),e&&t(I),e&&t(ct),e&&t(te),e&&t(pt),e&&t(f),e&&t(ft),e&&t(se),e&&t(dt),e&&t(A),e&&t(mt),e&&t(ne),e&&t(yt),e&&t(C),e&&t(wt),e&&t(le),e&&t(vt),e&&t(re),e&&t(bt),e&&t(ue),e&&t(gt),e&&t(he),e&&t(qt),e&&t(F),e&&t(kt),e&&t(ce),e&&t(_t),e&&t(pe),e&&t(Et),e&&t(fe),e&&t(xt),e&&t(de),e&&t(Tt),e&&t(me),e&&t(It),e&&t(M),e&&t(Pt),e&&t(ye),e&&t(At),e&&t(we),e&&t(St),e&&t(ve)}}}const Co={slug:"i9Npg",date:"5 June 2023",title:"Managing quality beyond technical debt",description:"A deep dive into quality management structure",thumbnail:Eo,tags:["leadership","management","strategy"],medium:{tags:["Technical leadership","Technical strategy","Product management","Leadership","Strategy"]}};class Fo extends no{constructor(d){super(),lo(this,d,null,Ao,ro,{})}}export{Fo as default,Co as metadata};
