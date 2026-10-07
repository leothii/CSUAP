(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}function mixinPropertiesHard(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
if(!b.hasOwnProperty(r)){b[r]=a[r]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(Object.getPrototypeOf(s)&&Object.getPrototypeOf(s).p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++){inherit(b[t],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t){A.p9(b)}a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a,b){if(b!=null)A.k(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t){convertToFastObject(a[t])}}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.jO(b)
return new t(c,this)}:function(){if(t===null)t=A.jO(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.jO(a).prototype
return t}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var t=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var s=staticTearOffGetter(t)
a[b]=s}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var t=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var s=instanceTearOffGetter(c,t)
a[b]=s}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
jT(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iR(a){var t,s,r,q,p,o="_$dart_js",n=a[v.dispatchPropertyName]
if(n==null)if($.jR==null){A.oW()
n=a[v.dispatchPropertyName]}if(n!=null){t=n.p
if(!1===t)return n.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return n.i
if(n.e===s)throw A.f(A.kS("Return interceptor for "+A.z(t(a,n))))}r=a.constructor
if(r==null)q=null
else{p=$.it
if(p==null)p=$.it=A.iQ(o)
q=r[p]}if(q!=null)return q
q=A.p1(a)
if(q!=null)return q
if(typeof a=="function")return B.cN
t=Object.getPrototypeOf(a)
if(t==null)return B.bP
if(t===Object.prototype)return B.bP
if(typeof r=="function"){p=$.it
if(p==null)p=$.it=A.iQ(o)
Object.defineProperty(r,p,{value:B.aL,enumerable:false,writable:true,configurable:true})
return B.aL}return B.aL},
kx(a,b){if(a<0||a>4294967295)throw A.f(A.ah(a,0,4294967295,"length",null))
return J.ky(new Array(a),b)},
a9(a,b){if(a<0||a>4294967295)throw A.f(A.ah(a,0,4294967295,"length",null))
return J.ky(new Array(a),b)},
jc(a,b){if(a<0)throw A.f(A.bf("Length must be a non-negative integer: "+a))
return A.k(new Array(a),b.A("u<0>"))},
ff(a,b){if(a<0)throw A.f(A.bf("Length must be a non-negative integer: "+a))
return A.k(new Array(a),b.A("u<0>"))},
ky(a,b){var t=A.k(a,b.A("u<0>"))
t.$flags=1
return t},
kz(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
mz(a,b){var t,s
for(t=a.length;b<t;){s=a.charCodeAt(b)
if(s!==32&&s!==13&&!J.kz(s))break;++b}return b},
mA(a,b){var t,s,r
for(t=a.length;b>0;b=s){s=b-1
if(!(s<t))return A.a(a,s)
r=a.charCodeAt(s)
if(r!==32&&r!==13&&!J.kz(r))break}return b},
ce(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dy.prototype
return J.fh.prototype}if(typeof a=="string")return J.cK.prototype
if(a==null)return J.dz.prototype
if(typeof a=="boolean")return J.fg.prototype
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b3.prototype
if(typeof a=="symbol")return J.cM.prototype
if(typeof a=="bigint")return J.cL.prototype
return a}if(a instanceof A.P)return a
return J.iR(a)},
a1(a){if(typeof a=="string")return J.cK.prototype
if(a==null)return a
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b3.prototype
if(typeof a=="symbol")return J.cM.prototype
if(typeof a=="bigint")return J.cL.prototype
return a}if(a instanceof A.P)return a
return J.iR(a)},
ax(a){if(a==null)return a
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b3.prototype
if(typeof a=="symbol")return J.cM.prototype
if(typeof a=="bigint")return J.cL.prototype
return a}if(a instanceof A.P)return a
return J.iR(a)},
aV(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b3.prototype
if(typeof a=="symbol")return J.cM.prototype
if(typeof a=="bigint")return J.cL.prototype
return a}if(a instanceof A.P)return a
return J.iR(a)},
bD(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ce(a).S(a,b)},
d(a,b){if(typeof b==="number")if(Array.isArray(a)||A.p_(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ax(a).n(a,b)},
x(a,b,c){return J.ax(a).i(a,b,c)},
k1(a,b,c){return J.aV(a).eM(a,b,c)},
lY(a,b,c){return J.aV(a).eN(a,b,c)},
lZ(a,b,c){return J.aV(a).eO(a,b,c)},
j1(a,b,c){return J.aV(a).eP(a,b,c)},
m_(a){return J.aV(a).eQ(a)},
m0(a,b,c){return J.aV(a).cV(a,b,c)},
al(a,b,c){return J.aV(a).eR(a,b,c)},
am(a){return J.aV(a).eS(a)},
M(a,b,c){return J.aV(a).cj(a,b,c)},
k2(a,b){return J.ax(a).bH(a,b)},
aW(a,b,c,d){return J.ax(a).aq(a,b,c,d)},
aX(a){return J.ce(a).gE(a)},
j2(a){return J.ax(a).gG(a)},
aY(a){return J.a1(a).gu(a)},
m1(a){return J.ce(a).gaC(a)},
k3(a,b,c){return J.aV(a).fi(a,b,c)},
j3(a,b){return J.ax(a).d1(a,b)},
j4(a,b,c){return J.ax(a).b8(a,b,c)},
m2(a,b){return J.ax(a).f7(a,b)},
ez(a){return J.ce(a).C(a)},
f2:function f2(){},
fg:function fg(){},
dz:function dz(){},
dB:function dB(){},
bo:function bo(){},
fv:function fv(){},
eb:function eb(){},
b3:function b3(){},
cL:function cL(){},
cM:function cM(){},
u:function u(a){this.$ti=a},
fe:function fe(){},
hA:function hA(a){this.$ti=a},
d8:function d8(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dA:function dA(){},
dy:function dy(){},
fh:function fh(){},
cK:function cK(){}},A={jd:function jd(){},
hF(a){return new A.cN("Field '"+a+"' has not been initialized.")},
mB(a){return new A.cN("Field '"+a+"' has already been initialized.")},
b5(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
i_(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
lo(a,b,c){return a},
jS(a){var t,s
for(t=$.aw.length,s=0;s<t;++s)if(a===$.aw[s])return!0
return!1},
e8(a,b,c,d){A.cX(b,"start")
if(c!=null){A.cX(c,"end")
if(b>c)A.ab(A.ah(b,0,c,"start",null))}return new A.e7(a,b,c,d.A("e7<0>"))},
ku(){return new A.cZ("No element")},
kv(){return new A.cZ("Too few elements")},
cN:function cN(a){this.a=a},
aq:function aq(a){this.a=a},
hZ:function hZ(){},
da:function da(){},
aQ:function aQ(){},
e7:function e7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bS:function bS(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dE:function dE(a,b,c){this.a=a
this.b=b
this.$ti=c},
ek:function ek(a,b,c){this.a=a
this.b=b
this.$ti=c},
el:function el(a,b,c){this.a=a
this.b=b
this.$ti=c},
db:function db(a){this.$ti=a},
dc:function dc(a){this.$ti=a},
ae:function ae(){},
b9:function b9(){},
d_:function d_(){},
lz(a){var t=A.ly(a)
if(t!=null)return t
return"minified:"+a},
p_(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.ez.b(a)},
z(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.ez(a)
return t},
e0(a){var t,s=$.kJ
if(s==null)s=$.kJ=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
mQ(a,b){var t,s=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(s==null)return null
if(3>=s.length)return A.a(s,3)
t=s[3]
if(t!=null)return parseInt(a,10)
if(s[2]!=null)return parseInt(a,16)
return null},
fy(a){var t,s,r,q
if(a instanceof A.P)return A.av(A.aM(a),null)
t=J.ce(a)
if(t===B.cL||t===B.cO||u.bI.b(a)){s=B.aO(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.av(A.aM(a),null)},
kK(a){var t,s,r
if(a==null||typeof a=="number"||A.jM(a))return J.ez(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.bg)return a.C(0)
if(a instanceof A.aS)return a.eC(!0)
t=$.lX()
for(s=0;s<1;++s){r=t[s].jG(a)
if(r!=null)return r}return"Instance of '"+A.fy(a)+"'"},
kI(a){var t,s,r,q,p=a.length
if(p<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<p;s=r){r=s+500
q=r<p?r:p
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
mR(a){var t,s,r,q=A.k([],u.t)
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.aa)(a),++s){r=a[s]
if(!A.iF(r))throw A.f(A.bB(r))
if(r<=65535)B.c.M(q,r)
else if(r<=1114111){B.c.M(q,55296+(B.a.j(r-65536,10)&1023))
B.c.M(q,56320+(r&1023))}else throw A.f(A.bB(r))}return A.kI(q)},
kL(a){var t,s,r
for(t=a.length,s=0;s<t;++s){r=a[s]
if(!A.iF(r))throw A.f(A.bB(r))
if(r<0)throw A.f(A.bB(r))
if(r>65535)return A.mR(a)}return A.kI(a)},
mS(a,b,c){var t,s,r,q
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(t=b,s="";t<c;t=r){r=t+500
q=r<c?r:c
s+=String.fromCharCode.apply(null,a.subarray(t,q))}return s},
cR(a){var t
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((B.a.j(t,10)|55296)>>>0,t&1023|56320)}throw A.f(A.ah(a,0,1114111,null,null))},
h5(a){throw A.f(A.bB(a))},
a(a,b){if(a==null)J.aY(a)
throw A.f(A.iH(a,b))},
iH(a,b){var t,s="index"
if(!A.iF(b))return new A.aO(!0,b,s,null)
t=J.aY(a)
if(b<0||b>=t)return A.ja(b,t,a,s)
return A.jy(b,s,null)},
oJ(a,b,c){if(a<0||a>c)return A.ah(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.ah(b,a,c,"end",null)
return new A.aO(!0,b,"end",null)},
bB(a){return new A.aO(!0,a,null,null)},
f(a){return A.a2(a,new Error())},
a2(a,b){var t
if(a==null)a=new A.ea()
b.dartException=a
t=A.pa
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:t})
b.name=""}else b.toString=t
return b},
pa(){return J.ez(this.dartException)},
ab(a,b){throw A.a2(a,b==null?new Error():b)},
c(a,b,c){var t
if(b==null)b=0
if(c==null)c=0
t=Error()
A.ab(A.oc(a,b,c),t)},
oc(a,b,c){var t,s,r,q,p,o,n,m,l
if(typeof b=="string")t=b
else{s="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
r=s.length
q=b
if(q>r){c=q/r|0
q%=r}t=s[q]}p=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
o=u._.b(a)?"list":"ByteData"
n=a.$flags|0
m="a "
if((n&4)!==0)l="constant "
else if((n&2)!==0){l="unmodifiable "
m="an "}else l=(n&1)!==0?"fixed-length ":""
return new A.ec("'"+t+"': Cannot "+p+" "+m+l+o)},
aa(a){throw A.f(A.bE(a))},
b6(a){var t,s,r,q,p,o
a=A.p8(a.replace(String({}),"$receiver$"))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=A.k([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new A.i4(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),s,r,q,p,o)},
i5(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
kQ(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
je(a,b){var t=b==null,s=t?null:b.method
return new A.fl(a,s,t?null:b.receiver)},
pc(a){if(a==null)return new A.hN(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.cg(a,a.dartException)
return A.oF(a)},
cg(a,b){if(u.x.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
oF(a){var t,s,r,q,p,o,n,m,l,k,j,i,h
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((B.a.j(s,16)&8191)===10)switch(r){case 438:return A.cg(a,A.je(A.z(t)+" (Error "+r+")",null))
case 445:case 5007:A.z(t)
return A.cg(a,new A.dN())}}if(a instanceof TypeError){q=$.lE()
p=$.lF()
o=$.lG()
n=$.lH()
m=$.lK()
l=$.lL()
k=$.lJ()
$.lI()
j=$.lN()
i=$.lM()
h=q.bx(t)
if(h!=null)return A.cg(a,A.je(A.bd(t),h))
else{h=p.bx(t)
if(h!=null){h.method="call"
return A.cg(a,A.je(A.bd(t),h))}else if(o.bx(t)!=null||n.bx(t)!=null||m.bx(t)!=null||l.bx(t)!=null||k.bx(t)!=null||n.bx(t)!=null||j.bx(t)!=null||i.bx(t)!=null){A.bd(t)
return A.cg(a,new A.dN())}}return A.cg(a,new A.fS(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new A.e4()
t=function(b){try{return String(b)}catch(g){}return null}(a)
return A.cg(a,new A.aO(!1,null,null,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new A.e4()
return a},
jU(a){if(a==null)return J.aX(a)
if(typeof a=="object")return A.e0(a)
return J.aX(a)},
oH(a){if(typeof a=="number")return B.b.gE(a)
if(a instanceof A.h0)return A.e0(a)
if(a instanceof A.aS)return a.gE(a)
return A.jU(a)},
lt(a,b){var t,s,r,q=a.length
for(t=0;t<q;t=r){s=t+1
r=s+1
b.i(0,a[t],a[s])}return b},
mc(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.fM().constructor.prototype):Object.create(new A.ch(null,null).constructor.prototype)
t.$initialize=t.constructor
s=i?function static_tear_off(){this.$initialize()}:function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.ka(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.m8(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.ka(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
m8(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.f("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.m5)}throw A.f("Error in functionType of tearoff")},
m9(a,b,c,d){var t=A.k9
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
ka(a,b,c,d){if(c)return A.mb(a,b,d)
return A.m9(b.length,d,a,b)},
ma(a,b,c,d){var t=A.k9,s=A.m6
switch(b?-1:a){case 0:throw A.f(new A.fL("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
mb(a,b,c){var t,s
if($.k7==null)$.k7=A.k6("interceptor")
if($.k8==null)$.k8=A.k6("receiver")
t=b.length
s=A.ma(t,c,a,b)
return s},
jO(a){return A.mc(a)},
m5(a,b){return A.ey(v.typeUniverse,A.aM(a.a),b)},
k9(a){return a.a},
m6(a){return a.b},
k6(a){var t,s,r,q=new A.ch("receiver","interceptor"),p=Object.getOwnPropertyNames(q)
p.$flags=1
t=p
for(p=t.length,s=0;s<p;++s){r=t[s]
if(q[r]===a)return r}throw A.f(A.bf("Field name "+a+" not found."))},
iQ(a){return v.getIsolateTag(a)},
qz(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
p1(a){var t,s,r,q,p,o=A.bd($.lu.$1(a)),n=$.iI[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.iV[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.lf($.lm.$2(a,o))
if(r!=null){n=$.iI[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.iV[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.iY(t)
$.iI[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.iV[o]=t
return t}if(q==="-"){p=A.iY(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.lv(a,t)
if(q==="*")throw A.f(A.kS(o))
if(v.leafTags[o]===true){p=A.iY(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.lv(a,t)},
lv(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.jT(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
iY(a){return J.jT(a,!1,null,!!a.$iar)},
p3(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.iY(t)
else return J.jT(t,c,null,null)},
oW(){if(!0===$.jR)return
$.jR=!0
A.oX()},
oX(){var t,s,r,q,p,o,n,m
$.iI=Object.create(null)
$.iV=Object.create(null)
A.oV()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.lw.$1(p)
if(o!=null){n=A.p3(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
oV(){var t,s,r,q,p,o,n=B.cj()
n=A.d6(B.ck,A.d6(B.cl,A.d6(B.aP,A.d6(B.aP,A.d6(B.cm,A.d6(B.cn,A.d6(B.co(B.aO),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(Array.isArray(t))for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.lu=new A.iS(q)
$.lm=new A.iT(p)
$.lw=new A.iU(o)},
d6(a,b){return a(b)||b},
oI(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
p8(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
er:function er(a,b){this.a=a
this.b=b},
es:function es(a,b){this.a=a
this.b=b},
et:function et(a,b){this.a=a
this.b=b},
d9:function d9(){},
bI:function bI(a,b){this.a=a
this.$ti=b},
e3:function e3(){},
i4:function i4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dN:function dN(){},
fl:function fl(a,b,c){this.a=a
this.b=b
this.c=c},
fS:function fS(a){this.a=a},
hN:function hN(a){this.a=a},
bg:function bg(){},
eF:function eF(){},
eG:function eG(){},
fN:function fN(){},
fM:function fM(){},
ch:function ch(a,b){this.a=a
this.b=b},
fL:function fL(a){this.a=a},
aF:function aF(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hI:function hI(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dD:function dD(a,b){this.a=a
this.$ti=b},
V:function V(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hJ:function hJ(a,b){this.a=a
this.$ti=b},
bR:function bR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dC:function dC(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iS:function iS(a){this.a=a},
iT:function iT(a){this.a=a},
iU:function iU(a){this.a=a},
aS:function aS(){},
bz:function bz(){},
p9(a){throw A.a2(new A.cN("Field '"+a+"' has been assigned during initialization."),new Error())},
b(){throw A.a2(A.hF(""),new Error())},
jV(){throw A.a2(A.mB(""),new Error())},
kW(){var t=new A.iq()
return t.b=t},
iq:function iq(){this.b=null},
au(a,b,c){},
w(a){var t,s,r
if(u.aP.b(a))return a
t=J.a1(a)
s=A.Y(t.gu(a),null,!1,u.cp)
for(r=0;r<t.gu(a);++r)B.c.i(s,r,t.n(a,r))
return s},
mE(a){return new Float32Array(a)},
mF(a,b,c){A.au(a,b,c)
c=B.a.W(a.byteLength-b,4)
return new Float32Array(a,b,c)},
mG(a,b,c){A.au(a,b,c)
c=B.a.W(a.byteLength-b,2)
return new Int16Array(a,b,c)},
mH(a){return new Int32Array(a)},
mI(a,b,c){A.au(a,b,c)
c=B.a.W(a.byteLength-b,4)
return new Int32Array(a,b,c)},
kD(a){return new Int8Array(a)},
mJ(a,b,c){A.au(a,b,c)
return c==null?new Int8Array(a,b):new Int8Array(a,b,c)},
mK(a){return new Uint16Array(a)},
mL(a,b,c){A.au(a,b,c)
c=B.a.W(a.byteLength-b,2)
return new Uint16Array(a,b,c)},
mM(a){return new Uint32Array(a)},
mN(a,b,c){A.au(a,b,c)
c=B.a.W(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
fp(a){return new Uint8Array(a)},
mO(a){return new Uint8Array(A.w(a))},
mP(a,b,c){A.au(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
be(a,b,c){if(a>>>0!==a||a>=c)throw A.f(A.iH(b,a))},
aK(a,b,c){var t
if(!(a>>>0!==a))if(b==null)t=a>c
else t=b>>>0!==b||a>b||b>c
else t=!0
if(t)throw A.f(A.oJ(a,b,c))
if(b==null)return c
return b},
bT:function bT(){},
dJ:function dJ(){},
iz:function iz(a){this.a=a},
fo:function fo(){},
a8:function a8(){},
bq:function bq(){},
as:function as(){},
bU:function bU(){},
dF:function dF(){},
dG:function dG(){},
dH:function dH(){},
dI:function dI(){},
dK:function dK(){},
dL:function dL(){},
dM:function dM(){},
br:function br(){},
em:function em(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
jz(a,b){var t=b.c
return t==null?b.c=A.ew(a,"kf",[b.x]):t},
kO(a){var t=a.w
if(t===6||t===7)return A.kO(a.x)
return t===11||t===12},
mU(a){return a.as},
W(a){return A.iy(v.typeUniverse,a,!1)},
cc(a0,a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.w
switch(a){case 5:case 1:case 2:case 3:case 4:return a1
case 6:t=a1.x
s=A.cc(a0,t,a2,a3)
if(s===t)return a1
return A.l3(a0,s,!0)
case 7:t=a1.x
s=A.cc(a0,t,a2,a3)
if(s===t)return a1
return A.l2(a0,s,!0)
case 8:r=a1.y
q=A.d5(a0,r,a2,a3)
if(q===r)return a1
return A.ew(a0,a1.x,q)
case 9:p=a1.x
o=A.cc(a0,p,a2,a3)
n=a1.y
m=A.d5(a0,n,a2,a3)
if(o===p&&m===n)return a1
return A.jH(a0,o,m)
case 10:l=a1.x
k=a1.y
j=A.d5(a0,k,a2,a3)
if(j===k)return a1
return A.l4(a0,l,j)
case 11:i=a1.x
h=A.cc(a0,i,a2,a3)
g=a1.y
f=A.oC(a0,g,a2,a3)
if(h===i&&f===g)return a1
return A.l1(a0,h,f)
case 12:e=a1.y
a3+=e.length
d=A.d5(a0,e,a2,a3)
p=a1.x
o=A.cc(a0,p,a2,a3)
if(d===e&&o===p)return a1
return A.jI(a0,o,d,!0)
case 13:c=a1.x
if(c<a3)return a1
b=a2[c-a3]
if(b==null)return a1
return b
default:throw A.f(A.eB("Attempted to substitute unexpected RTI kind "+a))}},
d5(a,b,c,d){var t,s,r,q,p=b.length,o=A.iC(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.cc(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
oD(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.iC(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.cc(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
oC(a,b,c,d){var t,s=b.a,r=A.d5(a,s,c,d),q=b.b,p=A.d5(a,q,c,d),o=b.c,n=A.oD(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.h_()
t.a=r
t.b=p
t.c=n
return t},
k(a,b){a[v.arrayRti]=b
return a},
lp(a){var t=a.$S
if(t!=null){if(typeof t=="number")return A.oU(t)
return a.$S()}return null},
oY(a,b){var t
if(A.kO(b))if(a instanceof A.bg){t=A.lp(a)
if(t!=null)return t}return A.aM(a)},
aM(a){if(a instanceof A.P)return A.o(a)
if(Array.isArray(a))return A.at(a)
return A.jL(J.ce(a))},
at(a){var t=a[v.arrayRti],s=u.n
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
o(a){var t=a.$ti
return t!=null?t:A.jL(a)},
jL(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.ok(a,t)},
ok(a,b){var t=a instanceof A.bg?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,s=A.o0(v.typeUniverse,t.name)
b.$ccache=s
return s},
oU(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.iy(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
oT(a){return A.cd(A.o(a))},
jN(a){var t
if(a instanceof A.aS)return A.oL(a.$r,a.e7())
t=a instanceof A.bg?A.lp(a):null
if(t!=null)return t
if(u.dm.b(a))return J.m1(a).a
if(Array.isArray(a))return A.at(a)
return A.aM(a)},
cd(a){var t=a.r
return t==null?a.r=new A.h0(a):t},
oL(a,b){var t,s,r=b,q=r.length
if(q===0)return u.bQ
if(0>=q)return A.a(r,0)
t=A.ey(v.typeUniverse,A.jN(r[0]),"@<0>")
for(s=1;s<q;++s){if(!(s<r.length))return A.a(r,s)
t=A.l6(v.typeUniverse,t,A.jN(r[s]))}return A.ey(v.typeUniverse,t,a)},
aN(a){return A.cd(A.iy(v.typeUniverse,a,!1))},
oj(a){var t=this
t.b=A.oB(t)
return t.b(a)},
oB(a){var t,s,r,q,p
if(a===u.K)return A.oq
if(A.cf(a))return A.ou
t=a.w
if(t===6)return A.oh
if(t===1)return A.lk
if(t===7)return A.ol
s=A.oA(a)
if(s!=null)return s
if(t===8){r=a.x
if(a.y.every(A.cf)){a.f="$i"+r
if(r==="r")return A.oo
if(a===u.m)return A.on
return A.ot}}else if(t===10){q=A.oI(a.x,a.y)
p=q==null?A.lk:q
return p==null?A.le(p):p}return A.of},
oA(a){if(a.w===8){if(a===u.p)return A.iF
if(a===u.i||a===u.H)return A.op
if(a===u.N)return A.os
if(a===u.y)return A.jM}return null},
oi(a){var t=this,s=A.oe
if(A.cf(t))s=A.o9
else if(t===u.K)s=A.le
else if(A.d7(t)){s=A.og
if(t===u.v)s=A.o7
else if(t===u.dk)s=A.lf
else if(t===u.fQ)s=A.o6
else if(t===u.cg)s=A.ld
else if(t===u.cD)s=A.lb
else if(t===u.an)s=A.o8}else if(t===u.p)s=A.v
else if(t===u.N)s=A.bd
else if(t===u.y)s=A.o5
else if(t===u.H)s=A.lc
else if(t===u.i)s=A.la
else if(t===u.m)s=A.jJ
t.a=s
return t.a(a)},
of(a){var t=this
if(a==null)return A.d7(t)
return A.p0(v.typeUniverse,A.oY(a,t),t)},
oh(a){if(a==null)return!0
return this.x.b(a)},
ot(a){var t,s=this
if(a==null)return A.d7(s)
t=s.f
if(a instanceof A.P)return!!a[t]
return!!J.ce(a)[t]},
oo(a){var t,s=this
if(a==null)return A.d7(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.f
if(a instanceof A.P)return!!a[t]
return!!J.ce(a)[t]},
on(a){var t=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.P)return!!a[t.f]
return!0}if(typeof a=="function")return!0
return!1},
lj(a){if(typeof a=="object"){if(a instanceof A.P)return u.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
oe(a){var t=this
if(a==null){if(A.d7(t))return a}else if(t.b(a))return a
throw A.a2(A.lg(a,t),new Error())},
og(a){var t=this
if(a==null||t.b(a))return a
throw A.a2(A.lg(a,t),new Error())},
lg(a,b){return new A.eu("TypeError: "+A.kX(a,A.av(b,null)))},
kX(a,b){return A.hh(a)+": type '"+A.av(A.jN(a),null)+"' is not a subtype of type '"+b+"'"},
aD(a,b){return new A.eu("TypeError: "+A.kX(a,b))},
ol(a){var t=this
return t.x.b(a)||A.jz(v.typeUniverse,t).b(a)},
oq(a){return a!=null},
le(a){if(a!=null)return a
throw A.a2(A.aD(a,"Object"),new Error())},
ou(a){return!0},
o9(a){return a},
lk(a){return!1},
jM(a){return!0===a||!1===a},
o5(a){if(!0===a)return!0
if(!1===a)return!1
throw A.a2(A.aD(a,"bool"),new Error())},
o6(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.a2(A.aD(a,"bool?"),new Error())},
la(a){if(typeof a=="number")return a
throw A.a2(A.aD(a,"double"),new Error())},
lb(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a2(A.aD(a,"double?"),new Error())},
iF(a){return typeof a=="number"&&Math.floor(a)===a},
v(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.a2(A.aD(a,"int"),new Error())},
o7(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.a2(A.aD(a,"int?"),new Error())},
op(a){return typeof a=="number"},
lc(a){if(typeof a=="number")return a
throw A.a2(A.aD(a,"num"),new Error())},
ld(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a2(A.aD(a,"num?"),new Error())},
os(a){return typeof a=="string"},
bd(a){if(typeof a=="string")return a
throw A.a2(A.aD(a,"String"),new Error())},
lf(a){if(typeof a=="string")return a
if(a==null)return a
throw A.a2(A.aD(a,"String?"),new Error())},
jJ(a){if(A.lj(a))return a
throw A.a2(A.aD(a,"JSObject"),new Error())},
o8(a){if(a==null)return a
if(A.lj(a))return a
throw A.a2(A.aD(a,"JSObject?"),new Error())},
ll(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.av(a[r],b)
return t},
ow(a,b){var t,s,r,q,p,o,n=a.x,m=a.y
if(""===n)return"("+A.ll(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.av(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
lh(a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=", ",a1=null
if(a4!=null){t=a4.length
if(a3==null)a3=A.k([],u.s)
else a1=a3.length
s=a3.length
for(r=t;r>0;--r)B.c.M(a3,"T"+(s+r))
for(q=u.X,p="<",o="",r=0;r<t;++r,o=a0){n=a3.length
m=n-1-r
if(!(m>=0))return A.a(a3,m)
p=p+o+a3[m]
l=a4[r]
k=l.w
if(!(k===2||k===3||k===4||k===5||l===q))p+=" extends "+A.av(l,a3)}p+=">"}else p=""
q=a2.x
j=a2.y
i=j.a
h=i.length
g=j.b
f=g.length
e=j.c
d=e.length
c=A.av(q,a3)
for(b="",a="",r=0;r<h;++r,a=a0)b+=a+A.av(i[r],a3)
if(f>0){b+=a+"["
for(a="",r=0;r<f;++r,a=a0)b+=a+A.av(g[r],a3)
b+="]"}if(d>0){b+=a+"{"
for(a="",r=0;r<d;r+=3,a=a0){b+=a
if(e[r+1])b+="required "
b+=A.av(e[r+2],a3)+" "+e[r]}b+="}"}if(a1!=null){a3.toString
a3.length=a1}return p+"("+b+") => "+c},
av(a,b){var t,s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=a.x
s=A.av(t,b)
r=t.w
return(r===11||r===12?"("+s+")":s)+"?"}if(m===7)return"FutureOr<"+A.av(a.x,b)+">"
if(m===8){q=A.oE(a.x)
p=a.y
return p.length>0?q+("<"+A.ll(p,b)+">"):q}if(m===10)return A.ow(a,b)
if(m===11)return A.lh(a,b,null)
if(m===12)return A.lh(a.x,b,a.y)
if(m===13){o=a.x
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.a(b,o)
return b[o]}return"?"},
oE(a){var t=A.ly(a)
if(t!=null)return t
return"minified:"+a},
o1(a,b){var t=a.tR[b]
while(typeof t=="string")t=a.tR[t]
return t},
o0(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.iy(a,b,!1)
else if(typeof n=="number"){t=n
s=A.ex(a,5,"#")
r=A.iC(t)
for(q=0;q<t;++q)r[q]=s
p=A.ew(a,b,r)
o[b]=p
return p}else return n},
o_(a,b){return A.l8(a.tR,b)},
nZ(a,b){return A.l8(a.eT,b)},
iy(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.l5(a,null,b,!1)
s.set(b,t)
return t},
ey(a,b,c){var t,s,r=b.z
if(r==null)r=b.z=new Map()
t=r.get(c)
if(t!=null)return t
s=A.l5(a,b,c,!0)
r.set(c,s)
return s},
l6(a,b,c){var t,s,r,q=b.Q
if(q==null)q=b.Q=new Map()
t=c.as
s=q.get(t)
if(s!=null)return s
r=A.jH(a,b,c.w===9?c.y:[c])
q.set(t,r)
return r},
l5(a,b,c,d){return A.nS(A.nM(a,b,c,d))},
bA(a,b){b.a=A.oi
b.b=A.oj
return b},
ex(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.aJ(null,null)
t.w=b
t.as=c
s=A.bA(a,t)
a.eC.set(c,s)
return s},
l3(a,b,c){var t,s=b.as+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.nX(a,b,s,c)
a.eC.set(s,t)
return t},
nX(a,b,c,d){var t,s,r
if(d){t=b.w
s=!0
if(!A.cf(b))if(!(b===u.a||b===u.u))if(t!==6)s=t===7&&A.d7(b.x)
if(s)return b
else if(t===1)return u.a}r=new A.aJ(null,null)
r.w=6
r.x=b
r.as=c
return A.bA(a,r)},
l2(a,b,c){var t,s=b.as+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.nV(a,b,s,c)
a.eC.set(s,t)
return t},
nV(a,b,c,d){var t,s
if(d){t=b.w
if(A.cf(b)||b===u.K)return b
else if(t===1)return A.ew(a,"kf",[b])
else if(b===u.a||b===u.u)return u.eH}s=new A.aJ(null,null)
s.w=7
s.x=b
s.as=c
return A.bA(a,s)},
nY(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.aJ(null,null)
t.w=13
t.x=b
t.as=r
s=A.bA(a,t)
a.eC.set(r,s)
return s},
ev(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].as
return t},
nU(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].as}return t},
ew(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.ev(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.aJ(null,null)
s.w=8
s.x=b
s.y=c
if(c.length>0)s.c=c[0]
s.as=q
r=A.bA(a,s)
a.eC.set(q,r)
return r},
jH(a,b,c){var t,s,r,q,p,o
if(b.w===9){t=b.x
s=b.y.concat(c)}else{s=c
t=b}r=t.as+(";<"+A.ev(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.aJ(null,null)
p.w=9
p.x=t
p.y=s
p.as=r
o=A.bA(a,p)
a.eC.set(r,o)
return o},
l4(a,b,c){var t,s,r="+"+(b+"("+A.ev(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.aJ(null,null)
t.w=10
t.x=b
t.y=c
t.as=r
s=A.bA(a,t)
a.eC.set(r,s)
return s},
l1(a,b,c){var t,s,r,q,p,o=b.as,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.ev(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.ev(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.nU(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.aJ(null,null)
q.w=11
q.x=b
q.y=c
q.as=s
p=A.bA(a,q)
a.eC.set(s,p)
return p},
jI(a,b,c,d){var t,s=b.as+("<"+A.ev(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.nW(a,b,c,s,d)
a.eC.set(s,t)
return t},
nW(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.iC(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.w===1){s[q]=p;++r}}if(r>0){o=A.cc(a,b,s,0)
n=A.d5(a,c,s,0)
return A.jI(a,o,n,c!==n)}}m=new A.aJ(null,null)
m.w=12
m.x=b
m.y=c
m.as=d
return A.bA(a,m)},
nM(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
nS(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.nO(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.l_(a,s,m,l,!1)
else if(r===46)s=A.l_(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.cb(a.u,a.e,l.pop()))
break
case 94:l.push(A.nY(a.u,l.pop()))
break
case 35:l.push(A.ex(a.u,5,"#"))
break
case 64:l.push(A.ex(a.u,2,"@"))
break
case 126:l.push(A.ex(a.u,3,"~"))
break
case 60:l.push(a.p)
a.p=l.length
break
case 62:A.nQ(a,l)
break
case 38:A.nP(a,l)
break
case 63:q=a.u
l.push(A.l3(q,A.cb(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.l2(q,A.cb(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.nN(a,l)
break
case 91:l.push(a.p)
a.p=l.length
break
case 93:p=l.splice(a.p)
A.l0(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-1)
break
case 123:l.push(a.p)
a.p=l.length
break
case 125:p=l.splice(a.p)
A.nT(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-2)
break
case 43:o=m.indexOf("(",s)
l.push(m.substring(s,o))
l.push(-4)
l.push(a.p)
a.p=l.length
s=o+1
break
default:throw"Bad character "+r}}}n=l.pop()
return A.cb(a.u,a.e,n)},
nO(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
l_(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.w===9)p=p.x
o=A.o1(t,p.x)[q]
if(o==null)A.ab('No "'+q+'" in "'+A.mU(p)+'"')
d.push(A.ey(t,p,o))}else d.push(q)
return n},
nQ(a,b){var t,s=a.u,r=A.kZ(a,b),q=b.pop()
if(typeof q=="string")b.push(A.ew(s,q,r))
else{t=A.cb(s,a.e,q)
switch(t.w){case 11:b.push(A.jI(s,t,r,a.n))
break
default:b.push(A.jH(s,t,r))
break}}},
nN(a,b){var t,s,r,q=a.u,p=b.pop(),o=null,n=null
if(typeof p=="number")switch(p){case-1:o=b.pop()
break
case-2:n=b.pop()
break
default:b.push(p)
break}else b.push(p)
t=A.kZ(a,b)
p=b.pop()
switch(p){case-3:p=b.pop()
if(o==null)o=q.sEA
if(n==null)n=q.sEA
s=A.cb(q,a.e,p)
r=new A.h_()
r.a=t
r.b=o
r.c=n
b.push(A.l1(q,s,r))
return
case-4:b.push(A.l4(q,b.pop(),t))
return
default:throw A.f(A.eB("Unexpected state under `()`: "+A.z(p)))}},
nP(a,b){var t=b.pop()
if(0===t){b.push(A.ex(a.u,1,"0&"))
return}if(1===t){b.push(A.ex(a.u,4,"1&"))
return}throw A.f(A.eB("Unexpected extended operation "+A.z(t)))},
kZ(a,b){var t=b.splice(a.p)
A.l0(a.u,a.e,t)
a.p=b.pop()
return t},
cb(a,b,c){if(typeof c=="string")return A.ew(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.nR(a,b,c)}else return c},
l0(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.cb(a,b,c[t])},
nT(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.cb(a,b,c[t])},
nR(a,b,c){var t,s,r=b.w
if(r===9){if(c===0)return b.x
t=b.y
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.x
r=b.w}else if(c===0)return b
if(r!==8)throw A.f(A.eB("Indexed base must be an interface type"))
t=b.y
if(c<=t.length)return t[c-1]
throw A.f(A.eB("Bad index "+c+" for "+b.C(0)))},
p0(a,b,c){var t,s=b.d
if(s==null)s=b.d=new Map()
t=s.get(c)
if(t==null){t=A.a0(a,b,null,c,null)
s.set(c,t)}return t},
a0(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(A.cf(d))return!0
t=b.w
if(t===4)return!0
if(A.cf(b))return!1
if(b.w===1)return!0
s=t===13
if(s)if(A.a0(a,c[b.x],c,d,e))return!0
r=d.w
q=u.a
if(b===q||b===u.u){if(r===7)return A.a0(a,b,c,d.x,e)
return d===q||d===u.u||r===6}if(d===u.K){if(t===7)return A.a0(a,b.x,c,d,e)
return t!==6}if(t===7){if(!A.a0(a,b.x,c,d,e))return!1
return A.a0(a,A.jz(a,b),c,d,e)}if(t===6)return A.a0(a,q,c,d,e)&&A.a0(a,b.x,c,d,e)
if(r===7){if(A.a0(a,b,c,d.x,e))return!0
return A.a0(a,b,c,A.jz(a,d),e)}if(r===6)return A.a0(a,b,c,q,e)||A.a0(a,b,c,d.x,e)
if(s)return!1
q=t!==11
if((!q||t===12)&&d===u.Z)return!0
p=t===10
if(p&&d===u.gT)return!0
if(r===12){if(b===u.O)return!0
if(t!==12)return!1
o=b.y
n=d.y
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.a0(a,k,c,j,e)||!A.a0(a,j,e,k,c))return!1}return A.li(a,b.x,c,d.x,e)}if(r===11){if(b===u.O)return!0
if(q)return!1
return A.li(a,b,c,d,e)}if(t===8){if(r!==8)return!1
return A.om(a,b,c,d,e)}if(p&&r===10)return A.or(a,b,c,d,e)
return!1},
li(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.a0(a2,a3.x,a4,a5.x,a6))return!1
t=a3.y
s=a5.y
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!A.a0(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!A.a0(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!A.a0(a2,l[i],a6,h,a4))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
a1=g[c-2]
if(a0<a){if(a1)return!1
continue}h=f[b+1]
if(a1&&!h)return!1
h=g[c-1]
if(!A.a0(a2,f[b+2],a6,h,a4))return!1
break}}while(c<e){if(g[c+1])return!1
c+=3}return!0},
om(a,b,c,d,e){var t,s,r,q,p,o=b.x,n=d.x
while(o!==n){t=a.tR[o]
if(t==null)return!1
if(typeof t=="string"){o=t
continue}s=t[n]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.ey(a,b,s[p])
return A.l9(a,q,null,c,d.y,e)}return A.l9(a,b.y,null,c,d.y,e)},
l9(a,b,c,d,e,f){var t,s=b.length
for(t=0;t<s;++t)if(!A.a0(a,b[t],d,e[t],f))return!1
return!0},
or(a,b,c,d,e){var t,s=b.y,r=d.y,q=s.length
if(q!==r.length)return!1
if(b.x!==d.x)return!1
for(t=0;t<q;++t)if(!A.a0(a,s[t],c,r[t],e))return!1
return!0},
d7(a){var t=a.w,s=!0
if(!(a===u.a||a===u.u))if(!A.cf(a))if(t!==6)s=t===7&&A.d7(a.x)
return s},
cf(a){var t=a.w
return t===2||t===3||t===4||t===5||a===u.X},
l8(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
iC(a){return a>0?new Array(a):v.typeUniverse.sEA},
aJ:function aJ(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
h_:function h_(){this.c=this.b=this.a=null},
h0:function h0(a){this.a=a},
fY:function fY(){},
eu:function eu(a){this.a=a},
mC(a,b){return new A.aF(a.A("@<0>").cE(b).A("aF<1,2>"))},
mD(a,b,c){return b.A("@<0>").cE(c).A("jf<1,2>").a(A.lt(a,new A.aF(b.A("@<0>").cE(c).A("aF<1,2>"))))},
O(a,b){return new A.aF(a.A("@<0>").cE(b).A("aF<1,2>"))},
fn(a,b,c){var t=A.mC(b,c)
a.bR(0,new A.hK(t,b,c))
return t},
jh(a){var t,s
if(A.jS(a))return"{...}"
t=new A.e5("")
try{s={}
B.c.M($.aw,a)
t.a+="{"
s.a=!0
a.bR(0,new A.hM(s,t))
t.a+="}"}finally{if(0>=$.aw.length)return A.a($.aw,-1)
$.aw.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
hK:function hK(a,b,c){this.a=a
this.b=b
this.c=c},
E:function E(){},
cO:function cO(){},
hM:function hM(a,b){this.a=a
this.b=b},
o3(a,b,c){var t,s,r,q,p=c-b
if(p<=4096)t=$.lT()
else t=new Uint8Array(p)
for(s=0;s<p;++s){r=b+s
if(!(r<a.length))return A.a(a,r)
q=a[r]
if((q&255)!==q)q=255
t[s]=q}return t},
o2(a,b,c,d){var t=a?$.lS():$.lR()
if(t==null)return null
if(0===c&&d===b.length)return A.l7(t,b)
return A.l7(t,b.subarray(c,d))},
l7(a,b){var t,s
try{t=a.decode(b)
return t}catch(s){}return null},
o4(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
iB:function iB(){},
iA:function iA(){},
ix:function ix(){},
iw:function iw(){},
ci:function ci(){},
eK:function eK(){},
eL:function eL(){},
fm:function fm(){},
hH:function hH(){},
hG:function hG(a){this.a=a},
fT:function fT(){},
fU:function fU(a){this.a=a},
h1:function h1(a){this.a=a
this.b=16
this.c=0},
oZ(a){var t=A.mQ(a,null)
if(t!=null)return t
throw A.f(A.hm(a,null,null))},
Y(a,b,c,d){var t,s=J.kx(a,d)
if(a!==0&&b!=null)for(t=0;t<a;++t)s[t]=b
return s},
jg(a,b,c){var t,s,r=A.k([],c.A("u<0>"))
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.aa)(a),++s)B.c.M(r,c.a(a[s]))
if(b)return r
r.$flags=1
return r},
t(a,b){var t,s
if(Array.isArray(a))return A.k(a.slice(0),b.A("u<0>"))
t=A.k([],b.A("u<0>"))
for(s=J.j2(a);s.F();)B.c.M(t,s.gP())
return t},
kB(a,b,c){var t,s=J.jc(a,c)
for(t=0;t<a;++t)B.c.i(s,t,b.$1(t))
return s},
e6(a,b,c){var t,s,r,q,p
A.cX(b,"start")
t=c==null
s=!t
if(s){r=c-b
if(r<0)throw A.f(A.ah(c,b,null,"end",null))
if(r===0)return""}if(Array.isArray(a)){q=a
p=q.length
if(t)c=p
return A.kL(b>0||c<p?q.slice(b,c):q)}if(u.bm.b(a))return A.mW(a,b,c)
if(s)a=J.m2(a,c)
if(b>0)a=J.j3(a,b)
t=A.t(a,u.p)
return A.kL(t)},
mW(a,b,c){var t=a.length
if(b>=t)return""
return A.mS(a,b,c==null||c>t?t:c)},
kP(a,b,c){var t=J.j2(b)
if(!t.F())return a
if(c.length===0){do a+=A.z(t.gP())
while(t.F())}else{a+=A.z(t.gP())
while(t.F())a=a+c+A.z(t.gP())}return a},
hh(a){if(typeof a=="number"||A.jM(a)||a==null)return J.ez(a)
if(typeof a=="string")return JSON.stringify(a)
return A.kK(a)},
eB(a){return new A.eA(a)},
bf(a){return new A.aO(!1,null,null,a)},
m3(a,b,c){return new A.aO(!0,a,b,c)},
jy(a,b,c){return new A.cW(null,null,!0,a,b,c==null?"Value not in range":c)},
ah(a,b,c,d,e){return new A.cW(b,c,!0,a,d,"Invalid value")},
bw(a,b,c){if(0>a||a>c)throw A.f(A.ah(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.f(A.ah(b,a,c,"end",null))
return b}return c},
cX(a,b){if(a<0)throw A.f(A.ah(a,0,null,b,null))
return a},
ja(a,b,c,d){return new A.f_(b,!0,a,d,"Index out of range")},
ba(a){return new A.ec(a)},
kS(a){return new A.fR(a)},
mV(a){return new A.cZ(a)},
bE(a){return new A.eJ(a)},
hm(a,b,c){return new A.bj(a,b,c)},
my(a,b,c){var t,s
if(A.jS(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=A.k([],u.s)
B.c.M($.aw,a)
try{A.ov(a,t)}finally{if(0>=$.aw.length)return A.a($.aw,-1)
$.aw.pop()}s=A.kP(b,u.hf.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
kw(a,b,c){var t,s
if(A.jS(a))return b+"..."+c
t=new A.e5(b)
B.c.M($.aw,a)
try{s=t
s.a=A.kP(s.a,a,", ")}finally{if(0>=$.aw.length)return A.a($.aw,-1)
$.aw.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
ov(a,b){var t,s,r,q,p,o,n,m=a.gG(a),l=0,k=0
for(;;){if(!(l<80||k<3))break
if(!m.F())return
t=A.z(m.gP())
B.c.M(b,t)
l+=t.length+2;++k}if(!m.F()){if(k<=5)return
if(0>=b.length)return A.a(b,-1)
s=b.pop()
if(0>=b.length)return A.a(b,-1)
r=b.pop()}else{q=m.gP();++k
if(!m.F()){if(k<=4){B.c.M(b,A.z(q))
return}s=A.z(q)
if(0>=b.length)return A.a(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gP();++k
for(;m.F();q=p,p=o){o=m.gP();++k
if(k>100){for(;;){if(!(l>75&&k>3))break
if(0>=b.length)return A.a(b,-1)
l-=b.pop().length+2;--k}B.c.M(b,"...")
return}}r=A.z(q)
s=A.z(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
for(;;){if(!(l>80&&b.length>3))break
if(0>=b.length)return A.a(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)B.c.M(b,n)
B.c.M(b,r)
B.c.M(b,s)},
kE(a,b,c,d){var t
if(B.T===c){t=B.a.gE(a)
b=J.aX(b)
return A.i_(A.b5(A.b5($.h8(),t),b))}if(B.T===d){t=B.a.gE(a)
b=J.aX(b)
c=J.aX(c)
return A.i_(A.b5(A.b5(A.b5($.h8(),t),b),c))}t=B.a.gE(a)
b=J.aX(b)
c=J.aX(c)
d=J.aX(d)
d=A.i_(A.b5(A.b5(A.b5(A.b5($.h8(),t),b),c),d))
return d},
l(a){var t,s,r=$.h8()
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.aa)(a),++s)r=A.b5(r,J.aX(a[s]))
return A.i_(r)},
ir:function ir(){},
Q:function Q(){},
eA:function eA(a){this.a=a},
ea:function ea(){},
aO:function aO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cW:function cW(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
f_:function f_(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ec:function ec(a){this.a=a},
fR:function fR(a){this.a=a},
cZ:function cZ(a){this.a=a},
eJ:function eJ(a){this.a=a},
fr:function fr(){},
e4:function e4(){},
bj:function bj(a,b,c){this.a=a
this.b=b
this.c=c},
e:function e(){},
bV:function bV(){},
P:function P(){},
e5:function e5(a){this.a=a},
eU(a){var t=new A.ho()
t.fA(a)
return t},
ho:function ho(){this.a=$
this.b=0
this.c=2147483647},
io:function io(){},
iD:function iD(){},
ip:function ip(){},
iE:function iE(){},
me(a,b,c,d){var t=A.jF(),s=A.jF(),r=A.jF(),q=new Uint16Array(16),p=new Uint32Array(573),o=new Uint8Array(573)
t=new A.he(a,c,t,s,r,q,p,o)
t.hX(b,d)
t.hv(B.a_)
return t},
kb(a,b,c,d){var t,s=b*2,r=a.length
if(!(s>=0&&s<r))return A.a(a,s)
s=a[s]
t=c*2
if(!(t>=0&&t<r))return A.a(a,t)
t=a[t]
if(s>=t)if(s===t){if(!(b>=0&&b<573))return A.a(d,b)
s=d[b]
if(!(c>=0&&c<573))return A.a(d,c)
s=s<=d[c]}else s=!1
else s=!0
return s},
jF(){return new A.is()},
nK(a,b,c){var t,s,r,q,p,o,n,m=new Uint16Array(16)
for(t=0,s=1;s<=15;++s){t=t+c[s-1]<<1>>>0
if(!(s<16))return A.a(m,s)
m[s]=t}for(r=a.length,q=0;q<=b;++q){p=q*2
o=p+1
if(!(o<r))return A.a(a,o)
n=a[o]
if(n===0)continue
if(!(n<16))return A.a(m,n)
o=m[n]
if(!(n<16))return A.a(m,n)
m[n]=o+1
o=A.nL(o,n)
a.$flags&2&&A.c(a)
if(!(p<r))return A.a(a,p)
a[p]=o}},
nL(a,b){var t,s=0
do{t=A.ao(a,1)
s=(s|a&1)<<1>>>0
if(--b,b>0){a=t
continue}else break}while(!0)
return A.ao(s,1)},
kY(a){var t
if(a<256){if(!(a>=0))return A.a(B.a4,a)
t=B.a4[a]}else{t=256+A.ao(a,7)
if(!(t<512))return A.a(B.a4,t)
t=B.a4[t]}return t},
jG(a,b,c,d,e){return new A.iv(a,b,c,d,e)},
ao(a,b){if(a>=0)return B.a.b7(a,b)
else return B.a.b7(a,b)+B.a.J(2,(~b>>>0)+65536&65535)},
d3:function d3(a,b){this.a=a
this.b=b},
he:function he(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=null
_.e=_.d=0
_.x=_.w=_.r=_.f=$
_.y=2
_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.Q=$
_.k1=0
_.p3=_.p2=_.p1=_.ok=_.k4=_.k3=_.k2=$
_.p4=c
_.R8=d
_.RG=e
_.rx=f
_.ry=g
_.x1=_.to=$
_.x2=h
_.b2=_.aE=_.bC=_.bQ=_.bw=_.aB=_.bv=_.y2=_.y1=_.xr=$},
aC:function aC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
is:function is(){this.c=this.b=this.a=$},
iv:function iv(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hx:function hx(a,b){var _=this
_.a=a
_.b=null
_.c=b
_.e=_.d=0},
im:function im(){},
eE:function eE(a,b){this.a=a
this.b=b},
hy(a,b,c,d){var t,s,r=new A.f0(b)
if(d==null)d=0
if(c==null)c=a.length-d
t=a.length
if(d+c>t)c=t-d
s=u.D.b(a)?a:new Uint8Array(A.w(a))
t=J.M(B.e.gv(s),s.byteOffset+d,c)
r.b=t
r.d=t.length
return r},
f0:function f0(a){var _=this
_.b=null
_.c=0
_.d=$
_.a=a},
f1:function f1(){},
kF(a,b){var t=b==null?32768:b
return new A.dO(new Uint8Array(t),a)},
dO:function dO(a,b){this.b=0
this.c=a
this.a=b},
ft:function ft(){},
p6(a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null,a2=A.jQ(a3.a)
if(a2==null)throw A.f(B.aW)
t=A.ln(a2).cW(B.f,3)
s=Math.min(1,400/Math.max(t.gX(),t.gK()))
r=Math.max(1,B.b.aP(t.gX()*s))
q=Math.max(1,B.b.aP(t.gK()*s))
p=r*q*3
o=new Uint8Array(p)
n=new Float32Array(p)
for(m=a3.b,l=m.length,k=0;k<q;++k){j=t.a
j=j==null?a1:j.b
i=B.a.av(k*(j==null?0:j),q)
for(j=k*r,h=0;h<r;++h){g=t.a
f=g==null
e=f?a1:g.a
d=B.a.av(h*(e==null?0:e),r)
c=f?a1:g.O(d,i,a1)
if(c==null)c=new A.A()
b=(j+h)*3
a=(B.a.a1(i,224)*224+B.a.a1(d,224))*3
for(a0=0;a0<3;++a0){g=b+a0
f=B.b.h(c.n(0,a0))
if(!(g>=0&&g<p))return A.a(o,g)
o[g]=f
f=a+a0
if(!(f>=0&&f<l))return A.a(m,f)
f=m[f]
if(!(g<p))return A.a(n,g)
n[g]=f}}}return new A.hc(r,q,o,n)},
p4(a9,b0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null
if(a9.gX()!==b0.gX()||a9.gK()!==b0.gK())throw A.f(A.bf("Image dimensions must match."))
for(t=u.dh,s=0,r=0,q=0,p=0;p<3;++p){o=A.k(new Array(5),t)
for(n=a9.a,m=n==null,l=0;l<5;++l){k=m?a8:n.a
if(k==null)k=0
o[l]=new Float64Array(k)}j=0
for(;;){n=a9.a
n=n==null?a8:n.b
if(!(j<(n==null?0:n)))break
A:{n=j>=7
m=j-7
i=0
for(;;){k=a9.a
h=k==null
g=h?a8:k.a
if(!(i<(g==null?0:g)))break
k=h?a8:k.O(i,j,a8)
f=(k==null?new A.A():k).n(0,p)
k=b0.a
k=k==null?a8:k.O(i,j,a8)
e=(k==null?new A.A():k).n(0,p)
k=f-e
s+=k*k
d=[f,e,f*f,e*e,f*e]
for(k=o.length,c=0;c<5;++c){if(!(c<k))return A.a(o,c)
h=o[c]
if(!(i<h.length))return A.a(h,i)
g=h[i]
b=d[c]
h.$flags&2&&A.c(h)
h[i]=g+b}if(n){k=a9.a
k=k==null?a8:k.O(i,m,a8)
a=(k==null?new A.A():k).n(0,p)
k=b0.a
k=k==null?a8:k.O(i,m,a8)
a0=(k==null?new A.A():k).n(0,p)
a1=[a,a0,a*a,a0*a0,a*a0]
for(k=o.length,c=0;c<5;++c){if(!(c<k))return A.a(o,c)
h=o[c]
if(!(i<h.length))return A.a(h,i)
g=h[i]
b=a1[c]
h.$flags&2&&A.c(h)
h[i]=g-b}}++i}if(j<6)break A
a2=new Float64Array(5)
n=o.length
i=0
for(;;){m=h?a8:k.a
if(!(i<(m==null?0:m)))break
B:{for(m=i>=7,g=i-7,c=0;c<5;++c){b=a2[c]
if(!(c<n))return A.a(o,c)
a3=o[c]
a4=a3.length
if(!(i<a4))return A.a(a3,i)
a2[c]=b+a3[i]
if(m){b=a2[c]
if(!(g>=0&&g<a4))return A.a(a3,g)
a2[c]=b-a3[g]}}if(i<6)break B
m=a2[0]
a5=m/49
g=a2[1]
a6=g/49
b=a2[2]
a3=a2[3]
r+=(2*a5*a6+6.5025)*(2*((a2[4]-m*a6)/48)+58.5225)/((a5*a5+a6*a6+6.5025)*((b-m*a5)/48+(a3-g*a6)/48+58.5225));++q}++i}}++j}}a7=s/(a9.gX()*a9.gK()*3)
t=q===0?a8:r/q
return new A.er(t,a7===0?1/0:10*Math.log(65025/a7)/2.302585092994046)},
hE:function hE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hc:function hc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oG(a){var t,s=a.length
if(s!==150528)throw A.f(A.hm("Expected 150528 float32 values, got "+s+".",null,null))
for(t=0;t<s;++t)if(!isFinite(a[t]))throw A.f(B.cH)
return a},
hO:function hO(a){this.a=a},
p2(){var t,s=v.G.self,r=new A.iX()
if(typeof r=="function")A.ab(A.bf("Attempting to rewrap a JS function."))
t=function(a,b){return function(c){return a(b,c,arguments.length)}}(A.oa,r)
t[$.jX()]=r
s.onmessage=t},
iX:function iX(){},
iW:function iW(){},
hb:function hb(a,b){this.a=a
this.b=b},
K:function K(a){this.a=-1
this.b=a},
cj:function cj(a){this.a=a},
ck:function ck(a){this.a=a},
cl:function cl(a){this.a=a},
cm:function cm(a){this.a=a},
cn:function cn(a){this.a=a},
co:function co(a){this.a=a},
cq:function cq(a,b){this.a=a
this.b=b},
cr:function cr(a){this.a=a},
cs:function cs(a,b){this.a=a
this.b=b},
ct:function ct(a){this.a=a},
cu:function cu(a,b){this.a=a
this.b=b},
md(a,b,c,d){var t=new A.cp(new Uint8Array(4))
t.ft(a,b,c,d)
return t},
bh:function bh(a){this.a=a},
eH:function eH(a){this.a=a},
cp:function cp(a){this.a=a},
h2(a,b,c){var t
if(b===c)return a
switch(b.a){case 0:if(a===0)t=0
else{t=B.bO.n(0,c)
t.toString}return t
case 1:switch(c.a){case 0:return a===0?0:1
case 1:return a
case 2:return a*5
case 3:return a*75
case 4:return a*21845
case 5:return a*1431655765
case 6:return a*42
case 7:return a*10922
case 8:return a*715827882
case 9:case 10:case 11:return a/3}break
case 2:switch(c.a){case 0:return a===0?0:1
case 1:return B.a.j(A.v(a),1)
case 2:return a
case 3:return a*17
case 4:return a*4369
case 5:return a*286331153
case 6:return a*8
case 7:return a*2184
case 8:return a*143165576
case 9:case 10:case 11:return a/3}break
case 3:switch(c.a){case 0:return a===0?0:1
case 1:return B.a.j(A.v(a),6)
case 2:return B.a.j(A.v(a),4)
case 3:return a
case 4:return a*257
case 5:return a*16843009
case 6:return B.a.j(A.v(a),1)
case 7:return a*128
case 8:return a*8421504
case 9:case 10:case 11:return a/255}break
case 4:switch(c.a){case 0:return a===0?0:1
case 1:return B.a.j(A.v(a),14)
case 2:return B.a.j(A.v(a),12)
case 3:return B.a.j(A.v(a),8)
case 4:return a
case 5:return A.v(a)<<8>>>0
case 6:return B.a.j(A.v(a),9)
case 7:return B.a.j(A.v(a),1)
case 8:return a*524296
case 9:case 10:case 11:return a/65535}break
case 5:switch(c.a){case 0:return a===0?0:1
case 1:return B.a.j(A.v(a),30)
case 2:return B.a.j(A.v(a),28)
case 3:return B.a.j(A.v(a),24)
case 4:return B.a.j(A.v(a),16)
case 5:return a
case 6:return B.a.j(A.v(a),25)
case 7:return B.a.j(A.v(a),17)
case 8:return B.a.j(A.v(a),1)
case 9:case 10:case 11:return a/4294967295}break
case 6:switch(c.a){case 0:return a===0?0:1
case 1:return a<=0?0:B.a.j(A.v(a),5)
case 2:return a<=0?0:B.a.j(A.v(a),3)
case 3:return a<=0?0:A.v(a)<<1>>>0
case 4:return a<=0?0:A.v(a)*516
case 5:return a<=0?0:A.v(a)*33818640
case 6:return a
case 7:return a*258
case 8:return a*16909320
case 9:case 10:case 11:return a/127}break
case 7:switch(c.a){case 0:return a===0?0:1
case 1:return a<=0?0:B.a.j(A.v(a),15)
case 2:return a<=0?0:B.a.j(A.v(a),11)
case 3:return a<=0?0:B.a.j(A.v(a),7)
case 4:return a<=0?0:A.v(a)<<1>>>0
case 5:return a<=0?0:A.v(a)*131076
case 6:return B.a.j(A.v(a),8)
case 7:return a
case 8:return A.v(a)*65538
case 9:case 10:case 11:return a/32767}break
case 8:switch(c.a){case 0:return a===0?0:1
case 1:return a<=0?0:B.a.j(A.v(a),29)
case 2:return a<=0?0:B.a.j(A.v(a),27)
case 3:return a<=0?0:B.a.j(A.v(a),23)
case 4:return a<=0?0:B.a.j(A.v(a),16)
case 5:return a<=0?0:A.v(a)<<1>>>0
case 6:return B.a.j(A.v(a),24)
case 7:return B.a.j(A.v(a),16)
case 8:return a
case 9:case 10:case 11:return a/2147483647}break
case 9:case 10:case 11:switch(c.a){case 0:return a===0?0:1
case 1:return B.b.h(B.b.I(a,0,1)*3)
case 2:return B.b.h(B.b.I(a,0,1)*15)
case 3:return B.b.h(B.b.I(a,0,1)*255)
case 4:return B.b.h(B.b.I(a,0,1)*65535)
case 5:return B.b.h(B.b.I(a,0,1)*4294967295)
case 6:return B.b.h(a<0?B.b.I(a,-1,1)*128:B.b.I(a,-1,1)*127)
case 7:return B.b.h(a<0?B.b.I(a,-1,1)*32768:B.b.I(a,-1,1)*32767)
case 8:return B.b.h(a<0?B.b.I(a,-1,1)*2147483648:B.b.I(a,-1,1)*2147483647)
case 9:case 10:case 11:return a}break}},
af:function af(a,b){this.a=a
this.b=b},
eC:function eC(a,b){this.a=a
this.b=b},
dd(a){var t,s=new A.bF(A.O(u.N,u.P))
s.fB(a)
t=a.b
if(t!=null)s.b=new Uint8Array(A.w(t))
return s},
j5(a){var t=new A.bF(A.O(u.N,u.P))
t.bS(a)
return t},
bF:function bF(a){this.b=null
this.a=a},
fZ:function fZ(a,b){this.a=a
this.b=b},
h(a,b,c){return new A.eM(a,b)},
eM:function eM(a,b){this.a=a
this.b=b},
b1:function b1(a){this.a=a},
hq:function hq(a){this.a=a},
kj(a){var t=new A.aP(A.O(u.p,u.r),new A.b1(A.O(u.N,u.P)))
t.j3(a)
return t},
aP:function aP(a,b){this.a=a
this.b=b},
hr:function hr(a){this.a=a},
hs:function hs(a){this.a=a},
kq(a,b){var t=new A.bP(new Uint16Array(b))
t.fG(a,b)
return t},
mt(a){var t=new Uint32Array(1)
t[0]=a
return new A.bl(t)},
kl(a,b){var t=new A.bl(new Uint32Array(b))
t.fD(a,b)
return t},
km(a,b){var t,s=J.ff(b,u.j)
for(t=0;t<b;++t)s[t]=new A.cY(a.k(),a.k())
return new A.bL(s)},
kp(a,b){var t=new A.bO(new Int16Array(b))
t.fF(a,b)
return t},
kn(a,b){var t=new A.bM(new Int32Array(b))
t.fE(a,b)
return t},
ko(a,b){var t,s,r,q,p=J.ff(b,u.j)
for(t=0;t<b;++t){s=a.k()
r=$.I()
r.$flags&2&&A.c(r)
r[0]=s
s=$.Z()
if(0>=s.length)return A.a(s,0)
q=s[0]
r[0]=a.k()
p[t]=new A.cY(q,s[0])}return new A.bN(p)},
kr(a,b){var t=new A.cA(new Float32Array(b))
t.fH(a,b)
return t},
kk(a,b){var t=new A.cy(new Float64Array(b))
t.fC(a,b)
return t},
a4:function a4(a,b){this.a=a
this.b=b},
X:function X(){},
b0:function b0(a){this.a=a},
bK:function bK(a){this.a=a},
bP:function bP(a){this.a=a},
bl:function bl(a){this.a=a},
bL:function bL(a){this.a=a},
bm:function bm(a){this.a=a},
bO:function bO(a){this.a=a},
bM:function bM(a){this.a=a},
bN:function bN(a){this.a=a},
cA:function cA(a){this.a=a},
cy:function cy(a){this.a=a},
cB:function cB(a){this.a=a},
cz:function cz(a){this.a=a},
k4(a){var t,s,r=new A.ha()
if(!A.k5(a))A.ab(A.m("Not a bitmap file."))
a.d+=2
t=a.k()
s=$.I()
s.$flags&2&&A.c(s)
s[0]=t
t=$.Z()
if(0>=t.length)return A.a(t,0)
a.d+=4
s[0]=a.k()
r.b=t[0]
return r},
k5(a){if(a.c-a.d<2)return!1
return A.n(a,null,0).l()===19778},
m4(a,b){var t,s,r,q,p=b==null?A.k4(a):b,o=a.d,n=a.k(),m=a.k(),l=$.I()
l.$flags&2&&A.c(l)
l[0]=m
m=$.Z()
if(0>=m.length)return A.a(m,0)
t=m[0]
l[0]=a.k()
m=m[0]
s=a.l()
r=a.l()
q=a.k()
if(q>=14)A.ab(A.m("Unsupported BMP compression type: "+q))
if(!(q<14))return A.a(B.ag,q)
q=B.ag[q]
a.k()
l[0]=a.k()
l[0]=a.k()
l=a.k()
a.k()
o=new A.aZ(p,t,m,n,s,r,q,l,o)
o.dK(a,b)
return o},
a3:function a3(a,b){this.a=a
this.b=b},
ha:function ha(){this.b=$},
aZ:function aZ(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=h
_.ay=_.ax=_.at=_.as=$
_.ch=null
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=$
_.fy=i},
eD:function eD(a){this.a=$
this.b=null
this.c=a},
h9:function h9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hf:function hf(a){this.a=$
this.b=null
this.c=a},
G:function G(){},
hd:function hd(){},
hg:function hg(){},
eN:function eN(){},
du:function du(a,b,c,d){var _=this
_.r=a
_.w=b
_.x=c
_.b=_.a=0
_.c=d},
cv:function cv(a,b){this.a=a
this.b=b},
bG:function bG(a,b){this.a=a
this.b=b},
eO:function eO(){var _=this
_.w=_.r=_.f=_.d=_.c=_.b=_.a=$},
kc(a,b,c,d){var t,s
switch(a.a){case 1:return new A.f7(c,b)
case 2:return new A.dv(c,d==null?1:d,b)
case 3:return new A.dv(c,d==null?16:d,b)
case 4:t=d==null?32:d
s=new A.f5(c,t,b)
s.fK(b,c,t)
return s
case 5:return new A.f6(c,d==null?16:d,b)
case 6:return new A.du(c,d==null?32:d,!1,b)
case 7:return new A.du(c,d==null?32:d,!0,b)
default:throw A.f(A.m("Invalid compression type: "+a.C(0)))}},
aE:function aE(a,b){this.a=a
this.b=b},
b_:function b_(){},
f3:function f3(){},
mi(a,b,c,d){var t,s,r,q,p,o,n,m
if(b===0){if(d!==0)throw A.f(A.m("Incomplete huffman data"))
return}t=a.d
s=a.k()
r=a.k()
a.d+=4
q=a.k()
p=!0
if(s<65537)p=r>=65537
if(p)throw A.f(A.m("Invalid huffman table size"))
a.d+=4
o=A.Y(65537,0,!1,u.p)
n=J.a9(16384,u.gV)
for(m=0;m<16384;++m)n[m]=new A.eP()
A.mj(a,b-20,s,r,o)
if(q>8*(b-(a.d-t)))throw A.f(A.m("Error in header for Huffman-encoded data (invalid number of bits)."))
A.mf(o,s,r,n)
A.mh(o,n,a,q,r,d,c)},
mh(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m,l,k="Error in Huffman-encoded data (invalid code).",j=A.k([0,0],u.t),i=c.d+B.a.W(d+7,8)
for(t=b.length,s=0;c.d<i;){A.j6(j,c)
while(r=j[1],r>=14){q=B.a.b7(j[0],r-14)&16383
if(!(q<t))return A.a(b,q)
p=b[q]
q=p.a
if(q!==0){B.c.i(j,1,r-q)
s=A.j7(p.b,e,j,c,g,s,f)}else{if(p.c==null)throw A.f(A.m(k))
for(o=0;o<p.b;++o){r=p.c
if(!(o<r.length))return A.a(r,o)
r=r[o]
if(!(r<65537))return A.a(a,r)
n=a[r]&63
for(;;){r=j[1]
if(!(r<n&&c.d<i))break
A.j6(j,c)}if(r>=n){q=p.c
if(!(o<q.length))return A.a(q,o)
q=q[o]
if(!(q<65537))return A.a(a,q)
r-=n
if(a[q]>>>6===(B.a.b7(j[0],r)&B.a.J(1,n)-1)>>>0){B.c.i(j,1,r)
r=p.c
if(!(o<r.length))return A.a(r,o)
m=A.j7(r[o],e,j,c,g,s,f)
s=m
break}}}if(o===p.b)throw A.f(A.m(k))}}}l=8-d&7
B.c.i(j,0,B.a.j(j[0],l))
B.c.i(j,1,j[1]-l)
while(r=j[1],r>0){q=B.a.U(j[0],14-r)&16383
if(!(q<t))return A.a(b,q)
p=b[q]
q=p.a
if(q!==0){B.c.i(j,1,r-q)
s=A.j7(p.b,e,j,c,g,s,f)}else throw A.f(A.m(k))}if(s!==f)throw A.f(A.m("Error in Huffman-encoded data (decoded data are shorter than expected)."))},
j7(a,b,c,d,e,f,g){var t,s,r,q,p,o,n="Error in Huffman-encoded data (decoded data are longer than expected)."
if(a===b){if(c[1]<8)A.j6(c,d)
B.c.i(c,1,c[1]-8)
t=B.a.b7(c[0],c[1])&255
if(f+t>g)throw A.f(A.m(n))
s=f-1
r=e.length
if(!(s>=0&&s<r))return A.a(e,s)
q=e[s]
for(s=e.$flags|0;p=t-1,t>0;t=p,f=o){o=f+1
s&2&&A.c(e)
if(!(f<r))return A.a(e,f)
e[f]=q}}else{if(f<g){e.toString
o=f+1
e.$flags&2&&A.c(e)
if(!(f<e.length))return A.a(e,f)
e[f]=a}else throw A.f(A.m(n))
f=o}return f},
mf(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j="Error in Huffman-encoded data (invalid code table entry)."
for(t=d.length,s=u.t,r=u.p;b<=c;++b){if(!(b<65537))return A.a(a,b)
q=a[b]
p=q>>>6
o=q&63
if(B.a.a2(p,o)!==0)throw A.f(A.m(j))
if(o>14){q=B.a.a_(p,o-14)
if(!(q<t))return A.a(d,q)
n=d[q]
if(n.a!==0)throw A.f(A.m(j))
q=++n.b
m=n.c
if(m!=null){n.sf3(A.Y(q,0,!1,r))
for(l=0;l<n.b-1;++l){q=n.c
q.toString
if(!(l<m.length))return A.a(m,l)
B.c.i(q,l,m[l])}}else n.sf3(A.k([0],s))
q=n.c
q.toString
B.c.i(q,n.b-1,b)}else if(o!==0){q=14-o
k=B.a.U(p,q)
if(!(k<t))return A.a(d,k)
for(l=B.a.U(1,q);l>0;--l,++k){if(!(k<t))return A.a(d,k)
n=d[k]
if(n.a!==0||n.c!=null)throw A.f(A.m(j))
n.a=o
n.b=b}}}},
mj(a,b,c,d,e){var t,s,r,q,p,o="Error in Huffman-encoded data (unexpected end of code table data).",n="Error in Huffman-encoded data (code table is longer than expected).",m=a.d,l=A.k([0,0],u.t)
for(t=d+1;c<=d;++c){if(a.d-m>b)throw A.f(A.m(o))
s=A.kd(6,l,a)
B.c.i(e,c,s)
if(s===63){if(a.d-m>b)throw A.f(A.m(o))
r=A.kd(8,l,a)+6
if(c+r>t)throw A.f(A.m(n))
for(;q=r-1,r!==0;r=q,c=p){p=c+1
B.c.i(e,c,0)}--c}else if(s>=59){r=s-59+2
if(c+r>t)throw A.f(A.m(n))
for(;q=r-1,r!==0;r=q,c=p){p=c+1
B.c.i(e,c,0)}--c}}A.mg(e)},
mg(a){var t,s,r,q,p,o=A.Y(59,0,!1,u.p)
for(t=0;t<65537;++t){s=a[t]
if(!(s<59))return A.a(o,s)
B.c.i(o,s,o[s]+1)}for(r=0,t=58;t>0;--t,r=q){q=r+o[t]>>>1
B.c.i(o,t,r)}for(t=0;t<65537;++t){p=a[t]
if(p>0){if(!(p<59))return A.a(o,p)
s=o[p]
B.c.i(o,p,s+1)
B.c.i(a,t,(p|s<<6)>>>0)}}},
j6(a,b){B.c.i(a,0,(a[0]<<8|b.D())>>>0)
B.c.i(a,1,a[1]+8>>>0)},
kd(a,b,c){var t
while(t=b[1],t<a){B.c.i(b,0,(b[0]<<8|J.d(c.a,c.d++))>>>0)
B.c.i(b,1,b[1]+8>>>0)}B.c.i(b,1,t-a)
return(B.a.b7(b[0],b[1])&B.a.J(1,a)-1)>>>0},
eP:function eP(){this.b=this.a=0
this.c=null},
mk(a){var t=A.q(a,!1,null,0)
if(t.k()!==20000630)return!1
if(t.D()!==2)return!1
if((t.bf()&4294967289)>>>0!==0)return!1
return!0},
eQ:function eQ(a){var _=this
_.b=_.a=0
_.c=a
_.d=null
_.e=$},
kt(a,b,c){var t=new A.f4(a,A.k([],u.Q),A.O(u.N,u.aX),B.aV,b)
t.fw(a,b,c)
return t},
de:function de(){},
hj:function hj(a,b){this.a=a
this.b=b},
f4:function f4(a,b,c,d,e){var _=this
_.a=a
_.b=null
_.c=b
_.d=0
_.e=c
_.r=$
_.x=_.w=0
_.at=$
_.ax=d
_.ay=null
_.ch=$
_.CW=null
_.cx=0
_.cy=null
_.db=e
_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=null
_.k2=$
_.k3=null},
f5:function f5(a,b,c){var _=this
_.r=null
_.w=a
_.x=b
_.y=$
_.z=null
_.b=_.a=0
_.c=c},
eq:function eq(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$},
f6:function f6(a,b,c){var _=this
_.w=a
_.x=b
_.y=null
_.b=_.a=0
_.c=c},
f7:function f7(a,b){var _=this
_.r=null
_.w=a
_.b=_.a=0
_.c=b},
dv:function dv(a,b,c){var _=this
_.w=a
_.x=b
_.y=null
_.b=_.a=0
_.c=c},
hi:function hi(){this.a=null},
kg(a){var t=new Uint8Array(a*3)
return new A.dh(A.mr(a),a,null,new A.az(t,a,3))},
mq(a){return new A.dh(a.a,a.b,a.c,A.kG(a.d))},
mr(a){var t
for(t=1;t<=8;++t)if(B.a.J(1,t)>=a)return t
return 0},
dh:function dh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
di:function di(){},
f8:function f8(){var _=this
_.e=_.d=_.c=_.b=_.a=$
_.f=null
_.r=80
_.w=0
_.x=-1
_.y=$},
dj:function dj(a){var _=this
_.b=_.a=0
_.e=_.c=null
_.r=a},
hn:function hn(){var _=this
_.a=null
_.e=_.d=_.c=_.b=0
_.f=null
_.r=0
_.w=null
_.y=_.x=$
_.z=null
_.Q=0
_.as=null
_.ay=_.ax=_.at=0
_.ch=null
_.dy=_.dx=_.db=_.cy=_.cx=_.CW=0},
ki(a){var t,s,r,q
if(a.l()!==0)return null
t=a.l()
if(t>=3)return null
if(B.cS[t]===B.aY)return null
s=a.l()
r=J.ff(s,u.gx)
for(q=0;q<s;++q){J.d(a.a,a.d++)
J.d(a.a,a.d++)
J.d(a.a,a.d++);++a.d
a.l()
a.l()
r[q]=new A.eZ(a.k(),a.k())}return new A.eY(s,r)},
cx:function cx(a,b){this.a=a
this.b=b},
eY:function eY(a,b){this.d=a
this.e=b},
eZ:function eZ(a,b){this.d=a
this.e=b},
eX:function eX(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=h
_.ay=_.ax=_.at=_.as=$
_.ch=null
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=$
_.fy=i},
hp:function hp(){this.b=this.a=null},
eI:function eI(a,b,c){this.e=a
this.f=b
this.r=c},
bk:function bk(){},
bJ:function bJ(a){this.a=a},
dn:function dn(a){this.a=a},
p7(b2,b3,b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
if($.jK==null){t=new Uint8Array(768)
for(s=0;s<256;++s){r=256+s
if(!(r<768))return A.a(t,r)
t[r]=s}for(s=256;s<512;++s){r=256+s
if(!(r<768))return A.a(t,r)
t[r]=255}$.jK=t}for(r=b5.$flags|0,s=0;s<64;++s){q=b3[s]
p=b2[s]
r&2&&A.c(b5)
if(!(s<64))return A.a(b5,s)
b5[s]=q*p}for(o=0,s=0;s<8;++s,o+=8){q=1+o
if(!(q<64))return A.a(b5,q)
p=b5[q]
n=!1
if(p===0){m=2+o
if(!(m<64))return A.a(b5,m)
if(b5[m]===0){m=3+o
if(!(m<64))return A.a(b5,m)
if(b5[m]===0){m=4+o
if(!(m<64))return A.a(b5,m)
if(b5[m]===0){m=5+o
if(!(m<64))return A.a(b5,m)
if(b5[m]===0){m=6+o
if(!(m<64))return A.a(b5,m)
if(b5[m]===0){n=7+o
if(!(n<64))return A.a(b5,n)
n=b5[n]===0}}}}}}if(n){if(!(o<64))return A.a(b5,o)
q=B.a.j(5793*b5[o]+512,10)
l=(q&2147483647)-((q&2147483648)>>>0)
r&2&&A.c(b5)
if(!(o<64))return A.a(b5,o)
b5[o]=l
q=o+1
if(!(q<64))return A.a(b5,q)
b5[q]=l
q=o+2
if(!(q<64))return A.a(b5,q)
b5[q]=l
q=o+3
if(!(q<64))return A.a(b5,q)
b5[q]=l
q=o+4
if(!(q<64))return A.a(b5,q)
b5[q]=l
q=o+5
if(!(q<64))return A.a(b5,q)
b5[q]=l
q=o+6
if(!(q<64))return A.a(b5,q)
b5[q]=l
q=o+7
if(!(q<64))return A.a(b5,q)
b5[q]=l
continue}if(!(o<64))return A.a(b5,o)
n=B.a.j(5793*b5[o]+128,8)
k=(n&2147483647)-((n&2147483648)>>>0)
n=4+o
if(!(n<64))return A.a(b5,n)
m=B.a.j(5793*b5[n]+128,8)
j=(m&2147483647)-((m&2147483648)>>>0)
m=2+o
if(!(m<64))return A.a(b5,m)
i=b5[m]
h=6+o
if(!(h<64))return A.a(b5,h)
g=b5[h]
f=7+o
if(!(f<64))return A.a(b5,f)
e=b5[f]
d=B.a.j(2896*(p-e)+128,8)
c=(d&2147483647)-((d&2147483648)>>>0)
e=B.a.j(2896*(p+e)+128,8)
b=(e&2147483647)-((e&2147483648)>>>0)
e=3+o
if(!(e<64))return A.a(b5,e)
p=b5[e]<<4
a=(p&2147483647)-((p&2147483648)>>>0)
p=5+o
if(!(p<64))return A.a(b5,p)
d=b5[p]<<4
a0=(d&2147483647)-((d&2147483648)>>>0)
d=B.a.j(k-j+1,1)
l=(d&2147483647)-((d&2147483648)>>>0)
d=B.a.j(k+j+1,1)
k=(d&2147483647)-((d&2147483648)>>>0)
d=B.a.j(i*3784+g*1567+128,8)
d=(d&2147483647)-((d&2147483648)>>>0)
a1=B.a.j(i*1567-g*3784+128,8)
i=(a1&2147483647)-((a1&2147483648)>>>0)
a1=B.a.j(c-a0+1,1)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
a2=B.a.j(c+a0+1,1)
c=(a2&2147483647)-((a2&2147483648)>>>0)
a2=B.a.j(b+a+1,1)
a2=(a2&2147483647)-((a2&2147483648)>>>0)
a3=B.a.j(b-a+1,1)
a=(a3&2147483647)-((a3&2147483648)>>>0)
a3=B.a.j(k-d+1,1)
a3=(a3&2147483647)-((a3&2147483648)>>>0)
d=B.a.j(k+d+1,1)
k=(d&2147483647)-((d&2147483648)>>>0)
d=B.a.j(l-i+1,1)
d=(d&2147483647)-((d&2147483648)>>>0)
a4=B.a.j(l+i+1,1)
j=(a4&2147483647)-((a4&2147483648)>>>0)
a4=B.a.j(c*2276+a2*3406+2048,12)
l=(a4&2147483647)-((a4&2147483648)>>>0)
a2=B.a.j(c*3406-a2*2276+2048,12)
c=(a2&2147483647)-((a2&2147483648)>>>0)
a2=B.a.j(a*799+a1*4017+2048,12)
a2=(a2&2147483647)-((a2&2147483648)>>>0)
a1=B.a.j(a*4017-a1*799+2048,12)
a=(a1&2147483647)-((a1&2147483648)>>>0)
r&2&&A.c(b5)
if(!(o<64))return A.a(b5,o)
b5[o]=k+l
if(!(f<64))return A.a(b5,f)
b5[f]=k-l
if(!(q<64))return A.a(b5,q)
b5[q]=j+a2
if(!(h<64))return A.a(b5,h)
b5[h]=j-a2
if(!(m<64))return A.a(b5,m)
b5[m]=d+a
if(!(p<64))return A.a(b5,p)
b5[p]=d-a
if(!(e<64))return A.a(b5,e)
b5[e]=a3+c
if(!(n<64))return A.a(b5,n)
b5[n]=a3-c}for(s=0;s<8;++s){a5=8+s
a6=16+s
a7=24+s
a8=32+s
a9=40+s
b0=48+s
b1=56+s
q=b5[a5]
if(q===0&&b5[a6]===0&&b5[a7]===0&&b5[a8]===0&&b5[a9]===0&&b5[b0]===0&&b5[b1]===0){q=B.a.j(5793*b5[s]+8192,14)
l=(q&2147483647)-((q&2147483648)>>>0)
r&2&&A.c(b5)
if(!(s<64))return A.a(b5,s)
b5[s]=l
if(!(a5<64))return A.a(b5,a5)
b5[a5]=l
if(!(a6<64))return A.a(b5,a6)
b5[a6]=l
if(!(a7<64))return A.a(b5,a7)
b5[a7]=l
if(!(a8<64))return A.a(b5,a8)
b5[a8]=l
if(!(a9<64))return A.a(b5,a9)
b5[a9]=l
if(!(b0<64))return A.a(b5,b0)
b5[b0]=l
if(!(b1<64))return A.a(b5,b1)
b5[b1]=l
continue}p=B.a.j(5793*b5[s]+2048,12)
k=(p&2147483647)-((p&2147483648)>>>0)
p=B.a.j(5793*b5[a8]+2048,12)
j=(p&2147483647)-((p&2147483648)>>>0)
i=b5[a6]
g=b5[b0]
p=b5[b1]
n=B.a.j(2896*(q-p)+2048,12)
c=(n&2147483647)-((n&2147483648)>>>0)
p=B.a.j(2896*(q+p)+2048,12)
b=(p&2147483647)-((p&2147483648)>>>0)
a=b5[a7]
a0=b5[a9]
p=B.a.j(k-j+1,1)
l=(p&2147483647)-((p&2147483648)>>>0)
p=B.a.j(k+j+1,1)
k=(p&2147483647)-((p&2147483648)>>>0)
p=B.a.j(i*3784+g*1567+2048,12)
q=(p&2147483647)-((p&2147483648)>>>0)
p=B.a.j(i*1567-g*3784+2048,12)
i=(p&2147483647)-((p&2147483648)>>>0)
p=B.a.j(c-a0+1,1)
p=(p&2147483647)-((p&2147483648)>>>0)
n=B.a.j(c+a0+1,1)
c=(n&2147483647)-((n&2147483648)>>>0)
n=B.a.j(b+a+1,1)
n=(n&2147483647)-((n&2147483648)>>>0)
m=B.a.j(b-a+1,1)
a=(m&2147483647)-((m&2147483648)>>>0)
m=B.a.j(k-q+1,1)
m=(m&2147483647)-((m&2147483648)>>>0)
q=B.a.j(k+q+1,1)
k=(q&2147483647)-((q&2147483648)>>>0)
q=B.a.j(l-i+1,1)
q=(q&2147483647)-((q&2147483648)>>>0)
h=B.a.j(l+i+1,1)
j=(h&2147483647)-((h&2147483648)>>>0)
h=B.a.j(c*2276+n*3406+2048,12)
l=(h&2147483647)-((h&2147483648)>>>0)
n=B.a.j(c*3406-n*2276+2048,12)
c=(n&2147483647)-((n&2147483648)>>>0)
n=B.a.j(a*799+p*4017+2048,12)
n=(n&2147483647)-((n&2147483648)>>>0)
p=B.a.j(a*4017-p*799+2048,12)
a=(p&2147483647)-((p&2147483648)>>>0)
r&2&&A.c(b5)
if(!(s<64))return A.a(b5,s)
b5[s]=k+l
if(!(b1<64))return A.a(b5,b1)
b5[b1]=k-l
b5[a5]=j+n
b5[b0]=j-n
b5[a6]=q+a
b5[a9]=q-a
b5[a7]=m+c
b5[a8]=m-c}for(r=$.jK,q=b4.$flags|0,s=0;s<64;++s){r.toString
p=B.a.j(b5[s]+8,4)
p=384+((p&2147483647)-((p&2147483648)>>>0))
if(!(p>=0&&p<768))return A.a(r,p)
p=r[p]
q&2&&A.c(b4)
if(!(s<64))return A.a(b4,s)
b4[s]=p}},
oS(e4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1=null,e2="ifd0",e3=e4.w
if(e3.n(0,e2).a.aO(274)){t=e3.n(0,e2).gc4()
t.toString
s=t}else s=0
t=e4.d
r=t.e
r.toString
t=t.d
t.toString
q=s>=5&&s<=8
if(q)p=t
else p=r
if(q)o=r
else o=t
n=A.J(e1,e1,B.f,0,B.i,o,e1,0,3,e1,B.f,p,!1)
n.e=A.dd(e3)
n.gc3().n(0,e2).sc4(e1)
n.c=e4.r
m=t-1
l=r-1
switch(s){case 2:k=new A.iJ(n,l)
break
case 3:k=new A.iK(n,l,m)
break
case 4:k=new A.iL(n,m)
break
case 5:k=new A.iM(n)
break
case 6:k=new A.iN(n,m)
break
case 7:k=new A.iO(n,m,l)
break
case 8:k=new A.iP(n,l)
break
default:k=n.gfl()
break}e3=e4.as
j=e3.length
switch(j){case 1:if(0>=j)return A.a(e3,0)
i=e3[0]
h=i.e
g=i.f
f=i.r
for(e3=h.length,e=0;e<t;++e){d=B.a.a2(e,f)
if(!(d<e3))return A.a(h,d)
c=h[d]
for(b=0;b<r;++b){a=B.a.a2(b,g)
if(!(a<c.length))return A.a(c,a)
a0=c[a]
k.$5(b,e,a0,a0,a0)}}break
case 3:a1=e4.c
a2=a1==null||a1.d===1
if(0>=j)return A.a(e3,0)
i=e3[0]
if(1>=j)return A.a(e3,1)
a3=e3[1]
if(2>=j)return A.a(e3,2)
a4=e3[2]
a5=i.e
a6=a3.e
a7=a4.e
g=i.f
f=i.r
a8=a3.f
a9=a3.r
b0=a4.f
b1=a4.r
for(e3=a5.length,j=a6.length,a1=a7.length,e=0;e<t;++e){d=B.a.a2(e,f)
b2=B.a.a2(e,a9)
b3=B.a.a2(e,b1)
if(!(d<e3))return A.a(a5,d)
c=a5[d]
if(!(b2<j))return A.a(a6,b2)
b4=a6[b2]
if(!(b3<a1))return A.a(a7,b3)
b5=a7[b3]
for(b=0;b<r;++b){a=B.a.a2(b,g)
b6=B.a.a2(b,a8)
b7=B.a.a2(b,b0)
if(!(a<c.length))return A.a(c,a)
b8=c[a]
if(!(b6<b4.length))return A.a(b4,b6)
b9=b4[b6]
if(!(b7<b5.length))return A.a(b5,b7)
c0=b5[b7]
if(a2){a0=b8<<8>>>0
c1=b9-128
c2=c0-128
c3=B.a.j(a0+359*c2,8)
b8=B.a.I((c3&2147483647)-((c3&2147483648)>>>0),0,255)
c3=B.a.j(a0-88*c1-183*c2,8)
b9=B.a.I((c3&2147483647)-((c3&2147483648)>>>0),0,255)
c3=B.a.j(a0+454*c1,8)
c0=B.a.I((c3&2147483647)-((c3&2147483648)>>>0),0,255)}k.$5(b,e,b8,b9,c0)}}break
case 4:a1=e4.c
if(a1==null)throw A.f(A.m("Unsupported color mode (4 components)"))
a1=a1.d===0
if(0>=j)return A.a(e3,0)
i=e3[0]
if(1>=j)return A.a(e3,1)
a3=e3[1]
if(2>=j)return A.a(e3,2)
a4=e3[2]
if(3>=j)return A.a(e3,3)
c4=e3[3]
a5=i.e
a6=a3.e
a7=a4.e
c5=c4.e
g=i.f
f=i.r
a8=a3.f
a9=a3.r
b0=a4.f
b1=a4.r
c6=c4.f
c7=c4.r
for(e3=a5.length,j=a6.length,c3=a7.length,c8=c5.length,e=0;e<t;++e){d=B.a.a2(e,f)
b2=B.a.a2(e,a9)
b3=B.a.a2(e,b1)
c9=B.a.a2(e,c7)
if(!(d<e3))return A.a(a5,d)
c=a5[d]
if(!(b2<j))return A.a(a6,b2)
b4=a6[b2]
if(!(b3<c3))return A.a(a7,b3)
b5=a7[b3]
if(!(c9<c8))return A.a(c5,c9)
d0=c5[c9]
for(b=0;b<r;++b){a=B.a.a2(b,g)
b6=B.a.a2(b,a8)
b7=B.a.a2(b,b0)
d1=B.a.a2(b,c6)
if(a1){if(!(a<c.length))return A.a(c,a)
d2=c[a]
if(!(b6<b4.length))return A.a(b4,b6)
d3=b4[b6]
if(!(b7<b5.length))return A.a(b5,b7)
a0=b5[b7]
if(!(d1<d0.length))return A.a(d0,d1)
d4=d0[d1]}else{if(!(a<c.length))return A.a(c,a)
a0=c[a]
if(!(b6<b4.length))return A.a(b4,b6)
c1=b4[b6]
if(!(b7<b5.length))return A.a(b5,b7)
c2=b5[b7]
if(!(d1<d0.length))return A.a(d0,d1)
d4=d0[d1]
d5=c2-128
d6=c1-128
d7=a0<<8>>>0
d8=B.a.j(d7+359*d5,8)
d2=255-B.a.I((d8&2147483647)-((d8&2147483648)>>>0),0,255)
d8=B.a.j(d7-88*d6-183*d5,8)
d3=255-B.a.I((d8&2147483647)-((d8&2147483648)>>>0),0,255)
d8=B.a.j(d7+454*d6,8)
a0=255-B.a.I((d8&2147483647)-((d8&2147483648)>>>0),0,255)}d8=B.a.j(d2*d4,8)
d9=B.a.j(d3*d4,8)
e0=B.a.j(a0*d4,8)
k.$5(b,e,(d8&2147483647)-((d8&2147483648)>>>0),(d9&2147483647)-((d9&2147483648)>>>0),(e0&2147483647)-((e0&2147483648)>>>0))}}break
default:throw A.f(A.m("Unsupported color mode"))}return n},
iJ:function iJ(a,b){this.a=a
this.b=b},
iK:function iK(a,b,c){this.a=a
this.b=b
this.c=c},
iL:function iL(a,b){this.a=a
this.b=b},
iM:function iM(a){this.a=a},
iN:function iN(a,b){this.a=a
this.b=b},
iO:function iO(a,b,c){this.a=a
this.b=b
this.c=c},
iP:function iP(a,b){this.a=a
this.b=b},
hB:function hB(){this.d=null},
bn:function bn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.y=_.x=_.w=_.r=_.f=_.e=$},
kA(){var t=A.Y(4,null,!1,u.bC),s=A.k([],u.f8),r=u.eA,q=J.jc(0,r)
r=J.jc(0,r)
return new A.hC(new A.bF(A.O(u.N,u.P)),t,s,q,r,A.k([],u.E))},
hC:function hC(a,b,c,d,e,f){var _=this
_.b=_.a=$
_.r=_.e=_.d=_.c=null
_.w=a
_.x=b
_.y=c
_.z=d
_.Q=e
_.as=f},
d4:function d4(a){this.a=a
this.b=0},
fj:function fj(a,b){var _=this
_.e=_.d=_.c=_.b=null
_.r=_.f=0
_.x=_.w=$
_.y=a
_.z=b},
hD:function hD(){this.r=this.f=$},
fk:function fk(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.f=$
_.r=null
_.y=c
_.z=d
_.Q=e
_.as=f
_.at=g
_.ax=h
_.cx=_.CW=_.ch=_.ay=0
_.cy=$},
fi:function fi(){},
cQ:function cQ(a,b){this.a=a
this.b=b},
dZ:function dZ(a,b){this.a=a
this.b=b},
e_:function e_(){},
f9:function f9(a,b,c,d,e,f,g,h,i){var _=this
_.y=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
dw(){var t=u.N
return new A.fa(A.O(t,t),A.k([],u.d),A.k([],u.t))},
bt:function bt(a,b){this.a=a
this.b=b},
fx:function fx(){},
fa:function fa(a,b,c){var _=this
_.c=_.b=_.a=0
_.d=-1
_.r=_.f=0
_.z=_.x=_.w=null
_.Q=""
_.at=null
_.ax=a
_.CW=1
_.cy=b
_.db=c},
bs:function bs(a){var _=this
_.a=a
_.c=_.b=0
_.d=$
_.e=0},
fw:function fw(a,b){this.a=a
this.b=b},
hQ:function hQ(a,b,c){var _=this
_.a=null
_.b=a
_.c=0
_.d=b
_.e=$
_.f=0
_.r=!1
_.w=null
_.z=c},
bu:function bu(a,b){this.a=a
this.b=b},
bv:function bv(a){this.b=this.a=0
this.e=a},
hR:function hR(a){this.b=this.a=null
this.c=a},
hS:function hS(){},
fz:function fz(){this.a=null},
fA:function fA(){this.a=null},
aR:function aR(){},
fD:function fD(){this.a=null},
fE:function fE(){this.a=null},
fH:function fH(){this.a=null},
fI:function fI(){this.a=null},
e1:function e1(a){this.b=a},
fG:function fG(){},
hT:function hT(){var _=this
_.w=_.r=_.f=_.e=$},
c7:function c7(a){this.a=a
this.c=null},
kM(a){var t=new A.fB(A.k([],u.l),A.O(u.p,u.fh))
t.fM(a)
return t},
jt(a,b,c,d){var t=a/255,s=b/255,r=c/255,q=d/255,p=s*(1-r),o=t*(1-q)
return B.b.h(B.b.I((2*t<r?2*s*t+p+o:q*r-2*(r-t)*(q-s)+p+o)*255,0,255))},
hV(a,b){if(b===0)return 0
return B.a.h(B.a.I(B.b.h(255*(1-(1-a/255)/(b/255))),0,255))},
hX(a,b){return B.a.h(B.a.I(a+b-255,0,255))},
jv(a,b){return B.a.h(B.a.I(255-(255-b)*(255-a),0,255))},
hW(a,b){if(b===255)return 255
return B.b.h(B.b.I(a/255/(1-b/255)*255,0,255))},
jw(a,b){var t=a/255,s=b/255,r=1-s
return B.b.aP(255*(r*s*t+s*(1-r*(1-t))))},
jr(a,b){var t=b/255,s=a/255
if(s<0.5)return B.b.aP(510*t*s)
else return B.b.aP(255*(1-2*(1-t)*(1-s)))},
jx(a,b){if(b<128)return A.hV(a,2*b)
else return A.hW(a,2*(b-128))},
js(a,b){var t
if(b<128)return A.hX(a,2*b)
else{t=2*(b-128)
return t+a>255?255:a+t}},
ju(a,b){return b<128?Math.min(a,2*b):Math.max(a,2*(b-128))},
jq(a,b){return B.b.aP(b+a-2*b*a/255)},
an(a,b,c){var t,s,r
if(a==null)t=0
else{t=a.length
if(c===1){if(!(b>=0&&b<t))return A.a(a,b)
t=a[b]}else{if(!(b>=0&&b<t))return A.a(a,b)
s=a[b]
r=b+1
if(!(r<t))return A.a(a,r)
r=(s<<8|a[r])>>>8
t=r}}return t},
kN(b6,b7,b8,b9,c0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=A.O(u.p,u.fW)
for(t=c0.length,s=0;r=c0.length,s<r;c0.length===t||(0,A.aa)(c0),++s){q=c0[s]
b5.i(0,q.a,q)}if(b7===8)p=1
else p=b7===16?2:-1
o=A.J(b4,b4,B.f,0,B.i,b9,b4,0,r,b4,B.f,b8,!1)
if(p===-1)throw A.f(A.m("PSD: unsupported bit depth: "+A.z(b7)))
n=b5.n(0,0)
m=b5.n(0,1)
l=b5.n(0,2)
k=b5.n(0,-1)
j=A.k([0,0,0],u.t)
i=-p
for(t=o.a,t=t.gG(t),h=r>=5,g=r===4,f=r>=2,r=r>=4;t.F();){e=t.gP()
i+=p
switch(b6){case B.bY:e.sm(A.an(n.c,i,p))
e.sp(A.an(m.c,i,p))
e.sq(A.an(l.c,i,p))
e.st(r?A.an(k.c,i,p):255)
if(e.gt()!==0){e.sm((e.gm()+e.gt()-255)*255/e.gt())
e.sp((e.gp()+e.gt()-255)*255/e.gt())
e.sq((e.gq()+e.gt()-255)*255/e.gt())}break
case B.c_:d=A.an(n.c,i,p)
c=A.an(m.c,i,p)
b=A.an(l.c,i,p)
a=r?A.an(k.c,i,p):255
a0=((d*100>>>8)+16)/116
a1=(c-128)/500+a0
a2=a0-(b-128)/200
a3=Math.pow(a0,3)
a0=a3>0.008856?a3:(a0-0.13793103448275862)/7.787
a4=Math.pow(a1,3)
a1=a4>0.008856?a4:(a1-0.13793103448275862)/7.787
a5=Math.pow(a2,3)
a2=a5>0.008856?a5:(a2-0.13793103448275862)/7.787
a1=a1*95.047/100
a0=a0*100/100
a2=a2*108.883/100
a6=a1*3.240454836+a0*-1.53713885+a2*-0.498531547
a7=a1*-0.96926639+a0*1.87601093+a2*0.041556082
a8=a1*0.05564342+a0*-0.20402585+a2*1.05722516
a6=a6>0.0031308?1.055*Math.pow(a6,0.4166666666666667)-0.055:12.92*a6
a7=a7>0.0031308?1.055*Math.pow(a7,0.4166666666666667)-0.055:12.92*a7
a8=a8>0.0031308?1.055*Math.pow(a8,0.4166666666666667)-0.055:12.92*a8
a9=[B.b.aP(B.b.I(a6*255,0,255)),B.b.aP(B.b.I(a7*255,0,255)),B.b.aP(B.b.I(a8*255,0,255))]
e.sm(a9[0])
e.sp(a9[1])
e.sq(a9[2])
e.st(a)
break
case B.bX:b0=A.an(n.c,i,p)
a=f?A.an(k.c,i,p):255
e.sm(b0)
e.sp(b0)
e.sq(b0)
e.st(a)
break
case B.bZ:b1=A.an(n.c,i,p)
b2=A.an(m.c,i,p)
a0=A.an(l.c,i,p)
b3=A.an(b5.n(0,g?-1:3).c,i,p)
a=h?A.an(k.c,i,p):255
A.lq(255-b1,255-b2,255-a0,255-b3,j)
e.sm(j[0])
e.sp(j[1])
e.sq(j[2])
e.st(a)
break
default:throw A.f(A.m("Unhandled color mode: "+A.z(b6)))}}return o},
aI:function aI(a,b){this.a=a
this.b=b},
fB:function fB(a,b){var _=this
_.b=_.a=0
_.d=_.c=null
_.e=$
_.r=_.f=null
_.w=a
_.x=$
_.y=null
_.z=b
_.as=$
_.ay=_.ax=_.at=null},
fC:function fC(){},
fF:function fF(a,b,c){var _=this
_.b=_.a=null
_.f=_.e=_.d=_.c=$
_.r=null
_.as=_.y=_.w=$
_.ay=a
_.ch=b
_.cx=null
_.cy=c},
mT(a,b){var t
switch(a){case"lsct":t=b.c-b.d
b.k()
if(t>=12){if(b.af(4)!=="8BIM")A.ab(A.m("Invalid key in layer additional data"))
b.af(4)}if(t>=16)b.k()
return new A.fG()
default:return new A.e1(b)}},
cS:function cS(){},
hU:function hU(){this.a=null},
fJ:function fJ(){},
cV:function cV(a,b,c){this.a=a
this.b=b
this.c=c},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cT:function cT(){var _=this
_.Q=_.z=_.y=_.f=_.d=_.b=_.a=0},
cU:function cU(a){var _=this
_.b=0
_.c=a
_.Q=_.r=_.f=0},
e2:function e2(){this.y=this.b=this.a=0},
b4(a,b){var t,s=a>>>8
if(!(s<256))return A.a(B.N,s)
s=B.N[s]
t=b>>>8
if(!(t<256))return A.a(B.N,t)
return(s<<17|B.N[t]<<16|B.N[a&255]<<1|B.N[b&255])>>>0},
aA:function aA(a){var _=this
_.a=a
_.b=0
_.c=!1
_.d=0
_.e=!1
_.f=0
_.r=!1},
hY:function hY(){this.b=this.a=null},
e9:function e9(a){var _=this
_.b=_.a=0
_.c=a
_.Q=_.z=_.y=_.x=_.f=_.e=0
_.as=null
_.ax=0},
ai:function ai(a,b){this.a=a
this.b=b},
i0:function i0(){this.a=null
this.b=$},
i1:function i1(a){this.a=a
this.c=this.b=0},
fO:function fO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=e},
jA(a,b,c){var t=new A.i3(b,a),s=u.v
t.e=A.Y(b,null,!1,s)
t.f=A.Y(b,null,!1,s)
return t},
i3:function i3(a,b){var _=this
_.a=a
_.c=b
_.d=0
_.f=_.e=null
_.r=$
_.x=_.w=null
_.y=0
_.z=2
_.as=0
_.at=null},
fP:function fP(a,b,c,d){var _=this
_.a=a
_.c=_.b=0
_.d=b
_.w=_.r=_.f=_.e=1
_.x=c
_.y=d
_.z=!1
_.Q=1
_.at=_.as=$
_.ch=_.ay=0
_.cx=_.CW=null
_.db=_.cy=$
_.dy=1
_.fx=_.fr=0
_.id=null
_.k3=_.k2=_.k1=$},
c8:function c8(a,b){this.a=a
this.b=b},
a_:function a_(a,b){this.a=a
this.b=b},
aB:function aB(a,b){this.a=a
this.b=b},
fQ:function fQ(a){var _=this
_.b=_.a=0
_.d=null
_.f=a},
kC(){return new A.hL(new Uint8Array(4096))},
hL:function hL(a){var _=this
_.a=9
_.d=_.c=_.b=0
_.w=_.r=_.f=_.e=$
_.x=a
_.z=_.y=$
_.Q=null
_.as=$},
i2:function i2(){this.a=null
this.c=$},
jC(a,b){var t=new Int32Array(4),s=new Int32Array(4),r=new Int8Array(4),q=new Int8Array(4),p=A.Y(8,null,!1,u.eW),o=A.Y(4,null,!1,u.dP)
return new A.i6(a,b,new A.ic(),new A.ig(),new A.i8(t,s),new A.ii(r,q),p,o,new Uint8Array(4))},
kV(a,b,c){if(c===0)if(a===0)return b===0?6:5
else return b===0?4:0
return c},
i6:function i6(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=$
_.d=null
_.e=$
_.f=c
_.r=d
_.w=e
_.x=f
_.as=_.Q=_.z=_.y=0
_.ax=_.at=null
_.ch=_.ay=$
_.cx=_.CW=null
_.cy=$
_.db=g
_.dy=h
_.fr=null
_.fy=_.fx=$
_.go=null
_.id=i
_.p3=_.p2=_.p1=_.ok=_.k4=_.k3=_.k2=_.k1=$
_.R8=_.p4=null
_.x2=_.x1=_.to=_.ry=_.rx=_.RG=$
_.xr=null
_.y2=_.y1=0
_.bv=$
_.aB=null
_.bw=$
_.bC=_.bQ=null
_.aE=$},
ij:function ij(){},
kT(a){var t=new A.ee(a)
t.b=254
t.c=0
t.d=-8
return t},
ee:function ee(a){var _=this
_.a=a
_.d=_.c=_.b=$
_.e=!1},
B(a,b,c){return B.a.au(B.a.j(a+2*b+c+2,2),32)},
n9(a){var t,s=A.k([A.B(J.d(a.a,a.d+-33),J.d(a.a,a.d+-32),J.d(a.a,a.d+-31)),A.B(J.d(a.a,a.d+-32),J.d(a.a,a.d+-31),J.d(a.a,a.d+-30)),A.B(J.d(a.a,a.d+-31),J.d(a.a,a.d+-30),J.d(a.a,a.d+-29)),A.B(J.d(a.a,a.d+-30),J.d(a.a,a.d+-29),J.d(a.a,a.d+-28))],u.t)
for(t=0;t<4;++t)a.bI(t*32,4,s)},
n1(a){var t=J.d(a.a,a.d+-33),s=J.d(a.a,a.d+-1),r=J.d(a.a,a.d+31),q=J.d(a.a,a.d+63),p=J.d(a.a,a.d+95),o=A.n(a,null,0),n=o.cs(),m=A.B(t,s,r)
n.$flags&2&&A.c(n)
if(0>=n.length)return A.a(n,0)
n[0]=16843009*m
o.d+=32
m=o.cs()
n=A.B(s,r,q)
m.$flags&2&&A.c(m)
if(0>=m.length)return A.a(m,0)
m[0]=16843009*n
o.d+=32
n=o.cs()
m=A.B(r,q,p)
n.$flags&2&&A.c(n)
if(0>=n.length)return A.a(n,0)
n[0]=16843009*m
o.d+=32
m=o.cs()
n=A.B(q,p,p)
m.$flags&2&&A.c(m)
if(0>=m.length)return A.a(m,0)
m[0]=16843009*n},
n_(a){var t,s,r,q
for(t=4,s=0;s<4;++s)t+=J.d(a.a,a.d+(s-32))+J.d(a.a,a.d+(-1+s*32))
t=B.a.j(t,3)
for(s=0;s<4;++s){r=a.a
q=a.d+s*32
J.aW(r,q,q+4,t)}},
jD(a,b){var t,s,r,q,p,o,n=255-J.d(a.a,a.d+-33)
for(t=0,s=0;s<b;++s){r=n+J.d(a.a,a.d+(t-1))
for(q=0;q<b;++q){p=$.ap()
o=r+J.d(a.a,a.d+(-32+q))
if(!(o>=0&&o<766))return A.a(p,o)
o=p[o]
J.x(a.a,a.d+(t+q),o)}t+=32}},
n7(a){A.jD(a,4)},
n8(a){A.jD(a,8)},
n6(a){A.jD(a,16)},
n5(a){var t,s=J.d(a.a,a.d+-1),r=J.d(a.a,a.d+31),q=J.d(a.a,a.d+63),p=J.d(a.a,a.d+95),o=J.d(a.a,a.d+-33),n=J.d(a.a,a.d+-32),m=J.d(a.a,a.d+-31),l=J.d(a.a,a.d+-30),k=J.d(a.a,a.d+-29)
a.i(0,96,A.B(r,q,p))
t=A.B(s,r,q)
a.i(0,97,t)
a.i(0,64,t)
t=A.B(o,s,r)
a.i(0,98,t)
a.i(0,65,t)
a.i(0,32,t)
t=A.B(n,o,s)
a.i(0,99,t)
a.i(0,66,t)
a.i(0,33,t)
a.i(0,0,t)
t=A.B(m,n,o)
a.i(0,67,t)
a.i(0,34,t)
a.i(0,1,t)
t=A.B(l,m,n)
a.i(0,35,t)
a.i(0,2,t)
a.i(0,3,A.B(k,l,m))},
n4(a){var t,s=J.d(a.a,a.d+-32),r=J.d(a.a,a.d+-31),q=J.d(a.a,a.d+-30),p=J.d(a.a,a.d+-29),o=J.d(a.a,a.d+-28),n=J.d(a.a,a.d+-27),m=J.d(a.a,a.d+-26),l=J.d(a.a,a.d+-25)
a.i(0,0,A.B(s,r,q))
t=A.B(r,q,p)
a.i(0,32,t)
a.i(0,1,t)
t=A.B(q,p,o)
a.i(0,64,t)
a.i(0,33,t)
a.i(0,2,t)
t=A.B(p,o,n)
a.i(0,96,t)
a.i(0,65,t)
a.i(0,34,t)
a.i(0,3,t)
t=A.B(o,n,m)
a.i(0,97,t)
a.i(0,66,t)
a.i(0,35,t)
t=A.B(n,m,l)
a.i(0,98,t)
a.i(0,67,t)
a.i(0,99,A.B(m,l,l))},
nb(a){var t=J.d(a.a,a.d+-1),s=J.d(a.a,a.d+31),r=J.d(a.a,a.d+63),q=J.d(a.a,a.d+-33),p=J.d(a.a,a.d+-32),o=J.d(a.a,a.d+-31),n=J.d(a.a,a.d+-30),m=J.d(a.a,a.d+-29),l=B.a.au(B.a.j(q+p+1,1),32)
a.i(0,65,l)
a.i(0,0,l)
l=B.a.au(B.a.j(p+o+1,1),32)
a.i(0,66,l)
a.i(0,1,l)
l=B.a.au(B.a.j(o+n+1,1),32)
a.i(0,67,l)
a.i(0,2,l)
a.i(0,3,B.a.au(B.a.j(n+m+1,1),32))
a.i(0,96,A.B(r,s,t))
a.i(0,64,A.B(s,t,q))
l=A.B(t,q,p)
a.i(0,97,l)
a.i(0,32,l)
l=A.B(q,p,o)
a.i(0,98,l)
a.i(0,33,l)
l=A.B(p,o,n)
a.i(0,99,l)
a.i(0,34,l)
a.i(0,35,A.B(o,n,m))},
na(a){var t,s=J.d(a.a,a.d+-32),r=J.d(a.a,a.d+-31),q=J.d(a.a,a.d+-30),p=J.d(a.a,a.d+-29),o=J.d(a.a,a.d+-28),n=J.d(a.a,a.d+-27),m=J.d(a.a,a.d+-26),l=J.d(a.a,a.d+-25)
a.i(0,0,B.a.au(B.a.j(s+r+1,1),32))
t=B.a.au(B.a.j(r+q+1,1),32)
a.i(0,64,t)
a.i(0,1,t)
t=B.a.au(B.a.j(q+p+1,1),32)
a.i(0,65,t)
a.i(0,2,t)
t=B.a.au(B.a.j(p+o+1,1),32)
a.i(0,66,t)
a.i(0,3,t)
a.i(0,32,A.B(s,r,q))
t=A.B(r,q,p)
a.i(0,96,t)
a.i(0,33,t)
t=A.B(q,p,o)
a.i(0,97,t)
a.i(0,34,t)
t=A.B(p,o,n)
a.i(0,98,t)
a.i(0,35,t)
a.i(0,67,A.B(o,n,m))
a.i(0,99,A.B(n,m,l))},
n2(a){var t,s=J.d(a.a,a.d+-1),r=J.d(a.a,a.d+31),q=J.d(a.a,a.d+63),p=J.d(a.a,a.d+95)
a.i(0,0,B.a.au(B.a.j(s+r+1,1),32))
t=B.a.au(B.a.j(r+q+1,1),32)
a.i(0,32,t)
a.i(0,2,t)
t=B.a.au(B.a.j(q+p+1,1),32)
a.i(0,64,t)
a.i(0,34,t)
a.i(0,1,A.B(s,r,q))
t=A.B(r,q,p)
a.i(0,33,t)
a.i(0,3,t)
t=A.B(q,p,p)
a.i(0,65,t)
a.i(0,35,t)
a.i(0,99,p)
a.i(0,98,p)
a.i(0,97,p)
a.i(0,96,p)
a.i(0,66,p)
a.i(0,67,p)},
n0(a){var t=J.d(a.a,a.d+-1),s=J.d(a.a,a.d+31),r=J.d(a.a,a.d+63),q=J.d(a.a,a.d+95),p=J.d(a.a,a.d+-33),o=J.d(a.a,a.d+-32),n=J.d(a.a,a.d+-31),m=J.d(a.a,a.d+-30),l=B.a.au(B.a.j(t+p+1,1),32)
a.i(0,34,l)
a.i(0,0,l)
l=B.a.au(B.a.j(s+t+1,1),32)
a.i(0,66,l)
a.i(0,32,l)
l=B.a.au(B.a.j(r+s+1,1),32)
a.i(0,98,l)
a.i(0,64,l)
a.i(0,96,B.a.au(B.a.j(q+r+1,1),32))
a.i(0,3,A.B(o,n,m))
a.i(0,2,A.B(p,o,n))
l=A.B(t,p,o)
a.i(0,35,l)
a.i(0,1,l)
l=A.B(s,t,p)
a.i(0,67,l)
a.i(0,33,l)
l=A.B(r,s,t)
a.i(0,99,l)
a.i(0,65,l)
a.i(0,97,A.B(q,r,s))},
nm(a){var t
for(t=0;t<16;++t)a.bd(t*32,16,a,-32)},
nk(a){var t,s,r,q,p
for(t=0,s=16;s>0;--s){r=J.d(a.a,a.d+(t-1))
q=a.a
p=a.d+t
J.aW(q,p,p+16,r)
t+=32}},
ia(a,b){var t,s,r
for(t=0;t<16;++t){s=b.a
r=b.d+t*32
J.aW(s,r,r+16,a)}},
nc(a){var t,s
for(t=16,s=0;s<16;++s)t+=J.d(a.a,a.d+(-1+s*32))+J.d(a.a,a.d+(s-32))
A.ia(B.a.j(t,5),a)},
ne(a){var t,s
for(t=8,s=0;s<16;++s)t+=J.d(a.a,a.d+(-1+s*32))
A.ia(B.a.j(t,4),a)},
nd(a){var t,s
for(t=8,s=0;s<16;++s)t+=J.d(a.a,a.d+(s-32))
A.ia(B.a.j(t,4),a)},
nf(a){A.ia(128,a)},
nn(a){var t
for(t=0;t<8;++t)a.bd(t*32,8,a,-32)},
nl(a){var t,s,r,q,p
for(t=0,s=0;s<8;++s){r=J.d(a.a,a.d+(t-1))
q=a.a
p=a.d+t
J.aW(q,p,p+8,r)
t+=32}},
ib(a,b){var t,s,r
for(t=0;t<8;++t){s=b.a
r=b.d+t*32
J.aW(s,r,r+8,a)}},
ng(a){var t,s
for(t=8,s=0;s<8;++s)t+=J.d(a.a,a.d+(s-32))+J.d(a.a,a.d+(-1+s*32))
A.ib(B.a.j(t,4),a)},
nh(a){var t,s
for(t=4,s=0;s<8;++s)t+=J.d(a.a,a.d+(s-32))
A.ib(B.a.j(t,3),a)},
ni(a){var t,s
for(t=4,s=0;s<8;++s)t+=J.d(a.a,a.d+(-1+s*32))
A.ib(B.a.j(t,3),a)},
nj(a){A.ib(128,a)},
bx(a,b,c,d,e){var t=b+c+d*32,s=J.d(a.a,a.d+t)+B.a.j(e,3)
if(!((s&-256)>>>0===0))s=s<0?0:255
a.i(0,t,s)},
i9(a,b,c,d,e){A.bx(a,0,0,b,c+d)
A.bx(a,0,1,b,c+e)
A.bx(a,0,2,b,c-e)
A.bx(a,0,3,b,c-d)},
n3(){var t,s,r,q
if(!$.kU){for(t=-255;t<=255;++t){s=$.h7()
r=255+t
q=t<0?-t:t
s.$flags&2&&A.c(s)
s[r]=q
q=$.iZ()
s=B.a.j(s[r],1)
q.$flags&2&&A.c(q)
q[r]=s}for(t=-1020;t<=1020;++t){s=$.j_()
if(t<-128)r=-128
else r=t>127?127:t
s.$flags&2&&A.c(s)
s[1020+t]=r}for(t=-112;t<=112;++t){s=$.j0()
if(t<-16)r=-16
else r=t>15?15:t
s.$flags&2&&A.c(s)
s[112+t]=r}for(t=-255;t<=510;++t){s=$.ap()
if(t<0)r=0
else r=t>255?255:t
s.$flags&2&&A.c(s)
s[255+t]=r}$.kU=!0}},
i7:function i7(){},
mZ(){var t,s=J.a9(3,u.D)
for(t=0;t<3;++t)s[t]=new Uint8Array(11)
return new A.ed(s)},
nD(){var t,s,r,q,p=new Uint8Array(3),o=J.a9(4,u.B)
for(t=u.V,s=0;s<4;++s){r=J.a9(8,t)
for(q=0;q<8;++q)r[q]=A.mZ()
o[s]=r}B.e.aq(p,0,3,255)
return new A.ih(p,o)},
ic:function ic(){this.d=$},
ig:function ig(){},
ii:function ii(a,b){var _=this
_.b=_.a=!1
_.c=!0
_.d=a
_.e=b},
ed:function ed(a){this.a=a},
ih:function ih(a,b){this.a=a
this.b=b},
i8:function i8(a,b){var _=this
_.a=$
_.b=null
_.d=_.c=$
_.e=a
_.f=b},
bb:function bb(){var _=this
_.b=_.a=0
_.c=!1
_.d=0},
eg:function eg(){this.b=this.a=0},
fX:function fX(a,b,c){this.a=a
this.b=b
this.c=c},
eh:function eh(a,b){var _=this
_.a=a
_.b=$
_.c=b
_.e=_.d=null
_.f=$},
ei:function ei(a,b,c){this.a=a
this.b=b
this.c=c},
jE(a,b){var t,s=A.k([],u.A),r=A.k([],u.F),q=new Uint32Array(2),p=new A.fV(a,q)
q=p.e=J.M(B.n.gv(q),0,null)
t=a.D()
q.$flags&2&&A.c(q)
if(0>=q.length)return A.a(q,0)
q[0]=t
t=a.D()
q.$flags&2&&A.c(q)
if(1>=q.length)return A.a(q,1)
q[1]=t
t=a.D()
q.$flags&2&&A.c(q)
if(2>=q.length)return A.a(q,2)
q[2]=t
t=a.D()
q.$flags&2&&A.c(q)
if(3>=q.length)return A.a(q,3)
q[3]=t
t=a.D()
q.$flags&2&&A.c(q)
if(4>=q.length)return A.a(q,4)
q[4]=t
t=a.D()
q.$flags&2&&A.c(q)
if(5>=q.length)return A.a(q,5)
q[5]=t
t=a.D()
q.$flags&2&&A.c(q)
if(6>=q.length)return A.a(q,6)
q[6]=t
t=a.D()
q.$flags&2&&A.c(q)
if(7>=q.length)return A.a(q,7)
q[7]=t
p.b=!1
return new A.ef(p,b,s,r)},
by(a,b){return B.a.j(a+B.a.J(1,b)-1,b)},
ef:function ef(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=null
_.w=_.r=_.f=0
_.x=null
_.Q=_.z=_.y=0
_.as=null
_.at=0
_.ax=c
_.ay=null
_.ch=d
_.CW=0
_.cx=null
_.cy=$
_.db=0
_.dx=null
_.fr=_.dy=0},
fb:function fb(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=null
_.w=_.r=_.f=0
_.x=null
_.Q=_.z=_.y=0
_.as=null
_.at=0
_.ax=c
_.ay=null
_.ch=d
_.CW=0
_.cx=null
_.cy=$
_.db=0
_.dx=null
_.fr=_.dy=0},
fV:function fV(a,b){var _=this
_.a=0
_.b=!0
_.c=a
_.d=b
_.e=$},
id:function id(a,b){this.a=a
this.b=b},
bc(a,b){return((a^b)>>>1&2139062143)+((a&b)>>>0)},
ca(a){if(a<0)return 0
if(a>255)return 255
return a},
ie(a,b,c){return Math.abs(b-c)-Math.abs(a-c)},
no(a,b,c){return 4278190080},
np(a,b,c){return a},
nu(a,b,c){if(!(c>=0&&c<b.length))return A.a(b,c)
return b[c]},
nv(a,b,c){var t=c+1
if(!(t>=0&&t<b.length))return A.a(b,t)
return b[t]},
nw(a,b,c){var t=c-1
if(!(t>=0&&t<b.length))return A.a(b,t)
return b[t]},
nx(a,b,c){var t,s,r=b.length
if(!(c>=0&&c<r))return A.a(b,c)
t=b[c]
s=c+1
if(!(s<r))return A.a(b,s)
return A.bc(A.bc(a,b[s]),t)},
ny(a,b,c){var t=c-1
if(!(t>=0&&t<b.length))return A.a(b,t)
return A.bc(a,b[t])},
nz(a,b,c){if(!(c>=0&&c<b.length))return A.a(b,c)
return A.bc(a,b[c])},
nA(a,b,c){var t=c-1,s=b.length
if(!(t>=0&&t<s))return A.a(b,t)
t=b[t]
if(!(c>=0&&c<s))return A.a(b,c)
return A.bc(t,b[c])},
nB(a,b,c){var t,s,r=b.length
if(!(c>=0&&c<r))return A.a(b,c)
t=b[c]
s=c+1
if(!(s<r))return A.a(b,s)
return A.bc(t,b[s])},
nq(a,b,c){var t,s,r=c-1,q=b.length
if(!(r>=0&&r<q))return A.a(b,r)
r=b[r]
if(!(c>=0&&c<q))return A.a(b,c)
t=b[c]
s=c+1
if(!(s<q))return A.a(b,s)
s=b[s]
return A.bc(A.bc(a,r),A.bc(t,s))},
nr(a,b,c){var t,s,r=b.length
if(!(c>=0&&c<r))return A.a(b,c)
t=b[c]
s=c-1
if(!(s>=0&&s<r))return A.a(b,s)
s=b[s]
return A.ie(t>>>24,a>>>24,s>>>24)+A.ie(t>>>16&255,a>>>16&255,s>>>16&255)+A.ie(t>>>8&255,a>>>8&255,s>>>8&255)+A.ie(t&255,a&255,s&255)<=0?t:a},
ns(a,b,c){var t,s,r=b.length
if(!(c>=0&&c<r))return A.a(b,c)
t=b[c]
s=c-1
if(!(s>=0&&s<r))return A.a(b,s)
s=b[s]
return(A.ca((a>>>24)+(t>>>24)-(s>>>24))<<24|A.ca((a>>>16&255)+(t>>>16&255)-(s>>>16&255))<<16|A.ca((a>>>8&255)+(t>>>8&255)-(s>>>8&255))<<8|A.ca((a&255)+(t&255)-(s&255)))>>>0},
nt(a,b,c){var t,s,r,q,p,o=b.length
if(!(c>=0&&c<o))return A.a(b,c)
t=b[c]
s=c-1
if(!(s>=0&&s<o))return A.a(b,s)
s=b[s]
r=A.bc(a,t)
t=r>>>24
o=r>>>16&255
q=r>>>8&255
p=r>>>0&255
return(A.ca(t+B.a.W(t-(s>>>24),2))<<24|A.ca(o+B.a.W(o-(s>>>16&255),2))<<16|A.ca(q+B.a.W(q-(s>>>8&255),2))<<8|A.ca(p+B.a.W(p-(s&255),2)))>>>0},
c9:function c9(a,b){this.a=a
this.b=b},
fW:function fW(a){var _=this
_.a=a
_.c=_.b=0
_.d=null
_.e=0},
ik:function ik(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=0
_.r=1
_.w=!1
_.x=$
_.y=!1},
ej:function ej(){},
fc:function fc(a,b,c){var _=this
_.a=a
_.b=b
_.e=c
_.f=$
_.r=1
_.x=_.w=$},
j9(a){var t,s=J.ff(a,u.gj)
for(t=0;t<a;++t)s[t]=new A.eS()
return new A.dl(s,0)},
ms(){var t,s,r=J.a9(5,u.fa)
for(t=0;t<5;++t)r[t]=A.j9(0)
s=J.a9(64,u.ak)
for(t=0;t<64;++t)s[t]=new A.eT()
return new A.dk(r,s)},
eS:function eS(){this.b=this.a=0},
eT:function eT(){this.b=this.a=0},
dl:function dl(a,b){this.a=a
this.b=b},
dk:function dk(a,b){var _=this
_.a=a
_.b=!1
_.c=0
_.e=_.d=!1
_.f=b},
dm:function dm(){var _=this
_.b=_.a=null
_.e=_.d=0},
eV:function eV(a){this.a=a
this.b=null},
d1:function d1(a,b){this.a=a
this.b=b},
d2:function d2(a,b){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=a
_.w=""
_.z=b
_.as=0
_.at=null
_.ch=_.ay=0},
dx:function dx(a,b){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=a
_.w=""
_.z=b
_.as=0
_.at=null
_.ch=_.ay=0},
il:function il(){this.b=this.a=null},
kh(a){return new A.cw(a.a,a.b,B.e.fp(a.c,0))},
eW:function eW(a,b){this.a=a
this.b=b},
cw:function cw(a,b,c){this.a=a
this.b=b
this.c=c},
J(a,b,c,d,e,f,g,h,i,j,k,l,m){var t,s=new A.b2(null,null,null,a,h,e,d,0)
B.c.M(s.gar(),s)
s.c=g
if(b!=null)s.e=A.dd(b)
t=!1
if(j==null)if(m)t=s.gH()===B.v||s.gH()===B.x||s.gH()===B.y||s.gH()===B.f||s.gH()===B.l
s.dY(l,f,c,i,t?s.h4(c,k,i):j)
return s},
ht(a,b,c,d){var t,s,r,q=null,p=a.e
p=p==null?q:A.dd(p)
t=a.c
t=t==null?q:A.kh(t)
s=a.w
r=a.r
p=new A.b2(q,t,p,q,r,s,a.y,a.z)
p.fJ(a,b,c,d)
return p},
bQ(a,b,c){var t,s,r,q,p=null,o=a.a
o=o==null?p:o.bb(c)
t=a.e
t=t==null?p:A.dd(t)
s=a.c
s=s==null?p:A.kh(s)
r=a.w
q=a.r
o=new A.b2(o,s,t,p,q,r,a.y,a.z)
o.fI(a,b,c)
return o},
eR:function eR(a,b){this.a=a
this.b=b},
b2:function b2(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=null
_.c=b
_.d=null
_.e=c
_.f=d
_.r=e
_.w=f
_.x=$
_.y=g
_.z=h},
hw:function hw(a,b){this.a=a
this.b=b},
hv:function hv(){},
a5:function a5(){},
mu(a,b,c){return new A.cC(new Uint16Array(a*b*c),a,b,c)},
cC:function cC(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
mv(a,b,c){return new A.cD(new Float32Array(a*b*c),a,b,c)},
cD:function cD(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dp:function dp(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dq:function dq(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dr:function dr(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
ds:function ds(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
cE:function cE(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.r=null
_.a=d
_.b=e
_.c=f},
cF:function cF(a,b,c,d,e){var _=this
_.d=a
_.e=b
_.a=c
_.b=d
_.c=e},
cG:function cG(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.r=null
_.a=d
_.b=e
_.c=f},
mw(a,b,c){return new A.cH(new Uint32Array(a*b*c),a,b,c)},
cH:function cH(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
cI:function cI(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.r=null
_.a=d
_.b=e
_.c=f},
ks(a,b,c){return new A.cJ(new Uint8Array(a*b*c),null,a,b,c)},
cJ:function cJ(a,b,c,d,e){var _=this
_.d=a
_.e=b
_.a=c
_.b=d
_.c=e},
fd:function fd(a,b){this.a=a
this.b=b},
ay:function ay(){},
dP:function dP(a,b,c){this.c=a
this.a=b
this.b=c},
dQ:function dQ(a,b,c){this.c=a
this.a=b
this.b=c},
dR:function dR(a,b,c){this.c=a
this.a=b
this.b=c},
dS:function dS(a,b,c){this.c=a
this.a=b
this.b=c},
dT:function dT(a,b,c){this.c=a
this.a=b
this.b=c},
dU:function dU(a,b,c){this.c=a
this.a=b
this.b=c},
dV:function dV(a,b,c){this.c=a
this.a=b
this.b=c},
cP:function cP(a,b,c){this.c=a
this.a=b
this.b=c},
kG(a){return new A.az(new Uint8Array(A.w(a.c)),a.a,a.b)},
az:function az(a,b,c){this.c=a
this.a=b
this.b=c},
ji(a){return new A.bW(-1,0,-a.c,a)},
bW:function bW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jj(a){return new A.bX(-1,0,-a.c,a)},
bX:function bX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jk(a){return new A.bY(-1,0,-a.c,a)},
bY:function bY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jl(a){return new A.bZ(-1,0,-a.c,a)},
bZ:function bZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jm(a){return new A.c_(-1,0,-a.c,a)},
c_:function c_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jn(a){return new A.c0(-1,0,-a.c,a)},
c0:function c0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aH(a,b,c,d,e){a.Z(b-1,c)
return new A.fu(a,b,b+d-1,c+e-1)},
fu:function fu(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
dW(a){return new A.c1(-1,0,0,-1,0,a)},
c1:function c1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jo(a){return new A.c2(-1,0,-a.c,a)},
c2:function c2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dX(a){return new A.c3(-1,0,0,-2,0,a)},
c3:function c3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jp(a){return new A.c4(-1,0,-a.c,a)},
c4:function c4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dY(a){return new A.c5(-1,0,0,-(a.c<<2>>>0),a)},
c5:function c5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hP(a){return new A.c6(-1,0,-a.c,a)},
c6:function c6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
A:function A(){},
oO(a,b){switch(b.a){case 0:A.h4(a)
break
case 1:A.oQ(a)
break
case 2:A.oP(a)
break}return a},
oQ(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a.gar().length
for(t=u.g,s=0;s<d;++s){r=a.x
if(r===$)r=a.x=A.k([],t)
if(!(s<r.length))return A.a(r,s)
q=r[s]
p=q.a
o=p==null
n=o?e:p.a
if(n==null)n=0
m=o?e:p.b
if(m==null)m=0
l=B.a.W(m,2)
p=a.a
if((p==null?e:p.gR())!=null)for(k=m-1,j=0;j<l;++j,--k)for(i=0;i<n;++i){p=q.a
h=p==null?e:p.O(i,j,e)
if(h==null)h=new A.A()
p=q.a
g=p==null?e:p.O(i,k,e)
if(g==null)g=new A.A()
f=h.gL()
h.sL(g.gL())
g.sL(f)}else for(k=m-1,j=0;j<l;++j,--k)for(i=0;i<n;++i){p=q.a
h=p==null?e:p.O(i,j,e)
if(h==null)h=new A.A()
p=q.a
g=p==null?e:p.O(i,k,e)
if(g==null)g=new A.A()
f=h.gm()
h.sm(g.gm())
g.sm(f)
f=h.gp()
h.sp(g.gp())
g.sp(f)
f=h.gq()
h.sq(g.gq())
g.sq(f)
f=h.gt()
h.st(g.gt())
g.st(f)}}return a},
h4(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c=a.gar().length
for(t=u.g,s=0;s<c;++s){r=a.x
if(r===$)r=a.x=A.k([],t)
if(!(s<r.length))return A.a(r,s)
q=r[s]
p=q.a
o=p==null
n=o?d:p.a
if(n==null)n=0
m=o?d:p.b
if(m==null)m=0
l=B.a.W(n,2)
p=a.a
if((p==null?d:p.gR())!=null)for(k=n-1,j=0;j<m;++j)for(i=k,h=0;h<l;++h,--i){p=q.a
g=p==null?d:p.O(h,j,d)
if(g==null)g=new A.A()
p=q.a
f=p==null?d:p.O(i,j,d)
if(f==null)f=new A.A()
e=g.gL()
g.sL(f.gL())
f.sL(e)}else for(k=n-1,j=0;j<m;++j)for(i=k,h=0;h<l;++h,--i){p=q.a
g=p==null?d:p.O(h,j,d)
if(g==null)g=new A.A()
p=q.a
f=p==null?d:p.O(i,j,d)
if(f==null)f=new A.A()
e=g.gm()
g.sm(f.gm())
f.sm(e)
e=g.gp()
g.sp(f.gp())
f.sp(e)
e=g.gq()
g.sq(f.gq())
f.sq(e)
e=g.gt()
g.st(f.gt())
f.st(e)}}return a},
oP(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b=a.gar().length
for(t=u.g,s=0;s<b;++s){r=a.x
if(r===$)r=a.x=A.k([],t)
if(!(s<r.length))return A.a(r,s)
q=r[s]
p=q.a
o=p==null
n=o?c:p.a
if(n==null)n=0
m=o?c:p.b
if(m==null)m=0
l=B.a.W(m,2)
if((o?c:p.gR())!=null)for(k=m-1,j=n-1,i=0;i<l;++i,--k)for(h=j,g=0;g<n;++g,--h){p=q.a
f=p==null?c:p.O(g,i,c)
if(f==null)f=new A.A()
p=q.a
e=p==null?c:p.O(h,k,c)
if(e==null)e=new A.A()
d=f.gL()
f.sL(e.gL())
e.sL(d)}else for(k=m-1,j=n-1,i=0;i<l;++i,--k)for(h=j,g=0;g<n;++g,--h){p=q.a
f=p==null?c:p.O(g,i,c)
if(f==null)f=new A.A()
p=q.a
e=p==null?c:p.O(h,k,c)
if(e==null)e=new A.A()
d=f.gm()
f.sm(e.gm())
e.sm(d)
d=f.gp()
f.sp(e.gp())
e.sp(d)
d=f.gq()
f.sq(e.gq())
e.sq(d)
d=f.gt()
f.st(e.gt())
e.st(d)}}return a},
hk:function hk(a,b){this.a=a
this.b=b},
m(a){return new A.hu(a)},
hu:function hu(a){this.a=a},
q(a,b,c,d){var t=J.a1(a),s=t.gu(a)
t=c==null?t.gu(a):d+c
return new A.a6(a,d,Math.min(s,t),d,b)},
n(a,b,c){var t=a.a,s=a.d,r=a.b,q=J.aY(t),p=b==null?a.c:a.d+c+b
return new A.a6(t,r,Math.min(q,p),s+c,a.e)},
a6:function a6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fq:function fq(a){var _=this
_.a=$
_.b=10
_.c=16
_.d=3
_.f=_.e=$
_.r=null
_.Q=_.z=_.y=_.x=_.w=$
_.as=a
_.ax=_.at=$},
aG(a,b){return new A.fs(a,new Uint8Array(b))},
fs:function fs(a,b){this.a=0
this.b=a
this.c=b},
fK:function fK(){},
cY:function cY(a,b){this.a=a
this.b=b},
mX(a){throw A.f(A.ba("Uint64List not supported on the web."))},
mx(a,b,c){return J.j1(a,b,c)},
kR(a,b){return J.al(a,b,null)},
mo(a){return J.k1(a,0,null)},
mp(a){return a.jQ(0,0,null)},
ly(a){return v.mangledGlobalNames[a]},
oa(a,b,c){u.Z.a(a)
if(A.v(c)>=1)return a.$1(b)
return a.$0()},
oR(a){var t,s,r,q,p,o=a.gu(0)
for(t=1,s=0;o>0;){r=3800>o?o:3800
o-=r
while(--r,r>=0){q=a.b
q.toString
p=a.c++
if(!(p>=0&&p<q.length))return A.a(q,p)
t+=q[p]
s+=t}t=B.a.a1(t,65521)
s=B.a.a1(s,65521)}return(s<<16|t)>>>0},
aU(a,b){var t,s,r=J.a1(a),q=r.gu(a)
b^=4294967295
for(t=0;q>=8;){s=t+1
b=B.z[(b^r.n(a,t))&255]^b>>>8
t=s+1
b=B.z[(b^r.n(a,s))&255]^b>>>8
s=t+1
b=B.z[(b^r.n(a,t))&255]^b>>>8
t=s+1
b=B.z[(b^r.n(a,s))&255]^b>>>8
s=t+1
b=B.z[(b^r.n(a,t))&255]^b>>>8
t=s+1
b=B.z[(b^r.n(a,s))&255]^b>>>8
s=t+1
b=B.z[(b^r.n(a,t))&255]^b>>>8
t=s+1
b=B.z[(b^r.n(a,s))&255]^b>>>8
q-=8}if(q>0)do{s=t+1
b=B.z[(b^r.n(a,t))&255]^b>>>8
if(--q,q>0){t=s
continue}else break}while(!0)
return(b^4294967295)>>>0},
p5(a){var t,s,r,q,p,o,n,m,l,k,j,i=null,h=new A.bs(A.dw()).aA(a.a,i)
h.toString
t=new A.bs(A.dw()).aA(a.b,i)
t.toString
if(h.gX()!==t.gX()||h.gK()!==t.gK())throw A.f(A.bf("Image dimensions must match"))
s=A.Y(6,0,!1,u.p)
r=Math.max(1,B.b.aU(Math.sqrt(h.gX()*h.gK()/65536)))
q=0
for(;;){p=h.a
p=p==null?i:p.b
if(!(q<(p==null?0:p)))break
o=0
for(;;){p=h.a
n=p==null
m=n?i:p.a
if(!(o<(m==null?0:m)))break
l=n?i:p.O(o,q,i)
if(l==null)l=new A.A()
p=t.a
k=p==null?i:p.O(o,q,i)
if(k==null)k=new A.A()
j=(Math.abs(l.gm()-k.gm())+Math.abs(l.gp()-k.gp())+Math.abs(l.gq()-k.gq()))/3
if(j===0)p=0
else if(j<=2)p=1
else if(j<=5)p=2
else if(j<=10)p=3
else p=j<=20?4:5
B.c.i(s,p,s[p]+1)
o+=r}q+=r}return s},
jP(a,b,c,d,e,f,g,h,i,j,k){var t,s,r,q,p,o,n,m
if(j==null)j=0
if(k==null)k=0
if(i==null)i=b.gX()
if(h==null)h=b.gK()
if(e==null)e=a.gX()<b.gX()?a.gX():b.gX()
if(d==null)d=a.gK()<b.gK()?a.gK():b.gK()
t=c===B.an
if(!t&&a.gbl())a=a.dw(a.gb4())
s=h/d
r=i/e
q=u.p
p=J.a9(d,q)
for(o=0;o<d;++o)p[o]=k+B.b.h(o*s)
n=J.a9(e,q)
for(m=0;m<e;++m)n[m]=j+B.b.h(m*r)
if(t)A.od(b,a,f,g,e,d,n,p,null,B.aT)
else A.ob(b,a,f,g,e,d,n,p,c,!1,null,B.aT)
return a},
od(a,b,c,d,e,f,g,a0,a1,a2){var t,s,r,q,p,o,n,m,l,k,j,i=b.gX(),h=b.gK()
for(t=g.length,s=a0.length,r=null,q=0;q<f;++q)for(p=d+q,o=p>=h,n=0;n<e;++n){m=c+n
if(m>=i||o)continue
if(!(n<t))return A.a(g,n)
l=g[n]
if(!(q<s))return A.a(a0,q)
k=a0[q]
j=a.a
r=j==null?null:j.O(l,k,r)
if(r==null)r=new A.A()
b.bJ(m,p,r)}},
ob(a,b,c,d,e,f,g,h,i,j,k,a0){var t,s,r,q,p,o,n,m,l
for(t=g.length,s=h.length,r=null,q=0;q<f;++q)for(p=d+q,o=0;o<e;++o){if(!(o<t))return A.a(g,o)
n=g[o]
if(!(q<s))return A.a(h,q)
m=h[q]
l=a.a
r=l==null?null:l.O(n,m,r)
if(r==null)r=new A.A()
A.oK(b,c+o,p,r,i,!1,k,a0)}},
oK(a5,a6,a7,a8,a9,b0,b1,b2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
if(!a5.f_(a6,a7))return a5
if(a9===B.an||a5.gbl())if(a5.f_(a6,a7)){a5.dE(a6,a7).ac(a8)
return a5}t=a8.ga9()
s=a8.ga5()
r=a8.ga8()
q=a8.gu(a8)<4?1:a8.gaa()
if(q===0)return a5
p=a5.dE(a6,a7)
o=p.ga9()
n=p.ga5()
m=p.ga8()
l=p.gaa()
switch(a9.a){case 0:return a5
case 1:break
case 2:t=Math.max(o,t)
s=Math.max(n,s)
r=Math.max(m,r)
break
case 3:t=1-(1-t)*(1-o)
s=1-(1-s)*(1-n)
r=1-(1-r)*(1-m)
break
case 4:k=q*l
j=1-l
i=1-q
h=t*j+o*i
g=s*j+n*i
f=r*j+m*i
i=B.b.I(q,0.01,1)
j=q<0
e=j?0:1
d=B.b.I(t/i*e,0,0.99)
e=B.b.I(q,0.01,1)
i=j?0:1
c=B.b.I(s/e*i,0,0.99)
i=B.b.I(q,0.01,1)
j=j?0:1
b=B.b.I(r/i*j,0,0.99)
j=o*q
i=n*q
e=m*q
a=k<t*l+j?0:1
a0=k<s*l+i?0:1
a1=k<r*l+e?0:1
t=(k+h)*(1-a)+(j/(1-d)+h)*a
s=(k+g)*(1-a0)+(i/(1-c)+g)*a0
r=(k+f)*(1-a1)+(e/(1-b)+f)*a1
break
case 5:t=o+t
s=n+s
r=m+r
break
case 6:t=Math.min(o,t)
s=Math.min(n,s)
r=Math.min(m,r)
break
case 7:t=o*t
s=n*s
r=m*r
break
case 8:t=t!==0?1-(1-o)/t:0
s=s!==0?1-(1-n)/s:0
r=r!==0?1-(1-m)/r:0
break
case 9:j=1-l
i=1-q
e=t*j
a2=o*i
t=2*o<l?2*t*o+e+a2:q*l-2*(l-o)*(q-t)+e+a2
e=s*j
a2=n*i
s=2*n<l?2*s*n+e+a2:q*l-2*(l-n)*(q-s)+e+a2
j=r*j
i=m*i
r=2*m<l?2*r*m+j+i:q*l-2*(l-m)*(q-r)+j+i
break
case 10:j=l===0
if(j)t=0
else{i=o/l
t=o*(q*i+2*t*(1-i))+t*(1-l)+o*(1-q)}if(j)s=0
else{i=n/l
s=n*(q*i+2*s*(1-i))+s*(1-l)+n*(1-q)}if(j)r=0
else{j=m/l
r=m*(q*j+2*r*(1-j))+r*(1-l)+m*(1-q)}break
case 11:j=2*t
i=1-l
e=1-q
a2=t*i
a3=o*e
t=j<q?j*o+a2+a3:q*l-2*(l-o)*(q-t)+a2+a3
j=2*s
a2=s*i
a3=n*e
s=j<q?j*n+a2+a3:q*l-2*(l-n)*(q-s)+a2+a3
j=2*r
i=r*i
e=m*e
r=j<q?j*m+i+e:q*l-2*(l-m)*(q-r)+i+e
break
case 12:t=Math.abs(t-o)
s=Math.abs(s-n)
r=Math.abs(r-m)
break
case 13:t=o-t
s=n-s
r=m-r
break
case 14:t=t!==0?o/t:0
s=s!==0?n/s:0
r=r!==0?m/r:0
break}a4=1-q
p.sa9(t*q+o*l*a4)
p.sa5(s*q+n*l*a4)
p.sa8(r*q+m*l*a4)
p.saa(q+l*a4)
return a5},
oM(a,b,c,d,e,f,g){var t,s=B.b.I(Math.min(d,e),0,a.gX()-1),r=B.b.I(Math.min(f,g),0,a.gK()-1),q=B.b.I(Math.max(d,e),0,a.gX()-1),p=B.b.I(Math.max(f,g),0,a.gK()-1),o=a.a.b6(0,s,r,q-s+1,p-r+1)
for(t=o.a;o.F();)t.ac(c)
return a},
ml(a5,a6,a7,a8,a9,b0,b1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=b1<16384,a4=a7>a9?a9:a7
for(t=1;t<=a4;)t=t<<1>>>0
t=t>>>1
s=t>>>1
r=A.k([0,0],u.t)
for(q=a5.length,p=t,t=s;t>=1;p=t,t=s){o=a6+b0*(a9-p)
n=b0*t
m=b0*p
l=a8*t
k=a8*p
for(j=(a7&t)>>>0!==0,i=a8*(a7-p),h=a6;h<=o;h+=m){g=h+i
for(f=h;f<=g;f+=k){e=f+l
d=f+n
c=d+l
if(a3){if(!(f>=0&&f<q))return A.a(a5,f)
b=a5[f]
if(!(d>=0&&d<q))return A.a(a5,d)
A.df(b,a5[d],r)
a=r[0]
a0=r[1]
if(!(e>=0&&e<q))return A.a(a5,e)
b=a5[e]
if(!(c>=0&&c<q))return A.a(a5,c)
A.df(b,a5[c],r)
a1=r[0]
a2=r[1]
A.df(a,a1,r)
b=r[0]
a5.$flags&2&&A.c(a5)
a5[f]=b
a5[e]=r[1]
A.df(a0,a2,r)
b=r[0]
a5.$flags&2&&A.c(a5)
a5[d]=b
a5[c]=r[1]}else{if(!(f>=0&&f<q))return A.a(a5,f)
b=a5[f]
if(!(d>=0&&d<q))return A.a(a5,d)
A.dg(b,a5[d],r)
a=r[0]
a0=r[1]
if(!(e>=0&&e<q))return A.a(a5,e)
b=a5[e]
if(!(c>=0&&c<q))return A.a(a5,c)
A.dg(b,a5[c],r)
a1=r[0]
a2=r[1]
A.dg(a,a1,r)
b=r[0]
a5.$flags&2&&A.c(a5)
a5[f]=b
a5[e]=r[1]
A.dg(a0,a2,r)
b=r[0]
a5.$flags&2&&A.c(a5)
a5[d]=b
a5[c]=r[1]}}if(j){d=f+n
if(a3){if(!(f>=0&&f<q))return A.a(a5,f)
b=a5[f]
if(!(d>=0&&d<q))return A.a(a5,d)
A.df(b,a5[d],r)
a=r[0]
b=r[1]
a5.$flags&2&&A.c(a5)
a5[d]=b}else{if(!(f>=0&&f<q))return A.a(a5,f)
b=a5[f]
if(!(d>=0&&d<q))return A.a(a5,d)
A.dg(b,a5[d],r)
a=r[0]
b=r[1]
a5.$flags&2&&A.c(a5)
a5[d]=b}a5.$flags&2&&A.c(a5)
if(!(f>=0&&f<q))return A.a(a5,f)
a5[f]=a}}if((a9&t)>>>0!==0){g=h+i
for(f=h;f<=g;f+=k){e=f+l
if(a3){if(!(f>=0&&f<q))return A.a(a5,f)
j=a5[f]
if(!(e>=0&&e<q))return A.a(a5,e)
A.df(j,a5[e],r)
a=r[0]
j=r[1]
a5.$flags&2&&A.c(a5)
a5[e]=j}else{if(!(f>=0&&f<q))return A.a(a5,f)
j=a5[f]
if(!(e>=0&&e<q))return A.a(a5,e)
A.dg(j,a5[e],r)
a=r[0]
j=r[1]
a5.$flags&2&&A.c(a5)
a5[e]=j}a5.$flags&2&&A.c(a5)
if(!(f>=0&&f<q))return A.a(a5,f)
a5[f]=a}}s=t>>>1}},
df(a,b,c){var t,s,r,q,p=$.ac()
p.$flags&2&&A.c(p)
p[0]=a
t=$.aj()
if(0>=t.length)return A.a(t,0)
s=t[0]
p[0]=b
r=t[0]
q=s+(r&1)+B.a.j(r,1)
B.c.i(c,0,q)
B.c.i(c,1,q-r)},
dg(a,b,c){var t=a-B.a.j(b,1)&65535
B.c.i(c,1,t)
B.c.i(c,0,b+t-32768&65535)},
oN(a){var t,s,r,q,p,o,n,m,l,k,j,i=null,h=new A.fi()
if(h.bm(a))return h
t=new A.bs(A.dw())
if(t.bm(a))return t
s=new A.hn()
s.f=A.q(a,!1,i,0)
s.a=new A.dj(A.k([],u.b))
if(s.ea())return s
r=new A.il()
if(r.bm(a))return r
q=new A.i2()
if(q.es(A.q(a,!1,i,0))!=null)return q
if(A.kM(a).c===943870035)return new A.hU()
if(A.mk(a))return new A.hi()
p=new A.eD(!1)
if(p.bm(a))return p
o=new A.hR(A.k([],u.s))
if(o.bm(a))return o
n=new A.i0()
m=A.q(a,!1,i,0)
l=n.a=new A.e9(B.ak)
l.bS(m)
if(l.f1())return n
k=new A.hp()
l=A.q(a,!1,i,0)
k.a=l
l=A.ki(l)
k.b=l
if(l!=null)return k
j=new A.hY()
if(j.aS(a)!=null)return j
return i},
jQ(a){var t=A.oN(a)
return t==null?null:t.aA(a,null)},
ls(a){return new A.hQ(B.jp,6,null).jc(a,!1)},
nI(a,b,c,d,e,f){A.nF(f,a,b,c,d,e,!0,f)},
nJ(a,b,c,d,e,f){A.nG(f,a,b,c,d,e,!0,f)},
nH(a,b,c,d,e,f){A.nE(f,a,b,c,d,e,!0,f)},
d0(a,b,c,d,e){var t,s,r
for(t=0;t<d;++t){s=J.d(a.a,a.d+t)
r=J.d(b.a,b.d+t)
J.x(c.a,c.d+t,s+r)}},
nF(a,b,c,d,e,f,g,h){var t,s,r=null,q=e*d,p=e+f,o=A.q(a,!1,r,q),n=A.q(a,!1,r,q),m=A.n(n,r,0)
if(e===0){n.i(0,0,J.d(o.a,o.d))
A.d0(A.n(o,r,1),m,A.n(n,r,1),b-1,!0)
m.d+=d
o.d+=d
n.d+=d
e=1}for(t=-d,s=b-1;e<p;){A.d0(o,A.n(m,r,t),n,1,!0)
A.d0(A.n(o,r,1),m,A.n(n,r,1),s,!0);++e
m.d+=d
o.d+=d
n.d+=d}},
nG(a,b,c,d,e,f,g,h){var t=null,s=e*d,r=e+f,q=A.q(a,!1,t,s),p=A.q(h,!1,t,s),o=A.n(p,t,0)
if(e===0){p.i(0,0,J.d(q.a,q.d))
A.d0(A.n(q,t,1),o,A.n(p,t,1),b-1,!0)
q.d+=d
p.d+=d
e=1}else o.d-=d
while(e<r){A.d0(q,o,p,b,!0);++e
o.d+=d
q.d+=d
p.d+=d}},
nE(a,b,c,d,e,f,g,h){var t,s,r,q,p,o=null,n=e*d,m=e+f,l=A.q(a,!1,o,n),k=A.q(h,!1,o,n),j=A.n(k,o,0)
if(e===0){k.i(0,0,J.d(l.a,l.d))
A.d0(A.n(l,o,1),j,A.n(k,o,1),b-1,!0)
j.d+=d
l.d+=d
k.d+=d
e=1}for(t=-d;e<m;){A.d0(l,A.n(j,o,t),k,1,!0)
for(s=1;s<b;++s){r=s-d
q=J.d(j.a,j.d+(s-1))+J.d(j.a,j.d+r)-J.d(j.a,j.d+(r-1))
if((q&4294967040)>>>0===0)p=q
else p=q<0?0:255
r=J.d(l.a,l.d+s)
J.x(k.a,k.d+s,r+p)}++e
j.d+=d
l.d+=d
k.d+=d}},
ln(a){var t="ifd0",s=A.bQ(a,!1,!1)
if(!a.gc3().n(0,t).a.aO(274)||a.gc3().n(0,t).gc4()===1)return s
s.e=A.dd(a.gc3())
s.gc3().n(0,t).sc4(null)
switch(a.gc3().n(0,t).gc4()){case 2:return A.h4(s)
case 3:return A.oO(s,B.cE)
case 4:return A.h4(A.h3(s,180))
case 5:return A.h4(A.h3(s,90))
case 6:return A.h3(s,90)
case 7:return A.h4(A.h3(s,-90))
case 8:return A.h3(s,-90)}return s},
h3(a8,a9){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=null,a7=B.a.a1(a9,360)
a8.gbl()
if(B.a.a1(a7,90)===0)switch(B.a.W(a7,90)){case 1:return A.oz(a8)
case 2:return A.ox(a8)
case 3:return A.oy(a8)
default:return A.bQ(a8,!1,!1)}t=a7*3.141592653589793/180
s=Math.cos(t)
r=Math.sin(t)
q=a8.gX()
p=a8.gX()
o=a8.gK()
n=a8.gK()
m=0.5*a8.gX()
l=0.5*a8.gK()
o=Math.abs(q*s)+Math.abs(o*r)
k=0.5*o
n=Math.abs(p*r)+Math.abs(n*s)
j=0.5*n
i=a8.gar().length
for(q=u.g,h=a6,g=0;g<i;++g){f=a8.x
if(f===$)f=a8.x=A.k([],q)
if(!(g<f.length))return A.a(f,g)
e=f[g]
p=h==null
d=p?a6:h.cU()
if(d==null){c=B.b.h(o)
d=A.ht(a8,B.b.h(n),!0,c)}if(p)h=d
for(p=d.a,p=p.gG(p);p.F();){b=p.gP()
a=b.gaQ()
a0=b.gaI()
c=a-k
a1=a0-j
a2=m+c*s+a1*r
a3=l-c*r+a1*s
c=!1
if(a2>=0)if(a3>=0){a1=e.a
a4=a1==null
a5=a4?a6:a1.a
if(a2<(a5==null?0:a5)){c=a4?a6:a1.b
c=a3<(c==null?0:c)}}if(c)d.bJ(a,a0,e.ff(a2,a3,B.cM))}}h.toString
return h},
oz(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
for(t=a.gar(),s=t.length,r=g,q=0;q<t.length;t.length===s||(0,A.aa)(t),++q){p=t[q]
o=r==null
n=o?g:r.cU()
if(n==null){m=p.a
l=m==null
k=l?g:m.b
if(k==null)k=0
m=l?g:m.a
n=A.ht(p,m==null?0:m,!0,k)}if(o)r=n
o=p.a
o=o==null?g:o.b
j=(o==null?0:o)-1
i=0
for(;;){o=n.a
o=o==null?g:o.b
if(!(i<(o==null?0:o)))break
h=0
for(;;){o=n.a
o=o==null?g:o.a
if(!(h<(o==null?0:o)))break
o=p.a
o=o==null?g:o.O(i,j-h,g)
n.bJ(h,i,o==null?new A.A():o);++h}++i}}r.toString
return r},
ox(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
for(t=a.gar(),s=t.length,r=g,q=0;q<t.length;t.length===s||(0,A.aa)(t),++q){p=t[q]
o=p.a
n=o==null
m=n?g:o.a
l=(m==null?0:m)-1
o=n?g:o.b
k=(o==null?0:o)-1
o=r==null
j=o?g:r.cU()
if(j==null)j=A.bQ(p,!0,!0)
if(o)r=j
i=0
for(;;){o=j.a
o=o==null?g:o.b
if(!(i<(o==null?0:o)))break
o=k-i
h=0
for(;;){n=j.a
n=n==null?g:n.a
if(!(h<(n==null?0:n)))break
n=p.a
n=n==null?g:n.O(l-h,o,g)
j.bJ(h,i,n==null?new A.A():n);++h}++i}}r.toString
return r},
oy(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
for(t=a.gar(),s=t.length,r=g,q=0;q<t.length;t.length===s||(0,A.aa)(t),++q){p=t[q]
o=a.a
o=o==null?g:o.a
n=(o==null?0:o)-1
o=r==null
m=o?g:r.cU()
if(m==null){l=p.a
k=l==null
j=k?g:l.b
if(j==null)j=0
l=k?g:l.a
m=A.ht(p,l==null?0:l,!0,j)}if(o)r=m
i=0
for(;;){o=m.a
o=o==null?g:o.b
if(!(i<(o==null?0:o)))break
o=n-i
h=0
for(;;){l=m.a
l=l==null?g:l.a
if(!(h<(l==null?0:l)))break
l=p.a
l=l==null?g:l.O(o,h,g)
m.bJ(h,i,l==null?new A.A():l);++h}++i}}r.toString
return r},
iG(a){var t
a=(a&-a)>>>0
t=a!==0?31:32
if((a&65535)!==0)t-=16
if((a&16711935)!==0)t-=8
if((a&252645135)!==0)t-=4
if((a&858993459)!==0)t-=2
return(a&1431655765)!==0?t-1:t},
pb(a){var t
$.k_().i(0,0,a)
t=$.lW()
if(0>=t.length)return A.a(t,0)
return t[0]},
lx(a,b,c,d){return(B.a.I(a,0,255)|B.a.I(b,0,255)<<8|B.a.I(c,0,255)<<16|B.a.I(d,0,255)<<24)>>>0},
aL(a,b,c){var t,s,r,q,p=b.gu(b),o=b.gH(),n=a.gR(),m=n==null?null:n.gH()
if(m==null)m=a.gH()
t=a.gu(a)
if(p===1)b.i(0,0,A.h2(B.b.cX(a.gu(a)>2?a.gah():a.n(0,0)),m,o))
else if(p<=t)for(s=0;s<p;++s)b.i(0,s,A.h2(a.n(0,s),m,o))
else if(t===2){r=A.h2(a.n(0,0),m,o)
if(p===3){b.i(0,0,r)
b.i(0,1,r)
b.i(0,2,r)}else{c=A.h2(a.n(0,1),m,o)
b.i(0,0,r)
b.i(0,1,r)
b.i(0,2,r)
b.i(0,3,c)}}else{for(s=0;s<t;++s)b.i(0,s,A.h2(a.n(0,s),m,o))
q=t===1?b.n(0,0):0
for(s=t;s<p;++s)b.i(0,s,s===3?c:q)}return b},
lr(a,b,c,d,e){var t,s,r=a.gR(),q=r==null?null:r.gH()
if(q==null)q=a.gH()
r=e==null
t=r?null:e.gH()
c=t==null?c:t
if(c==null)c=a.gH()
t=r?null:e.gu(e)
d=t==null?d:t
if(d==null)d=a.gu(a)
if(b==null)b=0
if(c===q&&d===a.gu(a)){if(r)return a.N()
e.ac(a)
return e}switch(c.a){case 3:if(r)s=new A.bh(new Uint8Array(d))
else s=e
return A.aL(a,s,b)
case 0:return A.aL(a,r?new A.cq(d,0):e,b)
case 1:return A.aL(a,r?new A.cs(d,0):e,b)
case 2:if(r){r=d<3?1:2
s=new A.cu(d,new Uint8Array(r))}else s=e
return A.aL(a,s,b)
case 4:if(r)s=new A.cr(new Uint16Array(d))
else s=e
return A.aL(a,s,b)
case 5:if(r)s=new A.ct(new Uint32Array(d))
else s=e
return A.aL(a,s,b)
case 6:if(r)s=new A.co(new Int8Array(d))
else s=e
return A.aL(a,s,b)
case 7:if(r)s=new A.cm(new Int16Array(d))
else s=e
return A.aL(a,s,b)
case 8:if(r)s=new A.cn(new Int32Array(d))
else s=e
return A.aL(a,s,b)
case 9:if(r)s=new A.cj(new Uint16Array(d))
else s=e
return A.aL(a,s,b)
case 10:if(r)s=new A.ck(new Float32Array(d))
else s=e
return A.aL(a,s,b)
case 11:if(r)s=new A.cl(new Float64Array(d))
else s=e
return A.aL(a,s,b)}},
U(a){return 0.299*a.gm()+0.587*a.gp()+0.114*a.gq()},
lq(a,b,c,d,e){var t=1-d/255
B.c.i(e,0,B.b.aP(255*(1-a/255)*t))
B.c.i(e,1,B.b.aP(255*(1-b/255)*t))
B.c.i(e,2,B.b.aP(255*(1-c/255)*t))},
F(a){var t,s,r,q=$.jY()
q.$flags&2&&A.c(q)
q[0]=a
q=$.lU()
if(0>=q.length)return A.a(q,0)
t=q[0]
if(a===0)return t>>>16
if($.L==null)A.N()
s=t>>>23&511
q=$.ke.cf()
if(!(s<q.length))return A.a(q,s)
s=q[s]
if(s!==0){r=t&8388607
return s+(r+4095+(r>>>13&1)>>>13)}return A.mm(t)},
mm(a){var t,s,r=a>>>16&32768,q=(a>>>23&255)-112,p=a&8388607
if(q<=0){if(q<-10)return r
p|=8388608
t=14-q
return(r|B.a.b7(p+(B.a.U(1,t-1)-1)+(B.a.a_(p,t)&1),t))>>>0}else if(q===143)if(p===0)return r|31744
else{p=p>>>13
s=p===0?1:0
return r|p|s|31744}else{p=p+4095+(p>>>13&1)
if((p&8388608)!==0){++q
p=0}if(q>30)return r|31744
return(r|q<<10|p>>>13)>>>0}},
N(){var t,s,r,q,p,o=$.L
if(o!=null)return o
t=new Uint32Array(65536)
$.L=J.k1(B.n.gv(t),0,null)
o=new Uint16Array(512)
$.ke.b=o
for(s=0;s<256;++s){r=(s&255)-112
if(r<=0||r>=30){o[s]=0
q=(s|256)>>>0
if(!(q<512))return A.a(o,q)
o[q]=0}else{q=r<<10>>>0
o[s]=q
p=(s|256)>>>0
if(!(p<512))return A.a(o,p)
o[p]=(q|32768)>>>0}}for(s=0;s<65536;++s)t[s]=A.mn(s)
o=$.L
o.toString
return o},
mn(a){var t,s=a>>>15&1,r=a>>>10&31,q=a&1023
if(r===0)if(q===0)return s<<31>>>0
else{while((q&1024)===0){q=q<<1;--r}++r
q&=4294966271}else if(r===31){t=s<<31
if(q===0)return(t|2139095040)>>>0
else return(t|q<<13|2139095040)>>>0}return(s<<31|r+112<<23|q<<13)>>>0}},B={}
var w=[A,J,B]
var $={}
A.jd.prototype={}
J.f2.prototype={
S(a,b){return a===b},
gE(a){return A.e0(a)},
C(a){return"Instance of '"+A.fy(a)+"'"},
gaC(a){return A.cd(A.jL(this))}}
J.fg.prototype={
C(a){return String(a)},
gE(a){return a?519018:218159},
gaC(a){return A.cd(u.y)},
$iH:1,
$iaT:1}
J.dz.prototype={
S(a,b){return null==b},
C(a){return"null"},
gE(a){return 0},
$iH:1}
J.dB.prototype={$iR:1}
J.bo.prototype={
gE(a){return 0},
C(a){return String(a)}}
J.fv.prototype={}
J.eb.prototype={}
J.b3.prototype={
C(a){var t=a[$.lA()]
if(t==null)t=a[$.jX()]
if(t==null)return this.fs(a)
return"JavaScript function for "+J.ez(t)},
$ibH:1}
J.cL.prototype={
gE(a){return 0},
C(a){return String(a)}}
J.cM.prototype={
gE(a){return 0},
C(a){return String(a)}}
J.u.prototype={
M(a,b){A.at(a).c.a(b)
a.$flags&1&&A.c(a,29)
a.push(b)},
f6(a,b){var t
a.$flags&1&&A.c(a,"removeAt",1)
t=a.length
if(b>=t)throw A.f(A.jy(b,null,null))
return a.splice(b,1)[0]},
iW(a,b){A.at(a).A("e<1>").a(b)
a.$flags&1&&A.c(a,"addAll",2)
this.fQ(a,b)
return},
fQ(a,b){var t,s
u.n.a(b)
t=b.length
if(t===0)return
if(a===b)throw A.f(A.bE(a))
for(s=0;s<t;++s)a.push(b[s])},
du(a){a.$flags&1&&A.c(a,"clear","clear")
a.length=0},
f7(a,b){return A.e8(a,0,A.lo(b,"count",u.p),A.at(a).c)},
d1(a,b){return A.e8(a,b,null,A.at(a).c)},
bH(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
b8(a,b,c){if(b<0||b>a.length)throw A.f(A.ah(b,0,a.length,"start",null))
if(c<b||c>a.length)throw A.f(A.ah(c,b,a.length,"end",null))
if(b===c)return A.k([],A.at(a))
return A.k(a.slice(b,c),A.at(a))},
gf2(a){var t=a.length
if(t>0)return a[t-1]
throw A.f(A.ku())},
ai(a,b,c,d,e){var t,s,r,q,p
A.at(a).A("e<1>").a(d)
a.$flags&2&&A.c(a,5)
A.bw(b,c,a.length)
t=c-b
if(t===0)return
A.cX(e,"skipCount")
if(u._.b(d)){s=d
r=e}else{s=J.j3(d,e).f8(0,!1)
r=0}q=J.a1(s)
if(r+t>q.gu(s))throw A.f(A.kv())
if(r<b)for(p=t-1;p>=0;--p)a[b+p]=q.n(s,r+p)
else for(p=0;p<t;++p)a[b+p]=q.n(s,r+p)},
aq(a,b,c,d){var t
A.at(a).A("1?").a(d)
a.$flags&2&&A.c(a,"fillRange")
A.bw(b,c,a.length)
for(t=b;t<c;++t)a[t]=d},
bO(a,b){var t
for(t=0;t<a.length;++t)if(J.bD(a[t],b))return!0
return!1},
C(a){return A.kw(a,"[","]")},
gG(a){return new J.d8(a,a.length,A.at(a).A("d8<1>"))},
gE(a){return A.e0(a)},
gu(a){return a.length},
su(a,b){a.$flags&1&&A.c(a,"set length","change the length of")
if(b<0)throw A.f(A.ah(b,0,null,"newLength",null))
if(b>a.length)A.at(a).c.a(null)
a.length=b},
n(a,b){if(!(b>=0&&b<a.length))throw A.f(A.iH(a,b))
return a[b]},
i(a,b,c){A.at(a).c.a(c)
a.$flags&2&&A.c(a)
if(!(b>=0&&b<a.length))throw A.f(A.iH(a,b))
a[b]=c},
$ia7:1,
$ie:1,
$ir:1}
J.fe.prototype={
jG(a){var t,s,r
if(!Array.isArray(a))return null
t=a.$flags|0
if((t&4)!==0)s="const, "
else if((t&2)!==0)s="unmodifiable, "
else s=(t&1)!==0?"fixed, ":""
r="Instance of '"+A.fy(a)+"'"
if(s==="")return r
return r+" ("+s+"length: "+a.length+")"}}
J.hA.prototype={}
J.d8.prototype={
gP(){var t=this.d
return t==null?this.$ti.c.a(t):t},
F(){var t,s=this,r=s.a,q=r.length
if(s.b!==q){r=A.aa(r)
throw A.f(r)}t=s.c
if(t>=q){s.d=null
return!1}s.d=r[t]
s.c=t+1
return!0},
$iC:1}
J.dA.prototype={
dv(a,b){var t
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gdA(b)
if(this.gdA(a)===t)return 0
if(this.gdA(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gdA(a){return a===0?1/a<0:a<0},
h(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw A.f(A.ba(""+a+".toInt()"))},
aU(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw A.f(A.ba(""+a+".ceil()"))},
cX(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw A.f(A.ba(""+a+".floor()"))},
aP(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.f(A.ba(""+a+".round()"))},
I(a,b,c){if(this.dv(b,c)>0)throw A.f(A.bB(b))
if(this.dv(a,b)<0)return b
if(this.dv(a,c)>0)return c
return a},
d_(a,b){var t,s,r,q,p
if(b<2||b>36)throw A.f(A.ah(b,2,36,"radix",null))
t=a.toString(b)
s=t.length
r=s-1
if(!(r>=0))return A.a(t,r)
if(t.charCodeAt(r)!==41)return t
q=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(q==null)A.ab(A.ba("Unexpected toString result: "+t))
s=q.length
if(1>=s)return A.a(q,1)
t=q[1]
if(3>=s)return A.a(q,3)
p=+q[3]
s=q[2]
if(s!=null){t+=s
p-=s.length}return t+B.B.dF("0",p)},
C(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gE(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
a1(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
av(a,b){A.lc(b)
if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.eB(a,b)},
W(a,b){return(a|0)===a?a/b|0:this.eB(a,b)},
eB(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw A.f(A.ba("Result of truncating division is "+A.z(t)+": "+A.z(a)+" ~/ "+b))},
U(a,b){if(b<0)throw A.f(A.bB(b))
return b>31?0:a<<b>>>0},
J(a,b){return b>31?0:a<<b>>>0},
b7(a,b){var t
if(b<0)throw A.f(A.bB(b))
if(a>0)t=this.a2(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
j(a,b){var t
if(a>0)t=this.a2(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
a_(a,b){if(0>b)throw A.f(A.bB(b))
return this.a2(a,b)},
a2(a,b){return b>31?0:a>>>b},
gaC(a){return A.cd(u.H)},
$iD:1,
$ij:1}
J.dy.prototype={
au(a,b){var t=this.U(1,b-1)
return((a&t-1)>>>0)-((a&t)>>>0)},
gaC(a){return A.cd(u.p)},
$iH:1,
$ii:1}
J.fh.prototype={
gaC(a){return A.cd(u.i)},
$iH:1}
J.cK.prototype={
dI(a,b){var t=b.length
if(t>a.length)return!1
return b===a.substring(0,t)},
fb(a){var t,s,r,q=a.trim(),p=q.length
if(p===0)return q
if(0>=p)return A.a(q,0)
if(q.charCodeAt(0)===133){t=J.mz(q,1)
if(t===p)return""}else t=0
s=p-1
if(!(s>=0))return A.a(q,s)
r=q.charCodeAt(s)===133?J.mA(q,s):p
if(t===0&&r===p)return q
return q.substring(t,r)},
dF(a,b){var t,s
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.f(B.cp)
for(t=a,s="";;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
C(a){return a},
gE(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gaC(a){return A.cd(u.N)},
gu(a){return a.length},
$ia7:1,
$iH:1,
$ikH:1,
$iS:1}
A.cN.prototype={
C(a){return"LateInitializationError: "+this.a}}
A.aq.prototype={
gu(a){return this.a.length},
n(a,b){var t=this.a
if(!(b>=0&&b<t.length))return A.a(t,b)
return t.charCodeAt(b)}}
A.hZ.prototype={}
A.da.prototype={}
A.aQ.prototype={
gG(a){var t=this
return new A.bS(t,t.gu(t),A.o(t).A("bS<aQ.E>"))}}
A.e7.prototype={
ghD(){var t=J.aY(this.a),s=this.c
if(s==null||s>t)return t
return s},
giU(){var t=J.aY(this.a),s=this.b
if(s>t)return t
return s},
gu(a){var t,s=J.aY(this.a),r=this.b
if(r>=s)return 0
t=this.c
if(t==null||t>=s)return s-r
return t-r},
bH(a,b){var t=this,s=t.giU()+b
if(b<0||s>=t.ghD())throw A.f(A.ja(b,t.gu(0),t,"index"))
return J.k2(t.a,s)},
d1(a,b){var t,s,r=this
A.cX(b,"count")
t=r.b+b
s=r.c
if(s!=null&&t>=s)return new A.db(r.$ti.A("db<1>"))
return A.e8(r.a,t,s,r.$ti.c)},
f8(a,b){var t,s,r,q=this,p=q.b,o=q.a,n=J.a1(o),m=n.gu(o),l=q.c
if(l!=null&&l<m)m=l
t=m-p
if(t<=0){o=J.kx(0,q.$ti.c)
return o}s=A.Y(t,n.bH(o,p),!1,q.$ti.c)
for(r=1;r<t;++r){B.c.i(s,r,n.bH(o,p+r))
if(n.gu(o)<m)throw A.f(A.bE(q))}return s}}
A.bS.prototype={
gP(){var t=this.d
return t==null?this.$ti.c.a(t):t},
F(){var t,s=this,r=s.a,q=J.a1(r),p=q.gu(r)
if(s.b!==p)throw A.f(A.bE(r))
t=s.c
if(t>=p){s.d=null
return!1}s.d=q.bH(r,t);++s.c
return!0},
$iC:1}
A.dE.prototype={
gu(a){return J.aY(this.a)},
bH(a,b){return this.b.$1(J.k2(this.a,b))}}
A.ek.prototype={
gG(a){return new A.el(J.j2(this.a),this.b,this.$ti.A("el<1>"))}}
A.el.prototype={
F(){var t,s
for(t=this.a,s=this.b;t.F();)if(s.$1(t.gP()))return!0
return!1},
gP(){return this.a.gP()},
$iC:1}
A.db.prototype={
gG(a){return B.ci},
gu(a){return 0}}
A.dc.prototype={
F(){return!1},
gP(){throw A.f(A.ku())},
$iC:1}
A.ae.prototype={}
A.b9.prototype={
i(a,b,c){A.o(this).A("b9.E").a(c)
throw A.f(A.ba("Cannot modify an unmodifiable list"))},
ai(a,b,c,d,e){A.o(this).A("e<b9.E>").a(d)
throw A.f(A.ba("Cannot modify an unmodifiable list"))},
br(a,b,c,d){return this.ai(0,b,c,d,0)},
aq(a,b,c,d){A.o(this).A("b9.E?").a(d)
throw A.f(A.ba("Cannot modify an unmodifiable list"))}}
A.d_.prototype={}
A.er.prototype={$r:"+(1,2)",$s:1}
A.es.prototype={$r:"+bytes,vector(1,2)",$s:2}
A.et.prototype={$r:"+clean,output(1,2)",$s:3}
A.d9.prototype={
C(a){return A.jh(this)},
$ibp:1}
A.bI.prototype={
cM(){var t=this,s=t.$map
if(s==null){s=new A.dC(t.$ti.A("dC<1,2>"))
A.lt(t.a,s)
t.$map=s}return s},
n(a,b){return this.cM().n(0,b)},
bR(a,b){this.$ti.A("~(1,2)").a(b)
this.cM().bR(0,b)},
gjp(){var t=this.cM()
return new A.dD(t,A.o(t).A("dD<1>"))},
gu(a){return this.cM().a}}
A.e3.prototype={}
A.i4.prototype={
bx(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
if(q==null)return null
t=Object.create(null)
s=r.b
if(s!==-1)t.arguments=q[s+1]
s=r.c
if(s!==-1)t.argumentsExpr=q[s+1]
s=r.d
if(s!==-1)t.expr=q[s+1]
s=r.e
if(s!==-1)t.method=q[s+1]
s=r.f
if(s!==-1)t.receiver=q[s+1]
return t}}
A.dN.prototype={
C(a){return"Null check operator used on a null value"}}
A.fl.prototype={
C(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+s.a
t=s.c
if(t==null)return r+q+"' ("+s.a+")"
return r+q+"' on '"+t+"' ("+s.a+")"}}
A.fS.prototype={
C(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
A.hN.prototype={
C(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.bg.prototype={
C(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.lz(s==null?"unknown":s)+"'"},
$ibH:1,
gjL(){return this},
$C:"$1",
$R:1,
$D:null}
A.eF.prototype={$C:"$0",$R:0}
A.eG.prototype={$C:"$2",$R:2}
A.fN.prototype={}
A.fM.prototype={
C(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.lz(t)+"'"}}
A.ch.prototype={
S(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.ch))return!1
return this.$_target===b.$_target&&this.a===b.a},
gE(a){return(A.jU(this.a)^A.e0(this.$_target))>>>0},
C(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.fy(this.a)+"'")}}
A.fL.prototype={
C(a){return"RuntimeError: "+this.a}}
A.aF.prototype={
gu(a){return this.a},
aO(a){var t,s
if(typeof a=="string"){t=this.b
if(t==null)return!1
return t[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){s=this.c
if(s==null)return!1
return s[a]!=null}else return this.jk(a)},
jk(a){var t=this.d
if(t==null)return!1
return this.cn(this.e6(t,a),a)>=0},
n(a,b){var t,s,r,q,p=null
if(typeof b=="string"){t=this.b
if(t==null)return p
s=t[b]
r=s==null?p:s.b
return r}else if(typeof b=="number"&&(b&0x3fffffff)===b){q=this.c
if(q==null)return p
s=q[b]
r=s==null?p:s.b
return r}else return this.jl(b)},
jl(a){var t,s,r=this.d
if(r==null)return null
t=this.e6(r,a)
s=this.cn(t,a)
if(s<0)return null
return t[s].b},
i(a,b,c){var t,s,r=this,q=A.o(r)
q.c.a(b)
q.y[1].a(c)
if(typeof b=="string"){t=r.b
r.dM(t==null?r.b=r.dj():t,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){s=r.c
r.dM(s==null?r.c=r.dj():s,b,c)}else r.jn(b,c)},
jn(a,b){var t,s,r,q,p=this,o=A.o(p)
o.c.a(a)
o.y[1].a(b)
t=p.d
if(t==null)t=p.d=p.dj()
s=p.cY(a)
r=t[s]
if(r==null)t[s]=[p.dk(a,b)]
else{q=p.cn(r,a)
if(q>=0)r[q].b=b
else r.push(p.dk(a,b))}},
jB(a,b){var t=this
if(typeof b=="string")return t.ew(t.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return t.ew(t.c,b)
else return t.jm(b)},
jm(a){var t,s,r,q,p=this,o=p.d
if(o==null)return null
t=p.cY(a)
s=o[t]
r=p.cn(s,a)
if(r<0)return null
q=s.splice(r,1)[0]
p.eF(q)
if(s.length===0)delete o[t]
return q.b},
bR(a,b){var t,s,r=this
A.o(r).A("~(1,2)").a(b)
t=r.e
s=r.r
while(t!=null){b.$2(t.a,t.b)
if(s!==r.r)throw A.f(A.bE(r))
t=t.c}},
dM(a,b,c){var t,s=A.o(this)
s.c.a(b)
s.y[1].a(c)
t=a[b]
if(t==null)a[b]=this.dk(b,c)
else t.b=c},
ew(a,b){var t
if(a==null)return null
t=a[b]
if(t==null)return null
this.eF(t)
delete a[b]
return t.b},
el(){this.r=this.r+1&1073741823},
dk(a,b){var t=this,s=A.o(t),r=new A.hI(s.c.a(a),s.y[1].a(b))
if(t.e==null)t.e=t.f=r
else{s=t.f
s.toString
r.d=s
t.f=s.c=r}++t.a
t.el()
return r},
eF(a){var t=this,s=a.d,r=a.c
if(s==null)t.e=r
else s.c=r
if(r==null)t.f=s
else r.d=s;--t.a
t.el()},
cY(a){return J.aX(a)&1073741823},
e6(a,b){return a[this.cY(b)]},
cn(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bD(a[s].a,b))return s
return-1},
C(a){return A.jh(this)},
dj(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
$ijf:1}
A.hI.prototype={}
A.dD.prototype={
gu(a){return this.a.a},
gG(a){var t=this.a
return new A.V(t,t.r,t.e,this.$ti.A("V<1>"))}}
A.V.prototype={
gP(){return this.d},
F(){var t,s=this,r=s.a
if(s.b!==r.r)throw A.f(A.bE(r))
t=s.c
if(t==null){s.d=null
return!1}else{s.d=t.a
s.c=t.c
return!0}},
$iC:1}
A.hJ.prototype={
gu(a){return this.a.a},
gG(a){var t=this.a
return new A.bR(t,t.r,t.e,this.$ti.A("bR<1>"))}}
A.bR.prototype={
gP(){return this.d},
F(){var t,s=this,r=s.a
if(s.b!==r.r)throw A.f(A.bE(r))
t=s.c
if(t==null){s.d=null
return!1}else{s.d=t.b
s.c=t.c
return!0}},
$iC:1}
A.dC.prototype={
cY(a){return A.oH(a)&1073741823},
cn(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bD(a[s].a,b))return s
return-1}}
A.iS.prototype={
$1(a){return this.a(a)},
$S:9}
A.iT.prototype={
$2(a,b){return this.a(a,b)},
$S:10}
A.iU.prototype={
$1(a){return this.a(A.bd(a))},
$S:11}
A.aS.prototype={
C(a){return this.eC(!1)},
eC(a){var t,s,r,q,p,o=this.hH(),n=this.e7(),m=(a?"Record ":"")+"("
for(t=o.length,s="",r=0;r<t;++r,s=", "){m+=s
q=o[r]
if(typeof q=="string")m=m+q+": "
if(!(r<n.length))return A.a(n,r)
p=n[r]
m=a?m+A.kK(p):m+A.z(p)}m+=")"
return m.charCodeAt(0)==0?m:m},
hH(){var t,s=this.$s
while($.iu.length<=s)B.c.M($.iu,null)
t=$.iu[s]
if(t==null){t=this.h1()
B.c.i($.iu,s,t)}return t},
h1(){var t,s,r,q=this.$r,p=q.indexOf("("),o=q.substring(1,p),n=q.substring(p),m=n==="()"?0:n.replace(/[^,]/g,"").length+1,l=u.K,k=J.ff(m,l)
for(t=0;t<m;++t)k[t]=t
if(o!==""){s=o.split(",")
t=s.length
for(r=m;t>0;){--r;--t
B.c.i(k,r,s[t])}}k=A.jg(k,!1,l)
k.$flags=3
return k}}
A.bz.prototype={
e7(){return[this.a,this.b]},
S(a,b){if(b==null)return!1
return b instanceof A.bz&&this.$s===b.$s&&J.bD(this.a,b.a)&&J.bD(this.b,b.b)},
gE(a){return A.kE(this.$s,this.a,this.b,B.T)}}
A.iq.prototype={
cf(){var t=this.b
if(t===this)throw A.f(A.hF(""))
return t}}
A.bT.prototype={
gaC(a){return B.jW},
cj(a,b,c){A.au(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
eS(a){return this.cj(a,0,null)},
eP(a,b,c){A.au(a,b,c)
return c==null?new Int8Array(a,b):new Int8Array(a,b,c)},
cV(a,b,c){A.au(a,b,c)
c=B.a.W(a.byteLength-b,2)
return new Uint16Array(a,b,c)},
eQ(a){return this.cV(a,0,null)},
eN(a,b,c){A.au(a,b,c)
c=B.a.W(a.byteLength-b,2)
return new Int16Array(a,b,c)},
eR(a,b,c){A.au(a,b,c)
c=B.a.W(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
eO(a,b,c){A.au(a,b,c)
c=B.a.W(a.byteLength-b,4)
return new Int32Array(a,b,c)},
eM(a,b,c){A.au(a,b,c)
c=B.a.W(a.byteLength-b,4)
return new Float32Array(a,b,c)},
$iH:1,
$ibT:1}
A.dJ.prototype={
gv(a){if(((a.$flags|0)&2)!==0)return new A.iz(a.buffer)
else return a.buffer},
i_(a,b,c,d){var t=A.ah(b,0,c,d,null)
throw A.f(t)},
dU(a,b,c,d){if(b>>>0!==b||b>c)this.i_(a,b,c,d)},
$iT:1}
A.iz.prototype={
cj(a,b,c){var t=A.mP(this.a,b,c)
t.$flags=3
return t},
eS(a){return this.cj(0,0,null)},
eP(a,b,c){var t=A.mJ(this.a,b,c)
t.$flags=3
return t},
cV(a,b,c){var t=A.mL(this.a,b,c)
t.$flags=3
return t},
eQ(a){return this.cV(0,0,null)},
eN(a,b,c){var t=A.mG(this.a,b,c)
t.$flags=3
return t},
eR(a,b,c){var t=A.mN(this.a,b,c)
t.$flags=3
return t},
eO(a,b,c){var t=A.mI(this.a,b,c)
t.$flags=3
return t},
eM(a,b,c){var t=A.mF(this.a,b,c)
t.$flags=3
return t}}
A.fo.prototype={
gaC(a){return B.jX},
$iH:1}
A.a8.prototype={
gu(a){return a.length},
ez(a,b,c,d,e){var t,s,r=a.length
this.dU(a,b,r,"start")
this.dU(a,c,r,"end")
if(b>c)throw A.f(A.ah(b,0,c,null,null))
t=c-b
if(e<0)throw A.f(A.bf(e))
s=d.length
if(s-e<t)throw A.f(A.mV("Not enough elements"))
if(e!==0||s!==t)d=d.subarray(e,e+t)
a.set(d,b)},
$ia7:1,
$iar:1}
A.bq.prototype={
n(a,b){A.be(b,a,a.length)
return a[b]},
i(a,b,c){A.la(c)
a.$flags&2&&A.c(a)
A.be(b,a,a.length)
a[b]=c},
ai(a,b,c,d,e){u.bM.a(d)
a.$flags&2&&A.c(a,5)
if(u.d4.b(d)){this.ez(a,b,c,d,e)
return}this.dJ(a,b,c,d,e)},
br(a,b,c,d){return this.ai(a,b,c,d,0)},
$ie:1,
$ir:1}
A.as.prototype={
i(a,b,c){A.v(c)
a.$flags&2&&A.c(a)
A.be(b,a,a.length)
a[b]=c},
ai(a,b,c,d,e){u.hb.a(d)
a.$flags&2&&A.c(a,5)
if(u.eB.b(d)){this.ez(a,b,c,d,e)
return}this.dJ(a,b,c,d,e)},
br(a,b,c,d){return this.ai(a,b,c,d,0)},
$ie:1,
$ir:1}
A.bU.prototype={
gaC(a){return B.jY},
b8(a,b,c){return new Float32Array(a.subarray(b,A.aK(b,c,a.length)))},
$iH:1,
$ibU:1,
$ij8:1}
A.dF.prototype={
gaC(a){return B.jZ},
b8(a,b,c){return new Float64Array(a.subarray(b,A.aK(b,c,a.length)))},
$iH:1,
$ihl:1}
A.dG.prototype={
gaC(a){return B.k_},
n(a,b){A.be(b,a,a.length)
return a[b]},
b8(a,b,c){return new Int16Array(a.subarray(b,A.aK(b,c,a.length)))},
$iH:1,
$ihz:1}
A.dH.prototype={
gaC(a){return B.k0},
n(a,b){A.be(b,a,a.length)
return a[b]},
b8(a,b,c){return new Int32Array(a.subarray(b,A.aK(b,c,a.length)))},
$iH:1,
$idt:1}
A.dI.prototype={
gaC(a){return B.k1},
n(a,b){A.be(b,a,a.length)
return a[b]},
b8(a,b,c){return new Int8Array(a.subarray(b,A.aK(b,c,a.length)))},
$iH:1,
$ijb:1}
A.dK.prototype={
gaC(a){return B.k3},
n(a,b){A.be(b,a,a.length)
return a[b]},
b8(a,b,c){return new Uint16Array(a.subarray(b,A.aK(b,c,a.length)))},
$iH:1,
$ijB:1}
A.dL.prototype={
gaC(a){return B.k4},
n(a,b){A.be(b,a,a.length)
return a[b]},
b8(a,b,c){return new Uint32Array(a.subarray(b,A.aK(b,c,a.length)))},
$iH:1,
$ib7:1}
A.dM.prototype={
gaC(a){return B.k5},
gu(a){return a.length},
n(a,b){A.be(b,a,a.length)
return a[b]},
b8(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.aK(b,c,a.length)))},
$iH:1}
A.br.prototype={
gaC(a){return B.k6},
gu(a){return a.length},
n(a,b){A.be(b,a,a.length)
return a[b]},
b8(a,b,c){return new Uint8Array(a.subarray(b,A.aK(b,c,a.length)))},
fp(a,b){return this.b8(a,b,null)},
$iH:1,
$ibr:1,
$ib8:1}
A.em.prototype={}
A.en.prototype={}
A.eo.prototype={}
A.ep.prototype={}
A.aJ.prototype={
A(a){return A.ey(v.typeUniverse,this,a)},
cE(a){return A.l6(v.typeUniverse,this,a)}}
A.h_.prototype={}
A.h0.prototype={
C(a){return A.av(this.a,null)}}
A.fY.prototype={
C(a){return this.a}}
A.eu.prototype={}
A.hK.prototype={
$2(a,b){this.a.i(0,this.b.a(a),this.c.a(b))},
$S:12}
A.E.prototype={
gG(a){return new A.bS(a,this.gu(a),A.aM(a).A("bS<E.E>"))},
bH(a,b){return this.n(a,b)},
bO(a,b){var t,s=this.gu(a)
for(t=0;t<s;++t){if(this.n(a,t)===b)return!0
if(s!==this.gu(a))throw A.f(A.bE(a))}return!1},
d1(a,b){return A.e8(a,b,null,A.aM(a).A("E.E"))},
f7(a,b){return A.e8(a,0,A.lo(b,"count",u.p),A.aM(a).A("E.E"))},
b8(a,b,c){var t,s=this.gu(a)
A.bw(b,c,s)
A.bw(b,c,this.gu(a))
t=A.aM(a).A("E.E")
t=A.t(A.e8(a,b,c,t),t)
return t},
aq(a,b,c,d){var t
A.aM(a).A("E.E?").a(d)
A.bw(b,c,this.gu(a))
for(t=b;t<c;++t)this.i(a,t,d)},
ai(a,b,c,d,e){var t,s,r,q,p
A.aM(a).A("e<E.E>").a(d)
A.bw(b,c,this.gu(a))
t=c-b
if(t===0)return
A.cX(e,"skipCount")
if(u._.b(d)){s=e
r=d}else{r=J.j3(d,e).f8(0,!1)
s=0}q=J.a1(r)
if(s+t>q.gu(r))throw A.f(A.kv())
if(s<b)for(p=t-1;p>=0;--p)this.i(a,b+p,q.n(r,s+p))
else for(p=0;p<t;++p)this.i(a,b+p,q.n(r,s+p))},
br(a,b,c,d){return this.ai(a,b,c,d,0)},
fi(a,b,c){A.aM(a).A("e<E.E>").a(c)
this.br(a,b,b+c.length,c)},
C(a){return A.kw(a,"[","]")},
$ie:1,
$ir:1}
A.cO.prototype={
gu(a){return this.a},
C(a){return A.jh(this)},
$ibp:1}
A.hM.prototype={
$2(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=A.z(a)
s.a=(s.a+=t)+": "
t=A.z(b)
s.a+=t},
$S:13}
A.iB.prototype={
$0(){var t,s
try{t=new TextDecoder("utf-8",{fatal:true})
return t}catch(s){}return null},
$S:6}
A.iA.prototype={
$0(){var t,s
try{t=new TextDecoder("utf-8",{fatal:false})
return t}catch(s){}return null},
$S:6}
A.ix.prototype={
c2(a){var t,s,r=a.length,q=A.bw(0,null,r),p=new Uint8Array(q)
for(t=0;t<q;++t){if(!(t<r))return A.a(a,t)
s=a.charCodeAt(t)
if((s&4294967040)!==0)throw A.f(A.m3(a,"string","Contains invalid characters."))
if(!(t<q))return A.a(p,t)
p[t]=s}return p}}
A.iw.prototype={
c2(a){var t,s,r,q
u.L.a(a)
t=a.length
s=A.bw(0,null,t)
for(r=0;r<s;++r){if(!(r<t))return A.a(a,r)
q=a[r]
if((q&4294967040)!==0){if(!this.a)throw A.f(A.hm("Invalid value in input: "+q,null,null))
return this.h3(a,0,s)}}return A.e6(a,0,s)},
h3(a,b,c){var t,s,r,q
u.L.a(a)
for(t=a.length,s=b,r="";s<c;++s){if(!(s<t))return A.a(a,s)
q=a[s]
r+=A.cR((q&4294967040)!==0?65533:q)}return r.charCodeAt(0)==0?r:r}}
A.ci.prototype={}
A.eK.prototype={}
A.eL.prototype={}
A.fm.prototype={
bG(a){var t
u.L.a(a)
t=B.cP.c2(a)
return t}}
A.hH.prototype={}
A.hG.prototype={}
A.fT.prototype={
j4(a,b){u.L.a(a)
return(b===!0?B.k8:B.k7).c2(a)}}
A.fU.prototype={
c2(a){return new A.h1(this.a).dW(u.L.a(a),0,null,!0)}}
A.h1.prototype={
dW(a,b,c,d){var t,s,r,q,p,o,n,m=this
u.L.a(a)
t=A.bw(b,c,a.length)
if(b===t)return""
if(a instanceof Uint8Array){s=a
r=s
q=0}else{r=A.o3(a,b,t)
t-=b
q=b
b=0}if(t-b>=15){p=m.a
o=A.o2(p,r,b,t)
if(o!=null){if(!p)return o
if(o.indexOf("\ufffd")<0)return o}}o=m.d7(r,b,t,!0)
p=m.b
if((p&1)!==0){n=A.o4(p)
m.b=0
throw A.f(A.hm(n,a,q+m.c))}return o},
d7(a,b,c,d){var t,s,r=this
if(c-b>1000){t=B.a.W(b+c,2)
s=r.d7(a,b,t,!1)
if((r.b&1)!==0)return s
return s+r.d7(a,t,c,d)}return r.j8(a,b,c,d)},
j8(a,b,c,a0){var t,s,r,q,p,o,n,m,l=this,k="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",j=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i=65533,h=l.b,g=l.c,f=new A.e5(""),e=b+1,d=a.length
if(!(b>=0&&b<d))return A.a(a,b)
t=a[b]
A:for(s=l.a;;){for(;;e=p){if(!(t>=0&&t<256))return A.a(k,t)
r=k.charCodeAt(t)&31
g=h<=32?t&61694>>>r:(t&63|g<<6)>>>0
q=h+r
if(!(q>=0&&q<144))return A.a(j,q)
h=j.charCodeAt(q)
if(h===0){q=A.cR(g)
f.a+=q
if(e===c)break A
break}else if((h&1)!==0){if(s)switch(h){case 69:case 67:q=A.cR(i)
f.a+=q
break
case 65:q=A.cR(i)
f.a+=q;--e
break
default:q=A.cR(i)
f.a=(f.a+=q)+q
break}else{l.b=h
l.c=e-1
return""}h=0}if(e===c)break A
p=e+1
if(!(e>=0&&e<d))return A.a(a,e)
t=a[e]}p=e+1
if(!(e>=0&&e<d))return A.a(a,e)
t=a[e]
if(t<128){for(;;){if(!(p<c)){o=c
break}n=p+1
if(!(p>=0&&p<d))return A.a(a,p)
t=a[p]
if(t>=128){o=n-1
p=n
break}p=n}if(o-e<20)for(m=e;m<o;++m){if(!(m<d))return A.a(a,m)
q=A.cR(a[m])
f.a+=q}else{q=A.e6(a,e,o)
f.a+=q}if(o===c)break A
e=p}else e=p}if(a0&&h>32)if(s){d=A.cR(i)
f.a+=d}else{l.b=77
l.c=c
return""}l.b=h
l.c=g
d=f.a
return d.charCodeAt(0)==0?d:d}}
A.ir.prototype={
C(a){return this.ad()}}
A.Q.prototype={}
A.eA.prototype={
C(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.hh(t)
return"Assertion failed"}}
A.ea.prototype={}
A.aO.prototype={
gda(){return"Invalid argument"+(!this.a?"(s)":"")},
gd9(){return""},
C(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+A.z(q),o=t.gda()+r+p
if(!t.a)return o
return o+t.gd9()+": "+A.hh(t.gdz())},
gdz(){return this.b}}
A.cW.prototype={
gdz(){return A.ld(this.b)},
gda(){return"RangeError"},
gd9(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.z(r):""
else if(r==null)t=": Not greater than or equal to "+A.z(s)
else if(r>s)t=": Not in inclusive range "+A.z(s)+".."+A.z(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.z(s)
return t}}
A.f_.prototype={
gdz(){return A.v(this.b)},
gda(){return"RangeError"},
gd9(){if(A.v(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gu(a){return this.f}}
A.ec.prototype={
C(a){return"Unsupported operation: "+this.a}}
A.fR.prototype={
C(a){return"UnimplementedError: "+this.a}}
A.cZ.prototype={
C(a){return"Bad state: "+this.a}}
A.eJ.prototype={
C(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.hh(t)+"."}}
A.fr.prototype={
C(a){return"Out of Memory"},
$iQ:1}
A.e4.prototype={
C(a){return"Stack Overflow"},
$iQ:1}
A.bj.prototype={
C(a){var t=this.a,s=""!==t?"FormatException: "+t:"FormatException",r=this.c
return r!=null?s+(" (at offset "+A.z(r)+")"):s}}
A.e.prototype={
gu(a){var t,s=this.gG(this)
for(t=0;s.F();)++t
return t},
bH(a,b){var t,s
A.cX(b,"index")
t=this.gG(this)
for(s=b;t.F();){if(s===0)return t.gP();--s}throw A.f(A.ja(b,b-s,this,"index"))},
C(a){return A.my(this,"(",")")}}
A.bV.prototype={
gE(a){return A.P.prototype.gE.call(this,0)},
C(a){return"null"}}
A.P.prototype={$iP:1,
S(a,b){return this===b},
gE(a){return A.e0(this)},
C(a){return"Instance of '"+A.fy(this)+"'"},
gaC(a){return A.oT(this)},
toString(){return this.C(this)}}
A.e5.prototype={
gu(a){return this.a.length},
C(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.ho.prototype={
fA(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a.length
for(t=0;t<g;++t){s=a[t]
if(s>h.b)h.b=s
if(s<h.c)h.c=s}s=h.b
r=B.a.U(1,s)
q=h.a=new Uint32Array(r)
for(p=1,o=0,n=2;p<=s;){for(m=p<<16,t=0;t<g;++t)if(a[t]===p){for(l=o,k=0,j=0;j<p;++j){k=(k<<1|l&1)>>>0
l=l>>>1}for(i=(m|t)>>>0,j=k;j<r;j+=n){if(!(j>=0))return A.a(q,j)
q[j]=i}++o}++p
o=o<<1>>>0
n=n<<1>>>0}}}
A.io.prototype={}
A.iD.prototype={
ja(a,b,c,d){var t,s,r,q,p,o,n=null
for(;;){t=a.c
s=a.d
s===$&&A.b()
if(!(t<s))break
s=a.b
s.toString
r=a.c=t+1
q=s.length
if(!(t>=0&&t<q))return A.a(s,t)
p=s[t]
a.c=r+1
if(!(r>=0&&r<q))return A.a(s,r)
o=s[r]
if((p&8)!==8)return!1
if(B.a.a1(p*256+o,31)!==0)return!1
if((o>>>5&1)!==0){a.k()
return!1}if(n!=null)b.bn(n)
t=new A.dO(new Uint8Array(32768),B.a0)
new A.hx(a,t).hW()
n=J.M(B.e.gv(t.c),t.c.byteOffset,t.b)
a.k()}if(n!=null)b.bn(n)
return!0}}
A.ip.prototype={}
A.iE.prototype={
eY(a,b){var t
u.L.a(a)
t=A.kF(B.S,32768)
this.jd(A.hy(a,B.a0,null,null),t,b,!1,null)
return t.dC()},
jd(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
b.a=B.S
t=(B.a.I(15,0,15)-8<<4|8)>>>0
b.V(t)
s=t*256
for(r=0;q=(r|0)>>>0,B.a.a1(s+q,31)!==0;)++r
b.V(q)
p=a.c
o=A.oR(a)
a.c=p
q=c==null?6:c
A.me(a,q,b,15)
q=o&255
n=o>>>24&255
m=o>>>16&255
l=o>>>8&255
if(b.a===B.S){b.V(n)
b.V(m)
b.V(l)
b.V(q)}else{b.V(q)
b.V(l)
b.V(m)
b.V(n)}}}
A.d3.prototype={
ad(){return"_DeflateFlushMode."+this.b}}
A.he.prototype={
hX(a,b){var t,s,r,q,p=this,o=!0
if(b>=9)if(b<=15)o=a>9
if(o)return!1
t=p.hS(a)
if(t==null)return!1
$.bi.b=t
o=new Uint16Array(1146)
p.p1=o
s=new Uint16Array(122)
p.p2=s
r=new Uint16Array(78)
p.p3=r
p.as=b
q=p.Q=B.a.J(1,b)
p.at=q-1
p.db=15
p.cy=32768
p.dx=32767
p.dy=5
p.ax=new Uint8Array(q*2)
p.ch=new Uint16Array(q)
p.CW=new Uint16Array(32768)
p.y1=16384
p.f=new Uint8Array(65536)
p.r=65536
p.bv=16384
p.xr=49152
p.k4=a
p.w=p.x=p.ok=0
p.c=113
p.d=0
q=p.p4
q.a=o
q.c=$.lQ()
q=p.R8
q.a=s
q.c=$.lP()
q=p.RG
q.a=r
q.c=$.lO()
p.b2=p.aE=0
p.bC=8
p.eg()
p.ay=2*p.Q
B.u.aq(p.CW,0,p.cy,0)
p.k2=p.fr=p.id=0
p.fx=p.k3=2
p.cx=p.go=0
return!0},
hv(a){var t,s,r,q,p=this,o=p.x
o===$&&A.b()
if(o!==0)p.de()
o=p.a
t=o.c
o=o.d
o===$&&A.b()
s=!0
if(t>=o){o=p.k2
o===$&&A.b()
if(o===0)o=a!==B.am&&p.c!==666
else o=s}else o=s
if(o){switch($.bi.cf().e){case 0:r=p.hy(a)
break
case 1:r=p.hw(a)
break
case 2:r=p.hx(a)
break
default:r=-1
break}o=r===2
if(o||r===3)p.c=666
if(r===0||o)return 0
if(r===1){if(a===B.kc){p.aw(2,3)
p.c1(256,B.a7)
p.eT()
o=p.bC
o===$&&A.b()
t=p.b2
t===$&&A.b()
if(1+o+10-t<9){p.aw(2,3)
p.c1(256,B.a7)
p.eT()}p.bC=7}else{p.eD(0,0,!1)
if(a===B.kd){o=p.cy
o===$&&A.b()
t=p.CW
q=0
for(;q<o;++q){t===$&&A.b()
t.$flags&2&&A.c(t)
if(!(q<t.length))return A.a(t,q)
t[q]=0}}}p.de()}}if(a!==B.a_)return 0
return 1},
eg(){var t=this,s=t.p1
s===$&&A.b()
B.u.aq(s,0,572,0)
s=t.p2
s===$&&A.b()
B.u.aq(s,0,60,0)
s=t.p3
s===$&&A.b()
B.u.aq(s,0,38,0)
s=t.p1
s.$flags&2&&A.c(s)
s[512]=1
t.y2=t.bQ=t.aB=t.bw=0},
dn(a,b){var t,s,r,q,p,o,n=this.ry
if(!(b>=0&&b<573))return A.a(n,b)
t=n[b]
s=b<<1>>>0
r=n.$flags|0
q=this.x2
for(;;){p=this.to
p===$&&A.b()
if(!(s<=p))break
if(s<p){p=s+1
if(!(p>=0&&p<573))return A.a(n,p)
p=n[p]
if(!(s>=0&&s<573))return A.a(n,s)
p=A.kb(a,p,n[s],q)}else p=!1
if(p)++s
if(!(s>=0&&s<573))return A.a(n,s)
if(A.kb(a,t,n[s],q))break
p=n[s]
r&2&&A.c(n)
if(!(b>=0&&b<573))return A.a(n,b)
n[b]=p
o=s<<1>>>0
b=s
s=o}r&2&&A.c(n)
if(!(b>=0&&b<573))return A.a(n,b)
n[b]=t},
ex(a,b){var t,s,r,q,p,o,n,m,l,k,j,i=a.length
if(1>=i)return A.a(a,1)
t=a[1]
if(t===0){s=138
r=3}else{s=7
r=4}q=(b+1)*2+1
a.$flags&2&&A.c(a)
if(!(q>=0&&q<i))return A.a(a,q)
a[q]=65535
for(q=this.p3,p=0,o=-1,n=0;p<=b;t=l){++p
m=p*2+1
if(!(m<i))return A.a(a,m)
l=a[m];++n
if(n<s&&t===l)continue
else{k=3
if(n<r){q===$&&A.b()
m=t*2
if(!(m<78))return A.a(q,m)
j=q[m]
q.$flags&2&&A.c(q)
q[m]=j+n}else if(t!==0){if(t!==o){q===$&&A.b()
m=t*2
if(!(m<78))return A.a(q,m)
j=q[m]
q.$flags&2&&A.c(q)
q[m]=j+1}q===$&&A.b()
m=q[32]
q.$flags&2&&A.c(q)
q[32]=m+1}else if(n<=10){q===$&&A.b()
m=q[34]
q.$flags&2&&A.c(q)
q[34]=m+1}else{q===$&&A.b()
m=q[36]
q.$flags&2&&A.c(q)
q[36]=m+1}}if(l===0){r=k
s=138}else if(t===l){r=k
s=6}else{s=7
r=4}o=t
n=0}},
fW(){var t,s,r=this,q=r.p1
q===$&&A.b()
t=r.p4.b
t===$&&A.b()
r.ex(q,t)
t=r.p2
t===$&&A.b()
q=r.R8.b
q===$&&A.b()
r.ex(t,q)
r.RG.d3(r)
for(q=r.p3,s=18;s>=3;--s){q===$&&A.b()
t=B.af[s]*2+1
if(!(t<78))return A.a(q,t)
if(q[t]!==0)break}q=r.aB
q===$&&A.b()
r.aB=q+(3*(s+1)+5+5+4)
return s},
iR(a,b,c){var t,s,r,q,p=this
p.aw(a-257,5)
t=b-1
p.aw(t,5)
p.aw(c-4,4)
for(s=0;s<c;++s){r=p.p3
r===$&&A.b()
if(!(s<19))return A.a(B.af,s)
q=B.af[s]*2+1
if(!(q<78))return A.a(r,q)
p.aw(r[q],3)}r=p.p1
r===$&&A.b()
p.ey(r,a-1)
r=p.p2
r===$&&A.b()
p.ey(r,t)},
ey(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=a.length
if(1>=f)return A.a(a,1)
t=a[1]
if(t===0){s=138
r=3}else{s=7
r=4}for(q=u.L,p=0,o=-1,n=0;p<=b;t=l){++p
m=p*2+1
if(!(m<f))return A.a(a,m)
l=a[m];++n
if(n<s&&t===l)continue
else{k=3
if(n<r){m=t*2
j=m+1
do{i=g.p3
i===$&&A.b()
q.a(i)
if(!(m<78))return A.a(i,m)
h=i[m]
if(!(j<78))return A.a(i,j)
g.aw(h&65535,i[j]&65535)}while(--n,n!==0)}else if(t!==0){if(t!==o){m=g.p3
m===$&&A.b()
q.a(m)
j=t*2
if(!(j<78))return A.a(m,j)
i=m[j];++j
if(!(j<78))return A.a(m,j)
g.aw(i&65535,m[j]&65535);--n}m=g.p3
m===$&&A.b()
q.a(m)
g.aw(m[32]&65535,m[33]&65535)
g.aw(n-3,2)}else{m=g.p3
if(n<=10){m===$&&A.b()
q.a(m)
g.aw(m[34]&65535,m[35]&65535)
g.aw(n-3,3)}else{m===$&&A.b()
q.a(m)
g.aw(m[36]&65535,m[37]&65535)
g.aw(n-11,7)}}}if(l===0){r=k
s=138}else if(t===l){r=k
s=6}else{s=7
r=4}o=t
n=0}},
ir(a,b,c){var t,s,r=this
if(c===0)return
t=r.f
t===$&&A.b()
s=r.x
s===$&&A.b()
B.e.ai(t,s,s+c,a,b)
r.x=r.x+c},
ba(a){var t,s=this.f
s===$&&A.b()
t=this.x
t===$&&A.b()
this.x=t+1
s.$flags&2&&A.c(s)
if(!(t>=0&&t<s.length))return A.a(s,t)
s[t]=a},
c1(a,b){var t,s,r
u.L.a(b)
t=a*2
s=b.length
if(!(t<s))return A.a(b,t)
r=b[t];++t
if(!(t<s))return A.a(b,t)
this.aw(r&65535,b[t]&65535)},
aw(a,b){var t,s=this,r=s.b2
r===$&&A.b()
t=s.aE
if(r>16-b){t===$&&A.b()
r=s.aE=(t|B.a.U(a,r)&65535)>>>0
s.ba(r)
s.ba(A.ao(r,8))
s.aE=A.ao(a,16-s.b2)
s.b2=s.b2+(b-16)}else{t===$&&A.b()
s.aE=(t|B.a.U(a,r)&65535)>>>0
s.b2=r+b}},
ci(a,b){var t,s,r,q,p,o=this,n=o.f
n===$&&A.b()
t=o.bv
t===$&&A.b()
s=o.y2
s===$&&A.b()
s=t+s*2
t=A.ao(a,8)
n.$flags&2&&A.c(n)
if(!(s<n.length))return A.a(n,s)
n[s]=t
t=o.f
s=o.bv
n=o.y2
s=s+n*2+1
t.$flags&2&&A.c(t)
r=t.length
if(!(s<r))return A.a(t,s)
t[s]=a
s=o.xr
s===$&&A.b()
s+=n
if(!(s<r))return A.a(t,s)
t[s]=b
o.y2=n+1
if(a===0){n=o.p1
n===$&&A.b()
t=b*2
if(!(t>=0&&t<1146))return A.a(n,t)
s=n[t]
n.$flags&2&&A.c(n)
n[t]=s+1}else{n=o.bQ
n===$&&A.b()
o.bQ=n+1
n=o.p1
n===$&&A.b()
if(!(b>=0&&b<256))return A.a(B.az,b)
t=(B.az[b]+256+1)*2
if(!(t<1146))return A.a(n,t)
s=n[t]
n.$flags&2&&A.c(n)
n[t]=s+1
s=o.p2
s===$&&A.b()
t=A.kY(a-1)*2
if(!(t<122))return A.a(s,t)
n=s[t]
s.$flags&2&&A.c(s)
s[t]=n+1}n=o.y2
if((n&8191)===0){t=o.k4
t===$&&A.b()
t=t>2}else t=!1
if(t){q=n*8
n=o.id
n===$&&A.b()
t=o.fr
t===$&&A.b()
for(s=o.p2,p=0;p<30;++p){s===$&&A.b()
r=p*2
if(!(r<122))return A.a(s,r)
q+=s[r]*(5+B.U[p])}q=A.ao(q,3)
s=o.bQ
s===$&&A.b()
r=o.y2
if(s<r/2&&q<(n-t)/2)return!0
n=r}t=o.y1
t===$&&A.b()
return n===t-1},
dV(a,b){var t,s,r,q,p,o,n,m,l=this,k=u.L
k.a(a)
k.a(b)
k=l.y2
k===$&&A.b()
if(k!==0){t=0
do{k=l.f
k===$&&A.b()
s=l.bv
s===$&&A.b()
s+=t*2
r=k.length
if(!(s<r))return A.a(k,s)
q=k[s];++s
if(!(s<r))return A.a(k,s)
p=q<<8&65280|k[s]&255
s=l.xr
s===$&&A.b()
s+=t
if(!(s<r))return A.a(k,s)
o=k[s]&255;++t
if(p===0)l.c1(o,a)
else{n=B.az[o]
l.c1(n+256+1,a)
if(!(n<29))return A.a(B.au,n)
m=B.au[n]
if(m!==0)l.aw(o-B.d9[n],m);--p
n=A.kY(p)
l.c1(n,b)
if(!(n<30))return A.a(B.U,n)
m=B.U[n]
if(m!==0)l.aw(p-B.e9[n],m)}}while(t<l.y2)}l.c1(256,a)
if(513>=a.length)return A.a(a,513)
l.bC=a[513]},
fj(){var t,s,r,q,p
for(t=this.p1,s=0,r=0;s<7;){t===$&&A.b()
q=s*2
if(!(q<1146))return A.a(t,q)
r+=t[q];++s}for(p=0;s<128;){t===$&&A.b()
q=s*2
if(!(q<1146))return A.a(t,q)
p+=t[q];++s}while(s<256){t===$&&A.b()
q=s*2
if(!(q<1146))return A.a(t,q)
r+=t[q];++s}this.y=r>A.ao(p,2)?0:1},
eT(){var t=this,s=t.b2
s===$&&A.b()
if(s===16){s=t.aE
s===$&&A.b()
t.ba(s)
t.ba(A.ao(s,8))
t.b2=t.aE=0}else if(s>=8){s=t.aE
s===$&&A.b()
t.ba(s)
t.aE=A.ao(t.aE,8)
t.b2=t.b2-8}},
dQ(){var t=this,s=t.b2
s===$&&A.b()
if(s>8){s=t.aE
s===$&&A.b()
t.ba(s)
t.ba(A.ao(s,8))}else if(s>0){s=t.aE
s===$&&A.b()
t.ba(s)}t.b2=t.aE=0},
bE(a){var t,s,r,q,p,o=this,n=o.fr
n===$&&A.b()
if(n>=0)t=n
else t=-1
s=o.id
s===$&&A.b()
n=s-n
s=o.k4
s===$&&A.b()
if(s>0){if(o.y===2)o.fj()
o.p4.d3(o)
o.R8.d3(o)
r=o.fW()
s=o.aB
s===$&&A.b()
q=A.ao(s+3+7,3)
s=o.bw
s===$&&A.b()
p=A.ao(s+3+7,3)
if(p<=q)q=p}else{p=n+5
q=p
r=0}if(n+4<=q&&t!==-1)o.eD(t,n,a)
else if(p===q){o.aw(2+(a?1:0),3)
o.dV(B.a7,B.bm)}else{o.aw(4+(a?1:0),3)
n=o.p4.b
n===$&&A.b()
t=o.R8.b
t===$&&A.b()
o.iR(n+1,t+1,r+1)
t=o.p1
t===$&&A.b()
n=o.p2
n===$&&A.b()
o.dV(t,n)}o.eg()
if(a)o.dQ()
o.fr=o.id
o.de()},
hy(a){var t,s,r,q,p,o=this,n=o.r
n===$&&A.b()
t=n-5
t=65535>t?t:65535
for(n=a===B.am;;){s=o.k2
s===$&&A.b()
if(s<=1){o.dd()
s=o.k2
r=s===0
if(r&&n)return 0
if(r)break}r=o.id
r===$&&A.b()
s=o.id=r+s
o.k2=0
r=o.fr
r===$&&A.b()
q=r+t
if(s>=q){o.k2=s-q
o.id=q
o.bE(!1)}s=o.id
r=o.fr
p=o.Q
p===$&&A.b()
if(s-r>=p-262)o.bE(!1)}n=a===B.a_
o.bE(n)
return n?3:1},
eD(a,b,c){var t,s=this
s.aw(c?1:0,3)
s.dQ()
s.bC=8
s.ba(b)
s.ba(A.ao(b,8))
t=(~b>>>0)+65536&65535
s.ba(t)
s.ba(A.ao(t,8))
t=s.ax
t===$&&A.b()
s.ir(t,a,b)},
dd(){var t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.a
do{t=i.ay
t===$&&A.b()
s=i.k2
s===$&&A.b()
r=i.id
r===$&&A.b()
q=t-s-r
if(q===0&&r===0&&s===0){t=i.Q
t===$&&A.b()
q=t}else{t=i.Q
t===$&&A.b()
if(r>=t+t-262){s=i.ax
s===$&&A.b()
B.e.ai(s,0,t,s,t)
t=i.k1
p=i.Q
i.k1=t-p
i.id=i.id-p
t=i.fr
t===$&&A.b()
i.fr=t-p
t=i.cy
t===$&&A.b()
s=i.CW
s===$&&A.b()
r=s.length
o=s.$flags|0
n=t
m=n
do{--n
if(!(n>=0&&n<r))return A.a(s,n)
l=s[n]&65535
t=l>=p?l-p:0
o&2&&A.c(s)
s[n]=t}while(--m,m!==0)
t=i.ch
t===$&&A.b()
s=t.length
r=t.$flags|0
n=p
m=n
do{--n
if(!(n>=0&&n<s))return A.a(t,n)
l=t[n]&65535
o=l>=p?l-p:0
r&2&&A.c(t)
t[n]=o}while(--m,m!==0)
q+=p}}t=h.c
s=h.d
s===$&&A.b()
if(t>=s)return
t=i.ax
t===$&&A.b()
m=i.iu(t,i.id+i.k2,q)
t=i.k2=i.k2+m
if(t>=3){s=i.ax
r=i.id
o=s.length
if(r>>>0!==r||r>=o)return A.a(s,r)
k=s[r]&255
i.cx=k
j=i.dy
j===$&&A.b()
j=B.a.U(k,j);++r
if(!(r<o))return A.a(s,r)
r=s[r]
s=i.dx
s===$&&A.b()
i.cx=((j^r&255)&s)>>>0}}while(t<262&&!(h.c>=h.d))},
hw(a){var t,s,r,q,p,o,n,m,l,k,j=this
for(t=a===B.am,s=0;;){r=j.k2
r===$&&A.b()
if(r<262){j.dd()
r=j.k2
if(r<262&&t)return 0
if(r===0)break}if(r>=3){r=j.cx
r===$&&A.b()
q=j.dy
q===$&&A.b()
q=B.a.U(r,q)
r=j.ax
r===$&&A.b()
p=j.id
p===$&&A.b()
o=p+2
if(!(o>=0&&o<r.length))return A.a(r,o)
o=r[o]
r=j.dx
r===$&&A.b()
r=((q^o&255)&r)>>>0
j.cx=r
o=j.CW
o===$&&A.b()
if(!(r<o.length))return A.a(o,r)
q=o[r]
s=q&65535
n=j.ch
n===$&&A.b()
m=j.at
m===$&&A.b()
m=(p&m)>>>0
n.$flags&2&&A.c(n)
if(!(m>=0&&m<n.length))return A.a(n,m)
n[m]=q
o.$flags&2&&A.c(o)
o[r]=p}if(s!==0){r=j.id
r===$&&A.b()
q=j.Q
q===$&&A.b()
q=(r-s&65535)<=q-262
r=q}else r=!1
if(r){r=j.ok
r===$&&A.b()
if(r!==2)j.fx=j.ek(s)}r=j.fx
r===$&&A.b()
q=j.id
if(r>=3){q===$&&A.b()
l=j.ci(q-j.k1,r-3)
r=j.k2
q=j.fx
r-=q
j.k2=r
p=$.bi.b
if(p===$.bi)A.ab(A.hF(""))
if(q<=p.b&&r>=3){r=j.fx=q-1
do{q=j.id=j.id+1
p=j.cx
p===$&&A.b()
o=j.dy
o===$&&A.b()
o=B.a.U(p,o)
p=j.ax
p===$&&A.b()
n=q+2
if(!(n>=0&&n<p.length))return A.a(p,n)
n=p[n]
p=j.dx
p===$&&A.b()
p=((o^n&255)&p)>>>0
j.cx=p
n=j.CW
n===$&&A.b()
if(!(p<n.length))return A.a(n,p)
o=n[p]
s=o&65535
m=j.ch
m===$&&A.b()
k=j.at
k===$&&A.b()
k=(q&k)>>>0
m.$flags&2&&A.c(m)
if(!(k>=0&&k<m.length))return A.a(m,k)
m[k]=o
n.$flags&2&&A.c(n)
n[p]=q}while(r=j.fx=r-1,r!==0)
j.id=q+1}else{r=j.id=j.id+q
j.fx=0
q=j.ax
q===$&&A.b()
p=q.length
if(!(r>=0&&r<p))return A.a(q,r)
o=q[r]&255
j.cx=o
n=j.dy
n===$&&A.b()
n=B.a.U(o,n);++r
if(!(r<p))return A.a(q,r)
r=q[r]
q=j.dx
q===$&&A.b()
j.cx=((n^r&255)&q)>>>0}}else{r=j.ax
r===$&&A.b()
q===$&&A.b()
if(!(q>=0&&q<r.length))return A.a(r,q)
l=j.ci(0,r[q]&255)
j.k2=j.k2-1
j.id=j.id+1}if(l)j.bE(!1)}t=a===B.a_
j.bE(t)
return t?3:1},
hx(a){var t,s,r,q,p,o,n,m,l,k,j,i=this
for(t=a===B.am,s=0;;){r=i.k2
r===$&&A.b()
if(r<262){i.dd()
r=i.k2
if(r<262&&t)return 0
if(r===0)break}if(r>=3){r=i.cx
r===$&&A.b()
q=i.dy
q===$&&A.b()
q=B.a.U(r,q)
r=i.ax
r===$&&A.b()
p=i.id
p===$&&A.b()
o=p+2
if(!(o>=0&&o<r.length))return A.a(r,o)
o=r[o]
r=i.dx
r===$&&A.b()
r=((q^o&255)&r)>>>0
i.cx=r
o=i.CW
o===$&&A.b()
if(!(r<o.length))return A.a(o,r)
q=o[r]
s=q&65535
n=i.ch
n===$&&A.b()
m=i.at
m===$&&A.b()
m=(p&m)>>>0
n.$flags&2&&A.c(n)
if(!(m>=0&&m<n.length))return A.a(n,m)
n[m]=q
o.$flags&2&&A.c(o)
o[r]=p}r=i.fx
r===$&&A.b()
i.k3=r
i.fy=i.k1
i.fx=2
q=!1
if(s!==0){p=$.bi.b
if(p===$.bi)A.ab(A.hF(""))
if(r<p.b){r=i.id
r===$&&A.b()
q=i.Q
q===$&&A.b()
q=(r-s&65535)<=q-262
r=q}else r=q}else r=q
q=2
if(r){r=i.ok
r===$&&A.b()
if(r!==2){r=i.ek(s)
i.fx=r}else r=q
p=!1
if(r<=5)if(i.ok!==1){if(r===3){p=i.id
p===$&&A.b()
p=p-i.k1>4096}}else p=!0
if(p){i.fx=2
r=q}}else r=q
q=i.k3
if(q>=3&&r<=q){r=i.id
r===$&&A.b()
l=r+i.k2-3
k=i.ci(r-1-i.fy,q-3)
q=i.k2
r=i.k3
i.k2=q-(r-1)
r=i.k3=r-2
do{q=i.id=i.id+1
if(q<=l){p=i.cx
p===$&&A.b()
o=i.dy
o===$&&A.b()
o=B.a.U(p,o)
p=i.ax
p===$&&A.b()
n=q+2
if(!(n>=0&&n<p.length))return A.a(p,n)
n=p[n]
p=i.dx
p===$&&A.b()
p=((o^n&255)&p)>>>0
i.cx=p
n=i.CW
n===$&&A.b()
if(!(p<n.length))return A.a(n,p)
o=n[p]
s=o&65535
m=i.ch
m===$&&A.b()
j=i.at
j===$&&A.b()
j=(q&j)>>>0
m.$flags&2&&A.c(m)
if(!(j>=0&&j<m.length))return A.a(m,j)
m[j]=o
n.$flags&2&&A.c(n)
n[p]=q}}while(r=i.k3=r-1,r!==0)
i.go=0
i.fx=2
i.id=q+1
if(k)i.bE(!1)}else{r=i.go
r===$&&A.b()
if(r!==0){r=i.ax
r===$&&A.b()
q=i.id
q===$&&A.b();--q
if(!(q>=0&&q<r.length))return A.a(r,q)
if(i.ci(0,r[q]&255))i.bE(!1)
i.id=i.id+1
i.k2=i.k2-1}else{i.go=1
r=i.id
r===$&&A.b()
i.id=r+1
i.k2=i.k2-1}}}t=i.go
t===$&&A.b()
if(t!==0){t=i.ax
t===$&&A.b()
r=i.id
r===$&&A.b();--r
if(!(r>=0&&r<t.length))return A.a(t,r)
i.ci(0,t[r]&255)
i.go=0}t=a===B.a_
i.bE(t)
return t?3:1},
ek(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=$.bi.cf().d,b=d.id
b===$&&A.b()
t=d.k3
t===$&&A.b()
s=d.Q
s===$&&A.b()
s-=262
r=b>s?b-s:0
q=$.bi.cf().c
s=d.at
s===$&&A.b()
p=d.id+258
o=d.ax
o===$&&A.b()
n=b+t
m=n-1
l=o.length
if(!(m>=0&&m<l))return A.a(o,m)
k=o[m]
if(!(n>=0&&n<l))return A.a(o,n)
j=o[n]
if(d.k3>=$.bi.cf().a)c=c>>>2
o=d.k2
o===$&&A.b()
if(q>o)q=o
i=p-258
h=t
g=b
do{A:{b=d.ax
t=a+h
o=b.length
if(!(t>=0&&t<o))return A.a(b,t)
n=!0
if(b[t]===j){--t
if(!(t>=0))return A.a(b,t)
if(b[t]===k){if(!(a>=0&&a<o))return A.a(b,a)
t=b[a]
if(!(g>=0&&g<o))return A.a(b,g)
if(t===b[g]){f=a+1
if(!(f<o))return A.a(b,f)
t=b[f]
n=g+1
if(!(n<o))return A.a(b,n)
n=t!==b[n]
t=n}else{t=n
f=a}}else{t=n
f=a}}else{t=n
f=a}if(t)break A
g+=2;++f
do{++g
if(!(g>=0&&g<o))return A.a(b,g)
t=b[g];++f
if(!(f>=0&&f<o))return A.a(b,f)
n=!1
if(t===b[f]){++g
if(!(g<o))return A.a(b,g)
t=b[g];++f
if(!(f<o))return A.a(b,f)
if(t===b[f]){++g
if(!(g<o))return A.a(b,g)
t=b[g];++f
if(!(f<o))return A.a(b,f)
if(t===b[f]){++g
if(!(g<o))return A.a(b,g)
t=b[g];++f
if(!(f<o))return A.a(b,f)
if(t===b[f]){++g
if(!(g<o))return A.a(b,g)
t=b[g];++f
if(!(f<o))return A.a(b,f)
if(t===b[f]){++g
if(!(g<o))return A.a(b,g)
t=b[g];++f
if(!(f<o))return A.a(b,f)
if(t===b[f]){++g
if(!(g<o))return A.a(b,g)
t=b[g];++f
if(!(f<o))return A.a(b,f)
if(t===b[f]){++g
if(!(g<o))return A.a(b,g)
t=b[g];++f
if(!(f<o))return A.a(b,f)
t=t===b[f]&&g<p}else t=n}else t=n}else t=n}else t=n}else t=n}else t=n}else t=n}while(t)
e=258-(p-g)
if(e>h){d.k1=a
if(e>=q){h=e
break}b=d.ax
t=i+e
o=t-1
n=b.length
if(!(o>=0&&o<n))return A.a(b,o)
k=b[o]
if(!(t<n))return A.a(b,t)
j=b[t]
h=e}g=i}b=d.ch
b===$&&A.b()
t=a&s
if(!(t>=0&&t<b.length))return A.a(b,t)
a=b[t]&65535
if(a>r){--c
b=c!==0}else b=!1}while(b)
b=d.k2
if(h<=b)return h
return b},
iu(a,b,c){var t,s,r,q,p,o,n=this
if(c!==0){t=n.a
s=t.c
t=t.d
t===$&&A.b()
t=s>=t}else t=!0
if(t)return 0
r=n.a.ab(c)
q=r.gu(0)
if(q===0)return 0
p=r.a0()
o=p.length
if(q>o)q=o
B.e.br(a,b,b+q,p)
n.e+=q
n.d=A.aU(p,n.d)
return q},
de(){var t,s=this,r=s.x
r===$&&A.b()
t=s.f
t===$&&A.b()
s.b.fc(t,r)
t=s.w
t===$&&A.b()
s.w=t+r
r=s.x-r
s.x=r
if(r===0)s.w=0},
hS(a){switch(a){case 0:return new A.aC(0,0,0,0,0)
case 1:return new A.aC(4,4,8,4,1)
case 2:return new A.aC(4,5,16,8,1)
case 3:return new A.aC(4,6,32,32,1)
case 4:return new A.aC(4,4,16,16,2)
case 5:return new A.aC(8,16,32,32,2)
case 6:return new A.aC(8,16,128,128,2)
case 7:return new A.aC(8,32,128,256,2)
case 8:return new A.aC(32,128,258,1024,2)
case 9:return new A.aC(32,258,258,4096,2)}return null}}
A.aC.prototype={}
A.is.prototype={
hQ(a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a
a2===$&&A.b()
t=a1.c
t===$&&A.b()
s=t.a
r=t.b
q=t.c
p=t.e
for(t=a3.rx,o=t.$flags|0,n=0;n<=15;++n){o&2&&A.c(t)
t[n]=0}m=a3.ry
l=a3.x1
l===$&&A.b()
if(!(l>=0&&l<573))return A.a(m,l)
k=m[l]*2+1
a2.$flags&2&&A.c(a2)
j=a2.length
if(!(k>=0&&k<j))return A.a(a2,k)
a2[k]=0
for(i=l+1,l=s!=null,k=r.length,h=0;i<573;++i){g=m[i]
f=g*2
e=f+1
if(!(e>=0&&e<j))return A.a(a2,e)
d=a2[e]*2+1
if(!(d<j))return A.a(a2,d)
n=a2[d]+1
if(n>p){++h
n=p}a2.$flags&2&&A.c(a2)
a2[e]=n
d=a1.b
d===$&&A.b()
if(g>d)continue
if(!(n<16))return A.a(t,n)
d=t[n]
o&2&&A.c(t)
t[n]=d+1
if(g>=q){d=g-q
if(!(d>=0&&d<k))return A.a(r,d)
c=r[d]}else c=0
if(!(f>=0&&f<j))return A.a(a2,f)
b=a2[f]
f=a3.aB
f===$&&A.b()
a3.aB=f+b*(n+c)
if(l){f=a3.bw
f===$&&A.b()
if(!(e<s.length))return A.a(s,e)
a3.bw=f+b*(s[e]+c)}}if(h===0)return
n=p-1
do{a=n
for(;;){if(!(a>=0&&a<16))return A.a(t,a)
l=t[a]
if(!(l===0))break;--a}o&2&&A.c(t)
t[a]=l-1
l=a+1
if(!(l<16))return A.a(t,l)
t[l]=t[l]+2
if(!(p<16))return A.a(t,p)
t[p]=t[p]-1
h-=2}while(h>0)
for(n=p;n!==0;--n){if(!(n>=0))return A.a(t,n)
g=t[n]
while(g!==0){--i
if(!(i>=0&&i<573))return A.a(m,i)
a0=m[i]
o=a1.b
o===$&&A.b()
if(a0>o)continue
o=a0*2
l=o+1
if(!(l>=0&&l<j))return A.a(a2,l)
k=a2[l]
if(k!==n){f=a3.aB
f===$&&A.b()
if(!(o>=0&&o<j))return A.a(a2,o)
a3.aB=f+(n-k)*a2[o]
a2.$flags&2&&A.c(a2)
a2[l]=n}--g}}},
d3(a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.a
a===$&&A.b()
t=b.c
t===$&&A.b()
s=t.a
r=t.d
a0.to=0
a0.x1=573
for(t=a.length,q=a0.ry,p=q.$flags|0,o=a0.x2,n=o.$flags|0,m=a.$flags|0,l=0,k=-1;l<r;++l){j=l*2
if(!(j<t))return A.a(a,j)
if(a[j]!==0){j=++a0.to
p&2&&A.c(q)
if(!(j>=0&&j<573))return A.a(q,j)
q[j]=l
n&2&&A.c(o)
if(!(l<573))return A.a(o,l)
o[l]=0
k=l}else{++j
m&2&&A.c(a)
if(!(j<t))return A.a(a,j)
a[j]=0}}for(j=s!=null;i=a0.to,i<2;){++i
a0.to=i
if(k<2){++k
h=k}else h=0
p&2&&A.c(q)
if(!(i>=0))return A.a(q,i)
q[i]=h
i=h*2
m&2&&A.c(a)
if(!(i>=0&&i<t))return A.a(a,i)
a[i]=1
n&2&&A.c(o)
if(!(h>=0))return A.a(o,h)
o[h]=0
g=a0.aB
g===$&&A.b()
a0.aB=g-1
if(j){g=a0.bw
g===$&&A.b();++i
if(!(i<s.length))return A.a(s,i)
a0.bw=g-s[i]}}b.b=k
for(l=B.a.W(i,2);l>=1;--l)a0.dn(a,l)
h=r
do{l=q[1]
j=a0.to--
if(!(j>=0&&j<573))return A.a(q,j)
j=q[j]
p&2&&A.c(q)
q[1]=j
a0.dn(a,1)
f=q[1]
j=--a0.x1
if(!(j>=0&&j<573))return A.a(q,j)
q[j]=l;--j
a0.x1=j
if(!(j>=0))return A.a(q,j)
q[j]=f
j=h*2
i=l*2
if(!(i>=0&&i<t))return A.a(a,i)
g=a[i]
e=f*2
if(!(e>=0&&e<t))return A.a(a,e)
d=a[e]
m&2&&A.c(a)
if(!(j<t))return A.a(a,j)
a[j]=g+d
if(!(l>=0&&l<573))return A.a(o,l)
d=o[l]
if(!(f>=0&&f<573))return A.a(o,f)
g=o[f]
j=d>g?d:g
n&2&&A.c(o)
if(!(h<573))return A.a(o,h)
o[h]=j+1;++i;++e
if(!(e<t))return A.a(a,e)
a[e]=h
if(!(i<t))return A.a(a,i)
a[i]=h
c=h+1
q[1]=h
a0.dn(a,1)
if(a0.to>=2){h=c
continue}else break}while(!0)
t=--a0.x1
p=q[1]
if(!(t>=0&&t<573))return A.a(q,t)
q[t]=p
b.hQ(a0)
A.nK(a,k,a0.rx)}}
A.iv.prototype={}
A.hx.prototype={
gbt(){var t=this.a
if(t==null)return t
t.d===$&&A.b()
return t},
hW(){var t,s,r=this
r.e=r.d=0
if(r.gbt()==null)return
for(;;){t=r.gbt()
s=t.c
t=t.d
t===$&&A.b()
if(!(s<t))break
if(!r.i7())return}},
i7(){var t,s,r,q=this,p=q.gbt()
if(p!=null){t=p.c
s=p.d
s===$&&A.b()
s=t>=s
t=s}else t=!0
if(t)return!1
r=q.b9(3)
switch(B.a.j(r,1)){case 0:if(q.ij()===-1)return!1
break
case 1:if(q.e0($.lC(),$.lB())===-1)return!1
break
case 2:if(q.i8()===-1)return!1
break
default:return!1}return(r&1)===0},
b9(a){var t,s,r,q,p=this
if(a===0)return 0
while(t=p.e,t<a){t=p.gbt()
s=t.c
t=t.d
t===$&&A.b()
if(s>=t)return-1
t=p.gbt()
s=t.b
s.toString
t=t.c++
if(!(t>=0&&t<s.length))return A.a(s,t)
r=s[t]
t=p.d
s=p.e
p.d=(t|B.a.U(r,s))>>>0
p.e=s+8}s=p.d
q=B.a.J(1,a)
p.d=B.a.a2(s,a)
p.e=t-a
return(s&q-1)>>>0},
dq(a){var t,s,r,q,p,o,n,m=this,l=a.a
l===$&&A.b()
t=a.b
while(s=m.e,s<t){s=m.gbt()
r=s.c
s=s.d
s===$&&A.b()
if(r>=s)return-1
s=m.gbt()
r=s.b
r.toString
s=s.c++
if(!(s>=0&&s<r.length))return A.a(r,s)
q=r[s]
s=m.d
r=m.e
m.d=(s|B.a.U(q,r))>>>0
m.e=r+8}r=m.d
p=(r&B.a.U(1,t)-1)>>>0
if(!(p<l.length))return A.a(l,p)
o=l[p]
n=o>>>16
m.d=B.a.a2(r,n)
m.e=s-n
return o&65535},
ij(){var t,s,r=this
r.e=r.d=0
t=r.b9(16)
s=r.b9(16)
if(t!==0&&t!==(s^65535)>>>0)return-1
if(t>r.gbt().gu(0))return-1
r.c.jK(r.gbt().ab(t))
return 0},
i8(){var t,s,r,q,p,o,n,m,l,k,j=this,i=j.b9(5)
if(i===-1)return-1
i+=257
if(i>288)return-1
t=j.b9(5)
if(t===-1)return-1;++t
if(t>32)return-1
s=j.b9(4)
if(s===-1)return-1
s+=4
if(s>19)return-1
r=new Uint8Array(19)
for(q=0;q<s;++q){p=j.b9(3)
if(p===-1)return-1
o=B.af[q]
if(!(o<19))return A.a(r,o)
r[o]=p}n=A.eU(r)
o=i+t
m=new Uint8Array(o)
l=J.M(B.e.gv(m),0,i)
k=J.M(B.e.gv(m),i,t)
if(j.h5(o,n,m)===-1)return-1
return j.e0(A.eU(l),A.eU(k))},
e0(a,b){var t,s,r,q,p,o,n=this
for(t=n.c;;){s=n.dq(a)
if(s<0||s>285)return-1
if(s===256)break
if(s<256){t.V(s&255)
continue}r=s-257
if(!(r>=0&&r<29))return A.a(B.bD,r)
q=B.bD[r]
p=n.b9(B.j8[r])
o=n.dq(b)
if(o<0||o>29)return-1
if(!(o>=0&&o<30))return A.a(B.bE,o)
t.jJ(B.bE[o]+n.b9(B.U[o]),q+p)}while(t=n.e,t>=8){n.e=t-8
t=n.gbt()
q=--t.c
p=t.d
p===$&&A.b()
t.c=B.a.I(q,0,p)}return 0},
h5(a,b,c){var t,s,r,q,p,o,n,m,l=this
for(t=0,s=0;s<a;){r=l.dq(b)
if(r===-1)return-1
q=0
switch(r){case 16:p=l.b9(2)
if(p===-1)return-1
p+=3
for(o=c.$flags|0;n=p-1,p>0;p=n,s=m){m=s+1
o&2&&A.c(c)
if(!(s>=0&&s<c.length))return A.a(c,s)
c[s]=t}break
case 17:p=l.b9(3)
if(p===-1)return-1
p+=3
for(o=c.$flags|0;n=p-1,p>0;p=n,s=m){m=s+1
o&2&&A.c(c)
if(!(s>=0&&s<c.length))return A.a(c,s)
c[s]=0}t=q
break
case 18:p=l.b9(7)
if(p===-1)return-1
p+=11
for(o=c.$flags|0;n=p-1,p>0;p=n,s=m){m=s+1
o&2&&A.c(c)
if(!(s>=0&&s<c.length))return A.a(c,s)
c[s]=0}t=q
break
default:if(r<0||r>15)return-1
m=s+1
c.$flags&2&&A.c(c)
if(!(s>=0&&s<c.length))return A.a(c,s)
c[s]=r
s=m
t=r
break}}return 0}}
A.im.prototype={
bP(a){var t
u.L.a(a)
t=A.kF(B.a0,32768)
B.cr.ja(A.hy(a,B.S,null,null),t,!1,!1)
return t.dC()}}
A.eE.prototype={
ad(){return"ByteOrder."+this.b}}
A.f0.prototype={
gu(a){var t=this.b
return t==null?0:t.length-this.c},
fq(a,b){var t=this.b
if(t==null)return A.hy(A.k([],u.t),B.a0,null,null)
return A.hy(t,this.a,a,b)},
D(){var t,s=this.b
s.toString
t=this.c++
if(!(t>=0&&t<s.length))return A.a(s,t)
return s[t]},
a0(){var t,s,r,q=this,p=q.b
if(p==null)return new Uint8Array(0)
t=q.gu(0)
s=q.c
r=p.length
if(s+t>r)t=r-s
return J.M(B.e.gv(p),q.b.byteOffset+q.c,t)}}
A.f1.prototype={
k(){var t=this,s=t.D(),r=t.D(),q=t.D(),p=t.D()
if(t.a===B.S)return(s<<24|r<<16|q<<8|p)>>>0
return(p<<24|q<<16|r<<8|s)>>>0},
ab(a){var t=this,s=t.fq(a,t.c)
t.c=t.c+s.gu(0)
return s}}
A.dO.prototype={
dC(){return J.M(B.e.gv(this.c),this.c.byteOffset,this.b)},
V(a){var t,s,r=this
if(r.b===r.c.length)r.hE()
t=r.c
s=r.b++
t.$flags&2&&A.c(t)
if(!(s>=0&&s<t.length))return A.a(t,s)
t[s]=a},
fc(a,b){var t,s,r,q,p=this
u.L.a(a)
if(b==null)b=a.length
while(t=p.b,s=t+b,r=p.c,q=r.length,s>q)p.cJ(s-q)
B.e.br(r,t,s,a)
p.b+=b},
bn(a){return this.fc(a,null)},
jK(a){var t,s,r,q,p,o,n=this
for(;;){t=n.b
s=a.b
r=s==null
q=r?0:s.length-a.c
p=n.c
o=p.length
if(!(t+q>o))break
n.cJ(t+(r?0:s.length-a.c)-o)}if(!r)B.e.ai(p,t,t+a.gu(0),s,a.c)
n.b=n.b+a.gu(0)},
jJ(a,b){var t,s,r,q,p,o,n,m,l,k,j=this
while(t=j.b,s=t+b,r=j.c,q=r.length,s>q)j.cJ(s-q)
p=t-a
if(a>=b)B.e.ai(r,t,s,r,p)
else for(o=r.$flags|0,n=p;t<s;t=m,n=l){m=t+1
l=n+1
if(!(n>=0&&n<q))return A.a(r,n)
k=r[n]
o&2&&A.c(r)
if(!(t>=0))return A.a(r,t)
r[t]=k}j.b+=b},
cJ(a){var t,s=this.c,r=s.length,q=r+(a==null?1:a),p=r===0?32768:r*2
if(p<q)p=q
t=new Uint8Array(p)
B.e.br(t,0,r,s)
this.c=t},
hE(){return this.cJ(null)},
gu(a){return this.b}}
A.ft.prototype={}
A.hE.prototype={}
A.hc.prototype={}
A.hO.prototype={
fT(a1,a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b=a1.dw(3),a=b.gX(),a0=A.J(c,c,B.f,0,B.i,b.gK(),c,0,3,c,B.f,a,!1)
a=b.a
t=J.am(a.gv(a))
a=a0.a
s=J.am(a.gv(a))
r=b.a.gaV()
q=a0.a.gaV()
a=t.length
p=this.a
o=p.length
n=0
for(;;){m=b.a
m=m==null?c:m.b
if(!(n<(m==null?0:m)))break
m=n*r
l=n*q
k=0
for(;;){j=b.a
j=j==null?c:j.a
if(!(k<(j==null?0:j)))break
j=k*3
i=m+j
h=(B.a.a1(n,224)*224+B.a.a1(k,224))*3
g=l+j
if(!(i>=0&&i<a))return A.a(t,i)
j=t[i]
if(!(h<o))return A.a(p,h)
j=B.b.aP(B.b.I(j/255+a2*p[h],0,1)*255)
s.$flags&2&&A.c(s)
f=s.length
if(!(g>=0&&g<f))return A.a(s,g)
s[g]=j
j=g+1
e=i+1
if(!(e<a))return A.a(t,e)
e=t[e]
d=h+1
if(!(d<o))return A.a(p,d)
d=B.b.aP(B.b.I(e/255+a2*p[d],0,1)*255)
s.$flags&2&&A.c(s)
if(!(j<f))return A.a(s,j)
s[j]=d
d=g+2
j=i+2
if(!(j<a))return A.a(t,j)
j=t[j]
e=h+2
if(!(e<o))return A.a(p,e)
e=B.b.aP(B.b.I(j/255+a2*p[e],0,1)*255)
s.$flags&2&&A.c(s)
if(!(d<f))return A.a(s,d)
s[d]=e;++k}++n}return new Uint8Array(A.w(A.ls(a0)))}}
A.iX.prototype={
$1(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
A.jJ(a)
m=v.G
m.self.postMessage({type:"ready"})
try{t=A.jJ(a.data)
switch(A.bd(t.type)){case"prepare":l=u.U.a(t.bytes)
l.toString
k=u.W.a(t.vector)
k.toString
s=A.p6(new A.es(l,k))
k=m.self
l=s.a
j=s.b
k.postMessage({type:"preview",bytes:s.c,vector:s.d,width:l,height:j})
break
case"generate":l=u.U.a(t.bytes)
l.toString
i=A.jQ(l)
if(i==null)A.ab(B.aW)
r=new Uint8Array(A.w(A.ls(A.ln(i).cW(B.f,3))))
m.self.postMessage({type:"progress",stage:1})
l=u.W.a(t.vector)
l.toString
k=A.lb(t.alpha)
k.toString
l=new Float32Array(A.w(A.oG(l)))
if(!isFinite(k)||k<0||k>1)A.ab(A.jy(k,"alpha","must be between 0.0 and 1.0"))
i=A.jQ(r)
if(i==null)A.ab(B.cG)
q=new A.hO(l).fT(i,k)
m.self.postMessage({type:"progress",stage:2})
l=r
k=q
j=new A.bs(A.dw()).aA(l,null)
j.toString
h=new A.bs(A.dw()).aA(k,null)
h.toString
g=A.p4(j,h)
p=new A.hE(l,k,j.gX(),j.gK(),g.a,g.b)
m.self.postMessage({type:"result",clean:p.a,output:p.b,width:p.c,height:p.d,ssim:p.e,psnr:p.f})
break
case"histogram":l=u.U
k=l.a(t.clean)
k.toString
l=l.a(t.output)
l.toString
o=A.p5(new A.et(k,l))
l=m.self
k=o
j=A.at(k)
h=j.A("dE<1,D>")
k=A.t(new A.dE(k,j.A("D(1)").a(new A.iW()),h),h.A("aQ.E"))
l.postMessage({type:"histogram",bins:k})
break
default:throw A.f(B.cF)}}catch(f){n=A.pc(f)
m=m.self
l=n instanceof A.bj?n.a:"Could not process this image. Try a smaller PNG or JPEG."
m.postMessage({type:"error",error:l})}},
$S:14}
A.iW.prototype={
$1(a){return A.v(a)},
$S:15}
A.hb.prototype={
ad(){return"Channel."+this.b}}
A.K.prototype={
F(){var t=this.b
return++this.a<t.gu(t)},
gP(){return this.b.n(0,this.a)},
$iC:1}
A.cj.prototype={
N(){return new A.cj(new Uint16Array(A.w(this.a)))},
gH(){return B.A},
gu(a){return this.a.length},
gR(){return null},
n(a,b){var t=this.a,s=t.length
if(b<s){if(!(b>=0))return A.a(t,b)
t=t[b]
s=$.L
s=s!=null?s:A.N()
if(!(t<s.length))return A.a(s,t)
t=s[t]}else t=0
return t},
i(a,b,c){var t,s=this.a,r=s.length
if(b<r){t=A.F(c)
s.$flags&2&&A.c(s)
if(!(b>=0))return A.a(s,b)
s[b]=t}},
gL(){return this.gm()},
gm(){var t=this.a,s=t.length
if(s!==0){if(0>=s)return A.a(t,0)
t=t[0]
s=$.L
s=s!=null?s:A.N()
if(!(t<s.length))return A.a(s,t)
t=s[t]}else t=0
return t},
gp(){var t,s=this.a
if(s.length>1){s=s[1]
t=$.L
t=t!=null?t:A.N()
if(!(s<t.length))return A.a(t,s)
s=t[s]}else s=0
return s},
gq(){var t,s=this.a
if(s.length>2){s=s[2]
t=$.L
t=t!=null?t:A.N()
if(!(s<t.length))return A.a(t,s)
s=t[s]}else s=0
return s},
gt(){var t,s=this.a
if(s.length>3){s=s[3]
t=$.L
t=t!=null?t:A.N()
if(!(s<t.length))return A.a(t,s)
s=t[s]}else s=0
return s},
gah(){return A.U(this)},
ac(a){var t=a.gm(),s=this.a,r=s.length
if(r!==0){t=A.F(t)
s.$flags&2&&A.c(s)
if(0>=r)return A.a(s,0)
s[0]=t}t=a.gp()
if(r>1){t=A.F(t)
s.$flags&2&&A.c(s)
s[1]=t}t=a.gq()
if(r>2){t=A.F(t)
s.$flags&2&&A.c(s)
s[2]=t}t=a.gt()
if(r>3){t=A.F(t)
s.$flags&2&&A.c(s)
s[3]=t}},
gG(a){return new A.K(this)},
S(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gu(b)===this.a.length){t=b.gE(b)
s=A.t(this,A.o(this).A("e.E"))
t=t===A.l(s)}return t},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.l(t)},
$iy:1}
A.ck.prototype={
N(){return new A.ck(new Float32Array(A.w(this.a)))},
gH(){return B.G},
gu(a){return this.a.length},
gR(){return null},
n(a,b){var t=this.a,s=t.length
if(b<s){if(!(b>=0))return A.a(t,b)
t=t[b]}else t=0
return t},
i(a,b,c){var t=this.a,s=t.length
if(b<s){t.$flags&2&&A.c(t)
if(!(b>=0))return A.a(t,b)
t[b]=c}},
gL(){var t=this.a,s=t.length
if(s!==0){if(0>=s)return A.a(t,0)
t=t[0]}else t=0
return t},
gm(){var t=this.a,s=t.length
if(s!==0){if(0>=s)return A.a(t,0)
t=t[0]}else t=0
return t},
gp(){var t=this.a
return t.length>1?t[1]:0},
gq(){var t=this.a
return t.length>2?t[2]:0},
gt(){var t=this.a
return t.length>3?t[3]:1},
gah(){return A.U(this)},
ac(a){var t=a.gm(),s=this.a,r=s.length
if(r!==0){s.$flags&2&&A.c(s)
if(0>=r)return A.a(s,0)
s[0]=t}t=a.gp()
if(r>1){s.$flags&2&&A.c(s)
s[1]=t}t=a.gq()
if(r>2){s.$flags&2&&A.c(s)
s[2]=t}t=a.gt()
if(r>3){s.$flags&2&&A.c(s)
s[3]=t}},
gG(a){return new A.K(this)},
S(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gu(b)===this.a.length){t=b.gE(b)
s=A.t(this,A.o(this).A("e.E"))
t=t===A.l(s)}return t},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.l(t)},
$iy:1}
A.cl.prototype={
N(){return new A.cl(new Float64Array(A.w(this.a)))},
gH(){return B.I},
gu(a){return this.a.length},
gR(){return null},
n(a,b){var t=this.a,s=t.length
if(b<s){if(!(b>=0))return A.a(t,b)
t=t[b]}else t=0
return t},
i(a,b,c){var t=this.a,s=t.length
if(b<s){t.$flags&2&&A.c(t)
if(!(b>=0))return A.a(t,b)
t[b]=c}},
gL(){var t=this.a,s=t.length
if(s!==0){if(0>=s)return A.a(t,0)
t=t[0]}else t=0
return t},
gm(){var t=this.a,s=t.length
if(s!==0){if(0>=s)return A.a(t,0)
t=t[0]}else t=0
return t},
gp(){var t=this.a
return t.length>1?t[1]:0},
gq(){var t=this.a
return t.length>2?t[2]:0},
gt(){var t=this.a
return t.length>3?t[3]:1},
gah(){return A.U(this)},
ac(a){var t=a.gm(),s=this.a,r=s.length
if(r!==0){s.$flags&2&&A.c(s)
if(0>=r)return A.a(s,0)
s[0]=t}t=a.gp()
if(r>1){s.$flags&2&&A.c(s)
s[1]=t}t=a.gq()
if(r>2){s.$flags&2&&A.c(s)
s[2]=t}t=a.gt()
if(r>3){s.$flags&2&&A.c(s)
s[3]=t}},
gG(a){return new A.K(this)},
S(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gu(b)===this.a.length){t=b.gE(b)
s=A.t(this,A.o(this).A("e.E"))
t=t===A.l(s)}return t},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.l(t)},
$iy:1}
A.cm.prototype={
N(){return new A.cm(new Int16Array(A.w(this.a)))},
gH(){return B.K},
gu(a){return this.a.length},
gR(){return null},
n(a,b){var t=this.a,s=t.length
if(b<s){if(!(b>=0))return A.a(t,b)
t=t[b]}else t=0
return t},
i(a,b,c){var t,s=this.a,r=s.length
if(b<r){t=B.b.h(c)
s.$flags&2&&A.c(s)
if(!(b>=0))return A.a(s,b)
s[b]=t}},
gL(){var t=this.a,s=t.length
if(s!==0){if(0>=s)return A.a(t,0)
t=t[0]}else t=0
return t},
gm(){var t=this.a,s=t.length
if(s!==0){if(0>=s)return A.a(t,0)
t=t[0]}else t=0
return t},
gp(){var t=this.a
return t.length>1?t[1]:0},
gq(){var t=this.a
return t.length>2?t[2]:0},
gt(){var t=this.a
return t.length>3?t[3]:0},
gah(){return A.U(this)},
ac(a){var t=a.gm(),s=this.a,r=s.length
if(r!==0){t=B.b.h(t)
s.$flags&2&&A.c(s)
if(0>=r)return A.a(s,0)
s[0]=t}t=a.gp()
if(r>1){t=B.b.h(t)
s.$flags&2&&A.c(s)
s[1]=t}t=a.gq()
if(r>2){t=B.b.h(t)
s.$flags&2&&A.c(s)
s[2]=t}t=a.gt()
if(r>3){t=B.b.h(t)
s.$flags&2&&A.c(s)
s[3]=t}},
gG(a){return new A.K(this)},
S(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gu(b)===this.a.length){t=b.gE(b)
s=A.t(this,A.o(this).A("e.E"))
t=t===A.l(s)}return t},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.l(t)},
$iy:1}
A.cn.prototype={
N(){return new A.cn(new Int32Array(A.w(this.a)))},
gH(){return B.L},
gu(a){return this.a.length},
gR(){return null},
n(a,b){var t=this.a,s=t.length
if(b<s){if(!(b>=0))return A.a(t,b)
t=t[b]}else t=0
return t},
i(a,b,c){var t,s=this.a,r=s.length
if(b<r){t=B.b.h(c)
s.$flags&2&&A.c(s)
if(!(b>=0))return A.a(s,b)
s[b]=t}},
gL(){var t=this.a,s=t.length
if(s!==0){if(0>=s)return A.a(t,0)
t=t[0]}else t=0
return t},
gm(){var t=this.a,s=t.length
if(s!==0){if(0>=s)return A.a(t,0)
t=t[0]}else t=0
return t},
gp(){var t=this.a
return t.length>1?t[1]:0},
gq(){var t=this.a
return t.length>2?t[2]:0},
gt(){var t=this.a
return t.length>3?t[3]:0},
gah(){return A.U(this)},
ac(a){var t=a.gm(),s=this.a,r=s.length
if(r!==0){A.v(t)
s.$flags&2&&A.c(s)
if(0>=r)return A.a(s,0)
s[0]=t}t=a.gp()
if(r>1){t=B.b.h(t)
s.$flags&2&&A.c(s)
s[1]=t}t=a.gq()
if(r>2){t=B.b.h(t)
s.$flags&2&&A.c(s)
s[2]=t}t=a.gt()
if(r>3){t=B.b.h(t)
s.$flags&2&&A.c(s)
s[3]=t}},
gG(a){return new A.K(this)},
S(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gu(b)===this.a.length){t=b.gE(b)
s=A.t(this,A.o(this).A("e.E"))
t=t===A.l(s)}return t},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.l(t)},
$iy:1}
A.co.prototype={
N(){return new A.co(new Int8Array(A.w(this.a)))},
gH(){return B.J},
gu(a){return this.a.length},
gR(){return null},
n(a,b){var t=this.a,s=t.length
if(b<s){if(!(b>=0))return A.a(t,b)
t=t[b]}else t=0
return t},
i(a,b,c){var t,s=this.a,r=s.length
if(b<r){t=B.b.h(c)
s.$flags&2&&A.c(s)
if(!(b>=0))return A.a(s,b)
s[b]=t}},
gL(){var t=this.a,s=t.length
if(s!==0){if(0>=s)return A.a(t,0)
t=t[0]}else t=0
return t},
gm(){var t=this.a,s=t.length
if(s!==0){if(0>=s)return A.a(t,0)
t=t[0]}else t=0
return t},
gp(){var t=this.a
return t.length>1?t[1]:0},
gq(){var t=this.a
return t.length>2?t[2]:0},
gt(){var t=this.a
return t.length>3?t[3]:0},
gah(){return A.U(this)},
ac(a){var t=a.gm(),s=this.a,r=s.length
if(r!==0){t=B.b.h(t)
s.$flags&2&&A.c(s)
if(0>=r)return A.a(s,0)
s[0]=t}t=a.gp()
if(r>1){t=B.b.h(t)
s.$flags&2&&A.c(s)
s[1]=t}t=a.gq()
if(r>2){t=B.b.h(t)
s.$flags&2&&A.c(s)
s[2]=t}t=a.gt()
if(r>3){t=B.b.h(t)
s.$flags&2&&A.c(s)
s[3]=t}},
gG(a){return new A.K(this)},
S(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gu(b)===this.a.length){t=b.gE(b)
s=A.t(this,A.o(this).A("e.E"))
t=t===A.l(s)}return t},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.l(t)},
$iy:1}
A.cq.prototype={
N(){var t=this.b
t===$&&A.b()
return new A.cq(this.a,t)},
gH(){return B.v},
gR(){return null},
bV(a){var t
if(a<this.a){t=this.b
t===$&&A.b()
t=B.a.a_(t,7-a)&1}else t=0
return t},
c7(a,b){var t
if(a>=this.a)return
a=7-a
t=this.b
t===$&&A.b()
this.b=b!==0?(t|B.a.U(1,a))>>>0:(t&~(B.a.U(1,a)&255))>>>0},
n(a,b){return this.bV(b)},
i(a,b,c){return this.c7(b,c)},
gL(){return this.bV(0)},
gm(){return this.bV(0)},
gp(){return this.bV(1)},
gq(){return this.bV(2)},
gt(){return this.bV(3)},
gah(){return A.U(this)},
ac(a){this.a7(a.gm(),a.gp(),a.gq(),a.gt())},
a7(a,b,c,d){var t=this
t.c7(0,a)
t.c7(1,b)
t.c7(2,c)
t.c7(3,d)},
gG(a){return new A.K(this)},
S(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gu(b)===this.a){t=b.gE(b)
s=A.t(this,A.o(this).A("e.E"))
t=t===A.l(s)}return t},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.l(t)},
$iy:1,
gu(a){return this.a}}
A.cr.prototype={
N(){return new A.cr(new Uint16Array(A.w(this.a)))},
gH(){return B.l},
gu(a){return this.a.length},
gR(){return null},
n(a,b){var t=this.a,s=t.length
if(b<s){if(!(b>=0))return A.a(t,b)
t=t[b]}else t=0
return t},
i(a,b,c){var t,s=this.a,r=s.length
if(b<r){t=B.b.h(c)
s.$flags&2&&A.c(s)
if(!(b>=0))return A.a(s,b)
s[b]=t}},
gL(){var t=this.a,s=t.length
if(s!==0){if(0>=s)return A.a(t,0)
t=t[0]}else t=0
return t},
gm(){var t=this.a,s=t.length
if(s!==0){if(0>=s)return A.a(t,0)
t=t[0]}else t=0
return t},
gp(){var t=this.a
return t.length>1?t[1]:0},
gq(){var t=this.a
return t.length>2?t[2]:0},
gt(){var t=this.a
return t.length>3?t[3]:0},
gah(){return A.U(this)},
ac(a){var t=a.gm(),s=this.a,r=s.length
if(r!==0){t=B.b.h(t)
s.$flags&2&&A.c(s)
if(0>=r)return A.a(s,0)
s[0]=t}t=a.gp()
if(r>1){t=B.b.h(t)
s.$flags&2&&A.c(s)
s[1]=t}t=a.gq()
if(r>2){t=B.b.h(t)
s.$flags&2&&A.c(s)
s[2]=t}t=a.gt()
if(r>3){t=B.b.h(t)
s.$flags&2&&A.c(s)
s[3]=t}},
gG(a){return new A.K(this)},
S(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gu(b)===this.a.length){t=b.gE(b)
s=A.t(this,A.o(this).A("e.E"))
t=t===A.l(s)}return t},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.l(t)},
$iy:1}
A.cs.prototype={
N(){var t=this.b
t===$&&A.b()
return new A.cs(this.a,t)},
gH(){return B.x},
gR(){return null},
bW(a){var t
if(a<this.a){t=this.b
t===$&&A.b()
t=B.a.a_(t,6-(a<<1>>>0))&3}else t=0
return t},
c8(a,b){var t,s,r
if(a>=this.a)return
if(!(a>=0&&a<4))return A.a(B.bc,a)
t=B.bc[a]
s=B.b.h(b)
r=this.b
r===$&&A.b()
this.b=(r&t|B.a.U(s&3,6-(a<<1>>>0)))>>>0},
n(a,b){return this.bW(b)},
i(a,b,c){return this.c8(b,c)},
gL(){return this.bW(0)},
gm(){return this.bW(0)},
gp(){return this.bW(1)},
gq(){return this.bW(2)},
gt(){return this.bW(3)},
gah(){return A.U(this)},
ac(a){this.a7(a.gm(),a.gp(),a.gq(),a.gt())},
a7(a,b,c,d){var t=this
t.c8(0,a)
t.c8(1,b)
t.c8(2,c)
t.c8(3,d)},
gG(a){return new A.K(this)},
S(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gu(b)===this.a){t=b.gE(b)
s=A.t(this,A.o(this).A("e.E"))
t=t===A.l(s)}return t},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.l(t)},
$iy:1,
gu(a){return this.a}}
A.ct.prototype={
N(){return new A.ct(new Uint32Array(A.w(this.a)))},
gH(){return B.H},
gu(a){return this.a.length},
gR(){return null},
n(a,b){var t=this.a,s=t.length
if(b<s){if(!(b>=0))return A.a(t,b)
t=t[b]}else t=0
return t},
i(a,b,c){var t,s=this.a,r=s.length
if(b<r){t=B.b.h(c)
s.$flags&2&&A.c(s)
if(!(b>=0))return A.a(s,b)
s[b]=t}},
gL(){var t=this.a,s=t.length
if(s!==0){if(0>=s)return A.a(t,0)
t=t[0]}else t=0
return t},
gm(){var t=this.a,s=t.length
if(s!==0){if(0>=s)return A.a(t,0)
t=t[0]}else t=0
return t},
gp(){var t=this.a
return t.length>1?t[1]:0},
gq(){var t=this.a
return t.length>2?t[2]:0},
gt(){var t=this.a
return t.length>3?t[3]:0},
gah(){return A.U(this)},
ac(a){var t=a.gm(),s=this.a,r=s.length
if(r!==0){t=B.b.h(t)
s.$flags&2&&A.c(s)
if(0>=r)return A.a(s,0)
s[0]=t}t=a.gp()
if(r>1){t=B.b.h(t)
s.$flags&2&&A.c(s)
s[1]=t}t=a.gq()
if(r>2){t=B.b.h(t)
s.$flags&2&&A.c(s)
s[2]=t}t=a.gt()
if(r>3){t=B.b.h(t)
s.$flags&2&&A.c(s)
s[3]=t}},
gG(a){return new A.K(this)},
S(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gu(b)===this.a.length){t=b.gE(b)
s=A.t(this,A.o(this).A("e.E"))
t=t===A.l(s)}return t},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.l(t)},
$iy:1}
A.cu.prototype={
N(){return new A.cu(this.a,new Uint8Array(A.w(this.b)))},
gH(){return B.y},
gR(){return null},
bX(a){var t,s
if(a<0||a>=this.a)t=0
else{t=this.b
s=t.length
if(a<2){if(0>=s)return A.a(t,0)
t=B.a.a_(t[0],4-(a<<2>>>0))&15}else{if(1>=s)return A.a(t,1)
t=B.a.a_(t[1],4-((a&1)<<2))&15}}return t},
c9(a,b){var t,s,r,q
if(a>=this.a)return
t=B.a.I(B.b.h(b),0,15)
if(a>1){a&=1
s=1}else s=0
if(a===0){r=this.b
if(!(s<r.length))return A.a(r,s)
q=r[s]
r.$flags&2&&A.c(r)
r[s]=(q&15|t<<4)>>>0}else if(a===1){r=this.b
if(!(s<r.length))return A.a(r,s)
q=r[s]
r.$flags&2&&A.c(r)
r[s]=(q&240|t)>>>0}},
n(a,b){return this.bX(b)},
i(a,b,c){return this.c9(b,c)},
gL(){return this.bX(0)},
gm(){return this.bX(0)},
gp(){return this.bX(1)},
gq(){return this.bX(2)},
gt(){return this.bX(3)},
gah(){return A.U(this)},
ac(a){this.a7(a.gm(),a.gp(),a.gq(),a.gt())},
a7(a,b,c,d){var t=this
t.c9(0,a)
t.c9(1,b)
t.c9(2,c)
t.c9(3,d)},
gG(a){return new A.K(this)},
S(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gu(b)===this.a){t=b.gE(b)
s=A.t(this,A.o(this).A("e.E"))
t=t===A.l(s)}return t},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.l(t)},
$iy:1,
gu(a){return this.a}}
A.bh.prototype={
ft(a,b,c,d){var t,s=this.a
s.$flags&2&&A.c(s)
t=s.length
if(0>=t)return A.a(s,0)
s[0]=a
if(1>=t)return A.a(s,1)
s[1]=b
if(2>=t)return A.a(s,2)
s[2]=c
if(3>=t)return A.a(s,3)
s[3]=d},
N(){return new A.bh(new Uint8Array(A.w(this.a)))},
gH(){return B.f},
gu(a){return this.a.length},
gR(){return null},
n(a,b){var t=this.a,s=t.length
if(b<s){if(!(b>=0))return A.a(t,b)
t=t[b]}else t=0
return t},
i(a,b,c){var t,s=this.a,r=s.length
if(b<r){t=B.b.h(c)
s.$flags&2&&A.c(s)
if(!(b>=0))return A.a(s,b)
s[b]=t}},
gL(){var t=this.a,s=t.length
if(s!==0){if(0>=s)return A.a(t,0)
t=t[0]}else t=0
return t},
gm(){var t=this.a,s=t.length
if(s!==0){if(0>=s)return A.a(t,0)
t=t[0]}else t=0
return t},
gp(){var t=this.a
return t.length>1?t[1]:0},
gq(){var t=this.a
return t.length>2?t[2]:0},
gt(){var t=this.a
return t.length>3?t[3]:255},
gah(){return A.U(this)},
ac(a){var t=a.gm(),s=this.a,r=s.length
if(r!==0){t=B.b.h(t)
s.$flags&2&&A.c(s)
if(0>=r)return A.a(s,0)
s[0]=t}t=a.gp()
if(r>1){t=B.b.h(t)
s.$flags&2&&A.c(s)
s[1]=t}t=a.gq()
if(r>2){t=B.b.h(t)
s.$flags&2&&A.c(s)
s[2]=t}t=a.gt()
if(r>3){t=B.b.h(t)
s.$flags&2&&A.c(s)
s[3]=t}},
gG(a){return new A.K(this)},
S(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gu(b)===this.a.length){t=b.gE(b)
s=A.t(this,A.o(this).A("e.E"))
t=t===A.l(s)}return t},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.l(t)},
$iy:1}
A.eH.prototype={}
A.cp.prototype={}
A.af.prototype={
ad(){return"Format."+this.b}}
A.eC.prototype={
ad(){return"BlendMode."+this.b}}
A.bF.prototype={
cA(a){var t=$.k0()
if(!t.aO(a))return"<unknown>"
return t.n(0,a).a},
C(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(t=f.a,s=new A.V(t,t.r,t.e,A.o(t).A("V<1>")),r=u.p,q=u.r,p=u.N,o=u.P,n="";s.F();){m=s.d
n+=m+"\n"
l=t.n(0,m)
for(m=l.a,m=new A.V(m,m.r,m.e,A.o(m).A("V<1>"));m.F();){k=m.d
j=l.n(0,k)
n=j==null?n+("\t"+f.cA(k)+"\n"):n+("\t"+f.cA(k)+": "+j.C(0)+"\n")}for(m=l.b.a,k=new A.V(m,m.r,m.e,A.o(m).A("V<1>"));k.F();){i=k.d
n+=i+"\n"
if(!m.aO(i))m.i(0,i,new A.aP(A.O(r,q),new A.b1(A.O(p,o))))
h=m.n(0,i)
for(i=h.a,i=new A.V(i,i.r,i.e,A.o(i).A("V<1>"));i.F();){g=i.d
j=h.n(0,g)
n=j==null?n+("\t"+f.cA(g)+"\n"):n+("\t"+f.cA(g)+": "+j.C(0)+"\n")}}}return n.charCodeAt(0)==0?n:n},
bS(c5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2=this,c3="Length must be a non-negative integer: ",c4=c5.e
c5.e=!0
t=c5.d
a1=c5.l()
if(a1===18761){c5.e=!1
if(c5.l()!==42){c5.e=c4
return!1}}else if(a1===19789){c5.e=!0
if(c5.l()!==42){c5.e=c4
return!1}}else return!1
s=c5.k()
r=0
a2=c2.a
a3=u.gn
a4=c5.c
a5=u.p
a6=u.r
a7=u.N
a8=u.P
for(;;){a9=s
if(typeof a9!=="number")return a9.jM()
if(!(a9>0))break
try{a9=t
b0=s
if(typeof a9!=="number")return a9.b5()
if(typeof b0!=="number")return A.h5(b0)
b0=a9+b0
c5.d=b0
if(a4-b0<2)break
q=new A.aP(A.O(a5,a6),new A.b1(A.O(a7,a8)))
p=c5.l()
a9=p
if(typeof a9!=="number")return a9.dF()
if(a9*12>a4-c5.d)break
o=p
a9=o
if(a9<0)A.ab(A.bf(c3+A.z(a9)))
n=A.k(new Array(a9),a3)
m=0
for(;;){a9=m
b0=o
if(typeof a9!=="number")return a9.fh()
if(typeof b0!=="number")return A.h5(b0)
if(!(a9<b0))break
J.x(n,m,c2.er(c5,t))
a9=m
if(typeof a9!=="number")return a9.b5()
m=a9+1}l=n
for(a9=l,b0=a9.length,b1=0;b1<a9.length;a9.length===b0||(0,A.aa)(a9),++b1){k=a9[b1]
if(k.b!=null){b2=k.a
b3=k.b
b3.toString
J.x(q,b2,b3)}}a2.i(0,"ifd"+A.z(r),q)
a9=r
if(typeof a9!=="number")return a9.b5()
r=a9+1
j=c5.k()
if(J.bD(j,s))break
else s=j}catch(b4){break}}for(a9=new A.bR(a2,a2.r,a2.e,A.o(a2).A("bR<2>"));a9.F();){i=a9.d
for(b0=B.bN.gjp(),b0=b0.gG(b0);b0.F();){h=b0.gP()
b2=A.v(h)
if(i.a.aO(b2))try{g=J.d(i,h).h(0)
b2=t
b3=g
if(typeof b2!=="number")return b2.b5()
if(typeof b3!=="number")return A.h5(b3)
c5.d=b2+b3
f=new A.aP(A.O(a5,a6),new A.b1(A.O(a7,a8)))
e=c5.l()
d=e
b3=d
if(b3<0)A.ab(A.bf(c3+A.z(b3)))
c=A.k(new Array(b3),a3)
b=0
for(;;){b2=b
b3=d
if(typeof b2!=="number")return b2.fh()
if(typeof b3!=="number")return A.h5(b3)
if(!(b2<b3))break
J.x(c,b,c2.er(c5,t))
b2=b
if(typeof b2!=="number")return b2.b5()
b=b2+1}a=c
for(b2=a,b3=b2.length,b1=0;b1<b2.length;b2.length===b3||(0,A.aa)(b2),++b1){a0=b2[b1]
if(a0.b!=null){b5=a0.a
b6=a0.b
b6.toString
J.x(f,b5,b6)}}b2=i.b
b3=B.bN.n(0,h)
b3.toString
b2.a.i(0,b3,a8.a(f))}catch(b4){continue}}}c2.b=null
b7=a2.n(0,"ifd1")
if(b7!=null){a2=b7.a
a2=a2.aO(513)&&a2.aO(514)}else a2=!1
if(a2){b8=b7.n(0,513).h(0)
b9=b7.n(0,514).h(0)
a2=t
if(typeof a2!=="number")return a2.b5()
c0=a2+b8
if(b9>0){a2=t
if(typeof a2!=="number")return A.h5(a2)
a2=c0>=a2&&c0+b9<=a4}else a2=!1
if(a2){c1=c5.d
c5.d=c0
c2.b=c5.ab(b9).a0()
c5.d=c1}}c5.e=c4
return!1},
er(a,b){var t,s,r,q,p,o,n,m=a.l(),l=a.l(),k=a.k(),j=new A.fZ(m,null)
if(l>=14)return j
t=B.bt[l]
s=k*B.a5[l]
r=a.d
if((s>4?a.d=a.k()+b:r)+s>a.c)return j
q=a.ab(s)
switch(t.a){case 0:break
case 6:j.b=new A.bm(new Int8Array(A.w(J.j1(B.e.gv(q.a0()),0,k))))
break
case 1:j.b=new A.b0(new Uint8Array(A.w(q.ab(k).a0())))
break
case 7:j.b=new A.cB(new Uint8Array(A.w(q.ab(k).a0())))
break
case 2:j.b=new A.bK(k===0?"":q.af(k-1))
break
case 3:j.b=A.kq(q,k)
break
case 4:j.b=A.kl(q,k)
break
case 5:j.b=A.km(q,k)
break
case 10:j.b=A.ko(q,k)
break
case 8:j.b=A.kp(q,k)
break
case 9:j.b=A.kn(q,k)
break
case 11:j.b=A.kr(q,k)
break
case 12:j.b=A.kk(q,k)
break
case 13:if(k===1){p=new A.cz(0)
o=q.k()
n=$.I()
n.$flags&2&&A.c(n)
n[0]=o
o=$.Z()
if(0>=o.length)return A.a(o,0)
p.a=o[0]
j.b=p}break}a.d=r+4
return j}}
A.fZ.prototype={}
A.eM.prototype={}
A.b1.prototype={
fB(a){a.a.bR(0,new A.hq(this))},
n(a,b){var t=this.a
if(!t.aO(b))t.i(0,b,new A.aP(A.O(u.p,u.r),new A.b1(A.O(u.N,u.P))))
t=t.n(0,b)
t.toString
return t}}
A.hq.prototype={
$2(a,b){var t
A.bd(a)
t=A.kj(u.P.a(b))
this.a.a.i(0,a,t)
return t},
$S:7}
A.aP.prototype={
j3(a){a.a.bR(0,new A.hr(this))
a.b.a.bR(0,new A.hs(this))},
n(a,b){var t=this.a.n(0,b)
return t},
i(a,b,c){this.a.i(0,b,c)},
gc4(){var t=this.a.n(0,274)
return t==null?null:t.h(0)},
sc4(a){this.a.jB(0,274)}}
A.hr.prototype={
$2(a,b){var t
A.v(a)
t=u.r.a(b).N()
this.a.a.i(0,a,t)
return t},
$S:16}
A.hs.prototype={
$2(a,b){var t
A.bd(a)
t=A.kj(u.P.a(b))
this.a.b.a.i(0,a,t)
return t},
$S:7}
A.a4.prototype={
ad(){return"IfdValueType."+this.b}}
A.X.prototype={
a4(a,b){A.v(b)
return 0},
h(a){return this.a4(0,0)},
bg(){return new Uint8Array(0)},
C(a){return""},
S(a,b){var t=this
if(b==null)return!1
return b instanceof A.X&&t.gaW()===b.gaW()&&t.gu(t)===b.gu(b)&&t.gE(t)===b.gE(b)},
gE(a){return 0}}
A.b0.prototype={
N(){return new A.b0(new Uint8Array(A.w(this.a)))},
gaW(){return B.aZ},
gu(a){return this.a.length},
S(a,b){var t,s
if(b==null)return!1
if(b instanceof A.b0){t=this.a
s=b.a
t=t.length===s.length&&A.l(t)===A.l(s)}else t=!1
return t},
gE(a){return A.l(this.a)},
a4(a,b){var t
A.v(b)
t=this.a
if(!(b>=0&&b<t.length))return A.a(t,b)
return t[b]},
h(a){return this.a4(0,0)},
bg(){return this.a},
C(a){var t=this.a,s=t.length
if(s===1){if(0>=s)return A.a(t,0)
t=""+t[0]}else t=A.z(t)
return t}}
A.bK.prototype={
N(){return new A.bK(this.a)},
gaW(){return B.k},
gu(a){return this.a.length+1},
S(a,b){var t,s
if(b==null)return!1
if(b instanceof A.bK){t=this.a
s=b.a
t=t.length+1===s.length+1&&B.B.gE(t)===B.B.gE(s)}else t=!1
return t},
gE(a){return B.B.gE(this.a)},
bg(){return new Uint8Array(A.w(new A.aq(this.a)))},
C(a){return this.a}}
A.bP.prototype={
fG(a,b){var t,s,r,q
for(t=this.a,s=t.$flags|0,r=0;r<b;++r){q=a.l()
s&2&&A.c(t)
if(!(r<t.length))return A.a(t,r)
t[r]=q}},
N(){return new A.bP(new Uint16Array(A.w(this.a)))},
gaW(){return B.j},
gu(a){return this.a.length},
S(a,b){var t,s
if(b==null)return!1
if(b instanceof A.bP){t=this.a
s=b.a
t=t.length===s.length&&A.l(t)===A.l(s)}else t=!1
return t},
gE(a){return A.l(this.a)},
a4(a,b){var t
A.v(b)
t=this.a
if(!(b>=0&&b<t.length))return A.a(t,b)
return t[b]},
h(a){return this.a4(0,0)},
bg(){return J.am(B.u.gv(this.a))},
C(a){var t=this.a,s=t.length
if(s===1){if(0>=s)return A.a(t,0)
t=""+t[0]}else t=A.z(t)
return t}}
A.bl.prototype={
fD(a,b){var t,s,r,q
for(t=this.a,s=t.$flags|0,r=0;r<b;++r){q=a.k()
s&2&&A.c(t)
if(!(r<t.length))return A.a(t,r)
t[r]=q}},
N(){return new A.bl(new Uint32Array(A.w(this.a)))},
gaW(){return B.o},
gu(a){return this.a.length},
S(a,b){var t,s
if(b==null)return!1
if(b instanceof A.bl){t=this.a
s=b.a
t=t.length===s.length&&A.l(t)===A.l(s)}else t=!1
return t},
gE(a){return A.l(this.a)},
a4(a,b){var t
A.v(b)
t=this.a
if(!(b>=0&&b<t.length))return A.a(t,b)
return t[b]},
h(a){return this.a4(0,0)},
bg(){return J.am(B.n.gv(this.a))},
C(a){var t=this.a,s=t.length
if(s===1){if(0>=s)return A.a(t,0)
t=""+t[0]}else t=A.z(t)
return t}}
A.bL.prototype={
N(){return new A.bL(A.jg(this.a,!0,u.j))},
gaW(){return B.q},
gu(a){return this.a.length},
a4(a,b){var t
A.v(b)
t=this.a
if(!(b>=0&&b<t.length))return A.a(t,b)
return t[b].h(0)},
h(a){return this.a4(0,0)},
S(a,b){var t,s,r
if(b==null)return!1
if(b instanceof A.bL){t=this.a
s=t.length
r=b.a
t=s===r.length&&A.l(t)===A.l(r)}else t=!1
return t},
gE(a){return A.l(this.a)},
C(a){var t=this.a,s=t.length
if(s===1){if(0>=s)return A.a(t,0)
t=t[0].C(0)}else t=A.z(t)
return t}}
A.bm.prototype={
N(){return new A.bm(new Int8Array(A.w(this.a)))},
gaW(){return B.b3},
gu(a){return this.a.length},
S(a,b){var t,s
if(b==null)return!1
if(b instanceof A.bm){t=this.a
s=b.a
t=t.length===s.length&&A.l(t)===A.l(s)}else t=!1
return t},
gE(a){return A.l(this.a)},
a4(a,b){var t
A.v(b)
t=this.a
if(!(b>=0&&b<t.length))return A.a(t,b)
return t[b]},
h(a){return this.a4(0,0)},
bg(){return J.am(B.aE.gv(this.a))},
C(a){var t=this.a,s=t.length
if(s===1){if(0>=s)return A.a(t,0)
t=""+t[0]}else t=A.z(t)
return t}}
A.bO.prototype={
fF(a,b){var t,s,r,q,p
for(t=this.a,s=t.$flags|0,r=0;r<b;++r){q=a.l()
p=$.ac()
p.$flags&2&&A.c(p)
p[0]=q
q=$.aj()
if(0>=q.length)return A.a(q,0)
q=q[0]
s&2&&A.c(t)
if(!(r<t.length))return A.a(t,r)
t[r]=q}},
N(){return new A.bO(new Int16Array(A.w(this.a)))},
gaW(){return B.b4},
gu(a){return this.a.length},
S(a,b){var t,s
if(b==null)return!1
if(b instanceof A.bO){t=this.a
s=b.a
t=t.length===s.length&&A.l(t)===A.l(s)}else t=!1
return t},
gE(a){return A.l(this.a)},
a4(a,b){var t
A.v(b)
t=this.a
if(!(b>=0&&b<t.length))return A.a(t,b)
return t[b]},
h(a){return this.a4(0,0)},
bg(){return J.am(B.aD.gv(this.a))},
C(a){var t=this.a,s=t.length
if(s===1){if(0>=s)return A.a(t,0)
t=""+t[0]}else t=A.z(t)
return t}}
A.bM.prototype={
fE(a,b){var t,s,r,q,p
for(t=this.a,s=t.$flags|0,r=0;r<b;++r){q=a.k()
p=$.I()
p.$flags&2&&A.c(p)
p[0]=q
q=$.Z()
if(0>=q.length)return A.a(q,0)
q=q[0]
s&2&&A.c(t)
if(!(r<t.length))return A.a(t,r)
t[r]=q}},
N(){return new A.bM(new Int32Array(A.w(this.a)))},
gaW(){return B.b5},
gu(a){return this.a.length},
S(a,b){var t,s
if(b==null)return!1
if(b instanceof A.bM){t=this.a
s=b.a
t=t.length===s.length&&A.l(t)===A.l(s)}else t=!1
return t},
gE(a){return A.l(this.a)},
a4(a,b){var t
A.v(b)
t=this.a
if(!(b>=0&&b<t.length))return A.a(t,b)
return t[b]},
h(a){return this.a4(0,0)},
bg(){return J.am(B.R.gv(this.a))},
C(a){var t=this.a,s=t.length
if(s===1){if(0>=s)return A.a(t,0)
t=""+t[0]}else t=A.z(t)
return t}}
A.bN.prototype={
N(){return new A.bN(A.jg(this.a,!0,u.j))},
gaW(){return B.b_},
gu(a){return this.a.length},
S(a,b){var t,s,r
if(b==null)return!1
if(b instanceof A.bN){t=this.a
s=t.length
r=b.a
t=s===r.length&&A.l(t)===A.l(r)}else t=!1
return t},
gE(a){return A.l(this.a)},
a4(a,b){var t
A.v(b)
t=this.a
if(!(b>=0&&b<t.length))return A.a(t,b)
return t[b].h(0)},
h(a){return this.a4(0,0)},
C(a){var t=this.a,s=t.length
if(s===1){if(0>=s)return A.a(t,0)
t=t[0].C(0)}else t=A.z(t)
return t}}
A.cA.prototype={
fH(a,b){var t,s,r,q,p
for(t=this.a,s=t.$flags|0,r=0;r<b;++r){q=a.k()
p=$.I()
p.$flags&2&&A.c(p)
p[0]=q
q=$.bC()
if(0>=q.length)return A.a(q,0)
q=q[0]
s&2&&A.c(t)
if(!(r<t.length))return A.a(t,r)
t[r]=q}},
N(){return new A.cA(new Float32Array(A.w(this.a)))},
gaW(){return B.b0},
gu(a){return this.a.length},
S(a,b){var t,s
if(b==null)return!1
if(b instanceof A.cA){t=this.a
s=b.a
t=t.length===s.length&&A.l(t)===A.l(s)}else t=!1
return t},
gE(a){return A.l(this.a)},
bg(){return J.am(B.ai.gv(this.a))},
C(a){var t=this.a,s=t.length
if(s===1){if(0>=s)return A.a(t,0)
t=A.z(t[0])}else t=A.z(t)
return t}}
A.cy.prototype={
fC(a,b){var t,s
for(t=this.a,s=0;s<b;++s)B.aj.i(t,s,a.cZ())},
N(){return new A.cy(new Float64Array(A.w(this.a)))},
gaW(){return B.b1},
gu(a){return this.a.length},
S(a,b){var t,s
if(b==null)return!1
if(b instanceof A.cy){t=this.a
s=b.a
t=t.length===s.length&&A.l(t)===A.l(s)}else t=!1
return t},
gE(a){return A.l(this.a)},
bg(){return J.am(B.aj.gv(this.a))},
C(a){var t=this.a,s=t.length
if(s===1){if(0>=s)return A.a(t,0)
t=A.z(t[0])}else t=A.z(t)
return t}}
A.cB.prototype={
N(){return new A.cB(new Uint8Array(A.w(this.a)))},
gaW(){return B.M},
gu(a){return this.a.length},
bg(){return this.a},
S(a,b){var t,s
if(b==null)return!1
if(b instanceof A.cB){t=this.a
s=b.a
t=t.length===s.length&&A.l(t)===A.l(s)}else t=!1
return t},
gE(a){return A.l(this.a)},
C(a){return"<data>"}}
A.cz.prototype={
N(){return A.mt(this.a)},
gaW(){return B.b2},
gu(a){return 1},
S(a,b){var t
if(b==null)return!1
t=!1
if(b instanceof A.cz)t=this.a===b.a
return t},
gE(a){return this.a},
a4(a,b){var t=null
if(A.v(b)!==0)throw A.f(new A.cW(t,t,!1,t,t,"Ifd tags must have exactly one entry (the offset)"))
return this.a},
h(a){return this.a4(0,0)},
bg(){var t=this.a
return new Uint8Array(A.w(A.k([B.a.j(t,24),B.a.j(t,16),B.a.j(t,8),t],u.t)))},
C(a){return"Ifd@"+this.a}}
A.a3.prototype={
ad(){return"BmpCompression."+this.b}}
A.ha.prototype={}
A.aZ.prototype={
dK(a,b){var t,s,r,q,p,o,n,m=this,l=m.d,k=l<=40
if(k){t=m.r
t=t===B.ap||t===B.aq}else t=!0
if(t){t=m.as=a.k()
s=A.iG(t)
m.CW=s
r=B.a.a_(t,s)
t=r>0
m.cx=t?255/r:0
s=m.at=a.k()
q=A.iG(s)
m.cy=q
p=B.a.a_(s,q)
m.db=t?255/p:0
s=m.ax=a.k()
q=A.iG(s)
m.dx=q
o=B.a.a_(s,q)
m.dy=t?255/o:0
if(!k||m.r===B.aq){k=m.ay=a.k()
t=A.iG(k)
m.fr=t
n=B.a.a_(k,t)
m.fx=n>0?255/n:0}else if(m.f===16){m.ay=4278190080
m.fr=24
m.fx=1}else{m.ay=4278190080
m.fr=24
m.fx=1}}else if(m.f===16){m.as=31744
m.CW=10
m.cx=8.225806451612904
m.at=992
m.cy=5
m.db=8.225806451612904
m.ax=31
m.dx=0
m.dy=8.225806451612904
m.fx=m.fr=m.ay=0}else{m.as=16711680
m.CW=16
m.cx=1
m.at=65280
m.cy=8
m.db=1
m.ax=255
m.dx=0
m.dy=1
m.ay=4278190080
m.fr=24
m.fx=1}k=a.d
a.d=k+(l-(k-m.fy))
if(m.f<=8)m.jv(a)},
gcm(){var t=this.d
if(t!==40)if(t===124){t=this.ay
t===$&&A.b()
t=t===0}else t=!1
else t=!0
return t},
gK(){return Math.abs(this.c)},
jv(a){var t,s,r,q,p,o=this,n=o.z
if(n===0)n=B.a.J(1,o.f)
o.ch=new A.az(new Uint8Array(n*3),n,3)
for(t=0;t<n;++t){s=J.d(a.a,a.d++)
r=J.d(a.a,a.d++)
q=J.d(a.a,a.d++)
p=J.d(a.a,a.d++)
o.ch.cB(t,q,r,s,p)}},
j9(a,b){var t,s,r,q,p,o,n,m,l,k=this
u.dX.a(b)
if(k.ch!=null){t=k.f
if(t===1){s=a.D()
for(r=7;r>=0;--r)b.$4(B.a.b7(s,r)&1,0,0,0)
return}else if(t===2){s=a.D()
for(r=6;r>=0;r-=2)b.$4(B.a.b7(s,r)&2,0,0,0)}else if(t===4){s=a.D()
b.$4(B.a.j(s,4)&15,0,0,0)
b.$4(s&15,0,0,0)
return}else if(t===8){b.$4(a.D(),0,0,0)
return}}t=k.r
if(t===B.ap&&k.f===32){q=a.k()
t=k.as
t===$&&A.b()
p=k.CW
p===$&&A.b()
p=B.a.a_((q&t)>>>0,p)
t=k.cx
t===$&&A.b()
o=B.b.h(p*t)
t=k.at
t===$&&A.b()
p=k.cy
p===$&&A.b()
p=B.a.a_((q&t)>>>0,p)
t=k.db
t===$&&A.b()
n=B.b.h(p*t)
t=k.ax
t===$&&A.b()
p=k.dx
p===$&&A.b()
p=B.a.a_((q&t)>>>0,p)
t=k.dy
t===$&&A.b()
m=B.b.h(p*t)
if(k.gcm())l=255
else{t=k.ay
t===$&&A.b()
p=k.fr
p===$&&A.b()
p=B.a.a_((q&t)>>>0,p)
t=k.fx
t===$&&A.b()
l=B.b.h(p*t)}return b.$4(o,n,m,l)}else{p=k.f
if(p===32&&t===B.aN){m=a.D()
n=a.D()
o=a.D()
l=a.D()
return b.$4(o,n,m,k.gcm()?255:l)}else if(p===24){m=a.D()
n=a.D()
return b.$4(a.D(),n,m,255)}else if(p===16){q=a.l()
t=k.as
t===$&&A.b()
p=k.CW
p===$&&A.b()
p=B.a.a_((q&t)>>>0,p)
t=k.cx
t===$&&A.b()
o=B.b.h(p*t)
t=k.at
t===$&&A.b()
p=k.cy
p===$&&A.b()
p=B.a.a_((q&t)>>>0,p)
t=k.db
t===$&&A.b()
n=B.b.h(p*t)
t=k.ax
t===$&&A.b()
p=k.dx
p===$&&A.b()
p=B.a.a_((q&t)>>>0,p)
t=k.dy
t===$&&A.b()
m=B.b.h(p*t)
if(k.gcm())l=255
else{t=k.ay
t===$&&A.b()
p=k.fr
p===$&&A.b()
p=B.a.a_((q&t)>>>0,p)
t=k.fx
t===$&&A.b()
l=B.b.h(p*t)}return b.$4(o,n,m,l)}else throw A.f(A.m("Unsupported bitsPerPixel ("+p+") or compression ("+t.C(0)+")."))}},
$iG:1}
A.eD.prototype={
bm(a){var t,s
if(!A.k5(A.q(a,!1,null,0))||a.length<18)return!1
t=A.q(a,!1,null,0)
t.d+=14
s=t.k()
return s>=12&&s<=124},
aS(a){var t
if(!this.bm(a))return null
t=A.q(a,!1,null,0)
this.a=t
return this.b=A.m4(t,null)},
ag(a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=c.b
if(a==null)return new A.b2(b,b,b,b,0,B.i,0,0)
t=c.a
t===$&&A.b()
s=a.a.b
s===$&&A.b()
t.d=s
r=a.f
s=a.b
q=B.a.W(s*r+31,32)*4
t=c.c
if(t)p=4
else if(r===1||r===4||r===8)p=1
else{o=r===32?4:3
p=o}if(t)n=B.f
else if(r===1)n=B.v
else{if(r===2)o=B.x
else if(r===4)o=B.y
else o=B.f
n=o}m=t?b:a.ch
l=A.J(b,b,n,0,B.i,a.gK(),b,0,p,m,B.f,s,!1)
for(k=l.gK()-1,t=a.c,s=1/t<0,o=t<0,t=t===0;k>=0;--k){j={}
if(!(t?s:o))i=k
else{h=l.a
h=h==null?b:h.b
i=(h==null?0:h)-1-k}h=c.a
g=h.aj(q)
h.d=h.d+(g.c-g.d)
h=l.a
f=h==null
e=f?b:h.a
if(e==null)e=0
j.a=0
d=f?b:h.O(0,i,b)
if(d==null)d=new A.A()
while(j.a<e)a.j9(g,new A.h9(j,c,e,a,d))}return l},
aA(a,b){if(this.aS(a)==null)return null
return this.ag(0)}}
A.h9.prototype={
$4(a,b,c,d){var t,s,r=this,q=r.a
if(q.a<r.c){t=r.b.c&&r.d.ch!=null
s=r.e
if(t){t=r.d
s.a7(t.ch.aM(a),t.ch.aL(a),t.ch.aJ(a),t.ch.aR(a))}else s.a7(a,b,c,d)
s.F();++q.a}},
$S:17}
A.hf.prototype={}
A.G.prototype={}
A.hd.prototype={}
A.hg.prototype={}
A.eN.prototype={}
A.du.prototype={
co(){return this.w},
bh(a,b,c,d,e){throw A.f(A.m("B44 compression not yet supported."))},
c5(a,b,c){return this.bh(a,b,c,null,null)},
C(a){return A.z(this.r)+" "+this.x}}
A.cv.prototype={
ad(){return"ExrChannelType."+this.b}}
A.bG.prototype={
ad(){return"ExrChannelName."+this.b}}
A.eO.prototype={
fu(a){var t=this,s=a.cq()
t.a=s
if(s.length===0)return
s=a.k()
if(!(s<3))return A.a(B.bk,s)
t.c=B.bk[s]
a.D()
a.d+=3
t.f=a.k()
t.r=a.k()
s=t.a
if(s==="R"){t.w=!0
t.b=B.cs}else if(s==="G"){t.w=!0
t.b=B.ct}else if(s==="B"){t.w=!0
t.b=B.cu}else if(s==="A"){t.w=!0
t.b=B.cv}else{t.w=!1
t.b=B.cw}switch(t.c.a){case 0:t.d=4
break
case 1:t.d=2
break
case 2:t.d=4
break}}}
A.aE.prototype={
ad(){return"ExrCompressorType."+this.b}}
A.b_.prototype={
bh(a,b,c,d,e){throw A.f(A.m("Unsupported compression type"))},
c5(a,b,c){return this.bh(a,b,c,null,null)}}
A.f3.prototype={}
A.eP.prototype={
sf3(a){this.c=u.T.a(a)}}
A.eQ.prototype={
fv(a){var t,s,r,q,p=this,o=A.q(a,!1,null,0)
if(o.k()!==20000630)throw A.f(A.m("File is not an OpenEXR image file."))
t=p.d=o.D()
if(t!==2)throw A.f(A.m("Cannot read version "+t+" image files."))
t=p.e=o.bf()
if((t&4294967289)>>>0!==0)throw A.f(A.m("The file format version number's flag field contains unrecognized flags."))
if((t&16)===0){s=p.c
r=A.kt(s.length,(t&2)!==0,o)
if(r.w>0)B.c.M(s,r)}else for(t=p.c;;){r=A.kt(t.length,(p.e&2)!==0,o)
if(r.w<=0)break
B.c.M(t,r)}t=p.c
s=t.length
if(s===0)throw A.f(A.m("Error reading image header"))
for(q=0;q<t.length;t.length===s||(0,A.aa)(t),++q)t[q].ju(o)
p.iE(o)},
iE(a){var t,s,r,q,p=this
for(t=p.c,s=t.length,r=0;r<t.length;t.length===s||(0,A.aa)(t),++r){q=t[r]
p.a=Math.max(p.a,q.w)
p.b=Math.max(p.b,q.x)
if(q.db)p.iN(q,a)
else p.iM(q,a)}},
iN(b5,b6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4=this.e
b4===$&&A.b()
t=(b4&16)!==0
b4=b5.b
b4.toString
s=b5.CW
r=b5.ay
q=A.n(b6,b3,0)
p=b5.c
o=b5.a
n=0
m=0
for(;;){l=b5.k1
l.toString
if(!(n<l))break
k=0
for(;;){l=b5.id
l.toString
if(!(k<l))break
l=m!==0
j=0
i=0
for(;;){h=b5.go
if(!(n<h.length))return A.a(h,n)
if(!(j<h[n]))break
g=0
for(;;){h=b5.fy
if(!(k<h.length))return A.a(h,k)
if(!(g<h[k]))break
if(l)break
if(!(m>=0&&m<r.length))return A.a(r,m)
h=r[m]
if(!(i>=0&&i<h.length))return A.a(h,i)
q.d=h[i]
if(t)if(q.k()!==o)throw A.f(A.m("Invalid Image Data"))
f=q.k()
e=q.k()
q.k()
q.k()
d=q.aj(q.k())
q.d=q.d+(d.c-d.d)
h=b5.dy
h.toString
c=e*h
b=b5.dx
b.toString
h=s.bh(d,f*b,c,b,h)
b=h.length
b=Math.min(b,b)
a=new A.a6(h,0,b,0,!1)
a0=s.a
a1=s.b
a2=p.length
a3=0
a4=0
for(;;){if(!(a4<a1&&c<this.b))break
for(a5=0;a5<a2;++a5){if(a3>=b)break
if(!(a5<p.length))return A.a(p,a5)
a6=p[a5]
h=b5.dx
h.toString
a7=f*h
for(a8=0;a8<a0;++a8,++a7){h=a6.c
h===$&&A.b()
switch(h.a){case 1:h=a.l()
a9=$.L
a9=a9!=null?a9:A.N()
if(!(h<a9.length))return A.a(a9,h)
b0=a9[h]
break
case 2:b0=a.l()
break
case 0:b0=a.k()
break
default:b0=b3}h=a6.d
h===$&&A.b()
a3+=h
h=a6.w
h===$&&A.b()
if(h){h=b4.a
b1=h==null?b3:h.O(a7,c,b3)
if(b1==null)b1=new A.A()
h=a6.b
h===$&&A.b()
b1.i(0,h.a,b0)}else{h=a6.a
h===$&&A.b()
a9=b4.b
b2=a9!=null?a9.n(0,h):b3
if(b2!=null)b2.a3(a7,c,b0,0,0)}}}++a4;++c}++g;++i}++j}++k;++m}++n}},
iM(a7,a8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6=this.e
a6===$&&A.b()
t=(a6&16)!==0
a6=a7.b
a6.toString
s=a7.CW
r=a7.ay
if(0>=r.length)return A.a(r,0)
q=r[0]
p=a7.cx
o=A.n(a8,a5,0)
for(r=q.length,n=a7.c,m=s!=null,l=0,k=0;k<r;++k){o.d=q[k]
if(t)if(o.k()!==3.141592653589793)throw A.f(A.m("Invalid Image Data"))
j=o.k()
i=$.I()
i.$flags&2&&A.c(i)
i[0]=j
j=$.Z()
if(0>=j.length)return A.a(j,0)
i[0]=o.k()
h=o.aj(j[0])
o.d=o.d+(h.c-h.d)
if(m){j=s.c5(h,0,l)
i=j.length
g=new A.a6(j,0,Math.min(i,i),0,!1)}else g=h
f=g.c-g.d
e=n.length
d=0
for(;;){if(!(d<p&&l<this.b))break
j=a7.cy
if(!(l>=0&&l<j.length))return A.a(j,l)
c=j[l]
if(c>=f)break
for(b=0;b<e;++b){if(c>=f)break
if(!(b<n.length))return A.a(n,b)
a=n[b]
a0=a7.w
for(a1=0;a1<a0;++a1){j=a.c
j===$&&A.b()
switch(j.a){case 1:j=g.l()
i=$.L
i=i!=null?i:A.N()
if(!(j<i.length))return A.a(i,j)
a2=i[j]
break
case 2:a2=g.l()
break
case 0:a2=g.k()
break
default:a2=a5}j=a.d
j===$&&A.b()
c+=j
j=a.w
j===$&&A.b()
if(j){j=a6.a
a3=j==null?a5:j.O(a1,l,a5)
if(a3==null)a3=new A.A()
j=a.b
j===$&&A.b()
a3.i(0,j.a,a2)}else{j=a.a
j===$&&A.b()
i=a6.b
a4=i!=null?i.n(0,j):a5
if(a4!=null)a4.a3(a1,l,a2,0,0)}}}++d;++l}}},
$iG:1}
A.de.prototype={
fw(a5,a6,a7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=null,a4=A.O(u.N,u.I)
for(t=a2.e,s=u.t,r=u.L,q=a2.c,p=B.A;;){o=a7.cq()
if(o.length===0)break
a7.cq()
n=a7.aj(a7.k())
a7.d=a7.d+(n.c-n.d)
t.i(0,o,new A.eN())
switch(o){case"channels":for(;;){m=new A.eO()
m.fu(n)
l=m.a
l===$&&A.b()
if(l.length===0)break
k=m.w
k===$&&A.b()
if(k){++a2.d
l=m.c
l===$&&A.b()
if(l===B.ar)p=B.A
else p=l===B.as?B.G:B.H}else{k=m.c
k===$&&A.b()
if(k===B.ar){k=a2.w
j=a2.x
a4.i(0,l,new A.cC(new Uint16Array(k*j),k,j,1))}else if(k===B.as){k=a2.w
j=a2.x
a4.i(0,l,new A.cD(new Float32Array(k*j),k,j,1))}else if(k===B.aU){k=a2.w
j=a2.x
a4.i(0,l,new A.cH(new Uint32Array(k*j),k,j,1))}}B.c.M(q,m)}break
case"chromaticities":l=new Float32Array(8)
a2.at=l
k=n.k()
j=$.I()
j.$flags&2&&A.c(j)
j[0]=k
k=$.bC()
if(0>=k.length)return A.a(k,0)
l[0]=k[0]
l=a2.at
j[0]=n.k()
i=k[0]
l.$flags&2&&A.c(l)
l[1]=i
i=a2.at
j[0]=n.k()
l=k[0]
i.$flags&2&&A.c(i)
i[2]=l
l=a2.at
j[0]=n.k()
i=k[0]
l.$flags&2&&A.c(l)
l[3]=i
i=a2.at
j[0]=n.k()
l=k[0]
i.$flags&2&&A.c(i)
i[4]=l
l=a2.at
j[0]=n.k()
i=k[0]
l.$flags&2&&A.c(l)
l[5]=i
i=a2.at
j[0]=n.k()
l=k[0]
i.$flags&2&&A.c(i)
i[6]=l
l=a2.at
j[0]=n.k()
k=k[0]
l.$flags&2&&A.c(l)
l[7]=k
break
case"compression":l=J.d(n.a,n.d++)
if(!(l>=0&&l<8))return A.a(B.bv,l)
a2.ax=B.bv[l]
break
case"dataWindow":l=n.k()
k=$.I()
k.$flags&2&&A.c(k)
k[0]=l
l=$.Z()
if(0>=l.length)return A.a(l,0)
j=l[0]
k[0]=n.k()
i=l[0]
k[0]=n.k()
h=l[0]
k[0]=n.k()
l=r.a(A.k([j,i,h,l[0]],s))
a2.r=l
a2.w=l[2]-l[0]+1
a2.x=l[3]-l[1]+1
break
case"displayWindow":l=n.k()
k=$.I()
k.$flags&2&&A.c(k)
k[0]=l
l=$.Z()
if(0>=l.length)return A.a(l,0)
k[0]=n.k()
k[0]=n.k()
k[0]=n.k()
break
case"lineOrder":break
case"pixelAspectRatio":l=n.k()
k=$.I()
k.$flags&2&&A.c(k)
k[0]=l
l=$.bC()
if(0>=l.length)return A.a(l,0)
break
case"screenWindowCenter":l=n.k()
k=$.I()
k.$flags&2&&A.c(k)
k[0]=l
l=$.bC()
if(0>=l.length)return A.a(l,0)
k[0]=n.k()
break
case"screenWindowWidth":l=n.k()
k=$.I()
k.$flags&2&&A.c(k)
k[0]=l
l=$.bC()
if(0>=l.length)return A.a(l,0)
break
case"tiles":a2.dx=n.k()
a2.dy=n.k()
g=J.d(n.a,n.d++)
a2.fr=g&15
a2.fx=B.a.j(g,4)&15
break
case"type":f=n.cq()
if(f!=="deepscanline")if(f!=="deeptile")throw A.f(A.m("EXR Invalid type: "+f))
break
default:break}}t=a2.w
a2.b=A.J(a3,a3,p,0,B.i,a2.x,a3,0,a2.d,a3,B.f,t,!1)
for(t=new A.V(a4,a4.r,a4.e,a4.$ti.A("V<1>"));t.F();){s=t.d
r=a2.b
r.toString
l=a4.n(0,s)
l.toString
r.fk(s,l)}if(a2.db){t={}
s=a2.r
s===$&&A.b()
a2.id=a2.h_(s[0],s[2],s[1],s[3])
s=a2.r
a2.k1=a2.h0(s[0],s[2],s[1],s[3])
if(a2.fr!==2)a2.k1=1
s=a2.id
s.toString
r=a2.r
a2.fy=a2.dT(s,r[0],r[2],a2.dx,a2.fx)
r=a2.k1
r.toString
s=a2.r
a2.go=a2.dT(r,s[1],s[3],a2.dy,a2.fx)
s=a2.fZ()
a2.k2=s
r=a2.dx
r.toString
r=s*r
a2.k3=r
a2.CW=A.kc(a2.ax,a2,r,a2.dy)
t.a=t.b=0
r=a2.id
r.toString
s=a2.k1
s.toString
a2.ay=A.kB(r*s,new A.hj(t,a2),u.bv)}else{t=a2.x
s=a2.ch=new Uint32Array(t+1)
for(r=q.length,l=a2.r,k=a2.w,e=0;e<r;++e){d=q[e]
j=d.d
j===$&&A.b()
i=d.f
i===$&&A.b()
c=B.a.av(j*k,i)
for(j=d.r,b=0;b<t;++b){l===$&&A.b()
i=l[1]
j===$&&A.b()
if(B.a.a1(b+i,j)===0)s[b]=s[b]+c}}for(a=0,b=0;b<t;++b)a=Math.max(a,s[b])
t=A.kc(a2.ax,a2,a,a3)
a2.CW=t
t=a2.cx=t.co()
s=a2.ch
r=s.length
q=new Uint32Array(r)
a2.cy=q
for(--r,a0=0,a1=0;a1<=r;++a1){if(B.a.a1(a1,t)===0)a0=0
q[a1]=a0
a0+=s[a1]}t=B.a.av(a2.x+t,t)
a2.ay=A.k([new Uint32Array(t-1)],u.hh)}},
h_(a,b,c,d){var t,s,r,q,p=this
switch(p.fr){case 0:t=1
break
case 1:s=Math.max(b-a+1,d-c+1)
r=p.fx
A.v(s)
t=(r===0?p.cK(s):p.cF(s))+1
break
case 2:q=b-a+1
t=(p.fx===0?p.cK(q):p.cF(q))+1
break
default:throw A.f(A.m("Unknown LevelMode format."))}return t},
h0(a,b,c,d){var t,s,r,q,p=this
switch(p.fr){case 0:t=1
break
case 1:s=Math.max(b-a+1,d-c+1)
r=p.fx
A.v(s)
t=(r===0?p.cK(s):p.cF(s))+1
break
case 2:q=d-c+1
t=(p.fx===0?p.cK(q):p.cF(q))+1
break
default:throw A.f(A.m("Unknown LevelMode format."))}return t},
cK(a){var t
for(t=0;a>1;){++t
a=B.a.j(a,1)}return t},
cF(a){var t,s
for(t=0,s=0;a>1;){if((a&1)!==0)s=1;++t
a=B.a.j(a,1)}return t+s},
fZ(){var t,s,r,q,p
for(t=this.c,s=t.length,r=0,q=0;q<s;++q){p=t[q].d
p===$&&A.b()
r+=p}return r},
dT(a,b,c,d,e){var t,s,r,q,p,o,n=J.a9(a,u.p)
for(t=e===1,s=c-b+1,r=0;r<a;++r){q=B.a.J(1,r)
p=B.a.av(s,q)
if(t&&p*q<s)++p
o=Math.max(p,1)
d.toString
n[r]=B.a.av(o+d-1,d)}return n}}
A.hj.prototype={
$1(a){var t,s,r,q,p=this.b,o=p.fy,n=this.a,m=n.b
if(!(m<o.length))return A.a(o,m)
o=o[m]
t=p.go
s=n.a
if(!(s<t.length))return A.a(t,s)
t=t[s]
r=new Uint32Array(o*t)
q=m+1
n.b=q
if(q===p.id){n.b=0
n.a=s+1}return r},
$S:18}
A.f4.prototype={
ju(a){var t,s,r,q,p,o=this
if(o.db)for(t=0;t<o.ay.length;++t){s=0
for(;;){r=o.ay
if(!(t<r.length))return A.a(r,t)
r=r[t]
if(!(s<r.length))break
q=a.dB()
r.$flags&2&&A.c(r)
r[s]=q;++s}}else{r=o.ay
if(0>=r.length)return A.a(r,0)
p=r[0].length
for(t=0;t<p;++t){r=o.ay
if(0>=r.length)return A.a(r,0)
r=r[0]
q=a.dB()
r.$flags&2&&A.c(r)
if(!(t<r.length))return A.a(r,t)
r[t]=q}}}}
A.f5.prototype={
fK(a,b,c){var t,s,r,q=this,p=a.c.length,o=J.a9(p,u.eO)
for(t=0;t<p;++t)o[t]=new A.eq()
q.y=u.gR.a(o)
s=q.w
s.toString
r=B.a.W(s*q.x,2)
q.z=new Uint16Array(r)},
co(){return this.x},
bh(a5,a6,a7,a8,a9){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this
if(a8==null)a8=a4.c.w
if(a9==null)a9=a4.c.cx
t=a6+a8-1
s=a7+a9-1
r=a4.c
q=r.w
if(t>q)t=q-1
q=r.x
if(s>q)s=q-1
a4.a=t-a6+1
a4.b=s-a7+1
p=r.c
o=p.length
for(n=0,m=0;m<o;++m){l=p[m]
r=a4.y
r===$&&A.b()
if(!(m<r.length))return A.a(r,m)
k=r[m]
k.b=k.a=n
r=l.f
r===$&&A.b()
j=B.a.av(a6,r)
i=B.a.av(t,r)
r=j*r<a6?0:1
r=i-j+r
k.c=r
q=l.r
q===$&&A.b()
j=B.a.av(a7,q)
i=B.a.av(s,q)
h=j*q<a7?0:1
h=i-j+h
k.d=h
k.e=q
q=l.d
q===$&&A.b()
q=q/2|0
k.f=q
n+=r*h*q}g=a5.l()
f=a5.l()
if(f>=8192)throw A.f(A.m("Error in header for PIZ-compressed data (invalid bitmap size)."))
e=new Uint8Array(8192)
if(g<=f){d=a5.ab(f-g+1)
c=d.c-d.d
for(b=g,m=0;m<c;++m,b=a){a=b+1
r=J.d(d.a,d.d+m)
if(!(b<8192))return A.a(e,b)
e[b]=r}}a0=new Uint16Array(65536)
a1=a4.iQ(e,a0)
A.mi(a5,a5.k(),a4.z,n)
for(m=0;m<o;++m){r=a4.y
r===$&&A.b()
if(!(m<r.length))return A.a(r,m)
k=r[m]
b=0
for(;;){r=k.f
r===$&&A.b()
if(!(b<r))break
q=a4.z
q.toString
h=k.a
h===$&&A.b()
a2=k.c
a2===$&&A.b()
a3=k.d
a3===$&&A.b()
A.ml(q,h+b,a2,r,a3,a2*r,a1);++b}}r=a4.z
r.toString
a4.fS(a0,r,n)
r=a4.r
if(r==null){r=a4.w
r.toString
r=a4.r=A.aG(!1,r*a4.x+73728)}r.a=0
for(;a7<=s;++a7)for(m=0;m<o;++m){r=a4.y
r===$&&A.b()
if(!(m<r.length))return A.a(r,m)
k=r[m]
r=k.e
r===$&&A.b()
if(B.a.a1(a7,r)!==0)continue
r=k.c
r===$&&A.b()
q=k.f
q===$&&A.b()
a6=r*q
for(;a6>0;--a6){r=a4.r
r.toString
q=a4.z
q.toString
h=k.b
h===$&&A.b()
k.b=h+1
if(!(h>=0&&h<q.length))return A.a(q,h)
r.d0(q[h])}}r=a4.r
return J.M(B.e.gv(r.c),0,r.a)},
c5(a,b,c){return this.bh(a,b,c,null,null)},
fS(a,b,c){var t,s,r,q=u.L
q.a(a)
q.a(b)
for(q=b.length,t=b.$flags|0,s=0;s<c;++s){if(!(s<q))return A.a(b,s)
r=b[s]
if(!(r>=0&&r<65536))return A.a(a,r)
r=a[r]
t&2&&A.c(b)
b[s]=r}},
iQ(a,b){var t,s,r,q,p,o
for(t=b.$flags|0,s=0,r=0;r<65536;++r){if(r!==0){q=r>>>3
if(!(q<8192))return A.a(a,q)
q=(a[q]&1<<(r&7))>>>0!==0}else q=!0
if(q){p=s+1
t&2&&A.c(b)
if(!(s<65536))return A.a(b,s)
b[s]=r
s=p}}for(p=s;p<65536;p=o){o=p+1
t&2&&A.c(b)
if(!(p<65536))return A.a(b,p)
b[p]=0}return s-1}}
A.eq.prototype={}
A.f6.prototype={
co(){return this.x},
bh(a3,a4,a5,a6,a7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=B.F.bP(a3.a0()),a2=a0.y
if(a2==null){a2=a0.w
a2.toString
a2=a0.y=A.aG(!1,a0.x*a2)}a2.a=0
t=A.k([0,0,0,0],u.t)
s=new Uint32Array(1)
r=J.M(B.n.gv(s),0,null)
if(a6==null)a6=a0.c.w
if(a7==null)a7=a0.c.cx
q=a4+a6-1
p=a5+a7-1
a2=a0.c
o=a2.w
if(q>o)q=o-1
o=a2.x
if(p>o)p=o-1
a0.a=q-a4+1
a0.b=p-a5+1
a2=a2.c
n=a2.length
for(o=r.length,m=a1.length,l=a5,k=0;l<=p;++l)for(j=0;j<n;++j){if(!(j<a2.length))return A.a(a2,j)
i=a2[j]
h=i.r
h===$&&A.b()
if(B.a.a1(a5,h)!==0)continue
h=i.f
h===$&&A.b()
g=B.a.av(a4,h)
f=B.a.av(q,h)
h=g*h<a4?0:1
e=f-g+h
if(0>=1)return A.a(s,0)
s[0]=0
h=i.c
h===$&&A.b()
switch(h.a){case 0:B.c.i(t,0,k)
B.c.i(t,1,t[0]+e)
B.c.i(t,2,t[1]+e)
k=t[2]+e
for(d=0;d<e;++d){h=t[0]
B.c.i(t,0,h+1)
if(!(h>=0&&h<m))return A.a(a1,h)
h=a1[h]
c=t[1]
B.c.i(t,1,c+1)
if(!(c>=0&&c<m))return A.a(a1,c)
c=a1[c]
b=t[2]
B.c.i(t,2,b+1)
if(!(b>=0&&b<m))return A.a(a1,b)
b=a1[b]
s[0]=s[0]+((h<<24|c<<16|b<<8)>>>0)
for(a=0;a<4;++a){h=a0.y
h.toString
if(!(a<o))return A.a(r,a)
h.V(r[a])}}break
case 1:B.c.i(t,0,k)
B.c.i(t,1,t[0]+e)
k=t[1]+e
for(d=0;d<e;++d){h=t[0]
B.c.i(t,0,h+1)
if(!(h>=0&&h<m))return A.a(a1,h)
h=a1[h]
c=t[1]
B.c.i(t,1,c+1)
if(!(c>=0&&c<m))return A.a(a1,c)
c=a1[c]
s[0]=s[0]+((h<<8|c)>>>0)
for(a=0;a<2;++a){h=a0.y
h.toString
if(!(a<o))return A.a(r,a)
h.V(r[a])}}break
case 2:B.c.i(t,0,k)
B.c.i(t,1,t[0]+e)
B.c.i(t,2,t[1]+e)
k=t[2]+e
for(d=0;d<e;++d){h=t[0]
B.c.i(t,0,h+1)
if(!(h>=0&&h<m))return A.a(a1,h)
h=a1[h]
c=t[1]
B.c.i(t,1,c+1)
if(!(c>=0&&c<m))return A.a(a1,c)
c=a1[c]
b=t[2]
B.c.i(t,2,b+1)
if(!(b>=0&&b<m))return A.a(a1,b)
b=a1[b]
s[0]=s[0]+((h<<24|c<<16|b<<8)>>>0)
for(a=0;a<4;++a){h=a0.y
h.toString
if(!(a<o))return A.a(r,a)
h.V(r[a])}}break}}a2=a0.y
return J.M(B.e.gv(a2.c),0,a2.a)},
c5(a,b,c){return this.bh(a,b,c,null,null)}}
A.f7.prototype={
co(){return 1},
bh(a,a0,a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=a.c,b=A.aG(!1,(c-a.d)*2)
if(a2==null)a2=d.c.w
if(a3==null)a3=d.c.cx
t=a0+a2-1
s=a1+a3-1
r=d.c
q=r.w
if(t>q)t=q-1
r=r.x
if(s>r)s=r-1
d.a=t-a0+1
d.b=s-a1+1
while(r=a.d,r<c){q=a.a
a.d=r+1
r=J.d(q,r)
q=$.ad()
q.$flags&2&&A.c(q)
q[0]=r
r=$.ak()
if(0>=r.length)return A.a(r,0)
p=r[0]
if(p<0){o=-p
for(;n=o-1,o>0;o=n)b.V(J.d(a.a,a.d++))}else for(o=p;n=o-1,o>=0;o=n)b.V(J.d(a.a,a.d++))}m=J.M(B.e.gv(b.c),0,b.a)
l=m.length
for(c=m.$flags|0,k=1;k<l;++k){r=m[k-1]
q=m[k]
c&2&&A.c(m)
m[k]=r+q-128}c=d.r
if(c==null||c.length!==l)c=d.r=new Uint8Array(l)
r=B.a.W(l+1,2)
for(j=0,i=0;;r=e,j=g){if(i<l){h=i+1
g=j+1
if(!(j<l))return A.a(m,j)
q=m[j]
c.$flags&2&&A.c(c)
f=c.length
if(!(i<f))return A.a(c,i)
c[i]=q}else break
if(h<l){i=h+1
e=r+1
if(!(r<l))return A.a(m,r)
r=m[r]
if(!(h<f))return A.a(c,h)
c[h]=r}else break}return c},
c5(a,b,c){return this.bh(a,b,c,null,null)},
C(a){return A.z(this.w)}}
A.dv.prototype={
co(){return this.x},
bh(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=B.F.bP(a.a0())
if(d==null)d=g.c.w
if(e==null)e=g.c.cx
t=b+d-1
s=c+e-1
r=g.c
q=r.w
if(t>q)t=q-1
r=r.x
if(s>r)s=r-1
g.a=t-b+1
g.b=s-c+1
p=f.length
for(r=f.$flags|0,o=1;o<p;++o){q=f[o-1]
n=f[o]
r&2&&A.c(f)
f[o]=q+n-128}r=g.y
if(r==null||r.length!==p)r=g.y=new Uint8Array(p)
q=B.a.W(p+1,2)
for(m=0,l=0;;q=h,m=j){if(l<p){k=l+1
j=m+1
if(!(m<p))return A.a(f,m)
n=f[m]
r.$flags&2&&A.c(r)
i=r.length
if(!(l<i))return A.a(r,l)
r[l]=n}else break
if(k<p){l=k+1
h=q+1
if(!(q<p))return A.a(f,q)
q=f[q]
if(!(k<i))return A.a(r,k)
r[k]=q}else break}return r},
c5(a,b,c){return this.bh(a,b,c,null,null)},
C(a){return A.z(this.w)}}
A.hi.prototype={
ag(a){var t=this.a
if(t==null)return null
t=t.c
if(!(a<t.length))return A.a(t,a)
return t[a].b},
aA(a,b){var t=new A.eQ(A.k([],u.dw))
t.fv(a)
this.a=t
return this.ag(0)}}
A.dh.prototype={
jg(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
if(d===0&&f.c!=null){t=f.c
t.toString
return t}for(t=f.b,s=f.d,r=-1,q=-1,p=0;p<t;++p){o=s.aM(p)
n=s.aL(p)
m=s.aJ(p)
l=s.aR(p)
if(o===a&&n===b&&m===c&&l===d)return p
k=a-o
j=b-n
i=c-m
h=d-l
g=k*k+j*j+i*i+h*h
if(q===-1){q=p
r=g}else if(g<r){q=p
r=g}}return q},
dD(){var t,s,r,q,p,o,n,m=this
if(m.c==null)return m.d
t=m.d
s=t.a
r=new A.az(new Uint8Array(s*4),s,4)
for(q=0;q<s;++q){p=t.aM(q)
o=t.aL(q)
n=t.aJ(q)
r.cB(q,p,o,n,q===m.c?0:255)}return r}}
A.di.prototype={
fz(a){var t,s,r,q,p,o,n=this
n.a=a.l()
n.b=a.l()
n.c=a.l()
n.d=a.l()
t=a.D()
n.e=(t&64)!==0
if((t&128)!==0){n.f=A.kg(B.a.J(1,(t&7)+1))
for(s=0;r=n.f,s<r.b;++s){q=J.d(a.a,a.d++)
p=J.d(a.a,a.d++)
o=J.d(a.a,a.d++)
r.d.aY(s,q,p,o)}}n.y=a.d-a.b}}
A.f8.prototype={}
A.dj.prototype={$iG:1}
A.hn.prototype={
aS(a){var t,s,r,q,p,o,n,m,l,k,j=this
j.f=A.q(a,!1,null,0)
j.a=new A.dj(A.k([],u.b))
if(!j.ea())return null
try{while(q=j.f,p=q.d,p<q.c){o=q.a
q.d=p+1
t=J.d(o,p)
switch(t){case 44:s=j.eA()
if(s==null){q=j.a
return q}q=s
q.r=j.e
q.w=j.c
if(j.b!==0){if(s.f==null&&j.a.e!=null){q=j.a.e
p=q.a
o=q.b
n=q.c
q=q.d
s.f=new A.dh(p,o,n,new A.az(new Uint8Array(A.w(q.c)),q.a,q.b))}if(s.f!=null)s.f.c=j.d}B.c.M(j.a.r,s)
break
case 33:q=j.f
r=J.d(q.a,q.d++)
if(J.bD(r,255)){q=j.f
if(q.af(J.d(q.a,q.d++))==="NETSCAPE2.0"){m=J.d(q.a,q.d++)
l=J.d(q.a,q.d++)
if(m===3&&l===1)j.r=q.l()}else j.cR()}else if(J.bD(r,249)){q=j.f
q.toString
j.iz(q)}else j.cR()
break
case 59:q=j.a
return q
default:break}}}catch(k){}return j.a},
iz(a){var t,s,r,q=this
a.D()
t=a.D()
q.e=a.l()
q.d=a.D()
a.D()
q.c=B.a.j(t,2)&7
q.b=t&1
s=a.cC(1,0)
if(J.d(s.a,s.d)===44){++a.d
r=q.eA()
if(r==null)return
r.r=q.e
r.w=q.c
s=q.b!==0
r.x=s?q.d:-1
if(s){s=r.f
if(s==null&&q.a.e!=null){s=q.a.e
s.toString
s=r.f=A.mq(s)}if(s!=null)s.c=q.d}B.c.M(q.a.r,r)}},
ag(a){var t,s,r,q=this,p=q.f
if(p==null||q.a==null)return null
t=q.a.r
s=t.length
if(a>=s)return null
r=t[a]
t=r.y
t===$&&A.b()
p.d=t
return q.hj(r)},
aA(a6,a7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null
if(a4.aS(a6)==null)return a5
t=a4.a.r.length
if(t===1)return a4.ag(0)
for(t=u.p,s=a5,r=s,q=0;p=a4.a.r,q<p.length;++q){a7=p[q]
o=a4.ag(q)
if(o==null)return a5
o.y=a7.r*10
if(r==null||s==null){o.r=a4.r
s=o
r=s
continue}p=o.a
n=p==null
m=n?a5:p.a
if(m==null)m=0
l=s.a
k=l==null
j=k?a5:l.a
i=!1
if(m===(j==null?0:j)){p=n?a5:p.b
if(p==null)p=0
n=k?a5:l.b
if(p===(n==null?0:n)){p=a7.a
p===$&&A.b()
if(p===0){p=a7.b
p===$&&A.b()
p=p===0&&a7.w===2}else p=i}else p=i}else p=i
if(p){r.aG(o)
s=o
continue}h=a7.f
if(!(h!=null)){p=a4.a.e
p.toString
h=p}p=k?a5:l.a
if(p==null)p=0
n=k?a5:l.b
if(n==null)n=0
g=A.J(a5,a5,B.f,0,B.i,n,a5,0,1,h.dD(),B.f,p,!1)
p=a7.w
if(p===2){p=g.a
f=p==null?a5:J.am(p.gv(p))
if(f==null){p=g.a
p=p==null?a5:p.gv(p)
if(p==null)p=B.e.gv(new Uint8Array(0))
f=J.am(p)}p=a7.x
n=f.length-1
if(p!==-1)B.e.aq(f,0,n,p)
else{p=a4.a.c.a
m=p.length
if(m!==0){if(0>=m)return A.a(p,0)
p=p[0]}else p=0
B.e.aq(f,0,n,p)}}else if(p!==3)if(a7.f!=null){p=s.a
e=p==null?a5:p.gR()
d=A.O(t,t)
for(p=e.a,c=0;c<p;++c)d.i(0,c,h.jg(e.aM(c),e.aL(c),e.aJ(c),e.aR(c)))
p=g.a
b=p==null?a5:J.am(p.gv(p))
if(b==null){p=g.a
p=p==null?a5:p.gv(p)
if(p==null)p=B.e.gv(new Uint8Array(0))
b=J.am(p)}p=s.a
a=p==null?a5:J.am(p.gv(p))
if(a==null){p=s.a
p=p==null?a5:p.gv(p)
if(p==null)p=B.e.gv(new Uint8Array(0))
a=J.am(p)}for(a0=b.length,p=a.length,n=b.$flags|0,a1=0;a1<a0;++a1){if(!(a1<p))return A.a(a,a1)
a2=d.n(0,a[a1])
if(a2!=null&&a2!==-1){n&2&&A.c(b)
b[a1]=a2}}}g.y=o.y
for(p=o.a,p=p.gG(p);p.F();){a3=p.gP()
if(a3.gt()!==0){n=a3.gaQ()
m=a7.a
m===$&&A.b()
l=a3.gaI()
k=a7.b
k===$&&A.b()
g.bJ(n+m,l+k,a3)}}r.aG(g)
s=g}return r},
eA(){var t,s=this.f
if(s.d>=s.c)return null
t=new A.f8()
t.fz(s);++this.f.d
this.cR()
return t},
hj(a){var t,s,r,q,p,o,n,m,l,k,j=this,i=null
if(j.w==null){j.w=new Uint8Array(256)
j.x=new Uint8Array(4095)
j.y=new Uint8Array(4096)
j.z=new Uint32Array(4096)}t=j.Q=j.f.D()
s=B.a.U(1,t)
j.dy=s;++s
j.dx=s
j.db=s+1;++t
j.cy=t
j.cx=B.a.U(1,t)
j.ay=0
j.CW=4098
j.at=j.ax=0
t=j.w
t.toString
t.$flags&2&&A.c(t)
t[0]=0
t=j.z
t.toString
B.n.aq(t,0,4096,4098)
t=a.c
t===$&&A.b()
s=a.d
s===$&&A.b()
r=a.a
r===$&&A.b()
q=j.a
if(r+t<=q.a){r=a.b
r===$&&A.b()
r=r+s>q.b}else r=!0
if(r)return i
p=a.f
if(!(p!=null)){r=q.e
r.toString
p=r}j.as=t*s
o=A.J(i,i,B.f,0,B.i,s,i,0,1,p.dD(),B.f,t,!1)
n=new Uint8Array(t)
t=a.e
t===$&&A.b()
if(t){t=a.b
t===$&&A.b()
for(s=t+s,m=0,l=0;m<4;++m)for(k=t+B.cQ[m];k<s;k+=B.e7[m],++l){if(!j.eb(n))return o
j.eG(o,k,p,n)}}else for(k=0;k<s;++k){if(!j.eb(n))return o
j.eG(o,k,p,n)}return o},
eG(a,b,c,d){var t,s,r,q=d.length
for(t=0;t<q;++t){s=d[t]
r=a.a
if(r!=null)r.a3(t,b,s,0,0)}},
ea(){var t,s,r,q,p,o=this,n=o.f.af(6)
if(n!=="GIF87a"&&n!=="GIF89a")return!1
t=o.a
t.toString
t.a=o.f.l()
t=o.a
t.toString
t.b=o.f.l()
s=o.f.D()
t=o.a
t.toString
t.c=new A.bh(new Uint8Array(A.w(A.k([o.f.D()],u.t))));++o.f.d
if((s&128)!==0){t=o.a
t.toString
t.e=A.kg(B.a.J(1,(s&7)+1))
for(r=0;r<o.a.e.b;++r){t=o.f
q=J.d(t.a,t.d++)
t=o.f
p=J.d(t.a,t.d++)
t=o.f
s=J.d(t.a,t.d++)
o.a.e.d.aY(r,q,p,s)}}o.a.toString
return!0},
eb(a){var t=this,s=t.as
s.toString
t.as=s-a.length
if(!t.hu(a))return!1
if(t.as===0)t.cR()
return!0},
cR(){var t,s,r,q=this.f
if(q.d>=q.c)return!0
t=q.D()
for(;;){if(t!==0){q=this.f
q=q.d<q.c}else q=!1
if(!q)break
q=this.f
s=q.d+=t
if(s>=q.c)return!0
r=q.a
q.d=s+1
t=J.d(r,s)}return!0},
hu(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.ay
if(g>4095)return!1
t=a.length
s=0
if(g!==0){r=a.$flags|0
for(;;){if(!(g!==0&&s<t))break
q=s+1
p=h.x
p===$&&A.b()
g=h.ay=g-1
if(!(g>=0))return A.a(p,g)
p=p[g]
r&2&&A.c(a)
if(!(s<t))return A.a(a,s)
a[s]=p
s=q}}for(g=a.$flags|0;s<t;){o=h.ch=h.ht()
if(o==null)return!1
r=h.dx
if(o===r)return!1
p=h.dy
if(o===p){for(p=h.z,n=0;n<=4095;++n){p.toString
p.$flags&2&&A.c(p)
p[n]=4098}h.db=r+1
r=h.Q+1
h.cy=r
h.cx=B.a.U(1,r)
h.CW=4098}else{if(o<p){q=s+1
g&2&&A.c(a)
if(!(s>=0))return A.a(a,s)
a[s]=o
s=q}else{r=h.z
r.toString
if(o>>>0!==o||o>=4096)return A.a(r,o)
if(r[o]===4098){m=h.db-2
if(o===m){o=h.CW
l=h.y
l===$&&A.b()
k=h.x
k===$&&A.b()
j=h.ay++
p=h.di(r,o,p)
k.$flags&2&&A.c(k)
if(!(j>=0&&j<4095))return A.a(k,j)
k[j]=p
l.$flags&2&&A.c(l)
if(!(m>=0&&m<4096))return A.a(l,m)
l[m]=p}else return!1}n=0
for(;;){i=n+1
if(!(n<=4095&&o>h.dy&&o<=4095))break
r=h.x
r===$&&A.b()
p=h.ay++
m=h.y
m===$&&A.b()
if(!(o>=0&&o<4096))return A.a(m,o)
m=m[o]
r.$flags&2&&A.c(r)
if(!(p>=0&&p<4095))return A.a(r,p)
r[p]=m
o=h.z[o]
n=i}if(i>=4095||o>4095)return!1
r=h.x
r===$&&A.b()
p=h.ay
m=h.ay=p+1
r.$flags&2&&A.c(r)
if(!(p>=0&&p<4095))return A.a(r,p)
r[p]=o
p=m
for(;;){if(!(p!==0&&s<t))break
q=s+1
p=h.ay=p-1
if(!(p>=0&&p<4095))return A.a(r,p)
m=r[p]
g&2&&A.c(a)
if(!(s>=0&&s<t))return A.a(a,s)
a[s]=m
s=q}}r=h.CW
if(r!==4098){p=h.z
p.toString
m=h.db-2
if(!(m>=0&&m<4096))return A.a(p,m)
m=p[m]===4098
p=m}else p=!1
if(p){p=h.z
p.toString
m=h.db-2
p.$flags&2&&A.c(p)
if(!(m>=0&&m<4096))return A.a(p,m)
p[m]=r
l=h.ch
k=h.y
j=h.dy
if(l===m){k===$&&A.b()
r=h.di(p,r,j)
k.$flags&2&&A.c(k)
k[m]=r}else{k===$&&A.b()
l.toString
r=h.di(p,l,j)
k.$flags&2&&A.c(k)
k[m]=r}}r=h.ch
r.toString
h.CW=r}}return!0},
ht(){var t,s,r,q,p=this
if(p.cy>12)return null
while(t=p.ax,s=p.cy,t<s){t=p.fV()
t.toString
s=p.at
r=p.ax
p.at=(s|B.a.U(t,r))>>>0
p.ax=r+8}r=p.at
if(!(s>=0&&s<13))return A.a(B.bf,s)
q=B.bf[s]
p.at=B.a.a2(r,s)
p.ax=t-s
t=p.db
if(t<4097){++t
p.db=t
t=t>p.cx&&s<12}else t=!1
if(t){p.cx=p.cx<<1>>>0
p.cy=s+1}return r&q},
di(a,b,c){var t,s,r=0
for(;;){if(b>c){t=r+1
s=r<=4095
r=t}else s=!1
if(!s)break
if(b>4095)return 4098
a.toString
if(!(b>=0))return A.a(a,b)
b=a[b]}return b},
fV(){var t,s,r=this,q=r.w,p=q[0],o=q.$flags|0
if(p===0){p=r.f.D()
o&2&&A.c(q)
q[0]=p
q=r.w
p=q[0]
if(p===0)return null
B.e.br(q,1,1+p,r.f.ab(p).a0())
q=r.w
t=q[1]
q.$flags&2&&A.c(q)
q[1]=2
q[0]=q[0]-1}else{s=q[1]
o&2&&A.c(q)
q[1]=s+1
if(!(s<256))return A.a(q,s)
t=q[s]
q[0]=p-1}return t}}
A.cx.prototype={
ad(){return"IcoType."+this.b}}
A.eY.prototype={$iG:1}
A.eZ.prototype={}
A.eX.prototype={
gK(){return B.a.W(A.aZ.prototype.gK.call(this),2)},
gcm(){return!(this.d===40&&this.f===32)&&A.aZ.prototype.gcm.call(this)}}
A.hp.prototype={
aA(a,b){var t,s,r,q=this,p=A.q(a,!1,null,0)
q.a=p
t=q.b=A.ki(p)
if(t==null)return null
p=t.e.length
if(p===1)return q.ag(0)
for(s=null,r=0;r<q.b.e.length;++r){b=q.ag(r)
if(b==null)continue
if(s==null){b.w=B.i
s=b}else s.aG(b)}return s},
ag(a9){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=this.a
if(a8!=null){t=this.b
t=t==null||a9>=t.d}else t=!0
if(t)return a7
t=this.b.e
if(!(a9<t.length))return A.a(t,a9)
s=t[a9]
t=a8.a
a8=a8.b+s.e
r=s.d
q=J.j4(t,a8,a8+r)
p=new A.bs(A.dw())
u.D.a(q)
if(p.bm(q))return p.bG(q)
o=A.aG(!1,14)
o.d0(19778)
o.aH(r)
o.aH(0)
o.aH(0)
a8=A.q(q,!1,a7,0)
t=A.k4(A.q(J.M(B.e.gv(o.c),0,o.a),!1,a7,0))
r=a8.d
n=a8.k()
m=a8.k()
l=$.I()
l.$flags&2&&A.c(l)
l[0]=m
m=$.Z()
if(0>=m.length)return A.a(m,0)
k=m[0]
l[0]=a8.k()
m=m[0]
j=a8.l()
i=a8.l()
h=a8.k()
if(h>=14)A.ab(A.m("Unsupported BMP compression type: "+h))
if(!(h<14))return A.a(B.ag,h)
h=B.ag[h]
a8.k()
l[0]=a8.k()
l[0]=a8.k()
l=a8.k()
a8.k()
g=new A.eX(t,k,m,n,j,i,h,l,r)
g.dK(a8,t)
if(n!==40&&j!==1)return a7
f=l===0&&i<=8?40+4*B.a.J(1,i):40+4*l
t.b=f
o.a-=4
o.aH(f)
e=A.q(q,!1,a7,0)
d=new A.hf(!0)
d.a=e
d.b=g
c=d.ag(0)
if(i>=32)return c
b=32-B.a.a1(k,32)
a=B.a.W(b===32?k:k+b,8)
for(a8=m<0,t=m===0,m=1/m<0,a0=0;a0<B.a.W(A.aZ.prototype.gK.call(g),2);++a0){if(!(t?m:a8))a1=a0
else{r=c.a
r=r==null?a7:r.b
a1=(r==null?0:r)-1-a0}a2=e.aj(a)
e.d=e.d+(a2.c-a2.d)
r=c.a
a3=r==null?a7:r.O(0,a1,a7)
if(a3==null)a3=new A.A()
for(a4=0;a4<k;){a5=J.d(a2.a,a2.d++)
a6=7
for(;;){if(!(a6>-1&&a4<k))break
if((a5&B.a.U(1,a6))>>>0!==0)a3.st(0)
a3.F();++a4;--a6}}}return c}}
A.eI.prototype={}
A.bk.prototype={}
A.bJ.prototype={}
A.dn.prototype={}
A.iJ.prototype={
$5(a,b,c,d,e){return this.a.a3(this.b-a,b,c,d,e)},
$S:3}
A.iK.prototype={
$5(a,b,c,d,e){return this.a.a3(this.b-a,this.c-b,c,d,e)},
$S:3}
A.iL.prototype={
$5(a,b,c,d,e){return this.a.a3(a,this.b-b,c,d,e)},
$S:3}
A.iM.prototype={
$5(a,b,c,d,e){return this.a.a3(b,a,c,d,e)},
$S:3}
A.iN.prototype={
$5(a,b,c,d,e){return this.a.a3(this.b-b,a,c,d,e)},
$S:3}
A.iO.prototype={
$5(a,b,c,d,e){return this.a.a3(this.b-b,this.c-a,c,d,e)},
$S:3}
A.iP.prototype={
$5(a,b,c,d,e){return this.a.a3(b,this.b-a,c,d,e)},
$S:3}
A.hB.prototype={}
A.bn.prototype={}
A.hC.prototype={
jI(a){var t,s,r,q,p,o=this,n=A.q(u.L.a(a),!0,null,0)
o.a=n
t=n.cC(2,0)
if(J.d(t.a,t.d)!==255||J.d(t.a,t.d+1)!==216)return!1
if(o.c_()!==216)return!1
s=o.c_()
r=!1
q=!1
for(;;){if(s!==217){n=o.a
n=n.d<n.c}else n=!1
if(!n)break
p=o.a.l()
if(p<2)break
n=o.a
n.d=n.d+(p-2)
switch(s){case 192:case 193:case 194:r=!0
break
case 218:q=!0
break}s=o.c_()}return r&&q},
bS(a){var t,s,r,q,p,o,n,m,l,k,j,i=this
i.a=A.q(u.L.a(a),!0,null,0)
i.is()
if(i.y.length!==1)throw A.f(A.m("Only single frame JPEGs supported"))
t=i.d
for(s=t.z,r=t.y,q=i.as,p=0;p<s.length;++p){o=r.n(0,s[p])
n=o.a
m=t.f
l=o.b
k=t.r
j=i.fX(t,o)
if(n===m)n=0
else n=n===1&&m===4?2:1
if(l===k)m=0
else m=l===1&&k===4?2:1
B.c.M(q,new A.eI(j,n,m))}},
is(){var t,s,r,q,p,o,n=this
if(n.c_()!==216)throw A.f(A.m("Start Of Image marker not found."))
t=n.c_()
for(;;){if(t!==217){s=n.a
s===$&&A.b()
s=s.d<s.c}else s=!1
if(!s)break
s=n.a
s===$&&A.b()
r=s.l()
if(r<2)A.ab(A.m("Invalid Block"))
s=n.a
q=s.aj(r-2)
p=s.d=s.d+(q.c-q.d)
switch(t){case 224:case 225:case 226:case 227:case 228:case 229:case 230:case 231:case 232:case 233:case 234:case 235:case 236:case 237:case 238:case 239:case 254:n.it(t,q)
break
case 219:n.iw(q)
break
case 192:case 193:case 194:n.iy(t,q)
break
case 195:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 205:case 206:case 207:throw A.f(A.m("Unhandled frame type "+B.a.d_(t,16)))
case 196:n.iv(q)
break
case 221:n.e=q.l()
break
case 218:n.iL(q)
break
case 255:if(J.d(s.a,p)!==255)--n.a.d
break
default:o=!1
if(J.d(s.a,p+-3)===255){s=n.a
if(J.d(s.a,s.d+-2)>=192){s=n.a
s=J.d(s.a,s.d+-2)<=254}else s=o}else s=o
if(s){n.a.d-=3
break}if(t!==0)throw A.f(A.m("Unknown JPEG marker "+B.a.d_(t,16)))
break}t=n.c_()}},
c_(){var t,s=this,r=s.a
r===$&&A.b()
if(r.d>=r.c)return 0
do{do{t=s.a.D()
if(t!==255){r=s.a
r=r.d<r.c}else r=!1}while(r)
r=s.a
if(r.d>=r.c)return t
do{t=s.a.D()
if(t===255){r=s.a
r=r.d<r.c}else r=!1}while(r)
if(t===0){r=s.a
r=r.d<r.c}else r=!1}while(r)
return t},
iD(a){var t
for(t=0;t<12;++t)if(J.d(a.a,a.d++)!==B.iS[t])return
this.r=new A.cw("ICC_PROFILE",B.cI,a.a0())},
ix(a){if(a.k()!==1165519206)return
if(a.l()!==0)return
this.w.bS(a)},
it(a,b){var t,s,r,q,p,o=this,n=b
if(a===224){t=n
s=!1
if(J.d(t.a,t.d)===74){t=n
if(J.d(t.a,t.d+1)===70){t=n
if(J.d(t.a,t.d+2)===73){t=n
if(J.d(t.a,t.d+3)===70){t=n
t=J.d(t.a,t.d+4)===0}else t=s}else t=s}else t=s}else t=s
if(t){t=new A.hD()
s=n
J.d(s.a,s.d+5)
s=n
J.d(s.a,s.d+6)
s=n
J.d(s.a,s.d+7)
s=n
J.d(s.a,s.d+8)
s=n
J.d(s.a,s.d+9)
s=n
J.d(s.a,s.d+10)
s=n
J.d(s.a,s.d+11)
s=n
s=J.d(s.a,s.d+12)
t.f=s
r=n
r=J.d(r.a,r.d+13)
t.r=r
o.b=t
n.cC(14+3*s*r,14)}}else if(a===225)o.ix(n)
else if(a===226)o.iD(n)
else if(a===238){t=n
s=!1
if(J.d(t.a,t.d)===65){t=n
if(J.d(t.a,t.d+1)===100){t=n
if(J.d(t.a,t.d+2)===111){t=n
if(J.d(t.a,t.d+3)===98){t=n
if(J.d(t.a,t.d+4)===101){t=n
t=J.d(t.a,t.d+5)===0}else t=s}else t=s}else t=s}else t=s}else t=s
if(t){q=new A.hB()
t=n
J.d(t.a,t.d+6)
t=n
J.d(t.a,t.d+7)
t=n
J.d(t.a,t.d+8)
t=n
J.d(t.a,t.d+9)
t=n
J.d(t.a,t.d+10)
t=n
q.d=J.d(t.a,t.d+11)
o.c=q}}else if(a===254)try{n.jy()}catch(p){}},
iw(a){var t,s,r,q,p,o,n,m,l
for(t=a.c,s=this.x;r=a.d,q=r<t,q;){q=a.a
a.d=r+1
p=J.d(q,r)
o=B.a.j(p,4)
p&=15
if(p>=4)throw A.f(A.m("Invalid number of quantization tables"))
if(s[p]==null)B.c.i(s,p,new Int16Array(64))
n=s[p]
for(r=o!==0,m=0;m<64;++m){l=r?a.l():J.d(a.a,a.d++)
n.toString
q=$.h6()
if(!(m<q.length))return A.a(q,m)
q=q[m]
n.$flags&2&&A.c(n)
if(!(q<64))return A.a(n,q)
n[q]=l}}if(q)throw A.f(A.m("Bad length for DQT block"))},
iy(a,b){var t,s,r,q,p,o,n,m,l,k,j=this
if(j.d!=null)throw A.f(A.m("Duplicate JPG frame data found."))
t=A.O(u.p,u.c)
s=A.k([],u.t)
r=new A.fj(t,s)
r.b=a===194
r.c=b.D()
r.d=b.l()
r.e=b.l()
q=b.D()
for(p=j.x,o=0;o<q;++o){n=J.d(b.a,b.d++)
m=J.d(b.a,b.d++)
l=B.a.j(m,4)
k=J.d(b.a,b.d++)
B.c.M(s,n)
t.i(0,n,new A.bn(l&15,m&15,p,k))}r.js()
j.d=r
B.c.M(j.y,r)},
iv(a){var t,s,r,q,p,o,n,m,l,k,j,i
for(t=a.c,s=this.Q,r=this.z;q=a.d,q<t;){p=a.a
a.d=q+1
o=J.d(p,q)
n=new Uint8Array(16)
for(m=0,l=0;l<16;++l){q=J.d(a.a,a.d++)
if(!(l<16))return A.a(n,l)
n[l]=q
m+=n[l]}k=a.aj(m)
a.d=a.d+(k.c-k.d)
j=k.a0()
if((o&16)!==0){o-=16
i=r}else i=s
if(i.length<=o)B.c.su(i,o+1)
B.c.i(i,o,this.i3(n,j))}},
iL(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=a.D()
if(c<1||c>4)throw A.f(A.m("Invalid SOS block"))
t=d.d
t.toString
s=A.k([],u.b7)
for(r=d.z,q=d.Q,p=t.y,o=u.C,n=0;n<c;++n){m=J.d(a.a,a.d++)
l=J.d(a.a,a.d++)
if(!p.aO(m))throw A.f(A.m("Invalid Component in SOS block"))
k=p.n(0,m)
k.toString
j=B.a.j(l,4)&15
i=l&15
h=q.length
if(j<h){if(!(j<h))return A.a(q,j)
h=q[j]
h.toString
k.w=o.a(h)}h=r.length
if(i<h){if(!(i<h))return A.a(r,i)
h=r[i]
h.toString
k.x=o.a(h)}B.c.M(s,k)}g=a.D()
f=a.D()
e=a.D()
r=B.a.j(e,4)
q=d.a
q===$&&A.b()
r=new A.fk(q,t,s,d.e,g,f,r&15,e&15)
q=t.w
q===$&&A.b()
r.f=q
r.r=t.b
r.bB()},
i3(a,b){var t,s,r,q,p,o,n,m,l=A.k([],u.e8),k=16
for(;;){if(!(k>0&&a[k-1]===0))break;--k}t=u.fe
B.c.M(l,new A.d4(A.Y(2,null,!1,t)))
if(0>=l.length)return A.a(l,0)
s=l[0]
for(r=b.length,q=0,p=0;p<k;){for(o=0;o<a[p];++o){if(0>=l.length)return A.a(l,-1)
s=l.pop()
n=s.b
if(!(q>=0&&q<r))return A.a(b,q)
B.c.i(s.a,n,new A.dn(b[q]))
while(n=s.b,n>0){if(0>=l.length)return A.a(l,-1)
s=l.pop()}s.b=n+1
B.c.M(l,s)
for(;l.length<=p;s=m){n=A.Y(2,null,!1,t)
m=new A.d4(n)
B.c.M(l,m)
B.c.i(s.a,s.b,new A.bJ(n))}++q}++p
if(p<k){n=A.Y(2,null,!1,t)
m=new A.d4(n)
B.c.M(l,m)
B.c.i(s.a,s.b,new A.bJ(n))
s=m}}if(0>=l.length)return A.a(l,0)
return l[0].a},
fX(a,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a0.e
b===$&&A.b()
t=a0.f
t===$&&A.b()
s=b<<3>>>0
r=new Int32Array(64)
q=new Uint8Array(64)
p=t*8
o=A.Y(p,null,!1,u.aD)
for(n=a0.c,m=a0.d,l=0,k=0;k<t;++k){j=k<<3>>>0
for(i=0;i<8;++i,l=h){h=l+1
B.c.i(o,l,new Uint8Array(s))}for(g=0;g<b;++g){if(!(m>=0&&m<4))return A.a(n,m)
f=n[m]
f.toString
e=a0.r
e===$&&A.b()
if(!(k<e.length))return A.a(e,k)
e=e[k]
if(!(g<e.length))return A.a(e,g)
A.p7(f,e[g],q,r)
d=g<<3>>>0
for(f=d+8,c=0;c<8;++c){e=j+c
if(!(e<p))return A.a(o,e)
e=o[e]
if(e!=null)B.e.ai(e,d,f,q,c<<3>>>0)}}}return o}}
A.d4.prototype={}
A.fj.prototype={
js(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
for(t=b.y,s=A.o(t).A("V<1>"),r=new A.V(t,t.r,t.e,s);r.F();){q=t.n(0,r.d)
b.f=Math.max(b.f,q.a)
b.r=Math.max(b.r,q.b)}r=b.e
r.toString
b.w=B.b.aU(r/8/b.f)
r=b.d
r.toString
b.x=B.b.aU(r/8/b.r)
for(s=new A.V(t,t.r,t.e,s),r=u.fv,p=u.k,o=u.f0;s.F();){n=t.n(0,s.d)
n.toString
m=b.e
m.toString
l=n.a
k=B.b.aU(B.b.aU(m/8)*l/b.f)
m=b.d
m.toString
j=n.b
i=B.b.aU(B.b.aU(m/8)*j/b.r)
h=b.w*l
g=b.x*j
f=J.a9(g,o)
for(e=0;e<g;++e){d=J.a9(h,p)
for(c=0;c<h;++c)d[c]=new Int32Array(64)
f[e]=d}n.e=k
n.f=i
n.r=r.a(f)}}}
A.hD.prototype={}
A.fk.prototype={
bB(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.y,a=b.length,a0=c.r
a0.toString
if(a0)if(c.Q===0)t=c.at===0?c.ghf():c.ghh()
else t=c.at===0?c.gh6():c.gh8()
else t=c.ghc()
a0=a===1
if(a0){if(0>=a)return A.a(b,0)
s=b[0]
r=s.e
r===$&&A.b()
s=s.f
s===$&&A.b()
q=r*s}else{s=c.f
s===$&&A.b()
r=c.b.x
r===$&&A.b()
q=s*r}s=c.z
if(s==null||s===0)c.z=q
for(s=c.a,r=u.q,p=0;p<q;){for(o=0;o<a;++o){if(!(o<b.length))return A.a(b,o)
b[o].y=0}c.CW=0
if(a0){if(0>=b.length)return A.a(b,0)
n=b[0]
m=0
for(;;){l=c.z
l.toString
if(!(m<l))break
r.a(t)
l=n.e
l===$&&A.b()
k=B.a.av(p,l)
j=B.a.a1(p,l)
l=n.r
l===$&&A.b()
if(!(k>=0&&k<l.length))return A.a(l,k)
l=l[k]
if(!(j>=0&&j<l.length))return A.a(l,j)
t.$2(n,l[j]);++p;++m}}else{m=0
for(;;){l=c.z
l.toString
if(!(m<l))break
for(o=0;o<a;++o){if(!(o<b.length))return A.a(b,o)
n=b[o]
i=n.a
h=n.b
for(g=0;g<h;++g)for(f=0;f<i;++f)c.hk(n,t,p,g,f)}++p;++m}}c.ch=0
if(p>=q)break
e=J.d(s.a,s.d)
d=J.d(s.a,s.d+1)
if(e===255)if(d>=208&&d<=215)s.d+=2
else break}},
bM(){var t,s=this,r=s.ch
if(r>0){--r
s.ch=r
return B.a.b7(s.ay,r)&1}r=s.a
if(r.d>=r.c)return null
t=r.D()
s.ay=t
if(t===255)if(r.D()!==0)return null
s.ch=7
return B.a.j(s.ay,7)&1},
cd(a){var t,s,r=new A.bJ(u.C.a(a))
while(t=this.bM(),t!=null){if(r instanceof A.bJ){s=r.a
if(t>>>0!==t||t>=2)return A.a(s,t)
r=s[t]}if(r instanceof A.dn)return r.a}return null},
dr(a){var t,s
for(t=0;a>0;){s=this.bM()
if(s==null)return null
t=(t<<1|s)>>>0;--a}return t},
cg(a){var t
if(a==null)return 0
if(a===1)return this.bM()===1?1:-1
t=this.dr(a)
if(t==null)return 0
if(t>=B.a.U(1,a-1))return t
return t+B.a.J(-1,a)+1},
hd(a,b){var t,s,r,q,p,o,n,m,l=this
u.L.a(b)
t=a.w
t===$&&A.b()
s=l.cd(t)
r=s===0?0:l.cg(s)
t=a.y
t===$&&A.b()
t+=r
a.y=t
b.$flags&2&&A.c(b)
b[0]=t
for(q=1;q<64;){t=a.x
t===$&&A.b()
p=l.cd(t)
if(p==null)break
o=p&15
n=p>>>4
if(o===0){if(n<15)break
q+=16
continue}q+=n
o=l.cg(o)
t=$.h6()
if(!(q>=0&&q<t.length))return A.a(t,q)
m=t[q]
b.$flags&2&&A.c(b)
if(!(m<64))return A.a(b,m)
b[m]=o;++q}},
hg(a,b){var t,s,r
u.L.a(b)
t=a.w
t===$&&A.b()
s=this.cd(t)
r=s===0?0:B.a.J(this.cg(s),this.ax)
t=a.y
t===$&&A.b()
t+=r
a.y=t
b.$flags&2&&A.c(b)
b[0]=t},
hi(a,b){var t,s
u.L.a(b)
t=b[0]
s=this.bM()
s.toString
s=B.a.J(s,this.ax)
b.$flags&2&&A.c(b)
b[0]=(t|s)>>>0},
h7(a,b){var t,s,r,q,p,o,n,m,l=this
u.L.a(b)
t=l.CW
if(t>0){l.CW=t-1
return}s=l.Q
r=l.as
for(t=l.ax;s<=r;){q=a.x
q===$&&A.b()
q=l.cd(q)
q.toString
p=q&15
o=q>>>4
if(p===0){if(o<15){t=l.dr(o)
t.toString
l.CW=t+B.a.J(1,o)-1
break}s+=16
continue}s+=o
q=$.h6()
if(!(s>=0&&s<q.length))return A.a(q,s)
n=q[s]
q=l.cg(p)
m=B.a.J(1,t)
b.$flags&2&&A.c(b)
if(!(n<64))return A.a(b,n)
b[n]=q*m;++s}},
h9(a,b){var t,s,r,q,p,o,n,m,l,k=this
u.L.a(b)
t=k.Q
s=k.as
A:for(r=k.ax,q=0;t<=s;){p=$.h6()
if(!(t>=0&&t<p.length))return A.a(p,t)
o=p[t]
p=k.cx
switch(p){case 0:p=a.x
p===$&&A.b()
n=k.cd(p)
if(n==null)throw A.f(A.m("Invalid progressive encoding"))
m=n&15
q=n>>>4
if(m===0)if(q<15){p=k.dr(q)
p.toString
k.CW=p+B.a.J(1,q)
k.cx=4}else{k.cx=1
q=16}else{if(m!==1)throw A.f(A.m("invalid ACn encoding"))
k.cy=k.cg(m)
k.cx=q!==0?2:3}continue A
case 1:case 2:if(!(o<64))return A.a(b,o)
l=b[o]
if(l!==0){p=k.bM()
p.toString
p=B.a.J(p,r)
b.$flags&2&&A.c(b)
if(!(o<64))return A.a(b,o)
b[o]=l+p}else{--q
if(q===0)k.cx=p===2?3:0}break
case 3:if(!(o<64))return A.a(b,o)
p=b[o]
if(p!==0){l=k.bM()
l.toString
l=B.a.J(l,r)
b.$flags&2&&A.c(b)
if(!(o<64))return A.a(b,o)
b[o]=p+l}else{p=k.cy
p===$&&A.b()
p=B.a.J(p,r)
b.$flags&2&&A.c(b)
if(!(o<64))return A.a(b,o)
b[o]=p
k.cx=0}break
case 4:if(!(o<64))return A.a(b,o)
p=b[o]
if(p!==0){l=k.bM()
l.toString
l=B.a.J(l,r)
b.$flags&2&&A.c(b)
if(!(o<64))return A.a(b,o)
b[o]=p+l}break}++t}if(k.cx===4)if(--k.CW===0)k.cx=0},
hk(a,b,c,d,e){var t,s,r,q,p
u.q.a(b)
t=this.f
t===$&&A.b()
s=B.a.av(c,t)*a.b+d
r=B.a.a1(c,t)*a.a+e
t=a.r
t===$&&A.b()
q=t.length
if(s>=q)return
if(!(s>=0))return A.a(t,s)
t=t[s]
p=t.length
if(r>=p)return
if(!(r>=0))return A.a(t,r)
b.$2(a,t[r])}}
A.fi.prototype={
bm(a){var t=a.length,s=!0
if(t>=2){if(0>=t)return A.a(a,0)
if(a[0]===255){if(1>=t)return A.a(a,1)
t=a[1]!==216}else t=s}else t=s
if(t)return!1
return A.kA().jI(a)},
aA(a,b){var t=A.kA()
t.bS(a)
if(t.y.length!==1)throw A.f(A.m("only single frame JPEGs supported"))
return A.oS(t)},
bG(a){return this.aA(a,null)}}
A.cQ.prototype={
ad(){return"PngDisposeMode."+this.b}}
A.dZ.prototype={
ad(){return"PngBlendMode."+this.b}}
A.e_.prototype={}
A.f9.prototype={}
A.bt.prototype={
ad(){return"PngFilterType."+this.b}}
A.fx.prototype={
sR(a){this.w=u.di.a(a)},
sjF(a){this.x=u.T.a(a)},
$iG:1}
A.fa.prototype={}
A.bs.prototype={
bm(a){var t,s=A.q(a,!0,null,0).ab(8)
for(t=0;t<8;++t)if(J.d(s.a,s.d+t)!==B.bC[t])return!1
return!0},
aS(b6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=A.q(b6,!0,b4,0)
b3.d=b5
t=b5.ab(8)
for(s=0;s<8;++s)if(J.d(t.a,t.d+s)!==B.bC[s])return b4
for(b5=b3.a,r=b5.cy,q=u.t,p=b5.db,o=u.L,n=b5.ax;;){m=b3.d
l=m.d-m.b
k=m.k()
j=b3.d.af(4)
switch(j){case"tEXt":m=b3.d
i=m.aj(k)
m.d=m.d+(i.c-i.d)
h=i.a0()
g=h.length
for(s=0;s<g;++s)if(h[s]===0){m=s+1
n.i(0,B.aQ.bG(new Uint8Array(h.subarray(0,A.aK(0,s,g)))),B.aQ.bG(new Uint8Array(h.subarray(m,A.aK(m,b4,g)))))
break}b3.d.d+=4
break
case"pHYs":m=b3.d
i=m.aj(k)
m.d=m.d+(i.c-i.d)
f=A.n(i,b4,0)
f.k()
f.k()
J.d(f.a,f.d++)
b3.d.d+=4
break
case"IHDR":m=b3.d
i=m.aj(k)
m.d=m.d+(i.c-i.d)
e=A.n(i,b4,0)
d=e.a0()
b5.a=e.k()
b5.b=e.k()
b5.c=J.d(e.a,e.d++)
b5.d=J.d(e.a,e.d++)
J.d(e.a,e.d++)
b5.f=J.d(e.a,e.d++)
b5.r=J.d(e.a,e.d++)
m=b5.d
if(!(m===0||m===2||m===3||m===4||m===6))return b4
if(b5.f!==0)return b4
switch(m){case 0:if(!B.c.bO(A.k([1,2,4,8,16],q),b5.c))return b4
break
case 2:if(!B.c.bO(A.k([8,16],q),b5.c))return b4
break
case 3:if(!B.c.bO(A.k([1,2,4,8],q),b5.c))return b4
break
case 4:if(!B.c.bO(A.k([8,16],q),b5.c))return b4
break
case 6:if(!B.c.bO(A.k([8,16],q),b5.c))return b4
break}if(b3.d.k()!==A.aU(o.a(d),A.aU(new A.aq(j),0)))throw A.f(A.m("Invalid "+j+" checksum"))
break
case"PLTE":m=b3.d
i=m.aj(k)
m.d=m.d+(i.c-i.d)
b5.sR(i.a0())
if(b3.d.k()!==A.aU(o.a(o.a(b5.w)),A.aU(new A.aq(j),0)))throw A.f(A.m("Invalid "+j+" checksum"))
break
case"tRNS":m=b3.d
i=m.aj(k)
m.d=m.d+(i.c-i.d)
b5.sjF(i.a0())
c=b3.d.k()
m=b5.x
m.toString
if(c!==A.aU(o.a(m),A.aU(new A.aq(j),0)))throw A.f(A.m("Invalid "+j+" checksum"))
break
case"IEND":b3.d.d+=4
break
case"gAMA":if(k!==4)throw A.f(A.m("Invalid gAMA chunk"))
b3.d.k()
b3.d.d+=4
break
case"IDAT":B.c.M(p,l)
m=b3.d
m.d=(m.d+=k)+4
break
case"acTL":b5.CW=b3.d.k()
b3.d.k()
b3.d.d+=4
break
case"fcTL":b3.d.k()
b=b3.d.k()
a=b3.d.k()
a0=b3.d.k()
a1=b3.d.k()
a2=b3.d.l()
a3=b3.d.l()
m=b3.d
a4=J.d(m.a,m.d++)
m=b3.d
a5=J.d(m.a,m.d++)
if(!(a4>=0&&a4<3))return A.a(B.b8,a4)
m=B.b8[a4]
if(!(a5>=0&&a5<2))return A.a(B.bq,a5)
a6=B.bq[a5]
B.c.M(r,new A.f9(A.k([],q),b,a,a0,a1,a2,a3,m,a6))
b3.d.d+=4
break
case"fdAT":b3.d.k()
B.c.M(B.c.gf2(r).y,l)
m=b3.d
m.d=(m.d+=k-4)+4
break
case"bKGD":m=b5.d
if(m===3){m=b3.d
a7=J.d(m.a,m.d++);--k
a8=a7*3
m=b5.w
a6=m.length
if(!(a8>=0&&a8<a6))return A.a(m,a8)
a9=m[a8]
b0=a8+1
if(!(b0<a6))return A.a(m,b0)
b1=m[b0]
b0=a8+2
if(!(b0<a6))return A.a(m,b0)
b2=m[b0]
m=b5.x
if(m!=null){m=B.e.bO(m,a7)?0:255
a6=new Uint8Array(4)
a6[0]=a9
a6[1]=b1
a6[2]=b2
a6[3]=m
b5.z=new A.cp(a6)}else{m=new Uint8Array(3)
m[0]=a9
m[1]=b1
m[2]=b2
b5.z=new A.eH(m)}}else if(m===0||m===4){b3.d.l()
k-=2}else if(m===2||m===6){m=b3.d
m.l()
m.l()
m.l()
k-=24}if(k>0)b3.d.d+=k
b3.d.d+=4
break
case"iCCP":b5.Q=b3.d.cq()
m=b3.d
J.d(m.a,m.d++)
m=b5.Q
a6=b3.d
i=a6.aj(k-(m.length+2))
a6.d=a6.d+(i.c-i.d)
b5.at=i.a0()
b3.d.d+=4
break
case"cICP":m=b3.d
a6=m.d
if(k===4){b0=m.a
m.d=a6+1
J.d(b0,a6)
a6=b3.d
J.d(a6.a,a6.d++)
a6=b3.d
J.d(a6.a,a6.d++)
a6=b3.d
J.d(a6.a,a6.d++)}else m.d=a6+k
b3.d.d+=4
break
default:m=b3.d
m.d=(m.d+=k)+4
break}if(j==="IEND")break
m=b3.d
if(m.d>=m.c)return b4}return b5},
ag(c2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=null,b7=b4.a,b8=b7.a,b9=b7.b,c0=b7.cy,c1=c0.length
if(c1===0||c2===0){s=A.k([],u.h)
c0=b7.db
r=c0.length
for(c1=u.L,q=0,p=0;p<r;++p){o=b4.d
o===$&&A.b()
if(!(p<c0.length))return A.a(c0,p)
o.d=c0[p]
n=o.k()
m=b4.d.af(4)
o=b4.d
l=o.aj(n)
o.d=o.d+(l.c-l.d)
k=l.a0()
q+=k.length
B.c.M(s,k)
if(b4.d.k()!==A.aU(c1.a(k),A.aU(new A.aq(m),0)))throw A.f(A.m("Invalid "+m+" checksum"))}b6=new Uint8Array(q)
for(c0=s.length,j=0,i=0;i<s.length;s.length===c0||(0,A.aa)(s),++i){k=s[i]
J.k3(b6,j,k)
j+=k.length}}else{if(c2>=c1)throw A.f(A.m("Invalid Frame Number: "+c2))
if(!(c2<c1))return A.a(c0,c2)
h=c0[c2]
b8=h.b
b9=h.c
s=A.k([],u.h)
for(c0=h.y,q=0,p=0;p<c0.length;++p){c1=b4.d
c1===$&&A.b()
c1.d=c0[p]
n=c1.k()
c1=b4.d
c1.af(4)
c1.d+=4
c1=b4.d
l=c1.aj(n-4)
c1.d=c1.d+(l.c-l.d)
k=l.a0()
q+=k.length
B.c.M(s,k)}b6=new Uint8Array(q)
for(c0=s.length,j=0,i=0;i<s.length;s.length===c0||(0,A.aa)(s),++i){k=s[i]
J.k3(b6,j,k)
j+=k.length}}c0=b7.d
g=1
if(!(c0===3))if(!(c0===0)){if(c0===4)c0=2
else c0=c0===6?4:3
g=c0}t=null
try{t=B.F.bP(b6)}catch(f){return b5}e=A.q(t,!0,b5,0)
b4.c=b4.b=0
d=b5
if(b7.d===3){c0=b7.w
if(c0!=null){c1=c0.length
c=c1/3|0
b=b7.x
o=b!=null
a=o?b.length:0
a0=o?4:3
d=new A.az(new Uint8Array(c*a0),c,a0)
for(o=a0===4,p=0,a1=0;p<c;++p,a1+=3){if(o&&p<a){if(!(p<b.length))return A.a(b,p)
a2=b[p]}else a2=255
if(!(a1<c1))return A.a(c0,a1)
a3=c0[a1]
a4=a1+1
if(!(a4<c1))return A.a(c0,a4)
a4=c0[a4]
a5=a1+2
if(!(a5<c1))return A.a(c0,a5)
d.cB(p,a3,a4,c0[a5],a2)}}}if(b7.d===0&&b7.x!=null&&d==null&&b7.c<=8){b=b7.x
a6=b.length
c0=b7.c
c=B.a.U(1,c0)
c1=c*4
o=new Uint8Array(c1)
d=new A.az(o,c,4)
if(c0===1)a7=255
else if(c0===2)a7=85
else{c0=c0===4?17:1
a7=c0}for(p=0;p<c;++p){a8=p*a7
d.cB(p,a8,a8,a8,255)}for(p=0;p<a6;p+=2){c0=b[p]
a3=p+1
if(!(a3<a6))return A.a(b,a3)
a9=(c0&255)<<8|b[a3]&255
if(a9<c){c0=a9*4+3
if(!(c0<c1))return A.a(o,c0)
o[c0]=0}}}c0=b7.c
if(c0===1)b0=B.v
else if(c0===2)b0=B.x
else{if(c0===4)c1=B.y
else c1=c0===16?B.l:B.f
b0=c1}c1=b7.d
if(c1===0&&b7.x!=null&&c0>8)g=4
b1=A.J(b5,b5,b0,0,B.i,b9,b5,0,c1===2&&b7.x!=null?4:g,d,B.f,b8,!1)
b2=b7.a
b3=b7.b
b7.a=b8
b7.b=b9
b4.e=0
if(b7.r!==0){c0=b9+7>>>3
b4.bL(e,b1,0,0,8,8,b8+7>>>3,c0)
c1=b8+3
b4.bL(e,b1,4,0,8,8,c1>>>3,c0)
c0=b9+3
b4.bL(e,b1,0,4,4,8,c1>>>2,c0>>>3)
c1=b8+1
b4.bL(e,b1,2,0,4,4,c1>>>2,c0>>>2)
c0=b9+1
b4.bL(e,b1,0,2,2,4,c1>>>1,c0>>>2)
b4.bL(e,b1,1,0,2,2,b8>>>1,c0>>>1)
b4.bL(e,b1,0,1,1,2,b8,b9>>>1)}else b4.il(e,b1)
b7.a=b2
b7.b=b3
c0=b7.at
if(c0!=null)b1.c=new A.cw(b7.Q,B.at,c0)
b7=b7.ax
if(b7.a!==0)b1.iZ(b7)
return b1},
aA(a,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null
if(c.aS(u.D.a(a))==null)return b
t=c.a
s=t.cy
r=s.length
if(r===0){t=c.ag(0)
t.toString
return t}for(r=u.g,q=b,p=q,o=0;o<t.CW;++o){if(!(o<s.length))return A.a(s,o)
a0=s[o]
n=c.ag(o)
if(n==null)continue
if(p==null||q==null){p=n.dw(n.gb4())
m=a0.f
p.y=B.b.h((m===0||a0.r===0?0:m/a0.r)*1000)
q=p
continue}m=o-1
if(!(m>=0&&m<s.length))return A.a(s,m)
l=s[m]
k=n.a
j=k==null
i=j?b:k.a
if(i==null)i=0
h=q.a
g=h==null
f=g?b:h.a
if(i===(f==null?0:f)){k=j?b:k.b
if(k==null)k=0
j=g?b:h.b
k=k===(j==null?0:j)&&a0.d===0&&a0.e===0&&a0.x===B.bQ}else k=!1
if(k){m=a0.f
n.y=B.b.h((m===0||a0.r===0?0:m/a0.r)*1000)
p.aG(n)
q=n
continue}e=p.x
if(e===$)e=p.x=A.k([],r)
if(!(m<e.length))return A.a(e,m)
q=A.bQ(e[m],!1,!1)
d=l.w
if(d===B.bS){m=l.d
k=l.e
j=t.z
if(j==null){j=new Uint8Array(4)
i=new A.cp(j)
j[0]=0
j[1]=0
j[2]=0
j[3]=0
j=i}A.oM(q,!1,j,m,m+l.b-1,k,k+l.c-1)}else if(d===B.bT&&o>1){m=o-2
e=p.x
if(e===$)e=p.x=A.k([],r)
if(!(m>=0&&m<e.length))return A.a(e,m)
k=l.d
j=l.e
i=l.b
h=l.c
q=A.jP(q,e[m],B.ao,h,i,k,j,h,i,k,j)}m=a0.f
q.y=B.b.h((m===0||a0.r===0?0:m/a0.r)*1000)
m=a0.x===B.bR?B.ao:B.an
q=A.jP(q,n,m,b,b,a0.d,a0.e,b,b,b,b)
p.aG(q)}return p},
bG(a){return this.aA(a,null)},
bL(a3,a4,a5,a6,a7,a8,a9,b0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.a,a2=a1.d
if(a2===4)t=2
else if(a2===2)t=3
else{a2=a2===6?4:1
t=a2}s=t*a1.c
r=B.a.j(s+7,3)
q=B.a.j(s*a9+7,3)
p=A.k([null,null],u.e)
o=A.k([0,0,0,0],u.t)
for(a1=a7>1,n=a7-a5,m=a6,l=0,k=0;l<b0;++l,m+=a8,++a0.e){a2=J.d(a3.a,a3.d++)
if(!(a2>=0&&a2<5))return A.a(B.ae,a2)
j=B.ae[a2]
i=a3.aj(q)
a3.d=a3.d+(i.c-i.d)
B.c.i(p,k,i.a0())
if(!(k>=0&&k<2))return A.a(p,k)
h=p[k]
k=1-k
g=p[k]
h.toString
a0.eE(j,r,h,g)
a0.c=a0.b=0
a2=h.length
f=new A.a6(h,0,Math.min(a2,a2),0,!0)
for(a2=n<=1,e=a5,d=0;d<a9;++d,e+=a7){a0.ev(f,o)
c=a4.a
c=c==null?null:c.O(e,m,null)
a0.dt(c==null?new A.A():c,o)
if(!a2||a1)for(b=0;b<a7;++b)for(c=m+b,a=0;a<n;++a)a0.dt(a4.ak(e+a,c),o)}}},
il(a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.a,a=b.d
if(a===4)t=2
else if(a===2)t=3
else{a=a===6?4:1
t=a}s=t*b.c
r=b.a
q=b.b
p=B.a.j(r*s+7,3)
o=B.a.j(s+7,3)
n=A.Y(p,0,!1,u.p)
m=A.k([n,n],u.S)
l=A.k([0,0,0,0],u.t)
b=a1.a
k=b.gG(b)
k.F()
for(j=0,i=0;j<q;++j,i=f){b=J.d(a0.a,a0.d++)
if(!(b>=0&&b<5))return A.a(B.ae,b)
h=B.ae[b]
g=a0.aj(p)
a0.d=a0.d+(g.c-g.d)
B.c.i(m,i,g.a0())
if(!(i>=0&&i<2))return A.a(m,i)
f=1-i
c.eE(h,o,m[i],m[f])
c.c=c.b=0
b=m[i]
a=b.length
e=new A.a6(b,0,Math.min(a,a),0,!0)
for(d=0;d<r;++d){c.ev(e,l)
c.dt(k.gP(),l)
k.F()}}},
eE(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u.L.a(c)
u.T.a(d)
t=c.length
switch(a.a){case 0:break
case 1:for(s=J.ax(c),r=b;r<t;++r){q=c.length
if(!(r<q))return A.a(c,r)
p=c[r]
o=r-b
if(!(o>=0&&o<q))return A.a(c,o)
s.i(c,r,p+c[o]&255)}break
case 2:for(s=J.ax(c),q=d!=null,r=0;r<t;++r){if(q){if(!(r<d.length))return A.a(d,r)
n=d[r]}else n=0
if(!(r<c.length))return A.a(c,r)
s.i(c,r,c[r]+n&255)}break
case 3:for(s=J.ax(c),q=d!=null,r=0;r<t;++r){if(r<b)m=0
else{p=r-b
if(!(p>=0&&p<c.length))return A.a(c,p)
m=c[p]}if(q){if(!(r<d.length))return A.a(d,r)
n=d[r]}else n=0
if(!(r<c.length))return A.a(c,r)
s.i(c,r,c[r]+B.a.j(m+n,1)&255)}break
case 4:for(s=J.ax(c),q=d==null,p=!q,r=0;r<t;++r){o=r<b
if(o)m=0
else{l=r-b
if(!(l>=0&&l<c.length))return A.a(c,l)
m=c[l]}if(p){if(!(r<d.length))return A.a(d,r)
n=d[r]}else n=0
if(o||q)k=0
else{o=r-b
if(!(o>=0&&o<d.length))return A.a(d,o)
k=d[o]}j=m+n-k
i=Math.abs(j-m)
h=Math.abs(j-n)
g=Math.abs(j-k)
if(i<=h&&i<=g)f=m
else f=h<=g?n:k
if(!(r<c.length))return A.a(c,r)
s.i(c,r,c[r]+f&255)}break}},
bj(a,b){var t,s,r,q,p,o=this
if(b===0)return 0
if(b===8)return a.D()
if(b===16)return a.l()
for(t=a.c;s=o.c,s<b;){s=a.d
if(s>=t)throw A.f(A.m("Invalid PNG data."))
r=a.a
a.d=s+1
q=J.d(r,s)
s=o.c
o.b=B.a.U(q,s)
o.c=s+8}if(b===1)p=1
else if(b===2)p=3
else{if(b===4)t=15
else t=0
p=t}t=s-b
s=B.a.a_(o.b,t)
o.c=t
return s&p},
ev(a,b){var t,s,r=this
u.L.a(b)
t=r.a
s=t.d
switch(s){case 0:B.c.i(b,0,r.bj(a,t.c))
return
case 2:B.c.i(b,0,r.bj(a,t.c))
B.c.i(b,1,r.bj(a,t.c))
B.c.i(b,2,r.bj(a,t.c))
return
case 3:B.c.i(b,0,r.bj(a,t.c))
return
case 4:B.c.i(b,0,r.bj(a,t.c))
B.c.i(b,1,r.bj(a,t.c))
return
case 6:B.c.i(b,0,r.bj(a,t.c))
B.c.i(b,1,r.bj(a,t.c))
B.c.i(b,2,r.bj(a,t.c))
B.c.i(b,3,r.bj(a,t.c))
return}throw A.f(A.m("Invalid color type: "+s+"."))},
dt(a,b){var t,s,r,q,p,o,n,m,l,k
u.L.a(b)
t=this.a
s=t.d
switch(s){case 0:s=t.x
if(s!=null&&t.c>8){t=s.length
if(0>=t)return A.a(s,0)
r=s[0]
if(1>=t)return A.a(s,1)
s=s[1]
q=b[0]
a.a7(q,q,q,q!==((r&255)<<24|s&255)>>>0?a.gB():0)
return}a.am(b[0],0,0)
return
case 2:p=b[0]
q=b[1]
o=b[2]
t=t.x
if(t!=null){s=t.length
if(0>=s)return A.a(t,0)
r=t[0]
if(1>=s)return A.a(t,1)
n=t[1]
if(2>=s)return A.a(t,2)
m=t[2]
if(3>=s)return A.a(t,3)
l=t[3]
if(4>=s)return A.a(t,4)
k=t[4]
if(5>=s)return A.a(t,5)
t=t[5]
if(p!==((r&255)<<8|n&255)||q!==((m&255)<<8|l&255)||o!==((k&255)<<8|t&255)){a.a7(p,q,o,a.gB())
return}}a.am(p,q,o)
return
case 3:a.sL(b[0])
return
case 4:a.am(b[0],b[1],0)
return
case 6:a.a7(b[0],b[1],b[2],b[3])
return}throw A.f(A.m("Invalid color type: "+s+"."))}}
A.fw.prototype={
ad(){return"PngFilter."+this.b}}
A.hQ.prototype={
aG(a){var t,s,r,q,p,o,n,m,l=this,k=8192,j=a.a
j=j==null?null:j.gbc()
if(!(j===!0&&a.gH()!==B.l))j=a.gaD()<8&&!a.gbl()&&a.gb4()>1
else j=!0
if(j)a=a.j2(B.f)
if(l.w==null){j=A.aG(!0,k)
l.w=j
j.bn(A.k([137,80,78,71,13,10,26,10],u.t))
t=A.aG(!0,k)
t.aH(a.gX())
t.aH(a.gK())
t.V(a.gaD())
if(a.gbl())j=3
else if(a.gb4()===1)j=0
else if(a.gb4()===2)j=4
else j=a.gb4()===3?2:6
t.V(j)
t.V(0)
t.V(0)
t.V(0)
j=l.w
j.toString
l.bk(j,"IHDR",J.M(B.e.gv(t.c),0,t.a))
j=a.c
if(j!=null){t=A.aG(!0,k)
t.bn(new A.aq(j.a))
t.V(0)
t.V(0)
t.bn(j.j1())
j=l.w
j.toString
l.bk(j,"iCCP",J.M(B.e.gv(t.c),0,t.a))}if(a.gbl()){j=l.a
if(j!=null){j=j.a
j===$&&A.b()
l.eL(j)}else{j=a.a
j=j==null?null:j.gR()
j.toString
l.eL(j)}}if(l.r){t=A.aG(!0,k)
j=l.e
j===$&&A.b()
t.aH(j)
t.aH(l.c)
j=l.w
j.toString
l.bk(j,"acTL",J.M(B.e.gv(t.c),0,t.a))}}s=a.gbl()?1:a.gb4()
r=a.gH()===B.l?2:1
j=a.gX()
q=a.gK()
p=a.gK()
o=new Uint8Array(j*q*s*r+p)
l.hI(0,a,o)
n=B.aS.eY(u.L.a(o),l.d)
j=a.d
if(j!=null)for(j=new A.V(j,j.r,j.e,A.o(j).A("V<1>"));j.F();){q=j.d
p=a.d.n(0,q)
p.toString
t=new A.fs(!0,new Uint8Array(8192))
t.bn(B.aR.c2(q))
t.V(0)
t.bn(B.aR.c2(p))
q=l.w
q.toString
l.bk(q,"tEXt",J.M(B.e.gv(t.c),0,t.a))}if(l.r){t=A.aG(!0,k)
t.aH(l.f)
t.aH(a.gX())
t.aH(a.gK())
t.aH(0)
t.aH(0)
t.d0(a.y)
t.d0(1000)
t.V(1)
t.V(0)
j=l.w
j.toString
l.bk(j,"fcTL",J.M(B.e.gv(t.c),0,t.a));++l.f}if(l.f<=1){j=l.w
j.toString
l.bk(j,"IDAT",n)}else{m=A.aG(!0,k)
m.aH(l.f)
m.bn(n)
j=l.w
j.toString
l.bk(j,"fdAT",J.M(B.e.gv(m.c),0,m.a));++l.f}},
jh(){var t,s=this,r=s.w
if(r==null)return null
s.bk(r,"IEND",A.k([],u.t))
s.f=0
r=s.w
t=J.M(B.e.gv(r.c),0,r.a)
s.w=null
return t},
jc(a,b){var t,s,r,q,p,o=this,n=a.gar().length
if(n<=1){o.e=1
o.r=!1
o.aG(a)}else{n=a.gar().length
o.e=n
o.r=n>1
o.c=a.r
if(a.gbl()){t=new A.fq(new Int32Array(256))
t.hZ(256)
t.iY(a)
o.a=t
for(n=a.gar(),s=n.length,r=0;r<n.length;n.length===s||(0,A.aa)(n),++r){q=n[r]
if(q!==a){t.ej(q)
t.e5()
t.ei()
t.dX()}}}for(n=a.gar(),s=n.length,r=0;r<n.length;n.length===s||(0,A.aa)(n),++r){q=n[r]
p=o.a
if(p!=null)o.aG(p.fd(q))
else o.aG(q)}}n=o.jh()
n.toString
return n},
eL(a){var t,s,r,q=this
if(a.gH()===B.f&&a.b===3&&a.a===256){t=q.w
t.toString
q.bk(t,"PLTE",J.M(a.gv(a),0,null))}else{t=a.a
s=A.aG(!0,t*3)
for(r=0;r<t;++r){s.V(B.b.h(a.aM(r)))
s.V(B.b.h(a.aL(r)))
s.V(B.b.h(a.aJ(r)))}t=q.w
t.toString
q.bk(t,"PLTE",J.M(B.e.gv(s.c),0,s.a))}if(a.b===4){t=a.a
s=A.aG(!0,t)
for(r=0;r<t;++r)s.V(B.b.h(a.aR(r)))
t=q.w
t.toString
q.bk(t,"tRNS",J.M(B.e.gv(s.c),0,s.a))}},
bk(a,b,c){u.L.a(c)
a.aH(c.length)
a.bn(new A.aq(b))
a.bn(c)
a.aH(A.aU(c,A.aU(new A.aq(b),0)))},
hI(a,b,c){var t,s,r=this,q=b.gbl()?B.jo:r.b,p=b.gv(0),o=b.a.gaV(),n=b.gbl()?1:b.gb4(),m=B.a.j(n*b.gaD()+7,3),l=b.gaD()+7>>>3,k=q.a,j=J.aV(p),i=0,h=0,g=null,f=0
for(;;){t=b.a
t=t==null?null:t.b
if(!(f<(t==null?0:t)))break
s=j.cj(p,h,o)
h+=o
switch(k){case 1:i=r.hN(s,l,m,c,i)
break
case 2:i=r.hO(s,g,l,c,i)
break
case 3:i=r.hJ(s,g,l,m,c,i)
break
case 4:i=r.hL(s,g,l,m,c,i)
break
default:i=r.hK(s,l,c,i)
break}++f
g=s}},
eK(a,b,c,d,e){var t,s,r,q;--a
for(t=b.length,s=d.$flags|0;a>=0;e=r){r=e+1
q=c+a
if(!(q<t))return A.a(b,q)
q=b[q]
s&2&&A.c(d)
if(!(e<d.length))return A.a(d,e)
d[e]=q;--a}return e},
hK(a,b,c,d){var t,s,r,q,p=d+1
c.$flags&2&&A.c(c)
t=c.length
if(!(d<t))return A.a(c,d)
c[d]=0
s=a.length
if(b===1)for(d=p,r=0;r<s;++r,d=p){p=d+1
q=a[r]
if(!(d<t))return A.a(c,d)
c[d]=q}else for(d=p,r=0;r<s;r+=b)d=this.eK(b,a,r,c,d)
return d},
hN(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k=e+1
d.$flags&2&&A.c(d)
t=d.length
if(!(e<t))return A.a(d,e)
d[e]=1
for(e=k,s=0;s<c;s+=b)e=this.eK(b,a,s,d,e)
r=a.length
for(q=b-1,p=d.$flags|0,s=c;s<r;s+=b)for(o=q,n=0;n<b;++n,--o,e=k){k=e+1
m=s+o
if(!(m>=0&&m<r))return A.a(a,m)
l=a[m]
m-=c
if(!(m>=0))return A.a(a,m)
m=a[m]
p&2&&A.c(d)
if(!(e>=0&&e<t))return A.a(d,e)
d[e]=l-m&255}return e},
hO(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j=e+1
d.$flags&2&&A.c(d)
t=d.length
if(!(e<t))return A.a(d,e)
d[e]=2
s=a.length
for(r=c-1,q=d.$flags|0,p=b!=null,e=j,o=0;o<s;o+=c)for(n=r,m=0;m<c;++m,--n,e=j){if(p){l=o+n
if(!(l>=0&&l<b.length))return A.a(b,l)
k=b[l]}else k=0
j=e+1
l=o+n
if(!(l>=0&&l<s))return A.a(a,l)
l=a[l]
q&2&&A.c(d)
if(!(e>=0&&e<t))return A.a(d,e)
d[e]=l-k&255}return e},
hJ(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=f+1
e.$flags&2&&A.c(e)
t=e.length
if(!(f<t))return A.a(e,f)
e[f]=3
s=a.length
for(r=c-1,q=e.$flags|0,p=b==null,f=g,o=0;o<s;o+=c)for(n=r,m=0;m<c;++m,--n,f=g){l=o+n
if(l<d)k=0
else{j=l-d
if(!(j>=0&&j<s))return A.a(a,j)
k=a[j]}if(p)i=0
else{if(!(l>=0&&l<b.length))return A.a(b,l)
i=b[l]}if(!(l>=0&&l<s))return A.a(a,l)
h=a[l]
g=f+1
q&2&&A.c(e)
if(!(f>=0&&f<t))return A.a(e,f)
e[f]=h-(k+i>>>1)}return f},
i6(a,b,c){var t=a+b-c,s=t>a?t-a:a-t,r=t>b?t-b:b-t,q=t>c?t-c:c-t
if(s<=r&&s<=q)return a
else if(r<=q)return b
return c},
hL(a,b,c,a0,a1,a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2+1
a1.$flags&2&&A.c(a1)
t=a1.length
if(!(a2<t))return A.a(a1,a2)
a1[a2]=4
s=a.length
for(r=c-1,q=a1.$flags|0,p=b==null,a2=d,o=0;o<s;o+=c)for(n=r,m=0;m<c;++m,--n,a2=d){l=o+n
k=l<a0
if(k)j=0
else{i=l-a0
if(!(i>=0&&i<s))return A.a(a,i)
j=a[i]}if(p)h=0
else{if(!(l>=0&&l<b.length))return A.a(b,l)
h=b[l]}if(k||p)g=0
else{k=l-a0
if(!(k>=0&&k<b.length))return A.a(b,k)
g=b[k]}if(!(l>=0&&l<s))return A.a(a,l)
f=a[l]
e=this.i6(j,h,g)
d=a2+1
q&2&&A.c(a1)
if(!(a2>=0&&a2<t))return A.a(a1,a2)
a1[a2]=f-e&255}return a2}}
A.bu.prototype={
ad(){return"PnmFormat."+this.b}}
A.bv.prototype={}
A.hR.prototype={
bm(a){var t
this.b=A.q(a,!1,null,0)
t=this.cN()
if(t==="P1"||t==="P2"||t==="P5"||t==="P3"||t==="P6")return!0
return!1},
aA(a,b){if(this.aS(a)==null)return null
return this.ag(0)},
aS(a){var t,s,r=this
r.b=A.q(a,!1,null,0)
t=r.cN()
if(t==="P1"){s=r.a=new A.bv(B.W)
s.e=B.bU}else if(t==="P2"){s=r.a=new A.bv(B.W)
s.e=B.bV}else if(t==="P5"){s=r.a=new A.bv(B.W)
s.e=B.aF}else if(t==="P3"){s=r.a=new A.bv(B.W)
s.e=B.bW}else if(t==="P6"){s=r.a=new A.bv(B.W)
s.e=B.aG}else return r.b=null
s.a=r.ce()
s=r.a
s.toString
s.b=r.ce()
s=r.a
if(s.a===0||s.b===0)return r.a=r.b=null
return s},
ag(a){var t,s,r,q,p,o=this,n=null,m=o.a
if(m==null)return n
t=m.e
if(t===B.bU){t=m.a
s=A.J(n,n,B.v,0,B.i,m.b,n,0,1,n,B.f,t,!1)
for(m=s.a,m=m.gG(m);m.F();){r=m.gP()
if(o.cN()==="1")r.am(1,1,1)
else r.am(0,0,0)}return s}else if(t===B.bV||t===B.aF){q=o.ce()
if(q===0)return n
m=o.a
t=m.a
m=m.b
s=A.J(n,n,o.eZ(q),0,B.i,m,n,0,1,n,B.f,t,!1)
for(m=s.a,m=m.gG(m);m.F();){r=m.gP()
p=o.cQ(o.a.e,q)
r.am(p,p,p)}return s}else if(t===B.bW||t===B.aG){q=o.ce()
if(q===0)return n
m=o.a
t=m.a
m=m.b
s=A.J(n,n,o.eZ(q),0,B.i,m,n,0,3,n,B.f,t,!1)
for(m=s.a,m=m.gG(m);m.F();)m.gP().am(o.cQ(o.a.e,q),o.cQ(o.a.e,q),o.cQ(o.a.e,q))
return s}return n},
eZ(a){if(a>255)return B.l
if(a>15)return B.f
if(a>3)return B.y
if(a>1)return B.x
return B.v},
cQ(a,b){if(a===B.aF||a===B.aG)return this.b.D()
return this.ce()},
ce(){var t,s,r=this.cN()
if(J.aY(r)===0)return 0
try{t=A.oZ(r)
return t}catch(s){return 0}},
cN(){var t,s,r,q,p=this.b
if(p==null)return""
t=this.c
if(t.length!==0)return B.c.f6(t,0)
s=B.B.fb(p.jx())
if(s.length===0)return""
while(B.B.dI(s,"#"))s=B.B.fb(this.b.f5(70))
p=u.cc
r=A.t(new A.ek(A.k(s.split(" "),u.s),u.bB.a(new A.hS()),p),p.A("e.E"))
for(p=r.length,q=0;q<p;++q)if(B.B.dI(r[q],"#")){B.c.su(r,q)
break}B.c.iW(t,r)
if(t.length===0)return""
return B.c.f6(t,0)}}
A.hS.prototype={
$1(a){return A.bd(a)!==""},
$S:19}
A.fz.prototype={
sjj(a){u.T.a(a)},
sfm(a){u.T.a(a)},
sjz(a){u.T.a(a)},
sjA(a){u.T.a(a)}}
A.fA.prototype={
sbA(a){u.T.a(a)},
sbD(a){u.T.a(a)}}
A.aR.prototype={}
A.fD.prototype={
sbA(a){u.T.a(a)},
sbD(a){u.T.a(a)}}
A.fE.prototype={
sbA(a){u.T.a(a)},
sbD(a){u.T.a(a)}}
A.fH.prototype={
sbA(a){u.T.a(a)},
sbD(a){u.T.a(a)}}
A.fI.prototype={
sbA(a){u.T.a(a)},
sbD(a){u.T.a(a)}}
A.e1.prototype={}
A.fG.prototype={}
A.hT.prototype={
fL(a){var t,s,r,q,p=this
a.l()
a.l()
a.l()
a.l()
t=B.a.W(a.c-a.d,8)
if(t>0){p.e=new Uint16Array(t)
p.f=new Uint16Array(t)
p.r=new Uint16Array(t)
p.w=new Uint16Array(t)
for(s=0;s<t;++s){r=p.e
q=a.l()
r.$flags&2&&A.c(r)
if(!(s<r.length))return A.a(r,s)
r[s]=q
q=p.f
r=a.l()
q.$flags&2&&A.c(q)
if(!(s<q.length))return A.a(q,s)
q[s]=r
r=p.r
q=a.l()
r.$flags&2&&A.c(r)
if(!(s<r.length))return A.a(r,s)
r[s]=q
q=p.w
r=a.l()
q.$flags&2&&A.c(q)
if(!(s<q.length))return A.a(q,s)
q[s]=r}}}}
A.c7.prototype={
f4(a,b,c,d,e,f,g){if(a.c-a.d<2)return
if(e==null)e=a.l()
switch(e){case 0:d.toString
this.iK(a,b,c,d)
break
case 1:if(f==null)f=this.iH(a,c)
d.toString
this.iJ(a,b,c,d,f,g)
break
default:throw A.f(A.m("Unsupported compression: "+e))}},
jw(a,b,c,d){return this.f4(a,b,c,d,null,null,0)},
iH(a,b){var t,s,r=new Uint16Array(b)
for(t=0;t<b;++t){s=a.l()
if(!(t<b))return A.a(r,t)
r[t]=s}return r},
iK(a,b,c,d){var t,s=b*c
if(d===16)s*=2
if(s>a.c-a.d){t=new Uint8Array(s)
this.c=t
B.e.aq(t,0,s,255)
return}this.c=a.ab(s).a0()},
iJ(a,b,c,d,e,f){var t,s,r,q,p,o,n,m=b*c
if(d===16)m*=2
t=new Uint8Array(m)
this.c=t
s=f*c
r=e.length
if(s>=r){B.e.aq(t,0,m,255)
return}for(q=0,p=0;p<c;++p,s=o){o=s+1
if(!(s>=0&&s<r))return A.a(e,s)
n=a.aj(e[s])
a.d=a.d+(n.c-n.d)
t=this.c
t.toString
this.hp(n,t,q)
q+=b}},
hp(a,b,c){var t,s,r,q,p,o,n,m
for(t=a.c,s=b.length;r=a.d,r<t;){q=a.a
a.d=r+1
r=J.d(q,r)
q=$.ad()
q.$flags&2&&A.c(q)
q[0]=r
r=$.ak()
if(0>=r.length)return A.a(r,0)
p=r[0]
if(p<0){p=1-p
r=a.d
if(r>=t)break
q=a.a
a.d=r+1
o=J.d(q,r)
if(c+p>s)p=s-c
for(r=b.$flags|0,n=0;n<p;++n,c=m){m=c+1
r&2&&A.c(b)
if(!(c>=0&&c<s))return A.a(b,c)
b[c]=o}}else{++p
if(c+p>s)p=s-c
p=Math.min(p,t-a.d)
for(n=0;n<p;++n,c=m){m=c+1
r=J.d(a.a,a.d++)
b.$flags&2&&A.c(b)
if(!(c>=0&&c<s))return A.a(b,c)
b[c]=r}}}}}
A.aI.prototype={
ad(){return"PsdColorMode."+this.b}}
A.fB.prototype={
fM(a){var t,s,r=this
r.as=A.q(a,!0,null,0)
r.ip()
if(r.c!==943870035)return
t=r.as.k()
r.as.ab(t)
t=r.as.k()
r.at=r.as.ab(t)
t=r.as.k()
r.ax=r.as.ab(t)
s=r.as
r.ay=s.ab(s.c-s.d)},
bB(){var t,s=this
if(s.c===943870035){t=s.as
t===$&&A.b()
t=t==null}else t=!0
if(t)return!1
s.iF()
s.iG()
s.iI()
s.ay=s.ax=s.at=s.as=null
return!0},
eX(){if(!this.bB())return null
return this.jC()},
jC(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.y
if(a1!=null)return a1
a1=a.a
a1=A.J(a0,a0,B.f,0,B.i,a.b,a0,0,4,a0,B.f,a1,!1)
a.y=a1
a1.du(0)
for(a1=a.w,t=0;t<a1.length;++t){s=a1[t]
r=s.y
r===$&&A.b()
if((r&2)!==0)continue
r=s.w
r===$&&A.b()
q=r/255
p=s.r
o=s.cx
r=s.a
r.toString
n=r
m=0
for(;;){r=s.f
r===$&&A.b()
if(!(m<r))break
r=s.a
r.toString
l=r+m
k=s.b
r=n>=0
j=0
for(;;){i=s.e
i===$&&A.b()
if(!(j<i))break
i=o.a
h=i==null?a0:i.O(j,m,a0)
if(h==null)h=new A.A()
g=B.b.h(h.gm())
f=B.b.h(h.gp())
e=B.b.h(h.gq())
d=B.b.h(h.gt())
k.toString
if(k>=0&&k<a.a&&r&&n<a.b){i=s.b
i.toString
c=a.y.a
b=c==null?a0:c.O(i+j,l,a0)
if(b==null)b=new A.A()
a.fU(B.b.h(b.gm()),B.b.h(b.gp()),B.b.h(b.gq()),B.b.h(b.gt()),g,f,e,d,p,q,b)}++j;++k}++m;++n}}a1=a.y
a1.toString
return a1},
fU(a,b,c,d,e,f,g,h,i,j,k){var t,s,r,q,p,o=h/255*j
switch(i){case 1885434739:t=d
s=c
r=b
q=a
break
case 1852797549:t=h
s=g
r=f
q=e
break
case 1684632435:t=h
s=g
r=f
q=e
break
case 1684107883:q=Math.min(a,e)
r=Math.min(b,f)
s=Math.min(c,g)
t=h
break
case 1836411936:q=B.a.j(a*e,8)
r=B.a.j(b*f,8)
s=B.a.j(c*g,8)
t=h
break
case 1768188278:q=A.hV(a,e)
r=A.hV(b,f)
s=A.hV(c,g)
t=h
break
case 1818391150:q=A.hX(a,e)
r=A.hX(b,f)
s=A.hX(c,g)
t=h
break
case 1684751212:t=h
s=g
r=f
q=e
break
case 1818850405:q=Math.max(a,e)
r=Math.max(b,f)
s=Math.max(c,g)
t=h
break
case 1935897198:q=A.jv(a,e)
r=A.jv(b,f)
s=A.jv(c,g)
t=h
break
case 1684633120:q=A.hW(a,e)
r=A.hW(b,f)
s=A.hW(c,g)
t=h
break
case 1818518631:q=e+a>255?255:a+e
r=f+b>255?255:b+f
s=g+c>255?255:c+g
t=h
break
case 1818706796:t=h
s=g
r=f
q=e
break
case 1870030194:q=A.jt(a,e,d,h)
r=A.jt(b,f,d,h)
s=A.jt(c,g,d,h)
t=h
break
case 1934387572:q=A.jw(a,e)
r=A.jw(b,f)
s=A.jw(c,g)
t=h
break
case 1749838196:q=A.jr(a,e)
r=A.jr(b,f)
s=A.jr(c,g)
t=h
break
case 1984719220:q=A.jx(a,e)
r=A.jx(b,f)
s=A.jx(c,g)
t=h
break
case 1816947060:q=A.js(a,e)
r=A.js(b,f)
s=A.js(c,g)
t=h
break
case 1884055924:q=A.ju(a,e)
r=A.ju(b,f)
s=A.ju(c,g)
t=h
break
case 1749903736:q=e<255-a?0:255
r=f<255-b?0:255
s=g<255-c?0:255
t=h
break
case 1684629094:q=Math.abs(e-a)
r=Math.abs(f-b)
s=Math.abs(g-c)
t=h
break
case 1936553316:q=A.jq(a,e)
r=A.jq(b,f)
s=A.jq(c,g)
t=h
break
case 1718842722:t=h
s=g
r=f
q=e
break
case 1717856630:t=h
s=g
r=f
q=e
break
case 1752524064:t=h
s=g
r=f
q=e
break
case 1935766560:t=h
s=g
r=f
q=e
break
case 1668246642:t=h
s=g
r=f
q=e
break
case 1819634976:t=h
s=g
r=f
q=e
break
default:t=h
s=g
r=f
q=e}p=1-o
k.sm(B.b.h(a*p+q*o))
k.sp(B.b.h(b*p+r*o))
k.sq(B.b.h(c*p+s*o))
k.st(B.b.h(d*p+t*o))},
ip(){var t,s,r=this,q=r.as
q===$&&A.b()
r.c=q.k()
q=r.as.l()
r.d=q
if(q!==1){r.c=0
return}t=r.as.ab(6)
for(s=0;s<6;++s)if(J.d(t.a,t.d+s)!==0){r.c=0
return}r.e=r.as.l()
r.b=r.as.k()
r.a=r.as.k()
r.f=r.as.l()
q=r.as.l()
if(!(q<8))return A.a(B.bM,q)
r.r=B.bM[q]},
iF(){var t,s,r,q,p,o,n=this,m=n.at
m.d=m.b
for(m=n.z;t=n.at,t.d<t.c;){s=t.k()
r=n.at.l()
t=n.at
q=J.d(t.a,t.d++)
n.at.af(q)
if((q&1)===0)++n.at.d
q=n.at.k()
t=n.at
p=t.aj(q)
o=t.d+(p.c-p.d)
t.d=o
if((q&1)===1)t.d=o+1
if(s===943868237)m.i(0,r,new A.fC())}},
iG(){var t,s,r,q,p,o,n,m,l,k,j=this,i=j.ax
i.d=i.b
t=i.k()
if((t&1)!==0)++t
s=j.ax.ab(t)
i=j.w
B.c.du(i)
if(t>0){r=s.l()
q=$.ac()
q.$flags&2&&A.c(q)
q[0]=r
r=$.aj()
if(0>=r.length)return A.a(r,0)
p=r[0]
if(p<0)p=-p
for(r=u.N,q=u.ha,o=u.l,n=u.af,m=0;m<p;++m){l=new A.fF(A.O(r,q),A.k([],o),A.k([],n))
l.fN(s)
B.c.M(i,l)}}for(m=0;m<i.length;++m)i[m].jt(s,j)
t=j.ax.k()
k=j.ax.ab(t)
if(t>0){k.l()
k.l()
k.l()
k.l()
k.l()
k.l()
k.D()}},
iI(){var t,s,r,q,p,o,n=this,m=n.ay
m.d=m.b
t=m.l()
if(t===1){m=n.b
s=n.e
s===$&&A.b()
r=m*s
q=new Uint16Array(r)
for(p=0;p<r;++p)q[p]=n.ay.l()}else q=null
n.x=u.w.a(A.k([],u.Y))
p=0
for(;;){m=n.e
m===$&&A.b()
if(!(p<m))break
m=n.x
s=n.ay
s.toString
o=p===3?-1:p
o=new A.c7(o)
o.f4(s,n.a,n.b,n.f,t,q,p)
B.c.M(m,o);++p}n.y=A.kN(n.r,n.f,n.a,n.b,n.x)},
$iG:1}
A.fC.prototype={}
A.fF.prototype={
fN(a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a3.k(),a2=$.I()
a2.$flags&2&&A.c(a2)
a2[0]=a1
a1=$.Z()
if(0>=a1.length)return A.a(a1,0)
a0.a=a1[0]
a2[0]=a3.k()
a0.b=a1[0]
a2[0]=a3.k()
a0.c=a1[0]
a2[0]=a3.k()
a1=a1[0]
a0.d=a1
a2=a0.b
a2.toString
a0.e=a1-a2
a2=a0.c
a1=a0.a
a1.toString
a0.f=a2-a1
a0.as=u.w.a(A.k([],u.Y))
t=a3.l()
for(s=0;s<t;++s){a1=a3.l()
a2=$.ac()
a2.$flags&2&&A.c(a2)
a2[0]=a1
a1=$.aj()
if(0>=a1.length)return A.a(a1,0)
r=a1[0]
a3.k()
B.c.M(a0.as,new A.c7(r))}q=a3.k()
if(q!==943868237)throw A.f(A.m("Invalid PSD layer signature: "+B.a.d_(q,16)))
a0.r=a3.k()
a0.w=a3.D()
a3.D()
a0.y=a3.D()
if(a3.D()!==0)throw A.f(A.m("Invalid PSD layer data"))
p=a3.k()
o=a3.ab(p)
if(p>0){p=o.k()
if(p>0){n=o.ab(p)
a1=n.d
n.k()
n.k()
n.k()
n.k()
n.D()
n.D()
if(n.c-a1===20)n.d+=2
else{n.D()
n.D()
n.k()
n.k()
n.k()
n.k()}}p=o.k()
if(p>0)new A.hT().fL(o.ab(p))
p=o.D()
o.af(p)
m=4-B.a.a1(p,4)-1
if(m>0)o.d+=m
for(a1=o.c,a2=a0.ay,l=a0.cy,k=u.t,j=u.cE;o.d<a1;){q=o.k()
if(q!==943868237)throw A.f(A.m("PSD invalid signature for layer additional data: "+B.a.d_(q,16)))
i=o.af(4)
p=o.k()
h=o.aj(p)
g=o.d+(h.c-h.d)
o.d=g
if((p&1)===1)o.d=g+1
a2.i(0,i,A.mT(i,h))
if(i==="lrFX"){f=A.n(j.a(a2.n(0,"lrFX")).b,null,0)
f.l()
e=f.l()
for(d=0;d<e;++d){f.af(4)
c=f.af(4)
b=f.k()
if(c==="dsdw"){a=new A.fA()
B.c.M(l,a)
a.a=f.k()
f.k()
f.k()
f.k()
f.k()
a.sbA(A.k([f.l(),f.l(),f.l(),f.l(),f.l()],k))
f.af(8)
J.d(f.a,f.d++)
J.d(f.a,f.d++)
J.d(f.a,f.d++)
a.sbD(A.k([f.l(),f.l(),f.l(),f.l(),f.l()],k))}else if(c==="isdw"){a=new A.fE()
B.c.M(l,a)
a.a=f.k()
f.k()
f.k()
f.k()
f.k()
a.sbA(A.k([f.l(),f.l(),f.l(),f.l(),f.l()],k))
f.af(8)
J.d(f.a,f.d++)
J.d(f.a,f.d++)
J.d(f.a,f.d++)
a.sbD(A.k([f.l(),f.l(),f.l(),f.l(),f.l()],k))}else if(c==="oglw"){a=new A.fH()
B.c.M(l,a)
a.a=f.k()
f.k()
f.k()
a.sbA(A.k([f.l(),f.l(),f.l(),f.l(),f.l()],k))
f.af(8)
J.d(f.a,f.d++)
J.d(f.a,f.d++)
if(a.a===2)a.sbD(A.k([f.l(),f.l(),f.l(),f.l(),f.l()],k))}else if(c==="iglw"){a=new A.fD()
B.c.M(l,a)
a.a=f.k()
f.k()
f.k()
a.sbA(A.k([f.l(),f.l(),f.l(),f.l(),f.l()],k))
f.af(8)
J.d(f.a,f.d++)
J.d(f.a,f.d++)
if(a.a===2){J.d(f.a,f.d++)
a.sbD(A.k([f.l(),f.l(),f.l(),f.l(),f.l()],k))}}else if(c==="bevl"){a=new A.fz()
B.c.M(l,a)
a.a=f.k()
f.k()
f.k()
f.k()
f.af(8)
f.af(8)
a.sjj(A.k([f.l(),f.l(),f.l(),f.l(),f.l()],k))
a.sfm(A.k([f.l(),f.l(),f.l(),f.l(),f.l()],k))
J.d(f.a,f.d++)
J.d(f.a,f.d++)
J.d(f.a,f.d++)
J.d(f.a,f.d++)
J.d(f.a,f.d++)
J.d(f.a,f.d++)
if(a.a===2){a.sjz(A.k([f.l(),f.l(),f.l(),f.l(),f.l()],k))
a.sjA(A.k([f.l(),f.l(),f.l(),f.l(),f.l()],k))}}else if(c==="sofi"){a=new A.fI()
B.c.M(l,a)
a.a=f.k()
f.af(4)
a.sbA(A.k([f.l(),f.l(),f.l(),f.l(),f.l()],k))
J.d(f.a,f.d++)
J.d(f.a,f.d++)
a.sbD(A.k([f.l(),f.l(),f.l(),f.l(),f.l()],k))}else f.d+=b}}}}},
jt(a,b){var t,s,r,q,p,o=this,n=0
for(;;){t=o.as
t===$&&A.b()
if(!(n<t.length))break
t=t[n]
s=o.e
s===$&&A.b()
r=o.f
r===$&&A.b()
t.jw(a,s,r,b.f);++n}s=b.r
r=b.f
q=o.e
q===$&&A.b()
p=o.f
p===$&&A.b()
o.cx=A.kN(s,r,q,p,t)}}
A.cS.prototype={}
A.hU.prototype={
aA(a,b){var t,s,r,q=null,p=A.kM(a)
this.a=p
t=1
if(t===1){p=p.eX()
return p}for(s=q,r=0;r<t;++r){p=this.a
b=p==null?q:p.eX()
if(b==null)continue
if(s==null){b.w=B.aX
s=b}else s.aG(b)}return s}}
A.fJ.prototype={}
A.cV.prototype={}
A.ag.prototype={
b5(a,b){var t=this
return new A.ag(t.a+b.a,t.b+b.b,t.c+b.c,t.d+b.d)}}
A.cT.prototype={$iG:1,
gK(){return this.b}}
A.cU.prototype={$iG:1,
gK(){return this.f}}
A.e2.prototype={$iG:1,
gK(){return this.b}}
A.aA.prototype={
sck(a){var t=this.a,s=this.b+1
t.$flags&2&&A.c(t)
if(!(s<t.length))return A.a(t,s)
t[s]=a},
cu(){var t,s=this.e,r=this.d
if(s){t=r>>>9
if(!(t<32))return A.a(B.p,t)
return new A.cV(B.p[t],B.p[r>>>4&31],B.t[r&15])}else return new A.cV(B.t[r>>>7&15],B.t[r>>>3&15],B.ah[r&7])},
cw(){var t,s=this.e,r=this.d
if(s){t=r>>>9
if(!(t<32))return A.a(B.p,t)
return new A.ag(B.p[t],B.p[r>>>4&31],B.t[r&15],255)}else return new A.ag(B.t[r>>>7&15],B.t[r>>>3&15],B.ah[r&7],B.ah[r>>>11&7])},
cv(){var t,s=this.r,r=this.f
if(s){t=r>>>10
if(!(t<32))return A.a(B.p,t)
return new A.cV(B.p[t],B.p[r>>>5&31],B.p[r&31])}else return new A.cV(B.t[r>>>8&15],B.t[r>>>4&15],B.t[r&15])},
cz(){var t,s=this.r,r=this.f
if(s){t=r>>>10
if(!(t<32))return A.a(B.p,t)
return new A.ag(B.p[t],B.p[r>>>5&31],B.p[r&31],255)}else return new A.ag(B.t[r>>>8&15],B.t[r>>>4&15],B.t[r&15],B.ah[r>>>12&7])},
cb(){var t=this,s=t.c?1:0,r=t.d,q=t.e?1:0,p=t.f,o=t.r?1:0
return(s|(r&16383)<<1|q<<15|(p&32767)<<16|o<<31)>>>0},
bu(){var t,s=this,r=s.a,q=s.b+1
if(!(q<r.length))return A.a(r,q)
t=r[q]
s.c=(t&1)===1
s.sck(s.cb())
s.d=t>>>1&16383
s.sck(s.cb())
s.e=(t>>>15&1)===1
s.sck(s.cb())
s.f=t>>>16&32767
s.sck(s.cb())
s.r=(t>>>31&1)===1
s.sck(s.cb())}}
A.hY.prototype={
aS(a){var t,s=this,r=a.length,q=r-(r>>>1&1431655765)>>>0
q=(q&858993459)+(q>>>2&858993459)
if((q+(q>>>4)>>>0&252645135)*16843009>>>0>>>24===1){t=s.hb(a)
if(t!=null){s.a=a
return s.b=t}}t=s.ho(a)
if(t!=null){s.a=a
return s.b=t}t=s.hm(a)
if(t!=null){s.a=a
return s.b=t}return null},
ho(a){var t,s,r=A.q(a,!1,null,0)
if(r.k()!==52)return null
if(r.k()!==55727696)return null
t=A.k([0,0,0,0],u.t)
s=new A.cU(t)
r.k()
s.b=r.k()
B.c.i(t,0,r.D())
B.c.i(t,1,r.D())
B.c.i(t,2,r.D())
B.c.i(t,3,r.D())
r.k()
r.k()
s.f=r.k()
s.r=r.k()
r.k()
r.k()
r.k()
r.k()
s.Q=r.k()
return s},
hm(a){var t,s,r=A.q(a,!1,null,0)
if(r.k()!==52)return null
t=new A.cT()
t.b=r.k()
t.a=r.k()
r.k()
t.d=r.k()
r.k()
t.f=r.k()
r.k()
r.k()
r.k()
t.y=r.k()
s=r.k()
t.z=s
t.Q=r.k()
if(s!==559044176)return null
return t},
hb(a){var t,s,r,q,p,o,n=null,m=a.length,l=A.q(a,!1,n,0)
if(l.k()!==0)return n
t=new A.e2()
t.b=l.k()
t.a=l.k()
l.k()
l.k()
l.k()
l.k()
l.k()
l.k()
l.k()
s=l.k()
t.y=s
if(s===559044176)return n
r=0
q=8
if(!(m===32)){p=0
for(;;){if(!(p<10)){r=1
break}o=p<<1>>>0
if((B.a.J(64,o)&m)>>>0!==0){q=B.a.J(16,p)
r=1
break}if((B.a.J(128,o)&m)>>>0!==0){q=B.a.J(16,p)
break}++p}if(p===10)return n}if((r+1)*2===4)return n
t.b=t.a=q
return t},
ag(a){var t,s,r=this,q=r.b
if(q==null||r.a==null)return null
if(q instanceof A.e2){q=q.a
t=r.b.gK()
s=r.a
s.toString
return r.d8(q,t,s)}else if(q instanceof A.cT){q=r.a
q.toString
return r.hl(q)}else if(q instanceof A.cU){q=r.a
q.toString
return r.hn(q)}return null},
aA(a,b){if(this.aS(a)==null)return null
return this.ag(0)},
hl(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=a.length
if(f<52||h.b==null)return g
t=h.b
t.toString
u.fi.a(t)
s=A.q(a,!1,g,0)
s.d+=52
r=t.Q
if(r<1)r=(t.d&4096)!==0?6:1
if(r!==1)return g
q=t.a
p=t.b
if(q*p*t.f/8>f-52)return g
switch(t.d&255){case 16:o=A.J(g,g,B.f,0,B.i,p,g,0,4,g,B.f,q,!1)
for(t=o.a,t=t.gG(t);t.F();){n=t.gP()
m=J.d(s.a,s.d++)
l=J.d(s.a,s.d++)
n.sm(l&240)
n.sp((l&15)<<4)
n.sq(m&240)
n.st((m&15)<<4)}return o
case 17:o=A.J(g,g,B.f,0,B.i,p,g,0,4,g,B.f,q,!1)
for(t=o.a,t=t.gG(t);t.F();){n=t.gP()
k=s.l()
j=(k&1)!==0?255:0
n.sm(k>>>8&248)
n.sp(k>>>3&248)
n.sq((k&62)<<2)
n.st(j)}return o
case 18:o=A.J(g,g,B.f,0,B.i,p,g,0,4,g,B.f,q,!1)
for(t=o.a,t=t.gG(t);t.F();){n=t.gP()
n.sm(J.d(s.a,s.d++))
n.sp(J.d(s.a,s.d++))
n.sq(J.d(s.a,s.d++))
n.st(J.d(s.a,s.d++))}return o
case 19:o=A.J(g,g,B.f,0,B.i,p,g,0,3,g,B.f,q,!1)
for(t=o.a,t=t.gG(t);t.F();){n=t.gP()
k=s.l()
n.sm(k>>>8&248)
n.sp(k>>>3&252)
n.sq((k&31)<<3)}return o
case 20:o=A.J(g,g,B.f,0,B.i,p,g,0,3,g,B.f,q,!1)
for(t=o.a,t=t.gG(t);t.F();){n=t.gP()
k=s.l()
n.sm((k&31)<<3)
n.sp(k>>>2&248)
n.sq(k>>>7&248)}return o
case 21:o=A.J(g,g,B.f,0,B.i,p,g,0,3,g,B.f,q,!1)
for(t=o.a,t=t.gG(t);t.F();){n=t.gP()
n.sm(J.d(s.a,s.d++))
n.sp(J.d(s.a,s.d++))
n.sq(J.d(s.a,s.d++))}return o
case 22:o=A.J(g,g,B.f,0,B.i,p,g,0,1,g,B.f,q,!1)
for(t=o.a,t=t.gG(t);t.F();)t.gP().sm(J.d(s.a,s.d++))
return o
case 23:o=A.J(g,g,B.f,0,B.i,p,g,0,4,g,B.f,q,!1)
for(t=o.a,t=t.gG(t);t.F();){n=t.gP()
j=J.d(s.a,s.d++)
i=J.d(s.a,s.d++)
n.sm(i)
n.sp(i)
n.sq(i)
n.st(j)}return o
case 24:return g
case 25:return t.y===0?h.e3(q,p,s.a0()):h.d8(q,p,s.a0())}return g},
hn(a){var t,s=this.b
if(!(s instanceof A.cU))return null
t=A.q(a,!1,null,0)
t.d=(t.d+=52)+s.Q
if(s.c[0]===0)switch(s.b){case 2:return this.e3(s.r,s.f,t.a0())
case 3:return this.d8(s.r,s.f,t.a0())}return null},
e3(c5,c6,c7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=A.J(b5,b5,B.f,0,B.i,c6,b5,0,3,b5,B.f,c5,!1),b7=c5/4|0,b8=b7-1,b9=J.al(B.e.gv(c7),0,null),c0=new A.aA(b9),c1=new A.aA(J.al(B.e.gv(c7),0,null)),c2=new A.aA(J.al(B.e.gv(c7),0,null)),c3=new A.aA(J.al(B.e.gv(c7),0,null)),c4=new A.aA(J.al(B.e.gv(c7),0,null))
for(t=b9.length,s=0,r=0;s<b7;++s,r+=4)for(q=0,p=0;q<b7;++q,p+=4){c0.b=A.b4(q,s)<<1>>>0
c0.bu()
o=c0.b
if(!(o<t))return A.a(b9,o)
n=b9[o]
m=c0.c?4:0
for(l=0,k=0;k<4;++k){j=(s+(k<2?-1:0)&b8)>>>0
i=(j+1&b8)>>>0
for(o=k+r,h=0;h<4;++h){g=(q+(h<2?-1:0)&b8)>>>0
f=(g+1&b8)>>>0
c1.b=A.b4(g,j)<<1>>>0
c1.bu()
c2.b=A.b4(f,j)<<1>>>0
c2.bu()
c3.b=A.b4(g,i)<<1>>>0
c3.bu()
c4.b=A.b4(f,i)<<1>>>0
c4.bu()
e=c1.cu()
if(!(l>=0&&l<16))return A.a(B.m,l)
d=B.m[l][0]
c=c2.cu()
b=B.m[l][1]
a=c3.cu()
a0=B.m[l][2]
a1=c4.cu()
a2=B.m[l][3]
a3=c1.cv()
a4=B.m[l][0]
a5=c2.cv()
a6=B.m[l][1]
a7=c3.cv()
a8=B.m[l][2]
a9=c4.cv()
b0=B.m[l][3]
b1=B.bz[m+n&3]
b2=b1[0]
b3=b1[1]
b4=b6.a
if(b4!=null)b4.a3(h+p,o,(e.a*d+c.a*b+a.a*a0+a1.a*a2)*b2+(a3.a*a4+a5.a*a6+a7.a*a8+a9.a*b0)*b3>>>7,(e.b*d+c.b*b+a.b*a0+a1.b*a2)*b2+(a3.b*a4+a5.b*a6+a7.b*a8+a9.b*b0)*b3>>>7,(e.c*d+c.c*b+a.c*a0+a1.c*a2)*b2+(a3.c*a4+a5.c*a6+a7.c*a8+a9.c*b0)*b3>>>7)
n=n>>>2;++l}}}return b6},
d8(b3,b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=A.J(a3,a3,B.f,0,B.i,b4,a3,0,4,a3,B.f,b3,!1),a5=b3/4|0,a6=a5-1,a7=J.al(B.e.gv(b5),0,null),a8=new A.aA(a7),a9=new A.aA(J.al(B.e.gv(b5),0,null)),b0=new A.aA(J.al(B.e.gv(b5),0,null)),b1=new A.aA(J.al(B.e.gv(b5),0,null)),b2=new A.aA(J.al(B.e.gv(b5),0,null))
for(t=a7.length,s=0,r=0;s<a5;++s,r+=4)for(q=0,p=0;q<a5;++q,p+=4){a8.b=A.b4(q,s)<<1>>>0
a8.bu()
o=a8.b
if(!(o<t))return A.a(a7,o)
n=a7[o]
m=a8.c?4:0
for(l=0,k=0;k<4;++k){j=(s+(k<2?-1:0)&a6)>>>0
i=(j+1&a6)>>>0
for(o=k+r,h=0;h<4;++h){g=(q+(h<2?-1:0)&a6)>>>0
f=(g+1&a6)>>>0
a9.b=A.b4(g,j)<<1>>>0
a9.bu()
b0.b=A.b4(f,j)<<1>>>0
b0.bu()
b1.b=A.b4(g,i)<<1>>>0
b1.bu()
b2.b=A.b4(f,i)<<1>>>0
b2.bu()
e=a9.cw()
if(!(l>=0&&l<16))return A.a(B.m,l)
d=B.m[l][0]
c=b0.cw()
b=B.m[l][1]
b=new A.ag(e.a*d,e.b*d,e.c*d,e.d*d).b5(0,new A.ag(c.a*b,c.b*b,c.c*b,c.d*b))
c=b1.cw()
d=B.m[l][2]
d=b.b5(0,new A.ag(c.a*d,c.b*d,c.c*d,c.d*d))
c=b2.cw()
b=B.m[l][3]
a=d.b5(0,new A.ag(c.a*b,c.b*b,c.c*b,c.d*b))
b=a9.cz()
c=B.m[l][0]
d=b0.cz()
e=B.m[l][1]
e=new A.ag(b.a*c,b.b*c,b.c*c,b.d*c).b5(0,new A.ag(d.a*e,d.b*e,d.c*e,d.d*e))
d=b1.cz()
c=B.m[l][2]
c=e.b5(0,new A.ag(d.a*c,d.b*c,d.c*c,d.d*c))
d=b2.cz()
e=B.m[l][3]
a0=c.b5(0,new A.ag(d.a*e,d.b*e,d.c*e,d.d*e))
a1=B.bz[m+n&3]
e=a1[0]
d=a1[1]
c=a1[2]
b=a1[3]
a2=a4.a
if(a2!=null)a2.al(h+p,o,a.a*e+a0.a*d>>>7,a.b*e+a0.b*d>>>7,a.c*e+a0.c*d>>>7,a.d*c+a0.d*b>>>7)
n=n>>>2;++l}}}return a4}}
A.e9.prototype={
bS(a){var t,s,r=this
if(a.c-a.d<18)return
r.a=a.D()
r.b=a.D()
t=a.D()
if(t<12){if(!(t>=0))return A.a(B.bx,t)
s=B.bx[t]}else s=B.ak
r.c=s
a.l()
r.e=a.l()
r.f=a.D()
a.l()
a.l()
r.x=a.l()
r.y=a.l()
r.z=a.D()
r.Q=a.D()},
f1(){var t=this,s=t.z
if(s!==8&&s!==16&&s!==24&&s!==32)return!1
s=t.c
if(s===B.D||s===B.E){if(t.e>256||t.b!==1)return!1
s=t.f
if(s!==16&&s!==24&&s!==32)return!1}else if(t.b===1)return!1
return!0},
$iG:1}
A.ai.prototype={
ad(){return"TgaImageType."+this.b}}
A.i0.prototype={
aA(a,b){if(this.aS(a)==null)return null
return this.ag(0)},
aS(a){var t,s,r,q,p=this
p.a=new A.e9(B.ak)
t=A.q(a,!1,null,0)
p.b=t
s=t.ab(18)
p.a.bS(s)
t=p.a
if(!t.f1())return null
r=p.b
r.d+=t.a
q=t.c
if(q===B.D||q===B.E)t.as=r.ab(t.e*B.a.j(t.f,3)).a0()
t=p.a
t.ax=p.b.d
return t},
ag(a){var t=this,s=t.a
if(s==null)return null
s=s.c
if(s===B.c1)return t.e2()
else if(s===B.c0||s===B.E)return t.hq()
else if(s===B.D)return t.e2()
return null},
dZ(a,b){var t,s,r,q,p,o,n,m=this,l=A.q(a,!1,null,0),k=m.a.f
if(k===16){k=m.b
k===$&&A.b()
t=k.l()
s=t>>>7&248
r=t>>>2&248
q=(t&31)<<3
p=(t&32768)!==0?0:255
for(o=0;o<m.a.e;++o){b.bs(o,s)
b.bq(o,r)
b.bp(o,q)
b.bo(o,p)}}else{n=k===32
for(o=0;o<m.a.e;++o){q=J.d(l.a,l.d++)
r=J.d(l.a,l.d++)
s=J.d(l.a,l.d++)
p=n?J.d(l.a,l.d++):255
b.bs(o,s)
b.bq(o,r)
b.bp(o,q)
b.bo(o,p)}}},
hq(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.a,c=d.z,b=c===16,a=b||c===32,a0=d.x,a1=d.y,a2=a?4:3
d=d.c
t=A.J(e,e,B.f,0,B.i,a1,e,0,a2,e,B.f,a0,d===B.D||d===B.E)
d=t.a
if((d==null?e:d.gR())!=null){d=f.a.as
d.toString
a0=t.a
a0=a0==null?e:a0.gR()
a0.toString
f.dZ(d,a0)}s=t.gX()
r=t.gK()-1
d=c===8
q=0
for(;;){a0=f.b
a0===$&&A.b()
a1=a0.d
if(!(a1<a0.c&&r>=0))break
a2=a0.a
a0.d=a1+1
p=J.d(a2,a1)
o=(p&127)+1
n=0
if((p&128)!==0)if(d){a0=f.b
m=J.d(a0.a,a0.d++)
for(l=0;l<o;++l){k=q+1
a0=t.a
if(a0!=null)a0.aF(q,r,m)
if(k>=s){--r
if(r<0){q=n
break}q=0}else q=k}}else{a0=f.b
if(b){j=a0.l()
m=j>>>7&248
i=j>>>2&248
h=(j&31)<<3
g=(j&32768)!==0?0:255
for(l=0;l<o;++l){k=q+1
a0=t.a
if(a0!=null)a0.al(q,r,m,i,h,g)
if(k>=s){--r
if(r<0){q=n
break}q=0}else q=k}}else{h=J.d(a0.a,a0.d++)
a0=f.b
i=J.d(a0.a,a0.d++)
a0=f.b
m=J.d(a0.a,a0.d++)
if(a){a0=f.b
g=J.d(a0.a,a0.d++)}else g=255
for(l=0;l<o;++l){k=q+1
a0=t.a
if(a0!=null)a0.al(q,r,m,i,h,g)
if(k>=s){--r
if(r<0){q=n
break}q=0}else q=k}}}else if(d)for(l=0;l<o;++l){a0=f.b
m=J.d(a0.a,a0.d++)
k=q+1
a0=t.a
if(a0!=null)a0.aF(q,r,m)
if(k>=s){--r
if(r<0){q=n
break}q=0}else q=k}else if(b)for(l=0;l<o;++l){j=f.b.l()
g=(j&32768)!==0?0:255
k=q+1
a0=t.a
if(a0!=null)a0.al(q,r,j>>>7&248,j>>>2&248,(j&31)<<3,g)
a0=f.b
if(a0.d>=a0.c){q=k
break}if(k>=s){--r
if(r<0){q=n
break}q=0}else q=k}else for(l=0;l<o;++l){a0=f.b
h=J.d(a0.a,a0.d++)
a0=f.b
i=J.d(a0.a,a0.d++)
a0=f.b
m=J.d(a0.a,a0.d++)
if(a){a0=f.b
g=J.d(a0.a,a0.d++)}else g=255
k=q+1
a0=t.a
if(a0!=null)a0.al(q,r,m,i,h,g)
if(k>=s){--r
if(r<0){q=n
break}q=0}else q=k}if(q>=s){--r
if(r<0)break
q=0}}return t},
e2(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=e.b
c===$&&A.b()
t=e.a
c.d=t.ax
s=t.z
c=s===16
r=!0
if(!c)if(s!==32){q=t.c
if(q===B.D||q===B.E){q=t.f
q=q===16||q===32}else q=!1
r=q}q=t.x
p=t.y
o=r?4:3
t=t.c
n=A.J(d,d,B.f,0,B.i,p,d,0,o,d,B.f,q,t===B.D||t===B.E)
t=e.a
q=t.c
if(q===B.D||q===B.E){t=t.as
t.toString
q=n.a
q=q==null?d:q.gR()
q.toString
e.dZ(t,q)}if(s===8)for(m=n.gK()-1;m>=0;--m){l=0
for(;;){c=n.a
c=c==null?d:c.a
if(!(l<(c==null?0:c)))break
c=e.b
k=J.d(c.a,c.d++)
c=n.a
if(c!=null)c.aF(l,m,k);++l}}else if(c)for(m=n.gK()-1;m>=0;--m){l=0
for(;;){c=n.a
c=c==null?d:c.a
if(!(l<(c==null?0:c)))break
j=e.b.l()
i=(j&32768)!==0?0:255
c=n.a
if(c!=null)c.al(l,m,j>>>7&248,j>>>2&248,(j&31)<<3,i);++l}}else for(m=n.gK()-1;m>=0;--m){l=0
for(;;){c=n.a
c=c==null?d:c.a
if(!(l<(c==null?0:c)))break
c=e.b
h=J.d(c.a,c.d++)
c=e.b
g=J.d(c.a,c.d++)
c=e.b
f=J.d(c.a,c.d++)
if(r){c=e.b
i=J.d(c.a,c.d++)}else i=255
c=n.a
if(c!=null)c.al(l,m,f,g,h,i);++l}}return n}}
A.i1.prototype={
ae(a){var t,s,r,q,p,o=this
if(a===0)return 0
if(o.c===0){o.c=8
o.b=o.a.D()}for(t=o.a,s=0;r=o.c,a>r;){q=B.a.U(s,r)
p=o.b
if(!(r>=0&&r<9))return A.a(B.w,r)
s=q+(p&B.w[r])
a-=r
o.c=8
o.b=J.d(t.a,t.d++)}if(a>0){if(r===0){o.c=8
o.b=t.D()}t=B.a.U(s,a)
r=o.b
q=o.c-a
r=B.a.b7(r,q)
if(!(a<9))return A.a(B.w,a)
s=t+(r&B.w[a])
o.c=q}return s}}
A.fO.prototype={
C(a){var t=this,s=t.a,r=$.k0().n(0,s)
if(r!=null)return r.a+": "+t.b.C(0)+" "+t.c
return"<"+s+">: "+t.b.C(0)+" "+t.c},
be(){var t,s,r,q,p=this,o=p.e
if(o!=null)return o
o=p.f
o.d=p.d
t=p.c
s=p.b
if(s!==B.d){r=s.a
if(!(r<14))return A.a(B.a5,r)
r=B.a5[r]}else r=0
q=o.ab(t*r)
switch(s.a){case 1:return p.e=new A.b0(new Uint8Array(A.w(q.ab(t).a0())))
case 2:return p.e=new A.bK(t===0?"":q.af(t-1))
case 7:return p.e=new A.b0(new Uint8Array(A.w(q.ab(t).a0())))
case 3:return p.e=A.kq(q,t)
case 4:return p.e=A.kl(q,t)
case 5:return p.e=A.km(q,t)
case 11:return p.e=A.kr(q,t)
case 12:return p.e=A.kk(q,t)
case 6:return p.e=new A.bm(new Int8Array(A.w(J.j1(B.e.gv(q.a0()),0,t))))
case 8:return p.e=A.kp(q,t)
case 9:return p.e=A.kn(q,t)
case 10:return p.e=A.ko(q,t)
case 13:case 0:return null}}}
A.i3.prototype={
j6(a,b,c,d){var t,s,r,q=this
q.r=b
q.x=q.w=0
t=B.a.W(q.a+7,8)
for(s=0,r=0;r<d;++r){q.d6(a,s,c)
s+=t}},
d6(a,b,c){var t,s,r,q,p,o,n,m,l=this
l.d=0
for(t=l.a,s=!0;c<t;){while(s){r=l.bF(10)
if(!(r<1024))return A.a(B.ab,r)
q=B.ab[r]
p=B.a.j(q,1)&15
if(p===12){r=(r<<2&12|l.aT(2))>>>0
if(!(r<16))return A.a(B.C,r)
q=B.C[r]
o=B.a.j(q,1)
c+=B.a.j(q,4)&4095
l.az(4-(o&7))}else if(p===0)throw A.f(A.m("TIFFFaxDecoder0"))
else if(p===15)throw A.f(A.m("TIFFFaxDecoder1"))
else{c+=B.a.j(q,5)&2047
l.az(10-p)
if((q&1)===0){B.c.i(l.f,l.d++,c)
s=!1}}}if(c===t){if(l.z===2)if(l.w!==0){t=l.x
t.toString
l.x=t+1
l.w=0}break}while(!s){r=l.aT(4)
if(!(r<16))return A.a(B.a3,r)
q=B.a3[r]
n=q>>>5&2047
m=!0
if(n===100){r=l.bF(9)
if(!(r<512))return A.a(B.a6,r)
q=B.a6[r]
p=B.a.j(q,1)&15
n=B.a.j(q,5)&2047
if(p===12){l.az(5)
r=l.aT(4)
if(!(r<16))return A.a(B.C,r)
q=B.C[r]
o=B.a.j(q,1)
n=B.a.j(q,4)&4095
l.b1(a,b,c,n)
c+=n
l.az(4-(o&7))}else if(p===15)throw A.f(A.m("TIFFFaxDecoder2"))
else{l.b1(a,b,c,n)
c+=n
l.az(9-p)
if((q&1)===0){B.c.i(l.f,l.d++,c)
s=m}}}else{if(n===200){r=l.aT(2)
if(!(r<4))return A.a(B.a2,r)
q=B.a2[r]
n=q>>>5&2047
l.b1(a,b,c,n)
c+=n
l.az(2-(q>>>1&15))
B.c.i(l.f,l.d++,c)}else{l.b1(a,b,c,n)
c+=n
l.az(4-(q>>>1&15))
B.c.i(l.f,l.d++,c)}s=m}}if(c===t){if(l.z===2)if(l.w!==0){t=l.x
t.toString
l.x=t+1
l.w=0}break}}B.c.i(l.f,l.d++,c)},
j7(a0,a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
a.r=a1
a.z=3
a.x=a.w=0
t=a.a
s=B.a.W(t+7,8)
r=A.Y(2,null,!1,u.v)
a.at=a4&1
a.as=a4>>>2&1
if(a.eq()!==1)throw A.f(A.m("TIFFFaxDecoder3"))
a.d6(a0,0,a2)
for(q=s,p=1;p<a3;++p){if(a.eq()===0){o=a.e
a.e=a.f
a.f=o
a.y=0
n=a2
m=-1
l=!0
k=0
for(;;){n.toString
if(!(n<t))break
a.ec(m,l,r)
j=r[0]
i=r[1]
h=a.aT(7)
if(!(h<128))return A.a(B.a9,h)
h=B.a9[h]&255
g=h>>>3&15
f=h&7
if(g===0){if(!l){i.toString
a.b1(a0,q,n,i-n)}a.az(7-f)
n=i
m=n}else if(g===1){a.az(7-f)
e=k+1
d=e+1
if(l){n+=a.cH()
B.c.i(a.f,k,n)
c=a.cG()
a.b1(a0,q,n,c)
n+=c
B.c.i(a.f,e,n)}else{c=a.cG()
a.b1(a0,q,n,c)
n+=c
B.c.i(a.f,k,n)
n+=a.cH()
B.c.i(a.f,e,n)}k=d
m=n}else{if(g<=8){j.toString
b=j+(g-5)
e=k+1
B.c.i(a.f,k,b)
l=!l
if(l)a.b1(a0,q,n,b-n)
a.az(7-f)}else throw A.f(A.m("TIFFFaxDecoder4"))
n=b
k=e
m=n}}B.c.i(a.f,k,n)
a.d=k+1}else a.d6(a0,q,a2)
q+=s}},
jb(a4,a5,a6,a7,a8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this
a3.r=a5
a3.z=4
a3.x=a3.w=0
t=a3.a
s=B.a.W(t+7,8)
r=A.Y(2,null,!1,u.v)
q=a3.f
a3.d=0
a3.d=1
B.c.i(q,0,t)
B.c.i(q,a3.d++,t)
for(p=0,o=0;o<a7;++o){n=a3.e
a3.e=a3.f
a3.f=n
a3.y=0
m=a6
l=-1
k=!0
j=0
for(;;){m.toString
if(!(m<t))break
a3.ec(l,k,r)
i=r[0]
h=r[1]
g=a3.aT(7)
if(!(g<128))return A.a(B.a9,g)
g=B.a9[g]&255
f=g>>>3&15
e=g&7
if(f===0){if(!k){h.toString
a3.b1(a4,p,m,h-m)}a3.az(7-e)
m=h
l=m}else if(f===1){a3.az(7-e)
d=j+1
c=d+1
if(k){m+=a3.cH()
B.c.i(n,j,m)
b=a3.cG()
a3.b1(a4,p,m,b)
m+=b
B.c.i(n,d,m)}else{b=a3.cG()
a3.b1(a4,p,m,b)
m+=b
B.c.i(n,j,m)
m+=a3.cH()
B.c.i(n,d,m)}j=c
l=m}else if(f<=8){i.toString
a=i+(f-5)
d=j+1
B.c.i(n,j,a)
k=!k
if(k)a3.b1(a4,p,m,a-m)
a3.az(7-e)
m=a
j=d
l=m}else if(f===11){if(a3.aT(3)!==7)throw A.f(A.m("TIFFFaxDecoder5"))
for(a0=0,a1=!1;!a1;k=a2){while(a3.aT(1)!==1)++a0
if(a0>5){a0-=6
if(!k&&a0>0){d=j+1
B.c.i(n,j,m)
j=d}m+=a0
if(a0>0)k=!0
a2=a3.aT(1)===0
if(a2){if(!k){d=j+1
B.c.i(n,j,m)
j=d}}else if(k){d=j+1
B.c.i(n,j,m)
j=d}k=a2
a1=!0}a2=a0===5
if(a2){if(!k){d=j+1
B.c.i(n,j,m)
j=d}m+=a0}else{m+=a0
d=j+1
B.c.i(n,j,m)
a3.b1(a4,p,m,1);++m
j=d}}}else throw A.f(A.m("TIFFFaxDecoder5 "+f))}B.c.i(n,j,m)
a3.d=j+1
p+=s}},
cH(){var t,s,r,q,p,o,n=this
for(t=0,s=!0;s;){r=n.bF(10)
if(!(r<1024))return A.a(B.ab,r)
q=B.ab[r]
p=B.a.j(q,1)&15
if(p===12){r=(r<<2&12|n.aT(2))>>>0
if(!(r<16))return A.a(B.C,r)
q=B.C[r]
o=B.a.j(q,1)
t+=B.a.j(q,4)&4095
n.az(4-(o&7))}else if(p===0)throw A.f(A.m("TIFFFaxDecoder0"))
else if(p===15)throw A.f(A.m("TIFFFaxDecoder1"))
else{t+=B.a.j(q,5)&2047
n.az(10-p)
if((q&1)===0)s=!1}}return t},
cG(){var t,s,r,q,p,o,n,m=this
for(t=0,s=!1;!s;){r=m.aT(4)
if(!(r<16))return A.a(B.a3,r)
q=B.a3[r]
p=q>>>5&2047
if(p===100){r=m.bF(9)
if(!(r<512))return A.a(B.a6,r)
q=B.a6[r]
o=B.a.j(q,1)&15
n=B.a.j(q,5)
if(o===12){m.az(5)
r=m.aT(4)
if(!(r<16))return A.a(B.C,r)
q=B.C[r]
n=B.a.j(q,1)
t+=B.a.j(q,4)&4095
m.az(4-(n&7))}else if(o===15)throw A.f(A.m("TIFFFaxDecoder2"))
else{t+=n&2047
m.az(9-o)
if((q&1)===0)s=!0}}else{if(p===200){r=m.aT(2)
if(!(r<4))return A.a(B.a2,r)
q=B.a2[r]
t+=q>>>5&2047
m.az(2-(q>>>1&15))}else{t+=p
m.az(4-(q>>>1&15))}s=!0}}return t},
eq(){var t,s,r=this,q="TIFFFaxDecoder8",p=r.as
if(p===0){if(r.bF(12)!==1)throw A.f(A.m("TIFFFaxDecoder6"))}else if(p===1){p=r.w
p.toString
t=8-p
if(r.bF(t)!==0)throw A.f(A.m(q))
if(t<4)if(r.bF(8)!==0)throw A.f(A.m(q))
while(s=r.bF(8),s!==1)if(s!==0)throw A.f(A.m(q))}if(r.at===0)return 1
else return r.aT(1)},
ec(a,b,c){var t,s,r,q,p,o,n=this
u.cP.a(c)
t=n.e
s=n.d
r=n.y
q=r>0?r-1:0
q=b?(q&4294967294)>>>0:(q|1)>>>0
for(r=t.length,p=q;p<s;p+=2){if(!(p<r))return A.a(t,p)
o=t[p]
o.toString
a.toString
if(o>a){n.y=p
B.c.i(c,0,o)
break}}o=p+1
if(o<s){if(!(o<r))return A.a(t,o)
B.c.i(c,1,t[o])}},
b1(a,b,c,d){var t,s,r,q,p,o=8*b+A.v(c),n=o+d,m=B.a.j(o,3),l=o&7
if(l>0){t=B.a.U(1,7-l)
s=J.d(a.a,a.d+m)
for(;;){if(!(t>0&&o<n))break
s=(s|t)>>>0
t=t>>>1;++o}a.i(0,m,s)}m=B.a.j(o,3)
for(r=n-7;o<r;m=q){q=m+1
J.x(a.a,a.d+m,255)
o+=8}while(o<n){m=B.a.j(o,3)
r=J.d(a.a,a.d+m)
p=B.a.U(1,7-(o&7))
J.x(a.a,a.d+m,(r|p)>>>0);++o}},
bF(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.r
f===$&&A.b()
t=f.d
s=f.c-t-1
r=g.x
q=g.c
p=0
o=0
if(q===1){r.toString
n=J.d(f.a,t+r)
if(!(r===s)){f=r+1
t=g.r
q=t.a
t=t.d
if(f===s)p=J.d(q,t+f)
else{p=J.d(q,t+f)
f=g.r
o=J.d(f.a,f.d+(r+2))}}}else if(q===2){r.toString
n=B.Q[J.d(f.a,t+r)&255]
if(!(r===s)){f=r+1
t=g.r
q=t.a
t=t.d
if(f===s)p=B.Q[J.d(q,t+f)&255]
else{p=B.Q[J.d(q,t+f)&255]
f=g.r
o=B.Q[J.d(f.a,f.d+(r+2))&255]}}}else throw A.f(A.m("TIFFFaxDecoder7"))
f=g.w
f.toString
m=8-f
l=a-m
if(l>8){k=l-8
j=8}else{j=l
k=0}f=g.x
f.toString
f=g.x=f+1
if(!(m>=0&&m<9))return A.a(B.w,m)
i=B.a.U(n&B.w[m],l)
if(!(j>=0))return A.a(B.O,j)
h=B.a.a_(p&B.O[j],8-j)
if(k!==0){h=B.a.U(h,k)
if(!(k<9))return A.a(B.O,k)
h|=B.a.a_(o&B.O[k],8-k)
g.x=f+1
g.w=k}else if(j===8){g.w=0
g.x=f+1}else g.w=j
return(i|h)>>>0},
aT(a){var t,s,r,q,p,o,n,m,l,k,j=this,i=j.r
i===$&&A.b()
t=i.d
s=i.c-t-1
r=j.x
q=j.c
p=0
if(q===1){r.toString
o=J.d(i.a,t+r)
if(!(r===s)){i=j.r
p=J.d(i.a,i.d+(r+1))}}else if(q===2){r.toString
o=B.Q[J.d(i.a,t+r)&255]
if(!(r===s)){i=j.r
p=B.Q[J.d(i.a,i.d+(r+1))&255]}}else throw A.f(A.m("TIFFFaxDecoder7"))
i=j.w
i.toString
n=8-i
m=a-n
l=n-a
if(l>=0){if(!(n>=0&&n<9))return A.a(B.w,n)
k=B.a.a_(o&B.w[n],l)
i+=a
j.w=i
if(i===8){j.w=0
i=j.x
i.toString
j.x=i+1}}else{if(!(n>=0&&n<9))return A.a(B.w,n)
k=B.a.U(o&B.w[n],-l)
if(!(m>=0&&m<9))return A.a(B.O,m)
k=(k|B.a.a_(p&B.O[m],8-m))>>>0
i=j.x
i.toString
j.x=i+1
j.w=m}return k},
az(a){var t,s=this,r=s.w
r.toString
t=r-a
if(t<0){r=s.x
r.toString
s.x=r-1
s.w=8+t}else s.w=t}}
A.fP.prototype={
fO(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=A.n(a,d,0),b=a.l()
for(t=e.a,s=0;s<b;++s){r=a.l()
q=a.l()
p=a.k()
if(q>13){a.d+=4
continue}o=B.bt[q]
if(p*B.a5[q]>4)n=a.k()
else{n=a.d
a.d=n+4}m=new A.fO(r,o,p,n,c)
t.i(0,r,m)
if(r===256){l=m.be()
l=l==null?d:l.h(0)
e.b=l==null?0:l}else if(r===257){l=m.be()
l=l==null?d:l.h(0)
e.c=l==null?0:l}else if(r===262){k=m.be()
j=k==null?d:k.h(0)
if(j==null)j=17
if(j<17){if(!(j>=0))return A.a(B.bo,j)
e.d=B.bo[j]}else e.d=B.aJ}else if(r===259){l=m.be()
l=l==null?d:l.h(0)
e.e=l==null?0:l}else if(r===258){l=m.be()
l=l==null?d:l.h(0)
e.f=l==null?0:l}else if(r===277){l=m.be()
l=l==null?d:l.h(0)
e.r=l==null?0:l}else if(r===317){l=m.be()
l=l==null?d:l.h(0)
e.Q=l==null?0:l}else if(r===339){l=m.be()
k=l==null?d:l.h(0)
if(k==null)k=0
if(!(k>=0&&k<4))return A.a(B.br,k)
e.x=B.br[k]}else if(r===320){k=m.be()
if(k!=null){l=J.m_(B.e.gv(k.bg()))
e.id=l
e.k1=0
l=l.length/3|0
e.k2=l
e.k3=l*2}}}l=e.id
i=l!=null
if(i&&e.d===B.aK)e.r=1
if(e.b===0||e.c===0)return
if(i&&e.f===8){h=l.length
for(i=l.$flags|0,s=0;s<h;++s){g=l[s]
i&2&&A.c(l)
l[s]=g>>>8}}if(e.d===B.aI)e.z=!0
e.w=e.r
if(t.aO(324)){e.ay=e.c0(322)
e.ch=e.c0(323)
e.CW=e.cP(324)
e.cx=e.cP(325)}else{e.ay=e.cO(322,e.b)
if(!t.aO(278))e.ch=e.cO(323,e.c)
else{f=e.c0(278)
if(f===-1)e.ch=e.c
else e.ch=f}e.CW=e.cP(273)
e.cx=e.cP(279)}l=e.b
i=e.ay
e.cy=B.a.av(l+i-1,i)
i=e.c
l=e.ch
e.db=B.a.av(i+l-1,l)
e.dy=e.cO(266,1)
e.fr=e.c0(292)
e.fx=e.c0(293)
e.c0(338)
switch(e.d.a){case 0:case 1:t=e.f
if(t===1&&e.r===1)e.y=B.aH
else if(t===4&&e.r===1)e.y=B.jC
else if(B.a.a1(t,8)===0){t=e.r
if(t===1)e.y=B.jD
else if(t===2)e.y=B.jE
else e.y=B.Y}break
case 2:if(B.a.a1(e.f,8)===0){t=e.r
if(t===3)e.y=B.c3
else if(t===4)e.y=B.jG
else e.y=B.Y}break
case 3:t=!1
if(e.r===1)if(e.id!=null){t=e.f
t=t===4||t===8||t===16}if(t)e.y=B.jF
break
case 4:if(e.f===1&&e.r===1)e.y=B.aH
break
case 6:if(e.e===7&&e.f===8&&e.r===3)e.y=B.c3
else{if(t.aO(530)){k=t.n(0,530).be()
e.as=k.h(0)
t=e.at=k.a4(0,1)}else t=e.at=e.as=2
l=e.as
l===$&&A.b()
if(l*t===1)e.y=B.Y
else if(e.f===8&&e.r===3)e.y=B.jH}break
case 5:if(B.a.a1(e.f,8)===0)e.y=B.Y
t=e.r
if(t===4)e.w=3
else if(t===5)e.w=4
break
default:if(B.a.a1(e.f,8)===0)e.y=B.Y
break}},
bG(a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=c.x,a0=a===B.X,a1=a===B.h
a=c.f
if(a===1)t=B.v
else if(a===2)t=B.x
else{if(a===4)a=B.y
else if(a0&&a===16)a=B.A
else if(a0&&a===32)a=B.G
else if(a0&&a===64)a=B.I
else if(a1&&a===8)a=B.J
else if(a1&&a===16)a=B.K
else if(a1&&a===32)a=B.L
else if(a===16)a=B.l
else a=a===32?B.H:B.f
t=a}s=c.id!=null&&c.d===B.aK
r=s?3:c.w
a=c.b
q=A.J(b,b,t,0,B.i,c.c,b,0,r,b,t,a,s)
if(s){a=q.a
a=a==null?b:a.gR()
a.toString
p=c.id
o=p.length
n=o/3|0
m=c.k1
m===$&&A.b()
l=c.k2
l===$&&A.b()
k=c.k3
k===$&&A.b()
for(j=k,i=l,h=m,g=0;g<n;++g,++h,++i,++j){if(j>=o)break
if(!(h<o))return A.a(p,h)
m=p[h]
if(!(i<o))return A.a(p,i)
a.aY(g,m,p[i],p[j])}}f=0
e=0
for(;;){a=c.db
a===$&&A.b()
if(!(f<a))break
d=0
for(;;){a=c.cy
a===$&&A.b()
if(!(d<a))break
c.hr(a2,q,d,f);++d;++e}++f}return q},
hr(b1,b2,b3,b4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null
if(a9.y===B.aH){a9.he(b1,b2,b3,b4)
return}q=a9.cy
q===$&&A.b()
p=b4*q+b3
q=a9.CW
if(!(p>=0&&p<q.length))return A.a(q,p)
b1.d=q[p]
q=a9.ay
o=b3*q
n=a9.ch
m=b4*n
l=a9.cx
if(!(p<l.length))return A.a(l,p)
t=l[p]
k=q*n*a9.r
q=a9.f
n=q===16
if(n)k*=2
else if(q===32)k*=4
s=null
if(q===8||n||q===32||q===64){q=a9.e
if(q===1)s=b1
else if(q===5){s=A.q(new Uint8Array(k),!1,b0,0)
r=A.kC()
try{r.eW(A.n(b1,t,0),s.a)}catch(j){}if(a9.Q===2)for(i=0;i<a9.ch;++i){h=a9.r
q=a9.ay
g=h*(i*q+1)
f=q*h
for(;h<f;++h){q=s
n=J.d(q.a,q.d+g)
l=s
e=a9.r
e=J.d(l.a,l.d+(g-e))
J.x(q.a,q.d+g,n+e);++g}}}else if(q===32773){s=A.q(new Uint8Array(k),!1,b0,0)
a9.e1(b1,k,s.a)}else if(q===32946)s=A.q(B.F.bP(b1.cr(0,0,t)),!1,b0,0)
else if(q===8)s=A.q(B.F.bP(b1.cr(0,0,t)),!1,b0,0)
else if(q===6||q===7){a9.i2(new A.fi().bG(u.D.a(b1.cr(0,0,t))),b2,o,m,a9.ay,a9.ch)
return}else throw A.f(A.m("Unsupported Compression Type: "+q))
d=A.k([0,0,0],u.t)
for(c=m,b=0;b<a9.ch;++b,++c)for(a=o,a0=0;a0<a9.ay;++a0,++a){q=s
if(q.d>=q.c||a>=a9.b||c>=a9.c)break
q=a9.r
if(q===1){q=a9.x
if(q===B.X){q=a9.f
if(q===32){q=s.k()
n=$.I()
n.$flags&2&&A.c(n)
n[0]=q
q=$.bC()
if(0>=q.length)return A.a(q,0)
a1=q[0]}else if(q===64)a1=s.cZ()
else if(q===16){q=s.l()
n=$.L
n=n!=null?n:A.N()
if(!(q<n.length))return A.a(n,q)
a1=n[q]}else a1=0
if(a<a9.b&&c<a9.c){q=b2.a
if(q!=null)q.aF(a,c,a1)}}else{n=a9.f
if(n===8)if(q===B.h){q=s
q=J.d(q.a,q.d++)
n=$.ad()
n.$flags&2&&A.c(n)
n[0]=q
q=$.ak()
if(0>=q.length)return A.a(q,0)
a1=q[0]}else{q=s
a1=J.d(q.a,q.d++)}else if(n===16)if(q===B.h){q=s.l()
n=$.ac()
n.$flags&2&&A.c(n)
n[0]=q
q=$.aj()
if(0>=q.length)return A.a(q,0)
a1=q[0]}else a1=s.l()
else if(n===32)if(q===B.h){q=s.k()
n=$.I()
n.$flags&2&&A.c(n)
n[0]=q
q=$.Z()
if(0>=q.length)return A.a(q,0)
a1=q[0]}else a1=s.k()
else a1=0
if(a9.d===B.aI){q=b2.a
a2=q==null?b0:q.gB()
a1=(a2==null?0:a2)-a1}if(a<a9.b&&c<a9.c){q=b2.a
if(q!=null)q.aF(a,c,a1)}}}else if(q===2){q=a9.f
if(q===8){if(a9.x===B.h){q=s
q=J.d(q.a,q.d++)
n=$.ad()
n.$flags&2&&A.c(n)
n[0]=q
q=$.ak()
if(0>=q.length)return A.a(q,0)
a3=q[0]}else{q=s
a3=J.d(q.a,q.d++)}if(a9.x===B.h){q=s
q=J.d(q.a,q.d++)
n=$.ad()
n.$flags&2&&A.c(n)
n[0]=q
q=$.ak()
if(0>=q.length)return A.a(q,0)
a4=q[0]}else{q=s
a4=J.d(q.a,q.d++)}}else if(q===16){if(a9.x===B.h){q=s.l()
n=$.ac()
n.$flags&2&&A.c(n)
n[0]=q
q=$.aj()
if(0>=q.length)return A.a(q,0)
a3=q[0]}else a3=s.l()
if(a9.x===B.h){q=s.l()
n=$.ac()
n.$flags&2&&A.c(n)
n[0]=q
q=$.aj()
if(0>=q.length)return A.a(q,0)
a4=q[0]}else a4=s.l()}else if(q===32){if(a9.x===B.h){q=s.k()
n=$.I()
n.$flags&2&&A.c(n)
n[0]=q
q=$.Z()
if(0>=q.length)return A.a(q,0)
a3=q[0]}else a3=s.k()
if(a9.x===B.h){q=s.k()
n=$.I()
n.$flags&2&&A.c(n)
n[0]=q
q=$.Z()
if(0>=q.length)return A.a(q,0)
a4=q[0]}else a4=s.k()}else{a3=0
a4=0}if(a<a9.b&&c<a9.c){q=b2.a
if(q!=null)q.a3(a,c,a3,a4,0)}}else if(q===3){q=a9.x
if(q===B.X){q=a9.f
if(q===32){q=s.k()
n=$.I()
n.$flags&2&&A.c(n)
n[0]=q
q=$.bC()
if(0>=q.length)return A.a(q,0)
a5=q[0]
n[0]=s.k()
a6=q[0]
n[0]=s.k()
a7=q[0]}else{a6=0
a7=0
if(q===64)a5=s.cZ()
else if(q===16){q=s.l()
n=$.L
n=n!=null?n:A.N()
if(!(q<n.length))return A.a(n,q)
a5=n[q]
q=s.l()
n=$.L
n=n!=null?n:A.N()
if(!(q<n.length))return A.a(n,q)
a6=n[q]
q=s.l()
n=$.L
n=n!=null?n:A.N()
if(!(q<n.length))return A.a(n,q)
a7=n[q]}else a5=0}if(a<a9.b&&c<a9.c){q=b2.a
if(q!=null)q.a3(a,c,a5,a6,a7)}}else{n=a9.f
if(n===8){if(q===B.h){q=s
q=J.d(q.a,q.d++)
n=$.ad()
n.$flags&2&&A.c(n)
n[0]=q
q=$.ak()
if(0>=q.length)return A.a(q,0)
a5=q[0]}else{q=s
a5=J.d(q.a,q.d++)}if(a9.x===B.h){q=s
q=J.d(q.a,q.d++)
n=$.ad()
n.$flags&2&&A.c(n)
n[0]=q
q=$.ak()
if(0>=q.length)return A.a(q,0)
a6=q[0]}else{q=s
a6=J.d(q.a,q.d++)}if(a9.x===B.h){q=s
q=J.d(q.a,q.d++)
n=$.ad()
n.$flags&2&&A.c(n)
n[0]=q
q=$.ak()
if(0>=q.length)return A.a(q,0)
a7=q[0]}else{q=s
a7=J.d(q.a,q.d++)}}else if(n===16){if(q===B.h){q=s.l()
n=$.ac()
n.$flags&2&&A.c(n)
n[0]=q
q=$.aj()
if(0>=q.length)return A.a(q,0)
a5=q[0]}else a5=s.l()
if(a9.x===B.h){q=s.l()
n=$.ac()
n.$flags&2&&A.c(n)
n[0]=q
q=$.aj()
if(0>=q.length)return A.a(q,0)
a6=q[0]}else a6=s.l()
if(a9.x===B.h){q=s.l()
n=$.ac()
n.$flags&2&&A.c(n)
n[0]=q
q=$.aj()
if(0>=q.length)return A.a(q,0)
a7=q[0]}else a7=s.l()}else if(n===32){if(q===B.h){q=s.k()
n=$.I()
n.$flags&2&&A.c(n)
n[0]=q
q=$.Z()
if(0>=q.length)return A.a(q,0)
a5=q[0]}else a5=s.k()
if(a9.x===B.h){q=s.k()
n=$.I()
n.$flags&2&&A.c(n)
n[0]=q
q=$.Z()
if(0>=q.length)return A.a(q,0)
a6=q[0]}else a6=s.k()
if(a9.x===B.h){q=s.k()
n=$.I()
n.$flags&2&&A.c(n)
n[0]=q
q=$.Z()
if(0>=q.length)return A.a(q,0)
a7=q[0]}else a7=s.k()}else{a5=0
a6=0
a7=0}if(a<a9.b&&c<a9.c){q=b2.a
if(q!=null)q.a3(a,c,a5,a6,a7)}}}else if(q>=4)if(a9.x===B.X){q=a9.f
if(q===32){q=s.k()
n=$.I()
n.$flags&2&&A.c(n)
n[0]=q
q=$.bC()
if(0>=q.length)return A.a(q,0)
a5=q[0]
n[0]=s.k()
a6=q[0]
n[0]=s.k()
a7=q[0]
n[0]=s.k()
a8=q[0]}else{a6=0
a7=0
a8=0
if(q===64)a5=s.cZ()
else if(q===16){q=s.l()
n=$.L
n=n!=null?n:A.N()
if(!(q<n.length))return A.a(n,q)
a5=n[q]
q=s.l()
n=$.L
n=n!=null?n:A.N()
if(!(q<n.length))return A.a(n,q)
a6=n[q]
q=s.l()
n=$.L
n=n!=null?n:A.N()
if(!(q<n.length))return A.a(n,q)
a7=n[q]
q=s.l()
n=$.L
n=n!=null?n:A.N()
if(!(q<n.length))return A.a(n,q)
a8=n[q]}else a5=0}if(a<a9.b&&c<a9.c){q=b2.a
if(q!=null)q.al(a,c,a5,a6,a7,a8)}}else{q=b2.a
a4=q==null?b0:q.gB()
if(a4==null)a4=0
q=a9.f
if(q===8){if(a9.x===B.h){q=s
q=J.d(q.a,q.d++)
n=$.ad()
n.$flags&2&&A.c(n)
n[0]=q
q=$.ak()
if(0>=q.length)return A.a(q,0)
a5=q[0]}else{q=s
a5=J.d(q.a,q.d++)}if(a9.x===B.h){q=s
q=J.d(q.a,q.d++)
n=$.ad()
n.$flags&2&&A.c(n)
n[0]=q
q=$.ak()
if(0>=q.length)return A.a(q,0)
a6=q[0]}else{q=s
a6=J.d(q.a,q.d++)}if(a9.x===B.h){q=s
q=J.d(q.a,q.d++)
n=$.ad()
n.$flags&2&&A.c(n)
n[0]=q
q=$.ak()
if(0>=q.length)return A.a(q,0)
a7=q[0]}else{q=s
a7=J.d(q.a,q.d++)}if(a9.x===B.h){q=s
q=J.d(q.a,q.d++)
n=$.ad()
n.$flags&2&&A.c(n)
n[0]=q
q=$.ak()
if(0>=q.length)return A.a(q,0)
a8=q[0]}else{q=s
a8=J.d(q.a,q.d++)}if(a9.r===5)if(a9.x===B.h){q=s
q=J.d(q.a,q.d++)
n=$.ad()
n.$flags&2&&A.c(n)
n[0]=q
q=$.ak()
if(0>=q.length)return A.a(q,0)
a4=q[0]}else{q=s
a4=J.d(q.a,q.d++)}}else if(q===16){if(a9.x===B.h){q=s.l()
n=$.ac()
n.$flags&2&&A.c(n)
n[0]=q
q=$.aj()
if(0>=q.length)return A.a(q,0)
a5=q[0]}else a5=s.l()
if(a9.x===B.h){q=s.l()
n=$.ac()
n.$flags&2&&A.c(n)
n[0]=q
q=$.aj()
if(0>=q.length)return A.a(q,0)
a6=q[0]}else a6=s.l()
if(a9.x===B.h){q=s.l()
n=$.ac()
n.$flags&2&&A.c(n)
n[0]=q
q=$.aj()
if(0>=q.length)return A.a(q,0)
a7=q[0]}else a7=s.l()
if(a9.x===B.h){q=s.l()
n=$.ac()
n.$flags&2&&A.c(n)
n[0]=q
q=$.aj()
if(0>=q.length)return A.a(q,0)
a8=q[0]}else a8=s.l()
if(a9.r===5)if(a9.x===B.h){q=s.l()
n=$.ac()
n.$flags&2&&A.c(n)
n[0]=q
q=$.aj()
if(0>=q.length)return A.a(q,0)
a4=q[0]}else a4=s.l()}else if(q===32){if(a9.x===B.h){q=s.k()
n=$.I()
n.$flags&2&&A.c(n)
n[0]=q
q=$.Z()
if(0>=q.length)return A.a(q,0)
a5=q[0]}else a5=s.k()
if(a9.x===B.h){q=s.k()
n=$.I()
n.$flags&2&&A.c(n)
n[0]=q
q=$.Z()
if(0>=q.length)return A.a(q,0)
a6=q[0]}else a6=s.k()
if(a9.x===B.h){q=s.k()
n=$.I()
n.$flags&2&&A.c(n)
n[0]=q
q=$.Z()
if(0>=q.length)return A.a(q,0)
a7=q[0]}else a7=s.k()
if(a9.x===B.h){q=s.k()
n=$.I()
n.$flags&2&&A.c(n)
n[0]=q
q=$.Z()
if(0>=q.length)return A.a(q,0)
a8=q[0]}else a8=s.k()
if(a9.r===5)if(a9.x===B.h){q=s.k()
n=$.I()
n.$flags&2&&A.c(n)
n[0]=q
q=$.Z()
if(0>=q.length)return A.a(q,0)
a4=q[0]}else a4=s.k()}else{a5=0
a6=0
a7=0
a8=0}if(a9.d===B.c4){A.lq(a5,a6,a7,a8,d)
a5=d[0]
a6=d[1]
a7=d[2]
a8=a4}if(a<a9.b&&c<a9.c){q=b2.a
if(q!=null)q.al(a,c,a5,a6,a7,a8)}}}}else throw A.f(A.m("Unsupported bitsPerSample: "+q))},
i2(a,b,c,d,e,f){var t,s,r,q
for(t=0;t<f;++t)for(s=t+d,r=0;r<e;++r){q=a.a
q=q==null?null:q.O(r,t,null)
if(q==null)q=new A.A()
b.bJ(r+c,s,q)}},
he(a4,a5,a6,a7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=null,a3=a1.cy
a3===$&&A.b()
s=a7*a3+a6
a3=a1.CW
if(!(s>=0&&s<a3.length))return A.a(a3,s)
a4.d=a3[s]
a3=a1.ay
r=a6*a3
q=a1.ch
p=a7*q
o=a1.cx
if(!(s<o.length))return A.a(o,s)
n=o[s]
t=null
o=a1.e
if(o===32773){m=B.a.a1(a3,8)===0?B.a.W(a3,8)*q:(B.a.W(a3,8)+1)*q
t=A.q(new Uint8Array(a3*q),!1,a2,0)
a1.e1(a4,m,t.a)}else if(o===5){t=A.q(new Uint8Array(a3*q),!1,a2,0)
A.kC().eW(A.n(a4,n,0),t.a)
if(a1.Q===2)for(l=0;l<a1.c;++l){k=a1.r
j=k*(l*a1.b+1)
for(;k<a1.b*a1.r;++k){a3=t
q=J.d(a3.a,a3.d+j)
o=t
i=a1.r
i=J.d(o.a,o.d+(j-i))
J.x(a3.a,a3.d+j,q+i);++j}}}else if(o===2){t=A.q(new Uint8Array(a3*q),!1,a2,0)
try{A.jA(a1.dy,a3,q).j6(t,a4,0,a1.ch)}catch(h){}}else if(o===3){t=A.q(new Uint8Array(a3*q),!1,a2,0)
try{A.jA(a1.dy,a3,q).j7(t,a4,0,a1.ch,a1.fr)}catch(h){}}else if(o===4){t=A.q(new Uint8Array(a3*q),!1,a2,0)
try{A.jA(a1.dy,a3,q).jb(t,a4,0,a1.ch,a1.fx)}catch(h){}}else if(o===8)t=A.q(B.F.bP(a4.cr(0,0,n)),!1,a2,0)
else if(o===32946)t=A.q(B.F.bP(a4.cr(0,0,n)),!1,a2,0)
else if(o===1)t=a4
else throw A.f(A.m("Unsupported Compression Type: "+o))
g=new A.i1(t)
f=a5.gB()
a3=a1.z
e=a3?f:0
d=a3?0:f
for(c=p,b=0;b<a1.ch;++b,++c){for(a=r,a0=0;a0<a1.ay;++a0,++a){a3=a5.a
q=a3==null
o=q?a2:a3.b
if(c<(o==null?0:o)){a3=q?a2:a3.a
a3=a>=(a3==null?0:a3)}else a3=!0
if(a3)break
a3=g.ae(1)
q=a5.a
if(a3===0){if(q!=null)q.a3(a,c,e,0,0)}else if(q!=null)q.a3(a,c,d,0,0)}g.c=0}},
e1(a,b,c){var t,s,r,q,p,o,n,m,l,k
u.L.a(c)
for(t=J.ax(c),s=0,r=0;r<b;){q=s+1
p=J.d(a.a,a.d+s)
o=$.ad()
o.$flags&2&&A.c(o)
o[0]=p
p=$.ak()
if(0>=p.length)return A.a(p,0)
n=p[0]
if(n>=0&&n<=127)for(p=n+1,s=q,m=0;m<p;++m,r=l,s=q){l=r+1
q=s+1
t.i(c,r,J.d(a.a,a.d+s))}else{p=n<=-1&&n>=-127
s=q+1
if(p){k=J.d(a.a,a.d+q)
for(p=-n+1,m=0;m<p;++m,r=l){l=r+1
t.i(c,r,k)}}}}},
cO(a,b){var t=this.a
if(!t.aO(a))return b
t=t.n(0,a).be()
t=t==null?null:t.h(0)
return t==null?0:t},
c0(a){return this.cO(a,0)},
cP(a){var t,s=this.a
if(!s.aO(a))return null
t=s.n(0,a)
s=t.be()
s.toString
return A.kB(t.c,s.gby(s),u.p)}}
A.c8.prototype={
ad(){return"TiffFormat."+this.b}}
A.a_.prototype={
ad(){return"TiffPhotometricType."+this.b}}
A.aB.prototype={
ad(){return"TiffImageType."+this.b}}
A.fQ.prototype={$iG:1}
A.hL.prototype={
eW(a,b){var t,s,r,q,p,o,n,m,l=this
u.L.a(b)
l.r=b
t=J.aY(b)
l.w=0
s=u.D.a(a.a)
l.e=s
r=l.f=s.length
l.b=a.d
if(0>=r)return A.a(s,0)
if(s[0]===0){if(1>=r)return A.a(s,1)
s=s[1]===1}else s=!1
if(s)throw A.f(A.m("Invalid LZW Data"))
l.eh()
l.d=l.c=0
q=l.dh()
s=l.x
p=0
for(;;){if(!(q!==257&&l.w<t))break
if(q===256){l.eh()
q=l.dh()
l.as=0
if(q===257)break
J.x(l.r,l.w++,q)
p=q}else{r=l.Q
r.toString
if(q<r){l.ee(q)
r=l.as
r===$&&A.b()
o=r-1
for(;o>=0;--o){r=l.r
n=l.w++
if(!(o<4096))return A.a(s,o)
J.x(r,n,s[o])}r=l.as-1
if(!(r>=0&&r<4096))return A.a(s,r)
l.dN(p,s[r])}else{l.ee(p)
r=l.as
r===$&&A.b()
o=r-1
for(;o>=0;--o){r=l.r
n=l.w++
if(!(o<4096))return A.a(s,o)
J.x(r,n,s[o])}r=l.r
n=l.w++
m=l.as-1
if(!(m>=0&&m<4096))return A.a(s,m)
J.x(r,n,s[m])
m=l.as-1
if(!(m>=0&&m<4096))return A.a(s,m)
l.dN(p,s[m])}p=q}q=l.dh()}},
dN(a,b){var t,s=this,r=s.y
r===$&&A.b()
t=s.Q
t.toString
r.$flags&2&&A.c(r)
if(!(t<4096))return A.a(r,t)
r[t]=b
r=s.z
r===$&&A.b()
r.$flags&2&&A.c(r)
r[t]=a
t=s.Q=t+1
if(t===511)s.a=10
else if(t===1023)s.a=11
else if(t===2047)s.a=12},
ee(a){var t,s,r,q,p,o,n,m=this
m.as=0
t=m.x
m.as=1
s=m.y
s===$&&A.b()
if(!(a<4096))return A.a(s,a)
r=s[a]
t.$flags&2&&A.c(t)
t[0]=r
r=m.z
r===$&&A.b()
q=r[a]
for(p=1;q!==4098;p=o){o=p+1
m.as=o
if(!(q>=0&&q<4096))return A.a(s,q)
n=s[q]
if(!(p<4096))return A.a(t,p)
t[p]=n
q=r[q]}},
dh(){var t,s,r,q,p=this,o=p.b,n=p.f
n===$&&A.b()
if(o>=n)return 257
for(;t=p.d,s=p.a,t<s;o=q){if(o>=n)return 257
s=p.c
r=p.e
r===$&&A.b()
q=o+1
p.b=q
if(!(o>=0&&o<r.length))return A.a(r,o)
p.c=(s<<8>>>0)+r[o]>>>0
p.d=t+8}o=t-s
p.d=o
o=B.a.a_(p.c,o)
s-=9
if(!(s>=0&&s<4))return A.a(B.bb,s)
return o&B.bb[s]},
eh(){var t,s,r=this
r.y=new Uint8Array(4096)
t=new Uint32Array(4096)
r.z=t
B.n.aq(t,0,4096,4098)
for(t=r.y,s=0;s<256;++s){t.$flags&2&&A.c(t)
t[s]=s}r.a=9
r.Q=258}}
A.i2.prototype={
ag(a){var t,s,r=this.a
if(r==null)return null
r=r.f
if(!(a<r.length))return A.a(r,a)
r=r[a]
t=this.c
t===$&&A.b()
s=r.bG(t)
return s},
aA(a,b){var t,s,r,q=this,p=null,o=A.q(a,!1,p,0)
q.c=o
o=q.a=q.es(o)
if(o==null)return p
t=o.f.length
s=q.ag(0)
if(s==null)return p
s.e=A.j5(A.q(a,!1,p,0))
s.w=B.aX
for(r=1;r<t;++r)s.aG(q.ag(r))
return s},
es(a){var t,s,r,q,p,o,n,m,l,k,j=null,i=A.k([],u.aU),h=new A.fQ(i),g=a.l()
if(g!==18761&&g!==19789)return j
if(g===19789)a.e=!0
else a.e=!1
r=a.l()
h.d=r
if(r!==42)return j
q=a.k()
p=A.n(a,j,0)
p.d=q
t=p
for(r=u.p,o=u.cV;q!==0;){s=null
try{n=new A.fP(A.O(r,o),B.aJ,B.c2,B.jI)
n.fO(t)
s=n
m=s
if(!(m.b!==0&&m.c!==0))break}catch(l){break}B.c.M(i,s)
m=i.length
if(m===1){if(0>=m)return A.a(i,0)
k=i[0]
h.a=k.b
if(0>=m)return A.a(i,0)
h.b=k.c}q=t.k()
if(q!==0)t.d=q}return i.length!==0?h:j}}
A.i6.prototype={
cl(){var t,s=this.a,r=s.bf()
if((r&1)!==0)return!1
if((r>>>1&7)>3)return!1
if((r>>>4&1)===0)return!1
this.f.d=r>>>5
if(s.bf()!==2752925)return!1
t=this.b
t.a=s.l()
t.b=s.l()
return!0},
bB(){var t,s,r,q=this,p=null
if(!q.hT())return p
t=q.b
s=t.a
q.d=A.J(p,p,B.f,0,B.i,t.b,p,0,4,p,B.f,s,!1)
q.hY()
if(!q.ia())return p
t=t.w
if(t.length!==0){r=A.q(new A.aq(t),!1,p,0)
t=q.d
t.toString
t.e=A.j5(r)}return q.d},
hT(){var t,s,r,q,p=this
if(!p.cl())return!1
p.fr=A.nD()
for(t=p.dy,s=0;s<4;++s){r=new Int32Array(2)
q=new Int32Array(2)
B.c.i(t,s,new A.fX(r,q,new Int32Array(2)))}p.y=p.Q=0
t=p.b
r=t.a
p.z=r
t=t.b
p.as=t
p.at=r+15>>>4
p.ax=t+15>>>4
p.k1=0
t=p.a
r=p.f
q=r.d
q===$&&A.b()
q=A.kT(t.aj(q))
p.c=q
t.d+=r.d
q.Y(1)
p.c.Y(1)
p.ii(p.x,p.fr)
p.i9()
if(!p.ic(t))return!1
p.ig()
p.c.Y(1)
p.ie()
return!0},
ii(a,b){var t,s,r,q=this,p=q.c
p===$&&A.b()
p=p.Y(1)!==0
a.a=p
if(p){a.b=q.c.Y(1)!==0
if(q.c.Y(1)!==0){a.c=q.c.Y(1)!==0
for(p=a.d,t=0;t<4;++t){if(q.c.Y(1)!==0){s=q.c
r=s.Y(7)
s=s.Y(1)===1?-r:r}else s=0
p.$flags&2&&A.c(p)
p[t]=s}for(p=a.e,t=0;t<4;++t){if(q.c.Y(1)!==0){s=q.c
r=s.Y(6)
s=s.Y(1)===1?-r:r}else s=0
p.$flags&2&&A.c(p)
p[t]=s}}if(a.b)for(t=0;t<3;++t){p=b.a
s=q.c.Y(1)!==0?q.c.Y(8):255
p.$flags&2&&A.c(p)
p[t]=s}}else a.b=!1
return!0},
i9(){var t,s,r,q=this,p=q.w,o=q.c
o===$&&A.b()
p.a=o.Y(1)!==0
p.b=q.c.Y(6)
p.c=q.c.Y(3)
o=q.c.Y(1)!==0
p.d=o
if(o)if(q.c.Y(1)!==0){for(o=p.e,t=0;t<4;++t)if(q.c.Y(1)!==0){s=q.c
r=s.Y(6)
s=s.Y(1)===1?-r:r
o.$flags&2&&A.c(o)
o[t]=s}for(o=p.f,t=0;t<4;++t)if(q.c.Y(1)!==0){s=q.c
r=s.Y(6)
s=s.Y(1)===1?-r:r
o.$flags&2&&A.c(o)
o[t]=s}}if(p.b===0)o=0
else o=p.a?1:2
q.aB=o
return!0},
ic(a){var t,s,r,q,p,o,n,m=a.c-a.d,l=this.c
l===$&&A.b()
l=B.a.J(1,l.Y(2))
this.cy=l
t=l-1
s=t*3
if(m<s)return!1
for(l=this.db,r=0,q=0;q<t;++q,s=o){p=a.cC(3,r)
o=s+((J.d(p.a,p.d)|J.d(p.a,p.d+1)<<8|J.d(p.a,p.d+2)<<16)>>>0)
if(o>m)o=m
n=new A.ee(a.bK(o-s,s))
n.b=254
n.c=0
n.d=-8
B.c.i(l,q,n)
r+=3}B.c.i(l,t,A.kT(a.bK(m-s,a.d-a.b+s)))
return s<m},
ig(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
f===$&&A.b()
t=f.Y(7)
s=g.c.Y(1)!==0?g.c.c6(4):0
r=g.c.Y(1)!==0?g.c.c6(4):0
q=g.c.Y(1)!==0?g.c.c6(4):0
p=g.c.Y(1)!==0?g.c.c6(4):0
o=g.c.Y(1)!==0?g.c.c6(4):0
n=g.x
for(f=g.dy,m=n.d,l=0;l<4;++l){if(n.a){k=m[l]
if(!n.c)k+=t}else{if(l>0){j=f[0]
if(!(l>=0&&l<4))return A.a(f,l)
f[l]=j
continue}k=t}i=f[l]
j=i.a
h=k+s
if(h<0)h=0
else if(h>127)h=127
h=B.ax[h]
j.$flags&2&&A.c(j)
j[0]=h
if(k<0)h=0
else h=k>127?127:k
j[1]=B.ay[h]
h=i.b
j=k+r
if(j<0)j=0
else if(j>127)j=127
j=B.ax[j]
h.$flags&2&&A.c(h)
h[0]=j*2
j=k+q
if(j<0)j=0
else if(j>127)j=127
h[1]=B.ay[j]*101581>>>16
if(h[1]<8)h[1]=8
j=i.c
h=k+p
if(h<0)h=0
else if(h>117)h=117
h=B.ax[h]
j.$flags&2&&A.c(j)
j[0]=h
h=k+o
if(h<0)h=0
else if(h>127)h=127
j[1]=B.ay[h]}},
ie(){var t,s,r,q,p,o,n=this,m=n.fr
for(t=0;t<4;++t)for(s=0;s<8;++s)for(r=0;r<3;++r)for(q=0;q<11;++q){p=n.c
p===$&&A.b()
o=p.a6(B.io[t][s][r][q])!==0?n.c.Y(8):B.dC[t][s][r][q]
p=m.b
if(!(t<p.length))return A.a(p,t)
p=p[t]
if(!(s<p.length))return A.a(p,s)
p=p[s].a
if(!(r<p.length))return A.a(p,r)
p=p[r]
p.$flags&2&&A.c(p)
p[q]=o}p=n.c
p===$&&A.b()
p=p.Y(1)!==0
n.fx=p
if(p)n.fy=n.c.Y(8)},
ik(){var t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.aB
g.toString
if(g>0){t=h.w
for(g=t.e,s=t.f,r=h.x,q=r.e,p=0;p<4;++p){if(r.a){o=q[p]
if(!r.c){n=t.b
n.toString
o+=n}}else o=t.b
for(m=0;m<=1;++m){n=h.bw
n===$&&A.b()
if(!(p<n.length))return A.a(n,p)
l=n[p][m]
n=t.d
n===$&&A.b()
if(n){o.toString
k=o+g[0]
if(m!==0)k+=s[0]}else k=o
k.toString
if(k<0)k=0
else if(k>63)k=63
if(k>0){n=t.c
n===$&&A.b()
if(n>0){j=n>4?B.a.j(k,2):B.a.j(k,1)
i=9-n
if(j>i)j=i}else j=k
if(j<1)j=1
l.b=j
l.a=2*k+j
if(k>=40)n=2
else n=k>=15?1:0
l.d=n}else l.a=0
l.c=m!==0}}}},
hY(){var t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.b,f=g.at
if(f!=null)i.bC=f
t=J.a9(4,u.e6)
for(f=u.ao,s=0;s<4;++s)t[s]=A.k([new A.bb(),new A.bb()],f)
i.bw=u.gS.a(t)
f=i.at
f.toString
t=J.a9(f,u.dE)
for(r=0;r<f;++r){q=new Uint8Array(16)
p=new Uint8Array(8)
t[r]=new A.ei(q,p,new Uint8Array(8))}i.k2=u.R.a(t)
i.ok=new Uint8Array(832)
f=i.at
f.toString
i.go=new Uint8Array(4*f)
q=i.p4=16*f
p=i.R8=8*f
o=i.aB
o.toString
if(!(o<3))return A.a(B.a1,o)
n=B.a1[o]
m=n*q
l=(n/2|0)*p
i.p1=A.q(new Uint8Array(16*q+m),!1,h,m)
q=8*p+l
i.p2=A.q(new Uint8Array(q),!1,h,l)
i.p3=A.q(new Uint8Array(q),!1,h,l)
g=g.a
i.RG=A.q(new Uint8Array(g),!1,h,0)
k=g+1>>>1
i.rx=A.q(new Uint8Array(k),!1,h,0)
i.ry=A.q(new Uint8Array(k),!1,h,0)
if(o===2)i.ch=i.ay=0
else{g=B.a.W(i.y-n,16)
i.ay=g
q=B.a.W(i.Q-n,16)
i.ch=q
if(g<0)i.ay=0
if(q<0)i.ch=0}g=B.a.W(i.as+15+n,16)
i.cx=g
q=B.a.W(i.z+15+n,16)
i.CW=q
if(q>f)i.CW=f
q=i.ax
q.toString
if(g>q)i.cx=q
j=f+1
t=J.a9(j,u.ai)
for(r=0;r<j;++r)t[r]=new A.eg()
i.k3=u.eQ.a(t)
g=i.at
g.toString
t=J.a9(g,u.gU)
for(r=0;r<g;++r){f=new Int16Array(384)
t[r]=new A.eh(f,new Uint8Array(16))}i.bv=u.db.a(t)
g=i.at
g.toString
i.k4=u.ge.a(A.Y(g,h,!1,u.aj))
i.ik()
A.n3()
i.e=new A.i7()
return!0},
ia(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
f.y2=0
t=f.id
s=f.x
r=f.db
q=0
for(;;){p=f.cx
p.toString
if(!(q<p))break
p=f.cy
p===$&&A.b()
p=(q&p-1)>>>0
if(!(p>=0&&p<8))return A.a(r,p)
o=r[p]
for(;;){q=f.y1
p=f.at
p.toString
if(!(q<p))break
p=f.k3
p===$&&A.b()
n=p.length
if(0>=n)return A.a(p,0)
m=p[0]
l=1+q
if(!(l<n))return A.a(p,l)
k=p[l]
l=f.bv
l===$&&A.b()
if(!(q<l.length))return A.a(l,q)
j=l[q]
if(s.b){q=f.c
q===$&&A.b()
q=q.a6(f.fr.a[0])
p=f.c
n=f.fr
f.k1=q===0?p.a6(n.a[1]):2+p.a6(n.a[2])}q=f.fx
q===$&&A.b()
if(q){q=f.c
q===$&&A.b()
p=f.fy
p===$&&A.b()
i=q.a6(p)!==0}else i=!1
f.ib()
if(!i)i=f.ih(k,o)
else{m.a=k.a=0
q=j.b
q===$&&A.b()
if(!q)m.b=k.b=0
j.f=j.e=0}q=f.aB
q.toString
if(q>0){q=f.k4
q===$&&A.b()
p=f.y1
n=f.bw
n===$&&A.b()
l=f.k1
l===$&&A.b()
if(!(l<n.length))return A.a(n,l)
l=n[l]
n=j.b
n===$&&A.b()
B.c.i(q,p,l[n?1:0])
q=f.k4
p=f.y1
if(!(p<q.length))return A.a(q,p)
h=q[p]
h.c=h.c||!i}++f.y1}q=f.k3
q===$&&A.b()
if(0>=q.length)return A.a(q,0)
q=q[0]
q.b=q.a=0
B.e.aq(t,0,4,0)
f.y1=0
f.iP()
q=f.aB
q.toString
g=!1
if(q>0){q=f.y2
p=f.ch
p===$&&A.b()
if(q>=p){p=f.cx
p.toString
p=q<=p
g=p}}if(!f.hP(g))return!1
q=++f.y2}return!0},
iP(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=null,a5=a3.y2,a6=a3.ok
a6===$&&A.b()
t=A.q(a6,!1,a4,40)
s=A.q(a6,!1,a4,584)
r=A.q(a6,!1,a4,600)
a6=a5>0
q=0
for(;;){p=a3.at
p.toString
if(!(q<p))break
p=a3.bv
p===$&&A.b()
if(!(q<p.length))return A.a(p,q)
o=p[q]
if(q>0){for(n=-1;n<16;++n){p=n*32
t.bd(p-4,4,t,p+12)}for(n=-1;n<8;++n){p=n*32
m=p-4
p+=4
s.bd(m,4,s,p)
r.bd(m,4,r,p)}}else{for(n=0;n<16;++n)J.x(t.a,t.d+(n*32-1),129)
for(n=0;n<8;++n){p=n*32-1
J.x(s.a,s.d+p,129)
J.x(r.a,r.d+p,129)}if(a6){J.x(r.a,r.d+-33,129)
J.x(s.a,s.d+-33,129)
J.x(t.a,t.d+-33,129)}}p=a3.k2
p===$&&A.b()
if(!(q<p.length))return A.a(p,q)
l=p[q]
k=o.a
j=o.e
if(a6){t.bI(-32,16,l.a)
s.bI(-32,8,l.b)
r.bI(-32,8,l.c)}else if(q===0){p=t.a
m=t.d+-33
J.aW(p,m,m+21,127)
m=s.a
p=s.d+-33
J.aW(m,p,p+9,127)
p=r.a
m=r.d+-33
J.aW(p,m,m+9,127)}p=o.b
p===$&&A.b()
if(p){i=A.n(t,a4,-16)
h=i.cs()
if(a6){p=a3.at
p.toString
if(q>=p-1){p=l.a[15]
m=i.a
g=i.d
J.aW(m,g,g+4,p)}else{p=a3.k2
m=q+1
if(!(m<p.length))return A.a(p,m)
i.bI(0,4,p[m].a)}}p=h.length
if(0>=p)return A.a(h,0)
f=h[0]
h.$flags&2&&A.c(h)
if(96>=p)return A.a(h,96)
h[96]=f
h[64]=f
h[32]=f
for(p=o.c,e=0;e<16;++e,j=j<<2>>>0){d=A.n(t,a4,B.bK[e])
m=p[e]
if(!(m<10))return A.a(B.by,m)
B.by[m].$1(d)
j.toString
m=e*16
a3.e4(j,new A.a6(k,m,Math.min(384,384),m,!1),d)}}else{p=A.kV(q,a5,o.c[0])
p.toString
if(!(p<7))return A.a(B.bJ,p)
B.bJ[p].$1(t)
if(j!==0)for(e=0;e<16;++e,j=j<<2>>>0){d=A.n(t,a4,B.bK[e])
j.toString
p=e*16
a3.e4(j,new A.a6(k,p,Math.min(384,384),p,!1),d)}}p=o.f
p===$&&A.b()
m=A.kV(q,a5,o.d)
m.toString
if(!(m<7))return A.a(B.aA,m)
B.aA[m].$1(s)
B.aA[m].$1(r)
m=Math.min(384,384)
c=new A.a6(k,256,m,256,!1)
if((p&255)!==0){g=a3.e
if((p&170)!==0){g===$&&A.b()
g.bz(c,s)
g.bz(A.n(c,a4,16),A.n(s,a4,4))
b=A.n(c,a4,32)
a=A.n(s,a4,128)
g.bz(b,a)
g.bz(A.n(b,a4,16),A.n(a,a4,4))}else{g===$&&A.b()
g.fa(c,s)}}a0=new A.a6(k,320,m,320,!1)
p=p>>>8
if((p&255)!==0){m=a3.e
if((p&170)!==0){m===$&&A.b()
m.bz(a0,r)
m.bz(A.n(a0,a4,16),A.n(r,a4,4))
p=A.n(a0,a4,32)
g=A.n(r,a4,128)
m.bz(p,g)
m.bz(A.n(p,a4,16),A.n(g,a4,4))}else{m===$&&A.b()
m.fa(a0,r)}}p=a3.ax
p.toString
if(a5<p-1){B.e.ai(l.a,0,16,t.a0(),480)
B.e.ai(l.b,0,8,s.a0(),224)
B.e.ai(l.c,0,8,r.a0(),224)}a1=q*16
a2=q*8
for(n=0;n<16;++n){p=a3.p4
p.toString
m=a3.p1
m===$&&A.b()
m.bd(a1+n*p,16,t,n*32)}for(n=0;n<8;++n){p=a3.R8
p.toString
m=a3.p2
m===$&&A.b()
g=n*32
m.bd(a2+n*p,8,s,g)
p=a3.R8
p.toString
m=a3.p3
m===$&&A.b()
m.bd(a2+n*p,8,r,g)}++q}},
e4(a,b,c){var t,s,r,q,p,o
switch(a>>>30){case 3:t=this.e
t===$&&A.b()
t.jE(b,c,!1)
break
case 2:this.e===$&&A.b()
s=J.d(b.a,b.d)+4
r=B.a.au(B.a.j(J.d(b.a,b.d+4)*35468,16),32)
q=B.a.au(B.a.j(J.d(b.a,b.d+4)*85627,16),32)
p=B.a.au(B.a.j(J.d(b.a,b.d+1)*35468,16),32)
o=B.a.au(B.a.j(J.d(b.a,b.d+1)*85627,16),32)
A.i9(c,0,s+q,o,p)
A.i9(c,1,s+r,o,p)
A.i9(c,2,s-r,o,p)
A.i9(c,3,s-q,o,p)
break
case 1:t=this.e
t===$&&A.b()
t.ct(b,c)
break
default:break}},
hA(a,b){var t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.p4,f=i.k4
f===$&&A.b()
if(!(a>=0&&a<f.length))return A.a(f,a)
f=f[a]
f.toString
t=i.p1
t===$&&A.b()
s=A.n(t,h,a*16)
r=f.b
q=f.a
if(q===0)return
if(i.aB===1){if(a>0){t=i.e
t===$&&A.b()
g.toString
t.dG(s,g,q+4)}if(f.c){t=i.e
t===$&&A.b()
g.toString
t.fn(s,g,q)}if(b>0){t=i.e
t===$&&A.b()
g.toString
t.dH(s,g,q+4)}if(f.c){f=i.e
f===$&&A.b()
g.toString
f.fo(s,g,q)}}else{p=i.R8
t=i.p2
t===$&&A.b()
o=a*8
n=A.n(t,h,o)
t=i.p3
t===$&&A.b()
m=A.n(t,h,o)
l=f.d
if(a>0){t=i.e
t===$&&A.b()
g.toString
o=q+4
t.bZ(s,1,g,16,o,r,l)
p.toString
t.bZ(n,1,p,8,o,r,l)
t.bZ(m,1,p,8,o,r,l)}if(f.c){t=i.e
t===$&&A.b()
g.toString
t.ji(s,g,q,r,l)
p.toString
k=A.n(n,h,4)
j=A.n(m,h,4)
t.bY(k,1,p,8,q,r,l)
t.bY(j,1,p,8,q,r,l)}if(b>0){t=i.e
t===$&&A.b()
g.toString
o=q+4
t.bZ(s,g,1,16,o,r,l)
p.toString
t.bZ(n,p,1,8,o,r,l)
t.bZ(m,p,1,8,o,r,l)}if(f.c){f=i.e
f===$&&A.b()
g.toString
f.jH(s,g,q,r,l)
p.toString
t=4*p
k=A.n(n,h,t)
j=A.n(m,h,t)
f.bY(k,p,1,8,q,r,l)
f.bY(j,p,1,8,q,r,l)}}},
hM(){var t,s=this,r=s.ay
r===$&&A.b()
t=r
for(;;){r=s.CW
r.toString
if(!(t<r))break
s.hA(t,s.y2);++t}},
hP(a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=b.aB
a0.toString
if(!(a0<3))return A.a(B.a1,a0)
t=B.a1[a0]
a0=b.p4
a0.toString
s=t*a0
a0=b.R8
a0.toString
r=(t/2|0)*a0
a0=b.p1
a0===$&&A.b()
q=-s
p=A.n(a0,a,q)
a0=b.p2
a0===$&&A.b()
o=-r
n=A.n(a0,a,o)
a0=b.p3
a0===$&&A.b()
m=A.n(a0,a,o)
l=b.y2
a0=b.cx
a0.toString
k=l*16
j=(l+1)*16
if(a1)b.hM()
if(l!==0){k-=t
b.to=A.n(p,a,0)
b.x1=A.n(n,a,0)
b.x2=A.n(m,a,0)}else{b.to=A.n(b.p1,a,0)
b.x1=A.n(b.p2,a,0)
b.x2=A.n(b.p3,a,0)}a0=l<a0-1
if(a0)j-=t
i=b.as
if(j>i)j=i
b.xr=null
if(b.bC!=null&&k<j){h=b.xr=b.hs(k,j-k)
if(h==null)return!1}else h=a
g=b.Q
if(k<g){f=g-k
e=b.to
e===$&&A.b()
d=e.d
c=b.p4
c.toString
e.d=d+c*f
c=b.x1
c===$&&A.b()
d=c.d
e=b.R8
e.toString
e*=B.a.j(f,1)
c.d=d+e
d=b.x2
d===$&&A.b()
d.d+=e
if(h!=null)h.d=h.d+b.b.a*f
k=g}if(k<j){e=b.to
e===$&&A.b()
d=e.d
c=b.y
e.d=d+c
d=b.x1
d===$&&A.b()
e=c>>>1
d.d=d.d+e
d=b.x2
d===$&&A.b()
d.d+=e
if(h!=null)h.d+=c
b.iq(k-g,b.z-c,j-k)}if(a0){a0=b.p1
h=b.p4
h.toString
a0.bd(q,s,p,16*h)
h=b.p2
q=b.R8
q.toString
h.bd(o,r,n,8*q)
q=b.p3
h=b.R8
h.toString
q.bd(o,r,m,8*h)}return!0},
iq(a,b,c){if(b<=0||c<=0)return!1
this.hC(a,b,c)
this.hB(a,b,c)
return!0},
d4(a){var t
if((a&-4194304)>>>0===0)t=B.a.j(a,14)
else t=a<0?0:255
return t},
cT(a,b,c,d){var t=19077*a
d.i(0,0,this.d4(t+26149*c+-3644112))
d.i(0,1,this.d4(t-6419*b-13320*c+2229552))
d.i(0,2,this.d4(t+33050*b+-4527440))},
cS(a6,a7,a8,a9,b0,b1,b2,b3,b4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=new A.ij(),a1=b4-1,a2=B.a.j(a1,1),a3=a0.$2(J.d(a8.a,a8.d),J.d(a9.a,a9.d)),a4=a0.$2(J.d(b0.a,b0.d),J.d(b1.a,b1.d)),a5=B.a.j(3*a3+a4+131074,2)
b.cT(J.d(a6.a,a6.d),a5&255,a5>>>16,b2)
b2.i(0,3,255)
t=a7!=null
if(t){a5=B.a.j(3*a4+a3+131074,2)
s=J.d(a7.a,a7.d)
b3.toString
b.cT(s,a5&255,a5>>>16,b3)
b3.i(0,3,255)}for(r=1;r<=a2;++r,a4=p,a3=q){q=a0.$2(J.d(a8.a,a8.d+r),J.d(a9.a,a9.d+r))
p=a0.$2(J.d(b0.a,b0.d+r),J.d(b1.a,b1.d+r))
o=a3+q+a4+p+524296
n=B.a.j(o+2*(q+a4),3)
m=B.a.j(o+2*(a3+p),3)
a5=B.a.j(n+a3,1)
l=B.a.j(m+q,1)
s=2*r
k=s-1
j=J.d(a6.a,a6.d+k)
i=a5&255
h=a5>>>16
g=k*4
f=A.n(b2,a,g)
j=19077*j
e=j+26149*h+-3644112
if((e&-4194304)>>>0===0)d=B.a.j(e,14)
else d=e<0?0:255
J.x(f.a,f.d,d)
h=j-6419*i-13320*h+2229552
if((h&-4194304)>>>0===0)d=B.a.j(h,14)
else d=h<0?0:255
J.x(f.a,f.d+1,d)
j=j+33050*i+-4527440
if((j&-4194304)>>>0===0)d=B.a.j(j,14)
else d=j<0?0:255
J.x(f.a,f.d+2,d)
J.x(f.a,f.d+3,255)
j=J.d(a6.a,a6.d+s)
i=l&255
h=l>>>16
f=s*4
e=A.n(b2,a,f)
j=19077*j
c=j+26149*h+-3644112
if((c&-4194304)>>>0===0)d=B.a.j(c,14)
else d=c<0?0:255
J.x(e.a,e.d,d)
h=j-6419*i-13320*h+2229552
if((h&-4194304)>>>0===0)d=B.a.j(h,14)
else d=h<0?0:255
J.x(e.a,e.d+1,d)
j=j+33050*i+-4527440
if((j&-4194304)>>>0===0)d=B.a.j(j,14)
else d=j<0?0:255
J.x(e.a,e.d+2,d)
J.x(e.a,e.d+3,255)
if(t){a5=B.a.j(m+a4,1)
l=B.a.j(n+p,1)
k=J.d(a7.a,a7.d+k)
j=a5&255
i=a5>>>16
b3.toString
g=A.n(b3,a,g)
k=19077*k
h=k+26149*i+-3644112
if((h&-4194304)>>>0===0)d=B.a.j(h,14)
else d=h<0?0:255
J.x(g.a,g.d,d)
i=k-6419*j-13320*i+2229552
if((i&-4194304)>>>0===0)d=B.a.j(i,14)
else d=i<0?0:255
J.x(g.a,g.d+1,d)
k=k+33050*j+-4527440
if((k&-4194304)>>>0===0)d=B.a.j(k,14)
else d=k<0?0:255
J.x(g.a,g.d+2,d)
J.x(g.a,g.d+3,255)
s=J.d(a7.a,a7.d+s)
k=l&255
j=l>>>16
f=A.n(b3,a,f)
s=19077*s
i=s+26149*j+-3644112
if((i&-4194304)>>>0===0)d=B.a.j(i,14)
else d=i<0?0:255
J.x(f.a,f.d,d)
j=s-6419*k-13320*j+2229552
if((j&-4194304)>>>0===0)d=B.a.j(j,14)
else d=j<0?0:255
J.x(f.a,f.d+1,d)
s=s+33050*k+-4527440
if((s&-4194304)>>>0===0)d=B.a.j(s,14)
else d=s<0?0:255
J.x(f.a,f.d+2,d)
J.x(f.a,f.d+3,255)}}if((b4&1)===0){a5=B.a.j(3*a3+a4+131074,2)
s=J.d(a6.a,a6.d+a1)
k=a1*4
j=A.n(b2,a,k)
b.cT(s,a5&255,a5>>>16,j)
j.i(0,3,255)
if(t){a5=B.a.j(3*a4+a3+131074,2)
a1=J.d(a7.a,a7.d+a1)
b3.toString
k=A.n(b3,a,k)
b.cT(a1,a5&255,a5>>>16,k)
k.i(0,3,255)}}},
hB(a,b,c){var t,s,r,q,p,o,n,m,l=this,k=l.xr
if(k==null)return
t=A.n(k,null,0)
if(a===0){s=c-1
r=a}else{r=a-1
t.d=t.d-l.b.a
s=c}k=l.Q
q=l.as
if(k+a+c===q)s=q-k-r
for(k=l.b,p=0;p<s;++p){for(q=p+r,o=0;o<b;++o){n=J.d(t.a,t.d+o)
m=l.d.a
m=m==null?null:m.O(o,q,null);(m==null?new A.A():m).st(n)}t.d=t.d+k.a}},
hC(a,b,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=J.M(h.d.gv(0),0,null),e=h.b.a,d=A.q(f,!1,g,a*e*4),c=h.to
c===$&&A.b()
t=A.n(c,g,0)
c=h.x1
c===$&&A.b()
s=A.n(c,g,0)
c=h.x2
c===$&&A.b()
r=A.n(c,g,0)
q=a+a0
p=B.a.j(b+1,1)
o=e*4
e=h.rx
e===$&&A.b()
n=A.n(e,g,0)
e=h.ry
e===$&&A.b()
m=A.n(e,g,0)
if(a===0){h.cS(t,g,s,r,s,r,d,g,b)
l=a0}else{e=h.RG
e===$&&A.b()
h.cS(e,t,n,m,s,r,A.n(d,g,-o),d,b)
l=a0+1}n.sv(0,s.a)
m.sv(0,r.a)
for(e=2*o,c=-o,k=a;k+=2,k<q;){n.d=s.d
m.d=r.d
j=s.d
i=h.R8
i.toString
s.d=j+i
r.d+=i
d.d+=e
i=t.d
j=h.p4
j.toString
t.d=i+2*j
h.cS(A.n(t,g,-j),t,n,m,s,r,A.n(d,g,c),d,b)}e=t.d
c=h.p4
c.toString
t.d=e+c
if(h.Q+q<h.as){e=h.RG
e===$&&A.b()
e.bI(0,b,t)
h.rx.bI(0,p,s)
h.ry.bI(0,p,r);--l}else if((q&1)===0)h.cS(t,g,s,r,s,r,A.n(d,g,o),g,b)
return l},
hs(a,b){var t,s,r,q,p,o,n,m,l,k=this,j=k.b,i=j.a,h=j.b
if(a<0||b<=0||a+b>h)return null
if(a===0){j=i*h
k.aE=new Uint8Array(j)
t=k.bC
s=new A.ik(t,i,h)
r=t.D()
q=s.d=r&3
s.e=B.a.j(r,2)&3
s.f=B.a.j(r,4)&3
s.r=B.a.j(r,6)&3
if(s.gf0())if(q===0){if(t.c-t.d<j)s.r=1}else if(q===1){p=new A.d2(B.Z,A.k([],u.J))
p.a=i
p.b=h
j=A.k([],u.A)
q=A.k([],u.F)
o=new Uint32Array(2)
n=new A.fV(t,o)
o=n.e=J.M(B.n.gv(o),0,null)
m=t.D()
o.$flags&2&&A.c(o)
if(0>=o.length)return A.a(o,0)
o[0]=m
m=t.D()
o.$flags&2&&A.c(o)
if(1>=o.length)return A.a(o,1)
o[1]=m
m=t.D()
o.$flags&2&&A.c(o)
if(2>=o.length)return A.a(o,2)
o[2]=m
m=t.D()
o.$flags&2&&A.c(o)
if(3>=o.length)return A.a(o,3)
o[3]=m
m=t.D()
o.$flags&2&&A.c(o)
if(4>=o.length)return A.a(o,4)
o[4]=m
m=t.D()
o.$flags&2&&A.c(o)
if(5>=o.length)return A.a(o,5)
o[5]=m
m=t.D()
o.$flags&2&&A.c(o)
if(6>=o.length)return A.a(o,6)
o[6]=m
t=t.D()
o.$flags&2&&A.c(o)
if(7>=o.length)return A.a(o,7)
o[7]=t
n.b=!1
q=new A.fb(n,p,j,q)
q.dy=i
q.fr=h
s.x=q
q.ca(i,h,!0)
j=s.x
t=j.ch
q=t.length
if(q===1){if(0>=q)return A.a(t,0)
j=t[0].a===B.c6&&j.i1()}else j=!1
if(j){s.y=!0
j=s.x
t=j.c
l=t.a*t.b
j.db=0
t=B.a.a1(l,4)
t=new Uint8Array(l+(4-t))
j.cy=t
j.cx=J.al(B.e.gv(t),0,null)}else{s.y=!1
s.x.dO(i)}}else s.r=1
k.bQ=s}j=k.bQ
if(j!=null)if(!j.w){t=k.aE
t===$&&A.b()
if(!j.j5(a,b,t))return null}j=k.aE
j===$&&A.b()
return A.q(j,!1,null,a*i)},
ih(a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.fr.b,a3=a1.dy,a4=a1.k1
a4===$&&A.b()
if(!(a4<4))return A.a(a3,a4)
t=a3[a4]
a4=a1.bv
a4===$&&A.b()
a3=a1.y1
if(!(a3<a4.length))return A.a(a4,a3)
s=a4[a3]
r=A.q(s.a,!1,null,0)
a3=a1.k3
a3===$&&A.b()
if(0>=a3.length)return A.a(a3,0)
q=a3[0]
r.jq(0,r.c-r.d,0)
a3=s.b
a3===$&&A.b()
if(!a3){p=A.q(new Int16Array(16),!1,null,0)
a3=a5.b
a4=q.b
if(1>=a2.length)return A.a(a2,1)
o=a1.dg(a6,a2[1],a3+a4,t.b,0,p)
a5.b=q.b=o>0?1:0
if(o>1)a1.iV(p,r)
else{n=B.a.j(J.d(p.a,p.d)+3,3)
for(m=0;m<256;m+=16)J.x(r.a,r.d+m,n)}l=a2[0]
k=1}else{if(3>=a2.length)return A.a(a2,3)
l=a2[3]
k=0}j=a5.a&15
i=q.a&15
for(h=0,g=0;g<4;++g){f=i&1
for(e=0,d=0;d<4;++d){o=a1.dg(a6,l,f+(j&1),t.a,k,r)
f=o>k?1:0
j=j>>>1|f<<7
a3=J.d(r.a,r.d)!==0?1:0
if(o>3)a3=3
else if(o>1)a3=2
e=e<<2|a3
r.d+=16}j=j>>>4
i=i>>>1|f<<7
h=(h<<8|e)>>>0}c=i>>>4
for(a3=a2.length,b=j,a=0,a0=0;a0<4;a0+=2){a4=4+a0
j=B.a.a2(a5.a,a4)
i=B.a.a2(q.a,a4)
for(e=0,g=0;g<2;++g){f=i&1
for(d=0;d<2;++d){if(2>=a3)return A.a(a2,2)
o=a1.dg(a6,a2[2],f+(j&1),t.c,0,r)
f=o>0?1:0
j=j>>>1|f<<3
a4=J.d(r.a,r.d)!==0?1:0
if(o>3)a4=3
else if(o>1)a4=2
e=(e<<2|a4)>>>0
r.d+=16}j=j>>>2
i=i>>>1|f<<5}a=(a|B.a.J(e,4*a0))>>>0
b=(b|B.a.J(j<<4>>>0,a0))>>>0
c=(c|B.a.J(i&240,a0))>>>0}a5.a=b
q.a=c
s.e=h
s.f=a
if((a&43690)===0)t.toString
return(h|a)>>>0===0},
iV(a,b){var t,s,r,q,p,o,n,m,l,k,j=new Int32Array(16)
for(t=0;t<4;++t){s=12+t
r=J.d(a.a,a.d+t)+J.d(a.a,a.d+s)
q=4+t
p=8+t
o=J.d(a.a,a.d+q)+J.d(a.a,a.d+p)
n=J.d(a.a,a.d+q)-J.d(a.a,a.d+p)
m=J.d(a.a,a.d+t)-J.d(a.a,a.d+s)
if(!(t<16))return A.a(j,t)
j[t]=r+o
if(!(p<16))return A.a(j,p)
j[p]=r-o
j[q]=m+n
if(!(s<16))return A.a(j,s)
j[s]=m-n}for(l=0,t=0;t<4;++t){s=t*4
if(!(s<16))return A.a(j,s)
k=j[s]+3
q=3+s
if(!(q<16))return A.a(j,q)
q=j[q]
r=k+q
p=1+s
if(!(p<16))return A.a(j,p)
p=j[p]
s=2+s
if(!(s<16))return A.a(j,s)
s=j[s]
o=p+s
n=p-s
m=k-q
q=B.a.j(r+o,3)
J.x(b.a,b.d+l,q)
q=B.a.j(m+n,3)
J.x(b.a,b.d+(l+16),q)
q=B.a.j(r-o,3)
J.x(b.a,b.d+(l+32),q)
q=B.a.j(m-n,3)
J.x(b.a,b.d+(l+48),q)
l+=64}},
hU(a,b){var t,s,r,q,p,o,n
u.L.a(b)
if(a.a6(b[3])===0)t=a.a6(b[4])===0?2:3+a.a6(b[5])
else if(a.a6(b[6])===0)t=a.a6(b[7])===0?5+a.a6(159):7+2*a.a6(165)+a.a6(145)
else{s=a.a6(b[8])
r=9+s
if(!(r<11))return A.a(b,r)
q=2*s+a.a6(b[r])
if(!(q<4))return A.a(B.bd,q)
p=B.bd[q]
o=p.length
for(t=0,n=0;n<o;++n)t+=t+a.a6(p[n])
t+=3+B.a.J(8,q)}return t},
dg(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k
u.B.a(b)
u.L.a(d)
t=b.length
if(!(e<t))return A.a(b,e)
s=b[e].a
if(!(c<s.length))return A.a(s,c)
r=s[c]
for(;e<16;e=q){if(a.a6(r[0])===0)return e
while(a.a6(r[1])===0){++e
if(!(e>=0&&e<17))return A.a(B.ad,e)
s=B.ad[e]
if(!(s<t))return A.a(b,s)
s=b[s].a
if(0>=s.length)return A.a(s,0)
r=s[0]
if(e===16)return 16}q=e+1
if(!(q>=0&&q<17))return A.a(B.ad,q)
s=B.ad[q]
if(!(s<t))return A.a(b,s)
p=b[s].a
s=p.length
if(a.a6(r[2])===0){if(1>=s)return A.a(p,1)
r=p[1]
o=1}else{o=this.hU(a,r)
if(2>=s)return A.a(p,2)
r=p[2]}if(!(e>=0&&e<16))return A.a(B.bu,e)
s=B.bu[e]
n=a.b
n===$&&A.b()
m=a.dR(B.a.j(n,1))
n=a.b
if(n>>>0!==n||n>=128)return A.a(B.aa,n)
l=B.aa[n]
a.b=B.bA[n]
n=a.d
n===$&&A.b()
a.d=n-l
n=m!==0?-o:o
k=d[e>0?1:0]
J.x(f.a,f.d+s,n*k)}return 16},
ib(){var t,s,r,q,p,o,n,m,l,k,j=this,i=j.y1,h=4*i,g=j.go,f=j.id,e=j.bv
e===$&&A.b()
if(!(i<e.length))return A.a(e,i)
t=e[i]
i=j.c
i===$&&A.b()
i=i.a6(145)===0
t.b=i
if(!i){if(j.c.a6(156)!==0)s=j.c.a6(128)!==0?1:3
else s=j.c.a6(163)!==0?2:0
i=t.c
i.$flags&2&&A.c(i)
i[0]=s
g.toString
B.e.aq(g,h,h+4,s)
B.e.aq(f,0,4,s)}else{r=t.c
for(q=0,p=0;p<4;++p,q=k){s=f[p]
for(o=0;o<4;++o){i=h+o
if(!(i<g.length))return A.a(g,i)
e=g[i]
if(!(e<10))return A.a(B.bw,e)
e=B.bw[e]
if(!(s>=0&&s<10))return A.a(e,s)
n=e[s]
m=j.c.a6(n[0])
if(!(m<18))return A.a(B.a8,m)
l=B.a8[m]
while(l>0){e=j.c
if(!(l<9))return A.a(n,l)
e=2*l+e.a6(n[l])
if(!(e>=0&&e<18))return A.a(B.a8,e)
l=B.a8[e]}s=-l
g.$flags&2&&A.c(g)
g[i]=s}k=q+4
g.toString
B.e.ai(r,q,k,g,h)
f.$flags&2&&A.c(f)
if(!(p<4))return A.a(f,p)
f[p]=s}}if(j.c.a6(142)===0)i=0
else if(j.c.a6(114)===0)i=2
else i=j.c.a6(183)!==0?1:3
t.d=i}}
A.ij.prototype={
$2(a,b){return(a|b<<16)>>>0},
$S:20}
A.ee.prototype={
Y(a){var t,s
for(t=0;s=a-1,a>0;a=s)t=(t|B.a.U(this.a6(128),s))>>>0
return t},
c6(a){var t=this.Y(a)
return this.Y(1)===1?-t:t},
a6(a){var t,s=this,r=s.b
r===$&&A.b()
t=s.dR(B.a.j(r*a,8))
if(s.b<=126)s.iS()
return t},
dR(a){var t,s,r,q,p,o=this,n=o.d
n===$&&A.b()
if(n<0){t=o.a
s=t.c
r=t.d
if(s-r>=1){q=t.D()
n=o.c
n===$&&A.b()
o.c=(q|n<<8)>>>0
n=o.d+8
o.d=n
p=n}else{if(r<s){n=t.D()
t=o.c
t===$&&A.b()
o.c=(n|t<<8)>>>0
t=o.d+8
o.d=t
n=t}else if(!o.e){t=o.c
t===$&&A.b()
o.c=t<<8>>>0
n+=8
o.d=n
o.e=!0}p=n}}else p=n
n=o.c
n===$&&A.b()
if(B.a.b7(n,p)>a){t=o.b
t===$&&A.b()
s=a+1
o.b=t-s
o.c=n-B.a.U(s,p)
return 1}else{o.b=a
return 0}},
iS(){var t,s=this,r=s.b
r===$&&A.b()
if(!(r>=0&&r<128))return A.a(B.aa,r)
t=B.aa[r]
s.b=B.bA[r]
r=s.d
r===$&&A.b()
s.d=r-t}}
A.i7.prototype={
dH(a,b,c){var t,s=A.n(a,null,0)
for(t=0;t<16;++t){s.d=a.d+t
if(this.em(s,b,c))this.cI(s,b)}},
dG(a,b,c){var t,s=A.n(a,null,0)
for(t=0;t<16;++t){s.d=a.d+t*b
if(this.em(s,1,c))this.cI(s,1)}},
fo(a,b,c){var t,s,r=A.n(a,null,0)
for(t=4*b,s=3;s>0;--s){r.d+=t
this.dH(r,b,c)}},
fn(a,b,c){var t,s=A.n(a,null,0)
for(t=3;t>0;--t){s.d+=4
this.dG(s,b,c)}},
jH(a,b,c,d,e){var t,s,r=A.n(a,null,0)
for(t=4*b,s=3;s>0;--s){r.d+=t
this.bY(r,b,1,16,c,d,e)}},
ji(a,b,c,d,e){var t,s=A.n(a,null,0)
for(t=3;t>0;--t){s.d+=4
this.bY(s,1,b,16,c,d,e)}},
bZ(a,b,a0,a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.n(a,null,0)
for(t=-3*b,s=-2*b,r=-b,q=2*b;p=a1-1,a1>0;a1=p){if(this.en(c,b,a2,a3))if(this.ef(c,b,a4))this.cI(c,b)
else{o=J.d(c.a,c.d+t)
n=J.d(c.a,c.d+s)
m=J.d(c.a,c.d+r)
l=J.d(c.a,c.d)
k=J.d(c.a,c.d+b)
j=J.d(c.a,c.d+q)
i=$.j_()
h=1020+n-k
if(!(h>=0&&h<2041))return A.a(i,h)
h=1020+3*(l-m)+i[h]
if(!(h>=0&&h<2041))return A.a(i,h)
g=i[h]
h=B.a.j(27*g+63,7)
f=(h&2147483647)-((h&2147483648)>>>0)
h=B.a.j(18*g+63,7)
e=(h&2147483647)-((h&2147483648)>>>0)
h=B.a.j(9*g+63,7)
d=(h&2147483647)-((h&2147483648)>>>0)
h=$.ap()
i=255+o+d
if(!(i>=0&&i<766))return A.a(h,i)
i=h[i]
J.x(c.a,c.d+t,i)
i=$.ap()
h=255+n+e
if(!(h>=0&&h<766))return A.a(i,h)
h=i[h]
J.x(c.a,c.d+s,h)
h=$.ap()
i=255+m+f
if(!(i>=0&&i<766))return A.a(h,i)
i=h[i]
J.x(c.a,c.d+r,i)
i=$.ap()
h=255+l-f
if(!(h>=0&&h<766))return A.a(i,h)
h=i[h]
J.x(c.a,c.d,h)
h=$.ap()
i=255+k-e
if(!(i>=0&&i<766))return A.a(h,i)
i=h[i]
J.x(c.a,c.d+b,i)
i=$.ap()
h=255+j-d
if(!(h>=0&&h<766))return A.a(i,h)
h=i[h]
J.x(c.a,c.d+q,h)}c.d+=a0}},
bY(a,b,c,d,e,f,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=A.n(a,null,0)
for(t=-2*b,s=-b;r=d-1,d>0;d=r){if(this.en(g,b,e,f))if(this.ef(g,b,a0))this.cI(g,b)
else{q=J.d(g.a,g.d+t)
p=J.d(g.a,g.d+s)
o=J.d(g.a,g.d)
n=J.d(g.a,g.d+b)
m=3*(o-p)
l=$.j0()
k=B.a.j(m+4,3)
k=112+((k&2147483647)-((k&2147483648)>>>0))
if(!(k>=0&&k<225))return A.a(l,k)
j=l[k]
k=B.a.j(m+3,3)
k=112+((k&2147483647)-((k&2147483648)>>>0))
if(!(k>=0&&k<225))return A.a(l,k)
i=l[k]
k=B.a.j(j+1,1)
h=(k&2147483647)-((k&2147483648)>>>0)
k=$.ap()
l=255+q+h
if(!(l>=0&&l<766))return A.a(k,l)
l=k[l]
J.x(g.a,g.d+t,l)
l=$.ap()
k=255+p+i
if(!(k>=0&&k<766))return A.a(l,k)
k=l[k]
J.x(g.a,g.d+s,k)
k=$.ap()
l=255+o-j
if(!(l>=0&&l<766))return A.a(k,l)
l=k[l]
J.x(g.a,g.d,l)
l=$.ap()
k=255+n-h
if(!(k>=0&&k<766))return A.a(l,k)
k=l[k]
J.x(g.a,g.d+b,k)}g.d+=c}},
cI(a,b){var t,s,r,q=J.d(a.a,a.d+-2*b),p=-b,o=J.d(a.a,a.d+p),n=J.d(a.a,a.d),m=J.d(a.a,a.d+b),l=$.j_(),k=1020+q-m
if(!(k>=0&&k<2041))return A.a(l,k)
t=3*(n-o)+l[k]
k=$.j0()
l=112+B.a.au(B.a.j(t+4,3),32)
if(!(l>=0&&l<225))return A.a(k,l)
s=k[l]
l=112+B.a.au(B.a.j(t+3,3),32)
if(!(l>=0&&l<225))return A.a(k,l)
r=k[l]
l=$.ap()
k=255+o+r
if(!(k>=0&&k<766))return A.a(l,k)
a.i(0,p,l[k])
k=$.ap()
l=255+n-s
if(!(l>=0&&l<766))return A.a(k,l)
a.i(0,0,k[l])},
ef(a,b,c){var t=J.d(a.a,a.d+-2*b),s=J.d(a.a,a.d+-b),r=J.d(a.a,a.d),q=J.d(a.a,a.d+b),p=$.h7(),o=255+t-s
if(!(o>=0&&o<511))return A.a(p,o)
if(p[o]<=c){o=255+q-r
if(!(o>=0&&o<511))return A.a(p,o)
o=p[o]>c
p=o}else p=!0
return p},
em(a,b,c){var t,s=J.d(a.a,a.d+-2*b),r=J.d(a.a,a.d+-b),q=J.d(a.a,a.d),p=J.d(a.a,a.d+b),o=$.h7(),n=255+r-q
if(!(n>=0&&n<511))return A.a(o,n)
n=o[n]
o=$.iZ()
t=255+s-p
if(!(t>=0&&t<511))return A.a(o,t)
return 2*n+o[t]<=c},
en(a,b,c,d){var t,s,r,q=J.d(a.a,a.d+-4*b),p=J.d(a.a,a.d+-3*b),o=J.d(a.a,a.d+-2*b),n=J.d(a.a,a.d+-b),m=J.d(a.a,a.d),l=J.d(a.a,a.d+b),k=J.d(a.a,a.d+2*b),j=J.d(a.a,a.d+3*b),i=$.h7(),h=255+n-m
if(!(h>=0&&h<511))return A.a(i,h)
h=i[h]
t=$.iZ()
s=255+o
r=s-l
if(!(r>=0&&r<511))return A.a(t,r)
if(2*h+t[r]>c)return!1
h=255+q-p
if(!(h>=0&&h<511))return A.a(i,h)
t=!1
if(i[h]<=d){h=255+p-o
if(!(h>=0&&h<511))return A.a(i,h)
if(i[h]<=d){h=s-n
if(!(h>=0&&h<511))return A.a(i,h)
if(i[h]<=d){h=255+j-k
if(!(h>=0&&h<511))return A.a(i,h)
if(i[h]<=d){h=255+k-l
if(!(h>=0&&h<511))return A.a(i,h)
if(i[h]<=d){h=255+l-m
if(!(h>=0&&h<511))return A.a(i,h)
h=i[h]<=d
i=h}else i=t}else i=t}else i=t}else i=t}else i=t
return i},
bz(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new Int32Array(16)
for(t=0,s=0,r=0;r<4;++r){q=t+8
p=J.d(a.a,a.d+t)+J.d(a.a,a.d+q)
o=J.d(a.a,a.d+t)-J.d(a.a,a.d+q)
q=t+4
n=B.a.j(J.d(a.a,a.d+q)*35468,16)
m=t+12
l=B.a.j(J.d(a.a,a.d+m)*85627,16)
k=(n&2147483647)-((n&2147483648)>>>0)-((l&2147483647)-((l&2147483648)>>>0))
q=B.a.j(J.d(a.a,a.d+q)*85627,16)
m=B.a.j(J.d(a.a,a.d+m)*35468,16)
j=(q&2147483647)-((q&2147483648)>>>0)+((m&2147483647)-((m&2147483648)>>>0))
i=s+1
if(!(s<16))return A.a(f,s)
f[s]=p+j
s=i+1
if(!(i<16))return A.a(f,i)
f[i]=o+k
i=s+1
if(!(s<16))return A.a(f,s)
f[s]=o-k
s=i+1
if(!(i<16))return A.a(f,i)
f[i]=p-j;++t}for(h=0,s=0,r=0;r<4;++r){if(!(s<16))return A.a(f,s)
g=f[s]+4
q=s+8
if(!(q<16))return A.a(f,q)
q=f[q]
p=g+q
o=g-q
q=s+4
if(!(q<16))return A.a(f,q)
q=f[q]
n=B.a.j(q*35468,16)
m=s+12
if(!(m<16))return A.a(f,m)
m=f[m]
l=B.a.j(m*85627,16)
k=(n&2147483647)-((n&2147483648)>>>0)-((l&2147483647)-((l&2147483648)>>>0))
q=B.a.j(q*85627,16)
m=B.a.j(m*35468,16)
j=(q&2147483647)-((q&2147483648)>>>0)+((m&2147483647)-((m&2147483648)>>>0))
A.bx(b,h,0,0,p+j)
A.bx(b,h,1,0,o+k)
A.bx(b,h,2,0,o-k)
A.bx(b,h,3,0,p-j);++s
h+=32}},
jE(a,b,c){this.bz(a,b)
if(c)this.bz(A.n(a,null,16),A.n(b,null,4))},
ct(a,b){var t,s,r=J.d(a.a,a.d)+4
for(t=0;t<4;++t)for(s=0;s<4;++s)A.bx(b,0,s,t,r)},
fa(a,b){var t=this,s=null
if(J.d(a.a,a.d)!==0)t.ct(a,b)
if(J.d(a.a,a.d+16)!==0)t.ct(A.n(a,s,16),A.n(b,s,4))
if(J.d(a.a,a.d+32)!==0)t.ct(A.n(a,s,32),A.n(b,s,128))
if(J.d(a.a,a.d+48)!==0)t.ct(A.n(a,s,48),A.n(b,s,132))}}
A.ic.prototype={}
A.ig.prototype={}
A.ii.prototype={}
A.ed.prototype={}
A.ih.prototype={}
A.i8.prototype={}
A.bb.prototype={}
A.eg.prototype={}
A.fX.prototype={}
A.eh.prototype={}
A.ei.prototype={}
A.ef.prototype={
cl(){var t,s,r,q,p=this,o=p.b
if(o.ae(8)!==47)return!1
t=o.ae(14)+1
s=o.ae(14)+1
r=o.ae(1)
p.dy=t
p.fr=s
q=p.c
q.f=B.al
q.a=t
q.b=s
q.d=r!==0
if(o.ae(3)!==0)return!1
return!0},
bB(){var t,s,r,q,p,o=this,n=null
o.f=0
if(!o.cl())return n
o.ca(o.dy,o.fr,!0)
o.dO(o.dy)
t=o.dy
o.d=A.J(n,n,B.f,0,B.i,o.fr,n,0,4,n,B.f,t,!1)
t=o.cx
t.toString
s=o.c
r=s.a
q=s.b
if(!o.d5(t,r,q,q,o.gim()))return n
t=s.w
if(t.length!==0){p=A.q(new A.aq(t),!1,n,0)
t=o.d
t.toString
t.e=A.j5(p)}return o.d},
dO(a){var t,s=this,r=s.c
r=r.a*r.b+a
t=new Uint32Array(r+a*16)
s.cx=t
s.cy=J.M(B.n.gv(t),0,null)
s.db=r
return!0},
iO(a){var t,s,r,q,p,o,n,m=this
u.L.a(a)
t=m.b
s=t.ae(2)
r=m.CW
q=B.a.J(1,s)
if((r&q)>>>0!==0)return!1
m.CW=(r|q)>>>0
p=new A.fW(B.c5)
B.c.M(m.ch,p)
if(!(s<4))return A.a(B.bG,s)
r=B.bG[s]
p.a=r
p.b=a[0]
p.c=a[1]
switch(r.a){case 0:case 1:t=t.ae(3)+2
p.e=t
p.d=m.ca(A.by(p.b,t),A.by(p.c,p.e),!1)
break
case 3:o=t.ae(8)+1
if(o>16)n=0
else if(o>4)n=1
else{t=o>2?2:3
n=t}B.c.i(a,0,A.by(p.b,n))
p.e=n
p.d=m.ca(o,1,!1)
m.hF(o,p)
break
case 2:break}return!0},
ca(a,b,c){var t,s,r,q,p,o,n,m,l=this
if(c)for(t=l.b,s=u.t,r=b,q=a;t.ae(1)!==0;){p=A.k([q,r],s)
if(!l.iO(p))throw A.f(A.m("Invalid Transform"))
q=p[0]
r=p[1]}else{r=b
q=a}t=l.b
if(t.ae(1)!==0){o=t.ae(4)
if(!(o>=1&&o<=11))throw A.f(A.m("Invalid Color Cache"))}else o=0
if(!l.iB(q,r,o,c))throw A.f(A.m("Invalid Huffman Codes"))
if(o>0){t=B.a.J(1,o)
l.w=t
l.x=new A.id(new Uint32Array(t),32-o)}else l.w=0
t=l.c
t.a=q
t.b=r
n=l.z
l.Q=A.by(q,n)
l.y=n===0?4294967295:B.a.J(1,n)-1
if(c){l.f=0
return null}m=new Uint32Array(q*r)
if(!l.d5(m,q,r,r,null))throw A.f(A.m("Failed to decode image data."))
l.f=0
return m},
d5(b4,b5,b6,b7,b8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this
u.e7.a(b8)
t=b3.f
s=B.a.av(t,b5)
r=B.a.a1(t,b5)
q=b3.e9(r,s)
p=b3.f
o=b5*b6
n=b5*b7
t=b3.w
m=280+t
l=t>0?b3.x:null
k=b3.y
for(t=b4.length,j=b3.b,i=b8!=null,h=b4.$flags|0,g=p;p<n;){if((r&k)>>>0===0){f=b3.cc(b3.as,b3.Q,b3.z,r,s)
e=b3.ax
if(!(f<e.length))return A.a(e,f)
q=e[f]}d=0
if(q.d){e=q.c
h&2&&A.c(b4)
if(!(p>=0&&p<t))return A.a(b4,p)
b4[p]=e;++p;++r
if(r>=b5){++s
if(i&&s<=b7)b8.$2(s,!0)
if(l!=null)for(e=l.b,c=l.a,b=c.$flags|0;g<p;){if(!(g>=0&&g<t))return A.a(b4,g)
a=b4[g]
a0=B.a.a_(a*506832829>>>0,e)
b&2&&A.c(c)
if(!(a0<c.length))return A.a(c,a0)
c[a0]=a;++g}r=d}continue}if(j.a>=32)j.bN()
if(q.e){a1=j.cp()&63
e=q.f
if(!(a1<e.length))return A.a(e,a1)
a2=e[a1]
e=a2.a
c=j.a
if(e<256){j.a=c+e
e=a2.b
h&2&&A.c(b4)
if(!(p>=0&&p<t))return A.a(b4,p)
b4[p]=e
a3=0}else{j.a=c+(e-256)
a3=a2.b}if(j.b)break
if(a3===0){++p;++r
if(r>=b5){++s
if(i&&s<=b7)b8.$2(s,!0)
if(l!=null)for(e=l.b,c=l.a,b=c.$flags|0;g<p;){if(!(g>=0&&g<t))return A.a(b4,g)
a=b4[g]
a0=B.a.a_(a*506832829>>>0,e)
b&2&&A.c(c)
if(!(a0<c.length))return A.a(c,a0)
c[a0]=a;++g}r=d}continue}}else a3=q.bT(0,j)
if(a3<256){if(q.b){e=q.c
h&2&&A.c(b4)
if(!(p>=0&&p<t))return A.a(b4,p)
b4[p]=(e|a3<<8)>>>0}else{a4=q.bT(1,j)
if(j.a>=32)j.bN()
a5=A.lx(q.bT(2,j),a3,a4,q.bT(3,j))
h&2&&A.c(b4)
if(!(p>=0&&p<t))return A.a(b4,p)
b4[p]=a5}++p;++r
if(r>=b5){++s
if(i&&s<=b7)b8.$2(s,!0)
if(l!=null)for(e=l.b,c=l.a,b=c.$flags|0;g<p;){if(!(g>=0&&g<t))return A.a(b4,g)
a=b4[g]
a0=B.a.a_(a*506832829>>>0,e)
b&2&&A.c(c)
if(!(a0<c.length))return A.a(c,a0)
c[a0]=a;++g}r=d}}else if(a3<280){a6=b3.cL(a3-256)
a7=q.bT(4,j)
if(j.a>=32)j.bN()
a8=b3.ep(b5,b3.cL(a7))
if(p<a8||o-p<a6)return!1
else{a9=p-a8
for(b0=0;b0<a6;++b0){e=p+b0
c=a9+b0
if(!(c>=0&&c<t))return A.a(b4,c)
c=b4[c]
h&2&&A.c(b4)
if(!(e>=0&&e<t))return A.a(b4,e)
b4[e]=c}}p+=a6
r+=a6
while(r>=b5){r-=b5;++s
if(i&&s<=b7)b8.$2(s,!0)}if((r&k)>>>0!==0){f=b3.cc(b3.as,b3.Q,b3.z,r,s)
e=b3.ax
if(!(f<e.length))return A.a(e,f)
q=e[f]}if(l!=null)for(e=l.b,c=l.a,b=c.$flags|0;g<p;){if(!(g>=0&&g<t))return A.a(b4,g)
a=b4[g]
a0=B.a.a_(a*506832829>>>0,e)
b&2&&A.c(c)
if(!(a0<c.length))return A.a(c,a0)
c[a0]=a;++g}}else if(a3<m){a0=a3-280
while(g<p){l.toString
if(!(g>=0&&g<t))return A.a(b4,g)
e=b4[g]
b1=B.a.a_(e*506832829>>>0,l.b)
c=l.a
c.$flags&2&&A.c(c)
if(!(b1<c.length))return A.a(c,b1)
c[b1]=e;++g}e=l.a
c=e.length
if(!(a0<c))return A.a(e,a0)
b=e[a0]
h&2&&A.c(b4)
if(!(p>=0&&p<t))return A.a(b4,p)
b4[p]=b;++p;++r
if(r>=b5){++s
if(i&&s<=b7)b8.$2(s,!0)
for(b=l.b,a=e.$flags|0;g<p;){if(!(g>=0&&g<t))return A.a(b4,g)
b2=b4[g]
a0=B.a.a_(b2*506832829>>>0,b)
a&2&&A.c(e)
if(!(a0<c))return A.a(e,a0)
e[a0]=b2;++g}r=d}}else return!1}if(i)b8.$2(s>b7?b7:s,!1)
b3.f=p
return!0},
i1(){var t,s,r,q,p,o,n,m
if(this.w>0)return!1
for(t=this.at,s=this.ax,r=s.length,q=0;q<t;++q){if(!(q<r))return A.a(s,q)
p=s[q].a
o=p.length
if(1>=o)return A.a(p,1)
n=p[1]
m=n.a
n=n.b
if(!(n<m.length))return A.a(m,n)
if(m[n].a>0)return!1
if(2>=o)return A.a(p,2)
n=p[2]
m=n.a
n=n.b
if(!(n<m.length))return A.a(m,n)
if(m[n].a>0)return!1
if(3>=o)return A.a(p,3)
o=p[3]
n=o.a
o=o.b
if(!(o<n.length))return A.a(n,o)
if(n[o].a>0)return!1}return!0},
hG(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h=this
if(b&&B.a.a1(a,16)!==0)return
t=h.r
s=a-t
r=h.dy
q=r*t
while(s>0){p=s>16?16:s
o=r*p
n=r*t
m=h.db
h.dP(t,p,q)
for(r=h.dx,l=h.cx,k=0;k<o;++k){r.toString
j=n+k
i=m+k
if(!(i<l.length))return A.a(l,i)
i=l[i]
r.$flags&2&&A.c(r)
if(!(j>=0&&j<r.length))return A.a(r,j)
r[j]=i>>>8&255}s-=p
r=h.dy
q+=p*r
t+=p}h.r=a},
ha(a,a0,a1){var t,s,r,q,p,o,n,m,l,k,j=this,i=j.f,h=B.a.av(i,a),g=B.a.a1(i,a),f=j.e9(g,h),e=j.f,d=a*a0,c=a*a1,b=j.y
i=j.b
for(;;){if(!(!i.b&&e<c))break
if((g&b)>>>0===0){t=j.cc(j.as,j.Q,j.z,g,h)
s=j.ax
if(!(t<s.length))return A.a(s,t)
f=s[t]}if(i.a>=32)i.bN()
r=f.bT(0,i)
if(r<256){s=j.cy
s===$&&A.b()
s.$flags&2&&A.c(s)
if(!(e>=0&&e<s.length))return A.a(s,e)
s[e]=r;++e;++g
if(g>=a){++h
if(B.a.a1(h,16)===0)j.dc(h)
g=0}}else if(r<280){q=j.cL(r-256)
p=f.bT(4,i)
if(i.a>=32)i.bN()
o=j.ep(a,j.cL(p))
if(e>=o&&d-e>=q)for(s=j.cy,n=0;n<q;++n){s===$&&A.b()
m=e+n
l=m-o
k=s.length
if(!(l>=0&&l<k))return A.a(s,l)
l=s[l]
s.$flags&2&&A.c(s)
if(!(m>=0&&m<k))return A.a(s,m)
s[m]=l}else{j.f=e
return!0}e+=q
g+=q
while(g>=a){g-=a;++h
if(B.a.a1(h,16)===0)j.dc(h)}if(e<c&&(g&b)>>>0!==0){t=j.cc(j.as,j.Q,j.z,g,h)
s=j.ax
if(!(t<s.length))return A.a(s,t)
f=s[t]}}else return!1}j.dc(h)
j.f=e
return!0},
dc(a){var t,s,r=this,q=r.r,p=a-q,o=r.cy
o===$&&A.b()
t=A.q(o,!1,null,r.c.a*q)
if(p>0){o=r.dx
o.toString
s=A.q(o,!1,null,r.dy*q)
o=r.ch
if(0>=o.length)return A.a(o,0)
o[0].j_(q,q+p,t,s)}r.r=a},
io(a,b){var t,s,r,q,p,o,n=this,m=n.c.a,l=n.r
if(b)if(B.a.a1(a,16)!==0)return
t=a-l
if(t<=0){n.r=a
return}n.dP(l,t,m*l)
for(s=n.db,r=n.r,q=0;q<t;++q,++r)for(p=0;p<n.dy;++p,++s){m=n.cx
if(!(s>=0&&s<m.length))return A.a(m,s)
o=m[s]
m=n.d.a
if(m!=null)m.al(p,r,o>>>16&255,o>>>8&255,o&255,o>>>24&255)}n.r=a},
dP(a,b,c){var t,s=this,r=s.ch,q=r.length,p=s.c.a,o=a+b,n=s.db,m=s.cx
m.toString
B.n.ai(m,n,n+p*b,m,c)
for(;t=q-1,q>0;q=t){if(!(t>=0&&t<r.length))return A.a(r,t)
p=r[t]
m=s.cx
m.toString
p.jo(a,o,m,n,m,n)}},
iB(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=1,d=null
if(a0&&f.b.ae(1)!==0){t=2+f.b.ae(3)
s=A.by(a,t)
r=A.by(b,t)
q=s*r
p=f.ca(s,r,!1)
if(p==null)return!1
f.z=t
for(o=p.length,n=p.$flags|0,m=e,l=0;l<q;++l){if(!(l<o))return A.a(p,l)
k=p[l]>>>8&65535
n&2&&A.c(p)
p[l]=k
if(k>=m)m=k+1}if(m>1000||m>a*b){d=new Int32Array(1)
B.R.aq(d,0,1,255)
for(e=0,l=0;l<q;++l){if(!(l<o))return A.a(p,l)
j=p[l]
if(!(j<1))return A.a(d,j)
if(d[j]===-1){i=e+1
d[j]=e
e=i}h=d[j]
n&2&&A.c(p)
p[l]=h}}else e=m}else{p=null
m=1}if(f.b.b)return!1
g=f.iC(c,e,m,d)
if(g==null)return!1
f.as=p
f.at=e
f.ax=g
return!0},
ds(a,b,c,d,e,f){var t,s=a.a,r=a.b,q=d
do{q-=c
t=r+(b+q)
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
t.a=e
t.b=f}while(q>0)},
i4(a,b,c){var t=B.a.U(1,b-c)
while(b<15){t-=a[b]
if(t<=0)break;++b
t=t<<1>>>0}return b-c},
ed(a,b){var t=B.a.U(1,b-1)
while((a&t)>>>0!==0)t=t>>>1
return t!==0?((a&t-1)>>>0)+t:a},
dS(a4,a5,a6,a7,a8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=B.a.J(1,a5),a2=new Int32Array(16),a3=new Int32Array(16)
for(t=a6.length,s=0;s<a7;++s){if(!(s<t))return A.a(a6,s)
r=a6[s]
if(r>15)return 0
if(!(r>=0))return A.a(a2,r)
a2[r]=a2[r]+1}if(a2[0]===a7)return 0
a3[1]=0
for(q=1;q<15;q=p){r=a2[q]
if(r>B.a.J(1,q))return 0
p=q+1
a3[p]=a3[q]+r}for(r=a8!=null,s=0;s<a7;++s){if(!(s<t))return A.a(a6,s)
o=a6[s]
if(o>0)if(r){if(!(o<16))return A.a(a3,o)
n=a3[o]
if(n>=a7)return 0
a3[o]=n+1
a8.$flags&2&&A.c(a8)
if(!(n>=0&&n<a8.length))return A.a(a8,n)
a8[n]=s}else{if(!(o<16))return A.a(a3,o)
a3[o]=a3[o]+1}}if(a3[15]===1){if(r){a4.toString
if(0>=a8.length)return A.a(a8,0)
a0.ds(a4,0,1,a1,0,a8[0])}return a1}m=a1-1
for(t=a4==null,l=0,k=1,j=1,s=0,q=1,i=2;q<=a5;++q,i=i<<1>>>0){j=j<<1>>>0
k+=j
if(!(q<16))return A.a(a2,q)
j-=a2[q]
if(j<0)return 0
if(t)continue
for(h=q&255;a2[q]>0;a2[q]=a2[q]-1,s=g){g=s+1
if(!(s>=0&&s<a8.length))return A.a(a8,s)
a0.ds(a4,l,i,a1,h,a8[s])
l=a0.ed(l,q)}}for(q=a5+1,t=!t,f=a1,e=0,d=4294967295,i=2;q<=15;++q,i=i<<1>>>0){j=j<<1>>>0
k+=j
j-=a2[q]
if(j<0)return 0
for(h=q-a5&255;a2[q]>0;a2[q]=a2[q]-1){c=(l&m)>>>0
if(c!==d){if(t)e+=f
b=a0.i4(a2,q,a5)
f=B.a.U(1,b)
a1+=f
if(t){r=a4.a
n=a4.b+c
if(!(n>=0&&n<r.length))return A.a(r,n)
n=r[n]
n.a=b+a5&255
n.b=e-c}d=c}if(t){g=s+1
if(!(s>=0&&s<a8.length))return A.a(a8,s)
a=a8[s]
a0.ds(a4,e+B.a.a2(l,a5),i,f,h,a)
s=g}l=a0.ed(l,q)}}if(k!==2*a3[15]-1)return 0
return a1},
eI(a,b,c,d){var t,s,r,q,p,o,n=this.dS(null,b,c,d,null)
if(n===0||a==null)return n
t=a.b
s=t.d
r=t.e
if(s+n>=r){q=new A.dm()
if(n>r)r=n
p=A.j9(r)
q.e=r
q.b=q.a=p
a.b=q
t=q}o=new Uint16Array(d)
this.dS(t.b,b,c,d,o)
return n},
iA(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new A.eV(new A.dm())
d.dL(128)
if(this.eI(d,7,a,19)===0)return!1
t=this.b
if(t.ae(1)!==0){s=2+t.ae(2+2*t.ae(3))
if(s>b)return!1}else s=b
for(r=8,q=0;q<b;s=p){p=s-1
if(s===0)break
if(t.a>=32)t.bN()
o=d.b.a
o.toString
n=o.a
o=o.b+(t.cp()&127)
if(!(o<n.length))return A.a(n,o)
m=n[o]
t.a=t.a+m.a
l=m.b
if(l<16){k=q+1
c.$flags&2&&A.c(c)
if(!(q>=0&&q<c.length))return A.a(c,q)
c[q]=l
if(l!==0)r=l
q=k}else{j=l-16
if(!(j<3))return A.a(B.b9,j)
i=B.b9[j]
h=B.dk[j]
g=t.ae(i)+h
if(q+g>b)return!1
f=l===16?r:0
for(o=c.$flags|0;e=g-1,g>0;g=e,q=k){k=q+1
o&2&&A.c(c)
if(!(q>=0&&q<c.length))return A.a(c,q)
c[q]=f}}}return!0},
eu(a,b,c){var t,s,r,q,p,o,n,m=this.b,l=m.ae(1)
B.R.aq(b,0,a,0)
if(l!==0){t=m.ae(1)
s=m.ae(m.ae(1)===0?1:8)
b.$flags&2&&A.c(b)
r=b.length
if(!(s<r))return A.a(b,s)
b[s]=1
if(t+1===2){s=m.ae(8)
if(!(s<r))return A.a(b,s)
b[s]=1}q=!0}else{p=new Int32Array(19)
o=m.ae(4)+4
for(n=0;n<o;++n){if(!(n<19))return A.a(B.bs,n)
t=B.bs[n]
r=m.ae(3)
if(!(t<19))return A.a(p,t)
p[t]=r}q=this.iA(p,a,b)}return q&&!m.b?this.eI(c,8,b,a):0},
cD(a,b,c){var t=c.a,s=a.a
c.a=t+s
c.b=(c.b|B.a.J(a.b,b))>>>0
return s},
fY(a){var t,s,r,q,p,o,n,m,l,k,j=this
for(t=a.a,s=t.length,r=a.f,q=r.length,p=0;p<64;++p){if(!(p<q))return A.a(r,p)
o=r[p]
if(0>=s)return A.a(t,0)
n=t[0]
m=n.a
n=n.b+p
if(!(n<m.length))return A.a(m,n)
l=m[n]
n=l.b
if(n>=256){o.a=l.a+256
o.b=n}else{o.b=o.a=0
k=B.a.a2(p,j.cD(l,8,o))
if(1>=s)return A.a(t,1)
n=t[1]
m=n.a
n=n.b+k
if(!(n<m.length))return A.a(m,n)
k=B.a.a2(k,j.cD(m[n],16,o))
if(2>=s)return A.a(t,2)
n=t[2]
m=n.a
n=n.b+k
if(!(n<m.length))return A.a(m,n)
k=B.a.a2(k,j.cD(m[n],0,o))
if(3>=s)return A.a(t,3)
n=t[3]
m=n.a
n=n.b+k
if(!(n<m.length))return A.a(m,n)
B.a.a2(k,j.cD(m[n],24,o))}}},
iC(a8,a9,b0,b1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null,a6=a8>0,a7=280+(a6?B.a.J(1,a8):0)
if(!(a8<12))return A.a(B.bg,a8)
t=B.bg[a8]
s=b1==null
if(s&&a9!==b0)return a5
r=new Int32Array(a7)
q=J.a9(a9,u.f)
for(p=0;p<a9;++p)q[p]=A.ms()
o=new A.eV(new A.dm())
o.dL(a9*t)
a4.ay=o
for(o=!s,n=0;n<b0;++n){if(o){if(!(n<b1.length))return A.a(b1,n)
m=b1[n]===-1}else m=!1
if(m)for(l=0;l<5;++l){k=B.bi[l]
if(a4.eu(l===0&&a6?k+B.a.J(1,a8):k,r,a5)===0)return a5}else{if(s)m=n
else{if(!(n<b1.length))return A.a(b1,n)
m=b1[n]}if(!(m>=0&&m<a9))return A.a(q,m)
j=q[m]
i=j.a
for(m=i.length,h=0,g=!0,f=0,l=0;l<5;++l){k=B.bi[l]
if(l===0&&a6)k+=B.a.J(1,a8)
e=a4.eu(k,r,a4.ay)
d=a4.ay.b.b
d.toString
B.c.i(i,l,d)
if(e===0)return a5
if(g&&B.h9[l]===1){if(!(l<m))return A.a(i,l)
d=i[l]
c=d.a
d=d.b
if(!(d<c.length))return A.a(c,d)
g=c[d].a===0}if(!(l<m))return A.a(i,l)
d=i[l]
c=d.a
d=d.b
if(!(d<c.length))return A.a(c,d)
f+=c[d].a
d=a4.ay.b
d.d+=e
c=d.b
d.b=new A.dl(c.a,c.b+e)
if(l<=3){b=r[0]
for(a=1;a<k;++a){if(!(a<a7))return A.a(r,a)
a0=r[a]
if(a0>b)b=a0}h+=b}}j.b=g
j.d=!1
d=!1
if(g){if(1>=m)return A.a(i,1)
c=i[1]
a1=c.a
c=c.b
if(!(c<a1.length))return A.a(a1,c)
a2=a1[c].b
if(2>=m)return A.a(i,2)
c=i[2]
a1=c.a
c=c.b
if(!(c<a1.length))return A.a(a1,c)
a3=a1[c].b
if(3>=m)return A.a(i,3)
m=i[3]
c=m.a
m=m.b
if(!(m<c.length))return A.a(c,m)
m=(c[m].b<<24|a2<<16|a3)>>>0
j.c=m
if(f===0){d=i[0]
c=d.a
d=d.b
if(!(d<c.length))return A.a(c,d)
d=c[d].b<24}if(d){j.d=!0
c=i[0]
a1=c.a
c=c.b
if(!(c<a1.length))return A.a(a1,c)
j.c=(m|a1[c].b<<8)>>>0}m=d}else m=d
m=!m&&h<6
j.e=m
if(m)a4.fY(j)}}return q},
cL(a){var t
if(a<4)return a+1
t=B.a.j(a-2,1)
return B.a.J(2+(a&1),t)+this.b.ae(t)+1},
ep(a,b){var t,s,r
if(b>120)return b-120
else{t=b-1
if(!(t>=0))return A.a(B.bj,t)
s=B.bj[t]
r=(s>>>4)*a+(8-(s&15))
return r>=1?r:1}},
hF(a,b){var t,s,r,q,p,o,n,m,l=B.a.J(1,B.a.a2(8,b.e)),k=new Uint32Array(l),j=b.d
j.toString
t=J.M(B.n.gv(j),0,null)
s=J.M(B.n.gv(k),0,null)
j=b.d
if(0>=j.length)return A.a(j,0)
j=j[0]
if(0>=l)return A.a(k,0)
k[0]=j
r=4*a
for(j=t.length,q=s.length,p=s.$flags|0,o=4;o<r;++o){if(!(o<j))return A.a(t,o)
n=t[o]
m=o-4
if(!(m<q))return A.a(s,m)
m=s[m]
p&2&&A.c(s)
if(!(o<q))return A.a(s,o)
s[o]=n+m&255}for(r=4*l;o<r;++o){p&2&&A.c(s)
if(!(o<q))return A.a(s,o)
s[o]=0}b.d=k
return!0},
cc(a,b,c,d,e){var t
if(c===0||a==null)return 0
t=b*B.a.j(e,c)+B.a.j(d,c)
if(!(t<a.length))return A.a(a,t)
return a[t]},
e9(a,b){var t=this,s=t.cc(t.as,t.Q,t.z,a,b),r=t.ax
if(!(s<r.length))return A.a(r,s)
return r[s]}}
A.fb.prototype={
jf(a,b){return this.hG(a,b)}}
A.fV.prototype={
cp(){var t,s,r,q=this.a
if(q<32){t=this.d
s=B.a.a_(t[0],q)
t=t[1]
if(!(q>=0))return A.a(B.V,q)
r=s+((t&B.V[q])>>>0)*(B.V[32-q]+1)}else{t=this.d
r=q===32?t[1]:B.a.a_(t[1],q-32)}return r},
ae(a){var t,s,r=this
if(!r.b&&a<25){t=r.cp()
if(!(a<33))return A.a(B.V,a)
s=B.V[a]
r.a+=a
r.bN()
return(t&s)>>>0}else{r.b=!0
throw A.f(A.m("Not enough data in input."))}},
bN(){var t,s,r,q=this,p=q.c,o=q.d,n=o.$flags|0,m=p.c
for(;;){if(!(q.a>=8&&p.d<m))break
t=J.d(p.a,p.d++)
s=o[0]
r=o[1]
n&2&&A.c(o)
o[0]=(s>>>8)+(r&255)*16777216
o[1]=r>>>8
o[1]=(o[1]|t*16777216)>>>0
q.a-=8}}}
A.id.prototype={}
A.c9.prototype={
ad(){return"VP8LImageTransformType."+this.b}}
A.fW.prototype={
jo(a,b,c,d,e,f){var t,s,r,q,p=this,o=p.b
switch(p.a.a){case 2:p.iX(e,f,(b-a)*o)
break
case 0:p.jr(a,b,c,d,e,f)
if(b!==p.c){t=f-o
B.n.ai(e,t,t+o,c,f+(b-a-1)*o)}break
case 1:p.j0(a,b,c,d,e,f)
break
case 3:if(d===f&&p.e>0){s=b-a
r=s*A.by(o,p.e)
q=f+s*o-r
B.n.ai(e,q,q+r,c,f)
p.eV(a,b,c,q,e,f)}else p.eV(a,b,c,d,e,f)
break}},
j_(a,b,c,d){var t,s,r,q,p,o,n=this.e,m=B.a.a2(8,n),l=this.b,k=this.d
if(m<8){t=B.a.J(1,n)-1
s=B.a.J(1,m)-1
for(r=a;r<b;++r)for(q=0,p=0;p<l;++p){if((p&t)>>>0===0){q=J.d(c.a,c.d);++c.d}n=(q&s)>>>0
if(!(n>=0&&n<k.length))return A.a(k,n)
n=k[n]
J.x(d.a,d.d,n>>>8&255);++d.d
q=B.a.j(q,m)}}else for(r=a;r<b;++r)for(p=0;p<l;++p){o=J.d(c.a,c.d);++c.d
if(!(o>=0&&o<k.length))return A.a(k,o)
n=k[o]
J.x(d.a,d.d,n>>>8&255);++d.d}},
eV(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k=this.e,j=B.a.a2(8,k),i=this.b,h=this.d
if(j<8){t=B.a.J(1,k)-1
s=B.a.J(1,j)-1
for(k=e.$flags|0,r=c.length,q=a;q<b;++q)for(p=0,o=0;o<i;++o,f=m){if((o&t)>>>0===0){n=d+1
if(!(d>=0&&d<r))return A.a(c,d)
p=c[d]>>>8&255
d=n}m=f+1
l=p&s
if(!(l>=0&&l<h.length))return A.a(h,l)
l=h[l]
k&2&&A.c(e)
if(!(f>=0&&f<e.length))return A.a(e,f)
e[f]=l
p=B.a.a2(p,j)}}else for(k=c.length,r=e.$flags|0,q=a;q<b;++q)for(o=0;o<i;++o,f=m,d=n){m=f+1
h.toString
n=d+1
if(!(d>=0&&d<k))return A.a(c,d)
l=c[d]>>>8&255
if(!(l<h.length))return A.a(h,l)
l=h[l]
r&2&&A.c(e)
if(!(f>=0&&f<e.length))return A.a(e,f)
e[f]=l}},
j0(a4,a5,a6,a7,a8,a9){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.b,a0=b.e,a1=B.a.J(1,a0)-1,a2=A.by(a,a0),a3=B.a.j(a4,b.e)*a2
for(a0=a6.length,t=a8.$flags|0,s=a4;s<a5;){r=new Uint8Array(3)
for(q=a3,p=0;p<a;++p){if((p&a1)>>>0===0){o=b.d
n=q+1
if(!(q<o.length))return A.a(o,q)
o=o[q]
r[0]=o&255
r[1]=o>>>8&255
r[2]=o>>>16&255
q=n}o=a9+p
m=a7+p
if(!(m<a0))return A.a(a6,m)
m=a6[m]
l=m>>>8&255
k=r[0]
j=$.ad()
j.$flags&2&&A.c(j)
j[0]=k
k=$.ak()
if(0>=k.length)return A.a(k,0)
i=k[0]
j[0]=l
h=k[0]
g=$.jZ()
g.$flags&2&&A.c(g)
g[0]=i*h
f=$.lV()
if(0>=f.length)return A.a(f,0)
e=(m>>>16&255)+(f[0]>>>5)>>>0&255
j[0]=r[1]
i=k[0]
j[0]=l
g[0]=i*k[0]
d=f[0]
j[0]=r[2]
i=k[0]
j[0]=e
g[0]=i*k[0]
c=f[0]
t&2&&A.c(a8)
if(!(o<a8.length))return A.a(a8,o)
a8[o]=(m&4278255360|e<<16|((m&255)+(d>>>5)>>>0)+(c>>>5)>>>0&255)>>>0}a9+=a
a7+=a;++s
if((s&a1)>>>0===0)a3+=a2}},
bU(a,b){return(((a&4278255360)>>>0)+((b&4278255360)>>>0)&4278255360|(a&16711935)+(b&16711935)&16711935)>>>0},
jr(b0,b1,b2,b3,b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=4278190080,a9=a7.b
if(b0===0){t=b2.length
if(!(b3<t))return A.a(b2,b3)
s=a7.bU(b2[b3],a8)
b4.$flags&2&&A.c(b4)
r=b4.length
if(!(b5<r))return A.a(b4,b5)
b4[b5]=s
q=b3+1
p=b5+1
o=a9-1
n=b4[b5]
for(s=b4.$flags|0,m=0;m<o;++m){l=q+m
if(!(l<t))return A.a(b2,l)
n=a7.bU(b2[l],n)
l=p+m
s&2&&A.c(b4)
if(!(l<r))return A.a(b4,l)
b4[l]=n}b3+=a9
b5+=a9;++b0}t=a7.e
k=B.a.J(1,t)
j=k-1
i=A.by(a9,t)
h=B.a.j(b0,a7.e)*i
for(t=b2.length,s=~j,r=b4.length,g=b0;g<b1;){l=b5-a9
if(!(l>=0&&l<r))return A.a(b4,l)
f=b4[l]
if(!(b3<t))return A.a(b2,b3)
l=a7.bU(b2[b3],f)
b4.$flags&2&&A.c(b4)
if(!(b5<r))return A.a(b4,b5)
b4[b5]=l
for(e=h,d=1;d<a9;d=a0,e=c){l=a7.d
c=e+1
if(!(e<l.length))return A.a(l,e)
b=l[e]>>>8&15
a=$.nC[b]
a0=((d&s)>>>0)+k
if(a0>a9)a0=a9
a1=b3+d
l=b5+d
a2=l-a9
a3=a0-d
if(b===0)for(a4=b4.$flags|0,m=0;m<a3;++m){a5=l+m
a6=a1+m
if(!(a6>=0&&a6<t))return A.a(b2,a6)
a6=a7.bU(b2[a6],a8)
a4&2&&A.c(b4)
if(!(a5>=0&&a5<r))return A.a(b4,a5)
b4[a5]=a6}else if(b===1){a4=l-1
if(!(a4>=0&&a4<r))return A.a(b4,a4)
n=b4[a4]
for(a4=b4.$flags|0,m=0;m<a3;++m){a5=a1+m
if(!(a5>=0&&a5<t))return A.a(b2,a5)
n=a7.bU(b2[a5],n)
a5=l+m
a4&2&&A.c(b4)
if(!(a5>=0&&a5<r))return A.a(b4,a5)
b4[a5]=n}}else for(m=0;m<a3;++m){a4=l+m
a5=a4-1
if(!(a5>=0&&a5<r))return A.a(b4,a5)
f=a.$3(b4[a5],b4,a2+m)
a5=a1+m
if(!(a5>=0&&a5<t))return A.a(b2,a5)
a5=a7.bU(b2[a5],f)
b4.$flags&2&&A.c(b4)
if(!(a4>=0&&a4<r))return A.a(b4,a4)
b4[a4]=a5}}b3+=a9
b5+=a9;++g
if((g&j)>>>0===0)h+=i}},
iX(a,b,c){var t,s,r,q,p,o
for(t=a.length,s=a.$flags|0,r=0;r<c;++r){q=b+r
if(!(q<t))return A.a(a,q)
p=a[q]
o=p>>>8&255
s&2&&A.c(a)
a[q]=(p&4278255360|(p&16711935)+(o<<16|o)&16711935)>>>0}}}
A.ik.prototype={
gf0(){var t=this,s=t.d
if(s>1||t.e>=4||t.f>1||t.r!==0)return!1
return!0},
j5(a,b,c){var t,s,r,q,p,o,n=this
if(!n.gf0())return!1
t=n.e
if(!(t<4))return A.a(B.bL,t)
s=B.bL[t]
if(n.d===0){t=n.b
r=a*t
q=n.a
B.e.ai(c,r,b*t,q.a,q.d-q.b+r)}else{t=a+b
q=n.x
q===$&&A.b()
q.dx=c
p=q.c
if(n.y)t=q.ha(p.a,p.b,t)
else{o=q.cx
o.toString
q=q.d5(o,p.a,p.b,t,u.d6.a(q.gje()))
t=q}if(!t)return!1}if(s!=null){t=n.b
s.$6(t,n.c,t,a,b,c)}if(n.f===1)if(!n.hz(c,n.b,n.c,a,b))return!1
if(a+b>=n.c)n.w=!0
return!0},
hz(a,b,c,d,e){if(b<=0||c<=0||d<0||e<0||d+e>c)return!1
return!0}}
A.ej.prototype={
fP(a,b){var t=this,s=a.D()
t.r=0
t.f=(s&1)!==0
t.w=a.d-a.b
t.x=b-16}}
A.fc.prototype={}
A.eS.prototype={}
A.eT.prototype={}
A.dl.prototype={
gu(a){return this.a.length-this.b}}
A.dk.prototype={
bT(a,b){var t,s,r,q,p,o=b.cp()&255,n=this.a
if(!(a<n.length))return A.a(n,a)
t=n[a]
s=t.a
r=t.b+o
if(!(r<s.length))return A.a(s,r)
q=s[r].a-8
if(q>0){b.a+=8
p=b.cp()
n=n[a]
t=n.a
s=n.b+o
if(!(s<t.length))return A.a(t,s)
o=o+t[s].b+((p&B.a.U(1,q)-1)>>>0)}else n=t
t=b.a
s=n.a
n=n.b+o
if(!(n>=0&&n<s.length))return A.a(s,n)
n=s[n]
b.a=t+n.a
return n.b}}
A.dm.prototype={}
A.eV.prototype={
dL(a){var t=this.b=this.a,s=A.j9(a)
t.e=a
t.b=t.a=s}}
A.d1.prototype={
ad(){return"WebPFormat."+this.b}}
A.d2.prototype={$iG:1}
A.dx.prototype={}
A.il.prototype={
bm(a){var t=A.q(u.L.a(a),!1,null,0)
this.b=t
if(!this.e8(t))return!1
return!0},
aS(a){var t,s=this,r=null,q=A.q(u.L.a(a),!1,r,0)
s.b=q
if(!s.e8(q))return r
q=new A.dx(B.Z,A.k([],u.J))
s.a=q
t=s.b
t.toString
if(!s.eJ(t,q))return r
q=s.a
switch(q.f.a){case 3:q.as=q.z.length
return q
case 2:t=s.b
t.toString
t.d=q.ay
if(!A.jE(t,q).cl())return r
q=s.a
q.as=q.z.length
return q
case 1:t=s.b
t.toString
t.d=q.ay
if(!A.jC(t,q).cl())return r
q=s.a
q.as=q.z.length
return q
case 0:throw A.f(A.m("Unknown format for WebP"))}},
ag(a){var t,s,r,q=this,p=q.b
if(p==null||q.a==null)return null
t=q.a
if(t.e){t=t.z
s=t.length
if(a>=s)return null
if(!(a<s))return A.a(t,a)
r=t[a]
t=r.x
t===$&&A.b()
s=r.w
s===$&&A.b()
return q.e_(p.bK(t,s),a)}s=t.f
if(s===B.al)return A.jE(p.bK(t.ch,t.ay),t).bB()
else if(s===B.aM)return A.jC(p.bK(t.ch,t.ay),t).bB()
return null},
aA(a,b){var t,s,r,q,p,o,n,m,l=this,k=null
if(l.aS(u.L.a(a))==null)return k
t=l.a.e
if(!t)return l.ag(0)
for(s=k,r=s,q=0;t=l.a,q<t.as;++q){t=t.z
if(!(q<t.length))return A.a(t,q)
b=t[q]
p=l.ag(q)
if(p==null)continue
p.y=b.e
if(r==null||s==null){t=l.a
o=t.a
t=t.b
n=p.gb4()
m=p.a
m=m==null?k:m.gH()
if(m==null)m=B.f
r=A.J(k,k,m,p.y,B.i,t,k,0,n,k,B.f,o,!1)
s=r}else{s=A.bQ(s,!1,!1)
t=b.f
t===$&&A.b()
if(t){t=s.a
if(t!=null)t.aN(0,k)}}A.jP(s,p,B.ao,k,k,b.a,b.b,k,k,k,k)
r.aG(s)}return r},
e_(a,b){var t,s,r,q=null,p=A.k([],u.J),o=new A.dx(B.Z,p)
if(!this.eJ(a,o))return q
t=o.f
if(t===B.Z)return q
o.as=this.a.as
if(o.e){t=p.length
if(b>=t)return q
s=p[b]
p=s.x
p===$&&A.b()
t=s.w
t===$&&A.b()
return this.e_(a.bK(p,t),b)}else{r=a.bK(o.ch,o.ay)
if(t===B.al)return A.jE(r,o).bB()
else if(t===B.aM)return A.jC(r,o).bB()}return q},
e8(a){if(a.af(4)!=="RIFF")return!1
a.k()
if(a.af(4)!=="WEBP")return!1
return!0},
eJ(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
for(t=a.c,s=a.b;a.d<t;){r=a.af(4)
q=a.k()
p=q+1>>>1<<1>>>0
o=a.d
n=o-s
switch(r){case"VP8X":if(!this.hV(a,b))return!1
break
case"VP8 ":b.ay=n
b.ch=q
b.f=B.aM
break
case"VP8L":b.ay=n
b.ch=q
b.f=B.al
break
case"ALPH":b.toString
o=a.a
m=a.e
l=J.a1(o)
k=l.gu(o)
l=l.gu(o)
o=new A.a6(o,0,Math.min(k,l),0,m)
b.at=o
o.d=a.d
a.d+=p
break
case"ANIM":b.f=B.kb
j=a.k()
o=new Uint8Array(4)
o[0]=j>>>8&255
o[1]=j>>>16&255
o[2]=j>>>24&255
o[3]=j&255
a.l()
break
case"ANMF":if(!this.hR(a,b,q))return!1
break
case"ICCP":b.toString
i=a.aj(q)
a.d=o+(i.c-i.d)
i.a0()
break
case"EXIF":b.toString
b.w=a.af(q)
break
case"XMP ":b.toString
a.af(q)
break
default:a.d=o+p
break}o=a.d
h=p-(o-s-n)
if(h>0)a.d=o+h}if(!b.d)b.d=b.at!=null
return b.f!==B.Z},
hV(a,b){var t,s,r,q,p=a.D()
if((p&192)!==0)return!1
t=B.a.j(p,4)
s=B.a.j(p,1)
if((p&1)!==0)return!1
if(a.bf()!==0)return!1
r=a.bf()
q=a.bf()
b.a=r+1
b.b=q+1
b.e=(s&1)!==0
b.d=(t&1)!==0
return!0},
hR(a,b,c){var t,s=a.bf(),r=a.bf()
a.bf()
a.bf()
t=new A.fc(s*2,r*2,a.bf())
t.fP(a,c)
if(t.r!==0)return!1
B.c.M(b.z,t)
return!0}}
A.eW.prototype={
ad(){return"IccProfileCompression."+this.b}}
A.cw.prototype={
j1(){var t,s=this
if(s.b===B.at)return s.c
t=B.aS.eY(u.L.a(s.c),null)
s.c=t
s.b=B.at
return t}}
A.eR.prototype={
ad(){return"FrameType."+this.b}}
A.b2.prototype={
gar(){var t=this.x
return t===$?this.x=A.k([],u.g):t},
fJ(a,b,c,d){var t,s,r,q=this,p=a.gH(),o=a.gb4(),n=a.a
q.dY(d,b,p,o,n==null?null:n.gR())
p=a.b
if(p!=null)q.b=A.fn(p,u.N,u.I)
p=a.d
if(p!=null){o=u.N
q.d=A.fn(p,o,o)}B.c.M(q.gar(),q)
if(!c){t=a.gar().length
for(p=u.g,s=1;s<t;++s){r=a.x
if(r===$)r=a.x=A.k([],p)
if(!(s<r.length))return A.a(r,s)
q.aG(A.ht(r[s],b,!1,d))}}},
fI(a,b,c){var t,s,r,q,p=this,o=a.b
if(o!=null)p.b=A.fn(o,u.N,u.I)
o=a.d
if(o!=null){t=u.N
p.d=A.fn(o,t,t)}B.c.M(p.gar(),p)
if(!b&&a.gar().length>1){s=a.gar().length
for(o=u.g,r=1;r<s;++r){q=a.x
if(q===$)q=a.x=A.k([],o)
if(!(r<q.length))return A.a(q,r)
p.aG(A.bQ(q[r],!1,!1))}}},
aG(a){var t=this
if(a==null)a=A.bQ(t,!0,!0)
a.z=t.gar().length
if(t.gar().length===0||B.c.gf2(t.gar())!==a)B.c.M(t.gar(),a)
return a},
cU(){return this.aG(null)},
dY(a,b,c,d,e){var t,s,r=this,q=null
switch(c.a){case 0:if(e==null){t=B.b.aU(a*d/8)
s=new A.cE($,t,q,a,b,d)
t=Math.max(t*b,1)
s.d=new Uint8Array(t)
r.a=s}else{t=B.b.aU(a/8)
s=new A.cE($,t,e,a,b,1)
t=Math.max(t*b,1)
s.d=new Uint8Array(t)
r.a=s}break
case 1:if(e==null){t=B.b.aU(a*(d<<1>>>0)/8)
s=new A.cG($,t,q,a,b,d)
t=Math.max(t*b,1)
s.d=new Uint8Array(t)
r.a=s}else{t=B.b.aU(a/4)
s=new A.cG($,t,e,a,b,1)
t=Math.max(t*b,1)
s.d=new Uint8Array(t)
r.a=s}break
case 2:if(e==null){if(d===2)t=a
else if(d===4)t=a*2
else t=d===3?B.b.aU(a*1.5):B.b.aU(a/2)
s=new A.cI($,t,q,a,b,d)
t=Math.max(t*b,1)
s.d=new Uint8Array(t)
r.a=s}else{t=B.b.aU(a/2)
s=new A.cI($,t,e,a,b,1)
t=Math.max(t*b,1)
s.d=new Uint8Array(t)
r.a=s}break
case 3:if(e==null)r.a=A.ks(a,b,d)
else r.a=new A.cJ(new Uint8Array(a*b),e,a,b,1)
break
case 4:t=a*b
if(e==null)r.a=new A.cF(new Uint16Array(t*d),q,a,b,d)
else r.a=new A.cF(new Uint16Array(t),e,a,b,1)
break
case 5:r.a=A.mw(a,b,d)
break
case 6:r.a=new A.ds(new Int8Array(a*b*d),a,b,d)
break
case 7:r.a=new A.dq(new Int16Array(a*b*d),a,b,d)
break
case 8:r.a=new A.dr(new Int32Array(a*b*d),a,b,d)
break
case 9:r.a=A.mu(a,b,d)
break
case 10:r.a=A.mv(a,b,d)
break
case 11:r.a=new A.dp(new Float64Array(a*b*4*d),a,b,d)
break}},
C(a){var t=this
return"Image("+t.gX()+", "+t.gK()+", "+t.gH().b+", "+t.gb4()+")"},
gX(){var t=this.a
t=t==null?null:t.a
return t==null?0:t},
gK(){var t=this.a
t=t==null?null:t.b
return t==null?0:t},
gH(){var t=this.a
t=t==null?null:t.gH()
return t==null?B.f:t},
gc3(){var t=this.e
return t==null?this.e=new A.bF(A.O(u.N,u.P)):t},
fk(a,b){var t=this,s=t.b;(s==null?t.b=A.O(u.N,u.I):s).i(0,a,b)
if(t.b.a===0)t.b=null},
gG(a){var t=this.a
return t.gG(t)},
gv(a){var t=this.a
t=t==null?null:t.gv(t)
if(t==null)t=B.e.gv(new Uint8Array(0))
return t},
gb4(){var t=this.a
t=t==null?null:t.gR()
t=t==null?null:t.b
if(t==null){t=this.a
t=t==null?null:t.c}return t==null?0:t},
gbl(){var t=this.a
return(t==null?null:t.gR())!=null},
gaD(){var t=this.a
t=t==null?null:t.gaD()
return t==null?0:t},
f_(a,b){return a>=0&&b>=0&&a<this.gX()&&b<this.gK()},
aK(a,b,c,d){var t=this.a
t=t==null?null:t.aK(a,b,c,d)
if(t==null)t=new A.bh(new Uint8Array(0))
return t},
O(a,b,c){var t=this.a
t=t==null?null:t.O(a,b,c)
return t==null?new A.A():t},
dE(a,b){return this.O(a,b,null)},
ak(a,b){if(a<0||a>=this.gX()||b<0||b>=this.gK())return new A.A()
return this.O(a,b,null)},
ff(a,b,c){switch(c.a){case 0:return this.ak(B.b.h(a),B.b.h(b))
case 1:case 3:return this.fg(a,b)
case 2:return this.fe(a,b)}},
fg(a,b){var t,s,r,q,p,o,n=this,m=B.b.h(a),l=m-(a>=0?0:1),k=l+1
m=B.b.h(b)
t=m-(b>=0?0:1)
s=t+1
m=new A.hw(a-l,b-t)
r=n.ak(l,t)
q=s>=n.gK()?r:n.ak(l,s)
p=k>=n.gX()?r:n.ak(k,t)
o=k>=n.gX()||s>=n.gK()?r:n.ak(k,s)
return n.aK(m.$4(r.gm(),p.gm(),q.gm(),o.gm()),m.$4(r.gp(),p.gp(),q.gp(),o.gp()),m.$4(r.gq(),p.gq(),q.gq(),o.gq()),m.$4(r.gt(),p.gt(),q.gt(),o.gt()))},
fe(d1,d2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=this,c6=B.b.h(d1),c7=c6-(d1>=0?0:1),c8=c7-1,c9=c7+1,d0=c7+2
c6=B.b.h(d2)
t=c6-(d2>=0?0:1)
s=t-1
r=t+1
q=t+2
p=d1-c7
o=d2-t
c6=new A.hv()
n=c5.ak(c7,t)
m=c8<0
l=!m
k=!l||s<0?n:c5.ak(c8,s)
j=m?n:c5.ak(c7,s)
i=s<0
h=i||c9>=c5.gX()?n:c5.ak(c9,s)
g=d0>=c5.gX()||i?n:c5.ak(d0,s)
f=c6.$5(p,k.gm(),j.gm(),h.gm(),g.gm())
e=c6.$5(p,k.gp(),j.gp(),h.gp(),g.gp())
d=c6.$5(p,k.gq(),j.gq(),h.gq(),g.gq())
c=c6.$5(p,k.gt(),j.gt(),h.gt(),g.gt())
b=m?n:c5.ak(c8,t)
a=c9>=c5.gX()?n:c5.ak(c9,t)
a0=d0>=c5.gX()?n:c5.ak(d0,t)
a1=c6.$5(p,b.gm(),n.gm(),a.gm(),a0.gm())
a2=c6.$5(p,b.gp(),n.gp(),a.gp(),a0.gp())
a3=c6.$5(p,b.gq(),n.gq(),a.gq(),a0.gq())
a4=c6.$5(p,b.gt(),n.gt(),a.gt(),a0.gt())
a5=!l||r>=c5.gK()?n:c5.ak(c8,r)
a6=r>=c5.gK()?n:c5.ak(c7,r)
a7=c9>=c5.gX()||r>=c5.gK()?n:c5.ak(c9,r)
a8=d0>=c5.gX()||r>=c5.gK()?n:c5.ak(d0,r)
a9=c6.$5(p,a5.gm(),a6.gm(),a7.gm(),a8.gm())
b0=c6.$5(p,a5.gp(),a6.gp(),a7.gp(),a8.gp())
b1=c6.$5(p,a5.gq(),a6.gq(),a7.gq(),a8.gq())
b2=c6.$5(p,a5.gt(),a6.gt(),a7.gt(),a8.gt())
b3=!l||q>=c5.gK()?n:c5.ak(c8,q)
b4=q>=c5.gK()?n:c5.ak(c7,q)
b5=c9>=c5.gX()||q>=c5.gK()?n:c5.ak(c9,q)
b6=d0>=c5.gX()||q>=c5.gK()?n:c5.ak(d0,q)
b7=c6.$5(p,b3.gm(),b4.gm(),b5.gm(),b6.gm())
b8=c6.$5(p,b3.gp(),b4.gp(),b5.gp(),b6.gp())
b9=c6.$5(p,b3.gq(),b4.gq(),b5.gq(),b6.gq())
c0=c6.$5(p,b3.gt(),b4.gt(),b5.gt(),b6.gt())
c1=c6.$5(o,f,a1,a9,b7)
c2=c6.$5(o,e,a2,b0,b8)
c3=c6.$5(o,d,a3,b1,b9)
c4=c6.$5(o,c,a4,b2,c0)
return c5.aK(B.b.h(c1),B.b.h(c2),B.b.h(c3),B.b.h(c4))},
bJ(a,b,c){var t
if(u.dv.b(c))if(c.gb3().gR()!=null)if(this.gbl()){t=this.a
if(t!=null)t.a3(a,b,c.gL(),0,0)
return}t=this.a
if(t!=null)t.al(a,b,c.gm(),c.gp(),c.gq(),c.gt())},
a3(a,b,c,d,e){var t=this.a
return t==null?null:t.a3(a,b,c,d,e)},
gB(){var t=this.a
t=t==null?null:t.gB()
return t==null?0:t},
aN(a,b){var t=this.a
return t==null?null:t.aN(0,b)},
du(a){return this.aN(0,null)},
cW(a6,a7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null
if(a6==null)a6=a4.gH()
if(a7==null)a7=a4.gb4()
t=B.bO.n(0,a6)
s=!1
if(a6===a4.gH())if(a7===a4.gb4()){r=a4.a
s=(r==null?a5:r.gR())==null}if(s){q=A.bQ(a4,!1,!1)
return q}for(s=a4.gar(),r=s.length,p=u.N,o=u.p,n=a5,m=0;m<s.length;s.length===r||(0,A.aa)(s),++m,n=e){l=s[m]
k=l.a
j=k==null
i=j?a5:k.a
if(i==null)i=0
k=j?a5:k.b
if(k==null)k=0
j=l.e
j=j==null?a5:A.dd(j)
h=l.c
if(h==null)h=a5
else{g=h.a
f=h.b
h=h.c
h=new A.cw(g,f,new Uint8Array(h.subarray(0,A.aK(0,a5,h.length))))}g=l.w
f=l.r
q=A.J(a5,j,a6,l.y,g,k,h,f,a7,a5,B.f,i,!1)
k=l.d
q.sjD(k!=null?A.fn(k,p,p):a5)
if(n!=null){n.aG(q)
e=n}else e=q
k=q.a
d=k==null?a5:k.gR()
k=q.a
k=k==null?a5:k.gR()
c=k==null?a5:k.gH()
if(c==null)c=a6
k=l.a
if(d!=null){b=A.O(o,o)
a=k==null?a5:k.O(0,0,a5)
if(a==null)a=new A.A()
for(k=q.a,k=k.gG(k),a0=a5,a1=0;k.F();){a2=k.gP()
a3=A.lx(B.b.cX(a.ga9()*255),B.b.cX(a.ga5()*255),B.b.cX(a.ga8()*255),0)
if(b.aO(a3)){j=b.n(0,a3)
j.toString
a2.sL(j)}else{b.i(0,a3,a1)
a2.sL(a1)
a0=A.lr(a,t,c,a7,a0)
d.aY(a1,a0.gm(),a0.gp(),a0.gq());++a1}a.F()}}else{a=k==null?a5:k.O(0,0,a5)
if(a==null)a=new A.A()
for(k=q.a,k=k.gG(k);k.F();){A.lr(a,t,a5,a5,k.gP())
a.F()}}}n.toString
return n},
dw(a){return this.cW(null,a)},
j2(a){return this.cW(a,null)},
iZ(a){var t,s,r,q
u.ck.a(a)
if(this.d==null){t=u.N
this.d=A.O(t,t)}for(t=new A.V(a,a.r,a.e,A.o(a).A("V<1>"));t.F();){s=t.d
r=this.d
r.toString
q=a.n(0,s)
q.toString
r.i(0,s,q)}},
h4(a,b,c){var t,s=65536
switch(b.a){case 0:return null
case 1:return null
case 2:return null
case 3:t=a===B.l?s:256
return new A.az(new Uint8Array(t*c),t,c)
case 4:t=a===B.l?s:256
return new A.dV(new Uint16Array(t*c),t,c)
case 5:t=a===B.l?s:256
return new A.cP(new Uint32Array(t*c),t,c)
case 6:t=a===B.l?s:256
return new A.dU(new Int8Array(t*c),t,c)
case 7:t=a===B.l?s:256
return new A.dS(new Int16Array(t*c),t,c)
case 8:t=a===B.l?s:256
return new A.dT(new Int32Array(t*c),t,c)
case 9:t=a===B.l?s:256
return new A.dP(new Uint16Array(t*c),t,c)
case 10:t=a===B.l?s:256
return new A.dQ(new Float32Array(t*c),t,c)
case 11:t=a===B.l?s:256
return new A.dR(new Float64Array(t*c),t,c)}},
sjD(a){this.d=u.cZ.a(a)}}
A.hw.prototype={
$4(a,b,c,d){var t=this.b
return a+this.a*(b-a+t*(a+d-c-b))+t*(c-a)},
$S:21}
A.hv.prototype={
$5(a,b,c,d,e){var t=-b,s=a*a
return c+0.5*(a*(t+d)+s*(2*b-5*c+4*d-e)+s*a*(t+3*c-3*d+e))},
$S:22}
A.a5.prototype={
gR(){return null}}
A.cC.prototype={
bb(a){var t=this,s=t.d
if(a)s=new Uint16Array(s.length)
else s=new Uint16Array(A.w(s))
return new A.cC(s,t.a,t.b,t.c)},
gH(){return B.A},
gv(a){return B.u.gv(this.d)},
gaD(){return 16},
gaV(){return this.a*this.c*2},
gG(a){return A.ji(this)},
b6(a,b,c,d,e){return A.aH(A.ji(this),b,c,d,e)},
gu(a){return this.d.byteLength},
gB(){return 1},
gbc(){return!0},
aK(a,b,c,d){var t=new Uint16Array(4),s=new A.cj(t)
t[0]=A.F(a)
t[1]=A.F(b)
t[2]=A.F(c)
t[3]=A.F(d)
t=s
return t},
O(a,b,c){if(c==null||!(c instanceof A.bW)||c.d!==this)c=A.ji(this)
c.Z(a,b)
return c},
aF(a,b,c){var t,s=this.c,r=b*this.a*s+a*s
s=this.d
t=A.F(c)
s.$flags&2&&A.c(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=t},
a3(a,b,c,d,e){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=A.F(c)
p.$flags&2&&A.c(p)
t=p.length
if(!(q>=0&&q<t))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=A.F(d)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>2){r=q+2
o=A.F(e)
if(!(r<t))return A.a(p,r)
p[r]=o}}},
al(a,b,c,d,e,f){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=A.F(c)
p.$flags&2&&A.c(p)
t=p.length
if(!(q>=0&&q<t))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=A.F(d)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>2){o=q+2
s=A.F(e)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>3){r=q+3
o=A.F(f)
if(!(r<t))return A.a(p,r)
p[r]=o}}}},
C(a){return"ImageDataFloat16("+this.a+", "+this.b+", "+this.c+")"},
aN(a,b){}}
A.cD.prototype={
bb(a){var t=this,s=t.d
if(a)s=new Float32Array(s.length)
else s=new Float32Array(A.w(s))
return new A.cD(s,t.a,t.b,t.c)},
gH(){return B.G},
gv(a){return B.ai.gv(this.d)},
gaD(){return 32},
gG(a){return A.jj(this)},
b6(a,b,c,d,e){return A.aH(A.jj(this),b,c,d,e)},
gu(a){return this.d.byteLength},
gB(){return 1},
gaV(){return this.a*this.c*4},
gbc(){return!0},
aK(a,b,c,d){var t=new Float32Array(4),s=new A.ck(t)
t[0]=a
t[1]=b
t[2]=c
t[3]=d
t=s
return t},
O(a,b,c){if(c==null||!(c instanceof A.bX)||c.d!==this)c=A.jj(this)
c.Z(a,b)
return c},
aF(a,b,c){var t=this.c,s=b*this.a*t+a*t
t=this.d
t.$flags&2&&A.c(t)
if(!(s>=0&&s<t.length))return A.a(t,s)
t[s]=c},
a3(a,b,c,d,e){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d
p.$flags&2&&A.c(p)
t=p.length
if(!(q>=0&&q<t))return A.a(p,q)
p[q]=c
if(r>1){s=q+1
if(!(s<t))return A.a(p,s)
p[s]=d
if(r>2){r=q+2
if(!(r<t))return A.a(p,r)
p[r]=e}}},
al(a,b,c,d,e,f){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d
p.$flags&2&&A.c(p)
t=p.length
if(!(q>=0&&q<t))return A.a(p,q)
p[q]=c
if(r>1){s=q+1
if(!(s<t))return A.a(p,s)
p[s]=d
if(r>2){s=q+2
if(!(s<t))return A.a(p,s)
p[s]=e
if(r>3){r=q+3
if(!(r<t))return A.a(p,r)
p[r]=f}}}},
C(a){return"ImageDataFloat32("+this.a+", "+this.b+", "+this.c+")"},
aN(a,b){}}
A.dp.prototype={
bb(a){var t=this,s=t.d
if(a)s=new Float64Array(s.length)
else s=new Float64Array(A.w(s))
return new A.dp(s,t.a,t.b,t.c)},
gH(){return B.I},
gv(a){return B.aj.gv(this.d)},
gu(a){return this.d.byteLength},
gaD(){return 64},
gG(a){return A.jk(this)},
b6(a,b,c,d,e){return A.aH(A.jk(this),b,c,d,e)},
gB(){return 1},
gaV(){return this.a*this.c*8},
gbc(){return!0},
aK(a,b,c,d){var t=new Float64Array(4),s=new A.cl(t)
t[0]=a
t[1]=b
t[2]=c
t[3]=d
t=s
return t},
O(a,b,c){if(c==null||!(c instanceof A.bY)||c.d!==this)c=A.jk(this)
c.Z(a,b)
return c},
aF(a,b,c){var t=this.c,s=b*this.a*t+a*t
t=this.d
t.$flags&2&&A.c(t)
if(!(s>=0&&s<t.length))return A.a(t,s)
t[s]=c},
a3(a,b,c,d,e){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d
p.$flags&2&&A.c(p)
t=p.length
if(!(q>=0&&q<t))return A.a(p,q)
p[q]=c
if(r>1){s=q+1
if(!(s<t))return A.a(p,s)
p[s]=d
if(r>2){r=q+2
if(!(r<t))return A.a(p,r)
p[r]=e}}},
al(a,b,c,d,e,f){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d
p.$flags&2&&A.c(p)
t=p.length
if(!(q>=0&&q<t))return A.a(p,q)
p[q]=c
if(r>1){s=q+1
if(!(s<t))return A.a(p,s)
p[s]=d
if(r>2){s=q+2
if(!(s<t))return A.a(p,s)
p[s]=e
if(r>3){r=q+3
if(!(r<t))return A.a(p,r)
p[r]=f}}}},
C(a){return"ImageDataFloat64("+this.a+", "+this.b+", "+this.c+")"},
aN(a,b){}}
A.dq.prototype={
bb(a){var t=this,s=t.d
if(a)s=new Int16Array(s.length)
else s=new Int16Array(A.w(s))
return new A.dq(s,t.a,t.b,t.c)},
gH(){return B.K},
gv(a){return B.aD.gv(this.d)},
gG(a){return A.jl(this)},
b6(a,b,c,d,e){return A.aH(A.jl(this),b,c,d,e)},
gu(a){return this.d.byteLength},
gB(){return 32767},
gbc(){return!0},
gaD(){return 16},
gaV(){return this.a*this.c*2},
aK(a,b,c,d){var t=B.b.h(a),s=B.b.h(b),r=B.b.h(c),q=B.b.h(d),p=new Int16Array(4),o=new A.cm(p)
p[0]=t
p[1]=s
p[2]=r
p[3]=q
t=o
return t},
O(a,b,c){if(c==null||!(c instanceof A.bZ)||c.d!==this)c=A.jl(this)
c.Z(a,b)
return c},
aF(a,b,c){var t,s=this.c,r=b*this.a*s+a*s
s=this.d
t=B.b.h(c)
s.$flags&2&&A.c(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=t},
a3(a,b,c,d,e){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.b.h(c)
p.$flags&2&&A.c(p)
t=p.length
if(!(q>=0&&q<t))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.h(d)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>2){r=q+2
o=B.b.h(e)
if(!(r<t))return A.a(p,r)
p[r]=o}}},
al(a,b,c,d,e,f){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.b.h(c)
p.$flags&2&&A.c(p)
t=p.length
if(!(q>=0&&q<t))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.h(d)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>2){o=q+2
s=B.b.h(e)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>3){r=q+3
o=B.b.h(f)
if(!(r<t))return A.a(p,r)
p[r]=o}}}},
C(a){return"ImageDataInt16("+this.a+", "+this.b+", "+this.c+")"},
aN(a,b){}}
A.dr.prototype={
bb(a){var t=this,s=t.d
if(a)s=new Int32Array(s.length)
else s=new Int32Array(A.w(s))
return new A.dr(s,t.a,t.b,t.c)},
gH(){return B.L},
gv(a){return B.R.gv(this.d)},
gaD(){return 32},
gaV(){return this.a*this.c*4},
gG(a){return A.jm(this)},
b6(a,b,c,d,e){return A.aH(A.jm(this),b,c,d,e)},
gu(a){return this.d.byteLength},
gB(){return 2147483647},
gbc(){return!0},
aK(a,b,c,d){var t=B.b.h(a),s=B.b.h(b),r=B.b.h(c),q=B.b.h(d),p=new Int32Array(4),o=new A.cn(p)
p[0]=t
p[1]=s
p[2]=r
p[3]=q
t=o
return t},
O(a,b,c){if(c==null||!(c instanceof A.c_)||c.d!==this)c=A.jm(this)
c.Z(a,b)
return c},
aF(a,b,c){var t,s=this.c,r=b*this.a*s+a*s
s=this.d
t=B.b.h(c)
s.$flags&2&&A.c(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=t},
a3(a,b,c,d,e){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.b.h(c)
p.$flags&2&&A.c(p)
t=p.length
if(!(q>=0&&q<t))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.h(d)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>2){r=q+2
o=B.b.h(e)
if(!(r<t))return A.a(p,r)
p[r]=o}}},
al(a,b,c,d,e,f){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.b.h(c)
p.$flags&2&&A.c(p)
t=p.length
if(!(q>=0&&q<t))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.h(d)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>2){o=q+2
s=B.b.h(e)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>3){r=q+3
o=B.b.h(f)
if(!(r<t))return A.a(p,r)
p[r]=o}}}},
C(a){return"ImageDataInt32("+this.a+", "+this.b+", "+this.c+")"},
aN(a,b){}}
A.ds.prototype={
bb(a){var t=this,s=t.d
if(a)s=new Int8Array(s.length)
else s=new Int8Array(A.w(s))
return new A.ds(s,t.a,t.b,t.c)},
gH(){return B.J},
gv(a){return B.aE.gv(this.d)},
gaV(){return this.a*this.c},
gG(a){return A.jn(this)},
b6(a,b,c,d,e){return A.aH(A.jn(this),b,c,d,e)},
gu(a){return this.d.byteLength},
gB(){return 127},
gbc(){return!0},
gaD(){return 8},
aK(a,b,c,d){var t=B.b.h(a),s=B.b.h(b),r=B.b.h(c),q=B.b.h(d),p=new Int8Array(4),o=new A.co(p)
p[0]=t
p[1]=s
p[2]=r
p[3]=q
t=o
return t},
O(a,b,c){if(c==null||!(c instanceof A.c0)||c.d!==this)c=A.jn(this)
c.Z(a,b)
return c},
aF(a,b,c){var t,s=this.c,r=b*(this.a*s)+a*s
s=this.d
t=B.b.h(c)
s.$flags&2&&A.c(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=t},
a3(a,b,c,d,e){var t,s,r=this.c,q=b*(this.a*r)+a*r,p=this.d,o=B.b.h(c)
p.$flags&2&&A.c(p)
t=p.length
if(!(q>=0&&q<t))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.h(d)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>2){r=q+2
o=B.b.h(e)
if(!(r<t))return A.a(p,r)
p[r]=o}}},
al(a,b,c,d,e,f){var t,s,r=this.c,q=b*(this.a*r)+a*r,p=this.d,o=B.b.h(c)
p.$flags&2&&A.c(p)
t=p.length
if(!(q>=0&&q<t))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.h(d)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>2){o=q+2
s=B.b.h(e)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>3){r=q+3
o=B.b.h(f)
if(!(r<t))return A.a(p,r)
p[r]=o}}}},
C(a){return"ImageDataInt8("+this.a+", "+this.b+", "+this.c+")"},
aN(a,b){}}
A.cE.prototype={
jN(a,b,c){var t=Math.max(this.e*b,1)
t=new Uint8Array(t)
this.d!==$&&A.jV()
this.d=t},
bb(a){var t,s=this,r=s.d
if(a){r===$&&A.b()
r=new Uint8Array(r.length)}else{r===$&&A.b()
r=new Uint8Array(A.w(r))}t=s.f
t=t==null?null:t.N()
return new A.cE(r,s.e,t,s.a,s.b,s.c)},
gH(){return B.v},
gu(a){var t=this.d
t===$&&A.b()
return t.byteLength},
gB(){var t=this.f
t=t==null?null:t.gB()
return t==null?1:t},
gbc(){return!1},
gv(a){var t=this.d
t===$&&A.b()
return B.e.gv(t)},
gaD(){return 1},
gG(a){return A.dW(this)},
b6(a,b,c,d,e){return A.aH(A.dW(this),b,c,d,e)},
aK(a,b,c,d){var t=new A.cq(4,0)
t.a7(B.b.h(a),B.b.h(b),B.b.h(c),B.b.h(d))
return t},
O(a,b,c){if(c==null||!(c instanceof A.c1)||c.f!==this)c=A.dW(this)
c.Z(a,b)
return c},
aF(a,b,c){var t,s=this
if(s.c<1)return
t=s.r;(t==null?s.r=A.dW(s):t).Z(a,b)
s.r.an(0,c)},
a3(a,b,c,d,e){var t,s=this
if(s.c<1)return
t=s.r;(t==null?s.r=A.dW(s):t).Z(a,b)
s.r.am(c,d,e)},
al(a,b,c,d,e,f){var t,s=this
if(s.c<1)return
t=s.r;(t==null?s.r=A.dW(s):t).Z(a,b)
s.r.a7(c,d,e,f)},
C(a){return"ImageDataUint1("+this.a+", "+this.b+", "+this.c+")"},
aN(a,b){},
gaV(){return this.e},
gR(){return this.f}}
A.cF.prototype={
bb(a){var t,s=this,r=s.d
if(a)r=new Uint16Array(r.length)
else r=new Uint16Array(A.w(r))
t=s.e
t=t==null?null:t.N()
return new A.cF(r,t,s.a,s.b,s.c)},
gH(){return B.l},
gv(a){return B.u.gv(this.d)},
gaD(){return 16},
gB(){var t=this.e
t=t==null?null:t.gB()
return t==null?65535:t},
gaV(){return this.a*this.c*2},
gG(a){return A.jo(this)},
b6(a,b,c,d,e){return A.aH(A.jo(this),b,c,d,e)},
gu(a){return this.d.byteLength},
gbc(){return!0},
aK(a,b,c,d){var t=B.b.h(a),s=B.b.h(b),r=B.b.h(c),q=B.b.h(d),p=new Uint16Array(4),o=new A.cr(p)
p[0]=t
p[1]=s
p[2]=r
p[3]=q
t=o
return t},
O(a,b,c){if(c==null||!(c instanceof A.c2)||c.d!==this)c=A.jo(this)
c.Z(a,b)
return c},
aF(a,b,c){var t,s=this.c,r=b*this.a*s+a*s
s=this.d
t=B.b.h(c)
s.$flags&2&&A.c(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=t},
a3(a,b,c,d,e){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.b.h(c)
p.$flags&2&&A.c(p)
t=p.length
if(!(q>=0&&q<t))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.h(d)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>2){r=q+2
o=B.b.h(e)
if(!(r<t))return A.a(p,r)
p[r]=o}}},
al(a,b,c,d,e,f){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.b.h(c)
p.$flags&2&&A.c(p)
t=p.length
if(!(q>=0&&q<t))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.h(d)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>2){o=q+2
s=B.b.h(e)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>3){r=q+3
o=B.b.h(f)
if(!(r<t))return A.a(p,r)
p[r]=o}}}},
C(a){return"ImageDataUint16("+this.a+", "+this.b+", "+this.c+")"},
aN(a,b){},
gR(){return this.e}}
A.cG.prototype={
jO(a,b,c){var t=Math.max(this.e*b,1)
t=new Uint8Array(t)
this.d!==$&&A.jV()
this.d=t},
bb(a){var t,s=this,r=s.d
if(a){r===$&&A.b()
r=new Uint8Array(r.length)}else{r===$&&A.b()
r=new Uint8Array(A.w(r))}t=s.f
t=t==null?null:t.N()
return new A.cG(r,s.e,t,s.a,s.b,s.c)},
gH(){return B.x},
gaD(){return 2},
gv(a){var t=this.d
t===$&&A.b()
return B.e.gv(t)},
gG(a){return A.dX(this)},
b6(a,b,c,d,e){return A.aH(A.dX(this),b,c,d,e)},
gu(a){var t=this.d
t===$&&A.b()
return t.byteLength},
gB(){var t=this.f
t=t==null?null:t.gB()
return t==null?3:t},
gbc(){return!1},
aK(a,b,c,d){var t=new A.cs(4,0)
t.a7(B.b.h(a),B.b.h(b),B.b.h(c),B.b.h(d))
return t},
O(a,b,c){if(c==null||!(c instanceof A.c3)||c.f!==this)c=A.dX(this)
c.Z(a,b)
return c},
aF(a,b,c){var t,s=this
if(s.c<1)return
t=s.r;(t==null?s.r=A.dX(s):t).Z(a,b)
s.r.ao(0,c)},
a3(a,b,c,d,e){var t,s=this
if(s.c<1)return
t=s.r;(t==null?s.r=A.dX(s):t).Z(a,b)
s.r.am(c,d,e)},
al(a,b,c,d,e,f){var t,s=this
if(s.c<1)return
t=s.r;(t==null?s.r=A.dX(s):t).Z(a,b)
s.r.a7(c,d,e,f)},
C(a){return"ImageDataUint2("+this.a+", "+this.b+", "+this.c+")"},
aN(a,b){},
gaV(){return this.e},
gR(){return this.f}}
A.cH.prototype={
bb(a){var t=this,s=t.d
if(a)s=new Uint32Array(s.length)
else s=new Uint32Array(A.w(s))
return new A.cH(s,t.a,t.b,t.c)},
gH(){return B.H},
gv(a){return B.n.gv(this.d)},
gaV(){return this.a*this.c*4},
gaD(){return 32},
gB(){return 4294967295},
gG(a){return A.jp(this)},
b6(a,b,c,d,e){return A.aH(A.jp(this),b,c,d,e)},
gu(a){return this.d.byteLength},
gbc(){return!0},
aK(a,b,c,d){var t=B.b.h(a),s=B.b.h(b),r=B.b.h(c),q=B.b.h(d),p=new Uint32Array(4),o=new A.ct(p)
p[0]=t
p[1]=s
p[2]=r
p[3]=q
t=o
return t},
O(a,b,c){if(c==null||!(c instanceof A.c4)||c.d!==this)c=A.jp(this)
c.Z(a,b)
return c},
aF(a,b,c){var t,s=this.c,r=b*this.a*s+a*s
s=this.d
t=B.b.h(c)
s.$flags&2&&A.c(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=t},
a3(a,b,c,d,e){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.b.h(c)
p.$flags&2&&A.c(p)
t=p.length
if(!(q>=0&&q<t))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.h(d)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>2){r=q+2
o=B.b.h(e)
if(!(r<t))return A.a(p,r)
p[r]=o}}},
al(a,b,c,d,e,f){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.b.h(c)
p.$flags&2&&A.c(p)
t=p.length
if(!(q>=0&&q<t))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.h(d)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>2){o=q+2
s=B.b.h(e)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>3){r=q+3
o=B.b.h(f)
if(!(r<t))return A.a(p,r)
p[r]=o}}}},
C(a){return"ImageDataUint32("+this.a+", "+this.b+", "+this.c+")"},
aN(a,b){}}
A.cI.prototype={
jP(a,b,c){var t=Math.max(this.e*b,1)
t=new Uint8Array(t)
this.d!==$&&A.jV()
this.d=t},
bb(a){var t,s=this,r=s.d
if(a){r===$&&A.b()
r=new Uint8Array(r.length)}else{r===$&&A.b()
r=new Uint8Array(A.w(r))}t=s.f
t=t==null?null:t.N()
return new A.cI(r,s.e,t,s.a,s.b,s.c)},
gH(){return B.y},
gv(a){var t=this.d
t===$&&A.b()
return B.e.gv(t)},
gG(a){return A.dY(this)},
b6(a,b,c,d,e){return A.aH(A.dY(this),b,c,d,e)},
gu(a){var t=this.d
t===$&&A.b()
return t.byteLength},
gB(){var t=this.f
t=t==null?null:t.gB()
return t==null?15:t},
gbc(){return!1},
gaD(){return 4},
aK(a,b,c,d){var t=B.b.h(a),s=B.b.h(b),r=B.b.h(c),q=B.b.h(d),p=new A.cu(4,new Uint8Array(2))
p.a7(t,s,r,q)
t=p
return t},
O(a,b,c){if(c==null||!(c instanceof A.c5)||c.e!==this)c=A.dY(this)
c.Z(a,b)
return c},
aF(a,b,c){var t,s=this
if(s.c<1)return
t=s.r;(t==null?s.r=A.dY(s):t).Z(a,b)
s.r.ap(0,c)},
a3(a,b,c,d,e){var t,s=this
if(s.c<1)return
t=s.r;(t==null?s.r=A.dY(s):t).Z(a,b)
s.r.am(c,d,e)},
al(a,b,c,d,e,f){var t,s=this
if(s.c<1)return
t=s.r;(t==null?s.r=A.dY(s):t).Z(a,b)
s.r.a7(c,d,e,f)},
C(a){return"ImageDataUint4("+this.a+", "+this.b+", "+this.c+")"},
aN(a,b){},
gaV(){return this.e},
gR(){return this.f}}
A.cJ.prototype={
bb(a){var t,s=this,r=s.d
if(a)r=new Uint8Array(r.length)
else r=new Uint8Array(A.w(r))
t=s.e
t=t==null?null:t.N()
return new A.cJ(r,t,s.a,s.b,s.c)},
gH(){return B.f},
gv(a){return B.e.gv(this.d)},
gaV(){return this.a*this.c},
gaD(){return 8},
gG(a){return A.hP(this)},
b6(a,b,c,d,e){return A.aH(A.hP(this),b,c,d,e)},
gu(a){return this.d.byteLength},
gB(){var t=this.e
t=t==null?null:t.gB()
return t==null?255:t},
gbc(){return!1},
aK(a,b,c,d){var t=A.md(B.b.h(B.b.I(a,0,255)),B.b.h(B.b.I(b,0,255)),B.b.h(B.b.I(c,0,255)),B.b.h(B.b.I(d,0,255)))
return t},
O(a,b,c){if(c==null||!(c instanceof A.c6)||c.d!==this)c=A.hP(this)
c.Z(a,b)
return c},
aF(a,b,c){var t,s=this.c,r=b*(this.a*s)+a*s
s=this.d
t=B.b.h(c)
s.$flags&2&&A.c(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=t},
a3(a,b,c,d,e){var t,s,r=this.c,q=b*(this.a*r)+a*r,p=this.d,o=B.b.h(c)
p.$flags&2&&A.c(p)
t=p.length
if(!(q>=0&&q<t))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.h(d)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>2){r=q+2
o=B.b.h(e)
if(!(r<t))return A.a(p,r)
p[r]=o}}},
al(a,b,c,d,e,f){var t,s,r=this.c,q=b*(this.a*r)+a*r,p=this.d,o=B.b.h(c)
p.$flags&2&&A.c(p)
t=p.length
if(!(q>=0&&q<t))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.h(d)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>2){o=q+2
s=B.b.h(e)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>3){r=q+3
o=B.b.h(f)
if(!(r<t))return A.a(p,r)
p[r]=o}}}},
C(a){return"ImageDataUint8("+this.a+", "+this.b+", "+this.c+")"},
aN(a,b){var t,s,r,q,p,o,n,m=this,l=m.c
if(l===1){l=m.d
B.e.aq(l,0,l.length,0)}else if(l===2){t=J.m0(B.e.gv(m.d),0,null)
B.u.aq(t,0,t.length,0)}else if(l===4){s=J.al(B.e.gv(m.d),0,null)
B.n.aq(s,0,s.length,0)}else for(r=A.hP(m),l=r.d,q=l.c>0,l=l.d,p=l.$flags|0;r.F();){if(q){o=r.c
n=B.b.h(B.a.I(0,0,255))
p&2&&A.c(l)
if(!(o>=0&&o<l.length))return A.a(l,o)
l[o]=n}r.sp(0)
r.sq(0)}},
gR(){return this.e}}
A.fd.prototype={
ad(){return"Interpolation."+this.b}}
A.ay.prototype={}
A.dP.prototype={
N(){return new A.dP(new Uint16Array(A.w(this.c)),this.a,this.b)},
gv(a){return B.u.gv(this.c)},
gH(){return B.A},
gB(){return 1},
T(a,b,c){var t,s,r=this.b
if(b<r){t=this.c
r=a*r+b
s=A.F(c)
t.$flags&2&&A.c(t)
if(!(r>=0&&r<t.length))return A.a(t,r)
t[r]=s}},
aY(a,b,c,d){var t,s,r,q,p=this.b
a*=p
t=this.c
s=A.F(b)
t.$flags&2&&A.c(t)
r=t.length
if(!(a>=0&&a<r))return A.a(t,a)
t[a]=s
if(p>1){s=a+1
q=A.F(c)
if(!(s<r))return A.a(t,s)
t[s]=q
if(p>2){p=a+2
s=A.F(d)
if(!(p<r))return A.a(t,p)
t[p]=s}}},
aX(a,b){var t,s=this.b
if(b<s){t=this.c
s=a*s+b
if(!(s>=0&&s<t.length))return A.a(t,s)
s=t[s]
t=$.L
t=t!=null?t:A.N()
if(!(s<t.length))return A.a(t,s)
s=t[s]}else s=0
return s},
aM(a){var t,s
a*=this.b
t=this.c
if(!(a>=0&&a<t.length))return A.a(t,a)
t=t[a]
s=$.L
s=s!=null?s:A.N()
if(!(t<s.length))return A.a(s,t)
return s[t]},
aL(a){var t,s=this.b
if(s<2)return 0
t=this.c
s=a*s+1
if(!(s>=0&&s<t.length))return A.a(t,s)
s=t[s]
t=$.L
t=t!=null?t:A.N()
if(!(s<t.length))return A.a(t,s)
return t[s]},
aJ(a){var t,s=this.b
if(s<3)return 0
t=this.c
s=a*s+2
if(!(s>=0&&s<t.length))return A.a(t,s)
s=t[s]
t=$.L
t=t!=null?t:A.N()
if(!(s<t.length))return A.a(t,s)
return t[s]},
aR(a){var t,s=this.b
if(s<4)return 0
t=this.c
s=a*s+3
if(!(s>=0&&s<t.length))return A.a(t,s)
s=t[s]
t=$.L
t=t!=null?t:A.N()
if(!(s<t.length))return A.a(t,s)
return t[s]},
bs(a,b){return this.T(a,0,b)},
bq(a,b){return this.T(a,1,b)},
bp(a,b){return this.T(a,2,b)},
bo(a,b){return this.T(a,3,b)}}
A.dQ.prototype={
N(){return new A.dQ(new Float32Array(A.w(this.c)),this.a,this.b)},
gv(a){return B.ai.gv(this.c)},
gH(){return B.G},
gB(){return 1},
T(a,b,c){var t,s=this.b
if(b<s){t=this.c
s=a*s+b
t.$flags&2&&A.c(t)
if(!(s>=0&&s<t.length))return A.a(t,s)
t[s]=c}},
aY(a,b,c,d){var t,s,r,q=this.b
a*=q
t=this.c
t.$flags&2&&A.c(t)
s=t.length
if(!(a>=0&&a<s))return A.a(t,a)
t[a]=b
if(q>1){r=a+1
if(!(r<s))return A.a(t,r)
t[r]=c
if(q>2){q=a+2
if(!(q<s))return A.a(t,q)
t[q]=d}}},
aX(a,b){var t,s=this.b
if(b<s){t=this.c
s=a*s+b
if(!(s>=0&&s<t.length))return A.a(t,s)
s=t[s]}else s=0
return s},
aM(a){var t
a*=this.b
t=this.c
if(!(a>=0&&a<t.length))return A.a(t,a)
return t[a]},
aL(a){var t,s=this.b
if(s<2)return 0
t=this.c
s=a*s+1
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
aJ(a){var t,s=this.b
if(s<3)return 0
t=this.c
s=a*s+2
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
aR(a){var t,s=this.b
if(s<4)return 0
t=this.c
s=a*s+3
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
bs(a,b){return this.T(a,0,b)},
bq(a,b){return this.T(a,1,b)},
bp(a,b){return this.T(a,2,b)},
bo(a,b){return this.T(a,3,b)}}
A.dR.prototype={
N(){return new A.dR(new Float64Array(A.w(this.c)),this.a,this.b)},
gv(a){return B.aj.gv(this.c)},
gH(){return B.I},
gB(){return 1},
T(a,b,c){var t,s=this.b
if(b<s){t=this.c
s=a*s+b
t.$flags&2&&A.c(t)
if(!(s>=0&&s<t.length))return A.a(t,s)
t[s]=c}},
aY(a,b,c,d){var t,s,r,q=this.b
a*=q
t=this.c
t.$flags&2&&A.c(t)
s=t.length
if(!(a>=0&&a<s))return A.a(t,a)
t[a]=b
if(q>1){r=a+1
if(!(r<s))return A.a(t,r)
t[r]=c
if(q>2){q=a+2
if(!(q<s))return A.a(t,q)
t[q]=d}}},
aX(a,b){var t,s=this.b
if(b<s){t=this.c
s=a*s+b
if(!(s>=0&&s<t.length))return A.a(t,s)
s=t[s]}else s=0
return s},
aM(a){var t
a*=this.b
t=this.c
if(!(a>=0&&a<t.length))return A.a(t,a)
return t[a]},
aL(a){var t,s=this.b
if(s<2)return 0
t=this.c
s=a*s+1
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
aJ(a){var t,s=this.b
if(s<3)return 0
t=this.c
s=a*s+2
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
aR(a){var t,s=this.b
if(s<4)return 0
t=this.c
s=a*s+3
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
bs(a,b){return this.T(a,0,b)},
bq(a,b){return this.T(a,1,b)},
bp(a,b){return this.T(a,2,b)},
bo(a,b){return this.T(a,3,b)}}
A.dS.prototype={
N(){return new A.dS(new Int16Array(A.w(this.c)),this.a,this.b)},
gv(a){return B.aD.gv(this.c)},
gH(){return B.K},
gB(){return 32767},
T(a,b,c){var t,s,r=this.b
if(b<r){t=this.c
r=a*r+b
s=B.a.h(c)
t.$flags&2&&A.c(t)
if(!(r>=0&&r<t.length))return A.a(t,r)
t[r]=s}},
aY(a,b,c,d){var t,s,r,q,p=this.b
a*=p
t=this.c
s=B.b.h(b)
t.$flags&2&&A.c(t)
r=t.length
if(!(a>=0&&a<r))return A.a(t,a)
t[a]=s
if(p>1){s=a+1
q=B.b.h(c)
if(!(s<r))return A.a(t,s)
t[s]=q
if(p>2){p=a+2
s=B.b.h(d)
if(!(p<r))return A.a(t,p)
t[p]=s}}},
aX(a,b){var t,s=this.b
if(b<s){t=this.c
s=a*s+b
if(!(s>=0&&s<t.length))return A.a(t,s)
s=t[s]}else s=0
return s},
aM(a){var t
a*=this.b
t=this.c
if(!(a>=0&&a<t.length))return A.a(t,a)
return t[a]},
aL(a){var t,s=this.b
if(s<2)return 0
t=this.c
s=a*s+1
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
aJ(a){var t,s=this.b
if(s<3)return 0
t=this.c
s=a*s+2
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
aR(a){var t,s=this.b
if(s<4)return 0
t=this.c
s=a*s+3
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
bs(a,b){return this.T(a,0,b)},
bq(a,b){return this.T(a,1,b)},
bp(a,b){return this.T(a,2,b)},
bo(a,b){return this.T(a,3,b)}}
A.dT.prototype={
N(){return new A.dT(new Int32Array(A.w(this.c)),this.a,this.b)},
gv(a){return B.R.gv(this.c)},
gH(){return B.L},
gB(){return 2147483647},
T(a,b,c){var t,s,r=this.b
if(b<r){t=this.c
r=a*r+b
s=B.a.h(c)
t.$flags&2&&A.c(t)
if(!(r>=0&&r<t.length))return A.a(t,r)
t[r]=s}},
aY(a,b,c,d){var t,s,r,q,p=this.b
a*=p
t=this.c
s=B.b.h(b)
t.$flags&2&&A.c(t)
r=t.length
if(!(a>=0&&a<r))return A.a(t,a)
t[a]=s
if(p>1){s=a+1
q=B.b.h(c)
if(!(s<r))return A.a(t,s)
t[s]=q
if(p>2){p=a+2
s=B.b.h(d)
if(!(p<r))return A.a(t,p)
t[p]=s}}},
aX(a,b){var t,s=this.b
if(b<s){t=this.c
s=a*s+b
if(!(s>=0&&s<t.length))return A.a(t,s)
s=t[s]}else s=0
return s},
aM(a){var t
a*=this.b
t=this.c
if(!(a>=0&&a<t.length))return A.a(t,a)
return t[a]},
aL(a){var t,s=this.b
if(s<2)return 0
t=this.c
s=a*s+1
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
aJ(a){var t,s=this.b
if(s<3)return 0
t=this.c
s=a*s+2
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
aR(a){var t,s=this.b
if(s<4)return 0
t=this.c
s=a*s+3
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
bs(a,b){return this.T(a,0,b)},
bq(a,b){return this.T(a,1,b)},
bp(a,b){return this.T(a,2,b)},
bo(a,b){return this.T(a,3,b)}}
A.dU.prototype={
N(){return new A.dU(new Int8Array(A.w(this.c)),this.a,this.b)},
gv(a){return B.aE.gv(this.c)},
gH(){return B.J},
gB(){return 127},
T(a,b,c){var t,s,r=this.b
if(b<r){t=this.c
r=a*r+b
s=B.a.h(c)
t.$flags&2&&A.c(t)
if(!(r>=0&&r<t.length))return A.a(t,r)
t[r]=s}},
aY(a,b,c,d){var t,s,r,q,p=this.b
a*=p
t=this.c
s=B.b.h(b)
t.$flags&2&&A.c(t)
r=t.length
if(!(a>=0&&a<r))return A.a(t,a)
t[a]=s
if(p>1){s=a+1
q=B.b.h(c)
if(!(s<r))return A.a(t,s)
t[s]=q
if(p>2){p=a+2
s=B.b.h(d)
if(!(p<r))return A.a(t,p)
t[p]=s}}},
aX(a,b){var t,s=this.b
if(b<s){t=this.c
s=a*s+b
if(!(s>=0&&s<t.length))return A.a(t,s)
s=t[s]}else s=0
return s},
aM(a){var t
a*=this.b
t=this.c
if(!(a>=0&&a<t.length))return A.a(t,a)
return t[a]},
aL(a){var t,s=this.b
if(s<2)return 0
t=this.c
s=a*s+1
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
aJ(a){var t,s=this.b
if(s<3)return 0
t=this.c
s=a*s+2
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
aR(a){var t,s=this.b
if(s<4)return 0
t=this.c
s=a*s+3
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
bs(a,b){return this.T(a,0,b)},
bq(a,b){return this.T(a,1,b)},
bp(a,b){return this.T(a,2,b)},
bo(a,b){return this.T(a,3,b)}}
A.dV.prototype={
N(){return new A.dV(new Uint16Array(A.w(this.c)),this.a,this.b)},
gv(a){return B.u.gv(this.c)},
gH(){return B.l},
gB(){return 65535},
T(a,b,c){var t,s,r=this.b
if(b<r){t=this.c
r=a*r+b
s=B.a.h(c)
t.$flags&2&&A.c(t)
if(!(r>=0&&r<t.length))return A.a(t,r)
t[r]=s}},
aY(a,b,c,d){var t,s,r,q,p=this.b
a*=p
t=this.c
s=B.b.h(b)
t.$flags&2&&A.c(t)
r=t.length
if(!(a>=0&&a<r))return A.a(t,a)
t[a]=s
if(p>1){s=a+1
q=B.b.h(c)
if(!(s<r))return A.a(t,s)
t[s]=q
if(p>2){p=a+2
s=B.b.h(d)
if(!(p<r))return A.a(t,p)
t[p]=s}}},
aX(a,b){var t,s=this.b
if(b<s){t=this.c
s=a*s+b
if(!(s>=0&&s<t.length))return A.a(t,s)
s=t[s]}else s=0
return s},
aM(a){var t
a*=this.b
t=this.c
if(!(a>=0&&a<t.length))return A.a(t,a)
return t[a]},
aL(a){var t,s=this.b
if(s<2)return 0
t=this.c
s=a*s+1
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
aJ(a){var t,s=this.b
if(s<3)return 0
t=this.c
s=a*s+2
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
aR(a){var t,s=this.b
if(s<4)return 0
t=this.c
s=a*s+3
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
bs(a,b){return this.T(a,0,b)},
bq(a,b){return this.T(a,1,b)},
bp(a,b){return this.T(a,2,b)},
bo(a,b){return this.T(a,3,b)}}
A.cP.prototype={
N(){return new A.cP(new Uint32Array(A.w(this.c)),this.a,this.b)},
gv(a){return B.n.gv(this.c)},
gH(){return B.H},
gB(){return 4294967295},
T(a,b,c){var t,s,r=this.b
if(b<r){t=this.c
r=a*r+b
s=B.a.h(c)
t.$flags&2&&A.c(t)
if(!(r>=0&&r<t.length))return A.a(t,r)
t[r]=s}},
aY(a,b,c,d){var t,s,r,q,p=this.b
a*=p
t=this.c
s=B.b.h(b)
t.$flags&2&&A.c(t)
r=t.length
if(!(a>=0&&a<r))return A.a(t,a)
t[a]=s
if(p>1){s=a+1
q=B.b.h(c)
if(!(s<r))return A.a(t,s)
t[s]=q
if(p>2){p=a+2
s=B.b.h(d)
if(!(p<r))return A.a(t,p)
t[p]=s}}},
aX(a,b){var t,s=this.b
if(b<s){t=this.c
s=a*s+b
if(!(s>=0&&s<t.length))return A.a(t,s)
s=t[s]}else s=0
return s},
aM(a){var t
a*=this.b
t=this.c
if(!(a>=0&&a<t.length))return A.a(t,a)
return t[a]},
aL(a){var t,s=this.b
if(s<2)return 0
t=this.c
s=a*s+1
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
aJ(a){var t,s=this.b
if(s<3)return 0
t=this.c
s=a*s+2
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
aR(a){var t,s=this.b
if(s<4)return 0
t=this.c
s=a*s+3
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
bs(a,b){return this.T(a,0,b)},
bq(a,b){return this.T(a,1,b)},
bp(a,b){return this.T(a,2,b)},
bo(a,b){return this.T(a,3,b)}}
A.az.prototype={
N(){return A.kG(this)},
gv(a){return B.e.gv(this.c)},
gH(){return B.f},
gB(){return 255},
T(a,b,c){var t,s,r=this.b
if(b<r){t=this.c
r=a*r+b
s=B.a.h(c)
t.$flags&2&&A.c(t)
if(!(r>=0&&r<t.length))return A.a(t,r)
t[r]=s}},
aY(a,b,c,d){var t,s,r,q,p=this.b
a*=p
t=this.c
s=B.b.h(b)
t.$flags&2&&A.c(t)
r=t.length
if(!(a>=0&&a<r))return A.a(t,a)
t[a]=s
if(p>1){s=a+1
q=B.b.h(c)
if(!(s<r))return A.a(t,s)
t[s]=q
if(p>2){p=a+2
s=B.b.h(d)
if(!(p<r))return A.a(t,p)
t[p]=s}}},
cB(a,b,c,d,e){var t,s,r,q,p=this.b
a*=p
t=this.c
s=B.a.h(b)
t.$flags&2&&A.c(t)
r=t.length
if(!(a>=0&&a<r))return A.a(t,a)
t[a]=s
if(p>1){s=a+1
q=B.a.h(c)
if(!(s<r))return A.a(t,s)
t[s]=q
if(p>2){s=a+2
q=B.a.h(d)
if(!(s<r))return A.a(t,s)
t[s]=q
if(p>3){p=a+3
s=B.a.h(e)
if(!(p<r))return A.a(t,p)
t[p]=s}}}},
aX(a,b){var t,s=this.b
if(b<s){t=this.c
s=a*s+b
if(!(s>=0&&s<t.length))return A.a(t,s)
s=t[s]}else s=0
return s},
aM(a){var t,s
a*=this.b
t=this.c
s=t.length
if(a>=s)return 0
if(!(a>=0))return A.a(t,a)
return t[a]},
aL(a){var t,s,r=this.b
if(r<2)return 0
a*=r
r=this.c
t=r.length
if(a>=t)return 0
s=a+1
if(!(s>=0&&s<t))return A.a(r,s)
return r[s]},
aJ(a){var t,s,r=this.b
if(r<3)return 0
a*=r
r=this.c
t=r.length
if(a>=t)return 0
s=a+2
if(!(s>=0&&s<t))return A.a(r,s)
return r[s]},
aR(a){var t,s,r=this.b
if(r<4)return 255
a*=r
r=this.c
t=r.length
if(a>=t)return 0
s=a+3
if(!(s>=0&&s<t))return A.a(r,s)
return r[s]},
bs(a,b){return this.T(a,0,b)},
bq(a,b){return this.T(a,1,b)},
bp(a,b){return this.T(a,2,b)},
bo(a,b){return this.T(a,3,b)}}
A.bW.prototype={
N(){var t=this
return new A.bW(t.a,t.b,t.c,t.d)},
gH(){return B.A},
gu(a){return this.d.c},
gR(){return null},
gB(){return 1},
gaQ(){return this.a},
gaI(){return this.b},
Z(a,b){var t,s,r=this
r.a=a
r.b=b
t=r.d
s=t.c
r.c=b*t.a*s+a*s},
gP(){return this},
F(){var t,s=this,r=s.d
if(++s.a===r.a){s.a=0
if(++s.b===r.b)return!1}t=s.c+r.c
s.c=t
return t<r.d.length},
n(a,b){var t,s=this.d
if(b<s.c){s=s.d
t=this.c+b
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=$.L
s=s!=null?s:A.N()
if(!(t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
i(a,b,c){var t,s,r=this.d
if(b<r.c){r=r.d
t=this.c+b
s=A.F(c)
r.$flags&2&&A.c(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gL(){return this.gm()},
sL(a){this.sm(a)},
gm(){var t,s=this.d
if(s.c>0){s=s.d
t=this.c
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=$.L
s=s!=null?s:A.N()
if(!(t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sm(a){var t,s,r=this.d
if(r.c>0){r=r.d
t=this.c
s=A.F(a)
r.$flags&2&&A.c(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gp(){var t,s=this.d
if(s.c>1){s=s.d
t=this.c+1
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=$.L
s=s!=null?s:A.N()
if(!(t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sp(a){var t,s,r=this.d
if(r.c>1){r=r.d
t=this.c+1
s=A.F(a)
r.$flags&2&&A.c(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gq(){var t,s=this.d
if(s.c>2){s=s.d
t=this.c+2
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=$.L
s=s!=null?s:A.N()
if(!(t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sq(a){var t,s,r=this.d
if(r.c>2){r=r.d
t=this.c+2
s=A.F(a)
r.$flags&2&&A.c(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gt(){var t,s=this.d
if(s.c>3){s=s.d
t=this.c+3
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=$.L
s=s!=null?s:A.N()
if(!(t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
st(a){var t,s,r,q=this.d
if(q.c>3){t=this.gp()
q=q.d
s=this.c+3
r=A.F(t)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
ga9(){return this.gm()/1},
sa9(a){this.sm(a)},
ga5(){return this.gp()/1},
sa5(a){this.sp(a)},
ga8(){return this.gq()/1},
sa8(a){this.sq(a)},
gaa(){return this.gt()/1},
saa(a){this.st(a)},
gah(){return A.U(this)},
ac(a){var t=this
if(t.d.c>0){t.sm(a.gm())
t.sp(a.gp())
t.sq(a.gq())
t.st(a.gt())}},
am(a,b,c){var t,s,r,q=this,p=q.d,o=p.c
if(o>0){p=p.d
t=q.c
s=A.F(a)
p.$flags&2&&A.c(p)
r=p.length
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>1){t=q.c+1
s=A.F(b)
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>2){o=q.c+2
t=A.F(c)
if(!(o>=0&&o<r))return A.a(p,o)
p[o]=t}}}},
a7(a,b,c,d){var t,s,r,q=this,p=q.d,o=p.c
if(o>0){p=p.d
t=q.c
s=A.F(a)
p.$flags&2&&A.c(p)
r=p.length
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>1){t=q.c+1
s=A.F(b)
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>2){t=q.c+2
s=A.F(c)
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>3){o=q.c+3
t=A.F(d)
if(!(o>=0&&o<r))return A.a(p,o)
p[o]=t}}}}},
gG(a){return new A.K(this)},
S(a,b){var t,s,r,q,p,o=this
if(b==null)return!1
if(b instanceof A.bW){t=A.t(o,A.o(o).A("e.E"))
t=A.l(t)
s=A.t(b,A.o(b).A("e.E"))
return t===A.l(s)}if(u.L.b(b)){t=J.a1(b)
s=o.d
r=s.c
if(t.gu(b)!==r)return!1
s=s.d
q=o.c
p=s.length
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.n(b,0))return!1
if(r>1){q=o.c+1
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.n(b,1))return!1
if(r>2){q=o.c+2
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.n(b,2))return!1
if(r>3){r=o.c+3
if(!(r>=0&&r<p))return A.a(s,r)
if(s[r]!==t.n(b,3))return!1}}}return!0}return!1},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.l(t)},
$iC:1,
$iy:1,
$ip:1,
gb3(){return this.d}}
A.bX.prototype={
N(){var t=this
return new A.bX(t.a,t.b,t.c,t.d)},
gu(a){return this.d.c},
gR(){return null},
gB(){return 1},
gH(){return B.G},
gaQ(){return this.a},
gaI(){return this.b},
Z(a,b){var t,s,r=this
r.a=a
r.b=b
t=r.d
s=t.c
r.c=b*t.a*s+a*s},
gP(){return this},
F(){var t,s=this,r=s.d
if(++s.a===r.a){s.a=0
if(++s.b===r.b)return!1}t=s.c+r.c
s.c=t
return t<r.d.length},
n(a,b){var t,s=this.d
if(b<s.c){s=s.d
t=this.c+b
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
i(a,b,c){var t,s=this.d
if(b<s.c){s=s.d
t=this.c+b
s.$flags&2&&A.c(s)
if(!(t>=0&&t<s.length))return A.a(s,t)
s[t]=c}},
gL(){return this.gm()},
sL(a){this.sm(a)},
gm(){var t,s=this.d
if(s.c>0){s=s.d
t=this.c
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sm(a){var t,s=this.d
if(s.c>0){s=s.d
t=this.c
s.$flags&2&&A.c(s)
if(!(t>=0&&t<s.length))return A.a(s,t)
s[t]=a}},
gp(){var t,s=this.d
if(s.c>1){s=s.d
t=this.c+1
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sp(a){var t,s=this.d
if(s.c>1){s=s.d
t=this.c+1
s.$flags&2&&A.c(s)
if(!(t>=0&&t<s.length))return A.a(s,t)
s[t]=a}},
gq(){var t,s=this.d
if(s.c>2){s=s.d
t=this.c+2
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sq(a){var t,s=this.d
if(s.c>2){s=s.d
t=this.c+2
s.$flags&2&&A.c(s)
if(!(t>=0&&t<s.length))return A.a(s,t)
s[t]=a}},
gt(){var t,s=this.d
if(s.c>3){s=s.d
t=this.c+3
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=1
return s},
st(a){var t,s=this.d
if(s.c>3){s=s.d
t=this.c+3
s.$flags&2&&A.c(s)
if(!(t>=0&&t<s.length))return A.a(s,t)
s[t]=a}},
ga9(){return this.gm()/1},
sa9(a){this.sm(a)},
ga5(){return this.gp()/1},
sa5(a){this.sp(a)},
ga8(){return this.gq()/1},
sa8(a){this.sq(a)},
gaa(){return this.gt()/1},
saa(a){this.st(a)},
gah(){return A.U(this)},
ac(a){var t=this
t.sm(a.gm())
t.sp(a.gp())
t.sq(a.gq())
t.st(a.gt())},
am(a,b,c){var t,s,r=this.d,q=r.d,p=this.c
q.$flags&2&&A.c(q)
t=q.length
if(!(p>=0&&p<t))return A.a(q,p)
q[p]=a
r=r.c
if(r>1){s=p+1
if(!(s<t))return A.a(q,s)
q[s]=b
if(r>2){r=p+2
if(!(r<t))return A.a(q,r)
q[r]=c}}},
a7(a,b,c,d){var t,s,r=this.d,q=r.d,p=this.c
q.$flags&2&&A.c(q)
t=q.length
if(!(p>=0&&p<t))return A.a(q,p)
q[p]=a
r=r.c
if(r>1){s=p+1
if(!(s<t))return A.a(q,s)
q[s]=b
if(r>2){s=p+2
if(!(s<t))return A.a(q,s)
q[s]=c
if(r>3){r=p+3
if(!(r<t))return A.a(q,r)
q[r]=d}}}},
gG(a){return new A.K(this)},
S(a,b){var t,s,r,q,p,o=this
if(b==null)return!1
if(b instanceof A.bX){t=A.t(o,A.o(o).A("e.E"))
t=A.l(t)
s=A.t(b,A.o(b).A("e.E"))
return t===A.l(s)}if(u.L.b(b)){t=J.a1(b)
s=o.d
r=s.c
if(t.gu(b)!==r)return!1
s=s.d
q=o.c
p=s.length
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.n(b,0))return!1
if(r>1){q=o.c+1
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.n(b,1))return!1
if(r>2){q=o.c+2
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.n(b,2))return!1
if(r>3){r=o.c+3
if(!(r>=0&&r<p))return A.a(s,r)
if(s[r]!==t.n(b,3))return!1}}}return!0}return!1},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.l(t)},
$iC:1,
$iy:1,
$ip:1,
gb3(){return this.d}}
A.bY.prototype={
N(){var t=this
return new A.bY(t.a,t.b,t.c,t.d)},
gu(a){return this.d.c},
gR(){return null},
gB(){return 1},
gH(){return B.I},
gaQ(){return this.a},
gaI(){return this.b},
Z(a,b){var t,s,r=this
r.a=a
r.b=b
t=r.d
s=t.c
r.c=b*t.a*s+a*s},
gP(){return this},
F(){var t,s=this,r=s.d
if(++s.a===r.a){s.a=0
if(++s.b===r.b)return!1}t=s.c+r.c
s.c=t
return t<r.d.length},
n(a,b){var t,s=this.d
if(b<s.c){s=s.d
t=this.c+b
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
i(a,b,c){var t,s=this.d
if(b<s.c){s=s.d
t=this.c+b
s.$flags&2&&A.c(s)
if(!(t>=0&&t<s.length))return A.a(s,t)
s[t]=c}},
gL(){return this.gm()},
sL(a){this.sm(a)},
gm(){var t,s=this.d
if(s.c>0){s=s.d
t=this.c
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sm(a){var t,s=this.d
if(s.c>0){s=s.d
t=this.c
s.$flags&2&&A.c(s)
if(!(t>=0&&t<s.length))return A.a(s,t)
s[t]=a}},
gp(){var t,s=this.d
if(s.c>1){s=s.d
t=this.c+1
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sp(a){var t,s=this.d
if(s.c>1){s=s.d
t=this.c+1
s.$flags&2&&A.c(s)
if(!(t>=0&&t<s.length))return A.a(s,t)
s[t]=a}},
gq(){var t,s=this.d
if(s.c>2){s=s.d
t=this.c+2
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sq(a){var t,s=this.d
if(s.c>2){s=s.d
t=this.c+2
s.$flags&2&&A.c(s)
if(!(t>=0&&t<s.length))return A.a(s,t)
s[t]=a}},
gt(){var t,s=this.d
if(s.c>3){s=s.d
t=this.c+3
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
st(a){var t,s=this.d
if(s.c>3){s=s.d
t=this.c+3
s.$flags&2&&A.c(s)
if(!(t>=0&&t<s.length))return A.a(s,t)
s[t]=a}},
ga9(){return this.gm()/1},
sa9(a){this.sm(a)},
ga5(){return this.gp()/1},
sa5(a){this.sp(a)},
ga8(){return this.gq()/1},
sa8(a){this.sq(a)},
gaa(){return this.gt()/1},
saa(a){this.st(a)},
gah(){return A.U(this)},
ac(a){var t=this
t.sm(a.gm())
t.sp(a.gp())
t.sq(a.gq())
t.st(a.gt())},
am(a,b,c){var t,s,r=this.d,q=r.d,p=this.c
q.$flags&2&&A.c(q)
t=q.length
if(!(p>=0&&p<t))return A.a(q,p)
q[p]=a
r=r.c
if(r>1){s=p+1
if(!(s<t))return A.a(q,s)
q[s]=b
if(r>2){r=p+2
if(!(r<t))return A.a(q,r)
q[r]=c}}},
a7(a,b,c,d){var t,s,r=this.d,q=r.d,p=this.c
q.$flags&2&&A.c(q)
t=q.length
if(!(p>=0&&p<t))return A.a(q,p)
q[p]=a
r=r.c
if(r>1){s=p+1
if(!(s<t))return A.a(q,s)
q[s]=b
if(r>2){s=p+2
if(!(s<t))return A.a(q,s)
q[s]=c
if(r>3){r=p+3
if(!(r<t))return A.a(q,r)
q[r]=d}}}},
gG(a){return new A.K(this)},
S(a,b){var t,s,r,q,p,o=this
if(b==null)return!1
if(b instanceof A.bY){t=A.t(o,A.o(o).A("e.E"))
t=A.l(t)
s=A.t(b,A.o(b).A("e.E"))
return t===A.l(s)}if(u.L.b(b)){t=J.a1(b)
s=o.d
r=s.c
if(t.gu(b)!==r)return!1
s=s.d
q=o.c
p=s.length
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.n(b,0))return!1
if(r>1){q=o.c+1
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.n(b,1))return!1
if(r>2){q=o.c+2
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.n(b,2))return!1
if(r>3){r=o.c+3
if(!(r>=0&&r<p))return A.a(s,r)
if(s[r]!==t.n(b,3))return!1}}}return!0}return!1},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.l(t)},
$iC:1,
$iy:1,
$ip:1,
gb3(){return this.d}}
A.bZ.prototype={
N(){var t=this
return new A.bZ(t.a,t.b,t.c,t.d)},
gu(a){return this.d.c},
gR(){return null},
gB(){return 32767},
gH(){return B.K},
gaQ(){return this.a},
gaI(){return this.b},
Z(a,b){var t,s,r=this
r.a=a
r.b=b
t=r.d
s=t.c
r.c=b*t.a*s+a*s},
gP(){return this},
F(){var t,s=this,r=s.d
if(++s.a===r.a){s.a=0
if(++s.b===r.b)return!1}t=s.c+r.c
s.c=t
return t<r.d.length},
n(a,b){var t,s=this.d
if(b<s.c){s=s.d
t=this.c+b
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
i(a,b,c){var t,s,r=this.d
if(b<r.c){r=r.d
t=this.c+b
s=B.b.h(c)
r.$flags&2&&A.c(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gL(){return this.gm()},
sL(a){this.sm(a)},
gm(){var t,s=this.d
if(s.c>0){s=s.d
t=this.c
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sm(a){var t,s,r=this.d
if(r.c>0){r=r.d
t=this.c
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gp(){var t,s=this.d
if(s.c>1){s=s.d
t=this.c+1
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sp(a){var t,s,r=this.d
if(r.c>1){r=r.d
t=this.c+1
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gq(){var t,s=this.d
if(s.c>2){s=s.d
t=this.c+2
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sq(a){var t,s,r=this.d
if(r.c>2){r=r.d
t=this.c+2
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gt(){var t,s=this.d
if(s.c>3){s=s.d
t=this.c+3
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
st(a){var t,s,r=this.d
if(r.c>3){r=r.d
t=this.c+3
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
ga9(){return this.gm()/32767},
sa9(a){this.sm(a*32767)},
ga5(){return this.gp()/32767},
sa5(a){this.sp(a*32767)},
ga8(){return this.gq()/32767},
sa8(a){this.sq(a*32767)},
gaa(){return this.gt()/32767},
saa(a){this.st(a*32767)},
gah(){return A.U(this)},
ac(a){var t=this
t.sm(a.gm())
t.sp(a.gp())
t.sq(a.gq())
t.st(a.gt())},
am(a,b,c){var t,s,r,q,p=this.d,o=p.c
if(o>0){p=p.d
t=this.c
s=B.a.h(a)
p.$flags&2&&A.c(p)
r=p.length
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>1){s=t+1
q=B.a.h(b)
if(!(s<r))return A.a(p,s)
p[s]=q
if(o>2){o=t+2
t=B.a.h(c)
if(!(o<r))return A.a(p,o)
p[o]=t}}}},
a7(a,b,c,d){var t,s,r,q,p=this.d,o=p.c
if(o>0){p=p.d
t=this.c
s=B.a.h(a)
p.$flags&2&&A.c(p)
r=p.length
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>1){s=t+1
q=B.a.h(b)
if(!(s<r))return A.a(p,s)
p[s]=q
if(o>2){s=t+2
q=B.a.h(c)
if(!(s<r))return A.a(p,s)
p[s]=q
if(o>3){o=t+3
t=B.a.h(d)
if(!(o<r))return A.a(p,o)
p[o]=t}}}}},
gG(a){return new A.K(this)},
S(a,b){var t,s,r,q,p,o=this
if(b==null)return!1
if(b instanceof A.bZ){t=A.t(o,A.o(o).A("e.E"))
t=A.l(t)
s=A.t(b,A.o(b).A("e.E"))
return t===A.l(s)}if(u.L.b(b)){t=J.a1(b)
s=o.d
r=s.c
if(t.gu(b)!==r)return!1
s=s.d
q=o.c
p=s.length
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.n(b,0))return!1
if(r>1){q=o.c+1
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.n(b,1))return!1
if(r>2){q=o.c+2
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.n(b,2))return!1
if(r>3){r=o.c+3
if(!(r>=0&&r<p))return A.a(s,r)
if(s[r]!==t.n(b,3))return!1}}}return!0}return!1},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.l(t)},
$iC:1,
$iy:1,
$ip:1,
gb3(){return this.d}}
A.c_.prototype={
N(){var t=this
return new A.c_(t.a,t.b,t.c,t.d)},
gu(a){return this.d.c},
gR(){return null},
gB(){return 2147483647},
gH(){return B.L},
gaQ(){return this.a},
gaI(){return this.b},
Z(a,b){var t,s,r=this
r.a=a
r.b=b
t=r.d
s=t.c
r.c=b*t.a*s+a*s},
gP(){return this},
F(){var t,s=this,r=s.d
if(++s.a===r.a){s.a=0
if(++s.b===r.b)return!1}t=s.c+r.c
s.c=t
return t<r.d.length},
n(a,b){var t,s=this.d
if(b<s.c){s=s.d
t=this.c+b
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
i(a,b,c){var t,s,r=this.d
if(b<r.c){r=r.d
t=this.c+b
s=B.b.h(c)
r.$flags&2&&A.c(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gL(){return this.gm()},
sL(a){this.sm(a)},
gm(){var t,s=this.d
if(s.c>0){s=s.d
t=this.c
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sm(a){var t,s,r=this.d
if(r.c>0){r=r.d
t=this.c
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gp(){var t,s=this.d
if(s.c>1){s=s.d
t=this.c+1
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sp(a){var t,s,r=this.d
if(r.c>1){r=r.d
t=this.c+1
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gq(){var t,s=this.d
if(s.c>2){s=s.d
t=this.c+2
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sq(a){var t,s,r=this.d
if(r.c>2){r=r.d
t=this.c+2
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gt(){var t,s=this.d
if(s.c>3){s=s.d
t=this.c+3
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
st(a){var t,s,r=this.d
if(r.c>3){r=r.d
t=this.c+3
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
ga9(){return this.gm()/2147483647},
sa9(a){this.sm(a*2147483647)},
ga5(){return this.gp()/2147483647},
sa5(a){this.sp(a*2147483647)},
ga8(){return this.gq()/2147483647},
sa8(a){this.sq(a*2147483647)},
gaa(){return this.gt()/2147483647},
saa(a){this.st(a*2147483647)},
gah(){return A.U(this)},
ac(a){var t=this
t.sm(a.gm())
t.sp(a.gp())
t.sq(a.gq())
t.st(a.gt())},
am(a,b,c){var t,s,r,q,p=this.d,o=p.c
if(o>0){p=p.d
t=this.c
s=B.a.h(a)
p.$flags&2&&A.c(p)
r=p.length
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>1){s=t+1
q=B.a.h(b)
if(!(s<r))return A.a(p,s)
p[s]=q
if(o>2){o=t+2
t=B.a.h(c)
if(!(o<r))return A.a(p,o)
p[o]=t}}}},
a7(a,b,c,d){var t,s,r,q,p=this.d,o=p.c
if(o>0){p=p.d
t=this.c
s=B.a.h(a)
p.$flags&2&&A.c(p)
r=p.length
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>1){s=t+1
q=B.a.h(b)
if(!(s<r))return A.a(p,s)
p[s]=q
if(o>2){s=t+2
q=B.a.h(c)
if(!(s<r))return A.a(p,s)
p[s]=q
if(o>3){o=t+3
t=B.a.h(d)
if(!(o<r))return A.a(p,o)
p[o]=t}}}}},
gG(a){return new A.K(this)},
S(a,b){var t,s,r,q,p,o=this
if(b==null)return!1
if(b instanceof A.c_){t=A.t(o,A.o(o).A("e.E"))
t=A.l(t)
s=A.t(b,A.o(b).A("e.E"))
return t===A.l(s)}if(u.L.b(b)){t=J.a1(b)
s=o.d
r=s.c
if(t.gu(b)!==r)return!1
s=s.d
q=o.c
p=s.length
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.n(b,0))return!1
if(r>1){q=o.c+1
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.n(b,1))return!1
if(r>2){q=o.c+2
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.n(b,2))return!1
if(r>3){r=o.c+3
if(!(r>=0&&r<p))return A.a(s,r)
if(s[r]!==t.n(b,3))return!1}}}return!0}return!1},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.l(t)},
$iC:1,
$iy:1,
$ip:1,
gb3(){return this.d}}
A.c0.prototype={
N(){var t=this
return new A.c0(t.a,t.b,t.c,t.d)},
gu(a){return this.d.c},
gR(){return null},
gB(){return 127},
gH(){return B.J},
gaQ(){return this.a},
gaI(){return this.b},
Z(a,b){var t,s,r=this
r.a=a
r.b=b
t=r.d
s=t.c
r.c=b*t.a*s+a*s},
gP(){return this},
F(){var t,s=this,r=s.d
if(++s.a===r.a){s.a=0
if(++s.b===r.b)return!1}t=s.c+r.c
s.c=t
return t<r.d.length},
n(a,b){var t,s=this.d
if(b<s.c){s=s.d
t=this.c+b
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
i(a,b,c){var t,s,r=this.d
if(b<r.c){r=r.d
t=this.c+b
s=B.b.h(c)
r.$flags&2&&A.c(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gL(){return this.gm()},
sL(a){this.sm(a)},
gm(){var t,s=this.d
if(s.c>0){s=s.d
t=this.c
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sm(a){var t,s,r=this.d
if(r.c>0){r=r.d
t=this.c
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gp(){var t,s=this.d
if(s.c>1){s=s.d
t=this.c+1
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sp(a){var t,s,r=this.d
if(r.c>1){r=r.d
t=this.c+1
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gq(){var t,s=this.d
if(s.c>2){s=s.d
t=this.c+2
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sq(a){var t,s,r=this.d
if(r.c>2){r=r.d
t=this.c+2
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gt(){var t,s=this.d
if(s.c>3){s=s.d
t=this.c+3
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
st(a){var t,s,r=this.d
if(r.c>3){r=r.d
t=this.c+3
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
ga9(){return this.gm()/127},
sa9(a){this.sm(a*127)},
ga5(){return this.gp()/127},
sa5(a){this.sp(a*127)},
ga8(){return this.gq()/127},
sa8(a){this.sq(a*127)},
gaa(){return this.gt()/127},
saa(a){this.st(a*127)},
gah(){return A.U(this)},
ac(a){var t=this
t.sm(a.gm())
t.sp(a.gp())
t.sq(a.gq())
t.st(a.gt())},
am(a,b,c){var t,s,r,q,p=this.d,o=p.c
if(o>0){p=p.d
t=this.c
s=B.a.h(a)
p.$flags&2&&A.c(p)
r=p.length
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>1){s=t+1
q=B.a.h(b)
if(!(s<r))return A.a(p,s)
p[s]=q
if(o>2){o=t+2
t=B.a.h(c)
if(!(o<r))return A.a(p,o)
p[o]=t}}}},
a7(a,b,c,d){var t,s,r,q,p=this.d,o=p.c
if(o>0){p=p.d
t=this.c
s=B.a.h(a)
p.$flags&2&&A.c(p)
r=p.length
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>1){s=t+1
q=B.a.h(b)
if(!(s<r))return A.a(p,s)
p[s]=q
if(o>2){s=t+2
q=B.a.h(c)
if(!(s<r))return A.a(p,s)
p[s]=q
if(o>3){o=t+3
t=B.a.h(d)
if(!(o<r))return A.a(p,o)
p[o]=t}}}}},
gG(a){return new A.K(this)},
S(a,b){var t,s,r,q,p,o=this
if(b==null)return!1
if(b instanceof A.c0){t=A.t(o,A.o(o).A("e.E"))
t=A.l(t)
s=A.t(b,A.o(b).A("e.E"))
return t===A.l(s)}if(u.L.b(b)){t=J.a1(b)
s=o.d
r=s.c
if(t.gu(b)!==r)return!1
s=s.d
q=o.c
p=s.length
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.n(b,0))return!1
if(r>1){q=o.c+1
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.n(b,1))return!1
if(r>2){q=o.c+2
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.n(b,2))return!1
if(r>3){r=o.c+3
if(!(r>=0&&r<p))return A.a(s,r)
if(s[r]!==t.n(b,3))return!1}}}return!0}return!1},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.l(t)},
$iC:1,
$iy:1,
$ip:1,
gb3(){return this.d}}
A.fu.prototype={
F(){var t=this,s=t.a
if(s.gaQ()+1>t.d){s.Z(t.b,s.gaI()+1)
return s.gaI()<=t.e}return s.F()},
gP(){return this.a},
$iC:1}
A.c1.prototype={
N(){var t=this
return new A.c1(t.a,t.b,t.c,t.d,t.e,t.f)},
gu(a){var t=this.f,s=t.f
s=s==null?null:s.b
return s==null?t.c:s},
gR(){return this.f.f},
gB(){return this.f.gB()},
gH(){return B.v},
gaQ(){return this.a},
gaI(){return this.b},
Z(a,b){var t,s,r=this
r.a=a
r.b=b
t=r.f
s=b*t.e
r.e=s
t=a*t.c
r.c=s+B.a.j(t,3)
r.d=t&7},
gP(){return this},
F(){var t,s=this,r=++s.a,q=s.f
if(r===q.a){s.a=0
r=++s.b
s.d=0;++s.c
s.e=s.e+q.e
return r<q.b}t=q.c
if(q.f!=null||t===1){if(++s.d>7){s.d=0;++s.c}}else{r*=t
s.d=r&7
s.c=s.e+B.a.j(r,3)}r=s.c
q=q.d
q===$&&A.b()
return r<q.byteLength},
dl(a){var t,s,r=this.c,q=7-(this.d+a)
if(q<0){q+=8;++r}t=this.f.d
t===$&&A.b()
s=t.length
if(r>=s)return 0
if(!(r>=0))return A.a(t,r)
return B.a.a_(t[r],q)&1},
b_(a){var t=this.f,s=t.f
if(s==null)t=t.c>a?this.dl(a):0
else t=s.aX(this.dl(0),a)
return t},
an(a,b){var t,s,r,q,p,o,n=this.f
if(a>=n.c)return
t=this.c
s=7-(this.d+a)
if(s<0){++t
s+=8}r=n.d
r===$&&A.b()
if(!(t>=0&&t<r.length))return A.a(r,t)
q=r[t]
p=B.a.I(B.b.h(b),0,1)
if(!(s>=0&&s<8))return A.a(B.bl,s)
o=B.bl[s]
r=B.a.U(p,s)
n=n.d
n.$flags&2&&A.c(n)
if(!(t<n.length))return A.a(n,t)
n[t]=(q&o|r)>>>0},
n(a,b){return this.b_(b)},
i(a,b,c){return this.an(b,c)},
gL(){return this.dl(0)},
sL(a){this.an(0,a)},
gm(){return this.b_(0)},
sm(a){this.an(0,a)},
gp(){return this.b_(1)},
sp(a){this.an(1,a)},
gq(){return this.b_(2)},
sq(a){this.an(2,a)},
gt(){return this.b_(3)},
st(a){this.an(3,a)},
ga9(){return this.b_(0)/this.f.gB()},
sa9(a){this.an(0,a*this.f.gB())},
ga5(){return this.b_(1)/this.f.gB()},
sa5(a){this.an(1,a*this.f.gB())},
ga8(){return this.b_(2)/this.f.gB()},
sa8(a){this.an(2,a*this.f.gB())},
gaa(){return this.b_(3)/this.f.gB()},
saa(a){this.an(3,a*this.f.gB())},
gah(){return A.U(this)},
ac(a){var t=this
t.an(0,a.gm())
t.an(1,a.gp())
t.an(2,a.gq())
t.an(3,a.gt())},
am(a,b,c){var t=this,s=t.f.c
if(s>0){t.an(0,a)
if(s>1){t.an(1,b)
if(s>2)t.an(2,c)}}},
a7(a,b,c,d){var t=this,s=t.f.c
if(s>0){t.an(0,a)
if(s>1){t.an(1,b)
if(s>2){t.an(2,c)
if(s>3)t.an(3,d)}}}},
gG(a){return new A.K(this)},
S(a,b){var t,s,r,q=this
if(b==null)return!1
if(b instanceof A.c1){t=A.t(q,A.o(q).A("e.E"))
t=A.l(t)
s=A.t(b,A.o(b).A("e.E"))
return t===A.l(s)}if(u.L.b(b)){t=q.f
s=t.f
r=s!=null?s.b:t.c
t=J.a1(b)
if(t.gu(b)!==r)return!1
if(q.b_(0)!==t.n(b,0))return!1
if(r>1){if(q.b_(1)!==t.n(b,1))return!1
if(r>2){if(q.b_(2)!==t.n(b,2))return!1
if(r>3)if(q.b_(3)!==t.n(b,3))return!1}}return!0}return!1},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.l(t)},
$iC:1,
$iy:1,
$ip:1,
gb3(){return this.f}}
A.c2.prototype={
N(){var t=this
return new A.c2(t.a,t.b,t.c,t.d)},
gu(a){var t=this.d,s=t.e
s=s==null?null:s.b
return s==null?t.c:s},
gR(){return this.d.e},
gB(){return this.d.gB()},
gH(){return B.l},
gaQ(){return this.a},
gaI(){return this.b},
Z(a,b){var t,s,r=this
r.a=a
r.b=b
t=r.d
s=t.c
r.c=b*t.a*s+a*s},
gP(){return this},
F(){var t,s=this,r=s.d
if(++s.a===r.a){s.a=0
if(++s.b===r.b)return!1}t=s.c
t+=r.e==null?r.c:1
s.c=t
return t<r.d.length},
bi(a){var t,s=this.d,r=s.e
if(r!=null){s=s.d
t=this.c
if(!(t>=0&&t<s.length))return A.a(s,t)
t=r.aX(s[t],a)
s=t}else if(a<s.c){s=s.d
r=this.c+a
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s},
n(a,b){return this.bi(b)},
i(a,b,c){var t,s,r=this.d
if(b<r.c){r=r.d
t=this.c+b
s=B.b.h(c)
r.$flags&2&&A.c(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gL(){return this.gm()},
sL(a){this.sm(a)},
gm(){var t,s=this.d,r=s.e
if(r==null)if(s.c>0){s=s.d
r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
else{s=s.d
t=this.c
if(!(t>=0&&t<s.length))return A.a(s,t)
t=r.aM(s[t])
s=t}return s},
sm(a){var t,s,r=this.d
if(r.c>0){r=r.d
t=this.c
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gp(){var t,s=this.d,r=s.e
if(r==null)if(s.c>1){s=s.d
r=this.c+1
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
else{s=s.d
t=this.c
if(!(t>=0&&t<s.length))return A.a(s,t)
t=r.aL(s[t])
s=t}return s},
sp(a){var t,s,r=this.d
if(r.c>1){r=r.d
t=this.c+1
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gq(){var t,s=this.d,r=s.e
if(r==null)if(s.c>2){s=s.d
r=this.c+2
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
else{s=s.d
t=this.c
if(!(t>=0&&t<s.length))return A.a(s,t)
t=r.aJ(s[t])
s=t}return s},
sq(a){var t,s,r=this.d
if(r.c>2){r=r.d
t=this.c+2
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gt(){var t,s=this.d,r=s.e
if(r==null)if(s.c>3){s=s.d
r=this.c+3
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
else{s=s.d
t=this.c
if(!(t>=0&&t<s.length))return A.a(s,t)
t=r.aR(s[t])
s=t}return s},
st(a){var t,s,r=this.d
if(r.c>3){r=r.d
t=this.c+3
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
ga9(){return this.gm()/this.d.gB()},
sa9(a){this.sm(a*this.d.gB())},
ga5(){return this.gp()/this.d.gB()},
sa5(a){this.sp(a*this.d.gB())},
ga8(){return this.gq()/this.d.gB()},
sa8(a){this.sq(a*this.d.gB())},
gaa(){return this.gt()/this.d.gB()},
saa(a){this.st(a*this.d.gB())},
gah(){return A.U(this)},
ac(a){var t=this
t.sm(a.gm())
t.sp(a.gp())
t.sq(a.gq())
t.st(a.gt())},
am(a,b,c){var t,s,r,q,p=this.d,o=p.c
if(o>0){p=p.d
t=this.c
s=B.a.h(a)
p.$flags&2&&A.c(p)
r=p.length
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>1){s=t+1
q=B.a.h(b)
if(!(s<r))return A.a(p,s)
p[s]=q
if(o>2){o=t+2
t=B.a.h(c)
if(!(o<r))return A.a(p,o)
p[o]=t}}}},
a7(a,b,c,d){var t,s,r,q,p=this.d,o=p.c
if(o>0){p=p.d
t=this.c
s=B.a.h(a)
p.$flags&2&&A.c(p)
r=p.length
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>1){s=t+1
q=B.a.h(b)
if(!(s<r))return A.a(p,s)
p[s]=q
if(o>2){s=t+2
q=B.a.h(c)
if(!(s<r))return A.a(p,s)
p[s]=q
if(o>3){o=t+3
t=B.a.h(d)
if(!(o<r))return A.a(p,o)
p[o]=t}}}}},
gG(a){return new A.K(this)},
S(a,b){var t,s,r,q=this
if(b==null)return!1
if(b instanceof A.c2){t=A.t(q,A.o(q).A("e.E"))
t=A.l(t)
s=A.t(b,A.o(b).A("e.E"))
return t===A.l(s)}if(u.L.b(b)){t=q.d
s=t.e
r=s!=null?s.b:t.c
t=J.a1(b)
if(t.gu(b)!==r)return!1
if(q.bi(0)!==t.n(b,0))return!1
if(r>1){if(q.bi(1)!==t.n(b,1))return!1
if(r>2){if(q.bi(2)!==t.n(b,2))return!1
if(r>3)if(q.bi(3)!==t.n(b,3))return!1}}return!0}return!1},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.l(t)},
$iC:1,
$iy:1,
$ip:1,
gb3(){return this.d}}
A.c3.prototype={
N(){var t=this
return new A.c3(t.a,t.b,t.c,t.d,t.e,t.f)},
gu(a){var t=this.f,s=t.f
s=s==null?null:s.b
return s==null?t.c:s},
gR(){return this.f.f},
gB(){return this.f.gB()},
gH(){return B.x},
geU(){var t=this.f
return t.f!=null?2:t.c<<1>>>0},
gaQ(){return this.a},
gaI(){return this.b},
Z(a,b){var t,s,r,q=this
q.a=a
q.b=b
t=q.geU()
s=b*q.f.e
q.e=s
r=a*t
q.c=s+B.a.j(r,3)
q.d=r&7},
gP(){return this},
F(){var t=this,s=++t.a,r=t.f
if(s===r.a){t.a=0
s=++t.b
t.d=0;++t.c
t.e=t.e+r.e
return s<r.b}if(r.f!=null||r.c===1){if((t.d+=2)>7){t.d=0;++t.c}}else{s*=t.geU()
t.d=s&7
t.c=t.e+B.a.j(s,3)}s=t.c
r=r.d
r===$&&A.b()
return s<r.length},
dm(a){var t,s=this.c,r=6-(this.d+(a<<1>>>0))
if(r<0){r+=8;++s}t=this.f.d
t===$&&A.b()
if(!(s>=0&&s<t.length))return A.a(t,s)
return B.a.a_(t[s],r)&3},
b0(a){var t=this.f,s=t.f
if(s==null)t=t.c>a?this.dm(a):0
else t=s.aX(this.dm(0),a)
return t},
ao(a,b){var t,s,r,q,p,o,n=this.f
if(a>=n.c)return
t=this.c
s=6-(this.d+(a<<1>>>0))
if(s<0){++t
s+=8}r=n.d
r===$&&A.b()
if(!(t>=0&&t<r.length))return A.a(r,t)
q=r[t]
p=B.a.I(B.b.h(b),0,3)
r=B.a.j(s,1)
if(!(r<4))return A.a(B.b7,r)
o=B.b7[r]
r=B.a.U(p,s)
n=n.d
n.$flags&2&&A.c(n)
if(!(t<n.length))return A.a(n,t)
n[t]=(q&o|r)>>>0},
n(a,b){return this.b0(b)},
i(a,b,c){return this.ao(b,c)},
gL(){return this.dm(0)},
sL(a){this.ao(0,a)},
gm(){return this.b0(0)},
sm(a){this.ao(0,a)},
gp(){return this.b0(1)},
sp(a){this.ao(1,a)},
gq(){return this.b0(2)},
sq(a){this.ao(2,a)},
gt(){return this.b0(3)},
st(a){this.ao(3,a)},
ga9(){return this.b0(0)/this.f.gB()},
sa9(a){this.ao(0,a*this.f.gB())},
ga5(){return this.b0(1)/this.f.gB()},
sa5(a){this.ao(1,a*this.f.gB())},
ga8(){return this.b0(2)/this.f.gB()},
sa8(a){this.ao(2,a*this.f.gB())},
gaa(){return this.b0(3)/this.f.gB()},
saa(a){this.ao(3,a*this.f.gB())},
gah(){return A.U(this)},
ac(a){var t=this
t.ao(0,a.gm())
t.ao(1,a.gp())
t.ao(2,a.gq())
t.ao(3,a.gt())},
am(a,b,c){var t=this,s=t.f.c
if(s>0){t.ao(0,a)
if(s>1){t.ao(1,b)
if(s>2)t.ao(2,c)}}},
a7(a,b,c,d){var t=this,s=t.f.c
if(s>0){t.ao(0,a)
if(s>1){t.ao(1,b)
if(s>2){t.ao(2,c)
if(s>3)t.ao(3,d)}}}},
gG(a){return new A.K(this)},
S(a,b){var t,s,r,q=this
if(b==null)return!1
if(b instanceof A.c3){t=A.t(q,A.o(q).A("e.E"))
t=A.l(t)
s=A.t(b,A.o(b).A("e.E"))
return t===A.l(s)}if(u.L.b(b)){t=q.f
s=t.f
r=s!=null?s.b:t.c
t=J.a1(b)
if(t.gu(b)!==r)return!1
if(q.b0(0)!==t.n(b,0))return!1
if(r>1){if(q.b0(1)!==t.n(b,1))return!1
if(r>2){if(q.b0(2)!==t.n(b,2))return!1
if(r>3)if(q.b0(3)!==t.n(b,3))return!1}}return!0}return!1},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.l(t)},
$iC:1,
$iy:1,
$ip:1,
gb3(){return this.f}}
A.c4.prototype={
N(){var t=this
return new A.c4(t.a,t.b,t.c,t.d)},
gu(a){return this.d.c},
gR(){return null},
gB(){return 4294967295},
gH(){return B.H},
gaQ(){return this.a},
gaI(){return this.b},
Z(a,b){var t,s,r=this
r.a=a
r.b=b
t=r.d
s=t.c
r.c=b*t.a*s+a*s},
gP(){return this},
F(){var t,s=this,r=s.d
if(++s.a===r.a){s.a=0
if(++s.b===r.b)return!1}t=s.c+r.c
s.c=t
return t<r.d.length},
n(a,b){var t,s=this.d
if(b<s.c){s=s.d
t=this.c+b
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
i(a,b,c){var t,s,r=this.d
if(b<r.c){r=r.d
t=this.c+b
s=B.b.h(c)
r.$flags&2&&A.c(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gL(){return this.gm()},
sL(a){this.sm(a)},
gm(){var t,s=this.d
if(s.c>0){s=s.d
t=this.c
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sm(a){var t,s,r=this.d
if(r.c>0){r=r.d
t=this.c
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gp(){var t,s=this.d
if(s.c>1){s=s.d
t=this.c+1
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sp(a){var t,s,r=this.d
if(r.c>1){r=r.d
t=this.c+1
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gq(){var t,s=this.d
if(s.c>2){s=s.d
t=this.c+2
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sq(a){var t,s,r=this.d
if(r.c>2){r=r.d
t=this.c+2
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gt(){var t,s=this.d
if(s.c>3){s=s.d
t=this.c+3
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
st(a){var t,s,r=this.d
if(r.c>3){r=r.d
t=this.c+3
s=B.b.h(a)
r.$flags&2&&A.c(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
ga9(){return this.gm()/4294967295},
sa9(a){this.sm(a*4294967295)},
ga5(){return this.gp()/4294967295},
sa5(a){this.sp(a*4294967295)},
ga8(){return this.gq()/4294967295},
sa8(a){this.sq(a*4294967295)},
gaa(){return this.gt()/4294967295},
saa(a){this.st(a*4294967295)},
gah(){return A.U(this)},
ac(a){var t=this
t.sm(a.gm())
t.sp(a.gp())
t.sq(a.gq())
t.st(a.gt())},
am(a,b,c){var t,s,r,q,p=this.d,o=p.c
if(o>0){p=p.d
t=this.c
s=B.a.h(a)
p.$flags&2&&A.c(p)
r=p.length
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>1){s=t+1
q=B.a.h(b)
if(!(s<r))return A.a(p,s)
p[s]=q
if(o>2){o=t+2
t=B.a.h(c)
if(!(o<r))return A.a(p,o)
p[o]=t}}}},
a7(a,b,c,d){var t,s,r,q,p=this.d,o=p.c
if(o>0){p=p.d
t=this.c
s=B.a.h(a)
p.$flags&2&&A.c(p)
r=p.length
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>1){s=t+1
q=B.a.h(b)
if(!(s<r))return A.a(p,s)
p[s]=q
if(o>2){s=t+2
q=B.a.h(c)
if(!(s<r))return A.a(p,s)
p[s]=q
if(o>3){o=t+3
t=B.a.h(d)
if(!(o<r))return A.a(p,o)
p[o]=t}}}}},
gG(a){return new A.K(this)},
S(a,b){var t,s,r,q,p,o=this
if(b==null)return!1
if(b instanceof A.c4){t=A.t(o,A.o(o).A("e.E"))
t=A.l(t)
s=A.t(b,A.o(b).A("e.E"))
return t===A.l(s)}if(u.L.b(b)){t=J.a1(b)
s=o.d
r=s.c
if(t.gu(b)!==r)return!1
s=s.d
q=o.c
p=s.length
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.n(b,0))return!1
if(r>1){q=o.c+1
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.n(b,1))return!1
if(r>2){q=o.c+2
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.n(b,2))return!1
if(r>3){r=o.c+3
if(!(r>=0&&r<p))return A.a(s,r)
if(s[r]!==t.n(b,3))return!1}}}return!0}return!1},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.l(t)},
$iC:1,
$iy:1,
$ip:1,
gb3(){return this.d}}
A.c5.prototype={
N(){var t=this
return new A.c5(t.a,t.b,t.c,t.d,t.e)},
gu(a){var t=this.e,s=t.f
s=s==null?null:s.b
return s==null?t.c:s},
gR(){return this.e.f},
gB(){return this.e.gB()},
gH(){return B.y},
gaQ(){return this.a},
gaI(){return this.b},
Z(a,b){var t,s,r,q=this
q.a=a
q.b=b
t=q.e
s=t.c*4
r=t.e
if(s===4)t=b*r+B.a.j(a,1)
else if(s===8)t=b*t.a+a
else{t=b*r
t=s===16?t+(a<<1>>>0):t+B.a.j(a*s,3)}q.c=t
t=a*s
q.d=s>7?t&4:t&7},
gP(){return this},
F(){var t,s,r,q=this,p=q.e
if(++q.a===p.a){q.a=0
t=++q.b
q.d=0
q.c=t*p.e
return t<p.b}s=p.c
t=p.f!=null||s===1
r=q.d
if(t){t=r+4
q.d=t
if(t>7){q.d=0;++q.c}}else{t=q.d=r+(s<<2>>>0)
while(t>7){t-=8
q.d=t;++q.c}}t=q.c
p=p.d
p===$&&A.b()
return t<p.length},
df(a){var t,s=this.c,r=4-(this.d+(a<<2>>>0))
if(r<0){r+=8;++s}t=this.e.d
t===$&&A.b()
if(!(s>=0&&s<t.length))return A.a(t,s)
return B.a.a_(t[s],r)&15},
aZ(a){var t=this.e,s=t.f
if(s==null)t=t.c>a?this.df(a):0
else t=s.aX(this.df(0),a)
return t},
ap(a,b){var t,s,r,q,p,o,n=this.e
if(a>=n.c)return
t=this.c
s=4-(this.d+(a<<2>>>0))
if(s<0){s+=8;++t}r=n.d
r===$&&A.b()
if(!(t>=0&&t<r.length))return A.a(r,t)
q=r[t]
p=B.a.I(B.b.h(b),0,15)
o=s===4?15:240
r=B.a.U(p,s)
n=n.d
n.$flags&2&&A.c(n)
if(!(t<n.length))return A.a(n,t)
n[t]=(q&o|r)>>>0},
n(a,b){return this.aZ(b)},
i(a,b,c){return this.ap(b,c)},
gL(){return this.df(0)},
sL(a){this.ap(0,a)},
gm(){return this.aZ(0)},
sm(a){this.ap(0,a)},
gp(){return this.aZ(1)},
sp(a){this.ap(1,a)},
gq(){return this.aZ(2)},
sq(a){this.ap(2,a)},
gt(){return this.aZ(3)},
st(a){this.ap(3,a)},
ga9(){return this.aZ(0)/this.e.gB()},
sa9(a){this.ap(0,a*this.e.gB())},
ga5(){return this.aZ(1)/this.e.gB()},
sa5(a){this.ap(1,a*this.e.gB())},
ga8(){return this.aZ(2)/this.e.gB()},
sa8(a){this.ap(2,a*this.e.gB())},
gaa(){return this.aZ(3)/this.e.gB()},
saa(a){this.ap(3,a*this.e.gB())},
gah(){return A.U(this)},
ac(a){var t=this
t.ap(0,a.gm())
t.ap(1,a.gp())
t.ap(2,a.gq())
t.ap(3,a.gt())},
am(a,b,c){var t=this,s=t.e.c
if(s>0){t.ap(0,a)
if(s>1){t.ap(1,b)
if(s>2)t.ap(2,c)}}},
a7(a,b,c,d){var t=this,s=t.e.c
if(s>0){t.ap(0,a)
if(s>1){t.ap(1,b)
if(s>2){t.ap(2,c)
if(s>3)t.ap(3,d)}}}},
gG(a){return new A.K(this)},
S(a,b){var t,s,r,q=this
if(b==null)return!1
if(b instanceof A.c5){t=A.t(q,A.o(q).A("e.E"))
t=A.l(t)
s=A.t(b,A.o(b).A("e.E"))
return t===A.l(s)}if(u.L.b(b)){r=q.e.c
t=J.a1(b)
if(t.gu(b)!==r)return!1
if(q.aZ(0)!==t.n(b,0))return!1
if(r>1){if(q.aZ(1)!==t.n(b,1))return!1
if(r>2){if(q.aZ(2)!==t.n(b,2))return!1
if(r>3)if(q.aZ(3)!==t.n(b,3))return!1}}return!0}return!1},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.l(t)},
$iC:1,
$iy:1,
$ip:1,
gb3(){return this.e}}
A.c6.prototype={
N(){var t=this
return new A.c6(t.a,t.b,t.c,t.d)},
gu(a){var t=this.d,s=t.e
s=s==null?null:s.b
return s==null?t.c:s},
gR(){return this.d.e},
gB(){return this.d.gB()},
gH(){return B.f},
gaQ(){return this.a},
gaI(){return this.b},
Z(a,b){var t,s,r=this
r.a=a
r.b=b
t=r.d
s=t.c
r.c=b*t.a*s+a*s},
gP(){return this},
F(){var t,s=this,r=s.d
if(++s.a===r.a){s.a=0
if(++s.b===r.b)return!1}t=s.c
t+=r.e==null?r.c:1
s.c=t
return t<r.d.length},
bi(a){var t,s=this.d,r=s.e
if(r!=null){s=s.d
t=this.c
if(!(t>=0&&t<s.length))return A.a(s,t)
t=r.aX(s[t],a)
s=t}else if(a<s.c){s=s.d
r=this.c+a
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s},
n(a,b){return this.bi(b)},
i(a,b,c){var t,s,r=this.d
if(b<r.c){r=r.d
t=this.c+b
s=B.b.h(B.b.I(c,0,255))
r.$flags&2&&A.c(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gL(){var t=this.d.d,s=this.c
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
sL(a){var t=this.d.d,s=this.c,r=B.b.h(B.b.I(a,0,255))
t.$flags&2&&A.c(t)
if(!(s>=0&&s<t.length))return A.a(t,s)
t[s]=r},
gm(){var t,s=this.d,r=s.e
if(r==null)if(s.c>0){s=s.d
r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
else{s=s.d
t=this.c
if(!(t>=0&&t<s.length))return A.a(s,t)
t=r.aM(s[t])
s=t}return s},
sm(a){var t,s,r=this.d
if(r.c>0){r=r.d
t=this.c
s=B.b.h(B.b.I(a,0,255))
r.$flags&2&&A.c(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gp(){var t,s=this,r=s.d,q=r.e
if(q==null){q=r.c
if(q===2){r=r.d
q=s.c
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else if(q>1){r=r.d
q=s.c+1
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0}else{r=r.d
t=s.c
if(!(t>=0&&t<r.length))return A.a(r,t)
t=q.aL(r[t])
r=t}return r},
sp(a){var t,s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
t=B.b.h(B.b.I(a,0,255))
s.$flags&2&&A.c(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=t}else if(r>1){s=s.d
r=this.c+1
t=B.b.h(B.b.I(a,0,255))
s.$flags&2&&A.c(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=t}},
gq(){var t,s=this,r=s.d,q=r.e
if(q==null){q=r.c
if(q===2){r=r.d
q=s.c
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else if(q>2){r=r.d
q=s.c+2
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0}else{r=r.d
t=s.c
if(!(t>=0&&t<r.length))return A.a(r,t)
t=q.aJ(r[t])
r=t}return r},
sq(a){var t,s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
t=B.b.h(B.b.I(a,0,255))
s.$flags&2&&A.c(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=t}else if(r>2){s=s.d
r=this.c+2
t=B.b.h(B.b.I(a,0,255))
s.$flags&2&&A.c(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=t}},
gt(){var t,s=this,r=s.d,q=r.e
if(q==null){q=r.c
if(q===2){r=r.d
q=s.c+1
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else if(q>3){r=r.d
q=s.c+3
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=255}else{r=r.d
t=s.c
if(!(t>=0&&t<r.length))return A.a(r,t)
t=q.aR(r[t])
r=t}return r},
st(a){var t,s=this.d,r=s.c
if(r===2){s=s.d
r=this.c+1
t=B.b.h(B.b.I(a,0,255))
s.$flags&2&&A.c(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=t}else if(r>3){s=s.d
r=this.c+3
t=B.b.h(B.b.I(a,0,255))
s.$flags&2&&A.c(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=t}},
ga9(){return this.gm()/this.d.gB()},
sa9(a){this.sm(a*this.d.gB())},
ga5(){return this.gp()/this.d.gB()},
sa5(a){this.sp(a*this.d.gB())},
ga8(){return this.gq()/this.d.gB()},
sa8(a){this.sq(a*this.d.gB())},
gaa(){return this.gt()/this.d.gB()},
saa(a){this.st(a*this.d.gB())},
gah(){return this.d.c===2?this.gm():A.U(this)},
ac(a){var t=this
if(t.d.e!=null)t.sL(a.gL())
else{t.sm(a.gm())
t.sp(a.gp())
t.sq(a.gq())
t.st(a.gt())}},
am(a,b,c){var t,s,r,q,p=this.d,o=p.c
if(o>0){p=p.d
t=this.c
s=B.a.h(a)
p.$flags&2&&A.c(p)
r=p.length
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>1){s=t+1
q=B.a.h(b)
if(!(s<r))return A.a(p,s)
p[s]=q
if(o>2){o=t+2
t=B.a.h(c)
if(!(o<r))return A.a(p,o)
p[o]=t}}}},
a7(a,b,c,d){var t,s,r,q,p=this.d,o=p.c
if(o>0){p=p.d
t=this.c
s=B.a.h(a)
p.$flags&2&&A.c(p)
r=p.length
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>1){s=t+1
q=B.a.h(b)
if(!(s<r))return A.a(p,s)
p[s]=q
if(o>2){s=t+2
q=B.a.h(c)
if(!(s<r))return A.a(p,s)
p[s]=q
if(o>3){o=t+3
t=B.a.h(d)
if(!(o<r))return A.a(p,o)
p[o]=t}}}}},
gG(a){return new A.K(this)},
S(a,b){var t,s,r,q=this
if(b==null)return!1
if(b instanceof A.c6){t=A.t(q,A.o(q).A("e.E"))
t=A.l(t)
s=A.t(b,A.o(b).A("e.E"))
return t===A.l(s)}if(u.L.b(b)){t=q.d
s=t.e
r=s!=null?s.b:t.c
t=J.a1(b)
if(t.gu(b)!==r)return!1
if(q.bi(0)!==t.n(b,0))return!1
if(r>1){if(q.bi(1)!==t.n(b,1))return!1
if(r>2){if(q.bi(2)!==t.n(b,2))return!1
if(r>3)if(q.bi(3)!==t.n(b,3))return!1}}return!0}return!1},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.l(t)},
$iC:1,
$iy:1,
$ip:1,
gb3(){return this.d}}
A.A.prototype={
N(){return new A.A()},
gb3(){return $.lD()},
gaQ(){return 0},
gaI(){return 0},
gu(a){return 0},
gB(){return 0},
gH(){return B.f},
gR(){return null},
n(a,b){return 0},
i(a,b,c){},
gL(){return 0},
sL(a){},
gm(){return 0},
sm(a){},
gp(){return 0},
sp(a){},
gq(){return 0},
sq(a){},
gt(){return 0},
st(a){},
ga9(){return 0},
sa9(a){},
ga5(){return 0},
sa5(a){},
ga8(){return 0},
sa8(a){},
gaa(){return 0},
saa(a){},
gah(){return 0},
ac(a){},
am(a,b,c){},
a7(a,b,c,d){},
Z(a,b){},
gP(){return this},
F(){return!1},
S(a,b){if(b==null)return!1
return b instanceof A.A},
gE(a){return 0},
gG(a){return new A.K(this)},
$iC:1,
$iy:1,
$ip:1}
A.hk.prototype={
ad(){return"FlipDirection."+this.b}}
A.hu.prototype={
C(a){return"ImageException: "+this.a}}
A.a6.prototype={
gu(a){return this.c-this.d},
i(a,b,c){J.x(this.a,this.d+b,c)
return c},
bd(a,b,c,d){var t=this.a,s=J.ax(t),r=this.d+a
if(c instanceof A.a6)s.ai(t,r,r+b,c.a,c.d+d)
else s.ai(t,r,r+b,u.L.a(c),d)},
bI(a,b,c){return this.bd(a,b,c,0)},
jq(a,b,c){var t=this.a,s=this.d+a
J.aW(t,s,s+b,c)},
d2(a,b,c){var t=this,s=c!=null?t.b+c:t.d
return A.q(t.a,t.e,a,s+b)},
aj(a){return this.d2(a,0,null)},
bK(a,b){return this.d2(a,0,b)},
cC(a,b){return this.d2(a,b,null)},
D(){return J.d(this.a,this.d++)},
ab(a){var t=this.aj(a)
this.d=this.d+(t.c-t.d)
return t},
af(a){var t,s,r,q,p,o=this
if(a==null){t=A.k([],u.t)
for(s=o.c;r=o.d,r<s;){q=o.a
o.d=r+1
p=J.d(q,r)
if(p===0)return A.e6(t,0,null)
B.c.M(t,p)}throw A.f(A.m("EOF reached without finding string terminator (length: "+A.z(a)+")"))}return A.e6(o.ab(a).a0(),0,null)},
cq(){return this.af(null)},
f5(a){var t,s,r,q,p=this,o=A.k([],u.t)
for(t=p.c;s=p.d,s<t;){r=p.a
p.d=s+1
q=J.d(r,s)
B.c.M(o,q)
if(q===10||o.length>=a)return A.e6(o,0,null)}return A.e6(o,0,null)},
jx(){return this.f5(256)},
jy(){var t,s,r,q,p=this,o=A.k([],u.t)
for(t=p.c;s=p.d,s<t;){r=p.a
p.d=s+1
q=J.d(r,s)
if(q===0){u.L.a(o)
return new A.h1(!0).dW(o,0,null,!0)}B.c.M(o,q)}return B.cq.j4(o,!0)},
l(){var t=this,s=J.d(t.a,t.d++)&255,r=J.d(t.a,t.d++)&255
if(t.e)return s<<8|r
return r<<8|s},
bf(){var t=this,s=J.d(t.a,t.d++)&255,r=J.d(t.a,t.d++)&255,q=J.d(t.a,t.d++)&255
if(t.e)return q|r<<8|s<<16
return s|r<<8|q<<16},
k(){var t=this,s=J.d(t.a,t.d++)&255,r=J.d(t.a,t.d++)&255,q=J.d(t.a,t.d++)&255,p=J.d(t.a,t.d++)&255
if(t.e)return(s<<24|r<<16|q<<8|p)>>>0
return(p<<24|q<<16|r<<8|s)>>>0},
cZ(){return A.pb(this.dB())},
dB(){var t=this,s=J.d(t.a,t.d++)&255,r=J.d(t.a,t.d++)&255,q=J.d(t.a,t.d++)&255,p=J.d(t.a,t.d++)&255,o=J.d(t.a,t.d++)&255,n=J.d(t.a,t.d++)&255,m=J.d(t.a,t.d++)&255,l=J.d(t.a,t.d++)&255
if(t.e)return(B.a.J(s,56)|B.a.J(r,48)|B.a.J(q,40)|B.a.J(p,32)|o<<24|n<<16|m<<8|l)>>>0
return(B.a.J(l,56)|B.a.J(m,48)|B.a.J(n,40)|B.a.J(o,32)|p<<24|q<<16|r<<8|s)>>>0},
cr(a,b,c){var t,s=this,r=s.a
if(u.D.b(r))return s.f9(b,c)
t=s.b+s.d+b
return J.j4(r,t,c<=0?s.c:t+c)},
f9(a,b){var t,s=this,r=b==null?s.c-s.d-a:b,q=s.a
if(u.D.b(q))return J.M(B.e.gv(q),q.byteOffset+s.d+a,r)
t=s.d+a
t=J.j4(q,t,t+r)
return new Uint8Array(A.w(t))},
a0(){return this.f9(0,null)},
cs(){var t=this.a
if(u.D.b(t))return J.al(B.e.gv(t),t.byteOffset+this.d,null)
return J.al(B.e.gv(this.a0()),0,null)},
sv(a,b){this.a=u.L.a(b)}}
A.fq.prototype={
iY(a){var t=this
t.ej(a)
t.e5()
t.ei()
t.dX()},
hZ(a){var t,s,r,q,p,o,n,m=this,l=m.c=Math.max(a,4)
m.f=l-m.d
m.r=l-1
t=B.b.W(l,8)
m.w=t
m.x=t*256
m.Q=new A.cP(new Uint32Array(1024),256,4)
m.a=new A.az(new Uint8Array(768),256,3)
m.d=3
m.e=2
t=B.b.j(l,3)
m.y=new Int32Array(t)
t=u.i
s=u.dg
m.z=s.a(A.Y(l*3,0,!1,t))
m.at=s.a(A.Y(m.c,0,!1,t))
m.ax=s.a(A.Y(m.c,0,!1,t))
B.c.i(m.z,0,0)
B.c.i(m.z,1,0)
B.c.i(m.z,2,0)
B.c.i(m.z,3,255)
B.c.i(m.z,4,255)
B.c.i(m.z,5,255)
r=1/m.c
for(q=0;p=m.d,q<p;++q){B.c.i(m.ax,q,r)
B.c.i(m.at,q,0)}for(o=p*3,q=p;q<m.c;++q,o=n){n=o+1
B.c.i(m.z,o,255*(q-m.d)/m.f)
o=n+1
B.c.i(m.z,n,255*(q-m.d)/m.f)
n=o+1
B.c.i(m.z,o,255*(q-m.d)/m.f)
B.c.i(m.ax,q,r)
B.c.i(m.at,q,0)}},
dX(){var t,s,r,q,p,o,n
for(t=0;t<this.c;++t){s=this.a
s===$&&A.b()
r=this.Q
r===$&&A.b()
q=r.b
if(2<q){p=r.c
o=t*q+2
if(!(o>=0&&o<p.length))return A.a(p,o)
o=p[o]
p=o}else p=0
if(1<q){o=r.c
n=t*q+1
if(!(n>=0&&n<o.length))return A.a(o,n)
n=o[n]
o=n}else o=0
if(0<q){r=r.c
q=t*q
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0
s.aY(t,Math.abs(p),Math.abs(o),Math.abs(r))}},
i0(a,b,c){var t,s,r,q,p,o,n,m,l,k,j=this.as
if(!(b>=0&&b<256))return A.a(j,b)
t=j[b]
s=t-1
r=this.c
j=this.Q
q=1000
p=-1
for(;;){o=t<r
if(!(o||s>=0))break
if(o){j===$&&A.b()
o=j.b
if(1<o){n=j.c
m=t*o+1
if(!(m>=0&&m<n.length))return A.a(n,m)
m=n[m]
n=m}else n=0
l=n-b
if(l>=q)t=r
else{if(l<0)l=-l
if(0<o){n=j.c
m=t*o
if(!(m>=0&&m<n.length))return A.a(n,m)
m=n[m]
n=m}else n=0
k=n-a
l+=k<0?-k:k
if(l<q){if(2<o){n=j.c
o=t*o+2
if(!(o>=0&&o<n.length))return A.a(n,o)
o=n[o]}else o=0
k=o-c
l+=k<0?-k:k
if(l<q){p=t
q=l}}++t}}if(s>=0){j===$&&A.b()
o=j.b
if(1<o){n=j.c
m=s*o+1
if(!(m>=0&&m<n.length))return A.a(n,m)
m=n[m]
n=m}else n=0
l=b-n
if(l>=q)s=-1
else{if(l<0)l=-l
if(0<o){n=j.c
m=s*o
if(!(m>=0&&m<n.length))return A.a(n,m)
m=n[m]
n=m}else n=0
k=n-a
l+=k<0?-k:k
if(l<q){if(2<o){n=j.c
o=s*o+2
if(!(o>=0&&o<n.length))return A.a(n,o)
o=n[o]}else o=0
k=o-c
l+=k<0?-k:k
if(l<q){p=s
q=l}}--s}}}return p},
e5(){var t,s,r,q,p,o,n,m=this
for(t=0,s=0;t<m.c;++t){for(r=0;r<3;++r,++s){q=m.z
q===$&&A.b()
if(!(s>=0&&s<q.length))return A.a(q,s)
p=B.a.I(B.b.h(0.5+q[s]),0,255)
q=m.Q
q===$&&A.b()
o=q.b
if(r<o){q=q.c
o=t*o+r
n=B.a.h(p)
q.$flags&2&&A.c(q)
if(!(o>=0&&o<q.length))return A.a(q,o)
q[o]=n}}q=m.Q
q===$&&A.b()
o=q.b
if(3<o){q=q.c
o=t*o+3
n=B.a.h(t)
q.$flags&2&&A.c(q)
if(!(o>=0&&o<q.length))return A.a(q,o)
q[o]=n}}},
ei(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
for(t=c.c,s=c.Q,r=c.as,q=r.$flags|0,p=0,o=0,n=0;n<t;n=h){s===$&&A.b()
m=s.b
l=1<m
if(l){k=s.c
j=n*m+1
if(!(j>=0&&j<k.length))return A.a(k,j)
i=k[j]}else i=0
for(h=n+1,g=h,f=n;g<t;++g){if(l){k=s.c
j=g*m+1
if(!(j>=0&&j<k.length))return A.a(k,j)
j=k[j]
k=j}else k=0
if(k<i){if(l){k=s.c
j=g*m+1
if(!(j>=0&&j<k.length))return A.a(k,j)
i=k[j]}else i=0
f=g}}if(n!==f){k=0<m
if(k){j=s.c
e=f*m
if(!(e>=0&&e<j.length))return A.a(j,e)
g=j[e]}else g=0
if(k){j=s.c
e=n*m
if(!(e>=0&&e<j.length))return A.a(j,e)
e=j[e]
j=e}else j=0
if(k){d=f*m
e=s.c
j=B.a.h(j)
e.$flags&2&&A.c(e)
if(!(d>=0&&d<e.length))return A.a(e,d)
e[d]=j}if(k){d=n*m
k=s.c
j=B.a.h(g)
k.$flags&2&&A.c(k)
if(!(d>=0&&d<k.length))return A.a(k,d)
k[d]=j}if(l){k=s.c
j=f*m+1
if(!(j>=0&&j<k.length))return A.a(k,j)
g=k[j]}else g=0
if(l){k=s.c
j=n*m+1
if(!(j>=0&&j<k.length))return A.a(k,j)
j=k[j]
k=j}else k=0
if(l){j=s.c
e=f*m+1
k=B.a.h(k)
j.$flags&2&&A.c(j)
if(!(e>=0&&e<j.length))return A.a(j,e)
j[e]=k}if(l){l=s.c
k=n*m+1
j=B.a.h(g)
l.$flags&2&&A.c(l)
if(!(k>=0&&k<l.length))return A.a(l,k)
l[k]=j}l=2<m
if(l){k=s.c
j=f*m+2
if(!(j>=0&&j<k.length))return A.a(k,j)
g=k[j]}else g=0
if(l){k=s.c
j=n*m+2
if(!(j>=0&&j<k.length))return A.a(k,j)
j=k[j]
k=j}else k=0
if(l){j=s.c
e=f*m+2
k=B.a.h(k)
j.$flags&2&&A.c(j)
if(!(e>=0&&e<j.length))return A.a(j,e)
j[e]=k}if(l){l=s.c
k=n*m+2
j=B.a.h(g)
l.$flags&2&&A.c(l)
if(!(k>=0&&k<l.length))return A.a(l,k)
l[k]=j}l=3<m
if(l){k=s.c
j=f*m+3
if(!(j>=0&&j<k.length))return A.a(k,j)
g=k[j]}else g=0
if(l){k=s.c
j=n*m+3
if(!(j>=0&&j<k.length))return A.a(k,j)
j=k[j]
k=j}else k=0
if(l){j=s.c
e=f*m+3
k=B.a.h(k)
j.$flags&2&&A.c(j)
if(!(e>=0&&e<j.length))return A.a(j,e)
j[e]=k}if(l){l=s.c
m=n*m+3
k=B.a.h(g)
l.$flags&2&&A.c(l)
if(!(m>=0&&m<l.length))return A.a(l,m)
l[m]=k}}if(i!==p){q&2&&A.c(r)
if(!(p>=0&&p<256))return A.a(r,p)
r[p]=o+n>>>1
for(g=p+1;g<i;++g){if(!(g<256))return A.a(r,g)
r[g]=n}o=n
p=i}}t=c.r
t.toString
s=B.a.j(o+t,1)
q&2&&A.c(r)
if(!(p>=0&&p<256))return A.a(r,p)
r[p]=s
for(h=p+1;h<256;++h)r[h]=t},
eH(a,b){var t,s,r,q
for(t=this.y,s=a*a,r=0;r<a;++r){t===$&&A.b()
q=B.b.h(b*((s-r*r)*256/s))
t.$flags&2&&A.c(t)
if(!(r<t.length))return A.a(t,r)
t[r]=q}},
ej(a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a2.x
a3===$&&A.b()
t=a2.b
s=30+B.a.W(t-1,3)
r=a4.gX()*a4.gK()
q=B.a.av(r,t)
p=Math.max(B.a.W(q,100),1)
if(p===0)p=1
o=B.a.j(a3,8)
if(o<=1)o=0
a2.eH(o,1024)
if(r<1509)n=a2.b=1
else if(B.a.a1(r,499)!==0)n=499
else if(B.a.a1(r,491)!==0)n=491
else n=B.a.a1(r,487)!==0?487:503
m=a4.gX()
l=a4.gK()
for(k=a3,j=1024,i=0,h=0,g=0,f=0;f<q;){a3=a4.a
e=a3==null?null:a3.O(h,g,null)
if(e==null)e=new A.A()
d=e.gm()
c=e.gp()
b=e.gq()
if(f===0){a3=a2.z
a3===$&&A.b()
t=a2.e
t===$&&A.b()
B.c.i(a3,t*3,b)
B.c.i(a2.z,a2.e*3+1,c)
B.c.i(a2.z,a2.e*3+2,d)}a=a2.iT(b,c,d)
if(a<0)a=a2.h2(b,c,d)
if(a>=a2.d){a0=j/1024
e=a*3
a3=a2.z
a3===$&&A.b()
if(!(e>=0&&e<a3.length))return A.a(a3,e)
t=a3[e]
B.c.i(a3,e,t-a0*(t-b))
t=a2.z
a3=e+1
if(!(a3<t.length))return A.a(t,a3)
a1=t[a3]
B.c.i(t,a3,a1-a0*(a1-c))
a1=a2.z
a3=e+2
if(!(a3<a1.length))return A.a(a1,a3)
t=a1[a3]
B.c.i(a1,a3,t-a0*(t-d))
if(o>0)a2.fR(a0,o,a,b,c,d)}i+=n
h+=n
while(h>m){h-=m;++g}while(i>=r){i-=r
g-=l}++f
if(B.a.a1(f,p)===0){j-=B.a.av(j,s)
k-=B.a.W(k,30)
o=B.a.j(k,8)
if(o<=1)o=0
a2.eH(o,j)}}},
fR(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i=this,h=c-b,g=i.d-1
if(h<g)h=g
t=c+b
s=i.c
if(t>s)t=s
r=c+1
q=c-1
p=1
for(;;){o=r<t
if(!(o||q>h))break
n=i.y
n===$&&A.b()
m=p+1
if(!(p<n.length))return A.a(n,p)
l=n[p]
if(o){k=r*3
o=i.z
o===$&&A.b()
if(!(k>=0&&k<o.length))return A.a(o,k)
n=o[k]
B.c.i(o,k,n-l*(n-d)/262144)
n=i.z
o=k+1
if(!(o<n.length))return A.a(n,o)
j=n[o]
B.c.i(n,o,j-l*(j-e)/262144)
j=i.z
o=k+2
if(!(o<j.length))return A.a(j,o)
n=j[o]
B.c.i(j,o,n-l*(n-f)/262144);++r}if(q>h){k=q*3
o=i.z
o===$&&A.b()
if(!(k>=0&&k<o.length))return A.a(o,k)
n=o[k]
B.c.i(o,k,n-l*(n-d)/262144)
n=i.z
o=k+1
if(!(o<n.length))return A.a(n,o)
j=n[o]
B.c.i(n,o,j-l*(j-e)/262144)
j=i.z
o=k+2
if(!(o<j.length))return A.a(j,o)
n=j[o]
B.c.i(j,o,n-l*(n-f)/262144);--q}p=m}},
h2(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=1e30
for(t=f.d,s=t*3,r=e,q=r,p=-1,o=-1;t<f.c;++t,s=m){n=f.z
n===$&&A.b()
m=s+1
l=n.length
if(!(s<l))return A.a(n,s)
k=n[s]-a
if(k<0)k=-k
s=m+1
if(!(m<l))return A.a(n,m)
j=n[m]-b
if(j<0)j=-j
m=s+1
if(!(s<l))return A.a(n,s)
i=n[s]-c
if(i<0)i=-i
k=k+j+i
if(k<q){p=t
q=k}n=f.at
n===$&&A.b()
if(!(t<n.length))return A.a(n,t)
h=k-n[t]
if(h<r){o=t
r=h}n=f.ax
n===$&&A.b()
if(!(t<n.length))return A.a(n,t)
l=n[t]
B.c.i(n,t,l-0.0009765625*l)
l=f.at
if(!(t<l.length))return A.a(l,t)
n=l[t]
g=f.ax
if(!(t<g.length))return A.a(g,t)
B.c.i(l,t,n+g[t])}n=f.ax
n===$&&A.b()
if(!(p>=0&&p<n.length))return A.a(n,p)
B.c.i(n,p,n[p]+0.0009765625)
n=f.at
n===$&&A.b()
if(!(p<n.length))return A.a(n,p)
B.c.i(n,p,n[p]-1)
return o},
iT(a,b,c){var t,s,r,q,p,o,n
for(t=this.d,s=this.z,r=0,q=0;r<t;++r){s===$&&A.b()
p=q+1
o=s.length
if(!(q<o))return A.a(s,q)
n=!1
if(s[q]===a){q=p+1
if(!(p<o))return A.a(s,p)
if(s[p]===b){p=q+1
if(!(q<o))return A.a(s,q)
o=s[q]===c
q=p}else o=n}else{o=n
q=p}if(o)return r}return-1}}
A.fs.prototype={
V(a){var t,s,r=this
if(r.a===r.c.length)r.i5()
t=r.c
s=r.a++
t.$flags&2&&A.c(t)
if(!(s>=0&&s<t.length))return A.a(t,s)
t[s]=a&255},
bn(a){var t,s,r,q,p,o=this
u.L.a(a)
t=J.aY(a)
while(s=o.a,r=s+t,q=o.c,p=q.length,r>p)o.eo(r-p)
B.e.br(q,s,r,a)
o.a+=t},
d0(a){var t=this
if(t.b){t.V(B.a.j(a,8)&255)
t.V(a&255)
return}t.V(a&255)
t.V(B.a.j(a,8)&255)},
aH(a){var t=this
if(t.b){t.V(B.a.j(a,24)&255)
t.V(B.a.j(a,16)&255)
t.V(B.a.j(a,8)&255)
t.V(a&255)
return}t.V(a&255)
t.V(B.a.j(a,8)&255)
t.V(B.a.j(a,16)&255)
t.V(B.a.j(a,24)&255)},
eo(a){var t,s,r,q
if(a!=null)t=a
else{s=this.c.length
t=s===0?8192:s*2}s=this.c
r=s.length
q=new Uint8Array(r+t)
B.e.br(q,0,r,s)
this.c=q},
i5(){return this.eo(null)},
gu(a){return this.a}}
A.fK.prototype={
fd(a){var t,s,r,q,p,o,n=a.gX(),m=a.gK(),l=this.a
l===$&&A.b()
t=A.J(null,null,B.f,0,B.i,m,null,0,1,l,B.f,n,!1)
n=t.a
s=n.gG(n)
s.F()
t.z=a.z
t.w=a.w
t.y=a.y
for(n=a.a,n=n.gG(n);n.F();){r=n.gP()
q=s.gP()
p=B.b.h(r.gm())
o=B.b.h(r.gp())
q.i(0,0,this.i0(B.b.h(r.gq()),o,p))
s.F()}return t}}
A.cY.prototype={
h(a){var t=this.b
return t===0?0:B.a.av(this.a,t)},
S(a,b){if(b==null)return!1
return b instanceof A.cY&&this.a===b.a&&this.b===b.b},
gE(a){return A.kE(this.a,this.b,B.T,B.T)},
C(a){return""+this.a+"/"+this.b}};(function aliases(){var t=J.bo.prototype
t.fs=t.C
t=A.E.prototype
t.dJ=t.ai})();(function installTearOffs(){var t=hunkHelpers.installInstanceTearOff,s=hunkHelpers._instance_2u,r=hunkHelpers._static_1,q=hunkHelpers.installStaticTearOff
t(A.X.prototype,"gby",1,0,null,["$1","$0"],["a4","h"],2,0,0)
t(A.b0.prototype,"gby",1,0,null,["$1","$0"],["a4","h"],2,0,0)
t(A.bP.prototype,"gby",1,0,null,["$1","$0"],["a4","h"],2,0,0)
t(A.bl.prototype,"gby",1,0,null,["$1","$0"],["a4","h"],2,0,0)
t(A.bL.prototype,"gby",1,0,null,["$1","$0"],["a4","h"],2,0,0)
t(A.bm.prototype,"gby",1,0,null,["$1","$0"],["a4","h"],2,0,0)
t(A.bO.prototype,"gby",1,0,null,["$1","$0"],["a4","h"],2,0,0)
t(A.bM.prototype,"gby",1,0,null,["$1","$0"],["a4","h"],2,0,0)
t(A.bN.prototype,"gby",1,0,null,["$1","$0"],["a4","h"],2,0,0)
t(A.cz.prototype,"gby",1,0,null,["$1","$0"],["a4","h"],2,0,0)
var p
s(p=A.fk.prototype,"ghc","hd",4)
s(p,"ghf","hg",4)
s(p,"ghh","hi",4)
s(p,"gh6","h7",4)
s(p,"gh8","h9",4)
r(A,"pm","n9",0)
r(A,"pf","n1",0)
r(A,"pd","n_",0)
r(A,"pk","n7",0)
r(A,"pl","n8",0)
r(A,"pj","n6",0)
r(A,"pi","n5",0)
r(A,"ph","n4",0)
r(A,"po","nb",0)
r(A,"pn","na",0)
r(A,"pg","n2",0)
r(A,"pe","n0",0)
r(A,"pz","nm",0)
r(A,"px","nk",0)
r(A,"pp","nc",0)
r(A,"pr","ne",0)
r(A,"pq","nd",0)
r(A,"ps","nf",0)
r(A,"pA","nn",0)
r(A,"py","nl",0)
r(A,"pt","ng",0)
r(A,"pu","nh",0)
r(A,"pv","ni",0)
r(A,"pw","nj",0)
s(A.ef.prototype,"gim","io",8)
s(A.fb.prototype,"gje","jf",8)
q(A,"jW",3,null,["$3"],["no"],1,0)
q(A,"pB",3,null,["$3"],["np"],1,0)
q(A,"pG",3,null,["$3"],["nu"],1,0)
q(A,"pH",3,null,["$3"],["nv"],1,0)
q(A,"pI",3,null,["$3"],["nw"],1,0)
q(A,"pJ",3,null,["$3"],["nx"],1,0)
q(A,"pK",3,null,["$3"],["ny"],1,0)
q(A,"pL",3,null,["$3"],["nz"],1,0)
q(A,"pM",3,null,["$3"],["nA"],1,0)
q(A,"pN",3,null,["$3"],["nB"],1,0)
q(A,"pC",3,null,["$3"],["nq"],1,0)
q(A,"pD",3,null,["$3"],["nr"],1,0)
q(A,"pE",3,null,["$3"],["ns"],1,0)
q(A,"pF",3,null,["$3"],["nt"],1,0)
t(A.b2.prototype,"gfl",0,5,null,["$5"],["a3"],3,0,0)
q(A,"pP",6,null,["$6"],["nI"],5,0)
q(A,"pQ",6,null,["$6"],["nJ"],5,0)
q(A,"pO",6,null,["$6"],["nH"],5,0)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.P,null)
r(A.P,[A.jd,J.f2,A.e3,J.d8,A.Q,A.E,A.hZ,A.e,A.bS,A.el,A.dc,A.ae,A.b9,A.aS,A.d9,A.i4,A.hN,A.bg,A.cO,A.hI,A.V,A.bR,A.iq,A.iz,A.aJ,A.h_,A.h0,A.eK,A.ci,A.h1,A.ir,A.fr,A.e4,A.bj,A.bV,A.e5,A.ho,A.io,A.ip,A.he,A.aC,A.is,A.iv,A.hx,A.im,A.f1,A.ft,A.hE,A.hc,A.hO,A.K,A.b1,A.fZ,A.eM,A.aP,A.X,A.ha,A.aZ,A.hd,A.G,A.hg,A.eN,A.b_,A.eO,A.eP,A.eQ,A.de,A.eq,A.dh,A.di,A.dj,A.eY,A.eZ,A.eI,A.bk,A.hB,A.bn,A.hC,A.d4,A.fj,A.hD,A.fk,A.e_,A.fx,A.aR,A.cS,A.hT,A.c7,A.fB,A.fC,A.fF,A.fJ,A.cT,A.cU,A.e2,A.aA,A.e9,A.i1,A.fO,A.i3,A.fP,A.fQ,A.hL,A.i6,A.ee,A.i7,A.ic,A.ig,A.ii,A.ed,A.ih,A.i8,A.bb,A.eg,A.fX,A.eh,A.ei,A.ef,A.fV,A.id,A.fW,A.ik,A.ej,A.eS,A.eT,A.dl,A.dk,A.dm,A.eV,A.d2,A.cw,A.ay,A.fu,A.hu,A.a6,A.fK,A.fs,A.cY])
r(J.f2,[J.fg,J.dz,J.dB,J.cL,J.cM,J.dA,J.cK])
r(J.dB,[J.bo,J.u,A.bT,A.dJ])
r(J.bo,[J.fv,J.eb,J.b3])
s(J.fe,A.e3)
s(J.hA,J.u)
r(J.dA,[J.dy,J.fh])
r(A.Q,[A.cN,A.ea,A.fl,A.fS,A.fL,A.fY,A.eA,A.aO,A.ec,A.fR,A.cZ,A.eJ])
s(A.d_,A.E)
s(A.aq,A.d_)
r(A.e,[A.da,A.ek,A.cj,A.ck,A.cl,A.cm,A.cn,A.co,A.cq,A.cr,A.cs,A.ct,A.cu,A.bh,A.b2,A.a5,A.bW,A.bX,A.bY,A.bZ,A.c_,A.c0,A.c1,A.c2,A.c3,A.c4,A.c5,A.c6,A.A])
r(A.da,[A.aQ,A.db,A.dD,A.hJ])
r(A.aQ,[A.e7,A.dE])
s(A.bz,A.aS)
r(A.bz,[A.er,A.es,A.et])
s(A.bI,A.d9)
s(A.dN,A.ea)
r(A.bg,[A.eF,A.eG,A.fN,A.iS,A.iU,A.iX,A.iW,A.h9,A.hj,A.iJ,A.iK,A.iL,A.iM,A.iN,A.iO,A.iP,A.hS,A.hw,A.hv])
r(A.fN,[A.fM,A.ch])
s(A.aF,A.cO)
s(A.dC,A.aF)
r(A.eG,[A.iT,A.hK,A.hM,A.hq,A.hr,A.hs,A.ij])
r(A.dJ,[A.fo,A.a8])
r(A.a8,[A.em,A.eo])
s(A.en,A.em)
s(A.bq,A.en)
s(A.ep,A.eo)
s(A.as,A.ep)
r(A.bq,[A.bU,A.dF])
r(A.as,[A.dG,A.dH,A.dI,A.dK,A.dL,A.dM,A.br])
s(A.eu,A.fY)
r(A.eF,[A.iB,A.iA])
r(A.eK,[A.ix,A.iw,A.fU])
s(A.eL,A.ci)
r(A.eL,[A.fm,A.fT])
s(A.hH,A.ix)
s(A.hG,A.iw)
r(A.aO,[A.cW,A.f_])
s(A.iD,A.io)
s(A.iE,A.ip)
r(A.ir,[A.d3,A.eE,A.hb,A.af,A.eC,A.a4,A.a3,A.cv,A.bG,A.aE,A.cx,A.cQ,A.dZ,A.bt,A.fw,A.bu,A.aI,A.ai,A.c8,A.a_,A.aB,A.c9,A.d1,A.eW,A.eR,A.fd,A.hk])
s(A.f0,A.f1)
s(A.dO,A.ft)
r(A.bh,[A.eH,A.cp])
s(A.bF,A.b1)
r(A.X,[A.b0,A.bK,A.bP,A.bl,A.bL,A.bm,A.bO,A.bM,A.bN,A.cA,A.cy,A.cB,A.cz])
r(A.hd,[A.eD,A.hi,A.hn,A.hp,A.fi,A.bs,A.hR,A.hU,A.hY,A.i0,A.i2,A.il])
s(A.hf,A.eD)
s(A.f3,A.b_)
r(A.f3,[A.du,A.f5,A.f6,A.f7,A.dv])
s(A.f4,A.de)
s(A.f8,A.di)
s(A.eX,A.aZ)
r(A.bk,[A.bJ,A.dn])
s(A.f9,A.e_)
s(A.fa,A.fx)
s(A.hQ,A.hg)
s(A.bv,A.G)
r(A.aR,[A.fz,A.fA,A.fD,A.fE,A.fH,A.fI])
r(A.cS,[A.e1,A.fG])
r(A.fJ,[A.cV,A.ag])
s(A.fb,A.ef)
s(A.fc,A.ej)
s(A.dx,A.d2)
r(A.a5,[A.cC,A.cD,A.dp,A.dq,A.dr,A.ds,A.cE,A.cF,A.cG,A.cH,A.cI,A.cJ])
r(A.ay,[A.dP,A.dQ,A.dR,A.dS,A.dT,A.dU,A.dV,A.cP,A.az])
s(A.fq,A.fK)
t(A.d_,A.b9)
t(A.em,A.E)
t(A.en,A.ae)
t(A.eo,A.E)
t(A.ep,A.ae)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",D:"double",j:"num",S:"String",aT:"bool",bV:"Null",r:"List",P:"Object",bp:"Map",R:"JSObject"},mangledNames:{},types:["~(a6)","i(i,b7,i)","i([i])","~(i,i,j,j,j)","~(bn,r<i>)","~(i,i,i,i,i,b8)","@()","~(S,aP)","~(i,aT)","@(@)","@(@,S)","@(S)","~(@,@)","~(P?,P?)","bV(R)","D(i)","~(i,X)","~(j,j,j,j)","b7(i)","aT(S)","i(i,i)","j(j,j,j,j)","j(j,j,j,j,j)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.er&&a.b(c.a)&&b.b(c.b),"2;bytes,vector":(a,b)=>c=>c instanceof A.es&&a.b(c.a)&&b.b(c.b),"2;clean,output":(a,b)=>c=>c instanceof A.et&&a.b(c.a)&&b.b(c.b)}}
A.o_(v.typeUniverse,JSON.parse('{"b3":"bo","fv":"bo","eb":"bo","pX":"bT","fg":{"aT":[],"H":[]},"dz":{"H":[]},"dB":{"R":[]},"bo":{"R":[]},"u":{"r":["1"],"R":[],"e":["1"],"a7":["1"]},"fe":{"e3":[]},"hA":{"u":["1"],"r":["1"],"R":[],"e":["1"],"a7":["1"]},"d8":{"C":["1"]},"dA":{"D":[],"j":[]},"dy":{"D":[],"i":[],"j":[],"H":[]},"fh":{"D":[],"j":[],"H":[]},"cK":{"S":[],"kH":[],"a7":["@"],"H":[]},"cN":{"Q":[]},"aq":{"E":["i"],"b9":["i"],"r":["i"],"e":["i"],"E.E":"i","b9.E":"i"},"da":{"e":["1"]},"aQ":{"e":["1"]},"e7":{"aQ":["1"],"e":["1"],"aQ.E":"1","e.E":"1"},"bS":{"C":["1"]},"dE":{"aQ":["2"],"e":["2"],"aQ.E":"2","e.E":"2"},"ek":{"e":["1"],"e.E":"1"},"el":{"C":["1"]},"db":{"e":["1"],"e.E":"1"},"dc":{"C":["1"]},"d_":{"E":["1"],"b9":["1"],"r":["1"],"e":["1"]},"er":{"bz":[],"aS":[]},"es":{"bz":[],"aS":[]},"et":{"bz":[],"aS":[]},"d9":{"bp":["1","2"]},"bI":{"d9":["1","2"],"bp":["1","2"]},"dN":{"Q":[]},"fl":{"Q":[]},"fS":{"Q":[]},"bg":{"bH":[]},"eF":{"bH":[]},"eG":{"bH":[]},"fN":{"bH":[]},"fM":{"bH":[]},"ch":{"bH":[]},"fL":{"Q":[]},"aF":{"cO":["1","2"],"jf":["1","2"],"bp":["1","2"]},"dD":{"e":["1"],"e.E":"1"},"V":{"C":["1"]},"hJ":{"e":["1"],"e.E":"1"},"bR":{"C":["1"]},"dC":{"aF":["1","2"],"cO":["1","2"],"jf":["1","2"],"bp":["1","2"]},"bz":{"aS":[]},"bU":{"bq":[],"j8":[],"E":["D"],"a8":["D"],"r":["D"],"ar":["D"],"R":[],"T":[],"a7":["D"],"e":["D"],"ae":["D"],"H":[],"E.E":"D"},"br":{"as":[],"b8":[],"E":["i"],"a8":["i"],"r":["i"],"ar":["i"],"R":[],"T":[],"a7":["i"],"e":["i"],"ae":["i"],"H":[],"E.E":"i"},"bT":{"R":[],"H":[]},"dJ":{"R":[],"T":[]},"fo":{"R":[],"T":[],"H":[]},"a8":{"ar":["1"],"R":[],"T":[],"a7":["1"]},"bq":{"E":["D"],"a8":["D"],"r":["D"],"ar":["D"],"R":[],"T":[],"a7":["D"],"e":["D"],"ae":["D"]},"as":{"E":["i"],"a8":["i"],"r":["i"],"ar":["i"],"R":[],"T":[],"a7":["i"],"e":["i"],"ae":["i"]},"dF":{"bq":[],"hl":[],"E":["D"],"a8":["D"],"r":["D"],"ar":["D"],"R":[],"T":[],"a7":["D"],"e":["D"],"ae":["D"],"H":[],"E.E":"D"},"dG":{"as":[],"hz":[],"E":["i"],"a8":["i"],"r":["i"],"ar":["i"],"R":[],"T":[],"a7":["i"],"e":["i"],"ae":["i"],"H":[],"E.E":"i"},"dH":{"as":[],"dt":[],"E":["i"],"a8":["i"],"r":["i"],"ar":["i"],"R":[],"T":[],"a7":["i"],"e":["i"],"ae":["i"],"H":[],"E.E":"i"},"dI":{"as":[],"jb":[],"E":["i"],"a8":["i"],"r":["i"],"ar":["i"],"R":[],"T":[],"a7":["i"],"e":["i"],"ae":["i"],"H":[],"E.E":"i"},"dK":{"as":[],"jB":[],"E":["i"],"a8":["i"],"r":["i"],"ar":["i"],"R":[],"T":[],"a7":["i"],"e":["i"],"ae":["i"],"H":[],"E.E":"i"},"dL":{"as":[],"b7":[],"E":["i"],"a8":["i"],"r":["i"],"ar":["i"],"R":[],"T":[],"a7":["i"],"e":["i"],"ae":["i"],"H":[],"E.E":"i"},"dM":{"as":[],"E":["i"],"a8":["i"],"r":["i"],"ar":["i"],"R":[],"T":[],"a7":["i"],"e":["i"],"ae":["i"],"H":[],"E.E":"i"},"fY":{"Q":[]},"eu":{"Q":[]},"E":{"r":["1"],"e":["1"]},"cO":{"bp":["1","2"]},"eL":{"ci":["S","r<i>"]},"fm":{"ci":["S","r<i>"]},"fT":{"ci":["S","r<i>"]},"D":{"j":[]},"i":{"j":[]},"r":{"e":["1"]},"S":{"kH":[]},"eA":{"Q":[]},"ea":{"Q":[]},"aO":{"Q":[]},"cW":{"Q":[]},"f_":{"Q":[]},"ec":{"Q":[]},"fR":{"Q":[]},"cZ":{"Q":[]},"eJ":{"Q":[]},"fr":{"Q":[]},"e4":{"Q":[]},"f0":{"f1":[]},"dO":{"ft":[]},"K":{"C":["j"]},"cj":{"y":[],"e":["j"],"e.E":"j"},"ck":{"y":[],"e":["j"],"e.E":"j"},"cl":{"y":[],"e":["j"],"e.E":"j"},"cm":{"y":[],"e":["j"],"e.E":"j"},"cn":{"y":[],"e":["j"],"e.E":"j"},"co":{"y":[],"e":["j"],"e.E":"j"},"cq":{"y":[],"e":["j"],"e.E":"j"},"cr":{"y":[],"e":["j"],"e.E":"j"},"cs":{"y":[],"e":["j"],"e.E":"j"},"ct":{"y":[],"e":["j"],"e.E":"j"},"cu":{"y":[],"e":["j"],"e.E":"j"},"bh":{"y":[],"e":["j"],"e.E":"j"},"eH":{"y":[],"e":["j"],"e.E":"j"},"cp":{"y":[],"e":["j"],"e.E":"j"},"bF":{"b1":[]},"b0":{"X":[]},"bK":{"X":[]},"bP":{"X":[]},"bl":{"X":[]},"bL":{"X":[]},"bm":{"X":[]},"bO":{"X":[]},"bM":{"X":[]},"bN":{"X":[]},"cA":{"X":[]},"cy":{"X":[]},"cB":{"X":[]},"cz":{"X":[]},"aZ":{"G":[]},"du":{"b_":[]},"f3":{"b_":[]},"eQ":{"G":[]},"f4":{"de":[]},"f5":{"b_":[]},"f6":{"b_":[]},"f7":{"b_":[]},"dv":{"b_":[]},"f8":{"di":[]},"dj":{"G":[]},"eY":{"G":[]},"eX":{"aZ":[],"G":[]},"bJ":{"bk":[]},"dn":{"bk":[]},"f9":{"e_":[]},"fx":{"G":[]},"fa":{"G":[]},"bv":{"G":[]},"fz":{"aR":[]},"fA":{"aR":[]},"fD":{"aR":[]},"fE":{"aR":[]},"fH":{"aR":[]},"fI":{"aR":[]},"e1":{"cS":[]},"fG":{"cS":[]},"fB":{"G":[]},"cT":{"G":[]},"cU":{"G":[]},"e2":{"G":[]},"e9":{"G":[]},"fQ":{"G":[]},"fc":{"ej":[]},"d2":{"G":[]},"dx":{"d2":[],"G":[]},"b2":{"e":["p"],"e.E":"p"},"a5":{"e":["p"]},"cC":{"a5":[],"e":["p"],"e.E":"p"},"cD":{"a5":[],"e":["p"],"e.E":"p"},"dp":{"a5":[],"e":["p"],"e.E":"p"},"dq":{"a5":[],"e":["p"],"e.E":"p"},"dr":{"a5":[],"e":["p"],"e.E":"p"},"ds":{"a5":[],"e":["p"],"e.E":"p"},"cE":{"a5":[],"e":["p"],"e.E":"p"},"cF":{"a5":[],"e":["p"],"e.E":"p"},"cG":{"a5":[],"e":["p"],"e.E":"p"},"cH":{"a5":[],"e":["p"],"e.E":"p"},"cI":{"a5":[],"e":["p"],"e.E":"p"},"cJ":{"a5":[],"e":["p"],"e.E":"p"},"dP":{"ay":[]},"dQ":{"ay":[]},"dR":{"ay":[]},"dS":{"ay":[]},"dT":{"ay":[]},"dU":{"ay":[]},"dV":{"ay":[]},"cP":{"ay":[]},"az":{"ay":[]},"bW":{"p":[],"y":[],"e":["j"],"C":["p"],"e.E":"j"},"bX":{"p":[],"y":[],"e":["j"],"C":["p"],"e.E":"j"},"bY":{"p":[],"y":[],"e":["j"],"C":["p"],"e.E":"j"},"bZ":{"p":[],"y":[],"e":["j"],"C":["p"],"e.E":"j"},"c_":{"p":[],"y":[],"e":["j"],"C":["p"],"e.E":"j"},"c0":{"p":[],"y":[],"e":["j"],"C":["p"],"e.E":"j"},"fu":{"C":["p"]},"c1":{"p":[],"y":[],"e":["j"],"C":["p"],"e.E":"j"},"c2":{"p":[],"y":[],"e":["j"],"C":["p"],"e.E":"j"},"c3":{"p":[],"y":[],"e":["j"],"C":["p"],"e.E":"j"},"c4":{"p":[],"y":[],"e":["j"],"C":["p"],"e.E":"j"},"c5":{"p":[],"y":[],"e":["j"],"C":["p"],"e.E":"j"},"c6":{"p":[],"y":[],"e":["j"],"C":["p"],"e.E":"j"},"A":{"p":[],"y":[],"e":["j"],"C":["p"],"e.E":"j"},"fq":{"fK":[]},"m7":{"T":[]},"jb":{"r":["i"],"T":[],"e":["i"]},"b8":{"r":["i"],"T":[],"e":["i"]},"mY":{"r":["i"],"T":[],"e":["i"]},"hz":{"r":["i"],"T":[],"e":["i"]},"jB":{"r":["i"],"T":[],"e":["i"]},"dt":{"r":["i"],"T":[],"e":["i"]},"b7":{"r":["i"],"T":[],"e":["i"]},"j8":{"r":["D"],"T":[],"e":["D"]},"hl":{"r":["D"],"T":[],"e":["D"]},"p":{"y":[],"C":["p"],"e":["j"]}}'))
A.nZ(v.typeUniverse,JSON.parse('{"da":1,"d_":1,"a8":1,"eK":2,"fJ":1}'))
var u=(function rtii(){var t=A.W
return{G:t("y"),x:t("Q"),aX:t("eN"),gV:t("eP"),Z:t("bH"),f:t("dk"),gj:t("eS"),ak:t("eT"),fa:t("dl"),gx:t("eZ"),P:t("aP"),r:t("X"),I:t("a5"),k:t("dt"),bM:t("e<D>"),hf:t("e<@>"),hb:t("e<i>"),E:t("u<eI>"),Q:t("u<eO>"),dw:t("u<de>"),dh:t("u<hl>"),b:t("u<di>"),A:t("u<dk>"),g:t("u<b2>"),b7:t("u<bn>"),M:t("u<r<r<r<i>>>>"),o:t("u<r<r<i>>>"),S:t("u<r<i>>"),d:t("u<e_>"),Y:t("u<c7>"),af:t("u<aR>"),l:t("u<fF>"),s:t("u<S>"),aU:t("u<fP>"),h:t("u<b8>"),ao:t("u<bb>"),F:t("u<fW>"),J:t("u<ej>"),gn:t("u<fZ>"),e8:t("u<d4>"),n:t("u<@>"),t:t("u<i>"),f8:t("u<fj?>"),hh:t("u<b7?>"),e:t("u<b8?>"),z:t("u<~(a6)>"),aP:t("a7<@>"),u:t("dz"),m:t("R"),O:t("b3"),ez:t("ar<@>"),c:t("bn"),f0:t("r<dt>"),fv:t("r<r<dt>>"),gS:t("r<r<bb>>"),w:t("r<c7>"),B:t("r<ed>"),e6:t("r<bb>"),eQ:t("r<eg>"),db:t("r<eh>"),R:t("r<ei>"),dg:t("r<D>"),_:t("r<@>"),L:t("r<i>"),C:t("r<bk?>"),ge:t("r<bb?>"),gR:t("r<eq?>"),cP:t("r<i?>"),ck:t("bp<S,S>"),d4:t("bq"),eB:t("as"),bm:t("br"),a:t("bV"),K:t("P"),dv:t("p"),fW:t("c7"),fh:t("fC"),cE:t("e1"),ha:t("cS"),fi:t("cT"),j:t("cY"),gT:t("pZ"),bQ:t("+()"),N:t("S"),cV:t("fO"),dm:t("H"),bv:t("b7"),D:t("b8"),bI:t("eb"),V:t("ed"),ai:t("eg"),gU:t("eh"),dE:t("ei"),cc:t("ek<S>"),eO:t("eq"),y:t("aT"),bB:t("aT(S)"),i:t("D"),cp:t("@"),p:t("i"),eH:t("kf<bV>?"),fe:t("bk?"),bC:t("hz?"),an:t("R?"),T:t("r<i>?"),eA:t("r<bk?>?"),di:t("r<i?>?"),cZ:t("bp<S,S>?"),W:t("bU?"),U:t("br?"),X:t("P?"),dk:t("S?"),aD:t("b8?"),eW:t("ee?"),aj:t("bb?"),dP:t("fX?"),fQ:t("aT?"),cD:t("D?"),v:t("i?"),cg:t("j?"),e7:t("~(i,aT)?"),H:t("j"),q:t("~(bn,r<i>)"),d6:t("~(i,aT)"),dX:t("~(j,j,j,j)")}})();(function constants(){var t=hunkHelpers.makeConstList
B.cL=J.f2.prototype
B.c=J.u.prototype
B.a=J.dy.prototype
B.b=J.dA.prototype
B.B=J.cK.prototype
B.cN=J.b3.prototype
B.cO=J.dB.prototype
B.ai=A.bU.prototype
B.aj=A.dF.prototype
B.aD=A.dG.prototype
B.R=A.dH.prototype
B.aE=A.dI.prototype
B.u=A.dK.prototype
B.n=A.dL.prototype
B.e=A.br.prototype
B.bP=J.fv.prototype
B.aL=J.eb.prototype
B.an=new A.eC(0,"direct")
B.ao=new A.eC(1,"alpha")
B.aN=new A.a3(0,"none")
B.ap=new A.a3(3,"bitfields")
B.aq=new A.a3(6,"alphaBitfields")
B.a0=new A.eE(0,"littleEndian")
B.S=new A.eE(1,"bigEndian")
B.ci=new A.dc(A.W("dc<0&>"))
B.aO=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.cj=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.co=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.ck=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.cn=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.cm=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.cl=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.aP=function(hooks) { return hooks; }

B.aQ=new A.fm()
B.aR=new A.hH()
B.cp=new A.fr()
B.T=new A.hZ()
B.cq=new A.fT()
B.F=new A.im()
B.cr=new A.iD()
B.aS=new A.iE()
B.aT=new A.hb(4,"luminance")
B.cs=new A.bG(0,"red")
B.ct=new A.bG(1,"green")
B.cu=new A.bG(2,"blue")
B.cv=new A.bG(3,"alpha")
B.cw=new A.bG(4,"other")
B.aU=new A.cv(0,"uint")
B.ar=new A.cv(1,"half")
B.as=new A.cv(2,"float")
B.aV=new A.aE(0,"none")
B.cE=new A.hk(2,"both")
B.cF=new A.bj("Unknown photo operation.",null,null)
B.aW=new A.bj("Unreadable image",null,null)
B.cG=new A.bj("Unable to decode the input image.",null,null)
B.cH=new A.bj("Perturbation contains a non-finite value.",null,null)
B.v=new A.af(0,"uint1")
B.x=new A.af(1,"uint2")
B.G=new A.af(10,"float32")
B.I=new A.af(11,"float64")
B.y=new A.af(2,"uint4")
B.f=new A.af(3,"uint8")
B.l=new A.af(4,"uint16")
B.H=new A.af(5,"uint32")
B.J=new A.af(6,"int8")
B.K=new A.af(7,"int16")
B.L=new A.af(8,"int32")
B.A=new A.af(9,"float16")
B.aX=new A.eR(1,"page")
B.i=new A.eR(2,"sequence")
B.cI=new A.eW(0,"none")
B.at=new A.eW(1,"deflate")
B.aY=new A.cx(2,"cur")
B.d=new A.a4(0,"none")
B.aZ=new A.a4(1,"byte")
B.b_=new A.a4(10,"sRational")
B.b0=new A.a4(11,"single")
B.b1=new A.a4(12,"double")
B.b2=new A.a4(13,"ifd")
B.k=new A.a4(2,"ascii")
B.j=new A.a4(3,"short")
B.o=new A.a4(4,"long")
B.q=new A.a4(5,"rational")
B.b3=new A.a4(6,"sByte")
B.M=new A.a4(7,"undefined")
B.b4=new A.a4(8,"sShort")
B.b5=new A.a4(9,"sLong")
B.cM=new A.fd(0,"nearest")
B.ke=new A.fd(1,"linear")
B.cP=new A.hG(!1)
B.a1=t([0,2,8],u.t)
B.cQ=t([0,4,2,1],u.t)
B.cJ=new A.cx(0,"invalid")
B.cK=new A.cx(1,"ico")
B.cS=t([B.cJ,B.cK,B.aY],A.W("u<cx>"))
B.au=t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],u.t)
B.b7=t([252,243,207,63],u.t)
B.ji=new A.cQ(0,"none")
B.bS=new A.cQ(1,"background")
B.bT=new A.cQ(2,"previous")
B.b8=t([B.ji,B.bS,B.bT],A.W("u<cQ>"))
B.a2=t([292,260,226,226],u.t)
B.d9=t([0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0],u.t)
B.b9=t([2,3,7],u.t)
B.a3=t([3226,6412,200,168,38,38,134,134,100,100,100,100,68,68,68,68],u.t)
B.dc=t([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],u.t)
B.dk=t([3,3,11],u.t)
B.aB=t([128,128,128,128,128,128,128,128,128,128,128],u.t)
B.be=t([B.aB,B.aB,B.aB],u.S)
B.e4=t([253,136,254,255,228,219,128,128,128,128,128],u.t)
B.f_=t([189,129,242,255,227,213,255,219,128,128,128],u.t)
B.f4=t([106,126,227,252,214,209,255,255,128,128,128],u.t)
B.hq=t([B.e4,B.f_,B.f4],u.S)
B.hw=t([1,98,248,255,236,226,255,255,128,128,128],u.t)
B.dr=t([181,133,238,254,221,234,255,154,128,128,128],u.t)
B.dp=t([78,134,202,247,198,180,255,219,128,128,128],u.t)
B.hT=t([B.hw,B.dr,B.dp],u.S)
B.e_=t([1,185,249,255,243,255,128,128,128,128,128],u.t)
B.hu=t([184,150,247,255,236,224,128,128,128,128,128],u.t)
B.iH=t([77,110,216,255,236,230,128,128,128,128,128],u.t)
B.fX=t([B.e_,B.hu,B.iH],u.S)
B.h4=t([1,101,251,255,241,255,128,128,128,128,128],u.t)
B.e2=t([170,139,241,252,236,209,255,255,128,128,128],u.t)
B.ha=t([37,116,196,243,228,255,255,255,128,128,128],u.t)
B.dN=t([B.h4,B.e2,B.ha],u.S)
B.fg=t([1,204,254,255,245,255,128,128,128,128,128],u.t)
B.iW=t([207,160,250,255,238,128,128,128,128,128,128],u.t)
B.iV=t([102,103,231,255,211,171,128,128,128,128,128],u.t)
B.er=t([B.fg,B.iW,B.iV],u.S)
B.dG=t([1,152,252,255,240,255,128,128,128,128,128],u.t)
B.j0=t([177,135,243,255,234,225,128,128,128,128,128],u.t)
B.fS=t([80,129,211,255,194,224,128,128,128,128,128],u.t)
B.hp=t([B.dG,B.j0,B.fS],u.S)
B.bh=t([1,1,255,128,128,128,128,128,128,128,128],u.t)
B.hL=t([246,1,255,128,128,128,128,128,128,128,128],u.t)
B.fD=t([255,128,128,128,128,128,128,128,128,128,128],u.t)
B.ja=t([B.bh,B.hL,B.fD],u.S)
B.el=t([B.be,B.hq,B.hT,B.fX,B.dN,B.er,B.hp,B.ja],u.o)
B.iJ=t([198,35,237,223,193,187,162,160,145,155,62],u.t)
B.e3=t([131,45,198,221,172,176,220,157,252,221,1],u.t)
B.iI=t([68,47,146,208,149,167,221,162,255,223,128],u.t)
B.fp=t([B.iJ,B.e3,B.iI],u.S)
B.hU=t([1,149,241,255,221,224,255,255,128,128,128],u.t)
B.i8=t([184,141,234,253,222,220,255,199,128,128,128],u.t)
B.fz=t([81,99,181,242,176,190,249,202,255,255,128],u.t)
B.iw=t([B.hU,B.i8,B.fz],u.S)
B.im=t([1,129,232,253,214,197,242,196,255,255,128],u.t)
B.iT=t([99,121,210,250,201,198,255,202,128,128,128],u.t)
B.hr=t([23,91,163,242,170,187,247,210,255,255,128],u.t)
B.fF=t([B.im,B.iT,B.hr],u.S)
B.eG=t([1,200,246,255,234,255,128,128,128,128,128],u.t)
B.ij=t([109,178,241,255,231,245,255,255,128,128,128],u.t)
B.d8=t([44,130,201,253,205,192,255,255,128,128,128],u.t)
B.iA=t([B.eG,B.ij,B.d8],u.S)
B.dA=t([1,132,239,251,219,209,255,165,128,128,128],u.t)
B.cT=t([94,136,225,251,218,190,255,255,128,128,128],u.t)
B.ip=t([22,100,174,245,186,161,255,199,128,128,128],u.t)
B.h2=t([B.dA,B.cT,B.ip],u.S)
B.i7=t([1,182,249,255,232,235,128,128,128,128,128],u.t)
B.hj=t([124,143,241,255,227,234,128,128,128,128,128],u.t)
B.eX=t([35,77,181,251,193,211,255,205,128,128,128],u.t)
B.f6=t([B.i7,B.hj,B.eX],u.S)
B.jb=t([1,157,247,255,236,231,255,255,128,128,128],u.t)
B.ek=t([121,141,235,255,225,227,255,255,128,128,128],u.t)
B.ik=t([45,99,188,251,195,217,255,224,128,128,128],u.t)
B.dM=t([B.jb,B.ek,B.ik],u.S)
B.cU=t([1,1,251,255,213,255,128,128,128,128,128],u.t)
B.de=t([203,1,248,255,255,128,128,128,128,128,128],u.t)
B.i9=t([137,1,177,255,224,255,128,128,128,128,128],u.t)
B.dH=t([B.cU,B.de,B.i9],u.S)
B.i0=t([B.fp,B.iw,B.fF,B.iA,B.h2,B.f6,B.dM,B.dH],u.o)
B.ev=t([253,9,248,251,207,208,255,192,128,128,128],u.t)
B.hM=t([175,13,224,243,193,185,249,198,255,255,128],u.t)
B.j9=t([73,17,171,221,161,179,236,167,255,234,128],u.t)
B.hE=t([B.ev,B.hM,B.j9],u.S)
B.hY=t([1,95,247,253,212,183,255,255,128,128,128],u.t)
B.fL=t([239,90,244,250,211,209,255,255,128,128,128],u.t)
B.iG=t([155,77,195,248,188,195,255,255,128,128,128],u.t)
B.i6=t([B.hY,B.fL,B.iG],u.S)
B.fi=t([1,24,239,251,218,219,255,205,128,128,128],u.t)
B.hO=t([201,51,219,255,196,186,128,128,128,128,128],u.t)
B.fK=t([69,46,190,239,201,218,255,228,128,128,128],u.t)
B.hW=t([B.fi,B.hO,B.fK],u.S)
B.f2=t([1,191,251,255,255,128,128,128,128,128,128],u.t)
B.h8=t([223,165,249,255,213,255,128,128,128,128,128],u.t)
B.hv=t([141,124,248,255,255,128,128,128,128,128,128],u.t)
B.il=t([B.f2,B.h8,B.hv],u.S)
B.fr=t([1,16,248,255,255,128,128,128,128,128,128],u.t)
B.ei=t([190,36,230,255,236,255,128,128,128,128,128],u.t)
B.e5=t([149,1,255,128,128,128,128,128,128,128,128],u.t)
B.dB=t([B.fr,B.ei,B.e5],u.S)
B.ht=t([1,226,255,128,128,128,128,128,128,128,128],u.t)
B.hH=t([247,192,255,128,128,128,128,128,128,128,128],u.t)
B.iF=t([240,128,255,128,128,128,128,128,128,128,128],u.t)
B.dg=t([B.ht,B.hH,B.iF],u.S)
B.iz=t([1,134,252,255,255,128,128,128,128,128,128],u.t)
B.hi=t([213,62,250,255,255,128,128,128,128,128,128],u.t)
B.iZ=t([55,93,255,128,128,128,128,128,128,128,128],u.t)
B.hs=t([B.iz,B.hi,B.iZ],u.S)
B.dW=t([B.hE,B.i6,B.hW,B.il,B.dB,B.dg,B.hs,B.be],u.o)
B.hk=t([202,24,213,235,186,191,220,160,240,175,255],u.t)
B.e1=t([126,38,182,232,169,184,228,174,255,187,128],u.t)
B.dD=t([61,46,138,219,151,178,240,170,255,216,128],u.t)
B.i4=t([B.hk,B.e1,B.dD],u.S)
B.fR=t([1,112,230,250,199,191,247,159,255,255,128],u.t)
B.dL=t([166,109,228,252,211,215,255,174,128,128,128],u.t)
B.h6=t([39,77,162,232,172,180,245,178,255,255,128],u.t)
B.i2=t([B.fR,B.dL,B.h6],u.S)
B.fT=t([1,52,220,246,198,199,249,220,255,255,128],u.t)
B.ep=t([124,74,191,243,183,193,250,221,255,255,128],u.t)
B.eW=t([24,71,130,219,154,170,243,182,255,255,128],u.t)
B.i1=t([B.fT,B.ep,B.eW],u.S)
B.eU=t([1,182,225,249,219,240,255,224,128,128,128],u.t)
B.iY=t([149,150,226,252,216,205,255,171,128,128,128],u.t)
B.jf=t([28,108,170,242,183,194,254,223,255,255,128],u.t)
B.iQ=t([B.eU,B.iY,B.jf],u.S)
B.jg=t([1,81,230,252,204,203,255,192,128,128,128],u.t)
B.ig=t([123,102,209,247,188,196,255,233,128,128,128],u.t)
B.iD=t([20,95,153,243,164,173,255,203,128,128,128],u.t)
B.ih=t([B.jg,B.ig,B.iD],u.S)
B.fw=t([1,222,248,255,216,213,128,128,128,128,128],u.t)
B.hh=t([168,175,246,252,235,205,255,255,128,128,128],u.t)
B.eZ=t([47,116,215,255,211,212,255,255,128,128,128],u.t)
B.ed=t([B.fw,B.hh,B.eZ],u.S)
B.fv=t([1,121,236,253,212,214,255,255,128,128,128],u.t)
B.fU=t([141,84,213,252,201,202,255,219,128,128,128],u.t)
B.hC=t([42,80,160,240,162,185,255,205,128,128,128],u.t)
B.f8=t([B.fv,B.fU,B.hC],u.S)
B.j4=t([244,1,255,128,128,128,128,128,128,128,128],u.t)
B.cR=t([238,1,255,128,128,128,128,128,128,128,128],u.t)
B.hI=t([B.bh,B.j4,B.cR],u.S)
B.d6=t([B.i4,B.i2,B.i1,B.iQ,B.ih,B.ed,B.f8,B.hI],u.o)
B.dC=t([B.el,B.i0,B.dW,B.d6],u.M)
B.bb=t([511,1023,2047,4095],u.t)
B.bc=t([63,207,243,252],u.t)
B.e7=t([8,8,4,2],u.t)
B.d2=t([173,148,140],u.t)
B.d3=t([176,155,140,135],u.t)
B.d0=t([180,157,141,134,130],u.t)
B.dd=t([254,254,243,230,196,177,153,140,133,130,129],u.t)
B.bd=t([B.d2,B.d3,B.d0,B.dd],u.S)
B.e9=t([0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576],u.t)
B.ef=t([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],u.t)
B.bf=t([0,1,3,7,15,31,63,127,255,511,1023,2047,4095],u.t)
B.a4=t([0,1,2,3,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,16,17,18,18,19,19,20,20,20,20,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29],u.t)
B.a5=t([0,1,1,2,4,8,1,1,2,4,8,4,8,4],u.t)
B.bg=t([2954,2956,2958,2962,2970,2986,3018,3082,3212,3468,3980,5004],u.t)
B.bi=t([280,256,256,256,40],u.t)
B.a6=t([62,62,30,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,588,588,588,588,588,588,588,588,1680,1680,20499,22547,24595,26643,1776,1776,1808,1808,-24557,-22509,-20461,-18413,1904,1904,1936,1936,-16365,-14317,782,782,782,782,814,814,814,814,-12269,-10221,10257,10257,12305,12305,14353,14353,16403,18451,1712,1712,1744,1744,28691,30739,-32749,-30701,-28653,-26605,2061,2061,2061,2061,2061,2061,2061,2061,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,750,750,750,750,1616,1616,1648,1648,1424,1424,1456,1456,1488,1488,1520,1520,1840,1840,1872,1872,1968,1968,8209,8209,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,1552,1552,1584,1584,2000,2000,2032,2032,976,976,1008,1008,1040,1040,1072,1072,1296,1296,1328,1328,718,718,718,718,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,4113,4113,6161,6161,848,848,880,880,912,912,944,944,622,622,622,622,654,654,654,654,1104,1104,1136,1136,1168,1168,1200,1200,1232,1232,1264,1264,686,686,686,686,1360,1360,1392,1392,12,12,12,12,12,12,12,12,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390],u.t)
B.ax=t([4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157],u.t)
B.bj=t([24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112],u.t)
B.ay=t([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284],u.t)
B.az=t([0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28],u.t)
B.bk=t([B.aU,B.ar,B.as],A.W("u<cv>"))
B.U=t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],u.t)
B.bl=t([254,253,251,247,239,223,191,127],u.t)
B.a7=t([12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8],u.t)
B.aA=t([A.pt(),A.pl(),A.pA(),A.py(),A.pv(),A.pu(),A.pw()],u.z)
B.bm=t([0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5],u.t)
B.aI=new A.a_(0,"whiteIsZero")
B.jJ=new A.a_(1,"blackIsZero")
B.jQ=new A.a_(2,"rgb")
B.aK=new A.a_(3,"palette")
B.jR=new A.a_(4,"transparencyMask")
B.c4=new A.a_(5,"cmyk")
B.jS=new A.a_(6,"yCbCr")
B.jT=new A.a_(7,"reserved7")
B.jU=new A.a_(8,"cieLab")
B.jV=new A.a_(9,"iccLab")
B.jK=new A.a_(10,"ituLab")
B.jL=new A.a_(11,"logL")
B.jM=new A.a_(12,"logLuv")
B.jN=new A.a_(13,"colorFilterArray")
B.jO=new A.a_(14,"linearRaw")
B.jP=new A.a_(15,"depth")
B.aJ=new A.a_(16,"unknown")
B.bo=t([B.aI,B.jJ,B.jQ,B.aK,B.jR,B.c4,B.jS,B.jT,B.jU,B.jV,B.jK,B.jL,B.jM,B.jN,B.jO,B.jP,B.aJ],A.W("u<a_>"))
B.bQ=new A.dZ(0,"source")
B.bR=new A.dZ(1,"over")
B.bq=t([B.bQ,B.bR],A.W("u<dZ>"))
B.jB=new A.c8(0,"invalid")
B.c2=new A.c8(1,"uint")
B.h=new A.c8(2,"int")
B.X=new A.c8(3,"float")
B.br=t([B.jB,B.c2,B.h,B.X],A.W("u<c8>"))
B.bs=t([17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15],u.t)
B.a8=t([-0.0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9],u.t)
B.bt=t([B.d,B.aZ,B.k,B.j,B.o,B.q,B.b3,B.M,B.b4,B.b5,B.b_,B.b0,B.b1,B.b2],A.W("u<a4>"))
B.bu=t([0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15],u.t)
B.cx=new A.aE(1,"rle")
B.cy=new A.aE(2,"zips")
B.cz=new A.aE(3,"zip")
B.cA=new A.aE(4,"piz")
B.cB=new A.aE(5,"pxr24")
B.cC=new A.aE(6,"b44")
B.cD=new A.aE(7,"b44a")
B.bv=t([B.aV,B.cx,B.cy,B.cz,B.cA,B.cB,B.cC,B.cD],A.W("u<aE>"))
B.hz=t([231,120,48,89,115,113,120,152,112],u.t)
B.d7=t([152,179,64,126,170,118,46,70,95],u.t)
B.fJ=t([175,69,143,80,85,82,72,155,103],u.t)
B.du=t([56,58,10,171,218,189,17,13,152],u.t)
B.h5=t([114,26,17,163,44,195,21,10,173],u.t)
B.hg=t([121,24,80,195,26,62,44,64,85],u.t)
B.h1=t([144,71,10,38,171,213,144,34,26],u.t)
B.ir=t([170,46,55,19,136,160,33,206,71],u.t)
B.eH=t([63,20,8,114,114,208,12,9,226],u.t)
B.fh=t([81,40,11,96,182,84,29,16,36],u.t)
B.cV=t([B.hz,B.d7,B.fJ,B.du,B.h5,B.hg,B.h1,B.ir,B.eH,B.fh],u.S)
B.eh=t([134,183,89,137,98,101,106,165,148],u.t)
B.ib=t([72,187,100,130,157,111,32,75,80],u.t)
B.hn=t([66,102,167,99,74,62,40,234,128],u.t)
B.df=t([41,53,9,178,241,141,26,8,107],u.t)
B.fd=t([74,43,26,146,73,166,49,23,157],u.t)
B.eP=t([65,38,105,160,51,52,31,115,128],u.t)
B.eS=t([104,79,12,27,217,255,87,17,7],u.t)
B.fH=t([87,68,71,44,114,51,15,186,23],u.t)
B.i3=t([47,41,14,110,182,183,21,17,194],u.t)
B.hK=t([66,45,25,102,197,189,23,18,22],u.t)
B.iE=t([B.eh,B.ib,B.hn,B.df,B.fd,B.eP,B.eS,B.fH,B.i3,B.hK],u.S)
B.hy=t([88,88,147,150,42,46,45,196,205],u.t)
B.h7=t([43,97,183,117,85,38,35,179,61],u.t)
B.eY=t([39,53,200,87,26,21,43,232,171],u.t)
B.fC=t([56,34,51,104,114,102,29,93,77],u.t)
B.fY=t([39,28,85,171,58,165,90,98,64],u.t)
B.eL=t([34,22,116,206,23,34,43,166,73],u.t)
B.cW=t([107,54,32,26,51,1,81,43,31],u.t)
B.iu=t([68,25,106,22,64,171,36,225,114],u.t)
B.eg=t([34,19,21,102,132,188,16,76,124],u.t)
B.iN=t([62,18,78,95,85,57,50,48,51],u.t)
B.et=t([B.hy,B.h7,B.eY,B.fC,B.fY,B.eL,B.cW,B.iu,B.eg,B.iN],u.S)
B.fV=t([193,101,35,159,215,111,89,46,111],u.t)
B.dV=t([60,148,31,172,219,228,21,18,111],u.t)
B.dz=t([112,113,77,85,179,255,38,120,114],u.t)
B.iK=t([40,42,1,196,245,209,10,25,109],u.t)
B.ft=t([88,43,29,140,166,213,37,43,154],u.t)
B.eN=t([61,63,30,155,67,45,68,1,209],u.t)
B.f3=t([100,80,8,43,154,1,51,26,71],u.t)
B.di=t([142,78,78,16,255,128,34,197,171],u.t)
B.fQ=t([41,40,5,102,211,183,4,1,221],u.t)
B.ez=t([51,50,17,168,209,192,23,25,82],u.t)
B.es=t([B.fV,B.dV,B.dz,B.iK,B.ft,B.eN,B.f3,B.di,B.fQ,B.ez],u.S)
B.eV=t([138,31,36,171,27,166,38,44,229],u.t)
B.eq=t([67,87,58,169,82,115,26,59,179],u.t)
B.hS=t([63,59,90,180,59,166,93,73,154],u.t)
B.iB=t([40,40,21,116,143,209,34,39,175],u.t)
B.dn=t([47,15,16,183,34,223,49,45,183],u.t)
B.e0=t([46,17,33,183,6,98,15,32,183],u.t)
B.jh=t([57,46,22,24,128,1,54,17,37],u.t)
B.f5=t([65,32,73,115,28,128,23,128,205],u.t)
B.hm=t([40,3,9,115,51,192,18,6,223],u.t)
B.fb=t([87,37,9,115,59,77,64,21,47],u.t)
B.fP=t([B.eV,B.eq,B.hS,B.iB,B.dn,B.e0,B.jh,B.f5,B.hm,B.fb],u.S)
B.j3=t([104,55,44,218,9,54,53,130,226],u.t)
B.dK=t([64,90,70,205,40,41,23,26,57],u.t)
B.hR=t([54,57,112,184,5,41,38,166,213],u.t)
B.eM=t([30,34,26,133,152,116,10,32,134],u.t)
B.hF=t([39,19,53,221,26,114,32,73,255],u.t)
B.ex=t([31,9,65,234,2,15,1,118,73],u.t)
B.fO=t([75,32,12,51,192,255,160,43,51],u.t)
B.eO=t([88,31,35,67,102,85,55,186,85],u.t)
B.fm=t([56,21,23,111,59,205,45,37,192],u.t)
B.fn=t([55,38,70,124,73,102,1,34,98],u.t)
B.j7=t([B.j3,B.dK,B.hR,B.eM,B.hF,B.ex,B.fO,B.eO,B.fm,B.fn],u.S)
B.fl=t([125,98,42,88,104,85,117,175,82],u.t)
B.eR=t([95,84,53,89,128,100,113,101,45],u.t)
B.hb=t([75,79,123,47,51,128,81,171,1],u.t)
B.dI=t([57,17,5,71,102,57,53,41,49],u.t)
B.hN=t([38,33,13,121,57,73,26,1,85],u.t)
B.iX=t([41,10,67,138,77,110,90,47,114],u.t)
B.fM=t([115,21,2,10,102,255,166,23,6],u.t)
B.ej=t([101,29,16,10,85,128,101,196,26],u.t)
B.f1=t([57,18,10,102,102,213,34,20,43],u.t)
B.fs=t([117,20,15,36,163,128,68,1,26],u.t)
B.fG=t([B.fl,B.eR,B.hb,B.dI,B.hN,B.iX,B.fM,B.ej,B.f1,B.fs],u.S)
B.f9=t([102,61,71,37,34,53,31,243,192],u.t)
B.iU=t([69,60,71,38,73,119,28,222,37],u.t)
B.fc=t([68,45,128,34,1,47,11,245,171],u.t)
B.d_=t([62,17,19,70,146,85,55,62,70],u.t)
B.jd=t([37,43,37,154,100,163,85,160,1],u.t)
B.iR=t([63,9,92,136,28,64,32,201,85],u.t)
B.ie=t([75,15,9,9,64,255,184,119,16],u.t)
B.eo=t([86,6,28,5,64,255,25,248,1],u.t)
B.hJ=t([56,8,17,132,137,255,55,116,128],u.t)
B.dE=t([58,15,20,82,135,57,26,121,40],u.t)
B.h0=t([B.f9,B.iU,B.fc,B.d_,B.jd,B.iR,B.ie,B.eo,B.hJ,B.dE],u.S)
B.he=t([164,50,31,137,154,133,25,35,218],u.t)
B.en=t([51,103,44,131,131,123,31,6,158],u.t)
B.iP=t([86,40,64,135,148,224,45,183,128],u.t)
B.fI=t([22,26,17,131,240,154,14,1,209],u.t)
B.dY=t([45,16,21,91,64,222,7,1,197],u.t)
B.iC=t([56,21,39,155,60,138,23,102,213],u.t)
B.j6=t([83,12,13,54,192,255,68,47,28],u.t)
B.ho=t([85,26,85,85,128,128,32,146,171],u.t)
B.fE=t([18,11,7,63,144,171,4,4,246],u.t)
B.eu=t([35,27,10,146,174,171,12,26,128],u.t)
B.fx=t([B.he,B.en,B.iP,B.fI,B.dY,B.iC,B.j6,B.ho,B.fE,B.eu],u.S)
B.i_=t([190,80,35,99,180,80,126,54,45],u.t)
B.iq=t([85,126,47,87,176,51,41,20,32],u.t)
B.hP=t([101,75,128,139,118,146,116,128,85],u.t)
B.ia=t([56,41,15,176,236,85,37,9,62],u.t)
B.dF=t([71,30,17,119,118,255,17,18,138],u.t)
B.h_=t([101,38,60,138,55,70,43,26,142],u.t)
B.fA=t([146,36,19,30,171,255,97,27,20],u.t)
B.hx=t([138,45,61,62,219,1,81,188,64],u.t)
B.iL=t([32,41,20,117,151,142,20,21,163],u.t)
B.is=t([112,19,12,61,195,128,48,4,24],u.t)
B.hV=t([B.i_,B.iq,B.hP,B.ia,B.dF,B.h_,B.fA,B.hx,B.iL,B.is],u.S)
B.bw=t([B.cV,B.iE,B.et,B.es,B.fP,B.j7,B.fG,B.h0,B.fx,B.hV],u.o)
B.ak=new A.ai(0,"none")
B.D=new A.ai(1,"palette")
B.c1=new A.ai(2,"rgb")
B.jv=new A.ai(3,"gray")
B.jw=new A.ai(4,"reserved4")
B.jx=new A.ai(5,"reserved5")
B.jy=new A.ai(6,"reserved6")
B.jz=new A.ai(7,"reserved7")
B.jA=new A.ai(8,"reserved8")
B.E=new A.ai(9,"paletteRle")
B.c0=new A.ai(10,"rgbRle")
B.ju=new A.ai(11,"grayRle")
B.bx=t([B.ak,B.D,B.c1,B.jv,B.jw,B.jx,B.jy,B.jz,B.jA,B.E,B.c0,B.ju],A.W("u<ai>"))
B.h9=t([0,1,1,1,0],u.t)
B.by=t([A.pd(),A.pk(),A.pm(),A.pf(),A.pi(),A.po(),A.ph(),A.pn(),A.pe(),A.pg()],u.z)
B.aw=t([8,0,8,0],u.t)
B.dJ=t([5,3,5,3],u.t)
B.dl=t([3,5,3,5],u.t)
B.b6=t([0,8,0,8],u.t)
B.ba=t([4,4,4,4],u.t)
B.dy=t([4,4,0,0],u.t)
B.bz=t([B.aw,B.dJ,B.dl,B.b6,B.aw,B.ba,B.dy,B.b6],u.S)
B.a9=t([80,88,23,71,30,30,62,62,4,4,4,4,4,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41],u.t)
B.N=t([0,1,4,5,16,17,20,21,64,65,68,69,80,81,84,85,256,257,260,261,272,273,276,277,320,321,324,325,336,337,340,341,1024,1025,1028,1029,1040,1041,1044,1045,1088,1089,1092,1093,1104,1105,1108,1109,1280,1281,1284,1285,1296,1297,1300,1301,1344,1345,1348,1349,1360,1361,1364,1365,4096,4097,4100,4101,4112,4113,4116,4117,4160,4161,4164,4165,4176,4177,4180,4181,4352,4353,4356,4357,4368,4369,4372,4373,4416,4417,4420,4421,4432,4433,4436,4437,5120,5121,5124,5125,5136,5137,5140,5141,5184,5185,5188,5189,5200,5201,5204,5205,5376,5377,5380,5381,5392,5393,5396,5397,5440,5441,5444,5445,5456,5457,5460,5461,16384,16385,16388,16389,16400,16401,16404,16405,16448,16449,16452,16453,16464,16465,16468,16469,16640,16641,16644,16645,16656,16657,16660,16661,16704,16705,16708,16709,16720,16721,16724,16725,17408,17409,17412,17413,17424,17425,17428,17429,17472,17473,17476,17477,17488,17489,17492,17493,17664,17665,17668,17669,17680,17681,17684,17685,17728,17729,17732,17733,17744,17745,17748,17749,20480,20481,20484,20485,20496,20497,20500,20501,20544,20545,20548,20549,20560,20561,20564,20565,20736,20737,20740,20741,20752,20753,20756,20757,20800,20801,20804,20805,20816,20817,20820,20821,21504,21505,21508,21509,21520,21521,21524,21525,21568,21569,21572,21573,21584,21585,21588,21589,21760,21761,21764,21765,21776,21777,21780,21781,21824,21825,21828,21829,21840,21841,21844,21845],u.t)
B.bA=t([127,127,191,127,159,191,223,127,143,159,175,191,207,223,239,127,135,143,151,159,167,175,183,191,199,207,215,223,231,239,247,127,131,135,139,143,147,151,155,159,163,167,171,175,179,183,187,191,195,199,203,207,211,215,219,223,227,231,235,239,243,247,251,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251,253,127],u.t)
B.aa=t([7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],u.t)
B.C=t([28679,28679,31752,-32759,-31735,-30711,-29687,-28663,29703,29703,30727,30727,-27639,-26615,-25591,-24567],u.t)
B.ab=t([6430,6400,6400,6400,3225,3225,3225,3225,944,944,944,944,976,976,976,976,1456,1456,1456,1456,1488,1488,1488,1488,718,718,718,718,718,718,718,718,750,750,750,750,750,750,750,750,1520,1520,1520,1520,1552,1552,1552,1552,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,654,654,654,654,654,654,654,654,1072,1072,1072,1072,1104,1104,1104,1104,1136,1136,1136,1136,1168,1168,1168,1168,1200,1200,1200,1200,1232,1232,1232,1232,622,622,622,622,622,622,622,622,1008,1008,1008,1008,1040,1040,1040,1040,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,1712,1712,1712,1712,1744,1744,1744,1744,846,846,846,846,846,846,846,846,1264,1264,1264,1264,1296,1296,1296,1296,1328,1328,1328,1328,1360,1360,1360,1360,1392,1392,1392,1392,1424,1424,1424,1424,686,686,686,686,686,686,686,686,910,910,910,910,910,910,910,910,1968,1968,1968,1968,2000,2000,2000,2000,2032,2032,2032,2032,16,16,16,16,10257,10257,10257,10257,12305,12305,12305,12305,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,878,878,878,878,878,878,878,878,1904,1904,1904,1904,1936,1936,1936,1936,-18413,-18413,-16365,-16365,-14317,-14317,-10221,-10221,590,590,590,590,590,590,590,590,782,782,782,782,782,782,782,782,1584,1584,1584,1584,1616,1616,1616,1616,1648,1648,1648,1648,1680,1680,1680,1680,814,814,814,814,814,814,814,814,1776,1776,1776,1776,1808,1808,1808,1808,1840,1840,1840,1840,1872,1872,1872,1872,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,14353,14353,14353,14353,16401,16401,16401,16401,22547,22547,24595,24595,20497,20497,20497,20497,18449,18449,18449,18449,26643,26643,28691,28691,30739,30739,-32749,-32749,-30701,-30701,-28653,-28653,-26605,-26605,-24557,-24557,-22509,-22509,-20461,-20461,8207,8207,8207,8207,8207,8207,8207,8207,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232],u.t)
B.ad=t([0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0],u.t)
B.jj=new A.bt(0,"none")
B.jk=new A.bt(1,"sub")
B.jl=new A.bt(2,"up")
B.jm=new A.bt(3,"average")
B.jn=new A.bt(4,"paeth")
B.ae=t([B.jj,B.jk,B.jl,B.jm,B.jn],A.W("u<bt>"))
B.z=t([0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117],u.t)
B.w=t([0,1,3,7,15,31,63,127,255],u.t)
B.af=t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],u.t)
B.r=t([255,255,255,255,255,255,255,255,255,255,255],u.t)
B.P=t([B.r,B.r,B.r],u.S)
B.fB=t([176,246,255,255,255,255,255,255,255,255,255],u.t)
B.j_=t([223,241,252,255,255,255,255,255,255,255,255],u.t)
B.ec=t([249,253,253,255,255,255,255,255,255,255,255],u.t)
B.fN=t([B.fB,B.j_,B.ec],u.S)
B.fj=t([255,244,252,255,255,255,255,255,255,255,255],u.t)
B.f7=t([234,254,254,255,255,255,255,255,255,255,255],u.t)
B.bF=t([253,255,255,255,255,255,255,255,255,255,255],u.t)
B.em=t([B.fj,B.f7,B.bF],u.S)
B.iO=t([255,246,254,255,255,255,255,255,255,255,255],u.t)
B.hG=t([239,253,254,255,255,255,255,255,255,255,255],u.t)
B.bB=t([254,255,254,255,255,255,255,255,255,255,255],u.t)
B.ic=t([B.iO,B.hG,B.bB],u.S)
B.bn=t([255,248,254,255,255,255,255,255,255,255,255],u.t)
B.eD=t([251,255,254,255,255,255,255,255,255,255,255],u.t)
B.hf=t([B.bn,B.eD,B.r],u.S)
B.av=t([255,253,254,255,255,255,255,255,255,255,255],u.t)
B.hd=t([251,254,254,255,255,255,255,255,255,255,255],u.t)
B.eK=t([B.av,B.hd,B.bB],u.S)
B.ds=t([255,254,253,255,254,255,255,255,255,255,255],u.t)
B.ff=t([250,255,254,255,254,255,255,255,255,255,255],u.t)
B.ac=t([254,255,255,255,255,255,255,255,255,255,255],u.t)
B.fu=t([B.ds,B.ff,B.ac],u.S)
B.f0=t([B.P,B.fN,B.em,B.ic,B.hf,B.eK,B.fu,B.P],u.o)
B.d5=t([217,255,255,255,255,255,255,255,255,255,255],u.t)
B.fy=t([225,252,241,253,255,255,254,255,255,255,255],u.t)
B.hQ=t([234,250,241,250,253,255,253,254,255,255,255],u.t)
B.it=t([B.d5,B.fy,B.hQ],u.S)
B.aC=t([255,254,255,255,255,255,255,255,255,255,255],u.t)
B.ee=t([223,254,254,255,255,255,255,255,255,255,255],u.t)
B.dZ=t([238,253,254,254,255,255,255,255,255,255,255],u.t)
B.hD=t([B.aC,B.ee,B.dZ],u.S)
B.fa=t([249,254,255,255,255,255,255,255,255,255,255],u.t)
B.iM=t([B.bn,B.fa,B.r],u.S)
B.iv=t([255,253,255,255,255,255,255,255,255,255,255],u.t)
B.hc=t([247,254,255,255,255,255,255,255,255,255,255],u.t)
B.h3=t([B.iv,B.hc,B.r],u.S)
B.dU=t([252,255,255,255,255,255,255,255,255,255,255],u.t)
B.dh=t([B.av,B.dU,B.r],u.S)
B.bH=t([255,254,254,255,255,255,255,255,255,255,255],u.t)
B.dX=t([B.bH,B.bF,B.r],u.S)
B.hB=t([255,254,253,255,255,255,255,255,255,255,255],u.t)
B.bp=t([250,255,255,255,255,255,255,255,255,255,255],u.t)
B.dT=t([B.hB,B.bp,B.ac],u.S)
B.dv=t([B.it,B.hD,B.iM,B.h3,B.dh,B.dX,B.dT,B.P],u.o)
B.hX=t([186,251,250,255,255,255,255,255,255,255,255],u.t)
B.eA=t([234,251,244,254,255,255,255,255,255,255,255],u.t)
B.id=t([251,251,243,253,254,255,254,255,255,255,255],u.t)
B.eI=t([B.hX,B.eA,B.id],u.S)
B.eF=t([236,253,254,255,255,255,255,255,255,255,255],u.t)
B.hA=t([251,253,253,254,254,255,255,255,255,255,255],u.t)
B.fo=t([B.av,B.eF,B.hA],u.S)
B.hZ=t([254,254,254,255,255,255,255,255,255,255,255],u.t)
B.eB=t([B.bH,B.hZ,B.r],u.S)
B.ii=t([254,254,255,255,255,255,255,255,255,255,255],u.t)
B.eE=t([B.aC,B.ii,B.ac],u.S)
B.bI=t([B.r,B.ac,B.r],u.S)
B.dt=t([B.eI,B.fo,B.eB,B.eE,B.bI,B.P,B.P,B.P],u.o)
B.fe=t([248,255,255,255,255,255,255,255,255,255,255],u.t)
B.eQ=t([250,254,252,254,255,255,255,255,255,255,255],u.t)
B.ey=t([248,254,249,253,255,255,255,255,255,255,255],u.t)
B.fq=t([B.fe,B.eQ,B.ey],u.S)
B.dq=t([255,253,253,255,255,255,255,255,255,255,255],u.t)
B.iy=t([246,253,253,255,255,255,255,255,255,255,255],u.t)
B.eJ=t([252,254,251,254,254,255,255,255,255,255,255],u.t)
B.ix=t([B.dq,B.iy,B.eJ],u.S)
B.jc=t([255,254,252,255,255,255,255,255,255,255,255],u.t)
B.ew=t([248,254,253,255,255,255,255,255,255,255,255],u.t)
B.dS=t([253,255,254,254,255,255,255,255,255,255,255],u.t)
B.hl=t([B.jc,B.ew,B.dS],u.S)
B.j5=t([255,251,254,255,255,255,255,255,255,255,255],u.t)
B.fW=t([245,251,254,255,255,255,255,255,255,255,255],u.t)
B.fZ=t([253,253,254,255,255,255,255,255,255,255,255],u.t)
B.e8=t([B.j5,B.fW,B.fZ],u.S)
B.ea=t([255,251,253,255,255,255,255,255,255,255,255],u.t)
B.fk=t([252,253,254,255,255,255,255,255,255,255,255],u.t)
B.i5=t([B.ea,B.fk,B.aC],u.S)
B.dO=t([255,252,255,255,255,255,255,255,255,255,255],u.t)
B.j2=t([249,255,254,255,255,255,255,255,255,255,255],u.t)
B.eT=t([255,255,254,255,255,255,255,255,255,255,255],u.t)
B.cZ=t([B.dO,B.j2,B.eT],u.S)
B.je=t([255,255,253,255,255,255,255,255,255,255,255],u.t)
B.eC=t([B.je,B.bp,B.r],u.S)
B.dR=t([B.fq,B.ix,B.hl,B.e8,B.i5,B.cZ,B.eC,B.bI],u.o)
B.io=t([B.f0,B.dv,B.dt,B.dR],u.M)
B.c7=new A.a3(1,"rle8")
B.cc=new A.a3(2,"rle4")
B.cd=new A.a3(4,"jpeg")
B.ce=new A.a3(5,"png")
B.cf=new A.a3(7,"reserved7")
B.cg=new A.a3(8,"reserved8")
B.ch=new A.a3(9,"reserved9")
B.c8=new A.a3(10,"reserved10")
B.c9=new A.a3(11,"cmyk")
B.ca=new A.a3(12,"cmykRle8")
B.cb=new A.a3(13,"cmykRle4")
B.ag=t([B.aN,B.c7,B.cc,B.ap,B.cd,B.ce,B.aq,B.cf,B.cg,B.ch,B.c8,B.c9,B.ca,B.cb],A.W("u<a3>"))
B.O=t([0,128,192,224,240,248,252,254,255],u.t)
B.bC=t([137,80,78,71,13,10,26,10],u.t)
B.V=t([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215,33554431,67108863,134217727,268435455,536870911,1073741823,2147483647,4294967295],u.t)
B.bD=t([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258],u.t)
B.bE=t([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],u.t)
B.c5=new A.c9(0,"predictor")
B.k9=new A.c9(1,"crossColor")
B.ka=new A.c9(2,"subtractGreen")
B.c6=new A.c9(3,"colorIndexing")
B.bG=t([B.c5,B.k9,B.ka,B.c6],A.W("u<c9>"))
B.t=t([0,17,34,51,68,85,102,119,136,153,170,187,204,221,238,255],u.t)
B.iS=t([73,67,67,95,80,82,79,70,73,76,69,0],u.t)
B.bJ=t([A.pp(),A.pj(),A.pz(),A.px(),A.pr(),A.pq(),A.ps()],u.z)
B.bK=t([0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396],u.t)
B.bL=t([null,A.pP(),A.pQ(),A.pO()],A.W("u<~(i,i,i,i,i,b8)?>"))
B.ah=t([0,36,72,109,145,182,218,255],u.t)
B.p=t([0,8,16,24,32,41,49,57,65,74,82,90,98,106,115,123,131,139,148,156,164,172,180,189,197,205,213,222,230,238,246,255],u.t)
B.j1=t([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8],u.t)
B.jq=new A.aI(0,"bitmap")
B.bX=new A.aI(1,"grayscale")
B.jr=new A.aI(2,"indexed")
B.bY=new A.aI(3,"rgb")
B.bZ=new A.aI(4,"cmyk")
B.js=new A.aI(5,"multiChannel")
B.jt=new A.aI(6,"duoTone")
B.c_=new A.aI(7,"lab")
B.bM=t([B.jq,B.bX,B.jr,B.bY,B.bZ,B.js,B.jt,B.c_],A.W("u<aI>"))
B.j8=t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0],u.t)
B.db=t([2,6,2,6],u.t)
B.dP=t([6,2,6,2],u.t)
B.da=t([2,2,6,6],u.t)
B.d4=t([1,3,3,9],u.t)
B.dw=t([4,0,12,0],u.t)
B.dj=t([3,1,9,3],u.t)
B.e6=t([8,8,0,0],u.t)
B.dx=t([4,12,0,0],u.t)
B.d1=t([16,0,0,0],u.t)
B.cY=t([12,4,0,0],u.t)
B.dQ=t([6,6,2,2],u.t)
B.dm=t([3,9,1,3],u.t)
B.cX=t([12,0,4,0],u.t)
B.eb=t([9,3,3,1],u.t)
B.m=t([B.ba,B.db,B.aw,B.dP,B.da,B.d4,B.dw,B.dj,B.e6,B.dx,B.d1,B.cY,B.dQ,B.dm,B.cX,B.eb],u.S)
B.Q=t([0,-128,64,-64,32,-96,96,-32,16,-112,80,-48,48,-80,112,-16,8,-120,72,-56,40,-88,104,-24,24,-104,88,-40,56,-72,120,-8,4,-124,68,-60,36,-92,100,-28,20,-108,84,-44,52,-76,116,-12,12,-116,76,-52,44,-84,108,-20,28,-100,92,-36,60,-68,124,-4,2,-126,66,-62,34,-94,98,-30,18,-110,82,-46,50,-78,114,-14,10,-118,74,-54,42,-86,106,-22,26,-102,90,-38,58,-70,122,-6,6,-122,70,-58,38,-90,102,-26,22,-106,86,-42,54,-74,118,-10,14,-114,78,-50,46,-82,110,-18,30,-98,94,-34,62,-66,126,-2,1,-127,65,-63,33,-95,97,-31,17,-111,81,-47,49,-79,113,-15,9,-119,73,-55,41,-87,105,-23,25,-103,89,-39,57,-71,121,-7,5,-123,69,-59,37,-91,101,-27,21,-107,85,-43,53,-75,117,-11,13,-115,77,-51,45,-83,109,-19,29,-99,93,-35,61,-67,125,-3,3,-125,67,-61,35,-93,99,-29,19,-109,83,-45,51,-77,115,-13,11,-117,75,-53,43,-85,107,-21,27,-101,91,-37,59,-69,123,-5,7,-121,71,-57,39,-89,103,-25,23,-105,87,-41,55,-73,119,-9,15,-113,79,-49,47,-81,111,-17,31,-97,95,-33,63,-65,127,-1],u.t)
B.bN=new A.bI([34665,"exif",40965,"interop",34853,"gps"],A.W("bI<i,S>"))
B.bO=new A.bI([B.v,1,B.x,3,B.y,15,B.f,255,B.l,65535,B.H,4294967295,B.J,127,B.K,32767,B.L,2147483647,B.A,1,B.G,1,B.I,1],A.W("bI<af,i>"))
B.jo=new A.fw(0,"none")
B.jp=new A.fw(4,"paeth")
B.W=new A.bu(0,"invalid")
B.bU=new A.bu(1,"pbm")
B.bV=new A.bu(2,"pgm2")
B.aF=new A.bu(3,"pgm5")
B.bW=new A.bu(4,"ppm3")
B.aG=new A.bu(5,"ppm6")
B.aH=new A.aB(0,"bilevel")
B.jC=new A.aB(1,"gray4bit")
B.jD=new A.aB(2,"gray")
B.jE=new A.aB(3,"grayAlpha")
B.jF=new A.aB(4,"palette")
B.c3=new A.aB(5,"rgb")
B.jG=new A.aB(6,"rgba")
B.jH=new A.aB(7,"yCbCrSub")
B.Y=new A.aB(8,"generic")
B.jI=new A.aB(9,"invalid")
B.jW=A.aN("pR")
B.jX=A.aN("m7")
B.jY=A.aN("j8")
B.jZ=A.aN("hl")
B.k_=A.aN("hz")
B.k0=A.aN("dt")
B.k1=A.aN("jb")
B.k2=A.aN("P")
B.k3=A.aN("jB")
B.k4=A.aN("b7")
B.k5=A.aN("mY")
B.k6=A.aN("b8")
B.k7=new A.fU(!1)
B.k8=new A.fU(!0)
B.Z=new A.d1(0,"undefined")
B.aM=new A.d1(1,"lossy")
B.al=new A.d1(2,"lossless")
B.kb=new A.d1(3,"animated")
B.am=new A.d3(0,"none")
B.kc=new A.d3(1,"partial")
B.kd=new A.d3(2,"full")
B.a_=new A.d3(3,"finish")})();(function staticFields(){$.it=null
$.aw=A.k([],A.W("u<P>"))
$.kJ=null
$.k8=null
$.k7=null
$.lu=null
$.lm=null
$.lw=null
$.iI=null
$.iV=null
$.jR=null
$.iu=A.k([],A.W("u<r<P>?>"))
$.bi=A.kW()
$.jK=null
$.kU=!1
$.nC=A.k([A.jW(),A.pB(),A.pG(),A.pH(),A.pI(),A.pJ(),A.pK(),A.pL(),A.pM(),A.pN(),A.pC(),A.pD(),A.pE(),A.pF(),A.jW(),A.jW()],A.W("u<i(i,b7,i)>"))
$.L=null
$.ke=A.kW()})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal,s=hunkHelpers.lazy
t($,"pT","lA",()=>A.iQ("_$dart_dartClosure"))
t($,"pS","jX",()=>A.iQ("_$dart_dartClosure_dartJSInterop"))
t($,"qy","lX",()=>A.k([new J.fe()],A.W("u<e3>")))
t($,"q_","lE",()=>A.b6(A.i5({
toString:function(){return"$receiver$"}})))
t($,"q0","lF",()=>A.b6(A.i5({$method$:null,
toString:function(){return"$receiver$"}})))
t($,"q1","lG",()=>A.b6(A.i5(null)))
t($,"q2","lH",()=>A.b6(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
t($,"q5","lK",()=>A.b6(A.i5(void 0)))
t($,"q6","lL",()=>A.b6(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
t($,"q4","lJ",()=>A.b6(A.kQ(null)))
t($,"q3","lI",()=>A.b6(function(){try{null.$method$}catch(r){return r.message}}()))
t($,"q8","lN",()=>A.b6(A.kQ(void 0)))
t($,"q7","lM",()=>A.b6(function(){try{(void 0).$method$}catch(r){return r.message}}()))
t($,"qj","lT",()=>A.fp(4096))
t($,"qh","lR",()=>new A.iB().$0())
t($,"qi","lS",()=>new A.iA().$0())
t($,"qx","h8",()=>A.jU(B.k2))
t($,"qg","lQ",()=>A.jG(B.a7,B.au,257,286,15))
t($,"qf","lP",()=>A.jG(B.bm,B.U,0,30,15))
t($,"qe","lO",()=>A.jG(null,B.dc,0,19,7))
t($,"pV","lC",()=>A.eU(B.j1))
t($,"pU","lB",()=>A.eU(B.ef))
t($,"qA","k0",()=>{var r=null,q="ISOSpeed"
return A.mD([11,A.h("ProcessingSoftware",B.k,r),254,A.h("SubfileType",B.o,1),255,A.h("OldSubfileType",B.o,1),256,A.h("ImageWidth",B.o,1),257,A.h("ImageLength",B.o,1),258,A.h("BitsPerSample",B.j,1),259,A.h("Compression",B.j,1),262,A.h("PhotometricInterpretation",B.j,1),263,A.h("Thresholding",B.j,1),264,A.h("CellWidth",B.j,1),265,A.h("CellLength",B.j,1),266,A.h("FillOrder",B.j,1),269,A.h("DocumentName",B.k,r),270,A.h("ImageDescription",B.k,r),271,A.h("Make",B.k,r),272,A.h("Model",B.k,r),273,A.h("StripOffsets",B.o,r),274,A.h("Orientation",B.j,1),277,A.h("SamplesPerPixel",B.j,1),278,A.h("RowsPerStrip",B.o,1),279,A.h("StripByteCounts",B.o,1),280,A.h("MinSampleValue",B.j,1),281,A.h("MaxSampleValue",B.j,1),282,A.h("XResolution",B.q,1),283,A.h("YResolution",B.q,1),284,A.h("PlanarConfiguration",B.j,1),285,A.h("PageName",B.k,r),286,A.h("XPosition",B.q,1),287,A.h("YPosition",B.q,1),290,A.h("GrayResponseUnit",B.j,1),291,A.h("GrayResponseCurve",B.d,r),292,A.h("T4Options",B.d,r),293,A.h("T6Options",B.d,r),296,A.h("ResolutionUnit",B.j,1),297,A.h("PageNumber",B.j,2),300,A.h("ColorResponseUnit",B.d,r),301,A.h("TransferFunction",B.j,768),305,A.h("Software",B.k,r),306,A.h("DateTime",B.k,r),315,A.h("Artist",B.k,r),316,A.h("HostComputer",B.k,r),317,A.h("Predictor",B.j,1),318,A.h("WhitePoint",B.q,2),319,A.h("PrimaryChromaticities",B.q,6),320,A.h("ColorMap",B.j,r),321,A.h("HalftoneHints",B.j,2),322,A.h("TileWidth",B.o,1),323,A.h("TileLength",B.o,1),324,A.h("TileOffsets",B.o,r),325,A.h("TileByteCounts",B.d,r),326,A.h("BadFaxLines",B.d,r),327,A.h("CleanFaxData",B.d,r),328,A.h("ConsecutiveBadFaxLines",B.d,r),332,A.h("InkSet",B.d,r),333,A.h("InkNames",B.d,r),334,A.h("NumberofInks",B.d,r),336,A.h("DotRange",B.d,r),337,A.h("TargetPrinter",B.k,r),338,A.h("ExtraSamples",B.d,r),339,A.h("SampleFormat",B.j,1),340,A.h("SMinSampleValue",B.d,r),341,A.h("SMaxSampleValue",B.d,r),342,A.h("TransferRange",B.d,r),343,A.h("ClipPath",B.d,r),512,A.h("JPEGProc",B.d,r),513,A.h("JPEGInterchangeFormat",B.d,r),514,A.h("JPEGInterchangeFormatLength",B.d,r),529,A.h("YCbCrCoefficients",B.q,3),530,A.h("YCbCrSubSampling",B.j,1),531,A.h("YCbCrPositioning",B.j,1),532,A.h("ReferenceBlackWhite",B.q,6),700,A.h("ApplicationNotes",B.j,1),18246,A.h("Rating",B.j,1),33421,A.h("CFARepeatPatternDim",B.d,r),33422,A.h("CFAPattern",B.d,r),33423,A.h("BatteryLevel",B.d,r),33432,A.h("Copyright",B.k,r),33434,A.h("ExposureTime",B.q,1),33437,A.h("FNumber",B.q,r),33723,A.h("IPTC-NAA",B.o,1),34665,A.h("ExifOffset",B.d,r),34675,A.h("InterColorProfile",B.d,r),34850,A.h("ExposureProgram",B.j,1),34852,A.h("SpectralSensitivity",B.k,r),34853,A.h("GPSOffset",B.d,r),34855,A.h(q,B.o,1),34856,A.h("OECF",B.d,r),34864,A.h("SensitivityType",B.j,1),34866,A.h("RecommendedExposureIndex",B.o,1),34867,A.h(q,B.o,1),36864,A.h("ExifVersion",B.M,r),36867,A.h("DateTimeOriginal",B.k,r),36868,A.h("DateTimeDigitized",B.k,r),36880,A.h("OffsetTime",B.k,r),36881,A.h("OffsetTimeOriginal",B.k,r),36882,A.h("OffsetTimeDigitized",B.k,r),37121,A.h("ComponentsConfiguration",B.M,r),37122,A.h("CompressedBitsPerPixel",B.d,r),37377,A.h("ShutterSpeedValue",B.d,r),37378,A.h("ApertureValue",B.d,r),37379,A.h("BrightnessValue",B.d,r),37380,A.h("ExposureBiasValue",B.d,r),37381,A.h("MaxApertureValue",B.d,r),37382,A.h("SubjectDistance",B.d,r),37383,A.h("MeteringMode",B.d,r),37384,A.h("LightSource",B.d,r),37385,A.h("Flash",B.d,r),37386,A.h("FocalLength",B.d,r),37396,A.h("SubjectArea",B.d,r),37500,A.h("MakerNote",B.M,r),37510,A.h("UserComment",B.M,r),37520,A.h("SubSecTime",B.d,r),37521,A.h("SubSecTimeOriginal",B.d,r),37522,A.h("SubSecTimeDigitized",B.d,r),40091,A.h("XPTitle",B.d,r),40092,A.h("XPComment",B.d,r),40093,A.h("XPAuthor",B.d,r),40094,A.h("XPKeywords",B.d,r),40095,A.h("XPSubject",B.d,r),40960,A.h("FlashPixVersion",B.d,r),40961,A.h("ColorSpace",B.j,1),40962,A.h("ExifImageWidth",B.j,1),40963,A.h("ExifImageLength",B.j,1),40964,A.h("RelatedSoundFile",B.d,r),40965,A.h("InteroperabilityOffset",B.d,r),41483,A.h("FlashEnergy",B.d,r),41484,A.h("SpatialFrequencyResponse",B.d,r),41486,A.h("FocalPlaneXResolution",B.d,r),41487,A.h("FocalPlaneYResolution",B.d,r),41488,A.h("FocalPlaneResolutionUnit",B.d,r),41492,A.h("SubjectLocation",B.d,r),41493,A.h("ExposureIndex",B.d,r),41495,A.h("SensingMethod",B.d,r),41728,A.h("FileSource",B.d,r),41729,A.h("SceneType",B.d,r),41730,A.h("CVAPattern",B.d,r),41985,A.h("CustomRendered",B.d,r),41986,A.h("ExposureMode",B.d,r),41987,A.h("WhiteBalance",B.d,r),41988,A.h("DigitalZoomRatio",B.d,r),41989,A.h("FocalLengthIn35mmFilm",B.d,r),41990,A.h("SceneCaptureType",B.d,r),41991,A.h("GainControl",B.d,r),41992,A.h("Contrast",B.d,r),41993,A.h("Saturation",B.d,r),41994,A.h("Sharpness",B.d,r),41995,A.h("DeviceSettingDescription",B.d,r),41996,A.h("SubjectDistanceRange",B.d,r),42016,A.h("ImageUniqueID",B.d,r),42032,A.h("CameraOwnerName",B.k,r),42033,A.h("BodySerialNumber",B.k,r),42034,A.h("LensSpecification",B.d,r),42035,A.h("LensMake",B.k,r),42036,A.h("LensModel",B.k,r),42037,A.h("LensSerialNumber",B.k,r),42240,A.h("Gamma",B.q,1),50341,A.h("PrintIM",B.d,r),59932,A.h("Padding",B.d,r),59933,A.h("OffsetSchema",B.d,r),65e3,A.h("OwnerName",B.k,r),65001,A.h("SerialNumber",B.k,r)],u.p,A.W("eM"))})
t($,"pW","h6",()=>A.mO(A.k([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63],u.t)))
s($,"q9","h7",()=>A.fp(511))
s($,"qa","iZ",()=>A.fp(511))
s($,"qc","j_",()=>A.kD(2041))
s($,"qd","j0",()=>A.kD(225))
s($,"qb","ap",()=>A.fp(766))
t($,"pY","lD",()=>A.ks(0,0,0))
t($,"qv","ad",()=>A.fp(1))
t($,"qw","ak",()=>A.mx(B.e.gv($.ad()),0,null))
t($,"qo","ac",()=>A.mK(1))
t($,"qp","aj",()=>J.lY(B.u.gv($.ac()),0,null))
t($,"qq","I",()=>A.mM(1))
t($,"qs","Z",()=>J.lZ(B.n.gv($.I()),0,null))
t($,"qr","bC",()=>A.mo(B.n.gv($.I())))
t($,"qm","jZ",()=>A.mH(1))
t($,"qn","lV",()=>A.kR(B.R.gv($.jZ()),0))
t($,"qk","jY",()=>A.mE(1))
t($,"ql","lU",()=>A.kR(B.ai.gv($.jY()),0))
t($,"qt","k_",()=>A.mX(1))
t($,"qu","lW",()=>{var r=$.k_()
return A.mp(r.gv(r))})})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.bT,SharedArrayBuffer:A.bT,ArrayBufferView:A.dJ,DataView:A.fo,Float32Array:A.bU,Float64Array:A.dF,Int16Array:A.dG,Int32Array:A.dH,Int8Array:A.dI,Uint16Array:A.dK,Uint32Array:A.dL,Uint8ClampedArray:A.dM,CanvasPixelArray:A.dM,Uint8Array:A.br})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.a8.$nativeSuperclassTag="ArrayBufferView"
A.em.$nativeSuperclassTag="ArrayBufferView"
A.en.$nativeSuperclassTag="ArrayBufferView"
A.bq.$nativeSuperclassTag="ArrayBufferView"
A.eo.$nativeSuperclassTag="ArrayBufferView"
A.ep.$nativeSuperclassTag="ArrayBufferView"
A.as.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$5=function(a,b,c,d,e){return this(a,b,c,d,e)}
Function.prototype.$6=function(a,b,c,d,e,f){return this(a,b,c,d,e,f)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r){t[r].removeEventListener("load",onLoad,false)}a(b.target)}for(var s=0;s<t.length;++s){t[s].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var t=A.p2
if(typeof dartMainRunner==="function"){dartMainRunner(t,[])}else{t([])}})})()