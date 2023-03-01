import{S as Sl,i as xl,s as Gl,k as s,q as o,a as m,l as n,m as r,r as a,h as i,c as f,H as me,n as u,b as h,F as t,C as Nn}from"./index-920be987.js";const Nl="png",Rl=1124,Dl=516,Cl="srgb",Bl=3,Fl="uchar",Wl=132,Ul=!1,Ll="inch",jl=!1,Ml=!1,Hl=1,Yl=2.1782945736434107,ql=!0,Jl=!1,Ql=""+new URL("../assets/estimations-probability-de9e37db.png",import.meta.url).href,$l={format:Nl,width:Rl,height:Dl,space:Cl,channels:Bl,depth:Fl,density:Wl,isProgressive:Ul,resolutionUnit:Ll,hasProfile:jl,hasAlpha:Ml,orientation:Hl,aspect:Yl,withoutEnlargement:ql,withoutReduction:Jl,src:Ql},zl=""+new URL("../assets/agile-89203fbf.webp",import.meta.url).href,Kl=""+new URL("../assets/normal-distribution-a2f6577f.png",import.meta.url).href,Vl=""+new URL("../assets/asymmetric-distribution-004e8694.webp",import.meta.url).href,Xl=""+new URL("../assets/bimodal-distribution-029055e7.png",import.meta.url).href,Zl=""+new URL("../assets/estimations-probability-0f85d828.webp",import.meta.url).href,eh=""+new URL("../assets/accuracy-precision-fb1d55cd.png",import.meta.url).href,th=""+new URL("../assets/accuracy-precision-2-220000ab.png",import.meta.url).href,ih=""+new URL("../assets/we-ask-for-estimations-856b0e3a.webp",import.meta.url).href;function oh(Ol){let G,wo,di,N,fe,Rn,$e,Eo,pi,ce,ko,yi,R,D,ze,_o,bi,de,Ao,vi,pe,Io,gi,A,Ke,d,Ve,To,Po,Xe,Oo,So,Ze,xo,Go,et,No,Ro,tt,Do,Co,it,Bo,Fo,Wo,ot,p,at,Uo,Lo,st,jo,Mo,nt,Ho,Yo,rt,qo,Jo,lt,Qo,$o,ht,zo,Ko,Vo,ut,c,mt,Xo,Zo,ft,ea,ta,ct,ia,oa,dt,aa,sa,pt,na,ra,yt,la,ha,bt,ua,ma,vt,fa,wi,C,B,gt,ca,Ei,ye,da,ki,F,be,Dn,wt,pa,_i,k,ya,Et,ba,va,kt,ga,wa,_t,Ea,ka,Ai,ve,_a,Ii,W,ge,Cn,At,Aa,Ti,v,Ia,It,Ta,Pa,Tt,Oa,Sa,Pt,xa,Ga,Ot,Na,Ra,Pi,we,Da,Oi,U,Ee,Bn,St,Ca,Si,ke,Ba,xi,L,j,xt,Fa,Gi,_e,Wa,Ni,M,Ae,Fn,Gt,Ua,Ri,Ie,La,Di,Te,ja,Ci,I,H,Nt,Ma,Rt,Ha,Ya,Bi,Y,qa,Dt,Ja,Qa,Fi,q,$a,Ct,za,Ka,Wi,y,Va,Bt,Xa,Za,Ft,es,ts,Wt,is,os,Ut,as,ss,Lt,ns,rs,Ui,Pe,ls,Li,J,Q,jt,hs,ji,Oe,us,Mi,$,z,Mt,ms,fs,Ht,cs,ds,ps,K,Yt,ys,bs,qt,vs,gs,Hi,V,Se,Wn,Jt,ws,Yi,xe,Es,qi,X,Ge,Un,Qt,ks,Ji,g,_s,$t,As,Is,zt,Ts,Ps,Kt,Os,Ss,Vt,xs,Gs,Qi,Ne,Ns,$i,T,Rs,Xt,Ds,Cs,Zt,Bs,Fs,zi,Z,ee,ei,Ws,Ki,P,Us,ti,Ls,js,ii,Ms,Hs,Vi,Re,Ys,Xi,te,De,Ln,oi,qs,Zi,ie,oe,ai,Js,eo,Ce,Qs,to,ae,$s,si,zs,Ks,io,Be,Vs,oo,Fe,Xs,ao,se,ne,ni,Zs,so,We,en,no,re,tn,ri,on,an,ro,O,sn,li,nn,rn,hi,ln,hn,lo,Ue,un,ho,Le,mn,uo,le,he,ui,fn,mo,je,cn,fo,Me,dn,co,He,pn;return{c(){G=s("p"),wo=o(`I’ve been through a fair bit of teams; and I have built and managed my own share
of them as well. I’ve seen teams that estimate in hours, I’ve seen teams that
estimate in points, in complexity, in t-shirts, and in pokemons. Okay, I haven’t
seen teams estimating in pokemons. But, I dare to say that they’d have exactly
the same outcomes in their delivery as everyone else. Why? Well, because…`),di=m(),N=s("figure"),fe=s("img"),$e=s("figcaption"),Eo=o("Dr. Evil agile"),pi=m(),ce=s("p"),ko=o(`A lot have been said so far about futility of estimations, and yet it’s 2023 out
there, and teams still dutifully practice the estimations drama. And so, I’m
here to “help”.`),yi=m(),R=s("h2"),D=s("a"),ze=s("span"),_o=o("Quick math"),bi=m(),de=s("p"),Ao=o(`Before you can fully understand my point, I feel it’s necessary to arm you with
some knowledge. Some of you are well versed in math and statistics, and I
apologise for dragging you through this. But, some are not, and I hope you’ll
find it useful.`),vi=m(),pe=s("p"),Io=o("Lets start with basic stats terminology:"),gi=m(),A=s("ul"),Ke=s("li"),d=s("p"),Ve=s("code"),To=o("average"),Po=o(", or "),Xe=s("code"),Oo=o("mean"),So=o(` for those in the US - means what you think it means. A
sum of the elements divided by the number of elements. The average of `),Ze=s("code"),xo=o("1,2,3"),Go=o(`
is `),et=s("code"),No=o("2"),Ro=o(", and the average of "),tt=s("code"),Do=o("3,2,1"),Co=o(" is "),it=s("code"),Bo=o("2"),Fo=o(" as well."),Wo=m(),ot=s("li"),p=s("p"),at=s("code"),Uo=o("median"),Lo=o(` - refers to the value in the middle of a list. The median value of
`),st=s("code"),jo=o("1,2,3"),Mo=o(" is "),nt=s("code"),Ho=o("2"),Yo=o(". But the median of "),rt=s("code"),qo=o("1,1,4"),Jo=o(" is "),lt=s("code"),Qo=o("1"),$o=o(`, which is different from the
average, which is still `),ht=s("code"),zo=o("2"),Ko=o(" in this case."),Vo=m(),ut=s("li"),c=s("p"),mt=s("code"),Xo=o("mode"),Zo=o(" - refers to the most commonly appearing value. The mode of "),ft=s("code"),ea=o("1,1,2,4"),ta=o(` is
`),ct=s("code"),ia=o("1"),oa=o(", and the mode of "),dt=s("code"),aa=o("1,2,3,3"),sa=o(" is "),pt=s("code"),na=o("3"),ra=o(`. Obviously, there can be more than one
mode: the list `),yt=s("code"),la=o("1,1,2,3,3,4"),ha=o(" has two modes "),bt=s("code"),ua=o("1"),ma=o(" and "),vt=s("code"),fa=o("3"),wi=m(),C=s("h2"),B=s("a"),gt=s("span"),ca=o("Quick stats"),Ei=m(),ye=s("p"),da=o(`When we’re talking about statistical analysis, we’re normally talking about
probabilities; more specifically we’re talking about probability distributions.
At which point people think about bell curves and what’s known as the “normal”
distribution.`),ki=m(),F=s("figure"),be=s("img"),wt=s("figcaption"),pa=o("Normal distributions"),_i=m(),k=s("p"),ya=o("In a normal distribution, the "),Et=s("strong"),ba=o("mean"),va=o(", "),kt=s("strong"),ga=o("median"),wa=o(", and "),_t=s("strong"),Ea=o("mode"),ka=o(` mean exactly
the same thing: the peak of the bell curve. And the more difficult a problem is
the more shallow the graph will be.`),Ai=m(),ve=s("p"),_a=o(`A normal distribution is not the only type of distributions. Some of the most
important cases — and estimations fall into this category — are not bell
shaped, they are skewed and known as asymmetric distributions.`),Ii=m(),W=s("figure"),ge=s("img"),At=s("figcaption"),Aa=o("Asymmetric distributions"),Ti=m(),v=s("p"),Ia=o("The "),It=s("strong"),Ta=o("mean"),Pa=o(", "),Tt=s("strong"),Oa=o("median"),Sa=o(", and the "),Pt=s("strong"),xa=o("mode"),Ga=o(` will be three different things in
this case. The reason for it is that the `),Ot=s("em"),Na=o("area"),Ra=o(` under the curve represents all
the possible cases, and there are more possibilities on one side of the peak
than the other.`),Pi=m(),we=s("p"),Da=o(`And, while we’re on the subject of weird distributions, there is yet another
probability curve to keep in mind. Sometimes, there are more than one common
outcome, and that will result in the curve having multiple peaks. Those are
called multi-modal distributions.`),Oi=m(),U=s("figure"),Ee=s("img"),St=s("figcaption"),Ca=o("A bi-modal distribution"),Si=m(),ke=s("p"),Ba=o(`Those often happen in complex situations with lots of dependencies and
non-homogeneous data sources. For example, if you take the distribution of
people heights in a group that has a 1:1 ratio of males and females, you’d see
to peaks, one for the average female height and one for an average male height.`),xi=m(),L=s("h2"),j=s("a"),xt=s("span"),Fa=o("Estimations math"),Gi=m(),_e=s("p"),Wa=o(`When it comes to estimations, it doesn’t really matter what system a team uses,
they all follow the same mathematical principles. They all go from zero to
infinity, and the probability of them being accurate can be represented by an
asymmetric, often multi-modal, probabilities distribution curve`),Ni=m(),M=s("figure"),Ae=s("img"),Gt=s("figcaption"),Ua=o("Estimations probability"),Ri=m(),Ie=s("p"),La=o(`The more complex a task is, and the more dependencies it has, the shallower the
graph will be, with more peaks showing up. At some point it gets so muddy, that
a drunk monkey throwing a banana at the chart would have roughly as much luck
with the estimation as any member of the team.`),Di=m(),Te=s("p"),ja=o("However funny that sounds, that is not the actual problem here."),Ci=m(),I=s("h2"),H=s("a"),Nt=s("span"),Ma=o("So, what "),Rt=s("em"),Ha=o("is"),Ya=o(" the problem?"),Bi=m(),Y=s("p"),qa=o(`The problem with the picture is this. When you’ve been asked to estimate
something, what you think about is the `),Dt=s("strong"),Ja=o("mode"),Qa=o(` value, or the most commonly
appearing outcome in your experience. And the more experienced an engineer is
the more consistent they will be at pointing out the value.`),Fi=m(),q=s("p"),$a=o("But, what’s really implied here is the "),Ct=s("strong"),za=o("average"),Ka=o(` value. Because the general
mindset in estimations based planning is that you don’t have to be accurate with
each estimation, the law of averages will kick in at the end of the sprint and
sort it all out. And it will. Just not the way you think it should.`),Wi=m(),y=s("p"),Va=o(`What everyone is missing is the fact that in an asymmetric probabilities
distribution, the `),Bt=s("strong"),Xa=o("average"),Za=o(" is "),Ft=s("em"),es=o("always larger"),ts=o(" than the "),Wt=s("strong"),is=o("mode"),os=o(` or the
`),Ut=s("strong"),as=o("mean"),ss=o(` value. Meaning that your averages will always be larger than your
estimations. And the more complex the task is, the bigger the gap. The work
therefore, on average, will `),Lt=s("em"),ns=o("always"),rs=o(" take longer than estimated."),Ui=m(),Pe=s("p"),ls=o("Because the math says so."),Li=m(),J=s("h2"),Q=s("a"),jt=s("span"),hs=o("Accuracy and precision"),ji=m(),Oe=s("p"),us=o(`When it comes to any measurement, there are two elements to the problem,
accuracy and precision; or sometimes they go by the names of bias and
variability.`),Mi=m(),$=s("ul"),z=s("li"),Mt=s("code"),ms=o("precision"),fs=o(" or "),Ht=s("code"),cs=o("variability"),ds=o(` refers to how wide spread the measurement results
are`),ps=m(),K=s("li"),Yt=s("code"),ys=o("accuracy"),bs=o(" or "),qt=s("code"),vs=o("bias"),gs=o(" is how close the results are to the actual/true value"),Hi=m(),V=s("figure"),Se=s("img"),Jt=s("figcaption"),ws=o("Accuracy and precision"),Yi=m(),xe=s("p"),Es=o(`Or, in case of the estimation probabilities distribution graph, it looks like
so:`),qi=m(),X=s("figure"),Ge=s("img"),Qt=s("figcaption"),ks=o("Accuracy and precision on a graph"),Ji=m(),g=s("p"),_s=o(`You see now, you can whip your team endlessly into “getting better at
estimations”, working on optimal tasks granularity, etc. And it all will go
wrong every single time. Because you will push the team to optimise for the
`),$t=s("strong"),As=o("accuracy"),Is=o(" of the "),zt=s("strong"),Ts=o("mode"),Ps=o(` value estimations, they will always be aiming at
the wrong thing. And then, the team will be repeatedly punished by the large gap
between the `),Kt=s("strong"),Os=o("mode"),Ss=o(" and "),Vt=s("strong"),xs=o("average"),Gs=o(" values."),Qi=m(),Ne=s("p"),Ns=o(`This is called a “high precision, low accuracy” situation. It’s like trying to
measure the dimensions of a piece of gooey rubber with high quality calipers.`),$i=m(),T=s("p"),Rs=o(`And so, what do the teams do? They pad the crap out of their estimations until
the `),Xt=s("strong"),Ds=o("mode"),Cs=o(" spread overlaps with the "),Zt=s("strong"),Bs=o("average"),Fs=o(` value. Everyone does this.
Either explicitly, or implicitly by using gimmicks like fibonacci numbers, and
averaging team members estimations.`),zi=m(),Z=s("h2"),ee=s("a"),ei=s("span"),Ws=o("The ugly truth"),Ki=m(),P=s("p"),Us=o(`The truth is that nobody knows how long work will really take ahead of time.
Because nobody experienced the tail end of the distribution where the
`),ti=s("strong"),Ls=o("average"),js=o(` lives. And the more complex a task is, the more dependencies there
are, the less probability that `),ii=s("em"),Ms=o("any"),Hs=o(" estimation will be correct."),Vi=m(),Re=s("p"),Ys=o(`Work, especially the hard, critical work takes as long as it takes. Estimations
just lul you into the false sense of control over the situation. Nobody really
knows the answer, but when you produce a number, any number, it gives a plan a
flair of legitimacy. And off you go, telling your boss when it’s going to be
done.`),Xi=m(),te=s("figure"),De=s("img"),oi=s("figcaption"),qs=o("You did this to yourself"),Zi=m(),ie=s("h2"),oe=s("a"),ai=s("span"),Js=o("The final chord"),eo=m(),Ce=s("p"),Qs=o(`And that’s not the worst part yet. Okay, suppose, I’m full of it. Suppose all
that math above doesn’t really exist or totally wrong. Let’s pretend for a
second that your estimations actually are accurate. Like for reals accurate.
What do you think is going to happen?`),to=m(),ae=s("p"),$s=o("Suppose, you have estimated a task will take, say, "),si=s("strong"),zs=o("4 hours"),Ks=o(`. A PJ sandwich
falls on the jam side every other time, meaning you still have the variability
in your estimations. And, you might finish it in 2 hours, or you might finish it
in 6 with roughly the same probability (because your accuracy is great). What
happens next?`),io=m(),Be=s("p"),Vs=o(`If you finish early, your manager will think you’re probably not very skilled
because you had to overshoot your estimations by 100%. And if you finish late,
your manager will think you’re probably not very skilled because work took 50%
longer. Either the case, they’ll probably assign you to more scrum training.`),oo=m(),Fe=s("p"),Xs=o(`You see, the thing is, even in an idealised situation, you’re not supposed to
win at this game no matter what. The moment you produce a number — be that
hours, points, or pokemons — you’re screwed. Because everyone’s expectations
will be anchored to the number one way or another. And it’s a wrong number to
begin with.`),ao=m(),se=s("h2"),ne=s("a"),ni=s("span"),Zs=o("To a manager"),so=m(),We=s("p"),en=o(`Well, hello there. Since you’ve made it to management, chances are you’re smart
and will be less prone to refuting factual information. So, I’ll be blunt with
you here. A manager has one job, to make sure that resources are applied
optimally. And if your “management style” is rooted in estimations, you won’t be
doing a stellar job at it. Here is why.`),no=m(),re=s("p"),tn=o(`Due to the mathematical model I’ve described above, chances that your team’s
estimations will be accurate and precise are pretty slim. The only people who
deliver their projects consistently on time and budget is the US army; and they
do that by grossly overestimating everything that moves. For a business entity
that’s an `),ri=s("strong"),on=o("F"),an=o(` in resources allocation, which is basically your job
description.`),ro=m(),O=s("p"),sn=o(`You obviously can’t underestimate requirements, because that’s a straight up
`),li=s("strong"),nn=o("F"),rn=o(` in management. So, you’re most likely to try pushing the team to find some
form of a reasonable middle ground in their estimations. Due to the math I’ve
described above it will fail roughly 60% of the time. When your efforts will
eventually piss off enough senior engineers on the team, you will start paying
roughly $50-70k per person for replacements in cash money, all while delaying
your project even further. And yes, that’s an `),hi=s("strong"),ln=o("F"),hn=o(" in management."),lo=m(),Ue=s("p"),un=o(`So, repeat after me “estimations is a form of budgeting”. While budgeting works
great in civil engineering, it is completely counterproductive in software
development. Because software engineering is essentially a break through
development, which is creative R&D work, which is inherently unpredictable.`),ho=m(),Le=s("p"),mn=o(`There are better tools to manage software development than budgeting. And unless
it sinks in with you, the team will have little luck changing their ways against
your will.`),uo=m(),le=s("h2"),he=s("a"),ui=s("span"),fn=o("So, what now?"),mo=m(),je=s("p"),cn=o(`I imagine, you’re probably sitting there by now, thinking to yourself: “well,
thanks, Kai. who do you think you are crushing my world like this?“. And, look,
I’m sorry for dragging you through this, okay? If it will make you feel any
better, it pains me to write those things too; although, admittedly, I kind of
like it.`),fo=m(),Me=s("p"),dn=o(`But, now you have options. You can either forget all of this and go back to
doing what you used to do. Or, you can come back in a week and read my next
story. Because there is a way out of this mess.`),co=m(),He=s("p"),pn=o(`Yeah, I know, a shameless plug. But hey, I have mouths to feed, and I need more
eyeballs on my content. So, if you enjoyed the read, or find it useful, please
share in your circles. Thanks muchly, and I’ll see you next time!`),this.h()},l(e){G=n(e,"P",{});var l=r(G);wo=a(l,`I’ve been through a fair bit of teams; and I have built and managed my own share
of them as well. I’ve seen teams that estimate in hours, I’ve seen teams that
estimate in points, in complexity, in t-shirts, and in pokemons. Okay, I haven’t
seen teams estimating in pokemons. But, I dare to say that they’d have exactly
the same outcomes in their delivery as everyone else. Why? Well, because…`),l.forEach(i),di=f(e),N=n(e,"FIGURE",{class:!0});var yn=r(N);fe=n(yn,"IMG",{src:!0,alt:!0}),$e=n(yn,"FIGCAPTION",{});var jn=r($e);Eo=a(jn,"Dr. Evil agile"),jn.forEach(i),yn.forEach(i),pi=f(e),ce=n(e,"P",{});var Mn=r(ce);ko=a(Mn,`A lot have been said so far about futility of estimations, and yet it’s 2023 out
there, and teams still dutifully practice the estimations drama. And so, I’m
here to “help”.`),Mn.forEach(i),yi=f(e),R=n(e,"H2",{id:!0});var bn=r(R);D=n(bn,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Hn=r(D);ze=n(Hn,"SPAN",{class:!0}),r(ze).forEach(i),Hn.forEach(i),_o=a(bn,"Quick math"),bn.forEach(i),bi=f(e),de=n(e,"P",{});var Yn=r(de);Ao=a(Yn,`Before you can fully understand my point, I feel it’s necessary to arm you with
some knowledge. Some of you are well versed in math and statistics, and I
apologise for dragging you through this. But, some are not, and I hope you’ll
find it useful.`),Yn.forEach(i),vi=f(e),pe=n(e,"P",{});var qn=r(pe);Io=a(qn,"Lets start with basic stats terminology:"),qn.forEach(i),gi=f(e),A=n(e,"UL",{});var Ye=r(A);Ke=n(Ye,"LI",{});var Jn=r(Ke);d=n(Jn,"P",{});var w=r(d);Ve=n(w,"CODE",{});var Qn=r(Ve);To=a(Qn,"average"),Qn.forEach(i),Po=a(w,", or "),Xe=n(w,"CODE",{});var $n=r(Xe);Oo=a($n,"mean"),$n.forEach(i),So=a(w,` for those in the US - means what you think it means. A
sum of the elements divided by the number of elements. The average of `),Ze=n(w,"CODE",{});var zn=r(Ze);xo=a(zn,"1,2,3"),zn.forEach(i),Go=a(w,`
is `),et=n(w,"CODE",{});var Kn=r(et);No=a(Kn,"2"),Kn.forEach(i),Ro=a(w,", and the average of "),tt=n(w,"CODE",{});var Vn=r(tt);Do=a(Vn,"3,2,1"),Vn.forEach(i),Co=a(w," is "),it=n(w,"CODE",{});var Xn=r(it);Bo=a(Xn,"2"),Xn.forEach(i),Fo=a(w," as well."),w.forEach(i),Jn.forEach(i),Wo=f(Ye),ot=n(Ye,"LI",{});var Zn=r(ot);p=n(Zn,"P",{});var E=r(p);at=n(E,"CODE",{});var er=r(at);Uo=a(er,"median"),er.forEach(i),Lo=a(E,` - refers to the value in the middle of a list. The median value of
`),st=n(E,"CODE",{});var tr=r(st);jo=a(tr,"1,2,3"),tr.forEach(i),Mo=a(E," is "),nt=n(E,"CODE",{});var ir=r(nt);Ho=a(ir,"2"),ir.forEach(i),Yo=a(E,". But the median of "),rt=n(E,"CODE",{});var or=r(rt);qo=a(or,"1,1,4"),or.forEach(i),Jo=a(E," is "),lt=n(E,"CODE",{});var ar=r(lt);Qo=a(ar,"1"),ar.forEach(i),$o=a(E,`, which is different from the
average, which is still `),ht=n(E,"CODE",{});var sr=r(ht);zo=a(sr,"2"),sr.forEach(i),Ko=a(E," in this case."),E.forEach(i),Zn.forEach(i),Vo=f(Ye),ut=n(Ye,"LI",{});var nr=r(ut);c=n(nr,"P",{});var b=r(c);mt=n(b,"CODE",{});var rr=r(mt);Xo=a(rr,"mode"),rr.forEach(i),Zo=a(b," - refers to the most commonly appearing value. The mode of "),ft=n(b,"CODE",{});var lr=r(ft);ea=a(lr,"1,1,2,4"),lr.forEach(i),ta=a(b,` is
`),ct=n(b,"CODE",{});var hr=r(ct);ia=a(hr,"1"),hr.forEach(i),oa=a(b,", and the mode of "),dt=n(b,"CODE",{});var ur=r(dt);aa=a(ur,"1,2,3,3"),ur.forEach(i),sa=a(b," is "),pt=n(b,"CODE",{});var mr=r(pt);na=a(mr,"3"),mr.forEach(i),ra=a(b,`. Obviously, there can be more than one
mode: the list `),yt=n(b,"CODE",{});var fr=r(yt);la=a(fr,"1,1,2,3,3,4"),fr.forEach(i),ha=a(b," has two modes "),bt=n(b,"CODE",{});var cr=r(bt);ua=a(cr,"1"),cr.forEach(i),ma=a(b," and "),vt=n(b,"CODE",{});var dr=r(vt);fa=a(dr,"3"),dr.forEach(i),b.forEach(i),nr.forEach(i),Ye.forEach(i),wi=f(e),C=n(e,"H2",{id:!0});var vn=r(C);B=n(vn,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var pr=r(B);gt=n(pr,"SPAN",{class:!0}),r(gt).forEach(i),pr.forEach(i),ca=a(vn,"Quick stats"),vn.forEach(i),Ei=f(e),ye=n(e,"P",{});var yr=r(ye);da=a(yr,`When we’re talking about statistical analysis, we’re normally talking about
probabilities; more specifically we’re talking about probability distributions.
At which point people think about bell curves and what’s known as the “normal”
distribution.`),yr.forEach(i),ki=f(e),F=n(e,"FIGURE",{class:!0});var gn=r(F);be=n(gn,"IMG",{src:!0,alt:!0}),wt=n(gn,"FIGCAPTION",{});var br=r(wt);pa=a(br,"Normal distributions"),br.forEach(i),gn.forEach(i),_i=f(e),k=n(e,"P",{});var ue=r(k);ya=a(ue,"In a normal distribution, the "),Et=n(ue,"STRONG",{});var vr=r(Et);ba=a(vr,"mean"),vr.forEach(i),va=a(ue,", "),kt=n(ue,"STRONG",{});var gr=r(kt);ga=a(gr,"median"),gr.forEach(i),wa=a(ue,", and "),_t=n(ue,"STRONG",{});var wr=r(_t);Ea=a(wr,"mode"),wr.forEach(i),ka=a(ue,` mean exactly
the same thing: the peak of the bell curve. And the more difficult a problem is
the more shallow the graph will be.`),ue.forEach(i),Ai=f(e),ve=n(e,"P",{});var Er=r(ve);_a=a(Er,`A normal distribution is not the only type of distributions. Some of the most
important cases — and estimations fall into this category — are not bell
shaped, they are skewed and known as asymmetric distributions.`),Er.forEach(i),Ii=f(e),W=n(e,"FIGURE",{class:!0});var wn=r(W);ge=n(wn,"IMG",{src:!0,alt:!0}),At=n(wn,"FIGCAPTION",{});var kr=r(At);Aa=a(kr,"Asymmetric distributions"),kr.forEach(i),wn.forEach(i),Ti=f(e),v=n(e,"P",{});var S=r(v);Ia=a(S,"The "),It=n(S,"STRONG",{});var _r=r(It);Ta=a(_r,"mean"),_r.forEach(i),Pa=a(S,", "),Tt=n(S,"STRONG",{});var Ar=r(Tt);Oa=a(Ar,"median"),Ar.forEach(i),Sa=a(S,", and the "),Pt=n(S,"STRONG",{});var Ir=r(Pt);xa=a(Ir,"mode"),Ir.forEach(i),Ga=a(S,` will be three different things in
this case. The reason for it is that the `),Ot=n(S,"EM",{});var Tr=r(Ot);Na=a(Tr,"area"),Tr.forEach(i),Ra=a(S,` under the curve represents all
the possible cases, and there are more possibilities on one side of the peak
than the other.`),S.forEach(i),Pi=f(e),we=n(e,"P",{});var Pr=r(we);Da=a(Pr,`And, while we’re on the subject of weird distributions, there is yet another
probability curve to keep in mind. Sometimes, there are more than one common
outcome, and that will result in the curve having multiple peaks. Those are
called multi-modal distributions.`),Pr.forEach(i),Oi=f(e),U=n(e,"FIGURE",{class:!0});var En=r(U);Ee=n(En,"IMG",{src:!0,alt:!0}),St=n(En,"FIGCAPTION",{});var Or=r(St);Ca=a(Or,"A bi-modal distribution"),Or.forEach(i),En.forEach(i),Si=f(e),ke=n(e,"P",{});var Sr=r(ke);Ba=a(Sr,`Those often happen in complex situations with lots of dependencies and
non-homogeneous data sources. For example, if you take the distribution of
people heights in a group that has a 1:1 ratio of males and females, you’d see
to peaks, one for the average female height and one for an average male height.`),Sr.forEach(i),xi=f(e),L=n(e,"H2",{id:!0});var kn=r(L);j=n(kn,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var xr=r(j);xt=n(xr,"SPAN",{class:!0}),r(xt).forEach(i),xr.forEach(i),Fa=a(kn,"Estimations math"),kn.forEach(i),Gi=f(e),_e=n(e,"P",{});var Gr=r(_e);Wa=a(Gr,`When it comes to estimations, it doesn’t really matter what system a team uses,
they all follow the same mathematical principles. They all go from zero to
infinity, and the probability of them being accurate can be represented by an
asymmetric, often multi-modal, probabilities distribution curve`),Gr.forEach(i),Ni=f(e),M=n(e,"FIGURE",{class:!0});var _n=r(M);Ae=n(_n,"IMG",{src:!0,alt:!0}),Gt=n(_n,"FIGCAPTION",{});var Nr=r(Gt);Ua=a(Nr,"Estimations probability"),Nr.forEach(i),_n.forEach(i),Ri=f(e),Ie=n(e,"P",{});var Rr=r(Ie);La=a(Rr,`The more complex a task is, and the more dependencies it has, the shallower the
graph will be, with more peaks showing up. At some point it gets so muddy, that
a drunk monkey throwing a banana at the chart would have roughly as much luck
with the estimation as any member of the team.`),Rr.forEach(i),Di=f(e),Te=n(e,"P",{});var Dr=r(Te);ja=a(Dr,"However funny that sounds, that is not the actual problem here."),Dr.forEach(i),Ci=f(e),I=n(e,"H2",{id:!0});var mi=r(I);H=n(mi,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Cr=r(H);Nt=n(Cr,"SPAN",{class:!0}),r(Nt).forEach(i),Cr.forEach(i),Ma=a(mi,"So, what "),Rt=n(mi,"EM",{});var Br=r(Rt);Ha=a(Br,"is"),Br.forEach(i),Ya=a(mi," the problem?"),mi.forEach(i),Bi=f(e),Y=n(e,"P",{});var po=r(Y);qa=a(po,`The problem with the picture is this. When you’ve been asked to estimate
something, what you think about is the `),Dt=n(po,"STRONG",{});var Fr=r(Dt);Ja=a(Fr,"mode"),Fr.forEach(i),Qa=a(po,` value, or the most commonly
appearing outcome in your experience. And the more experienced an engineer is
the more consistent they will be at pointing out the value.`),po.forEach(i),Fi=f(e),q=n(e,"P",{});var yo=r(q);$a=a(yo,"But, what’s really implied here is the "),Ct=n(yo,"STRONG",{});var Wr=r(Ct);za=a(Wr,"average"),Wr.forEach(i),Ka=a(yo,` value. Because the general
mindset in estimations based planning is that you don’t have to be accurate with
each estimation, the law of averages will kick in at the end of the sprint and
sort it all out. And it will. Just not the way you think it should.`),yo.forEach(i),Wi=f(e),y=n(e,"P",{});var _=r(y);Va=a(_,`What everyone is missing is the fact that in an asymmetric probabilities
distribution, the `),Bt=n(_,"STRONG",{});var Ur=r(Bt);Xa=a(Ur,"average"),Ur.forEach(i),Za=a(_," is "),Ft=n(_,"EM",{});var Lr=r(Ft);es=a(Lr,"always larger"),Lr.forEach(i),ts=a(_," than the "),Wt=n(_,"STRONG",{});var jr=r(Wt);is=a(jr,"mode"),jr.forEach(i),os=a(_,` or the
`),Ut=n(_,"STRONG",{});var Mr=r(Ut);as=a(Mr,"mean"),Mr.forEach(i),ss=a(_,` value. Meaning that your averages will always be larger than your
estimations. And the more complex the task is, the bigger the gap. The work
therefore, on average, will `),Lt=n(_,"EM",{});var Hr=r(Lt);ns=a(Hr,"always"),Hr.forEach(i),rs=a(_," take longer than estimated."),_.forEach(i),Ui=f(e),Pe=n(e,"P",{});var Yr=r(Pe);ls=a(Yr,"Because the math says so."),Yr.forEach(i),Li=f(e),J=n(e,"H2",{id:!0});var An=r(J);Q=n(An,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var qr=r(Q);jt=n(qr,"SPAN",{class:!0}),r(jt).forEach(i),qr.forEach(i),hs=a(An,"Accuracy and precision"),An.forEach(i),ji=f(e),Oe=n(e,"P",{});var Jr=r(Oe);us=a(Jr,`When it comes to any measurement, there are two elements to the problem,
accuracy and precision; or sometimes they go by the names of bias and
variability.`),Jr.forEach(i),Mi=f(e),$=n(e,"UL",{});var bo=r($);z=n(bo,"LI",{});var fi=r(z);Mt=n(fi,"CODE",{});var Qr=r(Mt);ms=a(Qr,"precision"),Qr.forEach(i),fs=a(fi," or "),Ht=n(fi,"CODE",{});var $r=r(Ht);cs=a($r,"variability"),$r.forEach(i),ds=a(fi,` refers to how wide spread the measurement results
are`),fi.forEach(i),ps=f(bo),K=n(bo,"LI",{});var ci=r(K);Yt=n(ci,"CODE",{});var zr=r(Yt);ys=a(zr,"accuracy"),zr.forEach(i),bs=a(ci," or "),qt=n(ci,"CODE",{});var Kr=r(qt);vs=a(Kr,"bias"),Kr.forEach(i),gs=a(ci," is how close the results are to the actual/true value"),ci.forEach(i),bo.forEach(i),Hi=f(e),V=n(e,"FIGURE",{class:!0});var In=r(V);Se=n(In,"IMG",{src:!0,alt:!0}),Jt=n(In,"FIGCAPTION",{});var Vr=r(Jt);ws=a(Vr,"Accuracy and precision"),Vr.forEach(i),In.forEach(i),Yi=f(e),xe=n(e,"P",{});var Xr=r(xe);Es=a(Xr,`Or, in case of the estimation probabilities distribution graph, it looks like
so:`),Xr.forEach(i),qi=f(e),X=n(e,"FIGURE",{class:!0});var Tn=r(X);Ge=n(Tn,"IMG",{src:!0,alt:!0}),Qt=n(Tn,"FIGCAPTION",{});var Zr=r(Qt);ks=a(Zr,"Accuracy and precision on a graph"),Zr.forEach(i),Tn.forEach(i),Ji=f(e),g=n(e,"P",{});var x=r(g);_s=a(x,`You see now, you can whip your team endlessly into “getting better at
estimations”, working on optimal tasks granularity, etc. And it all will go
wrong every single time. Because you will push the team to optimise for the
`),$t=n(x,"STRONG",{});var el=r($t);As=a(el,"accuracy"),el.forEach(i),Is=a(x," of the "),zt=n(x,"STRONG",{});var tl=r(zt);Ts=a(tl,"mode"),tl.forEach(i),Ps=a(x,` value estimations, they will always be aiming at
the wrong thing. And then, the team will be repeatedly punished by the large gap
between the `),Kt=n(x,"STRONG",{});var il=r(Kt);Os=a(il,"mode"),il.forEach(i),Ss=a(x," and "),Vt=n(x,"STRONG",{});var ol=r(Vt);xs=a(ol,"average"),ol.forEach(i),Gs=a(x," values."),x.forEach(i),Qi=f(e),Ne=n(e,"P",{});var al=r(Ne);Ns=a(al,`This is called a “high precision, low accuracy” situation. It’s like trying to
measure the dimensions of a piece of gooey rubber with high quality calipers.`),al.forEach(i),$i=f(e),T=n(e,"P",{});var qe=r(T);Rs=a(qe,`And so, what do the teams do? They pad the crap out of their estimations until
the `),Xt=n(qe,"STRONG",{});var sl=r(Xt);Ds=a(sl,"mode"),sl.forEach(i),Cs=a(qe," spread overlaps with the "),Zt=n(qe,"STRONG",{});var nl=r(Zt);Bs=a(nl,"average"),nl.forEach(i),Fs=a(qe,` value. Everyone does this.
Either explicitly, or implicitly by using gimmicks like fibonacci numbers, and
averaging team members estimations.`),qe.forEach(i),zi=f(e),Z=n(e,"H2",{id:!0});var Pn=r(Z);ee=n(Pn,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var rl=r(ee);ei=n(rl,"SPAN",{class:!0}),r(ei).forEach(i),rl.forEach(i),Ws=a(Pn,"The ugly truth"),Pn.forEach(i),Ki=f(e),P=n(e,"P",{});var Je=r(P);Us=a(Je,`The truth is that nobody knows how long work will really take ahead of time.
Because nobody experienced the tail end of the distribution where the
`),ti=n(Je,"STRONG",{});var ll=r(ti);Ls=a(ll,"average"),ll.forEach(i),js=a(Je,` lives. And the more complex a task is, the more dependencies there
are, the less probability that `),ii=n(Je,"EM",{});var hl=r(ii);Ms=a(hl,"any"),hl.forEach(i),Hs=a(Je," estimation will be correct."),Je.forEach(i),Vi=f(e),Re=n(e,"P",{});var ul=r(Re);Ys=a(ul,`Work, especially the hard, critical work takes as long as it takes. Estimations
just lul you into the false sense of control over the situation. Nobody really
knows the answer, but when you produce a number, any number, it gives a plan a
flair of legitimacy. And off you go, telling your boss when it’s going to be
done.`),ul.forEach(i),Xi=f(e),te=n(e,"FIGURE",{class:!0});var On=r(te);De=n(On,"IMG",{src:!0,alt:!0}),oi=n(On,"FIGCAPTION",{});var ml=r(oi);qs=a(ml,"You did this to yourself"),ml.forEach(i),On.forEach(i),Zi=f(e),ie=n(e,"H2",{id:!0});var Sn=r(ie);oe=n(Sn,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var fl=r(oe);ai=n(fl,"SPAN",{class:!0}),r(ai).forEach(i),fl.forEach(i),Js=a(Sn,"The final chord"),Sn.forEach(i),eo=f(e),Ce=n(e,"P",{});var cl=r(Ce);Qs=a(cl,`And that’s not the worst part yet. Okay, suppose, I’m full of it. Suppose all
that math above doesn’t really exist or totally wrong. Let’s pretend for a
second that your estimations actually are accurate. Like for reals accurate.
What do you think is going to happen?`),cl.forEach(i),to=f(e),ae=n(e,"P",{});var vo=r(ae);$s=a(vo,"Suppose, you have estimated a task will take, say, "),si=n(vo,"STRONG",{});var dl=r(si);zs=a(dl,"4 hours"),dl.forEach(i),Ks=a(vo,`. A PJ sandwich
falls on the jam side every other time, meaning you still have the variability
in your estimations. And, you might finish it in 2 hours, or you might finish it
in 6 with roughly the same probability (because your accuracy is great). What
happens next?`),vo.forEach(i),io=f(e),Be=n(e,"P",{});var pl=r(Be);Vs=a(pl,`If you finish early, your manager will think you’re probably not very skilled
because you had to overshoot your estimations by 100%. And if you finish late,
your manager will think you’re probably not very skilled because work took 50%
longer. Either the case, they’ll probably assign you to more scrum training.`),pl.forEach(i),oo=f(e),Fe=n(e,"P",{});var yl=r(Fe);Xs=a(yl,`You see, the thing is, even in an idealised situation, you’re not supposed to
win at this game no matter what. The moment you produce a number — be that
hours, points, or pokemons — you’re screwed. Because everyone’s expectations
will be anchored to the number one way or another. And it’s a wrong number to
begin with.`),yl.forEach(i),ao=f(e),se=n(e,"H2",{id:!0});var xn=r(se);ne=n(xn,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var bl=r(ne);ni=n(bl,"SPAN",{class:!0}),r(ni).forEach(i),bl.forEach(i),Zs=a(xn,"To a manager"),xn.forEach(i),so=f(e),We=n(e,"P",{});var vl=r(We);en=a(vl,`Well, hello there. Since you’ve made it to management, chances are you’re smart
and will be less prone to refuting factual information. So, I’ll be blunt with
you here. A manager has one job, to make sure that resources are applied
optimally. And if your “management style” is rooted in estimations, you won’t be
doing a stellar job at it. Here is why.`),vl.forEach(i),no=f(e),re=n(e,"P",{});var go=r(re);tn=a(go,`Due to the mathematical model I’ve described above, chances that your team’s
estimations will be accurate and precise are pretty slim. The only people who
deliver their projects consistently on time and budget is the US army; and they
do that by grossly overestimating everything that moves. For a business entity
that’s an `),ri=n(go,"STRONG",{});var gl=r(ri);on=a(gl,"F"),gl.forEach(i),an=a(go,` in resources allocation, which is basically your job
description.`),go.forEach(i),ro=f(e),O=n(e,"P",{});var Qe=r(O);sn=a(Qe,`You obviously can’t underestimate requirements, because that’s a straight up
`),li=n(Qe,"STRONG",{});var wl=r(li);nn=a(wl,"F"),wl.forEach(i),rn=a(Qe,` in management. So, you’re most likely to try pushing the team to find some
form of a reasonable middle ground in their estimations. Due to the math I’ve
described above it will fail roughly 60% of the time. When your efforts will
eventually piss off enough senior engineers on the team, you will start paying
roughly $50-70k per person for replacements in cash money, all while delaying
your project even further. And yes, that’s an `),hi=n(Qe,"STRONG",{});var El=r(hi);ln=a(El,"F"),El.forEach(i),hn=a(Qe," in management."),Qe.forEach(i),lo=f(e),Ue=n(e,"P",{});var kl=r(Ue);un=a(kl,`So, repeat after me “estimations is a form of budgeting”. While budgeting works
great in civil engineering, it is completely counterproductive in software
development. Because software engineering is essentially a break through
development, which is creative R&D work, which is inherently unpredictable.`),kl.forEach(i),ho=f(e),Le=n(e,"P",{});var _l=r(Le);mn=a(_l,`There are better tools to manage software development than budgeting. And unless
it sinks in with you, the team will have little luck changing their ways against
your will.`),_l.forEach(i),uo=f(e),le=n(e,"H2",{id:!0});var Gn=r(le);he=n(Gn,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Al=r(he);ui=n(Al,"SPAN",{class:!0}),r(ui).forEach(i),Al.forEach(i),fn=a(Gn,"So, what now?"),Gn.forEach(i),mo=f(e),je=n(e,"P",{});var Il=r(je);cn=a(Il,`I imagine, you’re probably sitting there by now, thinking to yourself: “well,
thanks, Kai. who do you think you are crushing my world like this?“. And, look,
I’m sorry for dragging you through this, okay? If it will make you feel any
better, it pains me to write those things too; although, admittedly, I kind of
like it.`),Il.forEach(i),fo=f(e),Me=n(e,"P",{});var Tl=r(Me);dn=a(Tl,`But, now you have options. You can either forget all of this and go back to
doing what you used to do. Or, you can come back in a week and read my next
story. Because there is a way out of this mess.`),Tl.forEach(i),co=f(e),He=n(e,"P",{});var Pl=r(He);pn=a(Pl,`Yeah, I know, a shameless plug. But hey, I have mouths to feed, and I need more
eyeballs on my content. So, if you enjoyed the read, or find it useful, please
share in your circles. Thanks muchly, and I’ll see you next time!`),Pl.forEach(i),this.h()},h(){me(fe.src,Rn=zl)||u(fe,"src",Rn),u(fe,"alt","Dr. Evil agile"),u(N,"class","rehype-figure"),u(ze,"class","icon icon-link"),u(D,"aria-hidden","true"),u(D,"tabindex","-1"),u(D,"href","#quick-math"),u(R,"id","quick-math"),u(gt,"class","icon icon-link"),u(B,"aria-hidden","true"),u(B,"tabindex","-1"),u(B,"href","#quick-stats"),u(C,"id","quick-stats"),me(be.src,Dn=Kl)||u(be,"src",Dn),u(be,"alt","Normal distributions"),u(F,"class","rehype-figure"),me(ge.src,Cn=Vl)||u(ge,"src",Cn),u(ge,"alt","Asymmetric distributions"),u(W,"class","rehype-figure"),me(Ee.src,Bn=Xl)||u(Ee,"src",Bn),u(Ee,"alt","A bi-modal distribution"),u(U,"class","rehype-figure"),u(xt,"class","icon icon-link"),u(j,"aria-hidden","true"),u(j,"tabindex","-1"),u(j,"href","#estimations-math"),u(L,"id","estimations-math"),me(Ae.src,Fn=Zl)||u(Ae,"src",Fn),u(Ae,"alt","Estimations probability"),u(M,"class","rehype-figure"),u(Nt,"class","icon icon-link"),u(H,"aria-hidden","true"),u(H,"tabindex","-1"),u(H,"href","#so-what-is-the-problem"),u(I,"id","so-what-is-the-problem"),u(jt,"class","icon icon-link"),u(Q,"aria-hidden","true"),u(Q,"tabindex","-1"),u(Q,"href","#accuracy-and-precision"),u(J,"id","accuracy-and-precision"),me(Se.src,Wn=eh)||u(Se,"src",Wn),u(Se,"alt","Accuracy and precision"),u(V,"class","rehype-figure"),me(Ge.src,Un=th)||u(Ge,"src",Un),u(Ge,"alt","Accuracy and precision on a graph"),u(X,"class","rehype-figure"),u(ei,"class","icon icon-link"),u(ee,"aria-hidden","true"),u(ee,"tabindex","-1"),u(ee,"href","#the-ugly-truth"),u(Z,"id","the-ugly-truth"),me(De.src,Ln=ih)||u(De,"src",Ln),u(De,"alt","You did this to yourself"),u(te,"class","rehype-figure"),u(ai,"class","icon icon-link"),u(oe,"aria-hidden","true"),u(oe,"tabindex","-1"),u(oe,"href","#the-final-chord"),u(ie,"id","the-final-chord"),u(ni,"class","icon icon-link"),u(ne,"aria-hidden","true"),u(ne,"tabindex","-1"),u(ne,"href","#to-a-manager"),u(se,"id","to-a-manager"),u(ui,"class","icon icon-link"),u(he,"aria-hidden","true"),u(he,"tabindex","-1"),u(he,"href","#so-what-now"),u(le,"id","so-what-now")},m(e,l){h(e,G,l),t(G,wo),h(e,di,l),h(e,N,l),t(N,fe),t(N,$e),t($e,Eo),h(e,pi,l),h(e,ce,l),t(ce,ko),h(e,yi,l),h(e,R,l),t(R,D),t(D,ze),t(R,_o),h(e,bi,l),h(e,de,l),t(de,Ao),h(e,vi,l),h(e,pe,l),t(pe,Io),h(e,gi,l),h(e,A,l),t(A,Ke),t(Ke,d),t(d,Ve),t(Ve,To),t(d,Po),t(d,Xe),t(Xe,Oo),t(d,So),t(d,Ze),t(Ze,xo),t(d,Go),t(d,et),t(et,No),t(d,Ro),t(d,tt),t(tt,Do),t(d,Co),t(d,it),t(it,Bo),t(d,Fo),t(A,Wo),t(A,ot),t(ot,p),t(p,at),t(at,Uo),t(p,Lo),t(p,st),t(st,jo),t(p,Mo),t(p,nt),t(nt,Ho),t(p,Yo),t(p,rt),t(rt,qo),t(p,Jo),t(p,lt),t(lt,Qo),t(p,$o),t(p,ht),t(ht,zo),t(p,Ko),t(A,Vo),t(A,ut),t(ut,c),t(c,mt),t(mt,Xo),t(c,Zo),t(c,ft),t(ft,ea),t(c,ta),t(c,ct),t(ct,ia),t(c,oa),t(c,dt),t(dt,aa),t(c,sa),t(c,pt),t(pt,na),t(c,ra),t(c,yt),t(yt,la),t(c,ha),t(c,bt),t(bt,ua),t(c,ma),t(c,vt),t(vt,fa),h(e,wi,l),h(e,C,l),t(C,B),t(B,gt),t(C,ca),h(e,Ei,l),h(e,ye,l),t(ye,da),h(e,ki,l),h(e,F,l),t(F,be),t(F,wt),t(wt,pa),h(e,_i,l),h(e,k,l),t(k,ya),t(k,Et),t(Et,ba),t(k,va),t(k,kt),t(kt,ga),t(k,wa),t(k,_t),t(_t,Ea),t(k,ka),h(e,Ai,l),h(e,ve,l),t(ve,_a),h(e,Ii,l),h(e,W,l),t(W,ge),t(W,At),t(At,Aa),h(e,Ti,l),h(e,v,l),t(v,Ia),t(v,It),t(It,Ta),t(v,Pa),t(v,Tt),t(Tt,Oa),t(v,Sa),t(v,Pt),t(Pt,xa),t(v,Ga),t(v,Ot),t(Ot,Na),t(v,Ra),h(e,Pi,l),h(e,we,l),t(we,Da),h(e,Oi,l),h(e,U,l),t(U,Ee),t(U,St),t(St,Ca),h(e,Si,l),h(e,ke,l),t(ke,Ba),h(e,xi,l),h(e,L,l),t(L,j),t(j,xt),t(L,Fa),h(e,Gi,l),h(e,_e,l),t(_e,Wa),h(e,Ni,l),h(e,M,l),t(M,Ae),t(M,Gt),t(Gt,Ua),h(e,Ri,l),h(e,Ie,l),t(Ie,La),h(e,Di,l),h(e,Te,l),t(Te,ja),h(e,Ci,l),h(e,I,l),t(I,H),t(H,Nt),t(I,Ma),t(I,Rt),t(Rt,Ha),t(I,Ya),h(e,Bi,l),h(e,Y,l),t(Y,qa),t(Y,Dt),t(Dt,Ja),t(Y,Qa),h(e,Fi,l),h(e,q,l),t(q,$a),t(q,Ct),t(Ct,za),t(q,Ka),h(e,Wi,l),h(e,y,l),t(y,Va),t(y,Bt),t(Bt,Xa),t(y,Za),t(y,Ft),t(Ft,es),t(y,ts),t(y,Wt),t(Wt,is),t(y,os),t(y,Ut),t(Ut,as),t(y,ss),t(y,Lt),t(Lt,ns),t(y,rs),h(e,Ui,l),h(e,Pe,l),t(Pe,ls),h(e,Li,l),h(e,J,l),t(J,Q),t(Q,jt),t(J,hs),h(e,ji,l),h(e,Oe,l),t(Oe,us),h(e,Mi,l),h(e,$,l),t($,z),t(z,Mt),t(Mt,ms),t(z,fs),t(z,Ht),t(Ht,cs),t(z,ds),t($,ps),t($,K),t(K,Yt),t(Yt,ys),t(K,bs),t(K,qt),t(qt,vs),t(K,gs),h(e,Hi,l),h(e,V,l),t(V,Se),t(V,Jt),t(Jt,ws),h(e,Yi,l),h(e,xe,l),t(xe,Es),h(e,qi,l),h(e,X,l),t(X,Ge),t(X,Qt),t(Qt,ks),h(e,Ji,l),h(e,g,l),t(g,_s),t(g,$t),t($t,As),t(g,Is),t(g,zt),t(zt,Ts),t(g,Ps),t(g,Kt),t(Kt,Os),t(g,Ss),t(g,Vt),t(Vt,xs),t(g,Gs),h(e,Qi,l),h(e,Ne,l),t(Ne,Ns),h(e,$i,l),h(e,T,l),t(T,Rs),t(T,Xt),t(Xt,Ds),t(T,Cs),t(T,Zt),t(Zt,Bs),t(T,Fs),h(e,zi,l),h(e,Z,l),t(Z,ee),t(ee,ei),t(Z,Ws),h(e,Ki,l),h(e,P,l),t(P,Us),t(P,ti),t(ti,Ls),t(P,js),t(P,ii),t(ii,Ms),t(P,Hs),h(e,Vi,l),h(e,Re,l),t(Re,Ys),h(e,Xi,l),h(e,te,l),t(te,De),t(te,oi),t(oi,qs),h(e,Zi,l),h(e,ie,l),t(ie,oe),t(oe,ai),t(ie,Js),h(e,eo,l),h(e,Ce,l),t(Ce,Qs),h(e,to,l),h(e,ae,l),t(ae,$s),t(ae,si),t(si,zs),t(ae,Ks),h(e,io,l),h(e,Be,l),t(Be,Vs),h(e,oo,l),h(e,Fe,l),t(Fe,Xs),h(e,ao,l),h(e,se,l),t(se,ne),t(ne,ni),t(se,Zs),h(e,so,l),h(e,We,l),t(We,en),h(e,no,l),h(e,re,l),t(re,tn),t(re,ri),t(ri,on),t(re,an),h(e,ro,l),h(e,O,l),t(O,sn),t(O,li),t(li,nn),t(O,rn),t(O,hi),t(hi,ln),t(O,hn),h(e,lo,l),h(e,Ue,l),t(Ue,un),h(e,ho,l),h(e,Le,l),t(Le,mn),h(e,uo,l),h(e,le,l),t(le,he),t(he,ui),t(le,fn),h(e,mo,l),h(e,je,l),t(je,cn),h(e,fo,l),h(e,Me,l),t(Me,dn),h(e,co,l),h(e,He,l),t(He,pn)},p:Nn,i:Nn,o:Nn,d(e){e&&i(G),e&&i(di),e&&i(N),e&&i(pi),e&&i(ce),e&&i(yi),e&&i(R),e&&i(bi),e&&i(de),e&&i(vi),e&&i(pe),e&&i(gi),e&&i(A),e&&i(wi),e&&i(C),e&&i(Ei),e&&i(ye),e&&i(ki),e&&i(F),e&&i(_i),e&&i(k),e&&i(Ai),e&&i(ve),e&&i(Ii),e&&i(W),e&&i(Ti),e&&i(v),e&&i(Pi),e&&i(we),e&&i(Oi),e&&i(U),e&&i(Si),e&&i(ke),e&&i(xi),e&&i(L),e&&i(Gi),e&&i(_e),e&&i(Ni),e&&i(M),e&&i(Ri),e&&i(Ie),e&&i(Di),e&&i(Te),e&&i(Ci),e&&i(I),e&&i(Bi),e&&i(Y),e&&i(Fi),e&&i(q),e&&i(Wi),e&&i(y),e&&i(Ui),e&&i(Pe),e&&i(Li),e&&i(J),e&&i(ji),e&&i(Oe),e&&i(Mi),e&&i($),e&&i(Hi),e&&i(V),e&&i(Yi),e&&i(xe),e&&i(qi),e&&i(X),e&&i(Ji),e&&i(g),e&&i(Qi),e&&i(Ne),e&&i($i),e&&i(T),e&&i(zi),e&&i(Z),e&&i(Ki),e&&i(P),e&&i(Vi),e&&i(Re),e&&i(Xi),e&&i(te),e&&i(Zi),e&&i(ie),e&&i(eo),e&&i(Ce),e&&i(to),e&&i(ae),e&&i(io),e&&i(Be),e&&i(oo),e&&i(Fe),e&&i(ao),e&&i(se),e&&i(so),e&&i(We),e&&i(no),e&&i(re),e&&i(ro),e&&i(O),e&&i(lo),e&&i(Ue),e&&i(ho),e&&i(Le),e&&i(uo),e&&i(le),e&&i(mo),e&&i(je),e&&i(fo),e&&i(Me),e&&i(co),e&&i(He)}}}const sh={slug:"3OvR4",date:"22 Feb 2023",title:"Why estimations don't really work",description:"Destroying the hopes and dreams of those relying on estimations in their delivery planning",thumbnail:$l,tags:["planning","agile","management"]};class nh extends Sl{constructor(G){super(),xl(this,G,null,oh,Gl,{})}}export{nh as default,sh as metadata};
