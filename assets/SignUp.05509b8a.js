import{e as k,f as n,o as a,c as x,a as t,g as p,v as _,h as c,i,j as b,k as m,l as v,G as P,s as C}from"./index.963eb921.js";import{S as w,H as h}from"./HidePassword.c4ad1583.js";import"./plugin-vue_export-helper.21dcd24c.js";const U={class:"form-wrapper"},S={class:"max-w-md w-full space-y-8"},q=t("div",null,[t("h2",{class:"mt-6 text-center text-3xl font-extrabold text-slate-300"},"Register")],-1),B={class:"mt-8 space-y-6",action:"#",method:"POST"},E=t("input",{type:"hidden",name:"remember",value:"true"},null,-1),G={class:"rounded-md shadow-sm -space-y-px"},I={class:"relative"},V=["type"],W={class:"relative"},$=["type"],R=k({setup(A){const u=n(""),r=n(""),d=n(""),o=n(!0),y=()=>{if(r.value===d.value)return!0;alert("Your passwords do not match")},f=async()=>{if(!!y)try{await b(m(),u.value,r.value),v.push({name:"tickers"})}catch(l){alert(l.code)}},g=async()=>{const l=new P;try{await C(m(),l),v.push({name:"tickers"})}catch(e){alert(e)}};return(l,e)=>(a(),x("section",U,[t("div",S,[q,t("div",B,[E,t("div",G,[t("div",null,[p(t("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=s=>u.value=s),autocomplete:"email",required:"",class:"input-form",placeholder:"Email address"},null,512),[[_,u.value]])]),t("div",I,[p(t("input",{type:o.value?"password":"text","onUpdate:modelValue":e[1]||(e[1]=s=>r.value=s),autocomplete:"current-password",required:"",class:"input-form",placeholder:"Password"},null,8,V),[[c,r.value]]),o.value?(a(),i(w,{key:0,class:"absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer",onClick:e[2]||(e[2]=s=>o.value=!1)})):(a(),i(h,{key:1,class:"absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer",onClick:e[3]||(e[3]=s=>o.value=!0)}))]),t("div",W,[p(t("input",{type:o.value?"password":"text","onUpdate:modelValue":e[4]||(e[4]=s=>d.value=s),autocomplete:"repeat-password",required:"",class:"input-form",placeholder:"Repeat Password"},null,8,$),[[c,d.value]]),o.value?(a(),i(w,{key:0,class:"absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer",onClick:e[5]||(e[5]=s=>o.value=!1)})):(a(),i(h,{key:1,class:"absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer",onClick:e[6]||(e[6]=s=>o.value=!0)}))])]),t("div",{class:"flex"},[t("button",{type:"submit",onClick:f,class:"sign-up-button mr-5"},"Sign up"),t("button",{onClick:g,class:"sign-up-button"},"Sign Up With Google")])])])]))}});export{R as default};
