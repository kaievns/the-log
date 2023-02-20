import{S as Ya,i as Za,s as $a,k as s,q as l,a as f,l as o,m as r,r as h,h as t,c as u,H as en,n as p,b as i,F as a,C as ca}from"./index-920be987.js";const tn=""+new URL("../assets/burndown-charts-24f831c6.webp",import.meta.url).href;function an(Xa){let c,ot,be,G,rt,ge,y,C,ya,ne,lt,ke,H,ht,Ee,Q,ft,_e,d,w,ie,ut,Ie,L,pt,Ae,F,mt,Te,v,b,se,ct,Pe,K,yt,xe,U,dt,qe,M,wt,Oe,m,N,vt,oe,bt,gt,kt,W,Et,re,_t,It,At,R,Tt,le,Pt,xt,Se,g,qt,he,Ot,St,Be,k,Bt,fe,jt,Nt,je,E,Wt,ue,Rt,Gt,Ne,_,I,pe,Ct,We,z,Ht,Re,A,Qt,me,Lt,Ft,Ge,D,Kt,Ce,J,Ut,He,T,P,ce,Mt,Qe,V,zt,Le,x,Dt,ye,Jt,Vt,Fe,X,Xt,Ke,Y,Yt,Ue,q,O,de,Zt,Me,Z,$t,ze,S,ea,we,ta,aa,De,$,na,Je,ee,ia,Ve,B,j,ve,sa,Xe,te,oa;return{c(){c=s("p"),ot=l(`Overtime, while working in management, everyone picks up shortcuts for assessing
situations quickly. They are not meant to give one a comprehensive information
about what’s going on, but they give a general idea that something doesn’t quite
smell right.`),be=f(),G=s("p"),rt=l(`After staring at burndown charts for years, I feel that I can tell the general
dynamics in a team and their processes struggles after looking at a few recent
burndown charts. If the chart looks like a plateau, hire a tech lead; if it
looks like a cliff hire a PO; if it looks like a triangle, leave the team alone
and go do something else.`),ge=f(),y=s("figure"),C=s("img"),ne=s("figcaption"),lt=l("Burndown chart types"),ke=f(),H=s("p"),ht=l(`Obviously, I’m not going to fire and hire anyone, that’s not how management
works. And, I might actually have a completely wrong idea about what’s going on.
But, at the same time, I know, that if there is something wrong with the
burndown charts, sprint after sprint consistently, there are usually reasons
that need investigation.`),Ee=f(),Q=s("p"),ft=l(`Today, I’m writing about one of those mental shortcuts and what’s the thinking
behind it.`),_e=f(),d=s("h2"),w=s("a"),ie=s("span"),ut=l("Why burndown charts?"),Ie=f(),L=s("p"),pt=l(`To be clear, I think there is nothing inherently superior about burndown charts.
All sorts of other tools could be used to quickly assess a team’s health. If
anything, and if I hand to choose just one tool, I’d probably look at the
frequency of deployments as the most reliable indicator.`),Ae=f(),F=s("p"),mt=l(`Burndown charts are quite ubiquitous though. They are readily available on most
platforms, and they’re visual. I also think that burndown charts are a bit more
verbose than say the deployments frequency number. And finally, as a manager, I
would normally know the members of the team, their seniority, skill levels, etc.
So, when paired that with the burndown charts analysis, it gives me a pretty
decent idea where to start digging.`),Te=f(),v=s("h2"),b=s("a"),se=s("span"),ct=l("Burndown patterns"),Pe=f(),K=s("p"),yt=l(`Life is messy, and software engineers work in highly unpredictable, dynamically
evolving environments. Burndown charts, as a reflection of that process, are
never clean either. Even perfectly high performing teams occasionally produce
less than stellar charts.`),xe=f(),U=s("p"),dt=l(`Still, if you analyse a series of charts, there are consistent patterns. If you
think about it from the systems thinking perspective, then you know that systems
produce consistent behaviour because of their internal structure. Burndown
charts are a manifestation of a complex system behaviour, and there are usually
specific reasons why they look the way they do.`),qe=f(),M=s("p"),wt=l(`There are three main shapes that I personally look at when I analyse burndown
charts behaviour:`),Oe=f(),m=s("ol"),N=s("li"),vt=l("A "),oe=s("strong"),bt=l("plateau"),gt=l(" - work is finished significantly early"),kt=f(),W=s("li"),Et=l("A "),re=s("strong"),_t=l("triangle"),It=l(" - work goes more or less according to a plan"),At=f(),R=s("li"),Tt=l("A "),le=s("strong"),Pt=l("cliff"),xt=l(` - a significant carry over, or most work submitted as a bulk at
the last minute`),Se=f(),g=s("p"),qt=l("The "),he=s("strong"),Ot=l("plateau"),St=l(` doesn’t happen often on a consistent basis. It usually means
that everything is overestimated, which usually caused by a lack of seniority on
the team. This pattern also produced by new teams that are recalibrating, but it
doesn’t persist over time.`),Be=f(),k=s("p"),Bt=l("The "),fe=s("strong"),jt=l("triangle"),Nt=l(` pattern usually means the team does what it supposed to, just
leave them to do their work. Keep in mind that triangles are never perfect, they
often have small cliffs or plateaus in the last quarter of the graph, that’s
perfectly normal.`),je=f(),E=s("p"),Wt=l("The most telling pattern is the "),ue=s("strong"),Rt=l("cliff"),Gt=l(` and that’s where you might want to get
involved as a manager. There are multiple specific situations that produce
cliffs, and that’s what I’m going to go through in the rest of the post.`),Ne=f(),_=s("h2"),I=s("a"),pe=s("span"),Ct=l("Cliff type 1: chunky"),We=f(),z=s("p"),Ht=l(`This type of cliffs often look like the bulk of the work is submitted in the
last minute. Or sometimes it manifests as a series of smaller cliffs that look
like huge steps on the chart. The work is usually mostly done, occasionally with
a delay, but the graph looks chunky.`),Re=f(),A=s("p"),Qt=l("As the name implies the "),me=s("strong"),Lt=l("chunky"),Ft=l(` cliff means that the team is not granular
enough in their estimations and planning. Tickets are often estimated in days
worth of effort. Hence when the items are delivered the are represented as big
drops on the chart.`),Ge=f(),D=s("p"),Kt=l(`When you see a chunky graph, it doesn’t necessarily mean lack of skill in
process and/or technology within the team. But, it does usually signify that the
team is playing the game conservatively. In a way it is the overestimation
coping behaviour, just in a different format: the team does a rather shallow
planning to be on the safe side.`),Ce=f(),J=s("p"),Ut=l(`There are usually a few possible reasons for this. Either the team members were
never taught effective planning techniques. Or there is a lack of trust between
product and engineering, which results in engineers not having enough insight
into the problem, or not having enough time to do the proper investigation and
planning. In the end of the planning session, the work just roughly shovelled
into large buckets and off they go.`),He=f(),T=s("h2"),P=s("a"),ce=s("span"),Mt=l("Cliff type 2: the wall"),Qe=f(),V=s("p"),zt=l(`This type of cliffs often looks like the chunky cliff, but it might look like
the cliff hanger (see below). The reason why it’s a separate type is that it has
a different kind of a problem underneath. In this case the process is at fault.`),Le=f(),x=s("p"),Dt=l("The "),ye=s("strong"),Jt=l("wall"),Vt=l(` in this instance refers to that mythical wall over which work is
often thrown. And it usually works like so. Work is dutifully estimated, and
then generously padded because those pesky QA people — who either sit quietly
in the corner, or not even present in the meeting — love to throw the work back
over the wall. Sometimes that is a PO playing the QA role. And sometimes, in
more old fashioned teams where development and delivery are separate, you might
see the wall between the devs and ops, with pretty much the same patten of the
system behaviour.`),Fe=f(),X=s("p"),Xt=l(`Engineers write code, throw it over the wall to QA and move on. An hour later QA
throws it back over the wall marked as faulty. And this volleyball match
begrudgingly drags for days. Everyone dutifully “just doing their work”.`),Ke=f(),Y=s("p"),Yt=l(`The problems is usually the same every time, the lack of actually
cross-functional work. A team might nominally be cross-functional and agile, but
they’d work on a waterfall in a miniature basis on the inside. And those walls
manifest in the charts as chunky drops.`),Ue=f(),q=s("h2"),O=s("a"),de=s("span"),Zt=l("Cliff type 3: the cliff hanger"),Me=f(),Z=s("p"),$t=l(`This type of cliffs happen when there is a significant amount of carry over into
the next sprint. Often times it is accompanied by an all out crunch time by the
team at the end of each sprint.`),ze=f(),S=s("p"),ea=l("I call it a "),we=s("strong"),ta=l("cliff hanger"),aa=l(` because there is usually very little predictability
into how much work will actually make it into the sprint deliverables. It’s
always a coin toss away. Two things are consistently predictable in those teams
though: burnout and accidents.`),De=f(),$=s("p"),na=l(`I personally consider cliff hangers a leadership failure. While the usual poor
planning and execution present, those are not the primary reason for this type
of patterns. The main reason is that the team is being consistently
overcommitted, then implicitly or explicitly blamed for the failure to deliver,
and consequently pressured into do or die situations to pay for their sins.`),Je=f(),ee=s("p"),ia=l(`A team lead has one job, to make sure that their team wins; consistently; every
time. And the primary tool for making sure that happens is to be protective over
the team commitments. It is the leader’s job to make sure teams don’t commit in
over their heads, and when they fail at that, you’d see the consistent cliff
hanger patterns, sprint after sprint.`),Ve=f(),B=s("h2"),j=s("a"),ve=s("span"),sa=l("Rolling the titles"),Xe=f(),te=s("p"),oa=l(`Well, I hope this was mildly entertaining and insightful. Again, as with any
shortcuts, it isn’t meant as a comprehensive guide, just and example of my own
thinking process. All managers have tools like those in their arsenal, you might
want to go poke their brains as well.`),this.h()},l(e){c=o(e,"P",{});var n=r(c);ot=h(n,`Overtime, while working in management, everyone picks up shortcuts for assessing
situations quickly. They are not meant to give one a comprehensive information
about what’s going on, but they give a general idea that something doesn’t quite
smell right.`),n.forEach(t),be=u(e),G=o(e,"P",{});var da=r(G);rt=h(da,`After staring at burndown charts for years, I feel that I can tell the general
dynamics in a team and their processes struggles after looking at a few recent
burndown charts. If the chart looks like a plateau, hire a tech lead; if it
looks like a cliff hire a PO; if it looks like a triangle, leave the team alone
and go do something else.`),da.forEach(t),ge=u(e),y=o(e,"FIGURE",{class:!0});var ra=r(y);C=o(ra,"IMG",{src:!0,alt:!0}),ne=o(ra,"FIGCAPTION",{});var wa=r(ne);lt=h(wa,"Burndown chart types"),wa.forEach(t),ra.forEach(t),ke=u(e),H=o(e,"P",{});var va=r(H);ht=h(va,`Obviously, I’m not going to fire and hire anyone, that’s not how management
works. And, I might actually have a completely wrong idea about what’s going on.
But, at the same time, I know, that if there is something wrong with the
burndown charts, sprint after sprint consistently, there are usually reasons
that need investigation.`),va.forEach(t),Ee=u(e),Q=o(e,"P",{});var ba=r(Q);ft=h(ba,`Today, I’m writing about one of those mental shortcuts and what’s the thinking
behind it.`),ba.forEach(t),_e=u(e),d=o(e,"H2",{id:!0});var la=r(d);w=o(la,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ga=r(w);ie=o(ga,"SPAN",{class:!0}),r(ie).forEach(t),ga.forEach(t),ut=h(la,"Why burndown charts?"),la.forEach(t),Ie=u(e),L=o(e,"P",{});var ka=r(L);pt=h(ka,`To be clear, I think there is nothing inherently superior about burndown charts.
All sorts of other tools could be used to quickly assess a team’s health. If
anything, and if I hand to choose just one tool, I’d probably look at the
frequency of deployments as the most reliable indicator.`),ka.forEach(t),Ae=u(e),F=o(e,"P",{});var Ea=r(F);mt=h(Ea,`Burndown charts are quite ubiquitous though. They are readily available on most
platforms, and they’re visual. I also think that burndown charts are a bit more
verbose than say the deployments frequency number. And finally, as a manager, I
would normally know the members of the team, their seniority, skill levels, etc.
So, when paired that with the burndown charts analysis, it gives me a pretty
decent idea where to start digging.`),Ea.forEach(t),Te=u(e),v=o(e,"H2",{id:!0});var ha=r(v);b=o(ha,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var _a=r(b);se=o(_a,"SPAN",{class:!0}),r(se).forEach(t),_a.forEach(t),ct=h(ha,"Burndown patterns"),ha.forEach(t),Pe=u(e),K=o(e,"P",{});var Ia=r(K);yt=h(Ia,`Life is messy, and software engineers work in highly unpredictable, dynamically
evolving environments. Burndown charts, as a reflection of that process, are
never clean either. Even perfectly high performing teams occasionally produce
less than stellar charts.`),Ia.forEach(t),xe=u(e),U=o(e,"P",{});var Aa=r(U);dt=h(Aa,`Still, if you analyse a series of charts, there are consistent patterns. If you
think about it from the systems thinking perspective, then you know that systems
produce consistent behaviour because of their internal structure. Burndown
charts are a manifestation of a complex system behaviour, and there are usually
specific reasons why they look the way they do.`),Aa.forEach(t),qe=u(e),M=o(e,"P",{});var Ta=r(M);wt=h(Ta,`There are three main shapes that I personally look at when I analyse burndown
charts behaviour:`),Ta.forEach(t),Oe=u(e),m=o(e,"OL",{});var ae=r(m);N=o(ae,"LI",{});var Ye=r(N);vt=h(Ye,"A "),oe=o(Ye,"STRONG",{});var Pa=r(oe);bt=h(Pa,"plateau"),Pa.forEach(t),gt=h(Ye," - work is finished significantly early"),Ye.forEach(t),kt=u(ae),W=o(ae,"LI",{});var Ze=r(W);Et=h(Ze,"A "),re=o(Ze,"STRONG",{});var xa=r(re);_t=h(xa,"triangle"),xa.forEach(t),It=h(Ze," - work goes more or less according to a plan"),Ze.forEach(t),At=u(ae),R=o(ae,"LI",{});var $e=r(R);Tt=h($e,"A "),le=o($e,"STRONG",{});var qa=r(le);Pt=h(qa,"cliff"),qa.forEach(t),xt=h($e,` - a significant carry over, or most work submitted as a bulk at
the last minute`),$e.forEach(t),ae.forEach(t),Se=u(e),g=o(e,"P",{});var et=r(g);qt=h(et,"The "),he=o(et,"STRONG",{});var Oa=r(he);Ot=h(Oa,"plateau"),Oa.forEach(t),St=h(et,` doesn’t happen often on a consistent basis. It usually means
that everything is overestimated, which usually caused by a lack of seniority on
the team. This pattern also produced by new teams that are recalibrating, but it
doesn’t persist over time.`),et.forEach(t),Be=u(e),k=o(e,"P",{});var tt=r(k);Bt=h(tt,"The "),fe=o(tt,"STRONG",{});var Sa=r(fe);jt=h(Sa,"triangle"),Sa.forEach(t),Nt=h(tt,` pattern usually means the team does what it supposed to, just
leave them to do their work. Keep in mind that triangles are never perfect, they
often have small cliffs or plateaus in the last quarter of the graph, that’s
perfectly normal.`),tt.forEach(t),je=u(e),E=o(e,"P",{});var at=r(E);Wt=h(at,"The most telling pattern is the "),ue=o(at,"STRONG",{});var Ba=r(ue);Rt=h(Ba,"cliff"),Ba.forEach(t),Gt=h(at,` and that’s where you might want to get
involved as a manager. There are multiple specific situations that produce
cliffs, and that’s what I’m going to go through in the rest of the post.`),at.forEach(t),Ne=u(e),_=o(e,"H2",{id:!0});var fa=r(_);I=o(fa,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ja=r(I);pe=o(ja,"SPAN",{class:!0}),r(pe).forEach(t),ja.forEach(t),Ct=h(fa,"Cliff type 1: chunky"),fa.forEach(t),We=u(e),z=o(e,"P",{});var Na=r(z);Ht=h(Na,`This type of cliffs often look like the bulk of the work is submitted in the
last minute. Or sometimes it manifests as a series of smaller cliffs that look
like huge steps on the chart. The work is usually mostly done, occasionally with
a delay, but the graph looks chunky.`),Na.forEach(t),Re=u(e),A=o(e,"P",{});var nt=r(A);Qt=h(nt,"As the name implies the "),me=o(nt,"STRONG",{});var Wa=r(me);Lt=h(Wa,"chunky"),Wa.forEach(t),Ft=h(nt,` cliff means that the team is not granular
enough in their estimations and planning. Tickets are often estimated in days
worth of effort. Hence when the items are delivered the are represented as big
drops on the chart.`),nt.forEach(t),Ge=u(e),D=o(e,"P",{});var Ra=r(D);Kt=h(Ra,`When you see a chunky graph, it doesn’t necessarily mean lack of skill in
process and/or technology within the team. But, it does usually signify that the
team is playing the game conservatively. In a way it is the overestimation
coping behaviour, just in a different format: the team does a rather shallow
planning to be on the safe side.`),Ra.forEach(t),Ce=u(e),J=o(e,"P",{});var Ga=r(J);Ut=h(Ga,`There are usually a few possible reasons for this. Either the team members were
never taught effective planning techniques. Or there is a lack of trust between
product and engineering, which results in engineers not having enough insight
into the problem, or not having enough time to do the proper investigation and
planning. In the end of the planning session, the work just roughly shovelled
into large buckets and off they go.`),Ga.forEach(t),He=u(e),T=o(e,"H2",{id:!0});var ua=r(T);P=o(ua,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Ca=r(P);ce=o(Ca,"SPAN",{class:!0}),r(ce).forEach(t),Ca.forEach(t),Mt=h(ua,"Cliff type 2: the wall"),ua.forEach(t),Qe=u(e),V=o(e,"P",{});var Ha=r(V);zt=h(Ha,`This type of cliffs often looks like the chunky cliff, but it might look like
the cliff hanger (see below). The reason why it’s a separate type is that it has
a different kind of a problem underneath. In this case the process is at fault.`),Ha.forEach(t),Le=u(e),x=o(e,"P",{});var it=r(x);Dt=h(it,"The "),ye=o(it,"STRONG",{});var Qa=r(ye);Jt=h(Qa,"wall"),Qa.forEach(t),Vt=h(it,` in this instance refers to that mythical wall over which work is
often thrown. And it usually works like so. Work is dutifully estimated, and
then generously padded because those pesky QA people — who either sit quietly
in the corner, or not even present in the meeting — love to throw the work back
over the wall. Sometimes that is a PO playing the QA role. And sometimes, in
more old fashioned teams where development and delivery are separate, you might
see the wall between the devs and ops, with pretty much the same patten of the
system behaviour.`),it.forEach(t),Fe=u(e),X=o(e,"P",{});var La=r(X);Xt=h(La,`Engineers write code, throw it over the wall to QA and move on. An hour later QA
throws it back over the wall marked as faulty. And this volleyball match
begrudgingly drags for days. Everyone dutifully “just doing their work”.`),La.forEach(t),Ke=u(e),Y=o(e,"P",{});var Fa=r(Y);Yt=h(Fa,`The problems is usually the same every time, the lack of actually
cross-functional work. A team might nominally be cross-functional and agile, but
they’d work on a waterfall in a miniature basis on the inside. And those walls
manifest in the charts as chunky drops.`),Fa.forEach(t),Ue=u(e),q=o(e,"H2",{id:!0});var pa=r(q);O=o(pa,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Ka=r(O);de=o(Ka,"SPAN",{class:!0}),r(de).forEach(t),Ka.forEach(t),Zt=h(pa,"Cliff type 3: the cliff hanger"),pa.forEach(t),Me=u(e),Z=o(e,"P",{});var Ua=r(Z);$t=h(Ua,`This type of cliffs happen when there is a significant amount of carry over into
the next sprint. Often times it is accompanied by an all out crunch time by the
team at the end of each sprint.`),Ua.forEach(t),ze=u(e),S=o(e,"P",{});var st=r(S);ea=h(st,"I call it a "),we=o(st,"STRONG",{});var Ma=r(we);ta=h(Ma,"cliff hanger"),Ma.forEach(t),aa=h(st,` because there is usually very little predictability
into how much work will actually make it into the sprint deliverables. It’s
always a coin toss away. Two things are consistently predictable in those teams
though: burnout and accidents.`),st.forEach(t),De=u(e),$=o(e,"P",{});var za=r($);na=h(za,`I personally consider cliff hangers a leadership failure. While the usual poor
planning and execution present, those are not the primary reason for this type
of patterns. The main reason is that the team is being consistently
overcommitted, then implicitly or explicitly blamed for the failure to deliver,
and consequently pressured into do or die situations to pay for their sins.`),za.forEach(t),Je=u(e),ee=o(e,"P",{});var Da=r(ee);ia=h(Da,`A team lead has one job, to make sure that their team wins; consistently; every
time. And the primary tool for making sure that happens is to be protective over
the team commitments. It is the leader’s job to make sure teams don’t commit in
over their heads, and when they fail at that, you’d see the consistent cliff
hanger patterns, sprint after sprint.`),Da.forEach(t),Ve=u(e),B=o(e,"H2",{id:!0});var ma=r(B);j=o(ma,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Ja=r(j);ve=o(Ja,"SPAN",{class:!0}),r(ve).forEach(t),Ja.forEach(t),sa=h(ma,"Rolling the titles"),ma.forEach(t),Xe=u(e),te=o(e,"P",{});var Va=r(te);oa=h(Va,`Well, I hope this was mildly entertaining and insightful. Again, as with any
shortcuts, it isn’t meant as a comprehensive guide, just and example of my own
thinking process. All managers have tools like those in their arsenal, you might
want to go poke their brains as well.`),Va.forEach(t),this.h()},h(){en(C.src,ya=tn)||p(C,"src",ya),p(C,"alt","Burndown chart types"),p(y,"class","rehype-figure"),p(ie,"class","icon icon-link"),p(w,"aria-hidden","true"),p(w,"tabindex","-1"),p(w,"href","#why-burndown-charts"),p(d,"id","why-burndown-charts"),p(se,"class","icon icon-link"),p(b,"aria-hidden","true"),p(b,"tabindex","-1"),p(b,"href","#burndown-patterns"),p(v,"id","burndown-patterns"),p(pe,"class","icon icon-link"),p(I,"aria-hidden","true"),p(I,"tabindex","-1"),p(I,"href","#cliff-type-1-chunky"),p(_,"id","cliff-type-1-chunky"),p(ce,"class","icon icon-link"),p(P,"aria-hidden","true"),p(P,"tabindex","-1"),p(P,"href","#cliff-type-2-the-wall"),p(T,"id","cliff-type-2-the-wall"),p(de,"class","icon icon-link"),p(O,"aria-hidden","true"),p(O,"tabindex","-1"),p(O,"href","#cliff-type-3-the-cliff-hanger"),p(q,"id","cliff-type-3-the-cliff-hanger"),p(ve,"class","icon icon-link"),p(j,"aria-hidden","true"),p(j,"tabindex","-1"),p(j,"href","#rolling-the-titles"),p(B,"id","rolling-the-titles")},m(e,n){i(e,c,n),a(c,ot),i(e,be,n),i(e,G,n),a(G,rt),i(e,ge,n),i(e,y,n),a(y,C),a(y,ne),a(ne,lt),i(e,ke,n),i(e,H,n),a(H,ht),i(e,Ee,n),i(e,Q,n),a(Q,ft),i(e,_e,n),i(e,d,n),a(d,w),a(w,ie),a(d,ut),i(e,Ie,n),i(e,L,n),a(L,pt),i(e,Ae,n),i(e,F,n),a(F,mt),i(e,Te,n),i(e,v,n),a(v,b),a(b,se),a(v,ct),i(e,Pe,n),i(e,K,n),a(K,yt),i(e,xe,n),i(e,U,n),a(U,dt),i(e,qe,n),i(e,M,n),a(M,wt),i(e,Oe,n),i(e,m,n),a(m,N),a(N,vt),a(N,oe),a(oe,bt),a(N,gt),a(m,kt),a(m,W),a(W,Et),a(W,re),a(re,_t),a(W,It),a(m,At),a(m,R),a(R,Tt),a(R,le),a(le,Pt),a(R,xt),i(e,Se,n),i(e,g,n),a(g,qt),a(g,he),a(he,Ot),a(g,St),i(e,Be,n),i(e,k,n),a(k,Bt),a(k,fe),a(fe,jt),a(k,Nt),i(e,je,n),i(e,E,n),a(E,Wt),a(E,ue),a(ue,Rt),a(E,Gt),i(e,Ne,n),i(e,_,n),a(_,I),a(I,pe),a(_,Ct),i(e,We,n),i(e,z,n),a(z,Ht),i(e,Re,n),i(e,A,n),a(A,Qt),a(A,me),a(me,Lt),a(A,Ft),i(e,Ge,n),i(e,D,n),a(D,Kt),i(e,Ce,n),i(e,J,n),a(J,Ut),i(e,He,n),i(e,T,n),a(T,P),a(P,ce),a(T,Mt),i(e,Qe,n),i(e,V,n),a(V,zt),i(e,Le,n),i(e,x,n),a(x,Dt),a(x,ye),a(ye,Jt),a(x,Vt),i(e,Fe,n),i(e,X,n),a(X,Xt),i(e,Ke,n),i(e,Y,n),a(Y,Yt),i(e,Ue,n),i(e,q,n),a(q,O),a(O,de),a(q,Zt),i(e,Me,n),i(e,Z,n),a(Z,$t),i(e,ze,n),i(e,S,n),a(S,ea),a(S,we),a(we,ta),a(S,aa),i(e,De,n),i(e,$,n),a($,na),i(e,Je,n),i(e,ee,n),a(ee,ia),i(e,Ve,n),i(e,B,n),a(B,j),a(j,ve),a(B,sa),i(e,Xe,n),i(e,te,n),a(te,oa)},p:ca,i:ca,o:ca,d(e){e&&t(c),e&&t(be),e&&t(G),e&&t(ge),e&&t(y),e&&t(ke),e&&t(H),e&&t(Ee),e&&t(Q),e&&t(_e),e&&t(d),e&&t(Ie),e&&t(L),e&&t(Ae),e&&t(F),e&&t(Te),e&&t(v),e&&t(Pe),e&&t(K),e&&t(xe),e&&t(U),e&&t(qe),e&&t(M),e&&t(Oe),e&&t(m),e&&t(Se),e&&t(g),e&&t(Be),e&&t(k),e&&t(je),e&&t(E),e&&t(Ne),e&&t(_),e&&t(We),e&&t(z),e&&t(Re),e&&t(A),e&&t(Ge),e&&t(D),e&&t(Ce),e&&t(J),e&&t(He),e&&t(T),e&&t(Qe),e&&t(V),e&&t(Le),e&&t(x),e&&t(Fe),e&&t(X),e&&t(Ke),e&&t(Y),e&&t(Ue),e&&t(q),e&&t(Me),e&&t(Z),e&&t(ze),e&&t(S),e&&t(De),e&&t($),e&&t(Je),e&&t(ee),e&&t(Ve),e&&t(B),e&&t(Xe),e&&t(te)}}}const sn={slug:"ekyxo",date:"20 Feb 2023",title:"Why your burndown chart looks like a cliff",description:"We are going through some examples of a burndown charts analysis, and look at ways to debug a team's performance",tags:["management","agile"]};class on extends Ya{constructor(c){super(),Za(this,c,null,an,$a,{})}}export{on as default,sn as metadata};
