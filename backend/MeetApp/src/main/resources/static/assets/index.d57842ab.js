import{S as w,i as _,s as y,e as i,d as x,u as L,f as a,g as T,h as o,w as G,r as b,o as M,q as S,T as $}from"./index.1aa523d1.js";function q(n){let t,e,s,u,l,m,c,r,h,g,p,v;return{c(){t=i("div"),e=i("div"),s=i("div"),s.innerHTML='<img src="logo.png" alt="MeetApp"/>',u=x(),l=i("button"),l.innerHTML=`<div class="w-5 mr-4 align-middle"><img src="google.png" alt="Google"/></div> 
            <div class="align-middle text-cocoa text-sm">Sign in with Google</div>`,m=x(),c=i("div"),r=i("a"),h=L("Regulamin"),a(s,"class","w-24 self-center"),a(l,"class","flex flex-row self-center shadow-md border-snow-drift border-2 py-2 px-2 rounded-md"),a(r,"href",g=n[0]("/termsOfUse")),a(c,"class","self-center text-sage"),a(e,"class","bg-ivory rounded-xl px-10 py-2 flex flex-col mx-4 h-48 my-auto right-0 left-0 top-0 bottom-0 absolute justify-between lg:w-1/3 lg:mx-auto"),a(t,"class","h-screen bg-grass relative")},m(d,f){T(d,t,f),o(t,e),o(e,s),o(e,u),o(e,l),o(e,m),o(e,c),o(c,r),o(r,h),p||(v=G(l,"click",n[1]),p=!0)},p(d,[f]){f&1&&g!==(g=d[0]("/termsOfUse"))&&a(r,"href",g)},i:b,o:b,d(d){d&&M(t),p=!1,v()}}}function z(n,t,e){let s;return S(n,$,l=>e(0,s=l)),[s,()=>{window.location.href="http://meetapp-ux.northeurope.cloudapp.azure.com:8080/oauth2/authorization/google"}]}class O extends w{constructor(t){super(),_(this,t,z,q,y,{})}}export{O as default};
