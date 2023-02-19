import{y as C,F as b,r as y,H as F,m as n,B as d,Z as M,G as o,J as V,C as c,Q as S,R as A,D as x,z as k}from"./index-9c83cfaf.js";import{C as B,p as R,a as L}from"./poolData-e080e6ad.js";import{c as N,a as P,u as $,b as D,V as q,d as _}from"./VTextField-693fe71f.js";import{i as E}from"./VBtn-22fe8a68.js";import"./index-03fc35a7.js";/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */var T=function(){function p(a){var e=a||{},h=e.ValidationData,f=e.Username,i=e.Password,u=e.AuthParameters,g=e.ClientMetadata;this.validationData=h||{},this.authParameters=u||{},this.clientMetadata=g||{},this.username=f,this.password=i}var s=p.prototype;return s.getUsername=function(){return this.username},s.getPassword=function(){return this.password},s.getValidationData=function(){return this.validationData},s.getAuthParameters=function(){return this.authParameters},s.getClientMetadata=function(){return this.clientMetadata},p}();const z={class:"mt-2"},G={class:"text-body-2"},I=C({__name:"Login",setup(p){const s=A(),a=b(),e=y(!1),h=N({username:P().email().required(),password:P().required()}),{handleSubmit:f}=$({validationSchema:h}),i=D("username"),u=D("password"),g=f(l=>{const t={Username:l.username,Password:l.password};let m=new T(t);const r=new B(R),U={Username:l.username,Pool:r},w=new L(U);w.authenticateUser(m,{onSuccess:v=>{a.setAuth(v,w),s.push("/me")},onFailure:v=>{console.log("Failed to log in: ",v)}})});return(l,t)=>{const m=x("RouterLink");return k(),F(S,null,[n(q,{"fast-fail":"",onSubmit:M(o(g),["prevent"])},{default:d(()=>[n(_,{type:"email",modelValue:o(i).value.value,"onUpdate:modelValue":t[0]||(t[0]=r=>o(i).value.value=r),"error-messages":o(i).errorMessage.value,label:"Email"},null,8,["modelValue","error-messages"]),n(_,{modelValue:o(u).value.value,"onUpdate:modelValue":t[1]||(t[1]=r=>o(u).value.value=r),"error-messages":o(u).errorMessage.value,label:"password","append-icon":e.value?"mdi-eye":"mdi-eye-off",type:e.value?"text":"password","onClick:append":t[2]||(t[2]=r=>e.value=!e.value)},null,8,["modelValue","error-messages","append-icon","type"]),n(m,{to:"forgot"},{default:d(()=>[c("Forgot Password?")]),_:1}),n(E,{type:"submit",color:"primary",block:"",class:"mt-2"},{default:d(()=>[c("Sign in")]),_:1})]),_:1},8,["onSubmit"]),V("div",z,[V("p",G,[c("Don't have an account? "),n(m,{to:"/auth/register"},{default:d(()=>[c("Sign Up")]),_:1})])])],64)}}});export{I as default};
