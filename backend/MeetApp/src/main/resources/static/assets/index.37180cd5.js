import{S as Me,i as De,s as ze,B as ne,m as H,p as B,C as Ee,D as He,b as w,t as k,v as L,E as he,F as Be,o as i,a as z,y as x,d as P,ad as Le,l as u,n as g,q as o,ae as Ne,g as Pe,c as je,f as le,w as S,O as ve,P as ee,z as Fe,r as Ie,T as Te,A as oe,U as be,M as ge,aa as qe}from"./index.fd95efca.js";import{I as Ue,H as Oe,d as Se,e as Ve,g as $e,f as xe}from"./Header.7a42f646.js";import{e as we}from"./fetchWrapper.486a233b.js";import{u as Ge}from"./stores.ccae7de5.js";import{P as Ke}from"./Pill.d36e3051.js";import{M as Ze}from"./MdEdit.97cfc721.js";function Je(l){let e;return{c(){e=Be("path"),i(e,"d","M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z")},m(t,n){z(t,e,n)},p:x,d(t){t&&P(e)}}}function Qe(l){let e,t;const n=[{viewBox:"0 0 24 24"},l[0]];let f={$$slots:{default:[Je]},$$scope:{ctx:l}};for(let c=0;c<n.length;c+=1)f=ne(f,n[c]);return e=new Ue({props:f}),{c(){H(e.$$.fragment)},m(c,r){B(e,c,r),t=!0},p(c,[r]){const s=r&1?Ee(n,[n[0],He(c[0])]):{};r&2&&(s.$$scope={dirty:r,ctx:c}),e.$set(s)},i(c){t||(w(e.$$.fragment,c),t=!0)},o(c){k(e.$$.fragment,c),t=!1},d(c){L(e,c)}}}function Re(l,e,t){return l.$$set=n=>{t(0,e=ne(ne({},e),he(n)))},e=he(e),[e]}class We extends Me{constructor(e){super(),De(this,e,Re,Qe,ze,{})}}function ke(l,e,t){const n=l.slice();return n[9]=e[t],n[11]=t,n}function Xe(l){return{c:x,m:x,p:x,i:x,o:x,d:x}}function Ye(l){let e,t,n,f,c,r,s=l[1].firstName+"",v,d,$=l[1].lastName+"",p,N,C,_,j,se,V,re,F,I,G,ae,O,ie,M,K,T,ce,Z,J,fe,D,Q,q,ue,R,W,de,A,X,U,me,Y,y,te,pe;I=new Ze({});let E=l[8],m=[];for(let a=0;a<E.length;a+=1)m[a]=ye(ke(l,E,a));const Ae=a=>k(m[a],1,1,()=>{m[a]=null});return T=new Se({}),q=new Ve({}),U=new We({}),{c(){e=u("div"),t=u("div"),n=u("img"),c=g(),r=u("div"),v=oe(s),d=g(),p=oe($),N=g(),C=u("div"),_=u("div"),j=u("div"),se=g(),V=u("p"),V.textContent="Moje Zainteresowania",re=g(),F=u("a"),H(I.$$.fragment),ae=g(),O=u("div");for(let a=0;a<m.length;a+=1)m[a].c();ie=g(),M=u("a"),K=u("div"),H(T.$$.fragment),ce=g(),Z=u("p"),Z.textContent="Moje Posty",fe=g(),D=u("a"),Q=u("div"),H(q.$$.fragment),ue=g(),R=u("p"),R.textContent="Bior\u0119 udzia\u0142",de=g(),A=u("button"),X=u("div"),H(U.$$.fragment),me=g(),Y=u("p"),Y.textContent="Usu\u0144 konto",i(n,"class","rounded-full w-64 h-64"),be(n.src,f=l[1].profilePicture)||i(n,"src",f),i(n,"alt","Profile avatar"),i(t,"class","w-64 h-64 my-2 flex-none"),i(r,"class","text-cocoa text-3xl font-bold pb-12 text-center"),i(j,"class","h-6 w-6 mr-4"),i(V,"class","text-cocoa text-xl font-bold text-center"),i(F,"href",G=l[2]("/chooseCategories")),i(F,"class","h-6 w-6 ml-4 hover:opacity-50 transition ease-in-out delay-100 cursor-pointer"),i(_,"class","flex flex-row items-center mb-5"),i(O,"class","flex flex-wrap justify-center"),i(C,"class","flex flex-col items-center pb-12"),i(K,"class","h-5 w-7 mr-2 text-cocoa"),i(Z,"class","text-pine text-2xl hover:opacity-50 transition ease-in-out delay-100 cursor-pointer"),i(M,"class","mb-4 flex flex-row items-center"),i(M,"href",J=l[2]("/user/posts")),i(Q,"class","h-6 w-6 mr-2 text-cocoa"),i(R,"class","text-pine text-2xl hover:opacity-50 transition ease-in-out delay-100 cursor-pointer"),i(D,"class","mb-4 flex flex-row items-center"),i(D,"href",W=l[2]("/myActivities")),i(X,"class","h-6 w-6 mr-2 text-cocoa"),i(Y,"class","text-pine text-2xl hover:opacity-50 transition ease-in-out delay-100 cursor-pointer"),i(A,"class","mb-8 flex flex-row items-center"),i(e,"class","flex flex-col items-center px-6 overflow-scroll h-[calc(100%-4rem)]")},m(a,b){z(a,e,b),o(e,t),o(t,n),o(e,c),o(e,r),o(r,v),o(r,d),o(r,p),o(e,N),o(e,C),o(C,_),o(_,j),o(_,se),o(_,V),o(_,re),o(_,F),B(I,F,null),o(C,ae),o(C,O);for(let h=0;h<m.length;h+=1)m[h].m(O,null);o(e,ie),o(e,M),o(M,K),B(T,K,null),o(M,ce),o(M,Z),o(e,fe),o(e,D),o(D,Q),B(q,Q,null),o(D,ue),o(D,R),o(e,de),o(e,A),o(A,X),B(U,X,null),o(A,me),o(A,Y),y=!0,te||(pe=S(A,"click",l[6]),te=!0)},p(a,b){if((!y||b&2&&!be(n.src,f=a[1].profilePicture))&&i(n,"src",f),(!y||b&2)&&s!==(s=a[1].firstName+"")&&ge(v,s),(!y||b&2)&&$!==($=a[1].lastName+"")&&ge(p,$),(!y||b&4&&G!==(G=a[2]("/chooseCategories")))&&i(F,"href",G),b&8){E=a[8];let h;for(h=0;h<E.length;h+=1){const _e=ke(a,E,h);m[h]?(m[h].p(_e,b),w(m[h],1)):(m[h]=ye(_e),m[h].c(),w(m[h],1),m[h].m(O,null))}for(Pe(),h=E.length;h<m.length;h+=1)Ae(h);je()}(!y||b&4&&J!==(J=a[2]("/user/posts")))&&i(M,"href",J),(!y||b&4&&W!==(W=a[2]("/myActivities")))&&i(D,"href",W)},i(a){if(!y){w(I.$$.fragment,a);for(let b=0;b<E.length;b+=1)w(m[b]);w(T.$$.fragment,a),w(q.$$.fragment,a),w(U.$$.fragment,a),y=!0}},o(a){k(I.$$.fragment,a),m=m.filter(Boolean);for(let b=0;b<m.length;b+=1)k(m[b]);k(T.$$.fragment,a),k(q.$$.fragment,a),k(U.$$.fragment,a),y=!1},d(a){a&&P(e),L(I),qe(m,a),L(T),L(q),L(U),te=!1,pe()}}}function et(l){let e=l[9].name+"",t,n;return{c(){t=oe(e),n=g()},m(f,c){z(f,t,c),z(f,n,c)},p:x,d(f){f&&P(t),f&&P(n)}}}function ye(l){let e,t;return e=new Ke({props:{class:"flex self-center px-4 mx-1 my-1",$$slots:{default:[et]},$$scope:{ctx:l}}}),{c(){H(e.$$.fragment)},m(n,f){B(e,n,f),t=!0},p(n,f){const c={};f&4096&&(c.$$scope={dirty:f,ctx:n}),e.$set(c)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){L(e,n)}}}function tt(l){return{c:x,m:x,p:x,i:x,o:x,d:x}}function Ce(l){let e,t,n,f,c,r,s,v,d,$,p,N,C;return{c(){e=u("div"),t=u("div"),t.textContent="Czy na pewno chcesz usun\u0105\u0107 swoje konto?",n=g(),f=u("button"),f.textContent="TAK",c=g(),r=u("button"),r.textContent="NIE",v=g(),d=u("div"),i(t,"class","text-center text-cocoa font-bold"),i(f,"class","bg-pickle border-pine border-2 text-ivory rounded-full hover:opacity-90 transition ease-in-out delay-100 focus:ring focus:ring-tea font-bold px-10 py-1"),i(r,"class","bg-orange border-taupe border-2 text-ivory rounded-full hover:opacity-90 transition ease-in-out delay-100 focus:ring focus:ring-tea font-bold px-10 py-1"),i(e,"class","z-20 flex flex-col fixed h-64 bg-ivory w-48 rounded-xl border-pine border-2 left-1/2 -ml-24 top-1/2 -mt-32 items-center justify-around"),i(d,"class","z-10 w-screen h-screen fixed bg-black bg-opacity-30 top-0 left-0")},m(_,j){z(_,e,j),o(e,t),o(e,n),o(e,f),o(e,c),o(e,r),z(_,v,j),z(_,d,j),p=!0,N||(C=[S(f,"click",l[4]),S(r,"click",l[5]),S(d,"click",l[5]),S(d,"keydown",l[5])],N=!0)},p:x,i(_){p||(ve(()=>{s||(s=ee(e,$e,{},!0)),s.run(1)}),ve(()=>{$||($=ee(d,xe,{},!0)),$.run(1)}),p=!0)},o(_){s||(s=ee(e,$e,{},!1)),s.run(0),$||($=ee(d,xe,{},!1)),$.run(0),p=!1},d(_){_&&P(e),_&&s&&s.end(),_&&P(v),_&&P(d),_&&$&&$.end(),N=!1,Fe(C)}}}function lt(l){let e,t,n,f,c;t=new Oe({});let r={ctx:l,current:null,token:null,hasCatch:!1,pending:tt,then:Ye,catch:Xe,value:8,blocks:[,,,]};Le(l[3](),r);let s=l[0]&&Ce(l);return{c(){e=u("div"),H(t.$$.fragment),n=g(),r.block.c(),f=g(),s&&s.c(),i(e,"class","h-screen bg-ivory")},m(v,d){z(v,e,d),B(t,e,null),o(e,n),r.block.m(e,r.anchor=null),r.mount=()=>e,r.anchor=f,o(e,f),s&&s.m(e,null),c=!0},p(v,[d]){l=v,Ne(r,l,d),l[0]?s?(s.p(l,d),d&1&&w(s,1)):(s=Ce(l),s.c(),w(s,1),s.m(e,null)):s&&(Pe(),k(s,1,1,()=>{s=null}),je())},i(v){c||(w(t.$$.fragment,v),w(r.block),w(s),c=!0)},o(v){k(t.$$.fragment,v);for(let d=0;d<3;d+=1){const $=r.blocks[d];k($)}k(s),c=!1},d(v){v&&P(e),L(t),r.block.d(),r.token=null,r=null,s&&s.d()}}}function nt(l,e,t){let n,f,c;le(l,Ie,p=>t(7,n=p)),le(l,Ge,p=>t(1,f=p)),le(l,Te,p=>t(2,c=p));let r=!1;async function s(){return await we("users/categories","GET").then(async p=>(p.ok||n("/login"),await p.json()))}return[r,f,c,s,()=>{we("users","DELETE").then(p=>p.status===200?window.location.href=window.location.href:console.log(p))},()=>{t(0,r=!1)},()=>{t(0,r=!0)}]}class ft extends Me{constructor(e){super(),De(this,e,nt,lt,ze,{})}}export{ft as default};