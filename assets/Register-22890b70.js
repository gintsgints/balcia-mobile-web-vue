import{l as N,m as r,y as U,r as y,A as q,B as w,Z as S,G as a,R as k,z as B,C as F}from"./index-9c83cfaf.js";import{C as M,p as R,b as l}from"./poolData-e080e6ad.js";import{c as $,a as d,u as A,b as i,V as H,d as p}from"./VTextField-693fe71f.js";import{u as T}from"./useSmartIdHash-ddb2d5e6.js";import{m as E,a as G,i as L}from"./VBtn-22fe8a68.js";import"./index-03fc35a7.js";const _=N()({name:"VContainer",props:{fluid:{type:Boolean,default:!1},...E()},setup(c,t){let{slots:v}=t;return G(()=>r(c.tag,{class:["v-container",{"v-container--fluid":c.fluid}]},v)),{}}}),O=U({__name:"Register",setup(c){const t=k(),{generateHash:v}=T(),P=$({username:d().email().required("Please provide email as username"),rc:d().matches(/[0-9][0-9][0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9][0-9]/g,"Personal code should contain 11 letters and dash").required("Please provide registration number"),password:d().required("Please provide password"),confirmPassword:d().required("Please provide password to confirm").test("equal","Passwords do not match",o=>o===n.value.value)}),{handleSubmit:h}=A({validationSchema:P}),f=i("username"),n=i("password"),g=i("rc"),V=i("confirmPassword"),u=y(!1),m=y(!1),C=h(async o=>{const e=await v(),s=new M(R),x=[new l({Name:"email",Value:o.username}),new l({Name:"custom:registry_code",Value:o.rc}),new l({Name:"custom:base64_hash",Value:e}),new l({Name:"custom:hash_type",Value:"SHA512"}),new l({Name:"custom:branch",Value:"LV"})];s.signUp(o.username,o.password,x,[],(b,z)=>{if(b){console.log("Failed to log in: ",b);return}t.push("/auth/login")}),t.push("/auth/pin")});return(o,e)=>(B(),q(H,{ref:"form","validate-on":"submit",onSubmit:S(a(C),["prevent"])},{default:w(()=>[r(_,null,{default:w(()=>[r(p,{label:"E-mail",type:"email","error-messages":a(f).errorMessage.value,modelValue:a(f).value.value,"onUpdate:modelValue":e[0]||(e[0]=s=>a(f).value.value=s)},null,8,["error-messages","modelValue"]),r(p,{label:"Personal code:","error-messages":a(g).errorMessage.value,modelValue:a(g).value.value,"onUpdate:modelValue":e[1]||(e[1]=s=>a(g).value.value=s)},null,8,["error-messages","modelValue"]),r(p,{label:"Password","error-messages":a(n).errorMessage.value,modelValue:a(n).value.value,"onUpdate:modelValue":e[2]||(e[2]=s=>a(n).value.value=s),"append-icon":u.value?"mdi-eye":"mdi-eye-off",type:u.value?"text":"password","onClick:append":e[3]||(e[3]=s=>u.value=!u.value)},null,8,["error-messages","modelValue","append-icon","type"]),r(p,{"error-messages":a(V).errorMessage.value,modelValue:a(V).value.value,"onUpdate:modelValue":e[4]||(e[4]=s=>a(V).value.value=s),label:"Password repeat",required:"","append-icon":m.value?"mdi-eye":"mdi-eye-off",type:m.value?"text":"password","onClick:append":e[5]||(e[5]=s=>m.value=!m.value)},null,8,["error-messages","modelValue","append-icon","type"]),r(L,{type:"submit"},{default:w(()=>[F("Register")]),_:1})]),_:1})]),_:1},8,["onSubmit"]))}});export{O as default};