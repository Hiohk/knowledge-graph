import{$ as E,r as x,ac as a,S as b,U as P,Y as z,Z as t,c as e,a5 as n,u as v,X as T,_ as N,G as f,F as G,ad as R,B as X,a6 as Z,a7 as ee}from"./chunks/framework.DpMkwoNM.js";import{c as F,g as te,d as ae,a as H,L as oe,b as J,D as ne,e as se,m as A,S as le,E as ce,M as re,f as ie,U as de,h as _e,i as ue,W as pe,Q as me,j as fe,k as he}from"./chunks/theme.Bn4i24wv.js";const I="/knowledge-graph/assets/avatarImg.BWcCNF6K.svg";var K={exports:{}};(function(S,k){(function(_,u){S.exports=u()})(F,function(){return function(_,u,h){_=_||{};var i=u.prototype,c={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function y(o,s,w,C){return i.fromToBase(o,s,w,C)}h.en.relativeTime=c,i.fromToBase=function(o,s,w,C,$){for(var d,g,O,Y=w.$locale().relativeTime||c,L=_.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],D=L.length,l=0;l<D;l+=1){var r=L[l];r.d&&(d=C?h(o).diff(w,r.d,!0):w.diff(o,r.d,!0));var M=(_.rounding||Math.round)(Math.abs(d));if(O=d>0,M<=r.r||!r.r){M<=1&&l>0&&(r=L[l-1]);var V=Y[r.l];$&&(M=$(""+M)),g=typeof V=="string"?V.replace("%d",M):V(M,s,r.l,O);break}}if(s)return g;var j=O?Y.future:Y.past;return typeof j=="function"?j(g):j.replace("%s",g)},i.to=function(o,s){return y(o,s,this,!0)},i.from=function(o,s){return y(o,s,this)};var p=function(o){return o.$u?h.utc():h()};i.toNow=function(o){return this.to(p(this),o)},i.fromNow=function(o){return this.from(p(this),o)}}})})(K);var ve=K.exports;const ge=te(ve);var ke={exports:{}};(function(S,k){(function(_,u){S.exports=u(ae)})(F,function(_){function u(c){return c&&typeof c=="object"&&"default"in c?c:{default:c}}var h=u(_),i={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(c,y){return y==="W"?c+"周":c+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(c,y){var p=100*c+y;return p<600?"凌晨":p<900?"早上":p<1100?"上午":p<1300?"中午":p<1800?"下午":"晚上"}};return h.default.locale(i,null,!0),i})})(ke);const ye={key:"comment-basic-like"},we={style:{"padding-left":"8px",cursor:"auto"}},be={key:"comment-basic-dislike"},xe={style:{"padding-left":"8px",cursor:"auto"}},Ce=["onClick"],$e={class:"comment-content"},Ye={__name:"Comment",setup(S){H.extend(ge),H.locale("zh-cn");const k=x([{author:"Leonard",avatar:I,content:"Object.assign()可以实现深拷贝？",datetime:H(),likes:0,dislikes:0}]),_=x(!1),u=x(""),h=x("请输入你的评论"),i=s=>{s.likes=1,s.dislikes=0,s.action="liked"},c=s=>{s.dislikes=1,s.likes=0,s.action="disliked"},y=()=>{if(u.value===""){A.info("请输入你的评论");return}_.value=!0,setTimeout(()=>{_.value=!1,k.value=[{author:"Leonard"+o(5),avatar:I,content:u.value,datetime:H(),likes:0,dislikes:0},...k.value],A.success("评论成功"),u.value="",h.value="请输入你的评论"},1e3)},p=s=>{h.value="回复 @"+s.author},o=s=>{let w="",C="0123456789",$=C.length;for(let d=0;d<s;d++)w+=C.charAt(Math.floor(Math.random()*$));return w};return(s,w)=>{const C=a("a-tooltip"),$=a("a-avatar"),d=a("a-comment"),g=a("a-list-item"),O=a("a-list"),Y=a("a-textarea"),L=a("a-form-item"),D=a("a-button");return b(),P("div",null,[k.value.length?(b(),z(O,{key:0,"data-source":k.value,header:`${k.value.length} 评论`,"item-layout":"horizontal"},{renderItem:t(({item:l})=>[e(g,null,{default:t(()=>[e(d,null,{actions:t(()=>[n("span",ye,[e(C,{title:"赞"},{default:t(()=>[l.action==="liked"?(b(),z(v(oe),{key:0,onClick:r=>i(l)},null,8,["onClick"])):(b(),z(v(J),{key:1,onClick:r=>i(l)},null,8,["onClick"]))]),_:2},1024),n("span",we,T(l.likes),1)]),n("span",be,[e(C,{title:"踩一下"},{default:t(()=>[l.action==="disliked"?(b(),z(v(ne),{key:0,onClick:r=>c(l)},null,8,["onClick"])):(b(),z(v(se),{key:1,onClick:r=>c(l)},null,8,["onClick"]))]),_:2},1024),n("span",xe,T(l.dislikes),1)]),n("span",{key:"comment-basic-reply-to",onClick:r=>p(l)},"回复",8,Ce)]),author:t(()=>[n("a",null,T(l.author),1)]),avatar:t(()=>[e($,{src:v(I),alt:"Michael"},null,8,["src"])]),content:t(()=>[n("p",$e,T(l.content),1)]),datetime:t(()=>[e(C,{title:l.datetime.format("YYYY-MM-DD HH:mm:ss")},{default:t(()=>[n("span",null,T(l.datetime.fromNow()),1)]),_:2},1032,["title"])]),_:2},1024)]),_:2},1024)]),_:1},8,["data-source","header"])):N("",!0),e(d,null,{avatar:t(()=>[e($,{src:v(I),alt:"Han Solo"},null,8,["src"])]),content:t(()=>[e(L,null,{default:t(()=>[e(Y,{value:u.value,"onUpdate:value":w[0]||(w[0]=l=>u.value=l),rows:4,placeholder:h.value,"show-count":"",maxlength:200},null,8,["value","placeholder"])]),_:1}),e(L,null,{default:t(()=>[e(D,{"html-type":"submit",loading:_.value,type:"primary",onClick:y},{default:t(()=>[f(" 添加评论 ")]),_:1},8,["loading"])]),_:1})]),_:1})])}}},Se=E(Ye,[["__scopeId","data-v-55e14302"]]),De={class:"container"},Me={class:"search"},Te={key:0,class:"tips"},Le={class:"icon-item"},Oe={class:"icon-item"},Pe=["onClick"],je={key:0},ze={key:1},Ve=n("span",null,null,-1),Be={class:"tag"},He={class:"fold-text"},Ie={class:"pagination"},Ne={__name:"Blog",emits:["getPaperDetail"],setup(S,{emit:k}){const _=x([{title:"Object.assign 这算是深拷贝吗",content:"在JavaScript中，Object.assign() 是一个用于合并对象属性的常见方法。然而，对于许多开发者来说，关于它是否执行深拷贝的认识可能存在一些混淆。先说答案Object.assign()",date:"2024-02-28 22:12:23",pageViews:123,likes:45,comments:3,showComment:!1},{title:"防抖是回城，节流是攻击",content:"防抖和节流是前端开发中常用的函数优化手段，它们可以限制函数的执行频率，提升性能和用户体验。在我们的日常开发中，经常会遇到一些需要对函数进行优化的场景，比如防止表单的重复提交。",date:"2024-02-29 12:30:01",pageViews:12,likes:4,comments:2,showComment:!1},{title:"$nextTick底层原理(详细) - vue篇",content:"nextTick 是 Vue 的一个核心实现，$nextTick方法将回调延迟到下次DOM更新循环之后执行。Vue 的 nextTick 其本质是对 JavaScript 执行原理 EventLoop 的一种应用。",date:"2024-02-29 12:30:01",pageViews:12,likes:4,comments:2,showComment:!1},{title:"js中，对象的29个方法你都知道吗",content:"在js中，对象类型是非常重要的类型之一，也是项目中数据处理常用的类型之一，虽然这种类型我们经常使用，但是它的方法却不怎么用的到或者很少用到，",date:"2024-02-29 12:30:01",pageViews:12,likes:4,comments:2,showComment:!1}]),u=k,h=x(""),i=x(1),c=x(5),y=x(["5","10","20","30","50","100"]),p=x(!0),o=d=>{},s=()=>{p.value=!1},w=d=>{d.showComment=!d.showComment},C=d=>{u("getPaperDetail",d)},$=d=>{d.showComment=!d.showComment};return(d,g)=>{const O=a("a-input-search"),Y=a("a-alert"),L=a("a-space"),D=a("a-col"),l=a("a-divider"),r=a("a-tag"),M=a("a-row"),V=a("a-card-meta"),j=a("a-card"),W=a("a-button"),q=a("a-pagination");return b(),P("div",De,[n("div",Me,[e(O,{value:h.value,"onUpdate:value":g[0]||(g[0]=m=>h.value=m),size:"large",placeholder:"请输入关键词搜索","enter-button":"",onSearch:g[1]||(g[1]=m=>o())},null,8,["value"])]),p.value?(b(),P("div",Te,[e(L,{direction:"vertical",style:{width:"100%"}},{default:t(()=>[e(Y,{message:"致力于实现全面自动化的可实时部署的技术博客共享！",type:"success","show-icon":"",closable:"",onClose:s},{icon:t(()=>[e(v(le))]),_:1})]),_:1})])):N("",!0),(b(!0),P(G,null,R(_.value,(m,Q)=>(b(),P("div",{key:Q},[e(j,{class:"blog-card",hoverable:"",size:"small",onClick:U=>C(m)},{default:t(()=>[e(V,{title:m.title},{description:t(()=>[e(M,null,{default:t(()=>[e(D,{span:20},{default:t(()=>[e(M,null,{default:t(()=>[e(D,{span:24,class:"blog-content"},{default:t(()=>[f(T(m.content),1)]),_:2},1024),e(D,{span:24,class:"blog-bottom"},{default:t(()=>[e(M,null,{default:t(()=>[e(D,{span:12},{default:t(()=>[n("span",null,"发布于"+T(m.date),1),e(l,{type:"vertical"}),n("span",Le,[e(v(ce)),f(" "+T(m.pageViews),1)]),n("span",Oe,[e(v(J)),f(" "+T(m.likes),1)]),n("span",{class:"icon-item",onClick:X(U=>w(m),["stop"])},[m.showComment?(b(),P("span",ze,[e(v(ie))])):(b(),P("span",je,[e(v(re))])),f(" "+T(m.comments),1)],8,Pe),Ve]),_:2},1024),e(D,{span:12},{default:t(()=>[n("span",Be,[e(r,{color:"pink"},{default:t(()=>[f("前端")]),_:1}),e(r,{color:"red"},{default:t(()=>[f("JavaScript")]),_:1}),e(r,{color:"orange"},{default:t(()=>[f("Vue.js")]),_:1}),e(r,{color:"green"},{default:t(()=>[f("基础知识")]),_:1}),e(r,{color:"cyan"},{default:t(()=>[f("编程")]),_:1}),e(r,{color:"purple"},{default:t(()=>[f("笔试")]),_:1})])]),_:1})]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024),e(D,{span:4})]),_:2},1024)]),_:2},1032,["title"])]),_:2},1032,["onClick"]),m.showComment?(b(),z(j,{key:0,class:"blog-card",hoverable:"",size:"small"},{default:t(()=>[n("div",He,[e(W,{type:"link",onClick:U=>$(m)},{default:t(()=>[f("收 起 "),e(v(de))]),_:2},1032,["onClick"])]),e(Se)]),_:2},1024)):N("",!0)]))),128)),n("div",Ie,[e(q,{current:i.value,"onUpdate:current":g[2]||(g[2]=m=>i.value=m),"page-size":c.value,"onUpdate:pageSize":g[3]||(g[3]=m=>c.value=m),total:60,"show-total":m=>`总计 ${_.value.length} 条`,defaultPageSize:5,pageSizeOptions:y.value,"show-quick-jumper":""},null,8,["current","page-size","show-total","pageSizeOptions"])])])}}},B=S=>(Z("data-v-065e9363"),S=S(),ee(),S),Ue={class:"container"},Ae={class:"content"},Ee={target:"_blank",rel:"noopener noreferrer",href:""},Fe=B(()=>n("span",{class:"more"},"分享到微信",-1)),Je={target:"_blank",rel:"noopener noreferrer",href:""},Ke=B(()=>n("span",{class:"more"},"分享到QQ",-1)),We={target:"_blank",rel:"noopener noreferrer",href:""},qe=B(()=>n("span",{class:"more"},"分享到微博",-1)),Qe={class:"main-content"},Ge={class:"catalogue"},Re=B(()=>n("div",{class:"recommendation"},"推荐文章",-1)),Xe=B(()=>n("div",{class:"comment"},"评论区",-1)),Ze={__name:"PaperDetail",props:{currentPaperData:{type:Object}},emits:["closePaperDetail"],setup(S,{emit:k}){const _=S,u=k,h=x(["1"]),i=x({});i.value=_.currentPaperData;const c=()=>{u("closePaperDetail",!0)};return(y,p)=>{const o=a("a-tag"),s=a("a-qrcode"),w=a("a-popover"),C=a("a-button"),$=a("a-menu-item"),d=a("a-menu"),g=a("a-dropdown"),O=a("a-page-header"),Y=a("a-col"),L=a("a-anchor"),D=a("a-collapse-panel"),l=a("a-collapse"),r=a("a-row");return b(),P("div",Ue,[e(r,{gutter:[16,24]},{default:t(()=>[e(Y,{span:20},{default:t(()=>[n("div",Ae,[e(O,{title:i.value.title,onBack:c},{tags:t(()=>[e(o,{color:"pink"},{default:t(()=>[f("前端")]),_:1}),e(o,{color:"red"},{default:t(()=>[f("JavaScript")]),_:1}),e(o,{color:"orange"},{default:t(()=>[f("Vue.js")]),_:1}),e(o,{color:"green"},{default:t(()=>[f("基础知识")]),_:1}),e(o,{color:"cyan"},{default:t(()=>[f("编程")]),_:1}),e(o,{color:"blue"},{default:t(()=>[f("面试")]),_:1}),e(o,{color:"purple"},{default:t(()=>[f("笔试")]),_:1})]),extra:t(()=>[e(v(_e),{style:{fontSize:"20px",color:"#08c"}}),e(w,{"overlay-inner-style":{padding:0}},{content:t(()=>[e(s,{value:"http://www.antdv.com",bordered:!1})]),default:t(()=>[e(v(ue),{style:{fontSize:"20px",color:"#08c",marginLeft:"10px"}})]),_:1}),e(g,{key:"more"},{overlay:t(()=>[e(d,null,{default:t(()=>[e($,null,{default:t(()=>[n("a",Ee,[e(v(pe)),Fe])]),_:1}),e($,null,{default:t(()=>[n("a",Je,[e(v(me)),Ke])]),_:1}),e($,null,{default:t(()=>[n("a",We,[e(v(fe)),qe])]),_:1})]),_:1})]),default:t(()=>[e(C,{style:{border:"none",padding:0,marginLeft:"10px"}},{default:t(()=>[e(v(he),{style:{fontSize:"20px",verticalAlign:"top"}})]),_:1})]),_:1})]),_:1},8,["title"]),n("div",Qe,T(i.value.content),1)])]),_:1}),e(Y,{span:4},{default:t(()=>[e(r,{gutter:[16,24]},{default:t(()=>[e(Y,{span:24},{default:t(()=>[n("div",Ge,[e(l,{ghost:"",activeKey:h.value,"onUpdate:activeKey":p[0]||(p[0]=M=>h.value=M),expandIconPosition:"end"},{default:t(()=>[e(D,{key:"1",header:"目录"},{default:t(()=>[e(L,{affix:!1,items:[{key:"1",href:"#components-anchor-demo-basic",title:"Basic demo"},{key:"2",href:"#components-anchor-demo-static",title:"Static demo"},{key:"3",href:"#api",title:"API",children:[{key:"4",href:"#anchor-props",title:"Anchor Props"},{key:"5",href:"#link-props",title:"Link Props"}]}]})]),_:1})]),_:1},8,["activeKey"])])]),_:1}),e(Y,{class:"gutter-row",span:24},{default:t(()=>[Re]),_:1})]),_:1})]),_:1}),e(Y,{span:20},{default:t(()=>[Xe]),_:1})]),_:1})])}}},et=E(Ze,[["__scopeId","data-v-065e9363"]]),nt=JSON.parse('{"title":"技术文章","description":"","frontmatter":{"title":"技术文章","layout":"page"},"headers":[],"relativePath":"blog/index.md","filePath":"blog/index.md","lastUpdated":1710063648000}'),tt={name:"blog/index.md"},st=Object.assign(tt,{setup(S){const k=x(!1),_=x({}),u=x({"overflow-y":"scroll"}),h=y=>{_.value=y},i=y=>{k.value=!1},c=y=>{k.value=!1};return(y,p)=>{const o=a("a-modal");return b(),P("div",null,[e(Ne,{class:"blog",onGetPaperDetail:h}),e(o,{open:k.value,"onUpdate:open":p[0]||(p[0]=s=>k.value=s),title:"文章详情",width:"100%",height:"100%","wrap-class-name":"full-modal",onOk:c,bodyStyle:u.value},{default:t(()=>[e(et,{class:"detail","current-paper-data":_.value,onClosePaperDetail:i},null,8,["current-paper-data"])]),_:1},8,["open","bodyStyle"])])}}});export{nt as __pageData,st as default};
