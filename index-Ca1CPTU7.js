(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const co="180",Yl=0,Ho=1,$l=2,Kc=1,Zc=2,Cn=3,Qn=0,zt=1,sn=2,jn=0,Zi=1,Vo=2,Go=3,Wo=4,Kl=5,di=100,Zl=101,jl=102,Jl=103,Ql=104,eu=200,tu=201,nu=202,iu=203,_a=204,xa=205,ru=206,su=207,au=208,ou=209,cu=210,lu=211,uu=212,hu=213,du=214,va=0,Ma=1,Sa=2,Ji=3,ya=4,Ea=5,Ta=6,Aa=7,jc=0,fu=1,pu=2,Jn=0,mu=1,gu=2,_u=3,Jc=4,xu=5,vu=6,Mu=7,Qc=300,Qi=301,er=302,ba=303,wa=304,Is=306,Ss=1e3,xi=1001,Ra=1002,qt=1003,Su=1004,Gr=1005,gn=1006,Bs=1007,vi=1008,Mn=1009,el=1010,tl=1011,Rr=1012,lo=1013,yi=1014,_n=1015,Br=1016,uo=1017,ho=1018,Cr=1020,nl=35902,il=35899,rl=1021,sl=1022,cn=1023,Pr=1026,Dr=1027,fo=1028,po=1029,al=1030,mo=1031,go=1033,ps=33776,ms=33777,gs=33778,_s=33779,Ca=35840,Pa=35841,Da=35842,La=35843,Ia=36196,Ua=37492,Na=37496,Fa=37808,Oa=37809,Ba=37810,za=37811,ka=37812,Ha=37813,Va=37814,Ga=37815,Wa=37816,Xa=37817,qa=37818,Ya=37819,$a=37820,Ka=37821,Za=36492,ja=36494,Ja=36495,Qa=36283,eo=36284,to=36285,no=36286,yu=3200,Eu=3201,ol=0,Tu=1,Yn="",Xt="srgb",tr="srgb-linear",ys="linear",Qe="srgb",Ci=7680,Xo=519,Au=512,bu=513,wu=514,cl=515,Ru=516,Cu=517,Pu=518,Du=519,qo=35044,Yo="300 es",xn=2e3,Es=2001;class ar{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $o=1234567;const Er=Math.PI/180,Lr=180/Math.PI;function or(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]).toLowerCase()}function We(n,e,t){return Math.max(e,Math.min(t,n))}function _o(n,e){return(n%e+e)%e}function Lu(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Iu(n,e,t){return n!==e?(t-n)/(e-n):0}function Tr(n,e,t){return(1-t)*n+t*e}function Uu(n,e,t,i){return Tr(n,e,1-Math.exp(-t*i))}function Nu(n,e=1){return e-Math.abs(_o(n,e*2)-e)}function Fu(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Ou(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Bu(n,e){return n+Math.floor(Math.random()*(e-n+1))}function zu(n,e){return n+Math.random()*(e-n)}function ku(n){return n*(.5-Math.random())}function Hu(n){n!==void 0&&($o=n);let e=$o+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vu(n){return n*Er}function Gu(n){return n*Lr}function Wu(n){return(n&n-1)===0&&n!==0}function Xu(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function qu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Yu(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),f=s((e-i)/2),d=a((e-i)/2),m=s((i-e)/2),v=a((i-e)/2);switch(r){case"XYX":n.set(o*h,l*f,l*d,o*c);break;case"YZY":n.set(l*d,o*h,l*f,o*c);break;case"ZXZ":n.set(l*f,l*d,o*h,o*c);break;case"XZX":n.set(o*h,l*v,l*m,o*c);break;case"YXY":n.set(l*m,o*h,l*v,o*c);break;case"ZYZ":n.set(l*v,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function qi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Rt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ko={DEG2RAD:Er,RAD2DEG:Lr,generateUUID:or,clamp:We,euclideanModulo:_o,mapLinear:Lu,inverseLerp:Iu,lerp:Tr,damp:Uu,pingpong:Nu,smoothstep:Fu,smootherstep:Ou,randInt:Bu,randFloat:zu,randFloatSpread:ku,seededRandom:Hu,degToRad:Vu,radToDeg:Gu,isPowerOfTwo:Wu,ceilPowerOfTwo:Xu,floorPowerOfTwo:qu,setQuaternionFromProperEuler:Yu,normalize:Rt,denormalize:qi};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],f=i[r+3];const d=s[a+0],m=s[a+1],v=s[a+2],M=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=v,e[t+3]=M;return}if(f!==M||l!==d||c!==m||h!==v){let p=1-o;const u=l*d+c*m+h*v+f*M,A=u>=0?1:-1,b=1-u*u;if(b>Number.EPSILON){const P=Math.sqrt(b),R=Math.atan2(P,u*A);p=Math.sin(p*R)/P,o=Math.sin(o*R)/P}const y=o*A;if(l=l*p+d*y,c=c*p+m*y,h=h*p+v*y,f=f*p+M*y,p===1-o){const P=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=P,c*=P,h*=P,f*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],f=s[a],d=s[a+1],m=s[a+2],v=s[a+3];return e[t]=o*v+h*f+l*m-c*d,e[t+1]=l*v+h*d+c*f-o*m,e[t+2]=c*v+h*m+o*d-l*f,e[t+3]=h*v-o*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),f=o(s/2),d=l(i/2),m=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=d*h*f+c*m*v,this._y=c*m*f-d*h*v,this._z=c*h*v+d*m*f,this._w=c*h*f-d*m*v;break;case"YXZ":this._x=d*h*f+c*m*v,this._y=c*m*f-d*h*v,this._z=c*h*v-d*m*f,this._w=c*h*f+d*m*v;break;case"ZXY":this._x=d*h*f-c*m*v,this._y=c*m*f+d*h*v,this._z=c*h*v+d*m*f,this._w=c*h*f-d*m*v;break;case"ZYX":this._x=d*h*f-c*m*v,this._y=c*m*f+d*h*v,this._z=c*h*v-d*m*f,this._w=c*h*f+d*m*v;break;case"YZX":this._x=d*h*f+c*m*v,this._y=c*m*f+d*h*v,this._z=c*h*v-d*m*f,this._w=c*h*f-d*m*v;break;case"XZY":this._x=d*h*f-c*m*v,this._y=c*m*f-d*h*v,this._z=c*h*v+d*m*f,this._w=c*h*f+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=i+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*h,this.y=i+l*h+o*c-s*f,this.z=r+l*f+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zs.copy(this).projectOnVector(e),this.sub(zs)}reflect(e){return this.sub(zs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zs=new N,Zo=new zr;class ze{constructor(e,t,i,r,s,a,o,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],d=i[2],m=i[5],v=i[8],M=r[0],p=r[3],u=r[6],A=r[1],b=r[4],y=r[7],P=r[2],R=r[5],_=r[8];return s[0]=a*M+o*A+l*P,s[3]=a*p+o*b+l*R,s[6]=a*u+o*y+l*_,s[1]=c*M+h*A+f*P,s[4]=c*p+h*b+f*R,s[7]=c*u+h*y+f*_,s[2]=d*M+m*A+v*P,s[5]=d*p+m*b+v*R,s[8]=d*u+m*y+v*_,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,d=o*l-h*s,m=c*s-a*l,v=t*f+i*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return e[0]=f*M,e[1]=(r*c-h*i)*M,e[2]=(o*i-r*a)*M,e[3]=d*M,e[4]=(h*t-r*l)*M,e[5]=(r*s-o*t)*M,e[6]=m*M,e[7]=(i*l-c*t)*M,e[8]=(a*t-i*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ks.makeScale(e,t)),this}rotate(e){return this.premultiply(ks.makeRotation(-e)),this}translate(e,t){return this.premultiply(ks.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ks=new ze;function ll(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ts(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function $u(){const n=Ts("canvas");return n.style.display="block",n}const jo={};function Ir(n){n in jo||(jo[n]=!0,console.warn(n))}function Ku(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Jo=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qo=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zu(){const n={enabled:!0,workingColorSpace:tr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Qe&&(r.r=On(r.r),r.g=On(r.g),r.b=On(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qe&&(r.r=ji(r.r),r.g=ji(r.g),r.b=ji(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Yn?ys:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ir("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ir("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[tr]:{primaries:e,whitePoint:i,transfer:ys,toXYZ:Jo,fromXYZ:Qo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:i,transfer:Qe,toXYZ:Jo,fromXYZ:Qo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),n}const Ke=Zu();function On(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ji(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Pi;class ju{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Pi===void 0&&(Pi=Ts("canvas")),Pi.width=e.width,Pi.height=e.height;const r=Pi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Pi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ts("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=On(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(On(t[i]/255)*255):t[i]=On(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ju=0;class xo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=or(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Hs(r[a].image)):s.push(Hs(r[a]))}else s=Hs(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Hs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ju.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qu=0;const Vs=new N;class At extends ar{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,i=xi,r=xi,s=gn,a=vi,o=cn,l=Mn,c=At.DEFAULT_ANISOTROPY,h=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=or(),this.name="",this.source=new xo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Vs).x}get height(){return this.source.getSize(Vs).y}get depth(){return this.source.getSize(Vs).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ss:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case Ra:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ss:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case Ra:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=Qc;At.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,i=0,r=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],m=l[5],v=l[9],M=l[2],p=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-M)<.01&&Math.abs(v-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+M)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,y=(m+1)/2,P=(u+1)/2,R=(h+d)/4,_=(f+M)/4,T=(v+p)/4;return b>y&&b>P?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=R/i,s=_/i):y>P?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=R/r,s=T/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=_/s,r=T/s),this.set(i,r,s,t),this}let A=Math.sqrt((p-v)*(p-v)+(f-M)*(f-M)+(d-h)*(d-h));return Math.abs(A)<.001&&(A=1),this.x=(p-v)/A,this.y=(f-M)/A,this.z=(d-h)/A,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eh extends ar{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new At(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new xo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ei extends eh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ul extends At{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class th extends At{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wi{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,tn):tn.fromBufferAttribute(s,a),tn.applyMatrix4(e.matrixWorld),this.expandByPoint(tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wr.copy(i.boundingBox)),Wr.applyMatrix4(e.matrixWorld),this.union(Wr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,tn),tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pr),Xr.subVectors(this.max,pr),Di.subVectors(e.a,pr),Li.subVectors(e.b,pr),Ii.subVectors(e.c,pr),Hn.subVectors(Li,Di),Vn.subVectors(Ii,Li),ii.subVectors(Di,Ii);let t=[0,-Hn.z,Hn.y,0,-Vn.z,Vn.y,0,-ii.z,ii.y,Hn.z,0,-Hn.x,Vn.z,0,-Vn.x,ii.z,0,-ii.x,-Hn.y,Hn.x,0,-Vn.y,Vn.x,0,-ii.y,ii.x,0];return!Gs(t,Di,Li,Ii,Xr)||(t=[1,0,0,0,1,0,0,0,1],!Gs(t,Di,Li,Ii,Xr))?!1:(qr.crossVectors(Hn,Vn),t=[qr.x,qr.y,qr.z],Gs(t,Di,Li,Ii,Xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Tn=[new N,new N,new N,new N,new N,new N,new N,new N],tn=new N,Wr=new wi,Di=new N,Li=new N,Ii=new N,Hn=new N,Vn=new N,ii=new N,pr=new N,Xr=new N,qr=new N,ri=new N;function Gs(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ri.fromArray(n,s);const o=r.x*Math.abs(ri.x)+r.y*Math.abs(ri.y)+r.z*Math.abs(ri.z),l=e.dot(ri),c=t.dot(ri),h=i.dot(ri);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const nh=new wi,mr=new N,Ws=new N;class cr{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):nh.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mr.subVectors(e,this.center);const t=mr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(mr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ws.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mr.copy(e.center).add(Ws)),this.expandByPoint(mr.copy(e.center).sub(Ws))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const An=new N,Xs=new N,Yr=new N,Gn=new N,qs=new N,$r=new N,Ys=new N;class hl{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Xs.copy(e).add(t).multiplyScalar(.5),Yr.copy(t).sub(e).normalize(),Gn.copy(this.origin).sub(Xs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Yr),o=Gn.dot(this.direction),l=-Gn.dot(Yr),c=Gn.lengthSq(),h=Math.abs(1-a*a);let f,d,m,v;if(h>0)if(f=a*l-o,d=a*o-l,v=s*h,f>=0)if(d>=-v)if(d<=v){const M=1/h;f*=M,d*=M,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Xs).addScaledVector(Yr,d),m}intersectSphere(e,t){An.subVectors(e.center,this.origin);const i=An.dot(this.direction),r=An.dot(An)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,i,r,s){qs.subVectors(t,e),$r.subVectors(i,e),Ys.crossVectors(qs,$r);let a=this.direction.dot(Ys),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gn.subVectors(this.origin,e);const l=o*this.direction.dot($r.crossVectors(Gn,$r));if(l<0)return null;const c=o*this.direction.dot(qs.cross(Gn));if(c<0||l+c>a)return null;const h=-o*Gn.dot(Ys);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,i,r,s,a,o,l,c,h,f,d,m,v,M,p){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,h,f,d,m,v,M,p)}set(e,t,i,r,s,a,o,l,c,h,f,d,m,v,M,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=m,u[7]=v,u[11]=M,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ui.setFromMatrixColumn(e,0).length(),s=1/Ui.setFromMatrixColumn(e,1).length(),a=1/Ui.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*h,m=a*f,v=o*h,M=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=m+v*c,t[5]=d-M*c,t[9]=-o*l,t[2]=M-d*c,t[6]=v+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,m=l*f,v=c*h,M=c*f;t[0]=d+M*o,t[4]=v*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=m*o-v,t[6]=M+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,m=l*f,v=c*h,M=c*f;t[0]=d-M*o,t[4]=-a*f,t[8]=v+m*o,t[1]=m+v*o,t[5]=a*h,t[9]=M-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,m=a*f,v=o*h,M=o*f;t[0]=l*h,t[4]=v*c-m,t[8]=d*c+M,t[1]=l*f,t[5]=M*c+d,t[9]=m*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,v=o*l,M=o*c;t[0]=l*h,t[4]=M-d*f,t[8]=v*f+m,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*f+v,t[10]=d-M*f}else if(e.order==="XZY"){const d=a*l,m=a*c,v=o*l,M=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+M,t[5]=a*h,t[9]=m*f-v,t[2]=v*f-m,t[6]=o*h,t[10]=M*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ih,e,rh)}lookAt(e,t,i){const r=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Wn.crossVectors(i,Gt),Wn.lengthSq()===0&&(Math.abs(i.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Wn.crossVectors(i,Gt)),Wn.normalize(),Kr.crossVectors(Gt,Wn),r[0]=Wn.x,r[4]=Kr.x,r[8]=Gt.x,r[1]=Wn.y,r[5]=Kr.y,r[9]=Gt.y,r[2]=Wn.z,r[6]=Kr.z,r[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],d=i[9],m=i[13],v=i[2],M=i[6],p=i[10],u=i[14],A=i[3],b=i[7],y=i[11],P=i[15],R=r[0],_=r[4],T=r[8],x=r[12],g=r[1],C=r[5],L=r[9],B=r[13],X=r[2],O=r[6],k=r[10],Y=r[14],H=r[3],ie=r[7],se=r[11],ge=r[15];return s[0]=a*R+o*g+l*X+c*H,s[4]=a*_+o*C+l*O+c*ie,s[8]=a*T+o*L+l*k+c*se,s[12]=a*x+o*B+l*Y+c*ge,s[1]=h*R+f*g+d*X+m*H,s[5]=h*_+f*C+d*O+m*ie,s[9]=h*T+f*L+d*k+m*se,s[13]=h*x+f*B+d*Y+m*ge,s[2]=v*R+M*g+p*X+u*H,s[6]=v*_+M*C+p*O+u*ie,s[10]=v*T+M*L+p*k+u*se,s[14]=v*x+M*B+p*Y+u*ge,s[3]=A*R+b*g+y*X+P*H,s[7]=A*_+b*C+y*O+P*ie,s[11]=A*T+b*L+y*k+P*se,s[15]=A*x+b*B+y*Y+P*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],m=e[14],v=e[3],M=e[7],p=e[11],u=e[15];return v*(+s*l*f-r*c*f-s*o*d+i*c*d+r*o*m-i*l*m)+M*(+t*l*m-t*c*d+s*a*d-r*a*m+r*c*h-s*l*h)+p*(+t*c*f-t*o*m-s*a*f+i*a*m+s*o*h-i*c*h)+u*(-r*o*h-t*l*f+t*o*d+r*a*f-i*a*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],m=e[11],v=e[12],M=e[13],p=e[14],u=e[15],A=f*p*c-M*d*c+M*l*m-o*p*m-f*l*u+o*d*u,b=v*d*c-h*p*c-v*l*m+a*p*m+h*l*u-a*d*u,y=h*M*c-v*f*c+v*o*m-a*M*m-h*o*u+a*f*u,P=v*f*l-h*M*l-v*o*d+a*M*d+h*o*p-a*f*p,R=t*A+i*b+r*y+s*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const _=1/R;return e[0]=A*_,e[1]=(M*d*s-f*p*s-M*r*m+i*p*m+f*r*u-i*d*u)*_,e[2]=(o*p*s-M*l*s+M*r*c-i*p*c-o*r*u+i*l*u)*_,e[3]=(f*l*s-o*d*s-f*r*c+i*d*c+o*r*m-i*l*m)*_,e[4]=b*_,e[5]=(h*p*s-v*d*s+v*r*m-t*p*m-h*r*u+t*d*u)*_,e[6]=(v*l*s-a*p*s-v*r*c+t*p*c+a*r*u-t*l*u)*_,e[7]=(a*d*s-h*l*s+h*r*c-t*d*c-a*r*m+t*l*m)*_,e[8]=y*_,e[9]=(v*f*s-h*M*s-v*i*m+t*M*m+h*i*u-t*f*u)*_,e[10]=(a*M*s-v*o*s+v*i*c-t*M*c-a*i*u+t*o*u)*_,e[11]=(h*o*s-a*f*s-h*i*c+t*f*c+a*i*m-t*o*m)*_,e[12]=P*_,e[13]=(h*M*r-v*f*r+v*i*d-t*M*d-h*i*p+t*f*p)*_,e[14]=(v*o*r-a*M*r-v*i*l+t*M*l+a*i*p-t*o*p)*_,e[15]=(a*f*r-h*o*r+h*i*l-t*f*l-a*i*d+t*o*d)*_,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,f=o+o,d=s*c,m=s*h,v=s*f,M=a*h,p=a*f,u=o*f,A=l*c,b=l*h,y=l*f,P=i.x,R=i.y,_=i.z;return r[0]=(1-(M+u))*P,r[1]=(m+y)*P,r[2]=(v-b)*P,r[3]=0,r[4]=(m-y)*R,r[5]=(1-(d+u))*R,r[6]=(p+A)*R,r[7]=0,r[8]=(v+b)*_,r[9]=(p-A)*_,r[10]=(1-(d+M))*_,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ui.set(r[0],r[1],r[2]).length();const a=Ui.set(r[4],r[5],r[6]).length(),o=Ui.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],nn.copy(this);const c=1/s,h=1/a,f=1/o;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=f,nn.elements[9]*=f,nn.elements[10]*=f,t.setFromRotationMatrix(nn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=xn,l=!1){const c=this.elements,h=2*s/(t-e),f=2*s/(i-r),d=(t+e)/(t-e),m=(i+r)/(i-r);let v,M;if(l)v=s/(a-s),M=a*s/(a-s);else if(o===xn)v=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===Es)v=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=xn,l=!1){const c=this.elements,h=2/(t-e),f=2/(i-r),d=-(t+e)/(t-e),m=-(i+r)/(i-r);let v,M;if(l)v=1/(a-s),M=a/(a-s);else if(o===xn)v=-2/(a-s),M=-(a+s)/(a-s);else if(o===Es)v=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ui=new N,nn=new ot,ih=new N(0,0,0),rh=new N(1,1,1),Wn=new N,Kr=new N,Gt=new N,ec=new ot,tc=new zr;class Sn{constructor(e=0,t=0,i=0,r=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-We(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ec.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ec,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tc.setFromEuler(this),this.setFromQuaternion(tc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class dl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sh=0;const nc=new N,Ni=new zr,bn=new ot,Zr=new N,gr=new N,ah=new N,oh=new zr,ic=new N(1,0,0),rc=new N(0,1,0),sc=new N(0,0,1),ac={type:"added"},ch={type:"removed"},Fi={type:"childadded",child:null},$s={type:"childremoved",child:null};class _t extends ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new N,t=new Sn,i=new zr,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new ze}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.premultiply(Ni),this}rotateX(e){return this.rotateOnAxis(ic,e)}rotateY(e){return this.rotateOnAxis(rc,e)}rotateZ(e){return this.rotateOnAxis(sc,e)}translateOnAxis(e,t){return nc.copy(e).applyQuaternion(this.quaternion),this.position.add(nc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ic,e)}translateY(e){return this.translateOnAxis(rc,e)}translateZ(e){return this.translateOnAxis(sc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zr.copy(e):Zr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(gr,Zr,this.up):bn.lookAt(Zr,gr,this.up),this.quaternion.setFromRotationMatrix(bn),r&&(bn.extractRotation(r.matrixWorld),Ni.setFromRotationMatrix(bn),this.quaternion.premultiply(Ni.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ac),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ch),$s.child=e,this.dispatchEvent($s),$s.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ac),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,e,ah),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,oh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}_t.DEFAULT_UP=new N(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new N,wn=new N,Ks=new N,Rn=new N,Oi=new N,Bi=new N,oc=new N,Zs=new N,js=new N,Js=new N,Qs=new lt,ea=new lt,ta=new lt;class an{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),rn.subVectors(e,t),r.cross(rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){rn.subVectors(r,t),wn.subVectors(i,t),Ks.subVectors(e,t);const a=rn.dot(rn),o=rn.dot(wn),l=rn.dot(Ks),c=wn.dot(wn),h=wn.dot(Ks),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(c*l-o*h)*d,v=(a*h-o*l)*d;return s.set(1-m-v,v,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Rn.x),l.addScaledVector(a,Rn.y),l.addScaledVector(o,Rn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Qs.setScalar(0),ea.setScalar(0),ta.setScalar(0),Qs.fromBufferAttribute(e,t),ea.fromBufferAttribute(e,i),ta.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Qs,s.x),a.addScaledVector(ea,s.y),a.addScaledVector(ta,s.z),a}static isFrontFacing(e,t,i,r){return rn.subVectors(i,t),wn.subVectors(e,t),rn.cross(wn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),rn.cross(wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return an.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Oi.subVectors(r,i),Bi.subVectors(s,i),Zs.subVectors(e,i);const l=Oi.dot(Zs),c=Bi.dot(Zs);if(l<=0&&c<=0)return t.copy(i);js.subVectors(e,r);const h=Oi.dot(js),f=Bi.dot(js);if(h>=0&&f<=h)return t.copy(r);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Oi,a);Js.subVectors(e,s);const m=Oi.dot(Js),v=Bi.dot(Js);if(v>=0&&m<=v)return t.copy(s);const M=m*c-l*v;if(M<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(Bi,o);const p=h*v-m*f;if(p<=0&&f-h>=0&&m-v>=0)return oc.subVectors(s,r),o=(f-h)/(f-h+(m-v)),t.copy(r).addScaledVector(oc,o);const u=1/(p+M+d);return a=M*u,o=d*u,t.copy(i).addScaledVector(Oi,a).addScaledVector(Bi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},jr={h:0,s:0,l:0};function na(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Xe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ke.workingColorSpace){if(e=_o(e,1),t=We(t,0,1),i=We(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=na(a,s,e+1/3),this.g=na(a,s,e),this.b=na(a,s,e-1/3)}return Ke.colorSpaceToWorking(this,r),this}setStyle(e,t=Xt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const i=fl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=On(e.r),this.g=On(e.g),this.b=On(e.b),this}copyLinearToSRGB(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return Ke.workingToColorSpace(Et.copy(this),e),Math.round(We(Et.r*255,0,255))*65536+Math.round(We(Et.g*255,0,255))*256+Math.round(We(Et.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(Et.copy(this),t);const i=Et.r,r=Et.g,s=Et.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=Xt){Ke.workingToColorSpace(Et.copy(this),e);const t=Et.r,i=Et.g,r=Et.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Xn),this.setHSL(Xn.h+e,Xn.s+t,Xn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xn),e.getHSL(jr);const i=Tr(Xn.h,jr.h,t),r=Tr(Xn.s,jr.s,t),s=Tr(Xn.l,jr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new Xe;Xe.NAMES=fl;let lh=0;class lr extends ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lh++}),this.uuid=or(),this.name="",this.type="Material",this.blending=Zi,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_a,this.blendDst=xa,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(i.blending=this.blending),this.side!==Qn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_a&&(i.blendSrc=this.blendSrc),this.blendDst!==xa&&(i.blendDst=this.blendDst),this.blendEquation!==di&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xo&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class pl extends lr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new N,Jr=new Ve;let uh=0;class un{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=qo,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Jr.fromBufferAttribute(this,t),Jr.applyMatrix3(e),this.setXY(t,Jr.x,Jr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=qi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Rt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),r=Rt(r,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qo&&(e.usage=this.usage),e}}class ml extends un{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class gl extends un{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class rt extends un{constructor(e,t,i){super(new Float32Array(e),t,i)}}let hh=0;const Zt=new ot,ia=new _t,zi=new N,Wt=new wi,_r=new wi,St=new N;class bt extends ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ll(e)?gl:ml)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,i){return Zt.makeTranslation(e,t,i),this.applyMatrix4(Zt),this}scale(e,t,i){return Zt.makeScale(e,t,i),this.applyMatrix4(Zt),this}lookAt(e){return ia.lookAt(e),ia.updateMatrix(),this.applyMatrix4(ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new rt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Wt.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];_r.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(Wt.min,_r.min),Wt.expandByPoint(St),St.addVectors(Wt.max,_r.max),Wt.expandByPoint(St)):(Wt.expandByPoint(_r.min),Wt.expandByPoint(_r.max))}Wt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)St.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(St));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)St.fromBufferAttribute(o,c),l&&(zi.fromBufferAttribute(e,c),St.add(zi)),r=Math.max(r,i.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let T=0;T<i.count;T++)o[T]=new N,l[T]=new N;const c=new N,h=new N,f=new N,d=new Ve,m=new Ve,v=new Ve,M=new N,p=new N;function u(T,x,g){c.fromBufferAttribute(i,T),h.fromBufferAttribute(i,x),f.fromBufferAttribute(i,g),d.fromBufferAttribute(s,T),m.fromBufferAttribute(s,x),v.fromBufferAttribute(s,g),h.sub(c),f.sub(c),m.sub(d),v.sub(d);const C=1/(m.x*v.y-v.x*m.y);isFinite(C)&&(M.copy(h).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(C),p.copy(f).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(C),o[T].add(M),o[x].add(M),o[g].add(M),l[T].add(p),l[x].add(p),l[g].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let T=0,x=A.length;T<x;++T){const g=A[T],C=g.start,L=g.count;for(let B=C,X=C+L;B<X;B+=3)u(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const b=new N,y=new N,P=new N,R=new N;function _(T){P.fromBufferAttribute(r,T),R.copy(P);const x=o[T];b.copy(x),b.sub(P.multiplyScalar(P.dot(x))).normalize(),y.crossVectors(R,x);const C=y.dot(l[T])<0?-1:1;a.setXYZW(T,b.x,b.y,b.z,C)}for(let T=0,x=A.length;T<x;++T){const g=A[T],C=g.start,L=g.count;for(let B=C,X=C+L;B<X;B+=3)_(e.getX(B+0)),_(e.getX(B+1)),_(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new N,s=new N,a=new N,o=new N,l=new N,c=new N,h=new N,f=new N;if(e)for(let d=0,m=e.count;d<m;d+=3){const v=e.getX(d+0),M=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,p),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h);let m=0,v=0;for(let M=0,p=l.length;M<p;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*h;for(let u=0;u<h;u++)d[v++]=c[m++]}return new un(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,f=c.length;h<f;h++){const d=c[h],m=e(d,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cc=new ot,si=new hl,Qr=new cr,lc=new N,es=new N,ts=new N,ns=new N,ra=new N,is=new N,uc=new N,rs=new N;class Tt extends _t{constructor(e=new bt,t=new pl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){is.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],f=s[l];h!==0&&(ra.fromBufferAttribute(f,e),a?is.addScaledVector(ra,h):is.addScaledVector(ra.sub(t),h))}t.add(is)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qr.copy(i.boundingSphere),Qr.applyMatrix4(s),si.copy(e.ray).recast(e.near),!(Qr.containsPoint(si.origin)===!1&&(si.intersectSphere(Qr,lc)===null||si.origin.distanceToSquared(lc)>(e.far-e.near)**2))&&(cc.copy(s).invert(),si.copy(e.ray).applyMatrix4(cc),!(i.boundingBox!==null&&si.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,si)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,M=d.length;v<M;v++){const p=d[v],u=a[p.materialIndex],A=Math.max(p.start,m.start),b=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=A,P=b;y<P;y+=3){const R=o.getX(y),_=o.getX(y+1),T=o.getX(y+2);r=ss(this,u,e,i,c,h,f,R,_,T),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let p=v,u=M;p<u;p+=3){const A=o.getX(p),b=o.getX(p+1),y=o.getX(p+2);r=ss(this,a,e,i,c,h,f,A,b,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,M=d.length;v<M;v++){const p=d[v],u=a[p.materialIndex],A=Math.max(p.start,m.start),b=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=A,P=b;y<P;y+=3){const R=y,_=y+1,T=y+2;r=ss(this,u,e,i,c,h,f,R,_,T),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let p=v,u=M;p<u;p+=3){const A=p,b=p+1,y=p+2;r=ss(this,a,e,i,c,h,f,A,b,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function dh(n,e,t,i,r,s,a,o){let l;if(e.side===zt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Qn,o),l===null)return null;rs.copy(o),rs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(rs);return c<t.near||c>t.far?null:{distance:c,point:rs.clone(),object:n}}function ss(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,es),n.getVertexPosition(l,ts),n.getVertexPosition(c,ns);const h=dh(n,e,t,i,es,ts,ns,uc);if(h){const f=new N;an.getBarycoord(uc,es,ts,ns,f),r&&(h.uv=an.getInterpolatedAttribute(r,o,l,c,f,new Ve)),s&&(h.uv1=an.getInterpolatedAttribute(s,o,l,c,f,new Ve)),a&&(h.normal=an.getInterpolatedAttribute(a,o,l,c,f,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new N,materialIndex:0};an.getNormal(es,ts,ns,d.normal),h.face=d,h.barycoord=f}return h}class Jt extends bt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],f=[];let d=0,m=0;v("z","y","x",-1,-1,i,t,e,a,s,0),v("z","y","x",1,-1,i,t,-e,a,s,1),v("x","z","y",1,1,e,i,t,r,a,2),v("x","z","y",1,-1,e,i,-t,r,a,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(f,2));function v(M,p,u,A,b,y,P,R,_,T,x){const g=y/_,C=P/T,L=y/2,B=P/2,X=R/2,O=_+1,k=T+1;let Y=0,H=0;const ie=new N;for(let se=0;se<k;se++){const ge=se*C-B;for(let De=0;De<O;De++){const qe=De*g-L;ie[M]=qe*A,ie[p]=ge*b,ie[u]=X,c.push(ie.x,ie.y,ie.z),ie[M]=0,ie[p]=0,ie[u]=R>0?1:-1,h.push(ie.x,ie.y,ie.z),f.push(De/_),f.push(1-se/T),Y+=1}}for(let se=0;se<T;se++)for(let ge=0;ge<_;ge++){const De=d+ge+O*se,qe=d+ge+O*(se+1),et=d+(ge+1)+O*(se+1),Ye=d+(ge+1)+O*se;l.push(De,qe,Ye),l.push(qe,et,Ye),H+=6}o.addGroup(m,H,x),m+=H,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function nr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ct(n){const e={};for(let t=0;t<n.length;t++){const i=nr(n[t]);for(const r in i)e[r]=i[r]}return e}function fh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function _l(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const ph={clone:nr,merge:Ct};var mh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends lr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mh,this.fragmentShader=gh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=nr(e.uniforms),this.uniformsGroups=fh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class xl extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qn=new N,hc=new Ve,dc=new Ve;class jt extends xl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lr*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qn.x,qn.y).multiplyScalar(-e/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qn.x,qn.y).multiplyScalar(-e/qn.z)}getViewSize(e,t){return this.getViewBounds(e,hc,dc),t.subVectors(dc,hc)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Er*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ki=-90,Hi=1;class _h extends _t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new jt(ki,Hi,e,t);r.layers=this.layers,this.add(r);const s=new jt(ki,Hi,e,t);s.layers=this.layers,this.add(s);const a=new jt(ki,Hi,e,t);a.layers=this.layers,this.add(a);const o=new jt(ki,Hi,e,t);o.layers=this.layers,this.add(o);const l=new jt(ki,Hi,e,t);l.layers=this.layers,this.add(l);const c=new jt(ki,Hi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===xn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Es)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(f,d,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class vl extends At{constructor(e=[],t=Qi,i,r,s,a,o,l,c,h){super(e,t,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xh extends Ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new vl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Jt(5,5,5),s=new ei({name:"CubemapFromEquirect",uniforms:nr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zt,blending:jn});s.uniforms.tEquirect.value=t;const a=new Tt(r,s),o=t.minFilter;return t.minFilter===vi&&(t.minFilter=gn),new _h(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class ln extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vh={type:"move"};class sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const p=t.getJointPose(M,i),u=this._getHandJoint(c,M);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,v=.005;c.inputState.pinching&&d>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vh)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ln;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class vo{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Xe(e),this.near=t,this.far=i}clone(){return new vo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Mh extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Sh extends At{constructor(e=null,t=1,i=1,r,s,a,o,l,c=qt,h=qt,f,d){super(null,a,o,l,c,h,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fc extends un{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Vi=new ot,pc=new ot,as=[],mc=new wi,yh=new ot,xr=new Tt,vr=new cr;class Eh extends Tt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,yh)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Vi),mc.copy(e.boundingBox).applyMatrix4(Vi),this.boundingBox.union(mc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new cr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Vi),vr.copy(e.boundingSphere).applyMatrix4(Vi),this.boundingSphere.union(vr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(xr.geometry=this.geometry,xr.material=this.material,xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vr.copy(this.boundingSphere),vr.applyMatrix4(i),e.ray.intersectsSphere(vr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Vi),pc.multiplyMatrices(i,Vi),xr.matrixWorld=pc,xr.raycast(e,as);for(let a=0,o=as.length;a<o;a++){const l=as[a];l.instanceId=s,l.object=this,t.push(l)}as.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new fc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Sh(new Float32Array(r*this.count),r,this.count,fo,_n));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const aa=new N,Th=new N,Ah=new ze;class ui{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=aa.subVectors(i,t).cross(Th.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(aa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ah.getNormalMatrix(e),r=this.coplanarPoint(aa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ai=new cr,bh=new Ve(.5,.5),os=new N;class Mo{constructor(e=new ui,t=new ui,i=new ui,r=new ui,s=new ui,a=new ui){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=xn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],f=s[5],d=s[6],m=s[7],v=s[8],M=s[9],p=s[10],u=s[11],A=s[12],b=s[13],y=s[14],P=s[15];if(r[0].setComponents(c-a,m-h,u-v,P-A).normalize(),r[1].setComponents(c+a,m+h,u+v,P+A).normalize(),r[2].setComponents(c+o,m+f,u+M,P+b).normalize(),r[3].setComponents(c-o,m-f,u-M,P-b).normalize(),i)r[4].setComponents(l,d,p,y).normalize(),r[5].setComponents(c-l,m-d,u-p,P-y).normalize();else if(r[4].setComponents(c-l,m-d,u-p,P-y).normalize(),t===xn)r[5].setComponents(c+l,m+d,u+p,P+y).normalize();else if(t===Es)r[5].setComponents(l,d,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(e){ai.center.set(0,0,0);const t=bh.distanceTo(e.center);return ai.radius=.7071067811865476+t,ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(os.x=r.normal.x>0?e.max.x:e.min.x,os.y=r.normal.y>0?e.max.y:e.min.y,os.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(os)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class So extends lr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const As=new N,bs=new N,gc=new ot,Mr=new hl,cs=new cr,oa=new N,_c=new N;class Ml extends _t{constructor(e=new bt,t=new So){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)As.fromBufferAttribute(t,r-1),bs.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=As.distanceTo(bs);e.setAttribute("lineDistance",new rt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cs.copy(i.boundingSphere),cs.applyMatrix4(r),cs.radius+=s,e.ray.intersectsSphere(cs)===!1)return;gc.copy(r).invert(),Mr.copy(e.ray).applyMatrix4(gc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const m=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let M=m,p=v-1;M<p;M+=c){const u=h.getX(M),A=h.getX(M+1),b=ls(this,e,Mr,l,u,A,M);b&&t.push(b)}if(this.isLineLoop){const M=h.getX(v-1),p=h.getX(m),u=ls(this,e,Mr,l,M,p,v-1);u&&t.push(u)}}else{const m=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let M=m,p=v-1;M<p;M+=c){const u=ls(this,e,Mr,l,M,M+1,M);u&&t.push(u)}if(this.isLineLoop){const M=ls(this,e,Mr,l,v-1,m,v-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ls(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(As.fromBufferAttribute(o,r),bs.fromBufferAttribute(o,s),t.distanceSqToSegment(As,bs,oa,_c)>i)return;oa.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(oa);if(!(c<e.near||c>e.far))return{distance:c,point:_c.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const xc=new N,vc=new N;class wh extends Ml{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)xc.fromBufferAttribute(t,r),vc.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+xc.distanceTo(vc);e.setAttribute("lineDistance",new rt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Rh extends At{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sl extends At{constructor(e,t,i=yi,r,s,a,o=qt,l=qt,c,h=Pr,f=1){if(h!==Pr&&h!==Dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class yl extends At{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class yo extends bt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new N,h=new Ve;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){const m=i+f/t*r;c.x=e*Math.cos(m),c.y=e*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new rt(a,3)),this.setAttribute("normal",new rt(o,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Fn extends bt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],d=[],m=[];let v=0;const M=[],p=i/2;let u=0;A(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new rt(f,3)),this.setAttribute("normal",new rt(d,3)),this.setAttribute("uv",new rt(m,2));function A(){const y=new N,P=new N;let R=0;const _=(t-e)/i;for(let T=0;T<=s;T++){const x=[],g=T/s,C=g*(t-e)+e;for(let L=0;L<=r;L++){const B=L/r,X=B*l+o,O=Math.sin(X),k=Math.cos(X);P.x=C*O,P.y=-g*i+p,P.z=C*k,f.push(P.x,P.y,P.z),y.set(O,_,k).normalize(),d.push(y.x,y.y,y.z),m.push(B,1-g),x.push(v++)}M.push(x)}for(let T=0;T<r;T++)for(let x=0;x<s;x++){const g=M[x][T],C=M[x+1][T],L=M[x+1][T+1],B=M[x][T+1];(e>0||x!==0)&&(h.push(g,C,B),R+=3),(t>0||x!==s-1)&&(h.push(C,L,B),R+=3)}c.addGroup(u,R,0),u+=R}function b(y){const P=v,R=new Ve,_=new N;let T=0;const x=y===!0?e:t,g=y===!0?1:-1;for(let L=1;L<=r;L++)f.push(0,p*g,0),d.push(0,g,0),m.push(.5,.5),v++;const C=v;for(let L=0;L<=r;L++){const X=L/r*l+o,O=Math.cos(X),k=Math.sin(X);_.x=x*k,_.y=p*g,_.z=x*O,f.push(_.x,_.y,_.z),d.push(0,g,0),R.x=O*.5+.5,R.y=k*.5*g+.5,m.push(R.x,R.y),v++}for(let L=0;L<r;L++){const B=P+L,X=C+L;y===!0?h.push(X,X+1,B):h.push(X+1,X,B),T+=3}c.addGroup(u,T,y===!0?1:2),u+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $n extends Fn{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new $n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Eo extends bt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),c(i),h(),this.setAttribute("position",new rt(s,3)),this.setAttribute("normal",new rt(s.slice(),3)),this.setAttribute("uv",new rt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(A){const b=new N,y=new N,P=new N;for(let R=0;R<t.length;R+=3)m(t[R+0],b),m(t[R+1],y),m(t[R+2],P),l(b,y,P,A)}function l(A,b,y,P){const R=P+1,_=[];for(let T=0;T<=R;T++){_[T]=[];const x=A.clone().lerp(y,T/R),g=b.clone().lerp(y,T/R),C=R-T;for(let L=0;L<=C;L++)L===0&&T===R?_[T][L]=x:_[T][L]=x.clone().lerp(g,L/C)}for(let T=0;T<R;T++)for(let x=0;x<2*(R-T)-1;x++){const g=Math.floor(x/2);x%2===0?(d(_[T][g+1]),d(_[T+1][g]),d(_[T][g])):(d(_[T][g+1]),d(_[T+1][g+1]),d(_[T+1][g]))}}function c(A){const b=new N;for(let y=0;y<s.length;y+=3)b.x=s[y+0],b.y=s[y+1],b.z=s[y+2],b.normalize().multiplyScalar(A),s[y+0]=b.x,s[y+1]=b.y,s[y+2]=b.z}function h(){const A=new N;for(let b=0;b<s.length;b+=3){A.x=s[b+0],A.y=s[b+1],A.z=s[b+2];const y=p(A)/2/Math.PI+.5,P=u(A)/Math.PI+.5;a.push(y,1-P)}v(),f()}function f(){for(let A=0;A<a.length;A+=6){const b=a[A+0],y=a[A+2],P=a[A+4],R=Math.max(b,y,P),_=Math.min(b,y,P);R>.9&&_<.1&&(b<.2&&(a[A+0]+=1),y<.2&&(a[A+2]+=1),P<.2&&(a[A+4]+=1))}}function d(A){s.push(A.x,A.y,A.z)}function m(A,b){const y=A*3;b.x=e[y+0],b.y=e[y+1],b.z=e[y+2]}function v(){const A=new N,b=new N,y=new N,P=new N,R=new Ve,_=new Ve,T=new Ve;for(let x=0,g=0;x<s.length;x+=9,g+=6){A.set(s[x+0],s[x+1],s[x+2]),b.set(s[x+3],s[x+4],s[x+5]),y.set(s[x+6],s[x+7],s[x+8]),R.set(a[g+0],a[g+1]),_.set(a[g+2],a[g+3]),T.set(a[g+4],a[g+5]),P.copy(A).add(b).add(y).divideScalar(3);const C=p(P);M(R,g+0,A,C),M(_,g+2,b,C),M(T,g+4,y,C)}}function M(A,b,y,P){P<0&&A.x===1&&(a[b]=A.x-1),y.x===0&&y.z===0&&(a[b]=P/2/Math.PI+.5)}function p(A){return Math.atan2(A.z,-A.x)}function u(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eo(e.vertices,e.indices,e.radius,e.details)}}class To extends Eo{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new To(e.radius,e.detail)}}class Ti extends bt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,f=e/o,d=t/l,m=[],v=[],M=[],p=[];for(let u=0;u<h;u++){const A=u*d-a;for(let b=0;b<c;b++){const y=b*f-s;v.push(y,-A,0),M.push(0,0,1),p.push(b/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let A=0;A<o;A++){const b=A+c*u,y=A+c*(u+1),P=A+1+c*(u+1),R=A+1+c*u;m.push(b,y,R),m.push(y,P,R)}this.setIndex(m),this.setAttribute("position",new rt(v,3)),this.setAttribute("normal",new rt(M,3)),this.setAttribute("uv",new rt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ti(e.width,e.height,e.widthSegments,e.heightSegments)}}class vn extends bt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new N,d=new N,m=[],v=[],M=[],p=[];for(let u=0;u<=i;u++){const A=[],b=u/i;let y=0;u===0&&a===0?y=.5/t:u===i&&l===Math.PI&&(y=-.5/t);for(let P=0;P<=t;P++){const R=P/t;f.x=-e*Math.cos(r+R*s)*Math.sin(a+b*o),f.y=e*Math.cos(a+b*o),f.z=e*Math.sin(r+R*s)*Math.sin(a+b*o),v.push(f.x,f.y,f.z),d.copy(f).normalize(),M.push(d.x,d.y,d.z),p.push(R+y,1-b),A.push(c++)}h.push(A)}for(let u=0;u<i;u++)for(let A=0;A<t;A++){const b=h[u][A+1],y=h[u][A],P=h[u+1][A],R=h[u+1][A+1];(u!==0||a>0)&&m.push(b,y,R),(u!==i-1||l<Math.PI)&&m.push(y,P,R)}this.setIndex(m),this.setAttribute("position",new rt(v,3)),this.setAttribute("normal",new rt(M,3)),this.setAttribute("uv",new rt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ao extends bt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],c=[],h=new N,f=new N,d=new N;for(let m=0;m<=i;m++)for(let v=0;v<=r;v++){const M=v/r*s,p=m/i*Math.PI*2;f.x=(e+t*Math.cos(p))*Math.cos(M),f.y=(e+t*Math.cos(p))*Math.sin(M),f.z=t*Math.sin(p),o.push(f.x,f.y,f.z),h.x=e*Math.cos(M),h.y=e*Math.sin(M),d.subVectors(f,h).normalize(),l.push(d.x,d.y,d.z),c.push(v/r),c.push(m/i)}for(let m=1;m<=i;m++)for(let v=1;v<=r;v++){const M=(r+1)*m+v-1,p=(r+1)*(m-1)+v-1,u=(r+1)*(m-1)+v,A=(r+1)*m+v;a.push(M,p,A),a.push(p,u,A)}this.setIndex(a),this.setAttribute("position",new rt(o,3)),this.setAttribute("normal",new rt(l,3)),this.setAttribute("uv",new rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class on extends lr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ol,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ch extends lr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ph extends lr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class El extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Dh extends El{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ca=new ot,Mc=new N,Sc=new N;class Lh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mo,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Mc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mc),Sc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sc),t.updateMatrixWorld(),ca.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ca,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ca)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Tl extends xl{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ih extends Lh{constructor(){super(new Tl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Uh extends El{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new Ih}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Nh extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function yc(n,e,t,i){const r=Fh(i);switch(t){case rl:return n*e;case fo:return n*e/r.components*r.byteLength;case po:return n*e/r.components*r.byteLength;case al:return n*e*2/r.components*r.byteLength;case mo:return n*e*2/r.components*r.byteLength;case sl:return n*e*3/r.components*r.byteLength;case cn:return n*e*4/r.components*r.byteLength;case go:return n*e*4/r.components*r.byteLength;case ps:case ms:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case gs:case _s:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pa:case La:return Math.max(n,16)*Math.max(e,8)/4;case Ca:case Da:return Math.max(n,8)*Math.max(e,8)/2;case Ia:case Ua:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Na:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Oa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ba:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case za:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ka:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ha:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Va:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ga:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Wa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case qa:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ya:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case $a:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ka:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Za:case ja:case Ja:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Qa:case eo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case to:case no:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Fh(n){switch(n){case Mn:case el:return{byteLength:1,components:1};case Rr:case tl:case Br:return{byteLength:2,components:1};case uo:case ho:return{byteLength:2,components:4};case yi:case lo:case _n:return{byteLength:4,components:1};case nl:case il:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:co}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=co);function Al(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Oh(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const h=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,h);else{f.sort((m,v)=>m.start-v.start);let d=0;for(let m=1;m<f.length;m++){const v=f[d],M=f[m];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++d,f[d]=M)}f.length=d+1;for(let m=0,v=f.length;m<v;m++){const M=f[m];n.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Bh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Yh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$h=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ad=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,od=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ld=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ud=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pd="gl_FragColor = linearToOutputTexel( gl_FragColor );",md=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_d=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Md=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ed=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Td=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ad=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Pd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Dd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ld=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Id=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ud=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Fd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Od=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Yd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$d=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ef=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,af=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,of=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,df=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ff=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_f=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Sf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ef=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Af=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Df=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,If=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Of=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ep=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,np=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ip=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ap=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,op=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,up=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_p=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:Bh,alphahash_pars_fragment:zh,alphamap_fragment:kh,alphamap_pars_fragment:Hh,alphatest_fragment:Vh,alphatest_pars_fragment:Gh,aomap_fragment:Wh,aomap_pars_fragment:Xh,batching_pars_vertex:qh,batching_vertex:Yh,begin_vertex:$h,beginnormal_vertex:Kh,bsdfs:Zh,iridescence_fragment:jh,bumpmap_pars_fragment:Jh,clipping_planes_fragment:Qh,clipping_planes_pars_fragment:ed,clipping_planes_pars_vertex:td,clipping_planes_vertex:nd,color_fragment:id,color_pars_fragment:rd,color_pars_vertex:sd,color_vertex:ad,common:od,cube_uv_reflection_fragment:cd,defaultnormal_vertex:ld,displacementmap_pars_vertex:ud,displacementmap_vertex:hd,emissivemap_fragment:dd,emissivemap_pars_fragment:fd,colorspace_fragment:pd,colorspace_pars_fragment:md,envmap_fragment:gd,envmap_common_pars_fragment:_d,envmap_pars_fragment:xd,envmap_pars_vertex:vd,envmap_physical_pars_fragment:Pd,envmap_vertex:Md,fog_vertex:Sd,fog_pars_vertex:yd,fog_fragment:Ed,fog_pars_fragment:Td,gradientmap_pars_fragment:Ad,lightmap_pars_fragment:bd,lights_lambert_fragment:wd,lights_lambert_pars_fragment:Rd,lights_pars_begin:Cd,lights_toon_fragment:Dd,lights_toon_pars_fragment:Ld,lights_phong_fragment:Id,lights_phong_pars_fragment:Ud,lights_physical_fragment:Nd,lights_physical_pars_fragment:Fd,lights_fragment_begin:Od,lights_fragment_maps:Bd,lights_fragment_end:zd,logdepthbuf_fragment:kd,logdepthbuf_pars_fragment:Hd,logdepthbuf_pars_vertex:Vd,logdepthbuf_vertex:Gd,map_fragment:Wd,map_pars_fragment:Xd,map_particle_fragment:qd,map_particle_pars_fragment:Yd,metalnessmap_fragment:$d,metalnessmap_pars_fragment:Kd,morphinstance_vertex:Zd,morphcolor_vertex:jd,morphnormal_vertex:Jd,morphtarget_pars_vertex:Qd,morphtarget_vertex:ef,normal_fragment_begin:tf,normal_fragment_maps:nf,normal_pars_fragment:rf,normal_pars_vertex:sf,normal_vertex:af,normalmap_pars_fragment:of,clearcoat_normal_fragment_begin:cf,clearcoat_normal_fragment_maps:lf,clearcoat_pars_fragment:uf,iridescence_pars_fragment:hf,opaque_fragment:df,packing:ff,premultiplied_alpha_fragment:pf,project_vertex:mf,dithering_fragment:gf,dithering_pars_fragment:_f,roughnessmap_fragment:xf,roughnessmap_pars_fragment:vf,shadowmap_pars_fragment:Mf,shadowmap_pars_vertex:Sf,shadowmap_vertex:yf,shadowmask_pars_fragment:Ef,skinbase_vertex:Tf,skinning_pars_vertex:Af,skinning_vertex:bf,skinnormal_vertex:wf,specularmap_fragment:Rf,specularmap_pars_fragment:Cf,tonemapping_fragment:Pf,tonemapping_pars_fragment:Df,transmission_fragment:Lf,transmission_pars_fragment:If,uv_pars_fragment:Uf,uv_pars_vertex:Nf,uv_vertex:Ff,worldpos_vertex:Of,background_vert:Bf,background_frag:zf,backgroundCube_vert:kf,backgroundCube_frag:Hf,cube_vert:Vf,cube_frag:Gf,depth_vert:Wf,depth_frag:Xf,distanceRGBA_vert:qf,distanceRGBA_frag:Yf,equirect_vert:$f,equirect_frag:Kf,linedashed_vert:Zf,linedashed_frag:jf,meshbasic_vert:Jf,meshbasic_frag:Qf,meshlambert_vert:ep,meshlambert_frag:tp,meshmatcap_vert:np,meshmatcap_frag:ip,meshnormal_vert:rp,meshnormal_frag:sp,meshphong_vert:ap,meshphong_frag:op,meshphysical_vert:cp,meshphysical_frag:lp,meshtoon_vert:up,meshtoon_frag:hp,points_vert:dp,points_frag:fp,shadow_vert:pp,shadow_frag:mp,sprite_vert:gp,sprite_frag:_p},oe={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},pn={basic:{uniforms:Ct([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Ct([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Ct([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Ct([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Ct([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Ct([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Ct([oe.points,oe.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Ct([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Ct([oe.common,oe.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Ct([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Ct([oe.sprite,oe.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Ct([oe.common,oe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Ct([oe.lights,oe.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};pn.physical={uniforms:Ct([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const us={r:0,b:0,g:0},oi=new Sn,xp=new ot;function vp(n,e,t,i,r,s,a){const o=new Xe(0);let l=s===!0?0:1,c,h,f=null,d=0,m=null;function v(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function M(b){let y=!1;const P=v(b);P===null?u(o,l):P&&P.isColor&&(u(P,1),y=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(b,y){const P=v(y);P&&(P.isCubeTexture||P.mapping===Is)?(h===void 0&&(h=new Tt(new Jt(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:nr(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,_,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),oi.copy(y.backgroundRotation),oi.x*=-1,oi.y*=-1,oi.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(xp.makeRotationFromEuler(oi)),h.material.toneMapped=Ke.getTransfer(P.colorSpace)!==Qe,(f!==P||d!==P.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,f=P,d=P.version,m=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new Tt(new Ti(2,2),new ei({name:"BackgroundMaterial",uniforms:nr(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(P.colorSpace)!==Qe,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(f!==P||d!==P.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=P,d=P.version,m=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function u(b,y){b.getRGB(us,_l(n)),i.buffers.color.setClear(us.r,us.g,us.b,y,a)}function A(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,y=1){o.set(b),l=y,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,u(o,l)},render:M,addToRenderList:p,dispose:A}}function Mp(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(g,C,L,B,X){let O=!1;const k=f(B,L,C);s!==k&&(s=k,c(s.object)),O=m(g,B,L,X),O&&v(g,B,L,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,y(g,C,L,B),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(g){return n.bindVertexArray(g)}function h(g){return n.deleteVertexArray(g)}function f(g,C,L){const B=L.wireframe===!0;let X=i[g.id];X===void 0&&(X={},i[g.id]=X);let O=X[C.id];O===void 0&&(O={},X[C.id]=O);let k=O[B];return k===void 0&&(k=d(l()),O[B]=k),k}function d(g){const C=[],L=[],B=[];for(let X=0;X<t;X++)C[X]=0,L[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:L,attributeDivisors:B,object:g,attributes:{},index:null}}function m(g,C,L,B){const X=s.attributes,O=C.attributes;let k=0;const Y=L.getAttributes();for(const H in Y)if(Y[H].location>=0){const se=X[H];let ge=O[H];if(ge===void 0&&(H==="instanceMatrix"&&g.instanceMatrix&&(ge=g.instanceMatrix),H==="instanceColor"&&g.instanceColor&&(ge=g.instanceColor)),se===void 0||se.attribute!==ge||ge&&se.data!==ge.data)return!0;k++}return s.attributesNum!==k||s.index!==B}function v(g,C,L,B){const X={},O=C.attributes;let k=0;const Y=L.getAttributes();for(const H in Y)if(Y[H].location>=0){let se=O[H];se===void 0&&(H==="instanceMatrix"&&g.instanceMatrix&&(se=g.instanceMatrix),H==="instanceColor"&&g.instanceColor&&(se=g.instanceColor));const ge={};ge.attribute=se,se&&se.data&&(ge.data=se.data),X[H]=ge,k++}s.attributes=X,s.attributesNum=k,s.index=B}function M(){const g=s.newAttributes;for(let C=0,L=g.length;C<L;C++)g[C]=0}function p(g){u(g,0)}function u(g,C){const L=s.newAttributes,B=s.enabledAttributes,X=s.attributeDivisors;L[g]=1,B[g]===0&&(n.enableVertexAttribArray(g),B[g]=1),X[g]!==C&&(n.vertexAttribDivisor(g,C),X[g]=C)}function A(){const g=s.newAttributes,C=s.enabledAttributes;for(let L=0,B=C.length;L<B;L++)C[L]!==g[L]&&(n.disableVertexAttribArray(L),C[L]=0)}function b(g,C,L,B,X,O,k){k===!0?n.vertexAttribIPointer(g,C,L,X,O):n.vertexAttribPointer(g,C,L,B,X,O)}function y(g,C,L,B){M();const X=B.attributes,O=L.getAttributes(),k=C.defaultAttributeValues;for(const Y in O){const H=O[Y];if(H.location>=0){let ie=X[Y];if(ie===void 0&&(Y==="instanceMatrix"&&g.instanceMatrix&&(ie=g.instanceMatrix),Y==="instanceColor"&&g.instanceColor&&(ie=g.instanceColor)),ie!==void 0){const se=ie.normalized,ge=ie.itemSize,De=e.get(ie);if(De===void 0)continue;const qe=De.buffer,et=De.type,Ye=De.bytesPerElement,W=et===n.INT||et===n.UNSIGNED_INT||ie.gpuType===lo;if(ie.isInterleavedBufferAttribute){const Z=ie.data,ce=Z.stride,Se=ie.offset;if(Z.isInstancedInterleavedBuffer){for(let pe=0;pe<H.locationSize;pe++)u(H.location+pe,Z.meshPerAttribute);g.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let pe=0;pe<H.locationSize;pe++)p(H.location+pe);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let pe=0;pe<H.locationSize;pe++)b(H.location+pe,ge/H.locationSize,et,se,ce*Ye,(Se+ge/H.locationSize*pe)*Ye,W)}else{if(ie.isInstancedBufferAttribute){for(let Z=0;Z<H.locationSize;Z++)u(H.location+Z,ie.meshPerAttribute);g.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Z=0;Z<H.locationSize;Z++)p(H.location+Z);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let Z=0;Z<H.locationSize;Z++)b(H.location+Z,ge/H.locationSize,et,se,ge*Ye,ge/H.locationSize*Z*Ye,W)}}else if(k!==void 0){const se=k[Y];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(H.location,se);break;case 3:n.vertexAttrib3fv(H.location,se);break;case 4:n.vertexAttrib4fv(H.location,se);break;default:n.vertexAttrib1fv(H.location,se)}}}}A()}function P(){T();for(const g in i){const C=i[g];for(const L in C){const B=C[L];for(const X in B)h(B[X].object),delete B[X];delete C[L]}delete i[g]}}function R(g){if(i[g.id]===void 0)return;const C=i[g.id];for(const L in C){const B=C[L];for(const X in B)h(B[X].object),delete B[X];delete C[L]}delete i[g.id]}function _(g){for(const C in i){const L=i[C];if(L[g.id]===void 0)continue;const B=L[g.id];for(const X in B)h(B[X].object),delete B[X];delete L[g.id]}}function T(){x(),a=!0,s!==r&&(s=r,c(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:x,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:_,initAttributes:M,enableAttribute:p,disableUnusedAttributes:A}}function Sp(n,e,t){let i;function r(c){i=c}function s(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,f){f!==0&&(n.drawArraysInstanced(i,c,h,f),t.update(h,i,f))}function o(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let m=0;for(let v=0;v<f;v++)m+=h[v];t.update(m,i,1)}function l(c,h,f,d){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)a(c[v],h[v],d[v]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,f);let v=0;for(let M=0;M<f;M++)v+=h[M]*d[M];t.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function yp(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(_){return!(_!==cn&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const T=_===Br&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Mn&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&_!==_n&&!T)}function l(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=v>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:A,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:P,maxSamples:R}}function Ep(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new ui,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,m){const v=f.clippingPlanes,M=f.clipIntersection,p=f.clipShadows,u=n.get(f);if(!r||v===null||v.length===0||s&&!p)s?h(null):c();else{const A=s?0:i,b=A*4;let y=u.clippingState||null;l.value=y,y=h(v,d,b,m);for(let P=0;P!==b;++P)y[P]=t[P];u.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,m,v){const M=f!==null?f.length:0;let p=null;if(M!==0){if(p=l.value,v!==!0||p===null){const u=m+M*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(p===null||p.length<u)&&(p=new Float32Array(u));for(let b=0,y=m;b!==M;++b,y+=4)a.copy(f[b]).applyMatrix4(A,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}function Tp(n){let e=new WeakMap;function t(a,o){return o===ba?a.mapping=Qi:o===wa&&(a.mapping=er),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ba||o===wa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new xh(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Yi=4,Ec=[.125,.215,.35,.446,.526,.582],fi=20,la=new Tl,Tc=new Xe;let ua=null,ha=0,da=0,fa=!1;const hi=(1+Math.sqrt(5))/2,Gi=1/hi,Ac=[new N(-hi,Gi,0),new N(hi,Gi,0),new N(-Gi,0,hi),new N(Gi,0,hi),new N(0,hi,-Gi),new N(0,hi,Gi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],Ap=new N;class bc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=Ap}=s;ua=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),da=this._renderer.getActiveMipmapLevel(),fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ua,ha,da),this._renderer.xr.enabled=fa,e.scissorTest=!1,hs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qi||e.mapping===er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ua=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),da=this._renderer.getActiveMipmapLevel(),fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:Br,format:cn,colorSpace:tr,depthBuffer:!1},r=wc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bp(s)),this._blurMaterial=wp(s,e,t)}return r}_compileMaterial(e){const t=new Tt(this._lodPlanes[0],e);this._renderer.compile(t,la)}_sceneToCubeUV(e,t,i,r,s){const l=new jt(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,m=f.toneMapping;f.getClearColor(Tc),f.toneMapping=Jn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const M=new pl({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),p=new Tt(new Jt,M);let u=!1;const A=e.background;A?A.isColor&&(M.color.copy(A),e.background=null,u=!0):(M.color.copy(Tc),u=!0);for(let b=0;b<6;b++){const y=b%3;y===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[b],s.y,s.z)):y===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[b]));const P=this._cubeSize;hs(r,y*P,b>2?P:0,P,P),f.setRenderTarget(r),u&&f.render(p,l),f.render(e,l)}p.geometry.dispose(),p.material.dispose(),f.toneMapping=m,f.autoClear=d,e.background=A}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Qi||e.mapping===er;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Tt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;hs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,la)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ac[(r-s-1)%Ac.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Tt(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*fi-1),M=s/v,p=isFinite(s)?1+Math.floor(h*M):fi;p>fi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${fi}`);const u=[];let A=0;for(let _=0;_<fi;++_){const T=_/M,x=Math.exp(-T*T/2);u.push(x),_===0?A+=x:_<p&&(A+=2*x)}for(let _=0;_<u.length;_++)u[_]=u[_]/A;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=v,d.mipInt.value=b-i;const y=this._sizeLods[r],P=3*y*(r>b-Yi?r-b+Yi:0),R=4*(this._cubeSize-y);hs(t,P,R,3*y,2*y),l.setRenderTarget(t),l.render(f,la)}}function bp(n){const e=[],t=[],i=[];let r=n;const s=n-Yi+1+Ec.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Yi?l=Ec[a-n+Yi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,v=6,M=3,p=2,u=1,A=new Float32Array(M*v*m),b=new Float32Array(p*v*m),y=new Float32Array(u*v*m);for(let R=0;R<m;R++){const _=R%3*2/3-1,T=R>2?0:-1,x=[_,T,0,_+2/3,T,0,_+2/3,T+1,0,_,T,0,_+2/3,T+1,0,_,T+1,0];A.set(x,M*v*R),b.set(d,p*v*R);const g=[R,R,R,R,R,R];y.set(g,u*v*R)}const P=new bt;P.setAttribute("position",new un(A,M)),P.setAttribute("uv",new un(b,p)),P.setAttribute("faceIndex",new un(y,u)),e.push(P),r>Yi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function wc(n,e,t){const i=new Ei(n,e,t);return i.texture.mapping=Is,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function wp(n,e,t){const i=new Float32Array(fi),r=new N(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Rc(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Cc(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function bo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Rp(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ba||l===wa,h=l===Qi||l===er;if(c||h){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new bc(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&r(m)?(t===null&&(t=new bc(n)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Cp(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ir("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Pp(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const m in d)e.update(d[m],n.ARRAY_BUFFER)}function c(f){const d=[],m=f.index,v=f.attributes.position;let M=0;if(m!==null){const A=m.array;M=m.version;for(let b=0,y=A.length;b<y;b+=3){const P=A[b+0],R=A[b+1],_=A[b+2];d.push(P,R,R,_,_,P)}}else if(v!==void 0){const A=v.array;M=v.version;for(let b=0,y=A.length/3-1;b<y;b+=3){const P=b+0,R=b+1,_=b+2;d.push(P,R,R,_,_,P)}}else return;const p=new(ll(d)?gl:ml)(d,1);p.version=M;const u=s.get(f);u&&e.remove(u),s.set(f,p)}function h(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Dp(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,m){n.drawElements(i,m,s,d*a),t.update(m,i,1)}function c(d,m,v){v!==0&&(n.drawElementsInstanced(i,m,s,d*a,v),t.update(m,i,v))}function h(d,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,v);let p=0;for(let u=0;u<v;u++)p+=m[u];t.update(p,i,1)}function f(d,m,v,M){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<d.length;u++)c(d[u]/a,m[u],M[u]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,M,0,v);let u=0;for(let A=0;A<v;A++)u+=m[A]*M[A];t.update(u,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Lp(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Ip(n,e,t){const i=new WeakMap,r=new lt;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let g=function(){T.dispose(),i.delete(o),o.removeEventListener("dispose",g)};var m=g;d!==void 0&&d.texture.dispose();const v=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let y=0;v===!0&&(y=1),M===!0&&(y=2),p===!0&&(y=3);let P=o.attributes.position.count*y,R=1;P>e.maxTextureSize&&(R=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const _=new Float32Array(P*R*4*f),T=new ul(_,P,R,f);T.type=_n,T.needsUpdate=!0;const x=y*4;for(let C=0;C<f;C++){const L=u[C],B=A[C],X=b[C],O=P*R*4*C;for(let k=0;k<L.count;k++){const Y=k*x;v===!0&&(r.fromBufferAttribute(L,k),_[O+Y+0]=r.x,_[O+Y+1]=r.y,_[O+Y+2]=r.z,_[O+Y+3]=0),M===!0&&(r.fromBufferAttribute(B,k),_[O+Y+4]=r.x,_[O+Y+5]=r.y,_[O+Y+6]=r.z,_[O+Y+7]=0),p===!0&&(r.fromBufferAttribute(X,k),_[O+Y+8]=r.x,_[O+Y+9]=r.y,_[O+Y+10]=r.z,_[O+Y+11]=X.itemSize===4?r.w:1)}}d={count:f,texture:T,size:new Ve(P,R)},i.set(o,d),o.addEventListener("dispose",g)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let v=0;for(let p=0;p<c.length;p++)v+=c[p];const M=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",M),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Up(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const bl=new At,Pc=new Sl(1,1),wl=new ul,Rl=new th,Cl=new vl,Dc=[],Lc=[],Ic=new Float32Array(16),Uc=new Float32Array(9),Nc=new Float32Array(4);function ur(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Dc[r];if(s===void 0&&(s=new Float32Array(r),Dc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Us(n,e){let t=Lc[e];t===void 0&&(t=new Int32Array(e),Lc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Np(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Fp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2fv(this.addr,e),vt(t,e)}}function Op(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;n.uniform3fv(this.addr,e),vt(t,e)}}function Bp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4fv(this.addr,e),vt(t,e)}}function zp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,i))return;Nc.set(i),n.uniformMatrix2fv(this.addr,!1,Nc),vt(t,i)}}function kp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,i))return;Uc.set(i),n.uniformMatrix3fv(this.addr,!1,Uc),vt(t,i)}}function Hp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,i))return;Ic.set(i),n.uniformMatrix4fv(this.addr,!1,Ic),vt(t,i)}}function Vp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Gp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2iv(this.addr,e),vt(t,e)}}function Wp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3iv(this.addr,e),vt(t,e)}}function Xp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4iv(this.addr,e),vt(t,e)}}function qp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Yp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2uiv(this.addr,e),vt(t,e)}}function $p(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3uiv(this.addr,e),vt(t,e)}}function Kp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4uiv(this.addr,e),vt(t,e)}}function Zp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Pc.compareFunction=cl,s=Pc):s=bl,t.setTexture2D(e||s,r)}function jp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Rl,r)}function Jp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Cl,r)}function Qp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||wl,r)}function em(n){switch(n){case 5126:return Np;case 35664:return Fp;case 35665:return Op;case 35666:return Bp;case 35674:return zp;case 35675:return kp;case 35676:return Hp;case 5124:case 35670:return Vp;case 35667:case 35671:return Gp;case 35668:case 35672:return Wp;case 35669:case 35673:return Xp;case 5125:return qp;case 36294:return Yp;case 36295:return $p;case 36296:return Kp;case 35678:case 36198:case 36298:case 36306:case 35682:return Zp;case 35679:case 36299:case 36307:return jp;case 35680:case 36300:case 36308:case 36293:return Jp;case 36289:case 36303:case 36311:case 36292:return Qp}}function tm(n,e){n.uniform1fv(this.addr,e)}function nm(n,e){const t=ur(e,this.size,2);n.uniform2fv(this.addr,t)}function im(n,e){const t=ur(e,this.size,3);n.uniform3fv(this.addr,t)}function rm(n,e){const t=ur(e,this.size,4);n.uniform4fv(this.addr,t)}function sm(n,e){const t=ur(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function am(n,e){const t=ur(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function om(n,e){const t=ur(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function cm(n,e){n.uniform1iv(this.addr,e)}function lm(n,e){n.uniform2iv(this.addr,e)}function um(n,e){n.uniform3iv(this.addr,e)}function hm(n,e){n.uniform4iv(this.addr,e)}function dm(n,e){n.uniform1uiv(this.addr,e)}function fm(n,e){n.uniform2uiv(this.addr,e)}function pm(n,e){n.uniform3uiv(this.addr,e)}function mm(n,e){n.uniform4uiv(this.addr,e)}function gm(n,e,t){const i=this.cache,r=e.length,s=Us(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||bl,s[a])}function _m(n,e,t){const i=this.cache,r=e.length,s=Us(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Rl,s[a])}function xm(n,e,t){const i=this.cache,r=e.length,s=Us(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Cl,s[a])}function vm(n,e,t){const i=this.cache,r=e.length,s=Us(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||wl,s[a])}function Mm(n){switch(n){case 5126:return tm;case 35664:return nm;case 35665:return im;case 35666:return rm;case 35674:return sm;case 35675:return am;case 35676:return om;case 5124:case 35670:return cm;case 35667:case 35671:return lm;case 35668:case 35672:return um;case 35669:case 35673:return hm;case 5125:return dm;case 36294:return fm;case 36295:return pm;case 36296:return mm;case 35678:case 36198:case 36298:case 36306:case 35682:return gm;case 35679:case 36299:case 36307:return _m;case 35680:case 36300:case 36308:case 36293:return xm;case 36289:case 36303:case 36311:case 36292:return vm}}class Sm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=em(t.type)}}class ym{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Mm(t.type)}}class Em{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const pa=/(\w+)(\])?(\[|\.)?/g;function Fc(n,e){n.seq.push(e),n.map[e.id]=e}function Tm(n,e,t){const i=n.name,r=i.length;for(pa.lastIndex=0;;){const s=pa.exec(i),a=pa.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Fc(t,c===void 0?new Sm(o,n,e):new ym(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Em(o),Fc(t,f)),t=f}}}class xs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Tm(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Oc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Am=37297;let bm=0;function wm(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Bc=new ze;function Rm(n){Ke._getMatrix(Bc,Ke.workingColorSpace,n);const e=`mat3( ${Bc.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(n)){case ys:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function zc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+wm(n.getShaderSource(e),o)}else return s}function Cm(n,e){const t=Rm(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Pm(n,e){let t;switch(e){case mu:t="Linear";break;case gu:t="Reinhard";break;case _u:t="Cineon";break;case Jc:t="ACESFilmic";break;case vu:t="AgX";break;case Mu:t="Neutral";break;case xu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ds=new N;function Dm(){Ke.getLuminanceCoefficients(ds);const n=ds.x.toFixed(4),e=ds.y.toFixed(4),t=ds.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yr).join(`
`)}function Im(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Um(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function yr(n){return n!==""}function kc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Nm=/^[ \t]*#include +<([\w\d./]+)>/gm;function io(n){return n.replace(Nm,Om)}const Fm=new Map;function Om(n,e){let t=He[e];if(t===void 0){const i=Fm.get(e);if(i!==void 0)t=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return io(t)}const Bm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vc(n){return n.replace(Bm,zm)}function zm(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Gc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function km(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Kc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Zc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Cn&&(e="SHADOWMAP_TYPE_VSM"),e}function Hm(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Qi:case er:e="ENVMAP_TYPE_CUBE";break;case Is:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vm(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===er&&(e="ENVMAP_MODE_REFRACTION"),e}function Gm(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case jc:e="ENVMAP_BLENDING_MULTIPLY";break;case fu:e="ENVMAP_BLENDING_MIX";break;case pu:e="ENVMAP_BLENDING_ADD";break}return e}function Wm(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Xm(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=km(t),c=Hm(t),h=Vm(t),f=Gm(t),d=Wm(t),m=Lm(t),v=Im(s),M=r.createProgram();let p,u,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(yr).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(yr).join(`
`),u.length>0&&(u+=`
`)):(p=[Gc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),u=[Gc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jn?"#define TONE_MAPPING":"",t.toneMapping!==Jn?He.tonemapping_pars_fragment:"",t.toneMapping!==Jn?Pm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,Cm("linearToOutputTexel",t.outputColorSpace),Dm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yr).join(`
`)),a=io(a),a=kc(a,t),a=Hc(a,t),o=io(o),o=kc(o,t),o=Hc(o,t),a=Vc(a),o=Vc(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",t.glslVersion===Yo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const b=A+p+a,y=A+u+o,P=Oc(r,r.VERTEX_SHADER,b),R=Oc(r,r.FRAGMENT_SHADER,y);r.attachShader(M,P),r.attachShader(M,R),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function _(C){if(n.debug.checkShaderErrors){const L=r.getProgramInfoLog(M)||"",B=r.getShaderInfoLog(P)||"",X=r.getShaderInfoLog(R)||"",O=L.trim(),k=B.trim(),Y=X.trim();let H=!0,ie=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,M,P,R);else{const se=zc(r,P,"vertex"),ge=zc(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+O+`
`+se+`
`+ge)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(k===""||Y==="")&&(ie=!1);ie&&(C.diagnostics={runnable:H,programLog:O,vertexShader:{log:k,prefix:p},fragmentShader:{log:Y,prefix:u}})}r.deleteShader(P),r.deleteShader(R),T=new xs(r,M),x=Um(r,M)}let T;this.getUniforms=function(){return T===void 0&&_(this),T};let x;this.getAttributes=function(){return x===void 0&&_(this),x};let g=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=r.getProgramParameter(M,Am)),g},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bm++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=P,this.fragmentShader=R,this}let qm=0;class Ym{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new $m(e),t.set(e,i)),i}}class $m{constructor(e){this.id=qm++,this.code=e,this.usedTimes=0}}function Km(n,e,t,i,r,s,a){const o=new dl,l=new Ym,c=new Set,h=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,g,C,L,B){const X=L.fog,O=B.geometry,k=x.isMeshStandardMaterial?L.environment:null,Y=(x.isMeshStandardMaterial?t:e).get(x.envMap||k),H=Y&&Y.mapping===Is?Y.image.height:null,ie=v[x.type];x.precision!==null&&(m=r.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const se=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ge=se!==void 0?se.length:0;let De=0;O.morphAttributes.position!==void 0&&(De=1),O.morphAttributes.normal!==void 0&&(De=2),O.morphAttributes.color!==void 0&&(De=3);let qe,et,Ye,W;if(ie){const je=pn[ie];qe=je.vertexShader,et=je.fragmentShader}else qe=x.vertexShader,et=x.fragmentShader,l.update(x),Ye=l.getVertexShaderID(x),W=l.getFragmentShaderID(x);const Z=n.getRenderTarget(),ce=n.state.buffers.depth.getReversed(),Se=B.isInstancedMesh===!0,pe=B.isBatchedMesh===!0,Fe=!!x.map,pt=!!x.matcap,D=!!Y,tt=!!x.aoMap,Oe=!!x.lightMap,Le=!!x.bumpMap,ve=!!x.normalMap,ct=!!x.displacementMap,Me=!!x.emissiveMap,ke=!!x.metalnessMap,Mt=!!x.roughnessMap,ft=x.anisotropy>0,w=x.clearcoat>0,S=x.dispersion>0,z=x.iridescence>0,$=x.sheen>0,j=x.transmission>0,q=ft&&!!x.anisotropyMap,Ae=w&&!!x.clearcoatMap,re=w&&!!x.clearcoatNormalMap,ye=w&&!!x.clearcoatRoughnessMap,Ee=z&&!!x.iridescenceMap,te=z&&!!x.iridescenceThicknessMap,de=$&&!!x.sheenColorMap,Pe=$&&!!x.sheenRoughnessMap,Te=!!x.specularMap,le=!!x.specularColorMap,Be=!!x.specularIntensityMap,I=j&&!!x.transmissionMap,ne=j&&!!x.thicknessMap,ae=!!x.gradientMap,me=!!x.alphaMap,Q=x.alphaTest>0,K=!!x.alphaHash,xe=!!x.extensions;let Ne=Jn;x.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ne=n.toneMapping);const st={shaderID:ie,shaderType:x.type,shaderName:x.name,vertexShader:qe,fragmentShader:et,defines:x.defines,customVertexShaderID:Ye,customFragmentShaderID:W,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:pe,batchingColor:pe&&B._colorsTexture!==null,instancing:Se,instancingColor:Se&&B.instanceColor!==null,instancingMorph:Se&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:tr,alphaToCoverage:!!x.alphaToCoverage,map:Fe,matcap:pt,envMap:D,envMapMode:D&&Y.mapping,envMapCubeUVHeight:H,aoMap:tt,lightMap:Oe,bumpMap:Le,normalMap:ve,displacementMap:d&&ct,emissiveMap:Me,normalMapObjectSpace:ve&&x.normalMapType===Tu,normalMapTangentSpace:ve&&x.normalMapType===ol,metalnessMap:ke,roughnessMap:Mt,anisotropy:ft,anisotropyMap:q,clearcoat:w,clearcoatMap:Ae,clearcoatNormalMap:re,clearcoatRoughnessMap:ye,dispersion:S,iridescence:z,iridescenceMap:Ee,iridescenceThicknessMap:te,sheen:$,sheenColorMap:de,sheenRoughnessMap:Pe,specularMap:Te,specularColorMap:le,specularIntensityMap:Be,transmission:j,transmissionMap:I,thicknessMap:ne,gradientMap:ae,opaque:x.transparent===!1&&x.blending===Zi&&x.alphaToCoverage===!1,alphaMap:me,alphaTest:Q,alphaHash:K,combine:x.combine,mapUv:Fe&&M(x.map.channel),aoMapUv:tt&&M(x.aoMap.channel),lightMapUv:Oe&&M(x.lightMap.channel),bumpMapUv:Le&&M(x.bumpMap.channel),normalMapUv:ve&&M(x.normalMap.channel),displacementMapUv:ct&&M(x.displacementMap.channel),emissiveMapUv:Me&&M(x.emissiveMap.channel),metalnessMapUv:ke&&M(x.metalnessMap.channel),roughnessMapUv:Mt&&M(x.roughnessMap.channel),anisotropyMapUv:q&&M(x.anisotropyMap.channel),clearcoatMapUv:Ae&&M(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&M(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&M(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&M(x.iridescenceMap.channel),iridescenceThicknessMapUv:te&&M(x.iridescenceThicknessMap.channel),sheenColorMapUv:de&&M(x.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&M(x.sheenRoughnessMap.channel),specularMapUv:Te&&M(x.specularMap.channel),specularColorMapUv:le&&M(x.specularColorMap.channel),specularIntensityMapUv:Be&&M(x.specularIntensityMap.channel),transmissionMapUv:I&&M(x.transmissionMap.channel),thicknessMapUv:ne&&M(x.thicknessMap.channel),alphaMapUv:me&&M(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ve||ft),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!O.attributes.uv&&(Fe||me),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ce,skinning:B.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:De,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ne,decodeVideoTexture:Fe&&x.map.isVideoTexture===!0&&Ke.getTransfer(x.map.colorSpace)===Qe,decodeVideoTextureEmissive:Me&&x.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(x.emissiveMap.colorSpace)===Qe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===sn,flipSided:x.side===zt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:xe&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&x.extensions.multiDraw===!0||pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return st.vertexUv1s=c.has(1),st.vertexUv2s=c.has(2),st.vertexUv3s=c.has(3),c.clear(),st}function u(x){const g=[];if(x.shaderID?g.push(x.shaderID):(g.push(x.customVertexShaderID),g.push(x.customFragmentShaderID)),x.defines!==void 0)for(const C in x.defines)g.push(C),g.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(A(g,x),b(g,x),g.push(n.outputColorSpace)),g.push(x.customProgramCacheKey),g.join()}function A(x,g){x.push(g.precision),x.push(g.outputColorSpace),x.push(g.envMapMode),x.push(g.envMapCubeUVHeight),x.push(g.mapUv),x.push(g.alphaMapUv),x.push(g.lightMapUv),x.push(g.aoMapUv),x.push(g.bumpMapUv),x.push(g.normalMapUv),x.push(g.displacementMapUv),x.push(g.emissiveMapUv),x.push(g.metalnessMapUv),x.push(g.roughnessMapUv),x.push(g.anisotropyMapUv),x.push(g.clearcoatMapUv),x.push(g.clearcoatNormalMapUv),x.push(g.clearcoatRoughnessMapUv),x.push(g.iridescenceMapUv),x.push(g.iridescenceThicknessMapUv),x.push(g.sheenColorMapUv),x.push(g.sheenRoughnessMapUv),x.push(g.specularMapUv),x.push(g.specularColorMapUv),x.push(g.specularIntensityMapUv),x.push(g.transmissionMapUv),x.push(g.thicknessMapUv),x.push(g.combine),x.push(g.fogExp2),x.push(g.sizeAttenuation),x.push(g.morphTargetsCount),x.push(g.morphAttributeCount),x.push(g.numDirLights),x.push(g.numPointLights),x.push(g.numSpotLights),x.push(g.numSpotLightMaps),x.push(g.numHemiLights),x.push(g.numRectAreaLights),x.push(g.numDirLightShadows),x.push(g.numPointLightShadows),x.push(g.numSpotLightShadows),x.push(g.numSpotLightShadowsWithMaps),x.push(g.numLightProbes),x.push(g.shadowMapType),x.push(g.toneMapping),x.push(g.numClippingPlanes),x.push(g.numClipIntersection),x.push(g.depthPacking)}function b(x,g){o.disableAll(),g.supportsVertexTextures&&o.enable(0),g.instancing&&o.enable(1),g.instancingColor&&o.enable(2),g.instancingMorph&&o.enable(3),g.matcap&&o.enable(4),g.envMap&&o.enable(5),g.normalMapObjectSpace&&o.enable(6),g.normalMapTangentSpace&&o.enable(7),g.clearcoat&&o.enable(8),g.iridescence&&o.enable(9),g.alphaTest&&o.enable(10),g.vertexColors&&o.enable(11),g.vertexAlphas&&o.enable(12),g.vertexUv1s&&o.enable(13),g.vertexUv2s&&o.enable(14),g.vertexUv3s&&o.enable(15),g.vertexTangents&&o.enable(16),g.anisotropy&&o.enable(17),g.alphaHash&&o.enable(18),g.batching&&o.enable(19),g.dispersion&&o.enable(20),g.batchingColor&&o.enable(21),g.gradientMap&&o.enable(22),x.push(o.mask),o.disableAll(),g.fog&&o.enable(0),g.useFog&&o.enable(1),g.flatShading&&o.enable(2),g.logarithmicDepthBuffer&&o.enable(3),g.reversedDepthBuffer&&o.enable(4),g.skinning&&o.enable(5),g.morphTargets&&o.enable(6),g.morphNormals&&o.enable(7),g.morphColors&&o.enable(8),g.premultipliedAlpha&&o.enable(9),g.shadowMapEnabled&&o.enable(10),g.doubleSided&&o.enable(11),g.flipSided&&o.enable(12),g.useDepthPacking&&o.enable(13),g.dithering&&o.enable(14),g.transmission&&o.enable(15),g.sheen&&o.enable(16),g.opaque&&o.enable(17),g.pointsUvs&&o.enable(18),g.decodeVideoTexture&&o.enable(19),g.decodeVideoTextureEmissive&&o.enable(20),g.alphaToCoverage&&o.enable(21),x.push(o.mask)}function y(x){const g=v[x.type];let C;if(g){const L=pn[g];C=ph.clone(L.uniforms)}else C=x.uniforms;return C}function P(x,g){let C;for(let L=0,B=h.length;L<B;L++){const X=h[L];if(X.cacheKey===g){C=X,++C.usedTimes;break}}return C===void 0&&(C=new Xm(n,g,x,s),h.push(C)),C}function R(x){if(--x.usedTimes===0){const g=h.indexOf(x);h[g]=h[h.length-1],h.pop(),x.destroy()}}function _(x){l.remove(x)}function T(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:y,acquireProgram:P,releaseProgram:R,releaseShaderCache:_,programs:h,dispose:T}}function Zm(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function jm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Wc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Xc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,d,m,v,M,p){let u=n[e];return u===void 0?(u={id:f.id,object:f,geometry:d,material:m,groupOrder:v,renderOrder:f.renderOrder,z:M,group:p},n[e]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=m,u.groupOrder=v,u.renderOrder=f.renderOrder,u.z=M,u.group=p),e++,u}function o(f,d,m,v,M,p){const u=a(f,d,m,v,M,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):t.push(u)}function l(f,d,m,v,M,p){const u=a(f,d,m,v,M,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function c(f,d){t.length>1&&t.sort(f||jm),i.length>1&&i.sort(d||Wc),r.length>1&&r.sort(d||Wc)}function h(){for(let f=e,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function Jm(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Xc,n.set(i,[a])):r>=s.length?(a=new Xc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Qm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Xe};break;case"SpotLight":t={position:new N,direction:new N,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function eg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let tg=0;function ng(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ig(n){const e=new Qm,t=eg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,s=new ot,a=new ot;function o(c){let h=0,f=0,d=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let m=0,v=0,M=0,p=0,u=0,A=0,b=0,y=0,P=0,R=0,_=0;c.sort(ng);for(let x=0,g=c.length;x<g;x++){const C=c[x],L=C.color,B=C.intensity,X=C.distance,O=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=L.r*B,f+=L.g*B,d+=L.b*B;else if(C.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(C.sh.coefficients[k],B);_++}else if(C.isDirectionalLight){const k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Y=C.shadow,H=t.get(C);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,i.directionalShadow[m]=H,i.directionalShadowMap[m]=O,i.directionalShadowMatrix[m]=C.shadow.matrix,A++}i.directional[m]=k,m++}else if(C.isSpotLight){const k=e.get(C);k.position.setFromMatrixPosition(C.matrixWorld),k.color.copy(L).multiplyScalar(B),k.distance=X,k.coneCos=Math.cos(C.angle),k.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),k.decay=C.decay,i.spot[M]=k;const Y=C.shadow;if(C.map&&(i.spotLightMap[P]=C.map,P++,Y.updateMatrices(C),C.castShadow&&R++),i.spotLightMatrix[M]=Y.matrix,C.castShadow){const H=t.get(C);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,i.spotShadow[M]=H,i.spotShadowMap[M]=O,y++}M++}else if(C.isRectAreaLight){const k=e.get(C);k.color.copy(L).multiplyScalar(B),k.halfWidth.set(C.width*.5,0,0),k.halfHeight.set(0,C.height*.5,0),i.rectArea[p]=k,p++}else if(C.isPointLight){const k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),k.distance=C.distance,k.decay=C.decay,C.castShadow){const Y=C.shadow,H=t.get(C);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,H.shadowCameraNear=Y.camera.near,H.shadowCameraFar=Y.camera.far,i.pointShadow[v]=H,i.pointShadowMap[v]=O,i.pointShadowMatrix[v]=C.shadow.matrix,b++}i.point[v]=k,v++}else if(C.isHemisphereLight){const k=e.get(C);k.skyColor.copy(C.color).multiplyScalar(B),k.groundColor.copy(C.groundColor).multiplyScalar(B),i.hemi[u]=k,u++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;const T=i.hash;(T.directionalLength!==m||T.pointLength!==v||T.spotLength!==M||T.rectAreaLength!==p||T.hemiLength!==u||T.numDirectionalShadows!==A||T.numPointShadows!==b||T.numSpotShadows!==y||T.numSpotMaps!==P||T.numLightProbes!==_)&&(i.directional.length=m,i.spot.length=M,i.rectArea.length=p,i.point.length=v,i.hemi.length=u,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=y+P-R,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=_,T.directionalLength=m,T.pointLength=v,T.spotLength=M,T.rectAreaLength=p,T.hemiLength=u,T.numDirectionalShadows=A,T.numPointShadows=b,T.numSpotShadows=y,T.numSpotMaps=P,T.numLightProbes=_,i.version=tg++)}function l(c,h){let f=0,d=0,m=0,v=0,M=0;const p=h.matrixWorldInverse;for(let u=0,A=c.length;u<A;u++){const b=c[u];if(b.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),f++}else if(b.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),a.identity(),s.copy(b.matrixWorld),s.premultiply(p),a.extractRotation(s),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){const y=i.hemi[M];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(p),M++}}}return{setup:o,setupView:l,state:i}}function qc(n){const e=new ig(n),t=[],i=[];function r(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function rg(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new qc(n),e.set(r,[o])):s>=a.length?(o=new qc(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const sg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ag=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function og(n,e,t){let i=new Mo;const r=new Ve,s=new Ve,a=new lt,o=new Ch({depthPacking:Eu}),l=new Ph,c={},h=t.maxTextureSize,f={[Qn]:zt,[zt]:Qn,[sn]:sn},d=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:sg,fragmentShader:ag}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new bt;v.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Tt(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kc;let u=this.type;this.render=function(R,_,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const x=n.getRenderTarget(),g=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),L=n.state;L.setBlending(jn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const B=u!==Cn&&this.type===Cn,X=u===Cn&&this.type!==Cn;for(let O=0,k=R.length;O<k;O++){const Y=R[O],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const ie=H.getFrameExtents();if(r.multiply(ie),s.copy(H.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ie.x),r.x=s.x*ie.x,H.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ie.y),r.y=s.y*ie.y,H.mapSize.y=s.y)),H.map===null||B===!0||X===!0){const ge=this.type!==Cn?{minFilter:qt,magFilter:qt}:{};H.map!==null&&H.map.dispose(),H.map=new Ei(r.x,r.y,ge),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const se=H.getViewportCount();for(let ge=0;ge<se;ge++){const De=H.getViewport(ge);a.set(s.x*De.x,s.y*De.y,s.x*De.z,s.y*De.w),L.viewport(a),H.updateMatrices(Y,ge),i=H.getFrustum(),y(_,T,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===Cn&&A(H,T),H.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(x,g,C)};function A(R,_){const T=e.update(M);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ei(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(_,null,T,d,M,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(_,null,T,m,M,null)}function b(R,_,T,x){let g=null;const C=T.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)g=C;else if(g=T.isPointLight===!0?l:o,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const L=g.uuid,B=_.uuid;let X=c[L];X===void 0&&(X={},c[L]=X);let O=X[B];O===void 0&&(O=g.clone(),X[B]=O,_.addEventListener("dispose",P)),g=O}if(g.visible=_.visible,g.wireframe=_.wireframe,x===Cn?g.side=_.shadowSide!==null?_.shadowSide:_.side:g.side=_.shadowSide!==null?_.shadowSide:f[_.side],g.alphaMap=_.alphaMap,g.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,g.map=_.map,g.clipShadows=_.clipShadows,g.clippingPlanes=_.clippingPlanes,g.clipIntersection=_.clipIntersection,g.displacementMap=_.displacementMap,g.displacementScale=_.displacementScale,g.displacementBias=_.displacementBias,g.wireframeLinewidth=_.wireframeLinewidth,g.linewidth=_.linewidth,T.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const L=n.properties.get(g);L.light=T}return g}function y(R,_,T,x,g){if(R.visible===!1)return;if(R.layers.test(_.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&g===Cn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,R.matrixWorld);const B=e.update(R),X=R.material;if(Array.isArray(X)){const O=B.groups;for(let k=0,Y=O.length;k<Y;k++){const H=O[k],ie=X[H.materialIndex];if(ie&&ie.visible){const se=b(R,ie,x,g);R.onBeforeShadow(n,R,_,T,B,se,H),n.renderBufferDirect(T,null,B,se,R,H),R.onAfterShadow(n,R,_,T,B,se,H)}}}else if(X.visible){const O=b(R,X,x,g);R.onBeforeShadow(n,R,_,T,B,O,null),n.renderBufferDirect(T,null,B,O,R,null),R.onAfterShadow(n,R,_,T,B,O,null)}}const L=R.children;for(let B=0,X=L.length;B<X;B++)y(L[B],_,T,x,g)}function P(R){R.target.removeEventListener("dispose",P);for(const T in c){const x=c[T],g=R.target.uuid;g in x&&(x[g].dispose(),delete x[g])}}}const cg={[va]:Ma,[Sa]:Ta,[ya]:Aa,[Ji]:Ea,[Ma]:va,[Ta]:Sa,[Aa]:ya,[Ea]:Ji};function lg(n,e){function t(){let I=!1;const ne=new lt;let ae=null;const me=new lt(0,0,0,0);return{setMask:function(Q){ae!==Q&&!I&&(n.colorMask(Q,Q,Q,Q),ae=Q)},setLocked:function(Q){I=Q},setClear:function(Q,K,xe,Ne,st){st===!0&&(Q*=Ne,K*=Ne,xe*=Ne),ne.set(Q,K,xe,Ne),me.equals(ne)===!1&&(n.clearColor(Q,K,xe,Ne),me.copy(ne))},reset:function(){I=!1,ae=null,me.set(-1,0,0,0)}}}function i(){let I=!1,ne=!1,ae=null,me=null,Q=null;return{setReversed:function(K){if(ne!==K){const xe=e.get("EXT_clip_control");K?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),ne=K;const Ne=Q;Q=null,this.setClear(Ne)}},getReversed:function(){return ne},setTest:function(K){K?Z(n.DEPTH_TEST):ce(n.DEPTH_TEST)},setMask:function(K){ae!==K&&!I&&(n.depthMask(K),ae=K)},setFunc:function(K){if(ne&&(K=cg[K]),me!==K){switch(K){case va:n.depthFunc(n.NEVER);break;case Ma:n.depthFunc(n.ALWAYS);break;case Sa:n.depthFunc(n.LESS);break;case Ji:n.depthFunc(n.LEQUAL);break;case ya:n.depthFunc(n.EQUAL);break;case Ea:n.depthFunc(n.GEQUAL);break;case Ta:n.depthFunc(n.GREATER);break;case Aa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=K}},setLocked:function(K){I=K},setClear:function(K){Q!==K&&(ne&&(K=1-K),n.clearDepth(K),Q=K)},reset:function(){I=!1,ae=null,me=null,Q=null,ne=!1}}}function r(){let I=!1,ne=null,ae=null,me=null,Q=null,K=null,xe=null,Ne=null,st=null;return{setTest:function(je){I||(je?Z(n.STENCIL_TEST):ce(n.STENCIL_TEST))},setMask:function(je){ne!==je&&!I&&(n.stencilMask(je),ne=je)},setFunc:function(je,En,dn){(ae!==je||me!==En||Q!==dn)&&(n.stencilFunc(je,En,dn),ae=je,me=En,Q=dn)},setOp:function(je,En,dn){(K!==je||xe!==En||Ne!==dn)&&(n.stencilOp(je,En,dn),K=je,xe=En,Ne=dn)},setLocked:function(je){I=je},setClear:function(je){st!==je&&(n.clearStencil(je),st=je)},reset:function(){I=!1,ne=null,ae=null,me=null,Q=null,K=null,xe=null,Ne=null,st=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let h={},f={},d=new WeakMap,m=[],v=null,M=!1,p=null,u=null,A=null,b=null,y=null,P=null,R=null,_=new Xe(0,0,0),T=0,x=!1,g=null,C=null,L=null,B=null,X=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,Y=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),k=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),k=Y>=2);let ie=null,se={};const ge=n.getParameter(n.SCISSOR_BOX),De=n.getParameter(n.VIEWPORT),qe=new lt().fromArray(ge),et=new lt().fromArray(De);function Ye(I,ne,ae,me){const Q=new Uint8Array(4),K=n.createTexture();n.bindTexture(I,K),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let xe=0;xe<ae;xe++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ne,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,Q):n.texImage2D(ne+xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Q);return K}const W={};W[n.TEXTURE_2D]=Ye(n.TEXTURE_2D,n.TEXTURE_2D,1),W[n.TEXTURE_CUBE_MAP]=Ye(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[n.TEXTURE_2D_ARRAY]=Ye(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),W[n.TEXTURE_3D]=Ye(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(n.DEPTH_TEST),a.setFunc(Ji),Le(!1),ve(Ho),Z(n.CULL_FACE),tt(jn);function Z(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function ce(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function Se(I,ne){return f[I]!==ne?(n.bindFramebuffer(I,ne),f[I]=ne,I===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ne),I===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ne),!0):!1}function pe(I,ne){let ae=m,me=!1;if(I){ae=d.get(ne),ae===void 0&&(ae=[],d.set(ne,ae));const Q=I.textures;if(ae.length!==Q.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let K=0,xe=Q.length;K<xe;K++)ae[K]=n.COLOR_ATTACHMENT0+K;ae.length=Q.length,me=!0}}else ae[0]!==n.BACK&&(ae[0]=n.BACK,me=!0);me&&n.drawBuffers(ae)}function Fe(I){return v!==I?(n.useProgram(I),v=I,!0):!1}const pt={[di]:n.FUNC_ADD,[Zl]:n.FUNC_SUBTRACT,[jl]:n.FUNC_REVERSE_SUBTRACT};pt[Jl]=n.MIN,pt[Ql]=n.MAX;const D={[eu]:n.ZERO,[tu]:n.ONE,[nu]:n.SRC_COLOR,[_a]:n.SRC_ALPHA,[cu]:n.SRC_ALPHA_SATURATE,[au]:n.DST_COLOR,[ru]:n.DST_ALPHA,[iu]:n.ONE_MINUS_SRC_COLOR,[xa]:n.ONE_MINUS_SRC_ALPHA,[ou]:n.ONE_MINUS_DST_COLOR,[su]:n.ONE_MINUS_DST_ALPHA,[lu]:n.CONSTANT_COLOR,[uu]:n.ONE_MINUS_CONSTANT_COLOR,[hu]:n.CONSTANT_ALPHA,[du]:n.ONE_MINUS_CONSTANT_ALPHA};function tt(I,ne,ae,me,Q,K,xe,Ne,st,je){if(I===jn){M===!0&&(ce(n.BLEND),M=!1);return}if(M===!1&&(Z(n.BLEND),M=!0),I!==Kl){if(I!==p||je!==x){if((u!==di||y!==di)&&(n.blendEquation(n.FUNC_ADD),u=di,y=di),je)switch(I){case Zi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vo:n.blendFunc(n.ONE,n.ONE);break;case Go:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wo:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Zi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Go:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}A=null,b=null,P=null,R=null,_.set(0,0,0),T=0,p=I,x=je}return}Q=Q||ne,K=K||ae,xe=xe||me,(ne!==u||Q!==y)&&(n.blendEquationSeparate(pt[ne],pt[Q]),u=ne,y=Q),(ae!==A||me!==b||K!==P||xe!==R)&&(n.blendFuncSeparate(D[ae],D[me],D[K],D[xe]),A=ae,b=me,P=K,R=xe),(Ne.equals(_)===!1||st!==T)&&(n.blendColor(Ne.r,Ne.g,Ne.b,st),_.copy(Ne),T=st),p=I,x=!1}function Oe(I,ne){I.side===sn?ce(n.CULL_FACE):Z(n.CULL_FACE);let ae=I.side===zt;ne&&(ae=!ae),Le(ae),I.blending===Zi&&I.transparent===!1?tt(jn):tt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const me=I.stencilWrite;o.setTest(me),me&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Me(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function Le(I){g!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),g=I)}function ve(I){I!==Yl?(Z(n.CULL_FACE),I!==C&&(I===Ho?n.cullFace(n.BACK):I===$l?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ce(n.CULL_FACE),C=I}function ct(I){I!==L&&(k&&n.lineWidth(I),L=I)}function Me(I,ne,ae){I?(Z(n.POLYGON_OFFSET_FILL),(B!==ne||X!==ae)&&(n.polygonOffset(ne,ae),B=ne,X=ae)):ce(n.POLYGON_OFFSET_FILL)}function ke(I){I?Z(n.SCISSOR_TEST):ce(n.SCISSOR_TEST)}function Mt(I){I===void 0&&(I=n.TEXTURE0+O-1),ie!==I&&(n.activeTexture(I),ie=I)}function ft(I,ne,ae){ae===void 0&&(ie===null?ae=n.TEXTURE0+O-1:ae=ie);let me=se[ae];me===void 0&&(me={type:void 0,texture:void 0},se[ae]=me),(me.type!==I||me.texture!==ne)&&(ie!==ae&&(n.activeTexture(ae),ie=ae),n.bindTexture(I,ne||W[I]),me.type=I,me.texture=ne)}function w(){const I=se[ie];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function S(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(I){qe.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),qe.copy(I))}function Pe(I){et.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),et.copy(I))}function Te(I,ne){let ae=c.get(ne);ae===void 0&&(ae=new WeakMap,c.set(ne,ae));let me=ae.get(I);me===void 0&&(me=n.getUniformBlockIndex(ne,I.name),ae.set(I,me))}function le(I,ne){const me=c.get(ne).get(I);l.get(ne)!==me&&(n.uniformBlockBinding(ne,me,I.__bindingPointIndex),l.set(ne,me))}function Be(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ie=null,se={},f={},d=new WeakMap,m=[],v=null,M=!1,p=null,u=null,A=null,b=null,y=null,P=null,R=null,_=new Xe(0,0,0),T=0,x=!1,g=null,C=null,L=null,B=null,X=null,qe.set(0,0,n.canvas.width,n.canvas.height),et.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Z,disable:ce,bindFramebuffer:Se,drawBuffers:pe,useProgram:Fe,setBlending:tt,setMaterial:Oe,setFlipSided:Le,setCullFace:ve,setLineWidth:ct,setPolygonOffset:Me,setScissorTest:ke,activeTexture:Mt,bindTexture:ft,unbindTexture:w,compressedTexImage2D:S,compressedTexImage3D:z,texImage2D:Ee,texImage3D:te,updateUBOMapping:Te,uniformBlockBinding:le,texStorage2D:re,texStorage3D:ye,texSubImage2D:$,texSubImage3D:j,compressedTexSubImage2D:q,compressedTexSubImage3D:Ae,scissor:de,viewport:Pe,reset:Be}}function ug(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,h=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,S){return m?new OffscreenCanvas(w,S):Ts("canvas")}function M(w,S,z){let $=1;const j=ft(w);if((j.width>z||j.height>z)&&($=z/Math.max(j.width,j.height)),$<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const q=Math.floor($*j.width),Ae=Math.floor($*j.height);f===void 0&&(f=v(q,Ae));const re=S?v(q,Ae):f;return re.width=q,re.height=Ae,re.getContext("2d").drawImage(w,0,0,q,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+q+"x"+Ae+")."),re}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}function p(w){return w.generateMipmaps}function u(w){n.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(w,S,z,$,j=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let q=S;if(S===n.RED&&(z===n.FLOAT&&(q=n.R32F),z===n.HALF_FLOAT&&(q=n.R16F),z===n.UNSIGNED_BYTE&&(q=n.R8)),S===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(q=n.R8UI),z===n.UNSIGNED_SHORT&&(q=n.R16UI),z===n.UNSIGNED_INT&&(q=n.R32UI),z===n.BYTE&&(q=n.R8I),z===n.SHORT&&(q=n.R16I),z===n.INT&&(q=n.R32I)),S===n.RG&&(z===n.FLOAT&&(q=n.RG32F),z===n.HALF_FLOAT&&(q=n.RG16F),z===n.UNSIGNED_BYTE&&(q=n.RG8)),S===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(q=n.RG8UI),z===n.UNSIGNED_SHORT&&(q=n.RG16UI),z===n.UNSIGNED_INT&&(q=n.RG32UI),z===n.BYTE&&(q=n.RG8I),z===n.SHORT&&(q=n.RG16I),z===n.INT&&(q=n.RG32I)),S===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(q=n.RGB8UI),z===n.UNSIGNED_SHORT&&(q=n.RGB16UI),z===n.UNSIGNED_INT&&(q=n.RGB32UI),z===n.BYTE&&(q=n.RGB8I),z===n.SHORT&&(q=n.RGB16I),z===n.INT&&(q=n.RGB32I)),S===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),z===n.UNSIGNED_INT&&(q=n.RGBA32UI),z===n.BYTE&&(q=n.RGBA8I),z===n.SHORT&&(q=n.RGBA16I),z===n.INT&&(q=n.RGBA32I)),S===n.RGB&&(z===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),S===n.RGBA){const Ae=j?ys:Ke.getTransfer($);z===n.FLOAT&&(q=n.RGBA32F),z===n.HALF_FLOAT&&(q=n.RGBA16F),z===n.UNSIGNED_BYTE&&(q=Ae===Qe?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function y(w,S){let z;return w?S===null||S===yi||S===Cr?z=n.DEPTH24_STENCIL8:S===_n?z=n.DEPTH32F_STENCIL8:S===Rr&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===yi||S===Cr?z=n.DEPTH_COMPONENT24:S===_n?z=n.DEPTH_COMPONENT32F:S===Rr&&(z=n.DEPTH_COMPONENT16),z}function P(w,S){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==qt&&w.minFilter!==gn?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function R(w){const S=w.target;S.removeEventListener("dispose",R),T(S),S.isVideoTexture&&h.delete(S)}function _(w){const S=w.target;S.removeEventListener("dispose",_),g(S)}function T(w){const S=i.get(w);if(S.__webglInit===void 0)return;const z=w.source,$=d.get(z);if($){const j=$[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&x(w),Object.keys($).length===0&&d.delete(z)}i.remove(w)}function x(w){const S=i.get(w);n.deleteTexture(S.__webglTexture);const z=w.source,$=d.get(z);delete $[S.__cacheKey],a.memory.textures--}function g(w){const S=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let j=0;j<S.__webglFramebuffer[$].length;j++)n.deleteFramebuffer(S.__webglFramebuffer[$][j]);else n.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)n.deleteFramebuffer(S.__webglFramebuffer[$]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=w.textures;for(let $=0,j=z.length;$<j;$++){const q=i.get(z[$]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(z[$])}i.remove(w)}let C=0;function L(){C=0}function B(){const w=C;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),C+=1,w}function X(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function O(w,S){const z=i.get(w);if(w.isVideoTexture&&ke(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&z.__version!==w.version){const $=w.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(z,w,S);return}}else w.isExternalTexture&&(z.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+S)}function k(w,S){const z=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){W(z,w,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+S)}function Y(w,S){const z=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){W(z,w,S);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+S)}function H(w,S){const z=i.get(w);if(w.version>0&&z.__version!==w.version){Z(z,w,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+S)}const ie={[Ss]:n.REPEAT,[xi]:n.CLAMP_TO_EDGE,[Ra]:n.MIRRORED_REPEAT},se={[qt]:n.NEAREST,[Su]:n.NEAREST_MIPMAP_NEAREST,[Gr]:n.NEAREST_MIPMAP_LINEAR,[gn]:n.LINEAR,[Bs]:n.LINEAR_MIPMAP_NEAREST,[vi]:n.LINEAR_MIPMAP_LINEAR},ge={[Au]:n.NEVER,[Du]:n.ALWAYS,[bu]:n.LESS,[cl]:n.LEQUAL,[wu]:n.EQUAL,[Pu]:n.GEQUAL,[Ru]:n.GREATER,[Cu]:n.NOTEQUAL};function De(w,S){if(S.type===_n&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===gn||S.magFilter===Bs||S.magFilter===Gr||S.magFilter===vi||S.minFilter===gn||S.minFilter===Bs||S.minFilter===Gr||S.minFilter===vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,ie[S.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,ie[S.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,ie[S.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,se[S.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,se[S.minFilter]),S.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,ge[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===qt||S.minFilter!==Gr&&S.minFilter!==vi||S.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function qe(w,S){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",R));const $=S.source;let j=d.get($);j===void 0&&(j={},d.set($,j));const q=X(S);if(q!==w.__cacheKey){j[q]===void 0&&(j[q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),j[q].usedTimes++;const Ae=j[w.__cacheKey];Ae!==void 0&&(j[w.__cacheKey].usedTimes--,Ae.usedTimes===0&&x(S)),w.__cacheKey=q,w.__webglTexture=j[q].texture}return z}function et(w,S,z){return Math.floor(Math.floor(w/z)/S)}function Ye(w,S,z,$){const q=w.updateRanges;if(q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,z,$,S.data);else{q.sort((te,de)=>te.start-de.start);let Ae=0;for(let te=1;te<q.length;te++){const de=q[Ae],Pe=q[te],Te=de.start+de.count,le=et(Pe.start,S.width,4),Be=et(de.start,S.width,4);Pe.start<=Te+1&&le===Be&&et(Pe.start+Pe.count-1,S.width,4)===le?de.count=Math.max(de.count,Pe.start+Pe.count-de.start):(++Ae,q[Ae]=Pe)}q.length=Ae+1;const re=n.getParameter(n.UNPACK_ROW_LENGTH),ye=n.getParameter(n.UNPACK_SKIP_PIXELS),Ee=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let te=0,de=q.length;te<de;te++){const Pe=q[te],Te=Math.floor(Pe.start/4),le=Math.ceil(Pe.count/4),Be=Te%S.width,I=Math.floor(Te/S.width),ne=le,ae=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Be),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,Be,I,ne,ae,z,$,S.data)}w.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,re),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ye),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ee)}}function W(w,S,z){let $=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=n.TEXTURE_3D);const j=qe(w,S),q=S.source;t.bindTexture($,w.__webglTexture,n.TEXTURE0+z);const Ae=i.get(q);if(q.version!==Ae.__version||j===!0){t.activeTexture(n.TEXTURE0+z);const re=Ke.getPrimaries(Ke.workingColorSpace),ye=S.colorSpace===Yn?null:Ke.getPrimaries(S.colorSpace),Ee=S.colorSpace===Yn||re===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let te=M(S.image,!1,r.maxTextureSize);te=Mt(S,te);const de=s.convert(S.format,S.colorSpace),Pe=s.convert(S.type);let Te=b(S.internalFormat,de,Pe,S.colorSpace,S.isVideoTexture);De($,S);let le;const Be=S.mipmaps,I=S.isVideoTexture!==!0,ne=Ae.__version===void 0||j===!0,ae=q.dataReady,me=P(S,te);if(S.isDepthTexture)Te=y(S.format===Dr,S.type),ne&&(I?t.texStorage2D(n.TEXTURE_2D,1,Te,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,Te,te.width,te.height,0,de,Pe,null));else if(S.isDataTexture)if(Be.length>0){I&&ne&&t.texStorage2D(n.TEXTURE_2D,me,Te,Be[0].width,Be[0].height);for(let Q=0,K=Be.length;Q<K;Q++)le=Be[Q],I?ae&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,le.width,le.height,de,Pe,le.data):t.texImage2D(n.TEXTURE_2D,Q,Te,le.width,le.height,0,de,Pe,le.data);S.generateMipmaps=!1}else I?(ne&&t.texStorage2D(n.TEXTURE_2D,me,Te,te.width,te.height),ae&&Ye(S,te,de,Pe)):t.texImage2D(n.TEXTURE_2D,0,Te,te.width,te.height,0,de,Pe,te.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){I&&ne&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Te,Be[0].width,Be[0].height,te.depth);for(let Q=0,K=Be.length;Q<K;Q++)if(le=Be[Q],S.format!==cn)if(de!==null)if(I){if(ae)if(S.layerUpdates.size>0){const xe=yc(le.width,le.height,S.format,S.type);for(const Ne of S.layerUpdates){const st=le.data.subarray(Ne*xe/le.data.BYTES_PER_ELEMENT,(Ne+1)*xe/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Ne,le.width,le.height,1,de,st)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,le.width,le.height,te.depth,de,le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Te,le.width,le.height,te.depth,0,le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ae&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,le.width,le.height,te.depth,de,Pe,le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,Te,le.width,le.height,te.depth,0,de,Pe,le.data)}else{I&&ne&&t.texStorage2D(n.TEXTURE_2D,me,Te,Be[0].width,Be[0].height);for(let Q=0,K=Be.length;Q<K;Q++)le=Be[Q],S.format!==cn?de!==null?I?ae&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,le.width,le.height,de,le.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,Te,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ae&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,le.width,le.height,de,Pe,le.data):t.texImage2D(n.TEXTURE_2D,Q,Te,le.width,le.height,0,de,Pe,le.data)}else if(S.isDataArrayTexture)if(I){if(ne&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Te,te.width,te.height,te.depth),ae)if(S.layerUpdates.size>0){const Q=yc(te.width,te.height,S.format,S.type);for(const K of S.layerUpdates){const xe=te.data.subarray(K*Q/te.data.BYTES_PER_ELEMENT,(K+1)*Q/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,te.width,te.height,1,de,Pe,xe)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,de,Pe,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,te.width,te.height,te.depth,0,de,Pe,te.data);else if(S.isData3DTexture)I?(ne&&t.texStorage3D(n.TEXTURE_3D,me,Te,te.width,te.height,te.depth),ae&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,de,Pe,te.data)):t.texImage3D(n.TEXTURE_3D,0,Te,te.width,te.height,te.depth,0,de,Pe,te.data);else if(S.isFramebufferTexture){if(ne)if(I)t.texStorage2D(n.TEXTURE_2D,me,Te,te.width,te.height);else{let Q=te.width,K=te.height;for(let xe=0;xe<me;xe++)t.texImage2D(n.TEXTURE_2D,xe,Te,Q,K,0,de,Pe,null),Q>>=1,K>>=1}}else if(Be.length>0){if(I&&ne){const Q=ft(Be[0]);t.texStorage2D(n.TEXTURE_2D,me,Te,Q.width,Q.height)}for(let Q=0,K=Be.length;Q<K;Q++)le=Be[Q],I?ae&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,de,Pe,le):t.texImage2D(n.TEXTURE_2D,Q,Te,de,Pe,le);S.generateMipmaps=!1}else if(I){if(ne){const Q=ft(te);t.texStorage2D(n.TEXTURE_2D,me,Te,Q.width,Q.height)}ae&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,Pe,te)}else t.texImage2D(n.TEXTURE_2D,0,Te,de,Pe,te);p(S)&&u($),Ae.__version=q.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Z(w,S,z){if(S.image.length!==6)return;const $=qe(w,S),j=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+z);const q=i.get(j);if(j.version!==q.__version||$===!0){t.activeTexture(n.TEXTURE0+z);const Ae=Ke.getPrimaries(Ke.workingColorSpace),re=S.colorSpace===Yn?null:Ke.getPrimaries(S.colorSpace),ye=S.colorSpace===Yn||Ae===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Ee=S.isCompressedTexture||S.image[0].isCompressedTexture,te=S.image[0]&&S.image[0].isDataTexture,de=[];for(let K=0;K<6;K++)!Ee&&!te?de[K]=M(S.image[K],!0,r.maxCubemapSize):de[K]=te?S.image[K].image:S.image[K],de[K]=Mt(S,de[K]);const Pe=de[0],Te=s.convert(S.format,S.colorSpace),le=s.convert(S.type),Be=b(S.internalFormat,Te,le,S.colorSpace),I=S.isVideoTexture!==!0,ne=q.__version===void 0||$===!0,ae=j.dataReady;let me=P(S,Pe);De(n.TEXTURE_CUBE_MAP,S);let Q;if(Ee){I&&ne&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Be,Pe.width,Pe.height);for(let K=0;K<6;K++){Q=de[K].mipmaps;for(let xe=0;xe<Q.length;xe++){const Ne=Q[xe];S.format!==cn?Te!==null?I?ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe,0,0,Ne.width,Ne.height,Te,Ne.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe,Be,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe,0,0,Ne.width,Ne.height,Te,le,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe,Be,Ne.width,Ne.height,0,Te,le,Ne.data)}}}else{if(Q=S.mipmaps,I&&ne){Q.length>0&&me++;const K=ft(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Be,K.width,K.height)}for(let K=0;K<6;K++)if(te){I?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,de[K].width,de[K].height,Te,le,de[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Be,de[K].width,de[K].height,0,Te,le,de[K].data);for(let xe=0;xe<Q.length;xe++){const st=Q[xe].image[K].image;I?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe+1,0,0,st.width,st.height,Te,le,st.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe+1,Be,st.width,st.height,0,Te,le,st.data)}}else{I?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Te,le,de[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Be,Te,le,de[K]);for(let xe=0;xe<Q.length;xe++){const Ne=Q[xe];I?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe+1,0,0,Te,le,Ne.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe+1,Be,Te,le,Ne.image[K])}}}p(S)&&u(n.TEXTURE_CUBE_MAP),q.__version=j.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function ce(w,S,z,$,j,q){const Ae=s.convert(z.format,z.colorSpace),re=s.convert(z.type),ye=b(z.internalFormat,Ae,re,z.colorSpace),Ee=i.get(S),te=i.get(z);if(te.__renderTarget=S,!Ee.__hasExternalTextures){const de=Math.max(1,S.width>>q),Pe=Math.max(1,S.height>>q);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,q,ye,de,Pe,S.depth,0,Ae,re,null):t.texImage2D(j,q,ye,de,Pe,0,Ae,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),Me(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,j,te.__webglTexture,0,ct(S)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,j,te.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Se(w,S,z){if(n.bindRenderbuffer(n.RENDERBUFFER,w),S.depthBuffer){const $=S.depthTexture,j=$&&$.isDepthTexture?$.type:null,q=y(S.stencilBuffer,j),Ae=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=ct(S);Me(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,q,S.width,S.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,q,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,q,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ae,n.RENDERBUFFER,w)}else{const $=S.textures;for(let j=0;j<$.length;j++){const q=$[j],Ae=s.convert(q.format,q.colorSpace),re=s.convert(q.type),ye=b(q.internalFormat,Ae,re,q.colorSpace),Ee=ct(S);z&&Me(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,ye,S.width,S.height):Me(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,ye,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ye,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function pe(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(S.depthTexture);$.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),O(S.depthTexture,0);const j=$.__webglTexture,q=ct(S);if(S.depthTexture.format===Pr)Me(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(S.depthTexture.format===Dr)Me(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Fe(w){const S=i.get(w),z=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const $=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",j)};$.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=$}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const $=w.texture.mipmaps;$&&$.length>0?pe(S.__webglFramebuffer[0],w):pe(S.__webglFramebuffer,w)}else if(z){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=n.createRenderbuffer(),Se(S.__webglDepthbuffer[$],w,!1);else{const j=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,q)}}else{const $=w.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),Se(S.__webglDepthbuffer,w,!1);else{const j=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function pt(w,S,z){const $=i.get(w);S!==void 0&&ce($.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Fe(w)}function D(w){const S=w.texture,z=i.get(w),$=i.get(S);w.addEventListener("dispose",_);const j=w.textures,q=w.isWebGLCubeRenderTarget===!0,Ae=j.length>1;if(Ae||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=S.version,a.memory.textures++),q){z.__webglFramebuffer=[];for(let re=0;re<6;re++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[re]=[];for(let ye=0;ye<S.mipmaps.length;ye++)z.__webglFramebuffer[re][ye]=n.createFramebuffer()}else z.__webglFramebuffer[re]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let re=0;re<S.mipmaps.length;re++)z.__webglFramebuffer[re]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Ae)for(let re=0,ye=j.length;re<ye;re++){const Ee=i.get(j[re]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&Me(w)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let re=0;re<j.length;re++){const ye=j[re];z.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[re]);const Ee=s.convert(ye.format,ye.colorSpace),te=s.convert(ye.type),de=b(ye.internalFormat,Ee,te,ye.colorSpace,w.isXRRenderTarget===!0),Pe=ct(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,de,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,z.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Se(z.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),De(n.TEXTURE_CUBE_MAP,S);for(let re=0;re<6;re++)if(S.mipmaps&&S.mipmaps.length>0)for(let ye=0;ye<S.mipmaps.length;ye++)ce(z.__webglFramebuffer[re][ye],w,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,ye);else ce(z.__webglFramebuffer[re],w,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);p(S)&&u(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let re=0,ye=j.length;re<ye;re++){const Ee=j[re],te=i.get(Ee);let de=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(de=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,te.__webglTexture),De(de,Ee),ce(z.__webglFramebuffer,w,Ee,n.COLOR_ATTACHMENT0+re,de,0),p(Ee)&&u(de)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(re=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,$.__webglTexture),De(re,S),S.mipmaps&&S.mipmaps.length>0)for(let ye=0;ye<S.mipmaps.length;ye++)ce(z.__webglFramebuffer[ye],w,S,n.COLOR_ATTACHMENT0,re,ye);else ce(z.__webglFramebuffer,w,S,n.COLOR_ATTACHMENT0,re,0);p(S)&&u(re),t.unbindTexture()}w.depthBuffer&&Fe(w)}function tt(w){const S=w.textures;for(let z=0,$=S.length;z<$;z++){const j=S[z];if(p(j)){const q=A(w),Ae=i.get(j).__webglTexture;t.bindTexture(q,Ae),u(q),t.unbindTexture()}}}const Oe=[],Le=[];function ve(w){if(w.samples>0){if(Me(w)===!1){const S=w.textures,z=w.width,$=w.height;let j=n.COLOR_BUFFER_BIT;const q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=i.get(w),re=S.length>1;if(re)for(let Ee=0;Ee<S.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const ye=w.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Ee=0;Ee<S.length;Ee++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ee]);const te=i.get(S[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,te,0)}n.blitFramebuffer(0,0,z,$,0,0,z,$,j,n.NEAREST),l===!0&&(Oe.length=0,Le.length=0,Oe.push(n.COLOR_ATTACHMENT0+Ee),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Oe.push(q),Le.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Le)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Oe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let Ee=0;Ee<S.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ee]);const te=i.get(S[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const S=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function ct(w){return Math.min(r.maxSamples,w.samples)}function Me(w){const S=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ke(w){const S=a.render.frame;h.get(w)!==S&&(h.set(w,S),w.update())}function Mt(w,S){const z=w.colorSpace,$=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==tr&&z!==Yn&&(Ke.getTransfer(z)===Qe?($!==cn||j!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function ft(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=L,this.setTexture2D=O,this.setTexture2DArray=k,this.setTexture3D=Y,this.setTextureCube=H,this.rebindTextures=pt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Me}function hg(n,e){function t(i,r=Yn){let s;const a=Ke.getTransfer(r);if(i===Mn)return n.UNSIGNED_BYTE;if(i===uo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ho)return n.UNSIGNED_SHORT_5_5_5_1;if(i===nl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===il)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===el)return n.BYTE;if(i===tl)return n.SHORT;if(i===Rr)return n.UNSIGNED_SHORT;if(i===lo)return n.INT;if(i===yi)return n.UNSIGNED_INT;if(i===_n)return n.FLOAT;if(i===Br)return n.HALF_FLOAT;if(i===rl)return n.ALPHA;if(i===sl)return n.RGB;if(i===cn)return n.RGBA;if(i===Pr)return n.DEPTH_COMPONENT;if(i===Dr)return n.DEPTH_STENCIL;if(i===fo)return n.RED;if(i===po)return n.RED_INTEGER;if(i===al)return n.RG;if(i===mo)return n.RG_INTEGER;if(i===go)return n.RGBA_INTEGER;if(i===ps||i===ms||i===gs||i===_s)if(a===Qe)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ps)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ms)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ps)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ms)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_s)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ca||i===Pa||i===Da||i===La)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ca)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Da)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===La)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ia||i===Ua||i===Na)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ia||i===Ua)return a===Qe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Na)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Fa||i===Oa||i===Ba||i===za||i===ka||i===Ha||i===Va||i===Ga||i===Wa||i===Xa||i===qa||i===Ya||i===$a||i===Ka)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Fa)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Oa)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ba)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===za)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ka)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ha)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Va)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ga)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wa)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xa)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qa)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ya)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$a)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ka)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Za||i===ja||i===Ja)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Za)return a===Qe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ja)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ja)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Qa||i===eo||i===to||i===no)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Qa)return s.COMPRESSED_RED_RGTC1_EXT;if(i===eo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===to)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===no)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Cr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const dg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class pg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new yl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ei({vertexShader:dg,fragmentShader:fg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new Ti(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mg extends ar{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,m=null,v=null;const M=typeof XRWebGLBinding<"u",p=new pg,u={},A=t.getContextAttributes();let b=null,y=null;const P=[],R=[],_=new Ve;let T=null;const x=new jt;x.viewport=new lt;const g=new jt;g.viewport=new lt;const C=[x,g],L=new Nh;let B=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Z=P[W];return Z===void 0&&(Z=new sa,P[W]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(W){let Z=P[W];return Z===void 0&&(Z=new sa,P[W]=Z),Z.getGripSpace()},this.getHand=function(W){let Z=P[W];return Z===void 0&&(Z=new sa,P[W]=Z),Z.getHandSpace()};function O(W){const Z=R.indexOf(W.inputSource);if(Z===-1)return;const ce=P[Z];ce!==void 0&&(ce.update(W.inputSource,W.frame,c||a),ce.dispatchEvent({type:W.type,data:W.inputSource}))}function k(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",Y);for(let W=0;W<P.length;W++){const Z=R[W];Z!==null&&(R[W]=null,P[W].disconnect(Z))}B=null,X=null,p.reset();for(const W in u)delete u[W];e.setRenderTarget(b),m=null,d=null,f=null,r=null,y=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(_.width,_.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",k),r.addEventListener("inputsourceschange",Y),A.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(_),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,Se=null,pe=null;A.depth&&(pe=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=A.stencil?Dr:Pr,Se=A.stencil?Cr:yi);const Fe={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Fe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Ei(d.textureWidth,d.textureHeight,{format:cn,type:Mn,depthTexture:new Sl(d.textureWidth,d.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ce={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ce),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new Ei(m.framebufferWidth,m.framebufferHeight,{format:cn,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ye.setContext(r),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Y(W){for(let Z=0;Z<W.removed.length;Z++){const ce=W.removed[Z],Se=R.indexOf(ce);Se>=0&&(R[Se]=null,P[Se].disconnect(ce))}for(let Z=0;Z<W.added.length;Z++){const ce=W.added[Z];let Se=R.indexOf(ce);if(Se===-1){for(let Fe=0;Fe<P.length;Fe++)if(Fe>=R.length){R.push(ce),Se=Fe;break}else if(R[Fe]===null){R[Fe]=ce,Se=Fe;break}if(Se===-1)break}const pe=P[Se];pe&&pe.connect(ce)}}const H=new N,ie=new N;function se(W,Z,ce){H.setFromMatrixPosition(Z.matrixWorld),ie.setFromMatrixPosition(ce.matrixWorld);const Se=H.distanceTo(ie),pe=Z.projectionMatrix.elements,Fe=ce.projectionMatrix.elements,pt=pe[14]/(pe[10]-1),D=pe[14]/(pe[10]+1),tt=(pe[9]+1)/pe[5],Oe=(pe[9]-1)/pe[5],Le=(pe[8]-1)/pe[0],ve=(Fe[8]+1)/Fe[0],ct=pt*Le,Me=pt*ve,ke=Se/(-Le+ve),Mt=ke*-Le;if(Z.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Mt),W.translateZ(ke),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),pe[10]===-1)W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const ft=pt+ke,w=D+ke,S=ct-Mt,z=Me+(Se-Mt),$=tt*D/w*ft,j=Oe*D/w*ft;W.projectionMatrix.makePerspective(S,z,$,j,ft,w),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function ge(W,Z){Z===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Z.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let Z=W.near,ce=W.far;p.texture!==null&&(p.depthNear>0&&(Z=p.depthNear),p.depthFar>0&&(ce=p.depthFar)),L.near=g.near=x.near=Z,L.far=g.far=x.far=ce,(B!==L.near||X!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),B=L.near,X=L.far),L.layers.mask=W.layers.mask|6,x.layers.mask=L.layers.mask&3,g.layers.mask=L.layers.mask&5;const Se=W.parent,pe=L.cameras;ge(L,Se);for(let Fe=0;Fe<pe.length;Fe++)ge(pe[Fe],Se);pe.length===2?se(L,x,g):L.projectionMatrix.copy(x.projectionMatrix),De(W,L,Se)};function De(W,Z,ce){ce===null?W.matrix.copy(Z.matrixWorld):(W.matrix.copy(ce.matrixWorld),W.matrix.invert(),W.matrix.multiply(Z.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Lr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(L)},this.getCameraTexture=function(W){return u[W]};let qe=null;function et(W,Z){if(h=Z.getViewerPose(c||a),v=Z,h!==null){const ce=h.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let Se=!1;ce.length!==L.cameras.length&&(L.cameras.length=0,Se=!0);for(let D=0;D<ce.length;D++){const tt=ce[D];let Oe=null;if(m!==null)Oe=m.getViewport(tt);else{const ve=f.getViewSubImage(d,tt);Oe=ve.viewport,D===0&&(e.setRenderTargetTextures(y,ve.colorTexture,ve.depthStencilTexture),e.setRenderTarget(y))}let Le=C[D];Le===void 0&&(Le=new jt,Le.layers.enable(D),Le.viewport=new lt,C[D]=Le),Le.matrix.fromArray(tt.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(tt.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),D===0&&(L.matrix.copy(Le.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Se===!0&&L.cameras.push(Le)}const pe=r.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){f=i.getBinding();const D=f.getDepthInformation(ce[0]);D&&D.isValid&&D.texture&&p.init(D,r.renderState)}if(pe&&pe.includes("camera-access")&&M){e.state.unbindTexture(),f=i.getBinding();for(let D=0;D<ce.length;D++){const tt=ce[D].camera;if(tt){let Oe=u[tt];Oe||(Oe=new yl,u[tt]=Oe);const Le=f.getCameraImage(tt);Oe.sourceTexture=Le}}}}for(let ce=0;ce<P.length;ce++){const Se=R[ce],pe=P[ce];Se!==null&&pe!==void 0&&pe.update(Se,Z,c||a)}qe&&qe(W,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),v=null}const Ye=new Al;Ye.setAnimationLoop(et),this.setAnimationLoop=function(W){qe=W},this.dispose=function(){}}}const ci=new Sn,gg=new ot;function _g(n,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,_l(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,A,b,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),f(p,u)):u.isMeshPhongMaterial?(s(p,u),h(p,u)):u.isMeshStandardMaterial?(s(p,u),d(p,u),u.isMeshPhysicalMaterial&&m(p,u,y)):u.isMeshMatcapMaterial?(s(p,u),v(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),M(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,A,b):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===zt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===zt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const A=e.get(u),b=A.envMap,y=A.envMapRotation;b&&(p.envMap.value=b,ci.copy(y),ci.x*=-1,ci.y*=-1,ci.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),p.envMapRotation.value.setFromMatrix4(gg.makeRotationFromEuler(ci)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,A,b){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*A,p.scale.value=b*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,A){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===zt&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,u){u.matcap&&(p.matcap.value=u.matcap)}function M(p,u){const A=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function xg(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,b){const y=b.program;i.uniformBlockBinding(A,y)}function c(A,b){let y=r[A.id];y===void 0&&(v(A),y=h(A),r[A.id]=y,A.addEventListener("dispose",p));const P=b.program;i.updateUBOMapping(A,P);const R=e.render.frame;s[A.id]!==R&&(d(A),s[A.id]=R)}function h(A){const b=f();A.__bindingPointIndex=b;const y=n.createBuffer(),P=A.__size,R=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,P,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,y),y}function f(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const b=r[A.id],y=A.uniforms,P=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let R=0,_=y.length;R<_;R++){const T=Array.isArray(y[R])?y[R]:[y[R]];for(let x=0,g=T.length;x<g;x++){const C=T[x];if(m(C,R,x,P)===!0){const L=C.__offset,B=Array.isArray(C.value)?C.value:[C.value];let X=0;for(let O=0;O<B.length;O++){const k=B[O],Y=M(k);typeof k=="number"||typeof k=="boolean"?(C.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,L+X,C.__data)):k.isMatrix3?(C.__data[0]=k.elements[0],C.__data[1]=k.elements[1],C.__data[2]=k.elements[2],C.__data[3]=0,C.__data[4]=k.elements[3],C.__data[5]=k.elements[4],C.__data[6]=k.elements[5],C.__data[7]=0,C.__data[8]=k.elements[6],C.__data[9]=k.elements[7],C.__data[10]=k.elements[8],C.__data[11]=0):(k.toArray(C.__data,X),X+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(A,b,y,P){const R=A.value,_=b+"_"+y;if(P[_]===void 0)return typeof R=="number"||typeof R=="boolean"?P[_]=R:P[_]=R.clone(),!0;{const T=P[_];if(typeof R=="number"||typeof R=="boolean"){if(T!==R)return P[_]=R,!0}else if(T.equals(R)===!1)return T.copy(R),!0}return!1}function v(A){const b=A.uniforms;let y=0;const P=16;for(let _=0,T=b.length;_<T;_++){const x=Array.isArray(b[_])?b[_]:[b[_]];for(let g=0,C=x.length;g<C;g++){const L=x[g],B=Array.isArray(L.value)?L.value:[L.value];for(let X=0,O=B.length;X<O;X++){const k=B[X],Y=M(k),H=y%P,ie=H%Y.boundary,se=H+ie;y+=ie,se!==0&&P-se<Y.storage&&(y+=P-se),L.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=Y.storage}}}const R=y%P;return R>0&&(y+=P-R),A.__size=y,A.__cache={},this}function M(A){const b={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(b.boundary=4,b.storage=4):A.isVector2?(b.boundary=8,b.storage=8):A.isVector3||A.isColor?(b.boundary=16,b.storage=12):A.isVector4?(b.boundary=16,b.storage=16):A.isMatrix3?(b.boundary=48,b.storage=48):A.isMatrix4?(b.boundary=64,b.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),b}function p(A){const b=A.target;b.removeEventListener("dispose",p);const y=a.indexOf(b.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function u(){for(const A in r)n.deleteBuffer(r[A]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class vg{constructor(e={}){const{canvas:t=$u(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const v=new Uint32Array(4),M=new Int32Array(4);let p=null,u=null;const A=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let P=!1;this._outputColorSpace=Xt;let R=0,_=0,T=null,x=-1,g=null;const C=new lt,L=new lt;let B=null;const X=new Xe(0);let O=0,k=t.width,Y=t.height,H=1,ie=null,se=null;const ge=new lt(0,0,k,Y),De=new lt(0,0,k,Y);let qe=!1;const et=new Mo;let Ye=!1,W=!1;const Z=new ot,ce=new N,Se=new lt,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function pt(){return T===null?H:1}let D=i;function tt(E,U){return t.getContext(E,U)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${co}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",Q,!1),D===null){const U="webgl2";if(D=tt(U,E),D===null)throw tt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Oe,Le,ve,ct,Me,ke,Mt,ft,w,S,z,$,j,q,Ae,re,ye,Ee,te,de,Pe,Te,le,Be;function I(){Oe=new Cp(D),Oe.init(),Te=new hg(D,Oe),Le=new yp(D,Oe,e,Te),ve=new lg(D,Oe),Le.reversedDepthBuffer&&d&&ve.buffers.depth.setReversed(!0),ct=new Lp(D),Me=new Zm,ke=new ug(D,Oe,ve,Me,Le,Te,ct),Mt=new Tp(y),ft=new Rp(y),w=new Oh(D),le=new Mp(D,w),S=new Pp(D,w,ct,le),z=new Up(D,S,w,ct),te=new Ip(D,Le,ke),re=new Ep(Me),$=new Km(y,Mt,ft,Oe,Le,le,re),j=new _g(y,Me),q=new Jm,Ae=new rg(Oe),Ee=new vp(y,Mt,ft,ve,z,m,l),ye=new og(y,z,Le),Be=new xg(D,ct,Le,ve),de=new Sp(D,Oe,ct),Pe=new Dp(D,Oe,ct),ct.programs=$.programs,y.capabilities=Le,y.extensions=Oe,y.properties=Me,y.renderLists=q,y.shadowMap=ye,y.state=ve,y.info=ct}I();const ne=new mg(y,D);this.xr=ne,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Oe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Oe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(k,Y,!1))},this.getSize=function(E){return E.set(k,Y)},this.setSize=function(E,U,V=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=E,Y=U,t.width=Math.floor(E*H),t.height=Math.floor(U*H),V===!0&&(t.style.width=E+"px",t.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(k*H,Y*H).floor()},this.setDrawingBufferSize=function(E,U,V){k=E,Y=U,H=V,t.width=Math.floor(E*V),t.height=Math.floor(U*V),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(ge)},this.setViewport=function(E,U,V,G){E.isVector4?ge.set(E.x,E.y,E.z,E.w):ge.set(E,U,V,G),ve.viewport(C.copy(ge).multiplyScalar(H).round())},this.getScissor=function(E){return E.copy(De)},this.setScissor=function(E,U,V,G){E.isVector4?De.set(E.x,E.y,E.z,E.w):De.set(E,U,V,G),ve.scissor(L.copy(De).multiplyScalar(H).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(E){ve.setScissorTest(qe=E)},this.setOpaqueSort=function(E){ie=E},this.setTransparentSort=function(E){se=E},this.getClearColor=function(E){return E.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,V=!0){let G=0;if(E){let F=!1;if(T!==null){const ee=T.texture.format;F=ee===go||ee===mo||ee===po}if(F){const ee=T.texture.type,he=ee===Mn||ee===yi||ee===Rr||ee===Cr||ee===uo||ee===ho,_e=Ee.getClearColor(),fe=Ee.getClearAlpha(),Ce=_e.r,Ie=_e.g,be=_e.b;he?(v[0]=Ce,v[1]=Ie,v[2]=be,v[3]=fe,D.clearBufferuiv(D.COLOR,0,v)):(M[0]=Ce,M[1]=Ie,M[2]=be,M[3]=fe,D.clearBufferiv(D.COLOR,0,M))}else G|=D.COLOR_BUFFER_BIT}U&&(G|=D.DEPTH_BUFFER_BIT),V&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),Ee.dispose(),q.dispose(),Ae.dispose(),Me.dispose(),Mt.dispose(),ft.dispose(),z.dispose(),le.dispose(),Be.dispose(),$.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",dn),ne.removeEventListener("sessionend",No),ti.stop()};function ae(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const E=ct.autoReset,U=ye.enabled,V=ye.autoUpdate,G=ye.needsUpdate,F=ye.type;I(),ct.autoReset=E,ye.enabled=U,ye.autoUpdate=V,ye.needsUpdate=G,ye.type=F}function Q(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function K(E){const U=E.target;U.removeEventListener("dispose",K),xe(U)}function xe(E){Ne(E),Me.remove(E)}function Ne(E){const U=Me.get(E).programs;U!==void 0&&(U.forEach(function(V){$.releaseProgram(V)}),E.isShaderMaterial&&$.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,V,G,F,ee){U===null&&(U=pe);const he=F.isMesh&&F.matrixWorld.determinant()<0,_e=Hl(E,U,V,G,F);ve.setMaterial(G,he);let fe=V.index,Ce=1;if(G.wireframe===!0){if(fe=S.getWireframeAttribute(V),fe===void 0)return;Ce=2}const Ie=V.drawRange,be=V.attributes.position;let Ge=Ie.start*Ce,Je=(Ie.start+Ie.count)*Ce;ee!==null&&(Ge=Math.max(Ge,ee.start*Ce),Je=Math.min(Je,(ee.start+ee.count)*Ce)),fe!==null?(Ge=Math.max(Ge,0),Je=Math.min(Je,fe.count)):be!=null&&(Ge=Math.max(Ge,0),Je=Math.min(Je,be.count));const dt=Je-Ge;if(dt<0||dt===1/0)return;le.setup(F,G,_e,V,fe);let at,nt=de;if(fe!==null&&(at=w.get(fe),nt=Pe,nt.setIndex(at)),F.isMesh)G.wireframe===!0?(ve.setLineWidth(G.wireframeLinewidth*pt()),nt.setMode(D.LINES)):nt.setMode(D.TRIANGLES);else if(F.isLine){let we=G.linewidth;we===void 0&&(we=1),ve.setLineWidth(we*pt()),F.isLineSegments?nt.setMode(D.LINES):F.isLineLoop?nt.setMode(D.LINE_LOOP):nt.setMode(D.LINE_STRIP)}else F.isPoints?nt.setMode(D.POINTS):F.isSprite&&nt.setMode(D.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Ir("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),nt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))nt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const we=F._multiDrawStarts,ut=F._multiDrawCounts,$e=F._multiDrawCount,Ht=fe?w.get(fe).bytesPerElement:1,Ri=Me.get(G).currentProgram.getUniforms();for(let Vt=0;Vt<$e;Vt++)Ri.setValue(D,"_gl_DrawID",Vt),nt.render(we[Vt]/Ht,ut[Vt])}else if(F.isInstancedMesh)nt.renderInstances(Ge,dt,F.count);else if(V.isInstancedBufferGeometry){const we=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ut=Math.min(V.instanceCount,we);nt.renderInstances(Ge,dt,ut)}else nt.render(Ge,dt)};function st(E,U,V){E.transparent===!0&&E.side===sn&&E.forceSinglePass===!1?(E.side=zt,E.needsUpdate=!0,Vr(E,U,V),E.side=Qn,E.needsUpdate=!0,Vr(E,U,V),E.side=sn):Vr(E,U,V)}this.compile=function(E,U,V=null){V===null&&(V=E),u=Ae.get(V),u.init(U),b.push(u),V.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),E!==V&&E.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),u.setupLights();const G=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ee=F.material;if(ee)if(Array.isArray(ee))for(let he=0;he<ee.length;he++){const _e=ee[he];st(_e,V,F),G.add(_e)}else st(ee,V,F),G.add(ee)}),u=b.pop(),G},this.compileAsync=function(E,U,V=null){const G=this.compile(E,U,V);return new Promise(F=>{function ee(){if(G.forEach(function(he){Me.get(he).currentProgram.isReady()&&G.delete(he)}),G.size===0){F(E);return}setTimeout(ee,10)}Oe.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let je=null;function En(E){je&&je(E)}function dn(){ti.stop()}function No(){ti.start()}const ti=new Al;ti.setAnimationLoop(En),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(E){je=E,ne.setAnimationLoop(E),E===null?ti.stop():ti.start()},ne.addEventListener("sessionstart",dn),ne.addEventListener("sessionend",No),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(U),U=ne.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,U,T),u=Ae.get(E,b.length),u.init(U),b.push(u),Z.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),et.setFromProjectionMatrix(Z,xn,U.reversedDepth),W=this.localClippingEnabled,Ye=re.init(this.clippingPlanes,W),p=q.get(E,A.length),p.init(),A.push(p),ne.enabled===!0&&ne.isPresenting===!0){const ee=y.xr.getDepthSensingMesh();ee!==null&&Fs(ee,U,-1/0,y.sortObjects)}Fs(E,U,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(ie,se),Fe=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Fe&&Ee.addToRenderList(p,E),this.info.render.frame++,Ye===!0&&re.beginShadows();const V=u.state.shadowsArray;ye.render(V,E,U),Ye===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=p.opaque,F=p.transmissive;if(u.setupLights(),U.isArrayCamera){const ee=U.cameras;if(F.length>0)for(let he=0,_e=ee.length;he<_e;he++){const fe=ee[he];Oo(G,F,E,fe)}Fe&&Ee.render(E);for(let he=0,_e=ee.length;he<_e;he++){const fe=ee[he];Fo(p,E,fe,fe.viewport)}}else F.length>0&&Oo(G,F,E,U),Fe&&Ee.render(E),Fo(p,E,U);T!==null&&_===0&&(ke.updateMultisampleRenderTarget(T),ke.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(y,E,U),le.resetDefaultState(),x=-1,g=null,b.pop(),b.length>0?(u=b[b.length-1],Ye===!0&&re.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,A.pop(),A.length>0?p=A[A.length-1]:p=null};function Fs(E,U,V,G){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)u.pushLight(E),E.castShadow&&u.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||et.intersectsSprite(E)){G&&Se.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Z);const he=z.update(E),_e=E.material;_e.visible&&p.push(E,he,_e,V,Se.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||et.intersectsObject(E))){const he=z.update(E),_e=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Se.copy(E.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Se.copy(he.boundingSphere.center)),Se.applyMatrix4(E.matrixWorld).applyMatrix4(Z)),Array.isArray(_e)){const fe=he.groups;for(let Ce=0,Ie=fe.length;Ce<Ie;Ce++){const be=fe[Ce],Ge=_e[be.materialIndex];Ge&&Ge.visible&&p.push(E,he,Ge,V,Se.z,be)}}else _e.visible&&p.push(E,he,_e,V,Se.z,null)}}const ee=E.children;for(let he=0,_e=ee.length;he<_e;he++)Fs(ee[he],U,V,G)}function Fo(E,U,V,G){const F=E.opaque,ee=E.transmissive,he=E.transparent;u.setupLightsView(V),Ye===!0&&re.setGlobalState(y.clippingPlanes,V),G&&ve.viewport(C.copy(G)),F.length>0&&Hr(F,U,V),ee.length>0&&Hr(ee,U,V),he.length>0&&Hr(he,U,V),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Oo(E,U,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[G.id]===void 0&&(u.state.transmissionRenderTarget[G.id]=new Ei(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?Br:Mn,minFilter:vi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const ee=u.state.transmissionRenderTarget[G.id],he=G.viewport||C;ee.setSize(he.z*y.transmissionResolutionScale,he.w*y.transmissionResolutionScale);const _e=y.getRenderTarget(),fe=y.getActiveCubeFace(),Ce=y.getActiveMipmapLevel();y.setRenderTarget(ee),y.getClearColor(X),O=y.getClearAlpha(),O<1&&y.setClearColor(16777215,.5),y.clear(),Fe&&Ee.render(V);const Ie=y.toneMapping;y.toneMapping=Jn;const be=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),u.setupLightsView(G),Ye===!0&&re.setGlobalState(y.clippingPlanes,G),Hr(E,V,G),ke.updateMultisampleRenderTarget(ee),ke.updateRenderTargetMipmap(ee),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Je=0,dt=U.length;Je<dt;Je++){const at=U[Je],nt=at.object,we=at.geometry,ut=at.material,$e=at.group;if(ut.side===sn&&nt.layers.test(G.layers)){const Ht=ut.side;ut.side=zt,ut.needsUpdate=!0,Bo(nt,V,G,we,ut,$e),ut.side=Ht,ut.needsUpdate=!0,Ge=!0}}Ge===!0&&(ke.updateMultisampleRenderTarget(ee),ke.updateRenderTargetMipmap(ee))}y.setRenderTarget(_e,fe,Ce),y.setClearColor(X,O),be!==void 0&&(G.viewport=be),y.toneMapping=Ie}function Hr(E,U,V){const G=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ee=E.length;F<ee;F++){const he=E[F],_e=he.object,fe=he.geometry,Ce=he.group;let Ie=he.material;Ie.allowOverride===!0&&G!==null&&(Ie=G),_e.layers.test(V.layers)&&Bo(_e,U,V,fe,Ie,Ce)}}function Bo(E,U,V,G,F,ee){E.onBeforeRender(y,U,V,G,F,ee),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(y,U,V,G,E,ee),F.transparent===!0&&F.side===sn&&F.forceSinglePass===!1?(F.side=zt,F.needsUpdate=!0,y.renderBufferDirect(V,U,G,F,E,ee),F.side=Qn,F.needsUpdate=!0,y.renderBufferDirect(V,U,G,F,E,ee),F.side=sn):y.renderBufferDirect(V,U,G,F,E,ee),E.onAfterRender(y,U,V,G,F,ee)}function Vr(E,U,V){U.isScene!==!0&&(U=pe);const G=Me.get(E),F=u.state.lights,ee=u.state.shadowsArray,he=F.state.version,_e=$.getParameters(E,F.state,ee,U,V),fe=$.getProgramCacheKey(_e);let Ce=G.programs;G.environment=E.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(E.isMeshStandardMaterial?ft:Mt).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Ce===void 0&&(E.addEventListener("dispose",K),Ce=new Map,G.programs=Ce);let Ie=Ce.get(fe);if(Ie!==void 0){if(G.currentProgram===Ie&&G.lightsStateVersion===he)return ko(E,_e),Ie}else _e.uniforms=$.getUniforms(E),E.onBeforeCompile(_e,y),Ie=$.acquireProgram(_e,fe),Ce.set(fe,Ie),G.uniforms=_e.uniforms;const be=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(be.clippingPlanes=re.uniform),ko(E,_e),G.needsLights=Gl(E),G.lightsStateVersion=he,G.needsLights&&(be.ambientLightColor.value=F.state.ambient,be.lightProbe.value=F.state.probe,be.directionalLights.value=F.state.directional,be.directionalLightShadows.value=F.state.directionalShadow,be.spotLights.value=F.state.spot,be.spotLightShadows.value=F.state.spotShadow,be.rectAreaLights.value=F.state.rectArea,be.ltc_1.value=F.state.rectAreaLTC1,be.ltc_2.value=F.state.rectAreaLTC2,be.pointLights.value=F.state.point,be.pointLightShadows.value=F.state.pointShadow,be.hemisphereLights.value=F.state.hemi,be.directionalShadowMap.value=F.state.directionalShadowMap,be.directionalShadowMatrix.value=F.state.directionalShadowMatrix,be.spotShadowMap.value=F.state.spotShadowMap,be.spotLightMatrix.value=F.state.spotLightMatrix,be.spotLightMap.value=F.state.spotLightMap,be.pointShadowMap.value=F.state.pointShadowMap,be.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Ie,G.uniformsList=null,Ie}function zo(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=xs.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function ko(E,U){const V=Me.get(E);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function Hl(E,U,V,G,F){U.isScene!==!0&&(U=pe),ke.resetTextureUnits();const ee=U.fog,he=G.isMeshStandardMaterial?U.environment:null,_e=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:tr,fe=(G.isMeshStandardMaterial?ft:Mt).get(G.envMap||he),Ce=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ie=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),be=!!V.morphAttributes.position,Ge=!!V.morphAttributes.normal,Je=!!V.morphAttributes.color;let dt=Jn;G.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(dt=y.toneMapping);const at=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,nt=at!==void 0?at.length:0,we=Me.get(G),ut=u.state.lights;if(Ye===!0&&(W===!0||E!==g)){const wt=E===g&&G.id===x;re.setState(G,E,wt)}let $e=!1;G.version===we.__version?(we.needsLights&&we.lightsStateVersion!==ut.state.version||we.outputColorSpace!==_e||F.isBatchedMesh&&we.batching===!1||!F.isBatchedMesh&&we.batching===!0||F.isBatchedMesh&&we.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&we.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&we.instancing===!1||!F.isInstancedMesh&&we.instancing===!0||F.isSkinnedMesh&&we.skinning===!1||!F.isSkinnedMesh&&we.skinning===!0||F.isInstancedMesh&&we.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&we.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&we.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&we.instancingMorph===!1&&F.morphTexture!==null||we.envMap!==fe||G.fog===!0&&we.fog!==ee||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==re.numPlanes||we.numIntersection!==re.numIntersection)||we.vertexAlphas!==Ce||we.vertexTangents!==Ie||we.morphTargets!==be||we.morphNormals!==Ge||we.morphColors!==Je||we.toneMapping!==dt||we.morphTargetsCount!==nt)&&($e=!0):($e=!0,we.__version=G.version);let Ht=we.currentProgram;$e===!0&&(Ht=Vr(G,U,F));let Ri=!1,Vt=!1,fr=!1;const ht=Ht.getUniforms(),$t=we.uniforms;if(ve.useProgram(Ht.program)&&(Ri=!0,Vt=!0,fr=!0),G.id!==x&&(x=G.id,Vt=!0),Ri||g!==E){ve.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ht.setValue(D,"projectionMatrix",E.projectionMatrix),ht.setValue(D,"viewMatrix",E.matrixWorldInverse);const Nt=ht.map.cameraPosition;Nt!==void 0&&Nt.setValue(D,ce.setFromMatrixPosition(E.matrixWorld)),Le.logarithmicDepthBuffer&&ht.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ht.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),g!==E&&(g=E,Vt=!0,fr=!0)}if(F.isSkinnedMesh){ht.setOptional(D,F,"bindMatrix"),ht.setOptional(D,F,"bindMatrixInverse");const wt=F.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),ht.setValue(D,"boneTexture",wt.boneTexture,ke))}F.isBatchedMesh&&(ht.setOptional(D,F,"batchingTexture"),ht.setValue(D,"batchingTexture",F._matricesTexture,ke),ht.setOptional(D,F,"batchingIdTexture"),ht.setValue(D,"batchingIdTexture",F._indirectTexture,ke),ht.setOptional(D,F,"batchingColorTexture"),F._colorsTexture!==null&&ht.setValue(D,"batchingColorTexture",F._colorsTexture,ke));const Kt=V.morphAttributes;if((Kt.position!==void 0||Kt.normal!==void 0||Kt.color!==void 0)&&te.update(F,V,Ht),(Vt||we.receiveShadow!==F.receiveShadow)&&(we.receiveShadow=F.receiveShadow,ht.setValue(D,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&($t.envMap.value=fe,$t.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&($t.envMapIntensity.value=U.environmentIntensity),Vt&&(ht.setValue(D,"toneMappingExposure",y.toneMappingExposure),we.needsLights&&Vl($t,fr),ee&&G.fog===!0&&j.refreshFogUniforms($t,ee),j.refreshMaterialUniforms($t,G,H,Y,u.state.transmissionRenderTarget[E.id]),xs.upload(D,zo(we),$t,ke)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(xs.upload(D,zo(we),$t,ke),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ht.setValue(D,"center",F.center),ht.setValue(D,"modelViewMatrix",F.modelViewMatrix),ht.setValue(D,"normalMatrix",F.normalMatrix),ht.setValue(D,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const wt=G.uniformsGroups;for(let Nt=0,Os=wt.length;Nt<Os;Nt++){const ni=wt[Nt];Be.update(ni,Ht),Be.bind(ni,Ht)}}return Ht}function Vl(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Gl(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,U,V){const G=Me.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Me.get(E.texture).__webglTexture=U,Me.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:V,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){const V=Me.get(E);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0};const Wl=D.createFramebuffer();this.setRenderTarget=function(E,U=0,V=0){T=E,R=U,_=V;let G=!0,F=null,ee=!1,he=!1;if(E){const fe=Me.get(E);if(fe.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(D.FRAMEBUFFER,null),G=!1;else if(fe.__webglFramebuffer===void 0)ke.setupRenderTarget(E);else if(fe.__hasExternalTextures)ke.rebindTextures(E,Me.get(E.texture).__webglTexture,Me.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const be=E.depthTexture;if(fe.__boundDepthTexture!==be){if(be!==null&&Me.has(be)&&(E.width!==be.image.width||E.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(E)}}const Ce=E.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(he=!0);const Ie=Me.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ie[U])?F=Ie[U][V]:F=Ie[U],ee=!0):E.samples>0&&ke.useMultisampledRTT(E)===!1?F=Me.get(E).__webglMultisampledFramebuffer:Array.isArray(Ie)?F=Ie[V]:F=Ie,C.copy(E.viewport),L.copy(E.scissor),B=E.scissorTest}else C.copy(ge).multiplyScalar(H).floor(),L.copy(De).multiplyScalar(H).floor(),B=qe;if(V!==0&&(F=Wl),ve.bindFramebuffer(D.FRAMEBUFFER,F)&&G&&ve.drawBuffers(E,F),ve.viewport(C),ve.scissor(L),ve.setScissorTest(B),ee){const fe=Me.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,fe.__webglTexture,V)}else if(he){const fe=U;for(let Ce=0;Ce<E.textures.length;Ce++){const Ie=Me.get(E.textures[Ce]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ce,Ie.__webglTexture,V,fe)}}else if(E!==null&&V!==0){const fe=Me.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,fe.__webglTexture,V)}x=-1},this.readRenderTargetPixels=function(E,U,V,G,F,ee,he,_e=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=Me.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&he!==void 0&&(fe=fe[he]),fe){ve.bindFramebuffer(D.FRAMEBUFFER,fe);try{const Ce=E.textures[_e],Ie=Ce.format,be=Ce.type;if(!Le.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-G&&V>=0&&V<=E.height-F&&(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+_e),D.readPixels(U,V,G,F,Te.convert(Ie),Te.convert(be),ee))}finally{const Ce=T!==null?Me.get(T).__webglFramebuffer:null;ve.bindFramebuffer(D.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(E,U,V,G,F,ee,he,_e=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=Me.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&he!==void 0&&(fe=fe[he]),fe)if(U>=0&&U<=E.width-G&&V>=0&&V<=E.height-F){ve.bindFramebuffer(D.FRAMEBUFFER,fe);const Ce=E.textures[_e],Ie=Ce.format,be=Ce.type;if(!Le.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ge),D.bufferData(D.PIXEL_PACK_BUFFER,ee.byteLength,D.STREAM_READ),E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+_e),D.readPixels(U,V,G,F,Te.convert(Ie),Te.convert(be),0);const Je=T!==null?Me.get(T).__webglFramebuffer:null;ve.bindFramebuffer(D.FRAMEBUFFER,Je);const dt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Ku(D,dt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ge),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ee),D.deleteBuffer(Ge),D.deleteSync(dt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,V=0){const G=Math.pow(2,-V),F=Math.floor(E.image.width*G),ee=Math.floor(E.image.height*G),he=U!==null?U.x:0,_e=U!==null?U.y:0;ke.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,he,_e,F,ee),ve.unbindTexture()};const Xl=D.createFramebuffer(),ql=D.createFramebuffer();this.copyTextureToTexture=function(E,U,V=null,G=null,F=0,ee=null){ee===null&&(F!==0?(Ir("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=F,F=0):ee=0);let he,_e,fe,Ce,Ie,be,Ge,Je,dt;const at=E.isCompressedTexture?E.mipmaps[ee]:E.image;if(V!==null)he=V.max.x-V.min.x,_e=V.max.y-V.min.y,fe=V.isBox3?V.max.z-V.min.z:1,Ce=V.min.x,Ie=V.min.y,be=V.isBox3?V.min.z:0;else{const Kt=Math.pow(2,-F);he=Math.floor(at.width*Kt),_e=Math.floor(at.height*Kt),E.isDataArrayTexture?fe=at.depth:E.isData3DTexture?fe=Math.floor(at.depth*Kt):fe=1,Ce=0,Ie=0,be=0}G!==null?(Ge=G.x,Je=G.y,dt=G.z):(Ge=0,Je=0,dt=0);const nt=Te.convert(U.format),we=Te.convert(U.type);let ut;U.isData3DTexture?(ke.setTexture3D(U,0),ut=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(ke.setTexture2DArray(U,0),ut=D.TEXTURE_2D_ARRAY):(ke.setTexture2D(U,0),ut=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const $e=D.getParameter(D.UNPACK_ROW_LENGTH),Ht=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ri=D.getParameter(D.UNPACK_SKIP_PIXELS),Vt=D.getParameter(D.UNPACK_SKIP_ROWS),fr=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,at.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,at.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ce),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ie),D.pixelStorei(D.UNPACK_SKIP_IMAGES,be);const ht=E.isDataArrayTexture||E.isData3DTexture,$t=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const Kt=Me.get(E),wt=Me.get(U),Nt=Me.get(Kt.__renderTarget),Os=Me.get(wt.__renderTarget);ve.bindFramebuffer(D.READ_FRAMEBUFFER,Nt.__webglFramebuffer),ve.bindFramebuffer(D.DRAW_FRAMEBUFFER,Os.__webglFramebuffer);for(let ni=0;ni<fe;ni++)ht&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Me.get(E).__webglTexture,F,be+ni),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Me.get(U).__webglTexture,ee,dt+ni)),D.blitFramebuffer(Ce,Ie,he,_e,Ge,Je,he,_e,D.DEPTH_BUFFER_BIT,D.NEAREST);ve.bindFramebuffer(D.READ_FRAMEBUFFER,null),ve.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(F!==0||E.isRenderTargetTexture||Me.has(E)){const Kt=Me.get(E),wt=Me.get(U);ve.bindFramebuffer(D.READ_FRAMEBUFFER,Xl),ve.bindFramebuffer(D.DRAW_FRAMEBUFFER,ql);for(let Nt=0;Nt<fe;Nt++)ht?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Kt.__webglTexture,F,be+Nt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Kt.__webglTexture,F),$t?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,wt.__webglTexture,ee,dt+Nt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,wt.__webglTexture,ee),F!==0?D.blitFramebuffer(Ce,Ie,he,_e,Ge,Je,he,_e,D.COLOR_BUFFER_BIT,D.NEAREST):$t?D.copyTexSubImage3D(ut,ee,Ge,Je,dt+Nt,Ce,Ie,he,_e):D.copyTexSubImage2D(ut,ee,Ge,Je,Ce,Ie,he,_e);ve.bindFramebuffer(D.READ_FRAMEBUFFER,null),ve.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else $t?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(ut,ee,Ge,Je,dt,he,_e,fe,nt,we,at.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(ut,ee,Ge,Je,dt,he,_e,fe,nt,at.data):D.texSubImage3D(ut,ee,Ge,Je,dt,he,_e,fe,nt,we,at):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ee,Ge,Je,he,_e,nt,we,at.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ee,Ge,Je,at.width,at.height,nt,at.data):D.texSubImage2D(D.TEXTURE_2D,ee,Ge,Je,he,_e,nt,we,at);D.pixelStorei(D.UNPACK_ROW_LENGTH,$e),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ht),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ri),D.pixelStorei(D.UNPACK_SKIP_ROWS,Vt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,fr),ee===0&&U.generateMipmaps&&D.generateMipmap(ut),ve.unbindTexture()},this.initRenderTarget=function(E){Me.get(E).__webglFramebuffer===void 0&&ke.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ke.setTextureCube(E,0):E.isData3DTexture?ke.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ke.setTexture2DArray(E,0):ke.setTexture2D(E,0),ve.unbindTexture()},this.resetState=function(){R=0,_=0,T=null,ve.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}function Mg(n,e,t=!1,i=!1){const r=t?30:i?8:10,s=t?20:i?3.7:5,a=t?28:i?8:24,o=Math.sin(e),l=Math.cos(e);return{position:[n.x-o*r,n.y+s,n.z-l*r],target:[n.x+o*a,n.y+1.1,n.z+l*a]}}function Sg(n,e,t=!1){return n-e*(t?65e-5:.0022)}const vs=1.06,ro=.74,Pt=(n,e,t)=>new N(n,e,t),yg=Pt(0,1,0),Eg=Pt(.84,.56,0).normalize(),Wi=n=>n*n*(3-2*n),ma=(n,e,t)=>n+(e-n)*t;function Tg(){const n=new ln,e=new on({color:"#9e413c",roughness:.85}),t=new on({color:"#dfb38b",roughness:.85}),i=new on({color:"#e4b957",metalness:.45,roughness:.4}),r=new on({color:"#3e3930",roughness:.85}),s=new on({color:"#b9c7c5",metalness:.7,roughness:.3});function a(O,k,Y=n){const H=new Tt(O,k);return H.castShadow=!0,H.receiveShadow=!0,Y.add(H),H}function o(O,k,Y){return a(new vn(O,12,10),k,Y)}function l(O,k){return a(new Fn(O,O,1,10),k)}function c(O,k,Y){O.position.copy(k).add(Y).multiplyScalar(.5),O.scale.y=k.distanceTo(Y),O.quaternion.setFromUnitVectors(yg,Y.clone().sub(k).normalize())}const h=new ln;n.add(h);const f=a(new Fn(.39,.48,.95,10),e,h);f.position.y=.2;const d=a(new Fn(.46,.46,.1,10),r,h);d.position.y=-.18,a(new Jt(.08,.14,.2),i,h).position.set(.46,-.18,0);const v=a(new Jt(.08,.92,.78),e,h);v.position.set(-.4,.15,0),v.rotation.z=-.13;const M=new ln;n.add(M),o(.31,t,M),o(.09,t,M).position.set(.3,-.02,0);for(const O of[-.14,.14])o(.025,r,M).position.set(.277,.08,O);const u=new ln;M.add(u);const A=a(new Fn(.32,.32,.12,10),i,u);A.position.y=.28;for(let O=0;O<6;O++){const k=O*Math.PI/3;a(new $n(.07,.24,4),i,u).position.set(Math.cos(k)*.27,.44,Math.sin(k)*.27)}const b=a(new vn(.34,12,8),s,M);b.visible=!1;const y=a(new Jt(.08,.07,.42),r,M);y.position.set(.33,.06,0),y.visible=!1;const P=a(new vn(.34,10,6,0,Math.PI*2,0,Math.PI/2),e,M);P.position.y=.13,P.visible=!1;const R=[-1,1].map(O=>({side:O,thigh:l(.15,r),shin:l(.12,r),boot:a(new Jt(.52,.22,.28),r)})),_=[-1,1].map(O=>({side:O,upper:l(.12,e),lower:l(.095,e),hand:o(.105,t)})),T=l(.027,s),x=l(.045,r),g=a(new Jt(.3,.18,.19),s),C=new N;function L(O=-1,k=!1,Y=1){let H=0,ie=0,se=0,ge=0,De=Pt(.67,1.35,-.08);if(O>=0)if(k)O<.5?H=.28*Wi(O/.5):O<ro?H=.28*(1-Wi((O-.5)/.24)):H=-.36*Wi(Math.min(1,(O-ro)/.42));else{const W=.65+.35*Y,Z=[{t:0,a:0,r:0,s:0,h:[.67,1.35,-.08]},{t:.82,a:2.05*W,r:.85*W,s:-.1,h:[.36,1.95,-.58]},{t:vs,a:0,r:-.18,s:.09,h:[.67,1.35,-.08]},{t:1.72,a:-2.45*W,r:-1.25,s:.2,h:[.2,2.05,.43]}],ce=O<.82?0:O<vs?1:2,Se=Z[ce],pe=Z[ce+1],Fe=Wi(Ko.clamp((O-Se.t)/(pe.t-Se.t),0,1));H=ma(Se.a,pe.a,Fe),ie=ma(Se.r,pe.r,Fe),se=ma(Se.s,pe.s,Fe),De=Pt(...Se.h).lerp(Pt(...pe.h),Fe),ge=.22*Wi(Ko.clamp((O-vs)/.55,0,1))}h.position.set(.07,1.48,se),h.rotation.set(0,ie,-.16),M.position.set(.23,2.25,se*.25),M.rotation.y=O>1.3?ie*.65:0,v.rotation.z=-.13+Math.sin(H)*.18;const qe=Pt(.83,-1.13,-.22).applyAxisAngle(Eg,H),et=De.clone().add(qe);c(T,De,et);const Ye=De.clone().addScaledVector(qe,.18);c(x,De,Ye),g.position.copy(et),g.quaternion.copy(T.quaternion),g.scale.set(k?1.3:1,k?.6:1,k?.65:1),h.updateMatrixWorld(!0);for(const W of _){C.set(0,.52,W.side*.38).applyMatrix4(h.matrix);const Z=De.clone().addScaledVector(qe,W.side===1?.07:0),ce=Z.clone().sub(C),Se=ce.length(),pe=.59,Fe=ce.clone().normalize(),pt=Pt(-.15,-.1,W.side*.8);pt.addScaledVector(Fe,-pt.dot(Fe)).normalize();const D=Math.sqrt(Math.max(.005,pe*pe-Se*Se/4)),tt=C.clone().addScaledVector(ce,.5).addScaledVector(pt,D);c(W.upper,C,tt),c(W.lower,tt,Z),W.hand.position.copy(Z)}for(const W of R){const Z=Pt(0,1.15,W.side*.28+se),ce=Pt(.02,.2,W.side*.48);W.side<0&&(ce.y+=ge,ce.z+=ge*.25);const Se=Pt(.14,.68,W.side*.4+se*.45);c(W.thigh,Z,Se),c(W.shin,Se,ce),W.boot.position.copy(ce).add(Pt(.12,-.1,0)),W.boot.rotation.z=W.side<0?-ge*1.5:0}}function B(O){L();const k=Wi(Math.min(1,O/.5)),Y=Math.max(0,Math.sin((O-.35)*7))*Math.max(0,1-O/2.8)*.18;h.position.y+=Y,M.position.y+=Y,h.rotation.y=-.25*Math.sin(O*3),M.rotation.y=-.45;for(const se of _){const ge=Pt(.05,2+Y,se.side*.38),De=Pt(.1,2.1+k*.45+Y,se.side*.62),qe=Pt(.1,2+k*1.05+Y,se.side*.46);c(se.upper,ge,De),c(se.lower,De,qe),se.hand.position.copy(qe)}const H=_[1].hand.position,ie=H.clone().add(Pt(.15,1.35,.15));c(T,H,ie),c(x,H,H.clone().lerp(ie,.18)),g.position.copy(ie),g.quaternion.copy(T.quaternion),v.rotation.z=-.15-Math.sin(O*7)*.07}function X(O){const k=O==="THE KNIGHT",Y=O==="THE SERVANT";e.color.set(k?"#8d9c9e":Y?"#897247":"#9e413c"),u.visible=!k&&!Y,v.visible=!Y,b.visible=y.visible=k,P.visible=Y}return L(),{root:n,pose:L,celebrate:B,setCharacter:X}}const Xi=(n,e,t)=>{const i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)},en=[{name:"The King's Balcony",par:4,distance:340,difficulty:2,kind:"balcony",greenRadius:17,wind:{x:2,z:1.3},hint:"Saída a 35 m de altura. Controle a força antes do fosso.",bunkers:[{x:25,z:310,rx:12,rz:15}],waters:[{x:0,z:287,w:80,d:14,y:-.8}]},{name:"The Cursed Lake",par:3,distance:155,difficulty:4,kind:"lake",greenRadius:18,wind:{x:1.8,z:-1},hint:"Sem fairway intermediário: atravesse o lago até a ilha.",bunkers:[],waters:[{x:0,z:115,w:360,d:190,y:1}]},{name:"Dragon's Abyss",par:4,distance:365,difficulty:6,kind:"abyss",greenRadius:17,wind:{x:7.5,z:-1},hint:"180 m de precipício e vento lateral. Alcance o segundo penhasco.",bunkers:[{x:-23,z:333,rx:10,rz:17}],waters:[]},{name:"The Enchanted Forest",par:5,distance:475,difficulty:5,kind:"forest",greenRadius:18,wind:{x:1,z:1},hint:"Siga o dogleg ou arrisque uma tacada por cima das copas.",bunkers:[{x:23,z:445,rx:11,rz:16}],waters:[]},{name:"The Old Bridge",par:4,distance:310,difficulty:5,kind:"bridge",greenRadius:17,wind:{x:-2,z:1},hint:"Prepare a travessia ou tente vencer o rio de uma só vez.",bunkers:[{x:-23,z:285,rx:11,rz:16}],waters:[{x:0,z:158,w:360,d:56,y:-.7}]},{name:"The Knight's Gate",par:3,distance:90,difficulty:7,kind:"gate",greenRadius:15,wind:{x:.7,z:0},hint:"Passe pelo arco ou use uma trajetória alta sobre a muralha.",bunkers:[{x:-21,z:82,rx:8,rz:14},{x:20,z:85,rx:8,rz:14}],waters:[]},{name:"The Giant's Stairway",par:5,distance:430,difficulty:8,kind:"stairs",greenRadius:17,wind:{x:3,z:-1},hint:"Três subidas. Cada terraço é uma oportunidade de preparar a próxima tacada.",bunkers:[{x:23,z:409,rx:10,rz:14}],waters:[]},{name:"The Royal Gardens",par:3,distance:115,difficulty:7,kind:"garden",greenRadius:14,wind:{x:1.3,z:.7},hint:"Areia antes do green, água depois. A precisão decide.",bunkers:[{x:0,z:87,rx:19,rz:9},{x:-22,z:115,rx:7,rz:12}],waters:[{x:0,z:144,w:100,d:14,y:.1},{x:39,z:72,w:18,d:35,y:.1}]},{name:"The King's Challenge",par:5,distance:520,difficulty:10,kind:"finale",greenRadius:21,wind:{x:-3.5,z:1.5},hint:"Desça a colina, atravesse o rio e vença o fosso diante do castelo.",bunkers:[{x:-24,z:310,rx:14,rz:22},{x:24,z:423,rx:12,rz:18},{x:-27,z:501,rx:8,rz:15}],waters:[{x:0,z:255,w:360,d:30,y:-1},{x:0,z:468,w:160,d:20,y:-1}]}].map((n,e)=>({...n,id:e,tee:{x:0,z:0},cup:{x:0,z:n.distance},obstacles:[]}));let Ue=en[0];const it={...Ue.cup};function Ag(n){if(!en[n])throw new Error("Unknown course");return Ue=en[n],Object.assign(it,Ue.cup),Ue}function ws(n,e=Ue){return e.kind==="forest"?64*Math.sin(Math.PI*Math.max(0,Math.min(1,n/e.distance)))**2:e.kind==="finale"?20*Math.sin(n/80)*Math.sin(Math.PI*n/e.distance):10*Math.sin(n/85)*Math.sin(Math.PI*n/e.distance)}function ir(n,e,t=Ue){if(Math.abs(n)>160||e<-25||e>t.distance+85)return"Fora do campo";if(t.kind==="abyss"&&e>25&&e<205||t.kind==="stairs"&&Math.abs(n)>72)return"Precipício";if(t.kind==="lake"&&e>20&&e<210&&Math.hypot(n,e-t.distance)>27)return"Água";for(const i of t.waters)if(t.kind!=="lake"&&Math.abs(n-i.x)<i.w/2&&Math.abs(e-i.z)<i.d/2){if(t.kind==="bridge"&&n>29&&n<41)continue;return"Água"}return null}function Dt(n,e,t=Ue){if(t.kind==="balcony"&&e<7&&e>-16&&Math.abs(n)<15)return 35;if(t.kind==="abyss")return e>25&&e<205?-65:e<=25?20:8+5*Xi(280,335,e)+.4*Math.sin(n/35);if(t.kind==="stairs")return Math.abs(n)>72?-35:12*Xi(125,150,e)+14*Xi(265,292,e)+12*Xi(380,404,e)+.25*Math.sin(n/22);if(t.kind==="lake"){if(e>20&&e<210){let i=Math.hypot(n,e-t.distance);return 3.2-9*Xi(24,29,i)}return 3}return t.kind==="bridge"&&e>130&&e<186&&n>29&&n<41?1.8:ir(n,e,t)==="Água"?-5:t.kind==="finale"?24*(1-Xi(-5,235,e))+.35*Math.sin(n/40)*Math.sin(e/60):t.kind==="garden"?.8+.018*n+.4*Math.sin(e/24):.6*Math.sin(e/70)*Math.sin(n/60)}function bg(n,e,t=Ue){if(Math.hypot(n-t.cup.x,e-t.cup.z)<t.greenRadius)return"green";for(const i of t.bunkers)if(((n-i.x)/i.rx)**2+((e-i.z)/i.rz)**2<1)return"bunker";return Math.abs(n-ws(e,t))<(t.kind==="forest"?18:24)?"fairway":"rough"}const gt=(n,e,t,i,r,s,a="wall")=>({shape:"box",kind:a,x:n,y:e,z:t,w:i,h:r,d:s});function wg(n){let e=103+n.id*19;const t=()=>(e=e*1664525+1013904223>>>0,e/4294967296),i=[],r=n.kind==="forest"?155:70;for(let s=0;s<r;s++){let a=15+t()*(n.distance+35),o=ws(a,n)+(t()>.5?1:-1)*(n.kind==="forest"?23+t()*58:37+t()*60);if(ir(o,a,n)||Math.hypot(o,a-n.distance)<n.greenRadius+7||["gate","garden"].includes(n.kind)&&Math.abs(o)<50)continue;let l=n.kind==="forest"?17+t()*9:7+t()*7,c=Dt(o,a,n),h=n.kind==="forest"?4+t()*2:3+t()*2;i.push({shape:"cylinder",kind:"trunk",x:o,y:c+l*.4,z:a,r:.7,h:l*.8}),i.push({shape:"sphere",kind:"canopy",x:o,y:c+l,z:a,r:h})}if(n.kind==="lake")for(let s=0;s<36;s++){const a=(s%2?1:-1)*(28+t()*100),o=s<18?12:220,l=Dt(a,o,n),c=8+t()*6;i.push({shape:"cylinder",kind:"trunk",x:a,y:l+c*.4,z:o,r:.65,h:c*.8},{shape:"sphere",kind:"canopy",x:a,y:l+c,z:o,r:3+t()*2})}if(n.kind==="balcony"&&i.push(gt(-15,36,0,1,4,32,"balcony-rail"),gt(15,36,0,1,4,32,"balcony-rail"),gt(0,17,-33,76,34,25,"castle-solid")),n.kind==="finale"){i.push(gt(0,17,n.distance+56,76,34,25,"castle-solid"));for(const s of[-36,36])i.push({shape:"cylinder",kind:"castle-solid",x:s,y:22,z:n.distance+56,r:9,h:44})}if(n.kind==="forest")for(const s of[125,155,185,220]){const o=Dt(8,s,n);i.push({shape:"cylinder",kind:"trunk",x:8,y:o+10,z:s,r:1.1,h:20},{shape:"sphere",kind:"canopy",x:8,y:o+22,z:s,r:6})}if(n.kind==="abyss")for(let s=0;s<6;s++)i.push(gt(-52+s*9,24,8,3,8+s%3*2,3,"ruin"));if(n.kind==="forest")for(const s of[-27,-18,-9])i.push(gt(s,Dt(s,260,n)+4,260,3,8,3,"ruin"));if(n.kind==="gate"&&(i.push(gt(-26,9,43,40,18,4),gt(26,9,43,40,18,4),gt(0,15,43,12,6,4)),i.push(gt(-5.1,10.5,43,1.8,3,4),gt(5.1,10.5,43,1.8,3,4)),i.push(gt(-46,7,83,4,14,80),gt(46,7,83,4,14,80),gt(0,7,123,96,14,4))),n.kind==="bridge"){i.push(gt(35,.8,158,12,2,60,"bridge"),gt(28.5,3.3,158,1,3,60,"bridge"),gt(41.5,3.3,158,1,3,60,"bridge"));for(const s of[133,151,169,185])i.push(gt(35,-1,s,12,6,3,"bridge"))}if(n.kind==="garden"){for(const[s,a]of[[-26,45],[27,65],[-27,106]]){let o=Dt(s,a,n);i.push({shape:"cylinder",kind:"fountain",x:s,y:o+1.1,z:a,r:4,h:2.2},{shape:"cylinder",kind:"statue",x:s,y:o+3.5,z:a,r:.8,h:5})}for(const s of[-20,20])for(const a of[27,48])i.push(gt(s,Dt(s,a,n)+1,a,3,2,12,"hedge"))}if(["abyss","stairs","forest","finale"].includes(n.kind))for(let s=0;s<18;s++){let a=30+t()*(n.distance-30),o=ws(a,n)+(t()>.5?1:-1)*(28+t()*30);if(ir(o,a,n))continue;let l=2+t()*3;i.push({shape:"sphere",kind:"rock",x:o,y:Dt(o,a,n)+l*.55,z:a,r:l})}return i}for(const n of en)n.obstacles=wg(n);const wo=en.reduce((n,e)=>n+e.par,0);en.reduce((n,e)=>n+e.distance,0);function Rs(n){return{strokes:n.reduce((e,t)=>e+t,0),par:en.slice(0,n.length).reduce((e,t)=>e+t.par,0),relative:n.reduce((e,t,i)=>e+t-en[i].par,0)}}const Ro=[{name:"Driver",range:240,angle:24,speed:53,spin:.2},{name:"Wood",range:190,angle:32,speed:43,spin:.3},{name:"Iron",range:140,angle:42,speed:35,spin:.5},{name:"Wedge",range:65,angle:64,speed:27,spin:.8},{name:"Putter",range:30,angle:0,speed:9,spin:0}],Ze=(n,e)=>Dt(n,e),rr=(n,e)=>bg(n,e);function kr(n=Ue.tee.x,e=Ue.tee.z){return{x:n,y:Ze(n,e)+.22,z:e,vx:0,vy:0,vz:0,moving:!1,holed:!1,spin:0,penalty:null,collisions:0}}function Pl(n,e,t,i,r){const s=e.angle*Math.PI/180,a=e.speed*t,o=r+i*(e.name==="Driver"?.19:.12);Object.assign(n,{vx:Math.sin(o)*Math.cos(s)*a,vz:Math.cos(o)*Math.cos(s)*a,vy:Math.sin(s)*a,moving:!0,holed:!1,spin:e.spin,penalty:null,age:0})}function li(n,e,t,i,r=.45){let s=n.vx*e+n.vy*t+n.vz*i;s<0&&(n.vx-=(1+r)*s*e,n.vy-=(1+r)*s*t,n.vz-=(1+r)*s*i,n.collisions++)}function Rg(n,e){if(e.shape==="sphere"){let d=n.x-e.x,m=n.y-e.y,v=n.z-e.z,M=Math.hypot(d,m,v),p=e.r+.22;if(M>=p)return;M<1e-4&&(d=1,m=0,v=0,M=1);const u=d/M,A=m/M,b=v/M;n.x=e.x+u*(p+.001),n.y=e.y+A*(p+.001),n.z=e.z+b*(p+.001),li(n,u,A,b,e.kind==="canopy"?.18:.45);return}if(e.shape==="cylinder"){if(n.y<e.y-e.h/2-.22||n.y>e.y+e.h/2+.22)return;let d=n.x-e.x,m=n.z-e.z,v=Math.hypot(d,m),M=e.r+.22;if(v>=M)return;const p=e.y+e.h/2+.22,u=e.y-e.h/2-.22;if(p-n.y<M-v){n.y=p,li(n,0,1,0);return}if(n.y-u<M-v){n.y=u,li(n,0,-1,0);return}const A=v?d/v:1,b=v?m/v:0;n.x=e.x+A*(M+.001),n.z=e.z+b*(M+.001),li(n,A,0,b);return}const i=e.w/2+.22,r=e.h/2+.22,s=e.d/2+.22,a=n.x-e.x,o=n.y-e.y,l=n.z-e.z;if(Math.abs(a)>=i||Math.abs(o)>=r||Math.abs(l)>=s)return;const c=i-Math.abs(a),h=r-Math.abs(o),f=s-Math.abs(l);if(c<=h&&c<=f){const d=a>=0?1:-1;n.x=e.x+d*(i+.001),li(n,d,0,0)}else if(h<=f){const d=o>=0?1:-1;n.y=e.y+d*(r+.001),li(n,0,d,0)}else{const d=l>=0?1:-1;n.z=e.z+d*(s+.001),li(n,0,0,d)}}function Cg(n,e,t,i){let r=0,s=1.4,a=Ze(n.x,n.z)+.22;const o=n.y>a+.035||n.vy>0;if(o)n.vy-=9.81*e,n.vx+=t.x*.15*e,n.vz+=t.z*.15*e;else{const d={green:.65,fairway:1.4,rough:3.4,bunker:6}[rr(n.x,n.z)],m=Math.max(-1,Math.min(1,(Ze(n.x+.1,n.z)-Ze(n.x-.1,n.z))/.2)),v=Math.max(-1,Math.min(1,(Ze(n.x,n.z+.1)-Ze(n.x,n.z-.1))/.2));n.vx-=9.81*m*e,n.vz-=9.81*v*e,r=9.81*Math.hypot(m,v),s=d;const M=Math.hypot(n.vx,n.vz),p=Math.max(0,1-d*e/(M||1));n.vx*=p,n.vz*=p}const l={x:n.x,y:n.y,z:n.z};n.x+=n.vx*e,n.y+=n.vy*e,n.z+=n.vz*e;const c=ir(n.x,n.z),f=(Ue.waters.find(d=>Math.abs(n.x-d.x)<d.w/2&&Math.abs(n.z-d.z)<d.d/2)?.y??1)+.22;if(c&&(c==="Água"&&n.y<f||c==="Precipício"&&n.y<-12||c==="Fora do campo")){n.penalty=c,n.moving=!1;return}a=Ze(n.x,n.z)+.22,a-l.y>1&&Ze(l.x,l.z)+.22<l.y+.1&&(n.x=l.x,n.z=l.z,n.vx*=-.45,n.vz*=-.45,n.collisions++,a=Ze(n.x,n.z)+.22),n.y<a&&(n.y=a,n.vy<-1.4?(n.vy=-n.vy*.28,n.vx*=.4-n.spin*.08,n.vz*=.4-n.spin*.08):n.vy=0);for(const d of i){const m=d.r||Math.max(d.w,d.d)/2;Math.abs(n.x-d.x)<m+2&&Math.abs(n.z-d.z)<m+2&&Rg(n,d)}if(!c&&n.y<Ze(n.x,n.z)+.22&&(n.y=Ze(n.x,n.z)+.22),!c&&Math.hypot(n.x-it.x,n.z-it.z)<.65&&n.y<Ze(it.x,it.z)+.47&&Math.hypot(n.vx,n.vz)<5){Object.assign(n,{holed:!0,moving:!1,x:it.x,z:it.z,y:Ze(it.x,it.z)-.2});return}!o&&r<=s&&Math.hypot(n.vx,n.vz)<.16&&Math.abs(n.vy)<.1&&(n.vx=n.vy=n.vz=0,n.moving=!1)}function Dl(n,e,t=Ue.wind,i=Ue.obstacles){if(!n.moving)return;const r=Math.max(1,Math.ceil(e/Math.min(1/120,.12/Math.max(1,Math.hypot(n.vx,n.vy,n.vz)))));for(let s=0;s<r&&n.moving;s++)Cg(n,e/r,t,i);n.age=(n.age||0)+e,n.age>45&&(n.moving=!1,n.vx=n.vy=n.vz=0)}function Pg(n,e,t){if(rr(n.x,n.z)!=="green")return null;const i={...n};Pl(i,Ro[4],e,0,t);const r=[{x:i.x,y:i.y,z:i.z}];for(let s=0;s<3600&&i.moving;s++)Dl(i,1/120),s%8===0&&r.push({x:i.x,y:i.y,z:i.z});return r.push({x:i.x,y:i.y,z:i.z}),{points:r,holed:i.holed,penalty:i.penalty}}function Dg(n,e){const t=Ue;let i=8721+t.id;const r=()=>(i=1664525*i+1013904223>>>0,i/4294967296),s=document.createElement("canvas");s.width=s.height=512;const a=s.getContext("2d");a.fillStyle="#a9a9a9",a.fillRect(0,0,512,512);for(let y=0;y<48e3;y++){const P=r()*512,R=r()*512,_=Math.floor(105+r()*115);a.strokeStyle=`rgb(${_},${_},${_})`,a.lineWidth=.5+r(),a.beginPath(),a.moveTo(P,R),a.lineTo(P+(r()-.5)*3,R-2-r()*7),a.stroke()}const o=new Rh(s);o.wrapS=o.wrapT=Ss,o.repeat.set(150,200),o.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy());const l=new on({roughness:.96,bumpMap:o,bumpScale:.035});l.onBeforeCompile=y=>{y.uniforms.turfDetail={value:o},y.uniforms.courseId={value:t.id},y.uniforms.cupPoint={value:new Ve(t.cup.x,t.cup.z)},y.uniforms.greenSize={value:t.greenRadius},y.uniforms.sandPatches={value:Array.from({length:4},(P,R)=>{const _=t.bunkers[R];return _?new lt(_.x,_.z,_.rx,_.rz):new lt(1e4,1e4,1,1)})},y.vertexShader=y.vertexShader.replace("#include <common>",`#include <common>
varying vec3 turfPosition;`),y.vertexShader=y.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
turfPosition=position;`),y.fragmentShader=y.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 turfPosition;
      uniform sampler2D turfDetail;
      uniform float courseId;uniform vec2 cupPoint;uniform float greenSize;uniform vec4 sandPatches[4];
      float turfHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float turfNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(turfHash(i),turfHash(i+vec2(1,0)),f.x),mix(turfHash(i+vec2(0,1)),turfHash(i+vec2(1,1)),f.x),f.y);}
    `),y.fragmentShader=y.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
      vec2 ground=turfPosition.xz;
      float broad=turfNoise(ground*.085);
      float fine=turfNoise(ground*.65);
      float centre=10.*sin(ground.y/85.)*sin(3.14159265*ground.y/cupPoint.y);
      if(courseId>2.5&&courseId<3.5)centre=64.*pow(sin(3.14159265*clamp(ground.y/cupPoint.y,0.,1.)),2.);
      if(courseId>7.5)centre=20.*sin(ground.y/80.)*sin(3.14159265*ground.y/cupPoint.y);
      float fairDistance=abs(ground.x-centre)+(courseId>2.5&&courseId<3.5?6.:0.);
      float fair=1.-smoothstep(22.8,25.2,fairDistance);
      float greenDistance=length(ground-cupPoint);
      float green=1.-smoothstep(greenSize-.2,greenSize+.2,greenDistance);
      float collar=1.-smoothstep(greenSize+1.5,greenSize+3.,greenDistance);
      float sandDistance=10000.;for(int i=0;i<4;i++){vec2 offset=(ground-sandPatches[i].xy)/sandPatches[i].zw;sandDistance=min(sandDistance,dot(offset,offset));}
      float sand=1.-smoothstep(.97,1.03,sandDistance);
      // Long mowing lanes follow the fairway, with restrained contrast.
      float mow=.5+.5*tanh(sin((ground.y+ground.x*.12)*.235)*3.);
      vec3 rough=mix(vec3(.042,.135,.027),vec3(.067,.18,.037),broad);
      vec3 fairway=mix(vec3(.072,.235,.066),vec3(.084,.26,.075),mow);
      fairway*=.975+.035*broad+.018*fine;
      vec3 turf=mix(rough,fairway,fair);
      // The fringe is visibly longer and darker than the finely cut putting surface.
      float fringe=1.-smoothstep(greenSize+1.8,greenSize+2.5,greenDistance);
      turf=mix(turf,vec3(.085,.24,.065)*(.98+.04*fine),collar);
      turf=mix(turf,vec3(.067,.205,.055),fringe);
      float crossCut=sin((ground.x+ground.y)*.42)*sin((ground.x-ground.y)*.42);
      vec3 putting=vec3(.135,.315,.115)*(.975+.028*crossCut);
      turf=mix(turf,putting,green);
      float bladeDetail=texture2D(turfDetail,ground*.42).r;
      float closeCut=texture2D(turfDetail,ground*1.65).r;
      turf*=mix(.88+bladeDetail*.23,.97+closeCut*.055,green);
      // Sand has its own mineral grain, shallow rake grooves and a shaded grass lip.
      float grain=texture2D(turfDetail,ground*2.7+vec2(.37,.19)).r;
      float rakePhase=ground.y*7.+sin(ground.x*.26)*2.5;
      float rakeFade=1.-smoothstep(.15,1.8,fwidth(rakePhase));
      float rake=sin(rakePhase)*rakeFade;
      float innerEdge=smoothstep(.68,.99,sandDistance);
      vec3 sandColor=mix(vec3(.76,.67,.49),vec3(.63,.51,.32),innerEdge*.32);
      sandColor*=.83+grain*.16+rake*.035+.07*turfNoise(ground*3.)+.035*turfNoise(ground*.4);
      sandColor*=1.-.22*pow(clamp(sandDistance,0.,1.),14.);
      float lip=(1.-smoothstep(1.01,1.095,sandDistance))*smoothstep(.99,1.015,sandDistance);
      turf=mix(turf,vec3(.045,.115,.024),lip*.55);
      diffuseColor.rgb=mix(turf,sandColor,sand);

    `),y.fragmentShader=y.fragmentShader.replace("#include <normal_fragment_maps>",`
      // Material-scale micro-relief only: the collision height field is unchanged.
      float turfRelief=(bladeDetail-.5)*.055;
      float greenRelief=(closeCut-.5)*.006;
      float sandRelief=(grain-.5)*.045+rake*.019;
      float relief=mix(mix(turfRelief,greenRelief,green),sandRelief,sand);
      normal=perturbNormalArb(-vViewPosition,normal,vec2(dFdx(relief),dFdy(relief)),faceDirection);
    `),y.fragmentShader=y.fragmentShader.replace("#include <roughnessmap_fragment>",`
      #include <roughnessmap_fragment>
      roughnessFactor=mix(mix(.94,.87,green),.99,sand);
    `)};const c=new Ti(360,t.distance+160,180,Math.ceil((t.distance+160)/2));c.rotateX(-Math.PI/2),c.translate(0,0,(t.distance+40)/2);const h=c.attributes.position;for(let y=0;y<h.count;y++){const P=h.getX(y),R=h.getZ(y);h.setY(y,t.kind==="bridge"&&P>29&&P<41&&R>130&&R<186?-5:t.kind==="balcony"&&R<8&&R>-17&&Math.abs(P)<16?0:Ze(P,R))}c.computeVertexNormals();const f=new Tt(c,l);f.receiveShadow=!0,n.add(f);const d=new bt,m=[],v=[];for(let y=0;y<3;y++){const P=y*Math.PI/3,R=Math.cos(P)*.045,_=Math.sin(P)*.045;m.push(-R,0,-_,R,0,_,R*.9,.7-y*.1,_*.9+.08),v.push(.36,.52,.19,.36,.52,.19,.78,.91,.46)}d.setAttribute("position",new rt(m,3)),d.setAttribute("color",new rt(v,3)),d.computeVertexNormals();const M=new on({color:"#78a94c",vertexColors:!0,side:sn,roughness:1});M.onBeforeCompile=y=>{y.vertexShader=y.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vec3 tuftWorld=(modelMatrix*instanceMatrix*vec4(0.,0.,0.,1.)).xyz;
      float visibility=1.-smoothstep(55.,105.,distance(cameraPosition,tuftWorld));
      transformed.y*=visibility;
    `)};const p=new Eh(d,M,24e3);p.receiveShadow=!0;const u=new _t,A=new Xe;let b=0;for(let y=0;y<34e3&&b<24e3;y++){const P=15+r()*t.distance,R=ws(P),_=r()>.5?1:-1,T=R+_*(24+r()*35);rr(T,P)!=="rough"||ir(T,P)||Math.hypot(T-t.cup.x,P-t.cup.z)<t.greenRadius+3||T>62&&T<120&&P>157&&P<234||(u.position.set(T,Ze(T,P),P),u.rotation.y=r()*Math.PI*2,u.scale.setScalar(.4+r()*.45),u.updateMatrix(),p.setMatrixAt(b,u.matrix),A.setHSL(.22+r()*.035,.32+r()*.15,.62+r()*.15),p.setColorAt(b,A),b++)}return p.count=b,p.instanceMatrix.needsUpdate=!0,p.computeBoundingSphere(),n.add(p),f}function Ll(n,e){const t=Ue,i=new ln;n.add(i);const r=[],s=[],a=[],o=[],l=new Map,c=_=>(l.has(_)||l.set(_,new on({color:_,roughness:.85})),l.get(_)),h=c("#c2b99d"),f=c("#e6d3a6"),d=c("#386765"),m=c("#73563b");c("#d9b35c");function v(_,T,x,g,C,L=i){const B=new Tt(_,T);return B.position.set(x,g,C),B.castShadow=!0,B.receiveShadow=!0,L.add(B),B}const M=(_,T,x,g,C,L,B=h)=>v(new Jt(g,C,L),B,_,T,x),p=(_,T,x,g,C,L=h,B=12)=>v(new Fn(g,g,C,B),L,_,T,x);function u(_,T,x,g=1){p(_,T+4*g,x,.065*g,8*g,m,6);const C=new on({color:"#b3443a",side:sn});let L=v(new Ti(2.7*g,1.7*g,8,2),C,_+1.35*g,T+7*g,x);r.push(L)}function A(_,T,x=34,g=7,C=0){p(_,C+x/2,T,g,x),p(_,C+x-2,T,g+1,3,f);for(let L=0;L<10;L++){const B=L*Math.PI/5;M(_+Math.sin(B)*g,C+x+1,T+Math.cos(B)*g,2,4,2,f)}v(new $n(g+1,13,10),d,_,C+x+9,T),u(_,C+x+16,T,.7);for(let L=10;L<x-5;L+=10)M(_,C+L,T+g,.9,3,.2,c("#354c45"))}function b(_,T=0,x=1){M(0,T+17,_,76,34,25),M(0,T+35,_,79,3,28,f),M(0,T+42,_-9,27,27,24),v(new $n(22,19,4),d,0,T+65,_-9).rotation.y=Math.PI/4,A(-36,_,44,9,T),A(36,_,44,9,T),A(-18,_-24,54,7,T),A(18,_-24,54,7,T),M(0,T+9,_+12.6,11,18,.4,m);for(let g=-27;g<30;g+=9)M(g,T+24,_+12.6,2,5,.2,c("#43564c"))}Dg(i,e);for(const _ of t.obstacles)if(!(_.kind==="castle-solid"||_.kind==="balcony-rail"))if(_.shape==="box"){const T=_.kind==="hedge"?c("#42763c"):h;if(M(_.x,_.y,_.z,_.w,_.h,_.d,T),_.kind==="wall")for(let x=_.x-_.w/2+2;x<_.x+_.w/2;x+=4)M(x,_.y+_.h/2+.9,_.z,2,1.8,_.d,f)}else _.kind==="trunk"?p(_.x,_.y,_.z,_.r,_.h,m,8):_.kind==="canopy"?v(new vn(_.r,10,7),c(Math.round(_.z)%2?"#558344":"#709149"),_.x,_.y,_.z):_.kind==="rock"?v(new vn(_.r,10,7),c("#879087"),_.x,_.y,_.z):_.kind==="fountain"?(p(_.x,_.y,_.z,_.r,_.h,f,24),p(_.x,_.y+_.h/2+.06,_.z,_.r*.8,.12,c("#639f9d"),24)):_.kind==="statue"&&(p(_.x,_.y,_.z,_.r,_.h,f),v(new vn(.65,8,6),f,_.x,_.y+_.h/2,_.z));for(const _ of t.waters){const T=new on({color:"#348c98",transparent:!0,opacity:.83,roughness:.24,metalness:.22}),x=new Ti(_.w,_.d,60,36);x.rotateX(-Math.PI/2);const g=x.attributes.position;if(t.kind==="lake"){let L=[];const B=x.index;for(let X=0;X<B.count;X+=3){let O=!0;for(let k=0;k<3;k++){const Y=B.getX(X+k);Math.hypot(g.getX(Y)+_.x,g.getZ(Y)+_.z-t.distance)>25&&(O=!1)}O||L.push(B.getX(X),B.getX(X+1),B.getX(X+2))}x.setIndex(L)}const C=v(x,T,_.x,_.y,_.z);C.castShadow=!1,s.push(C)}if(t.kind==="balcony"){b(-33),M(0,34,0,30,2,32,f),M(-15,36,0,1,4,32),M(15,36,0,1,4,32);for(let _ of[-11,11])p(_,17,3,2,34),u(_,37,4,.8)}else t.kind==="finale"?b(t.distance+56):b(t.distance+160,-5);if(t.kind==="abyss"&&(M(0,-23,18,320,85,14,c("#7c8279")),M(0,-28,211,320,72,12,c("#737c74"))),t.kind==="stairs")for(const[_,T]of[[125,0],[265,12],[380,26]]){for(const x of[-70,70])M(x,T-14,_+40,12,30,115,c("#7a8275"));u(-32,T+1,_-12,.8)}if(t.kind==="bridge"){for(const T of[143,161,178]){let x=v(new Ao(4,1.2,6,16,Math.PI),f,35,-1,T);x.rotation.y=Math.PI/2}M(-63,9,211,14,18,14,f),v(new $n(12,9,4),d,-63,22,211).rotation.y=Math.PI/4;const _=new ln;_.position.set(-63,17,202),i.add(_);for(let T=0;T<4;T++){const x=new Tt(new Jt(1.4,12,.3),m);x.position.set(Math.sin(T*Math.PI/2)*6,Math.cos(T*Math.PI/2)*6,0),x.rotation.z=-T*Math.PI/2,_.add(x)}o.push(_)}if(t.kind==="gate"&&(A(-46,43,26,6),A(46,43,26,6),u(-18,20,43,.7),u(18,20,43,.7)),["balcony","garden"].includes(t.kind)){const _=t.kind==="garden"?7:6;for(const T of[-1,1])for(let x=0;x<_;x++){const g=T*(t.kind==="garden"?36:32),C=22+x*13,L=Dt(g,C,t);if(!ir(g,C,t)){M(g,L+.25,C,7,.5,8,m);for(let B=0;B<12;B++){const X=g-2.5+B%4*1.6,O=C-2.5+Math.floor(B/4)*2;v(new To(.5,0),c(B%2?"#e6b759":"#c46c91"),X,L+.9,O)}}}}if(t.kind==="finale"){for(const _ of[-40,40])for(let T=0;T<3;T++){M(_,1+T,515+T*4,18,2,4,m);for(let x=0;x<10;x++){let g=new ln;g.position.set(_-8+x*1.7,2+T,515+T*4),i.add(g),v(new Fn(.25,.3,1,6),c(x%2?"#ad5042":"#637ba1"),0,.5,0,g),v(new vn(.23,8,6),c("#d9ac82"),0,1.2,0,g),a.push(g)}}for(const _ of[-28,28])for(const T of[485,500,535])u(_,Dt(_,T,t),T,.85);M(0,1,t.distance+28,14,1,18,m)}for(let _=0;_<14;_++){const T=-420+_*65,x=t.distance+230+_%3*60;v(new $n(65+_%4*15,90+_%5*20,6),c(_%2?"#89a59a":"#78958b"),T,35,x)}for(let _=0;_<5;_++){const T=-120-_%2*17,x=t.distance*.6+Math.floor(_/2)*23,g=Dt(T,x,t);g<0||(M(T,g+4,x,11,8,11,f),v(new $n(10,7,4),d,T,g+11,x).rotation.y=Math.PI/4)}u(t.cup.x,Dt(t.cup.x,t.cup.z,t),t.cup.z,1);let y=v(new yo(.66,32),c("#152b22"),t.cup.x,Dt(t.cup.x,t.cup.z,t)+.018,t.cup.z);y.rotation.x=-Math.PI/2;const P=[];for(let _=-t.greenRadius+2;_<t.greenRadius;_+=2)for(let T=-t.greenRadius;T<t.greenRadius;T+=.7)for(const x of[!1,!0]){let g=t.cup.x+(x?T:_),C=t.cup.z+(x?_:T),L=g+(x?.7:0),B=C+(x?0:.7);Math.hypot(g-t.cup.x,C-t.cup.z)>t.greenRadius-1||Math.hypot(L-t.cup.x,B-t.cup.z)>t.greenRadius-1||P.push(g,Dt(g,C,t)+.025,C,L,Dt(L,B,t)+.025,B)}const R=new wh(new bt().setAttribute("position",new rt(P,3)),new So({color:"#d4e3b5",transparent:!0,opacity:.18}));return i.add(R),R.visible=!1,{group:i,grid:R,update(_){r.forEach((T,x)=>{const g=T.geometry.attributes.position;for(let C=0;C<g.count;C++)g.setZ(C,Math.sin(_*2+g.getX(C)*1.4+x)*.22*(g.getX(C)/3+.5));g.needsUpdate=!0}),s.forEach(T=>{const x=T.geometry.attributes.position;for(let g=0;g<x.count;g++)x.setY(g,Math.sin(x.getX(g)*.12+_*1.3)*.08+Math.cos(x.getZ(g)*.2+_)*.04);x.needsUpdate=!0,T.geometry.computeVertexNormals()}),o.forEach(T=>T.rotation.z=_*.3),a.forEach((T,x)=>T.rotation.z=Math.sin(_*3+x)*.08)},dispose(){n.remove(i);const _=new Set,T=new Set,x=new Set;i.traverse(g=>{g.geometry&&_.add(g.geometry);for(const C of Array.isArray(g.material)?g.material:g.material?[g.material]:[]){T.add(C);for(const L of Object.values(C))L?.isTexture&&x.add(L)}}),_.forEach(g=>g.dispose()),T.forEach(g=>g.dispose()),x.forEach(g=>g.dispose())}}}class Lg{constructor(){this.reset()}reset(){this.used=!1,this.remaining=0,this.result=null}canUse(e,t,i){return!this.used&&!e.moving&&!e.holed&&t===4&&i==="accuracy"&&rr(e.x,e.z)==="green"}show(e,t,i,r,s){return this.canUse(e,t,i)?(this.result=Pg(e,r,s),this.result&&(this.used=!0,this.remaining=4),this.result):null}update(e){this.remaining=Math.max(0,this.remaining-e)}get visible(){return this.remaining>0}}const J=n=>document.querySelector(n),hn=new Mh;hn.background=new Xe("#b8d8d0");hn.fog=new vo("#b8d8d0",290,1050);const kt=new vg({canvas:J("#world"),antialias:!0});kt.setPixelRatio(Math.min(devicePixelRatio,1.7));kt.setSize(innerWidth,innerHeight);kt.shadowMap.enabled=!0;kt.shadowMap.type=Zc;kt.outputColorSpace=Xt;kt.toneMapping=Jc;kt.toneMappingExposure=1.15;const Dn=new jt(48,innerWidth/innerHeight,.1,1700);hn.add(new Dh("#fff4d8","#506d45",2.3));const yn=new Uh("#fff0cc",3);yn.position.set(-100,180,40);yn.castShadow=!0;yn.shadow.mapSize.set(2048,2048);Object.assign(yn.shadow.camera,{left:-180,right:180,top:240,bottom:-130,far:700});yn.shadow.bias=-.001;hn.add(yn,yn.target);yn.target.position.z=130;const Kn=new Tt(new vn(.22,16,12),new on({color:"#fffef1",roughness:.6}));Kn.castShadow=!0;hn.add(Kn);const Ur=Tg(),Pn=Ur.root;hn.add(Pn);let Cs=Ll(hn,kt);const Ot=new Lg;let Un=null,ue=kr(),Lt=!1,Re="idle",It=0,Bt=0,Qt=0,Nn=0,Ar=0,$i=0,pi=0,Ms=0,Ut=[],Ai=!1,mi=0,br=0,kn=!1,mn=!1,bi={x:0,z:0},Ps={x:0,y:35,z:0},so=0,gi=localStorage.getItem("royal-character")||"THE KING",Mi=localStorage.getItem("royal-audio")!=="off",_i,Ln=0,Ds=!1,wr=!1;const In=new Set;new URLSearchParams(location.search);const Co=null,Ns="royal-tournament-v2",ao="royal-tournament-records-v2";function Po(n,e){try{return JSON.parse(localStorage.getItem(n))??e}catch{return e}}Ur.setCharacter(gi);J("#characters span").textContent=gi;function Si(n){return n===0?"E":n>0?`+${n}`:String(n)}function Nr(n){J("#toast").textContent=n,J("#toast").style.opacity=1,clearTimeout(Nr.timer),Nr.timer=setTimeout(()=>J("#toast").style.opacity=0,3500)}function Do(){Mi&&(_i??=new AudioContext,_i.resume())}function Zn(n,e,t,i,r="sine",s=n){if(!Mi||!_i)return;const a=_i.createOscillator(),o=_i.createGain(),l=_i.currentTime+e;a.type=r,a.frequency.setValueAtTime(n,l),a.frequency.exponentialRampToValueAtTime(Math.max(20,s),l+t),o.gain.setValueAtTime(1e-4,l),o.gain.exponentialRampToValueAtTime(i,l+.006),o.gain.exponentialRampToValueAtTime(1e-4,l+t),a.connect(o).connect(_i.destination),a.start(l),a.stop(l+t+.02)}function Ig(){Zn(780,0,.14,.16,"triangle",260),Zn(340,.07,.23,.1,"sine",120),Zn(1120,.16,.075,.06,"triangle",650),Zn(850,.29,.06,.035,"triangle",460)}function Ug(){[523.25,659.25,783.99,1046.5].forEach((n,e)=>Zn(n,e*.12,.45,.045,"triangle"))}function Bn(n){kn=!0,J("#dialogContent").innerHTML=n,J("#close").hidden=Re==="done",J("#dialog").showModal()}function Yt(){J("#dialog").open&&J("#dialog").close()}J("#close").onclick=Yt;J("#dialog").addEventListener("close",()=>kn=!1);J("#dialog").addEventListener("cancel",n=>{Re==="done"&&n.preventDefault()});function hr(){Ot.reset(),Un&&(hn.remove(Un),Un.geometry.dispose(),Un.material.dispose(),Un=null)}function zn(){if(Ai||Co||!Lt)return;const n=ue.moving?{...kr(bi.x,bi.z)}:{...ue};localStorage.setItem(Ns,JSON.stringify({holeIndex:mi,scores:Ut,ball:n,strokes:Qt,aim:Bt,club:It,mode:Re==="done"?"done":"idle"})),J("#resume-game").hidden=!1}function sr(){Re="idle",mn=!1,J("#phase").textContent="PRONTO PARA A TACADA",J("#hit").innerHTML="INICIAR TACADA <span>SPACE</span>"}function Lo(n=!0){Ln=0,Ds=!1,wr=!1,ue=kr(),Qt=0,It=0,Bt=0,pi=0,Nn=0,hr(),bi={x:ue.x,z:ue.z},Ps={x:ue.x,y:Ze(ue.x,ue.z),z:ue.z},sr(),Re=n?"intro":"idle",br=0,Kn.visible=!0,J("#fill").style.width="0%",zn(),Uo()}function Fr(n,e=!0){mi=n,Cs.dispose(),Ag(n),Cs=Ll(hn,kt),J("#hole-name").textContent=Ue.name,J("#hole-meta").textContent=`PAR ${Ue.par} / TEE ${Ue.distance} M`,J("#hole-number").textContent=`ROYAL CASTLE · HOLE ${String(n+1).padStart(2,"0")} / 09`,J("#intro-title").textContent=Ue.name,J("#intro-detail").textContent=`PAR ${Ue.par} · ${Ue.distance} M · DIFICULDADE ${Ue.difficulty}/10`,J("#intro-hint").textContent=Ue.hint,Lo(e)}function Io(){Lt=!0,J("#menu").hidden=!0,J("#scene-label").hidden=!0,J("#hud").hidden=!1,J("#app").classList.add("playing"),Do()}function oo(){Lt=!1,sr(),Yt(),hr(),J("#menu").hidden=!1,J("#scene-label").hidden=!1,J("#hud").hidden=!0,J("#intro-card").hidden=!0,J("#app").classList.remove("playing")}function Ng(){localStorage.getItem("royal-tutorial-v2")||Co||(Bn('<small>O CAMPEONATO REAL</small><h2>Nove aventuras.<br>Um só swing.</h2><p><b>Arraste ou A/D:</b> direção pelo centro da tela.<br><b>Q/E:</b> taco · <b>Shift:</b> ajuste fino.<br><b>Três cliques:</b> iniciar, fixar força, acertar precisão.</p><p>No green, com Putter: fixe a potência e pressione <b>P</b> antes do terceiro clique. Uma única prévia por tacada, durante 4 segundos. A barra de precisão pausa enquanto você observa.</p><p>Água, precipício ou recuperação: +1 tacada e retorno à posição anterior.</p><button class="primary" id="understood">ENTRAR NO CAMPEONATO ↗</button>'),J("#understood").onclick=()=>{localStorage.setItem("royal-tutorial-v2","1"),Yt()})}J("#play").onclick=()=>{Ut=[],Ai=!1,Io(),Fr(0),Ng()};J("#resume-game").hidden=!localStorage.getItem(Ns);J("#resume-game").onclick=()=>{const n=Po(Ns,null);if(!n||!en[n.holeIndex]||!Array.isArray(n.scores)){Nr("Nenhuma partida válida salva.");return}Ut=n.scores.slice(),Ai=!1,Io(),Fr(n.holeIndex,!1),n.ball&&Number.isFinite(n.ball.x)&&Number.isFinite(n.ball.z)&&(ue={...kr(n.ball.x,n.ball.z),...n.ball,moving:!1}),Qt=Number(n.strokes)||0,Bt=Number(n.aim)||0,It=Math.max(0,Math.min(4,n.club||0)),bi={x:ue.x,z:ue.z},n.mode==="done"?(Ln=4.2,zl(!1)):zn()};J("#practice").onclick=()=>{Bn('<h2>Conheça o reino.</h2><p>Treino não altera o recorde do campeonato.</p><div class="course-list">'+en.map(n=>`<button class="choice" data-hole="${n.id}"><b>${String(n.id+1).padStart(2,"0")} · ${n.name}</b><span>Par ${n.par} · ${n.distance} m · ${n.difficulty}/10</span></button>`).join("")+"</div>"),document.querySelectorAll("[data-hole]").forEach(n=>n.onclick=()=>{Yt(),Ai=!0,Ut=[],Io(),Fr(+n.dataset.hole)})};function Uo(){const n=Math.hypot(Ue.wind.x,Ue.wind.z),e=(-Math.atan2(Ue.wind.x,Ue.wind.z)+Bt)*180/Math.PI;J("#wind-value").innerHTML=`<span style="display:inline-block;transform:rotate(${e}deg);font-size:19px">↑</span> ${n.toFixed(1)}<em>m/s</em>`,J("#distance").innerHTML=`${Math.hypot(ue.x-it.x,ue.z-it.z).toFixed(1)}<em>m</em>`,J("#stroke").textContent=ue.moving||["swing","cup","celebration","done"].includes(Re)?Qt:Qt+1,J("#club").textContent=Ro[It].name,J("#lie").textContent=Ue.id===0&&ue.y>30?"VARANDA REAL":rr(ue.x,ue.z).toUpperCase(),J("#total-score").textContent=Ai?"TREINO":Si(Rs(Ut).relative),J("#score-label").textContent=`${Ut.length} / 9 CONCLUÍDOS`;const t=It===4&&rr(ue.x,ue.z)==="green"&&!ue.holed;Cs.grid.visible=Lt&&t&&!["intro","cup","celebration","done"].includes(Re),J("#putt-help").hidden=!Lt||!t||ue.moving,J("#putt-preview").disabled=kn||!Ot.canUse(ue,It,Re),J("#putt-preview").textContent=Ot.visible?`PRÉVIA · ${Math.ceil(Ot.remaining)}s`:Ot.used?"PRÉVIA UTILIZADA":"P · VER PRÉVIA",J("#putt-note").textContent=Ot.visible?"Impacto perfeito · precisão pausada":Ot.used?"Nova prévia disponível na próxima tacada":Re==="accuracy"?"Direção e potência atuais · uso único":"Fixe a potência para ver a prévia",J("#hit").disabled=Ot.visible||!["idle","power","accuracy"].includes(Re),J("#intro-card").hidden=Re!=="intro",J("#hud").classList.toggle("cinematic",["intro","cup","celebration","done"].includes(Re)),J("#hud").classList.toggle("in-flight",ue.moving)}function Il(){if(kn||!Lt)return;const n=Ot.show(ue,It,Re,Nn,Bt);if(!n)return;const e=n.points.map(t=>new N(t.x,Math.max(t.y,Ze(t.x,t.z)+.06)+.04,t.z));Un=new Ml(new bt().setFromPoints(e),new So({color:"#ffe6a1",transparent:!0,opacity:.95,depthTest:!0})),hn.add(Un)}J("#putt-preview").onclick=Il;function Ul(){Re==="intro"&&(br=4,sr(),zn())}J("#skip-intro").onclick=Ul;function Ls(n){Re!=="idle"||ue.moving||kn||(It=(It+n+5)%5,Uo())}J("#prev").onclick=()=>Ls(-1);J("#next").onclick=()=>Ls(1);function Nl(){if(Do(),Re==="intro"){Ul();return}!Lt||kn||Ot.visible||ue.moving||!["idle","power","accuracy"].includes(Re)||ue.holed||(Re==="idle"?(Re="power",$i=0,J("#phase").textContent="ESCOLHA A POTÊNCIA",J("#hit").innerHTML="FIXAR POTÊNCIA <span>SPACE</span>"):Re==="power"?(Nn=Math.max(.03,Nn),Re="accuracy",$i=0,J("#phase").textContent="ACERTE O CENTRO",J("#hit").innerHTML="ACERTAR IMPACTO <span>SPACE</span>"):(Re="swing",pi=0,mn=!0,Ps={x:ue.x,y:Ze(ue.x,ue.z),z:ue.z},so=Bt,Qt++,bi={x:ue.x,z:ue.z},J("#phase").textContent=Math.abs(Ar)<.08?"IMPACTO PERFEITO":Ar<0?"IMPACTO ANTECIPADO":"IMPACTO ATRASADO",J("#hit").innerHTML="BOLA EM JOGO <span>●</span>",hr(),zn()))}J("#hit").onclick=Nl;function dr(){return Lt&&!kn&&Re==="idle"&&!ue.moving&&!mn}J("#left").onclick=()=>{dr()&&(Bt+=.018)};J("#right").onclick=()=>{dr()&&(Bt-=.018)};let Ki=null;const Or=J("#world");Or.addEventListener("pointerdown",n=>{!dr()||n.button!==0||(Ki={id:n.pointerId,x:n.clientX},Or.setPointerCapture(n.pointerId))});Or.addEventListener("pointermove",n=>{!Ki||Ki.id!==n.pointerId||(dr()&&(Bt=Sg(Bt,n.clientX-Ki.x,n.shiftKey)),Ki.x=n.clientX)});for(const n of["pointerup","pointercancel","lostpointercapture"])Or.addEventListener(n,()=>Ki=null);function Fl(){Qt++,ue=kr(bi.x,bi.z),hr(),sr(),Nr("Recuperação: +1 tacada. Bola na posição anterior."),zn()}function Ol(){const n=Rs(Ut);return'<div class="scorecard"><table><thead><tr><th>Buraco</th><th>Par</th><th>Tacadas</th><th>±</th></tr></thead><tbody>'+en.map((e,t)=>`<tr><td>${t+1} · ${e.name}</td><td>${e.par}</td><td>${Ut[t]??"—"}</td><td>${Ut[t]===void 0?"—":Si(Ut[t]-e.par)}</td></tr>`).join("")+`</tbody><tfoot><tr><td>TOTAL</td><td>${wo}</td><td>${n.strokes}</td><td>${Si(n.relative)}</td></tr></tfoot></table></div>`}function Bl(){!Lt||Re==="done"||(Bn("<h2>Uma pausa real.</h2><p>"+Ue.name+'</p><button class="primary" id="resume">CONTINUAR ↗</button><button class="choice" id="card">Ver scorecard</button><button class="choice" id="recover">Recuperar bola (+1 tacada)</button><button class="choice" id="restart">Reiniciar este buraco</button><button class="choice" id="home">Salvar e voltar ao menu</button>'),J("#resume").onclick=Yt,J("#card").onclick=()=>{J("#dialogContent").innerHTML="<h2>Scorecard</h2>"+Ol()},J("#recover").disabled=["intro","cup","celebration"].includes(Re),J("#recover").onclick=()=>{Yt(),Fl()},J("#restart").onclick=()=>{Yt(),Lo()},J("#home").onclick=()=>{zn(),oo()})}J("#pause").onclick=Bl;J("#characters").onclick=()=>{Bn("<h2>A corte está pronta.</h2><p>Três estilos. As mesmas capacidades.</p>"+["THE KING","THE KNIGHT","THE SERVANT"].map((n,e)=>`<button class="choice" data-char="${e}">${["♛","♜","♟"][e]} &nbsp; ${n} ${n===gi?"✓":""}</button>`).join("")),document.querySelectorAll("[data-char]").forEach(n=>n.onclick=()=>{gi=["THE KING","THE KNIGHT","THE SERVANT"][+n.dataset.char],localStorage.setItem("royal-character",gi),Ur.setCharacter(gi),J("#characters span").textContent=gi,Yt()})};J("#records").onclick=()=>{const n=Po(ao,[]);Bn("<h2>Royal records.</h2><p>Campeonato · 9 buracos · Par 36 · 2.800 m</p>"+(n.length?n.slice(0,5).map(e=>`<p>♜ ${e.total} tacadas · ${Si(e.total-wo)} · ${e.date}</p>`).join(""):"<p>Complete o campeonato para registrar sua marca.</p>"))};J("#settings").onclick=()=>{Bn('<h2>Do seu jeito.</h2><button class="choice" id="quality">Alternar qualidade: '+(kt.getPixelRatio()>1?"alta":"econômica")+"</button><p>Arraste ou A/D: direção pelo centro.<br>Shift: ajuste fino · Q/E: tacos.<br>P: prévia única do putt após fixar potência.<br>C: câmera · R: enquadramento · Esc: pausa.</p>"),J("#quality").onclick=()=>{kt.setPixelRatio(kt.getPixelRatio()>1?1:Math.min(devicePixelRatio,1.7)),Yt()}};J("#sound").textContent=Mi?"♪ SOM ON":"♪ SOM OFF";J("#sound").onclick=()=>{Mi=!Mi,localStorage.setItem("royal-audio",Mi?"on":"off"),J("#sound").textContent=Mi?"♪ SOM ON":"♪ SOM OFF",Do(),Zn(440,0,.12,.06)};function Fg(){["cup","celebration","done"].includes(Re)||(hr(),Re="cup",mn=!1,Ln=0,Ds=!1,wr=!1)}function zl(n=!0){Re="done";const e=Qt-Ue.par,t=Qt===1?"HOLE-IN-ONE":e<=-2?"EAGLE":e===-1?"BIRDIE":e===0?"PAR":e===1?"BOGEY":e===2?"DOUBLE BOGEY":Si(e);if(Ai||(Ut[mi]=Qt,zn()),Ai){Bn(`<small>TREINO · ${Ue.name}</small><h2>${t}!</h2><p>${Qt} tacadas · Par ${Ue.par}</p><button class="primary" id="again">JOGAR NOVAMENTE ↗</button><button class="choice" id="end">VOLTAR AO MENU</button>`),J("#again").onclick=()=>{Re="idle",Yt(),Lo()},J("#end").onclick=oo;return}if(mi<8)Bn(`<small>BURACO ${mi+1}/9 · ${Ue.name}</small><h2>${t}!</h2><p>${Qt} tacadas · Par ${Ue.par}<br>Acumulado: ${Si(Rs(Ut).relative)}</p><button class="primary" id="continue">PRÓXIMO BURACO ↗</button><p>${en[mi+1].name}</p>`),J("#continue").onclick=()=>{Re="idle",Yt(),Fr(mi+1)};else{const i=Rs(Ut).strokes,r=Po(ao,[]);n&&!Co&&(r.push({total:i,scores:[...Ut],date:new Date().toLocaleDateString("pt-BR")}),r.sort((s,a)=>s.total-a.total),localStorage.setItem(ao,JSON.stringify(r.slice(0,10))),localStorage.removeItem(Ns),J("#resume-game").hidden=!0),Bn(`<small>ROYAL CASTLE · CAMPEONATO COMPLETO</small><h2>A glória é sua!</h2><p>${i} tacadas · ${Si(i-wo)}<br>Melhor pessoal: ${r[0]?.total??i} tacadas</p>${Ol()}<button class="primary" id="again">NOVO CAMPEONATO ↗</button><button class="choice" id="end">VOLTAR AO MENU</button>`),J("#again").onclick=()=>{Re="idle",Yt(),Ut=[],Fr(0)},J("#end").onclick=oo}}addEventListener("keydown",n=>{["Space","ArrowLeft","ArrowRight","Escape"].includes(n.code)&&n.preventDefault(),In.add(n.code),!n.repeat&&(n.code==="Escape"&&(J("#dialog").open?Re!=="done"&&Yt():Bl()),!kn&&(n.code==="Space"&&Nl(),n.code==="KeyQ"&&Ls(-1),n.code==="KeyE"&&Ls(1),n.code==="KeyP"&&Il(),n.code==="KeyC"&&dr()&&(Ms=(Ms+1)%2),n.code==="KeyR"&&(Ms=0)))});addEventListener("keyup",n=>In.delete(n.code));addEventListener("blur",()=>In.clear());const fs=new N(0,15,15),Ft=new N,fn=new N;let Yc=performance.now(),ga=0,Sr=0;function $c(n){n.y=Math.max(n.y,Ze(n.x,n.z)+2);for(const e of Ue.obstacles){const t=e.r||Math.max(e.w,e.d)/2;if(Math.hypot(n.x-e.x,n.z-e.z)<t+1){const i=e.y+(e.h?e.h/2:e.r);n.y<i+1&&n.y>e.y-(e.h?e.h/2:e.r)-1&&(n.y=i+1.5)}}}function kl(n){requestAnimationFrame(kl);const e=Math.min((n-Yc)/1e3,.05);if(Yc=n,ga+=e,Cs.update(ga),Lt&&(yn.target.position.set(ue.x,Ze(ue.x,ue.z),ue.z),yn.position.set(ue.x-100,Ze(ue.x,ue.z)+180,ue.z+40)),Lt&&!kn){if(Re==="intro"&&(br+=e,br>=4&&(sr(),zn())),["cup","celebration"].includes(Re)&&(Ln+=e,Ln>.38&&!Ds&&(Ds=!0,Ig()),Ln>=1.15&&Re==="cup"&&(Re="celebration",wr=!1,Ug()),Ln>4.1&&zl()),Ot.visible&&(Ot.update(e),Un&&(Un.visible=Ot.visible)),dr()){const o=In.has("ShiftLeft")||In.has("ShiftRight")?.09:.32;(In.has("KeyA")||In.has("ArrowLeft"))&&(Bt+=e*o),(In.has("KeyD")||In.has("ArrowRight"))&&(Bt-=e*o)}if(Re==="power"&&($i+=e,Nn=(1-Math.cos($i*2.7))/2,J("#fill").style.width=Nn*100+"%",J("#needle").style.left=Nn*100+"%"),Re==="accuracy"&&!Ot.visible&&($i+=e,Ar=Math.cos($i*3.4),J("#needle").style.left=(Ar+1)*50+"%"),mn&&(pi+=e,Re==="swing"&&pi>=(It===4?ro:vs)&&(Pl(ue,Ro[It],Nn,Ar,so),Re="flight",Sr=0,Zn(It===4?340:180,0,.15,.08,"triangle")),pi>2.1&&(mn=!1)),ue.moving){for(Sr+=e;Sr>=1/120&&ue.moving;)Dl(ue,1/120),Sr-=1/120;if(!ue.moving)if(Sr=0,ue.penalty){const o=ue.penalty;Fl(),Nr(`${o}: +1 tacada. Bola reposta com segurança.`),Zn(120,0,.3,.08,"sine",40)}else ue.holed?Fg():(hr(),sr(),zn())}}const t=["cup","celebration","done"].includes(Re);if(Kn.position.set(ue.x,ue.y,ue.z),Re==="cup"){const o=Math.min(1,Ln/.75),l=.3*(1-o),c=o*Math.PI*2;Kn.position.set(it.x+Math.cos(c)*l,Ze(it.x,it.z)+.22-o*o*.85,it.z+Math.sin(c)*l),Kn.rotation.x+=e*9,Kn.visible=o<.74}else Kn.visible=!ue.holed;const i=mn||ue.moving||t,r=i?Ps:{x:ue.x,y:Ze(ue.x,ue.z),z:ue.z},s=i?so:Bt;if(Pn.position.set(r.x-1.5*Math.cos(s),r.y,r.z+1.5*Math.sin(s)),Pn.rotation.y=s,Re==="celebration"||Re==="done"?Ur.celebrate(Math.min(2.95,Math.max(0,Ln-1.15))):Ur.pose(i?pi:-1,It===4,Nn),Uo(),Re==="intro"&&Lt){const o=Math.min(1,br/4),l=Ue.distance*(1-o*.85),c=Math.min(Ze(Ue.tee.x,Ue.tee.z),Ze(it.x,it.z)),h=Math.max(Ze(0,l),Ze(Ue.tee.x,Ue.tee.z),Ze(it.x,it.z));Ft.set(65*Math.cos(o*Math.PI),h+55,l-45),fn.set(0,Math.max(c,Ze(0,l)),l+20)}else if(Re==="cup")Ft.set(it.x+2.6,Ze(it.x,it.z)+2.1,it.z-3),fn.set(it.x,Ze(it.x,it.z),it.z);else if(Re==="celebration"||Re==="done")Ft.set(Pn.position.x+Math.cos(s)*7,Pn.position.y+3.3,Pn.position.z-Math.sin(s)*7-2),fn.set(Pn.position.x,Pn.position.y+2.1,Pn.position.z);else if(!Lt)Ft.set(125+Math.sin(ga*.035)*9,90,Ue.id===0?135:Ue.distance+110),fn.set(0,20,Ue.id===0?-20:Ue.distance+145);else if(ue.moving&&(!mn||pi>(It===4?1.05:1.48)))Ft.set(ue.x-ue.vx*.45+10,ue.y+13,ue.z-24),fn.set(ue.x,ue.y,ue.z);else{const o=mn?Ps:{x:ue.x,y:ue.y-.22,z:ue.z},l=Mg(o,Bt,!!Ms,It===4);Ft.fromArray(l.position),fn.fromArray(l.target)}if($c(Ft),Lt&&Re!=="intro"){const o=fn.clone().sub(Ft);for(let l=.15;l<.9;l+=.15){const c=Ft.clone().addScaledVector(o,l);for(const h of Ue.obstacles)h.shape==="box"&&Math.abs(c.x-h.x)<h.w/2+.3&&Math.abs(c.z-h.z)<h.d/2+.3&&c.y<h.y+h.h/2&&c.y>h.y-h.h/2&&(Ft.y=Math.max(Ft.y,h.y+h.h/2+3))}}const a=Lt&&!ue.moving&&!mn&&["idle","power","accuracy"].includes(Re);Or.classList.toggle("aiming",a&&Re==="idle"),t&&!wr&&(Dn.position.copy(Ft),fs.copy(fn),wr=!0),a?(Dn.position.copy(Ft),fs.copy(fn)):(Dn.position.lerp(Ft,1-Math.exp(-e*3)),fs.lerp(fn,1-Math.exp(-e*4))),$c(Dn.position),Dn.lookAt(fs),kt.render(hn,Dn)}Dn.position.set(125,90,135);requestAnimationFrame(kl);addEventListener("resize",()=>{Dn.aspect=innerWidth/innerHeight,Dn.updateProjectionMatrix(),kt.setSize(innerWidth,innerHeight)});
