webpackJsonp([12],{PgoV:function(r,e){},lO7g:function(r,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t={data:function(){return{perMap:{admin:["Trianglifyz","Editorz","EditorNew","MavonEditor","VmMarkdown","VueEditor","Geopattern"],user:["User","User_Add","User_Upd","User_Del"],query:["User"]}}},methods:{switchPermission:function(r){this.$store.dispatch("updatePermissionList",this.perMap[r]),location.reload()},clearPermission:function(){localStorage.removeItem("permissionList"),location.reload()}}},o={render:function(){var r=this,e=r.$createElement,i=r._self._c||e;return i("div",[i("div",[r._v("\n    当前权限："),i("span",[r._v(r._s(r.$store.getters.permissionList))])]),r._v(" "),i("div",[i("span",[r._v("获取权限：")]),r._v(" "),i("span",{on:{click:function(e){return r.switchPermission("admin")}}},[r._v("admin")]),r._v(" "),i("span",{on:{click:function(e){return r.switchPermission("query")}}},[r._v("query")]),r._v(" "),i("span",{on:{click:function(e){return r.switchPermission("user")}}},[r._v("user")]),r._v(" "),i("p",{on:{click:function(e){return r.clearPermission()}}},[r._v("清理权限")])]),r._v(" "),i("ul",[i("li",{directives:[{name:"permission",rawName:"v-permission",value:["User"],expression:"['User']"}]},[i("router-link",{attrs:{to:"/user"}},[r._v("User权限")])],1),r._v(" "),i("li",{directives:[{name:"permission",rawName:"v-permission",value:["Trianglifyz"],expression:"['Trianglifyz']"}]},[i("router-link",{attrs:{to:"/trianglifyz"}},[r._v("Trianglifyz")])],1),r._v(" "),i("li",{directives:[{name:"permission",rawName:"v-permission",value:["Editorz"],expression:"['Editorz']"}]},[i("router-link",{attrs:{to:"/editorz"}},[r._v("editor")])],1),r._v(" "),i("li",{directives:[{name:"permission",rawName:"v-permission",value:["EditorNew"],expression:"['EditorNew']"}]},[i("router-link",{attrs:{to:"/editorNew"}},[r._v("editorNew")])],1),r._v(" "),i("li",{directives:[{name:"permission",rawName:"v-permission",value:["MavonEditor"],expression:"['MavonEditor']"}]},[i("router-link",{attrs:{to:"/mavonEditor"}},[r._v("mavonEditor")])],1),r._v(" "),i("li",{directives:[{name:"permission",rawName:"v-permission",value:["VmMarkdown"],expression:"['VmMarkdown']"}]},[i("router-link",{attrs:{to:"/vmMarkdown"}},[r._v("vmMarkdown")])],1),r._v(" "),i("li",{directives:[{name:"permission",rawName:"v-permission",value:["VueEditor"],expression:"['VueEditor']"}]},[i("router-link",{attrs:{to:"/vueEditor"}},[r._v("VueEditor")])],1),r._v(" "),i("li",{directives:[{name:"permission",rawName:"v-permission",value:["Geopattern"],expression:"['Geopattern']"}]},[i("router-link",{attrs:{to:"/geopattern"}},[r._v("Geopattern")])],1),r._v(" "),i("li",[i("router-link",{attrs:{to:"/commPage"}},[r._v("公共页面（不要权限）")])],1),r._v(" "),i("li",[i("router-link",{attrs:{to:"/lazyImg"}},[r._v("懒加载图片")])],1),r._v(" "),i("li",[i("router-link",{attrs:{to:"/codetest"}},[r._v("生成验证码")])],1),r._v(" "),i("li",[i("router-link",{attrs:{to:"/particles"}},[r._v("粒子背景")])],1),r._v(" "),i("li",[i("router-link",{attrs:{to:"/codeDiff"}},[r._v("对比文件")])],1),r._v(" "),i("li",[i("router-link",{attrs:{to:"/ribbonEffect"}},[r._v("背景丝带")])],1),r._v(" "),i("li",[i("router-link",{attrs:{to:"/shardGlass"}},[r._v("玻璃破碎")])],1),r._v(" "),i("li",[i("router-link",{attrs:{to:"/todoList"}},[r._v("工作簿")])],1),r._v(" "),i("li",[i("router-link",{attrs:{to:"/notification"}},[r._v("通知消息")])],1),r._v(" "),i("li",[i("router-link",{attrs:{to:"/color"}},[r._v("样式表达")])],1)])])},staticRenderFns:[]};var s=i("VU/8")(t,o,!1,function(r){i("PgoV")},"data-v-703ad1f1",null);e.default=s.exports}});