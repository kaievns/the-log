import{S as Yn,i as Zn,s as ea,k as s,q as l,a as f,l as o,m as r,r as h,h as t,c as u,H as ta,n as p,b as i,F as n,C as dn}from"./index-920be987.js";const na="png",aa=1200,ia=600,sa="srgb",oa=3,ra="uchar",la=132,ha=!1,fa="inch",ua=!0,pa=!1,ca=1,ma=void 0,da=!0,ya=!1,wa=""+new URL("../assets/burndown-charts-f74cabad.png",import.meta.url).href,va={format:na,width:aa,height:ia,space:sa,channels:oa,depth:ra,density:la,isProgressive:ha,resolutionUnit:fa,hasProfile:ua,hasAlpha:pa,orientation:ca,aspect:ma,withoutEnlargement:da,withoutReduction:ya,src:wa},ga=""+new URL("../assets/burndown-charts-3da1dd3c.webp",import.meta.url).href;function ba(Xn){let m,ot,ge,W,rt,be,d,C,yn,ae,lt,ke,H,ht,Ee,L,ft,_e,y,w,ie,ut,Ae,Q,pt,Ie,U,ct,Te,v,g,se,mt,Pe,F,dt,xe,K,yt,qe,M,wt,Oe,c,j,vt,oe,gt,bt,kt,R,Et,re,_t,At,It,G,Tt,le,Pt,xt,Se,b,qt,he,Ot,St,Be,k,Bt,fe,Nt,jt,Ne,E,Rt,ue,Gt,Wt,je,_,A,pe,Ct,Re,$,Ht,Ge,I,Lt,ce,Qt,Ut,We,z,Ft,Ce,D,Kt,He,T,P,me,Mt,Le,J,$t,Qe,x,zt,de,Dt,Jt,Ue,V,Vt,Fe,X,Xt,Ke,q,O,ye,Yt,Me,Y,Zt,$e,S,en,we,tn,nn,ze,Z,an,De,ee,sn,Je,B,N,ve,on,Ve,te,rn;return{c(){m=s("p"),ot=l(`Overtime, while working in management, everyone picks up shortcuts for assessing
situations quickly. They are not meant to give one a comprehensive information
about what’s going on, but they give a general idea that something doesn’t quite
smell right.`),ge=f(),W=s("p"),rt=l(`After staring at burndown charts for years, I feel that I can tell the general
dynamics in a team and their processes struggles after looking at a few recent
burndown charts. If the chart looks like a plateau, hire a tech lead; if it
looks like a cliff hire a PO; if it looks like a triangle, leave the team alone
and go do something else.`),be=f(),d=s("figure"),C=s("img"),ae=s("figcaption"),lt=l("Burndown chart types"),ke=f(),H=s("p"),ht=l(`Obviously, I’m not going to fire and hire anyone, that’s not how management
works. And, I might actually have a completely wrong idea about what’s going on.
But, at the same time, I know, that if there is something wrong with the
burndown charts, sprint after sprint consistently, there are usually reasons
that need investigation.`),Ee=f(),L=s("p"),ft=l(`Today, I’m writing about one of those mental shortcuts and what’s the thinking
behind it.`),_e=f(),y=s("h2"),w=s("a"),ie=s("span"),ut=l("Why burndown charts?"),Ae=f(),Q=s("p"),pt=l(`To be clear, I think there is nothing inherently superior about burndown charts.
All sorts of other tools could be used to quickly assess a team’s health. If
anything, and if I hand to choose just one tool, I’d probably look at the
frequency of deployments as the most reliable indicator.`),Ie=f(),U=s("p"),ct=l(`Burndown charts are quite ubiquitous though. They are readily available on most
platforms, and they’re visual. I also think that burndown charts are a bit more
verbose than say the deployments frequency number. And finally, as a manager, I
would normally know the members of the team, their seniority, skill levels, etc.
So, when paired that with the burndown charts analysis, it gives me a pretty
decent idea where to start digging.`),Te=f(),v=s("h2"),g=s("a"),se=s("span"),mt=l("Burndown patterns"),Pe=f(),F=s("p"),dt=l(`Life is messy, and software engineers work in highly unpredictable, dynamically
evolving environments. Burndown charts, as a reflection of that process, are
never clean either. Even perfectly high performing teams occasionally produce
less than stellar charts.`),xe=f(),K=s("p"),yt=l(`Still, if you analyse a series of charts, there are consistent patterns. If you
think about it from the systems thinking perspective, then you know that systems
produce consistent behaviour because of their internal structure. Burndown
charts are a manifestation of a complex system behaviour, and there are usually
specific reasons why they look the way they do.`),qe=f(),M=s("p"),wt=l(`There are three main shapes that I personally look at when I analyse burndown
charts behaviour:`),Oe=f(),c=s("ol"),j=s("li"),vt=l("A "),oe=s("strong"),gt=l("plateau"),bt=l(" - work is finished significantly early"),kt=f(),R=s("li"),Et=l("A "),re=s("strong"),_t=l("triangle"),At=l(" - work goes more or less according to a plan"),It=f(),G=s("li"),Tt=l("A "),le=s("strong"),Pt=l("cliff"),xt=l(` - a significant carry over, or most work submitted as a bulk at
the last minute`),Se=f(),b=s("p"),qt=l("The "),he=s("strong"),Ot=l("plateau"),St=l(` doesn’t happen often on a consistent basis. It usually means
that everything is overestimated, which usually caused by a lack of seniority on
the team. This pattern also produced by new teams that are recalibrating, but it
doesn’t persist over time.`),Be=f(),k=s("p"),Bt=l("The "),fe=s("strong"),Nt=l("triangle"),jt=l(` pattern usually means the team does what it supposed to, just
leave them to do their work. Keep in mind that triangles are never perfect, they
often have small cliffs or plateaus in the last quarter of the graph, that’s
perfectly normal.`),Ne=f(),E=s("p"),Rt=l("The most telling pattern is the "),ue=s("strong"),Gt=l("cliff"),Wt=l(` and that’s where you might want to get
involved as a manager. There are multiple specific situations that produce
cliffs, and that’s what I’m going to go through in the rest of the post.`),je=f(),_=s("h2"),A=s("a"),pe=s("span"),Ct=l("Cliff type 1: chunky"),Re=f(),$=s("p"),Ht=l(`This type of cliffs often look like the bulk of the work is submitted in the
last minute. Or sometimes it manifests as a series of smaller cliffs that look
like huge steps on the chart. The work is usually mostly done, occasionally with
a delay, but the graph looks chunky.`),Ge=f(),I=s("p"),Lt=l("As the name implies the "),ce=s("strong"),Qt=l("chunky"),Ut=l(` cliff means that the team is not granular
enough in their estimations and planning. Tickets are often estimated in days
worth of effort. Hence when the items are delivered the are represented as big
drops on the chart.`),We=f(),z=s("p"),Ft=l(`When you see a chunky graph, it doesn’t necessarily mean lack of skill in
process and/or technology within the team. But, it does usually signify that the
team is playing the game conservatively. In a way it is the overestimation
coping behaviour, just in a different format: the team does a rather shallow
planning to be on the safe side.`),Ce=f(),D=s("p"),Kt=l(`There are usually a few possible reasons for this. Either the team members were
never taught effective planning techniques. Or there is a lack of trust between
product and engineering, which results in engineers not having enough insight
into the problem, or not having enough time to do the proper investigation and
planning. In the end of the planning session, the work just roughly shovelled
into large buckets and off they go.`),He=f(),T=s("h2"),P=s("a"),me=s("span"),Mt=l("Cliff type 2: the wall"),Le=f(),J=s("p"),$t=l(`This type of cliffs often looks like the chunky cliff, but it might look like a
cliff hanger too (see below). The reason why it’s a separate type is that it has
a different kind of a problem underneath. In this case the process is at fault.`),Qe=f(),x=s("p"),zt=l("The "),de=s("strong"),Dt=l("wall"),Jt=l(` in this instance refers to that mythical wall over which work is
often thrown. And it usually works like so. Work is dutifully estimated, and
then generously padded because those pesky QA people — who either sit quietly
in the corner, or not even present in the meeting — love to throw the work back
over the wall. Sometimes that is a PO playing the QA role. And sometimes, in
more old fashioned teams where development and delivery are separate, you might
see the wall between the devs and ops, with pretty much the same patten of the
system behaviour.`),Ue=f(),V=s("p"),Vt=l(`Engineers write code, throw it over the wall to QA and move on. An hour later QA
throws it back over the wall marked as faulty. And this volleyball match
begrudgingly drags for days. Everyone dutifully “just doing their work”.`),Fe=f(),X=s("p"),Xt=l(`The problems is usually the same every time, the lack of actually
cross-functional work. A team might nominally be cross-functional and agile, but
they’d work on a waterfall in a miniature basis on the inside. And those walls
manifest in the charts as chunky drops.`),Ke=f(),q=s("h2"),O=s("a"),ye=s("span"),Yt=l("Cliff type 3: the cliff hanger"),Me=f(),Y=s("p"),Zt=l(`This type of cliffs happen when there is a significant amount of carry over into
the next sprint. Often times it is accompanied by an all out crunch time by the
team at the end of each sprint.`),$e=f(),S=s("p"),en=l("I call it a "),we=s("strong"),tn=l("cliff hanger"),nn=l(` because there is usually very little predictability
into how much work will actually make it into the sprint deliverables. It’s
always a coin toss away. Two things are consistently predictable in those teams
though: burnout and accidents.`),ze=f(),Z=s("p"),an=l(`I personally consider cliff hangers a leadership failure. While the usual poor
planning and execution present, those are not the primary reason for this type
of patterns. The main reason is that the team is being consistently
overcommitted, then implicitly or explicitly blamed for the failure to deliver,
and consequently pressured into do or die situations to pay for their sins.`),De=f(),ee=s("p"),sn=l(`A team lead has one job, to make sure that their team wins; consistently; every
time. And the primary tool for making sure that happens is to be protective over
the team commitments. It is the leader’s job to make sure teams don’t commit in
over their heads, and when they fail at that, you’d see the consistent cliff
hanger patterns, sprint after sprint.`),Je=f(),B=s("h2"),N=s("a"),ve=s("span"),on=l("Rolling the titles"),Ve=f(),te=s("p"),rn=l(`Well, I hope this was mildly entertaining and insightful. Again, as with any
shortcuts, it isn’t meant as a comprehensive guide, just and example of my own
thinking process. All managers have tools like those in their arsenal, you might
want to go poke their brains as well.`),this.h()},l(e){m=o(e,"P",{});var a=r(m);ot=h(a,`Overtime, while working in management, everyone picks up shortcuts for assessing
situations quickly. They are not meant to give one a comprehensive information
about what’s going on, but they give a general idea that something doesn’t quite
smell right.`),a.forEach(t),ge=u(e),W=o(e,"P",{});var wn=r(W);rt=h(wn,`After staring at burndown charts for years, I feel that I can tell the general
dynamics in a team and their processes struggles after looking at a few recent
burndown charts. If the chart looks like a plateau, hire a tech lead; if it
looks like a cliff hire a PO; if it looks like a triangle, leave the team alone
and go do something else.`),wn.forEach(t),be=u(e),d=o(e,"FIGURE",{class:!0});var ln=r(d);C=o(ln,"IMG",{src:!0,alt:!0}),ae=o(ln,"FIGCAPTION",{});var vn=r(ae);lt=h(vn,"Burndown chart types"),vn.forEach(t),ln.forEach(t),ke=u(e),H=o(e,"P",{});var gn=r(H);ht=h(gn,`Obviously, I’m not going to fire and hire anyone, that’s not how management
works. And, I might actually have a completely wrong idea about what’s going on.
But, at the same time, I know, that if there is something wrong with the
burndown charts, sprint after sprint consistently, there are usually reasons
that need investigation.`),gn.forEach(t),Ee=u(e),L=o(e,"P",{});var bn=r(L);ft=h(bn,`Today, I’m writing about one of those mental shortcuts and what’s the thinking
behind it.`),bn.forEach(t),_e=u(e),y=o(e,"H2",{id:!0});var hn=r(y);w=o(hn,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var kn=r(w);ie=o(kn,"SPAN",{class:!0}),r(ie).forEach(t),kn.forEach(t),ut=h(hn,"Why burndown charts?"),hn.forEach(t),Ae=u(e),Q=o(e,"P",{});var En=r(Q);pt=h(En,`To be clear, I think there is nothing inherently superior about burndown charts.
All sorts of other tools could be used to quickly assess a team’s health. If
anything, and if I hand to choose just one tool, I’d probably look at the
frequency of deployments as the most reliable indicator.`),En.forEach(t),Ie=u(e),U=o(e,"P",{});var _n=r(U);ct=h(_n,`Burndown charts are quite ubiquitous though. They are readily available on most
platforms, and they’re visual. I also think that burndown charts are a bit more
verbose than say the deployments frequency number. And finally, as a manager, I
would normally know the members of the team, their seniority, skill levels, etc.
So, when paired that with the burndown charts analysis, it gives me a pretty
decent idea where to start digging.`),_n.forEach(t),Te=u(e),v=o(e,"H2",{id:!0});var fn=r(v);g=o(fn,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var An=r(g);se=o(An,"SPAN",{class:!0}),r(se).forEach(t),An.forEach(t),mt=h(fn,"Burndown patterns"),fn.forEach(t),Pe=u(e),F=o(e,"P",{});var In=r(F);dt=h(In,`Life is messy, and software engineers work in highly unpredictable, dynamically
evolving environments. Burndown charts, as a reflection of that process, are
never clean either. Even perfectly high performing teams occasionally produce
less than stellar charts.`),In.forEach(t),xe=u(e),K=o(e,"P",{});var Tn=r(K);yt=h(Tn,`Still, if you analyse a series of charts, there are consistent patterns. If you
think about it from the systems thinking perspective, then you know that systems
produce consistent behaviour because of their internal structure. Burndown
charts are a manifestation of a complex system behaviour, and there are usually
specific reasons why they look the way they do.`),Tn.forEach(t),qe=u(e),M=o(e,"P",{});var Pn=r(M);wt=h(Pn,`There are three main shapes that I personally look at when I analyse burndown
charts behaviour:`),Pn.forEach(t),Oe=u(e),c=o(e,"OL",{});var ne=r(c);j=o(ne,"LI",{});var Xe=r(j);vt=h(Xe,"A "),oe=o(Xe,"STRONG",{});var xn=r(oe);gt=h(xn,"plateau"),xn.forEach(t),bt=h(Xe," - work is finished significantly early"),Xe.forEach(t),kt=u(ne),R=o(ne,"LI",{});var Ye=r(R);Et=h(Ye,"A "),re=o(Ye,"STRONG",{});var qn=r(re);_t=h(qn,"triangle"),qn.forEach(t),At=h(Ye," - work goes more or less according to a plan"),Ye.forEach(t),It=u(ne),G=o(ne,"LI",{});var Ze=r(G);Tt=h(Ze,"A "),le=o(Ze,"STRONG",{});var On=r(le);Pt=h(On,"cliff"),On.forEach(t),xt=h(Ze,` - a significant carry over, or most work submitted as a bulk at
the last minute`),Ze.forEach(t),ne.forEach(t),Se=u(e),b=o(e,"P",{});var et=r(b);qt=h(et,"The "),he=o(et,"STRONG",{});var Sn=r(he);Ot=h(Sn,"plateau"),Sn.forEach(t),St=h(et,` doesn’t happen often on a consistent basis. It usually means
that everything is overestimated, which usually caused by a lack of seniority on
the team. This pattern also produced by new teams that are recalibrating, but it
doesn’t persist over time.`),et.forEach(t),Be=u(e),k=o(e,"P",{});var tt=r(k);Bt=h(tt,"The "),fe=o(tt,"STRONG",{});var Bn=r(fe);Nt=h(Bn,"triangle"),Bn.forEach(t),jt=h(tt,` pattern usually means the team does what it supposed to, just
leave them to do their work. Keep in mind that triangles are never perfect, they
often have small cliffs or plateaus in the last quarter of the graph, that’s
perfectly normal.`),tt.forEach(t),Ne=u(e),E=o(e,"P",{});var nt=r(E);Rt=h(nt,"The most telling pattern is the "),ue=o(nt,"STRONG",{});var Nn=r(ue);Gt=h(Nn,"cliff"),Nn.forEach(t),Wt=h(nt,` and that’s where you might want to get
involved as a manager. There are multiple specific situations that produce
cliffs, and that’s what I’m going to go through in the rest of the post.`),nt.forEach(t),je=u(e),_=o(e,"H2",{id:!0});var un=r(_);A=o(un,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var jn=r(A);pe=o(jn,"SPAN",{class:!0}),r(pe).forEach(t),jn.forEach(t),Ct=h(un,"Cliff type 1: chunky"),un.forEach(t),Re=u(e),$=o(e,"P",{});var Rn=r($);Ht=h(Rn,`This type of cliffs often look like the bulk of the work is submitted in the
last minute. Or sometimes it manifests as a series of smaller cliffs that look
like huge steps on the chart. The work is usually mostly done, occasionally with
a delay, but the graph looks chunky.`),Rn.forEach(t),Ge=u(e),I=o(e,"P",{});var at=r(I);Lt=h(at,"As the name implies the "),ce=o(at,"STRONG",{});var Gn=r(ce);Qt=h(Gn,"chunky"),Gn.forEach(t),Ut=h(at,` cliff means that the team is not granular
enough in their estimations and planning. Tickets are often estimated in days
worth of effort. Hence when the items are delivered the are represented as big
drops on the chart.`),at.forEach(t),We=u(e),z=o(e,"P",{});var Wn=r(z);Ft=h(Wn,`When you see a chunky graph, it doesn’t necessarily mean lack of skill in
process and/or technology within the team. But, it does usually signify that the
team is playing the game conservatively. In a way it is the overestimation
coping behaviour, just in a different format: the team does a rather shallow
planning to be on the safe side.`),Wn.forEach(t),Ce=u(e),D=o(e,"P",{});var Cn=r(D);Kt=h(Cn,`There are usually a few possible reasons for this. Either the team members were
never taught effective planning techniques. Or there is a lack of trust between
product and engineering, which results in engineers not having enough insight
into the problem, or not having enough time to do the proper investigation and
planning. In the end of the planning session, the work just roughly shovelled
into large buckets and off they go.`),Cn.forEach(t),He=u(e),T=o(e,"H2",{id:!0});var pn=r(T);P=o(pn,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Hn=r(P);me=o(Hn,"SPAN",{class:!0}),r(me).forEach(t),Hn.forEach(t),Mt=h(pn,"Cliff type 2: the wall"),pn.forEach(t),Le=u(e),J=o(e,"P",{});var Ln=r(J);$t=h(Ln,`This type of cliffs often looks like the chunky cliff, but it might look like a
cliff hanger too (see below). The reason why it’s a separate type is that it has
a different kind of a problem underneath. In this case the process is at fault.`),Ln.forEach(t),Qe=u(e),x=o(e,"P",{});var it=r(x);zt=h(it,"The "),de=o(it,"STRONG",{});var Qn=r(de);Dt=h(Qn,"wall"),Qn.forEach(t),Jt=h(it,` in this instance refers to that mythical wall over which work is
often thrown. And it usually works like so. Work is dutifully estimated, and
then generously padded because those pesky QA people — who either sit quietly
in the corner, or not even present in the meeting — love to throw the work back
over the wall. Sometimes that is a PO playing the QA role. And sometimes, in
more old fashioned teams where development and delivery are separate, you might
see the wall between the devs and ops, with pretty much the same patten of the
system behaviour.`),it.forEach(t),Ue=u(e),V=o(e,"P",{});var Un=r(V);Vt=h(Un,`Engineers write code, throw it over the wall to QA and move on. An hour later QA
throws it back over the wall marked as faulty. And this volleyball match
begrudgingly drags for days. Everyone dutifully “just doing their work”.`),Un.forEach(t),Fe=u(e),X=o(e,"P",{});var Fn=r(X);Xt=h(Fn,`The problems is usually the same every time, the lack of actually
cross-functional work. A team might nominally be cross-functional and agile, but
they’d work on a waterfall in a miniature basis on the inside. And those walls
manifest in the charts as chunky drops.`),Fn.forEach(t),Ke=u(e),q=o(e,"H2",{id:!0});var cn=r(q);O=o(cn,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Kn=r(O);ye=o(Kn,"SPAN",{class:!0}),r(ye).forEach(t),Kn.forEach(t),Yt=h(cn,"Cliff type 3: the cliff hanger"),cn.forEach(t),Me=u(e),Y=o(e,"P",{});var Mn=r(Y);Zt=h(Mn,`This type of cliffs happen when there is a significant amount of carry over into
the next sprint. Often times it is accompanied by an all out crunch time by the
team at the end of each sprint.`),Mn.forEach(t),$e=u(e),S=o(e,"P",{});var st=r(S);en=h(st,"I call it a "),we=o(st,"STRONG",{});var $n=r(we);tn=h($n,"cliff hanger"),$n.forEach(t),nn=h(st,` because there is usually very little predictability
into how much work will actually make it into the sprint deliverables. It’s
always a coin toss away. Two things are consistently predictable in those teams
though: burnout and accidents.`),st.forEach(t),ze=u(e),Z=o(e,"P",{});var zn=r(Z);an=h(zn,`I personally consider cliff hangers a leadership failure. While the usual poor
planning and execution present, those are not the primary reason for this type
of patterns. The main reason is that the team is being consistently
overcommitted, then implicitly or explicitly blamed for the failure to deliver,
and consequently pressured into do or die situations to pay for their sins.`),zn.forEach(t),De=u(e),ee=o(e,"P",{});var Dn=r(ee);sn=h(Dn,`A team lead has one job, to make sure that their team wins; consistently; every
time. And the primary tool for making sure that happens is to be protective over
the team commitments. It is the leader’s job to make sure teams don’t commit in
over their heads, and when they fail at that, you’d see the consistent cliff
hanger patterns, sprint after sprint.`),Dn.forEach(t),Je=u(e),B=o(e,"H2",{id:!0});var mn=r(B);N=o(mn,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Jn=r(N);ve=o(Jn,"SPAN",{class:!0}),r(ve).forEach(t),Jn.forEach(t),on=h(mn,"Rolling the titles"),mn.forEach(t),Ve=u(e),te=o(e,"P",{});var Vn=r(te);rn=h(Vn,`Well, I hope this was mildly entertaining and insightful. Again, as with any
shortcuts, it isn’t meant as a comprehensive guide, just and example of my own
thinking process. All managers have tools like those in their arsenal, you might
want to go poke their brains as well.`),Vn.forEach(t),this.h()},h(){ta(C.src,yn=ga)||p(C,"src",yn),p(C,"alt","Burndown chart types"),p(d,"class","rehype-figure"),p(ie,"class","icon icon-link"),p(w,"aria-hidden","true"),p(w,"tabindex","-1"),p(w,"href","#why-burndown-charts"),p(y,"id","why-burndown-charts"),p(se,"class","icon icon-link"),p(g,"aria-hidden","true"),p(g,"tabindex","-1"),p(g,"href","#burndown-patterns"),p(v,"id","burndown-patterns"),p(pe,"class","icon icon-link"),p(A,"aria-hidden","true"),p(A,"tabindex","-1"),p(A,"href","#cliff-type-1-chunky"),p(_,"id","cliff-type-1-chunky"),p(me,"class","icon icon-link"),p(P,"aria-hidden","true"),p(P,"tabindex","-1"),p(P,"href","#cliff-type-2-the-wall"),p(T,"id","cliff-type-2-the-wall"),p(ye,"class","icon icon-link"),p(O,"aria-hidden","true"),p(O,"tabindex","-1"),p(O,"href","#cliff-type-3-the-cliff-hanger"),p(q,"id","cliff-type-3-the-cliff-hanger"),p(ve,"class","icon icon-link"),p(N,"aria-hidden","true"),p(N,"tabindex","-1"),p(N,"href","#rolling-the-titles"),p(B,"id","rolling-the-titles")},m(e,a){i(e,m,a),n(m,ot),i(e,ge,a),i(e,W,a),n(W,rt),i(e,be,a),i(e,d,a),n(d,C),n(d,ae),n(ae,lt),i(e,ke,a),i(e,H,a),n(H,ht),i(e,Ee,a),i(e,L,a),n(L,ft),i(e,_e,a),i(e,y,a),n(y,w),n(w,ie),n(y,ut),i(e,Ae,a),i(e,Q,a),n(Q,pt),i(e,Ie,a),i(e,U,a),n(U,ct),i(e,Te,a),i(e,v,a),n(v,g),n(g,se),n(v,mt),i(e,Pe,a),i(e,F,a),n(F,dt),i(e,xe,a),i(e,K,a),n(K,yt),i(e,qe,a),i(e,M,a),n(M,wt),i(e,Oe,a),i(e,c,a),n(c,j),n(j,vt),n(j,oe),n(oe,gt),n(j,bt),n(c,kt),n(c,R),n(R,Et),n(R,re),n(re,_t),n(R,At),n(c,It),n(c,G),n(G,Tt),n(G,le),n(le,Pt),n(G,xt),i(e,Se,a),i(e,b,a),n(b,qt),n(b,he),n(he,Ot),n(b,St),i(e,Be,a),i(e,k,a),n(k,Bt),n(k,fe),n(fe,Nt),n(k,jt),i(e,Ne,a),i(e,E,a),n(E,Rt),n(E,ue),n(ue,Gt),n(E,Wt),i(e,je,a),i(e,_,a),n(_,A),n(A,pe),n(_,Ct),i(e,Re,a),i(e,$,a),n($,Ht),i(e,Ge,a),i(e,I,a),n(I,Lt),n(I,ce),n(ce,Qt),n(I,Ut),i(e,We,a),i(e,z,a),n(z,Ft),i(e,Ce,a),i(e,D,a),n(D,Kt),i(e,He,a),i(e,T,a),n(T,P),n(P,me),n(T,Mt),i(e,Le,a),i(e,J,a),n(J,$t),i(e,Qe,a),i(e,x,a),n(x,zt),n(x,de),n(de,Dt),n(x,Jt),i(e,Ue,a),i(e,V,a),n(V,Vt),i(e,Fe,a),i(e,X,a),n(X,Xt),i(e,Ke,a),i(e,q,a),n(q,O),n(O,ye),n(q,Yt),i(e,Me,a),i(e,Y,a),n(Y,Zt),i(e,$e,a),i(e,S,a),n(S,en),n(S,we),n(we,tn),n(S,nn),i(e,ze,a),i(e,Z,a),n(Z,an),i(e,De,a),i(e,ee,a),n(ee,sn),i(e,Je,a),i(e,B,a),n(B,N),n(N,ve),n(B,on),i(e,Ve,a),i(e,te,a),n(te,rn)},p:dn,i:dn,o:dn,d(e){e&&t(m),e&&t(ge),e&&t(W),e&&t(be),e&&t(d),e&&t(ke),e&&t(H),e&&t(Ee),e&&t(L),e&&t(_e),e&&t(y),e&&t(Ae),e&&t(Q),e&&t(Ie),e&&t(U),e&&t(Te),e&&t(v),e&&t(Pe),e&&t(F),e&&t(xe),e&&t(K),e&&t(qe),e&&t(M),e&&t(Oe),e&&t(c),e&&t(Se),e&&t(b),e&&t(Be),e&&t(k),e&&t(Ne),e&&t(E),e&&t(je),e&&t(_),e&&t(Re),e&&t($),e&&t(Ge),e&&t(I),e&&t(We),e&&t(z),e&&t(Ce),e&&t(D),e&&t(He),e&&t(T),e&&t(Le),e&&t(J),e&&t(Qe),e&&t(x),e&&t(Ue),e&&t(V),e&&t(Fe),e&&t(X),e&&t(Ke),e&&t(q),e&&t(Me),e&&t(Y),e&&t($e),e&&t(S),e&&t(ze),e&&t(Z),e&&t(De),e&&t(ee),e&&t(Je),e&&t(B),e&&t(Ve),e&&t(te)}}}const Ea={slug:"ekyxo",date:"20 Feb 2023",title:"Why your burndown chart looks like a cliff",description:"We are going through some examples of a burndown charts analysis, and look at ways to debug a team's performance",thumbnail:va,tags:["management","agile"],medium:{tags:["Leadership","Engineering management","Scrum","Agile"]}};class _a extends Yn{constructor(m){super(),Zn(this,m,null,ba,ea,{})}}export{_a as default,Ea as metadata};
