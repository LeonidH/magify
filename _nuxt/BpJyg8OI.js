import{d,r as p,o as m,O as _,c,e as a,D as i,h as f,ap as l,k}from"./C75TgHsS.js";const g={key:0,class:"popover"},E=d({__name:"Popover",setup(L){const e=p(!1),v=()=>{e.value=!e.value,e.value?document.addEventListener("click",o):document.removeEventListener("click",o)},s=()=>{e.value=!1,document.removeEventListener("click",o)},u=()=>{e.value=!0,document.addEventListener("click",o)},o=t=>{const n=document.querySelector(".popover"),r=document.querySelector(".popover-container");n&&!n.contains(t.target)&&r&&!r.contains(t.target)&&s()};return m(()=>{document.removeEventListener("click",o)}),_(()=>{document.removeEventListener("click",o)}),(t,n)=>(c(),a("div",{class:"popover-container",onClick:l(v,["stop"]),onMouseover:l(u,["stop"]),onMouseleave:s},[i(t.$slots,"trigger",{},void 0,!0),e.value?(c(),a("div",g,[i(t.$slots,"content",{},void 0,!0)])):f("",!0)],32))}}),h=Object.assign(k(E,[["__scopeId","data-v-7fda886b"]]),{__name:"Popover"});export{h as default};
