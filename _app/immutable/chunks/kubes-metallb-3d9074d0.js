import{S as Va,i as Ja,s as Qa,k as n,q as s,a as d,l as r,m as h,r as o,h as t,c,n as u,b as i,F as a,C as ra}from"./index-920be987.js";function Ya(Ga){let b,Je,ye,H,Qe,ve,k,P,J,Ye,be,w,Ze,Q,$e,et,Y,tt,at,ke,N,st,Pe,y,ot,Z,lt,it,$,nt,rt,Ie,I,ht,ee,dt,ct,Ee,E,ut,te,pt,ft,_e,S,mt,xe,_,x,ae,wt,ge,X,yt,Le,F,vt,Be,g,bt,se,kt,Pt,Ae,W,It,Me,L,Et,oe,_t,xt,Ce,B,gt,le,Lt,Bt,De,j,At,Te,A,M,ie,Mt,Oe,q,Ct,He,T,Ra='<code class="language-undefined">sudo microk8s enable metallb</code>',Ne,G,Dt,Se,f,Tt,ne,Ot,Ht,re,Nt,St,he,Xt,Ft,Xe,m,Wt,de,jt,qt,ce,Gt,Rt,ue,zt,Ut,Fe,p,Kt,pe,Vt,Jt,fe,Qt,Yt,me,Zt,$t,we,ea,ta,We,R,aa,je,O,za=`<code class="language-yaml"><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> ingress
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> ingress
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>ingress<span class="token punctuation">-</span>microk8s
  <span class="token key atrule">type</span><span class="token punctuation">:</span> LoadBalancer
  <span class="token key atrule">loadBalancerIP</span><span class="token punctuation">:</span> 192.168.88.44</code>`,qe,z,sa,Ge,U,oa;return{c(){b=n("p"),Je=s("My homelab setup runs on several mini PCs. Which, I guess, qualifies for a bare metal deployment. In a commercial cloud provider infrastructure this topic doesn’t particularly matter, but in a physical homelab setup, once you have more that one machine things get interesting."),ye=d(),H=n("p"),Qe=s("It took me a bit of time to figure out the pieces, and I’m basically taking notes here before I forgot everything. But, I also hope it might come handy to someone else too."),ve=d(),k=n("h2"),P=n("a"),J=n("span"),Ye=s("What is MetalLB and why you need one?"),be=d(),w=n("p"),Ze=s("Well, okay, in the most basic setup, one doesn’t actually need a load balancer. If all you want is to run some web services on port 80/443 and you don’t mind an occasional reboot, you can get away with just an ingress controller that listens on a "),Q=n("code"),$e=s("NodePort"),et=s(" and directs traffic to the right services based on DNS names. As long as the node that the ingress "),Y=n("code"),tt=s("externalIP"),at=s(" is bound to is up an running you will be fine."),ke=d(),N=n("p"),st=s("There are several scenarios where that is not enough though. For example you want a failover in case the main node goes offline. Or, you’d like to actually load balance work between several physical nodes. Or, you might have services in your kubernetes setup that have to talk on the same port externally."),Pe=d(),y=n("p"),ot=s("The problem with kubernetes is that it can do load balancing "),Z=n("em"),lt=s("internally"),it=s(" between pods via "),$=n("code"),nt=s("kube-proxy"),rt=s(", that’s the job of services. But, it doesn’t have load balancing capabilities from the external network perspective. Instead, kubernetes integrates with external infrastructure for that. All cloud providers would normally do that out of the box."),Ie=d(),I=n("p"),ht=s("And so, for example, when we mark a service as "),ee=n("code"),dt=s("spec.type: LoadBalancer"),ct=s(", that service will ask an external load balancer to assign it an external IP address for the service. If there is no such thing, like in a default homelab bare metal deployment, then the external IP will forever stuck in the “pending” state."),Ee=d(),E=n("p"),ut=s("The usual workaround for that is to assign "),te=n("code"),pt=s("externalIPs"),ft=s(" for a service manually and make it talk on the host IP address. That will work for the most simple single node kubernetes setups without high availability features. But, it’s not entirely workable for more complex deployments."),_e=d(),S=n("p"),mt=s("And that is what MetalLB does. It is a super low overhead local network load balancer that performs the same role as a more sophisticated load balancing hardware would have in a commercial cloud infrastructure provider."),xe=d(),_=n("h2"),x=n("a"),ae=n("span"),wt=s("How does MetalLB work?"),ge=d(),X=n("p"),yt=s("There are multiple ways to setup MetalLB. But, in a most basic scenario MetalLB will be configured with a pre-defined IP range, and it will allocate those IPs to kubernetes services as they come online."),Le=d(),F=n("p"),vt=s("What essentially happens is that MetalLB will advertise all those allocated external IP addresses on the host network interfaces using the L2 ARP protocol. From the external network perspective the host will still have a single IP, but it will advertise to ether devices in the same subnet that it responds to other IP addresses too. The easiest way to think about it is that it’s like a machine that has multiple IP addresses: the original host IP, plus all the additional IPs that MetalLB handles."),Be=d(),g=n("p"),bt=s("Then, as the traffic comes into the node it will be directed to services associated with those IP addresses. And after that the traffic will be load balanced internally via "),se=n("code"),kt=s("kube-proxy"),Pt=s(" as it would in a basic kubernetes setup."),Ae=d(),W=n("p"),It=s("It brings couple of important advantages. Firstly, there can be multiple IP addresses attached to different services, each of them is different from the actual host IP address. Meaning services technically can talk on conflicting ports on the same physical machine. Also, if the node suddenly becomes unavailable, metallb will shift those IPs to another available node and the system will continue to operate."),Me=d(),L=n("p"),Et=s("This is called an L2 mode load balancer, and technically it is more like a failover rather than a true network level load balancing implementation since the actual load balancing between the pods will still be done horizontally inside kubernetes by "),oe=n("code"),_t=s("kube-proxy"),xt=s(" that runs services."),Ce=d(),B=n("p"),gt=s("Additionally, MetalLB can be configured in BGP mode which integrates with a router on the network. In this case, "),le=n("em"),Lt=s("all"),Bt=s(" nodes in the cluster will advertise the same set of IP addresses and the network router can properly load balance traffic directly to specific nodes. There also would be no failover latency involved in this case; the moment a node goes offline the router stops directing the traffic to that node and keeps feeding traffic other nodes instead."),De=d(),j=n("p"),At=s("Admittedly a BGP setup is way more complex that I would ever need in a homelab setup, and frankly it’s way over my head in terms of networks knowledge. So, I’ll stick to a default L2 setup in the chapter below."),Te=d(),A=n("h2"),M=n("a"),ie=n("span"),Mt=s("How to setup MetalLB in microk8s"),Oe=d(),q=n("p"),Ct=s("For all the lengthly preamble above, setting up metallb in ubuntu/microk8s environment is actually dead simple. It’s just one command:"),He=d(),T=n("pre"),Ne=d(),G=n("p"),Dt=s("When you run it, it will ask to give it an IP addresses range that it will later hand over to services. And that is a bit more complicated topic than the installation itself."),Se=d(),f=n("p"),Tt=s("Long story short, the way L2 IPs advertisement works, it only affects devices within the same subnetwork. Most household routers would have their DHCP setup to the "),ne=n("code"),Ot=s("192.168.XXX.*"),Ht=s(" range with a net mask set to "),re=n("code"),Nt=s("255.255.255.0"),St=s(". Meaning that only the devices with IPs within the "),he=n("code"),Xt=s("192.168.XXX.*"),Ft=s(" range will see the L2 addresses advertisement."),Xe=d(),m=n("p"),Wt=s("For example if the router network works with the "),de=n("code"),jt=s("192.168.66.*"),qt=s(" range, the IP addresses that you give to MetalLB will have to come from that same range. Using say "),ce=n("code"),Gt=s("192.168.67.*"),Rt=s(" won’t work. I mean, technically it could, say if you set your net mask to "),ue=n("code"),zt=s("255.255.0.0"),Ut=s(", but that’s a whole another can of worms that I don’t want to open."),Fe=d(),p=n("p"),Kt=s("The easiest way to set it up is to basically limit DHCP range to say "),pe=n("code"),Vt=s("192.168.66.1 ... 192.168.66.200"),Jt=s(" and give the rest "),fe=n("code"),Qt=s("55"),Yt=s(" addresses to MetalLB. Although, frankly you won’t need "),me=n("code"),Zt=s("55"),$t=s(" addresses, you might only use a hand full of them at best, the web ingress controller will only need one and that will probably cover "),we=n("code"),ea=s("95%"),ta=s(" of your use cases."),We=d(),R=n("p"),aa=s("And that’s more or less that. MetalLB will automatically distribute those IPs to interested services and advertise them to the network. And in case if you’d want to have a predefined IP, say for DNS purposes, you can make the service to ask for that specific address. Here for example my nginx ingress service."),je=d(),O=n("pre"),qe=d(),z=n("p"),sa=s("Now, regardless which node actually advertises the IPs, all the port 80/443 traffic hitting that IP address will be directed into my nginx ingress service. Also, it won’t interfere with the actual physical machine IP that my router’s DHCP server assigned to it. Pretty neat, isn’t it?"),Ge=d(),U=n("p"),oa=s("And that’s all there is to it. It’s not all that complicated as it seemed initially."),this.h()},l(e){b=r(e,"P",{});var l=h(b);Je=o(l,"My homelab setup runs on several mini PCs. Which, I guess, qualifies for a bare metal deployment. In a commercial cloud provider infrastructure this topic doesn’t particularly matter, but in a physical homelab setup, once you have more that one machine things get interesting."),l.forEach(t),ye=c(e),H=r(e,"P",{});var ha=h(H);Qe=o(ha,"It took me a bit of time to figure out the pieces, and I’m basically taking notes here before I forgot everything. But, I also hope it might come handy to someone else too."),ha.forEach(t),ve=c(e),k=r(e,"H2",{id:!0});var la=h(k);P=r(la,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var da=h(P);J=r(da,"SPAN",{class:!0}),h(J).forEach(t),da.forEach(t),Ye=o(la,"What is MetalLB and why you need one?"),la.forEach(t),be=c(e),w=r(e,"P",{});var K=h(w);Ze=o(K,"Well, okay, in the most basic setup, one doesn’t actually need a load balancer. If all you want is to run some web services on port 80/443 and you don’t mind an occasional reboot, you can get away with just an ingress controller that listens on a "),Q=r(K,"CODE",{});var ca=h(Q);$e=o(ca,"NodePort"),ca.forEach(t),et=o(K," and directs traffic to the right services based on DNS names. As long as the node that the ingress "),Y=r(K,"CODE",{});var ua=h(Y);tt=o(ua,"externalIP"),ua.forEach(t),at=o(K," is bound to is up an running you will be fine."),K.forEach(t),ke=c(e),N=r(e,"P",{});var pa=h(N);st=o(pa,"There are several scenarios where that is not enough though. For example you want a failover in case the main node goes offline. Or, you’d like to actually load balance work between several physical nodes. Or, you might have services in your kubernetes setup that have to talk on the same port externally."),pa.forEach(t),Pe=c(e),y=r(e,"P",{});var V=h(y);ot=o(V,"The problem with kubernetes is that it can do load balancing "),Z=r(V,"EM",{});var fa=h(Z);lt=o(fa,"internally"),fa.forEach(t),it=o(V," between pods via "),$=r(V,"CODE",{});var ma=h($);nt=o(ma,"kube-proxy"),ma.forEach(t),rt=o(V,", that’s the job of services. But, it doesn’t have load balancing capabilities from the external network perspective. Instead, kubernetes integrates with external infrastructure for that. All cloud providers would normally do that out of the box."),V.forEach(t),Ie=c(e),I=r(e,"P",{});var Re=h(I);ht=o(Re,"And so, for example, when we mark a service as "),ee=r(Re,"CODE",{});var wa=h(ee);dt=o(wa,"spec.type: LoadBalancer"),wa.forEach(t),ct=o(Re,", that service will ask an external load balancer to assign it an external IP address for the service. If there is no such thing, like in a default homelab bare metal deployment, then the external IP will forever stuck in the “pending” state."),Re.forEach(t),Ee=c(e),E=r(e,"P",{});var ze=h(E);ut=o(ze,"The usual workaround for that is to assign "),te=r(ze,"CODE",{});var ya=h(te);pt=o(ya,"externalIPs"),ya.forEach(t),ft=o(ze," for a service manually and make it talk on the host IP address. That will work for the most simple single node kubernetes setups without high availability features. But, it’s not entirely workable for more complex deployments."),ze.forEach(t),_e=c(e),S=r(e,"P",{});var va=h(S);mt=o(va,"And that is what MetalLB does. It is a super low overhead local network load balancer that performs the same role as a more sophisticated load balancing hardware would have in a commercial cloud infrastructure provider."),va.forEach(t),xe=c(e),_=r(e,"H2",{id:!0});var ia=h(_);x=r(ia,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ba=h(x);ae=r(ba,"SPAN",{class:!0}),h(ae).forEach(t),ba.forEach(t),wt=o(ia,"How does MetalLB work?"),ia.forEach(t),ge=c(e),X=r(e,"P",{});var ka=h(X);yt=o(ka,"There are multiple ways to setup MetalLB. But, in a most basic scenario MetalLB will be configured with a pre-defined IP range, and it will allocate those IPs to kubernetes services as they come online."),ka.forEach(t),Le=c(e),F=r(e,"P",{});var Pa=h(F);vt=o(Pa,"What essentially happens is that MetalLB will advertise all those allocated external IP addresses on the host network interfaces using the L2 ARP protocol. From the external network perspective the host will still have a single IP, but it will advertise to ether devices in the same subnet that it responds to other IP addresses too. The easiest way to think about it is that it’s like a machine that has multiple IP addresses: the original host IP, plus all the additional IPs that MetalLB handles."),Pa.forEach(t),Be=c(e),g=r(e,"P",{});var Ue=h(g);bt=o(Ue,"Then, as the traffic comes into the node it will be directed to services associated with those IP addresses. And after that the traffic will be load balanced internally via "),se=r(Ue,"CODE",{});var Ia=h(se);kt=o(Ia,"kube-proxy"),Ia.forEach(t),Pt=o(Ue," as it would in a basic kubernetes setup."),Ue.forEach(t),Ae=c(e),W=r(e,"P",{});var Ea=h(W);It=o(Ea,"It brings couple of important advantages. Firstly, there can be multiple IP addresses attached to different services, each of them is different from the actual host IP address. Meaning services technically can talk on conflicting ports on the same physical machine. Also, if the node suddenly becomes unavailable, metallb will shift those IPs to another available node and the system will continue to operate."),Ea.forEach(t),Me=c(e),L=r(e,"P",{});var Ke=h(L);Et=o(Ke,"This is called an L2 mode load balancer, and technically it is more like a failover rather than a true network level load balancing implementation since the actual load balancing between the pods will still be done horizontally inside kubernetes by "),oe=r(Ke,"CODE",{});var _a=h(oe);_t=o(_a,"kube-proxy"),_a.forEach(t),xt=o(Ke," that runs services."),Ke.forEach(t),Ce=c(e),B=r(e,"P",{});var Ve=h(B);gt=o(Ve,"Additionally, MetalLB can be configured in BGP mode which integrates with a router on the network. In this case, "),le=r(Ve,"EM",{});var xa=h(le);Lt=o(xa,"all"),xa.forEach(t),Bt=o(Ve," nodes in the cluster will advertise the same set of IP addresses and the network router can properly load balance traffic directly to specific nodes. There also would be no failover latency involved in this case; the moment a node goes offline the router stops directing the traffic to that node and keeps feeding traffic other nodes instead."),Ve.forEach(t),De=c(e),j=r(e,"P",{});var ga=h(j);At=o(ga,"Admittedly a BGP setup is way more complex that I would ever need in a homelab setup, and frankly it’s way over my head in terms of networks knowledge. So, I’ll stick to a default L2 setup in the chapter below."),ga.forEach(t),Te=c(e),A=r(e,"H2",{id:!0});var na=h(A);M=r(na,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var La=h(M);ie=r(La,"SPAN",{class:!0}),h(ie).forEach(t),La.forEach(t),Mt=o(na,"How to setup MetalLB in microk8s"),na.forEach(t),Oe=c(e),q=r(e,"P",{});var Ba=h(q);Ct=o(Ba,"For all the lengthly preamble above, setting up metallb in ubuntu/microk8s environment is actually dead simple. It’s just one command:"),Ba.forEach(t),He=c(e),T=r(e,"PRE",{class:!0});var Ua=h(T);Ua.forEach(t),Ne=c(e),G=r(e,"P",{});var Aa=h(G);Dt=o(Aa,"When you run it, it will ask to give it an IP addresses range that it will later hand over to services. And that is a bit more complicated topic than the installation itself."),Aa.forEach(t),Se=c(e),f=r(e,"P",{});var C=h(f);Tt=o(C,"Long story short, the way L2 IPs advertisement works, it only affects devices within the same subnetwork. Most household routers would have their DHCP setup to the "),ne=r(C,"CODE",{});var Ma=h(ne);Ot=o(Ma,"192.168.XXX.*"),Ma.forEach(t),Ht=o(C," range with a net mask set to "),re=r(C,"CODE",{});var Ca=h(re);Nt=o(Ca,"255.255.255.0"),Ca.forEach(t),St=o(C,". Meaning that only the devices with IPs within the "),he=r(C,"CODE",{});var Da=h(he);Xt=o(Da,"192.168.XXX.*"),Da.forEach(t),Ft=o(C," range will see the L2 addresses advertisement."),C.forEach(t),Xe=c(e),m=r(e,"P",{});var D=h(m);Wt=o(D,"For example if the router network works with the "),de=r(D,"CODE",{});var Ta=h(de);jt=o(Ta,"192.168.66.*"),Ta.forEach(t),qt=o(D," range, the IP addresses that you give to MetalLB will have to come from that same range. Using say "),ce=r(D,"CODE",{});var Oa=h(ce);Gt=o(Oa,"192.168.67.*"),Oa.forEach(t),Rt=o(D," won’t work. I mean, technically it could, say if you set your net mask to "),ue=r(D,"CODE",{});var Ha=h(ue);zt=o(Ha,"255.255.0.0"),Ha.forEach(t),Ut=o(D,", but that’s a whole another can of worms that I don’t want to open."),D.forEach(t),Fe=c(e),p=r(e,"P",{});var v=h(p);Kt=o(v,"The easiest way to set it up is to basically limit DHCP range to say "),pe=r(v,"CODE",{});var Na=h(pe);Vt=o(Na,"192.168.66.1 ... 192.168.66.200"),Na.forEach(t),Jt=o(v," and give the rest "),fe=r(v,"CODE",{});var Sa=h(fe);Qt=o(Sa,"55"),Sa.forEach(t),Yt=o(v," addresses to MetalLB. Although, frankly you won’t need "),me=r(v,"CODE",{});var Xa=h(me);Zt=o(Xa,"55"),Xa.forEach(t),$t=o(v," addresses, you might only use a hand full of them at best, the web ingress controller will only need one and that will probably cover "),we=r(v,"CODE",{});var Fa=h(we);ea=o(Fa,"95%"),Fa.forEach(t),ta=o(v," of your use cases."),v.forEach(t),We=c(e),R=r(e,"P",{});var Wa=h(R);aa=o(Wa,"And that’s more or less that. MetalLB will automatically distribute those IPs to interested services and advertise them to the network. And in case if you’d want to have a predefined IP, say for DNS purposes, you can make the service to ask for that specific address. Here for example my nginx ingress service."),Wa.forEach(t),je=c(e),O=r(e,"PRE",{class:!0});var Ka=h(O);Ka.forEach(t),qe=c(e),z=r(e,"P",{});var ja=h(z);sa=o(ja,"Now, regardless which node actually advertises the IPs, all the port 80/443 traffic hitting that IP address will be directed into my nginx ingress service. Also, it won’t interfere with the actual physical machine IP that my router’s DHCP server assigned to it. Pretty neat, isn’t it?"),ja.forEach(t),Ge=c(e),U=r(e,"P",{});var qa=h(U);oa=o(qa,"And that’s all there is to it. It’s not all that complicated as it seemed initially."),qa.forEach(t),this.h()},h(){u(J,"class","icon icon-link"),u(P,"aria-hidden","true"),u(P,"tabindex","-1"),u(P,"href","#what-is-metallb-and-why-you-need-one"),u(k,"id","what-is-metallb-and-why-you-need-one"),u(ae,"class","icon icon-link"),u(x,"aria-hidden","true"),u(x,"tabindex","-1"),u(x,"href","#how-does-metallb-work"),u(_,"id","how-does-metallb-work"),u(ie,"class","icon icon-link"),u(M,"aria-hidden","true"),u(M,"tabindex","-1"),u(M,"href","#how-to-setup-metallb-in-microk8s"),u(A,"id","how-to-setup-metallb-in-microk8s"),u(T,"class","language-undefined"),u(O,"class","language-yaml")},m(e,l){i(e,b,l),a(b,Je),i(e,ye,l),i(e,H,l),a(H,Qe),i(e,ve,l),i(e,k,l),a(k,P),a(P,J),a(k,Ye),i(e,be,l),i(e,w,l),a(w,Ze),a(w,Q),a(Q,$e),a(w,et),a(w,Y),a(Y,tt),a(w,at),i(e,ke,l),i(e,N,l),a(N,st),i(e,Pe,l),i(e,y,l),a(y,ot),a(y,Z),a(Z,lt),a(y,it),a(y,$),a($,nt),a(y,rt),i(e,Ie,l),i(e,I,l),a(I,ht),a(I,ee),a(ee,dt),a(I,ct),i(e,Ee,l),i(e,E,l),a(E,ut),a(E,te),a(te,pt),a(E,ft),i(e,_e,l),i(e,S,l),a(S,mt),i(e,xe,l),i(e,_,l),a(_,x),a(x,ae),a(_,wt),i(e,ge,l),i(e,X,l),a(X,yt),i(e,Le,l),i(e,F,l),a(F,vt),i(e,Be,l),i(e,g,l),a(g,bt),a(g,se),a(se,kt),a(g,Pt),i(e,Ae,l),i(e,W,l),a(W,It),i(e,Me,l),i(e,L,l),a(L,Et),a(L,oe),a(oe,_t),a(L,xt),i(e,Ce,l),i(e,B,l),a(B,gt),a(B,le),a(le,Lt),a(B,Bt),i(e,De,l),i(e,j,l),a(j,At),i(e,Te,l),i(e,A,l),a(A,M),a(M,ie),a(A,Mt),i(e,Oe,l),i(e,q,l),a(q,Ct),i(e,He,l),i(e,T,l),T.innerHTML=Ra,i(e,Ne,l),i(e,G,l),a(G,Dt),i(e,Se,l),i(e,f,l),a(f,Tt),a(f,ne),a(ne,Ot),a(f,Ht),a(f,re),a(re,Nt),a(f,St),a(f,he),a(he,Xt),a(f,Ft),i(e,Xe,l),i(e,m,l),a(m,Wt),a(m,de),a(de,jt),a(m,qt),a(m,ce),a(ce,Gt),a(m,Rt),a(m,ue),a(ue,zt),a(m,Ut),i(e,Fe,l),i(e,p,l),a(p,Kt),a(p,pe),a(pe,Vt),a(p,Jt),a(p,fe),a(fe,Qt),a(p,Yt),a(p,me),a(me,Zt),a(p,$t),a(p,we),a(we,ea),a(p,ta),i(e,We,l),i(e,R,l),a(R,aa),i(e,je,l),i(e,O,l),O.innerHTML=za,i(e,qe,l),i(e,z,l),a(z,sa),i(e,Ge,l),i(e,U,l),a(U,oa)},p:ra,i:ra,o:ra,d(e){e&&t(b),e&&t(ye),e&&t(H),e&&t(ve),e&&t(k),e&&t(be),e&&t(w),e&&t(ke),e&&t(N),e&&t(Pe),e&&t(y),e&&t(Ie),e&&t(I),e&&t(Ee),e&&t(E),e&&t(_e),e&&t(S),e&&t(xe),e&&t(_),e&&t(ge),e&&t(X),e&&t(Le),e&&t(F),e&&t(Be),e&&t(g),e&&t(Ae),e&&t(W),e&&t(Me),e&&t(L),e&&t(Ce),e&&t(B),e&&t(De),e&&t(j),e&&t(Te),e&&t(A),e&&t(Oe),e&&t(q),e&&t(He),e&&t(T),e&&t(Ne),e&&t(G),e&&t(Se),e&&t(f),e&&t(Xe),e&&t(m),e&&t(Fe),e&&t(p),e&&t(We),e&&t(R),e&&t(je),e&&t(O),e&&t(qe),e&&t(z),e&&t(Ge),e&&t(U)}}}const $a={slug:"c087r",date:"20 November 2024",title:"MetalLB in a homelab explainer",description:"A bit of an explanation of how MetalLB works and what it does in a bare metal homelab setup. And how to use that with microk8s more specifically",tags:["homelab","kubernetes","networks","engineering"]};class es extends Va{constructor(b){super(),Ja(this,b,null,Ya,Qa,{})}}export{es as default,$a as metadata};
