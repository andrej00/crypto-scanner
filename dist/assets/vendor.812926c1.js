function hs(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const pc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gc=hs(pc);function fo(t){return!!t||t===""}function ps(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=de(r)?vc(r):ps(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(de(t))return t;if(ue(t))return t}}const mc=/;(?![^(]*\))/g,_c=/:(.+)/;function vc(t){const e={};return t.split(mc).forEach(n=>{if(n){const r=n.split(_c);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function gs(t){let e="";if(de(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=gs(t[n]);r&&(e+=r+" ")}else if(ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Kp=t=>de(t)?t:t==null?"":F(t)||ue(t)&&(t.toString===mo||!H(t.toString))?JSON.stringify(t,ho,2):String(t),ho=(t,e)=>e&&e.__v_isRef?ho(t,e.value):Bt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:po(e)?{[`Set(${e.size})`]:[...e.values()]}:ue(e)&&!F(e)&&!_o(e)?String(e):e,Z={},Ft=[],Ne=()=>{},yc=()=>!1,bc=/^on[^a-z]/,hr=t=>bc.test(t),ms=t=>t.startsWith("onUpdate:"),_e=Object.assign,_s=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ic=Object.prototype.hasOwnProperty,q=(t,e)=>Ic.call(t,e),F=Array.isArray,Bt=t=>pr(t)==="[object Map]",po=t=>pr(t)==="[object Set]",H=t=>typeof t=="function",de=t=>typeof t=="string",vs=t=>typeof t=="symbol",ue=t=>t!==null&&typeof t=="object",go=t=>ue(t)&&H(t.then)&&H(t.catch),mo=Object.prototype.toString,pr=t=>mo.call(t),Ec=t=>pr(t).slice(8,-1),_o=t=>pr(t)==="[object Object]",ys=t=>de(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Kn=hs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),gr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},wc=/-(\w)/g,je=gr(t=>t.replace(wc,(e,n)=>n?n.toUpperCase():"")),Tc=/\B([A-Z])/g,Gt=gr(t=>t.replace(Tc,"-$1").toLowerCase()),mr=gr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Or=gr(t=>t?`on${mr(t)}`:""),yn=(t,e)=>!Object.is(t,e),qn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Zn=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},jr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ei;const Rc=()=>ei||(ei=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Ve;class vo{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Ve&&(this.parent=Ve,this.index=(Ve.scopes||(Ve.scopes=[])).push(this)-1)}run(e){if(this.active)try{return Ve=this,e()}finally{Ve=this.parent}}on(){Ve=this}off(){Ve=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function yo(t){return new vo(t)}function Sc(t,e=Ve){e&&e.active&&e.effects.push(t)}const bs=t=>{const e=new Set(t);return e.w=0,e.n=0,e},bo=t=>(t.w&ht)>0,Io=t=>(t.n&ht)>0,Ac=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ht},Cc=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];bo(s)&&!Io(s)?s.delete(t):e[n++]=s,s.w&=~ht,s.n&=~ht}e.length=n}},Wr=new WeakMap;let sn=0,ht=1;const Vr=30;let Fe;const It=Symbol(""),zr=Symbol("");class Is{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Sc(this,r)}run(){if(!this.active)return this.fn();let e=Fe,n=ft;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Fe,Fe=this,ft=!0,ht=1<<++sn,sn<=Vr?Ac(this):ti(this),this.fn()}finally{sn<=Vr&&Cc(this),ht=1<<--sn,Fe=this.parent,ft=n,this.parent=void 0}}stop(){this.active&&(ti(this),this.onStop&&this.onStop(),this.active=!1)}}function ti(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ft=!0;const Eo=[];function Jt(){Eo.push(ft),ft=!1}function Yt(){const t=Eo.pop();ft=t===void 0?!0:t}function Ee(t,e,n){if(ft&&Fe){let r=Wr.get(t);r||Wr.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=bs()),wo(s)}}function wo(t,e){let n=!1;sn<=Vr?Io(t)||(t.n|=ht,n=!bo(t)):n=!t.has(Fe),n&&(t.add(Fe),Fe.deps.push(t))}function Xe(t,e,n,r,s,i){const o=Wr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&F(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":F(t)?ys(n)&&a.push(o.get("length")):(a.push(o.get(It)),Bt(t)&&a.push(o.get(zr)));break;case"delete":F(t)||(a.push(o.get(It)),Bt(t)&&a.push(o.get(zr)));break;case"set":Bt(t)&&a.push(o.get(It));break}if(a.length===1)a[0]&&Kr(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Kr(bs(c))}}function Kr(t,e){for(const n of F(t)?t:[...t])(n!==Fe||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Oc=hs("__proto__,__v_isRef,__isVue"),To=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(vs)),Pc=Es(),kc=Es(!1,!0),Nc=Es(!0),ni=Mc();function Mc(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=G(this);for(let i=0,o=this.length;i<o;i++)Ee(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(G)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Jt();const r=G(this)[e].apply(this,n);return Yt(),r}}),t}function Es(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Jc:Oo:e?Co:Ao).get(r))return r;const o=F(r);if(!t&&o&&q(ni,s))return Reflect.get(ni,s,i);const a=Reflect.get(r,s,i);return(vs(s)?To.has(s):Oc(s))||(t||Ee(r,"get",s),e)?a:oe(a)?!o||!ys(s)?a.value:a:ue(a)?t?Po(a):Xt(a):a}}const xc=Ro(),Dc=Ro(!0);function Ro(t=!1){return function(n,r,s,i){let o=n[r];if(bn(o)&&oe(o)&&!oe(s))return!1;if(!t&&!bn(s)&&(ko(s)||(s=G(s),o=G(o)),!F(n)&&oe(o)&&!oe(s)))return o.value=s,!0;const a=F(n)&&ys(r)?Number(r)<n.length:q(n,r),c=Reflect.set(n,r,s,i);return n===G(i)&&(a?yn(s,o)&&Xe(n,"set",r,s):Xe(n,"add",r,s)),c}}function Lc(t,e){const n=q(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Xe(t,"delete",e,void 0),r}function Uc(t,e){const n=Reflect.has(t,e);return(!vs(e)||!To.has(e))&&Ee(t,"has",e),n}function Fc(t){return Ee(t,"iterate",F(t)?"length":It),Reflect.ownKeys(t)}const So={get:Pc,set:xc,deleteProperty:Lc,has:Uc,ownKeys:Fc},Bc={get:Nc,set(t,e){return!0},deleteProperty(t,e){return!0}},$c=_e({},So,{get:kc,set:Dc}),ws=t=>t,_r=t=>Reflect.getPrototypeOf(t);function Hn(t,e,n=!1,r=!1){t=t.__v_raw;const s=G(t),i=G(e);e!==i&&!n&&Ee(s,"get",e),!n&&Ee(s,"get",i);const{has:o}=_r(s),a=r?ws:n?Ss:In;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function jn(t,e=!1){const n=this.__v_raw,r=G(n),s=G(t);return t!==s&&!e&&Ee(r,"has",t),!e&&Ee(r,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function Wn(t,e=!1){return t=t.__v_raw,!e&&Ee(G(t),"iterate",It),Reflect.get(t,"size",t)}function ri(t){t=G(t);const e=G(this);return _r(e).has.call(e,t)||(e.add(t),Xe(e,"add",t,t)),this}function si(t,e){e=G(e);const n=G(this),{has:r,get:s}=_r(n);let i=r.call(n,t);i||(t=G(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?yn(e,o)&&Xe(n,"set",t,e):Xe(n,"add",t,e),this}function ii(t){const e=G(this),{has:n,get:r}=_r(e);let s=n.call(e,t);s||(t=G(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Xe(e,"delete",t,void 0),i}function oi(){const t=G(this),e=t.size!==0,n=t.clear();return e&&Xe(t,"clear",void 0,void 0),n}function Vn(t,e){return function(r,s){const i=this,o=i.__v_raw,a=G(o),c=e?ws:t?Ss:In;return!t&&Ee(a,"iterate",It),o.forEach((l,f)=>r.call(s,c(l),c(f),i))}}function zn(t,e,n){return function(...r){const s=this.__v_raw,i=G(s),o=Bt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),f=n?ws:e?Ss:In;return!e&&Ee(i,"iterate",c?zr:It),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:a?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function et(t){return function(...e){return t==="delete"?!1:this}}function Hc(){const t={get(i){return Hn(this,i)},get size(){return Wn(this)},has:jn,add:ri,set:si,delete:ii,clear:oi,forEach:Vn(!1,!1)},e={get(i){return Hn(this,i,!1,!0)},get size(){return Wn(this)},has:jn,add:ri,set:si,delete:ii,clear:oi,forEach:Vn(!1,!0)},n={get(i){return Hn(this,i,!0)},get size(){return Wn(this,!0)},has(i){return jn.call(this,i,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:Vn(!0,!1)},r={get(i){return Hn(this,i,!0,!0)},get size(){return Wn(this,!0)},has(i){return jn.call(this,i,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:Vn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=zn(i,!1,!1),n[i]=zn(i,!0,!1),e[i]=zn(i,!1,!0),r[i]=zn(i,!0,!0)}),[t,n,e,r]}const[jc,Wc,Vc,zc]=Hc();function Ts(t,e){const n=e?t?zc:Vc:t?Wc:jc;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(q(n,s)&&s in r?n:r,s,i)}const Kc={get:Ts(!1,!1)},qc={get:Ts(!1,!0)},Gc={get:Ts(!0,!1)},Ao=new WeakMap,Co=new WeakMap,Oo=new WeakMap,Jc=new WeakMap;function Yc(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xc(t){return t.__v_skip||!Object.isExtensible(t)?0:Yc(Ec(t))}function Xt(t){return bn(t)?t:Rs(t,!1,So,Kc,Ao)}function Qc(t){return Rs(t,!1,$c,qc,Co)}function Po(t){return Rs(t,!0,Bc,Gc,Oo)}function Rs(t,e,n,r,s){if(!ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Xc(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Ye(t){return bn(t)?Ye(t.__v_raw):!!(t&&t.__v_isReactive)}function bn(t){return!!(t&&t.__v_isReadonly)}function ko(t){return!!(t&&t.__v_isShallow)}function No(t){return Ye(t)||bn(t)}function G(t){const e=t&&t.__v_raw;return e?G(e):t}function Wt(t){return Zn(t,"__v_skip",!0),t}const In=t=>ue(t)?Xt(t):t,Ss=t=>ue(t)?Po(t):t;function Mo(t){ft&&Fe&&(t=G(t),wo(t.dep||(t.dep=bs())))}function xo(t,e){t=G(t),t.dep&&Kr(t.dep)}function oe(t){return!!(t&&t.__v_isRef===!0)}function As(t){return Do(t,!1)}function Zc(t){return Do(t,!0)}function Do(t,e){return oe(t)?t:new el(t,e)}class el{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:G(e),this._value=n?e:In(e)}get value(){return Mo(this),this._value}set value(e){e=this.__v_isShallow?e:G(e),yn(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:In(e),xo(this))}}function un(t){return oe(t)?t.value:t}const tl={get:(t,e,n)=>un(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return oe(s)&&!oe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Lo(t){return Ye(t)?t:new Proxy(t,tl)}function nl(t){const e=F(t)?new Array(t.length):{};for(const n in t)e[n]=Uo(t,n);return e}class rl{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Uo(t,e,n){const r=t[e];return oe(r)?r:new rl(t,e,n)}class sl{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Is(e,()=>{this._dirty||(this._dirty=!0,xo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=G(this);return Mo(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function il(t,e,n=!1){let r,s;const i=H(t);return i?(r=t,s=Ne):(r=t.get,s=t.set),new sl(r,s,i||!s,n)}Promise.resolve();function dt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){vr(i,e,n)}return s}function Me(t,e,n,r){if(H(t)){const i=dt(t,e,n,r);return i&&go(i)&&i.catch(o=>{vr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Me(t[i],e,n,r));return s}function vr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){dt(c,null,10,[t,o,a]);return}}ol(t,n,s,r)}function ol(t,e,n,r=!0){console.error(t)}let er=!1,qr=!1;const Ie=[];let qe=0;const fn=[];let on=null,xt=0;const dn=[];let st=null,Dt=0;const Fo=Promise.resolve();let Cs=null,Gr=null;function Os(t){const e=Cs||Fo;return t?e.then(this?t.bind(this):t):e}function al(t){let e=qe+1,n=Ie.length;for(;e<n;){const r=e+n>>>1;En(Ie[r])<t?e=r+1:n=r}return e}function Bo(t){(!Ie.length||!Ie.includes(t,er&&t.allowRecurse?qe+1:qe))&&t!==Gr&&(t.id==null?Ie.push(t):Ie.splice(al(t.id),0,t),$o())}function $o(){!er&&!qr&&(qr=!0,Cs=Fo.then(Wo))}function cl(t){const e=Ie.indexOf(t);e>qe&&Ie.splice(e,1)}function Ho(t,e,n,r){F(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),$o()}function ll(t){Ho(t,on,fn,xt)}function ul(t){Ho(t,st,dn,Dt)}function Ps(t,e=null){if(fn.length){for(Gr=e,on=[...new Set(fn)],fn.length=0,xt=0;xt<on.length;xt++)on[xt]();on=null,xt=0,Gr=null,Ps(t,e)}}function jo(t){if(dn.length){const e=[...new Set(dn)];if(dn.length=0,st){st.push(...e);return}for(st=e,st.sort((n,r)=>En(n)-En(r)),Dt=0;Dt<st.length;Dt++)st[Dt]();st=null,Dt=0}}const En=t=>t.id==null?1/0:t.id;function Wo(t){qr=!1,er=!0,Ps(t),Ie.sort((n,r)=>En(n)-En(r));const e=Ne;try{for(qe=0;qe<Ie.length;qe++){const n=Ie[qe];n&&n.active!==!1&&dt(n,null,14)}}finally{qe=0,Ie.length=0,jo(),er=!1,Cs=null,(Ie.length||fn.length||dn.length)&&Wo(t)}}function fl(t,e,...n){const r=t.vnode.props||Z;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[f]||Z;p?s=n.map(y=>y.trim()):h&&(s=n.map(jr))}let a,c=r[a=Or(e)]||r[a=Or(je(e))];!c&&i&&(c=r[a=Or(Gt(e))]),c&&Me(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Me(l,t,6,s)}}function Vo(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!H(t)){const c=l=>{const f=Vo(l,e,!0);f&&(a=!0,_e(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(F(i)?i.forEach(c=>o[c]=null):_e(o,i),r.set(t,o),o)}function ks(t,e){return!t||!hr(e)?!1:(e=e.slice(2).replace(/Once$/,""),q(t,e[0].toLowerCase()+e.slice(1))||q(t,Gt(e))||q(t,e))}let Re=null,yr=null;function tr(t){const e=Re;return Re=t,yr=t&&t.type.__scopeId||null,e}function qp(t){yr=t}function Gp(){yr=null}function dl(t,e=Re,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&mi(-1);const i=tr(e),o=t(...s);return tr(i),r._d&&mi(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Pr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:f,renderCache:h,data:p,setupState:y,ctx:R,inheritAttrs:x}=t;let A,C;const L=tr(t);try{if(n.shapeFlag&4){const B=s||r;A=Ue(f.call(B,B,h,i,y,p,R)),C=c}else{const B=e;A=Ue(B.length>1?B(i,{attrs:c,slots:a,emit:l}):B(i,null)),C=e.props?c:hl(c)}}catch(B){pn.length=0,vr(B,t,1),A=Se(wn)}let z=A;if(C&&x!==!1){const B=Object.keys(C),{shapeFlag:ie}=z;B.length&&ie&7&&(o&&B.some(ms)&&(C=pl(C,o)),z=Tn(z,C))}return n.dirs&&(z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&(z.transition=n.transition),A=z,tr(L),A}const hl=t=>{let e;for(const n in t)(n==="class"||n==="style"||hr(n))&&((e||(e={}))[n]=t[n]);return e},pl=(t,e)=>{const n={};for(const r in t)(!ms(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function gl(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ai(r,o,l):!!o;if(c&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(o[p]!==r[p]&&!ks(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ai(r,o,l):!0:!!o;return!1}function ai(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ks(n,i))return!0}return!1}function ml({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const _l=t=>t.__isSuspense;function vl(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):ul(t)}function Gn(t,e){if(fe){let n=fe.provides;const r=fe.parent&&fe.parent.provides;r===n&&(n=fe.provides=Object.create(r)),n[t]=e}}function Be(t,e,n=!1){const r=fe||Re;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&H(e)?e.call(r.proxy):e}}const ci={};function hn(t,e,n){return zo(t,e,n)}function zo(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Z){const a=fe;let c,l=!1,f=!1;if(oe(t)?(c=()=>t.value,l=ko(t)):Ye(t)?(c=()=>t,r=!0):F(t)?(f=!0,l=t.some(Ye),c=()=>t.map(C=>{if(oe(C))return C.value;if(Ye(C))return yt(C);if(H(C))return dt(C,a,2)})):H(t)?e?c=()=>dt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Me(t,a,3,[p])}:c=Ne,e&&r){const C=c;c=()=>yt(C())}let h,p=C=>{h=A.onStop=()=>{dt(C,a,4)}};if(Rn)return p=Ne,e?n&&Me(e,a,3,[c(),f?[]:void 0,p]):c(),Ne;let y=f?[]:ci;const R=()=>{if(!!A.active)if(e){const C=A.run();(r||l||(f?C.some((L,z)=>yn(L,y[z])):yn(C,y)))&&(h&&h(),Me(e,a,3,[C,y===ci?void 0:y,p]),y=C)}else A.run()};R.allowRecurse=!!e;let x;s==="sync"?x=R:s==="post"?x=()=>ve(R,a&&a.suspense):x=()=>{!a||a.isMounted?ll(R):R()};const A=new Is(c,x);return e?n?R():y=A.run():s==="post"?ve(A.run.bind(A),a&&a.suspense):A.run(),()=>{A.stop(),a&&a.scope&&_s(a.scope.effects,A)}}function yl(t,e,n){const r=this.proxy,s=de(t)?t.includes(".")?Ko(r,t):()=>r[t]:t.bind(r,r);let i;H(e)?i=e:(i=e.handler,n=e);const o=fe;Vt(this);const a=zo(s,i.bind(r),n);return o?Vt(o):wt(),a}function Ko(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function yt(t,e){if(!ue(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),oe(t))yt(t.value,e);else if(F(t))for(let n=0;n<t.length;n++)yt(t[n],e);else if(po(t)||Bt(t))t.forEach(n=>{yt(n,e)});else if(_o(t))for(const n in t)yt(t[n],e);return t}function qo(t){return H(t)?{setup:t,name:t.name}:t}const Jr=t=>!!t.type.__asyncLoader,Go=t=>t.type.__isKeepAlive;function bl(t,e){Jo(t,"a",e)}function Il(t,e){Jo(t,"da",e)}function Jo(t,e,n=fe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(br(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Go(s.parent.vnode)&&El(r,e,n,s),s=s.parent}}function El(t,e,n,r){const s=br(e,t,r,!0);Ns(()=>{_s(r[e],s)},n)}function br(t,e,n=fe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Jt(),Vt(n);const a=Me(e,n,t,o);return wt(),Yt(),a});return r?s.unshift(i):s.push(i),i}}const Ze=t=>(e,n=fe)=>(!Rn||t==="sp")&&br(t,e,n),wl=Ze("bm"),Tl=Ze("m"),Rl=Ze("bu"),Sl=Ze("u"),Al=Ze("bum"),Ns=Ze("um"),Cl=Ze("sp"),Ol=Ze("rtg"),Pl=Ze("rtc");function kl(t,e=fe){br("ec",t,e)}let Yr=!0;function Nl(t){const e=Xo(t),n=t.proxy,r=t.ctx;Yr=!1,e.beforeCreate&&li(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:f,beforeMount:h,mounted:p,beforeUpdate:y,updated:R,activated:x,deactivated:A,beforeDestroy:C,beforeUnmount:L,destroyed:z,unmounted:B,render:ie,renderTracked:j,renderTriggered:V,errorCaptured:ge,serverPrefetch:ae,expose:he,inheritAttrs:Ce,components:Oe,directives:we,filters:ce}=e;if(l&&Ml(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ee in o){const J=o[ee];H(J)&&(r[ee]=J.bind(n))}if(s){const ee=s.call(n,n);ue(ee)&&(t.data=Xt(ee))}if(Yr=!0,i)for(const ee in i){const J=i[ee],ye=H(J)?J.bind(n,n):H(J.get)?J.get.bind(n,n):Ne,Pt=!H(J)&&H(J.set)?J.set.bind(n):Ne,We=ke({get:ye,set:Pt});Object.defineProperty(r,ee,{enumerable:!0,configurable:!0,get:()=>We.value,set:xe=>We.value=xe})}if(a)for(const ee in a)Yo(a[ee],r,n,ee);if(c){const ee=H(c)?c.call(n):c;Reflect.ownKeys(ee).forEach(J=>{Gn(J,ee[J])})}f&&li(f,t,"c");function le(ee,J){F(J)?J.forEach(ye=>ee(ye.bind(n))):J&&ee(J.bind(n))}if(le(wl,h),le(Tl,p),le(Rl,y),le(Sl,R),le(bl,x),le(Il,A),le(kl,ge),le(Pl,j),le(Ol,V),le(Al,L),le(Ns,B),le(Cl,ae),F(he))if(he.length){const ee=t.exposed||(t.exposed={});he.forEach(J=>{Object.defineProperty(ee,J,{get:()=>n[J],set:ye=>n[J]=ye})})}else t.exposed||(t.exposed={});ie&&t.render===Ne&&(t.render=ie),Ce!=null&&(t.inheritAttrs=Ce),Oe&&(t.components=Oe),we&&(t.directives=we)}function Ml(t,e,n=Ne,r=!1){F(t)&&(t=Xr(t));for(const s in t){const i=t[s];let o;ue(i)?"default"in i?o=Be(i.from||s,i.default,!0):o=Be(i.from||s):o=Be(i),oe(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function li(t,e,n){Me(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Yo(t,e,n,r){const s=r.includes(".")?Ko(n,r):()=>n[r];if(de(t)){const i=e[t];H(i)&&hn(s,i)}else if(H(t))hn(s,t.bind(n));else if(ue(t))if(F(t))t.forEach(i=>Yo(i,e,n,r));else{const i=H(t.handler)?t.handler.bind(n):e[t.handler];H(i)&&hn(s,i,t)}}function Xo(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>nr(c,l,o,!0)),nr(c,e,o)),i.set(e,c),c}function nr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&nr(t,i,n,!0),s&&s.forEach(o=>nr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=xl[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const xl={data:ui,props:mt,emits:mt,methods:mt,computed:mt,beforeCreate:me,created:me,beforeMount:me,mounted:me,beforeUpdate:me,updated:me,beforeDestroy:me,beforeUnmount:me,destroyed:me,unmounted:me,activated:me,deactivated:me,errorCaptured:me,serverPrefetch:me,components:mt,directives:mt,watch:Ll,provide:ui,inject:Dl};function ui(t,e){return e?t?function(){return _e(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function Dl(t,e){return mt(Xr(t),Xr(e))}function Xr(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function me(t,e){return t?[...new Set([].concat(t,e))]:e}function mt(t,e){return t?_e(_e(Object.create(null),t),e):e}function Ll(t,e){if(!t)return e;if(!e)return t;const n=_e(Object.create(null),t);for(const r in e)n[r]=me(t[r],e[r]);return n}function Ul(t,e,n,r=!1){const s={},i={};Zn(i,Ir,1),t.propsDefaults=Object.create(null),Qo(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Qc(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Fl(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=G(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];const y=e[p];if(c)if(q(i,p))y!==i[p]&&(i[p]=y,l=!0);else{const R=je(p);s[R]=Qr(c,a,R,y,t,!1)}else y!==i[p]&&(i[p]=y,l=!0)}}}else{Qo(t,e,s,i)&&(l=!0);let f;for(const h in a)(!e||!q(e,h)&&((f=Gt(h))===h||!q(e,f)))&&(c?n&&(n[h]!==void 0||n[f]!==void 0)&&(s[h]=Qr(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!q(e,h)&&!0)&&(delete i[h],l=!0)}l&&Xe(t,"set","$attrs")}function Qo(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Kn(c))continue;const l=e[c];let f;s&&q(s,f=je(c))?!i||!i.includes(f)?n[f]=l:(a||(a={}))[f]=l:ks(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=G(n),l=a||Z;for(let f=0;f<i.length;f++){const h=i[f];n[h]=Qr(s,c,h,l[h],t,!q(l,h))}}return o}function Qr(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=q(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&H(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Vt(s),r=l[n]=c.call(null,e),wt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Gt(n))&&(r=!0))}return r}function Zo(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!H(t)){const f=h=>{c=!0;const[p,y]=Zo(h,e,!0);_e(o,p),y&&a.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return r.set(t,Ft),Ft;if(F(i))for(let f=0;f<i.length;f++){const h=je(i[f]);fi(h)&&(o[h]=Z)}else if(i)for(const f in i){const h=je(f);if(fi(h)){const p=i[f],y=o[h]=F(p)||H(p)?{type:p}:p;if(y){const R=pi(Boolean,y.type),x=pi(String,y.type);y[0]=R>-1,y[1]=x<0||R<x,(R>-1||q(y,"default"))&&a.push(h)}}}const l=[o,a];return r.set(t,l),l}function fi(t){return t[0]!=="$"}function di(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function hi(t,e){return di(t)===di(e)}function pi(t,e){return F(e)?e.findIndex(n=>hi(n,t)):H(e)&&hi(e,t)?0:-1}const ea=t=>t[0]==="_"||t==="$stable",Ms=t=>F(t)?t.map(Ue):[Ue(t)],Bl=(t,e,n)=>{const r=dl((...s)=>Ms(e(...s)),n);return r._c=!1,r},ta=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ea(s))continue;const i=t[s];if(H(i))e[s]=Bl(s,i,r);else if(i!=null){const o=Ms(i);e[s]=()=>o}}},na=(t,e)=>{const n=Ms(e);t.slots.default=()=>n},$l=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=G(e),Zn(e,"_",n)):ta(e,t.slots={})}else t.slots={},e&&na(t,e);Zn(t.slots,Ir,1)},Hl=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Z;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(_e(s,e),!n&&a===1&&delete s._):(i=!e.$stable,ta(e,s)),o=e}else e&&(na(t,e),o={default:1});if(i)for(const a in s)!ea(a)&&!(a in o)&&delete s[a]};function Jp(t,e){const n=Re;if(n===null)return t;const r=n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Z]=e[i];H(o)&&(o={mounted:o,updated:o}),o.deep&&yt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function pt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Jt(),Me(c,n,8,[t.el,a,t,e]),Yt())}}function ra(){return{app:null,config:{isNativeTag:yc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jl=0;function Wl(t,e){return function(r,s=null){s!=null&&!ue(s)&&(s=null);const i=ra(),o=new Set;let a=!1;const c=i.app={_uid:jl++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:fu,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&H(l.install)?(o.add(l),l.install(c,...f)):H(l)&&(o.add(l),l(c,...f))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,f){return f?(i.components[l]=f,c):i.components[l]},directive(l,f){return f?(i.directives[l]=f,c):i.directives[l]},mount(l,f,h){if(!a){const p=Se(r,s);return p.appContext=i,f&&e?e(p,l):t(p,l,h),a=!0,c._container=l,l.__vue_app__=c,Ls(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,f){return i.provides[l]=f,c}};return c}}function Zr(t,e,n,r,s=!1){if(F(t)){t.forEach((p,y)=>Zr(p,e&&(F(e)?e[y]:e),n,r,s));return}if(Jr(r)&&!s)return;const i=r.shapeFlag&4?Ls(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,f=a.refs===Z?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(de(l)?(f[l]=null,q(h,l)&&(h[l]=null)):oe(l)&&(l.value=null)),H(c))dt(c,a,12,[o,f]);else{const p=de(c),y=oe(c);if(p||y){const R=()=>{if(t.f){const x=p?f[c]:c.value;s?F(x)&&_s(x,i):F(x)?x.includes(i)||x.push(i):p?f[c]=[i]:(c.value=[i],t.k&&(f[t.k]=c.value))}else p?(f[c]=o,q(h,c)&&(h[c]=o)):oe(c)&&(c.value=o,t.k&&(f[t.k]=o))};o?(R.id=-1,ve(R,n)):R()}}}const ve=vl;function Vl(t){return zl(t)}function zl(t,e){const n=Rc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:f,parentNode:h,nextSibling:p,setScopeId:y=Ne,cloneNode:R,insertStaticContent:x}=t,A=(u,d,g,v=null,_=null,E=null,S=!1,I=null,w=!!d.dynamicChildren)=>{if(u===d)return;u&&!nn(u,d)&&(v=k(u),Te(u,_,E,!0),u=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:b,ref:N,shapeFlag:O}=d;switch(b){case xs:C(u,d,g,v);break;case wn:L(u,d,g,v);break;case kr:u==null&&z(d,g,v,S);break;case Ke:we(u,d,g,v,_,E,S,I,w);break;default:O&1?j(u,d,g,v,_,E,S,I,w):O&6?ce(u,d,g,v,_,E,S,I,w):(O&64||O&128)&&b.process(u,d,g,v,_,E,S,I,w,te)}N!=null&&_&&Zr(N,u&&u.ref,E,d||u,!d)},C=(u,d,g,v)=>{if(u==null)r(d.el=a(d.children),g,v);else{const _=d.el=u.el;d.children!==u.children&&l(_,d.children)}},L=(u,d,g,v)=>{u==null?r(d.el=c(d.children||""),g,v):d.el=u.el},z=(u,d,g,v)=>{[u.el,u.anchor]=x(u.children,d,g,v,u.el,u.anchor)},B=({el:u,anchor:d},g,v)=>{let _;for(;u&&u!==d;)_=p(u),r(u,g,v),u=_;r(d,g,v)},ie=({el:u,anchor:d})=>{let g;for(;u&&u!==d;)g=p(u),s(u),u=g;s(d)},j=(u,d,g,v,_,E,S,I,w)=>{S=S||d.type==="svg",u==null?V(d,g,v,_,E,S,I,w):he(u,d,_,E,S,I,w)},V=(u,d,g,v,_,E,S,I)=>{let w,b;const{type:N,props:O,shapeFlag:M,transition:U,patchFlag:K,dirs:se}=u;if(u.el&&R!==void 0&&K===-1)w=u.el=R(u.el);else{if(w=u.el=o(u.type,E,O&&O.is,O),M&8?f(w,u.children):M&16&&ae(u.children,w,null,v,_,E&&N!=="foreignObject",S,I),se&&pt(u,null,v,"created"),O){for(const re in O)re!=="value"&&!Kn(re)&&i(w,re,null,O[re],E,u.children,v,_,T);"value"in O&&i(w,"value",null,O.value),(b=O.onVnodeBeforeMount)&&Le(b,v,u)}ge(w,u,u.scopeId,S,v)}se&&pt(u,null,v,"beforeMount");const X=(!_||_&&!_.pendingBranch)&&U&&!U.persisted;X&&U.beforeEnter(w),r(w,d,g),((b=O&&O.onVnodeMounted)||X||se)&&ve(()=>{b&&Le(b,v,u),X&&U.enter(w),se&&pt(u,null,v,"mounted")},_)},ge=(u,d,g,v,_)=>{if(g&&y(u,g),v)for(let E=0;E<v.length;E++)y(u,v[E]);if(_){let E=_.subTree;if(d===E){const S=_.vnode;ge(u,S,S.scopeId,S.slotScopeIds,_.parent)}}},ae=(u,d,g,v,_,E,S,I,w=0)=>{for(let b=w;b<u.length;b++){const N=u[b]=I?it(u[b]):Ue(u[b]);A(null,N,d,g,v,_,E,S,I)}},he=(u,d,g,v,_,E,S)=>{const I=d.el=u.el;let{patchFlag:w,dynamicChildren:b,dirs:N}=d;w|=u.patchFlag&16;const O=u.props||Z,M=d.props||Z;let U;g&&gt(g,!1),(U=M.onVnodeBeforeUpdate)&&Le(U,g,d,u),N&&pt(d,u,g,"beforeUpdate"),g&&gt(g,!0);const K=_&&d.type!=="foreignObject";if(b?Ce(u.dynamicChildren,b,I,g,v,K,E):S||ye(u,d,I,null,g,v,K,E,!1),w>0){if(w&16)Oe(I,d,O,M,g,v,_);else if(w&2&&O.class!==M.class&&i(I,"class",null,M.class,_),w&4&&i(I,"style",O.style,M.style,_),w&8){const se=d.dynamicProps;for(let X=0;X<se.length;X++){const re=se[X],Pe=O[re],kt=M[re];(kt!==Pe||re==="value")&&i(I,re,Pe,kt,_,u.children,g,v,T)}}w&1&&u.children!==d.children&&f(I,d.children)}else!S&&b==null&&Oe(I,d,O,M,g,v,_);((U=M.onVnodeUpdated)||N)&&ve(()=>{U&&Le(U,g,d,u),N&&pt(d,u,g,"updated")},v)},Ce=(u,d,g,v,_,E,S)=>{for(let I=0;I<d.length;I++){const w=u[I],b=d[I],N=w.el&&(w.type===Ke||!nn(w,b)||w.shapeFlag&70)?h(w.el):g;A(w,b,N,null,v,_,E,S,!0)}},Oe=(u,d,g,v,_,E,S)=>{if(g!==v){for(const I in v){if(Kn(I))continue;const w=v[I],b=g[I];w!==b&&I!=="value"&&i(u,I,b,w,S,d.children,_,E,T)}if(g!==Z)for(const I in g)!Kn(I)&&!(I in v)&&i(u,I,g[I],null,S,d.children,_,E,T);"value"in v&&i(u,"value",g.value,v.value)}},we=(u,d,g,v,_,E,S,I,w)=>{const b=d.el=u?u.el:a(""),N=d.anchor=u?u.anchor:a("");let{patchFlag:O,dynamicChildren:M,slotScopeIds:U}=d;U&&(I=I?I.concat(U):U),u==null?(r(b,g,v),r(N,g,v),ae(d.children,g,N,_,E,S,I,w)):O>0&&O&64&&M&&u.dynamicChildren?(Ce(u.dynamicChildren,M,g,_,E,S,I),(d.key!=null||_&&d===_.subTree)&&sa(u,d,!0)):ye(u,d,g,N,_,E,S,I,w)},ce=(u,d,g,v,_,E,S,I,w)=>{d.slotScopeIds=I,u==null?d.shapeFlag&512?_.ctx.activate(d,g,v,S,w):Ot(d,g,v,_,E,S,w):le(u,d,w)},Ot=(u,d,g,v,_,E,S)=>{const I=u.component=su(u,v,_);if(Go(u)&&(I.ctx.renderer=te),iu(I),I.asyncDep){if(_&&_.registerDep(I,ee),!u.el){const w=I.subTree=Se(wn);L(null,w,d,g)}return}ee(I,u,d,g,_,E,S)},le=(u,d,g)=>{const v=d.component=u.component;if(gl(u,d,g))if(v.asyncDep&&!v.asyncResolved){J(v,d,g);return}else v.next=d,cl(v.update),v.update();else d.component=u.component,d.el=u.el,v.vnode=d},ee=(u,d,g,v,_,E,S)=>{const I=()=>{if(u.isMounted){let{next:N,bu:O,u:M,parent:U,vnode:K}=u,se=N,X;gt(u,!1),N?(N.el=K.el,J(u,N,S)):N=K,O&&qn(O),(X=N.props&&N.props.onVnodeBeforeUpdate)&&Le(X,U,N,K),gt(u,!0);const re=Pr(u),Pe=u.subTree;u.subTree=re,A(Pe,re,h(Pe.el),k(Pe),u,_,E),N.el=re.el,se===null&&ml(u,re.el),M&&ve(M,_),(X=N.props&&N.props.onVnodeUpdated)&&ve(()=>Le(X,U,N,K),_)}else{let N;const{el:O,props:M}=d,{bm:U,m:K,parent:se}=u,X=Jr(d);if(gt(u,!1),U&&qn(U),!X&&(N=M&&M.onVnodeBeforeMount)&&Le(N,se,d),gt(u,!0),O&&$){const re=()=>{u.subTree=Pr(u),$(O,u.subTree,u,_,null)};X?d.type.__asyncLoader().then(()=>!u.isUnmounted&&re()):re()}else{const re=u.subTree=Pr(u);A(null,re,g,v,u,_,E),d.el=re.el}if(K&&ve(K,_),!X&&(N=M&&M.onVnodeMounted)){const re=d;ve(()=>Le(N,se,re),_)}d.shapeFlag&256&&u.a&&ve(u.a,_),u.isMounted=!0,d=g=v=null}},w=u.effect=new Is(I,()=>Bo(u.update),u.scope),b=u.update=w.run.bind(w);b.id=u.uid,gt(u,!0),b()},J=(u,d,g)=>{d.component=u;const v=u.vnode.props;u.vnode=d,u.next=null,Fl(u,d.props,v,g),Hl(u,d.children,g),Jt(),Ps(void 0,u.update),Yt()},ye=(u,d,g,v,_,E,S,I,w=!1)=>{const b=u&&u.children,N=u?u.shapeFlag:0,O=d.children,{patchFlag:M,shapeFlag:U}=d;if(M>0){if(M&128){We(b,O,g,v,_,E,S,I,w);return}else if(M&256){Pt(b,O,g,v,_,E,S,I,w);return}}U&8?(N&16&&T(b,_,E),O!==b&&f(g,O)):N&16?U&16?We(b,O,g,v,_,E,S,I,w):T(b,_,E,!0):(N&8&&f(g,""),U&16&&ae(O,g,v,_,E,S,I,w))},Pt=(u,d,g,v,_,E,S,I,w)=>{u=u||Ft,d=d||Ft;const b=u.length,N=d.length,O=Math.min(b,N);let M;for(M=0;M<O;M++){const U=d[M]=w?it(d[M]):Ue(d[M]);A(u[M],U,g,null,_,E,S,I,w)}b>N?T(u,_,E,!0,!1,O):ae(d,g,v,_,E,S,I,w,O)},We=(u,d,g,v,_,E,S,I,w)=>{let b=0;const N=d.length;let O=u.length-1,M=N-1;for(;b<=O&&b<=M;){const U=u[b],K=d[b]=w?it(d[b]):Ue(d[b]);if(nn(U,K))A(U,K,g,null,_,E,S,I,w);else break;b++}for(;b<=O&&b<=M;){const U=u[O],K=d[M]=w?it(d[M]):Ue(d[M]);if(nn(U,K))A(U,K,g,null,_,E,S,I,w);else break;O--,M--}if(b>O){if(b<=M){const U=M+1,K=U<N?d[U].el:v;for(;b<=M;)A(null,d[b]=w?it(d[b]):Ue(d[b]),g,K,_,E,S,I,w),b++}}else if(b>M)for(;b<=O;)Te(u[b],_,E,!0),b++;else{const U=b,K=b,se=new Map;for(b=K;b<=M;b++){const be=d[b]=w?it(d[b]):Ue(d[b]);be.key!=null&&se.set(be.key,b)}let X,re=0;const Pe=M-K+1;let kt=!1,Xs=0;const tn=new Array(Pe);for(b=0;b<Pe;b++)tn[b]=0;for(b=U;b<=O;b++){const be=u[b];if(re>=Pe){Te(be,_,E,!0);continue}let De;if(be.key!=null)De=se.get(be.key);else for(X=K;X<=M;X++)if(tn[X-K]===0&&nn(be,d[X])){De=X;break}De===void 0?Te(be,_,E,!0):(tn[De-K]=b+1,De>=Xs?Xs=De:kt=!0,A(be,d[De],g,null,_,E,S,I,w),re++)}const Qs=kt?Kl(tn):Ft;for(X=Qs.length-1,b=Pe-1;b>=0;b--){const be=K+b,De=d[be],Zs=be+1<N?d[be+1].el:v;tn[b]===0?A(null,De,g,Zs,_,E,S,I,w):kt&&(X<0||b!==Qs[X]?xe(De,g,Zs,2):X--)}}},xe=(u,d,g,v,_=null)=>{const{el:E,type:S,transition:I,children:w,shapeFlag:b}=u;if(b&6){xe(u.component.subTree,d,g,v);return}if(b&128){u.suspense.move(d,g,v);return}if(b&64){S.move(u,d,g,te);return}if(S===Ke){r(E,d,g);for(let O=0;O<w.length;O++)xe(w[O],d,g,v);r(u.anchor,d,g);return}if(S===kr){B(u,d,g);return}if(v!==2&&b&1&&I)if(v===0)I.beforeEnter(E),r(E,d,g),ve(()=>I.enter(E),_);else{const{leave:O,delayLeave:M,afterLeave:U}=I,K=()=>r(E,d,g),se=()=>{O(E,()=>{K(),U&&U()})};M?M(E,K,se):se()}else r(E,d,g)},Te=(u,d,g,v=!1,_=!1)=>{const{type:E,props:S,ref:I,children:w,dynamicChildren:b,shapeFlag:N,patchFlag:O,dirs:M}=u;if(I!=null&&Zr(I,null,g,u,!0),N&256){d.ctx.deactivate(u);return}const U=N&1&&M,K=!Jr(u);let se;if(K&&(se=S&&S.onVnodeBeforeUnmount)&&Le(se,d,u),N&6)P(u.component,g,v);else{if(N&128){u.suspense.unmount(g,v);return}U&&pt(u,null,d,"beforeUnmount"),N&64?u.type.remove(u,d,g,_,te,v):b&&(E!==Ke||O>0&&O&64)?T(b,d,g,!1,!0):(E===Ke&&O&384||!_&&N&16)&&T(w,d,g),v&&Cr(u)}(K&&(se=S&&S.onVnodeUnmounted)||U)&&ve(()=>{se&&Le(se,d,u),U&&pt(u,null,d,"unmounted")},g)},Cr=u=>{const{type:d,el:g,anchor:v,transition:_}=u;if(d===Ke){m(g,v);return}if(d===kr){ie(u);return}const E=()=>{s(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(u.shapeFlag&1&&_&&!_.persisted){const{leave:S,delayLeave:I}=_,w=()=>S(g,E);I?I(u.el,E,w):w()}else E()},m=(u,d)=>{let g;for(;u!==d;)g=p(u),s(u),u=g;s(d)},P=(u,d,g)=>{const{bum:v,scope:_,update:E,subTree:S,um:I}=u;v&&qn(v),_.stop(),E&&(E.active=!1,Te(S,u,d,g)),I&&ve(I,d),ve(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},T=(u,d,g,v=!1,_=!1,E=0)=>{for(let S=E;S<u.length;S++)Te(u[S],d,g,v,_)},k=u=>u.shapeFlag&6?k(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),Y=(u,d,g)=>{u==null?d._vnode&&Te(d._vnode,null,null,!0):A(d._vnode||null,u,d,null,null,null,g),jo(),d._vnode=u},te={p:A,um:Te,m:xe,r:Cr,mt:Ot,mc:ae,pc:ye,pbc:Ce,n:k,o:t};let W,$;return e&&([W,$]=e(te)),{render:Y,hydrate:W,createApp:Wl(Y,W)}}function gt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function sa(t,e,n=!1){const r=t.children,s=e.children;if(F(r)&&F(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=it(s[i]),a.el=o.el),n||sa(o,a))}}function Kl(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const ql=t=>t.__isTeleport,ia="components";function Yp(t,e){return Jl(ia,t,!0,e)||t}const Gl=Symbol();function Jl(t,e,n=!0,r=!1){const s=Re||fe;if(s){const i=s.type;if(t===ia){const a=lu(i);if(a&&(a===e||a===je(e)||a===mr(je(e))))return i}const o=gi(s[t]||i[t],e)||gi(s.appContext[t],e);return!o&&r?i:o}}function gi(t,e){return t&&(t[e]||t[je(e)]||t[mr(je(e))])}const Ke=Symbol(void 0),xs=Symbol(void 0),wn=Symbol(void 0),kr=Symbol(void 0),pn=[];let Et=null;function Xp(t=!1){pn.push(Et=t?null:[])}function Yl(){pn.pop(),Et=pn[pn.length-1]||null}let rr=1;function mi(t){rr+=t}function oa(t){return t.dynamicChildren=rr>0?Et||Ft:null,Yl(),rr>0&&Et&&Et.push(t),t}function Qp(t,e,n,r,s,i){return oa(ca(t,e,n,r,s,i,!0))}function Zp(t,e,n,r,s){return oa(Se(t,e,n,r,s,!0))}function es(t){return t?t.__v_isVNode===!0:!1}function nn(t,e){return t.type===e.type&&t.key===e.key}const Ir="__vInternal",aa=({key:t})=>t!=null?t:null,Jn=({ref:t,ref_key:e,ref_for:n})=>t!=null?de(t)||oe(t)||H(t)?{i:Re,r:t,k:e,f:!!n}:t:null;function ca(t,e=null,n=null,r=0,s=null,i=t===Ke?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&aa(e),ref:e&&Jn(e),scopeId:yr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(Ds(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=de(n)?8:16),rr>0&&!o&&Et&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Et.push(c),c}const Se=Xl;function Xl(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Gl)&&(t=wn),es(t)){const a=Tn(t,e,!0);return n&&Ds(a,n),a}if(uu(t)&&(t=t.__vccOpts),e){e=Ql(e);let{class:a,style:c}=e;a&&!de(a)&&(e.class=gs(a)),ue(c)&&(No(c)&&!F(c)&&(c=_e({},c)),e.style=ps(c))}const o=de(t)?1:_l(t)?128:ql(t)?64:ue(t)?4:H(t)?2:0;return ca(t,e,n,r,s,o,i,!0)}function Ql(t){return t?No(t)||Ir in t?_e({},t):t:null}function Tn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?eu(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&aa(a),ref:e&&e.ref?n&&s?F(s)?s.concat(Jn(e)):[s,Jn(e)]:Jn(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ke?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Tn(t.ssContent),ssFallback:t.ssFallback&&Tn(t.ssFallback),el:t.el,anchor:t.anchor}}function Zl(t=" ",e=0){return Se(xs,null,t,e)}function Ue(t){return t==null||typeof t=="boolean"?Se(wn):F(t)?Se(Ke,null,t.slice()):typeof t=="object"?it(t):Se(xs,null,String(t))}function it(t){return t.el===null||t.memo?t:Tn(t)}function Ds(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ds(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Ir in e)?e._ctx=Re:s===3&&Re&&(Re.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:Re},n=32):(e=String(e),r&64?(n=16,e=[Zl(e)]):n=8);t.children=e,t.shapeFlag|=n}function eu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=gs([e.class,r.class]));else if(s==="style")e.style=ps([e.style,r.style]);else if(hr(s)){const i=e[s],o=r[s];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Le(t,e,n,r=null){Me(t,e,7,[n,r])}function eg(t,e,n,r){let s;const i=n&&n[r];if(F(t)||de(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ue(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const ts=t=>t?ua(t)?Ls(t)||t.proxy:ts(t.parent):null,sr=_e(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ts(t.parent),$root:t=>ts(t.root),$emit:t=>t.emit,$options:t=>Xo(t),$forceUpdate:t=>()=>Bo(t.update),$nextTick:t=>Os.bind(t.proxy),$watch:t=>yl.bind(t)}),tu={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==Z&&q(r,e))return o[e]=1,r[e];if(s!==Z&&q(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&q(l,e))return o[e]=3,i[e];if(n!==Z&&q(n,e))return o[e]=4,n[e];Yr&&(o[e]=0)}}const f=sr[e];let h,p;if(f)return e==="$attrs"&&Ee(t,"get",e),f(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Z&&q(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,q(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==Z&&q(s,e)?(s[e]=n,!0):r!==Z&&q(r,e)?(r[e]=n,!0):q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Z&&q(t,o)||e!==Z&&q(e,o)||(a=i[0])&&q(a,o)||q(r,o)||q(sr,o)||q(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?this.set(t,e,n.get(),null):n.value!=null&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},nu=ra();let ru=0;function su(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||nu,i={uid:ru++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new vo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zo(r,s),emitsOptions:Vo(r,s),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:r.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=fl.bind(null,i),t.ce&&t.ce(i),i}let fe=null;const la=()=>fe||Re,Vt=t=>{fe=t,t.scope.on()},wt=()=>{fe&&fe.scope.off(),fe=null};function ua(t){return t.vnode.shapeFlag&4}let Rn=!1;function iu(t,e=!1){Rn=e;const{props:n,children:r}=t.vnode,s=ua(t);Ul(t,n,s,e),$l(t,r);const i=s?ou(t,e):void 0;return Rn=!1,i}function ou(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Wt(new Proxy(t.ctx,tu));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?cu(t):null;Vt(t),Jt();const i=dt(r,t,0,[t.props,s]);if(Yt(),wt(),go(i)){if(i.then(wt,wt),e)return i.then(o=>{_i(t,o,e)}).catch(o=>{vr(o,t,0)});t.asyncDep=i}else _i(t,i,e)}else fa(t,e)}function _i(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ue(e)&&(t.setupState=Lo(e)),fa(t,n)}let vi;function fa(t,e,n){const r=t.type;if(!t.render){if(!e&&vi&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=_e(_e({isCustomElement:i,delimiters:a},o),c);r.render=vi(s,l)}}t.render=r.render||Ne}Vt(t),Jt(),Nl(t),Yt(),wt()}function au(t){return new Proxy(t.attrs,{get(e,n){return Ee(t,"get","$attrs"),e[n]}})}function cu(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=au(t))},slots:t.slots,emit:t.emit,expose:e}}function Ls(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Lo(Wt(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in sr)return sr[n](t)}}))}function lu(t){return H(t)&&t.displayName||t.name}function uu(t){return H(t)&&"__vccOpts"in t}const ke=(t,e)=>il(t,e,Rn);function da(t,e,n){const r=arguments.length;return r===2?ue(e)&&!F(e)?es(e)?Se(t,null,[e]):Se(t,e):Se(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&es(n)&&(n=[n]),Se(t,e,n))}const fu="3.2.31",du="http://www.w3.org/2000/svg",vt=typeof document!="undefined"?document:null,yi=vt&&vt.createElement("template"),hu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?vt.createElementNS(du,t):vt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>vt.createTextNode(t),createComment:t=>vt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>vt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{yi.innerHTML=r?`<svg>${t}</svg>`:t;const a=yi.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function pu(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function gu(t,e,n){const r=t.style,s=de(n);if(n&&!s){for(const i in n)ns(r,i,n[i]);if(e&&!de(e))for(const i in e)n[i]==null&&ns(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const bi=/\s*!important$/;function ns(t,e,n){if(F(n))n.forEach(r=>ns(t,e,r));else if(e.startsWith("--"))t.setProperty(e,n);else{const r=mu(t,e);bi.test(n)?t.setProperty(Gt(r),n.replace(bi,""),"important"):t[r]=n}}const Ii=["Webkit","Moz","ms"],Nr={};function mu(t,e){const n=Nr[e];if(n)return n;let r=je(e);if(r!=="filter"&&r in t)return Nr[e]=r;r=mr(r);for(let s=0;s<Ii.length;s++){const i=Ii[s]+r;if(i in t)return Nr[e]=i}return e}const Ei="http://www.w3.org/1999/xlink";function _u(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ei,e.slice(6,e.length)):t.setAttributeNS(Ei,e,n);else{const i=gc(e);n==null||i&&!fo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function vu(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=fo(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let ir=Date.now,ha=!1;if(typeof window!="undefined"){ir()>document.createEvent("Event").timeStamp&&(ir=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);ha=!!(t&&Number(t[1])<=53)}let rs=0;const yu=Promise.resolve(),bu=()=>{rs=0},Iu=()=>rs||(yu.then(bu),rs=ir());function Lt(t,e,n,r){t.addEventListener(e,n,r)}function Eu(t,e,n,r){t.removeEventListener(e,n,r)}function wu(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Tu(e);if(r){const l=i[e]=Ru(r,s);Lt(t,a,l,c)}else o&&(Eu(t,a,o,c),i[e]=void 0)}}const wi=/(?:Once|Passive|Capture)$/;function Tu(t){let e;if(wi.test(t)){e={};let n;for(;n=t.match(wi);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Gt(t.slice(2)),e]}function Ru(t,e){const n=r=>{const s=r.timeStamp||ir();(ha||s>=n.attached-1)&&Me(Su(r,n.value),e,5,[r])};return n.value=t,n.attached=Iu(),n}function Su(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ti=/^on[a-z]/,Au=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?pu(t,r,s):e==="style"?gu(t,n,r):hr(e)?ms(e)||wu(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Cu(t,e,r,s))?vu(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),_u(t,e,r,s))};function Cu(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Ti.test(e)&&H(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ti.test(e)&&de(n)?!1:e in t}const Ri=t=>{const e=t.props["onUpdate:modelValue"];return F(e)?n=>qn(e,n):e};function Ou(t){t.target.composing=!0}function Si(t){const e=t.target;e.composing&&(e.composing=!1,Pu(e,"input"))}function Pu(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const tg={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Ri(s);const i=r||s.props&&s.props.type==="number";Lt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=jr(a)),t._assign(a)}),n&&Lt(t,"change",()=>{t.value=t.value.trim()}),e||(Lt(t,"compositionstart",Ou),Lt(t,"compositionend",Si),Lt(t,"change",Si))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Ri(i),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&jr(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},ku=_e({patchProp:Au},hu);let Ai;function Nu(){return Ai||(Ai=Vl(ku))}const ng=(...t)=>{const e=Nu().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Mu(r);if(!s)return;const i=e._component;!H(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Mu(t){return de(t)?document.querySelector(t):t}var xu=!1;/*!
  * pinia v2.0.12
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let pa;const Er=t=>pa=t,ga=Symbol();function ss(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var gn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(gn||(gn={}));function rg(){const t=yo(!0),e=t.run(()=>As({}));let n=[],r=[];const s=Wt({install(i){Er(s),s._a=i,i.provide(ga,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!xu?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const ma=()=>{};function Ci(t,e,n,r=ma){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&la()&&Ns(s),s}function Nt(t,...e){t.slice().forEach(n=>{n(...e)})}function is(t,e){for(const n in e){const r=e[n],s=t[n];ss(s)&&ss(r)&&!oe(r)&&!Ye(r)?t[n]=is(s,r):t[n]=r}return t}const Du=Symbol();function Lu(t){return!ss(t)||!t.hasOwnProperty(Du)}const{assign:ze}=Object;function Uu(t){return!!(oe(t)&&t.effect)}function Fu(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const f=nl(n.state.value[t]);return ze(f,i,Object.keys(o||{}).reduce((h,p)=>(h[p]=Wt(ke(()=>{Er(n);const y=n._s.get(t);return o[p].call(y,y)})),h),{}))}return c=_a(t,l,e,n),c.$reset=function(){const h=s?s():{};this.$patch(p=>{ze(p,h)})},c}function _a(t,e,n={},r,s){let i;const o=n.state,a=ze({actions:{}},n),c={deep:!0};let l,f,h=Wt([]),p=Wt([]),y;const R=r.state.value[t];!o&&!R&&(r.state.value[t]={}),As({});function x(j){let V;l=f=!1,typeof j=="function"?(j(r.state.value[t]),V={type:gn.patchFunction,storeId:t,events:y}):(is(r.state.value[t],j),V={type:gn.patchObject,payload:j,storeId:t,events:y}),Os().then(()=>{l=!0}),f=!0,Nt(h,V,r.state.value[t])}const A=ma;function C(){i.stop(),h=[],p=[],r._s.delete(t)}function L(j,V){return function(){Er(r);const ge=Array.from(arguments),ae=[],he=[];function Ce(ce){ae.push(ce)}function Oe(ce){he.push(ce)}Nt(p,{args:ge,name:j,store:B,after:Ce,onError:Oe});let we;try{we=V.apply(this&&this.$id===t?this:B,ge)}catch(ce){throw Nt(he,ce),ce}return we instanceof Promise?we.then(ce=>(Nt(ae,ce),ce)).catch(ce=>(Nt(he,ce),Promise.reject(ce))):(Nt(ae,we),we)}}const z={_p:r,$id:t,$onAction:Ci.bind(null,p),$patch:x,$reset:A,$subscribe(j,V={}){const ge=Ci(h,j,V.detached,()=>ae()),ae=i.run(()=>hn(()=>r.state.value[t],he=>{(V.flush==="sync"?f:l)&&j({storeId:t,type:gn.direct,events:y},he)},ze({},c,V)));return ge},$dispose:C},B=Xt(ze({},z));r._s.set(t,B);const ie=r._e.run(()=>(i=yo(),i.run(()=>e())));for(const j in ie){const V=ie[j];if(oe(V)&&!Uu(V)||Ye(V))o||(R&&Lu(V)&&(oe(V)?V.value=R[j]:is(V,R[j])),r.state.value[t][j]=V);else if(typeof V=="function"){const ge=L(j,V);ie[j]=ge,a.actions[j]=V}}return ze(B,ie),ze(G(B),ie),Object.defineProperty(B,"$state",{get:()=>r.state.value[t],set:j=>{x(V=>{ze(V,j)})}}),r._p.forEach(j=>{ze(B,i.run(()=>j({store:B,app:r._a,pinia:r,options:a})))}),R&&o&&n.hydrate&&n.hydrate(B.$state,R),l=!0,f=!0,B}function sg(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=la();return a=a||l&&Be(ga),a&&Er(a),a=pa,a._s.has(r)||(i?_a(r,e,s,a):Fu(r,s,a)),a._s.get(r)}return o.$id=r,o}function ig(t){t=G(t);const e={};for(const n in t){const r=t[n];(oe(r)||Ye(r))&&(e[n]=Uo(t,n))}return e}/**
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
 */const va=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Bu=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ya={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,f=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,y=l&63;c||(y=64,o||(p=64)),r.push(n[f],n[h],n[p],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(va(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Bu(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const p=i<<2|a>>4;if(r.push(p),l!==64){const y=a<<4&240|l>>2;if(r.push(y),h!==64){const R=l<<6&192|h;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},$u=function(t){const e=va(t);return ya.encodeByteArray(e,!0)},ba=function(t){return $u(t).replace(/\./g,"")},Hu=function(t){try{return ya.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class ju{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function pe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wu(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pe())}function Vu(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function zu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ku(){const t=pe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function qu(){return typeof indexedDB=="object"}function Gu(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Ju="FirebaseError";class Qt extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=Ju,Object.setPrototypeOf(this,Qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Nn.prototype.create)}}class Nn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Yu(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Qt(s,a,r)}}function Yu(t,e){return t.replace(Xu,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Xu=/\{\$([^}]+)}/g;function Qu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function or(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Oi(i)&&Oi(o)){if(!or(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Oi(t){return t!==null&&typeof t=="object"}/**
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
 */function Mn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function an(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function cn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Zu(t,e){const n=new ef(t,e);return n.subscribe.bind(n)}class ef{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");tf(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Mr),s.error===void 0&&(s.error=Mr),s.complete===void 0&&(s.complete=Mr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tf(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Mr(){}/**
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
 */function Ct(t){return t&&t._delegate?t._delegate:t}/**
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
 */function ln(t,e){return new Promise((n,r)=>{t.onsuccess=s=>{n(s.target.result)},t.onerror=s=>{var i;r(`${e}: ${(i=s.target.error)===null||i===void 0?void 0:i.message}`)}})}class Pi{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n){return new Ia(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new Ea(this._db.createObjectStore(e,n))}close(){this._db.close()}}class Ia{constructor(e){this._transaction=e,this.complete=new Promise((n,r)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{r(this._transaction.error)},this._transaction.onabort=()=>{r(this._transaction.error)}})}objectStore(e){return new Ea(this._transaction.objectStore(e))}}class Ea{constructor(e){this._store=e}index(e){return new ki(this._store.index(e))}createIndex(e,n,r){return new ki(this._store.createIndex(e,n,r))}get(e){const n=this._store.get(e);return ln(n,"Error reading from IndexedDB")}put(e,n){const r=this._store.put(e,n);return ln(r,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return ln(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return ln(e,"Error clearing IndexedDB object store")}}class ki{constructor(e){this._index=e}get(e){const n=this._index.get(e);return ln(n,"Error reading from IndexedDB")}}function nf(t,e,n){return new Promise((r,s)=>{try{const i=indexedDB.open(t,e);i.onsuccess=o=>{r(new Pi(o.target.result))},i.onerror=o=>{var a;s(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},i.onupgradeneeded=o=>{n(new Pi(i.result),o.oldVersion,o.newVersion,new Ia(i.transaction))}}catch(i){s(`Error opening indexedDB: ${i.message}`)}})}class zt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class rf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ju;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(of(e))try{this.getOrInitializeService({instanceIdentifier:_t})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=_t){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_t){return this.instances.has(e)}getOptions(e=_t){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sf(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_t){return this.component?this.component.multipleInstances?e:_t:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sf(t){return t===_t?void 0:t}function of(t){return t.instantiationMode==="EAGER"}/**
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
 */class af{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new rf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const cf={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},lf=ne.INFO,uf={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},ff=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=uf[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wa{constructor(e){this.name=e,this._logLevel=lf,this._logHandler=ff,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}/**
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
 */class df{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hf(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function hf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const os="@firebase/app",Ni="0.7.20";/**
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
 */const Us=new wa("@firebase/app"),pf="@firebase/app-compat",gf="@firebase/analytics-compat",mf="@firebase/analytics",_f="@firebase/app-check-compat",vf="@firebase/app-check",yf="@firebase/auth",bf="@firebase/auth-compat",If="@firebase/database",Ef="@firebase/database-compat",wf="@firebase/functions",Tf="@firebase/functions-compat",Rf="@firebase/installations",Sf="@firebase/installations-compat",Af="@firebase/messaging",Cf="@firebase/messaging-compat",Of="@firebase/performance",Pf="@firebase/performance-compat",kf="@firebase/remote-config",Nf="@firebase/remote-config-compat",Mf="@firebase/storage",xf="@firebase/storage-compat",Df="@firebase/firestore",Lf="@firebase/firestore-compat",Uf="firebase",Ff="9.6.10";/**
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
 */const Ta="[DEFAULT]",Bf={[os]:"fire-core",[pf]:"fire-core-compat",[mf]:"fire-analytics",[gf]:"fire-analytics-compat",[vf]:"fire-app-check",[_f]:"fire-app-check-compat",[yf]:"fire-auth",[bf]:"fire-auth-compat",[If]:"fire-rtdb",[Ef]:"fire-rtdb-compat",[wf]:"fire-fn",[Tf]:"fire-fn-compat",[Rf]:"fire-iid",[Sf]:"fire-iid-compat",[Af]:"fire-fcm",[Cf]:"fire-fcm-compat",[Of]:"fire-perf",[Pf]:"fire-perf-compat",[kf]:"fire-rc",[Nf]:"fire-rc-compat",[Mf]:"fire-gcs",[xf]:"fire-gcs-compat",[Df]:"fire-fst",[Lf]:"fire-fst-compat","fire-js":"fire-js",[Uf]:"fire-js-all"};/**
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
 */const ar=new Map,as=new Map;function $f(t,e){try{t.container.addComponent(e)}catch(n){Us.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Sn(t){const e=t.name;if(as.has(e))return Us.debug(`There were multiple attempts to register component ${e}.`),!1;as.set(e,t);for(const n of ar.values())$f(n,t);return!0}function Ra(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Hf={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Rt=new Nn("app","Firebase",Hf);/**
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
 */class jf{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rt.create("app-deleted",{appName:this._name})}}/**
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
 */const wr=Ff;function og(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ta,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Rt.create("bad-app-name",{appName:String(r)});const s=ar.get(r);if(s){if(or(t,s.options)&&or(n,s.config))return s;throw Rt.create("duplicate-app",{appName:r})}const i=new af(r);for(const a of as.values())i.addComponent(a);const o=new jf(t,n,i);return ar.set(r,o),o}function Wf(t=Ta){const e=ar.get(t);if(!e)throw Rt.create("no-app",{appName:t});return e}function $t(t,e,n){var r;let s=(r=Bf[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Us.warn(a.join(" "));return}Sn(new zt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Vf="firebase-heartbeat-database",zf=1,An="firebase-heartbeat-store";let xr=null;function Sa(){return xr||(xr=nf(Vf,zf,(t,e)=>{switch(e){case 0:t.createObjectStore(An)}}).catch(t=>{throw Rt.create("storage-open",{originalErrorMessage:t.message})})),xr}async function Kf(t){try{return(await Sa()).transaction(An).objectStore(An).get(Aa(t))}catch(e){throw Rt.create("storage-get",{originalErrorMessage:e.message})}}async function Mi(t,e){try{const r=(await Sa()).transaction(An,"readwrite");return await r.objectStore(An).put(e,Aa(t)),r.complete}catch(n){throw Rt.create("storage-set",{originalErrorMessage:n.message})}}function Aa(t){return`${t.name}!${t.options.appId}`}/**
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
 */const qf=1024,Gf=30*24*60*60*1e3;class Jf{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Xf(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=xi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Gf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=xi(),{heartbeatsToSend:n,unsentEntries:r}=Yf(this._heartbeatsCache.heartbeats),s=ba(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function xi(){return new Date().toISOString().substring(0,10)}function Yf(t,e=qf){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Di(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Di(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Xf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qu()?Gu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Kf(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Mi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Mi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Di(t){return ba(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Qf(t){Sn(new zt("platform-logger",e=>new df(e),"PRIVATE")),Sn(new zt("heartbeat",e=>new Jf(e),"PRIVATE")),$t(os,Ni,t),$t(os,Ni,"esm2017"),$t("fire-js","")}Qf("");var Zf="firebase",ed="9.6.10";/**
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
 */$t(Zf,ed,"app");/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ca=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Zt=t=>Ca?Symbol(t):"_vr_"+t,td=Zt("rvlm"),Li=Zt("rvd"),Fs=Zt("r"),Bs=Zt("rl"),cs=Zt("rvl"),Ut=typeof window!="undefined";function nd(t){return t.__esModule||Ca&&t[Symbol.toStringTag]==="Module"}const Q=Object.assign;function Dr(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const mn=()=>{},rd=/\/$/,sd=t=>t.replace(rd,"");function Lr(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=cd(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function id(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ui(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function od(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Kt(e.matched[r],n.matched[s])&&Oa(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Kt(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Oa(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!ad(t[n],e[n]))return!1;return!0}function ad(t,e){return Array.isArray(t)?Fi(t,e):Array.isArray(e)?Fi(e,t):t===e}function Fi(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function cd(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Cn;(function(t){t.pop="pop",t.push="push"})(Cn||(Cn={}));var _n;(function(t){t.back="back",t.forward="forward",t.unknown=""})(_n||(_n={}));function ld(t){if(!t)if(Ut){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),sd(t)}const ud=/^[^#]+#/;function fd(t,e){return t.replace(ud,"#")+e}function dd(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Tr=()=>({left:window.pageXOffset,top:window.pageYOffset});function hd(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=dd(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Bi(t,e){return(history.state?history.state.position-e:-1)+t}const ls=new Map;function pd(t,e){ls.set(t,e)}function gd(t){const e=ls.get(t);return ls.delete(t),e}let md=()=>location.protocol+"//"+location.host;function Pa(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Ui(c,"")}return Ui(n,t)+r+s}function _d(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const y=Pa(t,location),R=n.value,x=e.value;let A=0;if(p){if(n.value=y,e.value=p,o&&o===R){o=null;return}A=x?p.position-x.position:0}else r(y);s.forEach(C=>{C(n.value,R,{delta:A,type:Cn.pop,direction:A?A>0?_n.forward:_n.back:_n.unknown})})};function c(){o=n.value}function l(p){s.push(p);const y=()=>{const R=s.indexOf(p);R>-1&&s.splice(R,1)};return i.push(y),y}function f(){const{history:p}=window;!p.state||p.replaceState(Q({},p.state,{scroll:Tr()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f),{pauseListeners:c,listen:l,destroy:h}}function $i(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Tr():null}}function vd(t){const{history:e,location:n}=window,r={value:Pa(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:md()+t+c;try{e[f?"replaceState":"pushState"](l,"",p),s.value=l}catch(y){console.error(y),n[f?"replace":"assign"](p)}}function o(c,l){const f=Q({},e.state,$i(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,f,!0),r.value=c}function a(c,l){const f=Q({},s.value,e.state,{forward:c,scroll:Tr()});i(f.current,f,!0);const h=Q({},$i(r.value,c,null),{position:f.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function ag(t){t=ld(t);const e=vd(t),n=_d(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Q({location:"",base:t,go:r,createHref:fd.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function yd(t){return typeof t=="string"||t&&typeof t=="object"}function ka(t){return typeof t=="string"||typeof t=="symbol"}const tt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Na=Zt("nf");var Hi;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Hi||(Hi={}));function qt(t,e){return Q(new Error,{type:t,[Na]:!0},e)}function nt(t,e){return t instanceof Error&&Na in t&&(e==null||!!(t.type&e))}const ji="[^/]+?",bd={sensitive:!1,strict:!1,start:!0,end:!0},Id=/[.+*?^${}()[\]/\\]/g;function Ed(t,e){const n=Q({},bd,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const p=l[h];let y=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(Id,"\\$&"),y+=40;else if(p.type===1){const{value:R,repeatable:x,optional:A,regexp:C}=p;i.push({name:R,repeatable:x,optional:A});const L=C||ji;if(L!==ji){y+=10;try{new RegExp(`(${L})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${R}" (${L}): `+B.message)}}let z=x?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;h||(z=A&&l.length<2?`(?:/${z})`:"/"+z),A&&(z+="?"),s+=z,y+=20,A&&(y+=-8),x&&(y+=-20),L===".*"&&(y+=-50)}f.push(y)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const f=l.match(o),h={};if(!f)return null;for(let p=1;p<f.length;p++){const y=f[p]||"",R=i[p-1];h[R.name]=y&&R.repeatable?y.split("/"):y}return h}function c(l){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const y of p)if(y.type===0)f+=y.value;else if(y.type===1){const{value:R,repeatable:x,optional:A}=y,C=R in l?l[R]:"";if(Array.isArray(C)&&!x)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const L=Array.isArray(C)?C.join("/"):C;if(!L)if(A)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${R}"`);f+=L}}return f}return{re:o,score:r,keys:i,parse:a,stringify:c}}function wd(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Td(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=wd(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const Rd={type:0,value:""},Sd=/[a-zA-Z0-9_]/;function Ad(t){if(!t)return[[]];if(t==="/")return[[Rd]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${l}": ${y}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",f="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:Sd.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Cd(t,e,n){const r=Ed(Ad(t.path),n),s=Q(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Od(t,e){const n=[],r=new Map;e=Vi({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,h,p){const y=!p,R=kd(f);R.aliasOf=p&&p.record;const x=Vi(e,f),A=[R];if("alias"in f){const z=typeof f.alias=="string"?[f.alias]:f.alias;for(const B of z)A.push(Q({},R,{components:p?p.record.components:R.components,path:B,aliasOf:p?p.record:R}))}let C,L;for(const z of A){const{path:B}=z;if(h&&B[0]!=="/"){const ie=h.record.path,j=ie[ie.length-1]==="/"?"":"/";z.path=h.record.path+(B&&j+B)}if(C=Cd(z,h,x),p?p.alias.push(C):(L=L||C,L!==C&&L.alias.push(C),y&&f.name&&!Wi(C)&&o(f.name)),"children"in R){const ie=R.children;for(let j=0;j<ie.length;j++)i(ie[j],C,p&&p.children[j])}p=p||C,c(C)}return L?()=>{o(L)}:mn}function o(f){if(ka(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){let h=0;for(;h<n.length&&Td(f,n[h])>=0&&(f.record.path!==n[h].record.path||!Ma(f,n[h]));)h++;n.splice(h,0,f),f.record.name&&!Wi(f)&&r.set(f.record.name,f)}function l(f,h){let p,y={},R,x;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw qt(1,{location:f});x=p.record.name,y=Q(Pd(h.params,p.keys.filter(L=>!L.optional).map(L=>L.name)),f.params),R=p.stringify(y)}else if("path"in f)R=f.path,p=n.find(L=>L.re.test(R)),p&&(y=p.parse(R),x=p.record.name);else{if(p=h.name?r.get(h.name):n.find(L=>L.re.test(h.path)),!p)throw qt(1,{location:f,currentLocation:h});x=p.record.name,y=Q({},h.params,f.params),R=p.stringify(y)}const A=[];let C=p;for(;C;)A.unshift(C.record),C=C.parent;return{name:x,path:R,params:y,matched:A,meta:Md(A)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Pd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function kd(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Nd(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function Nd(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Wi(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Md(t){return t.reduce((e,n)=>Q(e,n.meta),{})}function Vi(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Ma(t,e){return e.children.some(n=>n===t||Ma(t,n))}const xa=/#/g,xd=/&/g,Dd=/\//g,Ld=/=/g,Ud=/\?/g,Da=/\+/g,Fd=/%5B/g,Bd=/%5D/g,La=/%5E/g,$d=/%60/g,Ua=/%7B/g,Hd=/%7C/g,Fa=/%7D/g,jd=/%20/g;function $s(t){return encodeURI(""+t).replace(Hd,"|").replace(Fd,"[").replace(Bd,"]")}function Wd(t){return $s(t).replace(Ua,"{").replace(Fa,"}").replace(La,"^")}function us(t){return $s(t).replace(Da,"%2B").replace(jd,"+").replace(xa,"%23").replace(xd,"%26").replace($d,"`").replace(Ua,"{").replace(Fa,"}").replace(La,"^")}function Vd(t){return us(t).replace(Ld,"%3D")}function zd(t){return $s(t).replace(xa,"%23").replace(Ud,"%3F")}function Kd(t){return t==null?"":zd(t).replace(Dd,"%2F")}function cr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function qd(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Da," "),o=i.indexOf("="),a=cr(o<0?i:i.slice(0,o)),c=o<0?null:cr(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function zi(t){let e="";for(let n in t){const r=t[n];if(n=Vd(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&us(i)):[r&&us(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Gd(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function rn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ot(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(qt(4,{from:n,to:e})):h instanceof Error?a(h):yd(h)?a(qt(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let f=Promise.resolve(l);t.length<3&&(f=f.then(c)),f.catch(h=>a(h))})}function Ur(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Jd(a)){const l=(a.__vccOpts||a)[e];l&&s.push(ot(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=nd(l)?l.default:l;i.components[o]=f;const p=(f.__vccOpts||f)[e];return p&&ot(p,n,r,i,o)()}))}}return s}function Jd(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ki(t){const e=Be(Fs),n=Be(Bs),r=ke(()=>e.resolve(un(t.to))),s=ke(()=>{const{matched:c}=r.value,{length:l}=c,f=c[l-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(Kt.bind(null,f));if(p>-1)return p;const y=qi(c[l-2]);return l>1&&qi(f)===y&&h[h.length-1].path!==y?h.findIndex(Kt.bind(null,c[l-2])):p}),i=ke(()=>s.value>-1&&Zd(n.params,r.value.params)),o=ke(()=>s.value>-1&&s.value===n.matched.length-1&&Oa(n.params,r.value.params));function a(c={}){return Qd(c)?e[un(t.replace)?"replace":"push"](un(t.to)).catch(mn):Promise.resolve()}return{route:r,href:ke(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Yd=qo({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ki,setup(t,{slots:e}){const n=Xt(Ki(t)),{options:r}=Be(Fs),s=ke(()=>({[Gi(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Gi(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:da("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Xd=Yd;function Qd(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Zd(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function qi(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Gi=(t,e,n)=>t!=null?t:e!=null?e:n,eh=qo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=Be(cs),s=ke(()=>t.route||r.value),i=Be(Li,0),o=ke(()=>s.value.matched[i]);Gn(Li,i+1),Gn(td,o),Gn(cs,s);const a=As();return hn(()=>[a.value,o.value,t.name],([c,l,f],[h,p,y])=>{l&&(l.instances[f]=c,p&&p!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=p.leaveGuards),l.updateGuards.size||(l.updateGuards=p.updateGuards))),c&&l&&(!p||!Kt(l,p)||!h)&&(l.enterCallbacks[f]||[]).forEach(R=>R(c))},{flush:"post"}),()=>{const c=s.value,l=o.value,f=l&&l.components[t.name],h=t.name;if(!f)return Ji(n.default,{Component:f,route:c});const p=l.props[t.name],y=p?p===!0?c.params:typeof p=="function"?p(c):p:null,x=da(f,Q({},y,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return Ji(n.default,{Component:x,route:c})||x}}});function Ji(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const th=eh;function cg(t){const e=Od(t.routes,t),n=t.parseQuery||qd,r=t.stringifyQuery||zi,s=t.history,i=rn(),o=rn(),a=rn(),c=Zc(tt);let l=tt;Ut&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Dr.bind(null,m=>""+m),h=Dr.bind(null,Kd),p=Dr.bind(null,cr);function y(m,P){let T,k;return ka(m)?(T=e.getRecordMatcher(m),k=P):k=m,e.addRoute(k,T)}function R(m){const P=e.getRecordMatcher(m);P&&e.removeRoute(P)}function x(){return e.getRoutes().map(m=>m.record)}function A(m){return!!e.getRecordMatcher(m)}function C(m,P){if(P=Q({},P||c.value),typeof m=="string"){const $=Lr(n,m,P.path),u=e.resolve({path:$.path},P),d=s.createHref($.fullPath);return Q($,u,{params:p(u.params),hash:cr($.hash),redirectedFrom:void 0,href:d})}let T;if("path"in m)T=Q({},m,{path:Lr(n,m.path,P.path).path});else{const $=Q({},m.params);for(const u in $)$[u]==null&&delete $[u];T=Q({},m,{params:h(m.params)}),P.params=h(P.params)}const k=e.resolve(T,P),Y=m.hash||"";k.params=f(p(k.params));const te=id(r,Q({},m,{hash:Wd(Y),path:k.path})),W=s.createHref(te);return Q({fullPath:te,hash:Y,query:r===zi?Gd(m.query):m.query||{}},k,{redirectedFrom:void 0,href:W})}function L(m){return typeof m=="string"?Lr(n,m,c.value.path):Q({},m)}function z(m,P){if(l!==m)return qt(8,{from:P,to:m})}function B(m){return V(m)}function ie(m){return B(Q(L(m),{replace:!0}))}function j(m){const P=m.matched[m.matched.length-1];if(P&&P.redirect){const{redirect:T}=P;let k=typeof T=="function"?T(m):T;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=L(k):{path:k},k.params={}),Q({query:m.query,hash:m.hash,params:m.params},k)}}function V(m,P){const T=l=C(m),k=c.value,Y=m.state,te=m.force,W=m.replace===!0,$=j(T);if($)return V(Q(L($),{state:Y,force:te,replace:W}),P||T);const u=T;u.redirectedFrom=P;let d;return!te&&od(r,k,T)&&(d=qt(16,{to:u,from:k}),Pt(k,k,!0,!1)),(d?Promise.resolve(d):ae(u,k)).catch(g=>nt(g)?nt(g,2)?g:ye(g):ee(g,u,k)).then(g=>{if(g){if(nt(g,2))return V(Q(L(g.to),{state:Y,force:te,replace:W}),P||u)}else g=Ce(u,k,!0,W,Y);return he(u,k,g),g})}function ge(m,P){const T=z(m,P);return T?Promise.reject(T):Promise.resolve()}function ae(m,P){let T;const[k,Y,te]=nh(m,P);T=Ur(k.reverse(),"beforeRouteLeave",m,P);for(const $ of k)$.leaveGuards.forEach(u=>{T.push(ot(u,m,P))});const W=ge.bind(null,m,P);return T.push(W),Mt(T).then(()=>{T=[];for(const $ of i.list())T.push(ot($,m,P));return T.push(W),Mt(T)}).then(()=>{T=Ur(Y,"beforeRouteUpdate",m,P);for(const $ of Y)$.updateGuards.forEach(u=>{T.push(ot(u,m,P))});return T.push(W),Mt(T)}).then(()=>{T=[];for(const $ of m.matched)if($.beforeEnter&&!P.matched.includes($))if(Array.isArray($.beforeEnter))for(const u of $.beforeEnter)T.push(ot(u,m,P));else T.push(ot($.beforeEnter,m,P));return T.push(W),Mt(T)}).then(()=>(m.matched.forEach($=>$.enterCallbacks={}),T=Ur(te,"beforeRouteEnter",m,P),T.push(W),Mt(T))).then(()=>{T=[];for(const $ of o.list())T.push(ot($,m,P));return T.push(W),Mt(T)}).catch($=>nt($,8)?$:Promise.reject($))}function he(m,P,T){for(const k of a.list())k(m,P,T)}function Ce(m,P,T,k,Y){const te=z(m,P);if(te)return te;const W=P===tt,$=Ut?history.state:{};T&&(k||W?s.replace(m.fullPath,Q({scroll:W&&$&&$.scroll},Y)):s.push(m.fullPath,Y)),c.value=m,Pt(m,P,T,W),ye()}let Oe;function we(){Oe=s.listen((m,P,T)=>{const k=C(m),Y=j(k);if(Y){V(Q(Y,{replace:!0}),k).catch(mn);return}l=k;const te=c.value;Ut&&pd(Bi(te.fullPath,T.delta),Tr()),ae(k,te).catch(W=>nt(W,12)?W:nt(W,2)?(V(W.to,k).then($=>{nt($,20)&&!T.delta&&T.type===Cn.pop&&s.go(-1,!1)}).catch(mn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),ee(W,k,te))).then(W=>{W=W||Ce(k,te,!1),W&&(T.delta?s.go(-T.delta,!1):T.type===Cn.pop&&nt(W,20)&&s.go(-1,!1)),he(k,te,W)}).catch(mn)})}let ce=rn(),Ot=rn(),le;function ee(m,P,T){ye(m);const k=Ot.list();return k.length?k.forEach(Y=>Y(m,P,T)):console.error(m),Promise.reject(m)}function J(){return le&&c.value!==tt?Promise.resolve():new Promise((m,P)=>{ce.add([m,P])})}function ye(m){return le||(le=!m,we(),ce.list().forEach(([P,T])=>m?T(m):P()),ce.reset()),m}function Pt(m,P,T,k){const{scrollBehavior:Y}=t;if(!Ut||!Y)return Promise.resolve();const te=!T&&gd(Bi(m.fullPath,0))||(k||!T)&&history.state&&history.state.scroll||null;return Os().then(()=>Y(m,P,te)).then(W=>W&&hd(W)).catch(W=>ee(W,m,P))}const We=m=>s.go(m);let xe;const Te=new Set;return{currentRoute:c,addRoute:y,removeRoute:R,hasRoute:A,getRoutes:x,resolve:C,options:t,push:B,replace:ie,go:We,back:()=>We(-1),forward:()=>We(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ot.add,isReady:J,install(m){const P=this;m.component("RouterLink",Xd),m.component("RouterView",th),m.config.globalProperties.$router=P,Object.defineProperty(m.config.globalProperties,"$route",{enumerable:!0,get:()=>un(c)}),Ut&&!xe&&c.value===tt&&(xe=!0,B(s.location).catch(Y=>{}));const T={};for(const Y in tt)T[Y]=ke(()=>c.value[Y]);m.provide(Fs,P),m.provide(Bs,Xt(T)),m.provide(cs,c);const k=m.unmount;Te.add(m),m.unmount=function(){Te.delete(m),Te.size<1&&(l=tt,Oe&&Oe(),c.value=tt,xe=!1,le=!1),k()}}}}function Mt(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function nh(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Kt(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Kt(l,c))||s.push(c))}return[n,r,s]}function lg(){return Be(Bs)}/*! *****************************************************************************
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
***************************************************************************** */function Hs(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Ba(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rh=Ba,$a=new Nn("auth","Firebase",Ba());/**
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
 */const Yi=new wa("@firebase/auth");function Yn(t,...e){Yi.logLevel<=ne.ERROR&&Yi.error(`Auth (${wr}): ${t}`,...e)}/**
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
 */function Ae(t,...e){throw js(t,...e)}function $e(t,...e){return js(t,...e)}function Ha(t,e,n){const r=Object.assign(Object.assign({},rh()),{[e]:n});return new Nn("auth","Firebase",r).create(e,{appName:t.name})}function sh(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ae(t,"argument-error"),Ha(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function js(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return $a.create(t,...e)}function D(t,e,...n){if(!t)throw js(e,...n)}function Ge(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Yn(e),new Error(e)}function Qe(t,e){t||Ge(e)}/**
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
 */const Xi=new Map;function Je(t){Qe(t instanceof Function,"Expected a class definition");let e=Xi.get(t);return e?(Qe(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xi.set(t,e),e)}/**
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
 */function ih(t,e){const n=Ra(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(or(i,e!=null?e:{}))return s;Ae(s,"already-initialized")}return n.initialize({options:e})}function oh(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Je);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function fs(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ah(){return Qi()==="http:"||Qi()==="https:"}function Qi(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function ch(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ah()||Vu()||"connection"in navigator)?navigator.onLine:!0}function lh(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class xn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qe(n>e,"Short delay should be less than long delay!"),this.isMobile=Wu()||zu()}get(){return ch()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ws(t,e){Qe(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ja{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Ge("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Ge("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Ge("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const uh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const fh=new xn(3e4,6e4);function Dn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ln(t,e,n,r,s={}){return Wa(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Mn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),ja.fetch()(Va(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Wa(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},uh),e);try{const s=new dh(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Fr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Fr(t,"email-already-in-use",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ha(t,f,l);Ae(t,f)}}catch(s){if(s instanceof Qt)throw s;Ae(t,"network-request-failed")}}async function Un(t,e,n,r,s={}){const i=await Ln(t,e,n,r,s);return"mfaPendingCredential"in i&&Ae(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Va(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ws(t.config,s):`${t.config.apiScheme}://${s}`}class dh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r($e(this.auth,"network-request-failed")),fh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=$e(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function hh(t,e){return Ln(t,"POST","/v1/accounts:delete",e)}async function ph(t,e){return Ln(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function vn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gh(t,e=!1){const n=Ct(t),r=await n.getIdToken(e),s=Vs(r);D(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:vn(Br(s.auth_time)),issuedAtTime:vn(Br(s.iat)),expirationTime:vn(Br(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Br(t){return Number(t)*1e3}function Vs(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Yn("JWT malformed, contained fewer than 3 sections"),null;try{const s=Hu(n);return s?JSON.parse(s):(Yn("Failed to decode base64 JWT payload"),null)}catch(s){return Yn("Caught error parsing JWT payload as JSON",s),null}}function mh(t){const e=Vs(t);return D(e,"internal-error"),D(typeof e.exp!="undefined","internal-error"),D(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function On(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Qt&&_h(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function _h({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class vh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class za{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vn(this.lastLoginAt),this.creationTime=vn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function lr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await On(t,ph(n,{idToken:r}));D(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Ih(i.providerUserInfo):[],a=bh(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),f=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new za(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function yh(t){const e=Ct(t);await lr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bh(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ih(t){return t.map(e=>{var{providerId:n}=e,r=Hs(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Eh(t,e){const n=await Wa(t,{},async()=>{const r=Mn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Va(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ja.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Pn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken!="undefined","internal-error"),D(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):mh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return D(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Eh(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Pn;return r&&(D(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(D(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(D(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pn,this.toJSON())}_performRefresh(){return Ge("not implemented")}}/**
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
 */function rt(t,e){D(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Tt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Hs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new za(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await On(this,this.stsTokenManager.getToken(this.auth,e));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return gh(this,e)}reload(){return yh(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Tt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await lr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await On(this,hh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=n.createdAt)!==null&&l!==void 0?l:void 0,L=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:z,emailVerified:B,isAnonymous:ie,providerData:j,stsTokenManager:V}=n;D(z&&V,e,"internal-error");const ge=Pn.fromJSON(this.name,V);D(typeof z=="string",e,"internal-error"),rt(h,e.name),rt(p,e.name),D(typeof B=="boolean",e,"internal-error"),D(typeof ie=="boolean",e,"internal-error"),rt(y,e.name),rt(R,e.name),rt(x,e.name),rt(A,e.name),rt(C,e.name),rt(L,e.name);const ae=new Tt({uid:z,auth:e,email:p,emailVerified:B,displayName:h,isAnonymous:ie,photoURL:R,phoneNumber:y,tenantId:x,stsTokenManager:ge,createdAt:C,lastLoginAt:L});return j&&Array.isArray(j)&&(ae.providerData=j.map(he=>Object.assign({},he))),A&&(ae._redirectEventId=A),ae}static async _fromIdTokenResponse(e,n,r=!1){const s=new Pn;s.updateFromServerResponse(n);const i=new Tt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await lr(i),i}}/**
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
 */class Ka{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ka.type="NONE";const Zi=Ka;/**
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
 */function Xn(t,e,n){return`firebase:${t}:${e}:${n}`}class Ht{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Xn(this.userKey,s.apiKey,i),this.fullPersistenceKey=Xn("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ht(Je(Zi),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Je(Zi);const o=Xn(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const f=await l._get(o);if(f){const h=Tt._fromJSON(e,f);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ht(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Ht(i,e,r))}}/**
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
 */function eo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ja(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qa(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xa(e))return"Blackberry";if(Qa(e))return"Webos";if(zs(e))return"Safari";if((e.includes("chrome/")||Ga(e))&&!e.includes("edge/"))return"Chrome";if(Ya(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function qa(t=pe()){return/firefox\//i.test(t)}function zs(t=pe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ga(t=pe()){return/crios\//i.test(t)}function Ja(t=pe()){return/iemobile/i.test(t)}function Ya(t=pe()){return/android/i.test(t)}function Xa(t=pe()){return/blackberry/i.test(t)}function Qa(t=pe()){return/webos/i.test(t)}function Rr(t=pe()){return/iphone|ipad|ipod/i.test(t)}function wh(t=pe()){var e;return Rr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Th(){return Ku()&&document.documentMode===10}function Za(t=pe()){return Rr(t)||Ya(t)||Qa(t)||Xa(t)||/windows phone/i.test(t)||Ja(t)}function Rh(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ec(t,e=[]){let n;switch(t){case"Browser":n=eo(pe());break;case"Worker":n=`${eo(pe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${wr}/${r}`}/**
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
 */class Sh{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new to(this),this.idTokenSubscription=new to(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$a,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Je(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ht.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===i)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await lr(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ct(e):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Je(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Nn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Je(e)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await Ht.create(this,[Je(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return D(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ec(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Fn(t){return Ct(t)}class to{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zu(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Ks{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ge("not implemented")}_getIdTokenResponse(e){return Ge("not implemented")}_linkToIdToken(e,n){return Ge("not implemented")}_getReauthenticationResolver(e){return Ge("not implemented")}}async function Ah(t,e){return Ln(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Ch(t,e){return Un(t,"POST","/v1/accounts:signInWithPassword",Dn(t,e))}/**
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
 */async function Oh(t,e){return Un(t,"POST","/v1/accounts:signInWithEmailLink",Dn(t,e))}async function Ph(t,e){return Un(t,"POST","/v1/accounts:signInWithEmailLink",Dn(t,e))}/**
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
 */class kn extends Ks{constructor(e,n,r,s=null){super("password",r);this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new kn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new kn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Ch(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Oh(e,{email:this._email,oobCode:this._password});default:Ae(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Ah(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ph(e,{idToken:n,email:this._email,oobCode:this._password});default:Ae(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function jt(t,e){return Un(t,"POST","/v1/accounts:signInWithIdp",Dn(t,e))}/**
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
 */const kh="http://localhost";class St extends Ks{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new St(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ae("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Hs(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new St(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return jt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,jt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,jt(e,n)}buildRequest(){const e={requestUri:kh,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Mn(n)}return e}}/**
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
 */function Nh(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Mh(t){const e=an(cn(t)).link,n=e?an(cn(e)).deep_link_id:null,r=an(cn(t)).deep_link_id;return(r?an(cn(r)).link:null)||r||n||e||t}class qs{constructor(e){var n,r,s,i,o,a;const c=an(cn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,h=Nh((s=c.mode)!==null&&s!==void 0?s:null);D(l&&f&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Mh(e);try{return new qs(n)}catch{return null}}}/**
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
 */class en{constructor(){this.providerId=en.PROVIDER_ID}static credential(e,n){return kn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=qs.parseLink(n);return D(r,"argument-error"),kn._fromEmailAndCode(e,r.code,r.tenantId)}}en.PROVIDER_ID="password";en.EMAIL_PASSWORD_SIGN_IN_METHOD="password";en.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Gs{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Bn extends Gs{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class at extends Bn{constructor(){super("facebook.com")}static credential(e){return St._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return at.credential(e.oauthAccessToken)}catch{return null}}}at.FACEBOOK_SIGN_IN_METHOD="facebook.com";at.PROVIDER_ID="facebook.com";/**
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
 */class ct extends Bn{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return St._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ct.credential(n,r)}catch{return null}}}ct.GOOGLE_SIGN_IN_METHOD="google.com";ct.PROVIDER_ID="google.com";/**
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
 */class lt extends Bn{constructor(){super("github.com")}static credential(e){return St._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lt.credential(e.oauthAccessToken)}catch{return null}}}lt.GITHUB_SIGN_IN_METHOD="github.com";lt.PROVIDER_ID="github.com";/**
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
 */class ut extends Bn{constructor(){super("twitter.com")}static credential(e,n){return St._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ut.credential(n,r)}catch{return null}}}ut.TWITTER_SIGN_IN_METHOD="twitter.com";ut.PROVIDER_ID="twitter.com";/**
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
 */async function xh(t,e){return Un(t,"POST","/v1/accounts:signUp",Dn(t,e))}/**
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
 */class At{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Tt._fromIdTokenResponse(e,r,s),o=no(r);return new At({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=no(r);return new At({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function no(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ur extends Qt{constructor(e,n,r,s){var i;super(n.code,n.message);this.operationType=r,this.user=s,Object.setPrototypeOf(this,ur.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ur(e,n,r,s)}}function tc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ur._fromErrorAndOperation(t,i,e,r):i})}async function Dh(t,e,n=!1){const r=await On(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return At._forOperation(t,"link",r)}/**
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
 */async function Lh(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await On(t,tc(r,s,e,t),n);D(i.idToken,r,"internal-error");const o=Vs(i.idToken);D(o,r,"internal-error");const{sub:a}=o;return D(t.uid===a,r,"user-mismatch"),At._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ae(r,"user-mismatch"),i}}/**
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
 */async function nc(t,e,n=!1){const r="signIn",s=await tc(t,r,e),i=await At._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Uh(t,e){return nc(Fn(t),e)}async function ug(t,e,n){const r=Fn(t),s=await xh(r,{returnSecureToken:!0,email:e,password:n}),i=await At._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function fg(t,e,n){return Uh(Ct(t),en.credential(e,n))}function dg(t,e,n,r){return Ct(t).onAuthStateChanged(e,n,r)}function hg(t){return Ct(t).signOut()}const fr="__sak";/**
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
 */class rc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fr,"1"),this.storage.removeItem(fr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Fh(){const t=pe();return zs(t)||Rr(t)}const Bh=1e3,$h=10;class sc extends rc{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Fh()&&Rh(),this.fallbackToPolling=Za(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Th()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,$h):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Bh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sc.type="LOCAL";const Hh=sc;/**
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
 */class ic extends rc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ic.type="SESSION";const oc=ic;/**
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
 */function jh(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Sr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Sr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await jh(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sr.receivers=[];/**
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
 */function Js(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Wh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Js("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function He(){return window}function Vh(t){He().location.href=t}/**
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
 */function ac(){return typeof He().WorkerGlobalScope!="undefined"&&typeof He().importScripts=="function"}async function zh(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Kh(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function qh(){return ac()?self:null}/**
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
 */const cc="firebaseLocalStorageDb",Gh=1,dr="firebaseLocalStorage",lc="fbase_key";class $n{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ar(t,e){return t.transaction([dr],e?"readwrite":"readonly").objectStore(dr)}function Jh(){const t=indexedDB.deleteDatabase(cc);return new $n(t).toPromise()}function ds(){const t=indexedDB.open(cc,Gh);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(dr,{keyPath:lc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(dr)?e(r):(r.close(),await Jh(),e(await ds()))})})}async function ro(t,e,n){const r=Ar(t,!0).put({[lc]:e,value:n});return new $n(r).toPromise()}async function Yh(t,e){const n=Ar(t,!1).get(e),r=await new $n(n).toPromise();return r===void 0?null:r.value}function so(t,e){const n=Ar(t,!0).delete(e);return new $n(n).toPromise()}const Xh=800,Qh=3;class uc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ds(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Qh)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ac()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sr._getInstance(qh()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await zh(),!this.activeServiceWorker)return;this.sender=new Wh(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Kh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ds();return await ro(e,fr,"1"),await so(e,fr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ro(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Yh(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>so(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ar(s,!1).getAll();return new $n(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Xh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uc.type="LOCAL";const Zh=uc;/**
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
 */function ep(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function tp(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=$e("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",ep().appendChild(r)})}function np(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new xn(3e4,6e4);/**
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
 */function fc(t,e){return e?Je(e):(D(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ys extends Ks{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return jt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return jt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return jt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function rp(t){return nc(t.auth,new Ys(t),t.bypassAuthState)}function sp(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),Lh(n,new Ys(t),t.bypassAuthState)}async function ip(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),Dh(n,new Ys(t),t.bypassAuthState)}/**
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
 */class dc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rp;case"linkViaPopup":case"linkViaRedirect":return ip;case"reauthViaPopup":case"reauthViaRedirect":return sp;default:Ae(this.auth,"internal-error")}}resolve(e){Qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const op=new xn(2e3,1e4);async function pg(t,e,n){const r=Fn(t);sh(t,e,Gs);const s=fc(r,n);return new bt(r,"signInViaPopup",e,s).executeNotNull()}class bt extends dc{constructor(e,n,r,s,i){super(e,n,s,i);this.provider=r,this.authWindow=null,this.pollId=null,bt.currentPopupAction&&bt.currentPopupAction.cancel(),bt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){Qe(this.filter.length===1,"Popup operations only handle one event");const e=Js();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($e(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($e(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($e(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,op.get())};e()}}bt.currentPopupAction=null;/**
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
 */const ap="pendingRedirect",$r=new Map;class cp extends dc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=$r.get(this.auth._key());if(!e){try{const r=await lp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}$r.set(this.auth._key(),e)}return this.bypassAuthState||$r.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lp(t,e){const n=fp(e),r=up(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function up(t){return Je(t._redirectPersistence)}function fp(t){return Xn(ap,t.config.apiKey,t.name)}async function dp(t,e,n=!1){const r=Fn(t),s=fc(r,e),o=await new cp(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const hp=10*60*1e3;class pp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gp(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!hc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError($e(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hp&&this.cachedEventUids.clear(),this.cachedEventUids.has(io(e))}saveEventToCache(e){this.cachedEventUids.add(io(e)),this.lastProcessedEventTime=Date.now()}}function io(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function hc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gp(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hc(t);default:return!1}}/**
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
 */async function mp(t,e={}){return Ln(t,"GET","/v1/projects",e)}/**
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
 */const _p=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vp=/^https?/;async function yp(t){if(t.config.emulator)return;const{authorizedDomains:e}=await mp(t);for(const n of e)try{if(bp(n))return}catch{}Ae(t,"unauthorized-domain")}function bp(t){const e=fs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!vp.test(n))return!1;if(_p.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Ip=new xn(3e4,6e4);function oo(){const t=He().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ep(t){return new Promise((e,n)=>{var r,s,i;function o(){oo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{oo(),n($e(t,"network-request-failed"))},timeout:Ip.get()})}if(!((s=(r=He().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=He().gapi)===null||i===void 0)&&i.load)o();else{const a=np("iframefcb");return He()[a]=()=>{gapi.load?o():n($e(t,"network-request-failed"))},tp(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Qn=null,e})}let Qn=null;function wp(t){return Qn=Qn||Ep(t),Qn}/**
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
 */const Tp=new xn(5e3,15e3),Rp="__/auth/iframe",Sp="emulator/auth/iframe",Ap={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Cp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Op(t){const e=t.config;D(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ws(e,Sp):`https://${t.config.authDomain}/${Rp}`,r={apiKey:e.apiKey,appName:t.name,v:wr},s=Cp.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Mn(r).slice(1)}`}async function Pp(t){const e=await wp(t),n=He().gapi;return D(n,t,"internal-error"),e.open({where:document.body,url:Op(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ap,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=$e(t,"network-request-failed"),a=He().setTimeout(()=>{i(o)},Tp.get());function c(){He().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const kp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Np=500,Mp=600,xp="_blank",Dp="http://localhost";class ao{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Lp(t,e,n,r=Np,s=Mp){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},kp),{width:r.toString(),height:s.toString(),top:i,left:o}),l=pe().toLowerCase();n&&(a=Ga(l)?xp:n),qa(l)&&(e=e||Dp,c.scrollbars="yes");const f=Object.entries(c).reduce((p,[y,R])=>`${p}${y}=${R},`,"");if(wh(l)&&a!=="_self")return Up(e||"",a),new ao(null);const h=window.open(e||"",a,f);D(h,t,"popup-blocked");try{h.focus()}catch{}return new ao(h)}function Up(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Fp="__/auth/handler",Bp="emulator/auth/handler";function co(t,e,n,r,s,i){D(t.config.authDomain,t,"auth-domain-config-required"),D(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:wr,eventId:s};if(e instanceof Gs){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Qu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Bn){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${$p(t)}?${Mn(a).slice(1)}`}function $p({config:t}){return t.emulator?Ws(t,Bp):`https://${t.authDomain}/${Fp}`}/**
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
 */const Hr="webStorageSupport";class Hp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=oc,this._completeRedirectFn=dp}async _openPopup(e,n,r,s){var i;Qe((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=co(e,n,r,fs(),s);return Lp(e,o,Js())}async _openRedirect(e,n,r,s){return await this._originValidation(e),Vh(co(e,n,r,fs(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Qe(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Pp(e),r=new pp(e);return n.register("authEvent",s=>(D(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hr,{type:Hr},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Hr];o!==void 0&&n(!!o),Ae(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yp(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Za()||zs()||Rr()}}const jp=Hp;var lo="@firebase/auth",uo="0.19.11";/**
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
 */class Wp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Vp(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function zp(t){Sn(new zt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{D(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),D(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ec(t)},f=new Sh(a,c,l);return oh(f,n),f})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Sn(new zt("auth-internal",e=>{const n=Fn(e.getProvider("auth").getImmediate());return(r=>new Wp(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),$t(lo,uo,Vp(t)),$t(lo,uo,"esm2017")}/**
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
 */function gg(t=Wf()){const e=Ra(t,"auth");return e.isInitialized()?e.getImmediate():ih(t,{popupRedirectResolver:jp,persistence:[Zh,Hh,oc]})}zp("Browser");export{lg as A,ig as B,ke as C,eg as D,ps as E,Ke as F,ct as G,Kp as H,sg as I,Ns as J,gs as K,Zp as L,th as R,ag as a,Tl as b,cg as c,qo as d,Yp as e,Xp as f,gg as g,Qp as h,ca as i,Se as j,Zl as k,og as l,ng as m,rg as n,dg as o,Jp as p,qp as q,As as r,hg as s,Gp as t,un as u,tg as v,dl as w,ug as x,pg as y,fg as z};
