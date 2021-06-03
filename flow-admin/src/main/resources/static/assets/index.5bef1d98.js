import{k as e,p as o,c as t,d as a,U as s,f as r,o as n}from"./index.3f4b0a4c.js";import{k as l,au as c,av as i,f as d,K as u,o as p,n as m,q as f,Q as g,X as k,s as h,V as x}from"./vendor.9d9efc92.js";import{D as _}from"./siteSetting.136c2269.js";import{b as C}from"./useModal.fc795c66.js";import{h as D}from"./header.d801b988.js";import{c as w}from"./createAsyncComponent.a0cf9207.js";import"./useWindowSizeFn.0534066c.js";var y=l({name:"UserDropdown",components:{Dropdown:c,Menu:i,MenuItem:w((()=>e((()=>import("./DropMenuItem.f97df96f.js")),["/assets/DropMenuItem.f97df96f.js","/assets/vendor.9d9efc92.js","/assets/vendor.70495537.css","/assets/index.3f4b0a4c.js","/assets/index.69000eb3.css"]))),MenuDivider:i.Divider,LockAction:w((()=>e((()=>import("./LockModal.939a8deb.js")),["/assets/LockModal.939a8deb.js","/assets/LockModal.3de92e4a.css","/assets/index.e73bb52f.css","/assets/index.0edc9df2.css","/assets/index.05ac8d06.css","/assets/index.1028f51b.css","/assets/index.80c4f864.css","/assets/index.2558ae94.css","/assets/index.5dcbaae4.css","/assets/index.29c0da9f.css","/assets/index.d060b1b4.css","/assets/index.6d85b653.css","/assets/index.13a891d2.css","/assets/index.3f4b0a4c.js","/assets/index.69000eb3.css","/assets/vendor.9d9efc92.js","/assets/vendor.70495537.css","/assets/useModal.fc795c66.js","/assets/useModal.054ab88c.css","/assets/useWindowSizeFn.0534066c.js","/assets/BasicForm.df85bae6.js","/assets/BasicForm.4bad96dd.css","/assets/CountdownInput.07d1a2fc.js","/assets/CountdownInput.05ee5bdd.css","/assets/uuid.c53863e7.js","/assets/uuid.a7889821.css","/assets/download.42909391.js","/assets/StrengthMeter.7f6a4ce0.js","/assets/StrengthMeter.fb6f9f1a.css","/assets/useForm.a42bd52f.js","/assets/lock.76a62bb9.js","/assets/header.d801b988.js"])))},props:{theme:o.oneOf(["dark","light"])},setup(){const{prefixCls:e}=t("header-user-dropdown"),{t:o}=a(),{getShowDoc:l,getUseLockPage:c}=s(),i=r(),u=d((()=>{const{realName:e="",image:o,desc:t}=i.getUserInfo||{};return{realName:e,avatar:o||D,desc:t}})),[p,{openModal:m}]=C();return{prefixCls:e,t:o,getUserInfo:u,handleMenuClick:function(e){switch(e.key){case"logout":i.confirmLoginOut();break;case"doc":n(_);break;case"lock":m(!0)}},getShowDoc:l,register:p,getUseLockPage:c}}});y.render=function(e,o,t,a,s,r){const n=u("MenuItem"),l=u("MenuDivider"),c=u("Menu"),i=u("Dropdown"),d=u("LockAction");return p(),m(x,null,[f(i,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:g((()=>[f(c,{onClick:e.handleMenuClick},{default:g((()=>[e.getShowDoc?(p(),m(n,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):k("",!0),e.getShowDoc?(p(),m(l,{key:1})):k("",!0),e.getUseLockPage?(p(),m(n,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):k("",!0),f(n,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])])),_:1},8,["onClick"])])),default:g((()=>[f("span",{class:[[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"]},[f("img",{class:`${e.prefixCls}__header`,src:e.getUserInfo.avatar},null,10,["src"]),f("span",{class:`${e.prefixCls}__info hidden md:block`},[f("span",{class:[`${e.prefixCls}__name  `,"truncate"]},h(e.getUserInfo.realName),3)],2)],2)])),_:1},8,["overlayClassName"]),f(d,{onRegister:e.register},null,8,["onRegister"])],64)};export default y;
