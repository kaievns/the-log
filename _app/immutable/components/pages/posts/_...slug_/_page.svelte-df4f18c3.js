import{S as G,i as J,s as Q,k as _,q as K,a as C,x as V,e as F,l as b,m as k,r as L,h as p,c as N,y as q,n as e,b as E,F as g,z,u as W,f as y,t as P,A as B,D as I,E as O,N as rt,O as at,C as X,d as nt,w as Y,g as ot}from"../../../../chunks/index-920be987.js";import{D as st}from"../../../../chunks/Date-75465d9b.js";function Z(a,r,o){const n=a.slice();return n[1]=r[o],n[3]=o,n}function x(a){let r,o,n,i,u,l,d,f=a[0].tags,s=[];for(let t=0;t<f.length;t+=1)s[t]=tt(Z(a,f,t));return{c(){r=_("div"),o=I("svg"),n=I("path"),i=I("path"),u=I("path"),l=I("path"),d=C();for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){r=b(t,"DIV",{class:!0});var c=k(r);o=O(c,"svg",{"aria-hidden":!0,focusable:!0,xmlns:!0,class:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0});var m=k(o);n=O(m,"path",{stroke:!0,d:!0,fill:!0}),k(n).forEach(p),i=O(m,"path",{d:!0}),k(i).forEach(p),u=O(m,"path",{d:!0}),k(u).forEach(p),l=O(m,"path",{d:!0}),k(l).forEach(p),m.forEach(p),d=N(c);for(let $=0;$<s.length;$+=1)s[$].l(c);c.forEach(p),this.h()},h(){e(n,"stroke","none"),e(n,"d","M0 0h24v24H0z"),e(n,"fill","none"),e(i,"d","M7.859 6h-2.834a2.025 2.025 0 0 0 -2.025 2.025v2.834c0 .537 .213 1.052 .593 1.432l6.116 6.116a2.025 2.025 0 0 0 2.864 0l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-6.117 -6.116a2.025 2.025 0 0 0 -1.431 -.593z"),e(u,"d","M17.573 18.407l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-7.117 -7.116"),e(l,"d","M6 9h-.01"),e(o,"aria-hidden","true"),e(o,"focusable","false"),e(o,"xmlns","http://www.w3.org/2000/svg"),e(o,"class","inline-block h-6 w-6 ml-1"),e(o,"viewBox","0 0 24 24"),e(o,"stroke-width","1.5"),e(o,"stroke","currentColor"),e(o,"fill","none"),e(o,"stroke-linecap","round"),e(o,"stroke-linejoin","round"),e(r,"class","inline before:content-['|']")},m(t,c){E(t,r,c),g(r,o),g(o,n),g(o,i),g(o,u),g(o,l),g(r,d);for(let m=0;m<s.length;m+=1)s[m].m(r,null)},p(t,c){if(c&1){f=t[0].tags;let m;for(m=0;m<f.length;m+=1){const $=Z(t,f,m);s[m]?s[m].p($,c):(s[m]=tt($),s[m].c(),s[m].m(r,null))}for(;m<s.length;m+=1)s[m].d(1);s.length=f.length}},d(t){t&&p(r),rt(s,t)}}}function tt(a){let r,o=a[1]+"",n,i,u,l=(a[3]<a[0].tags.length-1&&", "||"")+"",d;return{c(){r=_("a"),n=K(o),d=K(l),this.h()},l(f){r=b(f,"A",{class:!0,"aria-label":!0,href:!0});var s=k(r);n=L(s,o),s.forEach(p),d=L(f,l),this.h()},h(){e(r,"class","cactus-link inline-block before:content-['#']"),e(r,"aria-label",i=`View more blogs with the tag ${a[1]}`),e(r,"href",u=`/tags/${a[1]}`)},m(f,s){E(f,r,s),g(r,n),E(f,d,s)},p(f,s){s&1&&o!==(o=f[1]+"")&&W(n,o),s&1&&i!==(i=`View more blogs with the tag ${f[1]}`)&&e(r,"aria-label",i),s&1&&u!==(u=`/tags/${f[1]}`)&&e(r,"href",u),s&1&&l!==(l=(f[3]<f[0].tags.length-1&&", "||"")+"")&&W(d,l)},d(f){f&&p(r),f&&p(d)}}}function it(a){let r,o=a[0].title+"",n,i,u,l,d,f;u=new st({props:{date:a[0].date}});let s=a[0].tags.length&&x(a);return{c(){r=_("h1"),n=K(o),i=C(),V(u.$$.fragment),l=C(),s&&s.c(),d=F(),this.h()},l(t){r=b(t,"H1",{class:!0});var c=k(r);n=L(c,o),c.forEach(p),i=N(t),q(u.$$.fragment,t),l=N(t),s&&s.l(t),d=F(),this.h()},h(){e(r,"class","title")},m(t,c){E(t,r,c),g(r,n),E(t,i,c),z(u,t,c),E(t,l,c),s&&s.m(t,c),E(t,d,c),f=!0},p(t,[c]){(!f||c&1)&&o!==(o=t[0].title+"")&&W(n,o);const m={};c&1&&(m.date=t[0].date),u.$set(m),t[0].tags.length?s?s.p(t,c):(s=x(t),s.c(),s.m(d.parentNode,d)):s&&(s.d(1),s=null)},i(t){f||(y(u.$$.fragment,t),f=!0)},o(t){P(u.$$.fragment,t),f=!1},d(t){t&&p(r),t&&p(i),B(u,t),t&&p(l),s&&s.d(t),t&&p(d)}}}function lt(a,r,o){let{post:n}=r;return a.$$set=i=>{"post"in i&&o(0,n=i.post)},[n]}class ct extends G{constructor(r){super(),J(this,r,lt,it,Q,{post:0})}}const ut="jpeg",ft=800,mt=600,pt="srgb",ht=3,dt="uchar",gt=72,_t="4:2:0",bt=!1,wt="inch",$t=!1,Et=!1,vt=void 0,kt=!1,yt=!1,Mt=""+new URL("../../../../assets/face-138fa419.jpeg",import.meta.url).href,At={format:ut,width:ft,height:mt,space:pt,channels:ht,depth:dt,density:gt,chromaSubsampling:_t,isProgressive:bt,resolutionUnit:wt,hasProfile:$t,hasAlpha:Et,aspect:vt,withoutEnlargement:kt,withoutReduction:yt,src:Mt};function Tt(a){let r,o,n,i,u,l,d,f,s,t,c,m,$,v,R,M,A,U,H,T,S,D,j;return document.title=r=a[7],{c(){o=_("meta"),n=_("meta"),i=_("meta"),u=_("meta"),l=_("meta"),d=_("meta"),f=_("meta"),s=_("meta"),c=_("meta"),m=_("meta"),v=_("meta"),M=_("meta"),A=_("meta"),H=_("meta"),T=_("meta"),S=_("meta"),D=_("meta"),j=_("meta"),this.h()},l(w){const h=at("svelte-1ijfm1m",document.head);o=b(h,"META",{name:!0,content:!0}),n=b(h,"META",{name:!0,content:!0}),i=b(h,"META",{name:!0,content:!0}),u=b(h,"META",{property:!0,content:!0}),l=b(h,"META",{property:!0,content:!0}),d=b(h,"META",{property:!0,content:!0}),f=b(h,"META",{property:!0,content:!0}),s=b(h,"META",{property:!0,content:!0}),c=b(h,"META",{property:!0,content:!0}),m=b(h,"META",{property:!0,content:!0}),v=b(h,"META",{property:!0,content:!0}),M=b(h,"META",{property:!0,content:!0}),A=b(h,"META",{property:!0,content:!0}),H=b(h,"META",{property:!0,content:!0}),T=b(h,"META",{property:!0,content:!0}),S=b(h,"META",{property:!0,content:!0}),D=b(h,"META",{property:!0,content:!0}),j=b(h,"META",{property:!0,content:!0}),h.forEach(p),this.h()},h(){e(o,"name","title"),e(o,"content",a[7]),e(n,"name","description"),e(n,"content",a[6]),e(i,"name","author"),e(i,"content",a[1]),e(u,"property","og:type"),e(u,"content","article"),e(l,"property","og:title"),e(l,"content",a[7]),e(d,"property","og:description"),e(d,"content",a[6]),e(f,"property","og:url"),e(f,"content",a[5]),e(s,"property","og:site_name"),e(s,"content",t=`${a[1]} in writing`),e(c,"property","og:image"),e(c,"content",a[4]),e(m,"property","og:image:width"),e(m,"content",$=a[3].toString()),e(v,"property","og:image:height"),e(v,"content",R=a[2].toString()),e(M,"property","article:author"),e(M,"content",a[1]),e(A,"property","article:published_time"),e(A,"content",U=a[0].date.toISOString()),e(H,"property","twitter:card"),e(H,"content","summary_large_image"),e(T,"property","twitter:url"),e(T,"content",a[5]),e(S,"property","twitter:title"),e(S,"content",a[7]),e(D,"property","twitter:description"),e(D,"content",a[6]),e(j,"property","twitter:image"),e(j,"content",a[4])},m(w,h){g(document.head,o),g(document.head,n),g(document.head,i),g(document.head,u),g(document.head,l),g(document.head,d),g(document.head,f),g(document.head,s),g(document.head,c),g(document.head,m),g(document.head,v),g(document.head,M),g(document.head,A),g(document.head,H),g(document.head,T),g(document.head,S),g(document.head,D),g(document.head,j)},p(w,[h]){h&128&&r!==(r=w[7])&&(document.title=r),h&128&&e(o,"content",w[7]),h&64&&e(n,"content",w[6]),h&2&&e(i,"content",w[1]),h&128&&e(l,"content",w[7]),h&64&&e(d,"content",w[6]),h&32&&e(f,"content",w[5]),h&2&&t!==(t=`${w[1]} in writing`)&&e(s,"content",t),h&16&&e(c,"content",w[4]),h&8&&$!==($=w[3].toString())&&e(m,"content",$),h&4&&R!==(R=w[2].toString())&&e(v,"content",R),h&2&&e(M,"content",w[1]),h&1&&U!==(U=w[0].date.toISOString())&&e(A,"content",U),h&32&&e(T,"content",w[5]),h&128&&e(S,"content",w[7]),h&64&&e(D,"content",w[6]),h&16&&e(j,"content",w[4])},i:X,o:X,d(w){p(o),p(n),p(i),p(u),p(l),p(d),p(f),p(s),p(c),p(m),p(v),p(M),p(A),p(H),p(T),p(S),p(D),p(j)}}}function St(a,r,o){let n,i,u,l,d,f,s,t,{post:c}=r;return a.$$set=m=>{"post"in m&&o(0,c=m.post)},a.$$.update=()=>{a.$$.dirty&3&&o(7,i=`${c.title} ⁍ ${n}`),a.$$.dirty&1&&o(6,u=c.description),a.$$.dirty&1&&o(5,l=c.url),a.$$.dirty&1&&o(8,d=c.thumbnail||At),a.$$.dirty&256&&o(4,f=d.src),a.$$.dirty&256&&o(3,s=Math.round(d.width)),a.$$.dirty&256&&o(2,t=Math.round(d.height))},o(1,n="Kai Evans"),[c,n,t,s,f,l,u,i,d]}class Dt extends G{constructor(r){super(),J(this,r,St,Tt,Q,{post:0})}}function et(a){let r,o,n,i,u,l,d;r=new Dt({props:{post:a[0]}}),n=new ct({props:{post:a[0]}});var f=a[1];function s(t){return{}}return f&&(l=Y(f,s())),{c(){V(r.$$.fragment),o=C(),V(n.$$.fragment),i=C(),u=_("div"),l&&V(l.$$.fragment),this.h()},l(t){q(r.$$.fragment,t),o=N(t),q(n.$$.fragment,t),i=N(t),u=b(t,"DIV",{class:!0});var c=k(u);l&&q(l.$$.fragment,c),c.forEach(p),this.h()},h(){e(u,"class","mt-8 prose prose-sm prose-cactus prose-headings:font-semibold prose-headings:before:absolute prose-headings:before:-ml-4 prose-headings:before:text-accent prose-headings:before:content-['#'] prose-th:before:content-none")},m(t,c){z(r,t,c),E(t,o,c),z(n,t,c),E(t,i,c),E(t,u,c),l&&z(l,u,null),d=!0},p(t,c){const m={};c&1&&(m.post=t[0]),r.$set(m);const $={};if(c&1&&($.post=t[0]),n.$set($),f!==(f=t[1])){if(l){ot();const v=l;P(v.$$.fragment,1,0,()=>{B(v,1)}),nt()}f?(l=Y(f,s()),V(l.$$.fragment),y(l.$$.fragment,1),z(l,u,null)):l=null}},i(t){d||(y(r.$$.fragment,t),y(n.$$.fragment,t),l&&y(l.$$.fragment,t),d=!0)},o(t){P(r.$$.fragment,t),P(n.$$.fragment,t),l&&P(l.$$.fragment,t),d=!1},d(t){B(r,t),t&&p(o),B(n,t),t&&p(i),t&&p(u),l&&B(l)}}}function jt(a){let r,o,n=a[0]&&et(a);return{c(){n&&n.c(),r=F()},l(i){n&&n.l(i),r=F()},m(i,u){n&&n.m(i,u),E(i,r,u),o=!0},p(i,[u]){i[0]?n?(n.p(i,u),u&1&&y(n,1)):(n=et(i),n.c(),y(n,1),n.m(r.parentNode,r)):n&&(ot(),P(n,1,1,()=>{n=null}),nt())},i(i){o||(y(n),o=!0)},o(i){P(n),o=!1},d(i){n&&n.d(i),i&&p(r)}}}function Pt(a,r,o){let n,i,{data:u}=r;return a.$$set=l=>{"data"in l&&o(2,u=l.data)},a.$$.update=()=>{a.$$.dirty&4&&o(0,n=u.post),a.$$.dirty&1&&o(1,i=n.content)},[n,i,u]}class Ot extends G{constructor(r){super(),J(this,r,Pt,jt,Q,{data:2})}}export{Ot as default};