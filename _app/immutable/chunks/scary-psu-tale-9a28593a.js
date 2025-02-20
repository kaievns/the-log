import{S as sa,i as ra,s as la,k as r,q as n,a as c,l,m as i,r as h,h as t,c as u,H as co,n as p,b as a,F as s,C as uo}from"./index-920be987.js";const ia="png",na=1200,ha=600,ca="srgb",ua=3,pa="uchar",fa=72,da=!1,wa=!1,ma=!1,ya=void 0,ba=!0,va=!1,Pa=""+new URL("../assets/psu-cable-e94f3296.png",import.meta.url).href,ka={format:ia,width:na,height:ha,space:ca,channels:ua,depth:pa,density:fa,isProgressive:da,hasProfile:wa,hasAlpha:ma,aspect:ya,withoutEnlargement:ba,withoutReduction:va,src:Pa},Ea=""+new URL("../assets/psu-cable-a6ed6acb.webp",import.meta.url).href,_a=""+new URL("../assets/molex-connector-de347fce.png",import.meta.url).href,ga=""+new URL("../assets/24-pin-connector-schematics-6d6129ae.png",import.meta.url).href;function Ua(aa){let f,T,po,ie,it,Ee,W,ne,nt,_e,x,ht,ge,m,y,he,ct,Ue,M,ut,Ie,N,pt,Se,G,ft,Ae,b,O,fo,ce,dt,Ce,D,wt,Te,B,mt,We,v,P,ue,yt,xe,j,bt,Me,q,vt,Ne,k,F,wo,pe,Pt,Ge,E,kt,fe,Et,_t,Oe,H,gt,De,d,Ut,de,It,St,we,At,Ct,Be,L,Tt,je,R,Wt,qe,_,g,me,xt,Fe,U,Mt,ye,Nt,Gt,He,w,Ot,be,Dt,Bt,ve,jt,qt,Le,V,Ft,Re,X,Ht,Ve,z,Lt,Xe,I,S,Pe,Rt,ze,K,Vt,Ke,Q,Xt,Qe,J,zt,Je,Y,Kt,Ye,Z,Qt,Ze,$,Jt,$e,A,C,ke,Yt,et,ee,Zt,tt,te,$t,ot,oe,eo,at,ae,to,st,se,oo;return{c(){f=r("figure"),T=r("img"),ie=r("figcaption"),it=n("Scary PSU cable"),Ee=c(),W=r("blockquote"),ne=r("p"),nt=n("WTF Kai, you can’t do this! It will blow up!"),_e=c(),x=r("p"),ht=n("And so here is a little story of why and how."),ge=c(),m=r("h2"),y=r("a"),he=r("span"),ct=n("The brief history of the Molex connector"),Ue=c(),M=r("p"),ut=n("Anyone who ever worked with PC hardware saw Molex connectors. That’s the wiring that goes from a PSU to a motherboard. The 24-pin motherboard and 8-pin CPU power cables are as ubiquitous as they come. But do you know where they come from?"),Ie=c(),N=r("p"),pt=n("Well, you see, Molex LLC was founded in 1938 and began its history by making flower pots out of plastic that was made of leftover asbestos shreds, coal tar, and limestone. They called the plastic Molex. They also made salt shakers out of the stuff apparently."),Se=c(),G=r("p"),ft=n("In 1950s they ventured into electronics and patented the 4-pin Molex connector which became ubiquitous in all sorts of electronics. It wasn’t actually made of Molex but white nylon that everybody knows to the day"),Ae=c(),b=r("figure"),O=r("img"),ce=r("figcaption"),dt=n("o/g molex connector"),Ce=c(),D=r("p"),wt=n("It was hugely popular in all sorts of electronics, appliances, cars manufacturing. And then it became the standard for all the PC hardware. All those old 5-inch and later 3-inch slots on PCs used to be powered by those 4-pin AMP connectors."),Te=c(),B=r("p"),mt=n("Later, the use was expanded to 24-pin connectors; which are still almost in every car and motherboard on the planet. With the advent of more power hungry CPUs we added the 4+4 CPU power cable. And when we started making those crazy GPUs we started using the same thing for all sorts PCIe power cables too."),We=c(),v=r("h2"),P=r("a"),ue=r("span"),yt=n("How does it work?"),xe=c(),j=r("p"),bt=n("Why the history lesson? Well, you see, those connectors didn’t actually get any smarter since the days when we used to make salt shakers out of asbestos that held together by coal tar. These are mostly just dumb wires."),Me=c(),q=r("p"),vt=n("Most of the PSUs are still mostly dumb too. I mean, up to the very recent times they didn’t even use GaN MOSFETs in them. And, the wast majority of PSUs still have a single power rail. The real reason we have those many wires going from a PSU to a motherboard is not because we need that many actual wires but because those connectors suck. We have a whole bunch of them running in parallel so they wouldn’t melt."),Ne=c(),k=r("figure"),F=r("img"),pe=r("figcaption"),Pt=n("24-pin connector pinout"),Ge=c(),E=r("p"),kt=n("Here is the 24-pin motherboard connector schematics for example. Do you see all those duplicate wires? That’s what i’m talking about. The only “smart” wire here is that green "),fe=r("code"),Et=n("PS_ON"),_t=n(" pin. More on that in a second."),Oe=c(),H=r("p"),gt=n("What I want you to understand is that this all is still 1950s era tech that is like QWERTY and skewed keyboards just stuck around for whatever reason. And these PSUs themselves has no idea what’s actually connected on the other side of that cable. It doesn’t have any concept of the number of devices connected to them either."),De=c(),d=r("p"),Ut=n("The way it works is that when you connect that green "),de=r("code"),It=n("PS_ON"),St=n(" wire to "),we=r("code"),At=n("GND"),Ct=n(" — that’s where your power button is basically connected — it tells the PSU to switch from a standby mode to normal power delivery and start feeding energy into the cable."),Be=c(),L=r("p"),Tt=n("When you ground that wire one more time, it will wait for the computer to stop sucking the energy aka shutdown and then it will go into a standby mode."),je=c(),R=r("p"),Wt=n("And that’s it. There is nothing else going on in the whole power delivery system in a PC."),qe=c(),_=r("h2"),g=r("a"),me=r("span"),xt=n("So what happens in a splitter?"),Fe=c(),U=r("p"),Mt=n("Well, okay, first of all, I lied when I said that the power button connected to "),ye=r("code"),Nt=n("PS_ON"),Gt=n(", it’s a bit more complicated than that, but not by much. Basically starting a CPU is a two step process: step one power it up, step two kick off the ticker. The reason for that is that power doesn’t just magically appears everywhere when PSU turns ON, there are delays and spikes in energy delivery and hardware will wait until its fully powered before it kicks off the CPU. And that’s what the power button does."),He=c(),w=r("p"),Ot=n("And so, if we have 2+ motherboards connected in parallel here is what happens. When you press the power button on the first motherboard, it will power up "),be=r("em"),Dt=n("all"),Bt=n(" the motherboards at the same time, and then it will boot "),ve=r("em"),jt=n("only"),qt=n(" the motherboard which button you pressed. All the other motherboards will be powered but won’t actually started."),Le=c(),V=r("p"),Ft=n("After that you can press power buttons on other motherboards one by one and they will start as normal. They’ll just skip the power on process because they will already be under power."),Re=c(),X=r("p"),Ht=n("Powering them down works basically in reverse. When you press the power button it will send a signal to PSU to wait for the motherboard to shutdown and then go into standby. That signal can be sent multiple times from each motherboard. PSU will just wait until the last motherboard shuts down and then turn itself off."),Ve=c(),z=r("p"),Lt=n("It feels almost like three separate PCs, no matter the fact that they are powered by a single PSU under the hood. And considering that this is a 24/7 homelab server, i don’t even have to do that unless I’m pulling the thing apart for upgrades or what’s not."),Xe=c(),I=r("h2"),S=r("a"),Pe=r("span"),Rt=n("Playing with fire"),ze=c(),K=r("p"),Vt=n("Okay lets make something clear here, I’ve made my share of all sorts of cables, but I’m not a god of cabling or anything like that. If anything my crimpling skills are probably average at best. And so when we’re connecting something to a 1000W PSU we probably need to think twice about the loads and such. Because that’s about 1.25 horse powers in real terms, and this PSU could probably bench press half a dozen average software engineers if it really wanted to."),Ke=c(),Q=r("p"),Xt=n("Most power cables in a PC made of 18 gauge copper wire, which is good for about 5A of current. That’s about 15 Watts per 3V wire, or 25 Watts per a 5V wire, or 60W per a 12V wire. A normal CPU connector runs 4x12V wires, which equals to about 240W of energy. Plus the 24-pin connector wiring can carry about 300W."),Qe=c(),J=r("p"),zt=n("Even one of the beefiest consumer grade CPUs like AMD 9800X3D CPU has 120W TDP. And so, what I’m saying here is that the wires themselves in those setups are rarely the problem. The problem is the connector itself. If the crimpling is done more or less well, the only part that matters is the overall load on the wiring. More specifically on the CPU part of it, because the motherboard doesn’t consume nowhere near that amount of energy in normal circumstances."),Je=c(),Y=r("p"),Kt=n("If I needed to connect three 9800X3Ds to the same PSU I would probably consider connecting them with separate wires to the PSU and use a shared 24-pin cable for the motherboards. But, in my case I’m dealing with AMD 7945HX CPUs which are laptop CPUs factory overclocked to max 80W TDP."),Ye=c(),Z=r("p"),Qt=n("Even at the full blast that will be 3x80=240Watts total, which is well within the capacity of a good quality 18 gauge wire, and there are still three independent connectors to carry tho loads as usual. Moreover in my case, the first leg of the cable is actually made of slightly thicker 16 gauge wire rated to 7 Amps which makes it good to carry up to 330W of energy."),Ze=c(),$=r("p"),Jt=n("And so, unless I have majorly screwed up wire crimpling this should be fine in my case."),$e=c(),A=r("h2"),C=r("a"),ke=r("span"),Yt=n("I wish…"),et=c(),ee=r("p"),Zt=n("I’ll be honest with you, in the days of ubiquitous smart and super efficient GaN charges, and USB-C 3.1 PD protocols that can deliver up to 240W continuously via an USB-C connector, having those Molex plugs made with a hammer and sickle feels weirdly out of place."),tt=c(),te=r("p"),$t=n("PC PSUs are mostly inferior in terms to efficiency comparing to GaN MOSFETs, and they’re bulky and mostly empty too actually."),ot=c(),oe=r("p"),eo=n("And I can’t help but wish they’d just be done with those Molex connectors nonsense and just have USB-Cs for everything. Get rid of the 4 pin fan connectors, and front panel pins, and USB-A breakouts, and ethernet ports; everything. Just add a bunch of USB-Cs everywhere."),at=c(),ae=r("p"),to=n("Why do we need all that 1950s era nonsense in 2025? Wifi 6E routinely pushes over 5Gbs, and usb-c 4 can get 40Gbs of data through while delivering 240W of energy. On the same cable!"),st=c(),se=r("p"),oo=n("Because trust me, I don’t want to hand make custom power cables so I could plug a bunch of stuff to the same power block. This is just dumb."),this.h()},l(e){f=l(e,"FIGURE",{class:!0});var o=i(f);T=l(o,"IMG",{src:!0,alt:!0}),ie=l(o,"FIGCAPTION",{});var mo=i(ie);it=h(mo,"Scary PSU cable"),mo.forEach(t),o.forEach(t),Ee=u(e),W=l(e,"BLOCKQUOTE",{});var yo=i(W);ne=l(yo,"P",{});var bo=i(ne);nt=h(bo,"WTF Kai, you can’t do this! It will blow up!"),bo.forEach(t),yo.forEach(t),_e=u(e),x=l(e,"P",{});var vo=i(x);ht=h(vo,"And so here is a little story of why and how."),vo.forEach(t),ge=u(e),m=l(e,"H2",{id:!0});var ao=i(m);y=l(ao,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Po=i(y);he=l(Po,"SPAN",{class:!0}),i(he).forEach(t),Po.forEach(t),ct=h(ao,"The brief history of the Molex connector"),ao.forEach(t),Ue=u(e),M=l(e,"P",{});var ko=i(M);ut=h(ko,"Anyone who ever worked with PC hardware saw Molex connectors. That’s the wiring that goes from a PSU to a motherboard. The 24-pin motherboard and 8-pin CPU power cables are as ubiquitous as they come. But do you know where they come from?"),ko.forEach(t),Ie=u(e),N=l(e,"P",{});var Eo=i(N);pt=h(Eo,"Well, you see, Molex LLC was founded in 1938 and began its history by making flower pots out of plastic that was made of leftover asbestos shreds, coal tar, and limestone. They called the plastic Molex. They also made salt shakers out of the stuff apparently."),Eo.forEach(t),Se=u(e),G=l(e,"P",{});var _o=i(G);ft=h(_o,"In 1950s they ventured into electronics and patented the 4-pin Molex connector which became ubiquitous in all sorts of electronics. It wasn’t actually made of Molex but white nylon that everybody knows to the day"),_o.forEach(t),Ae=u(e),b=l(e,"FIGURE",{class:!0});var so=i(b);O=l(so,"IMG",{src:!0,alt:!0}),ce=l(so,"FIGCAPTION",{});var go=i(ce);dt=h(go,"o/g molex connector"),go.forEach(t),so.forEach(t),Ce=u(e),D=l(e,"P",{});var Uo=i(D);wt=h(Uo,"It was hugely popular in all sorts of electronics, appliances, cars manufacturing. And then it became the standard for all the PC hardware. All those old 5-inch and later 3-inch slots on PCs used to be powered by those 4-pin AMP connectors."),Uo.forEach(t),Te=u(e),B=l(e,"P",{});var Io=i(B);mt=h(Io,"Later, the use was expanded to 24-pin connectors; which are still almost in every car and motherboard on the planet. With the advent of more power hungry CPUs we added the 4+4 CPU power cable. And when we started making those crazy GPUs we started using the same thing for all sorts PCIe power cables too."),Io.forEach(t),We=u(e),v=l(e,"H2",{id:!0});var ro=i(v);P=l(ro,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var So=i(P);ue=l(So,"SPAN",{class:!0}),i(ue).forEach(t),So.forEach(t),yt=h(ro,"How does it work?"),ro.forEach(t),xe=u(e),j=l(e,"P",{});var Ao=i(j);bt=h(Ao,"Why the history lesson? Well, you see, those connectors didn’t actually get any smarter since the days when we used to make salt shakers out of asbestos that held together by coal tar. These are mostly just dumb wires."),Ao.forEach(t),Me=u(e),q=l(e,"P",{});var Co=i(q);vt=h(Co,"Most of the PSUs are still mostly dumb too. I mean, up to the very recent times they didn’t even use GaN MOSFETs in them. And, the wast majority of PSUs still have a single power rail. The real reason we have those many wires going from a PSU to a motherboard is not because we need that many actual wires but because those connectors suck. We have a whole bunch of them running in parallel so they wouldn’t melt."),Co.forEach(t),Ne=u(e),k=l(e,"FIGURE",{class:!0});var lo=i(k);F=l(lo,"IMG",{src:!0,alt:!0}),pe=l(lo,"FIGCAPTION",{});var To=i(pe);Pt=h(To,"24-pin connector pinout"),To.forEach(t),lo.forEach(t),Ge=u(e),E=l(e,"P",{});var rt=i(E);kt=h(rt,"Here is the 24-pin motherboard connector schematics for example. Do you see all those duplicate wires? That’s what i’m talking about. The only “smart” wire here is that green "),fe=l(rt,"CODE",{});var Wo=i(fe);Et=h(Wo,"PS_ON"),Wo.forEach(t),_t=h(rt," pin. More on that in a second."),rt.forEach(t),Oe=u(e),H=l(e,"P",{});var xo=i(H);gt=h(xo,"What I want you to understand is that this all is still 1950s era tech that is like QWERTY and skewed keyboards just stuck around for whatever reason. And these PSUs themselves has no idea what’s actually connected on the other side of that cable. It doesn’t have any concept of the number of devices connected to them either."),xo.forEach(t),De=u(e),d=l(e,"P",{});var re=i(d);Ut=h(re,"The way it works is that when you connect that green "),de=l(re,"CODE",{});var Mo=i(de);It=h(Mo,"PS_ON"),Mo.forEach(t),St=h(re," wire to "),we=l(re,"CODE",{});var No=i(we);At=h(No,"GND"),No.forEach(t),Ct=h(re," — that’s where your power button is basically connected — it tells the PSU to switch from a standby mode to normal power delivery and start feeding energy into the cable."),re.forEach(t),Be=u(e),L=l(e,"P",{});var Go=i(L);Tt=h(Go,"When you ground that wire one more time, it will wait for the computer to stop sucking the energy aka shutdown and then it will go into a standby mode."),Go.forEach(t),je=u(e),R=l(e,"P",{});var Oo=i(R);Wt=h(Oo,"And that’s it. There is nothing else going on in the whole power delivery system in a PC."),Oo.forEach(t),qe=u(e),_=l(e,"H2",{id:!0});var io=i(_);g=l(io,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Do=i(g);me=l(Do,"SPAN",{class:!0}),i(me).forEach(t),Do.forEach(t),xt=h(io,"So what happens in a splitter?"),io.forEach(t),Fe=u(e),U=l(e,"P",{});var lt=i(U);Mt=h(lt,"Well, okay, first of all, I lied when I said that the power button connected to "),ye=l(lt,"CODE",{});var Bo=i(ye);Nt=h(Bo,"PS_ON"),Bo.forEach(t),Gt=h(lt,", it’s a bit more complicated than that, but not by much. Basically starting a CPU is a two step process: step one power it up, step two kick off the ticker. The reason for that is that power doesn’t just magically appears everywhere when PSU turns ON, there are delays and spikes in energy delivery and hardware will wait until its fully powered before it kicks off the CPU. And that’s what the power button does."),lt.forEach(t),He=u(e),w=l(e,"P",{});var le=i(w);Ot=h(le,"And so, if we have 2+ motherboards connected in parallel here is what happens. When you press the power button on the first motherboard, it will power up "),be=l(le,"EM",{});var jo=i(be);Dt=h(jo,"all"),jo.forEach(t),Bt=h(le," the motherboards at the same time, and then it will boot "),ve=l(le,"EM",{});var qo=i(ve);jt=h(qo,"only"),qo.forEach(t),qt=h(le," the motherboard which button you pressed. All the other motherboards will be powered but won’t actually started."),le.forEach(t),Le=u(e),V=l(e,"P",{});var Fo=i(V);Ft=h(Fo,"After that you can press power buttons on other motherboards one by one and they will start as normal. They’ll just skip the power on process because they will already be under power."),Fo.forEach(t),Re=u(e),X=l(e,"P",{});var Ho=i(X);Ht=h(Ho,"Powering them down works basically in reverse. When you press the power button it will send a signal to PSU to wait for the motherboard to shutdown and then go into standby. That signal can be sent multiple times from each motherboard. PSU will just wait until the last motherboard shuts down and then turn itself off."),Ho.forEach(t),Ve=u(e),z=l(e,"P",{});var Lo=i(z);Lt=h(Lo,"It feels almost like three separate PCs, no matter the fact that they are powered by a single PSU under the hood. And considering that this is a 24/7 homelab server, i don’t even have to do that unless I’m pulling the thing apart for upgrades or what’s not."),Lo.forEach(t),Xe=u(e),I=l(e,"H2",{id:!0});var no=i(I);S=l(no,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Ro=i(S);Pe=l(Ro,"SPAN",{class:!0}),i(Pe).forEach(t),Ro.forEach(t),Rt=h(no,"Playing with fire"),no.forEach(t),ze=u(e),K=l(e,"P",{});var Vo=i(K);Vt=h(Vo,"Okay lets make something clear here, I’ve made my share of all sorts of cables, but I’m not a god of cabling or anything like that. If anything my crimpling skills are probably average at best. And so when we’re connecting something to a 1000W PSU we probably need to think twice about the loads and such. Because that’s about 1.25 horse powers in real terms, and this PSU could probably bench press half a dozen average software engineers if it really wanted to."),Vo.forEach(t),Ke=u(e),Q=l(e,"P",{});var Xo=i(Q);Xt=h(Xo,"Most power cables in a PC made of 18 gauge copper wire, which is good for about 5A of current. That’s about 15 Watts per 3V wire, or 25 Watts per a 5V wire, or 60W per a 12V wire. A normal CPU connector runs 4x12V wires, which equals to about 240W of energy. Plus the 24-pin connector wiring can carry about 300W."),Xo.forEach(t),Qe=u(e),J=l(e,"P",{});var zo=i(J);zt=h(zo,"Even one of the beefiest consumer grade CPUs like AMD 9800X3D CPU has 120W TDP. And so, what I’m saying here is that the wires themselves in those setups are rarely the problem. The problem is the connector itself. If the crimpling is done more or less well, the only part that matters is the overall load on the wiring. More specifically on the CPU part of it, because the motherboard doesn’t consume nowhere near that amount of energy in normal circumstances."),zo.forEach(t),Je=u(e),Y=l(e,"P",{});var Ko=i(Y);Kt=h(Ko,"If I needed to connect three 9800X3Ds to the same PSU I would probably consider connecting them with separate wires to the PSU and use a shared 24-pin cable for the motherboards. But, in my case I’m dealing with AMD 7945HX CPUs which are laptop CPUs factory overclocked to max 80W TDP."),Ko.forEach(t),Ye=u(e),Z=l(e,"P",{});var Qo=i(Z);Qt=h(Qo,"Even at the full blast that will be 3x80=240Watts total, which is well within the capacity of a good quality 18 gauge wire, and there are still three independent connectors to carry tho loads as usual. Moreover in my case, the first leg of the cable is actually made of slightly thicker 16 gauge wire rated to 7 Amps which makes it good to carry up to 330W of energy."),Qo.forEach(t),Ze=u(e),$=l(e,"P",{});var Jo=i($);Jt=h(Jo,"And so, unless I have majorly screwed up wire crimpling this should be fine in my case."),Jo.forEach(t),$e=u(e),A=l(e,"H2",{id:!0});var ho=i(A);C=l(ho,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Yo=i(C);ke=l(Yo,"SPAN",{class:!0}),i(ke).forEach(t),Yo.forEach(t),Yt=h(ho,"I wish…"),ho.forEach(t),et=u(e),ee=l(e,"P",{});var Zo=i(ee);Zt=h(Zo,"I’ll be honest with you, in the days of ubiquitous smart and super efficient GaN charges, and USB-C 3.1 PD protocols that can deliver up to 240W continuously via an USB-C connector, having those Molex plugs made with a hammer and sickle feels weirdly out of place."),Zo.forEach(t),tt=u(e),te=l(e,"P",{});var $o=i(te);$t=h($o,"PC PSUs are mostly inferior in terms to efficiency comparing to GaN MOSFETs, and they’re bulky and mostly empty too actually."),$o.forEach(t),ot=u(e),oe=l(e,"P",{});var ea=i(oe);eo=h(ea,"And I can’t help but wish they’d just be done with those Molex connectors nonsense and just have USB-Cs for everything. Get rid of the 4 pin fan connectors, and front panel pins, and USB-A breakouts, and ethernet ports; everything. Just add a bunch of USB-Cs everywhere."),ea.forEach(t),at=u(e),ae=l(e,"P",{});var ta=i(ae);to=h(ta,"Why do we need all that 1950s era nonsense in 2025? Wifi 6E routinely pushes over 5Gbs, and usb-c 4 can get 40Gbs of data through while delivering 240W of energy. On the same cable!"),ta.forEach(t),st=u(e),se=l(e,"P",{});var oa=i(se);oo=h(oa,"Because trust me, I don’t want to hand make custom power cables so I could plug a bunch of stuff to the same power block. This is just dumb."),oa.forEach(t),this.h()},h(){co(T.src,po=Ea)||p(T,"src",po),p(T,"alt","Scary PSU cable"),p(f,"class","rehype-figure"),p(he,"class","icon icon-link"),p(y,"aria-hidden","true"),p(y,"tabindex","-1"),p(y,"href","#the-brief-history-of-the-molex-connector"),p(m,"id","the-brief-history-of-the-molex-connector"),co(O.src,fo=_a)||p(O,"src",fo),p(O,"alt","o/g molex connector"),p(b,"class","rehype-figure"),p(ue,"class","icon icon-link"),p(P,"aria-hidden","true"),p(P,"tabindex","-1"),p(P,"href","#how-does-it-work"),p(v,"id","how-does-it-work"),co(F.src,wo=ga)||p(F,"src",wo),p(F,"alt","24-pin connector pinout"),p(k,"class","rehype-figure"),p(me,"class","icon icon-link"),p(g,"aria-hidden","true"),p(g,"tabindex","-1"),p(g,"href","#so-what-happens-in-a-splitter"),p(_,"id","so-what-happens-in-a-splitter"),p(Pe,"class","icon icon-link"),p(S,"aria-hidden","true"),p(S,"tabindex","-1"),p(S,"href","#playing-with-fire"),p(I,"id","playing-with-fire"),p(ke,"class","icon icon-link"),p(C,"aria-hidden","true"),p(C,"tabindex","-1"),p(C,"href","#i-wish"),p(A,"id","i-wish")},m(e,o){a(e,f,o),s(f,T),s(f,ie),s(ie,it),a(e,Ee,o),a(e,W,o),s(W,ne),s(ne,nt),a(e,_e,o),a(e,x,o),s(x,ht),a(e,ge,o),a(e,m,o),s(m,y),s(y,he),s(m,ct),a(e,Ue,o),a(e,M,o),s(M,ut),a(e,Ie,o),a(e,N,o),s(N,pt),a(e,Se,o),a(e,G,o),s(G,ft),a(e,Ae,o),a(e,b,o),s(b,O),s(b,ce),s(ce,dt),a(e,Ce,o),a(e,D,o),s(D,wt),a(e,Te,o),a(e,B,o),s(B,mt),a(e,We,o),a(e,v,o),s(v,P),s(P,ue),s(v,yt),a(e,xe,o),a(e,j,o),s(j,bt),a(e,Me,o),a(e,q,o),s(q,vt),a(e,Ne,o),a(e,k,o),s(k,F),s(k,pe),s(pe,Pt),a(e,Ge,o),a(e,E,o),s(E,kt),s(E,fe),s(fe,Et),s(E,_t),a(e,Oe,o),a(e,H,o),s(H,gt),a(e,De,o),a(e,d,o),s(d,Ut),s(d,de),s(de,It),s(d,St),s(d,we),s(we,At),s(d,Ct),a(e,Be,o),a(e,L,o),s(L,Tt),a(e,je,o),a(e,R,o),s(R,Wt),a(e,qe,o),a(e,_,o),s(_,g),s(g,me),s(_,xt),a(e,Fe,o),a(e,U,o),s(U,Mt),s(U,ye),s(ye,Nt),s(U,Gt),a(e,He,o),a(e,w,o),s(w,Ot),s(w,be),s(be,Dt),s(w,Bt),s(w,ve),s(ve,jt),s(w,qt),a(e,Le,o),a(e,V,o),s(V,Ft),a(e,Re,o),a(e,X,o),s(X,Ht),a(e,Ve,o),a(e,z,o),s(z,Lt),a(e,Xe,o),a(e,I,o),s(I,S),s(S,Pe),s(I,Rt),a(e,ze,o),a(e,K,o),s(K,Vt),a(e,Ke,o),a(e,Q,o),s(Q,Xt),a(e,Qe,o),a(e,J,o),s(J,zt),a(e,Je,o),a(e,Y,o),s(Y,Kt),a(e,Ye,o),a(e,Z,o),s(Z,Qt),a(e,Ze,o),a(e,$,o),s($,Jt),a(e,$e,o),a(e,A,o),s(A,C),s(C,ke),s(A,Yt),a(e,et,o),a(e,ee,o),s(ee,Zt),a(e,tt,o),a(e,te,o),s(te,$t),a(e,ot,o),a(e,oe,o),s(oe,eo),a(e,at,o),a(e,ae,o),s(ae,to),a(e,st,o),a(e,se,o),s(se,oo)},p:uo,i:uo,o:uo,d(e){e&&t(f),e&&t(Ee),e&&t(W),e&&t(_e),e&&t(x),e&&t(ge),e&&t(m),e&&t(Ue),e&&t(M),e&&t(Ie),e&&t(N),e&&t(Se),e&&t(G),e&&t(Ae),e&&t(b),e&&t(Ce),e&&t(D),e&&t(Te),e&&t(B),e&&t(We),e&&t(v),e&&t(xe),e&&t(j),e&&t(Me),e&&t(q),e&&t(Ne),e&&t(k),e&&t(Ge),e&&t(E),e&&t(Oe),e&&t(H),e&&t(De),e&&t(d),e&&t(Be),e&&t(L),e&&t(je),e&&t(R),e&&t(qe),e&&t(_),e&&t(Fe),e&&t(U),e&&t(He),e&&t(w),e&&t(Le),e&&t(V),e&&t(Re),e&&t(X),e&&t(Ve),e&&t(z),e&&t(Xe),e&&t(I),e&&t(ze),e&&t(K),e&&t(Ke),e&&t(Q),e&&t(Qe),e&&t(J),e&&t(Je),e&&t(Y),e&&t(Ye),e&&t(Z),e&&t(Ze),e&&t($),e&&t($e),e&&t(A),e&&t(et),e&&t(ee),e&&t(tt),e&&t(te),e&&t(ot),e&&t(oe),e&&t(at),e&&t(ae),e&&t(st),e&&t(se)}}}const Sa={slug:"kZDNl",date:"20 February 2025",title:"The scary PSU cable story",description:"The story of a scary molex cable that I made to power three motherboards off one PSU",tags:["technology","homelab","electronics","hardware"],thumbnail:ka};class Aa extends sa{constructor(f){super(),ra(this,f,null,Ua,la,{})}}export{Aa as default,Sa as metadata};
