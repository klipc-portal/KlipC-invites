(function(){var t={9516:function(t,e,i){"use strict";var s=i(2856),n=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},a=[],r=i(5732),o=i.n(r),c=o(),l=i(1656),u=(0,l.A)(c,n,a,!1,null,null,null),m=u.exports,p=i(1594),f=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"container"},[e("div",{staticClass:"container1"},[t._m(0),e("div",{staticClass:"title"},[t._v("KlipC")]),e("div",{staticClass:"title2"},[t._v("全球线下城市交流会")]),e("div",{staticClass:"title3"},[t._v("“融合前沿，共创未来”")]),t._m(1),e("div",{staticClass:"form"},[e("div",{staticClass:"form-title"},[t._v("KlipC交流会观众报名表")]),e("div",{staticClass:"form-text"},[t._v("具体时间和地址将以短信方式发送给大家，我们欢迎所有城市的用户都报名，下一场可能就来到您的城市哦")]),e("el-form",{ref:"form",staticClass:"demo-form",attrs:{model:t.form,"status-icon":"",rules:t.rules,"label-width":"100px"}},[e("el-form-item",{attrs:{prop:"name"}},[e("el-input",{attrs:{placeholder:"姓名"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),e("el-form-item",{attrs:{prop:"phone"}},[e("el-input",{attrs:{placeholder:"手机号"},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1),e("el-form-item",{attrs:{prop:"email"}},[e("el-input",{attrs:{placeholder:"邮箱"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),e("el-form-item",{attrs:{prop:"city"}},["en"==t.language?e("el-input",{attrs:{placeholder:"所在城市"},model:{value:t.form.city,callback:function(e){t.$set(t.form,"city",e)},expression:"form.city"}}):t._e(),"zh"==t.language?e("el-cascader",{attrs:{size:"large",options:t.options,placeholder:"请选择所在城市"},on:{change:t.handleChange},model:{value:t.selectedOptions,callback:function(e){t.selectedOptions=e},expression:"selectedOptions"}}):t._e()],1),e("el-form-item",{staticClass:"buttons"},[e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("form")}}},[t._v("确认报名")])],1)],1)],1),t._m(2),t._m(3)]),e("div",{staticClass:"bottom-text mt-50"},[t._v("KlipC 官网：https://klipc.me/")]),t._m(4)])])},d=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-sb"},[e("div",{staticClass:"logo"},[e("img",{attrs:{src:i(3153)}})]),e("div",{staticClass:"lang"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("div",{staticClass:"box"},[e("img",{staticClass:"number-img1",attrs:{src:i(5842)}}),e("div",{staticClass:"section-title"},[t._v("关于KLIPC")]),e("img",{staticClass:"line-img",attrs:{src:i(2933)}})]),e("div",{staticClass:"text"},[t._v("KlipC 成立于2019年，总部位于美国"),e("span",{staticClass:"color-bc"},[t._v("西雅图 ")]),t._v("，技术开发是由"),e("span",{staticClass:"color-bc"},[t._v("15年+")]),t._v(" 行业金融技术经验的瑞典团队负责，管理团队都是已经积累了"),e("span",{staticClass:"color-bc"},[t._v("15年+")]),t._v(" 行业领域的成员组成。全球超过"),e("span",{staticClass:"color-bc"},[t._v("100,000用户")]),t._v("选择KlipC，其在T4/T5的API跨服务器领域处于"),e("span",{staticClass:"color-bc"},[t._v("行业领先地位")]),t._v("。通过不断"),e("span",{staticClass:"color-bc"},[t._v("提升技术专业性、优化交易功能、改善用户体验和保障线上一对一用户服务")]),t._v("，我们在线上积累了非常好的"),e("span",{staticClass:"color-bc"},[t._v("口碑")]),t._v("。KlipC致力于整合行业用户资源，打造更加友好的线上线下互动生态。")]),e("div",{staticClass:"text"},[t._v("Now 我们计划在各个城市举办线下技术交流会，向全球"),e("span",{staticClass:"color-bc"},[t._v("交易员、投资者、信号、跟单者、技术团队和交易商等所有行业人士发出诚挚的邀请！")]),t._v("期待您的积极参与，促进行业发展，为市场带来更多讯息、技术和合作的机会！")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("div",{staticClass:"box"},[e("img",{staticClass:"number-img",attrs:{src:i(6809)}}),e("div",{staticClass:"section-title"},[t._v("主办方")]),e("img",{staticClass:"line-img",attrs:{src:i(2933)}})]),e("div",{staticClass:"logos"},[e("img",{attrs:{src:i(3153)}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex code-box"},[e("div",[e("div",{staticClass:"code"},[e("img",{staticClass:"code-img",attrs:{src:i(9131)}}),e("div",{staticClass:"bottom-text"},[t._v("扫一扫关注公众号")])])]),e("div",[e("div",{staticClass:"code"},[e("img",{staticClass:"code-img",attrs:{src:i(7372)}}),e("div",{staticClass:"bottom-text"},[t._v("下载KlipC")])])])])},function(){var t=this,e=t._self._c;return e("div",[e("img",{staticClass:"bgimg",attrs:{src:i(1386)}})])}],v=i(9876),h=i(2257),g=i(6215),A={data(){return{options:g.tG,selectedOptions:[],selectedProvince:"",checked:!1,language:"zh",form:{name:"",phone:"",email:"",city:"",news:"观众报名表"},baseURL1:"https://dev.klipc.com.cn",baseURL2:"https://master.klipc.com.cn",baseURL3:"https://my.klipc.com",rules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}],phone:[{required:!0,message:"请输入电话",trigger:"blur"}],email:[{type:"email",required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],city:[{required:!0,message:"请输入所在城市",trigger:"blur"}]},app_id:"5b090c17-c221-4912-b850-d697b2ef89c4",app_secret:"e803ba2aca76615ea0ebc1983732052d",secret_tk:""}},created(){this.getToken()},methods:{changeLanguage(t){this.language=t,this.$i18n.locale=t},getToken(){let t=this;h.A.post(this.baseURL3+"/api/platform/auth",{app_id:this.app_id,app_secret:(0,v.A)(this.app_secret)}).then((function(e){t.secret_tk=e.data.data.token})).catch((function(t){console.log(t)}))},handleChange(t){g.tG.forEach((e=>{e.value==t[0]&&e.children.forEach((i=>{i.value==t[1]&&(this.form.city=e.label+i.label)}))}))},submitF(){const t={activity_name:"成都第一次klipc交流会",activity_city:"成都",name:this.form.name,area_code:"+86",phone:this.form.phone,email:this.form.email,city:this.form.city,location:"中国"};h.A.post(this.baseURL3+"/api/platform/enroll",t,{headers:{Token:this.secret_tk}}).then((t=>{10200==t.data.status?this.$message({message:"报名成功！",type:"success"}):this.$message.error(t.data.msg)}))},submitForm(t){this.$refs[t].validate((t=>{if(!t)return!1;this.submitF()}))}}},b=A,C=(0,l.A)(b,f,d,!1,null,null,null),y=C.exports;s["default"].use(p.Ay);const k=[{path:"/",name:"home",component:y},{path:"/guest",name:"guest",component:()=>i.e(749).then(i.bind(i,1749))}],E=new p.Ay({mode:"history",base:"/",routes:k});var x=E,Q=i(1910);s["default"].use(Q.Ay);var _=new Q.Ay.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),O=i(4927),B=i.n(O),w=i(6586);s["default"].use(w.A);const D={en:{message:{hello:"Hello world"}},zh:{message:{hello:"你好世界"}}},T=new w.A({locale:"en",messages:D});var P=T;s["default"].config.productionTip=!1,s["default"].use(B()),new s["default"]({i18n:P,router:x,store:_,render:t=>t(m)}).$mount("#app")},9876:function(t,e,i){"use strict";var s=i(9865);function n(t){let e,i=new s.A;e="-----BEGIN PUBLIC KEY-----\n    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC31LpVckwg3LqcyHSKOWCqYsx/\n    UY27PQUxI3ACcgbq7dPngmuxPylWKqARgZAzbmnJGrQJNz4pFMf3o45V8TVV7bn3\n    H5erQEwPdzn+heFS3g0jwdIsnCGnJHF4FQyQIOONTHE6gn81yB6EkRspVM1cPvNe\n    hwDPJIwjmXUCF7rVMQIDAQAB\n    -----END PUBLIC KEY-----",i.setPublicKey(e);let n=i.encrypt(t);return n}e.A=n},5732:function(){},9131:function(t,e,i){"use strict";t.exports=i.p+"img/code.9e5275ad.jpg"},5842:function(t,e,i){"use strict";t.exports=i.p+"img/01.7b458d60.png"},6809:function(t,e,i){"use strict";t.exports=i.p+"img/02.f2d63e9b.png"},1386:function(t,e,i){"use strict";t.exports=i.p+"img/bg.cc396fde.png"},7372:function(t,e,i){"use strict";t.exports=i.p+"img/code2.6501b4a5.png"},2933:function(t){"use strict";t.exports="data:image/png;base64,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"},3153:function(t,e,i){"use strict";t.exports=i.p+"img/logo.4eaa3876.png"}},e={};function i(s){var n=e[s];if(void 0!==n)return n.exports;var a=e[s]={id:s,loaded:!1,exports:{}};return t[s].call(a.exports,a,a.exports,i),a.loaded=!0,a.exports}i.m=t,function(){i.amdO={}}(),function(){var t=[];i.O=function(e,s,n,a){if(!s){var r=1/0;for(u=0;u<t.length;u++){s=t[u][0],n=t[u][1],a=t[u][2];for(var o=!0,c=0;c<s.length;c++)(!1&a||r>=a)&&Object.keys(i.O).every((function(t){return i.O[t](s[c])}))?s.splice(c--,1):(o=!1,a<r&&(r=a));if(o){t.splice(u--,1);var l=n();void 0!==l&&(e=l)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[s,n,a]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){i.f={},i.e=function(t){return Promise.all(Object.keys(i.f).reduce((function(e,s){return i.f[s](t,e),e}),[]))}}(),function(){i.u=function(t){return"js/"+t+".a8b70d66.js"}}(),function(){i.miniCssF=function(t){}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="klipc-invites:";i.l=function(s,n,a,r){if(t[s])t[s].push(n);else{var o,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var m=l[u];if(m.getAttribute("src")==s||m.getAttribute("data-webpack")==e+a){o=m;break}}o||(c=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,i.nc&&o.setAttribute("nonce",i.nc),o.setAttribute("data-webpack",e+a),o.src=s),t[s]=[n];var p=function(e,i){o.onerror=o.onload=null,clearTimeout(f);var n=t[s];if(delete t[s],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((function(t){return t(i)})),e)return e(i)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=p.bind(null,o.onerror),o.onload=p.bind(null,o.onload),c&&document.head.appendChild(o)}}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){i.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){i.p="/"}(),function(){var t={524:0};i.f.j=function(e,s){var n=i.o(t,e)?t[e]:void 0;if(0!==n)if(n)s.push(n[2]);else{var a=new Promise((function(i,s){n=t[e]=[i,s]}));s.push(n[2]=a);var r=i.p+i.u(e),o=new Error,c=function(s){if(i.o(t,e)&&(n=t[e],0!==n&&(t[e]=void 0),n)){var a=s&&("load"===s.type?"missing":s.type),r=s&&s.target&&s.target.src;o.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",o.name="ChunkLoadError",o.type=a,o.request=r,n[1](o)}};i.l(r,c,"chunk-"+e,e)}},i.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,a,r=s[0],o=s[1],c=s[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(n in o)i.o(o,n)&&(i.m[n]=o[n]);if(c)var u=c(i)}for(e&&e(s);l<r.length;l++)a=r[l],i.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return i.O(u)},s=self["webpackChunkklipc_invites"]=self["webpackChunkklipc_invites"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=i.O(void 0,[504],(function(){return i(9516)}));s=i.O(s)})();
//# sourceMappingURL=app.d8b0f3f6.js.map