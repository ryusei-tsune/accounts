(function(e){function t(t){for(var r,o,s=t[0],i=t[1],c=t[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(d.length)d.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"5f344100"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"f59b1926"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),s=0;s<u.length;s++){var c=u[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],l=c.getAttribute("data-href");if(l===r||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],p.parentNode.removeChild(p),n(u)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var p=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-app",[n("AppBar"),n("v-main",[n("router-view")],1)],1)],1)},a=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{attrs:{color:"cyan",dark:"","max-height":"60px"}},[n("v-toolbar-title",[e._v("家計簿アプリ")]),n("v-spacer"),e.userAuth?n("div",[e._v(" "+e._s(e.username)+" "),n("v-btn",{staticClass:"ml-2",attrs:{small:"",to:"/"},on:{click:function(t){return e.logout()}}},[n("v-icon",[e._v("mdi-logout")])],1)],1):e._e()],1)},s=[],i={name:"appBar-component",data:function(){return{}},computed:{userAuth:function(){return this.$store.state.auth},username:function(){return this.$store.state.username}},methods:{logout:function(){this.$store.commit("userAuthentication",!1)}}},c=i,l=n("2877"),d=Object(l["a"])(c,u,s,!1,null,null,null),p=d.exports,f={components:{AppBar:p}},m=f,v=(n("034f"),Object(l["a"])(m,o,a,!1,null,null,null)),h=v.exports,b=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-row",{staticClass:"ma-0",attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"11",md:"6",lg:"4"}},[n("v-card",{staticClass:"mt-10 mx-auto outlined",attrs:{color:"cyan lighten-5"}},[n("div",{staticClass:"pb-4"},[n("h1",[e._v("ログイン")])]),n("div",{attrs:{id:"wrong"}}),n("v-form",{ref:"form",staticClass:"mx-2"},[n("v-text-field",{staticClass:"mt-3",attrs:{"prepend-icon":"mdi-account-circle",label:"ユーザ名",outlined:"",rules:[e.required]},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),n("v-text-field",{attrs:{"prepend-icon":"mdi-lock",type:"password",label:"パスワード",outlined:"",rules:[e.required]},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"7"}},[n("v-card-text",[e._v(" アカウントをお持ちでない方は"),n("router-link",{attrs:{to:"/sign-up"}},[e._v("こちらへ")])],1)],1),n("v-col",{attrs:{cols:"12",sm:"12",md:"5"}},[n("v-card-text",[n("v-btn",{attrs:{color:"cyan lighten-2"},on:{click:function(t){return e.login()}}},[n("v-icon",{attrs:{left:"",small:""}},[e._v("mdi-login")]),e._v(" ログイン ")],1)],1)],1)],1)],1)],1)],1)],1)},y=[],w=n("1da1"),x=(n("96cf"),n("bc3a")),_=n.n(x),k={name:"Home",components:{},data:function(){return{username:"",password:"",required:function(e){return!!e||"必ず入力してください"}}},mounted:function(){this.$refs.form.resetValidation()},methods:{login:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){var n,r,o,a,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.$refs.form.validate()){t.next=13;break}return t.prev=1,n={password:e.password},t.next=5,_.a.post("/api/users/".concat(e.username),n);case 5:r=t.sent,o=r.data,o.existing?(e.$store.commit("userAuthentication",!0),e.$router.push("/history")):(a=document.getElementById("wrong"),a.hasChildNodes()||(u=document.createElement("h5"),u.innerText="ユーザ名またはパスワードが違います",a.appendChild(u),a.setAttribute("style","color:red;"))),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),console.log(null===t.t0||void 0===t.t0?void 0:t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})))()}}},j=k,O=Object(l["a"])(j,g,y,!1,null,null,null),C=O.exports;r["default"].use(b["a"]);var A=[{path:"/",name:"Home",component:C},{path:"/sign-up",name:"Sign-up",component:function(){return n.e("about").then(n.bind(null,"bba6"))}},{path:"/register",name:"Register",component:function(){return n.e("about").then(n.bind(null,"7803"))}},{path:"/history",name:"History",component:function(){return n.e("about").then(n.bind(null,"43c4"))}}],E=new b["a"]({mode:"history",base:"/",routes:A}),S=E,$=(n("b0c0"),n("2f62"));r["default"].use($["a"]);var P=new $["a"].Store({state:{auth:!1,username:"",userId:""},mutations:{userAuthentication:function(e,t){e.auth=t,e.auth||(e.username="",e.userId="")},userRegister:function(e,t){console.log(t.name,t.id),e.username=t.name,e.userId=t.id}},actions:{},modules:{}}),T=n("ce5b"),B=n.n(T);n("bf40");r["default"].use(B.a);var N={},q=new B.a(N);r["default"].config.productionTip=!1,new r["default"]({router:S,store:P,vuetify:q,render:function(e){return e(h)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.a84bdc30.js.map