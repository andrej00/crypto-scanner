import{d as f,r as i,c as g,e as w,f as e,x as p,y as d,z as x,A as y,B as b,g as u,G as P,C as S}from"./vendor.061beea6.js";import{r as c}from"./index.5c047334.js";import{_ as U}from"./plugin-vue_export-helper.21dcd24c.js";const m=a=>(x("data-v-3e85de62"),a=a(),y(),a),k={class:"flex h-screen items-center justify-center pb-20 px-4 sm:px-6 lg:px-12"},I={class:"max-w-md w-full space-y-8"},q=m(()=>e("div",null,[e("h2",{class:"mt-6 text-center text-3xl font-extrabold text-slate-300"},"Register")],-1)),A={class:"mt-8 space-y-6",action:"#",method:"POST"},B=m(()=>e("input",{type:"hidden",name:"remember",value:"true"},null,-1)),C={class:"rounded-md shadow-sm -space-y-px"},E=f({setup(a){const l=i(""),r=i(""),n=i(""),v=()=>{if(r.value===n.value)return!0;alert("Your passwords do not match")},_=async()=>{if(!!v)try{const t=await b(u(),l.value,r.value);c.push({name:"tickers"})}catch(t){console.log(t)}},h=async()=>{const t=new P;try{await S(u(),t),c.push({name:"tickers"})}catch(s){console.log(s)}};return(t,s)=>(g(),w("section",k,[e("div",I,[q,e("div",A,[B,e("div",C,[e("div",null,[p(e("input",{type:"email","onUpdate:modelValue":s[0]||(s[0]=o=>l.value=o),autocomplete:"email",required:"",class:"input-form",placeholder:"Email address"},null,512),[[d,l.value]])]),e("div",null,[p(e("input",{type:"password","onUpdate:modelValue":s[1]||(s[1]=o=>r.value=o),autocomplete:"current-password",required:"",class:"input-form",placeholder:"Password"},null,512),[[d,r.value]])]),e("div",null,[p(e("input",{type:"password","onUpdate:modelValue":s[2]||(s[2]=o=>n.value=o),autocomplete:"repeat-password",required:"",class:"input-form",placeholder:"Repeat Password"},null,512),[[d,n.value]])])]),e("div",{class:"flex"},[e("button",{type:"submit",onClick:_,class:"sign-up-button mr-5"}," Sign up "),e("button",{onClick:h,class:"sign-up-button"}," Sign Up With Google ")])])])]))}});var R=U(E,[["__scopeId","data-v-3e85de62"]]);export{R as default};
