import{S as ho,i as co,s as po,k as s,q as r,a as h,l as n,m as l,r as u,h as t,c,n as p,H as Rt,b as o,F as i,C as ua}from"./index-920be987.js";const fo="png",mo=1200,yo=600,wo="srgb",vo=4,bo="uchar",go=72,qo=!1,ko=!1,_o=!0,Eo=void 0,xo=!0,To=!1,Io=""+new URL("../assets/quality-management-ce635ca6.png",import.meta.url).href,Po={format:fo,width:mo,height:yo,space:wo,channels:vo,depth:bo,density:go,isProgressive:qo,hasProfile:ko,hasAlpha:_o,aspect:Eo,withoutEnlargement:xo,withoutReduction:To,src:Io},Ao=""+new URL("../assets/cost-of-good-quality-65540dcf.webp",import.meta.url).href,So=""+new URL("../assets/cost-of-poor-quality-028e768d.png",import.meta.url).href,Go=""+new URL("../assets/cost-vs-quality-62ce6424.webp",import.meta.url).href,Co=""+new URL("../assets/cost-vs-quality-2-e385aaf9.png",import.meta.url).href;function No(uo){let d,Wt,je,L,Lt,Ue,m,y,qe,Ot,Qe,O,Ht,ze,H,jt,Ve,j,Ut,Je,U,ke,Qt,De,w,zt,_e,Vt,Jt,Ze,v,b,Ee,Dt,Ke,Q,Zt,$e,B,xe,Kt,$t,Xe,g,z,ha,Te,Xt,Ye,R,Ie,Yt,ei,et,q,V,ca,Pe,ti,tt,J,ii,it,k,D,pa,Ae,ai,at,Z,oi,ot,_,E,Se,si,st,x,ni,Ge,li,ri,nt,K,ui,lt,T,$,fa,Ce,hi,rt,X,ci,ut,Y,pi,ht,ee,fi,ct,I,P,Ne,di,pt,te,mi,ft,f,ie,Fe,yi,wi,vi,ae,Me,bi,gi,qi,oe,Be,ki,_i,dt,se,Ei,mt,ne,xi,yt,A,S,Re,Ti,wt,le,Ii,vt,G,We,Pi,Ai,W,Si,Le,Gi,Ci,bt,re,Ni,gt,ue,Fi,qt,he,Mi,kt,ce,Bi,_t,C,N,Oe,Ri,Et,pe,Wi,xt,fe,Li,Tt,de,Oi,It,me,Hi,Pt,ye,ji,At,F,M,He,Ui,St,we,Qi,Gt,ve,zi,Ct,be,Vi;return{c(){d=s("p"),Wt=r(`The quality of software engineering is a bit of a beaten up topic. But,
unfortunately, these conversations spend much of the time talking about
technical debt and why it’s, well, bad. While that’s not wrong, the subject of
quality is bit more complex than that, and today I wanted to share what I have
learned so far.`),je=h(),L=s("p"),Lt=r(`Before we start, a quick disclaimer to avoid confusion. When I say the term
“quality” here, I mean quality of a product as a whole, not just technical debt
specifically.`),Ue=h(),m=s("h2"),y=s("a"),qe=s("span"),Ot=r("The intuition"),Qe=h(),O=s("p"),Ht=r(`Generally speaking, most conversations about managing quality revolve around the
following intuition. The better the quality the more expensive the product is.
And the more expensive the product the less willing the customers are to pay for
it, and hence we get less customers and profits.`),ze=h(),H=s("p"),jt=r(`If we add those two ideas together then it follows that some sort of an optimum
state of ballance needs to be found between investing in quality and making
profits. Which, generally speaking, makes sense.`),Ve=h(),j=s("p"),Ut=r("Here is another idea that universally accepted as something that makes sense:"),Je=h(),U=s("blockquote"),ke=s("p"),Qt=r("Fish rots from the head down"),De=h(),w=s("p"),zt=r(`It sounds right and might even correlate with our experience, but it’s factually
incorrect. Have you ever seen chefs picking up fish at a fish market? They
always sniff fish tails, because that’s where it `),_e=s("em"),Vt=r("actually"),Jt=r(" starts rotting."),Ze=h(),v=s("h2"),b=s("a"),Ee=s("span"),Dt=r("The cost of quality"),Ke=h(),Q=s("p"),Zt=r(`Quality practitioners use two terms to describe the quality management
framework:`),$e=h(),B=s("p"),xe=s("strong"),Kt=r("The cost of great quality"),$t=r(` - defines the amount of investments necessary to
bring quality higher. Just as intuition tells us, the higher the quality the
higher the cost. But, it’s not a linear relationship, it’s an exponential one.
As in the initial investments buy more quality, but eventually quality stops
growing with additional spending when it starts reaching perfection.`),Xe=h(),g=s("figure"),z=s("img"),Te=s("figcaption"),Xt=r("Cost of great quality"),Ye=h(),R=s("p"),Ie=s("strong"),Yt=r("The cost of poor quality"),ei=r(` - defines the amount of investments necessary to
maintain poor quality products. This includes costs such as operational costs
associated with fixes, product recalls, customer management, missed opportunity
cost, etc. Again a non-linear relationship, the initial small lapses in quality
cost less than more major quality issues. Which in extreme situations can cost
the company a business.`),et=h(),q=s("figure"),V=s("img"),Pe=s("figcaption"),ti=r("Cost of poor quality"),tt=h(),J=s("p"),ii=r(`And so, if we put those two graphs together, we would expect to see an
intersection of the lines, and that is what our intuition tells us is the sweet
spot between cost and quality that will result in maximum profits.`),it=h(),k=s("figure"),D=s("img"),Ae=s("figcaption"),ai=r("Cost vs. quality"),at=h(),Z=s("p"),oi=r(`And just as with the fish rotting from the head down, this seems intuitively
like a sensible idea, except it is not factually correct.`),ot=h(),_=s("h2"),E=s("a"),Se=s("span"),si=r("The problem"),st=h(),x=s("p"),ni=r(`The main fallacy here is that there is no scale to the picture. We’re sort of
`),Ge=s("em"),li=r("expecting"),ri=r(` that the cost of good quality and the cost of poor quality will
revolve around the same numbers and intersect somewhere in the middle; like the
supply and demand graphs.`),nt=h(),K=s("p"),ui=r(`That is just not the cast in most situations. Most likely when put on the same
scale the combined graph would look like so:`),lt=h(),T=s("figure"),$=s("img"),Ce=s("figcaption"),hi=r("Cost vs. quality in reality"),rt=h(),X=s("p"),ci=r(`Generally speaking the gap between the cost of good quality and the cost of poor
quality will depend on two things: production volume and margins. The higher the
production volume the higher the poor quality overheads, because one has more
customers to serve. And conversely, the lower the production margins, the lower
the cost of good quality, because the cost of quality per an additional item is
lower.`),ut=h(),Y=s("p"),pi=r(`Now, if we think of an environment such as software engineering where the
production volume can count in hundreds of millions of users, and production of
an additional copy, aka margin cost, is virtually zero, it’s easy to understand
that the gap between the cost of good quality and the cost of the poor quality
will be exceptionally large.`),ht=h(),ee=s("p"),fi=r(`Which means that in a well functioning software engineering company there is no
really compromise to make or balance to find. The company should invest in as
much quality as it can pull off, because the cost of poor quality grossly
outweighs the cost of good quality.`),ct=h(),I=s("h2"),P=s("a"),Ne=s("span"),di=r("Another dimension"),pt=h(),te=s("p"),mi=r(`There is yet another dimension to this problem as well. Because quality in
products in not an uniformly distributed entity and actually has a deeper
structure. Virtually any set of features that a product has could be divided
into three categories:`),ft=h(),f=s("ol"),ie=s("li"),Fe=s("strong"),yi=r("Baseline expectations"),wi=r(` - people don’t even think about those as features.
For example, a car should have four fully inflated wheels and an engine.`),vi=h(),ae=s("li"),Me=s("strong"),bi=r("Required features"),gi=r(` - those are the features that people usually use to
describe a product. For example, a car should be quiet on the inside, and it
should have a good infotainment system, and it should be comfortable for a
family of four.`),qi=h(),oe=s("li"),Be=s("strong"),ki=r("Delighters"),_i=r(` - those are the features that customers didn’t ask or even
thought about, but they enhance the value of the product in the user’s eyes.
Things like ergonomics or visual presentation would fall into this category.`),dt=h(),se=s("p"),Ei=r(`This is related to quality because there are different quality expectations for
each category of features. The baseline expectations should work every single
time without a fail. For example a car must start, or a website must open up.`),mt=h(),ne=s("p"),xi=r(`The required features should work most of the time as well, spared some
exceptional circumstances: like for example some parts of your application could
be unavailable due to a new deployment or a production bug. And delighters are
expected to mostly work, but if they don’t it won’t affect the users much: say
if the visual blings in an app stopped working for a day or two.`),yt=h(),A=s("h2"),S=s("a"),Re=s("span"),Ti=r("In practice"),wt=h(),le=s("p"),Ii=r("So, lets quickly recap what we have gathered so far. There are two main ideas:"),vt=h(),G=s("ol"),We=s("li"),Pi=r(`In a software product company the cost of poor quality grossly outweighs the
cost of good quality.`),Ai=h(),W=s("li"),Si=r(`The internal structure of product quality dictates that the baseline features
must have great quality as a default expectation, and required features
should follow close behind. Meaning that 95+% of any application’s features
are `),Le=s("em"),Gi=r("expected"),Ci=r(" to have great quality."),bt=h(),re=s("p"),Ni=r(`Both of those ideas point in the same direction, that investing in quality as
much as possible is the most sensible approach. Zero technical debt is the way
to go.`),gt=h(),ue=s("p"),Fi=r(`Now, I don’t know about you, but I think this idea that you must invest in
quality as much as possible won’t sit great with most people. Who would want to
spend all their profits on quality, right? And once again, it’s just like with
the fish rotting from the head, the contradiction seems sensible, except it is
not factually correct.`),qt=h(),he=s("p"),Mi=r(`When we step down to the real world practicalities, we will realise that spare
extreme cases, the quality is not capped by the amount of money a company can
pour into it, the quality is capped by the state the art of the mainstream
technology that’s the company uses to create their products.`),kt=h(),ce=s("p"),Bi=r(`For example, the quality of cars or smartphones manufacturing is limited by the
quality of the parts manufacturing process. Similarly the quality of a web
application service is limited by the cloud infrastructure vendor’s SLA, and the
security is limited by the security vendor’s guarantees.`),_t=h(),C=s("h2"),N=s("a"),Oe=s("span"),Ri=r("Funding the quality"),Et=h(),pe=s("p"),Wi=r(`Spare some behemoth companies like Apple, Google, or Samsung that can invest in
pushing technology beyond its limits and invest in getting even better quality
of products, most companies rely on technology vendors and hence are limited by
the best practices associated with these technologies rather than money that
they can spend on quality.`),xt=h(),fe=s("p"),Li=r(`Still, even best practice level product development costs money. And so, often
times the conversation goes back to the idea that quality makes products more
expensive, which in turn negatively impacts sales. So, I wanted to add a few
points to that end as well.`),Tt=h(),de=s("p"),Oi=r(`The most likely situation where this might be the case is really when a company
is trying to operate in an oversaturated market and doesn’t segment it’s
offerings well. Meaning the company competes on margins rather than product
offerings. In a narrow band of highly optimised market production costs will be
everything, and unless the company invests in cheaper manufacturing processes
they won’t be able to afford quality.`),It=h(),me=s("p"),Hi=r(`That is not entirely the case in the SaaS products markets. The reason is that
the margin costs are near zero, which means that creating a 1-to-1 carbon copy
of another product will mostly produce nothing but an IP infringement law suit.`),Pt=h(),ye=s("p"),ji=r(`Most half-decent product strategies in the SaaS market are inherently
anticompetitive. Most successful software products operate in specific niches
and hence the cost of great quality must be priced in. Because if the quality is
not there, the company will instantly loose the bulk of it’s customers to a
competitor that can make the same thing 10% better. Hence the products that
ultimately succeed have the quality baked in as a default.`),At=h(),F=s("h2"),M=s("a"),He=s("span"),Ui=r("Wrapping up"),St=h(),we=s("p"),Qi=r(`There is actual science behind this madness. And if you’re interested in the
actual statistical analysis and quantifiable methodology, I would strongly
recommend diving into lean six-sigma. It’s not entirely software engineering,
but the thinking and methods still apply.`),Gt=h(),ve=s("p"),zi=r(`If you’re not up for that, then here is a short wrap. As far as software
development goes, you best bet is to use existing best practice as a default
expectation. Better yet, if you have some resources to spare, investing in
discovering better than the best practice will greatly improve the bottom line
outcomes.`),Ct=h(),be=s("p"),Vi=r(`And conversely, operating on a level below best practice is basically throwing
the money into the wind. The main reason why situations like that exist is
because the company leadership never bothered to count the cost of poor quality,
and the expenses that go into maintaining poor quality applications largely go
unnoticed.`),this.h()},l(e){d=n(e,"P",{});var a=l(d);Wt=u(a,`The quality of software engineering is a bit of a beaten up topic. But,
unfortunately, these conversations spend much of the time talking about
technical debt and why it’s, well, bad. While that’s not wrong, the subject of
quality is bit more complex than that, and today I wanted to share what I have
learned so far.`),a.forEach(t),je=c(e),L=n(e,"P",{});var da=l(L);Lt=u(da,`Before we start, a quick disclaimer to avoid confusion. When I say the term
“quality” here, I mean quality of a product as a whole, not just technical debt
specifically.`),da.forEach(t),Ue=c(e),m=n(e,"H2",{id:!0});var Ji=l(m);y=n(Ji,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ma=l(y);qe=n(ma,"SPAN",{class:!0}),l(qe).forEach(t),ma.forEach(t),Ot=u(Ji,"The intuition"),Ji.forEach(t),Qe=c(e),O=n(e,"P",{});var ya=l(O);Ht=u(ya,`Generally speaking, most conversations about managing quality revolve around the
following intuition. The better the quality the more expensive the product is.
And the more expensive the product the less willing the customers are to pay for
it, and hence we get less customers and profits.`),ya.forEach(t),ze=c(e),H=n(e,"P",{});var wa=l(H);jt=u(wa,`If we add those two ideas together then it follows that some sort of an optimum
state of ballance needs to be found between investing in quality and making
profits. Which, generally speaking, makes sense.`),wa.forEach(t),Ve=c(e),j=n(e,"P",{});var va=l(j);Ut=u(va,"Here is another idea that universally accepted as something that makes sense:"),va.forEach(t),Je=c(e),U=n(e,"BLOCKQUOTE",{});var ba=l(U);ke=n(ba,"P",{});var ga=l(ke);Qt=u(ga,"Fish rots from the head down"),ga.forEach(t),ba.forEach(t),De=c(e),w=n(e,"P",{});var Nt=l(w);zt=u(Nt,`It sounds right and might even correlate with our experience, but it’s factually
incorrect. Have you ever seen chefs picking up fish at a fish market? They
always sniff fish tails, because that’s where it `),_e=n(Nt,"EM",{});var qa=l(_e);Vt=u(qa,"actually"),qa.forEach(t),Jt=u(Nt," starts rotting."),Nt.forEach(t),Ze=c(e),v=n(e,"H2",{id:!0});var Di=l(v);b=n(Di,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ka=l(b);Ee=n(ka,"SPAN",{class:!0}),l(Ee).forEach(t),ka.forEach(t),Dt=u(Di,"The cost of quality"),Di.forEach(t),Ke=c(e),Q=n(e,"P",{});var _a=l(Q);Zt=u(_a,`Quality practitioners use two terms to describe the quality management
framework:`),_a.forEach(t),$e=c(e),B=n(e,"P",{});var Zi=l(B);xe=n(Zi,"STRONG",{});var Ea=l(xe);Kt=u(Ea,"The cost of great quality"),Ea.forEach(t),$t=u(Zi,` - defines the amount of investments necessary to
bring quality higher. Just as intuition tells us, the higher the quality the
higher the cost. But, it’s not a linear relationship, it’s an exponential one.
As in the initial investments buy more quality, but eventually quality stops
growing with additional spending when it starts reaching perfection.`),Zi.forEach(t),Xe=c(e),g=n(e,"FIGURE",{class:!0});var Ki=l(g);z=n(Ki,"IMG",{src:!0,alt:!0}),Te=n(Ki,"FIGCAPTION",{});var xa=l(Te);Xt=u(xa,"Cost of great quality"),xa.forEach(t),Ki.forEach(t),Ye=c(e),R=n(e,"P",{});var $i=l(R);Ie=n($i,"STRONG",{});var Ta=l(Ie);Yt=u(Ta,"The cost of poor quality"),Ta.forEach(t),ei=u($i,` - defines the amount of investments necessary to
maintain poor quality products. This includes costs such as operational costs
associated with fixes, product recalls, customer management, missed opportunity
cost, etc. Again a non-linear relationship, the initial small lapses in quality
cost less than more major quality issues. Which in extreme situations can cost
the company a business.`),$i.forEach(t),et=c(e),q=n(e,"FIGURE",{class:!0});var Xi=l(q);V=n(Xi,"IMG",{src:!0,alt:!0}),Pe=n(Xi,"FIGCAPTION",{});var Ia=l(Pe);ti=u(Ia,"Cost of poor quality"),Ia.forEach(t),Xi.forEach(t),tt=c(e),J=n(e,"P",{});var Pa=l(J);ii=u(Pa,`And so, if we put those two graphs together, we would expect to see an
intersection of the lines, and that is what our intuition tells us is the sweet
spot between cost and quality that will result in maximum profits.`),Pa.forEach(t),it=c(e),k=n(e,"FIGURE",{class:!0});var Yi=l(k);D=n(Yi,"IMG",{src:!0,alt:!0}),Ae=n(Yi,"FIGCAPTION",{});var Aa=l(Ae);ai=u(Aa,"Cost vs. quality"),Aa.forEach(t),Yi.forEach(t),at=c(e),Z=n(e,"P",{});var Sa=l(Z);oi=u(Sa,`And just as with the fish rotting from the head down, this seems intuitively
like a sensible idea, except it is not factually correct.`),Sa.forEach(t),ot=c(e),_=n(e,"H2",{id:!0});var ea=l(_);E=n(ea,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Ga=l(E);Se=n(Ga,"SPAN",{class:!0}),l(Se).forEach(t),Ga.forEach(t),si=u(ea,"The problem"),ea.forEach(t),st=c(e),x=n(e,"P",{});var Ft=l(x);ni=u(Ft,`The main fallacy here is that there is no scale to the picture. We’re sort of
`),Ge=n(Ft,"EM",{});var Ca=l(Ge);li=u(Ca,"expecting"),Ca.forEach(t),ri=u(Ft,` that the cost of good quality and the cost of poor quality will
revolve around the same numbers and intersect somewhere in the middle; like the
supply and demand graphs.`),Ft.forEach(t),nt=c(e),K=n(e,"P",{});var Na=l(K);ui=u(Na,`That is just not the cast in most situations. Most likely when put on the same
scale the combined graph would look like so:`),Na.forEach(t),lt=c(e),T=n(e,"FIGURE",{class:!0});var ta=l(T);$=n(ta,"IMG",{src:!0,alt:!0}),Ce=n(ta,"FIGCAPTION",{});var Fa=l(Ce);hi=u(Fa,"Cost vs. quality in reality"),Fa.forEach(t),ta.forEach(t),rt=c(e),X=n(e,"P",{});var Ma=l(X);ci=u(Ma,`Generally speaking the gap between the cost of good quality and the cost of poor
quality will depend on two things: production volume and margins. The higher the
production volume the higher the poor quality overheads, because one has more
customers to serve. And conversely, the lower the production margins, the lower
the cost of good quality, because the cost of quality per an additional item is
lower.`),Ma.forEach(t),ut=c(e),Y=n(e,"P",{});var Ba=l(Y);pi=u(Ba,`Now, if we think of an environment such as software engineering where the
production volume can count in hundreds of millions of users, and production of
an additional copy, aka margin cost, is virtually zero, it’s easy to understand
that the gap between the cost of good quality and the cost of the poor quality
will be exceptionally large.`),Ba.forEach(t),ht=c(e),ee=n(e,"P",{});var Ra=l(ee);fi=u(Ra,`Which means that in a well functioning software engineering company there is no
really compromise to make or balance to find. The company should invest in as
much quality as it can pull off, because the cost of poor quality grossly
outweighs the cost of good quality.`),Ra.forEach(t),ct=c(e),I=n(e,"H2",{id:!0});var ia=l(I);P=n(ia,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Wa=l(P);Ne=n(Wa,"SPAN",{class:!0}),l(Ne).forEach(t),Wa.forEach(t),di=u(ia,"Another dimension"),ia.forEach(t),pt=c(e),te=n(e,"P",{});var La=l(te);mi=u(La,`There is yet another dimension to this problem as well. Because quality in
products in not an uniformly distributed entity and actually has a deeper
structure. Virtually any set of features that a product has could be divided
into three categories:`),La.forEach(t),ft=c(e),f=n(e,"OL",{});var ge=l(f);ie=n(ge,"LI",{});var aa=l(ie);Fe=n(aa,"STRONG",{});var Oa=l(Fe);yi=u(Oa,"Baseline expectations"),Oa.forEach(t),wi=u(aa,` - people don’t even think about those as features.
For example, a car should have four fully inflated wheels and an engine.`),aa.forEach(t),vi=c(ge),ae=n(ge,"LI",{});var oa=l(ae);Me=n(oa,"STRONG",{});var Ha=l(Me);bi=u(Ha,"Required features"),Ha.forEach(t),gi=u(oa,` - those are the features that people usually use to
describe a product. For example, a car should be quiet on the inside, and it
should have a good infotainment system, and it should be comfortable for a
family of four.`),oa.forEach(t),qi=c(ge),oe=n(ge,"LI",{});var sa=l(oe);Be=n(sa,"STRONG",{});var ja=l(Be);ki=u(ja,"Delighters"),ja.forEach(t),_i=u(sa,` - those are the features that customers didn’t ask or even
thought about, but they enhance the value of the product in the user’s eyes.
Things like ergonomics or visual presentation would fall into this category.`),sa.forEach(t),ge.forEach(t),dt=c(e),se=n(e,"P",{});var Ua=l(se);Ei=u(Ua,`This is related to quality because there are different quality expectations for
each category of features. The baseline expectations should work every single
time without a fail. For example a car must start, or a website must open up.`),Ua.forEach(t),mt=c(e),ne=n(e,"P",{});var Qa=l(ne);xi=u(Qa,`The required features should work most of the time as well, spared some
exceptional circumstances: like for example some parts of your application could
be unavailable due to a new deployment or a production bug. And delighters are
expected to mostly work, but if they don’t it won’t affect the users much: say
if the visual blings in an app stopped working for a day or two.`),Qa.forEach(t),yt=c(e),A=n(e,"H2",{id:!0});var na=l(A);S=n(na,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var za=l(S);Re=n(za,"SPAN",{class:!0}),l(Re).forEach(t),za.forEach(t),Ti=u(na,"In practice"),na.forEach(t),wt=c(e),le=n(e,"P",{});var Va=l(le);Ii=u(Va,"So, lets quickly recap what we have gathered so far. There are two main ideas:"),Va.forEach(t),vt=c(e),G=n(e,"OL",{});var Mt=l(G);We=n(Mt,"LI",{});var Ja=l(We);Pi=u(Ja,`In a software product company the cost of poor quality grossly outweighs the
cost of good quality.`),Ja.forEach(t),Ai=c(Mt),W=n(Mt,"LI",{});var Bt=l(W);Si=u(Bt,`The internal structure of product quality dictates that the baseline features
must have great quality as a default expectation, and required features
should follow close behind. Meaning that 95+% of any application’s features
are `),Le=n(Bt,"EM",{});var Da=l(Le);Gi=u(Da,"expected"),Da.forEach(t),Ci=u(Bt," to have great quality."),Bt.forEach(t),Mt.forEach(t),bt=c(e),re=n(e,"P",{});var Za=l(re);Ni=u(Za,`Both of those ideas point in the same direction, that investing in quality as
much as possible is the most sensible approach. Zero technical debt is the way
to go.`),Za.forEach(t),gt=c(e),ue=n(e,"P",{});var Ka=l(ue);Fi=u(Ka,`Now, I don’t know about you, but I think this idea that you must invest in
quality as much as possible won’t sit great with most people. Who would want to
spend all their profits on quality, right? And once again, it’s just like with
the fish rotting from the head, the contradiction seems sensible, except it is
not factually correct.`),Ka.forEach(t),qt=c(e),he=n(e,"P",{});var $a=l(he);Mi=u($a,`When we step down to the real world practicalities, we will realise that spare
extreme cases, the quality is not capped by the amount of money a company can
pour into it, the quality is capped by the state the art of the mainstream
technology that’s the company uses to create their products.`),$a.forEach(t),kt=c(e),ce=n(e,"P",{});var Xa=l(ce);Bi=u(Xa,`For example, the quality of cars or smartphones manufacturing is limited by the
quality of the parts manufacturing process. Similarly the quality of a web
application service is limited by the cloud infrastructure vendor’s SLA, and the
security is limited by the security vendor’s guarantees.`),Xa.forEach(t),_t=c(e),C=n(e,"H2",{id:!0});var la=l(C);N=n(la,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Ya=l(N);Oe=n(Ya,"SPAN",{class:!0}),l(Oe).forEach(t),Ya.forEach(t),Ri=u(la,"Funding the quality"),la.forEach(t),Et=c(e),pe=n(e,"P",{});var eo=l(pe);Wi=u(eo,`Spare some behemoth companies like Apple, Google, or Samsung that can invest in
pushing technology beyond its limits and invest in getting even better quality
of products, most companies rely on technology vendors and hence are limited by
the best practices associated with these technologies rather than money that
they can spend on quality.`),eo.forEach(t),xt=c(e),fe=n(e,"P",{});var to=l(fe);Li=u(to,`Still, even best practice level product development costs money. And so, often
times the conversation goes back to the idea that quality makes products more
expensive, which in turn negatively impacts sales. So, I wanted to add a few
points to that end as well.`),to.forEach(t),Tt=c(e),de=n(e,"P",{});var io=l(de);Oi=u(io,`The most likely situation where this might be the case is really when a company
is trying to operate in an oversaturated market and doesn’t segment it’s
offerings well. Meaning the company competes on margins rather than product
offerings. In a narrow band of highly optimised market production costs will be
everything, and unless the company invests in cheaper manufacturing processes
they won’t be able to afford quality.`),io.forEach(t),It=c(e),me=n(e,"P",{});var ao=l(me);Hi=u(ao,`That is not entirely the case in the SaaS products markets. The reason is that
the margin costs are near zero, which means that creating a 1-to-1 carbon copy
of another product will mostly produce nothing but an IP infringement law suit.`),ao.forEach(t),Pt=c(e),ye=n(e,"P",{});var oo=l(ye);ji=u(oo,`Most half-decent product strategies in the SaaS market are inherently
anticompetitive. Most successful software products operate in specific niches
and hence the cost of great quality must be priced in. Because if the quality is
not there, the company will instantly loose the bulk of it’s customers to a
competitor that can make the same thing 10% better. Hence the products that
ultimately succeed have the quality baked in as a default.`),oo.forEach(t),At=c(e),F=n(e,"H2",{id:!0});var ra=l(F);M=n(ra,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var so=l(M);He=n(so,"SPAN",{class:!0}),l(He).forEach(t),so.forEach(t),Ui=u(ra,"Wrapping up"),ra.forEach(t),St=c(e),we=n(e,"P",{});var no=l(we);Qi=u(no,`There is actual science behind this madness. And if you’re interested in the
actual statistical analysis and quantifiable methodology, I would strongly
recommend diving into lean six-sigma. It’s not entirely software engineering,
but the thinking and methods still apply.`),no.forEach(t),Gt=c(e),ve=n(e,"P",{});var lo=l(ve);zi=u(lo,`If you’re not up for that, then here is a short wrap. As far as software
development goes, you best bet is to use existing best practice as a default
expectation. Better yet, if you have some resources to spare, investing in
discovering better than the best practice will greatly improve the bottom line
outcomes.`),lo.forEach(t),Ct=c(e),be=n(e,"P",{});var ro=l(be);Vi=u(ro,`And conversely, operating on a level below best practice is basically throwing
the money into the wind. The main reason why situations like that exist is
because the company leadership never bothered to count the cost of poor quality,
and the expenses that go into maintaining poor quality applications largely go
unnoticed.`),ro.forEach(t),this.h()},h(){p(qe,"class","icon icon-link"),p(y,"aria-hidden","true"),p(y,"tabindex","-1"),p(y,"href","#the-intuition"),p(m,"id","the-intuition"),p(Ee,"class","icon icon-link"),p(b,"aria-hidden","true"),p(b,"tabindex","-1"),p(b,"href","#the-cost-of-quality"),p(v,"id","the-cost-of-quality"),Rt(z.src,ha=Ao)||p(z,"src",ha),p(z,"alt","Cost of great quality"),p(g,"class","rehype-figure"),Rt(V.src,ca=So)||p(V,"src",ca),p(V,"alt","Cost of poor quality"),p(q,"class","rehype-figure"),Rt(D.src,pa=Go)||p(D,"src",pa),p(D,"alt","Cost vs. quality"),p(k,"class","rehype-figure"),p(Se,"class","icon icon-link"),p(E,"aria-hidden","true"),p(E,"tabindex","-1"),p(E,"href","#the-problem"),p(_,"id","the-problem"),Rt($.src,fa=Co)||p($,"src",fa),p($,"alt","Cost vs. quality in reality"),p(T,"class","rehype-figure"),p(Ne,"class","icon icon-link"),p(P,"aria-hidden","true"),p(P,"tabindex","-1"),p(P,"href","#another-dimension"),p(I,"id","another-dimension"),p(Re,"class","icon icon-link"),p(S,"aria-hidden","true"),p(S,"tabindex","-1"),p(S,"href","#in-practice"),p(A,"id","in-practice"),p(Oe,"class","icon icon-link"),p(N,"aria-hidden","true"),p(N,"tabindex","-1"),p(N,"href","#funding-the-quality"),p(C,"id","funding-the-quality"),p(He,"class","icon icon-link"),p(M,"aria-hidden","true"),p(M,"tabindex","-1"),p(M,"href","#wrapping-up"),p(F,"id","wrapping-up")},m(e,a){o(e,d,a),i(d,Wt),o(e,je,a),o(e,L,a),i(L,Lt),o(e,Ue,a),o(e,m,a),i(m,y),i(y,qe),i(m,Ot),o(e,Qe,a),o(e,O,a),i(O,Ht),o(e,ze,a),o(e,H,a),i(H,jt),o(e,Ve,a),o(e,j,a),i(j,Ut),o(e,Je,a),o(e,U,a),i(U,ke),i(ke,Qt),o(e,De,a),o(e,w,a),i(w,zt),i(w,_e),i(_e,Vt),i(w,Jt),o(e,Ze,a),o(e,v,a),i(v,b),i(b,Ee),i(v,Dt),o(e,Ke,a),o(e,Q,a),i(Q,Zt),o(e,$e,a),o(e,B,a),i(B,xe),i(xe,Kt),i(B,$t),o(e,Xe,a),o(e,g,a),i(g,z),i(g,Te),i(Te,Xt),o(e,Ye,a),o(e,R,a),i(R,Ie),i(Ie,Yt),i(R,ei),o(e,et,a),o(e,q,a),i(q,V),i(q,Pe),i(Pe,ti),o(e,tt,a),o(e,J,a),i(J,ii),o(e,it,a),o(e,k,a),i(k,D),i(k,Ae),i(Ae,ai),o(e,at,a),o(e,Z,a),i(Z,oi),o(e,ot,a),o(e,_,a),i(_,E),i(E,Se),i(_,si),o(e,st,a),o(e,x,a),i(x,ni),i(x,Ge),i(Ge,li),i(x,ri),o(e,nt,a),o(e,K,a),i(K,ui),o(e,lt,a),o(e,T,a),i(T,$),i(T,Ce),i(Ce,hi),o(e,rt,a),o(e,X,a),i(X,ci),o(e,ut,a),o(e,Y,a),i(Y,pi),o(e,ht,a),o(e,ee,a),i(ee,fi),o(e,ct,a),o(e,I,a),i(I,P),i(P,Ne),i(I,di),o(e,pt,a),o(e,te,a),i(te,mi),o(e,ft,a),o(e,f,a),i(f,ie),i(ie,Fe),i(Fe,yi),i(ie,wi),i(f,vi),i(f,ae),i(ae,Me),i(Me,bi),i(ae,gi),i(f,qi),i(f,oe),i(oe,Be),i(Be,ki),i(oe,_i),o(e,dt,a),o(e,se,a),i(se,Ei),o(e,mt,a),o(e,ne,a),i(ne,xi),o(e,yt,a),o(e,A,a),i(A,S),i(S,Re),i(A,Ti),o(e,wt,a),o(e,le,a),i(le,Ii),o(e,vt,a),o(e,G,a),i(G,We),i(We,Pi),i(G,Ai),i(G,W),i(W,Si),i(W,Le),i(Le,Gi),i(W,Ci),o(e,bt,a),o(e,re,a),i(re,Ni),o(e,gt,a),o(e,ue,a),i(ue,Fi),o(e,qt,a),o(e,he,a),i(he,Mi),o(e,kt,a),o(e,ce,a),i(ce,Bi),o(e,_t,a),o(e,C,a),i(C,N),i(N,Oe),i(C,Ri),o(e,Et,a),o(e,pe,a),i(pe,Wi),o(e,xt,a),o(e,fe,a),i(fe,Li),o(e,Tt,a),o(e,de,a),i(de,Oi),o(e,It,a),o(e,me,a),i(me,Hi),o(e,Pt,a),o(e,ye,a),i(ye,ji),o(e,At,a),o(e,F,a),i(F,M),i(M,He),i(F,Ui),o(e,St,a),o(e,we,a),i(we,Qi),o(e,Gt,a),o(e,ve,a),i(ve,zi),o(e,Ct,a),o(e,be,a),i(be,Vi)},p:ua,i:ua,o:ua,d(e){e&&t(d),e&&t(je),e&&t(L),e&&t(Ue),e&&t(m),e&&t(Qe),e&&t(O),e&&t(ze),e&&t(H),e&&t(Ve),e&&t(j),e&&t(Je),e&&t(U),e&&t(De),e&&t(w),e&&t(Ze),e&&t(v),e&&t(Ke),e&&t(Q),e&&t($e),e&&t(B),e&&t(Xe),e&&t(g),e&&t(Ye),e&&t(R),e&&t(et),e&&t(q),e&&t(tt),e&&t(J),e&&t(it),e&&t(k),e&&t(at),e&&t(Z),e&&t(ot),e&&t(_),e&&t(st),e&&t(x),e&&t(nt),e&&t(K),e&&t(lt),e&&t(T),e&&t(rt),e&&t(X),e&&t(ut),e&&t(Y),e&&t(ht),e&&t(ee),e&&t(ct),e&&t(I),e&&t(pt),e&&t(te),e&&t(ft),e&&t(f),e&&t(dt),e&&t(se),e&&t(mt),e&&t(ne),e&&t(yt),e&&t(A),e&&t(wt),e&&t(le),e&&t(vt),e&&t(G),e&&t(bt),e&&t(re),e&&t(gt),e&&t(ue),e&&t(qt),e&&t(he),e&&t(kt),e&&t(ce),e&&t(_t),e&&t(C),e&&t(Et),e&&t(pe),e&&t(xt),e&&t(fe),e&&t(Tt),e&&t(de),e&&t(It),e&&t(me),e&&t(Pt),e&&t(ye),e&&t(At),e&&t(F),e&&t(St),e&&t(we),e&&t(Gt),e&&t(ve),e&&t(Ct),e&&t(be)}}}const Mo={slug:"i9Npg",date:"5 June 2023",title:"Managing quality beyond technical debt",description:"A deep dive into quality management structure",thumbnail:Po,tags:["leadership","management","strategy"],medium:{tags:["Technical leadership","Technical strategy","Product management","Leadership","Strategy"]}};class Bo extends ho{constructor(d){super(),co(this,d,null,No,po,{})}}export{Bo as default,Mo as metadata};
