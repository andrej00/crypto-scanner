import{d as B,I as N,f as _,B as V,C as x,o,c as l,a as i,F as y,q as w,t as k,J as F,y as m,e as S,b as $}from"./index.72e3c296.js";import{u as E}from"./binanceStore.d49e4501.js";const C={class:"order-book"},D={class:"pr-12 lg:p-0"},I={class:"text-slate-300"},R=i("hr",{class:"my-2"},null,-1),W={class:"text-slate-300"},j=B({setup(T){const f=N(),c=E(),u=f.params.id,a=_(15);c.connectToTickerStream(u.toLowerCase()),c.fetchDepthSnapShot(u);const{getDepthSnapshot:r}=V(c),b=x(()=>{var p,d,v;let t=_(0),n=_(0),e=(p=r.value.asks)==null?void 0:p.slice(0,a.value).map(s=>s[1]).sort((s,h)=>parseFloat(s)-parseFloat(h));return e&&(t.value=parseFloat(e[0]),n.value=parseFloat(e[a.value-1])),(d=r.value.asks)==null||d.slice(0,a.value).map(s=>{s[2]=(10+(s[1]-t.value)/(n.value-t.value)*90).toString()}),(v=r.value.asks)==null?void 0:v.slice(0,a.value).reverse()}),g=x(()=>{var p,d,v;let t=_(0),n=_(0),e=(p=r.value.bids)==null?void 0:p.slice(0,a.value).map(s=>s[1]).sort((s,h)=>parseFloat(s)-parseFloat(h));return e&&(t.value=parseFloat(e[0]),n.value=parseFloat(e[a.value-1])),(d=r.value.bids)==null||d.slice(0,a.value).map(s=>{s[2]=(10+(s[1]-t.value)/(n.value-t.value)*90).toString()}),(v=r.value.bids)==null?void 0:v.slice(0,a.value).reverse()});return(t,n)=>(o(),l("section",C,[i("div",D,[(o(!0),l(y,null,w(k(b),e=>(o(),l("p",{class:"text-green-600 m-0.3 text-right",key:e[0],style:F(`background-image: -webkit-linear-gradient(right, rgb(50, 205, 50, 0.25), rgb(50, 205, 50, 0.25) ${e[2]}%, transparent ${e[2]}%)`)},[i("span",I,m(parseFloat(e[0])),1),S(" | "+m(e[1]),1)],4))),128))]),R,i("div",null,[(o(!0),l(y,null,w(k(g),e=>(o(),l("p",{class:"text-red-500 p-0.3 text-right",key:e[0],style:F(`background-image: -webkit-linear-gradient(right, rgb(255, 69, 0, 0.25), rgb(255, 69, 0, 0.25) ${e[2]}%, transparent ${e[2]}%)`)},[i("span",W,m(parseFloat(e[0])),1),S(" | "+m(e[1]),1)],4))),128))])]))}}),q={class:"flex lg:flex-row flex-col"},z=B({setup(T){const c=N().params.id,u="vue-trading-view",a={width:"100%",height:"100%",symbol:`BINANCE:${c}`,interval:"15",timezone:"Europe/Belgrade",theme:"dark",style:"1",locale:"en",toolbar_bg:"#f1f3f6",enable_publishing:!1,hide_side_toolbar:!1,studies:["Volume@tv-basicstudies","VWAP@tv-basicstudies"]};return(g=>{const t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://s3.tradingview.com/tv.js",t.onload=g,document.getElementsByTagName("head")[0].appendChild(t)})(()=>{new window.TradingView.widget(Object.assign({container_id:u},a))}),(g,t)=>(o(),l("section",q,[i("section",{id:u,class:"w-screen h-screen lg:w-5/6 xl:w-11/12"}),$(j)]))}});export{z as default};
