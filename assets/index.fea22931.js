const Fc=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};Fc();function Os(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const $c="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bc=Os($c);function Po(t){return!!t||t===""}function Cs(t){if(x(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=he(r)?Vc(r):Cs(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(he(t))return t;if(ae(t))return t}}const Hc=/;(?![^(]*\))/g,jc=/:(.+)/;function Vc(t){const e={};return t.split(Hc).forEach(n=>{if(n){const r=n.split(jc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ps(t){let e="";if(he(t))e=t;else if(x(t))for(let n=0;n<t.length;n++){const r=Ps(t[n]);r&&(e+=r+" ")}else if(ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Wc(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Ot(t[r],e[r]);return n}function Ot(t,e){if(t===e)return!0;let n=pi(t),r=pi(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=x(t),r=x(e),n||r)return n&&r?Wc(t,e):!1;if(n=ae(t),r=ae(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Ot(t[o],e[o]))return!1}}return String(t)===String(e)}function ks(t,e){return t.findIndex(n=>Ot(n,e))}const $g=t=>he(t)?t:t==null?"":x(t)||ae(t)&&(t.toString===Mo||!B(t.toString))?JSON.stringify(t,ko,2):String(t),ko=(t,e)=>e&&e.__v_isRef?ko(t,e.value):Vt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:en(e)?{[`Set(${e.size})`]:[...e.values()]}:ae(e)&&!x(e)&&!xo(e)?String(e):e,Z={},jt=[],Me=()=>{},zc=()=>!1,Kc=/^on[^a-z]/,Sr=t=>Kc.test(t),Ns=t=>t.startsWith("onUpdate:"),ve=Object.assign,Ms=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},qc=Object.prototype.hasOwnProperty,K=(t,e)=>qc.call(t,e),x=Array.isArray,Vt=t=>Rr(t)==="[object Map]",en=t=>Rr(t)==="[object Set]",pi=t=>t instanceof Date,B=t=>typeof t=="function",he=t=>typeof t=="string",xs=t=>typeof t=="symbol",ae=t=>t!==null&&typeof t=="object",No=t=>ae(t)&&B(t.then)&&B(t.catch),Mo=Object.prototype.toString,Rr=t=>Mo.call(t),Gc=t=>Rr(t).slice(8,-1),xo=t=>Rr(t)==="[object Object]",Ds=t=>he(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,nr=Os(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ar=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Jc=/-(\w)/g,We=Ar(t=>t.replace(Jc,(e,n)=>n?n.toUpperCase():"")),Yc=/\B([A-Z])/g,tn=Ar(t=>t.replace(Yc,"-$1").toLowerCase()),Or=Ar(t=>t.charAt(0).toUpperCase()+t.slice(1)),zr=Ar(t=>t?`on${Or(t)}`:""),An=(t,e)=>!Object.is(t,e),rr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ur=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},fr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let gi;const Xc=()=>gi||(gi=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let $e;class Do{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&$e&&(this.parent=$e,this.index=($e.scopes||($e.scopes=[])).push(this)-1)}run(e){if(this.active){const n=$e;try{return $e=this,e()}finally{$e=n}}}on(){$e=this}off(){$e=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Lo(t){return new Do(t)}function Qc(t,e=$e){e&&e.active&&e.effects.push(t)}const Ls=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Uo=t=>(t.w&pt)>0,Fo=t=>(t.n&pt)>0,Zc=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=pt},el=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Uo(s)&&!Fo(s)?s.delete(t):e[n++]=s,s.w&=~pt,s.n&=~pt}e.length=n}},ss=new WeakMap;let hn=0,pt=1;const is=30;let ke;const wt=Symbol(""),os=Symbol("");class Us{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Qc(this,r)}run(){if(!this.active)return this.fn();let e=ke,n=dt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ke,ke=this,dt=!0,pt=1<<++hn,hn<=is?Zc(this):mi(this),this.fn()}finally{hn<=is&&el(this),pt=1<<--hn,ke=this.parent,dt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ke===this?this.deferStop=!0:this.active&&(mi(this),this.onStop&&this.onStop(),this.active=!1)}}function mi(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let dt=!0;const $o=[];function nn(){$o.push(dt),dt=!1}function rn(){const t=$o.pop();dt=t===void 0?!0:t}function we(t,e,n){if(dt&&ke){let r=ss.get(t);r||ss.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ls()),Bo(s)}}function Bo(t,e){let n=!1;hn<=is?Fo(t)||(t.n|=pt,n=!Uo(t)):n=!t.has(ke),n&&(t.add(ke),ke.deps.push(t))}function Qe(t,e,n,r,s,i){const o=ss.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&x(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":x(t)?Ds(n)&&a.push(o.get("length")):(a.push(o.get(wt)),Vt(t)&&a.push(o.get(os)));break;case"delete":x(t)||(a.push(o.get(wt)),Vt(t)&&a.push(o.get(os)));break;case"set":Vt(t)&&a.push(o.get(wt));break}if(a.length===1)a[0]&&as(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);as(Ls(c))}}function as(t,e){for(const n of x(t)?t:[...t])(n!==ke||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const tl=Os("__proto__,__v_isRef,__isVue"),Ho=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(xs)),nl=Fs(),rl=Fs(!1,!0),sl=Fs(!0),_i=il();function il(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=G(this);for(let i=0,o=this.length;i<o;i++)we(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(G)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){nn();const r=G(this)[e].apply(this,n);return rn(),r}}),t}function Fs(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Il:Ko:e?zo:Wo).get(r))return r;const o=x(r);if(!t&&o&&K(_i,s))return Reflect.get(_i,s,i);const a=Reflect.get(r,s,i);return(xs(s)?Ho.has(s):tl(s))||(t||we(r,"get",s),e)?a:oe(a)?!o||!Ds(s)?a.value:a:ae(a)?t?qo(a):sn(a):a}}const ol=jo(),al=jo(!0);function jo(t=!1){return function(n,r,s,i){let o=n[r];if(On(o)&&oe(o)&&!oe(s))return!1;if(!t&&!On(s)&&(Go(s)||(s=G(s),o=G(o)),!x(n)&&oe(o)&&!oe(s)))return o.value=s,!0;const a=x(n)&&Ds(r)?Number(r)<n.length:K(n,r),c=Reflect.set(n,r,s,i);return n===G(i)&&(a?An(s,o)&&Qe(n,"set",r,s):Qe(n,"add",r,s)),c}}function cl(t,e){const n=K(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Qe(t,"delete",e,void 0),r}function ll(t,e){const n=Reflect.has(t,e);return(!xs(e)||!Ho.has(e))&&we(t,"has",e),n}function ul(t){return we(t,"iterate",x(t)?"length":wt),Reflect.ownKeys(t)}const Vo={get:nl,set:ol,deleteProperty:cl,has:ll,ownKeys:ul},fl={get:sl,set(t,e){return!0},deleteProperty(t,e){return!0}},dl=ve({},Vo,{get:rl,set:al}),$s=t=>t,Cr=t=>Reflect.getPrototypeOf(t);function Yn(t,e,n=!1,r=!1){t=t.__v_raw;const s=G(t),i=G(e);e!==i&&!n&&we(s,"get",e),!n&&we(s,"get",i);const{has:o}=Cr(s),a=r?$s:n?js:Cn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Xn(t,e=!1){const n=this.__v_raw,r=G(n),s=G(t);return t!==s&&!e&&we(r,"has",t),!e&&we(r,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function Qn(t,e=!1){return t=t.__v_raw,!e&&we(G(t),"iterate",wt),Reflect.get(t,"size",t)}function vi(t){t=G(t);const e=G(this);return Cr(e).has.call(e,t)||(e.add(t),Qe(e,"add",t,t)),this}function yi(t,e){e=G(e);const n=G(this),{has:r,get:s}=Cr(n);let i=r.call(n,t);i||(t=G(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?An(e,o)&&Qe(n,"set",t,e):Qe(n,"add",t,e),this}function bi(t){const e=G(this),{has:n,get:r}=Cr(e);let s=n.call(e,t);s||(t=G(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Qe(e,"delete",t,void 0),i}function Ii(){const t=G(this),e=t.size!==0,n=t.clear();return e&&Qe(t,"clear",void 0,void 0),n}function Zn(t,e){return function(r,s){const i=this,o=i.__v_raw,a=G(o),c=e?$s:t?js:Cn;return!t&&we(a,"iterate",wt),o.forEach((l,f)=>r.call(s,c(l),c(f),i))}}function er(t,e,n){return function(...r){const s=this.__v_raw,i=G(s),o=Vt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),f=n?$s:e?js:Cn;return!e&&we(i,"iterate",c?os:wt),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:a?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function tt(t){return function(...e){return t==="delete"?!1:this}}function hl(){const t={get(i){return Yn(this,i)},get size(){return Qn(this)},has:Xn,add:vi,set:yi,delete:bi,clear:Ii,forEach:Zn(!1,!1)},e={get(i){return Yn(this,i,!1,!0)},get size(){return Qn(this)},has:Xn,add:vi,set:yi,delete:bi,clear:Ii,forEach:Zn(!1,!0)},n={get(i){return Yn(this,i,!0)},get size(){return Qn(this,!0)},has(i){return Xn.call(this,i,!0)},add:tt("add"),set:tt("set"),delete:tt("delete"),clear:tt("clear"),forEach:Zn(!0,!1)},r={get(i){return Yn(this,i,!0,!0)},get size(){return Qn(this,!0)},has(i){return Xn.call(this,i,!0)},add:tt("add"),set:tt("set"),delete:tt("delete"),clear:tt("clear"),forEach:Zn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=er(i,!1,!1),n[i]=er(i,!0,!1),e[i]=er(i,!1,!0),r[i]=er(i,!0,!0)}),[t,n,e,r]}const[pl,gl,ml,_l]=hl();function Bs(t,e){const n=e?t?_l:ml:t?gl:pl;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(K(n,s)&&s in r?n:r,s,i)}const vl={get:Bs(!1,!1)},yl={get:Bs(!1,!0)},bl={get:Bs(!0,!1)},Wo=new WeakMap,zo=new WeakMap,Ko=new WeakMap,Il=new WeakMap;function El(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wl(t){return t.__v_skip||!Object.isExtensible(t)?0:El(Gc(t))}function sn(t){return On(t)?t:Hs(t,!1,Vo,vl,Wo)}function Tl(t){return Hs(t,!1,dl,yl,zo)}function qo(t){return Hs(t,!0,fl,bl,Ko)}function Hs(t,e,n,r,s){if(!ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=wl(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Xe(t){return On(t)?Xe(t.__v_raw):!!(t&&t.__v_isReactive)}function On(t){return!!(t&&t.__v_isReadonly)}function Go(t){return!!(t&&t.__v_isShallow)}function Jo(t){return Xe(t)||On(t)}function G(t){const e=t&&t.__v_raw;return e?G(e):t}function Gt(t){return ur(t,"__v_skip",!0),t}const Cn=t=>ae(t)?sn(t):t,js=t=>ae(t)?qo(t):t;function Yo(t){dt&&ke&&(t=G(t),Bo(t.dep||(t.dep=Ls())))}function Xo(t,e){t=G(t),t.dep&&as(t.dep)}function oe(t){return!!(t&&t.__v_isRef===!0)}function Pn(t){return Qo(t,!1)}function Sl(t){return Qo(t,!0)}function Qo(t,e){return oe(t)?t:new Rl(t,e)}class Rl{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:G(e),this._value=n?e:Cn(e)}get value(){return Yo(this),this._value}set value(e){e=this.__v_isShallow?e:G(e),An(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Cn(e),Xo(this))}}function Tt(t){return oe(t)?t.value:t}const Al={get:(t,e,n)=>Tt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return oe(s)&&!oe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Zo(t){return Xe(t)?t:new Proxy(t,Al)}function ea(t){const e=x(t)?new Array(t.length):{};for(const n in t)e[n]=ta(t,n);return e}class Ol{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function ta(t,e,n){const r=t[e];return oe(r)?r:new Ol(t,e,n)}class Cl{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Us(e,()=>{this._dirty||(this._dirty=!0,Xo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=G(this);return Yo(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Pl(t,e,n=!1){let r,s;const i=B(t);return i?(r=t,s=Me):(r=t.get,s=t.set),new Cl(r,s,i||!s,n)}function ht(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Pr(i,e,n)}return s}function xe(t,e,n,r){if(B(t)){const i=ht(t,e,n,r);return i&&No(i)&&i.catch(o=>{Pr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(xe(t[i],e,n,r));return s}function Pr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){ht(c,null,10,[t,o,a]);return}}kl(t,n,s,r)}function kl(t,e,n,r=!0){console.error(t)}let dr=!1,cs=!1;const Ee=[];let qe=0;const yn=[];let pn=null,$t=0;const bn=[];let it=null,Bt=0;const na=Promise.resolve();let Vs=null,ls=null;function Ws(t){const e=Vs||na;return t?e.then(this?t.bind(this):t):e}function Nl(t){let e=qe+1,n=Ee.length;for(;e<n;){const r=e+n>>>1;kn(Ee[r])<t?e=r+1:n=r}return e}function ra(t){(!Ee.length||!Ee.includes(t,dr&&t.allowRecurse?qe+1:qe))&&t!==ls&&(t.id==null?Ee.push(t):Ee.splice(Nl(t.id),0,t),sa())}function sa(){!dr&&!cs&&(cs=!0,Vs=na.then(aa))}function Ml(t){const e=Ee.indexOf(t);e>qe&&Ee.splice(e,1)}function ia(t,e,n,r){x(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),sa()}function xl(t){ia(t,pn,yn,$t)}function Dl(t){ia(t,it,bn,Bt)}function zs(t,e=null){if(yn.length){for(ls=e,pn=[...new Set(yn)],yn.length=0,$t=0;$t<pn.length;$t++)pn[$t]();pn=null,$t=0,ls=null,zs(t,e)}}function oa(t){if(bn.length){const e=[...new Set(bn)];if(bn.length=0,it){it.push(...e);return}for(it=e,it.sort((n,r)=>kn(n)-kn(r)),Bt=0;Bt<it.length;Bt++)it[Bt]();it=null,Bt=0}}const kn=t=>t.id==null?1/0:t.id;function aa(t){cs=!1,dr=!0,zs(t),Ee.sort((n,r)=>kn(n)-kn(r));const e=Me;try{for(qe=0;qe<Ee.length;qe++){const n=Ee[qe];n&&n.active!==!1&&ht(n,null,14)}}finally{qe=0,Ee.length=0,oa(),dr=!1,Vs=null,(Ee.length||yn.length||bn.length)&&aa(t)}}function Ll(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Z;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[f]||Z;p?s=n.map(y=>y.trim()):h&&(s=n.map(fr))}let a,c=r[a=zr(e)]||r[a=zr(We(e))];!c&&i&&(c=r[a=zr(tn(e))]),c&&xe(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,xe(l,t,6,s)}}function ca(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!B(t)){const c=l=>{const f=ca(l,e,!0);f&&(a=!0,ve(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(x(i)?i.forEach(c=>o[c]=null):ve(o,i),r.set(t,o),o)}function kr(t,e){return!t||!Sr(e)?!1:(e=e.slice(2).replace(/Once$/,""),K(t,e[0].toLowerCase()+e.slice(1))||K(t,tn(e))||K(t,e))}let Re=null,Nr=null;function hr(t){const e=Re;return Re=t,Nr=t&&t.type.__scopeId||null,e}function Bg(t){Nr=t}function Hg(){Nr=null}function gn(t,e=Re,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ki(-1);const i=hr(e),o=t(...s);return hr(i),r._d&&ki(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Kr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:f,renderCache:h,data:p,setupState:y,ctx:S,inheritAttrs:D}=t;let A,O;const U=hr(t);try{if(n.shapeFlag&4){const $=s||r;A=He(f.call($,$,h,i,y,p,S)),O=c}else{const $=e;A=He($.length>1?$(i,{attrs:c,slots:a,emit:l}):$(i,null)),O=e.props?c:Ul(c)}}catch($){En.length=0,Pr($,t,1),A=de(Ct)}let z=A;if(O&&D!==!1){const $=Object.keys(O),{shapeFlag:ie}=z;$.length&&ie&7&&(o&&$.some(Ns)&&(O=Fl(O,o)),z=Nn(z,O))}return n.dirs&&(z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&(z.transition=n.transition),A=z,hr(U),A}const Ul=t=>{let e;for(const n in t)(n==="class"||n==="style"||Sr(n))&&((e||(e={}))[n]=t[n]);return e},Fl=(t,e)=>{const n={};for(const r in t)(!Ns(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function $l(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ei(r,o,l):!!o;if(c&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(o[p]!==r[p]&&!kr(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Ei(r,o,l):!0:!!o;return!1}function Ei(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!kr(n,i))return!0}return!1}function Bl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Hl=t=>t.__isSuspense;function jl(t,e){e&&e.pendingBranch?x(t)?e.effects.push(...t):e.effects.push(t):Dl(t)}function sr(t,e){if(fe){let n=fe.provides;const r=fe.parent&&fe.parent.provides;r===n&&(n=fe.provides=Object.create(r)),n[t]=e}}function De(t,e,n=!1){const r=fe||Re;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&B(e)?e.call(r.proxy):e}}function jg(t,e){return Ks(t,null,e)}const wi={};function In(t,e,n){return Ks(t,e,n)}function Ks(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Z){const a=fe;let c,l=!1,f=!1;if(oe(t)?(c=()=>t.value,l=Go(t)):Xe(t)?(c=()=>t,r=!0):x(t)?(f=!0,l=t.some(Xe),c=()=>t.map(O=>{if(oe(O))return O.value;if(Xe(O))return It(O);if(B(O))return ht(O,a,2)})):B(t)?e?c=()=>ht(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),xe(t,a,3,[p])}:c=Me,e&&r){const O=c;c=()=>It(O())}let h,p=O=>{h=A.onStop=()=>{ht(O,a,4)}};if(Mn)return p=Me,e?n&&xe(e,a,3,[c(),f?[]:void 0,p]):c(),Me;let y=f?[]:wi;const S=()=>{if(!!A.active)if(e){const O=A.run();(r||l||(f?O.some((U,z)=>An(U,y[z])):An(O,y)))&&(h&&h(),xe(e,a,3,[O,y===wi?void 0:y,p]),y=O)}else A.run()};S.allowRecurse=!!e;let D;s==="sync"?D=S:s==="post"?D=()=>ye(S,a&&a.suspense):D=()=>{!a||a.isMounted?xl(S):S()};const A=new Us(c,D);return e?n?S():y=A.run():s==="post"?ye(A.run.bind(A),a&&a.suspense):A.run(),()=>{A.stop(),a&&a.scope&&Ms(a.scope.effects,A)}}function Vl(t,e,n){const r=this.proxy,s=he(t)?t.includes(".")?la(r,t):()=>r[t]:t.bind(r,r);let i;B(e)?i=e:(i=e.handler,n=e);const o=fe;Jt(this);const a=Ks(s,i.bind(r),n);return o?Jt(o):Rt(),a}function la(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function It(t,e){if(!ae(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),oe(t))It(t.value,e);else if(x(t))for(let n=0;n<t.length;n++)It(t[n],e);else if(en(t)||Vt(t))t.forEach(n=>{It(n,e)});else if(xo(t))for(const n in t)It(t[n],e);return t}function Mr(t){return B(t)?{setup:t,name:t.name}:t}const us=t=>!!t.type.__asyncLoader,ua=t=>t.type.__isKeepAlive;function Wl(t,e){fa(t,"a",e)}function zl(t,e){fa(t,"da",e)}function fa(t,e,n=fe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(xr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ua(s.parent.vnode)&&Kl(r,e,n,s),s=s.parent}}function Kl(t,e,n,r){const s=xr(e,t,r,!0);qs(()=>{Ms(r[e],s)},n)}function xr(t,e,n=fe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;nn(),Jt(n);const a=xe(e,n,t,o);return Rt(),rn(),a});return r?s.unshift(i):s.push(i),i}}const et=t=>(e,n=fe)=>(!Mn||t==="sp")&&xr(t,e,n),ql=et("bm"),da=et("m"),Gl=et("bu"),Jl=et("u"),Yl=et("bum"),qs=et("um"),Xl=et("sp"),Ql=et("rtg"),Zl=et("rtc");function eu(t,e=fe){xr("ec",t,e)}let fs=!0;function tu(t){const e=pa(t),n=t.proxy,r=t.ctx;fs=!1,e.beforeCreate&&Ti(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:f,beforeMount:h,mounted:p,beforeUpdate:y,updated:S,activated:D,deactivated:A,beforeDestroy:O,beforeUnmount:U,destroyed:z,unmounted:$,render:ie,renderTracked:j,renderTriggered:W,errorCaptured:me,serverPrefetch:ce,expose:pe,inheritAttrs:Oe,components:Ce,directives:Te,filters:le}=e;if(l&&nu(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ee in o){const J=o[ee];B(J)&&(r[ee]=J.bind(n))}if(s){const ee=s.call(n,n);ae(ee)&&(t.data=sn(ee))}if(fs=!0,i)for(const ee in i){const J=i[ee],be=B(J)?J.bind(n,n):B(J.get)?J.get.bind(n,n):Me,Dt=!B(J)&&B(J.set)?J.set.bind(n):Me,ze=Ne({get:be,set:Dt});Object.defineProperty(r,ee,{enumerable:!0,configurable:!0,get:()=>ze.value,set:Le=>ze.value=Le})}if(a)for(const ee in a)ha(a[ee],r,n,ee);if(c){const ee=B(c)?c.call(n):c;Reflect.ownKeys(ee).forEach(J=>{sr(J,ee[J])})}f&&Ti(f,t,"c");function ue(ee,J){x(J)?J.forEach(be=>ee(be.bind(n))):J&&ee(J.bind(n))}if(ue(ql,h),ue(da,p),ue(Gl,y),ue(Jl,S),ue(Wl,D),ue(zl,A),ue(eu,me),ue(Zl,j),ue(Ql,W),ue(Yl,U),ue(qs,$),ue(Xl,ce),x(pe))if(pe.length){const ee=t.exposed||(t.exposed={});pe.forEach(J=>{Object.defineProperty(ee,J,{get:()=>n[J],set:be=>n[J]=be})})}else t.exposed||(t.exposed={});ie&&t.render===Me&&(t.render=ie),Oe!=null&&(t.inheritAttrs=Oe),Ce&&(t.components=Ce),Te&&(t.directives=Te)}function nu(t,e,n=Me,r=!1){x(t)&&(t=ds(t));for(const s in t){const i=t[s];let o;ae(i)?"default"in i?o=De(i.from||s,i.default,!0):o=De(i.from||s):o=De(i),oe(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Ti(t,e,n){xe(x(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ha(t,e,n,r){const s=r.includes(".")?la(n,r):()=>n[r];if(he(t)){const i=e[t];B(i)&&In(s,i)}else if(B(t))In(s,t.bind(n));else if(ae(t))if(x(t))t.forEach(i=>ha(i,e,n,r));else{const i=B(t.handler)?t.handler.bind(n):e[t.handler];B(i)&&In(s,i,t)}}function pa(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>pr(c,l,o,!0)),pr(c,e,o)),i.set(e,c),c}function pr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&pr(t,i,n,!0),s&&s.forEach(o=>pr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=ru[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const ru={data:Si,props:vt,emits:vt,methods:vt,computed:vt,beforeCreate:_e,created:_e,beforeMount:_e,mounted:_e,beforeUpdate:_e,updated:_e,beforeDestroy:_e,beforeUnmount:_e,destroyed:_e,unmounted:_e,activated:_e,deactivated:_e,errorCaptured:_e,serverPrefetch:_e,components:vt,directives:vt,watch:iu,provide:Si,inject:su};function Si(t,e){return e?t?function(){return ve(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function su(t,e){return vt(ds(t),ds(e))}function ds(t){if(x(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function _e(t,e){return t?[...new Set([].concat(t,e))]:e}function vt(t,e){return t?ve(ve(Object.create(null),t),e):e}function iu(t,e){if(!t)return e;if(!e)return t;const n=ve(Object.create(null),t);for(const r in e)n[r]=_e(t[r],e[r]);return n}function ou(t,e,n,r=!1){const s={},i={};ur(i,Dr,1),t.propsDefaults=Object.create(null),ga(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Tl(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function au(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=G(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(kr(t.emitsOptions,p))continue;const y=e[p];if(c)if(K(i,p))y!==i[p]&&(i[p]=y,l=!0);else{const S=We(p);s[S]=hs(c,a,S,y,t,!1)}else y!==i[p]&&(i[p]=y,l=!0)}}}else{ga(t,e,s,i)&&(l=!0);let f;for(const h in a)(!e||!K(e,h)&&((f=tn(h))===h||!K(e,f)))&&(c?n&&(n[h]!==void 0||n[f]!==void 0)&&(s[h]=hs(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!K(e,h)&&!0)&&(delete i[h],l=!0)}l&&Qe(t,"set","$attrs")}function ga(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(nr(c))continue;const l=e[c];let f;s&&K(s,f=We(c))?!i||!i.includes(f)?n[f]=l:(a||(a={}))[f]=l:kr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=G(n),l=a||Z;for(let f=0;f<i.length;f++){const h=i[f];n[h]=hs(s,c,h,l[h],t,!K(l,h))}}return o}function hs(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=K(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&B(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Jt(s),r=l[n]=c.call(null,e),Rt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===tn(n))&&(r=!0))}return r}function ma(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!B(t)){const f=h=>{c=!0;const[p,y]=ma(h,e,!0);ve(o,p),y&&a.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return r.set(t,jt),jt;if(x(i))for(let f=0;f<i.length;f++){const h=We(i[f]);Ri(h)&&(o[h]=Z)}else if(i)for(const f in i){const h=We(f);if(Ri(h)){const p=i[f],y=o[h]=x(p)||B(p)?{type:p}:p;if(y){const S=Ci(Boolean,y.type),D=Ci(String,y.type);y[0]=S>-1,y[1]=D<0||S<D,(S>-1||K(y,"default"))&&a.push(h)}}}const l=[o,a];return r.set(t,l),l}function Ri(t){return t[0]!=="$"}function Ai(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Oi(t,e){return Ai(t)===Ai(e)}function Ci(t,e){return x(e)?e.findIndex(n=>Oi(n,t)):B(e)&&Oi(e,t)?0:-1}const _a=t=>t[0]==="_"||t==="$stable",Gs=t=>x(t)?t.map(He):[He(t)],cu=(t,e,n)=>{const r=gn((...s)=>Gs(e(...s)),n);return r._c=!1,r},va=(t,e,n)=>{const r=t._ctx;for(const s in t){if(_a(s))continue;const i=t[s];if(B(i))e[s]=cu(s,i,r);else if(i!=null){const o=Gs(i);e[s]=()=>o}}},ya=(t,e)=>{const n=Gs(e);t.slots.default=()=>n},lu=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=G(e),ur(e,"_",n)):va(e,t.slots={})}else t.slots={},e&&ya(t,e);ur(t.slots,Dr,1)},uu=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Z;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ve(s,e),!n&&a===1&&delete s._):(i=!e.$stable,va(e,s)),o=e}else e&&(ya(t,e),o={default:1});if(i)for(const a in s)!_a(a)&&!(a in o)&&delete s[a]};function Vg(t,e){const n=Re;if(n===null)return t;const r=Lr(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Z]=e[i];B(o)&&(o={mounted:o,updated:o}),o.deep&&It(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function mt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(nn(),xe(c,n,8,[t.el,a,t,e]),rn())}}function ba(){return{app:null,config:{isNativeTag:zc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let fu=0;function du(t,e){return function(r,s=null){B(r)||(r=Object.assign({},r)),s!=null&&!ae(s)&&(s=null);const i=ba(),o=new Set;let a=!1;const c=i.app={_uid:fu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:xu,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&B(l.install)?(o.add(l),l.install(c,...f)):B(l)&&(o.add(l),l(c,...f))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,f){return f?(i.components[l]=f,c):i.components[l]},directive(l,f){return f?(i.directives[l]=f,c):i.directives[l]},mount(l,f,h){if(!a){const p=de(r,s);return p.appContext=i,f&&e?e(p,l):t(p,l,h),a=!0,c._container=l,l.__vue_app__=c,Lr(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,f){return i.provides[l]=f,c}};return c}}function ps(t,e,n,r,s=!1){if(x(t)){t.forEach((p,y)=>ps(p,e&&(x(e)?e[y]:e),n,r,s));return}if(us(r)&&!s)return;const i=r.shapeFlag&4?Lr(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,f=a.refs===Z?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(he(l)?(f[l]=null,K(h,l)&&(h[l]=null)):oe(l)&&(l.value=null)),B(c))ht(c,a,12,[o,f]);else{const p=he(c),y=oe(c);if(p||y){const S=()=>{if(t.f){const D=p?f[c]:c.value;s?x(D)&&Ms(D,i):x(D)?D.includes(i)||D.push(i):p?(f[c]=[i],K(h,c)&&(h[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else p?(f[c]=o,K(h,c)&&(h[c]=o)):oe(c)&&(c.value=o,t.k&&(f[t.k]=o))};o?(S.id=-1,ye(S,n)):S()}}}const ye=jl;function hu(t){return pu(t)}function pu(t,e){const n=Xc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:f,parentNode:h,nextSibling:p,setScopeId:y=Me,cloneNode:S,insertStaticContent:D}=t,A=(u,d,g,v=null,_=null,E=null,R=!1,I=null,w=!!d.dynamicChildren)=>{if(u===d)return;u&&!un(u,d)&&(v=k(u),Se(u,_,E,!0),u=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:b,ref:N,shapeFlag:C}=d;switch(b){case Js:O(u,d,g,v);break;case Ct:U(u,d,g,v);break;case qr:u==null&&z(d,g,v,R);break;case Be:Te(u,d,g,v,_,E,R,I,w);break;default:C&1?j(u,d,g,v,_,E,R,I,w):C&6?le(u,d,g,v,_,E,R,I,w):(C&64||C&128)&&b.process(u,d,g,v,_,E,R,I,w,te)}N!=null&&_&&ps(N,u&&u.ref,E,d||u,!d)},O=(u,d,g,v)=>{if(u==null)r(d.el=a(d.children),g,v);else{const _=d.el=u.el;d.children!==u.children&&l(_,d.children)}},U=(u,d,g,v)=>{u==null?r(d.el=c(d.children||""),g,v):d.el=u.el},z=(u,d,g,v)=>{[u.el,u.anchor]=D(u.children,d,g,v,u.el,u.anchor)},$=({el:u,anchor:d},g,v)=>{let _;for(;u&&u!==d;)_=p(u),r(u,g,v),u=_;r(d,g,v)},ie=({el:u,anchor:d})=>{let g;for(;u&&u!==d;)g=p(u),s(u),u=g;s(d)},j=(u,d,g,v,_,E,R,I,w)=>{R=R||d.type==="svg",u==null?W(d,g,v,_,E,R,I,w):pe(u,d,_,E,R,I,w)},W=(u,d,g,v,_,E,R,I)=>{let w,b;const{type:N,props:C,shapeFlag:M,transition:F,patchFlag:q,dirs:se}=u;if(u.el&&S!==void 0&&q===-1)w=u.el=S(u.el);else{if(w=u.el=o(u.type,E,C&&C.is,C),M&8?f(w,u.children):M&16&&ce(u.children,w,null,v,_,E&&N!=="foreignObject",R,I),se&&mt(u,null,v,"created"),C){for(const re in C)re!=="value"&&!nr(re)&&i(w,re,null,C[re],E,u.children,v,_,T);"value"in C&&i(w,"value",null,C.value),(b=C.onVnodeBeforeMount)&&Fe(b,v,u)}me(w,u,u.scopeId,R,v)}se&&mt(u,null,v,"beforeMount");const X=(!_||_&&!_.pendingBranch)&&F&&!F.persisted;X&&F.beforeEnter(w),r(w,d,g),((b=C&&C.onVnodeMounted)||X||se)&&ye(()=>{b&&Fe(b,v,u),X&&F.enter(w),se&&mt(u,null,v,"mounted")},_)},me=(u,d,g,v,_)=>{if(g&&y(u,g),v)for(let E=0;E<v.length;E++)y(u,v[E]);if(_){let E=_.subTree;if(d===E){const R=_.vnode;me(u,R,R.scopeId,R.slotScopeIds,_.parent)}}},ce=(u,d,g,v,_,E,R,I,w=0)=>{for(let b=w;b<u.length;b++){const N=u[b]=I?ot(u[b]):He(u[b]);A(null,N,d,g,v,_,E,R,I)}},pe=(u,d,g,v,_,E,R)=>{const I=d.el=u.el;let{patchFlag:w,dynamicChildren:b,dirs:N}=d;w|=u.patchFlag&16;const C=u.props||Z,M=d.props||Z;let F;g&&_t(g,!1),(F=M.onVnodeBeforeUpdate)&&Fe(F,g,d,u),N&&mt(d,u,g,"beforeUpdate"),g&&_t(g,!0);const q=_&&d.type!=="foreignObject";if(b?Oe(u.dynamicChildren,b,I,g,v,q,E):R||be(u,d,I,null,g,v,q,E,!1),w>0){if(w&16)Ce(I,d,C,M,g,v,_);else if(w&2&&C.class!==M.class&&i(I,"class",null,M.class,_),w&4&&i(I,"style",C.style,M.style,_),w&8){const se=d.dynamicProps;for(let X=0;X<se.length;X++){const re=se[X],Pe=C[re],Lt=M[re];(Lt!==Pe||re==="value")&&i(I,re,Pe,Lt,_,u.children,g,v,T)}}w&1&&u.children!==d.children&&f(I,d.children)}else!R&&b==null&&Ce(I,d,C,M,g,v,_);((F=M.onVnodeUpdated)||N)&&ye(()=>{F&&Fe(F,g,d,u),N&&mt(d,u,g,"updated")},v)},Oe=(u,d,g,v,_,E,R)=>{for(let I=0;I<d.length;I++){const w=u[I],b=d[I],N=w.el&&(w.type===Be||!un(w,b)||w.shapeFlag&70)?h(w.el):g;A(w,b,N,null,v,_,E,R,!0)}},Ce=(u,d,g,v,_,E,R)=>{if(g!==v){for(const I in v){if(nr(I))continue;const w=v[I],b=g[I];w!==b&&I!=="value"&&i(u,I,b,w,R,d.children,_,E,T)}if(g!==Z)for(const I in g)!nr(I)&&!(I in v)&&i(u,I,g[I],null,R,d.children,_,E,T);"value"in v&&i(u,"value",g.value,v.value)}},Te=(u,d,g,v,_,E,R,I,w)=>{const b=d.el=u?u.el:a(""),N=d.anchor=u?u.anchor:a("");let{patchFlag:C,dynamicChildren:M,slotScopeIds:F}=d;F&&(I=I?I.concat(F):F),u==null?(r(b,g,v),r(N,g,v),ce(d.children,g,N,_,E,R,I,w)):C>0&&C&64&&M&&u.dynamicChildren?(Oe(u.dynamicChildren,M,g,_,E,R,I),(d.key!=null||_&&d===_.subTree)&&Ia(u,d,!0)):be(u,d,g,N,_,E,R,I,w)},le=(u,d,g,v,_,E,R,I,w)=>{d.slotScopeIds=I,u==null?d.shapeFlag&512?_.ctx.activate(d,g,v,R,w):xt(d,g,v,_,E,R,w):ue(u,d,w)},xt=(u,d,g,v,_,E,R)=>{const I=u.component=Au(u,v,_);if(ua(u)&&(I.ctx.renderer=te),Ou(I),I.asyncDep){if(_&&_.registerDep(I,ee),!u.el){const w=I.subTree=de(Ct);U(null,w,d,g)}return}ee(I,u,d,g,_,E,R)},ue=(u,d,g)=>{const v=d.component=u.component;if($l(u,d,g))if(v.asyncDep&&!v.asyncResolved){J(v,d,g);return}else v.next=d,Ml(v.update),v.update();else d.component=u.component,d.el=u.el,v.vnode=d},ee=(u,d,g,v,_,E,R)=>{const I=()=>{if(u.isMounted){let{next:N,bu:C,u:M,parent:F,vnode:q}=u,se=N,X;_t(u,!1),N?(N.el=q.el,J(u,N,R)):N=q,C&&rr(C),(X=N.props&&N.props.onVnodeBeforeUpdate)&&Fe(X,F,N,q),_t(u,!0);const re=Kr(u),Pe=u.subTree;u.subTree=re,A(Pe,re,h(Pe.el),k(Pe),u,_,E),N.el=re.el,se===null&&Bl(u,re.el),M&&ye(M,_),(X=N.props&&N.props.onVnodeUpdated)&&ye(()=>Fe(X,F,N,q),_)}else{let N;const{el:C,props:M}=d,{bm:F,m:q,parent:se}=u,X=us(d);if(_t(u,!1),F&&rr(F),!X&&(N=M&&M.onVnodeBeforeMount)&&Fe(N,se,d),_t(u,!0),C&&H){const re=()=>{u.subTree=Kr(u),H(C,u.subTree,u,_,null)};X?d.type.__asyncLoader().then(()=>!u.isUnmounted&&re()):re()}else{const re=u.subTree=Kr(u);A(null,re,g,v,u,_,E),d.el=re.el}if(q&&ye(q,_),!X&&(N=M&&M.onVnodeMounted)){const re=d;ye(()=>Fe(N,se,re),_)}d.shapeFlag&256&&u.a&&ye(u.a,_),u.isMounted=!0,d=g=v=null}},w=u.effect=new Us(I,()=>ra(u.update),u.scope),b=u.update=w.run.bind(w);b.id=u.uid,_t(u,!0),b()},J=(u,d,g)=>{d.component=u;const v=u.vnode.props;u.vnode=d,u.next=null,au(u,d.props,v,g),uu(u,d.children,g),nn(),zs(void 0,u.update),rn()},be=(u,d,g,v,_,E,R,I,w=!1)=>{const b=u&&u.children,N=u?u.shapeFlag:0,C=d.children,{patchFlag:M,shapeFlag:F}=d;if(M>0){if(M&128){ze(b,C,g,v,_,E,R,I,w);return}else if(M&256){Dt(b,C,g,v,_,E,R,I,w);return}}F&8?(N&16&&T(b,_,E),C!==b&&f(g,C)):N&16?F&16?ze(b,C,g,v,_,E,R,I,w):T(b,_,E,!0):(N&8&&f(g,""),F&16&&ce(C,g,v,_,E,R,I,w))},Dt=(u,d,g,v,_,E,R,I,w)=>{u=u||jt,d=d||jt;const b=u.length,N=d.length,C=Math.min(b,N);let M;for(M=0;M<C;M++){const F=d[M]=w?ot(d[M]):He(d[M]);A(u[M],F,g,null,_,E,R,I,w)}b>N?T(u,_,E,!0,!1,C):ce(d,g,v,_,E,R,I,w,C)},ze=(u,d,g,v,_,E,R,I,w)=>{let b=0;const N=d.length;let C=u.length-1,M=N-1;for(;b<=C&&b<=M;){const F=u[b],q=d[b]=w?ot(d[b]):He(d[b]);if(un(F,q))A(F,q,g,null,_,E,R,I,w);else break;b++}for(;b<=C&&b<=M;){const F=u[C],q=d[M]=w?ot(d[M]):He(d[M]);if(un(F,q))A(F,q,g,null,_,E,R,I,w);else break;C--,M--}if(b>C){if(b<=M){const F=M+1,q=F<N?d[F].el:v;for(;b<=M;)A(null,d[b]=w?ot(d[b]):He(d[b]),g,q,_,E,R,I,w),b++}}else if(b>M)for(;b<=C;)Se(u[b],_,E,!0),b++;else{const F=b,q=b,se=new Map;for(b=q;b<=M;b++){const Ie=d[b]=w?ot(d[b]):He(d[b]);Ie.key!=null&&se.set(Ie.key,b)}let X,re=0;const Pe=M-q+1;let Lt=!1,fi=0;const ln=new Array(Pe);for(b=0;b<Pe;b++)ln[b]=0;for(b=F;b<=C;b++){const Ie=u[b];if(re>=Pe){Se(Ie,_,E,!0);continue}let Ue;if(Ie.key!=null)Ue=se.get(Ie.key);else for(X=q;X<=M;X++)if(ln[X-q]===0&&un(Ie,d[X])){Ue=X;break}Ue===void 0?Se(Ie,_,E,!0):(ln[Ue-q]=b+1,Ue>=fi?fi=Ue:Lt=!0,A(Ie,d[Ue],g,null,_,E,R,I,w),re++)}const di=Lt?gu(ln):jt;for(X=di.length-1,b=Pe-1;b>=0;b--){const Ie=q+b,Ue=d[Ie],hi=Ie+1<N?d[Ie+1].el:v;ln[b]===0?A(null,Ue,g,hi,_,E,R,I,w):Lt&&(X<0||b!==di[X]?Le(Ue,g,hi,2):X--)}}},Le=(u,d,g,v,_=null)=>{const{el:E,type:R,transition:I,children:w,shapeFlag:b}=u;if(b&6){Le(u.component.subTree,d,g,v);return}if(b&128){u.suspense.move(d,g,v);return}if(b&64){R.move(u,d,g,te);return}if(R===Be){r(E,d,g);for(let C=0;C<w.length;C++)Le(w[C],d,g,v);r(u.anchor,d,g);return}if(R===qr){$(u,d,g);return}if(v!==2&&b&1&&I)if(v===0)I.beforeEnter(E),r(E,d,g),ye(()=>I.enter(E),_);else{const{leave:C,delayLeave:M,afterLeave:F}=I,q=()=>r(E,d,g),se=()=>{C(E,()=>{q(),F&&F()})};M?M(E,q,se):se()}else r(E,d,g)},Se=(u,d,g,v=!1,_=!1)=>{const{type:E,props:R,ref:I,children:w,dynamicChildren:b,shapeFlag:N,patchFlag:C,dirs:M}=u;if(I!=null&&ps(I,null,g,u,!0),N&256){d.ctx.deactivate(u);return}const F=N&1&&M,q=!us(u);let se;if(q&&(se=R&&R.onVnodeBeforeUnmount)&&Fe(se,d,u),N&6)P(u.component,g,v);else{if(N&128){u.suspense.unmount(g,v);return}F&&mt(u,null,d,"beforeUnmount"),N&64?u.type.remove(u,d,g,_,te,v):b&&(E!==Be||C>0&&C&64)?T(b,d,g,!1,!0):(E===Be&&C&384||!_&&N&16)&&T(w,d,g),v&&Wr(u)}(q&&(se=R&&R.onVnodeUnmounted)||F)&&ye(()=>{se&&Fe(se,d,u),F&&mt(u,null,d,"unmounted")},g)},Wr=u=>{const{type:d,el:g,anchor:v,transition:_}=u;if(d===Be){m(g,v);return}if(d===qr){ie(u);return}const E=()=>{s(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(u.shapeFlag&1&&_&&!_.persisted){const{leave:R,delayLeave:I}=_,w=()=>R(g,E);I?I(u.el,E,w):w()}else E()},m=(u,d)=>{let g;for(;u!==d;)g=p(u),s(u),u=g;s(d)},P=(u,d,g)=>{const{bum:v,scope:_,update:E,subTree:R,um:I}=u;v&&rr(v),_.stop(),E&&(E.active=!1,Se(R,u,d,g)),I&&ye(I,d),ye(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},T=(u,d,g,v=!1,_=!1,E=0)=>{for(let R=E;R<u.length;R++)Se(u[R],d,g,v,_)},k=u=>u.shapeFlag&6?k(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),Y=(u,d,g)=>{u==null?d._vnode&&Se(d._vnode,null,null,!0):A(d._vnode||null,u,d,null,null,null,g),oa(),d._vnode=u},te={p:A,um:Se,m:Le,r:Wr,mt:xt,mc:ce,pc:be,pbc:Oe,n:k,o:t};let V,H;return e&&([V,H]=e(te)),{render:Y,hydrate:V,createApp:du(Y,V)}}function _t({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ia(t,e,n=!1){const r=t.children,s=e.children;if(x(r)&&x(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=ot(s[i]),a.el=o.el),n||Ia(o,a))}}function gu(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const mu=t=>t.__isTeleport,Ea="components";function _u(t,e){return yu(Ea,t,!0,e)||t}const vu=Symbol();function yu(t,e,n=!0,r=!1){const s=Re||fe;if(s){const i=s.type;if(t===Ea){const a=Nu(i);if(a&&(a===e||a===We(e)||a===Or(We(e))))return i}const o=Pi(s[t]||i[t],e)||Pi(s.appContext[t],e);return!o&&r?i:o}}function Pi(t,e){return t&&(t[e]||t[We(e)]||t[Or(We(e))])}const Be=Symbol(void 0),Js=Symbol(void 0),Ct=Symbol(void 0),qr=Symbol(void 0),En=[];let St=null;function Wt(t=!1){En.push(St=t?null:[])}function bu(){En.pop(),St=En[En.length-1]||null}let gr=1;function ki(t){gr+=t}function wa(t){return t.dynamicChildren=gr>0?St||jt:null,bu(),gr>0&&St&&St.push(t),t}function ir(t,e,n,r,s,i){return wa(mr(t,e,n,r,s,i,!0))}function Ta(t,e,n,r,s){return wa(de(t,e,n,r,s,!0))}function gs(t){return t?t.__v_isVNode===!0:!1}function un(t,e){return t.type===e.type&&t.key===e.key}const Dr="__vInternal",Sa=({key:t})=>t!=null?t:null,or=({ref:t,ref_key:e,ref_for:n})=>t!=null?he(t)||oe(t)||B(t)?{i:Re,r:t,k:e,f:!!n}:t:null;function mr(t,e=null,n=null,r=0,s=null,i=t===Be?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Sa(e),ref:e&&or(e),scopeId:Nr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(Ys(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=he(n)?8:16),gr>0&&!o&&St&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&St.push(c),c}const de=Iu;function Iu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===vu)&&(t=Ct),gs(t)){const a=Nn(t,e,!0);return n&&Ys(a,n),a}if(Mu(t)&&(t=t.__vccOpts),e){e=Eu(e);let{class:a,style:c}=e;a&&!he(a)&&(e.class=Ps(a)),ae(c)&&(Jo(c)&&!x(c)&&(c=ve({},c)),e.style=Cs(c))}const o=he(t)?1:Hl(t)?128:mu(t)?64:ae(t)?4:B(t)?2:0;return mr(t,e,n,r,s,o,i,!0)}function Eu(t){return t?Jo(t)||Dr in t?ve({},t):t:null}function Nn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?wu(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Sa(a),ref:e&&e.ref?n&&s?x(s)?s.concat(or(e)):[s,or(e)]:or(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Be?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Nn(t.ssContent),ssFallback:t.ssFallback&&Nn(t.ssFallback),el:t.el,anchor:t.anchor}}function Bn(t=" ",e=0){return de(Js,null,t,e)}function Ra(t="",e=!1){return e?(Wt(),Ta(Ct,null,t)):de(Ct,null,t)}function He(t){return t==null||typeof t=="boolean"?de(Ct):x(t)?de(Be,null,t.slice()):typeof t=="object"?ot(t):de(Js,null,String(t))}function ot(t){return t.el===null||t.memo?t:Nn(t)}function Ys(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(x(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ys(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Dr in e)?e._ctx=Re:s===3&&Re&&(Re.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:Re},n=32):(e=String(e),r&64?(n=16,e=[Bn(e)]):n=8);t.children=e,t.shapeFlag|=n}function wu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ps([e.class,r.class]));else if(s==="style")e.style=Cs([e.style,r.style]);else if(Sr(s)){const i=e[s],o=r[s];o&&i!==o&&!(x(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Fe(t,e,n,r=null){xe(t,e,7,[n,r])}function Wg(t,e,n,r){let s;const i=n&&n[r];if(x(t)||he(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ae(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const ms=t=>t?Oa(t)?Lr(t)||t.proxy:ms(t.parent):null,_r=ve(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ms(t.parent),$root:t=>ms(t.root),$emit:t=>t.emit,$options:t=>pa(t),$forceUpdate:t=>()=>ra(t.update),$nextTick:t=>Ws.bind(t.proxy),$watch:t=>Vl.bind(t)}),Tu={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==Z&&K(r,e))return o[e]=1,r[e];if(s!==Z&&K(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&K(l,e))return o[e]=3,i[e];if(n!==Z&&K(n,e))return o[e]=4,n[e];fs&&(o[e]=0)}}const f=_r[e];let h,p;if(f)return e==="$attrs"&&we(t,"get",e),f(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Z&&K(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,K(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==Z&&K(s,e)?(s[e]=n,!0):r!==Z&&K(r,e)?(r[e]=n,!0):K(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Z&&K(t,o)||e!==Z&&K(e,o)||(a=i[0])&&K(a,o)||K(r,o)||K(_r,o)||K(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:K(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},Su=ba();let Ru=0;function Au(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Su,i={uid:Ru++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Do(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ma(r,s),emitsOptions:ca(r,s),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:r.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ll.bind(null,i),t.ce&&t.ce(i),i}let fe=null;const Aa=()=>fe||Re,Jt=t=>{fe=t,t.scope.on()},Rt=()=>{fe&&fe.scope.off(),fe=null};function Oa(t){return t.vnode.shapeFlag&4}let Mn=!1;function Ou(t,e=!1){Mn=e;const{props:n,children:r}=t.vnode,s=Oa(t);ou(t,n,s,e),lu(t,r);const i=s?Cu(t,e):void 0;return Mn=!1,i}function Cu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Gt(new Proxy(t.ctx,Tu));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?ku(t):null;Jt(t),nn();const i=ht(r,t,0,[t.props,s]);if(rn(),Rt(),No(i)){if(i.then(Rt,Rt),e)return i.then(o=>{Ni(t,o,e)}).catch(o=>{Pr(o,t,0)});t.asyncDep=i}else Ni(t,i,e)}else Ca(t,e)}function Ni(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ae(e)&&(t.setupState=Zo(e)),Ca(t,n)}let Mi;function Ca(t,e,n){const r=t.type;if(!t.render){if(!e&&Mi&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=ve(ve({isCustomElement:i,delimiters:a},o),c);r.render=Mi(s,l)}}t.render=r.render||Me}Jt(t),nn(),tu(t),rn(),Rt()}function Pu(t){return new Proxy(t.attrs,{get(e,n){return we(t,"get","$attrs"),e[n]}})}function ku(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Pu(t))},slots:t.slots,emit:t.emit,expose:e}}function Lr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Zo(Gt(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in _r)return _r[n](t)}}))}function Nu(t){return B(t)&&t.displayName||t.name}function Mu(t){return B(t)&&"__vccOpts"in t}const Ne=(t,e)=>Pl(t,e,Mn);function Pa(t,e,n){const r=arguments.length;return r===2?ae(e)&&!x(e)?gs(e)?de(t,null,[e]):de(t,e):de(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&gs(n)&&(n=[n]),de(t,e,n))}const xu="3.2.33",Du="http://www.w3.org/2000/svg",bt=typeof document!="undefined"?document:null,xi=bt&&bt.createElement("template"),Lu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?bt.createElementNS(Du,t):bt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>bt.createTextNode(t),createComment:t=>bt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>bt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{xi.innerHTML=r?`<svg>${t}</svg>`:t;const a=xi.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Uu(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Fu(t,e,n){const r=t.style,s=he(n);if(n&&!s){for(const i in n)_s(r,i,n[i]);if(e&&!he(e))for(const i in e)n[i]==null&&_s(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Di=/\s*!important$/;function _s(t,e,n){if(x(n))n.forEach(r=>_s(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=$u(t,e);Di.test(n)?t.setProperty(tn(r),n.replace(Di,""),"important"):t[r]=n}}const Li=["Webkit","Moz","ms"],Gr={};function $u(t,e){const n=Gr[e];if(n)return n;let r=We(e);if(r!=="filter"&&r in t)return Gr[e]=r;r=Or(r);for(let s=0;s<Li.length;s++){const i=Li[s]+r;if(i in t)return Gr[e]=i}return e}const Ui="http://www.w3.org/1999/xlink";function Bu(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ui,e.slice(6,e.length)):t.setAttributeNS(Ui,e,n);else{const i=Bc(e);n==null||i&&!Po(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Hu(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Po(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[ka,ju]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let vs=0;const Vu=Promise.resolve(),Wu=()=>{vs=0},zu=()=>vs||(Vu.then(Wu),vs=ka());function Ge(t,e,n,r){t.addEventListener(e,n,r)}function Ku(t,e,n,r){t.removeEventListener(e,n,r)}function qu(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Gu(e);if(r){const l=i[e]=Ju(r,s);Ge(t,a,l,c)}else o&&(Ku(t,a,o,c),i[e]=void 0)}}const Fi=/(?:Once|Passive|Capture)$/;function Gu(t){let e;if(Fi.test(t)){e={};let n;for(;n=t.match(Fi);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[tn(t.slice(2)),e]}function Ju(t,e){const n=r=>{const s=r.timeStamp||ka();(ju||s>=n.attached-1)&&xe(Yu(r,n.value),e,5,[r])};return n.value=t,n.attached=zu(),n}function Yu(t,e){if(x(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const $i=/^on[a-z]/,Xu=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Uu(t,r,s):e==="style"?Fu(t,n,r):Sr(e)?Ns(e)||qu(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Qu(t,e,r,s))?Hu(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Bu(t,e,r,s))};function Qu(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&$i.test(e)&&B(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||$i.test(e)&&he(n)?!1:e in t}const gt=t=>{const e=t.props["onUpdate:modelValue"];return x(e)?n=>rr(e,n):e};function Zu(t){t.target.composing=!0}function Bi(t){const e=t.target;e.composing&&(e.composing=!1,ef(e,"input"))}function ef(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const Hi={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=gt(s);const i=r||s.props&&s.props.type==="number";Ge(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=fr(a)),t._assign(a)}),n&&Ge(t,"change",()=>{t.value=t.value.trim()}),e||(Ge(t,"compositionstart",Zu),Ge(t,"compositionend",Bi),Ge(t,"change",Bi))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=gt(i),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&fr(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},tf={deep:!0,created(t,e,n){t._assign=gt(n),Ge(t,"change",()=>{const r=t._modelValue,s=Yt(t),i=t.checked,o=t._assign;if(x(r)){const a=ks(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(en(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(Na(t,i))})},mounted:ji,beforeUpdate(t,e,n){t._assign=gt(n),ji(t,e,n)}};function ji(t,{value:e,oldValue:n},r){t._modelValue=e,x(e)?t.checked=ks(e,r.props.value)>-1:en(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=Ot(e,Na(t,!0)))}const nf={created(t,{value:e},n){t.checked=Ot(e,n.props.value),t._assign=gt(n),Ge(t,"change",()=>{t._assign(Yt(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t._assign=gt(r),e!==n&&(t.checked=Ot(e,r.props.value))}},rf={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=en(e);Ge(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?fr(Yt(o)):Yt(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=gt(r)},mounted(t,{value:e}){Vi(t,e)},beforeUpdate(t,e,n){t._assign=gt(n)},updated(t,{value:e}){Vi(t,e)}};function Vi(t,e){const n=t.multiple;if(!(n&&!x(e)&&!en(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=Yt(i);if(n)x(e)?i.selected=ks(e,o)>-1:i.selected=e.has(o);else if(Ot(Yt(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Yt(t){return"_value"in t?t._value:t.value}function Na(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const zg={created(t,e,n){tr(t,e,n,null,"created")},mounted(t,e,n){tr(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){tr(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){tr(t,e,n,r,"updated")}};function tr(t,e,n,r,s){let i;switch(t.tagName){case"SELECT":i=rf;break;case"TEXTAREA":i=Hi;break;default:switch(n.props&&n.props.type){case"checkbox":i=tf;break;case"radio":i=nf;break;default:i=Hi}}const o=i[s];o&&o(t,e,n,r)}const sf=ve({patchProp:Xu},Lu);let Wi;function of(){return Wi||(Wi=hu(sf))}const af=(...t)=>{const e=of().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=cf(r);if(!s)return;const i=e._component;!B(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function cf(t){return he(t)?document.querySelector(t):t}var Ma=!1;/*!
  * pinia v2.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let xa;const Ur=t=>xa=t,Da=Symbol();function ys(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var wn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(wn||(wn={}));function lf(){const t=Lo(!0),e=t.run(()=>Pn({}));let n=[],r=[];const s=Gt({install(i){Ur(s),s._a=i,i.provide(Da,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Ma?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const La=()=>{};function zi(t,e,n,r=La){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Aa()&&qs(s),s}function Ut(t,...e){t.slice().forEach(n=>{n(...e)})}function bs(t,e){for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];ys(s)&&ys(r)&&t.hasOwnProperty(n)&&!oe(r)&&!Xe(r)?t[n]=bs(s,r):t[n]=r}return t}const uf=Symbol();function ff(t){return!ys(t)||!t.hasOwnProperty(uf)}const{assign:Ke}=Object;function df(t){return!!(oe(t)&&t.effect)}function hf(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const f=ea(n.state.value[t]);return Ke(f,i,Object.keys(o||{}).reduce((h,p)=>(h[p]=Gt(Ne(()=>{Ur(n);const y=n._s.get(t);return o[p].call(y,y)})),h),{}))}return c=Ua(t,l,e,n),c.$reset=function(){const h=s?s():{};this.$patch(p=>{Ke(p,h)})},c}function Ua(t,e,n={},r,s){let i;const o=n.state,a=Ke({actions:{}},n),c={deep:!0};let l,f,h=Gt([]),p=Gt([]),y;const S=r.state.value[t];!o&&!S&&(r.state.value[t]={}),Pn({});function D(j){let W;l=f=!1,typeof j=="function"?(j(r.state.value[t]),W={type:wn.patchFunction,storeId:t,events:y}):(bs(r.state.value[t],j),W={type:wn.patchObject,payload:j,storeId:t,events:y}),Ws().then(()=>{l=!0}),f=!0,Ut(h,W,r.state.value[t])}const A=La;function O(){i.stop(),h=[],p=[],r._s.delete(t)}function U(j,W){return function(){Ur(r);const me=Array.from(arguments),ce=[],pe=[];function Oe(le){ce.push(le)}function Ce(le){pe.push(le)}Ut(p,{args:me,name:j,store:$,after:Oe,onError:Ce});let Te;try{Te=W.apply(this&&this.$id===t?this:$,me)}catch(le){throw Ut(pe,le),le}return Te instanceof Promise?Te.then(le=>(Ut(ce,le),le)).catch(le=>(Ut(pe,le),Promise.reject(le))):(Ut(ce,Te),Te)}}const z={_p:r,$id:t,$onAction:zi.bind(null,p),$patch:D,$reset:A,$subscribe(j,W={}){const me=zi(h,j,W.detached,()=>ce()),ce=i.run(()=>In(()=>r.state.value[t],pe=>{(W.flush==="sync"?f:l)&&j({storeId:t,type:wn.direct,events:y},pe)},Ke({},c,W)));return me},$dispose:O},$=sn(Ke({},z));r._s.set(t,$);const ie=r._e.run(()=>(i=Lo(),i.run(()=>e())));for(const j in ie){const W=ie[j];if(oe(W)&&!df(W)||Xe(W))o||(S&&ff(W)&&(oe(W)?W.value=S[j]:bs(W,S[j])),r.state.value[t][j]=W);else if(typeof W=="function"){const me=U(j,W);ie[j]=me,a.actions[j]=W}}return Ke($,ie),Ke(G($),ie),Object.defineProperty($,"$state",{get:()=>r.state.value[t],set:j=>{D(W=>{Ke(W,j)})}}),r._p.forEach(j=>{Ke($,i.run(()=>j({store:$,app:r._a,pinia:r,options:a})))}),S&&o&&n.hydrate&&n.hydrate($.$state,S),l=!0,f=!0,$}function Kg(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=Aa();return a=a||l&&De(Da),a&&Ur(a),a=xa,a._s.has(r)||(i?Ua(r,e,s,a):hf(r,s,a)),a._s.get(r)}return o.$id=r,o}function qg(t){if(Ma)return ea(t);{t=G(t);const e={};for(const n in t){const r=t[n];(oe(r)||Xe(r))&&(e[n]=ta(t,n))}return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},pf=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},$a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,f=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,y=l&63;c||(y=64,o||(p=64)),r.push(n[f],n[h],n[p],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Fa(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):pf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const p=i<<2|a>>4;if(r.push(p),l!==64){const y=a<<4&240|l>>2;if(r.push(y),h!==64){const S=l<<6&192|h;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},gf=function(t){const e=Fa(t);return $a.encodeByteArray(e,!0)},Ba=function(t){return gf(t).replace(/\./g,"")},mf=function(t){try{return $a.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vf(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ge())}function yf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function If(){const t=ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ef(){return typeof indexedDB=="object"}function wf(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf="FirebaseError";class on extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Tf,Object.setPrototypeOf(this,on.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hn.prototype.create)}}class Hn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Sf(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new on(s,a,r)}}function Sf(t,e){return t.replace(Rf,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Rf=/\{\$([^}]+)}/g;function Af(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ki(i)&&Ki(o)){if(!vr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ki(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function mn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function _n(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Of(t,e){const n=new Cf(t,e);return n.subscribe.bind(n)}class Cf{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Pf(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Jr),s.error===void 0&&(s.error=Jr),s.complete===void 0&&(s.complete=Jr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Pf(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Jr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(t,e){return new Promise((n,r)=>{t.onsuccess=s=>{n(s.target.result)},t.onerror=s=>{var i;r(`${e}: ${(i=s.target.error)===null||i===void 0?void 0:i.message}`)}})}class qi{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n="readonly"){return new Ha(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new ja(this._db.createObjectStore(e,n))}close(){this._db.close()}}class Ha{constructor(e){this._transaction=e,this.complete=new Promise((n,r)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{r(this._transaction.error)},this._transaction.onabort=()=>{r(this._transaction.error)}})}objectStore(e){return new ja(this._transaction.objectStore(e))}}class ja{constructor(e){this._store=e}index(e){return new Gi(this._store.index(e))}createIndex(e,n,r){return new Gi(this._store.createIndex(e,n,r))}get(e){const n=this._store.get(e);return vn(n,"Error reading from IndexedDB")}put(e,n){const r=this._store.put(e,n);return vn(r,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return vn(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return vn(e,"Error clearing IndexedDB object store")}}class Gi{constructor(e){this._index=e}get(e){const n=this._index.get(e);return vn(n,"Error reading from IndexedDB")}}function kf(t,e,n){return new Promise((r,s)=>{try{const i=indexedDB.open(t,e);i.onsuccess=o=>{r(new qi(o.target.result))},i.onerror=o=>{var a;s(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},i.onupgradeneeded=o=>{n(new qi(i.result),o.oldVersion,o.newVersion,new Ha(i.transaction))}}catch(i){s(`Error opening indexedDB: ${i.message}`)}})}class Xt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new _f;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xf(e))try{this.getOrInitializeService({instanceIdentifier:yt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yt){return this.instances.has(e)}getOptions(e=yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Mf(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=yt){return this.component?this.component.multipleInstances?e:yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Mf(t){return t===yt?void 0:t}function xf(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Nf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const Lf={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},Uf=ne.INFO,Ff={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},$f=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Ff[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Va{constructor(e){this.name=e,this._logLevel=Uf,this._logHandler=$f,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Lf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Hf(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Hf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Is="@firebase/app",Ji="0.7.22";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs=new Va("@firebase/app"),jf="@firebase/app-compat",Vf="@firebase/analytics-compat",Wf="@firebase/analytics",zf="@firebase/app-check-compat",Kf="@firebase/app-check",qf="@firebase/auth",Gf="@firebase/auth-compat",Jf="@firebase/database",Yf="@firebase/database-compat",Xf="@firebase/functions",Qf="@firebase/functions-compat",Zf="@firebase/installations",ed="@firebase/installations-compat",td="@firebase/messaging",nd="@firebase/messaging-compat",rd="@firebase/performance",sd="@firebase/performance-compat",id="@firebase/remote-config",od="@firebase/remote-config-compat",ad="@firebase/storage",cd="@firebase/storage-compat",ld="@firebase/firestore",ud="@firebase/firestore-compat",fd="firebase",dd="9.7.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa="[DEFAULT]",hd={[Is]:"fire-core",[jf]:"fire-core-compat",[Wf]:"fire-analytics",[Vf]:"fire-analytics-compat",[Kf]:"fire-app-check",[zf]:"fire-app-check-compat",[qf]:"fire-auth",[Gf]:"fire-auth-compat",[Jf]:"fire-rtdb",[Yf]:"fire-rtdb-compat",[Xf]:"fire-fn",[Qf]:"fire-fn-compat",[Zf]:"fire-iid",[ed]:"fire-iid-compat",[td]:"fire-fcm",[nd]:"fire-fcm-compat",[rd]:"fire-perf",[sd]:"fire-perf-compat",[id]:"fire-rc",[od]:"fire-rc-compat",[ad]:"fire-gcs",[cd]:"fire-gcs-compat",[ld]:"fire-fst",[ud]:"fire-fst-compat","fire-js":"fire-js",[fd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=new Map,Es=new Map;function pd(t,e){try{t.container.addComponent(e)}catch(n){Xs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xn(t){const e=t.name;if(Es.has(e))return Xs.debug(`There were multiple attempts to register component ${e}.`),!1;Es.set(e,t);for(const n of yr.values())pd(n,t);return!0}function za(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Pt=new Hn("app","Firebase",gd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=dd;function _d(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Wa,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Pt.create("bad-app-name",{appName:String(r)});const s=yr.get(r);if(s){if(vr(t,s.options)&&vr(n,s.config))return s;throw Pt.create("duplicate-app",{appName:r})}const i=new Df(r);for(const a of Es.values())i.addComponent(a);const o=new md(t,n,i);return yr.set(r,o),o}function vd(t=Wa){const e=yr.get(t);if(!e)throw Pt.create("no-app",{appName:t});return e}function zt(t,e,n){var r;let s=(r=hd[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xs.warn(a.join(" "));return}xn(new Xt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd="firebase-heartbeat-database",bd=1,Dn="firebase-heartbeat-store";let Yr=null;function Ka(){return Yr||(Yr=kf(yd,bd,(t,e)=>{switch(e){case 0:t.createObjectStore(Dn)}}).catch(t=>{throw Pt.create("storage-open",{originalErrorMessage:t.message})})),Yr}async function Id(t){try{return(await Ka()).transaction(Dn).objectStore(Dn).get(qa(t))}catch(e){throw Pt.create("storage-get",{originalErrorMessage:e.message})}}async function Yi(t,e){try{const r=(await Ka()).transaction(Dn,"readwrite");return await r.objectStore(Dn).put(e,qa(t)),r.complete}catch(n){throw Pt.create("storage-set",{originalErrorMessage:n.message})}}function qa(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed=1024,wd=30*24*60*60*1e3;class Td{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Rd(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Xi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=wd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Xi(),{heartbeatsToSend:n,unsentEntries:r}=Sd(this._heartbeatsCache.heartbeats),s=Ba(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Xi(){return new Date().toISOString().substring(0,10)}function Sd(t,e=Ed){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Qi(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Qi(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Rd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ef()?wf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Id(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Yi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Yi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Qi(t){return Ba(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(t){xn(new Xt("platform-logger",e=>new Bf(e),"PRIVATE")),xn(new Xt("heartbeat",e=>new Td(e),"PRIVATE")),zt(Is,Ji,t),zt(Is,Ji,"esm2017"),zt("fire-js","")}Ad("");var Od="firebase",Cd="9.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zt(Od,Cd,"app");/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ga=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",an=t=>Ga?Symbol(t):"_vr_"+t,Pd=an("rvlm"),Zi=an("rvd"),$r=an("r"),Qs=an("rl"),ws=an("rvl"),Ht=typeof window!="undefined";function kd(t){return t.__esModule||Ga&&t[Symbol.toStringTag]==="Module"}const Q=Object.assign;function Xr(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const Tn=()=>{},Nd=/\/$/,Md=t=>t.replace(Nd,"");function Qr(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Ud(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function xd(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function eo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Dd(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Qt(e.matched[r],n.matched[s])&&Ja(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Qt(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ja(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Ld(t[n],e[n]))return!1;return!0}function Ld(t,e){return Array.isArray(t)?to(t,e):Array.isArray(e)?to(e,t):t===e}function to(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Ud(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Ln;(function(t){t.pop="pop",t.push="push"})(Ln||(Ln={}));var Sn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Sn||(Sn={}));function Fd(t){if(!t)if(Ht){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Md(t)}const $d=/^[^#]+#/;function Bd(t,e){return t.replace($d,"#")+e}function Hd(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Br=()=>({left:window.pageXOffset,top:window.pageYOffset});function jd(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Hd(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function no(t,e){return(history.state?history.state.position-e:-1)+t}const Ts=new Map;function Vd(t,e){Ts.set(t,e)}function Wd(t){const e=Ts.get(t);return Ts.delete(t),e}let zd=()=>location.protocol+"//"+location.host;function Ya(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),eo(c,"")}return eo(n,t)+r+s}function Kd(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const y=Ya(t,location),S=n.value,D=e.value;let A=0;if(p){if(n.value=y,e.value=p,o&&o===S){o=null;return}A=D?p.position-D.position:0}else r(y);s.forEach(O=>{O(n.value,S,{delta:A,type:Ln.pop,direction:A?A>0?Sn.forward:Sn.back:Sn.unknown})})};function c(){o=n.value}function l(p){s.push(p);const y=()=>{const S=s.indexOf(p);S>-1&&s.splice(S,1)};return i.push(y),y}function f(){const{history:p}=window;!p.state||p.replaceState(Q({},p.state,{scroll:Br()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f),{pauseListeners:c,listen:l,destroy:h}}function ro(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Br():null}}function qd(t){const{history:e,location:n}=window,r={value:Ya(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:zd()+t+c;try{e[f?"replaceState":"pushState"](l,"",p),s.value=l}catch(y){console.error(y),n[f?"replace":"assign"](p)}}function o(c,l){const f=Q({},e.state,ro(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,f,!0),r.value=c}function a(c,l){const f=Q({},s.value,e.state,{forward:c,scroll:Br()});i(f.current,f,!0);const h=Q({},ro(r.value,c,null),{position:f.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Gd(t){t=Fd(t);const e=qd(t),n=Kd(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Q({location:"",base:t,go:r,createHref:Bd.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Jd(t){return typeof t=="string"||t&&typeof t=="object"}function Xa(t){return typeof t=="string"||typeof t=="symbol"}const nt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Qa=an("nf");var so;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(so||(so={}));function Zt(t,e){return Q(new Error,{type:t,[Qa]:!0},e)}function rt(t,e){return t instanceof Error&&Qa in t&&(e==null||!!(t.type&e))}const io="[^/]+?",Yd={sensitive:!1,strict:!1,start:!0,end:!0},Xd=/[.+*?^${}()[\]/\\]/g;function Qd(t,e){const n=Q({},Yd,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const p=l[h];let y=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(Xd,"\\$&"),y+=40;else if(p.type===1){const{value:S,repeatable:D,optional:A,regexp:O}=p;i.push({name:S,repeatable:D,optional:A});const U=O||io;if(U!==io){y+=10;try{new RegExp(`(${U})`)}catch($){throw new Error(`Invalid custom RegExp for param "${S}" (${U}): `+$.message)}}let z=D?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;h||(z=A&&l.length<2?`(?:/${z})`:"/"+z),A&&(z+="?"),s+=z,y+=20,A&&(y+=-8),D&&(y+=-20),U===".*"&&(y+=-50)}f.push(y)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const f=l.match(o),h={};if(!f)return null;for(let p=1;p<f.length;p++){const y=f[p]||"",S=i[p-1];h[S.name]=y&&S.repeatable?y.split("/"):y}return h}function c(l){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const y of p)if(y.type===0)f+=y.value;else if(y.type===1){const{value:S,repeatable:D,optional:A}=y,O=S in l?l[S]:"";if(Array.isArray(O)&&!D)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const U=Array.isArray(O)?O.join("/"):O;if(!U)if(A)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${S}"`);f+=U}}return f}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Zd(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function eh(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Zd(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const th={type:0,value:""},nh=/[a-zA-Z0-9_]/;function rh(t){if(!t)return[[]];if(t==="/")return[[th]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${l}": ${y}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",f="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:nh.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function sh(t,e,n){const r=Qd(rh(t.path),n),s=Q(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function ih(t,e){const n=[],r=new Map;e=ao({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,h,p){const y=!p,S=ah(f);S.aliasOf=p&&p.record;const D=ao(e,f),A=[S];if("alias"in f){const z=typeof f.alias=="string"?[f.alias]:f.alias;for(const $ of z)A.push(Q({},S,{components:p?p.record.components:S.components,path:$,aliasOf:p?p.record:S}))}let O,U;for(const z of A){const{path:$}=z;if(h&&$[0]!=="/"){const ie=h.record.path,j=ie[ie.length-1]==="/"?"":"/";z.path=h.record.path+($&&j+$)}if(O=sh(z,h,D),p?p.alias.push(O):(U=U||O,U!==O&&U.alias.push(O),y&&f.name&&!oo(O)&&o(f.name)),"children"in S){const ie=S.children;for(let j=0;j<ie.length;j++)i(ie[j],O,p&&p.children[j])}p=p||O,c(O)}return U?()=>{o(U)}:Tn}function o(f){if(Xa(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){let h=0;for(;h<n.length&&eh(f,n[h])>=0&&(f.record.path!==n[h].record.path||!Za(f,n[h]));)h++;n.splice(h,0,f),f.record.name&&!oo(f)&&r.set(f.record.name,f)}function l(f,h){let p,y={},S,D;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw Zt(1,{location:f});D=p.record.name,y=Q(oh(h.params,p.keys.filter(U=>!U.optional).map(U=>U.name)),f.params),S=p.stringify(y)}else if("path"in f)S=f.path,p=n.find(U=>U.re.test(S)),p&&(y=p.parse(S),D=p.record.name);else{if(p=h.name?r.get(h.name):n.find(U=>U.re.test(h.path)),!p)throw Zt(1,{location:f,currentLocation:h});D=p.record.name,y=Q({},h.params,f.params),S=p.stringify(y)}const A=[];let O=p;for(;O;)A.unshift(O.record),O=O.parent;return{name:D,path:S,params:y,matched:A,meta:lh(A)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function oh(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ah(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ch(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function ch(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function oo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function lh(t){return t.reduce((e,n)=>Q(e,n.meta),{})}function ao(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Za(t,e){return e.children.some(n=>n===t||Za(t,n))}const ec=/#/g,uh=/&/g,fh=/\//g,dh=/=/g,hh=/\?/g,tc=/\+/g,ph=/%5B/g,gh=/%5D/g,nc=/%5E/g,mh=/%60/g,rc=/%7B/g,_h=/%7C/g,sc=/%7D/g,vh=/%20/g;function Zs(t){return encodeURI(""+t).replace(_h,"|").replace(ph,"[").replace(gh,"]")}function yh(t){return Zs(t).replace(rc,"{").replace(sc,"}").replace(nc,"^")}function Ss(t){return Zs(t).replace(tc,"%2B").replace(vh,"+").replace(ec,"%23").replace(uh,"%26").replace(mh,"`").replace(rc,"{").replace(sc,"}").replace(nc,"^")}function bh(t){return Ss(t).replace(dh,"%3D")}function Ih(t){return Zs(t).replace(ec,"%23").replace(hh,"%3F")}function Eh(t){return t==null?"":Ih(t).replace(fh,"%2F")}function br(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function wh(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(tc," "),o=i.indexOf("="),a=br(o<0?i:i.slice(0,o)),c=o<0?null:br(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function co(t){let e="";for(let n in t){const r=t[n];if(n=bh(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&Ss(i)):[r&&Ss(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Th(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function fn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function at(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Zt(4,{from:n,to:e})):h instanceof Error?a(h):Jd(h)?a(Zt(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let f=Promise.resolve(l);t.length<3&&(f=f.then(c)),f.catch(h=>a(h))})}function Zr(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Sh(a)){const l=(a.__vccOpts||a)[e];l&&s.push(at(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=kd(l)?l.default:l;i.components[o]=f;const p=(f.__vccOpts||f)[e];return p&&at(p,n,r,i,o)()}))}}return s}function Sh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function lo(t){const e=De($r),n=De(Qs),r=Ne(()=>e.resolve(Tt(t.to))),s=Ne(()=>{const{matched:c}=r.value,{length:l}=c,f=c[l-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(Qt.bind(null,f));if(p>-1)return p;const y=uo(c[l-2]);return l>1&&uo(f)===y&&h[h.length-1].path!==y?h.findIndex(Qt.bind(null,c[l-2])):p}),i=Ne(()=>s.value>-1&&Ch(n.params,r.value.params)),o=Ne(()=>s.value>-1&&s.value===n.matched.length-1&&Ja(n.params,r.value.params));function a(c={}){return Oh(c)?e[Tt(t.replace)?"replace":"push"](Tt(t.to)).catch(Tn):Promise.resolve()}return{route:r,href:Ne(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Rh=Mr({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:lo,setup(t,{slots:e}){const n=sn(lo(t)),{options:r}=De($r),s=Ne(()=>({[fo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[fo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Pa("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ah=Rh;function Oh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Ch(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function uo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const fo=(t,e,n)=>t!=null?t:e!=null?e:n,Ph=Mr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=De(ws),s=Ne(()=>t.route||r.value),i=De(Zi,0),o=Ne(()=>s.value.matched[i]);sr(Zi,i+1),sr(Pd,o),sr(ws,s);const a=Pn();return In(()=>[a.value,o.value,t.name],([c,l,f],[h,p,y])=>{l&&(l.instances[f]=c,p&&p!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=p.leaveGuards),l.updateGuards.size||(l.updateGuards=p.updateGuards))),c&&l&&(!p||!Qt(l,p)||!h)&&(l.enterCallbacks[f]||[]).forEach(S=>S(c))},{flush:"post"}),()=>{const c=s.value,l=o.value,f=l&&l.components[t.name],h=t.name;if(!f)return ho(n.default,{Component:f,route:c});const p=l.props[t.name],y=p?p===!0?c.params:typeof p=="function"?p(c):p:null,D=Pa(f,Q({},y,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return ho(n.default,{Component:D,route:c})||D}}});function ho(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ic=Ph;function kh(t){const e=ih(t.routes,t),n=t.parseQuery||wh,r=t.stringifyQuery||co,s=t.history,i=fn(),o=fn(),a=fn(),c=Sl(nt);let l=nt;Ht&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Xr.bind(null,m=>""+m),h=Xr.bind(null,Eh),p=Xr.bind(null,br);function y(m,P){let T,k;return Xa(m)?(T=e.getRecordMatcher(m),k=P):k=m,e.addRoute(k,T)}function S(m){const P=e.getRecordMatcher(m);P&&e.removeRoute(P)}function D(){return e.getRoutes().map(m=>m.record)}function A(m){return!!e.getRecordMatcher(m)}function O(m,P){if(P=Q({},P||c.value),typeof m=="string"){const H=Qr(n,m,P.path),u=e.resolve({path:H.path},P),d=s.createHref(H.fullPath);return Q(H,u,{params:p(u.params),hash:br(H.hash),redirectedFrom:void 0,href:d})}let T;if("path"in m)T=Q({},m,{path:Qr(n,m.path,P.path).path});else{const H=Q({},m.params);for(const u in H)H[u]==null&&delete H[u];T=Q({},m,{params:h(m.params)}),P.params=h(P.params)}const k=e.resolve(T,P),Y=m.hash||"";k.params=f(p(k.params));const te=xd(r,Q({},m,{hash:yh(Y),path:k.path})),V=s.createHref(te);return Q({fullPath:te,hash:Y,query:r===co?Th(m.query):m.query||{}},k,{redirectedFrom:void 0,href:V})}function U(m){return typeof m=="string"?Qr(n,m,c.value.path):Q({},m)}function z(m,P){if(l!==m)return Zt(8,{from:P,to:m})}function $(m){return W(m)}function ie(m){return $(Q(U(m),{replace:!0}))}function j(m){const P=m.matched[m.matched.length-1];if(P&&P.redirect){const{redirect:T}=P;let k=typeof T=="function"?T(m):T;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=U(k):{path:k},k.params={}),Q({query:m.query,hash:m.hash,params:m.params},k)}}function W(m,P){const T=l=O(m),k=c.value,Y=m.state,te=m.force,V=m.replace===!0,H=j(T);if(H)return W(Q(U(H),{state:Y,force:te,replace:V}),P||T);const u=T;u.redirectedFrom=P;let d;return!te&&Dd(r,k,T)&&(d=Zt(16,{to:u,from:k}),Dt(k,k,!0,!1)),(d?Promise.resolve(d):ce(u,k)).catch(g=>rt(g)?rt(g,2)?g:be(g):ee(g,u,k)).then(g=>{if(g){if(rt(g,2))return W(Q(U(g.to),{state:Y,force:te,replace:V}),P||u)}else g=Oe(u,k,!0,V,Y);return pe(u,k,g),g})}function me(m,P){const T=z(m,P);return T?Promise.reject(T):Promise.resolve()}function ce(m,P){let T;const[k,Y,te]=Nh(m,P);T=Zr(k.reverse(),"beforeRouteLeave",m,P);for(const H of k)H.leaveGuards.forEach(u=>{T.push(at(u,m,P))});const V=me.bind(null,m,P);return T.push(V),Ft(T).then(()=>{T=[];for(const H of i.list())T.push(at(H,m,P));return T.push(V),Ft(T)}).then(()=>{T=Zr(Y,"beforeRouteUpdate",m,P);for(const H of Y)H.updateGuards.forEach(u=>{T.push(at(u,m,P))});return T.push(V),Ft(T)}).then(()=>{T=[];for(const H of m.matched)if(H.beforeEnter&&!P.matched.includes(H))if(Array.isArray(H.beforeEnter))for(const u of H.beforeEnter)T.push(at(u,m,P));else T.push(at(H.beforeEnter,m,P));return T.push(V),Ft(T)}).then(()=>(m.matched.forEach(H=>H.enterCallbacks={}),T=Zr(te,"beforeRouteEnter",m,P),T.push(V),Ft(T))).then(()=>{T=[];for(const H of o.list())T.push(at(H,m,P));return T.push(V),Ft(T)}).catch(H=>rt(H,8)?H:Promise.reject(H))}function pe(m,P,T){for(const k of a.list())k(m,P,T)}function Oe(m,P,T,k,Y){const te=z(m,P);if(te)return te;const V=P===nt,H=Ht?history.state:{};T&&(k||V?s.replace(m.fullPath,Q({scroll:V&&H&&H.scroll},Y)):s.push(m.fullPath,Y)),c.value=m,Dt(m,P,T,V),be()}let Ce;function Te(){Ce=s.listen((m,P,T)=>{const k=O(m),Y=j(k);if(Y){W(Q(Y,{replace:!0}),k).catch(Tn);return}l=k;const te=c.value;Ht&&Vd(no(te.fullPath,T.delta),Br()),ce(k,te).catch(V=>rt(V,12)?V:rt(V,2)?(W(V.to,k).then(H=>{rt(H,20)&&!T.delta&&T.type===Ln.pop&&s.go(-1,!1)}).catch(Tn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),ee(V,k,te))).then(V=>{V=V||Oe(k,te,!1),V&&(T.delta?s.go(-T.delta,!1):T.type===Ln.pop&&rt(V,20)&&s.go(-1,!1)),pe(k,te,V)}).catch(Tn)})}let le=fn(),xt=fn(),ue;function ee(m,P,T){be(m);const k=xt.list();return k.length?k.forEach(Y=>Y(m,P,T)):console.error(m),Promise.reject(m)}function J(){return ue&&c.value!==nt?Promise.resolve():new Promise((m,P)=>{le.add([m,P])})}function be(m){return ue||(ue=!m,Te(),le.list().forEach(([P,T])=>m?T(m):P()),le.reset()),m}function Dt(m,P,T,k){const{scrollBehavior:Y}=t;if(!Ht||!Y)return Promise.resolve();const te=!T&&Wd(no(m.fullPath,0))||(k||!T)&&history.state&&history.state.scroll||null;return Ws().then(()=>Y(m,P,te)).then(V=>V&&jd(V)).catch(V=>ee(V,m,P))}const ze=m=>s.go(m);let Le;const Se=new Set;return{currentRoute:c,addRoute:y,removeRoute:S,hasRoute:A,getRoutes:D,resolve:O,options:t,push:$,replace:ie,go:ze,back:()=>ze(-1),forward:()=>ze(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:xt.add,isReady:J,install(m){const P=this;m.component("RouterLink",Ah),m.component("RouterView",ic),m.config.globalProperties.$router=P,Object.defineProperty(m.config.globalProperties,"$route",{enumerable:!0,get:()=>Tt(c)}),Ht&&!Le&&c.value===nt&&(Le=!0,$(s.location).catch(Y=>{}));const T={};for(const Y in nt)T[Y]=Ne(()=>c.value[Y]);m.provide($r,P),m.provide(Qs,sn(T)),m.provide(ws,c);const k=m.unmount;Se.add(m),m.unmount=function(){Se.delete(m),Se.size<1&&(l=nt,Ce&&Ce(),c.value=nt,Le=!1,ue=!1),k()}}}}function Ft(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Nh(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Qt(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Qt(l,c))||s.push(c))}return[n,r,s]}function Mh(){return De($r)}function xh(){return De(Qs)}function ei(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function oc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Dh=oc,ac=new Hn("auth","Firebase",oc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po=new Va("@firebase/auth");function ar(t,...e){po.logLevel<=ne.ERROR&&po.error(`Auth (${Fr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(t,...e){throw ti(t,...e)}function je(t,...e){return ti(t,...e)}function cc(t,e,n){const r=Object.assign(Object.assign({},Dh()),{[e]:n});return new Hn("auth","Firebase",r).create(e,{appName:t.name})}function Lh(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ae(t,"argument-error"),cc(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ti(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ac.create(t,...e)}function L(t,e,...n){if(!t)throw ti(e,...n)}function Je(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ar(e),new Error(e)}function Ze(t,e){t||Je(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go=new Map;function Ye(t){Ze(t instanceof Function,"Expected a class definition");let e=go.get(t);return e?(Ze(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,go.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(t,e){const n=za(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(vr(i,e!=null?e:{}))return s;Ae(s,"already-initialized")}return n.initialize({options:e})}function Fh(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ye);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function $h(){return mo()==="http:"||mo()==="https:"}function mo(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($h()||yf()||"connection"in navigator)?navigator.onLine:!0}function Hh(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ze(n>e,"Short delay should be less than long delay!"),this.isMobile=vf()||bf()}get(){return Bh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(t,e){Ze(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Je("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Je("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Je("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh=new Vn(3e4,6e4);function Wn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function zn(t,e,n,r,s={}){return uc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=jn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),lc.fetch()(fc(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function uc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},jh),e);try{const s=new Wh(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw es(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw es(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw es(t,"email-already-in-use",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw cc(t,f,l);Ae(t,f)}}catch(s){if(s instanceof on)throw s;Ae(t,"network-request-failed")}}async function Kn(t,e,n,r,s={}){const i=await zn(t,e,n,r,s);return"mfaPendingCredential"in i&&Ae(t,"multi-factor-auth-required",{_serverResponse:i}),i}function fc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ni(t.config,s):`${t.config.apiScheme}://${s}`}class Wh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(je(this.auth,"network-request-failed")),Vh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function es(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=je(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zh(t,e){return zn(t,"POST","/v1/accounts:delete",e)}async function Kh(t,e){return zn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qh(t,e=!1){const n=Mt(t),r=await n.getIdToken(e),s=ri(r);L(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Rn(ts(s.auth_time)),issuedAtTime:Rn(ts(s.iat)),expirationTime:Rn(ts(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ts(t){return Number(t)*1e3}function ri(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ar("JWT malformed, contained fewer than 3 sections"),null;try{const s=mf(n);return s?JSON.parse(s):(ar("Failed to decode base64 JWT payload"),null)}catch(s){return ar("Caught error parsing JWT payload as JSON",s),null}}function Gh(t){const e=ri(t);return L(e,"internal-error"),L(typeof e.exp!="undefined","internal-error"),L(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Un(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof on&&Jh(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Jh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rn(this.lastLoginAt),this.creationTime=Rn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ir(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Un(t,Kh(n,{idToken:r}));L(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Zh(i.providerUserInfo):[],a=Qh(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),f=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new dc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function Xh(t){const e=Mt(t);await Ir(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Qh(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Zh(t){return t.map(e=>{var{providerId:n}=e,r=ei(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ep(t,e){const n=await uc(t,{},async()=>{const r=jn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=fc(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",lc.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken!="undefined","internal-error"),L(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Gh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return L(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await ep(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Fn;return r&&(L(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(L(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(L(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fn,this.toJSON())}_performRefresh(){return Je("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t,e){L(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class At{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ei(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Yh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new dc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Un(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qh(this,e)}reload(){return Xh(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new At(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ir(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Un(this,zh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,O=(l=n.createdAt)!==null&&l!==void 0?l:void 0,U=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:z,emailVerified:$,isAnonymous:ie,providerData:j,stsTokenManager:W}=n;L(z&&W,e,"internal-error");const me=Fn.fromJSON(this.name,W);L(typeof z=="string",e,"internal-error"),st(h,e.name),st(p,e.name),L(typeof $=="boolean",e,"internal-error"),L(typeof ie=="boolean",e,"internal-error"),st(y,e.name),st(S,e.name),st(D,e.name),st(A,e.name),st(O,e.name),st(U,e.name);const ce=new At({uid:z,auth:e,email:p,emailVerified:$,displayName:h,isAnonymous:ie,photoURL:S,phoneNumber:y,tenantId:D,stsTokenManager:me,createdAt:O,lastLoginAt:U});return j&&Array.isArray(j)&&(ce.providerData=j.map(pe=>Object.assign({},pe))),A&&(ce._redirectEventId=A),ce}static async _fromIdTokenResponse(e,n,r=!1){const s=new Fn;s.updateFromServerResponse(n);const i=new At({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ir(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}hc.type="NONE";const _o=hc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t,e,n){return`firebase:${t}:${e}:${n}`}class Kt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=cr(this.userKey,s.apiKey,i),this.fullPersistenceKey=cr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?At._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Kt(Ye(_o),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Ye(_o);const o=cr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const f=await l._get(o);if(f){const h=At._fromJSON(e,f);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Kt(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Kt(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(mc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vc(e))return"Blackberry";if(yc(e))return"Webos";if(si(e))return"Safari";if((e.includes("chrome/")||gc(e))&&!e.includes("edge/"))return"Chrome";if(_c(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function pc(t=ge()){return/firefox\//i.test(t)}function si(t=ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gc(t=ge()){return/crios\//i.test(t)}function mc(t=ge()){return/iemobile/i.test(t)}function _c(t=ge()){return/android/i.test(t)}function vc(t=ge()){return/blackberry/i.test(t)}function yc(t=ge()){return/webos/i.test(t)}function Hr(t=ge()){return/iphone|ipad|ipod/i.test(t)}function tp(t=ge()){var e;return Hr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function np(){return If()&&document.documentMode===10}function bc(t=ge()){return Hr(t)||_c(t)||yc(t)||vc(t)||/windows phone/i.test(t)||mc(t)}function rp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(t,e=[]){let n;switch(t){case"Browser":n=vo(ge());break;case"Worker":n=`${vo(ge())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fr}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yo(this),this.idTokenSubscription=new yo(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ac,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ye(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Kt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===i)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ir(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Hh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Mt(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ye(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Hn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ye(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await Kt.create(this,[Ye(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return L(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ic(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function qn(t){return Mt(t)}class yo{constructor(e){this.auth=e,this.observer=null,this.addObserver=Of(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Je("not implemented")}_getIdTokenResponse(e){return Je("not implemented")}_linkToIdToken(e,n){return Je("not implemented")}_getReauthenticationResolver(e){return Je("not implemented")}}async function ip(t,e){return zn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function op(t,e){return Kn(t,"POST","/v1/accounts:signInWithPassword",Wn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ap(t,e){return Kn(t,"POST","/v1/accounts:signInWithEmailLink",Wn(t,e))}async function cp(t,e){return Kn(t,"POST","/v1/accounts:signInWithEmailLink",Wn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends ii{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new $n(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new $n(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return op(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ap(e,{email:this._email,oobCode:this._password});default:Ae(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return ip(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return cp(e,{idToken:n,email:this._email,oobCode:this._password});default:Ae(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qt(t,e){return Kn(t,"POST","/v1/accounts:signInWithIdp",Wn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp="http://localhost";class kt extends ii{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new kt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ae("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ei(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new kt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return qt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,qt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qt(e,n)}buildRequest(){const e={requestUri:lp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=jn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fp(t){const e=mn(_n(t)).link,n=e?mn(_n(e)).deep_link_id:null,r=mn(_n(t)).deep_link_id;return(r?mn(_n(r)).link:null)||r||n||e||t}class oi{constructor(e){var n,r,s,i,o,a;const c=mn(_n(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,h=up((s=c.mode)!==null&&s!==void 0?s:null);L(l&&f&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=fp(e);try{return new oi(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(){this.providerId=cn.PROVIDER_ID}static credential(e,n){return $n._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=oi.parseLink(n);return L(r,"argument-error"),$n._fromEmailAndCode(e,r.code,r.tenantId)}}cn.PROVIDER_ID="password";cn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";cn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends ai{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends Gn{constructor(){super("facebook.com")}static credential(e){return kt._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ct.credential(e.oauthAccessToken)}catch{return null}}}ct.FACEBOOK_SIGN_IN_METHOD="facebook.com";ct.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends Gn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return kt._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return lt.credential(n,r)}catch{return null}}}lt.GOOGLE_SIGN_IN_METHOD="google.com";lt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut extends Gn{constructor(){super("github.com")}static credential(e){return kt._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ut.credential(e.oauthAccessToken)}catch{return null}}}ut.GITHUB_SIGN_IN_METHOD="github.com";ut.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends Gn{constructor(){super("twitter.com")}static credential(e,n){return kt._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ft.credential(n,r)}catch{return null}}}ft.TWITTER_SIGN_IN_METHOD="twitter.com";ft.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dp(t,e){return Kn(t,"POST","/v1/accounts:signUp",Wn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await At._fromIdTokenResponse(e,r,s),o=bo(r);return new Nt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=bo(r);return new Nt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function bo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends on{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Er.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Er(e,n,r,s)}}function Ec(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Er._fromErrorAndOperation(t,i,e,r):i})}async function hp(t,e,n=!1){const r=await Un(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Nt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pp(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Un(t,Ec(r,s,e,t),n);L(i.idToken,r,"internal-error");const o=ri(i.idToken);L(o,r,"internal-error");const{sub:a}=o;return L(t.uid===a,r,"user-mismatch"),Nt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ae(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wc(t,e,n=!1){const r="signIn",s=await Ec(t,r,e),i=await Nt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function gp(t,e){return wc(qn(t),e)}async function Gg(t,e,n){const r=qn(t),s=await dp(r,{returnSecureToken:!0,email:e,password:n}),i=await Nt._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function Jg(t,e,n){return gp(Mt(t),cn.credential(e,n))}function Tc(t,e,n,r){return Mt(t).onAuthStateChanged(e,n,r)}function mp(t){return Mt(t).signOut()}const wr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wr,"1"),this.storage.removeItem(wr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(){const t=ge();return si(t)||Hr(t)}const vp=1e3,yp=10;class Rc extends Sc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_p()&&rp(),this.fallbackToPolling=bc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);np()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,yp):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},vp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Rc.type="LOCAL";const bp=Rc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac extends Sc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ac.type="SESSION";const Oc=Ac;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new jr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Ip(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=ci("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(){return window}function wp(t){Ve().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(){return typeof Ve().WorkerGlobalScope!="undefined"&&typeof Ve().importScripts=="function"}async function Tp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Sp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Rp(){return Cc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc="firebaseLocalStorageDb",Ap=1,Tr="firebaseLocalStorage",kc="fbase_key";class Jn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vr(t,e){return t.transaction([Tr],e?"readwrite":"readonly").objectStore(Tr)}function Op(){const t=indexedDB.deleteDatabase(Pc);return new Jn(t).toPromise()}function As(){const t=indexedDB.open(Pc,Ap);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Tr,{keyPath:kc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Tr)?e(r):(r.close(),await Op(),e(await As()))})})}async function Io(t,e,n){const r=Vr(t,!0).put({[kc]:e,value:n});return new Jn(r).toPromise()}async function Cp(t,e){const n=Vr(t,!1).get(e),r=await new Jn(n).toPromise();return r===void 0?null:r.value}function Eo(t,e){const n=Vr(t,!0).delete(e);return new Jn(n).toPromise()}const Pp=800,kp=3;class Nc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await As(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>kp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jr._getInstance(Rp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Tp(),!this.activeServiceWorker)return;this.sender=new Ep(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Sp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await As();return await Io(e,wr,"1"),await Eo(e,wr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Io(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Cp(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Eo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Vr(s,!1).getAll();return new Jn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Pp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Nc.type="LOCAL";const Np=Nc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function xp(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=je("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Mp().appendChild(r)})}function Dp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Vn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(t,e){return e?Ye(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends ii{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Lp(t){return wc(t.auth,new li(t),t.bypassAuthState)}function Up(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),pp(n,new li(t),t.bypassAuthState)}async function Fp(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),hp(n,new li(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Lp;case"linkViaPopup":case"linkViaRedirect":return Fp;case"reauthViaPopup":case"reauthViaRedirect":return Up;default:Ae(this.auth,"internal-error")}}resolve(e){Ze(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ze(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p=new Vn(2e3,1e4);async function Yg(t,e,n){const r=qn(t);Lh(t,e,ai);const s=Mc(r,n);return new Et(r,"signInViaPopup",e,s).executeNotNull()}class Et extends xc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Et.currentPopupAction&&Et.currentPopupAction.cancel(),Et.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){Ze(this.filter.length===1,"Popup operations only handle one event");const e=ci();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Et.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(je(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,$p.get())};e()}}Et.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp="pendingRedirect",ns=new Map;class Hp extends xc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ns.get(this.auth._key());if(!e){try{const r=await jp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ns.set(this.auth._key(),e)}return this.bypassAuthState||ns.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jp(t,e){const n=Wp(e),r=Vp(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Vp(t){return Ye(t._redirectPersistence)}function Wp(t){return cr(Bp,t.config.apiKey,t.name)}async function zp(t,e,n=!1){const r=qn(t),s=Mc(r,e),o=await new Hp(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=10*60*1e3;class qp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Gp(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Dc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(je(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Kp&&this.cachedEventUids.clear(),this.cachedEventUids.has(wo(e))}saveEventToCache(e){this.cachedEventUids.add(wo(e)),this.lastProcessedEventTime=Date.now()}}function wo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Dc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Gp(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jp(t,e={}){return zn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xp=/^https?/;async function Qp(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Jp(t);for(const n of e)try{if(Zp(n))return}catch{}Ae(t,"unauthorized-domain")}function Zp(t){const e=Rs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Xp.test(n))return!1;if(Yp.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg=new Vn(3e4,6e4);function To(){const t=Ve().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tg(t){return new Promise((e,n)=>{var r,s,i;function o(){To(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{To(),n(je(t,"network-request-failed"))},timeout:eg.get()})}if(!((s=(r=Ve().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ve().gapi)===null||i===void 0)&&i.load)o();else{const a=Dp("iframefcb");return Ve()[a]=()=>{gapi.load?o():n(je(t,"network-request-failed"))},xp(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw lr=null,e})}let lr=null;function ng(t){return lr=lr||tg(t),lr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg=new Vn(5e3,15e3),sg="__/auth/iframe",ig="emulator/auth/iframe",og={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ag=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cg(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ni(e,ig):`https://${t.config.authDomain}/${sg}`,r={apiKey:e.apiKey,appName:t.name,v:Fr},s=ag.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${jn(r).slice(1)}`}async function lg(t){const e=await ng(t),n=Ve().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:cg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:og,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=je(t,"network-request-failed"),a=Ve().setTimeout(()=>{i(o)},rg.get());function c(){Ve().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fg=500,dg=600,hg="_blank",pg="http://localhost";class So{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gg(t,e,n,r=fg,s=dg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ug),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ge().toLowerCase();n&&(a=gc(l)?hg:n),pc(l)&&(e=e||pg,c.scrollbars="yes");const f=Object.entries(c).reduce((p,[y,S])=>`${p}${y}=${S},`,"");if(tp(l)&&a!=="_self")return mg(e||"",a),new So(null);const h=window.open(e||"",a,f);L(h,t,"popup-blocked");try{h.focus()}catch{}return new So(h)}function mg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g="__/auth/handler",vg="emulator/auth/handler";function Ro(t,e,n,r,s,i){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Fr,eventId:s};if(e instanceof ai){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Af(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Gn){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${yg(t)}?${jn(a).slice(1)}`}function yg({config:t}){return t.emulator?ni(t,vg):`https://${t.authDomain}/${_g}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs="webStorageSupport";class bg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Oc,this._completeRedirectFn=zp}async _openPopup(e,n,r,s){var i;Ze((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Ro(e,n,r,Rs(),s);return gg(e,o,ci())}async _openRedirect(e,n,r,s){return await this._originValidation(e),wp(Ro(e,n,r,Rs(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ze(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await lg(e),r=new qp(e);return n.register("authEvent",s=>(L(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(rs,{type:rs},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[rs];o!==void 0&&n(!!o),Ae(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Qp(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return bc()||si()||Hr()}}const Ig=bg;var Ao="@firebase/auth",Oo="0.19.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Tg(t){xn(new Xt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{L(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),L(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ic(t)},f=new sp(a,c,l);return Fh(f,n),f})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xn(new Xt("auth-internal",e=>{const n=qn(e.getProvider("auth").getImmediate());return(r=>new Eg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zt(Ao,Oo,wg(t)),zt(Ao,Oo,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(t=vd()){const e=za(t,"auth");return e.isInitialized()?e.getImmediate():Uh(t,{popupRedirectResolver:Ig,persistence:[Np,bp,Oc]})}Tg("Browser");const Sg={key:0},Rg={class:"flex justify-end items-center align-middle mr-4 my-7"},Ag=Bn(" Home "),Og={key:0},Cg=Bn(" Sign in "),Pg=Bn(" Sign up "),kg={key:1},Ng=Bn(" Tickers "),Mg=Mr({setup(t){const e=Mh(),n=Pn(!1),r=Pn(!1);let s;da(()=>{s=Lc(),Tc(s,o=>{r.value=!!o,n.value=!0})});const i=async()=>{await mp(s),e.push({name:"home"})};return(o,a)=>{const c=_u("router-link");return n.value?(Wt(),ir("nav",Sg,[mr("div",Rg,[de(c,{to:{name:"home"},class:"nav-link"},{default:gn(()=>[Ag]),_:1}),r.value?(Wt(),ir("div",kg,[de(c,{to:{name:"tickers"},class:"nav-link"},{default:gn(()=>[Ng]),_:1}),mr("span",{onClick:i,class:"nav-link cursor-pointer"}," Sign out ")])):(Wt(),ir("div",Og,[de(c,{to:{name:"sign-in"},class:"nav-link"},{default:gn(()=>[Cg]),_:1}),de(c,{to:{name:"sign-up"},class:"sign-up-link"},{default:gn(()=>[Pg]),_:1})]))])])):Ra("",!0)}}}),xg=Mr({setup(t){const e=xh();return(n,r)=>(Wt(),ir(Be,null,[Tt(e).meta.hideNavbar?Ra("",!0):(Wt(),Ta(Mg,{key:0})),de(Tt(ic))],64))}}),Dg="modulepreload",Co={},Lg="/crypto-scanner/",dn=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${Lg}${r}`,r in Co)return;Co[r]=!0;const s=r.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":Dg,s||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),s)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},Uc=kh({history:Gd("/crypto-scanner/"),routes:[{path:"/",name:"home",component:()=>dn(()=>import("./HomeView.343d8397.js"),["assets/HomeView.343d8397.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/sign-up",name:"sign-up",component:()=>dn(()=>import("./SignUp.486bc194.js"),["assets/SignUp.486bc194.js","assets/HidePassword.5975f170.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/sign-in",name:"sign-in",component:()=>dn(()=>import("./SignIn.261b15cb.js"),["assets/SignIn.261b15cb.js","assets/HidePassword.5975f170.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/tickers",name:"tickers",component:()=>dn(()=>import("./TickersView.e5ab72ba.js"),["assets/TickersView.e5ab72ba.js","assets/TickersView.0c9bd7a6.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/binanceStore.fa151b44.js"]),meta:{requiresAuth:!0}},{path:"/tickers/:id",name:"ticker-chart",component:()=>dn(()=>import("./ChartView.ab2e31a4.js"),["assets/ChartView.ab2e31a4.js","assets/ChartView.a097b1e3.css","assets/binanceStore.fa151b44.js"]),meta:{requiresAuth:!0,hideNavbar:!0}}]}),Ug=()=>new Promise((t,e)=>{const n=Tc(Lc(),r=>{n(),t(r)},e)});Uc.beforeEach(async(t,e,n)=>{t.matched.some(r=>r.meta.requiresAuth)?await Ug()?n():(alert("YOU DON'T HAVE ACCESS!"),n({name:"home"})):n()});const Fg={apiKey:"AIzaSyDbL2ZMJjYr8-J8VxC2JGyYzF-L8b0JH20",authDomain:"crypto-scanner-d8e79.firebaseapp.com",projectId:"crypto-scanner-d8e79",storageBucket:"crypto-scanner-d8e79.appspot.com",messagingSenderId:"359040748010",appId:"1:359040748010:web:66a1b4a3aa5c446d990a93",measurementId:"G-QD41TV94B4"};_d(Fg);const ui=af(xg);ui.use(lf());ui.use(Uc);ui.mount("#app");export{$g as A,Bg as B,Hg as C,qg as D,Ne as E,Be as F,lt as G,oe as H,Kg as I,xh as J,Cs as K,mr as a,de as b,ir as c,Bn as d,Mr as e,Pn as f,Vg as g,zg as h,Ta as i,Gg as j,Lc as k,Uc as l,Jg as m,sn as n,Wt as o,da as p,jg as q,_u as r,Yg as s,Yl as t,Mh as u,Hi as v,gn as w,Wg as x,Tt as y,Ps as z};
