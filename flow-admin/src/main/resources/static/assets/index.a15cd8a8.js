import{_ as e}from"./BasicForm.df85bae6.js";import{ae as o,g as l}from"./index.3f4b0a4c.js";import{_ as n}from"./PageWrapper.acc8d12f.js";import{o as a}from"./select.36492603.js";import{k as p,r as i,K as s,o as t,n as r,Q as c,q as d}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.07d1a2fc.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              */import"./useModal.fc795c66.js";import"./useWindowSizeFn.0534066c.js";/* empty css              *//* empty css              */import"./download.42909391.js";import"./StrengthMeter.7f6a4ce0.js";import"./usePageContext.18bdf57b.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.b73559bc.js";const m=[{id:"guangdong",label:"广东省",value:"1",key:"1"},{id:"jiangsu",label:"江苏省",value:"2",key:"2"}],u={guangdong:[{label:"珠海市",value:"1",key:"1"},{label:"深圳市",value:"2",key:"2"},{label:"广州市",value:"3",key:"3"}],jiangsu:[{label:"南京市",value:"1",key:"1"},{label:"无锡市",value:"2",key:"2"},{label:"苏州市",value:"3",key:"3"}]},f=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:({schema:e,formModel:o})=>({placeholder:"自定义placeholder",onChange:e=>{}}),renderComponentContent:()=>({prefix:()=>"pSlot",suffix:()=>"sSlot"})},{field:"field2",component:"Input",label:"带后缀",defaultValue:"111",colProps:{span:8},componentProps:{onChange:e=>{}},suffix:"天"},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field8",component:"Checkbox",label:"字段8",colProps:{span:8},renderComponentContent:"Check"},{field:"field9",component:"Switch",label:"字段9",colProps:{span:8}},{field:"field10",component:"RadioButtonGroup",label:"字段10",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field11",component:"Cascader",label:"字段11",colProps:{span:8},componentProps:{options:[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}]}},{field:"field30",component:"ApiSelect",label:"远程下拉",required:!0,componentProps:{api:a},colProps:{span:8},defaultValue:"0"},{field:"field20",component:"InputNumber",label:"字段20",required:!0,colProps:{span:8}},{field:"province",component:"Select",label:"省份",colProps:{span:8},componentProps:({formModel:e,formActionType:o})=>({options:m,placeholder:"省份与城市联动",onChange:l=>{let n=1==l?u[m[0].id]:u[m[1].id];void 0===l&&(n=[]),e.city=void 0;const{updateSchema:a}=o;a({field:"city",componentProps:{options:n}})}})},{field:"city",component:"Select",label:"城市",colProps:{span:8},componentProps:{options:[],placeholder:"省份与城市联动"}},{field:"field21",component:"Slider",label:"字段21",componentProps:{min:0,max:100,range:!0,marks:{20:"20°C",60:"60°C"}},colProps:{span:8}},{field:"field22",component:"Rate",label:"字段22",defaultValue:3,colProps:{span:8},componentProps:{disabled:!1,allowHalf:!0}}];var b=p({components:{BasicForm:e,CollapseContainer:o,PageWrapper:n},setup(){const e=i(null),{createMessage:o}=l();return{schemas:f,handleSubmit:e=>{o.success("click search,values:"+JSON.stringify(e))},check:e}}});b.render=function(e,o,l,n,a,p){const i=s("BasicForm"),m=s("CollapseContainer"),u=s("PageWrapper");return t(),r(u,{title:"表单基础示例"},{default:c((()=>[d(m,{title:"基础示例"},{default:c((()=>[d(i,{autoFocusFirstItem:"",labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default b;
