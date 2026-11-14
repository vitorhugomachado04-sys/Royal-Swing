(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();function Bh(n,t){return t==="left"&&{draw:"fade",fade:"draw",hook:"slice",slice:"hook"}[n]||n}function kh(n,t,e,i){const r=i==="left"?-1:1,s=e===1?1.636:e===4?1.69:1.67;return{x:n.x-r*s*Math.cos(t),y:n.y,z:n.z+r*s*Math.sin(t),side:r}}const Sc="180",Hh=0,rl=1,Vh=2,bu=1,Tu=2,Zn=3,xi=0,nn=1,Se=2,gi=0,Dr=1,Nr=2,sl=3,ol=4,Gh=5,Oi=100,Wh=101,Xh=102,qh=103,Yh=104,$h=200,Zh=201,Jh=202,Kh=203,Ra=204,Ca=205,jh=206,Qh=207,td=208,ed=209,nd=210,id=211,rd=212,sd=213,od=214,Pa=0,La=1,Da=2,Fr=3,Ia=4,Ua=5,Na=6,Fa=7,Au=0,ad=1,cd=2,_i=0,ld=1,ud=2,hd=3,Ru=4,dd=5,fd=6,pd=7,Cu=300,Or=301,zr=302,Oa=303,za=304,Oo=306,gs=1e3,Vi=1001,Ba=1002,fn=1003,md=1004,ks=1005,Dn=1006,qo=1007,Gi=1008,zn=1009,Pu=1010,Lu=1011,_s=1012,Ec=1013,Zi=1014,In=1015,Ls=1016,wc=1017,bc=1018,xs=1020,Du=35902,Iu=35899,Uu=1021,Nu=1022,An=1023,vs=1026,Ms=1027,Tc=1028,Ac=1029,Fu=1030,Rc=1031,Cc=1033,vo=33776,Mo=33777,yo=33778,So=33779,ka=35840,Ha=35841,Va=35842,Ga=35843,Wa=36196,Xa=37492,qa=37496,Ya=37808,$a=37809,Za=37810,Ja=37811,Ka=37812,ja=37813,Qa=37814,tc=37815,ec=37816,nc=37817,ic=37818,rc=37819,sc=37820,oc=37821,ac=36492,cc=36494,lc=36495,uc=36283,hc=36284,dc=36285,fc=36286,gd=3200,_d=3201,Ou=0,xd=1,ui="",je="srgb",Br="srgb-linear",bo="linear",ge="srgb",ur=7680,al=519,vd=512,Md=513,yd=514,zu=515,Sd=516,Ed=517,wd=518,bd=519,cl=35044,ll="300 es",Un=2e3,To=2001;class Gr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ul=1234567;const ls=Math.PI/180,ys=180/Math.PI;function rr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]).toLowerCase()}function re(n,t,e){return Math.max(t,Math.min(e,n))}function Pc(n,t){return(n%t+t)%t}function Td(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function Ad(n,t,e){return n!==t?(e-n)/(t-n):0}function us(n,t,e){return(1-e)*n+e*t}function Rd(n,t,e,i){return us(n,t,1-Math.exp(-e*i))}function Cd(n,t=1){return t-Math.abs(Pc(n,t*2)-t)}function Pd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Ld(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Dd(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Id(n,t){return n+Math.random()*(t-n)}function Ud(n){return n*(.5-Math.random())}function Nd(n){n!==void 0&&(ul=n);let t=ul+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Fd(n){return n*ls}function Od(n){return n*ys}function zd(n){return(n&n-1)===0&&n!==0}function Bd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function kd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Hd(n,t,e,i,r){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+i)/2),u=o((t+i)/2),h=s((t-i)/2),f=o((t-i)/2),d=s((i-t)/2),g=o((i-t)/2);switch(r){case"XYX":n.set(a*u,c*h,c*f,a*l);break;case"YZY":n.set(c*f,a*u,c*h,a*l);break;case"ZXZ":n.set(c*h,c*f,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*d,a*l);break;case"YXY":n.set(c*d,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ar(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Je(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const hl={DEG2RAD:ls,RAD2DEG:ys,generateUUID:rr,clamp:re,euclideanModulo:Pc,mapLinear:Td,inverseLerp:Ad,lerp:us,damp:Rd,pingpong:Cd,smoothstep:Pd,smootherstep:Ld,randInt:Dd,randFloat:Id,randFloatSpread:Ud,seededRandom:Nd,degToRad:Fd,radToDeg:Od,isPowerOfTwo:zd,ceilPowerOfTwo:Bd,floorPowerOfTwo:kd,setQuaternionFromProperEuler:Hd,normalize:Je,denormalize:Ar};class St{constructor(t=0,e=0){St.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ds{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],d=s[o+1],g=s[o+2],v=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=v;return}if(h!==v||c!==f||l!==d||u!==g){let m=1-a;const p=c*f+l*d+u*g+h*v,E=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const w=Math.sqrt(x),M=Math.atan2(w,p*E);m=Math.sin(m*M)/w,a=Math.sin(a*M)/w}const _=a*E;if(c=c*m+f*_,l=l*m+d*_,u=u*m+g*_,h=h*m+v*_,m===1-a){const w=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=w,l*=w,u*=w,h*=w}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+u*h+c*d-l*f,t[e+1]=c*g+u*f+l*h-a*d,t[e+2]=l*g+u*d+a*f-c*h,t[e+3]=u*g-a*h-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),h=a(s/2),f=c(i/2),d=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(o-r)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(s-l)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,i=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(dl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(dl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*i),u=2*(a*e-s*r),h=2*(s*i-o*e);return this.x=e+c*l+o*h-a*u,this.y=i+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Yo.copy(this).projectOnVector(t),this.sub(Yo)}reflect(t){return this.sub(Yo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yo=new I,dl=new Ds;class Qt{constructor(t,e,i,r,s,o,a,c,l){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l)}set(t,e,i,r,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],v=r[0],m=r[3],p=r[6],E=r[1],x=r[4],_=r[7],w=r[2],M=r[5],T=r[8];return s[0]=o*v+a*E+c*w,s[3]=o*m+a*x+c*M,s[6]=o*p+a*_+c*T,s[1]=l*v+u*E+h*w,s[4]=l*m+u*x+h*M,s[7]=l*p+u*_+h*T,s[2]=f*v+d*E+g*w,s[5]=f*m+d*x+g*M,s[8]=f*p+d*_+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*s,d=l*s-o*c,g=e*h+i*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=h*v,t[1]=(r*l-u*i)*v,t[2]=(a*i-r*o)*v,t[3]=f*v,t[4]=(u*e-r*c)*v,t[5]=(r*s-a*e)*v,t[6]=d*v,t[7]=(i*c-l*e)*v,t[8]=(o*e-i*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply($o.makeScale(t,e)),this}rotate(t){return this.premultiply($o.makeRotation(-t)),this}translate(t,e){return this.premultiply($o.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const $o=new Qt;function Bu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ao(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Vd(){const n=Ao("canvas");return n.style.display="block",n}const fl={};function Ss(n){n in fl||(fl[n]=!0,console.warn(n))}function Gd(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const pl=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ml=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wd(){const n={enabled:!0,workingColorSpace:Br,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ge&&(r.r=ni(r.r),r.g=ni(r.g),r.b=ni(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ge&&(r.r=Ir(r.r),r.g=Ir(r.g),r.b=Ir(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ui?bo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ss("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ss("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Br]:{primaries:t,whitePoint:i,transfer:bo,toXYZ:pl,fromXYZ:ml,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:je},outputColorSpaceConfig:{drawingBufferColorSpace:je}},[je]:{primaries:t,whitePoint:i,transfer:ge,toXYZ:pl,fromXYZ:ml,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:je}}}),n}const ue=Wd();function ni(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ir(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let hr;class Xd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{hr===void 0&&(hr=Ao("canvas")),hr.width=t.width,hr.height=t.height;const r=hr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=hr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ao("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ni(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ni(e[i]/255)*255):e[i]=ni(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let qd=0;class Lc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=rr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Zo(r[o].image)):s.push(Zo(r[o]))}else s=Zo(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Zo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Xd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yd=0;const Jo=new I;class qe extends Gr{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,i=Vi,r=Vi,s=Dn,o=Gi,a=An,c=zn,l=qe.DEFAULT_ANISOTROPY,u=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=rr(),this.name="",this.source=new Lc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Jo).x}get height(){return this.source.getSize(Jo).y}get depth(){return this.source.getSize(Jo).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gs:t.x=t.x-Math.floor(t.x);break;case Vi:t.x=t.x<0?0:1;break;case Ba:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gs:t.y=t.y-Math.floor(t.y);break;case Vi:t.y=t.y<0?0:1;break;case Ba:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=Cu;qe.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,i=0,r=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,_=(d+1)/2,w=(p+1)/2,M=(u+f)/4,T=(h+v)/4,A=(g+m)/4;return x>_&&x>w?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=M/i,s=T/i):_>w?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=M/r,s=A/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=T/s,r=A/s),this.set(i,r,s,e),this}let E=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-v)/E,this.z=(f-u)/E,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $d extends Gr{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const r={width:t,height:e,depth:i.depth},s=new qe(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Dn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Lc(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ji extends $d{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class ku extends qe{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zd extends qe{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sr{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,yn):yn.fromBufferAttribute(s,o),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Hs.copy(i.boundingBox)),Hs.applyMatrix4(t.matrixWorld),this.union(Hs)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qr),Vs.subVectors(this.max,Qr),dr.subVectors(t.a,Qr),fr.subVectors(t.b,Qr),pr.subVectors(t.c,Qr),ri.subVectors(fr,dr),si.subVectors(pr,fr),Ai.subVectors(dr,pr);let e=[0,-ri.z,ri.y,0,-si.z,si.y,0,-Ai.z,Ai.y,ri.z,0,-ri.x,si.z,0,-si.x,Ai.z,0,-Ai.x,-ri.y,ri.x,0,-si.y,si.x,0,-Ai.y,Ai.x,0];return!Ko(e,dr,fr,pr,Vs)||(e=[1,0,0,0,1,0,0,0,1],!Ko(e,dr,fr,pr,Vs))?!1:(Gs.crossVectors(ri,si),e=[Gs.x,Gs.y,Gs.z],Ko(e,dr,fr,pr,Vs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Wn=[new I,new I,new I,new I,new I,new I,new I,new I],yn=new I,Hs=new sr,dr=new I,fr=new I,pr=new I,ri=new I,si=new I,Ai=new I,Qr=new I,Vs=new I,Gs=new I,Ri=new I;function Ko(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ri.fromArray(n,s);const a=r.x*Math.abs(Ri.x)+r.y*Math.abs(Ri.y)+r.z*Math.abs(Ri.z),c=t.dot(Ri),l=e.dot(Ri),u=i.dot(Ri);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Jd=new sr,ts=new I,jo=new I;class or{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Jd.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ts.subVectors(t,this.center);const e=ts.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(ts,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ts.copy(t.center).add(jo)),this.expandByPoint(ts.copy(t.center).sub(jo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Xn=new I,Qo=new I,Ws=new I,oi=new I,ta=new I,Xs=new I,ea=new I;class Dc{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xn.copy(this.origin).addScaledVector(this.direction,e),Xn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Qo.copy(t).add(e).multiplyScalar(.5),Ws.copy(e).sub(t).normalize(),oi.copy(this.origin).sub(Qo);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Ws),a=oi.dot(this.direction),c=-oi.dot(Ws),l=oi.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*c-a,f=o*a-c,g=s*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Qo).addScaledVector(Ws,f),d}intersectSphere(t,e){Xn.subVectors(t.center,this.origin);const i=Xn.dot(this.direction),r=Xn.dot(Xn)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,r=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,r=(t.min.x-f.x)*l),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Xn)!==null}intersectTriangle(t,e,i,r,s){ta.subVectors(e,t),Xs.subVectors(i,t),ea.crossVectors(ta,Xs);let o=this.direction.dot(ea),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,t);const c=a*this.direction.dot(Xs.crossVectors(oi,Xs));if(c<0)return null;const l=a*this.direction.dot(ta.cross(oi));if(l<0||c+l>o)return null;const u=-a*oi.dot(ea);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xe{constructor(t,e,i,r,s,o,a,c,l,u,h,f,d,g,v,m){xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l,u,h,f,d,g,v,m)}set(t,e,i,r,s,o,a,c,l,u,h,f,d,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/mr.setFromMatrixColumn(t,0).length(),s=1/mr.setFromMatrixColumn(t,1).length(),o=1/mr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=o*u,d=o*h,g=a*u,v=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=d+g*l,e[5]=f-v*l,e[9]=-a*c,e[2]=v-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*u,d=c*h,g=l*u,v=l*h;e[0]=f+v*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=v+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*u,d=c*h,g=l*u,v=l*h;e[0]=f-v*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=v-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*u,d=o*h,g=a*u,v=a*h;e[0]=c*u,e[4]=g*l-d,e[8]=f*l+v,e[1]=c*h,e[5]=v*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,g=a*c,v=a*l;e[0]=c*u,e[4]=v-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*h+g,e[10]=f-v*h}else if(t.order==="XZY"){const f=o*c,d=o*l,g=a*c,v=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+v,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=v*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kd,t,jd)}lookAt(t,e,i){const r=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),ai.crossVectors(i,ln),ai.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),ai.crossVectors(i,ln)),ai.normalize(),qs.crossVectors(ln,ai),r[0]=ai.x,r[4]=qs.x,r[8]=ln.x,r[1]=ai.y,r[5]=qs.y,r[9]=ln.y,r[2]=ai.z,r[6]=qs.z,r[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],v=i[6],m=i[10],p=i[14],E=i[3],x=i[7],_=i[11],w=i[15],M=r[0],T=r[4],A=r[8],S=r[12],y=r[1],R=r[5],P=r[9],N=r[13],O=r[2],B=r[6],V=r[10],$=r[14],G=r[3],pt=r[7],D=r[11],q=r[15];return s[0]=o*M+a*y+c*O+l*G,s[4]=o*T+a*R+c*B+l*pt,s[8]=o*A+a*P+c*V+l*D,s[12]=o*S+a*N+c*$+l*q,s[1]=u*M+h*y+f*O+d*G,s[5]=u*T+h*R+f*B+d*pt,s[9]=u*A+h*P+f*V+d*D,s[13]=u*S+h*N+f*$+d*q,s[2]=g*M+v*y+m*O+p*G,s[6]=g*T+v*R+m*B+p*pt,s[10]=g*A+v*P+m*V+p*D,s[14]=g*S+v*N+m*$+p*q,s[3]=E*M+x*y+_*O+w*G,s[7]=E*T+x*R+_*B+w*pt,s[11]=E*A+x*P+_*V+w*D,s[15]=E*S+x*N+_*$+w*q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+s*c*h-r*l*h-s*a*f+i*l*f+r*a*d-i*c*d)+v*(+e*c*d-e*l*f+s*o*f-r*o*d+r*l*u-s*c*u)+m*(+e*l*h-e*a*d-s*o*h+i*o*d+s*a*u-i*l*u)+p*(-r*a*u-e*c*h+e*a*f+r*o*h-i*o*f+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],v=t[13],m=t[14],p=t[15],E=h*m*l-v*f*l+v*c*d-a*m*d-h*c*p+a*f*p,x=g*f*l-u*m*l-g*c*d+o*m*d+u*c*p-o*f*p,_=u*v*l-g*h*l+g*a*d-o*v*d-u*a*p+o*h*p,w=g*h*c-u*v*c-g*a*f+o*v*f+u*a*m-o*h*m,M=e*E+i*x+r*_+s*w;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/M;return t[0]=E*T,t[1]=(v*f*s-h*m*s-v*r*d+i*m*d+h*r*p-i*f*p)*T,t[2]=(a*m*s-v*c*s+v*r*l-i*m*l-a*r*p+i*c*p)*T,t[3]=(h*c*s-a*f*s-h*r*l+i*f*l+a*r*d-i*c*d)*T,t[4]=x*T,t[5]=(u*m*s-g*f*s+g*r*d-e*m*d-u*r*p+e*f*p)*T,t[6]=(g*c*s-o*m*s-g*r*l+e*m*l+o*r*p-e*c*p)*T,t[7]=(o*f*s-u*c*s+u*r*l-e*f*l-o*r*d+e*c*d)*T,t[8]=_*T,t[9]=(g*h*s-u*v*s-g*i*d+e*v*d+u*i*p-e*h*p)*T,t[10]=(o*v*s-g*a*s+g*i*l-e*v*l-o*i*p+e*a*p)*T,t[11]=(u*a*s-o*h*s-u*i*l+e*h*l+o*i*d-e*a*d)*T,t[12]=w*T,t[13]=(u*v*r-g*h*r+g*i*f-e*v*f-u*i*m+e*h*m)*T,t[14]=(g*a*r-o*v*r-g*i*c+e*v*c+o*i*m-e*a*m)*T,t[15]=(o*h*r-u*a*r+u*i*c-e*h*c-o*i*f+e*a*f)*T,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,h=a+a,f=s*l,d=s*u,g=s*h,v=o*u,m=o*h,p=a*h,E=c*l,x=c*u,_=c*h,w=i.x,M=i.y,T=i.z;return r[0]=(1-(v+p))*w,r[1]=(d+_)*w,r[2]=(g-x)*w,r[3]=0,r[4]=(d-_)*M,r[5]=(1-(f+p))*M,r[6]=(m+E)*M,r[7]=0,r[8]=(g+x)*T,r[9]=(m-E)*T,r[10]=(1-(f+v))*T,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=mr.set(r[0],r[1],r[2]).length();const o=mr.set(r[4],r[5],r[6]).length(),a=mr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Sn.copy(this);const l=1/s,u=1/o,h=1/a;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=h,Sn.elements[9]*=h,Sn.elements[10]*=h,e.setFromRotationMatrix(Sn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=Un,c=!1){const l=this.elements,u=2*s/(e-t),h=2*s/(i-r),f=(e+t)/(e-t),d=(i+r)/(i-r);let g,v;if(c)g=s/(o-s),v=o*s/(o-s);else if(a===Un)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===To)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=Un,c=!1){const l=this.elements,u=2/(e-t),h=2/(i-r),f=-(e+t)/(e-t),d=-(i+r)/(i-r);let g,v;if(c)g=1/(o-s),v=o/(o-s);else if(a===Un)g=-2/(o-s),v=-(o+s)/(o-s);else if(a===To)g=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const mr=new I,Sn=new xe,Kd=new I(0,0,0),jd=new I(1,1,1),ai=new I,qs=new I,ln=new I,gl=new xe,_l=new Ds;class Bn{constructor(t=0,e=0,i=0,r=Bn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(re(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-re(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(re(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return gl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _l.setFromEuler(this),this.setFromQuaternion(_l,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bn.DEFAULT_ORDER="XYZ";class Hu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Qd=0;const xl=new I,gr=new Ds,qn=new xe,Ys=new I,es=new I,tf=new I,ef=new Ds,vl=new I(1,0,0),Ml=new I(0,1,0),yl=new I(0,0,1),Sl={type:"added"},nf={type:"removed"},_r={type:"childadded",child:null},na={type:"childremoved",child:null};class ye extends Gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new I,e=new Bn,i=new Ds,r=new I(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xe},normalMatrix:{value:new Qt}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gr.setFromAxisAngle(t,e),this.quaternion.multiply(gr),this}rotateOnWorldAxis(t,e){return gr.setFromAxisAngle(t,e),this.quaternion.premultiply(gr),this}rotateX(t){return this.rotateOnAxis(vl,t)}rotateY(t){return this.rotateOnAxis(Ml,t)}rotateZ(t){return this.rotateOnAxis(yl,t)}translateOnAxis(t,e){return xl.copy(t).applyQuaternion(this.quaternion),this.position.add(xl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vl,t)}translateY(t){return this.translateOnAxis(Ml,t)}translateZ(t){return this.translateOnAxis(yl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ys.copy(t):Ys.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(es,Ys,this.up):qn.lookAt(Ys,es,this.up),this.quaternion.setFromRotationMatrix(qn),r&&(qn.extractRotation(r.matrixWorld),gr.setFromRotationMatrix(qn),this.quaternion.premultiply(gr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sl),_r.child=t,this.dispatchEvent(_r),_r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nf),na.child=t,this.dispatchEvent(na),na.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sl),_r.child=t,this.dispatchEvent(_r),_r.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,t,tf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,ef,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(t.shapes,h)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}ye.DEFAULT_UP=new I(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new I,Yn=new I,ia=new I,$n=new I,xr=new I,vr=new I,El=new I,ra=new I,sa=new I,oa=new I,aa=new fe,ca=new fe,la=new fe;class bn{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),En.subVectors(t,e),r.cross(En);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){En.subVectors(r,e),Yn.subVectors(i,e),ia.subVectors(t,e);const o=En.dot(En),a=En.dot(Yn),c=En.dot(ia),l=Yn.dot(Yn),u=Yn.dot(ia),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(t,e,i,r,s,o,a,c){return this.getBarycoord(t,e,i,r,$n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,$n.x),c.addScaledVector(o,$n.y),c.addScaledVector(a,$n.z),c)}static getInterpolatedAttribute(t,e,i,r,s,o){return aa.setScalar(0),ca.setScalar(0),la.setScalar(0),aa.fromBufferAttribute(t,e),ca.fromBufferAttribute(t,i),la.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(aa,s.x),o.addScaledVector(ca,s.y),o.addScaledVector(la,s.z),o}static isFrontFacing(t,e,i,r){return En.subVectors(i,e),Yn.subVectors(t,e),En.cross(Yn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return En.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),En.cross(Yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return bn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return bn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;xr.subVectors(r,i),vr.subVectors(s,i),ra.subVectors(t,i);const c=xr.dot(ra),l=vr.dot(ra);if(c<=0&&l<=0)return e.copy(i);sa.subVectors(t,r);const u=xr.dot(sa),h=vr.dot(sa);if(u>=0&&h<=u)return e.copy(r);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(xr,o);oa.subVectors(t,s);const d=xr.dot(oa),g=vr.dot(oa);if(g>=0&&d<=g)return e.copy(s);const v=d*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(vr,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return El.subVectors(s,r),a=(h-u)/(h-u+(d-g)),e.copy(r).addScaledVector(El,a);const p=1/(m+v+f);return o=v*p,a=f*p,e.copy(i).addScaledVector(xr,o).addScaledVector(vr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},$s={h:0,s:0,l:0};function ua(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class ie{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=ue.workingColorSpace){return this.r=t,this.g=e,this.b=i,ue.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=ue.workingColorSpace){if(t=Pc(t,1),e=re(e,0,1),i=re(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=ua(o,s,t+1/3),this.g=ua(o,s,t),this.b=ua(o,s,t-1/3)}return ue.colorSpaceToWorking(this,r),this}setStyle(t,e=je){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=je){const i=Vu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ni(t.r),this.g=ni(t.g),this.b=ni(t.b),this}copyLinearToSRGB(t){return this.r=Ir(t.r),this.g=Ir(t.g),this.b=Ir(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=je){return ue.workingToColorSpace(Ge.copy(this),t),Math.round(re(Ge.r*255,0,255))*65536+Math.round(re(Ge.g*255,0,255))*256+Math.round(re(Ge.b*255,0,255))}getHexString(t=je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.workingToColorSpace(Ge.copy(this),e);const i=Ge.r,r=Ge.g,s=Ge.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ue.workingColorSpace){return ue.workingToColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=je){ue.workingToColorSpace(Ge.copy(this),t);const e=Ge.r,i=Ge.g,r=Ge.b;return t!==je?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL($s);const i=us(ci.h,$s.h,e),r=us(ci.s,$s.s,e),s=us(ci.l,$s.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ge=new ie;ie.NAMES=Vu;let rf=0;class ar extends Gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=rr(),this.name="",this.type="Material",this.blending=Dr,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ra,this.blendDst=Ca,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=Fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ur,this.stencilZFail=ur,this.stencilZPass=ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Dr&&(i.blending=this.blending),this.side!==xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ra&&(i.blendSrc=this.blendSrc),this.blendDst!==Ca&&(i.blendDst=this.blendDst),this.blendEquation!==Oi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==al&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ur&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ur&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ur&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class vi extends ar{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Au,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const De=new I,Zs=new St;let sf=0;class ke{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=cl,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Zs.fromBufferAttribute(this,e),Zs.applyMatrix3(t),this.setXY(e,Zs.x,Zs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ar(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Je(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ar(e,this.array)),e}setX(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ar(e,this.array)),e}setY(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ar(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ar(e,this.array)),e}setW(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),i=Je(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),i=Je(i,this.array),r=Je(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),i=Je(i,this.array),r=Je(r,this.array),s=Je(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cl&&(t.usage=this.usage),t}}class Gu extends ke{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Wu extends ke{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class qt extends ke{constructor(t,e,i){super(new Float32Array(t),e,i)}}let of=0;const gn=new xe,ha=new ye,Mr=new I,un=new sr,ns=new sr,ze=new I;class pe extends Gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bu(t)?Wu:Gu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Qt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,i){return gn.makeTranslation(t,e,i),this.applyMatrix4(gn),this}scale(t,e,i){return gn.makeScale(t,e,i),this.applyMatrix4(gn),this}lookAt(t){return ha.lookAt(t),ha.updateMatrix(),this.applyMatrix4(ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new qt(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];un.setFromBufferAttribute(s),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new or);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];ns.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(un.min,ns.min),un.expandByPoint(ze),ze.addVectors(un.max,ns.max),un.expandByPoint(ze)):(un.expandByPoint(ns.min),un.expandByPoint(ns.max))}un.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)ze.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(ze));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)ze.fromBufferAttribute(a,l),c&&(Mr.fromBufferAttribute(t,l),ze.add(Mr)),r=Math.max(r,i.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ke(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<i.count;A++)a[A]=new I,c[A]=new I;const l=new I,u=new I,h=new I,f=new St,d=new St,g=new St,v=new I,m=new I;function p(A,S,y){l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,y),f.fromBufferAttribute(s,A),d.fromBufferAttribute(s,S),g.fromBufferAttribute(s,y),u.sub(l),h.sub(l),d.sub(f),g.sub(f);const R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(R),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(R),a[A].add(v),a[S].add(v),a[y].add(v),c[A].add(m),c[S].add(m),c[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let A=0,S=E.length;A<S;++A){const y=E[A],R=y.start,P=y.count;for(let N=R,O=R+P;N<O;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const x=new I,_=new I,w=new I,M=new I;function T(A){w.fromBufferAttribute(r,A),M.copy(w);const S=a[A];x.copy(S),x.sub(w.multiplyScalar(w.dot(S))).normalize(),_.crossVectors(M,S);const R=_.dot(c[A])<0?-1:1;o.setXYZW(A,x.x,x.y,x.z,R)}for(let A=0,S=E.length;A<S;++A){const y=E[A],R=y.start,P=y.count;for(let N=R,O=R+P;N<O;N+=3)T(t.getX(N+0)),T(t.getX(N+1)),T(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new I,s=new I,o=new I,a=new I,c=new I,l=new I,u=new I,h=new I;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let d=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?d=c[v]*a.data.stride+a.offset:d=c[v]*u;for(let p=0;p<u;p++)f[g++]=l[d++]}return new ke(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new pe,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,i);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=t(f,i);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wl=new xe,Ci=new Dc,Js=new or,bl=new I,Ks=new I,js=new I,Qs=new I,da=new I,to=new I,Tl=new I,eo=new I;class Jt extends ye{constructor(t=new pe,e=new vi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){to.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(da.fromBufferAttribute(h,t),o?to.addScaledVector(da,u):to.addScaledVector(da.sub(e),u))}e.add(to)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Js.copy(i.boundingSphere),Js.applyMatrix4(s),Ci.copy(t.ray).recast(t.near),!(Js.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(Js,bl)===null||Ci.origin.distanceToSquared(bl)>(t.far-t.near)**2))&&(wl.copy(s).invert(),Ci.copy(t.ray).applyMatrix4(wl),!(i.boundingBox!==null&&Ci.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ci)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],E=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=E,w=x;_<w;_+=3){const M=a.getX(_),T=a.getX(_+1),A=a.getX(_+2);r=no(this,p,t,i,l,u,h,M,T,A),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const E=a.getX(m),x=a.getX(m+1),_=a.getX(m+2);r=no(this,o,t,i,l,u,h,E,x,_),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],E=Math.max(m.start,d.start),x=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let _=E,w=x;_<w;_+=3){const M=_,T=_+1,A=_+2;r=no(this,p,t,i,l,u,h,M,T,A),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const E=m,x=m+1,_=m+2;r=no(this,o,t,i,l,u,h,E,x,_),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function af(n,t,e,i,r,s,o,a){let c;if(t.side===nn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side===xi,a),c===null)return null;eo.copy(a),eo.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(eo);return l<e.near||l>e.far?null:{distance:l,point:eo.clone(),object:n}}function no(n,t,e,i,r,s,o,a,c,l){n.getVertexPosition(a,Ks),n.getVertexPosition(c,js),n.getVertexPosition(l,Qs);const u=af(n,t,e,i,Ks,js,Qs,Tl);if(u){const h=new I;bn.getBarycoord(Tl,Ks,js,Qs,h),r&&(u.uv=bn.getInterpolatedAttribute(r,a,c,l,h,new St)),s&&(u.uv1=bn.getInterpolatedAttribute(s,a,c,l,h,new St)),o&&(u.normal=bn.getInterpolatedAttribute(o,a,c,l,h,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new I,materialIndex:0};bn.getNormal(Ks,js,Qs,f.normal),u.face=f,u.barycoord=h}return u}class Te extends pe{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,r,o,2),g("x","z","y",1,-1,t,i,-e,r,o,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(h,2));function g(v,m,p,E,x,_,w,M,T,A,S){const y=_/T,R=w/A,P=_/2,N=w/2,O=M/2,B=T+1,V=A+1;let $=0,G=0;const pt=new I;for(let D=0;D<V;D++){const q=D*R-N;for(let ot=0;ot<B;ot++){const rt=ot*y-P;pt[v]=rt*E,pt[m]=q*x,pt[p]=O,l.push(pt.x,pt.y,pt.z),pt[v]=0,pt[m]=0,pt[p]=M>0?1:-1,u.push(pt.x,pt.y,pt.z),h.push(ot/T),h.push(1-D/A),$+=1}}for(let D=0;D<A;D++)for(let q=0;q<T;q++){const ot=f+q+B*D,rt=f+q+B*(D+1),bt=f+(q+1)+B*(D+1),vt=f+(q+1)+B*D;c.push(ot,rt,vt),c.push(rt,bt,vt),G+=6}a.addGroup(d,G,S),d+=G,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Te(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function kr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Ke(n){const t={};for(let e=0;e<n.length;e++){const i=kr(n[e]);for(const r in i)t[r]=i[r]}return t}function cf(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Xu(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}const lf={clone:kr,merge:Ke};var uf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends ar{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uf,this.fragmentShader=hf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=kr(t.uniforms),this.uniformsGroups=cf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class qu extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const li=new I,Al=new St,Rl=new St;class dn extends qu{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ys*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ls*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(li.x,li.y).multiplyScalar(-t/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(li.x,li.y).multiplyScalar(-t/li.z)}getViewSize(t,e){return this.getViewBounds(t,Al,Rl),e.subVectors(Rl,Al)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ls*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const yr=-90,Sr=1;class df extends ye{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new dn(yr,Sr,t,e);r.layers=this.layers,this.add(r);const s=new dn(yr,Sr,t,e);s.layers=this.layers,this.add(s);const o=new dn(yr,Sr,t,e);o.layers=this.layers,this.add(o);const a=new dn(yr,Sr,t,e);a.layers=this.layers,this.add(a);const c=new dn(yr,Sr,t,e);c.layers=this.layers,this.add(c);const l=new dn(yr,Sr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===Un)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===To)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Yu extends qe{constructor(t=[],e=Or,i,r,s,o,a,c,l,u){super(t,e,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ff extends Ji{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Yu(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Te(5,5,5),s=new kn({name:"CubemapFromEquirect",uniforms:kr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:gi});s.uniforms.tEquirect.value=e;const o=new Jt(r,s),a=e.minFilter;return e.minFilter===Gi&&(e.minFilter=Dn),new df(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}class jt extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pf={type:"move"};class fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pf)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new jt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Ic{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new ie(t),this.near=e,this.far=i}clone(){return new Ic(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class mf extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class gf extends qe{constructor(t=null,e=1,i=1,r,s,o,a,c,l=fn,u=fn,h,f){super(null,o,a,c,l,u,r,s,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cl extends ke{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Er=new xe,Pl=new xe,io=[],Ll=new sr,_f=new xe,is=new Jt,rs=new or;class Ki extends Jt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Cl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,_f)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new sr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Er),Ll.copy(t.boundingBox).applyMatrix4(Er),this.boundingBox.union(Ll)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new or),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Er),rs.copy(t.boundingSphere).applyMatrix4(Er),this.boundingSphere.union(rs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=t*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(t,e){const i=this.matrixWorld,r=this.count;if(is.geometry=this.geometry,is.material=this.material,is.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rs.copy(this.boundingSphere),rs.applyMatrix4(i),t.ray.intersectsSphere(rs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Er),Pl.multiplyMatrices(i,Er),is.matrixWorld=Pl,is.raycast(t,io);for(let o=0,a=io.length;o<a;o++){const c=io[o];c.instanceId=s,c.object=this,e.push(c)}io.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Cl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new gf(new Float32Array(r*this.count),r,this.count,Tc,In));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*t;s[c]=a,s.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const pa=new I,xf=new I,vf=new Qt;class Ni{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=pa.subVectors(i,e).cross(xf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(pa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||vf.getNormalMatrix(t),r=this.coplanarPoint(pa).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new or,Mf=new St(.5,.5),ro=new I;class Uc{constructor(t=new Ni,e=new Ni,i=new Ni,r=new Ni,s=new Ni,o=new Ni){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Un,i=!1){const r=this.planes,s=t.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],h=s[5],f=s[6],d=s[7],g=s[8],v=s[9],m=s[10],p=s[11],E=s[12],x=s[13],_=s[14],w=s[15];if(r[0].setComponents(l-o,d-u,p-g,w-E).normalize(),r[1].setComponents(l+o,d+u,p+g,w+E).normalize(),r[2].setComponents(l+a,d+h,p+v,w+x).normalize(),r[3].setComponents(l-a,d-h,p-v,w-x).normalize(),i)r[4].setComponents(c,f,m,_).normalize(),r[5].setComponents(l-c,d-f,p-m,w-_).normalize();else if(r[4].setComponents(l-c,d-f,p-m,w-_).normalize(),e===Un)r[5].setComponents(l+c,d+f,p+m,w+_).normalize();else if(e===To)r[5].setComponents(c,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(t){Pi.center.set(0,0,0);const e=Mf.distanceTo(t.center);return Pi.radius=.7071067811865476+e,Pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(ro.x=r.normal.x>0?t.max.x:t.min.x,ro.y=r.normal.y>0?t.max.y:t.min.y,ro.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ro)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Nc extends ar{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ro=new I,Co=new I,Dl=new xe,ss=new Dc,so=new or,ma=new I,Il=new I;class $u extends ye{constructor(t=new pe,e=new Nc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Ro.fromBufferAttribute(e,r-1),Co.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Ro.distanceTo(Co);t.setAttribute("lineDistance",new qt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),so.copy(i.boundingSphere),so.applyMatrix4(r),so.radius+=s,t.ray.intersectsSphere(so)===!1)return;Dl.copy(r).invert(),ss.copy(t.ray).applyMatrix4(Dl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=d,m=g-1;v<m;v+=l){const p=u.getX(v),E=u.getX(v+1),x=oo(this,t,ss,c,p,E,v);x&&e.push(x)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(d),p=oo(this,t,ss,c,v,m,g-1);p&&e.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=d,m=g-1;v<m;v+=l){const p=oo(this,t,ss,c,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){const v=oo(this,t,ss,c,g-1,d,g-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function oo(n,t,e,i,r,s,o){const a=n.geometry.attributes.position;if(Ro.fromBufferAttribute(a,r),Co.fromBufferAttribute(a,s),e.distanceSqToSegment(Ro,Co,ma,Il)>i)return;ma.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(ma);if(!(l<t.near||l>t.far))return{distance:l,point:Il.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Ul=new I,Nl=new I;class yf extends $u{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)Ul.fromBufferAttribute(e,r),Nl.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Ul.distanceTo(Nl);t.setAttribute("lineDistance",new qt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Wr extends ar{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Fl=new xe,pc=new Dc,ao=new or,co=new I;class Is extends ye{constructor(t=new pe,e=new Wr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ao.copy(i.boundingSphere),ao.applyMatrix4(r),ao.radius+=s,t.ray.intersectsSphere(ao)===!1)return;Fl.copy(r).invert(),pc.copy(t.ray).applyMatrix4(Fl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,h=i.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,v=d;g<v;g++){const m=l.getX(g);co.fromBufferAttribute(h,m),Ol(co,m,c,r,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,v=d;g<v;g++)co.fromBufferAttribute(h,g),Ol(co,g,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ol(n,t,e,i,r,s,o){const a=pc.distanceSqToPoint(n);if(a<e){const c=new I;pc.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Us extends qe{constructor(t,e,i,r,s,o,a,c,l){super(t,e,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zu extends qe{constructor(t,e,i=Zi,r,s,o,a=fn,c=fn,l,u=vs,h=1){if(u!==vs&&u!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:h};super(f,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Lc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ju extends qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class hs extends pe{constructor(t=1,e=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:r,heightSegments:s},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],c=[],l=[],u=e/2,h=Math.PI/2*t,f=e,d=2*h+f,g=i*2+s,v=r+1,m=new I,p=new I;for(let E=0;E<=g;E++){let x=0,_=0,w=0,M=0;if(E<=i){const S=E/i,y=S*Math.PI/2;_=-u-t*Math.cos(y),w=t*Math.sin(y),M=-t*Math.cos(y),x=S*h}else if(E<=i+s){const S=(E-i)/s;_=-u+S*e,w=t,M=0,x=h+S*f}else{const S=(E-i-s)/i,y=S*Math.PI/2;_=u+t*Math.sin(y),w=t*Math.cos(y),M=t*Math.sin(y),x=h+f+S*h}const T=Math.max(0,Math.min(1,x/d));let A=0;E===0?A=.5/r:E===g&&(A=-.5/r);for(let S=0;S<=r;S++){const y=S/r,R=y*Math.PI*2,P=Math.sin(R),N=Math.cos(R);p.x=-w*N,p.y=_,p.z=w*P,a.push(p.x,p.y,p.z),m.set(-w*N,M,w*P),m.normalize(),c.push(m.x,m.y,m.z),l.push(y+A,T)}if(E>0){const S=(E-1)*v;for(let y=0;y<r;y++){const R=S+y,P=S+y+1,N=E*v+y,O=E*v+y+1;o.push(R,P,N),o.push(P,O,N)}}}this.setIndex(o),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hs(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Ns extends pe{constructor(t=1,e=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:r},e=Math.max(3,e);const s=[],o=[],a=[],c=[],l=new I,u=new St;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const d=i+h/e*r;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new qt(o,3)),this.setAttribute("normal",new qt(a,3)),this.setAttribute("uv",new qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ns(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ae extends pe{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],d=[];let g=0;const v=[],m=i/2;let p=0;E(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new qt(h,3)),this.setAttribute("normal",new qt(f,3)),this.setAttribute("uv",new qt(d,2));function E(){const _=new I,w=new I;let M=0;const T=(e-t)/i;for(let A=0;A<=s;A++){const S=[],y=A/s,R=y*(e-t)+t;for(let P=0;P<=r;P++){const N=P/r,O=N*c+a,B=Math.sin(O),V=Math.cos(O);w.x=R*B,w.y=-y*i+m,w.z=R*V,h.push(w.x,w.y,w.z),_.set(B,T,V).normalize(),f.push(_.x,_.y,_.z),d.push(N,1-y),S.push(g++)}v.push(S)}for(let A=0;A<r;A++)for(let S=0;S<s;S++){const y=v[S][A],R=v[S+1][A],P=v[S+1][A+1],N=v[S][A+1];(t>0||S!==0)&&(u.push(y,R,N),M+=3),(e>0||S!==s-1)&&(u.push(R,P,N),M+=3)}l.addGroup(p,M,0),p+=M}function x(_){const w=g,M=new St,T=new I;let A=0;const S=_===!0?t:e,y=_===!0?1:-1;for(let P=1;P<=r;P++)h.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),g++;const R=g;for(let P=0;P<=r;P++){const O=P/r*c+a,B=Math.cos(O),V=Math.sin(O);T.x=S*V,T.y=m*y,T.z=S*B,h.push(T.x,T.y,T.z),f.push(0,y,0),M.x=B*.5+.5,M.y=V*.5*y+.5,d.push(M.x,M.y),g++}for(let P=0;P<r;P++){const N=w+P,O=R+P;_===!0?u.push(O,O+1,N):u.push(O+1,O,N),A+=3}l.addGroup(p,A,_===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ae(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ce extends ae{constructor(t=1,e=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ce(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fs extends pe{constructor(t=[],e=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:r};const s=[],o=[];a(r),l(i),u(),this.setAttribute("position",new qt(s,3)),this.setAttribute("normal",new qt(s.slice(),3)),this.setAttribute("uv",new qt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const x=new I,_=new I,w=new I;for(let M=0;M<e.length;M+=3)d(e[M+0],x),d(e[M+1],_),d(e[M+2],w),c(x,_,w,E)}function c(E,x,_,w){const M=w+1,T=[];for(let A=0;A<=M;A++){T[A]=[];const S=E.clone().lerp(_,A/M),y=x.clone().lerp(_,A/M),R=M-A;for(let P=0;P<=R;P++)P===0&&A===M?T[A][P]=S:T[A][P]=S.clone().lerp(y,P/R)}for(let A=0;A<M;A++)for(let S=0;S<2*(M-A)-1;S++){const y=Math.floor(S/2);S%2===0?(f(T[A][y+1]),f(T[A+1][y]),f(T[A][y])):(f(T[A][y+1]),f(T[A+1][y+1]),f(T[A+1][y]))}}function l(E){const x=new I;for(let _=0;_<s.length;_+=3)x.x=s[_+0],x.y=s[_+1],x.z=s[_+2],x.normalize().multiplyScalar(E),s[_+0]=x.x,s[_+1]=x.y,s[_+2]=x.z}function u(){const E=new I;for(let x=0;x<s.length;x+=3){E.x=s[x+0],E.y=s[x+1],E.z=s[x+2];const _=m(E)/2/Math.PI+.5,w=p(E)/Math.PI+.5;o.push(_,1-w)}g(),h()}function h(){for(let E=0;E<o.length;E+=6){const x=o[E+0],_=o[E+2],w=o[E+4],M=Math.max(x,_,w),T=Math.min(x,_,w);M>.9&&T<.1&&(x<.2&&(o[E+0]+=1),_<.2&&(o[E+2]+=1),w<.2&&(o[E+4]+=1))}}function f(E){s.push(E.x,E.y,E.z)}function d(E,x){const _=E*3;x.x=t[_+0],x.y=t[_+1],x.z=t[_+2]}function g(){const E=new I,x=new I,_=new I,w=new I,M=new St,T=new St,A=new St;for(let S=0,y=0;S<s.length;S+=9,y+=6){E.set(s[S+0],s[S+1],s[S+2]),x.set(s[S+3],s[S+4],s[S+5]),_.set(s[S+6],s[S+7],s[S+8]),M.set(o[y+0],o[y+1]),T.set(o[y+2],o[y+3]),A.set(o[y+4],o[y+5]),w.copy(E).add(x).add(_).divideScalar(3);const R=m(w);v(M,y+0,E,R),v(T,y+2,x,R),v(A,y+4,_,R)}}function v(E,x,_,w){w<0&&E.x===1&&(o[x]=E.x-1),_.x===0&&_.z===0&&(o[x]=w/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fs(t.vertices,t.indices,t.radius,t.details)}}class zo extends Fs{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new zo(t.radius,t.detail)}}class Gn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(r),e.push(s),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let r=0;const s=i.length;let o;e?o=e:o=t*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,d=(o-u)/f;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=e||(o.isVector2?new St:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new I,r=[],s=[],o=[],a=new I,c=new xe;for(let d=0;d<=t;d++){const g=d/t;r[d]=this.getTangentAt(g,new I)}s[0]=new I,o[0]=new I;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(re(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(re(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Fc extends Gn{constructor(t=0,e=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new St){const i=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Sf extends Fc{constructor(t,e,i,r,s,o){super(t,e,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Oc(){let n=0,t=0,e=0,i=0;function r(s,o,a,c){n=s,t=a,e=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,h){let f=(o-s)/l-(a-s)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return n+t*s+e*o+i*a}}}const lo=new I,ga=new Oc,_a=new Oc,xa=new Oc;class Ku extends Gn{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new I){const i=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(lo.subVectors(r[0],r[1]).add(r[0]),l=lo);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(lo.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=lo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),d),v=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),ga.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,v,m),_a.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,v,m),xa.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(ga.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),_a.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),xa.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return i.set(ga.calc(c),_a.calc(c),xa.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new I().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function zl(n,t,e,i,r){const s=(i-t)*.5,o=(r-e)*.5,a=n*n,c=n*a;return(2*e-2*i+s+o)*c+(-3*e+3*i-2*s-o)*a+s*n+e}function Ef(n,t){const e=1-n;return e*e*t}function wf(n,t){return 2*(1-n)*n*t}function bf(n,t){return n*n*t}function ds(n,t,e,i){return Ef(n,t)+wf(n,e)+bf(n,i)}function Tf(n,t){const e=1-n;return e*e*e*t}function Af(n,t){const e=1-n;return 3*e*e*n*t}function Rf(n,t){return 3*(1-n)*n*n*t}function Cf(n,t){return n*n*n*t}function fs(n,t,e,i,r){return Tf(n,t)+Af(n,e)+Rf(n,i)+Cf(n,r)}class ju extends Gn{constructor(t=new St,e=new St,i=new St,r=new St){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new St){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(fs(t,r.x,s.x,o.x,a.x),fs(t,r.y,s.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Pf extends Gn{constructor(t=new I,e=new I,i=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new I){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(fs(t,r.x,s.x,o.x,a.x),fs(t,r.y,s.y,o.y,a.y),fs(t,r.z,s.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Qu extends Gn{constructor(t=new St,e=new St){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new St){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new St){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lf extends Gn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class th extends Gn{constructor(t=new St,e=new St,i=new St){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new St){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(ds(t,r.x,s.x,o.x),ds(t,r.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class eh extends Gn{constructor(t=new I,e=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new I){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(ds(t,r.x,s.x,o.x),ds(t,r.y,s.y,o.y),ds(t,r.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nh extends Gn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new St){const i=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(zl(a,c.x,l.x,u.x,h.x),zl(a,c.y,l.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new St().fromArray(r))}return this}}var Po=Object.freeze({__proto__:null,ArcCurve:Sf,CatmullRomCurve3:Ku,CubicBezierCurve:ju,CubicBezierCurve3:Pf,EllipseCurve:Fc,LineCurve:Qu,LineCurve3:Lf,QuadraticBezierCurve:th,QuadraticBezierCurve3:eh,SplineCurve:nh});class Df extends Gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Po[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,r=this.curves.length;i<r;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(new Po[r.type]().fromJSON(r))}return this}}class mc extends Df{constructor(t){super(),this.type="Path",this.currentPoint=new St,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Qu(this.currentPoint.clone(),new St(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,r){const s=new th(this.currentPoint.clone(),new St(t,e),new St(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(t,e,i,r,s,o){const a=new ju(this.currentPoint.clone(),new St(t,e),new St(i,r),new St(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new nh(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,r,s,o),this}absarc(t,e,i,r,s,o){return this.absellipse(t,e,i,i,r,s,o),this}ellipse(t,e,i,r,s,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,i,r,s,o,a,c),this}absellipse(t,e,i,r,s,o,a,c){const l=new Fc(t,e,i,r,s,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Hr extends mc{constructor(t){super(t),this.uuid=rr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,r=this.holes.length;i<r;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(new mc().fromJSON(r))}return this}}function If(n,t,e=2){const i=t&&t.length,r=i?t[0]*e:n.length;let s=ih(n,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l;if(i&&(s=zf(n,t,s,e)),n.length>80*e){a=1/0,c=1/0;let u=-1/0,h=-1/0;for(let f=e;f<r;f+=e){const d=n[f],g=n[f+1];d<a&&(a=d),g<c&&(c=g),d>u&&(u=d),g>h&&(h=g)}l=Math.max(u-a,h-c),l=l!==0?32767/l:0}return Es(s,o,e,a,c,l,0),o}function ih(n,t,e,i,r){let s;if(r===Zf(n,t,e,i)>0)for(let o=t;o<e;o+=i)s=Bl(o/i|0,n[o],n[o+1],s);else for(let o=e-i;o>=t;o-=i)s=Bl(o/i|0,n[o],n[o+1],s);return s&&Vr(s,s.next)&&(bs(s),s=s.next),s}function ji(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Vr(e,e.next)||be(e.prev,e,e.next)===0)){if(bs(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Es(n,t,e,i,r,s,o){if(!n)return;!o&&s&&Gf(n,i,r,s);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(s?Nf(n,i,r,s):Uf(n)){t.push(c.i,n.i,l.i),bs(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Ff(ji(n),t),Es(n,t,e,i,r,s,2)):o===2&&Of(n,t,e,i,r,s):Es(ji(n),t,e,i,r,s,1);break}}}function Uf(n){const t=n.prev,e=n,i=n.next;if(be(t,e,i)>=0)return!1;const r=t.x,s=e.x,o=i.x,a=t.y,c=e.y,l=i.y,u=Math.min(r,s,o),h=Math.min(a,c,l),f=Math.max(r,s,o),d=Math.max(a,c,l);let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&as(r,a,s,c,o,l,g.x,g.y)&&be(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Nf(n,t,e,i){const r=n.prev,s=n,o=n.next;if(be(r,s,o)>=0)return!1;const a=r.x,c=s.x,l=o.x,u=r.y,h=s.y,f=o.y,d=Math.min(a,c,l),g=Math.min(u,h,f),v=Math.max(a,c,l),m=Math.max(u,h,f),p=gc(d,g,t,e,i),E=gc(v,m,t,e,i);let x=n.prevZ,_=n.nextZ;for(;x&&x.z>=p&&_&&_.z<=E;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&as(a,u,c,h,l,f,x.x,x.y)&&be(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==r&&_!==o&&as(a,u,c,h,l,f,_.x,_.y)&&be(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&as(a,u,c,h,l,f,x.x,x.y)&&be(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=E;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==r&&_!==o&&as(a,u,c,h,l,f,_.x,_.y)&&be(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Ff(n,t){let e=n;do{const i=e.prev,r=e.next.next;!Vr(i,r)&&sh(i,e,e.next,r)&&ws(i,r)&&ws(r,i)&&(t.push(i.i,e.i,r.i),bs(e),bs(e.next),e=n=r),e=e.next}while(e!==n);return ji(e)}function Of(n,t,e,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&qf(o,a)){let c=oh(o,a);o=ji(o,o.next),c=ji(c,c.next),Es(o,t,e,i,r,s,0),Es(c,t,e,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function zf(n,t,e,i){const r=[];for(let s=0,o=t.length;s<o;s++){const a=t[s]*i,c=s<o-1?t[s+1]*i:n.length,l=ih(n,a,c,i,!1);l===l.next&&(l.steiner=!0),r.push(Xf(l))}r.sort(Bf);for(let s=0;s<r.length;s++)e=kf(r[s],e);return e}function Bf(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=i-r}return e}function kf(n,t){const e=Hf(n,t);if(!e)return t;const i=oh(e,n);return ji(i,i.next),ji(e,e.next)}function Hf(n,t){let e=t;const i=n.x,r=n.y;let s=-1/0,o;if(Vr(n,e))return e;do{if(Vr(n,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const h=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=i&&h>s&&(s=h,o=e.x<e.next.x?e:e.next,h===i))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;e=o;do{if(i>=e.x&&e.x>=c&&i!==e.x&&rh(r<l?i:s,r,c,l,r<l?s:i,r,e.x,e.y)){const h=Math.abs(r-e.y)/(i-e.x);ws(e,n)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&Vf(o,e)))&&(o=e,u=h)}e=e.next}while(e!==a);return o}function Vf(n,t){return be(n.prev,n,t.prev)<0&&be(t.next,n,n.next)<0}function Gf(n,t,e,i){let r=n;do r.z===0&&(r.z=gc(r.x,r.y,t,e,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Wf(r)}function Wf(n){let t,e=1;do{let i=n,r;n=null;let s=null;for(t=0;i;){t++;let o=i,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,e*=2}while(t>1);return n}function gc(n,t,e,i,r){return n=(n-e)*r|0,t=(t-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Xf(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function rh(n,t,e,i,r,s,o,a){return(r-o)*(t-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(i-a)}function as(n,t,e,i,r,s,o,a){return!(n===o&&t===a)&&rh(n,t,e,i,r,s,o,a)}function qf(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Yf(n,t)&&(ws(n,t)&&ws(t,n)&&$f(n,t)&&(be(n.prev,n,t.prev)||be(n,t.prev,t))||Vr(n,t)&&be(n.prev,n,n.next)>0&&be(t.prev,t,t.next)>0)}function be(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Vr(n,t){return n.x===t.x&&n.y===t.y}function sh(n,t,e,i){const r=ho(be(n,t,e)),s=ho(be(n,t,i)),o=ho(be(e,i,n)),a=ho(be(e,i,t));return!!(r!==s&&o!==a||r===0&&uo(n,e,t)||s===0&&uo(n,i,t)||o===0&&uo(e,n,i)||a===0&&uo(e,t,i))}function uo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function ho(n){return n>0?1:n<0?-1:0}function Yf(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&sh(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function ws(n,t){return be(n.prev,n,n.next)<0?be(n,t,n.next)>=0&&be(n,n.prev,t)>=0:be(n,t,n.prev)<0||be(n,n.next,t)<0}function $f(n,t){let e=n,i=!1;const r=(n.x+t.x)/2,s=(n.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function oh(n,t){const e=_c(n.i,n.x,n.y),i=_c(t.i,t.x,t.y),r=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=r,r.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function Bl(n,t,e,i){const r=_c(n,t,e);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function bs(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function _c(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Zf(n,t,e,i){let r=0;for(let s=t,o=e-i;s<e;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class Jf{static triangulate(t,e,i=2){return If(t,e,i)}}class ti{static area(t){const e=t.length;let i=0;for(let r=e-1,s=0;s<e;r=s++)i+=t[r].x*t[s].y-t[s].x*t[r].y;return i*.5}static isClockWise(t){return ti.area(t)<0}static triangulateShape(t,e){const i=[],r=[],s=[];kl(t),Hl(i,t);let o=t.length;e.forEach(kl);for(let c=0;c<e.length;c++)r.push(o),o+=e[c].length,Hl(i,e[c]);const a=Jf.triangulate(i,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function kl(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Hl(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class zc extends pe{constructor(t=new Hr([new St(.5,.5),new St(-.5,.5),new St(-.5,-.5),new St(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,r=[],s=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new qt(r,3)),this.setAttribute("uv",new qt(s,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:Kf;let x,_=!1,w,M,T,A;p&&(x=p.getSpacedPoints(u),_=!0,f=!1,w=p.computeFrenetFrames(u,!1),M=new I,T=new I,A=new I),f||(m=0,d=0,g=0,v=0);const S=a.extractPoints(l);let y=S.shape;const R=S.holes;if(!ti.isClockWise(y)){y=y.reverse();for(let ht=0,it=R.length;ht<it;ht++){const nt=R[ht];ti.isClockWise(nt)&&(R[ht]=nt.reverse())}}function N(ht){const nt=10000000000000001e-36;let tt=ht[0];for(let Mt=1;Mt<=ht.length;Mt++){const mt=Mt%ht.length,yt=ht[mt],Zt=yt.x-tt.x,Xt=yt.y-tt.y,L=Zt*Zt+Xt*Xt,b=Math.max(Math.abs(yt.x),Math.abs(yt.y),Math.abs(tt.x),Math.abs(tt.y)),k=nt*b*b;if(L<=k){ht.splice(mt,1),Mt--;continue}tt=yt}}N(y),R.forEach(N);const O=R.length,B=y;for(let ht=0;ht<O;ht++){const it=R[ht];y=y.concat(it)}function V(ht,it,nt){return it||console.error("THREE.ExtrudeGeometry: vec does not exist"),ht.clone().addScaledVector(it,nt)}const $=y.length;function G(ht,it,nt){let tt,Mt,mt;const yt=ht.x-it.x,Zt=ht.y-it.y,Xt=nt.x-ht.x,L=nt.y-ht.y,b=yt*yt+Zt*Zt,k=yt*L-Zt*Xt;if(Math.abs(k)>Number.EPSILON){const J=Math.sqrt(b),ut=Math.sqrt(Xt*Xt+L*L),K=it.x-Zt/J,Nt=it.y+yt/J,xt=nt.x-L/ut,Ft=nt.y+Xt/ut,Ot=((xt-K)*L-(Ft-Nt)*Xt)/(yt*L-Zt*Xt);tt=K+yt*Ot-ht.x,Mt=Nt+Zt*Ot-ht.y;const gt=tt*tt+Mt*Mt;if(gt<=2)return new St(tt,Mt);mt=Math.sqrt(gt/2)}else{let J=!1;yt>Number.EPSILON?Xt>Number.EPSILON&&(J=!0):yt<-Number.EPSILON?Xt<-Number.EPSILON&&(J=!0):Math.sign(Zt)===Math.sign(L)&&(J=!0),J?(tt=-Zt,Mt=yt,mt=Math.sqrt(b)):(tt=yt,Mt=Zt,mt=Math.sqrt(b/2))}return new St(tt/mt,Mt/mt)}const pt=[];for(let ht=0,it=B.length,nt=it-1,tt=ht+1;ht<it;ht++,nt++,tt++)nt===it&&(nt=0),tt===it&&(tt=0),pt[ht]=G(B[ht],B[nt],B[tt]);const D=[];let q,ot=pt.concat();for(let ht=0,it=O;ht<it;ht++){const nt=R[ht];q=[];for(let tt=0,Mt=nt.length,mt=Mt-1,yt=tt+1;tt<Mt;tt++,mt++,yt++)mt===Mt&&(mt=0),yt===Mt&&(yt=0),q[tt]=G(nt[tt],nt[mt],nt[yt]);D.push(q),ot=ot.concat(q)}let rt;if(m===0)rt=ti.triangulateShape(B,R);else{const ht=[],it=[];for(let nt=0;nt<m;nt++){const tt=nt/m,Mt=d*Math.cos(tt*Math.PI/2),mt=g*Math.sin(tt*Math.PI/2)+v;for(let yt=0,Zt=B.length;yt<Zt;yt++){const Xt=V(B[yt],pt[yt],mt);Ht(Xt.x,Xt.y,-Mt),tt===0&&ht.push(Xt)}for(let yt=0,Zt=O;yt<Zt;yt++){const Xt=R[yt];q=D[yt];const L=[];for(let b=0,k=Xt.length;b<k;b++){const J=V(Xt[b],q[b],mt);Ht(J.x,J.y,-Mt),tt===0&&L.push(J)}tt===0&&it.push(L)}}rt=ti.triangulateShape(ht,it)}const bt=rt.length,vt=g+v;for(let ht=0;ht<$;ht++){const it=f?V(y[ht],ot[ht],vt):y[ht];_?(T.copy(w.normals[0]).multiplyScalar(it.x),M.copy(w.binormals[0]).multiplyScalar(it.y),A.copy(x[0]).add(T).add(M),Ht(A.x,A.y,A.z)):Ht(it.x,it.y,0)}for(let ht=1;ht<=u;ht++)for(let it=0;it<$;it++){const nt=f?V(y[it],ot[it],vt):y[it];_?(T.copy(w.normals[ht]).multiplyScalar(nt.x),M.copy(w.binormals[ht]).multiplyScalar(nt.y),A.copy(x[ht]).add(T).add(M),Ht(A.x,A.y,A.z)):Ht(nt.x,nt.y,h/u*ht)}for(let ht=m-1;ht>=0;ht--){const it=ht/m,nt=d*Math.cos(it*Math.PI/2),tt=g*Math.sin(it*Math.PI/2)+v;for(let Mt=0,mt=B.length;Mt<mt;Mt++){const yt=V(B[Mt],pt[Mt],tt);Ht(yt.x,yt.y,h+nt)}for(let Mt=0,mt=R.length;Mt<mt;Mt++){const yt=R[Mt];q=D[Mt];for(let Zt=0,Xt=yt.length;Zt<Xt;Zt++){const L=V(yt[Zt],q[Zt],tt);_?Ht(L.x,L.y+x[u-1].y,x[u-1].x+nt):Ht(L.x,L.y,h+nt)}}}X(),at();function X(){const ht=r.length/3;if(f){let it=0,nt=$*it;for(let tt=0;tt<bt;tt++){const Mt=rt[tt];Bt(Mt[2]+nt,Mt[1]+nt,Mt[0]+nt)}it=u+m*2,nt=$*it;for(let tt=0;tt<bt;tt++){const Mt=rt[tt];Bt(Mt[0]+nt,Mt[1]+nt,Mt[2]+nt)}}else{for(let it=0;it<bt;it++){const nt=rt[it];Bt(nt[2],nt[1],nt[0])}for(let it=0;it<bt;it++){const nt=rt[it];Bt(nt[0]+$*u,nt[1]+$*u,nt[2]+$*u)}}i.addGroup(ht,r.length/3-ht,0)}function at(){const ht=r.length/3;let it=0;Rt(B,it),it+=B.length;for(let nt=0,tt=R.length;nt<tt;nt++){const Mt=R[nt];Rt(Mt,it),it+=Mt.length}i.addGroup(ht,r.length/3-ht,1)}function Rt(ht,it){let nt=ht.length;for(;--nt>=0;){const tt=nt;let Mt=nt-1;Mt<0&&(Mt=ht.length-1);for(let mt=0,yt=u+m*2;mt<yt;mt++){const Zt=$*mt,Xt=$*(mt+1),L=it+tt+Zt,b=it+Mt+Zt,k=it+Mt+Xt,J=it+tt+Xt;te(L,b,k,J)}}}function Ht(ht,it,nt){c.push(ht),c.push(it),c.push(nt)}function Bt(ht,it,nt){he(ht),he(it),he(nt);const tt=r.length/3,Mt=E.generateTopUV(i,r,tt-3,tt-2,tt-1);U(Mt[0]),U(Mt[1]),U(Mt[2])}function te(ht,it,nt,tt){he(ht),he(it),he(tt),he(it),he(nt),he(tt);const Mt=r.length/3,mt=E.generateSideWallUV(i,r,Mt-6,Mt-3,Mt-2,Mt-1);U(mt[0]),U(mt[1]),U(mt[3]),U(mt[1]),U(mt[2]),U(mt[3])}function he(ht){r.push(c[ht*3+0]),r.push(c[ht*3+1]),r.push(c[ht*3+2])}function U(ht){s.push(ht.x),s.push(ht.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return jf(e,i,t)}static fromJSON(t,e){const i=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];i.push(a)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new Po[r.type]().fromJSON(r)),new zc(i,t.options)}}const Kf={generateTopUV:function(n,t,e,i,r){const s=t[e*3],o=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[r*3],u=t[r*3+1];return[new St(s,o),new St(a,c),new St(l,u)]},generateSideWallUV:function(n,t,e,i,r,s){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],u=t[i*3+1],h=t[i*3+2],f=t[r*3],d=t[r*3+1],g=t[r*3+2],v=t[s*3],m=t[s*3+1],p=t[s*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new St(o,1-c),new St(l,1-h),new St(f,1-g),new St(v,1-p)]:[new St(a,1-c),new St(u,1-h),new St(d,1-g),new St(m,1-p)]}};function jf(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Xr extends Fs{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Xr(t.radius,t.detail)}}class Fn extends Fs{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Fn(t.radius,t.detail)}}class Rn extends pe{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,h=t/a,f=e/c,d=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const E=p*f-o;for(let x=0;x<l;x++){const _=x*h-s;g.push(_,-E,0),v.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<a;E++){const x=E+l*p,_=E+l*(p+1),w=E+1+l*(p+1),M=E+1+l*p;d.push(x,_,M),d.push(_,w,M)}this.setIndex(d),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(v,3)),this.setAttribute("uv",new qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Bc extends pe{constructor(t=.5,e=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],c=[],l=[],u=[];let h=t;const f=(e-t)/r,d=new I,g=new St;for(let v=0;v<=r;v++){for(let m=0;m<=i;m++){const p=s+m/i*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}h+=f}for(let v=0;v<r;v++){const m=v*(i+1);for(let p=0;p<i;p++){const E=p+m,x=E,_=E+i+1,w=E+i+2,M=E+1;a.push(x,_,M),a.push(_,w,M)}}this.setIndex(a),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(l,3)),this.setAttribute("uv",new qt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ts extends pe{constructor(t=new Hr([new St(0,.5),new St(-.5,-.5),new St(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],r=[],s=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new qt(r,3)),this.setAttribute("normal",new qt(s,3)),this.setAttribute("uv",new qt(o,2));function l(u){const h=r.length/3,f=u.extractPoints(e);let d=f.shape;const g=f.holes;ti.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const E=g[m];ti.isClockWise(E)===!0&&(g[m]=E.reverse())}const v=ti.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const E=g[m];d=d.concat(E)}for(let m=0,p=d.length;m<p;m++){const E=d[m];r.push(E.x,E.y,0),s.push(0,0,1),o.push(E.x,E.y)}for(let m=0,p=v.length;m<p;m++){const E=v[m],x=E[0]+h,_=E[1]+h,w=E[2]+h;i.push(x,_,w),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Qf(e,t)}static fromJSON(t,e){const i=[];for(let r=0,s=t.shapes.length;r<s;r++){const o=e[t.shapes[r]];i.push(o)}return new Ts(i,t.curveSegments)}}function Qf(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const r=n[e];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t}class _e extends pe{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new I,f=new I,d=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const E=[],x=p/i;let _=0;p===0&&o===0?_=.5/e:p===i&&c===Math.PI&&(_=-.5/e);for(let w=0;w<=e;w++){const M=w/e;h.x=-t*Math.cos(r+M*s)*Math.sin(o+x*a),h.y=t*Math.cos(o+x*a),h.z=t*Math.sin(r+M*s)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),m.push(M+_,1-x),E.push(l++)}u.push(E)}for(let p=0;p<i;p++)for(let E=0;E<e;E++){const x=u[p][E+1],_=u[p][E],w=u[p+1][E],M=u[p+1][E+1];(p!==0||o>0)&&d.push(x,_,M),(p!==i-1||c<Math.PI)&&d.push(_,w,M)}this.setIndex(d),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(v,3)),this.setAttribute("uv",new qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class en extends pe{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],c=[],l=[],u=new I,h=new I,f=new I;for(let d=0;d<=i;d++)for(let g=0;g<=r;g++){const v=g/r*s,m=d/i*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(v),h.y=(t+e*Math.cos(m))*Math.sin(v),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(g/r),l.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=r;g++){const v=(r+1)*d+g-1,m=(r+1)*(d-1)+g-1,p=(r+1)*(d-1)+g,E=(r+1)*d+g;o.push(v,m,E),o.push(m,p,E)}this.setIndex(o),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new en(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class kc extends pe{constructor(t=new eh(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:r,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,c=new I,l=new St;let u=new I;const h=[],f=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new qt(h,3)),this.setAttribute("normal",new qt(f,3)),this.setAttribute("uv",new qt(d,2));function v(){for(let x=0;x<e;x++)m(x);m(s===!1?e:0),E(),p()}function m(x){u=t.getPointAt(x/e,u);const _=o.normals[x],w=o.binormals[x];for(let M=0;M<=r;M++){const T=M/r*Math.PI*2,A=Math.sin(T),S=-Math.cos(T);c.x=S*_.x+A*w.x,c.y=S*_.y+A*w.y,c.z=S*_.z+A*w.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,h.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=e;x++)for(let _=1;_<=r;_++){const w=(r+1)*(x-1)+(_-1),M=(r+1)*x+(_-1),T=(r+1)*x+_,A=(r+1)*(x-1)+_;g.push(w,M,A),g.push(M,T,A)}}function E(){for(let x=0;x<=e;x++)for(let _=0;_<=r;_++)l.x=x/e,l.y=_/r,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new kc(new Po[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ut extends ar{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ou,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class tp extends ar{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ep extends ar{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Hc extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ie(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class np extends Hc{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ie(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const va=new xe,Vl=new I,Gl=new I;class ah{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.mapType=zn,this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uc,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Vl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vl),Gl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gl),e.updateMatrixWorld(),va.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(va,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(va)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Wl=new xe,os=new I,Ma=new I;class ip extends ah{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new St(4,2),this._viewportCount=6,this._viewports=[new fe(2,1,1,1),new fe(0,1,1,1),new fe(3,1,1,1),new fe(1,1,1,1),new fe(3,0,1,1),new fe(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,r=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),os.setFromMatrixPosition(t.matrixWorld),i.position.copy(os),Ma.copy(i.position),Ma.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Ma),i.updateMatrixWorld(),r.makeTranslation(-os.x,-os.y,-os.z),Wl.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wl,i.coordinateSystem,i.reversedDepth)}}class ch extends Hc{constructor(t,e,i=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new ip}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class lh extends qu{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class rp extends ah{constructor(){super(new lh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sp extends Hc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new rp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class op extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Xl(n,t,e,i){const r=ap(i);switch(e){case Uu:return n*t;case Tc:return n*t/r.components*r.byteLength;case Ac:return n*t/r.components*r.byteLength;case Fu:return n*t*2/r.components*r.byteLength;case Rc:return n*t*2/r.components*r.byteLength;case Nu:return n*t*3/r.components*r.byteLength;case An:return n*t*4/r.components*r.byteLength;case Cc:return n*t*4/r.components*r.byteLength;case vo:case Mo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case yo:case So:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ha:case Ga:return Math.max(n,16)*Math.max(t,8)/4;case ka:case Va:return Math.max(n,8)*Math.max(t,8)/2;case Wa:case Xa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case qa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case $a:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Za:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ja:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case tc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case ec:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case nc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ic:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case rc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case sc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case oc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ac:case cc:case lc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case uc:case hc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case dc:case fc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ap(n){switch(n){case zn:case Pu:return{byteLength:1,components:1};case _s:case Lu:case Ls:return{byteLength:2,components:1};case wc:case bc:return{byteLength:2,components:4};case Zi:case Ec:case In:return{byteLength:4,components:1};case Du:case Iu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sc);function uh(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function cp(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],v=h[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const v=h[d];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var lp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,up=`#ifdef USE_ALPHAHASH
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
#endif`,hp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mp=`#ifdef USE_AOMAP
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
#endif`,gp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_p=`#ifdef USE_BATCHING
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
#endif`,xp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sp=`#ifdef USE_IRIDESCENCE
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
#endif`,Ep=`#ifdef USE_BUMPMAP
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
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Lp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Dp=`#define PI 3.141592653589793
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
} // validated`,Ip=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Up=`vec3 transformedNormal = objectNormal;
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
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bp="gl_FragColor = linearToOutputTexel( gl_FragColor );",kp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hp=`#ifdef USE_ENVMAP
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
#endif`,Vp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Wp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xp=`#ifdef USE_ENVMAP
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
#endif`,qp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$p=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jp=`#ifdef USE_GRADIENTMAP
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
}`,Kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tm=`uniform bool receiveShadow;
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
#endif`,em=`#ifdef USE_ENVMAP
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
#endif`,nm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,om=`PhysicalMaterial material;
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
#endif`,am=`struct PhysicalMaterial {
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
}`,cm=`
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
#endif`,lm=`#if defined( RE_IndirectDiffuse )
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
#endif`,um=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_m=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xm=`#if defined( USE_POINTS_UV )
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
#endif`,vm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ym=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Em=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wm=`#ifdef USE_MORPHTARGETS
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
#endif`,bm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Am=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lm=`#ifdef USE_NORMALMAP
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
#endif`,Dm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Im=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Um=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Om=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,km=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ym=`float getShadowMask() {
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
}`,$m=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zm=`#ifdef USE_SKINNING
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
#endif`,Jm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Km=`#ifdef USE_SKINNING
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
#endif`,jm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ng=`#ifdef USE_TRANSMISSION
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
#endif`,ig=`#ifdef USE_TRANSMISSION
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
#endif`,rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ag=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lg=`uniform sampler2D t2D;
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
}`,ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pg=`#include <common>
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
}`,mg=`#if DEPTH_PACKING == 3200
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
}`,gg=`#define DISTANCE
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
}`,_g=`#define DISTANCE
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
}`,xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mg=`uniform float scale;
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
}`,yg=`uniform vec3 diffuse;
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
}`,Sg=`#include <common>
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
}`,Eg=`uniform vec3 diffuse;
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
}`,wg=`#define LAMBERT
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
}`,bg=`#define LAMBERT
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
}`,Tg=`#define MATCAP
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
}`,Ag=`#define MATCAP
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
}`,Rg=`#define NORMAL
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
}`,Cg=`#define NORMAL
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
}`,Pg=`#define PHONG
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
}`,Lg=`#define PHONG
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
}`,Dg=`#define STANDARD
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
}`,Ig=`#define STANDARD
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
}`,Ug=`#define TOON
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
}`,Ng=`#define TOON
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
}`,Fg=`uniform float size;
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
}`,Og=`uniform vec3 diffuse;
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
}`,zg=`#include <common>
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
}`,Bg=`uniform vec3 color;
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
}`,kg=`uniform float rotation;
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
}`,Hg=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:lp,alphahash_pars_fragment:up,alphamap_fragment:hp,alphamap_pars_fragment:dp,alphatest_fragment:fp,alphatest_pars_fragment:pp,aomap_fragment:mp,aomap_pars_fragment:gp,batching_pars_vertex:_p,batching_vertex:xp,begin_vertex:vp,beginnormal_vertex:Mp,bsdfs:yp,iridescence_fragment:Sp,bumpmap_pars_fragment:Ep,clipping_planes_fragment:wp,clipping_planes_pars_fragment:bp,clipping_planes_pars_vertex:Tp,clipping_planes_vertex:Ap,color_fragment:Rp,color_pars_fragment:Cp,color_pars_vertex:Pp,color_vertex:Lp,common:Dp,cube_uv_reflection_fragment:Ip,defaultnormal_vertex:Up,displacementmap_pars_vertex:Np,displacementmap_vertex:Fp,emissivemap_fragment:Op,emissivemap_pars_fragment:zp,colorspace_fragment:Bp,colorspace_pars_fragment:kp,envmap_fragment:Hp,envmap_common_pars_fragment:Vp,envmap_pars_fragment:Gp,envmap_pars_vertex:Wp,envmap_physical_pars_fragment:em,envmap_vertex:Xp,fog_vertex:qp,fog_pars_vertex:Yp,fog_fragment:$p,fog_pars_fragment:Zp,gradientmap_pars_fragment:Jp,lightmap_pars_fragment:Kp,lights_lambert_fragment:jp,lights_lambert_pars_fragment:Qp,lights_pars_begin:tm,lights_toon_fragment:nm,lights_toon_pars_fragment:im,lights_phong_fragment:rm,lights_phong_pars_fragment:sm,lights_physical_fragment:om,lights_physical_pars_fragment:am,lights_fragment_begin:cm,lights_fragment_maps:lm,lights_fragment_end:um,logdepthbuf_fragment:hm,logdepthbuf_pars_fragment:dm,logdepthbuf_pars_vertex:fm,logdepthbuf_vertex:pm,map_fragment:mm,map_pars_fragment:gm,map_particle_fragment:_m,map_particle_pars_fragment:xm,metalnessmap_fragment:vm,metalnessmap_pars_fragment:Mm,morphinstance_vertex:ym,morphcolor_vertex:Sm,morphnormal_vertex:Em,morphtarget_pars_vertex:wm,morphtarget_vertex:bm,normal_fragment_begin:Tm,normal_fragment_maps:Am,normal_pars_fragment:Rm,normal_pars_vertex:Cm,normal_vertex:Pm,normalmap_pars_fragment:Lm,clearcoat_normal_fragment_begin:Dm,clearcoat_normal_fragment_maps:Im,clearcoat_pars_fragment:Um,iridescence_pars_fragment:Nm,opaque_fragment:Fm,packing:Om,premultiplied_alpha_fragment:zm,project_vertex:Bm,dithering_fragment:km,dithering_pars_fragment:Hm,roughnessmap_fragment:Vm,roughnessmap_pars_fragment:Gm,shadowmap_pars_fragment:Wm,shadowmap_pars_vertex:Xm,shadowmap_vertex:qm,shadowmask_pars_fragment:Ym,skinbase_vertex:$m,skinning_pars_vertex:Zm,skinning_vertex:Jm,skinnormal_vertex:Km,specularmap_fragment:jm,specularmap_pars_fragment:Qm,tonemapping_fragment:tg,tonemapping_pars_fragment:eg,transmission_fragment:ng,transmission_pars_fragment:ig,uv_pars_fragment:rg,uv_pars_vertex:sg,uv_vertex:og,worldpos_vertex:ag,background_vert:cg,background_frag:lg,backgroundCube_vert:ug,backgroundCube_frag:hg,cube_vert:dg,cube_frag:fg,depth_vert:pg,depth_frag:mg,distanceRGBA_vert:gg,distanceRGBA_frag:_g,equirect_vert:xg,equirect_frag:vg,linedashed_vert:Mg,linedashed_frag:yg,meshbasic_vert:Sg,meshbasic_frag:Eg,meshlambert_vert:wg,meshlambert_frag:bg,meshmatcap_vert:Tg,meshmatcap_frag:Ag,meshnormal_vert:Rg,meshnormal_frag:Cg,meshphong_vert:Pg,meshphong_frag:Lg,meshphysical_vert:Dg,meshphysical_frag:Ig,meshtoon_vert:Ug,meshtoon_frag:Ng,points_vert:Fg,points_frag:Og,shadow_vert:zg,shadow_frag:Bg,sprite_vert:kg,sprite_frag:Hg},Tt={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Pn={basic:{uniforms:Ke([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:Ke([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new ie(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:Ke([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:Ke([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:Ke([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new ie(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:Ke([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:Ke([Tt.points,Tt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:Ke([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:Ke([Tt.common,Tt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:Ke([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:Ke([Tt.sprite,Tt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:Ke([Tt.common,Tt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:Ke([Tt.lights,Tt.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};Pn.physical={uniforms:Ke([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const fo={r:0,b:0,g:0},Li=new Bn,Vg=new xe;function Gg(n,t,e,i,r,s,o){const a=new ie(0);let c=s===!0?0:1,l,u,h=null,f=0,d=null;function g(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?e:t).get(_)),_}function v(x){let _=!1;const w=g(x);w===null?p(a,c):w&&w.isColor&&(p(w,1),_=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,_){const w=g(_);w&&(w.isCubeTexture||w.mapping===Oo)?(u===void 0&&(u=new Jt(new Te(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:kr(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Li.copy(_.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Vg.makeRotationFromEuler(Li)),u.material.toneMapped=ue.getTransfer(w.colorSpace)!==ge,(h!==w||f!==w.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=w,f=w.version,d=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Jt(new Rn(2,2),new kn({name:"BackgroundMaterial",uniforms:kr(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ue.getTransfer(w.colorSpace)!==ge,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||f!==w.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=w,f=w.version,d=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,_){x.getRGB(fo,Xu(n)),i.buffers.color.setClear(fo.r,fo.g,fo.b,_,o)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(a,c)},render:v,addToRenderList:m,dispose:E}}function Wg(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(y,R,P,N,O){let B=!1;const V=h(N,P,R);s!==V&&(s=V,l(s.object)),B=d(y,N,P,O),B&&g(y,N,P,O),O!==null&&t.update(O,n.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,_(y,R,P,N),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return n.createVertexArray()}function l(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function h(y,R,P){const N=P.wireframe===!0;let O=i[y.id];O===void 0&&(O={},i[y.id]=O);let B=O[R.id];B===void 0&&(B={},O[R.id]=B);let V=B[N];return V===void 0&&(V=f(c()),B[N]=V),V}function f(y){const R=[],P=[],N=[];for(let O=0;O<e;O++)R[O]=0,P[O]=0,N[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:P,attributeDivisors:N,object:y,attributes:{},index:null}}function d(y,R,P,N){const O=s.attributes,B=R.attributes;let V=0;const $=P.getAttributes();for(const G in $)if($[G].location>=0){const D=O[G];let q=B[G];if(q===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(q=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(q=y.instanceColor)),D===void 0||D.attribute!==q||q&&D.data!==q.data)return!0;V++}return s.attributesNum!==V||s.index!==N}function g(y,R,P,N){const O={},B=R.attributes;let V=0;const $=P.getAttributes();for(const G in $)if($[G].location>=0){let D=B[G];D===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(D=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(D=y.instanceColor));const q={};q.attribute=D,D&&D.data&&(q.data=D.data),O[G]=q,V++}s.attributes=O,s.attributesNum=V,s.index=N}function v(){const y=s.newAttributes;for(let R=0,P=y.length;R<P;R++)y[R]=0}function m(y){p(y,0)}function p(y,R){const P=s.newAttributes,N=s.enabledAttributes,O=s.attributeDivisors;P[y]=1,N[y]===0&&(n.enableVertexAttribArray(y),N[y]=1),O[y]!==R&&(n.vertexAttribDivisor(y,R),O[y]=R)}function E(){const y=s.newAttributes,R=s.enabledAttributes;for(let P=0,N=R.length;P<N;P++)R[P]!==y[P]&&(n.disableVertexAttribArray(P),R[P]=0)}function x(y,R,P,N,O,B,V){V===!0?n.vertexAttribIPointer(y,R,P,O,B):n.vertexAttribPointer(y,R,P,N,O,B)}function _(y,R,P,N){v();const O=N.attributes,B=P.getAttributes(),V=R.defaultAttributeValues;for(const $ in B){const G=B[$];if(G.location>=0){let pt=O[$];if(pt===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(pt=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(pt=y.instanceColor)),pt!==void 0){const D=pt.normalized,q=pt.itemSize,ot=t.get(pt);if(ot===void 0)continue;const rt=ot.buffer,bt=ot.type,vt=ot.bytesPerElement,X=bt===n.INT||bt===n.UNSIGNED_INT||pt.gpuType===Ec;if(pt.isInterleavedBufferAttribute){const at=pt.data,Rt=at.stride,Ht=pt.offset;if(at.isInstancedInterleavedBuffer){for(let Bt=0;Bt<G.locationSize;Bt++)p(G.location+Bt,at.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Bt=0;Bt<G.locationSize;Bt++)m(G.location+Bt);n.bindBuffer(n.ARRAY_BUFFER,rt);for(let Bt=0;Bt<G.locationSize;Bt++)x(G.location+Bt,q/G.locationSize,bt,D,Rt*vt,(Ht+q/G.locationSize*Bt)*vt,X)}else{if(pt.isInstancedBufferAttribute){for(let at=0;at<G.locationSize;at++)p(G.location+at,pt.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let at=0;at<G.locationSize;at++)m(G.location+at);n.bindBuffer(n.ARRAY_BUFFER,rt);for(let at=0;at<G.locationSize;at++)x(G.location+at,q/G.locationSize,bt,D,q*vt,q/G.locationSize*at*vt,X)}}else if(V!==void 0){const D=V[$];if(D!==void 0)switch(D.length){case 2:n.vertexAttrib2fv(G.location,D);break;case 3:n.vertexAttrib3fv(G.location,D);break;case 4:n.vertexAttrib4fv(G.location,D);break;default:n.vertexAttrib1fv(G.location,D)}}}}E()}function w(){A();for(const y in i){const R=i[y];for(const P in R){const N=R[P];for(const O in N)u(N[O].object),delete N[O];delete R[P]}delete i[y]}}function M(y){if(i[y.id]===void 0)return;const R=i[y.id];for(const P in R){const N=R[P];for(const O in N)u(N[O].object),delete N[O];delete R[P]}delete i[y.id]}function T(y){for(const R in i){const P=i[R];if(P[y.id]===void 0)continue;const N=P[y.id];for(const O in N)u(N[O].object),delete N[O];delete P[y.id]}}function A(){S(),o=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:M,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:E}}function Xg(n,t,e){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),e.update(u,i,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,i,1)}function c(l,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*f[v];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function qg(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==An&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const A=T===Ls&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==zn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==In&&!A)}function c(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,M=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:w,maxSamples:M}}function Yg(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new Ni,a=new Qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||r;return r=f,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const E=s?0:i,x=E*4;let _=p.clippingState||null;c.value=_,_=u(g,f,x,d);for(let w=0;w!==x;++w)_[w]=e[w];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,d,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=d+v*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,_=d;x!==v;++x,_+=4)o.copy(h[x]).applyMatrix4(E,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function $g(n){let t=new WeakMap;function e(o,a){return a===Oa?o.mapping=Or:a===za&&(o.mapping=zr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Oa||a===za)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new ff(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const Cr=4,ql=[.125,.215,.35,.446,.526,.582],zi=20,ya=new lh,Yl=new ie;let Sa=null,Ea=0,wa=0,ba=!1;const Fi=(1+Math.sqrt(5))/2,wr=1/Fi,$l=[new I(-Fi,wr,0),new I(Fi,wr,0),new I(-wr,0,Fi),new I(wr,0,Fi),new I(0,Fi,-wr),new I(0,Fi,wr),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Zg=new I;class Zl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100,s={}){const{size:o=256,position:a=Zg}=s;Sa=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,r,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Sa,Ea,wa),this._renderer.xr.enabled=ba,t.scissorTest=!1,po(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Or||t.mapping===zr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sa=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Ls,format:An,colorSpace:Br,depthBuffer:!1},r=Jl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jl(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jg(s)),this._blurMaterial=Kg(s,t,e)}return r}_compileMaterial(t){const e=new Jt(this._lodPlanes[0],t);this._renderer.compile(e,ya)}_sceneToCubeUV(t,e,i,r,s){const c=new dn(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Yl),h.toneMapping=_i,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const v=new vi({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),m=new Jt(new Te,v);let p=!1;const E=t.background;E?E.isColor&&(v.color.copy(E),t.background=null,p=!0):(v.color.copy(Yl),p=!0);for(let x=0;x<6;x++){const _=x%3;_===0?(c.up.set(0,l[x],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[x],s.y,s.z)):_===1?(c.up.set(0,0,l[x]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[x],s.z)):(c.up.set(0,l[x],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[x]));const w=this._cubeSize;po(r,_*w,x>2?w:0,w,w),h.setRenderTarget(r),p&&h.render(m,c),h.render(t,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=E}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Or||t.mapping===zr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kl());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Jt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;po(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,ya)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=$l[(r-s-1)%$l.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Jt(this._lodPlanes[r],l),f=l.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*zi-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):zi;m>zi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);const p=[];let E=0;for(let T=0;T<zi;++T){const A=T/v,S=Math.exp(-A*A/2);p.push(S),T===0?E+=S:T<m&&(E+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const _=this._sizeLods[r],w=3*_*(r>x-Cr?r-x+Cr:0),M=4*(this._cubeSize-_);po(e,w,M,3*_,2*_),c.setRenderTarget(e),c.render(h,ya)}}function Jg(n){const t=[],e=[],i=[];let r=n;const s=n-Cr+1+ql.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>n-Cr?c=ql[o-n+Cr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,v=3,m=2,p=1,E=new Float32Array(v*g*d),x=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let M=0;M<d;M++){const T=M%3*2/3-1,A=M>2?0:-1,S=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];E.set(S,v*g*M),x.set(f,m*g*M);const y=[M,M,M,M,M,M];_.set(y,p*g*M)}const w=new pe;w.setAttribute("position",new ke(E,v)),w.setAttribute("uv",new ke(x,m)),w.setAttribute("faceIndex",new ke(_,p)),t.push(w),r>Cr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Jl(n,t,e){const i=new Ji(n,t,e);return i.texture.mapping=Oo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function po(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Kg(n,t,e){const i=new Float32Array(zi),r=new I(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Kl(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function jl(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Vc(){return`

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
	`}function jg(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Oa||c===za,u=c===Or||c===zr;if(l||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Zl(n)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&r(d)?(e===null&&(e=new Zl(n)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Qg(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Ss("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function t0(n,t,e,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const d in f)t.update(f[d],n.ARRAY_BUFFER)}function l(h){const f=[],d=h.index,g=h.attributes.position;let v=0;if(d!==null){const E=d.array;v=d.version;for(let x=0,_=E.length;x<_;x+=3){const w=E[x+0],M=E[x+1],T=E[x+2];f.push(w,M,M,T,T,w)}}else if(g!==void 0){const E=g.array;v=g.version;for(let x=0,_=E.length/3-1;x<_;x+=3){const w=x+0,M=x+1,T=x+2;f.push(w,M,M,T,T,w)}}else return;const m=new(Bu(f)?Wu:Gu)(f,1);m.version=v;const p=s.get(h);p&&t.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function e0(n,t,e){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,d){n.drawElements(i,d,s,f*o),e.update(d,i,1)}function l(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,f*o,g),e.update(d,i,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,i,1)}function h(f,d,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,v,0,g);let p=0;for(let E=0;E<g;E++)p+=d[E]*v[E];e.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function n0(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function i0(n,t,e){const i=new WeakMap,r=new fe;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let y=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let w=a.attributes.position.count*_,M=1;w>t.maxTextureSize&&(M=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const T=new Float32Array(w*M*4*h),A=new ku(T,w,M,h);A.type=In,A.needsUpdate=!0;const S=_*4;for(let R=0;R<h;R++){const P=p[R],N=E[R],O=x[R],B=w*M*4*R;for(let V=0;V<P.count;V++){const $=V*S;g===!0&&(r.fromBufferAttribute(P,V),T[B+$+0]=r.x,T[B+$+1]=r.y,T[B+$+2]=r.z,T[B+$+3]=0),v===!0&&(r.fromBufferAttribute(N,V),T[B+$+4]=r.x,T[B+$+5]=r.y,T[B+$+6]=r.z,T[B+$+7]=0),m===!0&&(r.fromBufferAttribute(O,V),T[B+$+8]=r.x,T[B+$+9]=r.y,T[B+$+10]=r.z,T[B+$+11]=O.itemSize===4?r.w:1)}}f={count:h,texture:A,size:new St(w,M)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function r0(n,t,e,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=t.get(c,u);if(r.get(h)!==l&&(t.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}const hh=new qe,Ql=new Zu(1,1),dh=new ku,fh=new Zd,ph=new Yu,tu=[],eu=[],nu=new Float32Array(16),iu=new Float32Array(9),ru=new Float32Array(4);function qr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=tu[r];if(s===void 0&&(s=new Float32Array(r),tu[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Fe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Oe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Bo(n,t){let e=eu[t];e===void 0&&(e=new Int32Array(t),eu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function s0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function o0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2fv(this.addr,t),Oe(e,t)}}function a0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;n.uniform3fv(this.addr,t),Oe(e,t)}}function c0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4fv(this.addr,t),Oe(e,t)}}function l0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,i))return;ru.set(i),n.uniformMatrix2fv(this.addr,!1,ru),Oe(e,i)}}function u0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,i))return;iu.set(i),n.uniformMatrix3fv(this.addr,!1,iu),Oe(e,i)}}function h0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,i))return;nu.set(i),n.uniformMatrix4fv(this.addr,!1,nu),Oe(e,i)}}function d0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function f0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2iv(this.addr,t),Oe(e,t)}}function p0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;n.uniform3iv(this.addr,t),Oe(e,t)}}function m0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4iv(this.addr,t),Oe(e,t)}}function g0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function _0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2uiv(this.addr,t),Oe(e,t)}}function x0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;n.uniform3uiv(this.addr,t),Oe(e,t)}}function v0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4uiv(this.addr,t),Oe(e,t)}}function M0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Ql.compareFunction=zu,s=Ql):s=hh,e.setTexture2D(t||s,r)}function y0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||fh,r)}function S0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||ph,r)}function E0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||dh,r)}function w0(n){switch(n){case 5126:return s0;case 35664:return o0;case 35665:return a0;case 35666:return c0;case 35674:return l0;case 35675:return u0;case 35676:return h0;case 5124:case 35670:return d0;case 35667:case 35671:return f0;case 35668:case 35672:return p0;case 35669:case 35673:return m0;case 5125:return g0;case 36294:return _0;case 36295:return x0;case 36296:return v0;case 35678:case 36198:case 36298:case 36306:case 35682:return M0;case 35679:case 36299:case 36307:return y0;case 35680:case 36300:case 36308:case 36293:return S0;case 36289:case 36303:case 36311:case 36292:return E0}}function b0(n,t){n.uniform1fv(this.addr,t)}function T0(n,t){const e=qr(t,this.size,2);n.uniform2fv(this.addr,e)}function A0(n,t){const e=qr(t,this.size,3);n.uniform3fv(this.addr,e)}function R0(n,t){const e=qr(t,this.size,4);n.uniform4fv(this.addr,e)}function C0(n,t){const e=qr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function P0(n,t){const e=qr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function L0(n,t){const e=qr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function D0(n,t){n.uniform1iv(this.addr,t)}function I0(n,t){n.uniform2iv(this.addr,t)}function U0(n,t){n.uniform3iv(this.addr,t)}function N0(n,t){n.uniform4iv(this.addr,t)}function F0(n,t){n.uniform1uiv(this.addr,t)}function O0(n,t){n.uniform2uiv(this.addr,t)}function z0(n,t){n.uniform3uiv(this.addr,t)}function B0(n,t){n.uniform4uiv(this.addr,t)}function k0(n,t,e){const i=this.cache,r=t.length,s=Bo(e,r);Fe(i,s)||(n.uniform1iv(this.addr,s),Oe(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||hh,s[o])}function H0(n,t,e){const i=this.cache,r=t.length,s=Bo(e,r);Fe(i,s)||(n.uniform1iv(this.addr,s),Oe(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||fh,s[o])}function V0(n,t,e){const i=this.cache,r=t.length,s=Bo(e,r);Fe(i,s)||(n.uniform1iv(this.addr,s),Oe(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||ph,s[o])}function G0(n,t,e){const i=this.cache,r=t.length,s=Bo(e,r);Fe(i,s)||(n.uniform1iv(this.addr,s),Oe(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||dh,s[o])}function W0(n){switch(n){case 5126:return b0;case 35664:return T0;case 35665:return A0;case 35666:return R0;case 35674:return C0;case 35675:return P0;case 35676:return L0;case 5124:case 35670:return D0;case 35667:case 35671:return I0;case 35668:case 35672:return U0;case 35669:case 35673:return N0;case 5125:return F0;case 36294:return O0;case 36295:return z0;case 36296:return B0;case 35678:case 36198:case 36298:case 36306:case 35682:return k0;case 35679:case 36299:case 36307:return H0;case 35680:case 36300:case 36308:case 36293:return V0;case 36289:case 36303:case 36311:case 36292:return G0}}class X0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=w0(e.type)}}class q0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=W0(e.type)}}class Y0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const Ta=/(\w+)(\])?(\[|\.)?/g;function su(n,t){n.seq.push(t),n.map[t.id]=t}function $0(n,t,e){const i=n.name,r=i.length;for(Ta.lastIndex=0;;){const s=Ta.exec(i),o=Ta.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){su(e,l===void 0?new X0(a,n,t):new q0(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new Y0(a),su(e,h)),e=h}}}class Eo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);$0(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function ou(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Z0=37297;let J0=0;function K0(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const au=new Qt;function j0(n){ue._getMatrix(au,ue.workingColorSpace,n);const t=`mat3( ${au.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(n)){case bo:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function cu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+K0(n.getShaderSource(t),a)}else return s}function Q0(n,t){const e=j0(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function t_(n,t){let e;switch(t){case ld:e="Linear";break;case ud:e="Reinhard";break;case hd:e="Cineon";break;case Ru:e="ACESFilmic";break;case fd:e="AgX";break;case pd:e="Neutral";break;case dd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const mo=new I;function e_(){ue.getLuminanceCoefficients(mo);const n=mo.x.toFixed(4),t=mo.y.toFixed(4),e=mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cs).join(`
`)}function i_(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function r_(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function cs(n){return n!==""}function lu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const s_=/^[ \t]*#include +<([\w\d./]+)>/gm;function xc(n){return n.replace(s_,a_)}const o_=new Map;function a_(n,t){let e=ee[t];if(e===void 0){const i=o_.get(t);if(i!==void 0)e=ee[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return xc(e)}const c_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hu(n){return n.replace(c_,l_)}function l_(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function du(n){let t=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function u_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===bu?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Tu?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Zn&&(t="SHADOWMAP_TYPE_VSM"),t}function h_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Or:case zr:t="ENVMAP_TYPE_CUBE";break;case Oo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function d_(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===zr&&(t="ENVMAP_MODE_REFRACTION"),t}function f_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Au:t="ENVMAP_BLENDING_MULTIPLY";break;case ad:t="ENVMAP_BLENDING_MIX";break;case cd:t="ENVMAP_BLENDING_ADD";break}return t}function p_(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function m_(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=u_(e),l=h_(e),u=d_(e),h=f_(e),f=p_(e),d=n_(e),g=i_(s),v=r.createProgram();let m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(cs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(cs).join(`
`),p.length>0&&(p+=`
`)):(m=[du(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cs).join(`
`),p=[du(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_i?"#define TONE_MAPPING":"",e.toneMapping!==_i?ee.tonemapping_pars_fragment:"",e.toneMapping!==_i?t_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,Q0("linearToOutputTexel",e.outputColorSpace),e_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cs).join(`
`)),o=xc(o),o=lu(o,e),o=uu(o,e),a=xc(a),a=lu(a,e),a=uu(a,e),o=hu(o),a=hu(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===ll?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ll?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=E+m+o,_=E+p+a,w=ou(r,r.VERTEX_SHADER,x),M=ou(r,r.FRAGMENT_SHADER,_);r.attachShader(v,w),r.attachShader(v,M),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function T(R){if(n.debug.checkShaderErrors){const P=r.getProgramInfoLog(v)||"",N=r.getShaderInfoLog(w)||"",O=r.getShaderInfoLog(M)||"",B=P.trim(),V=N.trim(),$=O.trim();let G=!0,pt=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,w,M);else{const D=cu(r,w,"vertex"),q=cu(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+D+`
`+q)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(V===""||$==="")&&(pt=!1);pt&&(R.diagnostics={runnable:G,programLog:B,vertexShader:{log:V,prefix:m},fragmentShader:{log:$,prefix:p}})}r.deleteShader(w),r.deleteShader(M),A=new Eo(r,v),S=r_(r,v)}let A;this.getUniforms=function(){return A===void 0&&T(this),A};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(v,Z0)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=J0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=M,this}let g_=0;class __{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new x_(t),e.set(t,i)),i}}class x_{constructor(t){this.id=g_++,this.code=t,this.usedTimes=0}}function v_(n,t,e,i,r,s,o){const a=new Hu,c=new __,l=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,y,R,P,N){const O=P.fog,B=N.geometry,V=S.isMeshStandardMaterial?P.environment:null,$=(S.isMeshStandardMaterial?e:t).get(S.envMap||V),G=$&&$.mapping===Oo?$.image.height:null,pt=g[S.type];S.precision!==null&&(d=r.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const D=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,q=D!==void 0?D.length:0;let ot=0;B.morphAttributes.position!==void 0&&(ot=1),B.morphAttributes.normal!==void 0&&(ot=2),B.morphAttributes.color!==void 0&&(ot=3);let rt,bt,vt,X;if(pt){const Kt=Pn[pt];rt=Kt.vertexShader,bt=Kt.fragmentShader}else rt=S.vertexShader,bt=S.fragmentShader,c.update(S),vt=c.getVertexShaderID(S),X=c.getFragmentShaderID(S);const at=n.getRenderTarget(),Rt=n.state.buffers.depth.getReversed(),Ht=N.isInstancedMesh===!0,Bt=N.isBatchedMesh===!0,te=!!S.map,he=!!S.matcap,U=!!$,ht=!!S.aoMap,it=!!S.lightMap,nt=!!S.bumpMap,tt=!!S.normalMap,Mt=!!S.displacementMap,mt=!!S.emissiveMap,yt=!!S.metalnessMap,Zt=!!S.roughnessMap,Xt=S.anisotropy>0,L=S.clearcoat>0,b=S.dispersion>0,k=S.iridescence>0,J=S.sheen>0,ut=S.transmission>0,K=Xt&&!!S.anisotropyMap,Nt=L&&!!S.clearcoatMap,xt=L&&!!S.clearcoatNormalMap,Ft=L&&!!S.clearcoatRoughnessMap,Ot=k&&!!S.iridescenceMap,gt=k&&!!S.iridescenceThicknessMap,At=J&&!!S.sheenColorMap,W=J&&!!S.sheenRoughnessMap,et=!!S.specularMap,Q=!!S.specularColorMap,Et=!!S.specularIntensityMap,F=ut&&!!S.transmissionMap,st=ut&&!!S.thicknessMap,ft=!!S.gradientMap,wt=!!S.alphaMap,lt=S.alphaTest>0,ct=!!S.alphaHash,zt=!!S.extensions;let Pt=_i;S.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Pt=n.toneMapping);const se={shaderID:pt,shaderType:S.type,shaderName:S.name,vertexShader:rt,fragmentShader:bt,defines:S.defines,customVertexShaderID:vt,customFragmentShaderID:X,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Bt,batchingColor:Bt&&N._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&N.instanceColor!==null,instancingMorph:Ht&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:at===null?n.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Br,alphaToCoverage:!!S.alphaToCoverage,map:te,matcap:he,envMap:U,envMapMode:U&&$.mapping,envMapCubeUVHeight:G,aoMap:ht,lightMap:it,bumpMap:nt,normalMap:tt,displacementMap:f&&Mt,emissiveMap:mt,normalMapObjectSpace:tt&&S.normalMapType===xd,normalMapTangentSpace:tt&&S.normalMapType===Ou,metalnessMap:yt,roughnessMap:Zt,anisotropy:Xt,anisotropyMap:K,clearcoat:L,clearcoatMap:Nt,clearcoatNormalMap:xt,clearcoatRoughnessMap:Ft,dispersion:b,iridescence:k,iridescenceMap:Ot,iridescenceThicknessMap:gt,sheen:J,sheenColorMap:At,sheenRoughnessMap:W,specularMap:et,specularColorMap:Q,specularIntensityMap:Et,transmission:ut,transmissionMap:F,thicknessMap:st,gradientMap:ft,opaque:S.transparent===!1&&S.blending===Dr&&S.alphaToCoverage===!1,alphaMap:wt,alphaTest:lt,alphaHash:ct,combine:S.combine,mapUv:te&&v(S.map.channel),aoMapUv:ht&&v(S.aoMap.channel),lightMapUv:it&&v(S.lightMap.channel),bumpMapUv:nt&&v(S.bumpMap.channel),normalMapUv:tt&&v(S.normalMap.channel),displacementMapUv:Mt&&v(S.displacementMap.channel),emissiveMapUv:mt&&v(S.emissiveMap.channel),metalnessMapUv:yt&&v(S.metalnessMap.channel),roughnessMapUv:Zt&&v(S.roughnessMap.channel),anisotropyMapUv:K&&v(S.anisotropyMap.channel),clearcoatMapUv:Nt&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:xt&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ft&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ot&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:At&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:W&&v(S.sheenRoughnessMap.channel),specularMapUv:et&&v(S.specularMap.channel),specularColorMapUv:Q&&v(S.specularColorMap.channel),specularIntensityMapUv:Et&&v(S.specularIntensityMap.channel),transmissionMapUv:F&&v(S.transmissionMap.channel),thicknessMapUv:st&&v(S.thicknessMap.channel),alphaMapUv:wt&&v(S.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(tt||Xt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(te||wt),fog:!!O,useFog:S.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Rt,skinning:N.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:ot,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Pt,decodeVideoTexture:te&&S.map.isVideoTexture===!0&&ue.getTransfer(S.map.colorSpace)===ge,decodeVideoTextureEmissive:mt&&S.emissiveMap.isVideoTexture===!0&&ue.getTransfer(S.emissiveMap.colorSpace)===ge,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Se,flipSided:S.side===nn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:zt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&S.extensions.multiDraw===!0||Bt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return se.vertexUv1s=l.has(1),se.vertexUv2s=l.has(2),se.vertexUv3s=l.has(3),l.clear(),se}function p(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)y.push(R),y.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(E(y,S),x(y,S),y.push(n.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function E(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function x(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){const y=g[S.type];let R;if(y){const P=Pn[y];R=lf.clone(P.uniforms)}else R=S.uniforms;return R}function w(S,y){let R;for(let P=0,N=u.length;P<N;P++){const O=u[P];if(O.cacheKey===y){R=O,++R.usedTimes;break}}return R===void 0&&(R=new m_(n,y,S,s),u.push(R)),R}function M(S){if(--S.usedTimes===0){const y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),S.destroy()}}function T(S){c.remove(S)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:w,releaseProgram:M,releaseShaderCache:T,programs:u,dispose:A}}function M_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function y_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function fu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function pu(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(h,f,d,g,v,m){let p=n[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},n[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),t++,p}function a(h,f,d,g,v,m){const p=o(h,f,d,g,v,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):e.push(p)}function c(h,f,d,g,v,m){const p=o(h,f,d,g,v,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):e.unshift(p)}function l(h,f){e.length>1&&e.sort(h||y_),i.length>1&&i.sort(f||fu),r.length>1&&r.sort(f||fu)}function u(){for(let h=t,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function S_(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new pu,n.set(i,[o])):r>=s.length?(o=new pu,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function E_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new ie};break;case"SpotLight":e={position:new I,direction:new I,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new ie,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":e={color:new ie,position:new I,halfWidth:new I,halfHeight:new I};break}return n[t.id]=e,e}}}function w_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let b_=0;function T_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function A_(n){const t=new E_,e=w_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new I);const r=new I,s=new xe,o=new xe;function a(l){let u=0,h=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,E=0,x=0,_=0,w=0,M=0,T=0;l.sort(T_);for(let S=0,y=l.length;S<y;S++){const R=l[S],P=R.color,N=R.intensity,O=R.distance,B=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=P.r*N,h+=P.g*N,f+=P.b*N;else if(R.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(R.sh.coefficients[V],N);T++}else if(R.isDirectionalLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const $=R.shadow,G=e.get(R);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,i.directionalShadow[d]=G,i.directionalShadowMap[d]=B,i.directionalShadowMatrix[d]=R.shadow.matrix,E++}i.directional[d]=V,d++}else if(R.isSpotLight){const V=t.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(P).multiplyScalar(N),V.distance=O,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,i.spot[v]=V;const $=R.shadow;if(R.map&&(i.spotLightMap[w]=R.map,w++,$.updateMatrices(R),R.castShadow&&M++),i.spotLightMatrix[v]=$.matrix,R.castShadow){const G=e.get(R);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,i.spotShadow[v]=G,i.spotShadowMap[v]=B,_++}v++}else if(R.isRectAreaLight){const V=t.get(R);V.color.copy(P).multiplyScalar(N),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=V,m++}else if(R.isPointLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){const $=R.shadow,G=e.get(R);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,G.shadowCameraNear=$.camera.near,G.shadowCameraFar=$.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=B,i.pointShadowMatrix[g]=R.shadow.matrix,x++}i.point[g]=V,g++}else if(R.isHemisphereLight){const V=t.get(R);V.skyColor.copy(R.color).multiplyScalar(N),V.groundColor.copy(R.groundColor).multiplyScalar(N),i.hemi[p]=V,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Tt.LTC_FLOAT_1,i.rectAreaLTC2=Tt.LTC_FLOAT_2):(i.rectAreaLTC1=Tt.LTC_HALF_1,i.rectAreaLTC2=Tt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const A=i.hash;(A.directionalLength!==d||A.pointLength!==g||A.spotLength!==v||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==E||A.numPointShadows!==x||A.numSpotShadows!==_||A.numSpotMaps!==w||A.numLightProbes!==T)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=_+w-M,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=T,A.directionalLength=d,A.pointLength=g,A.spotLength=v,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=E,A.numPointShadows=x,A.numSpotShadows=_,A.numSpotMaps=w,A.numLightProbes=T,i.version=b_++)}function c(l,u){let h=0,f=0,d=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){const x=l[p];if(x.isDirectionalLight){const _=i.directional[h];_.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),h++}else if(x.isSpotLight){const _=i.spot[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const _=i.point[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:i}}function mu(n){const t=new A_(n),e=[],i=[];function r(u){l.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function R_(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new mu(n),t.set(r,[a])):s>=o.length?(a=new mu(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const C_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P_=`uniform sampler2D shadow_pass;
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
}`;function L_(n,t,e){let i=new Uc;const r=new St,s=new St,o=new fe,a=new tp({depthPacking:_d}),c=new ep,l={},u=e.maxTextureSize,h={[xi]:nn,[nn]:xi,[Se]:Se},f=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:C_,fragmentShader:P_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new pe;g.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Jt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bu;let p=this.type;this.render=function(M,T,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const S=n.getRenderTarget(),y=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),P=n.state;P.setBlending(gi),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const N=p!==Zn&&this.type===Zn,O=p===Zn&&this.type!==Zn;for(let B=0,V=M.length;B<V;B++){const $=M[B],G=$.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const pt=G.getFrameExtents();if(r.multiply(pt),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/pt.x),r.x=s.x*pt.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/pt.y),r.y=s.y*pt.y,G.mapSize.y=s.y)),G.map===null||N===!0||O===!0){const q=this.type!==Zn?{minFilter:fn,magFilter:fn}:{};G.map!==null&&G.map.dispose(),G.map=new Ji(r.x,r.y,q),G.map.texture.name=$.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const D=G.getViewportCount();for(let q=0;q<D;q++){const ot=G.getViewport(q);o.set(s.x*ot.x,s.y*ot.y,s.x*ot.z,s.y*ot.w),P.viewport(o),G.updateMatrices($,q),i=G.getFrustum(),_(T,A,G.camera,$,this.type)}G.isPointLightShadow!==!0&&this.type===Zn&&E(G,A),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,y,R)};function E(M,T){const A=t.update(v);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Ji(r.x,r.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(T,null,A,f,v,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(T,null,A,d,v,null)}function x(M,T,A,S){let y=null;const R=A.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(R!==void 0)y=R;else if(y=A.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const P=y.uuid,N=T.uuid;let O=l[P];O===void 0&&(O={},l[P]=O);let B=O[N];B===void 0&&(B=y.clone(),O[N]=B,T.addEventListener("dispose",w)),y=B}if(y.visible=T.visible,y.wireframe=T.wireframe,S===Zn?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:h[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,A.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const P=n.properties.get(y);P.light=A}return y}function _(M,T,A,S,y){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&y===Zn)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,M.matrixWorld);const N=t.update(M),O=M.material;if(Array.isArray(O)){const B=N.groups;for(let V=0,$=B.length;V<$;V++){const G=B[V],pt=O[G.materialIndex];if(pt&&pt.visible){const D=x(M,pt,S,y);M.onBeforeShadow(n,M,T,A,N,D,G),n.renderBufferDirect(A,null,N,D,M,G),M.onAfterShadow(n,M,T,A,N,D,G)}}}else if(O.visible){const B=x(M,O,S,y);M.onBeforeShadow(n,M,T,A,N,B,null),n.renderBufferDirect(A,null,N,B,M,null),M.onAfterShadow(n,M,T,A,N,B,null)}}const P=M.children;for(let N=0,O=P.length;N<O;N++)_(P[N],T,A,S,y)}function w(M){M.target.removeEventListener("dispose",w);for(const A in l){const S=l[A],y=M.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const D_={[Pa]:La,[Da]:Na,[Ia]:Fa,[Fr]:Ua,[La]:Pa,[Na]:Da,[Fa]:Ia,[Ua]:Fr};function I_(n,t){function e(){let F=!1;const st=new fe;let ft=null;const wt=new fe(0,0,0,0);return{setMask:function(lt){ft!==lt&&!F&&(n.colorMask(lt,lt,lt,lt),ft=lt)},setLocked:function(lt){F=lt},setClear:function(lt,ct,zt,Pt,se){se===!0&&(lt*=Pt,ct*=Pt,zt*=Pt),st.set(lt,ct,zt,Pt),wt.equals(st)===!1&&(n.clearColor(lt,ct,zt,Pt),wt.copy(st))},reset:function(){F=!1,ft=null,wt.set(-1,0,0,0)}}}function i(){let F=!1,st=!1,ft=null,wt=null,lt=null;return{setReversed:function(ct){if(st!==ct){const zt=t.get("EXT_clip_control");ct?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),st=ct;const Pt=lt;lt=null,this.setClear(Pt)}},getReversed:function(){return st},setTest:function(ct){ct?at(n.DEPTH_TEST):Rt(n.DEPTH_TEST)},setMask:function(ct){ft!==ct&&!F&&(n.depthMask(ct),ft=ct)},setFunc:function(ct){if(st&&(ct=D_[ct]),wt!==ct){switch(ct){case Pa:n.depthFunc(n.NEVER);break;case La:n.depthFunc(n.ALWAYS);break;case Da:n.depthFunc(n.LESS);break;case Fr:n.depthFunc(n.LEQUAL);break;case Ia:n.depthFunc(n.EQUAL);break;case Ua:n.depthFunc(n.GEQUAL);break;case Na:n.depthFunc(n.GREATER);break;case Fa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}wt=ct}},setLocked:function(ct){F=ct},setClear:function(ct){lt!==ct&&(st&&(ct=1-ct),n.clearDepth(ct),lt=ct)},reset:function(){F=!1,ft=null,wt=null,lt=null,st=!1}}}function r(){let F=!1,st=null,ft=null,wt=null,lt=null,ct=null,zt=null,Pt=null,se=null;return{setTest:function(Kt){F||(Kt?at(n.STENCIL_TEST):Rt(n.STENCIL_TEST))},setMask:function(Kt){st!==Kt&&!F&&(n.stencilMask(Kt),st=Kt)},setFunc:function(Kt,Ae,Ue){(ft!==Kt||wt!==Ae||lt!==Ue)&&(n.stencilFunc(Kt,Ae,Ue),ft=Kt,wt=Ae,lt=Ue)},setOp:function(Kt,Ae,Ue){(ct!==Kt||zt!==Ae||Pt!==Ue)&&(n.stencilOp(Kt,Ae,Ue),ct=Kt,zt=Ae,Pt=Ue)},setLocked:function(Kt){F=Kt},setClear:function(Kt){se!==Kt&&(n.clearStencil(Kt),se=Kt)},reset:function(){F=!1,st=null,ft=null,wt=null,lt=null,ct=null,zt=null,Pt=null,se=null}}}const s=new e,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,E=null,x=null,_=null,w=null,M=null,T=new ie(0,0,0),A=0,S=!1,y=null,R=null,P=null,N=null,O=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,$=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=$>=1):G.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=$>=2);let pt=null,D={};const q=n.getParameter(n.SCISSOR_BOX),ot=n.getParameter(n.VIEWPORT),rt=new fe().fromArray(q),bt=new fe().fromArray(ot);function vt(F,st,ft,wt){const lt=new Uint8Array(4),ct=n.createTexture();n.bindTexture(F,ct),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let zt=0;zt<ft;zt++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(st,0,n.RGBA,1,1,wt,0,n.RGBA,n.UNSIGNED_BYTE,lt):n.texImage2D(st+zt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,lt);return ct}const X={};X[n.TEXTURE_2D]=vt(n.TEXTURE_2D,n.TEXTURE_2D,1),X[n.TEXTURE_CUBE_MAP]=vt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[n.TEXTURE_2D_ARRAY]=vt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),X[n.TEXTURE_3D]=vt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(n.DEPTH_TEST),o.setFunc(Fr),nt(!1),tt(rl),at(n.CULL_FACE),ht(gi);function at(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function Rt(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function Ht(F,st){return h[F]!==st?(n.bindFramebuffer(F,st),h[F]=st,F===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=st),F===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=st),!0):!1}function Bt(F,st){let ft=d,wt=!1;if(F){ft=f.get(st),ft===void 0&&(ft=[],f.set(st,ft));const lt=F.textures;if(ft.length!==lt.length||ft[0]!==n.COLOR_ATTACHMENT0){for(let ct=0,zt=lt.length;ct<zt;ct++)ft[ct]=n.COLOR_ATTACHMENT0+ct;ft.length=lt.length,wt=!0}}else ft[0]!==n.BACK&&(ft[0]=n.BACK,wt=!0);wt&&n.drawBuffers(ft)}function te(F){return g!==F?(n.useProgram(F),g=F,!0):!1}const he={[Oi]:n.FUNC_ADD,[Wh]:n.FUNC_SUBTRACT,[Xh]:n.FUNC_REVERSE_SUBTRACT};he[qh]=n.MIN,he[Yh]=n.MAX;const U={[$h]:n.ZERO,[Zh]:n.ONE,[Jh]:n.SRC_COLOR,[Ra]:n.SRC_ALPHA,[nd]:n.SRC_ALPHA_SATURATE,[td]:n.DST_COLOR,[jh]:n.DST_ALPHA,[Kh]:n.ONE_MINUS_SRC_COLOR,[Ca]:n.ONE_MINUS_SRC_ALPHA,[ed]:n.ONE_MINUS_DST_COLOR,[Qh]:n.ONE_MINUS_DST_ALPHA,[id]:n.CONSTANT_COLOR,[rd]:n.ONE_MINUS_CONSTANT_COLOR,[sd]:n.CONSTANT_ALPHA,[od]:n.ONE_MINUS_CONSTANT_ALPHA};function ht(F,st,ft,wt,lt,ct,zt,Pt,se,Kt){if(F===gi){v===!0&&(Rt(n.BLEND),v=!1);return}if(v===!1&&(at(n.BLEND),v=!0),F!==Gh){if(F!==m||Kt!==S){if((p!==Oi||_!==Oi)&&(n.blendEquation(n.FUNC_ADD),p=Oi,_=Oi),Kt)switch(F){case Dr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nr:n.blendFunc(n.ONE,n.ONE);break;case sl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ol:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Dr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case sl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ol:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}E=null,x=null,w=null,M=null,T.set(0,0,0),A=0,m=F,S=Kt}return}lt=lt||st,ct=ct||ft,zt=zt||wt,(st!==p||lt!==_)&&(n.blendEquationSeparate(he[st],he[lt]),p=st,_=lt),(ft!==E||wt!==x||ct!==w||zt!==M)&&(n.blendFuncSeparate(U[ft],U[wt],U[ct],U[zt]),E=ft,x=wt,w=ct,M=zt),(Pt.equals(T)===!1||se!==A)&&(n.blendColor(Pt.r,Pt.g,Pt.b,se),T.copy(Pt),A=se),m=F,S=!1}function it(F,st){F.side===Se?Rt(n.CULL_FACE):at(n.CULL_FACE);let ft=F.side===nn;st&&(ft=!ft),nt(ft),F.blending===Dr&&F.transparent===!1?ht(gi):ht(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const wt=F.stencilWrite;a.setTest(wt),wt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),mt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?at(n.SAMPLE_ALPHA_TO_COVERAGE):Rt(n.SAMPLE_ALPHA_TO_COVERAGE)}function nt(F){y!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),y=F)}function tt(F){F!==Hh?(at(n.CULL_FACE),F!==R&&(F===rl?n.cullFace(n.BACK):F===Vh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Rt(n.CULL_FACE),R=F}function Mt(F){F!==P&&(V&&n.lineWidth(F),P=F)}function mt(F,st,ft){F?(at(n.POLYGON_OFFSET_FILL),(N!==st||O!==ft)&&(n.polygonOffset(st,ft),N=st,O=ft)):Rt(n.POLYGON_OFFSET_FILL)}function yt(F){F?at(n.SCISSOR_TEST):Rt(n.SCISSOR_TEST)}function Zt(F){F===void 0&&(F=n.TEXTURE0+B-1),pt!==F&&(n.activeTexture(F),pt=F)}function Xt(F,st,ft){ft===void 0&&(pt===null?ft=n.TEXTURE0+B-1:ft=pt);let wt=D[ft];wt===void 0&&(wt={type:void 0,texture:void 0},D[ft]=wt),(wt.type!==F||wt.texture!==st)&&(pt!==ft&&(n.activeTexture(ft),pt=ft),n.bindTexture(F,st||X[F]),wt.type=F,wt.texture=st)}function L(){const F=D[pt];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function b(){try{n.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function k(){try{n.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{n.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ut(){try{n.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Nt(){try{n.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xt(){try{n.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ft(){try{n.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ot(){try{n.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function gt(){try{n.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function At(F){rt.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),rt.copy(F))}function W(F){bt.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),bt.copy(F))}function et(F,st){let ft=l.get(st);ft===void 0&&(ft=new WeakMap,l.set(st,ft));let wt=ft.get(F);wt===void 0&&(wt=n.getUniformBlockIndex(st,F.name),ft.set(F,wt))}function Q(F,st){const wt=l.get(st).get(F);c.get(st)!==wt&&(n.uniformBlockBinding(st,wt,F.__bindingPointIndex),c.set(st,wt))}function Et(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},pt=null,D={},h={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,E=null,x=null,_=null,w=null,M=null,T=new ie(0,0,0),A=0,S=!1,y=null,R=null,P=null,N=null,O=null,rt.set(0,0,n.canvas.width,n.canvas.height),bt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:at,disable:Rt,bindFramebuffer:Ht,drawBuffers:Bt,useProgram:te,setBlending:ht,setMaterial:it,setFlipSided:nt,setCullFace:tt,setLineWidth:Mt,setPolygonOffset:mt,setScissorTest:yt,activeTexture:Zt,bindTexture:Xt,unbindTexture:L,compressedTexImage2D:b,compressedTexImage3D:k,texImage2D:Ot,texImage3D:gt,updateUBOMapping:et,uniformBlockBinding:Q,texStorage2D:xt,texStorage3D:Ft,texSubImage2D:J,texSubImage3D:ut,compressedTexSubImage2D:K,compressedTexSubImage3D:Nt,scissor:At,viewport:W,reset:Et}}function U_(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new St,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,b){return d?new OffscreenCanvas(L,b):Ao("canvas")}function v(L,b,k){let J=1;const ut=Xt(L);if((ut.width>k||ut.height>k)&&(J=k/Math.max(ut.width,ut.height)),J<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const K=Math.floor(J*ut.width),Nt=Math.floor(J*ut.height);h===void 0&&(h=g(K,Nt));const xt=b?g(K,Nt):h;return xt.width=K,xt.height=Nt,xt.getContext("2d").drawImage(L,0,0,K,Nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ut.width+"x"+ut.height+") to ("+K+"x"+Nt+")."),xt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ut.width+"x"+ut.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){n.generateMipmap(L)}function E(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(L,b,k,J,ut=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let K=b;if(b===n.RED&&(k===n.FLOAT&&(K=n.R32F),k===n.HALF_FLOAT&&(K=n.R16F),k===n.UNSIGNED_BYTE&&(K=n.R8)),b===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.R8UI),k===n.UNSIGNED_SHORT&&(K=n.R16UI),k===n.UNSIGNED_INT&&(K=n.R32UI),k===n.BYTE&&(K=n.R8I),k===n.SHORT&&(K=n.R16I),k===n.INT&&(K=n.R32I)),b===n.RG&&(k===n.FLOAT&&(K=n.RG32F),k===n.HALF_FLOAT&&(K=n.RG16F),k===n.UNSIGNED_BYTE&&(K=n.RG8)),b===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RG8UI),k===n.UNSIGNED_SHORT&&(K=n.RG16UI),k===n.UNSIGNED_INT&&(K=n.RG32UI),k===n.BYTE&&(K=n.RG8I),k===n.SHORT&&(K=n.RG16I),k===n.INT&&(K=n.RG32I)),b===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RGB8UI),k===n.UNSIGNED_SHORT&&(K=n.RGB16UI),k===n.UNSIGNED_INT&&(K=n.RGB32UI),k===n.BYTE&&(K=n.RGB8I),k===n.SHORT&&(K=n.RGB16I),k===n.INT&&(K=n.RGB32I)),b===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),k===n.UNSIGNED_INT&&(K=n.RGBA32UI),k===n.BYTE&&(K=n.RGBA8I),k===n.SHORT&&(K=n.RGBA16I),k===n.INT&&(K=n.RGBA32I)),b===n.RGB&&(k===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),b===n.RGBA){const Nt=ut?bo:ue.getTransfer(J);k===n.FLOAT&&(K=n.RGBA32F),k===n.HALF_FLOAT&&(K=n.RGBA16F),k===n.UNSIGNED_BYTE&&(K=Nt===ge?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function _(L,b){let k;return L?b===null||b===Zi||b===xs?k=n.DEPTH24_STENCIL8:b===In?k=n.DEPTH32F_STENCIL8:b===_s&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Zi||b===xs?k=n.DEPTH_COMPONENT24:b===In?k=n.DEPTH_COMPONENT32F:b===_s&&(k=n.DEPTH_COMPONENT16),k}function w(L,b){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==fn&&L.minFilter!==Dn?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function M(L){const b=L.target;b.removeEventListener("dispose",M),A(b),b.isVideoTexture&&u.delete(b)}function T(L){const b=L.target;b.removeEventListener("dispose",T),y(b)}function A(L){const b=i.get(L);if(b.__webglInit===void 0)return;const k=L.source,J=f.get(k);if(J){const ut=J[b.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&S(L),Object.keys(J).length===0&&f.delete(k)}i.remove(L)}function S(L){const b=i.get(L);n.deleteTexture(b.__webglTexture);const k=L.source,J=f.get(k);delete J[b.__cacheKey],o.memory.textures--}function y(L){const b=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(b.__webglFramebuffer[J]))for(let ut=0;ut<b.__webglFramebuffer[J].length;ut++)n.deleteFramebuffer(b.__webglFramebuffer[J][ut]);else n.deleteFramebuffer(b.__webglFramebuffer[J]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[J])}else{if(Array.isArray(b.__webglFramebuffer))for(let J=0;J<b.__webglFramebuffer.length;J++)n.deleteFramebuffer(b.__webglFramebuffer[J]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let J=0;J<b.__webglColorRenderbuffer.length;J++)b.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[J]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const k=L.textures;for(let J=0,ut=k.length;J<ut;J++){const K=i.get(k[J]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(k[J])}i.remove(L)}let R=0;function P(){R=0}function N(){const L=R;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),R+=1,L}function O(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function B(L,b){const k=i.get(L);if(L.isVideoTexture&&yt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&k.__version!==L.version){const J=L.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(k,L,b);return}}else L.isExternalTexture&&(k.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+b)}function V(L,b){const k=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&k.__version!==L.version){X(k,L,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+b)}function $(L,b){const k=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&k.__version!==L.version){X(k,L,b);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+b)}function G(L,b){const k=i.get(L);if(L.version>0&&k.__version!==L.version){at(k,L,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+b)}const pt={[gs]:n.REPEAT,[Vi]:n.CLAMP_TO_EDGE,[Ba]:n.MIRRORED_REPEAT},D={[fn]:n.NEAREST,[md]:n.NEAREST_MIPMAP_NEAREST,[ks]:n.NEAREST_MIPMAP_LINEAR,[Dn]:n.LINEAR,[qo]:n.LINEAR_MIPMAP_NEAREST,[Gi]:n.LINEAR_MIPMAP_LINEAR},q={[vd]:n.NEVER,[bd]:n.ALWAYS,[Md]:n.LESS,[zu]:n.LEQUAL,[yd]:n.EQUAL,[wd]:n.GEQUAL,[Sd]:n.GREATER,[Ed]:n.NOTEQUAL};function ot(L,b){if(b.type===In&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Dn||b.magFilter===qo||b.magFilter===ks||b.magFilter===Gi||b.minFilter===Dn||b.minFilter===qo||b.minFilter===ks||b.minFilter===Gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,pt[b.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,pt[b.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,pt[b.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,D[b.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,D[b.minFilter]),b.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,q[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===fn||b.minFilter!==ks&&b.minFilter!==Gi||b.type===In&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");n.texParameterf(L,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function rt(L,b){let k=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",M));const J=b.source;let ut=f.get(J);ut===void 0&&(ut={},f.set(J,ut));const K=O(b);if(K!==L.__cacheKey){ut[K]===void 0&&(ut[K]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ut[K].usedTimes++;const Nt=ut[L.__cacheKey];Nt!==void 0&&(ut[L.__cacheKey].usedTimes--,Nt.usedTimes===0&&S(b)),L.__cacheKey=K,L.__webglTexture=ut[K].texture}return k}function bt(L,b,k){return Math.floor(Math.floor(L/k)/b)}function vt(L,b,k,J){const K=L.updateRanges;if(K.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,k,J,b.data);else{K.sort((gt,At)=>gt.start-At.start);let Nt=0;for(let gt=1;gt<K.length;gt++){const At=K[Nt],W=K[gt],et=At.start+At.count,Q=bt(W.start,b.width,4),Et=bt(At.start,b.width,4);W.start<=et+1&&Q===Et&&bt(W.start+W.count-1,b.width,4)===Q?At.count=Math.max(At.count,W.start+W.count-At.start):(++Nt,K[Nt]=W)}K.length=Nt+1;const xt=n.getParameter(n.UNPACK_ROW_LENGTH),Ft=n.getParameter(n.UNPACK_SKIP_PIXELS),Ot=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let gt=0,At=K.length;gt<At;gt++){const W=K[gt],et=Math.floor(W.start/4),Q=Math.ceil(W.count/4),Et=et%b.width,F=Math.floor(et/b.width),st=Q,ft=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Et),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),e.texSubImage2D(n.TEXTURE_2D,0,Et,F,st,ft,k,J,b.data)}L.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,xt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ft),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ot)}}function X(L,b,k){let J=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(J=n.TEXTURE_3D);const ut=rt(L,b),K=b.source;e.bindTexture(J,L.__webglTexture,n.TEXTURE0+k);const Nt=i.get(K);if(K.version!==Nt.__version||ut===!0){e.activeTexture(n.TEXTURE0+k);const xt=ue.getPrimaries(ue.workingColorSpace),Ft=b.colorSpace===ui?null:ue.getPrimaries(b.colorSpace),Ot=b.colorSpace===ui||xt===Ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);let gt=v(b.image,!1,r.maxTextureSize);gt=Zt(b,gt);const At=s.convert(b.format,b.colorSpace),W=s.convert(b.type);let et=x(b.internalFormat,At,W,b.colorSpace,b.isVideoTexture);ot(J,b);let Q;const Et=b.mipmaps,F=b.isVideoTexture!==!0,st=Nt.__version===void 0||ut===!0,ft=K.dataReady,wt=w(b,gt);if(b.isDepthTexture)et=_(b.format===Ms,b.type),st&&(F?e.texStorage2D(n.TEXTURE_2D,1,et,gt.width,gt.height):e.texImage2D(n.TEXTURE_2D,0,et,gt.width,gt.height,0,At,W,null));else if(b.isDataTexture)if(Et.length>0){F&&st&&e.texStorage2D(n.TEXTURE_2D,wt,et,Et[0].width,Et[0].height);for(let lt=0,ct=Et.length;lt<ct;lt++)Q=Et[lt],F?ft&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,Q.width,Q.height,At,W,Q.data):e.texImage2D(n.TEXTURE_2D,lt,et,Q.width,Q.height,0,At,W,Q.data);b.generateMipmaps=!1}else F?(st&&e.texStorage2D(n.TEXTURE_2D,wt,et,gt.width,gt.height),ft&&vt(b,gt,At,W)):e.texImage2D(n.TEXTURE_2D,0,et,gt.width,gt.height,0,At,W,gt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){F&&st&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,et,Et[0].width,Et[0].height,gt.depth);for(let lt=0,ct=Et.length;lt<ct;lt++)if(Q=Et[lt],b.format!==An)if(At!==null)if(F){if(ft)if(b.layerUpdates.size>0){const zt=Xl(Q.width,Q.height,b.format,b.type);for(const Pt of b.layerUpdates){const se=Q.data.subarray(Pt*zt/Q.data.BYTES_PER_ELEMENT,(Pt+1)*zt/Q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,Pt,Q.width,Q.height,1,At,se)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,0,Q.width,Q.height,gt.depth,At,Q.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,lt,et,Q.width,Q.height,gt.depth,0,Q.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ft&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,0,Q.width,Q.height,gt.depth,At,W,Q.data):e.texImage3D(n.TEXTURE_2D_ARRAY,lt,et,Q.width,Q.height,gt.depth,0,At,W,Q.data)}else{F&&st&&e.texStorage2D(n.TEXTURE_2D,wt,et,Et[0].width,Et[0].height);for(let lt=0,ct=Et.length;lt<ct;lt++)Q=Et[lt],b.format!==An?At!==null?F?ft&&e.compressedTexSubImage2D(n.TEXTURE_2D,lt,0,0,Q.width,Q.height,At,Q.data):e.compressedTexImage2D(n.TEXTURE_2D,lt,et,Q.width,Q.height,0,Q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ft&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,Q.width,Q.height,At,W,Q.data):e.texImage2D(n.TEXTURE_2D,lt,et,Q.width,Q.height,0,At,W,Q.data)}else if(b.isDataArrayTexture)if(F){if(st&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,et,gt.width,gt.height,gt.depth),ft)if(b.layerUpdates.size>0){const lt=Xl(gt.width,gt.height,b.format,b.type);for(const ct of b.layerUpdates){const zt=gt.data.subarray(ct*lt/gt.data.BYTES_PER_ELEMENT,(ct+1)*lt/gt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ct,gt.width,gt.height,1,At,W,zt)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,At,W,gt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,et,gt.width,gt.height,gt.depth,0,At,W,gt.data);else if(b.isData3DTexture)F?(st&&e.texStorage3D(n.TEXTURE_3D,wt,et,gt.width,gt.height,gt.depth),ft&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,At,W,gt.data)):e.texImage3D(n.TEXTURE_3D,0,et,gt.width,gt.height,gt.depth,0,At,W,gt.data);else if(b.isFramebufferTexture){if(st)if(F)e.texStorage2D(n.TEXTURE_2D,wt,et,gt.width,gt.height);else{let lt=gt.width,ct=gt.height;for(let zt=0;zt<wt;zt++)e.texImage2D(n.TEXTURE_2D,zt,et,lt,ct,0,At,W,null),lt>>=1,ct>>=1}}else if(Et.length>0){if(F&&st){const lt=Xt(Et[0]);e.texStorage2D(n.TEXTURE_2D,wt,et,lt.width,lt.height)}for(let lt=0,ct=Et.length;lt<ct;lt++)Q=Et[lt],F?ft&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,At,W,Q):e.texImage2D(n.TEXTURE_2D,lt,et,At,W,Q);b.generateMipmaps=!1}else if(F){if(st){const lt=Xt(gt);e.texStorage2D(n.TEXTURE_2D,wt,et,lt.width,lt.height)}ft&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,At,W,gt)}else e.texImage2D(n.TEXTURE_2D,0,et,At,W,gt);m(b)&&p(J),Nt.__version=K.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function at(L,b,k){if(b.image.length!==6)return;const J=rt(L,b),ut=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+k);const K=i.get(ut);if(ut.version!==K.__version||J===!0){e.activeTexture(n.TEXTURE0+k);const Nt=ue.getPrimaries(ue.workingColorSpace),xt=b.colorSpace===ui?null:ue.getPrimaries(b.colorSpace),Ft=b.colorSpace===ui||Nt===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);const Ot=b.isCompressedTexture||b.image[0].isCompressedTexture,gt=b.image[0]&&b.image[0].isDataTexture,At=[];for(let ct=0;ct<6;ct++)!Ot&&!gt?At[ct]=v(b.image[ct],!0,r.maxCubemapSize):At[ct]=gt?b.image[ct].image:b.image[ct],At[ct]=Zt(b,At[ct]);const W=At[0],et=s.convert(b.format,b.colorSpace),Q=s.convert(b.type),Et=x(b.internalFormat,et,Q,b.colorSpace),F=b.isVideoTexture!==!0,st=K.__version===void 0||J===!0,ft=ut.dataReady;let wt=w(b,W);ot(n.TEXTURE_CUBE_MAP,b);let lt;if(Ot){F&&st&&e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,Et,W.width,W.height);for(let ct=0;ct<6;ct++){lt=At[ct].mipmaps;for(let zt=0;zt<lt.length;zt++){const Pt=lt[zt];b.format!==An?et!==null?F?ft&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt,0,0,Pt.width,Pt.height,et,Pt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt,Et,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ft&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt,0,0,Pt.width,Pt.height,et,Q,Pt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt,Et,Pt.width,Pt.height,0,et,Q,Pt.data)}}}else{if(lt=b.mipmaps,F&&st){lt.length>0&&wt++;const ct=Xt(At[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,Et,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(gt){F?ft&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,At[ct].width,At[ct].height,et,Q,At[ct].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Et,At[ct].width,At[ct].height,0,et,Q,At[ct].data);for(let zt=0;zt<lt.length;zt++){const se=lt[zt].image[ct].image;F?ft&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt+1,0,0,se.width,se.height,et,Q,se.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt+1,Et,se.width,se.height,0,et,Q,se.data)}}else{F?ft&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,et,Q,At[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Et,et,Q,At[ct]);for(let zt=0;zt<lt.length;zt++){const Pt=lt[zt];F?ft&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt+1,0,0,et,Q,Pt.image[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt+1,Et,et,Q,Pt.image[ct])}}}m(b)&&p(n.TEXTURE_CUBE_MAP),K.__version=ut.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Rt(L,b,k,J,ut,K){const Nt=s.convert(k.format,k.colorSpace),xt=s.convert(k.type),Ft=x(k.internalFormat,Nt,xt,k.colorSpace),Ot=i.get(b),gt=i.get(k);if(gt.__renderTarget=b,!Ot.__hasExternalTextures){const At=Math.max(1,b.width>>K),W=Math.max(1,b.height>>K);ut===n.TEXTURE_3D||ut===n.TEXTURE_2D_ARRAY?e.texImage3D(ut,K,Ft,At,W,b.depth,0,Nt,xt,null):e.texImage2D(ut,K,Ft,At,W,0,Nt,xt,null)}e.bindFramebuffer(n.FRAMEBUFFER,L),mt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,ut,gt.__webglTexture,0,Mt(b)):(ut===n.TEXTURE_2D||ut>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,ut,gt.__webglTexture,K),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ht(L,b,k){if(n.bindRenderbuffer(n.RENDERBUFFER,L),b.depthBuffer){const J=b.depthTexture,ut=J&&J.isDepthTexture?J.type:null,K=_(b.stencilBuffer,ut),Nt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=Mt(b);mt(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt,K,b.width,b.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt,K,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,K,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Nt,n.RENDERBUFFER,L)}else{const J=b.textures;for(let ut=0;ut<J.length;ut++){const K=J[ut],Nt=s.convert(K.format,K.colorSpace),xt=s.convert(K.type),Ft=x(K.internalFormat,Nt,xt,K.colorSpace),Ot=Mt(b);k&&mt(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ot,Ft,b.width,b.height):mt(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ot,Ft,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Ft,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Bt(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(b.depthTexture);J.__renderTarget=b,(!J.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),B(b.depthTexture,0);const ut=J.__webglTexture,K=Mt(b);if(b.depthTexture.format===vs)mt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ut,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ut,0);else if(b.depthTexture.format===Ms)mt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ut,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ut,0);else throw new Error("Unknown depthTexture format")}function te(L){const b=i.get(L),k=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const J=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),J){const ut=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,J.removeEventListener("dispose",ut)};J.addEventListener("dispose",ut),b.__depthDisposeCallback=ut}b.__boundDepthTexture=J}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const J=L.texture.mipmaps;J&&J.length>0?Bt(b.__webglFramebuffer[0],L):Bt(b.__webglFramebuffer,L)}else if(k){b.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[J]),b.__webglDepthbuffer[J]===void 0)b.__webglDepthbuffer[J]=n.createRenderbuffer(),Ht(b.__webglDepthbuffer[J],L,!1);else{const ut=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,ut,n.RENDERBUFFER,K)}}else{const J=L.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),Ht(b.__webglDepthbuffer,L,!1);else{const ut=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,ut,n.RENDERBUFFER,K)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function he(L,b,k){const J=i.get(L);b!==void 0&&Rt(J.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&te(L)}function U(L){const b=L.texture,k=i.get(L),J=i.get(b);L.addEventListener("dispose",T);const ut=L.textures,K=L.isWebGLCubeRenderTarget===!0,Nt=ut.length>1;if(Nt||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=b.version,o.memory.textures++),K){k.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[xt]=[];for(let Ft=0;Ft<b.mipmaps.length;Ft++)k.__webglFramebuffer[xt][Ft]=n.createFramebuffer()}else k.__webglFramebuffer[xt]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let xt=0;xt<b.mipmaps.length;xt++)k.__webglFramebuffer[xt]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(Nt)for(let xt=0,Ft=ut.length;xt<Ft;xt++){const Ot=i.get(ut[xt]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=n.createTexture(),o.memory.textures++)}if(L.samples>0&&mt(L)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let xt=0;xt<ut.length;xt++){const Ft=ut[xt];k.__webglColorRenderbuffer[xt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[xt]);const Ot=s.convert(Ft.format,Ft.colorSpace),gt=s.convert(Ft.type),At=x(Ft.internalFormat,Ot,gt,Ft.colorSpace,L.isXRRenderTarget===!0),W=Mt(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,W,At,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,k.__webglColorRenderbuffer[xt])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Ht(k.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){e.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),ot(n.TEXTURE_CUBE_MAP,b);for(let xt=0;xt<6;xt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ft=0;Ft<b.mipmaps.length;Ft++)Rt(k.__webglFramebuffer[xt][Ft],L,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ft);else Rt(k.__webglFramebuffer[xt],L,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);m(b)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Nt){for(let xt=0,Ft=ut.length;xt<Ft;xt++){const Ot=ut[xt],gt=i.get(Ot);let At=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(At=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(At,gt.__webglTexture),ot(At,Ot),Rt(k.__webglFramebuffer,L,Ot,n.COLOR_ATTACHMENT0+xt,At,0),m(Ot)&&p(At)}e.unbindTexture()}else{let xt=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(xt=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(xt,J.__webglTexture),ot(xt,b),b.mipmaps&&b.mipmaps.length>0)for(let Ft=0;Ft<b.mipmaps.length;Ft++)Rt(k.__webglFramebuffer[Ft],L,b,n.COLOR_ATTACHMENT0,xt,Ft);else Rt(k.__webglFramebuffer,L,b,n.COLOR_ATTACHMENT0,xt,0);m(b)&&p(xt),e.unbindTexture()}L.depthBuffer&&te(L)}function ht(L){const b=L.textures;for(let k=0,J=b.length;k<J;k++){const ut=b[k];if(m(ut)){const K=E(L),Nt=i.get(ut).__webglTexture;e.bindTexture(K,Nt),p(K),e.unbindTexture()}}}const it=[],nt=[];function tt(L){if(L.samples>0){if(mt(L)===!1){const b=L.textures,k=L.width,J=L.height;let ut=n.COLOR_BUFFER_BIT;const K=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Nt=i.get(L),xt=b.length>1;if(xt)for(let Ot=0;Ot<b.length;Ot++)e.bindFramebuffer(n.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ot,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Nt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ot,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer);const Ft=L.texture.mipmaps;Ft&&Ft.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Ot=0;Ot<b.length;Ot++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ut|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ut|=n.STENCIL_BUFFER_BIT)),xt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Nt.__webglColorRenderbuffer[Ot]);const gt=i.get(b[Ot]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,gt,0)}n.blitFramebuffer(0,0,k,J,0,0,k,J,ut,n.NEAREST),c===!0&&(it.length=0,nt.length=0,it.push(n.COLOR_ATTACHMENT0+Ot),L.depthBuffer&&L.resolveDepthBuffer===!1&&(it.push(K),nt.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,nt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xt)for(let Ot=0;Ot<b.length;Ot++){e.bindFramebuffer(n.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ot,n.RENDERBUFFER,Nt.__webglColorRenderbuffer[Ot]);const gt=i.get(b[Ot]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Nt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ot,n.TEXTURE_2D,gt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const b=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function Mt(L){return Math.min(r.maxSamples,L.samples)}function mt(L){const b=i.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function yt(L){const b=o.render.frame;u.get(L)!==b&&(u.set(L,b),L.update())}function Zt(L,b){const k=L.colorSpace,J=L.format,ut=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||k!==Br&&k!==ui&&(ue.getTransfer(k)===ge?(J!==An||ut!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),b}function Xt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=P,this.setTexture2D=B,this.setTexture2DArray=V,this.setTexture3D=$,this.setTextureCube=G,this.rebindTextures=he,this.setupRenderTarget=U,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=mt}function N_(n,t){function e(i,r=ui){let s;const o=ue.getTransfer(r);if(i===zn)return n.UNSIGNED_BYTE;if(i===wc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===bc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Du)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Iu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Pu)return n.BYTE;if(i===Lu)return n.SHORT;if(i===_s)return n.UNSIGNED_SHORT;if(i===Ec)return n.INT;if(i===Zi)return n.UNSIGNED_INT;if(i===In)return n.FLOAT;if(i===Ls)return n.HALF_FLOAT;if(i===Uu)return n.ALPHA;if(i===Nu)return n.RGB;if(i===An)return n.RGBA;if(i===vs)return n.DEPTH_COMPONENT;if(i===Ms)return n.DEPTH_STENCIL;if(i===Tc)return n.RED;if(i===Ac)return n.RED_INTEGER;if(i===Fu)return n.RG;if(i===Rc)return n.RG_INTEGER;if(i===Cc)return n.RGBA_INTEGER;if(i===vo||i===Mo||i===yo||i===So)if(o===ge)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===vo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===So)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===vo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Mo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===yo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===So)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ka||i===Ha||i===Va||i===Ga)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ka)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ha)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Va)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ga)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wa||i===Xa||i===qa)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Wa||i===Xa)return o===ge?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===qa)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ya||i===$a||i===Za||i===Ja||i===Ka||i===ja||i===Qa||i===tc||i===ec||i===nc||i===ic||i===rc||i===sc||i===oc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ya)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$a)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Za)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ja)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ka)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ja)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qa)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===tc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ec)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===nc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ic)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===oc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ac||i===cc||i===lc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===ac)return o===ge?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===uc||i===hc||i===dc||i===fc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===uc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===hc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===dc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const F_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O_=`
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

}`;class z_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Ju(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new kn({vertexShader:F_,fragmentShader:O_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Jt(new Rn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class B_ extends Gr{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null;const v=typeof XRWebGLBinding<"u",m=new z_,p={},E=e.getContextAttributes();let x=null,_=null;const w=[],M=[],T=new St;let A=null;const S=new dn;S.viewport=new fe;const y=new dn;y.viewport=new fe;const R=[S,y],P=new op;let N=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let at=w[X];return at===void 0&&(at=new fa,w[X]=at),at.getTargetRaySpace()},this.getControllerGrip=function(X){let at=w[X];return at===void 0&&(at=new fa,w[X]=at),at.getGripSpace()},this.getHand=function(X){let at=w[X];return at===void 0&&(at=new fa,w[X]=at),at.getHandSpace()};function B(X){const at=M.indexOf(X.inputSource);if(at===-1)return;const Rt=w[at];Rt!==void 0&&(Rt.update(X.inputSource,X.frame,l||o),Rt.dispatchEvent({type:X.type,data:X.inputSource}))}function V(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",$);for(let X=0;X<w.length;X++){const at=M[X];at!==null&&(M[X]=null,w[X].disconnect(at))}N=null,O=null,m.reset();for(const X in p)delete p[X];t.setRenderTarget(x),d=null,f=null,h=null,r=null,_=null,vt.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(r,e)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(x=t.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",V),r.addEventListener("inputsourceschange",$),E.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(T),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,Ht=null,Bt=null;E.depth&&(Bt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Rt=E.stencil?Ms:vs,Ht=E.stencil?xs:Zi);const te={colorFormat:e.RGBA8,depthFormat:Bt,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(te),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new Ji(f.textureWidth,f.textureHeight,{format:An,type:zn,depthTexture:new Zu(f.textureWidth,f.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Rt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,Rt),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Ji(d.framebufferWidth,d.framebufferHeight,{format:An,type:zn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),vt.setContext(r),vt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(X){for(let at=0;at<X.removed.length;at++){const Rt=X.removed[at],Ht=M.indexOf(Rt);Ht>=0&&(M[Ht]=null,w[Ht].disconnect(Rt))}for(let at=0;at<X.added.length;at++){const Rt=X.added[at];let Ht=M.indexOf(Rt);if(Ht===-1){for(let te=0;te<w.length;te++)if(te>=M.length){M.push(Rt),Ht=te;break}else if(M[te]===null){M[te]=Rt,Ht=te;break}if(Ht===-1)break}const Bt=w[Ht];Bt&&Bt.connect(Rt)}}const G=new I,pt=new I;function D(X,at,Rt){G.setFromMatrixPosition(at.matrixWorld),pt.setFromMatrixPosition(Rt.matrixWorld);const Ht=G.distanceTo(pt),Bt=at.projectionMatrix.elements,te=Rt.projectionMatrix.elements,he=Bt[14]/(Bt[10]-1),U=Bt[14]/(Bt[10]+1),ht=(Bt[9]+1)/Bt[5],it=(Bt[9]-1)/Bt[5],nt=(Bt[8]-1)/Bt[0],tt=(te[8]+1)/te[0],Mt=he*nt,mt=he*tt,yt=Ht/(-nt+tt),Zt=yt*-nt;if(at.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Zt),X.translateZ(yt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Bt[10]===-1)X.projectionMatrix.copy(at.projectionMatrix),X.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const Xt=he+yt,L=U+yt,b=Mt-Zt,k=mt+(Ht-Zt),J=ht*U/L*Xt,ut=it*U/L*Xt;X.projectionMatrix.makePerspective(b,k,J,ut,Xt,L),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function q(X,at){at===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(at.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let at=X.near,Rt=X.far;m.texture!==null&&(m.depthNear>0&&(at=m.depthNear),m.depthFar>0&&(Rt=m.depthFar)),P.near=y.near=S.near=at,P.far=y.far=S.far=Rt,(N!==P.near||O!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),N=P.near,O=P.far),P.layers.mask=X.layers.mask|6,S.layers.mask=P.layers.mask&3,y.layers.mask=P.layers.mask&5;const Ht=X.parent,Bt=P.cameras;q(P,Ht);for(let te=0;te<Bt.length;te++)q(Bt[te],Ht);Bt.length===2?D(P,S,y):P.projectionMatrix.copy(S.projectionMatrix),ot(X,P,Ht)};function ot(X,at,Rt){Rt===null?X.matrix.copy(at.matrixWorld):(X.matrix.copy(Rt.matrixWorld),X.matrix.invert(),X.matrix.multiply(at.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(at.projectionMatrix),X.projectionMatrixInverse.copy(at.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ys*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(P)},this.getCameraTexture=function(X){return p[X]};let rt=null;function bt(X,at){if(u=at.getViewerPose(l||o),g=at,u!==null){const Rt=u.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let Ht=!1;Rt.length!==P.cameras.length&&(P.cameras.length=0,Ht=!0);for(let U=0;U<Rt.length;U++){const ht=Rt[U];let it=null;if(d!==null)it=d.getViewport(ht);else{const tt=h.getViewSubImage(f,ht);it=tt.viewport,U===0&&(t.setRenderTargetTextures(_,tt.colorTexture,tt.depthStencilTexture),t.setRenderTarget(_))}let nt=R[U];nt===void 0&&(nt=new dn,nt.layers.enable(U),nt.viewport=new fe,R[U]=nt),nt.matrix.fromArray(ht.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(ht.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(it.x,it.y,it.width,it.height),U===0&&(P.matrix.copy(nt.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Ht===!0&&P.cameras.push(nt)}const Bt=r.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){h=i.getBinding();const U=h.getDepthInformation(Rt[0]);U&&U.isValid&&U.texture&&m.init(U,r.renderState)}if(Bt&&Bt.includes("camera-access")&&v){t.state.unbindTexture(),h=i.getBinding();for(let U=0;U<Rt.length;U++){const ht=Rt[U].camera;if(ht){let it=p[ht];it||(it=new Ju,p[ht]=it);const nt=h.getCameraImage(ht);it.sourceTexture=nt}}}}for(let Rt=0;Rt<w.length;Rt++){const Ht=M[Rt],Bt=w[Rt];Ht!==null&&Bt!==void 0&&Bt.update(Ht,at,l||o)}rt&&rt(X,at),at.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:at}),g=null}const vt=new uh;vt.setAnimationLoop(bt),this.setAnimationLoop=function(X){rt=X},this.dispose=function(){}}}const Di=new Bn,k_=new xe;function H_(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Xu(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,E,x,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,E,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=t.get(p),x=E.envMap,_=E.envMapRotation;x&&(m.envMap.value=x,Di.copy(_),Di.x*=-1,Di.y*=-1,Di.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),m.envMapRotation.value.setFromMatrix4(k_.makeRotationFromEuler(Di)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,E,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function V_(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,x){const _=x.program;i.uniformBlockBinding(E,_)}function l(E,x){let _=r[E.id];_===void 0&&(g(E),_=u(E),r[E.id]=_,E.addEventListener("dispose",m));const w=x.program;i.updateUBOMapping(E,w);const M=t.render.frame;s[E.id]!==M&&(f(E),s[E.id]=M)}function u(E){const x=h();E.__bindingPointIndex=x;const _=n.createBuffer(),w=E.__size,M=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,w,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,_),_}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const x=r[E.id],_=E.uniforms,w=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let M=0,T=_.length;M<T;M++){const A=Array.isArray(_[M])?_[M]:[_[M]];for(let S=0,y=A.length;S<y;S++){const R=A[S];if(d(R,M,S,w)===!0){const P=R.__offset,N=Array.isArray(R.value)?R.value:[R.value];let O=0;for(let B=0;B<N.length;B++){const V=N[B],$=v(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,P+O,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,O),O+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,P,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(E,x,_,w){const M=E.value,T=x+"_"+_;if(w[T]===void 0)return typeof M=="number"||typeof M=="boolean"?w[T]=M:w[T]=M.clone(),!0;{const A=w[T];if(typeof M=="number"||typeof M=="boolean"){if(A!==M)return w[T]=M,!0}else if(A.equals(M)===!1)return A.copy(M),!0}return!1}function g(E){const x=E.uniforms;let _=0;const w=16;for(let T=0,A=x.length;T<A;T++){const S=Array.isArray(x[T])?x[T]:[x[T]];for(let y=0,R=S.length;y<R;y++){const P=S[y],N=Array.isArray(P.value)?P.value:[P.value];for(let O=0,B=N.length;O<B;O++){const V=N[O],$=v(V),G=_%w,pt=G%$.boundary,D=G+pt;_+=pt,D!==0&&w-D<$.storage&&(_+=w-D),P.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=_,_+=$.storage}}}const M=_%w;return M>0&&(_+=w-M),E.__size=_,E.__cache={},this}function v(E){const x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function m(E){const x=E.target;x.removeEventListener("dispose",m);const _=o.indexOf(x.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const E in r)n.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}class G_{constructor(t={}){const{canvas:e=Vd(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const E=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let w=!1;this._outputColorSpace=je;let M=0,T=0,A=null,S=-1,y=null;const R=new fe,P=new fe;let N=null;const O=new ie(0);let B=0,V=e.width,$=e.height,G=1,pt=null,D=null;const q=new fe(0,0,V,$),ot=new fe(0,0,V,$);let rt=!1;const bt=new Uc;let vt=!1,X=!1;const at=new xe,Rt=new I,Ht=new fe,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function he(){return A===null?G:1}let U=i;function ht(C,z){return e.getContext(C,z)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Sc}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",lt,!1),U===null){const z="webgl2";if(U=ht(z,C),U===null)throw ht(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let it,nt,tt,Mt,mt,yt,Zt,Xt,L,b,k,J,ut,K,Nt,xt,Ft,Ot,gt,At,W,et,Q,Et;function F(){it=new Qg(U),it.init(),et=new N_(U,it),nt=new qg(U,it,t,et),tt=new I_(U,it),nt.reversedDepthBuffer&&f&&tt.buffers.depth.setReversed(!0),Mt=new n0(U),mt=new M_,yt=new U_(U,it,tt,mt,nt,et,Mt),Zt=new $g(_),Xt=new jg(_),L=new cp(U),Q=new Wg(U,L),b=new t0(U,L,Mt,Q),k=new r0(U,b,L,Mt),gt=new i0(U,nt,yt),xt=new Yg(mt),J=new v_(_,Zt,Xt,it,nt,Q,xt),ut=new H_(_,mt),K=new S_,Nt=new R_(it),Ot=new Gg(_,Zt,Xt,tt,k,d,c),Ft=new L_(_,k,nt),Et=new V_(U,Mt,nt,tt),At=new Xg(U,it,Mt),W=new e0(U,it,Mt),Mt.programs=J.programs,_.capabilities=nt,_.extensions=it,_.properties=mt,_.renderLists=K,_.shadowMap=Ft,_.state=tt,_.info=Mt}F();const st=new B_(_,U);this.xr=st,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const C=it.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=it.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(C){C!==void 0&&(G=C,this.setSize(V,$,!1))},this.getSize=function(C){return C.set(V,$)},this.setSize=function(C,z,Y=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=C,$=z,e.width=Math.floor(C*G),e.height=Math.floor(z*G),Y===!0&&(e.style.width=C+"px",e.style.height=z+"px"),this.setViewport(0,0,C,z)},this.getDrawingBufferSize=function(C){return C.set(V*G,$*G).floor()},this.setDrawingBufferSize=function(C,z,Y){V=C,$=z,G=Y,e.width=Math.floor(C*Y),e.height=Math.floor(z*Y),this.setViewport(0,0,C,z)},this.getCurrentViewport=function(C){return C.copy(R)},this.getViewport=function(C){return C.copy(q)},this.setViewport=function(C,z,Y,Z){C.isVector4?q.set(C.x,C.y,C.z,C.w):q.set(C,z,Y,Z),tt.viewport(R.copy(q).multiplyScalar(G).round())},this.getScissor=function(C){return C.copy(ot)},this.setScissor=function(C,z,Y,Z){C.isVector4?ot.set(C.x,C.y,C.z,C.w):ot.set(C,z,Y,Z),tt.scissor(P.copy(ot).multiplyScalar(G).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(C){tt.setScissorTest(rt=C)},this.setOpaqueSort=function(C){pt=C},this.setTransparentSort=function(C){D=C},this.getClearColor=function(C){return C.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(C=!0,z=!0,Y=!0){let Z=0;if(C){let H=!1;if(A!==null){const _t=A.texture.format;H=_t===Cc||_t===Rc||_t===Ac}if(H){const _t=A.texture.type,Ct=_t===zn||_t===Zi||_t===_s||_t===xs||_t===wc||_t===bc,kt=Ot.getClearColor(),It=Ot.getClearAlpha(),Wt=kt.r,Yt=kt.g,Vt=kt.b;Ct?(g[0]=Wt,g[1]=Yt,g[2]=Vt,g[3]=It,U.clearBufferuiv(U.COLOR,0,g)):(v[0]=Wt,v[1]=Yt,v[2]=Vt,v[3]=It,U.clearBufferiv(U.COLOR,0,v))}else Z|=U.COLOR_BUFFER_BIT}z&&(Z|=U.DEPTH_BUFFER_BIT),Y&&(Z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),Ot.dispose(),K.dispose(),Nt.dispose(),mt.dispose(),Zt.dispose(),Xt.dispose(),k.dispose(),Q.dispose(),Et.dispose(),J.dispose(),st.dispose(),st.removeEventListener("sessionstart",Ue),st.removeEventListener("sessionend",Cn),Mn.stop()};function ft(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const C=Mt.autoReset,z=Ft.enabled,Y=Ft.autoUpdate,Z=Ft.needsUpdate,H=Ft.type;F(),Mt.autoReset=C,Ft.enabled=z,Ft.autoUpdate=Y,Ft.needsUpdate=Z,Ft.type=H}function lt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ct(C){const z=C.target;z.removeEventListener("dispose",ct),zt(z)}function zt(C){Pt(C),mt.remove(C)}function Pt(C){const z=mt.get(C).programs;z!==void 0&&(z.forEach(function(Y){J.releaseProgram(Y)}),C.isShaderMaterial&&J.releaseShaderCache(C))}this.renderBufferDirect=function(C,z,Y,Z,H,_t){z===null&&(z=Bt);const Ct=H.isMesh&&H.matrixWorld.determinant()<0,kt=Ih(C,z,Y,Z,H);tt.setMaterial(Z,Ct);let It=Y.index,Wt=1;if(Z.wireframe===!0){if(It=b.getWireframeAttribute(Y),It===void 0)return;Wt=2}const Yt=Y.drawRange,Vt=Y.attributes.position;let oe=Yt.start*Wt,me=(Yt.start+Yt.count)*Wt;_t!==null&&(oe=Math.max(oe,_t.start*Wt),me=Math.min(me,(_t.start+_t.count)*Wt)),It!==null?(oe=Math.max(oe,0),me=Math.min(me,It.count)):Vt!=null&&(oe=Math.max(oe,0),me=Math.min(me,Vt.count));const Re=me-oe;if(Re<0||Re===1/0)return;Q.setup(H,Z,kt,Y,It);let Me,ve=At;if(It!==null&&(Me=L.get(It),ve=W,ve.setIndex(Me)),H.isMesh)Z.wireframe===!0?(tt.setLineWidth(Z.wireframeLinewidth*he()),ve.setMode(U.LINES)):ve.setMode(U.TRIANGLES);else if(H.isLine){let Gt=Z.linewidth;Gt===void 0&&(Gt=1),tt.setLineWidth(Gt*he()),H.isLineSegments?ve.setMode(U.LINES):H.isLineLoop?ve.setMode(U.LINE_LOOP):ve.setMode(U.LINE_STRIP)}else H.isPoints?ve.setMode(U.POINTS):H.isSprite&&ve.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Ss("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ve.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))ve.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Gt=H._multiDrawStarts,Ee=H._multiDrawCounts,le=H._multiDrawCount,an=It?L.get(It).bytesPerElement:1,lr=mt.get(Z).currentProgram.getUniforms();for(let cn=0;cn<le;cn++)lr.setValue(U,"_gl_DrawID",cn),ve.render(Gt[cn]/an,Ee[cn])}else if(H.isInstancedMesh)ve.renderInstances(oe,Re,H.count);else if(Y.isInstancedBufferGeometry){const Gt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ee=Math.min(Y.instanceCount,Gt);ve.renderInstances(oe,Re,Ee)}else ve.render(oe,Re)};function se(C,z,Y){C.transparent===!0&&C.side===Se&&C.forceSinglePass===!1?(C.side=nn,C.needsUpdate=!0,Bs(C,z,Y),C.side=xi,C.needsUpdate=!0,Bs(C,z,Y),C.side=Se):Bs(C,z,Y)}this.compile=function(C,z,Y=null){Y===null&&(Y=C),p=Nt.get(Y),p.init(z),x.push(p),Y.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),C!==Y&&C.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const Z=new Set;return C.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const _t=H.material;if(_t)if(Array.isArray(_t))for(let Ct=0;Ct<_t.length;Ct++){const kt=_t[Ct];se(kt,Y,H),Z.add(kt)}else se(_t,Y,H),Z.add(_t)}),p=x.pop(),Z},this.compileAsync=function(C,z,Y=null){const Z=this.compile(C,z,Y);return new Promise(H=>{function _t(){if(Z.forEach(function(Ct){mt.get(Ct).currentProgram.isReady()&&Z.delete(Ct)}),Z.size===0){H(C);return}setTimeout(_t,10)}it.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Kt=null;function Ae(C){Kt&&Kt(C)}function Ue(){Mn.stop()}function Cn(){Mn.start()}const Mn=new uh;Mn.setAnimationLoop(Ae),typeof self<"u"&&Mn.setContext(self),this.setAnimationLoop=function(C){Kt=C,st.setAnimationLoop(C),C===null?Mn.stop():Mn.start()},st.addEventListener("sessionstart",Ue),st.addEventListener("sessionend",Cn),this.render=function(C,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(z),z=st.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,z,A),p=Nt.get(C,x.length),p.init(z),x.push(p),at.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),bt.setFromProjectionMatrix(at,Un,z.reversedDepth),X=this.localClippingEnabled,vt=xt.init(this.clippingPlanes,X),m=K.get(C,E.length),m.init(),E.push(m),st.enabled===!0&&st.isPresenting===!0){const _t=_.xr.getDepthSensingMesh();_t!==null&&Jr(_t,z,-1/0,_.sortObjects)}Jr(C,z,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(pt,D),te=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,te&&Ot.addToRenderList(m,C),this.info.render.frame++,vt===!0&&xt.beginShadows();const Y=p.state.shadowsArray;Ft.render(Y,C,z),vt===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=m.opaque,H=m.transmissive;if(p.setupLights(),z.isArrayCamera){const _t=z.cameras;if(H.length>0)for(let Ct=0,kt=_t.length;Ct<kt;Ct++){const It=_t[Ct];tl(Z,H,C,It)}te&&Ot.render(C);for(let Ct=0,kt=_t.length;Ct<kt;Ct++){const It=_t[Ct];Kr(m,C,It,It.viewport)}}else H.length>0&&tl(Z,H,C,z),te&&Ot.render(C),Kr(m,C,z);A!==null&&T===0&&(yt.updateMultisampleRenderTarget(A),yt.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(_,C,z),Q.resetDefaultState(),S=-1,y=null,x.pop(),x.length>0?(p=x[x.length-1],vt===!0&&xt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Jr(C,z,Y,Z){if(C.visible===!1)return;if(C.layers.test(z.layers)){if(C.isGroup)Y=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(z);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||bt.intersectsSprite(C)){Z&&Ht.setFromMatrixPosition(C.matrixWorld).applyMatrix4(at);const Ct=k.update(C),kt=C.material;kt.visible&&m.push(C,Ct,kt,Y,Ht.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||bt.intersectsObject(C))){const Ct=k.update(C),kt=C.material;if(Z&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ht.copy(C.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Ht.copy(Ct.boundingSphere.center)),Ht.applyMatrix4(C.matrixWorld).applyMatrix4(at)),Array.isArray(kt)){const It=Ct.groups;for(let Wt=0,Yt=It.length;Wt<Yt;Wt++){const Vt=It[Wt],oe=kt[Vt.materialIndex];oe&&oe.visible&&m.push(C,Ct,oe,Y,Ht.z,Vt)}}else kt.visible&&m.push(C,Ct,kt,Y,Ht.z,null)}}const _t=C.children;for(let Ct=0,kt=_t.length;Ct<kt;Ct++)Jr(_t[Ct],z,Y,Z)}function Kr(C,z,Y,Z){const H=C.opaque,_t=C.transmissive,Ct=C.transparent;p.setupLightsView(Y),vt===!0&&xt.setGlobalState(_.clippingPlanes,Y),Z&&tt.viewport(R.copy(Z)),H.length>0&&zs(H,z,Y),_t.length>0&&zs(_t,z,Y),Ct.length>0&&zs(Ct,z,Y),tt.buffers.depth.setTest(!0),tt.buffers.depth.setMask(!0),tt.buffers.color.setMask(!0),tt.setPolygonOffset(!1)}function tl(C,z,Y,Z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new Ji(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?Ls:zn,minFilter:Gi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace}));const _t=p.state.transmissionRenderTarget[Z.id],Ct=Z.viewport||R;_t.setSize(Ct.z*_.transmissionResolutionScale,Ct.w*_.transmissionResolutionScale);const kt=_.getRenderTarget(),It=_.getActiveCubeFace(),Wt=_.getActiveMipmapLevel();_.setRenderTarget(_t),_.getClearColor(O),B=_.getClearAlpha(),B<1&&_.setClearColor(16777215,.5),_.clear(),te&&Ot.render(Y);const Yt=_.toneMapping;_.toneMapping=_i;const Vt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),vt===!0&&xt.setGlobalState(_.clippingPlanes,Z),zs(C,Y,Z),yt.updateMultisampleRenderTarget(_t),yt.updateRenderTargetMipmap(_t),it.has("WEBGL_multisampled_render_to_texture")===!1){let oe=!1;for(let me=0,Re=z.length;me<Re;me++){const Me=z[me],ve=Me.object,Gt=Me.geometry,Ee=Me.material,le=Me.group;if(Ee.side===Se&&ve.layers.test(Z.layers)){const an=Ee.side;Ee.side=nn,Ee.needsUpdate=!0,el(ve,Y,Z,Gt,Ee,le),Ee.side=an,Ee.needsUpdate=!0,oe=!0}}oe===!0&&(yt.updateMultisampleRenderTarget(_t),yt.updateRenderTargetMipmap(_t))}_.setRenderTarget(kt,It,Wt),_.setClearColor(O,B),Vt!==void 0&&(Z.viewport=Vt),_.toneMapping=Yt}function zs(C,z,Y){const Z=z.isScene===!0?z.overrideMaterial:null;for(let H=0,_t=C.length;H<_t;H++){const Ct=C[H],kt=Ct.object,It=Ct.geometry,Wt=Ct.group;let Yt=Ct.material;Yt.allowOverride===!0&&Z!==null&&(Yt=Z),kt.layers.test(Y.layers)&&el(kt,z,Y,It,Yt,Wt)}}function el(C,z,Y,Z,H,_t){C.onBeforeRender(_,z,Y,Z,H,_t),C.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),H.onBeforeRender(_,z,Y,Z,C,_t),H.transparent===!0&&H.side===Se&&H.forceSinglePass===!1?(H.side=nn,H.needsUpdate=!0,_.renderBufferDirect(Y,z,Z,H,C,_t),H.side=xi,H.needsUpdate=!0,_.renderBufferDirect(Y,z,Z,H,C,_t),H.side=Se):_.renderBufferDirect(Y,z,Z,H,C,_t),C.onAfterRender(_,z,Y,Z,H,_t)}function Bs(C,z,Y){z.isScene!==!0&&(z=Bt);const Z=mt.get(C),H=p.state.lights,_t=p.state.shadowsArray,Ct=H.state.version,kt=J.getParameters(C,H.state,_t,z,Y),It=J.getProgramCacheKey(kt);let Wt=Z.programs;Z.environment=C.isMeshStandardMaterial?z.environment:null,Z.fog=z.fog,Z.envMap=(C.isMeshStandardMaterial?Xt:Zt).get(C.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&C.envMap===null?z.environmentRotation:C.envMapRotation,Wt===void 0&&(C.addEventListener("dispose",ct),Wt=new Map,Z.programs=Wt);let Yt=Wt.get(It);if(Yt!==void 0){if(Z.currentProgram===Yt&&Z.lightsStateVersion===Ct)return il(C,kt),Yt}else kt.uniforms=J.getUniforms(C),C.onBeforeCompile(kt,_),Yt=J.acquireProgram(kt,It),Wt.set(It,Yt),Z.uniforms=kt.uniforms;const Vt=Z.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Vt.clippingPlanes=xt.uniform),il(C,kt),Z.needsLights=Nh(C),Z.lightsStateVersion=Ct,Z.needsLights&&(Vt.ambientLightColor.value=H.state.ambient,Vt.lightProbe.value=H.state.probe,Vt.directionalLights.value=H.state.directional,Vt.directionalLightShadows.value=H.state.directionalShadow,Vt.spotLights.value=H.state.spot,Vt.spotLightShadows.value=H.state.spotShadow,Vt.rectAreaLights.value=H.state.rectArea,Vt.ltc_1.value=H.state.rectAreaLTC1,Vt.ltc_2.value=H.state.rectAreaLTC2,Vt.pointLights.value=H.state.point,Vt.pointLightShadows.value=H.state.pointShadow,Vt.hemisphereLights.value=H.state.hemi,Vt.directionalShadowMap.value=H.state.directionalShadowMap,Vt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Vt.spotShadowMap.value=H.state.spotShadowMap,Vt.spotLightMatrix.value=H.state.spotLightMatrix,Vt.spotLightMap.value=H.state.spotLightMap,Vt.pointShadowMap.value=H.state.pointShadowMap,Vt.pointShadowMatrix.value=H.state.pointShadowMatrix),Z.currentProgram=Yt,Z.uniformsList=null,Yt}function nl(C){if(C.uniformsList===null){const z=C.currentProgram.getUniforms();C.uniformsList=Eo.seqWithValue(z.seq,C.uniforms)}return C.uniformsList}function il(C,z){const Y=mt.get(C);Y.outputColorSpace=z.outputColorSpace,Y.batching=z.batching,Y.batchingColor=z.batchingColor,Y.instancing=z.instancing,Y.instancingColor=z.instancingColor,Y.instancingMorph=z.instancingMorph,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function Ih(C,z,Y,Z,H){z.isScene!==!0&&(z=Bt),yt.resetTextureUnits();const _t=z.fog,Ct=Z.isMeshStandardMaterial?z.environment:null,kt=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Br,It=(Z.isMeshStandardMaterial?Xt:Zt).get(Z.envMap||Ct),Wt=Z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Yt=!!Y.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Vt=!!Y.morphAttributes.position,oe=!!Y.morphAttributes.normal,me=!!Y.morphAttributes.color;let Re=_i;Z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Re=_.toneMapping);const Me=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ve=Me!==void 0?Me.length:0,Gt=mt.get(Z),Ee=p.state.lights;if(vt===!0&&(X===!0||C!==y)){const $e=C===y&&Z.id===S;xt.setState(Z,C,$e)}let le=!1;Z.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Ee.state.version||Gt.outputColorSpace!==kt||H.isBatchedMesh&&Gt.batching===!1||!H.isBatchedMesh&&Gt.batching===!0||H.isBatchedMesh&&Gt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Gt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Gt.instancing===!1||!H.isInstancedMesh&&Gt.instancing===!0||H.isSkinnedMesh&&Gt.skinning===!1||!H.isSkinnedMesh&&Gt.skinning===!0||H.isInstancedMesh&&Gt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Gt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Gt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Gt.instancingMorph===!1&&H.morphTexture!==null||Gt.envMap!==It||Z.fog===!0&&Gt.fog!==_t||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==xt.numPlanes||Gt.numIntersection!==xt.numIntersection)||Gt.vertexAlphas!==Wt||Gt.vertexTangents!==Yt||Gt.morphTargets!==Vt||Gt.morphNormals!==oe||Gt.morphColors!==me||Gt.toneMapping!==Re||Gt.morphTargetsCount!==ve)&&(le=!0):(le=!0,Gt.__version=Z.version);let an=Gt.currentProgram;le===!0&&(an=Bs(Z,z,H));let lr=!1,cn=!1,jr=!1;const we=an.getUniforms(),pn=Gt.uniforms;if(tt.useProgram(an.program)&&(lr=!0,cn=!0,jr=!0),Z.id!==S&&(S=Z.id,cn=!0),lr||y!==C){tt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),we.setValue(U,"projectionMatrix",C.projectionMatrix),we.setValue(U,"viewMatrix",C.matrixWorldInverse);const sn=we.map.cameraPosition;sn!==void 0&&sn.setValue(U,Rt.setFromMatrixPosition(C.matrixWorld)),nt.logarithmicDepthBuffer&&we.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&we.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),y!==C&&(y=C,cn=!0,jr=!0)}if(H.isSkinnedMesh){we.setOptional(U,H,"bindMatrix"),we.setOptional(U,H,"bindMatrixInverse");const $e=H.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),we.setValue(U,"boneTexture",$e.boneTexture,yt))}H.isBatchedMesh&&(we.setOptional(U,H,"batchingTexture"),we.setValue(U,"batchingTexture",H._matricesTexture,yt),we.setOptional(U,H,"batchingIdTexture"),we.setValue(U,"batchingIdTexture",H._indirectTexture,yt),we.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&we.setValue(U,"batchingColorTexture",H._colorsTexture,yt));const mn=Y.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&gt.update(H,Y,an),(cn||Gt.receiveShadow!==H.receiveShadow)&&(Gt.receiveShadow=H.receiveShadow,we.setValue(U,"receiveShadow",H.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(pn.envMap.value=It,pn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&z.environment!==null&&(pn.envMapIntensity.value=z.environmentIntensity),cn&&(we.setValue(U,"toneMappingExposure",_.toneMappingExposure),Gt.needsLights&&Uh(pn,jr),_t&&Z.fog===!0&&ut.refreshFogUniforms(pn,_t),ut.refreshMaterialUniforms(pn,Z,G,$,p.state.transmissionRenderTarget[C.id]),Eo.upload(U,nl(Gt),pn,yt)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Eo.upload(U,nl(Gt),pn,yt),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&we.setValue(U,"center",H.center),we.setValue(U,"modelViewMatrix",H.modelViewMatrix),we.setValue(U,"normalMatrix",H.normalMatrix),we.setValue(U,"modelMatrix",H.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const $e=Z.uniformsGroups;for(let sn=0,Xo=$e.length;sn<Xo;sn++){const Ti=$e[sn];Et.update(Ti,an),Et.bind(Ti,an)}}return an}function Uh(C,z){C.ambientLightColor.needsUpdate=z,C.lightProbe.needsUpdate=z,C.directionalLights.needsUpdate=z,C.directionalLightShadows.needsUpdate=z,C.pointLights.needsUpdate=z,C.pointLightShadows.needsUpdate=z,C.spotLights.needsUpdate=z,C.spotLightShadows.needsUpdate=z,C.rectAreaLights.needsUpdate=z,C.hemisphereLights.needsUpdate=z}function Nh(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,z,Y){const Z=mt.get(C);Z.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),mt.get(C.texture).__webglTexture=z,mt.get(C.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:Y,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,z){const Y=mt.get(C);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0};const Fh=U.createFramebuffer();this.setRenderTarget=function(C,z=0,Y=0){A=C,M=z,T=Y;let Z=!0,H=null,_t=!1,Ct=!1;if(C){const It=mt.get(C);if(It.__useDefaultFramebuffer!==void 0)tt.bindFramebuffer(U.FRAMEBUFFER,null),Z=!1;else if(It.__webglFramebuffer===void 0)yt.setupRenderTarget(C);else if(It.__hasExternalTextures)yt.rebindTextures(C,mt.get(C.texture).__webglTexture,mt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Vt=C.depthTexture;if(It.__boundDepthTexture!==Vt){if(Vt!==null&&mt.has(Vt)&&(C.width!==Vt.image.width||C.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");yt.setupDepthRenderbuffer(C)}}const Wt=C.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Ct=!0);const Yt=mt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Yt[z])?H=Yt[z][Y]:H=Yt[z],_t=!0):C.samples>0&&yt.useMultisampledRTT(C)===!1?H=mt.get(C).__webglMultisampledFramebuffer:Array.isArray(Yt)?H=Yt[Y]:H=Yt,R.copy(C.viewport),P.copy(C.scissor),N=C.scissorTest}else R.copy(q).multiplyScalar(G).floor(),P.copy(ot).multiplyScalar(G).floor(),N=rt;if(Y!==0&&(H=Fh),tt.bindFramebuffer(U.FRAMEBUFFER,H)&&Z&&tt.drawBuffers(C,H),tt.viewport(R),tt.scissor(P),tt.setScissorTest(N),_t){const It=mt.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+z,It.__webglTexture,Y)}else if(Ct){const It=z;for(let Wt=0;Wt<C.textures.length;Wt++){const Yt=mt.get(C.textures[Wt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Wt,Yt.__webglTexture,Y,It)}}else if(C!==null&&Y!==0){const It=mt.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,It.__webglTexture,Y)}S=-1},this.readRenderTargetPixels=function(C,z,Y,Z,H,_t,Ct,kt=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=mt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ct!==void 0&&(It=It[Ct]),It){tt.bindFramebuffer(U.FRAMEBUFFER,It);try{const Wt=C.textures[kt],Yt=Wt.format,Vt=Wt.type;if(!nt.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=C.width-Z&&Y>=0&&Y<=C.height-H&&(C.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+kt),U.readPixels(z,Y,Z,H,et.convert(Yt),et.convert(Vt),_t))}finally{const Wt=A!==null?mt.get(A).__webglFramebuffer:null;tt.bindFramebuffer(U.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(C,z,Y,Z,H,_t,Ct,kt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=mt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ct!==void 0&&(It=It[Ct]),It)if(z>=0&&z<=C.width-Z&&Y>=0&&Y<=C.height-H){tt.bindFramebuffer(U.FRAMEBUFFER,It);const Wt=C.textures[kt],Yt=Wt.format,Vt=Wt.type;if(!nt.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const oe=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,oe),U.bufferData(U.PIXEL_PACK_BUFFER,_t.byteLength,U.STREAM_READ),C.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+kt),U.readPixels(z,Y,Z,H,et.convert(Yt),et.convert(Vt),0);const me=A!==null?mt.get(A).__webglFramebuffer:null;tt.bindFramebuffer(U.FRAMEBUFFER,me);const Re=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Gd(U,Re,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,oe),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,_t),U.deleteBuffer(oe),U.deleteSync(Re),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,z=null,Y=0){const Z=Math.pow(2,-Y),H=Math.floor(C.image.width*Z),_t=Math.floor(C.image.height*Z),Ct=z!==null?z.x:0,kt=z!==null?z.y:0;yt.setTexture2D(C,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,Ct,kt,H,_t),tt.unbindTexture()};const Oh=U.createFramebuffer(),zh=U.createFramebuffer();this.copyTextureToTexture=function(C,z,Y=null,Z=null,H=0,_t=null){_t===null&&(H!==0?(Ss("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_t=H,H=0):_t=0);let Ct,kt,It,Wt,Yt,Vt,oe,me,Re;const Me=C.isCompressedTexture?C.mipmaps[_t]:C.image;if(Y!==null)Ct=Y.max.x-Y.min.x,kt=Y.max.y-Y.min.y,It=Y.isBox3?Y.max.z-Y.min.z:1,Wt=Y.min.x,Yt=Y.min.y,Vt=Y.isBox3?Y.min.z:0;else{const mn=Math.pow(2,-H);Ct=Math.floor(Me.width*mn),kt=Math.floor(Me.height*mn),C.isDataArrayTexture?It=Me.depth:C.isData3DTexture?It=Math.floor(Me.depth*mn):It=1,Wt=0,Yt=0,Vt=0}Z!==null?(oe=Z.x,me=Z.y,Re=Z.z):(oe=0,me=0,Re=0);const ve=et.convert(z.format),Gt=et.convert(z.type);let Ee;z.isData3DTexture?(yt.setTexture3D(z,0),Ee=U.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(yt.setTexture2DArray(z,0),Ee=U.TEXTURE_2D_ARRAY):(yt.setTexture2D(z,0),Ee=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);const le=U.getParameter(U.UNPACK_ROW_LENGTH),an=U.getParameter(U.UNPACK_IMAGE_HEIGHT),lr=U.getParameter(U.UNPACK_SKIP_PIXELS),cn=U.getParameter(U.UNPACK_SKIP_ROWS),jr=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Me.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Me.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Wt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Yt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Vt);const we=C.isDataArrayTexture||C.isData3DTexture,pn=z.isDataArrayTexture||z.isData3DTexture;if(C.isDepthTexture){const mn=mt.get(C),$e=mt.get(z),sn=mt.get(mn.__renderTarget),Xo=mt.get($e.__renderTarget);tt.bindFramebuffer(U.READ_FRAMEBUFFER,sn.__webglFramebuffer),tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Xo.__webglFramebuffer);for(let Ti=0;Ti<It;Ti++)we&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,mt.get(C).__webglTexture,H,Vt+Ti),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,mt.get(z).__webglTexture,_t,Re+Ti)),U.blitFramebuffer(Wt,Yt,Ct,kt,oe,me,Ct,kt,U.DEPTH_BUFFER_BIT,U.NEAREST);tt.bindFramebuffer(U.READ_FRAMEBUFFER,null),tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(H!==0||C.isRenderTargetTexture||mt.has(C)){const mn=mt.get(C),$e=mt.get(z);tt.bindFramebuffer(U.READ_FRAMEBUFFER,Oh),tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,zh);for(let sn=0;sn<It;sn++)we?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,mn.__webglTexture,H,Vt+sn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,mn.__webglTexture,H),pn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,$e.__webglTexture,_t,Re+sn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,$e.__webglTexture,_t),H!==0?U.blitFramebuffer(Wt,Yt,Ct,kt,oe,me,Ct,kt,U.COLOR_BUFFER_BIT,U.NEAREST):pn?U.copyTexSubImage3D(Ee,_t,oe,me,Re+sn,Wt,Yt,Ct,kt):U.copyTexSubImage2D(Ee,_t,oe,me,Wt,Yt,Ct,kt);tt.bindFramebuffer(U.READ_FRAMEBUFFER,null),tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else pn?C.isDataTexture||C.isData3DTexture?U.texSubImage3D(Ee,_t,oe,me,Re,Ct,kt,It,ve,Gt,Me.data):z.isCompressedArrayTexture?U.compressedTexSubImage3D(Ee,_t,oe,me,Re,Ct,kt,It,ve,Me.data):U.texSubImage3D(Ee,_t,oe,me,Re,Ct,kt,It,ve,Gt,Me):C.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,_t,oe,me,Ct,kt,ve,Gt,Me.data):C.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,_t,oe,me,Me.width,Me.height,ve,Me.data):U.texSubImage2D(U.TEXTURE_2D,_t,oe,me,Ct,kt,ve,Gt,Me);U.pixelStorei(U.UNPACK_ROW_LENGTH,le),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,an),U.pixelStorei(U.UNPACK_SKIP_PIXELS,lr),U.pixelStorei(U.UNPACK_SKIP_ROWS,cn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,jr),_t===0&&z.generateMipmaps&&U.generateMipmap(Ee),tt.unbindTexture()},this.initRenderTarget=function(C){mt.get(C).__webglFramebuffer===void 0&&yt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?yt.setTextureCube(C,0):C.isData3DTexture?yt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?yt.setTexture2DArray(C,0):yt.setTexture2D(C,0),tt.unbindTexture()},this.resetState=function(){M=0,T=0,A=null,tt.reset(),Q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}}const Mi=[{name:"Chip Garden",x:-12,z:35,r:8},{name:"Wedge Court",x:22,z:75,r:12},{name:"Iron Island",x:-30,z:125,r:16},{name:"Wood Meadow",x:32,z:180,r:18},{name:"Royal Drive",x:-20,z:240,r:21},{name:"Dragon Distance",x:10,z:320,r:24}];function W_(n,t){const e=Math.hypot(n.x,n.z),i=Math.hypot(n.x-t.x,n.z-t.z);return{distance:e,error:i,points:n.penalty?0:i<=2?100:i<=t.r*.35?75:i<=t.r*.7?50:i<=t.r?25:0}}function X_(n){const t=new Ut({color:"#d7c9a7",roughness:.8}),e=new Ut({color:"#705039",roughness:.9}),i=new Ut({color:"#29645c",roughness:.7}),r=(a,c,l,u,h)=>{const f=new Jt(a,c);return f.position.set(l,u,h),f.castShadow=f.receiveShadow=!0,n.add(f),f},s=(a,c,l,u,h,f,d)=>r(new Te(u,h,f),d,a,c,l);function o(a,c,l,u,h=6){const f=document.createElement("canvas");f.width=512,f.height=128;const d=f.getContext("2d");d.fillStyle="#173e36",d.fillRect(0,0,512,128),d.strokeStyle="#dccb9a",d.lineWidth=5,d.strokeRect(5,5,502,118),d.fillStyle="#f3e8ca",d.font="bold 54px Georgia",d.textAlign="center",d.textBaseline="middle",d.fillText(a,256,66);const g=new Us(f);g.colorSpace=je;const v=new vi({map:g,side:Se}),m=r(new Rn(h,h/4),v,c,l,u);m.rotation.y=Math.PI}s(0,-.32,-5,80,.5,16,t);for(const a of[-32,-16,0,16,32]){s(a,-.025,0,5,.04,4,i),s(a+5,.55,-3,1.1,1.1,1.1,e);for(let c=0;c<9;c++)r(new _e(.16,8,6),t,a+4.7+c%3*.3,1.15,-3.3+Math.floor(c/3)*.3);if(a!==0){s(a,1,-7,5,.25,1.3,e);for(const c of[-2,2])s(a+c,.4,-7,.25,1.2,.8,e)}}for(const a of[-41,41]){s(a,3,-5,.7,6,.7,t);const c=r(new Rn(3,5),i,a,4,-5);c.rotation.y=Math.PI}o("ROYAL PRACTICE CLUB",0,4,-11,14);for(const a of Mi){for(const[l,u]of[[1,"#ebd79e"],[.7,"#d5e5b2"],[.35,"#f4e6bb"]]){const h=r(new Bc(a.r*l-.18,a.r*l,72),new vi({color:u,side:Se}),a.x,.06,a.z);h.rotation.x=-Math.PI/2,h.castShadow=!1}r(new ae(.065,.065,4,8),e,a.x,2,a.z);const c=r(new Rn(2,1.2),new Ut({color:"#b74f3d",side:Se}),a.x+1,3.5,a.z);c.rotation.y=Math.PI,o(`${a.z} m`,a.x,2,a.z+a.r+3,7)}for(const a of[-1,1])for(let c=40;c<=340;c+=30)s(a*91,1.1,c,.4,2.2,.4,e),s(a*91,1.4,c+15,.18,.18,30,e);for(const a of[50,100,150,200,250,300])for(const c of[-74,74])o(`${a}`,c,1.6,a,5)}const Tn={castleZ:9,floor:35,scale:{x:.75,y:.75,z:.6},offsetZ:4.2,cartZ:42};function br(n,t,e,i,r,s){const{scale:o,offsetZ:a,floor:c}=Tn;return{shape:"box",kind:"room-solid",x:n*o.x,y:c+t*o.y,z:a+e*o.z,w:i*o.x,h:r*o.y,d:s*o.z}}function mh(n,t){return Math.abs(n)<11.7&&t>-11.7&&t<11.7||Math.abs(n)<38&&t>-3.5&&t<22.5}function Gc(n){const t=1-Math.exp(-n*n/500);return[25+t*(10*Math.sin(n/27)+5*Math.sin(n/11)),205+t*(13*Math.sin(n/31+.7)+6*Math.sin(n/13))]}function q_(n){const t=new jt;n.add(t);const e=new Ut({color:"#534b43",roughness:1,flatShading:!0});for(const f of[0,1]){const d=[],g=[],v=[];for(let w=0;w<=100;w++)for(let M=0;M<5;M++){const T=-190+w*3.8,A=Gc(T)[f],S=f?8+.4*Math.sin(T/35):20,y=S-M*(S+64)/4,R=M===0?0:Math.sin(w*1.7+M)*3+M*1.2;d.push(T,y,A+(f?-1:1)*R);const P=M/4,N=.75+.12*Math.sin(w*2+M);if(v.push(N*(1-P*.4),N*(1-P*.58),N*(1-P*.65)),w<100&&M<4){const O=w*5+M;g.push(O,O+5,O+1,O+1,O+5,O+5+1)}}const E=new pe;E.setAttribute("position",new qt(d,3)),E.setAttribute("color",new qt(v,3)),E.setIndex(g),E.computeVertexNormals();const x=e.clone();x.vertexColors=!0,x.side=Se;const _=new Jt(E,x);_.receiveShadow=!0,t.add(_)}const i=new kn({uniforms:{time:{value:0}},side:Se,vertexShader:"varying vec2 p;void main(){p=position.xy;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec2 p;uniform float time;
 float hash(vec2 q){return fract(sin(dot(q,vec2(127.1,311.7)))*43758.5453);}
 float noise(vec2 q){vec2 i=floor(q),f=fract(q);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+1.),f.x),f.y);}
 void main(){vec2 q=p*.09+vec2(time*.025,0.);float n=noise(q)+.4*noise(q*2.8);float fissure=1.-smoothstep(.04,.13,abs(n-.66));float pulse=.8+.2*sin(time*1.6+p.x*.06);vec3 color=mix(vec3(.07,.025,.018),vec3(1.8,.3,.015)*pulse,fissure);color+=vec3(.24,.025,0.)*smoothstep(.45,.8,n);gl_FragColor=vec4(color,1.);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
 }`}),r=new Jt(new Rn(380,180),i);r.rotation.x=-Math.PI/2,r.position.set(0,-27,115),t.add(r);const s=new ye,o=new Ki(new zo(1,0),e,100);for(let f=0;f<100;f++){const d=Math.sin(f*127.1)*176,g=43+(Math.sin(f*73.3)*.5+.5)*140,v=4+f%9*1.8;s.position.set(d,-27+v*.25,g),s.scale.set(5+f%7,v,4+f%5),s.rotation.set(f*.7,f*.4,f*.13),s.updateMatrix(),o.setMatrixAt(f,s.matrix)}t.add(o);const a=180,c=new Float32Array(a*3),l=new pe;l.setAttribute("position",new ke(c,3));const u=new Is(l,new Wr({color:"#ff8b27",size:.65,transparent:!0,opacity:.8,depthWrite:!1,blending:Nr}));u.frustumCulled=!1,t.add(u);const h=new ch("#ff4b12",95,170,1.5);return h.position.set(0,-15,110),t.add(h),{update(f){i.uniforms.time.value=f,h.intensity=90+Math.sin(f*3)*12;for(let d=0;d<a;d++){const g=(d/a+f*.035)%1;c[d*3]=Math.sin(d*127.1)*160+Math.sin(f+d)*g*3,c[d*3+1]=-26+g*40,c[d*3+2]=47+(Math.sin(d*73.3)*.5+.5)*133}l.attributes.position.needsUpdate=!0}}}function gh(){const n=[];for(const[t,e,i,r]of[["near",19,1,20],["far",211,-1,8]])for(let s=0;s<17;s++){if(s===13||s===15)continue;const o=s*2.2;n.push({shape:"box",kind:"broken-bridge",bank:t,x:s>11?(s%2?1:-1)*.65:0,y:r-.008*o*o,z:e+i*o,w:s>11?6.5:11,h:.5,d:1.8})}return n}function Y_(n){const t=new jt;n.add(t);const e=new Ut({color:"#67503b",roughness:1}),i=new Ut({color:"#aa8353",roughness:1}),r=new Ut({color:"#918364",roughness:1}),s=new Ut({color:"#3c4540",metalness:.5,roughness:.7});function o(c,l,u,h){const f=new I(...l).sub(new I(...c)),d=new Jt(new ae(u,u,f.length(),8),h);return d.position.set(...c).addScaledVector(f,.5),d.quaternion.setFromUnitVectors(new I(0,1,0),f.normalize()),d.castShadow=d.receiveShadow=!0,t.add(d),d}function a(c,l=.12){const u=new Ku(c.map(f=>new I(...f))),h=new Jt(new kc(u,40,l,6,!1),r);return t.add(h),h}for(const c of gh()){const l=new Jt(new Te(c.w,c.h,c.d),e);l.position.set(c.x,c.y,c.z),l.castShadow=l.receiveShadow=!0,t.add(l);for(const u of[-c.w*.39,c.w*.39]){const h=new Jt(new ae(.1,.1,.04,6),s);h.position.set(c.x+u,c.y+.27,c.z),t.add(h)}}for(const[c,l,u]of[[19,1,20],[211,-1,8]]){for(const h of[-1,1]){const f=h*4.7;o([f,u-1,c-l*4],[f+h*.7,u-4,c+l*23],.55,e),o([f+h*.7,u-4,c+l*23],[f+h*1.1,u-8,c+l*29],.32,i),o([f,u+3,c+l*6],[f+h*1.8,u+1,c+l*18],.25,e);for(let d=0;d<4;d++)o([f+h*.7+d*.16,u-4,c+l*23],[f+h*.7+d*.2,u-4.5-d*.25,c+l*(25+d*.8)],.1,i)}for(let h=0;h<5;h++){const f=new Jt(new Te(3.5+h*.35,.3,.8),h%2?i:e);f.position.set((h%2?1:-1)*(6.4+h*.45),u+.2,c-l*(2+h*1.4)),f.rotation.y=(h-2)*.42,f.castShadow=f.receiveShadow=!0,t.add(f)}for(const h of[-1,1]){const f=h*5.4;for(const v of[c-l*3,c+l*7]){o([f,u-3,v],[f,u+4.5,v],.38,e);for(const m of[u+1,u+3.5]){const p=new Jt(new en(.42,.08,6,12),r);p.rotation.x=Math.PI/2,p.position.set(f,m,v),t.add(p)}}const d=[];for(let v=0;v<9;v++){const m=v*4.5;d.push([f,u+3-.008*m*m,c+l*m])}d.push([f+h*1.1,u-17,c+l*39]),d.push([f+h*1.5,u-25,c+l*37]),a(d);const g=[];for(let v=0;v<8;v++){const m=v*4.5;g.push([f,u-.7-.008*m*m,c+l*m]),v>0&&o([f,u-.008*m*m,c+l*m],[f,u+3-.008*m*m,c+l*m],.075,r)}g.push([f+h,u-20,c+l*35]),a(g,.17)}for(let h=0;h<5;h++){const f=-3+h*1.4,d=c+l*(34+h%2),g=u-10-h*.35;o([f,g,d],[f+.2,g-.5,d+l*(2+h%3)],.22,i)}for(let h=0;h<3;h++){const f=new Jt(new Te(5,.35,1.5),e);f.position.set(-3+h*3,u-17-h*3,c+l*(35+h)),f.rotation.set(.9+h*.3,0,.2-h*.2),t.add(f),a([[f.position.x-1,u-10,c+l*32],[f.position.x-1.3,u-13,c+l*34],[f.position.x-1,f.position.y,f.position.z]],.075)}}return t}const hi=(n,t,e)=>{const i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)},yi=[{name:"The King's Balcony",par:4,distance:340,difficulty:2,kind:"balcony",greenRadius:17,wind:{x:2,z:1.3},hint:"Do tapete do quarto real, lance pela grande abertura a 35 m de altura.",bunkers:[{x:25,z:310,rx:12,rz:15}],waters:[{x:0,z:287,w:80,d:14,y:-.8}]},{name:"The Cursed Lake",par:3,distance:155,difficulty:4,kind:"lake",greenRadius:18,wind:{x:1.8,z:-1},hint:"Sem fairway intermediário: atravesse o lago até a ilha.",bunkers:[],waters:[{x:0,z:115,w:360,d:190,y:1}]},{name:"Dragon's Abyss",par:4,distance:365,difficulty:6,kind:"abyss",greenRadius:17,wind:{x:7.5,z:-1},hint:"O dragão guarda a ponte destruída. Vença os 180 m de abismo pelo ar.",bunkers:[{x:-23,z:333,rx:10,rz:17}],waters:[]},{name:"The Enchanted Forest",par:5,distance:475,difficulty:5,kind:"forest",greenRadius:18,wind:{x:1,z:1},hint:"Siga o dogleg ou arrisque uma tacada por cima das copas.",bunkers:[{x:23,z:445,rx:11,rz:16}],waters:[]},{name:"The Old Bridge",par:4,distance:310,difficulty:5,kind:"bridge",greenRadius:17,wind:{x:-2,z:1},hint:"Prepare a travessia ou tente vencer o rio de uma só vez.",bunkers:[{x:-23,z:285,rx:11,rz:16}],waters:[{x:0,z:158,w:360,d:56,y:-.7}]},{name:"The Knight's Gate",par:3,distance:90,difficulty:7,kind:"gate",greenRadius:15,wind:{x:.7,z:0},hint:"Portão fechado. Use uma tacada alta para passar por cima da muralha.",bunkers:[{x:-21,z:82,rx:8,rz:14},{x:20,z:85,rx:8,rz:14}],waters:[]},{name:"The Giant's Stairway",par:5,distance:430,difficulty:8,kind:"stairs",greenRadius:17,wind:{x:3,z:-1},hint:"Três subidas. Cada terraço é uma oportunidade de preparar a próxima tacada.",bunkers:[{x:23,z:409,rx:10,rz:14}],waters:[]},{name:"The Royal Gardens",par:3,distance:115,difficulty:7,kind:"garden",greenRadius:14,wind:{x:1.3,z:.7},hint:"Areia antes do green, água depois. A precisão decide.",bunkers:[{x:0,z:87,rx:19,rz:9},{x:-22,z:115,rx:7,rz:12}],waters:[{x:0,z:144,w:100,d:14,y:.1},{x:39,z:72,w:18,d:35,y:.1}]},{name:"The King's Challenge",par:5,distance:520,difficulty:10,kind:"finale",greenRadius:21,wind:{x:-3.5,z:1.5},hint:"Desça a colina, atravesse o rio e vença o fosso diante do castelo.",bunkers:[{x:-24,z:310,rx:14,rz:22},{x:24,z:423,rx:12,rz:18},{x:-27,z:501,rx:8,rz:15}],waters:[{x:0,z:255,w:360,d:30,y:-1},{x:0,z:468,w:160,d:20,y:-1}]}].map((n,t)=>({...n,greenRadius:n.greenRadius*1.25,id:t,tee:{x:0,z:0},cup:{x:0,z:n.distance},obstacles:[]})),Yr=[0,7,1,5,4,3,6,2,8].map(n=>yi[n]),$_={name:"The Royal Driving Range",kind:"range",id:9,distance:380,par:0,difficulty:0,greenRadius:18,wind:{x:0,z:0},tee:{x:0,z:0},cup:{x:0,z:350},bunkers:[],waters:[],obstacles:[],targets:Mi};function Z_(){return Lt=$_,Object.assign(ce,Lt.cup),Lt}let Lt=yi[0];const ce={...Lt.cup};function _h(n){if(!yi[n])throw new Error("Unknown course");return Lt=yi[n],Object.assign(ce,Lt.cup),Lt}function Lo(n,t=Lt){return t.kind==="forest"?64*Math.sin(Math.PI*Math.max(0,Math.min(1,n/t.distance)))**2:t.kind==="finale"?20*Math.sin(n/80)*Math.sin(Math.PI*n/t.distance):10*Math.sin(n/85)*Math.sin(Math.PI*n/t.distance)}const J_=[[1.48,.7,.35,.27],[.95,1,-.4,.24],[1.32,.75,-.6,.32],[1.5,.72,.6,.3],[.72,1.38,.45,.22],[1.48,.65,-.3,.28],[1.25,.85,.8,.34],[1.22,.85,-.5,.27],[1.52,.87,.2,.32]];function xh(n=Lt){return J_[n.id]||[1,1,0,0]}function On(n,t,e=Lt){const[i,r,s,o]=xh(e),a=n-e.cup.x,c=t-e.cup.z,l=Math.cos(s),u=Math.sin(s),h=(a*l+c*u)/(e.greenRadius*i),f=(-a*u+c*l)/(e.greenRadius*r),d=Math.atan2(f,h),g=1+o*Math.cos(2*d+e.id*.55)+.16*Math.sin(3*d+e.id*.7)+.1*Math.cos(d+e.id);return Math.hypot(h,f)/g*e.greenRadius}function vh(n){return 1+.065*Math.sin(3*n)+.045*Math.cos(5*n+.6)}function Wc(n,t,e,i=Lt){const r=(n-e.x)/(e.w/2),s=(t-e.z)/(e.d/2),o=Math.atan2(s,r);let a=(Math.hypot(r,s)/vh(o)-1)*Math.min(e.w,e.d)/2;return i.kind==="lake"&&(a=Math.max(a,36-Math.hypot(n-i.cup.x,t-i.cup.z))),a}function qi(n,t,e=Lt){if(Math.abs(n)>160||t<-25||t>e.distance+85)return"Fora do campo";if(e.kind==="abyss"){const[i,r]=Gc(n);if(t>i&&t<r)return"Precipício"}if(e.kind==="stairs"&&Math.abs(n)>72)return"Precipício";for(const i of e.waters)if(Wc(n,t,i,e)<0){if(e.kind==="bridge"&&n>-6&&n<6)continue;return"Água"}return null}function gu(n,t,e=Lt){if(e.kind==="balcony"&&mh(n,t))return Tn.floor;if(e.kind==="abyss"){const[i,r]=Gc(n);if(t>i&&t<r)return-65;const s=1-Math.exp(-n*n/900),o=t<=i?i-t:t-r;return(t<=i?20:8+5*hi(280,335,t)+.4*Math.sin(n/35))+s*3.5*Math.sin(o/14)*Math.exp(-o/75)}return e.kind==="stairs"?Math.abs(n)>72?-35:12*hi(125,150,t)+14*hi(265,292,t)+12*hi(380,404,t)+.25*Math.sin(n/22):e.kind==="lake"?3:e.kind==="bridge"&&t>130&&t<186&&n>-6&&n<6?1.8:e.kind==="finale"?24*(1-hi(-5,235,t))+.35*Math.sin(n/40)*Math.sin(t/60):e.kind==="garden"?.8+.018*n+.4*Math.sin(t/24):.6*Math.sin(t/70)*Math.sin(n/60)}function $t(n,t,e=Lt){if(e.kind==="range")return 0;let i=gu(n,t,e);if(!(e.kind==="bridge"&&n>-6&&n<6&&t>130&&t<186))for(const d of e.waters){const g=Wc(n,t,d,e);i+=(Math.min(-5,d.y-4)-i)*(1-hi(-2,2,g))}if(e.kind==="calibration")return i;const r=n-e.cup.x,s=t-e.cup.z,o=On(n,t,e)/e.greenRadius,a=1-hi(.72,1.3,o),c=(e.id%2?-.008:.009)*r+.006*s,l=e.id%3===0?.24*Math.tanh((s+r*.25)/6):e.id%3===1?.42*Math.exp(-(r*r+s*s)/170):.003*r*s*Math.exp(-(r*r+s*s)/240),u=.12*Math.sin(r/5+e.id*.6)*Math.cos(s/7)+l,h=gu(e.cup.x,e.cup.z,e)+.12*Math.sin(e.id*.6)+(e.id%3===1?.42:0),f=i+(c+u)*a;return h+(f-h)*hi(1.1,3.5,Math.hypot(r,s))}function K_(n,t,e=Lt){if(e.kind==="range")return Math.max(Math.abs(n)-82,t-360);const i=Math.max(Math.abs(n-Lo(t,e))-(e.kind==="forest"?18:24),t-e.cup.z);return Math.min(i,On(n,t,e)-e.greenRadius-5)}function j_(n,t,e=Lt){if(e.kind==="range"&&e.targets.some(i=>Math.hypot(n-i.x,t-i.z)<i.r)||On(n,t,e)<e.greenRadius)return"green";for(const i of e.bunkers)if(((n-i.x)/i.rx)**2+((t-i.z)/i.rz)**2<1)return"bunker";return K_(n,t,e)<0?"fairway":"rough"}const Pe=(n,t,e,i,r,s,o="wall")=>({shape:"box",kind:o,x:n,y:t,z:e,w:i,h:r,d:s});function Q_(n){let t=103+n.id*19;const e=()=>(t=t*1664525+1013904223>>>0,t/4294967296),i=[],r=n.kind==="forest"?155:70;for(let s=0;s<r;s++){let o=15+e()*(n.distance+35),a=Lo(o,n)+(e()>.5?1:-1)*(n.kind==="forest"?23+e()*58:37+e()*60);if(qi(a,o,n)||On(a,o,n)<n.greenRadius+9||["gate","garden"].includes(n.kind)&&Math.abs(a)<50)continue;let c=n.kind==="forest"?17+e()*9:7+e()*7,l=$t(a,o,n),u=n.kind==="forest"?4+e()*2:3+e()*2;i.push({shape:"cylinder",kind:"trunk",x:a,y:l+c*.4,z:o,r:.7,h:c*.8}),i.push({shape:"sphere",kind:"canopy",x:a,y:l+c,z:o,r:u})}if(n.kind==="lake")for(let s=0;s<36;s++){const o=(s%2?1:-1)*(28+e()*100),a=s<18?12:220,c=$t(o,a,n),l=8+e()*6;i.push({shape:"cylinder",kind:"trunk",x:o,y:c+l*.4,z:a,r:.65,h:l*.8},{shape:"sphere",kind:"canopy",x:o,y:c+l,z:a,r:3+e()*2})}if(n.kind==="balcony"&&i.push(br(-15,6,-7,1,12,38),br(15,6,-7,1,12,38),br(0,6,-26,30,12,1),br(0,12,10,30,1,2),br(-9,2,-12,7,4,11),br(10,2,-12,5,4,8),Pe(0,17,Tn.castleZ,76,34,25,"castle-solid"),Pe(0,17,0,27,34,24,"castle-solid"),Pe(0,44.5,0,27,.6,25,"room-solid")),n.kind==="finale"){i.push(Pe(0,17,n.distance+56,76,34,25,"castle-solid"));for(const s of[-36,36])i.push({shape:"cylinder",kind:"castle-solid",x:s,y:22,z:n.distance+56,r:9,h:44})}if(n.kind==="forest")for(const s of[125,155,185,220]){const a=$t(8,s,n);i.push({shape:"cylinder",kind:"trunk",x:8,y:a+10,z:s,r:1.1,h:20},{shape:"sphere",kind:"canopy",x:8,y:a+22,z:s,r:6})}if(n.kind==="abyss"&&i.push(...gh()),n.kind==="forest")for(const s of[-27,-18,-9])i.push(Pe(s,$t(s,260,n)+4,260,3,8,3,"ruin"));if(n.kind==="gate"){i.push(Pe(-26,9,43,40,18,4),Pe(26,9,43,40,18,4),Pe(0,15,43,12,6,4)),i.push(Pe(0,7,41,12,14,1.2,"closed-gate"));for(const s of[-1,1])i.push(Pe(s*12,4,31,3.2,8,6.8,"mounted-guard"));i.push(Pe(-5.1,10.5,43,1.8,3,4),Pe(5.1,10.5,43,1.8,3,4)),i.push(Pe(-46,7,83,4,14,80),Pe(46,7,83,4,14,80),Pe(0,7,123,96,14,4))}if(n.kind==="bridge"){for(const[s,o]of[[-90,63],[91,245],[-88,360]])i.push(Pe(s,$t(s,o,n)+5,o,18,10,14,"farm-solid"));i.push({shape:"cylinder",kind:"farm-solid",x:-63,y:$t(-63,211,n)+10,z:211,r:7.5,h:20}),i.push(Pe(0,.8,158,12,2,60,"bridge"),Pe(-6.5,3.3,158,1,3,60,"bridge"),Pe(6.5,3.3,158,1,3,60,"bridge"));for(const s of[133,151,169,185])i.push(Pe(0,-1,s,12,6,3,"bridge"))}if(n.kind==="garden"){for(const[s,o]of[[-26,45],[27,65],[-27,106]]){let a=$t(s,o,n);i.push({shape:"cylinder",kind:"fountain",x:s,y:a+1.1,z:o,r:4,h:2.2},{shape:"cylinder",kind:"statue",x:s,y:a+3.5,z:o,r:.8,h:5})}for(const s of[-20,20])for(const o of[27,48])i.push(Pe(s,$t(s,o,n)+1,o,3,2,12,"hedge"))}if(["abyss","stairs","forest","finale"].includes(n.kind))for(let s=0;s<18;s++){let o=30+e()*(n.distance-30),a=Lo(o,n)+(e()>.5?1:-1)*(28+e()*30);if(qi(a,o,n)||On(a,o,n)<n.greenRadius+8)continue;let c=2+e()*3;i.push({shape:"sphere",kind:"rock",x:a,y:$t(a,o,n)+c*.55,z:o,r:c})}for(let s=0;s<15;s++){const o=.2+s/14*(Math.PI-.4),a=Math.cos(o)*(n.greenRadius*1.9+14),c=n.distance+Math.sin(o)*(n.greenRadius*1.8+14);if(qi(a,c,n)||On(a,c,n)<n.greenRadius+10||n.kind==="finale"&&Math.abs(a)<45)continue;const l=$t(a,c,n),u=8+e()*6;i.push({shape:"cylinder",kind:"trunk",x:a,y:l+u*.4,z:c,r:.65,h:u*.8},{shape:"sphere",kind:"canopy",x:a,y:l+u,z:c,r:3+e()*2})}return i}for(const n of yi)n.obstacles=Q_(n);const Xc=yi.reduce((n,t)=>n+t.par,0);yi.reduce((n,t)=>n+t.distance,0);function tx(n,t=yi){return{strokes:n.reduce((e,i)=>e+i,0),par:t.slice(0,n.length).reduce((e,i)=>e+i.par,0),relative:n.reduce((e,i,r)=>e+i-t[r].par,0)}}function Qi(n,t,e){return e.kind==="bridge"&&Math.abs(n)<6&&t>=120&&t<=196?t<128?$t(n,120,e)+(1.8-$t(n,120,e))*(t-120)/8:t>188?1.8+($t(n,196,e)-1.8)*(t-188)/8:1.8:$t(n,t,e)}function Do(n,t,e){const i=Qi(n,t,e);for(const[r,s]of[[0,0],[-1.35,0],[1.35,0],[0,-1.6],[0,1.6]])if(qi(n+r,t+s,e)||Math.abs(Qi(n+r,t+s,e)-i)>2.8)return!1;for(const r of e.obstacles){const s=r.y-(r.h?r.h/2:r.r),o=r.y+(r.h?r.h/2:r.r);if(!(e.kind==="bridge"&&r.kind==="bridge"&&r.shape==="box"&&r.x===0)&&!(o<=i+.3||s>i+3.5)){if(r.shape==="box"){if(Math.abs(n-r.x)<r.w/2+1.3&&Math.abs(t-r.z)<r.d/2+1.3)return!1}else if(Math.hypot(n-r.x,t-r.z)<r.r+1.3)return!1}}return!0}function ex(n,t){if(n.kind==="lake"||n.kind==="abyss")return null;let e={x:0,z:12};if(n.kind==="balcony")return{x:0,z:Tn.cartZ,yaw:Math.atan2(t.x,t.z-Tn.cartZ),speed:0};if(n.kind==="finale"&&t.z>275&&(e={x:t.x,z:t.z-10}),n.kind==="gate"&&t.z>45&&(e={x:0,z:57}),Do(e.x,e.z,n))return{...e,yaw:Math.atan2(t.x-e.x,t.z-e.z),speed:0};for(const i of[20,15,10,7])for(let r=0;r<24;r++){const s=r/24*Math.PI*2,o=t.x+Math.sin(s)*i,a=t.z+Math.cos(s)*i;if(Do(o,a,n))return{x:o,z:a,yaw:Math.atan2(t.x-o,t.z-a),speed:0}}return null}function nx(n,t,e,i){const r=(t.forward?1:0)-(t.back?1:0),s=(t.left?1:0)-(t.right?1:0);n.speed+=r*16*e,r||(n.speed*=Math.exp(-3*e)),t.brake&&(n.speed*=Math.exp(-12*e)),n.speed=Math.max(-9,Math.min(23,n.speed)),n.yaw+=s*1.7*e*Math.min(1,Math.abs(n.speed)/3)*Math.sign(n.speed||1);const o=Math.max(1,Math.ceil(Math.abs(n.speed)*e/.35));for(let a=0;a<o;a++){const c=n.x+Math.sin(n.yaw)*n.speed*e/o,l=n.z+Math.cos(n.yaw)*n.speed*e/o;if(Do(c,l,i)&&Math.abs(Qi(c,l,i)-Qi(n.x,n.z,i))<1.1)n.x=c,n.z=l;else{n.speed=0;break}}return n}function ix(n){const t=new jt;n.add(t),t.visible=!1;const e=new Ut({color:"#eeeade",metalness:.2,roughness:.35}),i=new Ut({color:"#26645c",metalness:.4,roughness:.3}),r=new Ut({color:"#242b2b",roughness:.85}),s=new Ut({color:"#b8c7c9",metalness:.7,roughness:.25}),o=new Ut({color:"#b3a38a",roughness:.9});function a(h,f,d,g,v,m,p){const E=new Jt(new Te(g,v,m),p);return E.position.set(h,f,d),E.castShadow=E.receiveShadow=!0,t.add(E),E}a(0,.65,0,2.5,.35,3.8,r),a(0,1.05,1.1,2.6,.7,1.35,i),a(0,1.15,-1.35,2.6,.7,.8,i),a(0,1.15,-.35,2.2,.3,1.2,o),a(0,1.65,-.9,2.2,1,.2,o),a(0,3.65,0,2.9,.18,4.1,e);for(const h of[-1.2,1.2])for(const f of[-1.55,1.55])a(h,2.4,f,.075,2.5,.075,s);for(const h of[-.9,.9])a(h,1.2,1.8,.45,.25,.05,new Ut({color:"#fff6cc",emissive:"#ffedb0",emissiveIntensity:.4}));a(0,.8,1.85,2.7,.2,.2,s);const c=[];for(const h of[-1.3,1.3])for(const f of[-1.25,1.25]){const d=new Jt(new ae(.48,.48,.3,20),r);d.rotation.z=Math.PI/2,d.position.set(h,.5,f),t.add(d),c.push(d);const g=new Jt(new ae(.23,.23,.32,12),s);g.rotation.z=Math.PI/2,g.position.copy(d.position),t.add(g)}const l=new Jt(new en(.32,.045,8,20),r);l.position.set(-.55,1.95,.65),l.rotation.x=-.6,t.add(l);const u=new Jt(new en(2.2,.065,6,48),new vi({color:"#f5da7c"}));return u.rotation.x=-Math.PI/2,n.add(u),u.visible=!1,{root:t,marker:u,update(h,f,d,g){t.position.set(h.x,Qi(h.x,h.z,d)+.05,h.z),t.rotation.y=h.yaw,c.forEach(v=>v.rotation.x+=h.speed*g*2),u.position.set(f.x,$t(f.x,f.z,d)+.08,f.z)},hide(){t.visible=u.visible=!1}}}const _u={flag:'<path d="M5 21V3m0 1c5-4 9 4 14 0v9c-5 4-9-4-14 0"/>',ball:'<circle cx="12" cy="10" r="6"/><path d="M9 19h6m-3-3v5m-3-12h.01M12 12h.01M15 9h.01"/>',wind:'<path d="M3 8h12a3 3 0 1 0-3-3M3 12h16a3 3 0 1 1-3 3M3 16h5a3 3 0 1 1-3 3"/>',crown:'<path d="m3 6 4 4 5-6 5 6 4-4-2 12H5L3 6Zm2 15h14"/>',left:'<path d="m14 6-6 6 6 6"/>',right:'<path d="m10 6 6 6-6 6"/>',down:'<path d="m6 9 6 6 6-6"/>',fire:'<path d="M13 3c1 5-6 6-4 10 1-2 3-2 4-4 0 4 5 4 5 8a6 6 0 0 1-12 0C3 11 9 9 13 3Z"/>',straight:'<path d="M12 21V3m-4 4 4-4 4 4"/>',topspin:'<path d="M7 18a8 8 0 1 0-2-9m0-5v5h5"/><path d="m10 12 2-2 2 2m-2-2v7"/>',backspin:'<path d="M17 6a8 8 0 1 0 2 9m0 5v-5h-5"/><path d="m10 12 2 2 2-2m-2 2V7"/>',draw:'<path d="M17 21C17 10 7 12 7 3m-4 4 4-4 4 4"/>',fade:'<path d="M7 21C7 10 17 12 17 3m-4 4 4-4 4 4"/>',hook:'<path d="M18 21V9a6 6 0 0 0-12 0v3m-4-4 4 4 4-4"/>',slice:'<path d="M6 21V9a6 6 0 0 1 12 0v3m-4-4 4 4 4-4"/>',pause:'<path d="M8 5v14M16 5v14"/>',help:'<circle cx="12" cy="12" r="9"/><path d="M9 9a3 3 0 1 1 4 3c-1 .5-1 1-1 2m0 3h.01"/>',camera:'<path d="M4 7h4l2-3h4l2 3h4v13H4Z"/><circle cx="12" cy="13" r="4"/>',sound:'<path d="m11 4-6 5H2v6h3l6 5V4Zm4 4a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>',mute:'<path d="m11 4-6 5H2v6h3l6 5V4Zm5 5 5 6m0-6-5 6"/>'},Ii=n=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${_u[n]||_u.ball}</svg>`,go=[["straight","Reta","Sem efeito"],["topspin","Topspin","Mais rolagem"],["backspin","Underspin","Freio e recuo"],["draw","Draw","Curva à esquerda"],["fade","Fade","Curva à direita"],["hook","Hook","Esquerda extrema"],["slice","Slice","Direita extrema"]];function rx(){const n=c=>document.querySelector(c),t=n("#shot-effect"),e=n("#effect-toggle"),i=n("#effect-menu");for(const[c,l]of[["prev","left"],["next","right"],["left","left"],["right","right"],["pause","pause"],["camera-view","camera"],["help","help"]])n("#"+c).innerHTML=Ii(l);for(const c of document.querySelectorAll("[data-ui-icon]"))c.innerHTML=Ii(c.dataset.uiIcon);n("#rip").innerHTML=Ii("fire")+"<span>Rip it</span><small>+50%</small>",i.innerHTML=go.map(([c,l,u])=>`<button type="button" role="radio" aria-checked="false" data-effect="${c}" title="${u}">${Ii(c)}<span>${l}</span><small>${u}</small></button>`).join("");function r(){i.hidden=!0,e.setAttribute("aria-expanded","false")}e.onclick=()=>{t.disabled||(i.hidden=!i.hidden,e.setAttribute("aria-expanded",String(!i.hidden)))},i.onclick=c=>{const l=c.target.closest("[data-effect]");!l||t.disabled||(t.value=l.dataset.effect,t.dispatchEvent(new Event("change")),r(),e.focus())},document.addEventListener("pointerdown",c=>{c.target.closest(".effect-picker")||r()}),i.addEventListener("keydown",c=>{const l=[...i.querySelectorAll("button")],u=l.indexOf(document.activeElement);["ArrowRight","ArrowDown","ArrowLeft","ArrowUp"].includes(c.key)&&(c.preventDefault(),c.stopPropagation(),l[(Math.max(0,u)+(["ArrowRight","ArrowDown"].includes(c.key)?1:l.length-1))%l.length].focus())}),document.addEventListener("keydown",c=>{c.key==="Escape"&&!i.hidden&&(c.preventDefault(),c.stopImmediatePropagation(),r(),e.focus())},!0);let s="",o=null,a=null;return{update(){const c=document.body.classList.contains("left-handed");if(c!==a){a=c,s="";for(const h of i.querySelectorAll("button")){const f=go.find(v=>v[0]===h.dataset.effect),d=["draw","fade","hook","slice"].includes(f[0]),g=c&&d?f[2].replace(/esquerda|direita|Esquerda|Direita/g,v=>({esquerda:"direita",direita:"esquerda",Esquerda:"Direita",Direita:"Esquerda"})[v]):f[2];h.title=g,h.querySelector("small").textContent=g,h.querySelector("svg").style.transform=c&&d?"scaleX(-1)":""}}const l=t.value,u=t.disabled;if(e.disabled=u,u&&r(),l!==s){s=l,e.setAttribute("aria-label",`Efeito: ${go.find(h=>h[0]===l)?.[1]||"Reta"}. Alterar efeito`),e.innerHTML=Ii(l)+`<span>${go.find(h=>h[0]===l)?.[1]||"Reta"}</span>`+Ii("down"),c&&["draw","fade","hook","slice"].includes(l)&&(e.querySelector("svg").style.transform="scaleX(-1)");for(const h of i.querySelectorAll("button"))h.setAttribute("aria-checked",String(h.dataset.effect===l))}u!==o&&(o=u,e.title=u?"Seleção disponível antes da tacada, com taco aéreo":"Escolher efeito da bola")},sound(c){n("#sound").innerHTML=Ii(c?"sound":"mute"),n("#sound").setAttribute("aria-label",c?"Desativar som":"Ativar som"),n("#sound").setAttribute("aria-pressed",String(c)),n("#sound").title=c?"Som ligado":"Som desligado"}}}function sx(n,t,e=!1,i=!1,r=!1){const s=e?30:r?6:i?8:10,o=e?20:r||i?3.7:5,a=e?28:r||i?8:24,c=Math.sin(t),l=Math.cos(t);return{position:[n.x-c*s,n.y+o,n.z-l*s],target:[n.x+c*a,n.y+1.1,n.z+l*a]}}function ox(n,t,e=!1){return n-t*(e?65e-5:.0022)}function ax(){const n=new jt,t=[],e=new Ut({color:"#bfc3c6",metalness:.72,roughness:.32});function i(o,a,c=0,l=0,u=0){const h=new Jt(a,e);return h.position.set(c,l,u),h.castShadow=h.receiveShadow=!0,o.add(h),h}function r(o,a,c,l,u,h,f,d=.025){const g=new Hr,v=a/2,m=c/2;return g.moveTo(-v+d,-m),g.lineTo(v-d,-m),g.quadraticCurveTo(v,-m,v,-m+d),g.lineTo(v,m-d),g.quadraticCurveTo(v,m,v-d,m),g.lineTo(-v+d,m),g.quadraticCurveTo(-v,m,-v,m-d),g.lineTo(-v,-m+d),g.quadraticCurveTo(-v,-m,-v+d,-m),i(o,new zc(g,{depth:l,bevelEnabled:!0,bevelSize:.008,bevelThickness:.008,bevelSegments:2,steps:1,curveSegments:8}),u,h,f-l/2)}for(let o=0;o<5;o++){const a=new jt;if(n.add(a),t.push(a),i(a,new ae(.035,.045,.18,12),-.035,.1,0).quaternion.setFromUnitVectors(new I(0,1,0),new I(-.83,1.13,.22).normalize()),o<2){const l=o===0?1:.8;i(a,new _e(1,24,16),.17*l,.045,-.12*l).scale.set(.26*l,.145*l,.23*l)}else if(o<4){const l=o===3,u=new jt;a.add(u),u.position.set(.17,.045,.025),u.rotation.x=-(l?52:28)*Math.PI/180;const h=l?.37:.43,f=l?.25:.23;r(u,h,f,.065,0,0,0,.045),r(u,h*.94,.055,.09,0,-f/2+.025,-.02,.02)}else r(a,.48,.115,.12,.19,.015,.025,.018)}let s=-1;return{root:n,setClub(o){o!==s&&(s=o,t.forEach((a,c)=>a.visible=c===o))}}}const wo=1.06,vc=.74,Le=(n,t,e)=>new I(n,t,e),xu=Le(0,1,0),vu=Le(.84,.56,0).normalize(),Tr=n=>n*n*(3-2*n),Aa=(n,t,e)=>n+(t-n)*e;function cx(){const n=new jt,t=new Ut({color:"#9e413c",roughness:.85}),e=new Ut({color:"#dfb38b",roughness:.85}),i=new Ut({color:"#e4b957",metalness:.45,roughness:.4}),r=new Ut({color:"#3e3930",roughness:.85}),s=new Ut({color:"#b9c7c5",metalness:.7,roughness:.3}),o=new Ut({color:"#d8d8d8",metalness:.22,roughness:.48,emissive:"#808080",emissiveIntensity:.18});function a(W,et,Q=n){const Et=new Jt(W,et);return Et.castShadow=!0,Et.receiveShadow=!0,Q.add(Et),Et}function c(W,et,Q){return a(new _e(W,24,18),et,Q)}function l(W,et){return a(new ae(W,W,1,10),et)}function u(W,et,Q){W.position.copy(et).add(Q).multiplyScalar(.5),W.scale.y=et.distanceTo(Q),W.quaternion.setFromUnitVectors(xu,Q.clone().sub(et).normalize())}const h=new jt;n.add(h);const f=a(new ae(.39,.48,.95,24),t,h);f.position.y=.2;const d=a(new ae(.46,.46,.1,24),r,h);d.position.y=-.18,a(new Te(.08,.14,.2),i,h).position.set(.46,-.18,0);const v=new Ut({color:"#722b33",roughness:.9,side:Se}),m=new Rn(.9,1.25,12,16),p=m.attributes.position;for(let W=0;W<p.count;W++){const et=p.getX(W),Q=p.getY(W);p.setXYZ(W,-.42-.16*(.625-Q),Q+.1,et*(1.1-.2*Q))}m.computeVertexNormals();const E=a(m,v,h),x=Float32Array.from(p.array),_=new Ut({color:"#e6dec6",roughness:1}),w=new jt;h.add(w);for(let W=0;W<18;W++){const et=W/18*Math.PI*2;c(.095,_,w).position.set(Math.cos(et)*.37,.65,Math.sin(et)*.35)}const M=a(new _e(.15,20,12),i,h);M.scale.set(.25,1,1),M.position.set(.405,.3,0);const T=new Ut({color:"#477b89",metalness:.35,roughness:.2});a(new Fn(.08),T,h).position.set(.46,.3,0);for(const W of[-.2,.2])a(new Te(.025,.65,.025),i,h).position.set(.39,.2,W);const S=new jt;h.add(S);for(const W of[-1,1])a(new _e(.25,16,12,0,Math.PI*2,0,Math.PI*.65),s,S).position.set(0,.5,W*.39),c(.045,i,S).position.set(.22,.48,W*.4);S.visible=!1;const y=a(new ae(.405,.49,.7,24,1,!0,-Math.PI*.2,Math.PI*.4),_,h);y.rotation.y=Math.PI/2,y.position.y=-.02,y.visible=!1;const R=new jt;n.add(R),c(.31,e,R),c(.09,e,R).position.set(.3,-.02,0);const N=new Ut({color:"#654433",roughness:1});for(const W of[-.14,.14]){const et=c(.052,_,R);et.scale.set(.45,1,1),et.position.set(.276,.07,W),c(.028,r,R).position.set(.302,.07,W);const Et=a(new hs(.018,.07,4,8),N,R);Et.rotation.x=Math.PI/2,Et.position.set(.288,.145,W);const F=c(.08,e,R);F.scale.set(.8,1,.65),F.position.set(-.02,0,W>0?.29:-.29)}const O=new jt;R.add(O);for(const W of[-1,1]){const et=c(.08,N,O);et.scale.set(.6,.45,1.5),et.position.set(.29,-.08,W*.065)}const B=c(.16,N,O);B.scale.set(.6,.7,1),B.position.set(.19,-.22,0);const V=a(new _e(.316,24,16,0,Math.PI*2,0,Math.PI*.35),N,R);V.rotation.y=Math.PI/2;const $=a(new en(.064,.012,6,16,Math.PI),r,R);$.rotation.set(0,Math.PI/2,Math.PI),$.position.set(.294,-.12,0);const G=new jt;R.add(G);const pt=a(new ae(.32,.32,.12,10),i,G);pt.position.y=.28;for(let W=0;W<6;W++){const et=W*Math.PI/3;a(new Ce(.07,.24,4),i,G).position.set(Math.cos(et)*.27,.44,Math.sin(et)*.27),a(new Fn(.045),T,G).position.set(Math.cos(et)*.325,.29,Math.sin(et)*.325)}const D=a(new _e(.34,12,8),s,R);D.visible=!1;const q=a(new Te(.08,.07,.42),r,R);q.position.set(.33,.06,0),q.visible=!1;const ot=a(new _e(.34,10,6,0,Math.PI*2,0,Math.PI/2),t,R);ot.position.y=.13,ot.visible=!1;const rt=new Ut({color:"#594180",roughness:.8}),bt=new Ut({color:"#386d45",roughness:.9}),vt=new Ut({color:"#b84032",roughness:.65}),X=new Ut({color:"#e47b4a",roughness:.85,side:Se}),at=new jt;R.add(at),a(new ae(.58,.58,.07,20),rt,at).position.y=.27;const Rt=a(new Ce(.42,1.15,16),rt,at);Rt.position.set(-.1,.84,0),Rt.rotation.z=.12;const Ht=a(new ae(.42,.44,.1,16),i,at);Ht.position.y=.34,a(new Fn(.105),i,at).position.set(.35,.63,0);const te=a(new Ce(.22,.66,12),_,R);te.position.set(.26,-.39,0),te.rotation.z=Math.PI;const he=new jt;R.add(he);const U=a(new Ce(.36,.92,14),vt,he);U.position.set(-.07,.67,0),U.rotation.z=.15;const ht=a(new ae(.37,.37,.09,14),_,he);ht.position.y=.23;const it=new jt;R.add(it);for(const W of[-1,1]){const et=a(new Ce(.105,.42,6),e,it);et.position.set(0,.08,W*.39),et.rotation.x=W*Math.PI/2}const nt=a(new Ce(.36,.5,12),bt,it);nt.position.set(-.13,.36,0),nt.rotation.z=.45;const tt=a(new hs(.035,.4,4,8),_,it);tt.position.set(-.16,.64,.18),tt.rotation.z=-.35;const Mt=new jt;R.add(Mt);const mt=a(new _e(1,16,12),vt,Mt);mt.position.set(.32,-.04,0),mt.scale.set(.3,.2,.26);for(const W of[-1,1]){c(.034,r,Mt).position.set(.58,.01,W*.13);const Q=a(new Ce(.09,.36,8),_,Mt);Q.position.set(-.08,.37,W*.22),Q.rotation.z=-.3}const yt=new jt;h.add(yt);const Zt=a(new _e(1,16,12),i,yt);Zt.position.set(.4,.16,0),Zt.scale.set(.1,.43,.32);const Xt=[];for(const W of[-1,1]){const et=new jt;et.position.set(-.35,.5,W*.28),yt.add(et);const Q=[0,0,0,-.4,.45,W*.4,-.65,.15,W*1.1,-.48,-.2,W*.78,-.3,-.4,W*.55],Et=new pe;Et.setAttribute("position",new qt(Q,3)),Et.setIndex([0,1,2,0,2,3,0,3,4]),Et.computeVertexNormals(),a(Et,X,et);for(let F=1;F<5;F++){new I;const st=new I(...Q.slice(F*3,F*3+3)),ft=a(new ae(.025,.035,st.length(),6),vt,et);ft.position.copy(st).multiplyScalar(.5),ft.quaternion.setFromUnitVectors(xu,st.normalize())}Xt.push(et)}for(let W=0;W<6;W++)c(.14-W*.018,vt,yt).position.set(-.45-W*.15,-.2-W*.06,Math.sin(W*.5)*.13);const L=[-1,1].map(W=>({side:W,thigh:l(.15,r),shin:l(.12,r),boot:a(new hs(.14,.26,6,12),r)})),b=[-1,1].map(W=>({side:W,upper:l(.12,t),lower:l(.095,t),hand:c(.105,e)})),k=l(.027,s),J=l(.045,s),ut=ax(),K=ut.root;n.add(K),ut.setClub(0);const Nt=new I;function xt(W=-1,et=!1,Q=1){k.visible=J.visible=K.visible=!0;let Et=0,F=0,st=0,ft=0,wt=Le(.67,1.35,-.08);if(W>=0)if(et)W<.5?Et=.28*Tr(W/.5):W<vc?Et=.28*(1-Tr((W-.5)/.24)):Et=-.36*Tr(Math.min(1,(W-vc)/.42));else{const Pt=.65+.35*Q,se=[{t:0,a:0,r:0,s:0,h:[.67,1.35,-.08]},{t:.82,a:2.05*Pt,r:.85*Pt,s:-.1,h:[.36,1.95,-.58]},{t:wo,a:0,r:-.18,s:.09,h:[.67,1.35,-.08]},{t:1.72,a:-2.45*Pt,r:-1.25,s:.2,h:[.2,2.05,.43]}],Kt=W<.82?0:W<wo?1:2,Ae=se[Kt],Ue=se[Kt+1],Cn=Tr(hl.clamp((W-Ae.t)/(Ue.t-Ae.t),0,1));Et=Aa(Ae.a,Ue.a,Cn),F=Aa(Ae.r,Ue.r,Cn),st=Aa(Ae.s,Ue.s,Cn),wt=Le(...Ae.h).lerp(Le(...Ue.h),Cn),ft=.22*Tr(hl.clamp((W-wo)/.55,0,1))}h.position.set(.07,1.48,st),h.rotation.set(0,F,-.16),R.position.set(.23,2.25,st*.25),R.rotation.y=W>1.3?F*.65:0,E.rotation.z=-.13+Math.sin(Et)*.18;for(let Pt=0;Pt<p.count;Pt++){const se=x[Pt*3+1],Kt=Math.max(0,.725-se);p.setX(Pt,x[Pt*3]+Math.sin(x[Pt*3+2]*10+Et*2)*.035*Kt-Math.sin(Et)*Kt*.09)}p.needsUpdate=!0,m.computeVertexNormals();const lt=Le(.83,-1.13,-.22).applyAxisAngle(vu,Et),ct=wt.clone().add(lt);u(k,wt,ct);const zt=wt.clone().addScaledVector(lt,.18);u(J,wt,zt),K.position.copy(ct),K.quaternion.setFromAxisAngle(vu,Et),h.updateMatrixWorld(!0);for(const Pt of b){Nt.set(0,.52,Pt.side*.38).applyMatrix4(h.matrix);const se=wt.clone().addScaledVector(lt,Pt.side===1?.07:0),Kt=se.clone().sub(Nt),Ae=Kt.length(),Ue=.59,Cn=Kt.clone().normalize(),Mn=Le(-.15,-.1,Pt.side*.8);Mn.addScaledVector(Cn,-Mn.dot(Cn)).normalize();const Jr=Math.sqrt(Math.max(.005,Ue*Ue-Ae*Ae/4)),Kr=Nt.clone().addScaledVector(Kt,.5).addScaledVector(Mn,Jr);u(Pt.upper,Nt,Kr),u(Pt.lower,Kr,se),Pt.hand.position.copy(se)}for(const Pt of L){const se=Le(0,1.15,Pt.side*.28+st),Kt=Le(.02,.2,Pt.side*.48);Pt.side<0&&(Kt.y+=ft,Kt.z+=ft*.25);const Ae=Le(.14,.68,Pt.side*.4+st*.45);u(Pt.thigh,se,Ae),u(Pt.shin,Ae,Kt),Pt.boot.position.copy(Kt).add(Le(.12,-.06,0)),Pt.boot.rotation.z=Math.PI/2+(Pt.side<0?-ft*1.5:0)}}function Ft(){xt(),k.visible=J.visible=K.visible=!1,h.position.set(0,1.35,0),h.rotation.set(0,0,0),R.position.set(.02,2.35,0),R.rotation.set(0,0,0);for(const W of L){const et=Le(0,1.1,W.side*.3),Q=Le(.65,1,W.side*.3),Et=Le(.7,.45,W.side*.3);u(W.thigh,et,Q),u(W.shin,Q,Et),W.boot.position.copy(Et),W.boot.rotation.z=Math.PI/2}for(const W of b){const et=Le(0,1.85,W.side*.38),Q=Le(.35,1.5,W.side*.45),Et=Le(.8,1.55,W.side*.25);u(W.upper,et,Q),u(W.lower,Q,Et),W.hand.position.copy(Et)}}function Ot(W){xt();const et=Tr(Math.min(1,W/.5)),Q=Math.max(0,Math.sin((W-.35)*7))*Math.max(0,1-W/2.8)*.18;h.position.y+=Q,R.position.y+=Q,h.rotation.y=-.25*Math.sin(W*3),R.rotation.y=-.45;for(const st of b){const ft=Le(.05,2+Q,st.side*.38),wt=Le(.1,2.1+et*.45+Q,st.side*.62),lt=Le(.1,2+et*1.05+Q,st.side*.46);u(st.upper,ft,wt),u(st.lower,wt,lt),st.hand.position.copy(lt)}const Et=b[1].hand.position,F=Et.clone().add(Le(.15,1.35,.15));u(k,Et,F),u(J,Et,Et.clone().lerp(F,.18)),K.position.copy(F),K.quaternion.copy(k.quaternion),E.rotation.z=-.15-Math.sin(W*7)*.07}function gt(W){const et=W==="THE KNIGHT",Q=W==="THE SERVANT",Et=W==="RED DRAGON",F=W==="THE WIZARD",st=W==="THE GNOME",ft=W==="THE ELF",wt=!(et||Q||Et||F||st||ft);t.color.set(et?"#d8d8d8":Q?"#897247":Et?"#b84032":F?"#594180":st?"#3d6b8b":ft?"#386d45":"#9e413c"),e.color.set(Et?"#b84032":"#dfb38b"),N.color.set(ft?"#cfb46e":F||st?"#e4dfd1":"#654433"),G.visible=w.visible=wt,O.visible=wt||F||st,V.visible=wt||Q||ft,S.visible=et,S.children.forEach(lt=>{lt.isMesh&&lt.geometry.type==="SphereGeometry"&&lt.geometry.parameters.radius>.1&&(lt.material=o)}),D.material=et?o:s,y.visible=Q,v.color.set(et?"#294b65":F?"#453165":ft?"#294933":"#722b33"),E.visible=wt||et||F||ft,D.visible=q.visible=et,ot.visible=Q,at.visible=F,te.visible=F||st,he.visible=st,it.visible=ft,Mt.visible=yt.visible=Et;for(const lt of L)lt.thigh.material=lt.shin.material=lt.boot.material=et?o:Et?vt:r}function At(W){Xt.forEach((et,Q)=>et.rotation.x=(Q?1:-1)*(.15+Math.sin(W*2)*.12))}return xt(),{root:n,pose:xt,celebrate:Ot,setCharacter:gt,setClub:ut.setClub,seated:Ft,animateDetails:At}}function lx(n){const t=["#967149","#a67d51","#89633e","#b08a5b"].map(o=>new Ut({color:o,roughness:.86})),e=new Ut({color:"#59412b",roughness:.9}),i=new Ut({color:"#555652",metalness:.5,roughness:.55});function r(o,a,c,l,u,h,f){const d=new Jt(new Te(l,u,h),f);return d.position.set(o,a,c),d.castShadow=d.receiveShadow=!0,n.add(d),d}function s(o,a,c=.22){const l=new I(...o),u=new I(...a);r(...l.clone().add(u).multiplyScalar(.5).toArray(),c,l.distanceTo(u),c,e).quaternion.setFromUnitVectors(new I(0,1,0),u.sub(l).normalize())}for(let o=128;o<188;o+=.75){r(0,1.65,o+.36,12,.3,.7,t[Math.round(o/.75)%4]);for(const a of[-5.25,5.25])r(a,1.808,o+.36,.09,.018,.09,i)}for(const o of[-4.8,0,4.8])r(o,1.1,158,.5,.8,60,e);for(const o of[-6.5,6.5]){for(let a=128;a<=188;a+=5)r(o,2.8,a,.55,2.5,.55,e),r(o,4.12,a,.75,.18,.75,t[1]),r(o,2,a,.59,.18,.59,i);for(const a of[2.5,3.7])r(o,a,158,.24,.25,60,t[1]);for(let a=128;a<188;a+=5)s([o,2.2,a],[o,3.6,a+5]),s([o,3.6,a],[o,2.2,a+5])}for(const o of[133,151,169,185]){for(const a of[-4.8,4.8])r(a,-1,o,.8,6,.8,e),s([a,-3,o-3],[a,1.1,o+3],.35);r(0,.9,o,11,.5,.7,e)}for(const o of[-1,1])for(let a=0;a<16;a++){const c=(a+.5)/16,l=o<0?120+c*8:196-c*8;r(0,c*1.8-.12,l,12,.24,.48,t[a%4])}}function ux(n,t){const e=new jt;n.add(e);const i=[],r=[],s=P=>new Ut({color:P,roughness:.9}),o=s("#d5c3a0"),a=s("#6d4a30"),c=s("#9e644b"),l=s("#ede0b9"),u=s("#75553b"),h=s("#537a37"),f=s("#c5ae60"),d=s("#d2a47a"),g=s("#536c83"),v=s("#9a5143"),m=s("#353630"),p=s("#e2dfca");function E(P,N,O,B,V,$=e){const G=new Jt(P,N);return G.position.set(O,B,V),G.castShadow=G.receiveShadow=!0,$.add(G),G}function x(P,N,O,B,V,$,G=a,pt=e){return E(new Te(B,V,$),G,P,N,O,pt)}function _(P,N,O,B,V,$,G,pt=e){const D=E(new Xr(1,1),G,P,N,O,pt);return D.scale.set(B,V,$),D}const w=new jt;w.position.set(-63,$t(-63,211,t),211),e.add(w),E(new ae(5.5,7.5,20,12),o,0,10,0,w),E(new Ce(9,9,12),c,0,24.5,0,w);for(const P of[2,10,19]){const N=E(new en(7.5-P*.1,.18,6,24),a,0,P,0,w);N.rotation.x=Math.PI/2}x(0,3,-7.25,3.5,6,.25,a,w);for(const P of[-3,3])x(P,12,-6.3,1.6,2.5,.2,m,w),x(P,12,-6.5,1.9,.15,.15,l,w);const M=new jt;M.position.set(0,17,-8),w.add(M),E(new ae(.9,.9,1,12),a,0,0,0,M).rotation.x=Math.PI/2;for(let P=0;P<4;P++){const N=new jt;N.rotation.z=P*Math.PI/2,M.add(N),x(0,7,0,.35,15,.35,a,N),x(1.3,8,.12,2.4,10,.12,l,N);for(let O=0;O<6;O++)x(1.3,3.5+O*1.8,-.02,2.8,.16,.3,a,N)}const T=[];function A(P,N,O){const B=new jt;B.position.set(P,$t(P,N,t),N),B.rotation.y=O*.8,e.add(B);for(const G of[-1,1])x(G*.22,.7,0,.3,1.4,.35,a,B);const V=new jt;V.position.y=1.5,B.add(V),x(0,.45,0,.85,1,.5,O%2?g:v,V),_(0,1.35,0,.35,.4,.35,d,V),E(new ae(.65,.65,.12,12),f,0,1.7,0,V),E(new ae(.35,.4,.35,12),f,0,1.88,0,V);for(const G of[-1,1])x(G*.45,.3,-.4,.22,.75,.25,d,V).rotation.x=-.7;const $=x(.5,-.2,-.9,.08,2.6,.08,a,V);$.rotation.x=-.45,x(.5,-1.3,-.4,.65,.12,.3,m,V),i.push({torso:V,index:O})}function S(P,N,O,B){const V=new jt;V.position.set(P,$t(P,N,t),N),V.rotation.y=B*1.1,e.add(V);for(const G of[-1,1])for(const pt of[-1,1])x(G*.45,.5,pt*.7,.18,1,.18,m,V);if(_(0,1.25,0,.8,.7,1.25,O?p:l,V),!O)for(let G=0;G<3;G++)_(G%2?.65:-.65,1.35,(G-1)*.6,.2,.45,.45,m,V);const $=new jt;$.position.set(0,1.35,-1.2),V.add($),_(0,0,0,.4,.45,.55,O?m:a,$);for(const G of[-1,1])_(G*.4,.2,0,.25,.1,.12,O?m:l,$);r.push({head:$,index:B})}for(const[P,N,O]of[[0,-90,63],[1,91,245],[2,-88,360]]){const B=$t(N,O,t),V=new jt;V.position.set(N,B,O),e.add(V),x(0,5,0,18,10,14,o,V),E(new Ce(14,8,4),c,0,14,0,V).rotation.y=Math.PI/4;for(const D of[-8,0,8])x(D,5,-7.12,.4,10,.3,a,V);for(const D of[1,5,9.5])x(0,D,-7.15,18,.4,.3,a,V);x(0,3,-7.3,3.4,6,.3,a,V);for(const D of[-5,5])x(D,6.8,-7.3,2.3,2.8,.2,m,V),x(D,6.8,-7.45,.15,2.8,.1,l,V);x(5,14,2,2,8,2,o,V);const $=N+(N<0?23:-23),G=O-17;x($,$t($,G,t)-.1,G,18,.2,24,u);for(let D=0;D<8;D++)for(let q=0;q<10;q++){const ot=$-7+D*2,rt=G-10+q*2.2;T.push([ot,$t(ot,rt,t),rt,P])}for(let D=0;D<3;D++)A($-7+D*6,G-11+D*7,P*3+D);const pt=O+25;for(let D=0;D<7;D++){const q=N-12+D*4;x(q,$t(q,pt,t)+1.2,pt,.35,2.4,.35)}for(const D of[.8,1.7])x(N,$t(N,pt,t)+D,pt,25,.18,.2);for(let D=0;D<5;D++)S(N-9+D*4,pt+6+D%2*4,P!==1,P*5+D);for(let D=0;D<3;D++)E(new ae(1.5,1.5,2.5,12),f,N+12,$t(N+12,O+D*3,t)+1.5,O+D*3).rotation.z=Math.PI/2}const y=new Ki(new Ce(.45,1.3,5),h,T.length),R=new ye;return T.forEach(([P,N,O],B)=>{R.position.set(P,N+.65,O),R.scale.set(1,1+B%3*.15,1),R.updateMatrix(),y.setMatrixAt(B,R.matrix)}),y.castShadow=!0,e.add(y),{update(P){M.rotation.z=P*.3,i.forEach(({torso:N,index:O})=>{N.rotation.x=.15+Math.sin(P*1.6+O)*.3}),r.forEach(({head:N,index:O})=>{N.rotation.x=.3+Math.sin(P*.7+O)*.3,N.rotation.y=Math.sin(P*.4+O)*.2})}}}function hx(n,t){const e=new jt;n.add(e);const i=(w,M=0)=>new Ut({color:w,metalness:M,roughness:M?.35:.9}),r=i("#b9aa8c"),s=i("#d5c5a3"),o=i("#62452d"),a=i("#303d3d",.7),c=i("#c8a04c",.55),l=i("#aabfc1",.7),u=i("#3b526d"),h=i("#69503e"),f=i("#2a2927");function d(w,M,T,A,S,y=e){const R=new Jt(w,M);return R.position.set(T,A,S),R.castShadow=R.receiveShadow=!0,y.add(R),R}function g(w,M,T,A,S,y,R=r,P=e){return d(new Te(A,S,y),R,w,M,T,P)}function v(w,M,T,A,S,y,R,P=e){const N=d(new _e(1,12,8),R,w,M,T,P);return N.scale.set(A,S,y),N}function m(w,M,T,A,S){const y=new I(...M).sub(new I(...w)),R=d(new ae(T,T,y.length(),8),A,...w,S);return R.position.addScaledVector(y,.5),R.quaternion.setFromUnitVectors(new I(0,1,0),y.normalize()),R}const p=new Ki(new Te(1,1,1),r,144),E=new ye;let x=0;for(let w=0;w<18;w++)for(let M=0;M<8;M++){const T=-7+M*2+w%2*.25,A=4+w*2;E.position.set(T,$t(T,A,t)+.025,A),E.scale.set(1.92,.045,1.9),E.rotation.y=0,E.updateMatrix(),p.setMatrixAt(x++,E.matrix)}p.receiveShadow=!0,e.add(p),g(0,7,40.8,12,14,.7,o);for(let w=-5.5;w<=5.5;w++)g(w,7,40.35,.11,13.8,.16,a);for(const w of[2,6,10,13]){g(0,w,40.2,12,.35,.25,a);for(let M=-5;M<=5;M+=2)v(M,w,40.02,.12,.12,.08,c)}g(0,7,40.1,.22,14,.25,a);for(const w of[-1.1,1.1])d(new en(.55,.12,6,16),c,w,6.8,39.95);for(const w of[-1,1]){g(w*6.7,7.5,40.5,1.3,15,1.6,s),g(w*6.7,1,40.5,2,2,2,r),g(w*10,13,40.5,3,7,.25,u),d(new Fn(.8),c,w*10,13,40.1);for(const M of[17,29,40])g(w*M,8.5,40.5,1.6,17,1.8,s),g(w*M,1,40,2.6,2,2.6,r)}d(new en(6.7,.65,8,24,Math.PI),s,0,13,40.3),g(0,19.5,43,16,1,6,s),g(0,18,40,3,3,.6,u),d(new Fn(1),c,0,18,39.5);const _=new Ki(new Te(1,1,1),s,120);x=0;for(const w of[-1,1])for(let M=0;M<6;M++)for(let T=0;T<10;T++)E.position.set(w*(8+T*3.7),1.8+M*2.6,40.94),E.scale.set(3.5,.09,.12),E.updateMatrix(),_.setMatrixAt(x++,E.matrix);e.add(_);for(const w of[-1,1]){const M=new jt;M.position.set(w*12,$t(w*12,31,t),31),M.rotation.y=w*.13,e.add(M),v(0,3.2,0,1.2,1.2,2.3,h,M),v(0,4.3,-1.7,.8,1.5,.8,h,M),v(0,5.25,-2.3,.65,.75,1,h,M),v(0,4.95,-3,.55,.45,.65,h,M);for(const A of[-1,1])for(const S of[-1.3,1.3])m([A*.8,3,S],[A*.85,.45,S+.12],.2,h,M),g(A*.85,.25,S+.05,.5,.5,.7,f,M);for(const A of[-1,1])d(new Ce(.18,.8,6),h,A*.4,6,-2.1,M),v(A*.58,5.4,-2.65,.09,.12,.1,f,M);m([0,3.6,2],[0,1.4,2.8],.24,f,M),g(0,4,-.2,2.2,.3,2.2,u,M),v(0,4.1,-.2,.9,.25,1.2,o,M),m([0,5.5,-1.65],[0,3.8,.1],.06,o,M),d(new ae(.65,.55,1.7,12),l,0,5.1,.1,M),v(0,6.45,.1,.5,.6,.5,l,M),g(0,6.5,-.4,.65,.12,.09,f,M);for(const A of[-1,1])v(A*.65,5.7,.1,.35,.35,.35,l,M),m([A*.6,5.5,.1],[A*.8,4.7,-.6],.2,l,M),m([A*.7,4.5,.2],[A*1.2,3.1,.1],.23,l,M),g(A*1.2,3,0,.4,.4,.8,a,M);const T=d(new ae(.8,.8,.18,6),u,-1,5,-.5,M);T.rotation.x=Math.PI/2,d(new Fn(.3),c,-1,5,-.65,M),m([1.2,.5,-.4],[1.2,9,-.4],.075,o,M),d(new Ce(.17,.8,6),l,1.2,9.4,-.4,M),g(1.7,8,-.4,1,.65,.05,u,M),g(0,5,.8,1.35,2.5,.15,u,M)}}function dx(n,t){const e=new jt;n.add(e);const i=new Ut({color:"#c8c4ae",roughness:.8}),r=new Ut({color:"#bd9450",metalness:.5,roughness:.4}),s=new Ut({color:"#365d35",roughness:1}),o=new Ut({color:"#bd537b"}),a=new Ut({color:"#6f513b"});function c(m,p,E,x,_,w=e){const M=new Jt(m,p);return M.position.set(E,x,_),M.castShadow=M.receiveShadow=!0,w.add(M),M}function l(m,p,E,x,_,w,M=i,T=e){return c(new Te(x,_,w),M,m,p,E,T)}function u(m,p,E,x=1){const _=new jt;_.position.set(m,p,E),_.scale.setScalar(x),e.add(_),l(0,.25,0,2,.5,2,i,_),l(0,.8,0,1.5,.6,1.5,i,_);for(const T of[-1,1])l(T*.3,1.55,0,.4,1,.55,i,_);c(new ae(.65,.8,1.55,12),i,0,2.7,0,_),c(new _e(.52,16,12),i,0,3.95,0,_),c(new Ce(.4,.65,8),i,0,3.55,-.35,_).rotation.x=Math.PI,c(new ae(.53,.53,.22,12),r,0,4.35,0,_);for(let T=0;T<6;T++){const A=T*Math.PI/3;c(new Ce(.12,.45,4),r,Math.cos(A)*.46,4.66,Math.sin(A)*.46,_)}const w=l(0,2.6,.48,1.5,2,.15,i,_);w.rotation.x=-.14;const M=l(-.85,2.9,0,.4,1.1,.4,i,_);M.rotation.z=-.5,l(.8,3.1,-.2,.8,.35,.4,i,_),c(new _e(.33,12,8),r,1.1,3.48,-.2,_),c(new ae(.055,.055,3.1,8),r,-1.1,2.3,-.1,_),c(new Fn(.2),r,-1.1,3.95,-.1,_)}const h=t.obstacles.filter(m=>m.kind==="fountain");for(const m of h)u(m.x,$t(m.x,m.z,t)+2.2,m.z,.85);for(const m of[-25,25]){const E=$t(m,213,t);l(m,E+1,213,10,2,10),u(m,E+2,213,2.2)}for(let m=0;m<11;m++){const p=-70+m*14,E=222,x=$t(p,E,t);l(p,x+1,E,10,2,9,s),c(new _e(3,12,8),s,p,x+4,E),l(p,x+.3,E-13,8,.6,6,i);for(let _=0;_<6;_++)c(new Xr(.7,0),_%2?o:r,p-2.5+_%3*2.5,x+1,E-14+Math.floor(_/3)*2)}for(const m of[-55,55]){const p=$t(m,210,t);for(const E of[-4,4])l(m+E,p+4,210,.8,8,.8);c(new en(4,.5,8,20,Math.PI),i,m,p+8,210);for(let E=0;E<8;E++){const x=E*Math.PI/7;c(new _e(.8,8,6),s,m+Math.cos(x)*4,p+8+Math.sin(x)*4,210)}l(m,p+1.2,204,6,.35,2,a);for(const E of[-2,2])l(m+E,p+.6,204,.3,1.2,1.5,a)}const f=new Float32Array(h.length*100*3),d=new pe;d.setAttribute("position",new ke(f,3));const g=new Is(d,new Wr({color:"#bce8ed",size:.18,transparent:!0,opacity:.8,depthWrite:!1}));g.frustumCulled=!1,e.add(g);const v=[];for(let m=0;m<16;m++){const p=new jt;e.add(p);const E=[];for(const x of[-1,1]){const _=c(new Ns(.35,3),m%2?o:r,x*.2,0,0,p);_.rotation.x=-Math.PI/2,E.push(_),_.material.side=Se}v.push({group:p,wings:E,i:m})}return{update(m){h.forEach((p,E)=>{for(let x=0;x<100;x++){const _=(x/100+m*.4)%1,w=x%5*Math.PI*2/5,M=(E*100+x)*3;f[M]=p.x+Math.cos(w)*(1+_*1.8),f[M+1]=p.y+p.h/2+.1+Math.sin(_*Math.PI)*3.8,f[M+2]=p.z+Math.sin(w)*(1+_*1.8)}}),d.attributes.position.needsUpdate=!0,v.forEach(({group:p,wings:E,i:x})=>{const _=h[x%h.length],w=_.x+Math.sin(m*.35+x)*6,M=_.z+Math.cos(m*.25+x)*6;p.position.set(w,$t(w,M,t)+3+Math.sin(m+x),M),p.rotation.y=m*.3+x,E.forEach((T,A)=>T.rotation.y=(A?1:-1)*Math.sin(m*12+x)*.9)})}}}function fx(n){const t=new jt;t.name="royal-bedroom",t.position.set(0,Tn.floor,Tn.offsetZ),t.scale.set(Tn.scale.x,Tn.scale.y,Tn.scale.z),n.add(t);const e=d=>new Ut({color:d,roughness:.8}),i=e("#b8aa8b"),r=e("#e1d1ad"),s=e("#553927"),o=new Ut({color:"#cfa752",metalness:.45,roughness:.35}),a=e("#7d2636"),c=e("#eee0c6"),l=e("#344e55");function u(d,g,v,m,p,E,x){const _=new Jt(new Te(m,p,E),x);return _.position.set(d,g,v),_.castShadow=_.receiveShadow=!0,t.add(_),_}function h(d,g,v,m,p){const E=new Jt(new _e(m,12,8),p);return E.position.set(d,g,v),t.add(E),E}u(0,-.35,-7,31,.7,39,r);for(let d=0;d<15;d++)u(-14+d*2,.035,-7,1.94,.07,37,s);u(-15,6,-7,1,12,38,i),u(15,6,-7,1,12,38,i),u(0,6,-26,30,12,1,i);for(const d of[-1,1]){u(d*14.4,5.5,-8,.12,9,31,r);for(const g of[-22,-12,-2,11])u(d*14.1,6,g,.7,12,.7,r),u(d*14.1,1,g,1.2,2,1.2,r),u(d*14.1,11.5,g,1.2,1,1.2,o);u(d*14,1,-8,.2,1.5,33,s),u(d*14,10.7,-8,.2,.25,33,o),u(d*12.5,6,10,2.3,10,.5,a);for(let g=0;g<5;g++)u(d*12.5-1+g*.5,6,10.35,.22,10,.25,a);u(d*12.5,4,10.6,2.5,.35,.2,o)}u(0,12,10,30,1,2,r),u(0,12.6,10,31,.35,2.5,o),u(0,12,-19,30,.6,14,s);for(let d=-12;d<=12;d+=6)u(d,11.4,-19,.35,.7,14,o);u(-9,1.2,-12,7,1.5,11,s),u(-9,2.15,-12,6.7,.8,10.5,c),u(-9,2.65,-10.5,6.7,.25,7,a),u(-9,4,-17,7.5,5,.7,s),u(-9,4.5,-16.6,6,3,.15,a);for(const d of[-12.6,-5.4])for(const g of[-17,-7])u(d,4.5,g,.3,9,.3,s),h(d,9.2,g,.35,o);u(-9,9,-12,7.8,.35,11.5,a);for(const d of[-10.7,-7.3])u(d,2.9,-15,2.5,.6,1.7,c);u(0,.085,-3,9,.1,21,a);for(const d of[-4.25,4.25])u(d,.145,-3,.18,.025,20.5,o);for(const d of[-13,7])u(0,.145,d,8.5,.025,.18,o);for(const d of[-10,-6,-2,2,5]){const g=u(0,.15,d,.8,.03,.8,o);g.rotation.y=Math.PI/4}u(10,2.5,-12,5,.4,8,s);for(const d of[8,12])for(const g of[-15,-9])u(d,1.2,g,.3,2.4,.3,s);for(let d=0;d<4;d++)u(10,2.9+d*.22,-14,2,.2,1.6,d%2?l:a);u(10,2.75,-11,2.5,.05,2,c),u(8,1.1,-20,5,2.2,3,s);for(const d of[6.3,9.7])u(d,1.2,-18.45,.25,2.2,.08,o);for(const d of[-5,3]){u(12,2,d,.22,4,.22,o),h(12,4.2,d,.3,o),u(12,4.6,d,.28,.7,.28,c);const g=new Jt(new _e(.18,8,6),new vi({color:"#ffc76b"}));g.position.set(12,5.1,d),g.scale.y=1.7,t.add(g)}u(4,7,-25.4,5,5,.3,o),u(4,7,-25.15,4.5,4.5,.1,l);const f=u(4,7,-25,1.7,2,.15,o);return f.rotation.z=.15,t}function Mu(n,t,e,i,{royalRoom:r=!1}={}){const s=new jt;s.position.set(0,e,t),n.add(s);const o=document.createElement("canvas");o.width=o.height=512;const a=o.getContext("2d");a.fillStyle="#827d6c",a.fillRect(0,0,512,512);for(let A=0;A<16;A++)for(let S=-1;S<9;S++){const y=153+(A*17+S*31+160)%32;a.fillStyle=`rgb(${y+18},${y+12},${y-9})`;const R=S*64+A%2*32,P=A*32;a.fillRect(R+1,P+1,62,30),a.fillStyle="rgba(255,245,213,.15)",a.fillRect(R+2,P+2,60,2)}const c=new Us(o);c.colorSpace=je,c.wrapS=c.wrapT=gs,c.repeat.set(3,2);const l=new Ut({map:c,bumpMap:c,bumpScale:.14,roughness:.95}),u=new Ut({color:"#d1c2a1",roughness:.86}),h=new Ut({color:"#31565d",metalness:.18,roughness:.64}),f=new Ut({color:"#624733",roughness:.9}),d=new Ut({color:"#333b38",metalness:.65,roughness:.5}),g=new Ut({color:"#d6a950",metalness:.55,roughness:.4}),v=new Ut({color:"#263b3c"}),m=new Ut({color:"#923d36",side:Se}),p=new Map;function E(A,S,y,R,P,N=s){const O=new Jt(A,S);return O.position.set(y,R,P),O.castShadow=O.receiveShadow=!0,N.add(O),O}function x(A,S,y,R,P,N,O=u){p.has(O)||p.set(O,[]),p.get(O).push([A,S,y,R,P,N])}function _(A,S,y,R,P,N){return E(new ae(R,R,P,16),N,A,S,y)}function w(A,S,y,R=1,P=1){const N=new Hr;N.moveTo(-P,0),N.lineTo(P,0),N.lineTo(P,3*P),N.absarc(0,3*P,P,0,Math.PI,!1),N.lineTo(-P,0);const O=E(new Ts(N),v,A,S,y);O.rotation.y=R<0?Math.PI:0,x(A-P*1.25,S+1.5*P,y,.35*P,3*P,.5,u),x(A+P*1.25,S+1.5*P,y,.35*P,3*P,.5,u),x(A,S,y,3*P,.4*P,.7,u),E(new en(P*1.2,.18*P,6,12,Math.PI),u,A,S+3*P,y),x(A,S+1.8*P,y+R*.08,.12*P,3.5*P,.15,g),x(A,S+2*P,y+R*.1,2*P,.12*P,.15,g)}function M(A,S,y,R){_(A,y/2,S,R,y,l);for(const P of[2,y*.38,y*.7,y-2])_(A,P,S,R+.3,.7,u);_(A,y,S,R+.9,2,u);for(let P=0;P<12;P++){const N=P*Math.PI/6;x(A+Math.sin(N)*R,y+2,S+Math.cos(N)*R,1.9,3,1.9)}E(new Ce(R+1.1,13,16),h,A,y+8,S);for(let P=0;P<5;P++){const N=P/5,O=(R+1.1)*(1-N),B=E(new en(O,.12,5,32),d,A,y+1.5+N*13,S);B.rotation.x=Math.PI/2}E(new _e(.65,10,8),g,A,y+15,S);for(const P of[-1,1])for(const N of[12,25,37])N<y-5&&w(A,N,S+P*(R+.05),P,.75);i(A,e+y+16,t+S,.7)}if(x(0,17,0,76,34,25,l),x(0,1,0,78,2,27),x(0,33,0,79,2,28),x(0,r?34:35,0,78,2,27),r){x(0,17,-9,27,34,24,l),x(0,34,-9,28,2,25),x(0,44.5,-9,27,.6,25,u);const A=E(new Ce(20,10,4),h,0,49.8,-9);A.rotation.y=Math.PI/4,A.name="royal-bedroom-roof"}else x(0,43,-9,27,28,24,l),x(0,56,-9,29,1.5,26),E(new Ce(22,19,4),h,0,65,-9).rotation.y=Math.PI/4;for(let A=-32;A<=32;A+=4)x(A,37,12.7,2,3.2,2.3),(!r||Math.abs(A)>=14)&&x(A,37,-12.7,2,3.2,2.3);for(const A of[-1,1]){for(const P of[-27,-18,18,27])x(P,14,A*13,2,27,2,l),x(P,28,A*13,3,1,3);for(const P of[-25,-15,-5,5,15,25])w(P,23,A*12.7,A,1.1);if(!r)for(const P of[-7,0,7])w(P,44,-9+A*12.2,A,1);const S=A*12.8;x(0,7,S,10,14,.5,f),E(new en(5.5,.75,8,20,Math.PI),u,0,14,S);const y=new Hr;y.absarc(0,0,5,0,Math.PI,!1),y.lineTo(-5,0);const R=E(new Ts(y),f,0,14,S);R.rotation.y=A<0?Math.PI:0;for(const P of[-5.7,5.7])x(P,7,S,1.3,14,1.2);for(let P=-4.5;P<5;P+=1)x(P,7,S+A*.35,.11,14,.12,d),x(P,15.8,S+A*.5,.16,3.3,.2,d);for(const P of[3,8,12])x(0,P,S+A*.45,10,.35,.2,d);for(const P of[-1,1]){const N=E(new en(.42,.09,6,12),g,P,7,S+A*.65);N.rotation.y=A<0?Math.PI:0}for(const P of[-11,11])x(P,18,S+A*.7,2.4,7,.2,m),E(new Fn(.65),g,P,18,S+A*.9),x(P,21.7,S+A*.7,3,.18,.4,g)}M(-36,0,44,9),M(36,0,44,9),M(-18,-24,54,7),M(18,-24,54,7);const T=new ye;for(const[A,S]of p){const y=new Ki(new Te(1,1,1),A,S.length);S.forEach(([R,P,N,O,B,V],$)=>{T.position.set(R,P,N),T.scale.set(O,B,V),T.updateMatrix(),y.setMatrixAt($,T.matrix)}),y.castShadow=y.receiveShadow=!0,s.add(y)}return s}function px(n){const t=new jt;n.add(t),t.position.set(0,12,110),t.scale.setScalar(2.1),t.rotation.y=.08;const e=new Ut({color:"#375b48",roughness:.63}),i=new Ut({color:"#b7a477",roughness:.85}),r=new Ut({color:"#e5dbb6"}),s=new Ut({color:"#7e453e",roughness:.85,side:Se}),o=new Ut({color:"#17241f"}),a=new Ut({color:"#ffb52e",emissive:"#fa650b",emissiveIntensity:1.2});function c(M,T,A,S,y,R,P=e,N=t){const O=new Jt(new _e(1,20,14),P);return O.position.set(M,T,A),O.scale.set(S,y,R),O.castShadow=O.receiveShadow=!0,N.add(O),O}function l(M,T,A,S=e,y=t){const R=new I(...T).sub(new I(...M)),P=new Jt(new ae(A*.65,A,R.length(),10),S);return P.position.set(...M).addScaledVector(R,.5),P.quaternion.setFromUnitVectors(new I(0,1,0),R.normalize()),y.add(P),P.castShadow=!0,P}c(0,4,0,3.2,4.3,5),c(0,4,-3.6,2.3,3,.8,i);for(let M=0;M<5;M++)c(0,6.2+M*.5,-3.5-M*.65,1.6-M*.08,2,1.6),l([0,7+M*.5,-1-M],[0,9+M*.4,-1-M],.5,r);const u=new jt;u.position.set(0,8.8,-7),t.add(u),c(0,0,0,1.9,1.6,2,e,u),c(0,-.2,-1.7,1.45,.75,1.9,e,u);const h=new jt;h.position.set(0,-.75,-.6),u.add(h),c(0,-.1,-1.25,1.3,.4,1.8,i,h),c(0,.22,-1.3,1.15,.07,1.5,o,h);for(const M of[-1,1]){c(M*1.48,.25,-.8,.24,.35,.45,a,u),c(M*1.66,.28,-.85,.06,.29,.12,o,u),c(M*.75,.25,-3.15,.2,.12,.16,o,u),l([M*1.2,1,-.1],[M*2.2,3.5,1],.55,r,u);for(let T=0;T<4;T++)l([M*1.13,-.65,-.9-T*.6],[M*1.06,-1.1,-.9-T*.6],.12,r,u);c(M*2.8,1.8,1,1.6,2,2.5),c(M*3,0,-1,1.4,.7,2.1);for(let T=0;T<3;T++)l([M*3+(T-1)*.55,.1,-2],[M*3+(T-1)*.6,-.1,-3.4],.22,r)}let f=[0,3,4];for(let M=0;M<9;M++){const T=[Math.sin(M*.32)*M*.6,3-M*.24,5+M*1.4];l(f,T,Math.max(.15,1.5-M*.16)),l(T,[T[0],T[1]+1.2-M*.09,T[2]],.3,r),f=T}const d=[];for(const M of[-1,1]){const T=new jt;t.add(T),T.position.set(M*2,6,0);const A=[[0,0,0],[M*4,5,-2],[M*10,6,-1],[M*8,1,2],[M*6,-1,4],[M*3,-2,4]],S=[];for(let R=1;R<A.length-1;R++)S.push(...A[0],...A[R],...A[R+1]);const y=new pe;y.setAttribute("position",new qt(S,3)),y.computeVertexNormals(),T.add(new Jt(y,s));for(let R=1;R<A.length;R++)l(A[0],A[R],R===1?.35:.13,e,T);d.push(T)}const g=document.createElement("canvas");g.width=g.height=64;const v=g.getContext("2d"),m=v.createRadialGradient(32,32,0,32,32,32);m.addColorStop(0,"white"),m.addColorStop(.25,"#ffe597"),m.addColorStop(.55,"#ff7920"),m.addColorStop(1,"rgba(255,35,0,0)"),v.fillStyle=m,v.fillRect(0,0,64,64);const p=new pe,E=new Float32Array(540),x=new Float32Array(540);p.setAttribute("position",new ke(E,3)),p.setAttribute("color",new ke(x,3));const _=new Is(p,new Wr({map:new Us(g),size:2.8,transparent:!0,depthWrite:!1,vertexColors:!0,blending:Nr}));_.frustumCulled=!1,u.add(_);const w=new ch("#ff7920",0,55,2);return w.position.set(0,0,-5),u.add(w),{update(M){const T=(M+2)%8,A=Math.max(0,Math.min(1,(T-1.5)*2,(6.3-T)*2));u.rotation.x=.04*Math.sin(M*.6),h.rotation.x=A*.35,d.forEach((S,y)=>S.rotation.z=(y?1:-1)*(.1+Math.sin(M*.9)*.12)),t.position.y=12+Math.sin(M*1.2)*.16,_.visible=A>0,w.intensity=A*60;for(let S=0;S<180;S++){const y=(S/180+M*.85)%1,R=.15+y*3.2;E[S*3]=Math.sin(S*7.1+M*2)*R,E[S*3+1]=Math.cos(S*4.3+M*3)*R*.65-y*2,E[S*3+2]=-3.3-y*25*A,x[S*3]=A*(1-y),x[S*3+1]=A*(1-y)*(.45+.5*(1-y)),x[S*3+2]=A*.15*(1-y)}p.attributes.position.needsUpdate=!0,p.attributes.color.needsUpdate=!0}}}function mx(n,t){let e=431+t.id*101;const i=()=>(e=e*1664525+1013904223>>>0,e/4294967296),r={balcony:["#486b50","#aa8060"],lake:["#3b665a","#8b7560"],abyss:["#3c5050","#64706b"],forest:["#315a46","#847555"],bridge:["#527052","#a78060"],gate:["#626d50","#a58d70"],stairs:["#42615b","#85948c"],garden:["#54754e","#b89078"],finale:["#46684d","#b27e5a"]},[s,o]=r[t.kind]||r.garden,a=new Jt(new _e(2800,40,24),new kn({side:nn,depthWrite:!1,uniforms:{zenith:{value:new ie(t.kind==="abyss"?"#48778e":"#488ab5")},horizon:{value:new ie("#cfdfd1")}},vertexShader:"varying vec3 direction;void main(){direction=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 direction;uniform vec3 zenith,horizon;
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+1.),f.x),f.y);}
 void main(){vec3 d=normalize(direction);float h=max(d.y,0.);vec3 col=mix(horizon,zenith,pow(h,.55));vec2 uv=d.xz/(h+.22)*3.;float cloud=noise(uv)*.58+noise(uv*2.1)*.28+noise(uv*4.3)*.14;float mask=smoothstep(.57,.77,cloud)*smoothstep(.03,.19,h)*(1.-smoothstep(.65,.95,h));col=mix(col,vec3(.96,.94,.84),mask*.8);float sun=pow(max(dot(d,normalize(vec3(-.6,.42,.25))),0.),340.);col+=vec3(1.,.74,.35)*sun*.75;gl_FragColor=vec4(col,1.);#include <tonemapping_fragment>
#include <colorspace_fragment>}`.replace(";#include",`;
#include`)}));a.position.z=t.distance/2,a.renderOrder=-10,n.add(a);const c=t.distance/2;for(let x=0;x<3;x++){const _=1050+x*450,w=144,M=[],T=[],A=[],S=new ie(["#5d7965","#668888","#91a9ae"][x]);for(let R=0;R<=w;R++){const P=R/w*Math.PI*2,N=65+x*40+85*Math.pow(.5+.5*Math.sin(P*7+t.id),2)+i()*60;for(let O=0;O<3;O++){const B=_+(O===0?-280:O===1?0:180),V=O===0?-85:O===1?N:N*.25;M.push(Math.cos(P)*B,V,c+Math.sin(P)*B);const $=S.clone().multiplyScalar(O===1?1.12:O===0?.7:.9);T.push($.r,$.g,$.b)}if(R<w)for(let O=0;O<2;O++){const B=R*3+O;A.push(B,B+3,B+1,B+1,B+3,B+4)}}const y=new pe;y.setAttribute("position",new qt(M,3)),y.setAttribute("color",new qt(T,3)),y.setIndex(A),y.computeVertexNormals(),n.add(new Jt(y,new vi({vertexColors:!0,side:Se,fog:!1})))}const l=new Jt(new Ns(2600,96),new Ut({color:"#516e59",roughness:1}));l.rotation.x=-Math.PI/2,l.position.set(0,-82,c),n.add(l);const u=new Map,h=new ye;function f(x,_,w,M,T,A,S,y,R,P=0){u.has(x)||u.set(x,{geo:_,mat:new Ut({color:w,roughness:.95}),items:[]}),u.get(x).items.push([M,T,A,S,y,R,P])}const d=new Xr(1,1),g=new Ce(1,1,7),v=new Te(1,1,1),m=new ae(.65,1,1,6),p=new Ce(1,1,4);for(let x of[-1,1])for(let _=0;_<24;_++){const w=x*(235+i()*110),M=-170+_*(t.distance+400)/23,T=$t(x*180,M,t),A=25+i()*50;f("hills",d,s,w,T-15,M,55+i()*40,A,65+i()*40)}const E=t.kind==="forest"?360:190;for(let x=0;x<E;x++){const _=x%2?1:-1,w=_*(185+i()*320),M=-190+i()*(t.distance+480),T=$t(_*180,M,t);if(t.kind==="abyss"&&M>25&&M<205)continue;const A=7+i()*13;f("trunks",m,"#715c43",w,T+A*.3,M,1,A*.6,1),f("crowns",t.kind==="stairs"||t.kind==="forest"?g:d,s,w,T+A*.8,M,A*.35,A*.65,A*.35,i()*6)}if(t.kind==="forest")for(let x=0;x<320;x++){const _=-290+i()*580,w=t.distance+95+i()*380,M=$t(Math.max(-180,Math.min(180,_)),w,t),T=12+i()*22;f("trunks",m,"#715c43",_,M+T*.3,w,1.1,T*.6,1.1),f("backPines",g,"#305543",_,M+T*.7,w,T*.26,T*.75,T*.26,i()*6),x%3===0&&f("backCrowns",d,"#486c43",_,M+T*.65,w,T*.3,T*.35,T*.3)}for(let x of[-1,1])for(let _=0;_<7;_++){const w=x*(195+i()*40),M=15+_*(t.distance+25)/7,T=$t(x*180,M,t);t.kind==="abyss"?f("crags",g,o,w,-35,M,14+i()*12,100+i()*70,17,i()*6):t.kind==="stairs"?f("ruins",v,o,w,T+13,M,7,26+i()*20,9,i()*.2):t.kind==="forest"?f("stones",d,o,w,T+3,M,6,5,8):t.kind==="garden"||t.kind==="balcony"?(f("gardenWalls",v,"#c5b993",w,T+2,M,7,4,18),f("topiary",d,s,w,T+6,M,4,5,4)):(f("houses",v,"#c8b58e",w,T+5,M,12,10,14),f("roofs",p,"#695a52",w,T+13,M,11,7,12,Math.PI/4),t.kind==="finale"&&f("tents",g,_%2?"#b44e42":"#c5a85b",w+19,T+5,M,7,10,7))}for(const x of u.values()){const _=new Ki(x.geo,x.mat,x.items.length);x.items.forEach(([w,M,T,A,S,y,R],P)=>{h.position.set(w,M,T),h.scale.set(A,S,y),h.rotation.set(0,R,0),h.updateMatrix(),_.setMatrixAt(P,h.matrix)}),_.receiveShadow=!0,n.add(_)}}const qc=[{name:"Driver",range:240,angle:24,speed:53,spin:.2},{name:"Wood",range:190,angle:32,speed:43,spin:.3},{name:"Iron",range:140,angle:42,speed:35,spin:.5},{name:"Wedge",range:65,angle:64,speed:27,spin:.8},{name:"Putter",range:30,angle:0,speed:9,spin:0}],de=(n,t)=>$t(n,t),tr=(n,t)=>j_(n,t);function $r(n=Lt.tee.x,t=Lt.tee.z){return{x:n,y:de(n,t)+.22,z:t,vx:0,vy:0,vz:0,moving:!1,holed:!1,spin:0,penalty:null,collisions:0}}const yu={straight:{label:"Sem efeito",curve:0,loft:0},topspin:{label:"Topspin",curve:0,loft:-4},backspin:{label:"Backspin",curve:0,loft:6},draw:{label:"Draw ↶",curve:.18,loft:0},fade:{label:"Fade ↷",curve:-.18,loft:0},hook:{label:"Hook ↶↶",curve:.32,loft:0},slice:{label:"Slice ↷↷",curve:-.32,loft:0}},Su=n=>n?2:1;function Mh(n,t){const e=Math.max(-1,Math.min(1,n)),i=Math.abs(e),r=Math.max(0,(i-.2)/.8),s=r*(1.4-.4*r),o=i<=.2?i*.1:.02+s*1.25;return{clean:i<=.2,shank:i>=.65,severity:s,angle:-Math.sign(e)*o,speed:1-s*.5,loft:1-s*.6,curve:-Math.sign(e)*s*.22}}function yh(n,t,e,i,r,s={}){const o=t.name==="Putter"?"straight":Object.hasOwn(yu,s.effect)?s.effect:"straight",a=yu[o],c=Mh(i),l=(t.angle+a.loft)*c.loft*Math.PI/180,u=t.speed*e*(s.rip?Math.sqrt(1.5):1)*c.speed,h=r+c.angle;Object.assign(n,{vx:Math.sin(h)*Math.cos(l)*u,vz:Math.cos(h)*Math.cos(l)*u,vy:Math.sin(l)*u,moving:!0,holed:!1,spin:t.spin,backspinReady:o==="backspin"&&["Iron","Wedge"].includes(t.name),backspinPower:e*c.speed,backspinDirection:{x:Math.sin(h),z:Math.cos(h)},effect:o,shank:c.shank,curve:t.name==="Putter"?0:a.curve*(1-c.severity)+c.curve,rip:!!s.rip,penalty:null,age:0})}function Ui(n,t,e,i,r=.45){let s=n.vx*t+n.vy*e+n.vz*i;s<0&&(n.vx-=(1+r)*s*t,n.vy-=(1+r)*s*e,n.vz-=(1+r)*s*i,n.collisions++)}function gx(n,t){if(t.shape==="sphere"){let f=n.x-t.x,d=n.y-t.y,g=n.z-t.z,v=Math.hypot(f,d,g),m=t.r+.22;if(v>=m)return;v<1e-4&&(f=1,d=0,g=0,v=1);const p=f/v,E=d/v,x=g/v;n.x=t.x+p*(m+.001),n.y=t.y+E*(m+.001),n.z=t.z+x*(m+.001),Ui(n,p,E,x,t.kind==="canopy"?.18:.45);return}if(t.shape==="cylinder"){if(n.y<t.y-t.h/2-.22||n.y>t.y+t.h/2+.22)return;let f=n.x-t.x,d=n.z-t.z,g=Math.hypot(f,d),v=t.r+.22;if(g>=v)return;const m=t.y+t.h/2+.22,p=t.y-t.h/2-.22;if(m-n.y<v-g){n.y=m,Ui(n,0,1,0);return}if(n.y-p<v-g){n.y=p,Ui(n,0,-1,0);return}const E=g?f/g:1,x=g?d/g:0;n.x=t.x+E*(v+.001),n.z=t.z+x*(v+.001),Ui(n,E,0,x);return}const i=t.w/2+.22,r=t.h/2+.22,s=t.d/2+.22,o=n.x-t.x,a=n.y-t.y,c=n.z-t.z;if(Math.abs(o)>=i||Math.abs(a)>=r||Math.abs(c)>=s)return;const l=i-Math.abs(o),u=r-Math.abs(a),h=s-Math.abs(c);if(l<=u&&l<=h){const f=o>=0?1:-1;n.x=t.x+f*(i+.001),Ui(n,f,0,0)}else if(u<=h){const f=a>=0?1:-1;n.y=t.y+f*(r+.001),Ui(n,0,f,0)}else{const f=c>=0?1:-1;n.z=t.z+f*(s+.001),Ui(n,0,0,f)}}function _x(n,t,e,i){let r=0,s=1.4,o=de(n.x,n.z)+.22;const a=n.y>o+.035||n.vy>0;if(a){const f=(n.curve||0)*t,d=Math.cos(f),g=Math.sin(f),v=n.vx;n.vx=v*d+n.vz*g,n.vz=n.vz*d-v*g,n.vy-=9.81*t,n.vx+=e.x*.15*t,n.vz+=e.z*.15*t}else{const f={green:.65,fairway:1.4,rough:3.4,bunker:6}[tr(n.x,n.z)],d=Math.max(-1,Math.min(1,(de(n.x+.1,n.z)-de(n.x-.1,n.z))/.2)),g=Math.max(-1,Math.min(1,(de(n.x,n.z+.1)-de(n.x,n.z-.1))/.2));n.vx-=9.81*d*t,n.vz-=9.81*g*t,r=9.81*Math.hypot(d,g),s=f;const v=Math.hypot(n.vx,n.vz),m=Math.max(0,1-f*t/(v||1));n.vx*=m,n.vz*=m}const c={x:n.x,y:n.y,z:n.z};n.x+=n.vx*t,n.y+=n.vy*t,n.z+=n.vz*t;const l=qi(n.x,n.z),h=(Lt.waters.find(f=>Wc(n.x,n.z,f)<0)?.y??1)+.22;if(l&&(l==="Água"&&n.y<h||l==="Precipício"&&n.y<-12||l==="Fora do campo")){n.penalty=l,n.moving=!1;return}if(o=de(n.x,n.z)+.22,o-c.y>1&&de(c.x,c.z)+.22<c.y+.1&&(n.x=c.x,n.z=c.z,n.vx*=-.45,n.vz*=-.45,n.collisions++,o=de(n.x,n.z)+.22),n.y<o)if(n.y=o,n.backspinReady&&n.vy<-1.4){const f={green:1,fairway:.65,rough:.12,bunker:0}[tr(n.x,n.z)],d=(.6+1.9*n.backspinPower)*f;n.vx=-n.backspinDirection.x*d,n.vz=-n.backspinDirection.z*d,n.vy=.25,n.backspinReady=!1,n.backspinApplied=!0}else if(n.vy<-1.4){n.vy=-n.vy*.28;const f=n.effect==="topspin"?.5:n.effect==="backspin"?.12:.4-n.spin*.08;n.vx*=f,n.vz*=f}else n.vy=0;for(const f of i){const d=f.r||Math.max(f.w,f.d)/2;Math.abs(n.x-f.x)<d+2&&Math.abs(n.z-f.z)<d+2&&gx(n,f)}if(!l&&n.y<de(n.x,n.z)+.22&&(n.y=de(n.x,n.z)+.22),!l&&Math.hypot(n.x-ce.x,n.z-ce.z)<.65&&n.y<de(ce.x,ce.z)+.47&&Math.hypot(n.vx,n.vz)<5){n.cupEntry={x:n.x,y:n.y,z:n.z},Object.assign(n,{holed:!0,moving:!1,x:ce.x,z:ce.z,y:de(ce.x,ce.z)-.2});return}!a&&r<=s&&Math.hypot(n.vx,n.vz)<.16&&Math.abs(n.vy)<.1&&(n.vx=n.vy=n.vz=0,n.moving=!1)}function Sh(n,t,e=Lt.wind,i=Lt.obstacles){if(!n.moving)return;const r=Math.max(1,Math.ceil(t/Math.min(1/120,.12/Math.max(1,Math.hypot(n.vx,n.vy,n.vz)))));for(let s=0;s<r&&n.moving;s++)_x(n,t/r,e,i);n.age=(n.age||0)+t,n.age>45&&(n.moving=!1,n.vx=n.vy=n.vz=0)}function xx(n,t,e,i={}){if(tr(n.x,n.z)!=="green")return null;const r={...n};yh(r,qc[4],t,0,e,i);const s=[{x:r.x,y:r.y,z:r.z}];for(let o=0;o<3600&&r.moving;o++)Sh(r,1/120),o%8===0&&s.push({x:r.x,y:r.y,z:r.z});return s.push({x:r.x,y:r.y,z:r.z}),{points:s,holed:r.holed,penalty:r.penalty}}function vx(n,t){const e=Lt;let i=8721+e.id;const r=()=>(i=1664525*i+1013904223>>>0,i/4294967296),s=document.createElement("canvas");s.width=s.height=512;const o=s.getContext("2d");o.fillStyle="#a9a9a9",o.fillRect(0,0,512,512);for(let _=0;_<48e3;_++){const w=r()*512,M=r()*512,T=Math.floor(105+r()*115);o.strokeStyle=`rgb(${T},${T},${T})`,o.lineWidth=.5+r(),o.beginPath(),o.moveTo(w,M),o.lineTo(w+(r()-.5)*3,M-2-r()*7),o.stroke()}const a=new Us(s);a.wrapS=a.wrapT=gs,a.repeat.set(150,200),a.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy());const c=new Ut({roughness:.96,bumpMap:a,bumpScale:.035});c.onBeforeCompile=_=>{_.uniforms.turfDetail={value:a},_.uniforms.greenProfile={value:new fe(...xh(e))},_.uniforms.courseId={value:e.id},_.uniforms.cupPoint={value:new St(e.cup.x,e.cup.z)},_.uniforms.greenSize={value:e.greenRadius},_.uniforms.sandPatches={value:Array.from({length:4},(w,M)=>{const T=e.bunkers[M];return T?new fe(T.x,T.z,T.rx,T.rz):new fe(1e4,1e4,1,1)})},_.vertexShader=_.vertexShader.replace("#include <common>",`#include <common>
varying vec3 turfPosition;`),_.vertexShader=_.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
turfPosition=position;`),_.fragmentShader=_.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 turfPosition;
      uniform sampler2D turfDetail;
      uniform vec4 greenProfile;uniform float courseId;uniform vec2 cupPoint;uniform float greenSize;uniform vec4 sandPatches[4];
      float turfHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float turfNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(turfHash(i),turfHash(i+vec2(1,0)),f.x),mix(turfHash(i+vec2(0,1)),turfHash(i+vec2(1,1)),f.x),f.y);}
    `),_.fragmentShader=_.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
      vec2 ground=turfPosition.xz;
      float broad=turfNoise(ground*.085);
      float fine=turfNoise(ground*.65);
      float centre=10.*sin(ground.y/85.)*sin(3.14159265*ground.y/cupPoint.y);
      if(courseId>2.5&&courseId<3.5)centre=64.*pow(sin(3.14159265*clamp(ground.y/cupPoint.y,0.,1.)),2.);
      if(courseId>7.5)centre=20.*sin(ground.y/80.)*sin(3.14159265*ground.y/cupPoint.y);
      float fairDistance=abs(ground.x-centre)+(courseId>2.5&&courseId<3.5?6.:0.);
      float fair=1.-smoothstep(22.8,25.2,fairDistance);
      vec2 delta=ground-cupPoint;float co=cos(greenProfile.z),si=sin(greenProfile.z);
      vec2 uv=vec2(delta.x*co+delta.y*si,-delta.x*si+delta.y*co)/(greenSize*greenProfile.xy);
      float polar=atan(uv.y,uv.x);float edge=1.+greenProfile.w*cos(2.*polar+courseId*.55)+.16*sin(3.*polar+courseId*.7)+.1*cos(polar+courseId);
      float greenDistance=length(uv)/edge*greenSize;
      float approach=max(fairDistance-24.,ground.y-cupPoint.y);
      fair=1.-smoothstep(-1.2,1.2,min(approach,greenDistance-greenSize-5.));
      if(length(delta)<.66)discard;
      float green=1.-smoothstep(greenSize-.2,greenSize+.2,greenDistance);
      if(courseId>8.5){fair=1.-smoothstep(81.,83.,abs(ground.x));green=0.;green=max(green,1.-smoothstep(7.8,8.2,distance(ground,vec2(-12.,35.))));green=max(green,1.-smoothstep(11.8,12.2,distance(ground,vec2(22.,75.))));green=max(green,1.-smoothstep(15.8,16.2,distance(ground,vec2(-30.,125.))));green=max(green,1.-smoothstep(17.8,18.2,distance(ground,vec2(32.,180.))));green=max(green,1.-smoothstep(20.8,21.2,distance(ground,vec2(-20.,240.))));green=max(green,1.-smoothstep(23.8,24.2,distance(ground,vec2(10.,320.))));}
      float collar=1.-smoothstep(greenSize+1.5,greenSize+3.,greenDistance);
      float sandDistance=10000.;for(int i=0;i<4;i++){vec2 offset=(ground-sandPatches[i].xy)/sandPatches[i].zw;sandDistance=min(sandDistance,dot(offset,offset));}
      float sand=(1.-smoothstep(.97,1.03,sandDistance))*(1.-green);
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

    `),_.fragmentShader=_.fragmentShader.replace("#include <normal_fragment_maps>",`
      // Material-scale micro-relief only: the collision height field is unchanged.
      float turfRelief=(bladeDetail-.5)*.055;
      float greenRelief=(closeCut-.5)*.006;
      float sandRelief=(grain-.5)*.045+rake*.019;
      float relief=mix(mix(turfRelief,greenRelief,green),sandRelief,sand);
      normal=perturbNormalArb(-vViewPosition,normal,vec2(dFdx(relief),dFdy(relief)),faceDirection);
    `),_.fragmentShader=_.fragmentShader.replace("#include <roughnessmap_fragment>",`
      #include <roughnessmap_fragment>
      roughnessFactor=mix(mix(.94,.87,green),.99,sand);
      if(courseId>1.5&&courseId<2.5){float cliff=1.-smoothstep(-20.,7.,turfPosition.y);diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.16,.12,.10),cliff);}
    `)};const l=new Rn(360,e.distance+160,180,Math.ceil((e.distance+160)/2));l.rotateX(-Math.PI/2),l.translate(0,0,(e.distance+40)/2);const u=l.attributes.position;for(let _=0;_<u.count;_++){const w=u.getX(_),M=u.getZ(_);u.setY(_,e.kind==="bridge"&&w>-6&&w<6&&M>130&&M<186?-5:e.kind==="balcony"&&mh(w,M)?0:de(w,M))}l.computeVertexNormals();const h=new Jt(l,c);h.receiveShadow=!0,n.add(h);const f=new pe,d=[],g=[];for(let _=0;_<3;_++){const w=_*Math.PI/3,M=Math.cos(w)*.045,T=Math.sin(w)*.045;d.push(-M,0,-T,M,0,T,M*.9,.7-_*.1,T*.9+.08),g.push(.36,.52,.19,.36,.52,.19,.78,.91,.46)}f.setAttribute("position",new qt(d,3)),f.setAttribute("color",new qt(g,3)),f.computeVertexNormals();const v=new Ut({color:"#78a94c",vertexColors:!0,side:Se,roughness:1});v.onBeforeCompile=_=>{_.vertexShader=_.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vec3 tuftWorld=(modelMatrix*instanceMatrix*vec4(0.,0.,0.,1.)).xyz;
      float visibility=1.-smoothstep(55.,105.,distance(cameraPosition,tuftWorld));
      transformed.y*=visibility;
    `)};const m=new Ki(f,v,24e3);m.receiveShadow=!0;const p=new ye,E=new ie;let x=0;for(let _=0;_<34e3&&x<24e3;_++){const w=15+r()*(e.distance+70),M=Lo(w),T=r()>.5?1:-1,A=M+T*(24+r()*35);tr(A,w)!=="rough"||qi(A,w)||On(A,w,e)<e.greenRadius+3||A>62&&A<120&&w>157&&w<234||(p.position.set(A,de(A,w),w),p.rotation.y=r()*Math.PI*2,p.scale.setScalar(.4+r()*.45),p.updateMatrix(),m.setMatrixAt(x,p.matrix),E.setHSL(.22+r()*.035,.32+r()*.15,.62+r()*.15),m.setColorAt(x,E),x++)}return m.count=x,m.instanceMatrix.needsUpdate=!0,m.computeBoundingSphere(),n.add(m),h}function ko(n,t){const e=Lt,i=new jt;n.add(i);const r=[],s=[],o=[],a=[];let c=null,l=null,u=null,h=null;const f=new Map,d=D=>(f.has(D)||f.set(D,new Ut({color:D,roughness:.85})),f.get(D)),g=d("#c2b99d"),v=d("#e6d3a6"),m=d("#386765"),p=d("#73563b");d("#d9b35c");function E(D,q,ot,rt,bt,vt=i){const X=new Jt(D,q);return X.position.set(ot,rt,bt),X.castShadow=!0,X.receiveShadow=!0,vt.add(X),X}const x=(D,q,ot,rt,bt,vt,X=g)=>E(new Te(rt,bt,vt),X,D,q,ot),_=(D,q,ot,rt,bt,vt=g,X=12)=>E(new ae(rt,rt,bt,X),vt,D,q,ot);function w(D,q,ot,rt=1){_(D,q+4*rt,ot,.065*rt,8*rt,p,6);const bt=new Ut({color:"#b3443a",side:Se});let vt=E(new Rn(2.7*rt,1.7*rt,8,2),bt,D+1.35*rt,q+7*rt,ot);r.push(vt)}function M(D,q,ot=34,rt=7,bt=0){_(D,bt+ot/2,q,rt,ot),_(D,bt+ot-2,q,rt+1,3,v);for(let vt=0;vt<10;vt++){const X=vt*Math.PI/5;x(D+Math.sin(X)*rt,bt+ot+1,q+Math.cos(X)*rt,2,4,2,v)}E(new Ce(rt+1,13,10),m,D,bt+ot+9,q),w(D,bt+ot+16,q,.7);for(let vt=10;vt<ot-5;vt+=10)x(D,bt+vt,q+rt,.9,3,.2,d("#354c45"))}function T(D,q=0){Mu(i,D,q,w)}vx(i,t),mx(i,e),e.kind==="range"&&X_(i),e.kind==="garden"&&(u=dx(i,e));for(const D of e.obstacles)if(!(e.kind==="bridge"&&D.kind==="bridge"||D.kind==="farm-solid"||D.kind==="closed-gate"||D.kind==="mounted-guard"||D.kind==="room-solid"||D.kind==="castle-solid"||D.kind==="balcony-rail"||D.kind==="broken-bridge"))if(D.shape==="box"){const q=D.kind==="hedge"?d("#42763c"):g;if(x(D.x,D.y,D.z,D.w,D.h,D.d,q),D.kind==="wall")for(let ot=D.x-D.w/2+2;ot<D.x+D.w/2;ot+=4)x(ot,D.y+D.h/2+.9,D.z,2,1.8,D.d,v)}else D.kind==="trunk"?_(D.x,D.y,D.z,D.r,D.h,p,8):D.kind==="canopy"?E(new _e(D.r,10,7),d(Math.round(D.z)%2?"#558344":"#709149"),D.x,D.y,D.z):D.kind==="rock"?E(new _e(D.r,10,7),d("#879087"),D.x,D.y,D.z):D.kind==="fountain"?(_(D.x,D.y,D.z,D.r,D.h,v,24),_(D.x,D.y+D.h/2+.06,D.z,D.r*.8,.12,d("#639f9d"),24)):D.kind==="statue"&&e.kind!=="garden"&&(_(D.x,D.y,D.z,D.r,D.h,v),E(new _e(.65,8,6),v,D.x,D.y+D.h/2,D.z));for(const D of e.waters){const q=new Hr;for(let vt=0;vt<=160;vt++){const X=vt/160*Math.PI*2,at=vh(X),Rt=Math.cos(X)*D.w/2*at,Ht=Math.sin(X)*D.d/2*at;vt===0?q.moveTo(Rt,-Ht):q.lineTo(Rt,-Ht)}if(e.kind==="lake"){const vt=new mc;vt.absarc(e.cup.x-D.x,-(e.cup.z-D.z),36,0,Math.PI*2,!0),q.holes.push(vt)}const ot=new Ts(q,96);ot.rotateX(-Math.PI/2);const rt=new Ut({color:"#348c98",transparent:!0,opacity:.88,roughness:.26,metalness:.25,side:Se});rt.onBeforeCompile=vt=>{vt.uniforms.waterTime={value:0},rt.userData.shader=vt,vt.vertexShader=vt.vertexShader.replace("#include <common>",`#include <common>
varying vec2 waterPoint;`).replace("#include <begin_vertex>",`#include <begin_vertex>
waterPoint=position.xz;`),vt.fragmentShader=vt.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 waterPoint;uniform float waterTime;`).replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
normal=normalize(normal+vec3(sin(waterPoint.x*.45+waterPoint.y*.3+waterTime)*.045,cos(waterPoint.y*.55-waterTime*1.2)*.025,0.));`)};const bt=E(ot,rt,D.x,D.y,D.z);bt.castShadow=!1,s.push(bt)}if(e.kind==="balcony"?(Mu(i,Tn.castleZ,0,w,{royalRoom:!0}),fx(i)):e.kind==="finale"?T(e.distance+56):["forest","garden","lake","stairs","bridge"].includes(e.kind)||T(e.distance+160,-5),e.kind==="abyss"&&(l=q_(i),c=px(i),Y_(i),E(new zo(20,1),d("#495b50"),0,-17,110).scale.set(1,1.5,1)),e.kind==="stairs")for(const[D,q]of[[125,0],[265,12],[380,26]]){for(const ot of[-70,70])x(ot,q-14,D+40,12,30,115,d("#7a8275"));w(-32,q+1,D-12,.8)}if(e.kind==="bridge"&&(lx(i),h=ux(i,e)),e.kind==="gate"&&(hx(i,e),M(-46,43,26,6),M(46,43,26,6),w(-18,20,43,.7),w(18,20,43,.7)),["balcony","garden"].includes(e.kind)){const D=e.kind==="garden"?7:6;for(const q of[-1,1])for(let ot=0;ot<D;ot++){const rt=q*(e.kind==="garden"?36:32),bt=(e.kind==="balcony"?36:22)+ot*13,vt=$t(rt,bt,e);if(!qi(rt,bt,e)){x(rt,vt+.25,bt,7,.5,8,p);for(let X=0;X<12;X++){const at=rt-2.5+X%4*1.6,Rt=bt-2.5+Math.floor(X/4)*2;E(new Xr(.5,0),d(X%2?"#e6b759":"#c46c91"),at,vt+.9,Rt)}}}}if(e.kind==="finale"){for(const D of[-40,40])for(let q=0;q<3;q++){x(D,1+q,515+q*4,18,2,4,p);for(let ot=0;ot<10;ot++){let rt=new jt;rt.position.set(D-8+ot*1.7,2+q,515+q*4),i.add(rt),E(new ae(.25,.3,1,6),d(ot%2?"#ad5042":"#637ba1"),0,.5,0,rt),E(new _e(.23,8,6),d("#d9ac82"),0,1.2,0,rt),o.push(rt)}}for(const D of[-28,28])for(const q of[485,500,535])w(D,$t(D,q,e),q,.85);x(0,1,e.distance+28,14,1,18,p)}w(e.cup.x,$t(e.cup.x,e.cup.z,e),e.cup.z,1);const A=$t(e.cup.x,e.cup.z,e),S=new Ut({vertexColors:!0,roughness:1,side:Se}),y=new ae(.66,.61,1.15,48,12,!0),R=[];for(let D=0;D<y.attributes.position.count;D++){const q=(y.attributes.position.getY(D)+.575)/1.15,ot=Math.pow(q,2.5);R.push(.025+.18*ot,.018+.13*ot,.012+.075*ot)}y.setAttribute("color",new qt(R,3)),E(y,S,e.cup.x,A-.575,e.cup.z);const P=E(new Ns(.615,48),d("#080e0b"),e.cup.x,A-1.14,e.cup.z);P.rotation.x=-Math.PI/2;const N=E(new en(.665,.025,8,64),d("#446638"),e.cup.x,A-.012,e.cup.z);N.rotation.x=Math.PI/2;const O=[];for(let D=-e.greenRadius*2.3;D<e.greenRadius*2.3;D+=2)for(let q=-e.greenRadius*2.3;q<e.greenRadius*2.3;q+=.7)for(const ot of[!1,!0]){let rt=e.cup.x+(ot?q:D),bt=e.cup.z+(ot?D:q),vt=rt+(ot?.7:0),X=bt+(ot?0:.7);On(rt,bt,e)>e.greenRadius-1||On(vt,X,e)>e.greenRadius-1||Math.hypot(rt-e.cup.x,bt-e.cup.z)<1||O.push(rt,$t(rt,bt,e)+.025,bt,vt,$t(vt,X,e)+.025,X)}const B=new yf(new pe().setAttribute("position",new qt(O,3)),new Nc({color:"#d4e3b5",transparent:!0,opacity:.26}));i.add(B),B.visible=!1;const V=[];for(let D=-45;D<=45;D+=4)for(let q=-45;q<=45;q+=4){const ot=e.cup.x+D,rt=e.cup.z+q;if(On(ot,rt,e)>e.greenRadius-2||Math.hypot(D,q)<2)continue;const bt=($t(ot+.1,rt,e)-$t(ot-.1,rt,e))/.2,vt=($t(ot,rt+.1,e)-$t(ot,rt-.1,e))/.2,X=Math.hypot(bt,vt);X<.003||V.push({x:ot,z:rt,dx:-bt/X,dz:-vt/X,speed:Math.min(2,X*30)})}const $=new pe,G=new Float32Array(V.length*3);$.setAttribute("position",new ke(G,3));const pt=new Is($,new Wr({color:"#f1df99",size:.16,transparent:!0,opacity:.8}));return B.add(pt),{group:i,grid:B,update(D){h?.update(D),u?.update(D),l?.update(D),c?.update(D),V.forEach((q,ot)=>{const rt=D*q.speed%2-1,bt=q.x+q.dx*rt,vt=q.z+q.dz*rt;G[ot*3]=bt,G[ot*3+1]=$t(bt,vt,e)+.05,G[ot*3+2]=vt}),$.attributes.position.needsUpdate=!0,r.forEach((q,ot)=>{const rt=q.geometry.attributes.position;for(let bt=0;bt<rt.count;bt++)rt.setZ(bt,Math.sin(D*2+rt.getX(bt)*1.4+ot)*.22*(rt.getX(bt)/3+.5));rt.needsUpdate=!0}),s.forEach(q=>{q.material.userData.shader&&(q.material.userData.shader.uniforms.waterTime.value=D)}),a.forEach(q=>q.rotation.z=D*.3),o.forEach((q,ot)=>q.rotation.z=Math.sin(D*3+ot)*.08)},dispose(){n.remove(i);const D=new Set,q=new Set,ot=new Set;i.traverse(rt=>{rt.geometry&&D.add(rt.geometry);for(const bt of Array.isArray(rt.material)?rt.material:rt.material?[rt.material]:[]){q.add(bt);for(const vt of Object.values(bt))vt?.isTexture&&ot.add(vt)}}),D.forEach(rt=>rt.dispose()),q.forEach(rt=>rt.dispose()),ot.forEach(rt=>rt.dispose())}}}function Mx(n){const e=new Float32Array(420),i=new Float32Array(420),r=new Float32Array(140),s=new Float32Array(420),o=document.createElement("canvas");o.width=o.height=64;const a=o.getContext("2d"),c=a.createRadialGradient(32,32,0,32,32,32);c.addColorStop(0,"#fff"),c.addColorStop(.2,"#fff9d0"),c.addColorStop(.5,"#ffb020"),c.addColorStop(1,"rgba(255,60,0,0)"),a.fillStyle=c,a.fillRect(0,0,64,64);const l=new pe;l.setAttribute("position",new ke(e,3)),l.setAttribute("color",new ke(i,3));const u=new Wr({size:1.15,map:new Us(o),vertexColors:!0,transparent:!0,blending:Nr,depthWrite:!1}),h=new Is(l,u);h.frustumCulled=!1,n.add(h);const f=new Jt(new _e(.34,12,8),new vi({color:"#ff9a21",transparent:!0,opacity:.7,blending:Nr,depthWrite:!1}));n.add(f),f.visible=!1;let d=0,g=0,v=null;function m(){r.fill(0),i.fill(0),l.attributes.color.needsUpdate=!0,f.visible=!1,h.visible=!1,v=null,g=0}return m(),{clear:m,update(p,E,x){f.visible=!!x,f.position.set(p.x,p.y,p.z);for(let _=0;_<140;_++){r[_]=Math.max(0,r[_]-E);const w=_*3;r[_]>0&&(e[w]+=s[w]*E,e[w+1]+=s[w+1]*E,e[w+2]+=s[w+2]*E);const M=r[_]/.65;i[w]=M,i[w+1]=M*M*.75,i[w+2]=M*M*M*.25}if(x&&E>0){g+=E*180;const _=Math.floor(g);g-=_;for(let w=0;w<_;w++){const M=d++%140,T=M*3,A=(w+1)/Math.max(1,_),S=v||p;e[T]=S.x+(p.x-S.x)*A+(Math.random()-.5)*.22,e[T+1]=S.y+(p.y-S.y)*A,e[T+2]=S.z+(p.z-S.z)*A+(Math.random()-.5)*.22,s[T]=(Math.random()-.5)*.8,s[T+1]=.8+Math.random()*1.8,s[T+2]=(Math.random()-.5)*.8,r[M]=.4+Math.random()*.25,i[T]=1,i[T+1]=.8,i[T+2]=.3}v={x:p.x,y:p.y,z:p.z}}else x||(v=null);h.visible=x||r.some(_=>_>0),l.attributes.position.needsUpdate=!0,l.attributes.color.needsUpdate=!0}}}class yx{constructor(){this.reset()}reset(){this.used=!1,this.remaining=0,this.result=null}canUse(t,e,i){return!this.used&&!t.moving&&!t.holed&&e===4&&i==="accuracy"&&tr(t.x,t.z)==="green"}show(t,e,i,r,s,o={}){return this.canUse(t,e,i)?(this.result=xx(t,r,s,o),this.result&&(this.used=!0,this.remaining=4),this.result):null}update(t){this.remaining=Math.max(0,this.remaining-t)}get visible(){return this.remaining>0}}const j=n=>document.querySelector(n),Io=n=>tx(n,Yr),Yc=rx(),rn=new mf;rn.background=new ie("#b8d8d0");rn.fog=new Ic("#9dbbb5",420,1900);const Ye=new G_({canvas:j("#world"),antialias:!0});Ye.setPixelRatio(Math.min(devicePixelRatio,1.7));Ye.setSize(innerWidth,innerHeight);Ye.shadowMap.enabled=!0;Ye.shadowMap.type=Tu;Ye.outputColorSpace=je;Ye.toneMapping=Ru;Ye.toneMappingExposure=1.15;const Jn=new dn(48,innerWidth/innerHeight,.1,6e3);rn.add(new np("#fff4d8","#506d45",2.3));const Hn=new sp("#fff0cc",3);Hn.position.set(-100,180,40);Hn.castShadow=!0;Hn.shadow.mapSize.set(2048,2048);Object.assign(Hn.shadow.camera,{left:-180,right:180,top:240,bottom:-130,far:700});Hn.shadow.bias=-.001;rn.add(Hn,Hn.target);Hn.target.position.z=130;const Ln=new Jt(new _e(.22,16,12),new Ut({color:"#fffef1",roughness:.6}));Ln.castShadow=!0;rn.add(Ln);const di=cx(),hn=di.root;rn.add(hn);let Si=ko(rn,Ye);const er=ix(rn);let ne=null,cr=!1,As=null;const Zr=document.createElement("section");Zr.id="cart-panel";Zr.hidden=!0;Zr.innerHTML='<strong>ATÉ A BOLA</strong><p id=cart-distance></p><p>W / S · acelerar e ré &nbsp; A / D · virar<br>Espaço · frear · aproxime-se para desembarcar</p><div><button data-drive=left aria-label="Virar carrinho à esquerda">←</button><button data-drive=forward aria-label="Acelerar carrinho">↑</button><button data-drive=back aria-label="Dar ré">↓</button><button data-drive=right aria-label="Virar carrinho à direita">→</button></div><button id=cart-reset>RECOLOCAR CARRINHO</button>';document.body.append(Zr);const Wi=new Set;Zr.querySelectorAll("[data-drive]").forEach(n=>{n.onpointerdown=t=>{t.preventDefault(),n.setPointerCapture(t.pointerId),Wi.add(n.dataset.drive)};for(const t of["pointerup","pointercancel","lostpointercapture"])n.addEventListener(t,()=>Wi.delete(n.dataset.drive))});j("#cart-reset").onclick=()=>{As&&(ne={...As},vn())};function Sx(){return cr=!0,["abyss","lake"].includes(Lt.kind)||Lt.kind==="balcony"&&dt.y>30||dt.holed||Math.hypot(dt.x-nr.x,dt.z-nr.z)<8||(ne=ex(Lt,dt),!ne)?!1:(As={...ne},Dt="driving",_n=!1,ii(),ir("Primeira tacada concluída! Dirija até a bola."),vn(),!0)}function Ex(){er.hide(),ne=null,He=Math.atan2(ce.x-dt.x,ce.z-dt.z),bi(),vn()}const on=new yx,$c=Mx(rn);let Zc="straight",Yi=!1;const Eh=()=>({effect:Bh(Zc,mi),rip:Yi});j("#shot-effect").onchange=n=>{tn()&&(Zc=n.target.value)};j("#rip").onclick=()=>{tn()&&(Yi=!Yi,Wo())};let jn=null,dt=$r(),Ne=!1,Dt="idle",Ie=0,He=0,Qe=0,Qn=0,fi=0,Pr=0,pi=0,Ur=0,We=[],Ei=!1,Bi=0,ps=0,Vn=!1,_n=!1,wi={x:0,z:0},nr={x:0,y:35,z:0},Mc=0,ki=localStorage.getItem("royal-character")||"THE KING",Xi=localStorage.getItem("royal-audio")!=="off",Hi,Kn=0,Uo=!1,ms=!1;const Be=new Set;new URLSearchParams(location.search);const Jc=null,Ho="royal-tournament-v3",yc="royal-tournament-records-v3";function Kc(n,t){try{return JSON.parse(localStorage.getItem(n))??t}catch{return t}}let mi=localStorage.getItem("royal-handedness")==="left"?"left":"right";function wh(n){mi=n==="left"?"left":"right",localStorage.setItem("royal-handedness",mi),document.body.classList.toggle("left-handed",mi==="left"),j("#handedness").value=mi}j("#handedness").onchange=n=>{tn()?wh(n.target.value):n.target.value=mi};wh(mi);di.setCharacter(ki);j("#characters span").textContent=ki;function $i(n){return n===0?"E":n>0?`+${n}`:String(n)}function ir(n){j("#toast").textContent=n,j("#toast").style.opacity=1,clearTimeout(ir.timer),ir.timer=setTimeout(()=>j("#toast").style.opacity=0,3500)}function jc(){Xi&&(Hi??=new AudioContext,Hi.resume())}function Nn(n,t,e,i,r="sine",s=n){if(!Xi||!Hi)return;const o=Hi.createOscillator(),a=Hi.createGain(),c=Hi.currentTime+t;o.type=r,o.frequency.setValueAtTime(n,c),o.frequency.exponentialRampToValueAtTime(Math.max(20,s),c+e),a.gain.setValueAtTime(1e-4,c),a.gain.exponentialRampToValueAtTime(i,c+.006),a.gain.exponentialRampToValueAtTime(1e-4,c+e),o.connect(a).connect(Hi.destination),o.start(c),o.stop(c+e+.02)}function wx(){Nn(780,0,.14,.16,"triangle",260),Nn(340,.07,.23,.1,"sine",120),Nn(1120,.16,.075,.06,"triangle",650),Nn(850,.29,.06,.035,"triangle",460)}function bx(){[523.25,659.25,783.99,1046.5].forEach((n,t)=>Nn(n,t*.12,.45,.045,"triangle"))}function xn(n){Vn=!0,j("#dialogContent").innerHTML=n,j("#close").hidden=Dt==="done",j("#dialog").showModal()}function Xe(){j("#dialog").open&&j("#dialog").close()}j("#close").onclick=Xe;j("#dialog").addEventListener("close",()=>Vn=!1);j("#dialog").addEventListener("cancel",n=>{(Dt==="done"||Dt==="range-result")&&n.preventDefault()});function ii(){on.reset(),jn&&(rn.remove(jn),jn.geometry.dispose(),jn.material.dispose(),jn=null)}function vn(){if(Ei||Jc||!Ne)return;const n=dt.moving?{...$r(wi.x,wi.z)}:{...dt};localStorage.setItem(Ho,JSON.stringify({holeIndex:Bi,scores:We,ball:n,strokes:Qe,aim:He,club:Ie,cartUsed:cr,cartState:Dt==="driving"?ne:null,cartStart:As,mode:Dt==="done"?"done":Dt==="driving"?"driving":"idle"})),j("#resume-game").hidden=!1}function bi(){Dt="idle",_n=!1,j("#phase").textContent="PRONTO PARA A TACADA",j("#hit").innerHTML="INICIAR TACADA <span>SPACE</span>"}function Vo(n=!0){cr=!1,ne=null,er.hide(),Kn=0,Uo=!1,ms=!1,$c.clear(),dt=$r(),Qe=0,Ie=0,He=0,pi=0,Qn=0,ii(),wi={x:dt.x,z:dt.z},nr={x:dt.x,y:de(dt.x,dt.z),z:dt.z},bi(),Dt=n?"intro":"idle",ps=0,Ln.visible=!0,j("#fill").style.width="0%",vn(),Wo()}function Rs(n,t=!0){Bi=n,Si.dispose(),_h(Yr[n].id),Si=ko(rn,Ye),j("#hole-name").textContent=Lt.name,j("#hole-meta").textContent=`PAR ${Lt.par} / TEE ${Lt.distance} M`,j("#hole-number").textContent=`ROYAL CASTLE · HOLE ${String(n+1).padStart(2,"0")} / 09`,j("#intro-title").textContent=Lt.name,j("#intro-detail").textContent=`PAR ${Lt.par} · ${Lt.distance} M · DIFICULDADE ${Lt.difficulty}/10`,j("#intro-hint").textContent=Lt.hint,Vo(t)}function Go(){Ne=!0,j("#menu").hidden=!0,j("#scene-label").hidden=!0,j("#hud").hidden=!1,j("#app").classList.add("playing"),jc()}function Cs(){Lt.kind==="range"&&(Si.dispose(),_h(0),Si=ko(rn,Ye)),er.hide(),ne=null,Ne=!1,bi(),Xe(),ii(),j("#menu").hidden=!1,j("#scene-label").hidden=!1,j("#hud").hidden=!0,j("#intro-card").hidden=!0,j("#app").classList.remove("playing")}function Tx(){localStorage.getItem("royal-tutorial-v2")||Jc||(xn('<small>O CAMPEONATO REAL</small><h2>Nove aventuras.<br>Um só swing.</h2><p><b>Arraste ou A/D:</b> direção pelo centro da tela.<br><b>Q/E:</b> taco · <b>Shift:</b> ajuste fino.<br><b>Três cliques:</b> iniciar, fixar força, acertar precisão.</p><p>No green, com Putter: fixe a potência e pressione <b>P</b> antes do terceiro clique. Uma única prévia por tacada, durante 4 segundos. A barra de precisão pausa enquanto você observa.</p><p>Água, precipício ou recuperação: +1 tacada e retorno à posição anterior.</p><button class="primary" id="understood">ENTRAR NO CAMPEONATO ↗</button>'),j("#understood").onclick=()=>{localStorage.setItem("royal-tutorial-v2","1"),Xe()})}j("#play").onclick=()=>{We=[],Ei=!1,Go(),Rs(0),Tx()};j("#resume-game").hidden=!localStorage.getItem(Ho);j("#resume-game").onclick=()=>{const n=Kc(Ho,null);if(!n||!Yr[n.holeIndex]||!Array.isArray(n.scores)){ir("Nenhuma partida válida salva.");return}We=n.scores.slice(),Ei=!1,Go(),Rs(n.holeIndex,!1),n.ball&&Number.isFinite(n.ball.x)&&Number.isFinite(n.ball.z)&&(dt={...$r(n.ball.x,n.ball.z),...n.ball,moving:!1}),Qe=Number(n.strokes)||0,He=Number(n.aim)||0,Ie=Math.max(0,Math.min(4,n.club||0)),wi={x:dt.x,z:dt.z},cr=n.cartUsed??Qe>0,n.mode==="driving"&&!["lake","abyss"].includes(Lt.kind)&&n.cartState&&Number.isFinite(n.cartState.x)&&Number.isFinite(n.cartState.z)&&Do(n.cartState.x,n.cartState.z,Lt)&&(ne={...n.cartState,speed:0},As=n.cartStart||{...ne},Dt="driving"),n.mode==="done"?(Kn=4.2,Lh(!1)):vn()};j("#practice").onclick=()=>{xn('<h2>Conheça o reino.</h2><p>Treino não altera o recorde do campeonato.</p><div class="course-list">'+Yr.map((n,t)=>`<button class="choice" data-hole="${t}"><b>${String(t+1).padStart(2,"0")} · ${n.name}</b><span>Par ${n.par} · ${n.distance} m · ${n.difficulty}/10</span></button>`).join("")+"</div>"),document.querySelectorAll("[data-hole]").forEach(n=>n.onclick=()=>{Xe(),Ei=!0,We=[],Go(),Rs(+n.dataset.hole)})};let ei=4,No=0;const Os=document.createElement("div");Os.id="range-panel";Os.hidden=!0;Os.innerHTML='<label for="range-target">ALVO DE TREINO</label><select id="range-target">'+Mi.map((n,t)=>`<option value="${t}">${n.z} m · ${n.name}</option>`).join("")+'</select><button id="range-new">NOVA BOLA ↗</button><small>Centro: 100 pts · anéis: 75 / 50 / 25</small>';j("#hud").append(Os);j("#range-target").value=ei;j("#range-target").onchange=n=>{ei=Number(n.target.value);const t=Mi[ei];He=Math.atan2(t.x,t.z)};j("#range-new").onclick=()=>{!dt.moving&&Dt!=="swing"&&Qc()};function Qc(){dt=$r(),wi={x:0,z:0},nr={x:0,y:0,z:0},pi=0,Rr=0,ii(),$c.clear(),bi(),Ln.visible=!0,j("#fill").style.width="0%"}function Ax(){const n=W_(dt,Mi[ei]);No+=n.points,Dt="range-result",_n=!1,ii(),xn(`<small>ROYAL DRIVING RANGE · BOLA ${Qe}</small><h2>${n.points?`+${n.points} pontos`:"Continue treinando!"}</h2><p>Distância total: <b>${n.distance.toFixed(1)} m</b><br>Do centro do alvo: <b>${n.error.toFixed(1)} m</b>${dt.penalty?"<br>Bola fora do campo.":""}<br>Sessão: ${No} pontos</p><button class="primary" id="range-again">PRÓXIMA BOLA ↗</button><button class="choice" id="range-end">VOLTAR AO MENU</button>`),j("#close").hidden=!0,j("#range-again").onclick=()=>{Xe(),Qc()},j("#range-end").onclick=Cs}j("#range").onclick=()=>{Ei=!0,We=[],No=0,Go(),Si.dispose(),Z_(),Si=ko(rn,Ye),Vo(!1),cr=!0,ei=4,j("#range-target").value=ei,He=Math.atan2(Mi[ei].x,Mi[ei].z),j("#hole-name").textContent=Lt.name,j("#hole-number").textContent="ROYAL PRACTICE CLUB",j("#hole-meta").textContent="6 ALVOS · 35–320 M · BOLAS ILIMITADAS",ir("Escolha um alvo e treine. Cada bola volta ao tee.")};function Wo(){j("#handedness").disabled=!tn();const n=Ne&&Dt==="driving";if(Zr.hidden=!n,j("#hud").classList.toggle("driving",n),er.root.visible=er.marker.visible=n,n){const r=Math.hypot(dt.x-ne.x,dt.z-ne.z),s=Math.atan2(dt.x-ne.x,dt.z-ne.z)-ne.yaw;j("#cart-distance").innerHTML=`<span style="display:inline-block;transform:rotate(${-s*180/Math.PI}deg)">↑</span> ${r.toFixed(0)} m até a bola · ${Math.abs(ne.speed*3.6).toFixed(0)} km/h`}const t=Math.hypot(Lt.wind.x,Lt.wind.z),e=(-Math.atan2(Lt.wind.x,Lt.wind.z)+He)*180/Math.PI;if(j("#wind-value").innerHTML=`<span style="display:inline-block;transform:rotate(${e}deg);font-size:19px">↑</span> ${t.toFixed(1)}<em>m/s</em>`,j("#distance").innerHTML=`${Math.hypot(dt.x-ce.x,dt.z-ce.z).toFixed(1)}<em>m</em>`,j("#stroke").textContent=dt.moving||["swing","cup","celebration","done"].includes(Dt)?Qe:Qe+1,j("#club").textContent=qc[Ie].name,j("#lie").textContent=Lt.id===0&&dt.y>30?"QUARTO REAL":tr(dt.x,dt.z).toUpperCase(),j("#total-score").textContent=Ei?"TREINO":$i(Io(We).relative),j("#score-label").textContent=`SCORE · ${We.length}/9`,Os.hidden=!Ne||Lt.kind!=="range",Lt.kind==="range"){const r=Mi[ei];j("#distance").innerHTML=`${Math.hypot(r.x-dt.x,r.z-dt.z).toFixed(1)}<em>m</em>`,j("#score-label").textContent="PONTOS · RANGE",j("#total-score").textContent=No,j("#range-target").disabled=!tn(),j("#range-new").disabled=dt.moving||Dt==="swing"}j("#shot-effect").disabled=!tn()||Ie===4,j("#shot-effect").value=Ie===4?"straight":Zc,j("#shot-effect").title=Ie===4?"Efeitos aéreos disponíveis nos outros tacos":"",j("#rip").disabled=!tn(),j("#rip").setAttribute("aria-pressed",String(Yi)),Yc.update();for(const r of["left","right","camera-view","prev","next"])j("#"+r).disabled=!tn();const i=Ie===4&&tr(dt.x,dt.z)==="green"&&!dt.holed;Si.grid.visible=Ne&&i&&!["intro","cup","celebration","done","driving"].includes(Dt),j("#putt-help").hidden=!Ne||!i||dt.moving,j("#putt-preview").disabled=Vn||!on.canUse(dt,Ie,Dt),j("#putt-preview").textContent=on.visible?`PRÉVIA · ${Math.ceil(on.remaining)}s`:on.used?"PRÉVIA UTILIZADA":"P · VER PRÉVIA",j("#putt-note").textContent=on.visible?"Impacto perfeito · precisão pausada":on.used?"Nova prévia disponível na próxima tacada":Dt==="accuracy"?"Direção e potência atuais · uso único":"Pontos descem a inclinação · fixe a potência",j(".meter").classList.toggle("accuracy-mode",Dt==="accuracy"),j("#hit").disabled=on.visible||!["idle","power","accuracy"].includes(Dt),j("#intro-card").hidden=Dt!=="intro",j("#hud").classList.toggle("cinematic",["intro","cup","celebration","done","driving"].includes(Dt)),j("#hud").classList.toggle("in-flight",dt.moving)}function bh(){if(Vn||!Ne)return;const n=on.show(dt,Ie,Dt,Qn,He,Eh());if(!n)return;const t=n.points.map(e=>new I(e.x,Math.max(e.y,de(e.x,e.z)+.06)+.04,e.z));jn=new $u(new pe().setFromPoints(t),new Nc({color:"#ffe6a1",transparent:!0,opacity:.95,depthTest:!0})),rn.add(jn)}j("#putt-preview").onclick=bh;function Th(){Dt==="intro"&&(ps=4,bi(),vn())}j("#skip-intro").onclick=Th;function Fo(n){Dt!=="idle"||dt.moving||Vn||(Ie=(Ie+n+5)%5,Wo())}j("#prev").onclick=()=>Fo(-1);j("#next").onclick=()=>Fo(1);function Ah(){if(jc(),Dt==="intro"){Th();return}!Ne||Vn||on.visible||dt.moving||!["idle","power","accuracy"].includes(Dt)||dt.holed||(Dt==="idle"?(Dt="power",Pr=0,j("#phase").textContent="ESCOLHA A POTÊNCIA",j("#hit").innerHTML="FIXAR POTÊNCIA <span>SPACE</span>"):Dt==="power"?(Qn=Math.max(.03,Qn),Dt="accuracy",Pr=0,j("#phase").textContent="ACERTE A FAIXA CENTRAL",j("#hit").innerHTML="ACERTAR IMPACTO <span>SPACE</span>"):(Dt="swing",pi=0,_n=!0,nr={x:dt.x,y:de(dt.x,dt.z),z:dt.z},Mc=He,Qe++,wi={x:dt.x,z:dt.z},j("#phase").textContent=Mh(fi).shank?fi>0?"SHANK À DIREITA!":"SHANK À ESQUERDA!":Math.abs(fi)<.04?"IMPACTO PERFEITO":Math.abs(fi)<=.2?"CONTATO LIMPO":fi<0?"ERRO À ESQUERDA!":"ERRO À DIREITA!",j("#hit").innerHTML="BOLA EM JOGO <span>●</span>",ii(),vn()))}j("#hit").onclick=Ah;function tn(){return Ne&&!Vn&&Dt==="idle"&&!dt.moving&&!_n}j("#left").onclick=()=>{tn()&&(He+=.018)};j("#right").onclick=()=>{tn()&&(He-=.018)};let Lr=null;const Ps=j("#world");Ps.addEventListener("pointerdown",n=>{!tn()||n.button!==0||(Lr={id:n.pointerId,x:n.clientX},Ps.setPointerCapture(n.pointerId))});Ps.addEventListener("pointermove",n=>{!Lr||Lr.id!==n.pointerId||(tn()&&(He=ox(He,n.clientX-Lr.x,n.shiftKey)),Lr.x=n.clientX)});for(const n of["pointerup","pointercancel","lostpointercapture"])Ps.addEventListener(n,()=>Lr=null);function Rh(){cr=!0,er.hide(),ne=null,Qe++,dt=$r(wi.x,wi.z),ii(),bi(),ir("Recuperação: +1 tacada. Bola na posição anterior."),vn()}function Ch(){const n=Io(We);return'<div class="scorecard"><table><thead><tr><th>Buraco</th><th>Par</th><th>Tacadas</th><th>±</th></tr></thead><tbody>'+Yr.map((t,e)=>`<tr><td>${e+1} · ${t.name}</td><td>${t.par}</td><td>${We[e]??"—"}</td><td>${We[e]===void 0?"—":$i(We[e]-t.par)}</td></tr>`).join("")+`</tbody><tfoot><tr><td>TOTAL</td><td>${Xc}</td><td>${n.strokes}</td><td>${$i(n.relative)}</td></tr></tfoot></table></div>`}function Ph(){if(Ne&&Lt.kind==="range"){xn("<h2>Pausa no driving range</h2><button class=primary id=range-resume>CONTINUAR ↗</button><button class=choice id=range-reset>NOVA BOLA</button><button class=choice id=range-exit>VOLTAR AO MENU</button>"),j("#range-resume").onclick=Xe,j("#range-reset").onclick=()=>{Xe(),Qc()},j("#range-exit").onclick=Cs;return}!Ne||Dt==="done"||(xn("<h2>Uma pausa real.</h2><p>"+Lt.name+'</p><button class="primary" id="resume">CONTINUAR ↗</button><button class="choice" id="card">Ver scorecard</button><button class="choice" id="recover">Recuperar bola (+1 tacada)</button><button class="choice" id="restart">Reiniciar este buraco</button><button class="choice" id="home">Salvar e voltar ao menu</button>'),j("#resume").onclick=Xe,j("#card").onclick=()=>{j("#dialogContent").innerHTML="<h2>Scorecard</h2>"+Ch()},j("#recover").disabled=["intro","cup","celebration"].includes(Dt),j("#recover").onclick=()=>{Xe(),Rh()},j("#restart").onclick=()=>{Xe(),Vo()},j("#home").onclick=()=>{vn(),Cs()})}j("#pause").onclick=Ph;j("#camera-view").onclick=()=>{tn()&&(Ur=(Ur+1)%2)};j("#help").onclick=()=>xn('<small>COMANDOS</small><h2>Seu próximo swing.</h2><div class="help-rows"><p><span>Mirar / ajuste fino</span><b>Arraste · A D / Shift</b></p><p><span>Trocar taco</span><b>Q / E</b></p><p><span>Potência e impacto</span><b>3 cliques · Space</b></p><p><span>Prévia no green</span><b>P · após fixar potência</b></p><p><span>Câmera / pausa</span><b>C / Esc</b></p></div><p>Escolha o efeito antes de iniciar. <b>Rip it</b> dá +50% de alcance com barras 2× mais rápidas. Só os 20% centrais dão contato limpo. Fora deles, o desvio cresce rápido; as faixas vermelhas causam shank.</p>');j("#characters").onclick=()=>{xn("<h2>A corte está pronta.</h2><p>Sete personagens. As mesmas capacidades.</p>"+["THE KING","THE KNIGHT","THE SERVANT","RED DRAGON","THE WIZARD","THE GNOME","THE ELF"].map((n,t)=>`<button class="choice" data-char="${t}">${["♛","♜","♟","🐲","✦","🍄","❧"][t]} &nbsp; ${n} ${n===ki?"✓":""}</button>`).join("")),document.querySelectorAll("[data-char]").forEach(n=>n.onclick=()=>{ki=["THE KING","THE KNIGHT","THE SERVANT","RED DRAGON","THE WIZARD","THE GNOME","THE ELF"][+n.dataset.char],localStorage.setItem("royal-character",ki),di.setCharacter(ki),j("#characters span").textContent=ki,Xe()})};j("#records").onclick=()=>{const n=Kc(yc,[]);xn("<h2>Royal records.</h2><p>Campeonato · 9 buracos · Par 36 · 2.800 m</p>"+(n.length?n.slice(0,5).map(t=>`<p>♜ ${t.total} tacadas · ${$i(t.total-Xc)} · ${t.date}</p>`).join(""):"<p>Complete o campeonato para registrar sua marca.</p>"))};j("#settings").onclick=()=>{xn('<h2>Do seu jeito.</h2><button class="choice" id="quality">Alternar qualidade: '+(Ye.getPixelRatio()>1?"alta":"econômica")+"</button><p>Arraste ou A/D: direção pelo centro.<br>Shift: ajuste fino · Q/E: tacos.<br>P: prévia única do putt após fixar potência.<br>C: câmera · R: enquadramento · Esc: pausa.</p>"),j("#quality").onclick=()=>{Ye.setPixelRatio(Ye.getPixelRatio()>1?1:Math.min(devicePixelRatio,1.7)),Xe()}};Yc.sound(Xi);j("#sound").onclick=()=>{Xi=!Xi,localStorage.setItem("royal-audio",Xi?"on":"off"),Yc.sound(Xi),jc(),Nn(440,0,.12,.06)};function Rx(){["cup","celebration","done"].includes(Dt)||(ii(),Dt="cup",_n=!1,Kn=0,Uo=!1,ms=!1)}function Lh(n=!0){Dt="done";const t=Qe-Lt.par,e=Qe===1?"HOLE-IN-ONE":t<=-2?"EAGLE":t===-1?"BIRDIE":t===0?"PAR":t===1?"BOGEY":t===2?"DOUBLE BOGEY":$i(t);if(Ei||(We[Bi]=Qe,vn()),Ei){xn(`<small>TREINO · ${Lt.name}</small><h2>${e}!</h2><p>${Qe} tacadas · Par ${Lt.par}</p><button class="primary" id="again">JOGAR NOVAMENTE ↗</button><button class="choice" id="end">VOLTAR AO MENU</button>`),j("#again").onclick=()=>{Dt="idle",Xe(),Vo()},j("#end").onclick=Cs;return}if(Bi<8)xn(`<small>BURACO ${Bi+1}/9 · ${Lt.name}</small><h2>${e}!</h2><p>${Qe} tacadas · Par ${Lt.par}<br>Acumulado: ${$i(Io(We).relative)}</p><button class="primary" id="continue">PRÓXIMO BURACO ↗</button><p>${Yr[Bi+1].name}</p>`),j("#continue").onclick=()=>{Dt="idle",Xe(),Rs(Bi+1)};else{const i=Io(We).strokes,r=Kc(yc,[]);n&&!Jc&&(r.push({total:i,scores:[...We],date:new Date().toLocaleDateString("pt-BR")}),r.sort((s,o)=>s.total-o.total),localStorage.setItem(yc,JSON.stringify(r.slice(0,10))),localStorage.removeItem(Ho),j("#resume-game").hidden=!0),xn(`<small>ROYAL CASTLE · CAMPEONATO COMPLETO</small><h2>A glória é sua!</h2><p>${i} tacadas · ${$i(i-Xc)}<br>Melhor pessoal: ${r[0]?.total??i} tacadas</p>${Ch()}<button class="primary" id="again">NOVO CAMPEONATO ↗</button><button class="choice" id="end">VOLTAR AO MENU</button>`),j("#again").onclick=()=>{Dt="idle",Xe(),We=[],Rs(0)},j("#end").onclick=Cs}}addEventListener("keydown",n=>{n.target.matches("select,input,textarea")||n.target.closest("#effect-menu")||Dt!=="driving"&&n.code==="Space"&&n.target.closest("button")&&n.target.id!=="hit"||(["Space","ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Escape"].includes(n.code)&&n.preventDefault(),Be.add(n.code),!n.repeat&&(n.code==="Escape"&&(j("#dialog").open?Dt!=="done"&&Dt!=="range-result"&&Xe():Ph()),!Vn&&Dt!=="driving"&&(n.code==="Space"&&Ah(),n.code==="KeyQ"&&Fo(-1),n.code==="KeyE"&&Fo(1),n.code==="KeyP"&&bh(),n.code==="KeyC"&&tn()&&(Ur=(Ur+1)%2),n.code==="KeyR"&&(Ur=0))))});addEventListener("keyup",n=>Be.delete(n.code));addEventListener("blur",()=>{Be.clear(),Wi.clear()});const _o=new I(0,15,15),Ze=new I,wn=new I;let Eu=performance.now(),xo=0,Rr=0;function wu(n){n.y=Math.max(n.y,de(n.x,n.z)+2);for(const t of Lt.obstacles){const e=t.r||Math.max(t.w,t.d)/2;if(t.shape==="box"?Math.abs(n.x-t.x)<t.w/2+1&&Math.abs(n.z-t.z)<t.d/2+1:Math.hypot(n.x-t.x,n.z-t.z)<e+1){const i=t.y+(t.h?t.h/2:t.r);n.y<i+1&&n.y>t.y-(t.h?t.h/2:t.r)-1&&(n.y=i+1.5)}}}function Dh(n){requestAnimationFrame(Dh);const t=Math.min((n-Eu)/1e3,.05);if(Eu=n,xo+=t,Si.update(xo),Ne&&(Hn.target.position.set(dt.x,de(dt.x,dt.z),dt.z),Hn.position.set(dt.x-100,de(dt.x,dt.z)+180,dt.z+40)),Ne&&!Vn){if(Dt==="driving"&&(nx(ne,{forward:Be.has("KeyW")||Be.has("ArrowUp")||Wi.has("forward"),back:Be.has("KeyS")||Be.has("ArrowDown")||Wi.has("back"),left:Be.has("KeyA")||Be.has("ArrowLeft")||Wi.has("left"),right:Be.has("KeyD")||Be.has("ArrowRight")||Wi.has("right"),brake:Be.has("Space")},t,Lt),er.update(ne,dt,Lt,t),Math.hypot(ne.x-dt.x,ne.z-dt.z)<6&&Ex()),Dt==="intro"&&(ps+=t,ps>=4&&(bi(),vn())),["cup","celebration"].includes(Dt)&&(Kn+=t,Kn>.38&&!Uo&&(Uo=!0,wx()),Kn>=1.15&&Dt==="cup"&&(Dt="celebration",ms=!1,bx()),Kn>4.1&&Lh()),on.visible&&(on.update(t),jn&&(jn.visible=on.visible)),tn()){const c=Be.has("ShiftLeft")||Be.has("ShiftRight")?.09:.32;(Be.has("KeyA")||Be.has("ArrowLeft"))&&(He+=t*c),(Be.has("KeyD")||Be.has("ArrowRight"))&&(He-=t*c)}if(Dt==="power"&&(Pr+=t*Su(Yi),Qn=(1-Math.cos(Pr*2.7))/2,j("#fill").style.width=Qn*100+"%",j("#needle").style.left=Qn*100+"%"),Dt==="accuracy"&&!on.visible&&(Pr+=t*Su(Yi),fi=Math.cos(Pr*3.4),j("#needle").style.left=(fi+1)*50+"%"),_n&&(pi+=t,Dt==="swing"&&pi>=(Ie===4?vc:wo)&&(yh(dt,qc[Ie],Qn,fi,Mc,Eh()),Yi&&(Nn(90,0,.55,.12,"sawtooth",30),Nn(500,0,.24,.05,"triangle",80)),Dt="flight",Rr=0,Nn(Ie===4?340:180,0,.15,.08,"triangle")),pi>2.1&&(_n=!1)),dt.moving){for(Rr+=t;Rr>=1/120&&dt.moving;)Sh(dt,1/120),Rr-=1/120;if(!dt.moving)if(Rr=0,Lt.kind==="range")Ax();else if(dt.penalty){const c=dt.penalty;Rh(),ir(`${c}: +1 tacada. Bola reposta com segurança.`),Nn(120,0,.3,.08,"sine",40)}else dt.holed?Rx():(ii(),Qe===1&&!cr&&Sx()||bi(),vn())}}const e=["cup","celebration","done"].includes(Dt);if($c.update(dt,Vn?0:t,Ne&&dt.moving&&dt.rip),Ln.material.emissive.set(dt.moving&&dt.rip?"#ff6010":"#000000"),Ln.position.set(dt.x,dt.y,dt.z),Dt==="cup"){const c=Math.min(1,Kn/.95),l=dt.cupEntry||{x:ce.x+.25,z:ce.z},u=l.x-ce.x,h=l.z-ce.z,f=Math.min(.42,Math.hypot(u,h))*(1-c),d=Math.atan2(h,u)+c*2.7;Ln.position.set(ce.x+Math.cos(d)*f,de(ce.x,ce.z)+.22-1.18*c*c,ce.z+Math.sin(d)*f),Ln.rotation.x+=t*9,Ln.visible=!0}else Ln.visible=!dt.holed;const i=_n||dt.moving||e,r=i?nr:{x:dt.x,y:de(dt.x,dt.z),z:dt.z},s=i?Mc:He,o=kh(r,s,Ie,mi);if(hn.scale.x=o.side,hn.position.set(o.x,o.y,o.z),hn.rotation.y=s,di.setClub(Ie),di.animateDetails(xo),Dt==="celebration"||Dt==="done"?di.celebrate(Math.min(2.95,Math.max(0,Kn-1.15))):di.pose(i?pi:-1,Ie===4,Qn),Dt==="driving"&&ne&&(hn.scale.x=1,di.seated(),hn.position.set(ne.x-.5*Math.cos(ne.yaw),Qi(ne.x,ne.z,Lt)+.2,ne.z+.5*Math.sin(ne.yaw)-.3),hn.rotation.y=ne.yaw-Math.PI/2),Wo(),Dt==="intro"&&Ne){const c=Math.min(1,ps/4),l=Lt.distance*(1-c*.85),u=Math.min(de(Lt.tee.x,Lt.tee.z),de(ce.x,ce.z)),h=Math.max(de(0,l),de(Lt.tee.x,Lt.tee.z),de(ce.x,ce.z));Ze.set(65*Math.cos(c*Math.PI),h+55,l-45),wn.set(0,Math.max(u,de(0,l)),l+20)}else if(Dt==="driving"&&ne){const c=Qi(ne.x,ne.z,Lt);Ze.set(ne.x-Math.sin(ne.yaw)*12,c+7,ne.z-Math.cos(ne.yaw)*12),wn.set(ne.x+Math.sin(ne.yaw)*5,c+1.6,ne.z+Math.cos(ne.yaw)*5)}else if(Dt==="cup")Ze.set(ce.x+1.8,de(ce.x,ce.z)+3.1,ce.z-2.6),wn.set(ce.x,de(ce.x,ce.z),ce.z);else if(Dt==="celebration"||Dt==="done")Ze.set(hn.position.x+Math.cos(s)*7,hn.position.y+3.3,hn.position.z-Math.sin(s)*7-2),wn.set(hn.position.x,hn.position.y+2.1,hn.position.z);else if(!Ne)Ze.set(125+Math.sin(xo*.035)*9,90,Lt.id===0?135:Lt.distance+110),wn.set(0,20,Lt.id===0?-20:Lt.distance+145);else if(dt.moving&&(!_n||pi>(Ie===4?1.05:1.48)))Ze.set(dt.x-dt.vx*.45+10,dt.y+13,dt.z-24),wn.set(dt.x,dt.y,dt.z);else{const c=_n?nr:{x:dt.x,y:dt.y-.22,z:dt.z},l=sx(c,He,!!Ur,Ie===4,Lt.kind==="balcony"&&c.y>30&&Math.abs(c.x)<11.7&&Math.abs(c.z)<11.7);Ze.fromArray(l.position),wn.fromArray(l.target)}if(wu(Ze),Ne&&Dt!=="intro"){const c=wn.clone().sub(Ze);for(let l=.15;l<.9;l+=.15){const u=Ze.clone().addScaledVector(c,l);for(const h of Lt.obstacles)h.shape==="box"&&Math.abs(u.x-h.x)<h.w/2+.3&&Math.abs(u.z-h.z)<h.d/2+.3&&u.y<h.y+h.h/2&&u.y>h.y-h.h/2&&(Ze.y=Math.max(Ze.y,h.y+h.h/2+3))}}const a=Ne&&!dt.moving&&!_n&&["idle","power","accuracy"].includes(Dt);Ps.classList.toggle("aiming",a&&Dt==="idle"),e&&!ms&&(Jn.position.copy(Ze),_o.copy(wn),ms=!0),a?(Jn.position.copy(Ze),_o.copy(wn)):(Jn.position.lerp(Ze,1-Math.exp(-t*3)),_o.lerp(wn,1-Math.exp(-t*4))),wu(Jn.position),Jn.lookAt(_o),Ye.render(rn,Jn)}Jn.position.set(125,90,135);requestAnimationFrame(Dh);addEventListener("resize",()=>{Jn.aspect=innerWidth/innerHeight,Jn.updateProjectionMatrix(),Ye.setSize(innerWidth,innerHeight)});
