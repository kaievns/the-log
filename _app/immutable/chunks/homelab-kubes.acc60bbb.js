import{S as Lt,i as Nt,s as Dt,k as l,q as r,a as h,l as i,m as n,r as u,h as t,c as d,n as m,b as s,E as a,G as at}from"./index.7ee8938c.js";function Tt(St){let c,be,X,b,v,O,ve,Z,x,we,ee,B,ke,te,S,Ie,ae,L,ge,oe,f,j,_e,Ee,Y,Ae,Pe,$,xe,Be,G,Se,se,w,k,z,Le,le,N,Ne,ie,D,De,ne,T,Te,re,p,F,qe,Ue,K,We,Ce,J,Re,He,Q,Me,ue,q,Oe,he,I,g,V,je,de,y,Ye,A,$e,Ge,P,ze,Fe,me,U,Ke,fe,W,Je,pe,C,Qe,ye,R,Ve,ce,H,Xe;return{c(){c=l("p"),be=r("While I’m still in the moment, I thought I’d capture a bit of a “thought process” for the choices that went into setting up a kubernetes cluster in my homelab. And before you get any ideas, i want to come clean and say that this is my first homelab setup, so take it for what it’s worth."),X=h(),b=l("h2"),v=l("a"),O=l("span"),ve=r("Why do I need a homelab and kubes?"),Z=h(),x=l("p"),we=r("Long story short, I’m an engineer, I build stuff. And technically I don’t really have to. I could build all of this in the cloud. And truth be told, maybe that’s what I should have done. But, as I said, I like building stuff. And there is a lot of value in having my own hardware in house that I can mess with over and over and over again, try all sorts of different things and not be constrained or distracted by a cloud provider twiddling their cloud offerings in my face."),ee=h(),B=l("p"),ke=r("Some stuff that I build can be long running, and might use the same Postgres/Redis setup over and over again. I do run that on a laptop, but really it’s a pain. Not to mention requires a beefy laptop to run. And honestly I just find the whole lag and account hustle around cloud systems distracting as fuck."),te=h(),S=l("p"),Ie=r("And so I picked a couple of sub $500 mini PCs on a prime day sale, linked them with a $50 switch and that packs about 4 times more horse power than my M1 Pro. Not to mention it’s upgradeable with aftermarket parts."),ae=h(),L=l("p"),ge=r("So, to me, setting up my own small server hardware are:"),oe=h(),f=l("ol"),j=l("li"),_e=r("fun"),Ee=h(),Y=l("li"),Ae=r("lets me self-host what i need in-house on a cheap"),Pe=h(),$=l("li"),xe=r("lets me use an 8 years old thinkpad and still have tonnes of horse power"),Be=h(),G=l("li"),Se=r("did i mention fun?"),se=h(),w=l("h2"),k=l("a"),z=l("span"),Le=r("OS options"),le=h(),N=l("p"),Ne=r("This part should really be a tweet and go something like this: choosing something that is not ubuntu server is a bit like going to a video game store and buying something that is not call of duty. But I’ll elaborate."),ie=h(),D=l("p"),De=r("I’m actually planning to run most of my stuff in kubes, and from that perspective the choice of the underlying os doesn’t matter all that much. I mean, sure some marketing material will persuade you with “bare metal” terminology, but honestly, unless you’re running a million dollar fleet, that’s horse shit. Most minimal server deployments are basically a linux kernel with a few nuts and bolts, as a homelab owner you wont really ever notice the difference."),ne=h(),T=l("p"),Te=r("But here is what I have considered."),re=h(),p=l("ol"),F=l("li"),qe=r("Arch linux. I actually run arch as my laptop os, and it’s by far my favourite linux distro. But, do i really want to have a snowflake playground setup on a server that I’ll likely blow up and rebuild a dozen of times? Do I really need all the AUR stuff on it? The answer is not really"),Ue=h(),K=l("li"),We=r("Talos linux. Promoted as the best kubes distro ever that simplifies kubes setup, API driven and everything. That actually sounds great, infra as code and all. And I’m sure it’s a great product. But really… Setting up a kubs cluster is not that complicated, it literally takes 10 minutes end to end. Do I need a yet another opinionated layer between me and my tools to do that? Not running a million dollar HA production cluster here, so no thank you."),Ce=h(),J=l("li"),Re=r("Ubuntu server. Well comes with everything you’ll ever need, including all the problems you ever run into solved. Ubuntu’s minimal server install is fantastic bare bone system that can ever run on IoT. Also has kernel livepatch baked in, gosh I hate rebooting the system on kernel patches. Such a barbaric practice."),He=h(),Q=l("li"),Me=r("Sorry, not now OpenBSD"),ue=h(),q=l("p"),Oe=r("Do you see what I’m telling you here? You can choose anything here really, the question is how much time you want to invest into setting up and maintaining a system? My answer is as little as possible, so ubuntu server."),he=h(),I=l("h2"),g=l("a"),V=l("span"),je=r("Kubes options"),de=h(),y=l("p"),Ye=r("Long story short there are basically two options on the table at the moment. "),A=l("a"),$e=r("k3s"),Ge=r(" and "),P=l("a"),ze=r("microk8s"),Fe=r(". I mean you could technically install kubes as our lord and saviour Google had intended, but why would you?"),me=h(),U=l("p"),Ke=r("Full disclosure, I’m a huge fun of rancher and worked with k3s in the past, and so I thought it’s a lost cause for microk8s. But I ended up becoming a convert."),fe=h(),W=l("p"),Je=r("Don’t get me wrong k3s is fantastic, and is that’s what you used to and/or you’re not running ubuntu that’s a perfectly legitimate choice. But, I found that microk8s can do everything k3s can do with just a flip of an option, it’s addons thing actually covers 100%+ of everything I’ll ever need, and in my tests it consumes a tiny bit less CPU and memory than k3s. Not like that will ever matter in my case."),pe=h(),C=l("p"),Qe=r("In the end what won me over was the fact that it comes integrated with ubuntu server itself, has very sensible defaults (including preinstalled helm), and it updates along with the server system itself."),ye=h(),R=l("p"),Ve=r("Really choosing ubuntu server + micrk8s simplifies the crap out of the equation. I can blow up my system 5 times a day and resurrect it in 15 minutes every time. And it will keep itself up to date patched and secure mostly automatically so that I could spend my brain cycles on something else."),ce=h(),H=l("p"),Xe=r("Well, at least that’s me. You don’t have to do the same. But I hope this helped."),this.h()},l(e){c=i(e,"P",{});var o=n(c);be=u(o,"While I’m still in the moment, I thought I’d capture a bit of a “thought process” for the choices that went into setting up a kubernetes cluster in my homelab. And before you get any ideas, i want to come clean and say that this is my first homelab setup, so take it for what it’s worth."),o.forEach(t),X=d(e),b=i(e,"H2",{id:!0});var Ze=n(b);v=i(Ze,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ot=n(v);O=i(ot,"SPAN",{class:!0}),n(O).forEach(t),ot.forEach(t),ve=u(Ze,"Why do I need a homelab and kubes?"),Ze.forEach(t),Z=d(e),x=i(e,"P",{});var st=n(x);we=u(st,"Long story short, I’m an engineer, I build stuff. And technically I don’t really have to. I could build all of this in the cloud. And truth be told, maybe that’s what I should have done. But, as I said, I like building stuff. And there is a lot of value in having my own hardware in house that I can mess with over and over and over again, try all sorts of different things and not be constrained or distracted by a cloud provider twiddling their cloud offerings in my face."),st.forEach(t),ee=d(e),B=i(e,"P",{});var lt=n(B);ke=u(lt,"Some stuff that I build can be long running, and might use the same Postgres/Redis setup over and over again. I do run that on a laptop, but really it’s a pain. Not to mention requires a beefy laptop to run. And honestly I just find the whole lag and account hustle around cloud systems distracting as fuck."),lt.forEach(t),te=d(e),S=i(e,"P",{});var it=n(S);Ie=u(it,"And so I picked a couple of sub $500 mini PCs on a prime day sale, linked them with a $50 switch and that packs about 4 times more horse power than my M1 Pro. Not to mention it’s upgradeable with aftermarket parts."),it.forEach(t),ae=d(e),L=i(e,"P",{});var nt=n(L);ge=u(nt,"So, to me, setting up my own small server hardware are:"),nt.forEach(t),oe=d(e),f=i(e,"OL",{});var _=n(f);j=i(_,"LI",{});var rt=n(j);_e=u(rt,"fun"),rt.forEach(t),Ee=d(_),Y=i(_,"LI",{});var ut=n(Y);Ae=u(ut,"lets me self-host what i need in-house on a cheap"),ut.forEach(t),Pe=d(_),$=i(_,"LI",{});var ht=n($);xe=u(ht,"lets me use an 8 years old thinkpad and still have tonnes of horse power"),ht.forEach(t),Be=d(_),G=i(_,"LI",{});var dt=n(G);Se=u(dt,"did i mention fun?"),dt.forEach(t),_.forEach(t),se=d(e),w=i(e,"H2",{id:!0});var et=n(w);k=i(et,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var mt=n(k);z=i(mt,"SPAN",{class:!0}),n(z).forEach(t),mt.forEach(t),Le=u(et,"OS options"),et.forEach(t),le=d(e),N=i(e,"P",{});var ft=n(N);Ne=u(ft,"This part should really be a tweet and go something like this: choosing something that is not ubuntu server is a bit like going to a video game store and buying something that is not call of duty. But I’ll elaborate."),ft.forEach(t),ie=d(e),D=i(e,"P",{});var pt=n(D);De=u(pt,"I’m actually planning to run most of my stuff in kubes, and from that perspective the choice of the underlying os doesn’t matter all that much. I mean, sure some marketing material will persuade you with “bare metal” terminology, but honestly, unless you’re running a million dollar fleet, that’s horse shit. Most minimal server deployments are basically a linux kernel with a few nuts and bolts, as a homelab owner you wont really ever notice the difference."),pt.forEach(t),ne=d(e),T=i(e,"P",{});var yt=n(T);Te=u(yt,"But here is what I have considered."),yt.forEach(t),re=d(e),p=i(e,"OL",{});var E=n(p);F=i(E,"LI",{});var ct=n(F);qe=u(ct,"Arch linux. I actually run arch as my laptop os, and it’s by far my favourite linux distro. But, do i really want to have a snowflake playground setup on a server that I’ll likely blow up and rebuild a dozen of times? Do I really need all the AUR stuff on it? The answer is not really"),ct.forEach(t),Ue=d(E),K=i(E,"LI",{});var bt=n(K);We=u(bt,"Talos linux. Promoted as the best kubes distro ever that simplifies kubes setup, API driven and everything. That actually sounds great, infra as code and all. And I’m sure it’s a great product. But really… Setting up a kubs cluster is not that complicated, it literally takes 10 minutes end to end. Do I need a yet another opinionated layer between me and my tools to do that? Not running a million dollar HA production cluster here, so no thank you."),bt.forEach(t),Ce=d(E),J=i(E,"LI",{});var vt=n(J);Re=u(vt,"Ubuntu server. Well comes with everything you’ll ever need, including all the problems you ever run into solved. Ubuntu’s minimal server install is fantastic bare bone system that can ever run on IoT. Also has kernel livepatch baked in, gosh I hate rebooting the system on kernel patches. Such a barbaric practice."),vt.forEach(t),He=d(E),Q=i(E,"LI",{});var wt=n(Q);Me=u(wt,"Sorry, not now OpenBSD"),wt.forEach(t),E.forEach(t),ue=d(e),q=i(e,"P",{});var kt=n(q);Oe=u(kt,"Do you see what I’m telling you here? You can choose anything here really, the question is how much time you want to invest into setting up and maintaining a system? My answer is as little as possible, so ubuntu server."),kt.forEach(t),he=d(e),I=i(e,"H2",{id:!0});var tt=n(I);g=i(tt,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var It=n(g);V=i(It,"SPAN",{class:!0}),n(V).forEach(t),It.forEach(t),je=u(tt,"Kubes options"),tt.forEach(t),de=d(e),y=i(e,"P",{});var M=n(y);Ye=u(M,"Long story short there are basically two options on the table at the moment. "),A=i(M,"A",{href:!0,rel:!0});var gt=n(A);$e=u(gt,"k3s"),gt.forEach(t),Ge=u(M," and "),P=i(M,"A",{href:!0,rel:!0});var _t=n(P);ze=u(_t,"microk8s"),_t.forEach(t),Fe=u(M,". I mean you could technically install kubes as our lord and saviour Google had intended, but why would you?"),M.forEach(t),me=d(e),U=i(e,"P",{});var Et=n(U);Ke=u(Et,"Full disclosure, I’m a huge fun of rancher and worked with k3s in the past, and so I thought it’s a lost cause for microk8s. But I ended up becoming a convert."),Et.forEach(t),fe=d(e),W=i(e,"P",{});var At=n(W);Je=u(At,"Don’t get me wrong k3s is fantastic, and is that’s what you used to and/or you’re not running ubuntu that’s a perfectly legitimate choice. But, I found that microk8s can do everything k3s can do with just a flip of an option, it’s addons thing actually covers 100%+ of everything I’ll ever need, and in my tests it consumes a tiny bit less CPU and memory than k3s. Not like that will ever matter in my case."),At.forEach(t),pe=d(e),C=i(e,"P",{});var Pt=n(C);Qe=u(Pt,"In the end what won me over was the fact that it comes integrated with ubuntu server itself, has very sensible defaults (including preinstalled helm), and it updates along with the server system itself."),Pt.forEach(t),ye=d(e),R=i(e,"P",{});var xt=n(R);Ve=u(xt,"Really choosing ubuntu server + micrk8s simplifies the crap out of the equation. I can blow up my system 5 times a day and resurrect it in 15 minutes every time. And it will keep itself up to date patched and secure mostly automatically so that I could spend my brain cycles on something else."),xt.forEach(t),ce=d(e),H=i(e,"P",{});var Bt=n(H);Xe=u(Bt,"Well, at least that’s me. You don’t have to do the same. But I hope this helped."),Bt.forEach(t),this.h()},h(){m(O,"class","icon icon-link"),m(v,"aria-hidden","true"),m(v,"tabindex","-1"),m(v,"href","#why-do-i-need-a-homelab-and-kubes"),m(b,"id","why-do-i-need-a-homelab-and-kubes"),m(z,"class","icon icon-link"),m(k,"aria-hidden","true"),m(k,"tabindex","-1"),m(k,"href","#os-options"),m(w,"id","os-options"),m(V,"class","icon icon-link"),m(g,"aria-hidden","true"),m(g,"tabindex","-1"),m(g,"href","#kubes-options"),m(I,"id","kubes-options"),m(A,"href","https://k3s.io/"),m(A,"rel","nofollow"),m(P,"href","https://microk8s.io/"),m(P,"rel","nofollow")},m(e,o){s(e,c,o),a(c,be),s(e,X,o),s(e,b,o),a(b,v),a(v,O),a(b,ve),s(e,Z,o),s(e,x,o),a(x,we),s(e,ee,o),s(e,B,o),a(B,ke),s(e,te,o),s(e,S,o),a(S,Ie),s(e,ae,o),s(e,L,o),a(L,ge),s(e,oe,o),s(e,f,o),a(f,j),a(j,_e),a(f,Ee),a(f,Y),a(Y,Ae),a(f,Pe),a(f,$),a($,xe),a(f,Be),a(f,G),a(G,Se),s(e,se,o),s(e,w,o),a(w,k),a(k,z),a(w,Le),s(e,le,o),s(e,N,o),a(N,Ne),s(e,ie,o),s(e,D,o),a(D,De),s(e,ne,o),s(e,T,o),a(T,Te),s(e,re,o),s(e,p,o),a(p,F),a(F,qe),a(p,Ue),a(p,K),a(K,We),a(p,Ce),a(p,J),a(J,Re),a(p,He),a(p,Q),a(Q,Me),s(e,ue,o),s(e,q,o),a(q,Oe),s(e,he,o),s(e,I,o),a(I,g),a(g,V),a(I,je),s(e,de,o),s(e,y,o),a(y,Ye),a(y,A),a(A,$e),a(y,Ge),a(y,P),a(P,ze),a(y,Fe),s(e,me,o),s(e,U,o),a(U,Ke),s(e,fe,o),s(e,W,o),a(W,Je),s(e,pe,o),s(e,C,o),a(C,Qe),s(e,ye,o),s(e,R,o),a(R,Ve),s(e,ce,o),s(e,H,o),a(H,Xe)},p:at,i:at,o:at,d(e){e&&t(c),e&&t(X),e&&t(b),e&&t(Z),e&&t(x),e&&t(ee),e&&t(B),e&&t(te),e&&t(S),e&&t(ae),e&&t(L),e&&t(oe),e&&t(f),e&&t(se),e&&t(w),e&&t(le),e&&t(N),e&&t(ie),e&&t(D),e&&t(ne),e&&t(T),e&&t(re),e&&t(p),e&&t(ue),e&&t(q),e&&t(he),e&&t(I),e&&t(de),e&&t(y),e&&t(me),e&&t(U),e&&t(fe),e&&t(W),e&&t(pe),e&&t(C),e&&t(ye),e&&t(R),e&&t(ce),e&&t(H)}}}const Ut={slug:"qBiRbJ",date:"2 Nov 2024",title:"Choices for homelab kubernetes setup",description:"Capturing my thought process around setting up a kubernetes deployment for my homelab",tags:["homelab","kubernetes","linux","ubuntu"]};class Wt extends Lt{constructor(c){super(),Nt(this,c,null,Tt,Dt,{})}}export{Wt as default,Ut as metadata};
