import{av as e}from"./index.3f4b0a4c.js";var a,s;(s=a||(a={})).GetAll="/flow/base/app/getApps",s.PageList="/flow/base/app/getPagerModel",s.SaveOrUpdate="/flow/base/app/saveOrUpdate",s.Delete="/flow/base/app/delete",s.CheckEntityExist="/flow/base/app/checkEntityExist",s.RefreshSecretKey="/flow/base/app/refreshSecretKey";const t=s=>e.post({url:a.GetAll,params:s}).then((e=>(e.forEach((e=>{e.label=e.name,e.value=e.sn})),Promise.resolve(e)))),p=s=>{const t=s&&{pageNum:s.pageNum,pageSize:s.pageSize};let p=s||{};p&&(delete p.pageNum,delete p.pageSize);const r={query:t,entity:p};return e.post({url:a.PageList,params:r})},r=s=>e.post({url:a.SaveOrUpdate,params:s}),l=s=>e.post({url:a.RefreshSecretKey+"/"+s,params:{}}),o=s=>e.post({url:a.CheckEntityExist,params:s}),i=s=>e.post({url:a.Delete,params:s});export{t as a,o as c,i as d,p as g,l as r,r as s};
