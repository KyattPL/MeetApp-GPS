import{S as f,i as d,s as b,H as _,l as g,o as u,a as m,w as k,J as S,K as y,L as C,b as h,t as w,d as v}from"./index.092e809b.js";function q(o){let s,a,n,c,r;const i=o[5].default,t=_(i,o,o[4],null);return{c(){s=g("button"),t&&t.c(),u(s,"class",a="border-2 rounded-full hover:opacity-90 transition ease-in-out delay-100 focus:ring focus:ring-tea font-bold "+o[1]+" "+(o[0]?"bg-grass border-pine text-ivory":"text-cocoa border-gray bg-snow-drift"))},m(e,l){m(e,s,l),t&&t.m(s,null),n=!0,c||(r=k(s,"click",o[2]),c=!0)},p(e,[l]){t&&t.p&&(!n||l&16)&&S(t,i,e,e[4],n?C(i,e[4],l,null):y(e[4]),null),(!n||l&3&&a!==(a="border-2 rounded-full hover:opacity-90 transition ease-in-out delay-100 focus:ring focus:ring-tea font-bold "+e[1]+" "+(e[0]?"bg-grass border-pine text-ivory":"text-cocoa border-gray bg-snow-drift")))&&u(s,"class",a)},i(e){n||(h(t,e),n=!0)},o(e){w(t,e),n=!1},d(e){e&&v(s),t&&t.d(e),c=!1,r()}}}function H(o,s,a){let{$$slots:n={},$$scope:c}=s,{class:r}=s,{isSelected:i}=s,{clickCallback:t}=s;const e=()=>{a(0,i=!i),t()};return o.$$set=l=>{"class"in l&&a(1,r=l.class),"isSelected"in l&&a(0,i=l.isSelected),"clickCallback"in l&&a(3,t=l.clickCallback),"$$scope"in l&&a(4,c=l.$$scope)},[i,r,e,t,c,n]}class K extends f{constructor(s){super(),d(this,s,H,q,b,{class:1,isSelected:0,clickCallback:3})}}export{K as S};