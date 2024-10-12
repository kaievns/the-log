import{S as lt,i as rt,s as ht,k as l,q as i,a as u,l as r,m as h,r as s,h as e,c as d,n as C,b as n,E as o,G as U}from"./index.7ee8938c.js";function ut(st){let y,K,T,b,z,_,k,q,W,w,O,E,g,L,x,p,R,m,X,Y,P,v,G,A,f,H,c,D,J,B,I,F,M,j,N;return{c(){y=l("p"),K=i(`So, I run a custom keyboard layout. I designed one almost 10 years ago and it
kind of stuck with me. Can’t go back to QWERTY, impossible. Well, okay, I’m kind
of a keyboard setup junkie. I run a custom build split 42% with six layers and
home row mods, okay? That level of junkie.`),T=u(),b=l("p"),z=i(`It’s actually mostly pretty great, and I enjoy it a bunch, except when it comes
to linux. If you step away from the vanilla QWERTY setup in linux, you’re kind
of fucked. Which is ironic because the system is so open and customizable and
full of weirdos.`),_=u(),k=l("p"),q=i(`The problem is that there is no consensus on keyboards configuration. I mean
there is X11 configuration and layouts, but it’s pretty limited. But then a
whole lot of other systems will point blank ignore that. Wayland has it’s own
thing, because of course is does. But then it gets worse, because half of the
apps are electron apps those days, and those don’t give a damn about X or
Wayland configurations. But then there are also just normal apps whose authors
didn’t bother to think about other layout users. And then there is Chromium, and
that thing doesn’t give a damn about anything in yous system and wants to be an
operational system of its own it seems.`),W=u(),w=l("p"),O=i(`To be fair there is a little bit of that on both Windows and MacOS too. But on
those we have the Karabiner, which is entirely great either, but it’s neat
because of the way it deals with the problem. It will register a virtual
keyboard and then read the system input, remap the crap out of it and then feed
that into the virtual keyboard and feed it back into the system hence bypassing
the whole layouts thing. Which is pretty neat.`),E=u(),g=l("p"),L=i(`Turned out there are a couple of similar options on linux side too. What they
do, they basically hijack input directly from kernel/udev, transform it and then
feed it back into a virtual keyboard.`),x=u(),p=l("p"),R=i("The most known project is probably "),m=l("a"),X=i("kmonad"),Y=i(`.
It’s actually pretty great, they even try to emulate some of the QMK features
like mod-taps and such which are pretty neat. There are a few drawbacks to the
project though. As far as I understand it the development of the project has
stopped years ago. It’s written in Haskell, there are binaries, but it will
likely install half of the internet to compile it. And configs are written in a
c-lisp. I mean, both are amazing languages, but fuck my life if i have to learn
two new computer languages to configure my keyboard.`),P=u(),v=l("p"),G=i(`I mean I did give it a go anyways, and it actually works pretty okay. But I also
felt that there was a distinct input lag with it, especially if i start messing
with mod-taps. I don’t know what’s the deal there, whether the fact that I’m
running on a beloved old thinkpad, or because the algo gets a bit confused, or
it’s just the processing delay of a haskell thing.`),A=u(),f=l("p"),H=i(`Luckily there is another similar project called
`),c=l("a"),D=i("keyd"),J=i(` It’s a bit less feature rich than kmonad,
but there are a few advantages to it too. It’s actively maintained, it’s written
in C, and configuration is in TOML-ish config. It’s fully baked with systemd and
available as a proper system level package, and the installation and
configuration was pretty breezy actually. Also, I can’t see any input lag what
so ever with the thing.`),B=u(),I=l("p"),F=i(`So, yeah, just wanted to give the author some props. I’ve managed to setup my
layout and mac like key bindings for everything pretty quickly, and it works
great, it terminal, all apps, including electron ones are just fine. Pretty much
invisible.`),M=u(),j=l("p"),N=i(`My only wish they’d back port some of the QMK twinky dinkies. I would really
love to have some decent mod-tap and home row mods setup. That’d make my day for
sure.`),this.h()},l(t){y=r(t,"P",{});var a=h(y);K=s(a,`So, I run a custom keyboard layout. I designed one almost 10 years ago and it
kind of stuck with me. Can’t go back to QWERTY, impossible. Well, okay, I’m kind
of a keyboard setup junkie. I run a custom build split 42% with six layers and
home row mods, okay? That level of junkie.`),a.forEach(e),T=d(t),b=r(t,"P",{});var V=h(b);z=s(V,`It’s actually mostly pretty great, and I enjoy it a bunch, except when it comes
to linux. If you step away from the vanilla QWERTY setup in linux, you’re kind
of fucked. Which is ironic because the system is so open and customizable and
full of weirdos.`),V.forEach(e),_=d(t),k=r(t,"P",{});var Z=h(k);q=s(Z,`The problem is that there is no consensus on keyboards configuration. I mean
there is X11 configuration and layouts, but it’s pretty limited. But then a
whole lot of other systems will point blank ignore that. Wayland has it’s own
thing, because of course is does. But then it gets worse, because half of the
apps are electron apps those days, and those don’t give a damn about X or
Wayland configurations. But then there are also just normal apps whose authors
didn’t bother to think about other layout users. And then there is Chromium, and
that thing doesn’t give a damn about anything in yous system and wants to be an
operational system of its own it seems.`),Z.forEach(e),W=d(t),w=r(t,"P",{});var $=h(w);O=s($,`To be fair there is a little bit of that on both Windows and MacOS too. But on
those we have the Karabiner, which is entirely great either, but it’s neat
because of the way it deals with the problem. It will register a virtual
keyboard and then read the system input, remap the crap out of it and then feed
that into the virtual keyboard and feed it back into the system hence bypassing
the whole layouts thing. Which is pretty neat.`),$.forEach(e),E=d(t),g=r(t,"P",{});var tt=h(g);L=s(tt,`Turned out there are a couple of similar options on linux side too. What they
do, they basically hijack input directly from kernel/udev, transform it and then
feed it back into a virtual keyboard.`),tt.forEach(e),x=d(t),p=r(t,"P",{});var Q=h(p);R=s(Q,"The most known project is probably "),m=r(Q,"A",{href:!0,rel:!0});var et=h(m);X=s(et,"kmonad"),et.forEach(e),Y=s(Q,`.
It’s actually pretty great, they even try to emulate some of the QMK features
like mod-taps and such which are pretty neat. There are a few drawbacks to the
project though. As far as I understand it the development of the project has
stopped years ago. It’s written in Haskell, there are binaries, but it will
likely install half of the internet to compile it. And configs are written in a
c-lisp. I mean, both are amazing languages, but fuck my life if i have to learn
two new computer languages to configure my keyboard.`),Q.forEach(e),P=d(t),v=r(t,"P",{});var at=h(v);G=s(at,`I mean I did give it a go anyways, and it actually works pretty okay. But I also
felt that there was a distinct input lag with it, especially if i start messing
with mod-taps. I don’t know what’s the deal there, whether the fact that I’m
running on a beloved old thinkpad, or because the algo gets a bit confused, or
it’s just the processing delay of a haskell thing.`),at.forEach(e),A=d(t),f=r(t,"P",{});var S=h(f);H=s(S,`Luckily there is another similar project called
`),c=r(S,"A",{href:!0,rel:!0});var nt=h(c);D=s(nt,"keyd"),nt.forEach(e),J=s(S,` It’s a bit less feature rich than kmonad,
but there are a few advantages to it too. It’s actively maintained, it’s written
in C, and configuration is in TOML-ish config. It’s fully baked with systemd and
available as a proper system level package, and the installation and
configuration was pretty breezy actually. Also, I can’t see any input lag what
so ever with the thing.`),S.forEach(e),B=d(t),I=r(t,"P",{});var ot=h(I);F=s(ot,`So, yeah, just wanted to give the author some props. I’ve managed to setup my
layout and mac like key bindings for everything pretty quickly, and it works
great, it terminal, all apps, including electron ones are just fine. Pretty much
invisible.`),ot.forEach(e),M=d(t),j=r(t,"P",{});var it=h(j);N=s(it,`My only wish they’d back port some of the QMK twinky dinkies. I would really
love to have some decent mod-tap and home row mods setup. That’d make my day for
sure.`),it.forEach(e),this.h()},h(){C(m,"href","https://github.com/kmonad/kmonad"),C(m,"rel","nofollow"),C(c,"href","https://github.com/rvaiya/keyd"),C(c,"rel","nofollow")},m(t,a){n(t,y,a),o(y,K),n(t,T,a),n(t,b,a),o(b,z),n(t,_,a),n(t,k,a),o(k,q),n(t,W,a),n(t,w,a),o(w,O),n(t,E,a),n(t,g,a),o(g,L),n(t,x,a),n(t,p,a),o(p,R),o(p,m),o(m,X),o(p,Y),n(t,P,a),n(t,v,a),o(v,G),n(t,A,a),n(t,f,a),o(f,H),o(f,c),o(c,D),o(f,J),n(t,B,a),n(t,I,a),o(I,F),n(t,M,a),n(t,j,a),o(j,N)},p:U,i:U,o:U,d(t){t&&e(y),t&&e(T),t&&e(b),t&&e(_),t&&e(k),t&&e(W),t&&e(w),t&&e(E),t&&e(g),t&&e(x),t&&e(p),t&&e(P),t&&e(v),t&&e(A),t&&e(f),t&&e(B),t&&e(I),t&&e(M),t&&e(j)}}}const yt={slug:"cO6vGW",title:"Did I tell you about keyd?",description:"A quick share about keyd as a keyboard config management tool",date:"22 July 2024",tags:["engineering","linux","keyboard"]};class pt extends lt{constructor(y){super(),rt(this,y,null,ut,ht,{})}}export{pt as default,yt as metadata};
