import{S as D,i as J,s as K,ad as O,e as U,a as C,ae as Q,b as g,t as w,d as x,f as R,r as V,y as m,l as k,n as j,m as q,o as v,q as d,p as M,w as X,g as P,c as W,v as A,A as z,L as F,ab as Y}from"./index.6a2eaf97.js";import{B as Z}from"./Button.cef207c5.js";import{S as I}from"./SelectablePill.bbd92dc2.js";import{e as y}from"./fetchWrapper.5ae2c67b.js";function N(s,l,o){const n=s.slice();return n[10]=l[o],n}function ee(s){return{c:m,m,p:m,i:m,o:m,d:m}}function te(s){let l,o,n,e,c,t,i,a,_,h,T,r,b,S,G,p=s[1]!==null&&B(s),u=s[2]!==null&&H(s);return h=new Z({props:{clickHandler:s[4],class:"px-10 py-1",$$slots:{default:[ne]},$$scope:{ctx:s}}}),{c(){l=k("div"),o=k("div"),p&&p.c(),n=j(),e=k("div"),e.innerHTML="<p>Wybranie zainteresowa\u0144 pozwoli nam na dopasowanie tre\u015Bci specjalnie dla Ciebie.</p>",c=j(),t=k("div"),u&&u.c(),i=j(),a=k("div"),_=k("div"),q(h.$$.fragment),T=j(),r=k("button"),r.innerHTML='<div class="text-sm text-sage px-16 text-center py-2">Wybior\u0119 zainteresowania nast\u0119pnym razem</div>',v(e,"class","text-cocoa px-8 text-base"),v(t,"class","px-2 py-2"),v(o,"class","flex flex-col items-center"),v(_,"class",""),v(a,"class","flex flex-col items-center"),v(l,"class","flex flex-col bg-ivory h-screen justify-between lg:w-1/3 lg:mx-auto lg:py-10")},m(f,$){C(f,l,$),d(l,o),p&&p.m(o,null),d(o,n),d(o,e),d(o,c),d(o,t),u&&u.m(t,null),d(l,i),d(l,a),d(a,_),M(h,_,null),d(a,T),d(a,r),b=!0,S||(G=X(r,"click",s[7]),S=!0)},p(f,$){f[1]!==null?p?p.p(f,$):(p=B(f),p.c(),p.m(o,n)):p&&(p.d(1),p=null),f[2]!==null?u?(u.p(f,$),$&4&&g(u,1)):(u=H(f),u.c(),g(u,1),u.m(t,null)):u&&(P(),w(u,1,1,()=>{u=null}),W());const E={};$&8192&&(E.$$scope={dirty:$,ctx:f}),h.$set(E)},i(f){b||(g(u),g(h.$$.fragment,f),b=!0)},o(f){w(u),w(h.$$.fragment,f),b=!1},d(f){f&&x(l),p&&p.d(),u&&u.d(),A(h),S=!1,G()}}}function B(s){let l,o,n=s[1].firstName+"",e,c;return{c(){l=k("div"),o=z("Cze\u015B\u0107 "),e=z(n),c=z("!"),v(l,"class","text-cocoa text-2xl py-4 uppercase")},m(t,i){C(t,l,i),d(l,o),d(l,e),d(l,c)},p(t,i){i&2&&n!==(n=t[1].firstName+"")&&F(e,n)},d(t){t&&x(l)}}}function H(s){let l,o,n=s[2],e=[];for(let t=0;t<n.length;t+=1)e[t]=L(N(s,n,t));const c=t=>w(e[t],1,1,()=>{e[t]=null});return{c(){for(let t=0;t<e.length;t+=1)e[t].c();l=U()},m(t,i){for(let a=0;a<e.length;a+=1)e[a].m(t,i);C(t,l,i),o=!0},p(t,i){if(i&13){n=t[2];let a;for(a=0;a<n.length;a+=1){const _=N(t,n,a);e[a]?(e[a].p(_,i),g(e[a],1)):(e[a]=L(_),e[a].c(),g(e[a],1),e[a].m(l.parentNode,l))}for(P(),a=n.length;a<e.length;a+=1)c(a);W()}},i(t){if(!o){for(let i=0;i<n.length;i+=1)g(e[i]);o=!0}},o(t){e=e.filter(Boolean);for(let i=0;i<e.length;i+=1)w(e[i]);o=!1},d(t){Y(e,t),t&&x(l)}}}function le(s){let l=s[10].name+"",o;return{c(){o=z(l)},m(n,e){C(n,o,e)},p(n,e){e&4&&l!==(l=n[10].name+"")&&F(o,l)},d(n){n&&x(o)}}}function L(s){let l,o;function n(){return s[6](s[10])}return l=new I({props:{class:"mx-2 my-1 px-6",isSelected:s[0].includes(s[10].id),clickCallback:n,$$slots:{default:[le]},$$scope:{ctx:s}}}),{c(){q(l.$$.fragment)},m(e,c){M(l,e,c),o=!0},p(e,c){s=e;const t={};c&5&&(t.isSelected=s[0].includes(s[10].id)),c&4&&(t.clickCallback=n),c&8196&&(t.$$scope={dirty:c,ctx:s}),l.$set(t)},i(e){o||(g(l.$$.fragment,e),o=!0)},o(e){w(l.$$.fragment,e),o=!1},d(e){A(l,e)}}}function ne(s){let l;return{c(){l=z("Gotowe!")},m(o,n){C(o,l,n)},d(o){o&&x(l)}}}function oe(s){return{c:m,m,p:m,i:m,o:m,d:m}}function se(s){let l,o,n={ctx:s,current:null,token:null,hasCatch:!1,pending:oe,then:te,catch:ee,value:9,blocks:[,,,]};return O(s[5](),n),{c(){l=U(),n.block.c()},m(e,c){C(e,l,c),n.block.m(e,n.anchor=c),n.mount=()=>l.parentNode,n.anchor=l,o=!0},p(e,[c]){s=e,Q(n,s,c)},i(e){o||(g(n.block),o=!0)},o(e){for(let c=0;c<3;c+=1){const t=n.blocks[c];w(t)}o=!1},d(e){e&&x(l),n.block.d(e),n.token=null,n=null}}}function ae(s,l,o){let n;R(s,V,r=>o(8,n=r));let e=null,c=null,t=[];y("categories","GET").then(r=>r.json()).then(r=>o(2,c=r)),y("users/categories","GET").then(r=>r.json()).then(r=>{for(const b of r)t.push(b.id)}),y("users/details","GET").then(r=>r.json()).then(r=>o(1,e=r));const i=r=>{t.includes(r)?o(0,t=t.filter(b=>b!==r)):o(0,t=[...t,r])},a=()=>{y("users/categories","PUT",{categories:t}).then(r=>window.location.href="http://meetapp-ux.northeurope.cloudapp.azure.com:8080")},_=async()=>{await(await y("users/details","GET")).json()===null&&n("/login")},h=r=>i(r.id),T=()=>window.location.href="http://meetapp-ux.northeurope.cloudapp.azure.com:8080/";return s.$$.update=()=>{s.$$.dirty&1&&console.log(t)},[t,e,c,i,a,_,h,T]}class fe extends D{constructor(l){super(),J(this,l,ae,se,K,{})}}export{fe as default};
