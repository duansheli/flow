import{av as e,a$ as s,aP as t}from"./index.3f4b0a4c.js";var a,i;(i=a||(a={})).GetDicTypes="/flow/base/dicType/getDicTypes",i.SaveOrUpdate="/flow/base/dicType/saveOrUpdate",i.Delete="/flow/base/dicType/delete",i.CheckEntityExist="/flow/base/dicType/checkEntityExist";const r=i=>{const r=e.post({url:a.GetDicTypes,params:i});return Promise.resolve(r).then((e=>{const a=s(e,{id:"id",children:"children",pid:"pid"});return t(a,(e=>{0===e.children.length&&delete e.children}),{id:"id",children:"children",pid:"pid"}),a}))},d=s=>e.post({url:a.SaveOrUpdate,params:s}),p=s=>e.post({url:a.Delete,params:s}),c=s=>e.post({url:a.CheckEntityExist,params:s});export{c,p as d,r as g,d as s};
