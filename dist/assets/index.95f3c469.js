const Oc=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};Oc();function Es(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Pc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",kc=Es(Pc);function Eo(t){return!!t||t===""}function ws(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=he(r)?Dc(r):ws(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(he(t))return t;if(ue(t))return t}}const Nc=/;(?![^(]*\))/g,Mc=/:(.+)/;function Dc(t){const e={};return t.split(Nc).forEach(n=>{if(n){const r=n.split(Mc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ts(t){let e="";if(he(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=Ts(t[n]);r&&(e+=r+" ")}else if(ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Rg=t=>he(t)?t:t==null?"":F(t)||ue(t)&&(t.toString===So||!H(t.toString))?JSON.stringify(t,wo,2):String(t),wo=(t,e)=>e&&e.__v_isRef?wo(t,e.value):Ht(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:To(e)?{[`Set(${e.size})`]:[...e.values()]}:ue(e)&&!F(e)&&!Ao(e)?String(e):e,Z={},Bt=[],Ne=()=>{},xc=()=>!1,Lc=/^on[^a-z]/,yr=t=>Lc.test(t),Rs=t=>t.startsWith("onUpdate:"),ve=Object.assign,Ss=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Uc=Object.prototype.hasOwnProperty,q=(t,e)=>Uc.call(t,e),F=Array.isArray,Ht=t=>br(t)==="[object Map]",To=t=>br(t)==="[object Set]",H=t=>typeof t=="function",he=t=>typeof t=="string",As=t=>typeof t=="symbol",ue=t=>t!==null&&typeof t=="object",Ro=t=>ue(t)&&H(t.then)&&H(t.catch),So=Object.prototype.toString,br=t=>So.call(t),Fc=t=>br(t).slice(8,-1),Ao=t=>br(t)==="[object Object]",Cs=t=>he(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Yn=Es(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ir=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},$c=/-(\w)/g,We=Ir(t=>t.replace($c,(e,n)=>n?n.toUpperCase():"")),Bc=/\B([A-Z])/g,Xt=Ir(t=>t.replace(Bc,"-$1").toLowerCase()),Er=Ir(t=>t.charAt(0).toUpperCase()+t.slice(1)),Fr=Ir(t=>t?`on${Er(t)}`:""),wn=(t,e)=>!Object.is(t,e),Xn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},sr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Xr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let li;const Hc=()=>li||(li=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let ze;class Co{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&ze&&(this.parent=ze,this.index=(ze.scopes||(ze.scopes=[])).push(this)-1)}run(e){if(this.active)try{return ze=this,e()}finally{ze=this.parent}}on(){ze=this}off(){ze=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Oo(t){return new Co(t)}function jc(t,e=ze){e&&e.active&&e.effects.push(t)}const Os=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Po=t=>(t.w&ht)>0,ko=t=>(t.n&ht)>0,Wc=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ht},Vc=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Po(s)&&!ko(s)?s.delete(t):e[n++]=s,s.w&=~ht,s.n&=~ht}e.length=n}},Qr=new WeakMap;let ln=0,ht=1;const Zr=30;let Be;const It=Symbol(""),es=Symbol("");class Ps{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,jc(this,r)}run(){if(!this.active)return this.fn();let e=Be,n=ft;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Be,Be=this,ft=!0,ht=1<<++ln,ln<=Zr?Wc(this):ui(this),this.fn()}finally{ln<=Zr&&Vc(this),ht=1<<--ln,Be=this.parent,ft=n,this.parent=void 0}}stop(){this.active&&(ui(this),this.onStop&&this.onStop(),this.active=!1)}}function ui(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ft=!0;const No=[];function Qt(){No.push(ft),ft=!1}function Zt(){const t=No.pop();ft=t===void 0?!0:t}function we(t,e,n){if(ft&&Be){let r=Qr.get(t);r||Qr.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Os()),Mo(s)}}function Mo(t,e){let n=!1;ln<=Zr?ko(t)||(t.n|=ht,n=!Po(t)):n=!t.has(Be),n&&(t.add(Be),Be.deps.push(t))}function Xe(t,e,n,r,s,i){const o=Qr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&F(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":F(t)?Cs(n)&&a.push(o.get("length")):(a.push(o.get(It)),Ht(t)&&a.push(o.get(es)));break;case"delete":F(t)||(a.push(o.get(It)),Ht(t)&&a.push(o.get(es)));break;case"set":Ht(t)&&a.push(o.get(It));break}if(a.length===1)a[0]&&ts(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);ts(Os(c))}}function ts(t,e){for(const n of F(t)?t:[...t])(n!==Be||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const zc=Es("__proto__,__v_isRef,__isVue"),Do=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(As)),Kc=ks(),qc=ks(!1,!0),Gc=ks(!0),fi=Jc();function Jc(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=G(this);for(let i=0,o=this.length;i<o;i++)we(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(G)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Qt();const r=G(this)[e].apply(this,n);return Zt(),r}}),t}function ks(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?fl:$o:e?Fo:Uo).get(r))return r;const o=F(r);if(!t&&o&&q(fi,s))return Reflect.get(fi,s,i);const a=Reflect.get(r,s,i);return(As(s)?Do.has(s):zc(s))||(t||we(r,"get",s),e)?a:oe(a)?!o||!Cs(s)?a.value:a:ue(a)?t?Bo(a):en(a):a}}const Yc=xo(),Xc=xo(!0);function xo(t=!1){return function(n,r,s,i){let o=n[r];if(Tn(o)&&oe(o)&&!oe(s))return!1;if(!t&&!Tn(s)&&(Ho(s)||(s=G(s),o=G(o)),!F(n)&&oe(o)&&!oe(s)))return o.value=s,!0;const a=F(n)&&Cs(r)?Number(r)<n.length:q(n,r),c=Reflect.set(n,r,s,i);return n===G(i)&&(a?wn(s,o)&&Xe(n,"set",r,s):Xe(n,"add",r,s)),c}}function Qc(t,e){const n=q(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Xe(t,"delete",e,void 0),r}function Zc(t,e){const n=Reflect.has(t,e);return(!As(e)||!Do.has(e))&&we(t,"has",e),n}function el(t){return we(t,"iterate",F(t)?"length":It),Reflect.ownKeys(t)}const Lo={get:Kc,set:Yc,deleteProperty:Qc,has:Zc,ownKeys:el},tl={get:Gc,set(t,e){return!0},deleteProperty(t,e){return!0}},nl=ve({},Lo,{get:qc,set:Xc}),Ns=t=>t,wr=t=>Reflect.getPrototypeOf(t);function zn(t,e,n=!1,r=!1){t=t.__v_raw;const s=G(t),i=G(e);e!==i&&!n&&we(s,"get",e),!n&&we(s,"get",i);const{has:o}=wr(s),a=r?Ns:n?xs:Rn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Kn(t,e=!1){const n=this.__v_raw,r=G(n),s=G(t);return t!==s&&!e&&we(r,"has",t),!e&&we(r,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function qn(t,e=!1){return t=t.__v_raw,!e&&we(G(t),"iterate",It),Reflect.get(t,"size",t)}function di(t){t=G(t);const e=G(this);return wr(e).has.call(e,t)||(e.add(t),Xe(e,"add",t,t)),this}function hi(t,e){e=G(e);const n=G(this),{has:r,get:s}=wr(n);let i=r.call(n,t);i||(t=G(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?wn(e,o)&&Xe(n,"set",t,e):Xe(n,"add",t,e),this}function pi(t){const e=G(this),{has:n,get:r}=wr(e);let s=n.call(e,t);s||(t=G(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Xe(e,"delete",t,void 0),i}function gi(){const t=G(this),e=t.size!==0,n=t.clear();return e&&Xe(t,"clear",void 0,void 0),n}function Gn(t,e){return function(r,s){const i=this,o=i.__v_raw,a=G(o),c=e?Ns:t?xs:Rn;return!t&&we(a,"iterate",It),o.forEach((l,f)=>r.call(s,c(l),c(f),i))}}function Jn(t,e,n){return function(...r){const s=this.__v_raw,i=G(s),o=Ht(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),f=n?Ns:e?xs:Rn;return!e&&we(i,"iterate",c?es:It),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:a?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function et(t){return function(...e){return t==="delete"?!1:this}}function rl(){const t={get(i){return zn(this,i)},get size(){return qn(this)},has:Kn,add:di,set:hi,delete:pi,clear:gi,forEach:Gn(!1,!1)},e={get(i){return zn(this,i,!1,!0)},get size(){return qn(this)},has:Kn,add:di,set:hi,delete:pi,clear:gi,forEach:Gn(!1,!0)},n={get(i){return zn(this,i,!0)},get size(){return qn(this,!0)},has(i){return Kn.call(this,i,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:Gn(!0,!1)},r={get(i){return zn(this,i,!0,!0)},get size(){return qn(this,!0)},has(i){return Kn.call(this,i,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:Gn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Jn(i,!1,!1),n[i]=Jn(i,!0,!1),e[i]=Jn(i,!1,!0),r[i]=Jn(i,!0,!0)}),[t,n,e,r]}const[sl,il,ol,al]=rl();function Ms(t,e){const n=e?t?al:ol:t?il:sl;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(q(n,s)&&s in r?n:r,s,i)}const cl={get:Ms(!1,!1)},ll={get:Ms(!1,!0)},ul={get:Ms(!0,!1)},Uo=new WeakMap,Fo=new WeakMap,$o=new WeakMap,fl=new WeakMap;function dl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hl(t){return t.__v_skip||!Object.isExtensible(t)?0:dl(Fc(t))}function en(t){return Tn(t)?t:Ds(t,!1,Lo,cl,Uo)}function pl(t){return Ds(t,!1,nl,ll,Fo)}function Bo(t){return Ds(t,!0,tl,ul,$o)}function Ds(t,e,n,r,s){if(!ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=hl(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Ye(t){return Tn(t)?Ye(t.__v_raw):!!(t&&t.__v_isReactive)}function Tn(t){return!!(t&&t.__v_isReadonly)}function Ho(t){return!!(t&&t.__v_isShallow)}function jo(t){return Ye(t)||Tn(t)}function G(t){const e=t&&t.__v_raw;return e?G(e):t}function Kt(t){return sr(t,"__v_skip",!0),t}const Rn=t=>ue(t)?en(t):t,xs=t=>ue(t)?Bo(t):t;function Wo(t){ft&&Be&&(t=G(t),Mo(t.dep||(t.dep=Os())))}function Vo(t,e){t=G(t),t.dep&&ts(t.dep)}function oe(t){return!!(t&&t.__v_isRef===!0)}function Tr(t){return zo(t,!1)}function gl(t){return zo(t,!0)}function zo(t,e){return oe(t)?t:new ml(t,e)}class ml{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:G(e),this._value=n?e:Rn(e)}get value(){return Wo(this),this._value}set value(e){e=this.__v_isShallow?e:G(e),wn(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Rn(e),Vo(this))}}function Et(t){return oe(t)?t.value:t}const _l={get:(t,e,n)=>Et(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return oe(s)&&!oe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Ko(t){return Ye(t)?t:new Proxy(t,_l)}function qo(t){const e=F(t)?new Array(t.length):{};for(const n in t)e[n]=Go(t,n);return e}class vl{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Go(t,e,n){const r=t[e];return oe(r)?r:new vl(t,e,n)}class yl{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ps(e,()=>{this._dirty||(this._dirty=!0,Vo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=G(this);return Wo(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function bl(t,e,n=!1){let r,s;const i=H(t);return i?(r=t,s=Ne):(r=t.get,s=t.set),new yl(r,s,i||!s,n)}Promise.resolve();function dt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Rr(i,e,n)}return s}function Me(t,e,n,r){if(H(t)){const i=dt(t,e,n,r);return i&&Ro(i)&&i.catch(o=>{Rr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Me(t[i],e,n,r));return s}function Rr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){dt(c,null,10,[t,o,a]);return}}Il(t,n,s,r)}function Il(t,e,n,r=!0){console.error(t)}let ir=!1,ns=!1;const Ee=[];let qe=0;const gn=[];let un=null,Lt=0;const mn=[];let st=null,Ut=0;const Jo=Promise.resolve();let Ls=null,rs=null;function Us(t){const e=Ls||Jo;return t?e.then(this?t.bind(this):t):e}function El(t){let e=qe+1,n=Ee.length;for(;e<n;){const r=e+n>>>1;Sn(Ee[r])<t?e=r+1:n=r}return e}function Yo(t){(!Ee.length||!Ee.includes(t,ir&&t.allowRecurse?qe+1:qe))&&t!==rs&&(t.id==null?Ee.push(t):Ee.splice(El(t.id),0,t),Xo())}function Xo(){!ir&&!ns&&(ns=!0,Ls=Jo.then(ea))}function wl(t){const e=Ee.indexOf(t);e>qe&&Ee.splice(e,1)}function Qo(t,e,n,r){F(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Xo()}function Tl(t){Qo(t,un,gn,Lt)}function Rl(t){Qo(t,st,mn,Ut)}function Fs(t,e=null){if(gn.length){for(rs=e,un=[...new Set(gn)],gn.length=0,Lt=0;Lt<un.length;Lt++)un[Lt]();un=null,Lt=0,rs=null,Fs(t,e)}}function Zo(t){if(mn.length){const e=[...new Set(mn)];if(mn.length=0,st){st.push(...e);return}for(st=e,st.sort((n,r)=>Sn(n)-Sn(r)),Ut=0;Ut<st.length;Ut++)st[Ut]();st=null,Ut=0}}const Sn=t=>t.id==null?1/0:t.id;function ea(t){ns=!1,ir=!0,Fs(t),Ee.sort((n,r)=>Sn(n)-Sn(r));const e=Ne;try{for(qe=0;qe<Ee.length;qe++){const n=Ee[qe];n&&n.active!==!1&&dt(n,null,14)}}finally{qe=0,Ee.length=0,Zo(),ir=!1,Ls=null,(Ee.length||gn.length||mn.length)&&ea(t)}}function Sl(t,e,...n){const r=t.vnode.props||Z;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[f]||Z;p?s=n.map(y=>y.trim()):h&&(s=n.map(Xr))}let a,c=r[a=Fr(e)]||r[a=Fr(We(e))];!c&&i&&(c=r[a=Fr(Xt(e))]),c&&Me(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Me(l,t,6,s)}}function ta(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!H(t)){const c=l=>{const f=ta(l,e,!0);f&&(a=!0,ve(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(F(i)?i.forEach(c=>o[c]=null):ve(o,i),r.set(t,o),o)}function $s(t,e){return!t||!yr(e)?!1:(e=e.slice(2).replace(/Once$/,""),q(t,e[0].toLowerCase()+e.slice(1))||q(t,Xt(e))||q(t,e))}let Se=null,Sr=null;function or(t){const e=Se;return Se=t,Sr=t&&t.type.__scopeId||null,e}function Sg(t){Sr=t}function Ag(){Sr=null}function fn(t,e=Se,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ri(-1);const i=or(e),o=t(...s);return or(i),r._d&&Ri(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function $r(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:f,renderCache:h,data:p,setupState:y,ctx:R,inheritAttrs:D}=t;let A,C;const L=or(t);try{if(n.shapeFlag&4){const $=s||r;A=$e(f.call($,$,h,i,y,p,R)),C=c}else{const $=e;A=$e($.length>1?$(i,{attrs:c,slots:a,emit:l}):$(i,null)),C=e.props?c:Al(c)}}catch($){vn.length=0,Rr($,t,1),A=de(St)}let z=A;if(C&&D!==!1){const $=Object.keys(C),{shapeFlag:ie}=z;$.length&&ie&7&&(o&&$.some(Rs)&&(C=Cl(C,o)),z=An(z,C))}return n.dirs&&(z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&(z.transition=n.transition),A=z,or(L),A}const Al=t=>{let e;for(const n in t)(n==="class"||n==="style"||yr(n))&&((e||(e={}))[n]=t[n]);return e},Cl=(t,e)=>{const n={};for(const r in t)(!Rs(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Ol(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?mi(r,o,l):!!o;if(c&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(o[p]!==r[p]&&!$s(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?mi(r,o,l):!0:!!o;return!1}function mi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!$s(n,i))return!0}return!1}function Pl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const kl=t=>t.__isSuspense;function Nl(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):Rl(t)}function Qn(t,e){if(fe){let n=fe.provides;const r=fe.parent&&fe.parent.provides;r===n&&(n=fe.provides=Object.create(r)),n[t]=e}}function De(t,e,n=!1){const r=fe||Se;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&H(e)?e.call(r.proxy):e}}function Cg(t,e){return Bs(t,null,e)}const _i={};function _n(t,e,n){return Bs(t,e,n)}function Bs(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Z){const a=fe;let c,l=!1,f=!1;if(oe(t)?(c=()=>t.value,l=Ho(t)):Ye(t)?(c=()=>t,r=!0):F(t)?(f=!0,l=t.some(Ye),c=()=>t.map(C=>{if(oe(C))return C.value;if(Ye(C))return yt(C);if(H(C))return dt(C,a,2)})):H(t)?e?c=()=>dt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Me(t,a,3,[p])}:c=Ne,e&&r){const C=c;c=()=>yt(C())}let h,p=C=>{h=A.onStop=()=>{dt(C,a,4)}};if(Cn)return p=Ne,e?n&&Me(e,a,3,[c(),f?[]:void 0,p]):c(),Ne;let y=f?[]:_i;const R=()=>{if(!!A.active)if(e){const C=A.run();(r||l||(f?C.some((L,z)=>wn(L,y[z])):wn(C,y)))&&(h&&h(),Me(e,a,3,[C,y===_i?void 0:y,p]),y=C)}else A.run()};R.allowRecurse=!!e;let D;s==="sync"?D=R:s==="post"?D=()=>ye(R,a&&a.suspense):D=()=>{!a||a.isMounted?Tl(R):R()};const A=new Ps(c,D);return e?n?R():y=A.run():s==="post"?ye(A.run.bind(A),a&&a.suspense):A.run(),()=>{A.stop(),a&&a.scope&&Ss(a.scope.effects,A)}}function Ml(t,e,n){const r=this.proxy,s=he(t)?t.includes(".")?na(r,t):()=>r[t]:t.bind(r,r);let i;H(e)?i=e:(i=e.handler,n=e);const o=fe;qt(this);const a=Bs(s,i.bind(r),n);return o?qt(o):Tt(),a}function na(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function yt(t,e){if(!ue(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),oe(t))yt(t.value,e);else if(F(t))for(let n=0;n<t.length;n++)yt(t[n],e);else if(To(t)||Ht(t))t.forEach(n=>{yt(n,e)});else if(Ao(t))for(const n in t)yt(t[n],e);return t}function Ar(t){return H(t)?{setup:t,name:t.name}:t}const ss=t=>!!t.type.__asyncLoader,ra=t=>t.type.__isKeepAlive;function Dl(t,e){sa(t,"a",e)}function xl(t,e){sa(t,"da",e)}function sa(t,e,n=fe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Cr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ra(s.parent.vnode)&&Ll(r,e,n,s),s=s.parent}}function Ll(t,e,n,r){const s=Cr(e,t,r,!0);Hs(()=>{Ss(r[e],s)},n)}function Cr(t,e,n=fe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Qt(),qt(n);const a=Me(e,n,t,o);return Tt(),Zt(),a});return r?s.unshift(i):s.push(i),i}}const Ze=t=>(e,n=fe)=>(!Cn||t==="sp")&&Cr(t,e,n),Ul=Ze("bm"),ia=Ze("m"),Fl=Ze("bu"),$l=Ze("u"),Bl=Ze("bum"),Hs=Ze("um"),Hl=Ze("sp"),jl=Ze("rtg"),Wl=Ze("rtc");function Vl(t,e=fe){Cr("ec",t,e)}let is=!0;function zl(t){const e=aa(t),n=t.proxy,r=t.ctx;is=!1,e.beforeCreate&&vi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:f,beforeMount:h,mounted:p,beforeUpdate:y,updated:R,activated:D,deactivated:A,beforeDestroy:C,beforeUnmount:L,destroyed:z,unmounted:$,render:ie,renderTracked:j,renderTriggered:V,errorCaptured:me,serverPrefetch:ae,expose:pe,inheritAttrs:Ce,components:Oe,directives:Te,filters:ce}=e;if(l&&Kl(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ee in o){const J=o[ee];H(J)&&(r[ee]=J.bind(n))}if(s){const ee=s.call(n,n);ue(ee)&&(t.data=en(ee))}if(is=!0,i)for(const ee in i){const J=i[ee],be=H(J)?J.bind(n,n):H(J.get)?J.get.bind(n,n):Ne,Nt=!H(J)&&H(J.set)?J.set.bind(n):Ne,Ve=ke({get:be,set:Nt});Object.defineProperty(r,ee,{enumerable:!0,configurable:!0,get:()=>Ve.value,set:xe=>Ve.value=xe})}if(a)for(const ee in a)oa(a[ee],r,n,ee);if(c){const ee=H(c)?c.call(n):c;Reflect.ownKeys(ee).forEach(J=>{Qn(J,ee[J])})}f&&vi(f,t,"c");function le(ee,J){F(J)?J.forEach(be=>ee(be.bind(n))):J&&ee(J.bind(n))}if(le(Ul,h),le(ia,p),le(Fl,y),le($l,R),le(Dl,D),le(xl,A),le(Vl,me),le(Wl,j),le(jl,V),le(Bl,L),le(Hs,$),le(Hl,ae),F(pe))if(pe.length){const ee=t.exposed||(t.exposed={});pe.forEach(J=>{Object.defineProperty(ee,J,{get:()=>n[J],set:be=>n[J]=be})})}else t.exposed||(t.exposed={});ie&&t.render===Ne&&(t.render=ie),Ce!=null&&(t.inheritAttrs=Ce),Oe&&(t.components=Oe),Te&&(t.directives=Te)}function Kl(t,e,n=Ne,r=!1){F(t)&&(t=os(t));for(const s in t){const i=t[s];let o;ue(i)?"default"in i?o=De(i.from||s,i.default,!0):o=De(i.from||s):o=De(i),oe(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function vi(t,e,n){Me(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function oa(t,e,n,r){const s=r.includes(".")?na(n,r):()=>n[r];if(he(t)){const i=e[t];H(i)&&_n(s,i)}else if(H(t))_n(s,t.bind(n));else if(ue(t))if(F(t))t.forEach(i=>oa(i,e,n,r));else{const i=H(t.handler)?t.handler.bind(n):e[t.handler];H(i)&&_n(s,i,t)}}function aa(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>ar(c,l,o,!0)),ar(c,e,o)),i.set(e,c),c}function ar(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ar(t,i,n,!0),s&&s.forEach(o=>ar(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=ql[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const ql={data:yi,props:mt,emits:mt,methods:mt,computed:mt,beforeCreate:_e,created:_e,beforeMount:_e,mounted:_e,beforeUpdate:_e,updated:_e,beforeDestroy:_e,beforeUnmount:_e,destroyed:_e,unmounted:_e,activated:_e,deactivated:_e,errorCaptured:_e,serverPrefetch:_e,components:mt,directives:mt,watch:Jl,provide:yi,inject:Gl};function yi(t,e){return e?t?function(){return ve(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function Gl(t,e){return mt(os(t),os(e))}function os(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function _e(t,e){return t?[...new Set([].concat(t,e))]:e}function mt(t,e){return t?ve(ve(Object.create(null),t),e):e}function Jl(t,e){if(!t)return e;if(!e)return t;const n=ve(Object.create(null),t);for(const r in e)n[r]=_e(t[r],e[r]);return n}function Yl(t,e,n,r=!1){const s={},i={};sr(i,Or,1),t.propsDefaults=Object.create(null),ca(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:pl(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Xl(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=G(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];const y=e[p];if(c)if(q(i,p))y!==i[p]&&(i[p]=y,l=!0);else{const R=We(p);s[R]=as(c,a,R,y,t,!1)}else y!==i[p]&&(i[p]=y,l=!0)}}}else{ca(t,e,s,i)&&(l=!0);let f;for(const h in a)(!e||!q(e,h)&&((f=Xt(h))===h||!q(e,f)))&&(c?n&&(n[h]!==void 0||n[f]!==void 0)&&(s[h]=as(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!q(e,h)&&!0)&&(delete i[h],l=!0)}l&&Xe(t,"set","$attrs")}function ca(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Yn(c))continue;const l=e[c];let f;s&&q(s,f=We(c))?!i||!i.includes(f)?n[f]=l:(a||(a={}))[f]=l:$s(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=G(n),l=a||Z;for(let f=0;f<i.length;f++){const h=i[f];n[h]=as(s,c,h,l[h],t,!q(l,h))}}return o}function as(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=q(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&H(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(qt(s),r=l[n]=c.call(null,e),Tt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Xt(n))&&(r=!0))}return r}function la(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!H(t)){const f=h=>{c=!0;const[p,y]=la(h,e,!0);ve(o,p),y&&a.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return r.set(t,Bt),Bt;if(F(i))for(let f=0;f<i.length;f++){const h=We(i[f]);bi(h)&&(o[h]=Z)}else if(i)for(const f in i){const h=We(f);if(bi(h)){const p=i[f],y=o[h]=F(p)||H(p)?{type:p}:p;if(y){const R=wi(Boolean,y.type),D=wi(String,y.type);y[0]=R>-1,y[1]=D<0||R<D,(R>-1||q(y,"default"))&&a.push(h)}}}const l=[o,a];return r.set(t,l),l}function bi(t){return t[0]!=="$"}function Ii(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Ei(t,e){return Ii(t)===Ii(e)}function wi(t,e){return F(e)?e.findIndex(n=>Ei(n,t)):H(e)&&Ei(e,t)?0:-1}const ua=t=>t[0]==="_"||t==="$stable",js=t=>F(t)?t.map($e):[$e(t)],Ql=(t,e,n)=>{const r=fn((...s)=>js(e(...s)),n);return r._c=!1,r},fa=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ua(s))continue;const i=t[s];if(H(i))e[s]=Ql(s,i,r);else if(i!=null){const o=js(i);e[s]=()=>o}}},da=(t,e)=>{const n=js(e);t.slots.default=()=>n},Zl=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=G(e),sr(e,"_",n)):fa(e,t.slots={})}else t.slots={},e&&da(t,e);sr(t.slots,Or,1)},eu=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Z;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ve(s,e),!n&&a===1&&delete s._):(i=!e.$stable,fa(e,s)),o=e}else e&&(da(t,e),o={default:1});if(i)for(const a in s)!ua(a)&&!(a in o)&&delete s[a]};function Og(t,e){const n=Se;if(n===null)return t;const r=n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Z]=e[i];H(o)&&(o={mounted:o,updated:o}),o.deep&&yt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function pt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Qt(),Me(c,n,8,[t.el,a,t,e]),Zt())}}function ha(){return{app:null,config:{isNativeTag:xc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tu=0;function nu(t,e){return function(r,s=null){s!=null&&!ue(s)&&(s=null);const i=ha(),o=new Set;let a=!1;const c=i.app={_uid:tu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Ru,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&H(l.install)?(o.add(l),l.install(c,...f)):H(l)&&(o.add(l),l(c,...f))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,f){return f?(i.components[l]=f,c):i.components[l]},directive(l,f){return f?(i.directives[l]=f,c):i.directives[l]},mount(l,f,h){if(!a){const p=de(r,s);return p.appContext=i,f&&e?e(p,l):t(p,l,h),a=!0,c._container=l,l.__vue_app__=c,zs(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,f){return i.provides[l]=f,c}};return c}}function cs(t,e,n,r,s=!1){if(F(t)){t.forEach((p,y)=>cs(p,e&&(F(e)?e[y]:e),n,r,s));return}if(ss(r)&&!s)return;const i=r.shapeFlag&4?zs(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,f=a.refs===Z?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(he(l)?(f[l]=null,q(h,l)&&(h[l]=null)):oe(l)&&(l.value=null)),H(c))dt(c,a,12,[o,f]);else{const p=he(c),y=oe(c);if(p||y){const R=()=>{if(t.f){const D=p?f[c]:c.value;s?F(D)&&Ss(D,i):F(D)?D.includes(i)||D.push(i):p?f[c]=[i]:(c.value=[i],t.k&&(f[t.k]=c.value))}else p?(f[c]=o,q(h,c)&&(h[c]=o)):oe(c)&&(c.value=o,t.k&&(f[t.k]=o))};o?(R.id=-1,ye(R,n)):R()}}}const ye=Nl;function ru(t){return su(t)}function su(t,e){const n=Hc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:f,parentNode:h,nextSibling:p,setScopeId:y=Ne,cloneNode:R,insertStaticContent:D}=t,A=(u,d,g,v=null,_=null,E=null,S=!1,I=null,w=!!d.dynamicChildren)=>{if(u===d)return;u&&!on(u,d)&&(v=k(u),Re(u,_,E,!0),u=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:b,ref:N,shapeFlag:O}=d;switch(b){case Ws:C(u,d,g,v);break;case St:L(u,d,g,v);break;case Br:u==null&&z(d,g,v,S);break;case Fe:Te(u,d,g,v,_,E,S,I,w);break;default:O&1?j(u,d,g,v,_,E,S,I,w):O&6?ce(u,d,g,v,_,E,S,I,w):(O&64||O&128)&&b.process(u,d,g,v,_,E,S,I,w,te)}N!=null&&_&&cs(N,u&&u.ref,E,d||u,!d)},C=(u,d,g,v)=>{if(u==null)r(d.el=a(d.children),g,v);else{const _=d.el=u.el;d.children!==u.children&&l(_,d.children)}},L=(u,d,g,v)=>{u==null?r(d.el=c(d.children||""),g,v):d.el=u.el},z=(u,d,g,v)=>{[u.el,u.anchor]=D(u.children,d,g,v,u.el,u.anchor)},$=({el:u,anchor:d},g,v)=>{let _;for(;u&&u!==d;)_=p(u),r(u,g,v),u=_;r(d,g,v)},ie=({el:u,anchor:d})=>{let g;for(;u&&u!==d;)g=p(u),s(u),u=g;s(d)},j=(u,d,g,v,_,E,S,I,w)=>{S=S||d.type==="svg",u==null?V(d,g,v,_,E,S,I,w):pe(u,d,_,E,S,I,w)},V=(u,d,g,v,_,E,S,I)=>{let w,b;const{type:N,props:O,shapeFlag:M,transition:U,patchFlag:K,dirs:se}=u;if(u.el&&R!==void 0&&K===-1)w=u.el=R(u.el);else{if(w=u.el=o(u.type,E,O&&O.is,O),M&8?f(w,u.children):M&16&&ae(u.children,w,null,v,_,E&&N!=="foreignObject",S,I),se&&pt(u,null,v,"created"),O){for(const re in O)re!=="value"&&!Yn(re)&&i(w,re,null,O[re],E,u.children,v,_,T);"value"in O&&i(w,"value",null,O.value),(b=O.onVnodeBeforeMount)&&Ue(b,v,u)}me(w,u,u.scopeId,S,v)}se&&pt(u,null,v,"beforeMount");const X=(!_||_&&!_.pendingBranch)&&U&&!U.persisted;X&&U.beforeEnter(w),r(w,d,g),((b=O&&O.onVnodeMounted)||X||se)&&ye(()=>{b&&Ue(b,v,u),X&&U.enter(w),se&&pt(u,null,v,"mounted")},_)},me=(u,d,g,v,_)=>{if(g&&y(u,g),v)for(let E=0;E<v.length;E++)y(u,v[E]);if(_){let E=_.subTree;if(d===E){const S=_.vnode;me(u,S,S.scopeId,S.slotScopeIds,_.parent)}}},ae=(u,d,g,v,_,E,S,I,w=0)=>{for(let b=w;b<u.length;b++){const N=u[b]=I?it(u[b]):$e(u[b]);A(null,N,d,g,v,_,E,S,I)}},pe=(u,d,g,v,_,E,S)=>{const I=d.el=u.el;let{patchFlag:w,dynamicChildren:b,dirs:N}=d;w|=u.patchFlag&16;const O=u.props||Z,M=d.props||Z;let U;g&&gt(g,!1),(U=M.onVnodeBeforeUpdate)&&Ue(U,g,d,u),N&&pt(d,u,g,"beforeUpdate"),g&&gt(g,!0);const K=_&&d.type!=="foreignObject";if(b?Ce(u.dynamicChildren,b,I,g,v,K,E):S||be(u,d,I,null,g,v,K,E,!1),w>0){if(w&16)Oe(I,d,O,M,g,v,_);else if(w&2&&O.class!==M.class&&i(I,"class",null,M.class,_),w&4&&i(I,"style",O.style,M.style,_),w&8){const se=d.dynamicProps;for(let X=0;X<se.length;X++){const re=se[X],Pe=O[re],Mt=M[re];(Mt!==Pe||re==="value")&&i(I,re,Pe,Mt,_,u.children,g,v,T)}}w&1&&u.children!==d.children&&f(I,d.children)}else!S&&b==null&&Oe(I,d,O,M,g,v,_);((U=M.onVnodeUpdated)||N)&&ye(()=>{U&&Ue(U,g,d,u),N&&pt(d,u,g,"updated")},v)},Ce=(u,d,g,v,_,E,S)=>{for(let I=0;I<d.length;I++){const w=u[I],b=d[I],N=w.el&&(w.type===Fe||!on(w,b)||w.shapeFlag&70)?h(w.el):g;A(w,b,N,null,v,_,E,S,!0)}},Oe=(u,d,g,v,_,E,S)=>{if(g!==v){for(const I in v){if(Yn(I))continue;const w=v[I],b=g[I];w!==b&&I!=="value"&&i(u,I,b,w,S,d.children,_,E,T)}if(g!==Z)for(const I in g)!Yn(I)&&!(I in v)&&i(u,I,g[I],null,S,d.children,_,E,T);"value"in v&&i(u,"value",g.value,v.value)}},Te=(u,d,g,v,_,E,S,I,w)=>{const b=d.el=u?u.el:a(""),N=d.anchor=u?u.anchor:a("");let{patchFlag:O,dynamicChildren:M,slotScopeIds:U}=d;U&&(I=I?I.concat(U):U),u==null?(r(b,g,v),r(N,g,v),ae(d.children,g,N,_,E,S,I,w)):O>0&&O&64&&M&&u.dynamicChildren?(Ce(u.dynamicChildren,M,g,_,E,S,I),(d.key!=null||_&&d===_.subTree)&&pa(u,d,!0)):be(u,d,g,N,_,E,S,I,w)},ce=(u,d,g,v,_,E,S,I,w)=>{d.slotScopeIds=I,u==null?d.shapeFlag&512?_.ctx.activate(d,g,v,S,w):kt(d,g,v,_,E,S,w):le(u,d,w)},kt=(u,d,g,v,_,E,S)=>{const I=u.component=vu(u,v,_);if(ra(u)&&(I.ctx.renderer=te),yu(I),I.asyncDep){if(_&&_.registerDep(I,ee),!u.el){const w=I.subTree=de(St);L(null,w,d,g)}return}ee(I,u,d,g,_,E,S)},le=(u,d,g)=>{const v=d.component=u.component;if(Ol(u,d,g))if(v.asyncDep&&!v.asyncResolved){J(v,d,g);return}else v.next=d,wl(v.update),v.update();else d.component=u.component,d.el=u.el,v.vnode=d},ee=(u,d,g,v,_,E,S)=>{const I=()=>{if(u.isMounted){let{next:N,bu:O,u:M,parent:U,vnode:K}=u,se=N,X;gt(u,!1),N?(N.el=K.el,J(u,N,S)):N=K,O&&Xn(O),(X=N.props&&N.props.onVnodeBeforeUpdate)&&Ue(X,U,N,K),gt(u,!0);const re=$r(u),Pe=u.subTree;u.subTree=re,A(Pe,re,h(Pe.el),k(Pe),u,_,E),N.el=re.el,se===null&&Pl(u,re.el),M&&ye(M,_),(X=N.props&&N.props.onVnodeUpdated)&&ye(()=>Ue(X,U,N,K),_)}else{let N;const{el:O,props:M}=d,{bm:U,m:K,parent:se}=u,X=ss(d);if(gt(u,!1),U&&Xn(U),!X&&(N=M&&M.onVnodeBeforeMount)&&Ue(N,se,d),gt(u,!0),O&&B){const re=()=>{u.subTree=$r(u),B(O,u.subTree,u,_,null)};X?d.type.__asyncLoader().then(()=>!u.isUnmounted&&re()):re()}else{const re=u.subTree=$r(u);A(null,re,g,v,u,_,E),d.el=re.el}if(K&&ye(K,_),!X&&(N=M&&M.onVnodeMounted)){const re=d;ye(()=>Ue(N,se,re),_)}d.shapeFlag&256&&u.a&&ye(u.a,_),u.isMounted=!0,d=g=v=null}},w=u.effect=new Ps(I,()=>Yo(u.update),u.scope),b=u.update=w.run.bind(w);b.id=u.uid,gt(u,!0),b()},J=(u,d,g)=>{d.component=u;const v=u.vnode.props;u.vnode=d,u.next=null,Xl(u,d.props,v,g),eu(u,d.children,g),Qt(),Fs(void 0,u.update),Zt()},be=(u,d,g,v,_,E,S,I,w=!1)=>{const b=u&&u.children,N=u?u.shapeFlag:0,O=d.children,{patchFlag:M,shapeFlag:U}=d;if(M>0){if(M&128){Ve(b,O,g,v,_,E,S,I,w);return}else if(M&256){Nt(b,O,g,v,_,E,S,I,w);return}}U&8?(N&16&&T(b,_,E),O!==b&&f(g,O)):N&16?U&16?Ve(b,O,g,v,_,E,S,I,w):T(b,_,E,!0):(N&8&&f(g,""),U&16&&ae(O,g,v,_,E,S,I,w))},Nt=(u,d,g,v,_,E,S,I,w)=>{u=u||Bt,d=d||Bt;const b=u.length,N=d.length,O=Math.min(b,N);let M;for(M=0;M<O;M++){const U=d[M]=w?it(d[M]):$e(d[M]);A(u[M],U,g,null,_,E,S,I,w)}b>N?T(u,_,E,!0,!1,O):ae(d,g,v,_,E,S,I,w,O)},Ve=(u,d,g,v,_,E,S,I,w)=>{let b=0;const N=d.length;let O=u.length-1,M=N-1;for(;b<=O&&b<=M;){const U=u[b],K=d[b]=w?it(d[b]):$e(d[b]);if(on(U,K))A(U,K,g,null,_,E,S,I,w);else break;b++}for(;b<=O&&b<=M;){const U=u[O],K=d[M]=w?it(d[M]):$e(d[M]);if(on(U,K))A(U,K,g,null,_,E,S,I,w);else break;O--,M--}if(b>O){if(b<=M){const U=M+1,K=U<N?d[U].el:v;for(;b<=M;)A(null,d[b]=w?it(d[b]):$e(d[b]),g,K,_,E,S,I,w),b++}}else if(b>M)for(;b<=O;)Re(u[b],_,E,!0),b++;else{const U=b,K=b,se=new Map;for(b=K;b<=M;b++){const Ie=d[b]=w?it(d[b]):$e(d[b]);Ie.key!=null&&se.set(Ie.key,b)}let X,re=0;const Pe=M-K+1;let Mt=!1,oi=0;const sn=new Array(Pe);for(b=0;b<Pe;b++)sn[b]=0;for(b=U;b<=O;b++){const Ie=u[b];if(re>=Pe){Re(Ie,_,E,!0);continue}let Le;if(Ie.key!=null)Le=se.get(Ie.key);else for(X=K;X<=M;X++)if(sn[X-K]===0&&on(Ie,d[X])){Le=X;break}Le===void 0?Re(Ie,_,E,!0):(sn[Le-K]=b+1,Le>=oi?oi=Le:Mt=!0,A(Ie,d[Le],g,null,_,E,S,I,w),re++)}const ai=Mt?iu(sn):Bt;for(X=ai.length-1,b=Pe-1;b>=0;b--){const Ie=K+b,Le=d[Ie],ci=Ie+1<N?d[Ie+1].el:v;sn[b]===0?A(null,Le,g,ci,_,E,S,I,w):Mt&&(X<0||b!==ai[X]?xe(Le,g,ci,2):X--)}}},xe=(u,d,g,v,_=null)=>{const{el:E,type:S,transition:I,children:w,shapeFlag:b}=u;if(b&6){xe(u.component.subTree,d,g,v);return}if(b&128){u.suspense.move(d,g,v);return}if(b&64){S.move(u,d,g,te);return}if(S===Fe){r(E,d,g);for(let O=0;O<w.length;O++)xe(w[O],d,g,v);r(u.anchor,d,g);return}if(S===Br){$(u,d,g);return}if(v!==2&&b&1&&I)if(v===0)I.beforeEnter(E),r(E,d,g),ye(()=>I.enter(E),_);else{const{leave:O,delayLeave:M,afterLeave:U}=I,K=()=>r(E,d,g),se=()=>{O(E,()=>{K(),U&&U()})};M?M(E,K,se):se()}else r(E,d,g)},Re=(u,d,g,v=!1,_=!1)=>{const{type:E,props:S,ref:I,children:w,dynamicChildren:b,shapeFlag:N,patchFlag:O,dirs:M}=u;if(I!=null&&cs(I,null,g,u,!0),N&256){d.ctx.deactivate(u);return}const U=N&1&&M,K=!ss(u);let se;if(K&&(se=S&&S.onVnodeBeforeUnmount)&&Ue(se,d,u),N&6)P(u.component,g,v);else{if(N&128){u.suspense.unmount(g,v);return}U&&pt(u,null,d,"beforeUnmount"),N&64?u.type.remove(u,d,g,_,te,v):b&&(E!==Fe||O>0&&O&64)?T(b,d,g,!1,!0):(E===Fe&&O&384||!_&&N&16)&&T(w,d,g),v&&Ur(u)}(K&&(se=S&&S.onVnodeUnmounted)||U)&&ye(()=>{se&&Ue(se,d,u),U&&pt(u,null,d,"unmounted")},g)},Ur=u=>{const{type:d,el:g,anchor:v,transition:_}=u;if(d===Fe){m(g,v);return}if(d===Br){ie(u);return}const E=()=>{s(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(u.shapeFlag&1&&_&&!_.persisted){const{leave:S,delayLeave:I}=_,w=()=>S(g,E);I?I(u.el,E,w):w()}else E()},m=(u,d)=>{let g;for(;u!==d;)g=p(u),s(u),u=g;s(d)},P=(u,d,g)=>{const{bum:v,scope:_,update:E,subTree:S,um:I}=u;v&&Xn(v),_.stop(),E&&(E.active=!1,Re(S,u,d,g)),I&&ye(I,d),ye(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},T=(u,d,g,v=!1,_=!1,E=0)=>{for(let S=E;S<u.length;S++)Re(u[S],d,g,v,_)},k=u=>u.shapeFlag&6?k(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),Y=(u,d,g)=>{u==null?d._vnode&&Re(d._vnode,null,null,!0):A(d._vnode||null,u,d,null,null,null,g),Zo(),d._vnode=u},te={p:A,um:Re,m:xe,r:Ur,mt:kt,mc:ae,pc:be,pbc:Ce,n:k,o:t};let W,B;return e&&([W,B]=e(te)),{render:Y,hydrate:W,createApp:nu(Y,W)}}function gt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function pa(t,e,n=!1){const r=t.children,s=e.children;if(F(r)&&F(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=it(s[i]),a.el=o.el),n||pa(o,a))}}function iu(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const ou=t=>t.__isTeleport,ga="components";function au(t,e){return lu(ga,t,!0,e)||t}const cu=Symbol();function lu(t,e,n=!0,r=!1){const s=Se||fe;if(s){const i=s.type;if(t===ga){const a=wu(i);if(a&&(a===e||a===We(e)||a===Er(We(e))))return i}const o=Ti(s[t]||i[t],e)||Ti(s.appContext[t],e);return!o&&r?i:o}}function Ti(t,e){return t&&(t[e]||t[We(e)]||t[Er(We(e))])}const Fe=Symbol(void 0),Ws=Symbol(void 0),St=Symbol(void 0),Br=Symbol(void 0),vn=[];let wt=null;function jt(t=!1){vn.push(wt=t?null:[])}function uu(){vn.pop(),wt=vn[vn.length-1]||null}let cr=1;function Ri(t){cr+=t}function ma(t){return t.dynamicChildren=cr>0?wt||Bt:null,uu(),cr>0&&wt&&wt.push(t),t}function Zn(t,e,n,r,s,i){return ma(lr(t,e,n,r,s,i,!0))}function _a(t,e,n,r,s){return ma(de(t,e,n,r,s,!0))}function ls(t){return t?t.__v_isVNode===!0:!1}function on(t,e){return t.type===e.type&&t.key===e.key}const Or="__vInternal",va=({key:t})=>t!=null?t:null,er=({ref:t,ref_key:e,ref_for:n})=>t!=null?he(t)||oe(t)||H(t)?{i:Se,r:t,k:e,f:!!n}:t:null;function lr(t,e=null,n=null,r=0,s=null,i=t===Fe?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&va(e),ref:e&&er(e),scopeId:Sr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(Vs(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=he(n)?8:16),cr>0&&!o&&wt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&wt.push(c),c}const de=fu;function fu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===cu)&&(t=St),ls(t)){const a=An(t,e,!0);return n&&Vs(a,n),a}if(Tu(t)&&(t=t.__vccOpts),e){e=du(e);let{class:a,style:c}=e;a&&!he(a)&&(e.class=Ts(a)),ue(c)&&(jo(c)&&!F(c)&&(c=ve({},c)),e.style=ws(c))}const o=he(t)?1:kl(t)?128:ou(t)?64:ue(t)?4:H(t)?2:0;return lr(t,e,n,r,s,o,i,!0)}function du(t){return t?jo(t)||Or in t?ve({},t):t:null}function An(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?pu(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&va(a),ref:e&&e.ref?n&&s?F(s)?s.concat(er(e)):[s,er(e)]:er(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Fe?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&An(t.ssContent),ssFallback:t.ssFallback&&An(t.ssFallback),el:t.el,anchor:t.anchor}}function xn(t=" ",e=0){return de(Ws,null,t,e)}function hu(t="",e=!1){return e?(jt(),_a(St,null,t)):de(St,null,t)}function $e(t){return t==null||typeof t=="boolean"?de(St):F(t)?de(Fe,null,t.slice()):typeof t=="object"?it(t):de(Ws,null,String(t))}function it(t){return t.el===null||t.memo?t:An(t)}function Vs(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Vs(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Or in e)?e._ctx=Se:s===3&&Se&&(Se.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:Se},n=32):(e=String(e),r&64?(n=16,e=[xn(e)]):n=8);t.children=e,t.shapeFlag|=n}function pu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ts([e.class,r.class]));else if(s==="style")e.style=ws([e.style,r.style]);else if(yr(s)){const i=e[s],o=r[s];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ue(t,e,n,r=null){Me(t,e,7,[n,r])}function Pg(t,e,n,r){let s;const i=n&&n[r];if(F(t)||he(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ue(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const us=t=>t?ba(t)?zs(t)||t.proxy:us(t.parent):null,ur=ve(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>us(t.parent),$root:t=>us(t.root),$emit:t=>t.emit,$options:t=>aa(t),$forceUpdate:t=>()=>Yo(t.update),$nextTick:t=>Us.bind(t.proxy),$watch:t=>Ml.bind(t)}),gu={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==Z&&q(r,e))return o[e]=1,r[e];if(s!==Z&&q(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&q(l,e))return o[e]=3,i[e];if(n!==Z&&q(n,e))return o[e]=4,n[e];is&&(o[e]=0)}}const f=ur[e];let h,p;if(f)return e==="$attrs"&&we(t,"get",e),f(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Z&&q(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,q(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==Z&&q(s,e)?(s[e]=n,!0):r!==Z&&q(r,e)?(r[e]=n,!0):q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Z&&q(t,o)||e!==Z&&q(e,o)||(a=i[0])&&q(a,o)||q(r,o)||q(ur,o)||q(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?this.set(t,e,n.get(),null):n.value!=null&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},mu=ha();let _u=0;function vu(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||mu,i={uid:_u++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Co(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:la(r,s),emitsOptions:ta(r,s),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:r.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Sl.bind(null,i),t.ce&&t.ce(i),i}let fe=null;const ya=()=>fe||Se,qt=t=>{fe=t,t.scope.on()},Tt=()=>{fe&&fe.scope.off(),fe=null};function ba(t){return t.vnode.shapeFlag&4}let Cn=!1;function yu(t,e=!1){Cn=e;const{props:n,children:r}=t.vnode,s=ba(t);Yl(t,n,s,e),Zl(t,r);const i=s?bu(t,e):void 0;return Cn=!1,i}function bu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Kt(new Proxy(t.ctx,gu));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Eu(t):null;qt(t),Qt();const i=dt(r,t,0,[t.props,s]);if(Zt(),Tt(),Ro(i)){if(i.then(Tt,Tt),e)return i.then(o=>{Si(t,o,e)}).catch(o=>{Rr(o,t,0)});t.asyncDep=i}else Si(t,i,e)}else Ia(t,e)}function Si(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ue(e)&&(t.setupState=Ko(e)),Ia(t,n)}let Ai;function Ia(t,e,n){const r=t.type;if(!t.render){if(!e&&Ai&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=ve(ve({isCustomElement:i,delimiters:a},o),c);r.render=Ai(s,l)}}t.render=r.render||Ne}qt(t),Qt(),zl(t),Zt(),Tt()}function Iu(t){return new Proxy(t.attrs,{get(e,n){return we(t,"get","$attrs"),e[n]}})}function Eu(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Iu(t))},slots:t.slots,emit:t.emit,expose:e}}function zs(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ko(Kt(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ur)return ur[n](t)}}))}function wu(t){return H(t)&&t.displayName||t.name}function Tu(t){return H(t)&&"__vccOpts"in t}const ke=(t,e)=>bl(t,e,Cn);function Ea(t,e,n){const r=arguments.length;return r===2?ue(e)&&!F(e)?ls(e)?de(t,null,[e]):de(t,e):de(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ls(n)&&(n=[n]),de(t,e,n))}const Ru="3.2.31",Su="http://www.w3.org/2000/svg",vt=typeof document!="undefined"?document:null,Ci=vt&&vt.createElement("template"),Au={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?vt.createElementNS(Su,t):vt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>vt.createTextNode(t),createComment:t=>vt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>vt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ci.innerHTML=r?`<svg>${t}</svg>`:t;const a=Ci.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Cu(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Ou(t,e,n){const r=t.style,s=he(n);if(n&&!s){for(const i in n)fs(r,i,n[i]);if(e&&!he(e))for(const i in e)n[i]==null&&fs(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Oi=/\s*!important$/;function fs(t,e,n){if(F(n))n.forEach(r=>fs(t,e,r));else if(e.startsWith("--"))t.setProperty(e,n);else{const r=Pu(t,e);Oi.test(n)?t.setProperty(Xt(r),n.replace(Oi,""),"important"):t[r]=n}}const Pi=["Webkit","Moz","ms"],Hr={};function Pu(t,e){const n=Hr[e];if(n)return n;let r=We(e);if(r!=="filter"&&r in t)return Hr[e]=r;r=Er(r);for(let s=0;s<Pi.length;s++){const i=Pi[s]+r;if(i in t)return Hr[e]=i}return e}const ki="http://www.w3.org/1999/xlink";function ku(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ki,e.slice(6,e.length)):t.setAttributeNS(ki,e,n);else{const i=kc(e);n==null||i&&!Eo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Nu(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=Eo(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let fr=Date.now,wa=!1;if(typeof window!="undefined"){fr()>document.createEvent("Event").timeStamp&&(fr=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);wa=!!(t&&Number(t[1])<=53)}let ds=0;const Mu=Promise.resolve(),Du=()=>{ds=0},xu=()=>ds||(Mu.then(Du),ds=fr());function Ft(t,e,n,r){t.addEventListener(e,n,r)}function Lu(t,e,n,r){t.removeEventListener(e,n,r)}function Uu(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Fu(e);if(r){const l=i[e]=$u(r,s);Ft(t,a,l,c)}else o&&(Lu(t,a,o,c),i[e]=void 0)}}const Ni=/(?:Once|Passive|Capture)$/;function Fu(t){let e;if(Ni.test(t)){e={};let n;for(;n=t.match(Ni);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Xt(t.slice(2)),e]}function $u(t,e){const n=r=>{const s=r.timeStamp||fr();(wa||s>=n.attached-1)&&Me(Bu(r,n.value),e,5,[r])};return n.value=t,n.attached=xu(),n}function Bu(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Mi=/^on[a-z]/,Hu=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Cu(t,r,s):e==="style"?Ou(t,n,r):yr(e)?Rs(e)||Uu(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ju(t,e,r,s))?Nu(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ku(t,e,r,s))};function ju(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Mi.test(e)&&H(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Mi.test(e)&&he(n)?!1:e in t}const Di=t=>{const e=t.props["onUpdate:modelValue"];return F(e)?n=>Xn(e,n):e};function Wu(t){t.target.composing=!0}function xi(t){const e=t.target;e.composing&&(e.composing=!1,Vu(e,"input"))}function Vu(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const kg={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Di(s);const i=r||s.props&&s.props.type==="number";Ft(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=Xr(a)),t._assign(a)}),n&&Ft(t,"change",()=>{t.value=t.value.trim()}),e||(Ft(t,"compositionstart",Wu),Ft(t,"compositionend",xi),Ft(t,"change",xi))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Di(i),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Xr(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},zu=ve({patchProp:Hu},Au);let Li;function Ku(){return Li||(Li=ru(zu))}const qu=(...t)=>{const e=Ku().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Gu(r);if(!s)return;const i=e._component;!H(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Gu(t){return he(t)?document.querySelector(t):t}var Ta=!1;/*!
  * pinia v2.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Ra;const Pr=t=>Ra=t,Sa=Symbol();function hs(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var yn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(yn||(yn={}));function Ju(){const t=Oo(!0),e=t.run(()=>Tr({}));let n=[],r=[];const s=Kt({install(i){Pr(s),s._a=i,i.provide(Sa,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Ta?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Aa=()=>{};function Ui(t,e,n,r=Aa){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&ya()&&Hs(s),s}function Dt(t,...e){t.slice().forEach(n=>{n(...e)})}function ps(t,e){for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];hs(s)&&hs(r)&&t.hasOwnProperty(n)&&!oe(r)&&!Ye(r)?t[n]=ps(s,r):t[n]=r}return t}const Yu=Symbol();function Xu(t){return!hs(t)||!t.hasOwnProperty(Yu)}const{assign:Ke}=Object;function Qu(t){return!!(oe(t)&&t.effect)}function Zu(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const f=qo(n.state.value[t]);return Ke(f,i,Object.keys(o||{}).reduce((h,p)=>(h[p]=Kt(ke(()=>{Pr(n);const y=n._s.get(t);return o[p].call(y,y)})),h),{}))}return c=Ca(t,l,e,n),c.$reset=function(){const h=s?s():{};this.$patch(p=>{Ke(p,h)})},c}function Ca(t,e,n={},r,s){let i;const o=n.state,a=Ke({actions:{}},n),c={deep:!0};let l,f,h=Kt([]),p=Kt([]),y;const R=r.state.value[t];!o&&!R&&(r.state.value[t]={}),Tr({});function D(j){let V;l=f=!1,typeof j=="function"?(j(r.state.value[t]),V={type:yn.patchFunction,storeId:t,events:y}):(ps(r.state.value[t],j),V={type:yn.patchObject,payload:j,storeId:t,events:y}),Us().then(()=>{l=!0}),f=!0,Dt(h,V,r.state.value[t])}const A=Aa;function C(){i.stop(),h=[],p=[],r._s.delete(t)}function L(j,V){return function(){Pr(r);const me=Array.from(arguments),ae=[],pe=[];function Ce(ce){ae.push(ce)}function Oe(ce){pe.push(ce)}Dt(p,{args:me,name:j,store:$,after:Ce,onError:Oe});let Te;try{Te=V.apply(this&&this.$id===t?this:$,me)}catch(ce){throw Dt(pe,ce),ce}return Te instanceof Promise?Te.then(ce=>(Dt(ae,ce),ce)).catch(ce=>(Dt(pe,ce),Promise.reject(ce))):(Dt(ae,Te),Te)}}const z={_p:r,$id:t,$onAction:Ui.bind(null,p),$patch:D,$reset:A,$subscribe(j,V={}){const me=Ui(h,j,V.detached,()=>ae()),ae=i.run(()=>_n(()=>r.state.value[t],pe=>{(V.flush==="sync"?f:l)&&j({storeId:t,type:yn.direct,events:y},pe)},Ke({},c,V)));return me},$dispose:C},$=en(Ke({},z));r._s.set(t,$);const ie=r._e.run(()=>(i=Oo(),i.run(()=>e())));for(const j in ie){const V=ie[j];if(oe(V)&&!Qu(V)||Ye(V))o||(R&&Xu(V)&&(oe(V)?V.value=R[j]:ps(V,R[j])),r.state.value[t][j]=V);else if(typeof V=="function"){const me=L(j,V);ie[j]=me,a.actions[j]=V}}return Ke($,ie),Ke(G($),ie),Object.defineProperty($,"$state",{get:()=>r.state.value[t],set:j=>{D(V=>{Ke(V,j)})}}),r._p.forEach(j=>{Ke($,i.run(()=>j({store:$,app:r._a,pinia:r,options:a})))}),R&&o&&n.hydrate&&n.hydrate($.$state,R),l=!0,f=!0,$}function Ng(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=ya();return a=a||l&&De(Sa),a&&Pr(a),a=Ra,a._s.has(r)||(i?Ca(r,e,s,a):Zu(r,s,a)),a._s.get(r)}return o.$id=r,o}function Mg(t){if(Ta)return qo(t);{t=G(t);const e={};for(const n in t){const r=t[n];(oe(r)||Ye(r))&&(e[n]=Go(t,n))}return e}}/**
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
 */const Oa=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ef=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Pa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,f=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,y=l&63;c||(y=64,o||(p=64)),r.push(n[f],n[h],n[p],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Oa(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ef(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const p=i<<2|a>>4;if(r.push(p),l!==64){const y=a<<4&240|l>>2;if(r.push(y),h!==64){const R=l<<6&192|h;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},tf=function(t){const e=Oa(t);return Pa.encodeByteArray(e,!0)},ka=function(t){return tf(t).replace(/\./g,"")},nf=function(t){try{return Pa.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class rf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ge(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sf(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ge())}function of(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function af(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cf(){const t=ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function lf(){return typeof indexedDB=="object"}function uf(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const ff="FirebaseError";class tn extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=ff,Object.setPrototypeOf(this,tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ln.prototype.create)}}class Ln{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?df(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new tn(s,a,r)}}function df(t,e){return t.replace(hf,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const hf=/\{\$([^}]+)}/g;function pf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function dr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Fi(i)&&Fi(o)){if(!dr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Fi(t){return t!==null&&typeof t=="object"}/**
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
 */function Un(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function dn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function hn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function gf(t,e){const n=new mf(t,e);return n.subscribe.bind(n)}class mf{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");_f(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=jr),s.error===void 0&&(s.error=jr),s.complete===void 0&&(s.complete=jr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _f(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function jr(){}/**
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
 */function Pt(t){return t&&t._delegate?t._delegate:t}/**
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
 */function pn(t,e){return new Promise((n,r)=>{t.onsuccess=s=>{n(s.target.result)},t.onerror=s=>{var i;r(`${e}: ${(i=s.target.error)===null||i===void 0?void 0:i.message}`)}})}class $i{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n){return new Na(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new Ma(this._db.createObjectStore(e,n))}close(){this._db.close()}}class Na{constructor(e){this._transaction=e,this.complete=new Promise((n,r)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{r(this._transaction.error)},this._transaction.onabort=()=>{r(this._transaction.error)}})}objectStore(e){return new Ma(this._transaction.objectStore(e))}}class Ma{constructor(e){this._store=e}index(e){return new Bi(this._store.index(e))}createIndex(e,n,r){return new Bi(this._store.createIndex(e,n,r))}get(e){const n=this._store.get(e);return pn(n,"Error reading from IndexedDB")}put(e,n){const r=this._store.put(e,n);return pn(r,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return pn(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return pn(e,"Error clearing IndexedDB object store")}}class Bi{constructor(e){this._index=e}get(e){const n=this._index.get(e);return pn(n,"Error reading from IndexedDB")}}function vf(t,e,n){return new Promise((r,s)=>{try{const i=indexedDB.open(t,e);i.onsuccess=o=>{r(new $i(o.target.result))},i.onerror=o=>{var a;s(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},i.onupgradeneeded=o=>{n(new $i(i.result),o.oldVersion,o.newVersion,new Na(i.transaction))}}catch(i){s(`Error opening indexedDB: ${i.message}`)}})}class Gt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const _t="[DEFAULT]";/**
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
 */class yf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new rf;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(If(e))try{this.getOrInitializeService({instanceIdentifier:_t})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=_t){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_t){return this.instances.has(e)}getOptions(e=_t){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bf(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_t){return this.component?this.component.multipleInstances?e:_t:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bf(t){return t===_t?void 0:t}function If(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ef{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new yf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const wf={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},Tf=ne.INFO,Rf={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},Sf=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Rf[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Da{constructor(e){this.name=e,this._logLevel=Tf,this._logHandler=Sf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}/**
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
 */class Af{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Cf(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Cf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gs="@firebase/app",Hi="0.7.20";/**
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
 */const Ks=new Da("@firebase/app"),Of="@firebase/app-compat",Pf="@firebase/analytics-compat",kf="@firebase/analytics",Nf="@firebase/app-check-compat",Mf="@firebase/app-check",Df="@firebase/auth",xf="@firebase/auth-compat",Lf="@firebase/database",Uf="@firebase/database-compat",Ff="@firebase/functions",$f="@firebase/functions-compat",Bf="@firebase/installations",Hf="@firebase/installations-compat",jf="@firebase/messaging",Wf="@firebase/messaging-compat",Vf="@firebase/performance",zf="@firebase/performance-compat",Kf="@firebase/remote-config",qf="@firebase/remote-config-compat",Gf="@firebase/storage",Jf="@firebase/storage-compat",Yf="@firebase/firestore",Xf="@firebase/firestore-compat",Qf="firebase",Zf="9.6.10";/**
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
 */const xa="[DEFAULT]",ed={[gs]:"fire-core",[Of]:"fire-core-compat",[kf]:"fire-analytics",[Pf]:"fire-analytics-compat",[Mf]:"fire-app-check",[Nf]:"fire-app-check-compat",[Df]:"fire-auth",[xf]:"fire-auth-compat",[Lf]:"fire-rtdb",[Uf]:"fire-rtdb-compat",[Ff]:"fire-fn",[$f]:"fire-fn-compat",[Bf]:"fire-iid",[Hf]:"fire-iid-compat",[jf]:"fire-fcm",[Wf]:"fire-fcm-compat",[Vf]:"fire-perf",[zf]:"fire-perf-compat",[Kf]:"fire-rc",[qf]:"fire-rc-compat",[Gf]:"fire-gcs",[Jf]:"fire-gcs-compat",[Yf]:"fire-fst",[Xf]:"fire-fst-compat","fire-js":"fire-js",[Qf]:"fire-js-all"};/**
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
 */const hr=new Map,ms=new Map;function td(t,e){try{t.container.addComponent(e)}catch(n){Ks.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function On(t){const e=t.name;if(ms.has(e))return Ks.debug(`There were multiple attempts to register component ${e}.`),!1;ms.set(e,t);for(const n of hr.values())td(n,t);return!0}function La(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const nd={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},At=new Ln("app","Firebase",nd);/**
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
 */class rd{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw At.create("app-deleted",{appName:this._name})}}/**
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
 */const kr=Zf;function sd(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:xa,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw At.create("bad-app-name",{appName:String(r)});const s=hr.get(r);if(s){if(dr(t,s.options)&&dr(n,s.config))return s;throw At.create("duplicate-app",{appName:r})}const i=new Ef(r);for(const a of ms.values())i.addComponent(a);const o=new rd(t,n,i);return hr.set(r,o),o}function id(t=xa){const e=hr.get(t);if(!e)throw At.create("no-app",{appName:t});return e}function Wt(t,e,n){var r;let s=(r=ed[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ks.warn(a.join(" "));return}On(new Gt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const od="firebase-heartbeat-database",ad=1,Pn="firebase-heartbeat-store";let Wr=null;function Ua(){return Wr||(Wr=vf(od,ad,(t,e)=>{switch(e){case 0:t.createObjectStore(Pn)}}).catch(t=>{throw At.create("storage-open",{originalErrorMessage:t.message})})),Wr}async function cd(t){try{return(await Ua()).transaction(Pn).objectStore(Pn).get(Fa(t))}catch(e){throw At.create("storage-get",{originalErrorMessage:e.message})}}async function ji(t,e){try{const r=(await Ua()).transaction(Pn,"readwrite");return await r.objectStore(Pn).put(e,Fa(t)),r.complete}catch(n){throw At.create("storage-set",{originalErrorMessage:n.message})}}function Fa(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ld=1024,ud=30*24*60*60*1e3;class fd{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hd(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Wi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=ud}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Wi(),{heartbeatsToSend:n,unsentEntries:r}=dd(this._heartbeatsCache.heartbeats),s=ka(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Wi(){return new Date().toISOString().substring(0,10)}function dd(t,e=ld){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Vi(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Vi(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lf()?uf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await cd(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ji(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ji(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Vi(t){return ka(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function pd(t){On(new Gt("platform-logger",e=>new Af(e),"PRIVATE")),On(new Gt("heartbeat",e=>new fd(e),"PRIVATE")),Wt(gs,Hi,t),Wt(gs,Hi,"esm2017"),Wt("fire-js","")}pd("");var gd="firebase",md="9.6.10";/**
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
 */Wt(gd,md,"app");/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const $a=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",nn=t=>$a?Symbol(t):"_vr_"+t,_d=nn("rvlm"),zi=nn("rvd"),Nr=nn("r"),qs=nn("rl"),_s=nn("rvl"),$t=typeof window!="undefined";function vd(t){return t.__esModule||$a&&t[Symbol.toStringTag]==="Module"}const Q=Object.assign;function Vr(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const bn=()=>{},yd=/\/$/,bd=t=>t.replace(yd,"");function zr(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Td(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Id(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ki(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Ed(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Jt(e.matched[r],n.matched[s])&&Ba(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Jt(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ba(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!wd(t[n],e[n]))return!1;return!0}function wd(t,e){return Array.isArray(t)?qi(t,e):Array.isArray(e)?qi(e,t):t===e}function qi(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Td(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var kn;(function(t){t.pop="pop",t.push="push"})(kn||(kn={}));var In;(function(t){t.back="back",t.forward="forward",t.unknown=""})(In||(In={}));function Rd(t){if(!t)if($t){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),bd(t)}const Sd=/^[^#]+#/;function Ad(t,e){return t.replace(Sd,"#")+e}function Cd(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Mr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Od(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Cd(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Gi(t,e){return(history.state?history.state.position-e:-1)+t}const vs=new Map;function Pd(t,e){vs.set(t,e)}function kd(t){const e=vs.get(t);return vs.delete(t),e}let Nd=()=>location.protocol+"//"+location.host;function Ha(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Ki(c,"")}return Ki(n,t)+r+s}function Md(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const y=Ha(t,location),R=n.value,D=e.value;let A=0;if(p){if(n.value=y,e.value=p,o&&o===R){o=null;return}A=D?p.position-D.position:0}else r(y);s.forEach(C=>{C(n.value,R,{delta:A,type:kn.pop,direction:A?A>0?In.forward:In.back:In.unknown})})};function c(){o=n.value}function l(p){s.push(p);const y=()=>{const R=s.indexOf(p);R>-1&&s.splice(R,1)};return i.push(y),y}function f(){const{history:p}=window;!p.state||p.replaceState(Q({},p.state,{scroll:Mr()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f),{pauseListeners:c,listen:l,destroy:h}}function Ji(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Mr():null}}function Dd(t){const{history:e,location:n}=window,r={value:Ha(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Nd()+t+c;try{e[f?"replaceState":"pushState"](l,"",p),s.value=l}catch(y){console.error(y),n[f?"replace":"assign"](p)}}function o(c,l){const f=Q({},e.state,Ji(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,f,!0),r.value=c}function a(c,l){const f=Q({},s.value,e.state,{forward:c,scroll:Mr()});i(f.current,f,!0);const h=Q({},Ji(r.value,c,null),{position:f.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function xd(t){t=Rd(t);const e=Dd(t),n=Md(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Q({location:"",base:t,go:r,createHref:Ad.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Ld(t){return typeof t=="string"||t&&typeof t=="object"}function ja(t){return typeof t=="string"||typeof t=="symbol"}const tt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Wa=nn("nf");var Yi;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Yi||(Yi={}));function Yt(t,e){return Q(new Error,{type:t,[Wa]:!0},e)}function nt(t,e){return t instanceof Error&&Wa in t&&(e==null||!!(t.type&e))}const Xi="[^/]+?",Ud={sensitive:!1,strict:!1,start:!0,end:!0},Fd=/[.+*?^${}()[\]/\\]/g;function $d(t,e){const n=Q({},Ud,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const p=l[h];let y=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(Fd,"\\$&"),y+=40;else if(p.type===1){const{value:R,repeatable:D,optional:A,regexp:C}=p;i.push({name:R,repeatable:D,optional:A});const L=C||Xi;if(L!==Xi){y+=10;try{new RegExp(`(${L})`)}catch($){throw new Error(`Invalid custom RegExp for param "${R}" (${L}): `+$.message)}}let z=D?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;h||(z=A&&l.length<2?`(?:/${z})`:"/"+z),A&&(z+="?"),s+=z,y+=20,A&&(y+=-8),D&&(y+=-20),L===".*"&&(y+=-50)}f.push(y)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const f=l.match(o),h={};if(!f)return null;for(let p=1;p<f.length;p++){const y=f[p]||"",R=i[p-1];h[R.name]=y&&R.repeatable?y.split("/"):y}return h}function c(l){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const y of p)if(y.type===0)f+=y.value;else if(y.type===1){const{value:R,repeatable:D,optional:A}=y,C=R in l?l[R]:"";if(Array.isArray(C)&&!D)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const L=Array.isArray(C)?C.join("/"):C;if(!L)if(A)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${R}"`);f+=L}}return f}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Bd(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Hd(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Bd(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const jd={type:0,value:""},Wd=/[a-zA-Z0-9_]/;function Vd(t){if(!t)return[[]];if(t==="/")return[[jd]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${l}": ${y}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",f="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:Wd.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function zd(t,e,n){const r=$d(Vd(t.path),n),s=Q(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Kd(t,e){const n=[],r=new Map;e=Zi({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,h,p){const y=!p,R=Gd(f);R.aliasOf=p&&p.record;const D=Zi(e,f),A=[R];if("alias"in f){const z=typeof f.alias=="string"?[f.alias]:f.alias;for(const $ of z)A.push(Q({},R,{components:p?p.record.components:R.components,path:$,aliasOf:p?p.record:R}))}let C,L;for(const z of A){const{path:$}=z;if(h&&$[0]!=="/"){const ie=h.record.path,j=ie[ie.length-1]==="/"?"":"/";z.path=h.record.path+($&&j+$)}if(C=zd(z,h,D),p?p.alias.push(C):(L=L||C,L!==C&&L.alias.push(C),y&&f.name&&!Qi(C)&&o(f.name)),"children"in R){const ie=R.children;for(let j=0;j<ie.length;j++)i(ie[j],C,p&&p.children[j])}p=p||C,c(C)}return L?()=>{o(L)}:bn}function o(f){if(ja(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){let h=0;for(;h<n.length&&Hd(f,n[h])>=0&&(f.record.path!==n[h].record.path||!Va(f,n[h]));)h++;n.splice(h,0,f),f.record.name&&!Qi(f)&&r.set(f.record.name,f)}function l(f,h){let p,y={},R,D;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw Yt(1,{location:f});D=p.record.name,y=Q(qd(h.params,p.keys.filter(L=>!L.optional).map(L=>L.name)),f.params),R=p.stringify(y)}else if("path"in f)R=f.path,p=n.find(L=>L.re.test(R)),p&&(y=p.parse(R),D=p.record.name);else{if(p=h.name?r.get(h.name):n.find(L=>L.re.test(h.path)),!p)throw Yt(1,{location:f,currentLocation:h});D=p.record.name,y=Q({},h.params,f.params),R=p.stringify(y)}const A=[];let C=p;for(;C;)A.unshift(C.record),C=C.parent;return{name:D,path:R,params:y,matched:A,meta:Yd(A)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function qd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Gd(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Jd(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function Jd(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Qi(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Yd(t){return t.reduce((e,n)=>Q(e,n.meta),{})}function Zi(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Va(t,e){return e.children.some(n=>n===t||Va(t,n))}const za=/#/g,Xd=/&/g,Qd=/\//g,Zd=/=/g,eh=/\?/g,Ka=/\+/g,th=/%5B/g,nh=/%5D/g,qa=/%5E/g,rh=/%60/g,Ga=/%7B/g,sh=/%7C/g,Ja=/%7D/g,ih=/%20/g;function Gs(t){return encodeURI(""+t).replace(sh,"|").replace(th,"[").replace(nh,"]")}function oh(t){return Gs(t).replace(Ga,"{").replace(Ja,"}").replace(qa,"^")}function ys(t){return Gs(t).replace(Ka,"%2B").replace(ih,"+").replace(za,"%23").replace(Xd,"%26").replace(rh,"`").replace(Ga,"{").replace(Ja,"}").replace(qa,"^")}function ah(t){return ys(t).replace(Zd,"%3D")}function ch(t){return Gs(t).replace(za,"%23").replace(eh,"%3F")}function lh(t){return t==null?"":ch(t).replace(Qd,"%2F")}function pr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function uh(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Ka," "),o=i.indexOf("="),a=pr(o<0?i:i.slice(0,o)),c=o<0?null:pr(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function eo(t){let e="";for(let n in t){const r=t[n];if(n=ah(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&ys(i)):[r&&ys(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function fh(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function an(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ot(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Yt(4,{from:n,to:e})):h instanceof Error?a(h):Ld(h)?a(Yt(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let f=Promise.resolve(l);t.length<3&&(f=f.then(c)),f.catch(h=>a(h))})}function Kr(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(dh(a)){const l=(a.__vccOpts||a)[e];l&&s.push(ot(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=vd(l)?l.default:l;i.components[o]=f;const p=(f.__vccOpts||f)[e];return p&&ot(p,n,r,i,o)()}))}}return s}function dh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function to(t){const e=De(Nr),n=De(qs),r=ke(()=>e.resolve(Et(t.to))),s=ke(()=>{const{matched:c}=r.value,{length:l}=c,f=c[l-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(Jt.bind(null,f));if(p>-1)return p;const y=no(c[l-2]);return l>1&&no(f)===y&&h[h.length-1].path!==y?h.findIndex(Jt.bind(null,c[l-2])):p}),i=ke(()=>s.value>-1&&mh(n.params,r.value.params)),o=ke(()=>s.value>-1&&s.value===n.matched.length-1&&Ba(n.params,r.value.params));function a(c={}){return gh(c)?e[Et(t.replace)?"replace":"push"](Et(t.to)).catch(bn):Promise.resolve()}return{route:r,href:ke(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const hh=Ar({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:to,setup(t,{slots:e}){const n=en(to(t)),{options:r}=De(Nr),s=ke(()=>({[ro(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ro(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ea("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),ph=hh;function gh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function mh(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function no(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ro=(t,e,n)=>t!=null?t:e!=null?e:n,_h=Ar({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=De(_s),s=ke(()=>t.route||r.value),i=De(zi,0),o=ke(()=>s.value.matched[i]);Qn(zi,i+1),Qn(_d,o),Qn(_s,s);const a=Tr();return _n(()=>[a.value,o.value,t.name],([c,l,f],[h,p,y])=>{l&&(l.instances[f]=c,p&&p!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=p.leaveGuards),l.updateGuards.size||(l.updateGuards=p.updateGuards))),c&&l&&(!p||!Jt(l,p)||!h)&&(l.enterCallbacks[f]||[]).forEach(R=>R(c))},{flush:"post"}),()=>{const c=s.value,l=o.value,f=l&&l.components[t.name],h=t.name;if(!f)return so(n.default,{Component:f,route:c});const p=l.props[t.name],y=p?p===!0?c.params:typeof p=="function"?p(c):p:null,D=Ea(f,Q({},y,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return so(n.default,{Component:D,route:c})||D}}});function so(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Ya=_h;function vh(t){const e=Kd(t.routes,t),n=t.parseQuery||uh,r=t.stringifyQuery||eo,s=t.history,i=an(),o=an(),a=an(),c=gl(tt);let l=tt;$t&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Vr.bind(null,m=>""+m),h=Vr.bind(null,lh),p=Vr.bind(null,pr);function y(m,P){let T,k;return ja(m)?(T=e.getRecordMatcher(m),k=P):k=m,e.addRoute(k,T)}function R(m){const P=e.getRecordMatcher(m);P&&e.removeRoute(P)}function D(){return e.getRoutes().map(m=>m.record)}function A(m){return!!e.getRecordMatcher(m)}function C(m,P){if(P=Q({},P||c.value),typeof m=="string"){const B=zr(n,m,P.path),u=e.resolve({path:B.path},P),d=s.createHref(B.fullPath);return Q(B,u,{params:p(u.params),hash:pr(B.hash),redirectedFrom:void 0,href:d})}let T;if("path"in m)T=Q({},m,{path:zr(n,m.path,P.path).path});else{const B=Q({},m.params);for(const u in B)B[u]==null&&delete B[u];T=Q({},m,{params:h(m.params)}),P.params=h(P.params)}const k=e.resolve(T,P),Y=m.hash||"";k.params=f(p(k.params));const te=Id(r,Q({},m,{hash:oh(Y),path:k.path})),W=s.createHref(te);return Q({fullPath:te,hash:Y,query:r===eo?fh(m.query):m.query||{}},k,{redirectedFrom:void 0,href:W})}function L(m){return typeof m=="string"?zr(n,m,c.value.path):Q({},m)}function z(m,P){if(l!==m)return Yt(8,{from:P,to:m})}function $(m){return V(m)}function ie(m){return $(Q(L(m),{replace:!0}))}function j(m){const P=m.matched[m.matched.length-1];if(P&&P.redirect){const{redirect:T}=P;let k=typeof T=="function"?T(m):T;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=L(k):{path:k},k.params={}),Q({query:m.query,hash:m.hash,params:m.params},k)}}function V(m,P){const T=l=C(m),k=c.value,Y=m.state,te=m.force,W=m.replace===!0,B=j(T);if(B)return V(Q(L(B),{state:Y,force:te,replace:W}),P||T);const u=T;u.redirectedFrom=P;let d;return!te&&Ed(r,k,T)&&(d=Yt(16,{to:u,from:k}),Nt(k,k,!0,!1)),(d?Promise.resolve(d):ae(u,k)).catch(g=>nt(g)?nt(g,2)?g:be(g):ee(g,u,k)).then(g=>{if(g){if(nt(g,2))return V(Q(L(g.to),{state:Y,force:te,replace:W}),P||u)}else g=Ce(u,k,!0,W,Y);return pe(u,k,g),g})}function me(m,P){const T=z(m,P);return T?Promise.reject(T):Promise.resolve()}function ae(m,P){let T;const[k,Y,te]=yh(m,P);T=Kr(k.reverse(),"beforeRouteLeave",m,P);for(const B of k)B.leaveGuards.forEach(u=>{T.push(ot(u,m,P))});const W=me.bind(null,m,P);return T.push(W),xt(T).then(()=>{T=[];for(const B of i.list())T.push(ot(B,m,P));return T.push(W),xt(T)}).then(()=>{T=Kr(Y,"beforeRouteUpdate",m,P);for(const B of Y)B.updateGuards.forEach(u=>{T.push(ot(u,m,P))});return T.push(W),xt(T)}).then(()=>{T=[];for(const B of m.matched)if(B.beforeEnter&&!P.matched.includes(B))if(Array.isArray(B.beforeEnter))for(const u of B.beforeEnter)T.push(ot(u,m,P));else T.push(ot(B.beforeEnter,m,P));return T.push(W),xt(T)}).then(()=>(m.matched.forEach(B=>B.enterCallbacks={}),T=Kr(te,"beforeRouteEnter",m,P),T.push(W),xt(T))).then(()=>{T=[];for(const B of o.list())T.push(ot(B,m,P));return T.push(W),xt(T)}).catch(B=>nt(B,8)?B:Promise.reject(B))}function pe(m,P,T){for(const k of a.list())k(m,P,T)}function Ce(m,P,T,k,Y){const te=z(m,P);if(te)return te;const W=P===tt,B=$t?history.state:{};T&&(k||W?s.replace(m.fullPath,Q({scroll:W&&B&&B.scroll},Y)):s.push(m.fullPath,Y)),c.value=m,Nt(m,P,T,W),be()}let Oe;function Te(){Oe=s.listen((m,P,T)=>{const k=C(m),Y=j(k);if(Y){V(Q(Y,{replace:!0}),k).catch(bn);return}l=k;const te=c.value;$t&&Pd(Gi(te.fullPath,T.delta),Mr()),ae(k,te).catch(W=>nt(W,12)?W:nt(W,2)?(V(W.to,k).then(B=>{nt(B,20)&&!T.delta&&T.type===kn.pop&&s.go(-1,!1)}).catch(bn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),ee(W,k,te))).then(W=>{W=W||Ce(k,te,!1),W&&(T.delta?s.go(-T.delta,!1):T.type===kn.pop&&nt(W,20)&&s.go(-1,!1)),pe(k,te,W)}).catch(bn)})}let ce=an(),kt=an(),le;function ee(m,P,T){be(m);const k=kt.list();return k.length?k.forEach(Y=>Y(m,P,T)):console.error(m),Promise.reject(m)}function J(){return le&&c.value!==tt?Promise.resolve():new Promise((m,P)=>{ce.add([m,P])})}function be(m){return le||(le=!m,Te(),ce.list().forEach(([P,T])=>m?T(m):P()),ce.reset()),m}function Nt(m,P,T,k){const{scrollBehavior:Y}=t;if(!$t||!Y)return Promise.resolve();const te=!T&&kd(Gi(m.fullPath,0))||(k||!T)&&history.state&&history.state.scroll||null;return Us().then(()=>Y(m,P,te)).then(W=>W&&Od(W)).catch(W=>ee(W,m,P))}const Ve=m=>s.go(m);let xe;const Re=new Set;return{currentRoute:c,addRoute:y,removeRoute:R,hasRoute:A,getRoutes:D,resolve:C,options:t,push:$,replace:ie,go:Ve,back:()=>Ve(-1),forward:()=>Ve(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:kt.add,isReady:J,install(m){const P=this;m.component("RouterLink",ph),m.component("RouterView",Ya),m.config.globalProperties.$router=P,Object.defineProperty(m.config.globalProperties,"$route",{enumerable:!0,get:()=>Et(c)}),$t&&!xe&&c.value===tt&&(xe=!0,$(s.location).catch(Y=>{}));const T={};for(const Y in tt)T[Y]=ke(()=>c.value[Y]);m.provide(Nr,P),m.provide(qs,en(T)),m.provide(_s,c);const k=m.unmount;Re.add(m),m.unmount=function(){Re.delete(m),Re.size<1&&(l=tt,Oe&&Oe(),c.value=tt,xe=!1,le=!1),k()}}}}function xt(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function yh(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Jt(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Jt(l,c))||s.push(c))}return[n,r,s]}function bh(){return De(Nr)}function Ih(){return De(qs)}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Js(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Xa(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Eh=Xa,Qa=new Ln("auth","Firebase",Xa());/**
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
 */const io=new Da("@firebase/auth");function tr(t,...e){io.logLevel<=ne.ERROR&&io.error(`Auth (${kr}): ${t}`,...e)}/**
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
 */function Ae(t,...e){throw Ys(t,...e)}function He(t,...e){return Ys(t,...e)}function Za(t,e,n){const r=Object.assign(Object.assign({},Eh()),{[e]:n});return new Ln("auth","Firebase",r).create(e,{appName:t.name})}function wh(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ae(t,"argument-error"),Za(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ys(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Qa.create(t,...e)}function x(t,e,...n){if(!t)throw Ys(e,...n)}function Ge(t){const e="INTERNAL ASSERTION FAILED: "+t;throw tr(e),new Error(e)}function Qe(t,e){t||Ge(e)}/**
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
 */const oo=new Map;function Je(t){Qe(t instanceof Function,"Expected a class definition");let e=oo.get(t);return e?(Qe(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,oo.set(t,e),e)}/**
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
 */function Th(t,e){const n=La(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(dr(i,e!=null?e:{}))return s;Ae(s,"already-initialized")}return n.initialize({options:e})}function Rh(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Je);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function bs(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Sh(){return ao()==="http:"||ao()==="https:"}function ao(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Ah(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Sh()||of()||"connection"in navigator)?navigator.onLine:!0}function Ch(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Fn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qe(n>e,"Short delay should be less than long delay!"),this.isMobile=sf()||af()}get(){return Ah()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Xs(t,e){Qe(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ec{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Ge("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Ge("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Ge("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Oh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Ph=new Fn(3e4,6e4);function $n(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Bn(t,e,n,r,s={}){return tc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Un(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),ec.fetch()(nc(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function tc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Oh),e);try{const s=new kh(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw qr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw qr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw qr(t,"email-already-in-use",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Za(t,f,l);Ae(t,f)}}catch(s){if(s instanceof tn)throw s;Ae(t,"network-request-failed")}}async function Hn(t,e,n,r,s={}){const i=await Bn(t,e,n,r,s);return"mfaPendingCredential"in i&&Ae(t,"multi-factor-auth-required",{_serverResponse:i}),i}function nc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Xs(t.config,s):`${t.config.apiScheme}://${s}`}class kh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(He(this.auth,"network-request-failed")),Ph.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function qr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=He(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function Nh(t,e){return Bn(t,"POST","/v1/accounts:delete",e)}async function Mh(t,e){return Bn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function En(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Dh(t,e=!1){const n=Pt(t),r=await n.getIdToken(e),s=Qs(r);x(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:En(Gr(s.auth_time)),issuedAtTime:En(Gr(s.iat)),expirationTime:En(Gr(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Gr(t){return Number(t)*1e3}function Qs(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return tr("JWT malformed, contained fewer than 3 sections"),null;try{const s=nf(n);return s?JSON.parse(s):(tr("Failed to decode base64 JWT payload"),null)}catch(s){return tr("Caught error parsing JWT payload as JSON",s),null}}function xh(t){const e=Qs(t);return x(e,"internal-error"),x(typeof e.exp!="undefined","internal-error"),x(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Nn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof tn&&Lh(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Lh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Uh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class rc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=En(this.lastLoginAt),this.creationTime=En(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function gr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Nn(t,Mh(n,{idToken:r}));x(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Bh(i.providerUserInfo):[],a=$h(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),f=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new rc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function Fh(t){const e=Pt(t);await gr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $h(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Bh(t){return t.map(e=>{var{providerId:n}=e,r=Js(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Hh(t,e){const n=await tc(t,{},async()=>{const r=Un({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=nc(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ec.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Mn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken!="undefined","internal-error"),x(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):xh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return x(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Hh(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Mn;return r&&(x(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(x(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(x(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mn,this.toJSON())}_performRefresh(){return Ge("not implemented")}}/**
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
 */function rt(t,e){x(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Rt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Js(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Uh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new rc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Nn(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Dh(this,e)}reload(){return Fh(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Rt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await gr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Nn(this,Nh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=n.createdAt)!==null&&l!==void 0?l:void 0,L=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:z,emailVerified:$,isAnonymous:ie,providerData:j,stsTokenManager:V}=n;x(z&&V,e,"internal-error");const me=Mn.fromJSON(this.name,V);x(typeof z=="string",e,"internal-error"),rt(h,e.name),rt(p,e.name),x(typeof $=="boolean",e,"internal-error"),x(typeof ie=="boolean",e,"internal-error"),rt(y,e.name),rt(R,e.name),rt(D,e.name),rt(A,e.name),rt(C,e.name),rt(L,e.name);const ae=new Rt({uid:z,auth:e,email:p,emailVerified:$,displayName:h,isAnonymous:ie,photoURL:R,phoneNumber:y,tenantId:D,stsTokenManager:me,createdAt:C,lastLoginAt:L});return j&&Array.isArray(j)&&(ae.providerData=j.map(pe=>Object.assign({},pe))),A&&(ae._redirectEventId=A),ae}static async _fromIdTokenResponse(e,n,r=!1){const s=new Mn;s.updateFromServerResponse(n);const i=new Rt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await gr(i),i}}/**
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
 */class sc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}sc.type="NONE";const co=sc;/**
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
 */function nr(t,e,n){return`firebase:${t}:${e}:${n}`}class Vt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=nr(this.userKey,s.apiKey,i),this.fullPersistenceKey=nr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Rt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Vt(Je(co),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Je(co);const o=nr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const f=await l._get(o);if(f){const h=Rt._fromJSON(e,f);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Vt(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Vt(i,e,r))}}/**
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
 */function lo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ac(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ic(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lc(e))return"Blackberry";if(uc(e))return"Webos";if(Zs(e))return"Safari";if((e.includes("chrome/")||oc(e))&&!e.includes("edge/"))return"Chrome";if(cc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ic(t=ge()){return/firefox\//i.test(t)}function Zs(t=ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function oc(t=ge()){return/crios\//i.test(t)}function ac(t=ge()){return/iemobile/i.test(t)}function cc(t=ge()){return/android/i.test(t)}function lc(t=ge()){return/blackberry/i.test(t)}function uc(t=ge()){return/webos/i.test(t)}function Dr(t=ge()){return/iphone|ipad|ipod/i.test(t)}function jh(t=ge()){var e;return Dr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Wh(){return cf()&&document.documentMode===10}function fc(t=ge()){return Dr(t)||cc(t)||uc(t)||lc(t)||/windows phone/i.test(t)||ac(t)}function Vh(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function dc(t,e=[]){let n;switch(t){case"Browser":n=lo(ge());break;case"Worker":n=`${lo(ge())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${kr}/${r}`}/**
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
 */class zh{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uo(this),this.idTokenSubscription=new uo(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qa,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Je(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Vt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===i)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await gr(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ch()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Pt(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Je(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ln("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Je(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await Vt.create(this,[Je(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return x(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function jn(t){return Pt(t)}class uo{constructor(e){this.auth=e,this.observer=null,this.addObserver=gf(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class ei{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ge("not implemented")}_getIdTokenResponse(e){return Ge("not implemented")}_linkToIdToken(e,n){return Ge("not implemented")}_getReauthenticationResolver(e){return Ge("not implemented")}}async function Kh(t,e){return Bn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function qh(t,e){return Hn(t,"POST","/v1/accounts:signInWithPassword",$n(t,e))}/**
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
 */async function Gh(t,e){return Hn(t,"POST","/v1/accounts:signInWithEmailLink",$n(t,e))}async function Jh(t,e){return Hn(t,"POST","/v1/accounts:signInWithEmailLink",$n(t,e))}/**
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
 */class Dn extends ei{constructor(e,n,r,s=null){super("password",r);this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Dn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Dn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return qh(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Gh(e,{email:this._email,oobCode:this._password});default:Ae(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Kh(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Jh(e,{idToken:n,email:this._email,oobCode:this._password});default:Ae(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function zt(t,e){return Hn(t,"POST","/v1/accounts:signInWithIdp",$n(t,e))}/**
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
 */const Yh="http://localhost";class Ct extends ei{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Ct(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ae("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Js(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ct(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zt(e,n)}buildRequest(){const e={requestUri:Yh,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Un(n)}return e}}/**
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
 */function Xh(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Qh(t){const e=dn(hn(t)).link,n=e?dn(hn(e)).deep_link_id:null,r=dn(hn(t)).deep_link_id;return(r?dn(hn(r)).link:null)||r||n||e||t}class ti{constructor(e){var n,r,s,i,o,a;const c=dn(hn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,h=Xh((s=c.mode)!==null&&s!==void 0?s:null);x(l&&f&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Qh(e);try{return new ti(n)}catch{return null}}}/**
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
 */class rn{constructor(){this.providerId=rn.PROVIDER_ID}static credential(e,n){return Dn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ti.parseLink(n);return x(r,"argument-error"),Dn._fromEmailAndCode(e,r.code,r.tenantId)}}rn.PROVIDER_ID="password";rn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";rn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ni{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wn extends ni{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class at extends Wn{constructor(){super("facebook.com")}static credential(e){return Ct._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return at.credential(e.oauthAccessToken)}catch{return null}}}at.FACEBOOK_SIGN_IN_METHOD="facebook.com";at.PROVIDER_ID="facebook.com";/**
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
 */class ct extends Wn{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Ct._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ct.credential(n,r)}catch{return null}}}ct.GOOGLE_SIGN_IN_METHOD="google.com";ct.PROVIDER_ID="google.com";/**
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
 */class lt extends Wn{constructor(){super("github.com")}static credential(e){return Ct._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lt.credential(e.oauthAccessToken)}catch{return null}}}lt.GITHUB_SIGN_IN_METHOD="github.com";lt.PROVIDER_ID="github.com";/**
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
 */class ut extends Wn{constructor(){super("twitter.com")}static credential(e,n){return Ct._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ut.credential(n,r)}catch{return null}}}ut.TWITTER_SIGN_IN_METHOD="twitter.com";ut.PROVIDER_ID="twitter.com";/**
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
 */async function Zh(t,e){return Hn(t,"POST","/v1/accounts:signUp",$n(t,e))}/**
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
 */class Ot{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Rt._fromIdTokenResponse(e,r,s),o=fo(r);return new Ot({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=fo(r);return new Ot({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function fo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class mr extends tn{constructor(e,n,r,s){var i;super(n.code,n.message);this.operationType=r,this.user=s,Object.setPrototypeOf(this,mr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new mr(e,n,r,s)}}function hc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?mr._fromErrorAndOperation(t,i,e,r):i})}async function ep(t,e,n=!1){const r=await Nn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ot._forOperation(t,"link",r)}/**
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
 */async function tp(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Nn(t,hc(r,s,e,t),n);x(i.idToken,r,"internal-error");const o=Qs(i.idToken);x(o,r,"internal-error");const{sub:a}=o;return x(t.uid===a,r,"user-mismatch"),Ot._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ae(r,"user-mismatch"),i}}/**
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
 */async function pc(t,e,n=!1){const r="signIn",s=await hc(t,r,e),i=await Ot._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function np(t,e){return pc(jn(t),e)}async function Dg(t,e,n){const r=jn(t),s=await Zh(r,{returnSecureToken:!0,email:e,password:n}),i=await Ot._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function xg(t,e,n){return np(Pt(t),rn.credential(e,n))}function gc(t,e,n,r){return Pt(t).onAuthStateChanged(e,n,r)}function rp(t){return Pt(t).signOut()}const _r="__sak";/**
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
 */class mc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_r,"1"),this.storage.removeItem(_r),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function sp(){const t=ge();return Zs(t)||Dr(t)}const ip=1e3,op=10;class _c extends mc{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=sp()&&Vh(),this.fallbackToPolling=fc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Wh()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,op):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ip)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_c.type="LOCAL";const ap=_c;/**
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
 */class vc extends mc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vc.type="SESSION";const yc=vc;/**
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
 */function cp(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class xr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new xr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await cp(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xr.receivers=[];/**
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
 */function ri(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class lp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=ri("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function je(){return window}function up(t){je().location.href=t}/**
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
 */function bc(){return typeof je().WorkerGlobalScope!="undefined"&&typeof je().importScripts=="function"}async function fp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function hp(){return bc()?self:null}/**
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
 */const Ic="firebaseLocalStorageDb",pp=1,vr="firebaseLocalStorage",Ec="fbase_key";class Vn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Lr(t,e){return t.transaction([vr],e?"readwrite":"readonly").objectStore(vr)}function gp(){const t=indexedDB.deleteDatabase(Ic);return new Vn(t).toPromise()}function Is(){const t=indexedDB.open(Ic,pp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(vr,{keyPath:Ec})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(vr)?e(r):(r.close(),await gp(),e(await Is()))})})}async function ho(t,e,n){const r=Lr(t,!0).put({[Ec]:e,value:n});return new Vn(r).toPromise()}async function mp(t,e){const n=Lr(t,!1).get(e),r=await new Vn(n).toPromise();return r===void 0?null:r.value}function po(t,e){const n=Lr(t,!0).delete(e);return new Vn(n).toPromise()}const _p=800,vp=3;class wc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Is(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>vp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xr._getInstance(hp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await fp(),!this.activeServiceWorker)return;this.sender=new lp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Is();return await ho(e,_r,"1"),await po(e,_r),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ho(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>mp(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>po(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Lr(s,!1).getAll();return new Vn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_p)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wc.type="LOCAL";const yp=wc;/**
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
 */function bp(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ip(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=He("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",bp().appendChild(r)})}function Ep(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Fn(3e4,6e4);/**
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
 */function Tc(t,e){return e?Je(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class si extends ei{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return zt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function wp(t){return pc(t.auth,new si(t),t.bypassAuthState)}function Tp(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),tp(n,new si(t),t.bypassAuthState)}async function Rp(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),ep(n,new si(t),t.bypassAuthState)}/**
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
 */class Rc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wp;case"linkViaPopup":case"linkViaRedirect":return Rp;case"reauthViaPopup":case"reauthViaRedirect":return Tp;default:Ae(this.auth,"internal-error")}}resolve(e){Qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Sp=new Fn(2e3,1e4);async function Lg(t,e,n){const r=jn(t);wh(t,e,ni);const s=Tc(r,n);return new bt(r,"signInViaPopup",e,s).executeNotNull()}class bt extends Rc{constructor(e,n,r,s,i){super(e,n,s,i);this.provider=r,this.authWindow=null,this.pollId=null,bt.currentPopupAction&&bt.currentPopupAction.cancel(),bt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){Qe(this.filter.length===1,"Popup operations only handle one event");const e=ri();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(He(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(He(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(He(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Sp.get())};e()}}bt.currentPopupAction=null;/**
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
 */const Ap="pendingRedirect",Jr=new Map;class Cp extends Rc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=Jr.get(this.auth._key());if(!e){try{const r=await Op(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Jr.set(this.auth._key(),e)}return this.bypassAuthState||Jr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Op(t,e){const n=kp(e),r=Pp(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Pp(t){return Je(t._redirectPersistence)}function kp(t){return nr(Ap,t.config.apiKey,t.name)}async function Np(t,e,n=!1){const r=jn(t),s=Tc(r,e),o=await new Cp(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Mp=10*60*1e3;class Dp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xp(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Sc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(He(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Mp&&this.cachedEventUids.clear(),this.cachedEventUids.has(go(e))}saveEventToCache(e){this.cachedEventUids.add(go(e)),this.lastProcessedEventTime=Date.now()}}function go(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Sc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xp(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sc(t);default:return!1}}/**
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
 */async function Lp(t,e={}){return Bn(t,"GET","/v1/projects",e)}/**
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
 */const Up=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fp=/^https?/;async function $p(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Lp(t);for(const n of e)try{if(Bp(n))return}catch{}Ae(t,"unauthorized-domain")}function Bp(t){const e=bs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Fp.test(n))return!1;if(Up.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Hp=new Fn(3e4,6e4);function mo(){const t=je().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function jp(t){return new Promise((e,n)=>{var r,s,i;function o(){mo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mo(),n(He(t,"network-request-failed"))},timeout:Hp.get()})}if(!((s=(r=je().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=je().gapi)===null||i===void 0)&&i.load)o();else{const a=Ep("iframefcb");return je()[a]=()=>{gapi.load?o():n(He(t,"network-request-failed"))},Ip(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw rr=null,e})}let rr=null;function Wp(t){return rr=rr||jp(t),rr}/**
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
 */const Vp=new Fn(5e3,15e3),zp="__/auth/iframe",Kp="emulator/auth/iframe",qp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Gp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Jp(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Xs(e,Kp):`https://${t.config.authDomain}/${zp}`,r={apiKey:e.apiKey,appName:t.name,v:kr},s=Gp.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Un(r).slice(1)}`}async function Yp(t){const e=await Wp(t),n=je().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:Jp(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qp,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=He(t,"network-request-failed"),a=je().setTimeout(()=>{i(o)},Vp.get());function c(){je().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Xp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Qp=500,Zp=600,eg="_blank",tg="http://localhost";class _o{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ng(t,e,n,r=Qp,s=Zp){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Xp),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ge().toLowerCase();n&&(a=oc(l)?eg:n),ic(l)&&(e=e||tg,c.scrollbars="yes");const f=Object.entries(c).reduce((p,[y,R])=>`${p}${y}=${R},`,"");if(jh(l)&&a!=="_self")return rg(e||"",a),new _o(null);const h=window.open(e||"",a,f);x(h,t,"popup-blocked");try{h.focus()}catch{}return new _o(h)}function rg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const sg="__/auth/handler",ig="emulator/auth/handler";function vo(t,e,n,r,s,i){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:kr,eventId:s};if(e instanceof ni){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",pf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Wn){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${og(t)}?${Un(a).slice(1)}`}function og({config:t}){return t.emulator?Xs(t,ig):`https://${t.authDomain}/${sg}`}/**
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
 */const Yr="webStorageSupport";class ag{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yc,this._completeRedirectFn=Np}async _openPopup(e,n,r,s){var i;Qe((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=vo(e,n,r,bs(),s);return ng(e,o,ri())}async _openRedirect(e,n,r,s){return await this._originValidation(e),up(vo(e,n,r,bs(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Qe(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Yp(e),r=new Dp(e);return n.register("authEvent",s=>(x(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Yr,{type:Yr},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Yr];o!==void 0&&n(!!o),Ae(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$p(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fc()||Zs()||Dr()}}const cg=ag;var yo="@firebase/auth",bo="0.19.11";/**
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
 */class lg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ug(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function fg(t){On(new Gt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{x(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),x(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dc(t)},f=new zh(a,c,l);return Rh(f,n),f})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),On(new Gt("auth-internal",e=>{const n=jn(e.getProvider("auth").getImmediate());return(r=>new lg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wt(yo,bo,ug(t)),Wt(yo,bo,"esm2017")}/**
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
 */function Ac(t=id()){const e=La(t,"auth");return e.isInitialized()?e.getImmediate():Th(t,{popupRedirectResolver:cg,persistence:[yp,ap,yc]})}fg("Browser");const dg={class:"flex justify-end items-center align-middle lg:m-7 sm:m-10"},hg=xn("Home"),pg={key:0},gg=xn(" Sign in "),mg=xn(" Sign up "),_g={key:1},vg=xn(" Tickers "),yg=Ar({setup(t){const e=bh(),n=Tr(!1);let r;ia(()=>{r=Ac(),gc(r,i=>{i?n.value=!0:n.value=!1})});const s=async()=>{await rp(r),e.push({name:"home"})};return(i,o)=>{const a=au("router-link");return jt(),Zn("nav",null,[lr("div",dg,[de(a,{to:{name:"home"},class:"nav-link"},{default:fn(()=>[hg]),_:1}),n.value?(jt(),Zn("div",_g,[de(a,{to:{name:"tickers"},class:"nav-link"},{default:fn(()=>[vg]),_:1}),lr("span",{onClick:s,class:"nav-link cursor-pointer"}," Sign out ")])):(jt(),Zn("div",pg,[de(a,{to:{name:"sign-in"},class:"nav-link"},{default:fn(()=>[gg]),_:1}),de(a,{to:{name:"sign-up"},class:"sign-up-link"},{default:fn(()=>[mg]),_:1})]))])])}}}),bg=Ar({setup(t){const e=Ih();return(n,r)=>(jt(),Zn(Fe,null,[Et(e).meta.hideNavbar?hu("",!0):(jt(),_a(yg,{key:0})),de(Et(Ya))],64))}}),Ig="modulepreload",Io={},Eg="/crypto-scanner/",cn=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${Eg}${r}`,r in Io)return;Io[r]=!0;const s=r.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":Ig,s||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),s)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},Cc=vh({history:xd("/crypto-scanner/"),routes:[{path:"/",name:"home",component:()=>cn(()=>import("./HomeView.114c4fb8.js"),[])},{path:"/sign-up",name:"sign-up",component:()=>cn(()=>import("./SignUp.2f5b5799.js"),["assets/SignUp.2f5b5799.js","assets/SignUp.0ce2696d.css","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/sign-in",name:"sign-in",component:()=>cn(()=>import("./SignIn.b9415473.js"),["assets/SignIn.b9415473.js","assets/SignIn.31f181b4.css","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/tickers",name:"tickers",component:()=>cn(()=>import("./Tickers.52fe629c.js"),["assets/Tickers.52fe629c.js","assets/Tickers.317fcb3b.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/binance_socket.4c7b5ee8.js"]),meta:{requiresAuth:!0}},{path:"/tickers/:id",name:"ticker-chart",component:()=>cn(()=>import("./ChartView.5f7b9321.js"),["assets/ChartView.5f7b9321.js","assets/ChartView.b5df4413.css","assets/binance_socket.4c7b5ee8.js"]),meta:{requiresAuth:!0,hideNavbar:!0}}]}),wg=()=>new Promise((t,e)=>{const n=gc(Ac(),r=>{n(),t(r)},e)});Cc.beforeEach(async(t,e,n)=>{t.matched.some(r=>r.meta.requiresAuth)?await wg()?n():(alert("YOU DON'T HAVE ACCESS!"),n({name:"home"})):n()});const Tg={apiKey:"AIzaSyDbL2ZMJjYr8-J8VxC2JGyYzF-L8b0JH20",authDomain:"crypto-scanner-d8e79.firebaseapp.com",projectId:"crypto-scanner-d8e79",storageBucket:"crypto-scanner-d8e79.appspot.com",messagingSenderId:"359040748010",appId:"1:359040748010:web:66a1b4a3aa5c446d990a93",measurementId:"G-QD41TV94B4"};sd(Tg);const ii=qu(bg);ii.use(Ju());ii.use(Cc);ii.mount("#app");export{Et as A,_a as B,oe as C,Pg as D,Ts as E,Fe as F,ct as G,Rg as H,Ng as I,Ih as J,ws as K,lr as a,de as b,Zn as c,Ar as d,au as e,xn as f,Og as g,Ag as h,Dg as i,Ac as j,Cc as k,xg as l,en as m,ia as n,jt as o,Sg as p,Bl as q,Tr as r,Lg as s,Cg as t,bh as u,kg as v,fn as w,Mg as x,ke as y,Hs as z};
