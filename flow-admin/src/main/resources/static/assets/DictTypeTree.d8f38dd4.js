import{_ as e}from"./Tree.vue_vue&type=style&index=0&lang.2b29f8be.js";import{g as t}from"./dicType.2932ff12.js";import{k as r,r as a,I as n,K as s,o,n as i,q as c}from"./vendor.9d9efc92.js";import"./index.3f4b0a4c.js";import"./useContextMenu.8ef0a43f.js";/* empty css              */import"./useExpose.0886c4eb.js";var l=r({name:"DictTypeTree",components:{BasicTree:e},emits:["select"],setup(e,{emit:r}){const s=a([]);function o(){return e=this,r=null,a=function*(){s.value=yield t()},new Promise(((t,n)=>{var s=e=>{try{i(a.next(e))}catch(t){n(t)}},o=e=>{try{i(a.throw(e))}catch(t){n(t)}},i=e=>e.done?t(e.value):Promise.resolve(e.value).then(s,o);i((a=a.apply(e,r)).next())}));var e,r,a}return n((()=>{o()})),{treeData:s,handleSelect:function(e,t){r("select",e[0])}}}});const m={class:"bg-white m-4 mr-0 overflow-hidden"};l.render=function(e,t,r,a,n,l){const u=s("BasicTree");return o(),i("div",m,[c(u,{title:"数据分类",toolbar:"",search:"",clickRowToExpand:!1,treeData:e.treeData,replaceFields:{key:"id",title:"name"},onSelect:e.handleSelect},null,8,["treeData","onSelect"])])};export default l;
