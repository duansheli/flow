import e from"./index.678ce3bf.js";import{u as a}from"./useFrameKeepAlive.67aeecc7.js";import{k as r,a as t,u as m,r as n,I as s,f as o,K as f,o as i,n as l,q as u}from"./vendor.9d9efc92.js";import{X as d}from"./index.3f4b0a4c.js";import{a as c}from"./modelInfo.8f3aaefc.js";import"./useWindowSizeFn.0534066c.js";var p=r({name:"BpmnDesigner",components:{FramePage:e},setup(){const{currentRoute:e}=t(),{query:{modelId:r}}=m(e),f=n(""),i=n({}),l=d(),u=t(),p=l.getTabList.find((e=>e.fullPath===u.currentRoute.value.fullPath));s((()=>{0!==p.meta.title.indexOf("设计流程-")&&c(r).then((e=>{p.meta.title&&-1===p.meta.title.indexOf("-"+e.name)&&(p.meta.title=p.meta.title+"-"+e.name)})).catch((()=>{}))})),f.value="/flow-bpmn/index.html/#/bpmn/designer?modelId="+r;const{getFramePages:h,hasRenderFrame:g,showIframe:F}=a(),j=o((()=>m(h).length>0));return{getFramePages:h,hasRenderFrame:g,showIframe:F,showFrame:j,url:f,frame:i}}});p.render=function(e,a,r,t,m,n){const s=f("FramePage");return i(),l("div",null,[u(s,{frameSrc:e.url},null,8,["frameSrc"])])};export default p;
