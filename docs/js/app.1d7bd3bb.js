(function(t){function e(e){for(var a,i,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(a=!1)}a&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},i={app:0},o={app:0},r=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"61942e32"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"b782af90"}[t]+".css",o=c.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var u=r[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===a||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||o,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete i[t],f.parentNode.removeChild(f),n(r)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){i[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,n[1](d)}o[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/Kasuga_Shinkan_2020_Info/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),i=n.n(a);i.a},"0418":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"header_comp"}},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:n("edbf"),id:"logo"}}),a("h2",{attrs:{id:"page_title"}},[t._v(t._s(t.title))])]),a("img",{attrs:{src:n("3644"),id:"twitter_icon"},on:{click:t.openTwitter}})],1)},i=[],o={name:"Header",data:function(){return{title:"春日新歓2020情報Web"}},methods:{openTwitter:function(){var t="https://twitter.com/kasuga2020?s=20";window.open(t)}}},r=o,s=(n("8baf"),n("2877")),c=Object(s["a"])(r,a,i,!1,null,null,null);e["a"]=c.exports},"1a12":function(t,e,n){},"1bb5":function(t,e,n){},"23b4":function(t,e,n){t.exports=n.p+"img/家の線画イラスト.b640a3e2.png"},3644:function(t,e,n){t.exports=n.p+"img/twitterのアイコン素材 その2.145d0e3e.png"},3971:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"item_button"}},[a("img",{attrs:{src:n("d7ce"),id:"icon"}}),a("div",{attrs:{id:"title_container"}},[a("h1",{staticClass:"title"},[t._v(t._s(t.title))]),a("br"),a("h2",{staticClass:"title"},[t._v("について")])])])},i=[],o={name:"ItemButton01",data:function(){return{title:"大学"}}},r=o,s=(n("8e51"),n("2877")),c=Object(s["a"])(r,a,i,!1,null,"20a2fb5f",null);e["a"]=c.exports},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"trans"}},[n("router-view",{attrs:{study_list:this.studyList,life_list:this.lifeList,senior_list:this.seniorList}})],1),n("Footer",{attrs:{id:"footer"}})],1)},o=[],r=(n("ac1f"),n("5319"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"footer_comp"}},[a("img",{attrs:{src:n("bbb4"),id:"tsukuba"},on:{click:function(e){return t.openTsukubaUniv()}}})])}),s=[],c={name:"Footer",methods:{openTsukubaUniv:function(){window.open("http://www.tsukuba.ac.jp/")}}},u=c,l=(n("760c"),n("2877")),d=Object(l["a"])(u,r,s,!1,null,null,null),f=d.exports,p={name:"App",components:{Footer:f},data:function(){return{studyList:[],lifeList:[],seniorList:[]}},created:function(){this.getPost()},methods:{getPost:function(){var t=this;this.axios.get("https://kzkymur.com/api/topic/").then((function(e){for(var n=0;n<e.data.topic.length;n++){if(e.data.topic[n].isYouTube=!1,""==e.data.topic[n].youtube_link)e.data.topic[n].isYouTube=!1;else{e.data.topic[n].isYouTube=!0;var a=e.data.topic[n].youtube_link.replace("youtu.be","www.youtube.com/embed");a=a.replace("t=","start="),e.data.topic[n].youtube_link=a}"大学"==e.data.topic[n].category?t.studyList.push(e.data.topic[n]):"生活"==e.data.topic[n].category?t.lifeList.push(e.data.topic[n]):"先輩"==e.data.topic[n].category&&t.seniorList.push(e.data.topic[n])}})).catch((function(t){window.alert(t)}))}}},m=p,h=(n("034f"),Object(l["a"])(m,i,o,!1,null,null,null)),_=h.exports,v=(n("45fc"),n("d3b7"),n("8c4f")),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("Header"),n("div",{attrs:{id:"container"}},[t._m(0),n("div",{attrs:{id:"about_site_container"}},[t._m(1),n("p",{staticClass:"about_content"},[t._v("この春日新歓2020情報Weはb春日新歓委員が行うライブ配信の内容をベースに新入生向けのお役立ち情報をまとめたサイトです。各トピックごとに該当する生配信のリンクを張り付けているのでそちらの方も参考にしていただけるとより分かりやすいと思います。")]),n("p",{staticClass:"about_content"},[t._v("また、"),n("a",{attrs:{id:"twitter"},on:{click:t.openTwitter}},[t._v("春日新歓2020公式Twitterアカウント")]),t._v("でも質問を受け付けておりますのでぜひご活用ください。")])]),n("div",{attrs:{id:"item_button_container"}},[n("router-link",{attrs:{to:"/study"}},[n("ItemButton01",{staticClass:"item_button"})],1),n("router-link",{attrs:{to:"/life"}},[n("ItemButton02",{staticClass:"item_button"})],1),n("router-link",{attrs:{to:"/senior"}},[n("ItemButton03",{staticClass:"item_button"})],1)],1),n("AddQuestion")],1)],1)},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"about_live_container"}},[n("div",{staticClass:"about_title_container"},[n("h1",{staticClass:"about_title1"},[t._v("ライブ配信")]),n("h2",{staticClass:"about_title2"},[t._v("について")])]),n("p",{staticClass:"about_content"},[t._v("コロナウイルスの感染拡大に伴って当初予定していたイベントなどが実施不可能な状況になってしまいました。そこで春日新歓委員会は春学期が始まるまでの間、YouTubeライブ配信を行うことを決定致しました。この配信では、あそこのスーパーが安い！といった実生活のことから先輩が大学で何をしているのかといったことまで様々なトピックを取り上げていこうと考えています。新入生からの質問もどんどん受け付けていこうと思いますのでぜひ参加してください！")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about_title_container"},[n("h1",{staticClass:"about_title1"},[t._v("このサイト")]),n("h2",{staticClass:"about_title2"},[t._v("について")])])}],y=n("0418"),w=n("3971"),k=n("d57a"),C=n("9a68"),x=n("6957"),E={name:"Home",components:{Header:y["a"],ItemButton01:w["a"],ItemButton02:k["a"],ItemButton03:C["a"],AddQuestion:x["a"]},created:function(){this.$router.isPass=!1,this.$router.pass=""},methods:{openTwitter:function(){var t="https://twitter.com/kasuga2020?s=20";window.open(t)}}},j=E,O=(n("cccb"),Object(l["a"])(j,b,g,!1,null,null,null)),T=O.exports;a["a"].use(v["a"]);var L=[{path:"/",name:"Home",component:T},{path:"/study",name:"Study",component:function(){return n.e("about").then(n.bind(null,"560f"))}},{path:"/life",name:"Life",component:function(){return n.e("about").then(n.bind(null,"0845"))}},{path:"/senior",name:"Senior",component:function(){return n.e("about").then(n.bind(null,"48b1"))}},{path:"/Authentication_for_committee_member",name:"Auth",component:function(){return n.e("about").then(n.bind(null,"2fef"))}},{path:"/Authentication_for_committee_member/form",name:"Form",component:function(){return n.e("about").then(n.bind(null,"c109"))},meta:{requiresAuth:!0}},{path:"/Authentication_for_committee_member/question",name:"Question",component:function(){return n.e("about").then(n.bind(null,"e254"))},meta:{requiresAuth:!0}}],P=new v["a"]({mode:"hash",base:"/Kasuga_Shinkan_2020_Info/",routes:L});P.isPass=!1,P.beforeEach((function(t,e,n){t.matched.some((function(t){return t.meta.requiresAuth}))&&0==P.isPass?n({path:"/Authentication_for_committee_member/",query:{redirect:t.fullPath}}):n()}));var q=P,A=n("62c3"),B=n.n(A),I=n("8549"),S=n.n(I);a["a"].config.productionTip=!1,a["a"].use(S.a,B.a),new a["a"]({router:q,render:function(t){return t(_)}}).$mount("#app")},"5ced":function(t,e,n){},"669f":function(t,e,n){"use strict";var a=n("d8ff"),i=n.n(a);i.a},6860:function(t,e,n){},6957:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"add_question"}},[n("div",{attrs:{id:"form_container"}},[n("form",[t._m(0),n("div",{staticClass:"item_container"},[n("h2",{staticClass:"form_title"},[t._v("項目")]),n("form",{attrs:{id:"category_container"}},t._l(t.categoryList,(function(e){return n("div",{key:e.key},[n("input",{staticClass:"check",attrs:{type:"radio",name:"category",id:e},domProps:{value:e}}),n("p",{staticClass:"category",on:{click:function(n){return t.checkControl(e)}}},[t._v(t._s(e))])])})),0),n("h2",{staticClass:"form_title"},[t._v("内容")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.question,expression:"question"}],staticClass:"input2",attrs:{placeholder:"例 : 履修登録はいつから始まりますか？"},domProps:{value:t.question},on:{input:function(e){e.target.composing||(t.question=e.target.value)}}})]),n("input",{staticClass:"send",attrs:{value:"送信する",type:"submit"},on:{click:function(e){return t.send()}}})])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form_title_container"},[n("h2",{staticClass:"add_question_title"},[t._v("質問フォーム")])])}],o=(n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),{name:"AddQuestion",data:function(){return{category:"",question:"",categoryList:["大学","生活","先輩"]}},methods:{checkControl:function(t){var e=document.getElementById(t),n=document.getElementById("category_container"),a=n.category,i=a.value;""!=i&&i==e.value||(e.checked=!e.checked)},setCategory:function(){var t=document.getElementById("category_container"),e=t.category,n=e.value;this.category=n},send:function(){var t=this;if(this.setCategory(),""==this.category)window.alert("項目を選択してください💦");else{if(""==this.question)return void window.alert("質問内容を入力してください💦");var e=new URLSearchParams;e.append("mode",0),e.append("category",this.category),e.append("main",this.question),this.axios.post("https://kzkymur.com/api/manage_question/",e).then((function(){window.alert("正しく投稿できました！🎉"),t.category="",t.question=""})).catch((function(t){window.alert(t)}))}}}}),r=o,s=(n("669f"),n("2877")),c=Object(s["a"])(r,a,i,!1,null,"4211f913",null);e["a"]=c.exports},"760c":function(t,e,n){"use strict";var a=n("c3f5"),i=n.n(a);i.a},"7d2e":function(t,e,n){"use strict";var a=n("1a12"),i=n.n(a);i.a},"85ec":function(t,e,n){},"8baf":function(t,e,n){"use strict";var a=n("6860"),i=n.n(a);i.a},"8e51":function(t,e,n){"use strict";var a=n("93c3"),i=n.n(a);i.a},"8e9f":function(t,e,n){"use strict";var a=n("1bb5"),i=n.n(a);i.a},"93c3":function(t,e,n){},"9a68":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"item_button"}},[a("img",{attrs:{src:n("ec5e"),id:"icon"}}),a("div",{attrs:{id:"title_container"}},[a("h1",{staticClass:"title"},[t._v(t._s(t.title))]),a("br"),a("h2",{staticClass:"title"},[t._v("について")])])])},i=[],o={name:"ItemButton03",data:function(){return{title:"先輩"}}},r=o,s=(n("8e9f"),n("2877")),c=Object(s["a"])(r,a,i,!1,null,"25a58236",null);e["a"]=c.exports},bbb4:function(t,e,n){t.exports=n.p+"img/UTLogo_150.c8ffa6d0.png"},c3f5:function(t,e,n){},cccb:function(t,e,n){"use strict";var a=n("5ced"),i=n.n(a);i.a},d57a:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"item_button"}},[a("img",{attrs:{src:n("23b4"),id:"icon"}}),a("div",{attrs:{id:"title_container"}},[a("h1",{staticClass:"title"},[t._v(t._s(t.title))]),a("br"),a("h2",{staticClass:"title"},[t._v("について")])])])},i=[],o={name:"ItemButton02",data:function(){return{title:"生活"}}},r=o,s=(n("7d2e"),n("2877")),c=Object(s["a"])(r,a,i,!1,null,"729426aa",null);e["a"]=c.exports},d7ce:function(t,e,n){t.exports=n.p+"img/えんぴつ付きのノートアイコン.5086ece5.png"},d8ff:function(t,e,n){},ec5e:function(t,e,n){t.exports=n.p+"img/人物の無料素材.7aa36ffc.png"},edbf:function(t,e,n){t.exports=n.p+"img/logo_klismust_white.76a18073.png"}});
//# sourceMappingURL=app.1d7bd3bb.js.map