import n from"./C6J2D30N.js";import{u as s}from"./BY-KBrpR.js";import{q as m}from"./B9cy5Xtz.js";import{d as c,z as p,A as u,B as r,c as i,C as _,h as f}from"./C75TgHsS.js";import"./BnkRLZNd.js";import"./C-v3KzvZ.js";import"./CxYJgpPD.js";import"./Dr0ceAFE.js";const B=c({__name:"blog",async setup(l){let e,o;const{data:t}=([e,o]=p(()=>s("home",()=>m("/blog").findOne())),e=await e,o(),e);if(!t.value)throw u({statusCode:404,statusMessage:"Page not found",fatal:!0});return(d,C)=>{const a=n;return r(t)?(i(),_(a,{key:0,value:r(t)},null,8,["value"])):f("",!0)}}});export{B as default};