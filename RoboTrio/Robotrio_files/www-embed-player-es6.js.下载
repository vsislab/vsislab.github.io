(function(){'use strict';var r,aa=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},ca=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;
a[b]=c.value;return a},da=globalThis;
function ea(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ca(c,a,{configurable:!0,writable:!0,value:b})}}
var fa=Object.setPrototypeOf;function ha(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;fa(a,b);a.Ea=b.prototype}
ea("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
ea("SuppressedError",function(a){function b(c,d,e){if(!(this instanceof b))return new b(c,d,e);e=Error(e);"stack"in e&&(this.stack=e.stack);this.message=e.message;this.error=c;this.suppressed=d}
if(a)return a;ha(b,Error);b.prototype.name="SuppressedError";return b});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ia=ia||{},t=this||self;function v(a,b,c){a=a.split(".");c=c||t;for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function ja(a,b){var c=w("CLOSURE_FLAGS");a=c&&c[a];return a!=null?a:b}
function w(a,b){a=a.split(".");b=b||t;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function ka(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function la(a){var b=ka(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function ma(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function na(a){return Object.prototype.hasOwnProperty.call(a,oa)&&a[oa]||(a[oa]=++pa)}
var oa="closure_uid_"+(Math.random()*1E9>>>0),pa=0;function qa(a,b,c){return a.call.apply(a.bind,arguments)}
function ra(a,b,c){ra=qa;return ra.apply(null,arguments)}
function sa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function ta(){return Date.now()}
function ua(a){return a}
function va(a,b){function c(){}
c.prototype=b.prototype;a.Ea=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function wa(a,...b){b=b.filter(Boolean).join("&");if(!b)return a;const c=a.match(/[?&]adurl=/);return c?a.slice(0,c.index+1)+b+"&"+a.slice(c.index+1):a+(a.indexOf("?")<0?"?":"&")+b}
function xa(a,b){return b?"&"+a+"="+encodeURIComponent(b):""}
function ya(a){a=a.o;if(!a)return"";let b=xa("uap",a.platform)+xa("uapv",a.platformVersion)+xa("uafv",a.uaFullVersion)+xa("uaa",a.architecture)+xa("uam",a.model)+xa("uab",a.bitness);a.fullVersionList&&(b+="&uafvl="+encodeURIComponent(a.fullVersionList.map(c=>encodeURIComponent(c.brand)+";"+encodeURIComponent(c.version)).join("|")));
a.wow64!=null&&(b+="&uaw="+Number(a.wow64));return b.slice(1)}
var za=class{constructor({url:a,Ki:b}){this.i=a;this.o=b;this.j=(new Date).getTime()-17040672E5;this.h={};const c=/[?&]([^&=]+)=([^&]*)/g;for(;b=c.exec(a);)this.h[b[1]]=b[2]}};function Aa(a,b){if(b!==null&&b!==void 0){if(typeof b!=="object"&&typeof b!=="function")throw new TypeError("Object expected.");if(c===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");var c=b[Symbol.dispose]}if(typeof c!=="function")throw new TypeError("Object not disposable.");a.stack.push({value:b,dispose:c,async:!1})}return b}
function Ba(a){function b(f){a.error=a.jb?new SuppressedError(f,a.error,"An error was suppressed during disposal."):f;a.jb=!0}
function c(){for(;d=a.stack.pop();)try{if(!d.async&&e===1)return e=0,a.stack.push(d),Promise.resolve().then(c);if(d.dispose){var f=d.dispose.call(d.value);if(d.async)return e|=2,Promise.resolve(f).then(c,function(g){b(g);return c()})}else e|=1}catch(g){b(g)}if(e===1)return a.jb?Promise.reject(a.error):Promise.resolve();
if(a.jb)throw a.error;}
var d,e=0;c()}
;function Ca(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Ca);else{const c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
va(Ca,Error);Ca.prototype.name="CustomError";/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
let Da=globalThis.trustedTypes,Ea;function Fa(){let a=null;if(!Da)return a;try{const b=c=>c;
a=Da.createPolicy("goog#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(b){}return a}
function Ga(){Ea===void 0&&(Ea=Fa());return Ea}
;var Ha=class{constructor(a){this.h=a}toString(){return this.h+""}};function Ia(a){const b=Ga();a=b?b.createScriptURL(a):a;return new Ha(a)}
function Ja(a){if(a instanceof Ha)return a.h;throw Error("");}
;function Ka(a){return a.toString().indexOf("`")===-1}
Ka(a=>a``)||Ka(a=>a`\0`)||Ka(a=>a`\n`)||Ka(a=>a`\u0000`);var La=class{constructor(a){this.h=a}toString(){return this.h}},Ma=new La("about:invalid#zClosurez");class Na{constructor(a){this.Ze=a}}function Oa(a){return new Na(b=>b.substr(0,a.length+1).toLowerCase()===a+":")}
const Pa=[Oa("data"),Oa("http"),Oa("https"),Oa("mailto"),Oa("ftp"),new Na(a=>/^[^:]*([/?#]|$)/.test(a))];
function Qa(a,b=Pa){if(a instanceof La)return a;for(let c=0;c<b.length;++c){const d=b[c];if(d instanceof Na&&d.Ze(a))return new La(a)}}
var Ra=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;function Sa(a){if(a instanceof La)if(a instanceof La)a=a.h;else throw Error("");else a=Ra.test(a)?a:void 0;return a}
;function Ta(a,b){b=Sa(b);b!==void 0&&(a.href=b)}
;function Ua(a,b=`unexpected value ${a}!`){throw Error(b);}
;var Va=class{constructor(a){this.h=a}toString(){return this.h+""}};function Wa(a=document){a=a.querySelector?.("script[nonce]");return a==null?"":a.nonce||a.getAttribute("nonce")||""}
;var Xa=class{constructor(a){this.h=a}toString(){return this.h+""}};function Ya(a){const b=Ga();a=b?b.createScript(a):a;return new Xa(a)}
function Za(a){if(a instanceof Xa)return a.h;throw Error("");}
;function $a(a){const b=Wa(a.ownerDocument);b&&a.setAttribute("nonce",b)}
function ab(a,b){a.src=Ja(b);$a(a)}
;var bb=class{constructor(a){this.h=a}toString(){return this.h}};function cb(a){var b="true".toString(),c=[db`data-`];if(c.length===0)throw Error("");if(c.map(d=>{if(d instanceof bb)d=d.h;else throw Error("");return d}).every(d=>"data-loaded".indexOf(d)!==0))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;const eb="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function fb(a,b){if(b instanceof Ha)a.href=Ja(b).toString(),a.rel="stylesheet";else{if(eb.indexOf("stylesheet")===-1)throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=Sa(b);b!==void 0&&(a.href=b,a.rel="stylesheet")}}
;function gb(a,b){return Array.prototype.indexOf.call(a,b,void 0)}
function hb(a,b){Array.prototype.forEach.call(a,b,void 0)}
function ib(a,b){return Array.prototype.filter.call(a,b,void 0)}
function jb(a,b){return Array.prototype.map.call(a,b,void 0)}
function kb(a,b){return Array.prototype.reduce.call(a,b,{duration:0})}
function lb(a,b){a:{const c=a.length,d=typeof a==="string"?a.split(""):a;for(let e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return b<0?null:typeof a==="string"?a.charAt(b):a[b]}
function mb(a,b){b=gb(a,b);let c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function nb(a){const b=a.length;if(b>0){const c=Array(b);for(let d=0;d<b;d++)c[d]=a[d];return c}return[]}
function ob(a,b){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(la(d)){const e=a.length||0,f=d.length||0;a.length=e+f;for(let g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function pb(a,b){return a>b?1:a<b?-1:0}
;function qb(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function rb(a){var b=w("window.location.href");a==null&&(a='Unknown Error of type "null/undefined"');if(typeof a==="string")return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};let c,d;var e=!1;try{c=a.lineNumber||a.line||"Not available"}catch(f){c="Not available",e=!0}try{d=a.fileName||a.filename||a.sourceURL||t.$googDebugFname||b}catch(f){d="Not available",e=!0}b=sb(a);if(!(!e&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){e=a.message;if(e==
null){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)e=a.constructor.name;else if(e=a.constructor,tb[e])e=tb[e];else{e=String(e);if(!tb[e]){const f=/function\s+([^\(]+)/m.exec(e);tb[e]=f?f[1]:"[Anonymous]"}e=tb[e]}e='Unknown Error of type "'+e+'"'}else e="Unknown Error of unknown type";typeof a.toString==="function"&&Object.prototype.toString!==a.toString&&(e+=": "+a.toString())}return{message:e,name:a.name||"UnknownError",lineNumber:c,fileName:d,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function sb(a,b){b||(b={});b[ub(a)]=!0;let c=a.stack||"";var d=a.cause;d&&!b[ub(d)]&&(c+="\nCaused by: ",d.stack&&d.stack.indexOf(d.toString())==0||(c+=typeof d==="string"?d:d.message+"\n"),c+=sb(d,b));a=a.errors;if(Array.isArray(a)){d=1;let e;for(e=0;e<a.length&&!(d>4);e++)b[ub(a[e])]||(c+="\nInner error "+d++ +": ",a[e].stack&&a[e].stack.indexOf(a[e].toString())==0||(c+=typeof a[e]==="string"?a[e]:a[e].message+"\n"),c+=sb(a[e],b));e<a.length&&(c+="\n... "+(a.length-e)+" more inner errors")}return c}
function ub(a){let b="";typeof a.toString==="function"&&(b=""+a);return b+a.stack}
var tb={};function vb(a){return decodeURIComponent(a.replace(/\+/g," "))}
function wb(a){let b=0;for(let c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;const xb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yb(a){return a?decodeURI(a):a}
function zb(a){return yb(a.match(xb)[3]||null)}
function Ab(a){return yb(a.match(xb)[5]||null)}
function Bb(a){var b=a.match(xb);a=b[5];var c=b[6];b=b[7];let d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function Cb(a){const b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function Db(a,b){if(a){a=a.split("&");for(let c=0;c<a.length;c++){const d=a[c].indexOf("=");let e,f=null;d>=0?(e=a[c].substring(0,d),f=a[c].substring(d+1)):e=a[c];b(e,f?vb(f):"")}}}
function Eb(a,b,c){if(Array.isArray(b))for(let d=0;d<b.length;d++)Eb(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function Fb(a){const b=[];for(const c in a)Eb(c,a[c],b);return b.join("&")}
function Gb(a,b){b=Fb(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);let d=a.indexOf("?"),e;d<0||d>c?(d=c,e=""):e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function Hb(a,b,c,d){const e=c.length;for(;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
const Ib=/#|$/,Jb=/[?&]($|#)/;function Kb(a,b){const c=a.search(Ib);let d=0,e;const f=[];for(;(e=Hb(a,d,b,c))>=0;)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(Jb,"$1")}
;function Lb(){try{return!!window?.top?.location.href&&!1}catch(a){return!0}}
;var x=class extends Error{constructor(a,b,c=Error()){super();this.code=a;b+=":";c instanceof Error?(this.message=b+c.message,this.stack=c.stack||""):(this.message=b+String(c),this.stack="");Object.setPrototypeOf(this,new.target.prototype)}};function Mb(a){a&&typeof a.dispose=="function"&&a.dispose()}
;function Nb(a){for(let b=0,c=arguments.length;b<c;++b){const d=arguments[b];la(d)?Nb.apply(null,d):Mb(d)}}
;function y(){this.I=this.I;this.H=this.H}
y.prototype.I=!1;y.prototype.dispose=function(){this.I||(this.I=!0,this.ba())};
y.prototype[Symbol.dispose]=function(){this.dispose()};
function Ob(a,b){a.addOnDisposeCallback(sa(Mb,b))}
y.prototype.addOnDisposeCallback=function(a,b){this.I?b!==void 0?a.call(b):a():(this.H||(this.H=[]),b&&(a=a.bind(b)),this.H.push(a))};
y.prototype.ba=function(){if(this.H)for(;this.H.length;)this.H.shift()()};function Pb(a="bevasrsg"){return new Promise(b=>{const c=window===window.top?window:Lb()?window:window.top;let d=c[a];d?.bevasrs?b(new Qb(d.bevasrs)):(d||(d={nqfbel:[]},c[a]=d),d.nqfbel.push(e=>{b(new Qb(e))}))})}
function Rb(a){a.h!==void 0&&(a.i.forEach(b=>{a.h?.removeEventListener(b,a.j)}),a.h=void 0)}
class Qb extends y{constructor(a){super();this.vm=a;this.i="keydown keypress keyup input focusin focusout select copy cut paste change click dblclick auxclick pointerover pointerdown pointerup pointermove pointerout dragenter dragleave drag dragend mouseover mousedown mouseup mousemove mouseout touchstart touchend touchmove wheel".split(" ");this.h=void 0;this.Kb=this.vm.p;this.j=this.Xb.bind(this);this.addOnDisposeCallback(()=>void Rb(this))}snapshot(a){return this.vm.s({...(a.Ka&&{c:a.Ka}),
...(a.Ic&&{s:a.Ic}),...(a.gd!==void 0&&{p:a.gd})})}Xb(a){this.vm.e(a)}kc(a,b){return this.vm.c(a,b,!1)}cc(){return this.vm.l()}};function Sb(a){const b={Ka:a.c,Pc:a.e,jf:a.mc??!1,kf:a.me??!1};a.co&&(b.hc={od:a.co.c,je:a.co.a,Df:a.co.s});return b}
function Tb(a){return async()=>{const b=await a();return{f:()=>b.Jb.promise,
c:c=>{if(c>150)var d=!1;else try{b.cache=new Ub(c,b.logger),d=!0}catch(e){Vb(b,new x(22,"GBJ:init",e)),d=!1}return d},
m:c=>b.eb(Sb(c)),
mws:c=>b.yc(Sb(c))}}}
function Wb(a,b,c="bevasrsg"){b={s:f=>a.snapshot({...(f.c&&{Ka:f.c}),...(f.s&&{Ic:f.s}),Ji:f.p??!0}),
e:f=>void a.Xb?.(f),
c:(f,g)=>a.kc(f,g),
p:a.Kb,l:()=>a.cc(),
wpc:b?Tb(b):void 0};const d=window===window.top?window:Lb()?window:window.top;let e=d[c];if(e){e.bevasrs=b;if(e.nqfbel!==void 0)for(const f of e.nqfbel)f(b);e.nqfbel=void 0}else e={bevasrs:b,nqfbel:void 0},d[c]=e}
;function Xb(a){const b=[];Yb(a,Zb,6).forEach(c=>{$b(c,2)<=53&&b.push($b(c,1))});
return b}
function ac(a){const b=[];Yb(a,Zb,6).forEach(c=>{$b(c,2)>53&&b.push($b(c,1))});
return b}
;function bc(a){a.then(()=>{},()=>{})}
var cc=class extends y{constructor(){super(...arguments);this.Z=1}share(){if(this.I)throw Error("E:AD");this.Z++;return this}dispose(){--this.Z||super.dispose()}};function dc(a){return{fieldType:2,fieldName:a}}
function A(a){return{fieldType:3,fieldName:a}}
;var fc=class{constructor(a){this.h=a;ec(a,"/client_streamz/bg/frs",A("mk"))}record(a,b){this.h.record("/client_streamz/bg/frs",a,b)}},hc=class{constructor(a){this.h=a;ec(a,"/client_streamz/bg/wrl",A("mn"),dc("ac"),dc("sc"),A("rk"),A("mk"))}record(a,b,c,d,e,f){this.h.record("/client_streamz/bg/wrl",a,b,c,d,e,f)}},kc=class{constructor(a){this.i=a;ic(a,"/client_streamz/bg/ec",A("en"),A("mk"))}h(a,b){jc(this.i,"/client_streamz/bg/ec",[a,b])}},lc=class{constructor(a){this.h=a;ec(a,"/client_streamz/bg/el",
A("en"),A("mk"))}record(a,b,c){this.h.record("/client_streamz/bg/el",a,b,c)}},mc=class{constructor(a){this.i=a;ic(a,"/client_streamz/bg/cec",dc("ec"),A("mk"))}h(a,b){jc(this.i,"/client_streamz/bg/cec",[a,b])}},nc=class{constructor(a){this.i=a;ic(a,"/client_streamz/bg/po/csc",dc("cs"),A("mk"))}h(a,b){jc(this.i,"/client_streamz/bg/po/csc",[a,b])}},oc=class{constructor(a){this.i=a;ic(a,"/client_streamz/bg/po/ctav",A("av"),A("mk"))}h(a,b){jc(this.i,"/client_streamz/bg/po/ctav",[a,b])}},pc=class{constructor(a){this.i=
a;ic(a,"/client_streamz/bg/po/cwsc",A("su"),A("mk"))}h(a,b){jc(this.i,"/client_streamz/bg/po/cwsc",[a,b])}},qc=class{constructor(a){this.h=a;ec(a,"/client_streamz/bg/od/p",A("mk"))}record(a,b){this.h.record("/client_streamz/bg/od/p",a,b)}},rc=class{constructor(a){this.h=a;ec(a,"/client_streamz/bg/od/n",A("et"),A("mk"))}record(a,b,c){this.h.record("/client_streamz/bg/od/n",a,b,c)}};let sc;function tc(a){return(sc||(sc=new TextEncoder)).encode(a)}
;function uc(a){t.setTimeout(()=>{throw a;},0)}
;function vc(a){const b=[];let c=0;for(let d=0;d<a.length;d++){let e=a.charCodeAt(d);e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}
;var wc=ja(610401301,!1),xc=ja(748402147,!0),yc=ja(824656860,!0);function zc(){var a=t.navigator;return a&&(a=a.userAgent)?a:""}
var Ac;const Bc=t.navigator;Ac=Bc?Bc.userAgentData||null:null;function Cc(a){if(!wc||!Ac)return!1;for(let b=0;b<Ac.brands.length;b++){const {brand:c}=Ac.brands[b];if(c&&c.indexOf(a)!=-1)return!0}return!1}
function C(a){return zc().indexOf(a)!=-1}
;function Dc(){return wc?!!Ac&&Ac.brands.length>0:!1}
function Ec(){return Dc()?!1:C("Opera")}
function Fc(){return C("Firefox")||C("FxiOS")}
function Gc(){return Dc()?Cc("Chromium"):(C("Chrome")||C("CriOS"))&&!(Dc()?0:C("Edge"))||C("Silk")}
;function Hc(){return wc?!!Ac&&!!Ac.platform:!1}
function Ic(){return C("iPhone")&&!C("iPod")&&!C("iPad")}
;function Jc(a){Jc[" "](a);return a}
Jc[" "]=function(){};var Kc=Ec(),Lc=Dc()?!1:C("Trident")||C("MSIE"),Mc=C("Edge"),Nc=C("Gecko")&&!(zc().toLowerCase().indexOf("webkit")!=-1&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),Oc=zc().toLowerCase().indexOf("webkit")!=-1&&!C("Edge");Oc&&C("Mobile");Hc()||C("Macintosh");Hc()||C("Windows");(Hc()?Ac.platform==="Linux":C("Linux"))||Hc()||C("CrOS");var Pc=Hc()?Ac.platform==="Android":C("Android");Ic();C("iPad");C("iPod");Ic()||C("iPad")||C("iPod");zc().toLowerCase().indexOf("kaios");Fc();const Qc=Ic()||C("iPod"),Rc=C("iPad");!C("Android")||Gc()||Fc()||Ec()||C("Silk");Gc();const Sc=C("Safari")&&!(Gc()||(Dc()?0:C("Coast"))||Ec()||(Dc()?0:C("Edge"))||(Dc()?Cc("Microsoft Edge"):C("Edg/"))||(Dc()?Cc("Opera"):C("OPR"))||Fc()||C("Silk")||C("Android"))&&!(Ic()||C("iPad")||C("iPod"));const Tc={};let Uc=null;function Vc(a,b){la(a);b===void 0&&(b=0);Wc();b=Tc[b];const c=Array(Math.floor(a.length/3)),d=b[64]||"";let e=0,f=0;for(;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Xc(a){const b=a.length;let c=b*3/4;c%3?c=Math.floor(c):"=.".indexOf(a[b-1])!=-1&&(c="=.".indexOf(a[b-2])!=-1?c-2:c-1);const d=new Uint8Array(c);let e=0;Yc(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Yc(a,b){function c(e){for(;d<a.length;){const f=a.charAt(d++),g=Uc[f];if(g!=null)return g;if(!/^[\s\xa0]*$/.test(f))throw Error("Unknown base64 encoding at char: "+f);}return e}
Wc();let d=0;for(;;){const e=c(-1),f=c(0),g=c(64),h=c(64);if(h===64&&e===-1)break;b(e<<2|f>>4);g!=64&&(b(f<<4&240|g>>2),h!=64&&b(g<<6&192|h))}}
function Wc(){if(!Uc){Uc={};var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"];for(let c=0;c<5;c++){const d=a.concat(b[c].split(""));Tc[c]=d;for(let e=0;e<d.length;e++){const f=d[e];Uc[f]===void 0&&(Uc[f]=e)}}}}
;const Zc=/[-_.]/g,$c={"-":"+",_:"/",".":"="};function ad(a){return $c[a]||""}
function bd(a){a=Zc.test(a)?a.replace(Zc,ad):a;a=atob(a);const b=new Uint8Array(a.length);for(let c=0;c<a.length;c++)b[c]=a.charCodeAt(c);return b}
var cd={};function dd(){return ed||(ed=new fd(null,cd))}
function gd(a){hd(cd);var b=a.h;b==null||b!=null&&b instanceof Uint8Array||(typeof b==="string"?b=bd(b):(ka(b),b=null));return b==null?b:a.h=b}
function id(a){return new Uint8Array(gd(a)||0)}
var fd=class{sizeBytes(){const a=gd(this);return a?a.length:0}constructor(a,b){hd(b);this.h=a;if(a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values");}};let ed;function hd(a){if(a!==cd)throw Error("illegal external caller");}
;let jd=void 0;function kd(a){a=Error(a);qb(a,"warning");return a}
function ld(a,b){if(a!=null){var c=jd??(jd={});var d=c[a]||0;d>=b||(c[a]=d+1,a=Error(),qb(a,"incident"),uc(a))}}
;function md(a,b=!1){return b&&Symbol.for&&a?Symbol.for(a):a!=null?Symbol(a):Symbol()}
var E=md("jas",!0),nd=md(),od=md(),pd=md(),qd=md(),rd=md(),sd=md(),td=md("m_m",!0),ud=md(),vd=md();[...Object.values({Mh:1,Lh:2,Kh:4,Qh:8,Sh:16,Oh:32,Yf:64,Ih:128,eg:256,Rh:512,fg:1024,Jh:2048,Ph:4096,Nh:8192})];var wd;const xd=[];xd[E]=7;wd=Object.freeze(xd);var yd={};function zd(a,b){return b===void 0?a.h!==Ad&&!!(2&(a.X[E]|0)):!!(2&b)&&a.h!==Ad}
const Ad={};function Bd(a,b){if(a!=null)if(typeof a==="string")a=a?new fd(a,cd):dd();else if(a.constructor!==fd)if(a!=null&&a instanceof Uint8Array)a instanceof Uint8Array||Array.isArray(a),a=a.length?new fd(new Uint8Array(a),cd):dd();else{if(!b)throw Error();a=void 0}return a}
var Cd=Object.freeze({});function Dd(a,b,c){const d=b&128?0:-1,e=a.length;var f;if(f=!!e)f=a[e-1],f=f!=null&&typeof f==="object"&&f.constructor===Object;const g=e+(f?-1:0);for(b=b&128?1:0;b<g;b++)c(b-d,a[b]);if(f){a=a[e-1];for(const h in a)!isNaN(h)&&c(+h,a[h])}}
var Ed={};function Fd(a){a.ji=!0;return a}
;var Gd=Fd(a=>typeof a==="number"),Hd=Fd(a=>typeof a==="string");
function Id(){var a=Jd;return Fd(b=>{for(const c in a)if(b===a[c]&&!/^[0-9]+$/.test(c))return!0;return!1})}
var Kd=Fd(a=>a!=null&&typeof a==="object"&&typeof a.then==="function"),Ld=Fd(a=>!!a&&(typeof a==="object"||typeof a==="function"));function Md(a){if(Hd(a)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(a))throw Error(String(a));}else if(Gd(a)&&!Number.isSafeInteger(a))throw Error(String(a));return BigInt(a)}
var Pd=Fd(a=>a>=Nd&&a<=Od);
const Nd=BigInt(Number.MIN_SAFE_INTEGER),Od=BigInt(Number.MAX_SAFE_INTEGER);let F=0,Qd=0,Rd;function Sd(a){const b=a>>>0;F=b;Qd=(a-b)/4294967296>>>0}
function Td(a){if(a<0){Sd(0-a);a=F;var b=Qd;b=~b;a?a=~a+1:b+=1;const [c,d]=[a,b];F=c>>>0;Qd=d>>>0}else Sd(a)}
function Ud(a,b){const c=b*4294967296+(a>>>0);return Number.isSafeInteger(c)?c:Vd(a,b)}
function Vd(a,b){b>>>=0;a>>>=0;var c;b<=2097151?c=""+(4294967296*b+a):c=""+(BigInt(b)<<BigInt(32)|BigInt(a));return c}
function Wd(){var a=F,b=Qd,c;b&2147483648?c=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):c=Vd(a,b);return c}
function Xd(a){a.length<16?Td(Number(a)):(a=BigInt(a),F=Number(a&BigInt(4294967295))>>>0,Qd=Number(a>>BigInt(32)&BigInt(4294967295)))}
;const Yd=typeof BigInt==="function"?BigInt.asIntN:void 0,Zd=typeof BigInt==="function"?BigInt.asUintN:void 0,$d=Number.isSafeInteger,ae=Number.isFinite,be=Math.trunc;function ce(a){if(a!=null&&typeof a!=="number")throw Error(`Value of float/double field must be a number, found ${typeof a}: ${a}`);return a}
function de(a){if(a==null||typeof a==="number")return a;if(a==="NaN"||a==="Infinity"||a==="-Infinity")return Number(a)}
function ee(a){return a.displayName||a.name||"unknown type name"}
function fe(a){if(a!=null&&typeof a!=="boolean")throw Error(`Expected boolean but got ${ka(a)}: ${a}`);return a}
const ge=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function he(a){switch(typeof a){case "bigint":return!0;case "number":return ae(a);case "string":return ge.test(a);default:return!1}}
function ie(a){if(typeof a!=="number")throw kd("int32");if(!ae(a))throw kd("int32");return a|0}
function je(a){return a==null?a:ie(a)}
function ke(a){if(a==null)return a;if(typeof a==="string"&&a)a=+a;else if(typeof a!=="number")return;return ae(a)?a|0:void 0}
function le(a){if(a==null)return a;if(typeof a==="string"&&a)a=+a;else if(typeof a!=="number")return;return ae(a)?a>>>0:void 0}
function me(a){var b=yc?1024:0;if(!he(a))throw kd("int64");const c=typeof a;switch(b){case 512:switch(c){case "string":return ne(a);case "bigint":return String(Yd(64,a));default:return oe(a)}case 1024:switch(c){case "string":return pe(a);case "bigint":return Md(Yd(64,a));default:return qe(a)}case 0:switch(c){case "string":return ne(a);case "bigint":return Md(Yd(64,a));default:return re(a)}default:return Ua(b,"Unknown format requested type for int64")}}
function se(a){return a==null?a:me(a)}
function re(a){he(a);a=be(a);if(!$d(a)){Td(a);var b=F,c=Qd;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);b=Ud(b,c);a=typeof b==="number"?a?-b:b:a?"-"+b:b}return a}
function oe(a){he(a);a=be(a);$d(a)?a=String(a):(Td(a),a=Wd());return a}
function ne(a){he(a);var b=be(Number(a));if($d(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));a.indexOf(".");b=a.length;(a[0]==="-"?b<20||b===20&&a<="-9223372036854775808":b<19||b===19&&a<="9223372036854775807")||(Xd(a),a=Wd());return a}
function pe(a){var b=be(Number(a));if($d(b))return Md(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return Md(Yd(64,BigInt(a)))}
function qe(a){return $d(a)?Md(re(a)):Md(oe(a))}
function te(a){if(a==null)return a;if(typeof a==="bigint")return Pd(a)?a=Number(a):(a=Yd(64,a),a=Pd(a)?Number(a):String(a)),a;if(he(a))return typeof a==="number"?re(a):ne(a)}
function ue(a){const b=typeof a;if(a==null)return a;if(b==="bigint")return Md(Yd(64,a));if(he(a))return b==="string"?pe(a):qe(a)}
function ve(a){if(a==null)return a;const b=typeof a;if(b==="bigint")return String(Yd(64,a));if(he(a)){if(b==="string")return ne(a);if(b==="number")return re(a)}}
function we(a){if(a==null)return a;var b=typeof a;if(b==="bigint")return String(Zd(64,a));if(he(a)){if(b==="string")return he(a),b=be(Number(a)),$d(b)&&b>=0?a=String(b):(b=a.indexOf("."),b!==-1&&(a=a.substring(0,b)),a.indexOf("."),a[0]==="-"?b=!1:(b=a.length,b=b<20?!0:b===20&&a<="18446744073709551615"),b||(Xd(a),a=Vd(F,Qd))),a;if(b==="number")return he(a),a=be(a),a>=0&&$d(a)||(Td(a),a=Ud(F,Qd)),a}}
function xe(a){if(a==null||typeof a=="string"||a instanceof fd)return a}
function ye(a){if(typeof a!=="string")throw Error();return a}
function ze(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function Ae(a){return a==null||typeof a==="string"?a:void 0}
function Be(a,b){if(!(a instanceof b))throw Error(`Expected instanceof ${ee(b)} but got ${a&&ee(a.constructor)}`);}
function Ce(a,b,c){if(a!=null&&a[td]===yd)return a;if(Array.isArray(a)){var d=a[E]|0;c=d|c&32|c&2;c!==d&&(a[E]=c);return new b(a)}}
;const De={};function Ee(a){return a}
;function Fe(a){const b=ua(od);return b?a[b]:void 0}
const Ge={Ci:!0};function He(a,b){b<100||ld(qd,1)}
;function Ie(a,b,c,d){const e=d!==void 0;d=!!d;var f=ua(od),g;!e&&f&&(g=a[f])&&g.Oe(He);f=[];var h=a.length;let k;g=4294967295;let l=!1;const p=!!(b&64),m=p?b&128?0:-1:void 0;b&1||(k=h&&a[h-1],k!=null&&typeof k==="object"&&k.constructor===Object?(h--,g=h):k=void 0,!p||b&128||e||(l=!0,g=(Je??Ee)(g-m,m,a,k,void 0)+m));b=void 0;for(var u=0;u<h;u++){let n=a[u];if(n!=null&&(n=c(n,d))!=null)if(p&&u>=g){const z=u-m;(b??(b={}))[z]=n}else f[u]=n}if(k)for(let n in k){h=k[n];if(h==null||(h=c(h,d))==null)continue;
u=+n;let z;p&&!Number.isNaN(u)&&(z=u+m)<g?f[z]=h:(b??(b={}))[n]=h}b&&(l?f.push(b):f[g]=b);e&&ua(od)&&Fe(a);return f}
function Ke(a){switch(typeof a){case "number":return Number.isFinite(a)?a:""+a;case "bigint":return Pd(a)?Number(a):""+a;case "boolean":return a?1:0;case "object":if(Array.isArray(a)){var b=a[E]|0;return a.length===0&&b&1?void 0:Ie(a,b,Ke)}if(a!=null&&a[td]===yd)return Le(a);if(a instanceof fd){b=a.h;if(b==null)a="";else if(typeof b==="string")a=b;else{let c="",d=0;const e=b.length-10240;for(;d<e;)c+=String.fromCharCode.apply(null,b.subarray(d,d+=10240));c+=String.fromCharCode.apply(null,d?b.subarray(d):
b);a=a.h=btoa(c)}return a}return}return a}
let Je;function Me(a,b){if(b){Je=b==null||b===Ee||b[ud]!==De?Ee:b;try{return Le(a)}finally{Je=void 0}}return Le(a)}
function Le(a){a=a.X;return Ie(a,a[E]|0,Ke)}
;let Ne,Oe;function Pe(a){switch(typeof a){case "boolean":return Ne||(Ne=[0,void 0,!0]);case "number":return a>0?void 0:a===0?Oe||(Oe=[0,void 0]):[-a,void 0];case "string":return[0,a];case "object":return a}}
function Qe(a,b,c,d=0){if(a==null){var e=32;c?(a=[c],e|=128):a=[];b&&(e=e&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error("narr");e=a[E]|0;if(xc&&1&e)throw Error("rfarr");2048&e&&!(2&e)&&Re();if(e&256)throw Error("farr");if(e&64)return(e|d)!==e&&(a[E]=e|d),a;if(c&&(e|=128,c!==a[0]))throw Error("mid");a:{c=a;e|=64;var f=c.length;if(f){var g=f-1;const k=c[g];if(k!=null&&typeof k==="object"&&k.constructor===Object){b=e&128?0:-1;g-=b;if(g>=1024)throw Error("pvtlmt");for(var h in k)if(f=
+h,f<g)c[f+b]=k[h],delete k[h];else break;e=e&-16760833|(g&1023)<<14;break a}}if(b){h=Math.max(b,f-(e&128?0:-1));if(h>1024)throw Error("spvt");e=e&-16760833|(h&1023)<<14}}}a[E]=e|64|d;return a}
function Re(){if(xc)throw Error("carr");ld(sd,5)}
;function Se(a,b){if(typeof a!=="object")return a;if(Array.isArray(a)){var c=a[E]|0;a.length===0&&c&1?a=void 0:c&2||(!b||4096&c||16&c?a=Te(a,c,!1,b&&!(c&16)):(a[E]|=34,c&4&&Object.freeze(a)));return a}if(a!=null&&a[td]===yd)return b=a.X,c=b[E]|0,zd(a,c)?a:Ue(a,b,c)?Ve(a,b):Te(b,c);if(a instanceof fd)return a}
function Ve(a,b,c){a=new a.constructor(b);c&&(a.h=Ad);a.i=Ad;return a}
function Te(a,b,c,d){d??(d=!!(34&b));a=Ie(a,b,Se,d);d=32;c&&(d|=2);b=b&16769217|d;a[E]=b;return a}
function We(a){const b=a.X,c=b[E]|0;return zd(a,c)?Ue(a,b,c)?Ve(a,b,!0):new a.constructor(Te(b,c,!1)):a}
function Xe(a){if(a.h!==Ad)return!1;var b=a.X;b=Te(b,b[E]|0);b[E]|=2048;a.X=b;a.h=void 0;a.i=void 0;return!0}
function Ye(a){if(!Xe(a)&&zd(a,a.X[E]|0))throw Error();}
function Ze(a,b){b===void 0&&(b=a[E]|0);b&32&&!(b&4096)&&(a[E]=b|4096)}
function Ue(a,b,c){return c&2?!0:c&32&&!(c&4096)?(b[E]=c|2,a.h=Ad,!0):!1}
;const $e=Md(0),af={};function bf(a,b,c,d,e){Object.isExtensible(a);b=cf(a.X,b,c,e);if(b!==null||d&&a.i!==Ad)return b}
function cf(a,b,c,d){if(b===-1)return null;const e=b+(c?0:-1),f=a.length-1;let g,h;if(!(f<1+(c?0:-1))){if(e>=f)if(g=a[f],g!=null&&typeof g==="object"&&g.constructor===Object)c=g[b],h=!0;else if(e===f)c=g;else return;else c=a[e];if(d&&c!=null){d=d(c);if(d==null)return d;if(!Object.is(d,c))return h?g[b]=d:a[e]=d,d}return c}}
function G(a,b,c,d){Ye(a);const e=a.X;df(e,e[E]|0,b,c,d);return a}
function df(a,b,c,d,e){const f=c+(e?0:-1);var g=a.length-1;if(g>=1+(e?0:-1)&&f>=g){const h=a[g];if(h!=null&&typeof h==="object"&&h.constructor===Object)return h[c]=d,b}if(f<=g)return a[f]=d,b;d!==void 0&&(g=(b??(b=a[E]|0))>>14&1023||536870912,c>=g?d!=null&&(a[g+(e?0:-1)]={[c]:d}):a[f]=d);return b}
function ef(a,b,c){a=cf(a,b,c);return Array.isArray(a)?a:wd}
function ff(a,b){2&b&&(a|=2);return a|1}
function gf(a){return!!(2&a)&&!!(4&a)||!!(256&a)}
function hf(a){return Bd(a,!0)}
function jf(a){a=bf(a,1,void 0,void 0,hf);return a==null?dd():a}
function kf(a,b,c){Ye(a);const d=a.X;let e=d[E]|0;if(b==null)return df(d,e,3),a;if(!Array.isArray(b))throw kd();let f=b===wd?7:b[E]|0,g=f;var h=gf(f);let k=h||Object.isFrozen(b);h||(f=0);k||(b=[...b],g=0,f=lf(f,e),k=!1);f|=5;h=(4&f?512&f?512:1024&f?1024:0:void 0)??(yc?1024:0);f|=h;for(let l=0;l<b.length;l++){const p=b[l],m=c(p,h);Object.is(p,m)||(k&&(b=[...b],g=0,f=lf(f,e),k=!1),b[l]=m)}f!==g&&(k&&(b=[...b],f=lf(f,e)),b[E]=f);df(d,e,3,b);return a}
function mf(a,b,c,d){Ye(a);const e=a.X;df(e,e[E]|0,b,c===""?void 0:c,d);return a}
function nf(a,b,c,d){Ye(a);a=a.X;var e=a[E]|0;if(d==null){var f=a[nd]??(a[nd]=new Map);if(of(f,a,e,c)===b)f.set(c,0);else return}else{b===0||c.includes(b);f=a[nd]??(a[nd]=new Map);const g=of(f,a,e,c);g!==b&&(g&&(e=df(a,e,g)),f.set(c,b))}df(a,e,b,d)}
function of(a,b,c,d){let e=a.get(d);if(e!=null)return e;e=0;for(let f=0;f<d.length;f++){const g=d[f];cf(b,g)!=null&&(e!==0&&(c=df(b,c,e)),e=g)}a.set(d,e);return e}
function pf(a,b,c,d,e){let f=!1;d=cf(a,d,e,g=>{const h=Ce(g,c,b);f=h!==g&&h!=null;return h});
if(d!=null)return f&&!zd(d)&&Ze(a,b),d}
function qf(a,b,c,d){let e=a.X,f=e[E]|0;b=pf(e,f,b,c,d);if(b==null)return b;f=e[E]|0;if(!zd(a,f)){const g=We(b);g!==b&&(Xe(a)&&(e=a.X,f=e[E]|0),b=g,f=df(e,f,c,b,d),Ze(e,f))}return b}
function Yb(a,b,c){var d=void 0===Cd?2:4;var e=a.X,f=e,g=e[E]|0,h=zd(a,g);e=h?1:d;d=e===3;var k=!h;(e===2||k)&&Xe(a)&&(f=a.X,g=f[E]|0);h=ef(f,c);var l=h===wd?7:h[E]|0,p=ff(l,g);if(a=!(4&p)){var m=h,u=g;const n=!!(2&p);n&&(u|=2);let z=!n,D=!0,B=0,N=0;for(;B<m.length;B++){const K=Ce(m[B],b,u);if(K instanceof b){if(!n){const ba=zd(K);z&&(z=!ba);D&&(D=ba)}m[N++]=K}}N<B&&(m.length=N);p|=4;p=D?p&-4097:p|4096;p=z?p|8:p&-9}p!==l&&(h[E]=p,2&p&&Object.freeze(h));if(k&&!(8&p||!h.length&&(e===1||(e!==4?0:2&p||
!(16&p)&&32&g)))){gf(p)&&(h=[...h],p=lf(p,g),g=df(f,g,c,h));b=h;k=p;for(l=0;l<b.length;l++)m=b[l],p=We(m),m!==p&&(b[l]=p);k|=8;p=k=b.length?k|4096:k&-4097;h[E]=p}k=b=p;e===1||(e!==4?0:2&b||!(16&b)&&32&g)?gf(b)||(b|=!h.length||a&&!(4096&b)||32&g&&!(4096&b||16&b)?2:256,b!==k&&(h[E]=b),Object.freeze(h)):(e===2&&gf(b)&&(h=[...h],k=0,b=lf(b,g),g=df(f,g,c,h)),gf(b)||(d||(b|=16),b!==k&&(h[E]=b)));2&b||!(4096&b||16&b)||Ze(f,g);return h}
function rf(a,b){a!=null?Be(a,b):a=void 0;return a}
function sf(a,b,c,d,e){d=rf(d,b);G(a,c,d,e);d&&!zd(d)&&Ze(a.X);return a}
function tf(a,b,c,d){Ye(a);const e=a.X;let f=e[E]|0;if(d==null)return df(e,f,c),a;if(!Array.isArray(d))throw kd();let g=d===wd?7:d[E]|0,h=g;const k=gf(g),l=k||Object.isFrozen(d);let p=!0,m=!0;for(let n=0;n<d.length;n++){var u=d[n];Be(u,b);k||(u=zd(u),p&&(p=!u),m&&(m=u))}k||(g=p?13:5,g=m?g&-4097:g|4096);l&&g===h||(d=[...d],h=0,g=lf(g,f));g!==h&&(d[E]=g);f=df(e,f,c,d);2&g||!(4096&g||16&g)||Ze(e,f);return a}
function lf(a,b){return a=(2&b?a|2:a&-3)&-273}
function $b(a,b,c=0){return ke(bf(a,b))??c}
function uf(a,b,c=$e){return(yc?bf(a,b,void 0,void 0,ue):ue(bf(a,b)))??c}
function vf(a,b,c="",d){return Ae(bf(a,b,d))??c}
function wf(a){a=bf(a,1);return(a==null?a:ae(a)?a|0:void 0)??0}
function xf(a,b,c){return G(a,b,ze(c))}
function yf(a,b,c){if(c!=null){if(!ae(c))throw kd("enum");c|=0}return G(a,b,c)}
;var zf=class{constructor(a,b,c){this.buffer=a;if(c&&!b)throw Error();}};
function Af(a){if(typeof a==="string")return new zf(bd(a),!0);if(Array.isArray(a))return new zf(new Uint8Array(a),!0);if(a.constructor===Uint8Array)return new zf(a,!1);if(a.constructor===ArrayBuffer)return a=new Uint8Array(a),new zf(a,!1);if(a.constructor===fd){const b=gd(a)||new Uint8Array(0);return new zf(b,!0,a)}if(a instanceof Uint8Array)return a=a.constructor===Uint8Array?a:new Uint8Array(a.buffer,a.byteOffset,a.byteLength),new zf(a,!1);throw Error();}
;function Bf(a){a=BigInt.asUintN(64,a);return new Cf(Number(a&BigInt(4294967295)),Number(a>>BigInt(32)))}
function Df(a){if(!a)return Ef||(Ef=new Cf(0,0));if(!/^\d+$/.test(a))return null;Xd(a);return new Cf(F,Qd)}
function Ff(a){return a.i===0?new Cf(0,1+~a.h):new Cf(~a.i+1,~a.h)}
var Cf=class{constructor(a,b){this.i=a>>>0;this.h=b>>>0}};let Ef;function Gf(a){if(!a)return Hf||(Hf=new If(0,0));if(!/^-?\d+$/.test(a))return null;Xd(a);return new If(F,Qd)}
var If=class{constructor(a,b){this.i=a>>>0;this.h=b>>>0}};let Hf;function Jf(a,b,c){for(;c>0||b>127;)a.h.push(b&127|128),b=(b>>>7|c<<25)>>>0,c>>>=7;a.h.push(b)}
function Kf(a,b){a.h.push(b>>>0&255);a.h.push(b>>>8&255);a.h.push(b>>>16&255);a.h.push(b>>>24&255)}
function Lf(a,b){for(;b>127;)a.h.push(b&127|128),b>>>=7;a.h.push(b)}
function Mf(a,b){if(b>=0)Lf(a,b);else{for(let c=0;c<9;c++)a.h.push(b&127|128),b>>=7;a.h.push(1)}}
var Nf=class{constructor(){this.h=[]}length(){return this.h.length}end(){const a=this.h;this.h=[];return a}writeUint8(a){this.h.push(a>>>0&255)}writeInt8(a){this.h.push(a>>>0&255)}};function Of(a,b){b.length!==0&&(a.j.push(b),a.i+=b.length)}
function Pf(a,b,c){Lf(a.h,b*8+c)}
function Qf(a,b){Pf(a,b,2);b=a.h.end();Of(a,b);b.push(a.i);return b}
function Rf(a,b){var c=b.pop();for(c=a.i+a.h.length()-c;c>127;)b.push(c&127|128),c>>>=7,a.i++;b.push(c);a.i++}
function Sf(a,b,c){if(c!=null)switch(Tf(c),Pf(a,b,1),typeof c){case "number":a=a.h;Sd(c);Kf(a,F);Kf(a,Qd);break;case "bigint":c=Bf(c);a=a.h;b=c.h;Kf(a,c.i);Kf(a,b);break;default:c=Df(c),a=a.h,b=c.h,Kf(a,c.i),Kf(a,b)}}
function Uf(a,b,c){c!=null&&(c=parseInt(c,10),Pf(a,b,0),Mf(a.h,c))}
function Vf(a,b,c){Pf(a,b,2);Lf(a.h,c.length);Of(a,a.h.end());Of(a,c)}
var Wf=class{constructor(){this.j=[];this.i=0;this.h=new Nf}};function Tf(a){switch(typeof a){case "string":Df(a)}}
function Xf(a){switch(typeof a){case "string":a.length&&a[0]==="-"?Df(a.substring(1)):Df(a)}}
;function Yf(){const a=class{constructor(){throw Error();}};Object.setPrototypeOf(a,a.prototype);return a}
var Zf=Yf(),$f=Yf(),ag=Yf(),bg=Yf(),cg=Yf(),dg=Yf(),eg=Yf(),fg=Yf(),gg=Yf(),hg=Yf(),ig=Yf(),jg=Yf(),kg=Yf();function lg(a,b){if(b==null||b=="")return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error("dnarr");b[E]|=32;return new a(b)}
var H=class{constructor(a,b,c){this.X=Qe(a,b,c,2048)}toJSON(){return Me(this)}serialize(a){return JSON.stringify(Me(this,a))}clone(){const a=this.X,b=a[E]|0;return Ue(this,a,b)?Ve(this,a,!0):new this.constructor(Te(a,b,!1))}};H.prototype[td]=yd;H.prototype.toString=function(){return this.X.toString()};var mg=class{constructor(a,b){this.Lc=a;a=ua(Zf);this.h=!!a&&b===a||!1}};function ng(a,b,c,d,e){b=og(b,d);b!=null&&(c=Qf(a,c),e(b,a),Rf(a,c))}
const pg=new mg(ng,Zf),qg=new mg(ng,Zf);var rg=Symbol(),sg=Symbol();let tg,ug;
function vg(a){var b=wg,c=xg,d=a[rg];if(d)return d;d={};d.Vh=a;d.yd=Pe(a[0]);var e=a[1];let f=1;e&&e.constructor===Object&&(d.extensions=e,e=a[++f],typeof e==="function"&&(d.Ye=!0,tg??(tg=e),ug??(ug=a[f+1]),e=a[f+=2]));const g={};for(;e&&yg(e);){for(var h=0;h<e.length;h++)g[e[h]]=e;e=a[++f]}for(h=1;e!==void 0;){typeof e==="number"&&(h+=e,e=a[++f]);let p;var k=void 0;e instanceof mg?p=e:(p=pg,f--);if(p?.h){e=a[++f];k=a;var l=f;typeof e==="function"&&(e=e(),k[l]=e);k=e}e=a[++f];l=h+1;typeof e==="number"&&
e<0&&(l-=e,e=a[++f]);for(;h<l;h++){const m=g[h];k?c(d,h,p,k,m):b(d,h,p,m)}}return a[rg]=d}
function yg(a){return Array.isArray(a)&&!!a.length&&typeof a[0]==="number"&&a[0]>0}
function og(a,b){if(a instanceof H)return a.X;if(Array.isArray(a))return Qe(a,b[0],b[1])}
;function wg(a,b,c){a[b]=c.Lc}
function xg(a,b,c,d){let e,f;const g=c.Lc;a[b]=(h,k,l)=>g(h,k,l,f||(f=vg(d).yd),e||(e=zg(d)))}
function zg(a){let b=a[sg];if(!b){const c=vg(a);b=(d,e)=>Ag(d,e,c);
a[sg]=b}return b}
function Ag(a,b,c){Dd(a,a[E]|0,(d,e)=>{if(e!=null){var f=Bg(c,d);f?f(b,e,d):d<500||ld(rd,3)}});
(a=Fe(a))&&a.Oe((d,e,f)=>{Of(b,b.h.end());for(d=0;d<f.length;d++)Of(b,gd(f[d])||new Uint8Array(0))})}
function Bg(a,b){var c=a[b];if(c)return c;if(c=a.extensions)if(c=c[b]){c=Array.isArray(c)?c[0]instanceof mg?c:[qg,c]:[c,void 0];var d=c[0].Lc;if(c=c[1]){const e=zg(c),f=vg(c).yd;c=a.Ye?ug(f,e):(g,h,k)=>d(g,h,k,f,e)}else c=d;
return a[b]=c}}
;function Cg(a,b,c){if(Array.isArray(b)){var d=b[E]|0;if(d&4)return b;for(var e=0,f=0;e<b.length;e++){const g=a(b[e]);g!=null&&(b[f++]=g)}f<e&&(b.length=f);a=d|1;c&&(a=(a|4)&-1537);a!==d&&(b[E]=a);c&&a&2&&Object.freeze(b);return b}}
var Dg=(a,b)=>{const c=new Wf;Ag(a.X,c,vg(b));Of(c,c.h.end());a=new Uint8Array(c.i);b=c.j;const d=b.length;let e=0;for(let f=0;f<d;f++){const g=b[f];a.set(g,e);e+=g.length}c.j=[a];return a};
function Eg(a,b){return new mg(a,b)}
function Fg(a,b){return new mg(a,b)}
function Gg(a,b,c){b=de(b);b!=null&&(Pf(a,c,1),a=a.h,c=Rd||(Rd=new DataView(new ArrayBuffer(8))),c.setFloat64(0,+b,!0),F=c.getUint32(0,!0),Qd=c.getUint32(4,!0),Kf(a,F),Kf(a,Qd))}
function Hg(a,b,c){b=ve(b);if(b!=null){switch(typeof b){case "string":Gf(b)}if(b!=null)switch(Pf(a,c,0),typeof b){case "number":a=a.h;Td(b);Jf(a,F,Qd);break;case "bigint":c=BigInt.asUintN(64,b);c=new If(Number(c&BigInt(4294967295)),Number(c>>BigInt(32)));Jf(a.h,c.i,c.h);break;default:c=Gf(b),Jf(a.h,c.i,c.h)}}}
function Ig(a,b,c){b=ke(b);b!=null&&b!=null&&(Pf(a,c,0),Mf(a.h,b))}
function Jg(a,b,c){b=b==null||typeof b==="boolean"?b:typeof b==="number"?!!b:void 0;b!=null&&(Pf(a,c,0),a.h.h.push(b?1:0))}
function Kg(a,b,c){b=Ae(b);b!=null&&Vf(a,c,tc(b))}
function Lg(a,b,c,d,e){b=og(b,d);b!=null&&(c=Qf(a,c),e(b,a),Rf(a,c))}
var Mg=Eg(Gg,ig),Ng=Eg(function(a,b,c){b=de(b);b!=null&&(Pf(a,c,5),a=a.h,c=Rd||(Rd=new DataView(new ArrayBuffer(8))),c.setFloat32(0,+b,!0),Qd=0,F=c.getUint32(0,!0),Kf(a,F))},hg),Og=Eg(Hg,eg),Pg=Eg(function(a,b,c){b=we(b);
if(b!=null&&(Tf(b),b!=null))switch(Pf(a,c,0),typeof b){case "number":a=a.h;Td(b);Jf(a,F,Qd);break;case "bigint":c=Bf(b);Jf(a.h,c.i,c.h);break;default:c=Df(b),Jf(a.h,c.i,c.h)}},fg),Qg=Eg(Ig,bg),Rg=Eg(function(a,b,c){b=we(b);
if(b!=null)switch(Xf(b),Pf(a,c,1),a=a.h,Xf(b),typeof b){case "number":b<0?(c=-b,b=Ff(new Cf(c&4294967295,c/4294967296)),c=b.h,Kf(a,b.i),Kf(a,c)):(Sd(b),Kf(a,F),Kf(a,Qd));break;case "bigint":b=b<BigInt(0)?Ff(Bf(-b)):Bf(b);c=b.h;Kf(a,b.i);Kf(a,c);break;default:b=b.length&&b[0]==="-"?Ff(Df(b.substring(1))):Df(b),c=b.h,Kf(a,b.i),Kf(a,c)}},gg),Sg=Eg(Jg,$f),Tg=Eg(Kg,ag),Ug=function(a,b,c=Zf){return new mg(b,c)}(function(a,b,c,d,e){if(a.h()!==2)return!1;
var f=a.i;d=Qe(void 0,d[0],d[1]);var g=b[E]|0;if(g&2)throw Error();const h=g&128?Ed:void 0;let k=ef(b,c,h),l=k===wd?7:k[E]|0,p=ff(l,g);if(2&p||gf(p)||16&p)p===l||gf(p)||(k[E]=p),k=[...k],l=0,p=lf(p,g),df(b,g,c,k,h);p&=-13;p!==l&&(k[E]=p);k.push(d);f.call(a,d,e);return!0},function(a,b,c,d,e){if(Array.isArray(b)){for(let f=0;f<b.length;f++)Lg(a,b[f],c,d,e);
a=b[E]|0;a&1||(b[E]=a|1)}}),Vg=new mg(Lg,Zf),Wg=Fg(function(a,b,c){b=Cg(xe,b,!1);
if(b!=null)for(let g=0;g<b.length;g++){var d=a,e=c,f=b[g];f!=null&&Vf(d,e,Af(f).buffer)}},jg),Xg=Eg(function(a,b,c){b=le(b);
b!=null&&b!=null&&(Pf(a,c,0),Lf(a.h,b))},cg),Yg=Eg(function(a,b,c){Uf(a,c,ke(b))},kg),Zg=Fg(function(a,b,c){b=Cg(ke,b,!0);
if(b!=null)for(let d=0;d<b.length;d++)Uf(a,c,b[d])},kg),$g=Eg(function(a,b,c){b=ke(b);
b!=null&&(Pf(a,c,5),a=a.h,a.h.push(b>>>0&255),a.h.push(b>>>8&255),a.h.push(b>>>16&255),a.h.push(b>>>24&255))},dg);class ah{constructor(a){var b=bh;this.ctor=a;this.isRepeated=0;this.h=qf;this.defaultValue=void 0;this.i=b.gf!=null?Ed:void 0}register(){Jc(this)}};function ch(a){return b=>lg(a,b)}
;function dh(a,b){return kf(a,b,ie)}
var eh=class extends H{constructor(a){super(a)}};var fh=class extends H{constructor(a){super(a)}},gh=[1,2,3];var hh=class extends H{constructor(a){super(a)}},ih=[1,2,3];var jh=class extends H{constructor(a){super(a)}};var kh=class extends H{constructor(a){super(a)}};var lh=class extends H{constructor(a){super(a)}},mh=[1,2,3];var nh=class extends H{constructor(a){super(a)}};nh.prototype.j=function(a){return function(){return Dg(this,a)}}([0,
Tg,[0,mh,Vg,[0,Tg,-1,Sg],Vg,[0,Tg,-1,Qg,Sg],Vg,[0,Tg]],Fg(function(a,b,c){b=Cg(Ae,b,!0);if(b!=null)for(let g=0;g<b.length;g++){var d=a,e=c,f=b[g];f!=null&&Vf(d,e,tc(f))}},ag),
Ug,[0,Ug,[0,gh,Eg(Kg,ag),Eg(Ig,bg),Eg(Jg,$f)],[0,ih,Eg(Hg,eg),Eg(Gg,ig),Vg,[0,Ug,[0,Mg,Og]]]],Eg(function(a,b,c){Sf(a,c,we(b))},gg),
Fg(function(a,b,c){b=Cg(we,b,!1);if(b!=null)for(let d=0;d<b.length;d++)Sf(a,c,b[d])},gg)]);var oh=class extends H{constructor(a){super(a)}};function ph(a){var b=new nh;b=xf(b,1,a.i);var c=qh(a);b=kf(b,c,ye);c=[];const d=[];for(var e of a.h.keys())d.push(e.split(","));for(e=0;e<d.length;e++){const u=d[e];var f=a.j,g=rh(a,u)||[],h=[];for(var k=0;k<g.length;k++){var l=g[k],p=l&&l.h;l=new hh;switch(f){case 3:p=Number(p);Number.isFinite(p)&&nf(l,1,ih,se(p));break;case 2:nf(l,2,ih,ce(Number(p)))}h.push(l)}f=h;for(g=0;g<f.length;g++){k=f[g];h=new jh;h=sf(h,hh,2,k);k=[];l=sh(a);for(p=0;p<l.length;p++){var m=l[p];const n=u[p],z=new fh;switch(m){case 3:nf(z,
1,gh,ze(String(n)));break;case 2:m=Number(n);Number.isFinite(m)&&nf(z,2,gh,je(m));break;case 1:nf(z,3,gh,fe(n==="true"))}k.push(z)}tf(h,fh,1,k);c.push(h)}}tf(b,jh,4,c);return b}
;function th(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function uh(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;p=l=0}
function b(m){for(var u=g,n=0;n<64;n+=4)u[n/4]=m[n]<<24|m[n+1]<<16|m[n+2]<<8|m[n+3];for(n=16;n<80;n++)m=u[n-3]^u[n-8]^u[n-14]^u[n-16],u[n]=(m<<1|m>>>31)&4294967295;m=e[0];var z=e[1],D=e[2],B=e[3],N=e[4];for(n=0;n<80;n++){if(n<40)if(n<20){var K=B^z&(D^B);var ba=1518500249}else K=z^D^B,ba=1859775393;else n<60?(K=z&D|B&(z|D),ba=2400959708):(K=z^D^B,ba=3395469782);K=((m<<5|m>>>27)&4294967295)+K+N+ba+u[n]&4294967295;N=B;B=D;D=(z<<30|z>>>2)&4294967295;z=m;m=K}e[0]=e[0]+m&4294967295;e[1]=e[1]+z&4294967295;
e[2]=e[2]+D&4294967295;e[3]=e[3]+B&4294967295;e[4]=e[4]+N&4294967295}
function c(m,u){if(typeof m==="string"){m=unescape(encodeURIComponent(m));for(var n=[],z=0,D=m.length;z<D;++z)n.push(m.charCodeAt(z));m=n}u||(u=m.length);n=0;if(l==0)for(;n+64<u;)b(m.slice(n,n+64)),n+=64,p+=64;for(;n<u;)if(f[l++]=m[n++],p++,l==64)for(l=0,b(f);n+64<u;)b(m.slice(n,n+64)),n+=64,p+=64}
function d(){var m=[],u=p*8;l<56?c(h,56-l):c(h,64-(l-56));for(var n=63;n>=56;n--)f[n]=u&255,u>>>=8;b(f);for(n=u=0;n<5;n++)for(var z=24;z>=0;z-=8)m[u++]=e[n]>>z&255;return m}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,p;a();return{reset:a,update:c,digest:d,xe:function(){for(var m=d(),u="",n=0;n<m.length;n++)u+="0123456789ABCDEF".charAt(Math.floor(m[n]/16))+"0123456789ABCDEF".charAt(m[n]%16);return u}}}
;function vh(a,b,c){var d=String(t.location.href);return d&&a&&b?[b,wh(th(d),a,c||null)].join(" "):null}
function wh(a,b,c){var d=[];let e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],hb(d,function(h){e.push(h)}),xh(e.join(" "));
const f=[],g=[];hb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];hb(d,function(h){e.push(h)});
a=xh(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function xh(a){const b=uh();b.update(a);return b.xe().toLowerCase()}
;function yh(a){this.h=a||{cookie:""}}
r=yh.prototype;r.isEnabled=function(){if(!t.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{wc:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
r.set=function(a,b,c){let d;var e=!1;let f;if(typeof c==="object"){f=c.sameSite;e=c.secure||!1;d=c.domain||void 0;var g=c.path||void 0;var h=c.wc}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=d?";domain="+d:"";g=g?";path="+g:"";e=e?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.h.cookie=a+"="+b+c+g+h+e+(f!=null?
";samesite="+f:"")};
r.get=function(a,b){const c=a+"=",d=(this.h.cookie||"").split(";");for(let e=0,f;e<d.length;e++){f=d[e].trim();if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){const d=this.get(a)!==void 0;this.set(a,"",{wc:0,path:b,domain:c});return d};
r.Vb=function(){return zh(this).keys};
r.ab=function(){return zh(this).values};
r.clear=function(){const a=zh(this).keys;for(let b=a.length-1;b>=0;b--)this.remove(a[b])};
function zh(a){a=(a.h.cookie||"").split(";");const b=[],c=[];let d,e;for(let f=0;f<a.length;f++)e=a[f].trim(),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Ah=new yh(typeof document=="undefined"?null:document);function Bh(){var a=t.__SAPISID||t.__APISID||t.__3PSAPISID||t.__1PSAPISID||t.__OVERRIDE_SID;if(a)return!0;typeof document!=="undefined"&&(a=new yh(document),a=a.get("SAPISID")||a.get("APISID")||a.get("__Secure-3PAPISID")||a.get("__Secure-1PAPISID"));return!!a}
function Ch(a,b,c,d){(a=t[a])||typeof document==="undefined"||(a=(new yh(document)).get(b));return a?vh(a,c,d):null}
function Dh(a){var b=th(t?.location.href);const c=[];if(Bh()){b=b.indexOf("https:")==0||b.indexOf("chrome-extension:")==0||b.indexOf("chrome-untrusted://new-tab-page")==0||b.indexOf("moz-extension:")==0;var d,e=(d=b)?t.__SAPISID:t.__APISID;e||typeof document==="undefined"||(e=new yh(document),e=e.get(d?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(d=e?vh(e,d?"SAPISIDHASH":"APISIDHASH",a):null)&&c.push(d);b&&((b=Ch("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&c.push(b),(a=Ch("__3PSAPISID",
"__Secure-3PAPISID","SAPISID3PHASH",a))&&c.push(a))}return c.length==0?null:c.join(" ")}
;var Eh=class{async compress(a){var b=new CompressionStream("gzip");const c=(new Response(b.readable)).arrayBuffer();b=b.writable.getWriter();await b.write((new TextEncoder).encode(a));await b.close();return new Uint8Array(await c)}isSupported(a){return a<1024?!1:typeof CompressionStream!=="undefined"}};var Fh=class extends H{constructor(a){super(a)}};var Gh=class{constructor(a,b){this.intervalMs=a;this.callback=b;this.enabled=!1;this.h=()=>ta();
this.i=this.h()}setInterval(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()}start(){this.enabled=!0;this.timer||(this.timer=setTimeout(()=>{this.tick()},this.intervalMs),this.i=this.h())}stop(){this.enabled=!1;
this.timer&&(clearTimeout(this.timer),this.timer=void 0)}tick(){if(this.enabled){const a=Math.max(this.h()-this.i,0);a<this.intervalMs*.8?this.timer=setTimeout(()=>{this.tick()},this.intervalMs-a):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.callback(),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0}};var Hh=class extends H{constructor(a){super(a)}};var Ih=class extends H{constructor(a){super(a)}};function Jh(a,b){this.x=a!==void 0?a:0;this.y=b!==void 0?b:0}
r=Jh.prototype;r.clone=function(){return new Jh(this.x,this.y)};
r.equals=function(a){return a instanceof Jh&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
r.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
r.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
r.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
r.scale=function(a,b){this.x*=a;this.y*=typeof b==="number"?b:a;return this};function Kh(a,b){this.width=a;this.height=b}
r=Kh.prototype;r.clone=function(){return new Kh(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
r.scale=function(a,b){this.width*=a;this.height*=typeof b==="number"?b:a;return this};function Lh(a,b){for(const c in a)b.call(void 0,a[c],c,a)}
function Mh(a){const b=[];let c=0;for(const d in a)b[c++]=a[d];return b}
function Nh(a){var b=Oh;for(const c in b)if(a.call(void 0,b[c],c,b))return c}
function Ph(a){for(const b in a)return!1;return!0}
function Qh(a,b){if(a!==null&&b in a)throw Error(`The object already contains the key "${b}"`);a[b]=!0}
function Rh(a){return a!==null&&"privembed"in a?a.privembed:!1}
function Sh(a,b){for(const c in a)if(!(c in b)||a[c]!==b[c])return!1;for(const c in b)if(!(c in a))return!1;return!0}
function Th(a){const b={};for(const c in a)b[c]=a[c];return b}
function Uh(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());const b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length);for(const c in a)b[c]=Uh(a[c]);return b}
const Vh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wh(a,b){let c,d;for(let e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(let f=0;f<Vh.length;f++)c=Vh[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var Yh=class{constructor(a,b){this.h=a===Xh&&b||""}toString(){return this.h}},Xh={};new Yh(Xh,"");function db(a){return new bb(a[0].toLowerCase())}
;"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function Zh(a){var b=document;return typeof a==="string"?b.getElementById(a):a}
function $h(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
function ai(a){let b;for(;b=a.firstChild;)a.removeChild(b)}
function bi(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function ci(a,b){let c=0;for(;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var di=class extends H{constructor(a){super(a)}qc(){return wf(this)}};var ei=class extends H{constructor(a){super(a)}};function fi(a){tf(gi,ei,1,a)}
var hi=class extends H{constructor(a){super(a)}},ii=ch(hi);var ji=class extends H{constructor(a){super(a)}};var ki=["platform","platformVersion","architecture","model","uaFullVersion"];const gi=new hi;let li=null;function mi(a,b=ki){if(!li){a=a.navigator?.userAgentData;if(!a||typeof a.getHighEntropyValues!=="function"||a.brands&&typeof a.brands.map!=="function")return Promise.reject(Error("UACH unavailable"));fi((a.brands||[]).map(d=>{var e=new ei;e=xf(e,1,d.brand);return xf(e,2,d.version)}));
typeof a.mobile==="boolean"&&G(gi,2,fe(a.mobile));li=a.getHighEntropyValues(b)}const c=new Set(b);return li.then(d=>{const e=gi.clone();c.has("platform")&&xf(e,3,d.platform);c.has("platformVersion")&&xf(e,4,d.platformVersion);c.has("architecture")&&xf(e,5,d.architecture);c.has("model")&&xf(e,6,d.model);c.has("uaFullVersion")&&xf(e,7,d.uaFullVersion);return e.serialize()}).catch(()=>gi.serialize())}
;function ni(a){return yf(a,1,1)}
var oi=class extends H{constructor(a){super(a)}};var pi=class extends H{constructor(a){super(a,4)}};var qi=class extends H{constructor(a){super(a,37)}};var ri=class extends H{constructor(a){super(a,19)}bc(a){return yf(this,2,a)}};function si(a,b){sf(a.h,oi,1,b);wf(b)||ni(b);a.Sa||(b=ti(a),vf(b,5)||xf(b,5,a.locale));a.j&&(b=ti(a),qf(b,hi,9)||sf(b,hi,9,a.j))}
function ti(a){var b=qf(a.h,oi,1);b||(b=new oi,si(a,b));a=b;b=qf(a,ji,11);b||(b=new ji,sf(a,ji,11,b));return b}
function ui(a,b){a.i=b}
function vi(a){const b=a.Sa?void 0:window;b?mi(b,ki).then(c=>{a.j=ii(c??"[]");c=ti(a);sf(c,hi,9,a.j);return!0}).catch(()=>!1):Promise.resolve(!1)}
function wi(a,b,c=0,d=0,e=null,f=0,g=0){if(!a.Sa){var h=ti(a);var k=new di;k=yf(k,1,a.i);k=G(k,2,fe(a.isFinal));d=G(k,3,je(d>0?d:void 0));f=G(d,4,je(f>0?f:void 0));g=G(f,5,je(g>0?g:void 0));f=g.X;d=f[E]|0;g=zd(g,d)?g:Ue(g,f,d)?Ve(g,f):new g.constructor(Te(f,d,!0));sf(h,di,10,g)}a=a.h.clone();h=Date.now().toString();a=G(a,4,se(h));b=b.slice();b=tf(a,qi,3,b);e&&(a=new Hh,e=G(a,13,je(e)),a=new Ih,e=sf(a,Hh,2,e),a=new pi,e=sf(a,Ih,1,e),e=yf(e,2,9),sf(b,pi,18,e));c&&G(b,14,se(c));return b}
var xi=class{constructor(a,b=!1){this.Sa=b;this.j=this.locale=null;this.i=0;this.isFinal=!1;this.h=new ri;Number.isInteger(a)&&this.h.bc(a);b||(this.locale=document.documentElement.getAttribute("lang"));si(this,new oi)}bc(a){this.h.bc(a);return this}};function yi(a,b,c,d){this.o=a;this.u=b;this.h=this.j=a;this.H=c||0;this.A=d||2}
yi.prototype.i=0;yi.prototype.reset=function(){this.h=this.j=this.o;this.i=0};
yi.prototype.getValue=function(){return this.j};
function zi(a){a.h=Math.min(a.u,a.h*a.A);a.j=Math.min(a.u,a.h+(a.H?Math.round(a.H*(Math.random()-.5)*2*a.h):0));a.i++}
;var bh=class extends H{constructor(a){super(a,8)}},Ai=ch(bh);var Bi;Bi=new ah(class extends H{constructor(a){super(a)}});function Ci(){return"https://play.google.com/log?format=json&hasfast=true"}
function Di(a,b){if(!a.Ba)return()=>{};
const c=()=>{a.flush()};
return b?()=>{b().then(c)}:c}
function Ei(a){a.j.isFinal=!0;a.flush();a.j.isFinal=!1}
function Fi(a){a.G||(a.G=Ci());try{return(new URL(a.G)).toString()}catch(b){return(new URL(a.G,window.location.origin)).toString()}}
function Gi(a){Hi(a,(b,c)=>{b=new URL(b);b.searchParams.set("format","json");let d=!1;try{d=window.navigator.sendBeacon(b.toString(),c.serialize())}catch{}d||(a.P=!1);return d})}
function Ii(a,b,c=null,d=a.withCredentials){const e={},f=new URL(Fi(a));c&&(e.Authorization=c);a.sessionIndex&&(e["X-Goog-AuthUser"]=a.sessionIndex,f.searchParams.set("authuser",a.sessionIndex));a.pageId&&(Object.defineProperty(e,"X-Goog-PageId",{value:a.pageId}),f.searchParams.set("pageId",a.pageId));return{url:f.toString(),body:b,ne:1,Fc:e,requestType:"POST",withCredentials:d,timeoutMillis:a.timeoutMillis}}
function Hi(a,b){if(a.h.length!==0){var c=new URL(Fi(a));c.searchParams.delete("format");var d=a.zb();d&&c.searchParams.set("auth",d);c.searchParams.set("authuser",a.sessionIndex||"0");for(d=0;d<10&&a.h.length;++d){const e=a.h.slice(0,32),f=wi(a.j,e,a.o,a.A,a.nb,a.Z,a.Y);if(!b(c.toString(),f)){++a.A;break}a.o=0;a.A=0;a.Z=0;a.Y=0;a.h=a.h.slice(e.length)}a.i.enabled&&a.i.stop()}}
var Ji=class extends y{constructor(a){super();this.componentId="";this.h=[];this.Fa="";this.pageId=null;this.Ja=this.ga=-1;this.F=this.experimentIds=null;this.Y=this.Z=this.A=this.o=0;this.Wa=1;this.timeoutMillis=0;this.la=!1;this.logSource=a.logSource;this.zb=a.zb||(()=>{});
this.j=new xi(a.logSource,a.Sa);this.network=a.network||null;this.nb=a.nb||null;this.bufferSize=1E3;this.G=a.Jf||null;this.sessionIndex=a.sessionIndex||null;this.Tb=a.Tb||!1;this.logger=null;this.withCredentials=!a.Oc;this.Sa=a.Sa||!1;this.P=!this.Sa&&!!window&&!!window.navigator&&window.navigator.sendBeacon!==void 0;this.Ba=typeof URLSearchParams!=="undefined"&&!!(new URL(Ci())).searchParams&&!!(new URL(Ci())).searchParams.set;const b=ni(new oi);si(this.j,b);this.u=new yi(1E4,3E5,.1);a=Di(this,a.md);
this.i=new Gh(this.u.getValue(),a);this.qa=new Gh(6E5,a);this.Tb||this.qa.start();this.Sa||(document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ei(this)}),document.addEventListener("pagehide",()=>{Ei(this)}))}ba(){Ei(this);
this.i.stop();this.qa.stop();super.ba()}log(a){if(this.Ba){a=a.clone();var b=this.Wa++;a=G(a,21,se(b));this.componentId&&xf(a,26,this.componentId);b=a;{var c=bf(b,1);const d=typeof c;c=c==null?c:d==="bigint"?String(Yd(64,c)):he(c)?d==="string"?ne(c):re(c):void 0}c==null&&(c=Date.now(),c=Number.isFinite(c)?c.toString():"0",G(b,1,se(c)));(yc?te(bf(b,15,void 0,void 0,ue)):te(bf(b,15)))==null&&G(b,15,se((new Date).getTimezoneOffset()*60));this.experimentIds&&(c=this.experimentIds.clone(),sf(b,Fh,16,c));
b=this.h.length-this.bufferSize+1;b>0&&(this.h.splice(0,b),this.o+=b);this.h.push(a);this.Tb||this.i.enabled||this.i.start()}}flush(a,b){if(this.h.length===0)a&&a();else if(this.la&&this.P)this.j.i=3,Gi(this);else{var c=Date.now();if(this.Ja>c&&this.ga<c)b&&b("throttled");else{this.network&&(typeof this.network.qc==="function"?ui(this.j,this.network.qc()):this.j.i=0);var d=wi(this.j,this.h,this.o,this.A,this.nb,this.Z,this.Y),e=this.zb();if(e&&this.Fa===e)b&&b("stale-auth-token");else{this.h=[];this.i.enabled&&
this.i.stop();this.o=0;c=d.serialize();let f;this.F&&this.F.isSupported(c.length)&&(f=this.F.compress(c));const g=Ii(this,c,e),h=p=>{this.u.reset();this.i.setInterval(this.u.getValue());if(p){var m=null;try{var u=JSON.stringify(JSON.parse(p.replace(")]}'\n","")));m=Ai(u)}catch(n){}if(m){p=Number(uf(m,1,Md("-1")));p>0&&(this.ga=Date.now(),this.Ja=this.ga+p);(p=ua(od))&&m.X[p]?.[175237375]!=null&&ld(pd,3);if(ua(vd)&&ua(od)&&void 0===vd&&(p=m.X,u=p[od])&&(u=u.Di))try{u(p,175237375,Ge)}catch(n){uc(n)}m=
Bi.ctor?Bi.h(m,Bi.ctor,175237375,Bi.i):Bi.h(m,175237375,null,Bi.i);if(m=m===null?void 0:m)m=$b(m,1,-1),m!==-1&&(this.u=new yi(m<1?1:m,3E5,.1),this.i.setInterval(this.u.getValue()))}}a&&a();this.A=0},k=(p,m)=>{var u=Yb(d,qi,3);
var n=Number(uf(d,14));zi(this.u);this.i.setInterval(this.u.getValue());p===401&&e&&(this.Fa=e);n&&(this.o+=n);m===void 0&&(m=this.isRetryable(p));m&&(this.h=u.concat(this.h),this.Tb||this.i.enabled||this.i.start());b&&b("net-send-failed",p);++this.A},l=()=>{this.network&&this.network.send(g,h,k)};
f?f.then(p=>{g.Fc["Content-Encoding"]="gzip";g.Fc["Content-Type"]="application/binary";g.body=p;g.ne=2;l()},()=>{l()}):l()}}}}isRetryable(a){return 500<=a&&a<600||a===401||a===0}};var Ki=class{constructor(){this.ee=typeof AbortController!=="undefined"}async send(a,b,c){const d=this.ee?new AbortController:void 0,e=d?setTimeout(()=>{d.abort()},a.timeoutMillis):void 0;
try{const f=await fetch(a.url,{method:a.requestType,headers:{...a.Fc},...(a.body&&{body:a.body}),...(a.withCredentials&&{credentials:"include"}),signal:a.timeoutMillis&&d?d.signal:null});f.status===200?b?.(await f.text()):c?.(f.status)}catch(f){switch(f?.name){case "AbortError":c?.(408);break;default:c?.(400)}}finally{clearTimeout(e)}}qc(){return 4}};function Li(a,b){a.buildLabel=b;return a}
function Mi(a){a.network=new Ni;return a}
function Oi(a,b){a.h=b}
function Pi(a){a.i=!0;return a}
function Qi(a){a.network||(a.network=new Ki);const b=new Ji({logSource:a.logSource,zb:a.zb?a.zb:Dh,sessionIndex:a.sessionIndex,Jf:a.hb,Sa:!1,Tb:!1,Oc:a.j,md:a.md,network:a.network});Ob(a,b);if(a.buildLabel){var c=a.buildLabel,d=ti(b.j);xf(d,7,c)}b.F=new Eh;a.componentId&&(b.componentId=a.componentId);a.nb&&(b.nb=a.nb);a.pageId&&(b.pageId=a.pageId);a.h&&((d=a.h)?(b.experimentIds||(b.experimentIds=new Fh),c=b.experimentIds,d=d.serialize(),xf(c,4,d)):b.experimentIds&&G(b.experimentIds,4));a.i&&(b.la=
b.P);vi(b.j);a.bufferSize&&(b.bufferSize=a.bufferSize);a.network.bc&&a.network.bc(a.logSource);a.network.xf&&a.network.xf(b);return b}
var Ri=class extends y{constructor(){super();this.logSource=1828;this.sessionIndex="0";this.hb="https://play.google.com/log?format=json&hasfast=true";this.network=this.buildLabel=null;this.componentId="";this.h=this.nb=null;this.i=!1;this.pageId=null;this.bufferSize=void 0;this.logger=null}Oc(){this.j=!0;return this}};var Si=class extends y{constructor(a){super();this.logSource=1828;this.componentId="";a||(a=new Ri,a.componentId="",Ob(this,a),a=Qi(a));this.h=a}flush(a){a=a||[];if(a.length){var b=new oh;const f=[];for(let g=0;g<a.length;g++){const h=a[g],k=ph(h);f.push(k);h.clear()}tf(b,nh,1,f);a=b;b=this.h;if(a instanceof qi)b.log(a);else try{var c=new qi,d=a.serialize();var e=xf(c,8,d);b.log(e)}catch{}this.h.flush()}}};var Ti=class{constructor(a){this.h=a}};function sh(a){return a.fields.map(b=>b.fieldType)}
function rh(a,...b){b=Ui(b);return a.h.has(b)?a.h.get(b):void 0}
function qh(a){return a.fields.map(b=>b.fieldName)}
function Ui(...a){return a?a.join(","):"key"}
var Vi=class{constructor(a,b,c){this.i=a;this.j=b;this.fields=c||[];this.h=new Map}clear(){this.h.clear()}};var Wi=class extends Vi{constructor(a,b){super(a,3,b)}};var Xi=class extends Vi{constructor(a,b){super(a,2,b)}record(a,...b){b=[b];const c=rh(this,b);c?c.push(new Ti(a)):(b=Ui([b]),this.h.set(b,[new Ti(a)]))}};function Yi(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Yi.prototype.stopPropagation=function(){this.j=!0};
Yi.prototype.preventDefault=function(){this.defaultPrevented=!0};function Zi(a,b){Yi.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
va(Zi,Yi);
Zi.prototype.init=function(a,b){const c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;b=a.relatedTarget;b||(c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement));this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==
void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=a.pointerType;this.state=a.state;this.i=a;a.defaultPrevented&&Zi.Ea.preventDefault.call(this)};
Zi.prototype.stopPropagation=function(){Zi.Ea.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Zi.prototype.preventDefault=function(){Zi.Ea.preventDefault.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var $i="closure_listenable_"+(Math.random()*1E6|0);var aj=0;function bj(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.handler=e;this.key=++aj;this.ac=this.jc=!1}
function cj(a){a.ac=!0;a.listener=null;a.proxy=null;a.src=null;a.handler=null}
;function dj(a){this.src=a;this.listeners={};this.h=0}
dj.prototype.add=function(a,b,c,d,e){const f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);const g=ej(a,b,d,e);g>-1?(b=a[g],c||(b.jc=!1)):(b=new bj(b,this.src,f,!!d,e),b.jc=c,a.push(b));return b};
dj.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;const e=this.listeners[a];b=ej(e,b,c,d);return b>-1?(cj(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.h--),!0):!1};
function fj(a,b){const c=b.type;c in a.listeners&&mb(a.listeners[c],b)&&(cj(b),a.listeners[c].length==0&&(delete a.listeners[c],a.h--))}
function ej(a,b,c,d){for(let e=0;e<a.length;++e){const f=a[e];if(!f.ac&&f.listener==b&&f.capture==!!c&&f.handler==d)return e}return-1}
;var gj="closure_lm_"+(Math.random()*1E6|0),hj={},ij=0;function jj(a,b,c,d,e){if(d&&d.once)kj(a,b,c,d,e);else if(Array.isArray(b))for(let f=0;f<b.length;f++)jj(a,b[f],c,d,e);else c=lj(c),a&&a[$i]?a.listen(b,c,ma(d)?!!d.capture:!!d,e):mj(a,b,c,!1,d,e)}
function mj(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");const g=ma(e)?!!e.capture:!!e;let h=nj(a);h||(a[gj]=h=new dj(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=oj();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(pj(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ij++}}
function oj(){function a(c){return b.call(a.src,a.listener,c)}
const b=qj;return a}
function kj(a,b,c,d,e){if(Array.isArray(b))for(let f=0;f<b.length;f++)kj(a,b[f],c,d,e);else c=lj(c),a&&a[$i]?rj(a,b,c,ma(d)?!!d.capture:!!d,e):mj(a,b,c,!0,d,e)}
function sj(a,b,c,d,e){if(Array.isArray(b))for(let f=0;f<b.length;f++)sj(a,b[f],c,d,e);else(d=ma(d)?!!d.capture:!!d,c=lj(c),a&&a[$i])?a.i.remove(String(b),c,d,e):a&&(a=nj(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=ej(b,c,d,e)),(c=a>-1?b[a]:null)&&tj(c))}
function tj(a){if(typeof a!=="number"&&a&&!a.ac){var b=a.src;if(b&&b[$i])fj(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(pj(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ij--;(c=nj(b))?(fj(c,a),c.h==0&&(c.src=null,b[gj]=null)):cj(a)}}}
function pj(a){return a in hj?hj[a]:hj[a]="on"+a}
function qj(a,b){if(a.ac)a=!0;else{b=new Zi(b,this);const c=a.listener,d=a.handler||a.src;a.jc&&tj(a);a=c.call(d,b)}return a}
function nj(a){a=a[gj];return a instanceof dj?a:null}
var uj="__closure_events_fn_"+(Math.random()*1E9>>>0);function lj(a){if(typeof a==="function")return a;a[uj]||(a[uj]=function(b){return a.handleEvent(b)});
return a[uj]}
;function vj(){y.call(this);this.i=new dj(this);this.qa=this;this.Z=null}
va(vj,y);vj.prototype[$i]=!0;r=vj.prototype;r.addEventListener=function(a,b,c,d){jj(this,a,b,c,d)};
r.removeEventListener=function(a,b,c,d){sj(this,a,b,c,d)};
function wj(a,b){var c=a.Z;if(c){var d=[];for(var e=1;c;c=c.Z)d.push(c),++e}a=a.qa;c=b.type||b;typeof b==="string"?b=new Yi(b,a):b instanceof Yi?b.target=b.target||a:(e=b,b=new Yi(c,a),Wh(b,e));e=!0;let f,g;if(d)for(g=d.length-1;!b.j&&g>=0;g--)f=b.h=d[g],e=xj(f,c,!0,b)&&e;b.j||(f=b.h=a,e=xj(f,c,!0,b)&&e,b.j||(e=xj(f,c,!1,b)&&e));if(d)for(g=0;!b.j&&g<d.length;g++)f=b.h=d[g],e=xj(f,c,!1,b)&&e}
r.ba=function(){vj.Ea.ba.call(this);this.removeAllListeners();this.Z=null};
r.listen=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function rj(a,b,c,d,e){a.i.add(String(b),c,!0,d,e)}
r.removeAllListeners=function(a){if(this.i){var b=this.i;a=a&&a.toString();let c=0;for(const d in b.listeners)if(!a||d==a){const e=b.listeners[d];for(let f=0;f<e.length;f++)++c,cj(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function xj(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();let e=!0;for(let f=0;f<b.length;++f){const g=b[f];if(g&&!g.ac&&g.capture==c){const h=g.listener,k=g.handler||g.src;g.jc&&fj(a.i,g);e=h.call(k,d)!==!1&&e}}return e&&!d.defaultPrevented}
;var yj=typeof AsyncContext!=="undefined"&&typeof AsyncContext.Snapshot==="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function zj(a,b){a.o(b);a.i<100&&(a.i++,b.next=a.h,a.h=b)}
class Aj{constructor(a,b){this.j=a;this.o=b;this.i=0;this.h=null}get(){let a;this.i>0?(this.i--,a=this.h,this.h=a.next,a.next=null):a=this.j();return a}};class Bj{constructor(){this.i=this.h=null}add(a,b){const c=Cj.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c}remove(){let a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a}}var Cj=new Aj(()=>new Dj,a=>a.reset());
class Dj{constructor(){this.next=this.scope=this.h=null}set(a,b){this.h=a;this.scope=b;this.next=null}reset(){this.next=this.scope=this.h=null}};let Ej,Fj=!1,Gj=new Bj,Ij=(a,b)=>{Ej||Hj();Fj||(Ej(),Fj=!0);Gj.add(a,b)},Hj=()=>{const a=Promise.resolve(void 0);
Ej=()=>{a.then(Jj)}};
function Jj(){let a;for(;a=Gj.remove();){try{a.h.call(a.scope)}catch(b){uc(b)}zj(Cj,a)}Fj=!1}
;function Kj(){}
function Lj(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Mj(a){this.B=0;this.ob=void 0;this.ub=this.Ya=this.parent_=null;this.sc=this.Qc=!1;if(a!=Kj)try{const b=this;a.call(void 0,function(c){Nj(b,2,c)},function(c){Nj(b,3,c)})}catch(b){Nj(this,3,b)}}
function Oj(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
Oj.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var Pj=new Aj(function(){return new Oj},function(a){a.reset()});
function Qj(a,b,c){const d=Pj.get();d.i=a;d.h=b;d.context=c;return d}
function Rj(a){return new Mj(function(b,c){c(a)})}
Mj.prototype.then=function(a,b,c){return Sj(this,yj(typeof a==="function"?a:null),yj(typeof b==="function"?b:null),c)};
Mj.prototype.$goog_Thenable=!0;function Tj(a,b,c,d){Uj(a,Qj(b||Kj,c||null,d))}
r=Mj.prototype;r.finally=function(a){a=yj(a);return new Mj((b,c)=>{Tj(this,d=>{a();b(d)},d=>{a();
c(d)})})};
r.Jc=function(a,b){return Sj(this,null,yj(a),b)};
r.catch=Mj.prototype.Jc;r.cancel=function(a){if(this.B==0){const b=new Vj(a);Ij(function(){Wj(this,b)},this)}};
function Wj(a,b){if(a.B==0)if(a.parent_){var c=a.parent_;if(c.Ya){var d=0,e=null,f=null;for(let g=c.Ya;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.B==0&&d==1?Wj(c,b):(f?(d=f,d.next==c.ub&&(c.ub=d),d.next=d.next.next):Xj(c),Yj(c,e,3,b)))}a.parent_=null}else Nj(a,3,b)}
function Uj(a,b){a.Ya||a.B!=2&&a.B!=3||Zj(a);a.ub?a.ub.next=b:a.Ya=b;a.ub=b}
function Sj(a,b,c,d){const e=Qj(null,null,null);e.child=new Mj(function(f,g){e.i=b?function(h){try{const k=b.call(d,h);f(k)}catch(k){g(k)}}:f;
e.h=c?function(h){try{const k=c.call(d,h);k===void 0&&h instanceof Vj?g(h):f(k)}catch(k){g(k)}}:g});
e.child.parent_=a;Uj(a,e);return e.child}
r.Hf=function(a){this.B=0;Nj(this,2,a)};
r.If=function(a){this.B=0;Nj(this,3,a)};
function Nj(a,b,c){if(a.B==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.B=1;a:{var d=c,e=a.Hf,f=a.If;if(d instanceof Mj){Tj(d,e,f,a);var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(k){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(ma(d))try{const k=d.then;if(typeof k==="function"){ak(d,k,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}}g||(a.ob=c,a.B=b,a.parent_=null,Zj(a),b!=3||c instanceof Vj||bk(a,c))}}
function ak(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
let h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Zj(a){a.Qc||(a.Qc=!0,Ij(a.He,a))}
function Xj(a){let b=null;a.Ya&&(b=a.Ya,a.Ya=b.next,b.next=null);a.Ya||(a.ub=null);return b}
r.He=function(){let a;for(;a=Xj(this);)Yj(this,a,this.B,this.ob);this.Qc=!1};
function Yj(a,b,c,d){if(c==3&&b.h&&!b.j)for(;a&&a.sc;a=a.parent_)a.sc=!1;if(b.child)b.child.parent_=null,ck(b,c,d);else try{b.j?b.i.call(b.context):ck(b,c,d)}catch(e){dk.call(null,e)}zj(Pj,b)}
function ck(a,b,c){b==2?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function bk(a,b){a.sc=!0;Ij(function(){a.sc&&dk.call(null,b)})}
var dk=uc;function Vj(a){Ca.call(this,a)}
va(Vj,Ca);Vj.prototype.name="cancel";function ek(a,b){vj.call(this);this.j=a||1;this.h=b||t;this.o=ra(this.Ff,this);this.u=ta()}
va(ek,vj);r=ek.prototype;r.enabled=!1;r.Ia=null;r.setInterval=function(a){this.j=a;this.Ia&&this.enabled?(this.stop(),this.start()):this.Ia&&this.stop()};
r.Ff=function(){if(this.enabled){const a=ta()-this.u;a>0&&a<this.j*.8?this.Ia=this.h.setTimeout(this.o,this.j-a):(this.Ia&&(this.h.clearTimeout(this.Ia),this.Ia=null),wj(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
r.start=function(){this.enabled=!0;this.Ia||(this.Ia=this.h.setTimeout(this.o,this.j),this.u=ta())};
r.stop=function(){this.enabled=!1;this.Ia&&(this.h.clearTimeout(this.Ia),this.Ia=null)};
r.ba=function(){ek.Ea.ba.call(this);this.stop();delete this.h};function ec(a,b,...c){a.i.has(b)||a.i.set(b,new Xi(b,c))}
function ic(a,b,...c){a.i.has(b)||a.i.set(b,new Wi(b,c))}
function fk(a){a.h.enabled||a.h.start();a.u++;a.u>=a.j&&a.o()}
function gk(a){for(let b=0;b<a.length;b++)a[b].clear()}
function hk(a,b){return a.F.has(b)?void 0:a.i.get(b)}
function jc(a,b,...c){if((b=hk(a,b))&&b instanceof Wi){c=[c];var d=0,e;(e=(e=rh(b,[c]))&&e.length?e[0]:void 0)&&(d=e.h);d+=1;c=Ui([c]);b.h.set(c,[new Ti(d)]);fk(a)}}
var ik=class extends y{constructor(a){super();this.G=a;this.u=0;this.j=100;this.A=!1;this.i=new Map;this.F=new Set;this.flushInterval=3E4;this.h=new ek(this.flushInterval);this.h.listen("tick",this.o,!1,this);Ob(this,this.h)}sendIsolatedPayload(a){this.A=a;this.j=1}o(){const a=[...this.i.values()].filter(b=>b.h.size);
a.length&&this.G.flush(a,this.A);gk(a);this.u=0;this.h.enabled&&this.h.stop()}record(a,b,...c){(a=hk(this,a))&&a instanceof Xi&&(a.record(b,c),fk(this))}};function jk(a){switch(a){case 200:return 0;case 400:return 3;case 401:return 16;case 403:return 7;case 404:return 5;case 409:return 10;case 412:return 9;case 429:return 8;case 499:return 1;case 500:return 2;case 501:return 12;case 503:return 14;case 504:return 4;default:return 2}}
function kk(a){switch(a){case 0:return"OK";case 1:return"CANCELLED";case 2:return"UNKNOWN";case 3:return"INVALID_ARGUMENT";case 4:return"DEADLINE_EXCEEDED";case 5:return"NOT_FOUND";case 6:return"ALREADY_EXISTS";case 7:return"PERMISSION_DENIED";case 16:return"UNAUTHENTICATED";case 8:return"RESOURCE_EXHAUSTED";case 9:return"FAILED_PRECONDITION";case 10:return"ABORTED";case 11:return"OUT_OF_RANGE";case 12:return"UNIMPLEMENTED";case 13:return"INTERNAL";case 14:return"UNAVAILABLE";case 15:return"DATA_LOSS";
default:return""}}
;var lk=class extends Error{constructor(a,b){super(b);this.code=a;this.metadata={};this.name="RpcError";Object.setPrototypeOf(this,new.target.prototype)}toString(){let a=`RpcError(${kk(this.code)||String(this.code)})`;this.message&&(a+=": "+this.message);return a}};function mk(){}
mk.prototype.serialize=function(a){const b=[];nk(this,a,b);return b.join("")};
function nk(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");var e="";for(var f=0;f<b;f++)c.push(e),nk(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),ok(d,c),c.push(":"),nk(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":ok(b,c);break;
case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var pk={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},qk=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function ok(a,b){b.push('"',a.replace(qk,function(c){let d=pk[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),pk[c]=d);return d}),'"')}
;function rk(){vj.call(this);this.headers=new Map;this.h=!1;this.M=null;this.o=this.Y="";this.j=this.P=this.A=this.G=!1;this.F=0;this.u=null;this.la="";this.ga=!1}
va(rk,vj);var sk=/^https?$/i,tk=["POST","PUT"],uk=[];function vk(a,b,c,d,e,f,g){const h=new rk;uk.push(h);b&&h.listen("complete",b);rj(h,"ready",h.re);f&&(h.F=Math.max(0,f));g&&(h.ga=g);h.send(a,c,d,e)}
r=rk.prototype;r.re=function(){this.dispose();mb(uk,this)};
r.send=function(a,b,c,d){if(this.M)throw Error("[goog.net.XhrIo] Object is active with another request="+this.Y+"; newUri="+a);b=b?b.toUpperCase():"GET";this.Y=a;this.o="";this.G=!1;this.h=!0;this.M=new XMLHttpRequest;this.M.onreadystatechange=yj(ra(this.Ad,this));try{this.getStatus(),this.P=!0,this.M.open(b,String(a),!0),this.P=!1}catch(f){this.getStatus();wk(this,f);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,d[e]);else if(typeof d.keys===
"function"&&typeof d.get==="function")for(const f of d.keys())c.set(f,d.get(f));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(f=>"content-type"==f.toLowerCase());
e=t.FormData&&a instanceof t.FormData;!(gb(tk,b)>=0)||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const [f,g]of c)this.M.setRequestHeader(f,g);this.la&&(this.M.responseType=this.la);"withCredentials"in this.M&&this.M.withCredentials!==this.ga&&(this.M.withCredentials=this.ga);try{this.u&&(clearTimeout(this.u),this.u=null),this.F>0&&(this.getStatus(),this.u=setTimeout(this.Gf.bind(this),this.F)),this.getStatus(),this.A=!0,this.M.send(a),this.A=!1}catch(f){this.getStatus(),
wk(this,f)}};
r.Gf=function(){typeof ia!="undefined"&&this.M&&(this.o="Timed out after "+this.F+"ms, aborting",this.getStatus(),wj(this,"timeout"),this.abort(8))};
function wk(a,b){a.h=!1;a.M&&(a.j=!0,a.M.abort(),a.j=!1);a.o=b;xk(a);yk(a)}
function xk(a){a.G||(a.G=!0,wj(a,"complete"),wj(a,"error"))}
r.abort=function(){this.M&&this.h&&(this.getStatus(),this.h=!1,this.j=!0,this.M.abort(),this.j=!1,wj(this,"complete"),wj(this,"abort"),yk(this))};
r.ba=function(){this.M&&(this.h&&(this.h=!1,this.j=!0,this.M.abort(),this.j=!1),yk(this,!0));rk.Ea.ba.call(this)};
r.Ad=function(){this.I||(this.P||this.A||this.j?zk(this):this.nf())};
r.nf=function(){zk(this)};
function zk(a){if(a.h&&typeof ia!="undefined")if(a.A&&(a.M?a.M.readyState:0)==4)setTimeout(a.Ad.bind(a),0);else if(wj(a,"readystatechange"),a.isComplete()){a.getStatus();a.h=!1;try{if(Ak(a))wj(a,"complete"),wj(a,"success");else{try{var b=(a.M?a.M.readyState:0)>2?a.M.statusText:""}catch(c){b=""}a.o=b+" ["+a.getStatus()+"]";xk(a)}}finally{yk(a)}}}
function yk(a,b){if(a.M){a.u&&(clearTimeout(a.u),a.u=null);const c=a.M;a.M=null;b||wj(a,"ready");try{c.onreadystatechange=null}catch(d){}}}
r.isActive=function(){return!!this.M};
r.isComplete=function(){return(this.M?this.M.readyState:0)==4};
function Ak(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=b===0)a=String(a.Y).match(xb)[1]||null,!a&&t.self&&t.self.location&&(a=t.self.location.protocol.slice(0,-1)),b=!sk.test(a?a.toLowerCase():"");c=b}return c}
r.getStatus=function(){try{return(this.M?this.M.readyState:0)>2?this.M.status:-1}catch(a){return-1}};
r.getLastError=function(){return typeof this.o==="string"?this.o:String(this.o)};var Ni=class{send(a,b=()=>{},c=()=>{}){vk(a.url,d=>{d=d.target;
if(Ak(d)){try{var e=d.M?d.M.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Fc,a.timeoutMillis,a.withCredentials)}qc(){return 1}};var Ck=class{constructor(a,b){this.logger=a;this.event=b;this.startTime=Bk()}done(){this.logger.j(this.event,Bk()-this.startTime)}};function Dk(a,b,c){const d=Bk();b=b();a.j(c,Bk()-d);return b}
var Ek=class extends cc{constructor(){super(...arguments)}},Fk=class extends Ek{o(){}h(){}j(){}ta(){}F(){}A(){}i(){}P(){}u(){}G(){}},Gk=class extends Ek{constructor(a){super();this.logger=a;this.addOnDisposeCallback(()=>void this.logger.dispose())}update(a){this.logger.dispose();
this.logger=a}h(a){this.logger.h(a)}j(a,b){this.logger.j(a,b)}ta(a){this.logger.ta(a)}F(a){this.logger.F(a)}A(a,b){this.logger.A(a,b)}i(){this.logger.i()}P(a){this.logger.P(a)}u(a){this.logger.u(a)}G(a){this.logger.G(a)}o(a){this.logger.o(a)}};function Hk(a,b,c,d){a=Pi(Mi(Li(new Ri,a))).Oc();b.length&&Oi(a,dh(new eh,b));d!==void 0&&(a.hb=d);const e=new Si(Qi(a));Ob(e,a);const f=new ik({flush(g){try{e.flush(g)}catch(h){c(h)}}});f.addOnDisposeCallback(()=>{setTimeout(()=>{try{f.o()}finally{e.dispose()}})});
f.j=1E5;f.flushInterval=3E4;f.h.setInterval(3E4);return f}
function Ik(a){if(a.timer===void 0){const b=Math.max(0,a.h+a.i-Bk());a.timer=setTimeout(()=>{try{a.callback()}finally{a.h=Bk(),a.timer=void 0}},b)}}
class Jk extends y{constructor(a,b){super();this.callback=a;this.i=b;this.h=-b;this.addOnDisposeCallback(()=>void clearTimeout(this.timer))}}
class Kk extends Ek{constructor(a,b){super();this.metrics=a;this.ka=b}o(a){this.metrics.Bf.record(a,this.ka)}h(a){this.metrics.eventCount.h(a,this.ka)}j(a,b){this.metrics.Ge.record(b,a,this.ka)}ta(a){this.metrics.errorCount.h(a,this.ka)}P(a){this.metrics.Mf.h(a,this.ka)}u(a){this.metrics.oe.h(a,this.ka)}G(a){this.metrics.Lf.h(a,this.ka)}F(a){this.metrics.payloadSize.record(a,this.ka)}A(a,b){this.metrics.mf.record(b,a,this.ka)}}function Lk(a,b=[]){return new Mk(a,b)}
var Mk=class extends Kk{constructor(a,b=[]){const c={ka:a.ka||"_",Rc:a.Rc||[],Vc:a.Vc|0,hb:a.hb,Ac:a.Ac||(()=>{}),
Mb:a.Mb||((e,f)=>Hk(e,f,c.Ac,c.hb))},d=c.Mb("53",c.Rc.concat(b));
super({Bf:new fc(d),errorCount:new mc(d),eventCount:new kc(d),Ge:new lc(d),Li:new hc(d),Mf:new nc(d),oe:new oc(d),Lf:new pc(d),payloadSize:new qc(d),mf:new rc(d)},c.ka);this.options=c;this.service=d;this.ga=!a.Mb;this.Y=new Jk(()=>void this.service.o(),c.Vc);
this.addOnDisposeCallback(()=>{this.Y.dispose();this.ga&&this.service.dispose()});
b.slice().sort(pb)}i(){Ik(this.Y)}};function Bk(){return globalThis.performance?.now?.()??Date.now()}
;var Nk=class extends H{constructor(a){super(a)}};var Ok=class extends H{constructor(a){super(a)}};var Pk=class extends H{constructor(a){super(a,0,"bfkj")}},Qk=function(a){return Fd(b=>b instanceof a&&!zd(b))}(Pk);
Pk.gf="bfkj";var Zb=class extends H{constructor(a){super(a)}};var Rk=class extends H{constructor(a){super(a)}},Sk=ch(Rk);class Tk{constructor(){this.promise=new Promise((a,b)=>{this.resolve=a;this.reject=b})}}
;function Uk(a,b){if(a.disable)return new Fk;b=b?Xb(b):[];return Lk({ka:a.ka,Rc:a.Je,Vc:a.hf,hb:a.hb,Ac:a.Ac,Mb:a.Mb},b)}
class Vk extends y{constructor(a){super();this.j=Math.floor(Math.random()*200);this.h=new Rk;let b;if("challenge"in a&&Qk(a.challenge)){b=vf(a.challenge,4,void 0,Ed);var c=vf(a.challenge,5,void 0,Ed);vf(a.challenge,7,void 0,Ed)&&(this.h=Sk(vf(a.challenge,7,void 0,Ed)))}else({program:b,globalName:c}=a);this.addOnDisposeCallback(async()=>{const {Af:p}=await this.i;p?.()});
this.logger=Uk(a.Gb||{},this.h);Ob(this,this.logger);const d=new Tk;this.i=d.promise;this.logger.h("t");const e=this.logger.share(),f=new Ck(e,"t"),g=(p,m,u,n)=>{if(!this.logger.I){var z="k";m?z="h":u&&(z="u");z!=="k"?n!==0&&(this.logger.h(z),this.logger.j(z,p)):this.j<=0?(this.logger.h(z),this.logger.j(z,p),this.j=Math.floor(Math.random()*200)):this.j--}},h=(p,m,u,n)=>{Promise.resolve().then(()=>{f.done();
e.i();e.dispose();d.resolve({ge:p,Af:m,rf:u,pe:n})})},k=[(p,m)=>{this.logger.j(p,m)},
p=>{this.logger.ta(p)},
p=>{this.logger.F(p)},
(p,m)=>{this.logger.A(p,m)}];
if(!t[c])throw this.logger.ta(25),Error("EGOU");if(!t[c].a)throw this.logger.ta(26),Error("ELIU");try{const p=t[c].a;c=[];const m=[];var l=Xb(this.h);for(let z=0;z<l.length;z++)c.push(l[z]),m.push(1);const u=ac(this.h);for(l=0;l<u.length;l++)c.push(u[l]),m.push(2);const [n]=p(b,h,!0,a.Rd,g,[c,m],vf(this.h,5),!1,k);this.o=n;this.Kb=d.promise.then(()=>{})}catch(p){throw this.logger.ta(28),p;
}}snapshot(a){if(this.I)throw Error("Already disposed");this.logger.h("n");const b=this.logger.share();return this.i.then(({ge:c})=>new Promise(d=>{const e=new Ck(b,"n");c(f=>{e.done();b.o(f.length);b.i();b.dispose();d(f)},[a.Ka,
a.Ic,a.Ud,a.gd])}))}Kd(a){if(this.I)throw Error("Already disposed");
this.logger.h("n");const b=Dk(this.logger,()=>this.o([a.Ka,a.Ic,a.Ud,a.gd]),"n");
this.logger.o(b.length);this.logger.i();return b}Xb(a){this.i.then(({rf:b})=>{b?.(a)})}kc(a,b){return this.i.then(({pe:c})=>c?.(a,b,!1))}cc(){return this.logger.share()}}
;function Wk(a){if(!a)return null;a=Ae(bf(a,4,void 0,af));return a===null||a===void 0?null:Ia(a)}
;function Xk(){Yk.instance||(Yk.instance=new Yk);return Yk.instance}
function Zk(a,b,c,d){if(!b&&!c)return Promise.resolve();if(!d)return $k(b,c);let e;(e=a.promises)[d]||(e[d]=new Promise((f,g)=>{$k(b,c).then(()=>{a.h=d;f()},h=>{delete a.promises[d];
g(h)})}));
return a.promises[d]}
function al(a,b){return Zk(a,qf(b,Nk,1,Ed),qf(b,Ok,2,Ed),vf(b,3,void 0,Ed))}
var Yk=class{constructor(){this.promises={};this.h=null}};function $k(a,b){return b?bl(b):a?cl(a):Promise.resolve()}
function bl(a){return new Promise((b,c)=>{const d=$h("SCRIPT"),e=Wk(a);ab(d,e);d.onload=()=>{bi(d);b()};
d.onerror=()=>{bi(d);c(Error("EWLS"))};
(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(d)})}
function cl(a){return new Promise(b=>{const c=$h("SCRIPT");if(a){var d=Ae(bf(a,6,void 0,af));d=d===null||d===void 0?null:Ya(d)}else d=null;c.textContent=Za(d);$a(c);(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(c);bi(c);b()})}
;function dl(a,b){return mf(a,1,ze(b))}
function el(a,b){return mf(a,2,ze(b))}
var fl=class extends H{constructor(a){super(a)}};async function gl(a,b,c,d=Xk(),e=Promise.resolve(void 0),f){await 0;let g;for(;;){let h=null;if(g){hl(a,7);try{h=await il(g.snapshot({}),f.ue,()=>Promise.resolve("E:CTO"))}catch(p){h="E:UCE"}}let k;
const l=new yi(g?f.Ce:f.De,f.Ee,f.Fe,f.Be);for(let p=1;p<=f.maxAttempts;p++){if(p!==1){hl(a,0);a.h=new jl(l.getValue(),f.Kc,f.Od);const m=await a.h.promise;a.h=void 0;m===1?(p=1,l.reset()):zi(l)}try{let m;c?m=c:(hl(a,5),m=await il(kl(b,d.h,h),f.Me,()=>Promise.reject(Error("RGF:Fetch timed out"))));
hl(a,3);await il(al(d,m),f.bf,()=>Promise.reject(Error("DTZ:Script timed out")));
hl(a,8);await e;const u=new Vk({challenge:m,Gb:a.options.Gb,Rd:a.options.Rd});await il(u.Kb,f.zf,()=>Promise.reject(Error("QEG:Setup timed out")));
k=u;break}catch(m){a.handleError(m),ll(a)}}if(a.I)break;k&&(c=void 0,ml(a,g),g=k,nl(a,k),ll(a));hl(a,2);a.h=new jl(f.Fd,f.Kc,f.Od);a.isPaused&&a.h.pause();await a.h.promise;a.h=void 0;if(a.I)break}g?.dispose()}
function ol(a){a.F=Error("Cancelled by dispose");a.u.resolve();bc(a.A.promise);a.A.reject(Error("Cancelled by dispose"));a.logger.dispose();Promise.all(a.o).then(async()=>{a.i?.dispose();a.i=void 0});
a.o=[];a.h?.i();bc(a.j.promise);a.j.reject(Error("Cancelled by dispose"))}
function pl(a,b){const c=a.Bc;a.Bc=()=>{c();b()}}
function nl(a,b){a.I||(a.i=b,a.logger.update(b.cc()),a.u.resolve(),a.A.resolve(void 0),a.Bc())}
function ml(a,b){b&&(Promise.all(a.o).then(()=>void b.dispose()),a.o=[])}
function hl(a,b){a.P=b;a.options.ti?.(b)}
function ll(a){a.I||(a.j.resolve(),a.j=new Tk)}
var sl=class extends y{constructor(a){super();this.options=a;this.A=new Tk;this.Kb=this.A.promise;this.u=new Tk;this.P=1;this.j=new Tk;this.o=[];this.isPaused=!1;this.Bc=a.Bc||(()=>{});
this.logger=new Gk(Uk(a.Gb||{}));gl(this,a.Oa,a.Se,a.Ei,a.Gi,{...ql,...(a.Nb||{})});this.addOnDisposeCallback(()=>void ol(this))}async snapshot(a){if(this.I)throw Error("Already disposed");
this.i||this.F||await this.u.promise;if(this.i)return await this.i.snapshot(a);throw this.F;}pause(){this.I||this.isPaused||(this.isPaused=!0,this.h&&this.h.pause())}resume(){!this.I&&this.isPaused&&(this.isPaused=!1,this.h&&this.h.resume())}async checkForRefresh(){if(this.I)throw Error("Already disposed");if(this.h){var a=this.h;a.isExpired()?(rl(a),a.Gc(0),a=!0):a=!1;a&&await this.j.promise}else await this.j.promise}async G(){if(this.I)throw Error("Already disposed");this.h?.i();await this.j.promise}Xb(a){this.i?.Xb?.(a)}kc(a,
b){return this.i?.kc?.(a,b)??Promise.resolve()}handleError(a){this.I||(this.F=a,this.u.resolve(),this.options.zc?.(a))}cc(){return this.logger.share()}},ql={Fd:432E5,Kc:3E5,Od:10,ue:1E4,Me:3E4,bf:3E4,zf:6E4,De:1E3,Ce:6E4,Ee:6E5,Fe:.25,Be:2,maxAttempts:10};function il(a,b,c){let d;c=(new Promise(e=>{d=setTimeout(e,b)})).then(c);
bc(c);return Promise.race([a.finally(()=>void clearTimeout(d)),
c])}
function tl(a,b){a.endTimeMs=Date.now()+b;a.tick()}
function rl(a){a.h&&(clearTimeout(a.h),a.h=null)}
class jl{constructor(a,b,c){this.endTimeMs=0;this.h=null;this.isPaused=!1;this.tick=()=>{if(!this.isPaused){var d=this.endTimeMs-Date.now();d<=this.j?(this.h=null,this.Gc(0)):this.h=setTimeout(this.tick,Math.min(d,this.Kc))}};
this.Kc=b;this.j=c;this.promise=new Promise(d=>{this.Gc=d});
tl(this,a)}pause(){this.isPaused||(this.isPaused=!0,rl(this))}resume(){this.isPaused&&(this.isPaused=!1,this.tick())}i(){rl(this);this.endTimeMs=0;this.isPaused=!1;this.Gc(1)}isExpired(){return Date.now()>this.endTimeMs}};function ul(a,b){try{return globalThis.sessionStorage.setItem(a,b),!0}catch(c){return!1}}
const vl=Math.imul??((a,b)=>a*b|0);
function wl(a,b=0,c=a.length,d){let e=0;for(d&&(e=wl(d));b<c;b++)e=vl(31,e)+(typeof a==="string"?a.charCodeAt(b):a[b])|0;return e}
const xl=[196,200,224,18];function yl(a){const [b,c]=[wl(a,0,a.length>>1,xl),wl(a,a.length>>1)];return b.toString(16)+c.toString(16)}
function zl(a,b){var c=[wl(b,0,b.length>>1,void 0),wl(b,b.length>>1)];a=new Uint32Array(a.buffer);b=a[0];const [d,e]=c;for(c=1;c<a.length;c+=2){var f=b,g=c,h=d,k=e;for(let l=0;l<22;l++)g=g>>>8|g<<24,g+=f|0,g^=h+38293,f=f<<3|f>>>29,f^=g,k=k>>>8|k<<24,k+=h|0,k^=l+38293,h=h<<3|h>>>29,h^=k;f=[f,g];a[c]^=f[0];c+1<a.length&&(a[c+1]^=f[1])}}
function Al(a,b,c,d,e){const f=(4-(xl.length+c.length)%4)%4,g=new Uint8Array(4+f+xl.length+4+c.length),h=new DataView(g.buffer);let k=0;h.setUint32(k,Math.random()*4294967295);k=k+4+f;g.set(xl,k);k+=xl.length;h.setUint32(k,e);g.set(c,k+4);zl(g,d);return a.oa(b,l=>void globalThis.sessionStorage.removeItem(l))?ul(b,Vc(g))?"s":"t":"i"}
function Bl(a,b){var c=globalThis.sessionStorage.getItem(a);if(!c)return["m"];let d;try{d=Xc(c),zl(d,b)}catch(e){return globalThis.sessionStorage.removeItem(a),["c"]}for(b=4;b<7&&d[b]===0;)b++;for(c=0;c<xl.length;c++)if(d[b++]!==xl[c])return globalThis.sessionStorage.removeItem(a),["d"];c=(new DataView(d.buffer)).getUint32(b);return Math.floor(Date.now()/1E3)>=c?(globalThis.sessionStorage.removeItem(a),["e"]):["a",new Uint8Array(d.buffer,b+4)]}
function Cl(a){var b=globalThis.sessionStorage.getItem("iU5q-!O9@$");if(!b)return new Dl(a);var c=b.split(",");if(c.length<2)return globalThis.sessionStorage.removeItem("iU5q-!O9@$"),new Dl(a);b=c.slice(1);b.length===1&&b[0]===""&&(b=[]);c=Number(c[0]);return isNaN(c)||c<0||c>b.length?(globalThis.sessionStorage.removeItem("iU5q-!O9@$"),new Dl(a)):new Dl(a,c,b)}
class Dl{constructor(a,b=0,c=[]){this.maxItems=a;this.h=b;this.i=c}serialize(){return String(this.h)+","+this.i.join()}oa(a,b){let c=void 0;if(this.i[this.h]!==a){const d=this.i.indexOf(a);d!==-1?(this.i.splice(d,1),d<this.h&&this.h--,this.i.splice(this.h,0,a)):(c=this.i[this.h],this.i[this.h]=a)}this.h=(this.h+1)%this.maxItems;a=ul("iU5q-!O9@$",this.serialize());c&&a&&b(c);return a}}
var Ub=class{constructor(a,b){this.logger=b;try{var c=globalThis.sessionStorage&&!!globalThis.sessionStorage.getItem&&!!globalThis.sessionStorage.setItem&&!!globalThis.sessionStorage.removeItem}catch(d){c=!1}c&&(this.index=Cl(a))}h(a,b,c,d){const e=this.index?Dk(this.logger,()=>Al(this.index,yl(a),b,c,d),"W"):"u";
this.logger.G(e)}i(a,b){const [c,d]=this.index?Dk(this.logger,()=>Bl(yl(a),b),"R"):["u"];
this.logger.u(c);return d}};var El={toString:function(a){let b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);a>0;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function Fl(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=Gl(a);let c=2654435769,d=2654435769,e=314159265;const f=a.length;let g=f,h=0;for(;g>=12;g-=12,h+=12)c+=Hl(a,h),d+=Hl(a,h+4),e+=Hl(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return El.toString(e)}
function Gl(a){const b=[];for(let c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function Hl(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;function Il(a,b){const c=setTimeout(()=>{a.j.resolve()},b);
a.addOnDisposeCallback(()=>void clearTimeout(c))}
var Jl=class extends y{constructor(a){super();this.logger=a;this.j=new Tk}yc(a,b){const c=this.eb(a);b?.(c);return Dk(this.logger,()=>Vc(c,2),this.i)}Yc(a,b,c){return Dk(this.logger,()=>b?this.yc(a,c):this.eb(a,c),this.h)}},Kl=class extends Jl{constructor(a,b,c,d){super(a);
this.o=b;this.A=c;this.h="m";this.i="x";this.u=0;Il(this,d)}eb(a,b){this.logger.h(this.h);++this.u>=this.A&&this.j.resolve();const c=a();a=Dk(this.logger,()=>this.o(c),"C");
if(a===void 0)throw new x(17,"YNJ:Undefined");if(!(a instanceof Uint8Array))throw new x(18,"ODM:Invalid");b?.(a);return a}},Ll=class extends Jl{constructor(a,b,c){super(a);this.o=b;this.h="f";this.i="z";Il(this,c)}eb(){return this.o}},Ml=class extends Jl{constructor(a,b,c){super(a);this.o=b;this.h="w";this.i="z";Il(this,c)}eb(){return Dk(this.logger,()=>Xc(this.o),"d")}yc(){return this.o}};
function Nl(a,b){var c=`${b(a.error.message)}:${b(a.error.stack)}`.substring(0,2048);b=c.length+1;c=Ol(c);const d=new Uint8Array(4+c.length);d.set([42,b&127|128,b>>7,a.error.code]);d.set(c,4);return d}
var Pl=class extends Jl{constructor(a,b){super(a);this.error=b;this.h="e";this.i="y"}eb(){if(this.o)return this.o;this.o=Nl(this,a=>"_"+Fl(a));
return Nl(this,a=>a)}},Ql=class extends Jl{constructor(a,b){super(a);
this.clientState=b;this.h="S";this.i="q"}eb(){var a=Math.floor(Date.now()/1E3),b=[Math.random()*255,Math.random()*255],c=b.concat([0,this.clientState],[a>>24&255,a>>16&255,a>>8&255,a&255]);a=new Uint8Array(2+c.length);a[0]=34;a[1]=c.length;a.set(c,2);c=a.subarray(2);b=b.length;for(let d=b;d<c.length;++d)c[d]^=c[d%b];this.logger.P(this.clientState);return a}};function Ol(a){return globalThis.TextEncoder?(new TextEncoder).encode(a):vc(a)}
;var Rl={Ne:3E4,Cf:2E4};function Vb(a,b){a.logger.ta(b.code);a.onError(b);return b}
async function Sl(a){let b=void 0;a.j++;const c=new Tk;a.vm instanceof sl&&a.vm.o.push(c.promise);if(a.ld){const f=new Tk;setTimeout(()=>void f.resolve());
await f.promise}const d=a.logger.share();try{a.state=5;const f=[],g=await il(a.vm.snapshot({Ka:{},Ud:f}),a.Nb.Cf,()=>Promise.reject(new x(15,"MDA:Timeout")));
if(a.I)throw new x(a.h?20:32,"MDA:Disposed");const h=f[0];a.state=6;const k=await il(Tl(a.Oa,g),a.Nb.Ne,()=>Promise.reject(new x(10,"BWB:Timeout")));
if(a.I)throw new x(a.h?20:32,"BWB:Disposed");a.state=7;b=Dk(d,()=>{const l=Ul(a,k,c,h);l.j.promise.then(()=>void a.o());
return l},"i")}catch(f){b?.dispose();
if(!a.i){const g=Vl(a,f);c.resolve();var e;if(e=a.vm instanceof sl&&a.j<2)a:if(f instanceof x)e=f.code!==32&&f.code!==20&&f.code!==10;else{if(f instanceof lk)switch(f.code){case 2:case 13:case 14:case 4:break;default:e=!1;break a}e=!0}if(e){const h=setTimeout(()=>void a.o(),(1+Math.random()*.25)*(a.h?6E4:1E3));
a.addOnDisposeCallback(()=>void clearTimeout(h));
return}a.i=g}d.ta(a.h?13:14);a.Jb.reject(a.i);return}finally{d.dispose()}a.state=8;a.j=0;a.h?.dispose();a.h=b;a.Jb.resolve()}
function Vl(a,b){if(!(b instanceof x))if(b instanceof lk){const c=Error(b.toString());c.stack=b.stack;b=new x(11,"EBH:Error",c)}else b=new x(12,"BSO:Unknown",b);return Vb(a,b)}
function Ul(a,b,c,d){const e=(le(bf(b,2))??0)*1E3;if(e<=0)throw new x(31,"TTM:Invalid");if(vf(b,4))return new Ml(a.logger,vf(b,4),e);if(!(le(bf(b,3))??0))return new Ll(a.logger,id(jf(b)),e);if(!d)throw new x(4,"PMD:Undefined");d=d(id(jf(b)));if(typeof d!=="function")throw new x(16,"APF:Failed");a.u=Math.floor((Date.now()+e)/1E3);a=new Kl(a.logger,d,le(bf(b,3))??0,e);a.addOnDisposeCallback(()=>void c.resolve());
return a}
function Wl(a,b,c){try{if(a.I)throw new x(21,"BNT:disposed");if(!a.h&&a.i)throw a.i;return Xl(a,b,c)??Yl(a,b,c)??Zl(a,b,c)}catch(d){if(!b.kf)throw $l(a,d);return am(a,c,d)}}
function $l(a,b){b=b instanceof x?b:new x(5,"TVD:error",b);return Vb(a,b)}
function Xl(a,b,c){return a.h?.Yc(()=>bm(a,b),c,d=>{if(a.h instanceof Kl&&b.hc?.Df)try{a.cache?.h(bm(a,b),d,b.hc.od,a.u-120)}catch(e){Vb(a,new x(24,"ELX:write",e))}})}
function Yl(a,b,c){if(b.hc?.je)try{const d=a.cache?.i(bm(a,b),b.hc.od);return d?c?Dk(a.logger,()=>Vc(d,2),"a"):d:void 0}catch(d){Vb(a,new x(23,"RXO:read",d))}}
function Zl(a,b,c){const d={stack:[],error:void 0,jb:!1};try{if(!b.jf)throw new x(29,"SDF:notready");return Aa(d,new Ql(a.logger,a.state)).Yc(()=>bm(a,b),c)}catch(e){d.error=e,d.jb=!0}finally{Ba(d)}}
function am(a,b,c){const d={stack:[],error:void 0,jb:!1};try{const e=$l(a,c);return Aa(d,new Pl(a.logger,e)).Yc(()=>[],b)}catch(e){d.error=e,d.jb=!0}finally{Ba(d)}}
function bm(a,b){return b.Pc?b.Pc:b.Ka?Dk(a.logger,()=>b.Pc=Ol(b.Ka),"c"):[]}
class cm extends y{constructor(a){super();this.Jb=new Tk;this.j=0;this.i=void 0;this.state=2;this.vm=a.vm;this.Oa=a.Oa;this.Nb={...Rl,...(a.Nb||{})};this.logger=a.vm.cc();this.onError=a.onError??(()=>{});
this.ld=a.ld||!1;if(dm(a)){const d=this.vm;this.o=()=>d.G().catch(e=>{this.i=e=Vb(this,new x(this.h?20:32,"TRG:Disposed",e));this.h?.dispose();this.h=void 0;this.Jb.reject(e)});
pl(d,()=>void Sl(this));
d.P===2&&Sl(this)}else this.o=a.si,Sl(this);const b=this.logger.share();b.h("o");const c=new Ck(b,"o");this.Jb.promise.then(()=>{c.done();b.i();b.dispose()},()=>void b.dispose());
this.addOnDisposeCallback(()=>{this.h?(this.h.dispose(),this.h=void 0):this.i?this.logger.i():(this.i=Vb(this,new x(32,"TNP:Disposed")),this.logger.i(),this.Jb.reject(this.i))});
Ob(this,this.logger)}eb(a){return Wl(this,{...a},!1)}yc(a){return Wl(this,{...a},!0)}}const dm=function(a){return Fd(b=>{if(!Ld(b))return!1;for(const [c,d]of Object.entries(a)){const e=c,f=d;if(!(e in b)){if(f.ki===!0)continue;return!1}if(!f(b[e]))return!1}return!0})}({vm:function(a){return Fd(b=>b instanceof a)}(sl)},"");var gm=class{constructor(){if(!em){em=new ik(new fm);var a=I("client_streamz_web_flush_count",-1);a!==-1&&(em.j=a)}this.i=a=em;ic(a,"/client_streamz/youtube/aba/gac",dc("type"),dc("sequence"))}h(a,b){jc(this.i,"/client_streamz/youtube/aba/gac",[a,b])}};var hm=window;function im(a){var b=jm;if(b)for(const c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function km(){const a=[];im(b=>{a.push(b)});
return a}
;var jm={Nf:"allow-forms",Of:"allow-modals",Pf:"allow-orientation-lock",Qf:"allow-pointer-lock",Rf:"allow-popups",Sf:"allow-popups-to-escape-sandbox",Tf:"allow-presentation",Uf:"allow-same-origin",Vf:"allow-scripts",Wf:"allow-top-navigation",Xf:"allow-top-navigation-by-user-activation"};const lm=Lj(()=>km());
function mm(){const a=document.createElement("iframe"),b={};hb(lm(),c=>{a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function nm(a){typeof a=="number"&&(a=Math.round(a)+"px");return a}
;let om=(new Date).getTime();var pm=ch(class extends H{constructor(a){super(a)}});function qm(){var a=rm;sm.instance||(sm.instance=new sm(a));return sm.instance}
function tm(a,b){return a.u?a.u:a.u=new Promise(async c=>{const d=window.AbortController?new window.AbortController:void 0,e=d?.signal;let f=!1;try{d&&(a.j=a.Ha.va(()=>{d.abort()},b||2E4)),await fetch("/generate_204",{method:"HEAD",
signal:e}),f=!0}catch{f=!1}finally{a.u=void 0,a.j&&(a.Ha.wa(a.j),a.j=0),f!==a.h&&(a.h=f,a.h?wj(a,"networkstatus-online"):wj(a,"networkstatus-offline")),c(f)}})}
function um(a){a.A=a.Ha.va(async()=>{a.h?window.navigator?.onLine||await tm(a):await tm(a);um(a)},3E4)}
var sm=class extends vj{constructor(a){super();this.A=this.j=0;this.Ha=a??{va:(b,c)=>setTimeout(b,c),
wa:b=>{clearTimeout(b)}};
this.h=window.navigator?.onLine??!0;this.o=async()=>{await tm(this)};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.A||um(this)}dispose(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Ha.wa(this.A);delete sm.instance}ya(){return this.h}};var wm=class extends H{constructor(a){super(a)}};var xm=[0,$g,-1];var ym=[0,Rg,-1];var zm=class extends H{constructor(a){super(a)}};var Am=function(a){return b=>Dg(b,a)}([0,
Yg,-1,Og,Tg,xm,-1,Ng,Qg,Yg,ym,Tg,Yg,-1,[0,xm,-1],Qg,Pg,ym,Ng,[0,1,Qg,-4,Mg,[0,Ng,-1,Qg],Tg,Ng,Ug,[0,Yg,Qg],Qg,-1,Yg,-2,Ng,-1,Yg,Ng,Yg,Qg,[0,3,Qg,-1,4,Wg],Mg,Xg,[0,Yg,-1,Tg],Sg],Tg,Zg,Ug,[0,ym,Ug,[0,Tg,Yg],Ng,Yg,-1],1,Ug,[0,Pg,-1,Xg],Yg,ym]);function Bm(a){a.h===-1&&(a.h=a.data.reduce((b,c,d)=>b+(c?2**d:0),0));
return a.h}
var Cm=class{constructor(){this.data=[];this.h=-1}set(a,b=!0){0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)}get(a){return!!this.data[a]}};function Dm(){this.blockSize=-1}
;function Em(a,b,c){c||(c=0);const d=a.H;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(b=16;b<80;b++)c=d[b-3]^d[b-8]^d[b-14]^d[b-16],d[b]=(c<<1|c>>>31)&4294967295;b=a.h[0];c=a.h[1];e=a.h[2];let f=a.h[3],g=a.h[4];let h;for(let l=0;l<80;l++){if(l<40)if(l<20){var k=f^c&(e^f);h=1518500249}else k=c^e^f,h=1859775393;else l<60?(k=c&e|f&(c|e),h=2400959708):
(k=c^e^f,h=3395469782);k=(b<<5|b>>>27)+k+g+h+d[l]&4294967295;g=f;f=e;e=(c<<30|c>>>2)&4294967295;c=b;b=k}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+e&4294967295;a.h[3]=a.h[3]+f&4294967295;a.h[4]=a.h[4]+g&4294967295}
class Fm extends Dm{constructor(){super();this.blockSize=64;this.h=[];this.u=[];this.H=[];this.j=[];this.j[0]=128;for(let a=1;a<this.blockSize;++a)this.j[a]=0;this.o=this.i=0;this.reset()}reset(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.o=this.i=0}update(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.u,f=this.i;d<b;){if(f==0)for(;d<=c;)Em(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=
a.charCodeAt(d),++f,++d,f==this.blockSize){Em(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Em(this,e);f=0;break}}this.i=f;this.o+=b}}digest(){const a=[];var b=this.o*8;this.i<56?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;c>=56;c--)this.u[c]=b&255,b/=256;Em(this,this.u);b=0;for(c=0;c<5;c++)for(let d=24;d>=0;d-=8)a[b]=this.h[c]>>d&255,++b;return a}};function Gm(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Hm(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Im(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Gm(a).match(/\S+/g)||[],b=gb(a,b)>=0);return b}
function Jm(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Im(a,"inverted-hdpi")&&Hm(a,Array.prototype.filter.call(a.classList?a.classList:Gm(a).match(/\S+/g)||[],function(b){return b!="inverted-hdpi"}).join(" "))}
;function Km(){}
Km.prototype.next=function(){return Lm};
const Lm={done:!0,value:void 0};Km.prototype.sb=function(){return this};function Mm(a){if(a instanceof Nm||a instanceof Om||a instanceof Pm)return a;if(typeof a.next=="function")return new Nm(()=>a);
if(typeof a[Symbol.iterator]=="function")return new Nm(()=>a[Symbol.iterator]());
if(typeof a.sb=="function")return new Nm(()=>a.sb());
throw Error("Not an iterator or iterable.");}
class Nm{constructor(a){this.h=a}sb(){return new Om(this.h())}[Symbol.iterator](){return new Pm(this.h())}i(){return new Pm(this.h())}}class Om extends Km{constructor(a){super();this.h=a}next(){return this.h.next()}[Symbol.iterator](){return new Pm(this.h)}i(){return new Pm(this.h)}}class Pm extends Nm{constructor(a){super(()=>a);
this.j=a}next(){return this.j.next()}};function Qm(a){return a=="\r"||a=="\n"||a==" "||a=="\t"}
;function Rm(){this.A=null;this.ob=[];this.H="";this.F=[];this.i=this.h=0;this.j=!1;this.u=0;this.G=/[\\"]/g;this.B=this.o=0}
Rm.prototype.done=function(){return this.o===2};
function J(a,b,c){a.o=3;a.A="The stream is broken @"+a.i+"/"+c+". With input:\n"+b;throw Error(a.A);}
Rm.prototype.parse=function(a){function b(){for(;m<a.length;)if(Qm(a[m]))m++,f.i++;else break;return m<k}
function c(){for(var n;;){n=a[m++];if(!n)break;f.i++;switch(f.B){case 0:n==="{"?f.B=2:n==="["?f.B=4:Qm(n)||J(f,a,m);continue;case 7:case 2:if(Qm(n))continue;if(f.B===7)g.push(8);else if(n==="}"){e("{}");f.B=d();continue}else g.push(3);n==='"'?f.B=6:J(f,a,m);continue;case 8:case 3:if(Qm(n))continue;n===":"?(f.B===3&&(g.push(3),f.h++),f.B=1):n==="}"?(f.h--,e(),f.B=d()):n===","?(f.B===3&&g.push(3),f.B=7):J(f,a,m);continue;case 4:case 1:if(Qm(n))continue;if(f.B===4)if(f.h++,f.B=1,n==="]"){f.h--;if(f.h===
0){f.B=5;return}e("[]");f.B=d();continue}else g.push(5);n==='"'?f.B=6:n==="{"?f.B=2:n==="["?f.B=4:n==="t"?f.B=9:n==="f"?f.B=12:n==="n"?f.B=16:n!=="-"&&("0123456789".indexOf(n)!==-1?f.B=20:J(f,a,m));continue;case 5:if(n===",")g.push(5),f.B=1,f.h===1&&(p=m);else if(n==="]"){f.h--;if(f.h===0)return;e();f.B=d()}else if(Qm(n))continue;else J(f,a,m);continue;case 6:const z=m;a:for(;;){for(;f.u>0;)if(n=a[m++],f.u===4?f.u=0:f.u++,!n)break a;if(n==='"'&&!f.j){f.B=d();break}if(n==="\\"&&!f.j&&(f.j=!0,n=a[m++],
!n))break;if(f.j)if(f.j=!1,n==="u"&&(f.u=1),n=a[m++])continue;else break;h.lastIndex=m;n=h.exec(a);if(!n){m=a.length+1;break}m=n.index+1;n=a[n.index];if(!n)break}f.i+=m-z;continue;case 9:if(!n)continue;n==="r"?f.B=10:J(f,a,m);continue;case 10:if(!n)continue;n==="u"?f.B=11:J(f,a,m);continue;case 11:if(!n)continue;n==="e"?f.B=d():J(f,a,m);continue;case 12:if(!n)continue;n==="a"?f.B=13:J(f,a,m);continue;case 13:if(!n)continue;n==="l"?f.B=14:J(f,a,m);continue;case 14:if(!n)continue;n==="s"?f.B=15:J(f,
a,m);continue;case 15:if(!n)continue;n==="e"?f.B=d():J(f,a,m);continue;case 16:if(!n)continue;n==="u"?f.B=17:J(f,a,m);continue;case 17:if(!n)continue;n==="l"?f.B=18:J(f,a,m);continue;case 18:if(!n)continue;n==="l"?f.B=d():J(f,a,m);continue;case 19:n==="."?f.B=20:J(f,a,m);continue;case 20:if("0123456789.eE+-".indexOf(n)!==-1)continue;else m--,f.i--,f.B=d();continue;default:J(f,a,m)}}}
function d(){const n=g.pop();return n!=null?n:1}
function e(n){f.h>1||(n||(n=p===-1?f.H+a.substring(l,m):a.substring(p,m)),f.ob.push(JSON.parse(n)),p=m)}
const f=this,g=f.F,h=f.G,k=a.length;let l=0,p=-1,m=0;for(;m<k;)switch(f.o){case 3:return J(f,a,m),null;case 2:return b()&&J(f,a,m),null;case 0:if(b()){var u=a[m++];f.i++;if(u==="["){f.o=1;l=m;f.B=4;continue}else J(f,a,m)}return null;case 1:return c(),f.h===0&&f.B==5?(f.o=2,f.H=a.substring(m)):f.H=p===-1?f.H+a.substring(l):a.substring(p),f.ob.length>0?(u=f.ob,f.ob=[],u):null}return null};function L(a){y.call(this);this.u=1;this.j=[];this.o=0;this.h=[];this.i={};this.A=!!a}
va(L,y);r=L.prototype;r.subscribe=function(a,b,c){let d=this.i[a];d||(d=this.i[a]=[]);const e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
r.unsubscribe=function(a,b,c){if(a=this.i[a]){const d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.ec(a)}return!1};
r.ec=function(a){const b=this.h[a];if(b){const c=this.i[b];this.o!=0?(this.j.push(a),this.h[a+1]=()=>{}):(c&&mb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
r.rb=function(a,b){var c=this.i[a];if(c){const e=Array(arguments.length-1);var d=arguments.length;let f;for(f=1;f<d;f++)e[f-1]=arguments[f];if(this.A)for(f=0;f<c.length;f++)d=c[f],Sm(this.h[d+1],this.h[d+2],e);else{this.o++;try{for(f=0,d=c.length;f<d&&!this.I;f++){const g=c[f];this.h[g+1].apply(this.h[g+2],e)}}finally{if(this.o--,this.j.length>0&&this.o==0)for(;c=this.j.pop();)this.ec(c)}}return f!=0}return!1};
function Sm(a,b,c){Ij(function(){a.apply(b,c)})}
r.clear=function(a){if(a){const b=this.i[a];b&&(b.forEach(this.ec,this),delete this.i[a])}else this.h.length=0,this.i={}};
r.ba=function(){L.Ea.ba.call(this);this.clear();this.j.length=0};function Tm(a){this.h=a}
Tm.prototype.set=function(a,b){b===void 0?this.h.remove(a):this.h.set(a,(new mk).serialize(b))};
Tm.prototype.get=function(a){let b;try{b=this.h.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Tm.prototype.remove=function(a){this.h.remove(a)};function Um(a){this.h=a}
va(Um,Tm);function Vm(a){this.data=a}
function Wm(a){return a===void 0||a instanceof Vm?a:new Vm(a)}
Um.prototype.set=function(a,b){Um.Ea.set.call(this,a,Wm(b))};
Um.prototype.i=function(a){a=Um.Ea.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Um.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Xm(a){this.h=a}
va(Xm,Um);Xm.prototype.set=function(a,b,c){if(b=Wm(b)){if(c){if(c<ta()){Xm.prototype.remove.call(this,a);return}b.expiration=c}b.creation=ta()}Xm.Ea.set.call(this,a,b)};
Xm.prototype.i=function(a){const b=Xm.Ea.i.call(this,a);if(b){const c=b.creation,d=b.expiration;if(d&&d<ta()||c&&c>ta())Xm.prototype.remove.call(this,a);else return b}};function Ym(){}
;function Zm(){}
va(Zm,Ym);Zm.prototype[Symbol.iterator]=function(){return Mm(this.sb(!0)).i()};
Zm.prototype.clear=function(){const a=Array.from(this);for(const b of a)this.remove(b)};function $m(a){this.h=a;this.i=null}
va($m,Zm);r=$m.prototype;r.isAvailable=function(){if(this.i===null){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&(c.name==="QuotaExceededError"||c.code===22||c.code===1014||c.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}else b=!1;this.i=b}return this.i};
r.set=function(a,b){an(this);try{this.h.setItem(a,b)}catch(c){if(this.h.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){an(this);a=this.h.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){an(this);this.h.removeItem(a)};
r.sb=function(a){an(this);var b=0,c=this.h,d=new Km;d.next=function(){if(b>=c.length)return Lm;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
r.clear=function(){an(this);this.h.clear()};
r.key=function(a){an(this);return this.h.key(a)};
function an(a){if(a.h==null)throw Error("Storage mechanism: Storage unavailable");a.isAvailable()||uc(Error("Storage mechanism: Storage unavailable"))}
;function bn(){let a=null;try{a=t.localStorage||null}catch(b){}$m.call(this,a)}
va(bn,$m);function cn(a,b){this.i=a;this.h=b+"::"}
va(cn,Zm);cn.prototype.set=function(a,b){this.i.set(this.h+a,b)};
cn.prototype.get=function(a){return this.i.get(this.h+a)};
cn.prototype.remove=function(a){this.i.remove(this.h+a)};
cn.prototype.sb=function(a){const b=this.i[Symbol.iterator](),c=this,d=new Km;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.h.length):c.i.get(e),done:!1}};
return d};function dn(a){if(a.ab&&typeof a.ab=="function")return a.ab();if(typeof Map!=="undefined"&&a instanceof Map||typeof Set!=="undefined"&&a instanceof Set)return Array.from(a.values());if(typeof a==="string")return a.split("");if(la(a)){const b=[],c=a.length;for(let d=0;d<c;d++)b.push(a[d]);return b}return Mh(a)}
function en(a){if(a.Vb&&typeof a.Vb=="function")return a.Vb();if(!a.ab||typeof a.ab!="function"){if(typeof Map!=="undefined"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set!=="undefined"&&a instanceof Set)){if(la(a)||typeof a==="string"){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}b=[];c=0;for(const d in a)b[c++]=d;return b}}}
function fn(a,b,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(b,c);else if(la(a)||typeof a==="string")Array.prototype.forEach.call(a,b,c);else{const d=en(a),e=dn(a),f=e.length;for(let g=0;g<f;g++)b.call(c,e[g],d&&d[g],a)}}
;function gn(a){this.i=this.A=this.j="";this.F=null;this.u=this.h="";this.o=!1;let b;a instanceof gn?(this.o=a.o,hn(this,a.j),this.A=a.A,this.i=a.i,jn(this,a.F),this.h=a.h,kn(this,a.H.clone()),this.u=a.u):a&&(b=String(a).match(xb))?(this.o=!1,hn(this,b[1]||"",!0),this.A=ln(b[2]||""),this.i=ln(b[3]||"",!0),jn(this,b[4]),this.h=ln(b[5]||"",!0),kn(this,b[6]||"",!0),this.u=ln(b[7]||"")):(this.o=!1,this.H=new mn(null,this.o))}
gn.prototype.toString=function(){const a=[];var b=this.j;b&&a.push(nn(b,on,!0),":");var c=this.i;if(c||b=="file")a.push("//"),(b=this.A)&&a.push(nn(b,on,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.F,c!=null&&a.push(":",String(c));if(c=this.h)this.i&&c.charAt(0)!="/"&&a.push("/"),a.push(nn(c,c.charAt(0)=="/"?pn:qn,!0));(c=this.H.toString())&&a.push("?",c);(c=this.u)&&a.push("#",nn(c,rn));return a.join("")};
gn.prototype.resolve=function(a){const b=this.clone();let c=!!a.j;c?hn(b,a.j):c=!!a.A;c?b.A=a.A:c=!!a.i;c?b.i=a.i:c=a.F!=null;var d=a.h;if(c)jn(b,a.F);else if(c=!!a.h){if(d.charAt(0)!="/")if(this.i&&!this.h)d="/"+d;else{var e=b.h.lastIndexOf("/");e!=-1&&(d=b.h.slice(0,e+1)+d)}e=d;if(e==".."||e==".")d="";else if(e.indexOf("./")!=-1||e.indexOf("/.")!=-1){d=e.lastIndexOf("/",0)==0;e=e.split("/");const f=[];for(let g=0;g<e.length;){const h=e[g++];h=="."?d&&g==e.length&&f.push(""):h==".."?((f.length>1||
f.length==1&&f[0]!="")&&f.pop(),d&&g==e.length&&f.push("")):(f.push(h),d=!0)}d=f.join("/")}else d=e}c?b.h=d:c=a.H.toString()!=="";c?kn(b,a.H.clone()):c=!!a.u;c&&(b.u=a.u);return b};
gn.prototype.clone=function(){return new gn(this)};
function hn(a,b,c){a.j=c?ln(b,!0):b;a.j&&(a.j=a.j.replace(/:$/,""))}
function jn(a,b){if(b){b=Number(b);if(isNaN(b)||b<0)throw Error("Bad port number "+b);a.F=b}else a.F=null}
function kn(a,b,c){b instanceof mn?(a.H=b,sn(a.H,a.o)):(c||(b=nn(b,tn)),a.H=new mn(b,a.o))}
function ln(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function nn(a,b,c){return typeof a==="string"?(a=encodeURI(a).replace(b,un),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function un(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var on=/[#\/\?@]/g,qn=/[#\?:]/g,pn=/[#\?]/g,tn=/[#\?@]/g,rn=/#/g;function mn(a,b){this.i=this.h=null;this.j=a||null;this.o=!!b}
function vn(a){a.h||(a.h=new Map,a.i=0,a.j&&Db(a.j,function(b,c){a.add(vb(b),c)}))}
r=mn.prototype;r.add=function(a,b){vn(this);this.j=null;a=wn(this,a);let c=this.h.get(a);c||this.h.set(a,c=[]);c.push(b);this.i=this.i+1;return this};
r.remove=function(a){vn(this);a=wn(this,a);return this.h.has(a)?(this.j=null,this.i=this.i-this.h.get(a).length,this.h.delete(a)):!1};
r.clear=function(){this.h=this.j=null;this.i=0};
function xn(a,b){vn(a);b=wn(a,b);return a.h.has(b)}
r.forEach=function(a,b){vn(this);this.h.forEach(function(c,d){c.forEach(function(e){a.call(b,e,d,this)},this)},this)};
r.Vb=function(){vn(this);const a=Array.from(this.h.values()),b=Array.from(this.h.keys()),c=[];for(let d=0;d<b.length;d++){const e=a[d];for(let f=0;f<e.length;f++)c.push(b[d])}return c};
r.ab=function(a){vn(this);let b=[];if(typeof a==="string")xn(this,a)&&(b=b.concat(this.h.get(wn(this,a))));else{a=Array.from(this.h.values());for(let c=0;c<a.length;c++)b=b.concat(a[c])}return b};
r.set=function(a,b){vn(this);this.j=null;a=wn(this,a);xn(this,a)&&(this.i=this.i-this.h.get(a).length);this.h.set(a,[b]);this.i=this.i+1;return this};
r.get=function(a,b){if(!a)return b;a=this.ab(a);return a.length>0?String(a[0]):b};
r.toString=function(){if(this.j)return this.j;if(!this.h)return"";const a=[],b=Array.from(this.h.keys());for(let d=0;d<b.length;d++){var c=b[d];const e=encodeURIComponent(String(c));c=this.ab(c);for(let f=0;f<c.length;f++){let g=e;c[f]!==""&&(g+="="+encodeURIComponent(String(c[f])));a.push(g)}}return this.j=a.join("&")};
r.clone=function(){const a=new mn;a.j=this.j;this.h&&(a.h=new Map(this.h),a.i=this.i);return a};
function wn(a,b){b=String(b);a.o&&(b=b.toLowerCase());return b}
function sn(a,b){b&&!a.o&&(vn(a),a.j=null,a.h.forEach(function(c,d){const e=d.toLowerCase();d!=e&&(this.remove(d),this.remove(e),c.length>0&&(this.j=null,this.h.set(wn(this,e),nb(c)),this.i=this.i+c.length))},a));
a.o=b}
r.extend=function(a){for(let b=0;b<arguments.length;b++)fn(arguments[b],function(c,d){this.add(d,c)},this)};/*

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
let M={};var yn=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";M.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
M.ed=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var zn={tb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
rd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},An={tb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
rd:function(a){return[].concat.apply([],a)}};
M.yf=function(){yn?(M.qb=Uint8Array,M.Ma=Uint16Array,M.Yd=Int32Array,M.assign(M,zn)):(M.qb=Array,M.Ma=Array,M.Yd=Array,M.assign(M,An))};
M.yf();var Bn=!0;try{new Uint8Array(1)}catch(a){Bn=!1}
function Cn(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new M.qb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;let Dn={};Dn=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};let En={};for(var Fn,Gn=[],Hn=0;Hn<256;Hn++){Fn=Hn;for(var In=0;In<8;In++)Fn=Fn&1?3988292384^Fn>>>1:Fn>>>1;Gn[Hn]=Fn}En=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^Gn[(a^b[d])&255];return a^-1};let Jn={};Jn={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function Kn(a){for(var b=a.length;--b>=0;)a[b]=0}
var Ln=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Mn=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Nn=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],On=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Pn=Array(576);Kn(Pn);var Qn=Array(60);Kn(Qn);var Rn=Array(512);Kn(Rn);var Sn=Array(256);Kn(Sn);var Tn=Array(29);Kn(Tn);var Un=Array(30);Kn(Un);function Vn(a,b,c,d,e){this.Ld=a;this.Le=b;this.Ke=c;this.ze=d;this.ff=e;this.ud=a&&a.length}
var Wn,Xn,Yn;function Zn(a,b){this.qd=a;this.Fb=0;this.fb=b}
function $n(a,b){a.ea[a.pending++]=b&255;a.ea[a.pending++]=b>>>8&255}
function ao(a,b,c){a.ja>16-c?(a.sa|=b<<a.ja&65535,$n(a,a.sa),a.sa=b>>16-a.ja,a.ja+=c-16):(a.sa|=b<<a.ja&65535,a.ja+=c)}
function bo(a,b,c){ao(a,c[b*2],c[b*2+1])}
function co(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function eo(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=co(d[e]++,e))}
function fo(a){var b;for(b=0;b<286;b++)a.xa[b*2]=0;for(b=0;b<30;b++)a.ib[b*2]=0;for(b=0;b<19;b++)a.ma[b*2]=0;a.xa[512]=1;a.Ta=a.Lb=0;a.Ca=a.matches=0}
function go(a){a.ja>8?$n(a,a.sa):a.ja>0&&(a.ea[a.pending++]=a.sa);a.sa=0;a.ja=0}
function ho(a,b,c){go(a);$n(a,c);$n(a,~c);M.tb(a.ea,a.window,b,c,a.pending);a.pending+=c}
function io(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function jo(a,b,c){for(var d=a.fa[c],e=c<<1;e<=a.Ra;){e<a.Ra&&io(b,a.fa[e+1],a.fa[e],a.depth)&&e++;if(io(b,d,a.fa[e],a.depth))break;a.fa[c]=a.fa[e];c=e;e<<=1}a.fa[c]=d}
function ko(a,b,c){var d=0;if(a.Ca!==0){do{var e=a.ea[a.Sb+d*2]<<8|a.ea[a.Sb+d*2+1];var f=a.ea[a.Uc+d];d++;if(e===0)bo(a,f,b);else{var g=Sn[f];bo(a,g+256+1,b);var h=Ln[g];h!==0&&(f-=Tn[g],ao(a,f,h));e--;g=e<256?Rn[e]:Rn[256+(e>>>7)];bo(a,g,c);h=Mn[g];h!==0&&(e-=Un[g],ao(a,e,h))}}while(d<a.Ca)}bo(a,256,b)}
function lo(a,b){var c=b.qd,d=b.fb.Ld,e=b.fb.ud,f=b.fb.ze,g,h=-1;a.Ra=0;a.Bb=573;for(g=0;g<f;g++)c[g*2]!==0?(a.fa[++a.Ra]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.Ra<2;){var k=a.fa[++a.Ra]=h<2?++h:0;c[k*2]=1;a.depth[k]=0;a.Ta--;e&&(a.Lb-=d[k*2+1])}b.Fb=h;for(g=a.Ra>>1;g>=1;g--)jo(a,c,g);k=f;do g=a.fa[1],a.fa[1]=a.fa[a.Ra--],jo(a,c,1),d=a.fa[1],a.fa[--a.Bb]=g,a.fa[--a.Bb]=d,c[k*2]=c[g*2]+c[d*2],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=k,a.fa[1]=k++,jo(a,c,1);while(a.Ra>=
2);a.fa[--a.Bb]=a.fa[1];g=b.qd;k=b.Fb;d=b.fb.Ld;e=b.fb.ud;f=b.fb.Le;var l=b.fb.Ke,p=b.fb.ff,m,u=0;for(m=0;m<=15;m++)a.Na[m]=0;g[a.fa[a.Bb]*2+1]=0;for(b=a.Bb+1;b<573;b++){var n=a.fa[b];m=g[g[n*2+1]*2+1]+1;m>p&&(m=p,u++);g[n*2+1]=m;if(!(n>k)){a.Na[m]++;var z=0;n>=l&&(z=f[n-l]);var D=g[n*2];a.Ta+=D*(m+z);e&&(a.Lb+=D*(d[n*2+1]+z))}}if(u!==0){do{for(m=p-1;a.Na[m]===0;)m--;a.Na[m]--;a.Na[m+1]+=2;a.Na[p]--;u-=2}while(u>0);for(m=p;m!==0;m--)for(n=a.Na[m];n!==0;)d=a.fa[--b],d>k||(g[d*2+1]!==m&&(a.Ta+=(m-g[d*
2+1])*g[d*2],g[d*2+1]=m),n--)}eo(c,h,a.Na)}
function mo(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];++g<h&&l===f||(g<k?a.ma[l*2]+=g:l!==0?(l!==e&&a.ma[l*2]++,a.ma[32]++):g<=10?a.ma[34]++:a.ma[36]++,g=0,e=l,f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function no(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];if(!(++g<h&&l===f)){if(g<k){do bo(a,l,a.ma);while(--g!==0)}else l!==0?(l!==e&&(bo(a,l,a.ma),g--),bo(a,16,a.ma),ao(a,g-3,2)):g<=10?(bo(a,17,a.ma),ao(a,g-3,3)):(bo(a,18,a.ma),ao(a,g-11,7));g=0;e=l;f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function oo(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.xa[c*2]!==0)return 0;if(a.xa[18]!==0||a.xa[20]!==0||a.xa[26]!==0)return 1;for(c=32;c<256;c++)if(a.xa[c*2]!==0)return 1;return 0}
var po=!1;function qo(a,b,c){a.ea[a.Sb+a.Ca*2]=b>>>8&255;a.ea[a.Sb+a.Ca*2+1]=b&255;a.ea[a.Uc+a.Ca]=c&255;a.Ca++;b===0?a.xa[c*2]++:(a.matches++,b--,a.xa[(Sn[c]+256+1)*2]++,a.ib[(b<256?Rn[b]:Rn[256+(b>>>7)])*2]++);return a.Ca===a.Wb-1}
;function ro(a,b){a.msg=Jn[b];return b}
function so(a){for(var b=a.length;--b>=0;)a[b]=0}
function to(a){var b=a.state,c=b.pending;c>a.V&&(c=a.V);c!==0&&(M.tb(a.output,b.ea,b.Yb,c,a.Hb),a.Hb+=c,b.Yb+=c,a.hd+=c,a.V-=c,b.pending-=c,b.pending===0&&(b.Yb=0))}
function uo(a,b){var c=a.za>=0?a.za:-1,d=a.v-a.za,e=0;if(a.level>0){a.S.Nc===2&&(a.S.Nc=oo(a));lo(a,a.vc);lo(a,a.nc);mo(a,a.xa,a.vc.Fb);mo(a,a.ib,a.nc.Fb);lo(a,a.nd);for(e=18;e>=3&&a.ma[On[e]*2+1]===0;e--);a.Ta+=3*(e+1)+5+5+4;var f=a.Ta+3+7>>>3;var g=a.Lb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)ao(a,b?1:0,3),ho(a,c,d);else if(a.strategy===4||g===f)ao(a,2+(b?1:0),3),ko(a,Pn,Qn);else{ao(a,4+(b?1:0),3);c=a.vc.Fb+1;d=a.nc.Fb+1;e+=1;ao(a,c-257,5);ao(a,d-1,5);ao(a,e-4,4);for(f=0;f<e;f++)ao(a,
a.ma[On[f]*2+1],3);no(a,a.xa,c-1);no(a,a.ib,d-1);ko(a,a.xa,a.ib)}fo(a);b&&go(a);a.za=a.v;to(a.S)}
function O(a,b){a.ea[a.pending++]=b}
function vo(a,b){a.ea[a.pending++]=b>>>8&255;a.ea[a.pending++]=b&255}
function wo(a,b){var c=a.xd,d=a.v,e=a.Aa,f=a.zd,g=a.v>a.pa-262?a.v-(a.pa-262):0,h=a.window,k=a.gb,l=a.La,p=a.v+258,m=h[d+e-1],u=h[d+e];a.Aa>=a.td&&(c>>=2);f>a.D&&(f=a.D);do{var n=b;if(h[n+e]===u&&h[n+e-1]===m&&h[n]===h[d]&&h[++n]===h[d+1]){d+=2;for(n++;h[++d]===h[++n]&&h[++d]===h[++n]&&h[++d]===h[++n]&&h[++d]===h[++n]&&h[++d]===h[++n]&&h[++d]===h[++n]&&h[++d]===h[++n]&&h[++d]===h[++n]&&d<p;);n=258-(p-d);d=p-258;if(n>e){a.Eb=b;e=n;if(n>=f)break;m=h[d+e-1];u=h[d+e]}}}while((b=l[b&k])>g&&--c!==0);return e<=
a.D?e:a.D}
function xo(a){var b=a.pa,c;do{var d=a.Wd-a.D-a.v;if(a.v>=b+(b-262)){M.tb(a.window,a.window,b,b,0);a.Eb-=b;a.v-=b;a.za-=b;var e=c=a.uc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.La[--e],a.La[e]=f>=b?f-b:0;while(--c);d+=b}if(a.S.ra===0)break;e=a.S;c=a.window;f=a.v+a.D;var g=e.ra;g>d&&(g=d);g===0?c=0:(e.ra-=g,M.tb(c,e.input,e.mb,g,f),e.state.wrap===1?e.K=Dn(e.K,c,g,f):e.state.wrap===2&&(e.K=En(e.K,c,g,f)),e.mb+=g,e.pb+=g,c=g);a.D+=c;if(a.D+a.oa>=3)for(d=a.v-a.oa,a.U=a.window[d],
a.U=(a.U<<a.Qa^a.window[d+1])&a.Pa;a.oa&&!(a.U=(a.U<<a.Qa^a.window[d+3-1])&a.Pa,a.La[d&a.gb]=a.head[a.U],a.head[a.U]=d,d++,a.oa--,a.D+a.oa<3););}while(a.D<262&&a.S.ra!==0)}
function yo(a,b){for(var c;;){if(a.D<262){xo(a);if(a.D<262&&b===0)return 1;if(a.D===0)break}c=0;a.D>=3&&(a.U=(a.U<<a.Qa^a.window[a.v+3-1])&a.Pa,c=a.La[a.v&a.gb]=a.head[a.U],a.head[a.U]=a.v);c!==0&&a.v-c<=a.pa-262&&(a.W=wo(a,c));if(a.W>=3)if(c=qo(a,a.v-a.Eb,a.W-3),a.D-=a.W,a.W<=a.Wc&&a.D>=3){a.W--;do a.v++,a.U=(a.U<<a.Qa^a.window[a.v+3-1])&a.Pa,a.La[a.v&a.gb]=a.head[a.U],a.head[a.U]=a.v;while(--a.W!==0);a.v++}else a.v+=a.W,a.W=0,a.U=a.window[a.v],a.U=(a.U<<a.Qa^a.window[a.v+1])&a.Pa;else c=qo(a,0,
a.window[a.v]),a.D--,a.v++;if(c&&(uo(a,!1),a.S.V===0))return 1}a.oa=a.v<2?a.v:2;return b===4?(uo(a,!0),a.S.V===0?3:4):a.Ca&&(uo(a,!1),a.S.V===0)?1:2}
function zo(a,b){for(var c,d;;){if(a.D<262){xo(a);if(a.D<262&&b===0)return 1;if(a.D===0)break}c=0;a.D>=3&&(a.U=(a.U<<a.Qa^a.window[a.v+3-1])&a.Pa,c=a.La[a.v&a.gb]=a.head[a.U],a.head[a.U]=a.v);a.Aa=a.W;a.Cd=a.Eb;a.W=2;c!==0&&a.Aa<a.Wc&&a.v-c<=a.pa-262&&(a.W=wo(a,c),a.W<=5&&(a.strategy===1||a.W===3&&a.v-a.Eb>4096)&&(a.W=2));if(a.Aa>=3&&a.W<=a.Aa){d=a.v+a.D-3;c=qo(a,a.v-1-a.Cd,a.Aa-3);a.D-=a.Aa-1;a.Aa-=2;do++a.v<=d&&(a.U=(a.U<<a.Qa^a.window[a.v+3-1])&a.Pa,a.La[a.v&a.gb]=a.head[a.U],a.head[a.U]=a.v);
while(--a.Aa!==0);a.kb=0;a.W=2;a.v++;if(c&&(uo(a,!1),a.S.V===0))return 1}else if(a.kb){if((c=qo(a,0,a.window[a.v-1]))&&uo(a,!1),a.v++,a.D--,a.S.V===0)return 1}else a.kb=1,a.v++,a.D--}a.kb&&(qo(a,0,a.window[a.v-1]),a.kb=0);a.oa=a.v<2?a.v:2;return b===4?(uo(a,!0),a.S.V===0?3:4):a.Ca&&(uo(a,!1),a.S.V===0)?1:2}
function Ao(a,b){for(var c,d,e,f=a.window;;){if(a.D<=258){xo(a);if(a.D<=258&&b===0)return 1;if(a.D===0)break}a.W=0;if(a.D>=3&&a.v>0&&(d=a.v-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.v+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.W=258-(e-d);a.W>a.D&&(a.W=a.D)}a.W>=3?(c=qo(a,1,a.W-3),a.D-=a.W,a.v+=a.W,a.W=0):(c=qo(a,0,a.window[a.v]),a.D--,a.v++);if(c&&(uo(a,!1),a.S.V===0))return 1}a.oa=0;return b===4?(uo(a,!0),a.S.V===0?3:4):
a.Ca&&(uo(a,!1),a.S.V===0)?1:2}
function Bo(a,b){for(var c;;){if(a.D===0&&(xo(a),a.D===0)){if(b===0)return 1;break}a.W=0;c=qo(a,0,a.window[a.v]);a.D--;a.v++;if(c&&(uo(a,!1),a.S.V===0))return 1}a.oa=0;return b===4?(uo(a,!0),a.S.V===0?3:4):a.Ca&&(uo(a,!1),a.S.V===0)?1:2}
function Co(a,b,c,d,e){this.Re=a;this.ef=b;this.lf=c;this.df=d;this.Pe=e}
var Do;Do=[new Co(0,0,0,0,function(a,b){var c=65535;for(c>a.Da-5&&(c=a.Da-5);;){if(a.D<=1){xo(a);if(a.D===0&&b===0)return 1;if(a.D===0)break}a.v+=a.D;a.D=0;var d=a.za+c;if(a.v===0||a.v>=d)if(a.D=a.v-d,a.v=d,uo(a,!1),a.S.V===0)return 1;if(a.v-a.za>=a.pa-262&&(uo(a,!1),a.S.V===0))return 1}a.oa=0;if(b===4)return uo(a,!0),a.S.V===0?3:4;a.v>a.za&&uo(a,!1);return 1}),
new Co(4,4,8,4,yo),new Co(4,5,16,8,yo),new Co(4,6,32,32,yo),new Co(4,4,16,16,zo),new Co(8,16,32,32,zo),new Co(8,16,128,128,zo),new Co(8,32,128,256,zo),new Co(32,128,258,1024,zo),new Co(32,258,258,4096,zo)];
function Eo(){this.S=null;this.status=0;this.ea=null;this.wrap=this.pending=this.Yb=this.Da=0;this.J=null;this.Ga=0;this.method=8;this.Db=-1;this.gb=this.kd=this.pa=0;this.window=null;this.Wd=0;this.head=this.La=null;this.zd=this.td=this.strategy=this.level=this.Wc=this.xd=this.Aa=this.D=this.Eb=this.v=this.kb=this.Cd=this.W=this.za=this.Qa=this.Pa=this.Sc=this.uc=this.U=0;this.xa=new M.Ma(1146);this.ib=new M.Ma(122);this.ma=new M.Ma(78);so(this.xa);so(this.ib);so(this.ma);this.nd=this.nc=this.vc=
null;this.Na=new M.Ma(16);this.fa=new M.Ma(573);so(this.fa);this.Bb=this.Ra=0;this.depth=new M.Ma(573);so(this.depth);this.ja=this.sa=this.oa=this.matches=this.Lb=this.Ta=this.Sb=this.Ca=this.Wb=this.Uc=0}
function Fo(a,b){if(!a||!a.state||b>5||b<0)return a?ro(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.ra!==0||c.status===666&&b!==4)return ro(a,a.V===0?-5:-2);c.S=a;var d=c.Db;c.Db=b;if(c.status===42)if(c.wrap===2)a.K=0,O(c,31),O(c,139),O(c,8),c.J?(O(c,(c.J.text?1:0)+(c.J.bb?2:0)+(c.J.extra?4:0)+(c.J.name?8:0)+(c.J.comment?16:0)),O(c,c.J.time&255),O(c,c.J.time>>8&255),O(c,c.J.time>>16&255),O(c,c.J.time>>24&255),O(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),O(c,c.J.os&255),c.J.extra&&c.J.extra.length&&
(O(c,c.J.extra.length&255),O(c,c.J.extra.length>>8&255)),c.J.bb&&(a.K=En(a.K,c.ea,c.pending,0)),c.Ga=0,c.status=69):(O(c,0),O(c,0),O(c,0),O(c,0),O(c,0),O(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),O(c,3),c.status=113);else{var e=8+(c.kd-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.v!==0&&(e|=32);c.status=113;vo(c,e+(31-e%31));c.v!==0&&(vo(c,a.K>>>16),vo(c,a.K&65535));a.K=1}if(c.status===69)if(c.J.extra){for(e=c.pending;c.Ga<(c.J.extra.length&65535)&&(c.pending!==c.Da||
(c.J.bb&&c.pending>e&&(a.K=En(a.K,c.ea,c.pending-e,e)),to(a),e=c.pending,c.pending!==c.Da));)O(c,c.J.extra[c.Ga]&255),c.Ga++;c.J.bb&&c.pending>e&&(a.K=En(a.K,c.ea,c.pending-e,e));c.Ga===c.J.extra.length&&(c.Ga=0,c.status=73)}else c.status=73;if(c.status===73)if(c.J.name){e=c.pending;do{if(c.pending===c.Da&&(c.J.bb&&c.pending>e&&(a.K=En(a.K,c.ea,c.pending-e,e)),to(a),e=c.pending,c.pending===c.Da)){var f=1;break}f=c.Ga<c.J.name.length?c.J.name.charCodeAt(c.Ga++)&255:0;O(c,f)}while(f!==0);c.J.bb&&c.pending>
e&&(a.K=En(a.K,c.ea,c.pending-e,e));f===0&&(c.Ga=0,c.status=91)}else c.status=91;if(c.status===91)if(c.J.comment){e=c.pending;do{if(c.pending===c.Da&&(c.J.bb&&c.pending>e&&(a.K=En(a.K,c.ea,c.pending-e,e)),to(a),e=c.pending,c.pending===c.Da)){f=1;break}f=c.Ga<c.J.comment.length?c.J.comment.charCodeAt(c.Ga++)&255:0;O(c,f)}while(f!==0);c.J.bb&&c.pending>e&&(a.K=En(a.K,c.ea,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.J.bb?(c.pending+2>c.Da&&to(a),c.pending+2<=c.Da&&(O(c,
a.K&255),O(c,a.K>>8&255),a.K=0,c.status=113)):c.status=113);if(c.pending!==0){if(to(a),a.V===0)return c.Db=-1,0}else if(a.ra===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return ro(a,-5);if(c.status===666&&a.ra!==0)return ro(a,-5);if(a.ra!==0||c.D!==0||b!==0&&c.status!==666){d=c.strategy===2?Bo(c,b):c.strategy===3?Ao(c,b):Do[c.level].Pe(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.V===0&&(c.Db=-1),0;if(d===2&&(b===1?(ao(c,2,3),bo(c,256,Pn),c.ja===16?($n(c,c.sa),c.sa=0,c.ja=0):c.ja>=
8&&(c.ea[c.pending++]=c.sa&255,c.sa>>=8,c.ja-=8)):b!==5&&(ao(c,0,3),ho(c,0,0),b===3&&(so(c.head),c.D===0&&(c.v=0,c.za=0,c.oa=0))),to(a),a.V===0))return c.Db=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(O(c,a.K&255),O(c,a.K>>8&255),O(c,a.K>>16&255),O(c,a.K>>24&255),O(c,a.pb&255),O(c,a.pb>>8&255),O(c,a.pb>>16&255),O(c,a.pb>>24&255)):(vo(c,a.K>>>16),vo(c,a.K&65535));to(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;let Go={};Go=function(){this.input=null;this.pb=this.ra=this.mb=0;this.output=null;this.hd=this.V=this.Hb=0;this.msg="";this.state=null;this.Nc=2;this.K=0};var Ho=Object.prototype.toString;
function Io(a){if(!(this instanceof Io))return new Io(a);a=this.options=M.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&a.windowBits>0?a.windowBits=-a.windowBits:a.gzip&&a.windowBits>0&&a.windowBits<16&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.S=new Go;this.S.V=0;var b=this.S;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>
9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=ro(b,-2);else{e===8&&(e=9);var k=new Eo;b.state=k;k.S=b;k.wrap=h;k.J=null;k.kd=e;k.pa=1<<k.kd;k.gb=k.pa-1;k.Sc=f+7;k.uc=1<<k.Sc;k.Pa=k.uc-1;k.Qa=~~((k.Sc+3-1)/3);k.window=new M.qb(k.pa*2);k.head=new M.Ma(k.uc);k.La=new M.Ma(k.pa);k.Wb=1<<f+6;k.Da=k.Wb*4;k.ea=new M.qb(k.Da);k.Sb=1*k.Wb;k.Uc=3*k.Wb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.pb=b.hd=0;b.Nc=2;c=b.state;c.pending=0;c.Yb=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.K=c.wrap===2?
0:1;c.Db=0;if(!po){d=Array(16);for(f=g=0;f<28;f++)for(Tn[f]=g,e=0;e<1<<Ln[f];e++)Sn[g++]=f;Sn[g-1]=f;for(f=g=0;f<16;f++)for(Un[f]=g,e=0;e<1<<Mn[f];e++)Rn[g++]=f;for(g>>=7;f<30;f++)for(Un[f]=g<<7,e=0;e<1<<Mn[f]-7;e++)Rn[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)Pn[e*2+1]=8,e++,d[8]++;for(;e<=255;)Pn[e*2+1]=9,e++,d[9]++;for(;e<=279;)Pn[e*2+1]=7,e++,d[7]++;for(;e<=287;)Pn[e*2+1]=8,e++,d[8]++;eo(Pn,287,d);for(e=0;e<30;e++)Qn[e*2+1]=5,Qn[e*2]=co(e,5);Wn=new Vn(Pn,Ln,257,286,15);Xn=new Vn(Qn,
Mn,0,30,15);Yn=new Vn([],Nn,0,19,7);po=!0}c.vc=new Zn(c.xa,Wn);c.nc=new Zn(c.ib,Xn);c.nd=new Zn(c.ma,Yn);c.sa=0;c.ja=0;fo(c);c=0}else c=ro(b,-2);c===0&&(b=b.state,b.Wd=2*b.pa,so(b.head),b.Wc=Do[b.level].ef,b.td=Do[b.level].Re,b.zd=Do[b.level].lf,b.xd=Do[b.level].df,b.v=0,b.za=0,b.D=0,b.oa=0,b.W=b.Aa=2,b.kb=0,b.U=0);b=c}}else b=-2;if(b!==0)throw Error(Jn[b]);a.header&&(b=this.S)&&b.state&&b.state.wrap===2&&(b.state.J=a.header);if(a.dictionary){var l;typeof a.dictionary==="string"?l=Cn(a.dictionary):
Ho.call(a.dictionary)==="[object ArrayBuffer]"?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.S;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,b===2||b===1&&l.status!==42||l.D)b=-2;else{b===1&&(a.K=Dn(a.K,f,g,0));l.wrap=0;g>=l.pa&&(b===0&&(so(l.head),l.v=0,l.za=0,l.oa=0),c=new M.qb(l.pa),M.tb(c,f,g-l.pa,l.pa,0),f=c,g=l.pa);c=a.ra;d=a.mb;e=a.input;a.ra=g;a.mb=0;a.input=f;for(xo(l);l.D>=3;){f=l.v;g=l.D-2;do l.U=(l.U<<l.Qa^l.window[f+3-1])&l.Pa,l.La[f&l.gb]=l.head[l.U],l.head[l.U]=f,f++;while(--g);
l.v=f;l.D=2;xo(l)}l.v+=l.D;l.za=l.v;l.oa=l.D;l.D=0;l.W=l.Aa=2;l.kb=0;a.mb=d;a.input=e;a.ra=c;l.wrap=b;b=0}else b=-2;if(b!==0)throw Error(Jn[b]);this.Th=!0}}
Io.prototype.push=function(a,b){var c=this.S,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=Cn(a):Ho.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.mb=0;c.ra=c.input.length;do{c.V===0&&(c.output=new M.qb(d),c.Hb=0,c.V=d);a=Fo(c,e);if(a!==1&&a!==0)return Jo(this,a),this.ended=!0,!1;if(c.V===0||c.ra===0&&(e===4||e===2))if(this.options.to==="string"){var f=M.ed(c.output,c.Hb);b=f;f=f.length;if(f<65537&&(b.subarray&&Bn||!b.subarray))b=
String.fromCharCode.apply(null,M.ed(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=M.ed(c.output,c.Hb),this.chunks.push(b)}while((c.ra>0||c.V===0)&&a!==1);if(e===4)return(c=this.S)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=ro(c,-2):(c.state=null,a=d===113?ro(c,-3):0)):a=-2,Jo(this,a),this.ended=!0,a===0;e===2&&(Jo(this,0),c.V=0);return!0};
function Jo(a,b){b===0&&(a.result=a.options.to==="string"?a.chunks.join(""):M.rd(a.chunks));a.chunks=[];a.err=b;a.msg=a.S.msg}
function Ko(a){var b=b||{};b.gzip=!0;b=new Io(b);b.push(a,!0);if(b.err)throw b.msg||Jn[b.err];return b.result}
;function Lo(a){return a?(a=a.privateDoNotAccessOrElseSafeScriptWrappedValue)?Ya(a):null:null}
function Mo(a){return a?(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?Ia(a):null:null}
;function No(a){return Ia(a===null?"null":a===void 0?"undefined":a)}
;var Oo=class{constructor(a){this.name=a}};var Po=new Oo("rawColdConfigGroup");var Qo=new Oo("rawHotConfigGroup");var Ro=class extends H{constructor(a){super(a)}};var So=class extends H{constructor(a){super(a)}setTrackingParams(a){return G(this,1,Bd(a,!1))}};var To=new Oo("continuationCommand");var Uo=new Oo("webCommandMetadata");var Vo=new Oo("signalServiceEndpoint");var Wo={dg:"EMBEDDED_PLAYER_MODE_UNKNOWN",Zf:"EMBEDDED_PLAYER_MODE_DEFAULT",cg:"EMBEDDED_PLAYER_MODE_PFP",ag:"EMBEDDED_PLAYER_MODE_PFL"};var Xo=new Oo("feedbackEndpoint");var Jd={th:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNKNOWN",Ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_FOR_TESTING",Yg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RESUME_TO_HOME_TTL",jh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_START_TO_SHORTS_ANALYSIS_SLICE",og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DEVICE_LAYER_SLICE",sh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNIFIED_LAYER_SLICE",wh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_VISITOR_LAYER_SLICE",hh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHOW_SHEET_COMMAND_HANDLER_BLOCK",
zh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_MIGRATED_COMPONENT",yh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_CHANNEL_NAME_TOOLTIP",dh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATION_LOCK_SUPPORTED",nh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_THEATER_MODE_ENABLED",Fh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_PIN_SUGGESTION",Eh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_LONG_PRESS_EDU_TOAST",Dh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_AMBIENT",oh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TIME_WATCHED_PANEL",
fh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SEARCH_FROM_SEARCH_BAR_OVERLAY",Gh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_VOICE_SEARCH_EDU_TOAST",mh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SUGGESTED_LANGUAGE_SELECTED",Hh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_TRIGGER_SHORTS_PIP",Hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IN_ZP_VOICE_CRASHY_SET",Ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_SUPPRESSED",Tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_ALLOWED",Wg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_PULL_TO_REFRESH_ATTEMPT",
Ah:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_BLOCK_KABUKI",Xg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_TALL_SCREEN",Vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_NORMAL_SCREEN",hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_ENABLED",gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_DISABLED",ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_AUTOPLAY_ENABLED",jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_CAST_MATCH_OCCURRED",tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_ELIGIBLE",wg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ENDSCREEN_TRIGGERED",
Sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_TRIGGERED",Rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_LACT_THRESHOLD_EXCEEDED",Bg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MATCHED_ON_REMOTE_CONNECTION",Dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHABLE_ON_REMOTE_CONNECTION",Cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MISATTRIBUTED_ON_REMOTE_CONNECTION",Gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_TV_IS_SIGNED_IN_ON_REMOTE_CONNECTION",qh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_COLD_ON_REMOTE_CONNECTION",
rh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_NON_COLD_ON_REMOTE_CONNECTION",Ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ON_REMOTE_CONNECTION",ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_VALID",lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_INVALID",mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_UNDEFINED",kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_DEFINED",Ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LACT_THRESHOLD_EXCEEDED",
eh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROUND_TRIP_HANDLING_ON_REMOTE_CONNECTION",Fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_BEFORE_APP_RELOAD",Eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_AFTER_APP_RELOAD",ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_INELIGIBLE",ph:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TVHTML5_MID_ROLL_THRESHOLD_REACHED",yg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_PENDING",
xg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_ACTIVATED",vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_M2_ELIGIBLE",ah:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_LANDSCAPE",bh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_PORTRAIT",sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMBEDS_FACEOFF_UI_EVENT",zg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_RECEIVED",rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ELIGIBLE_TO_SUPPRESS_TRANSPORT_CONTROLS_BUTTONS",
uh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_USER_HAS_THEATER_MODE_COOKIE_ENABLED",qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DOCUMENT_PICTURE_IN_PICTURE_SUPPORTED",gh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHORTS_NON_DEFAULT_ASPECT_RATIO",Qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_PLAYER_IN_SQUEEZEBACK",Jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LIVE_CREATOR_AR_GIFT_RECEIVED",Zg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RETURNED_TO_VIDEO_AFTER_FAILED_ATTEMPT_TO_BACKGROUND",Bh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_ENTER_AUTO_ZOOM",
Og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_PASSIVE_IN_CONTROL",Pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_PASSIVE_IN_TREATMENT",pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DISABLE_PLAYER_OPEN_ON_FULLSCREEN",Mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_MDX_RECONNECT_WITH_RETRY",ih:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SINGLE_COLUMN_GRID_TRIGGERED",Lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_MDX_CONNECTION_TIMEOUT",Kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LIVE_GHOST_LOADING_ELIGIBLE",kh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_STREAMED_GET_WATCH_SUPPORTED",
xh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WEBVIEW_CONTAINER",Ch:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_ENTER_PIP"};var Yo=new Oo("shareEndpoint"),Zo=new Oo("shareEntityEndpoint"),$o=new Oo("shareEntityServiceEndpoint"),ap=new Oo("webPlayerShareEntityServiceEndpoint");var bp=new Oo("playlistEditEndpoint");var cp=new Oo("modifyChannelNotificationPreferenceEndpoint");var dp=new Oo("undoFeedbackEndpoint");var ep=new Oo("unsubscribeEndpoint");var fp=new Oo("subscribeEndpoint");function gp(){var a=hp;w("yt.ads.biscotti.getId_")||v("yt.ads.biscotti.getId_",a)}
function ip(a){v("yt.ads.biscotti.lastId_",a)}
;function jp(a,b){b.length>1?a[b[0]]=b[1]:b.length===1&&Object.assign(a,b[0])}
;const kp=t.window,lp=kp?.yt?.config_||kp?.ytcfg?.data_||{};v("yt.config_",lp);function mp(...a){jp(lp,arguments)}
function P(a,b){return a in lp?lp[a]:b}
function np(a){const b=lp.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;const op=[];function pp(a){op.forEach(b=>b(a))}
function R(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){qp(b)}}:a}
function qp(a){var b=w("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),mp("ERRORS",b));pp(a)}
function rp(a,b,c,d,e){var f=w("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=P("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),mp("ERRORS",f))}
;const sp=/^[\w.]*$/,tp={q:!0,search_query:!0};function up(a,b){b=a.split(b);const c={};for(let f=0,g=b.length;f<g;f++){const h=b[f].split("=");if(h.length===1&&h[0]||h.length===2)try{const k=vp(h[0]||""),l=vp(h[1]||"");if(k in c){const p=c[k];Array.isArray(p)?ob(p,l):c[k]=[p,l]}else c[k]=l}catch(k){var d=k,e=h[0];const l=String(up);d.args=[{key:e,value:h[1],query:a,method:wp===l?"unchanged":l}];tp.hasOwnProperty(e)||rp(d)}}return c}
const wp=String(up);function xp(a){const b=[];Lh(a,(c,d)=>{const e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];hb(c,f=>{f==""?b.push(e):b.push(`${e}=${encodeURIComponent(String(f))}`)})});
return b.join("&")}
function yp(a){a.charAt(0)==="?"&&(a=a.substring(1));return up(a,"&")}
function zp(a){return a.indexOf("?")!==-1?(a=(a||"").split("#")[0],a=a.split("?",2),yp(a.length>1?a[1]:a[0])):{}}
function Ap(a,b){return Bp(a,b||{},!0)}
function Bp(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=yp(e[1]||"");for(const f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return Gb(a,e)+d}
function Cp(a){if(!b)var b=window.location.href;const c=a.match(xb)[1]||null,d=zb(a);c&&d?(a=a.match(xb),b=b.match(xb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?zb(b)===d&&(Number(b.match(xb)[4]||null)||null)===(Number(a.match(xb)[4]||null)||null):!0;return a}
function vp(a){return a&&a.match(sp)?a:vb(a)}
;function Dp(a=w("yt.ads.biscotti.lastId_")||""){var b=Ep,c=Object,d=c.assign;a:{try{var e=b.h.top.location.href}catch(ba){e=2;break a}e=e?e===b.i.location.href?0:1:2}e={dt:om,flash:"0",frm:e};try{e.u_tz=-(new Date).getTimezoneOffset();try{var f=hm.history.length}catch(ba){f=0}e.u_his=f;e.u_h=hm.screen?.height;e.u_w=hm.screen?.width;e.u_ah=hm.screen?.availHeight;e.u_aw=hm.screen?.availWidth;e.u_cd=hm.screen?.colorDepth}catch(ba){}f=b.h;let g,h,k,l,p,m,u,n,z;try{var D=f.screenX;g=f.screenY}catch(ba){}try{h=
f.outerWidth,k=f.outerHeight}catch(ba){}try{l=f.innerWidth,p=f.innerHeight}catch(ba){}try{m=f.screenLeft,u=f.screenTop}catch(ba){}try{l=f.innerWidth,p=f.innerHeight}catch(ba){}try{n=f.screen.availWidth,z=f.screen.availTop}catch(ba){}D=[m,u,D,g,n,z,h,k,l,p];try{var B=(b.h.top||window).document,N=B.compatMode=="CSS1Compat"?B.documentElement:B.body;var K=(new Kh(N.clientWidth,N.clientHeight)).round()}catch(ba){K=new Kh(-12245933,-12245933)}N=K;K=new Cm;"SVGElement"in t&&"createElementNS"in t.document&&
K.set(0);B=mm();B["allow-top-navigation-by-user-activation"]&&K.set(1);B["allow-popups-to-escape-sandbox"]&&K.set(2);t.crypto&&t.crypto.subtle&&K.set(3);"TextDecoder"in t&&"TextEncoder"in t&&K.set(4);K=Bm(K);B=N.height;N=N.width;D=D.join();b=b.i;c=d.call(c,e,{bc:K,bih:B,biw:N,brdim:D,vis:b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5,"":0}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]??0,wgl:!!hm.WebGLRenderingContext});c.ca_type="image";a&&(c.bid=a);
return c}
const Ep=new class{constructor(a,b){this.h=a;this.i=b}}(window,window.document);v("yt.ads_.signals_.getAdSignalsString",function(a){return xp(Dp(a))});ta();navigator.userAgent.indexOf(" (CrKey ");const Fp="XMLHttpRequest"in t?()=>new XMLHttpRequest:null;
function Gp(){if(!Fp)return null;const a=Fp();return"open"in a?a:null}
function Hp(a){switch(Ip(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
function Ip(a){return a&&"status"in a?a.status:-1}
;function Jp(a,b){typeof a==="function"&&(a=R(a));return window.setTimeout(a,b)}
;var Kp="absolute_experiments client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods theme".split(" ");[...Kp];function S(a){a=Lp(a);return typeof a==="string"&&a==="false"?!1:!!a}
function I(a,b){a=Lp(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function Mp(){const a=Lp("html5_web_po_experiment_ids");return Array.isArray(a)?jb(a,b=>Number(b||0)):[Number(a||0)]}
function Np(a){a=Lp(a);return a!==void 0?String(a):""}
function Lp(a){return P("EXPERIMENT_FLAGS",{})[a]}
function Op(){const a=[],b=P("EXPERIMENTS_FORCED_FLAGS",{});for(var c of Object.keys(b))a.push({key:c,value:String(b[c])});c=P("EXPERIMENT_FLAGS",{});for(const d of Object.keys(c))d.startsWith("force_")&&b[d]===void 0&&a.push({key:d,value:String(c[d])});return a}
;const Pp={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Qp=["app","debugcss","debugjs","expflag","force_ad_params","force_ad_encrypted","force_viral_ad_response_params","forced_experiments","innertube_snapshots","innertube_goldens","internalcountrycode","internalipoverride","absolute_experiments","conditional_experiments","sbb","sr_bns_address",...Kp];let Rp=!1;
function Sp(a,b,c="GET",d="",e,f,g,h=!1,k){const l=Gp();if(!l)return null;const p=()=>{(l&&"readyState"in l?l.readyState:0)===4&&b&&R(b)(l)};
"onloadend"in l?l.addEventListener("loadend",p,!1):l.onreadystatechange=p;S("debug_forward_web_query_parameters")&&(a=Tp(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=Up(a,e))for(const m in e)l.setRequestHeader(m,e[m]),"content-type"===m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k&&"onprogress"in l&&(l.onprogress=()=>{k(l.responseText)});
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(m){rp(m)}}l.send(d);return l}
function Up(a,b={}){const c=Cp(a),d=P("INNERTUBE_CLIENT_NAME"),e=S("web_ajax_ignore_global_headers_if_set");for(const h in Pp){let k=P(Pp[h]);const l=h==="X-Goog-AuthUser"||h==="X-Goog-PageId";h!=="X-Goog-Visitor-Id"||k||(k=P("VISITOR_DATA"));var f;if(!(f=!k)){if(!(f=c||(zb(a)?!1:!0))){f=a;var g;if(g=S("add_auth_headers_to_remarketing_google_dot_com_ping")&&h==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))g=zb(f),g=g!==null?g.split(".").reverse():null,g=g===null?
!1:g[1]==="google"?!0:g[2]==="google"?g[0]==="au"&&g[1]==="com"?!0:g[0]==="uk"&&g[1]==="co"?!0:!1:!1;g&&(f=Ab(f)||"",f=f.split("/"),f="/"+(f.length>1?f[1]:""),g=f==="/pagead");f=g?!0:!1}f=!f}f||e&&b[h]!==void 0||d==="TVHTML5_UNPLUGGED"&&l||(b[h]=k)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!zb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!zb(a)){let h;try{h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch{}h&&
(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&zb(a)||(b["X-YouTube-Ad-Signals"]=xp(Dp()));return b}
function Vp(a,b){b.method="POST";b.postParams||(b.postParams={});return Wp(a,b)}
function Wp(a,b){const c=b.format||"JSON";a=Xp(a,b);var d=Yp(a,b);let e=!1,f;const g=Zp(a,h=>{if(!e){e=!0;f&&window.clearTimeout(f);var k=Hp(h),l=null,p=400<=h.status&&h.status<500,m=500<=h.status&&h.status<600;if(k||p||m)l=$p(a,c,h,b.convertToSafeHtml);k&&(k=aq(c,h,l));l=l||{};p=b.context||t;k?b.onSuccess&&b.onSuccess.call(p,h,l):b.onError&&b.onError.call(p,h,l);b.onFinish&&b.onFinish.call(p,h,l)}},b.method,d,b.headers,b.responseType,b.withCredentials,!1,b.onProgress);
d=b.timeout||0;if(b.onTimeout&&d>0){const h=b.onTimeout;f=Jp(()=>{e||(e=!0,g.abort(),window.clearTimeout(f),h.call(b.context||t,g))},d)}return g}
function Xp(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);const c=P("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Ap(a,b);return a}
function Yp(a,b){const c=P("XSRF_FIELD_NAME"),d=P("XSRF_TOKEN");var e=b.postBody||"",f=b.postParams;const g=P("XSRF_FIELD_NAME");let h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||zb(a)&&!b.withCredentials&&zb(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(S("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=yp(e),Wh(e,f),e=b.postBodyFormat&&
b.postBodyFormat==="JSON"?JSON.stringify(e):Fb(e));f=e||f&&!Ph(f);!Rp&&f&&b.method!=="POST"&&(Rp=!0,qp(Error("AJAX request with postData should use POST")));return e}
function $p(a,b,c,d){let e=null;switch(b){case "JSON":let f;try{f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,rp(d),g;}a=c.getResponseHeader("Content-Type")||"";if(f&&a.indexOf("json")>=0){f.substring(0,5)===")]}'\n"&&(f=f.substring(5));try{e=JSON.parse(f)}catch(g){}}break;case "XML":if(a=(a=c.responseXML)?bq(a):null)e={},hb(a.getElementsByTagName("*"),g=>{e[g.tagName]=cq(g)})}d&&dq(e);
return e}
function dq(a){if(ma(a))for(const c in a){var b;(b=c==="html_content")||(b=c.length-5,b=b>=0&&c.indexOf("_html",b)==b);if(b){b=a[c];const d=Ga();b=d?d.createHTML(b):b;a[c]=new Va(b)}else dq(a[c])}}
function aq(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function bq(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function cq(a){let b="";hb(a.childNodes,c=>{b+=c.nodeValue});
return b}
function Tp(a){var b=window.location.search,c=zb(a);S("debug_handle_relative_url_for_query_forward_killswitch")||!c&&Cp(a)&&(c=document.location.hostname);var d=Ab(a);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;const e=yp(b),f={};hb(Qp,g=>{e[g]&&(f[g]=e[g])});
return Bp(a,f||{},!1)}
var Zp=Sp;const eq=[{Xc:a=>`Cannot read property '${a.key}'`,
Cc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Xc:a=>`Cannot call '${a.key}'`,
Cc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Xc:a=>`${a.key} is not defined`,
Cc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var hq={cb:[],Za:[{callback:fq,weight:500},{callback:gq,weight:500}]};function fq(a){if(a.name==="JavaException")return!0;a=a.stack;return a.includes("chrome://")||a.includes("-extension://")||a.includes("webkit-masked-url://")}
function gq(a){if(!a.stack)return!0;const b=!a.stack.includes("\n");return b&&a.stack.includes("ErrorType: ")||b&&a.stack.includes("Anonymous function (Unknown script")||a.stack.toLowerCase()==="not available"||a.fileName==="user-script"||a.fileName.startsWith("user-script:")?!0:!1}
;function iq(){if(!jq){var a=jq=new kq;a.cb.length=0;a.Za.length=0;lq(a,hq)}return jq}
function lq(a,b){b.cb&&a.cb.unshift.apply(a.cb,b.cb);b.Za&&a.Za.unshift.apply(a.Za,b.Za)}
var kq=class{constructor(){this.Za=[];this.cb=[]}},jq;const mq=new L;function nq(a){const b=a.length;let c=0;const d=()=>a.charCodeAt(c++);
do{var e=oq(d);if(e===Infinity)break;const f=e>>3;switch(e&7){case 0:e=oq(d);if(f===2)return e;break;case 1:if(f===2)return;c+=8;break;case 2:e=oq(d);if(f===2)return a.substr(c,e);c+=e;break;case 5:if(f===2)return;c+=4;break;default:return}}while(c<b)}
function oq(a){let b=a(),c=b&127;if(b<128)return c;b=a();c|=(b&127)<<7;if(b<128)return c;b=a();c|=(b&127)<<14;if(b<128)return c;b=a();return b<128?c|(b&127)<<21:Infinity}
;function pq(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=qq(d,a[d],b,c),e>500));d++);d=e}else if(typeof a==="object")for(e in a){if(a[e]){a:{var f=e;var g=a[e],h=b,k=c;if(typeof g!=="string"||f!=="clickTrackingParams"&&f!=="trackingParams"){f=0;break a}f=(g=nq(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?qq(`${f}.ve`,g,h,k):0}d+=f;d+=qq(e,a[e],b,c);if(d>500)break}}else c[b]=rq(a),d+=c[b].length;else c[b]=rq(a),d+=c[b].length;return d}
function qq(a,b,c,d){c+=`.${a}`;a=rq(b);d[c]=a;return c.length+a.length}
function rq(a){try{return(typeof a==="string"?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return`unable to serialize ${typeof a} (${b.message})`}}
;function sq(){if(!t.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return t.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":t.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":t.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":t.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
var tq=class{constructor(a){this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",b=>{b.preventDefault();this.i=b});
a.addEventListener("appinstalled",()=>{this.h=!0},{once:!0})}};function uq(a){const b={};var c=[];"USER_SESSION_ID"in lp&&c.push({key:"u",value:P("USER_SESSION_ID")});if(c=Dh(c))b.Authorization=c,c=a=a?.sessionIndex,c===void 0&&(c=Number(P("SESSION_INDEX",0)),c=isNaN(c)?0:c),S("voice_search_auth_header_removal")||(b["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in lp||(b["X-Origin"]=window.location.origin),a===void 0&&"DELEGATED_SESSION_ID"in lp&&(b["X-Goog-PageId"]=P("DELEGATED_SESSION_ID"));return b}
var vq=class{constructor(){this.Md=!0}};var wq={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function xq(a,b,c,d="youtube.com",e=!1){Ah.set(""+a,b,{wc:c,path:"/",domain:d,secure:e})}
function yq(a){return Ah.get(""+a,void 0)}
function zq(a,b="/",c="youtube.com"){Ah.remove(""+a,b,c)}
function Aq(){if(!Ah.isEnabled())return!1;if(Ah.h.cookie)return!0;Ah.set("TESTCOOKIESENABLED","1",{wc:60});if(Ah.get("TESTCOOKIESENABLED")!=="1")return!1;Ah.remove("TESTCOOKIESENABLED");return!0}
;const Bq=w("ytglobal.prefsUserPrefsPrefs_")||{};v("ytglobal.prefsUserPrefsPrefs_",Bq);function Cq(){Dq||(Dq=new Eq);return Dq}
function Fq(a){return!!((Gq(`f${Math.floor(a/31)+1}`)||0)&1<<a%31)}
function Hq(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error(`ExpectedRegexMatch: ${a}`);}
function Iq(a){if(!/^\w+$/.test(a))throw Error(`ExpectedRegexMismatch: ${a}`);}
function Gq(a){a=Bq[a]!==void 0?Bq[a].toString():null;return a!=null&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
var Eq=class{constructor(){this.h=P("ALT_PREF_COOKIE_NAME","PREF");this.i=P("ALT_PREF_COOKIE_DOMAIN","youtube.com");const a=yq(this.h);a&&this.parse(a)}get(a,b){Iq(a);Hq(a);a=Bq[a]!==void 0?Bq[a].toString():null;return a!=null?a:b?b:""}set(a,b){Iq(a);Hq(a);if(b==null)throw Error("ExpectedNotNull");Bq[a]=b.toString()}remove(a){Iq(a);Hq(a);delete Bq[a]}clear(){for(const a in Bq)delete Bq[a]}parse(a){a=decodeURIComponent(a).split("&");for(let c=0;c<a.length;c++){var b=a[c].split("=");const d=b[0];(b=
b[1])&&(Bq[d]=b.toString())}}},Dq;const Jq={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Kq={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Lq(){const a=t.navigator;return a?a.connection:void 0}
function Mq(){var a=Lq();if(a){var b=Jq[a.type||"unknown"]||"CONN_UNKNOWN";a=Jq[a.effectiveType||"unknown"]||"CONN_UNKNOWN";b==="CONN_CELLULAR_UNKNOWN"&&a!=="CONN_UNKNOWN"&&(b=a);if(b!=="CONN_UNKNOWN")return b;if(a!=="CONN_UNKNOWN")return a}}
function Nq(){var a=Lq();if(a?.effectiveType)return Kq.hasOwnProperty(a.effectiveType)?Kq[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;var T=class extends Error{constructor(a,...b){super(a);this.args=[...b];Object.setPrototypeOf(this,new.target.prototype)}};function Oq(){try{return Pq(),!0}catch(a){return!1}}
function Pq(a="unknown"){if(P("DATASYNC_ID")!==void 0)return P("DATASYNC_ID");throw new T("Datasync ID not set",a);}
;function Qq(a,b){return rm.Xa(a,0,b)}
var Rq=class{va(a,b){return this.Xa(a,1,b)}G(a){const b=w("yt.scheduler.instance.addImmediateJob");b?b(a):a()}};var Sq=I("web_emulated_idle_callback_delay",300);const Tq=1E3/60-3,Uq=[8,5,4,3,2,1,0];function Vq(a,b){try{b()}catch(c){a.ta(c)}}
function Wq(a){if(a.i[8].length){if(a.Y)return 4;if(Xq(a))return 3}for(let b=5;b>=a.o;b--)if(a.i[b].length>0)return b>0?Xq(a)?3:2:1;return 0}
function Yq(a){a.P.length=0;for(let b=5;b>=0;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
function Xq(a){return!a.isHidden()&&a.qa}
function Zq(a){for(const b of Uq)if(a.i[b].length)return!0;return!1}
function $q(a,b,c){a.Y&&a.A===4&&a.h||a.stop();a.u=!0;b=ta()+(b||a.F);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(g){e.ta(g)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&Vq(a,f);d=a.la?0:1;d=a.o>d?a.o:d;if(!(ta()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--){const g=c.i[e];for(;g.length;){const h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}}c=null}c&&Vq(a,c)}while(c&&ta()<b)}a.u=!1;ar(a);a.F=Tq;Zq(a)&&a.start()}
function br(a){a.stop();a.u=!0;var b=ta();const c=a.i[8];for(;c.length;){const d=c.shift(),e=a.j[d];delete a.j[d];e&&Vq(a,e)}ar(a);a.u=!1;Zq(a)&&a.start();b=ta()-b;a.F-=b}
function ar(a){for(let b=0,c=a.P.length;b<c;b++){const d=a.P[b];a.i[d.priority].push(d.id)}a.P.length=0}
var cr=class extends y{constructor(a={}){super();this.i=[];this.j={};this.ga=this.h=0;this.Z=this.u=!1;this.P=[];this.Y=this.la=!1;for(const b of Uq)this.i[b]=[];this.o=0;this.be=a.timeout||1;this.F=Tq;this.A=0;this.Fa=this.de.bind(this);this.Zd=this.we.bind(this);this.Wa=this.Ja.bind(this);this.Ob=this.ce.bind(this);this.Mc=this.ke.bind(this);this.Ba=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!S("disable_scheduler_requestIdleCallback");(this.qa=a.useRaf!==!1&&!!window.requestAnimationFrame)&&
document.addEventListener("visibilitychange",this.Fa)}G(a){const b=ta();Vq(this,a);a=ta()-b;this.u||(this.F-=a)}Xa(a,b,c){++this.ga;if(b===10)return this.G(a),this.ga;const d=this.ga;this.j[d]=a;this.u&&!c?this.P.push({id:d,priority:b}):(this.i[b].push(d),this.Z||this.u||(this.h!==0&&Wq(this)!==this.A&&this.stop(),this.start()));return d}wa(a){delete this.j[a]}isHidden(){return!!document.hidden||!1}ta(a){const b=w("yt.logging.errors.log");b&&b(a)}ce(a){let b=void 0;a&&(b=a.timeRemaining());this.la=
!0;$q(this,b);this.la=!1}we(){$q(this)}Ja(){br(this)}ke(a){this.Y=!0;const b=Wq(this);b===4&&b!==this.A&&(this.stop(),this.start());$q(this,void 0,a);this.Y=!1}de(){this.isHidden()||br(this);this.h&&(this.stop(),this.start())}start(){this.Z=!1;if(this.h===0)switch(this.A=Wq(this),this.A){case 1:var a=this.Ob;this.h=this.Ba?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Sq);break;case 2:this.h=window.setTimeout(this.Zd,this.be);break;case 3:this.h=window.requestAnimationFrame(this.Mc);
break;case 4:this.h=window.setTimeout(this.Wa,0)}}pause(){this.stop();this.Z=!0}stop(){if(this.h){switch(this.A){case 1:var a=this.h;this.Ba?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}}ba(){Yq(this);this.stop();this.qa&&document.removeEventListener("visibilitychange",this.Fa);super.ba()}};const dr=w("yt.scheduler.instance.timerIdMap_")||{},er=I("kevlar_tuner_scheduler_soft_state_timer_ms",800);let fr=0,gr=0;function hr(){let a=w("ytglobal.schedulerInstanceInstance_");if(!a||a.I)a=new cr(P("scheduler")||{}),v("ytglobal.schedulerInstanceInstance_",a);return a}
function ir(){jr();const a=w("ytglobal.schedulerInstanceInstance_");a&&(Mb(a),v("ytglobal.schedulerInstanceInstance_",null))}
function jr(){Yq(hr());for(const a in dr)dr.hasOwnProperty(a)&&delete dr[Number(a)]}
function kr(a,b,c){if(!c)return c=c===void 0,-hr().Xa(a,b,c);const d=window.setTimeout(()=>{const e=hr().Xa(a,b);dr[d]=e},c);
return d}
function lr(a){hr().G(a)}
function mr(a){const b=hr();if(a<0)b.wa(-a);else{var c=dr[a];c?(b.wa(c),delete dr[a]):window.clearTimeout(a)}}
function nr(){or()}
function or(){window.clearTimeout(fr);hr().start()}
function pr(){hr().pause();window.clearTimeout(fr);fr=window.setTimeout(nr,er)}
function qr(){window.clearTimeout(gr);gr=window.setTimeout(()=>{rr(0)},er)}
function rr(a){qr();var b=hr();b.o=a;b.start()}
function sr(a){qr();var b=hr();b.o>a&&(b.o=a,b.start())}
function tr(){window.clearTimeout(gr);var a=hr();a.o=0;a.start()}
;function ur(){vr.instance||(vr.instance=new vr);return vr.instance}
var vr=class extends Rq{Xa(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);const d=w("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):Jp(a,c||0)}wa(a){if(a===void 0||!Number.isNaN(Number(a))){var b=w("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}}start(){const a=w("yt.scheduler.instance.start");a&&a()}pause(){const a=w("yt.scheduler.instance.pause");a&&a()}},rm=ur();
w("yt.scheduler.initialized")||(v("yt.scheduler.instance.dispose",ir),v("yt.scheduler.instance.addJob",kr),v("yt.scheduler.instance.addImmediateJob",lr),v("yt.scheduler.instance.cancelJob",mr),v("yt.scheduler.instance.cancelAllJobs",jr),v("yt.scheduler.instance.start",or),v("yt.scheduler.instance.pause",pr),v("yt.scheduler.instance.setPriorityThreshold",rr),v("yt.scheduler.instance.enablePriorityThreshold",sr),v("yt.scheduler.instance.clearPriorityThreshold",tr),v("yt.scheduler.initialized",!0));const wr=class{constructor(a){const b=new bn;this.h=(a=b.isAvailable()?a?new cn(b,a):b:null)?new Xm(a):null;this.j=document.domain||window.location.hostname}i(){return!!this.h}set(a,b,c,d){c=c||31104E3;this.remove(a);if(this.i())try{this.h.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape((new mk).serialize(b))}catch(f){return}else e=escape(b);xq(a,e,c,this.j)}get(a,b){var c=void 0,d=!this.i();if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=yq(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),
c=void 0}return c}remove(a){this.i()&&this.h.remove(a);zq(a,"/",this.j)}};const xr=(()=>{let a;return()=>{a||(a=new wr("ytidb"));return a}})();
function yr(){return xr()?.get("LAST_RESULT_ENTRY_KEY",!0)}
;const zr=[];let Ar,Br=!1;function Cr(){({handleError:a=Dr,logEvent:b=Er}={});var a;for(Ar=new Fr(a,b);zr.length>0;){var b=zr.shift();switch(b.type){case "ERROR":Ar.ta(b.payload);break;case "EVENT":Ar.logEvent(b.eventType,b.payload)}}}
function Gr(a){Br||(Ar?Ar.ta(a):(zr.push({type:"ERROR",payload:a}),zr.length>10&&zr.shift()))}
function Hr(a,b){Br||(Ar?Ar.logEvent(a,b):(zr.push({type:"EVENT",eventType:a,payload:b}),zr.length>10&&zr.shift()))}
;function Ir(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function Jr(a){return a.substr(0,a.indexOf(":"))||a}
;var Kr=Qc||Rc;function Lr(a){const b=zc();return b?b.toLowerCase().indexOf(a)>=0:!1}
;const Mr={AUTH_INVALID:"No user identifier specified.",EXPLICIT_ABORT:"Transaction was explicitly aborted.",IDB_NOT_SUPPORTED:"IndexedDB is not supported.",MISSING_INDEX:"Index not created.",MISSING_OBJECT_STORES:"Object stores not created.",DB_DELETED_BY_MISSING_OBJECT_STORES:"Database is deleted because expected object stores were not created.",DB_REOPENED_BY_MISSING_OBJECT_STORES:"Database is reopened because expected object stores were not created.",UNKNOWN_ABORT:"Transaction was aborted for unknown reasons.",
QUOTA_EXCEEDED:"The current transaction exceeded its quota limitations.",QUOTA_MAYBE_EXCEEDED:"The current transaction may have failed because of exceeding quota limitations.",EXECUTE_TRANSACTION_ON_CLOSED_DB:"Can't start a transaction on a closed database",INCOMPATIBLE_DB_VERSION:"The binary is incompatible with the database version"},Nr={AUTH_INVALID:"ERROR",EXECUTE_TRANSACTION_ON_CLOSED_DB:"WARNING",EXPLICIT_ABORT:"IGNORED",IDB_NOT_SUPPORTED:"ERROR",MISSING_INDEX:"WARNING",MISSING_OBJECT_STORES:"ERROR",
DB_DELETED_BY_MISSING_OBJECT_STORES:"WARNING",DB_REOPENED_BY_MISSING_OBJECT_STORES:"WARNING",QUOTA_EXCEEDED:"WARNING",QUOTA_MAYBE_EXCEEDED:"WARNING",UNKNOWN_ABORT:"WARNING",INCOMPATIBLE_DB_VERSION:"WARNING"},Or={AUTH_INVALID:!1,EXECUTE_TRANSACTION_ON_CLOSED_DB:!1,EXPLICIT_ABORT:!1,IDB_NOT_SUPPORTED:!1,MISSING_INDEX:!1,MISSING_OBJECT_STORES:!1,DB_DELETED_BY_MISSING_OBJECT_STORES:!1,DB_REOPENED_BY_MISSING_OBJECT_STORES:!1,QUOTA_EXCEEDED:!1,QUOTA_MAYBE_EXCEEDED:!0,UNKNOWN_ABORT:!0,INCOMPATIBLE_DB_VERSION:!1};
var U=class extends T{constructor(a,b={},c=Mr[a],d=Nr[a],e=Or[a]){super(c,{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a,...b});this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,U.prototype)}},Pr=class extends U{constructor(a,b){super("MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Mr.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Pr.prototype)}},Qr=class extends Error{constructor(a,b){super();this.index=a;this.objectStore=
b;Object.setPrototypeOf(this,Qr.prototype)}};const Rr=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Sr(a,b,c,d){b=Jr(b);let e;e=a instanceof Error?a:Error(`Unexpected error: ${a}`);if(e instanceof U)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new U("QUOTA_EXCEEDED",a);if(Sc&&e.name==="UnknownError")return new U("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Qr)return new U("MISSING_INDEX",{...a,objectStore:e.objectStore,index:e.index});if(e.name==="InvalidStateError"&&Rr.some(f=>e.message.includes(f)))return new U("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new U("UNKNOWN_ABORT",a,e.message);e.args=[{...a,name:"IdbError",Bd:e.name}];e.level="WARNING";return e}
function Tr(a,b,c){const d=yr();return new U("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d?.hasSucceededOnce}})}
;function Ur(a){if(!a)throw Error();throw a;}
function Vr(a){return a}
var Wr=class{constructor(a){this.h=a}};function Xr(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");const f=c(a.state.value);f instanceof Yr?Zr(a,b,f,d,e):d(f)}catch(f){e(f)}}
function $r(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");const f=c(a.state.reason);f instanceof Yr?Zr(a,b,f,d,e):d(f)}catch(f){e(f)}}
function Zr(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(f=>{f instanceof Yr?Zr(a,b,f,d,e):d(f)},f=>{e(f)})}
var Yr=class{constructor(a){this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;const b=d=>{if(this.state.status==="PENDING"){this.state={status:"FULFILLED",value:d};for(const e of this.h)e()}},c=d=>{if(this.state.status==="PENDING"){this.state={status:"REJECTED",
reason:d};for(const e of this.i)e()}};
try{a(b,c)}catch(d){c(d)}}static all(a){return new Yr(new Wr((b,c)=>{const d=[];let e=a.length;e===0&&b(d);for(let f=0;f<a.length;++f)Yr.resolve(a[f]).then(g=>{d[f]=g;e--;e===0&&b(d)}).catch(g=>{c(g)})}))}static resolve(a){return new Yr(new Wr((b,c)=>{a instanceof Yr?a.then(b,c):b(a)}))}static reject(a){return new Yr(new Wr((b,c)=>{c(a)}))}then(a,b){const c=a??Vr,d=b??Ur;
return new Yr(new Wr((e,f)=>{this.state.status==="PENDING"?(this.h.push(()=>{Xr(this,this,c,e,f)}),this.i.push(()=>{$r(this,this,d,e,f)})):this.state.status==="FULFILLED"?Xr(this,this,c,e,f):this.state.status==="REJECTED"&&$r(this,this,d,e,f)}))}catch(a){return this.then(void 0,a)}};function as(a,b,c){const d=()=>{try{a.removeEventListener("success",e),a.removeEventListener("error",f)}catch{}},e=()=>{b(a.result);
d()},f=()=>{c(a.error);
d()};
a.addEventListener("success",e);a.addEventListener("error",f)}
function bs(a){return new Promise((b,c)=>{as(a,b,c)})}
function cs(a){return new Yr(new Wr((b,c)=>{as(a,b,c)}))}
;function ds(a,b){return new Yr(new Wr((c,d)=>{const e=()=>{const f=a?b(a):null;f?f.then(g=>{a=g;e()},d):c()};
e()}))}
;const es=window;var V=es.ytcsi&&es.ytcsi.now?es.ytcsi.now:es.performance&&es.performance.timing&&es.performance.now&&es.performance.timing.navigationStart?()=>es.performance.timing.navigationStart+es.performance.now():()=>(new Date).getTime();function gs(){return S("idb_immediate_commit")}
async function hs(a,b,c,d){const e={mode:"readonly",na:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?e.mode=c:Object.assign(e,c);a.transactionCount++;c=e.na?3:1;let f=0,g;for(;!g;){f++;const p=Math.round(V());try{var h=a.h.transaction(b,e.mode),k=d,l=!!e.commit;const m=new is(h),u=await js(m,k,l),n=Math.round(V());ks(a,p,n,f,void 0,b.join(),e);return u}catch(m){k=Math.round(V());const u=Sr(m,a.h.name,b.join(),a.h.version);if(u instanceof U&&!u.h||f>=c)ks(a,p,k,f,u,b.join(),e),g=u}}return Promise.reject(g)}
function ls(a,b,c){a=a.h.createObjectStore(b,c);return new ms(a)}
function ns(a,b,c){return hs(a,[b],{mode:"readwrite",na:!0,commit:gs()},d=>{d=d.objectStore(b);return cs(d.h.put(c,void 0))})}
function ks(a,b,c,d,e,f,g){b=c-b;e?(e instanceof U&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&Hr("QUOTA_EXCEEDED",{dbName:Jr(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof U&&e.type==="UNKNOWN_ABORT"&&(c-=a.j,c<0&&c>=2147483648&&(c=0),Hr("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),ps(a,!1,d,f,b,g.tag),Gr(e)):ps(a,!0,d,f,b,g.tag)}
function ps(a,b,c,d,e,f="IDB_TRANSACTION_TAG_UNKNOWN"){Hr("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f})}
var qs=class{constructor(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(V());this.i=!1}add(a,b,c){return hs(this,[a],{mode:"readwrite",na:!0,commit:gs()},d=>d.objectStore(a).add(b,c))}clear(a){return hs(this,[a],{mode:"readwrite",
na:!0},b=>b.objectStore(a).clear())}close(){this.h.close();
this.options?.closed&&this.options.closed()}count(a,b){return hs(this,[a],{mode:"readonly",na:!0,commit:gs()},c=>c.objectStore(a).count(b))}delete(a,b){return hs(this,[a],{mode:"readwrite",
na:!0,commit:gs()&&!(b instanceof IDBKeyRange)},c=>c.objectStore(a).delete(b))}get(a,b){return hs(this,[a],{mode:"readonly",
na:!0,commit:gs()},c=>c.objectStore(a).get(b))}objectStoreNames(){return Array.from(this.h.objectStoreNames)}getName(){return this.h.name}};
function rs(a,b,c){a.h.createIndex(b,c,{unique:!1})}
function ss(a,b,c){a=a.h.openCursor(b.query,b.direction);return ts(a).then(d=>ds(d,c))}
function us(a,b){return ss(a,{query:b},c=>c.delete().then(()=>vs(c))).then(()=>{})}
var ms=class{constructor(a){this.h=a}add(a,b){return cs(this.h.add(a,b))}autoIncrement(){return this.h.autoIncrement}clear(){return cs(this.h.clear()).then(()=>{})}count(a){return cs(this.h.count(a))}delete(a){return a instanceof IDBKeyRange?us(this,a):cs(this.h.delete(a))}get(a){return cs(this.h.get(a))}index(a){try{return new ws(this.h.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new Qr(a,this.h.name);
throw b;}}getName(){return this.h.name}keyPath(){return this.h.keyPath}};function js(a,b,c){const d=new Promise((e,f)=>{try{const g=b(a);c&&a.commit();g.then(h=>{e(h)}).catch(f)}catch(g){f(g),a.abort()}});
return Promise.all([d,a.done]).then(([e])=>e)}
var is=class{constructor(a){this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise((b,c)=>{this.h.addEventListener("complete",()=>{b()});
this.h.addEventListener("error",d=>{d.currentTarget===d.target&&c(this.h.error)});
this.h.addEventListener("abort",()=>{var d=this.h.error;if(d)c(d);else if(!this.aborted){d=U;var e=this.h.objectStoreNames;const f=[];for(let g=0;g<e.length;g++){const h=e.item(g);if(h===null)throw Error("Invariant: item in DOMStringList is null");f.push(h)}d=new d("UNKNOWN_ABORT",{objectStoreNames:f.join(),dbName:this.h.db.name,mode:this.h.mode});c(d)}})})}abort(){this.h.abort();
this.aborted=!0;throw new U("EXPLICIT_ABORT");}commit(){this.aborted||this.h.commit?.()}objectStore(a){a=this.h.objectStore(a);let b=this.i.get(a);b||(b=new ms(a),this.i.set(a,b));return b}};function xs(a,b,c){const {query:d=null,direction:e="next"}=b;a=a.h.openCursor(d,e);return ts(a).then(f=>ds(f,c))}
var ws=class{constructor(a){this.h=a}count(a){return cs(this.h.count(a))}delete(a){return xs(this,{query:a},b=>b.delete().then(()=>vs(b)))}get(a){return cs(this.h.get(a))}keyPath(){return this.h.keyPath}unique(){return this.h.unique}};
function ts(a){return cs(a).then(b=>b?new ys(a,b):null)}
function vs(a){a.cursor.continue(void 0);return ts(a.request)}
var ys=class{constructor(a,b){this.request=a;this.cursor=b}delete(){return cs(this.cursor.delete()).then(()=>{})}getValue(){return this.cursor.value}update(a){return cs(this.cursor.update(a))}};function zs(a,b,c){return new Promise((d,e)=>{let f;f=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);const g=c.le,h=c.blocking,k=c.Ef,l=c.upgrade,p=c.closed;let m;const u=()=>{m||(m=new qs(f.result,{closed:p}));return m};
f.addEventListener("upgradeneeded",n=>{try{if(n.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(f.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");n.dataLoss&&n.dataLoss!=="none"&&Hr("IDB_DATA_CORRUPTED",{reason:n.dataLossMessage||"unknown reason",dbName:Jr(a)});const z=u(),D=new is(f.transaction);l&&l(z,B=>n.oldVersion<B&&n.newVersion>=B,D);
D.done.catch(B=>{e(B)})}catch(z){e(z)}});
f.addEventListener("success",()=>{const n=f.result;h&&n.addEventListener("versionchange",()=>{h(u())});
n.addEventListener("close",()=>{Hr("IDB_UNEXPECTEDLY_CLOSED",{dbName:Jr(a),dbVersion:n.version});k&&k()});
d(u())});
f.addEventListener("error",()=>{e(f.error)});
g&&f.addEventListener("blocked",()=>{g()})})}
function As(a,b,c={}){return zs(a,b,c)}
async function Bs(a,b={}){try{const c=self.indexedDB.deleteDatabase(a),d=b.le;d&&c.addEventListener("blocked",()=>{d()});
await bs(c)}catch(c){throw Sr(c,a,"",-1);}}
;function Cs(a,b){return new U("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Ds(a,b){if(!b)throw Tr("openWithToken",Jr(a.name));return a.open()}
var Es=class{constructor(a,b){this.name=a;this.options=b;this.j=!0;this.u=this.o=0}i(a,b,c={}){return As(a,b,c)}delete(a={}){return Bs(this.name,a)}open(){if(!this.j)throw Cs(this);if(this.h)return this.h;let a;const b=()=>{this.h===a&&(this.h=void 0)},c={blocking:e=>{e.close()},
closed:b,Ef:b,upgrade:this.options.upgrade},d=async()=>{var e=Error().stack??"";try{const h=await this.i(this.name,this.options.version,c);var f=h,g=this.options;const k=[];for(const l of Object.keys(g.Ib)){const {Pb:p,Bi:m=Number.MAX_VALUE}=g.Ib[l];!(f.h.version>=p)||f.h.version>=m||f.h.objectStoreNames.contains(l)||k.push(l)}if(k.length!==0){const l=Object.keys(this.options.Ib),p=h.objectStoreNames();if(this.u<I("ytidb_reopen_db_retries",0))return this.u++,h.close(),Gr(new U("DB_REOPENED_BY_MISSING_OBJECT_STORES",
{dbName:this.name,expectedObjectStores:l,foundObjectStores:p})),d();if(this.o<I("ytidb_remake_db_retries",1))return this.o++,await this.delete(),Gr(new U("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:this.name,expectedObjectStores:l,foundObjectStores:p})),d();throw new Pr(p,l);}return h}catch(h){if(h instanceof DOMException?h.name==="VersionError":"DOMError"in self&&h instanceof DOMError?h.name==="VersionError":h instanceof Object&&"message"in h&&h.message==="An attempt was made to open a database using a lower version than the existing version."){e=
await this.i(this.name,void 0,{...c,upgrade:void 0});f=e.h.version;if(this.options.version!==void 0&&f>this.options.version+1)throw e.close(),this.j=!1,Cs(this,f);return e}b();h instanceof Error&&!S("ytidb_async_stack_killswitch")&&(h.stack=`${h.stack}\n${e.substring(e.indexOf("\n")+1)}`);throw Sr(h,this.name,"",this.options.version??-1);}};
return this.h=a=d()}};const Fs=new Es("YtIdbMeta",{Ib:{databases:{Pb:1}},upgrade(a,b){b(1)&&ls(a,"databases",{keyPath:"actualName"})}});async function Gs(a,b){return hs(await Ds(Fs,b),["databases"],{na:!0,mode:"readwrite"},c=>{const d=c.objectStore("databases");return d.get(a.actualName).then(e=>{if(e?a.actualName!==e.actualName||a.publicName!==e.publicName||a.userIdentifier!==e.userIdentifier:1)return cs(d.h.put(a,void 0)).then(()=>{})})})}
async function Hs(a,b){return a?(await Ds(Fs,b)).delete("databases",a):void 0}
async function Is(a,b){const c=[];b=await Ds(Fs,b);await hs(b,["databases"],{na:!0,mode:"readonly"},d=>{c.length=0;return ss(d.objectStore("databases"),{},e=>{a(e.getValue())&&c.push(e.getValue());return vs(e)})});
return c}
function Js(a){return Is(b=>b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0,a)}
function Ks(a,b,c){return Is(d=>c?d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):d.userIdentifier!==void 0&&!a.includes(d.userIdentifier),b)}
async function Ls(a){const b=Pq("YtIdbMeta hasAnyMeta other");return(await Is(c=>c.userIdentifier!==void 0&&c.userIdentifier!==b,a)).length>0}
;let Ms;const Ns=new class{constructor(){}}(new class{constructor(){}});
async function Os(){if(yr()?.hasSucceededOnce)return!0;var a;if(a=Kr)a=/WebKit\/([0-9]+)/.exec(zc()),a=!!(a&&parseInt(a[1],10)>=600);a&&(a=/WebKit\/([0-9]+)/.exec(zc()),a=!(a&&parseInt(a[1],10)>=602));if(!(a=a||Mc)){try{a=self;var b=!!(a.indexedDB&&a.IDBIndex&&a.IDBKeyRange&&a.IDBObjectStore)}catch(c){b=!1}a=!b}if(a||!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return!1;try{return await Gs({actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0},
Ns),await Hs("yt-idb-test-do-not-use",Ns),!0}catch(c){return!1}}
function Ps(){if(Ms!==void 0)return Ms;Br=!0;return Ms=Os().then(a=>{Br=!1;if(xr()?.i()){var b={hasSucceededOnce:yr()?.hasSucceededOnce||a};xr()?.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Qs(){return w("ytglobal.idbToken_")||void 0}
function Rs(){const a=Qs();return a?Promise.resolve(a):Ps().then(b=>{b?(v("ytglobal.idbToken_",Ns),b=Ns):b=void 0;return b})}
;let Ss=0;function Ts(a,b){Ss||(Ss=rm.va(async()=>{const c=await Rs();if(c){var d=!0;try{const e=await Ks(a,c,b);if(e.length){const f=e[0];await Bs(f.actualName);await Hs(f.actualName,c)}else d=!1}catch(e){Gr(e),d=!1}rm.wa(Ss);Ss=0;d&&Ts(a,b)}}))}
async function Us(){const a=await Rs();return a?Ls(a):!1}
new Tk;function Vs(a){if(!Oq())throw a=new U("AUTH_INVALID",{dbName:a}),Gr(a),a;const b=Pq();return{actualName:`${a}:${b}`,publicName:a,userIdentifier:b}}
async function Ws(a,b,c,d){var e=Error().stack??"";const f=await Rs();if(!f)throw b=Tr("openDbImpl",a,b),S("ytidb_async_stack_killswitch")||(b.stack=`${b.stack}\n${e.substring(e.indexOf("\n")+1)}`),Gr(b),b;Ir(a);e=c?{actualName:a,publicName:a,userIdentifier:void 0}:Vs(a);try{return await Gs(e,f),await As(e.actualName,b,d)}catch(g){try{await Hs(e.actualName,f)}catch{}throw g;}}
function Xs(a,b,c={}){return Ws(a,b,!1,c)}
function Ys(a,b,c={}){return Ws(a,b,!0,c)}
async function Zs(a,b={}){const c=await Rs();c&&(Ir(a),a=Vs(a),await Bs(a.actualName,b),await Hs(a.actualName,c))}
function $s(a,b,c){a=a.map(async d=>{await Bs(d.actualName,b);await Hs(d.actualName,c)});
return Promise.all(a).then(()=>{})}
async function at(){var a={};const b=await Rs();if(b){Ir("LogsDatabaseV2");var c=await Js(b);await $s(c,a,b)}}
async function bt(a,b={}){const c=await Rs();c&&(Ir(a),await Bs(a,b),await Hs(a,c))}
;function ct(a,b){let c;return()=>{c||(c=new dt(a,b));return c}}
var dt=class extends Es{constructor(a,b){super(a,b);this.options=b;Ir(a)}i(a,b,c={}){return(this.options.shared?Ys:Xs)(a,b,{...c})}delete(a={}){return(this.options.shared?bt:Zs)(this.name,a)}};function et(a,b){return ct(a,b)}
;var ft=et("ytGcfConfig",{Ib:{coldConfigStore:{Pb:1},hotConfigStore:{Pb:1}},shared:!1,upgrade(a,b){b(1)&&(rs(ls(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),rs(ls(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},version:1});function gt(a){return Ds(ft(),a)}
async function ht(a,b,c){a={config:a,hashData:b,timestamp:V()};c=await gt(c);await c.clear("hotConfigStore");return await ns(c,"hotConfigStore",a)}
async function jt(a,b,c,d){a={config:a,hashData:b,configData:c,timestamp:V()};d=await gt(d);await d.clear("coldConfigStore");return await ns(d,"coldConfigStore",a)}
async function kt(a){a=await gt(a);let b=void 0;await hs(a,["coldConfigStore"],{mode:"readwrite",na:!0},c=>xs(c.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},d=>{b=d.getValue()}));
return b}
async function lt(a){a=await gt(a);let b=void 0;await hs(a,["hotConfigStore"],{mode:"readwrite",na:!0},c=>xs(c.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},d=>{b=d.getValue()}));
return b}
;var mt=class extends y{constructor(){super();this.i=[];this.h=[];const a=w("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[...a],this.h=a):(this.h=[],v("yt.gcf.config.hotUpdateCallbacks",this.h))}ba(){for(const b of this.i){var a=this.h;const c=a.indexOf(b);c>=0&&a.splice(c,1)}this.i.length=0;super.ba()}};async function nt(a,b,c){if(S("start_client_gcf")){c&&(a.j=c,v("yt.gcf.config.hotConfigGroup",a.j||null));a.o(b);const d=Qs();d&&(c||(c=(await lt(d))?.config),await ht(c,b,d));if(c){a=a.i;for(const e of a.h)e(c)}}}
async function ot(a,b,c){S("start_client_gcf")&&(a.coldHashData=b,v("yt.gcf.config.coldHashData",a.coldHashData||null),a=Qs())&&(c||(c=(await kt(a))?.config),c&&await jt(c,b,c.configData,a))}
function pt(){if(!qt.instance){var a=new qt;qt.instance=a}a=qt.instance;var b=V()-a.h;if(!(a.h!==0&&b<I("send_config_hash_timer"))){b=w("yt.gcf.config.coldConfigData");var c=w("yt.gcf.config.hotHashData"),d=w("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=V());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
var qt=class{constructor(){this.h=0;this.i=new mt}xc(){return w("yt.gcf.config.hotConfigGroup")??P("RAW_HOT_CONFIG_GROUP")}o(a){this.hotHashData=a;v("yt.gcf.config.hotHashData",this.hotHashData||null)}};function rt(){return"INNERTUBE_API_KEY"in lp&&"INNERTUBE_API_VERSION"in lp}
function st(){return{innertubeApiKey:P("INNERTUBE_API_KEY"),innertubeApiVersion:P("INNERTUBE_API_VERSION"),Te:P("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),wd:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),hi:P("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:P("INNERTUBE_CONTEXT_CLIENT_VERSION"),Ve:P("INNERTUBE_CONTEXT_HL"),Ue:P("INNERTUBE_CONTEXT_GL"),We:P("INNERTUBE_HOST_OVERRIDE")||"",Xe:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ii:!!P("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:P("SERIALIZED_CLIENT_CONFIG_DATA")}}
function tt(a){const b={client:{hl:a.Ve,gl:a.Ue,clientName:a.wd,clientVersion:a.innertubeContextClientVersion,configInfo:a.Te}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=t.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=P("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=Op();c.length>0&&(b.request={internalExperimentFlags:c});c=a.wd;c!=="WEB"&&c!=="MWEB"&&c!==1&&c!==2||!b||(b.client.mainAppWebInfo=b.client.mainAppWebInfo??{},b.client.mainAppWebInfo.webDisplayMode=
sq());(c=w("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:c});S("web_log_memory_total_kbytes")&&t.navigator?.deviceMemory&&(c=t.navigator?.deviceMemory,b&&(b.client.memoryTotalKbytes=`${c*1E6}`));a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=Mq())&&b&&(b.client.connectionType=a);S("web_log_effective_connection_type")&&(a=Nq())&&b&&(b.client.effectiveConnectionType=a);if(S("start_client_gcf")){var d=pt();d&&(a=
d.coldConfigData,c=d.coldHashData,d=d.hotHashData,b&&(b.client.configInfo=b.client.configInfo||{},a&&(b.client.configInfo.coldConfigData=a),c&&(b.client.configInfo.coldHashData=c),d&&(b.client.configInfo.hotHashData=d)))}P("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(b.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});!S("fill_delegate_context_in_gel_killswitch")&&(a=P("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user={...b.user,serializedDelegationContext:a});a=P("INNERTUBE_CONTEXT");
S("enable_persistent_device_token")&&a?.client?.rolloutToken&&(b.client.rolloutToken=a?.client?.rolloutToken);a=Object;c=a.assign;d=b.client;var e=P("DEVICE","");const f={};for(const [g,h]of Object.entries(yp(e))){e=g;const k=h;e==="cbrand"?f.deviceMake=k:e==="cmodel"?f.deviceModel=k:e==="cbr"?f.browserName=k:e==="cbrver"?f.browserVersion=k:e==="cos"?f.osName=k:e==="cosver"?f.osVersion=k:e==="cplatform"&&(f.platform=k)}b.client=c.call(a,d,f);return b}
function ut(a,b,c={}){let d={};P("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":P("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||P("AUTHORIZATION");b||(a?b=`Bearer ${w("gapi.auth.getToken")().Uh}`:(vq.instance||(vq.instance=new vq),a=uq(),S("pageid_as_header_web")||delete a["X-Goog-PageId"],d={...d,...a}));b&&(d.Authorization=b);return d}
;const vt=typeof TextEncoder!=="undefined"?new TextEncoder:null,wt=vt?a=>vt.encode(a):a=>{a=vc(a);
const b=new Uint8Array(a.length);for(let c=0;c<b.length;c++)b[c]=a[c];return b};var xt={next:"wn_s",browse:"br_s",search:"sr_s",reel:"r_wrs",player:"ps_s"},zt={next:"wn_r",browse:"br_r",search:"sr_r",reel:"r_wrr",player:"ps_r"};function At(a){this.version=1;this.args=a}
At.prototype.serialize=function(){return{version:this.version,args:this.args}};function Bt(a,b){this.topic=a;this.h=b}
Bt.prototype.toString=function(){return this.topic};const Ct=w("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.ec;L.prototype.publish=L.prototype.rb;L.prototype.clear=L.prototype.clear;v("ytPubsub2Pubsub2Instance",Ct);const Dt=w("ytPubsub2Pubsub2SubscribedKeys")||{};v("ytPubsub2Pubsub2SubscribedKeys",Dt);const Et=w("ytPubsub2Pubsub2TopicToKeys")||{};v("ytPubsub2Pubsub2TopicToKeys",Et);const Ft=w("ytPubsub2Pubsub2IsAsync")||{};v("ytPubsub2Pubsub2IsAsync",Ft);
v("ytPubsub2Pubsub2SkipSubKey",null);function Gt(a,b){const c=Ht();c&&c.publish.call(c,a.toString(),a,b)}
function It(a){var b=Jt;const c=Ht();if(!c)return 0;const d=c.subscribe(b.toString(),(e,f)=>{var g=w("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=()=>{if(Dt[d])try{if(f&&b instanceof Bt&&b!=e)try{{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");let l;try{if(!h.Sd){const p=new h;h.Sd=p.version}l=h.Sd}catch(p){}if(!l||k.version!=l)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
nb(k.args))}catch(p){throw p.message="yt.pubsub2.Data.deserialize(): "+p.message,p;}}}catch(l){throw l.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+l.message,l;}a.call(window,f)}catch(l){qp(l)}},Ft[b.toString()]?w("yt.scheduler.instance")?rm.va(g):Jp(g,0):g())});
Dt[d]=!0;Et[b.toString()]||(Et[b.toString()]=[]);Et[b.toString()].push(d);return d}
function Kt(){var a=Lt;const b=It(function(c){a.apply(void 0,arguments);Mt(b)});
return b}
function Mt(a){const b=Ht();b&&(typeof a==="number"&&(a=[a]),hb(a,c=>{b.unsubscribeByKey(c);delete Dt[c]}))}
function Ht(){return w("ytPubsub2Pubsub2Instance")}
;function Nt(a,b,c={sampleRate:.1}){Math.random()<Math.min(.02,c.sampleRate/100)&&Gt("meta_logging_csi_event",{timerName:a,timelineData:b})}
;const Ot=I("max_body_size_to_compress",5E5),Pt=I("min_body_size_to_compress",500);let Qt=0;
function Rt(a,b,c,d){const e={startTime:V(),ticks:{},infos:{}};try{const g=St(b);if(g==null||!(g>Ot||g<Pt)){var f=Ko(wt(b));const h=V();e.ticks.gelc=h;Qt++;S("gel_compression_csi_killswitch")||!S("log_gel_compression_latency")&&!S("log_gel_compression_latency_lr")||Nt("gel_compression",e,{sampleRate:.1});c.headers||(c.headers={});c.headers["Content-Encoding"]="gzip";c.postBody=f;c.postParams=void 0}d(a,c)}catch(g){rp(g),d(a,c)}}
function Tt(a){V();if(!a.body)return a;try{const b=typeof a.body==="string"?a.body:JSON.stringify(a.body);let c=b;if(typeof b==="string"){const d=St(b);if(d!=null&&(d>Ot||d<Pt))return a;c=Ko(wt(b));V()}a.headers={"Content-Encoding":"gzip",...(a.headers||{})};a.body=c;return a}catch(b){return rp(b),a}}
function St(a){try{return(new Blob(a.split(""))).size}catch(b){return rp(b),null}}
;function Ut(a){a=Object.assign({},a);delete a.Authorization;const b=Dh();if(b){const c=new Fm;c.update(P("INNERTUBE_API_KEY"));c.update(b);a.hash=Vc(c.digest(),3)}return a}
;let Vt;function Wt(){Vt||(Vt=new wr("yt.innertube"));return Vt}
function Xt(a,b,c,d){if(d)return null;d=Wt().get("nextId",!0)||1;const e=Wt().get("requests",!0)||{};e[d]={method:a,request:b,authState:Ut(c),requestTime:Math.round(V())};Wt().set("nextId",d+1,86400,!0);Wt().set("requests",e,86400,!0);return d}
function Yt(a){const b=Wt().get("requests",!0)||{};delete b[a];Wt().set("requests",b,86400,!0)}
function Zt(a){const b=Wt().get("requests",!0);if(b){for(const d in b){const e=b[d];if(!(Math.round(V())-e.requestTime<6E4)){var c=e.authState;const f=Ut(ut(!1));Sh(c,f)&&(c=e.request,"requestTimeMs"in c&&(c.requestTimeMs=Math.round(V())),$t(a,e.method,c,{}));delete b[d]}}Wt().set("requests",b,86400,!0)}}
;function au(a){return!!a.aa||a.fc}
function bu(a){au(a)&&!a.Ub&&(a.h=!0,a.oc&&Math.random()<=a.lc&&a.ia.qe(a.aa),cu(a),a.ha.ya()&&a.j(),a.ha.listen(a.cd,a.j.bind(a)),a.ha.listen(a.bd,a.o.bind(a)))}
function cu(a){if(!au(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.ia.sd("QUEUED",a.aa).then(b=>{b&&!du(a,b,a.Dd)?a.Ha.va(async()=>{b.id!==void 0&&await a.ia.dd(b.id,a.aa);cu(a)}):a.ha.ya()&&a.j()})}
async function eu(a,b){if(!au(a))throw Error("IndexedDB is not supported: immediateSend");b.id!==void 0&&(await a.ia.cf(b.id,a.aa)||a.Ab(Error("The request cannot be found in the database.")));du(a,b,a.Hd)?(b.skipRetry||(b=fu(a,b)),b&&(b.skipRetry&&b.id!==void 0&&await a.ia.xb(b.id,a.aa),a.Va(b.url,b.options,!!b.skipRetry))):(a.Ab(Error("Networkless Logging: Stored logs request expired age limit")),b.id!==void 0&&await a.ia.xb(b.id,a.aa))}
function gu(a,b){a.Xd&&!a.ha.ya()?a.Xd(b):a.handleError(b)}
function du(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function fu(a,b){if(!au(a))throw Error("IndexedDB is not supported: updateRequestHandlers");const c=b.options.onError?b.options.onError:()=>{};
b.options.onError=async(e,f)=>{const g=hu(f),h=iu(f);h&&a.da&&a.da("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(a.da&&a.da("nwl_consider_error_code")&&g||a.da&&!a.da("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Dc)if(a.ha.Hc&&await a.ha.Hc(),!a.ha.ya()){c(e,f);a.da&&a.da("nwl_consider_error_code")&&b?.id!==void 0&&await a.ia.dd(b.id,a.aa,!1);return}a.da&&a.da("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.Dc||(a.potentialEsfErrorCounter++,
b?.id!==void 0&&(b.sendCount<a.Jd?(await a.ia.dd(b.id,a.aa,!0,h?!1:void 0),a.Ha.va(()=>{a.ha.ya()&&a.j()},a.Id)):await a.ia.xb(b.id,a.aa)),c(e,f))};
const d=b.options.onSuccess?b.options.onSuccess:()=>{};
b.options.onSuccess=async(e,f)=>{b?.id!==void 0&&await a.ia.xb(b.id,a.aa);a.ha.lb&&a.da&&a.da("vss_network_hint")&&a.ha.lb(!0);d(e,f)};
return b}
var ju=class{constructor(a){this.fc=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=()=>{};
this.Ab=()=>{};
this.now=Date.now;this.Ub=!1;this.Nd=a.Nd??100;this.Jd=a.Jd??1;this.Hd=a.Hd??2592E6;this.Dd=a.Dd??12E4;this.Id=a.Id??5E3;this.aa=a.aa??void 0;this.oc=!!a.oc;this.lc=a.lc??.1;this.Dc=a.Dc??10;a.handleError&&(this.handleError=a.handleError);a.Ab&&(this.Ab=a.Ab);a.Ub&&(this.Ub=a.Ub);a.fc&&(this.fc=a.fc);this.da=a.da;this.Ha=a.Ha;this.ia=a.ia;this.ha=a.ha;this.Va=a.Va;this.cd=a.cd;this.bd=a.bd;au(this)&&(!this.da||this.da("networkless_logging"))&&bu(this)}writeThenSend(a,b={}){if(au(this)&&this.h){const c=
{url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ia.set(c,this.aa).then(d=>{c.id=d;this.ha.ya()&&eu(this,c)}).catch(d=>{eu(this,c);
gu(this,d)})}else this.Va(a,b)}sendThenWrite(a,b={},c){if(au(this)&&this.h){const d={url:a,
options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.da&&this.da("nwl_skip_retry")&&(d.skipRetry=c);if(this.ha.ya()||this.da&&this.da("nwl_aggressive_send_then_write")&&!d.skipRetry){if(!d.skipRetry){const e=b.onError?b.onError:()=>{};
b.onError=async(f,g)=>{await this.ia.set(d,this.aa).catch(h=>{gu(this,h)});
e(f,g)}}this.Va(a,b,d.skipRetry)}else this.ia.set(d,this.aa).catch(e=>{this.Va(a,b,d.skipRetry);
gu(this,e)})}else this.Va(a,b,this.da&&this.da("nwl_skip_retry")&&c)}sendAndWrite(a,b={}){if(au(this)&&this.h){const c={url:a,
options:b,timestamp:this.now(),status:"NEW",sendCount:0};let d=!1;const e=b.onSuccess?b.onSuccess:()=>{};
c.options.onSuccess=(f,g)=>{c.id!==void 0?this.ia.xb(c.id,this.aa):d=!0;this.ha.lb&&this.da&&this.da("vss_network_hint")&&this.ha.lb(!0);e(f,g)};
this.Va(c.url,c.options,void 0,!0);this.ia.set(c,this.aa).then(f=>{c.id=f;d&&this.ia.xb(c.id,this.aa)}).catch(f=>{gu(this,f)})}else this.Va(a,b,void 0,!0)}j(){if(!au(this))throw Error("IndexedDB is not supported: throttleSend");
this.i||(this.i=this.Ha.va(async()=>{const a=await this.ia.sd("NEW",this.aa);a?(await eu(this,a),this.i&&(this.i=0,this.j())):this.o()},this.Nd))}o(){this.Ha.wa(this.i);
this.i=0}};function hu(a){return(a=a?.error?.code)&&a>=400&&a<=599?!1:!0}
function iu(a){a=a?.error?.code;return!(a!==400&&a!==415)}
;let ku;
function lu(){if(ku)return ku();ku=et("LogsDatabaseV2",{Ib:{LogsRequestsStore:{Pb:2}},shared:!1,upgrade(a,b,c){b(2)&&ls(a,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});b(3);b(5)&&(c=c.objectStore("LogsRequestsStore"),c.h.indexNames.contains("newRequest")&&c.h.deleteIndex("newRequest"),rs(c,"newRequestV2",["status","interface","timestamp"]));b(7)&&a.h.objectStoreNames.contains("sapisid")&&a.h.deleteObjectStore("sapisid");b(9)&&a.h.objectStoreNames.contains("SWHealthLog")&&a.h.deleteObjectStore("SWHealthLog")},version:9});
return ku()}
;function mu(a){return Ds(lu(),a)}
async function nu(a,b){const c={startTime:V(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}};b=await mu(b);a={...a,options:JSON.parse(JSON.stringify(a.options)),interface:P("INNERTUBE_CONTEXT_CLIENT_NAME",0)};a=await ns(b,"LogsRequestsStore",a);c.ticks.tc=V();ou(c);return a}
async function pu(a,b){const c={startTime:V(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}};b=await mu(b);var d=P("INNERTUBE_CONTEXT_CLIENT_NAME",0),e=[a,d,0];d=[a,d,V()];const f=IDBKeyRange.bound(e,d);let g="prev";S("use_fifo_for_networkless")&&(g="next");let h=void 0;e=a==="NEW"?"readwrite":"readonly";S("use_readonly_for_get_most_recent_by_status_killswitch")&&(e="readwrite");await hs(b,["LogsRequestsStore"],{mode:e,na:!0},k=>xs(k.objectStore("LogsRequestsStore").index("newRequestV2"),
{query:f,direction:g},l=>{l.getValue()&&(h=l.getValue(),a==="NEW"&&(h.status="QUEUED",l.update(h)))}));
c.ticks.tc=V();ou(c);return h}
async function qu(a,b){return hs(await mu(b),["LogsRequestsStore"],{mode:"readwrite",na:!0},c=>{const d=c.objectStore("LogsRequestsStore");return d.get(a).then(e=>{if(e)return e.status="QUEUED",cs(d.h.put(e,void 0)).then(()=>e)})})}
async function ru(a,b,c=!0,d){return hs(await mu(b),["LogsRequestsStore"],{mode:"readwrite",na:!0},e=>{const f=e.objectStore("LogsRequestsStore");return f.get(a).then(g=>g?(g.status="NEW",c&&(g.sendCount+=1),d!==void 0&&(g.options.compress=d),cs(f.h.put(g,void 0)).then(()=>g)):Yr.resolve(void 0))})}
async function su(a,b){return(await mu(b)).delete("LogsRequestsStore",a)}
async function tu(a){a=await mu(a);const b=V()-2592E6;await hs(a,["LogsRequestsStore"],{mode:"readwrite",na:!0},c=>ss(c.objectStore("LogsRequestsStore"),{},d=>{if(d.getValue().timestamp<=b)return d.delete().then(()=>vs(d))}))}
async function uu(){await at()}
function ou(a){S("nwl_csi_killswitch")||Nt("networkless_performance",a,{sampleRate:1})}
;var vu={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,offlineSystemFailure:546,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationPlayablesMetrics:533,liveCreationStreamWebrtcStats:288,liveCreationWebrtcError:526,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,
mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,
spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,
vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,
kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,
gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,
transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,
outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,
ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,
watchTimeSegment:219,appWidthLayoutError:221,accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,
deviceContextEvent:244,templateResolutionException:245,musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,
ytbFileOpened:268,tfliteModelError:269,apiTest:270,yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,
watchRestoreAttempt:294,liteAccountSignIn:296,notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,
tvhtml5UnexpectedRestart:319,tvhtml5DeviceStorageStats:535,tvhtml5StabilityTraceEvent:478,tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,
appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,
webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,
parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,
prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,
sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,mdeQosEvent:510,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,
parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,
biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,producerAppStateChange:509,producerProjectDiskInsufficientExportFailure:516,producerMediaServicesResetDetails:522,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,
youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,
crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503,innertubeResponseCacheMetrics:505,miniAppAdEvent:506,dataPlanUpsellEvent:507,producerProjectRenamed:508,producerMediaSelectionEvent:511,
embedsAutoplayStatusChanged:512,remoteConnectEvent:513,connectedSessionMisattributionEvent:514,producerProjectElementModified:515,adsSeenClientLogging:517,producerEvent:518,tvhtml5CleanStart:519,deviceAccountMetricsEvent:520,derpLogEvent:521,playablesPortalEvent:523,ipValidationStarted:524,ipValidationReceived:525,reelsSequenceMutationEvent:527,watchZoomStateChange:528,metadataEditorEvent:529,kidsPrismaDeeplinksEvent:530,creationOrchestrationEvent:531,coordinatedSamplingTriggered:532,dnaRecapScreenshotEvent:534,
mdxLocalNetworkPermissionRequestEvent:536,mdxLocalNetworkPermissionResponseEvent:537,sessionReplayEvent:538,sessionReplayStatusEvent:539,loggingReliabilityProbe:540,keyValueStoreStatsEvent:541,deviceLocationPermissionEvent:542,remoteControlStarted:543,remoteControlCompleted:544,reelsAdsEvents:545,ytlrLoaderTestHarnessEvent:547,biometricAuthenticationEvent:548};var wu=et("ServiceWorkerLogsDatabase",{Ib:{SWHealthLog:{Pb:1}},shared:!0,upgrade:(a,b)=>{b(1)&&rs(ls(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function xu(a){return Ds(wu(),a)}
async function yu(a){a=await xu(a);const b=V()-2592E6;await hs(a,["SWHealthLog"],{mode:"readwrite",na:!0},c=>ss(c.objectStore("SWHealthLog"),{},d=>{if(d.getValue().timestamp<=b)return d.delete().then(()=>vs(d))}))}
async function zu(a){await (await xu(a)).clear("SWHealthLog")}
;const Au={};let Bu=0;function Cu(a){const b=new Image,c=""+Bu++;Au[c]=b;b.onload=b.onerror=()=>{delete Au[c]};
({}).Fi&&(b.referrerPolicy="no-referrer");b.src=a}
;let Du;function Eu(){Du||(Du=new wr("yt.offline"));return Du}
function Fu(a){if(S("offline_error_handling")){var b=Eu().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Eu().set("errors",b,2592E3,!0)}}
;function Gu(){if(!Hu.instance){const a=w("yt.networkRequestMonitor.instance")||new Hu;v("yt.networkRequestMonitor.instance",a);Hu.instance=a}return Hu.instance}
var Hu=class{constructor(){this.h=new Map;this.i=!1}requestComplete(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)}isEndpointCFR(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:a===!1&&this.i?!0:null}removeParams(a){return a.split("?")[0]}};Hu.prototype.removeParams=Hu.prototype.removeParams;Hu.prototype.isEndpointCFR=Hu.prototype.isEndpointCFR;Hu.prototype.requestComplete=Hu.prototype.requestComplete;Hu.getInstance=Gu;function Iu(){if(!Ju.instance){const a=w("yt.networkStatusManager.instance")||new Ju;v("yt.networkStatusManager.instance",a);Ju.instance=a}return Ju.instance}
var Ju=class extends vj{constructor(){super();this.j=!1;this.h=qm();this.h.listen("networkstatus-online",()=>{if(this.j&&S("offline_error_handling")){var a=Eu().get("errors",!0);if(a){for(const b in a)if(a[b]){const c=new T(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;qp(c)}Eu().set("errors",{},2592E3,!0)}}})}ya(){return this.h.ya()}lb(a){this.h.h=a}Qe(){const a=window.navigator.onLine;
return a===void 0?!0:a}Ae(){this.j=!0}listen(a,b){return this.h.listen(a,b)}Hc(a){return tm(this.h,a)}};Ju.prototype.sendNetworkCheckRequest=Ju.prototype.Hc;Ju.prototype.listen=Ju.prototype.listen;Ju.prototype.enableErrorFlushing=Ju.prototype.Ae;Ju.prototype.getWindowStatus=Ju.prototype.Qe;Ju.prototype.networkStatusHint=Ju.prototype.lb;Ju.prototype.isNetworkAvailable=Ju.prototype.ya;Ju.getInstance=Iu;function Ku(a,b){a.rateLimit?a.h?(rm.wa(a.u),a.u=rm.va(()=>{a.o!==b&&(wj(a,b),a.o=b,a.h=V())},a.rateLimit-(V()-a.h))):(wj(a,b),a.o=b,a.h=V()):wj(a,b)}
var Lu=class extends vj{constructor(a={}){super();this.h=this.u=0;this.j=Iu();const b=w("yt.networkStatusManager.instance.listen").bind(this.j);b&&(a.rateLimit?(this.rateLimit=a.rateLimit,b("networkstatus-online",()=>{Ku(this,"publicytnetworkstatus-online")}),b("networkstatus-offline",()=>{Ku(this,"publicytnetworkstatus-offline")})):(b("networkstatus-online",()=>{wj(this,"publicytnetworkstatus-online")}),b("networkstatus-offline",()=>{wj(this,"publicytnetworkstatus-offline")})))}ya(){const a=w("yt.networkStatusManager.instance.isNetworkAvailable");
return a?a.bind(this.j)():!0}lb(a){const b=w("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)}async Hc(a){const b=w("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(this.j);return S("skip_network_check_if_cfr")&&Gu().isEndpointCFR("generate_204")?new Promise(c=>{this.lb(window.navigator?.onLine||!0);c(this.ya())}):b?b(a):!0}};let Mu;function Nu(){let a=w("yt.networklessRequestController.instance");a||(a=new Ou,v("yt.networklessRequestController.instance",a),S("networkless_logging")&&Rs().then(b=>{a.aa=b;bu(a);a.u.resolve();a.oc&&Math.random()<=a.lc&&a.aa&&yu(a.aa);S("networkless_immediately_drop_sw_health_store")&&Pu(a)}));
return a}
async function Pu(a){if(!a.aa)throw Tr("clearSWHealthLogsDb");zu(a.aa).catch(b=>{a.handleError(b)})}
var Ou=class extends ju{constructor(){Mu||(Mu=new Lu({mi:!0,bi:!0}));super({ia:{qe:tu,xb:su,sd:pu,cf:qu,dd:ru,set:nu},ha:Mu,handleError:(a,b,c)=>{const d=c?.error?.code;d===400||d===415?(a=new T(a.message,b,c?.error?.code),rp(a,void 0,void 0,void 0,!0)):qp(a)},
Ab:rp,Va:Qu,now:V,Xd:Fu,Ha:ur(),cd:"publicytnetworkstatus-online",bd:"publicytnetworkstatus-offline",oc:!0,lc:.1,Dc:I("potential_esf_error_limit",10),da:S,Ub:!(Oq()&&Ru())});this.u=new Tk;S("networkless_immediately_drop_all_requests")&&uu();bt("LogsDatabaseV2")}writeThenSend(a,b){b||(b={});b=Su(a,b);Oq()||(this.h=!1);super.writeThenSend(a,b)}sendThenWrite(a,b,c){b||(b={});b=Su(a,b);Oq()||(this.h=!1);super.sendThenWrite(a,b,c)}sendAndWrite(a,b){b||(b={});b=Su(a,b);Oq()||(this.h=!1);super.sendAndWrite(a,
b)}awaitInitialization(){return this.u.promise}};
function Qu(a,b,c){b=S("web_fp_via_jspb")?Object.assign({},b):b;S("use_request_time_ms_header")?b.headers&&Cp(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(V()))):b.postParams?.requestTimeMs&&(b.postParams.requestTimeMs=Math.round(V()));if(c&&Object.keys(b).length===0){if(a)if(P("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))Sp(a,void 0,"GET","",void 0,void 0,!1,!1);else{b:{try{c:{var d=new za({url:a});if(d.h.dsh==="1")var e=null;else{var f=d.h.ae;if(f==="1"){const m=d.h.adurl;if(m)try{e=
{version:3,ye:decodeURIComponent(m),he:wa(d.i,"act=1","ri=1",ya(d))};break c}catch(u){}}e=f==="2"?{version:4,ye:wa(d.i,"dct=1","suid="+d.j,"ri=1"),he:wa(d.i,"act=1","ri=1","suid="+d.j)}:null}}if(e){const m=Ab(a);var g;if(!(g=!m||!m.endsWith("/aclk"))){{const u=a.search(Ib);let n=Hb(a,0,"ri",u);if(n<0)var h=null;else{var k=a.indexOf("&",n);if(k<0||k>u)k=u;h=vb(a.slice(n+3,k!==-1?k:0))}}g=h!=="1"}var l=!g;break b}}catch(m){}l=!1}if(l){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,
"")){var p=!0;break b}}catch(m){}p=!1}c=p?!0:!1}else c=!1;c||Cu(a)}}else b.compress?b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),Rt(a,b.postBody,b,Wp)):Rt(a,JSON.stringify(b.postParams),b,Vp):Wp(a,b)}
function Su(a,b){S("use_event_time_ms_header")&&Cp(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(V())));return b}
function Ru(){return zb(document.location.toString())!=="www.youtube-nocookie.com"}
;let Tu=!1;const Uu=t.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Tu};v("ytNetworklessLoggingInitializationOptions",Uu);async function Vu(){await Rs()&&(Oq()||S("nwl_init_require_datasync_id_killswitch"))&&Ru()&&(Tu=!0,Uu.isNwlInitialized=Tu,await Nu().awaitInitialization())}
;function $t(a,b,c,d){!P("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&rp(new T("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new T("innertube xhrclient not ready",b,c,d);qp(e);throw e;}const f={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:()=>{d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:(m,u)=>{if(d.onSuccess)d.onSuccess(u)},
onFetchSuccess:m=>{if(d.onSuccess)d.onSuccess(m)},
onProgress:m=>{if(d.onProgress)d.onProgress(m)},
onError:(m,u)=>{if(d.onError)d.onError(u)},
onFetchError:m=>{if(d.onError)d.onError(m)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};f.headers["Content-Type"]||(f.headers["Content-Type"]="application/json");let g="";(e=a.config_.We)&&(g=e);const h=a.config_.Xe||!1,k=ut(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&h&&(f.headers["x-origin"]=window.location.origin);const l=Ap(`${g}${`/${"youtubei"}/${a.config_.innertubeApiVersion}/${b}`}`,{alt:"json"}),p=(m=!1)=>{let u;if(d.retry&&g!="www.youtube-nocookie.com"&&(m||S("skip_ls_gel_retry")||f.headers["Content-Type"]!==
"application/json"||(u=Xt(b,c,k,h)),u)){const n=f.onSuccess,z=f.onFetchSuccess;f.onSuccess=(D,B)=>{Yt(u);n(D,B)};
c.onFetchSuccess=(D,B)=>{Yt(u);z(D,B)}}try{if(m&&d.retry&&!d.networklessOptions.bypassNetworkless)f.method="POST",d.networklessOptions.writeThenSend?Nu().writeThenSend(l,f):Nu().sendAndWrite(l,f);
else if(d.compress)if(f.postBody){let n=f.postBody;typeof n!=="string"&&(n=JSON.stringify(f.postBody));Rt(l,n,f,Wp)}else Rt(l,JSON.stringify(f.postParams),f,Vp);else Vp(l,f)}catch(n){if(n.name==="InvalidAccessError")u&&(Yt(u),u=0),rp(Error("An extension is blocking network request."));else throw n;}u&&Qq(()=>{Zt(a)},5E3)};
(w("ytNetworklessLoggingInitializationOptions")?Uu.isNwlInitialized:Tu)?Ps().then(m=>{p(m)}):p(!1)}
var Wu=class{constructor(a){this.config_=null;a?this.config_=a:rt()&&(this.config_=st());Qq(()=>{Zt(this)},5E3)}isReady(){!this.config_&&rt()&&(this.config_=st());
return!!this.config_}};let Xu=0;const Yu=Oc?"webkit":Nc?"moz":Lc?"ms":Kc?"o":"";v("ytDomDomGetNextId",w("ytDomDomGetNextId")||(()=>++Xu));const Zu={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};function $u(a){if(document.body&&document.documentElement){const b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
class av{constructor(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(let d in a)d in Zu||(this[d]=a[d]);this.scale=a.scale;this.rotation=a.rotation;var b=a.target||a.srcElement;b&&b.nodeType==3&&(b=b.parentNode);this.target=b;
var c=a.relatedTarget;if(c)try{c=c.nodeName?c:null}catch(d){c=null}else this.type=="mouseover"?c=a.fromElement:this.type=="mouseout"&&(c=a.toElement);this.relatedTarget=c;this.clientX=a.clientX!=void 0?a.clientX:a.pageX;this.clientY=a.clientY!=void 0?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||(this.type=="keypress"?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(d){}}preventDefault(){this.event&&
(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())}stopPropagation(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())}stopImmediatePropagation(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())}};const Oh=t.ytEventsEventsListeners||{};v("ytEventsEventsListeners",Oh);const bv=t.ytEventsEventsCounter||{count:0};v("ytEventsEventsCounter",bv);
function cv(a,b,c,d={}){a.addEventListener&&(b!="mouseenter"||"onmouseenter"in document?b!="mouseleave"||"onmouseenter"in document?b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Nh(e=>{const f=typeof e[4]==="boolean"&&e[4]==!!d,g=ma(e[4])&&ma(d)&&Sh(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function dv(a,b,c,d={}){if(!a||!a.addEventListener&&!a.attachEvent)return"";let e=cv(a,b,c,d);if(e)return e;e=++bv.count+"";const f=!(b!="mouseenter"&&b!="mouseleave"||!a.addEventListener||"onmouseenter"in document);let g;g=f?h=>{h=new av(h);if(!ci(h.relatedTarget,k=>k==a))return h.currentTarget=a,h.type=b,c.call(a,h)}:h=>{h=new av(h);
h.currentTarget=a;return c.call(a,h)};
g=R(g);a.addEventListener?(b=="mouseenter"&&f?b="mouseover":b=="mouseleave"&&f?b="mouseout":b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),ev()||typeof d==="boolean"?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent(`on${b}`,g);Oh[e]=[a,b,c,g,d];return e}
function fv(a){a&&(typeof a=="string"&&(a=[a]),hb(a,b=>{if(b in Oh){var c=Oh[b];const d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?ev()||typeof c==="boolean"?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent(`on${e}`,f);delete Oh[b]}}))}
const ev=Lj(function(){let a=!1;try{const b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(b){}return a});function gv(a){this.F=a;this.h=null;this.o=0;this.A=null;this.u=0;this.i=[];for(a=0;a<4;a++)this.i.push(0);this.j=0;this.P=dv(window,"mousemove",ra(this.Y,this));a=ra(this.G,this);typeof a==="function"&&(a=R(a));this.Z=window.setInterval(a,25)}
va(gv,y);gv.prototype.Y=function(a){a.h===void 0&&$u(a);var b=a.h;a.i===void 0&&$u(a);this.h=new Jh(b,a.i)};
gv.prototype.G=function(){if(this.h){var a=V();if(this.o!=0){var b=this.A,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.i[this.j]=Math.abs((d-this.u)/this.u)>.5?1:0;b=0;for(c=0;c<4;c++)b+=this.i[c]||0;b>=3&&this.F();this.u=d}this.o=a;this.A=this.h;this.j=(this.j+1)%4}};
gv.prototype.ba=function(){window.clearInterval(this.Z);fv(this.P)};const hv={};function iv({wi:a=!1,ci:b=!0}={}){if(w("_lact",window)==null){var c=parseInt(P("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;v("_lact",c,window);v("_fact",c,window);c==-1&&jv();kv(a,b);new gv(()=>{lv("mouse",100)})}}
function kv(a=!1,b=!0){var c=window;dv(c.document,"keydown",jv);dv(c.document,"keyup",jv);dv(c.document,"mousedown",jv);dv(c.document,"mouseup",jv);a?dv(c,"touchmove",()=>{lv("touchmove",200)},{passive:!0}):(dv(c,"resize",()=>{lv("resize",200)}),b&&dv(c,"scroll",()=>{lv("scroll",200)}));
dv(c.document,"touchstart",jv,{passive:!0});dv(c.document,"touchend",jv,{passive:!0})}
function lv(a,b){hv[a]||(hv[a]=!0,rm.va(()=>{jv();hv[a]=!1},b))}
function jv(){w("_lact",window)==null&&iv();var a=Date.now();v("_lact",a,window);w("_fact",window)==-1&&v("_fact",a,window);(a=w("ytglobal.ytUtilActivityCallback_"))&&a()}
function mv(){const a=w("_lact",window);return a==null?-1:Math.max(Date.now()-a,0)}
;const nv=t.ytPubsubPubsubInstance||new L,ov=t.ytPubsubPubsubSubscribedKeys||{},pv=t.ytPubsubPubsubTopicToKeys||{},qv=t.ytPubsubPubsubIsSynchronous||{};function rv(a,b){const c=sv();if(c&&b){const d=c.subscribe(a,function(){const e=arguments,f=()=>{ov[d]&&b.apply&&typeof b.apply=="function"&&b.apply(window,e)};
try{qv[a]?f():Jp(f,0)}catch(g){qp(g)}},void 0);
ov[d]=!0;pv[a]||(pv[a]=[]);pv[a].push(d);return d}return 0}
function tv(a){const b=sv();b&&(typeof a==="number"?a=[a]:typeof a==="string"&&(a=[parseInt(a,10)]),hb(a,c=>{b.unsubscribeByKey(c);delete ov[c]}))}
function uv(a,b){const c=sv();c&&c.publish.apply(c,arguments)}
function vv(a){const b=sv();if(b)if(b.clear(a),a)wv(a);else for(let c in pv)wv(c)}
function sv(){return t.ytPubsubPubsubInstance}
function wv(a){pv[a]&&(a=pv[a],hb(a,b=>{ov[b]&&delete ov[b]}),a.length=0)}
L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.ec;L.prototype.publish=L.prototype.rb;L.prototype.clear=L.prototype.clear;v("ytPubsubPubsubInstance",nv);v("ytPubsubPubsubTopicToKeys",pv);v("ytPubsubPubsubIsSynchronous",qv);v("ytPubsubPubsubSubscribedKeys",ov);var xv=Symbol("injectionDeps"),yv=class{constructor(a){this.name=a}toString(){return`InjectionToken(${this.name})`}},zv=class{constructor(a){this.key=a}};function Av(a,b){a.i.set(b.Zb,b);const c=a.j.get(b.Zb);if(c)try{c.Gc(a.resolve(b.Zb))}catch(d){c.Ai(d)}}
function Bv(a,b,c,d=!1){if(c.indexOf(b)>-1)throw Error(`Deps cycle for: ${b}`);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error(`No provider for: ${b}`);}d=a.i.get(b);c.push(b);if(d.Qd!==void 0)var e=d.Qd;else if(d.Kf)e=d[xv]?Cv(a,d[xv],c):[],e=d.Kf(...e);else if(d.jd){e=d.jd;const f=e[xv]?Cv(a,e[xv],c):[];e=new e(...f)}else throw Error(`Could not resolve providers for: ${b}`);c.pop();d.Ii||a.h.set(b,e);return e}
function Cv(a,b,c){return b?b.map(d=>d instanceof zv?Bv(a,d.key,c,!0):Bv(a,d,c)):[]}
var Dv=class{constructor(){this.i=new Map;this.j=new Map;this.h=new Map}resolve(a){return a instanceof zv?Bv(this,a.key,[],!0):Bv(this,a,[])}};let Ev;function Fv(){Ev||(Ev=new Dv);return Ev}
;let Gv=window;function Hv(){return"h5vcc"in Gv&&Gv.h5vcc.traceEvent?.traceBegin&&Gv.h5vcc.traceEvent?.traceEnd?1:"performance"in Gv&&Gv.performance.mark&&Gv.performance.measure?2:0}
function Iv(a){const b=Hv();switch(b){case 1:Gv.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Gv.performance.mark(`${a}-start`);break;case 0:break;default:Ua(b,"unknown trace type")}}
function Jv(a){var b=Hv();switch(b){case 1:Gv.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=`${a}-start`;const c=`${a}-end`;Gv.performance.mark(c);Gv.performance.measure(a,b,c);break;case 0:break;default:Ua(b,"unknown trace type")}}
;var Kv=S("web_enable_lifecycle_monitoring")&&Hv()!==0,Lv=S("web_enable_lifecycle_monitoring");function Mv(a){var b=Array.from(a.h.keys()).sort((c,d)=>a.getPriority(a.h[d])-a.getPriority(a.h[c]));
for(const c of b)b=a.h[c],b.jobId===void 0||b.Ec||(a.scheduler.wa(b.jobId),a.scheduler.Xa(b.Tc,10))}
var Nv=class{constructor(a){this.scheduler=ur();this.i=new Tk;this.h=a;for(let c=0;c<this.h.length;c++){const d=this.h[c];a=()=>{d.Tc();this.h[c].Ec=!0;this.h.every(e=>e.Ec===!0)&&this.i.resolve()};
var b=this.getPriority(d);b=this.scheduler.Xa(a,b);this.h[c]={...d,Tc:a,jobId:b}}}cancel(){for(const a of this.h)a.jobId===void 0||a.Ec||this.scheduler.wa(a.jobId),a.Ec=!0;this.i.resolve()}getPriority(a){return a.priority??0}};function Ov(a,b,c){Lv&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed(`[${a.constructor.name}] '${a.state}' to '${b}'`),console.log("with message: ",c),console.groupEnd())}
function Pv(a,b){const c=b.filter(e=>(a.i??e.priority??0)===10),d=b.filter(e=>(a.i??e.priority??0)!==10);
return a.A.Hi?async(...e)=>{await Qv(c,...e);Rv(a,d,...e)}:(...e)=>{Sv(c,...e);
Rv(a,d,...e)}}
async function Qv(a,...b){const c=ur();for(const d of a){let e;c.G(()=>{Tv(d.name);const f=Uv(()=>d.callback(...b));
Kd(f)?e=S("web_lifecycle_error_handling_killswitch")?f.then(()=>{Vv(d.name)}):f.then(()=>{Vv(d.name)},g=>{window.onerror?.(g.message,"",0,0,g);
Vv(d.name)}):Vv(d.name)});
e&&await e}}
function Rv(a,b,...c){b=b.map(d=>({Tc:()=>{Tv(d.name);Uv(()=>d.callback(...c));
Vv(d.name)},
priority:a.i??d.priority??0}));
b.length&&(a.o=new Nv(b))}
function Sv(a,...b){const c=ur();for(const d of a)c.G(()=>{Tv(d.name);Uv(()=>d.callback(...b));
Vv(d.name)})}
function Tv(a){Kv&&a&&Iv(a)}
function Vv(a){Kv&&a&&Jv(a)}
var Wv=class{constructor(a){this.state=a;this.plugins=[];this.i=void 0;this.A={};Kv&&Iv(this.state)}get currentState(){return this.state}install(a){this.plugins.push(a);return this}uninstall(...a){a.forEach(b=>{b=this.plugins.indexOf(b);b>-1&&this.plugins.splice(b,1)})}transition(a,b){Kv&&Jv(this.state);
var c=this.transitions.find(d=>Array.isArray(d.from)?d.from.find(e=>e===this.state&&d.to===a):d.from===this.state&&d.to===a);
if(c){this.o&&(Mv(this.o),this.o=void 0);Ov(this,a,b);this.state=a;Kv&&Iv(this.state);c=c.action.bind(this);const d=this.plugins.filter(e=>e[a]).map(e=>e[a]);
c(Pv(this,d),b)}else throw Error(`no transition specified from ${this.state} to ${a}`);}};function Uv(a){if(S("web_lifecycle_error_handling_killswitch"))return a();try{return a()}catch(b){window.onerror?.(b.message,"",0,0,b)}}
;function Xv(){Yv||(Yv=new Zv);return Yv}
var Zv=class extends Wv{constructor(){super("none");this.h=null;this.i=10;this.transitions=[{from:"none",to:"application_navigating",action:this.j},{from:"application_navigating",to:"none",action:this.u},{from:"application_navigating",to:"application_navigating",action:()=>{}},
{from:"none",to:"none",action:()=>{}}]}j(a,b){this.h=Qq(()=>{this.currentState==="application_navigating"&&this.transition("none")},5E3);
a(b?.event)}u(a,b){this.h&&(rm.wa(this.h),this.h=null);a(b?.event)}},Yv;let $v=[];v("yt.logging.transport.getScrapedGelPayloads",function(){return $v});function aw(a,b){const c=bw(b);if(a.h[c])return a.h[c];const d=Object.keys(a.store)||[];if(d.length<=1&&bw(b)===d[0])return d;const e=[];for(let g=0;g<d.length;g++){const h=d[g].split("/");if(cw(b.auth,h[0])){var f=b.isJspb;cw(f===void 0?"undefined":f?"true":"false",h[1])&&cw(b.cttAuthInfo,h[2])&&(f=b.tier,f=f===void 0?"undefined":JSON.stringify(f),cw(f,h[3])&&e.push(d[g]))}}return a.h[c]=e}
function cw(a,b){return a===void 0||a==="undefined"?!0:a===b}
var dw=class{constructor(){this.store={};this.h={}}storePayload(a,b){a=bw(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);S("more_accurate_gel_parser")&&(b=new CustomEvent("TRANSPORTING_NEW_EVENT"),window.dispatchEvent(b));return a}smartExtractMatchingEntries(a){if(!a.keys.length)return[];const b=aw(this,a.keys.splice(0,1)[0]),c=[];for(let d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push(...this.store[b[d]]),delete this.store[b[d]]):
c.push(...this.store[b[d]].splice(0,a.sizeLimit)));a?.sizeLimit&&c.length<a?.sizeLimit&&(a.sizeLimit-=c.length,c.push(...this.smartExtractMatchingEntries(a)));return c}extractMatchingEntries(a){a=aw(this,a);const b=[];for(let c=0;c<a.length;c++)this.store[a[c]]&&(b.push(...this.store[a[c]]),delete this.store[a[c]]);return b}getSequenceCount(a){a=aw(this,a);let b=0;for(let c=0;c<a.length;c++)b+=this.store[a[c]]?.length||0;return b}};dw.prototype.getSequenceCount=dw.prototype.getSequenceCount;
dw.prototype.extractMatchingEntries=dw.prototype.extractMatchingEntries;dw.prototype.smartExtractMatchingEntries=dw.prototype.smartExtractMatchingEntries;dw.prototype.storePayload=dw.prototype.storePayload;function bw(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;function ew(a,b){if(a)return a[b.name]}
;var fw=new yv("FinchConfigManagerService");const gw=I("initial_gel_batch_timeout",2E3),hw=I("gel_queue_timeout_max_ms",6E4),iw=I("gel_min_batch_size",5);let jw=void 0;class kw{constructor(){this.o=this.h=this.i=0;this.j=!1}}const lw=new kw,mw=new kw,nw=new kw,ow=new kw;let pw,qw=!0;const rw=t.ytLoggingTransportTokensToCttTargetIds_||{};v("ytLoggingTransportTokensToCttTargetIds_",rw);let sw={};function tw(){let a=w("yt.logging.ims");a||(a=new dw,v("yt.logging.ims",a));return a}
function uw(a,b){if(a.endpoint==="log_event"){vw(a);var c=ww(a),d=xw(a.payload)||"";a:{if(S("enable_web_tiered_gel")){var e=vu[d||""];var f=Fv().resolve(new zv(qt))?.xc()?.loggingHotConfig?.eventLoggingConfig?.payloadPolicies;if(f)for(let g=0;g<f.length;g++)if(f[g].payloadNumber===e){e=f[g];break a}}e=void 0}f=200;if(e){if(e.enabled===!1&&!S("web_payload_policy_disabled_killswitch"))return;f=yw(e.tier);if(f===400){zw(a,b);return}}sw[c]=!0;c={cttAuthInfo:c,isJspb:!1,tier:f};tw().storePayload(c,a.payload);
Aw(b,c,d==="gelDebuggingEvent")}}
function Aw(a,b,c=!1){a&&(jw=new a);a=I("tvhtml5_logging_max_batch_ads_fork")||I("tvhtml5_logging_max_batch")||I("web_logging_max_batch")||100;const d=V(),e=Bw(!1,b.tier),f=e.o;c&&(e.j=!0);c=0;b&&(c=tw().getSequenceCount(b));c>=1E3?Cw("CODE_SECTION_FLUSH_LOGS_ON_HARD_MAX_QUEUE_SIZE",{writeThenSend:!0},void 0,!1,b.tier):c>=a?pw||(pw=Dw(()=>{Cw("CODE_SECTION_FLUSH_LOGS_ON_MAX_QUEUE_SIZE",{writeThenSend:!0},void 0,!1,b.tier);pw=void 0},0)):d-f>=10&&(Ew(!1,b.tier),e.o=d)}
function zw(a,b){if(a.endpoint==="log_event"){S("more_accurate_gel_parser")&&tw().storePayload({isJspb:!1},a.payload);vw(a);var c=ww(a),d=new Map;d.set(c,[a.payload]);var e=xw(a.payload)||"";b&&(jw=new b);return new Mj((f,g)=>{jw&&jw.isReady()?Fw(d,jw,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function ww(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;const c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);rw[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Cw(a,b={},c,d=!1,e){if(S("enable_flush_logs_call_source_trace")){let f=a;a===void 0&&(f=qw?"CODE_SECTION_FLUSH_LOGS_ON_THE_FIRST_TIME_AFTER_STARTUP":"CODE_SECTION_UNSPECIFIED");sw[""]=!0;tw().storePayload({cttAuthInfo:"",isJspb:!1,tier:200},{eventTimeMs:Math.round(V()),context:{lastActivityMs:String(mv())},tvhtml5StabilityTraceEvent:{codeSection:f}})}new Mj((f,g)=>{const h=Bw(d,e),k=h.j;h.j=!1;Gw(h.i);Gw(h.h);h.h=0;jw&&jw.isReady()?e===void 0&&S("enable_web_tiered_gel")?Hw(f,g,b,c,d,300,
k):Hw(f,g,b,c,d,e,k):(Ew(d,e),f())})}
function Hw(a,b,c={},d,e=!1,f=200,g=!1){var h=jw;const k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(d!==void 0)f=S("enable_web_tiered_gel")?tw().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):tw().extractMatchingEntries(e),k.set(d,f);else for(const p of Object.keys(sw))d=S("enable_web_tiered_gel")?tw().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:p,tier:f},{isJspb:!1,cttAuthInfo:p}],sizeLimit:1E3}):tw().extractMatchingEntries({isJspb:!1,cttAuthInfo:p}),
d.length>0&&k.set(p,d),(S("web_fp_via_jspb_and_json")&&c.writeThenSend||!S("web_fp_via_jspb_and_json"))&&delete sw[p];Fw(k,h,a,b,c,!1,g)}
function Ew(a=!1,b=200){const c=()=>{Cw("CODE_SECTION_FLUSH_LOGS_ON_DEBOUNCE_LOGS_QUEUE",{writeThenSend:!0},void 0,a,b)},d=Bw(a,b);
var e=d===ow||d===nw?5E3:hw;S("web_gel_timeout_cap")&&!d.h&&(e=Dw(()=>{c()},e),d.h=e);
Gw(d.i);e=P("LOGGING_BATCH_TIMEOUT",I("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&qw&&(e=gw);e=Dw(()=>{I("gel_min_batch_size")>0?tw().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=iw&&c():c()},e);
d.i=e}
function Fw(a,b,c,d,e={},f,g){const h=Math.round(V());let k=a.size;const l=Iw(g);for(const [p,m]of a){a=p;g=m;const u=Uh({context:tt(b.config_||st())});if(!la(g)&&!S("throw_err_when_logevent_malformed_killswitch")){d();break}u.events=g;(g=rw[a])&&Jw(u,a,g);delete rw[a];const n=a==="visitorOnlyApprovedKey";Kw(u,h,n);S("always_send_and_write")&&(e.writeThenSend=!1);const z=N=>{S("start_client_gcf")&&rm.va(async()=>{await Lw(N)});
k--;k||c()};
let D=0;const B=()=>{D++;if(e.bypassNetworkless&&D===1)try{$t(b,l,u,Mw({writeThenSend:!0},n,z,B,f)),qw=!1}catch(N){qp(N),d()}k--;k||c()};
try{$t(b,l,u,Mw(e,n,z,B,f)),qw=!1}catch(N){qp(N),d()}}}
function Mw(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Wh:!!e,headers:{},postBodyFormat:"",postBody:"",compress:S("compress_gel")||S("compress_gel_lr")};Nw()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(V())));return a}
function Kw(a,b,c){Nw()||(a.requestTimeMs=String(b));S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=P("EVENT_ID"))&&((c=P("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*65535/2)),c++,c>65535&&(c=1),mp("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Jw(a,b,c){let d;if(c.videoId)d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function vw(a){var b=Np("il_payload_scraping")==="enable_il_payload_scraping";if(!w("yt.logging.transport.enableScrapingForTest"))if(b)$v=[],v("yt.logging.transport.enableScrapingForTest",!0),v("yt.logging.transport.scrapedPayloadsForTesting",$v),v("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),v("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),v("yt.logging.transport.scrapeClientEvent",
!0);else return;b=w("yt.logging.transport.scrapedPayloadsForTesting");const c=w("yt.logging.transport.payloadToScrape"),d=w("yt.logging.transport.scrapeClientEvent");if(c&&c.length>=1)for(let e=0;e<c.length;e++)a&&a.payload[c[e]]&&(d?b.push(a.payload):b.push((a?.payload)[c[e]]));v("yt.logging.transport.scrapedPayloadsForTesting",b)}
function Nw(){return S("use_request_time_ms_header")||S("lr_use_request_time_ms_header")}
function Dw(a,b){return S("transport_use_scheduler")===!1?Jp(a,b):S("logging_avoid_blocking_during_navigation")||S("lr_logging_avoid_blocking_during_navigation")?Qq(()=>{Xv().currentState==="none"?a():Xv().install({none:{callback:a}})},b):Qq(a,b)}
function Gw(a){S("transport_use_scheduler")?rm.wa(a):window.clearTimeout(a)}
async function Lw(a){a=a?.responseContext?.globalConfigGroup;var b=ew(a,Qo),c=a?.hotHashData;const d=ew(a,Po),e=a?.coldHashData,f=Fv().resolve(new zv(qt));f&&(c&&(b?await nt(f,c,b):await nt(f,c)),e&&(d?await ot(f,e,d):await ot(f,e)));b=a?.rawFinchStaticConfigGroup;(a=a?.finchStaticHashData)?(c=Fv().resolve(new zv(fw)))?await c.xi({config:b||{},Xh:a||""}):(b||a)&&rp(new T("FinchConfigManagerService is not present, but Finch config data is present.")):b&&rp(new T("Finch config data is present, but hash is missing."))}
function Bw(a,b=200){return a?b===300?ow:mw:b===300?nw:lw}
function xw(a){a=Object.keys(a);for(const b of a)if(vu[b])return b}
function yw(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
function Iw(a=!1){return a&&S("vss_through_gel_video_stats")?"video_stats":"log_event"}
;const Ow=t.ytLoggingGelSequenceIdObj_||{};v("ytLoggingGelSequenceIdObj_",Ow);
function Pw(a,b,c,d={}){const e={},f=Math.round(d.timestamp||V());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=mv();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!S("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,Ow[b]=b in Ow?Ow[b]+1:0,a.sequence={index:Ow[b],groupKey:b},d.endOfSequence&&delete Ow[d.sequenceGroup]);S("web_tag_automated_log_events")&&(e.context.automatedLogEventSource=d.automatedLogEventSource);(d.sendIsolatedPayload?
zw:uw)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},c)}
;function Er(a,b,c={}){let d=Wu;P("ytLoggingEventsDefaultDisabled",!1)&&Wu===Wu&&(d=null);Pw(a,b,d,c)}
;var Qw=new Set,Rw=0,Sw=0,Tw=0,Uw=[];const Vw=[],Ww=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Dr(a){Xw(a)}
function W(a){Xw(a,"WARNING")}
function Yw(a){a instanceof Error?Xw(a):(a=ma(a)?JSON.stringify(a):String(a),a=new T(a),a.name="RejectedPromiseError",W(a))}
function Xw(a,b="ERROR",c,d,e,f={},g=!1,h){f.name=c||P("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||P("INNERTUBE_CONTEXT_CLIENT_VERSION");Zw(a,f,b,g,h)}
function Zw(a,b,c="ERROR",d=!1,e){if(a){a.hasOwnProperty("level")&&a.level&&(c=a.level);if(S("console_log_js_exceptions")||["test","dev","autopush","staging"].includes(P("SERVER_VERSION"))){var f=[];f.push(`Name: ${a.name}`);f.push(`Message: ${a.message}`);a.hasOwnProperty("params")&&f.push(`Error Params: ${JSON.stringify(a.params)}`);a.hasOwnProperty("args")&&f.push(`Error args: ${JSON.stringify(a.args)}`);f.push(`File name: ${a.fileName}`);f.push(`Stacktrace: ${a.stack}`);f=f.join("\n");window.console.log(f,
a)}if(!(Rw>=5)){f=[];for(g of Vw)try{g()&&f.push(g())}catch(B){}var g=f;g=[...Uw,...g];var h=rb(a);f=h.message||"Unknown Error";const z=h.name||"UnknownError";var k=h.stack||a.i||"Not available";if(k.startsWith(`${z}: ${f}`)){var l=k.split("\n");l.shift();k=l.join("\n")}l=h.lineNumber||"Not available";h=h.fileName||"Not available";let D=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var p=0;p<a.args.length&&!(D=pq(a.args[p],`params.${p}`,b,D),D>=500);p++);else if(a.hasOwnProperty("params")&&
a.params){const B=a.params;if(typeof a.params==="object")for(p in B){if(!B[p])continue;const N=`params.${p}`,K=rq(B[p]);b[N]=K;D+=N.length+K.length;if(D>500)break}else b.params=rq(B)}if(g.length)for(p=0;p<g.length&&!(D=pq(g[p],`params.context.${p}`,b,D),D>=500);p++);navigator.vendor&&!b.hasOwnProperty("vendor")&&(b["device.vendor"]=navigator.vendor);b={message:f,name:z,lineNumber:l,fileName:h,stack:k,params:b,sampleWeight:1};p=Number(a.columnNumber);isNaN(p)||(b.lineNumber=`${b.lineNumber}:${p}`);
if(a.level==="IGNORED")var m=0;else a:{a=iq();for(m of a.cb)if(b.message&&b.message.match(m.oi)){m=m.weight;break a}for(var u of a.Za)if(u.callback(b)){m=u.weight;break a}m=1}b.sampleWeight=m;m=b;for(var n of eq){if(!n.Cc[m.name])continue;u=n.Cc[m.name];for(const B of u){u=m.message.match(B.regexp);if(!u)continue;m.params["params.error.original"]=u[0];a=B.groups;b={};for(p=0;p<a.length;p++)b[a[p]]=u[p+1],m.params[`params.error.${a[p]}`]=u[p+1];m.message=n.Xc(b);break}}m.params||(m.params={});n=iq();
m.params["params.errorServiceSignature"]=`msg=${n.cb.length}&cb=${n.Za.length}`;m.params["params.serviceWorker"]="false";t.document&&t.document.querySelectorAll&&(m.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));(new Yh(Xh,"sample")).constructor!==Yh&&(m.params["params.fconst"]="true");window.yterr&&typeof window.yterr==="function"&&window.yterr(m);m.sampleWeight===0||Qw.has(m.message)||(d?$w(m,c):ax(m,c,e))}}}
function $w(a,b="ERROR"){bx(b,a);cx(a)}
function ax(a,b="ERROR",c){if(b==="ERROR"){mq.rb("handleError",a);if(S("record_app_crashed_web")&&Tw===0&&a.sampleWeight===1){Tw++;const d={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};S("report_client_error_with_app_crash_ks")||(d.systemHealth={crashData:{clientError:{logMessage:{message:a.message}}}});Er("appCrashed",d)}Sw++}else b==="WARNING"&&mq.rb("handleWarning",a);S("kevlar_gel_error_routing")&&(c=dx(b,a,c))&&(Er("clientError",c),(b==="ERROR"||S("errors_flush_gel_always_killswitch"))&&Cw("CODE_SECTION_UNSPECIFIED",
void 0,void 0,!1));S("suppress_error_204_logging")||bx(b,a);cx(a)}
function cx(a){try{Qw.add(a.message)}catch(b){}Rw++}
function dx(a,b,c={}){a:{for(d of Ww)if(Lr(d.toLowerCase())){var d=!0;break a}d=!1}if(!d){var e={stackTrace:b.stack};b.fileName&&(e.filename=b.fileName);d=b.lineNumber&&b.lineNumber.split?b.lineNumber.split(":"):[];d.length!==0&&(d.length!==1||isNaN(Number(d[0]))?d.length!==2||isNaN(Number(d[0]))||isNaN(Number(d[1]))||(e.lineNumber=Number(d[0]),e.columnNumber=Number(d[1])):e.lineNumber=Number(d[0]));d={level:"ERROR_LEVEL_UNKNOWN",message:b.message,errorClassName:b.name,sampleWeight:b.sampleWeight};
a==="ERROR"?d.level="ERROR_LEVEL_ERROR":a==="WARNING"&&(d.level="ERROR_LEVEL_WARNNING");a={isObfuscated:!0,browserStackInfo:e};c.pageUrl=window.location.href;c.kvPairs=[];P("FEXP_EXPERIMENTS")&&(c.experimentIds=P("FEXP_EXPERIMENTS"));e=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!np("web_disable_gel_stp_ecatcher_killswitch")&&e)for(const g of Object.keys(e))c.kvPairs.push({key:g,value:String(e[g])});if(b=b.params)for(var f of Object.keys(b))c.kvPairs.push({key:`client.${f}`,value:String(b[f])});
f=P("SERVER_NAME");b=P("SERVER_VERSION");f&&b&&(c.kvPairs.push({key:"server.name",value:f}),c.kvPairs.push({key:"server.version",value:b}));(f=P("PLAYER_CLIENT_VERSION"))&&c.kvPairs.push({key:"client.player.version",value:f});return{errorMetadata:c,stackTrace:a,logMessage:d}}}
function bx(a,b){const c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:P("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);for(const e of Object.keys(c))a.postParams[`client.${e}`]=c[e];if(b=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(var d of Object.keys(b))a.postParams[d]=
b[d];(d=P("LAVA_VERSION"))&&(a.postParams["lava.version"]=d);d=P("SERVER_NAME");b=P("SERVER_VERSION");d&&b&&(a.postParams["server.name"]=d,a.postParams["server.version"]=b);(d=P("PLAYER_CLIENT_VERSION"))&&(a.postParams["client.player.version"]=d)}Wp(`${P("ECATCHER_REPORT_HOST","")}/error_204`,a)}
function ex(a,...b){a.args||(a.args=[]);Array.isArray(a.args)&&a.args.push(...b)}
;function fx(a){for(const b of a.register.values())b.Ed("ABORTED")}
class gx{constructor(){this.register=new Map}clear(){fx(this);this.register.clear()}}var hx=new gx;let ix=Date.now().toString();
function jx(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;a<16;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(Math.random()*256)}if(ix)for(a=1,b=0;b<ix.length;b++)d[a%16]^=d[(a-1)%16]/4^ix.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var kx;let lx=t.ytLoggingDocDocumentNonce_;lx||(lx=jx(),v("ytLoggingDocDocumentNonce_",lx));kx=lx;var mx=class{constructor(a){this.h=a}getAsJson(){const a={};this.h.trackingParams!==void 0?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,this.h.veCounter!==void 0&&(a.veCounter=this.h.veCounter),this.h.elementIndex!==void 0&&(a.elementIndex=this.h.elementIndex));this.h.dataElement!==void 0&&(a.dataElement=this.h.dataElement.getAsJson());this.h.youtubeData!==void 0&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a}getAsJspb(){const a=new So;
this.h.trackingParams!==void 0?a.setTrackingParams(this.h.trackingParams):(this.h.veType!==void 0&&G(a,2,je(this.h.veType)),this.h.veCounter!==void 0&&G(a,6,je(this.h.veCounter)),this.h.elementIndex!==void 0&&G(a,3,je(this.h.elementIndex)),this.h.isCounterfactual&&G(a,5,fe(!0)));if(this.h.dataElement!==void 0){var b=this.h.dataElement.getAsJspb();sf(a,So,7,b)}this.h.youtubeData!==void 0&&sf(a,Ro,8,this.h.jspbYoutubeData);return a}toString(){return JSON.stringify(this.getAsJson())}isClientVe(){return!this.h.trackingParams&&
!!this.h.veType}getLoggingDirectives(){return this.h.loggingDirectives}};function nx(a=0){return P("client-screen-nonce-store",{})[a]}
function ox(a,b=0){let c=P("client-screen-nonce-store");c||(c={},mp("client-screen-nonce-store",c));c[b]=a}
function px(a=0){return a===0?"ROOT_VE_TYPE":`${"ROOT_VE_TYPE"}.${a}`}
function qx(a=0){return P(px(a))}
v("yt_logging_screen.getRootVeType",qx);function rx(a=0){a=qx(a);var b;a?b=new mx({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):b=null;return b}
function sx(){let a=P("csn-to-ctt-auth-info");a||(a={},mp("csn-to-ctt-auth-info",a));return a}
function tx(){return Object.values(P("client-screen-nonce-store",{})).filter(a=>a!==void 0)}
function ux(a=0){a=nx(a);if(!a&&!P("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
v("yt_logging_screen.getCurrentCsn",ux);function vx(a,b,c){const d=sx();(c=ux(c))&&delete d[c];b&&(d[a]=b)}
function wx(a){return sx()[a]}
v("yt_logging_screen.getCttAuthInfo",wx);v("yt_logging_screen.setCurrentScreen",function(a,b,c=0,d){if(a!==nx(c)||b!==P(px(c)))if(vx(a,d,c),ox(a,c),mp(px(c),b),b=()=>{setTimeout(()=>{a&&Er("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:kx,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function xx(){const a=Th(yx);let b;return(new Mj((c,d)=>{a.onSuccess=e=>{Hp(e)?c(new zx(e)):d(new Ax(`Request failed, status=${Ip(e)}`,"net.badstatus",e))};
a.onError=e=>{d(new Ax("Unknown request error","net.unknown",e))};
a.onTimeout=e=>{d(new Ax("Request timed out","net.timeout",e))};
b=Wp("//googleads.g.doubleclick.net/pagead/id",a)})).Jc(c=>{c instanceof Vj&&b?.abort();
return Rj(c)})}
var Ax=class extends Ca{constructor(a,b,c){super(`${a}, errorCode=${b}`);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}},zx=class{constructor(a){this.xhr=a}};function Bx(a,b=null){a.B=2;a.h=b}
function Cx(a,b=null){a.B=1;a.h=b}
class Dx{constructor(){this.B=0;this.h=null}then(a,b,c){return this.B===1&&a?(a=a.call(c,this.h))&&typeof a.then==="function"?a:Ex(a):this.B===2&&b?(a=b.call(c,this.h))&&typeof a.then==="function"?a:Fx(a):this}getValue(){return this.h}isRejected(){return this.B==2}}Dx.prototype.$goog_Thenable=!0;function Fx(a=null){const b=new Dx;Bx(b,a);return b}
function Ex(a=null){const b=new Dx;Cx(b,a);return b}
;function Gx(a){const b=P("INNERTUBE_HOST_OVERRIDE");b&&(a=String(b)+String(Bb(a)));return a}
function Hx(a){const b={};S("json_condensed_response")&&(b.prettyPrint="false");return a=Bp(a,b||{},!1)}
function Ix(a,b="POST"){a={method:b,mode:Cp(a)?"same-origin":"cors",credentials:Cp(a)?"same-origin":"include"};b={};const c={};for(const d of Object.keys(b))b[d]&&(c[d]=b[d]);Object.keys(c).length>0&&(a.headers=c);return a}
;function Jx(){return Bh()||(Qc||Rc)&&Lr("applewebkit")&&!Lr("version")&&(!Lr("safari")||Lr("gsa/"))||Pc&&Lr("version/")?!0:P("EOM_VISITOR_DATA")?!1:!0}
;function Kx(a){var b=a.docid||a.video_id||a.videoId||a.id;if(b)return b;b=a.raw_player_response;b||(a=a.player_response)&&(b=JSON.parse(a));return b&&b.videoDetails&&b.videoDetails.videoId||null}
;function Lx(a){var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");let c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(d){return b}if(c)a:for(const d in Wo)if(Wo[d]==c.embeddedPlayerMode){b=Wo[d];break a}return b}
;class Mx extends Ca{constructor(a){super(a.message||a.description||a.name);this.isMissing=a instanceof Nx;this.isTimeout=a instanceof Ax&&a.errorCode=="net.timeout";this.isCanceled=a instanceof Vj}}Mx.prototype.name="BiscottiError";class Nx extends Ca{constructor(){super("Biscotti ID is missing from server")}}Nx.prototype.name="BiscottiMissingError";const yx={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0};let Ox=null;
function Px(){if(S("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Jx())return Error("User has not consented - not fetching biscotti id.");const a=P("PLAYER_VARS",{});if(Rh(a)=="1")return Error("Biscotti ID is not available in private embed mode");if(Lx(a)==="EMBEDDED_PLAYER_MODE_PFL")return Error("Biscotti id fetching has been disabled for pfl.")}
function hp(){const a=Px();if(a!==void 0)return Rj(a);Ox||(Ox=xx().then(Qx).Jc(b=>Rx(2,b)));
return Ox}
function Qx(a){a=a.xhr.responseText;if(a.lastIndexOf(")]}'",0)!=0)throw new Nx;a=JSON.parse(a.substr(4));if((a.type||1)>1)throw new Nx;a=a.id;ip(a);Ox=Ex(a);Sx(18E5,2);return a}
function Rx(a,b){b=new Mx(b);ip("");Ox=Fx(b);a>0&&Sx(12E4,a-1);throw b;}
function Sx(a,b){Jp(function(){xx().then(Qx,c=>Rx(b,c)).Jc(Kj)},a)}
function Tx(){try{const a=w("yt.ads.biscotti.getId_");return a?a():hp()}catch(a){return Rj(a)}}
;function Ux(a){a&&(a.dataset?a.dataset[Vx()]="true":cb(a))}
function Wx(a){return a?a.dataset?a.dataset[Vx()]:a.getAttribute("data-loaded"):null}
const Xx={};function Vx(){return Xx.loaded||(Xx.loaded="loaded".replace(/\-([a-z])/g,(a,b)=>b.toUpperCase()))}
;class Yx{constructor(a){a=a||{};const b={},c={};this.url=a.url||"";this.args=a.args||Th(b);this.assets=a.assets||{};this.attrs=a.attrs||Th(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}clone(){const a=new Yx;for(const b in this)if(this.hasOwnProperty(b)){const c=this[b];ka(c)=="object"?a[b]=Th(c):a[b]=c}return a}};var Zx=["att/get"],$x=["share/get_share_panel"],ay=["share/get_web_player_share_panel"],by=["feedback"],cy=["notification/modify_channel_preference"],dy=["browse/edit_playlist"],ey=["subscription/subscribe"],fy=["subscription/unsubscribe"];const gy=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};v("yt.msgs_",gy);function hy(a){jp(gy,arguments)}
;function iy(a,b,c=null){jy(a,b,c)}
function ky(a){a=ly(a);const b=document.getElementById(a);b&&(vv(a),b.parentNode.removeChild(b))}
function my(a,b){a&&b&&(a=`${na(b)}`,(a=ny[a])&&tv(a))}
function jy(a,b,c=null){const d=ly(typeof a==="string"?a:a.toString());let e=document.getElementById(d);var f=e&&Wx(e);const g=e&&!f;f?b&&b():(b&&(f=rv(d,b),b=`${na(b)}`,ny[b]=f),g||(e=oy(a,d,()=>{Wx(e)||(Ux(e),uv(d),Jp(()=>{vv(d)},0))},c)))}
function oy(a,b,c,d=null){const e=$h("SCRIPT");e.id=b;e.onload=()=>{c&&setTimeout(c,0)};
e.onreadystatechange=()=>{switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);ab(e,typeof a==="string"?No(a):a);a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function ly(a){const b=document.createElement("a");Ta(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return`js-${wb(a)}`}
const ny={};function py(a){const b=qy(a);let c=document.getElementById(b);const d=c&&Wx(c);d||c&&!d||(c=ry(a,b,()=>{if(!Wx(c)){Ux(c);uv(b);const e=sa(vv,b);Jp(e,0)}}))}
function ry(a,b,c){const d=document.createElement("link");d.id=b;d.onload=()=>{c&&setTimeout(c,0)};
a=No(a);fb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function qy(a){const b=$h("A");Ta(b,new La(a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return`css-${wb(a)}`}
;function sy(a,...b){if(!ty(a)||b.some(c=>!ty(c)))throw Error("Only objects may be merged.");
for(const c of b)uy(a,c)}
function uy(a,b){for(const c in b)if(ty(b[c])){if(c in a&&!ty(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});uy(a[c],b[c])}else if(vy(b[c])){if(c in a&&!vy(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);wy(a[c],b[c])}else a[c]=b[c];return a}
function wy(a,b){for(const c of b)ty(c)?a.push(uy({},c)):vy(c)?a.push(wy([],c)):a.push(c);return a}
function ty(a){return typeof a==="object"&&!Array.isArray(a)}
function vy(a){return typeof a==="object"&&Array.isArray(a)}
;const xy="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function yy(a,b){var c=P("VALID_SESSION_TEMPDATA_DOMAINS",[]),d=zb(window.location.href);d&&c.push(d);d=zb(a);if(gb(c,d)>=0||!d&&a.lastIndexOf("/",0)==0)if(c=document.createElement("a"),Ta(c,a),a=c.href)if(a=Bb(a),a=Cb(a))if(!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:ux()},b)),e){var e=parseInt(e,10);isFinite(e)&&e>0&&zy(a,b,e)}else zy(a,b)}
function zy(a,b,c){a=Ay(a);b=b?Fb(b):"";c=c||5;Jx()&&xq(a,b,c)}
function Ay(a){for(let b of xy)a=Kb(a,b);return"ST-"+wb(a).toString(36)}
;Date.now();function By(a){let b=0;for(let c=0;c<a.length;c++)b=b*31+a.charCodeAt(c),c<a.length-1&&(b%=0x800000000000);return b%1E5}
;class Cy extends At{constructor(a){super(arguments);this.csn=a}}const Jt=new Bt("screen-created",Cy),Dy=[];let Ey=0;const Fy=new Map,Gy=new Map,Hy=new Map;
function Iy(a,b,c,d,e=!1,f={}){Object.assign(f,Jy({cttAuthInfo:wx(b)||void 0},b));for(const h of d){var g=h.getAsJson();(Ph(g)||!g.trackingParams&&!g.veType)&&W(Error("Child VE logged with no data"));if(S("no_client_ve_attach_unless_shown")){const k=Ky(h,b);if(g.veType&&!Gy.has(k)&&!Hy.has(k)&&!e){if(!S("il_attach_cache_limit")||Fy.size<1E3){Fy.set(k,[a,b,c,h]);return}S("il_attach_cache_limit")&&Fy.size>1E3&&W(new T("IL Attach cache exceeded limit"))}g=Ky(c,b);Fy.has(g)?Ly(c,b):Hy.set(g,!0)}}d=d.filter(h=>
{h.csn!==b?(h.csn=b,h=!0):h=!1;return h});
c={csn:b,parentVe:c.getAsJson(),childVes:jb(d,h=>h.getAsJson())};
b==="UNDEFINED_CSN"?My("visualElementAttached",f,c):a?Pw("visualElementAttached",c,a,f):Er("visualElementAttached",c,f)}
function My(a,b,c){Dy.push({sf:a,payload:c,li:void 0,options:b});Ey||(Ey=Kt())}
function Lt(a){if(Dy){for(const b of Dy)b.payload&&(b.payload.csn=a.csn,Er(b.sf,b.payload,b.options));Dy.length=0}Ey=0}
function Ky(a,b){return`${a.getAsJson().veType}${a.getAsJson().veCounter}${b}`}
function Ly(a,b){a=Ky(a,b);Fy.has(a)&&(b=Fy.get(a)||[],Iy(b[0],b[1],b[2],[b[3]],!0,{}),Fy.delete(a))}
function Jy(a,b){S("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;class Ny{flush(a=[],b=!1){if(S("enable_client_streamz_web"))for(const c of a)a=ph(c),this.h&&sf(a,lh,2,this.h),a={serializedIncrementBatch:Vc(a.j())},Er("streamzIncremented",a,{sendIsolatedPayload:b})}}var fm=class extends Ny{constructor(){super()}},Oy=class extends Ny{constructor(a){super();var b=new lh;var c=new kh;c=xf(c,1,"botguard");a=xf(c,2,a);a=rf(a,kh);nf(b,1,mh,a);a&&!zd(a)&&Ze(b.X);this.h=b}};let em;const Py=new Map;function Qy(){try{return!!self.localStorage}catch{return!1}}
;function Ry(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function Sy(a){if(Qy()){var b=Object.keys(window.localStorage);for(const c of b)b=Ry(c),b===void 0||a.includes(b)||self.localStorage.removeItem(c)}}
function Ty(){if(!Qy())return!1;const a=Pq();var b=Object.keys(window.localStorage);for(const c of b)if(b=Ry(c),b!==void 0&&b!==a)return!0;return!1}
;function Uy(){let a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch{a=!0}return(P("INNERTUBE_CLIENT_NAME")==="WEB"||P("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
function Vy(){try{window.sessionStorage.removeItem("stickiness_reload");window.sessionStorage.removeItem("session_logininfo");mp("LOGIN_INFO","");window.sessionStorage.setItem("from_switch_account","1");var a;let c=Wy;c||(c=document.querySelector("#persist_identity"));if(a=c){var b=a.src?(new URL(a.src)).origin:"*";a.contentWindow?.postMessage({action:"clear"},b)}}catch{}}
function Xy(a){if(a)if(a.startsWith("https://accounts.google.com/AddSession"))Vy();else if(a.startsWith("https://accounts.google.com/ServiceLogin"))Vy();else{var b;if(b=a.startsWith("https://myaccount.google.com"))b=(a instanceof gn?a.clone():new gn(a)).h.endsWith("/youtubeoptions");b&&Vy()}if(P("LOGGED_IN",!0)&&Uy()){b=P("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=zb(window.location.href);c&&b.push(c);c=zb(a);gb(b,c)>=0||!c&&a.lastIndexOf("/",0)==0?(b=Bb(a),(b=Cb(b))?(b=Ay(b),b=(b=yq(b)||null)?yp(b):
{}):b=null):b=null;b==null&&(b={});c=b;var d=void 0;Uy()?(d||(d=P("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&yy(a,b)}}
let Wy=null;function Yy(a,b={},c=!1){const d=P("EVENT_ID");d&&(b.ei||(b.ei=d));b&&yy(a,b);if(c)return!1;Xy(a);b=window;a=Gb(a,{});Xy(a);a=Qa(a+"",Pa)||Ma;b=b.location;a=Sa(a);a!==void 0&&(b.href=a);return!0}
;function Zy(a){if(Rh(P("PLAYER_VARS",{}))!="1"){a&&gp();try{Tx().then(()=>{},()=>{}),Jp(Zy,18E5)}catch(b){qp(b)}}}
;var $y=class{constructor(){this.h={}}contains(a){return Object.prototype.hasOwnProperty.call(this.h,a)}get(a){if(this.contains(a))return this.h[a]}set(a,b){this.h[a]=b}Vb(){return Object.keys(this.h)}remove(a){delete this.h[a]}};new class{constructor(){this.mappings=new $y}get(a){a:{var b=this.mappings.get(a.toString());switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=Ua(b,void 0)}}return a}};const az=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function bz(){var a=window.location.href;if(S("kevlar_disable_theme_param"))return null;Ab(a);try{const b=zp(a).theme;return az.get(b)||null}catch(b){}return null}
;function cz(a){const b=new Pk;if(a.interpreterJavascript){var c=Lo(a.interpreterJavascript);c=Za(c).toString();var d=new Nk;xf(d,6,c);sf(b,Nk,1,d,Ed)}else a.interpreterUrl&&(c=Mo(a.interpreterUrl),c=Ja(c).toString(),d=new Ok,xf(d,4,c),sf(b,Ok,2,d,Ed));a.interpreterHash&&mf(b,3,ze(a.interpreterHash),Ed);a.program&&mf(b,4,ze(a.program),Ed);a.globalName&&mf(b,5,ze(a.globalName),Ed);a.clientExperimentsStateBlob&&mf(b,7,ze(a.clientExperimentsStateBlob),Ed);return b}
function dz(a){const b={};a=a.split("&");for(const c of a)a=c.split("="),a.length===2&&(b[a[0]]=a[1]);return b}
function ez(a){return Number(a.t)||7200}
;async function fz(){var a=window;await Pb(gz());const b=a.bgevmc;if(!b)throw Error("BGE Controls not exposed");return{pause:()=>{b.p()},
resume:()=>{b.r()},
checkForRefresh:()=>b.cr()}}
function gz(){return S("bg_st_hr")?"havuokmhhs-0":`${"havuokmhhs"}-${Math.floor(globalThis.performance?.timeOrigin||0)}`}
function hz(a){window.bgens=a}
class iz{constructor(a){this.h=a}bindInnertubeChallengeFetcher(a){this.h.bicf(a)}registerChallengeFetchedCallback(a){this.h.bcr(a)}getLatestChallengeResponse(){return this.h.blc()}}function jz(){return new Promise(a=>{const b=window;b.ntpevasrs!==void 0?a(new iz(b.ntpevasrs)):(b.ntpqfbel===void 0&&(b.ntpqfbel=[]),b.ntpqfbel.push(c=>{a(new iz(c))}))})}
;const kz=[];var lz=function(a,...b){if(b.length===0)return Ia(a[0]);let c=a[0];for(let d=0;d<b.length;d++)c+=encodeURIComponent(b[d])+a[d+1];return Ia(c)}`https://static.doubleclick.net/instream/ad_status.js`;
let mz=!1;function nz(){if(Jx()){var a=P("PLAYER_VARS",{});if(Rh(a)!="1"&&Lx(a)!=="EMBEDDED_PLAYER_MODE_PFL"){var b=()=>{mz=!0;"google_ad_status"in window?mp("DCLKSTAT",1):mp("DCLKSTAT",2)};
try{const c=Wa(document);iy(lz,b,c)}catch(c){}kz.push(rm.va(()=>{if(!(mz||"google_ad_status"in window)){try{my(lz.toString(),b)}catch(c){}mz=!0;mp("DCLKSTAT",3)}},5E3))}}}
function oz(){const a=Number(P("DCLKSTAT",0));return isNaN(a)?0:a}
;var X=class{constructor(a){this.h=a}};[new X("b.f_"),new X("j.s_"),new X("r.s_"),new X("e.h_"),new X("i.s_"),new X("s.t_"),new X("p.h_"),new X("s.i_"),new X("f.i_"),new X("a.b_"),new X("a.o_"),new X("g.o_"),new X("p.i_"),new X("p.m_"),new X("n.k_"),new X("i.f_"),new X("a.s_"),new X("m.c_"),new X("n.h_"),new X("o.p_"),new X("m.p_"),new X("o.a_"),new X("d.p_"),new X("e.i_")].reduce((a,b)=>{a[b.h]=b;return a},{});function pz(a){return w("ytcsi."+(a||"")+"data_")||qz(a)}
function rz(){const a=pz();a.info||(a.info={});return a.info}
function sz(a){a=pz(a);a.metadata||(a.metadata={});return a.metadata}
function tz(a){a=pz(a);a.tick||(a.tick={});return a.tick}
function uz(a){a=pz(a);if(a.gel){const b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function vz(a){a=uz(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function wz(){const a=uz();a.preLoggedGelInfos||(a.preLoggedGelInfos=[]);return a.preLoggedGelInfos}
function xz(a){let b=pz(a).nonce;b||(b=jx(),pz(a).nonce=b);return b}
function qz(a){const b={tick:{},info:{}};v("ytcsi."+(a||"")+"data_",b);return b}
;const yz=I("ytcsi_debug_max_size",100);function zz(){let a=w("ytcsi.debug");a||(a=[],v("ytcsi.debug",a),v("ytcsi.reference",{}));return a}
function Az(a){const b=zz();b.push(a);S("limit_ytcsi_debug_array_size")&&b.length>yz&&b.splice(0,b.length-yz)}
function Bz(a){a=a||"";const b=Cz();if(b[a])return b[a];const c={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};Az(c);return b[a]=c}
function Cz(){const a=w("ytcsi.reference");if(a)return a;zz();return w("ytcsi.reference")}
;var Dz={auto_search:"LATENCY_ACTION_AUTO_SEARCH",ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",app_startup:"LATENCY_ACTION_APP_STARTUP",browse:"LATENCY_ACTION_BROWSE",cast_splash:"LATENCY_ACTION_CAST_SPLASH",call_to_cast:"LATENCY_ACTION_CALL_TO_CAST",channel_activity:"LATENCY_ACTION_FAMILY_CENTER_CHANNEL_ACTIVITY",channels:"LATENCY_ACTION_CHANNELS",chips:"LATENCY_ACTION_CHIPS",commerce_transaction:"LATENCY_ACTION_COMMERCE_TRANSACTION",direct_playback:"LATENCY_ACTION_DIRECT_PLAYBACK",
editor:"LATENCY_ACTION_EDITOR",embed:"LATENCY_ACTION_EMBED",embed_no_video:"LATENCY_ACTION_EMBED_NO_VIDEO",entity_key_serialization_perf:"LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",entity_key_deserialization_perf:"LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",explore:"LATENCY_ACTION_EXPLORE",favorites:"LATENCY_ACTION_FAVORITES",home:"LATENCY_ACTION_HOME",inboarding:"LATENCY_ACTION_INBOARDING",landing:"LATENCY_ACTION_LANDING",learning:"LATENCY_ACTION_LEARNING",learning_journey_browse:"LATENCY_ACTION_LEARNING_JOURNEY_BROWSE",
learning_journey_watch:"LATENCY_ACTION_LEARNING_JOURNEY_WATCH",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",live_pagination:"LATENCY_ACTION_LIVE_PAGINATION",management:"LATENCY_ACTION_MANAGEMENT",mini_app:"LATENCY_ACTION_MINI_APP_PLAY",notification_settings:"LATENCY_ACTION_FAMILY_CENTER_NOTIFICATION_SETTINGS",onboarding:"LATENCY_ACTION_ONBOARDING",parent_profile_settings:"LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",parent_tools_collection:"LATENCY_ACTION_PARENT_TOOLS_COLLECTION",parent_tools_dashboard:"LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",
player_att:"LATENCY_ACTION_PLAYER_ATTESTATION",prebuffer:"LATENCY_ACTION_PREBUFFER",prefetch:"LATENCY_ACTION_PREFETCH",profile_settings:"LATENCY_ACTION_KIDS_PROFILE_SETTINGS",profile_switcher:"LATENCY_ACTION_LOGIN",projects:"LATENCY_ACTION_PROJECTS",reel_watch:"LATENCY_ACTION_REEL_WATCH",results:"LATENCY_ACTION_RESULTS",red:"LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",premium:"LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",premium_lite_upsell:"LATENCY_ACTION_PREMIUM_LITE_UPSELL",privacy_policy:"LATENCY_ACTION_FAMILY_CENTER_PRIVACY_POLICY",
review:"LATENCY_ACTION_REVIEW",search_overview_answer:"LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",search_ui:"LATENCY_ACTION_SEARCH_UI",search_suggest:"LATENCY_ACTION_SUGGEST",search_zero_state:"LATENCY_ACTION_SEARCH_ZERO_STATE",secret_code:"LATENCY_ACTION_KIDS_SECRET_CODE",switchplan:"LATENCY_ACTION_UNPLUGGED_SWITCH_PLAN",seek:"LATENCY_ACTION_PLAYER_SEEK",settings:"LATENCY_ACTION_SETTINGS",store:"LATENCY_ACTION_STORE",supervision_dashboard:"LATENCY_ACTION_FAMILY_CENTER_SUPERVISION_DASHBOARD",bedtime_reminder_settings:"LATENCY_ACTION_FAMILY_CENTER_BEDTIME_REMINDER_SETTINGS",
break_reminder_settings:"LATENCY_ACTION_FAMILY_CENTER_BREAK_REMINDER_SETTINGS",supervision_settings_dashboard:"LATENCY_ACTION_FAMILY_CENTER_SUPERVISION_SETTINGS_DASHBOARD",time_management:"LATENCY_ACTION_FAMILY_CENTER_TIME_MANAGEMENT",update_profile:"LATENCY_ACTION_FAMILY_CENTER_UPDATE_PROFILE",viewing_permissions:"LATENCY_ACTION_FAMILY_CENTER_VIEWING_PERMISSIONS",shorts_settings:"LATENCY_ACTION_FAMILY_CENTER_SHORTS_SETTINGS",privacy_settings:"LATENCY_ACTION_FAMILY_CENTER_PRIVACY_SETTINGS",tenx:"LATENCY_ACTION_TENX",
video_preview:"LATENCY_ACTION_VIDEO_PREVIEW",video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",watch:"LATENCY_ACTION_WATCH",watch_it_again:"LATENCY_ACTION_KIDS_WATCH_IT_AGAIN","watch,watch7":"LATENCY_ACTION_WATCH","watch,watch7_html5":"LATENCY_ACTION_WATCH","watch,watch7ad":"LATENCY_ACTION_WATCH","watch,watch7ad_html5":"LATENCY_ACTION_WATCH",wn_comments:"LATENCY_ACTION_LOAD_COMMENTS",ww_rqs:"LATENCY_ACTION_WHO_IS_WATCHING",voice_assistant:"LATENCY_ACTION_VOICE_ASSISTANT",cast_load_by_entity_to_watch:"LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",
networkless_performance:"LATENCY_ACTION_NETWORKLESS_PERFORMANCE",gel_compression:"LATENCY_ACTION_GEL_COMPRESSION",gel_jspb_serialize:"LATENCY_ACTION_GEL_JSPB_SERIALIZE",attestation_challenge_fetch:"LATENCY_ACTION_ATTESTATION_CHALLENGE_FETCH"};function Ez(a){return Dz[a]||"LATENCY_ACTION_UNKNOWN"}
;var Fz=class extends At{constructor(a,b){super(arguments);this.timer=b}},Gz=new Bt("aft-recorded",Fz);v("ytLoggingGelSequenceIdObj_",t.ytLoggingGelSequenceIdObj_||{});const Hz=t.ytLoggingLatencyUsageStats_||{};v("ytLoggingLatencyUsageStats_",Hz);function Iz(){Jz.instance||(Jz.instance=new Jz);return Jz.instance}
function Kz(a,b){Hz[b]=Hz[b]||{count:0};var c=Hz[b];c.count++;c.time=V();a.h||(a.h=Qq(()=>{const d=V();for(const e in Hz)Hz[e]&&d-Hz[e].time>6E4&&delete Hz[e];a&&(a.h=0)},5E3));
return c.count>5?(c.count===6&&Math.random()*1E5<1&&(c=new T("CSI data exceeded logging limit with key",b.split("_")),b.indexOf("plev")>=0||W(c)),!0):!1}
var Jz=class{constructor(){this.h=0}tick(a,b,c,d){Kz(this,`tick_${a}_${b}`)||Er("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})}info(a,b,c){const d=Object.keys(a).join("");Kz(this,`info_${d}_${b}`)||(a=Object.assign({},a),a.clientActionNonce=b,Er("latencyActionInfo",a,{cttAuthInfo:c}))}jspbInfo(){}span(a,b,c){const d=Object.keys(a).join("");Kz(this,`span_${d}_${b}`)||(a.clientActionNonce=b,Er("latencyActionSpan",a,{cttAuthInfo:c}))}};const Lz=window;class Mz{constructor(){this.timing={};this.clearResourceTimings=()=>{};
this.webkitClearResourceTimings=()=>{};
this.mozClearResourceTimings=()=>{};
this.msClearResourceTimings=()=>{};
this.oClearResourceTimings=()=>{}}}
function Nz(){var a;S("csi_use_performance_navigation_timing")?(a=Y?.getEntriesByType?.("navigation")?.[0]?.toJSON?.())?(a.requestStart=Oz(a.requestStart),a.responseEnd=Oz(a.responseEnd),a.redirectStart=Oz(a.redirectStart),a.redirectEnd=Oz(a.redirectEnd),a.domainLookupEnd=Oz(a.domainLookupEnd),a.connectStart=Oz(a.connectStart),a.connectEnd=Oz(a.connectEnd),a.responseStart=Oz(a.responseStart),a.secureConnectionStart=Oz(a.secureConnectionStart),a.domainLookupStart=Oz(a.domainLookupStart),a.isPerformanceNavigationTiming=
!0):a=Y.timing:a=S("csi_performance_timing_to_object")?JSON.parse(JSON.stringify(Y.timing)):Y.timing;return a}
function Oz(a){return Math.round(Pz()+a)}
function Pz(){return(S("csi_use_time_origin")||S("csi_use_time_origin_tvhtml5"))&&Y.timeOrigin?Math.floor(Y.timeOrigin):Y.timing.navigationStart}
var Y=Lz.performance||Lz.mozPerformance||Lz.msPerformance||Lz.webkitPerformance||new Mz;let Qz=!1,Rz=!1;
var Sz={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj",
'script[name="embed_client"]':"ecj",'link[rel="stylesheet"][name="embed-ui"]':"ecc"},Tz=ra(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||Kj,Y);
function Uz(){const a=wz(),b=vz();var c=void 0;for(var d=0;d<a.length;d++){const h=a[d];if(h.loadType){c=h.loadType;break}}if(sz().loadType==="cold"&&(b.loadType==="cold"||c==="cold")){c=tz();d=uz();d=d.gelTicks?d.gelTicks:d.gelTicks={};for(var e in c)e in d||typeof c[e]==="number"&&Z(e,Vz(e));var f={},g=!1;e=h=>{sy(b,h);sy(f,h);g=!0};
for(const h of a)e(h);g&&Wz(f)}}
function Xz(a,b){Z("_start",a,b)}
function Wz(a,b){if(!S("web_csi_action_sampling_enabled")||!pz(b).actionDisabled){var c=Bz(b||"");sy(c.info,a);a.loadType&&(c=a.loadType,sz(b).loadType=c);sy(vz(b),a);c=xz(b);b=pz(b).cttAuthInfo;Iz().info(a,c,b)}}
function Yz(){return(Fv().resolve(new zv(qt))?.xc()?.loggingHotConfig?.csiConfig?.debugTicks??[]).map(a=>Object.values(a)[0])}
function Z(a,b,c){if(!S("web_csi_action_sampling_enabled")||!pz(c).actionDisabled){var d=xz(c),e;if(e=S("web_csi_debug_sample_enabled")&&d){Fv().resolve(new zv(qt))?.xc()&&!Rz&&(Rz=!0,Z("gcfl",V(),c));e=Fv().resolve(new zv(qt))?.xc()?.loggingHotConfig?.csiConfig?.debugSampleWeight||0;var f;if(f=e!==0)b:{f=Yz();if(f.length>0)for(let h=0;h<f.length;h++)if(a===f[h]){f=!0;break b}f=!1}f?(e=By(d)%e!==0,pz(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,Wz(f,c)),pz(c).debugTicksExcludedLogged=
!0):e=!1}if(!e){if(a[0]!=="_"&&(e=a,f=b,Y.mark))if(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=` (${c})`),f===void 0||S("web_csi_disable_alt_time_performance_mark"))Y.mark(e);else{f=S("csi_use_performance_navigation_timing")?f-Y.timeOrigin:f-(Y.timeOrigin||Y.timing.navigationStart);try{Y.mark(e,{startTime:f})}catch(h){}}e=Bz(c||"");e.tick[a]=b||V();if(e.callback&&e.callback[a])for(var g of e.callback[a])g();g=uz(c);g.gelTicks&&(g.gelTicks[a]=!0);e=tz(c);g=b||V();e[a]=g;e=pz(c).cttAuthInfo;a==="_start"?
(a=Iz(),Kz(a,`baseline_${d}`)||Er("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:e})):Iz().tick(a,d,b,e);Zz(c);return g}}}
function $z(){const a=Y.getEntriesByType?.("mark");a&&a.forEach(b=>{b.name.startsWith("mark_")&&Y.clearMarks?.(b.name)})}
function aA(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Yu+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function bA(){var a=P("TIMING_INFO",{});const b={},c=(d,e,f)=>{e=e.match("_rid")?e.split("_rid")[0]:e;typeof f==="number"&&(f=JSON.stringify(f));d.requestIds?d.requestIds.push({endpoint:e,id:f}):d.requestIds=[{endpoint:e,id:f}]};
for(const [d,e]of Object.entries(a)){a=d;const f=e;switch(a){case "GetBrowse_rid":c(b,a,f);break;case "GetGuide_rid":c(b,a,f);break;case "GetHome_rid":c(b,a,f);break;case "GetPlayer_rid":c(b,a,f);break;case "GetSearch_rid":c(b,a,f);break;case "GetSettings_rid":c(b,a,f);break;case "GetTrending_rid":c(b,a,f);break;case "GetWatchNext_rid":c(b,a,f);break;case "yt_red":b.isRedSubscriber=!!f;break;case "yt_ad":b.isMonetized=!!f}}return b}
function cA(a,b){a=document.querySelector(a);if(!a)return!1;var c="";const d=a.nodeName;d==="SCRIPT"?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):d==="LINK"&&(c=a.href);Wa(document)&&a.setAttribute("nonce",Wa(document));return c?(a=Y.getEntriesByName(c))&&a[0]&&(a=a[0],c=Pz(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),a.transferSize!==void 0&&a.transferSize===0)?!0:!1:!1}
function dA(){const a=window.location.protocol;var b=Y.getEntriesByType("resource");b=ib(b,c=>c.name.indexOf(`${a}//fonts.gstatic.com/s/`)===0);
(b=kb(b,(c,d)=>d.duration>c.duration?d:c))&&b.startTime>0&&b.responseEnd>0&&(Z("wffs",Oz(b.startTime)),Z("wffe",Oz(b.responseEnd)))}
function eA(a){var b=Vz("aft",a);if(b)return b;b=P((a||"")+"TIMING_AFT_KEYS",["ol"]);const c=b.length;for(let d=0;d<c;d++){const e=Vz(b[d],a);if(e)return e}return NaN}
function fA(a){v("ytglobal.timing"+(a||"")+"ready_",!0)}
function Vz(a,b){if(a=tz(b)[a])return typeof a==="number"?a:a[a.length-1]}
function Zz(a){const b=Vz("_start",a),c=eA(a),d=!Qz;b&&c&&d&&(Gt(Gz,new Fz(Math.round(c-b),a)),Qz=!0)}
function gA(){if(Y.getEntriesByType){var a=Y.getEntriesByType("paint");if(a=lb(a,c=>c.name==="first-paint"))return Oz(a.startTime)}let b;
S("csi_use_performance_navigation_timing")?b=Y.getEntriesByType("first-paint")[0].startTime:b=Y.timing.ri;return b?Math.max(0,b):0}
;function hA(a,b){R(()=>{Bz("").info.actionType=a;b&&mp("TIMING_AFT_KEYS",b);mp("TIMING_ACTION",a);var c=bA();Object.keys(c).length>0&&Wz(c);c={isNavigation:!0,actionType:Ez(P("TIMING_ACTION"))};var d=P("PREVIOUS_ACTION");d&&(c.previousAction=Ez(d));if(d=P("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=P("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=ux())&&d!=="UNDEFINED_CSN"&&(c.clientScreenNonce=d);d=aA();if(d===1||d===-1)c.isVisible=!0;sz();rz();c.loadType="cold";d=rz();var e=Nz();let f=Pz();const g=P("CSI_START_TIMESTAMP_MILLIS",
0);g>0&&!S("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Z("srt",e.responseStart),d.prerender!==1&&Xz(f));d=gA();d>0&&Z("fpt",d);d=Nz();d.isPerformanceNavigationTiming&&Wz({performanceNavigationTiming:!0},void 0);Z("nreqs",d.requestStart,void 0);Z("nress",d.responseStart,void 0);Z("nrese",d.responseEnd,void 0);d.redirectEnd-d.redirectStart>0&&(Z("nrs",d.redirectStart,void 0),Z("nre",d.redirectEnd,void 0));d.domainLookupEnd-d.domainLookupStart>0&&(Z("ndnss",d.domainLookupStart,void 0),
Z("ndnse",d.domainLookupEnd,void 0));d.connectEnd-d.connectStart>0&&(Z("ntcps",d.connectStart,void 0),Z("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=Pz()&&d.connectEnd-d.secureConnectionStart>0&&(Z("nstcps",d.secureConnectionStart,void 0),Z("ntcpe",d.connectEnd,void 0));Y&&"getEntriesByType"in Y&&dA();d=[];if(document.querySelector&&Y&&Y.getEntriesByName)for(var h in Sz)Sz.hasOwnProperty(h)&&(e=Sz[h],cA(h,e)&&d.push(e));if(d.length>0){c.resourceInfo=[];for(const k of d)c.resourceInfo.push({resourceCache:k})}Wz(c);
Uz();fA();h=P("TIMING_ACTION");w("ytglobal.timingready_")&&h&&iA()&&eA()&&Zz()})()}
function jA(){var a={};R(()=>{kA();var b=a.sampleRate;if(!S("web_csi_action_sampling_enabled")||b===void 0||b<=1)b=!1;else{var c=xz("attestation_challenge_fetch");b=By(c)%b!==0}b&&(pz("attestation_challenge_fetch").actionDisabled=!0);Bz("attestation_challenge_fetch").info.actionType="attestation_challenge_fetch";a.cttAuthInfo&&(pz("attestation_challenge_fetch").cttAuthInfo=a.cttAuthInfo);mp("attestation_challenge_fetchTIMING_ACTION","attestation_challenge_fetch");R(Xz)(a.startTime,"attestation_challenge_fetch");
b={actionType:Ez("attestation_challenge_fetch")};a.ni&&(b.previousAction=Ez(P("TIMING_ACTION")));(c=ux())&&c!=="UNDEFINED_CSN"&&(b.clientScreenNonce=c);lA(b,"attestation_challenge_fetch");fA("attestation_challenge_fetch")})()}
function kA(){R(()=>{iA("attestation_challenge_fetch")&&mA("aa",void 0,"attestation_challenge_fetch");const a=Cz();a.attestation_challenge_fetch&&delete a.attestation_challenge_fetch;const b={timerName:"attestation_challenge_fetch",info:{},tick:{},span:{},jspbInfo:[]};Az(b);a.attestation_challenge_fetch=b;qz("attestation_challenge_fetch");Tz();$z()})()}
function iA(a){return R(()=>nA("_start",a))()}
function lA(a,b,c=!1){R(Wz)(a,b,c)}
function mA(a,b,c){return R(Z)(a,b,c)}
function nA(a,b){return R(()=>{const c=tz(b);return a in c})()}
function oA(a){if(!S("universal_csi_network_ticks"))return"";a=Ab(a)||"";const b=Object.keys(xt);for(let c=0;c<b.length;c++){const d=b[c];if(a.includes(d))return d}return""}
function pA(a){if(!S("universal_csi_network_ticks"))return()=>{};
const b=xt[a];return b?(qA(b),()=>{var c=S("universal_csi_network_ticks")?(c=zt[a])?qA(c):!1:!1;return c}):()=>{}}
function qA(a){return R(()=>{if(nA(a))return!1;mA(a,void 0,void 0);return!0})()}
function rA(a){R(()=>{if(!iA("attestation_challenge_fetch")||nA(a,"attestation_challenge_fetch"))return!1;mA(a,void 0,"attestation_challenge_fetch");return!0})()}
function sA(){R(()=>{const a=xz();requestAnimationFrame(()=>{setTimeout(()=>{a===xz()&&mA("ol",void 0,void 0)},0)})})()}
const tA=window;tA.ytcsi&&(tA.ytcsi.infoGel=lA,tA.ytcsi.tick=mA);function uA(a,b){a.h=b}
async function vA(a){let b;if(t.ytAtP&&!S("ytatp_ks")){var c=await t.ytAtP;delete t.ytAtP;let e=c?.R;b=c?.T;e?a.i.h(1,a.j++):(a.i.h(2,a.j++),c=await a.yb(wA(b,null)),e=JSON.stringify(c));t.ytAtRC?t.ytAtRC(e):W(Error("ytAtRC not defined for ytAtP."))}else t.ytAtRC?rm.Xa(async()=>{b=t.ytAtT;delete t.ytAtT;if(t.ytAtRC){a.i.h(2,a.j++);var e=await a.yb(wA(b,null));t.ytAtRC&&t.ytAtRC(JSON.stringify(e))}else a.i.h(6,a.j++)},2,I("att_init_delay",0)):(b=t.ytAtT,delete t.ytAtT,a.i.h(1,a.j++));
c=await jz();c.bindInnertubeChallengeFetcher(e=>{a.i.h(3,a.j++);return a.yb(wA(b,e))});
c.registerChallengeFetchedCallback(e=>{e=e.challenge;if(!e)throw Error("BGE_MACR");e={challenge:e,wb:dz(e),vm:d,bgChallenge:new Pk};e=Promise.resolve(e);a.h=e});
const d=await Pb(gz());c=c.getLatestChallengeResponse().challenge;if(!c)throw Error("BGE_MACIL");return{challenge:c,wb:dz(c),vm:d,bgChallenge:new Pk}}
async function xA(a){var b=wA(void 0,Xk().h);let c;try{c=await yA(a,b)}catch(f){return W(Error("Failed to fetch attestation challenge after 5 attempts; not retrying for 24h.")),zA(a,864E5),{challenge:"",wb:{},vm:void 0,bgChallenge:void 0}}b=c.pf;const d=c.qf;zA(a,ez(d)*1E3);a=void 0;let e;if("c1a"in d&&c.bgChallenge){e=cz(c.bgChallenge);try{await al(Xk(),e)}catch(f){return W(f),{challenge:b,wb:d,vm:a,bgChallenge:e}}try{a=new Vk({challenge:e,Gb:{ka:"aGIf"}}),await a.Kb}catch(f){W(f),a=void 0}}return{challenge:b,
wb:d,vm:a,bgChallenge:e}}
async function yA(a,b){let c=void 0,d=0;for(;d<5;){if(d>0){const e=1E3*Math.pow(2,d-1)+Math.random()*1E3;await new Promise(f=>{Qq(()=>{f(void 0)},e)})}try{a.i.h(4,a.j++);
const e=await a.yb(b);return AA(e)}catch(e){c=e,e instanceof Error&&W(e)}d++}throw c;}
function zA(a,b){const c=Date.now()+b,d=async()=>{const e=c-Date.now();e<1E3?await BA(a):Qq(d,Math.min(e,6E4))};
d()}
async function CA(a,b){hz(2);try{const c=await a.network.yb(b);c?c.challenge&&!c.bgChallenge?hz(1):hz(4):hz(3);return c}catch(c){hz(3)}}
function AA(a){if(!a)throw Error("Fetching Attestation challenge returned falsy");if(!a.challenge)throw Error("Missing Attestation challenge");const b=a.challenge,c=dz(b);if("c1a"in c&&(!a.bgChallenge||!a.bgChallenge.program))throw Error("Expected bg challenge but missing.");return{...a,pf:b,qf:c}}
async function BA(a){const b=await Promise.race([a.h,null]);var c=xA(a);a.h=c;b?.vm?.dispose()}
var EA=class{constructor(a,b,c){this.network=a;this.options=b;this.H=c;this.j=0;this.h=null;this.i=new gm;b.Pd?uA(this,vA(this)):b.preload&&uA(this,new Promise(d=>{Qq(()=>{d(xA(this))},0)}))}async u(){return!!await Promise.race([this.h,
null])}async o(a,b,c){this.h===null&&uA(this,xA(this));let d=!1;const e={};return Promise.race([(async()=>{this.options.di&&this.options.Pd&&await (await fz())?.checkForRefresh();var f=await this.h;e.challenge=f.challenge;if(f.vm){var g={c:f.challenge,e:a,...b};try{d=!0;let h;(h=await f.vm.snapshot({Ka:g}))?e.webResponse=h:e.error="ATTESTATION_ERROR_VM_NO_RESPONSE"}catch{e.error="ATTESTATION_ERROR_VM_INTERNAL_ERROR"}}else"c1a"in f.wb&&(e.error="ATTESTATION_ERROR_VM_NOT_INITIALIZED");a==="ENGAGEMENT_TYPE_PLAYBACK"&&
(f=f.wb,g={},f.c6a&&(g.reportingStatus=String(Number(f.c)^oz())),f.c6b&&(g.broadSpectrumDetectionResult=String(Number(f.c)^Number(P("CATSTAT",0)))),e.adblockReporting=g);return e})(),
DA(c,()=>{const f=Object.assign({},e);d&&(f.error="ATTESTATION_ERROR_VM_TIMEOUT");return f})])}async yb(a){const b=this.H;
if(!b||b.ya())return CA(this,a);rA("att_pna");return new Promise(c=>{rj(b,"publicytnetworkstatus-online",()=>{CA(this,a).then(c)})})}};
function DA(a,b){return new Promise(c=>{Qq(()=>{c(b())},a)})}
function wA(a,b){const c={engagementType:"ENGAGEMENT_TYPE_UNBOUND"};a&&(c.eacrToken=a);b&&(c.interpreterHash=b);return c}
;const FA={WEB_UNPLUGGED:"^unplugged/",WEB_UNPLUGGED_ONBOARDING:"^unplugged/",WEB_UNPLUGGED_OPS:"^unplugged/",WEB_UNPLUGGED_PUBLIC:"^unplugged/",WEB_CREATOR:"^creator/",WEB_KIDS:"^kids/",WEB_EXPERIMENTS:"^experiments/",WEB_MUSIC:"^music/",WEB_REMIX:"^music/",WEB_MUSIC_EMBEDDED_PLAYER:"^music/",WEB_MUSIC_EMBEDDED_PLAYER:"^main_app/|^sfv/"};
function GA(a){if(a.length===1)return a[0];var b=FA.UNKNOWN_INTERFACE;if(b){b=new RegExp(b);for(var c of a)if(b.exec(c))return c}const d=[];Object.entries(FA).forEach(([e,f])=>{"UNKNOWN_INTERFACE"!==e&&d.push(f)});
c=new RegExp(d.join("|"));a.sort((e,f)=>e.length-f.length);
for(const e of a)if(!c.exec(e))return e;return a[0]}
;var JA=class{constructor(){this.h=HA.instance}yb(a){rA("att_fsr");return IA(this.h,a).then(b=>{rA("att_frr");return b})}};var KA=new yv("INNERTUBE_TRANSPORT_TOKEN");async function LA(){var a=Fv().resolve(KA);if(a){if(a=await MA(a)){if(a.errorMetadata){W(Error(`Datasync IDs fetch responded with ${a.errorMetadata.status}: ${a.error}`));return}return a.Yh}W(Error("Network request to get Datasync IDs failed."))}else W(Error("InnertubeTransportService unavailable in fetchDatasyncIds"))}
;function NA(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,typeof b.expirationSeconds==="string")){const c=Number(b.expirationSeconds);setTimeout(()=>{delete a.h[b.encryptedTokenJarContents]},c*1E3);
a.i&&xq("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
var OA=class{constructor(){this.h={};if(this.i=Aq()){const a=yq("CONSISTENCY");a&&NA(this,{encryptedTokenJarContents:a})}}handleResponse(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");b=b.Cb.context?.request?.consistencyTokenJars||[];if(a=a.responseContext?.consistencyTokenJar){for(const c of b)delete this.h[c.encryptedTokenJarContents];NA(this,a)}}};const PA=window.location.hostname.split(".").slice(-2).join(".");function QA(a){return a.localStorage===void 0?new wr("yt-client-location"):a.localStorage}
function RA(){SA=w("yt.clientLocationService.instance");SA||(SA=new TA,v("yt.clientLocationService.instance",SA));return SA}
var TA=class{constructor(){this.j=-1;let a=P("LOCATION_PLAYABILITY_TOKEN");P("INNERTUBE_CLIENT_NAME")==="TVHTML5"&&(this.localStorage=QA(this))&&(a=this.localStorage.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=this.h=void 0)}setLocationOnInnerTubeContext(a){a.client||(a.client={});if(this.h)a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(this.h.coords.latitude*1E7),a.client.locationInfo.longitudeE7=Math.floor(this.h.coords.longitude*
1E7),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.h.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0;else if(this.o||this.locationPlayabilityToken)a.client.locationPlayabilityToken=this.o||this.locationPlayabilityToken}getXGeoHeader(){if(this.i){var a=this.i;var b=Math.floor(a.coords.longitude*1E7);var c=Math.floor(a.coords.latitude*1E7);var d=new wm;c=G(d,1,je(c));b=G(c,2,je(b));c=new zm;c=yf(c,1,1);c=yf(c,2,12);c=yf(c,9,8);c=G(c,3,se(a.timestamp*1E3));
a=G(c,7,ce(a.coords.accuracy*1E3));a=yf(a,25,2);a=sf(a,wm,5,b);a=`w ${Vc(Am(a),4)}`}else a=null;return a}handleResponse(a){a=a.responseContext?.locationPlayabilityToken;a!==void 0&&(this.locationPlayabilityToken=a,this.i=this.h=void 0,P("INNERTUBE_CLIENT_NAME")==="TVHTML5"?(this.localStorage=QA(this))&&this.localStorage.set("yt-location-playability-token",a,15552E3):xq("YT_CL",JSON.stringify({loctok:a}),15552E3,PA,!0))}clearLocationPlayabilityToken(a){a==="TVHTML5"?(this.localStorage=QA(this))&&this.localStorage.remove("yt-location-playability-token"):
zq("YT_CL");this.o=void 0;this.j!==-1&&(clearTimeout(this.j),this.j=-1)}clearCurrentPosition(){this.i=this.h=void 0}getCurrentPositionFromGeolocation(a){if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));let b=!1,c=1E4;P("INNERTUBE_CLIENT_NAME")==="MWEB"&&(b=!0,c=15E3);return new Promise((d,e)=>{navigator.geolocation.getCurrentPosition(f=>{this.i=a?.addToHeaders?f:void 0;this.h=f;d(f)},f=>{e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})}createUnpluggedLocationInfo(a){const b={};
a=a.coords;a?.latitude&&(b.latitudeE7=Math.floor(a.latitude*1E7));a?.longitude&&(b.longitudeE7=Math.floor(a.longitude*1E7));a?.accuracy&&(b.locationRadiusMeters=Math.round(a.accuracy));return b}createLocationInfo(a){const b={};a=a.coords;a?.latitude&&(b.latitudeE7=Math.floor(a.latitude*1E7));a?.longitude&&(b.longitudeE7=Math.floor(a.longitude*1E7));return b}},SA;function UA(a,b=!1,c=!1){var d=P("INNERTUBE_CONTEXT");if(!d)return Xw(Error("Error: No InnerTubeContext shell provided in ytconfig.")),{};d=Uh(d);S("web_no_tracking_params_in_shell_killswitch")||delete d.clickTracking;d.client||(d.client={});var e=d.client;e.clientName==="MWEB"&&e.clientFormFactor!=="AUTOMOTIVE_FORM_FACTOR"&&(e.clientFormFactor=P("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");e.screenWidthPoints=window.innerWidth;e.screenHeightPoints=window.innerHeight;e.screenPixelDensity=
Math.round(window.devicePixelRatio||1);e.screenDensityFloat=window.devicePixelRatio||1;e.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());Cq();var f="USER_INTERFACE_THEME_LIGHT";Fq(165)?f="USER_INTERFACE_THEME_DARK":Fq(174)?f="USER_INTERFACE_THEME_LIGHT":!S("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(f="USER_INTERFACE_THEME_DARK");f=bz()||f;e.userInterfaceTheme=f;if(!b){if(f=
Mq())e.connectionType=f;S("web_log_effective_connection_type")&&(f=Nq())&&(d.client.effectiveConnectionType=f)}S("web_log_memory_total_kbytes")&&t.navigator?.deviceMemory&&(d.client.memoryTotalKbytes=`${t.navigator?.deviceMemory*1E6}`);if(S("web_gcf_hashes_innertube")){var g=pt();if(g){f=g.coldConfigData;const p=g.coldHashData;g=g.hotHashData;d.client.configInfo=d.client.configInfo||{};f&&(d.client.configInfo.coldConfigData=f);p&&(d.client.configInfo.coldHashData=p);g&&(d.client.configInfo.hotHashData=
g)}}f=zp(t.location.href);!S("web_populate_internal_geo_killswitch")&&f.internalcountrycode&&(e.internalGeo=f.internalcountrycode);e.clientName==="MWEB"||e.clientName==="WEB"?(e.mainAppWebInfo||(e.mainAppWebInfo={}),e.mainAppWebInfo.graftUrl=t.location.href,S("kevlar_woffle")&&tq.instance&&(f=tq.instance,e.mainAppWebInfo.pwaInstallabilityStatus=!f.h&&f.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),e.mainAppWebInfo.webDisplayMode=sq(),e.mainAppWebInfo.isWebNativeShareAvailable=
navigator&&navigator.share!==void 0):e.clientName==="TVHTML5"&&(!S("web_lr_app_quality_killswitch")&&(f=P("LIVING_ROOM_APP_QUALITY"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{appQuality:f})),f=P("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{certificationScope:f}));if(!S("web_populate_time_zone_itc_killswitch")){a:{if(typeof Intl!=="undefined")try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break a}catch{}h=void 0}h&&(e.timeZone=h)}(h=P("EXPERIMENTS_TOKEN",
""))?e.experimentsToken=h:delete e.experimentsToken;e=Op();OA.instance||(OA.instance=new OA);h=Mh(OA.instance.h);d.request={...d.request,internalExperimentFlags:e,consistencyTokenJars:h};!S("web_prequest_context_killswitch")&&(e=P("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(d.request.externalPrequestContext=e);h=Cq();e=Fq(58);h=h.get("gsml","");d.user={...d.user};e&&(d.user.enableSafetyMode=e);h&&(d.user.lockedSafetyMode=!0);S("warm_op_csn_cleanup")?c&&(b=ux())&&(d.clientScreenNonce=b):!b&&(b=ux())&&
(d.clientScreenNonce=b);a&&(d.clickTracking={clickTrackingParams:a});if(a=w("yt.mdx.remote.remoteClient_"))d.remoteClient=a;RA().setLocationOnInnerTubeContext(d);try{var k=Dp(),l=k.bid;delete k.bid;d.adSignalsInfo={params:[],bid:l};for(const [p,m]of Object.entries(k))k=p,l=m,d.adSignalsInfo.params?.push({key:k,value:`${l}`});if(d.client?.clientName==="TVHTML5"||d.client?.clientName==="TVHTML5_UNPLUGGED"){const p=P("INNERTUBE_CONTEXT");p.adSignalsInfo&&(d.adSignalsInfo.advertisingId=p.adSignalsInfo.advertisingId,
d.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",d.adSignalsInfo.limitAdTracking=p.adSignalsInfo.limitAdTracking)}}catch(p){Xw(p)}return d}
;function VA(a){const b={"Content-Type":"application/json"};P("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=P("EOM_VISITOR_DATA"):P("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=P("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=P("LOGGED_IN",!1);P("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=P("DEBUG_SETTINGS_METADATA"));a!=="cors"&&((a=P("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=P("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=
P("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),(a=P("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a),(a=RA().getXGeoHeader())&&(b["X-Geo"]=a));(a=P("SERIALIZED_LAVA_DEVICE_CONTEXT"))&&(b["X-YouTube-Lava-Device-Context"]=a);return b}
;function WA(a){return()=>new a}
;var XA=class{u(a,b={},c=wq){var d={context:UA(a.clickTrackingParams,!1,this.o)};var e=this.i(a);if(e){this.h(d,e,b);e=`/youtubei/v1/${GA(this.j())}`;const f=ew(a.commandMetadata,Uo)?.apiUrl;f&&(e=f);e=Hx(Gx(e));a={command:a,...(void 0)};d={input:e,Ua:Ix(e),Cb:d,config:a};d.config.Qb?d.config.Qb.identity=c:d.config.Qb={identity:c};b.abortSignal&&(d.Ua.signal=b.abortSignal);return d}b=new T("Error: Failed to create Request from Command.",a);Xw(b)}get o(){return!1}},YA=class extends XA{};const ZA={GET_DATASYNC_IDS:WA(class extends YA{u(){return{input:"/getDatasyncIdsEndpoint",Ua:Ix("/getDatasyncIdsEndpoint","GET"),Cb:{}}}j(){return[]}i(){}h(){}})};const $A="tokens consistency service_params mss client_location entities adblock_detection response_received_commands store manifest player_preload shorts_prefetch".split(" "),aB=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PanelResponse"];
function bB(a,b,c){var d=cB;if(HA.instance!==void 0){if(c=HA.instance,a=[d!==c.o,a!==c.ha,b!==c.i,!1,!1,!1,!1],a.some(e=>e))throw new T("InnerTubeTransportService is already initialized",a);
}else HA.instance=new HA(d,a,b,c)}
function IA(a,b){var c=`/youtubei/v1/${GA(Zx)}`,d={Qb:{identity:wq}};let e=()=>{};
e=pA(oA(c));b.context||(b.context=UA(void 0,!0));return new Mj(async f=>{var g=Gx(c);g=Cp(g)?"same-origin":"cors";g=a.i.Md?dB(d,g):await eB(d,g);var h=Hx(Gx(c));h={input:h,Ua:Ix(h),Cb:b,config:d};f(fB(a,h,g,e))})}
function MA(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};const c=gB(a,b);return c?new Mj(async(d,e)=>{const f=(await c).u(b,void 0,wq);f?(Xy(f.input),e=f.Ua?.mode==="cors"?"cors":void 0,e=a.i.Md?dB(f.config,e):await eB(f.config,e),d(fB(a,f,e))):e(new T("Error: Failed to build request for command.",b))}):Rj(new T("Error: No request builder found for command.",b))}
function gB(a,b){a:{a=a.o;var c=ew(b,Vo)?.signal;if(c&&a.dc&&(c=a.dc[c])){var d=c();break a}if((c=ew(b,To)?.request)&&a.te&&(c=a.te[c])){d=c();break a}for(d in b)if(a.pd[d]&&(b=a.pd[d])){d=b();break a}d=void 0}if(d!==void 0)return Promise.resolve(d)}
function dB(a,b){a=uq({sessionIndex:a?.Qb?.sessionIndex});return{...VA(b),...a}}
async function eB(a,b){a=uq({sessionIndex:a?.Qb?.sessionIndex});if(!(a instanceof Mj)){var c=new Mj(Kj);Nj(c,2,a);a=c}a=await a;return Promise.resolve({...VA(b),...a})}
async function fB(a,b,c,d=()=>{}){await hB(b);
const e=b.config?.requestKey;if(e&&a.h.has(e))var f=a.h.get(e);else f=JSON.stringify(b.Cb),b.Ua={...b.Ua,headers:{...(b.Ua?.headers??{}),...c}},c={...b.Ua},b.Ua.method==="POST"&&(c={...c,body:f}),b.config?.uf&&mA(b.config.uf),f=a.ha.fetch(b.input,c,b.config),e&&a.h.set(e,f);(f=await f)&&S("web_streaming_player")&&Array.isArray(f)&&(f=f[0].playerResponse);if(f&&"error"in f&&f?.error?.details){c=f.error.details;for(const g of c)(c=g["@type"])&&aB.indexOf(c)>-1&&(delete g["@type"],f=g)}e&&a.h.has(e)&&
a.h.delete(e);b.config?.wf&&mA(b.config.wf);iB(a,f,b);b.config?.tf&&mA(b.config.tf);d();return f||void 0}
async function hB(a){if(a?.Cb?.context){a=a.Cb.context;for(const b of[])await b.yi(a)}}
function iB(a,b,c){if(b&&!b?.sequenceMetaData?.skipProcessing&&a.j)for(const d of $A)a.j[d]&&a.j[d].handleResponse(b,c)}
var HA=class{constructor(a,b,c,d){this.o=a;this.ha=b;this.i=c;this.j=d;this.h=new Map;a.dc||(a.dc={});a.dc={...ZA,...a.dc}}};var jB=class extends YA{j(){return ey}get o(){return!0}i(a){return ew(a,fp)||void 0}h(a,b,c={}){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)}};var kB=class extends YA{j(){return fy}get o(){return!0}i(a){return ew(a,ep)||void 0}h(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)}};var lB=class extends YA{constructor(a){super();this.H=a}j(){return $x}i(a){return ew(a,Zo)||ew(a,$o)||ew(a,Yo)}h(a,b){b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);b.clientParamIdentifier&&this.H?.h(b.clientParamIdentifier)&&(a.clientParams=this.H.i(b.clientParamIdentifier))}};lB[xv]=[new yv("SHARE_CLIENT_PARAMS_PROVIDER_TOKEN")];var mB=class extends YA{j(){return by}get o(){return!0}i(a){return ew(a,Xo)||void 0}h(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))}};var nB=class extends YA{j(){return by}i(a){return ew(a,dp)}get o(){return!0}h(a,b){b.undoToken&&(a.feedbackTokens=[b.undoToken]);b.isUndoTokenUnencrypted&&(a.isFeedbackTokenUnencrypted=b.isUndoTokenUnencrypted)}};var oB=class extends YA{j(){return cy}i(a){return ew(a,cp)||void 0}h(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)}};var pB=class extends YA{j(){return dy}i(a){return ew(a,bp)||void 0}h(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)}};var qB=class extends YA{j(){return ay}i(a){return ew(a,ap)}h(a,b,c={}){b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)}};let rB=t.caches,sB;function tB(a){const b=a.indexOf(":");return b===-1?{Bd:a}:{Bd:a.substring(0,b),datasyncId:a.substring(b+1)}}
async function uB(){return sB!==void 0?sB:sB=new Promise(async a=>{try{await rB.open("test-only"),await rB.delete("test-only")}catch(b){if(b instanceof Error&&b.name==="SecurityError"){a(!1);return}}a("caches"in window)})}
async function vB(a){if(await uB()){var b=[],c=await rB.keys();for(const d of c)({datasyncId:c}=tB(d)),!c||a.includes(c)||b.push(rB.delete(d));Promise.all(b).then(d=>d.some(e=>e))}}
async function wB(){if(!await uB())return!1;const a=Pq("cache contains other");var b=await rB.keys();for(const c of b)if({datasyncId:b}=tB(c),b&&b!==a)return!0;return!1}
;function xB(){try{return!!self.sessionStorage}catch{return!1}}
;function yB(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function zB(a){if(xB()){var b=Object.keys(window.sessionStorage);for(const c of b)b=yB(c),b===void 0||a.includes(b)||self.sessionStorage.removeItem(c)}}
function AB(){if(!xB())return!1;const a=Pq();var b=Object.keys(window.sessionStorage);for(const c of b)if(b=yB(c),b!==void 0&&b!==a)return!0;return!1}
;function BB(){LA().then(a=>{a&&(Ts(a),vB(a),Sy(a),zB(a))})}
function CB(){var a=new Lu;rm.va(async()=>{if(!S("ytidb_clear_optimizations_killswitch")){var b=Pq("clear");if(b.startsWith("V")&&b.endsWith("||")){b=[b];Ts(b);vB(b);Sy(b);zB(b);return}b=Ty();const c=AB(),d=await wB(),e=await Us();if(!(b||c||d||e))return}a.ya()?BB():rj(a,"publicytnetworkstatus-online",BB)})}
;function DB(a){return new Promise(b=>{window.setTimeout(b,a)})}
async function kl(a,b,c){jA();mA("att_fs",void 0,"attestation_challenge_fetch");if(!a.h)throw new lk(9,"Missing fetcher");const d=await a.h(b,c);b=d?.bgChallenge;if(!b)throw new lk(15,"Missing field");a.i=d;a.j.forEach(e=>{e(d)});
a=cz(b);mA("att_fc",void 0,"attestation_challenge_fetch");kA();return a}
async function Tl(a,b){const c=new yi(100,3E5,.25,2);let d=void 0;for(;c.i<10;)try{return c.i>0&&await DB(c.getValue()),await EB(a,b)}catch(e){d=e instanceof lk?e:new lk(9,e instanceof Error?e.message:"Unknown"),zi(c)}if(d)throw d;throw new lk(9,"Unknown error");}
function EB(a,b){b=dl(el(new fl,b),a.requestKey);const c=new Tk,d=a.u();d.open("POST",a.o);d.setRequestHeader("X-Goog-Api-Key","AIzaSyDyT5W0Jh49F30Pqqtyfdf7pDLFKLJoAnw");d.setRequestHeader("Content-Type","application/json+protobuf");d.onload=()=>{if(Hp(d)){const e=pm(d.responseText);c.resolve(e)}else c.reject(new lk(jk(Ip(d)),d.statusText))};
d.onerror=()=>{c.reject(new lk(jk(Ip(d)),d.statusText))};
d.send(b.serialize());return c.promise}
var FB=class{constructor(a,b,c){this.requestKey=a;this.o=b;this.i=c;this.u=()=>new XMLHttpRequest;
this.h=void 0;this.j=[]}getLatestChallengeResponse(){return this.i}};function GB(a){const b={bicf:d=>{a.h=d},
blc:()=>a.getLatestChallengeResponse(),
bcr:d=>{a.j.push(d)}},c=window;
c.ntpevasrs=b;if(c.ntpqfbel!==void 0)for(const d of c.ntpqfbel)d(b);c.ntpqfbel=void 0}
;function HB(a){if(a instanceof Error){var b=w("yt.logging.errors.log");b&&b(a,"WARNING")}}
;function IB(a,b){a=new JB(a,b);KB(a);b?.ai||LB(a)}
function KB(a){if(!a.vm){var b={maxAttempts:5,Fd:a.ttlSeconds*1E3};a.Rb.ytcsi?.tick?.("pot_ist");a.vm=a.Td({Oa:a.Oa,Gb:{disable:S("html5_web_po_disable_remote_logging"),ka:"aGIf",Je:Mp(),hf:S("wpo_dis_lfdms")?0:1E3,Mb:d=>{var e=Py.get(d);e||(e=new Oy(d),e=new ik(e),Py.set(d,e));return e}},
Nb:b,Se:a.bgChallenge,zc:HB});a.h=Date.now();pl(a.vm,()=>{a.h=Date.now()});
a.Rb.bgevmc={p:()=>{a.vm?.pause()},
r:()=>{a.vm?.resume()},
cr:()=>a.vm?.checkForRefresh()??Promise.resolve()};
Wb(a.vm,async()=>LB(a),gz());
var c=a.j.bind(a);a.Zc&&a.ttlSeconds>0&&a.Zc.then(d=>{d.listen("publicytnetworkstatus-online",c)});
a.Gd(c)}}
function LB(a){if(a.i)return a.i;if(!a.vm)throw Error("VMNI");a.i=new cm({vm:a.vm,Oa:a.Oa,ld:!0,onError:HB,Nb:a.Vd});return a.i}
var JB=class{constructor(a,b){this.h=0;this.Rb=b?.Rb??window;this.Zc=b?.Zc;this.requestKey=b?.requestKey??(Np("par_bir_key")||"O43z0dpjhgX20SCx4KAo");this.Td=b?.Td??(d=>new sl(d));
const c=b?.gi??((d,e,f)=>new FB(d,e,f));
this.bgChallenge=cz(a.bgChallenge);this.ttlSeconds=ez(dz(a.challenge||""));this.Oa=c(this.requestKey,S("par_at_ep")?["www.youtube.com","m.youtube.com"].includes(t.location.hostname)?"/api/jnn/v1/GenerateIT":"https://jnn-pa.googleapis.com/$rpc/google.internal.waa.v1.Waa/GenerateIT":"https://jnn-pa.googleapis.com/$rpc/google.internal.waa.v1.Waa/GenerateIT",a);this.Vd=b?.Vd;GB(this.Oa);this.Gd=b?.Gd??(d=>{jj(this.Rb.document,"visibilitychange",()=>{this.Rb.document.visibilityState==="visible"&&d()})})}j(){Date.now()>
this.h+this.ttlSeconds*1E3&&this.vm?.G()}};
function MB(a){try{const b=JSON.parse(a);if(b.bgChallenge)return b}catch(b){}}
function NB(a=window){var b={},c=a.ytAtR;b?.vd?.zi();if(c){if(c=MB(c))b?.vd?.Ed("SUCCESS"),IB(c,b);a.ytAtR=void 0}else a.ytAtRC=d=>{if(d=MB(d))b?.vd?.Ed("SUCCESS"),IB(d,b),a.ytAtRC=void 0}}
;const OB=["www.youtube-nocookie.com","www.youtubeeducation.com","youtube.googleapis.com"];function PB(a,b,c,d,e,f){c?(a.state=2,iy(No(c),()=>{window.trayride?QB(a,d,e):(a.state=3,ky(c),W(new T("BL:ULB",`${c}`)))},f)):b?(f=$h("SCRIPT"),b instanceof Xa?(f.textContent=Za(b),$a(f)):f.textContent=b,f.nonce=Wa(document),document.head.appendChild(f),document.head.removeChild(f),window.trayride?QB(a,d,e):(a.state=4,W(new T("BL:ULBJ")))):W(new T("BL:ULV"))}
function QB(a,b,c){a.state=5;const d=!!a.h&&OB.includes(zb(a.h)||"");try{const e=new Vk({program:b,globalName:"trayride",Gb:{disable:!S("att_web_record_metrics")||!S("att_skip_metrics_for_cookieless_domains_ks")&&d,ka:"aGIf"}});e.Kb.then(()=>{a.state=6;c&&c(b)});
a.i(e)}catch(e){a.state=7,e instanceof Error&&W(e)}}
var RB=class{constructor(){this.state=1;this.vm=null;this.h=void 0}initialize(a,b,c,d){this.h=d;if(a.program){var e;d=a.interpreterUrl??null;a.interpreterSafeScript?e=Lo(a.interpreterSafeScript):e=a.interpreterScript??null;a.interpreterSafeUrl&&(d=Mo(a.interpreterSafeUrl).toString());PB(this,e,d,a.program,b,c)}else W(Error("BL:CIP"))}isLoading(){return this.state===2}invoke(a={}){return this.j()?this.o({Ka:a}):null}dispose(){this.i(null);this.state=8}j(){return!!this.vm}o(a){return this.vm.Kd(a)}i(a){Mb(this.vm);
this.vm=a}};function SB(){const a=w("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(b=>b in a)?a:null}
;var TB=class extends RB{i(a){SB()?.bgvma();if(a){const b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.Kd.bind(a)};v("yt.abuse.playerAttLoader",b);v("yt.abuse.playerAttLoaderRun",c=>a.snapshot(c))}else v("yt.abuse.playerAttLoader",null),v("yt.abuse.playerAttLoaderRun",null)}j(){return!!SB()}o(a){return SB().bgvmc(a)}};var UB=new yv("AUTH_SERVICE_TOKEN");var VB=class extends Wv{constructor(){super("document_active");this.i=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.F},{from:"document_active",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"flush_logs",action:this.H},{from:"document_disposed_preventable",to:"document_active",action:this.j},{from:"document_disposed",to:"flush_logs",
action:this.H},{from:"document_disposed",to:"document_active",action:this.j},{from:"document_disposed",to:"document_disposed",action:()=>{}},
{from:"flush_logs",to:"document_active",action:this.j}];window.addEventListener("pagehide",a=>{this.transition("document_disposed",{event:a});a.persisted===!1&&(this.h=new Map)});
window.addEventListener("beforeunload",a=>{this.transition("document_disposed_preventable",{event:a})})}F(a,b){if(!this.h.get("document_disposed_preventable")&&(a(b?.event),b?.event?.defaultPrevented||b?.event?.returnValue)){b.event.returnValue||(b.event.returnValue=!0);
b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")}u(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b?.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))}H(a,b){a(b?.event);this.transition("document_active")}j(){this.h=new Map}};var WB=class extends Wv{constructor(){super("document_visibility_unknown");this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.j},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.H},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.u},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.H},{from:"document_visible",to:"document_visible",action:this.j},{from:"document_foregrounded",to:"document_visible",action:this.j},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.H},{from:"document_hidden",to:"document_visible",action:this.j},{from:"document_hidden",to:"document_backgrounded",action:this.u},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.u},{from:"document_backgrounded",to:"document_visible",action:this.j}];document.addEventListener("visibilitychange",a=>{document.visibilityState==="visible"?this.transition("document_visible",{event:a}):this.transition("document_hidden",{event:a})});
S("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",a=>{this.transition("document_backgrounded",{event:a})}),window.addEventListener("focus",a=>{this.transition("document_foregrounded",{event:a})}))}j(a,b){a(b?.event);
S("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")}h(a,b){a(b?.event);S("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")}u(a,b){a(b?.event)}H(a,b){a(b?.event)}};var XB=class{constructor(){this.o=new VB;this.u=new WB}install(...a){a.forEach(b=>{this.o.install(b)});
a.forEach(b=>{this.u.install(b)})}};function YB(a,b,c,d=0){if(!b)return!1;d=ux(d);if(!d)return!1;a=a.client;b=new mx({trackingParams:b});var e=void 0;if(S("no_client_ve_attach_unless_shown")){var f=Ky(b,d);Gy.set(f,!0);Ly(b,d)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=Jy({cttAuthInfo:wx(d)||void 0,automatedLogEventSource:void 0},d);b={csn:d,ve:b.getAsJson(),gestureType:e};c&&(b.clientData=c);d==="UNDEFINED_CSN"?My("visualElementGestured",f,b):a?Pw("visualElementGestured",b,a,f):Er("visualElementGestured",b,f);return!0}
function ZB(a,b,c,d=0){const e=ux(d);b=b||rx(d);e&&b&&(a=a.client,d=Jy({cttAuthInfo:wx(e)||void 0},e),c={csn:e,ve:b.getAsJson(),clientData:c},e==="UNDEFINED_CSN"?My("visualElementStateChanged",d,c):a?Pw("visualElementStateChanged",c,a,d):Er("visualElementStateChanged",c,d))}
function $B(a,b){if(b===void 0){const c=tx();for(let d=0;d<c.length;d++)c[d]!==void 0&&$B(a,c[d])}else a.i.forEach((c,d)=>{(d=a.h.get(d))&&Iy(a.client,b,d,c)}),a.i.clear(),a.h.clear()}
var aC=class{constructor(){this.o=[];this.i=new Map;this.h=new Map;this.j=new Set}clickCommand(a,b,c=0){return YB(this,a.clickTrackingParams,b,c)}stateChanged(a,b,c=0){this.visualElementStateChanged(new mx({trackingParams:a}),b,c)}visualElementStateChanged(a,b,c=0){c===0&&this.j.has(c)?this.o.push([a,b]):ZB(this,a,b,c)}};var cC=class extends XB{constructor(){super();this.install({document_disposed:{callback:this.h}});S("combine_ve_grafts")&&this.install({document_disposed:{callback:this.i}});this.install({flush_logs:{callback:this.j}});S("web_log_cfg_cee_ks")||Qq(bC)}j(){Er("finalPayload",{csn:ux()})}h(){fx(hx)}i(){var a=$B;aC.instance||(aC.instance=new aC);a(aC.instance)}};
function bC(){const a=P("CLIENT_EXPERIMENT_EVENTS");if(a){var b=Id();for(const c of a)b(c)&&Er("genericClientExperimentEvent",{eventType:c});delete lp.CLIENT_EXPERIMENT_EVENTS}}
;var dC=class extends T{constructor(a,...b){super(a,b);this.errorType=1;Object.setPrototypeOf(this,new.target.prototype)}};function eC(a,b,c){if(a.h){const d=Ab(Kb(b,"key"))||"/UNKNOWN_PATH";a.h.start(d)}a=c;S("wug_networking_gzip_request")&&(a=Tt(c));return new window.Request(b,a)}
async function fC(a,b,c,d,e){const {value:f,done:g}=await b.read();if(g)return a.h?.success(),d;let h;try{h=c.parse(f)}catch(k){throw new dC("Failed to parse streaming response",f);}if(h!=null)for(const k of h)d.push(k),e?.(k);return fC(a,b,c,d,e)}
var gC=class{constructor(a){this.h=a}async fetch(a,b,c,d){a=eC(this,a,b);try{const e=await fetch(a);if(S("web_unified_fetch")&&d&&e.ok&&e.body&&typeof e.body.getReader==="function"){const f=e.clone().body.getReader(),{value:g}=await f.read();f.cancel().catch(()=>{});
if(g&&g[0]===91){const h=e.body.pipeThrough(new TextDecoderStream).getReader();return fC(this,h,new Rm,[],d)}}return await this.handleResponse(e,c)}catch(e){if(W(e),c?.Ie&&e instanceof dC&&e.errorType===1)throw e;}}handleResponse(a,b){let c;c=a.text().then(d=>{if(b?.af&&a.ok)return lg(b.af,d);d=d.replace(")]}'","");let e;if(b?.Ie&&d)try{e=JSON.parse(d)}catch(f){throw new dC("JSON parsing failed after fetch");}return e??JSON.parse(d)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.fi(),c=c.then(d=>{W(new T("Error: API fetch failed",a.status,a.url,d));return{...d,errorMetadata:{status:a.status}}}));
return c}};gC[xv]=[new zv(new yv("NETWORK_SLI_TOKEN"))];var hC=new yv("NETWORK_MANAGER_TOKEN");function iC(){let a=w("ytglobal.storage_");a||(a=new jC,v("ytglobal.storage_",a));return a}
var jC=class{async estimate(){const a=navigator;if(a.storage?.estimate)return a.storage.estimate();if(a.webkitTemporaryStorage?.queryUsageAndQuota)return kC()}};function kC(){const a=navigator;return new Promise((b,c)=>{a.webkitTemporaryStorage?.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota((d,e)=>{b({usage:d,quota:e})},d=>{c(d)}):c(Error("webkitTemporaryStorage is not supported."))})}
v("ytglobal.storageClass_",jC);function lC(a,b){iC().estimate().then(c=>{a.h("idbQuotaExceeded",{...b,isSw:self.document===void 0,isIframe:self!==self.top,deviceStorageUsageMbytes:mC(c?.usage),deviceStorageQuotaMbytes:mC(c?.quota)})})}
class Fr{constructor(a,b){this.handleError=a;this.h=b;this.i=!1;self.document===void 0||self.addEventListener("beforeunload",()=>{this.i=!0});
this.j=Math.random()<=.2}ta(a){this.handleError(a)}logEvent(a,b){switch(a){case "IDB_DATA_CORRUPTED":S("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":S("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":lC(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=.1&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":this.h("idbTransactionAborted",
{...b,hasWindowUnloaded:this.i})}}}function mC(a){return typeof a==="undefined"?"-1":String(Math.ceil(a/1048576))}
;var cB={pd:{feedbackEndpoint:WA(mB),modifyChannelNotificationPreferenceEndpoint:WA(oB),playlistEditEndpoint:WA(pB),shareEntityEndpoint:WA(lB),subscribeEndpoint:WA(jB),undoFeedbackEndpoint:WA(nB),unsubscribeEndpoint:WA(kB),webPlayerShareEntityServiceEndpoint:WA(qB)}};function nC(){const a=Fv();Av(a,{Zb:hC,jd:gC});Av(a,{Zb:UB,jd:vq});const b=RA(),c=a.resolve(UB),d=a.resolve(hC),e={};b&&(e.client_location=b);bB(d,c,e);Av(a,{Zb:KA,Qd:HA.instance})}
;const oC=new Map;function pC(a,b,c,d=()=>{},e=null){b=new qC(a,b,c,d,e);
oC.set(a,b)}
function rC(a){if(!a.onReadyPatchApplied){var b=a.addEventListener;a.addEventListener=(c,d)=>{c==="onReady"?Promise.resolve().then(()=>{d(a)}):b.call(a,c,d)};
a.onReadyPatchApplied=!0}}
function sC(a){if(w("yt.player.Application.create"))Promise.resolve().then(()=>{tC(a)});
else{uC(Mo(a.webPlayerContextConfig.trustedJsUrl),()=>{tC(a)},()=>{a.I||a.zc()});
const b=a.webPlayerContextConfig.trustedCssUrl;b&&vC(Mo(b))}}
function tC(a){if(!a.I){var b=w("yt.player.Application.create");try{a.api=b(a.container,{args:a.playerVars},a.webPlayerContextConfig,void 0).getInternalApi(),rC(a.api),a.api.isReady=()=>!0,a.h(a.api)}catch(c){throw a.zc(),c;
}}}
var qC=class extends y{constructor(a,b,c,d,e){super();this.container=a;this.webPlayerContextConfig=b;this.h=c;this.zc=d;this.playerVars=e;sC(this)}ba(){this.api&&this.api.destroy();ai(this.container);super.ba()}};function vC(a){const b=`ytp-${a.toString()}`;if(!document.getElementById(b)){var c=document.createElement("link");c.id=b;fb(c,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(c)}}
function uC(a,b,c){const d=`ytp-${a.toString()}`,e=document.getElementById(d);if(e)e.dataset.failed?c():e.dataset.loaded?b():(e.addEventListener("error",()=>{c()}),e.addEventListener("load",()=>{b()}));
else{var f=document.createElement("script");f.id=d;f.addEventListener("error",()=>{f.dataset.failed="true";c()});
f.addEventListener("load",()=>{f.dataset.loaded="true";b()});
ab(f,a);a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(f,a.firstChild)}}
;function wC(a){P("ENABLE_WEBVIEW_API")&&window.ytwebviewplayer&&(window.addEventListener("message",b=>{try{const d=JSON.parse(b.data),e=d.methodName,f=d.args||[];a:{for(const g of f)if(String(g).includes("javascript:")){var c=!0;break a}c=!1}if(c)throw Error(`Dangerous call to "${e}" with [${f}].`);if(e&&typeof a[e]==="function")a[e](...f);else throw Error(`Unknown API method: "${e}".`);}catch(d){Xw(d)}}),a.addEventListener("onReady",()=>{window.ytwebviewplayer.postMessage(JSON.stringify({type:"onPlayerReady"}))}),
a.addEventListener("onStateChange",b=>{window.ytwebviewplayer.postMessage(JSON.stringify({type:"onStateChange",
state:b}))}),a.addEventListener("onError",b=>{window.ytwebviewplayer.postMessage(JSON.stringify({type:"onError",
errorCode:b}))}))}
;const xC={["api.invalidparam"]:2,auth:150,["drm.auth"]:150,["heartbeat.net"]:150,["heartbeat.servererror"]:150,["heartbeat.stop"]:150,["html5.unsupportedads"]:5,["fmt.noneavailable"]:5,["fmt.decode"]:5,["fmt.unplayable"]:5,["html5.missingapi"]:5,["html5.unsupportedlive"]:5,["drm.unavailable"]:5,["mrm.blocked"]:151,["embedder.identity.denied"]:152,["embedder.identity.missing.referrer"]:153};const yC=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn playmuted muted_autoplay_duration_mode".split(" "));function zC(a){return(a.search("cue")===0||a.search("load")===0)&&a!=="loadModule"}
function AC(a,b,c){if(typeof a==="string")return{videoId:a,startSeconds:b,suggestedQuality:c};b={};for(const e of yC)a[e]&&(b[e]=a[e]);if(a=a.embedConfig||a.embed_config){a:if(typeof a==="string")var d=a;else{if(ma(a))try{d=JSON.stringify(a);break a}catch(e){console.error("Invalid embedConfig JSON",e)}d=void 0}b.embed_config=d}return b}
function BC(a,b,c,d){if(ma(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){const e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};typeof a==="string"&&a.length===16?b.list="PL"+a:b.playlist=a;return b}
;function CC(a,b,c){a.o.push({eventType:b,listener:c});a.api.addEventListener(b,c)}
function DC(a){if(a.h)if(a.j)a.sendMessage("alreadyInitialized");else if(a.F){a.j=!0;a.F=!1;a.sendMessage("initialDelivery",EC(a));a.sendMessage("onReady");mA("ep_init_ar");for(const b of a.G)FC(a,b);a.G=[]}}
function FC(a,b,c=a.h){if(c){b.channel="widget";a.sessionId&&(b.id=a.sessionId);try{const d=JSON.stringify(b);c.postMessage(d,a.targetOrigin)}catch(d){W(d)}}}
function EC(a){if(!a.api)return null;const b=a.api.getApiInterface();mb(b,"getVideoData");const c={apiInterface:b};for(let e=0,f=b.length;e<f;e++){const g=b[e];if(g.search("get")===0||g.search("is")===0){var d=0;g.search("get")===0?d=3:g.search("is")===0&&(d=2);d=g.charAt(d).toLowerCase()+g.substring(d+1);try{const h=a.api[g]();c[d]=h}catch(h){}}}c.videoData=a.api.getVideoData();c.currentTimeLastUpdated_=Date.now()/1E3;return c}
function GC(a,b){a.sendMessage("infoDelivery",b)}
function HC(a,b,c){return d=>{b==="onError"?a.api.logApiCall(`${b} invocation`,c,d):a.api.logApiCall(`${b} invocation`,c);a.sendMessage(b,d)}}
var LC=class extends y{constructor(){var a=IC,b=JC;super();this.api=a;this.j=this.F=!1;this.G=[];this.P={};this.o=[];this.i=[];this.Z=!1;this.sessionId=this.h=null;this.targetOrigin="*";this.Y=S("web_player_split_event_bus_iframe");this.A=P("POST_MESSAGE_ORIGIN")||`${document.location.protocol}//${document.location.hostname}`;this.u=c=>{this.onMessage(c)};
KC.addEventListener("message",this.u);if(a=P("WIDGET_ID"))this.sessionId=a;b&&this.u(b);CC(this,"onReady",()=>{this.F=!0;var c=this.api.getVideoData();c.isPlayable||(this.Z=!0,this.errorCode=(c=c.errorCode)?xC[c]||5:5,this.sendMessage("onError",Number(this.errorCode)));DC(this);this.h||this.j||window.parent===window||!this.sessionId||FC(this,{event:"readyToListen"},window.parent)});
CC(this,"onVideoProgress",this.Wa.bind(this));CC(this,"onVolumeChange",this.Ob.bind(this));CC(this,"onApiChange",this.ga.bind(this));CC(this,"onPlaybackQualityChange",this.Ba.bind(this));CC(this,"onPlaybackRateChange",this.Fa.bind(this));CC(this,"onStateChange",this.Ja.bind(this));CC(this,"onWebglSettingsChanged",this.Mc.bind(this));CC(this,"onCaptionsTrackListChanged",this.la.bind(this));CC(this,"captionssettingschanged",this.qa.bind(this))}sendMessage(a,b){a={event:a,info:b===void 0?null:b};this.j?
FC(this,a):this.G.push(a)}Ja(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};
this.api.getVideoUrl&&(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());GC(this,a)}Ba(a){a={playbackQuality:a};this.api.getAvailableQualityLevels&&(a.availableQualityLevels=this.api.getAvailableQualityLevels());this.api.getPreferredQuality&&
(a.preferredQuality=this.api.getPreferredQuality());GC(this,a)}Fa(a){GC(this,{playbackRate:a})}ga(){const a=this.api.getOptions(),b={namespaces:a};for(let c=0,d=a.length;c<d;c++){const e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(let g=0,h=f.length;g<h;g++){const k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)}Ob(){GC(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})}Wa(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),
videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());GC(this,a)}Mc(){GC(this,{sphericalProperties:this.api.getSphericalProperties()})}la(){if(this.api.getCaptionTracks){const a={captionTracks:this.api.getCaptionTracks()};GC(this,a)}}qa(){if(this.api.getSubtitlesUserSettings){const a={subtitlesUserSettings:this.api.getSubtitlesUserSettings()};
GC(this,a)}}onMessage(a){if(!(this.A!=="*"&&a.origin!==this.A||this.h&&a.source!==this.h||typeof a.data!=="string")){try{var b=JSON.parse(a.data)}catch(f){return}if(b)switch(b.event){case "listening":var c=a.source;a=a.origin;b=b.id;a!=="null"&&(this.A=this.targetOrigin=a);this.h=c;this.sessionId=b;DC(this);break;case "command":c=b.func;var d=b.args;if(c==="addEventListener"&&d)b=d[0],c=a.origin,b==="onReady"?this.api.logApiCall(`${b} invocation`,c):b==="onError"&&this.Z&&(this.api.logApiCall(`${b} invocation`,
c,this.errorCode),this.errorCode=void 0),this.api.logApiCall(`${b} registration`,c),this.P[b]||b==="onReady"||(a=HC(this,b,c),this.i.push({eventType:b,listener:a,origin:c}),this.Y?this.api.handleExternalCall("addEventListener",[b,a],c):this.api.addEventListener(b,a),this.P[b]=!0);else if(b=c,c=d,a=a.origin,this.api.isExternalMethodAvailable(b,a)){c=c||[];if(c.length>0&&zC(b)){var e=c;if(ma(e[0])&&!Array.isArray(e[0]))d=e[0];else switch(d={},b){case "loadVideoById":case "cueVideoById":d=AC(e[0],e[1]!==
void 0?Number(e[1]):void 0,e[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":d=e[0];typeof d==="string"&&(d={mediaContentUrl:d,startSeconds:e[1]!==void 0?Number(e[1]):void 0,suggestedQuality:e[2]});b:{if((e=d.mediaContentUrl)&&(e=/\/([ve]|embed)\/([^#?]+)/.exec(e))&&e[2]){e=e[2];break b}e=null}d.videoId=e;d=AC(d);break;case "loadPlaylist":case "cuePlaylist":d=BC(e[0],e[1],e[2],e[3])}c.length=1;c[0]=d}this.api.handleExternalCall(b,c,a);zC(b)&&GC(this,EC(this))}}}}ba(){super.ba();KC.removeEventListener("message",
this.u);for(var a=0;a<this.o.length;a++){var b=this.o[a];this.api.removeEventListener(b.eventType,b.listener)}this.o=[];for(a=0;a<this.i.length;a++)b=this.i[a],this.Y?this.api.handleExternalCall("removeEventListener",[b.eventType,b.listener],b.origin):this.api.removeEventListener(b.eventType,b.listener);this.i=[]}};let KC=window;function MC(a,b,c){a.I||(b={id:a.id,command:b},c&&(b.data=c),NC.postMessage(JSON.stringify(b),a.origin))}
function OC(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}if(b!=null)return{value:b}}
function PC(a,b){switch(a){case "loadVideoById":return[AC(b)];case "cueVideoById":return[AC(b)];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return[BC(b)];case "cuePlaylist":return[BC(b)];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];
case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function QC(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
var SC=class extends y{constructor(a,b){var c=IC;super();this.api=c;this.id=a;this.origin=b;this.h={};this.j=S("web_player_split_event_bus_iframe");this.i=d=>{this.onMessage(d)};
RC.addEventListener("message",this.i);MC(this,"RECEIVING")}addListener(a,b){if(!(a in this.h)){var c=this.o.bind(this,a);this.h[a]=c;this.addEventListener(a,c,b)}}o(a,b){this.I||MC(this,a,OC(a,b))}removeListener(a,b){a in this.h&&(this.removeEventListener(a,this.h[a],b),delete this.h[a])}addEventListener(a,b,c){this.j?a==="onReady"?this.api.addEventListener(a,b):this.api.handleExternalCall("addEventListener",[a,b],c||null):this.api.addEventListener(a,b)}removeEventListener(a,b,c){this.j?a==="onReady"?
this.api.removeEventListener(a,b):this.api.handleExternalCall("removeEventListener",[a,b],c||null):this.api.removeEventListener(a,b)}onMessage(a){if(a.origin===this.origin){var b=a.data;if(typeof b==="string"){try{b=JSON.parse(b)}catch(e){return}if(b.command){var c=b.command;b=b.data;a=a.origin;if(!this.I){var d=b||{};switch(c){case "addEventListener":typeof d.event==="string"&&this.addListener(d.event,a);break;case "removeEventListener":typeof d.event==="string"&&this.removeListener(d.event,a);break;
default:this.api.isReady()&&this.api.isExternalMethodAvailable(c,a||null)&&(b=PC(c,b||{}),b=this.api.handleExternalCall(c,b,a||null),(b=QC(c,b))&&MC(this,c,b))}}}}}}ba(){RC.removeEventListener("message",this.i);for(const a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);super.ba()}};let RC=window,NC=window.parent;let TC=new TB;function UC(){return TC.j()}
function VC(a={}){return TC.invoke(a)}
;function WC(a){a.Fa=!1;if(a.la)for(var b in a.h)a.h.hasOwnProperty(b)&&a.la(b,a.h[b]);for(const c in a.G)a.G.hasOwnProperty(c)&&clearTimeout(Number(c));a.G={};a.u=null;a.la=null;b=a.api;for(const c in b)b.hasOwnProperty(c)&&(b[c]=null);b.addEventListener=(c,d)=>{a.addEventListener(c,d)};
b.removeEventListener=(c,d)=>{a.removeEventListener(c,d)};
b.destroy=()=>{a.dispose()};
b.getLastError=()=>a.getLastError();
b.getPlayerType=()=>a.getPlayerType();
b.getCurrentVideoConfig=()=>a.Ja;
b.loadNewVideoConfig=c=>{a.loadNewVideoConfig(c)};
b.isReady=()=>a.isReady()}
function XC(a){let b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;a.elementId==="video-player"&&(a.elementId=a.A,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.A:a.config.attrs.id=a.A);a.i?.id===a.elementId&&(a.elementId=`${a.elementId}-player`,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
function YC(a){if(!a.I&&!a.Y){var b=ZC(a);if(b&&($C(a)?"html5":null)==="html5")a.Z="html5",a.isReady()||aD(a);else if(bD(a),a.Z="html5",b&&a.j&&a.o)a.o.appendChild(a.j),aD(a);else{a.config&&(a.config.loaded=!0);let c=!1;a.F=()=>{c=!0;let d;d=cD(a,"player_bootstrap_method")?w("yt.player.Application.createAlternate")||w("yt.player.Application.create"):w("yt.player.Application.create");const e=a.config?dD(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig,void 0);aD(a)};
a.Y=!0;b?a.F():(iy(eD(a),a.F),(b=fD(a))&&py(b||""),gD(a)&&!c&&v("yt.player.Application.create",null))}}}
function hD(a){a.config&&a.config.loaded!==!0&&(a.config.loaded=!0,!a.config.args||a.config.args.autoplay!=="0"&&a.config.args.autoplay!==0&&a.config.args.autoplay!==!1?a.api.loadVideoByPlayerVars(a.config.args??null):a.api.cueVideoByPlayerVars(a.config.args))}
function dD(a){const b={};for(const c of Object.keys(a)){const d=a[c];b[c]=typeof d==="object"?Th(d):d}return b}
function iD(a,b){let c=b;if(typeof b==="string"){if(a.Ba[b])return a.Ba[b];c=(...d)=>{const e=w(b);if(e)try{e.apply(t,d)}catch(f){throw d=new T("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.Ba[b]=c}return c?c:null}
function $C(a){let b=Zh(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector(`#${a.elementId}`));return b}
function eD(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function ZC(a){let b=!0;const c=$C(a);c&&a.config&&(b=c.dataset.version===eD(a));return b&&!!w("yt.player.Application.create")}
function cD(a,b){let c;a.webPlayerContextConfig?c=a.webPlayerContextConfig.serializedExperimentFlags:a.config?.args&&(c=a.config.args.fflags);return(c||"").split("&").includes(`${b}=true`)}
function aD(a){if(!a.I){const b=$C(a);let c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.Y=!1,!cD(a,"html5_remove_not_servable_check_killswitch")&&b?.isNotServable&&a.config&&b?.isNotServable(a.config.args?.video_id)||jD(a)):a.Wa=setTimeout(()=>{aD(a)},50)}}
function bD(a){a.cancel();WC(a);a.Z=null;a.config&&(a.config.loaded=!1);const b=$C(a);b&&(ZC(a)||!gD(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));a.o&&ai(a.o)}
function fD(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function gD(a){a=a.config?.args?.fflags;return!!a&&a.indexOf("player_destroy_old_version=true")!==-1}
function jD(a){WC(a);a.Fa=!0;const b=$C(a);if(b){a.u=kD(a,b,"addEventListener");a.la=kD(a,b,"removeEventListener");let c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());const d=a.api;for(let e=0;e<c.length;e++){const f=c[e];d[f]||(d[f]=kD(a,b,f))}}for(const c in a.h)a.h.hasOwnProperty(c)&&a.u&&a.u(c,a.h[c]);hD(a);a.qa&&a.qa(a.api);a.P.rb("onReady",a.api)}
function kD(a,b,c){const d=b[c];return(...e)=>{try{return a.lastError=null,d.apply(b,e)}catch(f){if(c!=="sendAbandonmentPing")throw f.params=c,a.lastError=f,e=new T("PlayerProxy error in method call",{error:f,method:c,playerId:a.A}),e.level="WARNING",e;}}}
function lD(a,b){const c=d=>{const e=()=>{if(!a.I)try{a.P.rb(b,d??void 0)}catch(g){var f=new T("PlayerProxy error when creating global callback",{error:g.message,event:b,playerId:a.A,data:d,originalStack:g.stack,componentStack:g.se});f.level="WARNING";throw f;}};
if(cD(a,"web_player_publish_events_immediately"))e();else{const f=setTimeout(()=>{e();var g=a.G,h=String(f);h in g&&delete g[h]},0);
Qh(a.G,String(f))}};
return a.h[b]=c}
var mD=class extends y{constructor(a,b,c,d){super();this.A=b;this.webPlayerContextConfig=d;this.Fa=!1;this.api={};this.la=this.u=null;this.P=new L;this.h={};this.Z=this.qa=this.elementId=this.Ja=this.config=null;this.Y=!1;this.j=this.F=null;this.Ba={};this.Ob=["onReady"];this.lastError=null;this.Wa=NaN;this.G={};this.ga=0;this.i=this.o=a;Ob(this,this.P);WC(this);c?this.ga=setTimeout(()=>{this.loadNewVideoConfig(c)},0):d&&(XC(this),YC(this))}getId(){return this.A}loadNewVideoConfig(a){if(!this.I){this.ga&&
(clearTimeout(this.ga),this.ga=0);
var b=a||{};b instanceof Yx||(b=new Yx(b));this.config=b;this.setConfig(a);YC(this);this.isReady()&&hD(this)}}setConfig(a){this.Ja=a;this.config=dD(a);XC(this);this.qa||(this.qa=iD(this,this.config.args?.jsapicallback||"onYouTubePlayerReady"));this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};if(this.config?.attrs){a=this.config.attrs;const b=a.width;b&&this.i&&(this.i.style.width=nm(Number(b)||b));(a=a.height)&&this.i&&(this.i.style.height=nm(Number(a)||a))}}isReady(){return this.Fa}addEventListener(a,
b){const c=iD(this,b);c&&(gb(this.Ob,a)>=0||this.h[a]||(b=lD(this,a),this.u&&this.u(a,b)),this.P.subscribe(a,c),a==="onReady"&&this.isReady()&&setTimeout(()=>{c(this.api)},0))}removeEventListener(a,b){this.I||(b=iD(this,b))&&this.P.unsubscribe(a,b)}getPlayerType(){return this.Z||($C(this)?"html5":null)}getLastError(){return this.lastError}cancel(){this.F&&my(eD(this),this.F);
clearTimeout(this.Wa);this.Y=!1}ba(){bD(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new T("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.Ba=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Ja=this.config=this.api=null;delete this.o;delete this.i;super.ba()}};const nD={},oD="player_uid_"+(Math.random()*1E9>>>0);function pD(a,b){var c="player";c=typeof c==="string"?Zh(c):c;const d=`${oD}_${na(c)}`;let e=nD[d];e=new mD(c,d,a,b);nD[d]=e;e.addOnDisposeCallback(()=>{delete nD[e.getId()]});
return e.api}
;let IC=null,qD=null,JC;function rD(a){IC=a;IC.addEventListener("onVideoDataChange",sD);IC.addEventListener("onReady",tD);a=P("POST_MESSAGE_ID","player");const b=P("POST_MESSAGE_ORIGIN");P("ENABLE_JS_API")?qD=new LC:P("ENABLE_POST_API")&&typeof a==="string"&&typeof b==="string"&&(qD=new SC(a,b));JC=void 0}
function uD(){nz();S("ytidb_create_logger_embed_killswitch")||Cr();cC.h||(cC.h=new cC);cC.h.install({flush_logs:{callback:()=>{Cw()}}});
Kr||Vu();nC();rm.va(()=>{CB()});
const a=I("att_init_delay",200);S("enable_rta_manager")&&setTimeout(()=>{S("attmusi")&&NB(window);var b=new JA;var c={preload:!S("enable_rta_npi"),Pd:S("attmusi")};c=c??{preload:!0};const d=c.Zh?void 0:new Lu;EA.instance=new EA(b,c,d);b=EA.instance;if((S("attmusi")||S("attmusiw"))&&S("attmusi_ue")){b={s:b.o.bind(b),ir:b.u.bind(b)};c=window;c.attmp=b;if(c.attmq!==void 0)for(var e of c.attmq)e(b);c.attmq=void 0}else e=b.o.bind(b),v("yt.aba.att",e),e=b.u.bind(b),v("yt.aba.att2",e)},a);
Qq(()=>{if(S("enable_zw_ping")){var b=P("INNERTUBE_CLIENT_NAME","UNKNOWN_INTERFACE"),c="/establish_zw";b==="WEB_EMBEDDED_PLAYER"?c="/embed/establish_zw":b==="TVHTML5"&&(c="https://www.youtube.com/tv/establish_zw");P("COOKIELESS",!1)&&b==="WEB_EMBEDDED_PLAYER"?(b=new Headers,b.set("X-Goog-Visitor-Id",P("VISITOR_DATA")),fetch(c,{method:"GET",mode:"no-cors",headers:b})):fetch(c,{method:"GET",mode:"no-cors",credentials:"include"})}})}
function vD(){sA();const a=Cq();var b=Fq(119),c=window.devicePixelRatio>1;if(document.body&&Im(document.body,"exp-invert-logo"))if(c&&!Im(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Im(d,"inverted-hdpi")){const f=Gm(d);Hm(d,f+(f.length>0?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Im(document.body,"inverted-hdpi")&&Jm();if(b!=c){b=`f${Math.floor(119/31)+1}`;d=Gq(b)||0;d=c?d|67108864:d&-67108865;d===0?delete Bq[b]:(c=d.toString(16),Bq[b]=
c.toString());b=!0;S("web_secure_pref_cookie_killswitch")&&(b=!1);c=a.h;d=[];for(e in Bq)Bq.hasOwnProperty(e)&&d.push(`${e}=`+encodeURIComponent(String(Bq[e])));var e=d.join("&");xq(c,e,63072E3,a.i,b)}}
function sD(){wD()}
function tD(){mA("ep_init_pr");wD()}
function wD(){var a=IC.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function xD(){IC&&IC.sendAbandonmentPing&&IC.sendAbandonmentPing();P("PL_ATT")&&TC.dispose();var a=rm;for(let b=0,c=kz.length;b<c;b++)a.wa(kz[b]);kz.length=0;ky(lz.toString());mz=!1;mp("DCLKSTAT",0);Nb(qD);IC&&(IC.removeEventListener("onVideoDataChange",sD),IC.destroy(),IC=null)}
;mA("ep_init_eps");v("yt.setConfig",mp);v("yt.config.set",mp);v("yt.setMsg",hy);v("yt.msgs.set",hy);v("yt.logging.errors.log",Xw);
v("writeEmbed",function(){mA("ep_init_wes");var a=P("PLAYER_CONFIG");if(!a){var b=P("PLAYER_VARS");b&&(a={args:b})}Zy(!0);a.args.ps==="gvn"&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});b=document.referrer;window!==window.top&&b&&b!==document.URL&&(a.args.loaderUrl=b);b=P("WEB_PLAYER_CONTEXT_CONFIGS")?.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!b.serializedForcedExperimentIds){const c=zp(window.location.href);c.forced_experiments&&
(b.serializedForcedExperimentIds=c.forced_experiments)}a.args?.autoplay?hA("watch",["pbs","pbu","pbp"]):a.args&&Kx(a.args)?hA("video_preview",["ol"]):hA("embed_no_video",["ep_init_ar"]);S("embeds_use_player_instances_library")||P("ENABLE_WEBVIEW_API")?(pC(document.getElementById("player"),b,c=>{P("ENABLE_WEBVIEW_API")?(c=c.getTrustedApi(),rC(c),wC(c)):rD(c)},()=>{throw Error("Unable to load player JS");
},a.args),P("ENABLE_WEBVIEW_API")||uD()):(a=pD(a,b),rD(a),uD());
mA("ep_init_wee")});
v("yt.abuse.player.botguardInitialized",w("yt.abuse.player.botguardInitialized")||UC);v("yt.abuse.player.invokeBotguard",w("yt.abuse.player.invokeBotguard")||VC);v("yt.abuse.dclkstatus.checkDclkStatus",w("yt.abuse.dclkstatus.checkDclkStatus")||oz);v("yt.player.exports.navigate",w("yt.player.exports.navigate")||Yy);v("yt.util.activity.init",w("yt.util.activity.init")||iv);v("yt.util.activity.getTimeSinceActive",w("yt.util.activity.getTimeSinceActive")||mv);
v("yt.util.activity.setTimestamp",w("yt.util.activity.setTimestamp")||jv);window.addEventListener("load",R(function(){vD()}));
window.addEventListener("pageshow",R(function(a){a.persisted||vD()}));
window.addEventListener("pagehide",R(function(a){S("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?xD():a.persisted||xD()}));
v("yt.logging.errors.log",Xw);hb(P("ERRORS")||[],a=>{Xw.apply(null,a)});
mp("ERRORS",[]);lq(iq(),{});
window.onerror=function(a,b="Unknown file",c=0,d,e,f){var g=!1,h=np("log_window_onerror_fraction");if(h&&Math.random()<h)g=!0;else{h=document.getElementsByTagName("script");for(let k=0,l=h.length;k<l;k++)if(h[k].src.indexOf("/debug-")>0){g=!0;break}}g&&(g=!1,e?g=!0:(typeof a==="string"?h=a:ErrorEvent&&a instanceof ErrorEvent?(g=!0,h=a.message,b=a.filename,c=a.lineno,d=a.colno):(h="Unknown error",b="Unknown file",c=0),e=new T(h),e.name="UnhandledWindowError",e.message=h,e.fileName=b,e.lineNumber=c,
isNaN(d)?delete e.columnNumber:e.columnNumber=d),S("wiz_enable_component_stack_propagation_killswitch")||(a=e,f?.componentStack||!(a=a.se))||(f||(f={}),f.componentStack=a),f&&ex(e,f),g?Xw(e):W(e))};
dk=Yw;window.addEventListener("unhandledrejection",a=>{if(a.reason instanceof Error){const b=a.reason;ex(b,{source:"unhandledrejection"});b.name==="AbortError"&&(b.level="WARNING")}Yw(a.reason);a.preventDefault()});
(function(){if(P("ENABLE_JS_API")){var a=b=>{JC=b;window.removeEventListener("message",a)};
window.addEventListener("message",a)}})();
mA("ep_init_epe");}).call(this);
