(()=>{"use strict";var e={150:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"body{\r\n    background-color: aqua;\r\n}",""]);const s=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(o[i]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},379:(e,t,n)=>{var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function i(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],l=t.base?a[0]+t.base:a[0],c=n[l]||0,u="".concat(l," ").concat(c);n[l]=c+1;var d=i(u),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(s[d].references++,s[d].updater(f)):s.push({identifier:u,updater:v(f,t),references:1}),r.push(u)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var s=n.nc;s&&(r.nonce=s)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var c,u=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var s=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(s,i[t]):e.appendChild(s)}}function f(e,t,n){var r=n.css,o=n.media,s=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,m=0;function v(e,t){var n,r,o;if(t.singleton){var s=m++;n=h||(h=l(t)),r=d.bind(null,n,s,!1),o=d.bind(null,n,s,!0)}else n=l(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=i(n[r]);s[o].references--}for(var l=a(e,t),c=0;c<n.length;c++){var u=i(n[c]);0===s[u].references&&(s[u].updater(),s.splice(u,1))}n=l}}}}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(150);t()(r.Z,{insert:"head",singleton:!1}),r.Z.locals,console.log(Math.max(15.678,123.965,90.2345)),console.log(((e,t,n,r)=>{for(let e=1;e<=9;e++)e%2!=1||(r+=e);return r})(0,0,0,0)),console.log(((e,t)=>{let n=0;n=8;for(let e=0;e<3;e++)n*=8;return n})()),console.log(((e,t)=>{const n=[],r=[],o=[];for(let o=0;o<e.length;o++)t.includes(e[o])?n.push(e[o]):r.push(e[o]);for(let e=0;e<t.length;e++)o[e]=[r[e],n[e]];return o})(["Олександр","Ігор","Олена","Іра","Олексій","Світлана"],["Олена","Іра","Світлана"])),console.log(((...e)=>{const t=[6,2,55,11,78,2,55,77,57,87,23,2,56,3,2].filter((e=>Number.isInteger(e)));return t.reduce(((e,t)=>e+t))/t.length})()),console.log((e=>{const t="test".toLowerCase().split("");let n={};for(let e of t)n.hasOwnProperty(e)?n[e]+=1:n[e]=1;return n})()),console.log(function(){return parseFloat(this.tax*this.middleSalary).toFixed(2)}.call({tax:.25,middleSalary:1586,vacancies:3921})),new class{constructor(e,t,n){this.university=e,this.course=t,this.fullName=n,this.marks=[5,4,4,5],this.dismissFlag=!1}getInfo(){console.log(`Студент ${this.course}го курсу ${this.university}, ${this.fullName}`)}get getMarks(){return this.dismissFlag?null:this.marks}set setMarks(e){this.dismissFlag||this.marks.push(e)}getAverageMark(){return this.marks.reduce(((e,t)=>e+t))/this.marks.length}dismiss(){this.dismissFlag=!0}recover(){this.dismissFlag=!1}}("NURE",3,"Dmytro Malashchuk").getInfo(),async function(e){let t="";for(let e=0;e<=4;e++){const e=()=>new Promise((e=>{setTimeout((()=>e(String.fromCharCode(String(Date.now()).slice(-5)))),50)}));t+=await e()}return t}().then((e=>console.log(e)));const o=function*(){let e=0;for(;;)yield++e}();console.log(o.next().value),console.log(o.next().value),console.log(o.next().value)})()})();