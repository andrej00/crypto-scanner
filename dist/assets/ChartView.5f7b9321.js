import{d as B,J as V,x as $,r as f,y as b,o as c,c as l,a as d,F as y,D as x,K as w,H as g,f as k,A as S,b as D}from"./index.95f3c469.js";import{u as E}from"./binance_socket.4c7b5ee8.js";const C={class:"flex"},A={class:"order-book overflow-auto"},F={class:"text-slate-300"},I=d("hr",{class:"my-2"},null,-1),R={class:"text-slate-300"},W=B({setup(N){const v=V(),u=E(),p=v.params.id;u.connectToTickerStream(p.toLowerCase()),u.fetchDepthSnapShot(p);const{getDepthSnapshot:a}=$(u);let o=f(0),_=f(0);const s=15,r=b(()=>{var i,e,m;let n=(i=a.value.asks)==null?void 0:i.slice(0,s).map(t=>t[1]).sort((t,h)=>t-h);return n&&(o=n[0],_=n[s-1]),(e=a.value.asks)==null||e.slice(0,s).map(t=>{t[2]=10+(t[1]-o)/(_-o)*90}),(m=a.value.asks)==null?void 0:m.slice(0,s).reverse()}),T=b(()=>{var i,e,m;let n=(i=a.value.bids)==null?void 0:i.slice(0,s).map(t=>t[1]).sort((t,h)=>t-h);return n&&(o=n[0],_=n[s-1]),(e=a.value.bids)==null||e.slice(0,s).map(t=>{t[2]=10+(t[1]-o)/(_-o)*90}),(m=a.value.bids)==null?void 0:m.slice(0,s).reverse()});return(n,i)=>(c(),l("section",C,[d("div",A,[d("div",null,[(c(!0),l(y,null,x(S(r),e=>(c(),l("p",{class:"text-green-600 m-0.3 text-right",key:e[0],style:w(`background-image: -webkit-linear-gradient(right, rgb(50, 205, 50, 0.25), rgb(50, 205, 50, 0.25) ${e[2]}%, transparent ${e[2]}%)`)},[d("span",F,g(parseFloat(e[0])),1),k(" | "+g(e[1]),1)],4))),128)),I,(c(!0),l(y,null,x(S(T),e=>(c(),l("p",{class:"text-red-500 p-0.3 text-right",key:e[0],style:w(`background-image: -webkit-linear-gradient(right, rgb(255, 69, 0, 0.25), rgb(255, 69, 0, 0.25) ${e[2]}%, transparent ${e[2]}%)`)},[d("span",R,g(parseFloat(e[0])),1),k(" | "+g(e[1]),1)],4))),128))])])]))}});const j={class:"flex"},z=B({setup(N){const u=V().params.id,p="vue-trading-view",a={width:"100%",height:"100%",symbol:`BINANCE:${u}`,interval:"15",timezone:"Europe/Belgrade",theme:"dark",style:"1",locale:"en",toolbar_bg:"#f1f3f6",enable_publishing:!1,hide_side_toolbar:!1,studies:["Volume@tv-basicstudies","VWAP@tv-basicstudies"]};return(s=>{const r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://s3.tradingview.com/tv.js",r.onload=s,document.getElementsByTagName("head")[0].appendChild(r)})(()=>{new window.TradingView.widget(Object.assign({container_id:p},a))}),(s,r)=>(c(),l("div",j,[d("section",{id:p}),D(W)]))}});export{z as default};