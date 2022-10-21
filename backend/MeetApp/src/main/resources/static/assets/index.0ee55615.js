(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function P(){}function Ue(e,t){for(const n in t)e[n]=t[n];return e}function qe(e){return e()}function Pe(){return Object.create(null)}function U(e){e.forEach(qe)}function le(e){return typeof e=="function"}function q(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let ee;function $e(e,t){return ee||(ee=document.createElement("a")),ee.href=t,e===ee.href}function pt(e){return Object.keys(e).length===0}function ge(e,...t){if(e==null)return P;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function z(e){let t;return ge(e,n=>t=n)(),t}function F(e,t,n){e.$$.on_destroy.push(ge(t,n))}function ht(e,t,n,o){if(e){const r=De(e,t,n,o);return e[0](r)}}function De(e,t,n,o){return e[1]&&o?Ue(n.ctx.slice(),e[1](o(t))):n.ctx}function mt(e,t,n,o){if(e[2]&&o){const r=e[2](o(n));if(t.dirty===void 0)return r;if(typeof r=="object"){const s=[],c=Math.max(t.dirty.length,r.length);for(let i=0;i<c;i+=1)s[i]=t.dirty[i]|r[i];return s}return t.dirty|r}return t.dirty}function _t(e,t,n,o,r,s){if(r){const c=De(t,n,o,s);e.p(c,r)}}function gt(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let o=0;o<n;o++)t[o]=-1;return t}return-1}function yt(e,t,n){return e.set(n),t}function wt(e){return e&&le(e.destroy)?e.destroy:P}function Nn(e,t){e.appendChild(t)}function R(e,t,n){e.insertBefore(t,n||null)}function k(e){e.parentNode.removeChild(e)}function ye(e){return document.createElement(e)}function Be(e){return document.createTextNode(e)}function we(){return Be(" ")}function J(){return Be("")}function K(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function bt(e){return Array.from(e.childNodes)}function jn(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function He(e,t,n,o){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,o?"important":"")}function ce(e,t){return new e(t)}let Q;function V(e){Q=e}function be(){if(!Q)throw new Error("Function called outside component initialization");return Q}function Pt(e){be().$$.on_destroy.push(e)}function Ke(e,t){return be().$$.context.set(e,t),t}function We(e){return be().$$.context.get(e)}const W=[],ke=[],oe=[],xe=[],Ve=Promise.resolve();let de=!1;function ze(){de||(de=!0,Ve.then(Je))}function $t(){return ze(),Ve}function pe(e){oe.push(e)}const fe=new Set;let te=0;function Je(){const e=Q;do{for(;te<W.length;){const t=W[te];te++,V(t),kt(t.$$)}for(V(null),W.length=0,te=0;ke.length;)ke.pop()();for(let t=0;t<oe.length;t+=1){const n=oe[t];fe.has(n)||(fe.add(n),n())}oe.length=0}while(W.length);for(;xe.length;)xe.pop()();de=!1,fe.clear(),V(e)}function kt(e){if(e.fragment!==null){e.update(),U(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(pe)}}const re=new Set;let N;function D(){N={r:0,c:[],p:N}}function B(){N.r||U(N.c),N=N.p}function m(e,t){e&&e.i&&(re.delete(e),e.i(t))}function w(e,t,n,o){if(e&&e.o){if(re.has(e))return;re.add(e),N.c.push(()=>{re.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}function xt(e,t){e.d(1),t.delete(e.key)}function Et(e,t){w(e,1,1,()=>{t.delete(e.key)})}function Qe(e,t,n,o,r,s,c,i,a,l,f,d){let h=e.length,p=s.length,_=h;const E={};for(;_--;)E[e[_].key]=_;const v=[],T=new Map,H=new Map;for(_=p;_--;){const g=d(r,s,_),$=n(g);let u=c.get($);u?o&&u.p(g,t):(u=l($,g),u.c()),T.set($,v[_]=u),$ in E&&H.set($,Math.abs(_-E[$]))}const j=new Set,Z=new Set;function A(g){m(g,1),g.m(i,f),c.set(g.key,g),f=g.first,p--}for(;h&&p;){const g=v[p-1],$=e[h-1],u=g.key,b=$.key;g===$?(f=g.first,h--,p--):T.has(b)?!c.has(u)||j.has(u)?A(g):Z.has(b)?h--:H.get(u)>H.get(b)?(Z.add(u),A(g)):(j.add(b),h--):(a($,c),h--)}for(;h--;){const g=e[h];T.has(g.key)||a(g,c)}for(;p;)A(v[p-1]);return v}function Rt(e,t){const n={},o={},r={$$scope:1};let s=e.length;for(;s--;){const c=e[s],i=t[s];if(i){for(const a in c)a in i||(o[a]=1);for(const a in i)r[a]||(n[a]=i[a],r[a]=1);e[s]=i}else for(const a in c)r[a]=1}for(const c in o)c in n||(n[c]=void 0);return n}function vt(e){return typeof e=="object"&&e!==null?e:{}}function C(e){e&&e.c()}function L(e,t,n,o){const{fragment:r,after_update:s}=e.$$;r&&r.m(t,n),o||pe(()=>{const c=e.$$.on_mount.map(qe).filter(le);e.$$.on_destroy?e.$$.on_destroy.push(...c):U(c),e.$$.on_mount=[]}),s.forEach(pe)}function S(e,t){const n=e.$$;n.fragment!==null&&(U(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ot(e,t){e.$$.dirty[0]===-1&&(W.push(e),ze(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function G(e,t,n,o,r,s,c,i=[-1]){const a=Q;V(e);const l=e.$$={fragment:null,ctx:[],props:s,update:P,not_equal:r,bound:Pe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:Pe(),dirty:i,skip_bound:!1,root:t.target||a.$$.root};c&&c(l.root);let f=!1;if(l.ctx=n?n(e,t.props||{},(d,h,...p)=>{const _=p.length?p[0]:h;return l.ctx&&r(l.ctx[d],l.ctx[d]=_)&&(!l.skip_bound&&l.bound[d]&&l.bound[d](_),f&&Ot(e,d)),h}):[],l.update(),f=!0,U(l.before_update),l.fragment=o?o(l.ctx):!1,t.target){if(t.hydrate){const d=bt(t.target);l.fragment&&l.fragment.l(d),d.forEach(k)}else l.fragment&&l.fragment.c();t.intro&&m(e.$$.fragment),L(e,t.target,t.anchor,t.customElement),Je()}V(a)}class X{$destroy(){S(this,1),this.$destroy=P}$on(t,n){if(!le(n))return P;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!pt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const O={queryHandler:{parse:e=>Lt(new URLSearchParams(e)),stringify:e=>"?"+new URLSearchParams(e).toString()},urlTransform:{apply:e=>e,remove:e=>e},useHash:!1};function Lt(e){return[...e].reduce((t,[n,o])=>(t[n]=o,t),{})}const Ge=RegExp(/\:([^/()]+)/g);function St(e,t){if(navigator.userAgent.includes("jsdom"))return!1;t&&Xe(e),Ct()}function Ct(){if(navigator.userAgent.includes("jsdom"))return!1;const{hash:e}=window.location;if(e){const t=document.getElementById(e.substring(1));t&&t.scrollIntoView()}}function Xe(e){e&&e.scrollTo&&e.dataset.routify!=="scroll-lock"&&e.dataset["routify-scroll"]!=="lock"&&(e.style["scroll-behavior"]="auto",e.scrollTo({top:0,behavior:"auto"}),e.style["scroll-behavior"]="",Xe(e.parentElement))}const It=(e,t)=>{const n=t?"":"/?$";return e=e.replace(/\/_fallback?$/,"(/|$)"),e=e.replace(/\/index$/,"(/index)?"),e=e.replace(Ge,"([^/]+)")+n,e=`^${e}`,e},Ye=e=>{const t=[];let n;for(;n=Ge.exec(e);)t.push(n[1]);return t},Tt=({path:e})=>e.split("/").filter(Boolean).map(t=>t==="_fallback"?"A":t.startsWith(":")?"B":"C").join("");function se(e,t){se._console=se._console||{log:console.log,warn:console.warn};const{_console:n}=se,o=e.componentFile.name.replace(/Proxy<_?(.+)>/,"$1").replace(/^Index$/,e.component.shortPath.split("/").pop()).replace(/^./,s=>s.toUpperCase()).replace(/\:(.+)/,"U5B$1u5D"),r=[`<${o}> received an unexpected slot "default".`,`<${o}> was created with unknown prop 'scoped'`,`<${o}> was created with unknown prop 'scopedSync'`];for(const s of["log","warn"])console[s]=(...c)=>{r.includes(c[0])||n[s](...c)},t().then(()=>{console[s]=n[s]})}function ae(){let e=window.location.pathname+window.location.search+window.location.hash;const{url:t,options:n}=Nt(e);return{...he(t),options:n}}function Nt(e){const[t,n]=e.split("__[[routify_url_options]]__"),o=JSON.parse(decodeURIComponent(n||"")||"{}");return window.routify=window.routify||{},window.routify.prefetched=o.prefetch,{url:t,options:o}}function he(e){O.useHash&&(e=e.replace(/.*#(.+)/,"$1"));const t=e.startsWith("/")?window.location.origin:void 0,n=new URL(e,t),o=n.pathname+n.search+n.hash;return{url:n,fullpath:o}}function Ee(e,t,n){const o=O.useHash?"#":"";let r;return r=jt(e,t,n),r=O.urlTransform.apply(r),r=o+r,r}function jt(e,t,n){const o=Object.assign({},n,t),r=At(e,t);for(const[s,c]of Object.entries(o))e=e.replace(`:${s}`,c);return`${e}${r}`}function At(e,t){if(!O.queryHandler)return"";const n=Ye(e),o={};return t&&Object.entries(t).forEach(([r,s])=>{n.includes(r)||(o[r]=s)}),O.queryHandler.stringify(o).replace(/\?$/,"")}function Mt(e){let t;const n=e[2].default,o=ht(n,e,e[1],null);return{c(){o&&o.c()},m(r,s){o&&o.m(r,s),t=!0},p(r,[s]){o&&o.p&&(!t||s&2)&&_t(o,n,r,r[1],t?mt(n,r[1],s,null):gt(r[1]),null)},i(r){t||(m(o,r),t=!0)},o(r){w(o,r),t=!1},d(r){o&&o.d(r)}}}function Ft(e,t,n){let{$$slots:o={},$$scope:r}=t,{scoped:s={}}=t;return e.$$set=c=>{"scoped"in c&&n(0,s=c.scoped),"$$scope"in c&&n(1,r=c.$$scope)},[s,r,o]}class Ut extends X{constructor(t){super(),G(this,t,Ft,Mt,q,{scoped:0})}}const M=[];function qt(e,t){return{subscribe:I(e,t).subscribe}}function I(e,t=P){let n;const o=new Set;function r(i){if(q(e,i)&&(e=i,n)){const a=!M.length;for(const l of o)l[1](),M.push(l,e);if(a){for(let l=0;l<M.length;l+=2)M[l][0](M[l+1]);M.length=0}}}function s(i){r(i(e))}function c(i,a=P){const l=[i,a];return o.add(l),o.size===1&&(n=t(r)||P),i(e),()=>{o.delete(l),o.size===0&&(n(),n=null)}}return{set:r,update:s,subscribe:c}}function Dt(e,t,n){const o=!Array.isArray(e),r=o?[e]:e,s=t.length<2;return qt(n,c=>{let i=!1;const a=[];let l=0,f=P;const d=()=>{if(l)return;f();const p=t(o?a[0]:a,c);s?c(p):f=le(p)?p:P},h=r.map((p,_)=>ge(p,E=>{a[_]=E,l&=~(1<<_),i&&d()},()=>{l|=1<<_}));return i=!0,d(),function(){U(h),f()}})}window.routify=window.routify||{};const Y=I(null),ue=I([]);ue.subscribe(e=>window.routify.routes=e);let Ze=I({component:{params:{}}});const Bt=I(null),et=I(!0);async function Ht({page:e,metatags:t,afterPageLoad:n,parentNode:o}){const r=e.last!==e;setTimeout(()=>St(o,r));const{path:s}=e,{options:c}=ae(),i=c.prefetch;for(const a of n._hooks)a&&await a(e.api);t.update(),dispatchEvent(new CustomEvent("app-loaded")),parent.postMessage({msg:"app-loaded",prefetched:window.routify.prefetched,path:s,prefetchId:i},"*"),window.routify.appLoaded=!0,window.routify.stopAutoReady=!1}function me(e,t=!1){e=O.urlTransform.remove(e);let{pathname:n,search:o}=he(e).url;const r=z(ue),s=r.find(f=>n===f.meta.name)||r.find(f=>n.match(f.regex));if(!s)throw new Error(`Route could not be found for "${n}".`);const c=t?Object.create(s):s,{route:i,redirectPath:a,rewritePath:l}=tt(c,r);return l&&({pathname:n,search:o}=he(Ee(l,i.params)).url,a&&(i.redirectTo=Ee(a,i.params||{}))),O.queryHandler&&(i.params=Object.assign({},O.queryHandler.parse(o))),Kt(i,n),i.leftover=e.replace(new RegExp(i.regex),""),i}function Kt(e,t){if(e.paramKeys){const n=Wt(e.layouts),o=t.split("/").filter(Boolean);Vt(e.path).forEach((s,c)=>{s&&(e.params[s]=o[c],n[c]?n[c].param={[s]:o[c]}:e.param={[s]:o[c]})})}}function tt(e,t,n,o){const{redirect:r,rewrite:s}=e.meta;if(r||s){n=r?r.path||r:n,o=s?s.path||s:n;const c=r&&r.params,i=s&&s.params,a=t.find(l=>l.path.replace(/\/index$/,"")===o);return a===e&&console.error(`${o} is redirecting to itself`),a||console.error(`${e.path} is redirecting to non-existent path: ${o}`),(c||i)&&(a.params=Object.assign({},a.params,c,i)),tt(a,t,n,o)}return{route:e,redirectPath:n,rewritePath:o}}function Wt(e){const t=[];return e.forEach(n=>{t[n.path.split("/").filter(Boolean).length-1]=n}),t}function Vt(e){return e.split("/").filter(Boolean).map(t=>t.match(/\:(.+)/)).map(t=>t&&t[1])}function Re(e,t,n){const o=e.slice();return o[1]=t[n],o}function ve(e,t){let n,o;return{key:e,first:null,c(){n=ye("iframe"),$e(n.src,o=t[1].url)||K(n,"src",o),K(n,"frameborder","0"),K(n,"title","routify prefetcher"),this.first=n},m(r,s){R(r,n,s)},p(r,s){t=r,s&1&&!$e(n.src,o=t[1].url)&&K(n,"src",o)},d(r){r&&k(n)}}}function zt(e){let t,n=[],o=new Map,r=e[0];const s=c=>c[1].options.prefetch;for(let c=0;c<r.length;c+=1){let i=Re(e,r,c),a=s(i);o.set(a,n[c]=ve(a,i))}return{c(){t=ye("div");for(let c=0;c<n.length;c+=1)n[c].c();K(t,"id","__routify_iframes"),He(t,"display","none")},m(c,i){R(c,t,i);for(let a=0;a<n.length;a+=1)n[a].m(t,null)},p(c,[i]){i&1&&(r=c[0],n=Qe(n,i,s,1,c,r,o,t,xt,ve,null,Re))},i:P,o:P,d(c){c&&k(t);for(let i=0;i<n.length;i+=1)n[i].d()}}}const Jt=2,_e=I([]),nt=Dt(_e,e=>e.slice(0,Jt));nt.subscribe(e=>e.forEach(({options:t})=>{setTimeout(()=>ot(t.prefetch),t.timeout)}));function ot(e){const t=e.data?e.data.prefetchId:e;if(!t)return null;const n=z(_e).find(o=>o&&o.options.prefetch==t);if(n){const{gracePeriod:o}=n.options,r=new Promise(c=>setTimeout(c,o)),s=new Promise(c=>{window.requestIdleCallback?window.requestIdleCallback(c):setTimeout(c,o+1e3)});Promise.all([r,s]).then(()=>{_e.update(c=>c.filter(i=>i.options.prefetch!=t))})}}addEventListener("message",ot,!1);function Qt(e,t,n){let o;return F(e,nt,r=>n(0,o=r)),[o]}class Gt extends X{constructor(t){super(),G(this,t,Qt,zt,q,{})}}function Xt(){return We("routify")||Ze}const Yt={_hooks:[e=>et.set(!1)],subscribe:rt},Zt={_hooks:[],subscribe:rt};function rt(e){const t=this._hooks,n=t.length;return e(o=>{t[n]=o}),(...o)=>{delete t[n],e(...o)}}const y={subscribe(e){return this._origin=this.getOrigin(),e(ie)},props:{},templates:{},services:{plain:{propField:"name",valueField:"content"},twitter:{propField:"name",valueField:"content"},og:{propField:"property",valueField:"content"}},plugins:[{name:"applyTemplate",condition:()=>!0,action:(e,t)=>{const n=y.getLongest(y.templates,e)||(o=>o);return[e,n(t)]}},{name:"createMeta",condition:()=>!0,action(e,t){y.writeMeta(e,t)}},{name:"createOG",condition:e=>!e.match(":"),action(e,t){y.writeMeta(`og:${e}`,t)}},{name:"createTitle",condition:e=>e==="title",action(e,t){document.title=t}}],getLongest(e,t){const n=e[t];if(n){const o=z(Y).path,c=Object.keys(e[t]).filter(i=>o.includes(i)).sort((i,a)=>a.length-i.length)[0];return n[c]}},writeMeta(e,t){const n=document.getElementsByTagName("head")[0],o=e.match(/(.+)\:/),r=o&&o[1]||"plain",{propField:s,valueField:c}=ie.services[r]||ie.services.plain,i=document.querySelector(`meta[${s}='${e}']`);i&&i.remove();const a=document.createElement("meta");a.setAttribute(s,e),a.setAttribute(c,t),a.setAttribute("data-origin","routify"),n.appendChild(a)},set(e,t){typeof e=="string"&&y.plugins.forEach(n=>{n.condition(e,t)&&([e,t]=n.action(e,t)||[e,t])})},clear(){const e=document.querySelector("meta");e&&e.remove()},template(e,t){const n=y.getOrigin;y.templates[e]=y.templates[e]||{},y.templates[e][n]=t},update(){Object.keys(y.props).forEach(e=>{let t=y.getLongest(y.props,e);y.plugins.forEach(n=>{n.condition(e,t)&&([e,t]=n.action(e,t)||[e,t])})})},batchedUpdate(){y._pendingUpdate||(y._pendingUpdate=!0,setTimeout(()=>{y._pendingUpdate=!1,this.update()}))},_updateQueued:!1,_origin:!1,getOrigin(){if(this._origin)return this._origin;const e=Xt();return e&&z(e).path||"/"},_pendingUpdate:!1},ie=new Proxy(y,{set(e,t,n,o){const{props:r}=e;return Reflect.has(e,t)?Reflect.set(e,t,n,o):(r[t]=r[t]||{},r[t][e.getOrigin()]=n),window.routify.appLoaded&&e.batchedUpdate(),!0}});function Oe(e,t,n){const o=e.slice();return o[21]=t[n].component,o[22]=t[n].componentFile,o[2]=t[n].decorator,o[1]=t[n].nodes,o}function Le(e){let t=[],n=new Map,o,r,s=[e[4]];const c=i=>i[7];for(let i=0;i<1;i+=1){let a=Oe(e,s,i),l=c(a);n.set(l,t[i]=Ce(l,a))}return{c(){for(let i=0;i<1;i+=1)t[i].c();o=J()},m(i,a){for(let l=0;l<1;l+=1)t[l].m(i,a);R(i,o,a),r=!0},p(i,a){a&33554621&&(s=[i[4]],D(),t=Qe(t,a,c,1,i,s,n,o.parentNode,Et,Ce,o,Oe),B())},i(i){if(!r){for(let a=0;a<1;a+=1)m(t[a]);r=!0}},o(i){for(let a=0;a<1;a+=1)w(t[a]);r=!1},d(i){for(let a=0;a<1;a+=1)t[a].d(i);i&&k(o)}}}function Se(e){let t,n;return t=new st({props:{decorator:e[2],nodes:e[1],scoped:{...e[0],...e[25]}}}),{c(){C(t.$$.fragment)},m(o,r){L(t,o,r),n=!0},p(o,r){const s={};r&4&&(s.decorator=o[2]),r&16&&(s.nodes=o[1]),r&33554433&&(s.scoped={...o[0],...o[25]}),t.$set(s)},i(o){n||(m(t.$$.fragment,o),n=!0)},o(o){w(t.$$.fragment,o),n=!1},d(o){S(t,o)}}}function en(e){let t,n,o=e[21]&&e[1].length&&Se(e);return{c(){o&&o.c(),t=J()},m(r,s){o&&o.m(r,s),R(r,t,s),n=!0},p(r,s){r[21]&&r[1].length?o?(o.p(r,s),s&16&&m(o,1)):(o=Se(r),o.c(),m(o,1),o.m(t.parentNode,t)):o&&(D(),w(o,1,1,()=>{o=null}),B())},i(r){n||(m(o),n=!0)},o(r){w(o),n=!1},d(r){o&&o.d(r),r&&k(t)}}}function tn(e){let t,n,o;const r=[{scoped:e[0]},{scopedSync:e[5]},e[3].param||{}];var s=e[22];function c(i){let a={$$slots:{default:[en,({scoped:l,decorator:f})=>({25:l,2:f}),({scoped:l,decorator:f})=>(l?33554432:0)|(f?4:0)]},$$scope:{ctx:i}};for(let l=0;l<r.length;l+=1)a=Ue(a,r[l]);return{props:a}}return s&&(t=ce(s,c(e))),{c(){t&&C(t.$$.fragment),n=we()},m(i,a){t&&L(t,i,a),R(i,n,a),o=!0},p(i,a){const l=a&41?Rt(r,[a&1&&{scoped:i[0]},a&32&&{scopedSync:i[5]},a&8&&vt(i[3].param||{})]):{};if(a&100663317&&(l.$$scope={dirty:a,ctx:i}),s!==(s=i[22])){if(t){D();const f=t;w(f.$$.fragment,1,0,()=>{S(f,1)}),B()}s?(t=ce(s,c(i)),C(t.$$.fragment),m(t.$$.fragment,1),L(t,n.parentNode,n)):t=null}else s&&t.$set(l)},i(i){o||(t&&m(t.$$.fragment,i),o=!0)},o(i){t&&w(t.$$.fragment,i),o=!1},d(i){t&&S(t,i),i&&k(n)}}}function Ce(e,t){let n,o,r,s;var c=t[2];function i(a){return{props:{scoped:a[0],$$slots:{default:[tn]},$$scope:{ctx:a}}}}return c&&(o=ce(c,i(t))),{key:e,first:null,c(){n=J(),o&&C(o.$$.fragment),r=J(),this.first=n},m(a,l){R(a,n,l),o&&L(o,a,l),R(a,r,l),s=!0},p(a,l){t=a;const f={};if(l&1&&(f.scoped=t[0]),l&67108925&&(f.$$scope={dirty:l,ctx:t}),c!==(c=t[2])){if(o){D();const d=o;w(d.$$.fragment,1,0,()=>{S(d,1)}),B()}c?(o=ce(c,i(t)),C(o.$$.fragment),m(o.$$.fragment,1),L(o,r.parentNode,r)):o=null}else c&&o.$set(f)},i(a){s||(o&&m(o.$$.fragment,a),s=!0)},o(a){o&&w(o.$$.fragment,a),s=!1},d(a){a&&k(n),a&&k(r),o&&S(o,a)}}}function Ie(e){let t,n,o;return{c(){t=ye("div"),He(t,"display","contents")},m(r,s){R(r,t,s),n||(o=wt(e[10].call(null,t)),n=!0)},d(r){r&&k(t),n=!1,o()}}}function nn(e){let t,n,o,r=e[4]&&Le(e),s=!e[6]&&Ie(e);return{c(){r&&r.c(),t=we(),s&&s.c(),n=J()},m(c,i){r&&r.m(c,i),R(c,t,i),s&&s.m(c,i),R(c,n,i),o=!0},p(c,[i]){c[4]?r?(r.p(c,i),i&16&&m(r,1)):(r=Le(c),r.c(),m(r,1),r.m(t.parentNode,t)):r&&(D(),w(r,1,1,()=>{r=null}),B()),c[6]?s&&(s.d(1),s=null):s||(s=Ie(c),s.c(),s.m(n.parentNode,n))},i(c){o||(m(r),o=!0)},o(c){w(r),o=!1},d(c){r&&r.d(c),c&&k(t),s&&s.d(c),c&&k(n)}}}function on(e,t,n){let o,r,s,c,i;F(e,Y,u=>n(14,s=u)),F(e,ue,u=>n(16,i=u));let{nodes:a=[]}=t,{scoped:l={}}=t,{decorator:f=void 0}=t,d=null,h=null,p={},_,E=1;const v=I(null);F(e,v,u=>n(4,r=u));const T=We("routify")||Ze;F(e,T,u=>n(15,c=u));const H=u=>n(6,_=u.parentNode);Ke("routify",v);let j=[];function Z(u){let b=u.component();b instanceof Promise?b.then(A):A(b)}function A(u){n(5,p={...l});const b={...r,nodes:h,decorator:f||Ut,layout:d.isLayout?d:c.layout,component:d,route:s,routes:i,componentFile:u,parentNode:_||c.parentNode};v.set(b),yt(T,c.child=d,c),h.length===0&&g()}async function g(){await new Promise(b=>setTimeout(b));const u=r.component.path===s.path;!window.routify.stopAutoReady&&u&&Ht({page:r.component,metatags:ie,afterPageLoad:Yt,parentNode:_})}function $({meta:u,path:b,param:ft,params:dt}){return JSON.stringify({path:b,invalidate:E,param:(u["param-is-page"]||u["slug-is-page"])&&ft,queryParams:u["query-params-is-page"]&&dt})}return e.$$set=u=>{"nodes"in u&&n(1,a=u.nodes),"scoped"in u&&n(0,l=u.scoped),"decorator"in u&&n(2,f=u.decorator)},e.$$.update=()=>{e.$$.dirty&6146&&j!==a&&(n(12,j=a),n(3,[d,...h]=[...a],d),n(3,d.api.reset=()=>n(11,E++,E),d)),e.$$.dirty&8&&Z(d),e.$$.dirty&2064&&n(7,o=r&&E&&$(r.component)),e.$$.dirty&16&&r&&se(r,$t)},[l,a,f,d,r,p,_,o,v,T,H,E,j]}class st extends X{constructor(t){super(),G(this,t,on,nn,q,{nodes:1,scoped:0,decorator:2})}}function rn(e,t){let n=!1;function o(s,c){const i=s||ae().fullpath,a=me(i);a.redirectTo&&(history.replaceStateNative({},null,a.redirectTo),delete a.redirectTo);const d=[...(c&&me(ae().fullpath,e)||a).layouts,a];n&&delete n.last,a.last=n,n=a,s||Bt.set(a),Y.set(a),a.api.preload().then(()=>{et.set(!0),t(d)})}const r=sn(o);return{updatePage:o,destroy:r}}function sn(e){["pushState","replaceState"].forEach(r=>{history[r+"Native"]||(history[r+"Native"]=history[r]),history[r]=async function(s={},c,i){const a=location.pathname+location.search+location.hash;if(i===a)return!1;const{id:l,path:f,params:d}=z(Y);s={id:l,path:f,params:d,...s};const h=new Event(r.toLowerCase());if(Object.assign(h,{state:s,title:c,url:i}),await Te(h,i))return history[r+"Native"].apply(this,[s,c,i]),dispatchEvent(h)}});let t=!1;const n={click:cn,pushstate:()=>e(),replacestate:()=>e(),popstate:async r=>{t?t=!1:await Te(r,ae().fullpath)?e():(t=!0,r.preventDefault(),history.go(1))}};return Object.entries(n).forEach(r=>addEventListener(...r)),()=>{Object.entries(n).forEach(r=>removeEventListener(...r))}}function cn(e){const t=e.target.closest("a")||e.composedPath().find(s=>s.tagName==="A"),n=t&&t.href;if(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||e.button||e.defaultPrevented||!n||t.target||t.host!==location.host)return;const o=new URL(n),r=o.pathname+o.search+o.hash;e.preventDefault(),history.pushState({},"",r)}async function Te(e,t){const n=me(t).api;for(const o of Zt._hooks.filter(Boolean))if(!await o(e,n,{url:t}))return!1;return!0}function Ne(e){let t,n;return t=new st({props:{nodes:e[0]}}),{c(){C(t.$$.fragment)},m(o,r){L(t,o,r),n=!0},p(o,r){const s={};r&1&&(s.nodes=o[0]),t.$set(s)},i(o){n||(m(t.$$.fragment,o),n=!0)},o(o){w(t.$$.fragment,o),n=!1},d(o){S(t,o)}}}function an(e){let t,n,o,r=e[0]&&e[1]!==null&&Ne(e);return n=new Gt({}),{c(){r&&r.c(),t=we(),C(n.$$.fragment)},m(s,c){r&&r.m(s,c),R(s,t,c),L(n,s,c),o=!0},p(s,[c]){s[0]&&s[1]!==null?r?(r.p(s,c),c&3&&m(r,1)):(r=Ne(s),r.c(),m(r,1),r.m(t.parentNode,t)):r&&(D(),w(r,1,1,()=>{r=null}),B())},i(s){o||(m(r),m(n.$$.fragment,s),o=!0)},o(s){w(r),w(n.$$.fragment,s),o=!1},d(s){r&&r.d(s),s&&k(t),S(n,s)}}}function ln(e,t,n){let o;F(e,Y,p=>n(1,o=p));let{routes:r}=t,{config:s={}}=t,c,i;window.routify=window.routify||{},window.routify.inBrowser=!window.navigator.userAgent.match("jsdom"),Object.assign(O,s),Ke("routifyupdatepage",(...p)=>i&&i.updatePage(...p));const l=p=>n(0,c=p),f=()=>{!i||(i.destroy(),i=null)};let d=null;const h=()=>{clearTimeout(d),d=setTimeout(()=>{f(),i=rn(r,l),ue.set(r),i.updatePage()})};return Pt(f),e.$$set=p=>{"routes"in p&&n(2,r=p.routes),"config"in p&&n(3,s=p.config)},e.$$.update=()=>{e.$$.dirty&4&&r&&h()},[c,o,r,s]}class un extends X{constructor(t){super(),G(this,t,ln,an,q,{routes:2,config:3})}}function x(e){const t=async function(o){return await it(e,{file:o.tree,state:{treePayload:o},scope:{}})};return t.sync=function(o){return ct(e,{file:o.tree,state:{treePayload:o},scope:{}})},t}async function it(e,t){const n=await e(t);if(n===!1)return!1;const o=n||t.file;if(o.children){const r=await Promise.all(o.children.map(async s=>it(e,{state:t.state,scope:at(t.scope||{}),parent:t.file,file:await s})));o.children=r.filter(Boolean)}return o}function ct(e,t){const n=e(t);if(n===!1)return!1;const o=n||t.file;if(o.children){const r=o.children.map(s=>ct(e,{state:t.state,scope:at(t.scope||{}),parent:t.file,file:s}));o.children=r.filter(Boolean)}return o}function at(e){return JSON.parse(JSON.stringify(e))}const fn=x(({file:e})=>{(e.isPage||e.isFallback)&&(e.regex=It(e.path,e.isFallback))}),dn=x(({file:e})=>{e.paramKeys=Ye(e.path)}),pn=x(({file:e})=>{e.isFallback||e.isIndex?e.shortPath=e.path.replace(/\/[^/]+$/,""):e.shortPath=e.path}),hn=x(({file:e})=>{e.ranking=Tt(e)}),mn=x(({file:e})=>{const t=e,n=e.meta&&e.meta.children||[];n.length&&(t.children=t.children||[],t.children.push(...n.map(o=>({isMeta:!0,...o,meta:o}))))}),_n=x(e=>{const{file:t}=e,{isFallback:n,meta:o}=t,r=t.path.split("/").pop().startsWith(":"),s=t.path.endsWith("/index"),c=o.index||o.index===0,i=o.index===!1;t.isIndexable=c||!n&&!r&&!s&&!i,t.isNonIndexable=!t.isIndexable}),gn=x(({file:e,parent:t})=>{Object.defineProperty(e,"parent",{get:()=>t}),Object.defineProperty(e,"nextSibling",{get:()=>je(e,1)}),Object.defineProperty(e,"prevSibling",{get:()=>je(e,-1)}),Object.defineProperty(e,"lineage",{get:()=>lt(t)})});function lt(e,t=[]){return e&&(t.unshift(e),lt(e.parent,t)),t}function je(e,t){if(!e.root){const n=e.parent.children.filter(r=>r.isIndexable),o=n.indexOf(e);return n[o+t]}}const yn=x(({file:e,parent:t})=>{e.isIndex&&Object.defineProperty(t,"index",{get:()=>e})}),wn=x(({file:e,scope:t})=>{Object.defineProperty(e,"layouts",{get:()=>n(e)});function n(o){if(!o.isLayout&&o.meta.reset)return[];const{parent:r}=o,s=r&&r.component&&r,c=s&&(s.isReset||s.meta.reset),i=r&&!c&&n(r)||[];return s&&i.push(s),i}}),bn=e=>{x(t=>{(t.file.isPage||t.file.isFallback)&&t.state.treePayload.routes.push(t.file)}).sync(e),e.routes.sort((t,n)=>t.ranking>=n.ranking?-1:1)},Pn=x(({file:e})=>{const t=e.root?a:e.children?e.isPage?c:o:e.isReset?i:e.isLayout?n:e.isFallback?r:s;Object.setPrototypeOf(e,t.prototype);function n(){}function o(){}function r(){}function s(){}function c(){}function i(){}function a(){}}),$n=Object.freeze(Object.defineProperty({__proto__:null,setRegex:fn,setParamKeys:dn,setShortPath:pn,setRank:hn,addMetaChildren:mn,setIsIndexable:_n,assignRelations:gn,assignIndex:yn,assignLayout:wn,createFlatList:bn,setPrototype:Pn},Symbol.toStringTag,{value:"Module"})),kn={isDir:!1,ext:"svelte",isLayout:!1,isReset:!1,isIndex:!1,isFallback:!1,isPage:!1,ownMeta:{},meta:{recursive:!0,preload:!1,prerender:!0},id:"__fallback"};function ut(e){return Object.entries(kn).forEach(([t,n])=>{typeof e[t]>"u"&&(e[t]=n)}),e.children&&(e.children=e.children.map(ut)),e}const xn=x(({file:e})=>{e.api=new En(e)});class En{constructor(t){this.__file=t,Object.defineProperty(this,"__file",{enumerable:!1}),this.isMeta=!!t.isMeta,this.path=t.path,this.title=Rn(t),this.meta=t.meta}get parent(){return!this.__file.root&&this.__file.parent.api}get children(){return(this.__file.children||this.__file.isLayout&&this.__file.parent.children||[]).filter(t=>!t.isNonIndexable).sort((t,n)=>t.isMeta&&n.isMeta?0:(t=(t.meta.index||t.meta.title||t.path).toString(),n=(n.meta.index||n.meta.title||n.path).toString(),t.localeCompare(n,void 0,{numeric:!0,sensitivity:"base"}))).map(({api:t})=>t)}get next(){return Ae(this,1)}get prev(){return Ae(this,-1)}async preload(){const t=[...this.__file.layouts,this.__file,this.index&&this.index.__file].filter(Boolean).map(n=>n.component());await Promise.all(t)}get component(){return this.__file.component?this.__file.component():this.__file.index?this.__file.index.component():!1}get componentWithIndex(){return new Promise(t=>Promise.all([this.component,this.index&&this.index.component]).then(n=>t(n)))}get index(){const t=this.__file.children&&this.__file.children.find(n=>n.isIndex);return t&&t.api}}function Ae(e,t){if(!e.__file.root){const o=e.parent.children.indexOf(e);return e.parent.children[o+t]}}function Rn(e){return typeof e.meta.title<"u"?e.meta.title:(e.shortPath||e.path).split("/").pop().replace(/-/g," ")}const Me={...$n,restoreDefaults:({tree:e})=>ut(e),assignAPI:xn};function vn(e){const t=["restoreDefaults","setParamKeys","setRegex","setShortPath","setRank","assignLayout","setPrototype","addMetaChildren","assignRelations","setIsIndexable","assignIndex","assignAPI","createFlatList"],n={tree:e,routes:[]};for(let o of t)(Me[o].sync||Me[o])(n);return n}const On="modulepreload",Ln=function(e){return"/"+e},Fe={},ne=function(t,n,o){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=Ln(r),r in Fe)return;Fe[r]=!0;const s=r.endsWith(".css"),c=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${c}`))return;const i=document.createElement("link");if(i.rel=s?"stylesheet":On,s||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),s)return new Promise((a,l)=>{i.addEventListener("load",a),i.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())},Sn={root:!0,children:[{isIndex:!0,isPage:!0,path:"/index",id:"_index",component:()=>ne(()=>import("./index.e5acf1f0.js"),[]).then(e=>e.default)},{isDir:!0,ext:"",children:[{isPage:!0,path:"/posts/about",id:"_posts_about",component:()=>ne(()=>import("./about.cdb074c9.js"),[]).then(e=>e.default)}],path:"/posts"},{isDir:!0,ext:"",children:[{isPage:!0,path:"/users/:user",id:"_users__user",component:()=>ne(()=>import("./_user_.b627a80c.js"),[]).then(e=>e.default)},{isIndex:!0,isPage:!0,path:"/users/index",id:"_users_index",component:()=>ne(()=>import("./index.2c54fd0a.js"),[]).then(e=>e.default)}],path:"/users"}],path:"/"},{tree:An,routes:Cn}=vn(Sn);function In(e){let t,n;return t=new un({props:{routes:Cn}}),{c(){C(t.$$.fragment)},m(o,r){L(t,o,r),n=!0},p:P,i(o){n||(m(t.$$.fragment,o),n=!0)},o(o){w(t.$$.fragment,o),n=!1},d(o){S(t,o)}}}class Tn extends X{constructor(t){super(),G(this,t,null,In,q,{})}}new Tn({target:document.getElementById("app")});export{X as S,we as a,K as b,R as c,k as d,ye as e,Nn as f,jn as g,G as i,P as n,q as s,Be as t};
