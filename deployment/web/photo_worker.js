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
if(a[b]!==t){A.pc(b)}a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a,b){if(b!=null)A.k(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t){convertToFastObject(a[t])}}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.jQ(b)
return new t(c,this)}:function(){if(t===null)t=A.jQ(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.jQ(a).prototype
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
iT(a){var t,s,r,q,p,o="_$dart_js",n=a[v.dispatchPropertyName]
if(n==null)if($.jR==null){A.oZ()
n=a[v.dispatchPropertyName]}if(n!=null){t=n.p
if(!1===t)return n.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return n.i
if(n.e===s)throw A.f(A.kS("Return interceptor for "+A.z(t(a,n))))}r=a.constructor
if(r==null)q=null
else{p=$.iv
if(p==null)p=$.iv=A.iS(o)
q=r[p]}if(q!=null)return q
q=A.p4(a)
if(q!=null)return q
if(typeof a=="function")return B.cO
t=Object.getPrototypeOf(a)
if(t==null)return B.bO
if(t===Object.prototype)return B.bO
if(typeof r=="function"){p=$.iv
if(p==null)p=$.iv=A.iS(o)
Object.defineProperty(r,p,{value:B.aL,enumerable:false,writable:true,configurable:true})
return B.aL}return B.aL},
ky(a,b){if(a<0||a>4294967295)throw A.f(A.ag(a,0,4294967295,"length",null))
return J.kz(new Array(a),b)},
a9(a,b){if(a<0||a>4294967295)throw A.f(A.ag(a,0,4294967295,"length",null))
return J.kz(new Array(a),b)},
je(a,b){if(a<0)throw A.f(A.bg("Length must be a non-negative integer: "+a))
return A.k(new Array(a),b.A("u<0>"))},
fd(a,b){if(a<0)throw A.f(A.bg("Length must be a non-negative integer: "+a))
return A.k(new Array(a),b.A("u<0>"))},
kz(a,b){var t=A.k(a,b.A("u<0>"))
t.$flags=1
return t},
kA(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
mC(a,b){var t,s
for(t=a.length;b<t;){s=a.charCodeAt(b)
if(s!==32&&s!==13&&!J.kA(s))break;++b}return b},
mD(a,b){var t,s,r
for(t=a.length;b>0;b=s){s=b-1
if(!(s<t))return A.a(a,s)
r=a.charCodeAt(s)
if(r!==32&&r!==13&&!J.kA(r))break}return b},
cc(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dx.prototype
return J.ff.prototype}if(typeof a=="string")return J.cJ.prototype
if(a==null)return J.dy.prototype
if(typeof a=="boolean")return J.fe.prototype
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b4.prototype
if(typeof a=="symbol")return J.cL.prototype
if(typeof a=="bigint")return J.cK.prototype
return a}if(a instanceof A.O)return a
return J.iT(a)},
a1(a){if(typeof a=="string")return J.cJ.prototype
if(a==null)return a
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b4.prototype
if(typeof a=="symbol")return J.cL.prototype
if(typeof a=="bigint")return J.cK.prototype
return a}if(a instanceof A.O)return a
return J.iT(a)},
av(a){if(a==null)return a
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b4.prototype
if(typeof a=="symbol")return J.cL.prototype
if(typeof a=="bigint")return J.cK.prototype
return a}if(a instanceof A.O)return a
return J.iT(a)},
aW(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b4.prototype
if(typeof a=="symbol")return J.cL.prototype
if(typeof a=="bigint")return J.cK.prototype
return a}if(a instanceof A.O)return a
return J.iT(a)},
bB(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.cc(a).T(a,b)},
d(a,b){if(typeof b==="number")if(Array.isArray(a)||A.p2(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.av(a).n(a,b)},
x(a,b,c){return J.av(a).i(a,b,c)},
k2(a,b,c){return J.aW(a).eO(a,b,c)},
m0(a,b,c){return J.aW(a).eP(a,b,c)},
m1(a,b,c){return J.aW(a).eQ(a,b,c)},
j3(a,b,c){return J.aW(a).eR(a,b,c)},
m2(a){return J.aW(a).eS(a)},
m3(a,b,c){return J.aW(a).cV(a,b,c)},
ak(a,b,c){return J.aW(a).eT(a,b,c)},
aN(a){return J.aW(a).eU(a)},
L(a,b,c){return J.aW(a).cj(a,b,c)},
k3(a,b){return J.av(a).bH(a,b)},
aX(a,b,c,d){return J.av(a).aw(a,b,c,d)},
aY(a){return J.cc(a).gE(a)},
j4(a){return J.av(a).gH(a)},
aZ(a){return J.a1(a).gu(a)},
m4(a){return J.cc(a).gaA(a)},
k4(a,b,c){return J.aW(a).fl(a,b,c)},
j5(a,b){return J.av(a).d1(a,b)},
j6(a,b,c){return J.av(a).b7(a,b,c)},
m5(a,b){return J.av(a).f9(a,b)},
ey(a){return J.cc(a).C(a)},
f0:function f0(){},
fe:function fe(){},
dy:function dy(){},
dA:function dA(){},
bn:function bn(){},
ft:function ft(){},
ea:function ea(){},
b4:function b4(){},
cK:function cK(){},
cL:function cL(){},
u:function u(a){this.$ti=a},
fc:function fc(){},
hA:function hA(a){this.$ti=a},
d8:function d8(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dz:function dz(){},
dx:function dx(){},
ff:function ff(){},
cJ:function cJ(){}},A={jf:function jf(){},
hH(a){return new A.cM("Field '"+a+"' has not been initialized.")},
mE(a){return new A.cM("Field '"+a+"' has already been initialized.")},
b6(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
i1(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
ln(a,b,c){return a},
jS(a){var t,s
for(t=$.au.length,s=0;s<t;++s)if(a===$.au[s])return!0
return!1},
e7(a,b,c,d){A.cX(b,"start")
if(c!=null){A.cX(c,"end")
if(b>c)A.aw(A.ag(b,0,c,"start",null))}return new A.e6(a,b,c,d.A("e6<0>"))},
kv(){return new A.cZ("No element")},
kw(){return new A.cZ("Too few elements")},
cM:function cM(a){this.a=a},
ao:function ao(a){this.a=a},
i0:function i0(){},
da:function da(){},
aR:function aR(){},
e6:function e6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bQ:function bQ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dD:function dD(a,b,c){this.a=a
this.b=b
this.$ti=c},
ej:function ej(a,b,c){this.a=a
this.b=b
this.$ti=c},
ek:function ek(a,b,c){this.a=a
this.b=b
this.$ti=c},
db:function db(a){this.$ti=a},
dc:function dc(a){this.$ti=a},
ad:function ad(){},
ba:function ba(){},
d_:function d_(){},
lC(a){var t=A.lB(a)
if(t!=null)return t
return"minified:"+a},
p2(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.ez.b(a)},
z(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.ey(a)
return t},
e_(a){var t,s=$.kJ
if(s==null)s=$.kJ=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
mT(a,b){var t,s=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(s==null)return null
if(3>=s.length)return A.a(s,3)
t=s[3]
if(t!=null)return parseInt(a,10)
if(s[2]!=null)return parseInt(a,16)
return null},
fw(a){var t,s,r,q
if(a instanceof A.O)return A.at(A.aL(a),null)
t=J.cc(a)
if(t===B.cM||t===B.cP||u.bI.b(a)){s=B.aP(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.at(A.aL(a),null)},
kK(a){var t,s,r
if(a==null||typeof a=="number"||A.jO(a))return J.ey(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.bh)return a.C(0)
if(a instanceof A.aT)return a.eD(!0)
t=$.m_()
for(s=0;s<1;++s){r=t[s].jJ(a)
if(r!=null)return r}return"Instance of '"+A.fw(a)+"'"},
kI(a){var t,s,r,q,p=a.length
if(p<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<p;s=r){r=s+500
q=r<p?r:p
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
mU(a){var t,s,r,q=A.k([],u.t)
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.aa)(a),++s){r=a[s]
if(!A.iH(r))throw A.f(A.bz(r))
if(r<=65535)B.c.N(q,r)
else if(r<=1114111){B.c.N(q,55296+(B.a.j(r-65536,10)&1023))
B.c.N(q,56320+(r&1023))}else throw A.f(A.bz(r))}return A.kI(q)},
kL(a){var t,s,r
for(t=a.length,s=0;s<t;++s){r=a[s]
if(!A.iH(r))throw A.f(A.bz(r))
if(r<0)throw A.f(A.bz(r))
if(r>65535)return A.mU(a)}return A.kI(a)},
mV(a,b,c){var t,s,r,q
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(t=b,s="";t<c;t=r){r=t+500
q=r<c?r:c
s+=String.fromCharCode.apply(null,a.subarray(t,q))}return s},
cR(a){var t
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((B.a.j(t,10)|55296)>>>0,t&1023|56320)}throw A.f(A.ag(a,0,1114111,null,null))},
h3(a){throw A.f(A.bz(a))},
a(a,b){if(a==null)J.aZ(a)
throw A.f(A.iJ(a,b))},
iJ(a,b){var t,s="index"
if(!A.iH(b))return new A.aO(!0,b,s,null)
t=J.aZ(a)
if(b<0||b>=t)return A.jc(b,t,a,s)
return A.jA(b,s,null)},
oN(a,b,c){if(a<0||a>c)return A.ag(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.ag(b,a,c,"end",null)
return new A.aO(!0,b,"end",null)},
bz(a){return new A.aO(!0,a,null,null)},
f(a){return A.a2(a,new Error())},
a2(a,b){var t
if(a==null)a=new A.e9()
b.dartException=a
t=A.pd
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:t})
b.name=""}else b.toString=t
return b},
pd(){return J.ey(this.dartException)},
aw(a,b){throw A.a2(a,b==null?new Error():b)},
c(a,b,c){var t
if(b==null)b=0
if(c==null)c=0
t=Error()
A.aw(A.of(a,b,c),t)},
of(a,b,c){var t,s,r,q,p,o,n,m,l
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
return new A.eb("'"+t+"': Cannot "+p+" "+m+l+o)},
aa(a){throw A.f(A.bD(a))},
b7(a){var t,s,r,q,p,o
a=A.pb(a.replace(String({}),"$receiver$"))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=A.k([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new A.i6(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),s,r,q,p,o)},
i7(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
kQ(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
jg(a,b){var t=b==null,s=t?null:b.method
return new A.fj(a,s,t?null:b.receiver)},
pf(a){if(a==null)return new A.hP(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.ce(a,a.dartException)
return A.oI(a)},
ce(a,b){if(u.x.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
oI(a){var t,s,r,q,p,o,n,m,l,k,j,i,h
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((B.a.j(s,16)&8191)===10)switch(r){case 438:return A.ce(a,A.jg(A.z(t)+" (Error "+r+")",null))
case 445:case 5007:A.z(t)
return A.ce(a,new A.dM())}}if(a instanceof TypeError){q=$.lH()
p=$.lI()
o=$.lJ()
n=$.lK()
m=$.lN()
l=$.lO()
k=$.lM()
$.lL()
j=$.lQ()
i=$.lP()
h=q.bx(t)
if(h!=null)return A.ce(a,A.jg(A.be(t),h))
else{h=p.bx(t)
if(h!=null){h.method="call"
return A.ce(a,A.jg(A.be(t),h))}else if(o.bx(t)!=null||n.bx(t)!=null||m.bx(t)!=null||l.bx(t)!=null||k.bx(t)!=null||n.bx(t)!=null||j.bx(t)!=null||i.bx(t)!=null){A.be(t)
return A.ce(a,new A.dM())}}return A.ce(a,new A.fQ(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new A.e3()
t=function(b){try{return String(b)}catch(g){}return null}(a)
return A.ce(a,new A.aO(!1,null,null,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new A.e3()
return a},
jU(a){if(a==null)return J.aY(a)
if(typeof a=="object")return A.e_(a)
return J.aY(a)},
oL(a){if(typeof a=="number")return B.b.gE(a)
if(a instanceof A.fZ)return A.e_(a)
if(a instanceof A.aT)return a.gE(a)
return A.jU(a)},
lu(a,b){var t,s,r,q=a.length
for(t=0;t<q;t=r){s=t+1
r=s+1
b.i(0,a[t],a[s])}return b},
mf(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.fK().constructor.prototype):Object.create(new A.cf(null,null).constructor.prototype)
t.$initialize=t.constructor
s=i?function static_tear_off(){this.$initialize()}:function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.kb(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.mb(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.kb(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
mb(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.f("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.m8)}throw A.f("Error in functionType of tearoff")},
mc(a,b,c,d){var t=A.ka
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
kb(a,b,c,d){if(c)return A.me(a,b,d)
return A.mc(b.length,d,a,b)},
md(a,b,c,d){var t=A.ka,s=A.m9
switch(b?-1:a){case 0:throw A.f(new A.fJ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
me(a,b,c){var t,s
if($.k8==null)$.k8=A.k7("interceptor")
if($.k9==null)$.k9=A.k7("receiver")
t=b.length
s=A.md(t,c,a,b)
return s},
jQ(a){return A.mf(a)},
m8(a,b){return A.ex(v.typeUniverse,A.aL(a.a),b)},
ka(a){return a.a},
m9(a){return a.b},
k7(a){var t,s,r,q=new A.cf("receiver","interceptor"),p=Object.getOwnPropertyNames(q)
p.$flags=1
t=p
for(p=t.length,s=0;s<p;++s){r=t[s]
if(q[r]===a)return r}throw A.f(A.bg("Field name "+a+" not found."))},
iS(a){return v.getIsolateTag(a)},
qC(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
p4(a){var t,s,r,q,p,o=A.be($.lw.$1(a)),n=$.iK[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.iX[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.lf($.lm.$2(a,o))
if(r!=null){n=$.iK[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.iX[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.j_(t)
$.iK[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.iX[o]=t
return t}if(q==="-"){p=A.j_(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.ly(a,t)
if(q==="*")throw A.f(A.kS(o))
if(v.leafTags[o]===true){p=A.j_(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.ly(a,t)},
ly(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.jT(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
j_(a){return J.jT(a,!1,null,!!a.$iap)},
p6(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.j_(t)
else return J.jT(t,c,null,null)},
oZ(){if(!0===$.jR)return
$.jR=!0
A.p_()},
p_(){var t,s,r,q,p,o,n,m
$.iK=Object.create(null)
$.iX=Object.create(null)
A.oY()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.lz.$1(p)
if(o!=null){n=A.p6(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
oY(){var t,s,r,q,p,o,n=B.ci()
n=A.d6(B.cj,A.d6(B.ck,A.d6(B.aQ,A.d6(B.aQ,A.d6(B.cl,A.d6(B.cm,A.d6(B.cn(B.aP),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(Array.isArray(t))for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.lw=new A.iU(q)
$.lm=new A.iV(p)
$.lz=new A.iW(o)},
d6(a,b){return a(b)||b},
oM(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
pb(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
eq:function eq(a,b){this.a=a
this.b=b},
er:function er(a,b){this.a=a
this.b=b},
es:function es(a,b){this.a=a
this.b=b},
d9:function d9(){},
bH:function bH(a,b){this.a=a
this.$ti=b},
e2:function e2(){},
i6:function i6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dM:function dM(){},
fj:function fj(a,b,c){this.a=a
this.b=b
this.c=c},
fQ:function fQ(a){this.a=a},
hP:function hP(a){this.a=a},
bh:function bh(){},
eE:function eE(){},
eF:function eF(){},
fL:function fL(){},
fK:function fK(){},
cf:function cf(a,b){this.a=a
this.b=b},
fJ:function fJ(a){this.a=a},
aE:function aE(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hK:function hK(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dC:function dC(a,b){this.a=a
this.$ti=b},
V:function V(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hL:function hL(a,b){this.a=a
this.$ti=b},
bP:function bP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dB:function dB(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iU:function iU(a){this.a=a},
iV:function iV(a){this.a=a},
iW:function iW(a){this.a=a},
aT:function aT(){},
bx:function bx(){},
pc(a){throw A.a2(new A.cM("Field '"+a+"' has been assigned during initialization."),new Error())},
b(){throw A.a2(A.hH(""),new Error())},
jW(){throw A.a2(A.mE(""),new Error())},
kW(){var t=new A.is()
return t.b=t},
is:function is(){this.b=null},
as(a,b,c){},
w(a){var t,s,r
if(u.aP.b(a))return a
t=J.a1(a)
s=A.Y(t.gu(a),null,!1,u.cp)
for(r=0;r<t.gu(a);++r)B.c.i(s,r,t.n(a,r))
return s},
mH(a){return new Float32Array(a)},
mI(a,b,c){A.as(a,b,c)
c=B.a.X(a.byteLength-b,4)
return new Float32Array(a,b,c)},
mJ(a,b,c){A.as(a,b,c)
c=B.a.X(a.byteLength-b,2)
return new Int16Array(a,b,c)},
mK(a){return new Int32Array(a)},
mL(a,b,c){A.as(a,b,c)
c=B.a.X(a.byteLength-b,4)
return new Int32Array(a,b,c)},
kD(a){return new Int8Array(a)},
mM(a,b,c){A.as(a,b,c)
return c==null?new Int8Array(a,b):new Int8Array(a,b,c)},
mN(a){return new Uint16Array(a)},
mO(a,b,c){A.as(a,b,c)
c=B.a.X(a.byteLength-b,2)
return new Uint16Array(a,b,c)},
mP(a){return new Uint32Array(a)},
mQ(a,b,c){A.as(a,b,c)
c=B.a.X(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
fn(a){return new Uint8Array(a)},
mR(a){return new Uint8Array(A.w(a))},
mS(a,b,c){A.as(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
bf(a,b,c){if(a>>>0!==a||a>=c)throw A.f(A.iJ(b,a))},
aJ(a,b,c){var t
if(!(a>>>0!==a))if(b==null)t=a>c
else t=b>>>0!==b||a>b||b>c
else t=!0
if(t)throw A.f(A.oN(a,b,c))
if(b==null)return c
return b},
bR:function bR(){},
dI:function dI(){},
iB:function iB(a){this.a=a},
fm:function fm(){},
a8:function a8(){},
bp:function bp(){},
aq:function aq(){},
bS:function bS(){},
dE:function dE(){},
dF:function dF(){},
dG:function dG(){},
dH:function dH(){},
dJ:function dJ(){},
dK:function dK(){},
dL:function dL(){},
bq:function bq(){},
el:function el(){},
em:function em(){},
en:function en(){},
eo:function eo(){},
jB(a,b){var t=b.c
return t==null?b.c=A.ev(a,"kg",[b.x]):t},
kO(a){var t=a.w
if(t===6||t===7)return A.kO(a.x)
return t===11||t===12},
mX(a){return a.as},
W(a){return A.iA(v.typeUniverse,a,!1)},
ca(a0,a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.w
switch(a){case 5:case 1:case 2:case 3:case 4:return a1
case 6:t=a1.x
s=A.ca(a0,t,a2,a3)
if(s===t)return a1
return A.l3(a0,s,!0)
case 7:t=a1.x
s=A.ca(a0,t,a2,a3)
if(s===t)return a1
return A.l2(a0,s,!0)
case 8:r=a1.y
q=A.d5(a0,r,a2,a3)
if(q===r)return a1
return A.ev(a0,a1.x,q)
case 9:p=a1.x
o=A.ca(a0,p,a2,a3)
n=a1.y
m=A.d5(a0,n,a2,a3)
if(o===p&&m===n)return a1
return A.jJ(a0,o,m)
case 10:l=a1.x
k=a1.y
j=A.d5(a0,k,a2,a3)
if(j===k)return a1
return A.l4(a0,l,j)
case 11:i=a1.x
h=A.ca(a0,i,a2,a3)
g=a1.y
f=A.oF(a0,g,a2,a3)
if(h===i&&f===g)return a1
return A.l1(a0,h,f)
case 12:e=a1.y
a3+=e.length
d=A.d5(a0,e,a2,a3)
p=a1.x
o=A.ca(a0,p,a2,a3)
if(d===e&&o===p)return a1
return A.jK(a0,o,d,!0)
case 13:c=a1.x
if(c<a3)return a1
b=a2[c-a3]
if(b==null)return a1
return b
default:throw A.f(A.eA("Attempted to substitute unexpected RTI kind "+a))}},
d5(a,b,c,d){var t,s,r,q,p=b.length,o=A.iE(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.ca(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
oG(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.iE(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.ca(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
oF(a,b,c,d){var t,s=b.a,r=A.d5(a,s,c,d),q=b.b,p=A.d5(a,q,c,d),o=b.c,n=A.oG(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.fY()
t.a=r
t.b=p
t.c=n
return t},
k(a,b){a[v.arrayRti]=b
return a},
lo(a){var t=a.$S
if(t!=null){if(typeof t=="number")return A.oX(t)
return a.$S()}return null},
p0(a,b){var t
if(A.kO(b))if(a instanceof A.bh){t=A.lo(a)
if(t!=null)return t}return A.aL(a)},
aL(a){if(a instanceof A.O)return A.o(a)
if(Array.isArray(a))return A.ar(a)
return A.jN(J.cc(a))},
ar(a){var t=a[v.arrayRti],s=u.n
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
o(a){var t=a.$ti
return t!=null?t:A.jN(a)},
jN(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.on(a,t)},
on(a,b){var t=a instanceof A.bh?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,s=A.o3(v.typeUniverse,t.name)
b.$ccache=s
return s},
oX(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.iA(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
oW(a){return A.cb(A.o(a))},
jP(a){var t
if(a instanceof A.aT)return A.oP(a.$r,a.e5())
t=a instanceof A.bh?A.lo(a):null
if(t!=null)return t
if(u.dm.b(a))return J.m4(a).a
if(Array.isArray(a))return A.ar(a)
return A.aL(a)},
cb(a){var t=a.r
return t==null?a.r=new A.fZ(a):t},
oP(a,b){var t,s,r=b,q=r.length
if(q===0)return u.bQ
if(0>=q)return A.a(r,0)
t=A.ex(v.typeUniverse,A.jP(r[0]),"@<0>")
for(s=1;s<q;++s){if(!(s<r.length))return A.a(r,s)
t=A.l6(v.typeUniverse,t,A.jP(r[s]))}return A.ex(v.typeUniverse,t,a)},
aM(a){return A.cb(A.iA(v.typeUniverse,a,!1))},
om(a){var t=this
t.b=A.oE(t)
return t.b(a)},
oE(a){var t,s,r,q,p
if(a===u.K)return A.ot
if(A.cd(a))return A.ox
t=a.w
if(t===6)return A.ok
if(t===1)return A.lk
if(t===7)return A.oo
s=A.oD(a)
if(s!=null)return s
if(t===8){r=a.x
if(a.y.every(A.cd)){a.f="$i"+r
if(r==="r")return A.or
if(a===u.m)return A.oq
return A.ow}}else if(t===10){q=A.oM(a.x,a.y)
p=q==null?A.lk:q
return p==null?A.le(p):p}return A.oi},
oD(a){if(a.w===8){if(a===u.p)return A.iH
if(a===u.i||a===u.H)return A.os
if(a===u.N)return A.ov
if(a===u.y)return A.jO}return null},
ol(a){var t=this,s=A.oh
if(A.cd(t))s=A.oc
else if(t===u.K)s=A.le
else if(A.d7(t)){s=A.oj
if(t===u.v)s=A.oa
else if(t===u.dk)s=A.lf
else if(t===u.fQ)s=A.o9
else if(t===u.cg)s=A.ld
else if(t===u.cD)s=A.lb
else if(t===u.an)s=A.ob}else if(t===u.p)s=A.v
else if(t===u.N)s=A.be
else if(t===u.y)s=A.o8
else if(t===u.H)s=A.lc
else if(t===u.i)s=A.la
else if(t===u.m)s=A.jL
t.a=s
return t.a(a)},
oi(a){var t=this
if(a==null)return A.d7(t)
return A.p3(v.typeUniverse,A.p0(a,t),t)},
ok(a){if(a==null)return!0
return this.x.b(a)},
ow(a){var t,s=this
if(a==null)return A.d7(s)
t=s.f
if(a instanceof A.O)return!!a[t]
return!!J.cc(a)[t]},
or(a){var t,s=this
if(a==null)return A.d7(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.f
if(a instanceof A.O)return!!a[t]
return!!J.cc(a)[t]},
oq(a){var t=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.O)return!!a[t.f]
return!0}if(typeof a=="function")return!0
return!1},
lj(a){if(typeof a=="object"){if(a instanceof A.O)return u.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
oh(a){var t=this
if(a==null){if(A.d7(t))return a}else if(t.b(a))return a
throw A.a2(A.lg(a,t),new Error())},
oj(a){var t=this
if(a==null||t.b(a))return a
throw A.a2(A.lg(a,t),new Error())},
lg(a,b){return new A.et("TypeError: "+A.kX(a,A.at(b,null)))},
kX(a,b){return A.hf(a)+": type '"+A.at(A.jP(a),null)+"' is not a subtype of type '"+b+"'"},
aC(a,b){return new A.et("TypeError: "+A.kX(a,b))},
oo(a){var t=this
return t.x.b(a)||A.jB(v.typeUniverse,t).b(a)},
ot(a){return a!=null},
le(a){if(a!=null)return a
throw A.a2(A.aC(a,"Object"),new Error())},
ox(a){return!0},
oc(a){return a},
lk(a){return!1},
jO(a){return!0===a||!1===a},
o8(a){if(!0===a)return!0
if(!1===a)return!1
throw A.a2(A.aC(a,"bool"),new Error())},
o9(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.a2(A.aC(a,"bool?"),new Error())},
la(a){if(typeof a=="number")return a
throw A.a2(A.aC(a,"double"),new Error())},
lb(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a2(A.aC(a,"double?"),new Error())},
iH(a){return typeof a=="number"&&Math.floor(a)===a},
v(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.a2(A.aC(a,"int"),new Error())},
oa(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.a2(A.aC(a,"int?"),new Error())},
os(a){return typeof a=="number"},
lc(a){if(typeof a=="number")return a
throw A.a2(A.aC(a,"num"),new Error())},
ld(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a2(A.aC(a,"num?"),new Error())},
ov(a){return typeof a=="string"},
be(a){if(typeof a=="string")return a
throw A.a2(A.aC(a,"String"),new Error())},
lf(a){if(typeof a=="string")return a
if(a==null)return a
throw A.a2(A.aC(a,"String?"),new Error())},
jL(a){if(A.lj(a))return a
throw A.a2(A.aC(a,"JSObject"),new Error())},
ob(a){if(a==null)return a
if(A.lj(a))return a
throw A.a2(A.aC(a,"JSObject?"),new Error())},
ll(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.at(a[r],b)
return t},
oz(a,b){var t,s,r,q,p,o,n=a.x,m=a.y
if(""===n)return"("+A.ll(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.at(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
lh(a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=", ",a1=null
if(a4!=null){t=a4.length
if(a3==null)a3=A.k([],u.s)
else a1=a3.length
s=a3.length
for(r=t;r>0;--r)B.c.N(a3,"T"+(s+r))
for(q=u.X,p="<",o="",r=0;r<t;++r,o=a0){n=a3.length
m=n-1-r
if(!(m>=0))return A.a(a3,m)
p=p+o+a3[m]
l=a4[r]
k=l.w
if(!(k===2||k===3||k===4||k===5||l===q))p+=" extends "+A.at(l,a3)}p+=">"}else p=""
q=a2.x
j=a2.y
i=j.a
h=i.length
g=j.b
f=g.length
e=j.c
d=e.length
c=A.at(q,a3)
for(b="",a="",r=0;r<h;++r,a=a0)b+=a+A.at(i[r],a3)
if(f>0){b+=a+"["
for(a="",r=0;r<f;++r,a=a0)b+=a+A.at(g[r],a3)
b+="]"}if(d>0){b+=a+"{"
for(a="",r=0;r<d;r+=3,a=a0){b+=a
if(e[r+1])b+="required "
b+=A.at(e[r+2],a3)+" "+e[r]}b+="}"}if(a1!=null){a3.toString
a3.length=a1}return p+"("+b+") => "+c},
at(a,b){var t,s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=a.x
s=A.at(t,b)
r=t.w
return(r===11||r===12?"("+s+")":s)+"?"}if(m===7)return"FutureOr<"+A.at(a.x,b)+">"
if(m===8){q=A.oH(a.x)
p=a.y
return p.length>0?q+("<"+A.ll(p,b)+">"):q}if(m===10)return A.oz(a,b)
if(m===11)return A.lh(a,b,null)
if(m===12)return A.lh(a.x,b,a.y)
if(m===13){o=a.x
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.a(b,o)
return b[o]}return"?"},
oH(a){var t=A.lB(a)
if(t!=null)return t
return"minified:"+a},
o4(a,b){var t=a.tR[b]
while(typeof t=="string")t=a.tR[t]
return t},
o3(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.iA(a,b,!1)
else if(typeof n=="number"){t=n
s=A.ew(a,5,"#")
r=A.iE(t)
for(q=0;q<t;++q)r[q]=s
p=A.ev(a,b,r)
o[b]=p
return p}else return n},
o2(a,b){return A.l8(a.tR,b)},
o1(a,b){return A.l8(a.eT,b)},
iA(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.l5(a,null,b,!1)
s.set(b,t)
return t},
ex(a,b,c){var t,s,r=b.z
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
r=A.jJ(a,b,c.w===9?c.y:[c])
q.set(t,r)
return r},
l5(a,b,c,d){return A.nV(A.nP(a,b,c,d))},
by(a,b){b.a=A.ol
b.b=A.om
return b},
ew(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.aI(null,null)
t.w=b
t.as=c
s=A.by(a,t)
a.eC.set(c,s)
return s},
l3(a,b,c){var t,s=b.as+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.o_(a,b,s,c)
a.eC.set(s,t)
return t},
o_(a,b,c,d){var t,s,r
if(d){t=b.w
s=!0
if(!A.cd(b))if(!(b===u.a||b===u.u))if(t!==6)s=t===7&&A.d7(b.x)
if(s)return b
else if(t===1)return u.a}r=new A.aI(null,null)
r.w=6
r.x=b
r.as=c
return A.by(a,r)},
l2(a,b,c){var t,s=b.as+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.nY(a,b,s,c)
a.eC.set(s,t)
return t},
nY(a,b,c,d){var t,s
if(d){t=b.w
if(A.cd(b)||b===u.K)return b
else if(t===1)return A.ev(a,"kg",[b])
else if(b===u.a||b===u.u)return u.eH}s=new A.aI(null,null)
s.w=7
s.x=b
s.as=c
return A.by(a,s)},
o0(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.aI(null,null)
t.w=13
t.x=b
t.as=r
s=A.by(a,t)
a.eC.set(r,s)
return s},
eu(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].as
return t},
nX(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].as}return t},
ev(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.eu(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.aI(null,null)
s.w=8
s.x=b
s.y=c
if(c.length>0)s.c=c[0]
s.as=q
r=A.by(a,s)
a.eC.set(q,r)
return r},
jJ(a,b,c){var t,s,r,q,p,o
if(b.w===9){t=b.x
s=b.y.concat(c)}else{s=c
t=b}r=t.as+(";<"+A.eu(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.aI(null,null)
p.w=9
p.x=t
p.y=s
p.as=r
o=A.by(a,p)
a.eC.set(r,o)
return o},
l4(a,b,c){var t,s,r="+"+(b+"("+A.eu(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.aI(null,null)
t.w=10
t.x=b
t.y=c
t.as=r
s=A.by(a,t)
a.eC.set(r,s)
return s},
l1(a,b,c){var t,s,r,q,p,o=b.as,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.eu(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.eu(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.nX(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.aI(null,null)
q.w=11
q.x=b
q.y=c
q.as=s
p=A.by(a,q)
a.eC.set(s,p)
return p},
jK(a,b,c,d){var t,s=b.as+("<"+A.eu(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.nZ(a,b,c,s,d)
a.eC.set(s,t)
return t},
nZ(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.iE(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.w===1){s[q]=p;++r}}if(r>0){o=A.ca(a,b,s,0)
n=A.d5(a,c,s,0)
return A.jK(a,o,n,c!==n)}}m=new A.aI(null,null)
m.w=12
m.x=b
m.y=c
m.as=d
return A.by(a,m)},
nP(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
nV(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.nR(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.l_(a,s,m,l,!1)
else if(r===46)s=A.l_(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.c9(a.u,a.e,l.pop()))
break
case 94:l.push(A.o0(a.u,l.pop()))
break
case 35:l.push(A.ew(a.u,5,"#"))
break
case 64:l.push(A.ew(a.u,2,"@"))
break
case 126:l.push(A.ew(a.u,3,"~"))
break
case 60:l.push(a.p)
a.p=l.length
break
case 62:A.nT(a,l)
break
case 38:A.nS(a,l)
break
case 63:q=a.u
l.push(A.l3(q,A.c9(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.l2(q,A.c9(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.nQ(a,l)
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
A.nW(a.u,a.e,p)
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
return A.c9(a.u,a.e,n)},
nR(a,b,c,d){var t,s,r=b-48
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
o=A.o4(t,p.x)[q]
if(o==null)A.aw('No "'+q+'" in "'+A.mX(p)+'"')
d.push(A.ex(t,p,o))}else d.push(q)
return n},
nT(a,b){var t,s=a.u,r=A.kZ(a,b),q=b.pop()
if(typeof q=="string")b.push(A.ev(s,q,r))
else{t=A.c9(s,a.e,q)
switch(t.w){case 11:b.push(A.jK(s,t,r,a.n))
break
default:b.push(A.jJ(s,t,r))
break}}},
nQ(a,b){var t,s,r,q=a.u,p=b.pop(),o=null,n=null
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
s=A.c9(q,a.e,p)
r=new A.fY()
r.a=t
r.b=o
r.c=n
b.push(A.l1(q,s,r))
return
case-4:b.push(A.l4(q,b.pop(),t))
return
default:throw A.f(A.eA("Unexpected state under `()`: "+A.z(p)))}},
nS(a,b){var t=b.pop()
if(0===t){b.push(A.ew(a.u,1,"0&"))
return}if(1===t){b.push(A.ew(a.u,4,"1&"))
return}throw A.f(A.eA("Unexpected extended operation "+A.z(t)))},
kZ(a,b){var t=b.splice(a.p)
A.l0(a.u,a.e,t)
a.p=b.pop()
return t},
c9(a,b,c){if(typeof c=="string")return A.ev(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.nU(a,b,c)}else return c},
l0(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.c9(a,b,c[t])},
nW(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.c9(a,b,c[t])},
nU(a,b,c){var t,s,r=b.w
if(r===9){if(c===0)return b.x
t=b.y
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.x
r=b.w}else if(c===0)return b
if(r!==8)throw A.f(A.eA("Indexed base must be an interface type"))
t=b.y
if(c<=t.length)return t[c-1]
throw A.f(A.eA("Bad index "+c+" for "+b.C(0)))},
p3(a,b,c){var t,s=b.d
if(s==null)s=b.d=new Map()
t=s.get(c)
if(t==null){t=A.a0(a,b,null,c,null)
s.set(c,t)}return t},
a0(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(A.cd(d))return!0
t=b.w
if(t===4)return!0
if(A.cd(b))return!1
if(b.w===1)return!0
s=t===13
if(s)if(A.a0(a,c[b.x],c,d,e))return!0
r=d.w
q=u.a
if(b===q||b===u.u){if(r===7)return A.a0(a,b,c,d.x,e)
return d===q||d===u.u||r===6}if(d===u.K){if(t===7)return A.a0(a,b.x,c,d,e)
return t!==6}if(t===7){if(!A.a0(a,b.x,c,d,e))return!1
return A.a0(a,A.jB(a,b),c,d,e)}if(t===6)return A.a0(a,q,c,d,e)&&A.a0(a,b.x,c,d,e)
if(r===7){if(A.a0(a,b,c,d.x,e))return!0
return A.a0(a,b,c,A.jB(a,d),e)}if(r===6)return A.a0(a,b,c,q,e)||A.a0(a,b,c,d.x,e)
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
return A.op(a,b,c,d,e)}if(p&&r===10)return A.ou(a,b,c,d,e)
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
op(a,b,c,d,e){var t,s,r,q,p,o=b.x,n=d.x
while(o!==n){t=a.tR[o]
if(t==null)return!1
if(typeof t=="string"){o=t
continue}s=t[n]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.ex(a,b,s[p])
return A.l9(a,q,null,c,d.y,e)}return A.l9(a,b.y,null,c,d.y,e)},
l9(a,b,c,d,e,f){var t,s=b.length
for(t=0;t<s;++t)if(!A.a0(a,b[t],d,e[t],f))return!1
return!0},
ou(a,b,c,d,e){var t,s=b.y,r=d.y,q=s.length
if(q!==r.length)return!1
if(b.x!==d.x)return!1
for(t=0;t<q;++t)if(!A.a0(a,s[t],c,r[t],e))return!1
return!0},
d7(a){var t=a.w,s=!0
if(!(a===u.a||a===u.u))if(!A.cd(a))if(t!==6)s=t===7&&A.d7(a.x)
return s},
cd(a){var t=a.w
return t===2||t===3||t===4||t===5||a===u.X},
l8(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
iE(a){return a>0?new Array(a):v.typeUniverse.sEA},
aI:function aI(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
fY:function fY(){this.c=this.b=this.a=null},
fZ:function fZ(a){this.a=a},
fW:function fW(){},
et:function et(a){this.a=a},
mF(a,b){return new A.aE(a.A("@<0>").cE(b).A("aE<1,2>"))},
mG(a,b,c){return b.A("@<0>").cE(c).A("jh<1,2>").a(A.lu(a,new A.aE(b.A("@<0>").cE(c).A("aE<1,2>"))))},
Q(a,b){return new A.aE(a.A("@<0>").cE(b).A("aE<1,2>"))},
fl(a,b,c){var t=A.mF(b,c)
a.bS(0,new A.hM(t,b,c))
return t},
jj(a){var t,s
if(A.jS(a))return"{...}"
t=new A.e4("")
try{s={}
B.c.N($.au,a)
t.a+="{"
s.a=!0
a.bS(0,new A.hO(s,t))
t.a+="}"}finally{if(0>=$.au.length)return A.a($.au,-1)
$.au.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
hM:function hM(a,b,c){this.a=a
this.b=b
this.c=c},
E:function E(){},
cN:function cN(){},
hO:function hO(a,b){this.a=a
this.b=b},
o6(a,b,c){var t,s,r,q,p=c-b
if(p<=4096)t=$.lW()
else t=new Uint8Array(p)
for(s=0;s<p;++s){r=b+s
if(!(r<a.length))return A.a(a,r)
q=a[r]
if((q&255)!==q)q=255
t[s]=q}return t},
o5(a,b,c,d){var t=a?$.lV():$.lU()
if(t==null)return null
if(0===c&&d===b.length)return A.l7(t,b)
return A.l7(t,b.subarray(c,d))},
l7(a,b){var t,s
try{t=a.decode(b)
return t}catch(s){}return null},
o7(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
iD:function iD(){},
iC:function iC(){},
iz:function iz(){},
iy:function iy(){},
cg:function cg(){},
eJ:function eJ(){},
eK:function eK(){},
fk:function fk(){},
hJ:function hJ(){},
hI:function hI(a){this.a=a},
fR:function fR(){},
fS:function fS(a){this.a=a},
h_:function h_(a){this.a=a
this.b=16
this.c=0},
p1(a){var t=A.mT(a,null)
if(t!=null)return t
throw A.f(A.hk(a,null,null))},
Y(a,b,c,d){var t,s=J.ky(a,d)
if(a!==0&&b!=null)for(t=0;t<a;++t)s[t]=b
return s},
ji(a,b,c){var t,s,r=A.k([],c.A("u<0>"))
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.aa)(a),++s)B.c.N(r,c.a(a[s]))
if(b)return r
r.$flags=1
return r},
t(a,b){var t,s
if(Array.isArray(a))return A.k(a.slice(0),b.A("u<0>"))
t=A.k([],b.A("u<0>"))
for(s=J.j4(a);s.F();)B.c.N(t,s.gP())
return t},
kB(a,b,c){var t,s=J.je(a,c)
for(t=0;t<a;++t)B.c.i(s,t,b.$1(t))
return s},
e5(a,b,c){var t,s,r,q,p
A.cX(b,"start")
t=c==null
s=!t
if(s){r=c-b
if(r<0)throw A.f(A.ag(c,b,null,"end",null))
if(r===0)return""}if(Array.isArray(a)){q=a
p=q.length
if(t)c=p
return A.kL(b>0||c<p?q.slice(b,c):q)}if(u.bm.b(a))return A.mZ(a,b,c)
if(s)a=J.m5(a,c)
if(b>0)a=J.j5(a,b)
t=A.t(a,u.p)
return A.kL(t)},
mZ(a,b,c){var t=a.length
if(b>=t)return""
return A.mV(a,b,c==null||c>t?t:c)},
kP(a,b,c){var t=J.j4(b)
if(!t.F())return a
if(c.length===0){do a+=A.z(t.gP())
while(t.F())}else{a+=A.z(t.gP())
while(t.F())a=a+c+A.z(t.gP())}return a},
hf(a){if(typeof a=="number"||A.jO(a)||a==null)return J.ey(a)
if(typeof a=="string")return JSON.stringify(a)
return A.kK(a)},
eA(a){return new A.ez(a)},
bg(a){return new A.aO(!1,null,null,a)},
m6(a,b,c){return new A.aO(!0,a,b,c)},
jA(a,b,c){return new A.cW(null,null,!0,a,b,c==null?"Value not in range":c)},
ag(a,b,c,d,e){return new A.cW(b,c,!0,a,d,"Invalid value")},
bu(a,b,c){if(0>a||a>c)throw A.f(A.ag(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.f(A.ag(b,a,c,"end",null))
return b}return c},
cX(a,b){if(a<0)throw A.f(A.ag(a,0,null,b,null))
return a},
jc(a,b,c,d){return new A.eY(b,!0,a,d,"Index out of range")},
bb(a){return new A.eb(a)},
kS(a){return new A.fP(a)},
mY(a){return new A.cZ(a)},
bD(a){return new A.eI(a)},
hk(a,b,c){return new A.aP(a,b,c)},
mB(a,b,c){var t,s
if(A.jS(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=A.k([],u.s)
B.c.N($.au,a)
try{A.oy(a,t)}finally{if(0>=$.au.length)return A.a($.au,-1)
$.au.pop()}s=A.kP(b,u.hf.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
kx(a,b,c){var t,s
if(A.jS(a))return b+"..."+c
t=new A.e4(b)
B.c.N($.au,a)
try{s=t
s.a=A.kP(s.a,a,", ")}finally{if(0>=$.au.length)return A.a($.au,-1)
$.au.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
oy(a,b){var t,s,r,q,p,o,n,m=a.gH(a),l=0,k=0
for(;;){if(!(l<80||k<3))break
if(!m.F())return
t=A.z(m.gP())
B.c.N(b,t)
l+=t.length+2;++k}if(!m.F()){if(k<=5)return
if(0>=b.length)return A.a(b,-1)
s=b.pop()
if(0>=b.length)return A.a(b,-1)
r=b.pop()}else{q=m.gP();++k
if(!m.F()){if(k<=4){B.c.N(b,A.z(q))
return}s=A.z(q)
if(0>=b.length)return A.a(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gP();++k
for(;m.F();q=p,p=o){o=m.gP();++k
if(k>100){for(;;){if(!(l>75&&k>3))break
if(0>=b.length)return A.a(b,-1)
l-=b.pop().length+2;--k}B.c.N(b,"...")
return}}r=A.z(q)
s=A.z(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
for(;;){if(!(l>80&&b.length>3))break
if(0>=b.length)return A.a(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)B.c.N(b,n)
B.c.N(b,r)
B.c.N(b,s)},
kE(a,b,c,d){var t
if(B.T===c){t=B.a.gE(a)
b=J.aY(b)
return A.i1(A.b6(A.b6($.h6(),t),b))}if(B.T===d){t=B.a.gE(a)
b=J.aY(b)
c=J.aY(c)
return A.i1(A.b6(A.b6(A.b6($.h6(),t),b),c))}t=B.a.gE(a)
b=J.aY(b)
c=J.aY(c)
d=J.aY(d)
d=A.i1(A.b6(A.b6(A.b6(A.b6($.h6(),t),b),c),d))
return d},
m(a){var t,s,r=$.h6()
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.aa)(a),++s)r=A.b6(r,J.aY(a[s]))
return A.i1(r)},
it:function it(){},
P:function P(){},
ez:function ez(a){this.a=a},
e9:function e9(){},
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
eY:function eY(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
eb:function eb(a){this.a=a},
fP:function fP(a){this.a=a},
cZ:function cZ(a){this.a=a},
eI:function eI(a){this.a=a},
fp:function fp(){},
e3:function e3(){},
aP:function aP(a,b,c){this.a=a
this.b=b
this.c=c},
e:function e(){},
bT:function bT(){},
O:function O(){},
e4:function e4(a){this.a=a},
eS(a){var t=new A.hn()
t.fD(a)
return t},
hn:function hn(){this.a=$
this.b=0
this.c=2147483647},
iq:function iq(){},
iF:function iF(){},
ir:function ir(){},
iG:function iG(){},
mh(a,b,c,d){var t=A.jH(),s=A.jH(),r=A.jH(),q=new Uint16Array(16),p=new Uint32Array(573),o=new Uint8Array(573)
t=new A.hc(a,c,t,s,r,q,p,o)
t.i_(b,d)
t.hy(B.a_)
return t},
kc(a,b,c,d){var t,s=b*2,r=a.length
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
jH(){return new A.iu()},
nN(a,b,c){var t,s,r,q,p,o,n,m=new Uint16Array(16)
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
o=A.nO(o,n)
a.$flags&2&&A.c(a)
if(!(p<r))return A.a(a,p)
a[p]=o}},
nO(a,b){var t,s=0
do{t=A.am(a,1)
s=(s|a&1)<<1>>>0
if(--b,b>0){a=t
continue}else break}while(!0)
return A.am(s,1)},
kY(a){var t
if(a<256){if(!(a>=0))return A.a(B.a4,a)
t=B.a4[a]}else{t=256+A.am(a,7)
if(!(t<512))return A.a(B.a4,t)
t=B.a4[t]}return t},
jI(a,b,c,d,e){return new A.ix(a,b,c,d,e)},
am(a,b){if(a>=0)return B.a.b6(a,b)
else return B.a.b6(a,b)+B.a.L(2,(~b>>>0)+65536&65535)},
d3:function d3(a,b){this.a=a
this.b=b},
hc:function hc(a,b,c,d,e,f,g,h){var _=this
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
_.b0=_.aC=_.bD=_.bR=_.bw=_.az=_.bv=_.y2=_.y1=_.xr=$},
aB:function aB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iu:function iu(){this.c=this.b=this.a=$},
ix:function ix(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hw:function hw(a,b){var _=this
_.a=a
_.b=null
_.c=b
_.e=_.d=0},
ip:function ip(){},
eD:function eD(a,b){this.a=a
this.b=b},
hx(a,b,c,d){var t,s,r=new A.eZ(b)
if(d==null)d=0
if(c==null)c=a.length-d
t=a.length
if(d+c>t)c=t-d
s=u.D.b(a)?a:new Uint8Array(A.w(a))
t=J.L(B.e.gv(s),s.byteOffset+d,c)
r.b=t
r.d=t.length
return r},
eZ:function eZ(a){var _=this
_.b=null
_.c=0
_.d=$
_.a=a},
f_:function f_(){},
kF(a,b){var t=b==null?32768:b
return new A.dN(new Uint8Array(t),a)},
dN:function dN(a,b){this.b=0
this.c=a
this.a=b},
fr:function fr(){},
p9(a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=A.ls(a2.a),d=Math.min(1,400/Math.max(e.gK(),e.gI())),c=Math.max(1,B.b.aK(e.gK()*d)),b=Math.max(1,B.b.aK(e.gI()*d)),a=c*b*3,a0=new Uint8Array(a),a1=new Float32Array(a)
for(t=a2.b,s=t.length,r=0;r<b;++r){q=e.a
q=q==null?f:q.b
p=B.a.ar(r*(q==null?0:q),b)
for(q=r*c,o=0;o<c;++o){n=e.a
m=n==null
l=m?f:n.a
k=B.a.ar(o*(l==null?0:l),c)
j=m?f:n.S(k,p,f)
if(j==null)j=new A.C()
i=(q+o)*3
h=(B.a.a1(p,224)*224+B.a.a1(k,224))*3
for(g=0;g<3;++g){n=i+g
m=B.b.h(j.n(0,g))
if(!(n>=0&&n<a))return A.a(a0,n)
a0[n]=m
m=h+g
if(!(m>=0&&m<s))return A.a(t,m)
m=t[m]
if(!(n<a))return A.a(a1,n)
a1[n]=m}}}return new A.ha(c,b,a0,a1)},
p7(c0,c1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null
if(c0.gK()!==c1.gK()||c0.gI()!==c1.gI())throw A.f(A.bg("Image dimensions must match."))
c0=A.jV(c0)
c1=A.jV(c1)
t=c0.a
s=J.aN(t.gv(t))
t=c1.a
r=J.aN(t.gv(t))
q=c0.a.gaE()
p=c1.a.gaE()
for(t=s.length,o=r.length,n=u.dh,m=0,l=0,k=0,j=0;j<3;++j){i=A.k(new Array(5),n)
for(h=c0.a,g=h==null,f=0;f<5;++f){e=g?b9:h.a
if(e==null)e=0
i[f]=new Float64Array(e)}e=i.length
d=0
for(;;){c=g?b9:h.b
if(!(d<(c==null?0:c)))break
A:{c=d>=7
b=d*q
a=d*p
a0=d-7
a1=a0*q
a0*=p
a2=0
for(;;){a3=g?b9:h.a
if(!(a2<(a3==null?0:a3)))break
a3=a2*3
a4=b+a3+j
if(!(a4>=0&&a4<t))return A.a(s,a4)
a5=s[a4]
a4=a+a3+j
if(!(a4>=0&&a4<o))return A.a(r,a4)
a6=r[a4]
a4=a5-a6
m+=a4*a4
if(0>=e)return A.a(i,0)
a4=i[0]
if(!(a2<a4.length))return A.a(a4,a2)
a7=a4[a2]
a4.$flags&2&&A.c(a4)
a4[a2]=a7+a5
if(1>=e)return A.a(i,1)
a7=i[1]
if(!(a2<a7.length))return A.a(a7,a2)
a8=a7[a2]
a7.$flags&2&&A.c(a7)
a7[a2]=a8+a6
if(2>=e)return A.a(i,2)
a8=i[2]
if(!(a2<a8.length))return A.a(a8,a2)
a9=a8[a2]
a8.$flags&2&&A.c(a8)
a8[a2]=a9+a5*a5
if(3>=e)return A.a(i,3)
a9=i[3]
if(!(a2<a9.length))return A.a(a9,a2)
b0=a9[a2]
a9.$flags&2&&A.c(a9)
a9[a2]=b0+a6*a6
if(4>=e)return A.a(i,4)
b0=i[4]
if(!(a2<b0.length))return A.a(b0,a2)
b1=b0[a2]
b0.$flags&2&&A.c(b0)
b0[a2]=b1+a5*a6
if(c){b1=a1+a3+j
if(!(b1>=0&&b1<t))return A.a(s,b1)
b2=s[b1]
a3=a0+a3+j
if(!(a3>=0&&a3<o))return A.a(r,a3)
b3=r[a3]
a4[a2]=a4[a2]-b2
a7[a2]=a7[a2]-b3
a8[a2]=a8[a2]-b2*b2
a9[a2]=a9[a2]-b3*b3
b0[a2]=b0[a2]-b2*b3}++a2}if(d<6)break A
b4=new Float64Array(5)
a2=0
for(;;){c=g?b9:h.a
if(!(a2<(c==null?0:c)))break
B:{for(c=a2>=7,b=a2-7,b5=0;b5<5;++b5){a=b4[b5]
if(!(b5<e))return A.a(i,b5)
a0=i[b5]
a1=a0.length
if(!(a2<a1))return A.a(a0,a2)
b4[b5]=a+a0[a2]
if(c){a=b4[b5]
if(!(b>=0&&b<a1))return A.a(a0,b)
b4[b5]=a-a0[b]}}if(a2<6)break B
c=b4[0]
b6=c/49
b=b4[1]
b7=b/49
a=b4[2]
a0=b4[3]
l+=(2*b6*b7+6.5025)*(2*((b4[4]-c*b7)/48)+58.5225)/((b6*b6+b7*b7+6.5025)*((a-c*b6)/48+(a0-b*b7)/48+58.5225));++k}++a2}}++d}}b8=m/(c0.gK()*c0.gI()*3)
t=k===0?b9:l/k
return new A.eq(t,b8===0?1/0:10*Math.log(65025/b8)/2.302585092994046)},
hG:function hG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ha:function ha(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oJ(a){var t,s=a.length
if(s!==150528)throw A.f(A.hk("Expected 150528 float32 values, got "+s+".",null,null))
for(t=0;t<s;++t)if(!isFinite(a[t]))throw A.f(B.cI)
return a},
hQ:function hQ(a){this.a=a},
p5(){var t,s=v.G.self,r=new A.iZ()
if(typeof r=="function")A.aw(A.bg("Attempting to rewrap a JS function."))
t=function(a,b){return function(c){return a(b,c,arguments.length)}}(A.od,r)
t[$.jY()]=r
s.onmessage=t},
iZ:function iZ(){},
iY:function iY(){},
h9:function h9(a,b){this.a=a
this.b=b},
J:function J(a){this.a=-1
this.b=a},
ch:function ch(a){this.a=a},
ci:function ci(a){this.a=a},
cj:function cj(a){this.a=a},
ck:function ck(a){this.a=a},
cl:function cl(a){this.a=a},
cm:function cm(a){this.a=a},
co:function co(a,b){this.a=a
this.b=b},
cp:function cp(a){this.a=a},
cq:function cq(a,b){this.a=a
this.b=b},
cr:function cr(a){this.a=a},
cs:function cs(a,b){this.a=a
this.b=b},
mg(a,b,c,d){var t=new A.cn(new Uint8Array(4))
t.fw(a,b,c,d)
return t},
bC:function bC(a){this.a=a},
eG:function eG(a){this.a=a},
cn:function cn(a){this.a=a},
h0(a,b,c){var t
if(b===c)return a
switch(b.a){case 0:if(a===0)t=0
else{t=B.bN.n(0,c)
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
case 1:return B.b.h(B.b.J(a,0,1)*3)
case 2:return B.b.h(B.b.J(a,0,1)*15)
case 3:return B.b.h(B.b.J(a,0,1)*255)
case 4:return B.b.h(B.b.J(a,0,1)*65535)
case 5:return B.b.h(B.b.J(a,0,1)*4294967295)
case 6:return B.b.h(a<0?B.b.J(a,-1,1)*128:B.b.J(a,-1,1)*127)
case 7:return B.b.h(a<0?B.b.J(a,-1,1)*32768:B.b.J(a,-1,1)*32767)
case 8:return B.b.h(a<0?B.b.J(a,-1,1)*2147483648:B.b.J(a,-1,1)*2147483647)
case 9:case 10:case 11:return a}break}},
ae:function ae(a,b){this.a=a
this.b=b},
eB:function eB(a,b){this.a=a
this.b=b},
dd(a){var t,s=new A.bE(A.Q(u.N,u.P))
s.fE(a)
t=a.b
if(t!=null)s.b=new Uint8Array(A.w(t))
return s},
j7(a){var t=new A.bE(A.Q(u.N,u.P))
t.bJ(a)
return t},
bE:function bE(a){this.b=null
this.a=a},
fX:function fX(a,b){this.a=a
this.b=b},
h(a,b,c){return new A.eL(a,b)},
eL:function eL(a,b){this.a=a
this.b=b},
b2:function b2(a){this.a=a},
hp:function hp(a){this.a=a},
kk(a){var t=new A.aQ(A.Q(u.p,u.r),new A.b2(A.Q(u.N,u.P)))
t.j5(a)
return t},
aQ:function aQ(a,b){this.a=a
this.b=b},
hq:function hq(a){this.a=a},
hr:function hr(a){this.a=a},
kr(a,b){var t=new A.bO(new Uint16Array(b))
t.fJ(a,b)
return t},
mw(a){var t=new Uint32Array(1)
t[0]=a
return new A.bk(t)},
km(a,b){var t=new A.bk(new Uint32Array(b))
t.fG(a,b)
return t},
kn(a,b){var t,s=J.fd(b,u.j)
for(t=0;t<b;++t)s[t]=new A.cY(a.k(),a.k())
return new A.bK(s)},
kq(a,b){var t=new A.bN(new Int16Array(b))
t.fI(a,b)
return t},
ko(a,b){var t=new A.bL(new Int32Array(b))
t.fH(a,b)
return t},
kp(a,b){var t,s,r,q,p=J.fd(b,u.j)
for(t=0;t<b;++t){s=a.k()
r=$.I()
r.$flags&2&&A.c(r)
r[0]=s
s=$.Z()
if(0>=s.length)return A.a(s,0)
q=s[0]
r[0]=a.k()
p[t]=new A.cY(q,s[0])}return new A.bM(p)},
ks(a,b){var t=new A.cy(new Float32Array(b))
t.fK(a,b)
return t},
kl(a,b){var t=new A.cw(new Float64Array(b))
t.fF(a,b)
return t},
a4:function a4(a,b){this.a=a
this.b=b},
X:function X(){},
b1:function b1(a){this.a=a},
bJ:function bJ(a){this.a=a},
bO:function bO(a){this.a=a},
bk:function bk(a){this.a=a},
bK:function bK(a){this.a=a},
bl:function bl(a){this.a=a},
bN:function bN(a){this.a=a},
bL:function bL(a){this.a=a},
bM:function bM(a){this.a=a},
cy:function cy(a){this.a=a},
cw:function cw(a){this.a=a},
cz:function cz(a){this.a=a},
cx:function cx(a){this.a=a},
k5(a){var t,s,r=new A.h8()
if(!A.k6(a))A.aw(A.l("Not a bitmap file."))
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
k6(a){if(a.c-a.d<2)return!1
return A.n(a,null,0).l()===19778},
m7(a,b){var t,s,r,q,p=b==null?A.k5(a):b,o=a.d,n=a.k(),m=a.k(),l=$.I()
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
if(q>=14)A.aw(A.l("Unsupported BMP compression type: "+q))
if(!(q<14))return A.a(B.ag,q)
q=B.ag[q]
a.k()
l[0]=a.k()
l[0]=a.k()
l=a.k()
a.k()
o=new A.b_(p,t,m,n,s,r,q,l,o)
o.dJ(a,b)
return o},
a3:function a3(a,b){this.a=a
this.b=b},
h8:function h8(){this.b=$},
b_:function b_(a,b,c,d,e,f,g,h,i){var _=this
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
eC:function eC(a){this.a=$
this.b=null
this.c=a},
h7:function h7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hd:function hd(a){this.a=$
this.b=null
this.c=a},
F:function F(){},
hb:function hb(){},
he:function he(){},
eM:function eM(){},
du:function du(a,b,c,d){var _=this
_.r=a
_.w=b
_.x=c
_.b=_.a=0
_.c=d},
ct:function ct(a,b){this.a=a
this.b=b},
bF:function bF(a,b){this.a=a
this.b=b},
eN:function eN(){var _=this
_.w=_.r=_.f=_.d=_.c=_.b=_.a=$},
kd(a,b,c,d){var t,s
switch(a.a){case 1:return new A.f5(c,b)
case 2:return new A.dv(c,d==null?1:d,b)
case 3:return new A.dv(c,d==null?16:d,b)
case 4:t=d==null?32:d
s=new A.f3(c,t,b)
s.fN(b,c,t)
return s
case 5:return new A.f4(c,d==null?16:d,b)
case 6:return new A.du(c,d==null?32:d,!1,b)
case 7:return new A.du(c,d==null?32:d,!0,b)
default:throw A.f(A.l("Invalid compression type: "+a.C(0)))}},
aD:function aD(a,b){this.a=a
this.b=b},
b0:function b0(){},
f1:function f1(){},
ml(a,b,c,d){var t,s,r,q,p,o,n,m
if(b===0){if(d!==0)throw A.f(A.l("Incomplete huffman data"))
return}t=a.d
s=a.k()
r=a.k()
a.d+=4
q=a.k()
p=!0
if(s<65537)p=r>=65537
if(p)throw A.f(A.l("Invalid huffman table size"))
a.d+=4
o=A.Y(65537,0,!1,u.p)
n=J.a9(16384,u.gV)
for(m=0;m<16384;++m)n[m]=new A.eO()
A.mm(a,b-20,s,r,o)
if(q>8*(b-(a.d-t)))throw A.f(A.l("Error in header for Huffman-encoded data (invalid number of bits)."))
A.mi(o,s,r,n)
A.mk(o,n,a,q,r,d,c)},
mk(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m,l,k="Error in Huffman-encoded data (invalid code).",j=A.k([0,0],u.t),i=c.d+B.a.X(d+7,8)
for(t=b.length,s=0;c.d<i;){A.j8(j,c)
while(r=j[1],r>=14){q=B.a.b6(j[0],r-14)&16383
if(!(q<t))return A.a(b,q)
p=b[q]
q=p.a
if(q!==0){B.c.i(j,1,r-q)
s=A.j9(p.b,e,j,c,g,s,f)}else{if(p.c==null)throw A.f(A.l(k))
for(o=0;o<p.b;++o){r=p.c
if(!(o<r.length))return A.a(r,o)
r=r[o]
if(!(r<65537))return A.a(a,r)
n=a[r]&63
for(;;){r=j[1]
if(!(r<n&&c.d<i))break
A.j8(j,c)}if(r>=n){q=p.c
if(!(o<q.length))return A.a(q,o)
q=q[o]
if(!(q<65537))return A.a(a,q)
r-=n
if(a[q]>>>6===(B.a.b6(j[0],r)&B.a.L(1,n)-1)>>>0){B.c.i(j,1,r)
r=p.c
if(!(o<r.length))return A.a(r,o)
m=A.j9(r[o],e,j,c,g,s,f)
s=m
break}}}if(o===p.b)throw A.f(A.l(k))}}}l=8-d&7
B.c.i(j,0,B.a.j(j[0],l))
B.c.i(j,1,j[1]-l)
while(r=j[1],r>0){q=B.a.V(j[0],14-r)&16383
if(!(q<t))return A.a(b,q)
p=b[q]
q=p.a
if(q!==0){B.c.i(j,1,r-q)
s=A.j9(p.b,e,j,c,g,s,f)}else throw A.f(A.l(k))}if(s!==f)throw A.f(A.l("Error in Huffman-encoded data (decoded data are shorter than expected)."))},
j9(a,b,c,d,e,f,g){var t,s,r,q,p,o,n="Error in Huffman-encoded data (decoded data are longer than expected)."
if(a===b){if(c[1]<8)A.j8(c,d)
B.c.i(c,1,c[1]-8)
t=B.a.b6(c[0],c[1])&255
if(f+t>g)throw A.f(A.l(n))
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
e[f]=a}else throw A.f(A.l(n))
f=o}return f},
mi(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j="Error in Huffman-encoded data (invalid code table entry)."
for(t=d.length,s=u.t,r=u.p;b<=c;++b){if(!(b<65537))return A.a(a,b)
q=a[b]
p=q>>>6
o=q&63
if(B.a.a2(p,o)!==0)throw A.f(A.l(j))
if(o>14){q=B.a.a_(p,o-14)
if(!(q<t))return A.a(d,q)
n=d[q]
if(n.a!==0)throw A.f(A.l(j))
q=++n.b
m=n.c
if(m!=null){n.sf5(A.Y(q,0,!1,r))
for(l=0;l<n.b-1;++l){q=n.c
q.toString
if(!(l<m.length))return A.a(m,l)
B.c.i(q,l,m[l])}}else n.sf5(A.k([0],s))
q=n.c
q.toString
B.c.i(q,n.b-1,b)}else if(o!==0){q=14-o
k=B.a.V(p,q)
if(!(k<t))return A.a(d,k)
for(l=B.a.V(1,q);l>0;--l,++k){if(!(k<t))return A.a(d,k)
n=d[k]
if(n.a!==0||n.c!=null)throw A.f(A.l(j))
n.a=o
n.b=b}}}},
mm(a,b,c,d,e){var t,s,r,q,p,o="Error in Huffman-encoded data (unexpected end of code table data).",n="Error in Huffman-encoded data (code table is longer than expected).",m=a.d,l=A.k([0,0],u.t)
for(t=d+1;c<=d;++c){if(a.d-m>b)throw A.f(A.l(o))
s=A.ke(6,l,a)
B.c.i(e,c,s)
if(s===63){if(a.d-m>b)throw A.f(A.l(o))
r=A.ke(8,l,a)+6
if(c+r>t)throw A.f(A.l(n))
for(;q=r-1,r!==0;r=q,c=p){p=c+1
B.c.i(e,c,0)}--c}else if(s>=59){r=s-59+2
if(c+r>t)throw A.f(A.l(n))
for(;q=r-1,r!==0;r=q,c=p){p=c+1
B.c.i(e,c,0)}--c}}A.mj(e)},
mj(a){var t,s,r,q,p,o=A.Y(59,0,!1,u.p)
for(t=0;t<65537;++t){s=a[t]
if(!(s<59))return A.a(o,s)
B.c.i(o,s,o[s]+1)}for(r=0,t=58;t>0;--t,r=q){q=r+o[t]>>>1
B.c.i(o,t,r)}for(t=0;t<65537;++t){p=a[t]
if(p>0){if(!(p<59))return A.a(o,p)
s=o[p]
B.c.i(o,p,s+1)
B.c.i(a,t,(p|s<<6)>>>0)}}},
j8(a,b){B.c.i(a,0,(a[0]<<8|b.D())>>>0)
B.c.i(a,1,a[1]+8>>>0)},
ke(a,b,c){var t
while(t=b[1],t<a){B.c.i(b,0,(b[0]<<8|J.d(c.a,c.d++))>>>0)
B.c.i(b,1,b[1]+8>>>0)}B.c.i(b,1,t-a)
return(B.a.b6(b[0],b[1])&B.a.L(1,a)-1)>>>0},
eO:function eO(){this.b=this.a=0
this.c=null},
mn(a){var t=A.p(a,!1,null,0)
if(t.k()!==20000630)return!1
if(t.D()!==2)return!1
if((t.be()&4294967289)>>>0!==0)return!1
return!0},
eP:function eP(a){var _=this
_.b=_.a=0
_.c=a
_.d=null
_.e=$},
ku(a,b,c){var t=new A.f2(a,A.k([],u.Q),A.Q(u.N,u.aX),B.aW,b)
t.fB(a,b,c)
return t},
de:function de(){},
hh:function hh(a,b){this.a=a
this.b=b},
f2:function f2(a,b,c,d,e){var _=this
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
f3:function f3(a,b,c){var _=this
_.r=null
_.w=a
_.x=b
_.y=$
_.z=null
_.b=_.a=0
_.c=c},
ep:function ep(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$},
f4:function f4(a,b,c){var _=this
_.w=a
_.x=b
_.y=null
_.b=_.a=0
_.c=c},
f5:function f5(a,b){var _=this
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
hg:function hg(){this.a=null},
kh(a){var t=new Uint8Array(a*3)
return new A.dh(A.mu(a),a,null,new A.ay(t,a,3))},
mt(a){return new A.dh(a.a,a.b,a.c,A.kG(a.d))},
mu(a){var t
for(t=1;t<=8;++t)if(B.a.L(1,t)>=a)return t
return 0},
dh:function dh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
di:function di(){},
f6:function f6(){var _=this
_.e=_.d=_.c=_.b=_.a=$
_.f=null
_.y=$},
dj:function dj(a){var _=this
_.b=_.a=0
_.e=null
_.r=a},
hm:function hm(){var _=this
_.a=null
_.e=_.d=_.c=_.b=0
_.w=_.f=null
_.y=_.x=$
_.z=null
_.Q=0
_.as=null
_.ay=_.ax=_.at=0
_.ch=null
_.dy=_.dx=_.db=_.cy=_.cx=_.CW=0},
kj(a){var t,s,r,q
if(a.l()!==0)return null
t=a.l()
if(t>=3)return null
if(B.cT[t]===B.aX)return null
s=a.l()
r=J.fd(s,u.gx)
for(q=0;q<s;++q){J.d(a.a,a.d++)
J.d(a.a,a.d++)
J.d(a.a,a.d++);++a.d
a.l()
a.l()
r[q]=new A.eX(a.k(),a.k())}return new A.eW(s,r)},
cv:function cv(a,b){this.a=a
this.b=b},
eW:function eW(a,b){this.d=a
this.e=b},
eX:function eX(a,b){this.d=a
this.e=b},
eV:function eV(a,b,c,d,e,f,g,h,i){var _=this
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
ho:function ho(){this.b=this.a=null},
eH:function eH(a,b,c){this.e=a
this.f=b
this.r=c},
bj:function bj(){},
bI:function bI(a){this.a=a},
dn:function dn(a){this.a=a},
pa(b2,b3,b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
if($.jM==null){t=new Uint8Array(768)
for(s=0;s<256;++s){r=256+s
if(!(r<768))return A.a(t,r)
t[r]=s}for(s=256;s<512;++s){r=256+s
if(!(r<768))return A.a(t,r)
t[r]=255}$.jM=t}for(r=b5.$flags|0,s=0;s<64;++s){q=b3[s]
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
b5[a8]=m-c}for(r=$.jM,q=b4.$flags|0,s=0;s<64;++s){r.toString
p=B.a.j(b5[s]+8,4)
p=384+((p&2147483647)-((p&2147483648)>>>0))
if(!(p>=0&&p<768))return A.a(r,p)
p=r[p]
q&2&&A.c(b4)
if(!(s<64))return A.a(b4,s)
b4[s]=p}},
lv(e4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1=null,e2="ifd0",e3=e4.w
if(e3.n(0,e2).a.aH(274)){t=e3.n(0,e2).gbT()
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
n=A.M(e1,e1,B.f,0,B.j,o,e1,0,3,e1,B.f,p,!1)
n.e=A.dd(e3)
n.gbQ().n(0,e2).sbT(e1)
n.c=e4.r
m=t-1
l=r-1
switch(s){case 2:k=new A.iL(n,l)
break
case 3:k=new A.iM(n,l,m)
break
case 4:k=new A.iN(n,m)
break
case 5:k=new A.iO(n)
break
case 6:k=new A.iP(n,m)
break
case 7:k=new A.iQ(n,m,l)
break
case 8:k=new A.iR(n,l)
break
default:k=n.gfo()
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
b8=B.a.J((c3&2147483647)-((c3&2147483648)>>>0),0,255)
c3=B.a.j(a0-88*c1-183*c2,8)
b9=B.a.J((c3&2147483647)-((c3&2147483648)>>>0),0,255)
c3=B.a.j(a0+454*c1,8)
c0=B.a.J((c3&2147483647)-((c3&2147483648)>>>0),0,255)}k.$5(b,e,b8,b9,c0)}}break
case 4:a1=e4.c
if(a1==null)throw A.f(A.l("Unsupported color mode (4 components)"))
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
d2=255-B.a.J((d8&2147483647)-((d8&2147483648)>>>0),0,255)
d8=B.a.j(d7-88*d6-183*d5,8)
d3=255-B.a.J((d8&2147483647)-((d8&2147483648)>>>0),0,255)
d8=B.a.j(d7+454*d6,8)
a0=255-B.a.J((d8&2147483647)-((d8&2147483648)>>>0),0,255)}d8=B.a.j(d2*d4,8)
d9=B.a.j(d3*d4,8)
e0=B.a.j(a0*d4,8)
k.$5(b,e,(d8&2147483647)-((d8&2147483648)>>>0),(d9&2147483647)-((d9&2147483648)>>>0),(e0&2147483647)-((e0&2147483648)>>>0))}}break
default:throw A.f(A.l("Unsupported color mode"))}return n},
iL:function iL(a,b){this.a=a
this.b=b},
iM:function iM(a,b,c){this.a=a
this.b=b
this.c=c},
iN:function iN(a,b){this.a=a
this.b=b},
iO:function iO(a){this.a=a},
iP:function iP(a,b){this.a=a
this.b=b},
iQ:function iQ(a,b,c){this.a=a
this.b=b
this.c=c},
iR:function iR(a,b){this.a=a
this.b=b},
hB:function hB(){this.d=null},
bm:function bm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.y=_.x=_.w=_.r=_.f=_.e=$},
hD(){var t=A.Y(4,null,!1,u.bC),s=A.k([],u.f8),r=u.eA,q=J.je(0,r)
r=J.je(0,r)
return new A.hC(new A.bE(A.Q(u.N,u.P)),t,s,q,r,A.k([],u.E))},
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
fg:function fg(a,b){var _=this
_.e=_.d=_.c=_.b=null
_.r=_.f=0
_.x=_.w=$
_.y=a
_.z=b},
fh:function fh(){this.b=this.a=0},
hF:function hF(){this.r=this.f=$},
fi:function fi(a,b,c,d,e,f,g,h){var _=this
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
hE:function hE(){this.b=null},
cQ:function cQ(a,b){this.a=a
this.b=b},
dY:function dY(a,b){this.a=a
this.b=b},
dZ:function dZ(){},
f7:function f7(a,b,c,d,e,f,g,h,i){var _=this
_.y=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
hz(){var t=u.N
return new A.f8(A.Q(t,t),A.k([],u.d),A.k([],u.t))},
br:function br(a,b){this.a=a
this.b=b},
fv:function fv(){},
f8:function f8(a,b,c){var _=this
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
cP:function cP(a){var _=this
_.a=a
_.c=_.b=0
_.d=$
_.e=0},
fu:function fu(a,b){this.a=a
this.b=b},
hS:function hS(a,b,c){var _=this
_.a=null
_.b=a
_.c=0
_.d=b
_.e=$
_.f=0
_.r=!1
_.w=null
_.z=c},
bs:function bs(a,b){this.a=a
this.b=b},
bt:function bt(a){this.b=this.a=0
this.e=a},
hT:function hT(a){this.b=this.a=null
this.c=a},
hU:function hU(){},
fx:function fx(){this.a=null},
fy:function fy(){this.a=null},
aS:function aS(){},
fB:function fB(){this.a=null},
fC:function fC(){this.a=null},
fF:function fF(){this.a=null},
fG:function fG(){this.a=null},
e0:function e0(a){this.b=a},
fE:function fE(){},
hV:function hV(){var _=this
_.w=_.r=_.f=_.e=$},
c5:function c5(a){this.a=a
this.c=null},
kM(a){var t=new A.fz(A.k([],u.l),A.Q(u.p,u.fh))
t.fP(a)
return t},
jv(a,b,c,d){var t=a/255,s=b/255,r=c/255,q=d/255,p=s*(1-r),o=t*(1-q)
return B.b.h(B.b.J((2*t<r?2*s*t+p+o:q*r-2*(r-t)*(q-s)+p+o)*255,0,255))},
hX(a,b){if(b===0)return 0
return B.a.h(B.a.J(B.b.h(255*(1-(1-a/255)/(b/255))),0,255))},
hZ(a,b){return B.a.h(B.a.J(a+b-255,0,255))},
jx(a,b){return B.a.h(B.a.J(255-(255-b)*(255-a),0,255))},
hY(a,b){if(b===255)return 255
return B.b.h(B.b.J(a/255/(1-b/255)*255,0,255))},
jy(a,b){var t=a/255,s=b/255,r=1-s
return B.b.aK(255*(r*s*t+s*(1-r*(1-t))))},
jt(a,b){var t=b/255,s=a/255
if(s<0.5)return B.b.aK(510*t*s)
else return B.b.aK(255*(1-2*(1-t)*(1-s)))},
jz(a,b){if(b<128)return A.hX(a,2*b)
else return A.hY(a,2*(b-128))},
ju(a,b){var t
if(b<128)return A.hZ(a,2*b)
else{t=2*(b-128)
return t+a>255?255:a+t}},
jw(a,b){return b<128?Math.min(a,2*b):Math.max(a,2*(b-128))},
js(a,b){return B.b.aK(b+a-2*b*a/255)},
al(a,b,c){var t,s,r
if(a==null)t=0
else{t=a.length
if(c===1){if(!(b>=0&&b<t))return A.a(a,b)
t=a[b]}else{if(!(b>=0&&b<t))return A.a(a,b)
s=a[b]
r=b+1
if(!(r<t))return A.a(a,r)
r=(s<<8|a[r])>>>8
t=r}}return t},
kN(b6,b7,b8,b9,c0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=A.Q(u.p,u.fW)
for(t=c0.length,s=0;r=c0.length,s<r;c0.length===t||(0,A.aa)(c0),++s){q=c0[s]
b5.i(0,q.a,q)}if(b7===8)p=1
else p=b7===16?2:-1
o=A.M(b4,b4,B.f,0,B.j,b9,b4,0,r,b4,B.f,b8,!1)
if(p===-1)throw A.f(A.l("PSD: unsupported bit depth: "+A.z(b7)))
n=b5.n(0,0)
m=b5.n(0,1)
l=b5.n(0,2)
k=b5.n(0,-1)
j=A.k([0,0,0],u.t)
i=-p
for(t=o.a,t=t.gH(t),h=r>=5,g=r===4,f=r>=2,r=r>=4;t.F();){e=t.gP()
i+=p
switch(b6){case B.bX:e.sm(A.al(n.c,i,p))
e.sp(A.al(m.c,i,p))
e.sq(A.al(l.c,i,p))
e.st(r?A.al(k.c,i,p):255)
if(e.gt()!==0){e.sm((e.gm()+e.gt()-255)*255/e.gt())
e.sp((e.gp()+e.gt()-255)*255/e.gt())
e.sq((e.gq()+e.gt()-255)*255/e.gt())}break
case B.bZ:d=A.al(n.c,i,p)
c=A.al(m.c,i,p)
b=A.al(l.c,i,p)
a=r?A.al(k.c,i,p):255
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
a9=[B.b.aK(B.b.J(a6*255,0,255)),B.b.aK(B.b.J(a7*255,0,255)),B.b.aK(B.b.J(a8*255,0,255))]
e.sm(a9[0])
e.sp(a9[1])
e.sq(a9[2])
e.st(a)
break
case B.bW:b0=A.al(n.c,i,p)
a=f?A.al(k.c,i,p):255
e.sm(b0)
e.sp(b0)
e.sq(b0)
e.st(a)
break
case B.bY:b1=A.al(n.c,i,p)
b2=A.al(m.c,i,p)
a0=A.al(l.c,i,p)
b3=A.al(b5.n(0,g?-1:3).c,i,p)
a=h?A.al(k.c,i,p):255
A.lp(255-b1,255-b2,255-a0,255-b3,j)
e.sm(j[0])
e.sp(j[1])
e.sq(j[2])
e.st(a)
break
default:throw A.f(A.l("Unhandled color mode: "+A.z(b6)))}}return o},
aH:function aH(a,b){this.a=a
this.b=b},
fz:function fz(a,b){var _=this
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
fA:function fA(){},
fD:function fD(a,b,c){var _=this
_.b=_.a=null
_.f=_.e=_.d=_.c=$
_.r=null
_.as=_.y=_.w=$
_.ay=a
_.ch=b
_.cx=null
_.cy=c},
mW(a,b){var t
switch(a){case"lsct":t=b.c-b.d
b.k()
if(t>=12){if(b.af(4)!=="8BIM")A.aw(A.l("Invalid key in layer additional data"))
b.af(4)}if(t>=16)b.k()
return new A.fE()
default:return new A.e0(b)}},
cS:function cS(){},
hW:function hW(){this.a=null},
fH:function fH(){},
cV:function cV(a,b,c){this.a=a
this.b=b
this.c=c},
af:function af(a,b,c,d){var _=this
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
e1:function e1(){this.y=this.b=this.a=0},
b5(a,b){var t,s=a>>>8
if(!(s<256))return A.a(B.N,s)
s=B.N[s]
t=b>>>8
if(!(t<256))return A.a(B.N,t)
return(s<<17|B.N[t]<<16|B.N[a&255]<<1|B.N[b&255])>>>0},
az:function az(a){var _=this
_.a=a
_.b=0
_.c=!1
_.d=0
_.e=!1
_.f=0
_.r=!1},
i_:function i_(){this.b=this.a=null},
e8:function e8(a){var _=this
_.b=_.a=0
_.c=a
_.Q=_.z=_.y=_.x=_.f=_.e=0
_.as=null
_.ax=0},
ah:function ah(a,b){this.a=a
this.b=b},
i2:function i2(){this.a=null
this.b=$},
i3:function i3(a){this.a=a
this.c=this.b=0},
fM:function fM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=e},
jC(a,b,c){var t=new A.i5(b,a),s=u.v
t.e=A.Y(b,null,!1,s)
t.f=A.Y(b,null,!1,s)
return t},
i5:function i5(a,b){var _=this
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
fN:function fN(a,b,c,d){var _=this
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
c6:function c6(a,b){this.a=a
this.b=b},
a_:function a_(a,b){this.a=a
this.b=b},
aA:function aA(a,b){this.a=a
this.b=b},
fO:function fO(a){var _=this
_.b=_.a=0
_.d=null
_.f=a},
kC(){return new A.hN(new Uint8Array(4096))},
hN:function hN(a){var _=this
_.a=9
_.d=_.c=_.b=0
_.w=_.r=_.f=_.e=$
_.x=a
_.z=_.y=$
_.Q=null
_.as=$},
i4:function i4(){this.b=this.a=null
this.c=$},
jE(a,b){var t=new Int32Array(4),s=new Int32Array(4),r=new Int8Array(4),q=new Int8Array(4),p=A.Y(8,null,!1,u.eW),o=A.Y(4,null,!1,u.dP)
return new A.i8(a,b,new A.ie(),new A.ii(),new A.ia(t,s),new A.ik(r,q),p,o,new Uint8Array(4))},
kV(a,b,c){if(c===0)if(a===0)return b===0?6:5
else return b===0?4:0
return c},
i8:function i8(a,b,c,d,e,f,g,h,i){var _=this
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
_.az=null
_.bw=$
_.bD=_.bR=null
_.aC=$},
il:function il(){},
kT(a){var t=new A.ed(a)
t.b=254
t.c=0
t.d=-8
return t},
ed:function ed(a){var _=this
_.a=a
_.d=_.c=_.b=$
_.e=!1},
A(a,b,c){return B.a.aq(B.a.j(a+2*b+c+2,2),32)},
nc(a){var t,s=A.k([A.A(J.d(a.a,a.d+-33),J.d(a.a,a.d+-32),J.d(a.a,a.d+-31)),A.A(J.d(a.a,a.d+-32),J.d(a.a,a.d+-31),J.d(a.a,a.d+-30)),A.A(J.d(a.a,a.d+-31),J.d(a.a,a.d+-30),J.d(a.a,a.d+-29)),A.A(J.d(a.a,a.d+-30),J.d(a.a,a.d+-29),J.d(a.a,a.d+-28))],u.t)
for(t=0;t<4;++t)a.bI(t*32,4,s)},
n4(a){var t=J.d(a.a,a.d+-33),s=J.d(a.a,a.d+-1),r=J.d(a.a,a.d+31),q=J.d(a.a,a.d+63),p=J.d(a.a,a.d+95),o=A.n(a,null,0),n=o.cs(),m=A.A(t,s,r)
n.$flags&2&&A.c(n)
if(0>=n.length)return A.a(n,0)
n[0]=16843009*m
o.d+=32
m=o.cs()
n=A.A(s,r,q)
m.$flags&2&&A.c(m)
if(0>=m.length)return A.a(m,0)
m[0]=16843009*n
o.d+=32
n=o.cs()
m=A.A(r,q,p)
n.$flags&2&&A.c(n)
if(0>=n.length)return A.a(n,0)
n[0]=16843009*m
o.d+=32
m=o.cs()
n=A.A(q,p,p)
m.$flags&2&&A.c(m)
if(0>=m.length)return A.a(m,0)
m[0]=16843009*n},
n2(a){var t,s,r,q
for(t=4,s=0;s<4;++s)t+=J.d(a.a,a.d+(s-32))+J.d(a.a,a.d+(-1+s*32))
t=B.a.j(t,3)
for(s=0;s<4;++s){r=a.a
q=a.d+s*32
J.aX(r,q,q+4,t)}},
jF(a,b){var t,s,r,q,p,o,n=255-J.d(a.a,a.d+-33)
for(t=0,s=0;s<b;++s){r=n+J.d(a.a,a.d+(t-1))
for(q=0;q<b;++q){p=$.an()
o=r+J.d(a.a,a.d+(-32+q))
if(!(o>=0&&o<766))return A.a(p,o)
o=p[o]
J.x(a.a,a.d+(t+q),o)}t+=32}},
na(a){A.jF(a,4)},
nb(a){A.jF(a,8)},
n9(a){A.jF(a,16)},
n8(a){var t,s=J.d(a.a,a.d+-1),r=J.d(a.a,a.d+31),q=J.d(a.a,a.d+63),p=J.d(a.a,a.d+95),o=J.d(a.a,a.d+-33),n=J.d(a.a,a.d+-32),m=J.d(a.a,a.d+-31),l=J.d(a.a,a.d+-30),k=J.d(a.a,a.d+-29)
a.i(0,96,A.A(r,q,p))
t=A.A(s,r,q)
a.i(0,97,t)
a.i(0,64,t)
t=A.A(o,s,r)
a.i(0,98,t)
a.i(0,65,t)
a.i(0,32,t)
t=A.A(n,o,s)
a.i(0,99,t)
a.i(0,66,t)
a.i(0,33,t)
a.i(0,0,t)
t=A.A(m,n,o)
a.i(0,67,t)
a.i(0,34,t)
a.i(0,1,t)
t=A.A(l,m,n)
a.i(0,35,t)
a.i(0,2,t)
a.i(0,3,A.A(k,l,m))},
n7(a){var t,s=J.d(a.a,a.d+-32),r=J.d(a.a,a.d+-31),q=J.d(a.a,a.d+-30),p=J.d(a.a,a.d+-29),o=J.d(a.a,a.d+-28),n=J.d(a.a,a.d+-27),m=J.d(a.a,a.d+-26),l=J.d(a.a,a.d+-25)
a.i(0,0,A.A(s,r,q))
t=A.A(r,q,p)
a.i(0,32,t)
a.i(0,1,t)
t=A.A(q,p,o)
a.i(0,64,t)
a.i(0,33,t)
a.i(0,2,t)
t=A.A(p,o,n)
a.i(0,96,t)
a.i(0,65,t)
a.i(0,34,t)
a.i(0,3,t)
t=A.A(o,n,m)
a.i(0,97,t)
a.i(0,66,t)
a.i(0,35,t)
t=A.A(n,m,l)
a.i(0,98,t)
a.i(0,67,t)
a.i(0,99,A.A(m,l,l))},
ne(a){var t=J.d(a.a,a.d+-1),s=J.d(a.a,a.d+31),r=J.d(a.a,a.d+63),q=J.d(a.a,a.d+-33),p=J.d(a.a,a.d+-32),o=J.d(a.a,a.d+-31),n=J.d(a.a,a.d+-30),m=J.d(a.a,a.d+-29),l=B.a.aq(B.a.j(q+p+1,1),32)
a.i(0,65,l)
a.i(0,0,l)
l=B.a.aq(B.a.j(p+o+1,1),32)
a.i(0,66,l)
a.i(0,1,l)
l=B.a.aq(B.a.j(o+n+1,1),32)
a.i(0,67,l)
a.i(0,2,l)
a.i(0,3,B.a.aq(B.a.j(n+m+1,1),32))
a.i(0,96,A.A(r,s,t))
a.i(0,64,A.A(s,t,q))
l=A.A(t,q,p)
a.i(0,97,l)
a.i(0,32,l)
l=A.A(q,p,o)
a.i(0,98,l)
a.i(0,33,l)
l=A.A(p,o,n)
a.i(0,99,l)
a.i(0,34,l)
a.i(0,35,A.A(o,n,m))},
nd(a){var t,s=J.d(a.a,a.d+-32),r=J.d(a.a,a.d+-31),q=J.d(a.a,a.d+-30),p=J.d(a.a,a.d+-29),o=J.d(a.a,a.d+-28),n=J.d(a.a,a.d+-27),m=J.d(a.a,a.d+-26),l=J.d(a.a,a.d+-25)
a.i(0,0,B.a.aq(B.a.j(s+r+1,1),32))
t=B.a.aq(B.a.j(r+q+1,1),32)
a.i(0,64,t)
a.i(0,1,t)
t=B.a.aq(B.a.j(q+p+1,1),32)
a.i(0,65,t)
a.i(0,2,t)
t=B.a.aq(B.a.j(p+o+1,1),32)
a.i(0,66,t)
a.i(0,3,t)
a.i(0,32,A.A(s,r,q))
t=A.A(r,q,p)
a.i(0,96,t)
a.i(0,33,t)
t=A.A(q,p,o)
a.i(0,97,t)
a.i(0,34,t)
t=A.A(p,o,n)
a.i(0,98,t)
a.i(0,35,t)
a.i(0,67,A.A(o,n,m))
a.i(0,99,A.A(n,m,l))},
n5(a){var t,s=J.d(a.a,a.d+-1),r=J.d(a.a,a.d+31),q=J.d(a.a,a.d+63),p=J.d(a.a,a.d+95)
a.i(0,0,B.a.aq(B.a.j(s+r+1,1),32))
t=B.a.aq(B.a.j(r+q+1,1),32)
a.i(0,32,t)
a.i(0,2,t)
t=B.a.aq(B.a.j(q+p+1,1),32)
a.i(0,64,t)
a.i(0,34,t)
a.i(0,1,A.A(s,r,q))
t=A.A(r,q,p)
a.i(0,33,t)
a.i(0,3,t)
t=A.A(q,p,p)
a.i(0,65,t)
a.i(0,35,t)
a.i(0,99,p)
a.i(0,98,p)
a.i(0,97,p)
a.i(0,96,p)
a.i(0,66,p)
a.i(0,67,p)},
n3(a){var t=J.d(a.a,a.d+-1),s=J.d(a.a,a.d+31),r=J.d(a.a,a.d+63),q=J.d(a.a,a.d+95),p=J.d(a.a,a.d+-33),o=J.d(a.a,a.d+-32),n=J.d(a.a,a.d+-31),m=J.d(a.a,a.d+-30),l=B.a.aq(B.a.j(t+p+1,1),32)
a.i(0,34,l)
a.i(0,0,l)
l=B.a.aq(B.a.j(s+t+1,1),32)
a.i(0,66,l)
a.i(0,32,l)
l=B.a.aq(B.a.j(r+s+1,1),32)
a.i(0,98,l)
a.i(0,64,l)
a.i(0,96,B.a.aq(B.a.j(q+r+1,1),32))
a.i(0,3,A.A(o,n,m))
a.i(0,2,A.A(p,o,n))
l=A.A(t,p,o)
a.i(0,35,l)
a.i(0,1,l)
l=A.A(s,t,p)
a.i(0,67,l)
a.i(0,33,l)
l=A.A(r,s,t)
a.i(0,99,l)
a.i(0,65,l)
a.i(0,97,A.A(q,r,s))},
np(a){var t
for(t=0;t<16;++t)a.bc(t*32,16,a,-32)},
nn(a){var t,s,r,q,p
for(t=0,s=16;s>0;--s){r=J.d(a.a,a.d+(t-1))
q=a.a
p=a.d+t
J.aX(q,p,p+16,r)
t+=32}},
ic(a,b){var t,s,r
for(t=0;t<16;++t){s=b.a
r=b.d+t*32
J.aX(s,r,r+16,a)}},
nf(a){var t,s
for(t=16,s=0;s<16;++s)t+=J.d(a.a,a.d+(-1+s*32))+J.d(a.a,a.d+(s-32))
A.ic(B.a.j(t,5),a)},
nh(a){var t,s
for(t=8,s=0;s<16;++s)t+=J.d(a.a,a.d+(-1+s*32))
A.ic(B.a.j(t,4),a)},
ng(a){var t,s
for(t=8,s=0;s<16;++s)t+=J.d(a.a,a.d+(s-32))
A.ic(B.a.j(t,4),a)},
ni(a){A.ic(128,a)},
nq(a){var t
for(t=0;t<8;++t)a.bc(t*32,8,a,-32)},
no(a){var t,s,r,q,p
for(t=0,s=0;s<8;++s){r=J.d(a.a,a.d+(t-1))
q=a.a
p=a.d+t
J.aX(q,p,p+8,r)
t+=32}},
id(a,b){var t,s,r
for(t=0;t<8;++t){s=b.a
r=b.d+t*32
J.aX(s,r,r+8,a)}},
nj(a){var t,s
for(t=8,s=0;s<8;++s)t+=J.d(a.a,a.d+(s-32))+J.d(a.a,a.d+(-1+s*32))
A.id(B.a.j(t,4),a)},
nk(a){var t,s
for(t=4,s=0;s<8;++s)t+=J.d(a.a,a.d+(s-32))
A.id(B.a.j(t,3),a)},
nl(a){var t,s
for(t=4,s=0;s<8;++s)t+=J.d(a.a,a.d+(-1+s*32))
A.id(B.a.j(t,3),a)},
nm(a){A.id(128,a)},
bv(a,b,c,d,e){var t=b+c+d*32,s=J.d(a.a,a.d+t)+B.a.j(e,3)
if(!((s&-256)>>>0===0))s=s<0?0:255
a.i(0,t,s)},
ib(a,b,c,d,e){A.bv(a,0,0,b,c+d)
A.bv(a,0,1,b,c+e)
A.bv(a,0,2,b,c-e)
A.bv(a,0,3,b,c-d)},
n6(){var t,s,r,q
if(!$.kU){for(t=-255;t<=255;++t){s=$.h5()
r=255+t
q=t<0?-t:t
s.$flags&2&&A.c(s)
s[r]=q
q=$.j0()
s=B.a.j(s[r],1)
q.$flags&2&&A.c(q)
q[r]=s}for(t=-1020;t<=1020;++t){s=$.j1()
if(t<-128)r=-128
else r=t>127?127:t
s.$flags&2&&A.c(s)
s[1020+t]=r}for(t=-112;t<=112;++t){s=$.j2()
if(t<-16)r=-16
else r=t>15?15:t
s.$flags&2&&A.c(s)
s[112+t]=r}for(t=-255;t<=510;++t){s=$.an()
if(t<0)r=0
else r=t>255?255:t
s.$flags&2&&A.c(s)
s[255+t]=r}$.kU=!0}},
i9:function i9(){},
n1(){var t,s=J.a9(3,u.D)
for(t=0;t<3;++t)s[t]=new Uint8Array(11)
return new A.ec(s)},
nG(){var t,s,r,q,p=new Uint8Array(3),o=J.a9(4,u.B)
for(t=u.V,s=0;s<4;++s){r=J.a9(8,t)
for(q=0;q<8;++q)r[q]=A.n1()
o[s]=r}B.e.aw(p,0,3,255)
return new A.ij(p,o)},
ie:function ie(){this.d=$},
ii:function ii(){},
ik:function ik(a,b){var _=this
_.b=_.a=!1
_.c=!0
_.d=a
_.e=b},
ec:function ec(a){this.a=a},
ij:function ij(a,b){this.a=a
this.b=b},
ia:function ia(a,b){var _=this
_.a=$
_.b=null
_.d=_.c=$
_.e=a
_.f=b},
bc:function bc(){var _=this
_.b=_.a=0
_.c=!1
_.d=0},
ef:function ef(){this.b=this.a=0},
fV:function fV(a,b,c){this.a=a
this.b=b
this.c=c},
eg:function eg(a,b){var _=this
_.a=a
_.b=$
_.c=b
_.e=_.d=null
_.f=$},
eh:function eh(a,b,c){this.a=a
this.b=b
this.c=c},
jG(a,b){var t,s=A.k([],u.A),r=A.k([],u.F),q=new Uint32Array(2),p=new A.fT(a,q)
q=p.e=J.L(B.n.gv(q),0,null)
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
return new A.ee(p,b,s,r)},
bw(a,b){return B.a.j(a+B.a.L(1,b)-1,b)},
ee:function ee(a,b,c,d){var _=this
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
f9:function f9(a,b,c,d){var _=this
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
fT:function fT(a,b){var _=this
_.a=0
_.b=!0
_.c=a
_.d=b
_.e=$},
ig:function ig(a,b){this.a=a
this.b=b},
bd(a,b){return((a^b)>>>1&2139062143)+((a&b)>>>0)},
c8(a){if(a<0)return 0
if(a>255)return 255
return a},
ih(a,b,c){return Math.abs(b-c)-Math.abs(a-c)},
nr(a,b,c){return 4278190080},
ns(a,b,c){return a},
nx(a,b,c){if(!(c>=0&&c<b.length))return A.a(b,c)
return b[c]},
ny(a,b,c){var t=c+1
if(!(t>=0&&t<b.length))return A.a(b,t)
return b[t]},
nz(a,b,c){var t=c-1
if(!(t>=0&&t<b.length))return A.a(b,t)
return b[t]},
nA(a,b,c){var t,s,r=b.length
if(!(c>=0&&c<r))return A.a(b,c)
t=b[c]
s=c+1
if(!(s<r))return A.a(b,s)
return A.bd(A.bd(a,b[s]),t)},
nB(a,b,c){var t=c-1
if(!(t>=0&&t<b.length))return A.a(b,t)
return A.bd(a,b[t])},
nC(a,b,c){if(!(c>=0&&c<b.length))return A.a(b,c)
return A.bd(a,b[c])},
nD(a,b,c){var t=c-1,s=b.length
if(!(t>=0&&t<s))return A.a(b,t)
t=b[t]
if(!(c>=0&&c<s))return A.a(b,c)
return A.bd(t,b[c])},
nE(a,b,c){var t,s,r=b.length
if(!(c>=0&&c<r))return A.a(b,c)
t=b[c]
s=c+1
if(!(s<r))return A.a(b,s)
return A.bd(t,b[s])},
nt(a,b,c){var t,s,r=c-1,q=b.length
if(!(r>=0&&r<q))return A.a(b,r)
r=b[r]
if(!(c>=0&&c<q))return A.a(b,c)
t=b[c]
s=c+1
if(!(s<q))return A.a(b,s)
s=b[s]
return A.bd(A.bd(a,r),A.bd(t,s))},
nu(a,b,c){var t,s,r=b.length
if(!(c>=0&&c<r))return A.a(b,c)
t=b[c]
s=c-1
if(!(s>=0&&s<r))return A.a(b,s)
s=b[s]
return A.ih(t>>>24,a>>>24,s>>>24)+A.ih(t>>>16&255,a>>>16&255,s>>>16&255)+A.ih(t>>>8&255,a>>>8&255,s>>>8&255)+A.ih(t&255,a&255,s&255)<=0?t:a},
nv(a,b,c){var t,s,r=b.length
if(!(c>=0&&c<r))return A.a(b,c)
t=b[c]
s=c-1
if(!(s>=0&&s<r))return A.a(b,s)
s=b[s]
return(A.c8((a>>>24)+(t>>>24)-(s>>>24))<<24|A.c8((a>>>16&255)+(t>>>16&255)-(s>>>16&255))<<16|A.c8((a>>>8&255)+(t>>>8&255)-(s>>>8&255))<<8|A.c8((a&255)+(t&255)-(s&255)))>>>0},
nw(a,b,c){var t,s,r,q,p,o=b.length
if(!(c>=0&&c<o))return A.a(b,c)
t=b[c]
s=c-1
if(!(s>=0&&s<o))return A.a(b,s)
s=b[s]
r=A.bd(a,t)
t=r>>>24
o=r>>>16&255
q=r>>>8&255
p=r>>>0&255
return(A.c8(t+B.a.X(t-(s>>>24),2))<<24|A.c8(o+B.a.X(o-(s>>>16&255),2))<<16|A.c8(q+B.a.X(q-(s>>>8&255),2))<<8|A.c8(p+B.a.X(p-(s&255),2)))>>>0},
c7:function c7(a,b){this.a=a
this.b=b},
fU:function fU(a){var _=this
_.a=a
_.c=_.b=0
_.d=null
_.e=0},
im:function im(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=0
_.r=1
_.w=!1
_.x=$
_.y=!1},
ei:function ei(){},
fa:function fa(){this.r=1
this.x=this.w=$},
jb(a){var t,s=J.fd(a,u.gj)
for(t=0;t<a;++t)s[t]=new A.eQ()
return new A.dl(s,0)},
mv(){var t,s,r=J.a9(5,u.fa)
for(t=0;t<5;++t)r[t]=A.jb(0)
s=J.a9(64,u.ak)
for(t=0;t<64;++t)s[t]=new A.eR()
return new A.dk(r,s)},
eQ:function eQ(){this.b=this.a=0},
eR:function eR(){this.b=this.a=0},
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
eT:function eT(a){this.a=a
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
dw:function dw(a,b){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=a
_.w=""
_.z=b
_.as=0
_.at=null
_.ch=_.ay=0},
io:function io(){this.b=this.a=null},
ki(a){return new A.cu(a.a,a.b,B.e.ft(a.c,0))},
eU:function eU(a,b){this.a=a
this.b=b},
cu:function cu(a,b,c){this.a=a
this.b=b
this.c=c},
M(a,b,c,d,e,f,g,h,i,j,k,l,m){var t,s=new A.b3(null,null,null,a,h,e,d,0)
B.c.N(s.gap(),s)
s.c=g
if(b!=null)s.e=A.dd(b)
t=!1
if(j==null)if(m)t=s.gG()===B.v||s.gG()===B.x||s.gG()===B.y||s.gG()===B.f||s.gG()===B.l
s.dW(l,f,c,i,t?s.h7(c,k,i):j)
return s},
hs(a,b,c,d){var t,s,r=null,q=a.e
q=q==null?r:A.dd(q)
t=a.c
t=t==null?r:A.ki(t)
s=a.w
q=new A.b3(r,t,q,r,a.r,s,a.y,a.z)
q.fM(a,b,c,d)
return q},
cA(a,b,c){var t,s,r,q=null,p=a.a
p=p==null?q:p.ba(c)
t=a.e
t=t==null?q:A.dd(t)
s=a.c
s=s==null?q:A.ki(s)
r=a.w
p=new A.b3(p,s,t,q,a.r,r,a.y,a.z)
p.fL(a,b,c)
return p},
hl:function hl(a,b){this.a=a
this.b=b},
b3:function b3(a,b,c,d,e,f,g,h){var _=this
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
hv:function hv(a,b){this.a=a
this.b=b},
hu:function hu(){},
a5:function a5(){},
mx(a,b,c){return new A.cB(new Uint16Array(a*b*c),a,b,c)},
cB:function cB(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
my(a,b,c){return new A.cC(new Float32Array(a*b*c),a,b,c)},
cC:function cC(a,b,c,d){var _=this
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
cD:function cD(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.r=null
_.a=d
_.b=e
_.c=f},
cE:function cE(a,b,c,d,e){var _=this
_.d=a
_.e=b
_.a=c
_.b=d
_.c=e},
cF:function cF(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.r=null
_.a=d
_.b=e
_.c=f},
mz(a,b,c){return new A.cG(new Uint32Array(a*b*c),a,b,c)},
cG:function cG(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
cH:function cH(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.r=null
_.a=d
_.b=e
_.c=f},
kt(a,b,c){return new A.cI(new Uint8Array(a*b*c),null,a,b,c)},
cI:function cI(a,b,c,d,e){var _=this
_.d=a
_.e=b
_.a=c
_.b=d
_.c=e},
fb:function fb(a,b){this.a=a
this.b=b},
ax:function ax(){},
dO:function dO(a,b,c){this.c=a
this.a=b
this.b=c},
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
cO:function cO(a,b,c){this.c=a
this.a=b
this.b=c},
kG(a){return new A.ay(new Uint8Array(A.w(a.c)),a.a,a.b)},
ay:function ay(a,b,c){this.c=a
this.a=b
this.b=c},
jk(a){return new A.bU(-1,0,-a.c,a)},
bU:function bU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jl(a){return new A.bV(-1,0,-a.c,a)},
bV:function bV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jm(a){return new A.bW(-1,0,-a.c,a)},
bW:function bW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jn(a){return new A.bX(-1,0,-a.c,a)},
bX:function bX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jo(a){return new A.bY(-1,0,-a.c,a)},
bY:function bY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jp(a){return new A.bZ(-1,0,-a.c,a)},
bZ:function bZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aG(a,b,c,d,e){a.Z(b-1,c)
return new A.fs(a,b,b+d-1,c+e-1)},
fs:function fs(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
dV(a){return new A.c_(-1,0,0,-1,0,a)},
c_:function c_(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jq(a){return new A.c0(-1,0,-a.c,a)},
c0:function c0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dW(a){return new A.c1(-1,0,0,-2,0,a)},
c1:function c1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jr(a){return new A.c2(-1,0,-a.c,a)},
c2:function c2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dX(a){return new A.c3(-1,0,0,-(a.c<<2>>>0),a)},
c3:function c3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hR(a){return new A.c4(-1,0,-a.c,a)},
c4:function c4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
C:function C(){},
oS(a,b){switch(b.a){case 0:A.h2(a)
break
case 1:A.oU(a)
break
case 2:A.oT(a)
break}return a},
oU(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a.gap().length
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
l=B.a.X(m,2)
p=a.a
if((p==null?e:p.gR())!=null)for(k=m-1,j=0;j<l;++j,--k)for(i=0;i<n;++i){p=q.a
h=p==null?e:p.S(i,j,e)
if(h==null)h=new A.C()
p=q.a
g=p==null?e:p.S(i,k,e)
if(g==null)g=new A.C()
f=h.gM()
h.sM(g.gM())
g.sM(f)}else for(k=m-1,j=0;j<l;++j,--k)for(i=0;i<n;++i){p=q.a
h=p==null?e:p.S(i,j,e)
if(h==null)h=new A.C()
p=q.a
g=p==null?e:p.S(i,k,e)
if(g==null)g=new A.C()
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
h2(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c=a.gap().length
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
l=B.a.X(n,2)
p=a.a
if((p==null?d:p.gR())!=null)for(k=n-1,j=0;j<m;++j)for(i=k,h=0;h<l;++h,--i){p=q.a
g=p==null?d:p.S(h,j,d)
if(g==null)g=new A.C()
p=q.a
f=p==null?d:p.S(i,j,d)
if(f==null)f=new A.C()
e=g.gM()
g.sM(f.gM())
f.sM(e)}else for(k=n-1,j=0;j<m;++j)for(i=k,h=0;h<l;++h,--i){p=q.a
g=p==null?d:p.S(h,j,d)
if(g==null)g=new A.C()
p=q.a
f=p==null?d:p.S(i,j,d)
if(f==null)f=new A.C()
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
oT(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b=a.gap().length
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
l=B.a.X(m,2)
if((o?c:p.gR())!=null)for(k=m-1,j=n-1,i=0;i<l;++i,--k)for(h=j,g=0;g<n;++g,--h){p=q.a
f=p==null?c:p.S(g,i,c)
if(f==null)f=new A.C()
p=q.a
e=p==null?c:p.S(h,k,c)
if(e==null)e=new A.C()
d=f.gM()
f.sM(e.gM())
e.sM(d)}else for(k=m-1,j=n-1,i=0;i<l;++i,--k)for(h=j,g=0;g<n;++g,--h){p=q.a
f=p==null?c:p.S(g,i,c)
if(f==null)f=new A.C()
p=q.a
e=p==null?c:p.S(h,k,c)
if(e==null)e=new A.C()
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
hi:function hi(a,b){this.a=a
this.b=b},
l(a){return new A.ht(a)},
ht:function ht(a){this.a=a},
p(a,b,c,d){var t=J.a1(a),s=t.gu(a)
t=c==null?t.gu(a):d+c
return new A.a6(a,d,Math.min(s,t),d,b)},
n(a,b,c){var t=a.a,s=a.d,r=a.b,q=J.aZ(t),p=b==null?a.c:a.d+c+b
return new A.a6(t,r,Math.min(q,p),s+c,a.e)},
a6:function a6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fo:function fo(a){var _=this
_.a=$
_.b=10
_.c=16
_.d=3
_.f=_.e=$
_.r=null
_.Q=_.z=_.y=_.x=_.w=$
_.as=a
_.ax=_.at=$},
aF(a,b){return new A.fq(a,new Uint8Array(b))},
fq:function fq(a,b){this.a=0
this.b=a
this.c=b},
fI:function fI(){},
cY:function cY(a,b){this.a=a
this.b=b},
n_(a){throw A.f(A.bb("Uint64List not supported on the web."))},
mA(a,b,c){return J.j3(a,b,c)},
kR(a,b){return J.ak(a,b,null)},
mr(a){return J.k2(a,0,null)},
ms(a){return a.jT(0,0,null)},
lB(a){return v.mangledGlobalNames[a]},
od(a,b,c){u.Z.a(a)
if(A.v(c)>=1)return a.$1(b)
return a.$0()},
oV(a){var t,s,r,q,p,o=a.gu(0)
for(t=1,s=0;o>0;){r=3800>o?o:3800
o-=r
while(--r,r>=0){q=a.b
q.toString
p=a.c++
if(!(p>=0&&p<q.length))return A.a(q,p)
t+=q[p]
s+=t}t=B.a.a1(t,65521)
s=B.a.a1(s,65521)}return(s<<16|t)>>>0},
aV(a,b){var t,s,r=J.a1(a),q=r.gu(a)
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
ls(a){var t,s,r,q=a.byteLength
if(q<16)throw A.f(B.as)
if(q>31457280)throw A.f(B.cE)
t=A.oR(a)
s=t==null?null:t.aM(a)
if(s==null)throw A.f(B.as)
if(s.gK()<1||s.gI()<1||s.gK()*s.gI()>24e6)throw A.f(B.cG)
if(s.gaJ()>1)throw A.f(B.cH)
r=t.aI(0)
if(r==null)throw A.f(B.as)
return A.lx(r)},
jV(a){var t=!1
if(a.gG()===B.f)if(a.gb2()===3){t=a.a
t=(t==null?null:t.gR())==null}return t?a:a.dv(B.f,3)},
lx(a){var t=a.gbQ().n(0,"ifd0").gbT()
return A.jV(t!=null&&t!==1?A.oK(a):a)},
p8(a){var t,s,r,q,p,o,n,m,l,k,j,i=null,h=new A.cP(A.hz()).dw(a.a,i)
h.toString
t=new A.cP(A.hz()).dw(a.b,i)
t.toString
if(h.gK()!==t.gK()||h.gI()!==t.gI())throw A.f(A.bg("Image dimensions must match"))
s=A.Y(6,0,!1,u.p)
r=Math.max(1,B.b.aO(Math.sqrt(h.gK()*h.gI()/65536)))
q=0
for(;;){p=h.a
p=p==null?i:p.b
if(!(q<(p==null?0:p)))break
o=0
for(;;){p=h.a
n=p==null
m=n?i:p.a
if(!(o<(m==null?0:m)))break
l=n?i:p.S(o,q,i)
if(l==null)l=new A.C()
p=t.a
k=p==null?i:p.S(o,q,i)
if(k==null)k=new A.C()
j=(Math.abs(l.gm()-k.gm())+Math.abs(l.gp()-k.gp())+Math.abs(l.gq()-k.gq()))/3
if(j===0)p=0
else if(j<=2)p=1
else if(j<=5)p=2
else if(j<=10)p=3
else p=j<=20?4:5
B.c.i(s,p,s[p]+1)
o+=r}q+=r}return s},
lq(a,b,c,d,e,f,g,h,i,j,k){var t,s,r,q,p,o,n,m
if(j==null)j=0
if(k==null)k=0
if(i==null)i=b.gK()
if(h==null)h=b.gI()
if(e==null)e=a.gK()<b.gK()?a.gK():b.gK()
if(d==null)d=a.gI()<b.gI()?a.gI():b.gI()
t=c===B.an
if(!t&&a.gbk())a=a.eY(a.gb2())
s=h/d
r=i/e
q=u.p
p=J.a9(d,q)
for(o=0;o<d;++o)p[o]=k+B.b.h(o*s)
n=J.a9(e,q)
for(m=0;m<e;++m)n[m]=j+B.b.h(m*r)
if(t)A.og(b,a,f,g,e,d,n,p,null,B.aU)
else A.oe(b,a,f,g,e,d,n,p,c,!1,null,B.aU)
return a},
og(a,b,c,d,e,f,g,a0,a1,a2){var t,s,r,q,p,o,n,m,l,k,j,i=b.gK(),h=b.gI()
for(t=g.length,s=a0.length,r=null,q=0;q<f;++q)for(p=d+q,o=p>=h,n=0;n<e;++n){m=c+n
if(m>=i||o)continue
if(!(n<t))return A.a(g,n)
l=g[n]
if(!(q<s))return A.a(a0,q)
k=a0[q]
j=a.a
r=j==null?null:j.S(l,k,r)
if(r==null)r=new A.C()
b.bV(m,p,r)}},
oe(a,b,c,d,e,f,g,h,i,j,k,a0){var t,s,r,q,p,o,n,m,l
for(t=g.length,s=h.length,r=null,q=0;q<f;++q)for(p=d+q,o=0;o<e;++o){if(!(o<t))return A.a(g,o)
n=g[o]
if(!(q<s))return A.a(h,q)
m=h[q]
l=a.a
r=l==null?null:l.S(n,m,r)
if(r==null)r=new A.C()
A.oO(b,c+o,p,r,i,!1,k,a0)}},
oO(a5,a6,a7,a8,a9,b0,b1,b2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
if(!a5.f1(a6,a7))return a5
if(a9===B.an||a5.gbk())if(a5.f1(a6,a7)){a5.dD(a6,a7).ac(a8)
return a5}t=a8.ga9()
s=a8.ga5()
r=a8.ga8()
q=a8.gu(a8)<4?1:a8.gab()
if(q===0)return a5
p=a5.dD(a6,a7)
o=p.ga9()
n=p.ga5()
m=p.ga8()
l=p.gab()
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
i=B.b.J(q,0.01,1)
j=q<0
e=j?0:1
d=B.b.J(t/i*e,0,0.99)
e=B.b.J(q,0.01,1)
i=j?0:1
c=B.b.J(s/e*i,0,0.99)
i=B.b.J(q,0.01,1)
j=j?0:1
b=B.b.J(r/i*j,0,0.99)
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
p.sab(q+l*a4)
return a5},
oQ(a,b,c,d,e,f,g){var t,s=B.b.J(Math.min(d,e),0,a.gK()-1),r=B.b.J(Math.min(f,g),0,a.gI()-1),q=B.b.J(Math.max(d,e),0,a.gK()-1),p=B.b.J(Math.max(f,g),0,a.gI()-1),o=a.a.b5(0,s,r,q-s+1,p-r+1)
for(t=o.a;o.F();)t.ac(c)
return a},
mo(a5,a6,a7,a8,a9,b0,b1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=b1<16384,a4=a7>a9?a9:a7
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
df(a,b,c){var t,s,r,q,p=$.ab()
p.$flags&2&&A.c(p)
p[0]=a
t=$.ai()
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
oR(a){var t,s,r,q,p,o,n,m,l,k,j,i=null,h=new A.hE()
if(h.bl(a))return h
t=new A.cP(A.hz())
if(t.bl(a))return t
s=new A.hm()
s.f=A.p(a,!1,i,0)
s.a=new A.dj(A.k([],u.b))
if(s.e8())return s
r=new A.io()
if(r.bl(a))return r
q=new A.i4()
if(q.es(A.p(a,!1,i,0))!=null)return q
if(A.kM(a).c===943870035)return new A.hW()
if(A.mn(a))return new A.hg()
p=new A.eC(!1)
if(p.bl(a))return p
o=new A.hT(A.k([],u.s))
if(o.bl(a))return o
n=new A.i2()
m=A.p(a,!1,i,0)
l=n.a=new A.e8(B.ak)
l.bJ(m)
if(l.f3())return n
k=new A.ho()
l=A.p(a,!1,i,0)
k.a=l
l=A.kj(l)
k.b=l
if(l!=null)return k
j=new A.i_()
if(j.aM(a)!=null)return j
return i},
lt(a){return new A.hS(B.jq,6,null).jf(a,!1)},
nL(a,b,c,d,e,f){A.nI(f,a,b,c,d,e,!0,f)},
nM(a,b,c,d,e,f){A.nJ(f,a,b,c,d,e,!0,f)},
nK(a,b,c,d,e,f){A.nH(f,a,b,c,d,e,!0,f)},
d0(a,b,c,d,e){var t,s,r
for(t=0;t<d;++t){s=J.d(a.a,a.d+t)
r=J.d(b.a,b.d+t)
J.x(c.a,c.d+t,s+r)}},
nI(a,b,c,d,e,f,g,h){var t,s,r=null,q=e*d,p=e+f,o=A.p(a,!1,r,q),n=A.p(a,!1,r,q),m=A.n(n,r,0)
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
nJ(a,b,c,d,e,f,g,h){var t=null,s=e*d,r=e+f,q=A.p(a,!1,t,s),p=A.p(h,!1,t,s),o=A.n(p,t,0)
if(e===0){p.i(0,0,J.d(q.a,q.d))
A.d0(A.n(q,t,1),o,A.n(p,t,1),b-1,!0)
q.d+=d
p.d+=d
e=1}else o.d-=d
while(e<r){A.d0(q,o,p,b,!0);++e
o.d+=d
q.d+=d
p.d+=d}},
nH(a,b,c,d,e,f,g,h){var t,s,r,q,p,o=null,n=e*d,m=e+f,l=A.p(a,!1,o,n),k=A.p(h,!1,o,n),j=A.n(k,o,0)
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
oK(a){var t="ifd0",s=A.cA(a,!1,!1)
if(!a.gbQ().n(0,t).a.aH(274)||a.gbQ().n(0,t).gbT()===1)return s
s.e=A.dd(a.gbQ())
s.gbQ().n(0,t).sbT(null)
switch(a.gbQ().n(0,t).gbT()){case 2:return A.h2(s)
case 3:return A.oS(s,B.cD)
case 4:return A.h2(A.h1(s,180))
case 5:return A.h2(A.h1(s,90))
case 6:return A.h1(s,90)
case 7:return A.h2(A.h1(s,-90))
case 8:return A.h1(s,-90)}return s},
h1(a8,a9){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=null,a7=B.a.a1(a9,360)
a8.gbk()
if(B.a.a1(a7,90)===0)switch(B.a.X(a7,90)){case 1:return A.oC(a8)
case 2:return A.oA(a8)
case 3:return A.oB(a8)
default:return A.cA(a8,!1,!1)}t=a7*3.141592653589793/180
s=Math.cos(t)
r=Math.sin(t)
q=a8.gK()
p=a8.gK()
o=a8.gI()
n=a8.gI()
m=0.5*a8.gK()
l=0.5*a8.gI()
o=Math.abs(q*s)+Math.abs(o*r)
k=0.5*o
n=Math.abs(p*r)+Math.abs(n*s)
j=0.5*n
i=a8.gap().length
for(q=u.g,h=a6,g=0;g<i;++g){f=a8.x
if(f===$)f=a8.x=A.k([],q)
if(!(g<f.length))return A.a(f,g)
e=f[g]
p=h==null
d=p?a6:h.cU()
if(d==null){c=B.b.h(o)
d=A.hs(a8,B.b.h(n),!0,c)}if(p)h=d
for(p=d.a,p=p.gH(p);p.F();){b=p.gP()
a=b.gaR()
a0=b.gaL()
c=a-k
a1=a0-j
a2=m+c*s+a1*r
a3=l-c*r+a1*s
c=!1
if(a2>=0)if(a3>=0){a1=e.a
a4=a1==null
a5=a4?a6:a1.a
if(a2<(a5==null?0:a5)){c=a4?a6:a1.b
c=a3<(c==null?0:c)}}if(c)d.bV(a,a0,e.fi(a2,a3,B.cN))}}h.toString
return h},
oC(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
for(t=a.gap(),s=t.length,r=g,q=0;q<t.length;t.length===s||(0,A.aa)(t),++q){p=t[q]
o=r==null
n=o?g:r.cU()
if(n==null){m=p.a
l=m==null
k=l?g:m.b
if(k==null)k=0
m=l?g:m.a
n=A.hs(p,m==null?0:m,!0,k)}if(o)r=n
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
o=o==null?g:o.S(i,j-h,g)
n.bV(h,i,o==null?new A.C():o);++h}++i}}r.toString
return r},
oA(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
for(t=a.gap(),s=t.length,r=g,q=0;q<t.length;t.length===s||(0,A.aa)(t),++q){p=t[q]
o=p.a
n=o==null
m=n?g:o.a
l=(m==null?0:m)-1
o=n?g:o.b
k=(o==null?0:o)-1
o=r==null
j=o?g:r.cU()
if(j==null)j=A.cA(p,!0,!0)
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
n=n==null?g:n.S(l-h,o,g)
j.bV(h,i,n==null?new A.C():n);++h}++i}}r.toString
return r},
oB(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
for(t=a.gap(),s=t.length,r=g,q=0;q<t.length;t.length===s||(0,A.aa)(t),++q){p=t[q]
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
m=A.hs(p,l==null?0:l,!0,j)}if(o)r=m
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
l=l==null?g:l.S(o,h,g)
m.bV(h,i,l==null?new A.C():l);++h}++i}}r.toString
return r},
iI(a){var t
a=(a&-a)>>>0
t=a!==0?31:32
if((a&65535)!==0)t-=16
if((a&16711935)!==0)t-=8
if((a&252645135)!==0)t-=4
if((a&858993459)!==0)t-=2
return(a&1431655765)!==0?t-1:t},
pe(a){var t
$.k0().i(0,0,a)
t=$.lZ()
if(0>=t.length)return A.a(t,0)
return t[0]},
lA(a,b,c,d){return(B.a.J(a,0,255)|B.a.J(b,0,255)<<8|B.a.J(c,0,255)<<16|B.a.J(d,0,255)<<24)>>>0},
aK(a,b,c){var t,s,r,q,p=b.gu(b),o=b.gG(),n=a.gR(),m=n==null?null:n.gG()
if(m==null)m=a.gG()
t=a.gu(a)
if(p===1)b.i(0,0,A.h0(B.b.cX(a.gu(a)>2?a.gag():a.n(0,0)),m,o))
else if(p<=t)for(s=0;s<p;++s)b.i(0,s,A.h0(a.n(0,s),m,o))
else if(t===2){r=A.h0(a.n(0,0),m,o)
if(p===3){b.i(0,0,r)
b.i(0,1,r)
b.i(0,2,r)}else{c=A.h0(a.n(0,1),m,o)
b.i(0,0,r)
b.i(0,1,r)
b.i(0,2,r)
b.i(0,3,c)}}else{for(s=0;s<t;++s)b.i(0,s,A.h0(a.n(0,s),m,o))
q=t===1?b.n(0,0):0
for(s=t;s<p;++s)b.i(0,s,s===3?c:q)}return b},
lr(a,b,c,d,e){var t,s,r=a.gR(),q=r==null?null:r.gG()
if(q==null)q=a.gG()
r=e==null
t=r?null:e.gG()
c=t==null?c:t
if(c==null)c=a.gG()
t=r?null:e.gu(e)
d=t==null?d:t
if(d==null)d=a.gu(a)
if(b==null)b=0
if(c===q&&d===a.gu(a)){if(r)return a.O()
e.ac(a)
return e}switch(c.a){case 3:if(r)s=new A.bC(new Uint8Array(d))
else s=e
return A.aK(a,s,b)
case 0:return A.aK(a,r?new A.co(d,0):e,b)
case 1:return A.aK(a,r?new A.cq(d,0):e,b)
case 2:if(r){r=d<3?1:2
s=new A.cs(d,new Uint8Array(r))}else s=e
return A.aK(a,s,b)
case 4:if(r)s=new A.cp(new Uint16Array(d))
else s=e
return A.aK(a,s,b)
case 5:if(r)s=new A.cr(new Uint32Array(d))
else s=e
return A.aK(a,s,b)
case 6:if(r)s=new A.cm(new Int8Array(d))
else s=e
return A.aK(a,s,b)
case 7:if(r)s=new A.ck(new Int16Array(d))
else s=e
return A.aK(a,s,b)
case 8:if(r)s=new A.cl(new Int32Array(d))
else s=e
return A.aK(a,s,b)
case 9:if(r)s=new A.ch(new Uint16Array(d))
else s=e
return A.aK(a,s,b)
case 10:if(r)s=new A.ci(new Float32Array(d))
else s=e
return A.aK(a,s,b)
case 11:if(r)s=new A.cj(new Float64Array(d))
else s=e
return A.aK(a,s,b)}},
U(a){return 0.299*a.gm()+0.587*a.gp()+0.114*a.gq()},
lp(a,b,c,d,e){var t=1-d/255
B.c.i(e,0,B.b.aK(255*(1-a/255)*t))
B.c.i(e,1,B.b.aK(255*(1-b/255)*t))
B.c.i(e,2,B.b.aK(255*(1-c/255)*t))},
G(a){var t,s,r,q=$.jZ()
q.$flags&2&&A.c(q)
q[0]=a
q=$.lX()
if(0>=q.length)return A.a(q,0)
t=q[0]
if(a===0)return t>>>16
if($.K==null)A.N()
s=t>>>23&511
q=$.kf.ce()
if(!(s<q.length))return A.a(q,s)
s=q[s]
if(s!==0){r=t&8388607
return s+(r+4095+(r>>>13&1)>>>13)}return A.mp(t)},
mp(a){var t,s,r=a>>>16&32768,q=(a>>>23&255)-112,p=a&8388607
if(q<=0){if(q<-10)return r
p|=8388608
t=14-q
return(r|B.a.b6(p+(B.a.V(1,t-1)-1)+(B.a.a_(p,t)&1),t))>>>0}else if(q===143)if(p===0)return r|31744
else{p=p>>>13
s=p===0?1:0
return r|p|s|31744}else{p=p+4095+(p>>>13&1)
if((p&8388608)!==0){++q
p=0}if(q>30)return r|31744
return(r|q<<10|p>>>13)>>>0}},
N(){var t,s,r,q,p,o=$.K
if(o!=null)return o
t=new Uint32Array(65536)
$.K=J.k2(B.n.gv(t),0,null)
o=new Uint16Array(512)
$.kf.b=o
for(s=0;s<256;++s){r=(s&255)-112
if(r<=0||r>=30){o[s]=0
q=(s|256)>>>0
if(!(q<512))return A.a(o,q)
o[q]=0}else{q=r<<10>>>0
o[s]=q
p=(s|256)>>>0
if(!(p<512))return A.a(o,p)
o[p]=(q|32768)>>>0}}for(s=0;s<65536;++s)t[s]=A.mq(s)
o=$.K
o.toString
return o},
mq(a){var t,s=a>>>15&1,r=a>>>10&31,q=a&1023
if(r===0)if(q===0)return s<<31>>>0
else{while((q&1024)===0){q=q<<1;--r}++r
q&=4294966271}else if(r===31){t=s<<31
if(q===0)return(t|2139095040)>>>0
else return(t|q<<13|2139095040)>>>0}return(s<<31|r+112<<23|q<<13)>>>0}},B={}
var w=[A,J,B]
var $={}
A.jf.prototype={}
J.f0.prototype={
T(a,b){return a===b},
gE(a){return A.e_(a)},
C(a){return"Instance of '"+A.fw(a)+"'"},
gaA(a){return A.cb(A.jN(this))}}
J.fe.prototype={
C(a){return String(a)},
gE(a){return a?519018:218159},
gaA(a){return A.cb(u.y)},
$iH:1,
$iaU:1}
J.dy.prototype={
T(a,b){return null==b},
C(a){return"null"},
gE(a){return 0},
$iH:1}
J.dA.prototype={$iR:1}
J.bn.prototype={
gE(a){return 0},
C(a){return String(a)}}
J.ft.prototype={}
J.ea.prototype={}
J.b4.prototype={
C(a){var t=a[$.lD()]
if(t==null)t=a[$.jY()]
if(t==null)return this.fv(a)
return"JavaScript function for "+J.ey(t)},
$ibG:1}
J.cK.prototype={
gE(a){return 0},
C(a){return String(a)}}
J.cL.prototype={
gE(a){return 0},
C(a){return String(a)}}
J.u.prototype={
N(a,b){A.ar(a).c.a(b)
a.$flags&1&&A.c(a,29)
a.push(b)},
f8(a,b){var t
a.$flags&1&&A.c(a,"removeAt",1)
t=a.length
if(b>=t)throw A.f(A.jA(b,null,null))
return a.splice(b,1)[0]},
iX(a,b){A.ar(a).A("e<1>").a(b)
a.$flags&1&&A.c(a,"addAll",2)
this.fT(a,b)
return},
fT(a,b){var t,s
u.n.a(b)
t=b.length
if(t===0)return
if(a===b)throw A.f(A.bD(a))
for(s=0;s<t;++s)a.push(b[s])},
cW(a){a.$flags&1&&A.c(a,"clear","clear")
a.length=0},
f9(a,b){return A.e7(a,0,A.ln(b,"count",u.p),A.ar(a).c)},
d1(a,b){return A.e7(a,b,null,A.ar(a).c)},
bH(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
b7(a,b,c){if(b<0||b>a.length)throw A.f(A.ag(b,0,a.length,"start",null))
if(c<b||c>a.length)throw A.f(A.ag(c,b,a.length,"end",null))
if(b===c)return A.k([],A.ar(a))
return A.k(a.slice(b,c),A.ar(a))},
gf4(a){var t=a.length
if(t>0)return a[t-1]
throw A.f(A.kv())},
ah(a,b,c,d,e){var t,s,r,q,p
A.ar(a).A("e<1>").a(d)
a.$flags&2&&A.c(a,5)
A.bu(b,c,a.length)
t=c-b
if(t===0)return
A.cX(e,"skipCount")
if(u._.b(d)){s=d
r=e}else{s=J.j5(d,e).fa(0,!1)
r=0}q=J.a1(s)
if(r+t>q.gu(s))throw A.f(A.kw())
if(r<b)for(p=t-1;p>=0;--p)a[b+p]=q.n(s,r+p)
else for(p=0;p<t;++p)a[b+p]=q.n(s,r+p)},
aw(a,b,c,d){var t
A.ar(a).A("1?").a(d)
a.$flags&2&&A.c(a,"fillRange")
A.bu(b,c,a.length)
for(t=b;t<c;++t)a[t]=d},
bO(a,b){var t
for(t=0;t<a.length;++t)if(J.bB(a[t],b))return!0
return!1},
C(a){return A.kx(a,"[","]")},
gH(a){return new J.d8(a,a.length,A.ar(a).A("d8<1>"))},
gE(a){return A.e_(a)},
gu(a){return a.length},
su(a,b){a.$flags&1&&A.c(a,"set length","change the length of")
if(b<0)throw A.f(A.ag(b,0,null,"newLength",null))
if(b>a.length)A.ar(a).c.a(null)
a.length=b},
n(a,b){if(!(b>=0&&b<a.length))throw A.f(A.iJ(a,b))
return a[b]},
i(a,b,c){A.ar(a).c.a(c)
a.$flags&2&&A.c(a)
if(!(b>=0&&b<a.length))throw A.f(A.iJ(a,b))
a[b]=c},
$ia7:1,
$ie:1,
$ir:1}
J.fc.prototype={
jJ(a){var t,s,r
if(!Array.isArray(a))return null
t=a.$flags|0
if((t&4)!==0)s="const, "
else if((t&2)!==0)s="unmodifiable, "
else s=(t&1)!==0?"fixed, ":""
r="Instance of '"+A.fw(a)+"'"
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
$iB:1}
J.dz.prototype={
du(a,b){var t
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
return t+0}throw A.f(A.bb(""+a+".toInt()"))},
aO(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw A.f(A.bb(""+a+".ceil()"))},
cX(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw A.f(A.bb(""+a+".floor()"))},
aK(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.f(A.bb(""+a+".round()"))},
J(a,b,c){if(this.du(b,c)>0)throw A.f(A.bz(b))
if(this.du(a,b)<0)return b
if(this.du(a,c)>0)return c
return a},
d_(a,b){var t,s,r,q,p
if(b<2||b>36)throw A.f(A.ag(b,2,36,"radix",null))
t=a.toString(b)
s=t.length
r=s-1
if(!(r>=0))return A.a(t,r)
if(t.charCodeAt(r)!==41)return t
q=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(q==null)A.aw(A.bb("Unexpected toString result: "+t))
s=q.length
if(1>=s)return A.a(q,1)
t=q[1]
if(3>=s)return A.a(q,3)
p=+q[3]
s=q[2]
if(s!=null){t+=s
p-=s.length}return t+B.B.dE("0",p)},
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
ar(a,b){A.lc(b)
if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.eC(a,b)},
X(a,b){return(a|0)===a?a/b|0:this.eC(a,b)},
eC(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw A.f(A.bb("Result of truncating division is "+A.z(t)+": "+A.z(a)+" ~/ "+b))},
V(a,b){if(b<0)throw A.f(A.bz(b))
return b>31?0:a<<b>>>0},
L(a,b){return b>31?0:a<<b>>>0},
b6(a,b){var t
if(b<0)throw A.f(A.bz(b))
if(a>0)t=this.a2(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
j(a,b){var t
if(a>0)t=this.a2(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
a_(a,b){if(0>b)throw A.f(A.bz(b))
return this.a2(a,b)},
a2(a,b){return b>31?0:a>>>b},
gaA(a){return A.cb(u.H)},
$iD:1,
$ij:1}
J.dx.prototype={
aq(a,b){var t=this.V(1,b-1)
return((a&t-1)>>>0)-((a&t)>>>0)},
gaA(a){return A.cb(u.p)},
$iH:1,
$ii:1}
J.ff.prototype={
gaA(a){return A.cb(u.i)},
$iH:1}
J.cJ.prototype={
dH(a,b){var t=b.length
if(t>a.length)return!1
return b===a.substring(0,t)},
fd(a){var t,s,r,q=a.trim(),p=q.length
if(p===0)return q
if(0>=p)return A.a(q,0)
if(q.charCodeAt(0)===133){t=J.mC(q,1)
if(t===p)return""}else t=0
s=p-1
if(!(s>=0))return A.a(q,s)
r=q.charCodeAt(s)===133?J.mD(q,s):p
if(t===0&&r===p)return q
return q.substring(t,r)},
dE(a,b){var t,s
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.f(B.co)
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
gaA(a){return A.cb(u.N)},
gu(a){return a.length},
$ia7:1,
$iH:1,
$ikH:1,
$iS:1}
A.cM.prototype={
C(a){return"LateInitializationError: "+this.a}}
A.ao.prototype={
gu(a){return this.a.length},
n(a,b){var t=this.a
if(!(b>=0&&b<t.length))return A.a(t,b)
return t.charCodeAt(b)}}
A.i0.prototype={}
A.da.prototype={}
A.aR.prototype={
gH(a){var t=this
return new A.bQ(t,t.gu(t),A.o(t).A("bQ<aR.E>"))}}
A.e6.prototype={
ghG(){var t=J.aZ(this.a),s=this.c
if(s==null||s>t)return t
return s},
giV(){var t=J.aZ(this.a),s=this.b
if(s>t)return t
return s},
gu(a){var t,s=J.aZ(this.a),r=this.b
if(r>=s)return 0
t=this.c
if(t==null||t>=s)return s-r
return t-r},
bH(a,b){var t=this,s=t.giV()+b
if(b<0||s>=t.ghG())throw A.f(A.jc(b,t.gu(0),t,"index"))
return J.k3(t.a,s)},
d1(a,b){var t,s,r=this
A.cX(b,"count")
t=r.b+b
s=r.c
if(s!=null&&t>=s)return new A.db(r.$ti.A("db<1>"))
return A.e7(r.a,t,s,r.$ti.c)},
fa(a,b){var t,s,r,q=this,p=q.b,o=q.a,n=J.a1(o),m=n.gu(o),l=q.c
if(l!=null&&l<m)m=l
t=m-p
if(t<=0){o=J.ky(0,q.$ti.c)
return o}s=A.Y(t,n.bH(o,p),!1,q.$ti.c)
for(r=1;r<t;++r){B.c.i(s,r,n.bH(o,p+r))
if(n.gu(o)<m)throw A.f(A.bD(q))}return s}}
A.bQ.prototype={
gP(){var t=this.d
return t==null?this.$ti.c.a(t):t},
F(){var t,s=this,r=s.a,q=J.a1(r),p=q.gu(r)
if(s.b!==p)throw A.f(A.bD(r))
t=s.c
if(t>=p){s.d=null
return!1}s.d=q.bH(r,t);++s.c
return!0},
$iB:1}
A.dD.prototype={
gu(a){return J.aZ(this.a)},
bH(a,b){return this.b.$1(J.k3(this.a,b))}}
A.ej.prototype={
gH(a){return new A.ek(J.j4(this.a),this.b,this.$ti.A("ek<1>"))}}
A.ek.prototype={
F(){var t,s
for(t=this.a,s=this.b;t.F();)if(s.$1(t.gP()))return!0
return!1},
gP(){return this.a.gP()},
$iB:1}
A.db.prototype={
gH(a){return B.ch},
gu(a){return 0}}
A.dc.prototype={
F(){return!1},
gP(){throw A.f(A.kv())},
$iB:1}
A.ad.prototype={}
A.ba.prototype={
i(a,b,c){A.o(this).A("ba.E").a(c)
throw A.f(A.bb("Cannot modify an unmodifiable list"))},
ah(a,b,c,d,e){A.o(this).A("e<ba.E>").a(d)
throw A.f(A.bb("Cannot modify an unmodifiable list"))},
bq(a,b,c,d){return this.ah(0,b,c,d,0)},
aw(a,b,c,d){A.o(this).A("ba.E?").a(d)
throw A.f(A.bb("Cannot modify an unmodifiable list"))}}
A.d_.prototype={}
A.eq.prototype={$r:"+(1,2)",$s:1}
A.er.prototype={$r:"+bytes,vector(1,2)",$s:2}
A.es.prototype={$r:"+clean,output(1,2)",$s:3}
A.d9.prototype={
C(a){return A.jj(this)},
$ibo:1}
A.bH.prototype={
cM(){var t=this,s=t.$map
if(s==null){s=new A.dB(t.$ti.A("dB<1,2>"))
A.lu(t.a,s)
t.$map=s}return s},
n(a,b){return this.cM().n(0,b)},
bS(a,b){this.$ti.A("~(1,2)").a(b)
this.cM().bS(0,b)},
gjr(){var t=this.cM()
return new A.dC(t,A.o(t).A("dC<1>"))},
gu(a){return this.cM().a}}
A.e2.prototype={}
A.i6.prototype={
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
A.dM.prototype={
C(a){return"Null check operator used on a null value"}}
A.fj.prototype={
C(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+s.a
t=s.c
if(t==null)return r+q+"' ("+s.a+")"
return r+q+"' on '"+t+"' ("+s.a+")"}}
A.fQ.prototype={
C(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
A.hP.prototype={
C(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.bh.prototype={
C(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.lC(s==null?"unknown":s)+"'"},
$ibG:1,
gjO(){return this},
$C:"$1",
$R:1,
$D:null}
A.eE.prototype={$C:"$0",$R:0}
A.eF.prototype={$C:"$2",$R:2}
A.fL.prototype={}
A.fK.prototype={
C(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.lC(t)+"'"}}
A.cf.prototype={
T(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.cf))return!1
return this.$_target===b.$_target&&this.a===b.a},
gE(a){return(A.jU(this.a)^A.e_(this.$_target))>>>0},
C(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.fw(this.a)+"'")}}
A.fJ.prototype={
C(a){return"RuntimeError: "+this.a}}
A.aE.prototype={
gu(a){return this.a},
aH(a){var t,s
if(typeof a=="string"){t=this.b
if(t==null)return!1
return t[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){s=this.c
if(s==null)return!1
return s[a]!=null}else return this.jm(a)},
jm(a){var t=this.d
if(t==null)return!1
return this.cn(this.e4(t,a),a)>=0},
n(a,b){var t,s,r,q,p=null
if(typeof b=="string"){t=this.b
if(t==null)return p
s=t[b]
r=s==null?p:s.b
return r}else if(typeof b=="number"&&(b&0x3fffffff)===b){q=this.c
if(q==null)return p
s=q[b]
r=s==null?p:s.b
return r}else return this.jn(b)},
jn(a){var t,s,r=this.d
if(r==null)return null
t=this.e4(r,a)
s=this.cn(t,a)
if(s<0)return null
return t[s].b},
i(a,b,c){var t,s,r=this,q=A.o(r)
q.c.a(b)
q.y[1].a(c)
if(typeof b=="string"){t=r.b
r.dL(t==null?r.b=r.dj():t,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){s=r.c
r.dL(s==null?r.c=r.dj():s,b,c)}else r.jp(b,c)},
jp(a,b){var t,s,r,q,p=this,o=A.o(p)
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
jE(a,b){var t=this
if(typeof b=="string")return t.ew(t.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return t.ew(t.c,b)
else return t.jo(b)},
jo(a){var t,s,r,q,p=this,o=p.d
if(o==null)return null
t=p.cY(a)
s=o[t]
r=p.cn(s,a)
if(r<0)return null
q=s.splice(r,1)[0]
p.eG(q)
if(s.length===0)delete o[t]
return q.b},
bS(a,b){var t,s,r=this
A.o(r).A("~(1,2)").a(b)
t=r.e
s=r.r
while(t!=null){b.$2(t.a,t.b)
if(s!==r.r)throw A.f(A.bD(r))
t=t.c}},
dL(a,b,c){var t,s=A.o(this)
s.c.a(b)
s.y[1].a(c)
t=a[b]
if(t==null)a[b]=this.dk(b,c)
else t.b=c},
ew(a,b){var t
if(a==null)return null
t=a[b]
if(t==null)return null
this.eG(t)
delete a[b]
return t.b},
ej(){this.r=this.r+1&1073741823},
dk(a,b){var t=this,s=A.o(t),r=new A.hK(s.c.a(a),s.y[1].a(b))
if(t.e==null)t.e=t.f=r
else{s=t.f
s.toString
r.d=s
t.f=s.c=r}++t.a
t.ej()
return r},
eG(a){var t=this,s=a.d,r=a.c
if(s==null)t.e=r
else s.c=r
if(r==null)t.f=s
else r.d=s;--t.a
t.ej()},
cY(a){return J.aY(a)&1073741823},
e4(a,b){return a[this.cY(b)]},
cn(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bB(a[s].a,b))return s
return-1},
C(a){return A.jj(this)},
dj(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
$ijh:1}
A.hK.prototype={}
A.dC.prototype={
gu(a){return this.a.a},
gH(a){var t=this.a
return new A.V(t,t.r,t.e,this.$ti.A("V<1>"))}}
A.V.prototype={
gP(){return this.d},
F(){var t,s=this,r=s.a
if(s.b!==r.r)throw A.f(A.bD(r))
t=s.c
if(t==null){s.d=null
return!1}else{s.d=t.a
s.c=t.c
return!0}},
$iB:1}
A.hL.prototype={
gu(a){return this.a.a},
gH(a){var t=this.a
return new A.bP(t,t.r,t.e,this.$ti.A("bP<1>"))}}
A.bP.prototype={
gP(){return this.d},
F(){var t,s=this,r=s.a
if(s.b!==r.r)throw A.f(A.bD(r))
t=s.c
if(t==null){s.d=null
return!1}else{s.d=t.b
s.c=t.c
return!0}},
$iB:1}
A.dB.prototype={
cY(a){return A.oL(a)&1073741823},
cn(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bB(a[s].a,b))return s
return-1}}
A.iU.prototype={
$1(a){return this.a(a)},
$S:9}
A.iV.prototype={
$2(a,b){return this.a(a,b)},
$S:10}
A.iW.prototype={
$1(a){return this.a(A.be(a))},
$S:11}
A.aT.prototype={
C(a){return this.eD(!1)},
eD(a){var t,s,r,q,p,o=this.hK(),n=this.e5(),m=(a?"Record ":"")+"("
for(t=o.length,s="",r=0;r<t;++r,s=", "){m+=s
q=o[r]
if(typeof q=="string")m=m+q+": "
if(!(r<n.length))return A.a(n,r)
p=n[r]
m=a?m+A.kK(p):m+A.z(p)}m+=")"
return m.charCodeAt(0)==0?m:m},
hK(){var t,s=this.$s
while($.iw.length<=s)B.c.N($.iw,null)
t=$.iw[s]
if(t==null){t=this.h4()
B.c.i($.iw,s,t)}return t},
h4(){var t,s,r,q=this.$r,p=q.indexOf("("),o=q.substring(1,p),n=q.substring(p),m=n==="()"?0:n.replace(/[^,]/g,"").length+1,l=u.K,k=J.fd(m,l)
for(t=0;t<m;++t)k[t]=t
if(o!==""){s=o.split(",")
t=s.length
for(r=m;t>0;){--r;--t
B.c.i(k,r,s[t])}}k=A.ji(k,!1,l)
k.$flags=3
return k}}
A.bx.prototype={
e5(){return[this.a,this.b]},
T(a,b){if(b==null)return!1
return b instanceof A.bx&&this.$s===b.$s&&J.bB(this.a,b.a)&&J.bB(this.b,b.b)},
gE(a){return A.kE(this.$s,this.a,this.b,B.T)}}
A.is.prototype={
ce(){var t=this.b
if(t===this)throw A.f(A.hH(""))
return t}}
A.bR.prototype={
gaA(a){return B.jX},
cj(a,b,c){A.as(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
eU(a){return this.cj(a,0,null)},
eR(a,b,c){A.as(a,b,c)
return c==null?new Int8Array(a,b):new Int8Array(a,b,c)},
cV(a,b,c){A.as(a,b,c)
c=B.a.X(a.byteLength-b,2)
return new Uint16Array(a,b,c)},
eS(a){return this.cV(a,0,null)},
eP(a,b,c){A.as(a,b,c)
c=B.a.X(a.byteLength-b,2)
return new Int16Array(a,b,c)},
eT(a,b,c){A.as(a,b,c)
c=B.a.X(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
eQ(a,b,c){A.as(a,b,c)
c=B.a.X(a.byteLength-b,4)
return new Int32Array(a,b,c)},
eO(a,b,c){A.as(a,b,c)
c=B.a.X(a.byteLength-b,4)
return new Float32Array(a,b,c)},
$iH:1,
$ibR:1}
A.dI.prototype={
gv(a){if(((a.$flags|0)&2)!==0)return new A.iB(a.buffer)
else return a.buffer},
i2(a,b,c,d){var t=A.ag(b,0,c,d,null)
throw A.f(t)},
dS(a,b,c,d){if(b>>>0!==b||b>c)this.i2(a,b,c,d)},
$iT:1}
A.iB.prototype={
cj(a,b,c){var t=A.mS(this.a,b,c)
t.$flags=3
return t},
eU(a){return this.cj(0,0,null)},
eR(a,b,c){var t=A.mM(this.a,b,c)
t.$flags=3
return t},
cV(a,b,c){var t=A.mO(this.a,b,c)
t.$flags=3
return t},
eS(a){return this.cV(0,0,null)},
eP(a,b,c){var t=A.mJ(this.a,b,c)
t.$flags=3
return t},
eT(a,b,c){var t=A.mQ(this.a,b,c)
t.$flags=3
return t},
eQ(a,b,c){var t=A.mL(this.a,b,c)
t.$flags=3
return t},
eO(a,b,c){var t=A.mI(this.a,b,c)
t.$flags=3
return t}}
A.fm.prototype={
gaA(a){return B.jY},
$iH:1}
A.a8.prototype={
gu(a){return a.length},
ez(a,b,c,d,e){var t,s,r=a.length
this.dS(a,b,r,"start")
this.dS(a,c,r,"end")
if(b>c)throw A.f(A.ag(b,0,c,null,null))
t=c-b
if(e<0)throw A.f(A.bg(e))
s=d.length
if(s-e<t)throw A.f(A.mY("Not enough elements"))
if(e!==0||s!==t)d=d.subarray(e,e+t)
a.set(d,b)},
$ia7:1,
$iap:1}
A.bp.prototype={
n(a,b){A.bf(b,a,a.length)
return a[b]},
i(a,b,c){A.la(c)
a.$flags&2&&A.c(a)
A.bf(b,a,a.length)
a[b]=c},
ah(a,b,c,d,e){u.bM.a(d)
a.$flags&2&&A.c(a,5)
if(u.d4.b(d)){this.ez(a,b,c,d,e)
return}this.dI(a,b,c,d,e)},
bq(a,b,c,d){return this.ah(a,b,c,d,0)},
$ie:1,
$ir:1}
A.aq.prototype={
i(a,b,c){A.v(c)
a.$flags&2&&A.c(a)
A.bf(b,a,a.length)
a[b]=c},
ah(a,b,c,d,e){u.hb.a(d)
a.$flags&2&&A.c(a,5)
if(u.eB.b(d)){this.ez(a,b,c,d,e)
return}this.dI(a,b,c,d,e)},
bq(a,b,c,d){return this.ah(a,b,c,d,0)},
$ie:1,
$ir:1}
A.bS.prototype={
gaA(a){return B.jZ},
b7(a,b,c){return new Float32Array(a.subarray(b,A.aJ(b,c,a.length)))},
$iH:1,
$ibS:1,
$ija:1}
A.dE.prototype={
gaA(a){return B.k_},
b7(a,b,c){return new Float64Array(a.subarray(b,A.aJ(b,c,a.length)))},
$iH:1,
$ihj:1}
A.dF.prototype={
gaA(a){return B.k0},
n(a,b){A.bf(b,a,a.length)
return a[b]},
b7(a,b,c){return new Int16Array(a.subarray(b,A.aJ(b,c,a.length)))},
$iH:1,
$ihy:1}
A.dG.prototype={
gaA(a){return B.k1},
n(a,b){A.bf(b,a,a.length)
return a[b]},
b7(a,b,c){return new Int32Array(a.subarray(b,A.aJ(b,c,a.length)))},
$iH:1,
$idt:1}
A.dH.prototype={
gaA(a){return B.k2},
n(a,b){A.bf(b,a,a.length)
return a[b]},
b7(a,b,c){return new Int8Array(a.subarray(b,A.aJ(b,c,a.length)))},
$iH:1,
$ijd:1}
A.dJ.prototype={
gaA(a){return B.k4},
n(a,b){A.bf(b,a,a.length)
return a[b]},
b7(a,b,c){return new Uint16Array(a.subarray(b,A.aJ(b,c,a.length)))},
$iH:1,
$ijD:1}
A.dK.prototype={
gaA(a){return B.k5},
n(a,b){A.bf(b,a,a.length)
return a[b]},
b7(a,b,c){return new Uint32Array(a.subarray(b,A.aJ(b,c,a.length)))},
$iH:1,
$ib8:1}
A.dL.prototype={
gaA(a){return B.k6},
gu(a){return a.length},
n(a,b){A.bf(b,a,a.length)
return a[b]},
b7(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.aJ(b,c,a.length)))},
$iH:1}
A.bq.prototype={
gaA(a){return B.k7},
gu(a){return a.length},
n(a,b){A.bf(b,a,a.length)
return a[b]},
b7(a,b,c){return new Uint8Array(a.subarray(b,A.aJ(b,c,a.length)))},
ft(a,b){return this.b7(a,b,null)},
$iH:1,
$ibq:1,
$ib9:1}
A.el.prototype={}
A.em.prototype={}
A.en.prototype={}
A.eo.prototype={}
A.aI.prototype={
A(a){return A.ex(v.typeUniverse,this,a)},
cE(a){return A.l6(v.typeUniverse,this,a)}}
A.fY.prototype={}
A.fZ.prototype={
C(a){return A.at(this.a,null)}}
A.fW.prototype={
C(a){return this.a}}
A.et.prototype={}
A.hM.prototype={
$2(a,b){this.a.i(0,this.b.a(a),this.c.a(b))},
$S:12}
A.E.prototype={
gH(a){return new A.bQ(a,this.gu(a),A.aL(a).A("bQ<E.E>"))},
bH(a,b){return this.n(a,b)},
bO(a,b){var t,s=this.gu(a)
for(t=0;t<s;++t){if(this.n(a,t)===b)return!0
if(s!==this.gu(a))throw A.f(A.bD(a))}return!1},
d1(a,b){return A.e7(a,b,null,A.aL(a).A("E.E"))},
f9(a,b){return A.e7(a,0,A.ln(b,"count",u.p),A.aL(a).A("E.E"))},
b7(a,b,c){var t,s=this.gu(a)
A.bu(b,c,s)
A.bu(b,c,this.gu(a))
t=A.aL(a).A("E.E")
t=A.t(A.e7(a,b,c,t),t)
return t},
aw(a,b,c,d){var t
A.aL(a).A("E.E?").a(d)
A.bu(b,c,this.gu(a))
for(t=b;t<c;++t)this.i(a,t,d)},
ah(a,b,c,d,e){var t,s,r,q,p
A.aL(a).A("e<E.E>").a(d)
A.bu(b,c,this.gu(a))
t=c-b
if(t===0)return
A.cX(e,"skipCount")
if(u._.b(d)){s=e
r=d}else{r=J.j5(d,e).fa(0,!1)
s=0}q=J.a1(r)
if(s+t>q.gu(r))throw A.f(A.kw())
if(s<b)for(p=t-1;p>=0;--p)this.i(a,b+p,q.n(r,s+p))
else for(p=0;p<t;++p)this.i(a,b+p,q.n(r,s+p))},
bq(a,b,c,d){return this.ah(a,b,c,d,0)},
fl(a,b,c){A.aL(a).A("e<E.E>").a(c)
this.bq(a,b,b+c.length,c)},
C(a){return A.kx(a,"[","]")},
$ie:1,
$ir:1}
A.cN.prototype={
gu(a){return this.a},
C(a){return A.jj(this)},
$ibo:1}
A.hO.prototype={
$2(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=A.z(a)
s.a=(s.a+=t)+": "
t=A.z(b)
s.a+=t},
$S:13}
A.iD.prototype={
$0(){var t,s
try{t=new TextDecoder("utf-8",{fatal:true})
return t}catch(s){}return null},
$S:6}
A.iC.prototype={
$0(){var t,s
try{t=new TextDecoder("utf-8",{fatal:false})
return t}catch(s){}return null},
$S:6}
A.iz.prototype={
c3(a){var t,s,r=a.length,q=A.bu(0,null,r),p=new Uint8Array(q)
for(t=0;t<q;++t){if(!(t<r))return A.a(a,t)
s=a.charCodeAt(t)
if((s&4294967040)!==0)throw A.f(A.m6(a,"string","Contains invalid characters."))
if(!(t<q))return A.a(p,t)
p[t]=s}return p}}
A.iy.prototype={
c3(a){var t,s,r,q
u.L.a(a)
t=a.length
s=A.bu(0,null,t)
for(r=0;r<s;++r){if(!(r<t))return A.a(a,r)
q=a[r]
if((q&4294967040)!==0){if(!this.a)throw A.f(A.hk("Invalid value in input: "+q,null,null))
return this.h6(a,0,s)}}return A.e5(a,0,s)},
h6(a,b,c){var t,s,r,q
u.L.a(a)
for(t=a.length,s=b,r="";s<c;++s){if(!(s<t))return A.a(a,s)
q=a[s]
r+=A.cR((q&4294967040)!==0?65533:q)}return r.charCodeAt(0)==0?r:r}}
A.cg.prototype={}
A.eJ.prototype={}
A.eK.prototype={}
A.fk.prototype={
c4(a){var t
u.L.a(a)
t=B.cQ.c3(a)
return t}}
A.hJ.prototype={}
A.hI.prototype={}
A.fR.prototype={
j6(a,b){u.L.a(a)
return(b===!0?B.k9:B.k8).c3(a)}}
A.fS.prototype={
c3(a){return new A.h_(this.a).dU(u.L.a(a),0,null,!0)}}
A.h_.prototype={
dU(a,b,c,d){var t,s,r,q,p,o,n,m=this
u.L.a(a)
t=A.bu(b,c,a.length)
if(b===t)return""
if(a instanceof Uint8Array){s=a
r=s
q=0}else{r=A.o6(a,b,t)
t-=b
q=b
b=0}if(t-b>=15){p=m.a
o=A.o5(p,r,b,t)
if(o!=null){if(!p)return o
if(o.indexOf("\ufffd")<0)return o}}o=m.d7(r,b,t,!0)
p=m.b
if((p&1)!==0){n=A.o7(p)
m.b=0
throw A.f(A.hk(n,a,q+m.c))}return o},
d7(a,b,c,d){var t,s,r=this
if(c-b>1000){t=B.a.X(b+c,2)
s=r.d7(a,b,t,!1)
if((r.b&1)!==0)return s
return s+r.d7(a,t,c,d)}return r.ja(a,b,c,d)},
ja(a,b,c,a0){var t,s,r,q,p,o,n,m,l=this,k="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",j=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i=65533,h=l.b,g=l.c,f=new A.e4(""),e=b+1,d=a.length
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
f.a+=q}else{q=A.e5(a,e,o)
f.a+=q}if(o===c)break A
e=p}else e=p}if(a0&&h>32)if(s){d=A.cR(i)
f.a+=d}else{l.b=77
l.c=c
return""}l.b=h
l.c=g
d=f.a
return d.charCodeAt(0)==0?d:d}}
A.it.prototype={
C(a){return this.ad()}}
A.P.prototype={}
A.ez.prototype={
C(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.hf(t)
return"Assertion failed"}}
A.e9.prototype={}
A.aO.prototype={
gda(){return"Invalid argument"+(!this.a?"(s)":"")},
gd9(){return""},
C(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+A.z(q),o=t.gda()+r+p
if(!t.a)return o
return o+t.gd9()+": "+A.hf(t.gdz())},
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
A.eY.prototype={
gdz(){return A.v(this.b)},
gda(){return"RangeError"},
gd9(){if(A.v(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gu(a){return this.f}}
A.eb.prototype={
C(a){return"Unsupported operation: "+this.a}}
A.fP.prototype={
C(a){return"UnimplementedError: "+this.a}}
A.cZ.prototype={
C(a){return"Bad state: "+this.a}}
A.eI.prototype={
C(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.hf(t)+"."}}
A.fp.prototype={
C(a){return"Out of Memory"},
$iP:1}
A.e3.prototype={
C(a){return"Stack Overflow"},
$iP:1}
A.aP.prototype={
C(a){var t=this.a,s=""!==t?"FormatException: "+t:"FormatException",r=this.c
return r!=null?s+(" (at offset "+A.z(r)+")"):s}}
A.e.prototype={
gu(a){var t,s=this.gH(this)
for(t=0;s.F();)++t
return t},
bH(a,b){var t,s
A.cX(b,"index")
t=this.gH(this)
for(s=b;t.F();){if(s===0)return t.gP();--s}throw A.f(A.jc(b,b-s,this,"index"))},
C(a){return A.mB(this,"(",")")}}
A.bT.prototype={
gE(a){return A.O.prototype.gE.call(this,0)},
C(a){return"null"}}
A.O.prototype={$iO:1,
T(a,b){return this===b},
gE(a){return A.e_(this)},
C(a){return"Instance of '"+A.fw(this)+"'"},
gaA(a){return A.oW(this)},
toString(){return this.C(this)}}
A.e4.prototype={
gu(a){return this.a.length},
C(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.hn.prototype={
fD(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a.length
for(t=0;t<g;++t){s=a[t]
if(s>h.b)h.b=s
if(s<h.c)h.c=s}s=h.b
r=B.a.V(1,s)
q=h.a=new Uint32Array(r)
for(p=1,o=0,n=2;p<=s;){for(m=p<<16,t=0;t<g;++t)if(a[t]===p){for(l=o,k=0,j=0;j<p;++j){k=(k<<1|l&1)>>>0
l=l>>>1}for(i=(m|t)>>>0,j=k;j<r;j+=n){if(!(j>=0))return A.a(q,j)
q[j]=i}++o}++p
o=o<<1>>>0
n=n<<1>>>0}}}
A.iq.prototype={}
A.iF.prototype={
jd(a,b,c,d){var t,s,r,q,p,o,n=null
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
return!1}if(n!=null)b.bm(n)
t=new A.dN(new Uint8Array(32768),B.a0)
new A.hw(a,t).hZ()
n=J.L(B.e.gv(t.c),t.c.byteOffset,t.b)
a.k()}if(n!=null)b.bm(n)
return!0}}
A.ir.prototype={}
A.iG.prototype={
f_(a,b){var t
u.L.a(a)
t=A.kF(B.S,32768)
this.jg(A.hx(a,B.a0,null,null),t,b,!1,null)
return t.dC()},
jg(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
b.a=B.S
t=(B.a.J(15,0,15)-8<<4|8)>>>0
b.W(t)
s=t*256
for(r=0;q=(r|0)>>>0,B.a.a1(s+q,31)!==0;)++r
b.W(q)
p=a.c
o=A.oV(a)
a.c=p
q=c==null?6:c
A.mh(a,q,b,15)
q=o&255
n=o>>>24&255
m=o>>>16&255
l=o>>>8&255
if(b.a===B.S){b.W(n)
b.W(m)
b.W(l)
b.W(q)}else{b.W(q)
b.W(l)
b.W(m)
b.W(n)}}}
A.d3.prototype={
ad(){return"_DeflateFlushMode."+this.b}}
A.hc.prototype={
i_(a,b){var t,s,r,q,p=this,o=!0
if(b>=9)if(b<=15)o=a>9
if(o)return!1
t=p.hV(a)
if(t==null)return!1
$.bi.b=t
o=new Uint16Array(1146)
p.p1=o
s=new Uint16Array(122)
p.p2=s
r=new Uint16Array(78)
p.p3=r
p.as=b
q=p.Q=B.a.L(1,b)
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
q.c=$.lT()
q=p.R8
q.a=s
q.c=$.lS()
q=p.RG
q.a=r
q.c=$.lR()
p.b0=p.aC=0
p.bD=8
p.ee()
p.ay=2*p.Q
B.u.aw(p.CW,0,p.cy,0)
p.k2=p.fr=p.id=0
p.fx=p.k3=2
p.cx=p.go=0
return!0},
hy(a){var t,s,r,q,p=this,o=p.x
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
if(o){switch($.bi.ce().e){case 0:r=p.hB(a)
break
case 1:r=p.hz(a)
break
case 2:r=p.hA(a)
break
default:r=-1
break}o=r===2
if(o||r===3)p.c=666
if(r===0||o)return 0
if(r===1){if(a===B.kd){p.au(2,3)
p.c2(256,B.a7)
p.eV()
o=p.bD
o===$&&A.b()
t=p.b0
t===$&&A.b()
if(1+o+10-t<9){p.au(2,3)
p.c2(256,B.a7)
p.eV()}p.bD=7}else{p.eE(0,0,!1)
if(a===B.ke){o=p.cy
o===$&&A.b()
t=p.CW
q=0
for(;q<o;++q){t===$&&A.b()
t.$flags&2&&A.c(t)
if(!(q<t.length))return A.a(t,q)
t[q]=0}}}p.de()}}if(a!==B.a_)return 0
return 1},
ee(){var t=this,s=t.p1
s===$&&A.b()
B.u.aw(s,0,572,0)
s=t.p2
s===$&&A.b()
B.u.aw(s,0,60,0)
s=t.p3
s===$&&A.b()
B.u.aw(s,0,38,0)
s=t.p1
s.$flags&2&&A.c(s)
s[512]=1
t.y2=t.bR=t.az=t.bw=0},
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
p=A.kc(a,p,n[s],q)}else p=!1
if(p)++s
if(!(s>=0&&s<573))return A.a(n,s)
if(A.kc(a,t,n[s],q))break
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
fY(){var t,s,r=this,q=r.p1
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
if(q[t]!==0)break}q=r.az
q===$&&A.b()
r.az=q+(3*(s+1)+5+5+4)
return s},
iS(a,b,c){var t,s,r,q,p=this
p.au(a-257,5)
t=b-1
p.au(t,5)
p.au(c-4,4)
for(s=0;s<c;++s){r=p.p3
r===$&&A.b()
if(!(s<19))return A.a(B.af,s)
q=B.af[s]*2+1
if(!(q<78))return A.a(r,q)
p.au(r[q],3)}r=p.p1
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
g.au(h&65535,i[j]&65535)}while(--n,n!==0)}else if(t!==0){if(t!==o){m=g.p3
m===$&&A.b()
q.a(m)
j=t*2
if(!(j<78))return A.a(m,j)
i=m[j];++j
if(!(j<78))return A.a(m,j)
g.au(i&65535,m[j]&65535);--n}m=g.p3
m===$&&A.b()
q.a(m)
g.au(m[32]&65535,m[33]&65535)
g.au(n-3,2)}else{m=g.p3
if(n<=10){m===$&&A.b()
q.a(m)
g.au(m[34]&65535,m[35]&65535)
g.au(n-3,3)}else{m===$&&A.b()
q.a(m)
g.au(m[36]&65535,m[37]&65535)
g.au(n-11,7)}}}if(l===0){r=k
s=138}else if(t===l){r=k
s=6}else{s=7
r=4}o=t
n=0}},
it(a,b,c){var t,s,r=this
if(c===0)return
t=r.f
t===$&&A.b()
s=r.x
s===$&&A.b()
B.e.ah(t,s,s+c,a,b)
r.x=r.x+c},
b9(a){var t,s=this.f
s===$&&A.b()
t=this.x
t===$&&A.b()
this.x=t+1
s.$flags&2&&A.c(s)
if(!(t>=0&&t<s.length))return A.a(s,t)
s[t]=a},
c2(a,b){var t,s,r
u.L.a(b)
t=a*2
s=b.length
if(!(t<s))return A.a(b,t)
r=b[t];++t
if(!(t<s))return A.a(b,t)
this.au(r&65535,b[t]&65535)},
au(a,b){var t,s=this,r=s.b0
r===$&&A.b()
t=s.aC
if(r>16-b){t===$&&A.b()
r=s.aC=(t|B.a.V(a,r)&65535)>>>0
s.b9(r)
s.b9(A.am(r,8))
s.aC=A.am(a,16-s.b0)
s.b0=s.b0+(b-16)}else{t===$&&A.b()
s.aC=(t|B.a.V(a,r)&65535)>>>0
s.b0=r+b}},
ci(a,b){var t,s,r,q,p,o=this,n=o.f
n===$&&A.b()
t=o.bv
t===$&&A.b()
s=o.y2
s===$&&A.b()
s=t+s*2
t=A.am(a,8)
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
n[t]=s+1}else{n=o.bR
n===$&&A.b()
o.bR=n+1
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
q+=s[r]*(5+B.U[p])}q=A.am(q,3)
s=o.bR
s===$&&A.b()
r=o.y2
if(s<r/2&&q<(n-t)/2)return!0
n=r}t=o.y1
t===$&&A.b()
return n===t-1},
dT(a,b){var t,s,r,q,p,o,n,m,l=this,k=u.L
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
if(p===0)l.c2(o,a)
else{n=B.az[o]
l.c2(n+256+1,a)
if(!(n<29))return A.a(B.au,n)
m=B.au[n]
if(m!==0)l.au(o-B.da[n],m);--p
n=A.kY(p)
l.c2(n,b)
if(!(n<30))return A.a(B.U,n)
m=B.U[n]
if(m!==0)l.au(p-B.ea[n],m)}}while(t<l.y2)}l.c2(256,a)
if(513>=a.length)return A.a(a,513)
l.bD=a[513]},
fm(){var t,s,r,q,p
for(t=this.p1,s=0,r=0;s<7;){t===$&&A.b()
q=s*2
if(!(q<1146))return A.a(t,q)
r+=t[q];++s}for(p=0;s<128;){t===$&&A.b()
q=s*2
if(!(q<1146))return A.a(t,q)
p+=t[q];++s}while(s<256){t===$&&A.b()
q=s*2
if(!(q<1146))return A.a(t,q)
r+=t[q];++s}this.y=r>A.am(p,2)?0:1},
eV(){var t=this,s=t.b0
s===$&&A.b()
if(s===16){s=t.aC
s===$&&A.b()
t.b9(s)
t.b9(A.am(s,8))
t.b0=t.aC=0}else if(s>=8){s=t.aC
s===$&&A.b()
t.b9(s)
t.aC=A.am(t.aC,8)
t.b0=t.b0-8}},
dP(){var t=this,s=t.b0
s===$&&A.b()
if(s>8){s=t.aC
s===$&&A.b()
t.b9(s)
t.b9(A.am(s,8))}else if(s>0){s=t.aC
s===$&&A.b()
t.b9(s)}t.b0=t.aC=0},
bF(a){var t,s,r,q,p,o=this,n=o.fr
n===$&&A.b()
if(n>=0)t=n
else t=-1
s=o.id
s===$&&A.b()
n=s-n
s=o.k4
s===$&&A.b()
if(s>0){if(o.y===2)o.fm()
o.p4.d3(o)
o.R8.d3(o)
r=o.fY()
s=o.az
s===$&&A.b()
q=A.am(s+3+7,3)
s=o.bw
s===$&&A.b()
p=A.am(s+3+7,3)
if(p<=q)q=p}else{p=n+5
q=p
r=0}if(n+4<=q&&t!==-1)o.eE(t,n,a)
else if(p===q){o.au(2+(a?1:0),3)
o.dT(B.a7,B.bl)}else{o.au(4+(a?1:0),3)
n=o.p4.b
n===$&&A.b()
t=o.R8.b
t===$&&A.b()
o.iS(n+1,t+1,r+1)
t=o.p1
t===$&&A.b()
n=o.p2
n===$&&A.b()
o.dT(t,n)}o.ee()
if(a)o.dP()
o.fr=o.id
o.de()},
hB(a){var t,s,r,q,p,o=this,n=o.r
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
o.bF(!1)}s=o.id
r=o.fr
p=o.Q
p===$&&A.b()
if(s-r>=p-262)o.bF(!1)}n=a===B.a_
o.bF(n)
return n?3:1},
eE(a,b,c){var t,s=this
s.au(c?1:0,3)
s.dP()
s.bD=8
s.b9(b)
s.b9(A.am(b,8))
t=(~b>>>0)+65536&65535
s.b9(t)
s.b9(A.am(t,8))
t=s.ax
t===$&&A.b()
s.it(t,a,b)},
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
B.e.ah(s,0,t,s,t)
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
m=i.iw(t,i.id+i.k2,q)
t=i.k2=i.k2+m
if(t>=3){s=i.ax
r=i.id
o=s.length
if(r>>>0!==r||r>=o)return A.a(s,r)
k=s[r]&255
i.cx=k
j=i.dy
j===$&&A.b()
j=B.a.V(k,j);++r
if(!(r<o))return A.a(s,r)
r=s[r]
s=i.dx
s===$&&A.b()
i.cx=((j^r&255)&s)>>>0}}while(t<262&&!(h.c>=h.d))},
hz(a){var t,s,r,q,p,o,n,m,l,k,j=this
for(t=a===B.am,s=0;;){r=j.k2
r===$&&A.b()
if(r<262){j.dd()
r=j.k2
if(r<262&&t)return 0
if(r===0)break}if(r>=3){r=j.cx
r===$&&A.b()
q=j.dy
q===$&&A.b()
q=B.a.V(r,q)
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
if(r!==2)j.fx=j.ei(s)}r=j.fx
r===$&&A.b()
q=j.id
if(r>=3){q===$&&A.b()
l=j.ci(q-j.k1,r-3)
r=j.k2
q=j.fx
r-=q
j.k2=r
p=$.bi.b
if(p===$.bi)A.aw(A.hH(""))
if(q<=p.b&&r>=3){r=j.fx=q-1
do{q=j.id=j.id+1
p=j.cx
p===$&&A.b()
o=j.dy
o===$&&A.b()
o=B.a.V(p,o)
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
n=B.a.V(o,n);++r
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
j.id=j.id+1}if(l)j.bF(!1)}t=a===B.a_
j.bF(t)
return t?3:1},
hA(a){var t,s,r,q,p,o,n,m,l,k,j,i=this
for(t=a===B.am,s=0;;){r=i.k2
r===$&&A.b()
if(r<262){i.dd()
r=i.k2
if(r<262&&t)return 0
if(r===0)break}if(r>=3){r=i.cx
r===$&&A.b()
q=i.dy
q===$&&A.b()
q=B.a.V(r,q)
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
if(p===$.bi)A.aw(A.hH(""))
if(r<p.b){r=i.id
r===$&&A.b()
q=i.Q
q===$&&A.b()
q=(r-s&65535)<=q-262
r=q}else r=q}else r=q
q=2
if(r){r=i.ok
r===$&&A.b()
if(r!==2){r=i.ei(s)
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
o=B.a.V(p,o)
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
if(k)i.bF(!1)}else{r=i.go
r===$&&A.b()
if(r!==0){r=i.ax
r===$&&A.b()
q=i.id
q===$&&A.b();--q
if(!(q>=0&&q<r.length))return A.a(r,q)
if(i.ci(0,r[q]&255))i.bF(!1)
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
i.bF(t)
return t?3:1},
ei(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=$.bi.ce().d,b=d.id
b===$&&A.b()
t=d.k3
t===$&&A.b()
s=d.Q
s===$&&A.b()
s-=262
r=b>s?b-s:0
q=$.bi.ce().c
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
if(d.k3>=$.bi.ce().a)c=c>>>2
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
iw(a,b,c){var t,s,r,q,p,o,n=this
if(c!==0){t=n.a
s=t.c
t=t.d
t===$&&A.b()
t=s>=t}else t=!0
if(t)return 0
r=n.a.aa(c)
q=r.gu(0)
if(q===0)return 0
p=r.a0()
o=p.length
if(q>o)q=o
B.e.bq(a,b,b+q,p)
n.e+=q
n.d=A.aV(p,n.d)
return q},
de(){var t,s=this,r=s.x
r===$&&A.b()
t=s.f
t===$&&A.b()
s.b.fe(t,r)
t=s.w
t===$&&A.b()
s.w=t+r
r=s.x-r
s.x=r
if(r===0)s.w=0},
hV(a){switch(a){case 0:return new A.aB(0,0,0,0,0)
case 1:return new A.aB(4,4,8,4,1)
case 2:return new A.aB(4,5,16,8,1)
case 3:return new A.aB(4,6,32,32,1)
case 4:return new A.aB(4,4,16,16,2)
case 5:return new A.aB(8,16,32,32,2)
case 6:return new A.aB(8,16,128,128,2)
case 7:return new A.aB(8,32,128,256,2)
case 8:return new A.aB(32,128,258,1024,2)
case 9:return new A.aB(32,258,258,4096,2)}return null}}
A.aB.prototype={}
A.iu.prototype={
hT(a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a
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
f=a3.az
f===$&&A.b()
a3.az=f+b*(n+c)
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
if(k!==n){f=a3.az
f===$&&A.b()
if(!(o>=0&&o<j))return A.a(a2,o)
a3.az=f+(n-k)*a2[o]
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
g=a0.az
g===$&&A.b()
a0.az=g-1
if(j){g=a0.bw
g===$&&A.b();++i
if(!(i<s.length))return A.a(s,i)
a0.bw=g-s[i]}}b.b=k
for(l=B.a.X(i,2);l>=1;--l)a0.dn(a,l)
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
b.hT(a0)
A.nN(a,k,a0.rx)}}
A.ix.prototype={}
A.hw.prototype={
gbs(){var t=this.a
if(t==null)return t
t.d===$&&A.b()
return t},
hZ(){var t,s,r=this
r.e=r.d=0
if(r.gbs()==null)return
for(;;){t=r.gbs()
s=t.c
t=t.d
t===$&&A.b()
if(!(s<t))break
if(!r.i9())return}},
i9(){var t,s,r,q=this,p=q.gbs()
if(p!=null){t=p.c
s=p.d
s===$&&A.b()
s=t>=s
t=s}else t=!0
if(t)return!1
r=q.b8(3)
switch(B.a.j(r,1)){case 0:if(q.il()===-1)return!1
break
case 1:if(q.dZ($.lF(),$.lE())===-1)return!1
break
case 2:if(q.ia()===-1)return!1
break
default:return!1}return(r&1)===0},
b8(a){var t,s,r,q,p=this
if(a===0)return 0
while(t=p.e,t<a){t=p.gbs()
s=t.c
t=t.d
t===$&&A.b()
if(s>=t)return-1
t=p.gbs()
s=t.b
s.toString
t=t.c++
if(!(t>=0&&t<s.length))return A.a(s,t)
r=s[t]
t=p.d
s=p.e
p.d=(t|B.a.V(r,s))>>>0
p.e=s+8}s=p.d
q=B.a.L(1,a)
p.d=B.a.a2(s,a)
p.e=t-a
return(s&q-1)>>>0},
dq(a){var t,s,r,q,p,o,n,m=this,l=a.a
l===$&&A.b()
t=a.b
while(s=m.e,s<t){s=m.gbs()
r=s.c
s=s.d
s===$&&A.b()
if(r>=s)return-1
s=m.gbs()
r=s.b
r.toString
s=s.c++
if(!(s>=0&&s<r.length))return A.a(r,s)
q=r[s]
s=m.d
r=m.e
m.d=(s|B.a.V(q,r))>>>0
m.e=r+8}r=m.d
p=(r&B.a.V(1,t)-1)>>>0
if(!(p<l.length))return A.a(l,p)
o=l[p]
n=o>>>16
m.d=B.a.a2(r,n)
m.e=s-n
return o&65535},
il(){var t,s,r=this
r.e=r.d=0
t=r.b8(16)
s=r.b8(16)
if(t!==0&&t!==(s^65535)>>>0)return-1
if(t>r.gbs().gu(0))return-1
r.c.jN(r.gbs().aa(t))
return 0},
ia(){var t,s,r,q,p,o,n,m,l,k,j=this,i=j.b8(5)
if(i===-1)return-1
i+=257
if(i>288)return-1
t=j.b8(5)
if(t===-1)return-1;++t
if(t>32)return-1
s=j.b8(4)
if(s===-1)return-1
s+=4
if(s>19)return-1
r=new Uint8Array(19)
for(q=0;q<s;++q){p=j.b8(3)
if(p===-1)return-1
o=B.af[q]
if(!(o<19))return A.a(r,o)
r[o]=p}n=A.eS(r)
o=i+t
m=new Uint8Array(o)
l=J.L(B.e.gv(m),0,i)
k=J.L(B.e.gv(m),i,t)
if(j.h8(o,n,m)===-1)return-1
return j.dZ(A.eS(l),A.eS(k))},
dZ(a,b){var t,s,r,q,p,o,n=this
for(t=n.c;;){s=n.dq(a)
if(s<0||s>285)return-1
if(s===256)break
if(s<256){t.W(s&255)
continue}r=s-257
if(!(r>=0&&r<29))return A.a(B.bC,r)
q=B.bC[r]
p=n.b8(B.j9[r])
o=n.dq(b)
if(o<0||o>29)return-1
if(!(o>=0&&o<30))return A.a(B.bD,o)
t.jM(B.bD[o]+n.b8(B.U[o]),q+p)}while(t=n.e,t>=8){n.e=t-8
t=n.gbs()
q=--t.c
p=t.d
p===$&&A.b()
t.c=B.a.J(q,0,p)}return 0},
h8(a,b,c){var t,s,r,q,p,o,n,m,l=this
for(t=0,s=0;s<a;){r=l.dq(b)
if(r===-1)return-1
q=0
switch(r){case 16:p=l.b8(2)
if(p===-1)return-1
p+=3
for(o=c.$flags|0;n=p-1,p>0;p=n,s=m){m=s+1
o&2&&A.c(c)
if(!(s>=0&&s<c.length))return A.a(c,s)
c[s]=t}break
case 17:p=l.b8(3)
if(p===-1)return-1
p+=3
for(o=c.$flags|0;n=p-1,p>0;p=n,s=m){m=s+1
o&2&&A.c(c)
if(!(s>=0&&s<c.length))return A.a(c,s)
c[s]=0}t=q
break
case 18:p=l.b8(7)
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
A.ip.prototype={
bP(a){var t
u.L.a(a)
t=A.kF(B.a0,32768)
B.cq.jd(A.hx(a,B.S,null,null),t,!1,!1)
return t.dC()}}
A.eD.prototype={
ad(){return"ByteOrder."+this.b}}
A.eZ.prototype={
gu(a){var t=this.b
return t==null?0:t.length-this.c},
fu(a,b){var t=this.b
if(t==null)return A.hx(A.k([],u.t),B.a0,null,null)
return A.hx(t,this.a,a,b)},
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
return J.L(B.e.gv(p),q.b.byteOffset+q.c,t)}}
A.f_.prototype={
k(){var t=this,s=t.D(),r=t.D(),q=t.D(),p=t.D()
if(t.a===B.S)return(s<<24|r<<16|q<<8|p)>>>0
return(p<<24|q<<16|r<<8|s)>>>0},
aa(a){var t=this,s=t.fu(a,t.c)
t.c=t.c+s.gu(0)
return s}}
A.dN.prototype={
dC(){return J.L(B.e.gv(this.c),this.c.byteOffset,this.b)},
W(a){var t,s,r=this
if(r.b===r.c.length)r.hH()
t=r.c
s=r.b++
t.$flags&2&&A.c(t)
if(!(s>=0&&s<t.length))return A.a(t,s)
t[s]=a},
fe(a,b){var t,s,r,q,p=this
u.L.a(a)
if(b==null)b=a.length
while(t=p.b,s=t+b,r=p.c,q=r.length,s>q)p.cJ(s-q)
B.e.bq(r,t,s,a)
p.b+=b},
bm(a){return this.fe(a,null)},
jN(a){var t,s,r,q,p,o,n=this
for(;;){t=n.b
s=a.b
r=s==null
q=r?0:s.length-a.c
p=n.c
o=p.length
if(!(t+q>o))break
n.cJ(t+(r?0:s.length-a.c)-o)}if(!r)B.e.ah(p,t,t+a.gu(0),s,a.c)
n.b=n.b+a.gu(0)},
jM(a,b){var t,s,r,q,p,o,n,m,l,k,j=this
while(t=j.b,s=t+b,r=j.c,q=r.length,s>q)j.cJ(s-q)
p=t-a
if(a>=b)B.e.ah(r,t,s,r,p)
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
B.e.bq(t,0,r,s)
this.c=t},
hH(){return this.cJ(null)},
gu(a){return this.b}}
A.fr.prototype={}
A.hG.prototype={}
A.ha.prototype={}
A.hQ.prototype={
j0(a1,a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null
if(!isFinite(a2)||a2<0||a2>1)throw A.f(A.jA(a2,"alpha","must be between 0.0 and 1.0"))
t=A.lx(a1)
s=t.gK()
r=A.M(a0,a0,B.f,0,B.j,t.gI(),a0,0,3,a0,B.f,s,!1)
s=t.a
q=J.aN(s.gv(s))
s=r.a
p=J.aN(s.gv(s))
o=t.a.gaE()
n=r.a.gaE()
s=q.length
m=this.a
l=m.length
k=0
for(;;){j=t.a
j=j==null?a0:j.b
if(!(k<(j==null?0:j)))break
j=k*o
i=k*n
h=0
for(;;){g=t.a
g=g==null?a0:g.a
if(!(h<(g==null?0:g)))break
g=h*3
f=j+g
e=(B.a.a1(k,224)*224+B.a.a1(h,224))*3
d=i+g
if(!(f>=0&&f<s))return A.a(q,f)
g=q[f]
if(!(e<l))return A.a(m,e)
g=B.b.aK(B.b.J(g/255+a2*m[e],0,1)*255)
p.$flags&2&&A.c(p)
c=p.length
if(!(d>=0&&d<c))return A.a(p,d)
p[d]=g
g=d+1
b=f+1
if(!(b<s))return A.a(q,b)
b=q[b]
a=e+1
if(!(a<l))return A.a(m,a)
a=B.b.aK(B.b.J(b/255+a2*m[a],0,1)*255)
p.$flags&2&&A.c(p)
if(!(g<c))return A.a(p,g)
p[g]=a
a=d+2
g=f+2
if(!(g<s))return A.a(q,g)
g=q[g]
b=e+2
if(!(b<l))return A.a(m,b)
b=B.b.aK(B.b.J(g/255+a2*m[b],0,1)*255)
p.$flags&2&&A.c(p)
if(!(a<c))return A.a(p,a)
p[a]=b;++h}++k}return r}}
A.iZ.prototype={
$1(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
A.jL(a)
m=v.G
m.self.postMessage({type:"ready"})
try{t=A.jL(a.data)
switch(A.be(t.type)){case"prepare":l=u.U.a(t.bytes)
l.toString
k=u.W.a(t.vector)
k.toString
s=A.p9(new A.er(l,k))
k=m.self
l=s.a
j=s.b
k.postMessage({type:"preview",bytes:s.c,vector:s.d,width:l,height:j})
break
case"generate":l=u.U.a(t.bytes)
l.toString
r=A.ls(l)
m.self.postMessage({type:"progress",stage:1})
l=u.W.a(t.vector)
l.toString
k=A.lb(t.alpha)
k.toString
q=new A.hQ(new Float32Array(A.w(A.oJ(l)))).j0(r,k)
m.self.postMessage({type:"progress",stage:2})
k=r
l=q
i=A.p7(k,l)
p=new A.hG(new Uint8Array(A.w(A.lt(k))),new Uint8Array(A.w(A.lt(l))),k.gK(),k.gI(),i.a,i.b)
m.self.postMessage({type:"result",clean:p.a,output:p.b,width:p.c,height:p.d,ssim:p.e,psnr:p.f})
break
case"histogram":l=u.U
k=l.a(t.clean)
k.toString
l=l.a(t.output)
l.toString
o=A.p8(new A.es(k,l))
l=m.self
k=o
j=A.ar(k)
h=j.A("dD<1,D>")
k=A.t(new A.dD(k,j.A("D(1)").a(new A.iY()),h),h.A("aR.E"))
l.postMessage({type:"histogram",bins:k})
break
default:throw A.f(B.cF)}}catch(g){n=A.pf(g)
m=m.self
l=n instanceof A.aP?n.a:"Could not process this image. Try a smaller PNG or JPEG."
m.postMessage({type:"error",error:l})}},
$S:14}
A.iY.prototype={
$1(a){return A.v(a)},
$S:15}
A.h9.prototype={
ad(){return"Channel."+this.b}}
A.J.prototype={
F(){var t=this.b
return++this.a<t.gu(t)},
gP(){return this.b.n(0,this.a)},
$iB:1}
A.ch.prototype={
O(){return new A.ch(new Uint16Array(A.w(this.a)))},
gG(){return B.A},
gu(a){return this.a.length},
gR(){return null},
n(a,b){var t=this.a,s=t.length
if(b<s){if(!(b>=0))return A.a(t,b)
t=t[b]
s=$.K
s=s!=null?s:A.N()
if(!(t<s.length))return A.a(s,t)
t=s[t]}else t=0
return t},
i(a,b,c){var t,s=this.a,r=s.length
if(b<r){t=A.G(c)
s.$flags&2&&A.c(s)
if(!(b>=0))return A.a(s,b)
s[b]=t}},
gM(){return this.gm()},
gm(){var t=this.a,s=t.length
if(s!==0){if(0>=s)return A.a(t,0)
t=t[0]
s=$.K
s=s!=null?s:A.N()
if(!(t<s.length))return A.a(s,t)
t=s[t]}else t=0
return t},
gp(){var t,s=this.a
if(s.length>1){s=s[1]
t=$.K
t=t!=null?t:A.N()
if(!(s<t.length))return A.a(t,s)
s=t[s]}else s=0
return s},
gq(){var t,s=this.a
if(s.length>2){s=s[2]
t=$.K
t=t!=null?t:A.N()
if(!(s<t.length))return A.a(t,s)
s=t[s]}else s=0
return s},
gt(){var t,s=this.a
if(s.length>3){s=s[3]
t=$.K
t=t!=null?t:A.N()
if(!(s<t.length))return A.a(t,s)
s=t[s]}else s=0
return s},
gag(){return A.U(this)},
ac(a){var t=a.gm(),s=this.a,r=s.length
if(r!==0){t=A.G(t)
s.$flags&2&&A.c(s)
if(0>=r)return A.a(s,0)
s[0]=t}t=a.gp()
if(r>1){t=A.G(t)
s.$flags&2&&A.c(s)
s[1]=t}t=a.gq()
if(r>2){t=A.G(t)
s.$flags&2&&A.c(s)
s[2]=t}t=a.gt()
if(r>3){t=A.G(t)
s.$flags&2&&A.c(s)
s[3]=t}},
gH(a){return new A.J(this)},
T(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gu(b)===this.a.length){t=b.gE(b)
s=A.t(this,A.o(this).A("e.E"))
t=t===A.m(s)}return t},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.m(t)},
$iy:1}
A.ci.prototype={
O(){return new A.ci(new Float32Array(A.w(this.a)))},
gG(){return B.G},
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
gM(){var t=this.a,s=t.length
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
gag(){return A.U(this)},
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
gH(a){return new A.J(this)},
T(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gu(b)===this.a.length){t=b.gE(b)
s=A.t(this,A.o(this).A("e.E"))
t=t===A.m(s)}return t},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.m(t)},
$iy:1}
A.cj.prototype={
O(){return new A.cj(new Float64Array(A.w(this.a)))},
gG(){return B.I},
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
gM(){var t=this.a,s=t.length
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
gag(){return A.U(this)},
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
gH(a){return new A.J(this)},
T(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gu(b)===this.a.length){t=b.gE(b)
s=A.t(this,A.o(this).A("e.E"))
t=t===A.m(s)}return t},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.m(t)},
$iy:1}
A.ck.prototype={
O(){return new A.ck(new Int16Array(A.w(this.a)))},
gG(){return B.K},
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
gM(){var t=this.a,s=t.length
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
gag(){return A.U(this)},
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
gH(a){return new A.J(this)},
T(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gu(b)===this.a.length){t=b.gE(b)
s=A.t(this,A.o(this).A("e.E"))
t=t===A.m(s)}return t},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.m(t)},
$iy:1}
A.cl.prototype={
O(){return new A.cl(new Int32Array(A.w(this.a)))},
gG(){return B.L},
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
gM(){var t=this.a,s=t.length
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
gag(){return A.U(this)},
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
gH(a){return new A.J(this)},
T(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gu(b)===this.a.length){t=b.gE(b)
s=A.t(this,A.o(this).A("e.E"))
t=t===A.m(s)}return t},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.m(t)},
$iy:1}
A.cm.prototype={
O(){return new A.cm(new Int8Array(A.w(this.a)))},
gG(){return B.J},
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
gM(){var t=this.a,s=t.length
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
gag(){return A.U(this)},
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
gH(a){return new A.J(this)},
T(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gu(b)===this.a.length){t=b.gE(b)
s=A.t(this,A.o(this).A("e.E"))
t=t===A.m(s)}return t},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.m(t)},
$iy:1}
A.co.prototype={
O(){var t=this.b
t===$&&A.b()
return new A.co(this.a,t)},
gG(){return B.v},
gR(){return null},
bX(a){var t
if(a<this.a){t=this.b
t===$&&A.b()
t=B.a.a_(t,7-a)&1}else t=0
return t},
c7(a,b){var t
if(a>=this.a)return
a=7-a
t=this.b
t===$&&A.b()
this.b=b!==0?(t|B.a.V(1,a))>>>0:(t&~(B.a.V(1,a)&255))>>>0},
n(a,b){return this.bX(b)},
i(a,b,c){return this.c7(b,c)},
gM(){return this.bX(0)},
gm(){return this.bX(0)},
gp(){return this.bX(1)},
gq(){return this.bX(2)},
gt(){return this.bX(3)},
gag(){return A.U(this)},
ac(a){this.a7(a.gm(),a.gp(),a.gq(),a.gt())},
a7(a,b,c,d){var t=this
t.c7(0,a)
t.c7(1,b)
t.c7(2,c)
t.c7(3,d)},
gH(a){return new A.J(this)},
T(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gu(b)===this.a){t=b.gE(b)
s=A.t(this,A.o(this).A("e.E"))
t=t===A.m(s)}return t},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.m(t)},
$iy:1,
gu(a){return this.a}}
A.cp.prototype={
O(){return new A.cp(new Uint16Array(A.w(this.a)))},
gG(){return B.l},
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
gM(){var t=this.a,s=t.length
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
gag(){return A.U(this)},
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
gH(a){return new A.J(this)},
T(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gu(b)===this.a.length){t=b.gE(b)
s=A.t(this,A.o(this).A("e.E"))
t=t===A.m(s)}return t},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.m(t)},
$iy:1}
A.cq.prototype={
O(){var t=this.b
t===$&&A.b()
return new A.cq(this.a,t)},
gG(){return B.x},
gR(){return null},
bY(a){var t
if(a<this.a){t=this.b
t===$&&A.b()
t=B.a.a_(t,6-(a<<1>>>0))&3}else t=0
return t},
c8(a,b){var t,s,r
if(a>=this.a)return
if(!(a>=0&&a<4))return A.a(B.bb,a)
t=B.bb[a]
s=B.b.h(b)
r=this.b
r===$&&A.b()
this.b=(r&t|B.a.V(s&3,6-(a<<1>>>0)))>>>0},
n(a,b){return this.bY(b)},
i(a,b,c){return this.c8(b,c)},
gM(){return this.bY(0)},
gm(){return this.bY(0)},
gp(){return this.bY(1)},
gq(){return this.bY(2)},
gt(){return this.bY(3)},
gag(){return A.U(this)},
ac(a){this.a7(a.gm(),a.gp(),a.gq(),a.gt())},
a7(a,b,c,d){var t=this
t.c8(0,a)
t.c8(1,b)
t.c8(2,c)
t.c8(3,d)},
gH(a){return new A.J(this)},
T(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gu(b)===this.a){t=b.gE(b)
s=A.t(this,A.o(this).A("e.E"))
t=t===A.m(s)}return t},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.m(t)},
$iy:1,
gu(a){return this.a}}
A.cr.prototype={
O(){return new A.cr(new Uint32Array(A.w(this.a)))},
gG(){return B.H},
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
gM(){var t=this.a,s=t.length
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
gag(){return A.U(this)},
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
gH(a){return new A.J(this)},
T(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gu(b)===this.a.length){t=b.gE(b)
s=A.t(this,A.o(this).A("e.E"))
t=t===A.m(s)}return t},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.m(t)},
$iy:1}
A.cs.prototype={
O(){return new A.cs(this.a,new Uint8Array(A.w(this.b)))},
gG(){return B.y},
gR(){return null},
c0(a){var t,s
if(a<0||a>=this.a)t=0
else{t=this.b
s=t.length
if(a<2){if(0>=s)return A.a(t,0)
t=B.a.a_(t[0],4-(a<<2>>>0))&15}else{if(1>=s)return A.a(t,1)
t=B.a.a_(t[1],4-((a&1)<<2))&15}}return t},
cg(a,b){var t,s,r,q
if(a>=this.a)return
t=B.a.J(B.b.h(b),0,15)
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
n(a,b){return this.c0(b)},
i(a,b,c){return this.cg(b,c)},
gM(){return this.c0(0)},
gm(){return this.c0(0)},
gp(){return this.c0(1)},
gq(){return this.c0(2)},
gt(){return this.c0(3)},
gag(){return A.U(this)},
ac(a){this.a7(a.gm(),a.gp(),a.gq(),a.gt())},
a7(a,b,c,d){var t=this
t.cg(0,a)
t.cg(1,b)
t.cg(2,c)
t.cg(3,d)},
gH(a){return new A.J(this)},
T(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gu(b)===this.a){t=b.gE(b)
s=A.t(this,A.o(this).A("e.E"))
t=t===A.m(s)}return t},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.m(t)},
$iy:1,
gu(a){return this.a}}
A.bC.prototype={
fw(a,b,c,d){var t,s=this.a
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
O(){return new A.bC(new Uint8Array(A.w(this.a)))},
gG(){return B.f},
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
gM(){var t=this.a,s=t.length
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
gag(){return A.U(this)},
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
gH(a){return new A.J(this)},
T(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gu(b)===this.a.length){t=b.gE(b)
s=A.t(this,A.o(this).A("e.E"))
t=t===A.m(s)}return t},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.m(t)},
$iy:1}
A.eG.prototype={}
A.cn.prototype={}
A.ae.prototype={
ad(){return"Format."+this.b}}
A.eB.prototype={
ad(){return"BlendMode."+this.b}}
A.bE.prototype={
cA(a){var t=$.k1()
if(!t.aH(a))return"<unknown>"
return t.n(0,a).a},
C(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(t=f.a,s=new A.V(t,t.r,t.e,A.o(t).A("V<1>")),r=u.p,q=u.r,p=u.N,o=u.P,n="";s.F();){m=s.d
n+=m+"\n"
l=t.n(0,m)
for(m=l.a,m=new A.V(m,m.r,m.e,A.o(m).A("V<1>"));m.F();){k=m.d
j=l.n(0,k)
n=j==null?n+("\t"+f.cA(k)+"\n"):n+("\t"+f.cA(k)+": "+j.C(0)+"\n")}for(m=l.b.a,k=new A.V(m,m.r,m.e,A.o(m).A("V<1>"));k.F();){i=k.d
n+=i+"\n"
if(!m.aH(i))m.i(0,i,new A.aQ(A.Q(r,q),new A.b2(A.Q(p,o))))
h=m.n(0,i)
for(i=h.a,i=new A.V(i,i.r,i.e,A.o(i).A("V<1>"));i.F();){g=i.d
j=h.n(0,g)
n=j==null?n+("\t"+f.cA(g)+"\n"):n+("\t"+f.cA(g)+": "+j.C(0)+"\n")}}}return n.charCodeAt(0)==0?n:n},
bJ(c5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2=this,c3="Length must be a non-negative integer: ",c4=c5.e
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
if(typeof a9!=="number")return a9.jP()
if(!(a9>0))break
try{a9=t
b0=s
if(typeof a9!=="number")return a9.b3()
if(typeof b0!=="number")return A.h3(b0)
b0=a9+b0
c5.d=b0
if(a4-b0<2)break
q=new A.aQ(A.Q(a5,a6),new A.b2(A.Q(a7,a8)))
p=c5.l()
a9=p
if(typeof a9!=="number")return a9.dE()
if(a9*12>a4-c5.d)break
o=p
a9=o
if(a9<0)A.aw(A.bg(c3+A.z(a9)))
n=A.k(new Array(a9),a3)
m=0
for(;;){a9=m
b0=o
if(typeof a9!=="number")return a9.fk()
if(typeof b0!=="number")return A.h3(b0)
if(!(a9<b0))break
J.x(n,m,c2.eq(c5,t))
a9=m
if(typeof a9!=="number")return a9.b3()
m=a9+1}l=n
for(a9=l,b0=a9.length,b1=0;b1<a9.length;a9.length===b0||(0,A.aa)(a9),++b1){k=a9[b1]
if(k.b!=null){b2=k.a
b3=k.b
b3.toString
J.x(q,b2,b3)}}a2.i(0,"ifd"+A.z(r),q)
a9=r
if(typeof a9!=="number")return a9.b3()
r=a9+1
j=c5.k()
if(J.bB(j,s))break
else s=j}catch(b4){break}}for(a9=new A.bP(a2,a2.r,a2.e,A.o(a2).A("bP<2>"));a9.F();){i=a9.d
for(b0=B.bM.gjr(),b0=b0.gH(b0);b0.F();){h=b0.gP()
b2=A.v(h)
if(i.a.aH(b2))try{g=J.d(i,h).h(0)
b2=t
b3=g
if(typeof b2!=="number")return b2.b3()
if(typeof b3!=="number")return A.h3(b3)
c5.d=b2+b3
f=new A.aQ(A.Q(a5,a6),new A.b2(A.Q(a7,a8)))
e=c5.l()
d=e
b3=d
if(b3<0)A.aw(A.bg(c3+A.z(b3)))
c=A.k(new Array(b3),a3)
b=0
for(;;){b2=b
b3=d
if(typeof b2!=="number")return b2.fk()
if(typeof b3!=="number")return A.h3(b3)
if(!(b2<b3))break
J.x(c,b,c2.eq(c5,t))
b2=b
if(typeof b2!=="number")return b2.b3()
b=b2+1}a=c
for(b2=a,b3=b2.length,b1=0;b1<b2.length;b2.length===b3||(0,A.aa)(b2),++b1){a0=b2[b1]
if(a0.b!=null){b5=a0.a
b6=a0.b
b6.toString
J.x(f,b5,b6)}}b2=i.b
b3=B.bM.n(0,h)
b3.toString
b2.a.i(0,b3,a8.a(f))}catch(b4){continue}}}c2.b=null
b7=a2.n(0,"ifd1")
if(b7!=null){a2=b7.a
a2=a2.aH(513)&&a2.aH(514)}else a2=!1
if(a2){b8=b7.n(0,513).h(0)
b9=b7.n(0,514).h(0)
a2=t
if(typeof a2!=="number")return a2.b3()
c0=a2+b8
if(b9>0){a2=t
if(typeof a2!=="number")return A.h3(a2)
a2=c0>=a2&&c0+b9<=a4}else a2=!1
if(a2){c1=c5.d
c5.d=c0
c2.b=c5.aa(b9).a0()
c5.d=c1}}c5.e=c4
return!1},
eq(a,b){var t,s,r,q,p,o,n,m=a.l(),l=a.l(),k=a.k(),j=new A.fX(m,null)
if(l>=14)return j
t=B.bs[l]
s=k*B.a5[l]
r=a.d
if((s>4?a.d=a.k()+b:r)+s>a.c)return j
q=a.aa(s)
switch(t.a){case 0:break
case 6:j.b=new A.bl(new Int8Array(A.w(J.j3(B.e.gv(q.a0()),0,k))))
break
case 1:j.b=new A.b1(new Uint8Array(A.w(q.aa(k).a0())))
break
case 7:j.b=new A.cz(new Uint8Array(A.w(q.aa(k).a0())))
break
case 2:j.b=new A.bJ(k===0?"":q.af(k-1))
break
case 3:j.b=A.kr(q,k)
break
case 4:j.b=A.km(q,k)
break
case 5:j.b=A.kn(q,k)
break
case 10:j.b=A.kp(q,k)
break
case 8:j.b=A.kq(q,k)
break
case 9:j.b=A.ko(q,k)
break
case 11:j.b=A.ks(q,k)
break
case 12:j.b=A.kl(q,k)
break
case 13:if(k===1){p=new A.cx(0)
o=q.k()
n=$.I()
n.$flags&2&&A.c(n)
n[0]=o
o=$.Z()
if(0>=o.length)return A.a(o,0)
p.a=o[0]
j.b=p}break}a.d=r+4
return j}}
A.fX.prototype={}
A.eL.prototype={}
A.b2.prototype={
fE(a){a.a.bS(0,new A.hp(this))},
n(a,b){var t=this.a
if(!t.aH(b))t.i(0,b,new A.aQ(A.Q(u.p,u.r),new A.b2(A.Q(u.N,u.P))))
t=t.n(0,b)
t.toString
return t}}
A.hp.prototype={
$2(a,b){var t
A.be(a)
t=A.kk(u.P.a(b))
this.a.a.i(0,a,t)
return t},
$S:7}
A.aQ.prototype={
j5(a){a.a.bS(0,new A.hq(this))
a.b.a.bS(0,new A.hr(this))},
n(a,b){var t=this.a.n(0,b)
return t},
i(a,b,c){this.a.i(0,b,c)},
gbT(){var t=this.a.n(0,274)
return t==null?null:t.h(0)},
sbT(a){this.a.jE(0,274)}}
A.hq.prototype={
$2(a,b){var t
A.v(a)
t=u.r.a(b).O()
this.a.a.i(0,a,t)
return t},
$S:16}
A.hr.prototype={
$2(a,b){var t
A.be(a)
t=A.kk(u.P.a(b))
this.a.b.a.i(0,a,t)
return t},
$S:7}
A.a4.prototype={
ad(){return"IfdValueType."+this.b}}
A.X.prototype={
a4(a,b){A.v(b)
return 0},
h(a){return this.a4(0,0)},
bf(){return new Uint8Array(0)},
C(a){return""},
T(a,b){var t=this
if(b==null)return!1
return b instanceof A.X&&t.gaQ()===b.gaQ()&&t.gu(t)===b.gu(b)&&t.gE(t)===b.gE(b)},
gE(a){return 0}}
A.b1.prototype={
O(){return new A.b1(new Uint8Array(A.w(this.a)))},
gaQ(){return B.aY},
gu(a){return this.a.length},
T(a,b){var t,s
if(b==null)return!1
if(b instanceof A.b1){t=this.a
s=b.a
t=t.length===s.length&&A.m(t)===A.m(s)}else t=!1
return t},
gE(a){return A.m(this.a)},
a4(a,b){var t
A.v(b)
t=this.a
if(!(b>=0&&b<t.length))return A.a(t,b)
return t[b]},
h(a){return this.a4(0,0)},
bf(){return this.a},
C(a){var t=this.a,s=t.length
if(s===1){if(0>=s)return A.a(t,0)
t=""+t[0]}else t=A.z(t)
return t}}
A.bJ.prototype={
O(){return new A.bJ(this.a)},
gaQ(){return B.k},
gu(a){return this.a.length+1},
T(a,b){var t,s
if(b==null)return!1
if(b instanceof A.bJ){t=this.a
s=b.a
t=t.length+1===s.length+1&&B.B.gE(t)===B.B.gE(s)}else t=!1
return t},
gE(a){return B.B.gE(this.a)},
bf(){return new Uint8Array(A.w(new A.ao(this.a)))},
C(a){return this.a}}
A.bO.prototype={
fJ(a,b){var t,s,r,q
for(t=this.a,s=t.$flags|0,r=0;r<b;++r){q=a.l()
s&2&&A.c(t)
if(!(r<t.length))return A.a(t,r)
t[r]=q}},
O(){return new A.bO(new Uint16Array(A.w(this.a)))},
gaQ(){return B.i},
gu(a){return this.a.length},
T(a,b){var t,s
if(b==null)return!1
if(b instanceof A.bO){t=this.a
s=b.a
t=t.length===s.length&&A.m(t)===A.m(s)}else t=!1
return t},
gE(a){return A.m(this.a)},
a4(a,b){var t
A.v(b)
t=this.a
if(!(b>=0&&b<t.length))return A.a(t,b)
return t[b]},
h(a){return this.a4(0,0)},
bf(){return J.aN(B.u.gv(this.a))},
C(a){var t=this.a,s=t.length
if(s===1){if(0>=s)return A.a(t,0)
t=""+t[0]}else t=A.z(t)
return t}}
A.bk.prototype={
fG(a,b){var t,s,r,q
for(t=this.a,s=t.$flags|0,r=0;r<b;++r){q=a.k()
s&2&&A.c(t)
if(!(r<t.length))return A.a(t,r)
t[r]=q}},
O(){return new A.bk(new Uint32Array(A.w(this.a)))},
gaQ(){return B.o},
gu(a){return this.a.length},
T(a,b){var t,s
if(b==null)return!1
if(b instanceof A.bk){t=this.a
s=b.a
t=t.length===s.length&&A.m(t)===A.m(s)}else t=!1
return t},
gE(a){return A.m(this.a)},
a4(a,b){var t
A.v(b)
t=this.a
if(!(b>=0&&b<t.length))return A.a(t,b)
return t[b]},
h(a){return this.a4(0,0)},
bf(){return J.aN(B.n.gv(this.a))},
C(a){var t=this.a,s=t.length
if(s===1){if(0>=s)return A.a(t,0)
t=""+t[0]}else t=A.z(t)
return t}}
A.bK.prototype={
O(){return new A.bK(A.ji(this.a,!0,u.j))},
gaQ(){return B.q},
gu(a){return this.a.length},
a4(a,b){var t
A.v(b)
t=this.a
if(!(b>=0&&b<t.length))return A.a(t,b)
return t[b].h(0)},
h(a){return this.a4(0,0)},
T(a,b){var t,s,r
if(b==null)return!1
if(b instanceof A.bK){t=this.a
s=t.length
r=b.a
t=s===r.length&&A.m(t)===A.m(r)}else t=!1
return t},
gE(a){return A.m(this.a)},
C(a){var t=this.a,s=t.length
if(s===1){if(0>=s)return A.a(t,0)
t=t[0].C(0)}else t=A.z(t)
return t}}
A.bl.prototype={
O(){return new A.bl(new Int8Array(A.w(this.a)))},
gaQ(){return B.b2},
gu(a){return this.a.length},
T(a,b){var t,s
if(b==null)return!1
if(b instanceof A.bl){t=this.a
s=b.a
t=t.length===s.length&&A.m(t)===A.m(s)}else t=!1
return t},
gE(a){return A.m(this.a)},
a4(a,b){var t
A.v(b)
t=this.a
if(!(b>=0&&b<t.length))return A.a(t,b)
return t[b]},
h(a){return this.a4(0,0)},
bf(){return J.aN(B.aE.gv(this.a))},
C(a){var t=this.a,s=t.length
if(s===1){if(0>=s)return A.a(t,0)
t=""+t[0]}else t=A.z(t)
return t}}
A.bN.prototype={
fI(a,b){var t,s,r,q,p
for(t=this.a,s=t.$flags|0,r=0;r<b;++r){q=a.l()
p=$.ab()
p.$flags&2&&A.c(p)
p[0]=q
q=$.ai()
if(0>=q.length)return A.a(q,0)
q=q[0]
s&2&&A.c(t)
if(!(r<t.length))return A.a(t,r)
t[r]=q}},
O(){return new A.bN(new Int16Array(A.w(this.a)))},
gaQ(){return B.b3},
gu(a){return this.a.length},
T(a,b){var t,s
if(b==null)return!1
if(b instanceof A.bN){t=this.a
s=b.a
t=t.length===s.length&&A.m(t)===A.m(s)}else t=!1
return t},
gE(a){return A.m(this.a)},
a4(a,b){var t
A.v(b)
t=this.a
if(!(b>=0&&b<t.length))return A.a(t,b)
return t[b]},
h(a){return this.a4(0,0)},
bf(){return J.aN(B.aD.gv(this.a))},
C(a){var t=this.a,s=t.length
if(s===1){if(0>=s)return A.a(t,0)
t=""+t[0]}else t=A.z(t)
return t}}
A.bL.prototype={
fH(a,b){var t,s,r,q,p
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
O(){return new A.bL(new Int32Array(A.w(this.a)))},
gaQ(){return B.b4},
gu(a){return this.a.length},
T(a,b){var t,s
if(b==null)return!1
if(b instanceof A.bL){t=this.a
s=b.a
t=t.length===s.length&&A.m(t)===A.m(s)}else t=!1
return t},
gE(a){return A.m(this.a)},
a4(a,b){var t
A.v(b)
t=this.a
if(!(b>=0&&b<t.length))return A.a(t,b)
return t[b]},
h(a){return this.a4(0,0)},
bf(){return J.aN(B.R.gv(this.a))},
C(a){var t=this.a,s=t.length
if(s===1){if(0>=s)return A.a(t,0)
t=""+t[0]}else t=A.z(t)
return t}}
A.bM.prototype={
O(){return new A.bM(A.ji(this.a,!0,u.j))},
gaQ(){return B.aZ},
gu(a){return this.a.length},
T(a,b){var t,s,r
if(b==null)return!1
if(b instanceof A.bM){t=this.a
s=t.length
r=b.a
t=s===r.length&&A.m(t)===A.m(r)}else t=!1
return t},
gE(a){return A.m(this.a)},
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
A.cy.prototype={
fK(a,b){var t,s,r,q,p
for(t=this.a,s=t.$flags|0,r=0;r<b;++r){q=a.k()
p=$.I()
p.$flags&2&&A.c(p)
p[0]=q
q=$.bA()
if(0>=q.length)return A.a(q,0)
q=q[0]
s&2&&A.c(t)
if(!(r<t.length))return A.a(t,r)
t[r]=q}},
O(){return new A.cy(new Float32Array(A.w(this.a)))},
gaQ(){return B.b_},
gu(a){return this.a.length},
T(a,b){var t,s
if(b==null)return!1
if(b instanceof A.cy){t=this.a
s=b.a
t=t.length===s.length&&A.m(t)===A.m(s)}else t=!1
return t},
gE(a){return A.m(this.a)},
bf(){return J.aN(B.ai.gv(this.a))},
C(a){var t=this.a,s=t.length
if(s===1){if(0>=s)return A.a(t,0)
t=A.z(t[0])}else t=A.z(t)
return t}}
A.cw.prototype={
fF(a,b){var t,s
for(t=this.a,s=0;s<b;++s)B.aj.i(t,s,a.cZ())},
O(){return new A.cw(new Float64Array(A.w(this.a)))},
gaQ(){return B.b0},
gu(a){return this.a.length},
T(a,b){var t,s
if(b==null)return!1
if(b instanceof A.cw){t=this.a
s=b.a
t=t.length===s.length&&A.m(t)===A.m(s)}else t=!1
return t},
gE(a){return A.m(this.a)},
bf(){return J.aN(B.aj.gv(this.a))},
C(a){var t=this.a,s=t.length
if(s===1){if(0>=s)return A.a(t,0)
t=A.z(t[0])}else t=A.z(t)
return t}}
A.cz.prototype={
O(){return new A.cz(new Uint8Array(A.w(this.a)))},
gaQ(){return B.M},
gu(a){return this.a.length},
bf(){return this.a},
T(a,b){var t,s
if(b==null)return!1
if(b instanceof A.cz){t=this.a
s=b.a
t=t.length===s.length&&A.m(t)===A.m(s)}else t=!1
return t},
gE(a){return A.m(this.a)},
C(a){return"<data>"}}
A.cx.prototype={
O(){return A.mw(this.a)},
gaQ(){return B.b1},
gu(a){return 1},
T(a,b){var t
if(b==null)return!1
t=!1
if(b instanceof A.cx)t=this.a===b.a
return t},
gE(a){return this.a},
a4(a,b){var t=null
if(A.v(b)!==0)throw A.f(new A.cW(t,t,!1,t,t,"Ifd tags must have exactly one entry (the offset)"))
return this.a},
h(a){return this.a4(0,0)},
bf(){var t=this.a
return new Uint8Array(A.w(A.k([B.a.j(t,24),B.a.j(t,16),B.a.j(t,8),t],u.t)))},
C(a){return"Ifd@"+this.a}}
A.a3.prototype={
ad(){return"BmpCompression."+this.b}}
A.h8.prototype={}
A.b_.prototype={
dJ(a,b){var t,s,r,q,p,o,n,m=this,l=m.d,k=l<=40
if(k){t=m.r
t=t===B.ao||t===B.ap}else t=!0
if(t){t=m.as=a.k()
s=A.iI(t)
m.CW=s
r=B.a.a_(t,s)
t=r>0
m.cx=t?255/r:0
s=m.at=a.k()
q=A.iI(s)
m.cy=q
p=B.a.a_(s,q)
m.db=t?255/p:0
s=m.ax=a.k()
q=A.iI(s)
m.dx=q
o=B.a.a_(s,q)
m.dy=t?255/o:0
if(!k||m.r===B.ap){k=m.ay=a.k()
t=A.iI(k)
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
if(m.f<=8)m.jy(a)},
gcm(){var t=this.d
if(t!==40)if(t===124){t=this.ay
t===$&&A.b()
t=t===0}else t=!1
else t=!0
return t},
gI(){return Math.abs(this.c)},
gaJ(){return 1},
jy(a){var t,s,r,q,p,o=this,n=o.z
if(n===0)n=B.a.L(1,o.f)
o.ch=new A.ay(new Uint8Array(n*3),n,3)
for(t=0;t<n;++t){s=J.d(a.a,a.d++)
r=J.d(a.a,a.d++)
q=J.d(a.a,a.d++)
p=J.d(a.a,a.d++)
o.ch.cB(t,q,r,s,p)}},
jc(a,b){var t,s,r,q,p,o,n,m,l,k=this
u.dX.a(b)
if(k.ch!=null){t=k.f
if(t===1){s=a.D()
for(r=7;r>=0;--r)b.$4(B.a.b6(s,r)&1,0,0,0)
return}else if(t===2){s=a.D()
for(r=6;r>=0;r-=2)b.$4(B.a.b6(s,r)&2,0,0,0)}else if(t===4){s=a.D()
b.$4(B.a.j(s,4)&15,0,0,0)
b.$4(s&15,0,0,0)
return}else if(t===8){b.$4(a.D(),0,0,0)
return}}t=k.r
if(t===B.ao&&k.f===32){q=a.k()
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
if(p===32&&t===B.aO){m=a.D()
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
l=B.b.h(p*t)}return b.$4(o,n,m,l)}else throw A.f(A.l("Unsupported bitsPerPixel ("+p+") or compression ("+t.C(0)+")."))}},
$iF:1,
gK(){return this.b}}
A.eC.prototype={
bl(a){var t,s
if(!A.k6(A.p(a,!1,null,0))||a.length<18)return!1
t=A.p(a,!1,null,0)
t.d+=14
s=t.k()
return s>=12&&s<=124},
aM(a){var t
if(!this.bl(a))return null
t=A.p(a,!1,null,0)
this.a=t
return this.b=A.m7(t,null)},
aI(a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=c.b
if(a==null)return new A.b3(b,b,b,b,0,B.j,0,0)
t=c.a
t===$&&A.b()
s=a.a.b
s===$&&A.b()
t.d=s
r=a.f
s=a.b
q=B.a.X(s*r+31,32)*4
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
l=A.M(b,b,n,0,B.j,a.gI(),b,0,p,m,B.f,s,!1)
for(k=l.gI()-1,t=a.c,s=1/t<0,o=t<0,t=t===0;k>=0;--k){j={}
if(!(t?s:o))i=k
else{h=l.a
h=h==null?b:h.b
i=(h==null?0:h)-1-k}h=c.a
g=h.al(q)
h.d=h.d+(g.c-g.d)
h=l.a
f=h==null
e=f?b:h.a
if(e==null)e=0
j.a=0
d=f?b:h.S(0,i,b)
if(d==null)d=new A.C()
while(j.a<e)a.jc(g,new A.h7(j,c,e,a,d))}return l}}
A.h7.prototype={
$4(a,b,c,d){var t,s,r=this,q=r.a
if(q.a<r.c){t=r.b.c&&r.d.ch!=null
s=r.e
if(t){t=r.d
s.a7(t.ch.aV(a),t.ch.aU(a),t.ch.aT(a),t.ch.b4(a))}else s.a7(a,b,c,d)
s.F();++q.a}},
$S:17}
A.hd.prototype={}
A.F.prototype={}
A.hb.prototype={}
A.he.prototype={}
A.eM.prototype={}
A.du.prototype={
co(){return this.w},
bg(a,b,c,d,e){throw A.f(A.l("B44 compression not yet supported."))},
c5(a,b,c){return this.bg(a,b,c,null,null)},
C(a){return A.z(this.r)+" "+this.x}}
A.ct.prototype={
ad(){return"ExrChannelType."+this.b}}
A.bF.prototype={
ad(){return"ExrChannelName."+this.b}}
A.eN.prototype={
fz(a){var t=this,s=a.cq()
t.a=s
if(s.length===0)return
s=a.k()
if(!(s<3))return A.a(B.bj,s)
t.c=B.bj[s]
a.D()
a.d+=3
t.f=a.k()
t.r=a.k()
s=t.a
if(s==="R"){t.w=!0
t.b=B.cr}else if(s==="G"){t.w=!0
t.b=B.cs}else if(s==="B"){t.w=!0
t.b=B.ct}else if(s==="A"){t.w=!0
t.b=B.cu}else{t.w=!1
t.b=B.cv}switch(t.c.a){case 0:t.d=4
break
case 1:t.d=2
break
case 2:t.d=4
break}}}
A.aD.prototype={
ad(){return"ExrCompressorType."+this.b}}
A.b0.prototype={
bg(a,b,c,d,e){throw A.f(A.l("Unsupported compression type"))},
c5(a,b,c){return this.bg(a,b,c,null,null)}}
A.f1.prototype={}
A.eO.prototype={
sf5(a){this.c=u.T.a(a)}}
A.eP.prototype={
fA(a){var t,s,r,q,p=this,o=A.p(a,!1,null,0)
if(o.k()!==20000630)throw A.f(A.l("File is not an OpenEXR image file."))
t=p.d=o.D()
if(t!==2)throw A.f(A.l("Cannot read version "+t+" image files."))
t=p.e=o.be()
if((t&4294967289)>>>0!==0)throw A.f(A.l("The file format version number's flag field contains unrecognized flags."))
if((t&16)===0){s=p.c
r=A.ku(s.length,(t&2)!==0,o)
if(r.w>0)B.c.N(s,r)}else for(t=p.c;;){r=A.ku(t.length,(p.e&2)!==0,o)
if(r.w<=0)break
B.c.N(t,r)}t=p.c
s=t.length
if(s===0)throw A.f(A.l("Error reading image header"))
for(q=0;q<t.length;t.length===s||(0,A.aa)(t),++q)t[q].jx(o)
p.iF(o)},
gaJ(){return 1},
iF(a){var t,s,r,q,p=this
for(t=p.c,s=t.length,r=0;r<t.length;t.length===s||(0,A.aa)(t),++r){q=t[r]
p.a=Math.max(p.a,q.w)
p.b=Math.max(p.b,q.x)
if(q.db)p.iO(q,a)
else p.iN(q,a)}},
iO(b5,b6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4=this.e
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
if(t)if(q.k()!==o)throw A.f(A.l("Invalid Image Data"))
f=q.k()
e=q.k()
q.k()
q.k()
d=q.al(q.k())
q.d=q.d+(d.c-d.d)
h=b5.dy
h.toString
c=e*h
b=b5.dx
b.toString
h=s.bg(d,f*b,c,b,h)
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
a9=$.K
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
b1=h==null?b3:h.S(a7,c,b3)
if(b1==null)b1=new A.C()
h=a6.b
h===$&&A.b()
b1.i(0,h.a,b0)}else{h=a6.a
h===$&&A.b()
a9=b4.b
b2=a9!=null?a9.n(0,h):b3
if(b2!=null)b2.a3(a7,c,b0,0,0)}}}++a4;++c}++g;++i}++j}++k;++m}++n}},
iN(a7,a8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6=this.e
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
if(t)if(o.k()!==3.141592653589793)throw A.f(A.l("Invalid Image Data"))
j=o.k()
i=$.I()
i.$flags&2&&A.c(i)
i[0]=j
j=$.Z()
if(0>=j.length)return A.a(j,0)
i[0]=o.k()
h=o.al(j[0])
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
i=$.K
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
a3=j==null?a5:j.S(a1,l,a5)
if(a3==null)a3=new A.C()
j=a.b
j===$&&A.b()
a3.i(0,j.a,a2)}else{j=a.a
j===$&&A.b()
i=a6.b
a4=i!=null?i.n(0,j):a5
if(a4!=null)a4.a3(a1,l,a2,0,0)}}}++d;++l}}},
$iF:1,
gK(){return this.a},
gI(){return this.b}}
A.de.prototype={
fB(a5,a6,a7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=null,a4=A.Q(u.N,u.I)
for(t=a2.e,s=u.t,r=u.L,q=a2.c,p=B.A;;){o=a7.cq()
if(o.length===0)break
a7.cq()
n=a7.al(a7.k())
a7.d=a7.d+(n.c-n.d)
t.i(0,o,new A.eM())
switch(o){case"channels":for(;;){m=new A.eN()
m.fz(n)
l=m.a
l===$&&A.b()
if(l.length===0)break
k=m.w
k===$&&A.b()
if(k){++a2.d
l=m.c
l===$&&A.b()
if(l===B.aq)p=B.A
else p=l===B.ar?B.G:B.H}else{k=m.c
k===$&&A.b()
if(k===B.aq){k=a2.w
j=a2.x
a4.i(0,l,new A.cB(new Uint16Array(k*j),k,j,1))}else if(k===B.ar){k=a2.w
j=a2.x
a4.i(0,l,new A.cC(new Float32Array(k*j),k,j,1))}else if(k===B.aV){k=a2.w
j=a2.x
a4.i(0,l,new A.cG(new Uint32Array(k*j),k,j,1))}}B.c.N(q,m)}break
case"chromaticities":l=new Float32Array(8)
a2.at=l
k=n.k()
j=$.I()
j.$flags&2&&A.c(j)
j[0]=k
k=$.bA()
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
if(!(l>=0&&l<8))return A.a(B.bu,l)
a2.ax=B.bu[l]
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
l=$.bA()
if(0>=l.length)return A.a(l,0)
break
case"screenWindowCenter":l=n.k()
k=$.I()
k.$flags&2&&A.c(k)
k[0]=l
l=$.bA()
if(0>=l.length)return A.a(l,0)
k[0]=n.k()
break
case"screenWindowWidth":l=n.k()
k=$.I()
k.$flags&2&&A.c(k)
k[0]=l
l=$.bA()
if(0>=l.length)return A.a(l,0)
break
case"tiles":a2.dx=n.k()
a2.dy=n.k()
g=J.d(n.a,n.d++)
a2.fr=g&15
a2.fx=B.a.j(g,4)&15
break
case"type":f=n.cq()
if(f!=="deepscanline")if(f!=="deeptile")throw A.f(A.l("EXR Invalid type: "+f))
break
default:break}}t=a2.w
a2.b=A.M(a3,a3,p,0,B.j,a2.x,a3,0,a2.d,a3,B.f,t,!1)
for(t=new A.V(a4,a4.r,a4.e,a4.$ti.A("V<1>"));t.F();){s=t.d
r=a2.b
r.toString
l=a4.n(0,s)
l.toString
r.fn(s,l)}if(a2.db){t={}
s=a2.r
s===$&&A.b()
a2.id=a2.h2(s[0],s[2],s[1],s[3])
s=a2.r
a2.k1=a2.h3(s[0],s[2],s[1],s[3])
if(a2.fr!==2)a2.k1=1
s=a2.id
s.toString
r=a2.r
a2.fy=a2.dR(s,r[0],r[2],a2.dx,a2.fx)
r=a2.k1
r.toString
s=a2.r
a2.go=a2.dR(r,s[1],s[3],a2.dy,a2.fx)
s=a2.h1()
a2.k2=s
r=a2.dx
r.toString
r=s*r
a2.k3=r
a2.CW=A.kd(a2.ax,a2,r,a2.dy)
t.a=t.b=0
r=a2.id
r.toString
s=a2.k1
s.toString
a2.ay=A.kB(r*s,new A.hh(t,a2),u.bv)}else{t=a2.x
s=a2.ch=new Uint32Array(t+1)
for(r=q.length,l=a2.r,k=a2.w,e=0;e<r;++e){d=q[e]
j=d.d
j===$&&A.b()
i=d.f
i===$&&A.b()
c=B.a.ar(j*k,i)
for(j=d.r,b=0;b<t;++b){l===$&&A.b()
i=l[1]
j===$&&A.b()
if(B.a.a1(b+i,j)===0)s[b]=s[b]+c}}for(a=0,b=0;b<t;++b)a=Math.max(a,s[b])
t=A.kd(a2.ax,a2,a,a3)
a2.CW=t
t=a2.cx=t.co()
s=a2.ch
r=s.length
q=new Uint32Array(r)
a2.cy=q
for(--r,a0=0,a1=0;a1<=r;++a1){if(B.a.a1(a1,t)===0)a0=0
q[a1]=a0
a0+=s[a1]}t=B.a.ar(a2.x+t,t)
a2.ay=A.k([new Uint32Array(t-1)],u.hh)}},
h2(a,b,c,d){var t,s,r,q,p=this
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
default:throw A.f(A.l("Unknown LevelMode format."))}return t},
h3(a,b,c,d){var t,s,r,q,p=this
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
default:throw A.f(A.l("Unknown LevelMode format."))}return t},
cK(a){var t
for(t=0;a>1;){++t
a=B.a.j(a,1)}return t},
cF(a){var t,s
for(t=0,s=0;a>1;){if((a&1)!==0)s=1;++t
a=B.a.j(a,1)}return t+s},
h1(){var t,s,r,q,p
for(t=this.c,s=t.length,r=0,q=0;q<s;++q){p=t[q].d
p===$&&A.b()
r+=p}return r},
dR(a,b,c,d,e){var t,s,r,q,p,o,n=J.a9(a,u.p)
for(t=e===1,s=c-b+1,r=0;r<a;++r){q=B.a.L(1,r)
p=B.a.ar(s,q)
if(t&&p*q<s)++p
o=Math.max(p,1)
d.toString
n[r]=B.a.ar(o+d-1,d)}return n}}
A.hh.prototype={
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
A.f2.prototype={
jx(a){var t,s,r,q,p,o=this
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
A.f3.prototype={
fN(a,b,c){var t,s,r,q=this,p=a.c.length,o=J.a9(p,u.eO)
for(t=0;t<p;++t)o[t]=new A.ep()
q.y=u.gR.a(o)
s=q.w
s.toString
r=B.a.X(s*q.x,2)
q.z=new Uint16Array(r)},
co(){return this.x},
bg(a5,a6,a7,a8,a9){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this
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
j=B.a.ar(a6,r)
i=B.a.ar(t,r)
r=j*r<a6?0:1
r=i-j+r
k.c=r
q=l.r
q===$&&A.b()
j=B.a.ar(a7,q)
i=B.a.ar(s,q)
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
if(f>=8192)throw A.f(A.l("Error in header for PIZ-compressed data (invalid bitmap size)."))
e=new Uint8Array(8192)
if(g<=f){d=a5.aa(f-g+1)
c=d.c-d.d
for(b=g,m=0;m<c;++m,b=a){a=b+1
r=J.d(d.a,d.d+m)
if(!(b<8192))return A.a(e,b)
e[b]=r}}a0=new Uint16Array(65536)
a1=a4.iR(e,a0)
A.ml(a5,a5.k(),a4.z,n)
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
A.mo(q,h+b,a2,r,a3,a2*r,a1);++b}}r=a4.z
r.toString
a4.fV(a0,r,n)
r=a4.r
if(r==null){r=a4.w
r.toString
r=a4.r=A.aF(!1,r*a4.x+73728)}r.a=0
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
return J.L(B.e.gv(r.c),0,r.a)},
c5(a,b,c){return this.bg(a,b,c,null,null)},
fV(a,b,c){var t,s,r,q=u.L
q.a(a)
q.a(b)
for(q=b.length,t=b.$flags|0,s=0;s<c;++s){if(!(s<q))return A.a(b,s)
r=b[s]
if(!(r>=0&&r<65536))return A.a(a,r)
r=a[r]
t&2&&A.c(b)
b[s]=r}},
iR(a,b){var t,s,r,q,p,o
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
A.ep.prototype={}
A.f4.prototype={
co(){return this.x},
bg(a3,a4,a5,a6,a7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=B.F.bP(a3.a0()),a2=a0.y
if(a2==null){a2=a0.w
a2.toString
a2=a0.y=A.aF(!1,a0.x*a2)}a2.a=0
t=A.k([0,0,0,0],u.t)
s=new Uint32Array(1)
r=J.L(B.n.gv(s),0,null)
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
g=B.a.ar(a4,h)
f=B.a.ar(q,h)
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
h.W(r[a])}}break
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
h.W(r[a])}}break
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
h.W(r[a])}}break}}a2=a0.y
return J.L(B.e.gv(a2.c),0,a2.a)},
c5(a,b,c){return this.bg(a,b,c,null,null)}}
A.f5.prototype={
co(){return 1},
bg(a,a0,a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=a.c,b=A.aF(!1,(c-a.d)*2)
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
q=$.ac()
q.$flags&2&&A.c(q)
q[0]=r
r=$.aj()
if(0>=r.length)return A.a(r,0)
p=r[0]
if(p<0){o=-p
for(;n=o-1,o>0;o=n)b.W(J.d(a.a,a.d++))}else for(o=p;n=o-1,o>=0;o=n)b.W(J.d(a.a,a.d++))}m=J.L(B.e.gv(b.c),0,b.a)
l=m.length
for(c=m.$flags|0,k=1;k<l;++k){r=m[k-1]
q=m[k]
c&2&&A.c(m)
m[k]=r+q-128}c=d.r
if(c==null||c.length!==l)c=d.r=new Uint8Array(l)
r=B.a.X(l+1,2)
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
c5(a,b,c){return this.bg(a,b,c,null,null)},
C(a){return A.z(this.w)}}
A.dv.prototype={
co(){return this.x},
bg(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=B.F.bP(a.a0())
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
q=B.a.X(p+1,2)
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
c5(a,b,c){return this.bg(a,b,c,null,null)},
C(a){return A.z(this.w)}}
A.hg.prototype={
aM(a){var t=new A.eP(A.k([],u.dw))
t.fA(a)
return this.a=t},
aI(a){var t=this.a
if(t==null)return null
t=t.c
if(!(a<t.length))return A.a(t,a)
return t[a].b}}
A.dh.prototype={
fg(){var t,s,r,q,p,o,n,m=this
if(m.c==null)return m.d
t=m.d
s=t.a
r=new A.ay(new Uint8Array(s*4),s,4)
for(q=0;q<s;++q){p=t.aV(q)
o=t.aU(q)
n=t.aT(q)
r.cB(q,p,o,n,q===m.c?0:255)}return r}}
A.di.prototype={
fC(a){var t,s,r,q,p,o,n=this
n.a=a.l()
n.b=a.l()
n.c=a.l()
n.d=a.l()
t=a.D()
n.e=(t&64)!==0
if((t&128)!==0){n.f=A.kh(B.a.L(1,(t&7)+1))
for(s=0;r=n.f,s<r.b;++s){q=J.d(a.a,a.d++)
p=J.d(a.a,a.d++)
o=J.d(a.a,a.d++)
r.d.aW(s,q,p,o)}}n.y=a.d-a.b}}
A.f6.prototype={}
A.dj.prototype={
gaJ(){return this.r.length},
$iF:1,
gK(){return this.a},
gI(){return this.b}}
A.hm.prototype={
aM(a){var t,s,r,q,p,o,n,m,l,k,j=this
j.f=A.p(a,!1,null,0)
j.a=new A.dj(A.k([],u.b))
if(!j.e8())return null
try{while(q=j.f,p=q.d,p<q.c){o=q.a
q.d=p+1
t=J.d(o,p)
switch(t){case 44:s=j.eB()
if(s==null){q=j.a
return q}if(j.b!==0){if(s.f==null&&j.a.e!=null){q=j.a.e
p=q.a
o=q.b
n=q.c
q=q.d
s.f=new A.dh(p,o,n,new A.ay(new Uint8Array(A.w(q.c)),q.a,q.b))}if(s.f!=null)s.f.c=j.d}B.c.N(j.a.r,s)
break
case 33:q=j.f
r=J.d(q.a,q.d++)
if(J.bB(r,255)){q=j.f
if(q.af(J.d(q.a,q.d++))==="NETSCAPE2.0"){m=J.d(q.a,q.d++)
l=J.d(q.a,q.d++)
if(m===3&&l===1)q.l()}else j.cR()}else if(J.bB(r,249)){q=j.f
q.toString
j.iA(q)}else j.cR()
break
case 59:q=j.a
return q
default:break}}}catch(k){}return j.a},
iA(a){var t,s,r,q=this
a.D()
t=a.D()
q.e=a.l()
q.d=a.D()
a.D()
q.c=B.a.j(t,2)&7
q.b=t&1
s=a.cC(1,0)
if(J.d(s.a,s.d)===44){++a.d
r=q.eB()
if(r==null)return
if(q.b!==0){s=r.f
if(s==null&&q.a.e!=null){s=q.a.e
s.toString
s=r.f=A.mt(s)}if(s!=null)s.c=q.d}B.c.N(q.a.r,r)}},
aI(a){var t,s,r,q=this,p=q.f
if(p==null||q.a==null)return null
t=q.a.r
s=t.length
if(a>=s)return null
r=t[a]
t=r.y
t===$&&A.b()
p.d=t
return q.hm(r)},
eB(){var t,s=this.f
if(s.d>=s.c)return null
t=new A.f6()
t.fC(s);++this.f.d
this.cR()
return t},
hm(a){var t,s,r,q,p,o,n,m,l,k,j=this,i=null
if(j.w==null){j.w=new Uint8Array(256)
j.x=new Uint8Array(4095)
j.y=new Uint8Array(4096)
j.z=new Uint32Array(4096)}t=j.Q=j.f.D()
s=B.a.V(1,t)
j.dy=s;++s
j.dx=s
j.db=s+1;++t
j.cy=t
j.cx=B.a.V(1,t)
j.ay=0
j.CW=4098
j.at=j.ax=0
t=j.w
t.toString
t.$flags&2&&A.c(t)
t[0]=0
t=j.z
t.toString
B.n.aw(t,0,4096,4098)
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
o=A.M(i,i,B.f,0,B.j,s,i,0,1,p.fg(),B.f,t,!1)
n=new Uint8Array(t)
t=a.e
t===$&&A.b()
if(t){t=a.b
t===$&&A.b()
for(s=t+s,m=0,l=0;m<4;++m)for(k=t+B.cR[m];k<s;k+=B.e8[m],++l){if(!j.e9(n))return o
j.eH(o,k,p,n)}}else for(k=0;k<s;++k){if(!j.e9(n))return o
j.eH(o,k,p,n)}return o},
eH(a,b,c,d){var t,s,r,q=d.length
for(t=0;t<q;++t){s=d[t]
r=a.a
if(r!=null)r.a3(t,b,s,0,0)}},
e8(){var t,s,r,q,p,o=this,n=o.f.af(6)
if(n!=="GIF87a"&&n!=="GIF89a")return!1
t=o.a
t.toString
t.a=o.f.l()
t=o.a
t.toString
t.b=o.f.l()
s=o.f.D()
o.a.toString
new Uint8Array(A.w(A.k([o.f.D()],u.t)));++o.f.d
if((s&128)!==0){t=o.a
t.toString
t.e=A.kh(B.a.L(1,(s&7)+1))
for(r=0;r<o.a.e.b;++r){t=o.f
q=J.d(t.a,t.d++)
t=o.f
p=J.d(t.a,t.d++)
t=o.f
s=J.d(t.a,t.d++)
o.a.e.d.aW(r,q,p,s)}}o.a.toString
return!0},
e9(a){var t=this,s=t.as
s.toString
t.as=s-a.length
if(!t.hx(a))return!1
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
hx(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.ay
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
s=q}}for(g=a.$flags|0;s<t;){o=h.ch=h.hw()
if(o==null)return!1
r=h.dx
if(o===r)return!1
p=h.dy
if(o===p){for(p=h.z,n=0;n<=4095;++n){p.toString
p.$flags&2&&A.c(p)
p[n]=4098}h.db=r+1
r=h.Q+1
h.cy=r
h.cx=B.a.V(1,r)
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
hw(){var t,s,r,q,p=this
if(p.cy>12)return null
while(t=p.ax,s=p.cy,t<s){t=p.fX()
t.toString
s=p.at
r=p.ax
p.at=(s|B.a.V(t,r))>>>0
p.ax=r+8}r=p.at
if(!(s>=0&&s<13))return A.a(B.be,s)
q=B.be[s]
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
fX(){var t,s,r=this,q=r.w,p=q[0],o=q.$flags|0
if(p===0){p=r.f.D()
o&2&&A.c(q)
q[0]=p
q=r.w
p=q[0]
if(p===0)return null
B.e.bq(q,1,1+p,r.f.aa(p).a0())
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
A.cv.prototype={
ad(){return"IcoType."+this.b}}
A.eW.prototype={$iF:1,
gK(){return 0},
gI(){return 0},
gaJ(){return this.d}}
A.eX.prototype={}
A.eV.prototype={
gI(){return B.a.X(A.b_.prototype.gI.call(this),2)},
gcm(){return!(this.d===40&&this.f===32)&&A.b_.prototype.gcm.call(this)}}
A.ho.prototype={
aM(a){var t=A.p(a,!1,null,0)
this.a=t
return this.b=A.kj(t)},
aI(a9){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=this.a
if(a8!=null){t=this.b
t=t==null||a9>=t.d}else t=!0
if(t)return a7
t=this.b.e
if(!(a9<t.length))return A.a(t,a9)
s=t[a9]
t=a8.a
a8=a8.b+s.e
r=s.d
q=J.j6(t,a8,a8+r)
p=new A.cP(A.hz())
u.D.a(q)
if(p.bl(q))return p.c4(q)
o=A.aF(!1,14)
o.d0(19778)
o.aF(r)
o.aF(0)
o.aF(0)
a8=A.p(q,!1,a7,0)
t=A.k5(A.p(J.L(B.e.gv(o.c),0,o.a),!1,a7,0))
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
if(h>=14)A.aw(A.l("Unsupported BMP compression type: "+h))
if(!(h<14))return A.a(B.ag,h)
h=B.ag[h]
a8.k()
l[0]=a8.k()
l[0]=a8.k()
l=a8.k()
a8.k()
g=new A.eV(t,k,m,n,j,i,h,l,r)
g.dJ(a8,t)
if(n!==40&&j!==1)return a7
f=l===0&&i<=8?40+4*B.a.L(1,i):40+4*l
t.b=f
o.a-=4
o.aF(f)
e=A.p(q,!1,a7,0)
d=new A.hd(!0)
d.a=e
d.b=g
c=d.aI(0)
if(i>=32)return c
b=32-B.a.a1(k,32)
a=B.a.X(b===32?k:k+b,8)
for(a8=m<0,t=m===0,m=1/m<0,a0=0;a0<B.a.X(A.b_.prototype.gI.call(g),2);++a0){if(!(t?m:a8))a1=a0
else{r=c.a
r=r==null?a7:r.b
a1=(r==null?0:r)-1-a0}a2=e.al(a)
e.d=e.d+(a2.c-a2.d)
r=c.a
a3=r==null?a7:r.S(0,a1,a7)
if(a3==null)a3=new A.C()
for(a4=0;a4<k;){a5=J.d(a2.a,a2.d++)
a6=7
for(;;){if(!(a6>-1&&a4<k))break
if((a5&B.a.V(1,a6))>>>0!==0)a3.st(0)
a3.F();++a4;--a6}}}return c}}
A.eH.prototype={}
A.bj.prototype={}
A.bI.prototype={}
A.dn.prototype={}
A.iL.prototype={
$5(a,b,c,d,e){return this.a.a3(this.b-a,b,c,d,e)},
$S:3}
A.iM.prototype={
$5(a,b,c,d,e){return this.a.a3(this.b-a,this.c-b,c,d,e)},
$S:3}
A.iN.prototype={
$5(a,b,c,d,e){return this.a.a3(a,this.b-b,c,d,e)},
$S:3}
A.iO.prototype={
$5(a,b,c,d,e){return this.a.a3(b,a,c,d,e)},
$S:3}
A.iP.prototype={
$5(a,b,c,d,e){return this.a.a3(this.b-b,a,c,d,e)},
$S:3}
A.iQ.prototype={
$5(a,b,c,d,e){return this.a.a3(this.b-b,this.c-a,c,d,e)},
$S:3}
A.iR.prototype={
$5(a,b,c,d,e){return this.a.a3(b,this.b-a,c,d,e)},
$S:3}
A.hB.prototype={}
A.bm.prototype={}
A.hC.prototype={
jL(a){var t,s,r,q,p,o=this,n=A.p(u.L.a(a),!0,null,0)
o.a=n
t=n.cC(2,0)
if(J.d(t.a,t.d)!==255||J.d(t.a,t.d+1)!==216)return!1
if(o.bA()!==216)return!1
s=o.bA()
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
break}s=o.bA()}return r&&q},
jw(a){var t,s,r,q,p,o,n=this
n.a=A.p(u.L.a(a),!0,null,0)
if(n.bA()!==216)return null
t=new A.fh()
s=n.bA()
r=!1
q=!1
for(;;){if(s!==217){p=n.a
p=p.d<p.c}else p=!1
if(!p)break
switch(s){case 192:case 193:case 194:n.er(s,n.eo())
r=!0
break
case 218:n.eA()
q=!0
break
default:n.eA()
break}s=n.bA()}p=n.d
if(p!=null){o=p.e
o.toString
t.a=o
p=p.d
p.toString
t.b=p}p=n.d=null
B.c.cW(n.y)
return r&&q?t:p},
bJ(a){var t,s,r,q,p,o,n,m,l,k,j,i=this
i.a=A.p(u.L.a(a),!0,null,0)
i.iu()
if(i.y.length!==1)throw A.f(A.l("Only single frame JPEGs supported"))
t=i.d
for(s=t.z,r=t.y,q=i.as,p=0;p<s.length;++p){o=r.n(0,s[p])
n=o.a
m=t.f
l=o.b
k=t.r
j=i.fZ(t,o)
if(n===m)n=0
else n=n===1&&m===4?2:1
if(l===k)m=0
else m=l===1&&k===4?2:1
B.c.N(q,new A.eH(j,n,m))}},
iu(){var t,s,r,q,p=this
if(p.bA()!==216)throw A.f(A.l("Start Of Image marker not found."))
t=p.bA()
for(;;){if(t!==217){s=p.a
s===$&&A.b()
s=s.d<s.c}else s=!1
if(!s)break
r=p.eo()
switch(t){case 224:case 225:case 226:case 227:case 228:case 229:case 230:case 231:case 232:case 233:case 234:case 235:case 236:case 237:case 238:case 239:case 254:p.iv(t,r)
break
case 219:p.iy(r)
break
case 192:case 193:case 194:p.er(t,r)
break
case 195:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 205:case 206:case 207:throw A.f(A.l("Unhandled frame type "+B.a.d_(t,16)))
case 196:p.ix(r)
break
case 221:p.e=r.l()
break
case 218:p.iM(r)
break
case 255:s=p.a
s===$&&A.b()
if(J.d(s.a,s.d)!==255)--p.a.d
break
default:s=p.a
s===$&&A.b()
q=!1
if(J.d(s.a,s.d+-3)===255){s=p.a
if(J.d(s.a,s.d+-2)>=192){s=p.a
s=J.d(s.a,s.d+-2)<=254}else s=q}else s=q
if(s){p.a.d-=3
break}if(t!==0)throw A.f(A.l("Unknown JPEG marker "+B.a.d_(t,16)))
break}t=p.bA()}},
eA(){var t,s=this.a
s===$&&A.b()
t=s.l()
if(t<2)throw A.f(A.l("Invalid Block"))
s=this.a
s.d=s.d+(t-2)},
eo(){var t,s=this.a
s===$&&A.b()
t=s.l()
if(t<2)throw A.f(A.l("Invalid Block"))
return this.a.aa(t-2)},
bA(){var t,s=this,r=s.a
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
iE(a){var t
for(t=0;t<12;++t)if(J.d(a.a,a.d++)!==B.iT[t])return
this.r=new A.cu("ICC_PROFILE",B.cJ,a.a0())},
iz(a){if(a.k()!==1165519206)return
if(a.l()!==0)return
this.w.bJ(a)},
iv(a,b){var t,s,r,q,p,o=this,n=b
if(a===224){t=n
s=!1
if(J.d(t.a,t.d)===74){t=n
if(J.d(t.a,t.d+1)===70){t=n
if(J.d(t.a,t.d+2)===73){t=n
if(J.d(t.a,t.d+3)===70){t=n
t=J.d(t.a,t.d+4)===0}else t=s}else t=s}else t=s}else t=s
if(t){t=new A.hF()
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
n.cC(14+3*s*r,14)}}else if(a===225)o.iz(n)
else if(a===226)o.iE(n)
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
o.c=q}}else if(a===254)try{n.jB()}catch(p){}},
iy(a){var t,s,r,q,p,o,n,m,l
for(t=a.c,s=this.x;r=a.d,q=r<t,q;){q=a.a
a.d=r+1
p=J.d(q,r)
o=B.a.j(p,4)
p&=15
if(p>=4)throw A.f(A.l("Invalid number of quantization tables"))
if(s[p]==null)B.c.i(s,p,new Int16Array(64))
n=s[p]
for(r=o!==0,m=0;m<64;++m){l=r?a.l():J.d(a.a,a.d++)
n.toString
q=$.h4()
if(!(m<q.length))return A.a(q,m)
q=q[m]
n.$flags&2&&A.c(n)
if(!(q<64))return A.a(n,q)
n[q]=l}}if(q)throw A.f(A.l("Bad length for DQT block"))},
er(a,b){var t,s,r,q,p,o,n,m,l,k,j=this
if(j.d!=null)throw A.f(A.l("Duplicate JPG frame data found."))
t=A.Q(u.p,u.c)
s=A.k([],u.t)
r=new A.fg(t,s)
r.b=a===194
r.c=b.D()
r.d=b.l()
r.e=b.l()
q=b.D()
for(p=j.x,o=0;o<q;++o){n=J.d(b.a,b.d++)
m=J.d(b.a,b.d++)
l=B.a.j(m,4)
k=J.d(b.a,b.d++)
B.c.N(s,n)
t.i(0,n,new A.bm(l&15,m&15,p,k))}r.ju()
j.d=r
B.c.N(j.y,r)},
ix(a){var t,s,r,q,p,o,n,m,l,k,j,i
for(t=a.c,s=this.Q,r=this.z;q=a.d,q<t;){p=a.a
a.d=q+1
o=J.d(p,q)
n=new Uint8Array(16)
for(m=0,l=0;l<16;++l){q=J.d(a.a,a.d++)
if(!(l<16))return A.a(n,l)
n[l]=q
m+=n[l]}k=a.al(m)
a.d=a.d+(k.c-k.d)
j=k.a0()
if((o&16)!==0){o-=16
i=r}else i=s
if(i.length<=o)B.c.su(i,o+1)
B.c.i(i,o,this.h_(n,j))}},
iM(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=a.D()
if(c<1||c>4)throw A.f(A.l("Invalid SOS block"))
t=d.d
t.toString
s=A.k([],u.b7)
for(r=d.z,q=d.Q,p=t.y,o=u.C,n=0;n<c;++n){m=J.d(a.a,a.d++)
l=J.d(a.a,a.d++)
if(!p.aH(m))throw A.f(A.l("Invalid Component in SOS block"))
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
k.x=o.a(h)}B.c.N(s,k)}g=a.D()
f=a.D()
e=a.D()
r=B.a.j(e,4)
q=d.a
q===$&&A.b()
r=new A.fi(q,t,s,d.e,g,f,r&15,e&15)
q=t.w
q===$&&A.b()
r.f=q
r.r=t.b
r.bC()},
h_(a,b){var t,s,r,q,p,o,n,m,l=A.k([],u.e8),k=16
for(;;){if(!(k>0&&a[k-1]===0))break;--k}t=u.fe
B.c.N(l,new A.d4(A.Y(2,null,!1,t)))
if(0>=l.length)return A.a(l,0)
s=l[0]
for(r=b.length,q=0,p=0;p<k;){for(o=0;o<a[p];++o){if(0>=l.length)return A.a(l,-1)
s=l.pop()
n=s.b
if(!(q>=0&&q<r))return A.a(b,q)
B.c.i(s.a,n,new A.dn(b[q]))
while(n=s.b,n>0){if(0>=l.length)return A.a(l,-1)
s=l.pop()}s.b=n+1
B.c.N(l,s)
for(;l.length<=p;s=m){n=A.Y(2,null,!1,t)
m=new A.d4(n)
B.c.N(l,m)
B.c.i(s.a,s.b,new A.bI(n))}++q}++p
if(p<k){n=A.Y(2,null,!1,t)
m=new A.d4(n)
B.c.N(l,m)
B.c.i(s.a,s.b,new A.bI(n))
s=m}}if(0>=l.length)return A.a(l,0)
return l[0].a},
fZ(a,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a0.e
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
A.pa(f,e[g],q,r)
d=g<<3>>>0
for(f=d+8,c=0;c<8;++c){e=j+c
if(!(e<p))return A.a(o,e)
e=o[e]
if(e!=null)B.e.ah(e,d,f,q,c<<3>>>0)}}}return o}}
A.d4.prototype={}
A.fg.prototype={
ju(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
for(t=b.y,s=A.o(t).A("V<1>"),r=new A.V(t,t.r,t.e,s);r.F();){q=t.n(0,r.d)
b.f=Math.max(b.f,q.a)
b.r=Math.max(b.r,q.b)}r=b.e
r.toString
b.w=B.b.aO(r/8/b.f)
r=b.d
r.toString
b.x=B.b.aO(r/8/b.r)
for(s=new A.V(t,t.r,t.e,s),r=u.fv,p=u.k,o=u.f0;s.F();){n=t.n(0,s.d)
n.toString
m=b.e
m.toString
l=n.a
k=B.b.aO(B.b.aO(m/8)*l/b.f)
m=b.d
m.toString
j=n.b
i=B.b.aO(B.b.aO(m/8)*j/b.r)
h=b.w*l
g=b.x*j
f=J.a9(g,o)
for(e=0;e<g;++e){d=J.a9(h,p)
for(c=0;c<h;++c)d[c]=new Int32Array(64)
f[e]=d}n.e=k
n.f=i
n.r=r.a(f)}}}
A.fh.prototype={
gaJ(){return 1},
$iF:1,
gK(){return this.a},
gI(){return this.b}}
A.hF.prototype={}
A.fi.prototype={
bC(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.y,a=b.length,a0=c.r
a0.toString
if(a0)if(c.Q===0)t=c.at===0?c.ghi():c.ghk()
else t=c.at===0?c.gh9():c.ghb()
else t=c.ghf()
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
k=B.a.ar(p,l)
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
for(g=0;g<h;++g)for(f=0;f<i;++f)c.hn(n,t,p,g,f)}++p;++m}}c.ch=0
if(p>=q)break
e=J.d(s.a,s.d)
d=J.d(s.a,s.d+1)
if(e===255)if(d>=208&&d<=215)s.d+=2
else break}},
bM(){var t,s=this,r=s.ch
if(r>0){--r
s.ch=r
return B.a.b6(s.ay,r)&1}r=s.a
if(r.d>=r.c)return null
t=r.D()
s.ay=t
if(t===255)if(r.D()!==0)return null
s.ch=7
return B.a.j(s.ay,7)&1},
cc(a){var t,s,r=new A.bI(u.C.a(a))
while(t=this.bM(),t!=null){if(r instanceof A.bI){s=r.a
if(t>>>0!==t||t>=2)return A.a(s,t)
r=s[t]}if(r instanceof A.dn)return r.a}return null},
dr(a){var t,s
for(t=0;a>0;){s=this.bM()
if(s==null)return null
t=(t<<1|s)>>>0;--a}return t},
cf(a){var t
if(a==null)return 0
if(a===1)return this.bM()===1?1:-1
t=this.dr(a)
if(t==null)return 0
if(t>=B.a.V(1,a-1))return t
return t+B.a.L(-1,a)+1},
hg(a,b){var t,s,r,q,p,o,n,m,l=this
u.L.a(b)
t=a.w
t===$&&A.b()
s=l.cc(t)
r=s===0?0:l.cf(s)
t=a.y
t===$&&A.b()
t+=r
a.y=t
b.$flags&2&&A.c(b)
b[0]=t
for(q=1;q<64;){t=a.x
t===$&&A.b()
p=l.cc(t)
if(p==null)break
o=p&15
n=p>>>4
if(o===0){if(n<15)break
q+=16
continue}q+=n
o=l.cf(o)
t=$.h4()
if(!(q>=0&&q<t.length))return A.a(t,q)
m=t[q]
b.$flags&2&&A.c(b)
if(!(m<64))return A.a(b,m)
b[m]=o;++q}},
hj(a,b){var t,s,r
u.L.a(b)
t=a.w
t===$&&A.b()
s=this.cc(t)
r=s===0?0:B.a.L(this.cf(s),this.ax)
t=a.y
t===$&&A.b()
t+=r
a.y=t
b.$flags&2&&A.c(b)
b[0]=t},
hl(a,b){var t,s
u.L.a(b)
t=b[0]
s=this.bM()
s.toString
s=B.a.L(s,this.ax)
b.$flags&2&&A.c(b)
b[0]=(t|s)>>>0},
ha(a,b){var t,s,r,q,p,o,n,m,l=this
u.L.a(b)
t=l.CW
if(t>0){l.CW=t-1
return}s=l.Q
r=l.as
for(t=l.ax;s<=r;){q=a.x
q===$&&A.b()
q=l.cc(q)
q.toString
p=q&15
o=q>>>4
if(p===0){if(o<15){t=l.dr(o)
t.toString
l.CW=t+B.a.L(1,o)-1
break}s+=16
continue}s+=o
q=$.h4()
if(!(s>=0&&s<q.length))return A.a(q,s)
n=q[s]
q=l.cf(p)
m=B.a.L(1,t)
b.$flags&2&&A.c(b)
if(!(n<64))return A.a(b,n)
b[n]=q*m;++s}},
hc(a,b){var t,s,r,q,p,o,n,m,l,k=this
u.L.a(b)
t=k.Q
s=k.as
A:for(r=k.ax,q=0;t<=s;){p=$.h4()
if(!(t>=0&&t<p.length))return A.a(p,t)
o=p[t]
p=k.cx
switch(p){case 0:p=a.x
p===$&&A.b()
n=k.cc(p)
if(n==null)throw A.f(A.l("Invalid progressive encoding"))
m=n&15
q=n>>>4
if(m===0)if(q<15){p=k.dr(q)
p.toString
k.CW=p+B.a.L(1,q)
k.cx=4}else{k.cx=1
q=16}else{if(m!==1)throw A.f(A.l("invalid ACn encoding"))
k.cy=k.cf(m)
k.cx=q!==0?2:3}continue A
case 1:case 2:if(!(o<64))return A.a(b,o)
l=b[o]
if(l!==0){p=k.bM()
p.toString
p=B.a.L(p,r)
b.$flags&2&&A.c(b)
if(!(o<64))return A.a(b,o)
b[o]=l+p}else{--q
if(q===0)k.cx=p===2?3:0}break
case 3:if(!(o<64))return A.a(b,o)
p=b[o]
if(p!==0){l=k.bM()
l.toString
l=B.a.L(l,r)
b.$flags&2&&A.c(b)
if(!(o<64))return A.a(b,o)
b[o]=p+l}else{p=k.cy
p===$&&A.b()
p=B.a.L(p,r)
b.$flags&2&&A.c(b)
if(!(o<64))return A.a(b,o)
b[o]=p
k.cx=0}break
case 4:if(!(o<64))return A.a(b,o)
p=b[o]
if(p!==0){l=k.bM()
l.toString
l=B.a.L(l,r)
b.$flags&2&&A.c(b)
if(!(o<64))return A.a(b,o)
b[o]=p+l}break}++t}if(k.cx===4)if(--k.CW===0)k.cx=0},
hn(a,b,c,d,e){var t,s,r,q,p
u.q.a(b)
t=this.f
t===$&&A.b()
s=B.a.ar(c,t)*a.b+d
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
A.hE.prototype={
bl(a){var t=a.length,s=!0
if(t>=2){if(0>=t)return A.a(a,0)
if(a[0]===255){if(1>=t)return A.a(a,1)
t=a[1]!==216}else t=s}else t=s
if(t)return!1
return A.hD().jL(a)},
aM(a){this.b=A.p(a,!0,null,0)
return A.hD().jw(a)},
aI(a){var t,s=this.b
if(s==null)return null
t=A.hD()
t.bJ(s.a)
if(t.y.length!==1)throw A.f(A.l("only single frame JPEGs supported"))
return A.lv(t)}}
A.cQ.prototype={
ad(){return"PngDisposeMode."+this.b}}
A.dY.prototype={
ad(){return"PngBlendMode."+this.b}}
A.dZ.prototype={}
A.f7.prototype={}
A.br.prototype={
ad(){return"PngFilterType."+this.b}}
A.fv.prototype={
sR(a){this.w=u.di.a(a)},
sjI(a){this.x=u.T.a(a)},
$iF:1,
gK(){return this.a},
gI(){return this.b},
gaJ(){return this.CW}}
A.f8.prototype={}
A.cP.prototype={
bl(a){var t,s=A.p(a,!0,null,0).aa(8)
for(t=0;t<8;++t)if(J.d(s.a,s.d+t)!==B.bB[t])return!1
return!0},
aM(b6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=A.p(b6,!0,b4,0)
b3.d=b5
t=b5.aa(8)
for(s=0;s<8;++s)if(J.d(t.a,t.d+s)!==B.bB[s])return b4
for(b5=b3.a,r=b5.cy,q=u.t,p=b5.db,o=u.L,n=b5.ax;;){m=b3.d
l=m.d-m.b
k=m.k()
j=b3.d.af(4)
switch(j){case"tEXt":m=b3.d
i=m.al(k)
m.d=m.d+(i.c-i.d)
h=i.a0()
g=h.length
for(s=0;s<g;++s)if(h[s]===0){m=s+1
n.i(0,B.aR.c4(new Uint8Array(h.subarray(0,A.aJ(0,s,g)))),B.aR.c4(new Uint8Array(h.subarray(m,A.aJ(m,b4,g)))))
break}b3.d.d+=4
break
case"pHYs":m=b3.d
i=m.al(k)
m.d=m.d+(i.c-i.d)
f=A.n(i,b4,0)
f.k()
f.k()
J.d(f.a,f.d++)
b3.d.d+=4
break
case"IHDR":m=b3.d
i=m.al(k)
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
break}if(b3.d.k()!==A.aV(o.a(d),A.aV(new A.ao(j),0)))throw A.f(A.l("Invalid "+j+" checksum"))
break
case"PLTE":m=b3.d
i=m.al(k)
m.d=m.d+(i.c-i.d)
b5.sR(i.a0())
if(b3.d.k()!==A.aV(o.a(o.a(b5.w)),A.aV(new A.ao(j),0)))throw A.f(A.l("Invalid "+j+" checksum"))
break
case"tRNS":m=b3.d
i=m.al(k)
m.d=m.d+(i.c-i.d)
b5.sjI(i.a0())
c=b3.d.k()
m=b5.x
m.toString
if(c!==A.aV(o.a(m),A.aV(new A.ao(j),0)))throw A.f(A.l("Invalid "+j+" checksum"))
break
case"IEND":b3.d.d+=4
break
case"gAMA":if(k!==4)throw A.f(A.l("Invalid gAMA chunk"))
b3.d.k()
b3.d.d+=4
break
case"IDAT":B.c.N(p,l)
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
if(!(a4>=0&&a4<3))return A.a(B.b7,a4)
m=B.b7[a4]
if(!(a5>=0&&a5<2))return A.a(B.bp,a5)
a6=B.bp[a5]
B.c.N(r,new A.f7(A.k([],q),b,a,a0,a1,a2,a3,m,a6))
b3.d.d+=4
break
case"fdAT":b3.d.k()
B.c.N(B.c.gf4(r).y,l)
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
b5.z=new A.cn(a6)}else{m=new Uint8Array(3)
m[0]=a9
m[1]=b1
m[2]=b2
b5.z=new A.eG(m)}}else if(m===0||m===4){b3.d.l()
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
i=a6.al(k-(m.length+2))
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
aI(c2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=null,b7=b4.a,b8=b7.a,b9=b7.b,c0=b7.cy,c1=c0.length
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
l=o.al(n)
o.d=o.d+(l.c-l.d)
k=l.a0()
q+=k.length
B.c.N(s,k)
if(b4.d.k()!==A.aV(c1.a(k),A.aV(new A.ao(m),0)))throw A.f(A.l("Invalid "+m+" checksum"))}b6=new Uint8Array(q)
for(c0=s.length,j=0,i=0;i<s.length;s.length===c0||(0,A.aa)(s),++i){k=s[i]
J.k4(b6,j,k)
j+=k.length}}else{if(c2>=c1)throw A.f(A.l("Invalid Frame Number: "+c2))
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
l=c1.al(n-4)
c1.d=c1.d+(l.c-l.d)
k=l.a0()
q+=k.length
B.c.N(s,k)}b6=new Uint8Array(q)
for(c0=s.length,j=0,i=0;i<s.length;s.length===c0||(0,A.aa)(s),++i){k=s[i]
J.k4(b6,j,k)
j+=k.length}}c0=b7.d
g=1
if(!(c0===3))if(!(c0===0)){if(c0===4)c0=2
else c0=c0===6?4:3
g=c0}t=null
try{t=B.F.bP(b6)}catch(f){return b5}e=A.p(t,!0,b5,0)
b4.c=b4.b=0
d=b5
if(b7.d===3){c0=b7.w
if(c0!=null){c1=c0.length
c=c1/3|0
b=b7.x
o=b!=null
a=o?b.length:0
a0=o?4:3
d=new A.ay(new Uint8Array(c*a0),c,a0)
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
c=B.a.V(1,c0)
c1=c*4
o=new Uint8Array(c1)
d=new A.ay(o,c,4)
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
b1=A.M(b5,b5,b0,0,B.j,b9,b5,0,c1===2&&b7.x!=null?4:g,d,B.f,b8,!1)
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
b4.bL(e,b1,0,1,1,2,b8,b9>>>1)}else b4.io(e,b1)
b7.a=b2
b7.b=b3
c0=b7.at
if(c0!=null)b1.c=new A.cu(b7.Q,B.at,c0)
b7=b7.ax
if(b7.a!==0)b1.j_(b7)
return b1},
dw(a,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null
if(c.aM(u.D.a(a))==null)return b
t=c.a
s=t.cy
r=s.length
if(r===0){t=c.aI(0)
t.toString
return t}for(r=u.g,q=b,p=q,o=0;o<t.CW;++o){if(!(o<s.length))return A.a(s,o)
a0=s[o]
n=c.aI(o)
if(n==null)continue
if(p==null||q==null){p=n.eY(n.gb2())
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
k=k===(j==null?0:j)&&a0.d===0&&a0.e===0&&a0.x===B.bP}else k=!1
if(k){m=a0.f
n.y=B.b.h((m===0||a0.r===0?0:m/a0.r)*1000)
p.bu(n)
q=n
continue}e=p.x
if(e===$)e=p.x=A.k([],r)
if(!(m<e.length))return A.a(e,m)
q=A.cA(e[m],!1,!1)
d=l.w
if(d===B.bR){m=l.d
k=l.e
j=t.z
if(j==null){j=new Uint8Array(4)
i=new A.cn(j)
j[0]=0
j[1]=0
j[2]=0
j[3]=0
j=i}A.oQ(q,!1,j,m,m+l.b-1,k,k+l.c-1)}else if(d===B.bS&&o>1){m=o-2
e=p.x
if(e===$)e=p.x=A.k([],r)
if(!(m>=0&&m<e.length))return A.a(e,m)
k=l.d
j=l.e
i=l.b
h=l.c
q=A.lq(q,e[m],B.aN,h,i,k,j,h,i,k,j)}m=a0.f
q.y=B.b.h((m===0||a0.r===0?0:m/a0.r)*1000)
m=a0.x===B.bQ?B.aN:B.an
q=A.lq(q,n,m,b,b,a0.d,a0.e,b,b,b,b)
p.bu(q)}return p},
c4(a){return this.dw(a,null)},
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
i=a3.al(q)
a3.d=a3.d+(i.c-i.d)
B.c.i(p,k,i.a0())
if(!(k>=0&&k<2))return A.a(p,k)
h=p[k]
k=1-k
g=p[k]
h.toString
a0.eF(j,r,h,g)
a0.c=a0.b=0
a2=h.length
f=new A.a6(h,0,Math.min(a2,a2),0,!0)
for(a2=n<=1,e=a5,d=0;d<a9;++d,e+=a7){a0.ev(f,o)
c=a4.a
c=c==null?null:c.S(e,m,null)
a0.dt(c==null?new A.C():c,o)
if(!a2||a1)for(b=0;b<a7;++b)for(c=m+b,a=0;a<n;++a)a0.dt(a4.ai(e+a,c),o)}}},
io(a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.a,a=b.d
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
k=b.gH(b)
k.F()
for(j=0,i=0;j<q;++j,i=f){b=J.d(a0.a,a0.d++)
if(!(b>=0&&b<5))return A.a(B.ae,b)
h=B.ae[b]
g=a0.al(p)
a0.d=a0.d+(g.c-g.d)
B.c.i(m,i,g.a0())
if(!(i>=0&&i<2))return A.a(m,i)
f=1-i
c.eF(h,o,m[i],m[f])
c.c=c.b=0
b=m[i]
a=b.length
e=new A.a6(b,0,Math.min(a,a),0,!0)
for(d=0;d<r;++d){c.ev(e,l)
c.dt(k.gP(),l)
k.F()}}},
eF(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u.L.a(c)
u.T.a(d)
t=c.length
switch(a.a){case 0:break
case 1:for(s=J.av(c),r=b;r<t;++r){q=c.length
if(!(r<q))return A.a(c,r)
p=c[r]
o=r-b
if(!(o>=0&&o<q))return A.a(c,o)
s.i(c,r,p+c[o]&255)}break
case 2:for(s=J.av(c),q=d!=null,r=0;r<t;++r){if(q){if(!(r<d.length))return A.a(d,r)
n=d[r]}else n=0
if(!(r<c.length))return A.a(c,r)
s.i(c,r,c[r]+n&255)}break
case 3:for(s=J.av(c),q=d!=null,r=0;r<t;++r){if(r<b)m=0
else{p=r-b
if(!(p>=0&&p<c.length))return A.a(c,p)
m=c[p]}if(q){if(!(r<d.length))return A.a(d,r)
n=d[r]}else n=0
if(!(r<c.length))return A.a(c,r)
s.i(c,r,c[r]+B.a.j(m+n,1)&255)}break
case 4:for(s=J.av(c),q=d==null,p=!q,r=0;r<t;++r){o=r<b
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
bi(a,b){var t,s,r,q,p,o=this
if(b===0)return 0
if(b===8)return a.D()
if(b===16)return a.l()
for(t=a.c;s=o.c,s<b;){s=a.d
if(s>=t)throw A.f(A.l("Invalid PNG data."))
r=a.a
a.d=s+1
q=J.d(r,s)
s=o.c
o.b=B.a.V(q,s)
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
switch(s){case 0:B.c.i(b,0,r.bi(a,t.c))
return
case 2:B.c.i(b,0,r.bi(a,t.c))
B.c.i(b,1,r.bi(a,t.c))
B.c.i(b,2,r.bi(a,t.c))
return
case 3:B.c.i(b,0,r.bi(a,t.c))
return
case 4:B.c.i(b,0,r.bi(a,t.c))
B.c.i(b,1,r.bi(a,t.c))
return
case 6:B.c.i(b,0,r.bi(a,t.c))
B.c.i(b,1,r.bi(a,t.c))
B.c.i(b,2,r.bi(a,t.c))
B.c.i(b,3,r.bi(a,t.c))
return}throw A.f(A.l("Invalid color type: "+s+"."))},
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
return}a.ak(b[0],0,0)
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
return}}a.ak(p,q,o)
return
case 3:a.sM(b[0])
return
case 4:a.ak(b[0],b[1],0)
return
case 6:a.a7(b[0],b[1],b[2],b[3])
return}throw A.f(A.l("Invalid color type: "+s+"."))}}
A.fu.prototype={
ad(){return"PngFilter."+this.b}}
A.hS.prototype={
bu(a){var t,s,r,q,p,o,n,m,l=this,k=8192,j=a.a
j=j==null?null:j.gbb()
if(!(j===!0&&a.gG()!==B.l))j=a.gaB()<8&&!a.gbk()&&a.gb2()>1
else j=!0
if(j)a=a.j4(B.f)
if(l.w==null){j=A.aF(!0,k)
l.w=j
j.bm(A.k([137,80,78,71,13,10,26,10],u.t))
t=A.aF(!0,k)
t.aF(a.gK())
t.aF(a.gI())
t.W(a.gaB())
if(a.gbk())j=3
else if(a.gb2()===1)j=0
else if(a.gb2()===2)j=4
else j=a.gb2()===3?2:6
t.W(j)
t.W(0)
t.W(0)
t.W(0)
j=l.w
j.toString
l.bj(j,"IHDR",J.L(B.e.gv(t.c),0,t.a))
j=a.c
if(j!=null){t=A.aF(!0,k)
t.bm(new A.ao(j.a))
t.W(0)
t.W(0)
t.bm(j.j3())
j=l.w
j.toString
l.bj(j,"iCCP",J.L(B.e.gv(t.c),0,t.a))}if(a.gbk()){j=l.a
if(j!=null){j=j.a
j===$&&A.b()
l.eN(j)}else{j=a.a
j=j==null?null:j.gR()
j.toString
l.eN(j)}}if(l.r){t=A.aF(!0,k)
j=l.e
j===$&&A.b()
t.aF(j)
t.aF(l.c)
j=l.w
j.toString
l.bj(j,"acTL",J.L(B.e.gv(t.c),0,t.a))}}s=a.gbk()?1:a.gb2()
r=a.gG()===B.l?2:1
j=a.gK()
q=a.gI()
p=a.gI()
o=new Uint8Array(j*q*s*r+p)
l.hL(0,a,o)
n=B.aT.f_(u.L.a(o),l.d)
j=a.d
if(j!=null)for(j=new A.V(j,j.r,j.e,A.o(j).A("V<1>"));j.F();){q=j.d
p=a.d.n(0,q)
p.toString
t=new A.fq(!0,new Uint8Array(8192))
t.bm(B.aS.c3(q))
t.W(0)
t.bm(B.aS.c3(p))
q=l.w
q.toString
l.bj(q,"tEXt",J.L(B.e.gv(t.c),0,t.a))}if(l.r){t=A.aF(!0,k)
t.aF(l.f)
t.aF(a.gK())
t.aF(a.gI())
t.aF(0)
t.aF(0)
t.d0(a.y)
t.d0(1000)
t.W(1)
t.W(0)
j=l.w
j.toString
l.bj(j,"fcTL",J.L(B.e.gv(t.c),0,t.a));++l.f}if(l.f<=1){j=l.w
j.toString
l.bj(j,"IDAT",n)}else{m=A.aF(!0,k)
m.aF(l.f)
m.bm(n)
j=l.w
j.toString
l.bj(j,"fdAT",J.L(B.e.gv(m.c),0,m.a));++l.f}},
jj(){var t,s=this,r=s.w
if(r==null)return null
s.bj(r,"IEND",A.k([],u.t))
s.f=0
r=s.w
t=J.L(B.e.gv(r.c),0,r.a)
s.w=null
return t},
jf(a,b){var t,s,r,q,p,o=this,n=a.gap().length
if(n<=1){o.e=1
o.r=!1
o.bu(a)}else{n=a.gap().length
o.e=n
o.r=n>1
o.c=a.r
if(a.gbk()){t=new A.fo(new Int32Array(256))
t.i1(256)
t.iZ(a)
o.a=t
for(n=a.gap(),s=n.length,r=0;r<n.length;n.length===s||(0,A.aa)(n),++r){q=n[r]
if(q!==a){t.eh(q)
t.e3()
t.eg()
t.dV()}}}for(n=a.gap(),s=n.length,r=0;r<n.length;n.length===s||(0,A.aa)(n),++r){q=n[r]
p=o.a
if(p!=null)o.bu(p.ff(q))
else o.bu(q)}}n=o.jj()
n.toString
return n},
eN(a){var t,s,r,q=this
if(a.gG()===B.f&&a.b===3&&a.a===256){t=q.w
t.toString
q.bj(t,"PLTE",J.L(a.gv(a),0,null))}else{t=a.a
s=A.aF(!0,t*3)
for(r=0;r<t;++r){s.W(B.b.h(a.aV(r)))
s.W(B.b.h(a.aU(r)))
s.W(B.b.h(a.aT(r)))}t=q.w
t.toString
q.bj(t,"PLTE",J.L(B.e.gv(s.c),0,s.a))}if(a.b===4){t=a.a
s=A.aF(!0,t)
for(r=0;r<t;++r)s.W(B.b.h(a.b4(r)))
t=q.w
t.toString
q.bj(t,"tRNS",J.L(B.e.gv(s.c),0,s.a))}},
bj(a,b,c){u.L.a(c)
a.aF(c.length)
a.bm(new A.ao(b))
a.bm(c)
a.aF(A.aV(c,A.aV(new A.ao(b),0)))},
hL(a,b,c){var t,s,r=this,q=b.gbk()?B.jp:r.b,p=b.gv(0),o=b.a.gaE(),n=b.gbk()?1:b.gb2(),m=B.a.j(n*b.gaB()+7,3),l=b.gaB()+7>>>3,k=q.a,j=J.aW(p),i=0,h=0,g=null,f=0
for(;;){t=b.a
t=t==null?null:t.b
if(!(f<(t==null?0:t)))break
s=j.cj(p,h,o)
h+=o
switch(k){case 1:i=r.hQ(s,l,m,c,i)
break
case 2:i=r.hR(s,g,l,c,i)
break
case 3:i=r.hM(s,g,l,m,c,i)
break
case 4:i=r.hO(s,g,l,m,c,i)
break
default:i=r.hN(s,l,c,i)
break}++f
g=s}},
eM(a,b,c,d,e){var t,s,r,q;--a
for(t=b.length,s=d.$flags|0;a>=0;e=r){r=e+1
q=c+a
if(!(q<t))return A.a(b,q)
q=b[q]
s&2&&A.c(d)
if(!(e<d.length))return A.a(d,e)
d[e]=q;--a}return e},
hN(a,b,c,d){var t,s,r,q,p=d+1
c.$flags&2&&A.c(c)
t=c.length
if(!(d<t))return A.a(c,d)
c[d]=0
s=a.length
if(b===1)for(d=p,r=0;r<s;++r,d=p){p=d+1
q=a[r]
if(!(d<t))return A.a(c,d)
c[d]=q}else for(d=p,r=0;r<s;r+=b)d=this.eM(b,a,r,c,d)
return d},
hQ(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k=e+1
d.$flags&2&&A.c(d)
t=d.length
if(!(e<t))return A.a(d,e)
d[e]=1
for(e=k,s=0;s<c;s+=b)e=this.eM(b,a,s,d,e)
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
hR(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j=e+1
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
hM(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=f+1
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
i8(a,b,c){var t=a+b-c,s=t>a?t-a:a-t,r=t>b?t-b:b-t,q=t>c?t-c:c-t
if(s<=r&&s<=q)return a
else if(r<=q)return b
return c},
hO(a,b,c,a0,a1,a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2+1
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
e=this.i8(j,h,g)
d=a2+1
q&2&&A.c(a1)
if(!(a2>=0&&a2<t))return A.a(a1,a2)
a1[a2]=f-e&255}return a2}}
A.bs.prototype={
ad(){return"PnmFormat."+this.b}}
A.bt.prototype={
gK(){return this.a},
gI(){return this.b},
gaJ(){return 1}}
A.hT.prototype={
bl(a){var t
this.b=A.p(a,!1,null,0)
t=this.cN()
if(t==="P1"||t==="P2"||t==="P5"||t==="P3"||t==="P6")return!0
return!1},
aM(a){var t,s,r=this
r.b=A.p(a,!1,null,0)
t=r.cN()
if(t==="P1"){s=r.a=new A.bt(B.W)
s.e=B.bT}else if(t==="P2"){s=r.a=new A.bt(B.W)
s.e=B.bU}else if(t==="P5"){s=r.a=new A.bt(B.W)
s.e=B.aF}else if(t==="P3"){s=r.a=new A.bt(B.W)
s.e=B.bV}else if(t==="P6"){s=r.a=new A.bt(B.W)
s.e=B.aG}else return r.b=null
s.a=r.cd()
s=r.a
s.toString
s.b=r.cd()
s=r.a
if(s.a===0||s.b===0)return r.a=r.b=null
return s},
aI(a){var t,s,r,q,p,o=this,n=null,m=o.a
if(m==null)return n
t=m.e
if(t===B.bT){t=m.a
s=A.M(n,n,B.v,0,B.j,m.b,n,0,1,n,B.f,t,!1)
for(m=s.a,m=m.gH(m);m.F();){r=m.gP()
if(o.cN()==="1")r.ak(1,1,1)
else r.ak(0,0,0)}return s}else if(t===B.bU||t===B.aF){q=o.cd()
if(q===0)return n
m=o.a
t=m.a
m=m.b
s=A.M(n,n,o.f0(q),0,B.j,m,n,0,1,n,B.f,t,!1)
for(m=s.a,m=m.gH(m);m.F();){r=m.gP()
p=o.cQ(o.a.e,q)
r.ak(p,p,p)}return s}else if(t===B.bV||t===B.aG){q=o.cd()
if(q===0)return n
m=o.a
t=m.a
m=m.b
s=A.M(n,n,o.f0(q),0,B.j,m,n,0,3,n,B.f,t,!1)
for(m=s.a,m=m.gH(m);m.F();)m.gP().ak(o.cQ(o.a.e,q),o.cQ(o.a.e,q),o.cQ(o.a.e,q))
return s}return n},
f0(a){if(a>255)return B.l
if(a>15)return B.f
if(a>3)return B.y
if(a>1)return B.x
return B.v},
cQ(a,b){if(a===B.aF||a===B.aG)return this.b.D()
return this.cd()},
cd(){var t,s,r=this.cN()
if(J.aZ(r)===0)return 0
try{t=A.p1(r)
return t}catch(s){return 0}},
cN(){var t,s,r,q,p=this.b
if(p==null)return""
t=this.c
if(t.length!==0)return B.c.f8(t,0)
s=B.B.fd(p.jA())
if(s.length===0)return""
while(B.B.dH(s,"#"))s=B.B.fd(this.b.f7(70))
p=u.cc
r=A.t(new A.ej(A.k(s.split(" "),u.s),u.bB.a(new A.hU()),p),p.A("e.E"))
for(p=r.length,q=0;q<p;++q)if(B.B.dH(r[q],"#")){B.c.su(r,q)
break}B.c.iX(t,r)
if(t.length===0)return""
return B.c.f8(t,0)}}
A.hU.prototype={
$1(a){return A.be(a)!==""},
$S:19}
A.fx.prototype={
sjl(a){u.T.a(a)},
sfp(a){u.T.a(a)},
sjC(a){u.T.a(a)},
sjD(a){u.T.a(a)}}
A.fy.prototype={
sbB(a){u.T.a(a)},
sbE(a){u.T.a(a)}}
A.aS.prototype={}
A.fB.prototype={
sbB(a){u.T.a(a)},
sbE(a){u.T.a(a)}}
A.fC.prototype={
sbB(a){u.T.a(a)},
sbE(a){u.T.a(a)}}
A.fF.prototype={
sbB(a){u.T.a(a)},
sbE(a){u.T.a(a)}}
A.fG.prototype={
sbB(a){u.T.a(a)},
sbE(a){u.T.a(a)}}
A.e0.prototype={}
A.fE.prototype={}
A.hV.prototype={
fO(a){var t,s,r,q,p=this
a.l()
a.l()
a.l()
a.l()
t=B.a.X(a.c-a.d,8)
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
A.c5.prototype={
f6(a,b,c,d,e,f,g){if(a.c-a.d<2)return
if(e==null)e=a.l()
switch(e){case 0:d.toString
this.iL(a,b,c,d)
break
case 1:if(f==null)f=this.iI(a,c)
d.toString
this.iK(a,b,c,d,f,g)
break
default:throw A.f(A.l("Unsupported compression: "+e))}},
jz(a,b,c,d){return this.f6(a,b,c,d,null,null,0)},
iI(a,b){var t,s,r=new Uint16Array(b)
for(t=0;t<b;++t){s=a.l()
if(!(t<b))return A.a(r,t)
r[t]=s}return r},
iL(a,b,c,d){var t,s=b*c
if(d===16)s*=2
if(s>a.c-a.d){t=new Uint8Array(s)
this.c=t
B.e.aw(t,0,s,255)
return}this.c=a.aa(s).a0()},
iK(a,b,c,d,e,f){var t,s,r,q,p,o,n,m=b*c
if(d===16)m*=2
t=new Uint8Array(m)
this.c=t
s=f*c
r=e.length
if(s>=r){B.e.aw(t,0,m,255)
return}for(q=0,p=0;p<c;++p,s=o){o=s+1
if(!(s>=0&&s<r))return A.a(e,s)
n=a.al(e[s])
a.d=a.d+(n.c-n.d)
t=this.c
t.toString
this.hs(n,t,q)
q+=b}},
hs(a,b,c){var t,s,r,q,p,o,n,m
for(t=a.c,s=b.length;r=a.d,r<t;){q=a.a
a.d=r+1
r=J.d(q,r)
q=$.ac()
q.$flags&2&&A.c(q)
q[0]=r
r=$.aj()
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
A.aH.prototype={
ad(){return"PsdColorMode."+this.b}}
A.fz.prototype={
fP(a){var t,s,r=this
r.as=A.p(a,!0,null,0)
r.ir()
if(r.c!==943870035)return
t=r.as.k()
r.as.aa(t)
t=r.as.k()
r.at=r.as.aa(t)
t=r.as.k()
r.ax=r.as.aa(t)
s=r.as
r.ay=s.aa(s.c-s.d)},
gaJ(){return 1},
bC(){var t,s=this
if(s.c===943870035){t=s.as
t===$&&A.b()
t=t==null}else t=!0
if(t)return!1
s.iG()
s.iH()
s.iJ()
s.ay=s.ax=s.at=s.as=null
return!0},
jb(){if(!this.bC())return null
return this.jF()},
jF(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.y
if(a1!=null)return a1
a1=a.a
a1=A.M(a0,a0,B.f,0,B.j,a.b,a0,0,4,a0,B.f,a1,!1)
a.y=a1
a1.cW(0)
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
h=i==null?a0:i.S(j,m,a0)
if(h==null)h=new A.C()
g=B.b.h(h.gm())
f=B.b.h(h.gp())
e=B.b.h(h.gq())
d=B.b.h(h.gt())
k.toString
if(k>=0&&k<a.a&&r&&n<a.b){i=s.b
i.toString
c=a.y.a
b=c==null?a0:c.S(i+j,l,a0)
if(b==null)b=new A.C()
a.fW(B.b.h(b.gm()),B.b.h(b.gp()),B.b.h(b.gq()),B.b.h(b.gt()),g,f,e,d,p,q,b)}++j;++k}++m;++n}}a1=a.y
a1.toString
return a1},
fW(a,b,c,d,e,f,g,h,i,j,k){var t,s,r,q,p,o=h/255*j
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
case 1768188278:q=A.hX(a,e)
r=A.hX(b,f)
s=A.hX(c,g)
t=h
break
case 1818391150:q=A.hZ(a,e)
r=A.hZ(b,f)
s=A.hZ(c,g)
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
case 1935897198:q=A.jx(a,e)
r=A.jx(b,f)
s=A.jx(c,g)
t=h
break
case 1684633120:q=A.hY(a,e)
r=A.hY(b,f)
s=A.hY(c,g)
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
case 1870030194:q=A.jv(a,e,d,h)
r=A.jv(b,f,d,h)
s=A.jv(c,g,d,h)
t=h
break
case 1934387572:q=A.jy(a,e)
r=A.jy(b,f)
s=A.jy(c,g)
t=h
break
case 1749838196:q=A.jt(a,e)
r=A.jt(b,f)
s=A.jt(c,g)
t=h
break
case 1984719220:q=A.jz(a,e)
r=A.jz(b,f)
s=A.jz(c,g)
t=h
break
case 1816947060:q=A.ju(a,e)
r=A.ju(b,f)
s=A.ju(c,g)
t=h
break
case 1884055924:q=A.jw(a,e)
r=A.jw(b,f)
s=A.jw(c,g)
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
case 1936553316:q=A.js(a,e)
r=A.js(b,f)
s=A.js(c,g)
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
ir(){var t,s,r=this,q=r.as
q===$&&A.b()
r.c=q.k()
q=r.as.l()
r.d=q
if(q!==1){r.c=0
return}t=r.as.aa(6)
for(s=0;s<6;++s)if(J.d(t.a,t.d+s)!==0){r.c=0
return}r.e=r.as.l()
r.b=r.as.k()
r.a=r.as.k()
r.f=r.as.l()
q=r.as.l()
if(!(q<8))return A.a(B.bL,q)
r.r=B.bL[q]},
iG(){var t,s,r,q,p,o,n=this,m=n.at
m.d=m.b
for(m=n.z;t=n.at,t.d<t.c;){s=t.k()
r=n.at.l()
t=n.at
q=J.d(t.a,t.d++)
n.at.af(q)
if((q&1)===0)++n.at.d
q=n.at.k()
t=n.at
p=t.al(q)
o=t.d+(p.c-p.d)
t.d=o
if((q&1)===1)t.d=o+1
if(s===943868237)m.i(0,r,new A.fA())}},
iH(){var t,s,r,q,p,o,n,m,l,k,j=this,i=j.ax
i.d=i.b
t=i.k()
if((t&1)!==0)++t
s=j.ax.aa(t)
i=j.w
B.c.cW(i)
if(t>0){r=s.l()
q=$.ab()
q.$flags&2&&A.c(q)
q[0]=r
r=$.ai()
if(0>=r.length)return A.a(r,0)
p=r[0]
if(p<0)p=-p
for(r=u.N,q=u.ha,o=u.l,n=u.af,m=0;m<p;++m){l=new A.fD(A.Q(r,q),A.k([],o),A.k([],n))
l.fQ(s)
B.c.N(i,l)}}for(m=0;m<i.length;++m)i[m].jv(s,j)
t=j.ax.k()
k=j.ax.aa(t)
if(t>0){k.l()
k.l()
k.l()
k.l()
k.l()
k.l()
k.D()}},
iJ(){var t,s,r,q,p,o,n=this,m=n.ay
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
o=new A.c5(o)
o.f6(s,n.a,n.b,n.f,t,q,p)
B.c.N(m,o);++p}n.y=A.kN(n.r,n.f,n.a,n.b,n.x)},
$iF:1,
gK(){return this.a},
gI(){return this.b}}
A.fA.prototype={}
A.fD.prototype={
fQ(a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a3.k(),a2=$.I()
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
a2=$.ab()
a2.$flags&2&&A.c(a2)
a2[0]=a1
a1=$.ai()
if(0>=a1.length)return A.a(a1,0)
r=a1[0]
a3.k()
B.c.N(a0.as,new A.c5(r))}q=a3.k()
if(q!==943868237)throw A.f(A.l("Invalid PSD layer signature: "+B.a.d_(q,16)))
a0.r=a3.k()
a0.w=a3.D()
a3.D()
a0.y=a3.D()
if(a3.D()!==0)throw A.f(A.l("Invalid PSD layer data"))
p=a3.k()
o=a3.aa(p)
if(p>0){p=o.k()
if(p>0){n=o.aa(p)
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
if(p>0)new A.hV().fO(o.aa(p))
p=o.D()
o.af(p)
m=4-B.a.a1(p,4)-1
if(m>0)o.d+=m
for(a1=o.c,a2=a0.ay,l=a0.cy,k=u.t,j=u.cE;o.d<a1;){q=o.k()
if(q!==943868237)throw A.f(A.l("PSD invalid signature for layer additional data: "+B.a.d_(q,16)))
i=o.af(4)
p=o.k()
h=o.al(p)
g=o.d+(h.c-h.d)
o.d=g
if((p&1)===1)o.d=g+1
a2.i(0,i,A.mW(i,h))
if(i==="lrFX"){f=A.n(j.a(a2.n(0,"lrFX")).b,null,0)
f.l()
e=f.l()
for(d=0;d<e;++d){f.af(4)
c=f.af(4)
b=f.k()
if(c==="dsdw"){a=new A.fy()
B.c.N(l,a)
a.a=f.k()
f.k()
f.k()
f.k()
f.k()
a.sbB(A.k([f.l(),f.l(),f.l(),f.l(),f.l()],k))
f.af(8)
J.d(f.a,f.d++)
J.d(f.a,f.d++)
J.d(f.a,f.d++)
a.sbE(A.k([f.l(),f.l(),f.l(),f.l(),f.l()],k))}else if(c==="isdw"){a=new A.fC()
B.c.N(l,a)
a.a=f.k()
f.k()
f.k()
f.k()
f.k()
a.sbB(A.k([f.l(),f.l(),f.l(),f.l(),f.l()],k))
f.af(8)
J.d(f.a,f.d++)
J.d(f.a,f.d++)
J.d(f.a,f.d++)
a.sbE(A.k([f.l(),f.l(),f.l(),f.l(),f.l()],k))}else if(c==="oglw"){a=new A.fF()
B.c.N(l,a)
a.a=f.k()
f.k()
f.k()
a.sbB(A.k([f.l(),f.l(),f.l(),f.l(),f.l()],k))
f.af(8)
J.d(f.a,f.d++)
J.d(f.a,f.d++)
if(a.a===2)a.sbE(A.k([f.l(),f.l(),f.l(),f.l(),f.l()],k))}else if(c==="iglw"){a=new A.fB()
B.c.N(l,a)
a.a=f.k()
f.k()
f.k()
a.sbB(A.k([f.l(),f.l(),f.l(),f.l(),f.l()],k))
f.af(8)
J.d(f.a,f.d++)
J.d(f.a,f.d++)
if(a.a===2){J.d(f.a,f.d++)
a.sbE(A.k([f.l(),f.l(),f.l(),f.l(),f.l()],k))}}else if(c==="bevl"){a=new A.fx()
B.c.N(l,a)
a.a=f.k()
f.k()
f.k()
f.k()
f.af(8)
f.af(8)
a.sjl(A.k([f.l(),f.l(),f.l(),f.l(),f.l()],k))
a.sfp(A.k([f.l(),f.l(),f.l(),f.l(),f.l()],k))
J.d(f.a,f.d++)
J.d(f.a,f.d++)
J.d(f.a,f.d++)
J.d(f.a,f.d++)
J.d(f.a,f.d++)
J.d(f.a,f.d++)
if(a.a===2){a.sjC(A.k([f.l(),f.l(),f.l(),f.l(),f.l()],k))
a.sjD(A.k([f.l(),f.l(),f.l(),f.l(),f.l()],k))}}else if(c==="sofi"){a=new A.fG()
B.c.N(l,a)
a.a=f.k()
f.af(4)
a.sbB(A.k([f.l(),f.l(),f.l(),f.l(),f.l()],k))
J.d(f.a,f.d++)
J.d(f.a,f.d++)
a.sbE(A.k([f.l(),f.l(),f.l(),f.l(),f.l()],k))}else f.d+=b}}}}},
jv(a,b){var t,s,r,q,p,o=this,n=0
for(;;){t=o.as
t===$&&A.b()
if(!(n<t.length))break
t=t[n]
s=o.e
s===$&&A.b()
r=o.f
r===$&&A.b()
t.jz(a,s,r,b.f);++n}s=b.r
r=b.f
q=o.e
q===$&&A.b()
p=o.f
p===$&&A.b()
o.cx=A.kN(s,r,q,p,t)}}
A.cS.prototype={}
A.hW.prototype={
aM(a){return this.a=A.kM(a)},
aI(a){var t=this.a
return t==null?null:t.jb()}}
A.fH.prototype={}
A.cV.prototype={}
A.af.prototype={
b3(a,b){var t=this
return new A.af(t.a+b.a,t.b+b.b,t.c+b.c,t.d+b.d)}}
A.cT.prototype={
gaJ(){return 1},
$iF:1,
gK(){return this.a},
gI(){return this.b}}
A.cU.prototype={
gaJ(){return 1},
$iF:1,
gI(){return this.f},
gK(){return this.r}}
A.e1.prototype={
gaJ(){return 1},
$iF:1,
gK(){return this.a},
gI(){return this.b}}
A.az.prototype={
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
return new A.af(B.p[t],B.p[r>>>4&31],B.t[r&15],255)}else return new A.af(B.t[r>>>7&15],B.t[r>>>3&15],B.ah[r&7],B.ah[r>>>11&7])},
cv(){var t,s=this.r,r=this.f
if(s){t=r>>>10
if(!(t<32))return A.a(B.p,t)
return new A.cV(B.p[t],B.p[r>>>5&31],B.p[r&31])}else return new A.cV(B.t[r>>>8&15],B.t[r>>>4&15],B.t[r&15])},
cz(){var t,s=this.r,r=this.f
if(s){t=r>>>10
if(!(t<32))return A.a(B.p,t)
return new A.af(B.p[t],B.p[r>>>5&31],B.p[r&31],255)}else return new A.af(B.t[r>>>8&15],B.t[r>>>4&15],B.t[r&15],B.ah[r>>>12&7])},
ca(){var t=this,s=t.c?1:0,r=t.d,q=t.e?1:0,p=t.f,o=t.r?1:0
return(s|(r&16383)<<1|q<<15|(p&32767)<<16|o<<31)>>>0},
bt(){var t,s=this,r=s.a,q=s.b+1
if(!(q<r.length))return A.a(r,q)
t=r[q]
s.c=(t&1)===1
s.sck(s.ca())
s.d=t>>>1&16383
s.sck(s.ca())
s.e=(t>>>15&1)===1
s.sck(s.ca())
s.f=t>>>16&32767
s.sck(s.ca())
s.r=(t>>>31&1)===1
s.sck(s.ca())}}
A.i_.prototype={
aM(a){var t,s=this,r=a.length,q=r-(r>>>1&1431655765)>>>0
q=(q&858993459)+(q>>>2&858993459)
if((q+(q>>>4)>>>0&252645135)*16843009>>>0>>>24===1){t=s.he(a)
if(t!=null){s.a=a
return s.b=t}}t=s.hr(a)
if(t!=null){s.a=a
return s.b=t}t=s.hp(a)
if(t!=null){s.a=a
return s.b=t}return null},
hr(a){var t,s,r=A.p(a,!1,null,0)
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
hp(a){var t,s,r=A.p(a,!1,null,0)
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
he(a){var t,s,r,q,p,o,n=null,m=a.length,l=A.p(a,!1,n,0)
if(l.k()!==0)return n
t=new A.e1()
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
if((B.a.L(64,o)&m)>>>0!==0){q=B.a.L(16,p)
r=1
break}if((B.a.L(128,o)&m)>>>0!==0){q=B.a.L(16,p)
break}++p}if(p===10)return n}if((r+1)*2===4)return n
t.b=t.a=q
return t},
aI(a){var t,s,r=this,q=r.b
if(q==null||r.a==null)return null
if(q instanceof A.e1){q=q.a
t=r.b.gI()
s=r.a
s.toString
return r.d8(q,t,s)}else if(q instanceof A.cT){q=r.a
q.toString
return r.ho(q)}else if(q instanceof A.cU){q=r.a
q.toString
return r.hq(q)}return null},
ho(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=a.length
if(f<52||h.b==null)return g
t=h.b
t.toString
u.fi.a(t)
s=A.p(a,!1,g,0)
s.d+=52
r=t.Q
if(r<1)r=(t.d&4096)!==0?6:1
if(r!==1)return g
q=t.a
p=t.b
if(q*p*t.f/8>f-52)return g
switch(t.d&255){case 16:o=A.M(g,g,B.f,0,B.j,p,g,0,4,g,B.f,q,!1)
for(t=o.a,t=t.gH(t);t.F();){n=t.gP()
m=J.d(s.a,s.d++)
l=J.d(s.a,s.d++)
n.sm(l&240)
n.sp((l&15)<<4)
n.sq(m&240)
n.st((m&15)<<4)}return o
case 17:o=A.M(g,g,B.f,0,B.j,p,g,0,4,g,B.f,q,!1)
for(t=o.a,t=t.gH(t);t.F();){n=t.gP()
k=s.l()
j=(k&1)!==0?255:0
n.sm(k>>>8&248)
n.sp(k>>>3&248)
n.sq((k&62)<<2)
n.st(j)}return o
case 18:o=A.M(g,g,B.f,0,B.j,p,g,0,4,g,B.f,q,!1)
for(t=o.a,t=t.gH(t);t.F();){n=t.gP()
n.sm(J.d(s.a,s.d++))
n.sp(J.d(s.a,s.d++))
n.sq(J.d(s.a,s.d++))
n.st(J.d(s.a,s.d++))}return o
case 19:o=A.M(g,g,B.f,0,B.j,p,g,0,3,g,B.f,q,!1)
for(t=o.a,t=t.gH(t);t.F();){n=t.gP()
k=s.l()
n.sm(k>>>8&248)
n.sp(k>>>3&252)
n.sq((k&31)<<3)}return o
case 20:o=A.M(g,g,B.f,0,B.j,p,g,0,3,g,B.f,q,!1)
for(t=o.a,t=t.gH(t);t.F();){n=t.gP()
k=s.l()
n.sm((k&31)<<3)
n.sp(k>>>2&248)
n.sq(k>>>7&248)}return o
case 21:o=A.M(g,g,B.f,0,B.j,p,g,0,3,g,B.f,q,!1)
for(t=o.a,t=t.gH(t);t.F();){n=t.gP()
n.sm(J.d(s.a,s.d++))
n.sp(J.d(s.a,s.d++))
n.sq(J.d(s.a,s.d++))}return o
case 22:o=A.M(g,g,B.f,0,B.j,p,g,0,1,g,B.f,q,!1)
for(t=o.a,t=t.gH(t);t.F();)t.gP().sm(J.d(s.a,s.d++))
return o
case 23:o=A.M(g,g,B.f,0,B.j,p,g,0,4,g,B.f,q,!1)
for(t=o.a,t=t.gH(t);t.F();){n=t.gP()
j=J.d(s.a,s.d++)
i=J.d(s.a,s.d++)
n.sm(i)
n.sp(i)
n.sq(i)
n.st(j)}return o
case 24:return g
case 25:return t.y===0?h.e1(q,p,s.a0()):h.d8(q,p,s.a0())}return g},
hq(a){var t,s=this.b
if(!(s instanceof A.cU))return null
t=A.p(a,!1,null,0)
t.d=(t.d+=52)+s.Q
if(s.c[0]===0)switch(s.b){case 2:return this.e1(s.r,s.f,t.a0())
case 3:return this.d8(s.r,s.f,t.a0())}return null},
e1(c5,c6,c7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=A.M(b5,b5,B.f,0,B.j,c6,b5,0,3,b5,B.f,c5,!1),b7=c5/4|0,b8=b7-1,b9=J.ak(B.e.gv(c7),0,null),c0=new A.az(b9),c1=new A.az(J.ak(B.e.gv(c7),0,null)),c2=new A.az(J.ak(B.e.gv(c7),0,null)),c3=new A.az(J.ak(B.e.gv(c7),0,null)),c4=new A.az(J.ak(B.e.gv(c7),0,null))
for(t=b9.length,s=0,r=0;s<b7;++s,r+=4)for(q=0,p=0;q<b7;++q,p+=4){c0.b=A.b5(q,s)<<1>>>0
c0.bt()
o=c0.b
if(!(o<t))return A.a(b9,o)
n=b9[o]
m=c0.c?4:0
for(l=0,k=0;k<4;++k){j=(s+(k<2?-1:0)&b8)>>>0
i=(j+1&b8)>>>0
for(o=k+r,h=0;h<4;++h){g=(q+(h<2?-1:0)&b8)>>>0
f=(g+1&b8)>>>0
c1.b=A.b5(g,j)<<1>>>0
c1.bt()
c2.b=A.b5(f,j)<<1>>>0
c2.bt()
c3.b=A.b5(g,i)<<1>>>0
c3.bt()
c4.b=A.b5(f,i)<<1>>>0
c4.bt()
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
b1=B.by[m+n&3]
b2=b1[0]
b3=b1[1]
b4=b6.a
if(b4!=null)b4.a3(h+p,o,(e.a*d+c.a*b+a.a*a0+a1.a*a2)*b2+(a3.a*a4+a5.a*a6+a7.a*a8+a9.a*b0)*b3>>>7,(e.b*d+c.b*b+a.b*a0+a1.b*a2)*b2+(a3.b*a4+a5.b*a6+a7.b*a8+a9.b*b0)*b3>>>7,(e.c*d+c.c*b+a.c*a0+a1.c*a2)*b2+(a3.c*a4+a5.c*a6+a7.c*a8+a9.c*b0)*b3>>>7)
n=n>>>2;++l}}}return b6},
d8(b3,b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=A.M(a3,a3,B.f,0,B.j,b4,a3,0,4,a3,B.f,b3,!1),a5=b3/4|0,a6=a5-1,a7=J.ak(B.e.gv(b5),0,null),a8=new A.az(a7),a9=new A.az(J.ak(B.e.gv(b5),0,null)),b0=new A.az(J.ak(B.e.gv(b5),0,null)),b1=new A.az(J.ak(B.e.gv(b5),0,null)),b2=new A.az(J.ak(B.e.gv(b5),0,null))
for(t=a7.length,s=0,r=0;s<a5;++s,r+=4)for(q=0,p=0;q<a5;++q,p+=4){a8.b=A.b5(q,s)<<1>>>0
a8.bt()
o=a8.b
if(!(o<t))return A.a(a7,o)
n=a7[o]
m=a8.c?4:0
for(l=0,k=0;k<4;++k){j=(s+(k<2?-1:0)&a6)>>>0
i=(j+1&a6)>>>0
for(o=k+r,h=0;h<4;++h){g=(q+(h<2?-1:0)&a6)>>>0
f=(g+1&a6)>>>0
a9.b=A.b5(g,j)<<1>>>0
a9.bt()
b0.b=A.b5(f,j)<<1>>>0
b0.bt()
b1.b=A.b5(g,i)<<1>>>0
b1.bt()
b2.b=A.b5(f,i)<<1>>>0
b2.bt()
e=a9.cw()
if(!(l>=0&&l<16))return A.a(B.m,l)
d=B.m[l][0]
c=b0.cw()
b=B.m[l][1]
b=new A.af(e.a*d,e.b*d,e.c*d,e.d*d).b3(0,new A.af(c.a*b,c.b*b,c.c*b,c.d*b))
c=b1.cw()
d=B.m[l][2]
d=b.b3(0,new A.af(c.a*d,c.b*d,c.c*d,c.d*d))
c=b2.cw()
b=B.m[l][3]
a=d.b3(0,new A.af(c.a*b,c.b*b,c.c*b,c.d*b))
b=a9.cz()
c=B.m[l][0]
d=b0.cz()
e=B.m[l][1]
e=new A.af(b.a*c,b.b*c,b.c*c,b.d*c).b3(0,new A.af(d.a*e,d.b*e,d.c*e,d.d*e))
d=b1.cz()
c=B.m[l][2]
c=e.b3(0,new A.af(d.a*c,d.b*c,d.c*c,d.d*c))
d=b2.cz()
e=B.m[l][3]
a0=c.b3(0,new A.af(d.a*e,d.b*e,d.c*e,d.d*e))
a1=B.by[m+n&3]
e=a1[0]
d=a1[1]
c=a1[2]
b=a1[3]
a2=a4.a
if(a2!=null)a2.aj(h+p,o,a.a*e+a0.a*d>>>7,a.b*e+a0.b*d>>>7,a.c*e+a0.c*d>>>7,a.d*c+a0.d*b>>>7)
n=n>>>2;++l}}}return a4}}
A.e8.prototype={
gaJ(){return 1},
bJ(a){var t,s,r=this
if(a.c-a.d<18)return
r.a=a.D()
r.b=a.D()
t=a.D()
if(t<12){if(!(t>=0))return A.a(B.bw,t)
s=B.bw[t]}else s=B.ak
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
f3(){var t=this,s=t.z
if(s!==8&&s!==16&&s!==24&&s!==32)return!1
s=t.c
if(s===B.D||s===B.E){if(t.e>256||t.b!==1)return!1
s=t.f
if(s!==16&&s!==24&&s!==32)return!1}else if(t.b===1)return!1
return!0},
$iF:1,
gK(){return this.x},
gI(){return this.y}}
A.ah.prototype={
ad(){return"TgaImageType."+this.b}}
A.i2.prototype={
aM(a){var t,s,r,q,p=this
p.a=new A.e8(B.ak)
t=A.p(a,!1,null,0)
p.b=t
s=t.aa(18)
p.a.bJ(s)
t=p.a
if(!t.f3())return null
r=p.b
r.d+=t.a
q=t.c
if(q===B.D||q===B.E)t.as=r.aa(t.e*B.a.j(t.f,3)).a0()
t=p.a
t.ax=p.b.d
return t},
aI(a){var t=this,s=t.a
if(s==null)return null
s=s.c
if(s===B.c0)return t.e0()
else if(s===B.c_||s===B.E)return t.ht()
else if(s===B.D)return t.e0()
return null},
dX(a,b){var t,s,r,q,p,o,n,m=this,l=A.p(a,!1,null,0),k=m.a.f
if(k===16){k=m.b
k===$&&A.b()
t=k.l()
s=t>>>7&248
r=t>>>2&248
q=(t&31)<<3
p=(t&32768)!==0?0:255
for(o=0;o<m.a.e;++o){b.br(o,s)
b.bp(o,r)
b.bo(o,q)
b.bn(o,p)}}else{n=k===32
for(o=0;o<m.a.e;++o){q=J.d(l.a,l.d++)
r=J.d(l.a,l.d++)
s=J.d(l.a,l.d++)
p=n?J.d(l.a,l.d++):255
b.br(o,s)
b.bp(o,r)
b.bo(o,q)
b.bn(o,p)}}},
ht(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.a,c=d.z,b=c===16,a=b||c===32,a0=d.x,a1=d.y,a2=a?4:3
d=d.c
t=A.M(e,e,B.f,0,B.j,a1,e,0,a2,e,B.f,a0,d===B.D||d===B.E)
d=t.a
if((d==null?e:d.gR())!=null){d=f.a.as
d.toString
a0=t.a
a0=a0==null?e:a0.gR()
a0.toString
f.dX(d,a0)}s=t.gK()
r=t.gI()-1
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
if(a0!=null)a0.aD(q,r,m)
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
if(a0!=null)a0.aj(q,r,m,i,h,g)
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
if(a0!=null)a0.aj(q,r,m,i,h,g)
if(k>=s){--r
if(r<0){q=n
break}q=0}else q=k}}}else if(d)for(l=0;l<o;++l){a0=f.b
m=J.d(a0.a,a0.d++)
k=q+1
a0=t.a
if(a0!=null)a0.aD(q,r,m)
if(k>=s){--r
if(r<0){q=n
break}q=0}else q=k}else if(b)for(l=0;l<o;++l){j=f.b.l()
g=(j&32768)!==0?0:255
k=q+1
a0=t.a
if(a0!=null)a0.aj(q,r,j>>>7&248,j>>>2&248,(j&31)<<3,g)
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
if(a0!=null)a0.aj(q,r,m,i,h,g)
if(k>=s){--r
if(r<0){q=n
break}q=0}else q=k}if(q>=s){--r
if(r<0)break
q=0}}return t},
e0(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=e.b
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
n=A.M(d,d,B.f,0,B.j,p,d,0,o,d,B.f,q,t===B.D||t===B.E)
t=e.a
q=t.c
if(q===B.D||q===B.E){t=t.as
t.toString
q=n.a
q=q==null?d:q.gR()
q.toString
e.dX(t,q)}if(s===8)for(m=n.gI()-1;m>=0;--m){l=0
for(;;){c=n.a
c=c==null?d:c.a
if(!(l<(c==null?0:c)))break
c=e.b
k=J.d(c.a,c.d++)
c=n.a
if(c!=null)c.aD(l,m,k);++l}}else if(c)for(m=n.gI()-1;m>=0;--m){l=0
for(;;){c=n.a
c=c==null?d:c.a
if(!(l<(c==null?0:c)))break
j=e.b.l()
i=(j&32768)!==0?0:255
c=n.a
if(c!=null)c.aj(l,m,j>>>7&248,j>>>2&248,(j&31)<<3,i);++l}}else for(m=n.gI()-1;m>=0;--m){l=0
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
if(c!=null)c.aj(l,m,f,g,h,i);++l}}return n}}
A.i3.prototype={
ae(a){var t,s,r,q,p,o=this
if(a===0)return 0
if(o.c===0){o.c=8
o.b=o.a.D()}for(t=o.a,s=0;r=o.c,a>r;){q=B.a.V(s,r)
p=o.b
if(!(r>=0&&r<9))return A.a(B.w,r)
s=q+(p&B.w[r])
a-=r
o.c=8
o.b=J.d(t.a,t.d++)}if(a>0){if(r===0){o.c=8
o.b=t.D()}t=B.a.V(s,a)
r=o.b
q=o.c-a
r=B.a.b6(r,q)
if(!(a<9))return A.a(B.w,a)
s=t+(r&B.w[a])
o.c=q}return s}}
A.fM.prototype={
C(a){var t=this,s=t.a,r=$.k1().n(0,s)
if(r!=null)return r.a+": "+t.b.C(0)+" "+t.c
return"<"+s+">: "+t.b.C(0)+" "+t.c},
bd(){var t,s,r,q,p=this,o=p.e
if(o!=null)return o
o=p.f
o.d=p.d
t=p.c
s=p.b
if(s!==B.d){r=s.a
if(!(r<14))return A.a(B.a5,r)
r=B.a5[r]}else r=0
q=o.aa(t*r)
switch(s.a){case 1:return p.e=new A.b1(new Uint8Array(A.w(q.aa(t).a0())))
case 2:return p.e=new A.bJ(t===0?"":q.af(t-1))
case 7:return p.e=new A.b1(new Uint8Array(A.w(q.aa(t).a0())))
case 3:return p.e=A.kr(q,t)
case 4:return p.e=A.km(q,t)
case 5:return p.e=A.kn(q,t)
case 11:return p.e=A.ks(q,t)
case 12:return p.e=A.kl(q,t)
case 6:return p.e=new A.bl(new Int8Array(A.w(J.j3(B.e.gv(q.a0()),0,t))))
case 8:return p.e=A.kq(q,t)
case 9:return p.e=A.ko(q,t)
case 10:return p.e=A.kp(q,t)
case 13:case 0:return null}}}
A.i5.prototype={
j8(a,b,c,d){var t,s,r,q=this
q.r=b
q.x=q.w=0
t=B.a.X(q.a+7,8)
for(s=0,r=0;r<d;++r){q.d6(a,s,c)
s+=t}},
d6(a,b,c){var t,s,r,q,p,o,n,m,l=this
l.d=0
for(t=l.a,s=!0;c<t;){while(s){r=l.bG(10)
if(!(r<1024))return A.a(B.ab,r)
q=B.ab[r]
p=B.a.j(q,1)&15
if(p===12){r=(r<<2&12|l.aN(2))>>>0
if(!(r<16))return A.a(B.C,r)
q=B.C[r]
o=B.a.j(q,1)
c+=B.a.j(q,4)&4095
l.av(4-(o&7))}else if(p===0)throw A.f(A.l("TIFFFaxDecoder0"))
else if(p===15)throw A.f(A.l("TIFFFaxDecoder1"))
else{c+=B.a.j(q,5)&2047
l.av(10-p)
if((q&1)===0){B.c.i(l.f,l.d++,c)
s=!1}}}if(c===t){if(l.z===2)if(l.w!==0){t=l.x
t.toString
l.x=t+1
l.w=0}break}while(!s){r=l.aN(4)
if(!(r<16))return A.a(B.a3,r)
q=B.a3[r]
n=q>>>5&2047
m=!0
if(n===100){r=l.bG(9)
if(!(r<512))return A.a(B.a6,r)
q=B.a6[r]
p=B.a.j(q,1)&15
n=B.a.j(q,5)&2047
if(p===12){l.av(5)
r=l.aN(4)
if(!(r<16))return A.a(B.C,r)
q=B.C[r]
o=B.a.j(q,1)
n=B.a.j(q,4)&4095
l.b_(a,b,c,n)
c+=n
l.av(4-(o&7))}else if(p===15)throw A.f(A.l("TIFFFaxDecoder2"))
else{l.b_(a,b,c,n)
c+=n
l.av(9-p)
if((q&1)===0){B.c.i(l.f,l.d++,c)
s=m}}}else{if(n===200){r=l.aN(2)
if(!(r<4))return A.a(B.a2,r)
q=B.a2[r]
n=q>>>5&2047
l.b_(a,b,c,n)
c+=n
l.av(2-(q>>>1&15))
B.c.i(l.f,l.d++,c)}else{l.b_(a,b,c,n)
c+=n
l.av(4-(q>>>1&15))
B.c.i(l.f,l.d++,c)}s=m}}if(c===t){if(l.z===2)if(l.w!==0){t=l.x
t.toString
l.x=t+1
l.w=0}break}}B.c.i(l.f,l.d++,c)},
j9(a0,a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
a.r=a1
a.z=3
a.x=a.w=0
t=a.a
s=B.a.X(t+7,8)
r=A.Y(2,null,!1,u.v)
a.at=a4&1
a.as=a4>>>2&1
if(a.ep()!==1)throw A.f(A.l("TIFFFaxDecoder3"))
a.d6(a0,0,a2)
for(q=s,p=1;p<a3;++p){if(a.ep()===0){o=a.e
a.e=a.f
a.f=o
a.y=0
n=a2
m=-1
l=!0
k=0
for(;;){n.toString
if(!(n<t))break
a.ea(m,l,r)
j=r[0]
i=r[1]
h=a.aN(7)
if(!(h<128))return A.a(B.a9,h)
h=B.a9[h]&255
g=h>>>3&15
f=h&7
if(g===0){if(!l){i.toString
a.b_(a0,q,n,i-n)}a.av(7-f)
n=i
m=n}else if(g===1){a.av(7-f)
e=k+1
d=e+1
if(l){n+=a.cH()
B.c.i(a.f,k,n)
c=a.cG()
a.b_(a0,q,n,c)
n+=c
B.c.i(a.f,e,n)}else{c=a.cG()
a.b_(a0,q,n,c)
n+=c
B.c.i(a.f,k,n)
n+=a.cH()
B.c.i(a.f,e,n)}k=d
m=n}else{if(g<=8){j.toString
b=j+(g-5)
e=k+1
B.c.i(a.f,k,b)
l=!l
if(l)a.b_(a0,q,n,b-n)
a.av(7-f)}else throw A.f(A.l("TIFFFaxDecoder4"))
n=b
k=e
m=n}}B.c.i(a.f,k,n)
a.d=k+1}else a.d6(a0,q,a2)
q+=s}},
je(a4,a5,a6,a7,a8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this
a3.r=a5
a3.z=4
a3.x=a3.w=0
t=a3.a
s=B.a.X(t+7,8)
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
a3.ea(l,k,r)
i=r[0]
h=r[1]
g=a3.aN(7)
if(!(g<128))return A.a(B.a9,g)
g=B.a9[g]&255
f=g>>>3&15
e=g&7
if(f===0){if(!k){h.toString
a3.b_(a4,p,m,h-m)}a3.av(7-e)
m=h
l=m}else if(f===1){a3.av(7-e)
d=j+1
c=d+1
if(k){m+=a3.cH()
B.c.i(n,j,m)
b=a3.cG()
a3.b_(a4,p,m,b)
m+=b
B.c.i(n,d,m)}else{b=a3.cG()
a3.b_(a4,p,m,b)
m+=b
B.c.i(n,j,m)
m+=a3.cH()
B.c.i(n,d,m)}j=c
l=m}else if(f<=8){i.toString
a=i+(f-5)
d=j+1
B.c.i(n,j,a)
k=!k
if(k)a3.b_(a4,p,m,a-m)
a3.av(7-e)
m=a
j=d
l=m}else if(f===11){if(a3.aN(3)!==7)throw A.f(A.l("TIFFFaxDecoder5"))
for(a0=0,a1=!1;!a1;k=a2){while(a3.aN(1)!==1)++a0
if(a0>5){a0-=6
if(!k&&a0>0){d=j+1
B.c.i(n,j,m)
j=d}m+=a0
if(a0>0)k=!0
a2=a3.aN(1)===0
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
a3.b_(a4,p,m,1);++m
j=d}}}else throw A.f(A.l("TIFFFaxDecoder5 "+f))}B.c.i(n,j,m)
a3.d=j+1
p+=s}},
cH(){var t,s,r,q,p,o,n=this
for(t=0,s=!0;s;){r=n.bG(10)
if(!(r<1024))return A.a(B.ab,r)
q=B.ab[r]
p=B.a.j(q,1)&15
if(p===12){r=(r<<2&12|n.aN(2))>>>0
if(!(r<16))return A.a(B.C,r)
q=B.C[r]
o=B.a.j(q,1)
t+=B.a.j(q,4)&4095
n.av(4-(o&7))}else if(p===0)throw A.f(A.l("TIFFFaxDecoder0"))
else if(p===15)throw A.f(A.l("TIFFFaxDecoder1"))
else{t+=B.a.j(q,5)&2047
n.av(10-p)
if((q&1)===0)s=!1}}return t},
cG(){var t,s,r,q,p,o,n,m=this
for(t=0,s=!1;!s;){r=m.aN(4)
if(!(r<16))return A.a(B.a3,r)
q=B.a3[r]
p=q>>>5&2047
if(p===100){r=m.bG(9)
if(!(r<512))return A.a(B.a6,r)
q=B.a6[r]
o=B.a.j(q,1)&15
n=B.a.j(q,5)
if(o===12){m.av(5)
r=m.aN(4)
if(!(r<16))return A.a(B.C,r)
q=B.C[r]
n=B.a.j(q,1)
t+=B.a.j(q,4)&4095
m.av(4-(n&7))}else if(o===15)throw A.f(A.l("TIFFFaxDecoder2"))
else{t+=n&2047
m.av(9-o)
if((q&1)===0)s=!0}}else{if(p===200){r=m.aN(2)
if(!(r<4))return A.a(B.a2,r)
q=B.a2[r]
t+=q>>>5&2047
m.av(2-(q>>>1&15))}else{t+=p
m.av(4-(q>>>1&15))}s=!0}}return t},
ep(){var t,s,r=this,q="TIFFFaxDecoder8",p=r.as
if(p===0){if(r.bG(12)!==1)throw A.f(A.l("TIFFFaxDecoder6"))}else if(p===1){p=r.w
p.toString
t=8-p
if(r.bG(t)!==0)throw A.f(A.l(q))
if(t<4)if(r.bG(8)!==0)throw A.f(A.l(q))
while(s=r.bG(8),s!==1)if(s!==0)throw A.f(A.l(q))}if(r.at===0)return 1
else return r.aN(1)},
ea(a,b,c){var t,s,r,q,p,o,n=this
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
b_(a,b,c,d){var t,s,r,q,p,o=8*b+A.v(c),n=o+d,m=B.a.j(o,3),l=o&7
if(l>0){t=B.a.V(1,7-l)
s=J.d(a.a,a.d+m)
for(;;){if(!(t>0&&o<n))break
s=(s|t)>>>0
t=t>>>1;++o}a.i(0,m,s)}m=B.a.j(o,3)
for(r=n-7;o<r;m=q){q=m+1
J.x(a.a,a.d+m,255)
o+=8}while(o<n){m=B.a.j(o,3)
r=J.d(a.a,a.d+m)
p=B.a.V(1,7-(o&7))
J.x(a.a,a.d+m,(r|p)>>>0);++o}},
bG(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.r
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
o=B.Q[J.d(f.a,f.d+(r+2))&255]}}}else throw A.f(A.l("TIFFFaxDecoder7"))
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
i=B.a.V(n&B.w[m],l)
if(!(j>=0))return A.a(B.O,j)
h=B.a.a_(p&B.O[j],8-j)
if(k!==0){h=B.a.V(h,k)
if(!(k<9))return A.a(B.O,k)
h|=B.a.a_(o&B.O[k],8-k)
g.x=f+1
g.w=k}else if(j===8){g.w=0
g.x=f+1}else g.w=j
return(i|h)>>>0},
aN(a){var t,s,r,q,p,o,n,m,l,k,j=this,i=j.r
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
p=B.Q[J.d(i.a,i.d+(r+1))&255]}}else throw A.f(A.l("TIFFFaxDecoder7"))
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
k=B.a.V(o&B.w[n],-l)
if(!(m>=0&&m<9))return A.a(B.O,m)
k=(k|B.a.a_(p&B.O[m],8-m))>>>0
i=j.x
i.toString
j.x=i+1
j.w=m}return k},
av(a){var t,s=this,r=s.w
r.toString
t=r-a
if(t<0){r=s.x
r.toString
s.x=r-1
s.w=8+t}else s.w=t}}
A.fN.prototype={
fR(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=A.n(a,d,0),b=a.l()
for(t=e.a,s=0;s<b;++s){r=a.l()
q=a.l()
p=a.k()
if(q>13){a.d+=4
continue}o=B.bs[q]
if(p*B.a5[q]>4)n=a.k()
else{n=a.d
a.d=n+4}m=new A.fM(r,o,p,n,c)
t.i(0,r,m)
if(r===256){l=m.bd()
l=l==null?d:l.h(0)
e.b=l==null?0:l}else if(r===257){l=m.bd()
l=l==null?d:l.h(0)
e.c=l==null?0:l}else if(r===262){k=m.bd()
j=k==null?d:k.h(0)
if(j==null)j=17
if(j<17){if(!(j>=0))return A.a(B.bn,j)
e.d=B.bn[j]}else e.d=B.aJ}else if(r===259){l=m.bd()
l=l==null?d:l.h(0)
e.e=l==null?0:l}else if(r===258){l=m.bd()
l=l==null?d:l.h(0)
e.f=l==null?0:l}else if(r===277){l=m.bd()
l=l==null?d:l.h(0)
e.r=l==null?0:l}else if(r===317){l=m.bd()
l=l==null?d:l.h(0)
e.Q=l==null?0:l}else if(r===339){l=m.bd()
k=l==null?d:l.h(0)
if(k==null)k=0
if(!(k>=0&&k<4))return A.a(B.bq,k)
e.x=B.bq[k]}else if(r===320){k=m.bd()
if(k!=null){l=J.m2(B.e.gv(k.bf()))
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
if(t.aH(324)){e.ay=e.c1(322)
e.ch=e.c1(323)
e.CW=e.cP(324)
e.cx=e.cP(325)}else{e.ay=e.cO(322,e.b)
if(!t.aH(278))e.ch=e.cO(323,e.c)
else{f=e.c1(278)
if(f===-1)e.ch=e.c
else e.ch=f}e.CW=e.cP(273)
e.cx=e.cP(279)}l=e.b
i=e.ay
e.cy=B.a.ar(l+i-1,i)
i=e.c
l=e.ch
e.db=B.a.ar(i+l-1,l)
e.dy=e.cO(266,1)
e.fr=e.c1(292)
e.fx=e.c1(293)
e.c1(338)
switch(e.d.a){case 0:case 1:t=e.f
if(t===1&&e.r===1)e.y=B.aH
else if(t===4&&e.r===1)e.y=B.jD
else if(B.a.a1(t,8)===0){t=e.r
if(t===1)e.y=B.jE
else if(t===2)e.y=B.jF
else e.y=B.Y}break
case 2:if(B.a.a1(e.f,8)===0){t=e.r
if(t===3)e.y=B.c2
else if(t===4)e.y=B.jH
else e.y=B.Y}break
case 3:t=!1
if(e.r===1)if(e.id!=null){t=e.f
t=t===4||t===8||t===16}if(t)e.y=B.jG
break
case 4:if(e.f===1&&e.r===1)e.y=B.aH
break
case 6:if(e.e===7&&e.f===8&&e.r===3)e.y=B.c2
else{if(t.aH(530)){k=t.n(0,530).bd()
e.as=k.h(0)
t=e.at=k.a4(0,1)}else t=e.at=e.as=2
l=e.as
l===$&&A.b()
if(l*t===1)e.y=B.Y
else if(e.f===8&&e.r===3)e.y=B.jI}break
case 5:if(B.a.a1(e.f,8)===0)e.y=B.Y
t=e.r
if(t===4)e.w=3
else if(t===5)e.w=4
break
default:if(B.a.a1(e.f,8)===0)e.y=B.Y
break}},
c4(a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=c.x,a0=a===B.X,a1=a===B.h
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
q=A.M(b,b,t,0,B.j,c.c,b,0,r,b,t,a,s)
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
a.aW(g,m,p[i],p[j])}}f=0
e=0
for(;;){a=c.db
a===$&&A.b()
if(!(f<a))break
d=0
for(;;){a=c.cy
a===$&&A.b()
if(!(d<a))break
c.hu(a2,q,d,f);++d;++e}++f}return q},
hu(b2,b3,b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=null
if(b0.y===B.aH){b0.hh(b2,b3,b4,b5)
return}q=b0.cy
q===$&&A.b()
p=b5*q+b4
q=b0.CW
if(!(p>=0&&p<q.length))return A.a(q,p)
b2.d=q[p]
q=b0.ay
o=b4*q
n=b0.ch
m=b5*n
l=b0.cx
if(!(p<l.length))return A.a(l,p)
t=l[p]
k=q*n*b0.r
q=b0.f
n=q===16
if(n)k*=2
else if(q===32)k*=4
s=null
if(q===8||n||q===32||q===64){q=b0.e
if(q===1)s=b2
else if(q===5){s=A.p(new Uint8Array(k),!1,b1,0)
r=A.kC()
try{r.eZ(A.n(b2,t,0),s.a)}catch(j){}if(b0.Q===2)for(i=0;i<b0.ch;++i){h=b0.r
q=b0.ay
g=h*(i*q+1)
f=q*h
for(;h<f;++h){q=s
n=J.d(q.a,q.d+g)
l=s
e=b0.r
e=J.d(l.a,l.d+(g-e))
J.x(q.a,q.d+g,n+e);++g}}}else if(q===32773){s=A.p(new Uint8Array(k),!1,b1,0)
b0.e_(b2,k,s.a)}else if(q===32946)s=A.p(B.F.bP(b2.cr(0,0,t)),!1,b1,0)
else if(q===8)s=A.p(B.F.bP(b2.cr(0,0,t)),!1,b1,0)
else if(q===6||q===7){q=u.D.a(b2.cr(0,0,t))
d=A.hD()
d.bJ(q)
if(d.y.length!==1)A.aw(A.l("only single frame JPEGs supported"))
b0.i5(A.lv(d),b3,o,m,b0.ay,b0.ch)
return}else throw A.f(A.l("Unsupported Compression Type: "+q))
c=A.k([0,0,0],u.t)
for(b=m,a=0;a<b0.ch;++a,++b)for(a0=o,a1=0;a1<b0.ay;++a1,++a0){q=s
if(q.d>=q.c||a0>=b0.b||b>=b0.c)break
q=b0.r
if(q===1){q=b0.x
if(q===B.X){q=b0.f
if(q===32){q=s.k()
n=$.I()
n.$flags&2&&A.c(n)
n[0]=q
q=$.bA()
if(0>=q.length)return A.a(q,0)
a2=q[0]}else if(q===64)a2=s.cZ()
else if(q===16){q=s.l()
n=$.K
n=n!=null?n:A.N()
if(!(q<n.length))return A.a(n,q)
a2=n[q]}else a2=0
if(a0<b0.b&&b<b0.c){q=b3.a
if(q!=null)q.aD(a0,b,a2)}}else{n=b0.f
if(n===8)if(q===B.h){q=s
q=J.d(q.a,q.d++)
n=$.ac()
n.$flags&2&&A.c(n)
n[0]=q
q=$.aj()
if(0>=q.length)return A.a(q,0)
a2=q[0]}else{q=s
a2=J.d(q.a,q.d++)}else if(n===16)if(q===B.h){q=s.l()
n=$.ab()
n.$flags&2&&A.c(n)
n[0]=q
q=$.ai()
if(0>=q.length)return A.a(q,0)
a2=q[0]}else a2=s.l()
else if(n===32)if(q===B.h){q=s.k()
n=$.I()
n.$flags&2&&A.c(n)
n[0]=q
q=$.Z()
if(0>=q.length)return A.a(q,0)
a2=q[0]}else a2=s.k()
else a2=0
if(b0.d===B.aI){q=b3.a
a3=q==null?b1:q.gB()
a2=(a3==null?0:a3)-a2}if(a0<b0.b&&b<b0.c){q=b3.a
if(q!=null)q.aD(a0,b,a2)}}}else if(q===2){q=b0.f
if(q===8){if(b0.x===B.h){q=s
q=J.d(q.a,q.d++)
n=$.ac()
n.$flags&2&&A.c(n)
n[0]=q
q=$.aj()
if(0>=q.length)return A.a(q,0)
a4=q[0]}else{q=s
a4=J.d(q.a,q.d++)}if(b0.x===B.h){q=s
q=J.d(q.a,q.d++)
n=$.ac()
n.$flags&2&&A.c(n)
n[0]=q
q=$.aj()
if(0>=q.length)return A.a(q,0)
a5=q[0]}else{q=s
a5=J.d(q.a,q.d++)}}else if(q===16){if(b0.x===B.h){q=s.l()
n=$.ab()
n.$flags&2&&A.c(n)
n[0]=q
q=$.ai()
if(0>=q.length)return A.a(q,0)
a4=q[0]}else a4=s.l()
if(b0.x===B.h){q=s.l()
n=$.ab()
n.$flags&2&&A.c(n)
n[0]=q
q=$.ai()
if(0>=q.length)return A.a(q,0)
a5=q[0]}else a5=s.l()}else if(q===32){if(b0.x===B.h){q=s.k()
n=$.I()
n.$flags&2&&A.c(n)
n[0]=q
q=$.Z()
if(0>=q.length)return A.a(q,0)
a4=q[0]}else a4=s.k()
if(b0.x===B.h){q=s.k()
n=$.I()
n.$flags&2&&A.c(n)
n[0]=q
q=$.Z()
if(0>=q.length)return A.a(q,0)
a5=q[0]}else a5=s.k()}else{a4=0
a5=0}if(a0<b0.b&&b<b0.c){q=b3.a
if(q!=null)q.a3(a0,b,a4,a5,0)}}else if(q===3){q=b0.x
if(q===B.X){q=b0.f
if(q===32){q=s.k()
n=$.I()
n.$flags&2&&A.c(n)
n[0]=q
q=$.bA()
if(0>=q.length)return A.a(q,0)
a6=q[0]
n[0]=s.k()
a7=q[0]
n[0]=s.k()
a8=q[0]}else{a7=0
a8=0
if(q===64)a6=s.cZ()
else if(q===16){q=s.l()
n=$.K
n=n!=null?n:A.N()
if(!(q<n.length))return A.a(n,q)
a6=n[q]
q=s.l()
n=$.K
n=n!=null?n:A.N()
if(!(q<n.length))return A.a(n,q)
a7=n[q]
q=s.l()
n=$.K
n=n!=null?n:A.N()
if(!(q<n.length))return A.a(n,q)
a8=n[q]}else a6=0}if(a0<b0.b&&b<b0.c){q=b3.a
if(q!=null)q.a3(a0,b,a6,a7,a8)}}else{n=b0.f
if(n===8){if(q===B.h){q=s
q=J.d(q.a,q.d++)
n=$.ac()
n.$flags&2&&A.c(n)
n[0]=q
q=$.aj()
if(0>=q.length)return A.a(q,0)
a6=q[0]}else{q=s
a6=J.d(q.a,q.d++)}if(b0.x===B.h){q=s
q=J.d(q.a,q.d++)
n=$.ac()
n.$flags&2&&A.c(n)
n[0]=q
q=$.aj()
if(0>=q.length)return A.a(q,0)
a7=q[0]}else{q=s
a7=J.d(q.a,q.d++)}if(b0.x===B.h){q=s
q=J.d(q.a,q.d++)
n=$.ac()
n.$flags&2&&A.c(n)
n[0]=q
q=$.aj()
if(0>=q.length)return A.a(q,0)
a8=q[0]}else{q=s
a8=J.d(q.a,q.d++)}}else if(n===16){if(q===B.h){q=s.l()
n=$.ab()
n.$flags&2&&A.c(n)
n[0]=q
q=$.ai()
if(0>=q.length)return A.a(q,0)
a6=q[0]}else a6=s.l()
if(b0.x===B.h){q=s.l()
n=$.ab()
n.$flags&2&&A.c(n)
n[0]=q
q=$.ai()
if(0>=q.length)return A.a(q,0)
a7=q[0]}else a7=s.l()
if(b0.x===B.h){q=s.l()
n=$.ab()
n.$flags&2&&A.c(n)
n[0]=q
q=$.ai()
if(0>=q.length)return A.a(q,0)
a8=q[0]}else a8=s.l()}else if(n===32){if(q===B.h){q=s.k()
n=$.I()
n.$flags&2&&A.c(n)
n[0]=q
q=$.Z()
if(0>=q.length)return A.a(q,0)
a6=q[0]}else a6=s.k()
if(b0.x===B.h){q=s.k()
n=$.I()
n.$flags&2&&A.c(n)
n[0]=q
q=$.Z()
if(0>=q.length)return A.a(q,0)
a7=q[0]}else a7=s.k()
if(b0.x===B.h){q=s.k()
n=$.I()
n.$flags&2&&A.c(n)
n[0]=q
q=$.Z()
if(0>=q.length)return A.a(q,0)
a8=q[0]}else a8=s.k()}else{a6=0
a7=0
a8=0}if(a0<b0.b&&b<b0.c){q=b3.a
if(q!=null)q.a3(a0,b,a6,a7,a8)}}}else if(q>=4)if(b0.x===B.X){q=b0.f
if(q===32){q=s.k()
n=$.I()
n.$flags&2&&A.c(n)
n[0]=q
q=$.bA()
if(0>=q.length)return A.a(q,0)
a6=q[0]
n[0]=s.k()
a7=q[0]
n[0]=s.k()
a8=q[0]
n[0]=s.k()
a9=q[0]}else{a7=0
a8=0
a9=0
if(q===64)a6=s.cZ()
else if(q===16){q=s.l()
n=$.K
n=n!=null?n:A.N()
if(!(q<n.length))return A.a(n,q)
a6=n[q]
q=s.l()
n=$.K
n=n!=null?n:A.N()
if(!(q<n.length))return A.a(n,q)
a7=n[q]
q=s.l()
n=$.K
n=n!=null?n:A.N()
if(!(q<n.length))return A.a(n,q)
a8=n[q]
q=s.l()
n=$.K
n=n!=null?n:A.N()
if(!(q<n.length))return A.a(n,q)
a9=n[q]}else a6=0}if(a0<b0.b&&b<b0.c){q=b3.a
if(q!=null)q.aj(a0,b,a6,a7,a8,a9)}}else{q=b3.a
a5=q==null?b1:q.gB()
if(a5==null)a5=0
q=b0.f
if(q===8){if(b0.x===B.h){q=s
q=J.d(q.a,q.d++)
n=$.ac()
n.$flags&2&&A.c(n)
n[0]=q
q=$.aj()
if(0>=q.length)return A.a(q,0)
a6=q[0]}else{q=s
a6=J.d(q.a,q.d++)}if(b0.x===B.h){q=s
q=J.d(q.a,q.d++)
n=$.ac()
n.$flags&2&&A.c(n)
n[0]=q
q=$.aj()
if(0>=q.length)return A.a(q,0)
a7=q[0]}else{q=s
a7=J.d(q.a,q.d++)}if(b0.x===B.h){q=s
q=J.d(q.a,q.d++)
n=$.ac()
n.$flags&2&&A.c(n)
n[0]=q
q=$.aj()
if(0>=q.length)return A.a(q,0)
a8=q[0]}else{q=s
a8=J.d(q.a,q.d++)}if(b0.x===B.h){q=s
q=J.d(q.a,q.d++)
n=$.ac()
n.$flags&2&&A.c(n)
n[0]=q
q=$.aj()
if(0>=q.length)return A.a(q,0)
a9=q[0]}else{q=s
a9=J.d(q.a,q.d++)}if(b0.r===5)if(b0.x===B.h){q=s
q=J.d(q.a,q.d++)
n=$.ac()
n.$flags&2&&A.c(n)
n[0]=q
q=$.aj()
if(0>=q.length)return A.a(q,0)
a5=q[0]}else{q=s
a5=J.d(q.a,q.d++)}}else if(q===16){if(b0.x===B.h){q=s.l()
n=$.ab()
n.$flags&2&&A.c(n)
n[0]=q
q=$.ai()
if(0>=q.length)return A.a(q,0)
a6=q[0]}else a6=s.l()
if(b0.x===B.h){q=s.l()
n=$.ab()
n.$flags&2&&A.c(n)
n[0]=q
q=$.ai()
if(0>=q.length)return A.a(q,0)
a7=q[0]}else a7=s.l()
if(b0.x===B.h){q=s.l()
n=$.ab()
n.$flags&2&&A.c(n)
n[0]=q
q=$.ai()
if(0>=q.length)return A.a(q,0)
a8=q[0]}else a8=s.l()
if(b0.x===B.h){q=s.l()
n=$.ab()
n.$flags&2&&A.c(n)
n[0]=q
q=$.ai()
if(0>=q.length)return A.a(q,0)
a9=q[0]}else a9=s.l()
if(b0.r===5)if(b0.x===B.h){q=s.l()
n=$.ab()
n.$flags&2&&A.c(n)
n[0]=q
q=$.ai()
if(0>=q.length)return A.a(q,0)
a5=q[0]}else a5=s.l()}else if(q===32){if(b0.x===B.h){q=s.k()
n=$.I()
n.$flags&2&&A.c(n)
n[0]=q
q=$.Z()
if(0>=q.length)return A.a(q,0)
a6=q[0]}else a6=s.k()
if(b0.x===B.h){q=s.k()
n=$.I()
n.$flags&2&&A.c(n)
n[0]=q
q=$.Z()
if(0>=q.length)return A.a(q,0)
a7=q[0]}else a7=s.k()
if(b0.x===B.h){q=s.k()
n=$.I()
n.$flags&2&&A.c(n)
n[0]=q
q=$.Z()
if(0>=q.length)return A.a(q,0)
a8=q[0]}else a8=s.k()
if(b0.x===B.h){q=s.k()
n=$.I()
n.$flags&2&&A.c(n)
n[0]=q
q=$.Z()
if(0>=q.length)return A.a(q,0)
a9=q[0]}else a9=s.k()
if(b0.r===5)if(b0.x===B.h){q=s.k()
n=$.I()
n.$flags&2&&A.c(n)
n[0]=q
q=$.Z()
if(0>=q.length)return A.a(q,0)
a5=q[0]}else a5=s.k()}else{a6=0
a7=0
a8=0
a9=0}if(b0.d===B.c3){A.lp(a6,a7,a8,a9,c)
a6=c[0]
a7=c[1]
a8=c[2]
a9=a5}if(a0<b0.b&&b<b0.c){q=b3.a
if(q!=null)q.aj(a0,b,a6,a7,a8,a9)}}}}else throw A.f(A.l("Unsupported bitsPerSample: "+q))},
i5(a,b,c,d,e,f){var t,s,r,q
for(t=0;t<f;++t)for(s=t+d,r=0;r<e;++r){q=a.a
q=q==null?null:q.S(r,t,null)
if(q==null)q=new A.C()
b.bV(r+c,s,q)}},
hh(a4,a5,a6,a7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=null,a3=a1.cy
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
if(o===32773){m=B.a.a1(a3,8)===0?B.a.X(a3,8)*q:(B.a.X(a3,8)+1)*q
t=A.p(new Uint8Array(a3*q),!1,a2,0)
a1.e_(a4,m,t.a)}else if(o===5){t=A.p(new Uint8Array(a3*q),!1,a2,0)
A.kC().eZ(A.n(a4,n,0),t.a)
if(a1.Q===2)for(l=0;l<a1.c;++l){k=a1.r
j=k*(l*a1.b+1)
for(;k<a1.b*a1.r;++k){a3=t
q=J.d(a3.a,a3.d+j)
o=t
i=a1.r
i=J.d(o.a,o.d+(j-i))
J.x(a3.a,a3.d+j,q+i);++j}}}else if(o===2){t=A.p(new Uint8Array(a3*q),!1,a2,0)
try{A.jC(a1.dy,a3,q).j8(t,a4,0,a1.ch)}catch(h){}}else if(o===3){t=A.p(new Uint8Array(a3*q),!1,a2,0)
try{A.jC(a1.dy,a3,q).j9(t,a4,0,a1.ch,a1.fr)}catch(h){}}else if(o===4){t=A.p(new Uint8Array(a3*q),!1,a2,0)
try{A.jC(a1.dy,a3,q).je(t,a4,0,a1.ch,a1.fx)}catch(h){}}else if(o===8)t=A.p(B.F.bP(a4.cr(0,0,n)),!1,a2,0)
else if(o===32946)t=A.p(B.F.bP(a4.cr(0,0,n)),!1,a2,0)
else if(o===1)t=a4
else throw A.f(A.l("Unsupported Compression Type: "+o))
g=new A.i3(t)
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
e_(a,b,c){var t,s,r,q,p,o,n,m,l,k
u.L.a(c)
for(t=J.av(c),s=0,r=0;r<b;){q=s+1
p=J.d(a.a,a.d+s)
o=$.ac()
o.$flags&2&&A.c(o)
o[0]=p
p=$.aj()
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
if(!t.aH(a))return b
t=t.n(0,a).bd()
t=t==null?null:t.h(0)
return t==null?0:t},
c1(a){return this.cO(a,0)},
cP(a){var t,s=this.a
if(!s.aH(a))return null
t=s.n(0,a)
s=t.bd()
s.toString
return A.kB(t.c,s.gby(s),u.p)}}
A.c6.prototype={
ad(){return"TiffFormat."+this.b}}
A.a_.prototype={
ad(){return"TiffPhotometricType."+this.b}}
A.aA.prototype={
ad(){return"TiffImageType."+this.b}}
A.fO.prototype={
gaJ(){return this.f.length},
$iF:1,
gK(){return this.a},
gI(){return this.b}}
A.hN.prototype={
eZ(a,b){var t,s,r,q,p,o,n,m,l=this
u.L.a(b)
l.r=b
t=J.aZ(b)
l.w=0
s=u.D.a(a.a)
l.e=s
r=l.f=s.length
l.b=a.d
if(0>=r)return A.a(s,0)
if(s[0]===0){if(1>=r)return A.a(s,1)
s=s[1]===1}else s=!1
if(s)throw A.f(A.l("Invalid LZW Data"))
l.ef()
l.d=l.c=0
q=l.dh()
s=l.x
p=0
for(;;){if(!(q!==257&&l.w<t))break
if(q===256){l.ef()
q=l.dh()
l.as=0
if(q===257)break
J.x(l.r,l.w++,q)
p=q}else{r=l.Q
r.toString
if(q<r){l.ec(q)
r=l.as
r===$&&A.b()
o=r-1
for(;o>=0;--o){r=l.r
n=l.w++
if(!(o<4096))return A.a(s,o)
J.x(r,n,s[o])}r=l.as-1
if(!(r>=0&&r<4096))return A.a(s,r)
l.dM(p,s[r])}else{l.ec(p)
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
l.dM(p,s[m])}p=q}q=l.dh()}},
dM(a,b){var t,s=this,r=s.y
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
ec(a){var t,s,r,q,p,o,n,m=this
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
if(!(s>=0&&s<4))return A.a(B.ba,s)
return o&B.ba[s]},
ef(){var t,s,r=this
r.y=new Uint8Array(4096)
t=new Uint32Array(4096)
r.z=t
B.n.aw(t,0,4096,4098)
for(t=r.y,s=0;s<256;++s){t.$flags&2&&A.c(t)
t[s]=s}r.a=9
r.Q=258}}
A.i4.prototype={
aM(a){var t=this,s=A.p(a,!1,null,0)
t.c=s
s=t.es(s)
t.a=s
if(s!=null)t.b=A.j7(A.p(a,!1,null,0))
return t.a},
aI(a){var t,s,r=this.a
if(r==null)return null
r=r.f
if(!(a<r.length))return A.a(r,a)
r=r[a]
t=this.c
t===$&&A.b()
s=r.c4(t)
r=this.b
if(r!=null)s.e=r
return s},
es(a){var t,s,r,q,p,o,n,m,l,k,j=null,i=A.k([],u.aU),h=new A.fO(i),g=a.l()
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
try{n=new A.fN(A.Q(r,o),B.aJ,B.c1,B.jJ)
n.fR(t)
s=n
m=s
if(!(m.b!==0&&m.c!==0))break}catch(l){break}B.c.N(i,s)
m=i.length
if(m===1){if(0>=m)return A.a(i,0)
k=i[0]
h.a=k.b
if(0>=m)return A.a(i,0)
h.b=k.c}q=t.k()
if(q!==0)t.d=q}return i.length!==0?h:j}}
A.i8.prototype={
cl(){var t,s=this.a,r=s.be()
if((r&1)!==0)return!1
if((r>>>1&7)>3)return!1
if((r>>>4&1)===0)return!1
this.f.d=r>>>5
if(s.be()!==2752925)return!1
t=this.b
t.a=s.l()
t.b=s.l()
return!0},
bC(){var t,s,r,q=this,p=null
if(!q.hW())return p
t=q.b
s=t.a
q.d=A.M(p,p,B.f,0,B.j,t.b,p,0,4,p,B.f,s,!1)
q.i0()
if(!q.ic())return p
t=t.w
if(t.length!==0){r=A.p(new A.ao(t),!1,p,0)
t=q.d
t.toString
t.e=A.j7(r)}return q.d},
hW(){var t,s,r,q,p=this
if(!p.cl())return!1
p.fr=A.nG()
for(t=p.dy,s=0;s<4;++s){r=new Int32Array(2)
q=new Int32Array(2)
B.c.i(t,s,new A.fV(r,q,new Int32Array(2)))}p.y=p.Q=0
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
q=A.kT(t.al(q))
p.c=q
t.d+=r.d
q.Y(1)
p.c.Y(1)
p.ik(p.x,p.fr)
p.ib()
if(!p.ig(t))return!1
p.ii()
p.c.Y(1)
p.ih()
return!0},
ik(a,b){var t,s,r,q=this,p=q.c
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
ib(){var t,s,r,q=this,p=q.w,o=q.c
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
q.az=o
return!0},
ig(a){var t,s,r,q,p,o,n,m=a.c-a.d,l=this.c
l===$&&A.b()
l=B.a.L(1,l.Y(2))
this.cy=l
t=l-1
s=t*3
if(m<s)return!1
for(l=this.db,r=0,q=0;q<t;++q,s=o){p=a.cC(3,r)
o=s+((J.d(p.a,p.d)|J.d(p.a,p.d+1)<<8|J.d(p.a,p.d+2)<<16)>>>0)
if(o>m)o=m
n=new A.ed(a.bK(o-s,s))
n.b=254
n.c=0
n.d=-8
B.c.i(l,q,n)
r+=3}B.c.i(l,t,A.kT(a.bK(m-s,a.d-a.b+s)))
return s<m},
ii(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
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
ih(){var t,s,r,q,p,o,n=this,m=n.fr
for(t=0;t<4;++t)for(s=0;s<8;++s)for(r=0;r<3;++r)for(q=0;q<11;++q){p=n.c
p===$&&A.b()
o=p.a6(B.ip[t][s][r][q])!==0?n.c.Y(8):B.dD[t][s][r][q]
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
im(){var t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.az
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
i0(){var t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.b,f=g.at
if(f!=null)i.bD=f
t=J.a9(4,u.e6)
for(f=u.ao,s=0;s<4;++s)t[s]=A.k([new A.bc(),new A.bc()],f)
i.bw=u.gS.a(t)
f=i.at
f.toString
t=J.a9(f,u.dE)
for(r=0;r<f;++r){q=new Uint8Array(16)
p=new Uint8Array(8)
t[r]=new A.eh(q,p,new Uint8Array(8))}i.k2=u.R.a(t)
i.ok=new Uint8Array(832)
f=i.at
f.toString
i.go=new Uint8Array(4*f)
q=i.p4=16*f
p=i.R8=8*f
o=i.az
o.toString
if(!(o<3))return A.a(B.a1,o)
n=B.a1[o]
m=n*q
l=(n/2|0)*p
i.p1=A.p(new Uint8Array(16*q+m),!1,h,m)
q=8*p+l
i.p2=A.p(new Uint8Array(q),!1,h,l)
i.p3=A.p(new Uint8Array(q),!1,h,l)
g=g.a
i.RG=A.p(new Uint8Array(g),!1,h,0)
k=g+1>>>1
i.rx=A.p(new Uint8Array(k),!1,h,0)
i.ry=A.p(new Uint8Array(k),!1,h,0)
if(o===2)i.ch=i.ay=0
else{g=B.a.X(i.y-n,16)
i.ay=g
q=B.a.X(i.Q-n,16)
i.ch=q
if(g<0)i.ay=0
if(q<0)i.ch=0}g=B.a.X(i.as+15+n,16)
i.cx=g
q=B.a.X(i.z+15+n,16)
i.CW=q
if(q>f)i.CW=f
q=i.ax
q.toString
if(g>q)i.cx=q
j=f+1
t=J.a9(j,u.ai)
for(r=0;r<j;++r)t[r]=new A.ef()
i.k3=u.eQ.a(t)
g=i.at
g.toString
t=J.a9(g,u.gU)
for(r=0;r<g;++r){f=new Int16Array(384)
t[r]=new A.eg(f,new Uint8Array(16))}i.bv=u.db.a(t)
g=i.at
g.toString
i.k4=u.ge.a(A.Y(g,h,!1,u.aj))
i.im()
A.n6()
i.e=new A.i9()
return!0},
ic(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
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
f.ie()
if(!i)i=f.ij(k,o)
else{m.a=k.a=0
q=j.b
q===$&&A.b()
if(!q)m.b=k.b=0
j.f=j.e=0}q=f.az
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
B.e.aw(t,0,4,0)
f.y1=0
f.iQ()
q=f.az
q.toString
g=!1
if(q>0){q=f.y2
p=f.ch
p===$&&A.b()
if(q>=p){p=f.cx
p.toString
p=q<=p
g=p}}if(!f.hS(g))return!1
q=++f.y2}return!0},
iQ(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=null,a5=a3.y2,a6=a3.ok
a6===$&&A.b()
t=A.p(a6,!1,a4,40)
s=A.p(a6,!1,a4,584)
r=A.p(a6,!1,a4,600)
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
t.bc(p-4,4,t,p+12)}for(n=-1;n<8;++n){p=n*32
m=p-4
p+=4
s.bc(m,4,s,p)
r.bc(m,4,r,p)}}else{for(n=0;n<16;++n)J.x(t.a,t.d+(n*32-1),129)
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
J.aX(p,m,m+21,127)
m=s.a
p=s.d+-33
J.aX(m,p,p+9,127)
p=r.a
m=r.d+-33
J.aX(p,m,m+9,127)}p=o.b
p===$&&A.b()
if(p){i=A.n(t,a4,-16)
h=i.cs()
if(a6){p=a3.at
p.toString
if(q>=p-1){p=l.a[15]
m=i.a
g=i.d
J.aX(m,g,g+4,p)}else{p=a3.k2
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
for(p=o.c,e=0;e<16;++e,j=j<<2>>>0){d=A.n(t,a4,B.bJ[e])
m=p[e]
if(!(m<10))return A.a(B.bx,m)
B.bx[m].$1(d)
j.toString
m=e*16
a3.e2(j,new A.a6(k,m,Math.min(384,384),m,!1),d)}}else{p=A.kV(q,a5,o.c[0])
p.toString
if(!(p<7))return A.a(B.bI,p)
B.bI[p].$1(t)
if(j!==0)for(e=0;e<16;++e,j=j<<2>>>0){d=A.n(t,a4,B.bJ[e])
j.toString
p=e*16
a3.e2(j,new A.a6(k,p,Math.min(384,384),p,!1),d)}}p=o.f
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
g.fc(c,s)}}a0=new A.a6(k,320,m,320,!1)
p=p>>>8
if((p&255)!==0){m=a3.e
if((p&170)!==0){m===$&&A.b()
m.bz(a0,r)
m.bz(A.n(a0,a4,16),A.n(r,a4,4))
p=A.n(a0,a4,32)
g=A.n(r,a4,128)
m.bz(p,g)
m.bz(A.n(p,a4,16),A.n(g,a4,4))}else{m===$&&A.b()
m.fc(a0,r)}}p=a3.ax
p.toString
if(a5<p-1){B.e.ah(l.a,0,16,t.a0(),480)
B.e.ah(l.b,0,8,s.a0(),224)
B.e.ah(l.c,0,8,r.a0(),224)}a1=q*16
a2=q*8
for(n=0;n<16;++n){p=a3.p4
p.toString
m=a3.p1
m===$&&A.b()
m.bc(a1+n*p,16,t,n*32)}for(n=0;n<8;++n){p=a3.R8
p.toString
m=a3.p2
m===$&&A.b()
g=n*32
m.bc(a2+n*p,8,s,g)
p=a3.R8
p.toString
m=a3.p3
m===$&&A.b()
m.bc(a2+n*p,8,r,g)}++q}},
e2(a,b,c){var t,s,r,q,p,o
switch(a>>>30){case 3:t=this.e
t===$&&A.b()
t.jH(b,c,!1)
break
case 2:this.e===$&&A.b()
s=J.d(b.a,b.d)+4
r=B.a.aq(B.a.j(J.d(b.a,b.d+4)*35468,16),32)
q=B.a.aq(B.a.j(J.d(b.a,b.d+4)*85627,16),32)
p=B.a.aq(B.a.j(J.d(b.a,b.d+1)*35468,16),32)
o=B.a.aq(B.a.j(J.d(b.a,b.d+1)*85627,16),32)
A.ib(c,0,s+q,o,p)
A.ib(c,1,s+r,o,p)
A.ib(c,2,s-r,o,p)
A.ib(c,3,s-q,o,p)
break
case 1:t=this.e
t===$&&A.b()
t.ct(b,c)
break
default:break}},
hD(a,b){var t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.p4,f=i.k4
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
if(i.az===1){if(a>0){t=i.e
t===$&&A.b()
g.toString
t.dF(s,g,q+4)}if(f.c){t=i.e
t===$&&A.b()
g.toString
t.fq(s,g,q)}if(b>0){t=i.e
t===$&&A.b()
g.toString
t.dG(s,g,q+4)}if(f.c){f=i.e
f===$&&A.b()
g.toString
f.fs(s,g,q)}}else{p=i.R8
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
t.c_(s,1,g,16,o,r,l)
p.toString
t.c_(n,1,p,8,o,r,l)
t.c_(m,1,p,8,o,r,l)}if(f.c){t=i.e
t===$&&A.b()
g.toString
t.jk(s,g,q,r,l)
p.toString
k=A.n(n,h,4)
j=A.n(m,h,4)
t.bZ(k,1,p,8,q,r,l)
t.bZ(j,1,p,8,q,r,l)}if(b>0){t=i.e
t===$&&A.b()
g.toString
o=q+4
t.c_(s,g,1,16,o,r,l)
p.toString
t.c_(n,p,1,8,o,r,l)
t.c_(m,p,1,8,o,r,l)}if(f.c){f=i.e
f===$&&A.b()
g.toString
f.jK(s,g,q,r,l)
p.toString
t=4*p
k=A.n(n,h,t)
j=A.n(m,h,t)
f.bZ(k,p,1,8,q,r,l)
f.bZ(j,p,1,8,q,r,l)}}},
hP(){var t,s=this,r=s.ay
r===$&&A.b()
t=r
for(;;){r=s.CW
r.toString
if(!(t<r))break
s.hD(t,s.y2);++t}},
hS(a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=b.az
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
if(a1)b.hP()
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
if(b.bD!=null&&k<j){h=b.xr=b.hv(k,j-k)
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
b.is(k-g,b.z-c,j-k)}if(a0){a0=b.p1
h=b.p4
h.toString
a0.bc(q,s,p,16*h)
h=b.p2
q=b.R8
q.toString
h.bc(o,r,n,8*q)
q=b.p3
h=b.R8
h.toString
q.bc(o,r,m,8*h)}return!0},
is(a,b,c){if(b<=0||c<=0)return!1
this.hF(a,b,c)
this.hE(a,b,c)
return!0},
d4(a){var t
if((a&-4194304)>>>0===0)t=B.a.j(a,14)
else t=a<0?0:255
return t},
cT(a,b,c,d){var t=19077*a
d.i(0,0,this.d4(t+26149*c+-3644112))
d.i(0,1,this.d4(t-6419*b-13320*c+2229552))
d.i(0,2,this.d4(t+33050*b+-4527440))},
cS(a6,a7,a8,a9,b0,b1,b2,b3,b4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=new A.il(),a1=b4-1,a2=B.a.j(a1,1),a3=a0.$2(J.d(a8.a,a8.d),J.d(a9.a,a9.d)),a4=a0.$2(J.d(b0.a,b0.d),J.d(b1.a,b1.d)),a5=B.a.j(3*a3+a4+131074,2)
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
hE(a,b,c){var t,s,r,q,p,o,n,m,l=this,k=l.xr
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
m=m==null?null:m.S(o,q,null);(m==null?new A.C():m).st(n)}t.d=t.d+k.a}},
hF(a,b,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=J.L(h.d.gv(0),0,null),e=h.b.a,d=A.p(f,!1,g,a*e*4),c=h.to
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
hv(a,b){var t,s,r,q,p,o,n,m,l,k=this,j=k.b,i=j.a,h=j.b
if(a<0||b<=0||a+b>h)return null
if(a===0){j=i*h
k.aC=new Uint8Array(j)
t=k.bD
s=new A.im(t,i,h)
r=t.D()
q=s.d=r&3
s.e=B.a.j(r,2)&3
s.f=B.a.j(r,4)&3
s.r=B.a.j(r,6)&3
if(s.gf2())if(q===0){if(t.c-t.d<j)s.r=1}else if(q===1){p=new A.d2(B.Z,A.k([],u.J))
p.a=i
p.b=h
j=A.k([],u.A)
q=A.k([],u.F)
o=new Uint32Array(2)
n=new A.fT(t,o)
o=n.e=J.L(B.n.gv(o),0,null)
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
q=new A.f9(n,p,j,q)
q.dy=i
q.fr=h
s.x=q
q.c9(i,h,!0)
j=s.x
t=j.ch
q=t.length
if(q===1){if(0>=q)return A.a(t,0)
j=t[0].a===B.c5&&j.i4()}else j=!1
if(j){s.y=!0
j=s.x
t=j.c
l=t.a*t.b
j.db=0
t=B.a.a1(l,4)
t=new Uint8Array(l+(4-t))
j.cy=t
j.cx=J.ak(B.e.gv(t),0,null)}else{s.y=!1
s.x.dN(i)}}else s.r=1
k.bR=s}j=k.bR
if(j!=null)if(!j.w){t=k.aC
t===$&&A.b()
if(!j.j7(a,b,t))return null}j=k.aC
j===$&&A.b()
return A.p(j,!1,null,a*i)},
ij(a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.fr.b,a3=a1.dy,a4=a1.k1
a4===$&&A.b()
if(!(a4<4))return A.a(a3,a4)
t=a3[a4]
a4=a1.bv
a4===$&&A.b()
a3=a1.y1
if(!(a3<a4.length))return A.a(a4,a3)
s=a4[a3]
r=A.p(s.a,!1,null,0)
a3=a1.k3
a3===$&&A.b()
if(0>=a3.length)return A.a(a3,0)
q=a3[0]
r.js(0,r.c-r.d,0)
a3=s.b
a3===$&&A.b()
if(!a3){p=A.p(new Int16Array(16),!1,null,0)
a3=a5.b
a4=q.b
if(1>=a2.length)return A.a(a2,1)
o=a1.dg(a6,a2[1],a3+a4,t.b,0,p)
a5.b=q.b=o>0?1:0
if(o>1)a1.iW(p,r)
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
i=i>>>1|f<<5}a=(a|B.a.L(e,4*a0))>>>0
b=(b|B.a.L(j<<4>>>0,a0))>>>0
c=(c|B.a.L(i&240,a0))>>>0}a5.a=b
q.a=c
s.e=h
s.f=a
if((a&43690)===0)t.toString
return(h|a)>>>0===0},
iW(a,b){var t,s,r,q,p,o,n,m,l,k,j=new Int32Array(16)
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
hX(a,b){var t,s,r,q,p,o,n
u.L.a(b)
if(a.a6(b[3])===0)t=a.a6(b[4])===0?2:3+a.a6(b[5])
else if(a.a6(b[6])===0)t=a.a6(b[7])===0?5+a.a6(159):7+2*a.a6(165)+a.a6(145)
else{s=a.a6(b[8])
r=9+s
if(!(r<11))return A.a(b,r)
q=2*s+a.a6(b[r])
if(!(q<4))return A.a(B.bc,q)
p=B.bc[q]
o=p.length
for(t=0,n=0;n<o;++n)t+=t+a.a6(p[n])
t+=3+B.a.L(8,q)}return t},
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
o=1}else{o=this.hX(a,r)
if(2>=s)return A.a(p,2)
r=p[2]}if(!(e>=0&&e<16))return A.a(B.bt,e)
s=B.bt[e]
n=a.b
n===$&&A.b()
m=a.dQ(B.a.j(n,1))
n=a.b
if(n>>>0!==n||n>=128)return A.a(B.aa,n)
l=B.aa[n]
a.b=B.bz[n]
n=a.d
n===$&&A.b()
a.d=n-l
n=m!==0?-o:o
k=d[e>0?1:0]
J.x(f.a,f.d+s,n*k)}return 16},
ie(){var t,s,r,q,p,o,n,m,l,k,j=this,i=j.y1,h=4*i,g=j.go,f=j.id,e=j.bv
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
B.e.aw(g,h,h+4,s)
B.e.aw(f,0,4,s)}else{r=t.c
for(q=0,p=0;p<4;++p,q=k){s=f[p]
for(o=0;o<4;++o){i=h+o
if(!(i<g.length))return A.a(g,i)
e=g[i]
if(!(e<10))return A.a(B.bv,e)
e=B.bv[e]
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
B.e.ah(r,q,k,g,h)
f.$flags&2&&A.c(f)
if(!(p<4))return A.a(f,p)
f[p]=s}}if(j.c.a6(142)===0)i=0
else if(j.c.a6(114)===0)i=2
else i=j.c.a6(183)!==0?1:3
t.d=i}}
A.il.prototype={
$2(a,b){return(a|b<<16)>>>0},
$S:20}
A.ed.prototype={
Y(a){var t,s
for(t=0;s=a-1,a>0;a=s)t=(t|B.a.V(this.a6(128),s))>>>0
return t},
c6(a){var t=this.Y(a)
return this.Y(1)===1?-t:t},
a6(a){var t,s=this,r=s.b
r===$&&A.b()
t=s.dQ(B.a.j(r*a,8))
if(s.b<=126)s.iT()
return t},
dQ(a){var t,s,r,q,p,o=this,n=o.d
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
if(B.a.b6(n,p)>a){t=o.b
t===$&&A.b()
s=a+1
o.b=t-s
o.c=n-B.a.V(s,p)
return 1}else{o.b=a
return 0}},
iT(){var t,s=this,r=s.b
r===$&&A.b()
if(!(r>=0&&r<128))return A.a(B.aa,r)
t=B.aa[r]
s.b=B.bz[r]
r=s.d
r===$&&A.b()
s.d=r-t}}
A.i9.prototype={
dG(a,b,c){var t,s=A.n(a,null,0)
for(t=0;t<16;++t){s.d=a.d+t
if(this.ek(s,b,c))this.cI(s,b)}},
dF(a,b,c){var t,s=A.n(a,null,0)
for(t=0;t<16;++t){s.d=a.d+t*b
if(this.ek(s,1,c))this.cI(s,1)}},
fs(a,b,c){var t,s,r=A.n(a,null,0)
for(t=4*b,s=3;s>0;--s){r.d+=t
this.dG(r,b,c)}},
fq(a,b,c){var t,s=A.n(a,null,0)
for(t=3;t>0;--t){s.d+=4
this.dF(s,b,c)}},
jK(a,b,c,d,e){var t,s,r=A.n(a,null,0)
for(t=4*b,s=3;s>0;--s){r.d+=t
this.bZ(r,b,1,16,c,d,e)}},
jk(a,b,c,d,e){var t,s=A.n(a,null,0)
for(t=3;t>0;--t){s.d+=4
this.bZ(s,1,b,16,c,d,e)}},
c_(a,b,a0,a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.n(a,null,0)
for(t=-3*b,s=-2*b,r=-b,q=2*b;p=a1-1,a1>0;a1=p){if(this.el(c,b,a2,a3))if(this.ed(c,b,a4))this.cI(c,b)
else{o=J.d(c.a,c.d+t)
n=J.d(c.a,c.d+s)
m=J.d(c.a,c.d+r)
l=J.d(c.a,c.d)
k=J.d(c.a,c.d+b)
j=J.d(c.a,c.d+q)
i=$.j1()
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
h=$.an()
i=255+o+d
if(!(i>=0&&i<766))return A.a(h,i)
i=h[i]
J.x(c.a,c.d+t,i)
i=$.an()
h=255+n+e
if(!(h>=0&&h<766))return A.a(i,h)
h=i[h]
J.x(c.a,c.d+s,h)
h=$.an()
i=255+m+f
if(!(i>=0&&i<766))return A.a(h,i)
i=h[i]
J.x(c.a,c.d+r,i)
i=$.an()
h=255+l-f
if(!(h>=0&&h<766))return A.a(i,h)
h=i[h]
J.x(c.a,c.d,h)
h=$.an()
i=255+k-e
if(!(i>=0&&i<766))return A.a(h,i)
i=h[i]
J.x(c.a,c.d+b,i)
i=$.an()
h=255+j-d
if(!(h>=0&&h<766))return A.a(i,h)
h=i[h]
J.x(c.a,c.d+q,h)}c.d+=a0}},
bZ(a,b,c,d,e,f,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=A.n(a,null,0)
for(t=-2*b,s=-b;r=d-1,d>0;d=r){if(this.el(g,b,e,f))if(this.ed(g,b,a0))this.cI(g,b)
else{q=J.d(g.a,g.d+t)
p=J.d(g.a,g.d+s)
o=J.d(g.a,g.d)
n=J.d(g.a,g.d+b)
m=3*(o-p)
l=$.j2()
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
k=$.an()
l=255+q+h
if(!(l>=0&&l<766))return A.a(k,l)
l=k[l]
J.x(g.a,g.d+t,l)
l=$.an()
k=255+p+i
if(!(k>=0&&k<766))return A.a(l,k)
k=l[k]
J.x(g.a,g.d+s,k)
k=$.an()
l=255+o-j
if(!(l>=0&&l<766))return A.a(k,l)
l=k[l]
J.x(g.a,g.d,l)
l=$.an()
k=255+n-h
if(!(k>=0&&k<766))return A.a(l,k)
k=l[k]
J.x(g.a,g.d+b,k)}g.d+=c}},
cI(a,b){var t,s,r,q=J.d(a.a,a.d+-2*b),p=-b,o=J.d(a.a,a.d+p),n=J.d(a.a,a.d),m=J.d(a.a,a.d+b),l=$.j1(),k=1020+q-m
if(!(k>=0&&k<2041))return A.a(l,k)
t=3*(n-o)+l[k]
k=$.j2()
l=112+B.a.aq(B.a.j(t+4,3),32)
if(!(l>=0&&l<225))return A.a(k,l)
s=k[l]
l=112+B.a.aq(B.a.j(t+3,3),32)
if(!(l>=0&&l<225))return A.a(k,l)
r=k[l]
l=$.an()
k=255+o+r
if(!(k>=0&&k<766))return A.a(l,k)
a.i(0,p,l[k])
k=$.an()
l=255+n-s
if(!(l>=0&&l<766))return A.a(k,l)
a.i(0,0,k[l])},
ed(a,b,c){var t=J.d(a.a,a.d+-2*b),s=J.d(a.a,a.d+-b),r=J.d(a.a,a.d),q=J.d(a.a,a.d+b),p=$.h5(),o=255+t-s
if(!(o>=0&&o<511))return A.a(p,o)
if(p[o]<=c){o=255+q-r
if(!(o>=0&&o<511))return A.a(p,o)
o=p[o]>c
p=o}else p=!0
return p},
ek(a,b,c){var t,s=J.d(a.a,a.d+-2*b),r=J.d(a.a,a.d+-b),q=J.d(a.a,a.d),p=J.d(a.a,a.d+b),o=$.h5(),n=255+r-q
if(!(n>=0&&n<511))return A.a(o,n)
n=o[n]
o=$.j0()
t=255+s-p
if(!(t>=0&&t<511))return A.a(o,t)
return 2*n+o[t]<=c},
el(a,b,c,d){var t,s,r,q=J.d(a.a,a.d+-4*b),p=J.d(a.a,a.d+-3*b),o=J.d(a.a,a.d+-2*b),n=J.d(a.a,a.d+-b),m=J.d(a.a,a.d),l=J.d(a.a,a.d+b),k=J.d(a.a,a.d+2*b),j=J.d(a.a,a.d+3*b),i=$.h5(),h=255+n-m
if(!(h>=0&&h<511))return A.a(i,h)
h=i[h]
t=$.j0()
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
A.bv(b,h,0,0,p+j)
A.bv(b,h,1,0,o+k)
A.bv(b,h,2,0,o-k)
A.bv(b,h,3,0,p-j);++s
h+=32}},
jH(a,b,c){this.bz(a,b)
if(c)this.bz(A.n(a,null,16),A.n(b,null,4))},
ct(a,b){var t,s,r=J.d(a.a,a.d)+4
for(t=0;t<4;++t)for(s=0;s<4;++s)A.bv(b,0,s,t,r)},
fc(a,b){var t=this,s=null
if(J.d(a.a,a.d)!==0)t.ct(a,b)
if(J.d(a.a,a.d+16)!==0)t.ct(A.n(a,s,16),A.n(b,s,4))
if(J.d(a.a,a.d+32)!==0)t.ct(A.n(a,s,32),A.n(b,s,128))
if(J.d(a.a,a.d+48)!==0)t.ct(A.n(a,s,48),A.n(b,s,132))}}
A.ie.prototype={}
A.ii.prototype={}
A.ik.prototype={}
A.ec.prototype={}
A.ij.prototype={}
A.ia.prototype={}
A.bc.prototype={}
A.ef.prototype={}
A.fV.prototype={}
A.eg.prototype={}
A.eh.prototype={}
A.ee.prototype={
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
bC(){var t,s,r,q,p,o=this,n=null
o.f=0
if(!o.cl())return n
o.c9(o.dy,o.fr,!0)
o.dN(o.dy)
t=o.dy
o.d=A.M(n,n,B.f,0,B.j,o.fr,n,0,4,n,B.f,t,!1)
t=o.cx
t.toString
s=o.c
r=s.a
q=s.b
if(!o.d5(t,r,q,q,o.gip()))return n
t=s.w
if(t.length!==0){p=A.p(new A.ao(t),!1,n,0)
t=o.d
t.toString
t.e=A.j7(p)}return o.d},
dN(a){var t,s=this,r=s.c
r=r.a*r.b+a
t=new Uint32Array(r+a*16)
s.cx=t
s.cy=J.L(B.n.gv(t),0,null)
s.db=r
return!0},
iP(a){var t,s,r,q,p,o,n,m=this
u.L.a(a)
t=m.b
s=t.ae(2)
r=m.CW
q=B.a.L(1,s)
if((r&q)>>>0!==0)return!1
m.CW=(r|q)>>>0
p=new A.fU(B.c4)
B.c.N(m.ch,p)
if(!(s<4))return A.a(B.bF,s)
r=B.bF[s]
p.a=r
p.b=a[0]
p.c=a[1]
switch(r.a){case 0:case 1:t=t.ae(3)+2
p.e=t
p.d=m.c9(A.bw(p.b,t),A.bw(p.c,p.e),!1)
break
case 3:o=t.ae(8)+1
if(o>16)n=0
else if(o>4)n=1
else{t=o>2?2:3
n=t}B.c.i(a,0,A.bw(p.b,n))
p.e=n
p.d=m.c9(o,1,!1)
m.hI(o,p)
break
case 2:break}return!0},
c9(a,b,c){var t,s,r,q,p,o,n,m,l=this
if(c)for(t=l.b,s=u.t,r=b,q=a;t.ae(1)!==0;){p=A.k([q,r],s)
if(!l.iP(p))throw A.f(A.l("Invalid Transform"))
q=p[0]
r=p[1]}else{r=b
q=a}t=l.b
if(t.ae(1)!==0){o=t.ae(4)
if(!(o>=1&&o<=11))throw A.f(A.l("Invalid Color Cache"))}else o=0
if(!l.iC(q,r,o,c))throw A.f(A.l("Invalid Huffman Codes"))
if(o>0){t=B.a.L(1,o)
l.w=t
l.x=new A.ig(new Uint32Array(t),32-o)}else l.w=0
t=l.c
t.a=q
t.b=r
n=l.z
l.Q=A.bw(q,n)
l.y=n===0?4294967295:B.a.L(1,n)-1
if(c){l.f=0
return null}m=new Uint32Array(q*r)
if(!l.d5(m,q,r,r,null))throw A.f(A.l("Failed to decode image data."))
l.f=0
return m},
d5(b4,b5,b6,b7,b8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this
u.e7.a(b8)
t=b3.f
s=B.a.ar(t,b5)
r=B.a.a1(t,b5)
q=b3.e7(r,s)
p=b3.f
o=b5*b6
n=b5*b7
t=b3.w
m=280+t
l=t>0?b3.x:null
k=b3.y
for(t=b4.length,j=b3.b,i=b8!=null,h=b4.$flags|0,g=p;p<n;){if((r&k)>>>0===0){f=b3.cb(b3.as,b3.Q,b3.z,r,s)
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
c[a0]=a;++g}r=d}continue}}else a3=q.bU(0,j)
if(a3<256){if(q.b){e=q.c
h&2&&A.c(b4)
if(!(p>=0&&p<t))return A.a(b4,p)
b4[p]=(e|a3<<8)>>>0}else{a4=q.bU(1,j)
if(j.a>=32)j.bN()
a5=A.lA(q.bU(2,j),a3,a4,q.bU(3,j))
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
a7=q.bU(4,j)
if(j.a>=32)j.bN()
a8=b3.en(b5,b3.cL(a7))
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
if(i&&s<=b7)b8.$2(s,!0)}if((r&k)>>>0!==0){f=b3.cb(b3.as,b3.Q,b3.z,r,s)
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
i4(){var t,s,r,q,p,o,n,m
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
hJ(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h=this
if(b&&B.a.a1(a,16)!==0)return
t=h.r
s=a-t
r=h.dy
q=r*t
while(s>0){p=s>16?16:s
o=r*p
n=r*t
m=h.db
h.dO(t,p,q)
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
hd(a,a0,a1){var t,s,r,q,p,o,n,m,l,k,j=this,i=j.f,h=B.a.ar(i,a),g=B.a.a1(i,a),f=j.e7(g,h),e=j.f,d=a*a0,c=a*a1,b=j.y
i=j.b
for(;;){if(!(!i.b&&e<c))break
if((g&b)>>>0===0){t=j.cb(j.as,j.Q,j.z,g,h)
s=j.ax
if(!(t<s.length))return A.a(s,t)
f=s[t]}if(i.a>=32)i.bN()
r=f.bU(0,i)
if(r<256){s=j.cy
s===$&&A.b()
s.$flags&2&&A.c(s)
if(!(e>=0&&e<s.length))return A.a(s,e)
s[e]=r;++e;++g
if(g>=a){++h
if(B.a.a1(h,16)===0)j.dc(h)
g=0}}else if(r<280){q=j.cL(r-256)
p=f.bU(4,i)
if(i.a>=32)i.bN()
o=j.en(a,j.cL(p))
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
if(B.a.a1(h,16)===0)j.dc(h)}if(e<c&&(g&b)>>>0!==0){t=j.cb(j.as,j.Q,j.z,g,h)
s=j.ax
if(!(t<s.length))return A.a(s,t)
f=s[t]}}else return!1}j.dc(h)
j.f=e
return!0},
dc(a){var t,s,r=this,q=r.r,p=a-q,o=r.cy
o===$&&A.b()
t=A.p(o,!1,null,r.c.a*q)
if(p>0){o=r.dx
o.toString
s=A.p(o,!1,null,r.dy*q)
o=r.ch
if(0>=o.length)return A.a(o,0)
o[0].j1(q,q+p,t,s)}r.r=a},
iq(a,b){var t,s,r,q,p,o,n=this,m=n.c.a,l=n.r
if(b)if(B.a.a1(a,16)!==0)return
t=a-l
if(t<=0){n.r=a
return}n.dO(l,t,m*l)
for(s=n.db,r=n.r,q=0;q<t;++q,++r)for(p=0;p<n.dy;++p,++s){m=n.cx
if(!(s>=0&&s<m.length))return A.a(m,s)
o=m[s]
m=n.d.a
if(m!=null)m.aj(p,r,o>>>16&255,o>>>8&255,o&255,o>>>24&255)}n.r=a},
dO(a,b,c){var t,s=this,r=s.ch,q=r.length,p=s.c.a,o=a+b,n=s.db,m=s.cx
m.toString
B.n.ah(m,n,n+p*b,m,c)
for(;t=q-1,q>0;q=t){if(!(t>=0&&t<r.length))return A.a(r,t)
p=r[t]
m=s.cx
m.toString
p.jq(a,o,m,n,m,n)}},
iC(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=1,d=null
if(a0&&f.b.ae(1)!==0){t=2+f.b.ae(3)
s=A.bw(a,t)
r=A.bw(b,t)
q=s*r
p=f.c9(s,r,!1)
if(p==null)return!1
f.z=t
for(o=p.length,n=p.$flags|0,m=e,l=0;l<q;++l){if(!(l<o))return A.a(p,l)
k=p[l]>>>8&65535
n&2&&A.c(p)
p[l]=k
if(k>=m)m=k+1}if(m>1000||m>a*b){d=new Int32Array(1)
B.R.aw(d,0,1,255)
for(e=0,l=0;l<q;++l){if(!(l<o))return A.a(p,l)
j=p[l]
if(!(j<1))return A.a(d,j)
if(d[j]===-1){i=e+1
d[j]=e
e=i}h=d[j]
n&2&&A.c(p)
p[l]=h}}else e=m}else{p=null
m=1}if(f.b.b)return!1
g=f.iD(c,e,m,d)
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
i6(a,b,c){var t=B.a.V(1,b-c)
while(b<15){t-=a[b]
if(t<=0)break;++b
t=t<<1>>>0}return b-c},
eb(a,b){var t=B.a.V(1,b-1)
while((a&t)>>>0!==0)t=t>>>1
return t!==0?((a&t-1)>>>0)+t:a},
eJ(a4,a5,a6,a7,a8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=B.a.L(1,a5),a2=new Int32Array(16),a3=new Int32Array(16)
for(t=a6.length,s=0;s<a7;++s){if(!(s<t))return A.a(a6,s)
r=a6[s]
if(r>15)return 0
if(!(r>=0))return A.a(a2,r)
a2[r]=a2[r]+1}if(a2[0]===a7)return 0
a3[1]=0
for(q=1;q<15;q=p){r=a2[q]
if(r>B.a.L(1,q))return 0
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
l=a0.eb(l,q)}}for(q=a5+1,t=!t,f=a1,e=0,d=4294967295,i=2;q<=15;++q,i=i<<1>>>0){j=j<<1>>>0
k+=j
j-=a2[q]
if(j<0)return 0
for(h=q-a5&255;a2[q]>0;a2[q]=a2[q]-1){c=(l&m)>>>0
if(c!==d){if(t)e+=f
b=a0.i6(a2,q,a5)
f=B.a.V(1,b)
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
s=g}l=a0.eb(l,q)}}if(k!==2*a3[15]-1)return 0
return a1},
eK(a,b,c,d){var t,s,r,q,p,o,n=this.eJ(null,b,c,d,null)
if(n===0||a==null)return n
t=a.b
s=t.d
r=t.e
if(s+n>=r){q=new A.dm()
if(n>r)r=n
p=A.jb(r)
q.e=r
q.b=q.a=p
a.b=q
t=q}o=new Uint16Array(d)
this.eJ(t.b,b,c,d,o)
return n},
iB(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new A.eT(new A.dm())
d.dK(128)
if(this.eK(d,7,a,19)===0)return!1
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
if(!(j<3))return A.a(B.b8,j)
i=B.b8[j]
h=B.dl[j]
g=t.ae(i)+h
if(q+g>b)return!1
f=l===16?r:0
for(o=c.$flags|0;e=g-1,g>0;g=e,q=k){k=q+1
o&2&&A.c(c)
if(!(q>=0&&q<c.length))return A.a(c,q)
c[q]=f}}}return!0},
eu(a,b,c){var t,s,r,q,p,o,n,m=this.b,l=m.ae(1)
B.R.aw(b,0,a,0)
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
for(n=0;n<o;++n){if(!(n<19))return A.a(B.br,n)
t=B.br[n]
r=m.ae(3)
if(!(t<19))return A.a(p,t)
p[t]=r}q=this.iB(p,a,b)}return q&&!m.b?this.eK(c,8,b,a):0},
cD(a,b,c){var t=c.a,s=a.a
c.a=t+s
c.b=(c.b|B.a.L(a.b,b))>>>0
return s},
h0(a){var t,s,r,q,p,o,n,m,l,k,j=this
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
iD(a8,a9,b0,b1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null,a6=a8>0,a7=280+(a6?B.a.L(1,a8):0)
if(!(a8<12))return A.a(B.bf,a8)
t=B.bf[a8]
s=b1==null
if(s&&a9!==b0)return a5
r=new Int32Array(a7)
q=J.a9(a9,u.f)
for(p=0;p<a9;++p)q[p]=A.mv()
o=new A.eT(new A.dm())
o.dK(a9*t)
a4.ay=o
for(o=!s,n=0;n<b0;++n){if(o){if(!(n<b1.length))return A.a(b1,n)
m=b1[n]===-1}else m=!1
if(m)for(l=0;l<5;++l){k=B.bh[l]
if(a4.eu(l===0&&a6?k+B.a.L(1,a8):k,r,a5)===0)return a5}else{if(s)m=n
else{if(!(n<b1.length))return A.a(b1,n)
m=b1[n]}if(!(m>=0&&m<a9))return A.a(q,m)
j=q[m]
i=j.a
for(m=i.length,h=0,g=!0,f=0,l=0;l<5;++l){k=B.bh[l]
if(l===0&&a6)k+=B.a.L(1,a8)
e=a4.eu(k,r,a4.ay)
d=a4.ay.b.b
d.toString
B.c.i(i,l,d)
if(e===0)return a5
if(g&&B.ha[l]===1){if(!(l<m))return A.a(i,l)
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
if(m)a4.h0(j)}}return q},
cL(a){var t
if(a<4)return a+1
t=B.a.j(a-2,1)
return B.a.L(2+(a&1),t)+this.b.ae(t)+1},
en(a,b){var t,s,r
if(b>120)return b-120
else{t=b-1
if(!(t>=0))return A.a(B.bi,t)
s=B.bi[t]
r=(s>>>4)*a+(8-(s&15))
return r>=1?r:1}},
hI(a,b){var t,s,r,q,p,o,n,m,l=B.a.L(1,B.a.a2(8,b.e)),k=new Uint32Array(l),j=b.d
j.toString
t=J.L(B.n.gv(j),0,null)
s=J.L(B.n.gv(k),0,null)
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
cb(a,b,c,d,e){var t
if(c===0||a==null)return 0
t=b*B.a.j(e,c)+B.a.j(d,c)
if(!(t<a.length))return A.a(a,t)
return a[t]},
e7(a,b){var t=this,s=t.cb(t.as,t.Q,t.z,a,b),r=t.ax
if(!(s<r.length))return A.a(r,s)
return r[s]}}
A.f9.prototype={
ji(a,b){return this.hJ(a,b)}}
A.fT.prototype={
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
throw A.f(A.l("Not enough data in input."))}},
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
A.ig.prototype={}
A.c7.prototype={
ad(){return"VP8LImageTransformType."+this.b}}
A.fU.prototype={
jq(a,b,c,d,e,f){var t,s,r,q,p=this,o=p.b
switch(p.a.a){case 2:p.iY(e,f,(b-a)*o)
break
case 0:p.jt(a,b,c,d,e,f)
if(b!==p.c){t=f-o
B.n.ah(e,t,t+o,c,f+(b-a-1)*o)}break
case 1:p.j2(a,b,c,d,e,f)
break
case 3:if(d===f&&p.e>0){s=b-a
r=s*A.bw(o,p.e)
q=f+s*o-r
B.n.ah(e,q,q+r,c,f)
p.eX(a,b,c,q,e,f)}else p.eX(a,b,c,d,e,f)
break}},
j1(a,b,c,d){var t,s,r,q,p,o,n=this.e,m=B.a.a2(8,n),l=this.b,k=this.d
if(m<8){t=B.a.L(1,n)-1
s=B.a.L(1,m)-1
for(r=a;r<b;++r)for(q=0,p=0;p<l;++p){if((p&t)>>>0===0){q=J.d(c.a,c.d);++c.d}n=(q&s)>>>0
if(!(n>=0&&n<k.length))return A.a(k,n)
n=k[n]
J.x(d.a,d.d,n>>>8&255);++d.d
q=B.a.j(q,m)}}else for(r=a;r<b;++r)for(p=0;p<l;++p){o=J.d(c.a,c.d);++c.d
if(!(o>=0&&o<k.length))return A.a(k,o)
n=k[o]
J.x(d.a,d.d,n>>>8&255);++d.d}},
eX(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k=this.e,j=B.a.a2(8,k),i=this.b,h=this.d
if(j<8){t=B.a.L(1,k)-1
s=B.a.L(1,j)-1
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
j2(a4,a5,a6,a7,a8,a9){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.b,a0=b.e,a1=B.a.L(1,a0)-1,a2=A.bw(a,a0),a3=B.a.j(a4,b.e)*a2
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
j=$.ac()
j.$flags&2&&A.c(j)
j[0]=k
k=$.aj()
if(0>=k.length)return A.a(k,0)
i=k[0]
j[0]=l
h=k[0]
g=$.k_()
g.$flags&2&&A.c(g)
g[0]=i*h
f=$.lY()
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
bW(a,b){return(((a&4278255360)>>>0)+((b&4278255360)>>>0)&4278255360|(a&16711935)+(b&16711935)&16711935)>>>0},
jt(b0,b1,b2,b3,b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=4278190080,a9=a7.b
if(b0===0){t=b2.length
if(!(b3<t))return A.a(b2,b3)
s=a7.bW(b2[b3],a8)
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
n=a7.bW(b2[l],n)
l=p+m
s&2&&A.c(b4)
if(!(l<r))return A.a(b4,l)
b4[l]=n}b3+=a9
b5+=a9;++b0}t=a7.e
k=B.a.L(1,t)
j=k-1
i=A.bw(a9,t)
h=B.a.j(b0,a7.e)*i
for(t=b2.length,s=~j,r=b4.length,g=b0;g<b1;){l=b5-a9
if(!(l>=0&&l<r))return A.a(b4,l)
f=b4[l]
if(!(b3<t))return A.a(b2,b3)
l=a7.bW(b2[b3],f)
b4.$flags&2&&A.c(b4)
if(!(b5<r))return A.a(b4,b5)
b4[b5]=l
for(e=h,d=1;d<a9;d=a0,e=c){l=a7.d
c=e+1
if(!(e<l.length))return A.a(l,e)
b=l[e]>>>8&15
a=$.nF[b]
a0=((d&s)>>>0)+k
if(a0>a9)a0=a9
a1=b3+d
l=b5+d
a2=l-a9
a3=a0-d
if(b===0)for(a4=b4.$flags|0,m=0;m<a3;++m){a5=l+m
a6=a1+m
if(!(a6>=0&&a6<t))return A.a(b2,a6)
a6=a7.bW(b2[a6],a8)
a4&2&&A.c(b4)
if(!(a5>=0&&a5<r))return A.a(b4,a5)
b4[a5]=a6}else if(b===1){a4=l-1
if(!(a4>=0&&a4<r))return A.a(b4,a4)
n=b4[a4]
for(a4=b4.$flags|0,m=0;m<a3;++m){a5=a1+m
if(!(a5>=0&&a5<t))return A.a(b2,a5)
n=a7.bW(b2[a5],n)
a5=l+m
a4&2&&A.c(b4)
if(!(a5>=0&&a5<r))return A.a(b4,a5)
b4[a5]=n}}else for(m=0;m<a3;++m){a4=l+m
a5=a4-1
if(!(a5>=0&&a5<r))return A.a(b4,a5)
f=a.$3(b4[a5],b4,a2+m)
a5=a1+m
if(!(a5>=0&&a5<t))return A.a(b2,a5)
a5=a7.bW(b2[a5],f)
b4.$flags&2&&A.c(b4)
if(!(a4>=0&&a4<r))return A.a(b4,a4)
b4[a4]=a5}}b3+=a9
b5+=a9;++g
if((g&j)>>>0===0)h+=i}},
iY(a,b,c){var t,s,r,q,p,o
for(t=a.length,s=a.$flags|0,r=0;r<c;++r){q=b+r
if(!(q<t))return A.a(a,q)
p=a[q]
o=p>>>8&255
s&2&&A.c(a)
a[q]=(p&4278255360|(p&16711935)+(o<<16|o)&16711935)>>>0}}}
A.im.prototype={
gf2(){var t=this,s=t.d
if(s>1||t.e>=4||t.f>1||t.r!==0)return!1
return!0},
j7(a,b,c){var t,s,r,q,p,o,n=this
if(!n.gf2())return!1
t=n.e
if(!(t<4))return A.a(B.bK,t)
s=B.bK[t]
if(n.d===0){t=n.b
r=a*t
q=n.a
B.e.ah(c,r,b*t,q.a,q.d-q.b+r)}else{t=a+b
q=n.x
q===$&&A.b()
q.dx=c
p=q.c
if(n.y)t=q.hd(p.a,p.b,t)
else{o=q.cx
o.toString
q=q.d5(o,p.a,p.b,t,u.d6.a(q.gjh()))
t=q}if(!t)return!1}if(s!=null){t=n.b
s.$6(t,n.c,t,a,b,c)}if(n.f===1)if(!n.hC(c,n.b,n.c,a,b))return!1
if(a+b>=n.c)n.w=!0
return!0},
hC(a,b,c,d,e){if(b<=0||c<=0||d<0||e<0||d+e>c)return!1
return!0}}
A.ei.prototype={
fS(a,b){a.D()
this.r=0
this.w=a.d-a.b
this.x=b-16}}
A.fa.prototype={}
A.eQ.prototype={}
A.eR.prototype={}
A.dl.prototype={
gu(a){return this.a.length-this.b}}
A.dk.prototype={
bU(a,b){var t,s,r,q,p,o=b.cp()&255,n=this.a
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
o=o+t[s].b+((p&B.a.V(1,q)-1)>>>0)}else n=t
t=b.a
s=n.a
n=n.b+o
if(!(n>=0&&n<s.length))return A.a(s,n)
n=s[n]
b.a=t+n.a
return n.b}}
A.dm.prototype={}
A.eT.prototype={
dK(a){var t=this.b=this.a,s=A.jb(a)
t.e=a
t.b=t.a=s}}
A.d1.prototype={
ad(){return"WebPFormat."+this.b}}
A.d2.prototype={
gaJ(){return this.z.length},
$iF:1,
gK(){return this.a},
gI(){return this.b}}
A.dw.prototype={
gaJ(){return this.as}}
A.io.prototype={
bl(a){var t=A.p(u.L.a(a),!1,null,0)
this.b=t
if(!this.e6(t))return!1
return!0},
aM(a){var t,s=this,r=null,q=A.p(u.L.a(a),!1,r,0)
s.b=q
if(!s.e6(q))return r
q=new A.dw(B.Z,A.k([],u.J))
s.a=q
t=s.b
t.toString
if(!s.eL(t,q))return r
q=s.a
switch(q.f.a){case 3:q.as=q.z.length
return q
case 2:t=s.b
t.toString
t.d=q.ay
if(!A.jG(t,q).cl())return r
q=s.a
q.as=q.z.length
return q
case 1:t=s.b
t.toString
t.d=q.ay
if(!A.jE(t,q).cl())return r
q=s.a
q.as=q.z.length
return q
case 0:throw A.f(A.l("Unknown format for WebP"))}},
aI(a){var t,s,r,q=this,p=q.b
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
return q.dY(p.bK(t,s),a)}s=t.f
if(s===B.al)return A.jG(p.bK(t.ch,t.ay),t).bC()
else if(s===B.aM)return A.jE(p.bK(t.ch,t.ay),t).bC()
return null},
dY(a,b){var t,s,r,q=null,p=A.k([],u.J),o=new A.dw(B.Z,p)
if(!this.eL(a,o))return q
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
return this.dY(a.bK(p,t),b)}else{r=a.bK(o.ch,o.ay)
if(t===B.al)return A.jG(r,o).bC()
else if(t===B.aM)return A.jE(r,o).bC()}return q},
e6(a){if(a.af(4)!=="RIFF")return!1
a.k()
if(a.af(4)!=="WEBP")return!1
return!0},
eL(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
for(t=a.c,s=a.b;a.d<t;){r=a.af(4)
q=a.k()
p=q+1>>>1<<1>>>0
o=a.d
n=o-s
switch(r){case"VP8X":if(!this.hY(a,b))return!1
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
case"ANIM":b.f=B.kc
j=a.k()
o=new Uint8Array(4)
o[0]=j>>>8&255
o[1]=j>>>16&255
o[2]=j>>>24&255
o[3]=j&255
a.l()
break
case"ANMF":if(!this.hU(a,b,q))return!1
break
case"ICCP":b.toString
i=a.al(q)
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
hY(a,b){var t,s,r,q,p=a.D()
if((p&192)!==0)return!1
t=B.a.j(p,4)
s=B.a.j(p,1)
if((p&1)!==0)return!1
if(a.be()!==0)return!1
r=a.be()
q=a.be()
b.a=r+1
b.b=q+1
b.e=(s&1)!==0
b.d=(t&1)!==0
return!0},
hU(a,b,c){var t
a.be()
a.be()
a.be()
a.be()
a.be()
t=new A.fa()
t.fS(a,c)
if(t.r!==0)return!1
B.c.N(b.z,t)
return!0}}
A.eU.prototype={
ad(){return"IccProfileCompression."+this.b}}
A.cu.prototype={
j3(){var t,s=this
if(s.b===B.at)return s.c
t=B.aT.f_(u.L.a(s.c),null)
s.c=t
s.b=B.at
return t}}
A.hl.prototype={
ad(){return"FrameType."+this.b}}
A.b3.prototype={
gap(){var t=this.x
return t===$?this.x=A.k([],u.g):t},
fM(a,b,c,d){var t,s,r,q=this,p=a.gG(),o=a.gb2(),n=a.a
q.dW(d,b,p,o,n==null?null:n.gR())
p=a.b
if(p!=null)q.b=A.fl(p,u.N,u.I)
p=a.d
if(p!=null){o=u.N
q.d=A.fl(p,o,o)}B.c.N(q.gap(),q)
if(!c){t=a.gap().length
for(p=u.g,s=1;s<t;++s){r=a.x
if(r===$)r=a.x=A.k([],p)
if(!(s<r.length))return A.a(r,s)
q.bu(A.hs(r[s],b,!1,d))}}},
fL(a,b,c){var t,s,r,q,p=this,o=a.b
if(o!=null)p.b=A.fl(o,u.N,u.I)
o=a.d
if(o!=null){t=u.N
p.d=A.fl(o,t,t)}B.c.N(p.gap(),p)
if(!b&&a.gap().length>1){s=a.gap().length
for(o=u.g,r=1;r<s;++r){q=a.x
if(q===$)q=a.x=A.k([],o)
if(!(r<q.length))return A.a(q,r)
p.bu(A.cA(q[r],!1,!1))}}},
bu(a){var t=this
if(a==null)a=A.cA(t,!0,!0)
a.z=t.gap().length
if(t.gap().length===0||B.c.gf4(t.gap())!==a)B.c.N(t.gap(),a)
return a},
cU(){return this.bu(null)},
dW(a,b,c,d,e){var t,s,r=this,q=null
switch(c.a){case 0:if(e==null){t=B.b.aO(a*d/8)
s=new A.cD($,t,q,a,b,d)
t=Math.max(t*b,1)
s.d=new Uint8Array(t)
r.a=s}else{t=B.b.aO(a/8)
s=new A.cD($,t,e,a,b,1)
t=Math.max(t*b,1)
s.d=new Uint8Array(t)
r.a=s}break
case 1:if(e==null){t=B.b.aO(a*(d<<1>>>0)/8)
s=new A.cF($,t,q,a,b,d)
t=Math.max(t*b,1)
s.d=new Uint8Array(t)
r.a=s}else{t=B.b.aO(a/4)
s=new A.cF($,t,e,a,b,1)
t=Math.max(t*b,1)
s.d=new Uint8Array(t)
r.a=s}break
case 2:if(e==null){if(d===2)t=a
else if(d===4)t=a*2
else t=d===3?B.b.aO(a*1.5):B.b.aO(a/2)
s=new A.cH($,t,q,a,b,d)
t=Math.max(t*b,1)
s.d=new Uint8Array(t)
r.a=s}else{t=B.b.aO(a/2)
s=new A.cH($,t,e,a,b,1)
t=Math.max(t*b,1)
s.d=new Uint8Array(t)
r.a=s}break
case 3:if(e==null)r.a=A.kt(a,b,d)
else r.a=new A.cI(new Uint8Array(a*b),e,a,b,1)
break
case 4:t=a*b
if(e==null)r.a=new A.cE(new Uint16Array(t*d),q,a,b,d)
else r.a=new A.cE(new Uint16Array(t),e,a,b,1)
break
case 5:r.a=A.mz(a,b,d)
break
case 6:r.a=new A.ds(new Int8Array(a*b*d),a,b,d)
break
case 7:r.a=new A.dq(new Int16Array(a*b*d),a,b,d)
break
case 8:r.a=new A.dr(new Int32Array(a*b*d),a,b,d)
break
case 9:r.a=A.mx(a,b,d)
break
case 10:r.a=A.my(a,b,d)
break
case 11:r.a=new A.dp(new Float64Array(a*b*4*d),a,b,d)
break}},
C(a){var t=this
return"Image("+t.gK()+", "+t.gI()+", "+t.gG().b+", "+t.gb2()+")"},
gK(){var t=this.a
t=t==null?null:t.a
return t==null?0:t},
gI(){var t=this.a
t=t==null?null:t.b
return t==null?0:t},
gG(){var t=this.a
t=t==null?null:t.gG()
return t==null?B.f:t},
gbQ(){var t=this.e
return t==null?this.e=new A.bE(A.Q(u.N,u.P)):t},
fn(a,b){var t=this,s=t.b;(s==null?t.b=A.Q(u.N,u.I):s).i(0,a,b)
if(t.b.a===0)t.b=null},
gH(a){var t=this.a
return t.gH(t)},
gv(a){var t=this.a
t=t==null?null:t.gv(t)
if(t==null)t=B.e.gv(new Uint8Array(0))
return t},
gb2(){var t=this.a
t=t==null?null:t.gR()
t=t==null?null:t.b
if(t==null){t=this.a
t=t==null?null:t.c}return t==null?0:t},
gbk(){var t=this.a
return(t==null?null:t.gR())!=null},
gaB(){var t=this.a
t=t==null?null:t.gaB()
return t==null?0:t},
f1(a,b){return a>=0&&b>=0&&a<this.gK()&&b<this.gI()},
aG(a,b,c,d){var t=this.a
t=t==null?null:t.aG(a,b,c,d)
if(t==null)t=new A.bC(new Uint8Array(0))
return t},
S(a,b,c){var t=this.a
t=t==null?null:t.S(a,b,c)
return t==null?new A.C():t},
dD(a,b){return this.S(a,b,null)},
ai(a,b){if(a<0||a>=this.gK()||b<0||b>=this.gI())return new A.C()
return this.S(a,b,null)},
fi(a,b,c){switch(c.a){case 0:return this.ai(B.b.h(a),B.b.h(b))
case 1:case 3:return this.fj(a,b)
case 2:return this.fh(a,b)}},
fj(a,b){var t,s,r,q,p,o,n=this,m=B.b.h(a),l=m-(a>=0?0:1),k=l+1
m=B.b.h(b)
t=m-(b>=0?0:1)
s=t+1
m=new A.hv(a-l,b-t)
r=n.ai(l,t)
q=s>=n.gI()?r:n.ai(l,s)
p=k>=n.gK()?r:n.ai(k,t)
o=k>=n.gK()||s>=n.gI()?r:n.ai(k,s)
return n.aG(m.$4(r.gm(),p.gm(),q.gm(),o.gm()),m.$4(r.gp(),p.gp(),q.gp(),o.gp()),m.$4(r.gq(),p.gq(),q.gq(),o.gq()),m.$4(r.gt(),p.gt(),q.gt(),o.gt()))},
fh(d1,d2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=this,c6=B.b.h(d1),c7=c6-(d1>=0?0:1),c8=c7-1,c9=c7+1,d0=c7+2
c6=B.b.h(d2)
t=c6-(d2>=0?0:1)
s=t-1
r=t+1
q=t+2
p=d1-c7
o=d2-t
c6=new A.hu()
n=c5.ai(c7,t)
m=c8<0
l=!m
k=!l||s<0?n:c5.ai(c8,s)
j=m?n:c5.ai(c7,s)
i=s<0
h=i||c9>=c5.gK()?n:c5.ai(c9,s)
g=d0>=c5.gK()||i?n:c5.ai(d0,s)
f=c6.$5(p,k.gm(),j.gm(),h.gm(),g.gm())
e=c6.$5(p,k.gp(),j.gp(),h.gp(),g.gp())
d=c6.$5(p,k.gq(),j.gq(),h.gq(),g.gq())
c=c6.$5(p,k.gt(),j.gt(),h.gt(),g.gt())
b=m?n:c5.ai(c8,t)
a=c9>=c5.gK()?n:c5.ai(c9,t)
a0=d0>=c5.gK()?n:c5.ai(d0,t)
a1=c6.$5(p,b.gm(),n.gm(),a.gm(),a0.gm())
a2=c6.$5(p,b.gp(),n.gp(),a.gp(),a0.gp())
a3=c6.$5(p,b.gq(),n.gq(),a.gq(),a0.gq())
a4=c6.$5(p,b.gt(),n.gt(),a.gt(),a0.gt())
a5=!l||r>=c5.gI()?n:c5.ai(c8,r)
a6=r>=c5.gI()?n:c5.ai(c7,r)
a7=c9>=c5.gK()||r>=c5.gI()?n:c5.ai(c9,r)
a8=d0>=c5.gK()||r>=c5.gI()?n:c5.ai(d0,r)
a9=c6.$5(p,a5.gm(),a6.gm(),a7.gm(),a8.gm())
b0=c6.$5(p,a5.gp(),a6.gp(),a7.gp(),a8.gp())
b1=c6.$5(p,a5.gq(),a6.gq(),a7.gq(),a8.gq())
b2=c6.$5(p,a5.gt(),a6.gt(),a7.gt(),a8.gt())
b3=!l||q>=c5.gI()?n:c5.ai(c8,q)
b4=q>=c5.gI()?n:c5.ai(c7,q)
b5=c9>=c5.gK()||q>=c5.gI()?n:c5.ai(c9,q)
b6=d0>=c5.gK()||q>=c5.gI()?n:c5.ai(d0,q)
b7=c6.$5(p,b3.gm(),b4.gm(),b5.gm(),b6.gm())
b8=c6.$5(p,b3.gp(),b4.gp(),b5.gp(),b6.gp())
b9=c6.$5(p,b3.gq(),b4.gq(),b5.gq(),b6.gq())
c0=c6.$5(p,b3.gt(),b4.gt(),b5.gt(),b6.gt())
c1=c6.$5(o,f,a1,a9,b7)
c2=c6.$5(o,e,a2,b0,b8)
c3=c6.$5(o,d,a3,b1,b9)
c4=c6.$5(o,c,a4,b2,c0)
return c5.aG(B.b.h(c1),B.b.h(c2),B.b.h(c3),B.b.h(c4))},
bV(a,b,c){var t
if(u.dv.b(c))if(c.gb1().gR()!=null)if(this.gbk()){t=this.a
if(t!=null)t.a3(a,b,c.gM(),0,0)
return}t=this.a
if(t!=null)t.aj(a,b,c.gm(),c.gp(),c.gq(),c.gt())},
a3(a,b,c,d,e){var t=this.a
return t==null?null:t.a3(a,b,c,d,e)},
gB(){var t=this.a
t=t==null?null:t.gB()
return t==null?0:t},
aP(a,b){var t=this.a
return t==null?null:t.aP(0,b)},
cW(a){return this.aP(0,null)},
dv(a6,a7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null
if(a6==null)a6=a4.gG()
if(a7==null)a7=a4.gb2()
t=B.bN.n(0,a6)
s=!1
if(a6===a4.gG())if(a7===a4.gb2()){r=a4.a
s=(r==null?a5:r.gR())==null}if(s){q=A.cA(a4,!1,!1)
return q}for(s=a4.gap(),r=s.length,p=u.N,o=u.p,n=a5,m=0;m<s.length;s.length===r||(0,A.aa)(s),++m,n=e){l=s[m]
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
h=new A.cu(g,f,new Uint8Array(h.subarray(0,A.aJ(0,a5,h.length))))}g=l.w
q=A.M(a5,j,a6,l.y,g,k,h,l.r,a7,a5,B.f,i,!1)
k=l.d
q.sjG(k!=null?A.fl(k,p,p):a5)
if(n!=null){n.bu(q)
e=n}else e=q
k=q.a
d=k==null?a5:k.gR()
k=q.a
k=k==null?a5:k.gR()
c=k==null?a5:k.gG()
if(c==null)c=a6
k=l.a
if(d!=null){b=A.Q(o,o)
a=k==null?a5:k.S(0,0,a5)
if(a==null)a=new A.C()
for(k=q.a,k=k.gH(k),a0=a5,a1=0;k.F();){a2=k.gP()
a3=A.lA(B.b.cX(a.ga9()*255),B.b.cX(a.ga5()*255),B.b.cX(a.ga8()*255),0)
if(b.aH(a3)){j=b.n(0,a3)
j.toString
a2.sM(j)}else{b.i(0,a3,a1)
a2.sM(a1)
a0=A.lr(a,t,c,a7,a0)
d.aW(a1,a0.gm(),a0.gp(),a0.gq());++a1}a.F()}}else{a=k==null?a5:k.S(0,0,a5)
if(a==null)a=new A.C()
for(k=q.a,k=k.gH(k);k.F();){A.lr(a,t,a5,a5,k.gP())
a.F()}}}n.toString
return n},
eY(a){return this.dv(null,a)},
j4(a){return this.dv(a,null)},
j_(a){var t,s,r,q
u.ck.a(a)
if(this.d==null){t=u.N
this.d=A.Q(t,t)}for(t=new A.V(a,a.r,a.e,A.o(a).A("V<1>"));t.F();){s=t.d
r=this.d
r.toString
q=a.n(0,s)
q.toString
r.i(0,s,q)}},
h7(a,b,c){var t,s=65536
switch(b.a){case 0:return null
case 1:return null
case 2:return null
case 3:t=a===B.l?s:256
return new A.ay(new Uint8Array(t*c),t,c)
case 4:t=a===B.l?s:256
return new A.dU(new Uint16Array(t*c),t,c)
case 5:t=a===B.l?s:256
return new A.cO(new Uint32Array(t*c),t,c)
case 6:t=a===B.l?s:256
return new A.dT(new Int8Array(t*c),t,c)
case 7:t=a===B.l?s:256
return new A.dR(new Int16Array(t*c),t,c)
case 8:t=a===B.l?s:256
return new A.dS(new Int32Array(t*c),t,c)
case 9:t=a===B.l?s:256
return new A.dO(new Uint16Array(t*c),t,c)
case 10:t=a===B.l?s:256
return new A.dP(new Float32Array(t*c),t,c)
case 11:t=a===B.l?s:256
return new A.dQ(new Float64Array(t*c),t,c)}},
sjG(a){this.d=u.cZ.a(a)}}
A.hv.prototype={
$4(a,b,c,d){var t=this.b
return a+this.a*(b-a+t*(a+d-c-b))+t*(c-a)},
$S:21}
A.hu.prototype={
$5(a,b,c,d,e){var t=-b,s=a*a
return c+0.5*(a*(t+d)+s*(2*b-5*c+4*d-e)+s*a*(t+3*c-3*d+e))},
$S:22}
A.a5.prototype={
gR(){return null}}
A.cB.prototype={
ba(a){var t=this,s=t.d
if(a)s=new Uint16Array(s.length)
else s=new Uint16Array(A.w(s))
return new A.cB(s,t.a,t.b,t.c)},
gG(){return B.A},
gv(a){return B.u.gv(this.d)},
gaB(){return 16},
gaE(){return this.a*this.c*2},
gH(a){return A.jk(this)},
b5(a,b,c,d,e){return A.aG(A.jk(this),b,c,d,e)},
gu(a){return this.d.byteLength},
gB(){return 1},
gbb(){return!0},
aG(a,b,c,d){var t=new Uint16Array(4),s=new A.ch(t)
t[0]=A.G(a)
t[1]=A.G(b)
t[2]=A.G(c)
t[3]=A.G(d)
t=s
return t},
S(a,b,c){if(c==null||!(c instanceof A.bU)||c.d!==this)c=A.jk(this)
c.Z(a,b)
return c},
aD(a,b,c){var t,s=this.c,r=b*this.a*s+a*s
s=this.d
t=A.G(c)
s.$flags&2&&A.c(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=t},
a3(a,b,c,d,e){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=A.G(c)
p.$flags&2&&A.c(p)
t=p.length
if(!(q>=0&&q<t))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=A.G(d)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>2){r=q+2
o=A.G(e)
if(!(r<t))return A.a(p,r)
p[r]=o}}},
aj(a,b,c,d,e,f){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=A.G(c)
p.$flags&2&&A.c(p)
t=p.length
if(!(q>=0&&q<t))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=A.G(d)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>2){o=q+2
s=A.G(e)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>3){r=q+3
o=A.G(f)
if(!(r<t))return A.a(p,r)
p[r]=o}}}},
C(a){return"ImageDataFloat16("+this.a+", "+this.b+", "+this.c+")"},
aP(a,b){}}
A.cC.prototype={
ba(a){var t=this,s=t.d
if(a)s=new Float32Array(s.length)
else s=new Float32Array(A.w(s))
return new A.cC(s,t.a,t.b,t.c)},
gG(){return B.G},
gv(a){return B.ai.gv(this.d)},
gaB(){return 32},
gH(a){return A.jl(this)},
b5(a,b,c,d,e){return A.aG(A.jl(this),b,c,d,e)},
gu(a){return this.d.byteLength},
gB(){return 1},
gaE(){return this.a*this.c*4},
gbb(){return!0},
aG(a,b,c,d){var t=new Float32Array(4),s=new A.ci(t)
t[0]=a
t[1]=b
t[2]=c
t[3]=d
t=s
return t},
S(a,b,c){if(c==null||!(c instanceof A.bV)||c.d!==this)c=A.jl(this)
c.Z(a,b)
return c},
aD(a,b,c){var t=this.c,s=b*this.a*t+a*t
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
aj(a,b,c,d,e,f){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d
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
aP(a,b){}}
A.dp.prototype={
ba(a){var t=this,s=t.d
if(a)s=new Float64Array(s.length)
else s=new Float64Array(A.w(s))
return new A.dp(s,t.a,t.b,t.c)},
gG(){return B.I},
gv(a){return B.aj.gv(this.d)},
gu(a){return this.d.byteLength},
gaB(){return 64},
gH(a){return A.jm(this)},
b5(a,b,c,d,e){return A.aG(A.jm(this),b,c,d,e)},
gB(){return 1},
gaE(){return this.a*this.c*8},
gbb(){return!0},
aG(a,b,c,d){var t=new Float64Array(4),s=new A.cj(t)
t[0]=a
t[1]=b
t[2]=c
t[3]=d
t=s
return t},
S(a,b,c){if(c==null||!(c instanceof A.bW)||c.d!==this)c=A.jm(this)
c.Z(a,b)
return c},
aD(a,b,c){var t=this.c,s=b*this.a*t+a*t
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
aj(a,b,c,d,e,f){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d
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
aP(a,b){}}
A.dq.prototype={
ba(a){var t=this,s=t.d
if(a)s=new Int16Array(s.length)
else s=new Int16Array(A.w(s))
return new A.dq(s,t.a,t.b,t.c)},
gG(){return B.K},
gv(a){return B.aD.gv(this.d)},
gH(a){return A.jn(this)},
b5(a,b,c,d,e){return A.aG(A.jn(this),b,c,d,e)},
gu(a){return this.d.byteLength},
gB(){return 32767},
gbb(){return!0},
gaB(){return 16},
gaE(){return this.a*this.c*2},
aG(a,b,c,d){var t=B.b.h(a),s=B.b.h(b),r=B.b.h(c),q=B.b.h(d),p=new Int16Array(4),o=new A.ck(p)
p[0]=t
p[1]=s
p[2]=r
p[3]=q
t=o
return t},
S(a,b,c){if(c==null||!(c instanceof A.bX)||c.d!==this)c=A.jn(this)
c.Z(a,b)
return c},
aD(a,b,c){var t,s=this.c,r=b*this.a*s+a*s
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
aj(a,b,c,d,e,f){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.b.h(c)
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
aP(a,b){}}
A.dr.prototype={
ba(a){var t=this,s=t.d
if(a)s=new Int32Array(s.length)
else s=new Int32Array(A.w(s))
return new A.dr(s,t.a,t.b,t.c)},
gG(){return B.L},
gv(a){return B.R.gv(this.d)},
gaB(){return 32},
gaE(){return this.a*this.c*4},
gH(a){return A.jo(this)},
b5(a,b,c,d,e){return A.aG(A.jo(this),b,c,d,e)},
gu(a){return this.d.byteLength},
gB(){return 2147483647},
gbb(){return!0},
aG(a,b,c,d){var t=B.b.h(a),s=B.b.h(b),r=B.b.h(c),q=B.b.h(d),p=new Int32Array(4),o=new A.cl(p)
p[0]=t
p[1]=s
p[2]=r
p[3]=q
t=o
return t},
S(a,b,c){if(c==null||!(c instanceof A.bY)||c.d!==this)c=A.jo(this)
c.Z(a,b)
return c},
aD(a,b,c){var t,s=this.c,r=b*this.a*s+a*s
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
aj(a,b,c,d,e,f){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.b.h(c)
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
aP(a,b){}}
A.ds.prototype={
ba(a){var t=this,s=t.d
if(a)s=new Int8Array(s.length)
else s=new Int8Array(A.w(s))
return new A.ds(s,t.a,t.b,t.c)},
gG(){return B.J},
gv(a){return B.aE.gv(this.d)},
gaE(){return this.a*this.c},
gH(a){return A.jp(this)},
b5(a,b,c,d,e){return A.aG(A.jp(this),b,c,d,e)},
gu(a){return this.d.byteLength},
gB(){return 127},
gbb(){return!0},
gaB(){return 8},
aG(a,b,c,d){var t=B.b.h(a),s=B.b.h(b),r=B.b.h(c),q=B.b.h(d),p=new Int8Array(4),o=new A.cm(p)
p[0]=t
p[1]=s
p[2]=r
p[3]=q
t=o
return t},
S(a,b,c){if(c==null||!(c instanceof A.bZ)||c.d!==this)c=A.jp(this)
c.Z(a,b)
return c},
aD(a,b,c){var t,s=this.c,r=b*(this.a*s)+a*s
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
aj(a,b,c,d,e,f){var t,s,r=this.c,q=b*(this.a*r)+a*r,p=this.d,o=B.b.h(c)
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
aP(a,b){}}
A.cD.prototype={
jQ(a,b,c){var t=Math.max(this.e*b,1)
t=new Uint8Array(t)
this.d!==$&&A.jW()
this.d=t},
ba(a){var t,s=this,r=s.d
if(a){r===$&&A.b()
r=new Uint8Array(r.length)}else{r===$&&A.b()
r=new Uint8Array(A.w(r))}t=s.f
t=t==null?null:t.O()
return new A.cD(r,s.e,t,s.a,s.b,s.c)},
gG(){return B.v},
gu(a){var t=this.d
t===$&&A.b()
return t.byteLength},
gB(){var t=this.f
t=t==null?null:t.gB()
return t==null?1:t},
gbb(){return!1},
gv(a){var t=this.d
t===$&&A.b()
return B.e.gv(t)},
gaB(){return 1},
gH(a){return A.dV(this)},
b5(a,b,c,d,e){return A.aG(A.dV(this),b,c,d,e)},
aG(a,b,c,d){var t=new A.co(4,0)
t.a7(B.b.h(a),B.b.h(b),B.b.h(c),B.b.h(d))
return t},
S(a,b,c){if(c==null||!(c instanceof A.c_)||c.f!==this)c=A.dV(this)
c.Z(a,b)
return c},
aD(a,b,c){var t,s=this
if(s.c<1)return
t=s.r;(t==null?s.r=A.dV(s):t).Z(a,b)
s.r.am(0,c)},
a3(a,b,c,d,e){var t,s=this
if(s.c<1)return
t=s.r;(t==null?s.r=A.dV(s):t).Z(a,b)
s.r.ak(c,d,e)},
aj(a,b,c,d,e,f){var t,s=this
if(s.c<1)return
t=s.r;(t==null?s.r=A.dV(s):t).Z(a,b)
s.r.a7(c,d,e,f)},
C(a){return"ImageDataUint1("+this.a+", "+this.b+", "+this.c+")"},
aP(a,b){},
gaE(){return this.e},
gR(){return this.f}}
A.cE.prototype={
ba(a){var t,s=this,r=s.d
if(a)r=new Uint16Array(r.length)
else r=new Uint16Array(A.w(r))
t=s.e
t=t==null?null:t.O()
return new A.cE(r,t,s.a,s.b,s.c)},
gG(){return B.l},
gv(a){return B.u.gv(this.d)},
gaB(){return 16},
gB(){var t=this.e
t=t==null?null:t.gB()
return t==null?65535:t},
gaE(){return this.a*this.c*2},
gH(a){return A.jq(this)},
b5(a,b,c,d,e){return A.aG(A.jq(this),b,c,d,e)},
gu(a){return this.d.byteLength},
gbb(){return!0},
aG(a,b,c,d){var t=B.b.h(a),s=B.b.h(b),r=B.b.h(c),q=B.b.h(d),p=new Uint16Array(4),o=new A.cp(p)
p[0]=t
p[1]=s
p[2]=r
p[3]=q
t=o
return t},
S(a,b,c){if(c==null||!(c instanceof A.c0)||c.d!==this)c=A.jq(this)
c.Z(a,b)
return c},
aD(a,b,c){var t,s=this.c,r=b*this.a*s+a*s
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
aj(a,b,c,d,e,f){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.b.h(c)
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
aP(a,b){},
gR(){return this.e}}
A.cF.prototype={
jR(a,b,c){var t=Math.max(this.e*b,1)
t=new Uint8Array(t)
this.d!==$&&A.jW()
this.d=t},
ba(a){var t,s=this,r=s.d
if(a){r===$&&A.b()
r=new Uint8Array(r.length)}else{r===$&&A.b()
r=new Uint8Array(A.w(r))}t=s.f
t=t==null?null:t.O()
return new A.cF(r,s.e,t,s.a,s.b,s.c)},
gG(){return B.x},
gaB(){return 2},
gv(a){var t=this.d
t===$&&A.b()
return B.e.gv(t)},
gH(a){return A.dW(this)},
b5(a,b,c,d,e){return A.aG(A.dW(this),b,c,d,e)},
gu(a){var t=this.d
t===$&&A.b()
return t.byteLength},
gB(){var t=this.f
t=t==null?null:t.gB()
return t==null?3:t},
gbb(){return!1},
aG(a,b,c,d){var t=new A.cq(4,0)
t.a7(B.b.h(a),B.b.h(b),B.b.h(c),B.b.h(d))
return t},
S(a,b,c){if(c==null||!(c instanceof A.c1)||c.f!==this)c=A.dW(this)
c.Z(a,b)
return c},
aD(a,b,c){var t,s=this
if(s.c<1)return
t=s.r;(t==null?s.r=A.dW(s):t).Z(a,b)
s.r.an(0,c)},
a3(a,b,c,d,e){var t,s=this
if(s.c<1)return
t=s.r;(t==null?s.r=A.dW(s):t).Z(a,b)
s.r.ak(c,d,e)},
aj(a,b,c,d,e,f){var t,s=this
if(s.c<1)return
t=s.r;(t==null?s.r=A.dW(s):t).Z(a,b)
s.r.a7(c,d,e,f)},
C(a){return"ImageDataUint2("+this.a+", "+this.b+", "+this.c+")"},
aP(a,b){},
gaE(){return this.e},
gR(){return this.f}}
A.cG.prototype={
ba(a){var t=this,s=t.d
if(a)s=new Uint32Array(s.length)
else s=new Uint32Array(A.w(s))
return new A.cG(s,t.a,t.b,t.c)},
gG(){return B.H},
gv(a){return B.n.gv(this.d)},
gaE(){return this.a*this.c*4},
gaB(){return 32},
gB(){return 4294967295},
gH(a){return A.jr(this)},
b5(a,b,c,d,e){return A.aG(A.jr(this),b,c,d,e)},
gu(a){return this.d.byteLength},
gbb(){return!0},
aG(a,b,c,d){var t=B.b.h(a),s=B.b.h(b),r=B.b.h(c),q=B.b.h(d),p=new Uint32Array(4),o=new A.cr(p)
p[0]=t
p[1]=s
p[2]=r
p[3]=q
t=o
return t},
S(a,b,c){if(c==null||!(c instanceof A.c2)||c.d!==this)c=A.jr(this)
c.Z(a,b)
return c},
aD(a,b,c){var t,s=this.c,r=b*this.a*s+a*s
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
aj(a,b,c,d,e,f){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.b.h(c)
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
aP(a,b){}}
A.cH.prototype={
jS(a,b,c){var t=Math.max(this.e*b,1)
t=new Uint8Array(t)
this.d!==$&&A.jW()
this.d=t},
ba(a){var t,s=this,r=s.d
if(a){r===$&&A.b()
r=new Uint8Array(r.length)}else{r===$&&A.b()
r=new Uint8Array(A.w(r))}t=s.f
t=t==null?null:t.O()
return new A.cH(r,s.e,t,s.a,s.b,s.c)},
gG(){return B.y},
gv(a){var t=this.d
t===$&&A.b()
return B.e.gv(t)},
gH(a){return A.dX(this)},
b5(a,b,c,d,e){return A.aG(A.dX(this),b,c,d,e)},
gu(a){var t=this.d
t===$&&A.b()
return t.byteLength},
gB(){var t=this.f
t=t==null?null:t.gB()
return t==null?15:t},
gbb(){return!1},
gaB(){return 4},
aG(a,b,c,d){var t=B.b.h(a),s=B.b.h(b),r=B.b.h(c),q=B.b.h(d),p=new A.cs(4,new Uint8Array(2))
p.a7(t,s,r,q)
t=p
return t},
S(a,b,c){if(c==null||!(c instanceof A.c3)||c.e!==this)c=A.dX(this)
c.Z(a,b)
return c},
aD(a,b,c){var t,s=this
if(s.c<1)return
t=s.r;(t==null?s.r=A.dX(s):t).Z(a,b)
s.r.ao(0,c)},
a3(a,b,c,d,e){var t,s=this
if(s.c<1)return
t=s.r;(t==null?s.r=A.dX(s):t).Z(a,b)
s.r.ak(c,d,e)},
aj(a,b,c,d,e,f){var t,s=this
if(s.c<1)return
t=s.r;(t==null?s.r=A.dX(s):t).Z(a,b)
s.r.a7(c,d,e,f)},
C(a){return"ImageDataUint4("+this.a+", "+this.b+", "+this.c+")"},
aP(a,b){},
gaE(){return this.e},
gR(){return this.f}}
A.cI.prototype={
ba(a){var t,s=this,r=s.d
if(a)r=new Uint8Array(r.length)
else r=new Uint8Array(A.w(r))
t=s.e
t=t==null?null:t.O()
return new A.cI(r,t,s.a,s.b,s.c)},
gG(){return B.f},
gv(a){return B.e.gv(this.d)},
gaE(){return this.a*this.c},
gaB(){return 8},
gH(a){return A.hR(this)},
b5(a,b,c,d,e){return A.aG(A.hR(this),b,c,d,e)},
gu(a){return this.d.byteLength},
gB(){var t=this.e
t=t==null?null:t.gB()
return t==null?255:t},
gbb(){return!1},
aG(a,b,c,d){var t=A.mg(B.b.h(B.b.J(a,0,255)),B.b.h(B.b.J(b,0,255)),B.b.h(B.b.J(c,0,255)),B.b.h(B.b.J(d,0,255)))
return t},
S(a,b,c){if(c==null||!(c instanceof A.c4)||c.d!==this)c=A.hR(this)
c.Z(a,b)
return c},
aD(a,b,c){var t,s=this.c,r=b*(this.a*s)+a*s
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
aj(a,b,c,d,e,f){var t,s,r=this.c,q=b*(this.a*r)+a*r,p=this.d,o=B.b.h(c)
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
aP(a,b){var t,s,r,q,p,o,n,m=this,l=m.c
if(l===1){l=m.d
B.e.aw(l,0,l.length,0)}else if(l===2){t=J.m3(B.e.gv(m.d),0,null)
B.u.aw(t,0,t.length,0)}else if(l===4){s=J.ak(B.e.gv(m.d),0,null)
B.n.aw(s,0,s.length,0)}else for(r=A.hR(m),l=r.d,q=l.c>0,l=l.d,p=l.$flags|0;r.F();){if(q){o=r.c
n=B.b.h(B.a.J(0,0,255))
p&2&&A.c(l)
if(!(o>=0&&o<l.length))return A.a(l,o)
l[o]=n}r.sp(0)
r.sq(0)}},
gR(){return this.e}}
A.fb.prototype={
ad(){return"Interpolation."+this.b}}
A.ax.prototype={}
A.dO.prototype={
O(){return new A.dO(new Uint16Array(A.w(this.c)),this.a,this.b)},
gv(a){return B.u.gv(this.c)},
gG(){return B.A},
gB(){return 1},
U(a,b,c){var t,s,r=this.b
if(b<r){t=this.c
r=a*r+b
s=A.G(c)
t.$flags&2&&A.c(t)
if(!(r>=0&&r<t.length))return A.a(t,r)
t[r]=s}},
aW(a,b,c,d){var t,s,r,q,p=this.b
a*=p
t=this.c
s=A.G(b)
t.$flags&2&&A.c(t)
r=t.length
if(!(a>=0&&a<r))return A.a(t,a)
t[a]=s
if(p>1){s=a+1
q=A.G(c)
if(!(s<r))return A.a(t,s)
t[s]=q
if(p>2){p=a+2
s=A.G(d)
if(!(p<r))return A.a(t,p)
t[p]=s}}},
aS(a,b){var t,s=this.b
if(b<s){t=this.c
s=a*s+b
if(!(s>=0&&s<t.length))return A.a(t,s)
s=t[s]
t=$.K
t=t!=null?t:A.N()
if(!(s<t.length))return A.a(t,s)
s=t[s]}else s=0
return s},
aV(a){var t,s
a*=this.b
t=this.c
if(!(a>=0&&a<t.length))return A.a(t,a)
t=t[a]
s=$.K
s=s!=null?s:A.N()
if(!(t<s.length))return A.a(s,t)
return s[t]},
aU(a){var t,s=this.b
if(s<2)return 0
t=this.c
s=a*s+1
if(!(s>=0&&s<t.length))return A.a(t,s)
s=t[s]
t=$.K
t=t!=null?t:A.N()
if(!(s<t.length))return A.a(t,s)
return t[s]},
aT(a){var t,s=this.b
if(s<3)return 0
t=this.c
s=a*s+2
if(!(s>=0&&s<t.length))return A.a(t,s)
s=t[s]
t=$.K
t=t!=null?t:A.N()
if(!(s<t.length))return A.a(t,s)
return t[s]},
b4(a){var t,s=this.b
if(s<4)return 0
t=this.c
s=a*s+3
if(!(s>=0&&s<t.length))return A.a(t,s)
s=t[s]
t=$.K
t=t!=null?t:A.N()
if(!(s<t.length))return A.a(t,s)
return t[s]},
br(a,b){return this.U(a,0,b)},
bp(a,b){return this.U(a,1,b)},
bo(a,b){return this.U(a,2,b)},
bn(a,b){return this.U(a,3,b)}}
A.dP.prototype={
O(){return new A.dP(new Float32Array(A.w(this.c)),this.a,this.b)},
gv(a){return B.ai.gv(this.c)},
gG(){return B.G},
gB(){return 1},
U(a,b,c){var t,s=this.b
if(b<s){t=this.c
s=a*s+b
t.$flags&2&&A.c(t)
if(!(s>=0&&s<t.length))return A.a(t,s)
t[s]=c}},
aW(a,b,c,d){var t,s,r,q=this.b
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
aS(a,b){var t,s=this.b
if(b<s){t=this.c
s=a*s+b
if(!(s>=0&&s<t.length))return A.a(t,s)
s=t[s]}else s=0
return s},
aV(a){var t
a*=this.b
t=this.c
if(!(a>=0&&a<t.length))return A.a(t,a)
return t[a]},
aU(a){var t,s=this.b
if(s<2)return 0
t=this.c
s=a*s+1
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
aT(a){var t,s=this.b
if(s<3)return 0
t=this.c
s=a*s+2
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
b4(a){var t,s=this.b
if(s<4)return 0
t=this.c
s=a*s+3
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
br(a,b){return this.U(a,0,b)},
bp(a,b){return this.U(a,1,b)},
bo(a,b){return this.U(a,2,b)},
bn(a,b){return this.U(a,3,b)}}
A.dQ.prototype={
O(){return new A.dQ(new Float64Array(A.w(this.c)),this.a,this.b)},
gv(a){return B.aj.gv(this.c)},
gG(){return B.I},
gB(){return 1},
U(a,b,c){var t,s=this.b
if(b<s){t=this.c
s=a*s+b
t.$flags&2&&A.c(t)
if(!(s>=0&&s<t.length))return A.a(t,s)
t[s]=c}},
aW(a,b,c,d){var t,s,r,q=this.b
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
aS(a,b){var t,s=this.b
if(b<s){t=this.c
s=a*s+b
if(!(s>=0&&s<t.length))return A.a(t,s)
s=t[s]}else s=0
return s},
aV(a){var t
a*=this.b
t=this.c
if(!(a>=0&&a<t.length))return A.a(t,a)
return t[a]},
aU(a){var t,s=this.b
if(s<2)return 0
t=this.c
s=a*s+1
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
aT(a){var t,s=this.b
if(s<3)return 0
t=this.c
s=a*s+2
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
b4(a){var t,s=this.b
if(s<4)return 0
t=this.c
s=a*s+3
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
br(a,b){return this.U(a,0,b)},
bp(a,b){return this.U(a,1,b)},
bo(a,b){return this.U(a,2,b)},
bn(a,b){return this.U(a,3,b)}}
A.dR.prototype={
O(){return new A.dR(new Int16Array(A.w(this.c)),this.a,this.b)},
gv(a){return B.aD.gv(this.c)},
gG(){return B.K},
gB(){return 32767},
U(a,b,c){var t,s,r=this.b
if(b<r){t=this.c
r=a*r+b
s=B.a.h(c)
t.$flags&2&&A.c(t)
if(!(r>=0&&r<t.length))return A.a(t,r)
t[r]=s}},
aW(a,b,c,d){var t,s,r,q,p=this.b
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
aS(a,b){var t,s=this.b
if(b<s){t=this.c
s=a*s+b
if(!(s>=0&&s<t.length))return A.a(t,s)
s=t[s]}else s=0
return s},
aV(a){var t
a*=this.b
t=this.c
if(!(a>=0&&a<t.length))return A.a(t,a)
return t[a]},
aU(a){var t,s=this.b
if(s<2)return 0
t=this.c
s=a*s+1
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
aT(a){var t,s=this.b
if(s<3)return 0
t=this.c
s=a*s+2
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
b4(a){var t,s=this.b
if(s<4)return 0
t=this.c
s=a*s+3
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
br(a,b){return this.U(a,0,b)},
bp(a,b){return this.U(a,1,b)},
bo(a,b){return this.U(a,2,b)},
bn(a,b){return this.U(a,3,b)}}
A.dS.prototype={
O(){return new A.dS(new Int32Array(A.w(this.c)),this.a,this.b)},
gv(a){return B.R.gv(this.c)},
gG(){return B.L},
gB(){return 2147483647},
U(a,b,c){var t,s,r=this.b
if(b<r){t=this.c
r=a*r+b
s=B.a.h(c)
t.$flags&2&&A.c(t)
if(!(r>=0&&r<t.length))return A.a(t,r)
t[r]=s}},
aW(a,b,c,d){var t,s,r,q,p=this.b
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
aS(a,b){var t,s=this.b
if(b<s){t=this.c
s=a*s+b
if(!(s>=0&&s<t.length))return A.a(t,s)
s=t[s]}else s=0
return s},
aV(a){var t
a*=this.b
t=this.c
if(!(a>=0&&a<t.length))return A.a(t,a)
return t[a]},
aU(a){var t,s=this.b
if(s<2)return 0
t=this.c
s=a*s+1
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
aT(a){var t,s=this.b
if(s<3)return 0
t=this.c
s=a*s+2
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
b4(a){var t,s=this.b
if(s<4)return 0
t=this.c
s=a*s+3
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
br(a,b){return this.U(a,0,b)},
bp(a,b){return this.U(a,1,b)},
bo(a,b){return this.U(a,2,b)},
bn(a,b){return this.U(a,3,b)}}
A.dT.prototype={
O(){return new A.dT(new Int8Array(A.w(this.c)),this.a,this.b)},
gv(a){return B.aE.gv(this.c)},
gG(){return B.J},
gB(){return 127},
U(a,b,c){var t,s,r=this.b
if(b<r){t=this.c
r=a*r+b
s=B.a.h(c)
t.$flags&2&&A.c(t)
if(!(r>=0&&r<t.length))return A.a(t,r)
t[r]=s}},
aW(a,b,c,d){var t,s,r,q,p=this.b
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
aS(a,b){var t,s=this.b
if(b<s){t=this.c
s=a*s+b
if(!(s>=0&&s<t.length))return A.a(t,s)
s=t[s]}else s=0
return s},
aV(a){var t
a*=this.b
t=this.c
if(!(a>=0&&a<t.length))return A.a(t,a)
return t[a]},
aU(a){var t,s=this.b
if(s<2)return 0
t=this.c
s=a*s+1
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
aT(a){var t,s=this.b
if(s<3)return 0
t=this.c
s=a*s+2
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
b4(a){var t,s=this.b
if(s<4)return 0
t=this.c
s=a*s+3
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
br(a,b){return this.U(a,0,b)},
bp(a,b){return this.U(a,1,b)},
bo(a,b){return this.U(a,2,b)},
bn(a,b){return this.U(a,3,b)}}
A.dU.prototype={
O(){return new A.dU(new Uint16Array(A.w(this.c)),this.a,this.b)},
gv(a){return B.u.gv(this.c)},
gG(){return B.l},
gB(){return 65535},
U(a,b,c){var t,s,r=this.b
if(b<r){t=this.c
r=a*r+b
s=B.a.h(c)
t.$flags&2&&A.c(t)
if(!(r>=0&&r<t.length))return A.a(t,r)
t[r]=s}},
aW(a,b,c,d){var t,s,r,q,p=this.b
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
aS(a,b){var t,s=this.b
if(b<s){t=this.c
s=a*s+b
if(!(s>=0&&s<t.length))return A.a(t,s)
s=t[s]}else s=0
return s},
aV(a){var t
a*=this.b
t=this.c
if(!(a>=0&&a<t.length))return A.a(t,a)
return t[a]},
aU(a){var t,s=this.b
if(s<2)return 0
t=this.c
s=a*s+1
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
aT(a){var t,s=this.b
if(s<3)return 0
t=this.c
s=a*s+2
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
b4(a){var t,s=this.b
if(s<4)return 0
t=this.c
s=a*s+3
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
br(a,b){return this.U(a,0,b)},
bp(a,b){return this.U(a,1,b)},
bo(a,b){return this.U(a,2,b)},
bn(a,b){return this.U(a,3,b)}}
A.cO.prototype={
O(){return new A.cO(new Uint32Array(A.w(this.c)),this.a,this.b)},
gv(a){return B.n.gv(this.c)},
gG(){return B.H},
gB(){return 4294967295},
U(a,b,c){var t,s,r=this.b
if(b<r){t=this.c
r=a*r+b
s=B.a.h(c)
t.$flags&2&&A.c(t)
if(!(r>=0&&r<t.length))return A.a(t,r)
t[r]=s}},
aW(a,b,c,d){var t,s,r,q,p=this.b
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
aS(a,b){var t,s=this.b
if(b<s){t=this.c
s=a*s+b
if(!(s>=0&&s<t.length))return A.a(t,s)
s=t[s]}else s=0
return s},
aV(a){var t
a*=this.b
t=this.c
if(!(a>=0&&a<t.length))return A.a(t,a)
return t[a]},
aU(a){var t,s=this.b
if(s<2)return 0
t=this.c
s=a*s+1
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
aT(a){var t,s=this.b
if(s<3)return 0
t=this.c
s=a*s+2
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
b4(a){var t,s=this.b
if(s<4)return 0
t=this.c
s=a*s+3
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
br(a,b){return this.U(a,0,b)},
bp(a,b){return this.U(a,1,b)},
bo(a,b){return this.U(a,2,b)},
bn(a,b){return this.U(a,3,b)}}
A.ay.prototype={
O(){return A.kG(this)},
gv(a){return B.e.gv(this.c)},
gG(){return B.f},
gB(){return 255},
U(a,b,c){var t,s,r=this.b
if(b<r){t=this.c
r=a*r+b
s=B.a.h(c)
t.$flags&2&&A.c(t)
if(!(r>=0&&r<t.length))return A.a(t,r)
t[r]=s}},
aW(a,b,c,d){var t,s,r,q,p=this.b
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
aS(a,b){var t,s=this.b
if(b<s){t=this.c
s=a*s+b
if(!(s>=0&&s<t.length))return A.a(t,s)
s=t[s]}else s=0
return s},
aV(a){var t,s
a*=this.b
t=this.c
s=t.length
if(a>=s)return 0
if(!(a>=0))return A.a(t,a)
return t[a]},
aU(a){var t,s,r=this.b
if(r<2)return 0
a*=r
r=this.c
t=r.length
if(a>=t)return 0
s=a+1
if(!(s>=0&&s<t))return A.a(r,s)
return r[s]},
aT(a){var t,s,r=this.b
if(r<3)return 0
a*=r
r=this.c
t=r.length
if(a>=t)return 0
s=a+2
if(!(s>=0&&s<t))return A.a(r,s)
return r[s]},
b4(a){var t,s,r=this.b
if(r<4)return 255
a*=r
r=this.c
t=r.length
if(a>=t)return 0
s=a+3
if(!(s>=0&&s<t))return A.a(r,s)
return r[s]},
br(a,b){return this.U(a,0,b)},
bp(a,b){return this.U(a,1,b)},
bo(a,b){return this.U(a,2,b)},
bn(a,b){return this.U(a,3,b)}}
A.bU.prototype={
O(){var t=this
return new A.bU(t.a,t.b,t.c,t.d)},
gG(){return B.A},
gu(a){return this.d.c},
gR(){return null},
gB(){return 1},
gaR(){return this.a},
gaL(){return this.b},
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
s=$.K
s=s!=null?s:A.N()
if(!(t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
i(a,b,c){var t,s,r=this.d
if(b<r.c){r=r.d
t=this.c+b
s=A.G(c)
r.$flags&2&&A.c(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gM(){return this.gm()},
sM(a){this.sm(a)},
gm(){var t,s=this.d
if(s.c>0){s=s.d
t=this.c
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=$.K
s=s!=null?s:A.N()
if(!(t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sm(a){var t,s,r=this.d
if(r.c>0){r=r.d
t=this.c
s=A.G(a)
r.$flags&2&&A.c(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gp(){var t,s=this.d
if(s.c>1){s=s.d
t=this.c+1
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=$.K
s=s!=null?s:A.N()
if(!(t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sp(a){var t,s,r=this.d
if(r.c>1){r=r.d
t=this.c+1
s=A.G(a)
r.$flags&2&&A.c(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gq(){var t,s=this.d
if(s.c>2){s=s.d
t=this.c+2
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=$.K
s=s!=null?s:A.N()
if(!(t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sq(a){var t,s,r=this.d
if(r.c>2){r=r.d
t=this.c+2
s=A.G(a)
r.$flags&2&&A.c(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gt(){var t,s=this.d
if(s.c>3){s=s.d
t=this.c+3
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=$.K
s=s!=null?s:A.N()
if(!(t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
st(a){var t,s,r,q=this.d
if(q.c>3){t=this.gp()
q=q.d
s=this.c+3
r=A.G(t)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
ga9(){return this.gm()/1},
sa9(a){this.sm(a)},
ga5(){return this.gp()/1},
sa5(a){this.sp(a)},
ga8(){return this.gq()/1},
sa8(a){this.sq(a)},
gab(){return this.gt()/1},
sab(a){this.st(a)},
gag(){return A.U(this)},
ac(a){var t=this
if(t.d.c>0){t.sm(a.gm())
t.sp(a.gp())
t.sq(a.gq())
t.st(a.gt())}},
ak(a,b,c){var t,s,r,q=this,p=q.d,o=p.c
if(o>0){p=p.d
t=q.c
s=A.G(a)
p.$flags&2&&A.c(p)
r=p.length
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>1){t=q.c+1
s=A.G(b)
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>2){o=q.c+2
t=A.G(c)
if(!(o>=0&&o<r))return A.a(p,o)
p[o]=t}}}},
a7(a,b,c,d){var t,s,r,q=this,p=q.d,o=p.c
if(o>0){p=p.d
t=q.c
s=A.G(a)
p.$flags&2&&A.c(p)
r=p.length
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>1){t=q.c+1
s=A.G(b)
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>2){t=q.c+2
s=A.G(c)
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>3){o=q.c+3
t=A.G(d)
if(!(o>=0&&o<r))return A.a(p,o)
p[o]=t}}}}},
gH(a){return new A.J(this)},
T(a,b){var t,s,r,q,p,o=this
if(b==null)return!1
if(b instanceof A.bU){t=A.t(o,A.o(o).A("e.E"))
t=A.m(t)
s=A.t(b,A.o(b).A("e.E"))
return t===A.m(s)}if(u.L.b(b)){t=J.a1(b)
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
return A.m(t)},
$iB:1,
$iy:1,
$iq:1,
gb1(){return this.d}}
A.bV.prototype={
O(){var t=this
return new A.bV(t.a,t.b,t.c,t.d)},
gu(a){return this.d.c},
gR(){return null},
gB(){return 1},
gG(){return B.G},
gaR(){return this.a},
gaL(){return this.b},
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
gM(){return this.gm()},
sM(a){this.sm(a)},
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
gab(){return this.gt()/1},
sab(a){this.st(a)},
gag(){return A.U(this)},
ac(a){var t=this
t.sm(a.gm())
t.sp(a.gp())
t.sq(a.gq())
t.st(a.gt())},
ak(a,b,c){var t,s,r=this.d,q=r.d,p=this.c
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
gH(a){return new A.J(this)},
T(a,b){var t,s,r,q,p,o=this
if(b==null)return!1
if(b instanceof A.bV){t=A.t(o,A.o(o).A("e.E"))
t=A.m(t)
s=A.t(b,A.o(b).A("e.E"))
return t===A.m(s)}if(u.L.b(b)){t=J.a1(b)
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
return A.m(t)},
$iB:1,
$iy:1,
$iq:1,
gb1(){return this.d}}
A.bW.prototype={
O(){var t=this
return new A.bW(t.a,t.b,t.c,t.d)},
gu(a){return this.d.c},
gR(){return null},
gB(){return 1},
gG(){return B.I},
gaR(){return this.a},
gaL(){return this.b},
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
gM(){return this.gm()},
sM(a){this.sm(a)},
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
gab(){return this.gt()/1},
sab(a){this.st(a)},
gag(){return A.U(this)},
ac(a){var t=this
t.sm(a.gm())
t.sp(a.gp())
t.sq(a.gq())
t.st(a.gt())},
ak(a,b,c){var t,s,r=this.d,q=r.d,p=this.c
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
gH(a){return new A.J(this)},
T(a,b){var t,s,r,q,p,o=this
if(b==null)return!1
if(b instanceof A.bW){t=A.t(o,A.o(o).A("e.E"))
t=A.m(t)
s=A.t(b,A.o(b).A("e.E"))
return t===A.m(s)}if(u.L.b(b)){t=J.a1(b)
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
return A.m(t)},
$iB:1,
$iy:1,
$iq:1,
gb1(){return this.d}}
A.bX.prototype={
O(){var t=this
return new A.bX(t.a,t.b,t.c,t.d)},
gu(a){return this.d.c},
gR(){return null},
gB(){return 32767},
gG(){return B.K},
gaR(){return this.a},
gaL(){return this.b},
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
gM(){return this.gm()},
sM(a){this.sm(a)},
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
gab(){return this.gt()/32767},
sab(a){this.st(a*32767)},
gag(){return A.U(this)},
ac(a){var t=this
t.sm(a.gm())
t.sp(a.gp())
t.sq(a.gq())
t.st(a.gt())},
ak(a,b,c){var t,s,r,q,p=this.d,o=p.c
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
gH(a){return new A.J(this)},
T(a,b){var t,s,r,q,p,o=this
if(b==null)return!1
if(b instanceof A.bX){t=A.t(o,A.o(o).A("e.E"))
t=A.m(t)
s=A.t(b,A.o(b).A("e.E"))
return t===A.m(s)}if(u.L.b(b)){t=J.a1(b)
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
return A.m(t)},
$iB:1,
$iy:1,
$iq:1,
gb1(){return this.d}}
A.bY.prototype={
O(){var t=this
return new A.bY(t.a,t.b,t.c,t.d)},
gu(a){return this.d.c},
gR(){return null},
gB(){return 2147483647},
gG(){return B.L},
gaR(){return this.a},
gaL(){return this.b},
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
gM(){return this.gm()},
sM(a){this.sm(a)},
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
gab(){return this.gt()/2147483647},
sab(a){this.st(a*2147483647)},
gag(){return A.U(this)},
ac(a){var t=this
t.sm(a.gm())
t.sp(a.gp())
t.sq(a.gq())
t.st(a.gt())},
ak(a,b,c){var t,s,r,q,p=this.d,o=p.c
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
gH(a){return new A.J(this)},
T(a,b){var t,s,r,q,p,o=this
if(b==null)return!1
if(b instanceof A.bY){t=A.t(o,A.o(o).A("e.E"))
t=A.m(t)
s=A.t(b,A.o(b).A("e.E"))
return t===A.m(s)}if(u.L.b(b)){t=J.a1(b)
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
return A.m(t)},
$iB:1,
$iy:1,
$iq:1,
gb1(){return this.d}}
A.bZ.prototype={
O(){var t=this
return new A.bZ(t.a,t.b,t.c,t.d)},
gu(a){return this.d.c},
gR(){return null},
gB(){return 127},
gG(){return B.J},
gaR(){return this.a},
gaL(){return this.b},
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
gM(){return this.gm()},
sM(a){this.sm(a)},
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
gab(){return this.gt()/127},
sab(a){this.st(a*127)},
gag(){return A.U(this)},
ac(a){var t=this
t.sm(a.gm())
t.sp(a.gp())
t.sq(a.gq())
t.st(a.gt())},
ak(a,b,c){var t,s,r,q,p=this.d,o=p.c
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
gH(a){return new A.J(this)},
T(a,b){var t,s,r,q,p,o=this
if(b==null)return!1
if(b instanceof A.bZ){t=A.t(o,A.o(o).A("e.E"))
t=A.m(t)
s=A.t(b,A.o(b).A("e.E"))
return t===A.m(s)}if(u.L.b(b)){t=J.a1(b)
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
return A.m(t)},
$iB:1,
$iy:1,
$iq:1,
gb1(){return this.d}}
A.fs.prototype={
F(){var t=this,s=t.a
if(s.gaR()+1>t.d){s.Z(t.b,s.gaL()+1)
return s.gaL()<=t.e}return s.F()},
gP(){return this.a},
$iB:1}
A.c_.prototype={
O(){var t=this
return new A.c_(t.a,t.b,t.c,t.d,t.e,t.f)},
gu(a){var t=this.f,s=t.f
s=s==null?null:s.b
return s==null?t.c:s},
gR(){return this.f.f},
gB(){return this.f.gB()},
gG(){return B.v},
gaR(){return this.a},
gaL(){return this.b},
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
aX(a){var t=this.f,s=t.f
if(s==null)t=t.c>a?this.dl(a):0
else t=s.aS(this.dl(0),a)
return t},
am(a,b){var t,s,r,q,p,o,n=this.f
if(a>=n.c)return
t=this.c
s=7-(this.d+a)
if(s<0){++t
s+=8}r=n.d
r===$&&A.b()
if(!(t>=0&&t<r.length))return A.a(r,t)
q=r[t]
p=B.a.J(B.b.h(b),0,1)
if(!(s>=0&&s<8))return A.a(B.bk,s)
o=B.bk[s]
r=B.a.V(p,s)
n=n.d
n.$flags&2&&A.c(n)
if(!(t<n.length))return A.a(n,t)
n[t]=(q&o|r)>>>0},
n(a,b){return this.aX(b)},
i(a,b,c){return this.am(b,c)},
gM(){return this.dl(0)},
sM(a){this.am(0,a)},
gm(){return this.aX(0)},
sm(a){this.am(0,a)},
gp(){return this.aX(1)},
sp(a){this.am(1,a)},
gq(){return this.aX(2)},
sq(a){this.am(2,a)},
gt(){return this.aX(3)},
st(a){this.am(3,a)},
ga9(){return this.aX(0)/this.f.gB()},
sa9(a){this.am(0,a*this.f.gB())},
ga5(){return this.aX(1)/this.f.gB()},
sa5(a){this.am(1,a*this.f.gB())},
ga8(){return this.aX(2)/this.f.gB()},
sa8(a){this.am(2,a*this.f.gB())},
gab(){return this.aX(3)/this.f.gB()},
sab(a){this.am(3,a*this.f.gB())},
gag(){return A.U(this)},
ac(a){var t=this
t.am(0,a.gm())
t.am(1,a.gp())
t.am(2,a.gq())
t.am(3,a.gt())},
ak(a,b,c){var t=this,s=t.f.c
if(s>0){t.am(0,a)
if(s>1){t.am(1,b)
if(s>2)t.am(2,c)}}},
a7(a,b,c,d){var t=this,s=t.f.c
if(s>0){t.am(0,a)
if(s>1){t.am(1,b)
if(s>2){t.am(2,c)
if(s>3)t.am(3,d)}}}},
gH(a){return new A.J(this)},
T(a,b){var t,s,r,q=this
if(b==null)return!1
if(b instanceof A.c_){t=A.t(q,A.o(q).A("e.E"))
t=A.m(t)
s=A.t(b,A.o(b).A("e.E"))
return t===A.m(s)}if(u.L.b(b)){t=q.f
s=t.f
r=s!=null?s.b:t.c
t=J.a1(b)
if(t.gu(b)!==r)return!1
if(q.aX(0)!==t.n(b,0))return!1
if(r>1){if(q.aX(1)!==t.n(b,1))return!1
if(r>2){if(q.aX(2)!==t.n(b,2))return!1
if(r>3)if(q.aX(3)!==t.n(b,3))return!1}}return!0}return!1},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.m(t)},
$iB:1,
$iy:1,
$iq:1,
gb1(){return this.f}}
A.c0.prototype={
O(){var t=this
return new A.c0(t.a,t.b,t.c,t.d)},
gu(a){var t=this.d,s=t.e
s=s==null?null:s.b
return s==null?t.c:s},
gR(){return this.d.e},
gB(){return this.d.gB()},
gG(){return B.l},
gaR(){return this.a},
gaL(){return this.b},
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
bh(a){var t,s=this.d,r=s.e
if(r!=null){s=s.d
t=this.c
if(!(t>=0&&t<s.length))return A.a(s,t)
t=r.aS(s[t],a)
s=t}else if(a<s.c){s=s.d
r=this.c+a
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s},
n(a,b){return this.bh(b)},
i(a,b,c){var t,s,r=this.d
if(b<r.c){r=r.d
t=this.c+b
s=B.b.h(c)
r.$flags&2&&A.c(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gM(){return this.gm()},
sM(a){this.sm(a)},
gm(){var t,s=this.d,r=s.e
if(r==null)if(s.c>0){s=s.d
r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
else{s=s.d
t=this.c
if(!(t>=0&&t<s.length))return A.a(s,t)
t=r.aV(s[t])
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
t=r.aU(s[t])
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
t=r.aT(s[t])
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
t=r.b4(s[t])
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
gab(){return this.gt()/this.d.gB()},
sab(a){this.st(a*this.d.gB())},
gag(){return A.U(this)},
ac(a){var t=this
t.sm(a.gm())
t.sp(a.gp())
t.sq(a.gq())
t.st(a.gt())},
ak(a,b,c){var t,s,r,q,p=this.d,o=p.c
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
gH(a){return new A.J(this)},
T(a,b){var t,s,r,q=this
if(b==null)return!1
if(b instanceof A.c0){t=A.t(q,A.o(q).A("e.E"))
t=A.m(t)
s=A.t(b,A.o(b).A("e.E"))
return t===A.m(s)}if(u.L.b(b)){t=q.d
s=t.e
r=s!=null?s.b:t.c
t=J.a1(b)
if(t.gu(b)!==r)return!1
if(q.bh(0)!==t.n(b,0))return!1
if(r>1){if(q.bh(1)!==t.n(b,1))return!1
if(r>2){if(q.bh(2)!==t.n(b,2))return!1
if(r>3)if(q.bh(3)!==t.n(b,3))return!1}}return!0}return!1},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.m(t)},
$iB:1,
$iy:1,
$iq:1,
gb1(){return this.d}}
A.c1.prototype={
O(){var t=this
return new A.c1(t.a,t.b,t.c,t.d,t.e,t.f)},
gu(a){var t=this.f,s=t.f
s=s==null?null:s.b
return s==null?t.c:s},
gR(){return this.f.f},
gB(){return this.f.gB()},
gG(){return B.x},
geW(){var t=this.f
return t.f!=null?2:t.c<<1>>>0},
gaR(){return this.a},
gaL(){return this.b},
Z(a,b){var t,s,r,q=this
q.a=a
q.b=b
t=q.geW()
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
return s<r.b}if(r.f!=null||r.c===1){if((t.d+=2)>7){t.d=0;++t.c}}else{s*=t.geW()
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
aY(a){var t=this.f,s=t.f
if(s==null)t=t.c>a?this.dm(a):0
else t=s.aS(this.dm(0),a)
return t},
an(a,b){var t,s,r,q,p,o,n=this.f
if(a>=n.c)return
t=this.c
s=6-(this.d+(a<<1>>>0))
if(s<0){++t
s+=8}r=n.d
r===$&&A.b()
if(!(t>=0&&t<r.length))return A.a(r,t)
q=r[t]
p=B.a.J(B.b.h(b),0,3)
r=B.a.j(s,1)
if(!(r<4))return A.a(B.b6,r)
o=B.b6[r]
r=B.a.V(p,s)
n=n.d
n.$flags&2&&A.c(n)
if(!(t<n.length))return A.a(n,t)
n[t]=(q&o|r)>>>0},
n(a,b){return this.aY(b)},
i(a,b,c){return this.an(b,c)},
gM(){return this.dm(0)},
sM(a){this.an(0,a)},
gm(){return this.aY(0)},
sm(a){this.an(0,a)},
gp(){return this.aY(1)},
sp(a){this.an(1,a)},
gq(){return this.aY(2)},
sq(a){this.an(2,a)},
gt(){return this.aY(3)},
st(a){this.an(3,a)},
ga9(){return this.aY(0)/this.f.gB()},
sa9(a){this.an(0,a*this.f.gB())},
ga5(){return this.aY(1)/this.f.gB()},
sa5(a){this.an(1,a*this.f.gB())},
ga8(){return this.aY(2)/this.f.gB()},
sa8(a){this.an(2,a*this.f.gB())},
gab(){return this.aY(3)/this.f.gB()},
sab(a){this.an(3,a*this.f.gB())},
gag(){return A.U(this)},
ac(a){var t=this
t.an(0,a.gm())
t.an(1,a.gp())
t.an(2,a.gq())
t.an(3,a.gt())},
ak(a,b,c){var t=this,s=t.f.c
if(s>0){t.an(0,a)
if(s>1){t.an(1,b)
if(s>2)t.an(2,c)}}},
a7(a,b,c,d){var t=this,s=t.f.c
if(s>0){t.an(0,a)
if(s>1){t.an(1,b)
if(s>2){t.an(2,c)
if(s>3)t.an(3,d)}}}},
gH(a){return new A.J(this)},
T(a,b){var t,s,r,q=this
if(b==null)return!1
if(b instanceof A.c1){t=A.t(q,A.o(q).A("e.E"))
t=A.m(t)
s=A.t(b,A.o(b).A("e.E"))
return t===A.m(s)}if(u.L.b(b)){t=q.f
s=t.f
r=s!=null?s.b:t.c
t=J.a1(b)
if(t.gu(b)!==r)return!1
if(q.aY(0)!==t.n(b,0))return!1
if(r>1){if(q.aY(1)!==t.n(b,1))return!1
if(r>2){if(q.aY(2)!==t.n(b,2))return!1
if(r>3)if(q.aY(3)!==t.n(b,3))return!1}}return!0}return!1},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.m(t)},
$iB:1,
$iy:1,
$iq:1,
gb1(){return this.f}}
A.c2.prototype={
O(){var t=this
return new A.c2(t.a,t.b,t.c,t.d)},
gu(a){return this.d.c},
gR(){return null},
gB(){return 4294967295},
gG(){return B.H},
gaR(){return this.a},
gaL(){return this.b},
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
gM(){return this.gm()},
sM(a){this.sm(a)},
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
gab(){return this.gt()/4294967295},
sab(a){this.st(a*4294967295)},
gag(){return A.U(this)},
ac(a){var t=this
t.sm(a.gm())
t.sp(a.gp())
t.sq(a.gq())
t.st(a.gt())},
ak(a,b,c){var t,s,r,q,p=this.d,o=p.c
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
gH(a){return new A.J(this)},
T(a,b){var t,s,r,q,p,o=this
if(b==null)return!1
if(b instanceof A.c2){t=A.t(o,A.o(o).A("e.E"))
t=A.m(t)
s=A.t(b,A.o(b).A("e.E"))
return t===A.m(s)}if(u.L.b(b)){t=J.a1(b)
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
return A.m(t)},
$iB:1,
$iy:1,
$iq:1,
gb1(){return this.d}}
A.c3.prototype={
O(){var t=this
return new A.c3(t.a,t.b,t.c,t.d,t.e)},
gu(a){var t=this.e,s=t.f
s=s==null?null:s.b
return s==null?t.c:s},
gR(){return this.e.f},
gB(){return this.e.gB()},
gG(){return B.y},
gaR(){return this.a},
gaL(){return this.b},
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
else t=s.aS(this.df(0),a)
return t},
ao(a,b){var t,s,r,q,p,o,n=this.e
if(a>=n.c)return
t=this.c
s=4-(this.d+(a<<2>>>0))
if(s<0){s+=8;++t}r=n.d
r===$&&A.b()
if(!(t>=0&&t<r.length))return A.a(r,t)
q=r[t]
p=B.a.J(B.b.h(b),0,15)
o=s===4?15:240
r=B.a.V(p,s)
n=n.d
n.$flags&2&&A.c(n)
if(!(t<n.length))return A.a(n,t)
n[t]=(q&o|r)>>>0},
n(a,b){return this.aZ(b)},
i(a,b,c){return this.ao(b,c)},
gM(){return this.df(0)},
sM(a){this.ao(0,a)},
gm(){return this.aZ(0)},
sm(a){this.ao(0,a)},
gp(){return this.aZ(1)},
sp(a){this.ao(1,a)},
gq(){return this.aZ(2)},
sq(a){this.ao(2,a)},
gt(){return this.aZ(3)},
st(a){this.ao(3,a)},
ga9(){return this.aZ(0)/this.e.gB()},
sa9(a){this.ao(0,a*this.e.gB())},
ga5(){return this.aZ(1)/this.e.gB()},
sa5(a){this.ao(1,a*this.e.gB())},
ga8(){return this.aZ(2)/this.e.gB()},
sa8(a){this.ao(2,a*this.e.gB())},
gab(){return this.aZ(3)/this.e.gB()},
sab(a){this.ao(3,a*this.e.gB())},
gag(){return A.U(this)},
ac(a){var t=this
t.ao(0,a.gm())
t.ao(1,a.gp())
t.ao(2,a.gq())
t.ao(3,a.gt())},
ak(a,b,c){var t=this,s=t.e.c
if(s>0){t.ao(0,a)
if(s>1){t.ao(1,b)
if(s>2)t.ao(2,c)}}},
a7(a,b,c,d){var t=this,s=t.e.c
if(s>0){t.ao(0,a)
if(s>1){t.ao(1,b)
if(s>2){t.ao(2,c)
if(s>3)t.ao(3,d)}}}},
gH(a){return new A.J(this)},
T(a,b){var t,s,r,q=this
if(b==null)return!1
if(b instanceof A.c3){t=A.t(q,A.o(q).A("e.E"))
t=A.m(t)
s=A.t(b,A.o(b).A("e.E"))
return t===A.m(s)}if(u.L.b(b)){r=q.e.c
t=J.a1(b)
if(t.gu(b)!==r)return!1
if(q.aZ(0)!==t.n(b,0))return!1
if(r>1){if(q.aZ(1)!==t.n(b,1))return!1
if(r>2){if(q.aZ(2)!==t.n(b,2))return!1
if(r>3)if(q.aZ(3)!==t.n(b,3))return!1}}return!0}return!1},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.m(t)},
$iB:1,
$iy:1,
$iq:1,
gb1(){return this.e}}
A.c4.prototype={
O(){var t=this
return new A.c4(t.a,t.b,t.c,t.d)},
gu(a){var t=this.d,s=t.e
s=s==null?null:s.b
return s==null?t.c:s},
gR(){return this.d.e},
gB(){return this.d.gB()},
gG(){return B.f},
gaR(){return this.a},
gaL(){return this.b},
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
bh(a){var t,s=this.d,r=s.e
if(r!=null){s=s.d
t=this.c
if(!(t>=0&&t<s.length))return A.a(s,t)
t=r.aS(s[t],a)
s=t}else if(a<s.c){s=s.d
r=this.c+a
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s},
n(a,b){return this.bh(b)},
i(a,b,c){var t,s,r=this.d
if(b<r.c){r=r.d
t=this.c+b
s=B.b.h(B.b.J(c,0,255))
r.$flags&2&&A.c(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gM(){var t=this.d.d,s=this.c
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
sM(a){var t=this.d.d,s=this.c,r=B.b.h(B.b.J(a,0,255))
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
t=r.aV(s[t])
s=t}return s},
sm(a){var t,s,r=this.d
if(r.c>0){r=r.d
t=this.c
s=B.b.h(B.b.J(a,0,255))
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
t=q.aU(r[t])
r=t}return r},
sp(a){var t,s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
t=B.b.h(B.b.J(a,0,255))
s.$flags&2&&A.c(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=t}else if(r>1){s=s.d
r=this.c+1
t=B.b.h(B.b.J(a,0,255))
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
t=q.aT(r[t])
r=t}return r},
sq(a){var t,s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
t=B.b.h(B.b.J(a,0,255))
s.$flags&2&&A.c(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=t}else if(r>2){s=s.d
r=this.c+2
t=B.b.h(B.b.J(a,0,255))
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
t=q.b4(r[t])
r=t}return r},
st(a){var t,s=this.d,r=s.c
if(r===2){s=s.d
r=this.c+1
t=B.b.h(B.b.J(a,0,255))
s.$flags&2&&A.c(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=t}else if(r>3){s=s.d
r=this.c+3
t=B.b.h(B.b.J(a,0,255))
s.$flags&2&&A.c(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=t}},
ga9(){return this.gm()/this.d.gB()},
sa9(a){this.sm(a*this.d.gB())},
ga5(){return this.gp()/this.d.gB()},
sa5(a){this.sp(a*this.d.gB())},
ga8(){return this.gq()/this.d.gB()},
sa8(a){this.sq(a*this.d.gB())},
gab(){return this.gt()/this.d.gB()},
sab(a){this.st(a*this.d.gB())},
gag(){return this.d.c===2?this.gm():A.U(this)},
ac(a){var t=this
if(t.d.e!=null)t.sM(a.gM())
else{t.sm(a.gm())
t.sp(a.gp())
t.sq(a.gq())
t.st(a.gt())}},
ak(a,b,c){var t,s,r,q,p=this.d,o=p.c
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
gH(a){return new A.J(this)},
T(a,b){var t,s,r,q=this
if(b==null)return!1
if(b instanceof A.c4){t=A.t(q,A.o(q).A("e.E"))
t=A.m(t)
s=A.t(b,A.o(b).A("e.E"))
return t===A.m(s)}if(u.L.b(b)){t=q.d
s=t.e
r=s!=null?s.b:t.c
t=J.a1(b)
if(t.gu(b)!==r)return!1
if(q.bh(0)!==t.n(b,0))return!1
if(r>1){if(q.bh(1)!==t.n(b,1))return!1
if(r>2){if(q.bh(2)!==t.n(b,2))return!1
if(r>3)if(q.bh(3)!==t.n(b,3))return!1}}return!0}return!1},
gE(a){var t=A.t(this,A.o(this).A("e.E"))
return A.m(t)},
$iB:1,
$iy:1,
$iq:1,
gb1(){return this.d}}
A.C.prototype={
O(){return new A.C()},
gb1(){return $.lG()},
gaR(){return 0},
gaL(){return 0},
gu(a){return 0},
gB(){return 0},
gG(){return B.f},
gR(){return null},
n(a,b){return 0},
i(a,b,c){},
gM(){return 0},
sM(a){},
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
gab(){return 0},
sab(a){},
gag(){return 0},
ac(a){},
ak(a,b,c){},
a7(a,b,c,d){},
Z(a,b){},
gP(){return this},
F(){return!1},
T(a,b){if(b==null)return!1
return b instanceof A.C},
gE(a){return 0},
gH(a){return new A.J(this)},
$iB:1,
$iy:1,
$iq:1}
A.hi.prototype={
ad(){return"FlipDirection."+this.b}}
A.ht.prototype={
C(a){return"ImageException: "+this.a}}
A.a6.prototype={
gu(a){return this.c-this.d},
i(a,b,c){J.x(this.a,this.d+b,c)
return c},
bc(a,b,c,d){var t=this.a,s=J.av(t),r=this.d+a
if(c instanceof A.a6)s.ah(t,r,r+b,c.a,c.d+d)
else s.ah(t,r,r+b,u.L.a(c),d)},
bI(a,b,c){return this.bc(a,b,c,0)},
js(a,b,c){var t=this.a,s=this.d+a
J.aX(t,s,s+b,c)},
d2(a,b,c){var t=this,s=c!=null?t.b+c:t.d
return A.p(t.a,t.e,a,s+b)},
al(a){return this.d2(a,0,null)},
cC(a,b){return this.d2(a,b,null)},
bK(a,b){return this.d2(a,0,b)},
D(){return J.d(this.a,this.d++)},
aa(a){var t=this.al(a)
this.d=this.d+(t.c-t.d)
return t},
af(a){var t,s,r,q,p,o=this
if(a==null){t=A.k([],u.t)
for(s=o.c;r=o.d,r<s;){q=o.a
o.d=r+1
p=J.d(q,r)
if(p===0)return A.e5(t,0,null)
B.c.N(t,p)}throw A.f(A.l("EOF reached without finding string terminator (length: "+A.z(a)+")"))}return A.e5(o.aa(a).a0(),0,null)},
cq(){return this.af(null)},
f7(a){var t,s,r,q,p=this,o=A.k([],u.t)
for(t=p.c;s=p.d,s<t;){r=p.a
p.d=s+1
q=J.d(r,s)
B.c.N(o,q)
if(q===10||o.length>=a)return A.e5(o,0,null)}return A.e5(o,0,null)},
jA(){return this.f7(256)},
jB(){var t,s,r,q,p=this,o=A.k([],u.t)
for(t=p.c;s=p.d,s<t;){r=p.a
p.d=s+1
q=J.d(r,s)
if(q===0){u.L.a(o)
return new A.h_(!0).dU(o,0,null,!0)}B.c.N(o,q)}return B.cp.j6(o,!0)},
l(){var t=this,s=J.d(t.a,t.d++)&255,r=J.d(t.a,t.d++)&255
if(t.e)return s<<8|r
return r<<8|s},
be(){var t=this,s=J.d(t.a,t.d++)&255,r=J.d(t.a,t.d++)&255,q=J.d(t.a,t.d++)&255
if(t.e)return q|r<<8|s<<16
return s|r<<8|q<<16},
k(){var t=this,s=J.d(t.a,t.d++)&255,r=J.d(t.a,t.d++)&255,q=J.d(t.a,t.d++)&255,p=J.d(t.a,t.d++)&255
if(t.e)return(s<<24|r<<16|q<<8|p)>>>0
return(p<<24|q<<16|r<<8|s)>>>0},
cZ(){return A.pe(this.dB())},
dB(){var t=this,s=J.d(t.a,t.d++)&255,r=J.d(t.a,t.d++)&255,q=J.d(t.a,t.d++)&255,p=J.d(t.a,t.d++)&255,o=J.d(t.a,t.d++)&255,n=J.d(t.a,t.d++)&255,m=J.d(t.a,t.d++)&255,l=J.d(t.a,t.d++)&255
if(t.e)return(B.a.L(s,56)|B.a.L(r,48)|B.a.L(q,40)|B.a.L(p,32)|o<<24|n<<16|m<<8|l)>>>0
return(B.a.L(l,56)|B.a.L(m,48)|B.a.L(n,40)|B.a.L(o,32)|p<<24|q<<16|r<<8|s)>>>0},
cr(a,b,c){var t,s=this,r=s.a
if(u.D.b(r))return s.fb(b,c)
t=s.b+s.d+b
return J.j6(r,t,c<=0?s.c:t+c)},
fb(a,b){var t,s=this,r=b==null?s.c-s.d-a:b,q=s.a
if(u.D.b(q))return J.L(B.e.gv(q),q.byteOffset+s.d+a,r)
t=s.d+a
t=J.j6(q,t,t+r)
return new Uint8Array(A.w(t))},
a0(){return this.fb(0,null)},
cs(){var t=this.a
if(u.D.b(t))return J.ak(B.e.gv(t),t.byteOffset+this.d,null)
return J.ak(B.e.gv(this.a0()),0,null)},
sv(a,b){this.a=u.L.a(b)}}
A.fo.prototype={
iZ(a){var t=this
t.eh(a)
t.e3()
t.eg()
t.dV()},
i1(a){var t,s,r,q,p,o,n,m=this,l=m.c=Math.max(a,4)
m.f=l-m.d
m.r=l-1
t=B.b.X(l,8)
m.w=t
m.x=t*256
m.Q=new A.cO(new Uint32Array(1024),256,4)
m.a=new A.ay(new Uint8Array(768),256,3)
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
dV(){var t,s,r,q,p,o,n
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
s.aW(t,Math.abs(p),Math.abs(o),Math.abs(r))}},
i3(a,b,c){var t,s,r,q,p,o,n,m,l,k,j=this.as
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
e3(){var t,s,r,q,p,o,n,m=this
for(t=0,s=0;t<m.c;++t){for(r=0;r<3;++r,++s){q=m.z
q===$&&A.b()
if(!(s>=0&&s<q.length))return A.a(q,s)
p=B.a.J(B.b.h(0.5+q[s]),0,255)
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
eg(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
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
eI(a,b){var t,s,r,q
for(t=this.y,s=a*a,r=0;r<a;++r){t===$&&A.b()
q=B.b.h(b*((s-r*r)*256/s))
t.$flags&2&&A.c(t)
if(!(r<t.length))return A.a(t,r)
t[r]=q}},
eh(a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a2.x
a3===$&&A.b()
t=a2.b
s=30+B.a.X(t-1,3)
r=a4.gK()*a4.gI()
q=B.a.ar(r,t)
p=Math.max(B.a.X(q,100),1)
if(p===0)p=1
o=B.a.j(a3,8)
if(o<=1)o=0
a2.eI(o,1024)
if(r<1509)n=a2.b=1
else if(B.a.a1(r,499)!==0)n=499
else if(B.a.a1(r,491)!==0)n=491
else n=B.a.a1(r,487)!==0?487:503
m=a4.gK()
l=a4.gI()
for(k=a3,j=1024,i=0,h=0,g=0,f=0;f<q;){a3=a4.a
e=a3==null?null:a3.S(h,g,null)
if(e==null)e=new A.C()
d=e.gm()
c=e.gp()
b=e.gq()
if(f===0){a3=a2.z
a3===$&&A.b()
t=a2.e
t===$&&A.b()
B.c.i(a3,t*3,b)
B.c.i(a2.z,a2.e*3+1,c)
B.c.i(a2.z,a2.e*3+2,d)}a=a2.iU(b,c,d)
if(a<0)a=a2.h5(b,c,d)
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
if(o>0)a2.fU(a0,o,a,b,c,d)}i+=n
h+=n
while(h>m){h-=m;++g}while(i>=r){i-=r
g-=l}++f
if(B.a.a1(f,p)===0){j-=B.a.ar(j,s)
k-=B.a.X(k,30)
o=B.a.j(k,8)
if(o<=1)o=0
a2.eI(o,j)}}},
fU(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i=this,h=c-b,g=i.d-1
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
h5(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=1e30
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
iU(a,b,c){var t,s,r,q,p,o,n
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
A.fq.prototype={
W(a){var t,s,r=this
if(r.a===r.c.length)r.i7()
t=r.c
s=r.a++
t.$flags&2&&A.c(t)
if(!(s>=0&&s<t.length))return A.a(t,s)
t[s]=a&255},
bm(a){var t,s,r,q,p,o=this
u.L.a(a)
t=J.aZ(a)
while(s=o.a,r=s+t,q=o.c,p=q.length,r>p)o.em(r-p)
B.e.bq(q,s,r,a)
o.a+=t},
d0(a){var t=this
if(t.b){t.W(B.a.j(a,8)&255)
t.W(a&255)
return}t.W(a&255)
t.W(B.a.j(a,8)&255)},
aF(a){var t=this
if(t.b){t.W(B.a.j(a,24)&255)
t.W(B.a.j(a,16)&255)
t.W(B.a.j(a,8)&255)
t.W(a&255)
return}t.W(a&255)
t.W(B.a.j(a,8)&255)
t.W(B.a.j(a,16)&255)
t.W(B.a.j(a,24)&255)},
em(a){var t,s,r,q
if(a!=null)t=a
else{s=this.c.length
t=s===0?8192:s*2}s=this.c
r=s.length
q=new Uint8Array(r+t)
B.e.bq(q,0,r,s)
this.c=q},
i7(){return this.em(null)},
gu(a){return this.a}}
A.fI.prototype={
ff(a){var t,s,r,q,p,o,n=a.gK(),m=a.gI(),l=this.a
l===$&&A.b()
t=A.M(null,null,B.f,0,B.j,m,null,0,1,l,B.f,n,!1)
n=t.a
s=n.gH(n)
s.F()
t.z=a.z
t.w=a.w
t.y=a.y
for(n=a.a,n=n.gH(n);n.F();){r=n.gP()
q=s.gP()
p=B.b.h(r.gm())
o=B.b.h(r.gp())
q.i(0,0,this.i3(B.b.h(r.gq()),o,p))
s.F()}return t}}
A.cY.prototype={
h(a){var t=this.b
return t===0?0:B.a.ar(this.a,t)},
T(a,b){if(b==null)return!1
return b instanceof A.cY&&this.a===b.a&&this.b===b.b},
gE(a){return A.kE(this.a,this.b,B.T,B.T)},
C(a){return""+this.a+"/"+this.b}};(function aliases(){var t=J.bn.prototype
t.fv=t.C
t=A.E.prototype
t.dI=t.ah})();(function installTearOffs(){var t=hunkHelpers.installInstanceTearOff,s=hunkHelpers._instance_2u,r=hunkHelpers._static_1,q=hunkHelpers.installStaticTearOff
t(A.X.prototype,"gby",1,0,null,["$1","$0"],["a4","h"],2,0,0)
t(A.b1.prototype,"gby",1,0,null,["$1","$0"],["a4","h"],2,0,0)
t(A.bO.prototype,"gby",1,0,null,["$1","$0"],["a4","h"],2,0,0)
t(A.bk.prototype,"gby",1,0,null,["$1","$0"],["a4","h"],2,0,0)
t(A.bK.prototype,"gby",1,0,null,["$1","$0"],["a4","h"],2,0,0)
t(A.bl.prototype,"gby",1,0,null,["$1","$0"],["a4","h"],2,0,0)
t(A.bN.prototype,"gby",1,0,null,["$1","$0"],["a4","h"],2,0,0)
t(A.bL.prototype,"gby",1,0,null,["$1","$0"],["a4","h"],2,0,0)
t(A.bM.prototype,"gby",1,0,null,["$1","$0"],["a4","h"],2,0,0)
t(A.cx.prototype,"gby",1,0,null,["$1","$0"],["a4","h"],2,0,0)
var p
s(p=A.fi.prototype,"ghf","hg",4)
s(p,"ghi","hj",4)
s(p,"ghk","hl",4)
s(p,"gh9","ha",4)
s(p,"ghb","hc",4)
r(A,"pp","nc",0)
r(A,"pi","n4",0)
r(A,"pg","n2",0)
r(A,"pn","na",0)
r(A,"po","nb",0)
r(A,"pm","n9",0)
r(A,"pl","n8",0)
r(A,"pk","n7",0)
r(A,"pr","ne",0)
r(A,"pq","nd",0)
r(A,"pj","n5",0)
r(A,"ph","n3",0)
r(A,"pC","np",0)
r(A,"pA","nn",0)
r(A,"ps","nf",0)
r(A,"pu","nh",0)
r(A,"pt","ng",0)
r(A,"pv","ni",0)
r(A,"pD","nq",0)
r(A,"pB","no",0)
r(A,"pw","nj",0)
r(A,"px","nk",0)
r(A,"py","nl",0)
r(A,"pz","nm",0)
s(A.ee.prototype,"gip","iq",8)
s(A.f9.prototype,"gjh","ji",8)
q(A,"jX",3,null,["$3"],["nr"],1,0)
q(A,"pE",3,null,["$3"],["ns"],1,0)
q(A,"pJ",3,null,["$3"],["nx"],1,0)
q(A,"pK",3,null,["$3"],["ny"],1,0)
q(A,"pL",3,null,["$3"],["nz"],1,0)
q(A,"pM",3,null,["$3"],["nA"],1,0)
q(A,"pN",3,null,["$3"],["nB"],1,0)
q(A,"pO",3,null,["$3"],["nC"],1,0)
q(A,"pP",3,null,["$3"],["nD"],1,0)
q(A,"pQ",3,null,["$3"],["nE"],1,0)
q(A,"pF",3,null,["$3"],["nt"],1,0)
q(A,"pG",3,null,["$3"],["nu"],1,0)
q(A,"pH",3,null,["$3"],["nv"],1,0)
q(A,"pI",3,null,["$3"],["nw"],1,0)
t(A.b3.prototype,"gfo",0,5,null,["$5"],["a3"],3,0,0)
q(A,"pS",6,null,["$6"],["nL"],5,0)
q(A,"pT",6,null,["$6"],["nM"],5,0)
q(A,"pR",6,null,["$6"],["nK"],5,0)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.O,null)
r(A.O,[A.jf,J.f0,A.e2,J.d8,A.P,A.E,A.i0,A.e,A.bQ,A.ek,A.dc,A.ad,A.ba,A.aT,A.d9,A.i6,A.hP,A.bh,A.cN,A.hK,A.V,A.bP,A.is,A.iB,A.aI,A.fY,A.fZ,A.eJ,A.cg,A.h_,A.it,A.fp,A.e3,A.aP,A.bT,A.e4,A.hn,A.iq,A.ir,A.hc,A.aB,A.iu,A.ix,A.hw,A.ip,A.f_,A.fr,A.hG,A.ha,A.hQ,A.J,A.b2,A.fX,A.eL,A.aQ,A.X,A.h8,A.b_,A.hb,A.F,A.he,A.eM,A.b0,A.eN,A.eO,A.eP,A.de,A.ep,A.dh,A.di,A.dj,A.eW,A.eX,A.eH,A.bj,A.hB,A.bm,A.hC,A.d4,A.fg,A.fh,A.hF,A.fi,A.dZ,A.fv,A.aS,A.cS,A.hV,A.c5,A.fz,A.fA,A.fD,A.fH,A.cT,A.cU,A.e1,A.az,A.e8,A.i3,A.fM,A.i5,A.fN,A.fO,A.hN,A.i8,A.ed,A.i9,A.ie,A.ii,A.ik,A.ec,A.ij,A.ia,A.bc,A.ef,A.fV,A.eg,A.eh,A.ee,A.fT,A.ig,A.fU,A.im,A.ei,A.eQ,A.eR,A.dl,A.dk,A.dm,A.eT,A.d2,A.cu,A.ax,A.fs,A.ht,A.a6,A.fI,A.fq,A.cY])
r(J.f0,[J.fe,J.dy,J.dA,J.cK,J.cL,J.dz,J.cJ])
r(J.dA,[J.bn,J.u,A.bR,A.dI])
r(J.bn,[J.ft,J.ea,J.b4])
s(J.fc,A.e2)
s(J.hA,J.u)
r(J.dz,[J.dx,J.ff])
r(A.P,[A.cM,A.e9,A.fj,A.fQ,A.fJ,A.fW,A.ez,A.aO,A.eb,A.fP,A.cZ,A.eI])
s(A.d_,A.E)
s(A.ao,A.d_)
r(A.e,[A.da,A.ej,A.ch,A.ci,A.cj,A.ck,A.cl,A.cm,A.co,A.cp,A.cq,A.cr,A.cs,A.bC,A.b3,A.a5,A.bU,A.bV,A.bW,A.bX,A.bY,A.bZ,A.c_,A.c0,A.c1,A.c2,A.c3,A.c4,A.C])
r(A.da,[A.aR,A.db,A.dC,A.hL])
r(A.aR,[A.e6,A.dD])
s(A.bx,A.aT)
r(A.bx,[A.eq,A.er,A.es])
s(A.bH,A.d9)
s(A.dM,A.e9)
r(A.bh,[A.eE,A.eF,A.fL,A.iU,A.iW,A.iZ,A.iY,A.h7,A.hh,A.iL,A.iM,A.iN,A.iO,A.iP,A.iQ,A.iR,A.hU,A.hv,A.hu])
r(A.fL,[A.fK,A.cf])
s(A.aE,A.cN)
s(A.dB,A.aE)
r(A.eF,[A.iV,A.hM,A.hO,A.hp,A.hq,A.hr,A.il])
r(A.dI,[A.fm,A.a8])
r(A.a8,[A.el,A.en])
s(A.em,A.el)
s(A.bp,A.em)
s(A.eo,A.en)
s(A.aq,A.eo)
r(A.bp,[A.bS,A.dE])
r(A.aq,[A.dF,A.dG,A.dH,A.dJ,A.dK,A.dL,A.bq])
s(A.et,A.fW)
r(A.eE,[A.iD,A.iC])
r(A.eJ,[A.iz,A.iy,A.fS])
s(A.eK,A.cg)
r(A.eK,[A.fk,A.fR])
s(A.hJ,A.iz)
s(A.hI,A.iy)
r(A.aO,[A.cW,A.eY])
s(A.iF,A.iq)
s(A.iG,A.ir)
r(A.it,[A.d3,A.eD,A.h9,A.ae,A.eB,A.a4,A.a3,A.ct,A.bF,A.aD,A.cv,A.cQ,A.dY,A.br,A.fu,A.bs,A.aH,A.ah,A.c6,A.a_,A.aA,A.c7,A.d1,A.eU,A.hl,A.fb,A.hi])
s(A.eZ,A.f_)
s(A.dN,A.fr)
r(A.bC,[A.eG,A.cn])
s(A.bE,A.b2)
r(A.X,[A.b1,A.bJ,A.bO,A.bk,A.bK,A.bl,A.bN,A.bL,A.bM,A.cy,A.cw,A.cz,A.cx])
r(A.hb,[A.eC,A.hg,A.hm,A.ho,A.hE,A.cP,A.hT,A.hW,A.i_,A.i2,A.i4,A.io])
s(A.hd,A.eC)
s(A.f1,A.b0)
r(A.f1,[A.du,A.f3,A.f4,A.f5,A.dv])
s(A.f2,A.de)
s(A.f6,A.di)
s(A.eV,A.b_)
r(A.bj,[A.bI,A.dn])
s(A.f7,A.dZ)
s(A.f8,A.fv)
s(A.hS,A.he)
s(A.bt,A.F)
r(A.aS,[A.fx,A.fy,A.fB,A.fC,A.fF,A.fG])
r(A.cS,[A.e0,A.fE])
r(A.fH,[A.cV,A.af])
s(A.f9,A.ee)
s(A.fa,A.ei)
s(A.dw,A.d2)
r(A.a5,[A.cB,A.cC,A.dp,A.dq,A.dr,A.ds,A.cD,A.cE,A.cF,A.cG,A.cH,A.cI])
r(A.ax,[A.dO,A.dP,A.dQ,A.dR,A.dS,A.dT,A.dU,A.cO,A.ay])
s(A.fo,A.fI)
t(A.d_,A.ba)
t(A.el,A.E)
t(A.em,A.ad)
t(A.en,A.E)
t(A.eo,A.ad)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",D:"double",j:"num",S:"String",aU:"bool",bT:"Null",r:"List",O:"Object",bo:"Map",R:"JSObject"},mangledNames:{},types:["~(a6)","i(i,b8,i)","i([i])","~(i,i,j,j,j)","~(bm,r<i>)","~(i,i,i,i,i,b9)","@()","~(S,aQ)","~(i,aU)","@(@)","@(@,S)","@(S)","~(@,@)","~(O?,O?)","bT(R)","D(i)","~(i,X)","~(j,j,j,j)","b8(i)","aU(S)","i(i,i)","j(j,j,j,j)","j(j,j,j,j,j)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.eq&&a.b(c.a)&&b.b(c.b),"2;bytes,vector":(a,b)=>c=>c instanceof A.er&&a.b(c.a)&&b.b(c.b),"2;clean,output":(a,b)=>c=>c instanceof A.es&&a.b(c.a)&&b.b(c.b)}}
A.o2(v.typeUniverse,JSON.parse('{"b4":"bn","ft":"bn","ea":"bn","q_":"bR","fe":{"aU":[],"H":[]},"dy":{"H":[]},"dA":{"R":[]},"bn":{"R":[]},"u":{"r":["1"],"R":[],"e":["1"],"a7":["1"]},"fc":{"e2":[]},"hA":{"u":["1"],"r":["1"],"R":[],"e":["1"],"a7":["1"]},"d8":{"B":["1"]},"dz":{"D":[],"j":[]},"dx":{"D":[],"i":[],"j":[],"H":[]},"ff":{"D":[],"j":[],"H":[]},"cJ":{"S":[],"kH":[],"a7":["@"],"H":[]},"cM":{"P":[]},"ao":{"E":["i"],"ba":["i"],"r":["i"],"e":["i"],"E.E":"i","ba.E":"i"},"da":{"e":["1"]},"aR":{"e":["1"]},"e6":{"aR":["1"],"e":["1"],"aR.E":"1","e.E":"1"},"bQ":{"B":["1"]},"dD":{"aR":["2"],"e":["2"],"aR.E":"2","e.E":"2"},"ej":{"e":["1"],"e.E":"1"},"ek":{"B":["1"]},"db":{"e":["1"],"e.E":"1"},"dc":{"B":["1"]},"d_":{"E":["1"],"ba":["1"],"r":["1"],"e":["1"]},"eq":{"bx":[],"aT":[]},"er":{"bx":[],"aT":[]},"es":{"bx":[],"aT":[]},"d9":{"bo":["1","2"]},"bH":{"d9":["1","2"],"bo":["1","2"]},"dM":{"P":[]},"fj":{"P":[]},"fQ":{"P":[]},"bh":{"bG":[]},"eE":{"bG":[]},"eF":{"bG":[]},"fL":{"bG":[]},"fK":{"bG":[]},"cf":{"bG":[]},"fJ":{"P":[]},"aE":{"cN":["1","2"],"jh":["1","2"],"bo":["1","2"]},"dC":{"e":["1"],"e.E":"1"},"V":{"B":["1"]},"hL":{"e":["1"],"e.E":"1"},"bP":{"B":["1"]},"dB":{"aE":["1","2"],"cN":["1","2"],"jh":["1","2"],"bo":["1","2"]},"bx":{"aT":[]},"bS":{"bp":[],"ja":[],"E":["D"],"a8":["D"],"r":["D"],"ap":["D"],"R":[],"T":[],"a7":["D"],"e":["D"],"ad":["D"],"H":[],"E.E":"D"},"bq":{"aq":[],"b9":[],"E":["i"],"a8":["i"],"r":["i"],"ap":["i"],"R":[],"T":[],"a7":["i"],"e":["i"],"ad":["i"],"H":[],"E.E":"i"},"bR":{"R":[],"H":[]},"dI":{"R":[],"T":[]},"fm":{"R":[],"T":[],"H":[]},"a8":{"ap":["1"],"R":[],"T":[],"a7":["1"]},"bp":{"E":["D"],"a8":["D"],"r":["D"],"ap":["D"],"R":[],"T":[],"a7":["D"],"e":["D"],"ad":["D"]},"aq":{"E":["i"],"a8":["i"],"r":["i"],"ap":["i"],"R":[],"T":[],"a7":["i"],"e":["i"],"ad":["i"]},"dE":{"bp":[],"hj":[],"E":["D"],"a8":["D"],"r":["D"],"ap":["D"],"R":[],"T":[],"a7":["D"],"e":["D"],"ad":["D"],"H":[],"E.E":"D"},"dF":{"aq":[],"hy":[],"E":["i"],"a8":["i"],"r":["i"],"ap":["i"],"R":[],"T":[],"a7":["i"],"e":["i"],"ad":["i"],"H":[],"E.E":"i"},"dG":{"aq":[],"dt":[],"E":["i"],"a8":["i"],"r":["i"],"ap":["i"],"R":[],"T":[],"a7":["i"],"e":["i"],"ad":["i"],"H":[],"E.E":"i"},"dH":{"aq":[],"jd":[],"E":["i"],"a8":["i"],"r":["i"],"ap":["i"],"R":[],"T":[],"a7":["i"],"e":["i"],"ad":["i"],"H":[],"E.E":"i"},"dJ":{"aq":[],"jD":[],"E":["i"],"a8":["i"],"r":["i"],"ap":["i"],"R":[],"T":[],"a7":["i"],"e":["i"],"ad":["i"],"H":[],"E.E":"i"},"dK":{"aq":[],"b8":[],"E":["i"],"a8":["i"],"r":["i"],"ap":["i"],"R":[],"T":[],"a7":["i"],"e":["i"],"ad":["i"],"H":[],"E.E":"i"},"dL":{"aq":[],"E":["i"],"a8":["i"],"r":["i"],"ap":["i"],"R":[],"T":[],"a7":["i"],"e":["i"],"ad":["i"],"H":[],"E.E":"i"},"fW":{"P":[]},"et":{"P":[]},"E":{"r":["1"],"e":["1"]},"cN":{"bo":["1","2"]},"eK":{"cg":["S","r<i>"]},"fk":{"cg":["S","r<i>"]},"fR":{"cg":["S","r<i>"]},"D":{"j":[]},"i":{"j":[]},"r":{"e":["1"]},"S":{"kH":[]},"ez":{"P":[]},"e9":{"P":[]},"aO":{"P":[]},"cW":{"P":[]},"eY":{"P":[]},"eb":{"P":[]},"fP":{"P":[]},"cZ":{"P":[]},"eI":{"P":[]},"fp":{"P":[]},"e3":{"P":[]},"eZ":{"f_":[]},"dN":{"fr":[]},"J":{"B":["j"]},"ch":{"y":[],"e":["j"],"e.E":"j"},"ci":{"y":[],"e":["j"],"e.E":"j"},"cj":{"y":[],"e":["j"],"e.E":"j"},"ck":{"y":[],"e":["j"],"e.E":"j"},"cl":{"y":[],"e":["j"],"e.E":"j"},"cm":{"y":[],"e":["j"],"e.E":"j"},"co":{"y":[],"e":["j"],"e.E":"j"},"cp":{"y":[],"e":["j"],"e.E":"j"},"cq":{"y":[],"e":["j"],"e.E":"j"},"cr":{"y":[],"e":["j"],"e.E":"j"},"cs":{"y":[],"e":["j"],"e.E":"j"},"bC":{"y":[],"e":["j"],"e.E":"j"},"eG":{"y":[],"e":["j"],"e.E":"j"},"cn":{"y":[],"e":["j"],"e.E":"j"},"bE":{"b2":[]},"b1":{"X":[]},"bJ":{"X":[]},"bO":{"X":[]},"bk":{"X":[]},"bK":{"X":[]},"bl":{"X":[]},"bN":{"X":[]},"bL":{"X":[]},"bM":{"X":[]},"cy":{"X":[]},"cw":{"X":[]},"cz":{"X":[]},"cx":{"X":[]},"b_":{"F":[]},"du":{"b0":[]},"f1":{"b0":[]},"eP":{"F":[]},"f2":{"de":[]},"f3":{"b0":[]},"f4":{"b0":[]},"f5":{"b0":[]},"dv":{"b0":[]},"f6":{"di":[]},"dj":{"F":[]},"eW":{"F":[]},"eV":{"b_":[],"F":[]},"bI":{"bj":[]},"dn":{"bj":[]},"fh":{"F":[]},"f7":{"dZ":[]},"fv":{"F":[]},"f8":{"F":[]},"bt":{"F":[]},"fx":{"aS":[]},"fy":{"aS":[]},"fB":{"aS":[]},"fC":{"aS":[]},"fF":{"aS":[]},"fG":{"aS":[]},"e0":{"cS":[]},"fE":{"cS":[]},"fz":{"F":[]},"cT":{"F":[]},"cU":{"F":[]},"e1":{"F":[]},"e8":{"F":[]},"fO":{"F":[]},"fa":{"ei":[]},"d2":{"F":[]},"dw":{"d2":[],"F":[]},"b3":{"e":["q"],"e.E":"q"},"a5":{"e":["q"]},"cB":{"a5":[],"e":["q"],"e.E":"q"},"cC":{"a5":[],"e":["q"],"e.E":"q"},"dp":{"a5":[],"e":["q"],"e.E":"q"},"dq":{"a5":[],"e":["q"],"e.E":"q"},"dr":{"a5":[],"e":["q"],"e.E":"q"},"ds":{"a5":[],"e":["q"],"e.E":"q"},"cD":{"a5":[],"e":["q"],"e.E":"q"},"cE":{"a5":[],"e":["q"],"e.E":"q"},"cF":{"a5":[],"e":["q"],"e.E":"q"},"cG":{"a5":[],"e":["q"],"e.E":"q"},"cH":{"a5":[],"e":["q"],"e.E":"q"},"cI":{"a5":[],"e":["q"],"e.E":"q"},"dO":{"ax":[]},"dP":{"ax":[]},"dQ":{"ax":[]},"dR":{"ax":[]},"dS":{"ax":[]},"dT":{"ax":[]},"dU":{"ax":[]},"cO":{"ax":[]},"ay":{"ax":[]},"bU":{"q":[],"y":[],"e":["j"],"B":["q"],"e.E":"j"},"bV":{"q":[],"y":[],"e":["j"],"B":["q"],"e.E":"j"},"bW":{"q":[],"y":[],"e":["j"],"B":["q"],"e.E":"j"},"bX":{"q":[],"y":[],"e":["j"],"B":["q"],"e.E":"j"},"bY":{"q":[],"y":[],"e":["j"],"B":["q"],"e.E":"j"},"bZ":{"q":[],"y":[],"e":["j"],"B":["q"],"e.E":"j"},"fs":{"B":["q"]},"c_":{"q":[],"y":[],"e":["j"],"B":["q"],"e.E":"j"},"c0":{"q":[],"y":[],"e":["j"],"B":["q"],"e.E":"j"},"c1":{"q":[],"y":[],"e":["j"],"B":["q"],"e.E":"j"},"c2":{"q":[],"y":[],"e":["j"],"B":["q"],"e.E":"j"},"c3":{"q":[],"y":[],"e":["j"],"B":["q"],"e.E":"j"},"c4":{"q":[],"y":[],"e":["j"],"B":["q"],"e.E":"j"},"C":{"q":[],"y":[],"e":["j"],"B":["q"],"e.E":"j"},"fo":{"fI":[]},"ma":{"T":[]},"jd":{"r":["i"],"T":[],"e":["i"]},"b9":{"r":["i"],"T":[],"e":["i"]},"n0":{"r":["i"],"T":[],"e":["i"]},"hy":{"r":["i"],"T":[],"e":["i"]},"jD":{"r":["i"],"T":[],"e":["i"]},"dt":{"r":["i"],"T":[],"e":["i"]},"b8":{"r":["i"],"T":[],"e":["i"]},"ja":{"r":["D"],"T":[],"e":["D"]},"hj":{"r":["D"],"T":[],"e":["D"]},"q":{"y":[],"B":["q"],"e":["j"]}}'))
A.o1(v.typeUniverse,JSON.parse('{"da":1,"d_":1,"a8":1,"eJ":2,"fH":1}'))
var u=(function rtii(){var t=A.W
return{G:t("y"),x:t("P"),aX:t("eM"),gV:t("eO"),Z:t("bG"),f:t("dk"),gj:t("eQ"),ak:t("eR"),fa:t("dl"),gx:t("eX"),P:t("aQ"),r:t("X"),I:t("a5"),k:t("dt"),bM:t("e<D>"),hf:t("e<@>"),hb:t("e<i>"),E:t("u<eH>"),Q:t("u<eN>"),dw:t("u<de>"),dh:t("u<hj>"),b:t("u<di>"),A:t("u<dk>"),g:t("u<b3>"),b7:t("u<bm>"),M:t("u<r<r<r<i>>>>"),o:t("u<r<r<i>>>"),S:t("u<r<i>>"),d:t("u<dZ>"),Y:t("u<c5>"),af:t("u<aS>"),l:t("u<fD>"),s:t("u<S>"),aU:t("u<fN>"),h:t("u<b9>"),ao:t("u<bc>"),F:t("u<fU>"),J:t("u<ei>"),gn:t("u<fX>"),e8:t("u<d4>"),n:t("u<@>"),t:t("u<i>"),f8:t("u<fg?>"),hh:t("u<b8?>"),e:t("u<b9?>"),z:t("u<~(a6)>"),aP:t("a7<@>"),u:t("dy"),m:t("R"),O:t("b4"),ez:t("ap<@>"),c:t("bm"),f0:t("r<dt>"),fv:t("r<r<dt>>"),gS:t("r<r<bc>>"),w:t("r<c5>"),B:t("r<ec>"),e6:t("r<bc>"),eQ:t("r<ef>"),db:t("r<eg>"),R:t("r<eh>"),dg:t("r<D>"),_:t("r<@>"),L:t("r<i>"),C:t("r<bj?>"),ge:t("r<bc?>"),gR:t("r<ep?>"),cP:t("r<i?>"),ck:t("bo<S,S>"),d4:t("bp"),eB:t("aq"),bm:t("bq"),a:t("bT"),K:t("O"),dv:t("q"),fW:t("c5"),fh:t("fA"),cE:t("e0"),ha:t("cS"),fi:t("cT"),j:t("cY"),gT:t("q1"),bQ:t("+()"),N:t("S"),cV:t("fM"),dm:t("H"),bv:t("b8"),D:t("b9"),bI:t("ea"),V:t("ec"),ai:t("ef"),gU:t("eg"),dE:t("eh"),cc:t("ej<S>"),eO:t("ep"),y:t("aU"),bB:t("aU(S)"),i:t("D"),cp:t("@"),p:t("i"),eH:t("kg<bT>?"),fe:t("bj?"),bC:t("hy?"),an:t("R?"),T:t("r<i>?"),eA:t("r<bj?>?"),di:t("r<i?>?"),cZ:t("bo<S,S>?"),W:t("bS?"),U:t("bq?"),X:t("O?"),dk:t("S?"),aD:t("b9?"),eW:t("ed?"),aj:t("bc?"),dP:t("fV?"),fQ:t("aU?"),cD:t("D?"),v:t("i?"),cg:t("j?"),e7:t("~(i,aU)?"),H:t("j"),q:t("~(bm,r<i>)"),d6:t("~(i,aU)"),dX:t("~(j,j,j,j)")}})();(function constants(){var t=hunkHelpers.makeConstList
B.cM=J.f0.prototype
B.c=J.u.prototype
B.a=J.dx.prototype
B.b=J.dz.prototype
B.B=J.cJ.prototype
B.cO=J.b4.prototype
B.cP=J.dA.prototype
B.ai=A.bS.prototype
B.aj=A.dE.prototype
B.aD=A.dF.prototype
B.R=A.dG.prototype
B.aE=A.dH.prototype
B.u=A.dJ.prototype
B.n=A.dK.prototype
B.e=A.bq.prototype
B.bO=J.ft.prototype
B.aL=J.ea.prototype
B.an=new A.eB(0,"direct")
B.aN=new A.eB(1,"alpha")
B.aO=new A.a3(0,"none")
B.ao=new A.a3(3,"bitfields")
B.ap=new A.a3(6,"alphaBitfields")
B.a0=new A.eD(0,"littleEndian")
B.S=new A.eD(1,"bigEndian")
B.ch=new A.dc(A.W("dc<0&>"))
B.aP=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.ci=function() {
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
B.cn=function(getTagFallback) {
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
B.cj=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.cm=function(hooks) {
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
B.cl=function(hooks) {
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
B.ck=function(hooks) {
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
B.aQ=function(hooks) { return hooks; }

B.aR=new A.fk()
B.aS=new A.hJ()
B.co=new A.fp()
B.T=new A.i0()
B.cp=new A.fR()
B.F=new A.ip()
B.cq=new A.iF()
B.aT=new A.iG()
B.aU=new A.h9(4,"luminance")
B.cr=new A.bF(0,"red")
B.cs=new A.bF(1,"green")
B.ct=new A.bF(2,"blue")
B.cu=new A.bF(3,"alpha")
B.cv=new A.bF(4,"other")
B.aV=new A.ct(0,"uint")
B.aq=new A.ct(1,"half")
B.ar=new A.ct(2,"float")
B.aW=new A.aD(0,"none")
B.cD=new A.hi(2,"both")
B.cE=new A.aP("Choose a photo smaller than 30 MB.",null,null)
B.cF=new A.aP("Unknown photo operation.",null,null)
B.as=new A.aP("This image could not be read. Try a PNG or JPEG.",null,null)
B.cG=new A.aP("Choose a photo with at most 24 megapixels.",null,null)
B.cH=new A.aP("Choose a still photo instead of an animated or multipage image.",null,null)
B.cI=new A.aP("Perturbation contains a non-finite value.",null,null)
B.v=new A.ae(0,"uint1")
B.x=new A.ae(1,"uint2")
B.G=new A.ae(10,"float32")
B.I=new A.ae(11,"float64")
B.y=new A.ae(2,"uint4")
B.f=new A.ae(3,"uint8")
B.l=new A.ae(4,"uint16")
B.H=new A.ae(5,"uint32")
B.J=new A.ae(6,"int8")
B.K=new A.ae(7,"int16")
B.L=new A.ae(8,"int32")
B.A=new A.ae(9,"float16")
B.j=new A.hl(2,"sequence")
B.cJ=new A.eU(0,"none")
B.at=new A.eU(1,"deflate")
B.aX=new A.cv(2,"cur")
B.d=new A.a4(0,"none")
B.aY=new A.a4(1,"byte")
B.aZ=new A.a4(10,"sRational")
B.b_=new A.a4(11,"single")
B.b0=new A.a4(12,"double")
B.b1=new A.a4(13,"ifd")
B.k=new A.a4(2,"ascii")
B.i=new A.a4(3,"short")
B.o=new A.a4(4,"long")
B.q=new A.a4(5,"rational")
B.b2=new A.a4(6,"sByte")
B.M=new A.a4(7,"undefined")
B.b3=new A.a4(8,"sShort")
B.b4=new A.a4(9,"sLong")
B.cN=new A.fb(0,"nearest")
B.kf=new A.fb(1,"linear")
B.cQ=new A.hI(!1)
B.a1=t([0,2,8],u.t)
B.cR=t([0,4,2,1],u.t)
B.cK=new A.cv(0,"invalid")
B.cL=new A.cv(1,"ico")
B.cT=t([B.cK,B.cL,B.aX],A.W("u<cv>"))
B.au=t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],u.t)
B.b6=t([252,243,207,63],u.t)
B.jj=new A.cQ(0,"none")
B.bR=new A.cQ(1,"background")
B.bS=new A.cQ(2,"previous")
B.b7=t([B.jj,B.bR,B.bS],A.W("u<cQ>"))
B.a2=t([292,260,226,226],u.t)
B.da=t([0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0],u.t)
B.b8=t([2,3,7],u.t)
B.a3=t([3226,6412,200,168,38,38,134,134,100,100,100,100,68,68,68,68],u.t)
B.dd=t([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],u.t)
B.dl=t([3,3,11],u.t)
B.aB=t([128,128,128,128,128,128,128,128,128,128,128],u.t)
B.bd=t([B.aB,B.aB,B.aB],u.S)
B.e5=t([253,136,254,255,228,219,128,128,128,128,128],u.t)
B.f0=t([189,129,242,255,227,213,255,219,128,128,128],u.t)
B.f5=t([106,126,227,252,214,209,255,255,128,128,128],u.t)
B.hr=t([B.e5,B.f0,B.f5],u.S)
B.hx=t([1,98,248,255,236,226,255,255,128,128,128],u.t)
B.ds=t([181,133,238,254,221,234,255,154,128,128,128],u.t)
B.dq=t([78,134,202,247,198,180,255,219,128,128,128],u.t)
B.hU=t([B.hx,B.ds,B.dq],u.S)
B.e0=t([1,185,249,255,243,255,128,128,128,128,128],u.t)
B.hv=t([184,150,247,255,236,224,128,128,128,128,128],u.t)
B.iI=t([77,110,216,255,236,230,128,128,128,128,128],u.t)
B.fY=t([B.e0,B.hv,B.iI],u.S)
B.h5=t([1,101,251,255,241,255,128,128,128,128,128],u.t)
B.e3=t([170,139,241,252,236,209,255,255,128,128,128],u.t)
B.hb=t([37,116,196,243,228,255,255,255,128,128,128],u.t)
B.dO=t([B.h5,B.e3,B.hb],u.S)
B.fh=t([1,204,254,255,245,255,128,128,128,128,128],u.t)
B.iX=t([207,160,250,255,238,128,128,128,128,128,128],u.t)
B.iW=t([102,103,231,255,211,171,128,128,128,128,128],u.t)
B.es=t([B.fh,B.iX,B.iW],u.S)
B.dH=t([1,152,252,255,240,255,128,128,128,128,128],u.t)
B.j1=t([177,135,243,255,234,225,128,128,128,128,128],u.t)
B.fT=t([80,129,211,255,194,224,128,128,128,128,128],u.t)
B.hq=t([B.dH,B.j1,B.fT],u.S)
B.bg=t([1,1,255,128,128,128,128,128,128,128,128],u.t)
B.hM=t([246,1,255,128,128,128,128,128,128,128,128],u.t)
B.fE=t([255,128,128,128,128,128,128,128,128,128,128],u.t)
B.jb=t([B.bg,B.hM,B.fE],u.S)
B.em=t([B.bd,B.hr,B.hU,B.fY,B.dO,B.es,B.hq,B.jb],u.o)
B.iK=t([198,35,237,223,193,187,162,160,145,155,62],u.t)
B.e4=t([131,45,198,221,172,176,220,157,252,221,1],u.t)
B.iJ=t([68,47,146,208,149,167,221,162,255,223,128],u.t)
B.fq=t([B.iK,B.e4,B.iJ],u.S)
B.hV=t([1,149,241,255,221,224,255,255,128,128,128],u.t)
B.i9=t([184,141,234,253,222,220,255,199,128,128,128],u.t)
B.fA=t([81,99,181,242,176,190,249,202,255,255,128],u.t)
B.ix=t([B.hV,B.i9,B.fA],u.S)
B.io=t([1,129,232,253,214,197,242,196,255,255,128],u.t)
B.iU=t([99,121,210,250,201,198,255,202,128,128,128],u.t)
B.hs=t([23,91,163,242,170,187,247,210,255,255,128],u.t)
B.fG=t([B.io,B.iU,B.hs],u.S)
B.eH=t([1,200,246,255,234,255,128,128,128,128,128],u.t)
B.ik=t([109,178,241,255,231,245,255,255,128,128,128],u.t)
B.d9=t([44,130,201,253,205,192,255,255,128,128,128],u.t)
B.iB=t([B.eH,B.ik,B.d9],u.S)
B.dB=t([1,132,239,251,219,209,255,165,128,128,128],u.t)
B.cU=t([94,136,225,251,218,190,255,255,128,128,128],u.t)
B.iq=t([22,100,174,245,186,161,255,199,128,128,128],u.t)
B.h3=t([B.dB,B.cU,B.iq],u.S)
B.i8=t([1,182,249,255,232,235,128,128,128,128,128],u.t)
B.hk=t([124,143,241,255,227,234,128,128,128,128,128],u.t)
B.eY=t([35,77,181,251,193,211,255,205,128,128,128],u.t)
B.f7=t([B.i8,B.hk,B.eY],u.S)
B.jc=t([1,157,247,255,236,231,255,255,128,128,128],u.t)
B.el=t([121,141,235,255,225,227,255,255,128,128,128],u.t)
B.il=t([45,99,188,251,195,217,255,224,128,128,128],u.t)
B.dN=t([B.jc,B.el,B.il],u.S)
B.cV=t([1,1,251,255,213,255,128,128,128,128,128],u.t)
B.df=t([203,1,248,255,255,128,128,128,128,128,128],u.t)
B.ia=t([137,1,177,255,224,255,128,128,128,128,128],u.t)
B.dI=t([B.cV,B.df,B.ia],u.S)
B.i1=t([B.fq,B.ix,B.fG,B.iB,B.h3,B.f7,B.dN,B.dI],u.o)
B.ew=t([253,9,248,251,207,208,255,192,128,128,128],u.t)
B.hN=t([175,13,224,243,193,185,249,198,255,255,128],u.t)
B.ja=t([73,17,171,221,161,179,236,167,255,234,128],u.t)
B.hF=t([B.ew,B.hN,B.ja],u.S)
B.hZ=t([1,95,247,253,212,183,255,255,128,128,128],u.t)
B.fM=t([239,90,244,250,211,209,255,255,128,128,128],u.t)
B.iH=t([155,77,195,248,188,195,255,255,128,128,128],u.t)
B.i7=t([B.hZ,B.fM,B.iH],u.S)
B.fj=t([1,24,239,251,218,219,255,205,128,128,128],u.t)
B.hP=t([201,51,219,255,196,186,128,128,128,128,128],u.t)
B.fL=t([69,46,190,239,201,218,255,228,128,128,128],u.t)
B.hX=t([B.fj,B.hP,B.fL],u.S)
B.f3=t([1,191,251,255,255,128,128,128,128,128,128],u.t)
B.h9=t([223,165,249,255,213,255,128,128,128,128,128],u.t)
B.hw=t([141,124,248,255,255,128,128,128,128,128,128],u.t)
B.im=t([B.f3,B.h9,B.hw],u.S)
B.fs=t([1,16,248,255,255,128,128,128,128,128,128],u.t)
B.ej=t([190,36,230,255,236,255,128,128,128,128,128],u.t)
B.e6=t([149,1,255,128,128,128,128,128,128,128,128],u.t)
B.dC=t([B.fs,B.ej,B.e6],u.S)
B.hu=t([1,226,255,128,128,128,128,128,128,128,128],u.t)
B.hI=t([247,192,255,128,128,128,128,128,128,128,128],u.t)
B.iG=t([240,128,255,128,128,128,128,128,128,128,128],u.t)
B.dh=t([B.hu,B.hI,B.iG],u.S)
B.iA=t([1,134,252,255,255,128,128,128,128,128,128],u.t)
B.hj=t([213,62,250,255,255,128,128,128,128,128,128],u.t)
B.j_=t([55,93,255,128,128,128,128,128,128,128,128],u.t)
B.ht=t([B.iA,B.hj,B.j_],u.S)
B.dX=t([B.hF,B.i7,B.hX,B.im,B.dC,B.dh,B.ht,B.bd],u.o)
B.hl=t([202,24,213,235,186,191,220,160,240,175,255],u.t)
B.e2=t([126,38,182,232,169,184,228,174,255,187,128],u.t)
B.dE=t([61,46,138,219,151,178,240,170,255,216,128],u.t)
B.i5=t([B.hl,B.e2,B.dE],u.S)
B.fS=t([1,112,230,250,199,191,247,159,255,255,128],u.t)
B.dM=t([166,109,228,252,211,215,255,174,128,128,128],u.t)
B.h7=t([39,77,162,232,172,180,245,178,255,255,128],u.t)
B.i3=t([B.fS,B.dM,B.h7],u.S)
B.fU=t([1,52,220,246,198,199,249,220,255,255,128],u.t)
B.eq=t([124,74,191,243,183,193,250,221,255,255,128],u.t)
B.eX=t([24,71,130,219,154,170,243,182,255,255,128],u.t)
B.i2=t([B.fU,B.eq,B.eX],u.S)
B.eV=t([1,182,225,249,219,240,255,224,128,128,128],u.t)
B.iZ=t([149,150,226,252,216,205,255,171,128,128,128],u.t)
B.jg=t([28,108,170,242,183,194,254,223,255,255,128],u.t)
B.iR=t([B.eV,B.iZ,B.jg],u.S)
B.jh=t([1,81,230,252,204,203,255,192,128,128,128],u.t)
B.ih=t([123,102,209,247,188,196,255,233,128,128,128],u.t)
B.iE=t([20,95,153,243,164,173,255,203,128,128,128],u.t)
B.ii=t([B.jh,B.ih,B.iE],u.S)
B.fx=t([1,222,248,255,216,213,128,128,128,128,128],u.t)
B.hi=t([168,175,246,252,235,205,255,255,128,128,128],u.t)
B.f_=t([47,116,215,255,211,212,255,255,128,128,128],u.t)
B.ee=t([B.fx,B.hi,B.f_],u.S)
B.fw=t([1,121,236,253,212,214,255,255,128,128,128],u.t)
B.fV=t([141,84,213,252,201,202,255,219,128,128,128],u.t)
B.hD=t([42,80,160,240,162,185,255,205,128,128,128],u.t)
B.f9=t([B.fw,B.fV,B.hD],u.S)
B.j5=t([244,1,255,128,128,128,128,128,128,128,128],u.t)
B.cS=t([238,1,255,128,128,128,128,128,128,128,128],u.t)
B.hJ=t([B.bg,B.j5,B.cS],u.S)
B.d7=t([B.i5,B.i3,B.i2,B.iR,B.ii,B.ee,B.f9,B.hJ],u.o)
B.dD=t([B.em,B.i1,B.dX,B.d7],u.M)
B.ba=t([511,1023,2047,4095],u.t)
B.bb=t([63,207,243,252],u.t)
B.e8=t([8,8,4,2],u.t)
B.d3=t([173,148,140],u.t)
B.d4=t([176,155,140,135],u.t)
B.d1=t([180,157,141,134,130],u.t)
B.de=t([254,254,243,230,196,177,153,140,133,130,129],u.t)
B.bc=t([B.d3,B.d4,B.d1,B.de],u.S)
B.ea=t([0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576],u.t)
B.eg=t([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],u.t)
B.be=t([0,1,3,7,15,31,63,127,255,511,1023,2047,4095],u.t)
B.a4=t([0,1,2,3,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,16,17,18,18,19,19,20,20,20,20,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29],u.t)
B.a5=t([0,1,1,2,4,8,1,1,2,4,8,4,8,4],u.t)
B.bf=t([2954,2956,2958,2962,2970,2986,3018,3082,3212,3468,3980,5004],u.t)
B.bh=t([280,256,256,256,40],u.t)
B.a6=t([62,62,30,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,588,588,588,588,588,588,588,588,1680,1680,20499,22547,24595,26643,1776,1776,1808,1808,-24557,-22509,-20461,-18413,1904,1904,1936,1936,-16365,-14317,782,782,782,782,814,814,814,814,-12269,-10221,10257,10257,12305,12305,14353,14353,16403,18451,1712,1712,1744,1744,28691,30739,-32749,-30701,-28653,-26605,2061,2061,2061,2061,2061,2061,2061,2061,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,750,750,750,750,1616,1616,1648,1648,1424,1424,1456,1456,1488,1488,1520,1520,1840,1840,1872,1872,1968,1968,8209,8209,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,1552,1552,1584,1584,2000,2000,2032,2032,976,976,1008,1008,1040,1040,1072,1072,1296,1296,1328,1328,718,718,718,718,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,4113,4113,6161,6161,848,848,880,880,912,912,944,944,622,622,622,622,654,654,654,654,1104,1104,1136,1136,1168,1168,1200,1200,1232,1232,1264,1264,686,686,686,686,1360,1360,1392,1392,12,12,12,12,12,12,12,12,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390],u.t)
B.ax=t([4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157],u.t)
B.bi=t([24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112],u.t)
B.ay=t([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284],u.t)
B.az=t([0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28],u.t)
B.bj=t([B.aV,B.aq,B.ar],A.W("u<ct>"))
B.U=t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],u.t)
B.bk=t([254,253,251,247,239,223,191,127],u.t)
B.a7=t([12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8],u.t)
B.aA=t([A.pw(),A.po(),A.pD(),A.pB(),A.py(),A.px(),A.pz()],u.z)
B.bl=t([0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5],u.t)
B.aI=new A.a_(0,"whiteIsZero")
B.jK=new A.a_(1,"blackIsZero")
B.jR=new A.a_(2,"rgb")
B.aK=new A.a_(3,"palette")
B.jS=new A.a_(4,"transparencyMask")
B.c3=new A.a_(5,"cmyk")
B.jT=new A.a_(6,"yCbCr")
B.jU=new A.a_(7,"reserved7")
B.jV=new A.a_(8,"cieLab")
B.jW=new A.a_(9,"iccLab")
B.jL=new A.a_(10,"ituLab")
B.jM=new A.a_(11,"logL")
B.jN=new A.a_(12,"logLuv")
B.jO=new A.a_(13,"colorFilterArray")
B.jP=new A.a_(14,"linearRaw")
B.jQ=new A.a_(15,"depth")
B.aJ=new A.a_(16,"unknown")
B.bn=t([B.aI,B.jK,B.jR,B.aK,B.jS,B.c3,B.jT,B.jU,B.jV,B.jW,B.jL,B.jM,B.jN,B.jO,B.jP,B.jQ,B.aJ],A.W("u<a_>"))
B.bP=new A.dY(0,"source")
B.bQ=new A.dY(1,"over")
B.bp=t([B.bP,B.bQ],A.W("u<dY>"))
B.jC=new A.c6(0,"invalid")
B.c1=new A.c6(1,"uint")
B.h=new A.c6(2,"int")
B.X=new A.c6(3,"float")
B.bq=t([B.jC,B.c1,B.h,B.X],A.W("u<c6>"))
B.br=t([17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15],u.t)
B.a8=t([-0.0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9],u.t)
B.bs=t([B.d,B.aY,B.k,B.i,B.o,B.q,B.b2,B.M,B.b3,B.b4,B.aZ,B.b_,B.b0,B.b1],A.W("u<a4>"))
B.bt=t([0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15],u.t)
B.cw=new A.aD(1,"rle")
B.cx=new A.aD(2,"zips")
B.cy=new A.aD(3,"zip")
B.cz=new A.aD(4,"piz")
B.cA=new A.aD(5,"pxr24")
B.cB=new A.aD(6,"b44")
B.cC=new A.aD(7,"b44a")
B.bu=t([B.aW,B.cw,B.cx,B.cy,B.cz,B.cA,B.cB,B.cC],A.W("u<aD>"))
B.hA=t([231,120,48,89,115,113,120,152,112],u.t)
B.d8=t([152,179,64,126,170,118,46,70,95],u.t)
B.fK=t([175,69,143,80,85,82,72,155,103],u.t)
B.dv=t([56,58,10,171,218,189,17,13,152],u.t)
B.h6=t([114,26,17,163,44,195,21,10,173],u.t)
B.hh=t([121,24,80,195,26,62,44,64,85],u.t)
B.h2=t([144,71,10,38,171,213,144,34,26],u.t)
B.is=t([170,46,55,19,136,160,33,206,71],u.t)
B.eI=t([63,20,8,114,114,208,12,9,226],u.t)
B.fi=t([81,40,11,96,182,84,29,16,36],u.t)
B.cW=t([B.hA,B.d8,B.fK,B.dv,B.h6,B.hh,B.h2,B.is,B.eI,B.fi],u.S)
B.ei=t([134,183,89,137,98,101,106,165,148],u.t)
B.ic=t([72,187,100,130,157,111,32,75,80],u.t)
B.ho=t([66,102,167,99,74,62,40,234,128],u.t)
B.dg=t([41,53,9,178,241,141,26,8,107],u.t)
B.fe=t([74,43,26,146,73,166,49,23,157],u.t)
B.eQ=t([65,38,105,160,51,52,31,115,128],u.t)
B.eT=t([104,79,12,27,217,255,87,17,7],u.t)
B.fI=t([87,68,71,44,114,51,15,186,23],u.t)
B.i4=t([47,41,14,110,182,183,21,17,194],u.t)
B.hL=t([66,45,25,102,197,189,23,18,22],u.t)
B.iF=t([B.ei,B.ic,B.ho,B.dg,B.fe,B.eQ,B.eT,B.fI,B.i4,B.hL],u.S)
B.hz=t([88,88,147,150,42,46,45,196,205],u.t)
B.h8=t([43,97,183,117,85,38,35,179,61],u.t)
B.eZ=t([39,53,200,87,26,21,43,232,171],u.t)
B.fD=t([56,34,51,104,114,102,29,93,77],u.t)
B.fZ=t([39,28,85,171,58,165,90,98,64],u.t)
B.eM=t([34,22,116,206,23,34,43,166,73],u.t)
B.cX=t([107,54,32,26,51,1,81,43,31],u.t)
B.iv=t([68,25,106,22,64,171,36,225,114],u.t)
B.eh=t([34,19,21,102,132,188,16,76,124],u.t)
B.iO=t([62,18,78,95,85,57,50,48,51],u.t)
B.eu=t([B.hz,B.h8,B.eZ,B.fD,B.fZ,B.eM,B.cX,B.iv,B.eh,B.iO],u.S)
B.fW=t([193,101,35,159,215,111,89,46,111],u.t)
B.dW=t([60,148,31,172,219,228,21,18,111],u.t)
B.dA=t([112,113,77,85,179,255,38,120,114],u.t)
B.iL=t([40,42,1,196,245,209,10,25,109],u.t)
B.fu=t([88,43,29,140,166,213,37,43,154],u.t)
B.eO=t([61,63,30,155,67,45,68,1,209],u.t)
B.f4=t([100,80,8,43,154,1,51,26,71],u.t)
B.dj=t([142,78,78,16,255,128,34,197,171],u.t)
B.fR=t([41,40,5,102,211,183,4,1,221],u.t)
B.eA=t([51,50,17,168,209,192,23,25,82],u.t)
B.et=t([B.fW,B.dW,B.dA,B.iL,B.fu,B.eO,B.f4,B.dj,B.fR,B.eA],u.S)
B.eW=t([138,31,36,171,27,166,38,44,229],u.t)
B.er=t([67,87,58,169,82,115,26,59,179],u.t)
B.hT=t([63,59,90,180,59,166,93,73,154],u.t)
B.iC=t([40,40,21,116,143,209,34,39,175],u.t)
B.dp=t([47,15,16,183,34,223,49,45,183],u.t)
B.e1=t([46,17,33,183,6,98,15,32,183],u.t)
B.ji=t([57,46,22,24,128,1,54,17,37],u.t)
B.f6=t([65,32,73,115,28,128,23,128,205],u.t)
B.hn=t([40,3,9,115,51,192,18,6,223],u.t)
B.fc=t([87,37,9,115,59,77,64,21,47],u.t)
B.fQ=t([B.eW,B.er,B.hT,B.iC,B.dp,B.e1,B.ji,B.f6,B.hn,B.fc],u.S)
B.j4=t([104,55,44,218,9,54,53,130,226],u.t)
B.dL=t([64,90,70,205,40,41,23,26,57],u.t)
B.hS=t([54,57,112,184,5,41,38,166,213],u.t)
B.eN=t([30,34,26,133,152,116,10,32,134],u.t)
B.hG=t([39,19,53,221,26,114,32,73,255],u.t)
B.ey=t([31,9,65,234,2,15,1,118,73],u.t)
B.fP=t([75,32,12,51,192,255,160,43,51],u.t)
B.eP=t([88,31,35,67,102,85,55,186,85],u.t)
B.fn=t([56,21,23,111,59,205,45,37,192],u.t)
B.fo=t([55,38,70,124,73,102,1,34,98],u.t)
B.j8=t([B.j4,B.dL,B.hS,B.eN,B.hG,B.ey,B.fP,B.eP,B.fn,B.fo],u.S)
B.fm=t([125,98,42,88,104,85,117,175,82],u.t)
B.eS=t([95,84,53,89,128,100,113,101,45],u.t)
B.hc=t([75,79,123,47,51,128,81,171,1],u.t)
B.dJ=t([57,17,5,71,102,57,53,41,49],u.t)
B.hO=t([38,33,13,121,57,73,26,1,85],u.t)
B.iY=t([41,10,67,138,77,110,90,47,114],u.t)
B.fN=t([115,21,2,10,102,255,166,23,6],u.t)
B.ek=t([101,29,16,10,85,128,101,196,26],u.t)
B.f2=t([57,18,10,102,102,213,34,20,43],u.t)
B.ft=t([117,20,15,36,163,128,68,1,26],u.t)
B.fH=t([B.fm,B.eS,B.hc,B.dJ,B.hO,B.iY,B.fN,B.ek,B.f2,B.ft],u.S)
B.fa=t([102,61,71,37,34,53,31,243,192],u.t)
B.iV=t([69,60,71,38,73,119,28,222,37],u.t)
B.fd=t([68,45,128,34,1,47,11,245,171],u.t)
B.d0=t([62,17,19,70,146,85,55,62,70],u.t)
B.je=t([37,43,37,154,100,163,85,160,1],u.t)
B.iS=t([63,9,92,136,28,64,32,201,85],u.t)
B.ig=t([75,15,9,9,64,255,184,119,16],u.t)
B.ep=t([86,6,28,5,64,255,25,248,1],u.t)
B.hK=t([56,8,17,132,137,255,55,116,128],u.t)
B.dF=t([58,15,20,82,135,57,26,121,40],u.t)
B.h1=t([B.fa,B.iV,B.fd,B.d0,B.je,B.iS,B.ig,B.ep,B.hK,B.dF],u.S)
B.hf=t([164,50,31,137,154,133,25,35,218],u.t)
B.eo=t([51,103,44,131,131,123,31,6,158],u.t)
B.iQ=t([86,40,64,135,148,224,45,183,128],u.t)
B.fJ=t([22,26,17,131,240,154,14,1,209],u.t)
B.dZ=t([45,16,21,91,64,222,7,1,197],u.t)
B.iD=t([56,21,39,155,60,138,23,102,213],u.t)
B.j7=t([83,12,13,54,192,255,68,47,28],u.t)
B.hp=t([85,26,85,85,128,128,32,146,171],u.t)
B.fF=t([18,11,7,63,144,171,4,4,246],u.t)
B.ev=t([35,27,10,146,174,171,12,26,128],u.t)
B.fy=t([B.hf,B.eo,B.iQ,B.fJ,B.dZ,B.iD,B.j7,B.hp,B.fF,B.ev],u.S)
B.i0=t([190,80,35,99,180,80,126,54,45],u.t)
B.ir=t([85,126,47,87,176,51,41,20,32],u.t)
B.hQ=t([101,75,128,139,118,146,116,128,85],u.t)
B.ib=t([56,41,15,176,236,85,37,9,62],u.t)
B.dG=t([71,30,17,119,118,255,17,18,138],u.t)
B.h0=t([101,38,60,138,55,70,43,26,142],u.t)
B.fB=t([146,36,19,30,171,255,97,27,20],u.t)
B.hy=t([138,45,61,62,219,1,81,188,64],u.t)
B.iM=t([32,41,20,117,151,142,20,21,163],u.t)
B.it=t([112,19,12,61,195,128,48,4,24],u.t)
B.hW=t([B.i0,B.ir,B.hQ,B.ib,B.dG,B.h0,B.fB,B.hy,B.iM,B.it],u.S)
B.bv=t([B.cW,B.iF,B.eu,B.et,B.fQ,B.j8,B.fH,B.h1,B.fy,B.hW],u.o)
B.ak=new A.ah(0,"none")
B.D=new A.ah(1,"palette")
B.c0=new A.ah(2,"rgb")
B.jw=new A.ah(3,"gray")
B.jx=new A.ah(4,"reserved4")
B.jy=new A.ah(5,"reserved5")
B.jz=new A.ah(6,"reserved6")
B.jA=new A.ah(7,"reserved7")
B.jB=new A.ah(8,"reserved8")
B.E=new A.ah(9,"paletteRle")
B.c_=new A.ah(10,"rgbRle")
B.jv=new A.ah(11,"grayRle")
B.bw=t([B.ak,B.D,B.c0,B.jw,B.jx,B.jy,B.jz,B.jA,B.jB,B.E,B.c_,B.jv],A.W("u<ah>"))
B.ha=t([0,1,1,1,0],u.t)
B.bx=t([A.pg(),A.pn(),A.pp(),A.pi(),A.pl(),A.pr(),A.pk(),A.pq(),A.ph(),A.pj()],u.z)
B.aw=t([8,0,8,0],u.t)
B.dK=t([5,3,5,3],u.t)
B.dm=t([3,5,3,5],u.t)
B.b5=t([0,8,0,8],u.t)
B.b9=t([4,4,4,4],u.t)
B.dz=t([4,4,0,0],u.t)
B.by=t([B.aw,B.dK,B.dm,B.b5,B.aw,B.b9,B.dz,B.b5],u.S)
B.a9=t([80,88,23,71,30,30,62,62,4,4,4,4,4,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41],u.t)
B.N=t([0,1,4,5,16,17,20,21,64,65,68,69,80,81,84,85,256,257,260,261,272,273,276,277,320,321,324,325,336,337,340,341,1024,1025,1028,1029,1040,1041,1044,1045,1088,1089,1092,1093,1104,1105,1108,1109,1280,1281,1284,1285,1296,1297,1300,1301,1344,1345,1348,1349,1360,1361,1364,1365,4096,4097,4100,4101,4112,4113,4116,4117,4160,4161,4164,4165,4176,4177,4180,4181,4352,4353,4356,4357,4368,4369,4372,4373,4416,4417,4420,4421,4432,4433,4436,4437,5120,5121,5124,5125,5136,5137,5140,5141,5184,5185,5188,5189,5200,5201,5204,5205,5376,5377,5380,5381,5392,5393,5396,5397,5440,5441,5444,5445,5456,5457,5460,5461,16384,16385,16388,16389,16400,16401,16404,16405,16448,16449,16452,16453,16464,16465,16468,16469,16640,16641,16644,16645,16656,16657,16660,16661,16704,16705,16708,16709,16720,16721,16724,16725,17408,17409,17412,17413,17424,17425,17428,17429,17472,17473,17476,17477,17488,17489,17492,17493,17664,17665,17668,17669,17680,17681,17684,17685,17728,17729,17732,17733,17744,17745,17748,17749,20480,20481,20484,20485,20496,20497,20500,20501,20544,20545,20548,20549,20560,20561,20564,20565,20736,20737,20740,20741,20752,20753,20756,20757,20800,20801,20804,20805,20816,20817,20820,20821,21504,21505,21508,21509,21520,21521,21524,21525,21568,21569,21572,21573,21584,21585,21588,21589,21760,21761,21764,21765,21776,21777,21780,21781,21824,21825,21828,21829,21840,21841,21844,21845],u.t)
B.bz=t([127,127,191,127,159,191,223,127,143,159,175,191,207,223,239,127,135,143,151,159,167,175,183,191,199,207,215,223,231,239,247,127,131,135,139,143,147,151,155,159,163,167,171,175,179,183,187,191,195,199,203,207,211,215,219,223,227,231,235,239,243,247,251,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251,253,127],u.t)
B.aa=t([7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],u.t)
B.C=t([28679,28679,31752,-32759,-31735,-30711,-29687,-28663,29703,29703,30727,30727,-27639,-26615,-25591,-24567],u.t)
B.ab=t([6430,6400,6400,6400,3225,3225,3225,3225,944,944,944,944,976,976,976,976,1456,1456,1456,1456,1488,1488,1488,1488,718,718,718,718,718,718,718,718,750,750,750,750,750,750,750,750,1520,1520,1520,1520,1552,1552,1552,1552,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,654,654,654,654,654,654,654,654,1072,1072,1072,1072,1104,1104,1104,1104,1136,1136,1136,1136,1168,1168,1168,1168,1200,1200,1200,1200,1232,1232,1232,1232,622,622,622,622,622,622,622,622,1008,1008,1008,1008,1040,1040,1040,1040,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,1712,1712,1712,1712,1744,1744,1744,1744,846,846,846,846,846,846,846,846,1264,1264,1264,1264,1296,1296,1296,1296,1328,1328,1328,1328,1360,1360,1360,1360,1392,1392,1392,1392,1424,1424,1424,1424,686,686,686,686,686,686,686,686,910,910,910,910,910,910,910,910,1968,1968,1968,1968,2000,2000,2000,2000,2032,2032,2032,2032,16,16,16,16,10257,10257,10257,10257,12305,12305,12305,12305,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,878,878,878,878,878,878,878,878,1904,1904,1904,1904,1936,1936,1936,1936,-18413,-18413,-16365,-16365,-14317,-14317,-10221,-10221,590,590,590,590,590,590,590,590,782,782,782,782,782,782,782,782,1584,1584,1584,1584,1616,1616,1616,1616,1648,1648,1648,1648,1680,1680,1680,1680,814,814,814,814,814,814,814,814,1776,1776,1776,1776,1808,1808,1808,1808,1840,1840,1840,1840,1872,1872,1872,1872,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,14353,14353,14353,14353,16401,16401,16401,16401,22547,22547,24595,24595,20497,20497,20497,20497,18449,18449,18449,18449,26643,26643,28691,28691,30739,30739,-32749,-32749,-30701,-30701,-28653,-28653,-26605,-26605,-24557,-24557,-22509,-22509,-20461,-20461,8207,8207,8207,8207,8207,8207,8207,8207,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232],u.t)
B.ad=t([0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0],u.t)
B.jk=new A.br(0,"none")
B.jl=new A.br(1,"sub")
B.jm=new A.br(2,"up")
B.jn=new A.br(3,"average")
B.jo=new A.br(4,"paeth")
B.ae=t([B.jk,B.jl,B.jm,B.jn,B.jo],A.W("u<br>"))
B.z=t([0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117],u.t)
B.w=t([0,1,3,7,15,31,63,127,255],u.t)
B.af=t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],u.t)
B.r=t([255,255,255,255,255,255,255,255,255,255,255],u.t)
B.P=t([B.r,B.r,B.r],u.S)
B.fC=t([176,246,255,255,255,255,255,255,255,255,255],u.t)
B.j0=t([223,241,252,255,255,255,255,255,255,255,255],u.t)
B.ed=t([249,253,253,255,255,255,255,255,255,255,255],u.t)
B.fO=t([B.fC,B.j0,B.ed],u.S)
B.fk=t([255,244,252,255,255,255,255,255,255,255,255],u.t)
B.f8=t([234,254,254,255,255,255,255,255,255,255,255],u.t)
B.bE=t([253,255,255,255,255,255,255,255,255,255,255],u.t)
B.en=t([B.fk,B.f8,B.bE],u.S)
B.iP=t([255,246,254,255,255,255,255,255,255,255,255],u.t)
B.hH=t([239,253,254,255,255,255,255,255,255,255,255],u.t)
B.bA=t([254,255,254,255,255,255,255,255,255,255,255],u.t)
B.id=t([B.iP,B.hH,B.bA],u.S)
B.bm=t([255,248,254,255,255,255,255,255,255,255,255],u.t)
B.eE=t([251,255,254,255,255,255,255,255,255,255,255],u.t)
B.hg=t([B.bm,B.eE,B.r],u.S)
B.av=t([255,253,254,255,255,255,255,255,255,255,255],u.t)
B.he=t([251,254,254,255,255,255,255,255,255,255,255],u.t)
B.eL=t([B.av,B.he,B.bA],u.S)
B.dt=t([255,254,253,255,254,255,255,255,255,255,255],u.t)
B.fg=t([250,255,254,255,254,255,255,255,255,255,255],u.t)
B.ac=t([254,255,255,255,255,255,255,255,255,255,255],u.t)
B.fv=t([B.dt,B.fg,B.ac],u.S)
B.f1=t([B.P,B.fO,B.en,B.id,B.hg,B.eL,B.fv,B.P],u.o)
B.d6=t([217,255,255,255,255,255,255,255,255,255,255],u.t)
B.fz=t([225,252,241,253,255,255,254,255,255,255,255],u.t)
B.hR=t([234,250,241,250,253,255,253,254,255,255,255],u.t)
B.iu=t([B.d6,B.fz,B.hR],u.S)
B.aC=t([255,254,255,255,255,255,255,255,255,255,255],u.t)
B.ef=t([223,254,254,255,255,255,255,255,255,255,255],u.t)
B.e_=t([238,253,254,254,255,255,255,255,255,255,255],u.t)
B.hE=t([B.aC,B.ef,B.e_],u.S)
B.fb=t([249,254,255,255,255,255,255,255,255,255,255],u.t)
B.iN=t([B.bm,B.fb,B.r],u.S)
B.iw=t([255,253,255,255,255,255,255,255,255,255,255],u.t)
B.hd=t([247,254,255,255,255,255,255,255,255,255,255],u.t)
B.h4=t([B.iw,B.hd,B.r],u.S)
B.dV=t([252,255,255,255,255,255,255,255,255,255,255],u.t)
B.di=t([B.av,B.dV,B.r],u.S)
B.bG=t([255,254,254,255,255,255,255,255,255,255,255],u.t)
B.dY=t([B.bG,B.bE,B.r],u.S)
B.hC=t([255,254,253,255,255,255,255,255,255,255,255],u.t)
B.bo=t([250,255,255,255,255,255,255,255,255,255,255],u.t)
B.dU=t([B.hC,B.bo,B.ac],u.S)
B.dw=t([B.iu,B.hE,B.iN,B.h4,B.di,B.dY,B.dU,B.P],u.o)
B.hY=t([186,251,250,255,255,255,255,255,255,255,255],u.t)
B.eB=t([234,251,244,254,255,255,255,255,255,255,255],u.t)
B.ie=t([251,251,243,253,254,255,254,255,255,255,255],u.t)
B.eJ=t([B.hY,B.eB,B.ie],u.S)
B.eG=t([236,253,254,255,255,255,255,255,255,255,255],u.t)
B.hB=t([251,253,253,254,254,255,255,255,255,255,255],u.t)
B.fp=t([B.av,B.eG,B.hB],u.S)
B.i_=t([254,254,254,255,255,255,255,255,255,255,255],u.t)
B.eC=t([B.bG,B.i_,B.r],u.S)
B.ij=t([254,254,255,255,255,255,255,255,255,255,255],u.t)
B.eF=t([B.aC,B.ij,B.ac],u.S)
B.bH=t([B.r,B.ac,B.r],u.S)
B.du=t([B.eJ,B.fp,B.eC,B.eF,B.bH,B.P,B.P,B.P],u.o)
B.ff=t([248,255,255,255,255,255,255,255,255,255,255],u.t)
B.eR=t([250,254,252,254,255,255,255,255,255,255,255],u.t)
B.ez=t([248,254,249,253,255,255,255,255,255,255,255],u.t)
B.fr=t([B.ff,B.eR,B.ez],u.S)
B.dr=t([255,253,253,255,255,255,255,255,255,255,255],u.t)
B.iz=t([246,253,253,255,255,255,255,255,255,255,255],u.t)
B.eK=t([252,254,251,254,254,255,255,255,255,255,255],u.t)
B.iy=t([B.dr,B.iz,B.eK],u.S)
B.jd=t([255,254,252,255,255,255,255,255,255,255,255],u.t)
B.ex=t([248,254,253,255,255,255,255,255,255,255,255],u.t)
B.dT=t([253,255,254,254,255,255,255,255,255,255,255],u.t)
B.hm=t([B.jd,B.ex,B.dT],u.S)
B.j6=t([255,251,254,255,255,255,255,255,255,255,255],u.t)
B.fX=t([245,251,254,255,255,255,255,255,255,255,255],u.t)
B.h_=t([253,253,254,255,255,255,255,255,255,255,255],u.t)
B.e9=t([B.j6,B.fX,B.h_],u.S)
B.eb=t([255,251,253,255,255,255,255,255,255,255,255],u.t)
B.fl=t([252,253,254,255,255,255,255,255,255,255,255],u.t)
B.i6=t([B.eb,B.fl,B.aC],u.S)
B.dP=t([255,252,255,255,255,255,255,255,255,255,255],u.t)
B.j3=t([249,255,254,255,255,255,255,255,255,255,255],u.t)
B.eU=t([255,255,254,255,255,255,255,255,255,255,255],u.t)
B.d_=t([B.dP,B.j3,B.eU],u.S)
B.jf=t([255,255,253,255,255,255,255,255,255,255,255],u.t)
B.eD=t([B.jf,B.bo,B.r],u.S)
B.dS=t([B.fr,B.iy,B.hm,B.e9,B.i6,B.d_,B.eD,B.bH],u.o)
B.ip=t([B.f1,B.dw,B.du,B.dS],u.M)
B.c6=new A.a3(1,"rle8")
B.cb=new A.a3(2,"rle4")
B.cc=new A.a3(4,"jpeg")
B.cd=new A.a3(5,"png")
B.ce=new A.a3(7,"reserved7")
B.cf=new A.a3(8,"reserved8")
B.cg=new A.a3(9,"reserved9")
B.c7=new A.a3(10,"reserved10")
B.c8=new A.a3(11,"cmyk")
B.c9=new A.a3(12,"cmykRle8")
B.ca=new A.a3(13,"cmykRle4")
B.ag=t([B.aO,B.c6,B.cb,B.ao,B.cc,B.cd,B.ap,B.ce,B.cf,B.cg,B.c7,B.c8,B.c9,B.ca],A.W("u<a3>"))
B.O=t([0,128,192,224,240,248,252,254,255],u.t)
B.bB=t([137,80,78,71,13,10,26,10],u.t)
B.V=t([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215,33554431,67108863,134217727,268435455,536870911,1073741823,2147483647,4294967295],u.t)
B.bC=t([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258],u.t)
B.bD=t([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],u.t)
B.c4=new A.c7(0,"predictor")
B.ka=new A.c7(1,"crossColor")
B.kb=new A.c7(2,"subtractGreen")
B.c5=new A.c7(3,"colorIndexing")
B.bF=t([B.c4,B.ka,B.kb,B.c5],A.W("u<c7>"))
B.t=t([0,17,34,51,68,85,102,119,136,153,170,187,204,221,238,255],u.t)
B.iT=t([73,67,67,95,80,82,79,70,73,76,69,0],u.t)
B.bI=t([A.ps(),A.pm(),A.pC(),A.pA(),A.pu(),A.pt(),A.pv()],u.z)
B.bJ=t([0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396],u.t)
B.bK=t([null,A.pS(),A.pT(),A.pR()],A.W("u<~(i,i,i,i,i,b9)?>"))
B.ah=t([0,36,72,109,145,182,218,255],u.t)
B.p=t([0,8,16,24,32,41,49,57,65,74,82,90,98,106,115,123,131,139,148,156,164,172,180,189,197,205,213,222,230,238,246,255],u.t)
B.j2=t([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8],u.t)
B.jr=new A.aH(0,"bitmap")
B.bW=new A.aH(1,"grayscale")
B.js=new A.aH(2,"indexed")
B.bX=new A.aH(3,"rgb")
B.bY=new A.aH(4,"cmyk")
B.jt=new A.aH(5,"multiChannel")
B.ju=new A.aH(6,"duoTone")
B.bZ=new A.aH(7,"lab")
B.bL=t([B.jr,B.bW,B.js,B.bX,B.bY,B.jt,B.ju,B.bZ],A.W("u<aH>"))
B.j9=t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0],u.t)
B.dc=t([2,6,2,6],u.t)
B.dQ=t([6,2,6,2],u.t)
B.db=t([2,2,6,6],u.t)
B.d5=t([1,3,3,9],u.t)
B.dx=t([4,0,12,0],u.t)
B.dk=t([3,1,9,3],u.t)
B.e7=t([8,8,0,0],u.t)
B.dy=t([4,12,0,0],u.t)
B.d2=t([16,0,0,0],u.t)
B.cZ=t([12,4,0,0],u.t)
B.dR=t([6,6,2,2],u.t)
B.dn=t([3,9,1,3],u.t)
B.cY=t([12,0,4,0],u.t)
B.ec=t([9,3,3,1],u.t)
B.m=t([B.b9,B.dc,B.aw,B.dQ,B.db,B.d5,B.dx,B.dk,B.e7,B.dy,B.d2,B.cZ,B.dR,B.dn,B.cY,B.ec],u.S)
B.Q=t([0,-128,64,-64,32,-96,96,-32,16,-112,80,-48,48,-80,112,-16,8,-120,72,-56,40,-88,104,-24,24,-104,88,-40,56,-72,120,-8,4,-124,68,-60,36,-92,100,-28,20,-108,84,-44,52,-76,116,-12,12,-116,76,-52,44,-84,108,-20,28,-100,92,-36,60,-68,124,-4,2,-126,66,-62,34,-94,98,-30,18,-110,82,-46,50,-78,114,-14,10,-118,74,-54,42,-86,106,-22,26,-102,90,-38,58,-70,122,-6,6,-122,70,-58,38,-90,102,-26,22,-106,86,-42,54,-74,118,-10,14,-114,78,-50,46,-82,110,-18,30,-98,94,-34,62,-66,126,-2,1,-127,65,-63,33,-95,97,-31,17,-111,81,-47,49,-79,113,-15,9,-119,73,-55,41,-87,105,-23,25,-103,89,-39,57,-71,121,-7,5,-123,69,-59,37,-91,101,-27,21,-107,85,-43,53,-75,117,-11,13,-115,77,-51,45,-83,109,-19,29,-99,93,-35,61,-67,125,-3,3,-125,67,-61,35,-93,99,-29,19,-109,83,-45,51,-77,115,-13,11,-117,75,-53,43,-85,107,-21,27,-101,91,-37,59,-69,123,-5,7,-121,71,-57,39,-89,103,-25,23,-105,87,-41,55,-73,119,-9,15,-113,79,-49,47,-81,111,-17,31,-97,95,-33,63,-65,127,-1],u.t)
B.bM=new A.bH([34665,"exif",40965,"interop",34853,"gps"],A.W("bH<i,S>"))
B.bN=new A.bH([B.v,1,B.x,3,B.y,15,B.f,255,B.l,65535,B.H,4294967295,B.J,127,B.K,32767,B.L,2147483647,B.A,1,B.G,1,B.I,1],A.W("bH<ae,i>"))
B.jp=new A.fu(0,"none")
B.jq=new A.fu(4,"paeth")
B.W=new A.bs(0,"invalid")
B.bT=new A.bs(1,"pbm")
B.bU=new A.bs(2,"pgm2")
B.aF=new A.bs(3,"pgm5")
B.bV=new A.bs(4,"ppm3")
B.aG=new A.bs(5,"ppm6")
B.aH=new A.aA(0,"bilevel")
B.jD=new A.aA(1,"gray4bit")
B.jE=new A.aA(2,"gray")
B.jF=new A.aA(3,"grayAlpha")
B.jG=new A.aA(4,"palette")
B.c2=new A.aA(5,"rgb")
B.jH=new A.aA(6,"rgba")
B.jI=new A.aA(7,"yCbCrSub")
B.Y=new A.aA(8,"generic")
B.jJ=new A.aA(9,"invalid")
B.jX=A.aM("pU")
B.jY=A.aM("ma")
B.jZ=A.aM("ja")
B.k_=A.aM("hj")
B.k0=A.aM("hy")
B.k1=A.aM("dt")
B.k2=A.aM("jd")
B.k3=A.aM("O")
B.k4=A.aM("jD")
B.k5=A.aM("b8")
B.k6=A.aM("n0")
B.k7=A.aM("b9")
B.k8=new A.fS(!1)
B.k9=new A.fS(!0)
B.Z=new A.d1(0,"undefined")
B.aM=new A.d1(1,"lossy")
B.al=new A.d1(2,"lossless")
B.kc=new A.d1(3,"animated")
B.am=new A.d3(0,"none")
B.kd=new A.d3(1,"partial")
B.ke=new A.d3(2,"full")
B.a_=new A.d3(3,"finish")})();(function staticFields(){$.iv=null
$.au=A.k([],A.W("u<O>"))
$.kJ=null
$.k9=null
$.k8=null
$.lw=null
$.lm=null
$.lz=null
$.iK=null
$.iX=null
$.jR=null
$.iw=A.k([],A.W("u<r<O>?>"))
$.bi=A.kW()
$.jM=null
$.kU=!1
$.nF=A.k([A.jX(),A.pE(),A.pJ(),A.pK(),A.pL(),A.pM(),A.pN(),A.pO(),A.pP(),A.pQ(),A.pF(),A.pG(),A.pH(),A.pI(),A.jX(),A.jX()],A.W("u<i(i,b8,i)>"))
$.K=null
$.kf=A.kW()})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal,s=hunkHelpers.lazy
t($,"pW","lD",()=>A.iS("_$dart_dartClosure"))
t($,"pV","jY",()=>A.iS("_$dart_dartClosure_dartJSInterop"))
t($,"qB","m_",()=>A.k([new J.fc()],A.W("u<e2>")))
t($,"q2","lH",()=>A.b7(A.i7({
toString:function(){return"$receiver$"}})))
t($,"q3","lI",()=>A.b7(A.i7({$method$:null,
toString:function(){return"$receiver$"}})))
t($,"q4","lJ",()=>A.b7(A.i7(null)))
t($,"q5","lK",()=>A.b7(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
t($,"q8","lN",()=>A.b7(A.i7(void 0)))
t($,"q9","lO",()=>A.b7(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
t($,"q7","lM",()=>A.b7(A.kQ(null)))
t($,"q6","lL",()=>A.b7(function(){try{null.$method$}catch(r){return r.message}}()))
t($,"qb","lQ",()=>A.b7(A.kQ(void 0)))
t($,"qa","lP",()=>A.b7(function(){try{(void 0).$method$}catch(r){return r.message}}()))
t($,"qm","lW",()=>A.fn(4096))
t($,"qk","lU",()=>new A.iD().$0())
t($,"ql","lV",()=>new A.iC().$0())
t($,"qA","h6",()=>A.jU(B.k3))
t($,"qj","lT",()=>A.jI(B.a7,B.au,257,286,15))
t($,"qi","lS",()=>A.jI(B.bl,B.U,0,30,15))
t($,"qh","lR",()=>A.jI(null,B.dd,0,19,7))
t($,"pY","lF",()=>A.eS(B.j2))
t($,"pX","lE",()=>A.eS(B.eg))
t($,"qD","k1",()=>{var r=null,q="ISOSpeed"
return A.mG([11,A.h("ProcessingSoftware",B.k,r),254,A.h("SubfileType",B.o,1),255,A.h("OldSubfileType",B.o,1),256,A.h("ImageWidth",B.o,1),257,A.h("ImageLength",B.o,1),258,A.h("BitsPerSample",B.i,1),259,A.h("Compression",B.i,1),262,A.h("PhotometricInterpretation",B.i,1),263,A.h("Thresholding",B.i,1),264,A.h("CellWidth",B.i,1),265,A.h("CellLength",B.i,1),266,A.h("FillOrder",B.i,1),269,A.h("DocumentName",B.k,r),270,A.h("ImageDescription",B.k,r),271,A.h("Make",B.k,r),272,A.h("Model",B.k,r),273,A.h("StripOffsets",B.o,r),274,A.h("Orientation",B.i,1),277,A.h("SamplesPerPixel",B.i,1),278,A.h("RowsPerStrip",B.o,1),279,A.h("StripByteCounts",B.o,1),280,A.h("MinSampleValue",B.i,1),281,A.h("MaxSampleValue",B.i,1),282,A.h("XResolution",B.q,1),283,A.h("YResolution",B.q,1),284,A.h("PlanarConfiguration",B.i,1),285,A.h("PageName",B.k,r),286,A.h("XPosition",B.q,1),287,A.h("YPosition",B.q,1),290,A.h("GrayResponseUnit",B.i,1),291,A.h("GrayResponseCurve",B.d,r),292,A.h("T4Options",B.d,r),293,A.h("T6Options",B.d,r),296,A.h("ResolutionUnit",B.i,1),297,A.h("PageNumber",B.i,2),300,A.h("ColorResponseUnit",B.d,r),301,A.h("TransferFunction",B.i,768),305,A.h("Software",B.k,r),306,A.h("DateTime",B.k,r),315,A.h("Artist",B.k,r),316,A.h("HostComputer",B.k,r),317,A.h("Predictor",B.i,1),318,A.h("WhitePoint",B.q,2),319,A.h("PrimaryChromaticities",B.q,6),320,A.h("ColorMap",B.i,r),321,A.h("HalftoneHints",B.i,2),322,A.h("TileWidth",B.o,1),323,A.h("TileLength",B.o,1),324,A.h("TileOffsets",B.o,r),325,A.h("TileByteCounts",B.d,r),326,A.h("BadFaxLines",B.d,r),327,A.h("CleanFaxData",B.d,r),328,A.h("ConsecutiveBadFaxLines",B.d,r),332,A.h("InkSet",B.d,r),333,A.h("InkNames",B.d,r),334,A.h("NumberofInks",B.d,r),336,A.h("DotRange",B.d,r),337,A.h("TargetPrinter",B.k,r),338,A.h("ExtraSamples",B.d,r),339,A.h("SampleFormat",B.i,1),340,A.h("SMinSampleValue",B.d,r),341,A.h("SMaxSampleValue",B.d,r),342,A.h("TransferRange",B.d,r),343,A.h("ClipPath",B.d,r),512,A.h("JPEGProc",B.d,r),513,A.h("JPEGInterchangeFormat",B.d,r),514,A.h("JPEGInterchangeFormatLength",B.d,r),529,A.h("YCbCrCoefficients",B.q,3),530,A.h("YCbCrSubSampling",B.i,1),531,A.h("YCbCrPositioning",B.i,1),532,A.h("ReferenceBlackWhite",B.q,6),700,A.h("ApplicationNotes",B.i,1),18246,A.h("Rating",B.i,1),33421,A.h("CFARepeatPatternDim",B.d,r),33422,A.h("CFAPattern",B.d,r),33423,A.h("BatteryLevel",B.d,r),33432,A.h("Copyright",B.k,r),33434,A.h("ExposureTime",B.q,1),33437,A.h("FNumber",B.q,r),33723,A.h("IPTC-NAA",B.o,1),34665,A.h("ExifOffset",B.d,r),34675,A.h("InterColorProfile",B.d,r),34850,A.h("ExposureProgram",B.i,1),34852,A.h("SpectralSensitivity",B.k,r),34853,A.h("GPSOffset",B.d,r),34855,A.h(q,B.o,1),34856,A.h("OECF",B.d,r),34864,A.h("SensitivityType",B.i,1),34866,A.h("RecommendedExposureIndex",B.o,1),34867,A.h(q,B.o,1),36864,A.h("ExifVersion",B.M,r),36867,A.h("DateTimeOriginal",B.k,r),36868,A.h("DateTimeDigitized",B.k,r),36880,A.h("OffsetTime",B.k,r),36881,A.h("OffsetTimeOriginal",B.k,r),36882,A.h("OffsetTimeDigitized",B.k,r),37121,A.h("ComponentsConfiguration",B.M,r),37122,A.h("CompressedBitsPerPixel",B.d,r),37377,A.h("ShutterSpeedValue",B.d,r),37378,A.h("ApertureValue",B.d,r),37379,A.h("BrightnessValue",B.d,r),37380,A.h("ExposureBiasValue",B.d,r),37381,A.h("MaxApertureValue",B.d,r),37382,A.h("SubjectDistance",B.d,r),37383,A.h("MeteringMode",B.d,r),37384,A.h("LightSource",B.d,r),37385,A.h("Flash",B.d,r),37386,A.h("FocalLength",B.d,r),37396,A.h("SubjectArea",B.d,r),37500,A.h("MakerNote",B.M,r),37510,A.h("UserComment",B.M,r),37520,A.h("SubSecTime",B.d,r),37521,A.h("SubSecTimeOriginal",B.d,r),37522,A.h("SubSecTimeDigitized",B.d,r),40091,A.h("XPTitle",B.d,r),40092,A.h("XPComment",B.d,r),40093,A.h("XPAuthor",B.d,r),40094,A.h("XPKeywords",B.d,r),40095,A.h("XPSubject",B.d,r),40960,A.h("FlashPixVersion",B.d,r),40961,A.h("ColorSpace",B.i,1),40962,A.h("ExifImageWidth",B.i,1),40963,A.h("ExifImageLength",B.i,1),40964,A.h("RelatedSoundFile",B.d,r),40965,A.h("InteroperabilityOffset",B.d,r),41483,A.h("FlashEnergy",B.d,r),41484,A.h("SpatialFrequencyResponse",B.d,r),41486,A.h("FocalPlaneXResolution",B.d,r),41487,A.h("FocalPlaneYResolution",B.d,r),41488,A.h("FocalPlaneResolutionUnit",B.d,r),41492,A.h("SubjectLocation",B.d,r),41493,A.h("ExposureIndex",B.d,r),41495,A.h("SensingMethod",B.d,r),41728,A.h("FileSource",B.d,r),41729,A.h("SceneType",B.d,r),41730,A.h("CVAPattern",B.d,r),41985,A.h("CustomRendered",B.d,r),41986,A.h("ExposureMode",B.d,r),41987,A.h("WhiteBalance",B.d,r),41988,A.h("DigitalZoomRatio",B.d,r),41989,A.h("FocalLengthIn35mmFilm",B.d,r),41990,A.h("SceneCaptureType",B.d,r),41991,A.h("GainControl",B.d,r),41992,A.h("Contrast",B.d,r),41993,A.h("Saturation",B.d,r),41994,A.h("Sharpness",B.d,r),41995,A.h("DeviceSettingDescription",B.d,r),41996,A.h("SubjectDistanceRange",B.d,r),42016,A.h("ImageUniqueID",B.d,r),42032,A.h("CameraOwnerName",B.k,r),42033,A.h("BodySerialNumber",B.k,r),42034,A.h("LensSpecification",B.d,r),42035,A.h("LensMake",B.k,r),42036,A.h("LensModel",B.k,r),42037,A.h("LensSerialNumber",B.k,r),42240,A.h("Gamma",B.q,1),50341,A.h("PrintIM",B.d,r),59932,A.h("Padding",B.d,r),59933,A.h("OffsetSchema",B.d,r),65e3,A.h("OwnerName",B.k,r),65001,A.h("SerialNumber",B.k,r)],u.p,A.W("eL"))})
t($,"pZ","h4",()=>A.mR(A.k([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63],u.t)))
s($,"qc","h5",()=>A.fn(511))
s($,"qd","j0",()=>A.fn(511))
s($,"qf","j1",()=>A.kD(2041))
s($,"qg","j2",()=>A.kD(225))
s($,"qe","an",()=>A.fn(766))
t($,"q0","lG",()=>A.kt(0,0,0))
t($,"qy","ac",()=>A.fn(1))
t($,"qz","aj",()=>A.mA(B.e.gv($.ac()),0,null))
t($,"qr","ab",()=>A.mN(1))
t($,"qs","ai",()=>J.m0(B.u.gv($.ab()),0,null))
t($,"qt","I",()=>A.mP(1))
t($,"qv","Z",()=>J.m1(B.n.gv($.I()),0,null))
t($,"qu","bA",()=>A.mr(B.n.gv($.I())))
t($,"qp","k_",()=>A.mK(1))
t($,"qq","lY",()=>A.kR(B.R.gv($.k_()),0))
t($,"qn","jZ",()=>A.mH(1))
t($,"qo","lX",()=>A.kR(B.ai.gv($.jZ()),0))
t($,"qw","k0",()=>A.n_(1))
t($,"qx","lZ",()=>{var r=$.k0()
return A.ms(r.gv(r))})})();(function nativeSupport(){!function(){var t=function(a){var n={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.bR,SharedArrayBuffer:A.bR,ArrayBufferView:A.dI,DataView:A.fm,Float32Array:A.bS,Float64Array:A.dE,Int16Array:A.dF,Int32Array:A.dG,Int8Array:A.dH,Uint16Array:A.dJ,Uint32Array:A.dK,Uint8ClampedArray:A.dL,CanvasPixelArray:A.dL,Uint8Array:A.bq})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.a8.$nativeSuperclassTag="ArrayBufferView"
A.el.$nativeSuperclassTag="ArrayBufferView"
A.em.$nativeSuperclassTag="ArrayBufferView"
A.bp.$nativeSuperclassTag="ArrayBufferView"
A.en.$nativeSuperclassTag="ArrayBufferView"
A.eo.$nativeSuperclassTag="ArrayBufferView"
A.aq.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$5=function(a,b,c,d,e){return this(a,b,c,d,e)}
Function.prototype.$6=function(a,b,c,d,e,f){return this(a,b,c,d,e,f)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r){t[r].removeEventListener("load",onLoad,false)}a(b.target)}for(var s=0;s<t.length;++s){t[s].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var t=A.p5
if(typeof dartMainRunner==="function"){dartMainRunner(t,[])}else{t([])}})})()