import{_ as e}from"./BasicForm.df85bae6.js";import{u as o}from"./useForm.a42bd52f.js";import{ae as r,g as s}from"./index.3f4b0a4c.js";import{k as t,ad as a,a1 as i,K as n,o as d,n as p,Q as l,q as m}from"./vendor.9d9efc92.js";import{_ as f}from"./PageWrapper.acc8d12f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.07d1a2fc.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              */import"./useModal.fc795c66.js";import"./useWindowSizeFn.0534066c.js";/* empty css              *//* empty css              */import"./download.42909391.js";import"./StrengthMeter.7f6a4ce0.js";import"./usePageContext.18bdf57b.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.b73559bc.js";const c=[{field:"field1",component:"Input",label:"render方式",colProps:{span:8},rules:[{required:!0}],render:({model:e,field:o})=>i(a,{placeholder:"请输入",value:e[o],onChange:r=>{e[o]=r.target.value}})},{field:"field2",component:"Input",label:"render组件slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"自定义Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}];var u=t({components:{BasicForm:e,CollapseContainer:r,PageWrapper:f,[a.name]:a},setup(){const{createMessage:e}=s(),[r,{setProps:t}]=o({labelWidth:120,schemas:c,actionColOptions:{span:24}});return{register:r,schemas:c,handleSubmit:o=>{e.success("click search,values:"+JSON.stringify(o))},setProps:t}}});u.render=function(e,o,r,s,t,a){const i=n("a-input"),f=n("BasicForm"),c=n("CollapseContainer"),u=n("PageWrapper");return d(),p(u,{title:"自定义组件示例"},{default:l((()=>[m(c,{title:"自定义表单"},{default:l((()=>[m(f,{onRegister:e.register,onSubmit:e.handleSubmit},{f3:l((({model:e,field:o})=>[m(i,{value:e[o],"onUpdate:value":r=>e[o]=r,placeholder:"自定义slot"},null,8,["value","onUpdate:value"])])),_:1},8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default u;
