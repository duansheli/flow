import{k as a,ad as e,a as r,f as t,u as s,K as n,o,n as p,Q as u,Y as m,s as c,q as d}from"./vendor.9d9efc92.js";import{_ as i}from"./PageWrapper.acc8d12f.js";import"./index.3f4b0a4c.js";import"./usePageContext.18bdf57b.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.b73559bc.js";var f=a({name:"TestTab",components:{PageWrapper:i,Input:e},setup(){const{currentRoute:a}=r();return{params:t((()=>s(a).params))}}});const b=d("br",null,null,-1),l=m(" Keep Alive ");f.render=function(a,e,r,t,s,i){const f=n("Input"),j=n("PageWrapper");return o(),p(j,{title:"带参数标签页",content:"支持带参数多tab缓存"},{default:u((()=>[m(" Current Param : "+c(a.params)+" ",1),b,l,d(f)])),_:1})};export default f;
