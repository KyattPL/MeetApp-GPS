import{S as $,i as D,s as F,l as h,n as b,A as y,o as d,U as A,a as M,q as c,w as B,I as E,M as j,y as f,d as I,z as R,f as J,Q as V,ad as W,m as K,p as L,ae as X,b as g,t as v,v as O,r as Y,e as Z,g as x,c as ee,aa as te}from"./index.fd95efca.js";import{e as ae}from"./fetchWrapper.486a233b.js";import{H as re}from"./Header.7a42f646.js";import"./stores.ccae7de5.js";function G(r){let e;return{c(){e=h("div"),d(e,"class","h-4 w-4 bg-orange rounded-full")},m(o,n){M(o,e,n)},d(o){o&&I(e)}}}function le(r){let e,o,n,t,i,a,l,s,m=r[0].firstName+"",C,H,k=r[0].lastName+"",N,S,w,U=r[0].email+"",P,q,z,u=!r[2]&&G();return{c(){e=h("div"),u&&u.c(),o=b(),n=h("div"),t=h("img"),a=b(),l=h("div"),s=h("div"),C=y(m),H=b(),N=y(k),S=b(),w=h("div"),P=y(U),d(t,"class","rounded-full"),A(t.src,i=r[0].profilePicture)||d(t,"src",i),d(t,"alt","User avatar"),d(t,"referrerpolicy","no-referrer"),d(n,"class","h-12 w-12"),d(s,"class","flex-1 w-52 font-bold"),d(w,"class","flex-1 w-52"),d(l,"class","flex flex-col break-words flex-wrap"),d(e,"class","rounded-2xl m-2 p-2 justify-around flex flex-row bg-olive text-cocoa items-center hover:cursor-pointer")},m(p,_){M(p,e,_),u&&u.m(e,null),c(e,o),c(e,n),c(n,t),c(e,a),c(e,l),c(l,s),c(s,C),c(s,H),c(s,N),c(l,S),c(l,w),c(w,P),q||(z=[B(e,"click",function(){E(r[3](`/chat/${r[1]}`))&&r[3](`/chat/${r[1]}`).apply(this,arguments)}),B(e,"keydown",function(){E(r[3](`/chat/${r[1]}`))&&r[3](`/chat/${r[1]}`).apply(this,arguments)})],q=!0)},p(p,[_]){r=p,r[2]?u&&(u.d(1),u=null):u||(u=G(),u.c(),u.m(e,o)),_&1&&!A(t.src,i=r[0].profilePicture)&&d(t,"src",i),_&1&&m!==(m=r[0].firstName+"")&&j(C,m),_&1&&k!==(k=r[0].lastName+"")&&j(N,k),_&1&&U!==(U=r[0].email+"")&&j(P,U)},i:f,o:f,d(p){p&&I(e),u&&u.d(),q=!1,R(z)}}}function ne(r,e,o){let n;J(r,V,l=>o(3,n=l));let{partner:t}=e,{chatroomId:i}=e,{noUnreadMessage:a}=e;return r.$$set=l=>{"partner"in l&&o(0,t=l.partner),"chatroomId"in l&&o(1,i=l.chatroomId),"noUnreadMessage"in l&&o(2,a=l.noUnreadMessage)},[t,i,a,n]}class oe extends ${constructor(e){super(),D(this,e,ne,le,F,{partner:0,chatroomId:1,noUnreadMessage:2})}}function Q(r,e,o){const n=r.slice();return n[4]=e[o],n}function se(r){return{c:f,m:f,p:f,i:f,o:f,d:f}}function ie(r){let e,o,n=r[0],t=[];for(let a=0;a<n.length;a+=1)t[a]=T(Q(r,n,a));const i=a=>v(t[a],1,1,()=>{t[a]=null});return{c(){for(let a=0;a<t.length;a+=1)t[a].c();e=Z()},m(a,l){for(let s=0;s<t.length;s+=1)t[s].m(a,l);M(a,e,l),o=!0},p(a,l){if(l&1){n=a[0];let s;for(s=0;s<n.length;s+=1){const m=Q(a,n,s);t[s]?(t[s].p(m,l),g(t[s],1)):(t[s]=T(m),t[s].c(),g(t[s],1),t[s].m(e.parentNode,e))}for(x(),s=n.length;s<t.length;s+=1)i(s);ee()}},i(a){if(!o){for(let l=0;l<n.length;l+=1)g(t[l]);o=!0}},o(a){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)v(t[l]);o=!1},d(a){te(t,a),a&&I(e)}}}function T(r){let e,o;return e=new oe({props:{partner:r[4].chatPartner,chatroomId:r[4].id,noUnreadMessage:r[4].hasUnreadMessage}}),{c(){K(e.$$.fragment)},m(n,t){L(e,n,t),o=!0},p(n,t){const i={};t&1&&(i.partner=n[4].chatPartner),t&1&&(i.chatroomId=n[4].id),t&1&&(i.noUnreadMessage=n[4].hasUnreadMessage),e.$set(i)},i(n){o||(g(e.$$.fragment,n),o=!0)},o(n){v(e.$$.fragment,n),o=!1},d(n){O(e,n)}}}function ce(r){return{c:f,m:f,p:f,i:f,o:f,d:f}}function fe(r){let e,o,n,t,i;o=new re({});let a={ctx:r,current:null,token:null,hasCatch:!1,pending:ce,then:ie,catch:se,value:3,blocks:[,,,]};return W(r[1],a),{c(){e=h("div"),K(o.$$.fragment),n=b(),t=h("div"),a.block.c(),d(t,"class","lg:w-1/3 lg:mx-auto"),d(e,"class","h-screen")},m(l,s){M(l,e,s),L(o,e,null),c(e,n),c(e,t),a.block.m(t,a.anchor=null),a.mount=()=>t,a.anchor=null,i=!0},p(l,[s]){r=l,X(a,r,s)},i(l){i||(g(o.$$.fragment,l),g(a.block),i=!0)},o(l){v(o.$$.fragment,l);for(let s=0;s<3;s+=1){const m=a.blocks[s];v(m)}i=!1},d(l){l&&I(e),O(o),a.block.d(),a.token=null,a=null}}}function ue(r,e,o){let n;J(r,Y,a=>o(2,n=a));let t=[],i=ae("chatrooms/forClient","GET").then(a=>a.status===500?n("/login"):a.json()).then(a=>o(0,t=a));return[t,i]}class ge extends ${constructor(e){super(),D(this,e,ue,fe,F,{})}}export{ge as default};
