import{c as E,a as L,o as g,g as y,d as v,r as A,b as O,e as S,f as d,h as p,i,j as c,w as l,k as m,s as w,u as C,R as x,F as I,l as P,m as V,n as D}from"./vendor.812926c1.js";const T=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}};T();const R="modulepreload",h={},N="/crypto-scanner/",u=function(s,n){return!n||n.length===0?s():Promise.all(n.map(t=>{if(t=`${N}${t}`,t in h)return;h[t]=!0;const e=t.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${r}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":R,e||(o.as="script",o.crossOrigin=""),o.href=t,document.head.appendChild(o),e)return new Promise((k,b)=>{o.addEventListener("load",k),o.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>s())},f=E({history:L("/crypto-scanner/"),routes:[{path:"/",name:"home",component:()=>u(()=>import("./HomeView.18225781.js"),["assets/HomeView.18225781.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.812926c1.js"])},{path:"/sign-up",name:"sign-up",component:()=>u(()=>import("./SignUp.2f5669bc.js"),["assets/SignUp.2f5669bc.js","assets/SignUp.537a5085.css","assets/vendor.812926c1.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/sign-in",name:"sign-in",component:()=>u(()=>import("./SignIn.16cac512.js"),["assets/SignIn.16cac512.js","assets/SignIn.7fe650a5.css","assets/vendor.812926c1.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/tickers/:id",name:"ticker-chart",component:()=>u(()=>import("./ChartView.f3cfd8fb.js"),["assets/ChartView.f3cfd8fb.js","assets/ChartView.1b316da1.css","assets/vendor.812926c1.js","assets/binance_socket.dd717b4e.js"]),meta:{requiresAuth:!0}},{path:"/tickers",name:"tickers",component:()=>u(()=>import("./AboutView.dcfad298.js"),["assets/AboutView.dcfad298.js","assets/vendor.812926c1.js","assets/binance_socket.dd717b4e.js"])}]}),B=()=>new Promise((a,s)=>{const n=g(y(),t=>{n(),a(t)},s)});f.beforeEach(async(a,s,n)=>{a.matched.some(t=>t.meta.requiresAuth)?await B()?n():(alert("YOU DON'T HAVE ACCESS!"),n({name:"home"})):n()});const $={class:"p-5 pr-15 absolute right-10 top-2"},j={class:"flex justify-end items-center align-middle"},q=m("Home"),H=m("Tickers"),J={key:0},F=m("Sign in"),z=m("Sign up"),M=i("div",{class:"ml-4 relative"},[i("div",null,[i("button",{type:"button",class:"bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",id:"user-menu-button","aria-expanded":"false","aria-haspopup":"true"},[i("span",{class:"sr-only"},"Open user menu"),i("img",{class:"h-8 w-8 rounded-full",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:""})])])],-1),U=v({setup(a){const s=A(!1);let n;O(()=>{n=y(),g(n,e=>{console.log(e),e?s.value=!0:s.value=!1})});const t=async()=>{await w(n),f.push({name:"home"})};return(e,r)=>{const o=S("router-link");return d(),p("nav",$,[i("div",j,[c(o,{to:{name:"home"},class:"nav-link"},{default:l(()=>[q]),_:1}),c(o,{to:{name:"tickers"},class:"nav-link"},{default:l(()=>[H]),_:1}),s.value?(d(),p("p",{key:1,onClick:t,class:"nav-link cursor-pointer"},"Sign out")):(d(),p("div",J,[c(o,{to:{name:"sign-in"},class:"nav-link"},{default:l(()=>[F]),_:1}),c(o,{to:{name:"sign-up"},class:"sign-up-link"},{default:l(()=>[z]),_:1})])),M])])}}}),W=v({setup(a){return(s,n)=>(d(),p(I,null,[c(U),c(C(x))],64))}});const Y={apiKey:"AIzaSyDbL2ZMJjYr8-J8VxC2JGyYzF-L8b0JH20",authDomain:"crypto-scanner-d8e79.firebaseapp.com",projectId:"crypto-scanner-d8e79",storageBucket:"crypto-scanner-d8e79.appspot.com",messagingSenderId:"359040748010",appId:"1:359040748010:web:66a1b4a3aa5c446d990a93",measurementId:"G-QD41TV94B4"};P(Y);const _=V(W);_.use(D());_.use(f);_.mount("#app");export{f as r};