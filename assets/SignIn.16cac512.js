import{d as p,r as n,f as m,h as v,i as e,p as c,v as u,q as _,t as h,z as f,g as w}from"./vendor.812926c1.js";import{r as g}from"./index.2e6878a7.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";const I=s=>(_("data-v-6817353e"),s=s(),h(),s),y={class:"flex h-screen items-center justify-center pb-20 px-4 sm:px-6 lg:px-12"},b={class:"max-w-md w-full space-y-8"},k=I(()=>e("div",null,[e("h2",{class:"mt-6 text-center text-3xl font-extrabold text-slate-200"},"Sign In")],-1)),S={class:"mt-8 space-y-6"},E=p({setup(s){const o=n("andrej@gmail.com"),r=n("andrej12"),a=n(),d=async()=>{try{await f(w(),o.value,r.value),g.push({name:"tickers"})}catch(i){switch(i.code){case"auth/invalid-email":a.value="Invalid Email";break;case"auth/user-not-found":a.value="No account with that email was found";break;case"auth/wrong-password":a.value="Incorrect password";break;default:a.value="Email or password was incorrect";break}console.log(a.value)}};return(i,t)=>(m(),v("section",y,[e("div",b,[k,e("div",S,[e("div",null,[c(e("input",{type:"email","onUpdate:modelValue":t[0]||(t[0]=l=>o.value=l),autocomplete:"email",required:"",class:"input-form",placeholder:"Email address"},null,512),[[u,o.value]])]),e("div",null,[c(e("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=l=>r.value=l),autocomplete:"current-password",required:"",class:"input-form",placeholder:"Password"},null,512),[[u,r.value]])]),e("button",{type:"submit",onClick:d,class:"sign-up-button"}," Sign in ")])])]))}});var V=x(E,[["__scopeId","data-v-6817353e"]]);export{V as default};