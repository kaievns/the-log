import{S as U,i as j,s as z,k as E,q as d,a as T,l as w,m as P,r as g,h as m,c as V,n as p,b as q,F as u,C as F,N as B,u as N}from"../../../chunks/index-920be987.js";function H(c,l,a){const i=c.slice();return i[1]=l[a][0],i[2]=l[a][1],i}function I(c){let l,a,i,n=c[1]+"",o,s,e,r,t,_,v=c[2]+"",$,A,b=(c[2]>1&&"s"||"")+"",S,C;return{c(){l=E("li"),a=E("a"),i=d("#"),o=d(n),r=T(),t=E("span"),_=d("- "),$=d(v),A=d(" Post"),S=d(b),C=T(),this.h()},l(f){l=w(f,"LI",{class:!0});var h=P(l);a=w(h,"A",{class:!0,href:!0,title:!0,rel:!0});var L=P(a);i=g(L,"#"),o=g(L,n),L.forEach(m),r=V(h),t=w(h,"SPAN",{class:!0});var k=P(t);_=g(k,"- "),$=g(k,v),A=g(k," Post"),S=g(k,b),k.forEach(m),C=V(h),h.forEach(m),this.h()},h(){p(a,"class","cactus-link inline-block"),p(a,"href",s=`/tags/${c[1]}`),p(a,"title",e=`View posts with the tag: ${c[1]}`),p(a,"rel","prefetch"),p(t,"class","inline-block"),p(l,"class","flex items-center gap-x-2")},m(f,h){q(f,l,h),u(l,a),u(a,i),u(a,o),u(l,r),u(l,t),u(t,_),u(t,$),u(t,A),u(t,S),u(l,C)},p(f,h){h&1&&n!==(n=f[1]+"")&&N(o,n),h&1&&s!==(s=`/tags/${f[1]}`)&&p(a,"href",s),h&1&&e!==(e=`View posts with the tag: ${f[1]}`)&&p(a,"title",e),h&1&&v!==(v=f[2]+"")&&N($,v),h&1&&b!==(b=(f[2]>1&&"s"||"")+"")&&N(S,b)},d(f){f&&m(l)}}}function D(c){let l,a,i,n,o=c[0].counts,s=[];for(let e=0;e<o.length;e+=1)s[e]=I(H(c,o,e));return{c(){l=E("h1"),a=d("Tags"),i=T(),n=E("ul");for(let e=0;e<s.length;e+=1)s[e].c();this.h()},l(e){l=w(e,"H1",{class:!0});var r=P(l);a=g(r,"Tags"),r.forEach(m),i=V(e),n=w(e,"UL",{class:!0});var t=P(n);for(let _=0;_<s.length;_+=1)s[_].l(t);t.forEach(m),this.h()},h(){p(l,"class","title mb-6"),p(n,"class","space-y-4")},m(e,r){q(e,l,r),u(l,a),q(e,i,r),q(e,n,r);for(let t=0;t<s.length;t+=1)s[t].m(n,null)},p(e,[r]){if(r&1){o=e[0].counts;let t;for(t=0;t<o.length;t+=1){const _=H(e,o,t);s[t]?s[t].p(_,r):(s[t]=I(_),s[t].c(),s[t].m(n,null))}for(;t<s.length;t+=1)s[t].d(1);s.length=o.length}},i:F,o:F,d(e){e&&m(l),e&&m(i),e&&m(n),B(s,e)}}}function G(c,l,a){let{data:i}=l;return c.$$set=n=>{"data"in n&&a(0,i=n.data)},[i]}class K extends U{constructor(l){super(),j(this,l,G,D,z,{data:0})}}export{K as default};
