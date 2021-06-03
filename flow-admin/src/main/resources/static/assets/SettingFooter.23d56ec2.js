import{J as e,c as t,d as a,X as s,f as o,a8 as n,aX as c,a5 as l,ba as r,bb as i,g as d}from"./index.3f4b0a4c.js";import{k as u,cq as g,bg as f,u as p,K as C,o as y,n as m,q as S,Y as k,s as b,x as h}from"./vendor.9d9efc92.js";var x=u({name:"SettingFooter",components:{CopyOutlined:g,RedoOutlined:f},setup(){const u=e(),{prefixCls:g}=t("setting-footer"),{t:f}=a(),{createSuccessModal:C,createMessage:y}=d(),m=s(),S=o(),k=n();return{prefixCls:g,t:f,handleCopy:function(){const{isSuccessRef:e}=c(JSON.stringify(p(k.getProjectConfig),null,2));p(e)&&C({title:f("layout.setting.operatingTitle"),content:f("layout.setting.operatingContent")})},handleResetSetting:function(){try{k.setProjectConfig(l);const{colorWeak:e,grayMode:t}=l;r(e),i(t),y.success(f("layout.setting.resetSuccess"))}catch(e){y.error(e)}},handleClearAndRedo:function(){localStorage.clear(),k.resetAllState(),u.resetState(),m.resetState(),S.resetState(),location.reload()}}}});const R=h(),O=R(((e,t,a,s,o,n)=>{const c=C("CopyOutlined"),l=C("a-button"),r=C("RedoOutlined");return y(),m("div",{class:e.prefixCls},[S(l,{type:"primary",block:"",onClick:e.handleCopy},{default:R((()=>[S(c,{class:"mr-2"}),k(" "+b(e.t("layout.setting.copyBtn")),1)])),_:1},8,["onClick"]),S(l,{color:"warning",block:"",onClick:e.handleResetSetting,class:"my-3"},{default:R((()=>[S(r,{class:"mr-2"}),k(" "+b(e.t("common.resetText")),1)])),_:1},8,["onClick"]),S(l,{color:"error",block:"",onClick:e.handleClearAndRedo},{default:R((()=>[S(r,{class:"mr-2"}),k(" "+b(e.t("layout.setting.clearBtn")),1)])),_:1},8,["onClick"])],2)}));x.render=O,x.__scopeId="data-v-c36cd858";export default x;
