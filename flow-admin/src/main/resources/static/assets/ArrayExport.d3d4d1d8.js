import{_ as e}from"./TableImg.215d3df0.js";import"./BasicForm.df85bae6.js";import"./index.19c1715d.js";import{c as o,d as a,a as t,b as s,e as i}from"./data.f0f7d304.js";import{_ as r}from"./PageWrapper.acc8d12f.js";import{k as d,K as n,o as m,n as c,Q as p,q as f,Y as j}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              */import"./useForm.a42bd52f.js";import"./index.3f4b0a4c.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./useModal.fc795c66.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.03f0b134.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.07d1a2fc.js";/* empty css              *//* empty css              */import"./download.42909391.js";import"./StrengthMeter.7f6a4ce0.js";import"./createAsyncComponent.a0cf9207.js";import"./usePageContext.18bdf57b.js";/* empty css              *//* empty css              */var b=d({components:{BasicTable:e,PageWrapper:r},setup:()=>({aoaToExcel:function(){t({data:s,header:i,filename:"二维数组方式导出excel.xlsx"})},columns:o,data:a})});const u=j(" 导出 ");b.render=function(e,o,a,t,s,i){const r=n("a-button"),d=n("BasicTable"),j=n("PageWrapper");return m(),c(j,{title:"导出示例",content:"根据数组格式的数据进行导出"},{default:p((()=>[f(d,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:p((()=>[f(r,{onClick:e.aoaToExcel},{default:p((()=>[u])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export default b;
