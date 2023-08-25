(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function u(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function fa(a){return a.raw=a}
function ia(a,b){a.raw=b;return a}
function v(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ja(a){if(!(a instanceof Array)){a=v(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function la(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ma="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)la(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||ma});
var oa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},pa=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=oa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ra;
if("function"==typeof Object.setPrototypeOf)ra=Object.setPrototypeOf;else{var sa;a:{var ta={a:!0},ua={};try{ua.__proto__=ta;sa=ua.a;break a}catch(a){}sa=!1}ra=sa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var va=ra;
function w(a,b){a.prototype=oa(b.prototype);a.prototype.constructor=a;if(va)va(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Aa=b.prototype}
function wa(){this.s=!1;this.m=null;this.i=void 0;this.h=1;this.G=this.l=0;this.D=this.j=null}
function xa(a){if(a.s)throw new TypeError("Generator is already running");a.s=!0}
wa.prototype.la=function(a){this.i=a};
function ya(a,b){a.j={exception:b,td:!0};a.h=a.l||a.G}
wa.prototype.return=function(a){this.j={return:a};this.h=this.G};
wa.prototype.yield=function(a,b){this.h=b;return{value:a}};
wa.prototype.v=function(a){this.h=a};
function za(a,b,c){a.l=b;void 0!=c&&(a.G=c)}
function Aa(a){a.l=0;var b=a.j.exception;a.j=null;return b}
function Ba(a){var b=a.D.splice(0)[0];(b=a.j=a.j||b)?b.td?a.h=a.l||a.G:void 0!=b.v&&a.G<b.v?(a.h=b.v,a.j=null):a.h=a.G:a.h=0}
function Ca(a){this.h=new wa;this.i=a}
function Da(a,b){xa(a.h);var c=a.h.m;if(c)return Ea(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Fa(a)}
function Ea(a,b,c,d){try{var e=b.call(a.h.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.s=!1,e;var f=e.value}catch(g){return a.h.m=null,ya(a.h,g),Fa(a)}a.h.m=null;d.call(a.h,f);return Fa(a)}
function Fa(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.s=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ya(a.h,c)}a.h.s=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.td)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ga(a){this.next=function(b){xa(a.h);a.h.m?b=Ea(a,a.h.m.next,b,a.h.la):(a.h.la(b),b=Fa(a));return b};
this.throw=function(b){xa(a.h);a.h.m?b=Ea(a,a.h.m["throw"],b,a.h.la):(ya(a.h,b),b=Fa(a));return b};
this.return=function(b){return Da(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ha(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return Ha(new Ga(new Ca(a)))}
function B(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return pa});
u("Reflect.setPrototypeOf",function(a){return a?a:va?function(b,c){try{return va(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.s=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.W),reject:g(this.m)}};
b.prototype.W=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.da(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.S(g):this.G(g)}};
b.prototype.S=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.ea(h,g):this.G(g)};
b.prototype.m=function(g){this.la(2,g)};
b.prototype.G=function(g){this.la(1,g)};
b.prototype.la=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.Y();this.D()};
b.prototype.Y=function(){var g=this;e(function(){if(g.R()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.R=function(){if(this.s)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.D=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.da=function(g){var h=this.l();g.Zb(h.resolve,h.reject)};
b.prototype.ea=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(t,p){return"function"==typeof t?function(x){try{l(t(x))}catch(y){n(y)}}:p}
var l,n,r=new b(function(t,p){l=t;n=p});
this.Zb(k(g,l),k(h,n));return r};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Zb=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.s=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=v(g),n=l.next();!n.done;n=l.next())d(n.value).Zb(h,k)})};
b.all=function(g){var h=v(g),k=h.next();return k.done?d([]):new b(function(l,n){function r(x){return function(y){t[x]=y;p--;0==p&&l(t)}}
var t=[],p=0;do t.push(void 0),p++,d(k.value).Zb(r(t.length-1),n),k=h.next();while(!k.done)})};
return b});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=v(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!la(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(r){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!la(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&la(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&la(k,g)&&la(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&la(k,g)&&la(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ea(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h[0][l];if(n&&la(h[0],l))for(h=0;h<n.length;h++){var r=n[h];if(k!==k&&r.key!==r.key||k===r.key)return{id:l,list:n,index:h,entry:r}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=v(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(v([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(r){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ja(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
u("Object.setPrototypeOf",function(a){return a||va});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
function Ka(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.keys",function(a){return a?a:function(){return Ka(this,function(b){return b})}});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=v(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(v([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
u("Array.prototype.values",function(a){return a?a:function(){return Ka(this,function(b,c){return c})}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)la(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ja(this,b,"includes").indexOf(b,c||0)}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Array.prototype.entries",function(a){return a?a:function(){return Ka(this,function(b,c){return[b,c]})}});
u("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)la(b,d)&&c.push([d,b[d]]);return c}});
u("globalThis",function(a){return a||da});
var La=La||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ma(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Na(a){var b=Ma(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Oa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Pa(a){return Object.prototype.hasOwnProperty.call(a,Qa)&&a[Qa]||(a[Qa]=++Ra)}
var Qa="closure_uid_"+(1E9*Math.random()>>>0),Ra=0;function Sa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ta(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ua(a,b,c){Ua=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Sa:Ta;return Ua.apply(null,arguments)}
function Va(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Wa(){return Date.now()}
function Xa(a,b){function c(){}
c.prototype=b.prototype;a.Aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ya(a){return a}
;function Za(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Za);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Xa(Za,Error);Za.prototype.name="CustomError";function $a(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function ab(){}
function bb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var cb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},db=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},eb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},fb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},gb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
db(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function hb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function ib(a,b){b=cb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function jb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Na(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function kb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function lb(a){var b=mb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function nb(a){for(var b in a)return!1;return!0}
function ob(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function pb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function qb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function rb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function sb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=sb(a[c]);return b}
var tb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ub(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<tb.length;f++)c=tb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var vb;function wb(){if(void 0===vb){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Ya,createScript:Ya,createScriptURL:Ya})}catch(c){C.console&&C.console.error(c.message)}vb=a}else vb=a}return vb}
;function xb(){}
function yb(a){return new xb(zb,a)}
var zb={};yb("");var Ab={};function Bb(a){this.h=a}
Bb.prototype.toString=function(){return this.h.toString()};function Cb(a){this.h=a}
Cb.prototype.toString=function(){return this.h+""};
function Db(a){if(a instanceof Cb&&a.constructor===Cb)return a.h;Ma(a);return"type_error:TrustedResourceUrl"}
var Eb={};function Fb(a){var b=wb();a=b?b.createScriptURL(a):a;return new Cb(a,Eb)}
;var Gb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function Hb(a){this.h=a}
Hb.prototype.toString=function(){return this.h.toString()};
var Ib={},Jb=new Hb("about:invalid#zClosurez",Ib);var Kb,Lb=E("CLOSURE_FLAGS"),Mb=Lb&&Lb[610401301];Kb=null!=Mb?Mb:!1;function Nb(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Ob,Pb=C.navigator;Ob=Pb?Pb.userAgentData||null:null;function Qb(a){return Kb?Ob?Ob.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function F(a){return-1!=Nb().indexOf(a)}
;function Rb(){return Kb?!!Ob&&0<Ob.brands.length:!1}
function Sb(){return Rb()?!1:F("Opera")}
function Tb(){return Rb()?!1:F("Trident")||F("MSIE")}
function Ub(){return F("Firefox")||F("FxiOS")}
function Vb(){return Rb()?Qb("Chromium"):(F("Chrome")||F("CriOS"))&&!(Rb()?0:F("Edge"))||F("Silk")}
;function Wb(a){this.h=a}
Wb.prototype.toString=function(){return this.h.toString()};function Xb(){a:{var a=C.document;if(a.querySelector&&(a=a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Yb.test(a))break a;a=""}return a}
var Yb=/^[\w+/_-]+[=]{0,2}$/;function Zb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var $b=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ac(a){return a?decodeURI(a):a}
function bc(a,b){return b.match($b)[a]||null}
function cc(a){return ac(bc(3,a))}
function dc(a){var b=a.match($b);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function ec(a){var b=a.indexOf("#");return 0>b?a:a.slice(0,b)}
function fc(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function hc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)hc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function ic(a,b){var c=[];for(b=b||0;b<a.length;b+=2)hc(a[b],a[b+1],c);return c.join("&")}
function jc(a){var b=[],c;for(c in a)hc(c,a[c],b);return b.join("&")}
function kc(a,b){var c=2==arguments.length?ic(arguments[1],0):ic(arguments,1);return fc(a,c)}
function lc(a,b){b=jc(b);return fc(a,b)}
function mc(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return fc(a,b+c)}
function nc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var oc=/#|$/,pc=/[?&]($|#)/;function qc(a,b){for(var c=a.search(oc),d=0,e,f=[];0<=(e=nc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(pc,"$1")}
;function rc(a){this.jd=a}
;function sc(a,b,c){this.i=a;this.l=b;this.h=c||[];this.rb=new Map}
m=sc.prototype;m.Ud=function(a){var b=B.apply(1,arguments),c=this.Ec(b);c?c.push(new rc(a)):this.Gd(a,b)};
m.Gd=function(a){var b=this.od(B.apply(1,arguments));this.rb.set(b,[new rc(a)])};
m.Ec=function(){var a=this.od(B.apply(0,arguments));return this.rb.has(a)?this.rb.get(a):void 0};
m.me=function(){var a=this.Ec(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
m.clear=function(){this.rb.clear()};
m.od=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function tc(a,b){sc.call(this,a,3,b)}
w(tc,sc);tc.prototype.j=function(a){var b=B.apply(1,arguments),c=0,d=this.me(b);d&&(c=d.jd);this.Gd(c+a,b)};function uc(a,b){sc.call(this,a,2,b)}
w(uc,sc);uc.prototype.record=function(a){this.Ud(a,B.apply(1,arguments))};function vc(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function wc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Na(d)?wc.apply(null,d):vc(d)}}
;function G(){this.la=this.la;this.G=this.G}
G.prototype.la=!1;G.prototype.Z=function(){return this.la};
G.prototype.dispose=function(){this.la||(this.la=!0,this.M())};
function xc(a,b){yc(a,Va(vc,b))}
function yc(a,b){a.la?b():(a.G||(a.G=[]),a.G.push(b))}
G.prototype.M=function(){if(this.G)for(;this.G.length;)this.G.shift()()};function zc(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
zc.prototype.stopPropagation=function(){this.j=!0};
zc.prototype.preventDefault=function(){this.defaultPrevented=!0};function Ac(a){var b=E("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Bc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Cc[c])c=Cc[c];else{c=String(c);if(!Cc[c]){var f=/function\s+([^\(]+)/m.exec(c);Cc[c]=f?f[1]:"[Anonymous]"}c=Cc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Bc(a,b){b||(b={});b[Dc(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Dc(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Bc(a,b));return c}
function Dc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Cc={};var Ec=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function Fc(){return Kb?!!Ob&&!!Ob.platform:!1}
function Gc(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;function Hc(a){Hc[" "](a);return a}
Hc[" "]=function(){};var Ic=Sb(),Jc=Tb(),Kc=F("Edge"),Lc=F("Gecko")&&!(-1!=Nb().toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),Mc=-1!=Nb().toLowerCase().indexOf("webkit")&&!F("Edge");Mc&&F("Mobile");Fc()||F("Macintosh");Fc()||F("Windows");(Fc()?"Linux"===Ob.platform:F("Linux"))||Fc()||F("CrOS");var Nc=C.navigator||null;Nc&&(Nc.appVersion||"").indexOf("X11");var Oc=Fc()?"Android"===Ob.platform:F("Android");Gc();F("iPad");F("iPod");Gc()||F("iPad")||F("iPod");Nb().toLowerCase().indexOf("kaios");
function Pc(){var a=C.document;return a?a.documentMode:void 0}
var Qc;a:{var Rc="",Sc=function(){var a=Nb();if(Lc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Kc)return/Edge\/([\d\.]+)/.exec(a);if(Jc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Mc)return/WebKit\/(\S+)/.exec(a);if(Ic)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Sc&&(Rc=Sc?Sc[1]:"");if(Jc){var Tc=Pc();if(null!=Tc&&Tc>parseFloat(Rc)){Qc=String(Tc);break a}}Qc=Rc}var Uc=Qc,Vc;if(C.document&&Jc){var Wc=Pc();Vc=Wc?Wc:parseInt(Uc,10)||void 0}else Vc=void 0;var Xc=Vc;function Yc(a,b){zc.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Xa(Yc,zc);var Zc={2:"touch",3:"pen",4:"mouse"};
Yc.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Lc){a:{try{Hc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Zc[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&Yc.Aa.preventDefault.call(this)};
Yc.prototype.stopPropagation=function(){Yc.Aa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Yc.prototype.preventDefault=function(){Yc.Aa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var $c="closure_listenable_"+(1E6*Math.random()|0);var ad=0;function bd(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.ec=e;this.key=++ad;this.Tb=this.Yb=!1}
function cd(a){a.Tb=!0;a.listener=null;a.proxy=null;a.src=null;a.ec=null}
;function dd(a){this.src=a;this.listeners={};this.h=0}
dd.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=ed(a,b,d,e);-1<g?(b=a[g],c||(b.Yb=!1)):(b=new bd(b,this.src,f,!!d,e),b.Yb=c,a.push(b));return b};
dd.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=ed(e,b,c,d);return-1<b?(cd(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function fd(a,b){var c=b.type;c in a.listeners&&ib(a.listeners[c],b)&&(cd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function ed(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Tb&&f.listener==b&&f.capture==!!c&&f.ec==d)return e}return-1}
;var gd="closure_lm_"+(1E6*Math.random()|0),hd={},id=0;function jd(a,b,c,d,e){if(d&&d.once)kd(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)jd(a,b[f],c,d,e);else c=ld(c),a&&a[$c]?a.listen(b,c,Oa(d)?!!d.capture:!!d,e):md(a,b,c,!1,d,e)}
function md(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Oa(e)?!!e.capture:!!e,h=nd(a);h||(a[gd]=h=new dd(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=od();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Ec||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(pd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");id++}}
function od(){function a(c){return b.call(a.src,a.listener,c)}
var b=qd;return a}
function kd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)kd(a,b[f],c,d,e);else c=ld(c),a&&a[$c]?a.h.add(String(b),c,!0,Oa(d)?!!d.capture:!!d,e):md(a,b,c,!0,d,e)}
function rd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)rd(a,b[f],c,d,e);else(d=Oa(d)?!!d.capture:!!d,c=ld(c),a&&a[$c])?a.h.remove(String(b),c,d,e):a&&(a=nd(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=ed(b,c,d,e)),(c=-1<a?b[a]:null)&&sd(c))}
function sd(a){if("number"!==typeof a&&a&&!a.Tb){var b=a.src;if(b&&b[$c])fd(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(pd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);id--;(c=nd(b))?(fd(c,a),0==c.h&&(c.src=null,b[gd]=null)):cd(a)}}}
function pd(a){return a in hd?hd[a]:hd[a]="on"+a}
function qd(a,b){if(a.Tb)a=!0;else{b=new Yc(b,this);var c=a.listener,d=a.ec||a.src;a.Yb&&sd(a);a=c.call(d,b)}return a}
function nd(a){a=a[gd];return a instanceof dd?a:null}
var td="__closure_events_fn_"+(1E9*Math.random()>>>0);function ld(a){if("function"===typeof a)return a;a[td]||(a[td]=function(b){return a.handleEvent(b)});
return a[td]}
;function ud(){G.call(this);this.h=new dd(this);this.ab=this;this.ea=null}
Xa(ud,G);ud.prototype[$c]=!0;m=ud.prototype;m.addEventListener=function(a,b,c,d){jd(this,a,b,c,d)};
m.removeEventListener=function(a,b,c,d){rd(this,a,b,c,d)};
function vd(a,b){var c=a.ea;if(c){var d=[];for(var e=1;c;c=c.ea)d.push(c),++e}a=a.ab;c=b.type||b;"string"===typeof b?b=new zc(b,a):b instanceof zc?b.target=b.target||a:(e=b,b=new zc(c,a),ub(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=wd(g,c,!0,b)&&e}b.j||(g=b.h=a,e=wd(g,c,!0,b)&&e,b.j||(e=wd(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=wd(g,c,!1,b)&&e}
m.M=function(){ud.Aa.M.call(this);this.removeAllListeners();this.ea=null};
m.listen=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
m.removeAllListeners=function(a){if(this.h){var b=this.h;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,cd(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function wd(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Tb&&g.capture==c){var h=g.listener,k=g.ec||g.src;g.Yb&&fd(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function xd(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
xd.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function yd(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function zd(a,b){return a+Math.random()*(b-a)}
;function Ad(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=Ad.prototype;m.clone=function(){return new Ad(this.x,this.y)};
m.equals=function(a){return a instanceof Ad&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
m.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function Bd(a,b){this.width=a;this.height=b}
m=Bd.prototype;m.clone=function(){return new Bd(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
m.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function Cd(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Dd(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function Ed(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Fd;function Gd(){var a=C.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=Dd("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ua(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Tb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.hd;c.hd=null;e()}};
return function(e){d.next={hd:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function Hd(a){C.setTimeout(function(){throw a;},0)}
;function Id(){this.i=this.h=null}
Id.prototype.add=function(a,b){var c=Jd.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Id.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Jd=new xd(function(){return new Kd},function(a){return a.reset()});
function Kd(){this.next=this.scope=this.h=null}
Kd.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Kd.prototype.reset=function(){this.next=this.scope=this.h=null};var Ld,Md=!1,Nd=new Id;function Od(a,b){Ld||Pd();Md||(Ld(),Md=!0);Nd.add(a,b)}
function Pd(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);Ld=function(){a.then(Qd)}}else Ld=function(){var b=Qd;
"function"!==typeof C.setImmediate||C.Window&&C.Window.prototype&&(Rb()||!F("Edge"))&&C.Window.prototype.setImmediate==C.setImmediate?(Fd||(Fd=Gd()),Fd(b)):C.setImmediate(b)}}
function Qd(){for(var a;a=Nd.remove();){try{a.h.call(a.scope)}catch(b){Hd(b)}yd(Jd,a)}Md=!1}
;function Rd(a){this.h=0;this.s=void 0;this.l=this.i=this.j=null;this.m=this.G=!1;if(a!=ab)try{var b=this;a.call(void 0,function(c){Sd(b,2,c)},function(c){Sd(b,3,c)})}catch(c){Sd(this,3,c)}}
function Td(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
Td.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var Ud=new xd(function(){return new Td},function(a){a.reset()});
function Vd(a,b,c){var d=Ud.get();d.i=a;d.h=b;d.context=c;return d}
function Wd(a){if(a instanceof Rd)return a;var b=new Rd(ab);Sd(b,2,a);return b}
function Xd(a){return new Rd(function(b,c){c(a)})}
function Yd(a,b,c){Zd(a,b,c,null)||Od(Va(b,a))}
function $d(a){return new Rd(function(b){var c=a.length,d=[];if(c)for(var e=function(h,k,l){c--;d[h]=k?{fulfilled:!0,value:l}:{fulfilled:!1,reason:l};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],Yd(g,Va(e,f,!0),Va(e,f,!1));
else b(d)})}
Rd.prototype.then=function(a,b,c){return ae(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Rd.prototype.$goog_Thenable=!0;m=Rd.prototype;m.uc=function(a,b){return ae(this,null,a,b)};
m.catch=Rd.prototype.uc;m.cancel=function(a){if(0==this.h){var b=new be(a);Od(function(){ce(this,b)},this)}};
function ce(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?ce(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):de(c),ee(c,e,3,b)))}a.j=null}else Sd(a,3,b)}
function fe(a,b){a.i||2!=a.h&&3!=a.h||ge(a);a.l?a.l.next=b:a.i=b;a.l=b}
function ae(a,b,c,d){var e=Vd(null,null,null);e.child=new Rd(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof be?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;fe(a,e);return e.child}
m.gf=function(a){this.h=0;Sd(this,2,a)};
m.hf=function(a){this.h=0;Sd(this,3,a)};
function Sd(a,b,c){0==a.h&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.h=1,Zd(c,a.gf,a.hf,a)||(a.s=c,a.h=b,a.j=null,ge(a),3!=b||c instanceof be||he(a,c)))}
function Zd(a,b,c,d){if(a instanceof Rd)return fe(a,Vd(b||ab,c||null,d)),!0;if(a)try{var e=!!a.$goog_Thenable}catch(g){e=!1}else e=!1;if(e)return a.then(b,c,d),!0;if(Oa(a))try{var f=a.then;if("function"===typeof f)return ie(a,f,b,c,d),!0}catch(g){return c.call(d,g),!0}return!1}
function ie(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function ge(a){a.G||(a.G=!0,Od(a.ge,a))}
function de(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
m.ge=function(){for(var a;a=de(this);)ee(this,a,this.h,this.s);this.G=!1};
function ee(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.child)b.child.j=null,je(b,c,d);else try{b.j?b.i.call(b.context):je(b,c,d)}catch(e){ke.call(null,e)}yd(Ud,b)}
function je(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function he(a,b){a.m=!0;Od(function(){a.m&&ke.call(null,b)})}
var ke=Hd;function be(a){Za.call(this,a)}
Xa(be,Za);be.prototype.name="cancel";function le(a,b){ud.call(this);this.j=a||1;this.i=b||C;this.l=Ua(this.ef,this);this.m=Wa()}
Xa(le,ud);m=le.prototype;m.enabled=!1;m.Ea=null;m.setInterval=function(a){this.j=a;this.Ea&&this.enabled?(this.stop(),this.start()):this.Ea&&this.stop()};
m.ef=function(){if(this.enabled){var a=Wa()-this.m;0<a&&a<.8*this.j?this.Ea=this.i.setTimeout(this.l,this.j-a):(this.Ea&&(this.i.clearTimeout(this.Ea),this.Ea=null),vd(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
m.start=function(){this.enabled=!0;this.Ea||(this.Ea=this.i.setTimeout(this.l,this.j),this.m=Wa())};
m.stop=function(){this.enabled=!1;this.Ea&&(this.i.clearTimeout(this.Ea),this.Ea=null)};
m.M=function(){le.Aa.M.call(this);this.stop();delete this.i};
function me(a,b,c){if("function"===typeof a)c&&(a=Ua(a,c));else if(a&&"function"==typeof a.handleEvent)a=Ua(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:C.setTimeout(a,b||0)}
;function ne(a){G.call(this);this.D=a;this.i=new Map;this.s=new Set;this.j=0;this.l=100;this.flushInterval=3E4;this.h=new le(this.flushInterval);this.h.listen("tick",this.pb,!1,this);xc(this,this.h);this.m=!1}
w(ne,G);m=ne.prototype;m.sendIsolatedPayload=function(a){this.m=a;this.l=1};
function oe(a){a.h.enabled||a.h.start();a.j++;a.j>=a.l&&a.pb()}
m.pb=function(){var a=this.i.values();a=[].concat(ja(a)).filter(function(b){return b.rb.size});
a.length&&this.D.flush(a,this.m);pe(a);this.j=0;this.h.enabled&&this.h.stop()};
m.bd=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new tc(a,b))};
m.cd=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new uc(a,b))};
function qe(a,b){return a.s.has(b)?void 0:a.i.get(b)}
m.vc=function(a){this.Sd.apply(this,[a,1].concat(ja(B.apply(1,arguments))))};
m.Sd=function(a,b){var c=B.apply(2,arguments),d=qe(this,a);d&&d instanceof tc&&(d.j(b,c),oe(this))};
m.record=function(a,b){var c=B.apply(2,arguments),d=qe(this,a);d&&d instanceof uc&&(d.record(b,c),oe(this))};
function pe(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function re(a){this.h=a;this.h.bd("/client_streamz/bg/fiec",{ub:3,tb:"rk"},{ub:2,tb:"ec"},{ub:3,tb:"em"})}
function se(a,b,c,d){a.h.vc("/client_streamz/bg/fiec",b,c,d)}
function te(a){this.h=a;this.h.cd("/client_streamz/bg/fil",{ub:3,tb:"rk"})}
te.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fil",a,b)};
function ue(a){this.h=a;this.h.bd("/client_streamz/bg/fsc",{ub:3,tb:"rk"})}
function ve(a){this.h=a;this.h.cd("/client_streamz/bg/fsl",{ub:3,tb:"rk"})}
ve.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fsl",a,b)};var we={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);0<a;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function xe(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=ye(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;12<=g;g-=12,h+=12)c+=ze(a,h),d+=ze(a,h+4),e+=ze(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return we.toString(e)}
function ye(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function ze(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;Ub();var Ae=Gc()||F("iPod"),Be=F("iPad");!F("Android")||Vb()||Ub()||Sb()||F("Silk");Vb();var Ce=F("Safari")&&!(Vb()||(Rb()?0:F("Coast"))||Sb()||(Rb()?0:F("Edge"))||(Rb()?Qb("Microsoft Edge"):F("Edg/"))||(Rb()?Qb("Opera"):F("OPR"))||Ub()||F("Silk")||F("Android"))&&!(Gc()||F("iPad")||F("iPod"));var De={},Ee=null;function Fe(a,b){Na(a);void 0===b&&(b=0);Ge();b=De[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function He(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;Ie(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Ie(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),n=Ee[l];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
Ge();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function Ge(){if(!Ee){Ee={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));De[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===Ee[f]&&(Ee[f]=e)}}}}
;var Je="undefined"!==typeof Uint8Array,Ke=!Jc&&"function"===typeof btoa;function Le(a){if(!Ke)return Fe(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var Me=/[-_.]/g,Ne={"-":"+",_:"/",".":"="};function Oe(a){return Ne[a]||""}
function Pe(a){return Je&&null!=a&&a instanceof Uint8Array}
var Qe={};var Re;function Se(a){if(a!==Qe)throw Error("illegal external caller");}
function Te(a,b){Se(b);this.value_=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
Te.prototype.isEmpty=function(){return null==this.value_};
Te.prototype.sizeBytes=function(){Se(Qe);var a=this.value_;if(null!=a&&!Pe(a))if("string"===typeof a)if(Ke){Me.test(a)&&(a=a.replace(Me,Oe));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=He(a);else Ma(a),a=null;return(a=null==a?a:this.value_=a)?a.length:0};function Ue(a){return Array.prototype.slice.call(a)}
;var Ve="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;Math.max.apply(Math,ja(Object.values({If:1,Gf:2,Ff:4,Lf:8,Kf:16,Jf:32,yf:64,Mf:128,Ef:256,Df:512,Hf:1024})));var We=Ve?function(a,b){a[Ve]|=b}:function(a,b){void 0!==a.Ca?a.Ca|=b:Object.defineProperties(a,{Ca:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Xe(a){var b=Ye(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=Ue(a)),Ze(a,b|1));return a}
var $e=Ve?function(a,b){a[Ve]&=~b}:function(a,b){void 0!==a.Ca&&(a.Ca&=~b)},Ye=Ve?function(a){return a[Ve]|0}:function(a){return a.Ca|0},af=Ve?function(a){return a[Ve]}:function(a){return a.Ca},Ze=Ve?function(a,b){a[Ve]=b}:function(a,b){void 0!==a.Ca?a.Ca=b:Object.defineProperties(a,{Ca:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function bf(a,b){Object.isFrozen(a)&&(a=Ue(a));Ze(a,b);return a}
function cf(a){We(a,1);return a}
function df(a,b){Ze(b,(a|0)&-255)}
function ef(a,b){Ze(b,(a|34)&-221)}
function ff(a){a=a>>11&1023;return 0===a?536870912:a}
;var gf={};function hf(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var jf,kf,lf=[];Ze(lf,39);kf=Object.freeze(lf);function mf(a){if(a&2)throw Error();}
;function nf(a){return a.displayName||a.name||"unknown type name"}
function of(a){if(null!=a){if("boolean"!==typeof a)throw Error("Expected boolean but got "+Ma(a)+": "+a);a=!!a}return a}
function pf(a){return"number"===typeof a&&Number.isFinite(a)||!!a&&"string"===typeof a&&isFinite(a)}
function qf(a){if(null!=a&&"number"!==typeof a)throw Error();return a}
function rf(a){if(null==a)return a;if("string"===typeof a){if(!a)return;a=+a}if("number"===typeof a)return a}
function sf(a){if(null!=a){if(!pf(a))throw Error("Expected an int64 value encoded as a number or a string but got "+a+" a "+Ma(a));a="string"===typeof a?tf(a):uf(a)}return a}
function uf(a){pf(a);return a}
function tf(a){pf(a);return a}
function vf(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function wf(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+nf(b)+" but got "+(a&&nf(a.constructor)));}
function xf(a,b,c){var d=!1;if(null!=a&&"object"===typeof a&&!(d=Array.isArray(a))&&a.Oc===gf)return a;if(d){var e=d=Ye(a);0===e&&(e|=c&32);e|=c&2;e!==d&&Ze(a,e);return new b(a)}}
;var yf;function zf(a,b){Ye(b);yf=b;a=new a(b);yf=void 0;return a}
function Af(a,b,c){null==a&&(a=yf);yf=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-2095105|(b&1023)<<11)}else{if(!Array.isArray(a))throw Error();d=Ye(a);if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();a:{c=a;var e=c.length;if(e){var f=e-1,g=c[f];if(hf(g)){d|=256;b=+!!(d&512)-1;e=f-b;1024<=e&&(Bf(c,b,g),e=1023);d=d&-2095105|(e&1023)<<11;break a}}b&&(g=+!!(d&512)-1,b=Math.max(b,e-g),1024<b&&(Bf(c,g,{}),d|=256,b=1023),d=d&-2095105|(b&1023)<<11)}}Ze(a,d);return a}
function Bf(a,b,c){for(var d=1023+b,e=a.length,f=d;f<e;f++){var g=a[f];null!=g&&g!==c&&(c[f-b]=g)}a.length=d+1;a[d]=c}
;function Cf(a,b){return Df(b)}
function Df(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a&&!Array.isArray(a)){if(Pe(a))return Le(a);if(a instanceof Te){var b=a.value_;return null==b?"":"string"===typeof b?b:a.value_=Le(b)}}}return a}
;function Ef(a,b,c){a=Ue(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function Ff(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&Ye(a)&1?void 0:f&&Ye(a)&2?a:Gf(a,b,c,void 0!==d,e,f);else if(hf(a)){var g={},h;for(h in a)g[h]=Ff(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function Gf(a,b,c,d,e,f){var g=d||c?Ye(a):0;d=d?!!(g&32):void 0;a=Ue(a);for(var h=0;h<a.length;h++)a[h]=Ff(a[h],b,c,d,e,f);c&&c(g,a);return a}
function Hf(a){return a.Oc===gf?a.toJSON():Df(a)}
;function If(a,b,c){c=void 0===c?ef:c;if(null!=a){if(Je&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=Ye(a);return d&2?a:!b||d&68||!(d&32||0===d)?Gf(a,If,d&4?ef:c,!0,!1,!0):(Ze(a,d|34),a)}a.Oc===gf&&(b=a.A,c=af(b),a=c&2?a:zf(a.constructor,Jf(b,c,!0)));return a}}
function Jf(a,b,c){var d=c||b&2?ef:df,e=!!(b&32);a=Ef(a,b,function(f){return If(f,e,d)});
We(a,32|(c?2:0));return a}
function Kf(a){var b=a.A,c=af(b);return c&2?zf(a.constructor,Jf(b,c,!1)):a}
;function Lf(a,b){a=a.A;return Mf(a,af(a),b)}
function Mf(a,b,c,d){if(-1===c)return null;if(c>=ff(b)){if(b&256)return a[a.length-1][c]}else{var e=a.length;if(d&&b&256&&(d=a[e-1][c],null!=d))return d;b=c+(+!!(b&512)-1);if(b<e)return a[b]}}
function J(a,b,c,d){var e=a.A,f=af(e);mf(f);Nf(e,f,b,c,d);return a}
function Nf(a,b,c,d,e){hf(d);var f=ff(b);if(c>=f||e){e=b;if(b&256)f=a[a.length-1];else{if(null==d)return;f=a[f+(+!!(b&512)-1)]={};e|=256}f[c]=d;e!==b&&Ze(a,e)}else a[c+(+!!(b&512)-1)]=d,b&256&&(a=a[a.length-1],c in a&&delete a[c])}
function Of(a){return void 0!==Pf(a,Qf,11,!1)}
function Rf(a,b,c,d){a=a.A;var e=af(a);mf(e);for(var f=0,g=0;g<c.length;g++){var h=c[g];null!=Mf(a,e,h)&&(0!==f&&Nf(a,e,f),f=h)}(c=f)&&c!==b&&null!=d&&Nf(a,e,c);Nf(a,e,b,d)}
function Pf(a,b,c,d){a=a.A;var e=af(a),f=Mf(a,e,c,d);b=xf(f,b,e);b!==f&&null!=b&&Nf(a,e,c,b,d);return b}
function Sf(a,b,c,d){d=void 0===d?!1:d;b=Pf(a,b,c,d);if(null==b)return b;a=a.A;var e=af(a);if(!(e&2)){var f=Kf(b);f!==b&&(b=f,Nf(a,e,c,b,d))}return b}
function Tf(a,b,c,d){null!=d?wf(d,b):d=void 0;return J(a,c,d)}
function Uf(a,b,c,d){var e=a.A,f=af(e);mf(f);if(null!=d){for(var g=!!d.length,h=0;h<d.length;h++){var k=d[h];wf(k,b);g=g&&!(Ye(k.A)&2)}b=Ye(d);h=b|1;h=(g?h|8:h&-9)|4;h!=b&&(d=bf(d,h))}null==d&&(d=void 0);Nf(e,f,c,d);return a}
function Vf(a,b){a=Lf(a,b);var c;null==a?c=a:pf(a)?"number"===typeof a?c=uf(a):c=tf(a):c=void 0;return c}
function Wf(a){a=Lf(a,1);a=null==a?a:pf(a)?"string"===typeof a?tf(a):uf(a):void 0;return a}
function Xf(){var a=new Yf;return J(a,1,1)}
;function Zf(a,b,c){this.A=Af(a,b,c)}
m=Zf.prototype;m.toJSON=function(){if(jf)var a=$f(this,this.A,!1);else a=Gf(this.A,Hf,void 0,void 0,!1,!1),a=$f(this,a,!0);return a};
m.serialize=function(){jf=!0;try{return JSON.stringify(this.toJSON(),Cf)}finally{jf=!1}};
m.clone=function(){var a=this.A,b=af(a);return zf(this.constructor,Jf(a,b,!1))};
m.Oc=gf;m.toString=function(){return $f(this,this.A,!1).toString()};
function $f(a,b,c){var d=a.constructor.Va,e=af(c?a.A:b),f=ff(e);e=!1;if(d){if(!c){b=Ue(b);var g;if(b.length&&hf(g=b[b.length-1]))for(e=0;e<d.length;e++)if(d[e]>=f){Object.assign(b[b.length-1]={},g);break}e=!0}g=b;c=!c;f=af(a.A);a=ff(f);f=+!!(f&512)-1;for(var h,k,l=0;l<d.length;l++)if(k=d[l],k<a){k+=f;var n=g[k];null==n?g[k]=c?kf:cf([]):c&&n!==kf&&Xe(n)}else h||(n=void 0,g.length&&hf(n=g[g.length-1])?h=n:g.push(h={})),n=h[k],null==h[k]?h[k]=c?kf:cf([]):c&&n!==kf&&Xe(n)}d=b.length;if(!d)return b;var r;
if(hf(h=b[d-1])){a:{var t=h;g={};c=!1;for(var p in t)a=t[p],Array.isArray(a)&&a!=a&&(c=!0),null!=a?g[p]=a:c=!0;if(c){for(var x in g){t=g;break a}t=null}}t!=h&&(r=!0);d--}for(;0<d;d--){h=b[d-1];if(null!=h)break;var y=!0}if(!r&&!y)return b;var z;e?z=b:z=Array.prototype.slice.call(b,0,d);b=z;e&&(b.length=d);t&&b.push(t);return b}
;function ag(a){this.A=Af(a)}
w(ag,Zf);var bg=[1,2,3];function cg(a){this.A=Af(a)}
w(cg,Zf);var dg=[1,2,3];function eg(a){this.A=Af(a)}
w(eg,Zf);eg.Va=[1];function fg(a){this.A=Af(a)}
w(fg,Zf);fg.Va=[3,6,4];function gg(a){this.A=Af(a)}
w(gg,Zf);gg.Va=[1];function hg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function ig(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(r){for(var t=g,p=0;64>p;p+=4)t[p/4]=r[p]<<24|r[p+1]<<16|r[p+2]<<8|r[p+3];for(p=16;80>p;p++)r=t[p-3]^t[p-8]^t[p-14]^t[p-16],t[p]=(r<<1|r>>>31)&4294967295;r=e[0];var x=e[1],y=e[2],z=e[3],H=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var I=z^x&(y^z);var M=1518500249}else I=x^y^z,M=1859775393;else 60>p?(I=x&y|z&(x|y),M=2400959708):(I=x^y^z,M=3395469782);I=((r<<5|r>>>27)&4294967295)+I+H+M+t[p]&4294967295;H=z;z=y;y=(x<<30|x>>>2)&4294967295;x=r;r=I}e[0]=e[0]+r&4294967295;e[1]=e[1]+x&4294967295;e[2]=
e[2]+y&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+H&4294967295}
function c(r,t){if("string"===typeof r){r=unescape(encodeURIComponent(r));for(var p=[],x=0,y=r.length;x<y;++x)p.push(r.charCodeAt(x));r=p}t||(t=r.length);p=0;if(0==l)for(;p+64<t;)b(r.slice(p,p+64)),p+=64,n+=64;for(;p<t;)if(f[l++]=r[p++],n++,64==l)for(l=0,b(f);p+64<t;)b(r.slice(p,p+64)),p+=64,n+=64}
function d(){var r=[],t=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=t&255,t>>>=8;b(f);for(p=t=0;5>p;p++)for(var x=24;0<=x;x-=8)r[t++]=e[p]>>x&255;return r}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,be:function(){for(var r=d(),t="",p=0;p<r.length;p++)t+="0123456789ABCDEF".charAt(Math.floor(r[p]/16))+"0123456789ABCDEF".charAt(r[p]%16);return t}}}
;function jg(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,kg(hg(d),a,c||null)].join(" "):null}
function kg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],db(d,function(h){e.push(h)}),lg(e.join(" "));
var f=[],g=[];db(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];db(d,function(h){e.push(h)});
a=lg(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function lg(a){var b=ig();b.update(a);return b.be().toLowerCase()}
;var mg={};function ng(a){this.h=a||{cookie:""}}
m=ng.prototype;m.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{ic:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.eg;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ic}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Gb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{ic:0,path:b,domain:c});return d};
m.Hc=function(){return og(this).keys};
m.isEmpty=function(){return!this.h.cookie};
m.clear=function(){for(var a=og(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function og(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Gb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var pg=new ng("undefined"==typeof document?null:document);function qg(a){return!!mg.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function rg(a){a=void 0===a?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;qg(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if("undefined"!==typeof document){var c=new ng(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID")||c.get("OSID");qg(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function sg(a,b,c,d){(a=C[a])||"undefined"===typeof document||(a=(new ng(document)).get(b));return a?jg(a,c,d):null}
function tg(a,b){b=void 0===b?!1:b;var c=hg(String(C.location.href)),d=[];if(rg(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?C.__SAPISID:C.__APISID;e||"undefined"===typeof document||(e=new ng(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?jg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&qg(b)&&((b=sg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=sg("__3PSAPISID","__Secure-3PAPISID",
"SAPISID3PHASH",a))&&d.push(a))}return 0==d.length?null:d.join(" ")}
;function ug(a){this.A=Af(a)}
w(ug,Zf);ug.Va=[2];function vg(a){this.A=Af(a)}
w(vg,Zf);function wg(a){this.A=Af(a)}
w(wg,Zf);function xg(a){this.h=this.i=this.j=a}
xg.prototype.reset=function(){this.h=this.i=this.j};
xg.prototype.getValue=function(){return this.i};function yg(a){this.A=Af(a)}
w(yg,Zf);function zg(a){this.A=Af(a)}
w(zg,Zf);zg.Va=[1];function Qf(a){this.A=Af(a)}
w(Qf,Zf);var Ag=["platform","platformVersion","architecture","model","uaFullVersion"];new zg;function Yf(a){this.A=Af(a)}
w(Yf,Zf);function Bg(a){this.A=Af(a)}
w(Bg,Zf);function Cg(a){this.A=Af(a,34)}
w(Cg,Zf);Cg.Va=[3,20,27];function Dg(a){this.A=Af(a,19)}
w(Dg,Zf);Dg.Va=[3,5];function Eg(a){this.A=Af(a,6)}
w(Eg,Zf);var Gg=function(a){return function(b){if(null==b||""==b)b=new a;else{b=JSON.parse(b);if(!Array.isArray(b))throw Error(void 0);We(b,32);b=zf(a,b)}return b}}(Eg);
Eg.Va=[5];function Hg(a){this.A=Af(a)}
w(Hg,Zf);var Ig;Ig=new function(a,b,c){this.h=a;this.fieldName=b;this.ctor=c;this.isRepeated=0;this.i=Sf;this.defaultValue=void 0}(175237375,{Vf:0},Hg);function Jg(a){G.call(this);var b=this;this.componentId="";this.i=[];this.ea="";this.ma=this.Y=-1;this.da=!1;this.D=this.experimentIds=null;this.s=this.l=0;this.sa=1;this.timeoutMillis=0;this.R=!1;this.logSource=a.logSource;this.vb=a.vb||function(){};
this.j=new Kg(a.logSource,a.zb);this.network=a.network;this.Gb=a.Gb||null;this.bufferSize=1E3;this.Fa=Va(zd,0,1);this.W=a.jf||null;this.sessionIndex=a.sessionIndex||null;this.Nb=a.Nb||!1;this.pageId=a.pageId||null;this.logger=null;this.withCredentials=!a.ld;this.zb=a.zb||!1;var c=Xf();Lg(this.j,c);this.m=new xg(1E4);this.h=new le(this.m.getValue());xc(this,this.h);a=Mg(this,a.dd);jd(this.h,"tick",a,!1,this);this.S=new le(6E5);xc(this,this.S);jd(this.S,"tick",a,!1,this);this.Nb||this.S.start();this.zb||
(jd(document,"visibilitychange",function(){"hidden"===document.visibilityState&&b.Cc()}),jd(document,"pagehide",this.Cc,!1,this))}
w(Jg,G);function Mg(a,b){return b?function(){b().then(function(){a.flush()})}:function(){a.flush()}}
m=Jg.prototype;m.M=function(){this.Cc();G.prototype.M.call(this)};
function Ng(a){a.W||(a.W=.01>a.Fa()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");return a.W}
function Og(a,b){a.m=new xg(1>b?1:b);a.h.setInterval(a.m.getValue())}
m.log=function(a){a=a.clone();var b=this.sa++;a=J(a,21,sf(b));this.componentId&&J(a,26,vf(this.componentId));if(!Wf(a)){b=a;var c=Date.now().toString();J(b,1,sf(c))}null==Vf(a,15)&&J(a,15,sf(60*(new Date).getTimezoneOffset()));this.experimentIds&&(b=this.experimentIds.clone(),Tf(a,ug,16,b));b=this.i.length-this.bufferSize+1;0<b&&(this.i.splice(0,b),this.l+=b);this.i.push(a);this.Nb||this.h.enabled||this.h.start()};
m.flush=function(a,b){var c=this;if(0===this.i.length)a&&a();else if(this.R)Pg(this.j,3),Qg(this);else{var d=Date.now();if(this.ma>d&&this.Y<d)b&&b("throttled");else{Pg(this.j,1);var e=Rg(this.j,this.i,this.l,this.s,this.Gb);d={};var f=this.vb();f&&(d.Authorization=f);var g=Ng(this);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,g=mc(g,"authuser",this.sessionIndex));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g=mc(g,"pageId",this.pageId));if(f&&this.ea===f)b&&b("stale-auth-token");else{this.i=
[];this.h.enabled&&this.h.stop();this.l=0;var h=e.serialize(),k;this.D&&this.D.isSupported(h.length)&&(k=this.D.compress(h));var l={url:g,body:h,Yd:1,Sc:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},n=function(p){c.m.reset();c.h.setInterval(c.m.getValue());if(p){var x=null;try{var y=JSON.stringify(JSON.parse(p.replace(")]}'\n","")));x=Gg(y)}catch(H){}if(x){p=Number;y="-1";y=void 0===y?"0":y;var z=Wf(x);p=p(null!=z?z:y);0<p&&(c.Y=Date.now(),c.ma=c.Y+p);
x=Ig.ctor?Ig.i(x,Ig.ctor,Ig.h,!0):Ig.i(x,Ig.h,null,!0);if(p=null===x?void 0:x)x=-1,x=void 0===x?0:x,p=rf(Lf(p,1)),x=null!=p?p:x,-1!==x&&(c.da||Og(c,x))}}a&&a();c.s=0},r=function(p,x){var y=e.A,z=af(y),H=!!(z&2);
var I=H?1:2,M=!!(z&2);var N=z&2;var K=Mf(y,z,3);Array.isArray(K)||(K=kf);var V=Ye(K);V&1||cf(K);N?V&2||We(K,34):V&32&&!(V&2)&&$e(K,32);N=K;if(N!==kf&&Ye(N)&4)3!==I&&(M?2===I&&(I=Ye(N),N=Ue(N),Ze(N,I),Nf(y,z,3,N)):(M=Object.isFrozen(N),1===I?M||Object.freeze(N):(I=Ye(N),K=I&-35,M&&(N=Ue(N),I=0,Nf(y,z,3,N)),I!==K&&Ze(N,K)))),y=N;else{K=N;N=!!(z&2);var Z=!!(Ye(K)&2);M=K;!N&&Z&&(K=Ue(K));V=z|(Z?2:0);Z=Z||void 0;for(var ha=0,qa=0;ha<K.length;ha++){var na=xf(K[ha],Cg,V);void 0!==na&&(Z=Z||af(na.A)&2,K[qa++]=
na)}qa<ha&&(K.length=qa);Z=!Z;V=Ye(K);ha=V|5;Z=Z?ha|8:ha&-9;V!=Z&&(K=bf(K,Z));M!==K&&Nf(y,z,3,K);(N&&2!==I||1===I)&&Object.freeze(K);y=K}if(!(H||Ye(y)&8)){for(H=0;H<y.length;H++)z=y[H],I=Kf(z),z!==I&&(y[H]=I);We(y,8)}H=Vf(e,14);z=c.m;z.h=Math.min(3E5,2*z.h);z.i=Math.min(3E5,z.h+Math.round(.2*(Math.random()-.5)*z.h));c.h.setInterval(c.m.getValue());401===p&&f&&(c.ea=f);H&&(c.l+=H);void 0===x&&(x=c.isRetryable(p));x&&(c.i=y.concat(c.i),c.Nb||c.h.enabled||c.h.start());b&&b("net-send-failed",p);++c.s},
t=function(){c.network&&c.network.send(l,n,r)};
k?k.then(function(p){l.Sc["Content-Encoding"]="gzip";l.Sc["Content-Type"]="application/binary";l.body=p;l.Yd=2;t()},function(){t()}):t()}}}};
m.Cc=function(){Sg(this.j,!0);this.flush();Sg(this.j,!1)};
function Qg(a){Tg(a,function(b,c){b=mc(b,"format","json");var d=!1;try{d=window.navigator.sendBeacon(b,c.serialize())}catch(e){}a.R&&!d&&(a.R=!1);return d})}
function Tg(a,b){if(0!==a.i.length){var c=qc(Ng(a),"format");c=kc(c,"auth",a.vb(),"authuser",a.sessionIndex||"0");for(var d=0;10>d&&a.i.length;++d){var e=a.i.slice(0,32),f=Rg(a.j,e,a.l,a.s,a.Gb);if(!b(c,f)){++a.s;break}a.l=0;a.s=0;a.i=a.i.slice(e.length)}a.h.enabled&&a.h.stop()}}
m.isRetryable=function(a){return 500<=a&&600>a||401===a||0===a};
function Kg(a,b){this.zb=b=void 0===b?!1:b;this.uach=this.locale=null;this.h=new Dg;Number.isInteger(a)&&J(this.h,2,a);b||(this.locale=document.documentElement.getAttribute("lang"));Lg(this,new Yf)}
function Lg(a,b){Tf(a.h,Yf,1,b);Lf(b,1)||J(b,1,1);if(!a.zb){b=Ug(a);var c=Lf(b,5);(null==c||"string"===typeof c)&&c||J(b,5,vf(a.locale))}a.uach&&(b=Ug(a),Sf(b,zg,9)||Tf(b,zg,9,a.uach))}
function Pg(a,b){Of(Sf(a.h,Yf,1))&&(a=Vg(a),J(a,1,b))}
function Sg(a,b){Of(Sf(a.h,Yf,1))&&(a=Vg(a),J(a,2,of(b)))}
function Wg(a,b){var c=void 0===c?Ag:c;b(window,c).then(function(d){a.uach=d;d=Ug(a);Tf(d,zg,9,a.uach);return!0}).catch(function(){return!1})}
function Ug(a){a=Sf(a.h,Yf,1);var b=Sf(a,Qf,11);b||(b=new Qf,Tf(a,Qf,11,b));return b}
function Vg(a){a=Ug(a);var b=Sf(a,yg,10);b||(b=new yg,J(b,2,of(!1)),Tf(a,yg,10,b));return b}
function Rg(a,b,c,d,e){c=void 0===c?0:c;d=void 0===d?0:d;if(Of(Sf(a.h,Yf,1))){var f=Vg(a);J(f,3,qf(d))}a=a.h.clone();d=Date.now().toString();a=J(a,4,sf(d));b=Uf(a,Cg,3,b);e&&(a=new vg,e=J(a,13,qf(e)),a=new wg,e=Tf(a,vg,2,e),a=new Bg,e=Tf(a,wg,1,e),Tf(b,Bg,18,e));c&&J(b,14,sf(c));return b}
;function Xg(){}
Xg.prototype.serialize=function(a){var b=[];Yg(this,a,b);return b.join("")};
function Yg(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Yg(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Zg(d,c),c.push(":"),Yg(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Zg(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var $g={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},ah=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Zg(a,b){b.push('"',a.replace(ah,function(c){var d=$g[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),$g[c]=d);return d}),'"')}
;function bh(){}
bh.prototype.h=null;bh.prototype.getOptions=function(){var a;(a=this.h)||(a={},ch(this)&&(a[0]=!0,a[1]=!0),a=this.h=a);return a};var dh;function eh(){}
Xa(eh,bh);function fh(a){return(a=ch(a))?new ActiveXObject(a):new XMLHttpRequest}
function ch(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i}
dh=new eh;function gh(a){ud.call(this);this.headers=new Map;this.S=a||null;this.i=!1;this.R=this.I=null;this.l=this.da="";this.j=this.Y=this.s=this.W=!1;this.m=0;this.D=null;this.Fa="";this.ma=this.sa=!1}
Xa(gh,ud);var hh=/^https?$/i,ih=["POST","PUT"],jh=[];function kh(a,b,c,d,e,f,g){var h=new gh;jh.push(h);b&&h.listen("complete",b);h.h.add("ready",h.ae,!0,void 0,void 0);f&&(h.m=Math.max(0,f));g&&(h.sa=g);h.send(a,c,d,e)}
m=gh.prototype;m.ae=function(){this.dispose();ib(jh,this)};
m.send=function(a,b,c,d){if(this.I)throw Error("[goog.net.XhrIo] Object is active with another request="+this.da+"; newUri="+a);b=b?b.toUpperCase():"GET";this.da=a;this.l="";this.W=!1;this.i=!0;this.I=this.S?fh(this.S):fh(dh);this.R=this.S?this.S.getOptions():dh.getOptions();this.I.onreadystatechange=Ua(this.xd,this);try{this.getStatus(),this.Y=!0,this.I.open(b,String(a),!0),this.Y=!1}catch(g){this.getStatus();lh(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,
d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=v(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(0<=cb(ih,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=v(c);for(d=b.next();!d.done;d=b.next())c=v(d.value),d=c.next().value,c=c.next().value,this.I.setRequestHeader(d,c);this.Fa&&(this.I.responseType=this.Fa);"withCredentials"in this.I&&this.I.withCredentials!==this.sa&&(this.I.withCredentials=this.sa);try{mh(this),0<this.m&&(this.ma=nh(this.I),this.getStatus(),this.ma?(this.I.timeout=this.m,this.I.ontimeout=Ua(this.Ld,
this)):this.D=me(this.Ld,this.m,this)),this.getStatus(),this.s=!0,this.I.send(a),this.s=!1}catch(g){this.getStatus(),lh(this,g)}};
function nh(a){return Jc&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
m.Ld=function(){"undefined"!=typeof La&&this.I&&(this.l="Timed out after "+this.m+"ms, aborting",this.getStatus(),vd(this,"timeout"),this.abort(8))};
function lh(a,b){a.i=!1;a.I&&(a.j=!0,a.I.abort(),a.j=!1);a.l=b;oh(a);ph(a)}
function oh(a){a.W||(a.W=!0,vd(a,"complete"),vd(a,"error"))}
m.abort=function(){this.I&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.I.abort(),this.j=!1,vd(this,"complete"),vd(this,"abort"),ph(this))};
m.M=function(){this.I&&(this.i&&(this.i=!1,this.j=!0,this.I.abort(),this.j=!1),ph(this,!0));gh.Aa.M.call(this)};
m.xd=function(){this.Z()||(this.Y||this.s||this.j?qh(this):this.Fe())};
m.Fe=function(){qh(this)};
function qh(a){if(a.i&&"undefined"!=typeof La)if(a.R[1]&&4==rh(a)&&2==a.getStatus())a.getStatus();else if(a.s&&4==rh(a))me(a.xd,0,a);else if(vd(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(sh(a))vd(a,"complete"),vd(a,"success");else{try{var b=2<rh(a)?a.I.statusText:""}catch(c){b=""}a.l=b+" ["+a.getStatus()+"]";oh(a)}}finally{ph(a)}}}
function ph(a,b){if(a.I){mh(a);var c=a.I,d=a.R[0]?function(){}:null;
a.I=null;a.R=null;b||vd(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function mh(a){a.I&&a.ma&&(a.I.ontimeout=null);a.D&&(C.clearTimeout(a.D),a.D=null)}
m.isActive=function(){return!!this.I};
m.isComplete=function(){return 4==rh(this)};
function sh(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=bc(1,String(a.da)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!hh.test(a?a.toLowerCase():"");c=b}return c}
function rh(a){return a.I?a.I.readyState:0}
m.getStatus=function(){try{return 2<rh(this)?this.I.status:-1}catch(a){return-1}};
m.getLastError=function(){return"string"===typeof this.l?this.l:String(this.l)};function th(){}
th.prototype.send=function(a,b,c){b=void 0===b?function(){}:b;
c=void 0===c?function(){}:c;
kh(a.url,function(d){d=d.target;if(sh(d)){try{var e=d.I?d.I.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Sc,a.timeoutMillis,a.withCredentials)};function uh(a,b){G.call(this);this.logSource=a;this.sessionIndex=b;this.i="https://play.google.com/log?format=json&hasfast=true";this.j=!1;this.componentId="";this.network=new th}
w(uh,G);uh.prototype.ld=function(){this.W=!0;return this};function vh(a,b,c,d,e,f){a=void 0===a?-1:a;b=void 0===b?"":b;c=void 0===c?"":c;d=void 0===d?!1:d;e=void 0===e?"":e;G.call(this);f?a=f:(a=new uh(a,"0"),a.componentId=b,xc(this,a),""!=c&&(a.i=c),d&&(a.j=!0),e&&(a.h=e),b=new Jg({logSource:a.logSource,vb:a.vb?a.vb:tg,sessionIndex:a.sessionIndex,jf:a.i,zb:a.j,Nb:!1,ld:a.W,pageId:a.pageId,dd:a.dd,network:a.network?a.network:void 0}),xc(a,b),a.s&&Lg(b.j,a.s),a.h&&(c=a.h,d=Ug(b.j),J(d,7,vf(c))),a.m&&(b.D=a.m),a.componentId&&(b.componentId=a.componentId),
a.Gb&&(b.Gb=a.Gb),a.l&&((c=a.l)?(b.experimentIds||(b.experimentIds=new ug),c=c.serialize(),J(b.experimentIds,4,vf(c))):b.experimentIds&&J(b.experimentIds,4,void 0,!1)),a.R&&(e=a.R,b.experimentIds||(b.experimentIds=new ug),c=b.experimentIds.A,d=af(c),mf(d),e=null==e?kf:Xe(e),Nf(c,d,2,e)),a.D&&(c=a.D,b.da=!0,Og(b,c)),a.S&&Wg(b.j,a.S),a=b);this.h=a}
w(vh,G);
vh.prototype.flush=function(a){var b=a||[];if(b.length){a=new gg;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=e;var g=new fg;g=J(g,1,vf(f.i));for(var h=f,k=[],l=0;l<h.h.length;l++)k.push(h.h[l].tb);h=g.A;l=af(h);mf(l);if(null==k)Nf(h,l,3);else{if(!(Ye(k)&4)){Object.isFrozen(k)&&(k=Ue(k));for(var n=0;n<k.length;n++){var r=k,t=n,p=k[n];if("string"!==typeof p)throw Error();r[t]=p}Ze(k,5)}Nf(h,l,3,k)}k=[];h=[];l=v(f.rb.keys());for(n=l.next();!n.done;n=l.next())h.push(n.value.split(","));for(l=0;l<h.length;l++){n=
h[l];r=f.l;t=f.Ec(n)||[];p=[];for(var x=0;x<t.length;x++){var y=t[x],z=y&&y.jd;y=new cg;switch(r){case 3:var H=Number(z);Number.isFinite(H)&&Rf(y,1,dg,sf(H));break;case 2:H=y;z=Number(z);if(null!=z&&"number"!==typeof z)throw Error("Value of float/double field must be a number|null|undefined, found "+typeof z+": "+z);Rf(H,2,dg,z)}p.push(y)}r=p;for(t=0;t<r.length;t++){p=r[t];x=new eg;p=Tf(x,cg,2,p);x=n;y=[];H=f;z=[];for(var I=0;I<H.h.length;I++)z.push(H.h[I].ub);H=z;for(z=0;z<H.length;z++){var M=H[z],
N=x[z];I=new ag;switch(M){case 3:Rf(I,1,bg,vf(String(N)));break;case 2:M=Number(N);Number.isFinite(M)&&Rf(I,2,bg,qf(M));break;case 1:Rf(I,3,bg,of("true"==N))}y.push(I)}Uf(p,ag,1,y);k.push(p)}}Uf(g,eg,4,k);c.push(g);e.clear()}Uf(a,fg,1,c);b=this.h;a instanceof Cg?b.log(a):(c=new Cg,a=a.serialize(),a=J(c,8,vf(a)),b.log(a));this.h.flush()}};function wh(a){this.s=xh();this.m=new vh(1828);this.h=new ne(this.m);this.G=new te(this.h);this.j=new ue(this.h);this.l=new ve(this.h);this.i=new re(this.h);this.Pa=xe(a)}
function xh(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function yh(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function zh(a){function b(p,x){Promise.resolve().then(function(){var y;null!=(y=c.va)&&y.G.record(xh()-y.s,y.Pa);g.resolve({Wd:p,af:x})})}
var c=this;this.h=!1;var d=a.program;var e=a.oe;if(!1!==a.Ke){var f;this.va=null!=(f=a.va)?f:new wh(e)}var g=new yh;this.i=g.promise;if(!C[e]){var h;null!=(h=this.va)&&se(h.i,h.Pa,1,"");var k;null!=(k=this.va)&&k.h.pb()}else if(!C[e].a){var l;null!=(l=this.va)&&se(l.i,l.Pa,2,"");var n;null!=(n=this.va)&&n.h.pb()}try{this.j=v((0,C[e].a)(d,b,!0,a.lg)).next().value,this.Ze=g.promise.then(function(){})}catch(p){var r;
null!=(r=this.va)&&se(r.i,r.Pa,4,p.message);var t;null!=(t=this.va)&&t.h.pb();throw p;}}
zh.prototype.snapshot=function(a){var b=this;if(this.h)throw Error("Already disposed");var c=xh(),d;null!=(d=this.va)&&d.j.h.vc("/client_streamz/bg/fsc",d.Pa);return this.i.then(function(e){var f=e.Wd;return new Promise(function(g){f(function(h){var k;null!=(k=b.va)&&k.l.record(xh()-c,k.Pa);g(h)},[a.kd,
a.bf,a.lf])})})};
zh.prototype.Id=function(a){if(this.h)throw Error("Already disposed");var b=xh(),c;null!=(c=this.va)&&c.j.h.vc("/client_streamz/bg/fsc",c.Pa);a=this.j([a.kd,a.bf,a.lf]);var d;null!=(d=this.va)&&d.l.record(xh()-b,d.Pa);return a};
zh.prototype.dispose=function(){var a;null!=(a=this.va)&&a.h.pb();this.h=!0;this.i.then(function(b){(b=b.af)&&b()})};
zh.prototype.Z=function(){return this.h};var Ah=window;yb("csi.gstatic.com");yb("googleads.g.doubleclick.net");yb("partner.googleadservices.com");yb("pubads.g.doubleclick.net");yb("securepubads.g.doubleclick.net");yb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var Bh;try{new URL("s://g"),Bh=!0}catch(a){Bh=!1}var Ch=Bh;function Dh(a){if(a instanceof Hb)a instanceof Hb&&a.constructor===Hb?a=a.h:(Ma(a),a="type_error:SafeUrl");else{b:if(Ch){try{var b=new URL(a)}catch(c){b="https:";break b}b=b.protocol}else c:{b=document.createElement("a");try{b.href=a}catch(c){b=void 0;break c}b=b.protocol;b=":"===b||""===b?"https:":b}a="javascript:"!==b?a:void 0}return a}
;function Eh(a,b){b=Dh(b);void 0!==b&&(a.href=b)}
;var Fh={};function Gh(){}
function Hh(a){this.h=a}
w(Hh,Gh);Hh.prototype.toString=function(){return this.h};function Ih(a){var b="true".toString(),c=[new Hh(Jh[0].toLowerCase(),Fh)];if(0===c.length)throw Error("");if(c.map(function(d){if(d instanceof Hh)d=d.h;else throw Error("");return d}).every(function(d){return 0!=="data-loaded".indexOf(d)}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function Kh(){throw Error("unknown trace type");}
;var Lh="alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Mh(a,b){if(b instanceof Cb)a.href=Db(b).toString();else{if(-1===Lh.indexOf("stylesheet"))throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=Dh(b);if(void 0===b)return;a.href=b}a.rel="stylesheet"}
;function Nh(a){var b,c,d=null==(c=(b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:c.call(b,"script[nonce]");(b=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",b)}
function Oh(a,b){a.src=Db(b);Nh(a)}
;var Ph=fa([""]),Qh=ia(["\x00"],["\\0"]),Rh=ia(["\n"],["\\n"]),Sh=ia(["\x00"],["\\u0000"]);function Th(a){return-1===a.toString().indexOf("`")}
Th(function(a){return a(Ph)})||Th(function(a){return a(Qh)})||Th(function(a){return a(Rh)})||Th(function(a){return a(Sh)});function Uh(a){this.ye=a}
function Vh(a){return new Uh(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Wh=[Vh("data"),Vh("http"),Vh("https"),Vh("mailto"),Vh("ftp"),new Uh(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function Xh(a){var b=Yh;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Zh(){var a=[];Xh(function(b){a.push(b)});
return a}
var Yh={mf:"allow-forms",nf:"allow-modals",pf:"allow-orientation-lock",qf:"allow-pointer-lock",rf:"allow-popups",sf:"allow-popups-to-escape-sandbox",tf:"allow-presentation",uf:"allow-same-origin",vf:"allow-scripts",wf:"allow-top-navigation",xf:"allow-top-navigation-by-user-activation"},$h=bb(function(){return Zh()});
function ai(){var a=bi(),b={};db($h(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function bi(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function ci(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var di=(new Date).getTime();"undefined"!==typeof TextDecoder&&new TextDecoder;var ei="undefined"!==typeof TextEncoder?new TextEncoder:null,fi=ei?function(a){return ei.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function gi(a){ud.call(this);var b=this;this.s=this.j=0;this.Da=null!=a?a:{na:function(e,f){return setTimeout(e,f)},
oa:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.l=function(){return A(function(e){return e.yield(hi(b),0)})};
window.addEventListener("offline",this.l);window.addEventListener("online",this.l);this.s||ii(this)}
w(gi,ud);function ji(){var a=ki;gi.h||(gi.h=new gi(a));return gi.h}
gi.prototype.dispose=function(){window.removeEventListener("offline",this.l);window.removeEventListener("online",this.l);this.Da.oa(this.s);delete gi.h};
gi.prototype.wa=function(){return this.i};
function ii(a){a.s=a.Da.na(function(){var b;return A(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.v(3):c.yield(hi(a),3):c.yield(hi(a),3);ii(a);c.h=0})},3E4)}
function hi(a,b){return a.m?a.m:a.m=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,za(h,2,3),d&&(a.j=a.Da.na(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.D=[h.j];h.l=0;h.G=0;a.m=void 0;a.j&&(a.Da.oa(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?vd(a,"networkstatus-online"):vd(a,"networkstatus-offline"));c(g);Ba(h);break;case 2:Aa(h),g=!1,h.v(3)}})})}
;function li(){this.data=[];this.h=-1}
li.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
li.prototype.get=function(a){return!!this.data[a]};
function mi(a){-1===a.h&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function ni(a,b){this.h=a[C.Symbol.iterator]();this.i=b}
ni.prototype[Symbol.iterator]=function(){return this};
ni.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function oi(a,b){return new ni(a,b)}
;function pi(){this.blockSize=-1}
;function qi(){this.blockSize=-1;this.blockSize=64;this.h=[];this.m=[];this.G=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
Xa(qi,pi);qi.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function ri(a,b,c){c||(c=0);var d=a.G;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
qi.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.i;d<b;){if(0==f)for(;d<=c;)ri(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){ri(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){ri(this,e);f=0;break}}this.i=f;this.l+=b}};
qi.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;ri(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function si(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function ti(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function ui(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:si(a).match(/\S+/g)||[],b=0<=cb(a,b));return b}
function vi(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):ui(a,"inverted-hdpi")&&ti(a,Array.prototype.filter.call(a.classList?a.classList:si(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function wi(){}
wi.prototype.next=function(){return xi};
var xi={done:!0,value:void 0};function yi(a){return{value:a,done:!1}}
wi.prototype.Ga=function(){return this};function zi(a){if(a instanceof Ai||a instanceof Bi||a instanceof Ci)return a;if("function"==typeof a.next)return new Ai(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Ai(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Ga)return new Ai(function(){return a.Ga()});
throw Error("Not an iterator or iterable.");}
function Ai(a){this.i=a}
Ai.prototype.Ga=function(){return new Bi(this.i())};
Ai.prototype[Symbol.iterator]=function(){return new Ci(this.i())};
Ai.prototype.h=function(){return new Ci(this.i())};
function Bi(a){this.i=a}
w(Bi,wi);Bi.prototype.next=function(){return this.i.next()};
Bi.prototype[Symbol.iterator]=function(){return new Ci(this.i)};
Bi.prototype.h=function(){return new Ci(this.i)};
function Ci(a){Ai.call(this,function(){return a});
this.j=a}
w(Ci,Ai);Ci.prototype.next=function(){return this.j.next()};function Di(a,b){this.i={};this.h=[];this.Xa=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Di)for(c=a.Hc(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
m=Di.prototype;m.Hc=function(){Ei(this);return this.h.concat()};
m.has=function(a){return Fi(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Gi;Ei(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Gi(a,b){return a===b}
m.isEmpty=function(){return 0==this.size};
m.clear=function(){this.i={};this.Xa=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return Fi(this.i,a)?(delete this.i[a],--this.size,this.Xa++,this.h.length>2*this.size&&Ei(this),!0):!1};
function Ei(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Fi(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Fi(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return Fi(this.i,a)?this.i[a]:b};
m.set=function(a,b){Fi(this.i,a)||(this.size+=1,this.h.push(a),this.Xa++);this.i[a]=b};
m.forEach=function(a,b){for(var c=this.Hc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new Di(this)};
m.keys=function(){return zi(this.Ga(!0)).h()};
m.values=function(){return zi(this.Ga(!1)).h()};
m.entries=function(){var a=this;return oi(this.keys(),function(b){return[b,a.get(b)]})};
m.Ga=function(a){Ei(this);var b=0,c=this.Xa,d=this,e=new wi;e.next=function(){if(c!=d.Xa)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return xi;var f=d.h[b++];return yi(a?f:d.i[f])};
return e};
function Fi(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function L(a){G.call(this);this.m=1;this.j=[];this.l=0;this.h=[];this.i={};this.s=!!a}
Xa(L,G);m=L.prototype;m.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.m;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.m=e+3;d.push(e);return e};
m.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.Ib(a)}return!1};
m.Ib=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.l?(this.j.push(a),this.h[a+1]=function(){}):(c&&ib(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
m.Za=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.s)for(e=0;e<c.length;e++){var g=c[e];Hi(this.h[g+1],this.h[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f&&!this.Z();e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.Ib(c)}}return 0!=e}return!1};
function Hi(a,b,c){Od(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.Ib,this),delete this.i[a])}else this.h.length=0,this.i={}};
m.M=function(){L.Aa.M.call(this);this.clear();this.j.length=0};function Ii(a){this.h=a}
Ii.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,(new Xg).serialize(b))};
Ii.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Ii.prototype.remove=function(a){this.h.remove(a)};function Ji(a){this.h=a}
Xa(Ji,Ii);function Ki(a){this.data=a}
function Li(a){return void 0===a||a instanceof Ki?a:new Ki(a)}
Ji.prototype.set=function(a,b){Ji.Aa.set.call(this,a,Li(b))};
Ji.prototype.i=function(a){a=Ji.Aa.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ji.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Mi(a){this.h=a}
Xa(Mi,Ji);Mi.prototype.set=function(a,b,c){if(b=Li(b)){if(c){if(c<Wa()){Mi.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Wa()}Mi.Aa.set.call(this,a,b)};
Mi.prototype.i=function(a){var b=Mi.Aa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Wa()||c&&c>Wa())Mi.prototype.remove.call(this,a);else return b}};function Ni(){}
;function Oi(){}
Xa(Oi,Ni);Oi.prototype[Symbol.iterator]=function(){return zi(this.Ga(!0)).h()};
Oi.prototype.clear=function(){var a=Array.from(this);a=v(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Pi(a){this.h=a}
Xa(Pi,Oi);m=Pi.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.Ga=function(a){var b=0,c=this.h,d=new wi;d.next=function(){if(b>=c.length)return xi;var e=c.key(b++);if(a)return yi(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return yi(e)};
return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function Qi(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
Xa(Qi,Pi);function Ri(a,b){this.i=a;this.h=null;var c;if(c=Jc)c=!(9<=Number(Xc));if(c){Si||(Si=new Di);this.h=Si.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Si.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
Xa(Ri,Oi);var Ti={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Si=null;function Ui(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Ti[b]})}
m=Ri.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(Ui(a),b);Vi(this)};
m.get=function(a){a=this.h.getAttribute(Ui(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(Ui(a));Vi(this)};
m.Ga=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new wi;d.next=function(){if(b>=c.length)return xi;var e=c[b++];if(a)return yi(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return yi(e)};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Vi(this)};
function Vi(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Wi(a,b){this.i=a;this.h=b+"::"}
Xa(Wi,Oi);Wi.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Wi.prototype.get=function(a){return this.i.get(this.h+a)};
Wi.prototype.remove=function(a){this.i.remove(this.h+a)};
Wi.prototype.Ga=function(a){var b=this.i[Symbol.iterator](),c=this,d=new wi;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return yi(a?e.slice(c.h.length):c.i.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var O={},Xi="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;O.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
O.Vc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Yi={qb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
nd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Zi={qb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
nd:function(a){return[].concat.apply([],a)}};
O.Ye=function(){Xi?(O.ob=Uint8Array,O.Ia=Uint16Array,O.Rd=Int32Array,O.assign(O,Yi)):(O.ob=Array,O.Ia=Array,O.Rd=Array,O.assign(O,Zi))};
O.Ye();var $i=!0;try{new Uint8Array(1)}catch(a){$i=!1}
function aj(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new O.ob(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var bj={};bj=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var cj={},dj,ej=[],fj=0;256>fj;fj++){dj=fj;for(var gj=0;8>gj;gj++)dj=dj&1?3988292384^dj>>>1:dj>>>1;ej[fj]=dj}cj=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^ej[(a^b[d])&255];return a^-1};var hj={};hj={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function ij(a){for(var b=a.length;0<=--b;)a[b]=0}
var jj=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],kj=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],lj=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],mj=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],nj=Array(576);ij(nj);var oj=Array(60);ij(oj);var pj=Array(512);ij(pj);var qj=Array(256);ij(qj);var rj=Array(29);ij(rj);var sj=Array(30);ij(sj);function tj(a,b,c,d,e){this.Jd=a;this.je=b;this.he=c;this.ce=d;this.Ce=e;this.rd=a&&a.length}
var uj,vj,wj;function xj(a,b){this.md=a;this.Db=0;this.Wa=b}
function yj(a,b){a.V[a.pending++]=b&255;a.V[a.pending++]=b>>>8&255}
function zj(a,b,c){a.fa>16-c?(a.ka|=b<<a.fa&65535,yj(a,a.ka),a.ka=b>>16-a.fa,a.fa+=c-16):(a.ka|=b<<a.fa&65535,a.fa+=c)}
function Aj(a,b,c){zj(a,c[2*b],c[2*b+1])}
function Bj(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function Cj(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=Bj(d[e]++,e))}
function Dj(a){var b;for(b=0;286>b;b++)a.qa[2*b]=0;for(b=0;30>b;b++)a.eb[2*b]=0;for(b=0;19>b;b++)a.ga[2*b]=0;a.qa[512]=1;a.Oa=a.Hb=0;a.ya=a.matches=0}
function Ej(a){8<a.fa?yj(a,a.ka):0<a.fa&&(a.V[a.pending++]=a.ka);a.ka=0;a.fa=0}
function Fj(a,b,c){Ej(a);yj(a,c);yj(a,~c);O.qb(a.V,a.window,b,c,a.pending);a.pending+=c}
function Gj(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Hj(a,b,c){for(var d=a.X[c],e=c<<1;e<=a.Ma;){e<a.Ma&&Gj(b,a.X[e+1],a.X[e],a.depth)&&e++;if(Gj(b,d,a.X[e],a.depth))break;a.X[c]=a.X[e];c=e;e<<=1}a.X[c]=d}
function Ij(a,b,c){var d=0;if(0!==a.ya){do{var e=a.V[a.Mb+2*d]<<8|a.V[a.Mb+2*d+1];var f=a.V[a.Lc+d];d++;if(0===e)Aj(a,f,b);else{var g=qj[f];Aj(a,g+256+1,b);var h=jj[g];0!==h&&(f-=rj[g],zj(a,f,h));e--;g=256>e?pj[e]:pj[256+(e>>>7)];Aj(a,g,c);h=kj[g];0!==h&&(e-=sj[g],zj(a,e,h))}}while(d<a.ya)}Aj(a,256,b)}
function Jj(a,b){var c=b.md,d=b.Wa.Jd,e=b.Wa.rd,f=b.Wa.ce,g,h=-1;a.Ma=0;a.xb=573;for(g=0;g<f;g++)0!==c[2*g]?(a.X[++a.Ma]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.Ma;){var k=a.X[++a.Ma]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.Oa--;e&&(a.Hb-=d[2*k+1])}b.Db=h;for(g=a.Ma>>1;1<=g;g--)Hj(a,c,g);k=f;do g=a.X[1],a.X[1]=a.X[a.Ma--],Hj(a,c,1),d=a.X[1],a.X[--a.xb]=g,a.X[--a.xb]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.X[1]=k++,Hj(a,c,1);while(2<=a.Ma);a.X[--a.xb]=
a.X[1];g=b.md;k=b.Db;d=b.Wa.Jd;e=b.Wa.rd;f=b.Wa.je;var l=b.Wa.he,n=b.Wa.Ce,r,t=0;for(r=0;15>=r;r++)a.Ja[r]=0;g[2*a.X[a.xb]+1]=0;for(b=a.xb+1;573>b;b++){var p=a.X[b];r=g[2*g[2*p+1]+1]+1;r>n&&(r=n,t++);g[2*p+1]=r;if(!(p>k)){a.Ja[r]++;var x=0;p>=l&&(x=f[p-l]);var y=g[2*p];a.Oa+=y*(r+x);e&&(a.Hb+=y*(d[2*p+1]+x))}}if(0!==t){do{for(r=n-1;0===a.Ja[r];)r--;a.Ja[r]--;a.Ja[r+1]+=2;a.Ja[n]--;t-=2}while(0<t);for(r=n;0!==r;r--)for(p=a.Ja[r];0!==p;)d=a.X[--b],d>k||(g[2*d+1]!==r&&(a.Oa+=(r-g[2*d+1])*g[2*d],g[2*
d+1]=r),p--)}Cj(c,h,a.Ja)}
function Kj(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.ga[2*l]+=g:0!==l?(l!==e&&a.ga[2*l]++,a.ga[32]++):10>=g?a.ga[34]++:a.ga[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Lj(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do Aj(a,l,a.ga);while(0!==--g)}else 0!==l?(l!==e&&(Aj(a,l,a.ga),g--),Aj(a,16,a.ga),zj(a,g-3,2)):10>=g?(Aj(a,17,a.ga),zj(a,g-3,3)):(Aj(a,18,a.ga),zj(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Mj(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.qa[2*c])return 0;if(0!==a.qa[18]||0!==a.qa[20]||0!==a.qa[26])return 1;for(c=32;256>c;c++)if(0!==a.qa[2*c])return 1;return 0}
var Nj=!1;function Oj(a,b,c){a.V[a.Mb+2*a.ya]=b>>>8&255;a.V[a.Mb+2*a.ya+1]=b&255;a.V[a.Lc+a.ya]=c&255;a.ya++;0===b?a.qa[2*c]++:(a.matches++,b--,a.qa[2*(qj[c]+256+1)]++,a.eb[2*(256>b?pj[b]:pj[256+(b>>>7)])]++);return a.ya===a.Pb-1}
;function Pj(a,b){a.msg=hj[b];return b}
function Qj(a){for(var b=a.length;0<=--b;)a[b]=0}
function Rj(a){var b=a.state,c=b.pending;c>a.K&&(c=a.K);0!==c&&(O.qb(a.output,b.V,b.Sb,c,a.Eb),a.Eb+=c,b.Sb+=c,a.Wc+=c,a.K-=c,b.pending-=c,0===b.pending&&(b.Sb=0))}
function Sj(a,b){var c=0<=a.ta?a.ta:-1,d=a.o-a.ta,e=0;if(0<a.level){2===a.H.Bc&&(a.H.Bc=Mj(a));Jj(a,a.hc);Jj(a,a.cc);Kj(a,a.qa,a.hc.Db);Kj(a,a.eb,a.cc.Db);Jj(a,a.ed);for(e=18;3<=e&&0===a.ga[2*mj[e]+1];e--);a.Oa+=3*(e+1)+14;var f=a.Oa+3+7>>>3;var g=a.Hb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)zj(a,b?1:0,3),Fj(a,c,d);else if(4===a.strategy||g===f)zj(a,2+(b?1:0),3),Ij(a,nj,oj);else{zj(a,4+(b?1:0),3);c=a.hc.Db+1;d=a.cc.Db+1;e+=1;zj(a,c-257,5);zj(a,d-1,5);zj(a,e-4,4);for(f=0;f<e;f++)zj(a,a.ga[2*
mj[f]+1],3);Lj(a,a.qa,c-1);Lj(a,a.eb,d-1);Ij(a,a.qa,a.eb)}Dj(a);b&&Ej(a);a.ta=a.o;Rj(a.H)}
function P(a,b){a.V[a.pending++]=b}
function Tj(a,b){a.V[a.pending++]=b>>>8&255;a.V[a.pending++]=b&255}
function Uj(a,b){var c=a.ud,d=a.o,e=a.xa,f=a.wd,g=a.o>a.ia-262?a.o-(a.ia-262):0,h=a.window,k=a.Ya,l=a.Ha,n=a.o+258,r=h[d+e-1],t=h[d+e];a.xa>=a.qd&&(c>>=2);f>a.u&&(f=a.u);do{var p=b;if(h[p+e]===t&&h[p+e-1]===r&&h[p]===h[d]&&h[++p]===h[d+1]){d+=2;for(p++;h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&d<n;);p=258-(n-d);d=n-258;if(p>e){a.Cb=b;e=p;if(p>=f)break;r=h[d+e-1];t=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.u?e:a.u}
function Vj(a){var b=a.ia,c;do{var d=a.Pd-a.u-a.o;if(a.o>=b+(b-262)){O.qb(a.window,a.window,b,b,0);a.Cb-=b;a.o-=b;a.ta-=b;var e=c=a.fc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ha[--e],a.Ha[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.H.ja)break;e=a.H;c=a.window;f=a.o+a.u;var g=e.ja;g>d&&(g=d);0===g?c=0:(e.ja-=g,O.qb(c,e.input,e.jb,g,f),1===e.state.wrap?e.F=bj(e.F,c,g,f):2===e.state.wrap&&(e.F=cj(e.F,c,g,f)),e.jb+=g,e.nb+=g,c=g);a.u+=c;if(3<=a.u+a.ra)for(d=a.o-a.ra,a.J=a.window[d],
a.J=(a.J<<a.La^a.window[d+1])&a.Ka;a.ra&&!(a.J=(a.J<<a.La^a.window[d+3-1])&a.Ka,a.Ha[d&a.Ya]=a.head[a.J],a.head[a.J]=d,d++,a.ra--,3>a.u+a.ra););}while(262>a.u&&0!==a.H.ja)}
function Wj(a,b){for(var c;;){if(262>a.u){Vj(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.J=(a.J<<a.La^a.window[a.o+3-1])&a.Ka,c=a.Ha[a.o&a.Ya]=a.head[a.J],a.head[a.J]=a.o);0!==c&&a.o-c<=a.ia-262&&(a.P=Uj(a,c));if(3<=a.P)if(c=Oj(a,a.o-a.Cb,a.P-3),a.u-=a.P,a.P<=a.Mc&&3<=a.u){a.P--;do a.o++,a.J=(a.J<<a.La^a.window[a.o+3-1])&a.Ka,a.Ha[a.o&a.Ya]=a.head[a.J],a.head[a.J]=a.o;while(0!==--a.P);a.o++}else a.o+=a.P,a.P=0,a.J=a.window[a.o],a.J=(a.J<<a.La^a.window[a.o+1])&a.Ka;else c=Oj(a,0,
a.window[a.o]),a.u--,a.o++;if(c&&(Sj(a,!1),0===a.H.K))return 1}a.ra=2>a.o?a.o:2;return 4===b?(Sj(a,!0),0===a.H.K?3:4):a.ya&&(Sj(a,!1),0===a.H.K)?1:2}
function Xj(a,b){for(var c,d;;){if(262>a.u){Vj(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.J=(a.J<<a.La^a.window[a.o+3-1])&a.Ka,c=a.Ha[a.o&a.Ya]=a.head[a.J],a.head[a.J]=a.o);a.xa=a.P;a.zd=a.Cb;a.P=2;0!==c&&a.xa<a.Mc&&a.o-c<=a.ia-262&&(a.P=Uj(a,c),5>=a.P&&(1===a.strategy||3===a.P&&4096<a.o-a.Cb)&&(a.P=2));if(3<=a.xa&&a.P<=a.xa){d=a.o+a.u-3;c=Oj(a,a.o-1-a.zd,a.xa-3);a.u-=a.xa-1;a.xa-=2;do++a.o<=d&&(a.J=(a.J<<a.La^a.window[a.o+3-1])&a.Ka,a.Ha[a.o&a.Ya]=a.head[a.J],a.head[a.J]=a.o);
while(0!==--a.xa);a.hb=0;a.P=2;a.o++;if(c&&(Sj(a,!1),0===a.H.K))return 1}else if(a.hb){if((c=Oj(a,0,a.window[a.o-1]))&&Sj(a,!1),a.o++,a.u--,0===a.H.K)return 1}else a.hb=1,a.o++,a.u--}a.hb&&(Oj(a,0,a.window[a.o-1]),a.hb=0);a.ra=2>a.o?a.o:2;return 4===b?(Sj(a,!0),0===a.H.K?3:4):a.ya&&(Sj(a,!1),0===a.H.K)?1:2}
function Yj(a,b){for(var c,d,e,f=a.window;;){if(258>=a.u){Vj(a);if(258>=a.u&&0===b)return 1;if(0===a.u)break}a.P=0;if(3<=a.u&&0<a.o&&(d=a.o-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.o+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.P=258-(e-d);a.P>a.u&&(a.P=a.u)}3<=a.P?(c=Oj(a,1,a.P-3),a.u-=a.P,a.o+=a.P,a.P=0):(c=Oj(a,0,a.window[a.o]),a.u--,a.o++);if(c&&(Sj(a,!1),0===a.H.K))return 1}a.ra=0;return 4===b?(Sj(a,!0),0===a.H.K?3:4):
a.ya&&(Sj(a,!1),0===a.H.K)?1:2}
function Zj(a,b){for(var c;;){if(0===a.u&&(Vj(a),0===a.u)){if(0===b)return 1;break}a.P=0;c=Oj(a,0,a.window[a.o]);a.u--;a.o++;if(c&&(Sj(a,!1),0===a.H.K))return 1}a.ra=0;return 4===b?(Sj(a,!0),0===a.H.K?3:4):a.ya&&(Sj(a,!1),0===a.H.K)?1:2}
function ak(a,b,c,d,e){this.pe=a;this.Be=b;this.Ee=c;this.Ae=d;this.le=e}
var bk;bk=[new ak(0,0,0,0,function(a,b){var c=65535;for(c>a.za-5&&(c=a.za-5);;){if(1>=a.u){Vj(a);if(0===a.u&&0===b)return 1;if(0===a.u)break}a.o+=a.u;a.u=0;var d=a.ta+c;if(0===a.o||a.o>=d)if(a.u=a.o-d,a.o=d,Sj(a,!1),0===a.H.K)return 1;if(a.o-a.ta>=a.ia-262&&(Sj(a,!1),0===a.H.K))return 1}a.ra=0;if(4===b)return Sj(a,!0),0===a.H.K?3:4;a.o>a.ta&&Sj(a,!1);return 1}),
new ak(4,4,8,4,Wj),new ak(4,5,16,8,Wj),new ak(4,6,32,32,Wj),new ak(4,4,16,16,Xj),new ak(8,16,32,32,Xj),new ak(8,16,128,128,Xj),new ak(8,32,128,256,Xj),new ak(32,128,258,1024,Xj),new ak(32,258,258,4096,Xj)];
function ck(){this.H=null;this.status=0;this.V=null;this.wrap=this.pending=this.Sb=this.za=0;this.B=null;this.Ba=0;this.method=8;this.Ab=-1;this.Ya=this.Yc=this.ia=0;this.window=null;this.Pd=0;this.head=this.Ha=null;this.wd=this.qd=this.strategy=this.level=this.Mc=this.ud=this.xa=this.u=this.Cb=this.o=this.hb=this.zd=this.P=this.ta=this.La=this.Ka=this.Ic=this.fc=this.J=0;this.qa=new O.Ia(1146);this.eb=new O.Ia(122);this.ga=new O.Ia(78);Qj(this.qa);Qj(this.eb);Qj(this.ga);this.ed=this.cc=this.hc=
null;this.Ja=new O.Ia(16);this.X=new O.Ia(573);Qj(this.X);this.xb=this.Ma=0;this.depth=new O.Ia(573);Qj(this.depth);this.fa=this.ka=this.ra=this.matches=this.Hb=this.Oa=this.Mb=this.ya=this.Pb=this.Lc=0}
function dk(a,b){if(!a||!a.state||5<b||0>b)return a?Pj(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.ja||666===c.status&&4!==b)return Pj(a,0===a.K?-5:-2);c.H=a;var d=c.Ab;c.Ab=b;if(42===c.status)if(2===c.wrap)a.F=0,P(c,31),P(c,139),P(c,8),c.B?(P(c,(c.B.text?1:0)+(c.B.Ta?2:0)+(c.B.Sa?4:0)+(c.B.name?8:0)+(c.B.comment?16:0)),P(c,c.B.time&255),P(c,c.B.time>>8&255),P(c,c.B.time>>16&255),P(c,c.B.time>>24&255),P(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),P(c,c.B.os&255),c.B.Sa&&c.B.Sa.length&&
(P(c,c.B.Sa.length&255),P(c,c.B.Sa.length>>8&255)),c.B.Ta&&(a.F=cj(a.F,c.V,c.pending,0)),c.Ba=0,c.status=69):(P(c,0),P(c,0),P(c,0),P(c,0),P(c,0),P(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),P(c,3),c.status=113);else{var e=8+(c.Yc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.o&&(e|=32);c.status=113;Tj(c,e+(31-e%31));0!==c.o&&(Tj(c,a.F>>>16),Tj(c,a.F&65535));a.F=1}if(69===c.status)if(c.B.Sa){for(e=c.pending;c.Ba<(c.B.Sa.length&65535)&&(c.pending!==c.za||(c.B.Ta&&
c.pending>e&&(a.F=cj(a.F,c.V,c.pending-e,e)),Rj(a),e=c.pending,c.pending!==c.za));)P(c,c.B.Sa[c.Ba]&255),c.Ba++;c.B.Ta&&c.pending>e&&(a.F=cj(a.F,c.V,c.pending-e,e));c.Ba===c.B.Sa.length&&(c.Ba=0,c.status=73)}else c.status=73;if(73===c.status)if(c.B.name){e=c.pending;do{if(c.pending===c.za&&(c.B.Ta&&c.pending>e&&(a.F=cj(a.F,c.V,c.pending-e,e)),Rj(a),e=c.pending,c.pending===c.za)){var f=1;break}f=c.Ba<c.B.name.length?c.B.name.charCodeAt(c.Ba++)&255:0;P(c,f)}while(0!==f);c.B.Ta&&c.pending>e&&(a.F=cj(a.F,
c.V,c.pending-e,e));0===f&&(c.Ba=0,c.status=91)}else c.status=91;if(91===c.status)if(c.B.comment){e=c.pending;do{if(c.pending===c.za&&(c.B.Ta&&c.pending>e&&(a.F=cj(a.F,c.V,c.pending-e,e)),Rj(a),e=c.pending,c.pending===c.za)){f=1;break}f=c.Ba<c.B.comment.length?c.B.comment.charCodeAt(c.Ba++)&255:0;P(c,f)}while(0!==f);c.B.Ta&&c.pending>e&&(a.F=cj(a.F,c.V,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.B.Ta?(c.pending+2>c.za&&Rj(a),c.pending+2<=c.za&&(P(c,a.F&255),P(c,a.F>>
8&255),a.F=0,c.status=113)):c.status=113);if(0!==c.pending){if(Rj(a),0===a.K)return c.Ab=-1,0}else if(0===a.ja&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return Pj(a,-5);if(666===c.status&&0!==a.ja)return Pj(a,-5);if(0!==a.ja||0!==c.u||0!==b&&666!==c.status){d=2===c.strategy?Zj(c,b):3===c.strategy?Yj(c,b):bk[c.level].le(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.K&&(c.Ab=-1),0;if(2===d&&(1===b?(zj(c,2,3),Aj(c,256,nj),16===c.fa?(yj(c,c.ka),c.ka=0,c.fa=0):8<=c.fa&&(c.V[c.pending++]=
c.ka&255,c.ka>>=8,c.fa-=8)):5!==b&&(zj(c,0,3),Fj(c,0,0),3===b&&(Qj(c.head),0===c.u&&(c.o=0,c.ta=0,c.ra=0))),Rj(a),0===a.K))return c.Ab=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(P(c,a.F&255),P(c,a.F>>8&255),P(c,a.F>>16&255),P(c,a.F>>24&255),P(c,a.nb&255),P(c,a.nb>>8&255),P(c,a.nb>>16&255),P(c,a.nb>>24&255)):(Tj(c,a.F>>>16),Tj(c,a.F&65535));Rj(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var ek={};ek=function(){this.input=null;this.nb=this.ja=this.jb=0;this.output=null;this.Wc=this.K=this.Eb=0;this.msg="";this.state=null;this.Bc=2;this.F=0};var fk=Object.prototype.toString;
function gk(a){if(!(this instanceof gk))return new gk(a);a=this.options=O.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&0<a.windowBits?a.windowBits=-a.windowBits:a.gzip&&0<a.windowBits&&16>a.windowBits&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.H=new ek;this.H.K=0;var b=this.H;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<
f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=Pj(b,-2);else{8===e&&(e=9);var k=new ck;b.state=k;k.H=b;k.wrap=h;k.B=null;k.Yc=e;k.ia=1<<k.Yc;k.Ya=k.ia-1;k.Ic=f+7;k.fc=1<<k.Ic;k.Ka=k.fc-1;k.La=~~((k.Ic+3-1)/3);k.window=new O.ob(2*k.ia);k.head=new O.Ia(k.fc);k.Ha=new O.Ia(k.ia);k.Pb=1<<f+6;k.za=4*k.Pb;k.V=new O.ob(k.za);k.Mb=1*k.Pb;k.Lc=3*k.Pb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.nb=b.Wc=0;b.Bc=2;c=b.state;c.pending=0;c.Sb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.F=2===c.wrap?
0:1;c.Ab=0;if(!Nj){d=Array(16);for(f=g=0;28>f;f++)for(rj[f]=g,e=0;e<1<<jj[f];e++)qj[g++]=f;qj[g-1]=f;for(f=g=0;16>f;f++)for(sj[f]=g,e=0;e<1<<kj[f];e++)pj[g++]=f;for(g>>=7;30>f;f++)for(sj[f]=g<<7,e=0;e<1<<kj[f]-7;e++)pj[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)nj[2*e+1]=8,e++,d[8]++;for(;255>=e;)nj[2*e+1]=9,e++,d[9]++;for(;279>=e;)nj[2*e+1]=7,e++,d[7]++;for(;287>=e;)nj[2*e+1]=8,e++,d[8]++;Cj(nj,287,d);for(e=0;30>e;e++)oj[2*e+1]=5,oj[2*e]=Bj(e,5);uj=new tj(nj,jj,257,286,15);vj=new tj(oj,
kj,0,30,15);wj=new tj([],lj,0,19,7);Nj=!0}c.hc=new xj(c.qa,uj);c.cc=new xj(c.eb,vj);c.ed=new xj(c.ga,wj);c.ka=0;c.fa=0;Dj(c);c=0}else c=Pj(b,-2);0===c&&(b=b.state,b.Pd=2*b.ia,Qj(b.head),b.Mc=bk[b.level].Be,b.qd=bk[b.level].pe,b.wd=bk[b.level].Ee,b.ud=bk[b.level].Ae,b.o=0,b.ta=0,b.u=0,b.ra=0,b.P=b.xa=2,b.hb=0,b.J=0);b=c}}else b=-2;if(0!==b)throw Error(hj[b]);a.header&&(b=this.H)&&b.state&&2===b.state.wrap&&(b.state.B=a.header);if(a.dictionary){var l;"string"===typeof a.dictionary?l=aj(a.dictionary):
"[object ArrayBuffer]"===fk.call(a.dictionary)?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.H;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,2===b||1===b&&42!==l.status||l.u)b=-2;else{1===b&&(a.F=bj(a.F,f,g,0));l.wrap=0;g>=l.ia&&(0===b&&(Qj(l.head),l.o=0,l.ta=0,l.ra=0),c=new O.ob(l.ia),O.qb(c,f,g-l.ia,l.ia,0),f=c,g=l.ia);c=a.ja;d=a.jb;e=a.input;a.ja=g;a.jb=0;a.input=f;for(Vj(l);3<=l.u;){f=l.o;g=l.u-2;do l.J=(l.J<<l.La^l.window[f+3-1])&l.Ka,l.Ha[f&l.Ya]=l.head[l.J],l.head[l.J]=f,f++;while(--g);
l.o=f;l.u=2;Vj(l)}l.o+=l.u;l.ta=l.o;l.ra=l.u;l.u=0;l.P=l.xa=2;l.hb=0;a.jb=d;a.input=e;a.ja=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(hj[b]);this.Nf=!0}}
gk.prototype.push=function(a,b){var c=this.H,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=aj(a):"[object ArrayBuffer]"===fk.call(a)?c.input=new Uint8Array(a):c.input=a;c.jb=0;c.ja=c.input.length;do{0===c.K&&(c.output=new O.ob(d),c.Eb=0,c.K=d);a=dk(c,e);if(1!==a&&0!==a)return hk(this,a),this.ended=!0,!1;if(0===c.K||0===c.ja&&(4===e||2===e))if("string"===this.options.to){var f=O.Vc(c.output,c.Eb);b=f;f=f.length;if(65537>f&&(b.subarray&&$i||!b.subarray))b=
String.fromCharCode.apply(null,O.Vc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=O.Vc(c.output,c.Eb),this.chunks.push(b)}while((0<c.ja||0===c.K)&&1!==a);if(4===e)return(c=this.H)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=Pj(c,-2):(c.state=null,a=113===d?Pj(c,-3):0)):a=-2,hk(this,a),this.ended=!0,0===a;2===e&&(hk(this,0),c.K=0);return!0};
function hk(a,b){0===b&&(a.result="string"===a.options.to?a.chunks.join(""):O.nd(a.chunks));a.chunks=[];a.err=b;a.msg=a.H.msg}
function ik(a,b){b=b||{};b.gzip=!0;b=new gk(b);b.push(a,!0);if(b.err)throw b.msg||hj[b.err];return b.result}
;function jk(a){return Fb(null===a?"null":void 0===a?"undefined":a)}
;function kk(a){this.name=a}
;var lk=new kk("rawColdConfigGroup");var mk=new kk("rawHotConfigGroup");var nk=new kk("commandExecutorCommand");function ok(a){this.A=Af(a)}
w(ok,Zf);var pk=new kk("continuationCommand");var qk=new kk("signalAction");var rk=new kk("webCommandMetadata");var sk=new kk("signalServiceEndpoint");var tk={Cf:"EMBEDDED_PLAYER_MODE_UNKNOWN",zf:"EMBEDDED_PLAYER_MODE_DEFAULT",Bf:"EMBEDDED_PLAYER_MODE_PFP",Af:"EMBEDDED_PLAYER_MODE_PFL"};var uk=new kk("feedbackEndpoint");function vk(a){this.A=Af(a)}
w(vk,Zf);var wk=new kk("webPlayerShareEntityServiceEndpoint");var xk=new kk("playlistEditEndpoint");var yk=new kk("modifyChannelNotificationPreferenceEndpoint");var zk=new kk("unsubscribeEndpoint");var Ak=new kk("subscribeEndpoint");function Bk(){var a=Ck;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function Dk(a){D("yt.ads.biscotti.lastId_",a)}
;function Ek(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Fk=C.window,Gk,Hk,Ik=(null==Fk?void 0:null==(Gk=Fk.yt)?void 0:Gk.config_)||(null==Fk?void 0:null==(Hk=Fk.ytcfg)?void 0:Hk.data_)||{};D("yt.config_",Ik);function Jk(){Ek(Ik,arguments)}
function R(a,b){return a in Ik?Ik[a]:b}
function Kk(a){var b=Ik.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var Lk=[];function Mk(a){Lk.forEach(function(b){return b(a)})}
function Nk(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Ok(b)}}:a}
function Ok(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Jk("ERRORS",b));Mk(a)}
function Pk(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=R("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Jk("ERRORS",f))}
;var Qk=/^[\w.]*$/,Rk={q:!0,search_query:!0};function Sk(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Tk(f[0]||""),h=Tk(f[1]||"");g in c?Array.isArray(c[g])?jb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(r){var k=r,l=f[0],n=String(Sk);k.args=[{key:l,value:f[1],query:a,method:Uk==n?"unchanged":n}];Rk.hasOwnProperty(l)||Pk(k)}}return c}
var Uk=String(Sk);function Vk(a){var b=[];kb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];db(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Wk(a){"?"==a.charAt(0)&&(a=a.substr(1));return Sk(a,"&")}
function Xk(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),Wk(1<a.length?a[1]:a[0])):{}}
function Yk(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Wk(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return lc(a,e)+d}
function Zk(a){if(!b)var b=window.location.href;var c=bc(1,a),d=cc(a);c&&d?(a=a.match($b),b=b.match($b),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?cc(b)==d&&(Number(bc(4,b))||null)==(Number(bc(4,a))||null):!0;return a}
function Tk(a){return a&&a.match(Qk)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function $k(a){var b=al;a=void 0===a?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=di;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ia){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Ah:g;try{var h=g.history.length}catch(Ia){h=0}e.u_his=h;var k;e.u_h=null==(k=Ah.screen)?void 0:k.height;var l;e.u_w=null==(l=Ah.screen)?void 0:l.width;var n;e.u_ah=null==(n=Ah.screen)?void 0:n.availHeight;var r;e.u_aw=
null==(r=Ah.screen)?void 0:r.availWidth;var t;e.u_cd=null==(t=Ah.screen)?void 0:t.colorDepth}catch(Ia){}h=b.h;try{var p=h.screenX;var x=h.screenY}catch(Ia){}try{var y=h.outerWidth;var z=h.outerHeight}catch(Ia){}try{var H=h.innerWidth;var I=h.innerHeight}catch(Ia){}try{var M=h.screenLeft;var N=h.screenTop}catch(Ia){}try{H=h.innerWidth,I=h.innerHeight}catch(Ia){}try{var K=h.screen.availWidth;var V=h.screen.availTop}catch(Ia){}p=[M,N,p,x,K,V,y,z,H,I];try{var Z=(b.h.top||window).document,ha="CSS1Compat"==
Z.compatMode?Z.documentElement:Z.body;var qa=(new Bd(ha.clientWidth,ha.clientHeight)).round()}catch(Ia){qa=new Bd(-12245933,-12245933)}Z=qa;qa={};var na=void 0===na?C:na;ha=new li;"SVGElement"in na&&"createElementNS"in na.document&&ha.set(0);x=ai();x["allow-top-navigation-by-user-activation"]&&ha.set(1);x["allow-popups-to-escape-sandbox"]&&ha.set(2);na.crypto&&na.crypto.subtle&&ha.set(3);"TextDecoder"in na&&"TextEncoder"in na&&ha.set(4);na=mi(ha);qa.bc=na;qa.bih=Z.height;qa.biw=Z.width;qa.brdim=p.join();
b=b.i;b=(qa.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,qa.wgl=!!Ah.WebGLRenderingContext,qa);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var al=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return Vk($k(a))});Wa();navigator.userAgent.indexOf(" (CrKey ");function S(a){a=bl(a);return"string"===typeof a&&"false"===a?!1:!!a}
function cl(a,b){a=bl(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function bl(a){var b=R("EXPERIMENTS_FORCED_FLAGS",{})||{};return void 0!==b[a]?b[a]:R("EXPERIMENT_FLAGS",{})[a]}
function dl(){for(var a=[],b=R("EXPERIMENTS_FORCED_FLAGS",{}),c=v(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=R("EXPERIMENT_FLAGS",{});var e=v(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var el="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function fl(){if(!el)return null;var a=el();return"open"in a?a:null}
function gl(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function hl(a,b){"function"===typeof a&&(a=Nk(a));return window.setTimeout(a,b)}
;var il="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(ja(il),["client_dev_set_cookie"]);var jl={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},kl="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ja(il)),ll=!1;
function ml(a,b){b=void 0===b?{}:b;var c=Zk(a),d=S("web_ajax_ignore_global_headers_if_set"),e;for(e in jl){var f=R(jl[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=R("VISITOR_DATA"));!f||!c&&cc(a)||d&&void 0!==b[e]||(!S("move_vss_away_from_login_info_cookie")||"TVHTML5_UNPLUGGED"===R("INNERTUBE_CLIENT_NAME"))&&g||(b[e]=f)}S("move_vss_away_from_login_info_cookie")&&c&&R("SESSION_INDEX")&&"TVHTML5_UNPLUGGED"!==R("INNERTUBE_CLIENT_NAME")&&(b["X-Yt-Auth-Test"]="test");
"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!cc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!cc(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&cc(a)||(b["X-YouTube-Ad-Signals"]=Vk($k()));return b}
function nl(a){var b=window.location.search,c=cc(a);S("debug_handle_relative_url_for_query_forward_killswitch")||!c&&Zk(a)&&(c=document.location.hostname);var d=ac(bc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Wk(b),f={};db(kl,function(g){e[g]&&(f[g]=e[g])});
return Yk(a,f||{},!1)}
function ol(a,b){var c=b.format||"JSON";a=pl(a,b);var d=ql(a,b),e=!1,f=rl(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=gl(k),n=null,r=400<=k.status&&500>k.status,t=500<=k.status&&600>k.status;if(l||r||t)n=sl(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};r=b.context||C;l?b.onSuccess&&b.onSuccess.call(r,k,n):b.onError&&b.onError.call(r,k,n);b.onFinish&&b.onFinish.call(r,
k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=hl(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function pl(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Yk(a,b||{},!0);return a}
function ql(a,b){var c=R("XSRF_FIELD_NAME"),d=R("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=R("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||cc(a)&&!b.withCredentials&&cc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(S("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=Wk(e),ub(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):jc(e));f=e||f&&!nb(f);!ll&&f&&"POST"!=b.method&&(ll=!0,Ok(Error("AJAX request with postData should use POST")));return e}
function sl(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Pk(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?tl(a):null)e={},db(a.getElementsByTagName("*"),function(g){e[g.tagName]=ul(g)})}d&&vl(e);
return e}
function vl(a){if(Oa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=wb();d=e?e.createHTML(d):d;a[c]=new Wb(d)}else vl(a[b])}}
function tl(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function ul(a){var b="";db(a.childNodes,function(c){b+=c.nodeValue});
return b}
function wl(a,b){b.method="POST";b.postParams||(b.postParams={});return ol(a,b)}
function rl(a,b,c,d,e,f,g,h){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&Nk(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var l=fl();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;S("debug_forward_web_query_parameters")&&(a=nl(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=ml(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
h&&"setAttributionReporting"in XMLHttpRequest.prototype&&l.setAttributionReporting({eventSourceEligible:!0,triggerEligible:!1});l.send(d);return l}
;var xl=[{Nc:function(a){return"Cannot read property '"+a.key+"'"},
mc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Nc:function(a){return"Cannot call '"+a.key+"'"},
mc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Nc:function(a){return a.key+" is not defined"},
mc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var zl={Ua:[],Ra:[{callback:yl,weight:500}]};function yl(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Al(){this.Ra=[];this.Ua=[]}
var Bl;function Cl(){if(!Bl){var a=Bl=new Al;a.Ua.length=0;a.Ra.length=0;zl.Ua&&a.Ua.push.apply(a.Ua,zl.Ua);zl.Ra&&a.Ra.push.apply(a.Ra,zl.Ra)}return Bl}
;var Dl=new L;function El(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Fl(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Fl(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Fl(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Fl(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Gl(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Hl(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=El(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Hl(e+".ve",f,g,h):0;d+=g;d+=Hl(e,a[e],b,c);if(500<d)break}}else c[b]=Il(a),d+=c[b].length;else c[b]=Il(a),d+=c[b].length;return d}
function Hl(a,b,c,d){c+="."+a;a=Il(b);d[c]=a;return c.length+a.length}
function Il(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function Jl(){this.cf=!0}
function Kl(){Jl.h||(Jl.h=new Jl);return Jl.h}
function Ll(a,b){a={};var c=tg([]);c&&(a.Authorization=c,c=b=null==b?void 0:b.sessionIndex,void 0===c&&(c=Number(R("SESSION_INDEX",0)),c=isNaN(c)?0:c),S("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Ik||(a["X-Origin"]=window.location.origin),void 0===b&&"DELEGATED_SESSION_ID"in Ik&&(a["X-Goog-PageId"]=R("DELEGATED_SESSION_ID")));return a}
;var Ml={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function Nl(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function Ol(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Pl(a,b,c,d,e){pg.set(""+a,b,{ic:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function Ql(a){return pg.get(""+a,void 0)}
function Rl(a,b,c){pg.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function Sl(){if(!pg.isEnabled())return!1;if(!pg.isEmpty())return!0;pg.set("TESTCOOKIESENABLED","1",{ic:60});if("1"!==pg.get("TESTCOOKIESENABLED"))return!1;pg.remove("TESTCOOKIESENABLED");return!0}
;var Tl=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",Tl);function Ul(){this.h=R("ALT_PREF_COOKIE_NAME","PREF");this.i=R("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Ql(this.h);a&&this.parse(a)}
var Vl;function Wl(){Vl||(Vl=new Ul);return Vl}
m=Ul.prototype;m.get=function(a,b){Xl(a);Yl(a);a=void 0!==Tl[a]?Tl[a].toString():null;return null!=a?a:b?b:""};
m.set=function(a,b){Xl(a);Yl(a);if(null==b)throw Error("ExpectedNotNull");Tl[a]=b.toString()};
function Zl(a){return!!(($l("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
m.remove=function(a){Xl(a);Yl(a);delete Tl[a]};
m.clear=function(){for(var a in Tl)delete Tl[a]};
function Yl(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Xl(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function $l(a){a=void 0!==Tl[a]?Tl[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
m.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Tl[d]=c.toString())}};var am={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},bm={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function cm(){var a=C.navigator;return a?a.connection:void 0}
function dm(){var a=cm();if(a){var b=am[a.type||"unknown"]||"CONN_UNKNOWN";a=am[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function em(){var a=cm();if(null!=a&&a.effectiveType)return bm.hasOwnProperty(a.effectiveType)?bm[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function fm(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ja(b))}
w(fm,Error);function gm(){try{return hm(),!0}catch(a){return!1}}
function hm(a){if(void 0!==R("DATASYNC_ID"))return R("DATASYNC_ID");throw new fm("Datasync ID not set",void 0===a?"unknown":a);}
;function im(){}
function jm(a,b){return ki.bb(a,0,b)}
im.prototype.na=function(a,b){return this.bb(a,1,b)};
im.prototype.Jb=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var km=cl("web_emulated_idle_callback_delay",300),lm=1E3/60-3,mm=[8,5,4,3,2,1,0];
function nm(a){a=void 0===a?{}:a;G.call(this);this.i=[];this.j={};this.Y=this.h=0;this.W=this.m=!1;this.R=[];this.S=this.da=!1;for(var b=v(mm),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.l=0;this.xc=a.timeout||1;this.D=lm;this.s=0;this.ma=this.Ge.bind(this);this.wc=this.ff.bind(this);this.Fa=this.Vd.bind(this);this.ab=this.qe.bind(this);this.Vb=this.Ie.bind(this);this.sa=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!S("disable_scheduler_requestIdleCallback");(this.ea=!1!==
a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.ma)}
w(nm,G);m=nm.prototype;m.Jb=function(a){var b=Wa();om(this,a);a=Wa()-b;this.m||(this.D-=a)};
m.bb=function(a,b,c){++this.Y;if(10===b)return this.Jb(a),this.Y;var d=this.Y;this.j[d]=a;this.m&&!c?this.R.push({id:d,priority:b}):(this.i[b].push(d),this.W||this.m||(0!==this.h&&pm(this)!==this.s&&this.stop(),this.start()));return d};
m.oa=function(a){delete this.j[a]};
function qm(a){a.R.length=0;for(var b=5;0<=b;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
m.isHidden=function(){return!!document.hidden||!1};
function rm(a){return!a.isHidden()&&a.ea}
function pm(a){if(a.i[8].length){if(a.S)return 4;if(rm(a))return 3}for(var b=5;b>=a.l;b--)if(0<a.i[b].length)return 0<b?rm(a)?3:2:1;return 0}
m.Qb=function(a){var b=E("yt.logging.errors.log");b&&b(a)};
function om(a,b){try{b()}catch(c){a.Qb(c)}}
function sm(a){for(var b=v(mm),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
m.qe=function(a){var b=void 0;a&&(b=a.timeRemaining());this.da=!0;tm(this,b);this.da=!1};
m.ff=function(){tm(this)};
m.Vd=function(){um(this)};
m.Ie=function(a){this.S=!0;var b=pm(this);4===b&&b!==this.s&&(this.stop(),this.start());tm(this,void 0,a);this.S=!1};
m.Ge=function(){this.isHidden()||um(this);this.h&&(this.stop(),this.start())};
function um(a){a.stop();a.m=!0;for(var b=Wa(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&om(a,e)}wm(a);a.m=!1;sm(a)&&a.start();b=Wa()-b;a.D-=b}
function wm(a){for(var b=0,c=a.R.length;b<c;b++){var d=a.R[b];a.i[d.priority].push(d.id)}a.R.length=0}
function tm(a,b,c){a.S&&4===a.s&&a.h||a.stop();a.m=!0;b=Wa()+(b||a.D);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Qb(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&om(a,f);d=a.da?0:1;d=a.l>d?a.l:d;if(!(Wa()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&om(a,c)}while(c&&Wa()<b)}a.m=!1;wm(a);a.D=lm;sm(a)&&a.start()}
m.start=function(){this.W=!1;if(0===this.h)switch(this.s=pm(this),this.s){case 1:var a=this.ab;this.h=this.sa?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,km);break;case 2:this.h=window.setTimeout(this.wc,this.xc);break;case 3:this.h=window.requestAnimationFrame(this.Vb);break;case 4:this.h=window.setTimeout(this.Fa,0)}};
m.pause=function(){this.stop();this.W=!0};
m.stop=function(){if(this.h){switch(this.s){case 1:var a=this.h;this.sa?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
m.M=function(){qm(this);this.stop();this.ea&&document.removeEventListener("visibilitychange",this.ma);G.prototype.M.call(this)};var xm=E("yt.scheduler.instance.timerIdMap_")||{},ym=cl("kevlar_tuner_scheduler_soft_state_timer_ms",800),zm=0,Am=0;function Bm(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.Z())a=new nm(R("scheduler")||{}),D("ytglobal.schedulerInstanceInstance_",a);return a}
function Cm(){Dm();var a=E("ytglobal.schedulerInstanceInstance_");a&&(vc(a),D("ytglobal.schedulerInstanceInstance_",null))}
function Dm(){qm(Bm());for(var a in xm)xm.hasOwnProperty(a)&&delete xm[Number(a)]}
function Em(a,b,c){if(!c)return c=void 0===c,-Bm().bb(a,b,c);var d=window.setTimeout(function(){var e=Bm().bb(a,b);xm[d]=e},c);
return d}
function Fm(a){Bm().Jb(a)}
function Gm(a){var b=Bm();if(0>a)b.oa(-a);else{var c=xm[a];c?(b.oa(c),delete xm[a]):window.clearTimeout(a)}}
function Hm(){Im()}
function Im(){window.clearTimeout(zm);Bm().start()}
function Jm(){Bm().pause();window.clearTimeout(zm);zm=window.setTimeout(Hm,ym)}
function Km(){window.clearTimeout(Am);Am=window.setTimeout(function(){Lm(0)},ym)}
function Lm(a){Km();var b=Bm();b.l=a;b.start()}
function Mm(a){Km();var b=Bm();b.l>a&&(b.l=a,b.start())}
function Nm(){window.clearTimeout(Am);var a=Bm();a.l=0;a.start()}
;function Om(){im.apply(this,arguments)}
w(Om,im);function Pm(){Om.h||(Om.h=new Om);return Om.h}
Om.prototype.bb=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):hl(a,c||0)};
Om.prototype.oa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Om.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
Om.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var ki=Pm();
S("web_scheduler_auto_init")&&!E("yt.scheduler.initialized")&&(D("yt.scheduler.instance.dispose",Cm),D("yt.scheduler.instance.addJob",Em),D("yt.scheduler.instance.addImmediateJob",Fm),D("yt.scheduler.instance.cancelJob",Gm),D("yt.scheduler.instance.cancelAllJobs",Dm),D("yt.scheduler.instance.start",Im),D("yt.scheduler.instance.pause",Jm),D("yt.scheduler.instance.setPriorityThreshold",Lm),D("yt.scheduler.instance.enablePriorityThreshold",Mm),D("yt.scheduler.instance.clearPriorityThreshold",Nm),D("yt.scheduler.initialized",
!0));function Qm(a){var b=new Qi;(b=b.isAvailable()?a?new Wi(b,a):b:null)||(a=new Ri(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Mi(a):null;this.i=document.domain||window.location.hostname}
Qm.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape((new Xg).serialize(b))}catch(f){return}else e=escape(b);Pl(a,e,c,this.i)};
Qm.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Ql(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Qm.prototype.remove=function(a){this.h&&this.h.remove(a);Rl(a,"/",this.i)};var Rm=function(){var a;return function(){a||(a=new Qm("ytidb"));return a}}();
function Sm(){var a;return null==(a=Rm())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Tm=[],Um,Vm=!1;function Wm(){var a={};for(Um=new Xm(void 0===a.handleError?Ym:a.handleError,void 0===a.logEvent?Zm:a.logEvent);0<Tm.length;)switch(a=Tm.shift(),a.type){case "ERROR":Um.Qb(a.payload);break;case "EVENT":Um.logEvent(a.eventType,a.payload)}}
function $m(a){Vm||(Um?Um.Qb(a):(Tm.push({type:"ERROR",payload:a}),10<Tm.length&&Tm.shift()))}
function an(a,b){Vm||(Um?Um.logEvent(a,b):(Tm.push({type:"EVENT",eventType:a,payload:b}),10<Tm.length&&Tm.shift()))}
;function bn(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function cn(a){return a.substr(0,a.indexOf(":"))||a}
;var dn=Ae||Be;function en(a){var b=Nb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var fn={},gn=(fn.AUTH_INVALID="No user identifier specified.",fn.EXPLICIT_ABORT="Transaction was explicitly aborted.",fn.IDB_NOT_SUPPORTED="IndexedDB is not supported.",fn.MISSING_INDEX="Index not created.",fn.MISSING_OBJECT_STORES="Object stores not created.",fn.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",fn.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",fn.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
fn.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",fn.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",fn.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",fn.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",fn),hn={},jn=(hn.AUTH_INVALID="ERROR",hn.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",hn.EXPLICIT_ABORT="IGNORED",hn.IDB_NOT_SUPPORTED="ERROR",hn.MISSING_INDEX=
"WARNING",hn.MISSING_OBJECT_STORES="ERROR",hn.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",hn.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",hn.QUOTA_EXCEEDED="WARNING",hn.QUOTA_MAYBE_EXCEEDED="WARNING",hn.UNKNOWN_ABORT="WARNING",hn.INCOMPATIBLE_DB_VERSION="WARNING",hn),kn={},ln=(kn.AUTH_INVALID=!1,kn.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,kn.EXPLICIT_ABORT=!1,kn.IDB_NOT_SUPPORTED=!1,kn.MISSING_INDEX=!1,kn.MISSING_OBJECT_STORES=!1,kn.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,kn.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,kn.QUOTA_EXCEEDED=!1,kn.QUOTA_MAYBE_EXCEEDED=!0,kn.UNKNOWN_ABORT=!0,kn.INCOMPATIBLE_DB_VERSION=!1,kn);function mn(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?gn[a]:c;d=void 0===d?jn[a]:d;e=void 0===e?ln[a]:e;fm.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,mn.prototype)}
w(mn,fm);function nn(a,b){mn.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},gn.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,nn.prototype)}
w(nn,mn);function on(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,on.prototype)}
w(on,Error);var pn=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function qn(a,b,c,d){b=cn(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof mn)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new mn("QUOTA_EXCEEDED",a);if(Ce&&"UnknownError"===e.name)return new mn("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof on)return new mn("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&pn.some(function(f){return e.message.includes(f)}))return new mn("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new mn("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",yd:e.name})];e.level="WARNING";return e}
function rn(a,b,c){var d=Sm();return new mn("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function sn(a){if(!a)throw Error();throw a;}
function tn(a){return a}
function un(a){this.h=a}
function vn(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=v(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=v(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
vn.all=function(a){return new vn(new un(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={yb:0};f.yb<a.length;f={yb:f.yb},++f.yb)vn.resolve(a[f.yb]).then(function(g){return function(h){d[g.yb]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
vn.resolve=function(a){return new vn(new un(function(b,c){a instanceof vn?a.then(b,c):b(a)}))};
vn.reject=function(a){return new vn(new un(function(b,c){c(a)}))};
vn.prototype.then=function(a,b){var c=this,d=null!=a?a:tn,e=null!=b?b:sn;return new vn(new un(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){wn(c,c,d,f,g)}),c.i.push(function(){xn(c,c,e,f,g)})):"FULFILLED"===c.state.status?wn(c,c,d,f,g):"REJECTED"===c.state.status&&xn(c,c,e,f,g)}))};
vn.prototype.catch=function(a){return this.then(void 0,a)};
function wn(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof vn?yn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function xn(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof vn?yn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function yn(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof vn?yn(a,b,f,d,e):d(f)},function(f){e(f)})}
;function zn(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function An(a){return new Promise(function(b,c){zn(a,b,c)})}
function Bn(a){return new vn(new un(function(b,c){zn(a,b,c)}))}
;function Cn(a,b){return new vn(new un(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Dn=window,T=Dn.ytcsi&&Dn.ytcsi.now?Dn.ytcsi.now:Dn.performance&&Dn.performance.timing&&Dn.performance.now&&Dn.performance.timing.navigationStart?function(){return Dn.performance.timing.navigationStart+Dn.performance.now()}:function(){return(new Date).getTime()};function En(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(T());this.i=!1}
m=En.prototype;m.add=function(a,b,c){return Fn(this,[a],{mode:"readwrite",ha:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return Fn(this,[a],{mode:"readwrite",ha:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return Fn(this,[a],{mode:"readonly",ha:!0},function(c){return c.objectStore(a).count(b)})};
function Gn(a,b,c){a=a.h.createObjectStore(b,c);return new Hn(a)}
m.delete=function(a,b){return Fn(this,[a],{mode:"readwrite",ha:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return Fn(this,[a],{mode:"readonly",ha:!0},function(c){return c.objectStore(a).get(b)})};
function In(a,b,c){return Fn(a,[b],{mode:"readwrite",ha:!0},function(d){d=d.objectStore(b);return Bn(d.h.put(c,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Fn(a,b,c,d){var e,f,g,h,k,l,n,r,t,p,x,y;return A(function(z){switch(z.h){case 1:var H={mode:"readonly",ha:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?H.mode=c:Object.assign(H,c);e=H;a.transactionCount++;f=e.ha?3:1;g=0;case 2:if(h){z.v(4);break}g++;k=Math.round(T());za(z,5);l=a.h.transaction(b,e.mode);H=z.yield;var I=new Jn(l);I=Kn(I,d);return H.call(z,I,7);case 7:return n=z.i,r=Math.round(T()),Ln(a,k,r,g,void 0,b.join(),e),z.return(n);case 5:t=Aa(z);p=Math.round(T());x=qn(t,
a.h.name,b.join(),a.h.version);if((y=x instanceof mn&&!x.h)||g>=f)Ln(a,k,p,g,x,b.join(),e),h=x;z.v(2);break;case 4:return z.return(Promise.reject(h))}})}
function Ln(a,b,c,d,e,f,g){b=c-b;e?(e instanceof mn&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&an("QUOTA_EXCEEDED",{dbName:cn(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof mn&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),an("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Mn(a,!1,d,f,b,g.tag),$m(e)):Mn(a,!0,d,f,b,g.tag)}
function Mn(a,b,c,d,e,f){an("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function Hn(a){this.h=a}
m=Hn.prototype;m.add=function(a,b){return Bn(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return Bn(this.h.clear()).then(function(){})};
function Nn(a,b,c){a.h.createIndex(b,c,{unique:!1})}
m.count=function(a){return Bn(this.h.count(a))};
function On(a,b){return Pn(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?On(this,a):Bn(this.h.delete(a))};
m.get=function(a){return Bn(this.h.get(a))};
m.index=function(a){try{return new Qn(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new on(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function Pn(a,b,c){a=a.h.openCursor(b.query,b.direction);return Rn(a).then(function(d){return Cn(d,c)})}
function Jn(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=mn;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Kn(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return v(d).next().value})}
Jn.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new mn("EXPLICIT_ABORT");};
Jn.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new Hn(a),this.i.set(a,b));return b};
function Qn(a){this.h=a}
m=Qn.prototype;m.count=function(a){return Bn(this.h.count(a))};
m.delete=function(a){return Sn(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
m.get=function(a){return Bn(this.h.get(a))};
m.getKey=function(a){return Bn(this.h.getKey(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function Sn(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Rn(a).then(function(d){return Cn(d,c)})}
function Tn(a,b){this.request=a;this.cursor=b}
function Rn(a){return Bn(a).then(function(b){return b?new Tn(a,b):null})}
m=Tn.prototype;m.advance=function(a){this.cursor.advance(a);return Rn(this.request)};
m.continue=function(a){this.cursor.continue(a);return Rn(this.request)};
m.delete=function(){return Bn(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return Bn(this.cursor.update(a))};function Un(a,b,c){return new Promise(function(d,e){function f(){t||(t=new En(g.result,{closed:r}));return t}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Xd,k=c.blocking,l=c.df,n=c.upgrade,r=c.closed,t;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&an("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:cn(a)});var x=f(),y=new Jn(g.transaction);
n&&n(x,function(z){return p.oldVersion<z&&p.newVersion>=z},y);
y.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var p=g.result;k&&p.addEventListener("versionchange",function(){k(f())});
p.addEventListener("close",function(){an("IDB_UNEXPECTEDLY_CLOSED",{dbName:cn(a),dbVersion:p.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Vn(a,b,c){c=void 0===c?{}:c;return Un(a,b,c)}
function Wn(a,b){b=void 0===b?{}:b;var c,d,e,f;return A(function(g){if(1==g.h)return za(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Xd)&&c.addEventListener("blocked",function(){e()}),g.yield(An(c),4);
if(2!=g.h)g.h=0,g.l=0;else throw f=Aa(g),qn(f,a,"",-1);})}
;function Xn(a,b){this.name=a;this.options=b;this.j=!0;this.m=this.l=0}
Xn.prototype.i=function(a,b,c){c=void 0===c?{}:c;return Vn(a,b,c)};
Xn.prototype.delete=function(a){a=void 0===a?{}:a;return Wn(this.name,a)};
function Yn(a,b){return new mn("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Zn(a,b){if(!b)throw rn("openWithToken",cn(a.name));return a.open()}
Xn.prototype.open=function(){function a(){var f,g,h,k,l,n,r,t,p,x;return A(function(y){switch(y.h){case 1:return g=null!=(f=Error().stack)?f:"",za(y,2),y.yield(c.i(c.name,c.options.version,e),4);case 4:h=y.i;for(var z=c.options,H=[],I=v(Object.keys(z.Fb)),M=I.next();!M.done;M=I.next()){M=M.value;var N=z.Fb[M],K=void 0===N.Le?Number.MAX_VALUE:N.Le;!(h.h.version>=N.Kb)||h.h.version>=K||h.h.objectStoreNames.contains(M)||H.push(M)}k=H;if(0===k.length){y.v(5);break}l=Object.keys(c.options.Fb);n=h.objectStoreNames();
if(c.m<cl("ytidb_reopen_db_retries",0))return c.m++,h.close(),$m(new mn("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());if(!(c.l<cl("ytidb_remake_db_retries",1))){y.v(6);break}c.l++;return y.yield(c.delete(),7);case 7:return $m(new mn("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());case 6:throw new nn(n,l);case 5:return y.return(h);case 2:r=Aa(y);if(r instanceof DOMException?
"VersionError"!==r.name:"DOMError"in self&&r instanceof DOMError?"VersionError"!==r.name:!(r instanceof Object&&"message"in r)||"An attempt was made to open a database using a lower version than the existing version."!==r.message){y.v(8);break}return y.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:t=y.i;p=t.h.version;if(void 0!==c.options.version&&p>c.options.version+1)throw t.close(),c.j=!1,Yn(c,p);return y.return(t);case 8:throw b(),r instanceof Error&&!S("ytidb_async_stack_killswitch")&&
(r.stack=r.stack+"\n"+g.substring(g.indexOf("\n")+1)),qn(r,c.name,"",null!=(x=c.options.version)?x:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw Yn(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,df:b,upgrade:this.options.upgrade};return this.h=d=a()};var $n=new Xn("YtIdbMeta",{Fb:{databases:{Kb:1}},upgrade:function(a,b){b(1)&&Gn(a,"databases",{keyPath:"actualName"})}});
function ao(a,b){var c;return A(function(d){if(1==d.h)return d.yield(Zn($n,b),2);c=d.i;return d.return(Fn(c,["databases"],{ha:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Bn(f.h.put(a,void 0)).then(function(){})})}))})}
function bo(a,b){var c;return A(function(d){if(1==d.h)return a?d.yield(Zn($n,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function co(a,b){var c,d;return A(function(e){return 1==e.h?(c=[],e.yield(Zn($n,b),2)):3!=e.h?(d=e.i,e.yield(Fn(d,["databases"],{ha:!0,mode:"readonly"},function(f){c.length=0;return Pn(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function eo(a){return co(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function fo(a,b,c){return co(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function go(a){var b,c;return A(function(d){if(1==d.h)return b=hm("YtIdbMeta hasAnyMeta other"),d.yield(co(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var ho,io=new function(){}(new function(){});
function jo(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=Sm();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=dn)f=/WebKit\/([0-9]+)/.exec(Nb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Nb()),f=!(f&&602<=parseInt(f[1],10)));if(f||Kc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
za(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(ao(d,io),4);case 4:return e.yield(bo("yt-idb-test-do-not-use",io),5);case 5:return e.return(!0);case 2:return Aa(e),e.return(!1)}})}
function ko(){if(void 0!==ho)return ho;Vm=!0;return ho=jo().then(function(a){Vm=!1;var b;if(null!=(b=Rm())&&b.h){var c;b={hasSucceededOnce:(null==(c=Sm())?void 0:c.hasSucceededOnce)||a};var d;null==(d=Rm())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function lo(){return E("ytglobal.idbToken_")||void 0}
function mo(){var a=lo();return a?Promise.resolve(a):ko().then(function(b){(b=b?io:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var no=0;function oo(a,b){no||(no=ki.na(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(mo(),2);case 2:c=h.i;if(!c)return h.return();d=!0;za(h,3);return h.yield(fo(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.v(6);break}f=e[0];return h.yield(Wn(f.actualName),7);case 7:return h.yield(bo(f.actualName,c),6);case 6:h.h=4;h.l=0;break;case 3:g=Aa(h),$m(g),d=!1;case 4:ki.oa(no),no=0,d&&oo(a,b),h.h=0}})}))}
function po(){var a;return A(function(b){return 1==b.h?b.yield(mo(),2):(a=b.i)?b.return(go(a)):b.return(!1)})}
new yh;function qo(a){if(!gm())throw a=new mn("AUTH_INVALID",{dbName:a}),$m(a),a;var b=hm();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function ro(a,b,c,d){var e,f,g,h,k,l;return A(function(n){switch(n.h){case 1:return f=null!=(e=Error().stack)?e:"",n.yield(mo(),2);case 2:g=n.i;if(!g)throw h=rn("openDbImpl",a,b),S("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),$m(h),h;bn(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:qo(a);za(n,3);return n.yield(ao(k,g),5);case 5:return n.yield(Vn(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return l=Aa(n),za(n,7),n.yield(bo(k.actualName,
g),9);case 9:n.h=8;n.l=0;break;case 7:Aa(n);case 8:throw l;}})}
function so(a,b,c){c=void 0===c?{}:c;return ro(a,b,!1,c)}
function to(a,b,c){c=void 0===c?{}:c;return ro(a,b,!0,c)}
function uo(a,b){b=void 0===b?{}:b;var c,d;return A(function(e){if(1==e.h)return e.yield(mo(),2);if(3!=e.h){c=e.i;if(!c)return e.return();bn(a);d=qo(a);return e.yield(Wn(d.actualName,b),3)}return e.yield(bo(d.actualName,c),0)})}
function vo(a,b,c){a=a.map(function(d){return A(function(e){return 1==e.h?e.yield(Wn(d.actualName,b),2):e.yield(bo(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function wo(){var a=void 0===a?{}:a;var b,c;return A(function(d){if(1==d.h)return d.yield(mo(),2);if(3!=d.h){b=d.i;if(!b)return d.return();bn("LogsDatabaseV2");return d.yield(eo(b),3)}c=d.i;return d.yield(vo(c,a,b),0)})}
function xo(a,b){b=void 0===b?{}:b;var c;return A(function(d){if(1==d.h)return d.yield(mo(),2);if(3!=d.h){c=d.i;if(!c)return d.return();bn(a);return d.yield(Wn(a,b),3)}return d.yield(bo(a,c),0)})}
;function yo(a,b){Xn.call(this,a,b);this.options=b;bn(a)}
w(yo,Xn);function zo(a,b){var c;return function(){c||(c=new yo(a,b));return c}}
yo.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.sc?to:so)(a,b,Object.assign({},c))};
yo.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.sc?xo:uo)(this.name,a)};
function Ao(a,b){return zo(a,b)}
;var Bo={},Co=Ao("ytGcfConfig",{Fb:(Bo.coldConfigStore={Kb:1},Bo.hotConfigStore={Kb:1},Bo),sc:!1,upgrade:function(a,b){b(1)&&(Nn(Gn(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),Nn(Gn(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Do(a){return Zn(Co(),a)}
function Eo(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:T()},g.yield(Do(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(In(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Fo(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:T()},h.yield(Do(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(In(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Go(a){var b,c;return A(function(d){return 1==d.h?d.yield(Do(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(Fn(b,["coldConfigStore"],{mode:"readwrite",ha:!0},function(e){return Sn(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function Ho(a){var b,c;return A(function(d){return 1==d.h?d.yield(Do(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(Fn(b,["hotConfigStore"],{mode:"readwrite",ha:!0},function(e){return Sn(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function Io(){G.call(this);this.i=[];this.h=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(ja(a)),this.h=a):(this.h=[],D("yt.gcf.config.hotUpdateCallbacks",this.h))}
w(Io,G);Io.prototype.M=function(){for(var a=v(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);0<=b&&c.splice(b,1)}this.i.length=0;G.prototype.M.call(this)};function Jo(){this.h=0;this.i=new Io}
function Ko(){var a;return null!=(a=E("yt.gcf.config.hotConfigGroup"))?a:null}
function Lo(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!S("start_client_gcf")){g.v(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.l(b);d=lo();if(!d){g.v(3);break}if(c){g.v(4);break}return g.yield(Ho(d),5);case 5:e=g.i,c=null==(f=e)?void 0:f.config;case 4:return g.yield(Eo(c,b,d),3);case 3:if(c)for(var h=c,k=v(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function Mo(a,b,c){var d,e,f,g;return A(function(h){if(1==h.h){if(!S("start_client_gcf"))return h.v(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=lo())?c?h.v(4):h.yield(Go(d),5):h.v(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.v(0);g=c.configData;return h.yield(Fo(c,b,g,d),0)})}
function No(){if(!Jo.h){var a=new Jo;Jo.h=a}a=Jo.h;var b=T()-a.h;if(!(0!==a.h&&b<cl("send_config_hash_timer"))){b=E("yt.gcf.config.coldConfigData");var c=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=T());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
Jo.prototype.l=function(a){this.hotHashData=a;D("yt.gcf.config.hotHashData",this.hotHashData||null)};function Oo(){return"INNERTUBE_API_KEY"in Ik&&"INNERTUBE_API_VERSION"in Ik}
function Po(){return{innertubeApiKey:R("INNERTUBE_API_KEY"),innertubeApiVersion:R("INNERTUBE_API_VERSION"),re:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),sd:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Uf:R("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:R("INNERTUBE_CONTEXT_CLIENT_VERSION"),te:R("INNERTUBE_CONTEXT_HL"),se:R("INNERTUBE_CONTEXT_GL"),ue:R("INNERTUBE_HOST_OVERRIDE")||"",xe:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),we:!!R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:R("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Qo(a){var b={client:{hl:a.te,gl:a.se,clientName:a.sd,clientVersion:a.innertubeContextClientVersion,configInfo:a.re}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=R("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=dl();0<c.length&&(b.request={internalExperimentFlags:c});c=a.sd;if(("WEB"===c||"MWEB"===c||1===c||2===c)&&b){var d;b.client.mainAppWebInfo=null!=(d=b.client.mainAppWebInfo)?
d:{};b.client.mainAppWebInfo.webDisplayMode=Ol()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(S("web_log_memory_total_kbytes")&&(null==(e=C.navigator)?0:e.deviceMemory)){var f;e=null==(f=C.navigator)?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+1E6*e)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=dm())&&b&&(b.client.connectionType=a);S("web_log_effective_connection_type")&&(a=em())&&
b&&(b.client.effectiveConnectionType=a);S("start_client_gcf")&&(e=No())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,a&&f&&e&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.coldConfigData=a,b.client.configInfo.coldHashData=f,b.client.configInfo.hotHashData=e));R("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(b.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});!S("fill_delegate_context_in_gel_killswitch")&&(a=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;f=a.assign;e=b.client;d={};c=v(Object.entries(Wk(R("DEVICE",""))));for(var g=c.next();!g.done;g=c.next()){var h=v(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?d.deviceMake=h:"cmodel"===g?d.deviceModel=h:"cbr"===g?d.browserName=h:"cbrver"===g?d.browserVersion=h:"cos"===g?d.osName=h:"cosver"===g?d.osVersion=h:"cplatform"===g&&(d.platform=h)}b.client=f.call(a,e,d);return b}
function Ro(a,b,c){c=void 0===c?{}:c;var d={};R("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":R("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||R("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().Of:(a=Ll(Kl()),S("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;function So(a,b){this.version=a;this.args=b}
So.prototype.serialize=function(){return{version:this.version,args:this.args}};function To(a,b){this.topic=a;this.h=b}
To.prototype.toString=function(){return this.topic};var Uo=E("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.Ib;L.prototype.publish=L.prototype.Za;L.prototype.clear=L.prototype.clear;D("ytPubsub2Pubsub2Instance",Uo);var Vo=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",Vo);var Wo=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",Wo);var Xo=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",Xo);
D("ytPubsub2Pubsub2SkipSubKey",null);function Yo(a,b){var c=Zo();c&&c.publish.call(c,a.toString(),a,b)}
function $o(a){var b=ap,c=Zo();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Vo[d])try{if(f&&b instanceof To&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Xa){var l=new h;h.Xa=l.version}var n=h.Xa}catch(z){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{n=Reflect;var r=n.construct;
var t=k.args,p=t.length;if(0<p){var x=Array(p);for(k=0;k<p;k++)x[k]=t[k];var y=x}else y=[];f=r.call(n,h,y)}catch(z){throw z.message="yt.pubsub2.Data.deserialize(): "+z.message,z;}}catch(z){throw z.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+z.message,z;}a.call(window,f)}catch(z){Ok(z)}},Xo[b.toString()]?E("yt.scheduler.instance")?ki.na(g):hl(g,0):g())});
Vo[d]=!0;Wo[b.toString()]||(Wo[b.toString()]=[]);Wo[b.toString()].push(d);return d}
function bp(){var a=cp,b=$o(function(c){a.apply(void 0,arguments);dp(b)});
return b}
function dp(a){var b=Zo();b&&("number"===typeof a&&(a=[a]),db(a,function(c){b.unsubscribeByKey(c);delete Vo[c]}))}
function Zo(){return E("ytPubsub2Pubsub2Instance")}
;function ep(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&Yo("meta_logging_csi_event",{timerName:a,kg:b})}
;var fp=cl("max_body_size_to_compress",5E5),gp=cl("min_body_size_to_compress",500),hp=!0,ip=0,jp=0,kp=cl("compression_performance_threshold_lr",250),lp=cl("slow_compressions_before_abandon_count",4);
function mp(a,b,c,d){var e=T(),f={startTime:e,ticks:{},infos:{}};if(hp)try{var g=np(b);if(null==g||!(g>fp||g<gp)){var h=ik(fi(b)),k=T();f.ticks.gelc=k;jp++;S("disable_compression_due_to_performance_degredation")&&k-e>=kp&&(ip++,S("abandon_compression_after_N_slow_zips")?jp===cl("compression_disable_point")&&ip>lp&&(hp=!1):hp=!1);op(f);c.headers||(c.headers={});c.headers["Content-Encoding"]="gzip";c.postBody=h;c.postParams=void 0}d(a,c)}catch(l){Pk(l),d(a,c)}else d(a,c)}
function pp(a){var b=void 0===b?!1:b;var c=void 0===c?!1:c;var d=T(),e={startTime:d,ticks:{},infos:{}},f=b?E("yt.logging.gzipForFetch",!1):!0;if(hp&&f){if(!a.body)return a;try{var g=c?a.body:"string"===typeof a.body?a.body:JSON.stringify(a.body);f=g;if(!c&&"string"===typeof g){var h=np(g);if(null!=h&&(h>fp||h<gp))return a;f=ik(fi(g),b?{level:1}:void 0);var k=T();e.ticks.gelc=k;if(b){jp++;if((S("disable_compression_due_to_performance_degredation")||S("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=kp)if(ip++,S("abandon_compression_after_N_slow_zips")||S("abandon_compression_after_N_slow_zips_lr")){b=ip/jp;var l=lp/cl("compression_disable_point");0<jp&&0===jp%cl("compression_disable_point")&&b>=l&&(hp=!1)}else hp=!1;op(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(n){return Pk(n),a}}else return a}
function np(a){try{return(new Blob(a.split(""))).size}catch(b){return Pk(b),null}}
function op(a){S("gel_compression_csi_killswitch")||!S("log_gel_compression_latency")&&!S("log_gel_compression_latency_lr")||ep("gel_compression",a,{sampleRate:.1})}
;function qp(a){a=Object.assign({},a);delete a.Authorization;var b=tg();if(b){var c=new qi;c.update(R("INNERTUBE_API_KEY"));c.update(b);a.hash=Fe(c.digest(),3)}return a}
;var rp;function sp(){rp||(rp=new Qm("yt.innertube"));return rp}
function tp(a,b,c,d){if(d)return null;d=sp().get("nextId",!0)||1;var e=sp().get("requests",!0)||{};e[d]={method:a,request:b,authState:qp(c),requestTime:Math.round(T())};sp().set("nextId",d+1,86400,!0);sp().set("requests",e,86400,!0);return d}
function up(a){var b=sp().get("requests",!0)||{};delete b[a];sp().set("requests",b,86400,!0)}
function vp(a){var b=sp().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(T())-d.requestTime)){var e=d.authState,f=qp(Ro(!1));qb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(T())),wp(a,d.method,e,{}));delete b[c]}}sp().set("requests",b,86400,!0)}}
;function xp(a){this.Xb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.wb=function(){};
this.now=Date.now;this.Ob=!1;var b;this.Kd=null!=(b=a.Kd)?b:100;var c;this.Ed=null!=(c=a.Ed)?c:1;var d;this.Cd=null!=(d=a.Cd)?d:2592E6;var e;this.Ad=null!=(e=a.Ad)?e:12E4;var f;this.Dd=null!=(f=a.Dd)?f:5E3;var g;this.T=null!=(g=a.T)?g:void 0;this.dc=!!a.dc;var h;this.ac=null!=(h=a.ac)?h:.1;var k;this.nc=null!=(k=a.nc)?k:10;a.handleError&&(this.handleError=a.handleError);a.wb&&(this.wb=a.wb);a.Ob&&(this.Ob=a.Ob);a.Xb&&(this.Xb=a.Xb);this.U=a.U;this.Da=a.Da;this.ba=a.ba;this.aa=a.aa;this.Qa=a.Qa;this.Qc=
a.Qc;this.Pc=a.Pc;yp(this)&&(!this.U||this.U("networkless_logging"))&&zp(this)}
function zp(a){yp(a)&&!a.Ob&&(a.h=!0,a.dc&&Math.random()<=a.ac&&a.ba.Zd(a.T),Ap(a),a.aa.wa()&&a.Ub(),a.aa.listen(a.Qc,a.Ub.bind(a)),a.aa.listen(a.Pc,a.gd.bind(a)))}
m=xp.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(yp(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ba.set(d,this.T).then(function(e){d.id=e;c.aa.wa()&&Bp(c,d)}).catch(function(e){Bp(c,d);
Cp(c,e)})}else this.Qa(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(yp(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.U&&this.U("nwl_skip_retry")&&(e.skipRetry=c);if(this.aa.wa()||this.U&&this.U("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(1==k.h)return k.yield(d.ba.set(e,d.T).catch(function(l){Cp(d,l)}),2);
f(g,h);k.h=0})}}this.Qa(a,b,e.skipRetry)}else this.ba.set(e,this.T).catch(function(g){d.Qa(a,b,e.skipRetry);
Cp(d,g)})}else this.Qa(a,b,this.U&&this.U("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(yp(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.ba.sb(d.id,c.T):e=!0;c.aa.ib&&c.U&&c.U("vss_network_hint")&&c.aa.ib(!0);f(g,h)};
this.Qa(d.url,d.options);this.ba.set(d,this.T).then(function(g){d.id=g;e&&c.ba.sb(d.id,c.T)}).catch(function(g){Cp(c,g)})}else this.Qa(a,b)};
m.Ub=function(){var a=this;if(!yp(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Da.na(function(){var b;return A(function(c){if(1==c.h)return c.yield(a.ba.pd("NEW",a.T),2);if(3!=c.h)return b=c.i,b?c.yield(Bp(a,b),3):(a.gd(),c.return());a.i&&(a.i=0,a.Ub());c.h=0})},this.Kd))};
m.gd=function(){this.Da.oa(this.i);this.i=0};
function Bp(a,b){var c;return A(function(d){switch(d.h){case 1:if(!yp(a))throw Error("IndexedDB is not supported: immediateSend");if(void 0===b.id){d.v(2);break}return d.yield(a.ba.ze(b.id,a.T),3);case 3:(c=d.i)||a.wb(Error("The request cannot be found in the database."));case 2:if(Dp(a,b,a.Cd)){d.v(4);break}a.wb(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){d.v(5);break}return d.yield(a.ba.sb(b.id,a.T),5);case 5:return d.return();case 4:b.skipRetry||(b=Ep(a,
b));if(!b){d.v(0);break}if(!b.skipRetry||void 0===b.id){d.v(8);break}return d.yield(a.ba.sb(b.id,a.T),8);case 8:a.Qa(b.url,b.options,!!b.skipRetry),d.h=0}})}
function Ep(a,b){if(!yp(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(n){switch(n.h){case 1:g=Fp(f);(h=Gp(f))&&a.U&&a.U("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.U&&a.U("nwl_consider_error_code")&&g||a.U&&!a.U("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.nc)){n.v(2);break}if(!a.aa.qc){n.v(3);break}return n.yield(a.aa.qc(),3);case 3:if(a.aa.wa()){n.v(2);break}c(e,f);if(!a.U||!a.U("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){n.v(6);
break}return n.yield(a.ba.Tc(b.id,a.T,!1),6);case 6:return n.return();case 2:if(a.U&&a.U("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.nc)return n.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){n.v(8);break}return b.sendCount<a.Ed?n.yield(a.ba.Tc(b.id,a.T,!0,h?!1:void 0),12):n.yield(a.ba.sb(b.id,a.T),8);case 12:a.Da.na(function(){a.aa.wa()&&a.Ub()},a.Dd);
case 8:c(e,f),n.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.v(2):h.yield(a.ba.sb(b.id,a.T),2);a.aa.ib&&a.U&&a.U("vss_network_hint")&&a.aa.ib(!0);d(e,f);h.h=0})};
return b}
function Dp(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Ap(a){if(!yp(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.ba.pd("QUEUED",a.T).then(function(b){b&&!Dp(a,b,a.Ad)?a.Da.na(function(){return A(function(c){if(1==c.h)return void 0===b.id?c.v(2):c.yield(a.ba.Tc(b.id,a.T),2);Ap(a);c.h=0})}):a.aa.wa()&&a.Ub()})}
function Cp(a,b){a.Qd&&!a.aa.wa()?a.Qd(b):a.handleError(b)}
function yp(a){return!!a.T||a.Xb}
function Fp(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function Gp(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var Hp;
function Ip(){if(Hp)return Hp();var a={};Hp=Ao("LogsDatabaseV2",{Fb:(a.LogsRequestsStore={Kb:2},a),sc:!1,upgrade:function(b,c,d){c(2)&&Gn(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),Nn(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Hp()}
;function Jp(a){return Zn(Ip(),a)}
function Kp(a,b){var c,d,e,f;return A(function(g){if(1==g.h)return c={startTime:T(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(Jp(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:R("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(In(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=T();Lp(c);return g.return(f)})}
function Mp(a,b){var c,d,e,f,g,h,k;return A(function(l){if(1==l.h)return c={startTime:T(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},l.yield(Jp(b),2);if(3!=l.h)return d=l.i,e=R("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,T()],h=IDBKeyRange.bound(f,g),k=void 0,l.yield(Fn(d,["LogsRequestsStore"],{mode:"readwrite",ha:!0},function(n){return Sn(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(r){r.getValue()&&(k=r.getValue(),"NEW"===
a&&(k.status="QUEUED",r.update(k)))})}),3);
c.ticks.tc=T();Lp(c);return l.return(k)})}
function Np(a,b){var c;return A(function(d){if(1==d.h)return d.yield(Jp(b),2);c=d.i;return d.return(Fn(c,["LogsRequestsStore"],{mode:"readwrite",ha:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Bn(f.h.put(g,void 0)).then(function(){return g})})}))})}
function Op(a,b,c,d){c=void 0===c?!0:c;var e;return A(function(f){if(1==f.h)return f.yield(Jp(b),2);e=f.i;return f.return(Fn(e,["LogsRequestsStore"],{mode:"readwrite",ha:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),Bn(h.h.put(k,void 0)).then(function(){return k})):vn.resolve(void 0)})}))})}
function Pp(a,b){var c;return A(function(d){if(1==d.h)return d.yield(Jp(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Qp(a){var b,c;return A(function(d){if(1==d.h)return d.yield(Jp(a),2);b=d.i;c=T()-2592E6;return d.yield(Fn(b,["LogsRequestsStore"],{mode:"readwrite",ha:!0},function(e){return Pn(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Rp(){A(function(a){return a.yield(wo(),0)})}
function Lp(a){S("nwl_csi_killswitch")||ep("networkless_performance",a,{sampleRate:1})}
;var Sp={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,mbsPlaybackInitiated:139,
mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,
kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,transactionFlowPaymentSubmitted:460,
transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,ypcPauseFlowSucceeded:190,
ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,ypcFamilyCreateFlowCancelled:259,
ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,accountRegistryChange:226,
userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,musicSideloadedPlaylistServiceCalled:246,
embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,tvhtml5ApiTest:270,yongleUsbSetup:271,touStrikeInterstitialEvent:272,
liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,
delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,
voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,
sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,
clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,
startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,
playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,
homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,
dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,
producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,
cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485};var Tp={},Up=Ao("ServiceWorkerLogsDatabase",{Fb:(Tp.SWHealthLog={Kb:1},Tp),sc:!0,upgrade:function(a,b){b(1)&&Nn(Gn(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Vp(a){return Zn(Up(),a)}
function Wp(a){var b,c;A(function(d){if(1==d.h)return d.yield(Vp(a),2);b=d.i;c=T()-2592E6;return d.yield(Fn(b,["SWHealthLog"],{mode:"readwrite",ha:!0},function(e){return Pn(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Xp(a){var b;return A(function(c){if(1==c.h)return c.yield(Vp(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Yp={},Zp=0;function $p(a){var b=new Image,c=""+Zp++;Yp[c]=b;b.onload=b.onerror=function(){delete Yp[c]};
b.src=a}
;function aq(){this.h=new Map;this.i=!1}
function bq(){if(!aq.h){var a=E("yt.networkRequestMonitor.instance")||new aq;D("yt.networkRequestMonitor.instance",a);aq.h=a}return aq.h}
aq.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
aq.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
aq.prototype.removeParams=function(a){return a.split("?")[0]};
aq.prototype.removeParams=aq.prototype.removeParams;aq.prototype.isEndpointCFR=aq.prototype.isEndpointCFR;aq.prototype.requestComplete=aq.prototype.requestComplete;aq.getInstance=bq;var cq;function dq(){cq||(cq=new Qm("yt.offline"));return cq}
function eq(a){if(S("offline_error_handling")){var b=dq().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);dq().set("errors",b,2592E3,!0)}}
;function fq(){ud.call(this);var a=this;this.j=!1;this.i=ji();this.i.listen("networkstatus-online",function(){if(a.j&&S("offline_error_handling")){var b=dq().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new fm(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Ok(d)}dq().set("errors",{},2592E3,!0)}}})}
w(fq,ud);function gq(){if(!fq.h){var a=E("yt.networkStatusManager.instance")||new fq;D("yt.networkStatusManager.instance",a);fq.h=a}return fq.h}
m=fq.prototype;m.wa=function(){return this.i.wa()};
m.ib=function(a){this.i.i=a};
m.ne=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.de=function(){this.j=!0};
m.listen=function(a,b){return this.i.listen(a,b)};
m.qc=function(a){a=hi(this.i,a);a.then(function(b){S("use_cfr_monitor")&&bq().requestComplete("generate_204",b)});
return a};
fq.prototype.sendNetworkCheckRequest=fq.prototype.qc;fq.prototype.listen=fq.prototype.listen;fq.prototype.enableErrorFlushing=fq.prototype.de;fq.prototype.getWindowStatus=fq.prototype.ne;fq.prototype.networkStatusHint=fq.prototype.ib;fq.prototype.isNetworkAvailable=fq.prototype.wa;fq.getInstance=gq;function hq(a){a=void 0===a?{}:a;ud.call(this);var b=this;this.i=this.m=0;this.j=gq();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.pc?(this.pc=a.pc,c("networkstatus-online",function(){iq(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){iq(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){vd(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){vd(b,"publicytnetworkstatus-offline")})))}
w(hq,ud);hq.prototype.wa=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
hq.prototype.ib=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
hq.prototype.qc=function(a){var b=this,c;return A(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return S("skip_network_check_if_cfr")&&bq().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.ib((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.wa())})):c?d.return(c(a)):d.return(!0)})};
function iq(a,b){a.pc?a.i?(ki.oa(a.m),a.m=ki.na(function(){a.l!==b&&(vd(a,b),a.l=b,a.i=T())},a.pc-(T()-a.i))):(vd(a,b),a.l=b,a.i=T()):vd(a,b)}
;var jq;function kq(){var a=xp.call;jq||(jq=new hq({Zf:!0,Sf:!0}));a.call(xp,this,{ba:{Zd:Qp,sb:Pp,pd:Mp,ze:Np,Tc:Op,set:Kp},aa:jq,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;Pk(new fm(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else Ok(b)},
wb:Pk,Qa:lq,now:T,Qd:eq,Da:Pm(),Qc:"publicytnetworkstatus-online",Pc:"publicytnetworkstatus-offline",dc:!0,ac:.1,nc:cl("potential_esf_error_limit",10),U:S,Ob:!(gm()&&mq())});this.j=new yh;S("networkless_immediately_drop_all_requests")&&Rp();xo("LogsDatabaseV2")}
w(kq,xp);function nq(){var a=E("yt.networklessRequestController.instance");a||(a=new kq,D("yt.networklessRequestController.instance",a),S("networkless_logging")&&mo().then(function(b){a.T=b;zp(a);a.j.resolve();a.dc&&Math.random()<=a.ac&&a.T&&Wp(a.T);S("networkless_immediately_drop_sw_health_store")&&oq(a)}));
return a}
kq.prototype.writeThenSend=function(a,b){b||(b={});gm()||(this.h=!1);xp.prototype.writeThenSend.call(this,a,b)};
kq.prototype.sendThenWrite=function(a,b,c){b||(b={});gm()||(this.h=!1);xp.prototype.sendThenWrite.call(this,a,b,c)};
kq.prototype.sendAndWrite=function(a,b){b||(b={});gm()||(this.h=!1);xp.prototype.sendAndWrite.call(this,a,b)};
kq.prototype.awaitInitialization=function(){return this.j.promise};
function oq(a){var b;A(function(c){if(!a.T)throw b=rn("clearSWHealthLogsDb"),b;return c.return(Xp(a.T).catch(function(d){a.handleError(d)}))})}
function lq(a,b,c){b=S("web_fp_via_jspb")?Object.assign({},b):b;S("use_cfr_monitor")&&pq(a,b);if(S("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(T())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(T())}if(c&&0===Object.keys(b).length){var e=void 0===e?"":e;var f=void 0===f?!1:f;var g=void 0===g?!1:g;if(a)if(e)rl(a,void 0,"POST",e);else if(R("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))rl(a,void 0,"GET",
"",void 0,void 0,f,g);else{b:{try{var h=new $a({url:a});if(h.j&&h.i||h.l){var k=ac(bc(5,a)),l;if(!(l=!k||!k.endsWith("/aclk"))){var n=a.search(oc),r=nc(a,0,"ri",n);if(0>r)var t=null;else{var p=a.indexOf("&",r);if(0>p||p>n)p=n;t=decodeURIComponent(a.slice(r+3,-1!==p?p:0).replace(/\+/g," "))}l="1"!==t}var x=!l;break b}}catch(z){}x=!1}if(x){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var y=!0;break b}}catch(z){}y=!1}c=y?!0:!1}else c=!1;c||$p(a)}}else b.compress?
b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),mp(a,b.postBody,b,ol)):mp(a,JSON.stringify(b.postParams),b,wl):ol(a,b)}
function pq(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){bq().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){bq().requestComplete(a,!0);d(e,f)}}
function mq(){return"www.youtube-nocookie.com"!==cc(document.location.toString())}
;var qq=!1,rq=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:qq};D("ytNetworklessLoggingInitializationOptions",rq);function sq(){var a;A(function(b){if(1==b.h)return b.yield(mo(),2);a=b.i;if(!a||!gm()&&!S("nwl_init_require_datasync_id_killswitch")||!mq())return b.v(0);qq=!0;rq.isNwlInitialized=qq;return b.yield(nq().awaitInitialization(),0)})}
;function tq(a){var b=this;this.config_=null;a?this.config_=a:Oo()&&(this.config_=Po());jm(function(){vp(b)},5E3)}
tq.prototype.isReady=function(){!this.config_&&Oo()&&(this.config_=Po());return!!this.config_};
function wp(a,b,c,d){function e(x){x=void 0===x?!1:x;var y;if(d.retry&&"www.youtube-nocookie.com"!=h&&(x||S("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(y=tp(b,c,l,k)),y)){var z=g.onSuccess,H=g.onFetchSuccess;g.onSuccess=function(M,N){up(y);z(M,N)};
c.onFetchSuccess=function(M,N){up(y);H(M,N)}}try{if(x&&d.retry&&!d.vd.bypassNetworkless)g.method="POST",d.vd.writeThenSend?nq().writeThenSend(p,g):nq().sendAndWrite(p,g);
else if(d.compress)if(g.postBody){var I=g.postBody;"string"!==typeof I&&(I=JSON.stringify(g.postBody));mp(p,I,g,ol)}else mp(p,JSON.stringify(g.postParams),g,wl);else S("web_all_payloads_via_jspb")?ol(p,g):wl(p,g)}catch(M){if("InvalidAccessError"==M.name)y&&(up(y),y=0),Pk(Error("An extension is blocking network request."));else throw M;}y&&jm(function(){vp(a)},5E3)}
!R("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Pk(new fm("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new fm("innertube xhrclient not ready",b,c,d);Ok(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(x,y){if(d.onSuccess)d.onSuccess(y)},
onFetchSuccess:function(x){if(d.onSuccess)d.onSuccess(x)},
onError:function(x,y){if(d.onError)d.onError(y)},
onFetchError:function(x){if(d.onError)d.onError(x)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.ue)&&(h=f);var k=a.config_.xe||!1,l=Ro(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,r={alt:"json"},t=a.config_.we&&f;t=t&&f.startsWith("Bearer");t||(r.key=a.config_.innertubeApiKey);var p=Yk(""+h+n,r||{},!0);(E("ytNetworklessLoggingInitializationOptions")?
rq.isNwlInitialized:qq)?ko().then(function(x){e(x)}):e(!1)}
;var uq=0,vq=Mc?"webkit":Lc?"moz":Jc?"ms":Ic?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++uq});var wq={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function xq(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in wq||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function yq(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
xq.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
xq.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
xq.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var mb=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",mb);var zq=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",zq);
function Aq(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return lb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Oa(e[4])&&Oa(d)&&qb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Bq=bb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Cq(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Aq(a,b,c,d);if(e)return e;e=++zq.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new xq(h);if(!Ed(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new xq(h);
h.currentTarget=a;return c.call(a,h)};
g=Nk(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Bq()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);mb[e]=[a,b,c,g,d];return e}
function Dq(a){a&&("string"==typeof a&&(a=[a]),db(a,function(b){if(b in mb){var c=mb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Bq()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete mb[b]}}))}
;function Eq(a){this.D=a;this.h=null;this.l=0;this.s=null;this.m=0;this.i=[];for(a=0;4>a;a++)this.i.push(0);this.j=0;this.S=Cq(window,"mousemove",Ua(this.W,this));a=Ua(this.R,this);"function"===typeof a&&(a=Nk(a));this.Y=window.setInterval(a,25)}
Xa(Eq,G);Eq.prototype.W=function(a){void 0===a.h&&yq(a);var b=a.h;void 0===a.i&&yq(a);this.h=new Ad(b,a.i)};
Eq.prototype.R=function(){if(this.h){var a=T();if(0!=this.l){var b=this.s,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.l);this.i[this.j]=.5<Math.abs((d-this.m)/this.m)?1:0;for(c=b=0;4>c;c++)b+=this.i[c]||0;3<=b&&this.D();this.m=d}this.l=a;this.s=this.h;this.j=(this.j+1)%4}};
Eq.prototype.M=function(){window.clearInterval(this.Y);Dq(this.S)};var Fq=new Set([174,173,175]),Gq={};
function Hq(a){var b=void 0===a?{}:a;a=void 0===b.He?!1:b.He;b=void 0===b.ee?!0:b.ee;if(null==E("_lact",window)){var c=parseInt(R("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);-1==c&&Iq();Cq(document,"keydown",Iq);Cq(document,"keyup",Iq);Cq(document,"mousedown",Iq);Cq(document,"mouseup",Iq);a?Cq(window,"touchmove",function(){Jq("touchmove",200)},{passive:!0}):(Cq(window,"resize",function(){Jq("resize",200)}),b&&Cq(window,"scroll",function(){Jq("scroll",
200)}));
new Eq(function(){Jq("mouse",100)});
Cq(document,"touchstart",Iq,{passive:!0});Cq(document,"touchend",Iq,{passive:!0})}}
function Jq(a,b){Gq[a]||(Gq[a]=!0,ki.na(function(){Iq();Gq[a]=!1},b))}
function Iq(a){var b;if(null!=(b=E("experiment.flags",window))&&b.enable_lact_reset_by_volume_buttons||!Fq.has(null==a?void 0:a.keyCode))null==E("_lact",window)&&Hq(),a=Date.now(),D("_lact",a,window),-1==E("_fact",window)&&D("_fact",a,window),(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function Kq(){var a=E("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var Lq=C.ytPubsubPubsubInstance||new L,Pq=C.ytPubsubPubsubSubscribedKeys||{},Qq=C.ytPubsubPubsubTopicToKeys||{},Rq=C.ytPubsubPubsubIsSynchronous||{};function Sq(a,b){var c=Tq();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Pq[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{Rq[a]?f():hl(f,0)}catch(g){Ok(g)}},void 0);
Pq[d]=!0;Qq[a]||(Qq[a]=[]);Qq[a].push(d);return d}return 0}
function Uq(a){var b=Tq();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),db(a,function(c){b.unsubscribeByKey(c);delete Pq[c]}))}
function Vq(a,b){var c=Tq();c&&c.publish.apply(c,arguments)}
function Wq(a){var b=Tq();if(b)if(b.clear(a),a)Xq(a);else for(var c in Qq)Xq(c)}
function Tq(){return C.ytPubsubPubsubInstance}
function Xq(a){Qq[a]&&(a=Qq[a],db(a,function(b){Pq[b]&&delete Pq[b]}),a.length=0)}
L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.Ib;L.prototype.publish=L.prototype.Za;L.prototype.clear=L.prototype.clear;D("ytPubsubPubsubInstance",Lq);D("ytPubsubPubsubTopicToKeys",Qq);D("ytPubsubPubsubIsSynchronous",Rq);D("ytPubsubPubsubSubscribedKeys",Pq);var Yq=Symbol("injectionDeps");function Zq(a){this.name=a}
Zq.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function $q(a){this.key=a}
function ar(){this.h=new Map;this.i=new Map}
ar.prototype.resolve=function(a){return a instanceof $q?br(this,a.key,[],!0):br(this,a,[])};
function br(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.i.has(b))return a.i.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(void 0!==d.Nd)var e=d.Nd;else if(d.kf)e=d[Yq]?cr(a,d[Yq],c):[],e=d.kf.apply(d,ja(e));else if(d.Md){e=d.Md;var f=e[Yq]?cr(a,e[Yq],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ja(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.ig||a.i.set(b,e);return e}
function cr(a,b,c){return b?b.map(function(d){return d instanceof $q?br(a,d.key,c,!0):br(a,d,c)}):[]}
;var dr;function er(){dr||(dr=new ar);return dr}
;var fr=window;function gr(){var a,b;return"h5vcc"in fr&&(null==(a=fr.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=fr.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in fr&&fr.performance.mark&&fr.performance.measure?2:0}
function hr(a){switch(gr()){case 1:fr.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:fr.performance.mark(a+"-start");break;case 0:break;default:Kh()}}
function ir(a){switch(gr()){case 1:fr.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";fr.performance.mark(c);fr.performance.measure(a,b,c);break;case 0:break;default:Kh()}}
;var jr=S("web_enable_lifecycle_monitoring")&&0!==gr(),kr=S("web_enable_lifecycle_monitoring");function lr(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?Pm():d;this.j=c;this.scheduler=d;this.i=new yh;this.h=a;for(a={fb:0};a.fb<this.h.length;a={Rb:a.Rb,fb:a.fb},a.fb++)a.Rb=this.h[a.fb],c=function(e){return function(){e.Rb.Kc();b.h[e.fb].oc=!0;b.h.every(function(f){return!0===f.oc})&&b.i.resolve()}}(a),d=this.getPriority(a.Rb),d=this.scheduler.bb(c,d),this.h[a.fb]=Object.assign({},a.Rb,{Kc:c,
jobId:d})}
function mr(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=v(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.jobId||c.oc||(a.scheduler.oa(c.jobId),a.scheduler.bb(c.Kc,10))}
lr.prototype.cancel=function(){for(var a=v(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.oc||this.scheduler.oa(b.jobId),b.oc=!0;this.i.resolve()};
lr.prototype.getPriority=function(a){var b;return null!=(b=a.priority)?b:this.j};function nr(a){this.state=a;this.plugins=[];this.l=void 0;this.s={};jr&&hr(this.state)}
m=nr.prototype;m.install=function(a){this.plugins.push(a);return this};
m.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);-1<b&&a.plugins.splice(b,1)})};
m.transition=function(a,b){var c=this;jr&&ir(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(mr(this.j),this.j=void 0);or(this,a,b);this.state=a;jr&&hr(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(pr(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function pr(a,b){var c=b.filter(function(e){return 10===qr(a,e)}),d=b.filter(function(e){return 10!==qr(a,e)});
return a.s.hg?function(){var e=B.apply(0,arguments);return A(function(f){if(1==f.h)return f.yield(a.Oe.apply(a,[c].concat(ja(e))),2);a.Hd.apply(a,[d].concat(ja(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.Pe.apply(a,[c].concat(ja(e)));a.Hd.apply(a,[d].concat(ja(e)))}}
m.Pe=function(a){for(var b=B.apply(1,arguments),c=Pm(),d=v(a),e=d.next(),f={};!e.done;f={Bb:f.Bb},e=d.next())f.Bb=e.value,c.Jb(function(g){return function(){rr(g.Bb.name);g.Bb.callback.apply(g.Bb,ja(b));sr(g.Bb.name)}}(f))};
m.Oe=function(a){var b=B.apply(1,arguments),c,d,e,f,g;return A(function(h){1==h.h&&(c=Pm(),d=v(a),e=d.next(),f={});if(3!=h.h){if(e.done)return h.v(0);f.gb=e.value;f.Lb=void 0;g=function(k){return function(){rr(k.gb.name);var l=k.gb.callback.apply(k.gb,ja(b));"function"===typeof(null==l?void 0:l.then)?k.Lb=l.then(function(){sr(k.gb.name)}):sr(k.gb.name)}}(f);
c.Jb(g);return f.Lb?h.yield(f.Lb,3):h.v(3)}f={gb:f.gb,Lb:f.Lb};e=d.next();return h.v(2)})};
m.Hd=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{Kc:function(){rr(e.name);e.callback.apply(e,ja(b));sr(e.name)},
priority:qr(c,e)}});
d.length&&(this.j=new lr(d))};
function qr(a,b){var c,d;return null!=(d=null!=(c=a.l)?c:b.priority)?d:0}
function rr(a){jr&&a&&hr(a)}
function sr(a){jr&&a&&ir(a)}
function or(a,b,c){kr&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
da.Object.defineProperties(nr.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function tr(a){nr.call(this,void 0===a?"none":a);this.h=null;this.l=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.m},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var ur;w(tr,nr);tr.prototype.i=function(a,b){var c=this;this.h=jm(function(){"application_navigating"===c.currentState&&c.transition("none")},5E3);
a(null==b?void 0:b.event)};
tr.prototype.m=function(a,b){this.h&&(ki.oa(this.h),this.h=null);a(null==b?void 0:b.event)};
function vr(){ur||(ur=new tr);return ur}
;function wr(){this.store={};this.h={}}
wr.prototype.storePayload=function(a,b){a=xr(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
wr.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=yr(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ja(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ja(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ja(this.smartExtractMatchingEntries(a))));return c};
wr.prototype.extractMatchingEntries=function(a){a=yr(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ja(this.store[a[c]])),delete this.store[a[c]]);return b};
wr.prototype.getSequenceCount=function(a){a=yr(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function yr(a,b){var c=xr(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&xr(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(zr(b.auth,g[0])){var h=b.isJspb;zr(void 0===h?"undefined":h?"true":"false",g[1])&&zr(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),zr(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function zr(a,b){return void 0===a||"undefined"===a?!0:a===b}
wr.prototype.getSequenceCount=wr.prototype.getSequenceCount;wr.prototype.extractMatchingEntries=wr.prototype.extractMatchingEntries;wr.prototype.smartExtractMatchingEntries=wr.prototype.smartExtractMatchingEntries;wr.prototype.storePayload=wr.prototype.storePayload;function xr(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;function U(a,b){if(a)return a[b.name]}
;var Ar=cl("initial_gel_batch_timeout",2E3),Br=cl("gel_queue_timeout_max_ms",6E4),Cr=Math.pow(2,16)-1,Dr=cl("gel_min_batch_size",5),Er=void 0;function Fr(){this.l=this.h=this.i=0;this.j=!1}
var Gr=new Fr,Hr=new Fr,Ir=new Fr,Jr=new Fr,Kr,Lr=!0,Mr=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",Mr);var Nr={};function Or(){var a=E("yt.logging.ims");a||(a=new wr,D("yt.logging.ims",a));return a}
function Pr(a,b){if("log_event"===a.endpoint){var c=Qr(a),d=Rr(a.payload)||"";a:{if(S("enable_web_tiered_gel")){var e=Sp[d||""];var f,g,h,k=null==er().resolve(new $q(Jo))?void 0:null==(f=Ko())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.eventLoggingConfig)?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(!1===e.enabled&&!S("web_payload_policy_disabled_killswitch"))return;k=Sr(e.tier);if(400===k){Tr(a,b);return}}Nr[c]=
!0;e={cttAuthInfo:c,isJspb:!1,tier:k};Or().storePayload(e,a.payload);Ur(b,c,e,"gelDebuggingEvent"===d)}}
function Ur(a,b,c,d){function e(){Vr({writeThenSend:!0},S("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=void 0===f?!1:f;d=void 0===d?!1:d;a&&(Er=new a);a=cl("tvhtml5_logging_max_batch_ads_fork")||cl("web_logging_max_batch")||100;var g=T(),h=Wr(f,c.tier),k=h.l;d&&(h.j=!0);d=0;c&&(d=Or().getSequenceCount(c));1E3<=d?e():d>=a?Kr||(Kr=Xr(function(){e();Kr=void 0},0)):10<=g-k&&(Yr(f,c.tier),h.l=g)}
function Tr(a,b){if("log_event"===a.endpoint){var c=Qr(a),d=new Map;d.set(c,[a.payload]);var e=Rr(a.payload)||"";b&&(Er=new b);return new Rd(function(f,g){Er&&Er.isReady()?Zr(d,Er,f,g,{bypassNetworkless:!0},!0,"gelDebuggingEvent"===e):f()})}}
function Qr(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);Mr[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Vr(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new Rd(function(e,f){var g=Wr(c,d),h=g.j;g.j=!1;$r(g.i);$r(g.h);g.h=0;Er&&Er.isReady()?void 0===d&&S("enable_web_tiered_gel")?as(e,f,a,b,c,300,h):as(e,f,a,b,c,d,h):(Yr(c,d),e())})}
function as(a,b,c,d,e,f,g){var h=Er;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;g=void 0===g?!1:g;var k=new Map;var l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(void 0!==d)f=S("enable_web_tiered_gel")?Or().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):Or().extractMatchingEntries(e),k.set(d,f);else for(d=v(Object.keys(Nr)),l=d.next();!l.done;l=d.next())l=l.value,e=S("enable_web_tiered_gel")?Or().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):Or().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),0<e.length&&k.set(l,e),(S("web_fp_via_jspb_and_json")&&c.writeThenSend||!S("web_fp_via_jspb_and_json"))&&delete Nr[l];Zr(k,h,a,b,c,!1,g)}
function Yr(a,b){function c(){Vr({writeThenSend:!0},void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=Wr(a,b),e=d===Jr||d===Ir?5E3:Br;S("web_gel_timeout_cap")&&!d.h&&(e=Xr(function(){c()},e),d.h=e);
$r(d.i);e=R("LOGGING_BATCH_TIMEOUT",cl("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&Lr&&(e=Ar);e=Xr(function(){0<cl("gel_min_batch_size")?Or().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=Dr&&c():c()},e);
d.i=e}
function Zr(a,b,c,d,e,f,g){e=void 0===e?{}:e;var h=Math.round(T()),k=a.size,l=(void 0===g?0:g)&&S("vss_through_gel_video_stats")?"video_stats":"log_event";a=v(a);var n=a.next();for(g={};!n.done;g={jc:g.jc,cb:g.cb,dangerousLogToVisitorSession:g.dangerousLogToVisitorSession,lc:g.lc,kc:g.kc},n=a.next()){var r=v(n.value);n=r.next().value;r=r.next().value;g.cb=sb({context:Qo(b.config_||Po())});if(!Na(r)&&!S("throw_err_when_logevent_malformed_killswitch")){d();break}g.cb.events=r;(r=Mr[n])&&bs(g.cb,n,r);
delete Mr[n];g.dangerousLogToVisitorSession="visitorOnlyApprovedKey"===n;cs(g.cb,h,g.dangerousLogToVisitorSession);S("always_send_and_write")&&(e.writeThenSend=!1);g.lc=function(t){S("start_client_gcf")&&ki.na(function(){return A(function(p){return p.yield(ds(t),0)})});
k--;k||c()};
g.jc=0;g.kc=function(t){return function(){t.jc++;if(e.bypassNetworkless&&1===t.jc)try{wp(b,l,t.cb,es({writeThenSend:!0},t.dangerousLogToVisitorSession,t.lc,t.kc,f)),Lr=!1}catch(p){Ok(p),d()}k--;k||c()}}(g);
try{wp(b,l,g.cb,es(e,g.dangerousLogToVisitorSession,g.lc,g.kc,f)),Lr=!1}catch(t){Ok(t),d()}}}
function es(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,vd:a,dangerousLogToVisitorSession:b,Pf:!!e,headers:{},postBodyFormat:"",postBody:"",compress:S("compress_gel")||S("compress_gel_lr")};gs()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(T())));return a}
function cs(a,b,c){gs()||(a.requestTimeMs=String(b));S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=R("EVENT_ID"))&&((c=R("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*Cr/2)),c++,c>Cr&&(c=1),Jk("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function bs(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function gs(){return S("use_request_time_ms_header")||S("lr_use_request_time_ms_header")}
function Xr(a,b){return S("transport_use_scheduler")?S("logging_avoid_blocking_during_navigation")||S("lr_logging_avoid_blocking_during_navigation")?jm(function(){if("none"===vr().currentState)a();else{var c={};vr().install((c.none={callback:a},c))}},b):jm(a,b):hl(a,b)}
function $r(a){S("transport_use_scheduler")?ki.oa(a):window.clearTimeout(a)}
function ds(a){var b,c,d,e,f,g,h,k,l,n;return A(function(r){return 1==r.h?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=U(d,mk),g=null==(f=d)?void 0:f.hotHashData,h=U(d,lk),l=null==(k=d)?void 0:k.coldHashData,(n=er().resolve(new $q(Jo)))?g?e?r.yield(Lo(n,g,e),2):r.yield(Lo(n,g),2):r.v(2):r.return()):l?h?r.yield(Mo(n,l,h),0):r.yield(Mo(n,l),0):r.v(0)})}
function Wr(a,b){b=void 0===b?200:b;return a?300===b?Jr:Hr:300===b?Ir:Gr}
function Rr(a){a=Object.keys(a);a=v(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,Sp[b])return b}
function Sr(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var hs=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",hs);
function is(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||T());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=Kq();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!S("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,hs[b]=b in hs?hs[b]+1:0,a.sequence={index:hs[b],groupKey:b},d.endOfSequence&&delete hs[d.sequenceGroup]);(d.sendIsolatedPayload?Tr:Pr)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function Zm(a,b,c){c=void 0===c?{}:c;var d=tq;R("ytLoggingEventsDefaultDisabled",!1)&&tq===tq&&(d=null);S("web_all_payloads_via_jspb")&&!c.timestamp&&(c.lact=Kq(),c.timestamp=T());is(a,b,d,c)}
;D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var js=new Set,ks=0,ls=0,ms=0,ns=[],ps=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Ym(a){qs(a)}
function rs(a){qs(a,"WARNING")}
function ss(a){a instanceof Error?qs(a):(a=Oa(a)?JSON.stringify(a):String(a),a=new fm(a),a.name="RejectedPromiseError",rs(a))}
function qs(a,b,c,d,e,f,g,h){f=void 0===f?{}:f;f.name=c||R("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||R("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),S("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(5<=ks))){d=ns;var k=Ac(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var n=l.split("\n");n.shift();l=n.join("\n")}n=k.lineNumber||"Not available";k=k.fileName||"Not available";var r=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var t=0;t<a.args.length&&!(r=Gl(a.args[t],"params."+t,c,r),
500<=r);t++);else if(a.hasOwnProperty("params")&&a.params){var p=a.params;if("object"===typeof a.params)for(t in p){if(p[t]){var x="params."+t,y=Il(p[t]);c[x]=y;r+=x.length+y.length;if(500<r)break}}else c.params=Il(p)}if(d.length)for(t=0;t<d.length&&!(r=Gl(d[t],"params.context."+t,c,r),500<=r);t++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);t={message:e,name:f,lineNumber:n,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(t.lineNumber=
t.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=Cl();c=v(a.Ua);for(d=c.next();!d.done;d=c.next())if(d=d.value,t.message&&t.message.match(d.ag)){a=d.weight;break a}a=v(a.Ra);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(t)){a=c.weight;break a}a=1}t.sampleWeight=a;a=v(xl);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.mc[t.name])for(e=v(c.mc[t.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=t.message.match(f.regexp)){t.params["params.error.original"]=d[0];e=f.groups;f={};
for(n=0;n<e.length;n++)f[e[n]]=d[n+1],t.params["params.error."+e[n]]=d[n+1];t.message=c.Nc(f);break}t.params||(t.params={});a=Cl();t.params["params.errorServiceSignature"]="msg="+a.Ua.length+"&cb="+a.Ra.length;t.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(t.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));yb("sample").constructor!==xb&&(t.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(t);
if(0!==t.sampleWeight&&!js.has(t.message)){if(g&&S("web_enable_error_204"))ts(void 0===b?"ERROR":b,t);else{b=void 0===b?"ERROR":b;"ERROR"===b?(Dl.Za("handleError",t),S("record_app_crashed_web")&&0===ms&&1===t.sampleWeight&&(ms++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},S("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:t.message}}}}),Zm("appCrashed",g)),ls++):"WARNING"===b&&Dl.Za("handleWarning",t);if(S("kevlar_gel_error_routing")){g=b;h=void 0===
h?{}:h;b:{a=v(ps);for(c=a.next();!c.done;c=a.next())if(en(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:t.stack};t.fileName&&(c.filename=t.fileName);a=t.lineNumber&&t.lineNumber.split?t.lineNumber.split(":"):[];0!==a.length&&(1!==a.length||isNaN(Number(a[0]))?2!==a.length||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:t.message,errorClassName:t.name,sampleWeight:t.sampleWeight};
"ERROR"===g?a.level="ERROR_LEVEL_ERROR":"WARNING"===g&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];R("FEXP_EXPERIMENTS")&&(h.experimentIds=R("FEXP_EXPERIMENTS"));e=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Kk("web_disable_gel_stp_ecatcher_killswitch")&&e)for(f=v(Object.keys(e)),d=f.next();!d.done;d=f.next())d=d.value,h.kvPairs.push({key:d,value:String(e[d])});if(e=t.params)for(f=v(Object.keys(e)),d=f.next();!d.done;d=f.next())d=
d.value,h.kvPairs.push({key:"client."+d,value:String(e[d])});d=R("SERVER_NAME");e=R("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(Zm("clientError",h),("ERROR"===g||S("errors_flush_gel_always_killswitch"))&&Vr(void 0,void 0,!1))}S("suppress_error_204_logging")||ts(b,t)}try{js.add(t.message)}catch(z){}ks++}}}
function ts(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:R("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=v(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=v(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=R("SERVER_NAME");b=R("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}ol(R("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function us(){this.register=new Map}
function vs(a){a=v(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.dg("ABORTED")}
us.prototype.clear=function(){vs(this);this.register.clear()};
var ws=new us;var xs=Date.now().toString();
function ys(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(xs)for(a=1,b=0;b<xs.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^xs.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var zs,As=C.ytLoggingDocDocumentNonce_;As||(As=ys(),D("ytLoggingDocDocumentNonce_",As));zs=As;function Bs(a){this.h=a}
m=Bs.prototype;m.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
m.getAsJspb=function(){var a=new vk;if(void 0!==this.h.trackingParams){var b=this.h.trackingParams;if(null!=b)if("string"===typeof b)b=b?new Te(b,Qe):Re||(Re=new Te(null,Qe));else if(b.constructor!==Te)if(Pe(b))b instanceof Uint8Array||Array.isArray(b),b=b.length?new Te(new Uint8Array(b),Qe):Re||(Re=new Te(null,Qe));else throw Error();J(a,1,b)}else void 0!==this.h.veType&&J(a,2,qf(this.h.veType)),void 0!==this.h.veCounter&&J(a,6,qf(this.h.veCounter)),void 0!==this.h.elementIndex&&J(a,3,qf(this.h.elementIndex)),
this.h.isCounterfactual&&J(a,5,of(!0));void 0!==this.h.dataElement&&(b=this.h.dataElement.getAsJspb(),Tf(a,vk,7,b));void 0!==this.h.youtubeData&&Tf(a,ok,8,this.h.jspbYoutubeData);return a};
m.toString=function(){return JSON.stringify(this.getAsJson())};
m.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
m.getLoggingDirectives=function(){return this.h.loggingDirectives};function Cs(a){return R("client-screen-nonce-store",{})[void 0===a?0:a]}
function Ds(a,b){b=void 0===b?0:b;var c=R("client-screen-nonce-store");c||(c={},Jk("client-screen-nonce-store",c));c[b]=a}
function Es(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Fs(a){return R(Es(void 0===a?0:a))}
D("yt_logging_screen.getRootVeType",Fs);function Gs(){var a=R("csn-to-ctt-auth-info");a||(a={},Jk("csn-to-ctt-auth-info",a));return a}
function Hs(){return Object.values(R("client-screen-nonce-store",{})).filter(function(a){return void 0!==a})}
function Is(a){a=Cs(void 0===a?0:a);if(!a&&!R("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",Is);function Js(a,b,c){var d=Gs();(c=Is(c))&&delete d[c];b&&(d[a]=b)}
function Ks(a){return Gs()[a]}
D("yt_logging_screen.getCttAuthInfo",Ks);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==Cs(c)||b!==R(Es(c)))if(Js(a,d,c),Ds(a,c),Jk(Es(c),b),b=function(){setTimeout(function(){a&&Zm("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:zs,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});var Ls=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",Ls);function Ms(a){Ek(Ls,arguments)}
;function Ns(){var a=rb(Os),b;return(new Rd(function(c,d){a.onSuccess=function(e){gl(e)?c(new Ps(e)):d(new Qs("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Qs("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Qs("Request timed out","net.timeout",e))};
b=ol("//googleads.g.doubleclick.net/pagead/id",a)})).uc(function(c){c instanceof be&&b.abort();
return Xd(c)})}
function Qs(a,b,c){Za.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
w(Qs,Za);function Ps(a){this.xhr=a}
;function Rs(){this.h=0;this.value_=null}
Rs.prototype.then=function(a,b,c){return 1===this.h&&a?(a=a.call(c,this.value_))&&"function"===typeof a.then?a:Ss(a):2===this.h&&b?(a=b.call(c,this.value_))&&"function"===typeof a.then?a:Ts(a):this};
Rs.prototype.getValue=function(){return this.value_};
Rs.prototype.isRejected=function(){return 2==this.h};
Rs.prototype.$goog_Thenable=!0;function Ts(a){var b=new Rs;a=void 0===a?null:a;b.h=2;b.value_=void 0===a?null:a;return b}
function Ss(a){var b=new Rs;a=void 0===a?null:a;b.h=1;b.value_=void 0===a?null:a;return b}
;function Us(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:Zk(a)?"same-origin":"cors",credentials:Zk(a)?"same-origin":"include"};b={};for(var d=v(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function Vs(){return rg()||(Ae||Be)&&en("applewebkit")&&!en("version")&&(!en("safari")||en("gsa/"))||Oc&&en("version/")?!0:R("EOM_VISITOR_DATA")?!1:!0}
;function Ws(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in tk)if(tk[d]==c.embeddedPlayerMode){b=tk[d];break b}}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function Xs(a){Za.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Ys;this.isTimeout=a instanceof Qs&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof be}
w(Xs,Za);Xs.prototype.name="BiscottiError";function Ys(){Za.call(this,"Biscotti ID is missing from server")}
w(Ys,Za);Ys.prototype.name="BiscottiMissingError";var Os={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Zs=null;function $s(){if(S("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Vs())return Error("User has not consented - not fetching biscotti id.");var a=R("PLAYER_VARS",{});if("1"==pb(a))return Error("Biscotti ID is not available in private embed mode");if(Ws(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Ck(){var a=$s();if(void 0!==a)return Xd(a);Zs||(Zs=Ns().then(at).uc(function(b){return bt(2,b)}));
return Zs}
function at(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Ys;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Ys;a=a.id;Dk(a);Zs=Ss(a);ct(18E5,2);return a}
function bt(a,b){b=new Xs(b);Dk("");Zs=Ts(b);0<a&&ct(12E4,a-1);throw b;}
function ct(a,b){hl(function(){Ns().then(at,function(c){return bt(b,c)}).uc(ab)},a)}
function dt(){try{var a=E("yt.ads.biscotti.getId_");return a?a():Ck()}catch(b){return Xd(b)}}
;function et(a){if("1"!=pb(R("PLAYER_VARS",{}))){a&&Bk();try{dt().then(function(){},function(){}),hl(et,18E5)}catch(b){Ok(b)}}}
;function ft(){var a=Wl(),b=Zl(119),c=1<window.devicePixelRatio;if(document.body&&ui(document.body,"exp-invert-logo"))if(c&&!ui(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!ui(d,"inverted-hdpi")){var e=si(d);ti(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&ui(document.body,"inverted-hdpi")&&vi();if(b!=c){b="f"+(Math.floor(119/31)+1);d=$l(b)||0;d=c?d|67108864:d&-67108865;0===d?delete Tl[b]:(c=d.toString(16),Tl[b]=c.toString());
c=!0;S("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in Tl)Tl.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(Tl[f])));var f=d.join("&");Pl(b,f,63072E3,a.i,c)}}
;var gt=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function ht(){var a=void 0===a?window.location.href:a;if(S("kevlar_disable_theme_param"))return null;ac(bc(5,a));try{var b=Xk(a).theme;return gt.get(b)||null}catch(c){}return null}
;function jt(){this.h={};if(this.i=Sl()){var a=Ql("CONSISTENCY");a&&kt(this,{encryptedTokenJarContents:a})}}
jt.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.Na.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=v(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];kt(this,a)}};
function kt(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&Pl("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var lt=window.location.hostname.split(".").slice(-2).join(".");function mt(){var a=R("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===R("INNERTUBE_CLIENT_NAME")&&(this.h=nt(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var ot;function pt(){ot=E("yt.clientLocationService.instance");ot||(ot=new mt,D("yt.clientLocationService.instance",ot));return ot}
m=mt.prototype;m.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.i.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.i.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
m.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===R("INNERTUBE_CLIENT_NAME")?(this.h=nt(this))&&this.h.set("yt-location-playability-token",a,15552E3):Pl("YT_CL",JSON.stringify({loctok:a}),15552E3,lt,!0))};
function nt(a){return void 0===a.h?new Qm("yt-client-location"):a.h}
m.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.h=nt(this))&&this.h.remove("yt-location-playability-token"):Rl("YT_CL")};
m.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===R("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
m.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};function qt(a,b){if(!a)return!1;var c,d=null==(c=U(a,sk))?void 0:c.signal;if(d&&b.mb)return!!b.mb[d];var e;if((c=null==(e=U(a,pk))?void 0:e.request)&&b.Ac)return!!b.Ac[c];for(var f in a)if(b.zc[f])return!0;return!1}
function rt(a,b){var c,d=null==(c=U(a,sk))?void 0:c.signal;if(d&&b.mb&&(c=b.mb[d]))return c();var e;if((c=null==(e=U(a,pk))?void 0:e.request)&&b.Ac&&(e=b.Ac[c]))return e();for(var f in a)if(b.zc[f]&&(a=b.zc[f]))return a()}
;function st(a){return function(){return new a}}
;var tt={},ut=(tt.WEB_UNPLUGGED="^unplugged/",tt.WEB_UNPLUGGED_ONBOARDING="^unplugged/",tt.WEB_UNPLUGGED_OPS="^unplugged/",tt.WEB_UNPLUGGED_PUBLIC="^unplugged/",tt.WEB_CREATOR="^creator/",tt.WEB_KIDS="^kids/",tt.WEB_EXPERIMENTS="^experiments/",tt.WEB_MUSIC="^music/",tt.WEB_REMIX="^music/",tt.WEB_MUSIC_EMBEDDED_PLAYER="^music/",tt.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",tt);
function vt(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=ut[b];if(c){var d=new RegExp(c),e=v(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(ut).forEach(function(g){var h=v(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=v(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function wt(){}
wt.prototype.m=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?Ml:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=R("INNERTUBE_CONTEXT");if(g){g=sb(g);S("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=R("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;Wl();var l="USER_INTERFACE_THEME_LIGHT";Zl(165)?l="USER_INTERFACE_THEME_DARK":Zl(174)?l="USER_INTERFACE_THEME_LIGHT":!S("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");k=k?l:ht()||l;h.userInterfaceTheme=k;if(!f){if(k=dm())h.connectionType=
k;S("web_log_effective_connection_type")&&(k=em())&&(g.client.effectiveConnectionType=k)}var n;if(S("web_log_memory_total_kbytes")&&(null==(n=C.navigator)?0:n.deviceMemory)){var r;n=null==(r=C.navigator)?void 0:r.deviceMemory;g.client.memoryTotalKbytes=""+1E6*n}S("web_gcf_hashes_innertube")&&(k=No())&&(r=k.coldConfigData,n=k.coldHashData,k=k.hotHashData,g.client.configInfo=g.client.configInfo||{},g.client.configInfo.coldConfigData=r,g.client.configInfo.coldHashData=n,g.client.configInfo.hotHashData=
k);r=Xk(C.location.href);!S("web_populate_internal_geo_killswitch")&&r.internalcountrycode&&(h.internalGeo=r.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:C.location.href},S("kevlar_woffle")&&Nl.h&&(r=Nl.h,h.mainAppWebInfo.pwaInstallabilityStatus=!r.h&&r.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=Ol(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):
"TVHTML5"===h.clientName&&(!S("web_lr_app_quality_killswitch")&&(r=R("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:r})),r=R("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:r}));if(!S("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var t=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(V){}t=void 0}t&&(h.timeZone=t)}(t=R("EXPERIMENTS_TOKEN",""))?h.experimentsToken=
t:delete h.experimentsToken;t=dl();jt.h||(jt.h=new jt);h=jt.h.h;r=[];n=0;for(var p in h)r[n++]=h[p];g.request=Object.assign({},g.request,{internalExperimentFlags:t,consistencyTokenJars:r});!S("web_prequest_context_killswitch")&&(p=R("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=p);t=Wl();p=Zl(58);t=t.get("gsml","");g.user=Object.assign({},g.user);p&&(g.user.enableSafetyMode=p);t&&(g.user.lockedSafetyMode=!0);S("warm_op_csn_cleanup")?e&&(f=Is())&&(g.clientScreenNonce=f):
!f&&(f=Is())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=E("yt.mdx.remote.remoteClient_"))g.remoteClient=d;pt().setLocationOnInnerTubeContext(g);try{var x=$k(),y=x.bid;delete x.bid;g.adSignalsInfo={params:[],bid:y};var z=v(Object.entries(x));for(var H=z.next();!H.done;H=z.next()){var I=v(H.value),M=I.next().value,N=I.next().value;x=M;y=N;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:x,value:""+y})}}catch(V){qs(V)}z=g}else qs(Error("Error: No InnerTubeContext shell provided in ytconfig.")),
z={};z={context:z};if(H=this.h(a)){this.i(z,H,b);var K;b="/youtubei/v1/"+vt(this.j());(H=null==(K=U(a.commandMetadata,rk))?void 0:K.apiUrl)&&(b=H);K=b;(b=R("INNERTUBE_HOST_OVERRIDE"))&&(K=String(b)+String(dc(K)));b={};b.key=R("INNERTUBE_API_KEY");S("json_condensed_response")&&(b.prettyPrint="false");K=Yk(K,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:K,kb:Us(K),Na:z,config:a};a.config.Wb?a.config.Wb.identity=c:a.config.Wb={identity:c};return a}qs(new fm("Error: Failed to create Request from Command.",
a))};
da.Object.defineProperties(wt.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});function xt(){}
w(xt,wt);xt.prototype.m=function(){return{input:"/getDatasyncIdsEndpoint",kb:Us("/getDatasyncIdsEndpoint","GET"),Na:{}}};
xt.prototype.j=function(){return[]};
xt.prototype.h=function(){};
xt.prototype.i=function(){};var zt={},At=(zt.GET_DATASYNC_IDS=st(xt),zt);var Bt="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function Ct(a,b){var c=void 0===c?!0:c;var d=R("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=cc(window.location.href);e&&d.push(e);e=cc(a);if(0<=cb(d,e)||!e&&0==a.lastIndexOf("/",0))if(d=document.createElement("a"),Eh(d,a),a=d.href)if(a=dc(a),a=ec(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Is()},b)),f){var f=parseInt(f,10);isFinite(f)&&0<f&&Dt(a,b,f)}else Dt(a,b)}
function Dt(a,b,c){a=Et(a);b=b?jc(b):"";c=c||5;Vs()&&Pl(a,b,c)}
function Et(a){if(S("st_skip_debug_params")){for(var b=v(Bt),c=b.next();!c.done;c=b.next())a=qc(a,c.value);return"ST-"+Zb(a).toString(36)}return"ST-"+Zb(a).toString(36)}
;function Ft(){try{return!!self.localStorage}catch(a){return!1}}
;function Gt(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function Ht(a){if(Ft()){var b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Gt(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function It(){if(!Ft())return!1;var a=hm(),b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next())if(c=Gt(c.value),void 0!==c&&c!==a)return!0;return!1}
;function Jt(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return S("copy_login_info_to_st_cookie")&&("WEB"===R("INNERTUBE_CLIENT_NAME")||"WEB_CREATOR"===R("INNERTUBE_CLIENT_NAME"))&&a}
function Kt(a){if(rg()&&Jt()){var b=R("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=cc(window.location.href);c&&b.push(c);c=cc(a);0<=cb(b,c)||!c&&0==a.lastIndexOf("/",0)?(b=dc(a),(b=ec(b))?(b=Et(b),b=(b=Ql(b)||null)?Wk(b):{}):b=null):b=null;null==b&&(b={});c=b;var d=void 0;Jt()?(d||(d=R("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&Ct(a,b)}}
;function Lt(a){var b=B.apply(1,arguments);if(!Mt(a)||b.some(function(d){return!Mt(d)}))throw Error("Only objects may be merged.");
b=v(b);for(var c=b.next();!c.done;c=b.next())Nt(a,c.value);return a}
function Nt(a,b){for(var c in b)if(Mt(b[c])){if(c in a&&!Mt(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Nt(a[c],b[c])}else if(Ot(b[c])){if(c in a&&!Ot(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Pt(a[c],b[c])}else a[c]=b[c];return a}
function Pt(a,b){b=v(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Mt(c)?a.push(Nt({},c)):Ot(c)?a.push(Pt([],c)):a.push(c);return a}
function Mt(a){return"object"===typeof a&&!Array.isArray(a)}
function Ot(a){return"object"===typeof a&&Array.isArray(a)}
;function Qt(a){var b;(b=E("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function Rt(){var a=Qt();a.info||(a.info={});return a.info}
function St(a){a=Qt(a);a.metadata||(a.metadata={});return a.metadata}
function Tt(a){a=Qt(a);a.tick||(a.tick={});return a.tick}
function Ut(a){a=Qt(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Vt(a){a=Ut(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Wt(a){var b=Qt(a).nonce;b||(b=ys(),Qt(a).nonce=b);return b}
;function Xt(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function Yt(a){a=a||"";var b=E("ytcsi.reference");b||(Xt(),b=E("ytcsi.reference"));if(b[a])return b[a];var c=Xt(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var W={},Zt=(W.auto_search="LATENCY_ACTION_AUTO_SEARCH",W.ad_to_ad="LATENCY_ACTION_AD_TO_AD",W.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",W["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",W.app_startup="LATENCY_ACTION_APP_STARTUP",W["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",W["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",W["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",W["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
W["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",W["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",W["asset.composition_policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",W["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",W["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",W["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",W["asset.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",W["asset.ownership"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",W["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",W["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",W["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",W["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",W["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",W["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",W["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",
W["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",W["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",W.browse="LATENCY_ACTION_BROWSE",W.cast_splash="LATENCY_ACTION_CAST_SPLASH",W.channels="LATENCY_ACTION_CHANNELS",W.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",W["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",W["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",W["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",
W["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",W["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",W["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",W["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",W["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",W["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",W["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",W["channel.translations"]=
"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",W["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",W["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",W.chips="LATENCY_ACTION_CHIPS",W["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",W["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",W["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",W.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",W.embed="LATENCY_ACTION_EMBED",
W.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",W.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",W.explore="LATENCY_ACTION_EXPLORE",W.home="LATENCY_ACTION_HOME",W.library="LATENCY_ACTION_LIBRARY",W.live="LATENCY_ACTION_LIVE",W.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",W.mini_app="LATENCY_ACTION_MINI_APP_PLAY",W.onboarding="LATENCY_ACTION_ONBOARDING",W.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",W["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",
W["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",W["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",W["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",W["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",W["owner.bulk"]="LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",W["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",W["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",W["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",W["owner.claimed_videos"]=
"LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",W["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",W["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",W["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",W["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",W["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",W["owner.policies"]=
"LATENCY_ACTION_CREATOR_CMS_POLICIES",W["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",W["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",W["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",W.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",W.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",W.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",W.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",W["playlist.videos"]="LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",
W["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",W["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",W.prebuffer="LATENCY_ACTION_PREBUFFER",W.prefetch="LATENCY_ACTION_PREFETCH",W.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",W.profile_switcher="LATENCY_ACTION_LOGIN",W.reel_watch="LATENCY_ACTION_REEL_WATCH",W.results="LATENCY_ACTION_RESULTS",W["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",W.search_ui="LATENCY_ACTION_SEARCH_UI",W.search_suggest="LATENCY_ACTION_SUGGEST",
W.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",W.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",W.seek="LATENCY_ACTION_PLAYER_SEEK",W.settings="LATENCY_ACTION_SETTINGS",W.store="LATENCY_ACTION_STORE",W.tenx="LATENCY_ACTION_TENX",W.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",W.watch="LATENCY_ACTION_WATCH",W.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",W["watch,watch7"]="LATENCY_ACTION_WATCH",W["watch,watch7_html5"]="LATENCY_ACTION_WATCH",W["watch,watch7ad"]="LATENCY_ACTION_WATCH",W["watch,watch7ad_html5"]=
"LATENCY_ACTION_WATCH",W.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",W.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",W["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",W["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",W["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",W["video.copyright"]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",W["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",W["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",W["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",
W["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",W["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",W["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",W["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",W["video.rights_management"]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",W["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",W.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",W.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",
W.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",W.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",W.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",W),X={},$t=(X.ad_allowed="adTypesAllowed",X.yt_abt="adBreakType",X.ad_cpn="adClientPlaybackNonce",X.ad_docid="adVideoId",X.yt_ad_an="adNetworks",X.ad_at="adType",X.aida="appInstallDataAgeMs",X.browse_id="browseId",X.p="httpProtocol",X.t="transportProtocol",X.cpn="clientPlaybackNonce",X.ccs="creatorInfo.creatorCanaryState",X.ctop=
"creatorInfo.topEntityType",X.csn="clientScreenNonce",X.docid="videoId",X.GetHome_rid="requestIds",X.GetSearch_rid="requestIds",X.GetPlayer_rid="requestIds",X.GetWatchNext_rid="requestIds",X.GetBrowse_rid="requestIds",X.GetLibrary_rid="requestIds",X.is_continuation="isContinuation",X.is_nav="isNavigation",X.b_p="kabukiInfo.browseParams",X.is_prefetch="kabukiInfo.isPrefetch",X.is_secondary_nav="kabukiInfo.isSecondaryNav",X.nav_type="kabukiInfo.navigationType",X.prev_browse_id="kabukiInfo.prevBrowseId",
X.query_source="kabukiInfo.querySource",X.voz_type="kabukiInfo.vozType",X.yt_lt="loadType",X.mver="creatorInfo.measurementVersion",X.yt_ad="isMonetized",X.nr="webInfo.navigationReason",X.nrsu="navigationRequestedSameUrl",X.pnt="performanceNavigationTiming",X.prt="playbackRequiresTap",X.plt="playerInfo.playbackType",X.pis="playerInfo.playerInitializedState",X.paused="playerInfo.isPausedOnLoad",X.yt_pt="playerType",X.fmt="playerInfo.itag",X.yt_pl="watchInfo.isPlaylist",X.yt_pre="playerInfo.preloadType",
X.yt_ad_pr="prerollAllowed",X.pa="previousAction",X.yt_red="isRedSubscriber",X.rce="mwebInfo.responseContentEncoding",X.rc="resourceInfo.resourceCache",X.scrh="screenHeight",X.scrw="screenWidth",X.st="serverTimeMs",X.ssdm="shellStartupDurationMs",X.br_trs="tvInfo.bedrockTriggerState",X.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",X.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",X.label="tvInfo.label",X.is_mdx="tvInfo.isMdx",X.preloaded="tvInfo.isPreloaded",X.aac_type="tvInfo.authAccessCredentialType",
X.upg_player_vis="playerInfo.visibilityState",X.query="unpluggedInfo.query",X.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",X.yt_vst="videoStreamType",X.vph="viewportHeight",X.vpw="viewportWidth",X.yt_vis="isVisible",X.rcl="mwebInfo.responseContentLength",X.GetSettings_rid="requestIds",X.GetTrending_rid="requestIds",X.GetMusicSearchSuggestions_rid="requestIds",X.REQUEST_ID="requestIds",X),au="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
bu={},cu=(bu.ccs="CANARY_STATE_",bu.mver="MEASUREMENT_VERSION_",bu.pis="PLAYER_INITIALIZED_STATE_",bu.yt_pt="LATENCY_PLAYER_",bu.pa="LATENCY_ACTION_",bu.ctop="TOP_ENTITY_TYPE_",bu.yt_vst="VIDEO_STREAM_TYPE_",bu),du="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function eu(a,b,c){c=Ut(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in $t){c=$t[a];0<=cb(au,c)&&(b=!!b);a in cu&&"string"===typeof b&&(b=cu[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return Lt({},d)}0<=cb(du,a)||rs(new fm("Unknown label logged with GEL CSI",a))}
;function fu(a,b){So.call(this,1,arguments);this.timer=b}
w(fu,So);var gu=new To("aft-recorded",fu);var hu=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",hu);function iu(){this.h=0}
function ju(){iu.h||(iu.h=new iu);return iu.h}
iu.prototype.tick=function(a,b,c,d){ku(this,"tick_"+a+"_"+b)||Zm("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
iu.prototype.info=function(a,b,c){var d=Object.keys(a).join("");ku(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,Zm("latencyActionInfo",a,{cttAuthInfo:c}))};
iu.prototype.jspbInfo=function(){};
iu.prototype.span=function(a,b,c){var d=Object.keys(a).join("");ku(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,Zm("latencyActionSpan",a,{cttAuthInfo:c}))};
function ku(a,b){hu[b]=hu[b]||{count:0};var c=hu[b];c.count++;c.time=T();a.h||(a.h=jm(function(){var d=T(),e;for(e in hu)hu[e]&&6E4<d-hu[e].time&&delete hu[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new fm("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||rs(c)),!0):!1}
;var lu=window;function mu(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function nu(){var a;if(S("csi_use_performance_navigation_timing")||S("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==Y?void 0:null==(a=Y.getEntriesByType)?void 0:null==(b=a.call(Y,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=ou(e.requestStart),e.responseEnd=ou(e.responseEnd),e.redirectStart=ou(e.redirectStart),e.redirectEnd=ou(e.redirectEnd),e.domainLookupEnd=ou(e.domainLookupEnd),e.connectStart=ou(e.connectStart),e.connectEnd=
ou(e.connectEnd),e.responseStart=ou(e.responseStart),e.secureConnectionStart=ou(e.secureConnectionStart),e.domainLookupStart=ou(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Y.timing}else a=Y.timing;return a}
function ou(a){return Math.round(pu()+a)}
function pu(){return(S("csi_use_time_origin")||S("csi_use_time_origin_tvhtml5"))&&Y.timeOrigin?Math.floor(Y.timeOrigin):Y.timing.navigationStart}
var Y=lu.performance||lu.mozPerformance||lu.msPerformance||lu.webkitPerformance||new mu;var qu=!1,ru={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Ua(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||ab,Y);function su(a,b,c){if(null!==b){if("yt_lt"===a){var d="string"===typeof b?b:""+b;St(c).loadType=d}(a=eu(a,b,c))&&tu(a,c)}}
function tu(a,b){if(!S("web_csi_action_sampling_enabled")||!Qt(b).actionDisabled){var c=Yt(b||"");Lt(c.info,a);a.loadType&&(c=a.loadType,St(b).loadType=c);Lt(Vt(b),a);c=Wt(b);b=Qt(b).cttAuthInfo;ju().info(a,c,b)}}
function uu(){var a,b,c,d;return(null!=(d=null==er().resolve(new $q(Jo))?void 0:null==(a=Ko())?void 0:null==(b=a.loggingHotConfig)?void 0:null==(c=b.csiConfig)?void 0:c.debugTicks)?d:[]).map(function(e){return Object.values(e)[0]})}
function vu(a,b,c){if(!S("web_csi_action_sampling_enabled")||!Qt(c).actionDisabled){var d=Wt(c),e;if(e=S("web_csi_debug_sample_enabled")&&d)if(!1===Qt(c).debugTicksExcludedLogged)e=!1;else if(0===uu().length)e=Qt(c).debugTicksExcludedLogged=!1;else{var f,g,h;e=(null==er().resolve(new $q(Jo))?void 0:null==(f=Ko())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.csiConfig)?void 0:h.debugSampleWeight)||0;if(f=0!==e)b:{f=uu();if(0<f.length)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=
f=0;g<d.length;g++)f=31*f+d.charCodeAt(g),g<d.length-1&&(f%=Math.pow(2,47));e=0!==f%1E5%e;Qt(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,tu(f,c));Qt(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){b||"_"===a[0]||(e=a,Y.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),Y.mark(e)));e=Yt(c||"");e.tick[a]=b||T();if(e.callback&&e.callback[a])for(e=v(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=Ut(c);e.gelTicks&&(e.gelTicks[a]=!0);f=Tt(c);e=b||T();S("log_repeated_ytcsi_ticks")?
a in f||(f[a]=e):f[a]=e;f=Qt(c).cttAuthInfo;"_start"===a?(a=ju(),ku(a,"baseline_"+d)||Zm("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):ju().tick(a,d,b,f);wu(c);return e}}}
function xu(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=vq+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function yu(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);Xb()&&a.setAttribute("nonce",Xb());return c?(a=Y.getEntriesByName(c))&&a[0]&&(a=a[0],c=pu(),vu("rsf_"+b,c+Math.round(a.fetchStart)),vu("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function zu(){var a=window.location.protocol,b=Y.getEntriesByType("resource");b=eb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=gb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(vu("wffs",ou(b.startTime)),vu("wffe",ou(b.responseEnd)))}
function Au(a){var b=Bu("aft",a);if(b)return b;b=R((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=Bu(b[d],a);if(e)return e}return NaN}
function Bu(a,b){if(a=Tt(b)[a])return"number"===typeof a?a:a[a.length-1]}
function wu(a){var b=Bu("_start",a),c=Au(a);b&&c&&!qu&&(Yo(gu,new fu(Math.round(c-b),a)),qu=!0)}
function Cu(a,b){for(var c=v(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!Cu(a[d],b[d]))return!1;return!0}
function Du(){if(Y.getEntriesByType){var a=Y.getEntriesByType("paint");if(a=hb(a,function(b){return"first-paint"===b.name}))return ou(a.startTime)}a=Y.timing;
return a.De?Math.max(0,a.De):0}
;function Eu(a,b){Nk(function(){Yt("").info.actionType=a;b&&Jk("TIMING_AFT_KEYS",b);Jk("TIMING_ACTION",a);var c=R("TIMING_INFO",{}),d;for(d in c)c.hasOwnProperty(d)&&su(d,c[d]);c={isNavigation:!0,actionType:Zt[R("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};if(d=R("PREVIOUS_ACTION"))c.previousAction=Zt[d]||"LATENCY_ACTION_UNKNOWN";if(d=R("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=R("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=Is())&&"UNDEFINED_CSN"!==d&&(c.clientScreenNonce=d);d=xu();if(1===d||-1===d)c.isVisible=
!0;St();Rt();c.loadType="cold";d=Rt();var e=nu(),f=pu(),g=R("CSI_START_TIMESTAMP_MILLIS",0);0<g&&!S("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(vu("srt",e.responseStart),1!==d.prerender&&vu("_start",f,void 0));d=Du();0<d&&vu("fpt",d);d=nu();d.isPerformanceNavigationTiming&&tu({performanceNavigationTiming:!0});vu("nreqs",d.requestStart,void 0);vu("nress",d.responseStart,void 0);vu("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(vu("nrs",d.redirectStart,void 0),vu("nre",
d.redirectEnd,void 0));0<d.domainLookupEnd-d.domainLookupStart&&(vu("ndnss",d.domainLookupStart,void 0),vu("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-d.connectStart&&(vu("ntcps",d.connectStart,void 0),vu("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=pu()&&0<d.connectEnd-d.secureConnectionStart&&(vu("nstcps",d.secureConnectionStart,void 0),vu("ntcpe",d.connectEnd,void 0));Y&&"getEntriesByType"in Y&&zu();d=[];if(document.querySelector&&Y&&Y.getEntriesByName)for(var h in ru)ru.hasOwnProperty(h)&&
(e=ru[h],yu(h,e)&&d.push(e));if(0<d.length)for(c.resourceInfo=[],h=v(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});tu(c);c=Rt();h=Vt();if("cold"===St().loadType&&("cold"===c.yt_lt||"cold"===h.loadType)){d=Tt();e=Ut();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if("number"===typeof d[k])vu(k,Bu(k));else if(S("log_repeated_ytcsi_ticks"))for(f=v(d[k]),g=f.next();!g.done;g=f.next())g=g.value,vu(k.slice(1),g);k={};d=!1;e=v(Object.keys(c));for(f=e.next();!f.done;f=
e.next())f=f.value,(f=eu(f,c[f]))&&!Cu(Vt(),f)&&(Lt(h,f),Lt(k,f),d=!0);d&&tu(k)}D("ytglobal.timingready_",!0);k=R("TIMING_ACTION");E("ytglobal.timingready_")&&k&&Fu()&&Au()&&wu()})()}
function Gu(a,b,c,d){Nk(su)(a,b,c,d)}
function Hu(a,b,c){return Nk(vu)(a,b,c)}
function Fu(){return Nk(function(){return"_start"in Tt()})()}
function Iu(){Nk(function(){var a=Wt();requestAnimationFrame(function(){setTimeout(function(){a===Wt()&&Hu("ol",void 0,void 0)},0)})})()}
var Ju=window;Ju.ytcsi&&(Ju.ytcsi.info=Gu,Ju.ytcsi.tick=Hu);var Ku="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD".split(" "),Lu=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];function Mu(a,b,c,d){this.j=a;this.aa=b;this.m=c;this.l=d;this.i=void 0;this.h=new Map;a.mb||(a.mb={});a.mb=Object.assign({},At,a.mb)}
function Nu(a,b,c,d){if(void 0!==Mu.h){if(d=Mu.h,a=[a!==d.j,b!==d.aa,c!==d.m,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new fm("InnerTubeTransportService is already initialized",a);
}else Mu.h=new Mu(a,b,c,d)}
function Ou(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?Ml:c;var d=rt(b,a.j);if(!d)return Xd(new fm("Error: No request builder found for command.",b));var e=d.m(b,void 0,c);return e?(Kt(e.input),new Rd(function(f){var g,h,k;return A(function(l){if(1==l.h){h="cors"===(null==(g=e.kb)?void 0:g.mode)?"cors":void 0;if(a.m.cf){var n=e.config,r;n=null==n?void 0:null==(r=n.Wb)?void 0:r.sessionIndex;r=Ll(0,{sessionIndex:n});k=Object.assign({},Pu(h),r);return l.v(2)}return l.yield(Qu(e.config,
h),3)}2!=l.h&&(k=l.i);f(Ru(a,e,k));l.h=0})})):Xd(new fm("Error: Failed to build request for command.",b))}
function Su(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.fg)?0:d.jg)&&a.l){d=v(Ku);for(var e=d.next();!e.done;e=d.next())e=e.value,a.l[e]&&a.l[e].handleResponse(b,c)}}
function Ru(a,b,c){var d,e,f,g,h,k,l,n,r,t,p,x,y,z,H,I,M,N,K,V,Z,ha,qa,na,Ia,Fg,Mq,Nq,Oq;return A(function(ka){switch(ka.h){case 1:ka.v(2);break;case 3:if((d=ka.i)&&!d.isExpired())return ka.return(Promise.resolve(d.h()));case 2:if(!(null==(e=b)?0:null==(f=e.Na)?0:f.context)){ka.v(4);break}g=b.Na.context;ka.v(5);break;case 5:h=v([]),k=h.next();case 7:if(k.done){ka.v(4);break}l=k.value;return ka.yield(l.cg(g),8);case 8:k=h.next();ka.v(7);break;case 4:if(null==(n=a.i)||!n.gg(b.input,b.Na)){ka.v(11);
break}return ka.yield(a.i.Yf(b.input,b.Na),12);case 12:return r=ka.i,S("kevlar_process_local_innertube_responses_killswitch")||Su(a,r,b),ka.return(r);case 11:return(x=null==(p=b.config)?void 0:p.Pa)&&a.h.has(x)&&S("web_memoize_inflight_requests")?t=a.h.get(x):(y=JSON.stringify(b.Na),I=null!=(H=null==(z=b.kb)?void 0:z.headers)?H:{},b.kb=Object.assign({},b.kb,{headers:Object.assign({},I,c)}),M=Object.assign({},b.kb),"POST"===b.kb.method&&(M=Object.assign({},M,{body:y})),(null==(N=b.config)?0:N.Me)&&
Hu(b.config.Me),K=function(){return a.aa.fetch(b.input,M,b.config)},t=K(),x&&a.h.set(x,t)),ka.yield(t,13);
case 13:if((V=ka.i)&&"error"in V&&(null==(Z=V)?0:null==(ha=Z.error)?0:ha.details))for(qa=V.error.details,na=v(qa),Ia=na.next();!Ia.done;Ia=na.next())Fg=Ia.value,(Mq=Fg["@type"])&&-1<Lu.indexOf(Mq)&&(delete Fg["@type"],V=Fg);x&&a.h.has(x)&&a.h.delete(x);(null==(Nq=b.config)?0:Nq.Ne)&&Hu(b.config.Ne);if(V||null==(Oq=a.i)||!Oq.Qf(b.input,b.Na)){ka.v(14);break}return ka.yield(a.i.Xf(b.input,b.Na),15);case 15:V=ka.i;case 14:return Su(a,V,b),ka.return(V||void 0)}})}
function Qu(a,b){var c,d,e,f;return A(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.Wb)?void 0:d.sessionIndex;var h=g.yield;var k=Wd(Ll(0,{sessionIndex:e}));return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},Pu(b),f)))})}
function Pu(a){var b={"Content-Type":"application/json"};R("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=R("EOM_VISITOR_DATA"):R("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=R("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=R("LOGGED_IN",!1);"cors"!==a&&((a=R("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=R("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=R("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),(a=R("DOMAIN_ADMIN_STATE"))&&
(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var Tu=new Zq("INNERTUBE_TRANSPORT_TOKEN");var Uu=["share/get_web_player_share_panel"],Vu=["feedback"],Wu=["notification/modify_channel_preference"],Xu=["browse/edit_playlist"],Yu=["subscription/subscribe"],Zu=["subscription/unsubscribe"];function $u(){}
w($u,wt);$u.prototype.j=function(){return Yu};
$u.prototype.h=function(a){return U(a,Ak)||void 0};
$u.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
da.Object.defineProperties($u.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function av(){}
w(av,wt);av.prototype.j=function(){return Zu};
av.prototype.h=function(a){return U(a,zk)||void 0};
av.prototype.i=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
da.Object.defineProperties(av.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function bv(){}
w(bv,wt);bv.prototype.j=function(){return Vu};
bv.prototype.h=function(a){return U(a,uk)||void 0};
bv.prototype.i=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
da.Object.defineProperties(bv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function cv(){}
w(cv,wt);cv.prototype.j=function(){return Wu};
cv.prototype.h=function(a){return U(a,yk)||void 0};
cv.prototype.i=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function dv(){}
w(dv,wt);dv.prototype.j=function(){return Xu};
dv.prototype.h=function(a){return U(a,xk)||void 0};
dv.prototype.i=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function ev(){}
w(ev,wt);ev.prototype.j=function(){return Uu};
ev.prototype.h=function(a){return U(a,wk)};
ev.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var fv=new Zq("NETWORK_SLI_TOKEN");function gv(a){this.h=a}
gv.prototype.fetch=function(a,b){var c=this,d,e,f;return A(function(g){c.h&&(d=ac(bc(5,qc(a,"key")))||"/UNKNOWN_PATH",c.h.start(d));e=b;S("wug_networking_gzip_request")&&(e=pp(b));f=new window.Request(a,e);return S("web_fetch_promise_cleanup_killswitch")?g.return(Promise.resolve(fetch(f).then(function(h){return c.handleResponse(h)}).catch(function(h){rs(h)}))):g.return(fetch(f).then(function(h){return c.handleResponse(h)}).catch(function(h){rs(h)}))})};
gv.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Tf(),b=b.then(function(c){rs(new fm("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};
gv[Yq]=[new $q(fv)];var hv=new Zq("NETWORK_MANAGER_TOKEN");var iv;function jv(){var a=kv,b=lv,c=mv;this.l=nv;this.navigate=a;this.i=b;this.j=c;this.h=new Set}
function ov(a,b,c){if(pv(b))qv(a,b,c);else{var d=a.l(b,c);if(null==c?0:c.yc)d.yc=c.yc;0===d.type?a.navigate?rv(d.command)?sv(a,d.command)||(S("logging_avoid_blocking_during_navigation")&&vr().transition("application_navigating"),b=a.navigate(d)||[],$d(b).then(function(){a.h.delete(d.command)})):qs(Error("Error: Command handler page requests need to specify a url.")):qs(Error("Error: Command handler navigate function was called but not set.")):1===d.type?a.i?sv(a,d.command)||(b=a.i(d),$d(b).then(function(){a.h.delete(d.command)})):
qs(Error("Error: Command handler handle service request function was called but not set.")):2===d.type&&(a.j?a.j(d):qs(Error("Error: Command handler send action was called but not set.")))}}
function sv(a,b){if(a.h.has(b))return!0;a.h.add(b);return!1}
function pv(a){var b=!!U(a,nk),c;a="CLIENT_SIGNAL"===(null==(c=U(a,sk))?void 0:c.signal);return b||a}
function qv(a,b,c){var d=U(b,nk);if(d)var e=(null==d?void 0:d.commands)||[];else{var f;if("CLIENT_SIGNAL"===(null==(f=U(b,sk))?void 0:f.signal)){var g;e=(null==(g=U(b,sk))?void 0:g.actions)||[]}}if(e)for(b=v(e),e=b.next();!e.done;e=b.next()){e=e.value;try{ov(a,e,c)}catch(h){h instanceof Error&&qs(h)}}else qs(Error("Could not handle the meta command."))}
function rv(a){var b;return!(null==(b=U(null==a?void 0:a.commandMetadata,rk))||!b.url)}
;function tv(){var a,b,c;return A(function(d){if(1==d.h)return a=er().resolve(Tu),a?d.yield(Ou(a),2):(rs(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return rs(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Rf;return d.return(c)}rs(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;var uv=C.caches,vv;function wv(a){var b=a.indexOf(":");return-1===b?{yd:a}:{yd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function xv(){return A(function(a){if(void 0!==vv)return a.return(vv);vv=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return za(d,2),d.yield(uv.open("test-only"),4);case 4:return d.yield(uv.delete("test-only"),5);case 5:d.h=3;d.l=0;break;case 2:if(c=Aa(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(vv)})}
function yv(a){var b,c,d,e,f,g,h;A(function(k){if(1==k.h)return k.yield(xv(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return k.yield(uv.keys(),3)}c=k.i;d=v(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=wv(f),h=g.datasyncId,!h||a.includes(h)||b.push(uv.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(n){return n})}))})}
function zv(){var a,b,c,d,e,f,g;return A(function(h){if(1==h.h)return h.yield(xv(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=hm("cache contains other");return h.yield(uv.keys(),3)}b=h.i;c=v(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=wv(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function Av(){tv().then(function(a){a&&(oo(a),yv(a),Ht(a))})}
function Bv(){var a=new hq;ki.na(function(){var b,c,d,e;return A(function(f){switch(f.h){case 1:if(S("ytidb_clear_optimizations_killswitch")){f.v(2);break}b=hm("clear");if(b.startsWith("V")&&b.endsWith("||")){var g=[b];oo(g);yv(g);Ht(g);return f.return()}c=It();return f.yield(zv(),3);case 3:return d=f.i,f.yield(po(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.wa()?Av():a.h.add("publicytnetworkstatus-online",Av,!0,void 0,void 0),f.h=0}})})}
;var Jh=fa(["data-"]);function Cv(a){a&&(a.dataset?a.dataset[Dv("loaded")]="true":Ih(a))}
function Ev(a,b){return a?a.dataset?a.dataset[Dv(b)]:a.getAttribute("data-"+b):null}
var Fv={};function Dv(a){return Fv[a]||(Fv[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Gv=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Hv=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Iv(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Gv,""),c=c.replace(Hv,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Jv(a,b,c)}
function Jv(a,b,c){c=void 0===c?null:c;var d=Kv(a),e=document.getElementById(d),f=e&&Ev(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Sq(d,b),b=""+Pa(b),Lv[b]=f),g||(e=Mv(a,d,function(){if(!Ev(e,"loaded")){Cv(e);Vq(d);var h=Va(Wq,d);hl(h,0)}},c)))}
function Mv(a,b,c,d){d=void 0===d?null:d;var e=Dd("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Oh(e,jk(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Nv(a){a=Kv(a);var b=document.getElementById(a);b&&(Wq(a),b.parentNode.removeChild(b))}
function Ov(a,b){a&&b&&(a=""+Pa(b),(a=Lv[a])&&Uq(a))}
function Kv(a){var b=document.createElement("a");Eh(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Zb(a)}
var Lv={};var Pv=[],Qv=!1;function Rv(){if(!S("disable_biscotti_fetch_for_ad_blocker_detection")&&!S("disable_biscotti_fetch_entirely_for_all_web_clients")&&Vs()){var a=R("PLAYER_VARS",{});if("1"!=pb(a)&&!Ws(a)){var b=function(){Qv=!0;"google_ad_status"in window?Jk("DCLKSTAT",1):Jk("DCLKSTAT",2)};
try{Iv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Pv.push(ki.na(function(){if(!(Qv||"google_ad_status"in window)){try{Ov("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Qv=!0;Jk("DCLKSTAT",3)}},5E3))}}}
function Sv(){var a=Number(R("DCLKSTAT",0));return isNaN(a)?0:a}
;function Tv(a){nr.call(this,void 0===a?"document_active":a);var b=this;this.l=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.la},{from:"document_active",to:"document_disposed",action:this.m},{from:"document_disposed_preventable",to:"document_disposed",action:this.m},{from:"document_disposed_preventable",to:"flush_logs",action:this.G},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.G},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
w(Tv,nr);Tv.prototype.la=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Tv.prototype.m=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
Tv.prototype.G=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
Tv.prototype.i=function(){this.h=new Map};function Uv(a){nr.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.G},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.m},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.G},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.G},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.m},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.m},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
S("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
w(Uv,nr);Uv.prototype.i=function(a,b){a(null==b?void 0:b.event);S("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Uv.prototype.h=function(a,b){a(null==b?void 0:b.event);S("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Uv.prototype.m=function(a,b){a(null==b?void 0:b.event)};
Uv.prototype.G=function(a,b){a(null==b?void 0:b.event)};function Vv(){this.l=new Tv;this.m=new Uv}
Vv.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.l.install(c)});
a.forEach(function(c){b.m.install(c)})};function Wv(a){So.call(this,1,arguments);this.csn=a}
w(Wv,So);var ap=new To("screen-created",Wv),Xv=[],Yv=0,Zv=new Map,$v=new Map,aw=new Map;
function bw(a,b,c,d,e){e=void 0===e?!1:e;for(var f=cw({cttAuthInfo:Ks(b)||void 0},b),g=v(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(nb(k)||!k.trackingParams&&!k.veType)&&rs(Error("Child VE logged with no data"));if(S("no_client_ve_attach_unless_shown")){var l=dw(h,b);if(k.veType&&!$v.has(l)&&!aw.has(l)&&!e){Zv.set(l,[a,b,c,h]);return}h=dw(c,b);Zv.has(h)?ew(c,b):aw.set(h,!0)}}d=d.filter(function(n){n.csn!==b?(n.csn=b,n=!0):n=!1;return n});
c={csn:b,parentVe:c.getAsJson(),childVes:fb(d,function(n){return n.getAsJson()})};
"UNDEFINED_CSN"===b?fw("visualElementAttached",f,c):a?is("visualElementAttached",c,a,f):Zm("visualElementAttached",c,f)}
function fw(a,b,c){Xv.push({payloadName:a,payload:c,Wf:void 0,options:b});Yv||(Yv=bp())}
function cp(a){if(Xv){for(var b=v(Xv),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,Zm(c.payloadName,c.payload,c.options));Xv.length=0}Yv=0}
function dw(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function ew(a,b){a=dw(a,b);Zv.has(a)&&(b=Zv.get(a)||[],bw(b[0],b[1],b[2],[b[3]],!0),Zv.delete(a))}
function cw(a,b){S("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function gw(){this.l=[];this.i=new Map;this.h=new Map;this.j=new Set}
gw.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=Is(void 0===c?0:c)){a=this.client;d=new Bs({trackingParams:d});var e=void 0;if(S("no_client_ve_attach_unless_shown")){var f=dw(d,c);$v.set(f,!0);ew(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=cw({cttAuthInfo:Ks(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);"UNDEFINED_CSN"===c?fw("visualElementGestured",f,d):a?is("visualElementGestured",d,a,f):Zm("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
gw.prototype.visualElementStateChanged=function(a,b,c){c=void 0===c?0:c;if(0===c&&this.j.has(c))this.l.push([a,b]);else{var d=c;d=void 0===d?0:d;c=Is(d);a||(a=(a=Fs(void 0===d?0:d))?new Bs({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=cw({cttAuthInfo:Ks(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},"UNDEFINED_CSN"===c?fw("visualElementStateChanged",d,b):a?is("visualElementStateChanged",b,a,d):Zm("visualElementStateChanged",b,d))}};
function hw(a,b){if(void 0===b)for(var c=Hs(),d=0;d<c.length;d++)void 0!==c[d]&&hw(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&bw(a.client,b,f,e)}),a.i.clear(),a.h.clear(),a.m=void 0}
;function iw(){Vv.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));S("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a))}
w(iw,Vv);iw.prototype.j=function(){Zm("finalPayload",{csn:Is()})};
iw.prototype.h=function(){vs(ws)};
iw.prototype.i=function(){var a=hw;gw.h||(gw.h=new gw);a(gw.h)};function jw(){}
function kw(){var a=E("ytglobal.storage_");a||(a=new jw,D("ytglobal.storage_",a));return a}
jw.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(lw()):d.return()})};
function lw(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",jw);function Xm(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=cl("ytidb_transaction_ended_event_rate_limit_session",.2)}
Xm.prototype.Qb=function(a){this.handleError(a)};
Xm.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":S("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":S("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":mw(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=cl("ytidb_transaction_ended_event_rate_limit_transaction",.1)&&this.h("idbTransactionEnded",
b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function mw(a,b){kw().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:nw(null==c?void 0:c.usage),deviceStorageQuotaMbytes:nw(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function nw(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function ow(a){this.args=void 0===a?null:a;this.returnValue=[]}
;var pw=new Map;function qw(a,b){if(!a)return null;a=Object.keys(a);a=v(a);for(var c=a.next();!c.done;c=a.next()){c=c.value;var d=c.toLowerCase();if(-1<d.indexOf(b,d.length-b.length))return c}return null}
;function rw(a,b,c){var d;d||(d={bubbles:!0,cancelable:!1,composed:!0});null!==c&&void 0!==c&&(d.detail=c);b=new CustomEvent(b,d);a.dispatchEvent(b)}
;function sw(a,b){b=new ow(b);rw(a,"yt-action",b);return b.returnValue}
function tw(a,b,c,d){b&&b.length&&b.forEach(function(e){var f=qw(e,"action")||qw(e,"command")||qw(e,"endpoint");if(f){var g="yt"+f;var h=pw.get(g);h?g=h:(f="yt-"+f.replace(/([A-Z])/g,"-$1").toLowerCase(),pw.set(g,f),g=f);U(e,qk)&&(g+="-"+U(e,qk).signal.toLowerCase().replace(/_/g,"-"))}else g=null;g&&(S("handle_service_request_actions")&&e.commandMetadata&&e.commandMetadata.webCommandMetadata&&e.commandMetadata.webCommandMetadata.sendPost?uw(c?c:a,[e]):sw(a,[e,c,d]))})}
function uw(a,b){var c=[a];b&&c.push.apply(c,b);b=sw(a,c);return 0<b.length&&(b=b[0],rw(a,"yt-service-request-sent",b),b&&b.ajaxPromise)?(b.ajaxPromise.then(function(d){rw(a,"yt-service-request-completed",d)},function(d){rw(a,"yt-service-request-error",{error:d,
params:c})},a),b.ajaxPromise):Wd()}
;function nv(a,b,c){b=void 0===b?{}:b;var d,e=null==(d=U(a.commandMetadata,rk))?void 0:d.url;d=b.form||{};!c||d.element||d.skipDefaultElement||(b.form=b.form||{},b.form.element=c);if(e&&"/service_ajax"!==e)return{type:0,command:a,form:b.form};if(S("kevlar_service_command_check")){if(c=er().resolve(Tu),qt(a,c.j))return Object.assign({},{type:1,command:a},b)}else{var f;if(null==(f=U(a.commandMetadata,rk))?0:f.apiUrl)return Object.assign({},{type:1,command:a},b)}return{type:2,command:a,form:b.form}}
function lv(a){if(a.form){var b=a.form,c=Object.assign({},b);b=b.element;c=(delete c.element,c);if(b)return[uw(b,[a.command,c,a.yc])]}return[]}
function mv(a){if(a.form){var b=a.form,c=Object.assign({},b);b=b.element;c=(delete c.element,c);b&&tw(b,[a.command],b,c)}}
;function vw(a,b,c){G.call(this);var d=this;c=c||R("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.i=b||null;this.targetOrigin="*";this.j=c;this.sessionId=null;this.channel="widget";this.D=!!a;this.s=function(e){a:if(!("*"!=d.j&&e.origin!=d.j||d.i&&e.source!=d.i||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.D&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.j=d.targetOrigin=e.origin);d.i=e.source;d.sessionId=f.id;d.h&&(d.h(),d.h=null);break;case "command":d.l&&(!d.m||0<=cb(d.m,f.func))&&d.l(f.func,f.args,e.origin)}}};
this.m=this.h=this.l=null;window.addEventListener("message",this.s)}
w(vw,G);vw.prototype.sendMessage=function(a,b){if(b=b||this.i){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){Pk(d)}}};
vw.prototype.M=function(){window.removeEventListener("message",this.s);G.prototype.M.call(this)};function ww(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new vw(!!R("WIDGET_ID_ENFORCE")),b=this.Je.bind(this);a.l=b;a.m=null;this.h.channel="widget";if(a=R("WIDGET_ID"))this.h.sessionId=a}
m=ww.prototype;m.Je=function(a,b,c){"addEventListener"===a&&b?this.Jc(b[0],c):this.Zc(a,b,c)};
m.Zc=function(){};
m.Dc=function(a){var b=this;return function(c){return b.sendMessage(a,c)}};
m.Jc=function(a,b){this.j[a]||"onReady"===a||(this.addEventListener(a,this.Dc(a,b)),this.j[a]=!0)};
m.addEventListener=function(){};
m.ke=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Gc());this.sendMessage("onReady");db(this.i,this.Fd,this);this.i=[]};
m.Gc=function(){return null};
function xw(a,b){a.sendMessage("infoDelivery",b)}
m.Fd=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.Fd({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};var yw={},zw=(yw["api.invalidparam"]=2,yw.auth=150,yw["drm.auth"]=150,yw["heartbeat.net"]=150,yw["heartbeat.servererror"]=150,yw["heartbeat.stop"]=150,yw["html5.unsupportedads"]=5,yw["fmt.noneavailable"]=5,yw["fmt.decode"]=5,yw["fmt.unplayable"]=5,yw["html5.missingapi"]=5,yw["html5.unsupportedlive"]=5,yw["drm.unavailable"]=5,yw["mrm.blocked"]=151,yw);var Aw=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function Bw(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Cw(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=v(Aw);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Dw(a,b,c,d){if(Oa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Ew(a){ww.call(this);this.listeners=[];this.l=!1;this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.Ve.bind(this));this.addEventListener("onVolumeChange",this.We.bind(this));this.addEventListener("onApiChange",this.Qe.bind(this));this.addEventListener("onPlaybackQualityChange",this.Se.bind(this));this.addEventListener("onPlaybackRateChange",this.Te.bind(this));this.addEventListener("onStateChange",this.Ue.bind(this));this.addEventListener("onWebglSettingsChanged",
this.Xe.bind(this))}
w(Ew,ww);m=Ew.prototype;
m.Zc=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Bw(a)){var d=b;if(Oa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Cw(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Cw(e);break;case "loadPlaylist":case "cuePlaylist":e=Dw(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Bw(a)&&xw(this,this.Gc())}};
m.Jc=function(a,b){"onReady"===a?this.api.logApiCall(a+" invocation",b):"onError"===a&&this.l&&(this.api.logApiCall(a+" invocation",b,this.errorCode),this.errorCode=void 0);this.api.logApiCall(a+" registration",b);ww.prototype.Jc.call(this,a,b)};
m.Dc=function(a,b){var c=this,d=ww.prototype.Dc.call(this,a,b);return function(e){"onError"===a?c.api.logApiCall(a+" invocation",b,e):c.api.logApiCall(a+" invocation",b);d(e)}};
m.onReady=function(){var a=this.ke.bind(this);this.h.h=a;a=this.api.getVideoData();if(!a.isPlayable){this.l=!0;a=a.errorCode;var b=void 0===b?5:b;this.errorCode=a?zw[a]||b:b;this.sendMessage("onError",this.errorCode.toString())}};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.Gc=function(){if(!this.api)return null;var a=this.api.getApiInterface();ib(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.Ue=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());xw(this,a)};
m.Se=function(a){xw(this,{playbackQuality:a})};
m.Te=function(a){xw(this,{playbackRate:a})};
m.Qe=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.We=function(){xw(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.Ve=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());xw(this,a)};
m.Xe=function(){var a={sphericalProperties:this.api.getSphericalProperties()};xw(this,a)};
m.dispose=function(){ww.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Fw(a){G.call(this);this.h={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.Bd,this)}
w(Fw,G);m=Fw.prototype;m.start=function(){this.started||this.Z()||(this.started=!0,this.connection.lb("RECEIVING"))};
m.lb=function(a,b){this.started&&!this.Z()&&this.connection.lb(a,b)};
m.Bd=function(a,b,c){if(this.started&&!this.Z()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Gw(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Hw(a,c))&&this.lb(a,c))}}};
m.addListener=function(a){if(!(a in this.h)){var b=this.Re.bind(this,a);this.h[a]=b;this.addEventListener(a,b)}};
m.Re=function(a,b){this.started&&!this.Z()&&this.connection.lb(a,this.Fc(a,b))};
m.Fc=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.h&&(this.removeEventListener(a,this.h[a]),delete this.h[a])};
m.M=function(){this.connection.unsubscribe("command",this.Bd,this);this.connection=null;for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);G.prototype.M.call(this)};function Iw(a,b){Fw.call(this,b);this.api=a;this.start()}
w(Iw,Fw);Iw.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Iw.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Gw(a,b){switch(a){case "loadVideoById":return a=Cw(b),[a];case "cueVideoById":return a=Cw(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Dw(b),[a];case "cuePlaylist":return a=Dw(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Hw(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Iw.prototype.Fc=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Fw.prototype.Fc.call(this,a,b)};
Iw.prototype.M=function(){Fw.prototype.M.call(this);delete this.api};function Jw(a){a=void 0===a?!1:a;G.call(this);this.h=new L(a);xc(this,this.h)}
Xa(Jw,G);Jw.prototype.subscribe=function(a,b,c){return this.Z()?0:this.h.subscribe(a,b,c)};
Jw.prototype.unsubscribe=function(a,b,c){return this.Z()?!1:this.h.unsubscribe(a,b,c)};
Jw.prototype.l=function(a,b){this.Z()||this.h.Za.apply(this.h,arguments)};function Kw(a,b,c){Jw.call(this);this.j=a;this.i=b;this.id=c}
w(Kw,Jw);Kw.prototype.lb=function(a,b){this.Z()||this.j.lb(this.i,this.id,a,b)};
Kw.prototype.M=function(){this.i=this.j=null;Jw.prototype.M.call(this)};function Lw(a,b,c){G.call(this);this.h=a;this.origin=c;this.i=Cq(window,"message",this.j.bind(this));this.connection=new Kw(this,a,b);xc(this,this.connection)}
w(Lw,G);Lw.prototype.lb=function(a,b,c,d){this.Z()||a!==this.h||(a={id:b,command:c},d&&(a.data=d),this.h.postMessage(JSON.stringify(a),this.origin))};
Lw.prototype.j=function(a){if(!this.Z()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.Z()||c.l("command",b.command,b.data,a.origin)}}}};
Lw.prototype.M=function(){Dq(this.i);this.h=null;G.prototype.M.call(this)};function Mw(){this.state=1;this.h=null}
m=Mw.prototype;m.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterUrl)?d:null;if(a.interpreterSafeScript){d=a.interpreterSafeScript.privateDoNotAccessOrElseSafeScriptWrappedValue||"";var f=wb();d=f?f.createScript(d):d;d=new Bb(d,Ab)}else d=null!=(f=a.interpreterScript)?f:null;a.interpreterSafeUrl&&(e=a.interpreterSafeUrl,yb("From proto message. b/166824318"),e=Fb(e.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());Nw(this,d,e,a.program,b,c)}else rs(Error("Cannot initialize botguard without program"))};
function Nw(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,Iv(c,function(){window[g]?Ow(a,d,g,e):(a.state=3,Nv(c),rs(new fm("Unable to load Botguard","from "+c)))},f)):b?(f=Dd("SCRIPT"),b instanceof Bb?(b instanceof Bb&&b.constructor===Bb?b=b.h:(Ma(b),b="type_error:SafeScript"),f.textContent=b,Nh(f)):f.textContent=b,f.nonce=Xb(),document.head.appendChild(f),document.head.removeChild(f),window[g]?Ow(a,d,g,e):(a.state=4,rs(new fm("Unable to load Botguard from JS")))):rs(new fm("Unable to load VM; no url or JS provided"))}
function Ow(a,b,c,d){a.state=5;try{var e=new zh({program:b,oe:c,Ke:S("att_web_record_metrics")});e.Ze.then(function(){a.state=6;d&&d(b)});
a.Uc(e)}catch(f){a.state=7,f instanceof Error&&rs(f)}}
m.invoke=function(a){a=void 0===a?{}:a;return this.Xc()?this.Od({kd:a}):null};
m.dispose=function(){this.Uc(null);this.state=8};
m.Xc=function(){return!!this.h};
m.Od=function(a){return this.h.Id(a)};
m.Uc=function(a){vc(this.h);this.h=a};function Pw(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function Qw(){Mw.apply(this,arguments)}
w(Qw,Mw);Qw.prototype.Uc=function(a){var b;null==(b=Pw())||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.Id.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
Qw.prototype.Xc=function(){return!!Pw()};
Qw.prototype.Od=function(a){return Pw().bgvmc(a)};var Rw=new Qw;function Sw(){return Rw.Xc()}
function Tw(a){a=void 0===a?{}:a;return Rw.invoke(a)}
;function Uw(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||rb(b);this.assets=a.assets||{};this.attrs=a.attrs||rb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Uw.prototype.clone=function(){var a=new Uw,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ma(c)?a[b]=rb(c):a[b]=c}return a};var Vw=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Ww(a){a=a||"";if(window.spf){var b=a.match(Vw);spf.style.load(a,b?b[1]:"",void 0)}else Xw(a)}
function Xw(a){var b=Yw(a),c=document.getElementById(b),d=c&&Ev(c,"loaded");d||c&&!d||(c=Zw(a,b,function(){if(!Ev(c,"loaded")){Cv(c);Vq(b);var e=Va(Wq,b);hl(e,0)}}))}
function Zw(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=jk(a);Mh(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Yw(a){var b=Dd("A");Eh(b,new Hb(a,Ib));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Zb(a)}
;function $w(){G.call(this);this.h=[]}
w($w,G);$w.prototype.M=function(){for(;this.h.length;){var a=this.h.pop();a.target.removeEventListener(a.name,a.callback,void 0)}G.prototype.M.call(this)};function ax(){$w.apply(this,arguments)}
w(ax,$w);function bx(a,b,c,d,e){G.call(this);var f=this;this.s=b;this.webPlayerContextConfig=d;this.wc=e;this.Fa=!1;this.api={};this.ea=this.m=null;this.S=new L;this.h={};this.Y=this.ma=this.elementId=this.ab=this.config=null;this.W=!1;this.j=this.D=null;this.sa={};this.xc=["onReady"];this.lastError=null;this.Vb=NaN;this.R={};this.Td=new ax(this);this.da=0;this.i=this.l=a;xc(this,this.S);cx(this);dx(this);xc(this,this.Td);c?this.da=hl(function(){f.loadNewVideoConfig(c)},0):d&&(ex(this),fx(this))}
w(bx,G);m=bx.prototype;m.getId=function(){return this.s};
m.loadNewVideoConfig=function(a){if(!this.Z()){this.da&&(window.clearTimeout(this.da),this.da=0);var b=a||{};b instanceof Uw||(b=new Uw(b));this.config=b;this.setConfig(a);fx(this);this.isReady()&&gx(this)}};
function ex(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.s,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.s:a.config.attrs.id=a.s);var c;(null==(c=a.i)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){this.ab=a;this.config=hx(a);ex(this);if(!this.ma){var b;this.ma=ix(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=ci(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=ci(Number(a)||a))};
function gx(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function jx(a){var b=!0,c=kx(a);c&&a.config&&(a=lx(a),b=Ev(c,"version")===a);return b&&!!E("yt.player.Application.create")}
function fx(a){if(!a.Z()&&!a.W){var b=jx(a);if(b&&"html5"===(kx(a)?"html5":null))a.Y="html5",a.isReady()||mx(a);else if(nx(a),a.Y="html5",b&&a.j&&a.l)a.l.appendChild(a.j),mx(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.D=function(){c=!0;var d=ox(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?hx(a.config):void 0;d&&d(a.l,e,a.webPlayerContextConfig,a.wc);mx(a)};
a.W=!0;b?a.D():(Iv(lx(a),a.D),(b=px(a))&&Ww(b),qx(a)&&!c&&D("yt.player.Application.create",null))}}}
function kx(a){var b=Cd(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function mx(a){if(!a.Z()){var b=kx(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.W=!1;if(!ox(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}rx(a)}else a.Vb=hl(function(){mx(a)},50)}}
function rx(a){cx(a);a.Fa=!0;var b=kx(a);if(b){a.m=sx(a,b,"addEventListener");a.ea=sx(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=sx(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.m&&a.m(g,a.h[g]);gx(a);a.ma&&a.ma(a.api);a.S.Za("onReady",a.api)}
function sx(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,rs(f))}}}
function cx(a){a.Fa=!1;if(a.ea)for(var b in a.h)a.h.hasOwnProperty(b)&&a.ea(b,a.h[b]);for(var c in a.R)a.R.hasOwnProperty(c)&&window.clearTimeout(Number(c));a.R={};a.m=null;a.ea=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.ab};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.Fa};
function dx(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){Vq("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){Vq("WATCH_LATER_VIDEO_REMOVED",b)})}
m.addEventListener=function(a,b){var c=this,d=ix(this,b);d&&(0<=cb(this.xc,a)||this.h[a]||(b=tx(this,a),this.m&&this.m(a,b)),this.S.subscribe(a,d),"onReady"===a&&this.isReady()&&hl(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.Z()||(b=ix(this,b))&&this.S.unsubscribe(a,b)};
function ix(a,b){var c=b;if("string"===typeof b){if(a.sa[b])return a.sa[b];c=function(){var d=B.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){qs(f)}};
a.sa[b]=c}return c?c:null}
function tx(a,b){var c="ytPlayer"+b+a.s;a.h[b]=c;C[c]=function(d){var e=hl(function(){if(!a.Z()){try{a.S.Za(b,null!=d?d:void 0)}catch(h){rs(new fm("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.s,data:d}))}var f=a.R,g=String(e);g in f&&delete f[g]}},0);
ob(a.R,String(e))};
return c}
m.getPlayerType=function(){return this.Y||(kx(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function nx(a){a.cancel();cx(a);a.Y=null;a.config&&(a.config.loaded=!1);var b=kx(a);b&&(jx(a)||!qx(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.l)for(a=a.l;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.D&&Ov(lx(this),this.D);window.clearTimeout(this.Vb);this.W=!1};
m.M=function(){nx(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){qs(b)}this.sa=null;for(var a in this.h)this.h.hasOwnProperty(a)&&(C[this.h[a]]=null);this.ab=this.config=this.api=null;delete this.l;delete this.i;G.prototype.M.call(this)};
function qx(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function lx(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function px(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function ox(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===Sk(c||"","&")[b]}
function hx(a){for(var b={},c=v(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?rb(e):e}return b}
;var ux={},vx="player_uid_"+(1E9*Math.random()>>>0);function wx(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?Cd(c):c;var e=vx+"_"+Pa(c),f=ux[e];if(f&&d)return xx(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new bx(c,e,a,b,void 0);ux[e]=f;Vq("player-added",f.api);yc(f,function(){delete ux[f.getId()]});
return f.api}
function xx(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var yx=null,zx=null,Ax=null;function Bx(){Cx()}
function Dx(){Cx()}
function Cx(){var a=yx.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function kv(a){var b,c;if(a=null==(b=a.command)?void 0:null==(c=b.urlEndpoint)?void 0:c.url)b=window,c=Dh(a),void 0!==c&&b.open(c,void 0,void 0);return[]}
function Ex(){yx&&yx.sendAbandonmentPing&&yx.sendAbandonmentPing();R("PL_ATT")&&Rw.dispose();for(var a=ki,b=0,c=Pv.length;b<c;b++)a.oa(Pv[b]);Pv.length=0;Nv("//static.doubleclick.net/instream/ad_status.js");Qv=!1;Jk("DCLKSTAT",0);wc(Ax,zx);yx&&(yx.removeEventListener("onVideoDataChange",Bx),yx.destroy())}
;function Fx(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=R("EVENT_ID");d&&(b.ei||(b.ei=d));b&&Ct(a,b);if(c)return!1;Kt(a);if((window.ytspf||{}).enabled)spf.navigate(a);else{var e=void 0===e?{}:e;var f=void 0===f?"":f;var g=void 0===g?window:g;a=lc(a,e);Kt(a);g=g.location;f=a+f;var h=void 0===h?Wh:h;a:{h=void 0===h?Wh:h;for(a=0;a<h.length;++a)if(b=h[a],b instanceof Uh&&b.ye(f)){h=new Hb(f,Ib);break a}h=void 0}h=Dh(h||Jb);void 0!==h&&(g.href=h)}return!0}
;D("yt.setConfig",Jk);D("yt.config.set",Jk);D("yt.setMsg",Ms);D("yt.msgs.set",Ms);D("yt.logging.errors.log",qs);
D("writeEmbed",function(){var a=R("PLAYER_CONFIG");if(!a){var b=R("PLAYER_VARS");b&&(a={args:b})}et(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=R("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);Eu("embed",["ol"]);c=R("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=Xk(window.location.href);
d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}var e;(null==(e=a.args)?0:e.autoplay)&&Eu("watch",["pbs","pbu","pbp"]);yx=wx(a,c);S("embeds_enable_server_driven_watch_again_on_youtube")&&!jv.h&&(jv.h=new jv);yx.addEventListener("onVideoDataChange",Bx);yx.addEventListener("onReady",Dx);S("embeds_enable_server_driven_watch_again_on_youtube")&&yx.addEventListener("innertubeCommand",function(f){ov(jv.h,f)});
a=R("POST_MESSAGE_ID","player");R("ENABLE_JS_API")?Ax=new Ew(yx):R("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(zx=new Lw(window.parent,a,b),Ax=new Iw(yx,zx.connection));Rv();S("ytidb_create_logger_embed_killswitch")||Wm();a={};iw.h||(iw.h=new iw);iw.h.install((a.flush_logs={callback:function(){Vr()}},a));
sq();S("ytidb_clear_embedded_player")&&ki.na(function(){var f,g;if(!iv){var h=er(),k={Rc:hv,Md:gv};h.h.set(k.Rc,k);k={zc:{feedbackEndpoint:st(bv),modifyChannelNotificationPreferenceEndpoint:st(cv),playlistEditEndpoint:st(dv),subscribeEndpoint:st($u),unsubscribeEndpoint:st(av),webPlayerShareEntityServiceEndpoint:st(ev)}};var l=pt(),n={};l&&(n.client_location=l);void 0===f&&(f=Kl());void 0===g&&(g=h.resolve(hv));Nu(k,g,f,n);f={Rc:Tu,Nd:Mu.h};h.h.set(f.Rc,f);iv=h.resolve(Tu)}Bv()})});
var Gx=Nk(function(){Iu();ft()}),Hx=Nk(function(a){a.persisted||(Iu(),ft())}),Ix=Nk(function(a){S("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Ex():a.persisted||Ex()}),Jx=Nk(Ex);
window.addEventListener?(window.addEventListener("load",Gx),window.addEventListener("pageshow",Hx),window.addEventListener("pagehide",Ix)):window.attachEvent&&(window.attachEvent("onload",Gx),window.attachEvent("onunload",Jx));
window.onerror=function(a,b,c,d,e){b=void 0===b?"Unknown file":b;c=void 0===c?0:c;var f=!1,g=Kk("log_window_onerror_fraction");if(g&&Math.random()<g)f=!0;else{g=document.getElementsByTagName("script");for(var h=0,k=g.length;h<k;h++)if(0<g[h].src.indexOf("/debug-")){f=!0;break}}f&&(f=!1,e?f=!0:("string"===typeof a?g=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,g=a.message,b=a.filename,c=a.lineno,d=a.colno):(g="Unknown error",b="Unknown file",c=0),e=new fm(g),e.name="UnhandledWindowError",e.message=
g,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),f?qs(e):rs(e))};
ke=ss;window.addEventListener("unhandledrejection",function(a){ss(a.reason)});
db(R("ERRORS")||[],function(a){qs.apply(null,a)});
Jk("ERRORS",[]);D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||Sw);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||Tw);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||Sv);D("yt.player.exports.navigate",E("yt.player.exports.navigate")||Fx);D("yt.util.activity.init",E("yt.util.activity.init")||Hq);D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||Kq);
D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||Iq);}).call(this);
