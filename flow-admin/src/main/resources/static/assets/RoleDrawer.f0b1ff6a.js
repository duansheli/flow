var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,l=(e,t,r)=>new Promise(((a,o)=>{var l=e=>{try{s(r.next(e))}catch(t){o(t)}},n=e=>{try{s(r.throw(e))}catch(t){o(t)}},s=e=>e.done?a(e.value):Promise.resolve(e.value).then(l,n);s((r=r.apply(e,t)).next())}));import{_ as n}from"./BasicForm.df85bae6.js";import{u as s}from"./useForm.a42bd52f.js";import{a1 as i,b2 as u,k as d,r as c,f as m,u as p,K as f,o as b,n as v,Q as w,q as g,N as h}from"./vendor.9d9efc92.js";/* empty css              */import{_ as y,a as x}from"./useDrawer.0850b094.js";import{_ as j}from"./Tree.vue_vue&type=style&index=0&lang.2b29f8be.js";import{d as D}from"./system.39227e92.js";const I=[{title:"角色名称",dataIndex:"roleName",width:200},{title:"角色值",dataIndex:"roleValue",width:180},{title:"排序",dataIndex:"orderNo",width:50},{title:"状态",dataIndex:"status",width:80,customRender:({record:e})=>{const t=0==~~e.status,r=t?"启用":"停用";return i(u,{color:t?"green":"red"},(()=>r))}},{title:"创建时间",dataIndex:"createTime",width:180},{title:"备注",dataIndex:"remark"}],_=[{field:"roleNme",label:"角色名称",component:"Input",colProps:{span:8}},{field:"status",label:"状态",component:"Select",componentProps:{options:[{label:"启用",value:"0"},{label:"停用",value:"1"}]},colProps:{span:8}}],F=[{field:"roleName",label:"角色名称",required:!0,component:"Input"},{field:"roleValue",label:"角色值",required:!0,component:"Input"},{field:"status",label:"状态",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"启用",value:"0"},{label:"停用",value:"1"}]}},{label:"备注",field:"remark",component:"InputTextArea"},{label:" ",field:"menu",slot:"menu",component:"Input"}];var P=d({name:"RoleDrawer",components:{BasicDrawer:y,BasicForm:n,BasicTree:j},emits:["success","register"],setup(e,{emit:n}){const i=c(!0),u=c([]),[d,{resetFields:f,setFieldsValue:b,validate:v}]=s({labelWidth:90,schemas:F,showActionButtonGroup:!1}),[w,{setDrawerProps:g,closeDrawer:h}]=x((e=>l(this,null,(function*(){f(),g({confirmLoading:!1}),i.value=!!(null==e?void 0:e.isUpdate),p(i)&&b(((e,l)=>{for(var n in l||(l={}))r.call(l,n)&&o(e,n,l[n]);if(t)for(var n of t(l))a.call(l,n)&&o(e,n,l[n]);return e})({},e.record)),u.value=yield D()}))));return{registerDrawer:w,registerForm:d,getTitle:m((()=>p(i)?"编辑角色":"新增角色")),handleSubmit:function(){return l(this,null,(function*(){try{yield v();g({confirmLoading:!0}),h(),n("success")}finally{g({confirmLoading:!1})}}))},treeData:u}}});P.render=function(e,t,r,a,o,l){const n=f("BasicTree"),s=f("BasicForm"),i=f("BasicDrawer");return b(),v(i,h(e.$attrs,{onRegister:e.registerDrawer,showFooter:"",title:e.getTitle,width:"500px",onOk:e.handleSubmit}),{default:w((()=>[g(s,{onRegister:e.registerForm},{menu:w((({model:t,field:r})=>[g(n,{value:t[r],"onUpdate:value":e=>t[r]=e,treeData:e.treeData,replaceFields:{title:"menuName",key:"id"},checkable:"",toolbar:"",title:"菜单分配"},null,8,["value","onUpdate:value","treeData"])])),_:1},8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:P});export{B as R,P as _,I as c,_ as s};
