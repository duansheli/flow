import{av as e,a$ as t,aP as l,j as a}from"./index.3f4b0a4c.js";import{a1 as n,b2 as r}from"./vendor.9d9efc92.js";/* empty css              */var d,o;(o=d||(d={})).ModuleList="/flow/privilege/module/getModules",o.SaveOrUpdate="/flow/privilege/module/saveOrUpdate",o.Delete="/flow/privilege/module/delete",o.SavePValue="/flow/privilege/module/addPriVal",o.CheckEntityExist="/flow/privilege/module/checkEntityExist";const i=a=>{const n=e.post({url:d.ModuleList,params:a});return Promise.resolve(n).then((e=>{const a=t(e,{id:"id",children:"children",pid:"pid"});return l(a,(e=>{0===e.children.length&&delete e.children}),{id:"id",children:"children",pid:"pid"}),a}))},s=t=>e.post({url:d.SaveOrUpdate,params:t}),p=t=>e.post({url:d.SavePValue,params:t}),c=t=>e.post({url:d.Delete,params:t}),m=t=>e.post({url:d.CheckEntityExist,params:t}),u=[{title:"菜单名称",dataIndex:"name",align:"left",width:150,customRender:({record:e})=>n("span",{},[n(a,{icon:e.image}),n("span",e.name)])},{title:"URL",dataIndex:"url",align:"left",width:180},{title:"标识",dataIndex:"sn",align:"left",width:120},{title:"组件",dataIndex:"component",align:"left",width:200},{title:"状态",dataIndex:"status",width:60,customRender:({record:e})=>{const t=1==~~e.status,l=t?"启用":"停用";return n(r,{color:t?"green":"red"},(()=>l))}},{title:"权限值",dataIndex:"pvs",align:"left",width:200,customRender:({record:e})=>{const t=e.pvs;return t.map((e=>n(r,{color:"green",style:{marginRight:"5px"}},(()=>e.name))))}},{title:"排序",dataIndex:"orderNo",width:60}],h=[{field:"keyword",label:"关键字",component:"Input",componentProps:{placeholder:"请输入名称/标识"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],f=[{field:"id",label:"ID",required:!1,component:"Input",show:!1},{field:"pid",label:"pid",required:!1,component:"Input",show:!1},{field:"image",label:"图标",component:"IconPicker",componentProps:{}},{field:"name",label:"名称",required:!0,component:"Input",rules:[{required:!0,whitespace:!0,message:"名称不能为空！"},{max:32,message:"字符长度不能大于32！"}]},{field:"sn",label:"标识",required:!0,component:"Input"},{field:"url",label:"URL",component:"Input",rules:[{required:!0,whitespace:!0,message:"URL不能为空！"},{pattern:new RegExp("^\\/?(\\w+\\/?)+(\\.?\\w+)?$"),type:"string",message:"请输入正确的URL地址！"},{max:128,message:"字符长度不能大于128！"}]},{field:"component",label:"组件地址",component:"Input",rules:[{required:!0,whitespace:!0,message:"组件目录地址不能为空！"},{pattern:new RegExp("^\\/?(\\w+\\/?)+(\\.?\\w+)?$"),type:"string",message:"请输入正确的目录地址！"},{max:128,message:"字符长度不能大于128！"}]},{field:"orderNo",label:"排序号",component:"InputNumber"},{field:"status",label:"状态",required:!1,component:"Switch",defaultValue:!0,componentProps:{checkedChildren:"启用",unCheckedChildren:"禁用"}},{field:"showStatus",label:"是否显示",required:!1,component:"Switch",defaultValue:!0,componentProps:{checkedChildren:"显示",unCheckedChildren:"隐藏"}}],g=[{field:"id",label:"ID",required:!1,component:"Input",show:!1},{field:"pvs",label:" ",required:!1,component:"CheckboxGroup",labelWidth:10,componentProps:{}}];export{m as a,s as b,u as c,c as d,p as e,f,i as g,g as p,h as s};
