import{e as w,f as l,o as u,c as g,a as e,g as c,v as f,h as k,i as d,m as y,k as p,l as m,G as b,s as x}from"./index.fea22931.js";import{S as I,H as _}from"./HidePassword.5975f170.js";import"./plugin-vue_export-helper.21dcd24c.js";const P={class:"form-wrapper"},C={class:"max-w-md w-full"},S=e("div",null,[e("h2",{class:"mt-6 text-center text-3xl font-extrabold text-slate-300"},"Sign In")],-1),B={class:"mt-8 space-y-6"},E={class:"relative"},G=["type"],q=w({setup(W){const n=l("johndoe@gmail.com"),i=l("password"),o=l(!0),t=l(),v=async()=>{try{await y(p(),n.value,i.value),m.push({name:"tickers"})}catch(r){switch(r.code){case"auth/invalid-email":t.value="Invalid Email";break;case"auth/user-not-found":t.value="No account with that email";break;case"auth/wrong-password":t.value="Incorrect password";break;default:t.value="Incorrect email or password";break}alert(t.value)}},h=async()=>{const r=new b;try{await x(p(),r),m.push({name:"tickers"})}catch(s){alert(s)}};return(r,s)=>(u(),g("section",P,[e("div",C,[S,e("div",B,[e("div",null,[c(e("input",{type:"email","onUpdate:modelValue":s[0]||(s[0]=a=>n.value=a),autocomplete:"email",required:"",class:"input-form",placeholder:"Email address"},null,512),[[f,n.value]])]),e("div",E,[c(e("input",{type:o.value?"password":"text","onUpdate:modelValue":s[1]||(s[1]=a=>i.value=a),autocomplete:"current-password",required:"",class:"input-form",placeholder:"Password"},null,8,G),[[k,i.value]]),o.value?(u(),d(I,{key:0,class:"absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer",onClick:s[2]||(s[2]=a=>o.value=!1)})):(u(),d(_,{key:1,class:"absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer",onClick:s[3]||(s[3]=a=>o.value=!0)}))]),e("div",{class:"flex"},[e("button",{type:"submit",onClick:v,class:"sign-up-button mr-5"},"Sign in"),e("button",{onClick:h,class:"sign-up-button"},"Sign in With Google")])])])]))}});export{q as default};