import{S as bl,i as vl,s as wl,k as s,q as o,a as m,l as n,m as r,r as a,h as t,c as f,H as he,n as u,b as h,F as i,C as En}from"./index-920be987.js";const gl="png",El=1200,kl=600,_l="srgb",Al=3,Il="uchar",Pl=132,Tl=!1,Ol="inch",Sl=!1,xl=!1,Gl=1,Nl=void 0,Rl=!1,Dl=!1,Cl=""+new URL("../assets/estimations-probability-957646fe.png",import.meta.url).href,Wl={format:gl,width:El,height:kl,space:_l,channels:Al,depth:Il,density:Pl,isProgressive:Tl,resolutionUnit:Ol,hasProfile:Sl,hasAlpha:xl,orientation:Gl,aspect:Nl,withoutEnlargement:Rl,withoutReduction:Dl,src:Cl},Bl=""+new URL("../assets/agile-424a54bd.jpg",import.meta.url).href,Fl=""+new URL("../assets/normal-distribution-c26de66a.webp",import.meta.url).href,Ul=""+new URL("../assets/asymmetric-distribution-3e45e0d6.webp",import.meta.url).href,Ll=""+new URL("../assets/bimodal-distribution-327cb732.webp",import.meta.url).href,jl=""+new URL("../assets/estimations-probability-0f85d828.webp",import.meta.url).href,Ml=""+new URL("../assets/accuracy-precision-ac084897.webp",import.meta.url).href,Hl=""+new URL("../assets/accuracy-precision-2-3f1d5f3a.webp",import.meta.url).href,Yl=""+new URL("../assets/we-ask-for-estimations-418e9c10.jpeg",import.meta.url).href;function ql(yl){let x,po,ui,G,ue,kn,Qe,yo,mi,me,bo,fi,N,R,$e,vo,ci,fe,wo,di,ce,go,pi,A,ze,d,Ke,Eo,ko,Ve,_o,Ao,Xe,Io,Po,Ze,To,Oo,et,So,xo,tt,Go,No,Ro,it,p,ot,Do,Co,at,Wo,Bo,st,Fo,Uo,nt,Lo,jo,rt,Mo,Ho,lt,Yo,qo,Jo,ht,c,ut,Qo,$o,mt,zo,Ko,ft,Vo,Xo,ct,Zo,ea,dt,ta,ia,pt,oa,aa,yt,sa,na,bt,ra,yi,D,C,vt,la,bi,de,ha,vi,W,pe,_n,wt,ua,wi,k,ma,gt,fa,ca,Et,da,pa,kt,ya,ba,gi,ye,va,Ei,B,be,An,_t,wa,ki,v,ga,At,Ea,ka,It,_a,Aa,Pt,Ia,Pa,Tt,Ta,Oa,_i,ve,Sa,Ai,F,we,In,Ot,xa,Ii,ge,Ga,Pi,U,L,St,Na,Ti,Ee,Ra,Oi,j,ke,Pn,xt,Da,Si,_e,Ca,xi,Ae,Wa,Gi,I,M,Gt,Ba,Nt,Fa,Ua,Ni,H,La,Rt,ja,Ma,Ri,Y,Ha,Dt,Ya,qa,Di,y,Ja,Ct,Qa,$a,Wt,za,Ka,Bt,Va,Xa,Ft,Za,es,Ut,ts,is,Ci,Ie,os,Wi,q,J,Lt,as,Bi,Pe,ss,Fi,Q,$,jt,ns,rs,Mt,ls,hs,us,z,Ht,ms,fs,Yt,cs,ds,Ui,K,Te,Tn,qt,ps,Li,Oe,ys,ji,V,Se,On,Jt,bs,Mi,w,vs,Qt,ws,gs,$t,Es,ks,zt,_s,As,Kt,Is,Ps,Hi,xe,Ts,Yi,P,Os,Vt,Ss,xs,Xt,Gs,Ns,qi,X,Z,Zt,Rs,Ji,T,Ds,ei,Cs,Ws,ti,Bs,Fs,Qi,Ge,Us,$i,ee,Ne,Sn,ii,Ls,zi,te,ie,oi,js,Ki,Re,Ms,Vi,oe,Hs,ai,Ys,qs,Xi,De,Js,Zi,Ce,Qs,eo,ae,se,si,$s,to,We,zs,io,Be,Ks,oo,Fe,Vs,ao,Ue,Xs,so,Le,Zs,no,ne,re,ni,en,ro,je,tn,lo,Me,on,ho,He,an;return{c(){x=s("p"),po=o(`I’ve been through a fair bit of teams; and I have built and managed my own share
of them as well. I’ve seen teams that estimate in hours, I’ve seen teams that
estimate in points, in complexity, in t-shirts, and in pokemons. Okay, I haven’t
seen teams estimating in pokemons. But, I dare to say that they’d have exactly
the same outcomes in their delivery as everyone else. Why? Well, because…`),ui=m(),G=s("figure"),ue=s("img"),Qe=s("figcaption"),yo=o("Dr. Evil agile"),mi=m(),me=s("p"),bo=o(`A lot have been said so far about futility of estimations, and yet it’s 2023 out
there, and teams still dutifully practice the estimations drama. And so, I’m
here to “help”.`),fi=m(),N=s("h2"),R=s("a"),$e=s("span"),vo=o("Quick math"),ci=m(),fe=s("p"),wo=o(`Before you can fully understand my point, I feel it’s necessary to arm you with
some knowledge. Some of you are well versed in math and statistics, and I
apologise for dragging you through this. But, some are not, and I hope you’ll
find it useful.`),di=m(),ce=s("p"),go=o("Lets start with basic stats terminology:"),pi=m(),A=s("ul"),ze=s("li"),d=s("p"),Ke=s("code"),Eo=o("average"),ko=o(", or "),Ve=s("code"),_o=o("mean"),Ao=o(` for those in the US - means what you think it means. A
sum of the elements divided by the number of elements. The average of `),Xe=s("code"),Io=o("1,2,3"),Po=o(`
is `),Ze=s("code"),To=o("2"),Oo=o(", and the average of "),et=s("code"),So=o("3,2,1"),xo=o(" is "),tt=s("code"),Go=o("2"),No=o(" as well."),Ro=m(),it=s("li"),p=s("p"),ot=s("code"),Do=o("median"),Co=o(` - refers to the value in the middle of a list. The median value of
`),at=s("code"),Wo=o("1,2,3"),Bo=o(" is "),st=s("code"),Fo=o("2"),Uo=o(". But the median of "),nt=s("code"),Lo=o("1,1,4"),jo=o(" is "),rt=s("code"),Mo=o("1"),Ho=o(`, which is different from the
average, which is still `),lt=s("code"),Yo=o("2"),qo=o(" in this case."),Jo=m(),ht=s("li"),c=s("p"),ut=s("code"),Qo=o("mode"),$o=o(" - refers to the most commonly appearing value. The mode of "),mt=s("code"),zo=o("1,1,2,4"),Ko=o(` is
`),ft=s("code"),Vo=o("1"),Xo=o(", and the mode of "),ct=s("code"),Zo=o("1,2,3,3"),ea=o(" is "),dt=s("code"),ta=o("3"),ia=o(`. Obviously, there can be more than one
mode: the list `),pt=s("code"),oa=o("1,1,2,3,3,4"),aa=o(" has two modes "),yt=s("code"),sa=o("1"),na=o(" and "),bt=s("code"),ra=o("3"),yi=m(),D=s("h2"),C=s("a"),vt=s("span"),la=o("Quick stats"),bi=m(),de=s("p"),ha=o(`When we’re talking about statistical analysis, we’re normally talking about
probabilities; more specifically we’re talking about probability distributions.
At which point people think about bell curves and what’s known as the “normal”
distribution.`),vi=m(),W=s("figure"),pe=s("img"),wt=s("figcaption"),ua=o("Normal distributions"),wi=m(),k=s("p"),ma=o("In a normal distribution, the "),gt=s("strong"),fa=o("mean"),ca=o(", "),Et=s("strong"),da=o("median"),pa=o(", and "),kt=s("strong"),ya=o("mode"),ba=o(` mean exactly
the same thing: the peak of the bell curve. And the more difficult a problem is
the more shallow the graph will be.`),gi=m(),ye=s("p"),va=o(`A normal distribution is not the only type of distributions. Some of the most
important cases — and estimations fall into this category — are not bell
shaped, they are skewed and known as asymmetric distributions.`),Ei=m(),B=s("figure"),be=s("img"),_t=s("figcaption"),wa=o("Asymmetric distributions"),ki=m(),v=s("p"),ga=o("The "),At=s("strong"),Ea=o("mean"),ka=o(", "),It=s("strong"),_a=o("median"),Aa=o(", and the "),Pt=s("strong"),Ia=o("mode"),Pa=o(` will be three different things in
this case. The reason for it is that the `),Tt=s("em"),Ta=o("area"),Oa=o(` under the curve represents all
the possible cases, and there are more possibilities on one side of the peak
than the other.`),_i=m(),ve=s("p"),Sa=o(`And, while we’re on the subject of weird distributions, there is yet another
probability curve to keep in mind. Sometimes, there are more than one common
outcome, and that will result in the curve having multiple peaks. Those are
called multi-modal distributions.`),Ai=m(),F=s("figure"),we=s("img"),Ot=s("figcaption"),xa=o("A bi-modal distribution"),Ii=m(),ge=s("p"),Ga=o(`Those often happen in complex situations with lots of dependencies and
non-homogeneous data sources. For example, if you take the distribution of
people heights in a group that has a 1:1 ratio of males and females, you’d see
to peaks, one for the average female height and one for an average male height.`),Pi=m(),U=s("h2"),L=s("a"),St=s("span"),Na=o("Estimations math"),Ti=m(),Ee=s("p"),Ra=o(`When it comes to estimations, it doesn’t really matter what system a team uses,
they all follow the same mathematical principles. They all go from zero to
infinity, and the probability of them being accurate can be represented by an
asymmetric, often multi-modal, probabilities distribution curve`),Oi=m(),j=s("figure"),ke=s("img"),xt=s("figcaption"),Da=o("Estimations probability"),Si=m(),_e=s("p"),Ca=o(`The more complex a task is, and the more dependencies it has, the shallower the
graph will be, with more peaks showing up. At some point it gets so muddy, that
a drunk monkey throwing a banana at the chart would have roughly as much luck
with the estimation as any member of the team.`),xi=m(),Ae=s("p"),Wa=o("However funny that sounds, that is not the actual problem here."),Gi=m(),I=s("h2"),M=s("a"),Gt=s("span"),Ba=o("So, what "),Nt=s("em"),Fa=o("is"),Ua=o(" the problem?"),Ni=m(),H=s("p"),La=o(`The problem with the picture is this. When you’ve been asked to estimate
something, what you think about is the `),Rt=s("strong"),ja=o("mode"),Ma=o(` value, or the most commonly
appearing outcome in your experience. And the more experienced an engineer is
the more consistent they will be at pointing out the value.`),Ri=m(),Y=s("p"),Ha=o("But, what’s really implied here is the "),Dt=s("strong"),Ya=o("average"),qa=o(` value. Because the general
mindset in estimations based planning is that you don’t have to be accurate with
each estimation, the law of averages will kick in at the end of the sprint and
sort it all out. And it will. Just not the way you think it should.`),Di=m(),y=s("p"),Ja=o(`What everyone is missing is the fact that in an asymmetric probabilities
distribution, the `),Ct=s("strong"),Qa=o("average"),$a=o(" is "),Wt=s("em"),za=o("always larger"),Ka=o(" than the "),Bt=s("strong"),Va=o("mode"),Xa=o(` or the
`),Ft=s("strong"),Za=o("mean"),es=o(` value. Meaning that your averages will always be larger than your
estimations. And the more complex the task is, the bigger the gap. The work
therefore, on average, will `),Ut=s("em"),ts=o("always"),is=o(" take longer than estimated."),Ci=m(),Ie=s("p"),os=o("Because the math says so."),Wi=m(),q=s("h2"),J=s("a"),Lt=s("span"),as=o("Accuracy and precision"),Bi=m(),Pe=s("p"),ss=o(`When it comes to any measurement, there are two elements to the problem,
accuracy and precision; or sometimes they go by the names of bias and
variability.`),Fi=m(),Q=s("ul"),$=s("li"),jt=s("code"),ns=o("precision"),rs=o(" or "),Mt=s("code"),ls=o("variability"),hs=o(` refers to how wide spread the measurement results
are`),us=m(),z=s("li"),Ht=s("code"),ms=o("accuracy"),fs=o(" or "),Yt=s("code"),cs=o("bias"),ds=o(" is how close the results are to the actual/true value"),Ui=m(),K=s("figure"),Te=s("img"),qt=s("figcaption"),ps=o("Accuracy and precision"),Li=m(),Oe=s("p"),ys=o(`Or, in case of the estimation probabilities distribution graph, it looks like
so:`),ji=m(),V=s("figure"),Se=s("img"),Jt=s("figcaption"),bs=o("Accuracy and precision on a graph"),Mi=m(),w=s("p"),vs=o(`You see now, you can whip your team endlessly into “getting better at
estimations”, working on optimal tasks granularity, etc. And it all will go
wrong every single time. Because you will push the team to optimise for the
`),Qt=s("strong"),ws=o("accuracy"),gs=o(" of the "),$t=s("strong"),Es=o("mode"),ks=o(` value estimations; they will be aiming at the wrong
thing. And then, the team will be repeatedly punished by the large gap between
the `),zt=s("strong"),_s=o("mode"),As=o(" and "),Kt=s("strong"),Is=o("average"),Ps=o(" values."),Hi=m(),xe=s("p"),Ts=o(`This is called a “high precision, low accuracy” situation. It’s like trying to
measure the dimensions of a piece of gooey rubber with high quality calipers.`),Yi=m(),P=s("p"),Os=o(`And so, what do the teams do? They pad the crap out of their estimations until
the `),Vt=s("strong"),Ss=o("mode"),xs=o(" spread overlaps with the "),Xt=s("strong"),Gs=o("average"),Ns=o(` value. Everyone does this.
Either explicitly, or implicitly by using gimmicks like fibonacci numbers, and
averaging team members estimations.`),qi=m(),X=s("h2"),Z=s("a"),Zt=s("span"),Rs=o("The ugly truth"),Ji=m(),T=s("p"),Ds=o(`The truth is that nobody knows how long work will really take ahead of time.
Because nobody experienced the tail end of the distribution where the
`),ei=s("strong"),Cs=o("average"),Ws=o(` lives. And the more complex a task is, the more dependencies there
are, the less probability that `),ti=s("em"),Bs=o("any"),Fs=o(" estimation will be correct."),Qi=m(),Ge=s("p"),Us=o(`Work, especially the hard, critical work takes as long as it takes. Estimations
just lul you into the false sense of control over the situation. Nobody really
knows the answer, but when you produce a number, any number, it gives a plan a
flair of legitimacy. And off you go, telling your boss when it’s going to be
done.`),$i=m(),ee=s("figure"),Ne=s("img"),ii=s("figcaption"),Ls=o("You did this to yourself"),zi=m(),te=s("h2"),ie=s("a"),oi=s("span"),js=o("The final chord"),Ki=m(),Re=s("p"),Ms=o(`And that’s not the worst part yet. Okay, suppose, I’m full of it. Suppose all
that math above doesn’t really exist or totally wrong. Let’s pretend for a
second that your estimations actually are accurate. Like for reals accurate.
What do you think is going to happen?`),Vi=m(),oe=s("p"),Hs=o("Suppose, you have estimated a task will take, say, "),ai=s("strong"),Ys=o("4 hours"),qs=o(`. A PJ sandwich
falls on the jam side every other time, meaning you still have the variability
in your estimations. And, you might finish it in 2 hours, or you might finish it
in 6 with roughly the same probability (because your accuracy is great). What
happens next?`),Xi=m(),De=s("p"),Js=o(`If you finish early, your manager will think you’re probably not very skilled
because you had to overshoot your estimations by 100%. And if you finish late,
your manager will think you’re probably not very skilled because work took 50%
longer. Either the case, they’ll probably assign you to more scrum training.`),Zi=m(),Ce=s("p"),Qs=o(`You see, the thing is, even in an idealised situation, you’re not supposed to
win at this game no matter what. The moment you produce a number — be that
hours, points, or pokemons — you’re screwed. Because everyone’s expectations
will be anchored to the number one way or another. And it’s a wrong number to
begin with.`),eo=m(),ae=s("h2"),se=s("a"),si=s("span"),$s=o("To a manager"),to=m(),We=s("p"),zs=o(`Well, hello there. Since you’ve made it to management, chances are you’re not
dumb and will be less prone to refuting factual information. So, I’ll be blunt
with you here. A manager has one job, to make sure that resources are applied
optimally. And if your “management style” is rooted in estimations, you won’t be
doing a stellar job at it. Here is why.`),io=m(),Be=s("p"),Ks=o(`Due to the mathematical model I’ve described above, chances that you team’s
estimations will be accurate and precise are pretty slim. The only people who
deliver their projects consistently on time and budget is the US army; and they
do that by grossly overestimating everything that moves. For a business entity
that’s an F in resources allocation, which is basically your job description.`),oo=m(),Fe=s("p"),Vs=o(`You obviously can’t underestimate requirements, because that’s a straight up F
in management. So, you’re most likely to try pushing the team to find some form
of a reasonable middle ground in their estimations. Due to the math I’ve
described above it will fail roughly 60% of the time. When your efforts will
eventually piss off enough senior engineers on the team, you will start paying
roughly $70-100k per person for replacements in cash money, all while delaying
your project even further. And yes, that’s an F in management.`),ao=m(),Ue=s("p"),Xs=o(`So, repeat after me “estimations is a form of budgeting”. While budgeting works
great in civil engineering, it is completely counterproductive in software
development. Because software engineering is essentially a break through
development, which is creative R&D work, which is inherently unpredictable.`),so=m(),Le=s("p"),Zs=o(`There are better tools to manage software development than budgeting. And unless
it sinks in with you, the team will have little luck changing their ways against
your will.`),no=m(),ne=s("h2"),re=s("a"),ni=s("span"),en=o("So, what now?"),ro=m(),je=s("p"),tn=o(`I imagine, you’re probably sitting there by now, thinking to yourself: “well,
thanks, Kai. who do you think you are crushing my world like this?“. And, look,
I’m sorry for dragging you through this, okay? If it will make you feel any
better, it pains me to write those things too; although, admittedly, I kind of
like it.`),lo=m(),Me=s("p"),on=o(`But, now you have options. You can either forget all of this and go back to
doing what you used to do. Or, you can come back in a week and read my next
story. Because there is a way out of this mess.`),ho=m(),He=s("p"),an=o(`Yeah, I know, a shameless plug. But hey, I have mouths to feed, and I need more
eyeballs on my content. So, if you enjoyed the read, or find it useful, please
share in your circles. Thanks muchly, and I’ll see you next time!`),this.h()},l(e){x=n(e,"P",{});var l=r(x);po=a(l,`I’ve been through a fair bit of teams; and I have built and managed my own share
of them as well. I’ve seen teams that estimate in hours, I’ve seen teams that
estimate in points, in complexity, in t-shirts, and in pokemons. Okay, I haven’t
seen teams estimating in pokemons. But, I dare to say that they’d have exactly
the same outcomes in their delivery as everyone else. Why? Well, because…`),l.forEach(t),ui=f(e),G=n(e,"FIGURE",{class:!0});var sn=r(G);ue=n(sn,"IMG",{src:!0,alt:!0}),Qe=n(sn,"FIGCAPTION",{});var xn=r(Qe);yo=a(xn,"Dr. Evil agile"),xn.forEach(t),sn.forEach(t),mi=f(e),me=n(e,"P",{});var Gn=r(me);bo=a(Gn,`A lot have been said so far about futility of estimations, and yet it’s 2023 out
there, and teams still dutifully practice the estimations drama. And so, I’m
here to “help”.`),Gn.forEach(t),fi=f(e),N=n(e,"H2",{id:!0});var nn=r(N);R=n(nn,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Nn=r(R);$e=n(Nn,"SPAN",{class:!0}),r($e).forEach(t),Nn.forEach(t),vo=a(nn,"Quick math"),nn.forEach(t),ci=f(e),fe=n(e,"P",{});var Rn=r(fe);wo=a(Rn,`Before you can fully understand my point, I feel it’s necessary to arm you with
some knowledge. Some of you are well versed in math and statistics, and I
apologise for dragging you through this. But, some are not, and I hope you’ll
find it useful.`),Rn.forEach(t),di=f(e),ce=n(e,"P",{});var Dn=r(ce);go=a(Dn,"Lets start with basic stats terminology:"),Dn.forEach(t),pi=f(e),A=n(e,"UL",{});var Ye=r(A);ze=n(Ye,"LI",{});var Cn=r(ze);d=n(Cn,"P",{});var g=r(d);Ke=n(g,"CODE",{});var Wn=r(Ke);Eo=a(Wn,"average"),Wn.forEach(t),ko=a(g,", or "),Ve=n(g,"CODE",{});var Bn=r(Ve);_o=a(Bn,"mean"),Bn.forEach(t),Ao=a(g,` for those in the US - means what you think it means. A
sum of the elements divided by the number of elements. The average of `),Xe=n(g,"CODE",{});var Fn=r(Xe);Io=a(Fn,"1,2,3"),Fn.forEach(t),Po=a(g,`
is `),Ze=n(g,"CODE",{});var Un=r(Ze);To=a(Un,"2"),Un.forEach(t),Oo=a(g,", and the average of "),et=n(g,"CODE",{});var Ln=r(et);So=a(Ln,"3,2,1"),Ln.forEach(t),xo=a(g," is "),tt=n(g,"CODE",{});var jn=r(tt);Go=a(jn,"2"),jn.forEach(t),No=a(g," as well."),g.forEach(t),Cn.forEach(t),Ro=f(Ye),it=n(Ye,"LI",{});var Mn=r(it);p=n(Mn,"P",{});var E=r(p);ot=n(E,"CODE",{});var Hn=r(ot);Do=a(Hn,"median"),Hn.forEach(t),Co=a(E,` - refers to the value in the middle of a list. The median value of
`),at=n(E,"CODE",{});var Yn=r(at);Wo=a(Yn,"1,2,3"),Yn.forEach(t),Bo=a(E," is "),st=n(E,"CODE",{});var qn=r(st);Fo=a(qn,"2"),qn.forEach(t),Uo=a(E,". But the median of "),nt=n(E,"CODE",{});var Jn=r(nt);Lo=a(Jn,"1,1,4"),Jn.forEach(t),jo=a(E," is "),rt=n(E,"CODE",{});var Qn=r(rt);Mo=a(Qn,"1"),Qn.forEach(t),Ho=a(E,`, which is different from the
average, which is still `),lt=n(E,"CODE",{});var $n=r(lt);Yo=a($n,"2"),$n.forEach(t),qo=a(E," in this case."),E.forEach(t),Mn.forEach(t),Jo=f(Ye),ht=n(Ye,"LI",{});var zn=r(ht);c=n(zn,"P",{});var b=r(c);ut=n(b,"CODE",{});var Kn=r(ut);Qo=a(Kn,"mode"),Kn.forEach(t),$o=a(b," - refers to the most commonly appearing value. The mode of "),mt=n(b,"CODE",{});var Vn=r(mt);zo=a(Vn,"1,1,2,4"),Vn.forEach(t),Ko=a(b,` is
`),ft=n(b,"CODE",{});var Xn=r(ft);Vo=a(Xn,"1"),Xn.forEach(t),Xo=a(b,", and the mode of "),ct=n(b,"CODE",{});var Zn=r(ct);Zo=a(Zn,"1,2,3,3"),Zn.forEach(t),ea=a(b," is "),dt=n(b,"CODE",{});var er=r(dt);ta=a(er,"3"),er.forEach(t),ia=a(b,`. Obviously, there can be more than one
mode: the list `),pt=n(b,"CODE",{});var tr=r(pt);oa=a(tr,"1,1,2,3,3,4"),tr.forEach(t),aa=a(b," has two modes "),yt=n(b,"CODE",{});var ir=r(yt);sa=a(ir,"1"),ir.forEach(t),na=a(b," and "),bt=n(b,"CODE",{});var or=r(bt);ra=a(or,"3"),or.forEach(t),b.forEach(t),zn.forEach(t),Ye.forEach(t),yi=f(e),D=n(e,"H2",{id:!0});var rn=r(D);C=n(rn,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ar=r(C);vt=n(ar,"SPAN",{class:!0}),r(vt).forEach(t),ar.forEach(t),la=a(rn,"Quick stats"),rn.forEach(t),bi=f(e),de=n(e,"P",{});var sr=r(de);ha=a(sr,`When we’re talking about statistical analysis, we’re normally talking about
probabilities; more specifically we’re talking about probability distributions.
At which point people think about bell curves and what’s known as the “normal”
distribution.`),sr.forEach(t),vi=f(e),W=n(e,"FIGURE",{class:!0});var ln=r(W);pe=n(ln,"IMG",{src:!0,alt:!0}),wt=n(ln,"FIGCAPTION",{});var nr=r(wt);ua=a(nr,"Normal distributions"),nr.forEach(t),ln.forEach(t),wi=f(e),k=n(e,"P",{});var le=r(k);ma=a(le,"In a normal distribution, the "),gt=n(le,"STRONG",{});var rr=r(gt);fa=a(rr,"mean"),rr.forEach(t),ca=a(le,", "),Et=n(le,"STRONG",{});var lr=r(Et);da=a(lr,"median"),lr.forEach(t),pa=a(le,", and "),kt=n(le,"STRONG",{});var hr=r(kt);ya=a(hr,"mode"),hr.forEach(t),ba=a(le,` mean exactly
the same thing: the peak of the bell curve. And the more difficult a problem is
the more shallow the graph will be.`),le.forEach(t),gi=f(e),ye=n(e,"P",{});var ur=r(ye);va=a(ur,`A normal distribution is not the only type of distributions. Some of the most
important cases — and estimations fall into this category — are not bell
shaped, they are skewed and known as asymmetric distributions.`),ur.forEach(t),Ei=f(e),B=n(e,"FIGURE",{class:!0});var hn=r(B);be=n(hn,"IMG",{src:!0,alt:!0}),_t=n(hn,"FIGCAPTION",{});var mr=r(_t);wa=a(mr,"Asymmetric distributions"),mr.forEach(t),hn.forEach(t),ki=f(e),v=n(e,"P",{});var O=r(v);ga=a(O,"The "),At=n(O,"STRONG",{});var fr=r(At);Ea=a(fr,"mean"),fr.forEach(t),ka=a(O,", "),It=n(O,"STRONG",{});var cr=r(It);_a=a(cr,"median"),cr.forEach(t),Aa=a(O,", and the "),Pt=n(O,"STRONG",{});var dr=r(Pt);Ia=a(dr,"mode"),dr.forEach(t),Pa=a(O,` will be three different things in
this case. The reason for it is that the `),Tt=n(O,"EM",{});var pr=r(Tt);Ta=a(pr,"area"),pr.forEach(t),Oa=a(O,` under the curve represents all
the possible cases, and there are more possibilities on one side of the peak
than the other.`),O.forEach(t),_i=f(e),ve=n(e,"P",{});var yr=r(ve);Sa=a(yr,`And, while we’re on the subject of weird distributions, there is yet another
probability curve to keep in mind. Sometimes, there are more than one common
outcome, and that will result in the curve having multiple peaks. Those are
called multi-modal distributions.`),yr.forEach(t),Ai=f(e),F=n(e,"FIGURE",{class:!0});var un=r(F);we=n(un,"IMG",{src:!0,alt:!0}),Ot=n(un,"FIGCAPTION",{});var br=r(Ot);xa=a(br,"A bi-modal distribution"),br.forEach(t),un.forEach(t),Ii=f(e),ge=n(e,"P",{});var vr=r(ge);Ga=a(vr,`Those often happen in complex situations with lots of dependencies and
non-homogeneous data sources. For example, if you take the distribution of
people heights in a group that has a 1:1 ratio of males and females, you’d see
to peaks, one for the average female height and one for an average male height.`),vr.forEach(t),Pi=f(e),U=n(e,"H2",{id:!0});var mn=r(U);L=n(mn,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var wr=r(L);St=n(wr,"SPAN",{class:!0}),r(St).forEach(t),wr.forEach(t),Na=a(mn,"Estimations math"),mn.forEach(t),Ti=f(e),Ee=n(e,"P",{});var gr=r(Ee);Ra=a(gr,`When it comes to estimations, it doesn’t really matter what system a team uses,
they all follow the same mathematical principles. They all go from zero to
infinity, and the probability of them being accurate can be represented by an
asymmetric, often multi-modal, probabilities distribution curve`),gr.forEach(t),Oi=f(e),j=n(e,"FIGURE",{class:!0});var fn=r(j);ke=n(fn,"IMG",{src:!0,alt:!0}),xt=n(fn,"FIGCAPTION",{});var Er=r(xt);Da=a(Er,"Estimations probability"),Er.forEach(t),fn.forEach(t),Si=f(e),_e=n(e,"P",{});var kr=r(_e);Ca=a(kr,`The more complex a task is, and the more dependencies it has, the shallower the
graph will be, with more peaks showing up. At some point it gets so muddy, that
a drunk monkey throwing a banana at the chart would have roughly as much luck
with the estimation as any member of the team.`),kr.forEach(t),xi=f(e),Ae=n(e,"P",{});var _r=r(Ae);Wa=a(_r,"However funny that sounds, that is not the actual problem here."),_r.forEach(t),Gi=f(e),I=n(e,"H2",{id:!0});var ri=r(I);M=n(ri,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Ar=r(M);Gt=n(Ar,"SPAN",{class:!0}),r(Gt).forEach(t),Ar.forEach(t),Ba=a(ri,"So, what "),Nt=n(ri,"EM",{});var Ir=r(Nt);Fa=a(Ir,"is"),Ir.forEach(t),Ua=a(ri," the problem?"),ri.forEach(t),Ni=f(e),H=n(e,"P",{});var uo=r(H);La=a(uo,`The problem with the picture is this. When you’ve been asked to estimate
something, what you think about is the `),Rt=n(uo,"STRONG",{});var Pr=r(Rt);ja=a(Pr,"mode"),Pr.forEach(t),Ma=a(uo,` value, or the most commonly
appearing outcome in your experience. And the more experienced an engineer is
the more consistent they will be at pointing out the value.`),uo.forEach(t),Ri=f(e),Y=n(e,"P",{});var mo=r(Y);Ha=a(mo,"But, what’s really implied here is the "),Dt=n(mo,"STRONG",{});var Tr=r(Dt);Ya=a(Tr,"average"),Tr.forEach(t),qa=a(mo,` value. Because the general
mindset in estimations based planning is that you don’t have to be accurate with
each estimation, the law of averages will kick in at the end of the sprint and
sort it all out. And it will. Just not the way you think it should.`),mo.forEach(t),Di=f(e),y=n(e,"P",{});var _=r(y);Ja=a(_,`What everyone is missing is the fact that in an asymmetric probabilities
distribution, the `),Ct=n(_,"STRONG",{});var Or=r(Ct);Qa=a(Or,"average"),Or.forEach(t),$a=a(_," is "),Wt=n(_,"EM",{});var Sr=r(Wt);za=a(Sr,"always larger"),Sr.forEach(t),Ka=a(_," than the "),Bt=n(_,"STRONG",{});var xr=r(Bt);Va=a(xr,"mode"),xr.forEach(t),Xa=a(_,` or the
`),Ft=n(_,"STRONG",{});var Gr=r(Ft);Za=a(Gr,"mean"),Gr.forEach(t),es=a(_,` value. Meaning that your averages will always be larger than your
estimations. And the more complex the task is, the bigger the gap. The work
therefore, on average, will `),Ut=n(_,"EM",{});var Nr=r(Ut);ts=a(Nr,"always"),Nr.forEach(t),is=a(_," take longer than estimated."),_.forEach(t),Ci=f(e),Ie=n(e,"P",{});var Rr=r(Ie);os=a(Rr,"Because the math says so."),Rr.forEach(t),Wi=f(e),q=n(e,"H2",{id:!0});var cn=r(q);J=n(cn,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Dr=r(J);Lt=n(Dr,"SPAN",{class:!0}),r(Lt).forEach(t),Dr.forEach(t),as=a(cn,"Accuracy and precision"),cn.forEach(t),Bi=f(e),Pe=n(e,"P",{});var Cr=r(Pe);ss=a(Cr,`When it comes to any measurement, there are two elements to the problem,
accuracy and precision; or sometimes they go by the names of bias and
variability.`),Cr.forEach(t),Fi=f(e),Q=n(e,"UL",{});var fo=r(Q);$=n(fo,"LI",{});var li=r($);jt=n(li,"CODE",{});var Wr=r(jt);ns=a(Wr,"precision"),Wr.forEach(t),rs=a(li," or "),Mt=n(li,"CODE",{});var Br=r(Mt);ls=a(Br,"variability"),Br.forEach(t),hs=a(li,` refers to how wide spread the measurement results
are`),li.forEach(t),us=f(fo),z=n(fo,"LI",{});var hi=r(z);Ht=n(hi,"CODE",{});var Fr=r(Ht);ms=a(Fr,"accuracy"),Fr.forEach(t),fs=a(hi," or "),Yt=n(hi,"CODE",{});var Ur=r(Yt);cs=a(Ur,"bias"),Ur.forEach(t),ds=a(hi," is how close the results are to the actual/true value"),hi.forEach(t),fo.forEach(t),Ui=f(e),K=n(e,"FIGURE",{class:!0});var dn=r(K);Te=n(dn,"IMG",{src:!0,alt:!0}),qt=n(dn,"FIGCAPTION",{});var Lr=r(qt);ps=a(Lr,"Accuracy and precision"),Lr.forEach(t),dn.forEach(t),Li=f(e),Oe=n(e,"P",{});var jr=r(Oe);ys=a(jr,`Or, in case of the estimation probabilities distribution graph, it looks like
so:`),jr.forEach(t),ji=f(e),V=n(e,"FIGURE",{class:!0});var pn=r(V);Se=n(pn,"IMG",{src:!0,alt:!0}),Jt=n(pn,"FIGCAPTION",{});var Mr=r(Jt);bs=a(Mr,"Accuracy and precision on a graph"),Mr.forEach(t),pn.forEach(t),Mi=f(e),w=n(e,"P",{});var S=r(w);vs=a(S,`You see now, you can whip your team endlessly into “getting better at
estimations”, working on optimal tasks granularity, etc. And it all will go
wrong every single time. Because you will push the team to optimise for the
`),Qt=n(S,"STRONG",{});var Hr=r(Qt);ws=a(Hr,"accuracy"),Hr.forEach(t),gs=a(S," of the "),$t=n(S,"STRONG",{});var Yr=r($t);Es=a(Yr,"mode"),Yr.forEach(t),ks=a(S,` value estimations; they will be aiming at the wrong
thing. And then, the team will be repeatedly punished by the large gap between
the `),zt=n(S,"STRONG",{});var qr=r(zt);_s=a(qr,"mode"),qr.forEach(t),As=a(S," and "),Kt=n(S,"STRONG",{});var Jr=r(Kt);Is=a(Jr,"average"),Jr.forEach(t),Ps=a(S," values."),S.forEach(t),Hi=f(e),xe=n(e,"P",{});var Qr=r(xe);Ts=a(Qr,`This is called a “high precision, low accuracy” situation. It’s like trying to
measure the dimensions of a piece of gooey rubber with high quality calipers.`),Qr.forEach(t),Yi=f(e),P=n(e,"P",{});var qe=r(P);Os=a(qe,`And so, what do the teams do? They pad the crap out of their estimations until
the `),Vt=n(qe,"STRONG",{});var $r=r(Vt);Ss=a($r,"mode"),$r.forEach(t),xs=a(qe," spread overlaps with the "),Xt=n(qe,"STRONG",{});var zr=r(Xt);Gs=a(zr,"average"),zr.forEach(t),Ns=a(qe,` value. Everyone does this.
Either explicitly, or implicitly by using gimmicks like fibonacci numbers, and
averaging team members estimations.`),qe.forEach(t),qi=f(e),X=n(e,"H2",{id:!0});var yn=r(X);Z=n(yn,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Kr=r(Z);Zt=n(Kr,"SPAN",{class:!0}),r(Zt).forEach(t),Kr.forEach(t),Rs=a(yn,"The ugly truth"),yn.forEach(t),Ji=f(e),T=n(e,"P",{});var Je=r(T);Ds=a(Je,`The truth is that nobody knows how long work will really take ahead of time.
Because nobody experienced the tail end of the distribution where the
`),ei=n(Je,"STRONG",{});var Vr=r(ei);Cs=a(Vr,"average"),Vr.forEach(t),Ws=a(Je,` lives. And the more complex a task is, the more dependencies there
are, the less probability that `),ti=n(Je,"EM",{});var Xr=r(ti);Bs=a(Xr,"any"),Xr.forEach(t),Fs=a(Je," estimation will be correct."),Je.forEach(t),Qi=f(e),Ge=n(e,"P",{});var Zr=r(Ge);Us=a(Zr,`Work, especially the hard, critical work takes as long as it takes. Estimations
just lul you into the false sense of control over the situation. Nobody really
knows the answer, but when you produce a number, any number, it gives a plan a
flair of legitimacy. And off you go, telling your boss when it’s going to be
done.`),Zr.forEach(t),$i=f(e),ee=n(e,"FIGURE",{class:!0});var bn=r(ee);Ne=n(bn,"IMG",{src:!0,alt:!0}),ii=n(bn,"FIGCAPTION",{});var el=r(ii);Ls=a(el,"You did this to yourself"),el.forEach(t),bn.forEach(t),zi=f(e),te=n(e,"H2",{id:!0});var vn=r(te);ie=n(vn,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var tl=r(ie);oi=n(tl,"SPAN",{class:!0}),r(oi).forEach(t),tl.forEach(t),js=a(vn,"The final chord"),vn.forEach(t),Ki=f(e),Re=n(e,"P",{});var il=r(Re);Ms=a(il,`And that’s not the worst part yet. Okay, suppose, I’m full of it. Suppose all
that math above doesn’t really exist or totally wrong. Let’s pretend for a
second that your estimations actually are accurate. Like for reals accurate.
What do you think is going to happen?`),il.forEach(t),Vi=f(e),oe=n(e,"P",{});var co=r(oe);Hs=a(co,"Suppose, you have estimated a task will take, say, "),ai=n(co,"STRONG",{});var ol=r(ai);Ys=a(ol,"4 hours"),ol.forEach(t),qs=a(co,`. A PJ sandwich
falls on the jam side every other time, meaning you still have the variability
in your estimations. And, you might finish it in 2 hours, or you might finish it
in 6 with roughly the same probability (because your accuracy is great). What
happens next?`),co.forEach(t),Xi=f(e),De=n(e,"P",{});var al=r(De);Js=a(al,`If you finish early, your manager will think you’re probably not very skilled
because you had to overshoot your estimations by 100%. And if you finish late,
your manager will think you’re probably not very skilled because work took 50%
longer. Either the case, they’ll probably assign you to more scrum training.`),al.forEach(t),Zi=f(e),Ce=n(e,"P",{});var sl=r(Ce);Qs=a(sl,`You see, the thing is, even in an idealised situation, you’re not supposed to
win at this game no matter what. The moment you produce a number — be that
hours, points, or pokemons — you’re screwed. Because everyone’s expectations
will be anchored to the number one way or another. And it’s a wrong number to
begin with.`),sl.forEach(t),eo=f(e),ae=n(e,"H2",{id:!0});var wn=r(ae);se=n(wn,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var nl=r(se);si=n(nl,"SPAN",{class:!0}),r(si).forEach(t),nl.forEach(t),$s=a(wn,"To a manager"),wn.forEach(t),to=f(e),We=n(e,"P",{});var rl=r(We);zs=a(rl,`Well, hello there. Since you’ve made it to management, chances are you’re not
dumb and will be less prone to refuting factual information. So, I’ll be blunt
with you here. A manager has one job, to make sure that resources are applied
optimally. And if your “management style” is rooted in estimations, you won’t be
doing a stellar job at it. Here is why.`),rl.forEach(t),io=f(e),Be=n(e,"P",{});var ll=r(Be);Ks=a(ll,`Due to the mathematical model I’ve described above, chances that you team’s
estimations will be accurate and precise are pretty slim. The only people who
deliver their projects consistently on time and budget is the US army; and they
do that by grossly overestimating everything that moves. For a business entity
that’s an F in resources allocation, which is basically your job description.`),ll.forEach(t),oo=f(e),Fe=n(e,"P",{});var hl=r(Fe);Vs=a(hl,`You obviously can’t underestimate requirements, because that’s a straight up F
in management. So, you’re most likely to try pushing the team to find some form
of a reasonable middle ground in their estimations. Due to the math I’ve
described above it will fail roughly 60% of the time. When your efforts will
eventually piss off enough senior engineers on the team, you will start paying
roughly $70-100k per person for replacements in cash money, all while delaying
your project even further. And yes, that’s an F in management.`),hl.forEach(t),ao=f(e),Ue=n(e,"P",{});var ul=r(Ue);Xs=a(ul,`So, repeat after me “estimations is a form of budgeting”. While budgeting works
great in civil engineering, it is completely counterproductive in software
development. Because software engineering is essentially a break through
development, which is creative R&D work, which is inherently unpredictable.`),ul.forEach(t),so=f(e),Le=n(e,"P",{});var ml=r(Le);Zs=a(ml,`There are better tools to manage software development than budgeting. And unless
it sinks in with you, the team will have little luck changing their ways against
your will.`),ml.forEach(t),no=f(e),ne=n(e,"H2",{id:!0});var gn=r(ne);re=n(gn,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var fl=r(re);ni=n(fl,"SPAN",{class:!0}),r(ni).forEach(t),fl.forEach(t),en=a(gn,"So, what now?"),gn.forEach(t),ro=f(e),je=n(e,"P",{});var cl=r(je);tn=a(cl,`I imagine, you’re probably sitting there by now, thinking to yourself: “well,
thanks, Kai. who do you think you are crushing my world like this?“. And, look,
I’m sorry for dragging you through this, okay? If it will make you feel any
better, it pains me to write those things too; although, admittedly, I kind of
like it.`),cl.forEach(t),lo=f(e),Me=n(e,"P",{});var dl=r(Me);on=a(dl,`But, now you have options. You can either forget all of this and go back to
doing what you used to do. Or, you can come back in a week and read my next
story. Because there is a way out of this mess.`),dl.forEach(t),ho=f(e),He=n(e,"P",{});var pl=r(He);an=a(pl,`Yeah, I know, a shameless plug. But hey, I have mouths to feed, and I need more
eyeballs on my content. So, if you enjoyed the read, or find it useful, please
share in your circles. Thanks muchly, and I’ll see you next time!`),pl.forEach(t),this.h()},h(){he(ue.src,kn=Bl)||u(ue,"src",kn),u(ue,"alt","Dr. Evil agile"),u(G,"class","rehype-figure"),u($e,"class","icon icon-link"),u(R,"aria-hidden","true"),u(R,"tabindex","-1"),u(R,"href","#quick-math"),u(N,"id","quick-math"),u(vt,"class","icon icon-link"),u(C,"aria-hidden","true"),u(C,"tabindex","-1"),u(C,"href","#quick-stats"),u(D,"id","quick-stats"),he(pe.src,_n=Fl)||u(pe,"src",_n),u(pe,"alt","Normal distributions"),u(W,"class","rehype-figure"),he(be.src,An=Ul)||u(be,"src",An),u(be,"alt","Asymmetric distributions"),u(B,"class","rehype-figure"),he(we.src,In=Ll)||u(we,"src",In),u(we,"alt","A bi-modal distribution"),u(F,"class","rehype-figure"),u(St,"class","icon icon-link"),u(L,"aria-hidden","true"),u(L,"tabindex","-1"),u(L,"href","#estimations-math"),u(U,"id","estimations-math"),he(ke.src,Pn=jl)||u(ke,"src",Pn),u(ke,"alt","Estimations probability"),u(j,"class","rehype-figure"),u(Gt,"class","icon icon-link"),u(M,"aria-hidden","true"),u(M,"tabindex","-1"),u(M,"href","#so-what-is-the-problem"),u(I,"id","so-what-is-the-problem"),u(Lt,"class","icon icon-link"),u(J,"aria-hidden","true"),u(J,"tabindex","-1"),u(J,"href","#accuracy-and-precision"),u(q,"id","accuracy-and-precision"),he(Te.src,Tn=Ml)||u(Te,"src",Tn),u(Te,"alt","Accuracy and precision"),u(K,"class","rehype-figure"),he(Se.src,On=Hl)||u(Se,"src",On),u(Se,"alt","Accuracy and precision on a graph"),u(V,"class","rehype-figure"),u(Zt,"class","icon icon-link"),u(Z,"aria-hidden","true"),u(Z,"tabindex","-1"),u(Z,"href","#the-ugly-truth"),u(X,"id","the-ugly-truth"),he(Ne.src,Sn=Yl)||u(Ne,"src",Sn),u(Ne,"alt","You did this to yourself"),u(ee,"class","rehype-figure"),u(oi,"class","icon icon-link"),u(ie,"aria-hidden","true"),u(ie,"tabindex","-1"),u(ie,"href","#the-final-chord"),u(te,"id","the-final-chord"),u(si,"class","icon icon-link"),u(se,"aria-hidden","true"),u(se,"tabindex","-1"),u(se,"href","#to-a-manager"),u(ae,"id","to-a-manager"),u(ni,"class","icon icon-link"),u(re,"aria-hidden","true"),u(re,"tabindex","-1"),u(re,"href","#so-what-now"),u(ne,"id","so-what-now")},m(e,l){h(e,x,l),i(x,po),h(e,ui,l),h(e,G,l),i(G,ue),i(G,Qe),i(Qe,yo),h(e,mi,l),h(e,me,l),i(me,bo),h(e,fi,l),h(e,N,l),i(N,R),i(R,$e),i(N,vo),h(e,ci,l),h(e,fe,l),i(fe,wo),h(e,di,l),h(e,ce,l),i(ce,go),h(e,pi,l),h(e,A,l),i(A,ze),i(ze,d),i(d,Ke),i(Ke,Eo),i(d,ko),i(d,Ve),i(Ve,_o),i(d,Ao),i(d,Xe),i(Xe,Io),i(d,Po),i(d,Ze),i(Ze,To),i(d,Oo),i(d,et),i(et,So),i(d,xo),i(d,tt),i(tt,Go),i(d,No),i(A,Ro),i(A,it),i(it,p),i(p,ot),i(ot,Do),i(p,Co),i(p,at),i(at,Wo),i(p,Bo),i(p,st),i(st,Fo),i(p,Uo),i(p,nt),i(nt,Lo),i(p,jo),i(p,rt),i(rt,Mo),i(p,Ho),i(p,lt),i(lt,Yo),i(p,qo),i(A,Jo),i(A,ht),i(ht,c),i(c,ut),i(ut,Qo),i(c,$o),i(c,mt),i(mt,zo),i(c,Ko),i(c,ft),i(ft,Vo),i(c,Xo),i(c,ct),i(ct,Zo),i(c,ea),i(c,dt),i(dt,ta),i(c,ia),i(c,pt),i(pt,oa),i(c,aa),i(c,yt),i(yt,sa),i(c,na),i(c,bt),i(bt,ra),h(e,yi,l),h(e,D,l),i(D,C),i(C,vt),i(D,la),h(e,bi,l),h(e,de,l),i(de,ha),h(e,vi,l),h(e,W,l),i(W,pe),i(W,wt),i(wt,ua),h(e,wi,l),h(e,k,l),i(k,ma),i(k,gt),i(gt,fa),i(k,ca),i(k,Et),i(Et,da),i(k,pa),i(k,kt),i(kt,ya),i(k,ba),h(e,gi,l),h(e,ye,l),i(ye,va),h(e,Ei,l),h(e,B,l),i(B,be),i(B,_t),i(_t,wa),h(e,ki,l),h(e,v,l),i(v,ga),i(v,At),i(At,Ea),i(v,ka),i(v,It),i(It,_a),i(v,Aa),i(v,Pt),i(Pt,Ia),i(v,Pa),i(v,Tt),i(Tt,Ta),i(v,Oa),h(e,_i,l),h(e,ve,l),i(ve,Sa),h(e,Ai,l),h(e,F,l),i(F,we),i(F,Ot),i(Ot,xa),h(e,Ii,l),h(e,ge,l),i(ge,Ga),h(e,Pi,l),h(e,U,l),i(U,L),i(L,St),i(U,Na),h(e,Ti,l),h(e,Ee,l),i(Ee,Ra),h(e,Oi,l),h(e,j,l),i(j,ke),i(j,xt),i(xt,Da),h(e,Si,l),h(e,_e,l),i(_e,Ca),h(e,xi,l),h(e,Ae,l),i(Ae,Wa),h(e,Gi,l),h(e,I,l),i(I,M),i(M,Gt),i(I,Ba),i(I,Nt),i(Nt,Fa),i(I,Ua),h(e,Ni,l),h(e,H,l),i(H,La),i(H,Rt),i(Rt,ja),i(H,Ma),h(e,Ri,l),h(e,Y,l),i(Y,Ha),i(Y,Dt),i(Dt,Ya),i(Y,qa),h(e,Di,l),h(e,y,l),i(y,Ja),i(y,Ct),i(Ct,Qa),i(y,$a),i(y,Wt),i(Wt,za),i(y,Ka),i(y,Bt),i(Bt,Va),i(y,Xa),i(y,Ft),i(Ft,Za),i(y,es),i(y,Ut),i(Ut,ts),i(y,is),h(e,Ci,l),h(e,Ie,l),i(Ie,os),h(e,Wi,l),h(e,q,l),i(q,J),i(J,Lt),i(q,as),h(e,Bi,l),h(e,Pe,l),i(Pe,ss),h(e,Fi,l),h(e,Q,l),i(Q,$),i($,jt),i(jt,ns),i($,rs),i($,Mt),i(Mt,ls),i($,hs),i(Q,us),i(Q,z),i(z,Ht),i(Ht,ms),i(z,fs),i(z,Yt),i(Yt,cs),i(z,ds),h(e,Ui,l),h(e,K,l),i(K,Te),i(K,qt),i(qt,ps),h(e,Li,l),h(e,Oe,l),i(Oe,ys),h(e,ji,l),h(e,V,l),i(V,Se),i(V,Jt),i(Jt,bs),h(e,Mi,l),h(e,w,l),i(w,vs),i(w,Qt),i(Qt,ws),i(w,gs),i(w,$t),i($t,Es),i(w,ks),i(w,zt),i(zt,_s),i(w,As),i(w,Kt),i(Kt,Is),i(w,Ps),h(e,Hi,l),h(e,xe,l),i(xe,Ts),h(e,Yi,l),h(e,P,l),i(P,Os),i(P,Vt),i(Vt,Ss),i(P,xs),i(P,Xt),i(Xt,Gs),i(P,Ns),h(e,qi,l),h(e,X,l),i(X,Z),i(Z,Zt),i(X,Rs),h(e,Ji,l),h(e,T,l),i(T,Ds),i(T,ei),i(ei,Cs),i(T,Ws),i(T,ti),i(ti,Bs),i(T,Fs),h(e,Qi,l),h(e,Ge,l),i(Ge,Us),h(e,$i,l),h(e,ee,l),i(ee,Ne),i(ee,ii),i(ii,Ls),h(e,zi,l),h(e,te,l),i(te,ie),i(ie,oi),i(te,js),h(e,Ki,l),h(e,Re,l),i(Re,Ms),h(e,Vi,l),h(e,oe,l),i(oe,Hs),i(oe,ai),i(ai,Ys),i(oe,qs),h(e,Xi,l),h(e,De,l),i(De,Js),h(e,Zi,l),h(e,Ce,l),i(Ce,Qs),h(e,eo,l),h(e,ae,l),i(ae,se),i(se,si),i(ae,$s),h(e,to,l),h(e,We,l),i(We,zs),h(e,io,l),h(e,Be,l),i(Be,Ks),h(e,oo,l),h(e,Fe,l),i(Fe,Vs),h(e,ao,l),h(e,Ue,l),i(Ue,Xs),h(e,so,l),h(e,Le,l),i(Le,Zs),h(e,no,l),h(e,ne,l),i(ne,re),i(re,ni),i(ne,en),h(e,ro,l),h(e,je,l),i(je,tn),h(e,lo,l),h(e,Me,l),i(Me,on),h(e,ho,l),h(e,He,l),i(He,an)},p:En,i:En,o:En,d(e){e&&t(x),e&&t(ui),e&&t(G),e&&t(mi),e&&t(me),e&&t(fi),e&&t(N),e&&t(ci),e&&t(fe),e&&t(di),e&&t(ce),e&&t(pi),e&&t(A),e&&t(yi),e&&t(D),e&&t(bi),e&&t(de),e&&t(vi),e&&t(W),e&&t(wi),e&&t(k),e&&t(gi),e&&t(ye),e&&t(Ei),e&&t(B),e&&t(ki),e&&t(v),e&&t(_i),e&&t(ve),e&&t(Ai),e&&t(F),e&&t(Ii),e&&t(ge),e&&t(Pi),e&&t(U),e&&t(Ti),e&&t(Ee),e&&t(Oi),e&&t(j),e&&t(Si),e&&t(_e),e&&t(xi),e&&t(Ae),e&&t(Gi),e&&t(I),e&&t(Ni),e&&t(H),e&&t(Ri),e&&t(Y),e&&t(Di),e&&t(y),e&&t(Ci),e&&t(Ie),e&&t(Wi),e&&t(q),e&&t(Bi),e&&t(Pe),e&&t(Fi),e&&t(Q),e&&t(Ui),e&&t(K),e&&t(Li),e&&t(Oe),e&&t(ji),e&&t(V),e&&t(Mi),e&&t(w),e&&t(Hi),e&&t(xe),e&&t(Yi),e&&t(P),e&&t(qi),e&&t(X),e&&t(Ji),e&&t(T),e&&t(Qi),e&&t(Ge),e&&t($i),e&&t(ee),e&&t(zi),e&&t(te),e&&t(Ki),e&&t(Re),e&&t(Vi),e&&t(oe),e&&t(Xi),e&&t(De),e&&t(Zi),e&&t(Ce),e&&t(eo),e&&t(ae),e&&t(to),e&&t(We),e&&t(io),e&&t(Be),e&&t(oo),e&&t(Fe),e&&t(ao),e&&t(Ue),e&&t(so),e&&t(Le),e&&t(no),e&&t(ne),e&&t(ro),e&&t(je),e&&t(lo),e&&t(Me),e&&t(ho),e&&t(He)}}}const Ql={slug:"3OvR4",date:"22 Feb 2023",title:"Why estimations don't really work",description:"Destroying the hopes and dreams of those relying on estimations in their delivery planning",thumbnail:Wl,tags:["planning","agile","management"]};class $l extends bl{constructor(x){super(),vl(this,x,null,ql,wl,{})}}export{$l as default,Ql as metadata};
