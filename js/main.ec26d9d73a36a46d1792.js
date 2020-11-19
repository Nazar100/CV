/*! For license information please see main.ec26d9d73a36a46d1792.js.LICENSE.txt */
(self.webpackChunkwebpack5_starter_kit=self.webpackChunkwebpack5_starter_kit||[]).push([[179],{5142:(t,e,n)=>{"use strict";var r=n(3379),o=n.n(r),i=n(2861),s={insert:"head",singleton:!1};o()(i.Z,s);i.Z.locals;var a=n(9022),u={insert:"head",singleton:!1};o()(a.Z,u);a.Z.locals;var c=n(3614),l=new(n.n(c)())("#typed",{smartBackspace:!0,typeSpeed:40,stringsElement:"#typed-strings"});console.log(l);n(9554),n(4747),n(2564);var f=document.querySelector(".main-container"),p=f.querySelectorAll("p"),h=document.querySelector("#timer-1"),d=f.querySelectorAll("img"),v={threshold:.5},y=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&t.target.classList.add("active")}))}),v);p.forEach((function(t){y.observe(t)})),y.observe(h);var g=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&setTimeout((function(){t.target.classList.add("active")}),2e3)}))}),v);d.forEach((function(t){g.observe(t)}));var m=document.querySelector("header"),b=document.querySelector(".btn-video");setTimeout((function(){m.classList.add("active")}),3500),setTimeout((function(){b.classList.add("active")}),3500);var S=document.querySelector(".backdrop"),k=document.querySelector(".close-icon"),w=document.querySelector(".backdrop-n"),C=document.querySelector(".close-icon-n");function x(){S.classList.add("is-hidden")}function L(t){"backdrop"===t.target.classList.value&&S.classList.add("is-hidden")}function T(t){var e=t.target;"backdrop-n"===e.classList.value&&(console.log(e.classList.value),w.classList.add("is-hidden"))}function E(){w.classList.add("is-hidden")}setTimeout((function(){S.classList.remove("is-hidden"),window.addEventListener("click",L),k.addEventListener("click",x)}),2e4),setTimeout((function(){w.classList.remove("is-hidden"),window.addEventListener("click",T),C.addEventListener("click",E)}),5e4);n(3843),n(3710),n(9070),n(3112);new(function(){function t(t){var e,n,r,o=void 0===t?{}:t,i=o.selector,s=o.targetDate;e=this,n="refs",r={days:document.querySelector("span[data-value=days]"),hours:document.querySelector("span[data-value=hours]"),mins:document.querySelector("span[data-value=mins]"),secs:document.querySelector("span[data-value=secs]")},n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,this.selector=i,this.targetDate=s}var e=t.prototype;return e.start=function(){var t=this,e=this.targetDate;setInterval((function(){var n=Date.now()-e;t.updateClock(n)}),1e3)},e.updateClock=function(t){var e=this.pad(Math.floor(t/864e5)),n=this.pad(Math.floor(t%864e5/36e5)),r=this.pad(Math.floor(t%36e5/6e4)),o=this.pad(Math.floor(t%6e4/1e3));this.showOnScreen(e,n,r,o)},e.showOnScreen=function(t,e,n,r){this.refs.days.textContent=t-1,this.refs.hours.textContent=e,this.refs.mins.textContent=n,this.refs.secs.textContent=r},e.pad=function(t){return String(t).padStart(2,"0")},t}())({selector:"#timer-1",targetDate:new Date("Feb 17, 2020")}).start();n(3273),n(183),n(4049)},4049:()=>{var t=document.querySelector("#menu-navigation"),e=document.querySelector(".navigation");t.addEventListener("click",(function(){e.classList.toggle("active")}))},3273:()=>{var t=document.querySelector(".scroll-up"),e=document.querySelector(".scroll-up__circle"),n=e.getTotalLength();e.style.strokeDasharray=n+" "+n,e.style.transition="stroke-dashoffset 20ms";var r=function(){return window.pageYOffset||document.documentElement.scrollTop};window.addEventListener("scroll",(function(){var o,i;o=document.documentElement.scrollHeight-window.innerHeight,i=n-r()*n/o,e.style.strokeDashoffset=i,r()>100?t.classList.add("scroll-up--active"):t.classList.remove("scroll-up--active")})),t.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}))},183:()=>{var t=document.querySelector("#form-search"),e=document.querySelector(".search-block");t.addEventListener("click",(function(){e.classList.toggle("active")})),window.addEventListener("click",(function(t){var n=t.target;"INPUT"!==n.nodeName&&"UL"!==n.nodeName&&"LI"!==n.nodeName&&"IMG"!==n.nodeName&&e.classList.remove("active")}))},3099:t=>{t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},9670:(t,e,n)=>{var r=n(111);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},8533:(t,e,n)=>{"use strict";var r=n(2092).forEach,o=n(9341),i=n(9207),s=o("forEach"),a=i("forEach");t.exports=s&&a?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},1318:(t,e,n)=>{var r=n(5656),o=n(7466),i=n(1400),s=function(t){return function(e,n,s){var a,u=r(e),c=o(u.length),l=i(s,c);if(t&&n!=n){for(;c>l;)if((a=u[l++])!=a)return!0}else for(;c>l;l++)if((t||l in u)&&u[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},2092:(t,e,n)=>{var r=n(9974),o=n(8361),i=n(7908),s=n(7466),a=n(5417),u=[].push,c=function(t){var e=1==t,n=2==t,c=3==t,l=4==t,f=6==t,p=5==t||f;return function(h,d,v,y){for(var g,m,b=i(h),S=o(b),k=r(d,v,3),w=s(S.length),C=0,x=y||a,L=e?x(h,w):n?x(h,0):void 0;w>C;C++)if((p||C in S)&&(m=k(g=S[C],C,b),t))if(e)L[C]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return C;case 2:u.call(L,g)}else if(l)return!1;return f?-1:c||l?l:L}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)}},9341:(t,e,n)=>{"use strict";var r=n(7293);t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},9207:(t,e,n)=>{var r=n(9781),o=n(7293),i=n(6656),s=Object.defineProperty,a={},u=function(t){throw t};t.exports=function(t,e){if(i(a,t))return a[t];e||(e={});var n=[][t],c=!!i(e,"ACCESSORS")&&e.ACCESSORS,l=i(e,0)?e[0]:u,f=i(e,1)?e[1]:void 0;return a[t]=!!n&&!o((function(){if(c&&!r)return!0;var t={length:-1};c?s(t,1,{enumerable:!0,get:u}):t[1]=1,n.call(t,l,f)}))}},5417:(t,e,n)=>{var r=n(111),o=n(3157),i=n(5112)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},4326:t=>{var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},9920:(t,e,n)=>{var r=n(6656),o=n(3887),i=n(1236),s=n(3070);t.exports=function(t,e){for(var n=o(e),a=s.f,u=i.f,c=0;c<n.length;c++){var l=n[c];r(t,l)||a(t,l,u(e,l))}}},8880:(t,e,n)=>{var r=n(9781),o=n(3070),i=n(9114);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},9114:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},9781:(t,e,n)=>{var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,e,n)=>{var r=n(7854),o=n(111),i=r.document,s=o(i)&&o(i.createElement);t.exports=function(t){return s?i.createElement(t):{}}},8324:t=>{t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8113:(t,e,n)=>{var r=n(5005);t.exports=r("navigator","userAgent")||""},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(t,e,n)=>{var r=n(7854),o=n(1236).f,i=n(8880),s=n(1320),a=n(3505),u=n(9920),c=n(4705);t.exports=function(t,e){var n,l,f,p,h,d=t.target,v=t.global,y=t.stat;if(n=v?r:y?r[d]||a(d,{}):(r[d]||{}).prototype)for(l in e){if(p=e[l],f=t.noTargetGet?(h=o(n,l))&&h.value:n[l],!c(v?l:d+(y?".":"#")+l,t.forced)&&void 0!==f){if(typeof p==typeof f)continue;u(p,f)}(t.sham||f&&f.sham)&&i(p,"sham",!0),s(n,l,p,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},9974:(t,e,n)=>{var r=n(3099);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},5005:(t,e,n)=>{var r=n(857),o=n(7854),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},7854:(t,e,n)=>{var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},6656:t=>{var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},3501:t=>{t.exports={}},4664:(t,e,n)=>{var r=n(9781),o=n(7293),i=n(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:(t,e,n)=>{var r=n(7293),o=n(4326),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},2788:(t,e,n)=>{var r=n(5465),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},9909:(t,e,n)=>{var r,o,i,s=n(8536),a=n(7854),u=n(111),c=n(8880),l=n(6656),f=n(5465),p=n(6200),h=n(3501),d=a.WeakMap;if(s){var v=f.state||(f.state=new d),y=v.get,g=v.has,m=v.set;r=function(t,e){return e.facade=t,m.call(v,t,e),e},o=function(t){return y.call(v,t)||{}},i=function(t){return g.call(v,t)}}else{var b=p("state");h[b]=!0,r=function(t,e){return e.facade=t,c(t,b,e),e},o=function(t){return l(t,b)?t[b]:{}},i=function(t){return l(t,b)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!u(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},3157:(t,e,n)=>{var r=n(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},4705:(t,e,n)=>{var r=n(7293),o=/#|\.prototype\./,i=function(t,e){var n=a[s(t)];return n==c||n!=u&&("function"==typeof e?r(e):!!e)},s=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},u=i.NATIVE="N",c=i.POLYFILL="P";t.exports=i},111:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:t=>{t.exports=!1},133:(t,e,n)=>{var r=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},8536:(t,e,n)=>{var r=n(7854),o=n(2788),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},3070:(t,e,n)=>{var r=n(9781),o=n(4664),i=n(9670),s=n(7593),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(i(t),e=s(e,!0),i(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:(t,e,n)=>{var r=n(9781),o=n(5296),i=n(9114),s=n(5656),a=n(7593),u=n(6656),c=n(4664),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=s(t),e=a(e,!0),c)try{return l(t,e)}catch(t){}if(u(t,e))return i(!o.f.call(t,e),t[e])}},8006:(t,e,n)=>{var r=n(6324),o=n(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:(t,e)=>{e.f=Object.getOwnPropertySymbols},6324:(t,e,n)=>{var r=n(6656),o=n(5656),i=n(1318).indexOf,s=n(3501);t.exports=function(t,e){var n,a=o(t),u=0,c=[];for(n in a)!r(s,n)&&r(a,n)&&c.push(n);for(;e.length>u;)r(a,n=e[u++])&&(~i(c,n)||c.push(n));return c}},5296:(t,e)=>{"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);e.f=o?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},3887:(t,e,n)=>{var r=n(5005),o=n(8006),i=n(5181),s=n(9670);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(s(t)),n=i.f;return n?e.concat(n(t)):e}},857:(t,e,n)=>{var r=n(7854);t.exports=r},1320:(t,e,n)=>{var r=n(7854),o=n(8880),i=n(6656),s=n(3505),a=n(2788),u=n(9909),c=u.get,l=u.enforce,f=String(String).split("String");(t.exports=function(t,e,n,a){var u,c=!!a&&!!a.unsafe,p=!!a&&!!a.enumerable,h=!!a&&!!a.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),(u=l(n)).source||(u.source=f.join("string"==typeof e?e:""))),t!==r?(c?!h&&t[e]&&(p=!0):delete t[e],p?t[e]=n:o(t,e,n)):p?t[e]=n:s(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&c(this).source||a(this)}))},4488:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:(t,e,n)=>{var r=n(7854),o=n(8880);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},6200:(t,e,n)=>{var r=n(2309),o=n(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:(t,e,n)=>{var r=n(7854),o=n(3505),i="__core-js_shared__",s=r[i]||o(i,{});t.exports=s},2309:(t,e,n)=>{var r=n(1913),o=n(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.7.0",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},4986:(t,e,n)=>{var r=n(8113);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)},6650:(t,e,n)=>{var r=n(7466),o=n(8415),i=n(4488),s=Math.ceil,a=function(t){return function(e,n,a){var u,c,l=String(i(e)),f=l.length,p=void 0===a?" ":String(a),h=r(n);return h<=f||""==p?l:(u=h-f,(c=o.call(p,s(u/p.length))).length>u&&(c=c.slice(0,u)),t?l+c:c+l)}};t.exports={start:a(!1),end:a(!0)}},8415:(t,e,n)=>{"use strict";var r=n(9958),o=n(4488);t.exports="".repeat||function(t){var e=String(o(this)),n="",i=r(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(n+=e);return n}},1400:(t,e,n)=>{var r=n(9958),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},5656:(t,e,n)=>{var r=n(8361),o=n(4488);t.exports=function(t){return r(o(t))}},9958:t=>{var e=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:e)(t)}},7466:(t,e,n)=>{var r=n(9958),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:(t,e,n)=>{var r=n(4488);t.exports=function(t){return Object(r(t))}},7593:(t,e,n)=>{var r=n(111);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},9711:t=>{var e=0,n=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+n).toString(36)}},3307:(t,e,n)=>{var r=n(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:(t,e,n)=>{var r=n(7854),o=n(2309),i=n(6656),s=n(9711),a=n(133),u=n(3307),c=o("wks"),l=r.Symbol,f=u?l:l&&l.withoutSetter||s;t.exports=function(t){return i(c,t)||(a&&i(l,t)?c[t]=l[t]:c[t]=f("Symbol."+t)),c[t]}},9554:(t,e,n)=>{"use strict";var r=n(2109),o=n(8533);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},3843:(t,e,n)=>{n(2109)({target:"Date",stat:!0},{now:function(){return(new Date).getTime()}})},3710:(t,e,n)=>{var r=n(1320),o=Date.prototype,i="Invalid Date",s="toString",a=o.toString,u=o.getTime;new Date(NaN)+""!=i&&r(o,s,(function(){var t=u.call(this);return t==t?a.call(this):i}))},9070:(t,e,n)=>{var r=n(2109),o=n(9781);r({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperty:n(3070).f})},3112:(t,e,n)=>{"use strict";var r=n(2109),o=n(6650).start;r({target:"String",proto:!0,forced:n(4986)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},4747:(t,e,n)=>{var r=n(7854),o=n(8324),i=n(8533),s=n(8880);for(var a in o){var u=r[a],c=u&&u.prototype;if(c&&c.forEach!==i)try{s(c,"forEach",i)}catch(t){c.forEach=i}}},2564:(t,e,n)=>{var r=n(2109),o=n(7854),i=n(8113),s=[].slice,a=function(t){return function(e,n){var r=arguments.length>2,o=r?s.call(arguments,2):void 0;return t(r?function(){("function"==typeof e?e:Function(e)).apply(this,o)}:e,n)}};r({global:!0,bind:!0,forced:/MSIE .\./.test(i)},{setTimeout:a(o.setTimeout),setInterval:a(o.setInterval)})},2861:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var r=n(4015),o=n.n(r),i=n(3645),s=n.n(i)()(o());s.push([t.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const a=s},9022:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var r=n(4015),o=n.n(r),i=n(3645),s=n.n(i)()(o());s.push([t.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const a=s},3645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<t.length;a++){var u=[].concat(t[a]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),e.push(u))}},e}},4015:t=>{"use strict";function e(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var s,a=t[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}t.exports=function(t){var n=e(t,4),r=n[1],o=n[3];if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),a="/*# ".concat(s," */"),u=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(t," */")}));return[r].concat(u).concat([a]).join("\n")}return[r].join("\n")}},3379:(t,e,n)=>{"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),s=[];function a(t){for(var e=-1,n=0;n<s.length;n++)if(s[n].identifier===t){e=n;break}return e}function u(t,e){for(var n={},r=[],o=0;o<t.length;o++){var i=t[o],u=e.base?i[0]+e.base:i[0],c=n[u]||0,l="".concat(u," ").concat(c);n[u]=c+1;var f=a(l),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(s[f].references++,s[f].updater(p)):s.push({identifier:l,updater:y(p,e),references:1}),r.push(l)}return r}function c(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var s=i(t.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var l,f=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function p(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=f(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function h(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var d=null,v=0;function y(t,e){var n,r,o;if(e.singleton){var i=v++;n=d||(d=c(e)),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=c(e),r=h.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=u(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=a(n[r]);s[o].references--}for(var i=u(t,e),c=0;c<n.length;c++){var l=a(n[c]);0===s[l].references&&(s[l].updater(),s.splice(l,1))}n=i}}}},3614:function(t){var e;e=function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}return n.m=t,n.c=e,n.p="",n(0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(1),i=n(3),s=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),o.initializer.load(this,n,e),this.begin()}return r(t,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var t=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout((function(){t.currentElContent&&0!==t.currentElContent.length?t.backspace(t.currentElContent,t.currentElContent.length):t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)}),this.startDelay)}},{key:"typewrite",value:function(t,e){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var r=this.humanizer(this.typeSpeed),o=1;!0!==this.pause.status?this.timeout=setTimeout((function(){e=i.htmlParser.typeHtmlChars(t,e,n);var r=0,s=t.substr(e);if("^"===s.charAt(0)&&/^\^\d+/.test(s)){var a=1;a+=(s=/\d+/.exec(s)[0]).length,r=parseInt(s),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),t=t.substring(0,e)+t.substring(e+a),n.toggleBlinking(!0)}if("`"===s.charAt(0)){for(;"`"!==t.substr(e+o).charAt(0)&&(o++,!(e+o>t.length)););var u=t.substring(0,e),c=t.substring(u.length+1,e+o),l=t.substring(e+o+1);t=u+c+l,o--}n.timeout=setTimeout((function(){n.toggleBlinking(!1),e>=t.length?n.doneTyping(t,e):n.keepTyping(t,e,o),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))}),r)}),r):this.setPauseStatus(t,e,!0)}},{key:"keepTyping",value:function(t,e,n){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),e+=n;var r=t.substr(0,e);this.replaceText(r),this.typewrite(t,e)}},{key:"doneTyping",value:function(t,e){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout((function(){n.backspace(t,e)}),this.backDelay))}},{key:"backspace",value:function(t,e){var n=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var r=this.humanizer(this.backSpeed);this.timeout=setTimeout((function(){e=i.htmlParser.backSpaceHtmlChars(t,e,n);var r=t.substr(0,e);if(n.replaceText(r),n.smartBackspace){var o=n.strings[n.arrayPos+1];o&&r===o.substr(0,e)?n.stopNum=e:n.stopNum=0}e>n.stopNum?(e--,n.backspace(t,e)):e<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],e))}),r)}else this.setPauseStatus(t,e,!0)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(t,e,n){this.pause.typewrite=n,this.pause.curString=t,this.pause.curStrPos=e}},{key:"toggleBlinking",value:function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function(t){return Math.round(Math.random()*t/2)+t}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort((function(){return Math.random()-.5})))}},{key:"initFadeOut",value:function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout((function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)}),this.fadeOutDelay)}},{key:"replaceText",value:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t}},{key:"bindFocusEvents",value:function(){var t=this;this.isInput&&(this.el.addEventListener("focus",(function(e){t.stop()})),this.el.addEventListener("blur",(function(e){t.el.value&&0!==t.el.value.length||t.start()})))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),t}();e.default=s,t.exports=e.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=n(2),a=(r=s)&&r.__esModule?r:{default:r},u=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return i(t,[{key:"load",value:function(t,e,n){if(t.el="string"==typeof n?document.querySelector(n):n,t.options=o({},a.default,e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map((function(t){return t.trim()})),"string"==typeof t.options.stringsElement?t.stringsElement=document.querySelector(t.options.stringsElement):t.stringsElement=t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.display="none";var r=Array.prototype.slice.apply(t.stringsElement.children),i=r.length;if(i)for(var s=0;s<i;s+=1){var u=r[s];t.strings.push(u.innerHTML.trim())}}for(var s in t.strPos=0,t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.sequence=[],t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.strings)t.sequence[s]=s;t.currentElContent=this.getCurrentElContent(t),t.autoInsertCss=t.options.autoInsertCss,this.appendAnimationCss(t)}},{key:"getCurrentElContent",value:function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent}},{key:"appendAnimationCss",value:function(t){var e="data-typed-js-css";if(t.autoInsertCss&&(t.showCursor||t.fadeOut)&&!document.querySelector("["+e+"]")){var n=document.createElement("style");n.type="text/css",n.setAttribute(e,!0);var r="";t.showCursor&&(r+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),t.fadeOut&&(r+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==n.length&&(n.innerHTML=r,document.body.appendChild(n))}}}]),t}();e.default=u;var c=new u;e.initializer=c},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}};e.default=n,t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),r=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return n(t,[{key:"typeHtmlChars",value:function(t,e,n){if("html"!==n.contentType)return e;var r=t.substr(e).charAt(0);if("<"===r||"&"===r){var o="";for(o="<"===r?">":";";t.substr(e+1).charAt(0)!==o&&!(1+ ++e>t.length););e++}return e}},{key:"backSpaceHtmlChars",value:function(t,e,n){if("html"!==n.contentType)return e;var r=t.substr(e).charAt(0);if(">"===r||";"===r){var o="";for(o=">"===r?"<":"&";t.substr(e-1).charAt(0)!==o&&!(--e<0););e--}return e}}]),t}();e.default=r;var o=new r;e.htmlParser=o}])},t.exports=e()}},0,[[5142,666]]]);
//# sourceMappingURL=main.ec26d9d73a36a46d1792.js.map