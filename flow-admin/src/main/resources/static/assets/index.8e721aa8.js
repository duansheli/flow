import{g as e,_ as s}from"./BasicForm.df85bae6.js";import{u as a,av as o,g as r}from"./index.3f4b0a4c.js";import{u as i}from"./useForm.a42bd52f.js";import{_ as n}from"./PageWrapper.acc8d12f.js";import{k as t,bz as p,K as d,o as m,n as c,Q as f,q as l}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.07d1a2fc.js";import"./uuid.c53863e7.js";/* empty css              */import"./useModal.fc795c66.js";import"./useWindowSizeFn.0534066c.js";/* empty css              *//* empty css              */import"./download.42909391.js";import"./StrengthMeter.7f6a4ce0.js";import"./usePageContext.18bdf57b.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.b73559bc.js";const{uploadUrl:u=""}=a();function j(e,s){return o.uploadFile({url:u,onUploadProgress:s},e)}const g=[{field:"field1",component:"Upload",label:"字段1",colProps:{span:8},rules:[{required:!0,message:"请选择上传文件"}],componentProps:{api:j}}];var b=t({components:{BasicUpload:e,BasicForm:s,PageWrapper:n,[p.name]:p},setup(){const{createMessage:e}=r(),[s]=i({labelWidth:120,schemas:g,actionColOptions:{span:16}});return{handleChange:s=>{e.info(`已上传文件${JSON.stringify(s)}`)},uploadApi:j,register:s}}});b.render=function(e,s,a,o,r,i){const n=d("a-alert"),t=d("BasicUpload"),p=d("BasicForm"),u=d("PageWrapper");return m(),c(u,{title:"上传组件示例"},{default:f((()=>[l(n,{message:"基础示例"}),l(t,{maxSize:20,maxNumber:10,onChange:e.handleChange,api:e.uploadApi,class:"my-5"},null,8,["onChange","api"]),l(n,{message:"嵌入表单,加入表单校验"}),l(p,{onRegister:e.register,class:"my-5"},null,8,["onRegister"])])),_:1})};export default b;
