import{f as oe}from"../chunks/posts.42adbe80.js";import{S as ne,i as ie,s as ce,k as w,q as D,a as j,C as T,l as b,m,r as H,h as u,c as B,D as q,n as s,b as N,E as f,g as U,f as he,d as R,N as ee,y as fe,z as ue,A as _e,B as pe,u as ge,v as de}from"../chunks/index.7ee8938c.js";import{P as me}from"../chunks/Preview.346f7ecc.js";const ve=async()=>{const i=await oe(),l=[...new Set(i.flatMap(a=>a.tags))].sort();return{posts:i,tags:l}},$e=Object.freeze(Object.defineProperty({__proto__:null,load:ve},Symbol.toStringTag,{value:"Module"}));function te(i,l,a){const _=i.slice();return _[3]=l[a],_}function le(i,l,a){const _=i.slice();return _[6]=l[a],_}function ae(i){let l,a,_,c;return a=new me({props:{post:i[6]}}),{c(){l=w("li"),fe(a.$$.fragment),_=j(),this.h()},l(r){l=b(r,"LI",{class:!0});var h=m(l);ue(a.$$.fragment,h),_=B(h),h.forEach(u),this.h()},h(){s(l,"class","flex flex-wrap items-center gap-x-2 [&_q]:w-full")},m(r,h){N(r,l,h),_e(a,l,null),f(l,_),c=!0},p(r,h){const E={};h&2&&(E.post=r[6]),a.$set(E)},i(r){c||(U(a.$$.fragment,r),c=!0)},o(r){R(a.$$.fragment,r),c=!1},d(r){r&&u(l),pe(a)}}}function se(i){let l,a,_,c=i[3]+"",r,h,E,v;return{c(){l=w("li"),a=w("a"),_=D("#"),r=D(c),v=j(),this.h()},l(g){l=b(g,"LI",{});var o=m(l);a=b(o,"A",{class:!0,href:!0,"aria-label":!0});var k=m(a);_=H(k,"#"),r=H(k,c),k.forEach(u),v=B(o),o.forEach(u),this.h()},h(){s(a,"class","flex items-center justify-center rounded-lg bg-accent p-1"),s(a,"href",h=`/tags/${i[3]}`),s(a,"aria-label",E=`View all posts with the tag: ${i[3]}`)},m(g,o){N(g,l,o),f(l,a),f(a,_),f(a,r),f(l,v)},p(g,o){o&1&&c!==(c=g[3]+"")&&ge(r,c),o&1&&h!==(h=`/tags/${g[3]}`)&&s(a,"href",h),o&1&&E!==(E=`View all posts with the tag: ${g[3]}`)&&s(a,"aria-label",E)},d(g){g&&u(l)}}}function we(i){let l,a,_,c,r,h,E,v,g,o,k,C,I,z,F,G,y,J,A,x,K,O,P=i[1],n=[];for(let t=0;t<P.length;t+=1)n[t]=ae(le(i,P,t));const re=t=>R(n[t],1,1,()=>{n[t]=null});let M=i[0],d=[];for(let t=0;t<M.length;t+=1)d[t]=se(te(i,M,t));return{c(){l=w("h1"),a=D("Posts"),_=j(),c=w("div"),r=w("section"),h=w("ul");for(let t=0;t<n.length;t+=1)n[t].c();E=j(),v=w("aside"),g=w("h2"),o=T("svg"),k=T("path"),C=T("path"),I=T("path"),z=T("path"),F=D(`
            Tags`),G=j(),y=w("ul");for(let t=0;t<d.length;t+=1)d[t].c();J=j(),A=w("span"),x=w("a"),K=D("View all →"),this.h()},l(t){l=b(t,"H1",{class:!0});var p=m(l);a=H(p,"Posts"),p.forEach(u),_=B(t),c=b(t,"DIV",{class:!0});var e=m(c);r=b(e,"SECTION",{"aria-label":!0});var $=m(r);h=b($,"UL",{class:!0});var W=m(h);for(let S=0;S<n.length;S+=1)n[S].l(W);W.forEach(u),$.forEach(u),E=B(e),v=b(e,"ASIDE",{});var V=m(v);g=b(V,"H2",{class:!0});var Q=m(g);o=q(Q,"svg",{"aria-hidden":!0,xmlns:!0,class:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0});var L=m(o);k=q(L,"path",{stroke:!0,d:!0,fill:!0}),m(k).forEach(u),C=q(L,"path",{d:!0}),m(C).forEach(u),I=q(L,"path",{d:!0}),m(I).forEach(u),z=q(L,"path",{d:!0}),m(z).forEach(u),L.forEach(u),F=H(Q,`
            Tags`),Q.forEach(u),G=B(V),y=b(V,"UL",{class:!0});var X=m(y);for(let S=0;S<d.length;S+=1)d[S].l(X);X.forEach(u),J=B(V),A=b(V,"SPAN",{class:!0});var Y=m(A);x=b(Y,"A",{class:!0,href:!0,"aria-label":!0});var Z=m(x);K=H(Z,"View all →"),Z.forEach(u),Y.forEach(u),V.forEach(u),e.forEach(u),this.h()},h(){s(l,"class","title mb-6"),s(h,"class","space-y-8 text-left"),s(r,"aria-label","Blog post list"),s(k,"stroke","none"),s(k,"d","M0 0h24v24H0z"),s(k,"fill","none"),s(C,"d","M7.859 6h-2.834a2.025 2.025 0 0 0 -2.025 2.025v2.834c0 .537 .213 1.052 .593 1.432l6.116 6.116a2.025 2.025 0 0 0 2.864 0l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-6.117 -6.116a2.025 2.025 0 0 0 -1.431 -.593z"),s(I,"d","M17.573 18.407l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-7.117 -7.116"),s(z,"d","M6 9h-.01"),s(o,"aria-hidden","true"),s(o,"xmlns","http://www.w3.org/2000/svg"),s(o,"class","h-6 w-6"),s(o,"viewBox","0 0 24 24"),s(o,"stroke-width","1.5"),s(o,"stroke","currentColor"),s(o,"fill","none"),s(o,"stroke-linecap","round"),s(o,"stroke-linejoin","round"),s(g,"class","mb-4 flex items-center text-lg font-semibold"),s(y,"class","flex flex-wrap gap-2 text-bgColor"),s(x,"class","sm:hover:text-accent"),s(x,"href","/tags"),s(x,"aria-label","View all blog categories"),s(A,"class","mt-4 block sm:text-right"),s(c,"class","grid gap-y-16 sm:grid-cols-[3fr_1fr] sm:gap-x-8")},m(t,p){N(t,l,p),f(l,a),N(t,_,p),N(t,c,p),f(c,r),f(r,h);for(let e=0;e<n.length;e+=1)n[e]&&n[e].m(h,null);f(c,E),f(c,v),f(v,g),f(g,o),f(o,k),f(o,C),f(o,I),f(o,z),f(g,F),f(v,G),f(v,y);for(let e=0;e<d.length;e+=1)d[e]&&d[e].m(y,null);f(v,J),f(v,A),f(A,x),f(x,K),O=!0},p(t,[p]){if(p&2){P=t[1];let e;for(e=0;e<P.length;e+=1){const $=le(t,P,e);n[e]?(n[e].p($,p),U(n[e],1)):(n[e]=ae($),n[e].c(),U(n[e],1),n[e].m(h,null))}for(de(),e=P.length;e<n.length;e+=1)re(e);he()}if(p&1){M=t[0];let e;for(e=0;e<M.length;e+=1){const $=te(t,M,e);d[e]?d[e].p($,p):(d[e]=se($),d[e].c(),d[e].m(y,null))}for(;e<d.length;e+=1)d[e].d(1);d.length=M.length}},i(t){if(!O){for(let p=0;p<P.length;p+=1)U(n[p]);O=!0}},o(t){n=n.filter(Boolean);for(let p=0;p<n.length;p+=1)R(n[p]);O=!1},d(t){t&&u(l),t&&u(_),t&&u(c),ee(n,t),ee(d,t)}}}function be(i,l,a){let _,c,{data:r}=l;return i.$$set=h=>{"data"in h&&a(2,r=h.data)},i.$$.update=()=>{i.$$.dirty&4&&a(1,_=r.posts),i.$$.dirty&4&&a(0,c=r.tags)},[c,_,r]}class ye extends ne{constructor(l){super(),ie(this,l,be,we,ce,{data:2})}}export{ye as component,$e as universal};
