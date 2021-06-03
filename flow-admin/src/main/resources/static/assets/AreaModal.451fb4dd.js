var e=Object.defineProperty,a=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(a,t,r)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r,o=(e,a,t)=>new Promise(((r,s)=>{var o=e=>{try{i(t.next(e))}catch(a){s(a)}},l=e=>{try{i(t.throw(e))}catch(a){s(a)}},i=e=>e.done?r(e.value):Promise.resolve(e.value).then(o,l);i((t=t.apply(e,a)).next())}));import{_ as l,a as i}from"./useModal.fc795c66.js";import{_ as n}from"./BasicForm.df85bae6.js";import{u as d}from"./useForm.a42bd52f.js";import{av as c,a$ as m,aP as p}from"./index.3f4b0a4c.js";import{k as u,r as f,u as g,f as h,K as b,o as y,n as v,Q as w,q as P,N as x}from"./vendor.9d9efc92.js";const j=[{title:"名称",dataIndex:"name",align:"left"},{title:"编码",dataIndex:"code",width:100,align:"left"},{title:"创建时间",dataIndex:"createTime",width:180}],O=[{field:"keyword",label:"关键字",component:"Input",componentProps:{placeholder:"请输入名称/编码"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],A=[{field:"pcode",label:"pcode",required:!1,component:"Input",show:!1},{field:"name",label:"名称",required:!0,component:"Input",rules:[{required:!0,whitespace:!0,message:"名称不能为空！"},{max:20,message:"字符长度不能大于20！"}]},{field:"code",label:"编码",required:!0,component:"Input"}];var M,_;(_=M||(M={})).GetAreas="/flow/base/area/getAreas",_.SaveOrUpdate="/flow/base/area/saveOrUpdate",_.Delete="/flow/base/area/delete",_.GetAreasByPcode="/flow/base/area/getAreasByPcode",_.CheckEntityExist="/flow/base/area/checkEntityExist";const B=e=>{const a=c.post({url:M.GetAreas,params:e});return Promise.resolve(a).then((e=>{const a=m(e,{id:"code",children:"children",pid:"pcode"});return p(a,(e=>{0===e.children.length&&delete e.children}),{id:"code",children:"children",pid:"pcode"}),a}))},E=e=>c.post({url:M.Delete+"/",params:e});var F=u({name:"AreaModal",components:{BasicModal:l,BasicForm:n},emits:["success","register"],setup(e,{emit:l}){const n=f(!0),[m,{resetFields:p,updateSchema:u,setFieldsValue:b,validate:y}]=d({labelWidth:100,schemas:A,showActionButtonGroup:!1}),v=e=>[{trigger:"blur",validator:(a,t)=>t?(e=>c.post({url:M.CheckEntityExist,params:e}))({id:e.id,field:e.field,fieldValue:t,fieldName:e.fieldName}).then((a=>a?Promise.resolve():Promise.reject(e.fieldName+"已存在，请修改！"))).catch((e=>Promise.reject(e))):Promise.resolve()}],[w,{setModalProps:P,closeModal:x,changeLoading:j}]=i((e=>o(this,null,(function*(){yield p(),P({confirmLoading:!1}),n.value=!!(null==e?void 0:e.isUpdate);let o=e.record;yield u([{field:"code",dynamicRules:()=>[{required:!0,whitespace:!0,message:"编码不能为空！"},{pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"请输入英文或数字！"},{max:10,message:"字符长度不能大于10！"},...v({id:g(n)&&o&&o.code||"",field:"code",fieldValue:"",fieldName:"标识"})]}]),g(n)&&b(((e,o)=>{for(var l in o||(o={}))t.call(o,l)&&s(e,l,o[l]);if(a)for(var l of a(o))r.call(o,l)&&s(e,l,o[l]);return e})({},e.record))}))));return{registerModal:w,registerForm:m,getTitle:h((()=>g(n)?"修改":"新增")),handleSubmit:function(){return o(this,null,(function*(){j(!0);try{P({confirmLoading:!0});const a=yield y();yield(e=a,c.post({url:M.SaveOrUpdate,params:e})),x(),l("success")}finally{P({confirmLoading:!1}),j(!1)}var e}))}}}});F.render=function(e,a,t,r,s,o){const l=b("BasicForm"),i=b("BasicModal");return y(),v(i,x(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:w((()=>[P(l,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:F});export{I as A,F as _,j as c,E as d,B as g,O as s};
