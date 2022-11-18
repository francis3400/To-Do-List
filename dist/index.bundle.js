"use strict";(self.webpackChunkwebpack_setup=self.webpackChunkwebpack_setup||[]).push([[826],{426:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),a=n(645),c=n.n(a)()(o());c.push([e.id,"body {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: 25px;\r\n  box-sizing: border-box;\r\n  background: #f3f2f2;\r\n}\r\n\r\n#container {\r\n  background-color: #fff;\r\n  border-radius: 5px;\r\n  margin: 10% 10%;\r\n  box-shadow: 3px 3px 3px 3px gray;\r\n}\r\n\r\nhr {\r\n  border: 0.1px solid #f3f2f2;\r\n  margin: 0;\r\n}\r\n\r\nh1 {\r\n  font-size: 22px;\r\n  font-weight: normal;\r\n}\r\n\r\ninput {\r\n  border: 0;\r\n  outline: 0;\r\n  padding: 0.3rem;\r\n}\r\n\r\ninput:focus {\r\n  outline: none !important;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.todo-title,\r\n.todo-edit,\r\n.todo-check {\r\n  padding: 1rem 1.7rem;\r\n}\r\n\r\n.checkbox {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.check-icons {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n}\r\n\r\n.check-icons .fa-trash {\r\n  margin-right: 0.5rem;\r\n}\r\n\r\n#to-do-check {\r\n  margin-right: 2rem;\r\n}\r\n\r\ni {\r\n  cursor: pointer;\r\n  color: gray;\r\n}\r\n\r\n.clear-all {\r\n  padding: 1rem 0;\r\n  background: #f3f2f2;\r\n  height: auto;\r\n  text-align: center;\r\n}\r\n\r\n.clear-all h3 {\r\n  cursor: pointer;\r\n  font-weight: normal;\r\n  color: gray;\r\n  margin: 0;\r\n}\r\n\r\n.clear-all:hover {\r\n  text-decoration: underline;\r\n  color: #000;\r\n}\r\n\r\n::placeholder {\r\n  font-style: italic;\r\n  font-size: 18px;\r\n}\r\n",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=o(f,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:h,references:1})}c.push(u)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},89:(e,t,n)=>{var r=n(379),o=n.n(r),a=n(795),c=n.n(a),i=n(569),s=n.n(i),d=n(565),l=n.n(d),u=n(216),p=n.n(u),f=n(589),h=n.n(f),m=n(426),v={};v.styleTagTransform=h(),v.setAttributes=l(),v.insert=s().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=p(),o()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals;const g=document.querySelector(".todo-body");let y=!1,x=null;class b{static getTodo=()=>{let e;return e=null==localStorage.getItem("todo")?[]:JSON.parse(localStorage.getItem("todo")),e};static addRemoveEvent=()=>{document.querySelectorAll(".trash").forEach(((e,t)=>{e.addEventListener("click",(e=>{e.preventDefault(),this.removeTodo(t)}))}))};static checkEvent=()=>{const e=b.getTodo();document.querySelectorAll(".to-do-check").forEach(((t,n)=>{const r=e.find((e=>n===e.index));t.addEventListener("change",(t=>{t.preventDefault(),r.completed?t.target.parentElement.style.textDecoration="none":t.target.parentElement.style.textDecoration="line-through",((e,t)=>{const n=e.find((e=>t===e.index));n.completed=!n.completed,localStorage.setItem("todo",JSON.stringify(e))})(e,n)}))}))};static removeTodo=e=>{const t=b.getTodo();t.splice(e,1),t.forEach((t=>{t.index>e&&(t.index-=1)})),localStorage.setItem("todo",JSON.stringify(t)),this.loadTodo(t)};static loadTodo=e=>{let t=" ";e.forEach(((e,n)=>{const r=e.completed?"completed":"";t+=`\n      <div class="todo-check flex">\n      <div class="checkbox ${r}">\n        <input\n          type="checkbox" id="${n}" \n         class ="to-do-check"\n          name="To-Do"\n          value="Add" maxlength="10"/>\n        <label for="todo">${e.text}</label><br />\n      </div>\n      <div class= "check-icons">\n      <div class="trash">\n      <i class="fa-solid fa-trash" id="${n}"></i>\n      </div>\n      <i class="edit-btn vertical-menu fa-solid fa-ellipsis-vertical" id="${n}"></i>\n      </div>\n    </div>\n    <hr />`})),g.innerHTML=t,this.addRemoveEvent(),this.editEvent(),this.checkEvent()};static addTodo=()=>{const e=document.querySelector(".type-task").value;if(""!==e){const t=b.getTodo(),n={text:e,completed:!1,index:t.length},r={text:e,completed:!1,index:x};if(y){const e=t.find(((e,t)=>t===x));return Object.assign(e,r),localStorage.setItem("todo",JSON.stringify(t)),this.loadTodo(t),y=!1,x=null,void(document.querySelector(".type-task").value="")}t.push(n),localStorage.setItem("todo",JSON.stringify(t)),this.loadTodo(t),document.querySelector(".type-task").value=""}};static editTodo=e=>{const t=b.getTodo().find(((t,n)=>n===e));document.querySelector(".type-task").value=t.text,y=!0,x=e};static editEvent=()=>{document.querySelectorAll(".edit-btn").forEach(((e,t)=>{e.addEventListener("click",(e=>{e.preventDefault(),this.editTodo(t)}))}))}}const k=document.querySelector(".enter-btn");document.querySelector(".clear").addEventListener("click",(()=>{const e=(e=>{const t=e.filter((e=>!0!==e.completed&&e));return t.forEach(((e,t)=>{e.index=t})),t})(b.getTodo());localStorage.setItem("todo",JSON.stringify(e)),b.loadTodo(e)})),window.addEventListener("DOMContentLoaded",(()=>{const e=b.getTodo();b.loadTodo(e)})),k.addEventListener("click",(()=>{b.addTodo()}))}},e=>{e(e.s=89)}]);