import{d as a,r as o,o as s,c as l,a as n,b as r,w as c,e as u,f as _}from"./index.95f3c469.js";const d={class:"flex mt-64"},i={class:"m-auto"},h=_(" TICKERS "),x=a({setup(m){let e=o([]);return setInterval(()=>{e.value.push(Math.round(Math.random()*100)),e.value.length>20&&(e.value=e.value.slice(e.value.length-20,e.value.length)),console.log(e.value.length)},500),(v,p)=>{const t=u("router-link");return s(),l("div",d,[n("div",i,[r(t,{to:{name:"tickers"},class:"text-5xl m-auto text-green-500"},{default:c(()=>[h]),_:1})])])}}});export{x as default};