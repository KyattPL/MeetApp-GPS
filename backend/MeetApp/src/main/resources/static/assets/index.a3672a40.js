import{S as R,i as U,s as J,ad as K,l as H,m as I,n as v,o as C,a as L,p as O,q as _,w as M,ae as Q,b as p,g as E,t as g,c as q,d as G,v as P,f as D,y as d,e as V,aa as W}from"./index.fd95efca.js";import{A as X}from"./AddPostButton.5456d6af.js";import{A as Y}from"./AnnouncementListElem.20ee47d3.js";import{F as Z}from"./Footer.8c527170.js";import{H as x}from"./Header.7a42f646.js";import{S as ee,a as te}from"./SortFilterColumn.51b8e73d.js";import{e as ne}from"./fetchWrapper.486a233b.js";import{c as oe,n as re,b as le,f as ae,d as se,u as ie}from"./stores.ccae7de5.js";import"./MdAdd.2dfe5c6b.js";import"./Button.06e66275.js";import"./MdDelete.1b71324b.js";import"./SelectablePill.aa455a02.js";import"./Svelecte.e6341923.js";function T(o,n,r){const s=o.slice();return s[15]=n[r],s}function ce(o){return{c:d,m:d,p:d,i:d,o:d,d}}function fe(o){let n,r,s=o[0],e=[];for(let t=0;t<s.length;t+=1)e[t]=j(T(o,s,t));const m=t=>g(e[t],1,1,()=>{e[t]=null});return{c(){for(let t=0;t<e.length;t+=1)e[t].c();n=V()},m(t,i){for(let l=0;l<e.length;l+=1)e[l].m(t,i);L(t,n,i),r=!0},p(t,i){if(i&35){s=t[0];let l;for(l=0;l<s.length;l+=1){const h=T(t,s,l);e[l]?(e[l].p(h,i),p(e[l],1)):(e[l]=j(h),e[l].c(),p(e[l],1),e[l].m(n.parentNode,n))}for(E(),l=s.length;l<e.length;l+=1)m(l);q()}},i(t){if(!r){for(let i=0;i<s.length;i+=1)p(e[i]);r=!0}},o(t){e=e.filter(Boolean);for(let i=0;i<e.length;i+=1)g(e[i]);r=!1},d(t){W(e,t),t&&G(n)}}}function j(o){let n,r;function s(){return o[12](o[15])}return n=new Y({props:{areDetailsShown:o[1]===o[15].id,data:o[15],clickHandler:s}}),{c(){I(n.$$.fragment)},m(e,m){O(n,e,m),r=!0},p(e,m){o=e;const t={};m&3&&(t.areDetailsShown=o[1]===o[15].id),m&1&&(t.data=o[15]),m&1&&(t.clickHandler=s),n.$set(t)},i(e){r||(p(n.$$.fragment,e),r=!0)},o(e){g(n.$$.fragment,e),r=!1},d(e){P(n,e)}}}function ue(o){return{c:d,m:d,p:d,i:d,o:d,d}}function B(o){let n,r;return n=new X({props:{pageType:"announcements"}}),{c(){I(n.$$.fragment)},m(s,e){O(n,s,e),r=!0},i(s){r||(p(n.$$.fragment,s),r=!0)},o(s){g(n.$$.fragment,s),r=!1},d(s){P(n,s)}}}function me(o){let n,r,s,e,m,t,i,l,h,y,F,b,z,A,k,S,a,w;r=new x({props:{pageType:"announcements"}}),e=new ee({props:{sortOptions:o[3]}}),l=new te({props:{sortOptions:o[3]}});let f={ctx:o,current:null,token:null,hasCatch:!1,pending:ue,then:fe,catch:ce,value:14,blocks:[,,,]};K(o[4],f);let c=o[2]!==null&&B();return k=new Z({props:{pageType:"announcements"}}),{c(){n=H("div"),I(r.$$.fragment),s=v(),I(e.$$.fragment),m=v(),t=H("div"),i=H("div"),I(l.$$.fragment),h=v(),y=H("div"),f.block.c(),F=v(),b=H("div"),z=v(),c&&c.c(),A=v(),I(k.$$.fragment),C(i,"class","hidden lg:block lg:w-1/3 lg:bg-green-mist overflow-auto"),C(y,"class","flex flex-col h-full lg:w-2/3 overflow-auto"),C(b,"class","hidden lg:block lg:w-1/3"),C(t,"class","h-[calc(100%-10rem)] lg:h-[calc(100%-4rem)] lg:flex lg:flex-row"),C(t,"id","postsContainer"),C(n,"class","h-screen")},m(u,$){L(u,n,$),O(r,n,null),_(n,s),O(e,n,null),_(n,m),_(n,t),_(t,i),O(l,i,null),_(t,h),_(t,y),f.block.m(y,f.anchor=null),f.mount=()=>y,f.anchor=null,_(t,F),_(t,b),_(n,z),c&&c.m(n,null),_(n,A),O(k,n,null),S=!0,a||(w=M(t,"scroll",o[6]),a=!0)},p(u,[$]){o=u,Q(f,o,$),o[2]!==null?c?$&4&&p(c,1):(c=B(),c.c(),p(c,1),c.m(n,A)):c&&(E(),g(c,1,1,()=>{c=null}),q())},i(u){S||(p(r.$$.fragment,u),p(e.$$.fragment,u),p(l.$$.fragment,u),p(f.block),p(c),p(k.$$.fragment,u),S=!0)},o(u){g(r.$$.fragment,u),g(e.$$.fragment,u),g(l.$$.fragment,u);for(let $=0;$<3;$+=1){const N=f.blocks[$];g(N)}g(c),g(k.$$.fragment,u),S=!1},d(u){u&&G(n),P(r),P(e),P(l),f.block.d(),f.token=null,f=null,c&&c.d(),P(k),a=!1,w()}}}function pe(o,n,r){let s,e,m,t,i;D(o,re,a=>r(8,s=a)),D(o,le,a=>r(9,e=a)),D(o,ae,a=>r(10,m=a)),D(o,se,a=>r(11,t=a)),D(o,ie,a=>r(2,i=a));let l=[],h=null,y=[{id:1,name:"Od najnowszych"},{id:2,name:"Od najstarszych"},{id:3,name:"Po liczbie zapisanych rosn\u0105co"},{id:4,name:"Po liczbie zapisanych malej\u0105co"}],F,b=0;oe();const z=a=>{h!==a?r(1,h=a):r(1,h=null)},A=()=>{const a=document.getElementById("postsContainer");a.offsetHeight+a.scrollTop===a.scrollHeight&&r(7,b=b+1)},k=(a,w)=>{ne(`announcements?page=${a}&`+w.toString(),"GET").then(f=>f.json()).then(f=>r(0,l=[...l,...f]))},S=a=>z(a.id);return o.$$.update=()=>{if(o.$$.dirty&3840&&(r(0,l=[]),r(7,b=0)),o.$$.dirty&3968){let a=new URLSearchParams;for(let w of t)a.append("categoryIds",w);for(let w of m)a.append("locationIds",w.id);e!==null&&a.append("sortOption",e.toString()),s!==null&&a.append("nameSearch",s),k(b,a)}},[l,h,i,y,F,z,A,b,s,e,m,t,S]}class Oe extends R{constructor(n){super(),U(this,n,pe,me,J,{})}}export{Oe as default};
