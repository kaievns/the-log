function w(){}function G(t,e){for(const n in e)t[n]=e[n];return t}function k(t){return t()}function T(){return Object.create(null)}function y(t){t.forEach(k)}function q(t){return typeof t=="function"}function lt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let x;function st(t,e){return x||(x=document.createElement("a")),x.href=e,t===x.href}function I(t){return Object.keys(t).length===0}function J(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ot(t,e,n){t.$$.on_destroy.push(J(e,n))}function ft(t,e,n,i){if(t){const r=B(t,e,n,i);return t[0](r)}}function B(t,e,n,i){return t[1]&&i?G(n.ctx.slice(),t[1](i(e))):n.ctx}function at(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(e.dirty.length,r.length);for(let s=0;s<c;s+=1)o[s]=e.dirty[s]|r[s];return o}return e.dirty|r}return e.dirty}function _t(t,e,n,i,r,o){if(r){const c=B(e,n,i,o);t.p(c,r)}}function dt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let E=!1;function K(){E=!0}function R(){E=!1}function W(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let l=0;l<e.length;l++){const a=e[l];a.claim_order!==void 0&&u.push(a)}e=u}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let u=0;u<e.length;u++){const l=e[u].claim_order,a=(r>0&&e[n[r]].claim_order<=l?r+1:W(1,r,g=>e[n[g]].claim_order,l))-1;i[u]=n[a]+1;const f=a+1;n[f]=u,r=Math.max(f,r)}const o=[],c=[];let s=e.length-1;for(let u=n[r]+1;u!=0;u=i[u-1]){for(o.push(e[u-1]);s>=u;s--)c.push(e[s]);s--}for(;s>=0;s--)c.push(e[s]);o.reverse(),c.sort((u,l)=>u.claim_order-l.claim_order);for(let u=0,l=0;u<c.length;u++){for(;l<o.length&&c[u].claim_order>=o[l].claim_order;)l++;const a=l<o.length?o[l]:null;t.insertBefore(c[u],a)}}function U(t,e){if(E){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ht(t,e,n){E&&!n?U(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function mt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function pt(){return S(" ")}function yt(){return S("")}function gt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function xt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function H(t,e,n,i,r=!1){tt(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(e(s)){const u=n(s);return u===void 0?t.splice(c,1):t[c]=u,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(e(s)){const u=n(s);return u===void 0?t.splice(c,1):t[c]=u,r?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function L(t,e,n,i){return H(t,r=>r.nodeName===e,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];n[s.name]||o.push(s.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(e))}function bt(t,e,n){return L(t,e,n,X)}function $t(t,e,n){return L(t,e,n,Y)}function et(t,e){return H(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>S(e),!0)}function wt(t){return et(t," ")}function Et(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function vt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Nt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(r)):o===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function At(t,e){return new t(e)}let p;function m(t){p=t}function O(){if(!p)throw new Error("Function called outside component initialization");return p}function St(t){O().$$.on_mount.push(t)}function jt(t){O().$$.after_update.push(t)}const h=[],M=[],b=[],D=[],P=Promise.resolve();let N=!1;function z(){N||(N=!0,P.then(F))}function Ct(){return z(),P}function A(t){b.push(t)}const v=new Set;let d=0;function F(){if(d!==0)return;const t=p;do{try{for(;d<h.length;){const e=h[d];d++,m(e),nt(e.$$)}}catch(e){throw h.length=0,d=0,e}for(m(null),h.length=0,d=0;M.length;)M.pop()();for(let e=0;e<b.length;e+=1){const n=b[e];v.has(n)||(v.add(n),n())}b.length=0}while(h.length);for(;D.length;)D.pop()();N=!1,v.clear(),m(t)}function nt(t){if(t.fragment!==null){t.update(),y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const $=new Set;let _;function Tt(){_={r:0,c:[],p:_}}function Mt(){_.r||y(_.c),_=_.p}function it(t,e){t&&t.i&&($.delete(t),t.i(e))}function Dt(t,e,n,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function kt(t){t&&t.c()}function qt(t,e){t&&t.l(e)}function rt(t,e,n,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),i||A(()=>{const c=t.$$.on_mount.map(k).filter(q);t.$$.on_destroy?t.$$.on_destroy.push(...c):y(c),t.$$.on_mount=[]}),o.forEach(A)}function ct(t,e){const n=t.$$;n.fragment!==null&&(y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ut(t,e){t.$$.dirty[0]===-1&&(h.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Bt(t,e,n,i,r,o,c,s=[-1]){const u=p;m(t);const l=t.$$={fragment:null,ctx:[],props:o,update:w,not_equal:r,bound:T(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:T(),dirty:s,skip_bound:!1,root:e.target||u.$$.root};c&&c(l.root);let a=!1;if(l.ctx=n?n(t,e.props||{},(f,g,...j)=>{const C=j.length?j[0]:g;return l.ctx&&r(l.ctx[f],l.ctx[f]=C)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](C),a&&ut(t,f)),g}):[],l.update(),a=!0,y(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){K();const f=Z(e.target);l.fragment&&l.fragment.l(f),f.forEach(V)}else l.fragment&&l.fragment.c();e.intro&&it(t.$$.fragment),rt(t,e.target,e.anchor,e.customElement),R(),F()}m(u)}class Ht{$destroy(){ct(this,1),this.$destroy=w}$on(e,n){if(!q(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!I(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ct as A,Ct as B,w as C,Y as D,$t as E,U as F,gt as G,st as H,ft as I,_t as J,dt as K,at as L,ot as M,mt as N,Nt as O,Ht as S,pt as a,ht as b,wt as c,Mt as d,yt as e,it as f,Tt as g,V as h,Bt as i,jt as j,X as k,bt as l,Z as m,xt as n,St as o,vt as p,S as q,et as r,lt as s,Dt as t,Et as u,M as v,At as w,kt as x,qt as y,rt as z};