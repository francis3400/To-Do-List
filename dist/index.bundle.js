"use strict";(self.webpackChunkwebpack_setup=self.webpackChunkwebpack_setup||[]).push([[826],{426:(n,r,e)=>{e.d(r,{Z:()=>c});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([n.id,"body {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: 25px;\r\n  box-sizing: border-box;\r\n  background: #f3f2f2;\r\n}\r\n\r\n#container {\r\n  background-color: #fff;\r\n  border-radius: 5px;\r\n  margin: 10% 10%;\r\n  box-shadow: 3px 3px 3px 3px gray;\r\n}\r\n\r\nhr {\r\n  border: 0.1px solid #f3f2f2;\r\n  margin: 0;\r\n}\r\n\r\nh1 {\r\n  font-size: 22px;\r\n  font-weight: normal;\r\n}\r\n\r\ninput {\r\n  border: 0;\r\n  outline: 0;\r\n  padding: 0.3rem;\r\n}\r\n\r\ninput:focus {\r\n  outline: none !important;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.todo-title,\r\n.todo-edit,\r\n.todo-check {\r\n  padding: 1rem 1.7rem;\r\n}\r\n\r\n.checkbox {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n#to-do-check {\r\n  margin-right: 2rem;\r\n}\r\n\r\ni {\r\n  cursor: pointer;\r\n  color: gray;\r\n}\r\n\r\n.clear-all {\r\n  padding: 1rem 0;\r\n  background: #f3f2f2;\r\n  height: auto;\r\n  text-align: center;\r\n}\r\n\r\n.clear-all h3 {\r\n  cursor: pointer;\r\n  font-weight: normal;\r\n  color: gray;\r\n  margin: 0;\r\n}\r\n\r\n.clear-all:hover {\r\n  text-decoration: underline;\r\n  color: #000;\r\n}\r\n\r\n::placeholder {\r\n  font-style: italic;\r\n  font-size: 20px;\r\n}\r\n",""]);const c=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);t&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),r.push(d))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=t.base?s[0]+t.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=e(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)r[u].references++,r[u].updater(f);else{var h=o(f,t);t.byIndex=c,r.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=e(a[i]);r[c].references--}for(var s=t(n,o),l=0;l<a.length;l++){var d=e(a[l]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}a=s}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},987:(n,r,e)=>{var t=e(379),o=e.n(t),a=e(795),i=e.n(a),c=e(569),s=e.n(c),l=e(565),d=e.n(l),p=e(216),u=e.n(p),f=e(589),h=e.n(f),m=e(426),v={};v.styleTagTransform=h(),v.setAttributes=d(),v.insert=s().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=u(),o()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals;const g=document.querySelector(".todo-body");let b=" ";[{description:"Will Vist the Gym",completed:!0,i:0},{description:"Will Be Reading",completed:!0,i:1},{description:"Wash",completed:!0,i:2},{description:"Go to club",completed:!0,i:3}].forEach((n=>{b+=`\n    <div class="todo-check flex">\n    <div class="checkbox">\n      <input\n        type="checkbox"\n        id="to-do-check"\n        name="To-Do"\n        value="Add"\n      />\n      <label for="todo">${n.description}</label><br />\n    </div>\n    <i class="fa-solid fa-ellipsis-vertical"></i>\n  </div>\n  <hr />`})),g.innerHTML=b}},n=>{n(n.s=987)}]);