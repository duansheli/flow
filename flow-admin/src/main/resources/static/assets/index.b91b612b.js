import{ae as e,aX as a,g as o}from"./index.3f4b0a4c.js";import{_ as t}from"./PageWrapper.acc8d12f.js";import{k as n,ad as s,r,u as l,K as p,o as i,n as c,Q as d,q as u,Y as f}from"./vendor.9d9efc92.js";import"./usePageContext.18bdf57b.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.b73559bc.js";var m=n({name:"Copy",components:{CollapseContainer:e,PageWrapper:t,[s.name]:s},setup(){const e=r(""),{createMessage:t}=o(),{clipboardRef:n,copiedRef:s}=a();return{handleCopy:function(){const a=l(e);a?(n.value=a,l(s)&&t.warning("copy success！")):t.warning("请输入要拷贝的内容！")},value:e}}});const C={class:"flex justify-center"},v=f(" Copy ");m.render=function(e,a,o,t,n,s){const r=p("a-input"),l=p("a-button"),f=p("CollapseContainer"),m=p("PageWrapper");return i(),c(m,{title:"文本复制示例"},{default:d((()=>[u(f,{class:"w-full h-32 bg-white rounded-md",title:"Copy Example"},{default:d((()=>[u("div",C,[u(r,{placeholder:"请输入",value:e.value,"onUpdate:value":a[1]||(a[1]=a=>e.value=a)},null,8,["value"]),u(l,{type:"primary",onClick:e.handleCopy},{default:d((()=>[v])),_:1},8,["onClick"])])])),_:1})])),_:1})};export default m;
