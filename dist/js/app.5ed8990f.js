(function(n){function e(e){for(var r,c,a=e[0],i=e[1],d=e[2],f=0,l=[];f<a.length;f++)c=a[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&l.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n[r]=i[r]);p&&p(e);while(l.length)l.shift()();return u.push.apply(u,d||[]),t()}function t(){for(var n,e=0;e<u.length;e++){for(var t=u[e],r=!0,c=1;c<t.length;c++){var i=t[c];0!==o[i]&&(r=!1)}r&&(u.splice(e--,1),n=a(a.s=t[0]))}return n}var r={},o={app:0},u=[];function c(n){return a.p+"js/"+({about:"about"}[n]||n)+"."+{about:"34b4a326","chunk-08f37a46":"25442173","chunk-2d0b722f":"71d3c943","chunk-2d0d07e5":"378fc039","chunk-2d0d63f1":"11785533","chunk-2d2102cc":"c27a5094","chunk-2d21a3d2":"cf26112f","chunk-2d21e30b":"9842aa46","chunk-328f5dbd":"cb5f1d39"}[n]+".js"}function a(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.e=function(n){var e=[],t=o[n];if(0!==t)if(t)e.push(t[2]);else{var r=new Promise((function(e,r){t=o[n]=[e,r]}));e.push(t[2]=r);var u,i=document.createElement("script");i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.src=c(n);var d=new Error;u=function(e){i.onerror=i.onload=null,clearTimeout(f);var t=o[n];if(0!==t){if(t){var r=e&&("load"===e.type?"missing":e.type),u=e&&e.target&&e.target.src;d.message="Loading chunk "+n+" failed.\n("+r+": "+u+")",d.name="ChunkLoadError",d.type=r,d.request=u,t[1](d)}o[n]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:i})}),12e4);i.onerror=i.onload=u,document.head.appendChild(i)}return Promise.all(e)},a.m=n,a.c=r,a.d=function(n,e,t){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},a.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)a.d(t,r,function(e){return n[e]}.bind(null,r));return t},a.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="/",a.oe=function(n){throw console.error(n),n};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=e,i=i.slice();for(var f=0;f<i.length;f++)e(i[f]);var p=d;u.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"56d7":function(n,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}},[t("router-view")],1)])},u=[],c={name:"App",data:function(){return{}}},a=c,i=(t("5c0b"),t("2877")),d=Object(i["a"])(a,o,u,!1,null,null,null),f=d.exports,p=(t("d3b7"),t("8c4f"));r["a"].use(p["a"]);var l=[{path:"/",name:"Home",component:function(){return t.e("chunk-2d21a3d2").then(t.bind(null,"bb51"))},children:[{path:"products",name:"產品列表",component:function(){return t.e("chunk-08f37a46").then(t.bind(null,"e6dc"))}},{path:"",component:function(){return t.e("chunk-2d21e30b").then(t.bind(null,"d504"))}},{path:"cart",name:"購物車",component:function(){return t.e("chunk-2d2102cc").then(t.bind(null,"b789"))}},{path:"product/:id",name:"單一產品頁面",component:function(){return t.e("chunk-328f5dbd").then(t.bind(null,"d2f1"))}}]},{path:"/about",name:"About",component:function(){return t.e("about").then(t.bind(null,"f820"))}},{path:"/admin",name:"admin",component:function(){return t.e("chunk-2d0d63f1").then(t.bind(null,"7277"))},children:[{path:"orders",name:"orders",component:function(){return t.e("chunk-2d0d07e5").then(t.bind(null,"67e3"))}},{path:"products",name:"products",component:function(){return t.e("chunk-2d0b722f").then(t.bind(null,"1fae"))}}]}],h=new p["a"]({routes:l}),s=h,b=t("9062"),m=t.n(b),v=(t("e40d"),t("bc3a")),k=t.n(v),y=t("a7fe"),g=t.n(y);r["a"].component("Loading",m.a),r["a"].use(g.a,k.a),r["a"].config.productionTip=!1,new r["a"]({router:s,render:function(n){return n(f)}}).$mount("#app")},"5c0b":function(n,e,t){"use strict";var r=t("9c0c"),o=t.n(r);o.a},"9c0c":function(n,e,t){}});
//# sourceMappingURL=app.5ed8990f.js.map