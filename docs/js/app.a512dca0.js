(function(t){function e(e){for(var a,i,s=e[0],u=e[1],c=e[2],l=0,d=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(a=!1)}a&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},i={app:0},r={app:0},o=[];function s(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"34d0e9d4"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={about:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"db5951e0"}[t]+".css",r=u.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var c=o[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===a||l===r))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],l=c.getAttribute("data-href");if(l===a||l===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete i[t],f.parentNode.removeChild(f),n(o)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){i[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=o);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(t);var d=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,n[1](d)}r[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/Kasuga_Shinkan_2020_Info/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),i=n.n(a);i.a},"0418":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"header_comp"}},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:n("edbf"),id:"logo"}}),a("h2",{attrs:{id:"page_title"}},[t._v(t._s(t.title))])]),a("img",{attrs:{src:n("3644"),id:"twitter_icon"},on:{click:t.openTwitter}})],1)},i=[],r={name:"Header",data:function(){return{title:"春日新歓2020情報Web"}},methods:{openTwitter:function(){var t="https://twitter.com/kasuga2020?s=20";window.open(t)}}},o=r,s=(n("8baf"),n("2877")),u=Object(s["a"])(o,a,i,!1,null,null,null);e["a"]=u.exports},"1a12":function(t,e,n){},"1bb5":function(t,e,n){},"23b4":function(t,e,n){t.exports=n.p+"img/家の線画イラスト.b640a3e2.png"},"27ee":function(t,e,n){"use strict";var a=n("3ee6"),i=n.n(a);i.a},3644:function(t,e,n){t.exports=n.p+"img/twitterのアイコン素材 その2.145d0e3e.png"},3971:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"item_button"}},[a("img",{attrs:{src:n("d7ce"),id:"icon"}}),a("div",{attrs:{id:"title_container"}},[a("h1",{staticClass:"title"},[t._v(t._s(t.title))]),a("br"),a("h2",{staticClass:"title"},[t._v("について")])])])},i=[],r={name:"ItemButton01",data:function(){return{title:"大学"}}},o=r,s=(n("8e51"),n("2877")),u=Object(s["a"])(o,a,i,!1,null,"20a2fb5f",null);e["a"]=u.exports},"3ee6":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"trans"}},[n("router-view",{attrs:{study_list:this.studyList,life_list:this.lifeList,senior_list:this.seniorList}})],1),n("Footer",{attrs:{id:"footer"}})],1)},r=[],o=(n("ac1f"),n("5319"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"footer_comp"}},[a("img",{attrs:{src:n("bbb4"),id:"tsukuba"},on:{click:function(e){return t.openTsukubaUniv()}}})])}),s=[],u={name:"Footer",methods:{openTsukubaUniv:function(){window.open("http://www.tsukuba.ac.jp/")}}},c=u,l=(n("760c"),n("2877")),d=Object(l["a"])(c,o,s,!1,null,null,null),f=d.exports,p={name:"App",components:{Footer:f},data:function(){return{studyList:[],lifeList:[],seniorList:[]}},created:function(){this.getPost()},methods:{getPost:function(){var t=this;this.axios.get("https://kzkymur.com/api/topic/").then((function(e){for(var n=0;n<e.data.topic.length;n++){if(e.data.topic[n].isYouTube=!1,""==e.data.topic[n].youtube_link)e.data.topic[n].isYouTube=!1;else{e.data.topic[n].isYouTube=!0;var a=e.data.topic[n].youtube_link.replace("youtu.be","www.youtube.com/embed");a=a.replace("t=","start="),e.data.topic[n].youtube_link=a}"大学"==e.data.topic[n].category?t.studyList.push(e.data.topic[n]):"生活"==e.data.topic[n].category?t.lifeList.push(e.data.topic[n]):"先輩"==e.data.topic[n].category&&t.seniorList.push(e.data.topic[n])}})).catch((function(t){window.alert(t)}))}}},m=p,h=(n("034f"),Object(l["a"])(m,i,r,!1,null,null,null)),_=h.exports,v=(n("45fc"),n("d3b7"),n("8c4f")),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("Header"),n("div",{attrs:{id:"container"}},[t._m(0),n("div",{attrs:{id:"about_site_container"}},[t._m(1),n("p",{staticClass:"about_content"},[t._v("この春日新歓2020情報Weはb春日新歓委員が行うライブ配信の内容をベースに新入生向けのお役立ち情報をまとめたサイトです。各トピックごとに該当する生配信のリンクを張り付けているのでそちらの方も参考にしていただけるとより分かりやすいと思います。")]),n("p",{staticClass:"about_content"},[t._v("また、"),n("a",{attrs:{id:"twitter"},on:{click:t.openTwitter}},[t._v("春日新歓2020公式Twitterアカウント")]),t._v("でも質問を受け付けておりますのでぜひご活用ください。")])]),n("div",{attrs:{id:"item_button_container"}},[n("router-link",{attrs:{to:"/study"}},[n("ItemButton01",{staticClass:"item_button"})],1),n("router-link",{attrs:{to:"/life"}},[n("ItemButton02",{staticClass:"item_button"})],1),n("router-link",{attrs:{to:"/senior"}},[n("ItemButton03",{staticClass:"item_button"})],1)],1),n("AddQuestion")],1)],1)},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"about_live_container"}},[n("div",{staticClass:"about_title_container"},[n("h1",{staticClass:"about_title1"},[t._v("ライブ配信")]),n("h2",{staticClass:"about_title2"},[t._v("について")])]),n("p",{staticClass:"about_content"},[t._v("コロナウイルスの感染拡大に伴って当初予定していたイベントなどが実施不可能な状況になってしまいました。そこで春日新歓委員会は春学期が始まるまでの間、YouTubeライブ配信を行うことを決定致しました。この配信では、あそこのスーパーが安い！といった実生活のことから先輩が大学で何をしているのかといったことまで様々なトピックを取り上げていこうと考えています。せっかく生配信の形をとっているので新入生からの質問もどんどん受け付けていこうと思いますのでぜひ参加してください！")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about_title_container"},[n("h1",{staticClass:"about_title1"},[t._v("このサイト")]),n("h2",{staticClass:"about_title2"},[t._v("について")])])}],y=n("0418"),w=n("3971"),k=n("d57a"),C=n("9a68"),x=n("6957"),E={name:"Home",components:{Header:y["a"],ItemButton01:w["a"],ItemButton02:k["a"],ItemButton03:C["a"],AddQuestion:x["a"]},created:function(){this.$router.isPass=!1,this.$router.pass=""},methods:{openTwitter:function(){var t="https://twitter.com/kasuga2020?s=20";window.open(t)}}},j=E,O=(n("cccb"),Object(l["a"])(j,b,g,!1,null,null,null)),T=O.exports;a["a"].use(v["a"]);var L=[{path:"/",name:"Home",component:T},{path:"/study",name:"Study",component:function(){return n.e("about").then(n.bind(null,"560f"))}},{path:"/life",name:"Life",component:function(){return n.e("about").then(n.bind(null,"0845"))}},{path:"/senior",name:"Senior",component:function(){return n.e("about").then(n.bind(null,"48b1"))}},{path:"/Authentication_for_committee_member",name:"Auth",component:function(){return n.e("about").then(n.bind(null,"2fef"))}},{path:"/Authentication_for_committee_member/form",name:"Form",component:function(){return n.e("about").then(n.bind(null,"c109"))},meta:{requiresAuth:!0}},{path:"/Authentication_for_committee_member/question",name:"Question",component:function(){return n.e("about").then(n.bind(null,"e254"))},meta:{requiresAuth:!0}}],P=new v["a"]({mode:"hash",base:"/Kasuga_Shinkan_2020_Info/",routes:L});P.isPass=!1,P.beforeEach((function(t,e,n){t.matched.some((function(t){return t.meta.requiresAuth}))&&0==P.isPass?n({path:"/Authentication_for_committee_member/",query:{redirect:t.fullPath}}):n()}));var q=P,A=n("62c3"),B=n.n(A),I=n("8549"),S=n.n(I);a["a"].config.productionTip=!1,a["a"].use(S.a,B.a),new a["a"]({router:q,render:function(t){return t(_)}}).$mount("#app")},"5ced":function(t,e,n){},6860:function(t,e,n){},6957:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"add_question"}},[n("div",{attrs:{id:"form_container"}},[n("form",[t._m(0),n("div",{staticClass:"item_container"},[n("h2",{staticClass:"form_title"},[t._v("項目")]),n("form",{attrs:{id:"category_container"}},t._l(t.categoryList,(function(e){return n("div",{key:e.key},[n("input",{staticClass:"check",attrs:{type:"radio",name:"category",id:e},domProps:{value:e}}),n("p",{staticClass:"category",on:{click:function(n){return t.checkControl(e)}}},[t._v(t._s(e))])])})),0),n("h2",{staticClass:"form_title"},[t._v("内容")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.question,expression:"question"}],staticClass:"input2",attrs:{placeholder:"例 : 履修登録はいつから始まりますか？"},domProps:{value:t.question},on:{input:function(e){e.target.composing||(t.question=e.target.value)}}})]),n("input",{staticClass:"send",attrs:{value:"送信する",type:"submit"},on:{click:function(e){return t.send()}}})])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form_title_container"},[n("h2",{staticClass:"add_question_title"},[t._v("質問フォーム")])])}],r=(n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),{name:"AddQuestion",data:function(){return{category:"",question:"",categoryList:["大学","生活","先輩"]}},methods:{checkControl:function(t){var e=document.getElementById(t);e.checked=!e.checked},setCategory:function(){var t=document.getElementById("category_container"),e=t.category,n=e.value;this.category=n},send:function(){var t=this;if(this.setCategory(),""==this.category)window.alert("項目を選択してください💦");else{if(""==this.question)return void window.alert("質問内容を入力してください💦");var e=new URLSearchParams;e.append("mode",0),e.append("category",this.category),e.append("main",this.question),this.axios.post("https://kzkymur.com/api/manage_question/",e).then((function(){window.alert("正しく投稿できました！🎉"),t.category="",t.question=""})).catch((function(t){window.alert(t)}))}}}}),o=r,s=(n("27ee"),n("2877")),u=Object(s["a"])(o,a,i,!1,null,"746d8134",null);e["a"]=u.exports},"760c":function(t,e,n){"use strict";var a=n("c3f5"),i=n.n(a);i.a},"7d2e":function(t,e,n){"use strict";var a=n("1a12"),i=n.n(a);i.a},"85ec":function(t,e,n){},"8baf":function(t,e,n){"use strict";var a=n("6860"),i=n.n(a);i.a},"8e51":function(t,e,n){"use strict";var a=n("93c3"),i=n.n(a);i.a},"8e9f":function(t,e,n){"use strict";var a=n("1bb5"),i=n.n(a);i.a},"93c3":function(t,e,n){},"9a68":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"item_button"}},[a("img",{attrs:{src:n("ec5e"),id:"icon"}}),a("div",{attrs:{id:"title_container"}},[a("h1",{staticClass:"title"},[t._v(t._s(t.title))]),a("br"),a("h2",{staticClass:"title"},[t._v("について")])])])},i=[],r={name:"ItemButton03",data:function(){return{title:"先輩"}}},o=r,s=(n("8e9f"),n("2877")),u=Object(s["a"])(o,a,i,!1,null,"25a58236",null);e["a"]=u.exports},bbb4:function(t,e,n){t.exports=n.p+"img/UTLogo_150.c8ffa6d0.png"},c3f5:function(t,e,n){},cccb:function(t,e,n){"use strict";var a=n("5ced"),i=n.n(a);i.a},d57a:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"item_button"}},[a("img",{attrs:{src:n("23b4"),id:"icon"}}),a("div",{attrs:{id:"title_container"}},[a("h1",{staticClass:"title"},[t._v(t._s(t.title))]),a("br"),a("h2",{staticClass:"title"},[t._v("について")])])])},i=[],r={name:"ItemButton02",data:function(){return{title:"生活"}}},o=r,s=(n("7d2e"),n("2877")),u=Object(s["a"])(o,a,i,!1,null,"729426aa",null);e["a"]=u.exports},d7ce:function(t,e,n){t.exports=n.p+"img/えんぴつ付きのノートアイコン.5086ece5.png"},ec5e:function(t,e,n){t.exports=n.p+"img/人物の無料素材.7aa36ffc.png"},edbf:function(t,e,n){t.exports=n.p+"img/logo_klismust_white.76a18073.png"}});
//# sourceMappingURL=app.a512dca0.js.map