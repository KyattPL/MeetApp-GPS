import{S as K,i as Q,s as W,ad as Y,e as $,c as T,d as k,f as j,g as A,m as I,h as w,w as J,t as g,k as N,l as b,n as G,ae as Z,o as F,p as O,q as L,r as z,u as x,v as ee,af as te,ag as ne,M as oe,ab as le}from"./index.8b63dffd.js";import{A as ae}from"./AddPostButton.5aa74bb8.js";import{A as re}from"./AnnouncementListElem.56a87081.js";import{F as se}from"./Footer.b487c132.js";import{H as ie,f as ce}from"./Header.dadf7a52.js";import{H as fe}from"./HelpButton.45877a20.js";import{S as ue,a as pe}from"./SortFilterColumn.fb310062.js";import{e as me}from"./fetchWrapper.486a233b.js";import{c as de,n as ge,b as he,f as we,d as _e,u as be}from"./stores.fab61610.js";import"./MdAdd.7e89f3d1.js";import"./Button.37b8e9b7.js";import"./MdDelete.8b819e7f.js";import"./SelectablePill.ed1b853f.js";import"./Svelecte.9f2ee625.js";function R(o,e,n){const a=o.slice();return a[19]=e[n],a}function ze(o){let e,n,a;return{c(){e=$("p"),e.textContent="Na tej stronie mo\u017Cesz wykona\u0107 nast\u0119puj\u0105ce rzeczy:",n=k(),a=$("ul"),a.innerHTML=`<li><span class="font-bold">Przegl\u0105danie post\xF3w</span> - znajduje si\u0119 na \u015Brodku strony, pozwala na zapoznanie si\u0119 z tre\u015Bci\u0105 i szczeg\xF3\u0142ami post\xF3w,
                klikaj\u0105c na nie na li\u015Bcie. Mo\u017Cna te\u017C zobaczy\u0107 informacje o autorze posta, zapisa\u0107 si\u0119 lub wypisa\u0107 z posta oraz przej\u015B\u0107 na profil autora.</li> 
            <li><span class="font-bold">Filtrowanie</span> - znajduje si\u0119 po lewej stronie strony, pozwala na ograniczenie liczby post\xF3w, wybieraj\u0105c kategori\u0119,
                miejscowo\u015B\u0107 lub nazw\u0119 posta. Mo\u017Cna te\u017C posortowa\u0107 posty wed\u0142ug daty lub liczby zapisanych.</li> 
            <li><span class="font-bold">Tworzenie</span> - znajduje si\u0119 w prawym dolnym rogu strony, pozwala na dodawanie w\u0142asnych post\xF3w, wype\u0142niaj\u0105c
                formularz z tytu\u0142em, kategori\u0105, opisem i innymi informacjami. Tworzenie dost\u0119pne jest tylko dla zalogowanych u\u017Cytkownik\xF3w.</li>`,j(a,"class","list-disc list-inside")},m(t,f){A(t,e,f),A(t,n,f),A(t,a,f)},p:z,d(t){t&&F(e),t&&F(n),t&&F(a)}}}function U(o){let e,n,a,t,f,l,c,s,u;return{c(){e=$("div"),n=$("p"),a=x(o[1]),t=k(),f=$("button"),f.textContent="X",j(n,"class","w-full text-center text-ivory self-center"),j(f,"class","text-ivory font-bold"),j(e,"class","flex flex-row bg-grass w-72 h-16 m-auto rounded p-4 absolute bottom-8 right-8")},m(p,_){A(p,e,_),w(e,n),w(n,a),w(e,t),w(e,f),c=!0,s||(u=J(f,"click",o[14]),s=!0)},p(p,_){(!c||_&2)&&ee(a,p[1])},i(p){c||(l&&l.end(1),c=!0)},o(p){l=te(e,ce,{delay:50,duration:300}),c=!1},d(p){p&&F(e),p&&l&&l.end(),s=!1,u()}}}function ye(o){return{c:z,m:z,p:z,i:z,o:z,d:z}}function ke(o){let e,n,a=o[2],t=[];for(let l=0;l<a.length;l+=1)t[l]=V(R(o,a,l));const f=l=>b(t[l],1,1,()=>{t[l]=null});return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=oe()},m(l,c){for(let s=0;s<t.length;s+=1)t[s].m(l,c);A(l,e,c),n=!0},p(l,c){if(c&140){a=l[2];let s;for(s=0;s<a.length;s+=1){const u=R(l,a,s);t[s]?(t[s].p(u,c),g(t[s],1)):(t[s]=V(u),t[s].c(),g(t[s],1),t[s].m(e.parentNode,e))}for(N(),s=a.length;s<t.length;s+=1)f(s);G()}},i(l){if(!n){for(let c=0;c<a.length;c+=1)g(t[c]);n=!0}},o(l){t=t.filter(Boolean);for(let c=0;c<t.length;c+=1)b(t[c]);n=!1},d(l){le(t,l),l&&F(e)}}}function V(o){let e,n;function a(){return o[15](o[19])}return e=new re({props:{areDetailsShown:o[3]===o[19].id,data:o[19],clickHandler:a}}),{c(){T(e.$$.fragment)},m(t,f){I(e,t,f),n=!0},p(t,f){o=t;const l={};f&12&&(l.areDetailsShown=o[3]===o[19].id),f&4&&(l.data=o[19]),f&4&&(l.clickHandler=a),e.$set(l)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function je(o){return{c:z,m:z,p:z,i:z,o:z,d:z}}function X(o){let e,n;return e=new ae({props:{pageType:"announcements"}}),{c(){T(e.$$.fragment)},m(a,t){I(e,a,t),n=!0},i(a){n||(g(e.$$.fragment,a),n=!0)},o(a){b(e.$$.fragment,a),n=!1},d(a){O(e,a)}}}function $e(o){let e,n,a,t,f,l,c,s,u,p,_,C,H,E,P,B,D,S,v,M,r;n=new ie({props:{pageType:"announcements"}}),t=new fe({props:{$$slots:{default:[ze]},$$scope:{ctx:o}}}),l=new ue({props:{sortOptions:o[5]}});let i=o[0]&&U(o);_=new pe({props:{sortOptions:o[5]}});let h={ctx:o,current:null,token:null,hasCatch:!1,pending:je,then:ke,catch:ye,value:18,blocks:[,,,]};Y(o[6],h);let m=o[4]!==null&&X();return S=new se({props:{pageType:"announcements"}}),{c(){e=$("div"),T(n.$$.fragment),a=k(),T(t.$$.fragment),f=k(),T(l.$$.fragment),c=k(),i&&i.c(),s=k(),u=$("div"),p=$("div"),T(_.$$.fragment),C=k(),H=$("div"),h.block.c(),E=k(),P=$("div"),B=k(),m&&m.c(),D=k(),T(S.$$.fragment),j(p,"class","hidden lg:block lg:w-1/3 lg:bg-green-mist overflow-auto"),j(H,"class","flex flex-col h-full lg:w-2/3 overflow-auto"),j(P,"class","hidden lg:block lg:w-1/3"),j(u,"class","h-[calc(100%-10rem)] lg:h-[calc(100%-4rem)] lg:flex lg:flex-row"),j(u,"id","postsContainer"),j(e,"class","h-screen")},m(d,y){A(d,e,y),I(n,e,null),w(e,a),I(t,e,null),w(e,f),I(l,e,null),w(e,c),i&&i.m(e,null),w(e,s),w(e,u),w(u,p),I(_,p,null),w(u,C),w(u,H),h.block.m(H,h.anchor=null),h.mount=()=>H,h.anchor=null,w(u,E),w(u,P),w(e,B),m&&m.m(e,null),w(e,D),I(S,e,null),v=!0,M||(r=J(u,"scroll",o[8]),M=!0)},p(d,[y]){o=d;const q={};y&4194304&&(q.$$scope={dirty:y,ctx:o}),t.$set(q),o[0]?i?(i.p(o,y),y&1&&g(i,1)):(i=U(o),i.c(),g(i,1),i.m(e,s)):i&&(N(),b(i,1,1,()=>{i=null}),G()),Z(h,o,y),o[4]!==null?m?y&16&&g(m,1):(m=X(),m.c(),g(m,1),m.m(e,D)):m&&(N(),b(m,1,1,()=>{m=null}),G())},i(d){v||(g(n.$$.fragment,d),g(t.$$.fragment,d),g(l.$$.fragment,d),g(i),g(_.$$.fragment,d),g(h.block),g(m),g(S.$$.fragment,d),v=!0)},o(d){b(n.$$.fragment,d),b(t.$$.fragment,d),b(l.$$.fragment,d),b(i),b(_.$$.fragment,d);for(let y=0;y<3;y+=1){const q=h.blocks[y];b(q)}b(m),b(S.$$.fragment,d),v=!1},d(d){d&&F(e),O(n),O(t),O(l),i&&i.d(),O(_),h.block.d(),h.token=null,h=null,m&&m.d(),O(S),M=!1,r()}}}function Pe(o,e,n){let a,t,f,l,c,s;L(o,ge,r=>n(10,a=r)),L(o,he,r=>n(11,t=r)),L(o,we,r=>n(12,f=r)),L(o,_e,r=>n(13,l=r)),L(o,ne,r=>n(16,c=r)),L(o,be,r=>n(4,s=r));let u=!1,p="";c(r=>{let i=r.__file.last.shortPath;return i==="/announcements/create"?(n(0,u=!0),n(1,p="Pomy\u015Blnie utworzono post!")):i==="/announcements/edit"&&(n(0,u=!0),n(1,p="Pomy\u015Blnie edytowano post!")),!0});let _=[],C=null,H=[{id:1,name:"Od najnowszych"},{id:2,name:"Od najstarszych"},{id:3,name:"Po liczbie zapisanych rosn\u0105co"},{id:4,name:"Po liczbie zapisanych malej\u0105co"}],E,P=0;de();const B=r=>{C!==r?n(3,C=r):n(3,C=null)},D=()=>{const r=document.getElementById("postsContainer");r.offsetHeight+r.scrollTop===r.scrollHeight&&n(9,P=P+1)},S=(r,i)=>{me(`announcements?page=${r}&`+i.toString(),"GET").then(h=>h.json()).then(h=>n(2,_=[..._,...h]))},v=()=>n(0,u=!1),M=r=>B(r.id);return o.$$.update=()=>{if(o.$$.dirty&15360&&(n(2,_=[]),n(9,P=0)),o.$$.dirty&15872){let r=new URLSearchParams;for(let i of l)r.append("categoryIds",i);for(let i of f)r.append("locationIds",i.id);t!==null&&r.append("sortOption",t.toString()),a!==null&&r.append("nameSearch",a),S(P,r)}},[u,p,_,C,s,H,E,B,D,P,a,t,f,l,v,M]}class qe extends K{constructor(e){super(),Q(this,e,Pe,$e,W,{})}}export{qe as default};
