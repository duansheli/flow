import{a8 as s,ai as e,b1 as o}from"./index.3f4b0a4c.js";import{k as i,aV as n,f as r,K as a,o as t,n as m,q as d,Q as c,Y as l,s as p}from"./vendor.9d9efc92.js";/* empty css              */var f=i({name:"CurrentPermissionMode",components:{Divider:n},setup(){const i=s(),n=r((()=>i.getProjectConfig.permissionMode)),{togglePermissionMode:a}=e();return{permissionMode:n,PermissionModeEnum:o,togglePermissionMode:a}}});const u={class:"mt-2"},M=l(" 当前权限模式： "),g=l(" 切换权限模式 ");f.render=function(s,e,o,i,n,r){const f=a("a-button"),P=a("Divider");return t(),m("div",u,[M,d(f,{type:"link"},{default:c((()=>[l(p(s.permissionMode===s.PermissionModeEnum.BACK?"后台权限模式":"前端角色权限模式"),1)])),_:1}),d(f,{class:"ml-4",onClick:s.togglePermissionMode,type:"primary"},{default:c((()=>[g])),_:1},8,["onClick"]),d(P)])};export default f;
