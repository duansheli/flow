var e=Object.defineProperty,o=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(o,t,r)=>t in o?e(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r,s=(e,o,t)=>new Promise(((r,i)=>{var s=e=>{try{n(t.next(e))}catch(o){i(o)}},a=e=>{try{n(t.throw(e))}catch(o){i(o)}},n=e=>e.done?r(e.value):Promise.resolve(e.value).then(s,a);n((t=t.apply(e,o)).next())}));import{_ as a,a as n}from"./useModal.fc795c66.js";import{_ as d}from"./BasicForm.df85bae6.js";import{u as l}from"./useForm.a42bd52f.js";import{f as c,b as m}from"./module.data.e5f523ca.js";import{k as f,r as p,u,f as j,K as b,o as h,n as g,Q as x,q as y,N as v}from"./vendor.9d9efc92.js";import"./index.3f4b0a4c.js";import"./useWindowSizeFn.0534066c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.07d1a2fc.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./download.42909391.js";import"./StrengthMeter.7f6a4ce0.js";var w=f({name:"ModuleModal",components:{BasicModal:a,BasicForm:d},emits:["success","register"],setup(e,{emit:a}){const d=p(!0),[f,{resetFields:b,setFieldsValue:h,updateSchema:g,validate:x}]=l({labelWidth:100,schemas:c,showActionButtonGroup:!1}),[y,{setModalProps:v,closeModal:w}]=n((e=>s(this,null,(function*(){b(),v({confirmLoading:!1}),d.value=!!(null==e?void 0:e.isUpdate),u(d)?(h(((e,s)=>{for(var a in s||(s={}))t.call(s,a)&&i(e,a,s[a]);if(o)for(var a of o(s))r.call(s,a)&&i(e,a,s[a]);return e})({},e.record)),g([{field:"component",show:!1},{field:"url",show:!1}])):g([{field:"component",show:!0},{field:"url",show:!0}])}))));return{registerModal:y,registerForm:f,getTitle:j((()=>u(d)?"修改":"新增")),handleSubmit:function(){return s(this,null,(function*(){try{v({confirmLoading:!0});const e=yield x();yield m(e),w(),a("success")}finally{v({confirmLoading:!1})}}))}}}});w.render=function(e,o,t,r,i,s){const a=b("BasicForm"),n=b("BasicModal");return h(),g(n,v(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:x((()=>[y(a,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default w;
