import{ae as e}from"./index.3f4b0a4c.js";import{k as t,r as l,bc as r,K as o,o as n,n as s,Q as a,q as i,Y as c,s as d}from"./vendor.9d9efc92.js";import{_ as u}from"./PageWrapper.acc8d12f.js";import"./usePageContext.18bdf57b.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.b73559bc.js";var m=t({components:{CollapseContainer:e,PageWrapper:u},setup(){const e=l(null),{enter:t,toggle:o,exit:n,isFullscreen:s}=r(),{toggle:a}=r(e);return{enter:t,toggleDom:a,toggle:o,isFullscreen:s,exit:n,domRef:e}}});const f=c(" Enter Window Full Screen "),p=c(" Toggle Window Full Screen "),g=c(" Exit Window Full Screen "),C=c(" Enter Dom Full Screen "),x={ref:"domRef",class:"flex items-center justify-center w-1/2 h-64 mx-auto mt-10 bg-white rounded-md"},b=c(" Exit Dom Full Screen ");m.render=function(e,t,l,r,u,m){const k=o("a-button"),w=o("CollapseContainer"),F=o("PageWrapper");return n(),s(F,{title:"全屏示例"},{default:a((()=>[i(w,{class:"w-full h-32 bg-white rounded-md",title:"Window Full Screen"},{default:a((()=>[i(k,{type:"primary",onClick:e.enter,class:"mr-2"},{default:a((()=>[f])),_:1},8,["onClick"]),i(k,{color:"success",onClick:e.toggle,class:"mr-2"},{default:a((()=>[p])),_:1},8,["onClick"]),i(k,{color:"error",onClick:e.exit,class:"mr-2"},{default:a((()=>[g])),_:1},8,["onClick"]),c(" Current State: "+d(e.isFullscreen),1)])),_:1}),i(w,{class:"w-full mt-5 bg-white rounded-md",title:"Dom Full Screen"},{default:a((()=>[i(k,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:a((()=>[C])),_:1},8,["onClick"])])),_:1}),i("div",x,[i(k,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:a((()=>[b])),_:1},8,["onClick"])],512)])),_:1})};export default m;
