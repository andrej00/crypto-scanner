import{c as r,e as n,f as e,d as B,u as M,E as L,r as p,H as f,I as $,k as o,l as I,x as P,y as U,J as D,h as v,F as C,K as b,z as F,A as H,L as u,M as a}from"./vendor.d599f415.js";import{L as R}from"./LineChart.6d10f15c.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";import{u as z}from"./binance_socket.92edf258.js";const A={},E={class:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},V=e("div",{class:"m-auto"},[e("svg",{role:"status",class:"inline w-20 h-20 text-gray-200 animate-spin dark:text-gray-200 fill-indigo-500",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})])],-1),Z=[V];function N(l,d){return r(),n("section",E,Z)}var j=h(A,[["render",N]]);const J={},K={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"search",class:"w-4",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},q=e("path",{fill:"currentColor",d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},null,-1),G=[q];function O(l,d){return r(),n("svg",K,G)}var Q=h(J,[["render",O]]);const y=l=>(F("data-v-3a46da82"),l=l(),H(),l),W={key:1},X=y(()=>e("h1",{class:"text-slate-100"},null,-1)),Y={class:"flex justify-end lg:mr-7 sm:mr-10"},ee={class:"mb-3 xl:w-96"},te={class:"flex flex-wrap items-stretch w-full"},se={class:"input-button",type:"button",id:"button-addon2"},ae={class:"grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 py-20 lg:px-14 sm:px-3"},re={class:"py-1"},oe={class:"pb-1"},ne={class:"pb-1"},le=["onClick"],ce=y(()=>e("hr",null,null,-1)),de={class:"grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 py-20 lg:px-14 sm:px-3"},ie={class:"py-1"},ue={class:"pb-1"},_e={class:"pb-1"},pe=["onClick"],he=B({setup(l){const d=M(),_=z();_.connectToBinanceStream();const{getCoinsList:m,getBinanceStreamLoader:k}=L(_);let c=p(""),s=p([]);setInterval(()=>{s.value.push(Math.round(Math.random()*100)),s.value.length>20&&(s.value=s.value.slice(s.value.length-20,s.value.length)),console.log(s.value.length)},500);const g=p(["BTCUSDT","ETHUSDT"]);console.log(g.value.includes("BTCUSDT"));const w=f(()=>m.value.filter(i=>i.s.includes(c.value.toUpperCase()))),S=f(()=>m.value.filter(i=>g.value.includes(i.s)));return $(()=>{_.disconnectBinanceStream()}),(i,x)=>o(k)?(r(),I(j,{key:0})):(r(),n("section",W,[X,e("div",Y,[e("div",ee,[e("div",te,[P(e("input",{type:"search",class:"input-form","onUpdate:modelValue":x[0]||(x[0]=t=>D(c)?c.value=t:c=t),placeholder:"Search","aria-label":"Search","aria-describedby":"button-addon2"},null,512),[[U,o(c)]]),e("button",se,[v(Q)])])])]),e("div",ae,[(r(!0),n(C,null,b(o(S),t=>(r(),n("div",{class:u(["rounded-md border-2 y-3",[t.P>0?"border-green-400":"border-red-600"]]),key:t.s},[e("span",{class:u(["text-2xl text-center",[t.P>0?"text-green-400":"text-red-600"]])},[e("p",re,a(parseFloat(t.c)),1),e("p",oe,a(t.s),1),e("p",ne,a(Math.round(t.v)),1),e("p",null,a(t.P)+"%",1)],2),v(R,{data:o(s)},null,8,["data"]),e("button",{class:"border-2 text-sm border-indigo-200/60 text-indigo-200/60 flex m-auto my-3 px-2 py-0.5",onClick:T=>o(d).push({name:"ticker-chart",params:{id:t.s}})}," CHART ",8,le)],2))),128))]),ce,e("div",de,[(r(!0),n(C,null,b(o(w),t=>(r(),n("div",{class:u(["rounded-md border-2 y-3",[t.P>0?"border-green-400":"border-red-600"]]),key:t.s},[e("span",{class:u(["text-2xl text-center",[t.P>0?"text-green-400":"text-red-600"]])},[e("p",ie,a(parseFloat(t.c)),1),e("p",ue,a(t.s),1),e("p",_e,a(Math.round(t.v)),1),e("p",null,a(t.P)+"%",1)],2),e("button",{class:"border-2 text-sm border-indigo-200/60 text-indigo-200/60 flex m-auto my-3 px-2 py-0.5",onClick:T=>o(d).push({name:"ticker-chart",params:{id:t.s}})}," CHART ",8,pe)],2))),128))])]))}});var ve=h(he,[["__scopeId","data-v-3a46da82"]]);export{ve as default};
