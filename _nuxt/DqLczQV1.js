import{d as i,W as o,c,C as h,B as a,aq as p,a4 as m,K as g,p as l,a5 as u}from"./C75TgHsS.js";const d="img",f=i({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(r){const t=r,n=o(()=>{var s;if((s=t.src)!=null&&s.startsWith("/")&&!t.src.startsWith("//")){const e=m(g(l().app.baseURL));if(e!=="/"&&!t.src.startsWith(e))return u(e,t.src)}return t.src});return(s,e)=>(c(),h(p(a(d)),{src:a(n),alt:t.alt,width:t.width,height:t.height},null,8,["src","alt","width","height"]))}}),S=Object.assign(f,{__name:"ProseImg"});export{S as default};
