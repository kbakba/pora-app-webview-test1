parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"D9Nj":[function(require,module,exports) {

},{"./static/start-page-background.webp":[["start-page-background.67fb260d.webp","YMz0"],"YMz0"]}],"B6dB":[function(require,module,exports) {
"use strict";var e;Object.defineProperty(exports,"__esModule",{value:!0}),require("./styles.css");var t=function(e){var t;null===(t=document.getElementById("js-result"))||void 0===t||(t.innerHTML=e)};null===(e=document.querySelector("button"))||void 0===e||e.addEventListener("click",function(e){var o,i,s,n,r,d=(null===(i=null===(o=e.target)||void 0===o?void 0:o.dataset)||void 0===i?void 0:i.attr)||"",l=JSON.parse(d);(null===(r=null===(n=null===(s=window.webkit)||void 0===s?void 0:s.messageHandlers)||void 0===n?void 0:n.observer)||void 0===r?void 0:r.postMessage)&&window.webkit.messageHandlers.observer.postMessage(l),t("click on button with data-attr "+JSON.stringify(l))});
},{"./styles.css":"D9Nj"}]},{},["B6dB"], null)
//# sourceMappingURL=/pora-app-webview-test1/dist/src.2eff595d.js.map