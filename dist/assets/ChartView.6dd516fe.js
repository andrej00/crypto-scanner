import{d as B,I as T,f as v,B as $,C as N,o,c as l,a as i,F as x,q as y,t as w,J as k,y as g,e as S,b as E}from"./index.f303ba51.js";import{u as C}from"./binanceStore.566524e2.js";const D={class:"order-book"},I={class:"pr-12 lg:p-0"},R={class:"text-slate-300"},W=i("hr",{class:"my-2"},null,-1),j={class:"text-slate-300"},q=B({setup(V){const h=T(),c=C(),u=h.params.id,a=v(15);c.connectToTickerStream(u.toLowerCase()),c.fetchDepthSnapShot(u);const{getDepthSnapshot:r}=$(c),f=N(()=>{var d,m,p;let t=v(0),n=v(0),e=(d=r.value.asks)==null?void 0:d.slice(0,a.value).map(s=>s[1]).sort((s,b)=>Number(s)-Number(b));return e&&(t.value=Number(e[0]),n.value=Number(e[a.value-1])),(m=r.value.asks)==null||m.slice(0,a.value).map(s=>{s[2]=(10+(Number(s[1])-t.value)/(n.value-t.value)*90).toString()}),(p=r.value.asks)==null?void 0:p.slice(0,a.value).reverse()}),_=N(()=>{var d,m,p;let t=v(0),n=v(0),e=(d=r.value.bids)==null?void 0:d.slice(0,a.value).map(s=>s[1]).sort((s,b)=>Number(s)-Number(b));return e&&(t.value=Number(e[0]),n.value=Number(e[a.value-1])),(m=r.value.bids)==null||m.slice(0,a.value).map(s=>{s[2]=(10+(Number(s[1])-t.value)/(n.value-t.value)*90).toString()}),(p=r.value.bids)==null?void 0:p.slice(0,a.value)});return(t,n)=>(o(),l("section",D,[i("div",I,[(o(!0),l(x,null,y(w(f),e=>(o(),l("p",{class:"text-green-600 m-0.3 text-right",key:e[0],style:k(`background-image: -webkit-linear-gradient(right, rgb(50, 205, 50, 0.25), rgb(50, 205, 50, 0.25) ${e[2]}%, transparent ${e[2]}%)`)},[i("span",R,g(Number(e[0])),1),S(" | "+g(e[1]),1)],4))),128))]),W,i("div",null,[(o(!0),l(x,null,y(w(_),e=>(o(),l("p",{class:"text-red-500 p-0.3 text-right",key:e[0],style:k(`background-image: -webkit-linear-gradient(right, rgb(255, 69, 0, 0.25), rgb(255, 69, 0, 0.25) ${e[2]}%, transparent ${e[2]}%)`)},[i("span",j,g(Number(e[0])),1),S(" | "+g(e[1]),1)],4))),128))])]))}}),A={class:"flex lg:flex-row flex-col"},F=B({setup(V){const c=T().params.id,u="vue-trading-view",a={width:"100%",height:"100%",symbol:`BINANCE:${c}`,interval:"15",timezone:"Europe/Belgrade",theme:"dark",style:"1",locale:"en",toolbar_bg:"#f1f3f6",enable_publishing:!1,hide_side_toolbar:!1,studies:["Volume@tv-basicstudies","VWAP@tv-basicstudies"]};return(_=>{const t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://s3.tradingview.com/tv.js",t.onload=_,document.getElementsByTagName("head")[0].appendChild(t)})(()=>{new window.TradingView.widget(Object.assign({container_id:u},a))}),(_,t)=>(o(),l("section",A,[i("section",{id:u,class:"w-screen h-screen lg:w-5/6 xl:w-11/12"}),E(q)]))}});export{F as default};
