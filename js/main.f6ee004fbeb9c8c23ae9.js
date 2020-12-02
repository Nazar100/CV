/*! For license information please see main.f6ee004fbeb9c8c23ae9.js.LICENSE.txt */
(self.webpackChunkwebpack5_starter_kit=self.webpackChunkwebpack5_starter_kit||[]).push([[179],{2e3:(t,e,r)=>{"use strict";var n=r(3379),o=r.n(n),i=r(2861),s={insert:"head",singleton:!1};o()(i.Z,s);i.Z.locals;var a=r(9022),u={insert:"head",singleton:!1};o()(a.Z,u);a.Z.locals;var c=r(3614),l=(new(r.n(c)())("#typed",{smartBackspace:!0,typeSpeed:40,stringsElement:"#typed-strings"}),r(9554),r(4747),r(2564),document.querySelector(".main-container")),f=l.querySelectorAll("p"),p=document.querySelector("#timer-1"),d=l.querySelectorAll("img"),h={threshold:.1},v=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&t.target.classList.add("active")}))}),h);f.forEach((function(t){v.observe(t)})),v.observe(p);var y=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&setTimeout((function(){t.target.classList.add("active")}),2e3)}))}),h);d.forEach((function(t){y.observe(t)}));var g=document.querySelector("header");setTimeout((function(){g.classList.add("active")}),3500);var m=document.querySelector(".backdrop"),b=document.querySelector(".close-icon"),S=document.querySelector(".backdrop-n"),k=document.querySelector(".close-icon-n");function w(){m.classList.add("is-hidden")}function x(t){"backdrop"===t.target.classList.value&&m.classList.add("is-hidden")}function C(t){"backdrop-n"===t.target.classList.value&&S.classList.add("is-hidden")}function L(){S.classList.add("is-hidden")}setTimeout((function(){m.classList.remove("is-hidden"),window.addEventListener("click",x),b.addEventListener("click",w)}),3e4),setTimeout((function(){S.classList.remove("is-hidden"),window.addEventListener("click",C),k.addEventListener("click",L)}),6e4);r(3843),r(3710),r(9070),r(3112);new(function(){function t(t){var e,r,n,o=void 0===t?{}:t,i=o.selector,s=o.targetDate;e=this,r="refs",n={days:document.querySelector("span[data-value=days]"),hours:document.querySelector("span[data-value=hours]"),mins:document.querySelector("span[data-value=mins]"),secs:document.querySelector("span[data-value=secs]")},r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,this.selector=i,this.targetDate=s}var e=t.prototype;return e.start=function(){var t=this,e=this.targetDate;setInterval((function(){var r=Date.now()-e;t.updateClock(r)}),1e3)},e.updateClock=function(t){var e=this.pad(Math.floor(t/864e5)),r=this.pad(Math.floor(t%864e5/36e5)),n=this.pad(Math.floor(t%36e5/6e4)),o=this.pad(Math.floor(t%6e4/1e3));this.showOnScreen(e,r,n,o)},e.showOnScreen=function(t,e,r,n){this.refs.days.textContent=t-1,this.refs.hours.textContent=e,this.refs.mins.textContent=r,this.refs.secs.textContent=n},e.pad=function(t){return String(t).padStart(2,"0")},t}())({selector:"#timer-1",targetDate:"Feb 17, 2020"}).start();r(3273),r(183),r(4049),r(3722),r(6699),r(2023);var E=document.querySelector("#form-search"),O=document.querySelector(".search-block").querySelectorAll("li");E.addEventListener("input",(function(t){var e=t.target.value.toLowerCase();O.forEach((function(t){t.textContent.toLowerCase().includes(e)?t.classList.remove("hidden"):t.classList.add("hidden")}))}))},3722:()=>{var t=document.querySelector(".menu-icon"),e=document.querySelector(".close-ic"),r=document.querySelector(".navigation");t.addEventListener("click",(function(){r.classList.add("active"),t.classList.add("active"),e.classList.add("active")})),e.addEventListener("click",(function(){r.classList.remove("active"),t.classList.remove("active"),e.classList.remove("active")}))},4049:()=>{var t=document.querySelector("#menu-navigation"),e=document.querySelector(".navigation");t.addEventListener("click",(function(){e.classList.toggle("active")}))},3273:()=>{var t=document.querySelector(".scroll-up"),e=document.querySelector(".scroll-up__circle"),r=e.getTotalLength();e.style.strokeDasharray=r+" "+r,e.style.transition="stroke-dashoffset 20ms";var n=function(){return window.pageYOffset||document.documentElement.scrollTop};window.addEventListener("scroll",(function(){var o,i;o=document.documentElement.scrollHeight-window.innerHeight,i=r-n()*r/o,e.style.strokeDashoffset=i,n()>100?t.classList.add("scroll-up--active"):t.classList.remove("scroll-up--active")})),t.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}))},183:()=>{var t=document.querySelector("#form-search"),e=document.querySelector(".search-block");t.addEventListener("click",(function(){e.classList.toggle("active")})),window.addEventListener("click",(function(t){var r=t.target;"INPUT"!==r.nodeName&&"UL"!==r.nodeName&&"LI"!==r.nodeName&&"IMG"!==r.nodeName&&e.classList.remove("active")}))},3099:t=>{t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},1223:(t,e,r)=>{var n=r(5112),o=r(30),i=r(3070),s=n("unscopables"),a=Array.prototype;null==a[s]&&i.f(a,s,{configurable:!0,value:o(null)}),t.exports=function(t){a[s][t]=!0}},9670:(t,e,r)=>{var n=r(111);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},8533:(t,e,r)=>{"use strict";var n=r(2092).forEach,o=r(9341),i=r(9207),s=o("forEach"),a=i("forEach");t.exports=s&&a?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},1318:(t,e,r)=>{var n=r(5656),o=r(7466),i=r(1400),s=function(t){return function(e,r,s){var a,u=n(e),c=o(u.length),l=i(s,c);if(t&&r!=r){for(;c>l;)if((a=u[l++])!=a)return!0}else for(;c>l;l++)if((t||l in u)&&u[l]===r)return t||l||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},2092:(t,e,r)=>{var n=r(9974),o=r(8361),i=r(7908),s=r(7466),a=r(5417),u=[].push,c=function(t){var e=1==t,r=2==t,c=3==t,l=4==t,f=6==t,p=5==t||f;return function(d,h,v,y){for(var g,m,b=i(d),S=o(b),k=n(h,v,3),w=s(S.length),x=0,C=y||a,L=e?C(d,w):r?C(d,0):void 0;w>x;x++)if((p||x in S)&&(m=k(g=S[x],x,b),t))if(e)L[x]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return x;case 2:u.call(L,g)}else if(l)return!1;return f?-1:c||l?l:L}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)}},9341:(t,e,r)=>{"use strict";var n=r(7293);t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},9207:(t,e,r)=>{var n=r(9781),o=r(7293),i=r(6656),s=Object.defineProperty,a={},u=function(t){throw t};t.exports=function(t,e){if(i(a,t))return a[t];e||(e={});var r=[][t],c=!!i(e,"ACCESSORS")&&e.ACCESSORS,l=i(e,0)?e[0]:u,f=i(e,1)?e[1]:void 0;return a[t]=!!r&&!o((function(){if(c&&!n)return!0;var t={length:-1};c?s(t,1,{enumerable:!0,get:u}):t[1]=1,r.call(t,l,f)}))}},5417:(t,e,r)=>{var n=r(111),o=r(3157),i=r(5112)("species");t.exports=function(t,e){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?n(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},4326:t=>{var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},9920:(t,e,r)=>{var n=r(6656),o=r(3887),i=r(1236),s=r(3070);t.exports=function(t,e){for(var r=o(e),a=s.f,u=i.f,c=0;c<r.length;c++){var l=r[c];n(t,l)||a(t,l,u(e,l))}}},4964:(t,e,r)=>{var n=r(5112)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[n]=!1,"/./"[t](e)}catch(t){}}return!1}},8880:(t,e,r)=>{var n=r(9781),o=r(3070),i=r(9114);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},9114:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},9781:(t,e,r)=>{var n=r(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,e,r)=>{var n=r(7854),o=r(111),i=n.document,s=o(i)&&o(i.createElement);t.exports=function(t){return s?i.createElement(t):{}}},8324:t=>{t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8113:(t,e,r)=>{var n=r(5005);t.exports=n("navigator","userAgent")||""},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(t,e,r)=>{var n=r(7854),o=r(1236).f,i=r(8880),s=r(1320),a=r(3505),u=r(9920),c=r(4705);t.exports=function(t,e){var r,l,f,p,d,h=t.target,v=t.global,y=t.stat;if(r=v?n:y?n[h]||a(h,{}):(n[h]||{}).prototype)for(l in e){if(p=e[l],f=t.noTargetGet?(d=o(r,l))&&d.value:r[l],!c(v?l:h+(y?".":"#")+l,t.forced)&&void 0!==f){if(typeof p==typeof f)continue;u(p,f)}(t.sham||f&&f.sham)&&i(p,"sham",!0),s(r,l,p,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},9974:(t,e,r)=>{var n=r(3099);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},5005:(t,e,r)=>{var n=r(857),o=r(7854),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t])||i(o[t]):n[t]&&n[t][e]||o[t]&&o[t][e]}},7854:(t,e,r)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},6656:t=>{var e={}.hasOwnProperty;t.exports=function(t,r){return e.call(t,r)}},3501:t=>{t.exports={}},490:(t,e,r)=>{var n=r(5005);t.exports=n("document","documentElement")},4664:(t,e,r)=>{var n=r(9781),o=r(7293),i=r(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:(t,e,r)=>{var n=r(7293),o=r(4326),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},2788:(t,e,r)=>{var n=r(5465),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource},9909:(t,e,r)=>{var n,o,i,s=r(8536),a=r(7854),u=r(111),c=r(8880),l=r(6656),f=r(5465),p=r(6200),d=r(3501),h=a.WeakMap;if(s){var v=f.state||(f.state=new h),y=v.get,g=v.has,m=v.set;n=function(t,e){return e.facade=t,m.call(v,t,e),e},o=function(t){return y.call(v,t)||{}},i=function(t){return g.call(v,t)}}else{var b=p("state");d[b]=!0,n=function(t,e){return e.facade=t,c(t,b,e),e},o=function(t){return l(t,b)?t[b]:{}},i=function(t){return l(t,b)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!u(e)||(r=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},3157:(t,e,r)=>{var n=r(4326);t.exports=Array.isArray||function(t){return"Array"==n(t)}},4705:(t,e,r)=>{var n=r(7293),o=/#|\.prototype\./,i=function(t,e){var r=a[s(t)];return r==c||r!=u&&("function"==typeof e?n(e):!!e)},s=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},u=i.NATIVE="N",c=i.POLYFILL="P";t.exports=i},111:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:t=>{t.exports=!1},7850:(t,e,r)=>{var n=r(111),o=r(4326),i=r(5112)("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},133:(t,e,r)=>{var n=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!n((function(){return!String(Symbol())}))},8536:(t,e,r)=>{var n=r(7854),o=r(2788),i=n.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},3929:(t,e,r)=>{var n=r(7850);t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},30:(t,e,r)=>{var n,o=r(9670),i=r(6048),s=r(748),a=r(3501),u=r(490),c=r(317),l=r(6200),f=l("IE_PROTO"),p=function(){},d=function(t){return"<script>"+t+"</"+"script>"},h=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;h=n?function(t){t.write(d("")),t.close();var e=t.parentWindow.Object;return t=null,e}(n):((e=c("iframe")).style.display="none",u.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(d("document.F=Object")),t.close(),t.F);for(var r=s.length;r--;)delete h.prototype[s[r]];return h()};a[f]=!0,t.exports=Object.create||function(t,e){var r;return null!==t?(p.prototype=o(t),r=new p,p.prototype=null,r[f]=t):r=h(),void 0===e?r:i(r,e)}},6048:(t,e,r)=>{var n=r(9781),o=r(3070),i=r(9670),s=r(1956);t.exports=n?Object.defineProperties:function(t,e){i(t);for(var r,n=s(e),a=n.length,u=0;a>u;)o.f(t,r=n[u++],e[r]);return t}},3070:(t,e,r)=>{var n=r(9781),o=r(4664),i=r(9670),s=r(7593),a=Object.defineProperty;e.f=n?a:function(t,e,r){if(i(t),e=s(e,!0),i(r),o)try{return a(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},1236:(t,e,r)=>{var n=r(9781),o=r(5296),i=r(9114),s=r(5656),a=r(7593),u=r(6656),c=r(4664),l=Object.getOwnPropertyDescriptor;e.f=n?l:function(t,e){if(t=s(t),e=a(e,!0),c)try{return l(t,e)}catch(t){}if(u(t,e))return i(!o.f.call(t,e),t[e])}},8006:(t,e,r)=>{var n=r(6324),o=r(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:(t,e)=>{e.f=Object.getOwnPropertySymbols},6324:(t,e,r)=>{var n=r(6656),o=r(5656),i=r(1318).indexOf,s=r(3501);t.exports=function(t,e){var r,a=o(t),u=0,c=[];for(r in a)!n(s,r)&&n(a,r)&&c.push(r);for(;e.length>u;)n(a,r=e[u++])&&(~i(c,r)||c.push(r));return c}},1956:(t,e,r)=>{var n=r(6324),o=r(748);t.exports=Object.keys||function(t){return n(t,o)}},5296:(t,e)=>{"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},3887:(t,e,r)=>{var n=r(5005),o=r(8006),i=r(5181),s=r(9670);t.exports=n("Reflect","ownKeys")||function(t){var e=o.f(s(t)),r=i.f;return r?e.concat(r(t)):e}},857:(t,e,r)=>{var n=r(7854);t.exports=n},1320:(t,e,r)=>{var n=r(7854),o=r(8880),i=r(6656),s=r(3505),a=r(2788),u=r(9909),c=u.get,l=u.enforce,f=String(String).split("String");(t.exports=function(t,e,r,a){var u,c=!!a&&!!a.unsafe,p=!!a&&!!a.enumerable,d=!!a&&!!a.noTargetGet;"function"==typeof r&&("string"!=typeof e||i(r,"name")||o(r,"name",e),(u=l(r)).source||(u.source=f.join("string"==typeof e?e:""))),t!==n?(c?!d&&t[e]&&(p=!0):delete t[e],p?t[e]=r:o(t,e,r)):p?t[e]=r:s(e,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&c(this).source||a(this)}))},4488:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:(t,e,r)=>{var n=r(7854),o=r(8880);t.exports=function(t,e){try{o(n,t,e)}catch(r){n[t]=e}return e}},6200:(t,e,r)=>{var n=r(2309),o=r(9711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:(t,e,r)=>{var n=r(7854),o=r(3505),i="__core-js_shared__",s=n[i]||o(i,{});t.exports=s},2309:(t,e,r)=>{var n=r(1913),o=r(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.7.0",mode:n?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},4986:(t,e,r)=>{var n=r(8113);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n)},6650:(t,e,r)=>{var n=r(7466),o=r(8415),i=r(4488),s=Math.ceil,a=function(t){return function(e,r,a){var u,c,l=String(i(e)),f=l.length,p=void 0===a?" ":String(a),d=n(r);return d<=f||""==p?l:(u=d-f,(c=o.call(p,s(u/p.length))).length>u&&(c=c.slice(0,u)),t?l+c:c+l)}};t.exports={start:a(!1),end:a(!0)}},8415:(t,e,r)=>{"use strict";var n=r(9958),o=r(4488);t.exports="".repeat||function(t){var e=String(o(this)),r="",i=n(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(r+=e);return r}},1400:(t,e,r)=>{var n=r(9958),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},5656:(t,e,r)=>{var n=r(8361),o=r(4488);t.exports=function(t){return n(o(t))}},9958:t=>{var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},7466:(t,e,r)=>{var n=r(9958),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:(t,e,r)=>{var n=r(4488);t.exports=function(t){return Object(n(t))}},7593:(t,e,r)=>{var n=r(111);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},9711:t=>{var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},3307:(t,e,r)=>{var n=r(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:(t,e,r)=>{var n=r(7854),o=r(2309),i=r(6656),s=r(9711),a=r(133),u=r(3307),c=o("wks"),l=n.Symbol,f=u?l:l&&l.withoutSetter||s;t.exports=function(t){return i(c,t)||(a&&i(l,t)?c[t]=l[t]:c[t]=f("Symbol."+t)),c[t]}},9554:(t,e,r)=>{"use strict";var n=r(2109),o=r(8533);n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},6699:(t,e,r)=>{"use strict";var n=r(2109),o=r(1318).includes,i=r(1223);n({target:"Array",proto:!0,forced:!r(9207)("indexOf",{ACCESSORS:!0,1:0})},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},3843:(t,e,r)=>{r(2109)({target:"Date",stat:!0},{now:function(){return(new Date).getTime()}})},3710:(t,e,r)=>{var n=r(1320),o=Date.prototype,i="Invalid Date",s="toString",a=o.toString,u=o.getTime;new Date(NaN)+""!=i&&n(o,s,(function(){var t=u.call(this);return t==t?a.call(this):i}))},9070:(t,e,r)=>{var n=r(2109),o=r(9781);n({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperty:r(3070).f})},2023:(t,e,r)=>{"use strict";var n=r(2109),o=r(3929),i=r(4488);n({target:"String",proto:!0,forced:!r(4964)("includes")},{includes:function(t){return!!~String(i(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},3112:(t,e,r)=>{"use strict";var n=r(2109),o=r(6650).start;n({target:"String",proto:!0,forced:r(4986)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},4747:(t,e,r)=>{var n=r(7854),o=r(8324),i=r(8533),s=r(8880);for(var a in o){var u=n[a],c=u&&u.prototype;if(c&&c.forEach!==i)try{s(c,"forEach",i)}catch(t){c.forEach=i}}},2564:(t,e,r)=>{var n=r(2109),o=r(7854),i=r(8113),s=[].slice,a=function(t){return function(e,r){var n=arguments.length>2,o=n?s.call(arguments,2):void 0;return t(n?function(){("function"==typeof e?e:Function(e)).apply(this,o)}:e,r)}};n({global:!0,bind:!0,forced:/MSIE .\./.test(i)},{setTimeout:a(o.setTimeout),setInterval:a(o.setInterval)})},2861:(t,e,r)=>{"use strict";r.d(e,{Z:()=>a});var n=r(4015),o=r.n(n),i=r(3645),s=r.n(i)()(o());s.push([t.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const a=s},9022:(t,e,r)=>{"use strict";r.d(e,{Z:()=>a});var n=r(4015),o=r.n(n),i=r(3645),s=r.n(i)()(o());s.push([t.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const a=s},3645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=t(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(t,r,n){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<t.length;a++){var u=[].concat(t[a]);n&&o[u[0]]||(r&&(u[2]?u[2]="".concat(r," and ").concat(u[2]):u[2]=r),e.push(u))}},e}},4015:t=>{"use strict";function e(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(r.push(s.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}t.exports=function(t){var r=e(t,4),n=r[1],o=r[3];if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),a="/*# ".concat(s," */"),u=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(t," */")}));return[n].concat(u).concat([a]).join("\n")}return[n].join("\n")}},3379:(t,e,r)=>{"use strict";var n,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},i=function(){var t={};return function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}t[e]=r}return t[e]}}(),s=[];function a(t){for(var e=-1,r=0;r<s.length;r++)if(s[r].identifier===t){e=r;break}return e}function u(t,e){for(var r={},n=[],o=0;o<t.length;o++){var i=t[o],u=e.base?i[0]+e.base:i[0],c=r[u]||0,l="".concat(u," ").concat(c);r[u]=c+1;var f=a(l),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(s[f].references++,s[f].updater(p)):s.push({identifier:l,updater:y(p,e),references:1}),n.push(l)}return n}function c(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var o=r.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var s=i(t.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var l,f=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function p(t,e,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=f(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function d(t,e,r){var n=r.css,o=r.media,i=r.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var h=null,v=0;function y(t,e){var r,n,o;if(e.singleton){var i=v++;r=h||(h=c(e)),n=p.bind(null,r,i,!1),o=p.bind(null,r,i,!0)}else r=c(e),n=d.bind(null,r,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(r)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var r=u(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<r.length;n++){var o=a(r[n]);s[o].references--}for(var i=u(t,e),c=0;c<r.length;c++){var l=a(r[c]);0===s[l].references&&(s[l].updater(),s.splice(l,1))}r=i}}}},3614:function(t){var e;e=function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}return r.m=t,r.c=e,r.p="",r(0)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=r(1),i=r(3),s=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),o.initializer.load(this,r,e),this.begin()}return n(t,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var t=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout((function(){t.currentElContent&&0!==t.currentElContent.length?t.backspace(t.currentElContent,t.currentElContent.length):t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)}),this.startDelay)}},{key:"typewrite",value:function(t,e){var r=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var n=this.humanizer(this.typeSpeed),o=1;!0!==this.pause.status?this.timeout=setTimeout((function(){e=i.htmlParser.typeHtmlChars(t,e,r);var n=0,s=t.substr(e);if("^"===s.charAt(0)&&/^\^\d+/.test(s)){var a=1;a+=(s=/\d+/.exec(s)[0]).length,n=parseInt(s),r.temporaryPause=!0,r.options.onTypingPaused(r.arrayPos,r),t=t.substring(0,e)+t.substring(e+a),r.toggleBlinking(!0)}if("`"===s.charAt(0)){for(;"`"!==t.substr(e+o).charAt(0)&&(o++,!(e+o>t.length)););var u=t.substring(0,e),c=t.substring(u.length+1,e+o),l=t.substring(e+o+1);t=u+c+l,o--}r.timeout=setTimeout((function(){r.toggleBlinking(!1),e>=t.length?r.doneTyping(t,e):r.keepTyping(t,e,o),r.temporaryPause&&(r.temporaryPause=!1,r.options.onTypingResumed(r.arrayPos,r))}),n)}),n):this.setPauseStatus(t,e,!0)}},{key:"keepTyping",value:function(t,e,r){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),e+=r;var n=t.substr(0,e);this.replaceText(n),this.typewrite(t,e)}},{key:"doneTyping",value:function(t,e){var r=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout((function(){r.backspace(t,e)}),this.backDelay))}},{key:"backspace",value:function(t,e){var r=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var n=this.humanizer(this.backSpeed);this.timeout=setTimeout((function(){e=i.htmlParser.backSpaceHtmlChars(t,e,r);var n=t.substr(0,e);if(r.replaceText(n),r.smartBackspace){var o=r.strings[r.arrayPos+1];o&&n===o.substr(0,e)?r.stopNum=e:r.stopNum=0}e>r.stopNum?(e--,r.backspace(t,e)):e<=r.stopNum&&(r.arrayPos++,r.arrayPos===r.strings.length?(r.arrayPos=0,r.options.onLastStringBackspaced(),r.shuffleStringsIfNeeded(),r.begin()):r.typewrite(r.strings[r.sequence[r.arrayPos]],e))}),n)}else this.setPauseStatus(t,e,!0)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(t,e,r){this.pause.typewrite=r,this.pause.curString=t,this.pause.curStrPos=e}},{key:"toggleBlinking",value:function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function(t){return Math.round(Math.random()*t/2)+t}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort((function(){return Math.random()-.5})))}},{key:"initFadeOut",value:function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout((function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)}),this.fadeOutDelay)}},{key:"replaceText",value:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t}},{key:"bindFocusEvents",value:function(){var t=this;this.isInput&&(this.el.addEventListener("focus",(function(e){t.stop()})),this.el.addEventListener("blur",(function(e){t.el.value&&0!==t.el.value.length||t.start()})))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),t}();e.default=s,t.exports=e.default},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),s=r(2),a=(n=s)&&n.__esModule?n:{default:n},u=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return i(t,[{key:"load",value:function(t,e,r){if(t.el="string"==typeof r?document.querySelector(r):r,t.options=o({},a.default,e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map((function(t){return t.trim()})),"string"==typeof t.options.stringsElement?t.stringsElement=document.querySelector(t.options.stringsElement):t.stringsElement=t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.display="none";var n=Array.prototype.slice.apply(t.stringsElement.children),i=n.length;if(i)for(var s=0;s<i;s+=1){var u=n[s];t.strings.push(u.innerHTML.trim())}}for(var s in t.strPos=0,t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.sequence=[],t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.strings)t.sequence[s]=s;t.currentElContent=this.getCurrentElContent(t),t.autoInsertCss=t.options.autoInsertCss,this.appendAnimationCss(t)}},{key:"getCurrentElContent",value:function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent}},{key:"appendAnimationCss",value:function(t){var e="data-typed-js-css";if(t.autoInsertCss&&(t.showCursor||t.fadeOut)&&!document.querySelector("["+e+"]")){var r=document.createElement("style");r.type="text/css",r.setAttribute(e,!0);var n="";t.showCursor&&(n+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),t.fadeOut&&(n+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==r.length&&(r.innerHTML=n,document.body.appendChild(r))}}}]),t}();e.default=u;var c=new u;e.initializer=c},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}};e.default=r,t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),n=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return r(t,[{key:"typeHtmlChars",value:function(t,e,r){if("html"!==r.contentType)return e;var n=t.substr(e).charAt(0);if("<"===n||"&"===n){var o="";for(o="<"===n?">":";";t.substr(e+1).charAt(0)!==o&&!(1+ ++e>t.length););e++}return e}},{key:"backSpaceHtmlChars",value:function(t,e,r){if("html"!==r.contentType)return e;var n=t.substr(e).charAt(0);if(">"===n||";"===n){var o="";for(o=">"===n?"<":"&";t.substr(e-1).charAt(0)!==o&&!(--e<0););e--}return e}}]),t}();e.default=n;var o=new n;e.htmlParser=o}])},t.exports=e()}},0,[[2e3,666]]]);
//# sourceMappingURL=main.f6ee004fbeb9c8c23ae9.js.map