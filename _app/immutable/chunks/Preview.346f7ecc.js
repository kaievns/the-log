import{S,i as z,s as B,y as C,a as k,k as D,q,e as w,z as N,c as b,l as y,m as E,r as $,h as f,n as p,A as Q,b as u,E as A,u as P,g,d as j,B as F}from"./index.7ee8938c.js";import{D as G}from"./Date.c31591f9.js";function v(o){let t,r=o[0].description+"",s;return{c(){t=D("q"),s=q(r),this.h()},l(a){t=y(a,"Q",{class:!0});var i=E(t);s=$(i,r),i.forEach(f),this.h()},h(){p(t,"class","mt-2 block italic line-clamp-3")},m(a,i){u(a,t,i),A(t,s)},p(a,i){i&1&&r!==(r=a[0].description+"")&&P(s,r)},d(a){a&&f(t)}}}function H(o){let t,r,s,a=o[0].title+"",i,_,h,c,m;t=new G({props:{date:o[0].date,class:"min-w-[100px] text-gray-500"}});let l=o[1]&&v(o);return{c(){C(t.$$.fragment),r=k(),s=D("a"),i=q(a),h=k(),l&&l.c(),c=w(),this.h()},l(e){N(t.$$.fragment,e),r=b(e),s=y(e,"A",{href:!0,class:!0,rel:!0});var n=E(s);i=$(n,a),n.forEach(f),h=b(e),l&&l.l(e),c=w(),this.h()},h(){p(s,"href",_=`/posts/${o[0].slug}`),p(s,"class","cactus-link inline-block line-clamp-1"),p(s,"rel","prefetch")},m(e,n){Q(t,e,n),u(e,r,n),u(e,s,n),A(s,i),u(e,h,n),l&&l.m(e,n),u(e,c,n),m=!0},p(e,[n]){const d={};n&1&&(d.date=e[0].date),t.$set(d),(!m||n&1)&&a!==(a=e[0].title+"")&&P(i,a),(!m||n&1&&_!==(_=`/posts/${e[0].slug}`))&&p(s,"href",_),e[1]?l?l.p(e,n):(l=v(e),l.c(),l.m(c.parentNode,c)):l&&(l.d(1),l=null)},i(e){m||(g(t.$$.fragment,e),m=!0)},o(e){j(t.$$.fragment,e),m=!1},d(e){F(t,e),e&&f(r),e&&f(s),e&&f(h),l&&l.d(e),e&&f(c)}}}function I(o,t,r){let{post:s}=t,{showDescription:a=!0}=t;return o.$$set=i=>{"post"in i&&r(0,s=i.post),"showDescription"in i&&r(1,a=i.showDescription)},[s,a]}class L extends S{constructor(t){super(),z(this,t,I,H,B,{post:0,showDescription:1})}}export{L as P};
