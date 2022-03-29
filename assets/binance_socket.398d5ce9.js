import{L as ye}from"./vendor.061beea6.js";var F={exports:{}},ae=function(e,r){return function(){for(var s=new Array(arguments.length),i=0;i<s.length;i++)s[i]=arguments[i];return e.apply(r,s)}},Ee=ae,w=Object.prototype.toString;function H(t){return Array.isArray(t)}function q(t){return typeof t=="undefined"}function Ce(t){return t!==null&&!q(t)&&t.constructor!==null&&!q(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}function ie(t){return w.call(t)==="[object ArrayBuffer]"}function Oe(t){return w.call(t)==="[object FormData]"}function Re(t){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&ie(t.buffer),e}function Te(t){return typeof t=="string"}function ge(t){return typeof t=="number"}function oe(t){return t!==null&&typeof t=="object"}function k(t){if(w.call(t)!=="[object Object]")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function xe(t){return w.call(t)==="[object Date]"}function ke(t){return w.call(t)==="[object File]"}function Ne(t){return w.call(t)==="[object Blob]"}function ue(t){return w.call(t)==="[object Function]"}function Ae(t){return oe(t)&&ue(t.pipe)}function $e(t){return w.call(t)==="[object URLSearchParams]"}function Ue(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function Be(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function M(t,e){if(!(t===null||typeof t=="undefined"))if(typeof t!="object"&&(t=[t]),H(t))for(var r=0,n=t.length;r<n;r++)e.call(null,t[r],r,t);else for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.call(null,t[s],s,t)}function _(){var t={};function e(s,i){k(t[i])&&k(s)?t[i]=_(t[i],s):k(s)?t[i]=_({},s):H(s)?t[i]=s.slice():t[i]=s}for(var r=0,n=arguments.length;r<n;r++)M(arguments[r],e);return t}function Le(t,e,r){return M(e,function(s,i){r&&typeof s=="function"?t[i]=Ee(s,r):t[i]=s}),t}function Pe(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}var h={isArray:H,isArrayBuffer:ie,isBuffer:Ce,isFormData:Oe,isArrayBufferView:Re,isString:Te,isNumber:ge,isObject:oe,isPlainObject:k,isUndefined:q,isDate:xe,isFile:ke,isBlob:Ne,isFunction:ue,isStream:Ae,isURLSearchParams:$e,isStandardBrowserEnv:Be,forEach:M,merge:_,extend:Le,trim:Ue,stripBOM:Pe},C=h;function K(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var ce=function(e,r,n){if(!r)return e;var s;if(n)s=n(r);else if(C.isURLSearchParams(r))s=r.toString();else{var i=[];C.forEach(r,function(c,m){c===null||typeof c=="undefined"||(C.isArray(c)?m=m+"[]":c=[c],C.forEach(c,function(f){C.isDate(f)?f=f.toISOString():C.isObject(f)&&(f=JSON.stringify(f)),i.push(K(m)+"="+K(f))}))}),s=i.join("&")}if(s){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e},De=h;function A(){this.handlers=[]}A.prototype.use=function(e,r,n){return this.handlers.push({fulfilled:e,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1};A.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};A.prototype.forEach=function(e){De.forEach(this.handlers,function(n){n!==null&&e(n)})};var Ie=A,je=h,qe=function(e,r){je.forEach(e,function(s,i){i!==r&&i.toUpperCase()===r.toUpperCase()&&(e[r]=s,delete e[i])})},fe=function(e,r,n,s,i){return e.config=r,n&&(e.code=n),e.request=s,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},le={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},_e=fe,de=function(e,r,n,s,i){var o=new Error(e);return _e(o,r,n,s,i)},Fe=de,He=function(e,r,n){var s=n.config.validateStatus;!n.status||!s||s(n.status)?e(n):r(Fe("Request failed with status code "+n.status,n.config,null,n.request,n))},g=h,Me=g.isStandardBrowserEnv()?function(){return{write:function(r,n,s,i,o,u){var c=[];c.push(r+"="+encodeURIComponent(n)),g.isNumber(s)&&c.push("expires="+new Date(s).toGMTString()),g.isString(i)&&c.push("path="+i),g.isString(o)&&c.push("domain="+o),u===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(r){var n=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Je=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},We=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e},ze=Je,Ve=We,Xe=function(e,r){return e&&!ze(r)?Ve(e,r):r},P=h,Ke=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Ge=function(e){var r={},n,s,i;return e&&P.forEach(e.split(`
`),function(u){if(i=u.indexOf(":"),n=P.trim(u.substr(0,i)).toLowerCase(),s=P.trim(u.substr(i+1)),n){if(r[n]&&Ke.indexOf(n)>=0)return;n==="set-cookie"?r[n]=(r[n]?r[n]:[]).concat([s]):r[n]=r[n]?r[n]+", "+s:s}}),r},G=h,Ye=G.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),n;function s(i){var o=i;return e&&(r.setAttribute("href",o),o=r.href),r.setAttribute("href",o),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=s(window.location.href),function(o){var u=G.isString(o)?s(o):o;return u.protocol===n.protocol&&u.host===n.host}}():function(){return function(){return!0}}();function J(t){this.message=t}J.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};J.prototype.__CANCEL__=!0;var $=J,x=h,Qe=He,Ze=Me,et=ce,tt=Xe,rt=Ge,nt=Ye,D=de,st=le,at=$,Y=function(e){return new Promise(function(n,s){var i=e.data,o=e.headers,u=e.responseType,c;function m(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}x.isFormData(i)&&delete o["Content-Type"];var a=new XMLHttpRequest;if(e.auth){var f=e.auth.username||"",b=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(f+":"+b)}var d=tt(e.baseURL,e.url);a.open(e.method.toUpperCase(),et(d,e.params,e.paramsSerializer),!0),a.timeout=e.timeout;function V(){if(!!a){var v="getAllResponseHeaders"in a?rt(a.getAllResponseHeaders()):null,E=!u||u==="text"||u==="json"?a.responseText:a.response,y={data:E,status:a.status,statusText:a.statusText,headers:v,config:e,request:a};Qe(function(L){n(L),m()},function(L){s(L),m()},y),a=null}}if("onloadend"in a?a.onloadend=V:a.onreadystatechange=function(){!a||a.readyState!==4||a.status===0&&!(a.responseURL&&a.responseURL.indexOf("file:")===0)||setTimeout(V)},a.onabort=function(){!a||(s(D("Request aborted",e,"ECONNABORTED",a)),a=null)},a.onerror=function(){s(D("Network Error",e,null,a)),a=null},a.ontimeout=function(){var E=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",y=e.transitional||st;e.timeoutErrorMessage&&(E=e.timeoutErrorMessage),s(D(E,e,y.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",a)),a=null},x.isStandardBrowserEnv()){var X=(e.withCredentials||nt(d))&&e.xsrfCookieName?Ze.read(e.xsrfCookieName):void 0;X&&(o[e.xsrfHeaderName]=X)}"setRequestHeader"in a&&x.forEach(o,function(E,y){typeof i=="undefined"&&y.toLowerCase()==="content-type"?delete o[y]:a.setRequestHeader(y,E)}),x.isUndefined(e.withCredentials)||(a.withCredentials=!!e.withCredentials),u&&u!=="json"&&(a.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&a.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&a.upload&&a.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(c=function(v){!a||(s(!v||v&&v.type?new at("canceled"):v),a.abort(),a=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c))),i||(i=null),a.send(i)})},l=h,Q=qe,it=fe,ot=le,ut={"Content-Type":"application/x-www-form-urlencoded"};function Z(t,e){!l.isUndefined(t)&&l.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function ct(){var t;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(t=Y),t}function ft(t,e,r){if(l.isString(t))try{return(e||JSON.parse)(t),l.trim(t)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(t)}var U={transitional:ot,adapter:ct(),transformRequest:[function(e,r){return Q(r,"Accept"),Q(r,"Content-Type"),l.isFormData(e)||l.isArrayBuffer(e)||l.isBuffer(e)||l.isStream(e)||l.isFile(e)||l.isBlob(e)?e:l.isArrayBufferView(e)?e.buffer:l.isURLSearchParams(e)?(Z(r,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):l.isObject(e)||r&&r["Content-Type"]==="application/json"?(Z(r,"application/json"),ft(e)):e}],transformResponse:[function(e){var r=this.transitional||U.transitional,n=r&&r.silentJSONParsing,s=r&&r.forcedJSONParsing,i=!n&&this.responseType==="json";if(i||s&&l.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(i)throw o.name==="SyntaxError"?it(o,this,"E_JSON_PARSE"):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};l.forEach(["delete","get","head"],function(e){U.headers[e]={}});l.forEach(["post","put","patch"],function(e){U.headers[e]=l.merge(ut)});var W=U,lt=h,dt=W,ht=function(e,r,n){var s=this||dt;return lt.forEach(n,function(o){e=o.call(s,e,r)}),e},he=function(e){return!!(e&&e.__CANCEL__)},ee=h,I=ht,pt=he,mt=W,vt=$;function j(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new vt("canceled")}var bt=function(e){j(e),e.headers=e.headers||{},e.data=I.call(e,e.data,e.headers,e.transformRequest),e.headers=ee.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),ee.forEach(["delete","get","head","post","put","patch","common"],function(s){delete e.headers[s]});var r=e.adapter||mt.adapter;return r(e).then(function(s){return j(e),s.data=I.call(e,s.data,s.headers,e.transformResponse),s},function(s){return pt(s)||(j(e),s&&s.response&&(s.response.data=I.call(e,s.response.data,s.response.headers,e.transformResponse))),Promise.reject(s)})},p=h,pe=function(e,r){r=r||{};var n={};function s(a,f){return p.isPlainObject(a)&&p.isPlainObject(f)?p.merge(a,f):p.isPlainObject(f)?p.merge({},f):p.isArray(f)?f.slice():f}function i(a){if(p.isUndefined(r[a])){if(!p.isUndefined(e[a]))return s(void 0,e[a])}else return s(e[a],r[a])}function o(a){if(!p.isUndefined(r[a]))return s(void 0,r[a])}function u(a){if(p.isUndefined(r[a])){if(!p.isUndefined(e[a]))return s(void 0,e[a])}else return s(void 0,r[a])}function c(a){if(a in r)return s(e[a],r[a]);if(a in e)return s(void 0,e[a])}var m={url:o,method:o,data:o,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:c};return p.forEach(Object.keys(e).concat(Object.keys(r)),function(f){var b=m[f]||i,d=b(f);p.isUndefined(d)&&b!==c||(n[f]=d)}),n},me={version:"0.26.1"},St=me.version,z={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){z[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}});var te={};z.transitional=function(e,r,n){function s(i,o){return"[Axios v"+St+"] Transitional option '"+i+"'"+o+(n?". "+n:"")}return function(i,o,u){if(e===!1)throw new Error(s(o," has been removed"+(r?" in "+r:"")));return r&&!te[o]&&(te[o]=!0,console.warn(s(o," has been deprecated since v"+r+" and will be removed in the near future"))),e?e(i,o,u):!0}};function wt(t,e,r){if(typeof t!="object")throw new TypeError("options must be an object");for(var n=Object.keys(t),s=n.length;s-- >0;){var i=n[s],o=e[i];if(o){var u=t[i],c=u===void 0||o(u,i,t);if(c!==!0)throw new TypeError("option "+i+" must be "+c);continue}if(r!==!0)throw Error("Unknown option "+i)}}var yt={assertOptions:wt,validators:z},ve=h,Et=ce,re=Ie,ne=bt,B=pe,be=yt,O=be.validators;function T(t){this.defaults=t,this.interceptors={request:new re,response:new re}}T.prototype.request=function(e,r){typeof e=="string"?(r=r||{},r.url=e):r=e||{},r=B(this.defaults,r),r.method?r.method=r.method.toLowerCase():this.defaults.method?r.method=this.defaults.method.toLowerCase():r.method="get";var n=r.transitional;n!==void 0&&be.assertOptions(n,{silentJSONParsing:O.transitional(O.boolean),forcedJSONParsing:O.transitional(O.boolean),clarifyTimeoutError:O.transitional(O.boolean)},!1);var s=[],i=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(r)===!1||(i=i&&d.synchronous,s.unshift(d.fulfilled,d.rejected))});var o=[];this.interceptors.response.forEach(function(d){o.push(d.fulfilled,d.rejected)});var u;if(!i){var c=[ne,void 0];for(Array.prototype.unshift.apply(c,s),c=c.concat(o),u=Promise.resolve(r);c.length;)u=u.then(c.shift(),c.shift());return u}for(var m=r;s.length;){var a=s.shift(),f=s.shift();try{m=a(m)}catch(b){f(b);break}}try{u=ne(m)}catch(b){return Promise.reject(b)}for(;o.length;)u=u.then(o.shift(),o.shift());return u};T.prototype.getUri=function(e){return e=B(this.defaults,e),Et(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};ve.forEach(["delete","get","head","options"],function(e){T.prototype[e]=function(r,n){return this.request(B(n||{},{method:e,url:r,data:(n||{}).data}))}});ve.forEach(["post","put","patch"],function(e){T.prototype[e]=function(r,n,s){return this.request(B(s||{},{method:e,url:r,data:n}))}});var Ct=T,Ot=$;function R(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(s){e=s});var r=this;this.promise.then(function(n){if(!!r._listeners){var s,i=r._listeners.length;for(s=0;s<i;s++)r._listeners[s](n);r._listeners=null}}),this.promise.then=function(n){var s,i=new Promise(function(o){r.subscribe(o),s=o}).then(n);return i.cancel=function(){r.unsubscribe(s)},i},t(function(s){r.reason||(r.reason=new Ot(s),e(r.reason))})}R.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};R.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};R.prototype.unsubscribe=function(e){if(!!this._listeners){var r=this._listeners.indexOf(e);r!==-1&&this._listeners.splice(r,1)}};R.source=function(){var e,r=new R(function(s){e=s});return{token:r,cancel:e}};var Rt=R,Tt=function(e){return function(n){return e.apply(null,n)}},gt=h,xt=function(e){return gt.isObject(e)&&e.isAxiosError===!0},se=h,kt=ae,N=Ct,Nt=pe,At=W;function Se(t){var e=new N(t),r=kt(N.prototype.request,e);return se.extend(r,N.prototype,e),se.extend(r,e),r.create=function(s){return Se(Nt(t,s))},r}var S=Se(At);S.Axios=N;S.Cancel=$;S.CancelToken=Rt;S.isCancel=he;S.VERSION=me.version;S.all=function(e){return Promise.all(e)};S.spread=Tt;S.isAxiosError=xt;F.exports=S;F.exports.default=S;var $t=F.exports;const Bt=ye("binance_socket",{state:()=>({socketConnection:new WebSocket("wss://stream.binance.com:9443/ws/!ticker@arr"),socketSingleTicker:new WebSocket("wss://stream.binance.us:9443/ws/BTCUSDT@depth"),coinsList:[],tickerInfo:{},prevTickerInfo:{},depthSnapshot:{},binanceStreamLoader:!1}),getters:{getCoinsList:t=>t.coinsList,getTickerInfo:t=>t.tickerInfo,getDepthSnapshot:t=>t.depthSnapshot,getBinanceStreamLoader:t=>t.binanceStreamLoader},actions:{connectToBinanceStream(){this.binanceStreamLoader=!0,console.log("Connecting to BinanceStream"),this.socketConnection=new WebSocket("wss://stream.binance.com:9443/ws/!ticker@arr"),this.socketConnection.onopen=()=>{console.log("Connected to BinanceStream")};const t={};this.socketConnection.onmessage=e=>{(JSON.parse(e.data)||[]).forEach(n=>{t[n.s]=n}),this.coinsList=Object.keys(t).map(n=>t[n]),this.binanceStreamLoader=!1},this.socketConnection.onclose=()=>{console.log("Closed connection to BinanceStream")}},disconnectBinanceStream(){this.socketConnection.send({method:"UNSUBSCRIBE",params:["ticker@arr"],id:312})},connectToTickerStream(t){this.socketSingleTicker=new WebSocket(`wss://stream.binance.us:9443/ws/${t}@depth`);let e=!0;this.socketSingleTicker.onmessage=r=>{let n=JSON.parse(r.data)||[];if(e===!0){this.prevTickerInfo=n,e=!1;return}this.tickerInfo=n,this.setTickerInfo(),this.prevTickerInfo=n}},fetchDepthSnapShot(t){const e=`https://www.binance.us/api/v1/depth?symbol=${t}&limit=150`;$t.get(e).then(r=>{this.depthSnapshot=r.data})},setTickerInfo(){this.tickerInfo.u<=this.depthSnapshot.lastUpdateId||this.tickerInfo.U===this.prevTickerInfo.u+1&&(this.updateDepthSnapshot("asks","a"),this.updateDepthSnapshot("bids","b"))},updateDepthSnapshot(t,e){this.tickerInfo[e].map(r=>{this.depthSnapshot[t]=this.depthSnapshot[t].filter(n=>{if(n[0]!==r[0])return n})}),this.depthSnapshot[t]=this.depthSnapshot[t].concat(this.tickerInfo[e]),this.tickerInfo[e].map(r=>{this.depthSnapshot[t]=this.depthSnapshot[t].filter(n=>{if(n["1"]!=="0.00000000")return r})}),this.depthSnapshot[t]=this.depthSnapshot[t].sort((r,n)=>r[0]-n[0]).splice(0,60)}}});export{Bt as u};