import{k as e,bt as t,f as s,K as a,o as n,n as i,q as l,s as r,N as o,x as d}from"./vendor.9d9efc92.js";import{c as p}from"./index.3f4b0a4c.js";import{b as c}from"./index.5e6993ca.js";import"./useDrawer.0850b094.js";/* empty css              *//* empty css              */import"./createAsyncComponent.a0cf9207.js";import"./useFrameKeepAlive.67aeecc7.js";var f=e({name:"SelectItem",components:{Select:t},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:()=>[]}},setup(e){const{prefixCls:t}=p("setting-select-item");return{prefixCls:t,handleChange:function(t){e.event&&c(e.event,t)},getBindValue:s((()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{}))}}});const m=d()(((e,t,s,d,p,c)=>{const f=a("Select");return n(),i("div",{class:e.prefixCls},[l("span",null,r(e.title),1),l(f,o(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}));f.render=m,f.__scopeId="data-v-2dba4940";export default f;
