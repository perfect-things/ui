var h2=Object.create;var hd=Object.defineProperty;var g2=Object.getOwnPropertyDescriptor;var b2=Object.getOwnPropertyNames;var _2=Object.getPrototypeOf,v2=Object.prototype.hasOwnProperty;var Kt=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),gd=(t,e)=>{for(var n in e)hd(t,n,{get:e[n],enumerable:!0})},$2=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let l of b2(e))!v2.call(t,l)&&l!==n&&hd(t,l,{get:()=>e[l],enumerable:!(i=g2(e,l))||i.enumerable});return t};var bd=(t,e,n)=>(n=t!=null?h2(_2(t)):{},$2(e||!t||!t.__esModule?hd(n,"default",{value:t,enumerable:!0}):n,t));var Ri=Kt(ei=>{"use strict";Object.defineProperty(ei,"__esModule",{value:!0});ei.TraceDirectionKey=ei.Direction=ei.Axis=void 0;var Yc;ei.TraceDirectionKey=Yc;(function(t){t.NEGATIVE="NEGATIVE",t.POSITIVE="POSITIVE",t.NONE="NONE"})(Yc||(ei.TraceDirectionKey=Yc={}));var Gc;ei.Direction=Gc;(function(t){t.TOP="TOP",t.LEFT="LEFT",t.RIGHT="RIGHT",t.BOTTOM="BOTTOM",t.NONE="NONE"})(Gc||(ei.Direction=Gc={}));var Kc;ei.Axis=Kc;(function(t){t.X="x",t.Y="y"})(Kc||(ei.Axis=Kc={}))});var Jc=Kt(Zc=>{"use strict";Object.defineProperty(Zc,"__esModule",{value:!0});Zc.calculateDirection=dw;var Xc=Ri();function dw(t){var e,n=Xc.TraceDirectionKey.NEGATIVE,i=Xc.TraceDirectionKey.POSITIVE,l=t[t.length-1],r=t[t.length-2]||0;return t.every(function(a){return a===0})?Xc.TraceDirectionKey.NONE:(e=l>r?i:n,l===0&&(e=r<0?i:n),e)}});var Ga=Kt(di=>{"use strict";Object.defineProperty(di,"__esModule",{value:!0});di.resolveAxisDirection=di.getDirectionValue=di.getDirectionKey=di.getDifference=void 0;var Dn=Ri(),cw=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=Object.keys(e).toString();switch(n){case Dn.TraceDirectionKey.POSITIVE:return Dn.TraceDirectionKey.POSITIVE;case Dn.TraceDirectionKey.NEGATIVE:return Dn.TraceDirectionKey.NEGATIVE;default:return Dn.TraceDirectionKey.NONE}};di.getDirectionKey=cw;var pw=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return e[e.length-1]||0};di.getDirectionValue=pw;var hw=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Math.abs(e-n)};di.getDifference=hw;var gw=function(e,n){var i=Dn.Direction.LEFT,l=Dn.Direction.RIGHT,r=Dn.Direction.NONE;return e===Dn.Axis.Y&&(i=Dn.Direction.BOTTOM,l=Dn.Direction.TOP),n===Dn.TraceDirectionKey.NEGATIVE&&(r=i),n===Dn.TraceDirectionKey.POSITIVE&&(r=l),r};di.resolveAxisDirection=gw});var ep=Kt(Qc=>{"use strict";Object.defineProperty(Qc,"__esModule",{value:!0});Qc.calculateDirectionDelta=_w;var bw=Ri(),as=Ga();function _w(t){for(var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=t.length,i=n-1,l=bw.TraceDirectionKey.NONE;i>=0;i--){var r=t[i],a=(0,as.getDirectionKey)(r),u=(0,as.getDirectionValue)(r[a]),m=t[i-1]||{},f=(0,as.getDirectionKey)(m),c=(0,as.getDirectionValue)(m[f]),g=(0,as.getDifference)(u,c);if(g>=e){l=a;break}else l=f}return l}});var np=Kt(tp=>{"use strict";Object.defineProperty(tp,"__esModule",{value:!0});tp.calculateDuration=vw;function vw(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return t?e-t:0}});var C_=Kt(ip=>{"use strict";Object.defineProperty(ip,"__esModule",{value:!0});ip.calculateMovingPosition=$w;function $w(t){if("changedTouches"in t){var e=t.changedTouches&&t.changedTouches[0];return{x:e&&e.clientX,y:e&&e.clientY}}return{x:t.clientX,y:t.clientY}}});var sp=Kt(op=>{"use strict";Object.defineProperty(op,"__esModule",{value:!0});op.updateTrace=ww;function ww(t,e){var n=t[t.length-1];return n!==e&&t.push(e),t}});var rp=Kt(lp=>{"use strict";Object.defineProperty(lp,"__esModule",{value:!0});lp.calculateTraceDirections=yw;var Ka=Ri();function S_(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function yw(){for(var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=[],n=Ka.TraceDirectionKey.POSITIVE,i=Ka.TraceDirectionKey.NEGATIVE,l=0,r=[],a=Ka.TraceDirectionKey.NONE;l<t.length;l++){var u=t[l],m=t[l-1];if(r.length){var f=u>m?n:i;a===Ka.TraceDirectionKey.NONE&&(a=f),f===a?r.push(u):(e.push(S_({},a,r.slice())),r=[],r.push(u),a=f)}else u!==0&&(a=u>0?n:i),r.push(u)}return r.length&&e.push(S_({},a,r)),e}});var up=Kt(ap=>{"use strict";Object.defineProperty(ap,"__esModule",{value:!0});ap.resolveDirection=Cw;var kw=Jc(),Tw=rp(),Mw=ep(),L_=Ga(),Ew=Ri();function Cw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ew.Axis.X,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;if(n){var i=(0,Tw.calculateTraceDirections)(t),l=(0,Mw.calculateDirectionDelta)(i,n);return(0,L_.resolveAxisDirection)(e,l)}var r=(0,kw.calculateDirection)(t);return(0,L_.resolveAxisDirection)(e,r)}});var mp=Kt(fp=>{"use strict";Object.defineProperty(fp,"__esModule",{value:!0});fp.calculateVelocity=Sw;function Sw(t,e,n){var i=Math.sqrt(t*t+e*e);return i/(n||1)}});var O_=Kt(dp=>{"use strict";Object.defineProperty(dp,"__esModule",{value:!0});dp.calculatePosition=Aw;var D_=sp(),A_=up(),Lw=np(),Dw=mp(),I_=Ri();function Aw(t,e){var n=t.start,i=t.x,l=t.y,r=t.traceX,a=t.traceY,u=e.rotatePosition,m=e.directionDelta,f=u.x-i,c=l-u.y,g=Math.abs(f),b=Math.abs(c);(0,D_.updateTrace)(r,f),(0,D_.updateTrace)(a,c);var h=(0,A_.resolveDirection)(r,I_.Axis.X,m),v=(0,A_.resolveDirection)(a,I_.Axis.Y,m),w=(0,Lw.calculateDuration)(n,Date.now()),k=(0,Dw.calculateVelocity)(g,b,w);return{absX:g,absY:b,deltaX:f,deltaY:c,directionX:h,directionY:v,duration:w,positionX:u.x,positionY:u.y,velocity:k}}});var x_=Kt(Xa=>{"use strict";Object.defineProperty(Xa,"__esModule",{value:!0});Xa.checkIsMoreThanSingleTouches=void 0;var Iw=function(e){return!!(e.touches&&e.touches.length>1)};Xa.checkIsMoreThanSingleTouches=Iw});var pp=Kt(cp=>{"use strict";Object.defineProperty(cp,"__esModule",{value:!0});cp.createOptions=Ow;function Ow(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.defineProperty(t,"passive",{get:function(){return this.isPassiveSupported=!0,!0},enumerable:!0}),t}});var H_=Kt(us=>{"use strict";Object.defineProperty(us,"__esModule",{value:!0});us.checkIsPassiveSupported=Hw;us.noop=void 0;var xw=pp();function Hw(t){if(typeof t=="boolean")return t;var e={isPassiveSupported:t};try{var n=(0,xw.createOptions)(e);window.addEventListener("checkIsPassiveSupported",hp,n),window.removeEventListener("checkIsPassiveSupported",hp,n)}catch{}return e.isPassiveSupported}var hp=function(){};us.noop=hp});var P_=Kt(Za=>{"use strict";Object.defineProperty(Za,"__esModule",{value:!0});Za.checkIsTouchEventsSupported=void 0;function gp(t){"@babel/helpers - typeof";return gp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},gp(t)}var Pw=function(){return(typeof window>"u"?"undefined":gp(window))==="object"&&("ontouchstart"in window||!!window.navigator.maxTouchPoints)};Za.checkIsTouchEventsSupported=Pw});var F_=Kt(Ja=>{"use strict";Object.defineProperty(Ja,"__esModule",{value:!0});Ja.getInitialState=void 0;function N_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),n.push.apply(n,i)}return n}function Nw(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?N_(Object(n),!0).forEach(function(i){Fw(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N_(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Fw(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var qw=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Nw({x:0,y:0,start:0,isSwiping:!1,traceX:[],traceY:[]},e)};Ja.getInitialState=qw});var B_=Kt(Qa=>{"use strict";Object.defineProperty(Qa,"__esModule",{value:!0});Qa.getInitialProps=void 0;function q_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),n.push.apply(n,i)}return n}function Bw(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?q_(Object(n),!0).forEach(function(i){Rw(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):q_(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Rw(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var jw=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Bw({element:null,target:null,delta:10,directionDelta:0,rotationAngle:0,mouseTrackingEnabled:!1,touchTrackingEnabled:!0,preventDefaultTouchmoveEvent:!1,preventTrackingOnMouseleave:!1},e)};Qa.getInitialProps=jw});var R_=Kt(bp=>{"use strict";Object.defineProperty(bp,"__esModule",{value:!0});bp.getOptions=zw;function zw(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return t?{passive:!1}:{}}});var j_=Kt(_p=>{"use strict";Object.defineProperty(_p,"__esModule",{value:!0});_p.rotateByAngle=Ww;function Ww(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(e===0)return t;var n=t.x,i=t.y,l=Math.PI/180*e,r=n*Math.cos(l)+i*Math.sin(l),a=i*Math.cos(l)-n*Math.sin(l);return{x:r,y:a}}});var z_=Kt(et=>{"use strict";Object.defineProperty(et,"__esModule",{value:!0});var vp=Jc();Object.keys(vp).forEach(function(t){t==="default"||t==="__esModule"||t in et&&et[t]===vp[t]||Object.defineProperty(et,t,{enumerable:!0,get:function(){return vp[t]}})});var $p=ep();Object.keys($p).forEach(function(t){t==="default"||t==="__esModule"||t in et&&et[t]===$p[t]||Object.defineProperty(et,t,{enumerable:!0,get:function(){return $p[t]}})});var wp=np();Object.keys(wp).forEach(function(t){t==="default"||t==="__esModule"||t in et&&et[t]===wp[t]||Object.defineProperty(et,t,{enumerable:!0,get:function(){return wp[t]}})});var yp=C_();Object.keys(yp).forEach(function(t){t==="default"||t==="__esModule"||t in et&&et[t]===yp[t]||Object.defineProperty(et,t,{enumerable:!0,get:function(){return yp[t]}})});var kp=O_();Object.keys(kp).forEach(function(t){t==="default"||t==="__esModule"||t in et&&et[t]===kp[t]||Object.defineProperty(et,t,{enumerable:!0,get:function(){return kp[t]}})});var Tp=rp();Object.keys(Tp).forEach(function(t){t==="default"||t==="__esModule"||t in et&&et[t]===Tp[t]||Object.defineProperty(et,t,{enumerable:!0,get:function(){return Tp[t]}})});var Mp=mp();Object.keys(Mp).forEach(function(t){t==="default"||t==="__esModule"||t in et&&et[t]===Mp[t]||Object.defineProperty(et,t,{enumerable:!0,get:function(){return Mp[t]}})});var Ep=x_();Object.keys(Ep).forEach(function(t){t==="default"||t==="__esModule"||t in et&&et[t]===Ep[t]||Object.defineProperty(et,t,{enumerable:!0,get:function(){return Ep[t]}})});var Cp=H_();Object.keys(Cp).forEach(function(t){t==="default"||t==="__esModule"||t in et&&et[t]===Cp[t]||Object.defineProperty(et,t,{enumerable:!0,get:function(){return Cp[t]}})});var Sp=P_();Object.keys(Sp).forEach(function(t){t==="default"||t==="__esModule"||t in et&&et[t]===Sp[t]||Object.defineProperty(et,t,{enumerable:!0,get:function(){return Sp[t]}})});var Lp=Ga();Object.keys(Lp).forEach(function(t){t==="default"||t==="__esModule"||t in et&&et[t]===Lp[t]||Object.defineProperty(et,t,{enumerable:!0,get:function(){return Lp[t]}})});var Dp=pp();Object.keys(Dp).forEach(function(t){t==="default"||t==="__esModule"||t in et&&et[t]===Dp[t]||Object.defineProperty(et,t,{enumerable:!0,get:function(){return Dp[t]}})});var Ap=F_();Object.keys(Ap).forEach(function(t){t==="default"||t==="__esModule"||t in et&&et[t]===Ap[t]||Object.defineProperty(et,t,{enumerable:!0,get:function(){return Ap[t]}})});var Ip=B_();Object.keys(Ip).forEach(function(t){t==="default"||t==="__esModule"||t in et&&et[t]===Ip[t]||Object.defineProperty(et,t,{enumerable:!0,get:function(){return Ip[t]}})});var Op=R_();Object.keys(Op).forEach(function(t){t==="default"||t==="__esModule"||t in et&&et[t]===Op[t]||Object.defineProperty(et,t,{enumerable:!0,get:function(){return Op[t]}})});var xp=up();Object.keys(xp).forEach(function(t){t==="default"||t==="__esModule"||t in et&&et[t]===xp[t]||Object.defineProperty(et,t,{enumerable:!0,get:function(){return xp[t]}})});var Hp=j_();Object.keys(Hp).forEach(function(t){t==="default"||t==="__esModule"||t in et&&et[t]===Hp[t]||Object.defineProperty(et,t,{enumerable:!0,get:function(){return Hp[t]}})});var Pp=sp();Object.keys(Pp).forEach(function(t){t==="default"||t==="__esModule"||t in et&&et[t]===Pp[t]||Object.defineProperty(et,t,{enumerable:!0,get:function(){return Pp[t]}})})});var Y_=Kt(fo=>{"use strict";function Fp(t){"@babel/helpers - typeof";return Fp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fp(t)}Object.defineProperty(fo,"__esModule",{value:!0});var Vw={};fo.default=void 0;var fn=Uw(z_()),Np=Ri();Object.keys(Np).forEach(function(t){t==="default"||t==="__esModule"||Object.prototype.hasOwnProperty.call(Vw,t)||t in fo&&fo[t]===Np[t]||Object.defineProperty(fo,t,{enumerable:!0,get:function(){return Np[t]}})});function U_(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(U_=function(l){return l?n:e})(t)}function Uw(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||Fp(t)!=="object"&&typeof t!="function")return{default:t};var n=U_(e);if(n&&n.has(t))return n.get(t);var i={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in t)if(r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)){var a=l?Object.getOwnPropertyDescriptor(t,r):null;a&&(a.get||a.set)?Object.defineProperty(i,r,a):i[r]=t[r]}return i.default=t,n&&n.set(t,i),i}function Yw(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function W_(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Gw(t,e,n){return e&&W_(t.prototype,e),n&&W_(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function V_(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Kw=function(){function t(e){Yw(this,t),V_(this,"state",void 0),V_(this,"props",void 0),this.state=fn.getInitialState(),this.props=fn.getInitialProps(e),this.handleSwipeStart=this.handleSwipeStart.bind(this),this.handleSwipeMove=this.handleSwipeMove.bind(this),this.handleSwipeEnd=this.handleSwipeEnd.bind(this),this.handleMouseDown=this.handleMouseDown.bind(this),this.handleMouseMove=this.handleMouseMove.bind(this),this.handleMouseUp=this.handleMouseUp.bind(this),this.handleMouseLeave=this.handleMouseLeave.bind(this)}return Gw(t,[{key:"init",value:function(){this.setupTouchListeners(),this.setupMouseListeners()}},{key:"update",value:function(n){var i=this.props,l=Object.assign({},i,n);if(i.element!==l.element||i.target!==l.target){this.destroy(),this.props=l,this.init();return}this.props=l,(i.mouseTrackingEnabled!==l.mouseTrackingEnabled||i.preventTrackingOnMouseleave!==l.preventTrackingOnMouseleave)&&(this.cleanupMouseListeners(),l.mouseTrackingEnabled?this.setupMouseListeners():this.cleanupMouseListeners()),i.touchTrackingEnabled!==l.touchTrackingEnabled&&(this.cleanupTouchListeners(),l.touchTrackingEnabled?this.setupTouchListeners():this.cleanupTouchListeners())}},{key:"destroy",value:function(){this.cleanupMouseListeners(),this.cleanupTouchListeners(),this.state=fn.getInitialState(),this.props=fn.getInitialProps()}},{key:"setupTouchListeners",value:function(){var n=this.props,i=n.element,l=n.target,r=n.touchTrackingEnabled;if(i&&r){var a=l||i,u=fn.checkIsPassiveSupported(),m=fn.getOptions(u);a.addEventListener("touchstart",this.handleSwipeStart,m),a.addEventListener("touchmove",this.handleSwipeMove,m),a.addEventListener("touchend",this.handleSwipeEnd,m)}}},{key:"cleanupTouchListeners",value:function(){var n=this.props,i=n.element,l=n.target,r=l||i;r&&(r.removeEventListener("touchstart",this.handleSwipeStart),r.removeEventListener("touchmove",this.handleSwipeMove),r.removeEventListener("touchend",this.handleSwipeEnd))}},{key:"setupMouseListeners",value:function(){var n=this.props,i=n.element,l=n.mouseTrackingEnabled,r=n.preventTrackingOnMouseleave;l&&i&&(i.addEventListener("mousedown",this.handleMouseDown),i.addEventListener("mousemove",this.handleMouseMove),i.addEventListener("mouseup",this.handleMouseUp),r&&i.addEventListener("mouseleave",this.handleMouseLeave))}},{key:"cleanupMouseListeners",value:function(){var n=this.props.element;n&&(n.removeEventListener("mousedown",this.handleMouseDown),n.removeEventListener("mousemove",this.handleMouseMove),n.removeEventListener("mouseup",this.handleMouseUp),n.removeEventListener("mouseleave",this.handleMouseLeave))}},{key:"getEventData",value:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{directionDelta:0},l=this.props.rotationAngle,r=i.directionDelta,a=fn.calculateMovingPosition(n),u=fn.rotateByAngle(a,l);return fn.calculatePosition(this.state,{rotatePosition:u,directionDelta:r})}},{key:"handleSwipeStart",value:function(n){if(!fn.checkIsMoreThanSingleTouches(n)){var i=this.props.rotationAngle,l=fn.calculateMovingPosition(n),r=fn.rotateByAngle(l,i),a=r.x,u=r.y;this.state=fn.getInitialState({isSwiping:!1,start:Date.now(),x:a,y:u})}}},{key:"handleSwipeMove",value:function(n){var i=this.state,l=i.x,r=i.y,a=i.isSwiping;if(!(!l||!r||fn.checkIsMoreThanSingleTouches(n))){var u=this.props.directionDelta||0,m=this.getEventData(n,{directionDelta:u}),f=m.absX,c=m.absY,g=m.deltaX,b=m.deltaY,h=m.directionX,v=m.directionY,w=m.duration,k=m.velocity,_=this.props,M=_.delta,O=_.preventDefaultTouchmoveEvent,D=_.onSwipeStart,L=_.onSwiping;n.cancelable&&O&&n.preventDefault(),!(f<Number(M)&&c<Number(M)&&!a)&&(D&&!a&&D(n,{deltaX:g,deltaY:b,absX:f,absY:c,directionX:h,directionY:v,duration:w,velocity:k}),this.state.isSwiping=!0,L&&L(n,{deltaX:g,deltaY:b,absX:f,absY:c,directionX:h,directionY:v,duration:w,velocity:k}))}}},{key:"handleSwipeEnd",value:function(n){var i=this.props,l=i.onSwiped,r=i.onTap;if(this.state.isSwiping){var a=this.props.directionDelta||0,u=this.getEventData(n,{directionDelta:a});l&&l(n,u)}else{var m=this.getEventData(n);r&&r(n,m)}this.state=fn.getInitialState()}},{key:"handleMouseDown",value:function(n){var i=this.props.target;i?i===n.target&&this.handleSwipeStart(n):this.handleSwipeStart(n)}},{key:"handleMouseMove",value:function(n){this.handleSwipeMove(n)}},{key:"handleMouseUp",value:function(n){var i=this.state.isSwiping,l=this.props.target;l?(l===n.target||i)&&this.handleSwipeEnd(n):this.handleSwipeEnd(n)}},{key:"handleMouseLeave",value:function(n){var i=this.state.isSwiping;i&&this.handleSwipeEnd(n)}}],[{key:"isTouchEventsSupported",value:function(){return fn.checkIsTouchEventsSupported()}}]),t}();fo.default=Kw});var d2=Kt((lz,eu)=>{var X6=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};var Ze=function(t){var e=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,n=0,i={},l={manual:t.Prism&&t.Prism.manual,disableWorkerMessageHandler:t.Prism&&t.Prism.disableWorkerMessageHandler,util:{encode:function w(k){return k instanceof r?new r(k.type,w(k.content),k.alias):Array.isArray(k)?k.map(w):k.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(w){return Object.prototype.toString.call(w).slice(8,-1)},objId:function(w){return w.__id||Object.defineProperty(w,"__id",{value:++n}),w.__id},clone:function w(k,_){_=_||{};var M,O;switch(l.util.type(k)){case"Object":if(O=l.util.objId(k),_[O])return _[O];M={},_[O]=M;for(var D in k)k.hasOwnProperty(D)&&(M[D]=w(k[D],_));return M;case"Array":return O=l.util.objId(k),_[O]?_[O]:(M=[],_[O]=M,k.forEach(function(L,T){M[T]=w(L,_)}),M);default:return k}},getLanguage:function(w){for(;w;){var k=e.exec(w.className);if(k)return k[1].toLowerCase();w=w.parentElement}return"none"},setLanguage:function(w,k){w.className=w.className.replace(RegExp(e,"gi"),""),w.classList.add("language-"+k)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(M){var w=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(M.stack)||[])[1];if(w){var k=document.getElementsByTagName("script");for(var _ in k)if(k[_].src==w)return k[_]}return null}},isActive:function(w,k,_){for(var M="no-"+k;w;){var O=w.classList;if(O.contains(k))return!0;if(O.contains(M))return!1;w=w.parentElement}return!!_}},languages:{plain:i,plaintext:i,text:i,txt:i,extend:function(w,k){var _=l.util.clone(l.languages[w]);for(var M in k)_[M]=k[M];return _},insertBefore:function(w,k,_,M){M=M||l.languages;var O=M[w],D={};for(var L in O)if(O.hasOwnProperty(L)){if(L==k)for(var T in _)_.hasOwnProperty(T)&&(D[T]=_[T]);_.hasOwnProperty(L)||(D[L]=O[L])}var A=M[w];return M[w]=D,l.languages.DFS(l.languages,function(H,I){I===A&&H!=w&&(this[H]=D)}),D},DFS:function w(k,_,M,O){O=O||{};var D=l.util.objId;for(var L in k)if(k.hasOwnProperty(L)){_.call(k,L,k[L],M||L);var T=k[L],A=l.util.type(T);A==="Object"&&!O[D(T)]?(O[D(T)]=!0,w(T,_,null,O)):A==="Array"&&!O[D(T)]&&(O[D(T)]=!0,w(T,_,L,O))}}},plugins:{},highlightAll:function(w,k){l.highlightAllUnder(document,w,k)},highlightAllUnder:function(w,k,_){var M={callback:_,container:w,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};l.hooks.run("before-highlightall",M),M.elements=Array.prototype.slice.apply(M.container.querySelectorAll(M.selector)),l.hooks.run("before-all-elements-highlight",M);for(var O=0,D;D=M.elements[O++];)l.highlightElement(D,k===!0,M.callback)},highlightElement:function(w,k,_){var M=l.util.getLanguage(w),O=l.languages[M];l.util.setLanguage(w,M);var D=w.parentElement;D&&D.nodeName.toLowerCase()==="pre"&&l.util.setLanguage(D,M);var L=w.textContent,T={element:w,language:M,grammar:O,code:L};function A(I){T.highlightedCode=I,l.hooks.run("before-insert",T),T.element.innerHTML=T.highlightedCode,l.hooks.run("after-highlight",T),l.hooks.run("complete",T),_&&_.call(T.element)}if(l.hooks.run("before-sanity-check",T),D=T.element.parentElement,D&&D.nodeName.toLowerCase()==="pre"&&!D.hasAttribute("tabindex")&&D.setAttribute("tabindex","0"),!T.code){l.hooks.run("complete",T),_&&_.call(T.element);return}if(l.hooks.run("before-highlight",T),!T.grammar){A(l.util.encode(T.code));return}if(k&&t.Worker){var H=new Worker(l.filename);H.onmessage=function(I){A(I.data)},H.postMessage(JSON.stringify({language:T.language,code:T.code,immediateClose:!0}))}else A(l.highlight(T.code,T.grammar,T.language))},highlight:function(w,k,_){var M={code:w,grammar:k,language:_};if(l.hooks.run("before-tokenize",M),!M.grammar)throw new Error('The language "'+M.language+'" has no grammar.');return M.tokens=l.tokenize(M.code,M.grammar),l.hooks.run("after-tokenize",M),r.stringify(l.util.encode(M.tokens),M.language)},tokenize:function(w,k){var _=k.rest;if(_){for(var M in _)k[M]=_[M];delete k.rest}var O=new m;return f(O,O.head,w),u(w,O,k,O.head,0),g(O)},hooks:{all:{},add:function(w,k){var _=l.hooks.all;_[w]=_[w]||[],_[w].push(k)},run:function(w,k){var _=l.hooks.all[w];if(!(!_||!_.length))for(var M=0,O;O=_[M++];)O(k)}},Token:r};t.Prism=l;function r(w,k,_,M){this.type=w,this.content=k,this.alias=_,this.length=(M||"").length|0}r.stringify=function w(k,_){if(typeof k=="string")return k;if(Array.isArray(k)){var M="";return k.forEach(function(A){M+=w(A,_)}),M}var O={type:k.type,content:w(k.content,_),tag:"span",classes:["token",k.type],attributes:{},language:_},D=k.alias;D&&(Array.isArray(D)?Array.prototype.push.apply(O.classes,D):O.classes.push(D)),l.hooks.run("wrap",O);var L="";for(var T in O.attributes)L+=" "+T+'="'+(O.attributes[T]||"").replace(/"/g,"&quot;")+'"';return"<"+O.tag+' class="'+O.classes.join(" ")+'"'+L+">"+O.content+"</"+O.tag+">"};function a(w,k,_,M){w.lastIndex=k;var O=w.exec(_);if(O&&M&&O[1]){var D=O[1].length;O.index+=D,O[0]=O[0].slice(D)}return O}function u(w,k,_,M,O,D){for(var L in _)if(!(!_.hasOwnProperty(L)||!_[L])){var T=_[L];T=Array.isArray(T)?T:[T];for(var A=0;A<T.length;++A){if(D&&D.cause==L+","+A)return;var H=T[A],I=H.inside,P=!!H.lookbehind,N=!!H.greedy,j=H.alias;if(N&&!H.pattern.global){var K=H.pattern.toString().match(/[imsuy]*$/)[0];H.pattern=RegExp(H.pattern.source,K+"g")}for(var U=H.pattern||H,G=M.next,F=O;G!==k.tail&&!(D&&F>=D.reach);F+=G.value.length,G=G.next){var z=G.value;if(k.length>w.length)return;if(!(z instanceof r)){var V=1,Q;if(N){if(Q=a(U,F,w,P),!Q||Q.index>=w.length)break;var Z=Q.index,le=Q.index+Q[0].length,ee=F;for(ee+=G.value.length;Z>=ee;)G=G.next,ee+=G.value.length;if(ee-=G.value.length,F=ee,G.value instanceof r)continue;for(var X=G;X!==k.tail&&(ee<le||typeof X.value=="string");X=X.next)V++,ee+=X.value.length;V--,z=w.slice(F,ee),Q.index-=F}else if(Q=a(U,0,z,P),!Q)continue;var Z=Q.index,ge=Q[0],he=z.slice(0,Z),W=z.slice(Z+ge.length),Y=F+z.length;D&&Y>D.reach&&(D.reach=Y);var J=G.prev;he&&(J=f(k,J,he),F+=he.length),c(k,J,V);var pe=new r(L,I?l.tokenize(ge,I):ge,j,ge);if(G=f(k,J,pe),W&&f(k,G,W),V>1){var we={cause:L+","+A,reach:Y};u(w,k,_,G.prev,F,we),D&&we.reach>D.reach&&(D.reach=we.reach)}}}}}}function m(){var w={value:null,prev:null,next:null},k={value:null,prev:w,next:null};w.next=k,this.head=w,this.tail=k,this.length=0}function f(w,k,_){var M=k.next,O={value:_,prev:k,next:M};return k.next=O,M.prev=O,w.length++,O}function c(w,k,_){for(var M=k.next,O=0;O<_&&M!==w.tail;O++)M=M.next;k.next=M,M.prev=k,w.length-=O}function g(w){for(var k=[],_=w.head.next;_!==w.tail;)k.push(_.value),_=_.next;return k}if(!t.document)return t.addEventListener&&(l.disableWorkerMessageHandler||t.addEventListener("message",function(w){var k=JSON.parse(w.data),_=k.language,M=k.code,O=k.immediateClose;t.postMessage(l.highlight(M,l.languages[_],_)),O&&t.close()},!1)),l;var b=l.util.currentScript();b&&(l.filename=b.src,b.hasAttribute("data-manual")&&(l.manual=!0));function h(){l.manual||l.highlightAll()}if(!l.manual){var v=document.readyState;v==="loading"||v==="interactive"&&b&&b.defer?document.addEventListener("DOMContentLoaded",h):window.requestAnimationFrame?window.requestAnimationFrame(h):window.setTimeout(h,16)}return l}(X6);typeof eu<"u"&&eu.exports&&(eu.exports=Ze);typeof global<"u"&&(global.Prism=Ze);Ze.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Ze.languages.markup.tag.inside["attr-value"].inside.entity=Ze.languages.markup.entity;Ze.languages.markup.doctype.inside["internal-subset"].inside=Ze.languages.markup;Ze.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.replace(/&amp;/,"&"))});Object.defineProperty(Ze.languages.markup.tag,"addInlined",{value:function(e,n){var i={};i["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Ze.languages[n]},i.cdata=/^<!\[CDATA\[|\]\]>$/i;var l={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:i}};l["language-"+n]={pattern:/[\s\S]+/,inside:Ze.languages[n]};var r={};r[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return e}),"i"),lookbehind:!0,greedy:!0,inside:l},Ze.languages.insertBefore("markup","cdata",r)}});Object.defineProperty(Ze.languages.markup.tag,"addAttribute",{value:function(t,e){Ze.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[e,"language-"+e],inside:Ze.languages[e]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Ze.languages.html=Ze.languages.markup;Ze.languages.mathml=Ze.languages.markup;Ze.languages.svg=Ze.languages.markup;Ze.languages.xml=Ze.languages.extend("markup",{});Ze.languages.ssml=Ze.languages.xml;Ze.languages.atom=Ze.languages.xml;Ze.languages.rss=Ze.languages.xml;(function(t){var e=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+e.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+e.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+e.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+e.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:e,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var n=t.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))})(Ze);Ze.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};Ze.languages.javascript=Ze.languages.extend("clike",{"class-name":[Ze.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Ze.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Ze.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Ze.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Ze.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Ze.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Ze.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Ze.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Ze.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Ze.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Ze.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Ze.languages.markup&&(Ze.languages.markup.tag.addInlined("script","javascript"),Ze.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Ze.languages.js=Ze.languages.javascript;(function(){if(typeof Ze>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var t="Loading\u2026",e=function(b,h){return"\u2716 Error "+b+" while fetching file: "+h},n="\u2716 Error: File does not exist or is empty",i={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},l="data-src-status",r="loading",a="loaded",u="failed",m="pre[data-src]:not(["+l+'="'+a+'"]):not(['+l+'="'+r+'"])';function f(b,h,v){var w=new XMLHttpRequest;w.open("GET",b,!0),w.onreadystatechange=function(){w.readyState==4&&(w.status<400&&w.responseText?h(w.responseText):w.status>=400?v(e(w.status,w.statusText)):v(n))},w.send(null)}function c(b){var h=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(b||"");if(h){var v=Number(h[1]),w=h[2],k=h[3];return w?k?[v,Number(k)]:[v,void 0]:[v,v]}}Ze.hooks.add("before-highlightall",function(b){b.selector+=", "+m}),Ze.hooks.add("before-sanity-check",function(b){var h=b.element;if(h.matches(m)){b.code="",h.setAttribute(l,r);var v=h.appendChild(document.createElement("CODE"));v.textContent=t;var w=h.getAttribute("data-src"),k=b.language;if(k==="none"){var _=(/\.(\w+)$/.exec(w)||[,"none"])[1];k=i[_]||_}Ze.util.setLanguage(v,k),Ze.util.setLanguage(h,k);var M=Ze.plugins.autoloader;M&&M.loadLanguages(k),f(w,function(O){h.setAttribute(l,a);var D=c(h.getAttribute("data-range"));if(D){var L=O.split(/\r\n?|\n/g),T=D[0],A=D[1]==null?L.length:D[1];T<0&&(T+=L.length),T=Math.max(0,Math.min(T-1,L.length)),A<0&&(A+=L.length),A=Math.max(0,Math.min(A,L.length)),O=L.slice(T,A).join(`
`),h.hasAttribute("data-start")||h.setAttribute("data-start",String(T+1))}v.textContent=O,Ze.highlightElement(v)},function(O){h.setAttribute(l,u),v.textContent=O})}}),Ze.plugins.fileHighlight={highlight:function(h){for(var v=(h||document).querySelectorAll(m),w=0,k;k=v[w++];)Ze.highlightElement(k)}};var g=!1;Ze.fileHighlight=function(){g||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),g=!0),Ze.plugins.fileHighlight.highlight.apply(this,arguments)}})()});var p2=Kt((rz,tu)=>{(function(){if(typeof Prism>"u")return;var t=Object.assign||function(r,a){for(var u in a)a.hasOwnProperty(u)&&(r[u]=a[u]);return r};function e(r){this.defaults=t({},r)}function n(r){return r.replace(/-(\w)/g,function(a,u){return u.toUpperCase()})}function i(r){for(var a=0,u=0;u<r.length;++u)r.charCodeAt(u)==9&&(a+=3);return r.length+a}var l={"remove-trailing":"boolean","remove-indent":"boolean","left-trim":"boolean","right-trim":"boolean","break-lines":"number",indent:"number","remove-initial-line-feed":"boolean","tabs-to-spaces":"number","spaces-to-tabs":"number"};e.prototype={setDefaults:function(r){this.defaults=t(this.defaults,r)},normalize:function(r,a){a=t(this.defaults,a);for(var u in a){var m=n(u);u!=="normalize"&&m!=="setDefaults"&&a[u]&&this[m]&&(r=this[m].call(this,r,a[u]))}return r},leftTrim:function(r){return r.replace(/^\s+/,"")},rightTrim:function(r){return r.replace(/\s+$/,"")},tabsToSpaces:function(r,a){return a=a|0||4,r.replace(/\t/g,new Array(++a).join(" "))},spacesToTabs:function(r,a){return a=a|0||4,r.replace(RegExp(" {"+a+"}","g"),"	")},removeTrailing:function(r){return r.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(r){return r.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(r){var a=r.match(/^[^\S\n\r]*(?=\S)/gm);return!a||!a[0].length||(a.sort(function(u,m){return u.length-m.length}),!a[0].length)?r:r.replace(RegExp("^"+a[0],"gm"),"")},indent:function(r,a){return r.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++a).join("	")+"$&")},breakLines:function(r,a){a=a===!0?80:a|0||80;for(var u=r.split(`
`),m=0;m<u.length;++m)if(!(i(u[m])<=a)){for(var f=u[m].split(/(\s+)/g),c=0,g=0;g<f.length;++g){var b=i(f[g]);c+=b,c>a&&(f[g]=`
`+f[g],c=b)}u[m]=f.join("")}return u.join(`
`)}},typeof tu<"u"&&tu.exports&&(tu.exports=e),Prism.plugins.NormalizeWhitespace=new e({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Prism.hooks.add("before-sanity-check",function(r){var a=Prism.plugins.NormalizeWhitespace;if(!(r.settings&&r.settings["whitespace-normalization"]===!1)&&Prism.util.isActive(r.element,"whitespace-normalization",!0)){if((!r.element||!r.element.parentNode)&&r.code){r.code=a.normalize(r.code,r.settings);return}var u=r.element.parentNode;if(!(!r.code||!u||u.nodeName.toLowerCase()!=="pre")){r.settings==null&&(r.settings={});for(var m in l)if(Object.hasOwnProperty.call(l,m)){var f=l[m];if(u.hasAttribute("data-"+m))try{var c=JSON.parse(u.getAttribute("data-"+m)||"true");typeof c===f&&(r.settings[m]=c)}catch{}}for(var g=u.childNodes,b="",h="",v=!1,w=0;w<g.length;++w){var k=g[w];k==r.element?v=!0:k.nodeName==="#text"&&(v?h+=k.nodeValue:b+=k.nodeValue,u.removeChild(k),--w)}if(!r.element.children.length||!Prism.plugins.KeepMarkup)r.code=b+r.code+h,r.code=a.normalize(r.code,r.settings);else{var _=b+r.element.innerHTML+h;r.element.innerHTML=a.normalize(_,r.settings),r.code=r.element.textContent}}}})})()});function Le(){}var Si=t=>t;function tt(t,e){for(let n in e)t[n]=e[n];return t}function _d(t){return t()}function ma(){return Object.create(null)}function Re(t){t.forEach(_d)}function _t(t){return typeof t=="function"}function me(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}var fa;function Sg(t,e){return t===e?!0:(fa||(fa=document.createElement("a")),fa.href=e,t===fa.href)}function Lg(t){return Object.keys(t).length===0}function vd(t,...e){if(t==null){for(let i of e)i(void 0);return Le}let n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ho(t){let e;return vd(t,n=>e=n)(),e}function un(t,e,n){t.$$.on_destroy.push(vd(e,n))}function Dt(t,e,n,i){if(t){let l=Dg(t,e,n,i);return t[0](l)}}function Dg(t,e,n,i){return t[1]&&i?tt(n.ctx.slice(),t[1](i(e))):n.ctx}function At(t,e,n,i){if(t[2]&&i){let l=t[2](i(n));if(e.dirty===void 0)return l;if(typeof l=="object"){let r=[],a=Math.max(e.dirty.length,l.length);for(let u=0;u<a;u+=1)r[u]=e.dirty[u]|l[u];return r}return e.dirty|l}return e.dirty}function It(t,e,n,i,l,r){if(l){let a=Dg(e,n,i,r);t.p(a,l)}}function Ot(t){if(t.ctx.length>32){let e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Zt(t){let e={};for(let n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function kt(t,e){let n={};e=new Set(e);for(let i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function da(t){let e={};for(let n in t)e[n]=!0;return e}function Ag(t,e,n){return t.set(n),e}function Ig(t){return t&&_t(t.destroy)?t.destroy:Le}function $d(t){let e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}var Og=typeof window<"u",go=Og?()=>window.performance.now():()=>Date.now(),Fo=Og?t=>requestAnimationFrame(t):Le;var bo=new Set;function xg(t){bo.forEach(e=>{e.c(t)||(bo.delete(e),e.f())}),bo.size!==0&&Fo(xg)}function _o(t){let e;return bo.size===0&&Fo(xg),{promise:new Promise(n=>{bo.add(e={c:t,f:n})}),abort(){bo.delete(e)}}}var qo=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;var ca=class t{_listeners="WeakMap"in qo?new WeakMap:void 0;_observer=void 0;options;constructor(e){this.options=e}observe(e,n){return this._listeners.set(e,n),this._getObserver().observe(e,this.options),()=>{this._listeners.delete(e),this._observer.unobserve(e)}}_getObserver(){return this._observer??(this._observer=new ResizeObserver(e=>{for(let n of e)t.entries.set(n.target,n),this._listeners.get(n.target)?.(n)}))}};ca.entries="WeakMap"in qo?new WeakMap:void 0;var Hg=!1;function Pg(){Hg=!0}function Ng(){Hg=!1}function q(t,e){t.appendChild(e)}function wd(t){if(!t)return document;let e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Fg(t){let e=p("style");return e.textContent="/* empty */",y2(wd(t),e),e.sheet}function y2(t,e){return q(t.head||t,e),e.sheet}function s(t,e,n){t.insertBefore(e,n||null)}function o(t){t.parentNode&&t.parentNode.removeChild(t)}function St(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function Bo(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function ne(t){return document.createTextNode(t)}function d(){return ne(" ")}function Tt(){return ne("")}function ye(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Un(t){return function(e){return e.preventDefault(),t.call(this,e)}}function pa(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function x(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}var k2=["width","height"];function Ct(t,e){let n=Object.getOwnPropertyDescriptors(t.__proto__);for(let i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&k2.indexOf(i)===-1?t[i]=e[i]:x(t,i,e[i])}function qg(t){return t===""?null:+t}function Bg(t){return Array.from(t.childNodes)}function je(t,e){e=""+e,t.data!==e&&(t.data=e)}function ct(t,e){t.value=e??""}function Pt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function yd(t,e,n){for(let i=0;i<t.options.length;i+=1){let l=t.options[i];if(l.__value===e){l.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Rg(t){let e=t.querySelector(":checked");return e&&e.__value}function ie(t,e,n){t.classList.toggle(e,!!n)}function Ro(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}var Li=class{is_svg=!1;e=void 0;n=void 0;t=void 0;a=void 0;constructor(e=!1){this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=Bo(n.nodeName):this.e=p(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)s(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(o)}};function jg(t){let e={};return t.childNodes.forEach(n=>{e[n.slot||"default"]=!0}),e}function Di(t,e){return new t(e)}var ha=new Map,ga=0;function T2(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function M2(t,e){let n={stylesheet:Fg(e),rules:{}};return ha.set(t,n),n}function Wi(t,e,n,i,l,r,a,u=0){let m=16.666/i,f=`{
`;for(let k=0;k<=1;k+=m){let _=e+(n-e)*r(k);f+=k*100+`%{${a(_,1-_)}}
`}let c=f+`100% {${a(n,1-n)}}
}`,g=`__svelte_${T2(c)}_${u}`,b=wd(t),{stylesheet:h,rules:v}=ha.get(b)||M2(b,t);v[g]||(v[g]=!0,h.insertRule(`@keyframes ${g} ${c}`,h.cssRules.length));let w=t.style.animation||"";return t.style.animation=`${w?`${w}, `:""}${g} ${i}ms linear ${l}ms 1 both`,ga+=1,g}function Vi(t,e){let n=(t.style.animation||"").split(", "),i=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),l=n.length-i.length;l&&(t.style.animation=i.join(", "),ga-=l,ga||E2())}function E2(){Fo(()=>{ga||(ha.forEach(t=>{let{ownerNode:e}=t.stylesheet;e&&o(e)}),ha.clear())})}function ba(t,e,n,i){if(!e)return Le;let l=t.getBoundingClientRect();if(e.left===l.left&&e.right===l.right&&e.top===l.top&&e.bottom===l.bottom)return Le;let{delay:r=0,duration:a=300,easing:u=Si,start:m=go()+r,end:f=m+a,tick:c=Le,css:g}=n(t,{from:e,to:l},i),b=!0,h=!1,v;function w(){g&&(v=Wi(t,0,1,a,r,u,g)),r||(h=!0)}function k(){g&&Vi(t,v),b=!1}return _o(_=>{if(!h&&_>=m&&(h=!0),h&&_>=f&&(c(1,0),k()),!b)return!1;if(h){let M=_-m,O=0+1*u(M/a);c(O,1-O)}return!0}),w(),c(0,1),k}function _a(t){let e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){let{width:n,height:i}=e,l=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,jo(t,l)}}function jo(t,e){let n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){let i=getComputedStyle(t),l=i.transform==="none"?"":i.transform;t.style.transform=`${l} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}var Ai;function _i(t){Ai=t}function Ii(){if(!Ai)throw new Error("Function called outside component initialization");return Ai}function kd(t){Ii().$$.before_update.push(t)}function Nt(t){Ii().$$.on_mount.push(t)}function Cn(t){Ii().$$.after_update.push(t)}function on(t){Ii().$$.on_destroy.push(t)}function rt(){let t=Ii();return(e,n,{cancelable:i=!1}={})=>{let l=t.$$.callbacks[e];if(l){let r=Ro(e,n,{cancelable:i});return l.slice().forEach(a=>{a.call(t,r)}),!r.defaultPrevented}return!0}}function Td(t,e){return Ii().$$.context.set(t,e),e}function Md(t){return Ii().$$.context.get(t)}function Qe(t,e){let n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}var Ui=[];var _e=[],$o=[],Cd=[],C2=Promise.resolve(),Sd=!1;function zg(){Sd||(Sd=!0,C2.then(Mt))}function en(t){$o.push(t)}function Ue(t){Cd.push(t)}var Ed=new Set,vo=0;function Mt(){if(vo!==0)return;let t=Ai;do{try{for(;vo<Ui.length;){let e=Ui[vo];vo++,_i(e),S2(e.$$)}}catch(e){throw Ui.length=0,vo=0,e}for(_i(null),Ui.length=0,vo=0;_e.length;)_e.pop()();for(let e=0;e<$o.length;e+=1){let n=$o[e];Ed.has(n)||(Ed.add(n),n())}$o.length=0}while(Ui.length);for(;Cd.length;)Cd.pop()();Sd=!1,Ed.clear(),_i(t)}function S2(t){if(t.fragment!==null){t.update(),Re(t.before_update);let e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(en)}}function Wg(t){let e=[],n=[];$o.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),$o=e}var zo;function Ld(){return zo||(zo=Promise.resolve(),zo.then(()=>{zo=null})),zo}function Yi(t,e,n){t.dispatchEvent(Ro(`${e?"intro":"outro"}${n}`))}var va=new Set,si;function We(){si={r:0,c:[],p:si}}function Ve(){si.r||Re(si.c),si=si.p}function $(t,e){t&&t.i&&(va.delete(t),t.i(e))}function y(t,e,n,i){if(t&&t.o){if(va.has(t))return;va.add(t),si.c.push(()=>{va.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}var Dd={duration:0};function wo(t,e,n){let i={direction:"in"},l=e(t,n,i),r=!1,a,u,m=0;function f(){a&&Vi(t,a)}function c(){let{delay:b=0,duration:h=300,easing:v=Si,tick:w=Le,css:k}=l||Dd;k&&(a=Wi(t,0,1,h,b,v,k,m++)),w(0,1);let _=go()+b,M=_+h;u&&u.abort(),r=!0,en(()=>Yi(t,!0,"start")),u=_o(O=>{if(r){if(O>=M)return w(1,0),Yi(t,!0,"end"),f(),r=!1;if(O>=_){let D=v((O-_)/h);w(D,1-D)}}return r})}let g=!1;return{start(){g||(g=!0,Vi(t),_t(l)?(l=l(i),Ld().then(c)):c())},invalidate(){g=!1},end(){r&&(f(),r=!1)}}}function yo(t,e,n){let i={direction:"out"},l=e(t,n,i),r=!0,a,u=si;u.r+=1;let m;function f(){let{delay:c=0,duration:g=300,easing:b=Si,tick:h=Le,css:v}=l||Dd;v&&(a=Wi(t,1,0,g,c,b,v));let w=go()+c,k=w+g;en(()=>Yi(t,!1,"start")),"inert"in t&&(m=t.inert,t.inert=!0),_o(_=>{if(r){if(_>=k)return h(0,1),Yi(t,!1,"end"),--u.r||Re(u.c),!1;if(_>=w){let M=b((_-w)/g);h(1-M,M)}}return r})}return _t(l)?Ld().then(()=>{l=l(i),f()}):f(),{end(c){c&&"inert"in t&&(t.inert=m),c&&l.tick&&l.tick(1,0),r&&(a&&Vi(t,a),r=!1)}}}function Ad(t,e,n,i){let r=e(t,n,{direction:"both"}),a=i?0:1,u=null,m=null,f=null,c;function g(){f&&Vi(t,f)}function b(v,w){let k=v.b-a;return w*=Math.abs(k),{a,b:v.b,d:k,duration:w,start:v.start,end:v.start+w,group:v.group}}function h(v){let{delay:w=0,duration:k=300,easing:_=Si,tick:M=Le,css:O}=r||Dd,D={start:go()+w,b:v};v||(D.group=si,si.r+=1),"inert"in t&&(v?c!==void 0&&(t.inert=c):(c=t.inert,t.inert=!0)),u||m?m=D:(O&&(g(),f=Wi(t,a,v,k,w,_,O)),v&&M(0,1),u=b(D,k),en(()=>Yi(t,v,"start")),_o(L=>{if(m&&L>m.start&&(u=b(m,k),m=null,Yi(t,u.b,"start"),O&&(g(),f=Wi(t,a,u.b,u.duration,0,_,r.css))),u){if(L>=u.end)M(a=u.b,1-a),Yi(t,u.b,"end"),m||(u.b?g():--u.group.r||Re(u.group.c)),u=null;else if(L>=u.start){let T=L-u.start;a=u.a+u.d*_(T/u.duration),M(a,1-a)}}return!!(u||m)}))}return{run(v){_t(r)?Ld().then(()=>{r=r({direction:v?"in":"out"}),h(v)}):h(v)},end(){g(),u=m=null}}}function Ye(t){return t?.length!==void 0?t:Array.from(t)}function Vg(t,e){t.d(1),e.delete(t.key)}function Wo(t,e){y(t,1,1,()=>{e.delete(t.key)})}function $a(t,e){t.f(),Wo(t,e)}function li(t,e,n,i,l,r,a,u,m,f,c,g){let b=t.length,h=r.length,v=b,w={};for(;v--;)w[t[v].key]=v;let k=[],_=new Map,M=new Map,O=[];for(v=h;v--;){let A=g(l,r,v),H=n(A),I=a.get(H);I?i&&O.push(()=>I.p(A,e)):(I=f(H,A),I.c()),_.set(H,k[v]=I),H in w&&M.set(H,Math.abs(v-w[H]))}let D=new Set,L=new Set;function T(A){$(A,1),A.m(u,c),a.set(A.key,A),c=A.first,h--}for(;b&&h;){let A=k[h-1],H=t[b-1],I=A.key,P=H.key;A===H?(c=A.first,b--,h--):_.has(P)?!a.has(I)||D.has(I)?T(A):L.has(P)?b--:M.get(I)>M.get(P)?(L.add(I),T(A)):(D.add(P),b--):(m(H,a),b--)}for(;b--;){let A=t[b];_.has(A.key)||m(A,a)}for(;h;)T(k[h-1]);return Re(O),k}function jt(t,e){let n={},i={},l={$$scope:1},r=t.length;for(;r--;){let a=t[r],u=e[r];if(u){for(let m in a)m in u||(i[m]=1);for(let m in u)l[m]||(n[m]=u[m],l[m]=1);t[r]=u}else for(let m in a)l[m]=1}for(let a in i)a in n||(n[a]=void 0);return n}function ko(t){return typeof t=="object"&&t!==null?t:{}}var L2=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"],D2=new Set([...L2]);function Ge(t,e,n){let i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function S(t){t&&t.c()}function E(t,e,n){let{fragment:i,after_update:l}=t.$$;i&&i.m(e,n),en(()=>{let r=t.$$.on_mount.map(_d).filter(_t);t.$$.on_destroy?t.$$.on_destroy.push(...r):Re(r),t.$$.on_mount=[]}),l.forEach(en)}function C(t,e){let n=t.$$;n.fragment!==null&&(Wg(n.after_update),Re(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function I2(t,e){t.$$.dirty[0]===-1&&(Ui.push(t),zg(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function de(t,e,n,i,l,r,a=null,u=[-1]){let m=Ai;_i(t);let f=t.$$={fragment:null,ctx:[],props:r,update:Le,not_equal:l,bound:ma(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(m?m.$$.context:[])),callbacks:ma(),dirty:u,skip_bound:!1,root:e.target||m.$$.root};a&&a(f.root);let c=!1;if(f.ctx=n?n(t,e.props||{},(g,b,...h)=>{let v=h.length?h[0]:b;return f.ctx&&l(f.ctx[g],f.ctx[g]=v)&&(!f.skip_bound&&f.bound[g]&&f.bound[g](v),c&&I2(t,g)),b}):[],f.update(),c=!0,Re(f.before_update),f.fragment=i?i(f.ctx):!1,e.target){if(e.hydrate){Pg();let g=Bg(e.target);f.fragment&&f.fragment.l(g),g.forEach(o)}else f.fragment&&f.fragment.c();e.intro&&$(t.$$.fragment),E(t,e.target,e.anchor),Ng(),Mt()}_i(m)}var O2;typeof HTMLElement=="function"&&(O2=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;constructor(t,e,n){super(),this.$$ctor=t,this.$$s=e,n&&this.attachShadow({mode:"open"})}addEventListener(t,e,n){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(e),this.$$c){let i=this.$$c.$on(t,e);this.$$l_u.set(e,i)}super.addEventListener(t,e,n)}removeEventListener(t,e,n){if(super.removeEventListener(t,e,n),this.$$c){let i=this.$$l_u.get(e);i&&(i(),this.$$l_u.delete(e))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(l){return()=>{let r;return{c:function(){r=p("slot"),l!=="default"&&x(r,"name",l)},m:function(m,f){s(m,r,f)},d:function(m){m&&o(r)}}}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;let e={},n=jg(this);for(let l of this.$$s)l in n&&(e[l]=[t(l)]);for(let l of this.attributes){let r=this.$$g_p(l.name);r in this.$$d||(this.$$d[r]=Id(r,l.value,this.$$p_d,"toProp"))}for(let l in this.$$p_d)!(l in this.$$d)&&this[l]!==void 0&&(this.$$d[l]=this[l],delete this[l]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:e,$$scope:{ctx:[]}}});let i=()=>{this.$$r=!0;for(let l in this.$$p_d)if(this.$$d[l]=this.$$c.$$.ctx[this.$$c.$$.props[l]],this.$$p_d[l].reflect){let r=Id(l,this.$$d[l],this.$$p_d,"toAttribute");r==null?this.removeAttribute(this.$$p_d[l].attribute||l):this.setAttribute(this.$$p_d[l].attribute||l,r)}this.$$r=!1};this.$$c.$$.after_update.push(i),i();for(let l in this.$$l)for(let r of this.$$l[l]){let a=this.$$c.$on(l,r);this.$$l_u.set(r,a)}this.$$l={}}}attributeChangedCallback(t,e,n){this.$$r||(t=this.$$g_p(t),this.$$d[t]=Id(t,n,this.$$p_d,"toProp"),this.$$c?.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(t){return Object.keys(this.$$p_d).find(e=>this.$$p_d[e].attribute===t||!this.$$p_d[e].attribute&&e.toLowerCase()===t)||t}});function Id(t,e,n,i){let l=n[t]?.type;if(e=l==="Boolean"&&typeof e!="boolean"?e!=null:e,!i||!n[t])return e;if(i==="toAttribute")switch(l){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(l){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}var fe=class{$$=void 0;$$set=void 0;$destroy(){C(this,1),this.$destroy=Le}$on(e,n){if(!_t(n))return Le;let i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{let l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(e){this.$$set&&!Lg(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}};var Ug="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ug);function x2(t){let e,n,i,l,r,a=t[4].default,u=Dt(a,t,t[3],null);return{c(){e=p("div"),n=p("div"),i=p("div"),u&&u.c(),x(i,"class","button-group-inner"),x(i,"role","group"),x(n,"class","button-group-scroller"),x(e,"class",l="button-group "+t[1]),ie(e,"round",t[2])},m(m,f){s(m,e,f),q(e,n),q(n,i),u&&u.m(i,null),t[5](e),r=!0},p(m,[f]){u&&u.p&&(!r||f&8)&&It(u,a,m,m[3],r?At(a,m[3],f,null):Ot(m[3]),null),(!r||f&2&&l!==(l="button-group "+m[1]))&&x(e,"class",l),(!r||f&6)&&ie(e,"round",m[2])},i(m){r||($(u,m),r=!0)},o(m){y(u,m),r=!1},d(m){m&&o(e),u&&u.d(m),t[5](null)}}}function H2(t,e,n){let{$$slots:i={},$$scope:l}=e,{class:r=""}=e,{round:a=void 0}=e,{element:u=void 0}=e;function m(f){_e[f?"unshift":"push"](()=>{u=f,n(0,u)})}return t.$$set=f=>{"class"in f&&n(1,r=f.class),"round"in f&&n(2,a=f.round),"element"in f&&n(0,u=f.element),"$$scope"in f&&n(3,l=f.$$scope)},[u,r,a,l,i,m]}var Od=class extends fe{constructor(e){super(),de(this,e,H2,x2,me,{class:1,round:2,element:0})}},jn=Od;var P2='<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-',N2="/></svg>",Vo={adjustments:'adjustments-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="14" cy="6" r="2"/><line x1="4" y1="6" x2="12" y2="6"/><line x1="16" y1="6" x2="20" y2="6"/><circle cx="8" cy="12" r="2"/><line x1="4" y1="12" x2="6" y2="12"/><line x1="10" y1="12" x2="20" y2="12"/><circle cx="17" cy="18" r="2"/><line x1="4" y1="18" x2="15" y2="18"/><line x1="19" y1="18" x2="20" y2="18"',alert:'alert-triangle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 9v2m0 4v.01"/><path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75"',apps:'apps"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="4" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/><line x1="14" y1="7" x2="20" y2="7"/><line x1="17" y1="4" x2="17" y2="10"',archive:'archive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="3" y="4" width="18" height="4" rx="2"/><path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10"/><line x1="10" y1="12" x2="14" y2="12"',arrowLeft:'arrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="5" y1="12" x2="19" y2="12"/><line x1="5" y1="12" x2="11" y2="18"/><line x1="5" y1="12" x2="11" y2="6"',arrowNarrowDown:'arrow-narrow-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="12" y1="5" x2="12" y2="19"/><line x1="16" y1="15" x2="12" y2="19"/><line x1="8" y1="15" x2="12" y2="19"',arrowNarrowUp:'arrow-narrow-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="12" y1="5" x2="12" y2="19"/><line x1="16" y1="9" x2="12" y2="5"/><line x1="8" y1="9" x2="12" y2="5"',arrowRight:'arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="5" y1="12" x2="19" y2="12"/><line x1="13" y1="18" x2="19" y2="12"/><line x1="13" y1="6" x2="19" y2="12"',bank:'building-bank"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="3" y1="21" x2="21" y2="21"/><line x1="3" y1="10" x2="21" y2="10"/><polyline points="5 6 12 3 19 6"/><line x1="4" y1="10" x2="4" y2="21"/><line x1="20" y1="10" x2="20" y2="21"/><line x1="8" y1="14" x2="8" y2="17"/><line x1="12" y1="14" x2="12" y2="17"/><line x1="16" y1="14" x2="16" y2="17"',basket:'basket"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="7 10 12 4 17 10" /><path d="M21 10l-2 8a2 2.5 0 0 1 -2 2h-10a2 2.5 0 0 1 -2 -2l-2 -8z" /><circle cx="12" cy="15" r="2" ',bell:'bell"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"/><path d="M9 17v1a3 3 0 0 0 6 0v-1"',book:'book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><line x1="3" y1="6" x2="3" y2="19"/><line x1="12" y1="6" x2="12" y2="19"/><line x1="21" y1="6" x2="21" y2="19"',bookmark:'bookmark"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2"',calculator:'calculator"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="4" y="3" width="16" height="18" rx="2"/><rect x="8" y="7" width="8" height="3" rx="1"/><line x1="8" y1="14" x2="8" y2="14.01"/><line x1="12" y1="14" x2="12" y2="14.01"/><line x1="16" y1="14" x2="16" y2="14.01"/><line x1="8" y1="17" x2="8" y2="17.01"/><line x1="12" y1="17" x2="12" y2="17.01"/><line x1="16" y1="17" x2="16" y2="17.01"',calendar:'calendar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="4" y="5" width="16" height="16" rx="2"/><line x1="16" y1="3" x2="16" y2="7"/><line x1="8" y1="3" x2="8" y2="7"/><line x1="4" y1="11" x2="20" y2="11"/><line x1="11" y1="15" x2="12" y2="15"/><line x1="12" y1="15" x2="12" y2="18"',cart:'shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="6" cy="19" r="2" /><circle cx="17" cy="19" r="2" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" ',cash:'cash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="7" y="9" width="14" height="10" rx="2"/><circle cx="14" cy="14" r="2"/><path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2"',chartLine:'line-chart"><path d="M1.66162313,21 L22,21 M1.66162313,21 L1.66162313,1 M4.38166815,17.7623829 L7.91691553,8.62488914 L12.6112769,11.5868912 L17.3056383,4.18188618 L20.9636681,7.82869207"',chartPie:'chart-pie"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-6.8a2 2 0 0 1 -2 -2v-7a0.9 .9 0 0 0 -1 -.8"/><path d="M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a1 1 0 0 1 -1 -1v-4.5"',check:'check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10"',checkbox:'square"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="4" y="4" width="16" height="16" rx="2"',checkboxChecked:'square-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 12l2 2l4 -4"',checkCircle:'circle-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M9 12l2 2l4 -4" ',checklist:'list-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3.5 5.5l1.5 1.5l2.5 -2.5"/><path d="M3.5 11.5l1.5 1.5l2.5 -2.5"/><path d="M3.5 17.5l1.5 1.5l2.5 -2.5"/><line x1="11" y1="6" x2="20" y2="6"/><line x1="11" y1="12" x2="20" y2="12"/><line x1="11" y1="18" x2="20" y2="18"',chevronLeft:'chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="15 6 9 12 15 18"',chevronRight:'chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="9 6 15 12 9 18"',circle:'circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" ',clock:'clock-hour-3"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M12 12h3.5"/><path d="M12 7v5"',close:'x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"',cog:'settings"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"/><circle cx="12" cy="12" r="3"',coin:'coin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="9" /><path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1 -1.8 -1" /><path d="M12 6v2m0 8v2" ',copy:'copy"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" ',dots:'dots"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"',edit:'edit"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"/><path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"/><line x1="16" y1="5" x2="19" y2="8"',envelope:'mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="3" y="5" width="18" height="14" rx="2" /><polyline points="3 7 12 13 21 7" ',error:'alert-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"',eye:'eye"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="2"/><path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"',eyeOff:'eye-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="3" y1="3" x2="21" y2="21"/><path d="M10.584 10.587a2 2 0 0 0 2.828 2.83"/><path d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341"',filter:'filter"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5.5 5h13a1 1 0 0 1 .5 1.5l-5 5.5l0 7l-4 -3l0 -4l-5 -5.5a1 1 0 0 1 .5 -1.5"',folder:'folder"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2"',help:'help"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="9"/><line x1="12" y1="17" x2="12" y2="17.01"/><path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"',home:'home"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="5 12 3 12 12 3 21 12 19 12"/><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"/><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"',info:'info-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12.01" y2="8"/><polyline points="11 12 12 12 12 16 13 16"',link:'link"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"/><path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"',list:'list"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="9" y1="6" x2="20" y2="6"/><line x1="9" y1="12" x2="20" y2="12"/><line x1="9" y1="18" x2="20" y2="18"/><line x1="5" y1="6" x2="5" y2="6.01"/><line x1="5" y1="12" x2="5" y2="12.01"/><line x1="5" y1="18" x2="5" y2="18.01"',logout:'logout"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"/><path d="M7 12h14l-3 -3m0 6l3 -3"',math:'math-symbols"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="12" y1="3" x2="12" y2="21"/><line x1="16.5" y1="4.5" x2="19.5" y2="7.5"/><line x1="19.5" y1="4.5" x2="16.5" y2="7.5"/><line x1="6" y1="4" x2="6" y2="8"/><line x1="4" y1="6" x2="8" y2="6"/><line x1="18" y1="16" x2="18.01" y2="16"/><line x1="18" y1="20" x2="18.01" y2="20"/><line x1="4" y1="18" x2="8" y2="18"',meatballs:'dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/><circle cx="12" cy="5" r="1"',minusCircle:'circle-minus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="9"/><line x1="9" y1="12" x2="15" y2="12"',moon:'moon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" ',plus:'plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"',plusCircle:'circle-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="9"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="12" y1="9" x2="12" y2="15"',print:'printer"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" /><path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" /><path d="M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z" ',receipt:'receipt"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2"',redo:'corner-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 18v-6a3 3 0 0 1 3 -3h10l-4 -4m0 8l4 -4" ',refresh:'refresh"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"/><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"',repeat:'repeat"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3"/><path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3"',reportAnalytics:'file-analytics"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/><line x1="9" y1="17" x2="9" y2="12"/><line x1="12" y1="17" x2="12" y2="16"/><line x1="15" y1="17" x2="15" y2="14"',reportMoney:'report-money"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"/><rect x="9" y="3" width="6" height="4" rx="2"/><path d="M14 11h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"/><path d="M12 17v1m0 -8v1"',search:'search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="10" cy="10" r="7"/><line x1="21" y1="21" x2="15" y2="15"',shared:'share"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><line x1="8.7" y1="10.7" x2="15.3" y2="7.3"/><line x1="8.7" y1="13.3" x2="15.3" y2="16.7"',sidebarLeft:'layout-sidebar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="4" x2="9" y2="20"',sidebarRight:'layout-sidebar-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="15" y1="4" x2="15" y2="20"',sortAsc:'sort-ascending"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="4" y1="6" x2="11" y2="6"/><line x1="4" y1="12" x2="11" y2="12"/><line x1="4" y1="18" x2="13" y2="18"/><polyline points="15 9 18 6 21 9"/><line x1="18" y1="6" x2="18" y2="18"',sortDesc:'sort-descending"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="4" y1="6" x2="13" y2="6"/><line x1="4" y1="12" x2="11" y2="12"/><line x1="4" y1="18" x2="11" y2="18"/><polyline points="15 15 18 18 21 15"/><line x1="18" y1="6" x2="18" y2="18"',split:'arrows-split-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 17h-5.397a5 5 0 0 1 -4.096 -2.133l-.514 -.734a5 5 0 0 0 -4.096 -2.133h-3.897"/><path d="M21 7h-5.395a5 5 0 0 0 -4.098 2.135l-.51 .73a5 5 0 0 1 -4.097 2.135h-3.9"/><path d="M18 10l3 -3l-3 -3"/><path d="M18 20l3 -3l-3 -3"',star:'star"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" ',sun:' brightness-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M12 5l0 -2" /><path d="M17 7l1.4 -1.4" /><path d="M19 12l2 0" /><path d="M17 17l1.4 1.4" /><path d="M12 19l0 2" /><path d="M7 17l-1.4 1.4" /><path d="M6 12l-2 0" /><path d="M7 7l-1.4 -1.4" ',tag:'tag"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 3l9 9a1.5 1.5 0 0 1 0 2l-6 6a1.5 1.5 0 0 1 -2 0l-9 -9v-4a4 4 0 0 1 4 -4h4"/><circle cx="9" cy="9" r="2"',trash:'trash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="4" y1="7" x2="20" y2="7"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"',undo:'corner-up-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 18v-6a3 3 0 0 0 -3 -3h-10l4 -4m0 8l-4 -4" ',user:'user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="7" r="4"/><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"',users:'users"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M21 21v-2a4 4 0 0 0 -3 -3.85"'},Yg={add:"plus",report:"reportAnalytics",success:"checkCircle",warning:"alert"},Gi={};function Ki(t){return t in Yg&&(t=Yg[t]),t in Gi?Gi[t]:t in Vo?P2+Vo[t]+N2:`<svg width="20" height="20" title="${t}"></svg>`}function Gg(t,e){Gi[t]||(Gi[t]=e)}function F2(t){let e,n;return{c(){e=new Li(!1),n=Tt(),e.a=n},m(i,l){e.m(t[0],i,l),s(i,n,l)},p(i,[l]){l&1&&e.p(i[0])},i:Le,o:Le,d(i){i&&(o(n),e.d())}}}function q2(t,e,n){let i,{name:l=""}=e;return t.$$set=r=>{"name"in r&&n(1,l=r.name)},t.$$.update=()=>{t.$$.dirty&2&&n(0,i=Ki(l))},[i,l]}var xd=class extends fe{constructor(e){super(),de(this,e,q2,F2,me,{name:1})}},zt=xd;function Kg(t){let e,n;return e=new zt({props:{name:t[10]}}),{c(){S(e.$$.fragment)},m(i,l){E(e,i,l),n=!0},p(i,l){let r={};l&1024&&(r.name=i[10]),e.$set(r)},i(i){n||($(e.$$.fragment,i),n=!0)},o(i){y(e.$$.fragment,i),n=!1},d(i){C(e,i)}}}function B2(t){let e,n,i,l,r,a,u,m=t[10]&&Kg(t),f=t[17].default,c=Dt(f,t,t[16],null),g=[{type:i=t[6]?"submit":"button"},{class:l="button "+t[12]},t[15]],b={};for(let h=0;h<g.length;h+=1)b=tt(b,g[h]);return{c(){e=p("button"),m&&m.c(),n=d(),c&&c.c(),Ct(e,b),ie(e,"button-normal",!t[8]&&!t[9]&&!t[7]),ie(e,"button-outline",t[7]),ie(e,"button-link",t[8]),ie(e,"button-text",t[9]),ie(e,"button-has-text",t[14].default),ie(e,"round",t[11]),ie(e,"info",t[1]),ie(e,"success",t[2]),ie(e,"warning",t[3]),ie(e,"danger",t[4]),ie(e,"error",t[5]),ie(e,"touching",t[13])},m(h,v){s(h,e,v),m&&m.m(e,null),q(e,n),c&&c.m(e,null),e.autofocus&&e.focus(),t[26](e),r=!0,a||(u=[ye(e,"focus",t[18]),ye(e,"keydown",t[19]),ye(e,"mousedown",t[20]),ye(e,"mouseup",t[21]),ye(e,"mouseover",t[22]),ye(e,"mouseout",t[23]),ye(e,"mousemove",t[24]),ye(e,"touchstart",t[27],{passive:!0}),ye(e,"touchend",t[28],{passive:!0}),ye(e,"click",t[25])],a=!0)},p(h,[v]){h[10]?m?(m.p(h,v),v&1024&&$(m,1)):(m=Kg(h),m.c(),$(m,1),m.m(e,n)):m&&(We(),y(m,1,1,()=>{m=null}),Ve()),c&&c.p&&(!r||v&65536)&&It(c,f,h,h[16],r?At(f,h[16],v,null):Ot(h[16]),null),Ct(e,b=jt(g,[(!r||v&64&&i!==(i=h[6]?"submit":"button"))&&{type:i},(!r||v&4096&&l!==(l="button "+h[12]))&&{class:l},v&32768&&h[15]])),ie(e,"button-normal",!h[8]&&!h[9]&&!h[7]),ie(e,"button-outline",h[7]),ie(e,"button-link",h[8]),ie(e,"button-text",h[9]),ie(e,"button-has-text",h[14].default),ie(e,"round",h[11]),ie(e,"info",h[1]),ie(e,"success",h[2]),ie(e,"warning",h[3]),ie(e,"danger",h[4]),ie(e,"error",h[5]),ie(e,"touching",h[13])},i(h){r||($(m),$(c,h),r=!0)},o(h){y(m),y(c,h),r=!1},d(h){h&&o(e),m&&m.d(),c&&c.d(h),t[26](null),a=!1,Re(u)}}}function R2(t,e,n){let i=["element","info","success","warning","danger","error","submit","outline","link","text","icon","round","class"],l=kt(e,i),{$$slots:r={},$$scope:a}=e,u=da(r),{element:m=void 0}=e,{info:f=!1}=e,{success:c=!1}=e,{warning:g=!1}=e,{danger:b=!1}=e,{error:h=!1}=e,{submit:v=!1}=e,{outline:w=!1}=e,{link:k=!1}=e,{text:_=!1}=e,{icon:M=void 0}=e,{round:O=void 0}=e,{class:D=""}=e,L=!1;function T(z){Qe.call(this,t,z)}function A(z){Qe.call(this,t,z)}function H(z){Qe.call(this,t,z)}function I(z){Qe.call(this,t,z)}function P(z){Qe.call(this,t,z)}function N(z){Qe.call(this,t,z)}function j(z){Qe.call(this,t,z)}function K(z){Qe.call(this,t,z)}function U(z){_e[z?"unshift":"push"](()=>{m=z,n(0,m)})}let G=()=>n(13,L=!0),F=()=>n(13,L=!1);return t.$$set=z=>{e=tt(tt({},e),Zt(z)),n(15,l=kt(e,i)),"element"in z&&n(0,m=z.element),"info"in z&&n(1,f=z.info),"success"in z&&n(2,c=z.success),"warning"in z&&n(3,g=z.warning),"danger"in z&&n(4,b=z.danger),"error"in z&&n(5,h=z.error),"submit"in z&&n(6,v=z.submit),"outline"in z&&n(7,w=z.outline),"link"in z&&n(8,k=z.link),"text"in z&&n(9,_=z.text),"icon"in z&&n(10,M=z.icon),"round"in z&&n(11,O=z.round),"class"in z&&n(12,D=z.class),"$$scope"in z&&n(16,a=z.$$scope)},[m,f,c,g,b,h,v,w,k,_,M,O,D,L,u,l,a,r,T,A,H,I,P,N,j,K,U,G,F]}var Hd=class extends fe{constructor(e){super(),de(this,e,R2,B2,me,{element:0,info:1,success:2,warning:3,danger:4,error:5,submit:6,outline:7,link:8,text:9,icon:10,round:11,class:12})}},De=Hd;var To=[];function Yn(t,e=Le){let n,i=new Set;function l(u){if(me(t,u)&&(t=u,n)){let m=!To.length;for(let f of i)f[1](),To.push(f,t);if(m){for(let f=0;f<To.length;f+=2)To[f][0](To[f+1]);To.length=0}}}function r(u){l(u(t))}function a(u,m=Le){let f=[u,m];return i.add(f),i.size===1&&(n=e(l,r)||Le),u(t),()=>{i.delete(f),i.size===0&&n&&(n(),n=null)}}return{set:l,update:r,subscribe:a}}var Xi=["a[href]:not([disabled])","button:not([disabled])","iframe:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","[contentEditable]","[tabindex]:not(.focus-trap)"].join(","),sn=Yn(300),Pd=Yn(!1),Xg=t=>sn.set(!t||t.matches?0:200),Zg=t=>Pd.set(t&&t.matches);if(window.matchMedia){let t=window.matchMedia("(prefers-reduced-motion: reduce)");Xg(t),t.addEventListener("change",Xg);let e=window.matchMedia("(prefers-color-scheme: dark)");Zg(e),e.addEventListener("change",Zg)}function wa(t,e,n,i={}){let l={duration:ho(sn),easing:"ease-out",fill:"forwards"},r=Object.assign({},l,i);return new Promise(a=>{requestAnimationFrame(()=>{let u=t.animate([e,n],r);u.oncancel=a,u.onfinish=a})})}function Qg(t,e=160){return wa(t,{opacity:1},{opacity:.5},{duration:e/2,fill:"backwards"})}function Uo(t){return structuredClone(t)}function Mo(t,e=300){let n;return(...i)=>{n&&clearTimeout(n),n=setTimeout(()=>t.apply(this,i),e)}}function ya(t,e=300){let n=0;return(...i)=>{let l=new Date().getTime();if(!(l-n<e))return n=l,t(...i)}}function e1(t="",e=""){if(e.length===0)return!0;if(t.length===0||e.length>t.length)return!1;if(e===t)return!0;t=t.toLowerCase(),e=e.toLowerCase();let n=-1;for(let i of e)if(!~(n=t.indexOf(i,n+1)))return!1;return!0}function Xe(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{let e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})}function Oi(t){return t.type.includes("touch")?t.changedTouches[0].clientX:t.clientX}function Yo(t){return t.type.includes("touch")?t.changedTouches[0].clientY:t.clientY}function Gn(){let t=navigator.userAgent,e=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;return!!(e.test(t)||(e=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i,e.test(t.slice(0,4))))}function j2(t,e){if(e in t)return t[e]}function z2(t,e){let n={};return e.forEach(i=>{i in t&&(n[i]=t[i])}),n}function t1(t,e){return t?Array.isArray(e)?z2(t,e):j2(t,e):{}}function n1(t,e=2){let n=Math.pow(10,e);return Math.round(t*n)/n}function W2(t){let e=t.getFullYear(),n=("0"+(t.getMonth()+1)).slice(-2),i=("0"+t.getDate()).slice(-2),l=("0"+t.getHours()).slice(-2),r=("0"+t.getMinutes()).slice(-2);return`${e}-${n}-${i} ${l}:${r}`}function Nd(t,e){if(!t)return"";e=e||new Date().getTime();let n=(e-+t)/1e3,i=[{label:"year",seconds:31536e3},{label:"month",seconds:2592e3},{label:"day",seconds:86400},{label:"hour",seconds:3600},{label:"minute",seconds:60}],l=[];for(;n>60;){let r=i.find(u=>u.seconds<n)||{seconds:0,label:""},a=Math.floor(n/(r.seconds||n));l.push(`${a} ${r.label}${a!==1?"s":""}`),n-=a*(r.seconds||n)}return l.length?l.length===1?l[0]+" ago":W2(t):"just now"}function xi({element:t,target:e,alignH:n="left",offsetH:i=0,alignV:l="bottom",offsetV:r=2,viewportPadding:a=10,setMinWidthToTarget:u=!1}){if(!t||!e)return;let m=window.visualViewport.height||window.innerHeight,f=window.visualViewport.width||window.innerWidth,c={},g,b;e instanceof Event&&(e.type==="contextmenu"||e.type==="longpress")?(e.type==="contextmenu"?c={top:e.y,left:e.x}:e.type==="longpress"&&(c={top:e.detail.y,left:e.detail.x}),c.height=0,c.width=0):e.type==="click"?c=e.target.getBoundingClientRect():c=e.getBoundingClientRect(),g=c.top+c.height+r,b=c.left+i,n==="right"?b+=c.width-t.offsetWidth:n==="center"&&(b=(c.width-t.offsetWidth)/2+c.left),t.style.top=g+window.scrollY+"px",t.style.left=b+window.scrollX+"px",u&&(t.style.minWidth=c.width+"px");let h=c.top-a,v=m-c.top-c.height-a;t.style.maxHeight=Math.max(h,v)+"px";let w=t.getBoundingClientRect();(l==="top"&&h>w.height||v<w.height)&&(g=m-w.height-a,(l==="top"||g<w.y)&&(g=c.top-w.height-r),t.style.top=g+window.scrollY+"px");let k=n==="center"?a*2:a;return f<w.x+w.width+k&&(b=f-w.width-k,b<0&&(b=a),b=b+window.scrollX),w.x<a&&(b=a+window.scrollX),t.style.left=b+"px",t.style.maxWidth=`calc(100% - ${b+a}px)`,t.style.setProperty("--tip-offset",V2(c,t)),g>c.top?"bottom":"top"}function V2(t,e){let n=e.getBoundingClientRect(),i=t.left+t.width/2,l=n.left+n.width/2,r=n.width?n.width/100:1,a=50+(i-l)/r,u=Math.max(8,Math.min(93,a));return`${Math.round(u*r-1)}px`}function Jg(t){let e=getComputedStyle(t,null),n=e.overflowX||e.overflow;return/(auto|scroll)/.test(n)?t.scrollWidth>t.clientWidth:!1}function i1(t){if(t instanceof HTMLElement||t instanceof SVGElement){if(Jg(t))return!0;for(;t=t.parentElement;)if(Jg(t))return!0;return!1}}function Go(t){if(t=t[0]==="#"?t.slice(1):t,t.length===3&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),t.length!==6)return!1;let e=parseInt(t.substring(0,2),16),n=parseInt(t.substring(2,4),16),i=parseInt(t.substring(4,6),16);if(isNaN(e)||isNaN(n)||isNaN(i))return!1;let l=(e*299+n*587+i*114)/1e3;return isNaN(l)?!1:l<140}var U2=t=>({}),o1=t=>({});function Y2(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_=t[16].default,M=Dt(_,t,t[15],null),O=t[16].footer,D=Dt(O,t,t[15],o1);return{c(){e=p("div"),n=p("div"),i=p("div"),l=d(),r=p("h1"),a=ne(t[3]),u=d(),m=p("div"),M&&M.c(),f=d(),c=p("div"),D&&D.c(),g=d(),b=p("div"),x(i,"tabindex","0"),x(i,"class","focus-trap focus-trap-top"),x(r,"class","dialog-header"),x(m,"class","dialog-content"),x(c,"class","dialog-footer"),x(b,"tabindex","0"),x(b,"class","focus-trap focus-trap-bottom"),x(n,"class","dialog"),ie(n,"no-title",!t[3]),x(e,"role","dialog"),x(e,"aria-modal","true"),x(e,"aria-label",t[3]),x(e,"class",h="dialog-backdrop "+t[2]),ie(e,"opened",t[0])},m(L,T){s(L,e,T),q(e,n),q(n,i),q(n,l),q(n,r),q(r,a),q(n,u),q(n,m),M&&M.m(m,null),t[17](m),q(n,f),q(n,c),D&&D.m(c,null),t[18](c),q(n,g),q(n,b),t[19](n),t[20](e),v=!0,w||(k=[ye(i,"focus",t[8]),ye(b,"focus",t[7]),ye(e,"mousedown",t[9]),ye(e,"click",t[10])],w=!0)},p(L,[T]){(!v||T&8)&&je(a,L[3]),M&&M.p&&(!v||T&32768)&&It(M,_,L,L[15],v?At(_,L[15],T,null):Ot(L[15]),null),D&&D.p&&(!v||T&32768)&&It(D,O,L,L[15],v?At(O,L[15],T,U2):Ot(L[15]),o1),(!v||T&8)&&ie(n,"no-title",!L[3]),(!v||T&8)&&x(e,"aria-label",L[3]),(!v||T&4&&h!==(h="dialog-backdrop "+L[2]))&&x(e,"class",h),(!v||T&5)&&ie(e,"opened",L[0])},i(L){v||($(M,L),$(D,L),v=!0)},o(L){y(M,L),y(D,L),v=!1},d(L){L&&o(e),M&&M.d(L),t[17](null),D&&D.d(L),t[18](null),t[19](null),t[20](null),w=!1,Re(k)}}}function G2(t,e){let i={ArrowLeft:"nextElementSibling",ArrowRight:"previousElementSibling"}[e],l=t[i];for(;l&&l.tagName!=="BUTTON";)l=l[i];l&&l.focus()}function K2(t,e,n){let i;un(t,sn,z=>n(25,i=z));let{$$slots:l={},$$scope:r}=e,{class:a=""}=e,{title:u=""}=e,{opened:m=!1}=e,{skipFirstFocus:f=!1}=e,{modal:c=!1}=e,{element:g}=e,b=rt(),h,v,w,k,_,M,O;Nt(()=>{document.body.appendChild(g)});function D(){let z=T().shift(),V=T().pop();!z&&!V&&(v.setAttribute("tabindex",0),z=v),V&&V.scrollIntoView({block:"end"}),z&&z.focus()}function L(){let z=T().shift(),V=T().pop();!z&&!V&&(v.setAttribute("tabindex",0),V=v),z&&z.scrollIntoView({block:"end"}),V&&V.focus()}function T(){let z=Array.from(v.querySelectorAll(Xi)),V=Array.from(w.querySelectorAll(Xi));return[...z,...V]}function A(z){c&&(z.stopPropagation(),z.preventDefault())}function H(z){!h.contains(z.target)&&!c&&(z.stopPropagation(),j())}function I(z){if(!m)return;let V=g.contains(document.activeElement);if(z.key==="Tab"&&!V)return D();if(z.key==="Escape"&&!c)return z.stopPropagation(),j();let Q=z.target?.closest("button");Q&&(z.key==="ArrowLeft"||z.key==="ArrowRight")&&G2(Q,z.key)}function P(z){z?(O=window.scrollY,document.body.classList.add("has-dialog"),document.body.style.top=`-${O}px`):(document.body.classList.remove("has-dialog"),document.scrollingElement.scrollTop=O,document.body.style.top="")}function N(z){m||(z instanceof Event&&(z=z.target),k=z||document.activeElement,k&&k!==document.body&&(k.setAttribute("aria-haspopup","true"),k.setAttribute("aria-expanded","true")),n(1,g.style.display="flex",g),_&&clearTimeout(_),_=setTimeout(()=>{n(0,m=!0),n(1,g.style.display="flex",g),f!==!0&&f!=="true"&&D(),document.addEventListener("keydown",I),P(!0),b("open")},100))}function j(){m&&(n(0,m=!1),k&&k.focus&&k.focus(),M&&clearTimeout(M),M=setTimeout(()=>{n(0,m=!1),n(1,g.style.display="none",g),document.removeEventListener("keydown",I),k&&k!==document.body&&k.removeAttribute("aria-expanded"),P(!1),b("close")},i))}function K(z){_e[z?"unshift":"push"](()=>{v=z,n(5,v)})}function U(z){_e[z?"unshift":"push"](()=>{w=z,n(6,w)})}function G(z){_e[z?"unshift":"push"](()=>{h=z,n(4,h)})}function F(z){_e[z?"unshift":"push"](()=>{g=z,n(1,g)})}return t.$$set=z=>{"class"in z&&n(2,a=z.class),"title"in z&&n(3,u=z.title),"opened"in z&&n(0,m=z.opened),"skipFirstFocus"in z&&n(11,f=z.skipFirstFocus),"modal"in z&&n(12,c=z.modal),"element"in z&&n(1,g=z.element),"$$scope"in z&&n(15,r=z.$$scope)},[m,g,a,u,h,v,w,D,L,A,H,f,c,N,j,r,l,K,U,G,F]}var Fd=class extends fe{constructor(e){super(),de(this,e,K2,Y2,me,{class:2,title:3,opened:0,skipFirstFocus:11,modal:12,element:1,open:13,close:14})}get class(){return this.$$.ctx[2]}set class(e){this.$$set({class:e}),Mt()}get title(){return this.$$.ctx[3]}set title(e){this.$$set({title:e}),Mt()}get opened(){return this.$$.ctx[0]}set opened(e){this.$$set({opened:e}),Mt()}get skipFirstFocus(){return this.$$.ctx[11]}set skipFirstFocus(e){this.$$set({skipFirstFocus:e}),Mt()}get modal(){return this.$$.ctx[12]}set modal(e){this.$$set({modal:e}),Mt()}get element(){return this.$$.ctx[1]}set element(e){this.$$set({element:e}),Mt()}get open(){return this.$$.ctx[13]}get close(){return this.$$.ctx[14]}},vi=Fd;function Ko(t){let e=t-1;return e*e*e+1}function Zi(t,{delay:e=0,duration:n=400,easing:i=Ko,x:l=0,y:r=0,opacity:a=0}={}){let u=getComputedStyle(t),m=+u.opacity,f=u.transform==="none"?"":u.transform,c=m*(1-a),[g,b]=$d(l),[h,v]=$d(r);return{delay:e,duration:n,easing:i,css:(w,k)=>`
			transform: ${f} translate(${(1-w)*g}${b}, ${(1-w)*h}${v});
			opacity: ${m-c*k}`}}function s1({fallback:t,...e}){let n=new Map,i=new Map;function l(a,u,m){let{delay:f=0,duration:c=T=>Math.sqrt(T)*30,easing:g=Ko}=tt(tt({},e),m),b=a.getBoundingClientRect(),h=u.getBoundingClientRect(),v=b.left-h.left,w=b.top-h.top,k=b.width/h.width,_=b.height/h.height,M=Math.sqrt(v*v+w*w),O=getComputedStyle(u),D=O.transform==="none"?"":O.transform,L=+O.opacity;return{delay:f,duration:_t(c)?c(M):c,easing:g,css:(T,A)=>`
				opacity: ${T*L};
				transform-origin: top left;
<<<<<<< Updated upstream
				transform: ${D} translate(${A*v}px,${A*w}px) scale(${T+(1-T)*k}, ${T+(1-T)*_});
			`}}function r(a,u,m){return(f,c)=>(a.set(c.key,f),()=>{if(u.has(c.key)){let g=u.get(c.key);return u.delete(c.key),l(g,f,c)}return a.delete(c.key),t&&t(f,c,m)})}return[r(i,n,!1),r(n,i,!0)]}function l1(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O;m=new De({props:{round:!0,text:!0,icon:"close",class:"btn-close",title:"Close"}}),m.$on("click",t[3]);let D=t[13].default,L=Dt(D,t,t[12],null);return{c(){e=p("div"),n=p("div"),i=d(),l=p("header"),r=p("h2"),a=ne(t[2]),u=d(),S(m.$$.fragment),f=d(),c=p("div"),L&&L.c(),g=d(),b=p("div"),x(n,"tabindex","0"),x(n,"class","focus-trap focus-trap-top"),x(l,"class","drawer-header"),x(c,"class","drawer-content"),x(b,"tabindex","0"),x(b,"class","focus-trap focus-trap-bottom"),x(e,"class",h="drawer "+t[1]),x(e,"tabindex","-1")},m(T,A){s(T,e,A),q(e,n),q(e,i),q(e,l),q(l,r),q(r,a),q(l,u),E(m,l,null),t[14](l),q(e,f),q(e,c),L&&L.m(c,null),q(e,g),q(e,b),t[15](e),_=!0,M||(O=[ye(n,"focus",t[9]),ye(b,"focus",t[8]),Ig(v=t[7].call(null,e))],M=!0)},p(T,A){t=T,(!_||A&4)&&je(a,t[2]),L&&L.p&&(!_||A&4096)&&It(L,D,t,t[12],_?At(D,t[12],A,null):Ot(t[12]),null),(!_||A&2&&h!==(h="drawer "+t[1]))&&x(e,"class",h)},i(T){_||($(m.$$.fragment,T),$(L,T),T&&en(()=>{_&&(k&&k.end(1),w=wo(e,Zi,{x:300,duration:t[6]}),w.start())}),_=!0)},o(T){y(m.$$.fragment,T),y(L,T),w&&w.invalidate(),T&&(k=yo(e,Zi,{x:300,duration:t[6]?t[6]+100:0})),_=!1},d(T){T&&o(e),C(m),t[14](null),L&&L.d(T),t[15](null),T&&k&&k.end(),M=!1,Re(O)}}}function X2(t){let e,n,i=t[4]&&l1(t);return{c(){i&&i.c(),e=Tt()},m(l,r){i&&i.m(l,r),s(l,e,r),n=!0},p(l,[r]){l[4]?i?(i.p(l,r),r&16&&$(i,1)):(i=l1(l),i.c(),$(i,1),i.m(e.parentNode,e)):i&&(We(),y(i,1,1,()=>{i=null}),Ve())},i(l){n||($(i),n=!0)},o(l){y(i),n=!1},d(l){l&&o(e),i&&i.d(l)}}}function Z2(t,e,n){let i;un(t,sn,A=>n(6,i=A));let{$$slots:l={},$$scope:r}=e,{class:a=""}=e,{title:u="Drawer"}=e,{element:m=void 0}=e,f=rt(),c=!1,g,b;function h(){return requestAnimationFrame(()=>document.addEventListener("click",v)),{destroy:()=>document.removeEventListener("click",v)}}function v(A){m.contains(A.target)||c&&(A.preventDefault(),A.stopPropagation(),_())}function w(A){A&&(b=A),c?_():k(A)}function k(A){b=A||document.activeElement,n(4,c=!0),requestAnimationFrame(()=>g.querySelector(".btn-close").focus()),f("open")}function _(){n(4,c=!1),b&&b.focus(),f("close")}function M(){let A=D().shift(),H=D().pop();H&&H.scrollIntoView&&H.scrollIntoView({block:"end"}),A&&A.focus&&A.focus()}function O(){let A=D().shift(),H=D().pop();A&&A.scrollIntoView&&A.scrollIntoView({block:"end"}),H&&H.focus&&H.focus()}function D(){return Array.from(m.querySelectorAll(Xi))}function L(A){_e[A?"unshift":"push"](()=>{g=A,n(5,g)})}function T(A){_e[A?"unshift":"push"](()=>{m=A,n(0,m)})}return t.$$set=A=>{"class"in A&&n(1,a=A.class),"title"in A&&n(2,u=A.title),"element"in A&&n(0,m=A.element),"$$scope"in A&&n(12,r=A.$$scope)},[m,a,u,_,c,g,i,h,M,O,w,k,r,l,L,T]}var qd=class extends fe{constructor(e){super(),de(this,e,Z2,X2,me,{class:1,title:2,element:0,toggle:10,open:11,close:3})}get class(){return this.$$.ctx[1]}set class(e){this.$$set({class:e}),Mt()}get title(){return this.$$.ctx[2]}set title(e){this.$$set({title:e}),Mt()}get element(){return this.$$.ctx[0]}set element(e){this.$$set({element:e}),Mt()}get toggle(){return this.$$.ctx[10]}get open(){return this.$$.ctx[11]}get close(){return this.$$.ctx[3]}},Bd=qd;function r1(t){let e,n,i,l,r,a;return n=new zt({props:{name:t[4]}}),{c(){e=p("div"),S(n.$$.fragment),i=d(),l=p("p"),x(l,"id",t[2]),x(e,"class",r="info-bar info-bar-"+t[4]+" "+t[1])},m(u,m){s(u,e,m),E(n,e,null),q(e,i),q(e,l),l.innerHTML=t[3],t[5](e),a=!0},p(u,m){let f={};m&16&&(f.name=u[4]),n.$set(f),(!a||m&8)&&(l.innerHTML=u[3]),(!a||m&4)&&x(l,"id",u[2]),(!a||m&18&&r!==(r="info-bar info-bar-"+u[4]+" "+u[1]))&&x(e,"class",r)},i(u){a||($(n.$$.fragment,u),a=!0)},o(u){y(n.$$.fragment,u),a=!1},d(u){u&&o(e),C(n),t[5](null)}}}function J2(t){let e,n,i=t[3]&&r1(t);return{c(){i&&i.c(),e=Tt()},m(l,r){i&&i.m(l,r),s(l,e,r),n=!0},p(l,[r]){l[3]?i?(i.p(l,r),r&8&&$(i,1)):(i=r1(l),i.c(),$(i,1),i.m(e.parentNode,e)):i&&(We(),y(i,1,1,()=>{i=null}),Ve())},i(l){n||($(i),n=!0)},o(l){y(i),n=!1},d(l){l&&o(e),i&&i.d(l)}}}function Q2(t,e,n){let{class:i=""}=e,{element:l=void 0}=e,{id:r=void 0}=e,{msg:a=""}=e,{type:u="info"}=e;function m(f){_e[f?"unshift":"push"](()=>{l=f,n(0,l)})}return t.$$set=f=>{"class"in f&&n(1,i=f.class),"element"in f&&n(0,l=f.element),"id"in f&&n(2,r=f.id),"msg"in f&&n(3,a=f.msg),"type"in f&&n(4,u=f.type)},[l,i,r,a,u,m]}var Rd=class extends fe{constructor(e){super(),de(this,e,Q2,J2,me,{class:1,element:0,id:2,msg:3,type:4})}},Kn=Rd;function ev(t){let e,n,i;function l(a){t[4](a)}let r={class:t[1],id:t[2],msg:t[3],type:"error"};return t[0]!==void 0&&(r.element=t[0]),e=new Kn({props:r}),_e.push(()=>Ge(e,"element",l)),{c(){S(e.$$.fragment)},m(a,u){E(e,a,u),i=!0},p(a,[u]){let m={};u&2&&(m.class=a[1]),u&4&&(m.id=a[2]),u&8&&(m.msg=a[3]),!n&&u&1&&(n=!0,m.element=a[0],Ue(()=>n=!1)),e.$set(m)},i(a){i||($(e.$$.fragment,a),i=!0)},o(a){y(e.$$.fragment,a),i=!1},d(a){C(e,a)}}}function tv(t,e,n){let{class:i=""}=e,{element:l=void 0}=e,{id:r=void 0}=e,{msg:a=""}=e;function u(m){l=m,n(0,l)}return t.$$set=m=>{"class"in m&&n(1,i=m.class),"element"in m&&n(0,l=m.element),"id"in m&&n(2,r=m.id),"msg"in m&&n(3,a=m.msg)},[l,i,r,a,u]}var jd=class extends fe{constructor(e){super(),de(this,e,tv,ev,me,{class:1,element:0,id:2,msg:3})}},Xo=jd;function nv(t){let e,n,i;function l(a){t[4](a)}let r={class:t[1],id:t[2],msg:t[3],type:"info"};return t[0]!==void 0&&(r.element=t[0]),e=new Kn({props:r}),_e.push(()=>Ge(e,"element",l)),{c(){S(e.$$.fragment)},m(a,u){E(e,a,u),i=!0},p(a,[u]){let m={};u&2&&(m.class=a[1]),u&4&&(m.id=a[2]),u&8&&(m.msg=a[3]),!n&&u&1&&(n=!0,m.element=a[0],Ue(()=>n=!1)),e.$set(m)},i(a){i||($(e.$$.fragment,a),i=!0)},o(a){y(e.$$.fragment,a),i=!1},d(a){C(e,a)}}}function iv(t,e,n){let{class:i=""}=e,{element:l=void 0}=e,{id:r=void 0}=e,{msg:a=""}=e;function u(m){l=m,n(0,l)}return t.$$set=m=>{"class"in m&&n(1,i=m.class),"element"in m&&n(0,l=m.element),"id"in m&&n(2,r=m.id),"msg"in m&&n(3,a=m.msg)},[l,i,r,a,u]}var zd=class extends fe{constructor(e){super(),de(this,e,iv,nv,me,{class:1,element:0,id:2,msg:3})}},bt=zd;function ov(t){let e,n,i;function l(a){t[4](a)}let r={class:t[1],id:t[2],msg:t[3],type:"success"};return t[0]!==void 0&&(r.element=t[0]),e=new Kn({props:r}),_e.push(()=>Ge(e,"element",l)),{c(){S(e.$$.fragment)},m(a,u){E(e,a,u),i=!0},p(a,[u]){let m={};u&2&&(m.class=a[1]),u&4&&(m.id=a[2]),u&8&&(m.msg=a[3]),!n&&u&1&&(n=!0,m.element=a[0],Ue(()=>n=!1)),e.$set(m)},i(a){i||($(e.$$.fragment,a),i=!0)},o(a){y(e.$$.fragment,a),i=!1},d(a){C(e,a)}}}function sv(t,e,n){let{class:i=""}=e,{element:l=void 0}=e,{id:r=void 0}=e,{msg:a=""}=e;function u(m){l=m,n(0,l)}return t.$$set=m=>{"class"in m&&n(1,i=m.class),"element"in m&&n(0,l=m.element),"id"in m&&n(2,r=m.id),"msg"in m&&n(3,a=m.msg)},[l,i,r,a,u]}var Wd=class extends fe{constructor(e){super(),de(this,e,sv,ov,me,{class:1,element:0,id:2,msg:3})}},Vd=Wd;function lv(t){let e,n,i;function l(a){t[4](a)}let r={class:t[1],id:t[2],msg:t[3],type:"warning"};return t[0]!==void 0&&(r.element=t[0]),e=new Kn({props:r}),_e.push(()=>Ge(e,"element",l)),{c(){S(e.$$.fragment)},m(a,u){E(e,a,u),i=!0},p(a,[u]){let m={};u&2&&(m.class=a[1]),u&4&&(m.id=a[2]),u&8&&(m.msg=a[3]),!n&&u&1&&(n=!0,m.element=a[0],Ue(()=>n=!1)),e.$set(m)},i(a){i||($(e.$$.fragment,a),i=!0)},o(a){y(e.$$.fragment,a),i=!1},d(a){C(e,a)}}}function rv(t,e,n){let{class:i=""}=e,{element:l=void 0}=e,{id:r=void 0}=e,{msg:a=""}=e;function u(m){l=m,n(0,l)}return t.$$set=m=>{"class"in m&&n(1,i=m.class),"element"in m&&n(0,l=m.element),"id"in m&&n(2,r=m.id),"msg"in m&&n(3,a=m.msg)},[l,i,r,a,u]}var Ud=class extends fe{constructor(e){super(),de(this,e,rv,lv,me,{class:1,element:0,id:2,msg:3})}},Yd=Ud;function f1(t){let e=[],n={};t.forEach(l=>{if(!l.group)return e.push(l);n[l.group]=n[l.group]||{name:l.group,items:[]},n[l.group].items.push(l)});let i=Object.values(n).filter(l=>!!l.items.length);return e.length&&i.unshift({items:e}),i}function Zo(t){t&&requestAnimationFrame(()=>{let e=t.querySelector(".selected");if(!e||!t.scrollTo)return;let i=e.offsetTop-3;t.scrollTop>i?t.scrollTo({top:i}):(i=e.offsetTop+e.offsetHeight-t.offsetHeight+6,t.scrollTop<i&&t.scrollTo({top:i}))})}function m1(t,e){if(!e)return t;t=""+t;let n=0,i=t.toLowerCase();if(i.includes(e))return t.replace(new RegExp(`(${e})`,"ig"),"<b>$1</b>");let l=t.split("");e=e.toLowerCase();for(let r of e){n=i.indexOf(r,n);let a=l[n];a&&(l.splice(n,1,`<b>${a}</b>`),n+=1)}return l.join("")}function a1(t,e){t=t.id||t.name||t;let n=e.findIndex(i=>(i.id||i.name||i)===t);return e[n]}function Gd(t,e){return t&&(Array.isArray(t)?t.map(n=>a1(n,e)):a1(t,e))}function ka(t,e=!1){return e?(Array.isArray(t)||(t=[t]),t.map(n=>n.name||n).join(", ")):t?.name||t||""}function Ta(t,e,n){requestAnimationFrame(()=>{xi({element:t,target:e,setMinWidthToTarget:!0,offsetH:-1}),n&&n.type==="focus"&&e.select()})}function u1(t,e){return(t?.id||t?.name||t)!==(e?.id||e?.name||e)}function Kd(t,e,n=!1){if(!n)return u1(t,e);if(Array.isArray(t)||(t=[t]),Array.isArray(e)||(e=[e]),t.length!==e.length)return!0;for(let i=0;i<e.length;i++)if(u1(t[i],e[i]))return!0;return!1}function d1(t){let e,n,i,l;return n=new Xo({props:{id:t[1],msg:t[2]}}),{c(){e=p("div"),S(n.$$.fragment),x(e,"class","error-wrap")},m(r,a){s(r,e,a),E(n,e,null),t[8](e),l=!0},p(r,a){let u={};a&2&&(u.id=r[1]),a&4&&(u.msg=r[2]),n.$set(u)},i(r){l||($(n.$$.fragment,r),r&&en(()=>{l&&(i||(i=Ad(e,t[3],{},!0)),i.run(1))}),l=!0)},o(r){y(n.$$.fragment,r),r&&(i||(i=Ad(e,t[3],{},!1)),i.run(0)),l=!1},d(r){r&&o(e),C(n),t[8](null),r&&i&&i.end()}}}function av(t){let e,n,i=t[2]&&d1(t);return{c(){i&&i.c(),e=Tt()},m(l,r){i&&i.m(l,r),s(l,e,r),n=!0},p(l,[r]){l[2]?i?(i.p(l,r),r&4&&$(i,1)):(i=d1(l),i.c(),$(i,1),i.m(e.parentNode,e)):i&&(We(),y(i,1,1,()=>{i=null}),Ve())},i(l){n||($(i),n=!0)},o(l){y(i),n=!1},d(l){l&&o(e),i&&i.d(l)}}}function uv(t,e,n){let i,l,r,a;un(t,sn,v=>n(10,a=v));let{id:u=void 0}=e,{msg:m=""}=e,{element:f=void 0}=e,{animOffset:c=0}=e,{animOpacity:g=!1}=e;function b(v){let w=v.getBoundingClientRect().height;return{duration:a,css:k=>`height: ${k*w}px;`+(r?`opacity: ${k};`:"")+(l?`margin-bottom: ${k*i-i}px;`:"")}}function h(v){_e[v?"unshift":"push"](()=>{f=v,n(0,f)})}return t.$$set=v=>{"id"in v&&n(1,u=v.id),"msg"in v&&n(2,m=v.msg),"element"in v&&n(0,f=v.element),"animOffset"in v&&n(4,c=v.animOffset),"animOpacity"in v&&n(5,g=v.animOpacity)},t.$$.update=()=>{t.$$.dirty&16&&n(6,i=parseInt(c,10)||0),t.$$.dirty&64&&n(7,l=i>0),t.$$.dirty&160&&(r=g==="true"||g===!0||l)},[f,u,m,b,c,g,i,l,h]}var Xd=class extends fe{constructor(e){super(),de(this,e,uv,av,me,{id:1,msg:2,element:0,animOffset:4,animOpacity:5})}},$t=Xd;function c1(t){let e,n,i;return{c(){e=p("label"),n=ne(t[3]),x(e,"class",i="label "+t[1]),x(e,"for",t[2]),ie(e,"disabled",t[4])},m(l,r){s(l,e,r),q(e,n),t[5](e)},p(l,r){r&8&&je(n,l[3]),r&2&&i!==(i="label "+l[1])&&x(e,"class",i),r&4&&x(e,"for",l[2]),r&18&&ie(e,"disabled",l[4])},d(l){l&&o(e),t[5](null)}}}function fv(t){let e,n=t[3]&&c1(t);return{c(){n&&n.c(),e=Tt()},m(i,l){n&&n.m(i,l),s(i,e,l)},p(i,[l]){i[3]?n?n.p(i,l):(n=c1(i),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:Le,o:Le,d(i){i&&o(e),n&&n.d(i)}}}function mv(t,e,n){let{class:i=""}=e,{for:l=""}=e,{label:r=""}=e,{disabled:a=!1}=e,{element:u=void 0}=e;function m(f){_e[f?"unshift":"push"](()=>{u=f,n(0,u)})}return t.$$set=f=>{"class"in f&&n(1,i=f.class),"for"in f&&n(2,l=f.for),"label"in f&&n(3,r=f.label),"disabled"in f&&n(4,a=f.disabled),"element"in f&&n(0,u=f.element)},[u,i,l,r,a,m]}var Zd=class extends fe{constructor(e){super(),de(this,e,mv,fv,me,{class:1,for:2,label:3,disabled:4,element:0})}},vt=Zd;function p1(t,e,n){let i=t.slice();return i[74]=e[n],i}function h1(t,e,n){let i=t.slice();i[77]=e[n];let l=i[13]&&i[1].find(function(...a){return t[47](i[77],...a)});return i[78]=l,i}function g1(t){let e,n,i,l,r,a;function u(g,b){if(g[14].length)return cv;if(g[7])return dv}let m=u(t,[-1,-1,-1]),f=m&&m(t),c=t[20]&&y1(t);return{c(){e=p("div"),f&&f.c(),n=d(),c&&c.c(),x(e,"id",i="combobox-list-"+t[22]),x(e,"class",l="combobox-list "+(t[16]?"":"hidden")),x(e,"role","listbox"),ie(e,"multiselect",t[13]),ie(e,"empty",!t[14].length&&!t[20])},m(g,b){s(g,e,b),f&&f.m(e,null),q(e,n),c&&c.m(e,null),t[49](e),r||(a=ye(e,"mousedown",t[28]),r=!0)},p(g,b){m===(m=u(g,b))&&f?f.p(g,b):(f&&f.d(1),f=m&&m(g),f&&(f.c(),f.m(e,n))),g[20]?c?c.p(g,b):(c=y1(g),c.c(),c.m(e,null)):c&&(c.d(1),c=null),b[0]&65536&&l!==(l="combobox-list "+(g[16]?"":"hidden"))&&x(e,"class",l),b[0]&73728&&ie(e,"multiselect",g[13]),b[0]&1130496&&ie(e,"empty",!g[14].length&&!g[20])},d(g){g&&o(e),f&&f.d(),c&&c.d(),t[49](null),r=!1,a()}}}function dv(t){let e;return{c(){e=p("div"),e.textContent="No items found",x(e,"class","combobox-list-empty")},m(n,i){s(n,e,i)},p:Le,d(n){n&&o(e)}}}function cv(t){let e,n=Ye(t[18]),i=[];for(let l=0;l<n.length;l+=1)i[l]=w1(p1(t,n,l));return{c(){for(let l=0;l<i.length;l+=1)i[l].c();e=Tt()},m(l,r){for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(l,r);s(l,e,r)},p(l,r){if(r[0]&537272322){n=Ye(l[18]);let a;for(a=0;a<n.length;a+=1){let u=p1(l,n,a);i[a]?i[a].p(u,r):(i[a]=w1(u),i[a].c(),i[a].m(e.parentNode,e))}for(;a<i.length;a+=1)i[a].d(1);i.length=n.length}},d(l){l&&o(e),St(i,l)}}}function b1(t){let e,n=t[74].name+"",i;return{c(){e=p("div"),i=ne(n),x(e,"class","combobox-list-header")},m(l,r){s(l,e,r),q(e,i)},p(l,r){r[0]&262144&&n!==(n=l[74].name+"")&&je(i,n)},d(l){l&&o(e)}}}function _1(t){let e,n=Ye(t[74].items),i=[];for(let l=0;l<n.length;l+=1)i[l]=$1(h1(t,n,l));return{c(){for(let l=0;l<i.length;l+=1)i[l].c();e=Tt()},m(l,r){for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(l,r);s(l,e,r)},p(l,r){if(r[0]&537272322){n=Ye(l[74].items);let a;for(a=0;a<n.length;a+=1){let u=h1(l,n,a);i[a]?i[a].p(u,r):(i[a]=$1(u),i[a].c(),i[a].m(e.parentNode,e))}for(;a<i.length;a+=1)i[a].d(1);i.length=n.length}},d(l){l&&o(e),St(i,l)}}}function v1(t){let e,n,i;return{c(){e=Bo("svg"),n=Bo("rect"),i=Bo("path"),x(n,"x","4"),x(n,"y","4"),x(n,"width","16"),x(n,"height","16"),x(n,"rx","3"),x(i,"class","tick"),x(i,"d","M8 12l3 3l5.5 -5.5"),x(e,"xmlns","http://www.w3.org/2000/svg"),x(e,"viewBox","0 0 24 24"),x(e,"stroke-width","1.5"),x(e,"stroke","currentColor"),x(e,"fill","none"),x(e,"stroke-linecap","round"),x(e,"stroke-linejoin","round"),x(e,"class","icon icon-tabler icon-tabler-square-check")},m(l,r){s(l,e,r),q(e,n),q(e,i)},d(l){l&&o(e)}}}function $1(t){let e,n,i,l=(t[77].highlightedName||t[77].name)+"",r,a,u,m,f,c=t[13]&&v1(t);function g(...v){return t[44](t[77],...v)}function b(){return t[45](t[77])}function h(...v){return t[46](t[77],...v)}return{c(){e=p("div"),c&&c.c(),n=d(),i=p("span"),r=d(),x(e,"role","option"),x(e,"class","combobox-list-item"),x(e,"aria-selected",a=t[77].idx===t[17]),x(e,"aria-checked",u=t[78]),ie(e,"in-group",!!t[77].group),ie(e,"selected",t[77].idx===t[17]),ie(e,"checked",t[78])},m(v,w){s(v,e,w),c&&c.m(e,null),q(e,n),q(e,i),i.innerHTML=l,q(e,r),m||(f=[ye(e,"click",g),ye(e,"mouseenter",b),ye(e,"mousedown",Un(t[41])),ye(e,"mouseup",h),ye(e,"touchstart",hv),ye(e,"touchend",gv)],m=!0)},p(v,w){t=v,t[13]?c||(c=v1(t),c.c(),c.m(e,n)):c&&(c.d(1),c=null),w[0]&262144&&l!==(l=(t[77].highlightedName||t[77].name)+"")&&(i.innerHTML=l),w[0]&393216&&a!==(a=t[77].idx===t[17])&&x(e,"aria-selected",a),w[0]&270338&&u!==(u=t[78])&&x(e,"aria-checked",u),w[0]&262144&&ie(e,"in-group",!!t[77].group),w[0]&393216&&ie(e,"selected",t[77].idx===t[17]),w[0]&270338&&ie(e,"checked",t[78])},d(v){v&&o(e),c&&c.d(),m=!1,Re(f)}}}function w1(t){let e,n,i=t[74].name&&b1(t),l=t[74].items&&_1(t);return{c(){i&&i.c(),e=d(),l&&l.c(),n=Tt()},m(r,a){i&&i.m(r,a),s(r,e,a),l&&l.m(r,a),s(r,n,a)},p(r,a){r[74].name?i?i.p(r,a):(i=b1(r),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),r[74].items?l?l.p(r,a):(l=_1(r),l.c(),l.m(n.parentNode,n)):l&&(l.d(1),l=null)},d(r){r&&(o(e),o(n)),i&&i.d(r),l&&l.d(r)}}}function y1(t){let e,n,i,l,r,a,u;return{c(){e=p("div"),e.textContent="Create new item",n=d(),i=p("div"),l=ne(t[19]),x(e,"class","combobox-list-header"),x(i,"role","option"),x(i,"class","combobox-list-item"),x(i,"aria-selected",r=t[17]===t[14].length),ie(i,"selected",t[17]===t[14].length)},m(m,f){s(m,e,f),s(m,n,f),s(m,i,f),q(i,l),a||(u=ye(i,"click",t[48]),a=!0)},p(m,f){f[0]&524288&&je(l,m[19]),f[0]&147456&&r!==(r=m[17]===m[14].length)&&x(i,"aria-selected",r),f[0]&147456&&ie(i,"selected",m[17]===m[14].length)},d(m){m&&(o(e),o(n),o(i)),a=!1,u()}}}function pv(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O,D,L;n=new vt({props:{label:t[8],disabled:t[5],for:t[21]}}),l=new bt({props:{msg:t[10]}}),u=new $t({props:{id:t[23],msg:t[9]}}),c=new De({props:{link:!0,icon:"dots",class:"combobox-button",tabindex:"-1"}}),c.$on("mousedown",t[31]),c.$on("click",t[32]);let T=[{type:"text"},{role:"combobox"},{class:"prevent-scrolling-on-focus"},{"aria-autocomplete":"list"},{"aria-controls":h="combobox-list-"+t[22]},{"aria-expanded":t[16]},{"aria-invalid":t[9]},{"aria-errormessage":v=t[9]?t[23]:void 0},{"aria-required":t[6]},{autocomplete:"off"},{value:t[15]},{disabled:t[5]},{placeholder:w=t[13]&&t[16]?"Type to filter...":t[12]},{id:t[21]},t[33]],A={};for(let I=0;I<T.length;I+=1)A=tt(A,T[I]);let H=t[16]&&g1(t);return{c(){e=p("div"),S(n.$$.fragment),i=d(),S(l.$$.fragment),r=d(),a=p("div"),S(u.$$.fragment),m=d(),f=p("div"),S(c.$$.fragment),g=d(),b=p("input"),_=d(),H&&H.c(),M=Tt(),Ct(b,A),x(f,"class","input-row"),x(f,"title",t[15]),x(a,"class","input-inner"),ie(a,"disabled",t[5]),x(e,"class",k="input combobox "+t[4]),ie(e,"open",t[16]),ie(e,"has-error",t[9]),ie(e,"label-on-the-left",!!t[11]),ie(e,"multiselect",t[13])},m(I,P){s(I,e,P),E(n,e,null),q(e,i),E(l,e,null),q(e,r),q(e,a),E(u,a,null),q(a,m),q(a,f),E(c,f,null),q(f,g),q(f,b),"value"in A&&(b.value=A.value),b.autofocus&&b.focus(),t[42](b),t[43](e),s(I,_,P),H&&H.m(I,P),s(I,M,P),O=!0,D||(L=[ye(b,"input",t[26]),ye(b,"focus",t[25]),ye(b,"mousedown",t[24]),ye(b,"click",t[24]),ye(b,"blur",t[27]),ye(b,"keydown",t[30],!0)],D=!0)},p(I,P){let N={};P[0]&256&&(N.label=I[8]),P[0]&32&&(N.disabled=I[5]),P[0]&2097152&&(N.for=I[21]),n.$set(N);let j={};P[0]&1024&&(j.msg=I[10]),l.$set(j);let K={};P[0]&512&&(K.msg=I[9]),u.$set(K),Ct(b,A=jt(T,[{type:"text"},{role:"combobox"},{class:"prevent-scrolling-on-focus"},{"aria-autocomplete":"list"},{"aria-controls":h},(!O||P[0]&65536)&&{"aria-expanded":I[16]},(!O||P[0]&512)&&{"aria-invalid":I[9]},(!O||P[0]&512&&v!==(v=I[9]?I[23]:void 0))&&{"aria-errormessage":v},(!O||P[0]&64)&&{"aria-required":I[6]},{autocomplete:"off"},(!O||P[0]&32768&&b.value!==I[15])&&{value:I[15]},(!O||P[0]&32)&&{disabled:I[5]},(!O||P[0]&77824&&w!==(w=I[13]&&I[16]?"Type to filter...":I[12]))&&{placeholder:w},(!O||P[0]&2097152)&&{id:I[21]},P[1]&4&&I[33]])),"value"in A&&(b.value=A.value),(!O||P[0]&32768)&&x(f,"title",I[15]),(!O||P[0]&32)&&ie(a,"disabled",I[5]),(!O||P[0]&16&&k!==(k="input combobox "+I[4]))&&x(e,"class",k),(!O||P[0]&65552)&&ie(e,"open",I[16]),(!O||P[0]&528)&&ie(e,"has-error",I[9]),(!O||P[0]&2064)&&ie(e,"label-on-the-left",!!I[11]),(!O||P[0]&8208)&&ie(e,"multiselect",I[13]),I[16]?H?H.p(I,P):(H=g1(I),H.c(),H.m(M.parentNode,M)):H&&(H.d(1),H=null)},i(I){O||($(n.$$.fragment,I),$(l.$$.fragment,I),$(u.$$.fragment,I),$(c.$$.fragment,I),O=!0)},o(I){y(n.$$.fragment,I),y(l.$$.fragment,I),y(u.$$.fragment,I),y(c.$$.fragment,I),O=!1},d(I){I&&(o(e),o(_),o(M)),C(n),C(l),C(u),C(c),t[42](null),t[43](null),H&&H.d(I),D=!1,Re(L)}}}function hv(t){t.target.closest(".combobox-list-item").classList.add("blinking")}function gv(t){let e=t.target.closest(".combobox-list-item");requestAnimationFrame(()=>e.classList.remove("blinking"))}function bv(t,e,n){let i,l,r,a=["class","disabled","required","id","items","value","allowNew","clearOnEsc","showOnFocus","hideOnResize","label","error","info","labelOnTheLeft","placeholder","multiselect","selectedItems","element","inputElement","listElement"],u=kt(e,a),{class:m=""}=e,{disabled:f=!1}=e,{required:c=void 0}=e,{id:g=""}=e,{items:b=[]}=e,{value:h=null}=e,{allowNew:v=void 0}=e,{clearOnEsc:w=void 0}=e,{showOnFocus:k=void 0}=e,{hideOnResize:_=void 0}=e,{label:M=""}=e,{error:O=void 0}=e,{info:D=void 0}=e,{labelOnTheLeft:L=void 0}=e,{placeholder:T=void 0}=e,{multiselect:A=void 0}=e,{selectedItems:H=[]}=e,{element:I=void 0}=e,{inputElement:P=void 0}=e,{listElement:N=void 0}=e,j=rt(),K=Xe(),U=Xe(),G=ka(h,A),F=null,z=!1,V=!1,Q=0,le=[],ee=[],X="",Z=!0,ge=!1,he=!1,W="";on(()=>{N&&N.remove()}),Cn(()=>{!z&&b.length&&(F||(F=Uo(b)),b.length&&typeof b[0]=="string"&&n(34,b=b.map(Ee=>({name:Ee}))),Y(),ue())});function Y(){let Ee=Uo(b);if(V&&P.value){let Be=P.value.toLowerCase().trim();Ee=Ee.filter(ot=>e1(ot.name,Be)).map(ot=>(ot.highlightedName=m1(ot.name,Be),ot.score=1,ot.name.toLowerCase().includes(Be)&&(ot.score=2),ot.name.includes(Be)&&(ot.score=3),ot.name.toLowerCase()===Be&&(ot.score=4),ot.name===Be&&(ot.score=5),ot)).sort((ot,Ft)=>Ft.score-ot.score)}n(18,ee=f1(Ee));let qe=[],Ie=0;ee.forEach(Be=>{Be.items.forEach(ot=>{ot.idx=Ie++,qe.push(ot)})}),n(14,le=qe),n(17,Q=0),Zo(N),Ta(N,P)}function J(Ee){let qe=Ee?.type,Ie=Gn()&&qe==="click",Be=!Gn()&&qe==="mousedown",ot=qe==="typing";if(!(!Ie&&!Be&&!ot&&!(qe==="navigating"))){if(Be&&z)return pe();z||(n(16,z=!0),V=!1,A&&(ot||(n(0,P.value="",P),n(15,G="")),Y()),requestAnimationFrame(()=>{N&&N.parentElement!==document.body&&document.body.appendChild(N),ht(),Ta(N,P,Ee)}))}}function pe(){if(!z)return;at(),n(16,z=!1),ge=!1;let Ee=!P.value,qe=!A&&!v&&P.value!==G,Ie=A&&P.value!==G;(Ee||qe||Ie)&&ke()}function we(Ee){if(A||Z)return;let qe=Uo(h);Ee||(le[Q]?Ee=le[Q]:v?Ee={name:P.value}:h&&h.name&&P.value!==h.name&&n(15,G=h.name)),Ee&&(n(35,h=Gd(Ee,F)||Ee),h&&h.name&&P.value!==h.name&&n(15,G=Ee.name)),Z=!0,Kd(qe,h)&&j("change",{value:h,oldValue:qe}),requestAnimationFrame(()=>{P.select(),pe()})}function ve(Ee){let qe=Uo(h);n(1,H=H||[]);let Ie=Ee.id||Ee.name||Ee,Be=H.findIndex(ot=>(ot?.id||ot?.name||ot)===Ie);Be===-1?H.push(Ee):H.splice(Be,1),n(35,h=Gd(H,F)||[]),Kd(qe,h,!0)&&j("change",{value:h,oldValue:qe}),requestAnimationFrame(()=>P.select())}function ue(){if(!(!le||!le.length))if(A){h==null&&n(35,h=[]),Array.isArray(h)||n(35,h=[h]);let Ee=h.map(qe=>qe?.id||qe?.name||qe);n(1,H=F.filter(qe=>Ee.includes(qe.id||qe.name||qe))),z?n(15,G=""):n(15,G=ka(H,A))}else{let Ee=h?.id||h?.name||h;if(Ee){let qe=le.find(Ie=>(Ie.id||Ie.name||Ie)===Ee);qe&&(n(17,Q=qe.idx),n(0,P.value=le[Q].name,P)),Zo(N)}else n(0,P.value="",P)}}function se(){if(!z)return J({type:"navigating"});let Ee=Q-1;for(;Ee>0&&!le[Ee];)Ee-=1;Ee!==Q&&le[Ee]&&(n(17,Q=le[Ee].idx),Zo(N))}function xe(){if(!z)return J({type:"navigating"});let Ee=Q+1;for(;Ee<le.length-1&&!le[Ee];)Ee+=1;let qe=le[Ee];r&&Ee===le.length&&(qe={idx:le.length}),Ee!==Q&&qe&&(n(17,Q=qe.idx),Zo(N))}function ke(){A?n(0,P.value=n(15,G=ka(H,A)),P):X&&X!==P.value?n(0,P.value=X,P):h&&h.name?n(0,P.value=h.name,P):n(0,P.value="",P)}function ce(){n(0,P.value="",P),Y(),requestAnimationFrame(()=>P.select())}function be(){X=P.value,k&&J({type:"navigating"})}function Ae(){J({type:"typing"}),requestAnimationFrame(Y),V=!0,Z=!1,n(19,W=P.value)}function ae(){ge||pe()}function $e(){ge=!0}function re(Ee,qe){if(Gn()&&qe?.type!=="click")return qe.preventDefault();!Gn()&&qe?.type==="click"||(A?ve(Ee):(Z=!1,we(Ee)))}function oe(Ee){if(Ee.key==="Tab")return pe();let qe={ArrowDown:xe,ArrowUp:se,Escape:nt," ":Ke,Enter:Oe};typeof qe[Ee.key]=="function"&&(Ee.preventDefault(),qe[Ee.key](Ee))}function Oe(){if(!z)return J({type:"navigating"});A?(pe(),P.select()):(Z=!1,we())}function Ke(Ee){if(!A||!z)return;let qe=le[Q];re(qe,Ee)}function nt(Ee){if(w&&P.value)return Ee.stopPropagation(),ce();if(z)return Ee.stopPropagation(),ke(),P.select(),pe();j("keydown",Ee)}function it(){he=z}function lt(){he?pe():J({type:"navigating"}),he=!1,P&&P.select()}function Ce(){if(z&&!_)return P.blur(),pe()}function Ne(){z&&Ta(N,P)}function dt(Ee){let qe=I&&!I.contains(Ee.target),Ie=N&&!N.contains(Ee.target);J&&qe&&Ie&&pe()}function ht(){window.addEventListener("resize",Ce),document.addEventListener("click",dt,!0),window.visualViewport.addEventListener("resize",Ne)}function at(){window.removeEventListener("resize",Ce),document.removeEventListener("click",dt,!0),window.visualViewport.removeEventListener("resize",Ne)}function wt(Ee){Qe.call(this,t,Ee)}function Et(Ee){_e[Ee?"unshift":"push"](()=>{P=Ee,n(0,P)})}function yt(Ee){_e[Ee?"unshift":"push"](()=>{I=Ee,n(2,I)})}let gt=(Ee,qe)=>re(Ee,qe),Vt=Ee=>n(17,Q=Ee.idx),mt=(Ee,qe)=>re(Ee,qe),Ut=(Ee,qe)=>(qe.id||qe.name||qe)===(Ee.id||Ee.name||Ee),st=()=>re({name:W,idx:le.length});function xt(Ee){_e[Ee?"unshift":"push"](()=>{N=Ee,n(3,N)})}return t.$$set=Ee=>{e=tt(tt({},e),Zt(Ee)),n(33,u=kt(e,a)),"class"in Ee&&n(4,m=Ee.class),"disabled"in Ee&&n(5,f=Ee.disabled),"required"in Ee&&n(6,c=Ee.required),"id"in Ee&&n(36,g=Ee.id),"items"in Ee&&n(34,b=Ee.items),"value"in Ee&&n(35,h=Ee.value),"allowNew"in Ee&&n(7,v=Ee.allowNew),"clearOnEsc"in Ee&&n(37,w=Ee.clearOnEsc),"showOnFocus"in Ee&&n(38,k=Ee.showOnFocus),"hideOnResize"in Ee&&n(39,_=Ee.hideOnResize),"label"in Ee&&n(8,M=Ee.label),"error"in Ee&&n(9,O=Ee.error),"info"in Ee&&n(10,D=Ee.info),"labelOnTheLeft"in Ee&&n(11,L=Ee.labelOnTheLeft),"placeholder"in Ee&&n(12,T=Ee.placeholder),"multiselect"in Ee&&n(13,A=Ee.multiselect),"selectedItems"in Ee&&n(1,H=Ee.selectedItems),"element"in Ee&&n(2,I=Ee.element),"inputElement"in Ee&&n(0,P=Ee.inputElement),"listElement"in Ee&&n(3,N=Ee.listElement)},t.$$.update=()=>{t.$$.dirty[1]&32&&n(21,i=g||name||Xe()),t.$$.dirty[0]&16385&&n(40,l=le?.length&&le.find(Ee=>Ee.name===P.value)),t.$$.dirty[0]&129|t.$$.dirty[1]&512&&n(20,r=v&&P?.value&&!l)},[P,H,I,N,m,f,c,v,M,O,D,L,T,A,le,G,z,Q,ee,W,r,i,K,U,J,be,Ae,ae,$e,re,oe,it,lt,u,b,h,g,w,k,_,l,wt,Et,yt,gt,Vt,mt,Ut,st,xt]}var Jd=class extends fe{constructor(e){super(),de(this,e,bv,pv,me,{class:4,disabled:5,required:6,id:36,items:34,value:35,allowNew:7,clearOnEsc:37,showOnFocus:38,hideOnResize:39,label:8,error:9,info:10,labelOnTheLeft:11,placeholder:12,multiselect:13,selectedItems:1,element:2,inputElement:0,listElement:3},null,[-1,-1,-1])}},bn=Jd;function k1(t,e,n){let i=t.slice();return i[20]=e[n],i}function T1(t){let e,n;return e=new zt({props:{name:t[20].icon}}),{c(){S(e.$$.fragment)},m(i,l){E(e,i,l),n=!0},p(i,l){let r={};l&2048&&(r.name=i[20].icon),e.$set(r)},i(i){n||($(e.$$.fragment,i),n=!0)},o(i){y(e.$$.fragment,i),n=!1},d(i){C(e,i)}}}function M1(t){let e,n,i=(t[20].name||"")+"",l,r,a,u,m,f,c,g,b,h=t[20].icon&&T1(t);function v(...w){return t[17](t[20],...w)}return{c(){e=p("label"),h&&h.c(),n=d(),l=ne(i),r=d(),a=p("input"),f=d(),a.disabled=t[3],x(a,"name",t[5]),x(a,"type","radio"),a.checked=u=t[20].value===t[0],a.value=m=t[20].value,x(e,"disabled",t[3]),x(e,"class","button button-normal"),ie(e,"button-has-text",t[20].name)},m(w,k){s(w,e,k),h&&h.m(e,null),q(e,n),q(e,l),q(e,r),q(e,a),q(e,f),c=!0,g||(b=[ye(a,"change",v),ye(e,"click",vv)],g=!0)},p(w,k){t=w,t[20].icon?h?(h.p(t,k),k&2048&&$(h,1)):(h=T1(t),h.c(),$(h,1),h.m(e,n)):h&&(We(),y(h,1,1,()=>{h=null}),Ve()),(!c||k&2048)&&i!==(i=(t[20].name||"")+"")&&je(l,i),(!c||k&8)&&(a.disabled=t[3]),(!c||k&32)&&x(a,"name",t[5]),(!c||k&2049&&u!==(u=t[20].value===t[0]))&&(a.checked=u),(!c||k&2048&&m!==(m=t[20].value))&&(a.value=m),(!c||k&8)&&x(e,"disabled",t[3]),(!c||k&2048)&&ie(e,"button-has-text",t[20].name)},i(w){c||($(h),c=!0)},o(w){y(h),c=!1},d(w){w&&o(e),h&&h.d(),g=!1,Re(b)}}}function _v(t){let e,n,i,l,r,a,u,m,f,c,g,b,h;n=new vt({props:{label:t[7],disabled:t[3],for:t[12]}}),l=new bt({props:{msg:t[9]}}),u=new $t({props:{id:t[13],msg:t[8]}});let v=Ye(t[11]),w=[];for(let _=0;_<v.length;_+=1)w[_]=M1(k1(t,v,_));let k=_=>y(w[_],1,1,()=>{w[_]=null});return{c(){e=p("div"),S(n.$$.fragment),i=d(),S(l.$$.fragment),r=d(),a=p("div"),S(u.$$.fragment),m=d(),f=p("div"),c=p("div");for(let _=0;_<w.length;_+=1)w[_].c();x(c,"class","input-row"),x(c,"id",t[12]),x(f,"class","input-scroller"),x(a,"class","input-inner"),ie(a,"disabled",t[3]),x(e,"class",g="input button-toggle "+t[2]),x(e,"role","radiogroup"),x(e,"aria-invalid",t[8]),x(e,"aria-errormessage",b=t[8]?t[13]:void 0),x(e,"title",t[6]),ie(e,"round",t[4]),ie(e,"has-error",t[8]),ie(e,"label-on-the-left",t[10]===!0||t[10]==="true")},m(_,M){s(_,e,M),E(n,e,null),q(e,i),E(l,e,null),q(e,r),q(e,a),E(u,a,null),q(a,m),q(a,f),q(f,c);for(let O=0;O<w.length;O+=1)w[O]&&w[O].m(c,null);t[18](e),h=!0},p(_,[M]){let O={};M&128&&(O.label=_[7]),M&8&&(O.disabled=_[3]),M&4096&&(O.for=_[12]),n.$set(O);let D={};M&512&&(D.msg=_[9]),l.$set(D);let L={};if(M&256&&(L.msg=_[8]),u.$set(L),M&18473){v=Ye(_[11]);let T;for(T=0;T<v.length;T+=1){let A=k1(_,v,T);w[T]?(w[T].p(A,M),$(w[T],1)):(w[T]=M1(A),w[T].c(),$(w[T],1),w[T].m(c,null))}for(We(),T=v.length;T<w.length;T+=1)k(T);Ve()}(!h||M&4096)&&x(c,"id",_[12]),(!h||M&8)&&ie(a,"disabled",_[3]),(!h||M&4&&g!==(g="input button-toggle "+_[2]))&&x(e,"class",g),(!h||M&256)&&x(e,"aria-invalid",_[8]),(!h||M&256&&b!==(b=_[8]?_[13]:void 0))&&x(e,"aria-errormessage",b),(!h||M&64)&&x(e,"title",_[6]),(!h||M&20)&&ie(e,"round",_[4]),(!h||M&260)&&ie(e,"has-error",_[8]),(!h||M&1028)&&ie(e,"label-on-the-left",_[10]===!0||_[10]==="true")},i(_){if(!h){$(n.$$.fragment,_),$(l.$$.fragment,_),$(u.$$.fragment,_);for(let M=0;M<v.length;M+=1)$(w[M]);h=!0}},o(_){y(n.$$.fragment,_),y(l.$$.fragment,_),y(u.$$.fragment,_),w=w.filter(Boolean);for(let M=0;M<w.length;M+=1)y(w[M]);h=!1},d(_){_&&o(e),C(n),C(l),C(u),St(w,_),t[18](null)}}}function vv(t){let e=t.target&&t.target.querySelector("input");e&&(e.click(),e.focus())}function $v(t,e,n){let i,l,{class:r=""}=e,{disabled:a=void 0}=e,{round:u=void 0}=e,{items:m=""}=e,{id:f=""}=e,{name:c=Xe()}=e,{value:g=""}=e,{title:b=void 0}=e,{label:h=""}=e,{error:v=void 0}=e,{info:w=void 0}=e,{labelOnTheLeft:k=!1}=e,{element:_=void 0}=e,M=Xe(),O=rt();function D(A,H){if(H.value===g)return;let I=A.target&&A.target.closest("label");I&&I.scrollIntoView({block:"nearest",inline:"nearest"}),n(0,g=H.value),O("change",g)}let L=(A,H)=>D(H,A);function T(A){_e[A?"unshift":"push"](()=>{_=A,n(1,_)})}return t.$$set=A=>{"class"in A&&n(2,r=A.class),"disabled"in A&&n(3,a=A.disabled),"round"in A&&n(4,u=A.round),"items"in A&&n(15,m=A.items),"id"in A&&n(16,f=A.id),"name"in A&&n(5,c=A.name),"value"in A&&n(0,g=A.value),"title"in A&&n(6,b=A.title),"label"in A&&n(7,h=A.label),"error"in A&&n(8,v=A.error),"info"in A&&n(9,w=A.info),"labelOnTheLeft"in A&&n(10,k=A.labelOnTheLeft),"element"in A&&n(1,_=A.element)},t.$$.update=()=>{t.$$.dirty&65568&&n(12,i=f||c||Xe()),t.$$.dirty&32768&&n(11,l=m.map(A=>typeof A=="string"?{name:A,value:A}:A))},[g,_,r,a,u,c,b,h,v,w,k,l,i,M,D,m,f,L,T]}var Qd=class extends fe{constructor(e){super(),de(this,e,$v,_v,me,{class:2,disabled:3,round:4,items:15,id:16,name:5,value:0,title:6,label:7,error:8,info:9,labelOnTheLeft:10,element:1})}},Qt=Qd;function wv(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v;return n=new bt({props:{msg:t[8]}}),l=new $t({props:{id:t[15],msg:t[7],animOffset:"8"}}),c=new vt({props:{label:t[6],for:t[14]}}),{c(){e=p("div"),S(n.$$.fragment),i=d(),S(l.$$.fragment),r=d(),a=p("div"),u=p("input"),f=d(),S(c.$$.fragment),x(u,"type","checkbox"),x(u,"name",t[11]),x(u,"id",t[14]),u.disabled=t[5],x(u,"tabindex",t[10]),x(u,"aria-invalid",t[7]),x(u,"aria-errormessage",m=t[7]?t[15]:void 0),x(u,"aria-required",t[12]),(t[1]===void 0||t[0]===void 0)&&en(()=>t[19].call(u)),x(a,"class","checkbox-row"),x(e,"title",t[9]),x(e,"class",g="check-and-radio checkbox "+t[4]),ie(e,"indeterminate",t[0]),ie(e,"disabled",t[5]),ie(e,"has-error",t[7]),ie(e,"label-on-the-left",t[13]===!0||t[13]==="true")},m(w,k){s(w,e,k),E(n,e,null),q(e,i),E(l,e,null),q(e,r),q(e,a),q(a,u),t[18](u),u.checked=t[1],u.indeterminate=t[0],q(a,f),E(c,a,null),t[20](e),b=!0,h||(v=[ye(u,"change",t[19]),ye(u,"change",t[16])],h=!0)},p(w,[k]){let _={};k&256&&(_.msg=w[8]),n.$set(_);let M={};k&128&&(M.msg=w[7]),l.$set(M),(!b||k&2048)&&x(u,"name",w[11]),(!b||k&16384)&&x(u,"id",w[14]),(!b||k&32)&&(u.disabled=w[5]),(!b||k&1024)&&x(u,"tabindex",w[10]),(!b||k&128)&&x(u,"aria-invalid",w[7]),(!b||k&128&&m!==(m=w[7]?w[15]:void 0))&&x(u,"aria-errormessage",m),(!b||k&4096)&&x(u,"aria-required",w[12]),k&2&&(u.checked=w[1]),k&1&&(u.indeterminate=w[0]);let O={};k&64&&(O.label=w[6]),k&16384&&(O.for=w[14]),c.$set(O),(!b||k&512)&&x(e,"title",w[9]),(!b||k&16&&g!==(g="check-and-radio checkbox "+w[4]))&&x(e,"class",g),(!b||k&17)&&ie(e,"indeterminate",w[0]),(!b||k&48)&&ie(e,"disabled",w[5]),(!b||k&144)&&ie(e,"has-error",w[7]),(!b||k&8208)&&ie(e,"label-on-the-left",w[13]===!0||w[13]==="true")},i(w){b||($(n.$$.fragment,w),$(l.$$.fragment,w),$(c.$$.fragment,w),b=!0)},o(w){y(n.$$.fragment,w),y(l.$$.fragment,w),y(c.$$.fragment,w),b=!1},d(w){w&&o(e),C(n),C(l),t[18](null),C(c),t[20](null),h=!1,Re(v)}}}function yv(t,e,n){let i,{class:l=""}=e,{indeterminate:r=!1}=e,{checked:a=!1}=e,{disabled:u=!1}=e,{id:m=""}=e,{label:f=""}=e,{error:c=void 0}=e,{info:g=void 0}=e,{title:b=void 0}=e,{tabindex:h=void 0}=e,{name:v=""}=e,{required:w=void 0}=e,{labelOnTheLeft:k=!1}=e,{element:_=void 0}=e,{inputElement:M=void 0}=e,O=Xe(),D=rt();function L(I){n(1,a=I.target.checked),n(0,r=I.target.indeterminate),D("change",{event:I,checked:a,indeterminate:r})}function T(I){_e[I?"unshift":"push"](()=>{M=I,n(3,M)})}function A(){a=this.checked,r=this.indeterminate,n(1,a),n(0,r)}function H(I){_e[I?"unshift":"push"](()=>{_=I,n(2,_)})}return t.$$set=I=>{"class"in I&&n(4,l=I.class),"indeterminate"in I&&n(0,r=I.indeterminate),"checked"in I&&n(1,a=I.checked),"disabled"in I&&n(5,u=I.disabled),"id"in I&&n(17,m=I.id),"label"in I&&n(6,f=I.label),"error"in I&&n(7,c=I.error),"info"in I&&n(8,g=I.info),"title"in I&&n(9,b=I.title),"tabindex"in I&&n(10,h=I.tabindex),"name"in I&&n(11,v=I.name),"required"in I&&n(12,w=I.required),"labelOnTheLeft"in I&&n(13,k=I.labelOnTheLeft),"element"in I&&n(2,_=I.element),"inputElement"in I&&n(3,M=I.inputElement)},t.$$.update=()=>{t.$$.dirty&133120&&n(14,i=m||v||Xe())},[r,a,_,M,l,u,f,c,g,b,h,v,w,k,i,O,L,m,T,A,H]}var ec=class extends fe{constructor(e){super(),de(this,e,yv,wv,me,{class:4,indeterminate:0,checked:1,disabled:5,id:17,label:6,error:7,info:8,title:9,tabindex:10,name:11,required:12,labelOnTheLeft:13,element:2,inputElement:3})}},Xn=ec;function Eo(t){return t[t.length-1]}function $i(t,...e){return e.forEach(n=>{t.includes(n)||t.push(n)}),t}function tc(t,e){return t?t.split(e):[]}function Co(t,e,n){let i=e===void 0||t>=e,l=n===void 0||t<=n;return i&&l}function Ma(t,e,n){return t<e?e:t>n?n:t}function ri(t,e,n={},i=0,l=""){let r=Object.keys(n).reduce((u,m)=>{let f=n[m];return typeof f=="function"&&(f=f(i)),`${u} ${m}="${f}"`},t);l+=`<${r}></${t}>`;let a=i+1;return a<e?ri(t,e,n,a,l):l}function So(t){return t.replace(/>\s+/g,">").replace(/\s+</,"<")}function Ea(t){return new Date(t).setHours(0,0,0,0)}function zn(){return new Date().setHours(0,0,0,0)}function ai(...t){switch(t.length){case 0:return zn();case 1:return Ea(t[0])}let e=new Date(0);return e.setFullYear(...t),e.setHours(0,0,0,0)}function Ji(t,e){let n=new Date(t);return n.setDate(n.getDate()+e)}function C1(t,e){return Ji(t,e*7)}function Qi(t,e){let n=new Date(t),i=n.getMonth()+e,l=i%12;l<0&&(l+=12);let r=n.setMonth(i);return n.getMonth()!==l?n.setDate(0):r}function Pi(t,e){let n=new Date(t),i=n.getMonth(),l=n.setFullYear(n.getFullYear()+e);return i===1&&n.getMonth()===2?n.setDate(0):l}function E1(t,e){return(t-e+7)%7}function Hi(t,e,n=0){let i=new Date(t).getDay();return Ji(t,E1(e,n)-E1(i,n))}function S1(t,e){return Math.round((t-e)/6048e5)+1}function L1(t){let e=Hi(t,4,1),n=Hi(new Date(e).setMonth(0,4),4,1);return S1(e,n)}function D1(t,e){let n=Hi(new Date(t).setMonth(0,1),e,e),i=Hi(t,e,e),l=S1(i,n);if(l<53)return l;let r=Hi(new Date(t).setDate(32),e,e);return i===r?1:l}function A1(t){return D1(t,0)}function I1(t){return D1(t,6)}function eo(t,e){let n=new Date(t).getFullYear();return Math.floor(n/e)*e}function Sn(t,e,n){if(e!==1&&e!==2)return t;let i=new Date(t);return e===1?n?i.setMonth(i.getMonth()+1,0):i.setDate(1):n?i.setFullYear(i.getFullYear()+1,0,0):i.setMonth(0,1),i.setHours(0,0,0,0)}var Sa=/dd?|DD?|mm?|MM?|yy?(?:yy)?/,kv=/[\s!-/:-@[-`{-~年月日]+/,nc={},O1={y(t,e){return new Date(t).setFullYear(parseInt(e,10))},m(t,e,n){let i=new Date(t),l=parseInt(e,10)-1;if(isNaN(l)){if(!e)return NaN;let r=e.toLowerCase(),a=u=>u.toLowerCase().startsWith(r);if(l=n.monthsShort.findIndex(a),l<0&&(l=n.months.findIndex(a)),l<0)return NaN}return i.setMonth(l),i.getMonth()!==x1(l)?i.setDate(0):i.getTime()},d(t,e){return new Date(t).setDate(parseInt(e,10))}},Tv={d(t){return t.getDate()},dd(t){return Ca(t.getDate(),2)},D(t,e){return e.daysShort[t.getDay()]},DD(t,e){return e.days[t.getDay()]},m(t){return t.getMonth()+1},mm(t){return Ca(t.getMonth()+1,2)},M(t,e){return e.monthsShort[t.getMonth()]},MM(t,e){return e.months[t.getMonth()]},y(t){return t.getFullYear()},yy(t){return Ca(t.getFullYear(),2).slice(-2)},yyyy(t){return Ca(t.getFullYear(),4)}};function x1(t){return t>-1?t%12:x1(t+12)}function Ca(t,e){return t.toString().padStart(e,"0")}function H1(t){if(typeof t!="string")throw new Error("Invalid date format.");if(t in nc)return nc[t];let e=t.split(Sa),n=t.match(new RegExp(Sa,"g"));if(e.length===0||!n)throw new Error("Invalid date format.");let i=n.map(r=>Tv[r]),l=Object.keys(O1).reduce((r,a)=>(n.find(m=>m[0]!=="D"&&m[0].toLowerCase()===a)&&r.push(a),r),[]);return nc[t]={parser(r,a){let u=r.split(kv).reduce((m,f,c)=>{if(f.length>0&&n[c]){let g=n[c][0];g==="M"?m.m=f:g!=="D"&&(m[g]=f)}return m},{});return l.reduce((m,f)=>{let c=O1[f](m,u[f],a);return isNaN(c)?m:c},zn())},formatter(r,a){let u=i.reduce((m,f,c)=>m+=`${e[c]}${f(r,a)}`,"");return u+=Eo(e)}}}function wi(t,e,n){if(t instanceof Date||typeof t=="number"){let i=Ea(t);return isNaN(i)?void 0:i}if(t){if(t==="today")return zn();if(e&&e.toValue){let i=e.toValue(t,e,n);return isNaN(i)?void 0:Ea(i)}return H1(e).parser(t,n)}}function to(t,e,n){if(isNaN(t)||!t&&t!==0)return"";let i=typeof t=="number"?new Date(t):t;return e.toDisplay?e.toDisplay(i,e,n):H1(e).formatter(i,n)}var Mv=document.createRange();function dn(t){return Mv.createContextualFragment(t)}function ic(t){return t.parentElement||(t.parentNode instanceof ShadowRoot?t.parentNode.host:void 0)}function Ni(t){return t.getRootNode().activeElement===t}function no(t){t.style.display!=="none"&&(t.style.display&&(t.dataset.styleDisplay=t.style.display),t.style.display="none")}function io(t){t.style.display==="none"&&(t.dataset.styleDisplay?(t.style.display=t.dataset.styleDisplay,delete t.dataset.styleDisplay):t.style.display="")}function Jo(t){t.firstChild&&(t.removeChild(t.firstChild),Jo(t))}function P1(t,e){Jo(t),e instanceof DocumentFragment?t.appendChild(e):typeof e=="string"?t.appendChild(dn(e)):typeof e.forEach=="function"&&e.forEach(n=>{t.appendChild(n)})}var La=new WeakMap,{addEventListener:Ev,removeEventListener:Cv}=EventTarget.prototype;function Lo(t,e){let n=La.get(t);n||(n=[],La.set(t,n)),e.forEach(i=>{Ev.call(...i),n.push(i)})}function oc(t){let e=La.get(t);e&&(e.forEach(n=>{Cv.call(...n)}),La.delete(t))}if(!Event.prototype.composedPath){let t=(e,n=[])=>{n.push(e);let i;return e.parentNode?i=e.parentNode:e.host?i=e.host:e.defaultView&&(i=e.defaultView),i?t(i,n):n};Event.prototype.composedPath=function(){return t(this.target)}}function N1(t,e,n){let[i,...l]=t;if(e(i))return i;if(!(i===n||i.tagName==="HTML"||l.length===0))return N1(l,e,n)}function Da(t,e){let n=typeof e=="function"?e:i=>i instanceof Element&&i.matches(e);return N1(t.composedPath(),n,t.currentTarget)}var Do={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear",titleFormat:"MM y"}};var Qo={autohide:!1,beforeShowDay:null,beforeShowDecade:null,beforeShowMonth:null,beforeShowYear:null,clearButton:!1,dateDelimiter:",",datesDisabled:[],daysOfWeekDisabled:[],daysOfWeekHighlighted:[],defaultViewDate:void 0,disableTouchKeyboard:!1,enableOnReadonly:!0,format:"mm/dd/yyyy",language:"en",maxDate:null,maxNumberOfDates:1,maxView:3,minDate:null,nextArrow:"\xBB",orientation:"auto",pickLevel:0,prevArrow:"\xAB",showDaysOfWeek:!0,showOnClick:!0,showOnFocus:!0,startView:0,title:"",todayButton:!1,todayButtonMode:0,todayHighlight:!1,updateOnBlur:!0,weekNumbers:0,weekStart:0};var{language:sc,format:Sv,weekStart:Lv}=Qo;function F1(t,e){return t.length<6&&e>=0&&e<7?$i(t,e):t}function R1(t,e){switch(t===4?e===6?3:!e+1:t){case 1:return L1;case 2:return A1;case 3:return I1}}function q1(t,e,n){return e.weekStart=t,e.weekEnd=(t+6)%7,n===4&&(e.getWeekNumber=R1(4,t)),t}function B1(t,e,n,i){let l=wi(t,e,n);return l!==void 0?l:i}function lc(t,e,n=3){let i=parseInt(t,10);return i>=0&&i<=n?i:e}function Aa(t,e,n,i=void 0){e in t&&(n in t||(t[n]=i?i(t[e]):t[e]),delete t[e])}function es(t,e){let n=Object.assign({},t),i={},l=e.constructor.locales,r=!!e.rangeSideIndex,{datesDisabled:a,format:u,language:m,locale:f,maxDate:c,maxView:g,minDate:b,pickLevel:h,startView:v,weekNumbers:w,weekStart:k}=e.config||{};if(Aa(n,"calendarWeeks","weekNumbers",T=>T?1:0),Aa(n,"clearBtn","clearButton"),Aa(n,"todayBtn","todayButton"),Aa(n,"todayBtnMode","todayButtonMode"),n.language){let T;if(n.language!==m&&(l[n.language]?T=n.language:(T=n.language.split("-")[0],l[T]||(T=!1))),delete n.language,T){m=i.language=T;let A=f||l[sc];f=Object.assign({format:Sv,weekStart:Lv},l[sc]),m!==sc&&Object.assign(f,l[m]),i.locale=f,u===A.format&&(u=i.format=f.format),k===A.weekStart&&(k=q1(f.weekStart,i,w))}}if(n.format){let T=typeof n.format.toDisplay=="function",A=typeof n.format.toValue=="function",H=Sa.test(n.format);(T&&A||H)&&(u=i.format=n.format),delete n.format}let _=h;"pickLevel"in n&&(_=lc(n.pickLevel,h,2),delete n.pickLevel),_!==h&&(_>h&&("minDate"in n||(n.minDate=b),"maxDate"in n||(n.maxDate=c)),a&&!n.datesDisabled&&(n.datesDisabled=[]),h=i.pickLevel=_);let M=b,O=c;if("minDate"in n){let T=ai(0,0,1);M=n.minDate===null?T:B1(n.minDate,u,f,M),M!==T&&(M=Sn(M,h,!1)),delete n.minDate}if("maxDate"in n&&(O=n.maxDate===null?void 0:B1(n.maxDate,u,f,O),O!==void 0&&(O=Sn(O,h,!0)),delete n.maxDate),O<M?(b=i.minDate=O,c=i.maxDate=M):(b!==M&&(b=i.minDate=M),c!==O&&(c=i.maxDate=O)),n.datesDisabled){let T=n.datesDisabled;if(typeof T=="function")i.datesDisabled=null,i.checkDisabled=(A,H)=>T(new Date(A),H,r);else{let A=i.datesDisabled=T.reduce((H,I)=>{let P=wi(I,u,f);return P!==void 0?$i(H,Sn(P,h,r)):H},[]);i.checkDisabled=H=>A.includes(H)}delete n.datesDisabled}if("defaultViewDate"in n){let T=wi(n.defaultViewDate,u,f);T!==void 0&&(i.defaultViewDate=T),delete n.defaultViewDate}if("weekStart"in n){let T=Number(n.weekStart)%7;isNaN(T)||(k=q1(T,i,w)),delete n.weekStart}if(n.daysOfWeekDisabled&&(i.daysOfWeekDisabled=n.daysOfWeekDisabled.reduce(F1,[]),delete n.daysOfWeekDisabled),n.daysOfWeekHighlighted&&(i.daysOfWeekHighlighted=n.daysOfWeekHighlighted.reduce(F1,[]),delete n.daysOfWeekHighlighted),"weekNumbers"in n){let T=n.weekNumbers;if(T){let A=typeof T=="function"?(H,I)=>T(new Date(H),I):R1(T=parseInt(T,10),k);A&&(w=i.weekNumbers=T,i.getWeekNumber=A)}else w=i.weekNumbers=0,i.getWeekNumber=null;delete n.weekNumbers}if("maxNumberOfDates"in n){let T=parseInt(n.maxNumberOfDates,10);T>=0&&(i.maxNumberOfDates=T,i.multidate=T!==1),delete n.maxNumberOfDates}n.dateDelimiter&&(i.dateDelimiter=String(n.dateDelimiter),delete n.dateDelimiter);let D=g;"maxView"in n&&(D=lc(n.maxView,g),delete n.maxView),D=h>D?h:D,D!==g&&(g=i.maxView=D);let L=v;if("startView"in n&&(L=lc(n.startView,L),delete n.startView),L<h?L=h:L>g&&(L=g),L!==v&&(i.startView=L),n.prevArrow){let T=dn(n.prevArrow);T.childNodes.length>0&&(i.prevArrow=T.childNodes),delete n.prevArrow}if(n.nextArrow){let T=dn(n.nextArrow);T.childNodes.length>0&&(i.nextArrow=T.childNodes),delete n.nextArrow}if("disableTouchKeyboard"in n&&(i.disableTouchKeyboard="ontouchstart"in document&&!!n.disableTouchKeyboard,delete n.disableTouchKeyboard),n.orientation){let T=n.orientation.toLowerCase().split(/\s+/g);i.orientation={x:T.find(A=>A==="left"||A==="right")||"auto",y:T.find(A=>A==="top"||A==="bottom")||"auto"},delete n.orientation}if("todayButtonMode"in n){switch(n.todayButtonMode){case 0:case 1:i.todayButtonMode=n.todayButtonMode}delete n.todayButtonMode}return Object.entries(n).forEach(([T,A])=>{A!==void 0&&T in Qo&&(i[T]=A)}),i}var j1={show:{key:"ArrowDown"},hide:null,toggle:{key:"Escape"},prevButton:{key:"ArrowLeft",ctrlOrMetaKey:!0},nextButton:{key:"ArrowRight",ctrlOrMetaKey:!0},viewSwitch:{key:"ArrowUp",ctrlOrMetaKey:!0},clearButton:{key:"Backspace",ctrlOrMetaKey:!0},todayButton:{key:".",ctrlOrMetaKey:!0},exitEditMode:{key:"ArrowDown",ctrlOrMetaKey:!0}};function rc(t){return Object.keys(j1).reduce((e,n)=>{let i=t[n]===void 0?j1[n]:t[n],l=i&&i.key;if(!l||typeof l!="string")return e;let r={key:l,ctrlOrMetaKey:!!(i.ctrlOrMetaKey||i.ctrlKey||i.metaKey)};return l.length>1&&(r.altKey=!!i.altKey,r.shiftKey=!!i.shiftKey),e[n]=r,e},{})}var z1=t=>t.map(e=>`<button type="button" class="%buttonClass% ${e}" tabindex="-1"></button>`).join(""),W1=So(`<div class="datepicker">
=======
				transform: ${transform} translate(${u * dx}px,${u * dy}px) scale(${t + (1 - t) * dw}, ${t + (1 - t) * dh});
			`
    };
  }
  function transition(items, counterparts, intro) {
    return (node, params) => {
      items.set(params.key, node);
      return () => {
        if (counterparts.has(params.key)) {
          const other_node = counterparts.get(params.key);
          counterparts.delete(params.key);
          return crossfade2(other_node, node, params);
        }
        items.delete(params.key);
        return fallback && fallback(node, params, intro);
      };
    };
  }
  return [transition(to_send, to_receive, false), transition(to_receive, to_send, true)];
}

// src/drawer/Drawer.svelte
var file4 = "src/drawer/Drawer.svelte";
function create_if_block2(ctx) {
  let div3;
  let div0;
  let t0;
  let header;
  let h2;
  let t1;
  let t2;
  let button;
  let t3;
  let div1;
  let t4;
  let div2;
  let div3_class_value;
  let docclick_action;
  let div3_intro;
  let div3_outro;
  let current;
  let mounted;
  let dispose;
  button = new Button_default({
    props: {
      round: true,
      text: true,
      icon: "close",
      class: "btn-close",
      title: "Close"
    },
    $$inline: true
  });
  button.$on(
    "click",
    /*close*/
    ctx[3]
  );
  const default_slot_template = (
    /*#slots*/
    ctx[13].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[12],
    null
  );
  const block = {
    c: function create() {
      div3 = element2("div");
      div0 = element2("div");
      t0 = space();
      header = element2("header");
      h2 = element2("h2");
      t1 = text(
        /*title*/
        ctx[2]
      );
      t2 = space();
      create_component(button.$$.fragment);
      t3 = space();
      div1 = element2("div");
      if (default_slot)
        default_slot.c();
      t4 = space();
      div2 = element2("div");
      attr_dev(div0, "tabindex", "0");
      attr_dev(div0, "class", "focus-trap focus-trap-top");
      add_location(div0, file4, 10, 2, 301);
      add_location(h2, file4, 12, 3, 443);
      attr_dev(header, "class", "drawer-header");
      add_location(header, file4, 11, 2, 385);
      attr_dev(div1, "class", "drawer-content");
      add_location(div1, file4, 15, 2, 562);
      attr_dev(div2, "tabindex", "0");
      attr_dev(div2, "class", "focus-trap focus-trap-bottom");
      add_location(div2, file4, 16, 2, 612);
      attr_dev(div3, "class", div3_class_value = "drawer " + /*className*/
      ctx[1]);
      attr_dev(div3, "tabindex", "-1");
      add_location(div3, file4, 2, 1, 73);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div3, anchor);
      append_dev(div3, div0);
      append_dev(div3, t0);
      append_dev(div3, header);
      append_dev(header, h2);
      append_dev(h2, t1);
      append_dev(header, t2);
      mount_component(button, header, null);
      ctx[14](header);
      append_dev(div3, t3);
      append_dev(div3, div1);
      if (default_slot) {
        default_slot.m(div1, null);
      }
      append_dev(div3, t4);
      append_dev(div3, div2);
      ctx[15](div3);
      current = true;
      if (!mounted) {
        dispose = [
          listen_dev(
            div0,
            "focus",
            /*focusLast*/
            ctx[9],
            false,
            false,
            false,
            false
          ),
          listen_dev(
            div2,
            "focus",
            /*focusFirst*/
            ctx[8],
            false,
            false,
            false,
            false
          ),
          action_destroyer(docclick_action = /*docclick*/
          ctx[7].call(null, div3))
        ];
        mounted = true;
      }
    },
    p: function update2(new_ctx, dirty) {
      ctx = new_ctx;
      if (!current || dirty & /*title*/
      4)
        set_data_dev(
          t1,
          /*title*/
          ctx[2]
        );
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        4096)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx,
            /*$$scope*/
            ctx[12],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx[12]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx[12],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (!current || dirty & /*className*/
      2 && div3_class_value !== (div3_class_value = "drawer " + /*className*/
      ctx[1])) {
        attr_dev(div3, "class", div3_class_value);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      transition_in(default_slot, local);
      if (local) {
        add_render_callback(() => {
          if (!current)
            return;
          if (div3_outro)
            div3_outro.end(1);
          div3_intro = create_in_transition(div3, fly, {
            x: 300,
            duration: (
              /*$ANIMATION_SPEED*/
              ctx[6]
            )
          });
          div3_intro.start();
        });
      }
      current = true;
    },
    o: function outro(local) {
      transition_out(button.$$.fragment, local);
      transition_out(default_slot, local);
      if (div3_intro)
        div3_intro.invalidate();
      if (local) {
        div3_outro = create_out_transition(div3, fly, {
          x: 300,
          duration: (
            /*$ANIMATION_SPEED*/
            ctx[6] ? (
              /*$ANIMATION_SPEED*/
              ctx[6] + 100
            ) : 0
          )
        });
      }
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div3);
      }
      destroy_component(button);
      ctx[14](null);
      if (default_slot)
        default_slot.d(detaching);
      ctx[15](null);
      if (detaching && div3_outro)
        div3_outro.end();
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block2.name,
    type: "if",
    source: "(1:0) {#if isVisible}",
    ctx
  });
  return block;
}
function create_fragment5(ctx) {
  let if_block_anchor;
  let current;
  let if_block = (
    /*isVisible*/
    ctx[4] && create_if_block2(ctx)
  );
  const block = {
    c: function create() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update2(ctx2, [dirty]) {
      if (
        /*isVisible*/
        ctx2[4]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*isVisible*/
          16) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block2(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(if_block_anchor);
      }
      if (if_block)
        if_block.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment5.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance5($$self2, $$props2, $$invalidate2) {
  let $ANIMATION_SPEED;
  validate_store(ANIMATION_SPEED, "ANIMATION_SPEED");
  component_subscribe($$self2, ANIMATION_SPEED, ($$value) => $$invalidate2(6, $ANIMATION_SPEED = $$value));
  let { $$slots: slots2 = {}, $$scope: $$scope2 } = $$props2;
  validate_slots("Drawer", slots2, ["default"]);
  let { class: className2 = "" } = $$props2;
  let { title = "Drawer" } = $$props2;
  let { element: element3 = void 0 } = $$props2;
  const dispatch3 = createEventDispatcher();
  let isVisible = false;
  let headerEl, targetBtn;
  function docclick() {
    requestAnimationFrame(() => document.addEventListener("click", onDocClick));
    return {
      destroy: () => document.removeEventListener("click", onDocClick)
    };
  }
  function onDocClick(e) {
    if (element3.contains(e.target))
      return;
    if (!isVisible)
      return;
    e.preventDefault();
    e.stopPropagation();
    close();
  }
  function toggle(target) {
    if (target)
      targetBtn = target;
    isVisible ? close() : open(target);
  }
  function open(target) {
    targetBtn = target || document.activeElement;
    $$invalidate2(4, isVisible = true);
    requestAnimationFrame(() => headerEl.querySelector(".btn-close").focus());
    dispatch3("open");
  }
  function close() {
    $$invalidate2(4, isVisible = false);
    if (targetBtn)
      targetBtn.focus();
    dispatch3("close");
  }
  function focusFirst() {
    const first = getFocusableElements().shift();
    const last = getFocusableElements().pop();
    if (last && last.scrollIntoView)
      last.scrollIntoView({ block: "end" });
    if (first && first.focus)
      first.focus();
  }
  function focusLast() {
    const first = getFocusableElements().shift();
    const last = getFocusableElements().pop();
    if (first && first.scrollIntoView)
      first.scrollIntoView({ block: "end" });
    if (last && last.focus)
      last.focus();
  }
  function getFocusableElements() {
    return Array.from(element3.querySelectorAll(FOCUSABLE_SELECTOR));
  }
  const writable_props = ["class", "title", "element"];
  Object.keys($$props2).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Drawer> was created with unknown prop '${key}'`);
  });
  function header_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      headerEl = $$value;
      $$invalidate2(5, headerEl);
    });
  }
  function div3_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element3 = $$value;
      $$invalidate2(0, element3);
    });
  }
  $$self2.$$set = ($$props3) => {
    if ("class" in $$props3)
      $$invalidate2(1, className2 = $$props3.class);
    if ("title" in $$props3)
      $$invalidate2(2, title = $$props3.title);
    if ("element" in $$props3)
      $$invalidate2(0, element3 = $$props3.element);
    if ("$$scope" in $$props3)
      $$invalidate2(12, $$scope2 = $$props3.$$scope);
  };
  $$self2.$capture_state = () => ({
    createEventDispatcher,
    fly,
    ANIMATION_SPEED,
    FOCUSABLE_SELECTOR,
    Button: Button_default,
    className: className2,
    title,
    element: element3,
    dispatch: dispatch3,
    isVisible,
    headerEl,
    targetBtn,
    docclick,
    onDocClick,
    toggle,
    open,
    close,
    focusFirst,
    focusLast,
    getFocusableElements,
    $ANIMATION_SPEED
  });
  $$self2.$inject_state = ($$props3) => {
    if ("className" in $$props3)
      $$invalidate2(1, className2 = $$props3.className);
    if ("title" in $$props3)
      $$invalidate2(2, title = $$props3.title);
    if ("element" in $$props3)
      $$invalidate2(0, element3 = $$props3.element);
    if ("isVisible" in $$props3)
      $$invalidate2(4, isVisible = $$props3.isVisible);
    if ("headerEl" in $$props3)
      $$invalidate2(5, headerEl = $$props3.headerEl);
    if ("targetBtn" in $$props3)
      targetBtn = $$props3.targetBtn;
  };
  if ($$props2 && "$$inject" in $$props2) {
    $$self2.$inject_state($$props2.$$inject);
  }
  return [
    element3,
    className2,
    title,
    close,
    isVisible,
    headerEl,
    $ANIMATION_SPEED,
    docclick,
    focusFirst,
    focusLast,
    toggle,
    open,
    $$scope2,
    slots2,
    header_binding,
    div3_binding
  ];
}
var Drawer = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance5, create_fragment5, safe_not_equal, {
      class: 1,
      title: 2,
      element: 0,
      toggle: 10,
      open: 11,
      close: 3
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Drawer",
      options,
      id: create_fragment5.name
    });
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(className2) {
    this.$$set({ class: className2 });
    flush();
  }
  get title() {
    return this.$$.ctx[2];
  }
  set title(title) {
    this.$$set({ title });
    flush();
  }
  get element() {
    return this.$$.ctx[0];
  }
  set element(element3) {
    this.$$set({ element: element3 });
    flush();
  }
  get toggle() {
    return this.$$.ctx[10];
  }
  set toggle(value2) {
    throw new Error("<Drawer>: Cannot set read-only property 'toggle'");
  }
  get open() {
    return this.$$.ctx[11];
  }
  set open(value2) {
    throw new Error("<Drawer>: Cannot set read-only property 'open'");
  }
  get close() {
    return this.$$.ctx[3];
  }
  set close(value2) {
    throw new Error("<Drawer>: Cannot set read-only property 'close'");
  }
};
var Drawer_default = Drawer;

// src/grid/utils.js
function isActiveElement(element3) {
  const skipEventFor = ["INPUT", "TEXTAREA", "SELECT", "BUTTON"];
  if (skipEventFor.includes(element3.tagName))
    return true;
}
function isInsidePopup(element3) {
  const skipEventIfInside = ".dialog,.drawer,.popover,.menu";
  return element3.closest(skipEventIfInside);
}
function shouldSkipNav(e, element3) {
  const target = e && e.target;
  if (!target || target === document)
    return false;
  const notInElem = !element3 || !element3.contains(target);
  return notInElem || isActiveElement(target) || isInsidePopup(target);
}
function getSelectableItems(element3) {
  const rootEl = element3.parentElement || document;
  const rows = rootEl.querySelectorAll(".table tbody");
  if (rows && rows.length)
    return Array.from(rows);
  return [];
}

// src/grid/store/columns.js
function ColumnsStore() {
  const { subscribe: subscribe2, set } = writable([]);
  return {
    subscribe: subscribe2,
    set,
    get() {
      return get_store_value(this);
    },
    reset: () => set([])
  };
}

// src/grid/store/data.js
function DataStore() {
  const _this = writable([]);
  const { subscribe: subscribe2, set } = _this;
  const allSelected = writable(false);
  const someSelected = writable(false);
  const sortField = writable("");
  const sortOrder = writable("ASC");
  function toggleSelection(item) {
    let count = 0;
    const unselectOthers = false;
    const $Data = get_store_value(this);
    $Data.forEach((_item) => {
      if (item.id === _item.id) {
        _item.selected = !_item.selected;
      } else if (unselectOthers)
        _item.selected = false;
      if (_item.selected)
        count += 1;
    });
    allSelected.set($Data.length === count);
    someSelected.set(count > 0 && !get_store_value(allSelected));
    set($Data);
  }
  function toggleSelectAll(forceState = null) {
    if (typeof forceState === "boolean")
      allSelected.set(forceState);
    else {
      if (get_store_value(someSelected))
        allSelected.set(false);
      else
        allSelected.set(!get_store_value(allSelected));
    }
    someSelected.set(false);
    const selected = get_store_value(allSelected);
    const $Data = get_store_value(this);
    $Data.forEach((_item) => _item.selected = selected);
    set($Data);
  }
  sortField.subscribe((field) => {
    if (field)
      set(sortData(get_store_value(_this), field, get_store_value(sortOrder)));
  });
  sortOrder.subscribe((order) => {
    if (order)
      set(sortData(get_store_value(_this), get_store_value(sortField), order));
  });
  return {
    subscribe: subscribe2,
    set,
    get: () => _this,
    allSelected,
    someSelected,
    sortField,
    sortOrder,
    toggleSelection,
    toggleSelectAll,
    reset: () => set([])
  };
}
function sortData(items, field, order) {
  if (!items || !items.length)
    return [];
  if (field === "")
    return items.sort(numberSort("id", order));
  return items.sort(stringSort(field, order));
}
function numberSort(field, order = "ASC") {
  if (order === "ASC")
    return (a, b) => Math.abs(a[field]) - Math.abs(b[field]);
  return (a, b) => Math.abs(b[field]) - Math.abs(a[field]);
}
function stringSort(field, order = "ASC") {
  if (order === "ASC")
    return (a, b) => ("" + a[field]).localeCompare("" + b[field]);
  return (a, b) => ("" + b[field]).localeCompare("" + a[field]);
}

// src/input/combobox/utils.js
function groupData(items) {
  const nogroup = [];
  const _groups = {};
  items.forEach((item) => {
    if (!item.group)
      return nogroup.push(item);
    _groups[item.group] = _groups[item.group] || { name: item.group, items: [] };
    _groups[item.group].items.push(item);
  });
  const groups = Object.values(_groups).filter((g) => !!g.items.length);
  if (nogroup.length)
    groups.unshift({ items: nogroup });
  return groups;
}
function scrollToSelectedItem(listEl) {
  if (!listEl)
    return;
  requestAnimationFrame(() => {
    const selectedEl = listEl.querySelector(".selected");
    if (!selectedEl || !listEl.scrollTo)
      return;
    const paddingTop = 3;
    let top = selectedEl.offsetTop - paddingTop;
    if (listEl.scrollTop > top)
      listEl.scrollTo({ top });
    else {
      const paddingBottom = 6;
      top = selectedEl.offsetTop + selectedEl.offsetHeight - listEl.offsetHeight + paddingBottom;
      if (listEl.scrollTop < top)
        listEl.scrollTo({ top });
    }
  });
}
function emphasize(str, q) {
  if (!q)
    return str;
  str = "" + str;
  let idx = 0;
  const low = str.toLowerCase();
  if (low.includes(q))
    return str.replace(new RegExp(`(${q})`, "ig"), "<b>$1</b>");
  const stra = str.split("");
  q = q.toLowerCase();
  for (const l of q) {
    idx = low.indexOf(l, idx);
    const letter = stra[idx];
    if (letter) {
      stra.splice(idx, 1, `<b>${letter}</b>`);
      idx += 1;
    }
  }
  return stra.join("");
}
function findSourceItem(v, items) {
  v = v.id || v.name || v;
  const idx = items.findIndex((i) => (i.id || i.name || i) === v);
  return items[idx];
}
function findValueInSource(val, items) {
  if (!val)
    return val;
  if (!Array.isArray(val))
    return findSourceItem(val, items);
  return val.map((v) => findSourceItem(v, items));
}
function getInputValue(_val, isMultiselect = false) {
  if (!isMultiselect)
    return _val?.name || _val || "";
  if (!Array.isArray(_val))
    _val = [_val];
  return _val.map((i) => i.name || i).join(", ");
}
function alignDropdown(listElement, inputElement2, e) {
  requestAnimationFrame(() => {
    alignItem({
      element: listElement,
      target: inputElement2,
      setMinWidthToTarget: true,
      offsetH: -1
    });
    if (e && e.type === "focus")
      inputElement2.select();
  });
}
function hasSingleValueChanged(oldV, newV) {
  return (oldV?.id || oldV?.name || oldV) !== (newV?.id || newV?.name || newV);
}
function hasValueChanged(oldV, newV, multiselect = false) {
  if (!multiselect)
    return hasSingleValueChanged(oldV, newV);
  if (!Array.isArray(oldV))
    oldV = [oldV];
  if (!Array.isArray(newV))
    newV = [newV];
  if (oldV.length !== newV.length)
    return true;
  for (let i = 0; i < newV.length; i++) {
    if (hasSingleValueChanged(oldV[i], newV[i]))
      return true;
  }
  return false;
}

// src/info-bar/InfoBar.svelte
var file5 = "src/info-bar/InfoBar.svelte";
function create_if_block3(ctx) {
  let div;
  let icon;
  let t;
  let p;
  let div_class_value;
  let current;
  icon = new Icon_default({
    props: { name: (
      /*type*/
      ctx[4]
    ) },
    $$inline: true
  });
  const block = {
    c: function create() {
      div = element2("div");
      create_component(icon.$$.fragment);
      t = space();
      p = element2("p");
      attr_dev(
        p,
        "id",
        /*id*/
        ctx[2]
      );
      add_location(p, file5, 3, 2, 110);
      attr_dev(div, "class", div_class_value = "info-bar info-bar-" + /*type*/
      ctx[4] + " " + /*className*/
      ctx[1]);
      add_location(div, file5, 1, 1, 11);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      mount_component(icon, div, null);
      append_dev(div, t);
      append_dev(div, p);
      p.innerHTML = /*msg*/
      ctx[3];
      ctx[5](div);
      current = true;
    },
    p: function update2(ctx2, dirty) {
      const icon_changes = {};
      if (dirty & /*type*/
      16)
        icon_changes.name = /*type*/
        ctx2[4];
      icon.$set(icon_changes);
      if (!current || dirty & /*msg*/
      8)
        p.innerHTML = /*msg*/
        ctx2[3];
      ;
      if (!current || dirty & /*id*/
      4) {
        attr_dev(
          p,
          "id",
          /*id*/
          ctx2[2]
        );
      }
      if (!current || dirty & /*type, className*/
      18 && div_class_value !== (div_class_value = "info-bar info-bar-" + /*type*/
      ctx2[4] + " " + /*className*/
      ctx2[1])) {
        attr_dev(div, "class", div_class_value);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div);
      }
      destroy_component(icon);
      ctx[5](null);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block3.name,
    type: "if",
    source: "(1:0) {#if msg}",
    ctx
  });
  return block;
}
function create_fragment6(ctx) {
  let if_block_anchor;
  let current;
  let if_block = (
    /*msg*/
    ctx[3] && create_if_block3(ctx)
  );
  const block = {
    c: function create() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update2(ctx2, [dirty]) {
      if (
        /*msg*/
        ctx2[3]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*msg*/
          8) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block3(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(if_block_anchor);
      }
      if (if_block)
        if_block.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment6.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance6($$self2, $$props2, $$invalidate2) {
  let { $$slots: slots2 = {}, $$scope: $$scope2 } = $$props2;
  validate_slots("InfoBar", slots2, []);
  let { class: className2 = "" } = $$props2;
  let { element: element3 = void 0 } = $$props2;
  let { id: id2 = void 0 } = $$props2;
  let { msg = "" } = $$props2;
  let { type = "info" } = $$props2;
  const writable_props = ["class", "element", "id", "msg", "type"];
  Object.keys($$props2).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<InfoBar> was created with unknown prop '${key}'`);
  });
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element3 = $$value;
      $$invalidate2(0, element3);
    });
  }
  $$self2.$$set = ($$props3) => {
    if ("class" in $$props3)
      $$invalidate2(1, className2 = $$props3.class);
    if ("element" in $$props3)
      $$invalidate2(0, element3 = $$props3.element);
    if ("id" in $$props3)
      $$invalidate2(2, id2 = $$props3.id);
    if ("msg" in $$props3)
      $$invalidate2(3, msg = $$props3.msg);
    if ("type" in $$props3)
      $$invalidate2(4, type = $$props3.type);
  };
  $$self2.$capture_state = () => ({ Icon: Icon_default, className: className2, element: element3, id: id2, msg, type });
  $$self2.$inject_state = ($$props3) => {
    if ("className" in $$props3)
      $$invalidate2(1, className2 = $$props3.className);
    if ("element" in $$props3)
      $$invalidate2(0, element3 = $$props3.element);
    if ("id" in $$props3)
      $$invalidate2(2, id2 = $$props3.id);
    if ("msg" in $$props3)
      $$invalidate2(3, msg = $$props3.msg);
    if ("type" in $$props3)
      $$invalidate2(4, type = $$props3.type);
  };
  if ($$props2 && "$$inject" in $$props2) {
    $$self2.$inject_state($$props2.$$inject);
  }
  return [element3, className2, id2, msg, type, div_binding];
}
var InfoBar = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance6, create_fragment6, safe_not_equal, {
      class: 1,
      element: 0,
      id: 2,
      msg: 3,
      type: 4
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "InfoBar",
      options,
      id: create_fragment6.name
    });
  }
  get class() {
    throw new Error("<InfoBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set class(value2) {
    throw new Error("<InfoBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get element() {
    throw new Error("<InfoBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set element(value2) {
    throw new Error("<InfoBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get id() {
    throw new Error("<InfoBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set id(value2) {
    throw new Error("<InfoBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get msg() {
    throw new Error("<InfoBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set msg(value2) {
    throw new Error("<InfoBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get type() {
    throw new Error("<InfoBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set type(value2) {
    throw new Error("<InfoBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
};
var InfoBar_default = InfoBar;

// src/info-bar/Error.svelte
var { Error: Error_1 } = globals;
function create_fragment7(ctx) {
  let infobar;
  let updating_element;
  let current;
  function infobar_element_binding(value2) {
    ctx[4](value2);
  }
  let infobar_props = {
    class: (
      /*className*/
      ctx[1]
    ),
    id: (
      /*id*/
      ctx[2]
    ),
    msg: (
      /*msg*/
      ctx[3]
    ),
    type: "error"
  };
  if (
    /*element*/
    ctx[0] !== void 0
  ) {
    infobar_props.element = /*element*/
    ctx[0];
  }
  infobar = new InfoBar_default({ props: infobar_props, $$inline: true });
  binding_callbacks.push(() => bind(infobar, "element", infobar_element_binding));
  const block = {
    c: function create() {
      create_component(infobar.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error_1("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(infobar, target, anchor);
      current = true;
    },
    p: function update2(ctx2, [dirty]) {
      const infobar_changes = {};
      if (dirty & /*className*/
      2)
        infobar_changes.class = /*className*/
        ctx2[1];
      if (dirty & /*id*/
      4)
        infobar_changes.id = /*id*/
        ctx2[2];
      if (dirty & /*msg*/
      8)
        infobar_changes.msg = /*msg*/
        ctx2[3];
      if (!updating_element && dirty & /*element*/
      1) {
        updating_element = true;
        infobar_changes.element = /*element*/
        ctx2[0];
        add_flush_callback(() => updating_element = false);
      }
      infobar.$set(infobar_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(infobar.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(infobar.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(infobar, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment7.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance7($$self2, $$props2, $$invalidate2) {
  let { $$slots: slots2 = {}, $$scope: $$scope2 } = $$props2;
  validate_slots("Error", slots2, []);
  let { class: className2 = "" } = $$props2;
  let { element: element3 = void 0 } = $$props2;
  let { id: id2 = void 0 } = $$props2;
  let { msg = "" } = $$props2;
  const writable_props = ["class", "element", "id", "msg"];
  Object.keys($$props2).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Error> was created with unknown prop '${key}'`);
  });
  function infobar_element_binding(value2) {
    element3 = value2;
    $$invalidate2(0, element3);
  }
  $$self2.$$set = ($$props3) => {
    if ("class" in $$props3)
      $$invalidate2(1, className2 = $$props3.class);
    if ("element" in $$props3)
      $$invalidate2(0, element3 = $$props3.element);
    if ("id" in $$props3)
      $$invalidate2(2, id2 = $$props3.id);
    if ("msg" in $$props3)
      $$invalidate2(3, msg = $$props3.msg);
  };
  $$self2.$capture_state = () => ({ InfoBar: InfoBar_default, className: className2, element: element3, id: id2, msg });
  $$self2.$inject_state = ($$props3) => {
    if ("className" in $$props3)
      $$invalidate2(1, className2 = $$props3.className);
    if ("element" in $$props3)
      $$invalidate2(0, element3 = $$props3.element);
    if ("id" in $$props3)
      $$invalidate2(2, id2 = $$props3.id);
    if ("msg" in $$props3)
      $$invalidate2(3, msg = $$props3.msg);
  };
  if ($$props2 && "$$inject" in $$props2) {
    $$self2.$inject_state($$props2.$$inject);
  }
  return [element3, className2, id2, msg, infobar_element_binding];
}
var Error2 = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance7, create_fragment7, safe_not_equal, { class: 1, element: 0, id: 2, msg: 3 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Error",
      options,
      id: create_fragment7.name
    });
  }
  get class() {
    throw new Error_1("<Error>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set class(value2) {
    throw new Error_1("<Error>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get element() {
    throw new Error_1("<Error>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set element(value2) {
    throw new Error_1("<Error>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get id() {
    throw new Error_1("<Error>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set id(value2) {
    throw new Error_1("<Error>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get msg() {
    throw new Error_1("<Error>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set msg(value2) {
    throw new Error_1("<Error>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
};
var Error_default = Error2;

// src/info-bar/Info.svelte
function create_fragment8(ctx) {
  let infobar;
  let updating_element;
  let current;
  function infobar_element_binding(value2) {
    ctx[4](value2);
  }
  let infobar_props = {
    class: (
      /*className*/
      ctx[1]
    ),
    id: (
      /*id*/
      ctx[2]
    ),
    msg: (
      /*msg*/
      ctx[3]
    ),
    type: "info"
  };
  if (
    /*element*/
    ctx[0] !== void 0
  ) {
    infobar_props.element = /*element*/
    ctx[0];
  }
  infobar = new InfoBar_default({ props: infobar_props, $$inline: true });
  binding_callbacks.push(() => bind(infobar, "element", infobar_element_binding));
  const block = {
    c: function create() {
      create_component(infobar.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(infobar, target, anchor);
      current = true;
    },
    p: function update2(ctx2, [dirty]) {
      const infobar_changes = {};
      if (dirty & /*className*/
      2)
        infobar_changes.class = /*className*/
        ctx2[1];
      if (dirty & /*id*/
      4)
        infobar_changes.id = /*id*/
        ctx2[2];
      if (dirty & /*msg*/
      8)
        infobar_changes.msg = /*msg*/
        ctx2[3];
      if (!updating_element && dirty & /*element*/
      1) {
        updating_element = true;
        infobar_changes.element = /*element*/
        ctx2[0];
        add_flush_callback(() => updating_element = false);
      }
      infobar.$set(infobar_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(infobar.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(infobar.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(infobar, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment8.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance8($$self2, $$props2, $$invalidate2) {
  let { $$slots: slots2 = {}, $$scope: $$scope2 } = $$props2;
  validate_slots("Info", slots2, []);
  let { class: className2 = "" } = $$props2;
  let { element: element3 = void 0 } = $$props2;
  let { id: id2 = void 0 } = $$props2;
  let { msg = "" } = $$props2;
  const writable_props = ["class", "element", "id", "msg"];
  Object.keys($$props2).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Info> was created with unknown prop '${key}'`);
  });
  function infobar_element_binding(value2) {
    element3 = value2;
    $$invalidate2(0, element3);
  }
  $$self2.$$set = ($$props3) => {
    if ("class" in $$props3)
      $$invalidate2(1, className2 = $$props3.class);
    if ("element" in $$props3)
      $$invalidate2(0, element3 = $$props3.element);
    if ("id" in $$props3)
      $$invalidate2(2, id2 = $$props3.id);
    if ("msg" in $$props3)
      $$invalidate2(3, msg = $$props3.msg);
  };
  $$self2.$capture_state = () => ({ InfoBar: InfoBar_default, className: className2, element: element3, id: id2, msg });
  $$self2.$inject_state = ($$props3) => {
    if ("className" in $$props3)
      $$invalidate2(1, className2 = $$props3.className);
    if ("element" in $$props3)
      $$invalidate2(0, element3 = $$props3.element);
    if ("id" in $$props3)
      $$invalidate2(2, id2 = $$props3.id);
    if ("msg" in $$props3)
      $$invalidate2(3, msg = $$props3.msg);
  };
  if ($$props2 && "$$inject" in $$props2) {
    $$self2.$inject_state($$props2.$$inject);
  }
  return [element3, className2, id2, msg, infobar_element_binding];
}
var Info = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance8, create_fragment8, safe_not_equal, { class: 1, element: 0, id: 2, msg: 3 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Info",
      options,
      id: create_fragment8.name
    });
  }
  get class() {
    throw new Error("<Info>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set class(value2) {
    throw new Error("<Info>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get element() {
    throw new Error("<Info>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set element(value2) {
    throw new Error("<Info>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get id() {
    throw new Error("<Info>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set id(value2) {
    throw new Error("<Info>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get msg() {
    throw new Error("<Info>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set msg(value2) {
    throw new Error("<Info>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
};
var Info_default = Info;

// src/info-bar/Success.svelte
function create_fragment9(ctx) {
  let infobar;
  let updating_element;
  let current;
  function infobar_element_binding(value2) {
    ctx[4](value2);
  }
  let infobar_props = {
    class: (
      /*className*/
      ctx[1]
    ),
    id: (
      /*id*/
      ctx[2]
    ),
    msg: (
      /*msg*/
      ctx[3]
    ),
    type: "success"
  };
  if (
    /*element*/
    ctx[0] !== void 0
  ) {
    infobar_props.element = /*element*/
    ctx[0];
  }
  infobar = new InfoBar_default({ props: infobar_props, $$inline: true });
  binding_callbacks.push(() => bind(infobar, "element", infobar_element_binding));
  const block = {
    c: function create() {
      create_component(infobar.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(infobar, target, anchor);
      current = true;
    },
    p: function update2(ctx2, [dirty]) {
      const infobar_changes = {};
      if (dirty & /*className*/
      2)
        infobar_changes.class = /*className*/
        ctx2[1];
      if (dirty & /*id*/
      4)
        infobar_changes.id = /*id*/
        ctx2[2];
      if (dirty & /*msg*/
      8)
        infobar_changes.msg = /*msg*/
        ctx2[3];
      if (!updating_element && dirty & /*element*/
      1) {
        updating_element = true;
        infobar_changes.element = /*element*/
        ctx2[0];
        add_flush_callback(() => updating_element = false);
      }
      infobar.$set(infobar_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(infobar.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(infobar.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(infobar, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment9.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance9($$self2, $$props2, $$invalidate2) {
  let { $$slots: slots2 = {}, $$scope: $$scope2 } = $$props2;
  validate_slots("Success", slots2, []);
  let { class: className2 = "" } = $$props2;
  let { element: element3 = void 0 } = $$props2;
  let { id: id2 = void 0 } = $$props2;
  let { msg = "" } = $$props2;
  const writable_props = ["class", "element", "id", "msg"];
  Object.keys($$props2).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Success> was created with unknown prop '${key}'`);
  });
  function infobar_element_binding(value2) {
    element3 = value2;
    $$invalidate2(0, element3);
  }
  $$self2.$$set = ($$props3) => {
    if ("class" in $$props3)
      $$invalidate2(1, className2 = $$props3.class);
    if ("element" in $$props3)
      $$invalidate2(0, element3 = $$props3.element);
    if ("id" in $$props3)
      $$invalidate2(2, id2 = $$props3.id);
    if ("msg" in $$props3)
      $$invalidate2(3, msg = $$props3.msg);
  };
  $$self2.$capture_state = () => ({ InfoBar: InfoBar_default, className: className2, element: element3, id: id2, msg });
  $$self2.$inject_state = ($$props3) => {
    if ("className" in $$props3)
      $$invalidate2(1, className2 = $$props3.className);
    if ("element" in $$props3)
      $$invalidate2(0, element3 = $$props3.element);
    if ("id" in $$props3)
      $$invalidate2(2, id2 = $$props3.id);
    if ("msg" in $$props3)
      $$invalidate2(3, msg = $$props3.msg);
  };
  if ($$props2 && "$$inject" in $$props2) {
    $$self2.$inject_state($$props2.$$inject);
  }
  return [element3, className2, id2, msg, infobar_element_binding];
}
var Success = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance9, create_fragment9, safe_not_equal, { class: 1, element: 0, id: 2, msg: 3 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Success",
      options,
      id: create_fragment9.name
    });
  }
  get class() {
    throw new Error("<Success>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set class(value2) {
    throw new Error("<Success>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get element() {
    throw new Error("<Success>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set element(value2) {
    throw new Error("<Success>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get id() {
    throw new Error("<Success>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set id(value2) {
    throw new Error("<Success>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get msg() {
    throw new Error("<Success>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set msg(value2) {
    throw new Error("<Success>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
};
var Success_default = Success;

// src/info-bar/Warning.svelte
function create_fragment10(ctx) {
  let infobar;
  let updating_element;
  let current;
  function infobar_element_binding(value2) {
    ctx[4](value2);
  }
  let infobar_props = {
    class: (
      /*className*/
      ctx[1]
    ),
    id: (
      /*id*/
      ctx[2]
    ),
    msg: (
      /*msg*/
      ctx[3]
    ),
    type: "warning"
  };
  if (
    /*element*/
    ctx[0] !== void 0
  ) {
    infobar_props.element = /*element*/
    ctx[0];
  }
  infobar = new InfoBar_default({ props: infobar_props, $$inline: true });
  binding_callbacks.push(() => bind(infobar, "element", infobar_element_binding));
  const block = {
    c: function create() {
      create_component(infobar.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(infobar, target, anchor);
      current = true;
    },
    p: function update2(ctx2, [dirty]) {
      const infobar_changes = {};
      if (dirty & /*className*/
      2)
        infobar_changes.class = /*className*/
        ctx2[1];
      if (dirty & /*id*/
      4)
        infobar_changes.id = /*id*/
        ctx2[2];
      if (dirty & /*msg*/
      8)
        infobar_changes.msg = /*msg*/
        ctx2[3];
      if (!updating_element && dirty & /*element*/
      1) {
        updating_element = true;
        infobar_changes.element = /*element*/
        ctx2[0];
        add_flush_callback(() => updating_element = false);
      }
      infobar.$set(infobar_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(infobar.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(infobar.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(infobar, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment10.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance10($$self2, $$props2, $$invalidate2) {
  let { $$slots: slots2 = {}, $$scope: $$scope2 } = $$props2;
  validate_slots("Warning", slots2, []);
  let { class: className2 = "" } = $$props2;
  let { element: element3 = void 0 } = $$props2;
  let { id: id2 = void 0 } = $$props2;
  let { msg = "" } = $$props2;
  const writable_props = ["class", "element", "id", "msg"];
  Object.keys($$props2).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Warning> was created with unknown prop '${key}'`);
  });
  function infobar_element_binding(value2) {
    element3 = value2;
    $$invalidate2(0, element3);
  }
  $$self2.$$set = ($$props3) => {
    if ("class" in $$props3)
      $$invalidate2(1, className2 = $$props3.class);
    if ("element" in $$props3)
      $$invalidate2(0, element3 = $$props3.element);
    if ("id" in $$props3)
      $$invalidate2(2, id2 = $$props3.id);
    if ("msg" in $$props3)
      $$invalidate2(3, msg = $$props3.msg);
  };
  $$self2.$capture_state = () => ({ InfoBar: InfoBar_default, className: className2, element: element3, id: id2, msg });
  $$self2.$inject_state = ($$props3) => {
    if ("className" in $$props3)
      $$invalidate2(1, className2 = $$props3.className);
    if ("element" in $$props3)
      $$invalidate2(0, element3 = $$props3.element);
    if ("id" in $$props3)
      $$invalidate2(2, id2 = $$props3.id);
    if ("msg" in $$props3)
      $$invalidate2(3, msg = $$props3.msg);
  };
  if ($$props2 && "$$inject" in $$props2) {
    $$self2.$inject_state($$props2.$$inject);
  }
  return [element3, className2, id2, msg, infobar_element_binding];
}
var Warning = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance10, create_fragment10, safe_not_equal, { class: 1, element: 0, id: 2, msg: 3 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Warning",
      options,
      id: create_fragment10.name
    });
  }
  get class() {
    throw new Error("<Warning>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set class(value2) {
    throw new Error("<Warning>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get element() {
    throw new Error("<Warning>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set element(value2) {
    throw new Error("<Warning>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get id() {
    throw new Error("<Warning>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set id(value2) {
    throw new Error("<Warning>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get msg() {
    throw new Error("<Warning>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set msg(value2) {
    throw new Error("<Warning>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
};
var Warning_default = Warning;

// src/input/input-error/InputError.svelte
var { Error: Error_12 } = globals;
var file6 = "src/input/input-error/InputError.svelte";
function create_if_block4(ctx) {
  let div;
  let error2;
  let div_transition;
  let current;
  error2 = new Error_default({
    props: { id: (
      /*id*/
      ctx[1]
    ), msg: (
      /*msg*/
      ctx[2]
    ) },
    $$inline: true
  });
  const block = {
    c: function create() {
      div = element2("div");
      create_component(error2.$$.fragment);
      attr_dev(div, "class", "error-wrap");
      add_location(div, file6, 1, 1, 11);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      mount_component(error2, div, null);
      ctx[8](div);
      current = true;
    },
    p: function update2(ctx2, dirty) {
      const error_changes = {};
      if (dirty & /*id*/
      2)
        error_changes.id = /*id*/
        ctx2[1];
      if (dirty & /*msg*/
      4)
        error_changes.msg = /*msg*/
        ctx2[2];
      error2.$set(error_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(error2.$$.fragment, local);
      if (local) {
        add_render_callback(() => {
          if (!current)
            return;
          if (!div_transition)
            div_transition = create_bidirectional_transition(
              div,
              /*slideError*/
              ctx[3],
              {},
              true
            );
          div_transition.run(1);
        });
      }
      current = true;
    },
    o: function outro(local) {
      transition_out(error2.$$.fragment, local);
      if (local) {
        if (!div_transition)
          div_transition = create_bidirectional_transition(
            div,
            /*slideError*/
            ctx[3],
            {},
            false
          );
        div_transition.run(0);
      }
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div);
      }
      destroy_component(error2);
      ctx[8](null);
      if (detaching && div_transition)
        div_transition.end();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block4.name,
    type: "if",
    source: "(1:0) {#if msg}",
    ctx
  });
  return block;
}
function create_fragment11(ctx) {
  let if_block_anchor;
  let current;
  let if_block = (
    /*msg*/
    ctx[2] && create_if_block4(ctx)
  );
  const block = {
    c: function create() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      throw new Error_12("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update2(ctx2, [dirty]) {
      if (
        /*msg*/
        ctx2[2]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*msg*/
          4) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block4(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(if_block_anchor);
      }
      if (if_block)
        if_block.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment11.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance11($$self2, $$props2, $$invalidate2) {
  let _animOffset;
  let _hasOffset;
  let _animOpacity;
  let $ANIMATION_SPEED;
  validate_store(ANIMATION_SPEED, "ANIMATION_SPEED");
  component_subscribe($$self2, ANIMATION_SPEED, ($$value) => $$invalidate2(10, $ANIMATION_SPEED = $$value));
  let { $$slots: slots2 = {}, $$scope: $$scope2 } = $$props2;
  validate_slots("InputError", slots2, []);
  let { id: id2 = void 0 } = $$props2;
  let { msg = "" } = $$props2;
  let { element: element3 = void 0 } = $$props2;
  let { animOffset = 0 } = $$props2;
  let { animOpacity = false } = $$props2;
  function slideError(node) {
    const o = node.getBoundingClientRect().height;
    return {
      duration: $ANIMATION_SPEED,
      css: (t) => {
        return `height: ${t * o}px;` + (_animOpacity ? `opacity: ${t};` : "") + (_hasOffset ? `margin-bottom: ${t * _animOffset - _animOffset}px;` : "");
      }
    };
  }
  const writable_props = ["id", "msg", "element", "animOffset", "animOpacity"];
  Object.keys($$props2).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<InputError> was created with unknown prop '${key}'`);
  });
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element3 = $$value;
      $$invalidate2(0, element3);
    });
  }
  $$self2.$$set = ($$props3) => {
    if ("id" in $$props3)
      $$invalidate2(1, id2 = $$props3.id);
    if ("msg" in $$props3)
      $$invalidate2(2, msg = $$props3.msg);
    if ("element" in $$props3)
      $$invalidate2(0, element3 = $$props3.element);
    if ("animOffset" in $$props3)
      $$invalidate2(4, animOffset = $$props3.animOffset);
    if ("animOpacity" in $$props3)
      $$invalidate2(5, animOpacity = $$props3.animOpacity);
  };
  $$self2.$capture_state = () => ({
    ANIMATION_SPEED,
    Error: Error_default,
    id: id2,
    msg,
    element: element3,
    animOffset,
    animOpacity,
    slideError,
    _animOffset,
    _hasOffset,
    _animOpacity,
    $ANIMATION_SPEED
  });
  $$self2.$inject_state = ($$props3) => {
    if ("id" in $$props3)
      $$invalidate2(1, id2 = $$props3.id);
    if ("msg" in $$props3)
      $$invalidate2(2, msg = $$props3.msg);
    if ("element" in $$props3)
      $$invalidate2(0, element3 = $$props3.element);
    if ("animOffset" in $$props3)
      $$invalidate2(4, animOffset = $$props3.animOffset);
    if ("animOpacity" in $$props3)
      $$invalidate2(5, animOpacity = $$props3.animOpacity);
    if ("_animOffset" in $$props3)
      $$invalidate2(6, _animOffset = $$props3._animOffset);
    if ("_hasOffset" in $$props3)
      $$invalidate2(7, _hasOffset = $$props3._hasOffset);
    if ("_animOpacity" in $$props3)
      _animOpacity = $$props3._animOpacity;
  };
  if ($$props2 && "$$inject" in $$props2) {
    $$self2.$inject_state($$props2.$$inject);
  }
  $$self2.$$.update = () => {
    if ($$self2.$$.dirty & /*animOffset*/
    16) {
      $:
        $$invalidate2(6, _animOffset = parseInt(animOffset, 10) || 0);
    }
    if ($$self2.$$.dirty & /*_animOffset*/
    64) {
      $:
        $$invalidate2(7, _hasOffset = _animOffset > 0);
    }
    if ($$self2.$$.dirty & /*animOpacity, _hasOffset*/
    160) {
      $:
        _animOpacity = animOpacity === "true" || animOpacity === true || _hasOffset;
    }
  };
  return [
    element3,
    id2,
    msg,
    slideError,
    animOffset,
    animOpacity,
    _animOffset,
    _hasOffset,
    div_binding
  ];
}
var InputError = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance11, create_fragment11, safe_not_equal, {
      id: 1,
      msg: 2,
      element: 0,
      animOffset: 4,
      animOpacity: 5
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "InputError",
      options,
      id: create_fragment11.name
    });
  }
  get id() {
    throw new Error_12("<InputError>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set id(value2) {
    throw new Error_12("<InputError>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get msg() {
    throw new Error_12("<InputError>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set msg(value2) {
    throw new Error_12("<InputError>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get element() {
    throw new Error_12("<InputError>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set element(value2) {
    throw new Error_12("<InputError>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get animOffset() {
    throw new Error_12("<InputError>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set animOffset(value2) {
    throw new Error_12("<InputError>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get animOpacity() {
    throw new Error_12("<InputError>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set animOpacity(value2) {
    throw new Error_12("<InputError>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
};
var InputError_default = InputError;

// src/input/label/Label.svelte
var file7 = "src/input/label/Label.svelte";
function create_if_block5(ctx) {
  let label_1;
  let t;
  let label_1_class_value;
  const block = {
    c: function create() {
      label_1 = element2("label");
      t = text(
        /*label*/
        ctx[3]
      );
      attr_dev(label_1, "class", label_1_class_value = "label " + /*className*/
      ctx[1]);
      attr_dev(
        label_1,
        "for",
        /*_for*/
        ctx[2]
      );
      toggle_class(
        label_1,
        "disabled",
        /*disabled*/
        ctx[4]
      );
      add_location(label_1, file7, 1, 1, 13);
    },
    m: function mount(target, anchor) {
      insert_dev(target, label_1, anchor);
      append_dev(label_1, t);
      ctx[5](label_1);
    },
    p: function update2(ctx2, dirty) {
      if (dirty & /*label*/
      8)
        set_data_dev(
          t,
          /*label*/
          ctx2[3]
        );
      if (dirty & /*className*/
      2 && label_1_class_value !== (label_1_class_value = "label " + /*className*/
      ctx2[1])) {
        attr_dev(label_1, "class", label_1_class_value);
      }
      if (dirty & /*_for*/
      4) {
        attr_dev(
          label_1,
          "for",
          /*_for*/
          ctx2[2]
        );
      }
      if (dirty & /*className, disabled*/
      18) {
        toggle_class(
          label_1,
          "disabled",
          /*disabled*/
          ctx2[4]
        );
      }
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(label_1);
      }
      ctx[5](null);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block5.name,
    type: "if",
    source: "(1:0) {#if label}",
    ctx
  });
  return block;
}
function create_fragment12(ctx) {
  let if_block_anchor;
  let if_block = (
    /*label*/
    ctx[3] && create_if_block5(ctx)
  );
  const block = {
    c: function create() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
    },
    p: function update2(ctx2, [dirty]) {
      if (
        /*label*/
        ctx2[3]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block5(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(if_block_anchor);
      }
      if (if_block)
        if_block.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment12.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance12($$self2, $$props2, $$invalidate2) {
  let { $$slots: slots2 = {}, $$scope: $$scope2 } = $$props2;
  validate_slots("Label", slots2, []);
  let { class: className2 = "" } = $$props2;
  let { for: _for = "" } = $$props2;
  let { label: label2 = "" } = $$props2;
  let { disabled: disabled2 = false } = $$props2;
  let { element: element3 = void 0 } = $$props2;
  const writable_props = ["class", "for", "label", "disabled", "element"];
  Object.keys($$props2).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Label> was created with unknown prop '${key}'`);
  });
  function label_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element3 = $$value;
      $$invalidate2(0, element3);
    });
  }
  $$self2.$$set = ($$props3) => {
    if ("class" in $$props3)
      $$invalidate2(1, className2 = $$props3.class);
    if ("for" in $$props3)
      $$invalidate2(2, _for = $$props3.for);
    if ("label" in $$props3)
      $$invalidate2(3, label2 = $$props3.label);
    if ("disabled" in $$props3)
      $$invalidate2(4, disabled2 = $$props3.disabled);
    if ("element" in $$props3)
      $$invalidate2(0, element3 = $$props3.element);
  };
  $$self2.$capture_state = () => ({
    className: className2,
    _for,
    label: label2,
    disabled: disabled2,
    element: element3
  });
  $$self2.$inject_state = ($$props3) => {
    if ("className" in $$props3)
      $$invalidate2(1, className2 = $$props3.className);
    if ("_for" in $$props3)
      $$invalidate2(2, _for = $$props3._for);
    if ("label" in $$props3)
      $$invalidate2(3, label2 = $$props3.label);
    if ("disabled" in $$props3)
      $$invalidate2(4, disabled2 = $$props3.disabled);
    if ("element" in $$props3)
      $$invalidate2(0, element3 = $$props3.element);
  };
  if ($$props2 && "$$inject" in $$props2) {
    $$self2.$inject_state($$props2.$$inject);
  }
  return [element3, className2, _for, label2, disabled2, label_1_binding];
}
var Label = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance12, create_fragment12, safe_not_equal, {
      class: 1,
      for: 2,
      label: 3,
      disabled: 4,
      element: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Label",
      options,
      id: create_fragment12.name
    });
  }
  get class() {
    throw new Error("<Label>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set class(value2) {
    throw new Error("<Label>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get for() {
    throw new Error("<Label>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set for(value2) {
    throw new Error("<Label>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get label() {
    throw new Error("<Label>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set label(value2) {
    throw new Error("<Label>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get disabled() {
    throw new Error("<Label>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set disabled(value2) {
    throw new Error("<Label>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get element() {
    throw new Error("<Label>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set element(value2) {
    throw new Error("<Label>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
};
var Label_default = Label;

// src/input/combobox/Combobox.svelte
var file8 = "src/input/combobox/Combobox.svelte";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[74] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[77] = list[i];
  const constants_0 = (
    /*multiselect*/
    child_ctx[13] && /*selectedItems*/
    child_ctx[1].find(function func(...args) {
      return (
        /*func*/
        ctx[47](
          /*item*/
          child_ctx[77],
          ...args
        )
      );
    })
  );
  child_ctx[78] = constants_0;
  return child_ctx;
}
function create_if_block6(ctx) {
  let div;
  let t;
  let div_id_value;
  let div_class_value;
  let mounted;
  let dispose;
  function select_block_type(ctx2, dirty) {
    if (
      /*filteredData*/
      ctx2[14].length
    )
      return create_if_block_2;
    if (
      /*allowNew*/
      ctx2[7]
    )
      return create_if_block_6;
  }
  let current_block_type = select_block_type(ctx, [-1, -1, -1]);
  let if_block0 = current_block_type && current_block_type(ctx);
  let if_block1 = (
    /*shouldShowNewItem*/
    ctx[20] && create_if_block_1(ctx)
  );
  const block = {
    c: function create() {
      div = element2("div");
      if (if_block0)
        if_block0.c();
      t = space();
      if (if_block1)
        if_block1.c();
      attr_dev(div, "id", div_id_value = "combobox-list-" + /*gui*/
      ctx[22]);
      attr_dev(div, "class", div_class_value = "combobox-list " + /*opened*/
      (ctx[16] ? "" : "hidden"));
      attr_dev(div, "role", "listbox");
      toggle_class(
        div,
        "multiselect",
        /*multiselect*/
        ctx[13]
      );
      toggle_class(div, "empty", !/*filteredData*/
      ctx[14].length && !/*shouldShowNewItem*/
      ctx[20]);
      add_location(div, file8, 55, 1, 1340);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      if (if_block0)
        if_block0.m(div, null);
      append_dev(div, t);
      if (if_block1)
        if_block1.m(div, null);
      ctx[49](div);
      if (!mounted) {
        dispose = listen_dev(
          div,
          "mousedown",
          /*onListMouseDown*/
          ctx[28],
          false,
          false,
          false,
          false
        );
        mounted = true;
      }
    },
    p: function update2(ctx2, dirty) {
      if (current_block_type === (current_block_type = select_block_type(ctx2, dirty)) && if_block0) {
        if_block0.p(ctx2, dirty);
      } else {
        if (if_block0)
          if_block0.d(1);
        if_block0 = current_block_type && current_block_type(ctx2);
        if (if_block0) {
          if_block0.c();
          if_block0.m(div, t);
        }
      }
      if (
        /*shouldShowNewItem*/
        ctx2[20]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_1(ctx2);
          if_block1.c();
          if_block1.m(div, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (dirty[0] & /*opened*/
      65536 && div_class_value !== (div_class_value = "combobox-list " + /*opened*/
      (ctx2[16] ? "" : "hidden"))) {
        attr_dev(div, "class", div_class_value);
      }
      if (dirty[0] & /*opened, multiselect*/
      73728) {
        toggle_class(
          div,
          "multiselect",
          /*multiselect*/
          ctx2[13]
        );
      }
      if (dirty[0] & /*opened, filteredData, shouldShowNewItem*/
      1130496) {
        toggle_class(div, "empty", !/*filteredData*/
        ctx2[14].length && !/*shouldShowNewItem*/
        ctx2[20]);
      }
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div);
      }
      if (if_block0) {
        if_block0.d();
      }
      if (if_block1)
        if_block1.d();
      ctx[49](null);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block6.name,
    type: "if",
    source: "(55:0) {#if opened}",
    ctx
  });
  return block;
}
function create_if_block_6(ctx) {
  let div;
  const block = {
    c: function create() {
      div = element2("div");
      div.textContent = "No items found";
      attr_dev(div, "class", "combobox-list-empty");
      add_location(div, file8, 103, 3, 2995);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_6.name,
    type: "if",
    source: "(103:21) ",
    ctx
  });
  return block;
}
function create_if_block_2(ctx) {
  let each_1_anchor;
  let each_value = ensure_array_like_dev(
    /*groupedData*/
    ctx[18]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const block = {
    c: function create() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(target, anchor);
        }
      }
      insert_dev(target, each_1_anchor, anchor);
    },
    p: function update2(ctx2, dirty) {
      if (dirty[0] & /*groupedData, highlightIndex, multiselect, selectedItems, onclick*/
      537272322) {
        each_value = ensure_array_like_dev(
          /*groupedData*/
          ctx2[18]
        );
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(each_1_anchor);
      }
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_2.name,
    type: "if",
    source: "(64:2) {#if filteredData.length}",
    ctx
  });
  return block;
}
function create_if_block_5(ctx) {
  let div;
  let t_value = (
    /*group*/
    ctx[74].name + ""
  );
  let t;
  const block = {
    c: function create() {
      div = element2("div");
      t = text(t_value);
      attr_dev(div, "class", "combobox-list-header");
      add_location(div, file8, 66, 5, 1667);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, t);
    },
    p: function update2(ctx2, dirty) {
      if (dirty[0] & /*groupedData*/
      262144 && t_value !== (t_value = /*group*/
      ctx2[74].name + ""))
        set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_5.name,
    type: "if",
    source: "(66:4) {#if group.name}",
    ctx
  });
  return block;
}
function create_if_block_3(ctx) {
  let each_1_anchor;
  let each_value_1 = ensure_array_like_dev(
    /*group*/
    ctx[74].items
  );
  let each_blocks = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  const block = {
    c: function create() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(target, anchor);
        }
      }
      insert_dev(target, each_1_anchor, anchor);
    },
    p: function update2(ctx2, dirty) {
      if (dirty[0] & /*groupedData, highlightIndex, multiselect, selectedItems, onclick*/
      537272322) {
        each_value_1 = ensure_array_like_dev(
          /*group*/
          ctx2[74].items
        );
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_1(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_1.length;
      }
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(each_1_anchor);
      }
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_3.name,
    type: "if",
    source: "(69:4) {#if group.items}",
    ctx
  });
  return block;
}
function create_if_block_4(ctx) {
  let svg;
  let rect;
  let path;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      rect = svg_element("rect");
      path = svg_element("path");
      attr_dev(rect, "x", "4");
      attr_dev(rect, "y", "4");
      attr_dev(rect, "width", "16");
      attr_dev(rect, "height", "16");
      attr_dev(rect, "rx", "3");
      add_location(rect, file8, 93, 9, 2718);
      attr_dev(path, "class", "tick");
      attr_dev(path, "d", "M8 12l3 3l5.5 -5.5");
      add_location(path, file8, 94, 9, 2783);
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr_dev(svg, "viewBox", "0 0 24 24");
      attr_dev(svg, "stroke-width", "1.5");
      attr_dev(svg, "stroke", "currentColor");
      attr_dev(svg, "fill", "none");
      attr_dev(svg, "stroke-linecap", "round");
      attr_dev(svg, "stroke-linejoin", "round");
      attr_dev(svg, "class", "icon icon-tabler icon-tabler-square-check");
      add_location(svg, file8, 92, 8, 2498);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, rect);
      append_dev(svg, path);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(svg);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_4.name,
    type: "if",
    source: "(92:7) {#if multiselect}",
    ctx
  });
  return block;
}
function create_each_block_1(ctx) {
  let div;
  let t0;
  let span;
  let raw_value = (
    /*item*/
    (ctx[77].highlightedName || /*item*/
    ctx[77].name) + ""
  );
  let t1;
  let div_aria_selected_value;
  let div_aria_checked_value;
  let mounted;
  let dispose;
  let if_block = (
    /*multiselect*/
    ctx[13] && create_if_block_4(ctx)
  );
  function click_handler(...args) {
    return (
      /*click_handler*/
      ctx[44](
        /*item*/
        ctx[77],
        ...args
      )
    );
  }
  function mouseenter_handler() {
    return (
      /*mouseenter_handler*/
      ctx[45](
        /*item*/
        ctx[77]
      )
    );
  }
  function mouseup_handler(...args) {
    return (
      /*mouseup_handler*/
      ctx[46](
        /*item*/
        ctx[77],
        ...args
      )
    );
  }
  const block = {
    c: function create() {
      div = element2("div");
      if (if_block)
        if_block.c();
      t0 = space();
      span = element2("span");
      t1 = space();
      add_location(span, file8, 97, 7, 2868);
      attr_dev(div, "role", "option");
      attr_dev(div, "class", "combobox-list-item");
      attr_dev(div, "aria-selected", div_aria_selected_value = /*item*/
      ctx[77].idx === /*highlightIndex*/
      ctx[17]);
      attr_dev(div, "aria-checked", div_aria_checked_value = !!/*isChecked*/
      ctx[78]);
      toggle_class(div, "in-group", !!/*item*/
      ctx[77].group);
      toggle_class(
        div,
        "selected",
        /*item*/
        ctx[77].idx === /*highlightIndex*/
        ctx[17]
      );
      toggle_class(
        div,
        "checked",
        /*isChecked*/
        ctx[78]
      );
      add_location(div, file8, 73, 6, 1930);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      if (if_block)
        if_block.m(div, null);
      append_dev(div, t0);
      append_dev(div, span);
      span.innerHTML = raw_value;
      append_dev(div, t1);
      if (!mounted) {
        dispose = [
          listen_dev(div, "click", click_handler, false, false, false, false),
          listen_dev(div, "mouseenter", mouseenter_handler, false, false, false, false),
          listen_dev(div, "mousedown", prevent_default(
            /*mousedown_handler*/
            ctx[41]
          ), false, true, false, false),
          listen_dev(div, "mouseup", mouseup_handler, false, false, false, false),
          listen_dev(div, "touchstart", touchStart, false, false, false, false),
          listen_dev(div, "touchend", touchEnd, false, false, false, false)
        ];
        mounted = true;
      }
    },
    p: function update2(new_ctx, dirty) {
      ctx = new_ctx;
      if (
        /*multiselect*/
        ctx[13]
      ) {
        if (if_block) {
        } else {
          if_block = create_if_block_4(ctx);
          if_block.c();
          if_block.m(div, t0);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (dirty[0] & /*groupedData*/
      262144 && raw_value !== (raw_value = /*item*/
      (ctx[77].highlightedName || /*item*/
      ctx[77].name) + ""))
        span.innerHTML = raw_value;
      ;
      if (dirty[0] & /*groupedData, highlightIndex*/
      393216 && div_aria_selected_value !== (div_aria_selected_value = /*item*/
      ctx[77].idx === /*highlightIndex*/
      ctx[17])) {
        attr_dev(div, "aria-selected", div_aria_selected_value);
      }
      if (dirty[0] & /*multiselect, selectedItems, groupedData*/
      270338 && div_aria_checked_value !== (div_aria_checked_value = !!/*isChecked*/
      ctx[78])) {
        attr_dev(div, "aria-checked", div_aria_checked_value);
      }
      if (dirty[0] & /*groupedData*/
      262144) {
        toggle_class(div, "in-group", !!/*item*/
        ctx[77].group);
      }
      if (dirty[0] & /*groupedData, highlightIndex*/
      393216) {
        toggle_class(
          div,
          "selected",
          /*item*/
          ctx[77].idx === /*highlightIndex*/
          ctx[17]
        );
      }
      if (dirty[0] & /*multiselect, selectedItems, groupedData*/
      270338) {
        toggle_class(
          div,
          "checked",
          /*isChecked*/
          ctx[78]
        );
      }
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div);
      }
      if (if_block)
        if_block.d();
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block_1.name,
    type: "each",
    source: "(70:5) {#each group.items as item}",
    ctx
  });
  return block;
}
function create_each_block(ctx) {
  let t;
  let if_block1_anchor;
  let if_block0 = (
    /*group*/
    ctx[74].name && create_if_block_5(ctx)
  );
  let if_block1 = (
    /*group*/
    ctx[74].items && create_if_block_3(ctx)
  );
  const block = {
    c: function create() {
      if (if_block0)
        if_block0.c();
      t = space();
      if (if_block1)
        if_block1.c();
      if_block1_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (if_block0)
        if_block0.m(target, anchor);
      insert_dev(target, t, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_dev(target, if_block1_anchor, anchor);
    },
    p: function update2(ctx2, dirty) {
      if (
        /*group*/
        ctx2[74].name
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_5(ctx2);
          if_block0.c();
          if_block0.m(t.parentNode, t);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (
        /*group*/
        ctx2[74].items
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_3(ctx2);
          if_block1.c();
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
        detach_dev(if_block1_anchor);
      }
      if (if_block0)
        if_block0.d(detaching);
      if (if_block1)
        if_block1.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(65:3) {#each groupedData as group}",
    ctx
  });
  return block;
}
function create_if_block_1(ctx) {
  let div0;
  let t1;
  let div1;
  let t2;
  let div1_aria_selected_value;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      div0 = element2("div");
      div0.textContent = "Create new item";
      t1 = space();
      div1 = element2("div");
      t2 = text(
        /*newItemName*/
        ctx[19]
      );
      attr_dev(div0, "class", "combobox-list-header");
      add_location(div0, file8, 107, 2, 3086);
      attr_dev(div1, "role", "option");
      attr_dev(div1, "class", "combobox-list-item");
      attr_dev(div1, "aria-selected", div1_aria_selected_value = /*highlightIndex*/
      ctx[17] === /*filteredData*/
      ctx[14].length);
      toggle_class(
        div1,
        "selected",
        /*highlightIndex*/
        ctx[17] === /*filteredData*/
        ctx[14].length
      );
      add_location(div1, file8, 108, 3, 3145);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div0, anchor);
      insert_dev(target, t1, anchor);
      insert_dev(target, div1, anchor);
      append_dev(div1, t2);
      if (!mounted) {
        dispose = listen_dev(
          div1,
          "click",
          /*click_handler_1*/
          ctx[48],
          false,
          false,
          false,
          false
        );
        mounted = true;
      }
    },
    p: function update2(ctx2, dirty) {
      if (dirty[0] & /*newItemName*/
      524288)
        set_data_dev(
          t2,
          /*newItemName*/
          ctx2[19]
        );
      if (dirty[0] & /*highlightIndex, filteredData*/
      147456 && div1_aria_selected_value !== (div1_aria_selected_value = /*highlightIndex*/
      ctx2[17] === /*filteredData*/
      ctx2[14].length)) {
        attr_dev(div1, "aria-selected", div1_aria_selected_value);
      }
      if (dirty[0] & /*highlightIndex, filteredData*/
      147456) {
        toggle_class(
          div1,
          "selected",
          /*highlightIndex*/
          ctx2[17] === /*filteredData*/
          ctx2[14].length
        );
      }
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div0);
        detach_dev(t1);
        detach_dev(div1);
      }
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1.name,
    type: "if",
    source: "(107:2) {#if shouldShowNewItem}",
    ctx
  });
  return block;
}
function create_fragment13(ctx) {
  let div2;
  let label_1;
  let t0;
  let info_1;
  let t1;
  let div1;
  let inputerror;
  let t2;
  let div0;
  let button;
  let t3;
  let input;
  let input_aria_controls_value;
  let input_aria_errormessage_value;
  let input_placeholder_value;
  let div2_class_value;
  let t4;
  let if_block_anchor;
  let current;
  let mounted;
  let dispose;
  label_1 = new Label_default({
    props: {
      label: (
        /*label*/
        ctx[8]
      ),
      disabled: (
        /*disabled*/
        ctx[5]
      ),
      for: (
        /*_id*/
        ctx[21]
      )
    },
    $$inline: true
  });
  info_1 = new Info_default({
    props: { msg: (
      /*info*/
      ctx[10]
    ) },
    $$inline: true
  });
  inputerror = new InputError_default({
    props: {
      id: (
        /*errorMessageId*/
        ctx[23]
      ),
      msg: (
        /*error*/
        ctx[9]
      )
    },
    $$inline: true
  });
  button = new Button_default({
    props: {
      link: true,
      icon: "dots",
      class: "combobox-button",
      tabindex: "-1"
    },
    $$inline: true
  });
  button.$on(
    "mousedown",
    /*onIconMouseDown*/
    ctx[31]
  );
  button.$on(
    "click",
    /*onIconClick*/
    ctx[32]
  );
  let input_levels = [
    { type: "text" },
    { role: "combobox" },
    { class: "prevent-scrolling-on-focus" },
    { "aria-autocomplete": "list" },
    {
      "aria-controls": input_aria_controls_value = "combobox-list-" + /*gui*/
      ctx[22]
    },
    { "aria-expanded": (
      /*opened*/
      ctx[16]
    ) },
    { "aria-invalid": (
      /*error*/
      ctx[9]
    ) },
    {
      "aria-errormessage": input_aria_errormessage_value = /*error*/
      ctx[9] ? (
        /*errorMessageId*/
        ctx[23]
      ) : void 0
    },
    { "aria-required": (
      /*required*/
      ctx[6]
    ) },
    { autocomplete: "off" },
    { value: (
      /*inputValue*/
      ctx[15]
    ) },
    { disabled: (
      /*disabled*/
      ctx[5]
    ) },
    {
      placeholder: input_placeholder_value = /*multiselect*/
      ctx[13] && /*opened*/
      ctx[16] ? "Type to filter..." : (
        /*placeholder*/
        ctx[12]
      )
    },
    { id: (
      /*_id*/
      ctx[21]
    ) },
    /*$$restProps*/
    ctx[33]
  ];
  let input_data = {};
  for (let i = 0; i < input_levels.length; i += 1) {
    input_data = assign(input_data, input_levels[i]);
  }
  let if_block = (
    /*opened*/
    ctx[16] && create_if_block6(ctx)
  );
  const block = {
    c: function create() {
      div2 = element2("div");
      create_component(label_1.$$.fragment);
      t0 = space();
      create_component(info_1.$$.fragment);
      t1 = space();
      div1 = element2("div");
      create_component(inputerror.$$.fragment);
      t2 = space();
      div0 = element2("div");
      create_component(button.$$.fragment);
      t3 = space();
      input = element2("input");
      t4 = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      set_attributes(input, input_data);
      add_location(input, file8, 23, 3, 543);
      attr_dev(div0, "class", "input-row");
      attr_dev(
        div0,
        "title",
        /*inputValue*/
        ctx[15]
      );
      add_location(div0, file8, 14, 2, 344);
      attr_dev(div1, "class", "input-inner");
      toggle_class(
        div1,
        "disabled",
        /*disabled*/
        ctx[5]
      );
      add_location(div1, file8, 11, 1, 247);
      attr_dev(div2, "class", div2_class_value = "input combobox " + /*className*/
      ctx[4]);
      toggle_class(
        div2,
        "open",
        /*opened*/
        ctx[16]
      );
      toggle_class(
        div2,
        "has-error",
        /*error*/
        ctx[9]
      );
      toggle_class(div2, "label-on-the-left", !!/*labelOnTheLeft*/
      ctx[11]);
      toggle_class(
        div2,
        "multiselect",
        /*multiselect*/
        ctx[13]
      );
      add_location(div2, file8, 0, 0, 0);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div2, anchor);
      mount_component(label_1, div2, null);
      append_dev(div2, t0);
      mount_component(info_1, div2, null);
      append_dev(div2, t1);
      append_dev(div2, div1);
      mount_component(inputerror, div1, null);
      append_dev(div1, t2);
      append_dev(div1, div0);
      mount_component(button, div0, null);
      append_dev(div0, t3);
      append_dev(div0, input);
      if ("value" in input_data) {
        input.value = input_data.value;
      }
      if (input.autofocus)
        input.focus();
      ctx[42](input);
      ctx[43](div2);
      insert_dev(target, t4, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
      if (!mounted) {
        dispose = [
          listen_dev(
            input,
            "input",
            /*oninput*/
            ctx[26],
            false,
            false,
            false,
            false
          ),
          listen_dev(
            input,
            "focus",
            /*onfocus*/
            ctx[25],
            false,
            false,
            false,
            false
          ),
          listen_dev(
            input,
            "mousedown",
            /*open*/
            ctx[24],
            false,
            false,
            false,
            false
          ),
          listen_dev(
            input,
            "click",
            /*open*/
            ctx[24],
            false,
            false,
            false,
            false
          ),
          listen_dev(
            input,
            "blur",
            /*onblur*/
            ctx[27],
            false,
            false,
            false,
            false
          ),
          listen_dev(
            input,
            "keydown",
            /*onkeydown*/
            ctx[30],
            true,
            false,
            false,
            false
          )
        ];
        mounted = true;
      }
    },
    p: function update2(ctx2, dirty) {
      const label_1_changes = {};
      if (dirty[0] & /*label*/
      256)
        label_1_changes.label = /*label*/
        ctx2[8];
      if (dirty[0] & /*disabled*/
      32)
        label_1_changes.disabled = /*disabled*/
        ctx2[5];
      if (dirty[0] & /*_id*/
      2097152)
        label_1_changes.for = /*_id*/
        ctx2[21];
      label_1.$set(label_1_changes);
      const info_1_changes = {};
      if (dirty[0] & /*info*/
      1024)
        info_1_changes.msg = /*info*/
        ctx2[10];
      info_1.$set(info_1_changes);
      const inputerror_changes = {};
      if (dirty[0] & /*error*/
      512)
        inputerror_changes.msg = /*error*/
        ctx2[9];
      inputerror.$set(inputerror_changes);
      set_attributes(input, input_data = get_spread_update(input_levels, [
        { type: "text" },
        { role: "combobox" },
        { class: "prevent-scrolling-on-focus" },
        { "aria-autocomplete": "list" },
        {
          "aria-controls": input_aria_controls_value
        },
        (!current || dirty[0] & /*opened*/
        65536) && { "aria-expanded": (
          /*opened*/
          ctx2[16]
        ) },
        (!current || dirty[0] & /*error*/
        512) && { "aria-invalid": (
          /*error*/
          ctx2[9]
        ) },
        (!current || dirty[0] & /*error*/
        512 && input_aria_errormessage_value !== (input_aria_errormessage_value = /*error*/
        ctx2[9] ? (
          /*errorMessageId*/
          ctx2[23]
        ) : void 0)) && {
          "aria-errormessage": input_aria_errormessage_value
        },
        (!current || dirty[0] & /*required*/
        64) && { "aria-required": (
          /*required*/
          ctx2[6]
        ) },
        { autocomplete: "off" },
        (!current || dirty[0] & /*inputValue*/
        32768 && input.value !== /*inputValue*/
        ctx2[15]) && { value: (
          /*inputValue*/
          ctx2[15]
        ) },
        (!current || dirty[0] & /*disabled*/
        32) && { disabled: (
          /*disabled*/
          ctx2[5]
        ) },
        (!current || dirty[0] & /*multiselect, opened, placeholder*/
        77824 && input_placeholder_value !== (input_placeholder_value = /*multiselect*/
        ctx2[13] && /*opened*/
        ctx2[16] ? "Type to filter..." : (
          /*placeholder*/
          ctx2[12]
        ))) && { placeholder: input_placeholder_value },
        (!current || dirty[0] & /*_id*/
        2097152) && { id: (
          /*_id*/
          ctx2[21]
        ) },
        dirty[1] & /*$$restProps*/
        4 && /*$$restProps*/
        ctx2[33]
      ]));
      if ("value" in input_data) {
        input.value = input_data.value;
      }
      if (!current || dirty[0] & /*inputValue*/
      32768) {
        attr_dev(
          div0,
          "title",
          /*inputValue*/
          ctx2[15]
        );
      }
      if (!current || dirty[0] & /*disabled*/
      32) {
        toggle_class(
          div1,
          "disabled",
          /*disabled*/
          ctx2[5]
        );
      }
      if (!current || dirty[0] & /*className*/
      16 && div2_class_value !== (div2_class_value = "input combobox " + /*className*/
      ctx2[4])) {
        attr_dev(div2, "class", div2_class_value);
      }
      if (!current || dirty[0] & /*className, opened*/
      65552) {
        toggle_class(
          div2,
          "open",
          /*opened*/
          ctx2[16]
        );
      }
      if (!current || dirty[0] & /*className, error*/
      528) {
        toggle_class(
          div2,
          "has-error",
          /*error*/
          ctx2[9]
        );
      }
      if (!current || dirty[0] & /*className, labelOnTheLeft*/
      2064) {
        toggle_class(div2, "label-on-the-left", !!/*labelOnTheLeft*/
        ctx2[11]);
      }
      if (!current || dirty[0] & /*className, multiselect*/
      8208) {
        toggle_class(
          div2,
          "multiselect",
          /*multiselect*/
          ctx2[13]
        );
      }
      if (
        /*opened*/
        ctx2[16]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block6(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(label_1.$$.fragment, local);
      transition_in(info_1.$$.fragment, local);
      transition_in(inputerror.$$.fragment, local);
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label_1.$$.fragment, local);
      transition_out(info_1.$$.fragment, local);
      transition_out(inputerror.$$.fragment, local);
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div2);
        detach_dev(t4);
        detach_dev(if_block_anchor);
      }
      destroy_component(label_1);
      destroy_component(info_1);
      destroy_component(inputerror);
      destroy_component(button);
      ctx[42](null);
      ctx[43](null);
      if (if_block)
        if_block.d(detaching);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment13.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function touchStart(e) {
  const el = e.target.closest(".combobox-list-item");
  el.classList.add("blinking");
}
function touchEnd(e) {
  const el = e.target.closest(".combobox-list-item");
  requestAnimationFrame(() => el.classList.remove("blinking"));
}
function instance13($$self2, $$props2, $$invalidate2) {
  let _id2;
  let valueMatchesItem;
  let shouldShowNewItem;
  const omit_props_names2 = [
    "class",
    "disabled",
    "required",
    "id",
    "items",
    "value",
    "allowNew",
    "clearOnEsc",
    "showOnFocus",
    "hideOnResize",
    "label",
    "error",
    "info",
    "labelOnTheLeft",
    "placeholder",
    "multiselect",
    "selectedItems",
    "element",
    "inputElement",
    "listElement"
  ];
  let $$restProps2 = compute_rest_props($$props2, omit_props_names2);
  let { $$slots: slots2 = {}, $$scope: $$scope2 } = $$props2;
  validate_slots("Combobox", slots2, []);
  let { class: className2 = "" } = $$props2;
  let { disabled: disabled2 = false } = $$props2;
  let { required: required2 = void 0 } = $$props2;
  let { id: id2 = "" } = $$props2;
  let { items = [] } = $$props2;
  let { value: value2 = null } = $$props2;
  let { allowNew = void 0 } = $$props2;
  let { clearOnEsc = void 0 } = $$props2;
  let { showOnFocus = void 0 } = $$props2;
  let { hideOnResize = void 0 } = $$props2;
  let { label: label2 = "" } = $$props2;
  let { error: error2 = void 0 } = $$props2;
  let { info: info2 = void 0 } = $$props2;
  let { labelOnTheLeft: labelOnTheLeft2 = void 0 } = $$props2;
  let { placeholder = void 0 } = $$props2;
  let { multiselect = void 0 } = $$props2;
  let { selectedItems = [] } = $$props2;
  let { element: element3 = void 0 } = $$props2;
  let { inputElement: inputElement2 = void 0 } = $$props2;
  let { listElement = void 0 } = $$props2;
  const dispatch3 = createEventDispatcher();
  const gui = guid();
  const errorMessageId2 = guid();
  let inputValue = getInputValue(value2, multiselect);
  let originalItems = null;
  let opened = false;
  let hasEdited = false;
  let highlightIndex = 0;
  let filteredData = [], groupedData = [];
  let originalText = "";
  let hasSetValue = true;
  let isSelecting = false;
  let isHiding = false;
  let newItemName = "";
  onDestroy(() => {
    if (listElement)
      listElement.remove();
  });
  afterUpdate(() => {
    if (!opened && items.length) {
      originalItems = deepCopy(items);
      if (items.length && typeof items[0] === "string") {
        $$invalidate2(34, items = items.map((item) => ({ name: item })));
      }
      filter();
      setInitialValue();
    }
  });
  function filter() {
    let filtered = deepCopy(items);
    if (hasEdited && inputElement2.value) {
      const q = inputElement2.value.toLowerCase().trim();
      filtered = filtered.filter((item) => fuzzy(item.name, q)).map((item) => {
        item.highlightedName = emphasize(item.name, q);
        item.score = 1;
        if (item.name.toLowerCase().includes(q))
          item.score = 2;
        if (item.name.includes(q))
          item.score = 3;
        if (item.name.toLowerCase() === q)
          item.score = 4;
        if (item.name === q)
          item.score = 5;
        return item;
      }).sort((a, b) => b.score - a.score);
    }
    $$invalidate2(18, groupedData = groupData(filtered));
    const filteredAndSorted = [];
    let idx = 0;
    groupedData.forEach((g) => {
      g.items.forEach((i) => {
        i.idx = idx++;
        filteredAndSorted.push(i);
      });
    });
    $$invalidate2(14, filteredData = filteredAndSorted);
    $$invalidate2(17, highlightIndex = 0);
    scrollToSelectedItem(listElement);
    alignDropdown(listElement, inputElement2);
  }
  function open(e) {
    const type = e?.type;
    const clickOnMobile = isMobile() && type === "click";
    const mousedownOnDesktop = !isMobile() && type === "mousedown";
    const typing = type === "typing";
    const navigating = type === "navigating";
    if (!clickOnMobile && !mousedownOnDesktop && !typing && !navigating)
      return;
    if (mousedownOnDesktop && opened)
      return close();
    if (opened)
      return;
    $$invalidate2(16, opened = true);
    hasEdited = false;
    if (multiselect) {
      if (!typing) {
        $$invalidate2(0, inputElement2.value = "", inputElement2);
        $$invalidate2(15, inputValue = "");
      }
      filter();
    }
    requestAnimationFrame(() => {
      if (listElement && listElement.parentElement !== document.body) {
        document.body.appendChild(listElement);
      }
      addEventListeners();
      alignDropdown(listElement, inputElement2, e);
    });
  }
  function close() {
    if (!opened)
      return;
    removeEventListeners();
    $$invalidate2(16, opened = false);
    isSelecting = false;
    const empty2 = !inputElement2.value;
    const notInList = !multiselect && !allowNew && inputElement2.value !== inputValue;
    const notInSelected = multiselect && inputElement2.value !== inputValue;
    if (empty2 || notInList || notInSelected)
      revert();
  }
  function selectSingle(item) {
    if (multiselect || hasSetValue)
      return;
    const oldValue = deepCopy(value2);
    if (!item) {
      if (filteredData[highlightIndex])
        item = filteredData[highlightIndex];
      else if (allowNew)
        item = { name: inputElement2.value };
      else if (value2 && value2.name && inputElement2.value !== value2.name)
        $$invalidate2(15, inputValue = value2.name);
    }
    if (item) {
      $$invalidate2(35, value2 = findValueInSource(item, originalItems) || item);
      if (value2 && value2.name && inputElement2.value !== value2.name)
        $$invalidate2(15, inputValue = item.name);
    }
    hasSetValue = true;
    if (hasValueChanged(oldValue, value2))
      dispatch3("change", { value: value2, oldValue });
    requestAnimationFrame(() => {
      inputElement2.select();
      close();
    });
  }
  function selectMultiselect(item) {
    const oldValue = deepCopy(value2);
    $$invalidate2(1, selectedItems = selectedItems || []);
    const itemId = item.id || item.name || item;
    const itemIndex = selectedItems.findIndex((i) => (i?.id || i?.name || i) === itemId);
    if (itemIndex === -1)
      selectedItems.push(item);
    else
      selectedItems.splice(itemIndex, 1);
    $$invalidate2(35, value2 = findValueInSource(selectedItems, originalItems) || []);
    if (hasValueChanged(oldValue, value2, true))
      dispatch3("change", { value: value2, oldValue });
    requestAnimationFrame(() => inputElement2.select());
  }
  function setInitialValue() {
    if (!filteredData || !filteredData.length)
      return;
    if (multiselect) {
      if (value2 === null || value2 === void 0)
        $$invalidate2(35, value2 = []);
      if (!Array.isArray(value2))
        $$invalidate2(35, value2 = [value2]);
      const selectedIds = value2.map((i) => i?.id || i?.name || i);
      $$invalidate2(1, selectedItems = originalItems.filter((i) => selectedIds.includes(i.id || i.name || i)));
      if (opened)
        $$invalidate2(15, inputValue = "");
      else
        $$invalidate2(15, inputValue = getInputValue(selectedItems, multiselect));
    } else {
      const itemId = value2?.id || value2?.name || value2;
      if (itemId) {
        const item = filteredData.find((i) => (i.id || i.name || i) === itemId);
        if (item) {
          $$invalidate2(17, highlightIndex = item.idx);
          $$invalidate2(0, inputElement2.value = filteredData[highlightIndex].name, inputElement2);
        }
        scrollToSelectedItem(listElement);
      } else
        $$invalidate2(0, inputElement2.value = "", inputElement2);
    }
  }
  function up() {
    if (!opened)
      return open({ type: "navigating" });
    let idx = highlightIndex - 1;
    while (idx > 0 && !filteredData[idx])
      idx -= 1;
    if (idx !== highlightIndex && filteredData[idx]) {
      $$invalidate2(17, highlightIndex = filteredData[idx].idx);
      scrollToSelectedItem(listElement);
    }
  }
  function down() {
    if (!opened)
      return open({ type: "navigating" });
    let idx = highlightIndex + 1;
    while (idx < filteredData.length - 1 && !filteredData[idx])
      idx += 1;
    let item = filteredData[idx];
    if (shouldShowNewItem && idx === filteredData.length) {
      item = { idx: filteredData.length };
    }
    if (idx !== highlightIndex && item) {
      $$invalidate2(17, highlightIndex = item.idx);
      scrollToSelectedItem(listElement);
    }
  }
  function revert() {
    if (multiselect) {
      $$invalidate2(0, inputElement2.value = $$invalidate2(15, inputValue = getInputValue(selectedItems, multiselect)), inputElement2);
    } else if (originalText && originalText !== inputElement2.value)
      $$invalidate2(0, inputElement2.value = originalText, inputElement2);
    else if (value2 && value2.name)
      $$invalidate2(0, inputElement2.value = value2.name, inputElement2);
    else
      $$invalidate2(0, inputElement2.value = "", inputElement2);
  }
  function clear() {
    $$invalidate2(0, inputElement2.value = "", inputElement2);
    filter();
    requestAnimationFrame(() => inputElement2.select());
  }
  function onfocus() {
    originalText = inputElement2.value;
    if (showOnFocus)
      open({ type: "navigating" });
  }
  function oninput() {
    open({ type: "typing" });
    requestAnimationFrame(filter);
    hasEdited = true;
    hasSetValue = false;
    $$invalidate2(19, newItemName = inputElement2.value);
  }
  function onblur() {
    if (!isSelecting)
      close();
  }
  function onListMouseDown() {
    isSelecting = true;
  }
  function onclick3(item, e) {
    if (isMobile() && e?.type !== "click")
      return e.preventDefault();
    if (!isMobile() && e?.type === "click")
      return;
    if (multiselect)
      selectMultiselect(item);
    else {
      hasSetValue = false;
      selectSingle(item);
    }
  }
  function onkeydown2(e) {
    if (e.key === "Tab")
      return close();
    const fnmap = {
      ArrowDown: down,
      ArrowUp: up,
      Escape: onEsc,
      " ": onSpace,
      Enter: onEnter
    };
    if (typeof fnmap[e.key] === "function") {
      e.preventDefault();
      fnmap[e.key](e);
    }
  }
  function onEnter() {
    if (!opened)
      return open({ type: "navigating" });
    if (multiselect) {
      close();
      inputElement2.select();
    } else {
      hasSetValue = false;
      selectSingle();
    }
  }
  function onSpace(e) {
    if (!multiselect || !opened)
      return;
    const item = filteredData[highlightIndex];
    onclick3(item, e);
  }
  function onEsc(e) {
    if (clearOnEsc && inputElement2.value) {
      e.stopPropagation();
      return clear();
    }
    if (opened) {
      e.stopPropagation();
      revert();
      inputElement2.select();
      return close();
    }
    dispatch3("keydown", e);
  }
  function onIconMouseDown() {
    isHiding = opened;
  }
  function onIconClick() {
    if (isHiding)
      close();
    else
      open({ type: "navigating" });
    isHiding = false;
    if (inputElement2)
      inputElement2.select();
  }
  function onResize() {
    if (!opened)
      return;
    if (hideOnResize)
      return;
    inputElement2.blur();
    return close();
  }
  function onViewportResize() {
    if (!opened)
      return;
    alignDropdown(listElement, inputElement2);
  }
  function onDocumentClick(e) {
    const notEl = element3 && !element3.contains(e.target);
    const notList = listElement && !listElement.contains(e.target);
    if (open && notEl && notList)
      close();
  }
  function addEventListeners() {
    window.addEventListener("resize", onResize);
    document.addEventListener("click", onDocumentClick, true);
    window.visualViewport.addEventListener("resize", onViewportResize);
  }
  function removeEventListeners() {
    window.removeEventListener("resize", onResize);
    document.removeEventListener("click", onDocumentClick, true);
    window.visualViewport.removeEventListener("resize", onViewportResize);
  }
  function mousedown_handler(event) {
    bubble.call(this, $$self2, event);
  }
  function input_binding2($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      inputElement2 = $$value;
      $$invalidate2(0, inputElement2);
    });
  }
  function div2_binding2($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element3 = $$value;
      $$invalidate2(2, element3);
    });
  }
  const click_handler = (item, e) => onclick3(item, e);
  const mouseenter_handler = (item) => $$invalidate2(17, highlightIndex = item.idx);
  const mouseup_handler = (item, e) => onclick3(item, e);
  const func = (item, i) => (i.id || i.name || i) === (item.id || item.name || item);
  const click_handler_1 = () => onclick3({
    name: newItemName,
    idx: filteredData.length
  });
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      listElement = $$value;
      $$invalidate2(3, listElement);
    });
  }
  $$self2.$$set = ($$new_props) => {
    $$props2 = assign(assign({}, $$props2), exclude_internal_props($$new_props));
    $$invalidate2(33, $$restProps2 = compute_rest_props($$props2, omit_props_names2));
    if ("class" in $$new_props)
      $$invalidate2(4, className2 = $$new_props.class);
    if ("disabled" in $$new_props)
      $$invalidate2(5, disabled2 = $$new_props.disabled);
    if ("required" in $$new_props)
      $$invalidate2(6, required2 = $$new_props.required);
    if ("id" in $$new_props)
      $$invalidate2(36, id2 = $$new_props.id);
    if ("items" in $$new_props)
      $$invalidate2(34, items = $$new_props.items);
    if ("value" in $$new_props)
      $$invalidate2(35, value2 = $$new_props.value);
    if ("allowNew" in $$new_props)
      $$invalidate2(7, allowNew = $$new_props.allowNew);
    if ("clearOnEsc" in $$new_props)
      $$invalidate2(37, clearOnEsc = $$new_props.clearOnEsc);
    if ("showOnFocus" in $$new_props)
      $$invalidate2(38, showOnFocus = $$new_props.showOnFocus);
    if ("hideOnResize" in $$new_props)
      $$invalidate2(39, hideOnResize = $$new_props.hideOnResize);
    if ("label" in $$new_props)
      $$invalidate2(8, label2 = $$new_props.label);
    if ("error" in $$new_props)
      $$invalidate2(9, error2 = $$new_props.error);
    if ("info" in $$new_props)
      $$invalidate2(10, info2 = $$new_props.info);
    if ("labelOnTheLeft" in $$new_props)
      $$invalidate2(11, labelOnTheLeft2 = $$new_props.labelOnTheLeft);
    if ("placeholder" in $$new_props)
      $$invalidate2(12, placeholder = $$new_props.placeholder);
    if ("multiselect" in $$new_props)
      $$invalidate2(13, multiselect = $$new_props.multiselect);
    if ("selectedItems" in $$new_props)
      $$invalidate2(1, selectedItems = $$new_props.selectedItems);
    if ("element" in $$new_props)
      $$invalidate2(2, element3 = $$new_props.element);
    if ("inputElement" in $$new_props)
      $$invalidate2(0, inputElement2 = $$new_props.inputElement);
    if ("listElement" in $$new_props)
      $$invalidate2(3, listElement = $$new_props.listElement);
  };
  $$self2.$capture_state = () => ({
    afterUpdate,
    createEventDispatcher,
    onDestroy,
    emphasize,
    scrollToSelectedItem,
    groupData,
    findValueInSource,
    getInputValue,
    alignDropdown,
    hasValueChanged,
    deepCopy,
    fuzzy,
    guid,
    isMobile,
    Button: Button_default,
    Info: Info_default,
    InputError: InputError_default,
    Label: Label_default,
    className: className2,
    disabled: disabled2,
    required: required2,
    id: id2,
    items,
    value: value2,
    allowNew,
    clearOnEsc,
    showOnFocus,
    hideOnResize,
    label: label2,
    error: error2,
    info: info2,
    labelOnTheLeft: labelOnTheLeft2,
    placeholder,
    multiselect,
    selectedItems,
    element: element3,
    inputElement: inputElement2,
    listElement,
    dispatch: dispatch3,
    gui,
    errorMessageId: errorMessageId2,
    inputValue,
    originalItems,
    opened,
    hasEdited,
    highlightIndex,
    filteredData,
    groupedData,
    originalText,
    hasSetValue,
    isSelecting,
    isHiding,
    newItemName,
    filter,
    open,
    close,
    selectSingle,
    selectMultiselect,
    setInitialValue,
    up,
    down,
    revert,
    clear,
    onfocus,
    oninput,
    onblur,
    onListMouseDown,
    touchStart,
    touchEnd,
    onclick: onclick3,
    onkeydown: onkeydown2,
    onEnter,
    onSpace,
    onEsc,
    onIconMouseDown,
    onIconClick,
    onResize,
    onViewportResize,
    onDocumentClick,
    addEventListeners,
    removeEventListeners,
    shouldShowNewItem,
    valueMatchesItem,
    _id: _id2
  });
  $$self2.$inject_state = ($$new_props) => {
    if ("className" in $$props2)
      $$invalidate2(4, className2 = $$new_props.className);
    if ("disabled" in $$props2)
      $$invalidate2(5, disabled2 = $$new_props.disabled);
    if ("required" in $$props2)
      $$invalidate2(6, required2 = $$new_props.required);
    if ("id" in $$props2)
      $$invalidate2(36, id2 = $$new_props.id);
    if ("items" in $$props2)
      $$invalidate2(34, items = $$new_props.items);
    if ("value" in $$props2)
      $$invalidate2(35, value2 = $$new_props.value);
    if ("allowNew" in $$props2)
      $$invalidate2(7, allowNew = $$new_props.allowNew);
    if ("clearOnEsc" in $$props2)
      $$invalidate2(37, clearOnEsc = $$new_props.clearOnEsc);
    if ("showOnFocus" in $$props2)
      $$invalidate2(38, showOnFocus = $$new_props.showOnFocus);
    if ("hideOnResize" in $$props2)
      $$invalidate2(39, hideOnResize = $$new_props.hideOnResize);
    if ("label" in $$props2)
      $$invalidate2(8, label2 = $$new_props.label);
    if ("error" in $$props2)
      $$invalidate2(9, error2 = $$new_props.error);
    if ("info" in $$props2)
      $$invalidate2(10, info2 = $$new_props.info);
    if ("labelOnTheLeft" in $$props2)
      $$invalidate2(11, labelOnTheLeft2 = $$new_props.labelOnTheLeft);
    if ("placeholder" in $$props2)
      $$invalidate2(12, placeholder = $$new_props.placeholder);
    if ("multiselect" in $$props2)
      $$invalidate2(13, multiselect = $$new_props.multiselect);
    if ("selectedItems" in $$props2)
      $$invalidate2(1, selectedItems = $$new_props.selectedItems);
    if ("element" in $$props2)
      $$invalidate2(2, element3 = $$new_props.element);
    if ("inputElement" in $$props2)
      $$invalidate2(0, inputElement2 = $$new_props.inputElement);
    if ("listElement" in $$props2)
      $$invalidate2(3, listElement = $$new_props.listElement);
    if ("inputValue" in $$props2)
      $$invalidate2(15, inputValue = $$new_props.inputValue);
    if ("originalItems" in $$props2)
      originalItems = $$new_props.originalItems;
    if ("opened" in $$props2)
      $$invalidate2(16, opened = $$new_props.opened);
    if ("hasEdited" in $$props2)
      hasEdited = $$new_props.hasEdited;
    if ("highlightIndex" in $$props2)
      $$invalidate2(17, highlightIndex = $$new_props.highlightIndex);
    if ("filteredData" in $$props2)
      $$invalidate2(14, filteredData = $$new_props.filteredData);
    if ("groupedData" in $$props2)
      $$invalidate2(18, groupedData = $$new_props.groupedData);
    if ("originalText" in $$props2)
      originalText = $$new_props.originalText;
    if ("hasSetValue" in $$props2)
      hasSetValue = $$new_props.hasSetValue;
    if ("isSelecting" in $$props2)
      isSelecting = $$new_props.isSelecting;
    if ("isHiding" in $$props2)
      isHiding = $$new_props.isHiding;
    if ("newItemName" in $$props2)
      $$invalidate2(19, newItemName = $$new_props.newItemName);
    if ("shouldShowNewItem" in $$props2)
      $$invalidate2(20, shouldShowNewItem = $$new_props.shouldShowNewItem);
    if ("valueMatchesItem" in $$props2)
      $$invalidate2(40, valueMatchesItem = $$new_props.valueMatchesItem);
    if ("_id" in $$props2)
      $$invalidate2(21, _id2 = $$new_props._id);
  };
  if ($$props2 && "$$inject" in $$props2) {
    $$self2.$inject_state($$props2.$$inject);
  }
  $$self2.$$.update = () => {
    if ($$self2.$$.dirty[1] & /*id*/
    32) {
      $:
        $$invalidate2(21, _id2 = id2 || name || guid());
    }
    if ($$self2.$$.dirty[0] & /*filteredData, inputElement*/
    16385) {
      $:
        $$invalidate2(40, valueMatchesItem = filteredData?.length && filteredData.find((i) => i.name === inputElement2.value));
    }
    if ($$self2.$$.dirty[0] & /*allowNew, inputElement*/
    129 | $$self2.$$.dirty[1] & /*valueMatchesItem*/
    512) {
      $:
        $$invalidate2(20, shouldShowNewItem = allowNew && inputElement2?.value && !valueMatchesItem);
    }
  };
  return [
    inputElement2,
    selectedItems,
    element3,
    listElement,
    className2,
    disabled2,
    required2,
    allowNew,
    label2,
    error2,
    info2,
    labelOnTheLeft2,
    placeholder,
    multiselect,
    filteredData,
    inputValue,
    opened,
    highlightIndex,
    groupedData,
    newItemName,
    shouldShowNewItem,
    _id2,
    gui,
    errorMessageId2,
    open,
    onfocus,
    oninput,
    onblur,
    onListMouseDown,
    onclick3,
    onkeydown2,
    onIconMouseDown,
    onIconClick,
    $$restProps2,
    items,
    value2,
    id2,
    clearOnEsc,
    showOnFocus,
    hideOnResize,
    valueMatchesItem,
    mousedown_handler,
    input_binding2,
    div2_binding2,
    click_handler,
    mouseenter_handler,
    mouseup_handler,
    func,
    click_handler_1,
    div_binding
  ];
}
var Combobox = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(
      this,
      options,
      instance13,
      create_fragment13,
      safe_not_equal,
      {
        class: 4,
        disabled: 5,
        required: 6,
        id: 36,
        items: 34,
        value: 35,
        allowNew: 7,
        clearOnEsc: 37,
        showOnFocus: 38,
        hideOnResize: 39,
        label: 8,
        error: 9,
        info: 10,
        labelOnTheLeft: 11,
        placeholder: 12,
        multiselect: 13,
        selectedItems: 1,
        element: 2,
        inputElement: 0,
        listElement: 3
      },
      null,
      [-1, -1, -1]
    );
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Combobox",
      options,
      id: create_fragment13.name
    });
  }
  get class() {
    throw new Error("<Combobox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set class(value2) {
    throw new Error("<Combobox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get disabled() {
    throw new Error("<Combobox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set disabled(value2) {
    throw new Error("<Combobox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get required() {
    throw new Error("<Combobox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set required(value2) {
    throw new Error("<Combobox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get id() {
    throw new Error("<Combobox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set id(value2) {
    throw new Error("<Combobox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get items() {
    throw new Error("<Combobox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set items(value2) {
    throw new Error("<Combobox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get value() {
    throw new Error("<Combobox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set value(value2) {
    throw new Error("<Combobox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get allowNew() {
    throw new Error("<Combobox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set allowNew(value2) {
    throw new Error("<Combobox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get clearOnEsc() {
    throw new Error("<Combobox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set clearOnEsc(value2) {
    throw new Error("<Combobox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get showOnFocus() {
    throw new Error("<Combobox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set showOnFocus(value2) {
    throw new Error("<Combobox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get hideOnResize() {
    throw new Error("<Combobox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set hideOnResize(value2) {
    throw new Error("<Combobox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get label() {
    throw new Error("<Combobox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set label(value2) {
    throw new Error("<Combobox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get error() {
    throw new Error("<Combobox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set error(value2) {
    throw new Error("<Combobox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get info() {
    throw new Error("<Combobox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set info(value2) {
    throw new Error("<Combobox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get labelOnTheLeft() {
    throw new Error("<Combobox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set labelOnTheLeft(value2) {
    throw new Error("<Combobox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get placeholder() {
    throw new Error("<Combobox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set placeholder(value2) {
    throw new Error("<Combobox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get multiselect() {
    throw new Error("<Combobox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set multiselect(value2) {
    throw new Error("<Combobox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get selectedItems() {
    throw new Error("<Combobox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set selectedItems(value2) {
    throw new Error("<Combobox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get element() {
    throw new Error("<Combobox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set element(value2) {
    throw new Error("<Combobox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get inputElement() {
    throw new Error("<Combobox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set inputElement(value2) {
    throw new Error("<Combobox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get listElement() {
    throw new Error("<Combobox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set listElement(value2) {
    throw new Error("<Combobox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
};
var Combobox_default = Combobox;

// src/input/button-toggle/ButtonToggle.svelte
var file9 = "src/input/button-toggle/ButtonToggle.svelte";
function get_each_context2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[20] = list[i];
  return child_ctx;
}
function create_if_block7(ctx) {
  let icon;
  let current;
  icon = new Icon_default({
    props: { name: (
      /*item*/
      ctx[20].icon
    ) },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(icon.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(icon, target, anchor);
      current = true;
    },
    p: function update2(ctx2, dirty) {
      const icon_changes = {};
      if (dirty & /*_items*/
      2048)
        icon_changes.name = /*item*/
        ctx2[20].icon;
      icon.$set(icon_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block7.name,
    type: "if",
    source: "(29:7) {#if item.icon}",
    ctx
  });
  return block;
}
function create_each_block2(ctx) {
  let label_1;
  let t0;
  let t1_value = (
    /*item*/
    (ctx[20].name || "") + ""
  );
  let t1;
  let t2;
  let input;
  let input_checked_value;
  let input_value_value;
  let t3;
  let current;
  let mounted;
  let dispose;
  let if_block = (
    /*item*/
    ctx[20].icon && create_if_block7(ctx)
  );
  function change_handler(...args) {
    return (
      /*change_handler*/
      ctx[17](
        /*item*/
        ctx[20],
        ...args
      )
    );
  }
  const block = {
    c: function create() {
      label_1 = element2("label");
      if (if_block)
        if_block.c();
      t0 = space();
      t1 = text(t1_value);
      t2 = space();
      input = element2("input");
      t3 = space();
      input.disabled = /*disabled*/
      ctx[3];
      attr_dev(
        input,
        "name",
        /*name*/
        ctx[5]
      );
      attr_dev(input, "type", "radio");
      input.checked = input_checked_value = /*item*/
      ctx[20].value === /*value*/
      ctx[0];
      input.value = input_value_value = /*item*/
      ctx[20].value;
      add_location(input, file9, 32, 7, 915);
      attr_dev(
        label_1,
        "disabled",
        /*disabled*/
        ctx[3]
      );
      attr_dev(label_1, "class", "button button-normal");
      toggle_class(
        label_1,
        "button-has-text",
        /*item*/
        ctx[20].name
      );
      add_location(label_1, file9, 23, 5, 683);
    },
    m: function mount(target, anchor) {
      insert_dev(target, label_1, anchor);
      if (if_block)
        if_block.m(label_1, null);
      append_dev(label_1, t0);
      append_dev(label_1, t1);
      append_dev(label_1, t2);
      append_dev(label_1, input);
      append_dev(label_1, t3);
      current = true;
      if (!mounted) {
        dispose = [
          listen_dev(input, "change", change_handler, false, false, false, false),
          listen_dev(label_1, "click", onclick, false, false, false, false)
        ];
        mounted = true;
      }
    },
    p: function update2(new_ctx, dirty) {
      ctx = new_ctx;
      if (
        /*item*/
        ctx[20].icon
      ) {
        if (if_block) {
          if_block.p(ctx, dirty);
          if (dirty & /*_items*/
          2048) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block7(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(label_1, t0);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if ((!current || dirty & /*_items*/
      2048) && t1_value !== (t1_value = /*item*/
      (ctx[20].name || "") + ""))
        set_data_dev(t1, t1_value);
      if (!current || dirty & /*disabled*/
      8) {
        prop_dev(
          input,
          "disabled",
          /*disabled*/
          ctx[3]
        );
      }
      if (!current || dirty & /*name*/
      32) {
        attr_dev(
          input,
          "name",
          /*name*/
          ctx[5]
        );
      }
      if (!current || dirty & /*_items, value*/
      2049 && input_checked_value !== (input_checked_value = /*item*/
      ctx[20].value === /*value*/
      ctx[0])) {
        prop_dev(input, "checked", input_checked_value);
      }
      if (!current || dirty & /*_items*/
      2048 && input_value_value !== (input_value_value = /*item*/
      ctx[20].value)) {
        prop_dev(input, "value", input_value_value);
      }
      if (!current || dirty & /*disabled*/
      8) {
        attr_dev(
          label_1,
          "disabled",
          /*disabled*/
          ctx[3]
        );
      }
      if (!current || dirty & /*_items*/
      2048) {
        toggle_class(
          label_1,
          "button-has-text",
          /*item*/
          ctx[20].name
        );
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(label_1);
      }
      if (if_block)
        if_block.d();
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block2.name,
    type: "each",
    source: "(20:4) {#each _items as item}",
    ctx
  });
  return block;
}
function create_fragment14(ctx) {
  let div3;
  let label_1;
  let t0;
  let info_1;
  let t1;
  let div2;
  let inputerror;
  let t2;
  let div1;
  let div0;
  let div3_class_value;
  let div3_aria_errormessage_value;
  let current;
  label_1 = new Label_default({
    props: {
      label: (
        /*label*/
        ctx[7]
      ),
      disabled: (
        /*disabled*/
        ctx[3]
      ),
      for: (
        /*_id*/
        ctx[12]
      )
    },
    $$inline: true
  });
  info_1 = new Info_default({
    props: { msg: (
      /*info*/
      ctx[9]
    ) },
    $$inline: true
  });
  inputerror = new InputError_default({
    props: {
      id: (
        /*errorMessageId*/
        ctx[13]
      ),
      msg: (
        /*error*/
        ctx[8]
      )
    },
    $$inline: true
  });
  let each_value = ensure_array_like_dev(
    /*_items*/
    ctx[11]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block2(get_each_context2(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  const block = {
    c: function create() {
      div3 = element2("div");
      create_component(label_1.$$.fragment);
      t0 = space();
      create_component(info_1.$$.fragment);
      t1 = space();
      div2 = element2("div");
      create_component(inputerror.$$.fragment);
      t2 = space();
      div1 = element2("div");
      div0 = element2("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr_dev(div0, "class", "input-row");
      attr_dev(
        div0,
        "id",
        /*_id*/
        ctx[12]
      );
      add_location(div0, file9, 18, 3, 498);
      attr_dev(div1, "class", "input-scroller");
      add_location(div1, file9, 17, 2, 466);
      attr_dev(div2, "class", "input-inner");
      toggle_class(
        div2,
        "disabled",
        /*disabled*/
        ctx[3]
      );
      add_location(div2, file9, 14, 1, 369);
      attr_dev(div3, "class", div3_class_value = "input button-toggle " + /*className*/
      ctx[2]);
      attr_dev(div3, "role", "radiogroup");
      attr_dev(
        div3,
        "aria-invalid",
        /*error*/
        ctx[8]
      );
      attr_dev(div3, "aria-errormessage", div3_aria_errormessage_value = /*error*/
      ctx[8] ? (
        /*errorMessageId*/
        ctx[13]
      ) : void 0);
      attr_dev(
        div3,
        "title",
        /*title*/
        ctx[6]
      );
      toggle_class(
        div3,
        "round",
        /*round*/
        ctx[4]
      );
      toggle_class(
        div3,
        "has-error",
        /*error*/
        ctx[8]
      );
      toggle_class(
        div3,
        "label-on-the-left",
        /*labelOnTheLeft*/
        ctx[10] === true || /*labelOnTheLeft*/
        ctx[10] === "true"
      );
      add_location(div3, file9, 0, 0, 0);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div3, anchor);
      mount_component(label_1, div3, null);
      append_dev(div3, t0);
      mount_component(info_1, div3, null);
      append_dev(div3, t1);
      append_dev(div3, div2);
      mount_component(inputerror, div2, null);
      append_dev(div2, t2);
      append_dev(div2, div1);
      append_dev(div1, div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div0, null);
        }
      }
      ctx[18](div3);
      current = true;
    },
    p: function update2(ctx2, [dirty]) {
      const label_1_changes = {};
      if (dirty & /*label*/
      128)
        label_1_changes.label = /*label*/
        ctx2[7];
      if (dirty & /*disabled*/
      8)
        label_1_changes.disabled = /*disabled*/
        ctx2[3];
      if (dirty & /*_id*/
      4096)
        label_1_changes.for = /*_id*/
        ctx2[12];
      label_1.$set(label_1_changes);
      const info_1_changes = {};
      if (dirty & /*info*/
      512)
        info_1_changes.msg = /*info*/
        ctx2[9];
      info_1.$set(info_1_changes);
      const inputerror_changes = {};
      if (dirty & /*error*/
      256)
        inputerror_changes.msg = /*error*/
        ctx2[8];
      inputerror.$set(inputerror_changes);
      if (dirty & /*disabled, _items, onclick, name, value, onchange*/
      18473) {
        each_value = ensure_array_like_dev(
          /*_items*/
          ctx2[11]
        );
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context2(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block2(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(div0, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
      if (!current || dirty & /*_id*/
      4096) {
        attr_dev(
          div0,
          "id",
          /*_id*/
          ctx2[12]
        );
      }
      if (!current || dirty & /*disabled*/
      8) {
        toggle_class(
          div2,
          "disabled",
          /*disabled*/
          ctx2[3]
        );
      }
      if (!current || dirty & /*className*/
      4 && div3_class_value !== (div3_class_value = "input button-toggle " + /*className*/
      ctx2[2])) {
        attr_dev(div3, "class", div3_class_value);
      }
      if (!current || dirty & /*error*/
      256) {
        attr_dev(
          div3,
          "aria-invalid",
          /*error*/
          ctx2[8]
        );
      }
      if (!current || dirty & /*error*/
      256 && div3_aria_errormessage_value !== (div3_aria_errormessage_value = /*error*/
      ctx2[8] ? (
        /*errorMessageId*/
        ctx2[13]
      ) : void 0)) {
        attr_dev(div3, "aria-errormessage", div3_aria_errormessage_value);
      }
      if (!current || dirty & /*title*/
      64) {
        attr_dev(
          div3,
          "title",
          /*title*/
          ctx2[6]
        );
      }
      if (!current || dirty & /*className, round*/
      20) {
        toggle_class(
          div3,
          "round",
          /*round*/
          ctx2[4]
        );
      }
      if (!current || dirty & /*className, error*/
      260) {
        toggle_class(
          div3,
          "has-error",
          /*error*/
          ctx2[8]
        );
      }
      if (!current || dirty & /*className, labelOnTheLeft*/
      1028) {
        toggle_class(
          div3,
          "label-on-the-left",
          /*labelOnTheLeft*/
          ctx2[10] === true || /*labelOnTheLeft*/
          ctx2[10] === "true"
        );
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(label_1.$$.fragment, local);
      transition_in(info_1.$$.fragment, local);
      transition_in(inputerror.$$.fragment, local);
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o: function outro(local) {
      transition_out(label_1.$$.fragment, local);
      transition_out(info_1.$$.fragment, local);
      transition_out(inputerror.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div3);
      }
      destroy_component(label_1);
      destroy_component(info_1);
      destroy_component(inputerror);
      destroy_each(each_blocks, detaching);
      ctx[18](null);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment14.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function onclick(e) {
  const inputElement2 = e.target && e.target.querySelector("input");
  if (!inputElement2)
    return;
  inputElement2.click();
  inputElement2.focus();
}
function instance14($$self2, $$props2, $$invalidate2) {
  let _id2;
  let _items;
  let { $$slots: slots2 = {}, $$scope: $$scope2 } = $$props2;
  validate_slots("ButtonToggle", slots2, []);
  let { class: className2 = "" } = $$props2;
  let { disabled: disabled2 = void 0 } = $$props2;
  let { round = void 0 } = $$props2;
  let { items = "" } = $$props2;
  let { id: id2 = "" } = $$props2;
  let { name: name2 = guid() } = $$props2;
  let { value: value2 = "" } = $$props2;
  let { title = void 0 } = $$props2;
  let { label: label2 = "" } = $$props2;
  let { error: error2 = void 0 } = $$props2;
  let { info: info2 = void 0 } = $$props2;
  let { labelOnTheLeft: labelOnTheLeft2 = false } = $$props2;
  let { element: element3 = void 0 } = $$props2;
  const errorMessageId2 = guid();
  const dispatch3 = createEventDispatcher();
  function onchange5(e, button) {
    if (button.value === value2)
      return;
    const btnEl = e.target && e.target.closest("label");
    if (btnEl)
      btnEl.scrollIntoView({ block: "nearest", inline: "nearest" });
    $$invalidate2(0, value2 = button.value);
    dispatch3("change", value2);
  }
  const writable_props = [
    "class",
    "disabled",
    "round",
    "items",
    "id",
    "name",
    "value",
    "title",
    "label",
    "error",
    "info",
    "labelOnTheLeft",
    "element"
  ];
  Object.keys($$props2).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<ButtonToggle> was created with unknown prop '${key}'`);
  });
  const change_handler = (item, e) => onchange5(e, item);
  function div3_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element3 = $$value;
      $$invalidate2(1, element3);
    });
  }
  $$self2.$$set = ($$props3) => {
    if ("class" in $$props3)
      $$invalidate2(2, className2 = $$props3.class);
    if ("disabled" in $$props3)
      $$invalidate2(3, disabled2 = $$props3.disabled);
    if ("round" in $$props3)
      $$invalidate2(4, round = $$props3.round);
    if ("items" in $$props3)
      $$invalidate2(15, items = $$props3.items);
    if ("id" in $$props3)
      $$invalidate2(16, id2 = $$props3.id);
    if ("name" in $$props3)
      $$invalidate2(5, name2 = $$props3.name);
    if ("value" in $$props3)
      $$invalidate2(0, value2 = $$props3.value);
    if ("title" in $$props3)
      $$invalidate2(6, title = $$props3.title);
    if ("label" in $$props3)
      $$invalidate2(7, label2 = $$props3.label);
    if ("error" in $$props3)
      $$invalidate2(8, error2 = $$props3.error);
    if ("info" in $$props3)
      $$invalidate2(9, info2 = $$props3.info);
    if ("labelOnTheLeft" in $$props3)
      $$invalidate2(10, labelOnTheLeft2 = $$props3.labelOnTheLeft);
    if ("element" in $$props3)
      $$invalidate2(1, element3 = $$props3.element);
  };
  $$self2.$capture_state = () => ({
    createEventDispatcher,
    guid,
    Icon: Icon_default,
    Info: Info_default,
    InputError: InputError_default,
    Label: Label_default,
    className: className2,
    disabled: disabled2,
    round,
    items,
    id: id2,
    name: name2,
    value: value2,
    title,
    label: label2,
    error: error2,
    info: info2,
    labelOnTheLeft: labelOnTheLeft2,
    element: element3,
    errorMessageId: errorMessageId2,
    dispatch: dispatch3,
    onclick,
    onchange: onchange5,
    _items,
    _id: _id2
  });
  $$self2.$inject_state = ($$props3) => {
    if ("className" in $$props3)
      $$invalidate2(2, className2 = $$props3.className);
    if ("disabled" in $$props3)
      $$invalidate2(3, disabled2 = $$props3.disabled);
    if ("round" in $$props3)
      $$invalidate2(4, round = $$props3.round);
    if ("items" in $$props3)
      $$invalidate2(15, items = $$props3.items);
    if ("id" in $$props3)
      $$invalidate2(16, id2 = $$props3.id);
    if ("name" in $$props3)
      $$invalidate2(5, name2 = $$props3.name);
    if ("value" in $$props3)
      $$invalidate2(0, value2 = $$props3.value);
    if ("title" in $$props3)
      $$invalidate2(6, title = $$props3.title);
    if ("label" in $$props3)
      $$invalidate2(7, label2 = $$props3.label);
    if ("error" in $$props3)
      $$invalidate2(8, error2 = $$props3.error);
    if ("info" in $$props3)
      $$invalidate2(9, info2 = $$props3.info);
    if ("labelOnTheLeft" in $$props3)
      $$invalidate2(10, labelOnTheLeft2 = $$props3.labelOnTheLeft);
    if ("element" in $$props3)
      $$invalidate2(1, element3 = $$props3.element);
    if ("_items" in $$props3)
      $$invalidate2(11, _items = $$props3._items);
    if ("_id" in $$props3)
      $$invalidate2(12, _id2 = $$props3._id);
  };
  if ($$props2 && "$$inject" in $$props2) {
    $$self2.$inject_state($$props2.$$inject);
  }
  $$self2.$$.update = () => {
    if ($$self2.$$.dirty & /*id, name*/
    65568) {
      $:
        $$invalidate2(12, _id2 = id2 || name2 || guid());
    }
    if ($$self2.$$.dirty & /*items*/
    32768) {
      $:
        $$invalidate2(11, _items = items.map((item) => {
          if (typeof item === "string") {
            return { name: item, value: item };
          }
          return item;
        }));
    }
  };
  return [
    value2,
    element3,
    className2,
    disabled2,
    round,
    name2,
    title,
    label2,
    error2,
    info2,
    labelOnTheLeft2,
    _items,
    _id2,
    errorMessageId2,
    onchange5,
    items,
    id2,
    change_handler,
    div3_binding
  ];
}
var ButtonToggle = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance14, create_fragment14, safe_not_equal, {
      class: 2,
      disabled: 3,
      round: 4,
      items: 15,
      id: 16,
      name: 5,
      value: 0,
      title: 6,
      label: 7,
      error: 8,
      info: 9,
      labelOnTheLeft: 10,
      element: 1
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ButtonToggle",
      options,
      id: create_fragment14.name
    });
  }
  get class() {
    throw new Error("<ButtonToggle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set class(value2) {
    throw new Error("<ButtonToggle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get disabled() {
    throw new Error("<ButtonToggle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set disabled(value2) {
    throw new Error("<ButtonToggle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get round() {
    throw new Error("<ButtonToggle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set round(value2) {
    throw new Error("<ButtonToggle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get items() {
    throw new Error("<ButtonToggle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set items(value2) {
    throw new Error("<ButtonToggle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get id() {
    throw new Error("<ButtonToggle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set id(value2) {
    throw new Error("<ButtonToggle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get name() {
    throw new Error("<ButtonToggle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set name(value2) {
    throw new Error("<ButtonToggle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get value() {
    throw new Error("<ButtonToggle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set value(value2) {
    throw new Error("<ButtonToggle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get title() {
    throw new Error("<ButtonToggle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set title(value2) {
    throw new Error("<ButtonToggle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get label() {
    throw new Error("<ButtonToggle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set label(value2) {
    throw new Error("<ButtonToggle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get error() {
    throw new Error("<ButtonToggle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set error(value2) {
    throw new Error("<ButtonToggle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get info() {
    throw new Error("<ButtonToggle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set info(value2) {
    throw new Error("<ButtonToggle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get labelOnTheLeft() {
    throw new Error("<ButtonToggle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set labelOnTheLeft(value2) {
    throw new Error("<ButtonToggle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get element() {
    throw new Error("<ButtonToggle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set element(value2) {
    throw new Error("<ButtonToggle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
};
var ButtonToggle_default = ButtonToggle;

// src/input/checkbox/Checkbox.svelte
var file10 = "src/input/checkbox/Checkbox.svelte";
function create_fragment15(ctx) {
  let div1;
  let info_1;
  let t0;
  let inputerror;
  let t1;
  let div0;
  let input;
  let input_aria_errormessage_value;
  let t2;
  let label_1;
  let div1_class_value;
  let current;
  let mounted;
  let dispose;
  info_1 = new Info_default({
    props: { msg: (
      /*info*/
      ctx[8]
    ) },
    $$inline: true
  });
  inputerror = new InputError_default({
    props: {
      id: (
        /*errorMessageId*/
        ctx[15]
      ),
      msg: (
        /*error*/
        ctx[7]
      ),
      animOffset: "8"
    },
    $$inline: true
  });
  label_1 = new Label_default({
    props: {
      label: (
        /*label*/
        ctx[6]
      ),
      for: (
        /*_id*/
        ctx[14]
      )
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      div1 = element2("div");
      create_component(info_1.$$.fragment);
      t0 = space();
      create_component(inputerror.$$.fragment);
      t1 = space();
      div0 = element2("div");
      input = element2("input");
      t2 = space();
      create_component(label_1.$$.fragment);
      attr_dev(input, "type", "checkbox");
      attr_dev(
        input,
        "name",
        /*name*/
        ctx[11]
      );
      attr_dev(
        input,
        "id",
        /*_id*/
        ctx[14]
      );
      input.disabled = /*disabled*/
      ctx[5];
      attr_dev(
        input,
        "tabindex",
        /*tabindex*/
        ctx[10]
      );
      attr_dev(
        input,
        "aria-invalid",
        /*error*/
        ctx[7]
      );
      attr_dev(input, "aria-errormessage", input_aria_errormessage_value = /*error*/
      ctx[7] ? (
        /*errorMessageId*/
        ctx[15]
      ) : void 0);
      attr_dev(
        input,
        "aria-required",
        /*required*/
        ctx[12]
      );
      if (
        /*checked*/
        ctx[1] === void 0 || /*indeterminate*/
        ctx[0] === void 0
      )
        add_render_callback(() => (
          /*input_change_handler*/
          ctx[19].call(input)
        ));
      add_location(input, file10, 14, 2, 353);
      attr_dev(div0, "class", "checkbox-row");
      add_location(div0, file10, 13, 1, 324);
      attr_dev(
        div1,
        "title",
        /*title*/
        ctx[9]
      );
      attr_dev(div1, "class", div1_class_value = "check-and-radio checkbox " + /*className*/
      ctx[4]);
      toggle_class(
        div1,
        "indeterminate",
        /*indeterminate*/
        ctx[0]
      );
      toggle_class(
        div1,
        "disabled",
        /*disabled*/
        ctx[5]
      );
      toggle_class(
        div1,
        "has-error",
        /*error*/
        ctx[7]
      );
      toggle_class(
        div1,
        "label-on-the-left",
        /*labelOnTheLeft*/
        ctx[13] === true || /*labelOnTheLeft*/
        ctx[13] === "true"
      );
      add_location(div1, file10, 0, 0, 0);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div1, anchor);
      mount_component(info_1, div1, null);
      append_dev(div1, t0);
      mount_component(inputerror, div1, null);
      append_dev(div1, t1);
      append_dev(div1, div0);
      append_dev(div0, input);
      ctx[18](input);
      input.checked = /*checked*/
      ctx[1];
      input.indeterminate = /*indeterminate*/
      ctx[0];
      append_dev(div0, t2);
      mount_component(label_1, div0, null);
      ctx[20](div1);
      current = true;
      if (!mounted) {
        dispose = [
          listen_dev(
            input,
            "change",
            /*input_change_handler*/
            ctx[19]
          ),
          listen_dev(
            input,
            "change",
            /*onchange*/
            ctx[16],
            false,
            false,
            false,
            false
          )
        ];
        mounted = true;
      }
    },
    p: function update2(ctx2, [dirty]) {
      const info_1_changes = {};
      if (dirty & /*info*/
      256)
        info_1_changes.msg = /*info*/
        ctx2[8];
      info_1.$set(info_1_changes);
      const inputerror_changes = {};
      if (dirty & /*error*/
      128)
        inputerror_changes.msg = /*error*/
        ctx2[7];
      inputerror.$set(inputerror_changes);
      if (!current || dirty & /*name*/
      2048) {
        attr_dev(
          input,
          "name",
          /*name*/
          ctx2[11]
        );
      }
      if (!current || dirty & /*_id*/
      16384) {
        attr_dev(
          input,
          "id",
          /*_id*/
          ctx2[14]
        );
      }
      if (!current || dirty & /*disabled*/
      32) {
        prop_dev(
          input,
          "disabled",
          /*disabled*/
          ctx2[5]
        );
      }
      if (!current || dirty & /*tabindex*/
      1024) {
        attr_dev(
          input,
          "tabindex",
          /*tabindex*/
          ctx2[10]
        );
      }
      if (!current || dirty & /*error*/
      128) {
        attr_dev(
          input,
          "aria-invalid",
          /*error*/
          ctx2[7]
        );
      }
      if (!current || dirty & /*error*/
      128 && input_aria_errormessage_value !== (input_aria_errormessage_value = /*error*/
      ctx2[7] ? (
        /*errorMessageId*/
        ctx2[15]
      ) : void 0)) {
        attr_dev(input, "aria-errormessage", input_aria_errormessage_value);
      }
      if (!current || dirty & /*required*/
      4096) {
        attr_dev(
          input,
          "aria-required",
          /*required*/
          ctx2[12]
        );
      }
      if (dirty & /*checked*/
      2) {
        input.checked = /*checked*/
        ctx2[1];
      }
      if (dirty & /*indeterminate*/
      1) {
        input.indeterminate = /*indeterminate*/
        ctx2[0];
      }
      const label_1_changes = {};
      if (dirty & /*label*/
      64)
        label_1_changes.label = /*label*/
        ctx2[6];
      if (dirty & /*_id*/
      16384)
        label_1_changes.for = /*_id*/
        ctx2[14];
      label_1.$set(label_1_changes);
      if (!current || dirty & /*title*/
      512) {
        attr_dev(
          div1,
          "title",
          /*title*/
          ctx2[9]
        );
      }
      if (!current || dirty & /*className*/
      16 && div1_class_value !== (div1_class_value = "check-and-radio checkbox " + /*className*/
      ctx2[4])) {
        attr_dev(div1, "class", div1_class_value);
      }
      if (!current || dirty & /*className, indeterminate*/
      17) {
        toggle_class(
          div1,
          "indeterminate",
          /*indeterminate*/
          ctx2[0]
        );
      }
      if (!current || dirty & /*className, disabled*/
      48) {
        toggle_class(
          div1,
          "disabled",
          /*disabled*/
          ctx2[5]
        );
      }
      if (!current || dirty & /*className, error*/
      144) {
        toggle_class(
          div1,
          "has-error",
          /*error*/
          ctx2[7]
        );
      }
      if (!current || dirty & /*className, labelOnTheLeft*/
      8208) {
        toggle_class(
          div1,
          "label-on-the-left",
          /*labelOnTheLeft*/
          ctx2[13] === true || /*labelOnTheLeft*/
          ctx2[13] === "true"
        );
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(info_1.$$.fragment, local);
      transition_in(inputerror.$$.fragment, local);
      transition_in(label_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(info_1.$$.fragment, local);
      transition_out(inputerror.$$.fragment, local);
      transition_out(label_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div1);
      }
      destroy_component(info_1);
      destroy_component(inputerror);
      ctx[18](null);
      destroy_component(label_1);
      ctx[20](null);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment15.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance15($$self2, $$props2, $$invalidate2) {
  let _id2;
  let { $$slots: slots2 = {}, $$scope: $$scope2 } = $$props2;
  validate_slots("Checkbox", slots2, []);
  let { class: className2 = "" } = $$props2;
  let { indeterminate = false } = $$props2;
  let { checked = false } = $$props2;
  let { disabled: disabled2 = false } = $$props2;
  let { id: id2 = "" } = $$props2;
  let { label: label2 = "" } = $$props2;
  let { error: error2 = void 0 } = $$props2;
  let { info: info2 = void 0 } = $$props2;
  let { title = void 0 } = $$props2;
  let { tabindex = void 0 } = $$props2;
  let { name: name2 = "" } = $$props2;
  let { required: required2 = void 0 } = $$props2;
  let { labelOnTheLeft: labelOnTheLeft2 = false } = $$props2;
  let { element: element3 = void 0 } = $$props2;
  let { inputElement: inputElement2 = void 0 } = $$props2;
  const errorMessageId2 = guid();
  const dispatch3 = createEventDispatcher();
  function onchange5(event) {
    $$invalidate2(1, checked = event.target.checked);
    $$invalidate2(0, indeterminate = event.target.indeterminate);
    dispatch3("change", { event, checked, indeterminate });
  }
  const writable_props = [
    "class",
    "indeterminate",
    "checked",
    "disabled",
    "id",
    "label",
    "error",
    "info",
    "title",
    "tabindex",
    "name",
    "required",
    "labelOnTheLeft",
    "element",
    "inputElement"
  ];
  Object.keys($$props2).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Checkbox> was created with unknown prop '${key}'`);
  });
  function input_binding2($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      inputElement2 = $$value;
      $$invalidate2(3, inputElement2);
    });
  }
  function input_change_handler() {
    checked = this.checked;
    indeterminate = this.indeterminate;
    $$invalidate2(1, checked);
    $$invalidate2(0, indeterminate);
  }
  function div1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element3 = $$value;
      $$invalidate2(2, element3);
    });
  }
  $$self2.$$set = ($$props3) => {
    if ("class" in $$props3)
      $$invalidate2(4, className2 = $$props3.class);
    if ("indeterminate" in $$props3)
      $$invalidate2(0, indeterminate = $$props3.indeterminate);
    if ("checked" in $$props3)
      $$invalidate2(1, checked = $$props3.checked);
    if ("disabled" in $$props3)
      $$invalidate2(5, disabled2 = $$props3.disabled);
    if ("id" in $$props3)
      $$invalidate2(17, id2 = $$props3.id);
    if ("label" in $$props3)
      $$invalidate2(6, label2 = $$props3.label);
    if ("error" in $$props3)
      $$invalidate2(7, error2 = $$props3.error);
    if ("info" in $$props3)
      $$invalidate2(8, info2 = $$props3.info);
    if ("title" in $$props3)
      $$invalidate2(9, title = $$props3.title);
    if ("tabindex" in $$props3)
      $$invalidate2(10, tabindex = $$props3.tabindex);
    if ("name" in $$props3)
      $$invalidate2(11, name2 = $$props3.name);
    if ("required" in $$props3)
      $$invalidate2(12, required2 = $$props3.required);
    if ("labelOnTheLeft" in $$props3)
      $$invalidate2(13, labelOnTheLeft2 = $$props3.labelOnTheLeft);
    if ("element" in $$props3)
      $$invalidate2(2, element3 = $$props3.element);
    if ("inputElement" in $$props3)
      $$invalidate2(3, inputElement2 = $$props3.inputElement);
  };
  $$self2.$capture_state = () => ({
    createEventDispatcher,
    guid,
    Info: Info_default,
    InputError: InputError_default,
    Label: Label_default,
    className: className2,
    indeterminate,
    checked,
    disabled: disabled2,
    id: id2,
    label: label2,
    error: error2,
    info: info2,
    title,
    tabindex,
    name: name2,
    required: required2,
    labelOnTheLeft: labelOnTheLeft2,
    element: element3,
    inputElement: inputElement2,
    errorMessageId: errorMessageId2,
    dispatch: dispatch3,
    onchange: onchange5,
    _id: _id2
  });
  $$self2.$inject_state = ($$props3) => {
    if ("className" in $$props3)
      $$invalidate2(4, className2 = $$props3.className);
    if ("indeterminate" in $$props3)
      $$invalidate2(0, indeterminate = $$props3.indeterminate);
    if ("checked" in $$props3)
      $$invalidate2(1, checked = $$props3.checked);
    if ("disabled" in $$props3)
      $$invalidate2(5, disabled2 = $$props3.disabled);
    if ("id" in $$props3)
      $$invalidate2(17, id2 = $$props3.id);
    if ("label" in $$props3)
      $$invalidate2(6, label2 = $$props3.label);
    if ("error" in $$props3)
      $$invalidate2(7, error2 = $$props3.error);
    if ("info" in $$props3)
      $$invalidate2(8, info2 = $$props3.info);
    if ("title" in $$props3)
      $$invalidate2(9, title = $$props3.title);
    if ("tabindex" in $$props3)
      $$invalidate2(10, tabindex = $$props3.tabindex);
    if ("name" in $$props3)
      $$invalidate2(11, name2 = $$props3.name);
    if ("required" in $$props3)
      $$invalidate2(12, required2 = $$props3.required);
    if ("labelOnTheLeft" in $$props3)
      $$invalidate2(13, labelOnTheLeft2 = $$props3.labelOnTheLeft);
    if ("element" in $$props3)
      $$invalidate2(2, element3 = $$props3.element);
    if ("inputElement" in $$props3)
      $$invalidate2(3, inputElement2 = $$props3.inputElement);
    if ("_id" in $$props3)
      $$invalidate2(14, _id2 = $$props3._id);
  };
  if ($$props2 && "$$inject" in $$props2) {
    $$self2.$inject_state($$props2.$$inject);
  }
  $$self2.$$.update = () => {
    if ($$self2.$$.dirty & /*id, name*/
    133120) {
      $:
        $$invalidate2(14, _id2 = id2 || name2 || guid());
    }
  };
  return [
    indeterminate,
    checked,
    element3,
    inputElement2,
    className2,
    disabled2,
    label2,
    error2,
    info2,
    title,
    tabindex,
    name2,
    required2,
    labelOnTheLeft2,
    _id2,
    errorMessageId2,
    onchange5,
    id2,
    input_binding2,
    input_change_handler,
    div1_binding
  ];
}
var Checkbox = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance15, create_fragment15, safe_not_equal, {
      class: 4,
      indeterminate: 0,
      checked: 1,
      disabled: 5,
      id: 17,
      label: 6,
      error: 7,
      info: 8,
      title: 9,
      tabindex: 10,
      name: 11,
      required: 12,
      labelOnTheLeft: 13,
      element: 2,
      inputElement: 3
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Checkbox",
      options,
      id: create_fragment15.name
    });
  }
  get class() {
    throw new Error("<Checkbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set class(value2) {
    throw new Error("<Checkbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get indeterminate() {
    throw new Error("<Checkbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set indeterminate(value2) {
    throw new Error("<Checkbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get checked() {
    throw new Error("<Checkbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set checked(value2) {
    throw new Error("<Checkbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get disabled() {
    throw new Error("<Checkbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set disabled(value2) {
    throw new Error("<Checkbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get id() {
    throw new Error("<Checkbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set id(value2) {
    throw new Error("<Checkbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get label() {
    throw new Error("<Checkbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set label(value2) {
    throw new Error("<Checkbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get error() {
    throw new Error("<Checkbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set error(value2) {
    throw new Error("<Checkbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get info() {
    throw new Error("<Checkbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set info(value2) {
    throw new Error("<Checkbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get title() {
    throw new Error("<Checkbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set title(value2) {
    throw new Error("<Checkbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get tabindex() {
    throw new Error("<Checkbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set tabindex(value2) {
    throw new Error("<Checkbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get name() {
    throw new Error("<Checkbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set name(value2) {
    throw new Error("<Checkbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get required() {
    throw new Error("<Checkbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set required(value2) {
    throw new Error("<Checkbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get labelOnTheLeft() {
    throw new Error("<Checkbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set labelOnTheLeft(value2) {
    throw new Error("<Checkbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get element() {
    throw new Error("<Checkbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set element(value2) {
    throw new Error("<Checkbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get inputElement() {
    throw new Error("<Checkbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set inputElement(value2) {
    throw new Error("<Checkbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
};
var Checkbox_default = Checkbox;

// node_modules/vanillajs-datepicker/js/lib/utils.js
function lastItemOf(arr) {
  return arr[arr.length - 1];
}
function pushUnique(arr, ...items) {
  items.forEach((item) => {
    if (arr.includes(item)) {
      return;
    }
    arr.push(item);
  });
  return arr;
}
function stringToArray(str, separator) {
  return str ? str.split(separator) : [];
}
function isInRange(testVal, min, max) {
  const minOK = min === void 0 || testVal >= min;
  const maxOK = max === void 0 || testVal <= max;
  return minOK && maxOK;
}
function limitToRange(val, min, max) {
  if (val < min) {
    return min;
  }
  if (val > max) {
    return max;
  }
  return val;
}
function createTagRepeat(tagName, repeat, attributes = {}, index = 0, html = "") {
  const openTagSrc = Object.keys(attributes).reduce((src, attr2) => {
    let val = attributes[attr2];
    if (typeof val === "function") {
      val = val(index);
    }
    return `${src} ${attr2}="${val}"`;
  }, tagName);
  html += `<${openTagSrc}></${tagName}>`;
  const next = index + 1;
  return next < repeat ? createTagRepeat(tagName, repeat, attributes, next, html) : html;
}
function optimizeTemplateHTML(html) {
  return html.replace(/>\s+/g, ">").replace(/\s+</, "<");
}

// node_modules/vanillajs-datepicker/js/lib/date.js
function stripTime(timeValue) {
  return new Date(timeValue).setHours(0, 0, 0, 0);
}
function today() {
  return (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0);
}
function dateValue(...args) {
  switch (args.length) {
    case 0:
      return today();
    case 1:
      return stripTime(args[0]);
  }
  const newDate = /* @__PURE__ */ new Date(0);
  newDate.setFullYear(...args);
  return newDate.setHours(0, 0, 0, 0);
}
function addDays(date, amount2) {
  const newDate = new Date(date);
  return newDate.setDate(newDate.getDate() + amount2);
}
function addWeeks(date, amount2) {
  return addDays(date, amount2 * 7);
}
function addMonths(date, amount2) {
  const newDate = new Date(date);
  const monthsToSet = newDate.getMonth() + amount2;
  let expectedMonth = monthsToSet % 12;
  if (expectedMonth < 0) {
    expectedMonth += 12;
  }
  const time = newDate.setMonth(monthsToSet);
  return newDate.getMonth() !== expectedMonth ? newDate.setDate(0) : time;
}
function addYears(date, amount2) {
  const newDate = new Date(date);
  const expectedMonth = newDate.getMonth();
  const time = newDate.setFullYear(newDate.getFullYear() + amount2);
  return expectedMonth === 1 && newDate.getMonth() === 2 ? newDate.setDate(0) : time;
}
function dayDiff(day, from) {
  return (day - from + 7) % 7;
}
function dayOfTheWeekOf(baseDate, dayOfWeek, weekStart = 0) {
  const baseDay = new Date(baseDate).getDay();
  return addDays(baseDate, dayDiff(dayOfWeek, weekStart) - dayDiff(baseDay, weekStart));
}
function calcWeekNum(dayOfTheWeek, sameDayOfFirstWeek) {
  return Math.round((dayOfTheWeek - sameDayOfFirstWeek) / 6048e5) + 1;
}
function getIsoWeek(date) {
  const thuOfTheWeek = dayOfTheWeekOf(date, 4, 1);
  const firstThu = dayOfTheWeekOf(new Date(thuOfTheWeek).setMonth(0, 4), 4, 1);
  return calcWeekNum(thuOfTheWeek, firstThu);
}
function calcTraditionalWeekNumber(date, weekStart) {
  const startOfFirstWeek = dayOfTheWeekOf(new Date(date).setMonth(0, 1), weekStart, weekStart);
  const startOfTheWeek = dayOfTheWeekOf(date, weekStart, weekStart);
  const weekNum = calcWeekNum(startOfTheWeek, startOfFirstWeek);
  if (weekNum < 53) {
    return weekNum;
  }
  const weekOneOfNextYear = dayOfTheWeekOf(new Date(date).setDate(32), weekStart, weekStart);
  return startOfTheWeek === weekOneOfNextYear ? 1 : weekNum;
}
function getWesternTradWeek(date) {
  return calcTraditionalWeekNumber(date, 0);
}
function getMidEasternWeek(date) {
  return calcTraditionalWeekNumber(date, 6);
}
function startOfYearPeriod(date, years) {
  const year = new Date(date).getFullYear();
  return Math.floor(year / years) * years;
}
function regularizeDate(date, timeSpan, useLastDate) {
  if (timeSpan !== 1 && timeSpan !== 2) {
    return date;
  }
  const newDate = new Date(date);
  if (timeSpan === 1) {
    useLastDate ? newDate.setMonth(newDate.getMonth() + 1, 0) : newDate.setDate(1);
  } else {
    useLastDate ? newDate.setFullYear(newDate.getFullYear() + 1, 0, 0) : newDate.setMonth(0, 1);
  }
  return newDate.setHours(0, 0, 0, 0);
}

// node_modules/vanillajs-datepicker/js/lib/date-format.js
var reFormatTokens = /dd?|DD?|mm?|MM?|yy?(?:yy)?/;
var reNonDateParts = /[\s!-/:-@[-`{-~年月日]+/;
var knownFormats = {};
var parseFns = {
  y(date, year) {
    return new Date(date).setFullYear(parseInt(year, 10));
  },
  m(date, month, locale) {
    const newDate = new Date(date);
    let monthIndex = parseInt(month, 10) - 1;
    if (isNaN(monthIndex)) {
      if (!month) {
        return NaN;
      }
      const monthName = month.toLowerCase();
      const compareNames = (name2) => name2.toLowerCase().startsWith(monthName);
      monthIndex = locale.monthsShort.findIndex(compareNames);
      if (monthIndex < 0) {
        monthIndex = locale.months.findIndex(compareNames);
      }
      if (monthIndex < 0) {
        return NaN;
      }
    }
    newDate.setMonth(monthIndex);
    return newDate.getMonth() !== normalizeMonth(monthIndex) ? newDate.setDate(0) : newDate.getTime();
  },
  d(date, day) {
    return new Date(date).setDate(parseInt(day, 10));
  }
};
var formatFns = {
  d(date) {
    return date.getDate();
  },
  dd(date) {
    return padZero(date.getDate(), 2);
  },
  D(date, locale) {
    return locale.daysShort[date.getDay()];
  },
  DD(date, locale) {
    return locale.days[date.getDay()];
  },
  m(date) {
    return date.getMonth() + 1;
  },
  mm(date) {
    return padZero(date.getMonth() + 1, 2);
  },
  M(date, locale) {
    return locale.monthsShort[date.getMonth()];
  },
  MM(date, locale) {
    return locale.months[date.getMonth()];
  },
  y(date) {
    return date.getFullYear();
  },
  yy(date) {
    return padZero(date.getFullYear(), 2).slice(-2);
  },
  yyyy(date) {
    return padZero(date.getFullYear(), 4);
  }
};
function normalizeMonth(monthIndex) {
  return monthIndex > -1 ? monthIndex % 12 : normalizeMonth(monthIndex + 12);
}
function padZero(num2, length) {
  return num2.toString().padStart(length, "0");
}
function parseFormatString(format) {
  if (typeof format !== "string") {
    throw new Error("Invalid date format.");
  }
  if (format in knownFormats) {
    return knownFormats[format];
  }
  const separators = format.split(reFormatTokens);
  const parts = format.match(new RegExp(reFormatTokens, "g"));
  if (separators.length === 0 || !parts) {
    throw new Error("Invalid date format.");
  }
  const partFormatters = parts.map((token) => formatFns[token]);
  const partParserKeys = Object.keys(parseFns).reduce((keys, key) => {
    const token = parts.find((part) => part[0] !== "D" && part[0].toLowerCase() === key);
    if (token) {
      keys.push(key);
    }
    return keys;
  }, []);
  return knownFormats[format] = {
    parser(dateStr, locale) {
      const dateParts = dateStr.split(reNonDateParts).reduce((dtParts, part, index) => {
        if (part.length > 0 && parts[index]) {
          const token = parts[index][0];
          if (token === "M") {
            dtParts.m = part;
          } else if (token !== "D") {
            dtParts[token] = part;
          }
        }
        return dtParts;
      }, {});
      return partParserKeys.reduce((origDate, key) => {
        const newDate = parseFns[key](origDate, dateParts[key], locale);
        return isNaN(newDate) ? origDate : newDate;
      }, today());
    },
    formatter(date, locale) {
      let dateStr = partFormatters.reduce((str, fn, index) => {
        return str += `${separators[index]}${fn(date, locale)}`;
      }, "");
      return dateStr += lastItemOf(separators);
    }
  };
}
function parseDate(dateStr, format, locale) {
  if (dateStr instanceof Date || typeof dateStr === "number") {
    const date = stripTime(dateStr);
    return isNaN(date) ? void 0 : date;
  }
  if (!dateStr) {
    return void 0;
  }
  if (dateStr === "today") {
    return today();
  }
  if (format && format.toValue) {
    const date = format.toValue(dateStr, format, locale);
    return isNaN(date) ? void 0 : stripTime(date);
  }
  return parseFormatString(format).parser(dateStr, locale);
}
function formatDate2(date, format, locale) {
  if (isNaN(date) || !date && date !== 0) {
    return "";
  }
  const dateObj = typeof date === "number" ? new Date(date) : date;
  if (format.toDisplay) {
    return format.toDisplay(dateObj, format, locale);
  }
  return parseFormatString(format).formatter(dateObj, locale);
}

// node_modules/vanillajs-datepicker/js/lib/dom.js
var range = document.createRange();
function parseHTML(html) {
  return range.createContextualFragment(html);
}
function getParent(el) {
  return el.parentElement || (el.parentNode instanceof ShadowRoot ? el.parentNode.host : void 0);
}
function isActiveElement2(el) {
  return el.getRootNode().activeElement === el;
}
function hideElement(el) {
  if (el.style.display === "none") {
    return;
  }
  if (el.style.display) {
    el.dataset.styleDisplay = el.style.display;
  }
  el.style.display = "none";
}
function showElement(el) {
  if (el.style.display !== "none") {
    return;
  }
  if (el.dataset.styleDisplay) {
    el.style.display = el.dataset.styleDisplay;
    delete el.dataset.styleDisplay;
  } else {
    el.style.display = "";
  }
}
function emptyChildNodes(el) {
  if (el.firstChild) {
    el.removeChild(el.firstChild);
    emptyChildNodes(el);
  }
}
function replaceChildNodes(el, newChildNodes) {
  emptyChildNodes(el);
  if (newChildNodes instanceof DocumentFragment) {
    el.appendChild(newChildNodes);
  } else if (typeof newChildNodes === "string") {
    el.appendChild(parseHTML(newChildNodes));
  } else if (typeof newChildNodes.forEach === "function") {
    newChildNodes.forEach((node) => {
      el.appendChild(node);
    });
  }
}

// node_modules/vanillajs-datepicker/js/lib/event.js
var listenerRegistry = /* @__PURE__ */ new WeakMap();
var { addEventListener, removeEventListener } = EventTarget.prototype;
function registerListeners(keyObj, listeners) {
  let registered = listenerRegistry.get(keyObj);
  if (!registered) {
    registered = [];
    listenerRegistry.set(keyObj, registered);
  }
  listeners.forEach((listener) => {
    addEventListener.call(...listener);
    registered.push(listener);
  });
}
function unregisterListeners(keyObj) {
  let listeners = listenerRegistry.get(keyObj);
  if (!listeners) {
    return;
  }
  listeners.forEach((listener) => {
    removeEventListener.call(...listener);
  });
  listenerRegistry.delete(keyObj);
}
if (!Event.prototype.composedPath) {
  const getComposedPath = (node, path = []) => {
    path.push(node);
    let parent;
    if (node.parentNode) {
      parent = node.parentNode;
    } else if (node.host) {
      parent = node.host;
    } else if (node.defaultView) {
      parent = node.defaultView;
    }
    return parent ? getComposedPath(parent, path) : path;
  };
  Event.prototype.composedPath = function() {
    return getComposedPath(this.target);
  };
}
function findFromPath(path, criteria, currentTarget) {
  const [node, ...rest] = path;
  if (criteria(node)) {
    return node;
  }
  if (node === currentTarget || node.tagName === "HTML" || rest.length === 0) {
    return;
  }
  return findFromPath(rest, criteria, currentTarget);
}
function findElementInEventPath(ev, selector) {
  const criteria = typeof selector === "function" ? selector : (el) => el instanceof Element && el.matches(selector);
  return findFromPath(ev.composedPath(), criteria, ev.currentTarget);
}

// node_modules/vanillajs-datepicker/js/i18n/base-locales.js
var base_locales_default = {
  en: {
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    today: "Today",
    clear: "Clear",
    titleFormat: "MM y"
  }
};

// node_modules/vanillajs-datepicker/js/options/defaultOptions.js
var defaultOptions_default = {
  autohide: false,
  beforeShowDay: null,
  beforeShowDecade: null,
  beforeShowMonth: null,
  beforeShowYear: null,
  clearButton: false,
  dateDelimiter: ",",
  datesDisabled: [],
  daysOfWeekDisabled: [],
  daysOfWeekHighlighted: [],
  defaultViewDate: void 0,
  // placeholder, defaults to today() by the program
  disableTouchKeyboard: false,
  enableOnReadonly: true,
  format: "mm/dd/yyyy",
  language: "en",
  maxDate: null,
  maxNumberOfDates: 1,
  maxView: 3,
  minDate: null,
  nextArrow: "\xBB",
  orientation: "auto",
  pickLevel: 0,
  prevArrow: "\xAB",
  showDaysOfWeek: true,
  showOnClick: true,
  showOnFocus: true,
  startView: 0,
  title: "",
  todayButton: false,
  todayButtonMode: 0,
  todayHighlight: false,
  updateOnBlur: true,
  weekNumbers: 0,
  weekStart: 0
};

// node_modules/vanillajs-datepicker/js/options/processOptions.js
var {
  language: defaultLang,
  format: defaultFormat,
  weekStart: defaultWeekStart
} = defaultOptions_default;
function sanitizeDOW(dow, day) {
  return dow.length < 6 && day >= 0 && day < 7 ? pushUnique(dow, day) : dow;
}
function determineGetWeekMethod(numberingMode, weekStart) {
  const methodId = numberingMode === 4 ? weekStart === 6 ? 3 : !weekStart + 1 : numberingMode;
  switch (methodId) {
    case 1:
      return getIsoWeek;
    case 2:
      return getWesternTradWeek;
    case 3:
      return getMidEasternWeek;
  }
}
function updateWeekStart(newValue, config2, weekNumbers) {
  config2.weekStart = newValue;
  config2.weekEnd = (newValue + 6) % 7;
  if (weekNumbers === 4) {
    config2.getWeekNumber = determineGetWeekMethod(4, newValue);
  }
  return newValue;
}
function validateDate(value2, format, locale, origValue) {
  const date = parseDate(value2, format, locale);
  return date !== void 0 ? date : origValue;
}
function validateViewId(value2, origValue, max = 3) {
  const viewId = parseInt(value2, 10);
  return viewId >= 0 && viewId <= max ? viewId : origValue;
}
function replaceOptions(options, from, to, convert = void 0) {
  if (from in options) {
    if (!(to in options)) {
      options[to] = convert ? convert(options[from]) : options[from];
    }
    delete options[from];
  }
}
function processOptions(options, datepicker) {
  const inOpts = Object.assign({}, options);
  const config2 = {};
  const locales = datepicker.constructor.locales;
  const rangeEnd = !!datepicker.rangeSideIndex;
  let {
    datesDisabled,
    format,
    language,
    locale,
    maxDate,
    maxView,
    minDate,
    pickLevel,
    startView,
    weekNumbers,
    weekStart
  } = datepicker.config || {};
  replaceOptions(inOpts, "calendarWeeks", "weekNumbers", (val) => val ? 1 : 0);
  replaceOptions(inOpts, "clearBtn", "clearButton");
  replaceOptions(inOpts, "todayBtn", "todayButton");
  replaceOptions(inOpts, "todayBtnMode", "todayButtonMode");
  if (inOpts.language) {
    let lang;
    if (inOpts.language !== language) {
      if (locales[inOpts.language]) {
        lang = inOpts.language;
      } else {
        lang = inOpts.language.split("-")[0];
        if (!locales[lang]) {
          lang = false;
        }
      }
    }
    delete inOpts.language;
    if (lang) {
      language = config2.language = lang;
      const origLocale = locale || locales[defaultLang];
      locale = Object.assign({
        format: defaultFormat,
        weekStart: defaultWeekStart
      }, locales[defaultLang]);
      if (language !== defaultLang) {
        Object.assign(locale, locales[language]);
      }
      config2.locale = locale;
      if (format === origLocale.format) {
        format = config2.format = locale.format;
      }
      if (weekStart === origLocale.weekStart) {
        weekStart = updateWeekStart(locale.weekStart, config2, weekNumbers);
      }
    }
  }
  if (inOpts.format) {
    const hasToDisplay = typeof inOpts.format.toDisplay === "function";
    const hasToValue = typeof inOpts.format.toValue === "function";
    const validFormatString = reFormatTokens.test(inOpts.format);
    if (hasToDisplay && hasToValue || validFormatString) {
      format = config2.format = inOpts.format;
    }
    delete inOpts.format;
  }
  let newPickLevel = pickLevel;
  if ("pickLevel" in inOpts) {
    newPickLevel = validateViewId(inOpts.pickLevel, pickLevel, 2);
    delete inOpts.pickLevel;
  }
  if (newPickLevel !== pickLevel) {
    if (newPickLevel > pickLevel) {
      if (!("minDate" in inOpts)) {
        inOpts.minDate = minDate;
      }
      if (!("maxDate" in inOpts)) {
        inOpts.maxDate = maxDate;
      }
    }
    if (datesDisabled && !inOpts.datesDisabled) {
      inOpts.datesDisabled = [];
    }
    pickLevel = config2.pickLevel = newPickLevel;
  }
  let minDt = minDate;
  let maxDt = maxDate;
  if ("minDate" in inOpts) {
    const defaultMinDt = dateValue(0, 0, 1);
    minDt = inOpts.minDate === null ? defaultMinDt : validateDate(inOpts.minDate, format, locale, minDt);
    if (minDt !== defaultMinDt) {
      minDt = regularizeDate(minDt, pickLevel, false);
    }
    delete inOpts.minDate;
  }
  if ("maxDate" in inOpts) {
    maxDt = inOpts.maxDate === null ? void 0 : validateDate(inOpts.maxDate, format, locale, maxDt);
    if (maxDt !== void 0) {
      maxDt = regularizeDate(maxDt, pickLevel, true);
    }
    delete inOpts.maxDate;
  }
  if (maxDt < minDt) {
    minDate = config2.minDate = maxDt;
    maxDate = config2.maxDate = minDt;
  } else {
    if (minDate !== minDt) {
      minDate = config2.minDate = minDt;
    }
    if (maxDate !== maxDt) {
      maxDate = config2.maxDate = maxDt;
    }
  }
  if (inOpts.datesDisabled) {
    const dtsDisabled = inOpts.datesDisabled;
    if (typeof dtsDisabled === "function") {
      config2.datesDisabled = null;
      config2.checkDisabled = (timeValue, viewId) => dtsDisabled(
        new Date(timeValue),
        viewId,
        rangeEnd
      );
    } else {
      const disabled2 = config2.datesDisabled = dtsDisabled.reduce((dates, dt) => {
        const date = parseDate(dt, format, locale);
        return date !== void 0 ? pushUnique(dates, regularizeDate(date, pickLevel, rangeEnd)) : dates;
      }, []);
      config2.checkDisabled = (timeValue) => disabled2.includes(timeValue);
    }
    delete inOpts.datesDisabled;
  }
  if ("defaultViewDate" in inOpts) {
    const viewDate = parseDate(inOpts.defaultViewDate, format, locale);
    if (viewDate !== void 0) {
      config2.defaultViewDate = viewDate;
    }
    delete inOpts.defaultViewDate;
  }
  if ("weekStart" in inOpts) {
    const wkStart = Number(inOpts.weekStart) % 7;
    if (!isNaN(wkStart)) {
      weekStart = updateWeekStart(wkStart, config2, weekNumbers);
    }
    delete inOpts.weekStart;
  }
  if (inOpts.daysOfWeekDisabled) {
    config2.daysOfWeekDisabled = inOpts.daysOfWeekDisabled.reduce(sanitizeDOW, []);
    delete inOpts.daysOfWeekDisabled;
  }
  if (inOpts.daysOfWeekHighlighted) {
    config2.daysOfWeekHighlighted = inOpts.daysOfWeekHighlighted.reduce(sanitizeDOW, []);
    delete inOpts.daysOfWeekHighlighted;
  }
  if ("weekNumbers" in inOpts) {
    let method = inOpts.weekNumbers;
    if (method) {
      const getWeekNumber = typeof method === "function" ? (timeValue, startOfWeek) => method(new Date(timeValue), startOfWeek) : determineGetWeekMethod(method = parseInt(method, 10), weekStart);
      if (getWeekNumber) {
        weekNumbers = config2.weekNumbers = method;
        config2.getWeekNumber = getWeekNumber;
      }
    } else {
      weekNumbers = config2.weekNumbers = 0;
      config2.getWeekNumber = null;
    }
    delete inOpts.weekNumbers;
  }
  if ("maxNumberOfDates" in inOpts) {
    const maxNumberOfDates = parseInt(inOpts.maxNumberOfDates, 10);
    if (maxNumberOfDates >= 0) {
      config2.maxNumberOfDates = maxNumberOfDates;
      config2.multidate = maxNumberOfDates !== 1;
    }
    delete inOpts.maxNumberOfDates;
  }
  if (inOpts.dateDelimiter) {
    config2.dateDelimiter = String(inOpts.dateDelimiter);
    delete inOpts.dateDelimiter;
  }
  let newMaxView = maxView;
  if ("maxView" in inOpts) {
    newMaxView = validateViewId(inOpts.maxView, maxView);
    delete inOpts.maxView;
  }
  newMaxView = pickLevel > newMaxView ? pickLevel : newMaxView;
  if (newMaxView !== maxView) {
    maxView = config2.maxView = newMaxView;
  }
  let newStartView = startView;
  if ("startView" in inOpts) {
    newStartView = validateViewId(inOpts.startView, newStartView);
    delete inOpts.startView;
  }
  if (newStartView < pickLevel) {
    newStartView = pickLevel;
  } else if (newStartView > maxView) {
    newStartView = maxView;
  }
  if (newStartView !== startView) {
    config2.startView = newStartView;
  }
  if (inOpts.prevArrow) {
    const prevArrow = parseHTML(inOpts.prevArrow);
    if (prevArrow.childNodes.length > 0) {
      config2.prevArrow = prevArrow.childNodes;
    }
    delete inOpts.prevArrow;
  }
  if (inOpts.nextArrow) {
    const nextArrow = parseHTML(inOpts.nextArrow);
    if (nextArrow.childNodes.length > 0) {
      config2.nextArrow = nextArrow.childNodes;
    }
    delete inOpts.nextArrow;
  }
  if ("disableTouchKeyboard" in inOpts) {
    config2.disableTouchKeyboard = "ontouchstart" in document && !!inOpts.disableTouchKeyboard;
    delete inOpts.disableTouchKeyboard;
  }
  if (inOpts.orientation) {
    const orientation = inOpts.orientation.toLowerCase().split(/\s+/g);
    config2.orientation = {
      x: orientation.find((x) => x === "left" || x === "right") || "auto",
      y: orientation.find((y) => y === "top" || y === "bottom") || "auto"
    };
    delete inOpts.orientation;
  }
  if ("todayButtonMode" in inOpts) {
    switch (inOpts.todayButtonMode) {
      case 0:
      case 1:
        config2.todayButtonMode = inOpts.todayButtonMode;
    }
    delete inOpts.todayButtonMode;
  }
  Object.entries(inOpts).forEach(([key, value2]) => {
    if (value2 !== void 0 && key in defaultOptions_default) {
      config2[key] = value2;
    }
  });
  return config2;
}

// node_modules/vanillajs-datepicker/js/options/shortcutKeys.js
var defaultShortcutKeys = {
  show: { key: "ArrowDown" },
  hide: null,
  toggle: { key: "Escape" },
  prevButton: { key: "ArrowLeft", ctrlOrMetaKey: true },
  nextButton: { key: "ArrowRight", ctrlOrMetaKey: true },
  viewSwitch: { key: "ArrowUp", ctrlOrMetaKey: true },
  clearButton: { key: "Backspace", ctrlOrMetaKey: true },
  todayButton: { key: ".", ctrlOrMetaKey: true },
  exitEditMode: { key: "ArrowDown", ctrlOrMetaKey: true }
};
function createShortcutKeyConfig(options) {
  return Object.keys(defaultShortcutKeys).reduce((keyDefs, shortcut) => {
    const keyDef = options[shortcut] === void 0 ? defaultShortcutKeys[shortcut] : options[shortcut];
    const key = keyDef && keyDef.key;
    if (!key || typeof key !== "string") {
      return keyDefs;
    }
    const normalizedDef = {
      key,
      ctrlOrMetaKey: !!(keyDef.ctrlOrMetaKey || keyDef.ctrlKey || keyDef.metaKey)
    };
    if (key.length > 1) {
      normalizedDef.altKey = !!keyDef.altKey;
      normalizedDef.shiftKey = !!keyDef.shiftKey;
    }
    keyDefs[shortcut] = normalizedDef;
    return keyDefs;
  }, {});
}

// node_modules/vanillajs-datepicker/js/picker/templates/pickerTemplate.js
var getButtons = (buttonList) => buttonList.map((classes) => `<button type="button" class="%buttonClass% ${classes}" tabindex="-1"></button>`).join("");
var pickerTemplate_default = optimizeTemplateHTML(`<div class="datepicker">
>>>>>>> Stashed changes
  <div class="datepicker-picker">
    <div class="datepicker-header">
      <div class="datepicker-title"></div>
      <div class="datepicker-controls">
        ${z1(["prev-button prev-btn","view-switch","next-button next-btn"])}
      </div>
    </div>
    <div class="datepicker-main"></div>
    <div class="datepicker-footer">
      <div class="datepicker-controls">
        ${z1(["today-button today-btn","clear-button clear-btn"])}
      </div>
    </div>
  </div>
</div>`);var V1=So(`<div class="days">
  <div class="days-of-week">${ri("span",7,{class:"dow"})}</div>
  <div class="datepicker-grid">${ri("span",42)}</div>
</div>`);var U1=So(`<div class="week-numbers calendar-weeks">
  <div class="days-of-week"><span class="dow"></span></div>
  <div class="weeks">${ri("span",6,{class:"week"})}</div>
</div>`);var yi=class{constructor(e,n){Object.assign(this,n,{picker:e,element:dn('<div class="datepicker-view"></div>').firstChild,selected:[],isRangeEnd:!!e.datepicker.rangeSideIndex}),this.init(this.picker.datepicker.config)}init(e){"pickLevel"in e&&(this.isMinView=this.id===e.pickLevel),this.setOptions(e),this.updateFocus(),this.updateSelection()}prepareForRender(e,n,i){this.disabled=[];let l=this.picker;l.setViewSwitchLabel(e),l.setPrevButtonDisabled(n),l.setNextButtonDisabled(i)}setDisabled(e,n){n.add("disabled"),$i(this.disabled,e)}performBeforeHook(e,n){let i=this.beforeShow(new Date(n));switch(typeof i){case"boolean":i={enabled:i};break;case"string":i={classes:i}}if(i){let l=e.classList;if(i.enabled===!1&&this.setDisabled(n,l),i.classes){let r=i.classes.split(/\s+/);l.add(...r),r.includes("disabled")&&this.setDisabled(n,l)}i.content&&P1(e,i.content)}}renderCell(e,n,i,l,{selected:r,range:a},u,m=[]){e.textContent=n,this.isMinView&&(e.dataset.date=l);let f=e.classList;if(e.className=`datepicker-cell ${this.cellClass}`,i<this.first?f.add("prev"):i>this.last&&f.add("next"),f.add(...m),(u||this.checkDisabled(l,this.id))&&this.setDisabled(l,f),a){let[c,g]=a;i>c&&i<g&&f.add("range"),i===c&&f.add("range-start"),i===g&&f.add("range-end")}r.includes(i)&&f.add("selected"),i===this.focused&&f.add("focused"),this.beforeShow&&this.performBeforeHook(e,l)}refreshCell(e,n,i,[l,r]){let a=e.classList;a.remove("range","range-start","range-end","selected","focused"),n>l&&n<r&&a.add("range"),n===l&&a.add("range-start"),n===r&&a.add("range-end"),i.includes(n)&&a.add("selected"),n===this.focused&&a.add("focused")}changeFocusedCell(e){this.grid.querySelectorAll(".focused").forEach(n=>{n.classList.remove("focused")}),this.grid.children[e].classList.add("focused")}};var ts=class extends yi{constructor(e){super(e,{id:0,name:"days",cellClass:"day"})}init(e,n=!0){if(n){let i=dn(V1).firstChild;this.dow=i.firstChild,this.grid=i.lastChild,this.element.appendChild(i)}super.init(e)}setOptions(e){let n;if("minDate"in e&&(this.minDate=e.minDate),"maxDate"in e&&(this.maxDate=e.maxDate),e.checkDisabled&&(this.checkDisabled=e.checkDisabled),e.daysOfWeekDisabled&&(this.daysOfWeekDisabled=e.daysOfWeekDisabled,n=!0),e.daysOfWeekHighlighted&&(this.daysOfWeekHighlighted=e.daysOfWeekHighlighted),"todayHighlight"in e&&(this.todayHighlight=e.todayHighlight),"weekStart"in e&&(this.weekStart=e.weekStart,this.weekEnd=e.weekEnd,n=!0),e.locale){let i=this.locale=e.locale;this.dayNames=i.daysMin,this.switchLabelFormat=i.titleFormat,n=!0}if("beforeShowDay"in e&&(this.beforeShow=typeof e.beforeShowDay=="function"?e.beforeShowDay:void 0),"weekNumbers"in e)if(e.weekNumbers&&!this.weekNumbers){let i=dn(U1).firstChild;this.weekNumbers={element:i,dow:i.firstChild,weeks:i.lastChild},this.element.insertBefore(i,this.element.firstChild)}else this.weekNumbers&&!e.weekNumbers&&(this.element.removeChild(this.weekNumbers.element),this.weekNumbers=null);"getWeekNumber"in e&&(this.getWeekNumber=e.getWeekNumber),"showDaysOfWeek"in e&&(e.showDaysOfWeek?(io(this.dow),this.weekNumbers&&io(this.weekNumbers.dow)):(no(this.dow),this.weekNumbers&&no(this.weekNumbers.dow))),n&&Array.from(this.dow.children).forEach((i,l)=>{let r=(this.weekStart+l)%7;i.textContent=this.dayNames[r],i.className=this.daysOfWeekDisabled.includes(r)?"dow disabled":"dow"})}updateFocus(){let e=new Date(this.picker.viewDate),n=e.getFullYear(),i=e.getMonth(),l=ai(n,i,1),r=Hi(l,this.weekStart,this.weekStart);this.first=l,this.last=ai(n,i+1,0),this.start=r,this.focused=this.picker.viewDate}updateSelection(){let{dates:e,rangepicker:n}=this.picker.datepicker;this.selected=e,n&&(this.range=n.dates)}render(){if(this.today=this.todayHighlight?zn():void 0,this.prepareForRender(to(this.focused,this.switchLabelFormat,this.locale),this.first<=this.minDate,this.last>=this.maxDate),this.weekNumbers){let e=this.weekStart,n=Hi(this.first,e,e);Array.from(this.weekNumbers.weeks.children).forEach((i,l)=>{let r=C1(n,l);i.textContent=this.getWeekNumber(r,e),l>3&&i.classList[r>this.last?"add":"remove"]("next")})}Array.from(this.grid.children).forEach((e,n)=>{let i=Ji(this.start,n),l=new Date(i),r=l.getDay(),a=[];this.today===i&&a.push("today"),this.daysOfWeekHighlighted.includes(r)&&a.push("highlighted"),this.renderCell(e,l.getDate(),i,i,this,i<this.minDate||i>this.maxDate||this.daysOfWeekDisabled.includes(r),a)})}refresh(){let e=this.range||[];Array.from(this.grid.children).forEach(n=>{this.refreshCell(n,Number(n.dataset.date),this.selected,e)})}refreshFocus(){this.changeFocusedCell(Math.round((this.focused-this.start)/864e5))}};function Y1(t,e){if(!t||!t[0]||!t[1])return;let[[n,i],[l,r]]=t;if(!(n>e||l<e))return[n===e?i:-1,l===e?r:12]}var ns=class extends yi{constructor(e){super(e,{id:1,name:"months",cellClass:"month"})}init(e,n=!0){n&&(this.grid=this.element,this.element.classList.add("months","datepicker-grid"),this.grid.appendChild(dn(ri("span",12,{"data-month":i=>i}))),this.first=0,this.last=11),super.init(e)}setOptions(e){if(e.locale&&(this.monthNames=e.locale.monthsShort),"minDate"in e)if(e.minDate===void 0)this.minYear=this.minMonth=this.minDate=void 0;else{let n=new Date(e.minDate);this.minYear=n.getFullYear(),this.minMonth=n.getMonth(),this.minDate=n.setDate(1)}if("maxDate"in e)if(e.maxDate===void 0)this.maxYear=this.maxMonth=this.maxDate=void 0;else{let n=new Date(e.maxDate);this.maxYear=n.getFullYear(),this.maxMonth=n.getMonth(),this.maxDate=ai(this.maxYear,this.maxMonth+1,0)}e.checkDisabled&&(this.checkDisabled=this.isMinView||e.datesDisabled===null?e.checkDisabled:()=>!1),"beforeShowMonth"in e&&(this.beforeShow=typeof e.beforeShowMonth=="function"?e.beforeShowMonth:void 0)}updateFocus(){let e=new Date(this.picker.viewDate);this.year=e.getFullYear(),this.focused=e.getMonth()}updateSelection(){let{dates:e,rangepicker:n}=this.picker.datepicker;this.selected=e.reduce((i,l)=>{let r=new Date(l),a=r.getFullYear(),u=r.getMonth();return i[a]===void 0?i[a]=[u]:$i(i[a],u),i},{}),n&&n.dates&&(this.range=n.dates.map(i=>{let l=new Date(i);return isNaN(l)?void 0:[l.getFullYear(),l.getMonth()]}))}render(){this.prepareForRender(this.year,this.year<=this.minYear,this.year>=this.maxYear);let e=this.selected[this.year]||[],n=this.year<this.minYear||this.year>this.maxYear,i=this.year===this.minYear,l=this.year===this.maxYear,r=Y1(this.range,this.year);Array.from(this.grid.children).forEach((a,u)=>{let m=Sn(new Date(this.year,u,1),1,this.isRangeEnd);this.renderCell(a,this.monthNames[u],u,m,{selected:e,range:r},n||i&&u<this.minMonth||l&&u>this.maxMonth)})}refresh(){let e=this.selected[this.year]||[],n=Y1(this.range,this.year)||[];Array.from(this.grid.children).forEach((i,l)=>{this.refreshCell(i,l,e,n)})}refreshFocus(){this.changeFocusedCell(this.focused)}};function Dv(t){return[...t].reduce((e,n,i)=>e+=i?n:n.toUpperCase(),"")}var Ao=class extends yi{constructor(e,n){super(e,n)}init(e,n=!0){n&&(this.navStep=this.step*10,this.beforeShowOption=`beforeShow${Dv(this.cellClass)}`,this.grid=this.element,this.element.classList.add(this.name,"datepicker-grid"),this.grid.appendChild(dn(ri("span",12)))),super.init(e)}setOptions(e){if("minDate"in e&&(e.minDate===void 0?this.minYear=this.minDate=void 0:(this.minYear=eo(e.minDate,this.step),this.minDate=ai(this.minYear,0,1))),"maxDate"in e&&(e.maxDate===void 0?this.maxYear=this.maxDate=void 0:(this.maxYear=eo(e.maxDate,this.step),this.maxDate=ai(this.maxYear,11,31))),e.checkDisabled&&(this.checkDisabled=this.isMinView||e.datesDisabled===null?e.checkDisabled:()=>!1),this.beforeShowOption in e){let n=e[this.beforeShowOption];this.beforeShow=typeof n=="function"?n:void 0}}updateFocus(){let e=new Date(this.picker.viewDate),n=eo(e,this.navStep),i=n+9*this.step;this.first=n,this.last=i,this.start=n-this.step,this.focused=eo(e,this.step)}updateSelection(){let{dates:e,rangepicker:n}=this.picker.datepicker;this.selected=e.reduce((i,l)=>$i(i,eo(l,this.step)),[]),n&&n.dates&&(this.range=n.dates.map(i=>{if(i!==void 0)return eo(i,this.step)}))}render(){this.prepareForRender(`${this.first}-${this.last}`,this.first<=this.minYear,this.last>=this.maxYear),Array.from(this.grid.children).forEach((e,n)=>{let i=this.start+n*this.step,l=Sn(new Date(i,0,1),2,this.isRangeEnd);e.dataset.year=i,this.renderCell(e,i,i,l,this,i<this.minYear||i>this.maxYear)})}refresh(){let e=this.range||[];Array.from(this.grid.children).forEach(n=>{this.refreshCell(n,Number(n.textContent),this.selected,e)})}refreshFocus(){this.changeFocusedCell(Math.round((this.focused-this.start)/this.step))}};function Fi(t,e){let n={bubbles:!0,cancelable:!0,detail:{date:t.getDate(),viewDate:new Date(t.picker.viewDate),viewId:t.picker.currentView.id,datepicker:t}};t.element.dispatchEvent(new CustomEvent(e,n))}function Io(t,e){let{config:n,picker:i}=t,{currentView:l,viewDate:r}=i,a;switch(l.id){case 0:a=Qi(r,e);break;case 1:a=Pi(r,e);break;default:a=Pi(r,e*l.navStep)}a=Ma(a,n.minDate,n.maxDate),i.changeFocus(a).render()}function Ia(t){let e=t.picker.currentView.id;e!==t.config.maxView&&t.picker.changeView(e+1).render()}function Oa(t){t.setDate({clear:!0})}function xa(t){let e=zn();t.config.todayButtonMode===1?t.setDate(e,{forceRefresh:!0,viewDate:e}):t.setFocusedDate(e,!0)}function Ha(t){let e=()=>{t.config.updateOnBlur?t.update({revert:!0}):t.refresh("input"),t.hide()},n=t.element;Ni(n)?n.addEventListener("blur",e,{once:!0}):e()}function G1(t,e){let n=t.picker,i=new Date(n.viewDate),l=n.currentView.id,r=l===1?Qi(i,e-i.getMonth()):Pi(i,e-i.getFullYear());n.changeFocus(r).changeView(l-1).render()}function K1(t){Ia(t)}function X1(t){Io(t,-1)}function Z1(t){Io(t,1)}function J1(t,e){let n=Da(e,".datepicker-cell");if(!n||n.classList.contains("disabled"))return;let{id:i,isMinView:l}=t.picker.currentView,r=n.dataset;l?t.setDate(Number(r.date)):i===1?G1(t,Number(r.month)):G1(t,Number(r.year))}function Q1(t){t.preventDefault()}var ac=["left","top","right","bottom"].reduce((t,e)=>(t[e]=`datepicker-orient-${e}`,t),{}),eb=t=>t&&`${t}px`;function tb(t,e){if("title"in e&&(e.title?(t.controls.title.textContent=e.title,io(t.controls.title)):(t.controls.title.textContent="",no(t.controls.title))),e.prevArrow){let n=t.controls.prevButton;Jo(n),e.prevArrow.forEach(i=>{n.appendChild(i.cloneNode(!0))})}if(e.nextArrow){let n=t.controls.nextButton;Jo(n),e.nextArrow.forEach(i=>{n.appendChild(i.cloneNode(!0))})}if(e.locale&&(t.controls.todayButton.textContent=e.locale.today,t.controls.clearButton.textContent=e.locale.clear),"todayButton"in e&&(e.todayButton?io(t.controls.todayButton):no(t.controls.todayButton)),"minDate"in e||"maxDate"in e){let{minDate:n,maxDate:i}=t.datepicker.config;t.controls.todayButton.disabled=!Co(zn(),n,i)}"clearButton"in e&&(e.clearButton?io(t.controls.clearButton):no(t.controls.clearButton))}function nb(t){let{dates:e,config:n,rangeSideIndex:i}=t,l=e.length>0?Eo(e):Sn(n.defaultViewDate,n.pickLevel,i);return Ma(l,n.minDate,n.maxDate)}function ib(t,e){!("_oldViewDate"in t)&&e!==t.viewDate&&(t._oldViewDate=t.viewDate),t.viewDate=e;let{id:n,year:i,first:l,last:r}=t.currentView,a=new Date(e).getFullYear();switch(n){case 0:return e<l||e>r;case 1:return a!==i;default:return a<l||a>r}}function uc(t){return window.getComputedStyle(t).direction}function ob(t){let e=ic(t);if(!(e===document.body||!e))return window.getComputedStyle(e).overflow!=="visible"?e:ob(e)}var is=class{constructor(e){let{config:n,inputField:i}=this.datepicker=e,l=W1.replace(/%buttonClass%/g,n.buttonClass),r=this.element=dn(l).firstChild,[a,u,m]=r.firstChild.children,f=a.firstElementChild,[c,g,b]=a.lastElementChild.children,[h,v]=m.firstChild.children,w={title:f,prevButton:c,viewSwitch:g,nextButton:b,todayButton:h,clearButton:v};this.main=u,this.controls=w;let k=i?"dropdown":"inline";r.classList.add(`datepicker-${k}`),tb(this,n),this.viewDate=nb(e),Lo(e,[[r,"mousedown",Q1],[u,"click",J1.bind(null,e)],[w.viewSwitch,"click",K1.bind(null,e)],[w.prevButton,"click",X1.bind(null,e)],[w.nextButton,"click",Z1.bind(null,e)],[w.todayButton,"click",xa.bind(null,e)],[w.clearButton,"click",Oa.bind(null,e)]]),this.views=[new ts(this),new ns(this),new Ao(this,{id:2,name:"years",cellClass:"year",step:1}),new Ao(this,{id:3,name:"decades",cellClass:"decade",step:10})],this.currentView=this.views[n.startView],this.currentView.render(),this.main.appendChild(this.currentView.element),n.container?n.container.appendChild(this.element):i.after(this.element)}setOptions(e){tb(this,e),this.views.forEach(n=>{n.init(e,!1)}),this.currentView.render()}detach(){this.element.remove()}show(){if(this.active)return;let{datepicker:e,element:n}=this,i=e.inputField;if(i){let l=uc(i);l!==uc(ic(n))?n.dir=l:n.dir&&n.removeAttribute("dir"),this.place(),n.classList.add("active"),e.config.disableTouchKeyboard&&i.blur()}else n.classList.add("active");this.active=!0,Fi(e,"show")}hide(){this.active&&(this.datepicker.exitEditMode(),this.element.classList.remove("active"),this.active=!1,Fi(this.datepicker,"hide"))}place(){let{classList:e,style:n}=this.element;n.display="block";let{width:i,height:l}=this.element.getBoundingClientRect(),r=this.element.offsetParent;n.display="";let{config:a,inputField:u}=this.datepicker,{left:m,top:f,right:c,bottom:g,width:b,height:h}=u.getBoundingClientRect(),{x:v,y:w}=a.orientation,k=m,_=f;if(r===document.body||!r)k+=window.scrollX,_+=window.scrollY;else{let H=r.getBoundingClientRect();k-=H.left-r.scrollLeft,_-=H.top-r.scrollTop}let M=ob(u),O=0,D=0,{clientWidth:L,clientHeight:T}=document.documentElement;if(M){let H=M.getBoundingClientRect();H.top>0&&(D=H.top),H.left>0&&(O=H.left),H.right<L&&(L=H.right),H.bottom<T&&(T=H.bottom)}let A=0;v==="auto"&&(m<O?(v="left",A=O-m):m+i>L?(v="right",L<c&&(A=L-c)):uc(u)==="rtl"?v=c-i<O?"left":"right":v="left"),v==="right"&&(k+=b-i),k+=A,w==="auto"&&(f-l>D?w=g+l>T?"top":"bottom":w="bottom"),w==="top"?_-=l:_+=h,e.remove(...Object.values(ac)),e.add(ac[v],ac[w]),n.left=eb(k),n.top=eb(_)}setViewSwitchLabel(e){this.controls.viewSwitch.textContent=e}setPrevButtonDisabled(e){this.controls.prevButton.disabled=e}setNextButtonDisabled(e){this.controls.nextButton.disabled=e}changeView(e){let n=this.currentView;return e!==n.id&&(this._oldView||(this._oldView=n),this.currentView=this.views[e],this._renderMethod="render"),this}changeFocus(e){return this._renderMethod=ib(this,e)?"render":"refreshFocus",this.views.forEach(n=>{n.updateFocus()}),this}update(e=void 0){let n=e===void 0?nb(this.datepicker):e;return this._renderMethod=ib(this,n)?"render":"refresh",this.views.forEach(i=>{i.updateFocus(),i.updateSelection()}),this}render(e=!0){let{currentView:n,datepicker:i,_oldView:l}=this,r=new Date(this._oldViewDate),a=e&&this._renderMethod||"render";if(delete this._oldView,delete this._oldViewDate,delete this._renderMethod,n[a](),l&&(this.main.replaceChild(n.element,l.element),Fi(i,"changeView")),!isNaN(r)){let u=new Date(this.viewDate);u.getFullYear()!==r.getFullYear()&&Fi(i,"changeYear"),u.getMonth()!==r.getMonth()&&Fi(i,"changeMonth")}}};function sb(t,e,n,i,l,r){if(Co(t,l,r)){if(i(t)){let a=e(t,n);return sb(a,e,n,i,l,r)}return t}}function Av(t,e,n){let i=t.picker,l=i.currentView,r=l.step||1,a=i.viewDate,u;switch(l.id){case 0:a=Ji(a,n?e*7:e),u=Ji;break;case 1:a=Qi(a,n?e*4:e),u=Qi;break;default:a=Pi(a,e*(n?4:1)*r),u=Pi}a=sb(a,u,e<0?-r:r,m=>l.disabled.includes(m),l.minDate,l.maxDate),a!==void 0&&i.changeFocus(a).render()}function lb(t,e){let{config:n,picker:i,editMode:l}=t,r=i.active,{key:a,altKey:u,shiftKey:m}=e,f=e.ctrlKey||e.metaKey,c=()=>{e.preventDefault(),e.stopPropagation()};if(a==="Tab"){Ha(t);return}if(a==="Enter"){if(!r)t.update();else if(l)t.exitEditMode({update:!0,autohide:n.autohide});else{let w=i.currentView;w.isMinView?t.setDate(i.viewDate):(i.changeView(w.id-1).render(),c())}return}let g=n.shortcutKeys,b={key:a,ctrlOrMetaKey:f,altKey:u,shiftKey:m},h=Object.keys(g).find(w=>{let k=g[w];return!Object.keys(k).find(_=>k[_]!==b[_])});if(h){let w;if(h==="toggle"?w=h:l?h==="exitEditMode"&&(w=h):r?h==="hide"?w=h:h==="prevButton"?w=[Io,[t,-1]]:h==="nextButton"?w=[Io,[t,1]]:h==="viewSwitch"?w=[Ia,[t]]:n.clearButton&&h==="clearButton"?w=[Oa,[t]]:n.todayButton&&h==="todayButton"&&(w=[xa,[t]]):h==="show"&&(w=h),w){Array.isArray(w)?w[0].apply(null,w[1]):t[w](),c();return}}if(!r||l)return;let v=(w,k)=>{m||f||u?t.enterEditMode():(Av(t,w,k),e.preventDefault())};a==="ArrowLeft"?v(-1,!1):a==="ArrowRight"?v(1,!1):a==="ArrowUp"?v(-1,!0):a==="ArrowDown"?v(1,!0):(a==="Backspace"||a==="Delete"||a&&a.length===1&&!f)&&t.enterEditMode()}function rb(t){t.config.showOnFocus&&!t._showing&&t.show()}function ab(t,e){let n=e.target;(t.picker.active||t.config.showOnClick)&&(n._active=Ni(n),n._clicking=setTimeout(()=>{delete n._active,delete n._clicking},2e3))}function ub(t,e){let n=e.target;n._clicking&&(clearTimeout(n._clicking),delete n._clicking,n._active&&t.enterEditMode(),delete n._active,t.config.showOnClick&&t.show())}function fb(t,e){e.clipboardData.types.includes("text/plain")&&t.enterEditMode()}function mb(t,e){let{element:n,picker:i}=t;if(!i.active&&!Ni(n))return;let l=i.element;Da(e,r=>r===n||r===l)||Ha(t)}function pb(t,e){return t.map(n=>to(n,e.format,e.locale)).join(e.dateDelimiter)}function hb(t,e,n=!1){if(e.length===0)return n?[]:void 0;let{config:i,dates:l,rangeSideIndex:r}=t,{pickLevel:a,maxNumberOfDates:u}=i,m=e.reduce((f,c)=>{let g=wi(c,i.format,i.locale);return g===void 0||(g=Sn(g,a,r),Co(g,i.minDate,i.maxDate)&&!f.includes(g)&&!i.checkDisabled(g,a)&&(a>0||!i.daysOfWeekDisabled.includes(new Date(g).getDay()))&&f.push(g)),f},[]);if(m.length!==0)return i.multidate&&!n&&(m=m.reduce((f,c)=>(l.includes(c)||f.push(c),f),l.filter(f=>!m.includes(f)))),u&&m.length>u?m.slice(u*-1):m}function Pa(t,e=3,n=!0,i=void 0){let{config:l,picker:r,inputField:a}=t;if(e&2){let u=r.active?l.pickLevel:l.startView;r.update(i).changeView(u).render(n)}e&1&&a&&(a.value=pb(t.dates,l))}function db(t,e,n){let i=t.config,{clear:l,render:r,autohide:a,revert:u,forceRefresh:m,viewDate:f}=n;r===void 0&&(r=!0),r?a===void 0&&(a=i.autohide):a=m=!1,f=wi(f,i.format,i.locale);let c=hb(t,e,l);!c&&!u||(c&&c.toString()!==t.dates.toString()?(t.dates=c,Pa(t,r?3:1,!0,f),Fi(t,"changeDate")):Pa(t,m?3:1,!0,f),a&&t.hide())}function cb(t,e){return e?n=>to(n,e,t.config.locale):n=>new Date(n)}var ki=class{constructor(e,n={},i=void 0){e.datepicker=this,this.element=e,this.dates=[];let l=this.config=Object.assign({buttonClass:n.buttonClass&&String(n.buttonClass)||"button",container:null,defaultViewDate:zn(),maxDate:void 0,minDate:void 0},es(Qo,this)),r;if(e.tagName==="INPUT"?(r=this.inputField=e,r.classList.add("datepicker-input"),n.container&&(l.container=n.container instanceof HTMLElement?n.container:document.querySelector(n.container))):l.container=e,i){let c=i.inputs.indexOf(r),g=i.datepickers;if(c<0||c>1||!Array.isArray(g))throw Error("Invalid rangepicker object.");g[c]=this,this.rangepicker=i,this.rangeSideIndex=c}this._options=n,Object.assign(l,es(n,this)),l.shortcutKeys=rc(n.shortcutKeys||{});let a=tc(e.value||e.dataset.date,l.dateDelimiter);delete e.dataset.date;let u=hb(this,a);u&&u.length>0&&(this.dates=u),r&&(r.value=pb(this.dates,l));let m=this.picker=new is(this),f=[e,"keydown",lb.bind(null,this)];r?Lo(this,[f,[r,"focus",rb.bind(null,this)],[r,"mousedown",ab.bind(null,this)],[r,"click",ub.bind(null,this)],[r,"paste",fb.bind(null,this)],[document,"mousedown",mb.bind(null,this)],[window,"resize",m.place.bind(m)]]):(Lo(this,[f]),this.show())}static formatDate(e,n,i){return to(e,n,i&&Do[i]||Do.en)}static parseDate(e,n,i){return wi(e,n,i&&Do[i]||Do.en)}static get locales(){return Do}get active(){return!!(this.picker&&this.picker.active)}get pickerElement(){return this.picker?this.picker.element:void 0}setOptions(e){let n=es(e,this);Object.assign(this._options,e),Object.assign(this.config,n),this.picker.setOptions(n),Pa(this,3)}show(){if(this.inputField){let{config:e,inputField:n}=this;if(n.disabled||n.readOnly&&!e.enableOnReadonly)return;!Ni(n)&&!e.disableTouchKeyboard&&(this._showing=!0,n.focus(),delete this._showing)}this.picker.show()}hide(){this.inputField&&(this.picker.hide(),this.picker.update().changeView(this.config.startView).render())}toggle(){this.picker.active?this.inputField&&this.picker.hide():this.show()}destroy(){this.hide(),oc(this),this.picker.detach();let e=this.element;return e.classList.remove("datepicker-input"),delete e.datepicker,this}getDate(e=void 0){let n=cb(this,e);if(this.config.multidate)return this.dates.map(n);if(this.dates.length>0)return n(this.dates[0])}setDate(...e){let n=[...e],i={},l=Eo(e);l&&typeof l=="object"&&!Array.isArray(l)&&!(l instanceof Date)&&Object.assign(i,n.pop());let r=Array.isArray(n[0])?n[0]:n;db(this,r,i)}update(e=void 0){if(!this.inputField)return;let n=Object.assign(e||{},{clear:!0,render:!0,viewDate:void 0}),i=tc(this.inputField.value,this.config.dateDelimiter);db(this,i,n)}getFocusedDate(e=void 0){return cb(this,e)(this.picker.viewDate)}setFocusedDate(e,n=!1){let{config:i,picker:l,active:r,rangeSideIndex:a}=this,u=i.pickLevel,m=wi(e,i.format,i.locale);m!==void 0&&(l.changeFocus(Sn(m,u,a)),r&&n&&l.changeView(u),l.render())}refresh(e=void 0,n=!1){e&&typeof e!="string"&&(n=e,e=void 0);let i;e==="picker"?i=2:e==="input"?i=1:i=3,Pa(this,i,!n)}enterEditMode(){let e=this.inputField;!e||e.readOnly||!this.picker.active||this.editMode||(this.editMode=!0,e.classList.add("in-edit"))}exitEditMode(e=void 0){if(!this.inputField||!this.editMode)return;let n=Object.assign({update:!1},e);delete this.editMode,this.inputField.classList.remove("in-edit"),n.update&&this.update(n)}};function Iv(t){let e,n,i,l;return{c(){e=p("input"),x(e,"type","text"),x(e,"autocomplete","off"),x(e,"class","prevent-scrolling-on-focus"),x(e,"aria-invalid",t[10]),x(e,"aria-errormessage",n=t[10]?t[15]:void 0),x(e,"aria-required",t[6]),x(e,"placeholder",t[4]),x(e,"title",t[8]),x(e,"name",t[9]),e.disabled=t[5],x(e,"id",t[14])},m(r,a){s(r,e,a),t[33](e),ct(e,t[0]),i||(l=[ye(e,"changeDate",t[19]),ye(e,"input",t[18]),ye(e,"keydown",t[17],!0),ye(e,"show",t[20]),ye(e,"hide",t[21]),ye(e,"blur",t[22]),ye(e,"input",t[34])],i=!0)},p(r,a){a[0]&1024&&x(e,"aria-invalid",r[10]),a[0]&1024&&n!==(n=r[10]?r[15]:void 0)&&x(e,"aria-errormessage",n),a[0]&64&&x(e,"aria-required",r[6]),a[0]&16&&x(e,"placeholder",r[4]),a[0]&256&&x(e,"title",r[8]),a[0]&512&&x(e,"name",r[9]),a[0]&32&&(e.disabled=r[5]),a[0]&16384&&x(e,"id",r[14]),a[0]&1&&e.value!==r[0]&&ct(e,r[0])},d(r){r&&o(e),t[33](null),i=!1,Re(l)}}}function Ov(t){let e,n,i,l;return{c(){e=p("input"),x(e,"type","date"),x(e,"class","prevent-scrolling-on-focus"),x(e,"aria-invalid",t[10]),x(e,"aria-errormessage",n=t[10]?t[15]:void 0),x(e,"aria-required",t[6]),x(e,"title",t[8]),x(e,"name",t[9]),e.disabled=t[5],x(e,"id",t[14])},m(r,a){s(r,e,a),t[31](e),ct(e,t[0]),i||(l=[ye(e,"change",t[19]),ye(e,"input",t[32])],i=!0)},p(r,a){a[0]&1024&&x(e,"aria-invalid",r[10]),a[0]&1024&&n!==(n=r[10]?r[15]:void 0)&&x(e,"aria-errormessage",n),a[0]&64&&x(e,"aria-required",r[6]),a[0]&256&&x(e,"title",r[8]),a[0]&512&&x(e,"name",r[9]),a[0]&32&&(e.disabled=r[5]),a[0]&16384&&x(e,"id",r[14]),a[0]&1&&ct(e,r[0])},d(r){r&&o(e),t[31](null),i=!1,Re(l)}}}function xv(t){let e,n,i,l,r,a,u,m,f,c,g,b,h;n=new vt({props:{label:t[7],disabled:t[5],for:t[14]}}),l=new bt({props:{msg:t[11]}}),u=new $t({props:{id:t[15],msg:t[10]}}),c=new De({props:{link:!0,icon:"calendar",class:"input-date-button",tabindex:"-1"}}),c.$on("mousedown",t[23]),c.$on("click",t[24]);function v(_,M){return _[16]?Ov:Iv}let k=v(t,[-1,-1])(t);return{c(){e=p("div"),S(n.$$.fragment),i=d(),S(l.$$.fragment),r=d(),a=p("div"),S(u.$$.fragment),m=d(),f=p("div"),S(c.$$.fragment),g=d(),k.c(),x(f,"class","input-row"),x(a,"class","input-inner"),ie(a,"disabled",t[5]),x(e,"class",b="input input-date "+t[3]),x(e,"aria-expanded",t[13]),ie(e,"open",t[13]),ie(e,"native",t[16]),ie(e,"has-error",t[10]),ie(e,"label-on-the-left",t[12]===!0||t[12]==="true")},m(_,M){s(_,e,M),E(n,e,null),q(e,i),E(l,e,null),q(e,r),q(e,a),E(u,a,null),q(a,m),q(a,f),E(c,f,null),q(f,g),k.m(f,null),t[35](e),h=!0},p(_,M){let O={};M[0]&128&&(O.label=_[7]),M[0]&32&&(O.disabled=_[5]),M[0]&16384&&(O.for=_[14]),n.$set(O);let D={};M[0]&2048&&(D.msg=_[11]),l.$set(D);let L={};M[0]&1024&&(L.msg=_[10]),u.$set(L),k.p(_,M),(!h||M[0]&32)&&ie(a,"disabled",_[5]),(!h||M[0]&8&&b!==(b="input input-date "+_[3]))&&x(e,"class",b),(!h||M[0]&8192)&&x(e,"aria-expanded",_[13]),(!h||M[0]&8200)&&ie(e,"open",_[13]),(!h||M[0]&65544)&&ie(e,"native",_[16]),(!h||M[0]&1032)&&ie(e,"has-error",_[10]),(!h||M[0]&4104)&&ie(e,"label-on-the-left",_[12]===!0||_[12]==="true")},i(_){h||($(n.$$.fragment,_),$(l.$$.fragment,_),$(u.$$.fragment,_),$(c.$$.fragment,_),h=!0)},o(_){y(n.$$.fragment,_),y(l.$$.fragment,_),y(u.$$.fragment,_),y(c.$$.fragment,_),h=!1},d(_){_&&o(e),C(n),C(l),C(u),C(c),k.d(),t[35](null)}}}function Hv(t,e,n){let i,l,{class:r=""}=e,{format:a="yyyy-mm-dd"}=e,{value:u=""}=e,{placeholder:m=a}=e,{elevate:f=!1}=e,{showOnFocus:c=!1}=e,{orientation:g="auto"}=e,{disabled:b=!1}=e,{required:h=void 0}=e,{id:v=""}=e,{label:w=""}=e,{title:k=void 0}=e,{name:_=void 0}=e,{error:M=void 0}=e,{info:O=void 0}=e,{labelOnTheLeft:D=!1}=e,{useNativeOnMobile:L=!1}=e,{element:T=void 0}=e,{inputElement:A=void 0}=e,H=Xe(),I=rt(),P=Gn()&&(L===!0||L==="true"),N,j=!!P,K=!1;Nt(U),Cn(()=>{u!==N.getDate(a)&&F()});function U(){P||(N=new ki(A,{autohide:!0,buttonClass:"button button-text",container:l?document.body:void 0,format:a,todayBtn:!0,todayBtnMode:1,orientation:g,todayHighlight:!0,showOnFocus:c==="true"||c===!0,prevArrow:Ki("chevronLeft"),nextArrow:Ki("chevronRight"),updateOnBlur:!0,weekStart:1}))}function G(J){let pe=N.active,we={event:J,component:N};J.key==="Escape"?(pe?J.stopPropagation():I("keydown",we),requestAnimationFrame(()=>N.hide())):J.key==="Enter"?(pe?J.preventDefault():I("keydown",we),requestAnimationFrame(()=>{N.hide(),A&&(u!==A.value&&n(0,u=A.value),I("keydown",we))})):I("keydown",we)}function F(){let J=j;requestAnimationFrame(()=>{let pe=ki.parseDate(u,a);ki.formatDate(pe,a)===u&&(N&&N.setDate(u),J&&N.show())})}function z(){N?n(0,u=N.getDate(a)):n(0,u=A.value),I("change",u)}function V(){n(13,j=!0)}function Q(){n(13,j=!1)}function le(){N.hide()}function ee(){K=j}function X(){K?N.hide():N.show(),K=!1,A&&A.focus()}function Z(J){_e[J?"unshift":"push"](()=>{A=J,n(2,A)})}function ge(){u=this.value,n(0,u)}function he(J){_e[J?"unshift":"push"](()=>{A=J,n(2,A)})}function W(){u=this.value,n(0,u)}function Y(J){_e[J?"unshift":"push"](()=>{T=J,n(1,T)})}return t.$$set=J=>{"class"in J&&n(3,r=J.class),"format"in J&&n(25,a=J.format),"value"in J&&n(0,u=J.value),"placeholder"in J&&n(4,m=J.placeholder),"elevate"in J&&n(26,f=J.elevate),"showOnFocus"in J&&n(27,c=J.showOnFocus),"orientation"in J&&n(28,g=J.orientation),"disabled"in J&&n(5,b=J.disabled),"required"in J&&n(6,h=J.required),"id"in J&&n(29,v=J.id),"label"in J&&n(7,w=J.label),"title"in J&&n(8,k=J.title),"name"in J&&n(9,_=J.name),"error"in J&&n(10,M=J.error),"info"in J&&n(11,O=J.info),"labelOnTheLeft"in J&&n(12,D=J.labelOnTheLeft),"useNativeOnMobile"in J&&n(30,L=J.useNativeOnMobile),"element"in J&&n(1,T=J.element),"inputElement"in J&&n(2,A=J.inputElement)},t.$$.update=()=>{t.$$.dirty[0]&536871424&&n(14,i=v||_||Xe()),t.$$.dirty[0]&67108864&&(l=f===!0||f==="true")},[u,T,A,r,m,b,h,w,k,_,M,O,D,j,i,H,P,G,F,z,V,Q,le,ee,X,a,f,c,g,v,L,Z,ge,he,W,Y]}var fc=class extends fe{constructor(e){super(),de(this,e,Hv,xv,me,{class:3,format:25,value:0,placeholder:4,elevate:26,showOnFocus:27,orientation:28,disabled:5,required:6,id:29,label:7,title:8,name:9,error:10,info:11,labelOnTheLeft:12,useNativeOnMobile:30,element:1,inputElement:2},null,[-1,-1])}},Wn=fc;function Pv(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_;n=new vt({props:{label:t[6],for:t[10]}}),l=new bt({props:{msg:t[8]}}),u=new $t({props:{id:t[11],msg:t[7]}}),c=new zt({props:{name:"calculator"}});let M=[{type:"text"},{autocomplete:"off"},{disabled:t[5]},{id:t[10]},t[14],{"aria-invalid":t[7]},{"aria-errormessage":h=t[7]?t[11]:void 0},{"aria-required":t[4]}],O={};for(let D=0;D<M.length;D+=1)O=tt(O,M[D]);return{c(){e=p("div"),S(n.$$.fragment),i=d(),S(l.$$.fragment),r=d(),a=p("div"),S(u.$$.fragment),m=d(),f=p("div"),S(c.$$.fragment),g=d(),b=p("input"),Ct(b,O),x(f,"class","input-row"),x(a,"class","input-inner"),ie(a,"disabled",t[5]),x(e,"class",v="input input-math "+t[3]),ie(e,"has-error",t[7]),ie(e,"label-on-the-left",t[9]===!0||t[9]==="true")},m(D,L){s(D,e,L),E(n,e,null),q(e,i),E(l,e,null),q(e,r),q(e,a),E(u,a,null),q(a,m),q(a,f),E(c,f,null),q(f,g),q(f,b),b.autofocus&&b.focus(),t[19](b),ct(b,t[0]),t[21](e),w=!0,k||(_=[ye(b,"input",t[20]),ye(b,"input",t[16]),ye(b,"keydown",t[12]),ye(b,"change",t[13]),ye(b,"focus",t[17]),ye(b,"blur",t[18])],k=!0)},p(D,[L]){let T={};L&64&&(T.label=D[6]),L&1024&&(T.for=D[10]),n.$set(T);let A={};L&256&&(A.msg=D[8]),l.$set(A);let H={};L&128&&(H.msg=D[7]),u.$set(H),Ct(b,O=jt(M,[{type:"text"},{autocomplete:"off"},(!w||L&32)&&{disabled:D[5]},(!w||L&1024)&&{id:D[10]},L&16384&&D[14],(!w||L&128)&&{"aria-invalid":D[7]},(!w||L&128&&h!==(h=D[7]?D[11]:void 0))&&{"aria-errormessage":h},(!w||L&16)&&{"aria-required":D[4]}])),L&1&&b.value!==D[0]&&ct(b,D[0]),(!w||L&32)&&ie(a,"disabled",D[5]),(!w||L&8&&v!==(v="input input-math "+D[3]))&&x(e,"class",v),(!w||L&136)&&ie(e,"has-error",D[7]),(!w||L&520)&&ie(e,"label-on-the-left",D[9]===!0||D[9]==="true")},i(D){w||($(n.$$.fragment,D),$(l.$$.fragment,D),$(u.$$.fragment,D),$(c.$$.fragment,D),w=!0)},o(D){y(n.$$.fragment,D),y(l.$$.fragment,D),y(u.$$.fragment,D),y(c.$$.fragment,D),w=!1},d(D){D&&o(e),C(n),C(l),C(u),C(c),t[19](null),t[21](null),k=!1,Re(_)}}}var Nv=".";function Fv($$self,$$props,$$invalidate){let _id,omit_props_names=["class","id","required","disabled","value","label","error","info","labelOnTheLeft","element","inputElement"],$$restProps=kt($$props,omit_props_names),{class:className=""}=$$props,{id=""}=$$props,{required=void 0}=$$props,{disabled=!1}=$$props,{value=""}=$$props,{label=""}=$$props,{error=void 0}=$$props,{info=void 0}=$$props,{labelOnTheLeft=!1}=$$props,{element=void 0}=$$props,{inputElement=void 0}=$$props,errorMessageId=Xe(),dispatch=rt(),allowedKeys=["0","1","2","3","4","5","6","7","8","9","+","-","/","*","(",")","ArrowLeft","ArrowDown","ArrowUp","ArrowRight","Meta","Ctrl","Shift","Backspace","Delete","Tab","Enter","Escape"];function onkeydown(t){if(dispatch("keydown",t),t.key==="Enter"){let e=parseAmount(value);$$invalidate(0,value=isNaN(e)?"":e);return}allowedKeys.includes(t.key)||t.metaKey||t.ctrlKey||t.key!==Nv&&t.preventDefault()}function onchange(t){let e=parseAmount(value);$$invalidate(0,value=isNaN(e)?"":e),dispatch("change",t)}function parseAmount(amount){if(!amount)return"";if(amount=(""+amount).replace(/[\s,]/g,""),!/^[+\-\\*/()\d.]+$/i.test(amount))return 0;if(/[+\-\\*/.]+/i.test(amount))try{amount=eval(amount)}catch{amount=0}let num=parseFloat(amount);return num===1/0||isNaN(num)?0:n1(num)}function input_handler(t){Qe.call(this,$$self,t)}function focus_handler(t){Qe.call(this,$$self,t)}function blur_handler(t){Qe.call(this,$$self,t)}function input_binding(t){_e[t?"unshift":"push"](()=>{inputElement=t,$$invalidate(2,inputElement)})}function input_input_handler(){value=this.value,$$invalidate(0,value)}function div2_binding(t){_e[t?"unshift":"push"](()=>{element=t,$$invalidate(1,element)})}return $$self.$$set=t=>{$$props=tt(tt({},$$props),Zt(t)),$$invalidate(14,$$restProps=kt($$props,omit_props_names)),"class"in t&&$$invalidate(3,className=t.class),"id"in t&&$$invalidate(15,id=t.id),"required"in t&&$$invalidate(4,required=t.required),"disabled"in t&&$$invalidate(5,disabled=t.disabled),"value"in t&&$$invalidate(0,value=t.value),"label"in t&&$$invalidate(6,label=t.label),"error"in t&&$$invalidate(7,error=t.error),"info"in t&&$$invalidate(8,info=t.info),"labelOnTheLeft"in t&&$$invalidate(9,labelOnTheLeft=t.labelOnTheLeft),"element"in t&&$$invalidate(1,element=t.element),"inputElement"in t&&$$invalidate(2,inputElement=t.inputElement)},$$self.$$.update=()=>{$$invalidate(10,_id=id||$$restProps.name||Xe())},[value,element,inputElement,className,required,disabled,label,error,info,labelOnTheLeft,_id,errorMessageId,onkeydown,onchange,$$restProps,id,input_handler,focus_handler,blur_handler,input_binding,input_input_handler,div2_binding]}var mc=class extends fe{constructor(e){super(),de(this,e,Fv,Pv,me,{class:3,id:15,required:4,disabled:5,value:0,label:6,error:7,info:8,labelOnTheLeft:9,element:1,inputElement:2})}},Oo=mc;function qv(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v;n=new vt({props:{label:t[7],disabled:t[5],for:t[11]}}),l=new bt({props:{msg:t[9]}}),u=new $t({props:{id:t[12],msg:t[8]}});let w=[{type:"text"},{autocomplete:"off"},{name:t[4]},{disabled:t[5]},{id:t[11]},t[15],{"aria-invalid":t[8]},{"aria-errormessage":c=t[8]?t[12]:void 0},{"aria-required":t[6]}],k={};for(let _=0;_<w.length;_+=1)k=tt(k,w[_]);return{c(){e=p("div"),S(n.$$.fragment),i=d(),S(l.$$.fragment),r=d(),a=p("div"),S(u.$$.fragment),m=d(),f=p("input"),Ct(f,k),x(a,"class","input-inner"),x(e,"class",g="input input-number "+t[3]),ie(e,"has-error",t[8]),ie(e,"label-on-the-left",t[10]===!0||t[10]==="true")},m(_,M){s(_,e,M),E(n,e,null),q(e,i),E(l,e,null),q(e,r),q(e,a),E(u,a,null),q(a,m),q(a,f),f.autofocus&&f.focus(),t[21](f),ct(f,t[0]),t[23](e),b=!0,h||(v=[ye(f,"input",t[22]),ye(f,"keydown",t[13]),ye(f,"change",t[14]),ye(f,"input",t[18]),ye(f,"focus",t[19]),ye(f,"blur",t[20])],h=!0)},p(_,[M]){let O={};M&128&&(O.label=_[7]),M&32&&(O.disabled=_[5]),M&2048&&(O.for=_[11]),n.$set(O);let D={};M&512&&(D.msg=_[9]),l.$set(D);let L={};M&256&&(L.msg=_[8]),u.$set(L),Ct(f,k=jt(w,[{type:"text"},{autocomplete:"off"},(!b||M&16)&&{name:_[4]},(!b||M&32)&&{disabled:_[5]},(!b||M&2048)&&{id:_[11]},M&32768&&_[15],(!b||M&256)&&{"aria-invalid":_[8]},(!b||M&256&&c!==(c=_[8]?_[12]:void 0))&&{"aria-errormessage":c},(!b||M&64)&&{"aria-required":_[6]}])),M&1&&f.value!==_[0]&&ct(f,_[0]),(!b||M&8&&g!==(g="input input-number "+_[3]))&&x(e,"class",g),(!b||M&264)&&ie(e,"has-error",_[8]),(!b||M&1032)&&ie(e,"label-on-the-left",_[10]===!0||_[10]==="true")},i(_){b||($(n.$$.fragment,_),$(l.$$.fragment,_),$(u.$$.fragment,_),b=!0)},o(_){y(n.$$.fragment,_),y(l.$$.fragment,_),y(u.$$.fragment,_),b=!1},d(_){_&&o(e),C(n),C(l),C(u),t[21](null),t[23](null),h=!1,Re(v)}}}function Bv(t,e,n){let i,l=["class","id","name","disabled","required","value","label","error","info","separator","labelOnTheLeft","element","inputElement"],r=kt(e,l),{class:a=""}=e,{id:u=""}=e,{name:m=Xe()}=e,{disabled:f=void 0}=e,{required:c=void 0}=e,{value:g=""}=e,{label:b=""}=e,{error:h=void 0}=e,{info:v=void 0}=e,{separator:w="."}=e,{labelOnTheLeft:k=!1}=e,{element:_=void 0}=e,{inputElement:M=void 0}=e,O=rt(),D=Xe(),L=["0","1","2","3","4","5","6","7","8","9","ArrowLeft","ArrowDown","ArrowUp","ArrowRight","Meta","Ctrl","Shift","Backspace","Delete","Tab","Enter","Escape"];function T(G){O("keydown",{event:G,value:g})}function A(G){let F=G.key,z=""+g;if(L.includes(F)||F==="-"&&!z.includes("-")||F===w&&!z.includes(w))return T(G);G.preventDefault()}function H(){let G=(""+g).replace(w,"."),F=parseFloat(G);n(0,g=isNaN(F)?"":(""+F).replace(".",w)),O("change",{value:g})}function I(G){Qe.call(this,t,G)}function P(G){Qe.call(this,t,G)}function N(G){Qe.call(this,t,G)}function j(G){_e[G?"unshift":"push"](()=>{M=G,n(2,M)})}function K(){g=this.value,n(0,g)}function U(G){_e[G?"unshift":"push"](()=>{_=G,n(1,_)})}return t.$$set=G=>{e=tt(tt({},e),Zt(G)),n(15,r=kt(e,l)),"class"in G&&n(3,a=G.class),"id"in G&&n(16,u=G.id),"name"in G&&n(4,m=G.name),"disabled"in G&&n(5,f=G.disabled),"required"in G&&n(6,c=G.required),"value"in G&&n(0,g=G.value),"label"in G&&n(7,b=G.label),"error"in G&&n(8,h=G.error),"info"in G&&n(9,v=G.info),"separator"in G&&n(17,w=G.separator),"labelOnTheLeft"in G&&n(10,k=G.labelOnTheLeft),"element"in G&&n(1,_=G.element),"inputElement"in G&&n(2,M=G.inputElement)},t.$$.update=()=>{t.$$.dirty&65552&&n(11,i=u||m||Xe())},[g,_,M,a,m,f,c,b,h,v,k,i,D,A,H,r,u,w,I,P,N,j,K,U]}var dc=class extends fe{constructor(e){super(),de(this,e,Bv,qv,me,{class:3,id:16,name:4,disabled:5,required:6,value:0,label:7,error:8,info:9,separator:17,labelOnTheLeft:10,element:1,inputElement:2})}},oo=dc;function gb(t){let e,n,i,l,r,a,u,m,f,c,g,b;return{c(){e=p("div"),n=p("div"),i=p("div"),r=d(),a=p("div"),u=p("div"),m=p("h2"),f=ne(t[13]),c=d(),g=p("small"),x(i,"class",l="password-strength-progress "+t[16]),Pt(i,"width",t[14]+"%"),x(n,"class","password-strength"),x(n,"title",t[13]),x(e,"class","input-row"),x(u,"class",b="password-strength-info "+t[16]),x(a,"class","input-row")},m(h,v){s(h,e,v),q(e,n),q(n,i),s(h,r,v),s(h,a,v),q(a,u),q(u,m),q(m,f),q(u,c),q(u,g),g.innerHTML=t[15]},p(h,v){v[0]&65536&&l!==(l="password-strength-progress "+h[16])&&x(i,"class",l),v[0]&16384&&Pt(i,"width",h[14]+"%"),v[0]&8192&&x(n,"title",h[13]),v[0]&8192&&je(f,h[13]),v[0]&32768&&(g.innerHTML=h[15]),v[0]&65536&&b!==(b="password-strength-info "+h[16])&&x(u,"class",b)},d(h){h&&(o(e),o(r),o(a))}}}function Rv(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M;n=new vt({props:{label:t[7],disabled:t[5],for:t[17]}}),l=new bt({props:{msg:t[9]}}),u=new $t({props:{id:t[19],msg:t[8]}});let O=[{id:t[17]},{autocomplete:"off"},{type:t[18]},{value:t[0]},{disabled:t[5]},t[22],{"aria-invalid":t[8]},{"aria-errormessage":g=t[8]?t[19]:void 0},{"aria-required":t[4]}],D={};for(let T=0;T<O.length;T+=1)D=tt(D,O[T]);h=new De({props:{link:!0,icon:t[11]?"eye":"eyeOff",class:"input-password-button"}}),h.$on("click",t[21]);let L=t[6]&&t[12]&&t[0]&&gb(t);return{c(){e=p("div"),S(n.$$.fragment),i=d(),S(l.$$.fragment),r=d(),a=p("div"),S(u.$$.fragment),m=d(),f=p("div"),c=p("input"),b=d(),S(h.$$.fragment),v=d(),L&&L.c(),Ct(c,D),x(f,"class","input-row"),ie(f,"visible",t[11]),x(a,"class","input-inner"),ie(a,"disabled",t[5]),x(e,"class",w="input input-password "+t[3]),ie(e,"has-error",t[8]),ie(e,"visible",t[11]),ie(e,"label-on-the-left",t[10]===!0||t[10]==="true")},m(T,A){s(T,e,A),E(n,e,null),q(e,i),E(l,e,null),q(e,r),q(e,a),E(u,a,null),q(a,m),q(a,f),q(f,c),"value"in D&&(c.value=D.value),c.autofocus&&c.focus(),t[28](c),q(f,b),E(h,f,null),q(a,v),L&&L.m(a,null),t[29](e),k=!0,_||(M=[ye(c,"input",t[20]),ye(c,"keydown",t[24]),ye(c,"change",t[25]),ye(c,"focus",t[26]),ye(c,"blur",t[27])],_=!0)},p(T,A){let H={};A[0]&128&&(H.label=T[7]),A[0]&32&&(H.disabled=T[5]),A[0]&131072&&(H.for=T[17]),n.$set(H);let I={};A[0]&512&&(I.msg=T[9]),l.$set(I);let P={};A[0]&256&&(P.msg=T[8]),u.$set(P),Ct(c,D=jt(O,[(!k||A[0]&131072)&&{id:T[17]},{autocomplete:"off"},(!k||A[0]&262144)&&{type:T[18]},(!k||A[0]&1&&c.value!==T[0])&&{value:T[0]},(!k||A[0]&32)&&{disabled:T[5]},A[0]&4194304&&T[22],(!k||A[0]&256)&&{"aria-invalid":T[8]},(!k||A[0]&256&&g!==(g=T[8]?T[19]:void 0))&&{"aria-errormessage":g},(!k||A[0]&16)&&{"aria-required":T[4]}])),"value"in D&&(c.value=D.value);let N={};A[0]&2048&&(N.icon=T[11]?"eye":"eyeOff"),h.$set(N),(!k||A[0]&2048)&&ie(f,"visible",T[11]),T[6]&&T[12]&&T[0]?L?L.p(T,A):(L=gb(T),L.c(),L.m(a,null)):L&&(L.d(1),L=null),(!k||A[0]&32)&&ie(a,"disabled",T[5]),(!k||A[0]&8&&w!==(w="input input-password "+T[3]))&&x(e,"class",w),(!k||A[0]&264)&&ie(e,"has-error",T[8]),(!k||A[0]&2056)&&ie(e,"visible",T[11]),(!k||A[0]&1032)&&ie(e,"label-on-the-left",T[10]===!0||T[10]==="true")},i(T){k||($(n.$$.fragment,T),$(l.$$.fragment,T),$(u.$$.fragment,T),$(h.$$.fragment,T),k=!0)},o(T){y(n.$$.fragment,T),y(l.$$.fragment,T),y(u.$$.fragment,T),y(h.$$.fragment,T),k=!1},d(T){T&&o(e),C(n),C(l),C(u),t[28](null),C(h),L&&L.d(),t[29](null),_=!1,Re(M)}}}function jv(t,e,n){let i,l,r=["class","id","required","disabled","value","strength","label","error","info","labelOnTheLeft","element","inputElement"],a=kt(e,r),{class:u=""}=e,{id:m=""}=e,{required:f=void 0}=e,{disabled:c=void 0}=e,{value:g=""}=e,{strength:b=!1}=e,{label:h=""}=e,{error:v=void 0}=e,{info:w=void 0}=e,{labelOnTheLeft:k=!1}=e,{element:_=void 0}=e,{inputElement:M=void 0}=e,O=["Very Poor","Poor","Average","Safe","Excellent"],D=["danger","danger","warning","info","success"],L=rt(),T=Xe(),A=!1,H,I="",P=0,N="",j="";Nt(()=>{requestAnimationFrame(U)});function K(Z){n(0,g=Z.target.value),L("input",{event:Z,value:g})}function U(){n(12,H=window.zxcvbn)}function G(Z){if(b&&!H&&U(),!H||!Z||!b)return{score:0,info:""};let ge=H(Z),he=ge.feedback.warning,W=ge.feedback.suggestions,Y=[he,...W].filter(J=>J.length).join(".<br>");return{score:ge.score,text:Y}}function F(){n(11,A=!A),requestAnimationFrame(()=>_.querySelector("input").focus())}function z(Z){Qe.call(this,t,Z)}function V(Z){Qe.call(this,t,Z)}function Q(Z){Qe.call(this,t,Z)}function le(Z){Qe.call(this,t,Z)}function ee(Z){_e[Z?"unshift":"push"](()=>{M=Z,n(2,M)})}function X(Z){_e[Z?"unshift":"push"](()=>{_=Z,n(1,_)})}return t.$$set=Z=>{e=tt(tt({},e),Zt(Z)),n(22,a=kt(e,r)),"class"in Z&&n(3,u=Z.class),"id"in Z&&n(23,m=Z.id),"required"in Z&&n(4,f=Z.required),"disabled"in Z&&n(5,c=Z.disabled),"value"in Z&&n(0,g=Z.value),"strength"in Z&&n(6,b=Z.strength),"label"in Z&&n(7,h=Z.label),"error"in Z&&n(8,v=Z.error),"info"in Z&&n(9,w=Z.info),"labelOnTheLeft"in Z&&n(10,k=Z.labelOnTheLeft),"element"in Z&&n(1,_=Z.element),"inputElement"in Z&&n(2,M=Z.inputElement)},t.$$.update=()=>{if(t.$$.dirty[0]&2048&&n(18,i=A?"text":"password"),n(17,l=m||a.name||Xe()),t.$$.dirty[0]&1){let{score:Z,text:ge}=G(g);n(13,I=O[Z]),n(14,P=Z?Z*25:5),n(16,j=D[Z]),n(15,N=ge)}},[g,_,M,u,f,c,b,h,v,w,k,A,H,I,P,N,j,l,i,T,K,F,a,m,z,V,Q,le,ee,X]}var cc=class extends fe{constructor(e){super(),de(this,e,jv,Rv,me,{class:3,id:23,required:4,disabled:5,value:0,strength:6,label:7,error:8,info:9,labelOnTheLeft:10,element:1,inputElement:2},null,[-1,-1])}},ui=cc;function bb(t,e,n){let i=t.slice();return i[39]=e[n],i}function _b(t){let e,n;return e=new De({props:{link:!0,icon:t[12],tabindex:"-1","data-star":t[39],class:t[0]>=t[39]?"active":""}}),{c(){S(e.$$.fragment)},m(i,l){E(e,i,l),n=!0},p(i,l){let r={};l[0]&4096&&(r.icon=i[12]),l[0]&65536&&(r["data-star"]=i[39]),l[0]&65537&&(r.class=i[0]>=i[39]?"active":""),e.$set(r)},i(i){n||($(e.$$.fragment,i),n=!0)},o(i){y(e.$$.fragment,i),n=!1},d(i){C(e,i)}}}function zv(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M;n=new vt({props:{label:t[8],disabled:t[5],for:t[15]}}),l=new bt({props:{msg:t[10]}}),u=new $t({props:{id:t[17],msg:t[9]}});let O=Ye(t[16]),D=[];for(let T=0;T<O.length;T+=1)D[T]=_b(bb(t,O,T));let L=T=>y(D[T],1,1,()=>{D[T]=null});return g=new De({props:{link:!0,icon:"close",class:"btn-reset",disabled:t[0]===""}}),g.$on("click",t[19]),{c(){e=p("div"),S(n.$$.fragment),i=d(),S(l.$$.fragment),r=d(),a=p("div"),S(u.$$.fragment),m=d(),f=p("div");for(let T=0;T<D.length;T+=1)D[T].c();c=d(),S(g.$$.fragment),b=d(),h=p("input"),x(h,"type","hidden"),x(h,"name",t[4]),h.disabled=t[5],x(h,"id",t[15]),x(h,"aria-invalid",t[9]),x(h,"aria-errormessage",v=t[9]?t[17]:void 0),x(h,"aria-required",t[6]),x(f,"class","input-row"),x(a,"class","input-inner"),x(a,"tabindex","0"),x(e,"title",t[7]),x(e,"class",w="input input-rating "+t[3]),ie(e,"has-error",t[9]),ie(e,"label-on-the-left",t[11]===!0||t[11]==="true"),ie(e,"light",t[13])},m(T,A){s(T,e,A),E(n,e,null),q(e,i),E(l,e,null),q(e,r),q(e,a),E(u,a,null),q(a,m),q(a,f);for(let H=0;H<D.length;H+=1)D[H]&&D[H].m(f,null);q(f,c),E(g,f,null),q(f,b),q(f,h),t[26](h),ct(h,t[0]),t[28](a),t[29](e),k=!0,_||(M=[ye(h,"input",t[27]),ye(h,"input",t[23]),ye(h,"focus",t[24]),ye(h,"blur",t[25]),ye(a,"touchstart",t[20]),ye(a,"mousedown",t[20]),ye(a,"keydown",t[18])],_=!0)},p(T,A){let H={};A[0]&256&&(H.label=T[8]),A[0]&32&&(H.disabled=T[5]),A[0]&32768&&(H.for=T[15]),n.$set(H);let I={};A[0]&1024&&(I.msg=T[10]),l.$set(I);let P={};if(A[0]&512&&(P.msg=T[9]),u.$set(P),A[0]&69633){O=Ye(T[16]);let j;for(j=0;j<O.length;j+=1){let K=bb(T,O,j);D[j]?(D[j].p(K,A),$(D[j],1)):(D[j]=_b(K),D[j].c(),$(D[j],1),D[j].m(f,c))}for(We(),j=O.length;j<D.length;j+=1)L(j);Ve()}let N={};A[0]&1&&(N.disabled=T[0]===""),g.$set(N),(!k||A[0]&16)&&x(h,"name",T[4]),(!k||A[0]&32)&&(h.disabled=T[5]),(!k||A[0]&32768)&&x(h,"id",T[15]),(!k||A[0]&512)&&x(h,"aria-invalid",T[9]),(!k||A[0]&512&&v!==(v=T[9]?T[17]:void 0))&&x(h,"aria-errormessage",v),(!k||A[0]&64)&&x(h,"aria-required",T[6]),A[0]&1&&ct(h,T[0]),(!k||A[0]&128)&&x(e,"title",T[7]),(!k||A[0]&8&&w!==(w="input input-rating "+T[3]))&&x(e,"class",w),(!k||A[0]&520)&&ie(e,"has-error",T[9]),(!k||A[0]&2056)&&ie(e,"label-on-the-left",T[11]===!0||T[11]==="true"),(!k||A[0]&8200)&&ie(e,"light",T[13])},i(T){if(!k){$(n.$$.fragment,T),$(l.$$.fragment,T),$(u.$$.fragment,T);for(let A=0;A<O.length;A+=1)$(D[A]);$(g.$$.fragment,T),k=!0}},o(T){y(n.$$.fragment,T),y(l.$$.fragment,T),y(u.$$.fragment,T),D=D.filter(Boolean);for(let A=0;A<D.length;A+=1)y(D[A]);y(g.$$.fragment,T),k=!1},d(T){T&&o(e),C(n),C(l),C(u),St(D,T),C(g),t[26](null),t[28](null),t[29](null),_=!1,Re(M)}}}function Wv(t,e,n){let i,l,{class:r=""}=e,{id:a=""}=e,{name:u=Xe()}=e,{disabled:m=void 0}=e,{required:f=void 0}=e,{value:c=""}=e,{title:g=""}=e,{label:b=""}=e,{error:h=void 0}=e,{info:v=void 0}=e,{labelOnTheLeft:w=!1}=e,{max:k=5}=e,{icon:_="star"}=e,{light:M=void 0}=e,{element:O=void 0}=e,{inputElement:D=void 0}=e,L,T=0,A=rt(),H=Xe();function I(W){A("keydown",{event:W,value:c})}function P(W){if(W.target.closest(".btn-reset"))return;let Y=W.key,J=parseInt(c,10)||0;if(Y==="ArrowRight"?j(Math.min(J+1,k)):Y==="ArrowLeft"?j(Math.max(J-1,0)):Y==="Escape"&&j(),Y)return I(W);W.preventDefault()}function N(W){W.preventDefault(),W.stopPropagation(),j()}function j(W){if(typeof W<"u"&&W!==""){let Y=parseFloat(""+W);n(0,c=isNaN(Y)?"":""+Y)}else n(0,c="");O.querySelector(".input-inner").focus(),A("change",c)}function K(W){let Y=Oi(W),J=document.elementFromPoint(Y,T);J&&J.dataset&&j(J.dataset.star)}function U(W){W.preventDefault(),T=Yo(W),z()}function G(W){K(W)}function F(W){K(W),V()}function z(){document.addEventListener("mouseup",F),document.addEventListener("mousemove",G),document.addEventListener("touchend",F),document.addEventListener("touchmove",G)}function V(){document.removeEventListener("mouseup",F),document.removeEventListener("mousemove",G),document.removeEventListener("touchend",F),document.removeEventListener("touchmove",G)}function Q(W){Qe.call(this,t,W)}function le(W){Qe.call(this,t,W)}function ee(W){Qe.call(this,t,W)}function X(W){_e[W?"unshift":"push"](()=>{D=W,n(2,D)})}function Z(){c=this.value,n(0,c)}function ge(W){_e[W?"unshift":"push"](()=>{L=W,n(14,L)})}function he(W){_e[W?"unshift":"push"](()=>{O=W,n(1,O)})}return t.$$set=W=>{"class"in W&&n(3,r=W.class),"id"in W&&n(21,a=W.id),"name"in W&&n(4,u=W.name),"disabled"in W&&n(5,m=W.disabled),"required"in W&&n(6,f=W.required),"value"in W&&n(0,c=W.value),"title"in W&&n(7,g=W.title),"label"in W&&n(8,b=W.label),"error"in W&&n(9,h=W.error),"info"in W&&n(10,v=W.info),"labelOnTheLeft"in W&&n(11,w=W.labelOnTheLeft),"max"in W&&n(22,k=W.max),"icon"in W&&n(12,_=W.icon),"light"in W&&n(13,M=W.light),"element"in W&&n(1,O=W.element),"inputElement"in W&&n(2,D=W.inputElement)},t.$$.update=()=>{t.$$.dirty[0]&4194304&&n(16,i=new Array(+k).fill(0).map((W,Y)=>Y+1)),t.$$.dirty[0]&2097168&&n(15,l=a||u||Xe())},[c,O,D,r,u,m,f,g,b,h,v,w,_,M,L,l,i,H,P,N,U,a,k,Q,le,ee,X,Z,ge,he]}var pc=class extends fe{constructor(e){super(),de(this,e,Wv,zv,me,{class:3,id:21,name:4,disabled:5,required:6,value:0,title:7,label:8,error:9,info:10,labelOnTheLeft:11,max:22,icon:12,light:13,element:1,inputElement:2},null,[-1,-1])}},fi=pc;function Vv(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O;n=new vt({props:{label:t[6],disabled:t[5],for:t[10]}}),l=new bt({props:{msg:t[8]}}),u=new $t({props:{id:t[11],msg:t[7]}}),c=new zt({props:{name:"search"}});let D=[{id:t[10]},{autocomplete:"off"},{type:"search"},{disabled:t[5]},t[14],{"aria-invalid":t[7]},{"aria-errormessage":h=t[7]?t[11]:void 0},{"aria-required":t[4]}],L={};for(let T=0;T<D.length;T+=1)L=tt(L,D[T]);return w=new De({props:{link:!0,icon:"close",class:"input-search-button "+(t[0]!==""&&!t[5]?"visible":"")}}),w.$on("click",t[12]),{c(){e=p("div"),S(n.$$.fragment),i=d(),S(l.$$.fragment),r=d(),a=p("div"),S(u.$$.fragment),m=d(),f=p("div"),S(c.$$.fragment),g=d(),b=p("input"),v=d(),S(w.$$.fragment),Ct(b,L),x(f,"class","input-row"),x(a,"class","input-inner"),ie(a,"disabled",t[5]),x(e,"class",k="input input-search "+t[3]),ie(e,"has-error",t[7]),ie(e,"has-value",t[0]!==""),ie(e,"label-on-the-left",t[9]===!0||t[9]==="true")},m(T,A){s(T,e,A),E(n,e,null),q(e,i),E(l,e,null),q(e,r),q(e,a),E(u,a,null),q(a,m),q(a,f),E(c,f,null),q(f,g),q(f,b),b.autofocus&&b.focus(),t[20](b),ct(b,t[0]),q(f,v),E(w,f,null),t[22](e),_=!0,M||(O=[ye(b,"input",t[21]),ye(b,"input",t[16]),ye(b,"keydown",t[13]),ye(b,"change",t[17]),ye(b,"focus",t[18]),ye(b,"blur",t[19])],M=!0)},p(T,[A]){let H={};A&64&&(H.label=T[6]),A&32&&(H.disabled=T[5]),A&1024&&(H.for=T[10]),n.$set(H);let I={};A&256&&(I.msg=T[8]),l.$set(I);let P={};A&128&&(P.msg=T[7]),u.$set(P),Ct(b,L=jt(D,[(!_||A&1024)&&{id:T[10]},{autocomplete:"off"},{type:"search"},(!_||A&32)&&{disabled:T[5]},A&16384&&T[14],(!_||A&128)&&{"aria-invalid":T[7]},(!_||A&128&&h!==(h=T[7]?T[11]:void 0))&&{"aria-errormessage":h},(!_||A&16)&&{"aria-required":T[4]}])),A&1&&b.value!==T[0]&&ct(b,T[0]);let N={};A&33&&(N.class="input-search-button "+(T[0]!==""&&!T[5]?"visible":"")),w.$set(N),(!_||A&32)&&ie(a,"disabled",T[5]),(!_||A&8&&k!==(k="input input-search "+T[3]))&&x(e,"class",k),(!_||A&136)&&ie(e,"has-error",T[7]),(!_||A&9)&&ie(e,"has-value",T[0]!==""),(!_||A&520)&&ie(e,"label-on-the-left",T[9]===!0||T[9]==="true")},i(T){_||($(n.$$.fragment,T),$(l.$$.fragment,T),$(u.$$.fragment,T),$(c.$$.fragment,T),$(w.$$.fragment,T),_=!0)},o(T){y(n.$$.fragment,T),y(l.$$.fragment,T),y(u.$$.fragment,T),y(c.$$.fragment,T),y(w.$$.fragment,T),_=!1},d(T){T&&o(e),C(n),C(l),C(u),C(c),t[20](null),C(w),t[22](null),M=!1,Re(O)}}}function Uv(t,e,n){let i,l=["class","id","required","disabled","value","label","error","info","labelOnTheLeft","element","inputElement"],r=kt(e,l),{class:a=""}=e,{id:u=""}=e,{required:m=void 0}=e,{disabled:f=!1}=e,{value:c=""}=e,{label:g=""}=e,{error:b=void 0}=e,{info:h=void 0}=e,{labelOnTheLeft:v=!1}=e,{element:w=void 0}=e,{inputElement:k=void 0}=e,_=Xe();function M(){n(0,c="")}function O(N){N.key==="Escape"&&M()}function D(N){Qe.call(this,t,N)}function L(N){Qe.call(this,t,N)}function T(N){Qe.call(this,t,N)}function A(N){Qe.call(this,t,N)}function H(N){_e[N?"unshift":"push"](()=>{k=N,n(2,k)})}function I(){c=this.value,n(0,c)}function P(N){_e[N?"unshift":"push"](()=>{w=N,n(1,w)})}return t.$$set=N=>{e=tt(tt({},e),Zt(N)),n(14,r=kt(e,l)),"class"in N&&n(3,a=N.class),"id"in N&&n(15,u=N.id),"required"in N&&n(4,m=N.required),"disabled"in N&&n(5,f=N.disabled),"value"in N&&n(0,c=N.value),"label"in N&&n(6,g=N.label),"error"in N&&n(7,b=N.error),"info"in N&&n(8,h=N.info),"labelOnTheLeft"in N&&n(9,v=N.labelOnTheLeft),"element"in N&&n(1,w=N.element),"inputElement"in N&&n(2,k=N.inputElement)},t.$$.update=()=>{t.$$.dirty&32768&&n(10,i=u||name||Xe())},[c,w,k,a,m,f,g,b,h,v,i,_,M,O,r,u,D,L,T,A,H,I,P]}var hc=class extends fe{constructor(e){super(),de(this,e,Uv,Vv,me,{class:3,id:15,required:4,disabled:5,value:0,label:6,error:7,info:8,labelOnTheLeft:9,element:1,inputElement:2})}},so=hc;function Yv(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v;n=new vt({props:{label:t[6],disabled:t[5],for:t[10]}}),l=new bt({props:{msg:t[8]}}),u=new $t({props:{id:t[11],msg:t[7]}});let w=[{id:t[10]},{autocomplete:"off"},{type:"text"},{disabled:t[5]},t[12],{"aria-invalid":t[7]},{"aria-errormessage":c=t[7]?t[11]:void 0},{"aria-required":t[4]}],k={};for(let _=0;_<w.length;_+=1)k=tt(k,w[_]);return{c(){e=p("div"),S(n.$$.fragment),i=d(),S(l.$$.fragment),r=d(),a=p("div"),S(u.$$.fragment),m=d(),f=p("input"),Ct(f,k),x(a,"class","input-inner"),ie(a,"disabled",t[5]),x(e,"class",g="input input-text "+t[3]),ie(e,"has-error",t[7]),ie(e,"label-on-the-left",t[9]===!0||t[9]==="true")},m(_,M){s(_,e,M),E(n,e,null),q(e,i),E(l,e,null),q(e,r),q(e,a),E(u,a,null),q(a,m),q(a,f),f.autofocus&&f.focus(),t[19](f),ct(f,t[0]),t[21](e),b=!0,h||(v=[ye(f,"input",t[20]),ye(f,"input",t[14]),ye(f,"keydown",t[15]),ye(f,"change",t[16]),ye(f,"focus",t[17]),ye(f,"blur",t[18])],h=!0)},p(_,[M]){let O={};M&64&&(O.label=_[6]),M&32&&(O.disabled=_[5]),M&1024&&(O.for=_[10]),n.$set(O);let D={};M&256&&(D.msg=_[8]),l.$set(D);let L={};M&128&&(L.msg=_[7]),u.$set(L),Ct(f,k=jt(w,[(!b||M&1024)&&{id:_[10]},{autocomplete:"off"},{type:"text"},(!b||M&32)&&{disabled:_[5]},M&4096&&_[12],(!b||M&128)&&{"aria-invalid":_[7]},(!b||M&128&&c!==(c=_[7]?_[11]:void 0))&&{"aria-errormessage":c},(!b||M&16)&&{"aria-required":_[4]}])),M&1&&f.value!==_[0]&&ct(f,_[0]),(!b||M&32)&&ie(a,"disabled",_[5]),(!b||M&8&&g!==(g="input input-text "+_[3]))&&x(e,"class",g),(!b||M&136)&&ie(e,"has-error",_[7]),(!b||M&520)&&ie(e,"label-on-the-left",_[9]===!0||_[9]==="true")},i(_){b||($(n.$$.fragment,_),$(l.$$.fragment,_),$(u.$$.fragment,_),b=!0)},o(_){y(n.$$.fragment,_),y(l.$$.fragment,_),y(u.$$.fragment,_),b=!1},d(_){_&&o(e),C(n),C(l),C(u),t[19](null),t[21](null),h=!1,Re(v)}}}function Gv(t,e,n){let i,l=["class","id","required","disabled","value","label","error","info","labelOnTheLeft","element","inputElement"],r=kt(e,l),{class:a=""}=e,{id:u=""}=e,{required:m=void 0}=e,{disabled:f=!1}=e,{value:c=""}=e,{label:g=""}=e,{error:b=void 0}=e,{info:h=void 0}=e,{labelOnTheLeft:v=!1}=e,{element:w=void 0}=e,{inputElement:k=void 0}=e,_=Xe();function M(P){Qe.call(this,t,P)}function O(P){Qe.call(this,t,P)}function D(P){Qe.call(this,t,P)}function L(P){Qe.call(this,t,P)}function T(P){Qe.call(this,t,P)}function A(P){_e[P?"unshift":"push"](()=>{k=P,n(2,k)})}function H(){c=this.value,n(0,c)}function I(P){_e[P?"unshift":"push"](()=>{w=P,n(1,w)})}return t.$$set=P=>{e=tt(tt({},e),Zt(P)),n(12,r=kt(e,l)),"class"in P&&n(3,a=P.class),"id"in P&&n(13,u=P.id),"required"in P&&n(4,m=P.required),"disabled"in P&&n(5,f=P.disabled),"value"in P&&n(0,c=P.value),"label"in P&&n(6,g=P.label),"error"in P&&n(7,b=P.error),"info"in P&&n(8,h=P.info),"labelOnTheLeft"in P&&n(9,v=P.labelOnTheLeft),"element"in P&&n(1,w=P.element),"inputElement"in P&&n(2,k=P.inputElement)},t.$$.update=()=>{t.$$.dirty&8192&&n(10,i=u||name||Xe())},[c,w,k,a,m,f,g,b,h,v,i,_,r,u,M,O,D,L,T,A,H,I]}var gc=class extends fe{constructor(e){super(),de(this,e,Gv,Yv,me,{class:3,id:13,required:4,disabled:5,value:0,label:6,error:7,info:8,labelOnTheLeft:9,element:1,inputElement:2})}},Zn=gc;function vb(t){t&&(t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded","true"))}function $b(t){if(typeof t=="string"&&t!=="body"){let e=document.querySelectorAll(t);e&&e.length&&e.forEach(n=>n.setAttribute("aria-expanded","false"))}else t instanceof Element&&t.setAttribute("aria-expanded","false")}function wb(t){let e,n,i,l,r,a,u,m,f,c,g,b=t[18].default,h=Dt(b,t,t[17],null);return{c(){e=p("div"),n=p("div"),i=p("div"),l=d(),r=p("div"),h&&h.c(),a=d(),u=p("div"),x(i,"tabindex","0"),x(i,"class","focus-trap focus-trap-top"),x(r,"class","popover-content"),x(u,"tabindex","0"),x(u,"class","focus-trap focus-trap-bottom"),x(n,"class","popover"),x(e,"class",m="popover-plate popover-"+t[6]+" "+t[2]+" "+(t[3]?"hide-tip":"")),ie(e,"opening",t[5])},m(v,w){s(v,e,w),q(e,n),q(n,i),q(n,l),q(n,r),h&&h.m(r,null),t[19](r),q(n,a),q(n,u),t[20](e),f=!0,c||(g=[ye(i,"focus",t[8]),ye(u,"focus",t[7])],c=!0)},p(v,w){h&&h.p&&(!f||w[0]&131072)&&It(h,b,v,v[17],f?At(b,v[17],w,null):Ot(v[17]),null),(!f||w[0]&76&&m!==(m="popover-plate popover-"+v[6]+" "+v[2]+" "+(v[3]?"hide-tip":"")))&&x(e,"class",m),(!f||w[0]&108)&&ie(e,"opening",v[5])},i(v){f||($(h,v),f=!0)},o(v){y(h,v),f=!1},d(v){v&&o(e),h&&h.d(v),t[19](null),t[20](null),c=!1,Re(g)}}}function Kv(t){let e,n,i=t[4]&&wb(t);return{c(){i&&i.c(),e=Tt()},m(l,r){i&&i.m(l,r),s(l,e,r),n=!0},p(l,r){l[4]?i?(i.p(l,r),r[0]&16&&$(i,1)):(i=wb(l),i.c(),$(i,1),i.m(e.parentNode,e)):i&&(We(),y(i,1,1,()=>{i=null}),Ve())},i(l){n||($(i),n=!0)},o(l){y(i),n=!1},d(l){l&&o(e),i&&i.d(l)}}}function Xv(t,e,n){let{$$slots:i={},$$scope:l}=e,r=rt(),{class:a=""}=e,{offset:u=2}=e,{element:m=void 0}=e,{contentEl:f=void 0}=e,{position:c="bottom"}=e,{hideTip:g=!1}=e,{dontHideOnTargetClick:b=!1}=e,{setMinWidthToTarget:h=!1}=e,v,w=!1,k=!1,_=!1,M=!1,O=c,D=new MutationObserver(L);function L(){w&&n(6,O=xi({element:m,target:v,alignH:"center",alignV:c,offsetV:+u,setMinWidthToTarget:h}))}let T=()=>w;function A(ee){return _?Promise.resolve():w?H():(n(4,w=!0),n(5,k=!0),ee&&ee.detail&&ee.detail instanceof Event&&(ee=ee.detail),ee instanceof Event&&(v=ee&&ee.target),ee instanceof HTMLElement&&(v=ee),v&&vb(v),new Promise(X=>requestAnimationFrame(()=>{m&&m.parentElement!==document.body&&document.body.appendChild(m),L(),I(),z(),requestAnimationFrame(()=>{L(),n(5,k=!1)}),r("open",{event:ee,target:v}),X()})))}function H(){return w?(v&&v.focus(),n(4,w=!1),_=!0,$b(v),new Promise(ee=>requestAnimationFrame(()=>{V(),ee(),r("close",{target:v}),setTimeout(()=>_=!1,300)}))):Promise.resolve()}function I(){let ee=N().shift(),X=N().pop();!ee&&!X&&(f.setAttribute("tabindex",0),ee=f),ee&&ee.focus()}function P(){let ee=N().shift(),X=N().pop();!ee&&!X&&(f.setAttribute("tabindex",0),X=f),X&&X.focus()}function N(){return f?Array.from(f.querySelectorAll(Xi)):[]}let j=ya(L,50),K=Mo(L,50);function U(){j(),K()}function G(ee){m&&(m.contains(ee.target)||b&&v&&(v===ee.target||v.contains(ee.target))||H())}function F(ee){let X=m.contains(document.activeElement);if(ee.key==="Tab"){ee.stopPropagation(),X||I();return}if(ee.key==="Escape")return ee.stopPropagation(),H()}function z(){M||(document.addEventListener("click",G,!0),document.addEventListener("keydown",F,!0),window.addEventListener("resize",U),window.addEventListener("scroll",U,!0),D.observe(m,{attributes:!1,childList:!0,subtree:!0}),M=!0)}function V(){document.removeEventListener("click",G,!0),document.removeEventListener("keydown",F,!0),window.removeEventListener("resize",U),window.removeEventListener("scroll",U,!0),D.disconnect(),M=!1}function Q(ee){_e[ee?"unshift":"push"](()=>{f=ee,n(1,f)})}function le(ee){_e[ee?"unshift":"push"](()=>{m=ee,n(0,m)})}return t.$$set=ee=>{"class"in ee&&n(2,a=ee.class),"offset"in ee&&n(9,u=ee.offset),"element"in ee&&n(0,m=ee.element),"contentEl"in ee&&n(1,f=ee.contentEl),"position"in ee&&n(10,c=ee.position),"hideTip"in ee&&n(3,g=ee.hideTip),"dontHideOnTargetClick"in ee&&n(11,b=ee.dontHideOnTargetClick),"setMinWidthToTarget"in ee&&n(12,h=ee.setMinWidthToTarget),"$$scope"in ee&&n(17,l=ee.$$scope)},[m,f,a,g,w,k,O,I,P,u,c,b,h,L,T,A,H,l,i,Q,le]}var bc=class extends fe{constructor(e){super(),de(this,e,Xv,Kv,me,{class:2,offset:9,element:0,contentEl:1,position:10,hideTip:3,dontHideOnTargetClick:11,setMinWidthToTarget:12,updatePosition:13,isOpened:14,open:15,close:16},null,[-1,-1])}get class(){return this.$$.ctx[2]}set class(e){this.$$set({class:e}),Mt()}get offset(){return this.$$.ctx[9]}set offset(e){this.$$set({offset:e}),Mt()}get element(){return this.$$.ctx[0]}set element(e){this.$$set({element:e}),Mt()}get contentEl(){return this.$$.ctx[1]}set contentEl(e){this.$$set({contentEl:e}),Mt()}get position(){return this.$$.ctx[10]}set position(e){this.$$set({position:e}),Mt()}get hideTip(){return this.$$.ctx[3]}set hideTip(e){this.$$set({hideTip:e}),Mt()}get dontHideOnTargetClick(){return this.$$.ctx[11]}set dontHideOnTargetClick(e){this.$$set({dontHideOnTargetClick:e}),Mt()}get setMinWidthToTarget(){return this.$$.ctx[12]}set setMinWidthToTarget(e){this.$$set({setMinWidthToTarget:e}),Mt()}get updatePosition(){return this.$$.ctx[13]}get isOpened(){return this.$$.ctx[14]}get open(){return this.$$.ctx[15]}get close(){return this.$$.ctx[16]}},Ti=bc;function yb(t){let e,n;return e=new zt({props:{name:t[3]}}),{c(){S(e.$$.fragment)},m(i,l){E(e,i,l),n=!0},p(i,l){let r={};l&8&&(r.name=i[3]),e.$set(r)},i(i){n||($(e.$$.fragment,i),n=!0)},o(i){y(e.$$.fragment,i),n=!1},d(i){C(e,i)}}}function Zv(t){let e,n,i,l,r,a,u,m,f,c,g=t[3]&&yb(t),b=t[11].default,h=Dt(b,t,t[10],null);return{c(){e=p("div"),g&&g.c(),n=d(),i=p("div"),h&&h.c(),x(i,"class","ui-tag-label"),x(e,"class",l="ui-tag "+t[1]+" "+t[7]),x(e,"style",r=t[4]?`background-color: ${t[4]};`:""),x(e,"role","button"),x(e,"tabindex",a=t[5]||!t[6]?void 0:0),e.inert=u=t[5]||!t[6],ie(e,"round",t[2]),ie(e,"dark",t[4]&&Go(t[4])),ie(e,"light",t[4]&&!Go(t[4])),ie(e,"disabled",t[5]),ie(e,"clickable",t[6])},m(v,w){s(v,e,w),g&&g.m(e,null),q(e,n),q(e,i),h&&h.m(i,null),t[12](e),m=!0,f||(c=[ye(e,"keydown",t[9]),ye(e,"click",t[8])],f=!0)},p(v,[w]){v[3]?g?(g.p(v,w),w&8&&$(g,1)):(g=yb(v),g.c(),$(g,1),g.m(e,n)):g&&(We(),y(g,1,1,()=>{g=null}),Ve()),h&&h.p&&(!m||w&1024)&&It(h,b,v,v[10],m?At(b,v[10],w,null):Ot(v[10]),null),(!m||w&130&&l!==(l="ui-tag "+v[1]+" "+v[7]))&&x(e,"class",l),(!m||w&16&&r!==(r=v[4]?`background-color: ${v[4]};`:""))&&x(e,"style",r),(!m||w&96&&a!==(a=v[5]||!v[6]?void 0:0))&&x(e,"tabindex",a),(!m||w&96&&u!==(u=v[5]||!v[6]))&&(e.inert=u),(!m||w&134)&&ie(e,"round",v[2]),(!m||w&146)&&ie(e,"dark",v[4]&&Go(v[4])),(!m||w&146)&&ie(e,"light",v[4]&&!Go(v[4])),(!m||w&162)&&ie(e,"disabled",v[5]),(!m||w&194)&&ie(e,"clickable",v[6])},i(v){m||($(g),$(h,v),m=!0)},o(v){y(g),y(h,v),m=!1},d(v){v&&o(e),g&&g.d(),h&&h.d(v),t[12](null),f=!1,Re(c)}}}function Jv(t,e,n){let i,{$$slots:l={},$$scope:r}=e,a=rt(),{class:u=""}=e,{round:m=!1}=e,{icon:f=void 0}=e,{color:c=void 0}=e,{element:g=void 0}=e,{disabled:b=!1}=e,{clickable:h=!1}=e;function v(_){a("click",{target:g,originalEvent:_})}function w(_){(_.key==="Enter"||_.key===" ")&&v(_)}function k(_){_e[_?"unshift":"push"](()=>{g=_,n(0,g)})}return t.$$set=_=>{"class"in _&&n(1,u=_.class),"round"in _&&n(2,m=_.round),"icon"in _&&n(3,f=_.icon),"color"in _&&n(4,c=_.color),"element"in _&&n(0,g=_.element),"disabled"in _&&n(5,b=_.disabled),"clickable"in _&&n(6,h=_.clickable),"$$scope"in _&&n(10,r=_.$$scope)},t.$$.update=()=>{t.$$.dirty&16&&n(7,i=["info","warning","danger","success"].includes(c)?c:"")},[g,u,m,f,c,b,h,i,v,w,r,l,k]}var _c=class extends fe{constructor(e){super(),de(this,e,Jv,Zv,me,{class:1,round:2,icon:3,color:4,element:0,disabled:5,clickable:6})}},cn=_c;function kb(t,e,n){let i=t.slice();return i[41]=e[n],i}function Tb(t,e,n){let i=t.slice();return i[41]=e[n],i}function Qv(t){let e=t[41]+"",n;return{c(){n=ne(e)},m(i,l){s(i,n,l)},p(i,l){l[0]&65536&&e!==(e=i[41]+"")&&je(n,e)},d(i){i&&o(n)}}}function Mb(t){let e,n;function i(...l){return t[27](t[41],...l)}return e=new cn({props:{icon:"close",clickable:!0,$$slots:{default:[Qv]},$$scope:{ctx:t}}}),e.$on("click",i),{c(){S(e.$$.fragment)},m(l,r){E(e,l,r),n=!0},p(l,r){t=l;let a={};r[0]&65536|r[1]&32768&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(l){n||($(e.$$.fragment,l),n=!0)},o(l){y(e.$$.fragment,l),n=!1},d(l){C(e,l)}}}function e$(t){let e=t[41].text+"",n;return{c(){n=ne(e)},m(i,l){s(i,n,l)},p(i,l){l[0]&32768&&e!==(e=i[41].text+"")&&je(n,e)},d(i){i&&o(n)}}}function Eb(t,e){let n,i,l;function r(){return e[32](e[41])}return i=new cn({props:{clickable:!0,icon:"add",disabled:e[41].disabled,$$slots:{default:[e$]},$$scope:{ctx:e}}}),i.$on("click",r),{key:t,first:null,c(){n=Tt(),S(i.$$.fragment),this.first=n},m(a,u){s(a,n,u),E(i,a,u),l=!0},p(a,u){e=a;let m={};u[0]&32768&&(m.disabled=e[41].disabled),u[0]&32768|u[1]&32768&&(m.$$scope={dirty:u,ctx:e}),i.$set(m)},i(a){l||($(i.$$.fragment,a),l=!0)},o(a){y(i.$$.fragment,a),l=!1},d(a){a&&o(n),C(i,a)}}}function t$(t){let e,n=[],i=new Map,l,r,a,u,m,f,c,g,b,h=Ye(t[15]),v=_=>_[41].text;for(let _=0;_<h.length;_+=1){let M=kb(t,h,_),O=v(M);i.set(O,n[_]=Eb(O,M))}function w(_){t[33](_)}let k={};return t[13]!==void 0&&(k.value=t[13]),a=new Zn({props:k}),_e.push(()=>Ge(a,"value",w)),f=new De({props:{submit:!0,link:!0,icon:"add"}}),{c(){e=p("div");for(let _=0;_<n.length;_+=1)n[_].c();l=d(),r=p("form"),S(a.$$.fragment),m=d(),S(f.$$.fragment),x(e,"class","input-tag-list-tags"),x(r,"class","input-tag-list-add-row")},m(_,M){s(_,e,M);for(let O=0;O<n.length;O+=1)n[O]&&n[O].m(e,null);s(_,l,M),s(_,r,M),E(a,r,null),q(r,m),E(f,r,null),c=!0,g||(b=ye(r,"submit",Un(t[24])),g=!0)},p(_,M){M[0]&4227072&&(h=Ye(_[15]),We(),n=li(n,M,v,1,_,h,i,e,Wo,Eb,null,kb),Ve());let O={};!u&&M[0]&8192&&(u=!0,O.value=_[13],Ue(()=>u=!1)),a.$set(O)},i(_){if(!c){for(let M=0;M<h.length;M+=1)$(n[M]);$(a.$$.fragment,_),$(f.$$.fragment,_),c=!0}},o(_){for(let M=0;M<n.length;M+=1)y(n[M]);y(a.$$.fragment,_),y(f.$$.fragment,_),c=!1},d(_){_&&(o(e),o(l),o(r));for(let M=0;M<n.length;M+=1)n[M].d();C(a),C(f),g=!1,b()}}}function n$(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O,D;n=new vt({props:{label:t[9],disabled:t[7],for:t[17]}}),l=new bt({props:{msg:t[11]}}),u=new $t({props:{id:t[18],msg:t[10]}}),c=new zt({props:{name:"tag"}});let L=Ye(t[16]),T=[];for(let P=0;P<L.length;P+=1)T[P]=Mb(Tb(t,L,P));let A=P=>y(T[P],1,1,()=>{T[P]=null});function H(P){t[34](P)}let I={hideTip:!0,dontHideOnTargetClick:!0,setMinWidthToTarget:!0,class:"input-tag-popover",$$slots:{default:[t$]},$$scope:{ctx:t}};return t[4]!==void 0&&(I.element=t[4]),k=new Ti({props:I}),_e.push(()=>Ge(k,"element",H)),t[35](k),k.$on("close",t[20]),{c(){e=p("div"),S(n.$$.fragment),i=d(),S(l.$$.fragment),r=d(),a=p("div"),S(u.$$.fragment),m=d(),f=p("div"),S(c.$$.fragment),g=d();for(let P=0;P<T.length;P+=1)T[P].c();b=d(),h=p("input"),w=d(),S(k.$$.fragment),x(h,"name",t[6]),h.disabled=t[7],x(h,"id",t[17]),x(h,"type","hidden"),x(f,"class","input-row"),x(a,"class","input-inner"),a.inert=t[7],x(a,"tabindex","0"),ie(a,"disabled",t[7]),x(e,"title",t[8]),x(e,"class",v="input input-tag "+t[5]),ie(e,"has-error",t[10]),ie(e,"has-value",t[0]!==""),ie(e,"label-on-the-left",t[12]===!0||t[12]==="true")},m(P,N){s(P,e,N),E(n,e,null),q(e,i),E(l,e,null),q(e,r),q(e,a),E(u,a,null),q(a,m),q(a,f),E(c,f,null),q(f,g);for(let j=0;j<T.length;j+=1)T[j]&&T[j].m(f,null);q(f,b),q(f,h),ct(h,t[0]),t[29](h),t[30](a),t[31](e),s(P,w,N),E(k,P,N),M=!0,O||(D=[ye(h,"input",t[28]),ye(a,"keydown",t[21]),ye(a,"click",t[19])],O=!0)},p(P,N){let j={};N[0]&512&&(j.label=P[9]),N[0]&128&&(j.disabled=P[7]),N[0]&131072&&(j.for=P[17]),n.$set(j);let K={};N[0]&2048&&(K.msg=P[11]),l.$set(K);let U={};if(N[0]&1024&&(U.msg=P[10]),u.$set(U),N[0]&8454144){L=Ye(P[16]);let F;for(F=0;F<L.length;F+=1){let z=Tb(P,L,F);T[F]?(T[F].p(z,N),$(T[F],1)):(T[F]=Mb(z),T[F].c(),$(T[F],1),T[F].m(f,b))}for(We(),F=L.length;F<T.length;F+=1)A(F);Ve()}(!M||N[0]&64)&&x(h,"name",P[6]),(!M||N[0]&128)&&(h.disabled=P[7]),(!M||N[0]&131072)&&x(h,"id",P[17]),N[0]&1&&ct(h,P[0]),(!M||N[0]&128)&&(a.inert=P[7]),(!M||N[0]&128)&&ie(a,"disabled",P[7]),(!M||N[0]&256)&&x(e,"title",P[8]),(!M||N[0]&32&&v!==(v="input input-tag "+P[5]))&&x(e,"class",v),(!M||N[0]&1056)&&ie(e,"has-error",P[10]),(!M||N[0]&33)&&ie(e,"has-value",P[0]!==""),(!M||N[0]&4128)&&ie(e,"label-on-the-left",P[12]===!0||P[12]==="true");let G={};N[0]&40960|N[1]&32768&&(G.$$scope={dirty:N,ctx:P}),!_&&N[0]&16&&(_=!0,G.element=P[4],Ue(()=>_=!1)),k.$set(G)},i(P){if(!M){$(n.$$.fragment,P),$(l.$$.fragment,P),$(u.$$.fragment,P),$(c.$$.fragment,P);for(let N=0;N<L.length;N+=1)$(T[N]);$(k.$$.fragment,P),M=!0}},o(P){y(n.$$.fragment,P),y(l.$$.fragment,P),y(u.$$.fragment,P),y(c.$$.fragment,P),T=T.filter(Boolean);for(let N=0;N<T.length;N+=1)y(T[N]);y(k.$$.fragment,P),M=!1},d(P){P&&(o(e),o(w)),C(n),C(l),C(u),C(c),St(T,P),t[29](null),t[30](null),t[31](null),t[35](null),C(k,P),O=!1,Re(D)}}}function xo(t){return t.split(/[, ;]/).map(e=>e.trim()).filter(e=>e!=="")}function i$(t,e,n){let i,l,{class:r=""}=e,{id:a=""}=e,{name:u=""}=e,{disabled:m=!1}=e,{title:f=!1}=e,{label:c=""}=e,{error:g=void 0}=e,{info:b=void 0}=e,{labelOnTheLeft:h=!1}=e,{value:v=""}=e,{tags:w=[]}=e,{element:k=void 0}=e,{inputElement:_=void 0}=e,{boxElement:M=void 0}=e,{listElement:O=void 0}=e,D=rt(),L=Xe(),T="",A=!1,H,I=[];kd(P);function P(){let J=xo(v);n(15,I=w.map(pe=>({text:pe,disabled:J.includes(pe)})))}function N(){if(!A)return H.open(M).then(()=>A=H.isOpened())}function j(){A=!1}function K(){requestAnimationFrame(H.updatePosition)}function U(J){if(J.key==="Enter")return N();if(J.key==="ArrowDown")return J.preventDefault(),N().then(()=>{O.querySelector(".ui-tag").focus()})}function G(J){n(0,v=[...new Set(J)].join(", ")),K(),D("change",{value:v})}function F(J){let pe=xo(v);pe.push(J),G(pe)}function z(J,pe){pe&&pe.detail&&pe.detail.originalEvent&&pe.detail.originalEvent.stopPropagation();let we=xo(v).filter(ve=>ve!==J);requestAnimationFrame(()=>G(we))}function V(){let J=xo(v),pe=xo(T);n(13,T=""),requestAnimationFrame(()=>G([...J,...pe]))}let Q=(J,pe)=>z(J,pe);function le(){v=this.value,n(0,v)}function ee(J){_e[J?"unshift":"push"](()=>{_=J,n(2,_)})}function X(J){_e[J?"unshift":"push"](()=>{M=J,n(3,M)})}function Z(J){_e[J?"unshift":"push"](()=>{k=J,n(1,k)})}let ge=J=>F(J.text);function he(J){T=J,n(13,T)}function W(J){O=J,n(4,O)}function Y(J){_e[J?"unshift":"push"](()=>{H=J,n(14,H)})}return t.$$set=J=>{"class"in J&&n(5,r=J.class),"id"in J&&n(25,a=J.id),"name"in J&&n(6,u=J.name),"disabled"in J&&n(7,m=J.disabled),"title"in J&&n(8,f=J.title),"label"in J&&n(9,c=J.label),"error"in J&&n(10,g=J.error),"info"in J&&n(11,b=J.info),"labelOnTheLeft"in J&&n(12,h=J.labelOnTheLeft),"value"in J&&n(0,v=J.value),"tags"in J&&n(26,w=J.tags),"element"in J&&n(1,k=J.element),"inputElement"in J&&n(2,_=J.inputElement),"boxElement"in J&&n(3,M=J.boxElement),"listElement"in J&&n(4,O=J.listElement)},t.$$.update=()=>{t.$$.dirty[0]&33554496&&n(17,i=a||u||Xe()),t.$$.dirty[0]&1&&n(16,l=xo(v))},[v,k,_,M,O,r,u,m,f,c,g,b,h,T,H,I,l,i,L,N,j,U,F,z,V,a,w,Q,le,ee,X,Z,ge,he,W,Y]}var vc=class extends fe{constructor(e){super(),de(this,e,i$,n$,me,{class:5,id:25,name:6,disabled:7,title:8,label:9,error:10,info:11,labelOnTheLeft:12,value:0,tags:26,element:1,inputElement:2,boxElement:3,listElement:4},null,[-1,-1])}},lo=vc;function o$(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_;n=new vt({props:{label:t[6],disabled:t[5],for:t[10]}}),l=new bt({props:{msg:t[8]}}),u=new $t({props:{id:t[11],msg:t[7]}}),c=new zt({props:{name:"clock"}});let M=[{id:t[10]},{autocomplete:"off"},{type:"time"},{disabled:t[5]},t[12],{"aria-invalid":t[7]},{"aria-errormessage":h=t[7]?t[11]:void 0},{"aria-required":t[4]}],O={};for(let D=0;D<M.length;D+=1)O=tt(O,M[D]);return{c(){e=p("div"),S(n.$$.fragment),i=d(),S(l.$$.fragment),r=d(),a=p("div"),S(u.$$.fragment),m=d(),f=p("div"),S(c.$$.fragment),g=d(),b=p("input"),Ct(b,O),x(f,"class","input-row"),x(a,"class","input-inner"),ie(a,"disabled",t[5]),x(e,"class",v="input input-time "+t[3]),ie(e,"has-error",t[7]),ie(e,"has-value",t[0]!==""),ie(e,"label-on-the-left",t[9]===!0||t[9]==="true")},m(D,L){s(D,e,L),E(n,e,null),q(e,i),E(l,e,null),q(e,r),q(e,a),E(u,a,null),q(a,m),q(a,f),E(c,f,null),q(f,g),q(f,b),b.autofocus&&b.focus(),t[18](b),ct(b,t[0]),t[20](e),w=!0,k||(_=[ye(b,"input",t[19]),ye(b,"input",t[14]),ye(b,"change",t[15]),ye(b,"focus",t[16]),ye(b,"blur",t[17])],k=!0)},p(D,[L]){let T={};L&64&&(T.label=D[6]),L&32&&(T.disabled=D[5]),L&1024&&(T.for=D[10]),n.$set(T);let A={};L&256&&(A.msg=D[8]),l.$set(A);let H={};L&128&&(H.msg=D[7]),u.$set(H),Ct(b,O=jt(M,[(!w||L&1024)&&{id:D[10]},{autocomplete:"off"},{type:"time"},(!w||L&32)&&{disabled:D[5]},L&4096&&D[12],(!w||L&128)&&{"aria-invalid":D[7]},(!w||L&128&&h!==(h=D[7]?D[11]:void 0))&&{"aria-errormessage":h},(!w||L&16)&&{"aria-required":D[4]}])),L&1&&ct(b,D[0]),(!w||L&32)&&ie(a,"disabled",D[5]),(!w||L&8&&v!==(v="input input-time "+D[3]))&&x(e,"class",v),(!w||L&136)&&ie(e,"has-error",D[7]),(!w||L&9)&&ie(e,"has-value",D[0]!==""),(!w||L&520)&&ie(e,"label-on-the-left",D[9]===!0||D[9]==="true")},i(D){w||($(n.$$.fragment,D),$(l.$$.fragment,D),$(u.$$.fragment,D),$(c.$$.fragment,D),w=!0)},o(D){y(n.$$.fragment,D),y(l.$$.fragment,D),y(u.$$.fragment,D),y(c.$$.fragment,D),w=!1},d(D){D&&o(e),C(n),C(l),C(u),C(c),t[18](null),t[20](null),k=!1,Re(_)}}}function s$(t,e,n){let i,l=["class","id","required","disabled","value","label","error","info","labelOnTheLeft","element","inputElement"],r=kt(e,l),{class:a=""}=e,{id:u=""}=e,{required:m=void 0}=e,{disabled:f=!1}=e,{value:c=""}=e,{label:g=""}=e,{error:b=void 0}=e,{info:h=void 0}=e,{labelOnTheLeft:v=!1}=e,{element:w=void 0}=e,{inputElement:k=void 0}=e,_=Xe();function M(I){Qe.call(this,t,I)}function O(I){Qe.call(this,t,I)}function D(I){Qe.call(this,t,I)}function L(I){Qe.call(this,t,I)}function T(I){_e[I?"unshift":"push"](()=>{k=I,n(2,k)})}function A(){c=this.value,n(0,c)}function H(I){_e[I?"unshift":"push"](()=>{w=I,n(1,w)})}return t.$$set=I=>{e=tt(tt({},e),Zt(I)),n(12,r=kt(e,l)),"class"in I&&n(3,a=I.class),"id"in I&&n(13,u=I.id),"required"in I&&n(4,m=I.required),"disabled"in I&&n(5,f=I.disabled),"value"in I&&n(0,c=I.value),"label"in I&&n(6,g=I.label),"error"in I&&n(7,b=I.error),"info"in I&&n(8,h=I.info),"labelOnTheLeft"in I&&n(9,v=I.labelOnTheLeft),"element"in I&&n(1,w=I.element),"inputElement"in I&&n(2,k=I.inputElement)},t.$$.update=()=>{t.$$.dirty&8192&&n(10,i=u||name||Xe())},[c,w,k,a,m,f,g,b,h,v,i,_,r,u,M,O,D,L,T,A,H]}var $c=class extends fe{constructor(e){super(),de(this,e,s$,o$,me,{class:3,id:13,required:4,disabled:5,value:0,label:6,error:7,info:8,labelOnTheLeft:9,element:1,inputElement:2})}},Ho=$c;function Cb(t,e,n){let i=t.slice();return i[19]=e[n],i}function Sb(t,e){let n,i,l,r,a,u,m,f,c,g,b,h;function v(...w){return e[16](e[19],...w)}return f=new vt({props:{disabled:e[7]||e[19].disabled,for:e[19].id,label:e[19].name}}),{key:t,first:null,c(){n=p("div"),i=p("input"),m=d(),S(f.$$.fragment),c=d(),x(i,"type","radio"),x(i,"id",l=e[19].id),x(i,"name",e[4]),i.value=r=e[19].value,i.checked=a=e[19].value===e[0],i.disabled=u=e[7]||e[19].disabled,x(n,"class","radio-item"),ie(n,"disabled",e[7]||e[19].disabled),this.first=n},m(w,k){s(w,n,k),q(n,i),q(n,m),E(f,n,null),q(n,c),g=!0,b||(h=[ye(i,"change",v),ye(n,"touchstart",Lb,!0),ye(n,"mousedown",Lb,!0)],b=!0)},p(w,k){e=w,(!g||k&2048&&l!==(l=e[19].id))&&x(i,"id",l),(!g||k&16)&&x(i,"name",e[4]),(!g||k&2048&&r!==(r=e[19].value))&&(i.value=r),(!g||k&2049&&a!==(a=e[19].value===e[0]))&&(i.checked=a),(!g||k&2176&&u!==(u=e[7]||e[19].disabled))&&(i.disabled=u);let _={};k&2176&&(_.disabled=e[7]||e[19].disabled),k&2048&&(_.for=e[19].id),k&2048&&(_.label=e[19].name),f.$set(_),(!g||k&2176)&&ie(n,"disabled",e[7]||e[19].disabled)},i(w){g||($(f.$$.fragment,w),g=!0)},o(w){y(f.$$.fragment,w),g=!1},d(w){w&&o(n),C(f),b=!1,Re(h)}}}function l$(t){let e,n,i,l,r,a,u,m,f,c=[],g=new Map,b,h;n=new vt({props:{label:t[6],disabled:t[7],for:t[12]}}),l=new bt({props:{msg:t[9]}}),u=new $t({props:{id:t[13],msg:t[8]}});let v=Ye(t[11]),w=k=>k[19].id;for(let k=0;k<v.length;k+=1){let _=Cb(t,v,k),M=w(_);g.set(M,c[k]=Sb(M,_))}return{c(){e=p("div"),S(n.$$.fragment),i=d(),S(l.$$.fragment),r=d(),a=p("div"),S(u.$$.fragment),m=d(),f=p("div");for(let k=0;k<c.length;k+=1)c[k].c();x(f,"class","radio-items"),x(a,"class","radio-inner"),ie(a,"disabled",t[7]),x(e,"id",t[3]),x(e,"title",t[5]),x(e,"class",b="check-and-radio radio "+t[2]),ie(e,"has-error",t[8]),ie(e,"label-on-the-left",t[10]===!0||t[10]==="true")},m(k,_){s(k,e,_),E(n,e,null),q(e,i),E(l,e,null),q(e,r),q(e,a),E(u,a,null),q(a,m),q(a,f);for(let M=0;M<c.length;M+=1)c[M]&&c[M].m(f,null);t[17](e),h=!0},p(k,[_]){let M={};_&64&&(M.label=k[6]),_&128&&(M.disabled=k[7]),_&4096&&(M.for=k[12]),n.$set(M);let O={};_&512&&(O.msg=k[9]),l.$set(O);let D={};_&256&&(D.msg=k[8]),u.$set(D),_&18577&&(v=Ye(k[11]),We(),c=li(c,_,w,1,k,v,g,f,Wo,Sb,null,Cb),Ve()),(!h||_&128)&&ie(a,"disabled",k[7]),(!h||_&8)&&x(e,"id",k[3]),(!h||_&32)&&x(e,"title",k[5]),(!h||_&4&&b!==(b="check-and-radio radio "+k[2]))&&x(e,"class",b),(!h||_&260)&&ie(e,"has-error",k[8]),(!h||_&1028)&&ie(e,"label-on-the-left",k[10]===!0||k[10]==="true")},i(k){if(!h){$(n.$$.fragment,k),$(l.$$.fragment,k),$(u.$$.fragment,k);for(let _=0;_<v.length;_+=1)$(c[_]);h=!0}},o(k){y(n.$$.fragment,k),y(l.$$.fragment,k),y(u.$$.fragment,k);for(let _=0;_<c.length;_+=1)y(c[_]);h=!1},d(k){k&&o(e),C(n),C(l),C(u);for(let _=0;_<c.length;_+=1)c[_].d();t[17](null)}}}function Lb(t){let e=t.target.closest(".radio-item").querySelector("input");e&&!e.disabled&&(t.preventDefault(),e.click(),e.focus())}function r$(t,e,n){let i,l,{class:r=""}=e,{id:a=""}=e,{name:u=Xe()}=e,{title:m=void 0}=e,{label:f=""}=e,{disabled:c=!1}=e,{items:g=[]}=e,{value:b=""}=e,{error:h=""}=e,{info:v=""}=e,{labelOnTheLeft:w=!1}=e,{element:k=void 0}=e,_=rt(),M=Xe();function O(T,A){n(0,b=A.value),_("change",{event:T,value:b,item:A})}let D=(T,A)=>O(A,T);function L(T){_e[T?"unshift":"push"](()=>{k=T,n(1,k)})}return t.$$set=T=>{"class"in T&&n(2,r=T.class),"id"in T&&n(3,a=T.id),"name"in T&&n(4,u=T.name),"title"in T&&n(5,m=T.title),"label"in T&&n(6,f=T.label),"disabled"in T&&n(7,c=T.disabled),"items"in T&&n(15,g=T.items),"value"in T&&n(0,b=T.value),"error"in T&&n(8,h=T.error),"info"in T&&n(9,v=T.info),"labelOnTheLeft"in T&&n(10,w=T.labelOnTheLeft),"element"in T&&n(1,k=T.element)},t.$$.update=()=>{t.$$.dirty&24&&n(12,i=a||u||Xe()),t.$$.dirty&32768&&n(11,l=g.map(T=>(typeof T=="string"&&(T={name:T,value:T}),T.id=T.id||Xe(),T)))},[b,k,r,a,u,m,f,c,h,v,w,l,i,M,O,g,D,L]}var wc=class extends fe{constructor(e){super(),de(this,e,r$,l$,me,{class:2,id:3,name:4,title:5,label:6,disabled:7,items:15,value:0,error:8,info:9,labelOnTheLeft:10,element:1})}},Mi=wc;function Db(t,e,n){let i=t.slice();return i[27]=e[n],i}function Ab(t){let e,n=[],i=new Map,l=Ye(t[15]),r=a=>a[27];for(let a=0;a<l.length;a+=1){let u=Db(t,l,a),m=r(u);i.set(m,n[a]=Ib(m,u))}return{c(){e=p("div");for(let a=0;a<n.length;a+=1)n[a].c();x(e,"class","range-ticks")},m(a,u){s(a,e,u);for(let m=0;m<n.length;m+=1)n[m]&&n[m].m(e,null)},p(a,u){u&557056&&(l=Ye(a[15]),n=li(n,u,r,1,a,l,i,e,Vg,Ib,null,Db))},d(a){a&&o(e);for(let u=0;u<n.length;u+=1)n[u].d()}}}function Ib(t,e){let n,i=e[27]+"",l,r,a;function u(){return e[23](e[27])}return{key:t,first:null,c(){n=p("span"),l=ne(i),this.first=n},m(m,f){s(m,n,f),q(n,l),r||(a=ye(n,"click",u),r=!0)},p(m,f){e=m,f&32768&&i!==(i=e[27]+"")&&je(l,i)},d(m){m&&o(n),r=!1,a()}}}function a$(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w;n=new vt({props:{label:t[5],disabled:t[4],for:t[17]}}),l=new bt({props:{msg:t[7]}}),u=new $t({props:{id:t[18],msg:t[6]}});let k=!t[14]&&Ab(t);return{c(){e=p("div"),S(n.$$.fragment),i=d(),S(l.$$.fragment),r=d(),a=p("div"),S(u.$$.fragment),m=d(),k&&k.c(),f=d(),c=p("input"),x(c,"type","range"),x(c,"name",t[9]),c.disabled=t[4],x(c,"min",t[11]),x(c,"max",t[12]),x(c,"step",t[13]),x(c,"id",t[17]),Pt(c,"background-size",t[16]+"% 100%"),x(c,"aria-invalid",t[6]),x(c,"aria-errormessage",g=t[6]?t[18]:void 0),x(a,"class","range-inner"),ie(a,"disabled",t[4]),x(e,"class",b="range "+t[3]),x(e,"title",t[8]),ie(e,"has-error",t[6]),ie(e,"label-on-the-left",t[10]===!0||t[10]==="true"),ie(e,"disabled",t[4])},m(_,M){s(_,e,M),E(n,e,null),q(e,i),E(l,e,null),q(e,r),q(e,a),E(u,a,null),q(a,m),k&&k.m(a,null),q(a,f),q(a,c),t[24](c),ct(c,t[0]),t[26](e),h=!0,v||(w=[ye(c,"change",t[25]),ye(c,"input",t[25]),ye(c,"change",t[21]),ye(c,"input",t[22])],v=!0)},p(_,[M]){let O={};M&32&&(O.label=_[5]),M&16&&(O.disabled=_[4]),M&131072&&(O.for=_[17]),n.$set(O);let D={};M&128&&(D.msg=_[7]),l.$set(D);let L={};M&64&&(L.msg=_[6]),u.$set(L),_[14]?k&&(k.d(1),k=null):k?k.p(_,M):(k=Ab(_),k.c(),k.m(a,f)),(!h||M&512)&&x(c,"name",_[9]),(!h||M&16)&&(c.disabled=_[4]),(!h||M&2048)&&x(c,"min",_[11]),(!h||M&4096)&&x(c,"max",_[12]),(!h||M&8192)&&x(c,"step",_[13]),(!h||M&131072)&&x(c,"id",_[17]),(!h||M&65536)&&Pt(c,"background-size",_[16]+"% 100%"),(!h||M&64)&&x(c,"aria-invalid",_[6]),(!h||M&64&&g!==(g=_[6]?_[18]:void 0))&&x(c,"aria-errormessage",g),M&1&&ct(c,_[0]),(!h||M&16)&&ie(a,"disabled",_[4]),(!h||M&8&&b!==(b="range "+_[3]))&&x(e,"class",b),(!h||M&256)&&x(e,"title",_[8]),(!h||M&72)&&ie(e,"has-error",_[6]),(!h||M&1032)&&ie(e,"label-on-the-left",_[10]===!0||_[10]==="true"),(!h||M&24)&&ie(e,"disabled",_[4])},i(_){h||($(n.$$.fragment,_),$(l.$$.fragment,_),$(u.$$.fragment,_),h=!0)},o(_){y(n.$$.fragment,_),y(l.$$.fragment,_),y(u.$$.fragment,_),h=!1},d(_){_&&o(e),C(n),C(l),C(u),k&&k.d(),t[24](null),t[26](null),v=!1,Re(w)}}}function u$(t,e,n){let i,l,r,{class:a=""}=e,{id:u=""}=e,{disabled:m=!1}=e,{label:f=""}=e,{error:c=void 0}=e,{info:g=void 0}=e,{title:b=void 0}=e,{name:h=void 0}=e,{labelOnTheLeft:v=!1}=e,{min:w=0}=e,{max:k=10}=e,{step:_=1}=e,{value:M=w}=e,{hideTicks:O=!1}=e,{element:D=void 0}=e,{inputElement:L=void 0}=e,T=Xe();function A(U){U===M||m||(n(2,L.value=n(0,M=U),L),L.dispatchEvent(new Event("change")))}function H(U){Qe.call(this,t,U)}function I(U){Qe.call(this,t,U)}let P=U=>A(U);function N(U){_e[U?"unshift":"push"](()=>{L=U,n(2,L)})}function j(){M=qg(this.value),n(0,M)}function K(U){_e[U?"unshift":"push"](()=>{D=U,n(1,D)})}return t.$$set=U=>{"class"in U&&n(3,a=U.class),"id"in U&&n(20,u=U.id),"disabled"in U&&n(4,m=U.disabled),"label"in U&&n(5,f=U.label),"error"in U&&n(6,c=U.error),"info"in U&&n(7,g=U.info),"title"in U&&n(8,b=U.title),"name"in U&&n(9,h=U.name),"labelOnTheLeft"in U&&n(10,v=U.labelOnTheLeft),"min"in U&&n(11,w=U.min),"max"in U&&n(12,k=U.max),"step"in U&&n(13,_=U.step),"value"in U&&n(0,M=U.value),"hideTicks"in U&&n(14,O=U.hideTicks),"element"in U&&n(1,D=U.element),"inputElement"in U&&n(2,L=U.inputElement)},t.$$.update=()=>{t.$$.dirty&1049088&&n(17,i=u||h||Xe()),t.$$.dirty&6145&&n(16,l=(M-w)/(k-w)*100),t.$$.dirty&6144&&n(15,r=Array.from({length:6},(U,G)=>+w+G*((k-w)/5)))},[M,D,L,a,m,f,c,g,b,h,v,w,k,_,O,r,l,i,T,A,u,H,I,P,N,j,K]}var yc=class extends fe{constructor(e){super(),de(this,e,u$,a$,me,{class:3,id:20,disabled:4,label:5,error:6,info:7,title:8,name:9,labelOnTheLeft:10,min:11,max:12,step:13,value:0,hideTicks:14,element:1,inputElement:2})}},Jn=yc;function Ob(t,e,n){let i=t.slice();return i[22]=e[n],i}function xb(t,e,n){let i=t.slice();return i[25]=e[n],i}function Hb(t){let e,n;return{c(){e=p("option"),n=ne(t[6]),e.__value="",ct(e,e.__value)},m(i,l){s(i,e,l),q(e,n)},p(i,l){l&64&&je(n,i[6])},d(i){i&&o(e)}}}function f$(t){let e,n=t[22].name+"",i,l;return{c(){e=p("option"),i=ne(n),e.__value=l=t[22].id,ct(e,e.__value)},m(r,a){s(r,e,a),q(e,i)},p(r,a){a&8192&&n!==(n=r[22].name+"")&&je(i,n),a&8192&&l!==(l=r[22].id)&&(e.__value=l,ct(e,e.__value))},d(r){r&&o(e)}}}function m$(t){let e,n,i=Ye(t[22].items),l=[];for(let r=0;r<i.length;r+=1)l[r]=Pb(xb(t,i,r));return{c(){e=p("optgroup");for(let r=0;r<l.length;r+=1)l[r].c();x(e,"label",n=t[22].name)},m(r,a){s(r,e,a);for(let u=0;u<l.length;u+=1)l[u]&&l[u].m(e,null)},p(r,a){if(a&8192){i=Ye(r[22].items);let u;for(u=0;u<i.length;u+=1){let m=xb(r,i,u);l[u]?l[u].p(m,a):(l[u]=Pb(m),l[u].c(),l[u].m(e,null))}for(;u<l.length;u+=1)l[u].d(1);l.length=i.length}a&8192&&n!==(n=r[22].name)&&x(e,"label",n)},d(r){r&&o(e),St(l,r)}}}function Pb(t){let e,n=t[25].name+"",i,l;return{c(){e=p("option"),i=ne(n),e.__value=l=t[25].id,ct(e,e.__value)},m(r,a){s(r,e,a),q(e,i)},p(r,a){a&8192&&n!==(n=r[25].name+"")&&je(i,n),a&8192&&l!==(l=r[25].id)&&(e.__value=l,ct(e,e.__value))},d(r){r&&o(e)}}}function Nb(t){let e;function n(r,a){return r[22].items?m$:f$}let i=n(t,-1),l=i(t);return{c(){l.c(),e=Tt()},m(r,a){l.m(r,a),s(r,e,a)},p(r,a){i===(i=n(r,a))&&l?l.p(r,a):(l.d(1),l=i(r),l&&(l.c(),l.m(e.parentNode,e)))},d(r){r&&o(e),l.d(r)}}}function d$(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k;n=new vt({props:{label:t[9],disabled:t[4],for:t[14]}}),l=new bt({props:{msg:t[11]}}),u=new $t({props:{id:t[15],msg:t[10]}});let _=t[6]&&Hb(t),M=Ye(t[13]),O=[];for(let D=0;D<M.length;D+=1)O[D]=Nb(Ob(t,M,D));return{c(){e=p("div"),S(n.$$.fragment),i=d(),S(l.$$.fragment),r=d(),a=p("div"),S(u.$$.fragment),m=d(),f=p("div"),c=p("select"),_&&_.c(),g=Tt();for(let D=0;D<O.length;D+=1)O[D].c();x(c,"id",t[14]),x(c,"title",t[7]),x(c,"name",t[8]),c.disabled=t[4],x(c,"aria-invalid",t[10]),x(c,"aria-errormessage",b=t[10]?t[15]:void 0),x(c,"aria-required",t[5]),t[0]===void 0&&en(()=>t[19].call(c)),x(f,"class","input-row"),x(a,"class","input-inner"),ie(a,"disabled",t[4]),x(e,"class",h="input select "+t[3]),ie(e,"has-error",t[10]),ie(e,"label-on-the-left",t[12]===!0||t[12]==="true")},m(D,L){s(D,e,L),E(n,e,null),q(e,i),E(l,e,null),q(e,r),q(e,a),E(u,a,null),q(a,m),q(a,f),q(f,c),_&&_.m(c,null),q(c,g);for(let T=0;T<O.length;T+=1)O[T]&&O[T].m(c,null);yd(c,t[0],!0),t[20](c),t[21](e),v=!0,w||(k=[ye(c,"change",t[19]),ye(c,"change",t[18])],w=!0)},p(D,[L]){let T={};L&512&&(T.label=D[9]),L&16&&(T.disabled=D[4]),L&16384&&(T.for=D[14]),n.$set(T);let A={};L&2048&&(A.msg=D[11]),l.$set(A);let H={};if(L&1024&&(H.msg=D[10]),u.$set(H),D[6]?_?_.p(D,L):(_=Hb(D),_.c(),_.m(c,g)):_&&(_.d(1),_=null),L&8192){M=Ye(D[13]);let I;for(I=0;I<M.length;I+=1){let P=Ob(D,M,I);O[I]?O[I].p(P,L):(O[I]=Nb(P),O[I].c(),O[I].m(c,null))}for(;I<O.length;I+=1)O[I].d(1);O.length=M.length}(!v||L&16384)&&x(c,"id",D[14]),(!v||L&128)&&x(c,"title",D[7]),(!v||L&256)&&x(c,"name",D[8]),(!v||L&16)&&(c.disabled=D[4]),(!v||L&1024)&&x(c,"aria-invalid",D[10]),(!v||L&1024&&b!==(b=D[10]?D[15]:void 0))&&x(c,"aria-errormessage",b),(!v||L&32)&&x(c,"aria-required",D[5]),L&1&&yd(c,D[0]),(!v||L&16)&&ie(a,"disabled",D[4]),(!v||L&8&&h!==(h="input select "+D[3]))&&x(e,"class",h),(!v||L&1032)&&ie(e,"has-error",D[10]),(!v||L&4104)&&ie(e,"label-on-the-left",D[12]===!0||D[12]==="true")},i(D){v||($(n.$$.fragment,D),$(l.$$.fragment,D),$(u.$$.fragment,D),v=!0)},o(D){y(n.$$.fragment,D),y(l.$$.fragment,D),y(u.$$.fragment,D),v=!1},d(D){D&&o(e),C(n),C(l),C(u),_&&_.d(),St(O,D),t[20](null),t[21](null),w=!1,Re(k)}}}function c$(t,e,n){let i,{class:l=""}=e,{id:r=""}=e,{disabled:a=!1}=e,{required:u=void 0}=e,{value:m=void 0}=e,{placeholder:f=void 0}=e,{items:c=[]}=e,{title:g=void 0}=e,{name:b=void 0}=e,{label:h=""}=e,{error:v=void 0}=e,{info:w=void 0}=e,{labelOnTheLeft:k=!1}=e,{element:_=void 0}=e,{inputElement:M=void 0}=e,O=[],D=Xe();function L(I){Qe.call(this,t,I)}function T(){m=Rg(this),n(0,m)}function A(I){_e[I?"unshift":"push"](()=>{M=I,n(2,M),n(13,O),n(17,c)})}function H(I){_e[I?"unshift":"push"](()=>{_=I,n(1,_)})}return t.$$set=I=>{"class"in I&&n(3,l=I.class),"id"in I&&n(16,r=I.id),"disabled"in I&&n(4,a=I.disabled),"required"in I&&n(5,u=I.required),"value"in I&&n(0,m=I.value),"placeholder"in I&&n(6,f=I.placeholder),"items"in I&&n(17,c=I.items),"title"in I&&n(7,g=I.title),"name"in I&&n(8,b=I.name),"label"in I&&n(9,h=I.label),"error"in I&&n(10,v=I.error),"info"in I&&n(11,w=I.info),"labelOnTheLeft"in I&&n(12,k=I.labelOnTheLeft),"element"in I&&n(1,_=I.element),"inputElement"in I&&n(2,M=I.inputElement)},t.$$.update=()=>{if(t.$$.dirty&65792&&n(14,i=r||b||Xe()),t.$$.dirty&131072){let I=[],P={};c.forEach(j=>{if(!j.group)return I.push(j);P[j.group]=P[j.group]||{name:j.group,items:[]},P[j.group].items.push(j)});let N=[...I,...Object.values(P)];typeof N[0]=="string"&&(N=N.map(j=>({id:j,name:j}))),n(13,O=N)}},[m,_,M,l,a,u,f,g,b,h,v,w,k,O,i,D,r,c,L,T,A,H]}var kc=class extends fe{constructor(e){super(),de(this,e,c$,d$,me,{class:3,id:16,disabled:4,required:5,value:0,placeholder:6,items:17,title:7,name:8,label:9,error:10,info:11,labelOnTheLeft:12,element:1,inputElement:2})}},Qn=kc;function p$(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w;n=new vt({props:{label:t[7],disabled:t[6],for:t[11]}}),l=new bt({props:{msg:t[9]}}),u=new $t({props:{id:t[12],msg:t[8]}});let k=[{id:t[11]},{disabled:t[6]},t[13],{"aria-invalid":t[8]},{"aria-errormessage":c=t[8]?t[12]:void 0},{"aria-required":t[5]}],_={};for(let M=0;M<k.length;M+=1)_=tt(_,k[M]);return{c(){e=p("div"),S(n.$$.fragment),i=d(),S(l.$$.fragment),r=d(),a=p("div"),S(u.$$.fragment),m=d(),f=p("textarea"),Ct(f,_),x(a,"class","textarea-inner"),x(a,"data-value",g=t[4]?t[0]:void 0),ie(a,"disabled",t[6]),x(e,"class",b="textarea "+t[3]),ie(e,"autogrow",t[4]),ie(e,"has-error",t[8]),ie(e,"label-on-the-left",t[10]===!0||t[10]==="true")},m(M,O){s(M,e,O),E(n,e,null),q(e,i),E(l,e,null),q(e,r),q(e,a),E(u,a,null),q(a,m),q(a,f),f.autofocus&&f.focus(),t[17](f),ct(f,t[0]),t[19](e),h=!0,v||(w=[ye(f,"input",t[18]),ye(f,"change",t[15]),ye(f,"input",t[16])],v=!0)},p(M,[O]){let D={};O&128&&(D.label=M[7]),O&64&&(D.disabled=M[6]),O&2048&&(D.for=M[11]),n.$set(D);let L={};O&512&&(L.msg=M[9]),l.$set(L);let T={};O&256&&(T.msg=M[8]),u.$set(T),Ct(f,_=jt(k,[(!h||O&2048)&&{id:M[11]},(!h||O&64)&&{disabled:M[6]},O&8192&&M[13],(!h||O&256)&&{"aria-invalid":M[8]},(!h||O&256&&c!==(c=M[8]?M[12]:void 0))&&{"aria-errormessage":c},(!h||O&32)&&{"aria-required":M[5]}])),O&1&&ct(f,M[0]),(!h||O&17&&g!==(g=M[4]?M[0]:void 0))&&x(a,"data-value",g),(!h||O&64)&&ie(a,"disabled",M[6]),(!h||O&8&&b!==(b="textarea "+M[3]))&&x(e,"class",b),(!h||O&24)&&ie(e,"autogrow",M[4]),(!h||O&264)&&ie(e,"has-error",M[8]),(!h||O&1032)&&ie(e,"label-on-the-left",M[10]===!0||M[10]==="true")},i(M){h||($(n.$$.fragment,M),$(l.$$.fragment,M),$(u.$$.fragment,M),h=!0)},o(M){y(n.$$.fragment,M),y(l.$$.fragment,M),y(u.$$.fragment,M),h=!1},d(M){M&&o(e),C(n),C(l),C(u),t[17](null),t[19](null),v=!1,Re(w)}}}function h$(t,e,n){let i,l=["class","id","value","autogrow","required","disabled","label","error","info","labelOnTheLeft","element","inputElement"],r=kt(e,l),{class:a=""}=e,{id:u=""}=e,{value:m=""}=e,{autogrow:f=!1}=e,{required:c=void 0}=e,{disabled:g=!1}=e,{label:b=""}=e,{error:h=void 0}=e,{info:v=void 0}=e,{labelOnTheLeft:w=!1}=e,{element:k=void 0}=e,{inputElement:_=void 0}=e,M=Xe();function O(H){Qe.call(this,t,H)}function D(H){Qe.call(this,t,H)}function L(H){_e[H?"unshift":"push"](()=>{_=H,n(2,_)})}function T(){m=this.value,n(0,m)}function A(H){_e[H?"unshift":"push"](()=>{k=H,n(1,k)})}return t.$$set=H=>{e=tt(tt({},e),Zt(H)),n(13,r=kt(e,l)),"class"in H&&n(3,a=H.class),"id"in H&&n(14,u=H.id),"value"in H&&n(0,m=H.value),"autogrow"in H&&n(4,f=H.autogrow),"required"in H&&n(5,c=H.required),"disabled"in H&&n(6,g=H.disabled),"label"in H&&n(7,b=H.label),"error"in H&&n(8,h=H.error),"info"in H&&n(9,v=H.info),"labelOnTheLeft"in H&&n(10,w=H.labelOnTheLeft),"element"in H&&n(1,k=H.element),"inputElement"in H&&n(2,_=H.inputElement)},t.$$.update=()=>{t.$$.dirty&16384&&n(11,i=u||name||Xe())},[m,k,_,a,f,c,g,b,h,v,w,i,M,r,u,O,D,L,T,A]}var Tc=class extends fe{constructor(e){super(),de(this,e,h$,p$,me,{class:3,id:14,value:0,autogrow:4,required:5,disabled:6,label:7,error:8,info:9,labelOnTheLeft:10,element:1,inputElement:2})}},mi=Tc;var Fb="ontouchstart"in document.documentElement;function qb(t){let e=t.offsetParent===null;e&&(t=t.cloneNode(!0),document.body.appendChild(t));let i=t.querySelector(".toggle-inner").getBoundingClientRect(),l=getComputedStyle(t),r=parseFloat(l.paddingBlock);return e&&t&&t.remove(),{scrollerStartX:i.height-i.width,scrollerEndX:0,handleStartX:i.height/2+r,handleEndX:i.width+r-i.height/2}}function g$(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O,D,L,T,A;return n=new vt({props:{label:t[8],disabled:t[7],for:t[14]}}),l=new bt({props:{msg:t[10]}}),a=new $t({props:{id:t[15],msg:t[9],animOpacity:"true"}}),{c(){e=p("div"),S(n.$$.fragment),i=d(),S(l.$$.fragment),r=d(),S(a.$$.fragment),u=d(),m=p("div"),f=p("label"),c=p("div"),g=p("div"),b=d(),h=p("div"),h.innerHTML='<div class="toggle-knob"></div>',v=d(),w=p("div"),k=d(),_=p("input"),x(g,"class","toggle-option"),x(h,"class","toggle-handle"),x(w,"class","toggle-option"),x(_,"id",t[14]),x(_,"type","checkbox"),x(_,"class","toggle-input"),_.disabled=t[7],x(_,"name",t[4]),x(_,"aria-invalid",t[9]),x(_,"aria-errormessage",M=t[9]?t[15]:void 0),x(_,"aria-required",t[6]),x(c,"class","toggle-scroller"),x(f,"class","toggle-label"),x(f,"title",t[5]),x(m,"class","toggle-inner"),x(e,"class",O="toggle "+t[3]),x(e,"role","switch"),x(e,"aria-checked",t[0]),x(e,"tabindex",D=t[7]?void 0:0),ie(e,"has-error",t[9]),ie(e,"label-on-the-left",t[11]===!0||t[11]==="true")},m(H,I){s(H,e,I),E(n,e,null),q(e,i),E(l,e,null),q(e,r),E(a,e,null),q(e,u),q(e,m),q(m,f),q(f,c),q(c,g),q(c,b),q(c,h),t[21](h),q(c,v),q(c,w),q(c,k),q(c,_),t[22](_),_.checked=t[0],t[24](c),t[25](e),L=!0,T||(A=[ye(_,"change",t[23]),ye(e,"keydown",t[16]),ye(e,"touchstart",t[17]),ye(e,"mousedown",t[17]),ye(e,"contextmenu",Un(t[19])),ye(e,"click",Un(t[20]))],T=!0)},p(H,I){let P={};I[0]&256&&(P.label=H[8]),I[0]&128&&(P.disabled=H[7]),I[0]&16384&&(P.for=H[14]),n.$set(P);let N={};I[0]&1024&&(N.msg=H[10]),l.$set(N);let j={};I[0]&512&&(j.msg=H[9]),a.$set(j),(!L||I[0]&16384)&&x(_,"id",H[14]),(!L||I[0]&128)&&(_.disabled=H[7]),(!L||I[0]&16)&&x(_,"name",H[4]),(!L||I[0]&512)&&x(_,"aria-invalid",H[9]),(!L||I[0]&512&&M!==(M=H[9]?H[15]:void 0))&&x(_,"aria-errormessage",M),(!L||I[0]&64)&&x(_,"aria-required",H[6]),I[0]&1&&(_.checked=H[0]),(!L||I[0]&32)&&x(f,"title",H[5]),(!L||I[0]&8&&O!==(O="toggle "+H[3]))&&x(e,"class",O),(!L||I[0]&1)&&x(e,"aria-checked",H[0]),(!L||I[0]&128&&D!==(D=H[7]?void 0:0))&&x(e,"tabindex",D),(!L||I[0]&520)&&ie(e,"has-error",H[9]),(!L||I[0]&2056)&&ie(e,"label-on-the-left",H[11]===!0||H[11]==="true")},i(H){L||($(n.$$.fragment,H),$(l.$$.fragment,H),$(a.$$.fragment,H),L=!0)},o(H){y(n.$$.fragment,H),y(l.$$.fragment,H),y(a.$$.fragment,H),L=!1},d(H){H&&o(e),C(n),C(l),C(a),t[21](null),t[22](null),t[24](null),t[25](null),T=!1,Re(A)}}}function b$(t,e,n){let i,l=rt(),{class:r=""}=e,{id:a=""}=e,{name:u=Xe()}=e,{title:m=""}=e,{required:f=void 0}=e,{disabled:c=!1}=e,{label:g=""}=e,{error:b=void 0}=e,{info:h=void 0}=e,{value:v=!1}=e,{labelOnTheLeft:w=!1}=e,{element:k=void 0}=e,{inputElement:_=void 0}=e,M=Xe(),O,D,L,T=0,A,H,I,P=!1,N=!1,j;Nt(()=>{V(!1),{scrollerStartX:A,scrollerEndX:H,handleStartX:I}=qb(k)}),Cn(()=>{typeof v!="boolean"&&n(0,v=!!v),K(v)});function K(Y=!1,J=!1){if(typeof Y!="boolean"&&(Y=!!Y),Y!==v)return n(0,v=Y);v===j&&!J||(L=T=v?H:A,j=v,Q(),l("change",v))}function U(Y){V(!0),(Y.key==="Enter"||Y.key===" ")&&(Y.preventDefault(),K(!v))}function G(Y){Y.target.closest(".toggle-inner, .toggle>label")&&(Fb&&Y.type!=="touchstart"||(Y.type==="touchstart"?(document.addEventListener("touchend",F),document.addEventListener("touchmove",z,{passive:!1})):(document.addEventListener("mouseup",F),document.addEventListener("mousemove",z,{passive:!1})),V(!1),L=Oi(Y)-T,N=!0,P=!0))}function F(){document.removeEventListener("mouseup",F),document.removeEventListener("mousemove",z),document.removeEventListener("touchend",F),document.removeEventListener("touchmove",z),V(!0),N=!1,P?K(!v):K(T-A>=(H-A)/2,!0)}function z(Y){N&&(P=!1,Y.preventDefault(),T=Oi(Y)-L-H,Q())}function V(Y){n(13,D.style.transition=Y?"":"none",D),n(12,O.style.transition=Y?"":"none",O)}function Q(){T<A&&(T=A),T>H&&(T=H),n(12,O.style.marginLeft=Math.round(T)+"px",O);let Y=I;(N||v)&&(Y-=A),N&&(Y+=T),n(13,D.style.left=`${Math.round(Y-1)}px`,D)}function le(Y){Qe.call(this,t,Y)}function ee(Y){Qe.call(this,t,Y)}function X(Y){_e[Y?"unshift":"push"](()=>{D=Y,n(13,D)})}function Z(Y){_e[Y?"unshift":"push"](()=>{_=Y,n(2,_)})}function ge(){v=this.checked,n(0,v)}function he(Y){_e[Y?"unshift":"push"](()=>{O=Y,n(12,O)})}function W(Y){_e[Y?"unshift":"push"](()=>{k=Y,n(1,k)})}return t.$$set=Y=>{"class"in Y&&n(3,r=Y.class),"id"in Y&&n(18,a=Y.id),"name"in Y&&n(4,u=Y.name),"title"in Y&&n(5,m=Y.title),"required"in Y&&n(6,f=Y.required),"disabled"in Y&&n(7,c=Y.disabled),"label"in Y&&n(8,g=Y.label),"error"in Y&&n(9,b=Y.error),"info"in Y&&n(10,h=Y.info),"value"in Y&&n(0,v=Y.value),"labelOnTheLeft"in Y&&n(11,w=Y.labelOnTheLeft),"element"in Y&&n(1,k=Y.element),"inputElement"in Y&&n(2,_=Y.inputElement)},t.$$.update=()=>{t.$$.dirty[0]&262160&&n(14,i=a||u||Xe())},[v,k,_,r,u,m,f,c,g,b,h,w,O,D,i,M,U,G,a,le,ee,X,Z,ge,he,W]}var Mc=class extends fe{constructor(e){super(),de(this,e,b$,g$,me,{class:3,id:18,name:4,title:5,required:6,disabled:7,label:8,error:9,info:10,value:0,labelOnTheLeft:11,element:1,inputElement:2},null,[-1,-1])}},pn=Mc;function Bb(t){t&&(t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded","true"))}function Na(t){if(typeof t=="string"&&t!=="body"){let e=document.querySelectorAll(t);e&&e.length&&e.forEach(n=>n.setAttribute("aria-expanded","false"))}else t instanceof Element&&t.setAttribute("aria-expanded","false")}var Rb=0,jb=0,zb="longpress",Wb=500,Fa=null;function _$(t){os(),t=Ec(t);let e=new CustomEvent(zb,{bubbles:!0,cancelable:!0,detail:{x:t.clientX,y:t.clientY}});t.target.dispatchEvent(e)}function Ec(t){return t.changedTouches!==void 0?t.changedTouches[0]:t}function v$(t){os(),Fa=setTimeout(()=>_$(t),Wb)}function os(){Fa&&(clearTimeout(Fa),Fa=null)}function $$(t){t.pointerType==="mouse"&&t.button!==0||(t=Ec(t),Rb=t.clientX,jb=t.clientY,v$(t))}function w$(t){t=Ec(t);let e=Math.abs(Rb-t.clientX),n=Math.abs(jb-t.clientY);(e>=10||n>=10)&&os()}function Cc(t=500,e="longpress"){if(window.longPressEventInitialised)return;Wb=t,zb=e;let n="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0,i="PointerEvent"in window||navigator&&"msPointerEnabled"in navigator,l=n?"touchstart":i?"pointerdown":"mousedown",r=n?"touchend":i?"pointerup":"mouseup",a=n?"touchmove":i?"pointermove":"mousemove";document.addEventListener(l,$$,!0),document.addEventListener(a,w$,!0),document.addEventListener(r,os,!0),document.addEventListener("scroll",os,!0),window.longPressEventInitialised=!0}function Vb(t){let e,n,i,l=t[11].default,r=Dt(l,t,t[10],null);return{c(){e=p("menu"),r&&r.c(),x(e,"tabindex","0"),x(e,"class",n="menu "+t[1])},m(a,u){s(a,e,u),r&&r.m(e,null),t[12](e),i=!0},p(a,u){r&&r.p&&(!i||u[0]&1024)&&It(r,l,a,a[10],i?At(l,a[10],u,null):Ot(a[10]),null),(!i||u[0]&2&&n!==(n="menu "+a[1]))&&x(e,"class",n)},i(a){i||($(r,a),i=!0)},o(a){y(r,a),i=!1},d(a){a&&o(e),r&&r.d(a),t[12](null)}}}function y$(t){let e,n,i=t[2]&&Vb(t);return{c(){i&&i.c(),e=Tt()},m(l,r){i&&i.m(l,r),s(l,e,r),n=!0},p(l,r){l[2]?i?(i.p(l,r),r[0]&4&&$(i,1)):(i=Vb(l),i.c(),$(i,1),i.m(e.parentNode,e)):i&&(We(),y(i,1,1,()=>{i=null}),Ve())},i(l){n||($(i),n=!0)},o(l){y(i),n=!1},d(l){l&&o(e),i&&i.d(l)}}}var ro=".menu-item:not(.disabled,.menu-separator)";function k$(t,e,n){let{$$slots:i={},$$scope:l}=e,r=rt(),a=Gn(),u=navigator.userAgent.match(/safari/i)&&navigator.vendor.match(/apple/i)&&navigator.maxTouchPoints,m=u?"longpress":"contextmenu",{class:f=""}=e,{type:c=void 0}=e,{targetSelector:g="body"}=e,{closeOnClick:b=!0}=e,{align:h=void 0}=e,{valign:v=void 0}=e,{element:w=void 0}=e,k=[],_,M,O=!1,D=!1,L=!1,T=!1,A="",H,I;Td("MenuContext",{targetEl:()=>_}),Nt(()=>{c==="context"&&(u&&Cc(),a&&document.addEventListener("touchend",U),document.addEventListener(m,G))}),on(()=>{c==="context"&&(a&&document.removeEventListener("touchend",U),document.removeEventListener(m,G)),w&&w.remove(),ge()});function P(se){if(!L)return O?c!=="context"?N():Promise.resolve():(n(2,O=!0),M=null,se&&se.detail&&se.detail instanceof Event&&(se=se.detail),c!=="context"&&(_=se&&se.target),_&&(Na(g),Bb(_)),I=se,new Promise(xe=>requestAnimationFrame(()=>{w.parentElement!==document.body&&document.body.appendChild(w),he(),K(),r("open",{event:se,target:_}),w&&w.focus(),requestAnimationFrame(xe),(!a||c!=="context")&&Z()})))}function N(se){return O?(se&&se.detail&&se.detail.target&&(se=se.detail),se&&se.target&&se.target.focus(),new Promise(xe=>{setTimeout(()=>{!se||!se.defaultPrevented?j().then(()=>xe()):xe()},220)})):Promise.resolve()}function j(){return O?(n(2,O=!1),L=!0,Na(g),Na(_),new Promise(se=>requestAnimationFrame(()=>{r("close",{target:_}),ge(),Y(),requestAnimationFrame(se),setTimeout(()=>L=!1,300)}))):Promise.resolve()}function K(){let se=c==="context"&&a;xi({element:w,target:I,alignH:h||(se?"center":"left"),alignV:v||(se?"top":"bottom"),offsetV:se?20:2})}function U(se){O&&!T&&(se.preventDefault(),requestAnimationFrame(Z))}function G(se){j(),_=se.target.closest(g),_&&(se.preventDefault(),P(se))}function F(se){if(w)if(!w.contains(se.target))j();else{let xe=b===!0||b==="true",ke=!!se.target.closest(ro);xe&&ke&&N(se)}}function z(se){let xe=se.target.closest(".menu");if(xe&&!D?D=!0:!xe&&D&&(D=!1),D){let ke=se.target.closest(ro);ke&&W(ke)}else W(null)}function V(se){if(!w)return;if(se.key==="Escape"||!w.contains(se.target))return j();if(se.key==="Enter"||se.key===" "&&!A)return;if(se.key==="Tab")return se.preventDefault(),se.stopPropagation(),se.shiftKey?ve():we();if((se.key.startsWith("Arrow")||se.key.startsWith(" "))&&se.preventDefault(),se.key==="ArrowDown")return we();if(se.key==="ArrowUp")return ve();if(se.key==="ArrowLeft")return J();if(se.key==="ArrowRight")return pe();let xe=Q(k,se.key);xe&&xe.el&&W(xe.el)}function Q(se,xe){if(!/^[\w| ]+$/i.test(xe))return;H&&clearTimeout(H),H=setTimeout(()=>A="",300),A+=xe;let ke=new RegExp(`^${A}`,"i"),ce=se.filter(be=>ke.test(be.text));if(ce.length)return ce.length===1||ce[0].el!==M?ce[0]:ce[1]}let le=ya(K,50),ee=Mo(K,50);function X(){le(),ee()}function Z(){T||(document.addEventListener("click",F),c!=="context"&&document.addEventListener(m,F),document.addEventListener("keydown",V),document.addEventListener("mouseover",z),window.addEventListener("resize",X),window.addEventListener("scroll",X,!0),T=!0)}function ge(){document.removeEventListener("click",F),c!=="context"&&document.removeEventListener(m,F),document.removeEventListener("keydown",V),document.removeEventListener("mouseover",z),window.removeEventListener("resize",X),window.removeEventListener("scroll",X,!0),T=!1}function he(){if(!w)return;k.length=0;let se=xe=>k.push({el:xe,text:xe.textContent.trim().toLowerCase()});w.querySelectorAll(ro).forEach(se)}function W(se){M=se,M?(M.scrollIntoView({block:"nearest"}),M.focus()):w&&w.focus()}function Y(){_&&_.focus&&_.focus()}function J(){let se=Array.from(w.querySelectorAll(ro));W(se[0])}function pe(){let se=Array.from(w.querySelectorAll(ro));W(se[se.length-1])}function we(){let se=Array.from(w.querySelectorAll(ro)),xe=-1;M&&(xe=se.findIndex(ke=>ke===M)),xe>=se.length-1&&(xe=-1),W(se[xe+1])}function ve(){let se=Array.from(w.querySelectorAll(ro)),xe=se.length;M&&(xe=se.findIndex(ke=>ke===M)),xe<=0&&(xe=se.length),W(se[xe-1])}function ue(se){_e[se?"unshift":"push"](()=>{w=se,n(0,w)})}return t.$$set=se=>{"class"in se&&n(1,f=se.class),"type"in se&&n(3,c=se.type),"targetSelector"in se&&n(4,g=se.targetSelector),"closeOnClick"in se&&n(5,b=se.closeOnClick),"align"in se&&n(6,h=se.align),"valign"in se&&n(7,v=se.valign),"element"in se&&n(0,w=se.element),"$$scope"in se&&n(10,l=se.$$scope)},[w,f,O,c,g,b,h,v,P,N,l,i,ue]}var Sc=class extends fe{constructor(e){super(),de(this,e,k$,y$,me,{class:1,type:3,targetSelector:4,closeOnClick:5,align:6,valign:7,element:0,open:8,close:9},null,[-1,-1])}get class(){return this.$$.ctx[1]}set class(e){this.$$set({class:e}),Mt()}get type(){return this.$$.ctx[3]}set type(e){this.$$set({type:e}),Mt()}get targetSelector(){return this.$$.ctx[4]}set targetSelector(e){this.$$set({targetSelector:e}),Mt()}get closeOnClick(){return this.$$.ctx[5]}set closeOnClick(e){this.$$set({closeOnClick:e}),Mt()}get align(){return this.$$.ctx[6]}set align(e){this.$$set({align:e}),Mt()}get valign(){return this.$$.ctx[7]}set valign(e){this.$$set({valign:e}),Mt()}get element(){return this.$$.ctx[0]}set element(e){this.$$set({element:e}),Mt()}get open(){return this.$$.ctx[8]}get close(){return this.$$.ctx[9]}},qi=Sc;function Ub(t){let e,n;return e=new zt({props:{name:t[2]}}),{c(){S(e.$$.fragment)},m(i,l){E(e,i,l),n=!0},p(i,l){let r={};l&4&&(r.name=i[2]),e.$set(r)},i(i){n||($(e.$$.fragment,i),n=!0)},o(i){y(e.$$.fragment,i),n=!1},d(i){C(e,i)}}}function T$(t){let e,n,i,l,r,a,u=Yb(t[1])+"",m,f,c,g,b,h=t[2]&&Ub(t),v=t[11].default,w=Dt(v,t,t[10],null),k=[{role:"menuitem"},{class:f="menu-item "+t[3]},t[9]],_={};for(let M=0;M<k.length;M+=1)_=tt(_,k[M]);return{c(){e=p("button"),n=p("span"),h&&h.c(),i=d(),l=p("div"),w&&w.c(),r=d(),a=p("span"),m=ne(u),x(l,"class","menu-item-text"),x(n,"class","menu-item-content"),x(a,"class","menu-item-shortcut"),Ct(e,_),ie(e,"disabled",t[7]),ie(e,"success",t[4]),ie(e,"warning",t[5]),ie(e,"danger",t[6])},m(M,O){s(M,e,O),q(e,n),h&&h.m(n,null),q(n,i),q(n,l),w&&w.m(l,null),q(e,r),q(e,a),q(a,m),e.autofocus&&e.focus(),t[13](e),c=!0,g||(b=[ye(e,"mousedown",Un(t[12])),ye(e,"click",t[8],!0)],g=!0)},p(M,[O]){M[2]?h?(h.p(M,O),O&4&&$(h,1)):(h=Ub(M),h.c(),$(h,1),h.m(n,i)):h&&(We(),y(h,1,1,()=>{h=null}),Ve()),w&&w.p&&(!c||O&1024)&&It(w,v,M,M[10],c?At(v,M[10],O,null):Ot(M[10]),null),(!c||O&2)&&u!==(u=Yb(M[1])+"")&&je(m,u),Ct(e,_=jt(k,[{role:"menuitem"},(!c||O&8&&f!==(f="menu-item "+M[3]))&&{class:f},O&512&&M[9]])),ie(e,"disabled",M[7]),ie(e,"success",M[4]),ie(e,"warning",M[5]),ie(e,"danger",M[6])},i(M){c||($(h),$(w,M),c=!0)},o(M){y(h),y(w,M),c=!1},d(M){M&&o(e),h&&h.d(),w&&w.d(M),t[13](null),g=!1,Re(b)}}}function Yb(t){return(""+t).trim().toUpperCase().replace(/\+/g,"").replace(/CMD/g,"\u2318").replace(/ALT|OPTION/g,"\u2325").replace(/SHIFT/g,"\u21E7").replace(/CONTROL|CTRL/g,"\u2303").replace(/DELETE|DEL|BACKSPACE/g,"\u232B").replace(/ENTER|RETURN/g,"\u23CE").replace(/ESCAPE|ESC/g,"\u238B")}function M$(t,e,n){let i=["shortcut","icon","class","success","warning","danger","disabled","element"],l=kt(e,i),{$$slots:r={},$$scope:a}=e,{shortcut:u=""}=e,{icon:m=void 0}=e,{class:f=""}=e,{success:c=!1}=e,{warning:g=!1}=e,{danger:b=!1}=e,{disabled:h=!1}=e,{element:v=void 0}=e,w=rt(),{targetEl:k}=Md("MenuContext");function _(D){let L=D.target.closest(".menu-item");L&&L.focus(),Qg(L,200).then(()=>{let T=k();w("click",{event:D,target:T,button:L},{cancelable:!0})===!1&&(D.stopPropagation(),D.preventDefault())})}function M(D){Qe.call(this,t,D)}function O(D){_e[D?"unshift":"push"](()=>{v=D,n(0,v)})}return t.$$set=D=>{e=tt(tt({},e),Zt(D)),n(9,l=kt(e,i)),"shortcut"in D&&n(1,u=D.shortcut),"icon"in D&&n(2,m=D.icon),"class"in D&&n(3,f=D.class),"success"in D&&n(4,c=D.success),"warning"in D&&n(5,g=D.warning),"danger"in D&&n(6,b=D.danger),"disabled"in D&&n(7,h=D.disabled),"element"in D&&n(0,v=D.element),"$$scope"in D&&n(10,a=D.$$scope)},[v,u,m,f,c,g,b,h,_,l,a,r,M,O]}var Lc=class extends fe{constructor(e){super(),de(this,e,M$,T$,me,{shortcut:1,icon:2,class:3,success:4,warning:5,danger:6,disabled:7,element:0})}},Lt=Lc;function E$(t){let e;return{c(){e=p("li"),x(e,"role","separator"),x(e,"class","menu-item menu-separator")},m(n,i){s(n,e,i),t[1](e)},p:Le,i:Le,o:Le,d(n){n&&o(e),t[1](null)}}}function C$(t,e,n){let{element:i=void 0}=e;function l(r){_e[r?"unshift":"push"](()=>{i=r,n(0,i)})}return t.$$set=r=>{"element"in r&&n(0,i=r.element)},[i,l]}var Dc=class extends fe{constructor(e){super(),de(this,e,C$,E$,me,{element:0})}},Ei=Dc;var ao=Yn({}),Bi={INFO:"info",WARNING:"warning",ERROR:"error",DANGER:"error",SUCCESS:"success"};function Ln(t,e="",n="",i="OK",l){if(typeof t=="object")return ao.set(t);let r=[{label:i,value:i,type:e}];return ao.set({message:t,title:n,cb:l,type:e,buttons:r})}function Gb(t,e,n){let i=t.slice();return i[9]=e[n],i}function S$(t){let e,n,i,l,r=t[2].message+"",a;return e=new zt({props:{name:t[2].icon||t[2].type}}),{c(){S(e.$$.fragment),n=d(),i=p("div"),l=p("div"),x(l,"class","message-content"),x(i,"class","message")},m(u,m){E(e,u,m),s(u,n,m),s(u,i,m),q(i,l),l.innerHTML=r,a=!0},p(u,m){let f={};m&4&&(f.name=u[2].icon||u[2].type),e.$set(f),(!a||m&4)&&r!==(r=u[2].message+"")&&(l.innerHTML=r)},i(u){a||($(e.$$.fragment,u),a=!0)},o(u){y(e.$$.fragment,u),a=!1},d(u){u&&(o(n),o(i)),C(e,u)}}}function Kb(t){let e,n,i=Ye(t[2].buttons),l=[];for(let a=0;a<i.length;a+=1)l[a]=Xb(Gb(t,i,a));let r=a=>y(l[a],1,1,()=>{l[a]=null});return{c(){for(let a=0;a<l.length;a+=1)l[a].c();e=Tt()},m(a,u){for(let m=0;m<l.length;m+=1)l[m]&&l[m].m(a,u);s(a,e,u),n=!0},p(a,u){if(u&12){i=Ye(a[2].buttons);let m;for(m=0;m<i.length;m+=1){let f=Gb(a,i,m);l[m]?(l[m].p(f,u),$(l[m],1)):(l[m]=Xb(f),l[m].c(),$(l[m],1),l[m].m(e.parentNode,e))}for(We(),m=i.length;m<l.length;m+=1)r(m);Ve()}},i(a){if(!n){for(let u=0;u<i.length;u+=1)$(l[u]);n=!0}},o(a){l=l.filter(Boolean);for(let u=0;u<l.length;u+=1)y(l[u]);n=!1},d(a){a&&o(e),St(l,a)}}}function L$(t){let e=t[9].label+"",n,i;return{c(){n=ne(e),i=d()},m(l,r){s(l,n,r),s(l,i,r)},p(l,r){r&4&&e!==(e=l[9].label+"")&&je(n,e)},d(l){l&&(o(n),o(i))}}}function Xb(t){let e,n;function i(...l){return t[5](t[9],...l)}return e=new De({props:{info:t[9].type==="info",warning:t[9].type==="warning",danger:t[9].type==="error"||t[9].type==="danger",success:t[9].type==="success",$$slots:{default:[L$]},$$scope:{ctx:t}}}),e.$on("click",i),{c(){S(e.$$.fragment)},m(l,r){E(e,l,r),n=!0},p(l,r){t=l;let a={};r&4&&(a.info=t[9].type==="info"),r&4&&(a.warning=t[9].type==="warning"),r&4&&(a.danger=t[9].type==="error"||t[9].type==="danger"),r&4&&(a.success=t[9].type==="success"),r&4100&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(l){n||($(e.$$.fragment,l),n=!0)},o(l){y(e.$$.fragment,l),n=!1},d(l){C(e,l)}}}function D$(t){let e,n,i=t[2].buttons&&Kb(t);return{c(){e=p("div"),i&&i.c(),x(e,"slot","footer")},m(l,r){s(l,e,r),i&&i.m(e,null),n=!0},p(l,r){l[2].buttons?i?(i.p(l,r),r&4&&$(i,1)):(i=Kb(l),i.c(),$(i,1),i.m(e,null)):i&&(We(),y(i,1,1,()=>{i=null}),Ve())},i(l){n||($(i),n=!0)},o(l){y(i),n=!1},d(l){l&&o(e),i&&i.d()}}}function A$(t){let e,n,i;function l(a){t[6](a)}let r={title:t[2].title,class:"message-box message-"+t[2].type,$$slots:{footer:[D$],default:[S$]},$$scope:{ctx:t}};return t[0]!==void 0&&(r.element=t[0]),e=new vi({props:r}),_e.push(()=>Ge(e,"element",l)),t[7](e),e.$on("close",t[4]),{c(){S(e.$$.fragment)},m(a,u){E(e,a,u),i=!0},p(a,[u]){let m={};u&4&&(m.title=a[2].title),u&4&&(m.class="message-box message-"+a[2].type),u&4100&&(m.$$scope={dirty:u,ctx:a}),!n&&u&1&&(n=!0,m.element=a[0],Ue(()=>n=!1)),e.$set(m)},i(a){i||($(e.$$.fragment,a),i=!0)},o(a){y(e.$$.fragment,a),i=!1},d(a){t[7](null),C(e,a)}}}function I$(t,e,n){let i;un(t,ao,b=>n(2,i=b));let{element:l=void 0}=e,r,a;Nt(()=>{a=ao.subscribe(b=>{r&&(b&&b.message?r.open():r.close())})}),on(()=>{a(),ao.set({})});function u(b,h){b.preventDefault(),Ag(ao,i.result=h.value||h.label,i),r.close()}function m(){typeof i.cb=="function"&&i.cb(i.result);let b=i.target||document.body;requestAnimationFrame(()=>b.focus())}let f=(b,h)=>u(h,b);function c(b){l=b,n(0,l)}function g(b){_e[b?"unshift":"push"](()=>{r=b,n(1,r)})}return t.$$set=b=>{"element"in b&&n(0,l=b.element)},[l,r,i,u,m,f,c,g]}var Ac=class extends fe{constructor(e){super(),de(this,e,I$,A$,me,{element:0})}},Ic=Ac;function O$(t){let e,n,i,l=[{class:"push-button "+t[2]},{"aria-pressed":t[0]},{outline:t[7]},{info:t[3]},{success:t[4]},{warning:t[5]},{danger:t[6]},{round:t[9]},{icon:t[8]},t[13]];function r(u){t[16](u)}let a={};for(let u=0;u<l.length;u+=1)a=tt(a,l[u]);return t[1]!==void 0&&(a.element=t[1]),e=new De({props:a}),_e.push(()=>Ge(e,"element",r)),e.$on("keydown",t[10]),e.$on("mousedown",t[11]),{c(){S(e.$$.fragment)},m(u,m){E(e,u,m),i=!0},p(u,m){let f=m&9213?jt(l,[m&4&&{class:"push-button "+u[2]},m&1&&{"aria-pressed":u[0]},m&128&&{outline:u[7]},m&8&&{info:u[3]},m&16&&{success:u[4]},m&32&&{warning:u[5]},m&64&&{danger:u[6]},m&512&&{round:u[9]},m&256&&{icon:u[8]},m&8192&&ko(u[13])]):{};!n&&m&2&&(n=!0,f.element=u[1],Ue(()=>n=!1)),e.$set(f)},i(u){i||($(e.$$.fragment,u),i=!0)},o(u){y(e.$$.fragment,u),i=!1},d(u){C(e,u)}}}function x$(t){let e,n,i,l=[{class:"push-button "+t[2]},{"aria-pressed":t[0]},{outline:t[7]},{info:t[3]},{success:t[4]},{warning:t[5]},{danger:t[6]},{round:t[9]},{icon:t[8]},t[13]];function r(u){t[15](u)}let a={$$slots:{default:[H$]},$$scope:{ctx:t}};for(let u=0;u<l.length;u+=1)a=tt(a,l[u]);return t[1]!==void 0&&(a.element=t[1]),e=new De({props:a}),_e.push(()=>Ge(e,"element",r)),e.$on("keydown",t[10]),e.$on("mousedown",t[11]),{c(){S(e.$$.fragment)},m(u,m){E(e,u,m),i=!0},p(u,m){let f=m&9213?jt(l,[m&4&&{class:"push-button "+u[2]},m&1&&{"aria-pressed":u[0]},m&128&&{outline:u[7]},m&8&&{info:u[3]},m&16&&{success:u[4]},m&32&&{warning:u[5]},m&64&&{danger:u[6]},m&512&&{round:u[9]},m&256&&{icon:u[8]},m&8192&&ko(u[13])]):{};m&131072&&(f.$$scope={dirty:m,ctx:u}),!n&&m&2&&(n=!0,f.element=u[1],Ue(()=>n=!1)),e.$set(f)},i(u){i||($(e.$$.fragment,u),i=!0)},o(u){y(e.$$.fragment,u),i=!1},d(u){C(e,u)}}}function H$(t){let e,n=t[14].default,i=Dt(n,t,t[17],null);return{c(){i&&i.c()},m(l,r){i&&i.m(l,r),e=!0},p(l,r){i&&i.p&&(!e||r&131072)&&It(i,n,l,l[17],e?At(n,l[17],r,null):Ot(l[17]),null)},i(l){e||($(i,l),e=!0)},o(l){y(i,l),e=!1},d(l){i&&i.d(l)}}}function P$(t){let e,n,i,l,r=[x$,O$],a=[];function u(m,f){return m[12].default?0:1}return e=u(t,-1),n=a[e]=r[e](t),{c(){n.c(),i=Tt()},m(m,f){a[e].m(m,f),s(m,i,f),l=!0},p(m,[f]){let c=e;e=u(m,f),e===c?a[e].p(m,f):(We(),y(a[c],1,1,()=>{a[c]=null}),Ve(),n=a[e],n?n.p(m,f):(n=a[e]=r[e](m),n.c()),$(n,1),n.m(i.parentNode,i))},i(m){l||($(n),l=!0)},o(m){y(n),l=!1},d(m){m&&o(i),a[e].d(m)}}}function N$(t,e,n){let i=["class","pressed","info","success","warning","danger","outline","icon","round","element"],l=kt(e,i),{$$slots:r={},$$scope:a}=e,u=da(r),{class:m=""}=e,{pressed:f=!1}=e,{info:c=!1}=e,{success:g=!1}=e,{warning:b=!1}=e,{danger:h=!1}=e,{outline:v=!1}=e,{icon:w=void 0}=e,{round:k=void 0}=e,{element:_=void 0}=e,M=rt();function O(A){(A.key==="Enter"||A.key===" ")&&(A.preventDefault(),n(0,f=!f),M("change",{...A,pressed:f}))}function D(A){n(0,f=!f),M("change",{...A,pressed:f})}function L(A){_=A,n(1,_)}function T(A){_=A,n(1,_)}return t.$$set=A=>{e=tt(tt({},e),Zt(A)),n(13,l=kt(e,i)),"class"in A&&n(2,m=A.class),"pressed"in A&&n(0,f=A.pressed),"info"in A&&n(3,c=A.info),"success"in A&&n(4,g=A.success),"warning"in A&&n(5,b=A.warning),"danger"in A&&n(6,h=A.danger),"outline"in A&&n(7,v=A.outline),"icon"in A&&n(8,w=A.icon),"round"in A&&n(9,k=A.round),"element"in A&&n(1,_=A.element),"$$scope"in A&&n(17,a=A.$$scope)},[f,_,m,c,g,b,h,v,w,k,O,D,u,l,r,L,T,a]}var Oc=class extends fe{constructor(e){super(),de(this,e,N$,P$,me,{class:2,pressed:0,info:3,success:4,warning:5,danger:6,outline:7,icon:8,round:9,element:1})}},ft=Oc;function Zb(t,{from:e,to:n},i={}){let l=getComputedStyle(t),r=l.transform==="none"?"":l.transform,[a,u]=l.transformOrigin.split(" ").map(parseFloat),m=e.left+e.width*a/n.width-(n.left+a),f=e.top+e.height*u/n.height-(n.top+u),{delay:c=0,duration:g=h=>Math.sqrt(h)*120,easing:b=Ko}=i;return{delay:c,duration:_t(g)?g(Math.sqrt(m*m+f*f)):g,easing:b,css:(h,v)=>{let w=v*m,k=v*f,_=h+v*e.width/n.width,M=h+v*e.height/n.height;return`transform: ${r} translate(${w}px, ${k}px) scale(${_}, ${M});`}}}var qa=Yn({}),uo=Yn({}),Jb=Yn({}),ss={},ls=ho(sn),Po=(t,e)=>Zi(t,{duration:ls,x:500,opacity:1,...e}),Ba=(t,e)=>Zi(t,{duration:ls,y:-50,...e}),Qb=(t,e)=>Zi(t,{duration:ls,y:50,...e}),Ra=(t,e,n)=>Zb(t,e,{duration:ls,...n}),[e_,t_]=s1({duration:t=>t,fallback(t,e){let n=getComputedStyle(t),i=n.transform==="none"?"":n.transform;return{duration:e.duration||ls,css:l=>`transform: ${i} scale(${l}); opacity: ${l}`}}});function ja(t,e){if(!t.showProgress||e&&e===document.activeElement)return;let n=t.id,i=q$(n);ss[n]=setInterval(()=>{i+=1,F$(n,i),B$(n,i),i>=110&&(clearInterval(ss[n]),No(n))},Math.round(t.timeout/100))}function F$(t,e){Jb.update(n=>(n[t]=e,n))}function q$(t){return(ho(Jb)||{})[t]||0}function B$(t,e){let n=document.querySelector(`[data-id="${t}"] .notification-progress`);n&&(n.style.width=`${e}%`)}function xc(t){clearInterval(ss[t.id])}function Ci(t,e="info",n=5e3,i,l=()=>{}){let r=Xe(),a=typeof n=="number",u=new Date().getTime();return qa.update(m=>(m[r]={type:e,msg:t,id:r,timeout:n,cb:l,showProgress:a,btn:i,timestamp:u},m)),r}function No(t){return new Promise(e=>{qa.update(n=>(R$(n[t]),delete n[t],n)),requestAnimationFrame(e)})}function R$(t){t&&(t=t1(t,["type","msg","id","timestamp"]),uo.update(e=>(e[t.id]=t,e)))}function Hc(t){return new Promise(e=>{uo.update(n=>(delete n[t],n)),requestAnimationFrame(e)})}function za(t,e){if(!t)return;let n=t.querySelector(`[data-id="${e}"]`),i=t.querySelectorAll(".notification");if(!i||!i.length)return;let l=Array.from(i).indexOf(n);return l<i.length-1?i[l+1]:l>0?i[l-1]:i[0]}function n_(t,e,n){let i=t.slice();return i[18]=e[n],i}function j$(t){let e,n,i,l,r;return l=new De({props:{text:!0,class:"btn-close",$$slots:{default:[W$]},$$scope:{ctx:t}}}),l.$on("click",t[11]),{c(){e=p("h2"),e.textContent="No recent notifications",n=d(),i=p("div"),S(l.$$.fragment),x(i,"class","notification-archive-buttons")},m(a,u){s(a,e,u),s(a,n,u),s(a,i,u),E(l,i,null),r=!0},p(a,u){let m={};u&2097152&&(m.$$scope={dirty:u,ctx:a}),l.$set(m)},i(a){r||($(l.$$.fragment,a),r=!0)},o(a){y(l.$$.fragment,a),r=!1},d(a){a&&(o(e),o(n),o(i)),C(l)}}}function z$(t){let e,n,i,l,r,a,u,m;return n=new De({props:{icon:"chevronRight",text:!0,$$slots:{default:[V$]},$$scope:{ctx:t}}}),n.$on("click",t[5]),r=new De({props:{text:!0,$$slots:{default:[U$]},$$scope:{ctx:t}}}),r.$on("click",t[6]),u=new De({props:{text:!0,class:"btn-close",$$slots:{default:[Y$]},$$scope:{ctx:t}}}),u.$on("click",t[10]),{c(){e=p("h2"),S(n.$$.fragment),i=d(),l=p("div"),S(r.$$.fragment),a=d(),S(u.$$.fragment),x(l,"class","notification-archive-buttons")},m(f,c){s(f,e,c),E(n,e,null),s(f,i,c),s(f,l,c),E(r,l,null),q(l,a),E(u,l,null),m=!0},p(f,c){let g={};c&2097160&&(g.$$scope={dirty:c,ctx:f}),n.$set(g);let b={};c&2097152&&(b.$$scope={dirty:c,ctx:f}),r.$set(b);let h={};c&2097152&&(h.$$scope={dirty:c,ctx:f}),u.$set(h)},i(f){m||($(n.$$.fragment,f),$(r.$$.fragment,f),$(u.$$.fragment,f),m=!0)},o(f){y(n.$$.fragment,f),y(r.$$.fragment,f),y(u.$$.fragment,f),m=!1},d(f){f&&(o(e),o(i),o(l)),C(n),C(r),C(u)}}}function W$(t){let e;return{c(){e=ne("\xD7")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function V$(t){let e,n=t[3].length+"",i,l;return{c(){e=ne("Recent notifications ("),i=ne(n),l=ne(")")},m(r,a){s(r,e,a),s(r,i,a),s(r,l,a)},p(r,a){a&8&&n!==(n=r[3].length+"")&&je(i,n)},d(r){r&&(o(e),o(i),o(l))}}}function U$(t){let e;return{c(){e=ne("Clear all")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function Y$(t){let e;return{c(){e=ne("\xD7")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function i_(t){let e=[],n=new Map,i,l,r=Ye(t[3]),a=u=>u[18].id;for(let u=0;u<r.length;u+=1){let m=n_(t,r,u),f=a(m);n.set(f,e[u]=o_(f,m))}return{c(){for(let u=0;u<e.length;u+=1)e[u].c();i=Tt()},m(u,m){for(let f=0;f<e.length;f+=1)e[f]&&e[f].m(u,m);s(u,i,m),l=!0},p(u,m){if(m&152){r=Ye(u[3]),We();for(let f=0;f<e.length;f+=1)e[f].r();e=li(e,m,a,1,u,r,n,i.parentNode,$a,o_,i,n_);for(let f=0;f<e.length;f+=1)e[f].a();Ve()}},i(u){if(!l){for(let m=0;m<r.length;m+=1)$(e[m]);l=!0}},o(u){for(let m=0;m<e.length;m+=1)y(e[m]);l=!1},d(u){u&&o(i);for(let m=0;m<e.length;m+=1)e[m].d(u)}}}function o_(t,e){let n,i,l=e[18].msg+"",r,a,u,m=Nd(e[18].timestamp,e[4])+"",f,c,g,b,h,v,w,k,_,M=Le,O,D,L;function T(){return e[12](e[18])}function A(...H){return e[13](e[18],...H)}return{key:t,first:null,c(){n=p("div"),i=p("div"),a=d(),u=p("div"),f=ne(m),c=d(),g=p("button"),g.textContent="\xD7",b=d(),x(i,"class","notification-msg"),x(i,"role",r=e[18].type==="info"?"status":"alert"),x(u,"class","notification-timestamp"),x(g,"class","notification-close"),x(n,"tabindex","0"),x(n,"data-id",h=e[18].id),x(n,"class",v="notification notification-"+e[18].type+" archived"),this.first=n},m(H,I){s(H,n,I),q(n,i),i.innerHTML=l,q(n,a),q(n,u),q(u,f),q(n,c),q(n,g),q(n,b),O=!0,D||(L=[ye(g,"click",pa(T)),ye(n,"keydown",A)],D=!0)},p(H,I){e=H,(!O||I&8)&&l!==(l=e[18].msg+"")&&(i.innerHTML=l),(!O||I&8&&r!==(r=e[18].type==="info"?"status":"alert"))&&x(i,"role",r),(!O||I&24)&&m!==(m=Nd(e[18].timestamp,e[4])+"")&&je(f,m),(!O||I&8&&h!==(h=e[18].id))&&x(n,"data-id",h),(!O||I&8&&v!==(v="notification notification-"+e[18].type+" archived"))&&x(n,"class",v)},r(){_=n.getBoundingClientRect()},f(){_a(n),M(),jo(n,_)},a(){M(),M=ba(n,_,Ra,{})},i(H){O||(H&&en(()=>{O&&(k&&k.end(1),w=wo(n,e[8],{key:e[18].id}),w.start())}),O=!0)},o(H){w&&w.invalidate(),H&&(k=yo(n,e[9],{})),O=!1},d(H){H&&o(n),H&&k&&k.end(),D=!1,Re(L)}}}function G$(t){let e,n,i,l,r,a,u,m=[z$,j$],f=[];function c(b,h){return b[3].length?0:1}i=c(t,-1),l=f[i]=m[i](t);let g=t[3].length&&t[1]&&i_(t);return{c(){e=p("div"),n=p("header"),l.c(),r=d(),g&&g.c(),x(e,"class","notification-archive"),e.inert=a=!t[0],ie(e,"expanded",t[1]),ie(e,"inert",!t[0])},m(b,h){s(b,e,h),q(e,n),f[i].m(n,null),q(e,r),g&&g.m(e,null),t[14](e),u=!0},p(b,[h]){let v=i;i=c(b,h),i===v?f[i].p(b,h):(We(),y(f[v],1,1,()=>{f[v]=null}),Ve(),l=f[i],l?l.p(b,h):(l=f[i]=m[i](b),l.c()),$(l,1),l.m(n,null)),b[3].length&&b[1]?g?(g.p(b,h),h&10&&$(g,1)):(g=i_(b),g.c(),$(g,1),g.m(e,null)):g&&(We(),y(g,1,1,()=>{g=null}),Ve()),(!u||h&1&&a!==(a=!b[0]))&&(e.inert=a),(!u||h&2)&&ie(e,"expanded",b[1]),(!u||h&1)&&ie(e,"inert",!b[0])},i(b){u||($(l),$(g),u=!0)},o(b){y(l),y(g),u=!1},d(b){b&&o(e),f[i].d(),g&&g.d(),t[14](null)}}}function K$(t,e,n){let i;un(t,sn,L=>n(16,i=L));let{show:l=!1}=e,{expanded:r=!1}=e,a=i,u,m=[],f,c=new Date().getTime();Nt(()=>{f=setInterval(()=>n(4,c=new Date().getTime()),1e4),uo.subscribe(L=>{n(3,m=Object.values(L).reverse())})}),on(()=>{clearInterval(f)});function g(){n(1,r=!r)}function b(L){L.stopPropagation(),uo.set({})}function h(L,T){if(L.key==="Escape"){let A=za(u,T.id);Hc(T.id).then(()=>{A&&A.focus()})}}function v(L,T){return l?l&&r?Ba(L,T):t_(L,{...T,delay:100,duration:a}):Po(L,{duration:0})}function w(L,T){return l&&r?Po(L):l&&!r?Ba(L,T):Ba(L,{duration:0})}let k=()=>n(0,l=!1),_=()=>n(0,l=!1),M=L=>Hc(L.id),O=(L,T)=>h(T,L);function D(L){_e[L?"unshift":"push"](()=>{u=L,n(2,u)})}return t.$$set=L=>{"show"in L&&n(0,l=L.show),"expanded"in L&&n(1,r=L.expanded)},t.$$.update=()=>{t.$$.dirty&5&&!l&&u&&u.addEventListener("transitionend",()=>n(1,r=!1),{once:!0})},[l,r,u,m,c,g,b,h,v,w,k,_,M,O,D]}var Pc=class extends fe{constructor(e){super(),de(this,e,K$,G$,me,{show:0,expanded:1})}},Nc=Pc;function s_(t,e,n){let i=t.slice();return i[33]=e[n],i}function l_(t){let e,n,i;function l(a){t[16](a)}let r={icon:"bell",outline:t[2],round:t[1],class:"notification-center-button "+t[10]+" "+t[5]};return t[11]!==void 0&&(r.pressed=t[11]),e=new ft({props:r}),_e.push(()=>Ge(e,"pressed",l)),{c(){S(e.$$.fragment)},m(a,u){E(e,a,u),i=!0},p(a,u){let m={};u[0]&4&&(m.outline=a[2]),u[0]&2&&(m.round=a[1]),u[0]&1056&&(m.class="notification-center-button "+a[10]+" "+a[5]),!n&&u[0]&2048&&(n=!0,m.pressed=a[11],Ue(()=>n=!1)),e.$set(m)},i(a){i||($(e.$$.fragment,a),i=!0)},o(a){y(e.$$.fragment,a),i=!1},d(a){C(e,a)}}}function r_(t){let e,n=t[33].btn+"",i,l,r;function a(){return t[17](t[33])}return{c(){e=p("button"),i=ne(n)},m(u,m){s(u,e,m),q(e,i),l||(r=ye(e,"click",Un(a)),l=!0)},p(u,m){t=u,m[0]&16&&n!==(n=t[33].btn+"")&&je(i,n)},d(u){u&&o(e),l=!1,r()}}}function a_(t){let e;return{c(){e=p("div"),e.innerHTML='<div role="progressbar" class="notification-progress"></div>',x(e,"class","notification-progressbar")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function u_(t,e){let n,i,l,r,a,u=e[33].msg+"",m,f,c,g,b,h,v,w,k,_,M,O=Le,D,L,T;l=new zt({props:{name:e[33].type}});let A=e[33].btn&&r_(e);function H(){return e[18](e[33])}let I=e[33].showProgress&&a_(e);function P(){return e[19](e[33])}function N(){return e[20](e[33])}function j(...G){return e[21](e[33],...G)}function K(...G){return e[22](e[33],...G)}function U(...G){return e[23](e[33],...G)}return{key:t,first:null,c(){n=p("div"),i=p("div"),S(l.$$.fragment),r=d(),a=p("div"),f=d(),c=p("div"),A&&A.c(),g=d(),b=p("button"),b.textContent="\xD7",h=d(),I&&I.c(),x(i,"class","notification-icon"),x(a,"class","notification-msg"),x(a,"role",m=e[33].type==="info"?"status":"alert"),x(b,"class","notification-close"),x(c,"class","notification-buttons"),x(n,"class",v="notification notification-"+e[33].type),x(n,"data-id",w=e[33].id),x(n,"tabindex","0"),this.first=n},m(G,F){s(G,n,F),q(n,i),E(l,i,null),q(n,r),q(n,a),a.innerHTML=u,q(n,f),q(n,c),A&&A.m(c,null),q(c,g),q(c,b),q(n,h),I&&I.m(n,null),D=!0,L||(T=[ye(b,"click",pa(H)),ye(n,"mouseover",P),ye(n,"focus",N),ye(n,"mouseleave",j),ye(n,"blur",K),ye(n,"keydown",U)],L=!0)},p(G,F){e=G;let z={};F[0]&16&&(z.name=e[33].type),l.$set(z),(!D||F[0]&16)&&u!==(u=e[33].msg+"")&&(a.innerHTML=u),(!D||F[0]&16&&m!==(m=e[33].type==="info"?"status":"alert"))&&x(a,"role",m),e[33].btn?A?A.p(e,F):(A=r_(e),A.c(),A.m(c,g)):A&&(A.d(1),A=null),e[33].showProgress?I||(I=a_(e),I.c(),I.m(n,null)):I&&(I.d(1),I=null),(!D||F[0]&16&&v!==(v="notification notification-"+e[33].type))&&x(n,"class",v),(!D||F[0]&16&&w!==(w=e[33].id))&&x(n,"data-id",w)},r(){M=n.getBoundingClientRect()},f(){_a(n),O(),jo(n,M)},a(){O(),O=ba(n,M,Ra,{})},i(G){D||($(l.$$.fragment,G),G&&en(()=>{D&&(_&&_.end(1),k=wo(n,Po,{}),k.start())}),D=!0)},o(G){y(l.$$.fragment,G),k&&k.invalidate(),G&&(_=yo(n,e[13],{key:e[33].id})),D=!1},d(G){G&&o(n),C(l),A&&A.d(),I&&I.d(),G&&_&&_.end(),L=!1,Re(T)}}}function f_(t){let e,n,i,l;function r(m){t[24](m)}function a(m){t[25](m)}let u={};return t[11]!==void 0&&(u.show=t[11]),t[7]!==void 0&&(u.expanded=t[7]),e=new Nc({props:u}),_e.push(()=>Ge(e,"show",r)),_e.push(()=>Ge(e,"expanded",a)),{c(){S(e.$$.fragment)},m(m,f){E(e,m,f),l=!0},p(m,f){let c={};!n&&f[0]&2048&&(n=!0,c.show=m[11],Ue(()=>n=!1)),!i&&f[0]&128&&(i=!0,c.expanded=m[7],Ue(()=>i=!1)),e.$set(c)},i(m){l||($(e.$$.fragment,m),l=!0)},o(m){y(e.$$.fragment,m),l=!1},d(m){C(e,m)}}}function X$(t){let e,n,i=[],l=new Map,r,a,u,m=!t[3]&&l_(t),f=Ye(t[4]),c=b=>b[33].id;for(let b=0;b<f.length;b+=1){let h=s_(t,f,b),v=c(h);l.set(v,i[b]=u_(v,h))}let g=!t[3]&&f_(t);return{c(){m&&m.c(),e=d(),n=p("div");for(let b=0;b<i.length;b+=1)i[b].c();r=d(),g&&g.c(),x(n,"class",a="notification-center "+t[0]),ie(n,"show-archive",t[11]),ie(n,"archive-is-visible",t[6]),ie(n,"has-active-notifications",t[9])},m(b,h){m&&m.m(b,h),s(b,e,h),s(b,n,h);for(let v=0;v<i.length;v+=1)i[v]&&i[v].m(n,null);q(n,r),g&&g.m(n,null),t[26](n),u=!0},p(b,h){if(b[3]?m&&(We(),y(m,1,1,()=>{m=null}),Ve()):m?(m.p(b,h),h[0]&8&&$(m,1)):(m=l_(b),m.c(),$(m,1),m.m(e.parentNode,e)),h[0]&16400){f=Ye(b[4]),We();for(let v=0;v<i.length;v+=1)i[v].r();i=li(i,h,c,1,b,f,l,n,$a,u_,r,s_);for(let v=0;v<i.length;v+=1)i[v].a();Ve()}b[3]?g&&(We(),y(g,1,1,()=>{g=null}),Ve()):g?(g.p(b,h),h[0]&8&&$(g,1)):(g=f_(b),g.c(),$(g,1),g.m(n,null)),(!u||h[0]&1&&a!==(a="notification-center "+b[0]))&&x(n,"class",a),(!u||h[0]&2049)&&ie(n,"show-archive",b[11]),(!u||h[0]&65)&&ie(n,"archive-is-visible",b[6]),(!u||h[0]&513)&&ie(n,"has-active-notifications",b[9])},i(b){if(!u){$(m);for(let h=0;h<f.length;h+=1)$(i[h]);$(g),u=!0}},o(b){y(m);for(let h=0;h<i.length;h+=1)y(i[h]);y(g),u=!1},d(b){b&&(o(e),o(n)),m&&m.d(b);for(let h=0;h<i.length;h+=1)i[h].d();g&&g.d(),t[26](null)}}}function Z$(t,e,n){let i,l,r,a,u;un(t,sn,le=>n(28,a=le)),un(t,uo,le=>n(15,u=le));let{class:m=""}=e,{round:f=!1}=e,{outline:c=!1}=e,{hideButton:g=!1}=e,b=Yn(!1);un(t,b,le=>n(11,r=le));let h=a,v=!1,w=!1,k,_=[],M=!0,O=!1;Nt(()=>{document.body.appendChild(k),qa.subscribe(le=>{n(4,_=Object.values(le).reverse()),_.forEach(ee=>{ss[ee.id]||ja(ee)}),_.length>0?n(9,O=!0):setTimeout(()=>n(9,O=!1),a)}),b.subscribe(le=>{M||(le?D():L())}),M&&requestAnimationFrame(()=>M=!1)}),on(()=>{k&&k.remove()});function D(){n(6,v=!0),document.addEventListener("click",T),document.addEventListener("keydown",T)}function L(){document.removeEventListener("click",T),document.removeEventListener("keydown",T),k.querySelector(".notification-archive").addEventListener("transitionend",()=>n(6,v=!1),{once:!0})}function T(le){le.target.closest(".notification-center-button,.notification-archive,.notification-center")||le.type==="keydown"&&le.key!=="Escape"||b.set(!1)}function A(le,ee){return r?w?e_(le,{...ee,duration:h}):Qb(le,ee):Po(le)}function H(le,ee){if(le.key==="Escape"){let X=za(k,ee.id);No(ee.id).then(()=>{X&&X.focus()})}}function I(le){r=le,b.set(r)}let P=le=>le.cb(le.id),N=le=>No(le.id),j=le=>xc(le),K=le=>xc(le),U=(le,ee)=>ja(le,ee.target),G=(le,ee)=>ja(le,ee.target),F=(le,ee)=>H(ee,le);function z(le){r=le,b.set(r)}function V(le){w=le,n(7,w)}function Q(le){_e[le?"unshift":"push"](()=>{k=le,n(8,k)})}return t.$$set=le=>{"class"in le&&n(0,m=le.class),"round"in le&&n(1,f=le.round),"outline"in le&&n(2,c=le.outline),"hideButton"in le&&n(3,g=le.hideButton)},t.$$.update=()=>{t.$$.dirty[0]&32768&&n(5,i=Object.keys(u).length?"has-archived-notifications":""),t.$$.dirty[0]&48&&n(10,l=_.length||i?"has-notifications":"")},[m,f,c,g,_,i,v,w,k,O,l,r,b,A,H,u,I,P,N,j,K,U,G,F,z,V,Q]}var Fc=class extends fe{constructor(e){super(),de(this,e,Z$,X$,me,{class:0,round:1,outline:2,hideButton:3},null,[-1,-1])}},qc=Fc;function J$(t){let e,n,i=t[15].default,l=Dt(i,t,t[14],null);return{c(){e=p("div"),l&&l.c(),x(e,"class","panel-content")},m(r,a){s(r,e,a),l&&l.m(e,null),n=!0},p(r,a){l&&l.p&&(!n||a&16384)&&It(l,i,r,r[14],n?At(i,r[14],a,null):Ot(r[14]),null)},i(r){n||($(l,r),n=!0)},o(r){y(l,r),n=!1},d(r){r&&o(e),l&&l.d(r)}}}function Q$(t){let e,n,i,l,r,a,u,m,f,c,g=t[5]&&m_(t),b=t[15].default,h=Dt(b,t,t[14],null);return{c(){e=p("details"),n=p("summary"),i=ne(t[3]),l=d(),g&&g.c(),a=d(),u=p("div"),h&&h.c(),x(n,"class","panel-header"),n.inert=r=!t[5],x(u,"class","panel-content"),e.open=t[0]},m(v,w){s(v,e,w),q(e,n),q(n,i),q(n,l),g&&g.m(n,null),t[16](n),q(e,a),q(e,u),h&&h.m(u,null),m=!0,f||(c=[ye(e,"keydown",t[11]),ye(e,"click",t[11])],f=!0)},p(v,w){(!m||w&8)&&je(i,v[3]),v[5]?g||(g=m_(v),g.c(),g.m(n,null)):g&&(g.d(1),g=null),(!m||w&32&&r!==(r=!v[5]))&&(n.inert=r),h&&h.p&&(!m||w&16384)&&It(h,b,v,v[14],m?At(b,v[14],w,null):Ot(v[14]),null),(!m||w&1)&&(e.open=v[0])},i(v){m||($(h,v),m=!0)},o(v){y(h,v),m=!1},d(v){v&&o(e),g&&g.d(),t[16](null),h&&h.d(v),f=!1,Re(c)}}}function m_(t){let e,n=Ki("chevronRight")+"";return{c(){e=p("div"),x(e,"class","chevron")},m(i,l){s(i,e,l),e.innerHTML=n},d(i){i&&o(e)}}}function ew(t){let e,n,i,l,r,a=[Q$,J$],u=[];function m(f,c){return f[3]?0:1}return n=m(t,-1),i=u[n]=a[n](t),{c(){e=p("div"),i.c(),x(e,"class",l="panel "+t[2]),e.inert=t[6],ie(e,"collapsible",t[5]),ie(e,"expanded",t[13]),ie(e,"round",t[4]),ie(e,"disabled",t[6]),ie(e,"info",t[7]),ie(e,"success",t[8]),ie(e,"warning",t[9]),ie(e,"danger",t[10])},m(f,c){s(f,e,c),u[n].m(e,null),t[17](e),r=!0},p(f,[c]){let g=n;n=m(f,c),n===g?u[n].p(f,c):(We(),y(u[g],1,1,()=>{u[g]=null}),Ve(),i=u[n],i?i.p(f,c):(i=u[n]=a[n](f),i.c()),$(i,1),i.m(e,null)),(!r||c&4&&l!==(l="panel "+f[2]))&&x(e,"class",l),(!r||c&64)&&(e.inert=f[6]),(!r||c&36)&&ie(e,"collapsible",f[5]),(!r||c&8196)&&ie(e,"expanded",f[13]),(!r||c&20)&&ie(e,"round",f[4]),(!r||c&68)&&ie(e,"disabled",f[6]),(!r||c&132)&&ie(e,"info",f[7]),(!r||c&260)&&ie(e,"success",f[8]),(!r||c&516)&&ie(e,"warning",f[9]),(!r||c&1028)&&ie(e,"danger",f[10])},i(f){r||($(i),r=!0)},o(f){y(i),r=!1},d(f){f&&o(e),u[n].d(),t[17](null)}}}function tw(t,e,n){let{$$slots:i={},$$scope:l}=e,r=rt(),{class:a=""}=e,{title:u=""}=e,{open:m=!1}=e,{round:f=!1}=e,{collapsible:c=!1}=e,{disabled:g=!1}=e,{info:b=!1}=e,{success:h=!1}=e,{warning:v=!1}=e,{danger:w=!1}=e,{element:k=void 0}=e,_,M=m||!u,O={height:0},D={height:0};Nt(L);function L(){let I=m;n(0,m=!0),requestAnimationFrame(()=>{if(!k)return;let P=getComputedStyle(k),N=parseInt(P.borderTopWidth||0,10),j=parseInt(P.borderTopWidth||0,10),K=_?_.offsetHeight:0;O.height=k.getBoundingClientRect().height+"px",D.height=K+N+j+"px",n(0,m=I)})}function T(I){if(!c){(I.type==="click"||I.key==="Enter"||I.key===" ")&&I.preventDefault();return}I||={target:null,type:"click",preventDefault:()=>{}};let P=["BUTTON","INPUT","A","SELECT","TEXTAREA"];I.target&&P.includes(I.target.tagName)||I.target&&I.target.closest(".panel-content")||I.type==="keydown"&&I.key!==" "||(I.preventDefault(),M?(n(13,M=!1),wa(k,O,D).then(()=>{n(0,m=M),r("close")})):(n(13,M=!0),n(0,m=!0),wa(k,D,O).then(()=>r("open"))))}function A(I){_e[I?"unshift":"push"](()=>{_=I,n(12,_)})}function H(I){_e[I?"unshift":"push"](()=>{k=I,n(1,k)})}return t.$$set=I=>{"class"in I&&n(2,a=I.class),"title"in I&&n(3,u=I.title),"open"in I&&n(0,m=I.open),"round"in I&&n(4,f=I.round),"collapsible"in I&&n(5,c=I.collapsible),"disabled"in I&&n(6,g=I.disabled),"info"in I&&n(7,b=I.info),"success"in I&&n(8,h=I.success),"warning"in I&&n(9,v=I.warning),"danger"in I&&n(10,w=I.danger),"element"in I&&n(1,k=I.element),"$$scope"in I&&n(14,l=I.$$scope)},[m,k,a,u,f,c,g,b,h,v,w,T,_,M,l,i,A,H]}var Bc=class extends fe{constructor(e){super(),de(this,e,tw,ew,me,{class:2,title:3,open:0,round:4,collapsible:5,disabled:6,info:7,success:8,warning:9,danger:10,element:1,toggle:11})}get toggle(){return this.$$.ctx[11]}},hn=Bc;function d_(t){return getComputedStyle(t).flexDirection.replace("-reverse","")}function Wa(t,e){let n=getComputedStyle(t);return parseFloat(n[e])}function c_(t){let e=getComputedStyle(t),n=parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),i=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight);return t.getBoundingClientRect().width-n-i}function p_(t){let e=getComputedStyle(t),n=parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),i=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom);return t.getBoundingClientRect().height-n-i}var h_=t=>Wa(t,"minHeight"),g_=t=>Wa(t,"minWidth"),b_=t=>Wa(t,"maxWidth"),__=t=>Wa(t,"maxHeight");function nw(t){let e,n,i,l;return{c(){e=p("div"),x(e,"class",n="splitter "+t[1]),ie(e,"vertical",t[2]),ie(e,"is-dragging",t[3])},m(r,a){s(r,e,a),t[9](e),i||(l=ye(e,"mousedown",t[4]),i=!0)},p(r,[a]){a&2&&n!==(n="splitter "+r[1])&&x(e,"class",n),a&6&&ie(e,"vertical",r[2]),a&10&&ie(e,"is-dragging",r[3])},i:Le,o:Le,d(r){r&&o(e),t[9](null),i=!1,l()}}}function iw(t,e,n){let{class:i=""}=e,{element:l=void 0}=e,r=rt(),a=8,u=a/2,m={},f=!1,c,g,b,h,v,w,k=!1,_;Nt(()=>{requestAnimationFrame(T)});function M(){L(m.collapsed?"max":"min",!0)}function O(){L("min",!0)}function D(){L("max",!0)}function L(j,K=!1){let U=f?"height":"width",G=f?"Height":"Width",F={};(!j||j==="default")&&(F[U]=b[U]),j==="min"?F[U]=b["min"+G]:j==="max"?F[U]=b["max"+G]:typeof j=="number"&&(F[U]=j),A(F,K)}function T(){g=l.previousElementSibling,c=l.parentElement,n(2,f=d_(c)==="column"),b=g.getBoundingClientRect(),f?(b.minHeight=h_(g),b.maxHeight=Math.min(p_(l.parentElement),__(g))):(b.minWidth=g_(g),b.maxWidth=Math.min(c_(l.parentElement),b_(g))),A(b),g.style.flex="unset",g.style.overflow="auto",f?n(0,l.style.height=a+"px",l):n(0,l.style.width=a+"px",l),l&&l.nextElementSibling&&n(0,l.nextElementSibling.style.overflow="auto",l)}function A(j,K=!1){let U,G;if(K){U=g.style.transition,G=l.style.transition;let F=sn+"ms ease-out";g.style.transition=`width ${F}, height ${F}`,n(0,l.style.transition=`left ${F}, top ${F}`,l)}if(f){g.style.height=j.height+"px",n(0,l.style.top=j.height-u+"px",l);let F=b.minHeight===j.height;m.height=j.height,m.collapsed=F,r("change",m)}else{g.style.width=j.width+"px",n(0,l.style.left=j.width-u+"px",l);let F=b.minWidth===j.width;m.width=j.width,m.collapsed=F,r("change",m)}K&&setTimeout(()=>{g.style.transition=U,n(0,l.style.transition=G,l),r("changed",m)},sn)}function H(j){k||(n(3,k=!0),j.preventDefault(),document.addEventListener("mouseup",P),document.addEventListener("mousemove",I),_=document.body.style.cursor,document.body.style.cursor=(f?"ns":"ew")+"-resize",f?v=Yo(j):h=Oi(j),w=g.getBoundingClientRect(),A(w))}function I(j){if(j.preventDefault(),j.stopPropagation(),f){let K=w.height+Yo(j)-v;K<b.minHeight&&(K=b.minHeight),K>b.maxHeight&&(K=b.maxHeight),A({height:K})}else{let K=w.width+Oi(j)-h;K<b.minWidth&&(K=b.minWidth),K>b.maxWidth&&(K=b.maxWidth),A({width:K})}}function P(){k&&(n(3,k=!1),document.removeEventListener("mouseup",P),document.removeEventListener("mousemove",I),document.body.style.cursor=_,r("changed",m))}function N(j){_e[j?"unshift":"push"](()=>{l=j,n(0,l)})}return t.$$set=j=>{"class"in j&&n(1,i=j.class),"element"in j&&n(0,l=j.element)},[l,i,f,k,H,M,O,D,L,N]}var Rc=class extends fe{constructor(e){super(),de(this,e,iw,nw,me,{class:1,element:0,toggle:5,collapse:6,expand:7,setSize:8})}get toggle(){return this.$$.ctx[5]}get collapse(){return this.$$.ctx[6]}get expand(){return this.$$.ctx[7]}get setSize(){return this.$$.ctx[8]}},Va=Rc;function ow(t){let e,n,i,l,r,a,u=t[14].default,m=Dt(u,t,t[13],null);return{c(){e=p("div"),n=p("table"),m&&m.c(),x(e,"class",i="table "+t[1]),ie(e,"round",t[2]),ie(e,"selectable",t[3])},m(f,c){s(f,e,c),q(e,n),m&&m.m(n,null),t[15](e),l=!0,r||(a=[ye(e,"click",t[5]),ye(e,"focus",t[4],!0),ye(e,"keydown",t[7]),ye(e,"dblclick",t[6])],r=!0)},p(f,[c]){m&&m.p&&(!l||c&8192)&&It(m,u,f,f[13],l?At(u,f[13],c,null):Ot(f[13]),null),(!l||c&2&&i!==(i="table "+f[1]))&&x(e,"class",i),(!l||c&6)&&ie(e,"round",f[2]),(!l||c&10)&&ie(e,"selectable",f[3])},i(f){l||($(m,f),l=!0)},o(f){y(m,f),l=!1},d(f){f&&o(e),m&&m.d(f),t[15](null),r=!1,Re(a)}}}function Ua(t){return!t||!t.target||t.target===document?!1:!!(["INPUT","TEXTAREA","SELECT","BUTTON"].includes(t.target.tagName)||t.target.closest(".dialog,.drawer"))}function sw(t,e,n){let i,{$$slots:l={},$$scope:r}=e,a=rt(),{class:u=""}=e,{selectable:m=!0}=e,{round:f=!1}=e,{scrollContainer:c=void 0}=e,{scrollCorrectionOffset:g=0}=e,{element:b=void 0}=e,{rowSelector:h="tbody tr"}=e,{data:v={}}=e,w=-1,k=0,_,M;Nt(()=>{Object.assign(b.dataset,v),i&&(D(),requestAnimationFrame(()=>{let F=b&&b.querySelector("thead");F&&(k=F.offsetHeight)}))}),on(()=>{i&&L()});function O(F=!0){let V=(F?b.parentNode:b).querySelectorAll(`.table ${h}`);return V&&V.length?Array.from(V):[]}function D(){O(!1).forEach(F=>F.setAttribute("tabindex",0))}function L(){O(!1).forEach(F=>F.removeAttribute("tabindex"))}function T(F=!1){let z=O();if(w<=0)return;w-=1;let V=z[w];V.focus(),F||a("select",{selectedItem:V})}function A(F=!1){let z=O();if(w>=z.length-1)return;w+=1;let V=z[w];V.focus(),F||a("select",{selectedItem:V})}function H(){let F;return c&&(typeof c=="string"?F=b.closest(c):F=c),F||b}function I(F=!1){let V=O()[w];if(!V)return;V!=document.activeElement&&V.focus();let Q=H();if(!Q||!Q.scrollTo)return;let le=Q===b?0:b.offsetTop,ee=V.offsetTop-k+le+parseFloat(g);Q.scrollTop>ee?Q.scrollTo({top:Math.round(ee)}):(ee=V.offsetTop+V.offsetHeight-Q.offsetHeight+k+le+parseFloat(g)+4,Q.scrollTop<ee&&Q.scrollTo({top:Math.round(ee)})),F||a("select",{selectedItem:V})}function P(F){if(!F)return;w=O().findIndex(V=>V===F),I(!0)}function N(F){if(!i||!b.contains(F.target)||!F||!F.target||Ua(F)||F.target===document||!F.target.matches(h))return;let z=F.target.closest(h);z&&(P(z),a("click",{event:F,selectedItem:z}))}function j(F){if(!b.contains(F.target)||Ua(F))return;_&&clearTimeout(_),_=setTimeout(()=>a("select",{event:F,selectedItem:z}),300);let z=F.target.closest(h);z&&(P(z),a("click",{event:F,selectedItem:z}))}function K(F){i&&b.contains(F.target)&&(Ua(F)||(_&&clearTimeout(_),j(F),requestAnimationFrame(()=>{let z=O()[w];a("dblclick",{event:F,selectedItem:z})})))}function U(F){if(!i||!b.contains(F.target)||Ua(F))return;if((F.key==="ArrowUp"||F.key==="k")&&(F.preventDefault(),T()),(F.key==="ArrowDown"||F.key==="j")&&(F.preventDefault(),A()),(F.key==="ArrowLeft"||F.key==="g"&&M==="g")&&(F.preventDefault(),w=-1,A()),F.key==="ArrowRight"||F.key==="G"){F.preventDefault();let V=O();w=V&&V.length-2,A()}M=F.key;let z=O()[w];a("keydown",{event:F,key:F.key,selectedItem:z})}function G(F){_e[F?"unshift":"push"](()=>{b=F,n(0,b)})}return t.$$set=F=>{"class"in F&&n(1,u=F.class),"selectable"in F&&n(8,m=F.selectable),"round"in F&&n(2,f=F.round),"scrollContainer"in F&&n(9,c=F.scrollContainer),"scrollCorrectionOffset"in F&&n(10,g=F.scrollCorrectionOffset),"element"in F&&n(0,b=F.element),"rowSelector"in F&&n(11,h=F.rowSelector),"data"in F&&n(12,v=F.data),"$$scope"in F&&n(13,r=F.$$scope)},t.$$.update=()=>{t.$$.dirty&256&&n(3,i=m===!0||m==="true")},[b,u,f,i,N,j,K,U,m,c,g,h,v,r,l,G]}var jc=class extends fe{constructor(e){super(),de(this,e,sw,ow,me,{class:1,selectable:8,round:2,scrollContainer:9,scrollCorrectionOffset:10,element:0,rowSelector:11,data:12})}},rs=jc;function v_(t){let e,n,i,l,r,a,u=t[13].default,m=Dt(u,t,t[12],null);return{c(){e=p("div"),n=p("div"),i=p("div"),m&&m.c(),x(i,"class","popover-content tooltip-content"),x(n,"class",l="popover tooltip "+t[1]),x(n,"role","tooltip"),x(e,"class",r="popover-plate popover-"+t[6]+" tooltip-plate"),ie(e,"opened",t[7]),ie(e,"info",t[2]),ie(e,"success",t[3]),ie(e,"warning",t[4]),ie(e,"danger",t[5])},m(f,c){s(f,e,c),q(e,n),q(n,i),m&&m.m(i,null),t[14](e),a=!0},p(f,c){m&&m.p&&(!a||c&4096)&&It(m,u,f,f[12],a?At(u,f[12],c,null):Ot(f[12]),null),(!a||c&2&&l!==(l="popover tooltip "+f[1]))&&x(n,"class",l),(!a||c&64&&r!==(r="popover-plate popover-"+f[6]+" tooltip-plate"))&&x(e,"class",r),(!a||c&192)&&ie(e,"opened",f[7]),(!a||c&68)&&ie(e,"info",f[2]),(!a||c&72)&&ie(e,"success",f[3]),(!a||c&80)&&ie(e,"warning",f[4]),(!a||c&96)&&ie(e,"danger",f[5])},i(f){a||($(m,f),a=!0)},o(f){y(m,f),a=!1},d(f){f&&o(e),m&&m.d(f),t[14](null)}}}function lw(t){let e,n,i=t[7]&&v_(t);return{c(){i&&i.c(),e=Tt()},m(l,r){i&&i.m(l,r),s(l,e,r),n=!0},p(l,[r]){l[7]?i?(i.p(l,r),r&128&&$(i,1)):(i=v_(l),i.c(),$(i,1),i.m(e.parentNode,e)):i&&(We(),y(i,1,1,()=>{i=null}),Ve())},i(l){n||($(i),n=!0)},o(l){y(i),n=!1},d(l){l&&o(e),i&&i.d(l)}}}function rw(t,e,n){let{$$slots:i={},$$scope:l}=e,{target:r=""}=e,{delay:a=0}=e,{position:u="top"}=e,{offset:m=2}=e,{class:f=""}=e,{info:c=!1}=e,{success:g=!1}=e,{warning:b=!1}=e,{danger:h=!1}=e,{element:v=void 0}=e,w=u,k=!1,_,M,O,D=!1,L;Nt(()=>{L=r?document.querySelector("#"+r):document.body,G()}),on(F),Cn(H);function T(V){M&&(clearTimeout(M),M=null),!(k||_)&&(_=setTimeout(()=>A(V),parseFloat(a)||0))}function A(V){n(7,k=!0),D=!1,_=null,O=V.type,requestAnimationFrame(()=>{v.parentElement!==document.body&&document.body.appendChild(v),K(),H()})}function H(){n(6,w=xi({element:v,target:L,alignH:"center",alignV:u,offsetV:+m}))}function I(){D=!0}function P(){n(7,k=!1),U()}function N(V){let Q=L instanceof Node&&V.target instanceof Node&&L.contains(V.target),le=v&&V.target instanceof Node&&v.contains(V.target);if(!((V.type==="mousedown"||V.type==="click")&&Q)&&(_&&O!=="click"&&(clearTimeout(_),_=null),!!k)){if(V.type==="click"||V.type==="mousedown"){if(Q||le)return;P()}if(O==="mouseover"&&V.type==="mouseout")return M=setTimeout(P,50);if(O==="focus"&&V.type==="blur"&&!D||O==="mousedown"&&V.type==="mousedown"||V.type==="keydown")return P()}}function j(V){V.key==="Escape"&&N(V)}function K(){v&&(v.addEventListener("mousedown",I),v.addEventListener("focus",T),v.addEventListener("blur",N),v.addEventListener("mouseover",T),v.addEventListener("mouseout",N),document.addEventListener("keydown",j))}function U(){v&&(v.removeEventListener("mousedown",I),v.removeEventListener("focus",T),v.removeEventListener("blur",N),v.removeEventListener("mouseover",T),v.removeEventListener("mouseout",N),document.removeEventListener("keydown",j))}function G(){L&&(L.addEventListener("focus",T),L.addEventListener("blur",N),L.addEventListener("mouseover",T),L.addEventListener("mouseout",N))}function F(){L&&(L.removeEventListener("focus",T),L.removeEventListener("blur",N),L.removeEventListener("mouseover",T),L.removeEventListener("mouseout",N))}function z(V){_e[V?"unshift":"push"](()=>{v=V,n(0,v)})}return t.$$set=V=>{"target"in V&&n(8,r=V.target),"delay"in V&&n(9,a=V.delay),"position"in V&&n(10,u=V.position),"offset"in V&&n(11,m=V.offset),"class"in V&&n(1,f=V.class),"info"in V&&n(2,c=V.info),"success"in V&&n(3,g=V.success),"warning"in V&&n(4,b=V.warning),"danger"in V&&n(5,h=V.danger),"element"in V&&n(0,v=V.element),"$$scope"in V&&n(12,l=V.$$scope)},[v,f,c,g,b,h,w,k,r,a,u,m,l,i,z]}var zc=class extends fe{constructor(e){super(),de(this,e,rw,lw,me,{target:8,delay:9,position:10,offset:11,class:1,info:2,success:3,warning:4,danger:5,element:0})}},Vn=zc;function $_(t,e,n){let i=t.slice();return i[9]=e[n],i}function w_(t,e,n){let i=t.slice();return i[12]=e[n],i}function y_(t){let e,n;return{c(){e=p("div"),x(e,"class",n="tree-indent indent-"+t[12])},m(i,l){s(i,e,l)},p(i,l){l&16&&n!==(n="tree-indent indent-"+i[12])&&x(e,"class",n)},d(i){i&&o(e)}}}function k_(t){let e,n,i=Ye(t[2].items),l=[];for(let a=0;a<i.length;a+=1)l[a]=T_($_(t,i,a));let r=a=>y(l[a],1,1,()=>{l[a]=null});return{c(){e=p("ul");for(let a=0;a<l.length;a+=1)l[a].c()},m(a,u){s(a,e,u);for(let m=0;m<l.length;m+=1)l[m]&&l[m].m(e,null);n=!0},p(a,u){if(u&12){i=Ye(a[2].items);let m;for(m=0;m<i.length;m+=1){let f=$_(a,i,m);l[m]?(l[m].p(f,u),$(l[m],1)):(l[m]=T_(f),l[m].c(),$(l[m],1),l[m].m(e,null))}for(We(),m=i.length;m<l.length;m+=1)r(m);Ve()}},i(a){if(!n){for(let u=0;u<i.length;u+=1)$(l[u]);n=!0}},o(a){l=l.filter(Boolean);for(let u=0;u<l.length;u+=1)y(l[u]);n=!1},d(a){a&&o(e),St(l,a)}}}function T_(t){let e,n;return e=new Ya({props:{level:t[3]+1,item:t[9]}}),{c(){S(e.$$.fragment)},m(i,l){E(e,i,l),n=!0},p(i,l){let r={};l&8&&(r.level=i[3]+1),l&4&&(r.item=i[9]),e.$set(r)},i(i){n||($(e.$$.fragment,i),n=!0)},o(i){y(e.$$.fragment,i),n=!1},d(i){C(e,i)}}}function aw(t){let e,n,i,l,r,a,u,m=t[2].name+"",f,c,g,b,h,v,w,k,_,M,O=Ye(t[4]),D=[];for(let T=0;T<O.length;T+=1)D[T]=y_(w_(t,O,T));let L=t[2].items&&t[0]&&k_(t);return{c(){e=p("li"),n=p("div");for(let T=0;T<D.length;T+=1)D[T].c();i=d(),l=p("div"),a=d(),u=p("div"),f=ne(m),w=d(),L&&L.c(),x(l,"class",r="tree-icon tree-"+t[5]+"-icon"),x(u,"class","tree-label"),x(n,"class","tree-node"),x(n,"role",c=t[2].items?"group":"treeitem"),x(n,"aria-selected","false"),x(n,"aria-label",g=t[2].name),x(n,"aria-expanded",b=t[2].items?t[0]:void 0),x(n,"data-type",t[5]),x(n,"data-level",t[3]),x(n,"data-expanded",h=t[2].items?t[0]:void 0),x(n,"data-id",v=t[2].id||void 0),ie(n,"expanded",t[0])},m(T,A){s(T,e,A),q(e,n);for(let H=0;H<D.length;H+=1)D[H]&&D[H].m(n,null);q(n,i),q(n,l),q(n,a),q(n,u),q(u,f),q(e,w),L&&L.m(e,null),t[8](e),k=!0,_||(M=[ye(n,"click",function(){_t(t[2].items?t[6]:void 0)&&(t[2].items?t[6]:void 0).apply(this,arguments)}),ye(n,"key",t[7])],_=!0)},p(T,[A]){if(t=T,A&16){O=Ye(t[4]);let H;for(H=0;H<O.length;H+=1){let I=w_(t,O,H);D[H]?D[H].p(I,A):(D[H]=y_(I),D[H].c(),D[H].m(n,i))}for(;H<D.length;H+=1)D[H].d(1);D.length=O.length}(!k||A&32&&r!==(r="tree-icon tree-"+t[5]+"-icon"))&&x(l,"class",r),(!k||A&4)&&m!==(m=t[2].name+"")&&je(f,m),(!k||A&4&&c!==(c=t[2].items?"group":"treeitem"))&&x(n,"role",c),(!k||A&4&&g!==(g=t[2].name))&&x(n,"aria-label",g),(!k||A&5&&b!==(b=t[2].items?t[0]:void 0))&&x(n,"aria-expanded",b),(!k||A&32)&&x(n,"data-type",t[5]),(!k||A&8)&&x(n,"data-level",t[3]),(!k||A&5&&h!==(h=t[2].items?t[0]:void 0))&&x(n,"data-expanded",h),(!k||A&4&&v!==(v=t[2].id||void 0))&&x(n,"data-id",v),(!k||A&1)&&ie(n,"expanded",t[0]),t[2].items&&t[0]?L?(L.p(t,A),A&5&&$(L,1)):(L=k_(t),L.c(),$(L,1),L.m(e,null)):L&&(We(),y(L,1,1,()=>{L=null}),Ve())},i(T){k||($(L),k=!0)},o(T){y(L),k=!1},d(T){T&&o(e),St(D,T),L&&L.d(),t[8](null),_=!1,Re(M)}}}function uw(t,e,n){let i,l,{item:r={}}=e,{level:a=0}=e,{expanded:u=!1}=e,{element:m=void 0}=e;function f(){n(0,u=!u)}function c(b){let h=b&&b.detail&&b.detail.key;h==="right"?n(0,u=!0):h==="left"&&n(0,u=!1)}function g(b){_e[b?"unshift":"push"](()=>{m=b,n(1,m)})}return t.$$set=b=>{"item"in b&&n(2,r=b.item),"level"in b&&n(3,a=b.level),"expanded"in b&&n(0,u=b.expanded),"element"in b&&n(1,m=b.element)},t.$$.update=()=>{t.$$.dirty&4&&n(5,i=r.items?"folder":"file"),t.$$.dirty&8&&n(4,l=new Array(a).fill(0))},[u,m,r,a,l,i,f,c,g]}var Ya=class extends fe{constructor(e){super(),de(this,e,uw,aw,me,{item:2,level:3,expanded:0,element:1})}},Wc=Ya;function M_(t,e,n){let i=t.slice();return i[23]=e[n],i}function E_(t){let e,n;return e=new Wc({props:{item:t[23]}}),{c(){S(e.$$.fragment)},m(i,l){E(e,i,l),n=!0},p(i,l){let r={};l&4&&(r.item=i[23]),e.$set(r)},i(i){n||($(e.$$.fragment,i),n=!0)},o(i){y(e.$$.fragment,i),n=!1},d(i){C(e,i)}}}function fw(t){let e,n,i,l,r,a=Ye(t[2]),u=[];for(let f=0;f<a.length;f+=1)u[f]=E_(M_(t,a,f));let m=f=>y(u[f],1,1,()=>{u[f]=null});return{c(){e=p("ul");for(let f=0;f<u.length;f+=1)u[f].c();x(e,"class",n="tree "+t[1]),x(e,"role","tree"),x(e,"aria-label",t[3]),x(e,"title",t[3]),x(e,"tabindex","0")},m(f,c){s(f,e,c);for(let g=0;g<u.length;g+=1)u[g]&&u[g].m(e,null);t[7](e),i=!0,l||(r=[ye(e,"focus",t[5]),ye(e,"click",t[4]),ye(e,"keydown",t[6])],l=!0)},p(f,[c]){if(c&4){a=Ye(f[2]);let g;for(g=0;g<a.length;g+=1){let b=M_(f,a,g);u[g]?(u[g].p(b,c),$(u[g],1)):(u[g]=E_(b),u[g].c(),$(u[g],1),u[g].m(e,null))}for(We(),g=a.length;g<u.length;g+=1)m(g);Ve()}(!i||c&2&&n!==(n="tree "+f[1]))&&x(e,"class",n),(!i||c&8)&&x(e,"aria-label",f[3]),(!i||c&8)&&x(e,"title",f[3])},i(f){if(!i){for(let c=0;c<a.length;c+=1)$(u[c]);i=!0}},o(f){u=u.filter(Boolean);for(let c=0;c<u.length;c+=1)y(u[c]);i=!1},d(f){f&&o(e),St(u,f),t[7](null),l=!1,Re(r)}}}function mw(t,e,n){let{class:i=""}=e,{items:l=[]}=e,{title:r=void 0}=e,{element:a}=e,u=rt(),m;function f(){return Array.from(a.querySelectorAll(".tree .tree-node"))}function c(){a.querySelectorAll(".tree .selected").forEach(P=>P.classList.remove("selected"))}function g(P){if(!P||m===P)return;c(),m=P,m.classList.add("selected"),m.scrollIntoView&&m.scrollIntoView({block:"nearest",inline:"nearest"});let N=A();u("select",{selectedItem:m,item:N})}function b(P){g(P.target.closest(".tree-node"))}function h(){g(f()[0])}function v(){let P=m.nextElementSibling;if(!P)return;let N=P.querySelector(".tree-node");N&&g(N)}function w(){let P=f(),N=P.indexOf(m);N>0&&g(P[N-1])}function k(){let P=f(),N=P.indexOf(m);N<P.length-1&&g(P[N+1])}function _(){if(+m.dataset.level===0)return h();g(m.parentElement.parentElement.previousElementSibling)}function M(P){let N=new CustomEvent("key",{detail:{key:P}});m.dispatchEvent(N)}function O(){m.dataset.type==="folder"&&m.dataset.expanded==="true"?M("left"):_()}function D(){m.dataset.type==="folder"&&(m.dataset.expanded==="true"?v():M("right"))}function L(){m.dataset.type==="folder"&&m.click()}function T(P){let N={ArrowUp:w,ArrowDown:k,ArrowLeft:O,ArrowRight:D,Enter:L};typeof N[P.key]=="function"&&(P.preventDefault(),N[P.key](P));let j=A();u("keydown",{event:P,selectedItem:m,item:j})}function A(){let P=m.dataset.id;if(P)return H(P)}function H(P,N){N||(N=l);for(let j,K,U=0;K=N[U];U++){if(K.id==P)return K;if(K.items&&(j=H(P,K.items)),j)return j}}function I(P){_e[P?"unshift":"push"](()=>{a=P,n(0,a)})}return t.$$set=P=>{"class"in P&&n(1,i=P.class),"items"in P&&n(2,l=P.items),"title"in P&&n(3,r=P.title),"element"in P&&n(0,a=P.element)},[a,i,l,r,b,h,T,I]}var Vc=class extends fe{constructor(e){super(),de(this,e,mw,fw,me,{class:1,items:2,title:3,element:0})}},Uc=Vc;document.documentElement.classList.add(Gn()?"mobile":"desktop");var f2=bd(Y_());function Xw(t){let e,n,i;return{c(){e=p("a"),n=ne(t[1]),x(e,"href",i="#"+t[2]),ie(e,"active",t[0]===t[2])},m(l,r){s(l,e,r),q(e,n)},p(l,[r]){r&2&&je(n,l[1]),r&4&&i!==(i="#"+l[2])&&x(e,"href",i),r&5&&ie(e,"active",l[0]===l[2])},i:Le,o:Le,d(l){l&&o(e)}}}function Zw(t,e,n){let{active:i=location.hash.substr(1)}=e,{name:l=""}=e,{hash:r=l.replace(/\s/g,"")}=e;return t.$$set=a=>{"active"in a&&n(0,i=a.active),"name"in a&&n(1,l=a.name),"hash"in a&&n(2,r=a.hash)},[i,l,r]}var qp=class extends fe{constructor(e){super(),de(this,e,Zw,Xw,me,{active:0,name:1,hash:2})}},pt=qp;function Jw(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O;return{c(){e=p("div"),n=p("a"),i=p("img"),r=d(),a=p("h1"),u=p("span"),u.textContent="PerfectThings",m=p("em"),m.textContent="UI",f=p("sub"),f.textContent=`v${window.UI_VERSION||""}`,c=d(),g=p("p"),g.innerHTML=`PerfectThings UI (or <em>@perfectthings/ui</em>) is a beautiful UI framework and a simple design system
	available as an npm module, that strives to provide the best possible UX when building web applications in
	<a href="http://svelte.dev">svelte</a>.`,b=d(),h=p("div"),h.innerHTML=`<h2>Get started</h2> <h3>1. Install as a dev dependency</h3> <pre><code class="language-bash">
		npm i -D @perfectthings/ui
	</code></pre> <h3>2. Import the CSS file</h3> <p>You need to import the <em>docs/ui.css</em> into your bundle or add it as a script to the <em>index.html</em>.<br/>
	There are many ways to do that. We specifically didn&#39;t use any css-to-js imports as these restrict the tools &amp; the setup you may want to have.<br/>
	The easiest way is to add a <em>postinstall</em> script into your <em>package.json</em> that will just copy the file into your <em>dist</em> folder:</p> <pre><code class="language-json">
	&quot;scripts&quot;: {
		&quot;postinstall&quot;: &quot;cp node_modules/@perfectthings/ui/docs/ui.css ./dist/ui.css&quot;
	}
	</code></pre> <p><i>Note:</i> you need to run <em>npm install</em> after adding this line to your <em>package.json</em></p> <h3>3. Svelte components</h3> <p>Just <i>import</i> them from the module, as normal:</p> <pre><code class="language-js">
		import { Button } from &#39;@perfectthings/ui&#39;;
	</code></pre>`,v=d(),w=p("div"),w.innerHTML=`<h2>SvelteKit</h2> <p>This framework works with SvelteKit from version <em>6.4.0</em>.</p> <h3>1. Config</h3> <p>Because this is a purely front-end framework and requires a browser to work, it will not work with <em>SSR</em>, so it needs to be disabled.<br/>
		Create a file: <em>src/routes/+layout.js</em> and add this:</p> <pre><code class="language-js">
	export const ssr = false;
	</code></pre> <h3>2. CSS</h3> <p>If you&#39;re using SvelteKit, you need to add the <em>ui.css</em> file to the <em>static</em> folder,<br/>
	and then either import it into your <em>global.css</em> file or add it to the <em>head</em> section of your <em>app.html</em> file:</p> <pre><code class="language-html">
	&lt;head&gt;
		...
		&lt;link rel=&quot;stylesheet&quot; href=&quot;%sveltekit.assets%/ui.css&quot; /&gt;
	&lt;/head&gt;
	</code></pre> <p>Once that&#39;s done, you can import the components as normal.</p>`,k=d(),_=p("div"),_.innerHTML=`<h2>Development</h2> <p>You need node &amp; npm (obviously). Then, run these:</p> <pre><code class="language-bash">
	git clone git@github.com:perfect-things/ui.git perfectthings-ui
	cd perfectthings-ui
	npm i &amp;&amp; npm start
	</code></pre> <p>A browser window should open with the demo of the components.</p>`,M=d(),O=p("div"),O.innerHTML=`<h2>Resources &amp; Credits</h2> <ul><li><a href="https://developer.apple.com/design/human-interface-guidelines/components/">Human Interface Guidelines</a> from Apple
		</li><li>Icons from <a href="https://tablericons.com">Tabler Icons</a> </li><li><span class="prime-light">Prime Light</span> font from <a href="https://www.fontfabric.com">Fontfabric</a></li></ul> <div class="footer-links"><a href="https://github.com/perfect-things/ui/" title="Github repo" class="github"><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="currentColor" fill-rule="evenodd" d="M64.052 4C28.632 4 0 31.729 0 66.033c0 27.423 18.346 50.635 43.798 58.849 3.18.619 4.348-1.334 4.348-2.976 0-1.439-.106-6.368-.106-11.504-17.818 3.698-21.528-7.396-21.528-7.396-2.864-7.189-7.106-9.037-7.106-9.037-5.832-3.799.424-3.799.424-3.799 6.47.41 9.864 6.368 9.864 6.368 5.726 9.448 14.952 6.777 18.664 5.134.53-4.005 2.228-6.778 4.03-8.318-14.212-1.438-29.164-6.78-29.164-30.609 0-6.777 2.544-12.324 6.574-16.637-.634-1.538-2.862-7.908.64-16.433 0 0 5.406-1.644 17.6 6.368a63.911 63.911 0 0 1 16.014-2.053 63.93 63.93 0 0 1 16.014 2.053c12.196-8.012 17.604-6.368 17.604-6.368 3.5 8.525 1.272 14.893.636 16.433 4.136 4.315 6.574 9.86 6.574 16.64 0 23.827-14.95 29.064-29.268 30.606 2.334 1.95 4.348 5.647 4.348 11.501 0 8.32-.106 14.997-.106 17.049 0 1.644 1.168 3.595 4.348 2.98C109.654 116.666 128 93.456 128 66.033 128.104 31.729 99.366 4 64.052 4Z"></path></svg></a> <a href="https://www.npmjs.com/package/@perfectthings/ui" title="NPM page" class="npm"><svg xmlns="http://www.w3.org/2000/svg" width="365" height="162" viewBox="0 0 365 162"><path fill="currentColor" d="M0 20h365v121.714H182.5V162h-81.111v-20.286H0V20Zm20.278 101.429h40.555V60.57h20.278v60.858h20.278V40.286H20.278v81.143Zm101.389-81.143v101.428h40.555V121.43h40.556V40.286h-81.111Zm40.555 20.285H182.5v40.572h-20.278V60.57Zm60.834-20.285v81.143h40.555V60.57h20.278v60.858h20.278V60.57h20.277v60.858h20.278V40.286H223.056Z"></path><path fill="none" d="M23 124h40.5V63.25h20.25V124H104V43H23zM118 40v104h40.5v-20.8H199V40h-81Zm60.75 62.4H158.5V60.8h20.25v41.6ZM223 43v81h39.333V63.25H282V124h19.667V63.25h19.666V124H341V43z"></path></svg></a> <a href="https://perfectthings.dev" title="PerfectThings website" class="pt"><svg width="256" height="256" viewBox="0 0 256 256" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M113.5 10.8853L33.8257 56.8853C24.8531 62.0656 19.3257 71.6393 19.3257 82V174C19.3257 184.361 24.8531 193.934 33.8257 199.115L46 206.144V168.205C45.9669 167.806 45.95 167.404 45.95 167V89C45.95 83.8196 48.7137 79.0328 53.2 76.4426L120.75 37.4426C125.236 34.8525 130.764 34.8525 135.25 37.4426L202.8 76.4426C207.286 79.0328 210.05 83.8196 210.05 89V167C210.05 172.18 207.286 176.967 202.8 179.557L135.25 218.557C130.764 221.148 125.236 221.148 120.75 218.557L73 190.989V221.732L113.5 245.115C122.473 250.295 133.527 250.295 142.5 245.115L222.174 199.115C231.147 193.934 236.674 184.361 236.674 174V82C236.674 71.6393 231.147 62.0656 222.174 56.8853L142.5 10.8853C133.527 5.70491 122.473 5.70491 113.5 10.8853Z"></path><path d="M80.0469 91.9426L120.75 68.4426C125.236 65.8525 130.764 65.8525 135.25 68.4426L175.953 91.9426C180.44 94.5328 183.203 99.3196 183.203 104.5V151.5C183.203 156.68 180.44 161.467 175.953 164.057L135.25 187.557C130.764 190.148 125.236 190.148 120.75 187.557L80.0469 164.057C75.5606 161.467 72.7969 156.68 72.7969 151.5V104.5C72.7969 99.3196 75.5606 94.5328 80.0469 91.9426ZM154.203 112.871L128 97.743L101.796 112.871V143.128L128 158.256L154.203 143.128V112.871Z"></path></svg></a></div>`,x(i,"class","logo"),Sg(i.src,l="logo.svg")||x(i,"src",l),x(i,"alt","Logo"),x(a,"class","logotype"),x(n,"href","https://ui.perfectthings.dev"),x(e,"class","banner"),x(h,"class","sticky-block"),x(w,"class","sticky-block"),x(_,"class","sticky-block"),x(O,"class","sticky-block")},m(D,L){s(D,e,L),q(e,n),q(n,i),q(n,r),q(n,a),q(a,u),q(a,m),q(a,f),s(D,c,L),s(D,g,L),s(D,b,L),s(D,h,L),s(D,v,L),s(D,w,L),s(D,k,L),s(D,_,L),s(D,M,L),s(D,O,L)},p:Le,i:Le,o:Le,d(D){D&&(o(e),o(c),o(g),o(b),o(h),o(v),o(w),o(k),o(_),o(M),o(O))}}}var Bp=class extends fe{constructor(e){super(),de(this,e,null,Jw,me,{})}},G_=Bp;function Qw(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O,D,L,T,A,H,I,P,N,j,K,U,G,F,z,V,Q,le,ee,X,Z,ge,he,W,Y,J,pe,we,ve,ue,se,xe,ke,ce,be,Ae,ae,$e,re,oe,Oe,Ke,nt,it,lt,Ce,Ne,dt,ht,at,wt,Et,yt,gt,Vt,mt,Ut,st,xt,Ee,qe,Ie,Be,ot,Ft,Gt,qt,Bt,Xt,Rt,Jt,Me,Pe,Yt,Ht,tn,An,mn,In,Se,Je,nn,On,ln,_n,rn,vn,an,gn,Te,te,He,$n,xn,wn,Hn,yn,Pn,kn,Nn,Fn,qn,Tn,Bn,Mn,Rn,En,ci,ti,pi,ni,hi,ii,gi,oi,bi,ji,co,zi,po,ds,nu,cs,iu,ps,ou,hs,su,gs,lu,bs,ru,_s,au,vs,uu,$s,fu,ws,mu,ys,du,ks,cu,Ts,pu,Ms,hu,Es,gu,Cs,bu,Ss,_u,Ls,vu,Ds,$u,As,wu,Is,yu,Os,ku,xs,Tu,Hs,Mu,Ps,Eu,Ns,Cu,Su,Lu,Fs,Du,qs,Au,Bs,Iu,Rs,Ou,js,xu,zs,Hu,Ws,Pu,Vs,Nu,Us,Fu,Ys,qu,Gs,Bu,Ks,Ru,Xs,ju,Zs,zu,Js,Wu,Qs,Vu,el,Uu,tl,Yu,nl,Gu,il,Ku,ol,Xu,sl,Zu,ll,Ju,Qu,ef,rl,tf,al,nf,ul,of,fl,sf,ml,lf,dl,rf,cl,af,pl,uf,hl,ff,gl,mf,bl,df,_l,cf,vl,pf,$l,hf,wl,gf,yl,bf,kl,_f,Tl,vf,Ml,$f,El,wf,Cl,yf,Sl,kf,Ll,Tf,Dl,Mf,Al,Ef,Il,Cf,Ol,Sf,xl,Lf,Hl,Df,Pl,Af,Nl,If,Fl,Of,ql,xf,Bl,Hf,Rl,Pf,jl,Nf,zl,Ff,Wl,qf,Vl,Bf,Ul,Rf,Yl,jf,Gl,zf,Kl,Wf,Xl,Vf,Zl,Uf,Jl,Yf,Ql,Gf,er,Kf,tr,Xf,nr,Zf,ir,Jf,or,Qf,sr,em,lr,tm,rr,nm,ar,im,ur,om,fr,sm,mr,lm,dr,rm,cr,am,pr,um,hr,fm,gr,mm,br,dm,_r,cm,vr,pm,$r,hm,wr,gm,yr,bm,kr,_m,Tr,vm,Mr,$m,Er,wm,Cr,ym,Sr,km,Tm,Mm,Lr,Em,Dr,Cm,Ar,Sm,Ir,Lm,Or,Dm,xr,Am,Hr,Im,Pr,Om,Nr,xm,Fr,Hm,qr,Pm,Br,Nm,Rr,Fm,jr,qm,zr,Bm,Wr,Rm,Vr,jm,Ur,zm,Yr,Wm,Gr,Vm,Um,Ym,Kr,Gm,Xr,Km,Xm,Zm,Zr,Jm,Jr,Qm,Qr,ed,ea,td,ta,nd,na,od,ia,sd,oa,ld,sa,rd,la,ad,ud,fd,ra,md,aa,dd,cd,pd,ua;return{c(){e=p("h1"),e.textContent="Changelog",n=d(),i=p("h2"),i.innerHTML="v9.5.2 <em>(2024-05-15)</em>",l=d(),r=p("ul"),r.innerHTML="<li>Fix <code>--ui-shadow-large</code> in light-mode (was a bit too dark).</li> <li>Animation speed increased from 0.3 to 0.25s.</li> <li>Fix <code>Dialog</code>&#39;s rendering artifacts in Safari.</li>",a=d(),u=p("h2"),u.innerHTML="v9.5.1, v9.5.0 <em>(2024-05-12)</em>",m=d(),f=p("ul"),f.innerHTML="<li>New property for <code>Dialog</code>: <code>modal</code>.</li> <li>Fix square radiobuttons bug.</li>",c=d(),g=p("h2"),g.innerHTML="v9.4.21, v9.4.20 <em>(2024-05-11)</em>",b=d(),h=p("ul"),h.innerHTML="<li>Fix <code>MenuItem</code> descenders were 1px cropped when using some fonts.</li> <li>Fix active style in <code>ButtonToggle</code> was showing despite the disabled attribute.</li> <li>Improve js &amp; css linting and build process.</li> <li>Upgrade dependencies.</li>",v=d(),w=p("h2"),w.innerHTML="v9.4.19 <em>(2024-05-06)</em>",k=d(),_=p("ul"),_.innerHTML="<li>Hide error on <code>InputPassword</code> where <code>zxcvbn</code> wasn&#39;t loaded.</li> <li>Correct icons&#39; alignment.</li> <li>Renamed icons: <code>pluscircle</code> to <code>plusCircle</code> and <code>minuscircle</code> to <code>minusCircle</code>.</li> <li>Fix <code>chartLine</code> icon (there was <code>/&gt;</code> showing in the icon).</li> <li>Fix <code>InputPassword</code> it was focusable when disabled.</li> <li>Fix <code>InputPassword</code> incorrect layout when <code>strength</code> and <code>labelOnTheLeft</code> was set.</li>",M=d(),O=p("h2"),O.innerHTML="v9.4.18 <em>(2024-05-01)</em>",D=d(),L=p("ul"),L.innerHTML="<li>Fix icon alignment in <code>Menu</code>.</li> <li>Fix tests to work with the latest version of svelte testing library.</li>",T=d(),A=p("h2"),A.innerHTML="v9.4.17 <em>(2024-04-14)</em>",H=d(),I=p("ul"),I.innerHTML="<li>InputDate event handling race-condition fix (when enter was pressed).</li>",P=d(),N=p("h2"),N.innerHTML="v9.4.16 <em>(2024-04-13)</em>",j=d(),K=p("ul"),K.innerHTML="<li>Maintenance release; updating dependencies.</li>",U=d(),G=p("h2"),G.innerHTML="v9.4.15, v9.4.14 <em>(2024-02-03)</em>",F=d(),z=p("ul"),z.innerHTML="<li>Fix <code>InputDate</code>&#39;s value setting on <code>Enter</code>, after input was emptied.</li>",V=d(),Q=p("h2"),Q.innerHTML="v9.4.13 <em>(2024-01-26)</em>",le=d(),ee=p("ul"),ee.innerHTML="<li><code>Dialog</code>&#39;s backdrop style tweaks (add some effects to the backdrop).</li> <li><code>Popover</code> tip style tweaks (it&#39;s now offset using full pixels, so the tip&#39;s border will look consistently all around).</li>",X=d(),Z=p("h2"),Z.innerHTML="v9.4.12 <em>(2024-01-25)</em>",ge=d(),he=p("ul"),he.innerHTML="<li>Fix <code>InputRating</code> - it would select value on mouse-down. This - where an error message was displayed above the input - would cause the error message to be removed, and input to slide up, which would unselect the value (while mouse was down), and cause the error message to reappear.</li>",W=d(),Y=p("h2"),Y.innerHTML="v9.4.11, v9.4.10, v9.4.9 <em>(2024-01-20)</em>",J=d(),pe=p("ul"),pe.innerHTML="<li>Minor style tweaks (label-on-the-left alignment).</li> <li>Fix tip positioning when popups are not centered on targets (for <code>Tooltip</code> and <code>Popover</code>).</li>",we=d(),ve=p("h2"),ve.innerHTML="v9.4.8 <em>(2024-01-19)</em>",ue=d(),se=p("ul"),se.innerHTML="<li>Style tweak: reduce margin around <code>Radio</code> items.</li>",xe=d(),ke=p("h2"),ke.innerHTML="v9.4.7 <em>(2024-01-17)</em>",ce=d(),be=p("ul"),be.innerHTML="<li>Fix <code>Range</code> - knob alignment in Safari is off.</li> <li>Fix <code>Range</code> - clicking on ticks should set the value.</li>",Ae=d(),ae=p("h2"),ae.innerHTML="v9.4.6, v9.4.5, v9.4.4, v9.4.3 <em>(2024-01-14)</em>",$e=d(),re=p("ul"),re.innerHTML="<li>More bugfixes, tests and some optimisations of the <code>Combobox</code> component.</li> <li>Fix to allow to clear the value of the <code>Combobox</code> by setting its value to <code>null</code> or <code>[]</code>.</li>",oe=d(),Oe=p("h2"),Oe.innerHTML="v9.4.2 <em>(2024-01-10)</em>",Ke=d(),nt=p("ul"),nt.innerHTML="<li>Minor bugfixes for <code>Popover</code> and <code>Combobox</code>.</li>",it=d(),lt=p("h2"),lt.innerHTML="v9.4.1 <em>(2024-01-07)</em>",Ce=d(),Ne=p("ul"),Ne.innerHTML="<li>Add <code>title</code> attribute to the multiselect <code>Combobox</code> input, so that when it&#39;s too long, the value can be read easily.</li>",dt=d(),ht=p("h2"),ht.innerHTML="v9.4.0 <em>(2024-01-04)</em>",at=d(),wt=p("ul"),wt.innerHTML="<li>Add <code>multiselect</code> option to the <code>Combobox</code>.</li>",Et=d(),yt=p("h2"),yt.innerHTML="v9.3.4, v9.3.3 <em>(2023-12-25)</em>",gt=d(),Vt=p("ul"),Vt.innerHTML="<li>Fix <code>InputDate</code> when picker was not in sync with the input value.</li> <li>Better dropdown alignment for <code>Popover</code> and <code>Menu</code> onScroll (should work if scrolling other elements beside the <code>&lt;body&gt;</code>).</li>",mt=d(),Ut=p("h2"),Ut.innerHTML="v9.3.2, v9.3.1 <em>(2023-12-17)</em>",st=d(),xt=p("ul"),xt.innerHTML="<li>Add <code>$$restProps</code> to some components, to allow passing through custom props.</li> <li>Fix <code>Range</code> offset issue in chromium browsers.</li>",Ee=d(),qe=p("h2"),qe.innerHTML="v9.3.0, v9.2.4 <em>(2023-12-12)</em>",Ie=d(),Be=p("ul"),Be.innerHTML="<li><code>Panel</code> types (color variations).</li> <li>New icons (<code>print</code>).</li> <li>Icon optimisations.</li>",ot=d(),Ft=p("h2"),Ft.innerHTML="v9.2.3 <em>(2023-11-10)</em>",Gt=d(),qt=p("ul"),qt.innerHTML="<li>Fix <code>InputTag</code>.</li>",Bt=d(),Xt=p("h2"),Xt.innerHTML="v9.2.2 <em>(2023-10-15)</em>",Rt=d(),Jt=p("ul"),Jt.innerHTML="<li>Change tooltip to ticks in <code>Range</code> component, for better accessibility.</li>",Me=d(),Pe=p("h2"),Pe.innerHTML="v9.2.1 <em>(2023-10-14)</em>",Yt=d(),Ht=p("ul"),Ht.innerHTML="<li><code>Tag</code> should not be clickable (or focusable) by default. It can be made interactive by adding the new <code>clickable</code> attribute.</li>",tn=d(),An=p("h2"),An.innerHTML="v9.2.0 <em>(2023-10-13)</em>",mn=d(),In=p("ul"),In.innerHTML="<li>New component: <code>Range</code>.</li>",Se=d(),Je=p("h2"),Je.innerHTML="v9.1.2, v9.1.1, v9.1.0 <em>(2023-09-27)</em>",nn=d(),On=p("ul"),On.innerHTML="<li>New components: <code>InputRating</code>, <code>Tag</code>, <code>InputTag</code>, <code>InputTime</code>.</li> <li>Add <code>hideTip</code> and more, to <code>Popover</code>.</li> <li>Add <code>useNativeOnMobile</code> to <code>InputDate</code>.</li> <li>Fix <code>Popover</code> z-index (so that it shows over dialogs)</li> <li>Many other smaller bugfixes and improvements.</li>",ln=d(),_n=p("h2"),_n.innerHTML="v9.0.5 <em>(2023-09-22)</em>",rn=d(),vn=p("ul"),vn.innerHTML="<li>Reduce <code>Dialog&#39;s</code> <code>z-index</code> so that the popups from the dialog show up on top of it.</li>",an=d(),gn=p("h2"),gn.innerHTML="v9.0.4, v9.0.3, v9.0.2, v9.0.1 <em>(2023-09-16)</em>",Te=d(),te=p("ul"),te.innerHTML="<li>Make <code>title</code> optional for <code>Panel</code>.</li> <li>Add <code>ANIMATION_SPEED</code> to utils/properties.</li> <li>Correct <code>FOCUSABLE_SELECTOR</code> (it&#39;s a constant, not a svelte store).</li>",He=d(),$n=p("h2"),$n.innerHTML="v9.0.0 <em>(2023-09-09)</em>",xn=d(),wn=p("ul"),wn.innerHTML="<li><strong>New</strong>: added <code>Utils</code> page in the docs with APIs to the utility functions exposed by the library.</li> <li><code>Tooltip</code> was simplified and now the positioning ensures that the tooltip is always visible on the screen.</li> <li><code>Popover</code> will now update its position when the window is resized.</li> <li>The tip of the <code>Tooltip</code> and <code>Popover</code> will now try to be centered on the target element (if the box was offset from the screen edge).</li> <li>Improved keyboard focus for notifications: when a notification is dismissed from the keyboard (Escape) the focus will be moved to the next available notification.</li> <li>Improved &amp; standardised z-index throughout the components.</li> <li>Tweaked <code>Menu</code> positioning to update on window resize.</li> <li>Tweaked <code>MenuItem</code> for responsiveness (e.g. add ellipsis if the text is too long).</li>",Hn=d(),yn=p("h3"),yn.textContent="Breaking changes",Pn=d(),kn=p("ul"),kn.innerHTML="<li>The <code>events</code> property was dropped from the <code>Tooltip</code>, leaving <em>hover</em> and <em>focus</em> events as the default. For use cases when the <em>click</em> was needed, <code>Popover</code> should be used instead.</li> <li><code>z-index</code> value of the <code>Popover</code> and <code>Tooltip</code> has been reduced from <code>9999</code> to <code>99</code>, so that it&#39;s closer to the content it describes. Ideally tooltips should slide under some other floating elements of the UI (like toolbars or drawers), while remaining above the content layer. This can be o overriden in the app&#39;s own css if needed.</li>",Nn=d(),Fn=p("hr"),qn=d(),Tn=p("h2"),Tn.innerHTML="v8.4.5, v8.4.4 <em>(2023-08-26)</em>",Bn=d(),Mn=p("ul"),Mn.innerHTML="<li>Standardise <code>InputSearch</code> UX: clear button and Escape-to-clear behaviour now works the same in different browsers.</li> <li>Enhance <code>Popover</code> so that it updates its position after it detects a content change.</li> <li>Expose <code>Popover</code>&#39;s <code>updatePosition</code> function.</li> <li>Tweak the dropdown-align function for popover.</li>",Rn=d(),En=p("h2"),En.innerHTML="v8.4.3 <em>(2023-08-25)</em>",ci=d(),ti=p("ul"),ti.innerHTML="<li>Fix <code>InputRadio</code> group block padding.</li>",pi=d(),ni=p("h2"),ni.innerHTML="v8.4.2, v8.4.1, v8.4.0 <em>(2023-08-24)</em>",hi=d(),ii=p("ul"),ii.innerHTML="<li><strong>New:</strong> <code>Popover</code> component. If a <code>Dialog</code> and <code>Tooltip</code> had a child - this would be it. It&#39;s a container that can be opened like a dialog, but will be attached to the target element (like a tooltip). It&#39;s a great way to display additional information or actions for a specific element on the page. It can contain other components (e.g. buttons) and can serve as a free-form menu.</li> <li>Fix popover above the target styling.</li> <li>Simplify &amp; refactor <code>Tooltip</code> to share more code with <code>Popover</code>. Styling and core functionality is now almost the same, while the UX and usage remains a bit different.</li>",gi=d(),oi=p("h2"),oi.innerHTML="v8.3.3 <em>(2023-08-19)</em>",bi=d(),ji=p("ul"),ji.innerHTML="<li>Inputs with dropdowns (e.g. <code>Combobox</code> and <code>InputDate</code>) will not trigger page scroll on focus (in mobile Safari).</li> <li><code>Combobox</code> dropdown will now auto-adjust its position when the virtual keyboard opens (in mobile Safari).</li> <li><code>:focus</code> has been updated to <code>:focus-visible</code> for non-input elements, for a better look.</li>",co=d(),zi=p("h2"),zi.innerHTML="v8.3.2 <em>(2023-08-18)</em>",po=d(),ds=p("ul"),ds.innerHTML="<li>Improve <code>InputRadio</code> styling to look more like the rest of the inputs (e.g. checkbox).</li> <li>Standardise font sizes into css variables: <code>--ui-font-xs</code>=14px, <code>--ui-font-s</code>=15px, <code>--ui-font-m</code>=16px, <code>--ui-font-l</code>=17px, <code>--ui-font-xl</code>=22px</li> <li>Correct the symbol for Return (\u23CE) in <code>Menu</code>.</li> <li><code>Menu</code> can now be centered with the target button (using <code>align</code> attribute).</li> <li>Context <code>Menu</code> will now open above the long-pressed spot on mobile (by default).</li> <li>Pressing the same letter key, with the <code>Menu</code> open will now cycle through the items starting with that letter.</li> <li>Pressing space with the <code>Menu</code> open, while typing something quickly, will not trigger the click event on the currently selected item. This allows to type-to-highlight elements that contain space in the text. Pressing space standalone (while not typing), will trigger the click event.</li>",nu=d(),cs=p("h2"),cs.innerHTML="v8.3.1 <em>(2023-08-14)</em>",iu=d(),ps=p("ul"),ps.innerHTML="<li>Removed <code>--ui-margin-xl</code> and <code>--ui-margin-xxl</code> as they were not used.</li> <li>Merged <code>--ui-border-radius-s</code> with <code>--ui-border-radius</code> and changed to a rem value that calculates to the whole pixel (so that browsers would render it better).</li> <li>Fixed the <code>NotificationCenter</code> issue, where toasts would not close if navigated away from the page that initialises the component.</li> <li>Tweaked dialog border-radius to render a bit better (for dialog&#39;s header and footer).</li> <li>Aligned components heights (<code>Menu</code>, <code>Combobox</code>, and <code>InputRadio</code> items).</li> <li>Fixed <code>Menu</code>&#39;s longpress event to not triger when moving the finger (touchmove should stop longpress).</li> <li>Improve navigation swipe event (swiping can now be triggered by any element that is not scrollable and has no scrollable ancestors).</li> <li>Increased <code>Menu</code> font size slightly, while decreasing it for everything (102% -&gt; 100% on <code>body</code>).</li>",ou=d(),hs=p("h2"),hs.innerHTML="v8.3.0 <em>(2023-08-11)</em>",su=d(),gs=p("ul"),gs.innerHTML="<li><strong>New:</strong> <code>InputSearch</code> component. Not much more than <code>InputText</code>, except the search icon and (depending on the browser) - the clear button.</li> <li>Fixed a weird and edge-case issue with <code>Menu</code> on mobile Safari (#119).</li>",lu=d(),bs=p("h2"),bs.innerHTML="v8.2.0 <em>(2023-08-08)</em>",ru=d(),_s=p("ul"),_s.innerHTML="<li><code>data</code> attribute in <code>Combobox</code> is deprecated. It will be removed in the next major version. Use <code>items</code> instead.</li> <li><code>Combobox</code> and <code>Menu</code> now use the same align function (for consistency and performance) and there&#39;s no need to add <code>elevate</code> attribute to either of them, as both popups are rendered inside the <code>body</code> element and are only added to the DOM, when they are opened (to avoid polluting the DOM with unnecessary elements).</li>",au=d(),vs=p("h2"),vs.innerHTML="v8.1.4 <em>(2023-07-31)</em>",uu=d(),$s=p("ul"),$s.innerHTML="<li>Improved <code>PushButton</code> pressed styling.</li> <li>Some buttons should now react faster on mobile (touch-action added to notification buttons and all inputs, selects and textareas).</li>",fu=d(),ws=p("h2"),ws.innerHTML="v8.1.3 <em>(2023-07-30)</em>",mu=d(),ys=p("ul"),ys.innerHTML="<li><code>PushButton</code> now has better contrast (when pressed).</li> <li>Fixed <code>showMessage</code> style for long messages on mobile.</li> <li>Fixed password strength popup style.</li> <li>Docs: fancy font should be applied do docs only, not to the components.</li> <li>Docs: try swipeRight on mobile to open sidebar.</li> <li>Added touch-action: manipulation to <code>Label</code> and some other missing places.</li>",du=d(),ks=p("h2"),ks.innerHTML="v8.1.2 <em>(2023-07-29)</em>",cu=d(),Ts=p("ul"),Ts.innerHTML="<li>Small table style tweaks</li> <li>Docs improvements</li>",pu=d(),Ms=p("h2"),Ms.innerHTML="v8.1.1 <em>(2023-07-28)</em>",hu=d(),Es=p("ul"),Es.innerHTML="<li>Bring back <code>--ui-color-accent-semi</code> and <code>--ui-color-highlight-semi</code> colors.</li> <li><code>Combobox</code> and <code>InputDate</code> buttons should not be tabbable.</li> <li><code>Combobox</code> and <code>InputDate</code> buttons should toggle the dropdown on click.</li>",gu=d(),Cs=p("h2"),Cs.innerHTML="v8.1.0 <em>(2023-07-28)</em>",bu=d(),Ss=p("ul"),Ss.innerHTML="<li><strong>New:</strong> All inputs have a new attribute <code>labelOnTheLeft</code> which allows to move the label to the left of the input.</li>",_u=d(),Ls=p("h2"),Ls.innerHTML="v8.0.1 <em>(2023-07-26)</em>",vu=d(),Ds=p("ul"),Ds.innerHTML="<li><strong>New:</strong> Check the platform on load and add a <code>mobile</code> or <code>desktop</code> class to the <code>html</code> element.</li> <li>Fixed: Menu separator is now aligned with menu items.</li> <li>Fixed: Notifications Archive &quot;Clear all&quot; button is now back to normal.</li>",$u=d(),As=p("h2"),As.innerHTML="v8.0.0 <em>(2023-07-25)</em>",wu=d(),Is=p("ul"),Is.innerHTML="<li><strong>New:</strong> <code>Label</code> component.</li> <li><strong>New icons:</strong> <code>sun</code> and <code>moon</code> for the dark-theme switchers.</li> <li><strong>Improvement:</strong> <code>info</code>, <code>error</code> and <code>label</code> attributes are now supported on other inputs (<code>Combobox</code>, <code>InputDate</code>, <code>Select</code>, <code>ButtonToggle</code>, and <code>Toggle</code>).</li> <li><strong>Improvement:</strong> all components now expose <code>element</code> and <code>inputElement</code> (if there is one (and only one)). The exceptions are <code>NotificationCenter</code> and <code>MessageBox</code>, due to their implementation.</li> <li>Added <code>title</code> attribute to <code>ButtonToggle</code>.</li> <li>Added <code>success</code> type for <code>MessageBox</code>.</li> <li>Fixed <code>selectable=false</code> not working on <code>Table</code>.</li> <li>Improved styling for <code>Dialog</code> and <code>MessageBox</code>.</li>",yu=d(),Os=p("h3"),Os.textContent="Breaking changes",ku=d(),xs=p("ul"),xs.innerHTML="<li>Color palette has been completely revamped for better accessibility (more contrast), consistency and simplicity (fewer colors and css variables).</li> <li><code>Autocomplete</code> has been renamed to <code>Combobox</code> as this is what it really is.</li> <li><code>Datepicker</code> has been renamed to <code>InputDate</code>.</li> <li><code>Toaster</code> component has been removed. Use <code>NotificationCenter</code> instead.</li> <li><code>Select</code> - HTML structure has changed: <code>.select-wrap select</code> --&gt; <code>.select .input-inner .input-row select</code></li> <li><code>Table</code> - CSS classes have changed from <code>.table-wrapper table.table</code> --&gt; <code>.table table</code></li> <li><code>Toggle</code> - HTML structure has changed from <code>.toggle .toggle-inner .toggle-scroller input</code> --&gt; <code>.toggle .toggle-inner .toggle-label .toggle-scroller input</code></li> <li><code>drawBorders</code> attribute has been removed from <code>Dialog</code>, while header and footer styling has been improved for all dialogs.</li> <li>These components previously exposed <code>_this</code>, which is now called <code>element</code>: <code>Button</code>, <code>Checkbox</code>, <code>InputMath</code>, <code>PushButton</code>, <code>Table</code></li>",Tu=d(),Hs=p("h3"),Hs.textContent="Color palette - mapping from v7 to v8 colors:",Mu=d(),Ps=p("ul"),Ps.innerHTML="<li><code>--ui-color-text-dark-1</code> --&gt; <code>--ui-color-text-1</code></li> <li><code>--ui-color-text-dark-2</code> --&gt; <code>--ui-color-text-2</code></li> <li><code>--ui-color-border-dark-1</code> --&gt; <code>--ui-color-border-1</code></li> <li><code>--ui-color-border-dark-2</code> --&gt; <code>--ui-color-border-2</code></li> <li><code>--ui-color-background-light-2</code> --&gt; <code>--ui-color-background-1</code></li> <li><code>--ui-color-background-dark-2</code> --&gt; <code>--ui-color-background-2</code></li> <li><code>--ui-color-highlight-dark-2</code> --&gt; <code>--ui-color-highlight-1</code></li>",Eu=d(),Ns=p("p"),Ns.innerHTML="Other (not mentioned above) color variations, (i.e. <code>-light-</code> and <code>-dark-</code>) have been removed.",Cu=d(),Su=p("hr"),Lu=d(),Fs=p("h2"),Fs.innerHTML="v7.1.2 <em>(2023-07-05)</em>",Du=d(),qs=p("ul"),qs.innerHTML="<li>Fix <code>Checkbox</code> label (don&#39;t render empty label if no label attribute was passed).</li>",Au=d(),Bs=p("h2"),Bs.innerHTML="v7.1.1 <em>(2023-07-01)</em>",Iu=d(),Rs=p("ul"),Rs.innerHTML="<li>Fixed some <code>NotificationCenter</code> bugs.</li>",Ou=d(),js=p("h2"),js.innerHTML="v7.1.0 <em>(2023-06-30)</em>",xu=d(),zs=p("ul"),zs.innerHTML="<li>Improve <code>Panel</code> component with new properties: <code>collapsible</code> (it&#39;s not collapsible by default), and <code>disabled</code>.</li>",Hu=d(),Ws=p("h2"),Ws.innerHTML="v7.0.2 <em>(2023-06-29)</em>",Pu=d(),Vs=p("ul"),Vs.innerHTML="<li>Add <code>success</code> to the <code>InfoBar</code> component.</li> <li>Behind the scenes refactoring and improvements.</li>",Nu=d(),Us=p("h2"),Us.innerHTML="v7.0.1 <em>(2023-06-28)</em>",Fu=d(),Ys=p("ul"),Ys.innerHTML="<li><code>Textarea</code> component now follows all basic inputs and support <code>error</code>, <code>info</code>, and <code>label</code> properties.</li> <li>Notifications are now centered on mobile screen sizes.</li>",qu=d(),Gs=p("h2"),Gs.innerHTML="v7.0.0 <em>(2023-06-28)</em>",Bu=d(),Ks=p("ul"),Ks.innerHTML='<li><strong>New:</strong> <a href="#InfoBar">InfoBar</a> component.</li> <li><strong>New:</strong> <a href="#InputText">InputText</a>, <a href="#InputNumber">InputNumber</a>, and <a href="#Radio">Radio</a> components.</li> <li><strong>New:</strong> <code>info</code>, <code>error</code> and <code>label</code> attributes are now supported on all basic inputs (<code>InputText</code>, <code>InputNumber</code>, <code>InputMath</code>, <code>InputPassword</code>, <code>Radio</code>, and <code>Checkbox</code>).</li> <li><strong>Improved:</strong> <code>InputMath</code> component: support for <code>()</code> characters, to allow for more complex expressions.</li>',Ru=d(),Xs=p("h3"),Xs.textContent="Breaking changes",ju=d(),Zs=p("h4"),Zs.textContent="Checkbox",zu=d(),Js=p("ul"),Js.innerHTML="<li>HTML structure changed <code>input</code> --&gt; <code>.checkbox .checkbox-row input</code></li> <li><code>on:change</code> is called with a svelte event instead of the native one, so: <code>e.target.checked</code> is now <code>e.detail.checked</code></li>",Wu=d(),Qs=p("h4"),Qs.textContent="InputMath",Vu=d(),el=p("ul"),el.innerHTML="<li>HTML structure changed <code>.input-math-wrapper input</code> --&gt; <code>.input-math .input-inner .input-math-row input</code></li>",Uu=d(),tl=p("h4"),tl.textContent="InputNumber:",Yu=d(),nl=p("ul"),nl.innerHTML="<li>HTML structure changed: <code>input</code> --&gt; <code>.input-number .input-inner input</code></li>",Gu=d(),il=p("h4"),il.textContent="InputPassword",Ku=d(),ol=p("ul"),ol.innerHTML="<li>HTML structure changed: <code>.input-password-wrapper .input-password-row input</code> --&gt; <code>.input-password .input-inner .input-password-row input</code></li>",Xu=d(),sl=p("h4"),sl.textContent="CSS variables changed:",Zu=d(),ll=p("ul"),ll.innerHTML="<li><code>--ui-shadow-invalid</code> --&gt; <code>--ui-shadow-danger</code></li>",Ju=d(),Qu=p("hr"),ef=d(),rl=p("h2"),rl.innerHTML="v6.8.2, v6.8.1 <em>(2023-06-21)</em>",tf=d(),al=p("ul"),al.innerHTML="<li>Allow HTML in <code>MessageBox</code>.</li> <li>Improve styling for multi-line messages in <code>MessageBox</code>.</li>",nf=d(),ul=p("h2"),ul.innerHTML="v6.8.0 <em>(2023-06-17)</em>",of=d(),fl=p("ul"),fl.innerHTML="<li><strong>New:</strong> <code>MessageBox</code> component for displaying quick info/warning/error messages or confirmation dialogs (replacement for browser&#39;s native <code>alert</code> and <code>confirm</code>).</li>",sf=d(),ml=p("h2"),ml.innerHTML="v6.7.1 <em>(2023-06-13)</em>",lf=d(),dl=p("ul"),dl.innerHTML="<li>Fix <code>Menu</code> show and hide events and clearing the highlight on mouse out.</li>",rf=d(),cl=p("h2"),cl.innerHTML="v6.7.0 <em>(2023-06-13)</em>",af=d(),pl=p("ul"),pl.innerHTML="<li><strong>New:</strong> <code>NotificationCenter</code> component. This will eventually replace <code>Toaster</code>, as it&#39;s more accessible and powerful.</li> <li><code>Toaster</code> component is now <strong>deprecated</strong> and will be removed in the next major version.</li> <li><code>PushButton</code> changes:<ul><li>remove <code>link</code> and <code>text</code> types, as they don&#39;t make sense (pushed state would not be visible).</li> <li>fix <code>outline</code> type styling.</li> <li>update the event passed to the <code>on:change</code> callback (rename property from <code>event.detail.value</code> to <code>event.detail.pressed</code>).</li> <li>fix <code>PushButton</code> keyboard events (pressing Space or Enter would not trigger the <code>on:change</code> event).</li></ul></li>",uf=d(),hl=p("h2"),hl.innerHTML="v6.6.8 <em>(2023-06-07)</em>",ff=d(),gl=p("ul"),gl.innerHTML="<li><code>Menu</code> improvements:<ul><li><code>aria-expanded</code> attribute was incorrectly being added to the <code>body</code> on menu open (apart from the target button).</li> <li>Tabbing does not move focus out of the menu anymore (it will cycle through the menu items).</li> <li>simplify html structure (<code>ul</code> -&gt; <code>menu</code>, <code>li/button</code> -&gt; <code>button</code>)</li></ul></li>",mf=d(),bl=p("h2"),bl.innerHTML="v6.6.7 <em>(2023-06-01)</em>",df=d(),_l=p("ul"),_l.innerHTML="<li><code>Toaster</code> enhancements:<ul><li>Improve contrast (reduce the transparency).</li> <li>Make toasts focusable (so that they can be closed with <code>Escape</code>).</li> <li>When toasts are focused or mouse is over them, the auto-close progress will pause.</li></ul></li>",cf=d(),vl=p("h2"),vl.innerHTML="v6.6.6 <em>(2023-05-31)</em>",pf=d(),$l=p("ul"),$l.innerHTML="<li>Fix <code>button-toggle</code> not working on mobile.</li>",hf=d(),wl=p("h2"),wl.innerHTML="v6.6.4, v6.6.5 <em>(2023-05-12)</em>",gf=d(),yl=p("ul"),yl.innerHTML="<li>Bring back <code>--ui-shadow-small</code> property.</li> <li><code>Menu</code> performance improvements: menu will not be rendered until it&#39;s opened.</li>",bf=d(),kl=p("h2"),kl.innerHTML="v6.6.3, v6.6.2, v6.6.1, v6.6.0,  <em>(2023-05-11)</em>",_f=d(),Tl=p("ul"),Tl.innerHTML="<li><code>Select</code> now also accepts an array of strings for items.</li> <li><code>ButtonToggle</code> now also accepts an array of strings for items.</li> <li><code>em</code> to <code>rem</code>, as it&#39;s more consistent and predictable.</li>",vf=d(),Ml=p("h2"),Ml.innerHTML="v6.5.5, v6.5.4, v6.5.3 <em>(2023-05-09)</em>",$f=d(),El=p("ul"),El.innerHTML="<li>Standardise button height to match all the other controls.</li> <li>Standardise placeholder and input-icon colours.</li> <li>Enhance Autocomplete&#39;s and DatePicker&#39;s input-icon click experience.</li> <li>Size the icons in <code>em</code> not <code>px</code>.</li>",wf=d(),Cl=p("h2"),Cl.innerHTML="v6.5.2 <em>(2023-05-08)</em>",yf=d(),Sl=p("ul"),Sl.innerHTML="<li>Maintenance update: upgrade dependencies, remove yet another useless a11y warning from svelte zealots.</li>",kf=d(),Ll=p("h2"),Ll.innerHTML="v6.5.1 <em>(2023-05-07)</em>",Tf=d(),Dl=p("ul"),Dl.innerHTML="<li><code>Menu</code> highlighting upgrade: <code>ArrowDown</code> on the last item will highlight the first item, <code>ArrowUp</code> on the first item will highlight the last item.</li>",Mf=d(),Al=p("h2"),Al.innerHTML="v6.5.0 <em>(2023-04-28)</em>",Ef=d(),Il=p("ul"),Il.innerHTML="<li>Change the default color for a secondary button.</li> <li>Add <code>info</code> type to <code>Button</code> component (that takes the colour of the previous <code>default</code>).</li> <li>Fix round button (with text) aspect-ratio lock.</li>",Cf=d(),Ol=p("h2"),Ol.innerHTML="v6.4.3 <em>(2023-04-27)</em>",Sf=d(),xl=p("ul"),xl.innerHTML="<li>Improve <code>&lt;InputPassword/&gt;</code> component: don&#39;t rerender when eye button is clicked, minor alignment style tweak.</li> <li><code>Autocomplete</code> keyboard scrolling alignment fix (highlighted item was partially cropped).</li>",Lf=d(),Hl=p("h2"),Hl.innerHTML="v6.4.2, v6.4.1 <em>(2023-04-22)</em>",Df=d(),Pl=p("ul"),Pl.innerHTML="<li>Remove the need to inline svg icons in the consumer&#39;s build.</li> <li>Add <code>addIcon</code> function to allow adding custom icons.</li> <li>Fix <code>menu.open</code> issue when event was not passed.</li>",Af=d(),Nl=p("h2"),Nl.innerHTML="v6.4.0 <em>(2023-04-20)</em>",If=d(),Fl=p("ul"),Fl.innerHTML="<li>Tweaks to allow it to be used with SvelteKit.</li>",Of=d(),ql=p("h2"),ql.innerHTML="v6.3.16, v6.3.15 <em>(2023-04-15)</em>",xf=d(),Bl=p("ul"),Bl.innerHTML="<li>New icons: <code>undo</code> and <code>redo</code>.</li> <li>Fix <code>ButtonGroup</code> styling for other button types.</li>",Hf=d(),Rl=p("h2"),Rl.innerHTML="v6.3.14, v6.3.13 <em>(2023-04-12)</em>",Pf=d(),jl=p("ul"),jl.innerHTML="<li><code>Tooltip</code> style tweaks, so it&#39;s finally perfect.</li> <li>Minor fix in <code>Tooltip</code>.</li>",Nf=d(),zl=p("h2"),zl.innerHTML="v6.3.12 <em>(2023-04-09)</em>",Ff=d(),Wl=p("ul"),Wl.innerHTML="<li>Cleanup.</li>",qf=d(),Vl=p("h2"),Vl.innerHTML="v6.3.12, v6.3.11, v6.3.10, v6.3.9 <em>(2023-04-07)</em>",Bf=d(),Ul=p("ul"),Ul.innerHTML="<li><code>Menu</code> on-close should resolve instantly, when the menu is already closed.</li> <li><code>Menu</code> new attribute <code>align</code> allows to align the menu to the right with the target.</li>",Rf=d(),Yl=p("h2"),Yl.innerHTML="v6.3.8, v6.3.7, v6.3.6, v6.3.5, v6.3.4 <em>(2023-04-06)</em>",jf=d(),Gl=p("ul"),Gl.innerHTML="<li>Handle svelte&#39;s newest a11y warnings.</li> <li>Tweak media query notation.</li> <li>Remove menu of type=&#39;input&#39;.</li> <li>Allow <code>data-</code> attributes on <code>Button</code> and <code>MenuItem</code>.</li> <li>Fix Menu target button&#39;s <code>aria-expanded</code> attribute (wasn&#39;t set to <code>false</code> on menu close).</li>",zf=d(),Kl=p("h2"),Kl.innerHTML="v6.3.3 <em>(2023-04-05)</em>",Wf=d(),Xl=p("ul"),Xl.innerHTML="<li><code>Tooltip</code> tip was upgraded to take advantage of the new <code>clip-path</code> property.</li> <li><code>Tooltip</code> tip was enhanced with color variations: <code>success</code>, <code>warning</code> and <code>danger</code>.</li>",Vf=d(),Zl=p("h2"),Zl.innerHTML="v6.3.2 <em>(2023-03-30)</em>",Uf=d(),Jl=p("ul"),Jl.innerHTML="<li><code>Table</code> will not listen to events when it&#39;s not the target.</li> <li><code>Dialog</code> buttons can now be navigated with left &amp; right arrow keys for convenience.</li>",Yf=d(),Ql=p("h2"),Ql.innerHTML="v6.3.1 <em>(2023-03-26)</em>",Gf=d(),er=p("ul"),er.innerHTML="<li><code>ButtonGroup</code> styling tweaks (edge buttons padding alignment)</li>",Kf=d(),tr=p("h2"),tr.innerHTML="v6.3.0 <em>(2023-03-26)</em>",Xf=d(),nr=p("ul"),nr.innerHTML="<li>enhance <code>MenuItem</code> component (add props: class, disabled, icon, success, warning, danger)</li>",Zf=d(),ir=p("h2"),ir.innerHTML="v6.2.10 <em>(2023-03-25)</em>",Jf=d(),or=p("ul"),or.innerHTML="<li>Also pass event target in menu <code>on:close</code> event.</li>",Qf=d(),sr=p("h2"),sr.innerHTML="v6.2.9 <em>(2023-03-25)</em>",em=d(),lr=p("ul"),lr.innerHTML="<li>Fix: menu <code>on:open</code> event was missing.</li>",tm=d(),rr=p("h2"),rr.innerHTML="v6.2.8 <em>(2023-03-24)</em>",nm=d(),ar=p("ul"),ar.innerHTML="<li>move tooltip custom class attribute to the tooltip itself, not the content (so that it can easily overwrite the background color).</li>",im=d(),ur=p("h2"),ur.innerHTML="v6.2.7 <em>(2023-03-24)</em>",om=d(),fr=p("ul"),fr.innerHTML="<li>revert some tooltip changes (<code>events</code> prop is actually useful)</li>",sm=d(),mr=p("h2"),mr.innerHTML="v6.2.6 <em>(2023-03-24)</em>",lm=d(),dr=p("ul"),dr.innerHTML="<li>simplify tooltip (change bg color to <code>accent</code>, drop <code>events</code> prop and default to focus + hover)</li>",rm=d(),cr=p("h2"),cr.innerHTML="v6.2.5 <em>(2023-03-24)</em>",am=d(),pr=p("ul"),pr.innerHTML='<li>disable svelte false-positive a11y warnings. See <a href="https://github.com/sveltejs/svelte/pull/8402">svelte#8402</a></li>',um=d(),hr=p("h2"),hr.innerHTML="v6.2.4 <em>(2023-03-24)</em>",fm=d(),gr=p("ul"),gr.innerHTML="<li>update table docs (missing <code>data</code> prop)</li> <li>change button&#39;s <code>active</code> class to <code>touching</code> for touch events (to not conflict with popular <code>active</code> class name that may be used by consumers)</li>",mm=d(),br=p("h2"),br.innerHTML="v6.2.3, v6.2.2 <em>(2023-03-24)</em>",dm=d(),_r=p("ul"),_r.innerHTML="<li>Fix issue where a selectable table would become non-selectable if another table on the same page was destroyed.</li>",cm=d(),vr=p("h2"),vr.innerHTML="v6.2.1 <em>(2023-03-23)</em>",pm=d(),$r=p("ul"),$r.innerHTML="<li>Datepicker should stopPropagation on Escape, when the calendar is open.</li>",hm=d(),wr=p("h2"),wr.innerHTML="v6.2.0 <em>(2023-03-20)</em>",gm=d(),yr=p("ul"),yr.innerHTML="<li>Review accessibility of all components (added <code>aria-</code> roles and attributes where necessary).</li> <li>Tweaked some components (e.g. close Tooltip on Escape)</li> <li>Added unit tests for all components.</li> <li>Docs pages style tweaks (e.g. color palette)</li>",bm=d(),kr=p("h2"),kr.innerHTML="v6.1.1 <em>(2023-03-15)</em>",_m=d(),Tr=p("ul"),Tr.innerHTML="<li>Remove <code>coverage</code> folder from the npm package.</li>",vm=d(),Mr=p("h2"),Mr.innerHTML="v6.1.0 <em>(2023-03-15)</em>",$m=d(),Er=p("ul"),Er.innerHTML="<li><code>Toggle</code> component has been completely rewritten to make it more flexible and perfect.</li>",wm=d(),Cr=p("h2"),Cr.innerHTML="v6.0.2, v6.0.1, v6.0.0 <em>(2023-03-13)</em>",ym=d(),Sr=p("ul"),Sr.innerHTML="<li>rebrand <code>simple-ui-components-in-svelte</code> to <code>@perfectthings/ui</code></li>",km=d(),Tm=p("hr"),Mm=d(),Lr=p("h2"),Lr.innerHTML="v5.1.0 <em>(2023-03-12)</em>",Em=d(),Dr=p("ul"),Dr.innerHTML="<li>Better Menu highlighting (doesn&#39;t hl first item on open, mouseout removes the highlighting), inline with how native menus work on MacOS</li> <li>Mobile friendlier buttons (touchstart invokes :active styling)</li> <li>unit tests for some components</li>",Cm=d(),Ar=p("h2"),Ar.innerHTML="v5.0.8 <em>(2023-03-03)</em>",Sm=d(),Ir=p("ul"),Ir.innerHTML="<li>Tooltip offset parameter</li>",Lm=d(),Or=p("h2"),Or.innerHTML="v5.0.7 <em>(2023-03-03)</em>",Dm=d(),xr=p("ul"),xr.innerHTML="<li>PushButton fix (pushed class was not applied)</li>",Am=d(),Hr=p("h2"),Hr.innerHTML="v5.0.6 <em>(2023-03-02)</em>",Im=d(),Pr=p("ul"),Pr.innerHTML="<li>Add back <code>form</code> property to a button</li>",Om=d(),Nr=p("h2"),Nr.innerHTML="v5.0.5 <em>(2023-03-02)</em>",xm=d(),Fr=p("ul"),Fr.innerHTML="<li>Reduce memory footprint (removed some of the <code>transform</code> props that were no longer necessary)</li>",Hm=d(),qr=p("h2"),qr.innerHTML="v5.0.4 <em>(2023-03-02)</em>",Pm=d(),Br=p("ul"),Br.innerHTML="<li>esbuild replaced rollup for speed and simplicity</li> <li>cleanup &amp; refactoring</li>",Nm=d(),Rr=p("h2"),Rr.innerHTML="v5.0.3 <em>(2023-03-01)</em>",Fm=d(),jr=p("ul"),jr.innerHTML="<li>Tooltip hiding fix (wasn&#39;t hiding when hovering target)</li>",qm=d(),zr=p("h2"),zr.innerHTML="v5.0.2 <em>(2023-03-01)</em>",Bm=d(),Wr=p("ul"),Wr.innerHTML="<li>Toaster import fix</li> <li>Tooltip fix (some console errors were popping up)</li>",Rm=d(),Vr=p("h2"),Vr.innerHTML="v5.0.1 <em>(2023-02-28)</em>",jm=d(),Ur=p("ul"),Ur.innerHTML="<li>Bring back <code>button-outline.css</code> (it was accidentally deleted in v5.0.0)</li>",zm=d(),Yr=p("h2"),Yr.innerHTML="v5.0.0 <em>(2023-02-28)</em>",Wm=d(),Gr=p("ul"),Gr.innerHTML="<li>Breaking change: renamed props for all components: <code>className</code> -&gt; <code>class</code> (as it turns out it is possible to use <code>class</code> as a prop name in svelte)</li> <li>Almost all components now have a <code>class</code> prop, which can be used to add custom classes to the component</li> <li>Updated docs to reflect the above changes</li> <li>Docs API table is now alphabetically sorted</li> <li>Components don&#39;t use <code>$$props</code> anymore, as it was causing issues with the <code>class</code> prop. Instead, the props are now explicitly passed down to the component. This is a good thing to do, as it makes the components more explicit and easier to understand.</li>",Vm=d(),Um=p("hr"),Ym=d(),Kr=p("h2"),Kr.innerHTML="v4.0.0 <em>(2023-02-28)</em>",Gm=d(),Xr=p("ul"),Xr.innerHTML="<li>Breaking change: renamed components: <code>Item</code> -&gt; <code>MenuItem</code>, <code>Separator</code> -&gt; <code>MenuSeparator</code></li> <li>Refactored the folder structure</li>",Km=d(),Xm=p("hr"),Zm=d(),Zr=p("h2"),Zr.innerHTML="v3.1.2 <em>(2023-01-04)</em>",Jm=d(),Jr=p("ul"),Jr.innerHTML="<li>Toggle&#39;s <code>innerWidth</code> function was somehow overwriting <code>window.innerWidth</code> property (maybe a compiler issue?)</li>",Qm=d(),Qr=p("h2"),Qr.innerHTML="v3.1.1 <em>(2023-01-04)</em>",ed=d(),ea=p("ul"),ea.innerHTML="<li>Fix <code>input-number</code> (could not enter decimals)</li> <li>Fix <code>input-math</code> (math didn&#39;t work)</li>",td=d(),ta=p("h2"),ta.innerHTML="v3.1.0 <em>(2023-01-03)</em>",nd=d(),na=p("ul"),na.innerHTML="<li>UX change: autocomplete will not close on scroll or resize events from now on (it can be changed using new properties <code>hideOnScroll</code> and <code>hideOnResize</code>).</li> <li>fixed: autocomplete issue, where clicking on a filtered list would not select.</li> <li>tweak: autocomplete will now show &quot;create new item&quot; always (when enabled), not only when the query did not match anything. Except when the query matches an item exactly.</li>",od=d(),ia=p("h2"),ia.innerHTML="v3.0.1 <em>(2022-12-30)</em>",sd=d(),oa=p("ul"),oa.innerHTML="<li>autocomplete should revert when entered value is not on the list</li>",ld=d(),sa=p("h2"),sa.innerHTML="v3.0.0 <em>(2022-12-28)</em>",rd=d(),la=p("ul"),la.innerHTML="<li>breaking change: <code>cssClass</code> property available on some components has been renamed to <code>className</code> (to be more aligned with the standard workaround in other libs/frameworks).</li> <li>some components (where possible) are now using <code>$$props</code> to pass-through the properties of the instance down to the component.</li>",ad=d(),ud=p("hr"),fd=d(),ra=p("h2"),ra.innerHTML="v2.1.1 <em>(2022-12-24)</em>",md=d(),aa=p("ul"),aa.innerHTML="<li>breaking change: <code>dist</code> folder has been renamed to <code>docs</code>, as this is the only allowed name for a GH pages folder so that the GH pages is published automatically (without writing a GH action specifically for this).</li>",dd=d(),cd=p("hr"),pd=d(),ua=p("h2"),ua.innerHTML="v1.7.12 <em>(2022)</em>"},m(B,R){s(B,e,R),s(B,n,R),s(B,i,R),s(B,l,R),s(B,r,R),s(B,a,R),s(B,u,R),s(B,m,R),s(B,f,R),s(B,c,R),s(B,g,R),s(B,b,R),s(B,h,R),s(B,v,R),s(B,w,R),s(B,k,R),s(B,_,R),s(B,M,R),s(B,O,R),s(B,D,R),s(B,L,R),s(B,T,R),s(B,A,R),s(B,H,R),s(B,I,R),s(B,P,R),s(B,N,R),s(B,j,R),s(B,K,R),s(B,U,R),s(B,G,R),s(B,F,R),s(B,z,R),s(B,V,R),s(B,Q,R),s(B,le,R),s(B,ee,R),s(B,X,R),s(B,Z,R),s(B,ge,R),s(B,he,R),s(B,W,R),s(B,Y,R),s(B,J,R),s(B,pe,R),s(B,we,R),s(B,ve,R),s(B,ue,R),s(B,se,R),s(B,xe,R),s(B,ke,R),s(B,ce,R),s(B,be,R),s(B,Ae,R),s(B,ae,R),s(B,$e,R),s(B,re,R),s(B,oe,R),s(B,Oe,R),s(B,Ke,R),s(B,nt,R),s(B,it,R),s(B,lt,R),s(B,Ce,R),s(B,Ne,R),s(B,dt,R),s(B,ht,R),s(B,at,R),s(B,wt,R),s(B,Et,R),s(B,yt,R),s(B,gt,R),s(B,Vt,R),s(B,mt,R),s(B,Ut,R),s(B,st,R),s(B,xt,R),s(B,Ee,R),s(B,qe,R),s(B,Ie,R),s(B,Be,R),s(B,ot,R),s(B,Ft,R),s(B,Gt,R),s(B,qt,R),s(B,Bt,R),s(B,Xt,R),s(B,Rt,R),s(B,Jt,R),s(B,Me,R),s(B,Pe,R),s(B,Yt,R),s(B,Ht,R),s(B,tn,R),s(B,An,R),s(B,mn,R),s(B,In,R),s(B,Se,R),s(B,Je,R),s(B,nn,R),s(B,On,R),s(B,ln,R),s(B,_n,R),s(B,rn,R),s(B,vn,R),s(B,an,R),s(B,gn,R),s(B,Te,R),s(B,te,R),s(B,He,R),s(B,$n,R),s(B,xn,R),s(B,wn,R),s(B,Hn,R),s(B,yn,R),s(B,Pn,R),s(B,kn,R),s(B,Nn,R),s(B,Fn,R),s(B,qn,R),s(B,Tn,R),s(B,Bn,R),s(B,Mn,R),s(B,Rn,R),s(B,En,R),s(B,ci,R),s(B,ti,R),s(B,pi,R),s(B,ni,R),s(B,hi,R),s(B,ii,R),s(B,gi,R),s(B,oi,R),s(B,bi,R),s(B,ji,R),s(B,co,R),s(B,zi,R),s(B,po,R),s(B,ds,R),s(B,nu,R),s(B,cs,R),s(B,iu,R),s(B,ps,R),s(B,ou,R),s(B,hs,R),s(B,su,R),s(B,gs,R),s(B,lu,R),s(B,bs,R),s(B,ru,R),s(B,_s,R),s(B,au,R),s(B,vs,R),s(B,uu,R),s(B,$s,R),s(B,fu,R),s(B,ws,R),s(B,mu,R),s(B,ys,R),s(B,du,R),s(B,ks,R),s(B,cu,R),s(B,Ts,R),s(B,pu,R),s(B,Ms,R),s(B,hu,R),s(B,Es,R),s(B,gu,R),s(B,Cs,R),s(B,bu,R),s(B,Ss,R),s(B,_u,R),s(B,Ls,R),s(B,vu,R),s(B,Ds,R),s(B,$u,R),s(B,As,R),s(B,wu,R),s(B,Is,R),s(B,yu,R),s(B,Os,R),s(B,ku,R),s(B,xs,R),s(B,Tu,R),s(B,Hs,R),s(B,Mu,R),s(B,Ps,R),s(B,Eu,R),s(B,Ns,R),s(B,Cu,R),s(B,Su,R),s(B,Lu,R),s(B,Fs,R),s(B,Du,R),s(B,qs,R),s(B,Au,R),s(B,Bs,R),s(B,Iu,R),s(B,Rs,R),s(B,Ou,R),s(B,js,R),s(B,xu,R),s(B,zs,R),s(B,Hu,R),s(B,Ws,R),s(B,Pu,R),s(B,Vs,R),s(B,Nu,R),s(B,Us,R),s(B,Fu,R),s(B,Ys,R),s(B,qu,R),s(B,Gs,R),s(B,Bu,R),s(B,Ks,R),s(B,Ru,R),s(B,Xs,R),s(B,ju,R),s(B,Zs,R),s(B,zu,R),s(B,Js,R),s(B,Wu,R),s(B,Qs,R),s(B,Vu,R),s(B,el,R),s(B,Uu,R),s(B,tl,R),s(B,Yu,R),s(B,nl,R),s(B,Gu,R),s(B,il,R),s(B,Ku,R),s(B,ol,R),s(B,Xu,R),s(B,sl,R),s(B,Zu,R),s(B,ll,R),s(B,Ju,R),s(B,Qu,R),s(B,ef,R),s(B,rl,R),s(B,tf,R),s(B,al,R),s(B,nf,R),s(B,ul,R),s(B,of,R),s(B,fl,R),s(B,sf,R),s(B,ml,R),s(B,lf,R),s(B,dl,R),s(B,rf,R),s(B,cl,R),s(B,af,R),s(B,pl,R),s(B,uf,R),s(B,hl,R),s(B,ff,R),s(B,gl,R),s(B,mf,R),s(B,bl,R),s(B,df,R),s(B,_l,R),s(B,cf,R),s(B,vl,R),s(B,pf,R),s(B,$l,R),s(B,hf,R),s(B,wl,R),s(B,gf,R),s(B,yl,R),s(B,bf,R),s(B,kl,R),s(B,_f,R),s(B,Tl,R),s(B,vf,R),s(B,Ml,R),s(B,$f,R),s(B,El,R),s(B,wf,R),s(B,Cl,R),s(B,yf,R),s(B,Sl,R),s(B,kf,R),s(B,Ll,R),s(B,Tf,R),s(B,Dl,R),s(B,Mf,R),s(B,Al,R),s(B,Ef,R),s(B,Il,R),s(B,Cf,R),s(B,Ol,R),s(B,Sf,R),s(B,xl,R),s(B,Lf,R),s(B,Hl,R),s(B,Df,R),s(B,Pl,R),s(B,Af,R),s(B,Nl,R),s(B,If,R),s(B,Fl,R),s(B,Of,R),s(B,ql,R),s(B,xf,R),s(B,Bl,R),s(B,Hf,R),s(B,Rl,R),s(B,Pf,R),s(B,jl,R),s(B,Nf,R),s(B,zl,R),s(B,Ff,R),s(B,Wl,R),s(B,qf,R),s(B,Vl,R),s(B,Bf,R),s(B,Ul,R),s(B,Rf,R),s(B,Yl,R),s(B,jf,R),s(B,Gl,R),s(B,zf,R),s(B,Kl,R),s(B,Wf,R),s(B,Xl,R),s(B,Vf,R),s(B,Zl,R),s(B,Uf,R),s(B,Jl,R),s(B,Yf,R),s(B,Ql,R),s(B,Gf,R),s(B,er,R),s(B,Kf,R),s(B,tr,R),s(B,Xf,R),s(B,nr,R),s(B,Zf,R),s(B,ir,R),s(B,Jf,R),s(B,or,R),s(B,Qf,R),s(B,sr,R),s(B,em,R),s(B,lr,R),s(B,tm,R),s(B,rr,R),s(B,nm,R),s(B,ar,R),s(B,im,R),s(B,ur,R),s(B,om,R),s(B,fr,R),s(B,sm,R),s(B,mr,R),s(B,lm,R),s(B,dr,R),s(B,rm,R),s(B,cr,R),s(B,am,R),s(B,pr,R),s(B,um,R),s(B,hr,R),s(B,fm,R),s(B,gr,R),s(B,mm,R),s(B,br,R),s(B,dm,R),s(B,_r,R),s(B,cm,R),s(B,vr,R),s(B,pm,R),s(B,$r,R),s(B,hm,R),s(B,wr,R),s(B,gm,R),s(B,yr,R),s(B,bm,R),s(B,kr,R),s(B,_m,R),s(B,Tr,R),s(B,vm,R),s(B,Mr,R),s(B,$m,R),s(B,Er,R),s(B,wm,R),s(B,Cr,R),s(B,ym,R),s(B,Sr,R),s(B,km,R),s(B,Tm,R),s(B,Mm,R),s(B,Lr,R),s(B,Em,R),s(B,Dr,R),s(B,Cm,R),s(B,Ar,R),s(B,Sm,R),s(B,Ir,R),s(B,Lm,R),s(B,Or,R),s(B,Dm,R),s(B,xr,R),s(B,Am,R),s(B,Hr,R),s(B,Im,R),s(B,Pr,R),s(B,Om,R),s(B,Nr,R),s(B,xm,R),s(B,Fr,R),s(B,Hm,R),s(B,qr,R),s(B,Pm,R),s(B,Br,R),s(B,Nm,R),s(B,Rr,R),s(B,Fm,R),s(B,jr,R),s(B,qm,R),s(B,zr,R),s(B,Bm,R),s(B,Wr,R),s(B,Rm,R),s(B,Vr,R),s(B,jm,R),s(B,Ur,R),s(B,zm,R),s(B,Yr,R),s(B,Wm,R),s(B,Gr,R),s(B,Vm,R),s(B,Um,R),s(B,Ym,R),s(B,Kr,R),s(B,Gm,R),s(B,Xr,R),s(B,Km,R),s(B,Xm,R),s(B,Zm,R),s(B,Zr,R),s(B,Jm,R),s(B,Jr,R),s(B,Qm,R),s(B,Qr,R),s(B,ed,R),s(B,ea,R),s(B,td,R),s(B,ta,R),s(B,nd,R),s(B,na,R),s(B,od,R),s(B,ia,R),s(B,sd,R),s(B,oa,R),s(B,ld,R),s(B,sa,R),s(B,rd,R),s(B,la,R),s(B,ad,R),s(B,ud,R),s(B,fd,R),s(B,ra,R),s(B,md,R),s(B,aa,R),s(B,dd,R),s(B,cd,R),s(B,pd,R),s(B,ua,R)},p:Le,i:Le,o:Le,d(B){B&&(o(e),o(n),o(i),o(l),o(r),o(a),o(u),o(m),o(f),o(c),o(g),o(b),o(h),o(v),o(w),o(k),o(_),o(M),o(O),o(D),o(L),o(T),o(A),o(H),o(I),o(P),o(N),o(j),o(K),o(U),o(G),o(F),o(z),o(V),o(Q),o(le),o(ee),o(X),o(Z),o(ge),o(he),o(W),o(Y),o(J),o(pe),o(we),o(ve),o(ue),o(se),o(xe),o(ke),o(ce),o(be),o(Ae),o(ae),o($e),o(re),o(oe),o(Oe),o(Ke),o(nt),o(it),o(lt),o(Ce),o(Ne),o(dt),o(ht),o(at),o(wt),o(Et),o(yt),o(gt),o(Vt),o(mt),o(Ut),o(st),o(xt),o(Ee),o(qe),o(Ie),o(Be),o(ot),o(Ft),o(Gt),o(qt),o(Bt),o(Xt),o(Rt),o(Jt),o(Me),o(Pe),o(Yt),o(Ht),o(tn),o(An),o(mn),o(In),o(Se),o(Je),o(nn),o(On),o(ln),o(_n),o(rn),o(vn),o(an),o(gn),o(Te),o(te),o(He),o($n),o(xn),o(wn),o(Hn),o(yn),o(Pn),o(kn),o(Nn),o(Fn),o(qn),o(Tn),o(Bn),o(Mn),o(Rn),o(En),o(ci),o(ti),o(pi),o(ni),o(hi),o(ii),o(gi),o(oi),o(bi),o(ji),o(co),o(zi),o(po),o(ds),o(nu),o(cs),o(iu),o(ps),o(ou),o(hs),o(su),o(gs),o(lu),o(bs),o(ru),o(_s),o(au),o(vs),o(uu),o($s),o(fu),o(ws),o(mu),o(ys),o(du),o(ks),o(cu),o(Ts),o(pu),o(Ms),o(hu),o(Es),o(gu),o(Cs),o(bu),o(Ss),o(_u),o(Ls),o(vu),o(Ds),o($u),o(As),o(wu),o(Is),o(yu),o(Os),o(ku),o(xs),o(Tu),o(Hs),o(Mu),o(Ps),o(Eu),o(Ns),o(Cu),o(Su),o(Lu),o(Fs),o(Du),o(qs),o(Au),o(Bs),o(Iu),o(Rs),o(Ou),o(js),o(xu),o(zs),o(Hu),o(Ws),o(Pu),o(Vs),o(Nu),o(Us),o(Fu),o(Ys),o(qu),o(Gs),o(Bu),o(Ks),o(Ru),o(Xs),o(ju),o(Zs),o(zu),o(Js),o(Wu),o(Qs),o(Vu),o(el),o(Uu),o(tl),o(Yu),o(nl),o(Gu),o(il),o(Ku),o(ol),o(Xu),o(sl),o(Zu),o(ll),o(Ju),o(Qu),o(ef),o(rl),o(tf),o(al),o(nf),o(ul),o(of),o(fl),o(sf),o(ml),o(lf),o(dl),o(rf),o(cl),o(af),o(pl),o(uf),o(hl),o(ff),o(gl),o(mf),o(bl),o(df),o(_l),o(cf),o(vl),o(pf),o($l),o(hf),o(wl),o(gf),o(yl),o(bf),o(kl),o(_f),o(Tl),o(vf),o(Ml),o($f),o(El),o(wf),o(Cl),o(yf),o(Sl),o(kf),o(Ll),o(Tf),o(Dl),o(Mf),o(Al),o(Ef),o(Il),o(Cf),o(Ol),o(Sf),o(xl),o(Lf),o(Hl),o(Df),o(Pl),o(Af),o(Nl),o(If),o(Fl),o(Of),o(ql),o(xf),o(Bl),o(Hf),o(Rl),o(Pf),o(jl),o(Nf),o(zl),o(Ff),o(Wl),o(qf),o(Vl),o(Bf),o(Ul),o(Rf),o(Yl),o(jf),o(Gl),o(zf),o(Kl),o(Wf),o(Xl),o(Vf),o(Zl),o(Uf),o(Jl),o(Yf),o(Ql),o(Gf),o(er),o(Kf),o(tr),o(Xf),o(nr),o(Zf),o(ir),o(Jf),o(or),o(Qf),o(sr),o(em),o(lr),o(tm),o(rr),o(nm),o(ar),o(im),o(ur),o(om),o(fr),o(sm),o(mr),o(lm),o(dr),o(rm),o(cr),o(am),o(pr),o(um),o(hr),o(fm),o(gr),o(mm),o(br),o(dm),o(_r),o(cm),o(vr),o(pm),o($r),o(hm),o(wr),o(gm),o(yr),o(bm),o(kr),o(_m),o(Tr),o(vm),o(Mr),o($m),o(Er),o(wm),o(Cr),o(ym),o(Sr),o(km),o(Tm),o(Mm),o(Lr),o(Em),o(Dr),o(Cm),o(Ar),o(Sm),o(Ir),o(Lm),o(Or),o(Dm),o(xr),o(Am),o(Hr),o(Im),o(Pr),o(Om),o(Nr),o(xm),o(Fr),o(Hm),o(qr),o(Pm),o(Br),o(Nm),o(Rr),o(Fm),o(jr),o(qm),o(zr),o(Bm),o(Wr),o(Rm),o(Vr),o(jm),o(Ur),o(zm),o(Yr),o(Wm),o(Gr),o(Vm),o(Um),o(Ym),o(Kr),o(Gm),o(Xr),o(Km),o(Xm),o(Zm),o(Zr),o(Jm),o(Jr),o(Qm),o(Qr),o(ed),o(ea),o(td),o(ta),o(nd),o(na),o(od),o(ia),o(sd),o(oa),o(ld),o(sa),o(rd),o(la),o(ad),o(ud),o(fd),o(ra),o(md),o(aa),o(dd),o(cd),o(pd),o(ua))}}}var Rp=class extends fe{constructor(e){super(),de(this,e,null,Qw,me,{})}},K_=Rp;var vg={};gd(vg,{Button:()=>Gp,ButtonGroup:()=>Jp,ButtonToggle:()=>i0,Checkbox:()=>o0,ColorPalette:()=>_g,Combobox:()=>s0,Dialog:()=>Mh,Drawer:()=>Ch,Icon:()=>Bh,InfoBar:()=>bh,InputDate:()=>l0,InputMath:()=>r0,InputNumber:()=>a0,InputPassword:()=>u0,InputRating:()=>f0,InputSearch:()=>d0,InputTag:()=>c0,InputText:()=>g0,InputTime:()=>p0,Menu:()=>Fh,MessageBox:()=>wh,NotificationCenter:()=>vh,Panel:()=>Lh,Popover:()=>Ah,PushButton:()=>Xp,Radio:()=>_0,Range:()=>v0,Select:()=>$0,Splitter:()=>hg,Table:()=>Oh,Tag:()=>jh,Textarea:()=>w0,Toggle:()=>y0,Tooltip:()=>kh,Tree:()=>Hh,Utils:()=>cg});function X_(t,e,n){let i=t.slice();return i[3]=e[n],i}function Z_(t){let e;return{c(){e=p("p")},m(n,i){s(n,e,i),e.innerHTML=t[1]},p(n,i){i&2&&(e.innerHTML=n[1])},d(n){n&&o(e)}}}function J_(t){let e,n,i=t[3].name+"",l,r,a,u=Q_(t[3])+"",m,f,c=t[3].description+"",g;return{c(){e=p("tr"),n=p("td"),l=ne(i),r=d(),a=p("td"),m=d(),f=p("td"),g=d()},m(b,h){s(b,e,h),q(e,n),q(n,l),q(e,r),q(e,a),a.innerHTML=u,q(e,m),q(e,f),f.innerHTML=c,q(e,g)},p(b,h){h&4&&i!==(i=b[3].name+"")&&je(l,i),h&4&&u!==(u=Q_(b[3])+"")&&(a.innerHTML=u),h&4&&c!==(c=b[3].description+"")&&(f.innerHTML=c)},d(b){b&&o(e)}}}function e3(t){let e,n,i,l=Ye(t[2]),r=[];for(let a=0;a<l.length;a+=1)r[a]=J_(X_(t,l,a));return{c(){e=p("thead"),e.innerHTML="<tr><th>Attribute</th><th>Type/Value</th><th>Description</th></tr>",n=d(),i=p("tbody");for(let a=0;a<r.length;a+=1)r[a].c()},m(a,u){s(a,e,u),s(a,n,u),s(a,i,u);for(let m=0;m<r.length;m+=1)r[m]&&r[m].m(i,null)},p(a,u){if(u&4){l=Ye(a[2]);let m;for(m=0;m<l.length;m+=1){let f=X_(a,l,m);r[m]?r[m].p(f,u):(r[m]=J_(f),r[m].c(),r[m].m(i,null))}for(;m<r.length;m+=1)r[m].d(1);r.length=l.length}},d(a){a&&(o(e),o(n),o(i)),St(r,a)}}}function t3(t){let e,n,i,l,r,a,u=t[1]&&Z_(t);return r=new rs({props:{class:"api-table",selectable:"false",round:!0,$$slots:{default:[e3]},$$scope:{ctx:t}}}),{c(){e=p("h3"),n=ne(t[0]),i=d(),u&&u.c(),l=d(),S(r.$$.fragment)},m(m,f){s(m,e,f),q(e,n),s(m,i,f),u&&u.m(m,f),s(m,l,f),E(r,m,f),a=!0},p(m,[f]){(!a||f&1)&&je(n,m[0]),m[1]?u?u.p(m,f):(u=Z_(m),u.c(),u.m(l.parentNode,l)):u&&(u.d(1),u=null);let c={};f&68&&(c.$$scope={dirty:f,ctx:m}),r.$set(c)},i(m){a||($(r.$$.fragment,m),a=!0)},o(m){y(r.$$.fragment,m),a=!1},d(m){m&&(o(e),o(i),o(l)),u&&u.d(m),C(r,m)}}}function Q_(t){let e=[];t.type||(t.type="-");let n=(Array.isArray(t.type)?t.type:[t.type]).map(i=>`<i>${i}</i>`);return e.push(n.join(" | ")),typeof t.required<"u"&&e.push("<em>required</em>"),typeof t.default<"u"&&e.push(`<br>(defaults to ${t.default})`),e.join(" ")}function n3(t,e,n){let{title:i="API"}=e,{description:l=""}=e,{props:r=[{name:"id",type:"string",defalut:"",required:!0,description:"assign ID to the underlying component"}]}=e;return t.$$set=a=>{"title"in a&&n(0,i=a.title),"description"in a&&n(1,l=a.description),"props"in a&&n(2,r=a.props)},[i,l,r]}var jp=class extends fe{constructor(e){super(),de(this,e,n3,t3,me,{title:0,description:1,props:2})}},Fe=jp;function e0(t){let e,n,i=t[2]===void 0&&t0(t);return{c(){i&&i.c(),e=d(),n=p("h3"),n.textContent="Example"},m(l,r){i&&i.m(l,r),s(l,e,r),s(l,n,r)},p(l,r){l[2]===void 0?i||(i=t0(l),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null)},d(l){l&&(o(e),o(n)),i&&i.d(l)}}}function t0(t){let e;return{c(){e=p("hr")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function i3(t){let e,n,i,l,r,a=n0(t[0])+"",u,m=!t[1]&&e0(t);return{c(){m&&m.c(),e=d(),n=p("pre"),i=p("code"),l=ne(`
	`),r=new Li(!1),u=ne(`
`),r.a=u,x(i,"class","language-svelte")},m(f,c){m&&m.m(f,c),s(f,e,c),s(f,n,c),q(n,i),q(i,l),r.m(a,i),q(i,u)},p(f,[c]){f[1]?m&&(m.d(1),m=null):m?m.p(f,c):(m=e0(f),m.c(),m.m(e.parentNode,e)),c&1&&a!==(a=n0(f[0])+"")&&r.p(a)},i:Le,o:Le,d(f){f&&(o(e),o(n)),m&&m.d(f)}}}function n0(t){return t.replace(/{/gim,"&lbrace;").replace(/}/gim,"&rbrace;").replace(/</gim,"&lt;").replace(/>/gim,"&gt;").replace(/\t/gim,"    ").trim()}function o3(t,e,n){let{html:i=""}=e,{notitle:l=!1}=e,{nohr:r=void 0}=e;return t.$$set=a=>{"html"in a&&n(0,i=a.html),"notitle"in a&&n(1,l=a.notitle),"nohr"in a&&n(2,r=a.nohr)},[i,l,r]}var zp=class extends fe{constructor(e){super(),de(this,e,o3,i3,me,{html:0,notitle:1,nohr:2})}},ze=zp;function s3(t){let e,n;return{c(){e=p("pre"),n=p("code"),x(n,"class","language-")},m(i,l){s(i,e,l),q(e,n),n.innerHTML=t[0]},p(i,[l]){l&1&&(n.innerHTML=i[0])},i:Le,o:Le,d(i){i&&o(e)}}}function l3(t,e,n){let{tag:i="div"}=e,{props:l={}}=e,{text:r=""}=e,a="";Cn(()=>{requestAnimationFrame(u)});function u(){n(0,a=window.Prism.highlight(m(),window.Prism.languages.svelte,"svelte"))}function m(){let f={};for(let g in l)l[g]!==!1&&l[g]!==""&&(f[g]=l[g]);let c=JSON.stringify(f).replace(/"([^"]+)":/g,"$1:").replace(/(:)/g,"=").replace(/,/g," ").replace(/({|}|=true|default)/g,"").trim();return c&&(c=" "+c),r?`<${i}${c}>${r}</${i}>`:`<${i}${c}/>`}return t.$$set=f=>{"tag"in f&&n(1,i=f.tag),"props"in f&&n(2,l=f.props),"text"in f&&n(3,r=f.text)},[a,i,l,r]}var Wp=class extends fe{constructor(e){super(),de(this,e,l3,s3,me,{tag:1,props:2,text:3})}},Vp=Wp;function r3(t){let e,n;return{c(){e=p("pre"),n=p("code"),x(n,"class","language-json")},m(i,l){s(i,e,l),q(e,n),n.innerHTML=t[0]},p(i,[l]){l&1&&(n.innerHTML=i[0])},i:Le,o:Le,d(i){i&&o(e)}}}function a3(t){if(!t)return"";let e=JSON.stringify(t);return e=e.replace(/([:,])/g,"$1 "),e.match(/^{/)?e=e.replace(/{/g,"{ "):(e.match(/}/)&&(e=e.replace(/\]/g,`
]`)),e=e.replace(/{/g,`
    { `)),e=e.replace(/}/g," }"),e}function u3(t,e,n){let{value:i=""}=e,l="";Cn(()=>{requestAnimationFrame(r)});function r(){typeof i!="string"&&n(1,i=a3(i)),n(0,l=window.Prism.highlight(i,window.Prism.languages.json,"json"))}return t.$$set=a=>{"value"in a&&n(1,i=a.value)},[l,i]}var Up=class extends fe{constructor(e){super(),de(this,e,u3,r3,me,{value:1})}},mo=Up;function f3(t){let e,n,i=[t[0]],l={};for(let r=0;r<i.length;r+=1)l=tt(l,i[r]);return e=new De({props:l}),{c(){S(e.$$.fragment)},m(r,a){E(e,r,a),n=!0},p(r,a){let u=a&1?jt(i,[ko(r[0])]):{};e.$set(u)},i(r){n||($(e.$$.fragment,r),n=!0)},o(r){y(e.$$.fragment,r),n=!1},d(r){C(e,r)}}}function m3(t){let e,n,i=[{"data-one":"123"},t[0]],l={$$slots:{default:[d3]},$$scope:{ctx:t}};for(let r=0;r<i.length;r+=1)l=tt(l,i[r]);return e=new De({props:l}),{c(){S(e.$$.fragment)},m(r,a){E(e,r,a),n=!0},p(r,a){let u=a&1?jt(i,[i[0],ko(r[0])]):{};a&8194&&(u.$$scope={dirty:a,ctx:r}),e.$set(u)},i(r){n||($(e.$$.fragment,r),n=!0)},o(r){y(e.$$.fragment,r),n=!1},d(r){C(e,r)}}}function d3(t){let e;return{c(){e=ne(t[1])},m(n,i){s(n,e,i)},p(n,i){i&2&&je(e,n[1])},d(n){n&&o(e)}}}function c3(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O,D,L,T,A,H,I,P,N,j,K,U,G,F,z=[m3,f3],V=[];function Q(W,Y){return W[1]?0:1}a=Q(t,-1),u=V[a]=z[a](t),f=new Vp({props:{tag:"Button",text:t[1],props:t[0]}});function le(W){t[9](W)}let ee={label:"Text"};t[1]!==void 0&&(ee.value=t[1]),v=new Zn({props:ee}),_e.push(()=>Ge(v,"value",le)),_=new Qt({props:{label:"Style",items:t[3],value:""}}),_.$on("change",t[6]),O=new Qt({props:{label:"Type",items:t[4],value:""}}),O.$on("change",t[7]),L=new Qt({props:{label:"Icon",items:t[5],value:""}}),L.$on("change",t[8]);function X(W){t[10](W)}let Z={label:"Round"};t[0].round!==void 0&&(Z.value=t[0].round),A=new pn({props:Z}),_e.push(()=>Ge(A,"value",X));function ge(W){t[11](W)}let he={label:"Disabled"};return t[0].disabled!==void 0&&(he.value=t[0].disabled),P=new pn({props:he}),_e.push(()=>Ge(P,"value",ge)),G=new Fe({props:{props:t[2]}}),{c(){e=p("h2"),e.textContent="Button",n=d(),i=p("h3"),i.textContent="Live demo",l=d(),r=p("div"),u.c(),m=d(),S(f.$$.fragment),c=d(),g=p("hr"),b=d(),h=p("div"),S(v.$$.fragment),k=d(),S(_.$$.fragment),M=d(),S(O.$$.fragment),D=d(),S(L.$$.fragment),T=d(),S(A.$$.fragment),I=d(),S(P.$$.fragment),j=d(),K=p("hr"),U=d(),S(G.$$.fragment),x(r,"class","docs-buttons-row"),Pt(r,"height","3rem"),x(h,"class","button-demo-props")},m(W,Y){s(W,e,Y),s(W,n,Y),s(W,i,Y),s(W,l,Y),s(W,r,Y),V[a].m(r,null),s(W,m,Y),E(f,W,Y),s(W,c,Y),s(W,g,Y),s(W,b,Y),s(W,h,Y),E(v,h,null),q(h,k),E(_,h,null),q(h,M),E(O,h,null),q(h,D),E(L,h,null),q(h,T),E(A,h,null),q(h,I),E(P,h,null),s(W,j,Y),s(W,K,Y),s(W,U,Y),E(G,W,Y),F=!0},p(W,[Y]){let J=a;a=Q(W,Y),a===J?V[a].p(W,Y):(We(),y(V[J],1,1,()=>{V[J]=null}),Ve(),u=V[a],u?u.p(W,Y):(u=V[a]=z[a](W),u.c()),$(u,1),u.m(r,null));let pe={};Y&2&&(pe.text=W[1]),Y&1&&(pe.props=W[0]),f.$set(pe);let we={};!w&&Y&2&&(w=!0,we.value=W[1],Ue(()=>w=!1)),v.$set(we);let ve={};!H&&Y&1&&(H=!0,ve.value=W[0].round,Ue(()=>H=!1)),A.$set(ve);let ue={};!N&&Y&1&&(N=!0,ue.value=W[0].disabled,Ue(()=>N=!1)),P.$set(ue)},i(W){F||($(u),$(f.$$.fragment,W),$(v.$$.fragment,W),$(_.$$.fragment,W),$(O.$$.fragment,W),$(L.$$.fragment,W),$(A.$$.fragment,W),$(P.$$.fragment,W),$(G.$$.fragment,W),F=!0)},o(W){y(u),y(f.$$.fragment,W),y(v.$$.fragment,W),y(_.$$.fragment,W),y(O.$$.fragment,W),y(L.$$.fragment,W),y(A.$$.fragment,W),y(P.$$.fragment,W),y(G.$$.fragment,W),F=!1},d(W){W&&(o(e),o(n),o(i),o(l),o(r),o(m),o(c),o(g),o(b),o(h),o(j),o(K),o(U)),V[a].d(),C(f,W),C(v),C(_),C(O),C(L),C(A),C(P),C(G,W)}}}function p3(t,e,n){let i=[{name:"class",type:"string",description:"Additional css class name to be added to the component."},{name:"danger",description:"Button type: danger"},{name:"data-",description:"Dataset attribute allows to pass some data of a primitive type (string, number, boolean), which will be accessible in the <em>on:click</em> event listener, via button reference."},{name:"disabled",description:"Makes the button <i>disabled</i>"},{name:"icon",type:"string",description:'Adds an icon, with this name, to the button (see <a href="#Icon">icons</a> section for icon names)'},{name:"id",type:"string",description:"Assign ID to the underlying button"},{name:"info",description:"Button type: info"},{name:"link",description:"Button style: link"},{name:"outline",description:"Button style: outline"},{name:"round",description:"Makes the button round"},{name:"submit",type:["true","false"],default:"false",description:"If <i>true</i> button type is set to <i>submit</i>, otherwise it's <i>button</i>"},{name:"success",description:"Button type: success"},{name:"text",description:"Button style: text"},{name:"title",type:"string",description:"Assign title to the underlying button"},{name:"warning",description:"Button type: warning"},{name:"bind:element",type:"element",description:"Exposes the HTML element of the component."},{name:"on:click",type:"function",description:"Triggered when the button is clicked."}],l={},r="Demo button",a=[{name:"Normal",value:""},{name:"Outline",value:"outline"},{name:"Text",value:"text"},{name:"Link",value:"link"}],u=[{name:"Default",value:""},{name:"Info",value:"info"},{name:"Success",value:"success"},{name:"Warning",value:"warning"},{name:"Danger",value:"danger"}],m=[{name:"none",value:""},{name:"info",value:"info"},{name:"check",value:"check"},{name:"alert",value:"alert"},{name:"trash",value:"trash"}];function f(k){n(0,l.outline=!1,l),n(0,l.text=!1,l),n(0,l.link=!1,l),b(k.detail,!0)}function c(k){n(0,l.info=!1,l),n(0,l.success=!1,l),n(0,l.warning=!1,l),n(0,l.danger=!1,l),b(k.detail,!0)}function g(k){b("icon",k.detail)}function b(k,_){!k||typeof _>"u"||n(0,l[k]=_,l)}function h(k){r=k,n(1,r)}function v(k){t.$$.not_equal(l.round,k)&&(l.round=k,n(0,l))}function w(k){t.$$.not_equal(l.disabled,k)&&(l.disabled=k,n(0,l))}return[l,r,i,a,u,m,f,c,g,h,v,w]}var Yp=class extends fe{constructor(e){super(),de(this,e,p3,c3,me,{})}},Gp=Yp;function h3(t){let e;return{c(){e=ne("Hello")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function g3(t){let e;return{c(){e=ne("Info")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function b3(t){let e;return{c(){e=ne("Warning")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function _3(t){let e;return{c(){e=ne("Warning")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function v3(t){let e;return{c(){e=ne("Danger")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function $3(t){let e;return{c(){e=ne("Hello")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function w3(t){let e;return{c(){e=ne("Info")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function y3(t){let e;return{c(){e=ne("Warning")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function k3(t){let e;return{c(){e=ne("Warning")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function T3(t){let e;return{c(){e=ne("Danger")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function M3(t){let e;return{c(){e=ne("Hello")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function E3(t){let e;return{c(){e=ne("Info")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function C3(t){let e;return{c(){e=ne("Success")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function S3(t){let e;return{c(){e=ne("Warning")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function L3(t){let e;return{c(){e=ne("Danger")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function D3(t){let e;return{c(){e=ne("Help")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function A3(t){let e;return{c(){e=ne("Info")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function I3(t){let e;return{c(){e=ne("Success")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function O3(t){let e;return{c(){e=ne("Warning")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function x3(t){let e;return{c(){e=ne("Delete")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function H3(t){let e;return{c(){e=ne("Hello")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function P3(t){let e;return{c(){e=ne("Info")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function N3(t){let e;return{c(){e=ne("Warning")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function F3(t){let e;return{c(){e=ne("Warning")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function q3(t){let e;return{c(){e=ne("Danger")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function B3(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O,D,L,T,A,H,I,P,N,j,K,U,G,F,z,V,Q,le,ee,X,Z,ge,he,W,Y,J,pe,we,ve,ue,se,xe,ke,ce,be,Ae,ae,$e,re,oe,Oe,Ke,nt,it,lt,Ce,Ne,dt,ht,at,wt,Et,yt,gt,Vt,mt,Ut,st,xt,Ee,qe,Ie,Be,ot,Ft,Gt,qt,Bt,Xt,Rt,Jt,Me,Pe,Yt,Ht,tn,An,mn,In,Se,Je,nn,On,ln,_n,rn,vn,an,gn;return m=new ft({props:{$$slots:{default:[h3]},$$scope:{ctx:t}}}),c=new ft({props:{info:!0,$$slots:{default:[g3]},$$scope:{ctx:t}}}),b=new ft({props:{success:!0,$$slots:{default:[b3]},$$scope:{ctx:t}}}),v=new ft({props:{warning:!0,$$slots:{default:[_3]},$$scope:{ctx:t}}}),k=new ft({props:{danger:!0,$$slots:{default:[v3]},$$scope:{ctx:t}}}),L=new ft({props:{pressed:!0,$$slots:{default:[$3]},$$scope:{ctx:t}}}),A=new ft({props:{pressed:!0,info:!0,$$slots:{default:[w3]},$$scope:{ctx:t}}}),I=new ft({props:{pressed:!0,success:!0,$$slots:{default:[y3]},$$scope:{ctx:t}}}),N=new ft({props:{pressed:!0,warning:!0,$$slots:{default:[k3]},$$scope:{ctx:t}}}),K=new ft({props:{pressed:!0,danger:!0,$$slots:{default:[T3]},$$scope:{ctx:t}}}),V=new ft({props:{pressed:!0,disabled:!0,$$slots:{default:[M3]},$$scope:{ctx:t}}}),le=new ft({props:{pressed:!0,disabled:!0,info:!0,$$slots:{default:[E3]},$$scope:{ctx:t}}}),X=new ft({props:{pressed:!0,disabled:!0,success:!0,$$slots:{default:[C3]},$$scope:{ctx:t}}}),ge=new ft({props:{pressed:!0,disabled:!0,warning:!0,$$slots:{default:[S3]},$$scope:{ctx:t}}}),W=new ft({props:{pressed:!0,disabled:!0,danger:!0,$$slots:{default:[L3]},$$scope:{ctx:t}}}),ve=new ft({props:{icon:"help",$$slots:{default:[D3]},$$scope:{ctx:t}}}),se=new ft({props:{icon:"info",info:!0,$$slots:{default:[A3]},$$scope:{ctx:t}}}),ke=new ft({props:{icon:"check",success:!0,$$slots:{default:[I3]},$$scope:{ctx:t}}}),be=new ft({props:{icon:"alert",warning:!0,$$slots:{default:[O3]},$$scope:{ctx:t}}}),ae=new ft({props:{icon:"trash",danger:!0,$$slots:{default:[x3]},$$scope:{ctx:t}}}),Ke=new ft({props:{outline:!0,$$slots:{default:[H3]},$$scope:{ctx:t}}}),it=new ft({props:{outline:!0,info:!0,$$slots:{default:[P3]},$$scope:{ctx:t}}}),Ce=new ft({props:{outline:!0,success:!0,$$slots:{default:[N3]},$$scope:{ctx:t}}}),dt=new ft({props:{outline:!0,warning:!0,$$slots:{default:[F3]},$$scope:{ctx:t}}}),at=new ft({props:{outline:!0,danger:!0,$$slots:{default:[q3]},$$scope:{ctx:t}}}),xt=new ft({props:{icon:"help"}}),qe=new ft({props:{icon:"info",info:!0}}),Be=new ft({props:{icon:"check",success:!0}}),Ft=new ft({props:{icon:"alert",warning:!0}}),qt=new ft({props:{icon:"trash",danger:!0}}),tn=new ft({props:{round:!0,icon:"help"}}),mn=new ft({props:{round:!0,icon:"info",info:!0}}),Se=new ft({props:{round:!0,icon:"check",success:!0}}),nn=new ft({props:{round:!0,icon:"alert",warning:!0}}),ln=new ft({props:{round:!0,icon:"trash",danger:!0}}),rn=new ze({props:{html:t[1]}}),an=new Fe({props:{props:t[0]}}),{c(){e=p("h2"),e.textContent="Push Button",n=d(),i=p("h3"),i.textContent="Normal",l=d(),r=p("h4"),r.textContent="Default",a=d(),u=p("div"),S(m.$$.fragment),f=d(),S(c.$$.fragment),g=d(),S(b.$$.fragment),h=d(),S(v.$$.fragment),w=d(),S(k.$$.fragment),_=d(),M=p("h4"),M.textContent="Pressed",O=d(),D=p("div"),S(L.$$.fragment),T=d(),S(A.$$.fragment),H=d(),S(I.$$.fragment),P=d(),S(N.$$.fragment),j=d(),S(K.$$.fragment),U=d(),G=p("h4"),G.textContent="Disabled",F=d(),z=p("div"),S(V.$$.fragment),Q=d(),S(le.$$.fragment),ee=d(),S(X.$$.fragment),Z=d(),S(ge.$$.fragment),he=d(),S(W.$$.fragment),Y=d(),J=p("h4"),J.textContent="With icon",pe=d(),we=p("div"),S(ve.$$.fragment),ue=d(),S(se.$$.fragment),xe=d(),S(ke.$$.fragment),ce=d(),S(be.$$.fragment),Ae=d(),S(ae.$$.fragment),$e=d(),re=p("h4"),re.textContent="Outline",oe=d(),Oe=p("div"),S(Ke.$$.fragment),nt=d(),S(it.$$.fragment),lt=d(),S(Ce.$$.fragment),Ne=d(),S(dt.$$.fragment),ht=d(),S(at.$$.fragment),wt=d(),Et=p("hr"),yt=d(),gt=p("h3"),gt.textContent="Icon only buttons",Vt=d(),mt=p("h4"),mt.textContent="Default",Ut=d(),st=p("div"),S(xt.$$.fragment),Ee=d(),S(qe.$$.fragment),Ie=d(),S(Be.$$.fragment),ot=d(),S(Ft.$$.fragment),Gt=d(),S(qt.$$.fragment),Bt=d(),Xt=p("hr"),Rt=d(),Jt=p("h3"),Jt.textContent="Icon only, and round",Me=d(),Pe=p("h4"),Pe.textContent="Default",Yt=d(),Ht=p("div"),S(tn.$$.fragment),An=d(),S(mn.$$.fragment),In=d(),S(Se.$$.fragment),Je=d(),S(nn.$$.fragment),On=d(),S(ln.$$.fragment),_n=d(),S(rn.$$.fragment),vn=d(),S(an.$$.fragment),x(u,"class","docs-buttons-row"),x(D,"class","docs-buttons-row"),x(z,"class","docs-buttons-row"),x(we,"class","docs-buttons-row"),x(Oe,"class","docs-buttons-row"),x(st,"class","docs-buttons-row"),x(Ht,"class","docs-buttons-row")},m(Te,te){s(Te,e,te),s(Te,n,te),s(Te,i,te),s(Te,l,te),s(Te,r,te),s(Te,a,te),s(Te,u,te),E(m,u,null),q(u,f),E(c,u,null),q(u,g),E(b,u,null),q(u,h),E(v,u,null),q(u,w),E(k,u,null),s(Te,_,te),s(Te,M,te),s(Te,O,te),s(Te,D,te),E(L,D,null),q(D,T),E(A,D,null),q(D,H),E(I,D,null),q(D,P),E(N,D,null),q(D,j),E(K,D,null),s(Te,U,te),s(Te,G,te),s(Te,F,te),s(Te,z,te),E(V,z,null),q(z,Q),E(le,z,null),q(z,ee),E(X,z,null),q(z,Z),E(ge,z,null),q(z,he),E(W,z,null),s(Te,Y,te),s(Te,J,te),s(Te,pe,te),s(Te,we,te),E(ve,we,null),q(we,ue),E(se,we,null),q(we,xe),E(ke,we,null),q(we,ce),E(be,we,null),q(we,Ae),E(ae,we,null),s(Te,$e,te),s(Te,re,te),s(Te,oe,te),s(Te,Oe,te),E(Ke,Oe,null),q(Oe,nt),E(it,Oe,null),q(Oe,lt),E(Ce,Oe,null),q(Oe,Ne),E(dt,Oe,null),q(Oe,ht),E(at,Oe,null),s(Te,wt,te),s(Te,Et,te),s(Te,yt,te),s(Te,gt,te),s(Te,Vt,te),s(Te,mt,te),s(Te,Ut,te),s(Te,st,te),E(xt,st,null),q(st,Ee),E(qe,st,null),q(st,Ie),E(Be,st,null),q(st,ot),E(Ft,st,null),q(st,Gt),E(qt,st,null),s(Te,Bt,te),s(Te,Xt,te),s(Te,Rt,te),s(Te,Jt,te),s(Te,Me,te),s(Te,Pe,te),s(Te,Yt,te),s(Te,Ht,te),E(tn,Ht,null),q(Ht,An),E(mn,Ht,null),q(Ht,In),E(Se,Ht,null),q(Ht,Je),E(nn,Ht,null),q(Ht,On),E(ln,Ht,null),s(Te,_n,te),E(rn,Te,te),s(Te,vn,te),E(an,Te,te),gn=!0},p(Te,[te]){let He={};te&4&&(He.$$scope={dirty:te,ctx:Te}),m.$set(He);let $n={};te&4&&($n.$$scope={dirty:te,ctx:Te}),c.$set($n);let xn={};te&4&&(xn.$$scope={dirty:te,ctx:Te}),b.$set(xn);let wn={};te&4&&(wn.$$scope={dirty:te,ctx:Te}),v.$set(wn);let Hn={};te&4&&(Hn.$$scope={dirty:te,ctx:Te}),k.$set(Hn);let yn={};te&4&&(yn.$$scope={dirty:te,ctx:Te}),L.$set(yn);let Pn={};te&4&&(Pn.$$scope={dirty:te,ctx:Te}),A.$set(Pn);let kn={};te&4&&(kn.$$scope={dirty:te,ctx:Te}),I.$set(kn);let Nn={};te&4&&(Nn.$$scope={dirty:te,ctx:Te}),N.$set(Nn);let Fn={};te&4&&(Fn.$$scope={dirty:te,ctx:Te}),K.$set(Fn);let qn={};te&4&&(qn.$$scope={dirty:te,ctx:Te}),V.$set(qn);let Tn={};te&4&&(Tn.$$scope={dirty:te,ctx:Te}),le.$set(Tn);let Bn={};te&4&&(Bn.$$scope={dirty:te,ctx:Te}),X.$set(Bn);let Mn={};te&4&&(Mn.$$scope={dirty:te,ctx:Te}),ge.$set(Mn);let Rn={};te&4&&(Rn.$$scope={dirty:te,ctx:Te}),W.$set(Rn);let En={};te&4&&(En.$$scope={dirty:te,ctx:Te}),ve.$set(En);let ci={};te&4&&(ci.$$scope={dirty:te,ctx:Te}),se.$set(ci);let ti={};te&4&&(ti.$$scope={dirty:te,ctx:Te}),ke.$set(ti);let pi={};te&4&&(pi.$$scope={dirty:te,ctx:Te}),be.$set(pi);let ni={};te&4&&(ni.$$scope={dirty:te,ctx:Te}),ae.$set(ni);let hi={};te&4&&(hi.$$scope={dirty:te,ctx:Te}),Ke.$set(hi);let ii={};te&4&&(ii.$$scope={dirty:te,ctx:Te}),it.$set(ii);let gi={};te&4&&(gi.$$scope={dirty:te,ctx:Te}),Ce.$set(gi);let oi={};te&4&&(oi.$$scope={dirty:te,ctx:Te}),dt.$set(oi);let bi={};te&4&&(bi.$$scope={dirty:te,ctx:Te}),at.$set(bi)},i(Te){gn||($(m.$$.fragment,Te),$(c.$$.fragment,Te),$(b.$$.fragment,Te),$(v.$$.fragment,Te),$(k.$$.fragment,Te),$(L.$$.fragment,Te),$(A.$$.fragment,Te),$(I.$$.fragment,Te),$(N.$$.fragment,Te),$(K.$$.fragment,Te),$(V.$$.fragment,Te),$(le.$$.fragment,Te),$(X.$$.fragment,Te),$(ge.$$.fragment,Te),$(W.$$.fragment,Te),$(ve.$$.fragment,Te),$(se.$$.fragment,Te),$(ke.$$.fragment,Te),$(be.$$.fragment,Te),$(ae.$$.fragment,Te),$(Ke.$$.fragment,Te),$(it.$$.fragment,Te),$(Ce.$$.fragment,Te),$(dt.$$.fragment,Te),$(at.$$.fragment,Te),$(xt.$$.fragment,Te),$(qe.$$.fragment,Te),$(Be.$$.fragment,Te),$(Ft.$$.fragment,Te),$(qt.$$.fragment,Te),$(tn.$$.fragment,Te),$(mn.$$.fragment,Te),$(Se.$$.fragment,Te),$(nn.$$.fragment,Te),$(ln.$$.fragment,Te),$(rn.$$.fragment,Te),$(an.$$.fragment,Te),gn=!0)},o(Te){y(m.$$.fragment,Te),y(c.$$.fragment,Te),y(b.$$.fragment,Te),y(v.$$.fragment,Te),y(k.$$.fragment,Te),y(L.$$.fragment,Te),y(A.$$.fragment,Te),y(I.$$.fragment,Te),y(N.$$.fragment,Te),y(K.$$.fragment,Te),y(V.$$.fragment,Te),y(le.$$.fragment,Te),y(X.$$.fragment,Te),y(ge.$$.fragment,Te),y(W.$$.fragment,Te),y(ve.$$.fragment,Te),y(se.$$.fragment,Te),y(ke.$$.fragment,Te),y(be.$$.fragment,Te),y(ae.$$.fragment,Te),y(Ke.$$.fragment,Te),y(it.$$.fragment,Te),y(Ce.$$.fragment,Te),y(dt.$$.fragment,Te),y(at.$$.fragment,Te),y(xt.$$.fragment,Te),y(qe.$$.fragment,Te),y(Be.$$.fragment,Te),y(Ft.$$.fragment,Te),y(qt.$$.fragment,Te),y(tn.$$.fragment,Te),y(mn.$$.fragment,Te),y(Se.$$.fragment,Te),y(nn.$$.fragment,Te),y(ln.$$.fragment,Te),y(rn.$$.fragment,Te),y(an.$$.fragment,Te),gn=!1},d(Te){Te&&(o(e),o(n),o(i),o(l),o(r),o(a),o(u),o(_),o(M),o(O),o(D),o(U),o(G),o(F),o(z),o(Y),o(J),o(pe),o(we),o($e),o(re),o(oe),o(Oe),o(wt),o(Et),o(yt),o(gt),o(Vt),o(mt),o(Ut),o(st),o(Bt),o(Xt),o(Rt),o(Jt),o(Me),o(Pe),o(Yt),o(Ht),o(_n),o(vn)),C(m),C(c),C(b),C(v),C(k),C(L),C(A),C(I),C(N),C(K),C(V),C(le),C(X),C(ge),C(W),C(ve),C(se),C(ke),C(be),C(ae),C(Ke),C(it),C(Ce),C(dt),C(at),C(xt),C(qe),C(Be),C(Ft),C(qt),C(tn),C(mn),C(Se),C(nn),C(ln),C(rn,Te),C(an,Te)}}}function R3(t){return[[{name:"class",type:"string",description:"Additional css class name to be added to the component."},{name:"danger",description:"Button type: danger"},{name:"disabled",description:"Makes the button <i>disabled</i>"},{name:"icon",type:"string",description:'Adds an icon, with this name, to the button (see <a href="#Icon">icons</a> section for icon names)'},{name:"id",type:"string",description:"Assign ID to the underlying button"},{name:"outline",description:"Button style: outline"},{name:"pressed",type:["true","false"],default:"false",description:"Initial <i>pressed</i> state of the button."},{name:"round",description:"Makes the button round"},{name:"submit",type:["true","false"],default:"false",description:"If <i>true</i> button type is set to <i>submit</i>, otherwise it's <i>button</i>"},{name:"success",description:"Button type: success"},{name:"title",type:"string",description:"Assign title to the underlying button"},{name:"warning",description:"Button type: warning"},{name:"bind:element",type:"element",description:"Exposes the HTML element of the component."},{name:"on:click",type:"function",description:"Triggered when the button is clicked."}],`
<PushButton round icon="info" on:change="{onChange}"></PushButton>

<script>
function onChange (e) {
    const { pressed } = e.detail;
    console.log('is pressed:', pressed);
}
&lt;/script>
`]}var Kp=class extends fe{constructor(e){super(),de(this,e,R3,B3,me,{})}},Xp=Kp;function j3(t){let e;return{c(){e=ne("One")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function z3(t){let e;return{c(){e=ne("Disabled")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function W3(t){let e;return{c(){e=ne("Three")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function V3(t){let e;return{c(){e=ne("Four")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function U3(t){let e,n,i,l,r,a,u,m;return e=new De({props:{$$slots:{default:[j3]},$$scope:{ctx:t}}}),i=new De({props:{disabled:!0,$$slots:{default:[z3]},$$scope:{ctx:t}}}),r=new De({props:{$$slots:{default:[W3]},$$scope:{ctx:t}}}),u=new De({props:{$$slots:{default:[V3]},$$scope:{ctx:t}}}),{c(){S(e.$$.fragment),n=d(),S(i.$$.fragment),l=d(),S(r.$$.fragment),a=d(),S(u.$$.fragment)},m(f,c){E(e,f,c),s(f,n,c),E(i,f,c),s(f,l,c),E(r,f,c),s(f,a,c),E(u,f,c),m=!0},p(f,c){let g={};c&4&&(g.$$scope={dirty:c,ctx:f}),e.$set(g);let b={};c&4&&(b.$$scope={dirty:c,ctx:f}),i.$set(b);let h={};c&4&&(h.$$scope={dirty:c,ctx:f}),r.$set(h);let v={};c&4&&(v.$$scope={dirty:c,ctx:f}),u.$set(v)},i(f){m||($(e.$$.fragment,f),$(i.$$.fragment,f),$(r.$$.fragment,f),$(u.$$.fragment,f),m=!0)},o(f){y(e.$$.fragment,f),y(i.$$.fragment,f),y(r.$$.fragment,f),y(u.$$.fragment,f),m=!1},d(f){f&&(o(n),o(l),o(a)),C(e,f),C(i,f),C(r,f),C(u,f)}}}function Y3(t){let e;return{c(){e=ne("One")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function G3(t){let e;return{c(){e=ne("Disabled")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function K3(t){let e;return{c(){e=ne("Three")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function X3(t){let e;return{c(){e=ne("Four")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function Z3(t){let e;return{c(){e=ne("Five")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function J3(t){let e;return{c(){e=ne("Six")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function Q3(t){let e;return{c(){e=ne("Seven")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function e4(t){let e;return{c(){e=ne("Eight")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function t4(t){let e;return{c(){e=ne("Nine")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function n4(t){let e;return{c(){e=ne("Ten")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function i4(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O,D;return e=new De({props:{$$slots:{default:[Y3]},$$scope:{ctx:t}}}),i=new De({props:{disabled:!0,$$slots:{default:[G3]},$$scope:{ctx:t}}}),r=new De({props:{$$slots:{default:[K3]},$$scope:{ctx:t}}}),u=new De({props:{$$slots:{default:[X3]},$$scope:{ctx:t}}}),f=new De({props:{$$slots:{default:[Z3]},$$scope:{ctx:t}}}),g=new De({props:{$$slots:{default:[J3]},$$scope:{ctx:t}}}),h=new De({props:{$$slots:{default:[Q3]},$$scope:{ctx:t}}}),w=new De({props:{$$slots:{default:[e4]},$$scope:{ctx:t}}}),_=new De({props:{$$slots:{default:[t4]},$$scope:{ctx:t}}}),O=new De({props:{$$slots:{default:[n4]},$$scope:{ctx:t}}}),{c(){S(e.$$.fragment),n=d(),S(i.$$.fragment),l=d(),S(r.$$.fragment),a=d(),S(u.$$.fragment),m=d(),S(f.$$.fragment),c=d(),S(g.$$.fragment),b=d(),S(h.$$.fragment),v=d(),S(w.$$.fragment),k=d(),S(_.$$.fragment),M=d(),S(O.$$.fragment)},m(L,T){E(e,L,T),s(L,n,T),E(i,L,T),s(L,l,T),E(r,L,T),s(L,a,T),E(u,L,T),s(L,m,T),E(f,L,T),s(L,c,T),E(g,L,T),s(L,b,T),E(h,L,T),s(L,v,T),E(w,L,T),s(L,k,T),E(_,L,T),s(L,M,T),E(O,L,T),D=!0},p(L,T){let A={};T&4&&(A.$$scope={dirty:T,ctx:L}),e.$set(A);let H={};T&4&&(H.$$scope={dirty:T,ctx:L}),i.$set(H);let I={};T&4&&(I.$$scope={dirty:T,ctx:L}),r.$set(I);let P={};T&4&&(P.$$scope={dirty:T,ctx:L}),u.$set(P);let N={};T&4&&(N.$$scope={dirty:T,ctx:L}),f.$set(N);let j={};T&4&&(j.$$scope={dirty:T,ctx:L}),g.$set(j);let K={};T&4&&(K.$$scope={dirty:T,ctx:L}),h.$set(K);let U={};T&4&&(U.$$scope={dirty:T,ctx:L}),w.$set(U);let G={};T&4&&(G.$$scope={dirty:T,ctx:L}),_.$set(G);let F={};T&4&&(F.$$scope={dirty:T,ctx:L}),O.$set(F)},i(L){D||($(e.$$.fragment,L),$(i.$$.fragment,L),$(r.$$.fragment,L),$(u.$$.fragment,L),$(f.$$.fragment,L),$(g.$$.fragment,L),$(h.$$.fragment,L),$(w.$$.fragment,L),$(_.$$.fragment,L),$(O.$$.fragment,L),D=!0)},o(L){y(e.$$.fragment,L),y(i.$$.fragment,L),y(r.$$.fragment,L),y(u.$$.fragment,L),y(f.$$.fragment,L),y(g.$$.fragment,L),y(h.$$.fragment,L),y(w.$$.fragment,L),y(_.$$.fragment,L),y(O.$$.fragment,L),D=!1},d(L){L&&(o(n),o(l),o(a),o(m),o(c),o(b),o(v),o(k),o(M)),C(e,L),C(i,L),C(r,L),C(u,L),C(f,L),C(g,L),C(h,L),C(w,L),C(_,L),C(O,L)}}}function o4(t){let e;return{c(){e=ne("One")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function s4(t){let e;return{c(){e=ne("Disabled")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function l4(t){let e;return{c(){e=ne("Three")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function r4(t){let e;return{c(){e=ne("Four")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function a4(t){let e,n,i,l,r,a,u,m;return e=new De({props:{info:!0,$$slots:{default:[o4]},$$scope:{ctx:t}}}),i=new De({props:{success:!0,disabled:!0,$$slots:{default:[s4]},$$scope:{ctx:t}}}),r=new De({props:{warning:!0,$$slots:{default:[l4]},$$scope:{ctx:t}}}),u=new De({props:{danger:!0,$$slots:{default:[r4]},$$scope:{ctx:t}}}),{c(){S(e.$$.fragment),n=d(),S(i.$$.fragment),l=d(),S(r.$$.fragment),a=d(),S(u.$$.fragment)},m(f,c){E(e,f,c),s(f,n,c),E(i,f,c),s(f,l,c),E(r,f,c),s(f,a,c),E(u,f,c),m=!0},p(f,c){let g={};c&4&&(g.$$scope={dirty:c,ctx:f}),e.$set(g);let b={};c&4&&(b.$$scope={dirty:c,ctx:f}),i.$set(b);let h={};c&4&&(h.$$scope={dirty:c,ctx:f}),r.$set(h);let v={};c&4&&(v.$$scope={dirty:c,ctx:f}),u.$set(v)},i(f){m||($(e.$$.fragment,f),$(i.$$.fragment,f),$(r.$$.fragment,f),$(u.$$.fragment,f),m=!0)},o(f){y(e.$$.fragment,f),y(i.$$.fragment,f),y(r.$$.fragment,f),y(u.$$.fragment,f),m=!1},d(f){f&&(o(n),o(l),o(a)),C(e,f),C(i,f),C(r,f),C(u,f)}}}function u4(t){let e;return{c(){e=ne("One")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function f4(t){let e;return{c(){e=ne("Two")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function m4(t){let e;return{c(){e=ne("Disabled")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function d4(t){let e;return{c(){e=ne("Four")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function c4(t){let e,n,i,l,r,a,u,m;return e=new De({props:{outline:!0,$$slots:{default:[u4]},$$scope:{ctx:t}}}),i=new De({props:{outline:!0,$$slots:{default:[f4]},$$scope:{ctx:t}}}),r=new De({props:{outline:!0,disabled:!0,$$slots:{default:[m4]},$$scope:{ctx:t}}}),u=new De({props:{outline:!0,$$slots:{default:[d4]},$$scope:{ctx:t}}}),{c(){S(e.$$.fragment),n=d(),S(i.$$.fragment),l=d(),S(r.$$.fragment),a=d(),S(u.$$.fragment)},m(f,c){E(e,f,c),s(f,n,c),E(i,f,c),s(f,l,c),E(r,f,c),s(f,a,c),E(u,f,c),m=!0},p(f,c){let g={};c&4&&(g.$$scope={dirty:c,ctx:f}),e.$set(g);let b={};c&4&&(b.$$scope={dirty:c,ctx:f}),i.$set(b);let h={};c&4&&(h.$$scope={dirty:c,ctx:f}),r.$set(h);let v={};c&4&&(v.$$scope={dirty:c,ctx:f}),u.$set(v)},i(f){m||($(e.$$.fragment,f),$(i.$$.fragment,f),$(r.$$.fragment,f),$(u.$$.fragment,f),m=!0)},o(f){y(e.$$.fragment,f),y(i.$$.fragment,f),y(r.$$.fragment,f),y(u.$$.fragment,f),m=!1},d(f){f&&(o(n),o(l),o(a)),C(e,f),C(i,f),C(r,f),C(u,f)}}}function p4(t){let e;return{c(){e=ne("One")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function h4(t){let e;return{c(){e=ne("Disabled")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function g4(t){let e;return{c(){e=ne("Three")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function b4(t){let e;return{c(){e=ne("Four")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function _4(t){let e,n,i,l,r,a,u,m;return e=new De({props:{text:!0,$$slots:{default:[p4]},$$scope:{ctx:t}}}),i=new De({props:{text:!0,disabled:!0,$$slots:{default:[h4]},$$scope:{ctx:t}}}),r=new De({props:{text:!0,$$slots:{default:[g4]},$$scope:{ctx:t}}}),u=new De({props:{text:!0,$$slots:{default:[b4]},$$scope:{ctx:t}}}),{c(){S(e.$$.fragment),n=d(),S(i.$$.fragment),l=d(),S(r.$$.fragment),a=d(),S(u.$$.fragment)},m(f,c){E(e,f,c),s(f,n,c),E(i,f,c),s(f,l,c),E(r,f,c),s(f,a,c),E(u,f,c),m=!0},p(f,c){let g={};c&4&&(g.$$scope={dirty:c,ctx:f}),e.$set(g);let b={};c&4&&(b.$$scope={dirty:c,ctx:f}),i.$set(b);let h={};c&4&&(h.$$scope={dirty:c,ctx:f}),r.$set(h);let v={};c&4&&(v.$$scope={dirty:c,ctx:f}),u.$set(v)},i(f){m||($(e.$$.fragment,f),$(i.$$.fragment,f),$(r.$$.fragment,f),$(u.$$.fragment,f),m=!0)},o(f){y(e.$$.fragment,f),y(i.$$.fragment,f),y(r.$$.fragment,f),y(u.$$.fragment,f),m=!1},d(f){f&&(o(n),o(l),o(a)),C(e,f),C(i,f),C(r,f),C(u,f)}}}function v4(t){let e;return{c(){e=ne("One")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function $4(t){let e;return{c(){e=ne("Two")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function w4(t){let e;return{c(){e=ne("Three")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function y4(t){let e,n,i,l,r,a;return e=new ft({props:{$$slots:{default:[v4]},$$scope:{ctx:t}}}),i=new ft({props:{$$slots:{default:[$4]},$$scope:{ctx:t}}}),r=new ft({props:{$$slots:{default:[w4]},$$scope:{ctx:t}}}),{c(){S(e.$$.fragment),n=d(),S(i.$$.fragment),l=d(),S(r.$$.fragment)},m(u,m){E(e,u,m),s(u,n,m),E(i,u,m),s(u,l,m),E(r,u,m),a=!0},p(u,m){let f={};m&4&&(f.$$scope={dirty:m,ctx:u}),e.$set(f);let c={};m&4&&(c.$$scope={dirty:m,ctx:u}),i.$set(c);let g={};m&4&&(g.$$scope={dirty:m,ctx:u}),r.$set(g)},i(u){a||($(e.$$.fragment,u),$(i.$$.fragment,u),$(r.$$.fragment,u),a=!0)},o(u){y(e.$$.fragment,u),y(i.$$.fragment,u),y(r.$$.fragment,u),a=!1},d(u){u&&(o(n),o(l)),C(e,u),C(i,u),C(r,u)}}}function k4(t){let e;return{c(){e=ne("One")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function T4(t){let e;return{c(){e=ne("Two")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function M4(t){let e;return{c(){e=ne("Three")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function E4(t){let e,n,i,l,r,a;return e=new De({props:{$$slots:{default:[k4]},$$scope:{ctx:t}}}),i=new De({props:{$$slots:{default:[T4]},$$scope:{ctx:t}}}),r=new De({props:{$$slots:{default:[M4]},$$scope:{ctx:t}}}),{c(){S(e.$$.fragment),n=d(),S(i.$$.fragment),l=d(),S(r.$$.fragment)},m(u,m){E(e,u,m),s(u,n,m),E(i,u,m),s(u,l,m),E(r,u,m),a=!0},p(u,m){let f={};m&4&&(f.$$scope={dirty:m,ctx:u}),e.$set(f);let c={};m&4&&(c.$$scope={dirty:m,ctx:u}),i.$set(c);let g={};m&4&&(g.$$scope={dirty:m,ctx:u}),r.$set(g)},i(u){a||($(e.$$.fragment,u),$(i.$$.fragment,u),$(r.$$.fragment,u),a=!0)},o(u){y(e.$$.fragment,u),y(i.$$.fragment,u),y(r.$$.fragment,u),a=!1},d(u){u&&(o(n),o(l)),C(e,u),C(i,u),C(r,u)}}}function C4(t){let e;return{c(){e=ne("One")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function S4(t){let e;return{c(){e=ne("Two")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function L4(t){let e;return{c(){e=ne("Three")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function D4(t){let e,n,i,l,r,a;return e=new De({props:{icon:"info",$$slots:{default:[C4]},$$scope:{ctx:t}}}),i=new De({props:{icon:"check",$$slots:{default:[S4]},$$scope:{ctx:t}}}),r=new De({props:{icon:"alert",$$slots:{default:[L4]},$$scope:{ctx:t}}}),{c(){S(e.$$.fragment),n=d(),S(i.$$.fragment),l=d(),S(r.$$.fragment)},m(u,m){E(e,u,m),s(u,n,m),E(i,u,m),s(u,l,m),E(r,u,m),a=!0},p(u,m){let f={};m&4&&(f.$$scope={dirty:m,ctx:u}),e.$set(f);let c={};m&4&&(c.$$scope={dirty:m,ctx:u}),i.$set(c);let g={};m&4&&(g.$$scope={dirty:m,ctx:u}),r.$set(g)},i(u){a||($(e.$$.fragment,u),$(i.$$.fragment,u),$(r.$$.fragment,u),a=!0)},o(u){y(e.$$.fragment,u),y(i.$$.fragment,u),y(r.$$.fragment,u),a=!1},d(u){u&&(o(n),o(l)),C(e,u),C(i,u),C(r,u)}}}function A4(t){let e,n,i,l,r,a;return e=new De({props:{icon:"info"}}),i=new De({props:{icon:"check"}}),r=new De({props:{icon:"alert"}}),{c(){S(e.$$.fragment),n=d(),S(i.$$.fragment),l=d(),S(r.$$.fragment)},m(u,m){E(e,u,m),s(u,n,m),E(i,u,m),s(u,l,m),E(r,u,m),a=!0},p:Le,i(u){a||($(e.$$.fragment,u),$(i.$$.fragment,u),$(r.$$.fragment,u),a=!0)},o(u){y(e.$$.fragment,u),y(i.$$.fragment,u),y(r.$$.fragment,u),a=!1},d(u){u&&(o(n),o(l)),C(e,u),C(i,u),C(r,u)}}}function I4(t){let e,n,i,l,r,a;return e=new De({props:{icon:"info"}}),i=new De({props:{icon:"check"}}),r=new De({props:{icon:"alert"}}),{c(){S(e.$$.fragment),n=d(),S(i.$$.fragment),l=d(),S(r.$$.fragment)},m(u,m){E(e,u,m),s(u,n,m),E(i,u,m),s(u,l,m),E(r,u,m),a=!0},p:Le,i(u){a||($(e.$$.fragment,u),$(i.$$.fragment,u),$(r.$$.fragment,u),a=!0)},o(u){y(e.$$.fragment,u),y(i.$$.fragment,u),y(r.$$.fragment,u),a=!1},d(u){u&&(o(n),o(l)),C(e,u),C(i,u),C(r,u)}}}function O4(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O,D,L,T,A,H,I,P,N,j,K,U,G,F,z,V,Q,le,ee,X,Z,ge,he,W,Y,J,pe,we,ve;return r=new jn({props:{$$slots:{default:[U3]},$$scope:{ctx:t}}}),c=new jn({props:{$$slots:{default:[i4]},$$scope:{ctx:t}}}),v=new jn({props:{$$slots:{default:[a4]},$$scope:{ctx:t}}}),M=new jn({props:{$$slots:{default:[c4]},$$scope:{ctx:t}}}),T=new jn({props:{$$slots:{default:[_4]},$$scope:{ctx:t}}}),P=new jn({props:{$$slots:{default:[y4]},$$scope:{ctx:t}}}),U=new jn({props:{round:!0,$$slots:{default:[E4]},$$scope:{ctx:t}}}),V=new jn({props:{$$slots:{default:[D4]},$$scope:{ctx:t}}}),X=new jn({props:{$$slots:{default:[A4]},$$scope:{ctx:t}}}),W=new jn({props:{round:!0,$$slots:{default:[I4]},$$scope:{ctx:t}}}),J=new ze({props:{html:t[1]}}),we=new Fe({props:{props:t[0]}}),{c(){e=p("h2"),e.textContent="Button Group",n=d(),i=p("h3"),i.textContent="Normal",l=d(),S(r.$$.fragment),a=d(),u=p("h3"),u.textContent="Long",m=d(),f=p("div"),S(c.$$.fragment),g=d(),b=p("h3"),b.textContent="Normal, info, success, warning, danger",h=d(),S(v.$$.fragment),w=d(),k=p("h3"),k.textContent="Outline Buttons",_=d(),S(M.$$.fragment),O=d(),D=p("h3"),D.textContent="Text Buttons",L=d(),S(T.$$.fragment),A=d(),H=p("h3"),H.textContent="Push Buttons",I=d(),S(P.$$.fragment),N=d(),j=p("h3"),j.textContent="Round",K=d(),S(U.$$.fragment),G=d(),F=p("h3"),F.textContent="With icons",z=d(),S(V.$$.fragment),Q=d(),le=p("h3"),le.textContent="Icons only",ee=d(),S(X.$$.fragment),Z=d(),ge=p("h3"),ge.textContent="Icons only, and round",he=d(),S(W.$$.fragment),Y=d(),S(J.$$.fragment),pe=d(),S(we.$$.fragment),Pt(f,"width","400px"),Pt(f,"max-width","100%")},m(ue,se){s(ue,e,se),s(ue,n,se),s(ue,i,se),s(ue,l,se),E(r,ue,se),s(ue,a,se),s(ue,u,se),s(ue,m,se),s(ue,f,se),E(c,f,null),s(ue,g,se),s(ue,b,se),s(ue,h,se),E(v,ue,se),s(ue,w,se),s(ue,k,se),s(ue,_,se),E(M,ue,se),s(ue,O,se),s(ue,D,se),s(ue,L,se),E(T,ue,se),s(ue,A,se),s(ue,H,se),s(ue,I,se),E(P,ue,se),s(ue,N,se),s(ue,j,se),s(ue,K,se),E(U,ue,se),s(ue,G,se),s(ue,F,se),s(ue,z,se),E(V,ue,se),s(ue,Q,se),s(ue,le,se),s(ue,ee,se),E(X,ue,se),s(ue,Z,se),s(ue,ge,se),s(ue,he,se),E(W,ue,se),s(ue,Y,se),E(J,ue,se),s(ue,pe,se),E(we,ue,se),ve=!0},p(ue,[se]){let xe={};se&4&&(xe.$$scope={dirty:se,ctx:ue}),r.$set(xe);let ke={};se&4&&(ke.$$scope={dirty:se,ctx:ue}),c.$set(ke);let ce={};se&4&&(ce.$$scope={dirty:se,ctx:ue}),v.$set(ce);let be={};se&4&&(be.$$scope={dirty:se,ctx:ue}),M.$set(be);let Ae={};se&4&&(Ae.$$scope={dirty:se,ctx:ue}),T.$set(Ae);let ae={};se&4&&(ae.$$scope={dirty:se,ctx:ue}),P.$set(ae);let $e={};se&4&&($e.$$scope={dirty:se,ctx:ue}),U.$set($e);let re={};se&4&&(re.$$scope={dirty:se,ctx:ue}),V.$set(re);let oe={};se&4&&(oe.$$scope={dirty:se,ctx:ue}),X.$set(oe);let Oe={};se&4&&(Oe.$$scope={dirty:se,ctx:ue}),W.$set(Oe)},i(ue){ve||($(r.$$.fragment,ue),$(c.$$.fragment,ue),$(v.$$.fragment,ue),$(M.$$.fragment,ue),$(T.$$.fragment,ue),$(P.$$.fragment,ue),$(U.$$.fragment,ue),$(V.$$.fragment,ue),$(X.$$.fragment,ue),$(W.$$.fragment,ue),$(J.$$.fragment,ue),$(we.$$.fragment,ue),ve=!0)},o(ue){y(r.$$.fragment,ue),y(c.$$.fragment,ue),y(v.$$.fragment,ue),y(M.$$.fragment,ue),y(T.$$.fragment,ue),y(P.$$.fragment,ue),y(U.$$.fragment,ue),y(V.$$.fragment,ue),y(X.$$.fragment,ue),y(W.$$.fragment,ue),y(J.$$.fragment,ue),y(we.$$.fragment,ue),ve=!1},d(ue){ue&&(o(e),o(n),o(i),o(l),o(a),o(u),o(m),o(f),o(g),o(b),o(h),o(w),o(k),o(_),o(O),o(D),o(L),o(A),o(H),o(I),o(N),o(j),o(K),o(G),o(F),o(z),o(Q),o(le),o(ee),o(Z),o(ge),o(he),o(Y),o(pe)),C(r,ue),C(c),C(v,ue),C(M,ue),C(T,ue),C(P,ue),C(U,ue),C(V,ue),C(X,ue),C(W,ue),C(J,ue),C(we,ue)}}}function x4(t){return[[{name:"class",type:"string",description:"Additional css class name to be added to the component."},{name:"round",description:"Makes the buttons, on both sides of the group, round."},{name:"bind:element",type:"element",description:"Exposes the HTML element of the component."}],`
<ButtonGroup>
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
</ButtonGroup>

<script>
function onChange (e) {
    const { value, oldValue } = e.detail;
    console.log({ value, oldValue });
}
&lt;/script>
`]}var Zp=class extends fe{constructor(e){super(),de(this,e,x4,O4,me,{})}},Jp=Zp;function H4(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O,D,L,T,A,H,I,P,N,j,K,U,G,F,z,V,Q,le,ee,X,Z,ge,he,W,Y,J,pe,we,ve,ue,se,xe,ke,ce,be,Ae,ae,$e,re,oe,Oe,Ke,nt,it,lt,Ce,Ne,dt,ht,at,wt,Et,yt,gt,Vt,mt,Ut,st,xt,Ee,qe,Ie,Be,ot,Ft,Gt,qt,Bt,Xt,Rt,Jt;return u=new Qt({props:{items:t[4],value:"1"}}),b=new Qt({props:{items:t[4],value:"1"}}),_=new Qt({props:{items:t[5],value:"1"}}),H=new Qt({props:{disabled:!0,items:t[4]}}),U=new Qt({props:{round:!0,items:t[4],value:"2"}}),le=new Qt({props:{items:t[6],value:"3"}}),W=new Qt({props:{items:t[7],value:"1"}}),ue=new Qt({props:{round:!0,items:t[7],value:"2"}}),Ae=new Qt({props:{items:t[8],value:"One"}}),Ke=new Qt({props:{items:t[6],label:"Pick one"}}),Ce=new Qt({props:{items:t[6],label:"Pick one",info:"Pick your pick"}}),at=new Qt({props:{items:t[6],label:"Pick one",error:t[0]}}),at.$on("change",t[9]),gt=new Qt({props:{items:t[6],label:"Label is on the left",labelOnTheLeft:"true"}}),mt=new ze({props:{html:t[2]}}),Bt=new ze({props:{notitle:!0,html:t[3]}}),Rt=new Fe({props:{props:t[1]}}),{c(){e=p("h2"),e.textContent="Button Toggle",n=d(),i=p("p"),i.textContent="This adds a nice visual styling of the buttons on top of a radio-button group.",l=d(),r=p("h3"),r.textContent="Normal",a=d(),S(u.$$.fragment),m=d(),f=p("h3"),f.textContent="Fit width",c=d(),g=p("div"),S(b.$$.fragment),h=d(),v=p("h3"),v.textContent="With scroller",w=d(),k=p("div"),S(_.$$.fragment),M=d(),O=p("br"),D=p("br"),L=d(),T=p("h4"),T.textContent="Disabled",A=d(),S(H.$$.fragment),I=p("br"),P=p("br"),N=d(),j=p("h4"),j.textContent="Round",K=d(),S(U.$$.fragment),G=p("br"),F=p("br"),z=d(),V=p("h4"),V.textContent="With icon",Q=d(),S(le.$$.fragment),ee=p("br"),X=p("br"),Z=d(),ge=p("h3"),ge.textContent="Icon only buttons",he=d(),S(W.$$.fragment),Y=p("br"),J=p("br"),pe=d(),we=p("h3"),we.textContent="Icon only, and round",ve=d(),S(ue.$$.fragment),se=p("br"),xe=p("br"),ke=d(),ce=p("h3"),ce.innerHTML="Array of strings for <em>items</em>",be=d(),S(Ae.$$.fragment),ae=p("br"),$e=p("br"),re=d(),oe=p("h3"),oe.textContent="Label",Oe=d(),S(Ke.$$.fragment),nt=d(),it=p("h3"),it.textContent="Info",lt=d(),S(Ce.$$.fragment),Ne=d(),dt=p("h3"),dt.textContent="Error",ht=d(),S(at.$$.fragment),wt=d(),Et=p("h3"),Et.textContent="Label on the left",yt=d(),S(gt.$$.fragment),Vt=d(),S(mt.$$.fragment),Ut=d(),st=p("em"),st.textContent="Note:",xt=ne(" the component "),Ee=p("i"),Ee.textContent="value",qe=ne(" type and the item's "),Ie=p("i"),Ie.textContent="value",Be=ne(` type must match,
so you can either use `),ot=p("i"),ot.textContent="string",Ft=ne(" for both - like in the example, or "),Gt=p("i"),Gt.textContent="number",qt=ne(`, like so:
`),S(Bt.$$.fragment),Xt=d(),S(Rt.$$.fragment),x(g,"class","button-toggle-wrapper-wide"),x(k,"class","button-toggle-wrapper-wide")},m(Me,Pe){s(Me,e,Pe),s(Me,n,Pe),s(Me,i,Pe),s(Me,l,Pe),s(Me,r,Pe),s(Me,a,Pe),E(u,Me,Pe),s(Me,m,Pe),s(Me,f,Pe),s(Me,c,Pe),s(Me,g,Pe),E(b,g,null),s(Me,h,Pe),s(Me,v,Pe),s(Me,w,Pe),s(Me,k,Pe),E(_,k,null),s(Me,M,Pe),s(Me,O,Pe),s(Me,D,Pe),s(Me,L,Pe),s(Me,T,Pe),s(Me,A,Pe),E(H,Me,Pe),s(Me,I,Pe),s(Me,P,Pe),s(Me,N,Pe),s(Me,j,Pe),s(Me,K,Pe),E(U,Me,Pe),s(Me,G,Pe),s(Me,F,Pe),s(Me,z,Pe),s(Me,V,Pe),s(Me,Q,Pe),E(le,Me,Pe),s(Me,ee,Pe),s(Me,X,Pe),s(Me,Z,Pe),s(Me,ge,Pe),s(Me,he,Pe),E(W,Me,Pe),s(Me,Y,Pe),s(Me,J,Pe),s(Me,pe,Pe),s(Me,we,Pe),s(Me,ve,Pe),E(ue,Me,Pe),s(Me,se,Pe),s(Me,xe,Pe),s(Me,ke,Pe),s(Me,ce,Pe),s(Me,be,Pe),E(Ae,Me,Pe),s(Me,ae,Pe),s(Me,$e,Pe),s(Me,re,Pe),s(Me,oe,Pe),s(Me,Oe,Pe),E(Ke,Me,Pe),s(Me,nt,Pe),s(Me,it,Pe),s(Me,lt,Pe),E(Ce,Me,Pe),s(Me,Ne,Pe),s(Me,dt,Pe),s(Me,ht,Pe),E(at,Me,Pe),s(Me,wt,Pe),s(Me,Et,Pe),s(Me,yt,Pe),E(gt,Me,Pe),s(Me,Vt,Pe),E(mt,Me,Pe),s(Me,Ut,Pe),s(Me,st,Pe),s(Me,xt,Pe),s(Me,Ee,Pe),s(Me,qe,Pe),s(Me,Ie,Pe),s(Me,Be,Pe),s(Me,ot,Pe),s(Me,Ft,Pe),s(Me,Gt,Pe),s(Me,qt,Pe),E(Bt,Me,Pe),s(Me,Xt,Pe),E(Rt,Me,Pe),Jt=!0},p(Me,[Pe]){let Yt={};Pe&1&&(Yt.error=Me[0]),at.$set(Yt)},i(Me){Jt||($(u.$$.fragment,Me),$(b.$$.fragment,Me),$(_.$$.fragment,Me),$(H.$$.fragment,Me),$(U.$$.fragment,Me),$(le.$$.fragment,Me),$(W.$$.fragment,Me),$(ue.$$.fragment,Me),$(Ae.$$.fragment,Me),$(Ke.$$.fragment,Me),$(Ce.$$.fragment,Me),$(at.$$.fragment,Me),$(gt.$$.fragment,Me),$(mt.$$.fragment,Me),$(Bt.$$.fragment,Me),$(Rt.$$.fragment,Me),Jt=!0)},o(Me){y(u.$$.fragment,Me),y(b.$$.fragment,Me),y(_.$$.fragment,Me),y(H.$$.fragment,Me),y(U.$$.fragment,Me),y(le.$$.fragment,Me),y(W.$$.fragment,Me),y(ue.$$.fragment,Me),y(Ae.$$.fragment,Me),y(Ke.$$.fragment,Me),y(Ce.$$.fragment,Me),y(at.$$.fragment,Me),y(gt.$$.fragment,Me),y(mt.$$.fragment,Me),y(Bt.$$.fragment,Me),y(Rt.$$.fragment,Me),Jt=!1},d(Me){Me&&(o(e),o(n),o(i),o(l),o(r),o(a),o(m),o(f),o(c),o(g),o(h),o(v),o(w),o(k),o(M),o(O),o(D),o(L),o(T),o(A),o(I),o(P),o(N),o(j),o(K),o(G),o(F),o(z),o(V),o(Q),o(ee),o(X),o(Z),o(ge),o(he),o(Y),o(J),o(pe),o(we),o(ve),o(se),o(xe),o(ke),o(ce),o(be),o(ae),o($e),o(re),o(oe),o(Oe),o(nt),o(it),o(lt),o(Ne),o(dt),o(ht),o(wt),o(Et),o(yt),o(Vt),o(Ut),o(st),o(xt),o(Ee),o(qe),o(Ie),o(Be),o(ot),o(Ft),o(Gt),o(qt),o(Xt)),C(u,Me),C(b),C(_),C(H,Me),C(U,Me),C(le,Me),C(W,Me),C(ue,Me),C(Ae,Me),C(Ke,Me),C(Ce,Me),C(at,Me),C(gt,Me),C(mt,Me),C(Bt,Me),C(Rt,Me)}}}function P4(t,e,n){let i=[{name:"class",type:"string",description:"Additional css class name to be added to the component."},{name:"disabled",description:"Makes the component disabled."},{name:"id",type:"string",description:"Assign id to the first radio button in the group (useful for the associate label's <i>for</i> attribute)"},{name:"info",type:"string",description:"Show info message above the toggle."},{name:"error",type:"string",description:"Error message to show above the toggle."},{name:"label",type:"string",description:"Label for the toggle."},{name:"labelOnTheLeft",type:["true","false"],default:"false",description:"Put label to the left of the input (instead of at the top). Usually in longer forms, to align labels and inputs, hence input also gets <em>width: 100%</em>, as it will be constraint by the form container."},{name:"items",type:"array",required:!0,description:"An array of strings or objects in the following format: <code>&lbrace; name: string, value: string | number, icon?: string &rbrace;</code>"},{name:"name",type:"string",description:"Assign name to the underlying radio group"},{name:"round",description:"Makes the buttons, on both sides of the group, round."},{name:"title",type:"string",description:"Assign title to the component"},{name:"value",type:["string","number"],description:"Assign initial value to the underlying radio group"},{name:"bind:element",type:"element",description:"Exposes the HTML element of the component."},{name:"on:change",type:"function",description:"Triggered when the value changes."}],l=`
<ButtonToggle items="{buttons}" value="2" />

<script>
const buttons = [
    { name: 'One', value: '1' },
    { name: 'Two', value: '2' },
    { name: 'Three', value: '3' },
];
&lt;/script>
`,r=`
<ButtonToggle items="{buttons}" value="{2}" />

<script>
const buttons = [
    { name: 'One', value: 1 },
    { name: 'Two', value: 2 },
    { name: 'Three', value: 3 },
];
&lt;/script>
`,a=[{name:"One",value:"1"},{name:"Two",value:"2"},{name:"Three",value:"3"}],u=["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen"],m=[{name:"One",icon:"info",value:"1"},{name:"Two and some long text",icon:"check",value:"2"},{name:"Three",icon:"alert",value:"3"}],f=[{icon:"info",value:"1"},{icon:"check",value:"2"},{icon:"alert",value:"3"}],c=["One","Two","Three"],g="You picked wrong!";function b(h){let v=h.detail;console.log(v),n(0,g=v==="1"?"":"You picked wrong!")}return[g,i,l,r,a,u,m,f,c,b]}var Qp=class extends fe{constructor(e){super(),de(this,e,P4,H4,me,{})}},i0=Qp;function N4(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O,D,L,T,A,H,I,P,N,j,K,U,G,F,z,V,Q,le,ee,X,Z,ge,he;return r=new Xn({props:{label:"I do not wish to be excluded from the dont-send-newsletter list, not."}}),r.$on("change",t[3]),f=new Xn({props:{disabled:!0,label:"I would like to receive all your spam, please."}}),b=new Xn({props:{checked:"true",disabled:!0,label:"You can't check me!"}}),k=new Xn({props:{checked:"true",label:"Check the checkbox to have the checkbox checked."}}),D=new Xn({props:{indeterminate:"true",label:"Check, mate!"}}),H=new Xn({props:{error:t[0],label:"Please, check this by mistake."}}),H.$on("change",t[3]),j=new Xn({props:{info:"This checkbox is the most important box ever!",label:"Please, check this by mistake."}}),F=new Xn({props:{info:"This checkbox is the most important box ever!",error:"And you're wrong!",label:"Please, check this by mistake."}}),le=new Xn({props:{label:"Label is on the left",labelOnTheLeft:"true"}}),X=new ze({props:{html:t[2]}}),ge=new Fe({props:{props:t[1]}}),{c(){e=p("h2"),e.textContent="Checkbox",n=d(),i=p("h3"),i.textContent="Normal",l=d(),S(r.$$.fragment),a=d(),u=p("h3"),u.textContent="Disabled",m=d(),S(f.$$.fragment),c=p("br"),g=d(),S(b.$$.fragment),h=d(),v=p("h3"),v.textContent="Checked",w=d(),S(k.$$.fragment),_=d(),M=p("h3"),M.textContent="Indeterminate",O=d(),S(D.$$.fragment),L=d(),T=p("h3"),T.textContent="With error and live validation",A=d(),S(H.$$.fragment),I=d(),P=p("h3"),P.textContent="With info",N=d(),S(j.$$.fragment),K=d(),U=p("h3"),U.textContent="With error and info",G=d(),S(F.$$.fragment),z=d(),V=p("h3"),V.textContent="Label on the left",Q=d(),S(le.$$.fragment),ee=d(),S(X.$$.fragment),Z=d(),S(ge.$$.fragment)},m(W,Y){s(W,e,Y),s(W,n,Y),s(W,i,Y),s(W,l,Y),E(r,W,Y),s(W,a,Y),s(W,u,Y),s(W,m,Y),E(f,W,Y),s(W,c,Y),s(W,g,Y),E(b,W,Y),s(W,h,Y),s(W,v,Y),s(W,w,Y),E(k,W,Y),s(W,_,Y),s(W,M,Y),s(W,O,Y),E(D,W,Y),s(W,L,Y),s(W,T,Y),s(W,A,Y),E(H,W,Y),s(W,I,Y),s(W,P,Y),s(W,N,Y),E(j,W,Y),s(W,K,Y),s(W,U,Y),s(W,G,Y),E(F,W,Y),s(W,z,Y),s(W,V,Y),s(W,Q,Y),E(le,W,Y),s(W,ee,Y),E(X,W,Y),s(W,Z,Y),E(ge,W,Y),he=!0},p(W,[Y]){let J={};Y&1&&(J.error=W[0]),H.$set(J)},i(W){he||($(r.$$.fragment,W),$(f.$$.fragment,W),$(b.$$.fragment,W),$(k.$$.fragment,W),$(D.$$.fragment,W),$(H.$$.fragment,W),$(j.$$.fragment,W),$(F.$$.fragment,W),$(le.$$.fragment,W),$(X.$$.fragment,W),$(ge.$$.fragment,W),he=!0)},o(W){y(r.$$.fragment,W),y(f.$$.fragment,W),y(b.$$.fragment,W),y(k.$$.fragment,W),y(D.$$.fragment,W),y(H.$$.fragment,W),y(j.$$.fragment,W),y(F.$$.fragment,W),y(le.$$.fragment,W),y(X.$$.fragment,W),y(ge.$$.fragment,W),he=!1},d(W){W&&(o(e),o(n),o(i),o(l),o(a),o(u),o(m),o(c),o(g),o(h),o(v),o(w),o(_),o(M),o(O),o(L),o(T),o(A),o(I),o(P),o(N),o(K),o(U),o(G),o(z),o(V),o(Q),o(ee),o(Z)),C(r,W),C(f,W),C(b,W),C(k,W),C(D,W),C(H,W),C(j,W),C(F,W),C(le,W),C(X,W),C(ge,W)}}}function F4(t,e,n){let i=[{name:"checked",type:["true","false"],description:"Make the checkbox checked or unchecked."},{name:"class",type:"string",description:"Additional css class name to be added to the component."},{name:"disabled",description:"Make the input disabled."},{name:"error",type:"string",description:"Error message to show above the input."},{name:"id",type:"string",description:"Assign ID to the underlying input."},{name:"indeterminate",type:["true","false"],description:"If set to <i>true</i> it makes the checkbox show its 3rd state - indeterminate."},{name:"info",type:"string",description:"Show info message above the input."},{name:"label",type:"string",description:"Label for the input."},{name:"labelOnTheLeft",type:["true","false"],default:"false",description:"Put label to the left of the input (instead of at the top). Usually in longer forms, to align labels and inputs, hence input also gets <em>width: 100%</em>, as it will be constraint by the form container."},{name:"name",type:"string",description:"Assign title to the underlying input."},{name:"title",type:"string",description:"Assign title to the component."},{name:"bind:element",type:"element",description:"Exposes the HTML element of the component."},{name:"bind:inputElement",type:"element",description:"Exposes the HTML element of the underlying input."},{name:"on:change",type:"function",description:"Triggered when the value changes."}],l=`
<Checkbox on:change="{onChange}" label="I'm a little label" {error} />

<script>
let error = '';

function onChange (e) {
	const { checked, indeterminate } = e.detail;
	error = checked ? '' : 'You must check me!'
	console.log({ checked, indeterminate });
}
&lt;/script>
`,r="You must check me!";function a(u){let{checked:m,indeterminate:f}=u.detail;n(0,r=m?"":"You must check me!"),console.log({checked:m,indeterminate:f})}return[r,i,l,a]}var eh=class extends fe{constructor(e){super(),de(this,e,F4,N4,me,{})}},o0=eh;function q4(t){let e;return{c(){e=ne("Reset")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function B4(t){let e;return{c(){e=ne("Reset")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function R4(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O,D,L,T,A,H,I,P,N,j,K,U,G,F,z,V,Q,le,ee,X,Z,ge,he,W,Y,J,pe,we,ve,ue,se,xe,ke,ce,be,Ae,ae,$e,re,oe,Oe,Ke,nt,it,lt,Ce,Ne,dt,ht,at,wt,Et,yt,gt,Vt,mt,Ut,st,xt,Ee,qe,Ie,Be,ot,Ft,Gt,qt,Bt,Xt,Rt,Jt,Me,Pe,Yt;function Ht(te){t[12](te)}let tn={items:t[7]};t[0]!==void 0&&(tn.value=t[0]),r=new bn({props:tn}),_e.push(()=>Ge(r,"value",Ht)),r.$on("change",j4),c=new mo({props:{value:t[0]}}),b=new De({props:{$$slots:{default:[q4]},$$scope:{ctx:t}}}),b.$on("click",t[10]);function An(te){t[13](te)}let mn={disabled:!0,items:t[7]};t[0]!==void 0&&(mn.value=t[0]),k=new bn({props:mn}),_e.push(()=>Ge(k,"value",An));function In(te){t[14](te)}let Se={items:t[7],placeholder:"Type to filter",allowNew:!0};t[0]!==void 0&&(Se.value=t[0]),L=new bn({props:Se}),_e.push(()=>Ge(L,"value",In));function Je(te){t[15](te)}let nn={showOnFocus:"true",items:t[7]};t[0]!==void 0&&(nn.value=t[0]),P=new bn({props:nn}),_e.push(()=>Ge(P,"value",Je));function On(te){t[16](te)}let ln={items:t[8],placeholder:"Type to filter"};t[2]!==void 0&&(ln.value=t[2]),G=new bn({props:ln}),_e.push(()=>Ge(G,"value",On)),le=new mo({props:{value:t[2]}});function _n(te){t[17](te)}let rn={items:t[9],placeholder:"Type to filter"};t[3]!==void 0&&(rn.value=t[3]),ge=new bn({props:rn}),_e.push(()=>Ge(ge,"value",_n)),pe=new mo({props:{value:t[3]}}),se=new bn({props:{items:t[7],label:"Combobox label"}}),be=new bn({props:{items:t[7],label:"Combobox label",info:"Select something here"}}),re=new bn({props:{items:t[7],label:"Combobox label",error:"You picked the wrong side!"}}),nt=new bn({props:{items:t[7],label:"Label is on the left",labelOnTheLeft:!0}});function vn(te){t[18](te)}let an={items:t[9],multiselect:!0,clearOnEsc:!0};t[4]!==void 0&&(an.value=t[4]),wt=new bn({props:an}),_e.push(()=>Ge(wt,"value",vn)),mt=new mo({props:{value:t[4]}}),st=new De({props:{$$slots:{default:[B4]},$$scope:{ctx:t}}}),st.$on("click",t[11]);function gn(te){t[19](te)}let Te={items:t[7],multiselect:!0};return t[1]!==void 0&&(Te.value=t[1]),Ie=new bn({props:Te}),_e.push(()=>Ge(Ie,"value",gn)),qt=new mo({props:{value:t[1]}}),Xt=new ze({props:{html:t[6]}}),Pe=new Fe({props:{props:t[5]}}),{c(){e=p("h2"),e.textContent="Combobox",n=d(),i=p("h3"),i.textContent="Normal",l=d(),S(r.$$.fragment),u=d(),m=p("h4"),m.textContent="Selected value:",f=d(),S(c.$$.fragment),g=d(),S(b.$$.fragment),h=d(),v=p("h3"),v.textContent="Disabled",w=d(),S(k.$$.fragment),M=d(),O=p("h3"),O.textContent="Allow arbitrary values",D=d(),S(L.$$.fragment),A=d(),H=p("h3"),H.textContent="Show on focus",I=d(),S(P.$$.fragment),j=d(),K=p("h3"),K.textContent="Simpler data (no ID, just 'name')",U=d(),S(G.$$.fragment),z=d(),V=p("h4"),V.textContent="Selected value:",Q=d(),S(le.$$.fragment),ee=d(),X=p("h3"),X.textContent="Simple data (just an array of strings)",Z=d(),S(ge.$$.fragment),W=d(),Y=p("h4"),Y.textContent="Selected value:",J=d(),S(pe.$$.fragment),we=d(),ve=p("h3"),ve.textContent="Label",ue=d(),S(se.$$.fragment),xe=d(),ke=p("h3"),ke.textContent="Info",ce=d(),S(be.$$.fragment),Ae=d(),ae=p("h3"),ae.textContent="Error",$e=d(),S(re.$$.fragment),oe=d(),Oe=p("h3"),Oe.textContent="Label on the left",Ke=d(),S(nt.$$.fragment),it=d(),lt=p("h2"),lt.innerHTML='<a href="#Combobox/Multiselect">Multiselect</a>',Ce=d(),Ne=p("p"),Ne.innerHTML="This adds checkboxes to the list items, but it disables the auto-lookup functionality,<br/>as the input value string becomes a comma-separated list of selected items&#39; names.",dt=d(),ht=p("h3"),ht.textContent="Simple data",at=d(),S(wt.$$.fragment),yt=d(),gt=p("h4"),gt.textContent="Selected value:",Vt=d(),S(mt.$$.fragment),Ut=d(),S(st.$$.fragment),xt=d(),Ee=p("h3"),Ee.textContent="Complex data",qe=d(),S(Ie.$$.fragment),ot=d(),Ft=p("h4"),Ft.textContent="Selected value:",Gt=d(),S(qt.$$.fragment),Bt=d(),S(Xt.$$.fragment),Rt=d(),Jt=p("hr"),Me=d(),S(Pe.$$.fragment),x(lt,"id","Multiselect")},m(te,He){s(te,e,He),s(te,n,He),s(te,i,He),s(te,l,He),E(r,te,He),s(te,u,He),s(te,m,He),s(te,f,He),E(c,te,He),s(te,g,He),E(b,te,He),s(te,h,He),s(te,v,He),s(te,w,He),E(k,te,He),s(te,M,He),s(te,O,He),s(te,D,He),E(L,te,He),s(te,A,He),s(te,H,He),s(te,I,He),E(P,te,He),s(te,j,He),s(te,K,He),s(te,U,He),E(G,te,He),s(te,z,He),s(te,V,He),s(te,Q,He),E(le,te,He),s(te,ee,He),s(te,X,He),s(te,Z,He),E(ge,te,He),s(te,W,He),s(te,Y,He),s(te,J,He),E(pe,te,He),s(te,we,He),s(te,ve,He),s(te,ue,He),E(se,te,He),s(te,xe,He),s(te,ke,He),s(te,ce,He),E(be,te,He),s(te,Ae,He),s(te,ae,He),s(te,$e,He),E(re,te,He),s(te,oe,He),s(te,Oe,He),s(te,Ke,He),E(nt,te,He),s(te,it,He),s(te,lt,He),s(te,Ce,He),s(te,Ne,He),s(te,dt,He),s(te,ht,He),s(te,at,He),E(wt,te,He),s(te,yt,He),s(te,gt,He),s(te,Vt,He),E(mt,te,He),s(te,Ut,He),E(st,te,He),s(te,xt,He),s(te,Ee,He),s(te,qe,He),E(Ie,te,He),s(te,ot,He),s(te,Ft,He),s(te,Gt,He),E(qt,te,He),s(te,Bt,He),E(Xt,te,He),s(te,Rt,He),s(te,Jt,He),s(te,Me,He),E(Pe,te,He),Yt=!0},p(te,[He]){let $n={};!a&&He&1&&(a=!0,$n.value=te[0],Ue(()=>a=!1)),r.$set($n);let xn={};He&1&&(xn.value=te[0]),c.$set(xn);let wn={};He&1048576&&(wn.$$scope={dirty:He,ctx:te}),b.$set(wn);let Hn={};!_&&He&1&&(_=!0,Hn.value=te[0],Ue(()=>_=!1)),k.$set(Hn);let yn={};!T&&He&1&&(T=!0,yn.value=te[0],Ue(()=>T=!1)),L.$set(yn);let Pn={};!N&&He&1&&(N=!0,Pn.value=te[0],Ue(()=>N=!1)),P.$set(Pn);let kn={};!F&&He&4&&(F=!0,kn.value=te[2],Ue(()=>F=!1)),G.$set(kn);let Nn={};He&4&&(Nn.value=te[2]),le.$set(Nn);let Fn={};!he&&He&8&&(he=!0,Fn.value=te[3],Ue(()=>he=!1)),ge.$set(Fn);let qn={};He&8&&(qn.value=te[3]),pe.$set(qn);let Tn={};!Et&&He&16&&(Et=!0,Tn.value=te[4],Ue(()=>Et=!1)),wt.$set(Tn);let Bn={};He&16&&(Bn.value=te[4]),mt.$set(Bn);let Mn={};He&1048576&&(Mn.$$scope={dirty:He,ctx:te}),st.$set(Mn);let Rn={};!Be&&He&2&&(Be=!0,Rn.value=te[1],Ue(()=>Be=!1)),Ie.$set(Rn);let En={};He&2&&(En.value=te[1]),qt.$set(En)},i(te){Yt||($(r.$$.fragment,te),$(c.$$.fragment,te),$(b.$$.fragment,te),$(k.$$.fragment,te),$(L.$$.fragment,te),$(P.$$.fragment,te),$(G.$$.fragment,te),$(le.$$.fragment,te),$(ge.$$.fragment,te),$(pe.$$.fragment,te),$(se.$$.fragment,te),$(be.$$.fragment,te),$(re.$$.fragment,te),$(nt.$$.fragment,te),$(wt.$$.fragment,te),$(mt.$$.fragment,te),$(st.$$.fragment,te),$(Ie.$$.fragment,te),$(qt.$$.fragment,te),$(Xt.$$.fragment,te),$(Pe.$$.fragment,te),Yt=!0)},o(te){y(r.$$.fragment,te),y(c.$$.fragment,te),y(b.$$.fragment,te),y(k.$$.fragment,te),y(L.$$.fragment,te),y(P.$$.fragment,te),y(G.$$.fragment,te),y(le.$$.fragment,te),y(ge.$$.fragment,te),y(pe.$$.fragment,te),y(se.$$.fragment,te),y(be.$$.fragment,te),y(re.$$.fragment,te),y(nt.$$.fragment,te),y(wt.$$.fragment,te),y(mt.$$.fragment,te),y(st.$$.fragment,te),y(Ie.$$.fragment,te),y(qt.$$.fragment,te),y(Xt.$$.fragment,te),y(Pe.$$.fragment,te),Yt=!1},d(te){te&&(o(e),o(n),o(i),o(l),o(u),o(m),o(f),o(g),o(h),o(v),o(w),o(M),o(O),o(D),o(A),o(H),o(I),o(j),o(K),o(U),o(z),o(V),o(Q),o(ee),o(X),o(Z),o(W),o(Y),o(J),o(we),o(ve),o(ue),o(xe),o(ke),o(ce),o(Ae),o(ae),o($e),o(oe),o(Oe),o(Ke),o(it),o(lt),o(Ce),o(Ne),o(dt),o(ht),o(at),o(yt),o(gt),o(Vt),o(Ut),o(xt),o(Ee),o(qe),o(ot),o(Ft),o(Gt),o(Bt),o(Rt),o(Jt),o(Me)),C(r,te),C(c,te),C(b,te),C(k,te),C(L,te),C(P,te),C(G,te),C(le,te),C(ge,te),C(pe,te),C(se,te),C(be,te),C(re,te),C(nt,te),C(wt,te),C(mt,te),C(st,te),C(Ie,te),C(qt,te),C(Xt,te),C(Pe,te)}}}function j4(t){let{value:e,oldValue:n}=t.detail;console.log({value:e,oldValue:n})}function z4(t,e,n){let i=[{name:"allowNew",description:"Whether to allow arbitrary values (that don't exist in the list)."},{name:"class",type:"string",description:"Additional css class name to be added to the component."},{name:"clearOnEsc",description:"If present - the combobox will be cleared when Escape is pressed."},{name:"disabled",description:"Make the combobox disabled."},{name:"error",type:"string",description:"Error message to show above the combobox."},{name:"hideOnResize",description:"If present - resizing the window will close the popup."},{name:"id",type:"string",description:"Assign ID to the underlying input."},{name:"info",type:"string",description:"Show info message above the combobox."},{name:"items",type:"array",required:!0,description:"An array of strings or objects in the following format: <code>&lbrace; name: string, id?: string | number, group?: string &rbrace;</code>(<i>name</i> should be unique, or - if <i>id</i> is present - <i>id</i> should be unique)."},{name:"label",type:"string",description:"Label for the combobox."},{name:"labelOnTheLeft",description:"Put label to the left of the input (instead of at the top). Usually in longer forms, to align labels and inputs, hence input also gets <em>width: 100%</em>, as it will be constraint by the form container."},{name:"name",type:"string",description:"Assign title to the underlying input."},{name:"multiselect",description:"This changes the control to a multiselect. The following changes will apply:<ul><li>dropdown items will receive checkboxes,<li>and the control will only allow to change the value by clicking on items (or check them using the `Space` key),<li>the value will become an array,<li>argument `allowNew` will have no effect.</ul>"},{name:"placeholder",type:"string",description:"Shows placeholder text."},{name:"required",description:"Mark the combobox as <i>aria-required</i>."},{name:"showOnFocus",description:"If present - the popup will be automatically open when the combobox gets focus (as opposed to, when the user starts typing)."},{name:"title",type:"string",description:"Assign title to the underlying input."},{name:"value",type:["string","number","object","array"],description:"Value of the combobox.<br>If combobox is <em>multiselect</em>, the value will be an array of strings or objects. "},{name:"bind:element",type:"element",description:"Exposes the HTML element of the component."},{name:"bind:inputElement",type:"element",description:"Exposes the HTML element of the underlying input."},{name:"on:change",type:"function",description:"Triggered when the value changes."},{name:"on:keydown",type:"function",description:"Triggered when a key is down."}],l=`
<Combobox
    {items}
    on:change="{ onChange }"
    bind:value="{ value }" />

<script>
const items = [
    { id: 1, name: 'Alpha', group: 'Group 1' },
    { id: 2, name: 'Beta', group: 'Group 1' },
    { id: 3, name: 'Gamma', group: 'Group 2' },
    { id: 4, name: 'Delta', group: 'Group 2' },
];
let value = data[1];

function onChange (e) {
    const { value, oldValue } = e.detail;
    console.log({ value, oldValue });
}
&lt;/script>
`,r=[{id:1,name:"Alpha",group:"Group 1"},{id:2,name:"Beta",group:"Group 1"},{id:3,name:"Gamma",group:"Group 1"},{id:4,name:"Delta",group:"Group 1"},{id:5,name:"Epsilon",group:"Group 1"},{id:6,name:"Zeta",group:"\u{1F600} Group 2 has a very long name"},{id:7,name:"Eta",group:"\u{1F600} Group 2 has a very long name"},{id:8,name:"Theta",group:"\u{1F600} Group 2 has a very long name"},{id:9,name:"Iota",group:"\u{1F600} Group 2 has a very long name"},{id:10,name:"Kappa",group:"\u{1F600} Group 2 has a very long name"},{id:11,name:"Lambda is the last item in Group 2",group:"\u{1F600} Group 2 has a very long name"},{id:12,name:"Zeta",group:"Group 3"},{id:13,name:"Eta",group:"Group 3"},{id:14,name:"Theta",group:"Group 3"},{id:15,name:"Iota",group:"Group 3"},{id:16,name:"Kappa",group:"Group 3"},{id:17,name:"Lambda",group:"Group 3"}],a=r[1],u=[r[0],r[1]],m=[{name:"Alpha",group:"Group 1"},{name:"Beta",group:"Group 1"},{name:"Gamma",group:"Group 1"},{name:"Delta",group:"Group 1"},{name:"Epsilon",group:"Group 1"},{name:"Zeta",group:"\u{1F600} Group 2 has a very long name"},{name:"Eta",group:"\u{1F600} Group 2 has a very long name"},{name:"Theta",group:"\u{1F600} Group 2 has a very long name"},{name:"Iota",group:"\u{1F600} Group 2 has a very long name"},{name:"Kappa",group:"\u{1F600} Group 2 has a very long name"},{name:"Lambda is the last item in Group 2",group:"\u{1F600} Group 2 has a very long name"},{name:"Alpha"},{name:"Beta"},{name:"Gamma"},{name:"Delta"},{name:"Epsilon"}],f=m[3],c=["Alpha","Beta","Gamma","Delta","Epsilon","Zeta","Eta","Theta","Iota","Kappa","Lambda is the last item in this list"],g="Gamma",b=[c[0],c[1]];function h(){n(0,a=null)}function v(){n(4,b=[])}function w(A){a=A,n(0,a)}function k(A){a=A,n(0,a)}function _(A){a=A,n(0,a)}function M(A){a=A,n(0,a)}function O(A){f=A,n(2,f)}function D(A){g=A,n(3,g)}function L(A){b=A,n(4,b)}function T(A){u=A,n(1,u)}return[a,u,f,g,b,i,l,r,m,c,h,v,w,k,_,M,O,D,L,T]}var th=class extends fe{constructor(e){super(),de(this,e,z4,R4,me,{})}},s0=th;function W4(t){let e,n,i,l,r,a,u,m,f,c,g,b=(t[0].datevalue||"")+"",h,v,w,k,_,M,O,D,L,T,A,H,I,P,N,j,K,U,G,F,z,V,Q,le,ee,X,Z,ge,he,W,Y,J,pe,we,ve,ue,se,xe,ke,ce,be,Ae,ae,$e,re,oe,Oe,Ke,nt;function it(Ce){t[5](Ce)}let lt={};return t[0].datevalue!==void 0&&(lt.value=t[0].datevalue),f=new Wn({props:lt}),_e.push(()=>Ge(f,"value",it)),f.$on("keydown",V4),_=new Wn({props:{showOnFocus:"true",placeholder:"Custom placeholder"}}),L=new Wn({props:{value:"2061-01-01"}}),I=new Wn({props:{useNativeOnMobile:!0,value:"2061-01-01"}}),K=new Wn({props:{format:"dd-mm-yy"}}),X=new Wn({props:{elevate:"true"}}),J=new Wn({props:{label:"Pick one"}}),ue=new Wn({props:{label:"Pick one",info:"Pick your pick"}}),ce=new Wn({props:{label:"Pick one",error:t[1]}}),ce.$on("change",t[4]),$e=new Wn({props:{label:"Label is on the left",labelOnTheLeft:"true"}}),oe=new ze({props:{html:t[3]}}),Ke=new Fe({props:{props:t[2]}}),{c(){e=p("h2"),e.textContent="Input Date",n=d(),i=p("p"),i.innerHTML='This is a wrapper for the vanilla javascript component <a href="https://mymth.github.io/vanillajs-datepicker/#/">vanillajs-datepicker</a>.',l=d(),r=p("br"),a=d(),u=p("h3"),u.textContent="Normal",m=d(),S(f.$$.fragment),g=d(),h=ne(b),v=d(),w=p("h3"),w.textContent="Show on focus (when using keyboard)",k=d(),S(_.$$.fragment),M=d(),O=p("h3"),O.textContent="Initial value",D=d(),S(L.$$.fragment),T=d(),A=p("h3"),A.textContent="Use native on mobile",H=d(),S(I.$$.fragment),P=d(),N=p("h3"),N.textContent="Change date format",j=d(),S(K.$$.fragment),U=d(),G=p("h3"),G.innerHTML="In a container with <em>overflow: hidden</em>",F=d(),z=p("p"),z.innerHTML=`Where parent container has <em>overflow: hidden</em>, <em>elevate=&quot;true&quot;</em>
	property must be set on the component.`,V=d(),Q=p("div"),le=p("small"),le.textContent="overflow: hidden",ee=d(),S(X.$$.fragment),Z=d(),ge=p("p"),ge.innerHTML=`This option should only be used when absolutely necessary (e.g. when InputDate
	is used inside dialogs/popups), because it makes the component less accessible
	(the list container is rendered directly in the <em>&lt;body&gt;</em>, and not next to the input).`,he=d(),W=p("h3"),W.textContent="Label",Y=d(),S(J.$$.fragment),pe=d(),we=p("h3"),we.textContent="Info",ve=d(),S(ue.$$.fragment),se=d(),xe=p("h3"),xe.textContent="Error",ke=d(),S(ce.$$.fragment),be=d(),Ae=p("h3"),Ae.textContent="Label on the left",ae=d(),S($e.$$.fragment),re=d(),S(oe.$$.fragment),Oe=d(),S(Ke.$$.fragment),x(Q,"class","docs-overflow-box")},m(Ce,Ne){s(Ce,e,Ne),s(Ce,n,Ne),s(Ce,i,Ne),s(Ce,l,Ne),s(Ce,r,Ne),s(Ce,a,Ne),s(Ce,u,Ne),s(Ce,m,Ne),E(f,Ce,Ne),s(Ce,g,Ne),s(Ce,h,Ne),s(Ce,v,Ne),s(Ce,w,Ne),s(Ce,k,Ne),E(_,Ce,Ne),s(Ce,M,Ne),s(Ce,O,Ne),s(Ce,D,Ne),E(L,Ce,Ne),s(Ce,T,Ne),s(Ce,A,Ne),s(Ce,H,Ne),E(I,Ce,Ne),s(Ce,P,Ne),s(Ce,N,Ne),s(Ce,j,Ne),E(K,Ce,Ne),s(Ce,U,Ne),s(Ce,G,Ne),s(Ce,F,Ne),s(Ce,z,Ne),s(Ce,V,Ne),s(Ce,Q,Ne),q(Q,le),q(Q,ee),E(X,Q,null),s(Ce,Z,Ne),s(Ce,ge,Ne),s(Ce,he,Ne),s(Ce,W,Ne),s(Ce,Y,Ne),E(J,Ce,Ne),s(Ce,pe,Ne),s(Ce,we,Ne),s(Ce,ve,Ne),E(ue,Ce,Ne),s(Ce,se,Ne),s(Ce,xe,Ne),s(Ce,ke,Ne),E(ce,Ce,Ne),s(Ce,be,Ne),s(Ce,Ae,Ne),s(Ce,ae,Ne),E($e,Ce,Ne),s(Ce,re,Ne),E(oe,Ce,Ne),s(Ce,Oe,Ne),E(Ke,Ce,Ne),nt=!0},p(Ce,[Ne]){let dt={};!c&&Ne&1&&(c=!0,dt.value=Ce[0].datevalue,Ue(()=>c=!1)),f.$set(dt),(!nt||Ne&1)&&b!==(b=(Ce[0].datevalue||"")+"")&&je(h,b);let ht={};Ne&2&&(ht.error=Ce[1]),ce.$set(ht)},i(Ce){nt||($(f.$$.fragment,Ce),$(_.$$.fragment,Ce),$(L.$$.fragment,Ce),$(I.$$.fragment,Ce),$(K.$$.fragment,Ce),$(X.$$.fragment,Ce),$(J.$$.fragment,Ce),$(ue.$$.fragment,Ce),$(ce.$$.fragment,Ce),$($e.$$.fragment,Ce),$(oe.$$.fragment,Ce),$(Ke.$$.fragment,Ce),nt=!0)},o(Ce){y(f.$$.fragment,Ce),y(_.$$.fragment,Ce),y(L.$$.fragment,Ce),y(I.$$.fragment,Ce),y(K.$$.fragment,Ce),y(X.$$.fragment,Ce),y(J.$$.fragment,Ce),y(ue.$$.fragment,Ce),y(ce.$$.fragment,Ce),y($e.$$.fragment,Ce),y(oe.$$.fragment,Ce),y(Ke.$$.fragment,Ce),nt=!1},d(Ce){Ce&&(o(e),o(n),o(i),o(l),o(r),o(a),o(u),o(m),o(g),o(h),o(v),o(w),o(k),o(M),o(O),o(D),o(T),o(A),o(H),o(P),o(N),o(j),o(U),o(G),o(F),o(z),o(V),o(Q),o(Z),o(ge),o(he),o(W),o(Y),o(pe),o(we),o(ve),o(se),o(xe),o(ke),o(be),o(Ae),o(ae),o(re),o(Oe)),C(f,Ce),C(_,Ce),C(L,Ce),C(I,Ce),C(K,Ce),C(X),C(J,Ce),C(ue,Ce),C(ce,Ce),C($e,Ce),C(oe,Ce),C(Ke,Ce)}}}function V4(t){console.log(1111,t.detail.event.key)}function U4(t,e,n){let i={},l=[{name:"class",type:"string",description:"Additional css class name to be added to the component container."},{name:"disabled",description:"Make the input disabled."},{name:"elevate",type:["true","false"],default:"false",description:"If <i>true</i> - the popup will be rendered into the <i>body</i>, to ensure it's not hidden under some elements (see example above)."},{name:"format",type:"string",default:"yyyy-mm-dd",description:'Date format (<a href="https://mymth.github.io/vanillajs-datepicker/#/date-string+format" target="_blank">docs</a>).'},{name:"id",type:"string",description:"Assign ID to the underlying input."},{name:"info",type:"string",description:"Show info message above the input."},{name:"error",type:"string",description:"Error message to show above the input."},{name:"label",type:"string",description:"Label for the input."},{name:"labelOnTheLeft",type:["true","false"],default:"false",description:"Put label to the left of the input (instead of at the top). Usually in longer forms, to align labels and inputs, hence input also gets <em>width: 100%</em>, as it will be constraint by the form container."},{name:"name",type:"string",description:"Assign title to the underlying input."},{name:"placeholder",type:"string",default:"yyyy-mm-dd",description:"Add a custom placeholder for the input."},{name:"required",description:"Mark the input as <i>required</i> for form submission and effectively shows it as invalid, until checked."},{name:"showOnFocus",type:["true","false"],default:"false",description:"If <i>true</i> - the datepicker will be automatically open when the input gets focus (normally opens on click)."},{name:"title",type:"string",description:"Assign title to the underlying input."},{name:"useNativeOnMobile",type:["true","false"],default:"false",description:"Use native date picker on mobile devices.<br>In some cases this may provide prefered UX, but it has also some restrictions depending on the device/browser, like date format is enforced by device locale and placeholder text may not be available."},{name:"value",type:"string",description:"Initial value of the input."},{name:"bind:element",type:"element",description:"Exposes the HTML element of the component."},{name:"bind:inputElement",type:"element",description:"Exposes the HTML element of the underlying input."},{name:"on:change",type:"function",description:"Triggered when the value changes."},{name:"on:keydown",type:"function",description:"Triggered when a key is down."}],r=`
<InputDate on:change="{ onChange }" />

<script>
function onChange (e) {
    console.log(e.detail.value);
}
&lt;/script>

`,a="You picked wrong!";function u(f){let c=f.detail;n(1,a=c==="1"?"":"You picked wrong!")}function m(f){t.$$.not_equal(i.datevalue,f)&&(i.datevalue=f,n(0,i))}return[i,a,l,r,u,m]}var nh=class extends fe{constructor(e){super(),de(this,e,U4,W4,me,{})}},l0=nh;function Y4(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O,D,L,T,A,H,I,P;return f=new Oo({props:{label:"Enter amount"}}),h=new Oo({props:{label:"Enter amount",info:"You can add 2 numbers here"}}),_=new Oo({props:{label:"Enter amount",info:"You can add 2 numbers here",error:"Number must be big!"}}),L=new Oo({props:{label:"Label is on the left",labelOnTheLeft:"true"}}),A=new ze({props:{html:t[1]}}),I=new Fe({props:{props:t[0]}}),{c(){e=p("h2"),e.textContent="Input Math",n=d(),i=p("p"),i.innerHTML=`Enhanced input number field, which allows user to enter the basic math symbols: <em>+ - * / ( )</em><br/>
	and - on blur - replaces the equasion with the resolved number.`,l=d(),r=p("hr"),a=d(),u=p("h3"),u.textContent="Normal",m=d(),S(f.$$.fragment),c=d(),g=p("h3"),g.textContent="With info box",b=d(),S(h.$$.fragment),v=d(),w=p("h3"),w.textContent="With info box and error.",k=d(),S(_.$$.fragment),M=d(),O=p("h3"),O.textContent="Label on the left",D=d(),S(L.$$.fragment),T=d(),S(A.$$.fragment),H=d(),S(I.$$.fragment)},m(N,j){s(N,e,j),s(N,n,j),s(N,i,j),s(N,l,j),s(N,r,j),s(N,a,j),s(N,u,j),s(N,m,j),E(f,N,j),s(N,c,j),s(N,g,j),s(N,b,j),E(h,N,j),s(N,v,j),s(N,w,j),s(N,k,j),E(_,N,j),s(N,M,j),s(N,O,j),s(N,D,j),E(L,N,j),s(N,T,j),E(A,N,j),s(N,H,j),E(I,N,j),P=!0},p:Le,i(N){P||($(f.$$.fragment,N),$(h.$$.fragment,N),$(_.$$.fragment,N),$(L.$$.fragment,N),$(A.$$.fragment,N),$(I.$$.fragment,N),P=!0)},o(N){y(f.$$.fragment,N),y(h.$$.fragment,N),y(_.$$.fragment,N),y(L.$$.fragment,N),y(A.$$.fragment,N),y(I.$$.fragment,N),P=!1},d(N){N&&(o(e),o(n),o(i),o(l),o(r),o(a),o(u),o(m),o(c),o(g),o(b),o(v),o(w),o(k),o(M),o(O),o(D),o(T),o(H)),C(f,N),C(h,N),C(_,N),C(L,N),C(A,N),C(I,N)}}}function G4(t){return[[{name:"class",type:"string",description:"Additional css class name to be added to the component."},{name:"disabled",description:"Make the input disabled."},{name:"id",type:"string",description:"Assign ID to the underlying input."},{name:"info",type:"string",description:"Show info message above the input."},{name:"error",type:"string",description:"Error message to show above the input."},{name:"label",type:"string",description:"Label for the input."},{name:"labelOnTheLeft",type:["true","false"],default:"false",description:"Put label to the left of the input (instead of at the top). Usually in longer forms, to align labels and inputs, hence input also gets <em>width: 100%</em>, as it will be constraint by the form container."},{name:"name",type:"string",description:"Assign title to the underlying input."},{name:"placeholder",type:"string",description:"Assign placeholder to the underlying input."},{name:"required",description:"Mark the input as <i>aria-required</i>."},{name:"title",type:"string",description:"Assign title to the underlying input."},{name:"value",type:["string","number"],description:"Initial value of the input."},{name:"bind:element",type:"element",description:"Exposes the HTML element of the component."},{name:"bind:inputElement",type:"element",description:"Exposes the HTML element of the underlying input."},{name:"on:change",type:"function",description:"Triggered when the value changes."},{name:"on:keydown",type:"function",description:"Triggered when a key is down."}],`
<InputMath label="Enter amount" on:change="{onChange}" />

<script>
function onChange (e) {
    const { value, oldValue } = e.detail;
    console.log({ value, oldValue });
}
&lt;/script>
`]}var ih=class extends fe{constructor(e){super(),de(this,e,G4,Y4,me,{})}},r0=ih;function K4(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O,D,L,T,A,H,I,P,N,j,K;u=new oo({props:{label:"Enter amount"}});function U(F){t[5](F)}let G={label:"Enter amount",error:t[0]};return t[1]!==void 0&&(G.value=t[1]),g=new oo({props:G}),_e.push(()=>Ge(g,"value",U)),g.$on("input",t[4]),k=new oo({props:{label:"Enter amount",info:"Additional information."}}),D=new oo({props:{label:"Enter amount",separator:","}}),H=new oo({props:{label:"Label is on the left",labelOnTheLeft:"true"}}),P=new ze({props:{html:t[3]}}),j=new Fe({props:{props:t[2]}}),{c(){e=p("h2"),e.textContent="Input Number",n=d(),i=p("p"),i.textContent="Only allows numbers, a single dot (for decimals) and the minus sign at the beginning.",l=d(),r=p("h3"),r.textContent="Normal",a=d(),S(u.$$.fragment),m=d(),f=p("h3"),f.textContent="With validation error",c=d(),S(g.$$.fragment),h=d(),v=p("h3"),v.textContent="With info box",w=d(),S(k.$$.fragment),_=d(),M=p("h3"),M.textContent="With comma as the decimal separator",O=d(),S(D.$$.fragment),L=d(),T=p("h3"),T.textContent="Label on the left",A=d(),S(H.$$.fragment),I=d(),S(P.$$.fragment),N=d(),S(j.$$.fragment)},m(F,z){s(F,e,z),s(F,n,z),s(F,i,z),s(F,l,z),s(F,r,z),s(F,a,z),E(u,F,z),s(F,m,z),s(F,f,z),s(F,c,z),E(g,F,z),s(F,h,z),s(F,v,z),s(F,w,z),E(k,F,z),s(F,_,z),s(F,M,z),s(F,O,z),E(D,F,z),s(F,L,z),s(F,T,z),s(F,A,z),E(H,F,z),s(F,I,z),E(P,F,z),s(F,N,z),E(j,F,z),K=!0},p(F,[z]){let V={};z&1&&(V.error=F[0]),!b&&z&2&&(b=!0,V.value=F[1],Ue(()=>b=!1)),g.$set(V)},i(F){K||($(u.$$.fragment,F),$(g.$$.fragment,F),$(k.$$.fragment,F),$(D.$$.fragment,F),$(H.$$.fragment,F),$(P.$$.fragment,F),$(j.$$.fragment,F),K=!0)},o(F){y(u.$$.fragment,F),y(g.$$.fragment,F),y(k.$$.fragment,F),y(D.$$.fragment,F),y(H.$$.fragment,F),y(P.$$.fragment,F),y(j.$$.fragment,F),K=!1},d(F){F&&(o(e),o(n),o(i),o(l),o(r),o(a),o(m),o(f),o(c),o(h),o(v),o(w),o(_),o(M),o(O),o(L),o(T),o(A),o(I),o(N)),C(u,F),C(g,F),C(k,F),C(D,F),C(H,F),C(P,F),C(j,F)}}}function X4(t,e,n){let i="Number must be <100",l=123,r=[{name:"class",type:"string",description:"Additional css class name to be added to the component."},{name:"disabled",description:"Make the input disabled."},{name:"id",type:"string",description:"Assign ID to the underlying input."},{name:"info",type:"string",description:"Show info message above the input."},{name:"error",type:"string",description:"Error message to show above the input."},{name:"label",type:"string",description:"Label for the input."},{name:"labelOnTheLeft",type:["true","false"],default:"false",description:"Put label to the left of the input (instead of at the top). Usually in longer forms, to align labels and inputs, hence input also gets <em>width: 100%</em>, as it will be constraint by the form container."},{name:"name",type:"string",description:"Assign title to the underlying input."},{name:"placeholder",type:"string",description:"Assign placeholder to the underlying input."},{name:"required",description:"Mark the input as <i>aria-required</i>. The actual validation must be done in the consumer."},{name:"separator",type:"string",default:".",description:"Custom decimal separator."},{name:"title",type:"string",description:"Assign title to the underlying input."},{name:"value",type:["string","number"],description:"Initial value of the input."},{name:"bind:element",type:"element",description:"Exposes the HTML element of the component."},{name:"bind:inputElement",type:"element",description:"Exposes the HTML element of the underlying input."},{name:"on:change",type:"function",description:"Triggered after the value changes and the focus leaves the input."},{name:"on:input",type:"function",description:"Triggered as soon as the input value changes."}],a=`
<InputNumber label="Enter amount"/>
`;function u(f){let c=parseFloat(""+f.target.value)||0;n(0,i=c>100?"Number must be <100":"")}function m(f){l=f,n(1,l)}return[i,l,r,a,u,m]}var oh=class extends fe{constructor(e){super(),de(this,e,X4,K4,me,{})}},a0=oh;function Z4(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O,D,L,T,A,H,I,P,N,j,K,U,G,F,z,V,Q,le,ee,X,Z,ge,he,W,Y,J,pe,we,ve,ue,se,xe,ke,ce;function be(re){t[3](re)}let Ae={label:"Current password",name:"password",placeholder:"Not 123456"};t[0]!==void 0&&(Ae.value=t[0]),g=new ui({props:Ae}),_e.push(()=>Ge(g,"value",be));function ae(re){t[4](re)}let $e={label:"Current password",name:"password",disabled:!0};return t[0]!==void 0&&($e.value=t[0]),L=new ui({props:$e}),_e.push(()=>Ge(L,"value",ae)),N=new ui({props:{strength:!0}}),G=new ui({props:{strength:!0,label:"New password"}}),Q=new ui({props:{strength:!0,label:"New password",info:"Password rules"}}),Z=new ui({props:{strength:!0,label:"New password",info:"Password rules",error:"Your password is weak!"}}),Y=new ui({props:{label:"Label is on the left",labelOnTheLeft:!0}}),ve=new ui({props:{strength:!0,labelOnTheLeft:!0,label:"New password"}}),se=new ze({props:{html:t[2]}}),ke=new Fe({props:{props:t[1]}}),{c(){e=p("h2"),e.textContent="Input Password",n=d(),i=p("p"),i.textContent="Enhanced input password field with password strength indicator.",l=d(),r=p("p"),r.innerHTML=`To be able to use the password strength indicator, <a href="https://github.com/dropbox/zxcvbn">zxcvbn</a> lib must be available on the global scope (<em>window.zxcvbn</em>).<br/>
	This script file is available in this npm package <em>node_modules/@perfectthings/ui/docs/zxcvbn.js</em>, from where it can be copied and loaded,<br/>
	e.g. in a <em>&lt;script&gt;</em> tag.`,a=d(),u=p("hr"),m=d(),f=p("h3"),f.textContent="Default",c=d(),S(g.$$.fragment),h=p("br"),v=d(),w=p("p"),k=ne("Your secret password is: "),_=ne(t[0]),M=d(),O=p("h3"),O.textContent="Disabled",D=d(),S(L.$$.fragment),A=p("br"),H=d(),I=p("h3"),I.textContent="With password strength indicator",P=d(),S(N.$$.fragment),j=d(),K=p("h3"),K.textContent="With password strength indicator and label",U=d(),S(G.$$.fragment),F=d(),z=p("h3"),z.textContent="With password strength indicator, label, and info box",V=d(),S(Q.$$.fragment),le=d(),ee=p("h3"),ee.textContent="With password strength indicator, label, info box, and error",X=d(),S(Z.$$.fragment),ge=d(),he=p("h3"),he.textContent="Label on the left",W=d(),S(Y.$$.fragment),J=d(),pe=p("h3"),pe.textContent="With password strength and label on the left",we=d(),S(ve.$$.fragment),ue=d(),S(se.$$.fragment),xe=d(),S(ke.$$.fragment)},m(re,oe){s(re,e,oe),s(re,n,oe),s(re,i,oe),s(re,l,oe),s(re,r,oe),s(re,a,oe),s(re,u,oe),s(re,m,oe),s(re,f,oe),s(re,c,oe),E(g,re,oe),s(re,h,oe),s(re,v,oe),s(re,w,oe),q(w,k),q(w,_),s(re,M,oe),s(re,O,oe),s(re,D,oe),E(L,re,oe),s(re,A,oe),s(re,H,oe),s(re,I,oe),s(re,P,oe),E(N,re,oe),s(re,j,oe),s(re,K,oe),s(re,U,oe),E(G,re,oe),s(re,F,oe),s(re,z,oe),s(re,V,oe),E(Q,re,oe),s(re,le,oe),s(re,ee,oe),s(re,X,oe),E(Z,re,oe),s(re,ge,oe),s(re,he,oe),s(re,W,oe),E(Y,re,oe),s(re,J,oe),s(re,pe,oe),s(re,we,oe),E(ve,re,oe),s(re,ue,oe),E(se,re,oe),s(re,xe,oe),E(ke,re,oe),ce=!0},p(re,[oe]){let Oe={};!b&&oe&1&&(b=!0,Oe.value=re[0],Ue(()=>b=!1)),g.$set(Oe),(!ce||oe&1)&&je(_,re[0]);let Ke={};!T&&oe&1&&(T=!0,Ke.value=re[0],Ue(()=>T=!1)),L.$set(Ke)},i(re){ce||($(g.$$.fragment,re),$(L.$$.fragment,re),$(N.$$.fragment,re),$(G.$$.fragment,re),$(Q.$$.fragment,re),$(Z.$$.fragment,re),$(Y.$$.fragment,re),$(ve.$$.fragment,re),$(se.$$.fragment,re),$(ke.$$.fragment,re),ce=!0)},o(re){y(g.$$.fragment,re),y(L.$$.fragment,re),y(N.$$.fragment,re),y(G.$$.fragment,re),y(Q.$$.fragment,re),y(Z.$$.fragment,re),y(Y.$$.fragment,re),y(ve.$$.fragment,re),y(se.$$.fragment,re),y(ke.$$.fragment,re),ce=!1},d(re){re&&(o(e),o(n),o(i),o(l),o(r),o(a),o(u),o(m),o(f),o(c),o(h),o(v),o(w),o(M),o(O),o(D),o(A),o(H),o(I),o(P),o(j),o(K),o(U),o(F),o(z),o(V),o(le),o(ee),o(X),o(ge),o(he),o(W),o(J),o(pe),o(we),o(ue),o(xe)),C(g,re),C(L,re),C(N,re),C(G,re),C(Q,re),C(Z,re),C(Y,re),C(ve,re),C(se,re),C(ke,re)}}}function J4(t,e,n){let i,l=[{name:"class",type:"string",description:"Additional css class name to be added to the component."},{name:"disabled",description:"Make the input disabled."},{name:"id",type:"string",description:"Assign ID to the underlying input."},{name:"info",type:"string",description:"Show info message above the input."},{name:"error",type:"string",description:"Error message to show above the input."},{name:"label",type:"string",description:"Label for the input."},{name:"labelOnTheLeft",type:["true","false"],default:"false",description:"Put label to the left of the input (instead of at the top). Usually in longer forms, to align labels and inputs, hence input also gets <em>width: 100%</em>, as it will be constraint by the form container."},{name:"name",type:"string",description:"Assign title to the underlying input."},{name:"placeholder",type:"string",description:"Assign placeholder to the underlying input."},{name:"required",description:"Mark the input as <i>required</i> for form submission and effectively shows it as invalid, until filled."},{name:"strength",description:"Provide the password strength UI (zxcvbn lib must be loaded)."},{name:"title",type:"string",description:"Assign title to the underlying input."},{name:"value",type:["string","number"],description:"Initial value of the input."},{name:"bind:element",type:"element",description:"Exposes the HTML element of the component."},{name:"bind:inputElement",type:"element",description:"Exposes the HTML element of the underlying input."},{name:"on:change",type:"function",description:"Triggered when the value changes."},{name:"on:keydown",type:"function",description:"Triggered when a key is down."}],r=`
<InputPassword strength label="Current password" on:change="{onChange}" />

<script>
function onChange (e) {
    console.log('value', e.target.value);
}
&lt;/script>
`;function a(m){i=m,n(0,i)}function u(m){i=m,n(0,i)}return[i,l,r,a,u]}var sh=class extends fe{constructor(e){super(),de(this,e,J4,Z4,me,{})}},u0=sh;function Q4(t){let e,n,i,l,r,a,u,m,f,c=(t[0].value||"")+"",g,b,h,v,w,k,_,M,O,D,L,T,A,H,I,P,N,j,K,U,G,F,z,V,Q,le,ee,X,Z,ge,he,W,Y,J;function pe(ve){t[5](ve)}let we={};return t[0].value!==void 0&&(we.value=t[0].value),u=new fi({props:we}),_e.push(()=>Ge(u,"value",pe)),u.$on("keydown",ey),w=new fi({props:{icon:"circle"}}),O=new fi({props:{max:"8"}}),A=new fi({props:{light:!0}}),N=new fi({props:{label:"Pick one"}}),G=new fi({props:{label:"Pick one",info:"Pick your pick"}}),Q=new fi({props:{label:"Pick one",error:t[1]}}),Q.$on("change",t[4]),Z=new fi({props:{label:"Label is on the left",labelOnTheLeft:"true"}}),he=new ze({props:{html:t[3]}}),Y=new Fe({props:{props:t[2]}}),{c(){e=p("h2"),e.textContent="Input Rating",n=d(),i=p("br"),l=d(),r=p("h3"),r.textContent="Normal",a=d(),S(u.$$.fragment),f=d(),g=ne(c),b=d(),h=p("h3"),h.textContent="Different symbol",v=d(),S(w.$$.fragment),k=d(),_=p("h3"),_.textContent="More stars",M=d(),S(O.$$.fragment),D=d(),L=p("h3"),L.textContent="Light (no background)",T=d(),S(A.$$.fragment),H=d(),I=p("h3"),I.textContent="Label",P=d(),S(N.$$.fragment),j=d(),K=p("h3"),K.textContent="Info",U=d(),S(G.$$.fragment),F=d(),z=p("h3"),z.textContent="Error",V=d(),S(Q.$$.fragment),le=d(),ee=p("h3"),ee.textContent="Label on the left",X=d(),S(Z.$$.fragment),ge=d(),S(he.$$.fragment),W=d(),S(Y.$$.fragment)},m(ve,ue){s(ve,e,ue),s(ve,n,ue),s(ve,i,ue),s(ve,l,ue),s(ve,r,ue),s(ve,a,ue),E(u,ve,ue),s(ve,f,ue),s(ve,g,ue),s(ve,b,ue),s(ve,h,ue),s(ve,v,ue),E(w,ve,ue),s(ve,k,ue),s(ve,_,ue),s(ve,M,ue),E(O,ve,ue),s(ve,D,ue),s(ve,L,ue),s(ve,T,ue),E(A,ve,ue),s(ve,H,ue),s(ve,I,ue),s(ve,P,ue),E(N,ve,ue),s(ve,j,ue),s(ve,K,ue),s(ve,U,ue),E(G,ve,ue),s(ve,F,ue),s(ve,z,ue),s(ve,V,ue),E(Q,ve,ue),s(ve,le,ue),s(ve,ee,ue),s(ve,X,ue),E(Z,ve,ue),s(ve,ge,ue),E(he,ve,ue),s(ve,W,ue),E(Y,ve,ue),J=!0},p(ve,[ue]){let se={};!m&&ue&1&&(m=!0,se.value=ve[0].value,Ue(()=>m=!1)),u.$set(se),(!J||ue&1)&&c!==(c=(ve[0].value||"")+"")&&je(g,c);let xe={};ue&2&&(xe.error=ve[1]),Q.$set(xe)},i(ve){J||($(u.$$.fragment,ve),$(w.$$.fragment,ve),$(O.$$.fragment,ve),$(A.$$.fragment,ve),$(N.$$.fragment,ve),$(G.$$.fragment,ve),$(Q.$$.fragment,ve),$(Z.$$.fragment,ve),$(he.$$.fragment,ve),$(Y.$$.fragment,ve),J=!0)},o(ve){y(u.$$.fragment,ve),y(w.$$.fragment,ve),y(O.$$.fragment,ve),y(A.$$.fragment,ve),y(N.$$.fragment,ve),y(G.$$.fragment,ve),y(Q.$$.fragment,ve),y(Z.$$.fragment,ve),y(he.$$.fragment,ve),y(Y.$$.fragment,ve),J=!1},d(ve){ve&&(o(e),o(n),o(i),o(l),o(r),o(a),o(f),o(g),o(b),o(h),o(v),o(k),o(_),o(M),o(D),o(L),o(T),o(H),o(I),o(P),o(j),o(K),o(U),o(F),o(z),o(V),o(le),o(ee),o(X),o(ge),o(W)),C(u,ve),C(w,ve),C(O,ve),C(A,ve),C(N,ve),C(G,ve),C(Q,ve),C(Z,ve),C(he,ve),C(Y,ve)}}}function ey(t){console.log(t.detail.event.key)}function ty(t,e,n){let i={value:2},l=[{name:"class",type:"string",description:"Additional css class name to be added to the component container."},{name:"disabled",description:"Make the input disabled."},{name:"icon",type:"string",default:"star",description:"Icon name for the symbol."},{name:"id",type:"string",description:"Assign ID to the underlying input."},{name:"info",type:"string",description:"Show info message above the input."},{name:"error",type:"string",description:"Error message to show above the input."},{name:"label",type:"string",description:"Label for the input."},{name:"labelOnTheLeft",type:["true","false"],default:"false",description:"Put label to the left of the input (instead of at the top). Usually in longer forms, to align labels and inputs, hence input also gets <em>width: 100%</em>, as it will be constraint by the form container."},{name:"light",description:"Disable background and border - for use cases other than in form context.<br>Light does not work when the input has error."},{name:"max",type:"number",description:"How many stars to show."},{name:"name",type:"string",description:"Assign title to the underlying input."},{name:"required",description:"Mark the input as <i>required</i> for form submission and effectively shows it as invalid, until checked."},{name:"title",type:"string",description:"Assign title to the underlying input."},{name:"value",type:"string",description:"Initial value of the input."},{name:"bind:element",type:"element",description:"Exposes the HTML element of the component."},{name:"bind:inputElement",type:"element",description:"Exposes the HTML element of the underlying input."},{name:"on:change",type:"function",description:"Triggered when the value changes."},{name:"on:keydown",type:"function",description:"Triggered when a key is down."}],r=`
<InputRating on:change="{ onChange }" bind:value="{value}" />

<script>
let value = 4;
function onChange (e) {
	const val = e.detail;
    console.log(val);
}
&lt;/script>

`,a="You picked wrong!";function u(f){let c=f.detail;n(1,a=c==="1"?"":"You picked wrong!")}function m(f){t.$$.not_equal(i.value,f)&&(i.value=f,n(0,i))}return[i,a,l,r,u,m]}var lh=class extends fe{constructor(e){super(),de(this,e,ty,Q4,me,{})}},f0=lh;function ny(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O,D,L,T,A,H,I,P,N,j,K,U,G;function F(V){t[7](V)}let z={};return t[0]!==void 0&&(z.value=t[0]),r=new so({props:z}),_e.push(()=>Ge(r,"value",F)),r.$on("input",t[6]),v=new so({props:{disabled:!0,value:"disabled value"}}),v.$on("input",t[6]),M=new so({props:{label:"Validate on change",error:t[1],value:t[0]}}),M.$on("change",t[5]),T=new so({props:{label:"Validate on input",info:"This should be avoided in most cases. Validating input as user is typing is a bad UX.",required:!0,error:t[2],value:t[0]}}),T.$on("input",t[6]),P=new so({props:{label:"Label is on the left",labelOnTheLeft:"true"}}),j=new ze({props:{html:t[4]}}),U=new Fe({props:{props:t[3]}}),{c(){e=p("h2"),e.textContent="Input Search",n=d(),i=p("h3"),i.textContent="Normal",l=d(),S(r.$$.fragment),u=d(),m=p("p"),f=ne("Input value: "),c=ne(t[0]),g=d(),b=p("h3"),b.textContent="Disabled",h=d(),S(v.$$.fragment),w=d(),k=p("h3"),k.textContent="With validation",_=d(),S(M.$$.fragment),O=d(),D=p("br"),L=d(),S(T.$$.fragment),A=d(),H=p("h3"),H.textContent="Label on the left",I=d(),S(P.$$.fragment),N=d(),S(j.$$.fragment),K=d(),S(U.$$.fragment)},m(V,Q){s(V,e,Q),s(V,n,Q),s(V,i,Q),s(V,l,Q),E(r,V,Q),s(V,u,Q),s(V,m,Q),q(m,f),q(m,c),s(V,g,Q),s(V,b,Q),s(V,h,Q),E(v,V,Q),s(V,w,Q),s(V,k,Q),s(V,_,Q),E(M,V,Q),s(V,O,Q),s(V,D,Q),s(V,L,Q),E(T,V,Q),s(V,A,Q),s(V,H,Q),s(V,I,Q),E(P,V,Q),s(V,N,Q),E(j,V,Q),s(V,K,Q),E(U,V,Q),G=!0},p(V,[Q]){let le={};!a&&Q&1&&(a=!0,le.value=V[0],Ue(()=>a=!1)),r.$set(le),(!G||Q&1)&&je(c,V[0]);let ee={};Q&2&&(ee.error=V[1]),Q&1&&(ee.value=V[0]),M.$set(ee);let X={};Q&4&&(X.error=V[2]),Q&1&&(X.value=V[0]),T.$set(X)},i(V){G||($(r.$$.fragment,V),$(v.$$.fragment,V),$(M.$$.fragment,V),$(T.$$.fragment,V),$(P.$$.fragment,V),$(j.$$.fragment,V),$(U.$$.fragment,V),G=!0)},o(V){y(r.$$.fragment,V),y(v.$$.fragment,V),y(M.$$.fragment,V),y(T.$$.fragment,V),y(P.$$.fragment,V),y(j.$$.fragment,V),y(U.$$.fragment,V),G=!1},d(V){V&&(o(e),o(n),o(i),o(l),o(u),o(m),o(g),o(b),o(h),o(w),o(k),o(_),o(O),o(D),o(L),o(A),o(H),o(I),o(N),o(K)),C(r,V),C(v,V),C(M,V),C(T,V),C(P,V),C(j,V),C(U,V)}}}function m0(t){if(!t)return"This field is required"}function iy(t,e,n){let i=[{name:"class",type:"string",description:"Additional css class name to be added to the component."},{name:"disabled",description:"Make the input disabled."},{name:"id",type:"string",description:"Assign ID to the underlying input."},{name:"info",type:"string",description:"Show info message above the input."},{name:"error",type:"string",description:"Error message to show above the input."},{name:"name",type:"string",description:"Assign title to the underlying input."},{name:"label",type:"string",description:"Label for the input."},{name:"labelOnTheLeft",type:["true","false"],default:"false",description:"Put label to the left of the input (instead of at the top). Usually in longer forms, to align labels and inputs, hence input also gets <em>width: 100%</em>, as it will be constraint by the form container."},{name:"placeholder",type:"string",description:"Assign placeholder to the underlying input."},{name:"required",description:"Mark the input as <i>aria-required</i>. The actual validation must be done in the consumer."},{name:"title",type:"string",description:"Assign title to the underlying input."},{name:"value",type:["string","number"],description:"Initial value of the input."},{name:"bind:element",type:"element",description:"Exposes the HTML element of the component."},{name:"bind:inputElement",type:"element",description:"Exposes the HTML element of the underlying input."},{name:"on:change",type:"function",description:"Triggered after the value changes and the focus leaves the input."},{name:"on:input",type:"function",description:"Triggered as soon as the input value changes."}],l=`
<InputSearch label="Email" error="Invalid email" value="admin" on:change="{onChange}" />

<script>
function onChange (e) {
    console.log('value', e.target.value);
}
&lt;/script>
`,r="Hi!",a="",u="";function m(g){n(1,a=m0(g.target.value)),console.log(g.target.value)}function f(g){n(2,u=m0(g.target.value)),console.log(g.target.value)}f({target:{value:"-"}});function c(g){r=g,n(0,r)}return[r,a,u,i,l,m,f,c]}var rh=class extends fe{constructor(e){super(),de(this,e,iy,ny,me,{})}},d0=rh;function oy(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O,D,L,T,A,H,I,P,N,j,K,U,G;function F(V){t[5](V)}let z={};return t[0]!==void 0&&(z.value=t[0]),r=new lo({props:z}),_e.push(()=>Ge(r,"value",F)),v=new lo({props:{value:"tag1, anotherOne, long-tag-name",tags:t[3]}}),v.$on("change",sy),M=new lo({props:{value:"tag1, anotherOne, long-tag-name",tags:t[4]}}),T=new lo({props:{disabled:!0,value:"disabled"}}),P=new lo({props:{label:"Label is on the left",labelOnTheLeft:"true"}}),j=new ze({props:{html:t[2]}}),U=new Fe({props:{props:t[1]}}),{c(){e=p("h2"),e.textContent="Input Tag",n=d(),i=p("h3"),i.textContent="Normal",l=d(),S(r.$$.fragment),u=d(),m=p("p"),f=ne("Input value: "),c=ne(t[0]),g=d(),b=p("h3"),b.textContent="With onChange callback",h=d(),S(v.$$.fragment),w=d(),k=p("h3"),k.textContent="Long list of tags",_=d(),S(M.$$.fragment),O=d(),D=p("h3"),D.textContent="Disabled",L=d(),S(T.$$.fragment),A=d(),H=p("h3"),H.textContent="Label on the left",I=d(),S(P.$$.fragment),N=d(),S(j.$$.fragment),K=d(),S(U.$$.fragment)},m(V,Q){s(V,e,Q),s(V,n,Q),s(V,i,Q),s(V,l,Q),E(r,V,Q),s(V,u,Q),s(V,m,Q),q(m,f),q(m,c),s(V,g,Q),s(V,b,Q),s(V,h,Q),E(v,V,Q),s(V,w,Q),s(V,k,Q),s(V,_,Q),E(M,V,Q),s(V,O,Q),s(V,D,Q),s(V,L,Q),E(T,V,Q),s(V,A,Q),s(V,H,Q),s(V,I,Q),E(P,V,Q),s(V,N,Q),E(j,V,Q),s(V,K,Q),E(U,V,Q),G=!0},p(V,[Q]){let le={};!a&&Q&1&&(a=!0,le.value=V[0],Ue(()=>a=!1)),r.$set(le),(!G||Q&1)&&je(c,V[0])},i(V){G||($(r.$$.fragment,V),$(v.$$.fragment,V),$(M.$$.fragment,V),$(T.$$.fragment,V),$(P.$$.fragment,V),$(j.$$.fragment,V),$(U.$$.fragment,V),G=!0)},o(V){y(r.$$.fragment,V),y(v.$$.fragment,V),y(M.$$.fragment,V),y(T.$$.fragment,V),y(P.$$.fragment,V),y(j.$$.fragment,V),y(U.$$.fragment,V),G=!1},d(V){V&&(o(e),o(n),o(i),o(l),o(u),o(m),o(g),o(b),o(h),o(w),o(k),o(_),o(O),o(D),o(L),o(A),o(H),o(I),o(N),o(K)),C(r,V),C(v,V),C(M,V),C(T,V),C(P,V),C(j,V),C(U,V)}}}function sy(t){console.log("value",t.detail.value)}function ly(t,e,n){let i=[{name:"class",type:"string",description:"Additional css class name to be added to the component."},{name:"disabled",description:"Make the input disabled."},{name:"id",type:"string",description:"Assign ID to the underlying input."},{name:"info",type:"string",description:"Show info message above the input."},{name:"error",type:"string",description:"Error message to show above the input."},{name:"name",type:"string",description:"Assign title to the underlying input."},{name:"label",type:"string",description:"Label for the input."},{name:"labelOnTheLeft",type:["true","false"],default:"false",description:"Put label to the left of the input (instead of at the top). Usually in longer forms, to align labels and inputs, hence input also gets <em>width: 100%</em>, as it will be constraint by the form container."},{name:"tags",type:"array",required:!0,description:"An array of strings (the list should contain unique values)."},{name:"title",type:"string",description:"Assign title to the component"},{name:"value",type:["string"],description:"Initial value of the input - a comma-separated string."},{name:"bind:element",type:"element",description:"Exposes the HTML element of the component."},{name:"bind:inputElement",type:"element",description:"Exposes the HTML element of the underlying input."},{name:"bind:listElement",type:"element",description:"Exposes the HTML element of the list."},{name:"on:change",type:"function",description:"Triggered when tag is added/removed from the input value."}],l=`
<InputTag label="Tags" value="tag1, tag2" on:change="{onChange}" />

<script>
function onChange (e) {
    console.log('tags', e.detail.value);
}
&lt;/script>
`,r="tag1, tag2",a=["Tag1","AnotherOne","Long-name-tag-3",...Array.from({length:40},(f,c)=>`Long-name-tag-${c+4}`)],u=Array.from({length:40},(f,c)=>"Tag-"+c);function m(f){r=f,n(0,r)}return[r,i,l,a,u,m]}var ah=class extends fe{constructor(e){super(),de(this,e,ly,oy,me,{})}},c0=ah;function ry(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O,D,L,T,A,H,I,P,N,j,K;function U(F){t[5](F)}let G={};return t[0]!==void 0&&(G.value=t[0]),u=new Ho({props:G}),_e.push(()=>Ge(u,"value",U)),k=new Ho({props:{disabled:!0,value:"00:00"}}),D=new Ho({props:{label:"Select Midnight",error:t[1],value:"00:01"}}),D.$on("change",t[4]),H=new Ho({props:{label:"Label is on the left",labelOnTheLeft:"true"}}),P=new ze({props:{html:t[3]}}),j=new Fe({props:{props:t[2]}}),{c(){e=p("h2"),e.textContent="Input Time",n=d(),i=p("p"),i.textContent="This is just a simple wrapper around the native input time control.",l=d(),r=p("h3"),r.textContent="Normal",a=d(),S(u.$$.fragment),f=d(),c=p("p"),g=ne("Input value: "),b=ne(t[0]),h=d(),v=p("h3"),v.textContent="Disabled",w=d(),S(k.$$.fragment),_=d(),M=p("h3"),M.textContent="With validation",O=d(),S(D.$$.fragment),L=d(),T=p("h3"),T.textContent="Label on the left",A=d(),S(H.$$.fragment),I=d(),S(P.$$.fragment),N=d(),S(j.$$.fragment)},m(F,z){s(F,e,z),s(F,n,z),s(F,i,z),s(F,l,z),s(F,r,z),s(F,a,z),E(u,F,z),s(F,f,z),s(F,c,z),q(c,g),q(c,b),s(F,h,z),s(F,v,z),s(F,w,z),E(k,F,z),s(F,_,z),s(F,M,z),s(F,O,z),E(D,F,z),s(F,L,z),s(F,T,z),s(F,A,z),E(H,F,z),s(F,I,z),E(P,F,z),s(F,N,z),E(j,F,z),K=!0},p(F,[z]){let V={};!m&&z&1&&(m=!0,V.value=F[0],Ue(()=>m=!1)),u.$set(V),(!K||z&1)&&je(b,F[0]);let Q={};z&2&&(Q.error=F[1]),D.$set(Q)},i(F){K||($(u.$$.fragment,F),$(k.$$.fragment,F),$(D.$$.fragment,F),$(H.$$.fragment,F),$(P.$$.fragment,F),$(j.$$.fragment,F),K=!0)},o(F){y(u.$$.fragment,F),y(k.$$.fragment,F),y(D.$$.fragment,F),y(H.$$.fragment,F),y(P.$$.fragment,F),y(j.$$.fragment,F),K=!1},d(F){F&&(o(e),o(n),o(i),o(l),o(r),o(a),o(f),o(c),o(h),o(v),o(w),o(_),o(M),o(O),o(L),o(T),o(A),o(I),o(N)),C(u,F),C(k,F),C(D,F),C(H,F),C(P,F),C(j,F)}}}function ay(t,e,n){let i=[{name:"class",type:"string",description:"Additional css class name to be added to the component."},{name:"disabled",description:"Make the input disabled."},{name:"id",type:"string",description:"Assign ID to the underlying input."},{name:"info",type:"string",description:"Show info message above the input."},{name:"error",type:"string",description:"Error message to show above the input."},{name:"name",type:"string",description:"Assign title to the underlying input."},{name:"label",type:"string",description:"Label for the input."},{name:"labelOnTheLeft",type:["true","false"],default:"false",description:"Put label to the left of the input (instead of at the top). Usually in longer forms, to align labels and inputs, hence input also gets <em>width: 100%</em>, as it will be constraint by the form container."},{name:"placeholder",type:"string",description:"Assign placeholder to the underlying input."},{name:"required",description:"Mark the input as <i>aria-required</i>. The actual validation must be done in the consumer."},{name:"title",type:"string",description:"Assign title to the underlying input."},{name:"value",type:["string","number"],description:"Initial value of the input."},{name:"bind:element",type:"element",description:"Exposes the HTML element of the component."},{name:"bind:inputElement",type:"element",description:"Exposes the HTML element of the underlying input."},{name:"on:change",type:"function",description:"Triggered after the value changes and the focus leaves the input."},{name:"on:input",type:"function",description:"Triggered as soon as the input value changes."}],l=`
<InputTime label="Email" error="Invalid email" value="00:00" on:change="{onChange}" />

<script>
function onChange (e) {
    console.log('value', e.target.value);
}
&lt;/script>
`,r="00:00",a="Select midnight please.";function u(f){n(1,a=f.target.value==="00:00"?"":"Select midnight please."),console.log(f.target.value)}function m(f){r=f,n(0,r)}return[r,a,i,l,u,m]}var uh=class extends fe{constructor(e){super(),de(this,e,ay,ry,me,{})}},p0=uh;function uy(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O,D,L,T,A,H,I,P,N,j,K,U,G,F,z,V,Q;function le(X){t[7](X)}let ee={};return t[0]!==void 0&&(ee.value=t[0]),f=new Zn({props:ee}),_e.push(()=>Ge(f,"value",le)),f.$on("input",t[6]),M=new Zn({props:{disabled:!0,value:"disabled value"}}),M.$on("input",t[6]),T=new Zn({props:{label:"Validate on change",error:t[1],value:t[0]}}),T.$on("change",t[5]),P=new Zn({props:{label:"Validate on input",info:"This should be avoided in most cases. Validating input as user is typing is a bad UX.",required:!0,error:t[2],value:t[0]}}),P.$on("input",t[6]),U=new Zn({props:{label:"Label is on the left",labelOnTheLeft:"true"}}),F=new ze({props:{html:t[4]}}),V=new Fe({props:{props:t[3]}}),{c(){e=p("h2"),e.textContent="Input",n=d(),i=p("p"),i.innerHTML=`The basic inputs are styled with css.<br/>
	Enhanced components provide additional functionality and better DX.`,l=d(),r=p("br"),a=d(),u=p("h3"),u.textContent="Normal",m=d(),S(f.$$.fragment),g=d(),b=p("p"),h=ne("Input value: "),v=ne(t[0]),w=d(),k=p("h3"),k.textContent="Disabled",_=d(),S(M.$$.fragment),O=d(),D=p("h3"),D.textContent="With validation",L=d(),S(T.$$.fragment),A=d(),H=p("br"),I=d(),S(P.$$.fragment),N=d(),j=p("h3"),j.textContent="Label on the left",K=d(),S(U.$$.fragment),G=d(),S(F.$$.fragment),z=d(),S(V.$$.fragment)},m(X,Z){s(X,e,Z),s(X,n,Z),s(X,i,Z),s(X,l,Z),s(X,r,Z),s(X,a,Z),s(X,u,Z),s(X,m,Z),E(f,X,Z),s(X,g,Z),s(X,b,Z),q(b,h),q(b,v),s(X,w,Z),s(X,k,Z),s(X,_,Z),E(M,X,Z),s(X,O,Z),s(X,D,Z),s(X,L,Z),E(T,X,Z),s(X,A,Z),s(X,H,Z),s(X,I,Z),E(P,X,Z),s(X,N,Z),s(X,j,Z),s(X,K,Z),E(U,X,Z),s(X,G,Z),E(F,X,Z),s(X,z,Z),E(V,X,Z),Q=!0},p(X,[Z]){let ge={};!c&&Z&1&&(c=!0,ge.value=X[0],Ue(()=>c=!1)),f.$set(ge),(!Q||Z&1)&&je(v,X[0]);let he={};Z&2&&(he.error=X[1]),Z&1&&(he.value=X[0]),T.$set(he);let W={};Z&4&&(W.error=X[2]),Z&1&&(W.value=X[0]),P.$set(W)},i(X){Q||($(f.$$.fragment,X),$(M.$$.fragment,X),$(T.$$.fragment,X),$(P.$$.fragment,X),$(U.$$.fragment,X),$(F.$$.fragment,X),$(V.$$.fragment,X),Q=!0)},o(X){y(f.$$.fragment,X),y(M.$$.fragment,X),y(T.$$.fragment,X),y(P.$$.fragment,X),y(U.$$.fragment,X),y(F.$$.fragment,X),y(V.$$.fragment,X),Q=!1},d(X){X&&(o(e),o(n),o(i),o(l),o(r),o(a),o(u),o(m),o(g),o(b),o(w),o(k),o(_),o(O),o(D),o(L),o(A),o(H),o(I),o(N),o(j),o(K),o(G),o(z)),C(f,X),C(M,X),C(T,X),C(P,X),C(U,X),C(F,X),C(V,X)}}}var fy=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;function h0(t){if(!t)return"This field is required";if(!fy.test(t))return"Invalid email"}function my(t,e,n){let i=[{name:"class",type:"string",description:"Additional css class name to be added to the component."},{name:"disabled",description:"Make the input disabled."},{name:"id",type:"string",description:"Assign ID to the underlying input."},{name:"info",type:"string",description:"Show info message above the input."},{name:"error",type:"string",description:"Error message to show above the input."},{name:"name",type:"string",description:"Assign title to the underlying input."},{name:"label",type:"string",description:"Label for the input."},{name:"labelOnTheLeft",type:["true","false"],default:"false",description:"Put label to the left of the input (instead of at the top). Usually in longer forms, to align labels and inputs, hence input also gets <em>width: 100%</em>, as it will be constraint by the form container."},{name:"placeholder",type:"string",description:"Assign placeholder to the underlying input."},{name:"required",description:"Mark the input as <i>aria-required</i>. The actual validation must be done in the consumer."},{name:"title",type:"string",description:"Assign title to the underlying input."},{name:"value",type:["string","number"],description:"Initial value of the input."},{name:"bind:element",type:"element",description:"Exposes the HTML element of the component."},{name:"bind:inputElement",type:"element",description:"Exposes the HTML element of the underlying input."},{name:"on:change",type:"function",description:"Triggered after the value changes and the focus leaves the input."},{name:"on:input",type:"function",description:"Triggered as soon as the input value changes."}],l=`
<InputText label="Email" error="Invalid email" value="admin" on:change="{onChange}" />

<script>
function onChange (e) {
    console.log('value', e.target.value);
}
&lt;/script>
`,r="Hi!",a="",u="";function m(g){n(1,a=h0(g.target.value)),console.log(g.target.value)}function f(g){n(2,u=h0(g.target.value)),console.log(g.target.value)}f({target:{value:"-"}});function c(g){r=g,n(0,r)}return[r,a,u,i,l,m,f,c]}var fh=class extends fe{constructor(e){super(),de(this,e,my,uy,me,{})}},g0=fh;function dy(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O,D,L,T,A,H,I,P,N,j,K,U,G,F,z,V,Q;function le(X){t[8](X)}let ee={items:t[4],name:"my-radio1",label:"Select option 1"};return t[0]!==void 0&&(ee.value=t[0]),r=new Mi({props:ee}),_e.push(()=>Ge(r,"value",le)),r.$on("change",b0),c=new Mi({props:{items:t[5],name:"my-radio2",label:"Select option 2",disabled:!0}}),v=new Mi({props:{items:t[6],name:"my-radio3",label:"Select option 3"}}),v.$on("change",b0),M=new Mi({props:{items:t[6],name:"my-radio4",label:"Select option 4",error:t[1]}}),M.$on("change",t[7]),T=new Mi({props:{items:t[6],name:"my-radio5",label:"Select option 5",info:"Here be info message."}}),P=new Mi({props:{items:t[6],name:"my-radio6",label:"Select option 5",error:"Here be error message.",info:"Here be info message."}}),U=new Mi({props:{items:t[6],label:"Label is on the left",labelOnTheLeft:"true"}}),F=new ze({props:{html:t[3]}}),V=new Fe({props:{props:t[2]}}),{c(){e=p("h2"),e.textContent="Radio",n=d(),i=p("h3"),i.textContent="Normal",l=d(),S(r.$$.fragment),u=d(),m=p("h3"),m.textContent="Disabled",f=d(),S(c.$$.fragment),g=d(),b=p("h3"),b.textContent="List of strings as values",h=d(),S(v.$$.fragment),w=d(),k=p("h3"),k.textContent="With error and live validation",_=d(),S(M.$$.fragment),O=d(),D=p("h3"),D.textContent="With info",L=d(),S(T.$$.fragment),A=d(),H=p("h3"),H.textContent="With info and error",I=d(),S(P.$$.fragment),N=d(),j=p("h3"),j.textContent="Label on the left",K=d(),S(U.$$.fragment),G=d(),S(F.$$.fragment),z=d(),S(V.$$.fragment)},m(X,Z){s(X,e,Z),s(X,n,Z),s(X,i,Z),s(X,l,Z),E(r,X,Z),s(X,u,Z),s(X,m,Z),s(X,f,Z),E(c,X,Z),s(X,g,Z),s(X,b,Z),s(X,h,Z),E(v,X,Z),s(X,w,Z),s(X,k,Z),s(X,_,Z),E(M,X,Z),s(X,O,Z),s(X,D,Z),s(X,L,Z),E(T,X,Z),s(X,A,Z),s(X,H,Z),s(X,I,Z),E(P,X,Z),s(X,N,Z),s(X,j,Z),s(X,K,Z),E(U,X,Z),s(X,G,Z),E(F,X,Z),s(X,z,Z),E(V,X,Z),Q=!0},p(X,[Z]){let ge={};!a&&Z&1&&(a=!0,ge.value=X[0],Ue(()=>a=!1)),r.$set(ge);let he={};Z&2&&(he.error=X[1]),M.$set(he)},i(X){Q||($(r.$$.fragment,X),$(c.$$.fragment,X),$(v.$$.fragment,X),$(M.$$.fragment,X),$(T.$$.fragment,X),$(P.$$.fragment,X),$(U.$$.fragment,X),$(F.$$.fragment,X),$(V.$$.fragment,X),Q=!0)},o(X){y(r.$$.fragment,X),y(c.$$.fragment,X),y(v.$$.fragment,X),y(M.$$.fragment,X),y(T.$$.fragment,X),y(P.$$.fragment,X),y(U.$$.fragment,X),y(F.$$.fragment,X),y(V.$$.fragment,X),Q=!1},d(X){X&&(o(e),o(n),o(i),o(l),o(u),o(m),o(f),o(g),o(b),o(h),o(w),o(k),o(_),o(O),o(D),o(L),o(A),o(H),o(I),o(N),o(j),o(K),o(G),o(z)),C(r,X),C(c,X),C(v,X),C(M,X),C(T,X),C(P,X),C(U,X),C(F,X),C(V,X)}}}function b0(t){let{item:e,value:n}=t.detail;console.log(e,n)}function cy(t,e,n){let i=[{name:"class",type:"string",description:"Additional css class name to be added to the component."},{name:"disabled",description:"Make all radio buttons disabled."},{name:"id",type:"string",description:"Assign ID to the whole component."},{name:"info",type:"string",description:"Show info message above the inputs."},{name:"error",type:"string",description:"Error message to show above the inputs."},{name:"items",type:"array",required:!0,description:"An array of strings or objects in the following format: <code>&lbrace; name: string, value: string | number, id?: string | number, disabled?: boolean &rbrace;</code>(if <i>id</i> is present - it should be unique)."},{name:"name",type:"string",description:"Assign title to the underlying input."},{name:"label",type:"string",description:"Label for the whole component."},{name:"labelOnTheLeft",type:["true","false"],default:"false",description:"Put label to the left of the input (instead of at the top). Usually in longer forms, to align labels and inputs, hence input also gets <em>width: 100%</em>, as it will be constraint by the form container."},{name:"title",type:"string",description:"Assign title to whole component."},{name:"value",type:["string","number"],description:"Value of the component (=value of the checked item)."},{name:"bind:element",type:"element",description:"Exposes the HTML element of the component."},{name:"on:change",type:"function",description:"Triggered when the value changes."}],l=`
<Radio {items} name="my-radio" bind:value="{value}" label="Select option" />


<script>
const items = [
	{ name: 'One', value: 1, disabled: true },
	{ name: 'Two', value: 2 },
	{ name: 'Three', value: 3 },
	{ name: 'Four', value: 4 },
];

function onChange (e) {
    console.log('value', e.target.value);
}
&lt;/script>
`,r=[{name:"One",value:1,disabled:!0},{name:"Two",value:2},{name:"Three",value:3},{name:"Four",value:4}],a=r[1].value,u=["One","Two","Three","Four"],m=["One","Two","Three","Four"],f='You must select "Four"!';function c(b){let{value:h}=b.detail;n(1,f=h===m[3]?"":'You must select "Four"!')}function g(b){a=b,n(0,a)}return[a,f,i,l,r,u,m,c,g]}var mh=class extends fe{constructor(e){super(),de(this,e,cy,dy,me,{})}},_0=mh;function py(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O,D,L,T,A,H,I,P,N,j,K,U,G,F,z,V,Q,le,ee,X,Z,ge,he,W,Y,J;return u=new Jn({}),g=new Jn({props:{disabled:!0}}),w=new Jn({props:{hideTicks:!0}}),O=new Jn({props:{min:"10",max:"100",step:"5"}}),A=new Jn({props:{label:"Slide to the right"}}),N=new Jn({props:{label:"Write some text",info:"This is some info for you"}}),G=new Jn({props:{label:"Move the slider",error:t[0],value:"5"}}),G.$on("change",t[3]),Q=new Jn({props:{label:"Move the slider",info:"Don't make any mistakes!",error:"You did not slide!"}}),Z=new Jn({props:{label:"Label is on the left",labelOnTheLeft:"true"}}),he=new ze({props:{html:t[2]}}),Y=new Fe({props:{props:t[1]}}),{c(){e=p("h2"),e.textContent="Range",n=d(),i=p("p"),i.textContent="A wrapper around the native range input.",l=d(),r=p("h3"),r.textContent="Default",a=d(),S(u.$$.fragment),m=d(),f=p("h3"),f.textContent="Disabled",c=d(),S(g.$$.fragment),b=d(),h=p("h3"),h.textContent="With ticks hidden",v=d(),S(w.$$.fragment),k=d(),_=p("h3"),_.textContent="With different constraints",M=d(),S(O.$$.fragment),D=d(),L=p("h3"),L.textContent="With label",T=d(),S(A.$$.fragment),H=d(),I=p("h3"),I.textContent="With label and info text",P=d(),S(N.$$.fragment),j=d(),K=p("h3"),K.textContent="With label and error and live validation",U=d(),S(G.$$.fragment),F=d(),z=p("h3"),z.textContent="With label, info, and error",V=d(),S(Q.$$.fragment),le=d(),ee=p("h3"),ee.textContent="Label on the left",X=d(),S(Z.$$.fragment),ge=d(),S(he.$$.fragment),W=d(),S(Y.$$.fragment)},m(pe,we){s(pe,e,we),s(pe,n,we),s(pe,i,we),s(pe,l,we),s(pe,r,we),s(pe,a,we),E(u,pe,we),s(pe,m,we),s(pe,f,we),s(pe,c,we),E(g,pe,we),s(pe,b,we),s(pe,h,we),s(pe,v,we),E(w,pe,we),s(pe,k,we),s(pe,_,we),s(pe,M,we),E(O,pe,we),s(pe,D,we),s(pe,L,we),s(pe,T,we),E(A,pe,we),s(pe,H,we),s(pe,I,we),s(pe,P,we),E(N,pe,we),s(pe,j,we),s(pe,K,we),s(pe,U,we),E(G,pe,we),s(pe,F,we),s(pe,z,we),s(pe,V,we),E(Q,pe,we),s(pe,le,we),s(pe,ee,we),s(pe,X,we),E(Z,pe,we),s(pe,ge,we),E(he,pe,we),s(pe,W,we),E(Y,pe,we),J=!0},p(pe,[we]){let ve={};we&1&&(ve.error=pe[0]),G.$set(ve)},i(pe){J||($(u.$$.fragment,pe),$(g.$$.fragment,pe),$(w.$$.fragment,pe),$(O.$$.fragment,pe),$(A.$$.fragment,pe),$(N.$$.fragment,pe),$(G.$$.fragment,pe),$(Q.$$.fragment,pe),$(Z.$$.fragment,pe),$(he.$$.fragment,pe),$(Y.$$.fragment,pe),J=!0)},o(pe){y(u.$$.fragment,pe),y(g.$$.fragment,pe),y(w.$$.fragment,pe),y(O.$$.fragment,pe),y(A.$$.fragment,pe),y(N.$$.fragment,pe),y(G.$$.fragment,pe),y(Q.$$.fragment,pe),y(Z.$$.fragment,pe),y(he.$$.fragment,pe),y(Y.$$.fragment,pe),J=!1},d(pe){pe&&(o(e),o(n),o(i),o(l),o(r),o(a),o(m),o(f),o(c),o(b),o(h),o(v),o(k),o(_),o(M),o(D),o(L),o(T),o(H),o(I),o(P),o(j),o(K),o(U),o(F),o(z),o(V),o(le),o(ee),o(X),o(ge),o(W)),C(u,pe),C(g,pe),C(w,pe),C(O,pe),C(A,pe),C(N,pe),C(G,pe),C(Q,pe),C(Z,pe),C(he,pe),C(Y,pe)}}}function hy(t,e,n){let i=[{name:"class",type:"string",description:"Additional css class name to be added to the component."},{name:"disabled",description:"Make the input disabled."},{name:"id",type:"string",description:"Assign ID to the underlying input."},{name:"info",type:"string",description:"Show info message above the input."},{name:"error",type:"string",description:"Error message to show above the input."},{name:"hideTicks",description:"If present, the ticks will not be shown."},{name:"name",type:"string",description:"Assign title to the underlying input."},{name:"label",type:"string",description:"Label for the input."},{name:"labelOnTheLeft",type:["true","false"],default:"false",description:"Put label to the left of the input (instead of at the top). Usually in longer forms, to align labels and inputs, hence input also gets <em>width: 100%</em>, as it will be constraint by the form container."},{name:"max",type:["number"],default:"10",description:"Max value of the input."},{name:"min",type:["number"],default:"0",description:"Min value of the input."},{name:"step",type:["number"],default:"1",description:"Step value of the input."},{name:"title",type:"string",description:"Assign title to the underlying input."},{name:"value",type:"string",description:"Initial value of the input."},{name:"bind:element",type:"element",description:"Exposes the HTML element of the component."},{name:"bind:inputElement",type:"element",description:"Exposes the HTML element of the underlying input."},{name:"on:change",type:"function",description:"Triggered when the value changes."},{name:"on:input",type:"function",description:"Triggered when input value is edited."}],l=`
<Range on:change="{onChange}" error="Invalid text" />

<script>
function onChange (e) {
    console.log('value', e.target.value);
}
&lt;/script>
`,r="Move to 6.";function a(u){n(0,r=u.target.value==="6"?"":"Move to 6.")}return[r,i,l,a]}var dh=class extends fe{constructor(e){super(),de(this,e,hy,py,me,{})}},v0=dh;function gy(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O,D,L,T,A,H,I,P,N,j,K,U,G,F,z,V,Q,le,ee,X,Z,ge,he,W,Y,J,pe,we,ve,ue,se,xe;u=new Qn({props:{placeholder:"None",items:t[3]}}),g=new Qn({props:{items:[{name:"Disabled"}],disabled:!0}}),w=new Qn({props:{placeholder:"Select something",items:[]}});function ke(ae){t[5](ae)}let ce={placeholder:"Empty",items:t[3]};t[0]!==void 0&&(ce.value=t[0]),O=new Qn({props:ce}),_e.push(()=>Ge(O,"value",ke));function be(ae){t[6](ae)}let Ae={placeholder:"Please select...",items:t[4]};return t[0]!==void 0&&(Ae.value=t[0]),P=new Qn({props:Ae}),_e.push(()=>Ge(P,"value",be)),z=new Qn({props:{items:t[3],label:"Select label"}}),ee=new Qn({props:{items:t[3],label:"Select label",info:"Select something here"}}),he=new Qn({props:{items:t[3],label:"Select label",error:"You picked the wrong side!"}}),pe=new Qn({props:{items:t[3],label:"Label is on the left",labelOnTheLeft:"true"}}),ve=new ze({props:{html:t[2]}}),se=new Fe({props:{props:t[1]}}),{c(){e=p("h2"),e.textContent="Select",n=d(),i=p("p"),i.innerHTML=`Select component is based on the native HTML select control.<br/>
	It provides some visual styling and also better data management,<br/>
	i.e. it accepts an array of strings or objects.`,l=d(),r=p("h3"),r.textContent="Normal",a=d(),S(u.$$.fragment),m=d(),f=p("h3"),f.textContent="Disabled",c=d(),S(g.$$.fragment),b=d(),h=p("h3"),h.textContent="With placeholder",v=d(),S(w.$$.fragment),k=d(),_=p("h3"),_.textContent="With initial value",M=d(),S(O.$$.fragment),L=ne(" Selected value: "),T=ne(t[0]),A=d(),H=p("h3"),H.innerHTML="With array of strings for <em>items</em>",I=d(),S(P.$$.fragment),j=ne(" Selected value: "),K=ne(t[0]),U=d(),G=p("h3"),G.textContent="Label",F=d(),S(z.$$.fragment),V=d(),Q=p("h3"),Q.textContent="Info",le=d(),S(ee.$$.fragment),X=d(),Z=p("h3"),Z.textContent="Error",ge=d(),S(he.$$.fragment),W=d(),Y=p("h3"),Y.textContent="Label on the left",J=d(),S(pe.$$.fragment),we=d(),S(ve.$$.fragment),ue=d(),S(se.$$.fragment)},m(ae,$e){s(ae,e,$e),s(ae,n,$e),s(ae,i,$e),s(ae,l,$e),s(ae,r,$e),s(ae,a,$e),E(u,ae,$e),s(ae,m,$e),s(ae,f,$e),s(ae,c,$e),E(g,ae,$e),s(ae,b,$e),s(ae,h,$e),s(ae,v,$e),E(w,ae,$e),s(ae,k,$e),s(ae,_,$e),s(ae,M,$e),E(O,ae,$e),s(ae,L,$e),s(ae,T,$e),s(ae,A,$e),s(ae,H,$e),s(ae,I,$e),E(P,ae,$e),s(ae,j,$e),s(ae,K,$e),s(ae,U,$e),s(ae,G,$e),s(ae,F,$e),E(z,ae,$e),s(ae,V,$e),s(ae,Q,$e),s(ae,le,$e),E(ee,ae,$e),s(ae,X,$e),s(ae,Z,$e),s(ae,ge,$e),E(he,ae,$e),s(ae,W,$e),s(ae,Y,$e),s(ae,J,$e),E(pe,ae,$e),s(ae,we,$e),E(ve,ae,$e),s(ae,ue,$e),E(se,ae,$e),xe=!0},p(ae,[$e]){let re={};!D&&$e&1&&(D=!0,re.value=ae[0],Ue(()=>D=!1)),O.$set(re),(!xe||$e&1)&&je(T,ae[0]);let oe={};!N&&$e&1&&(N=!0,oe.value=ae[0],Ue(()=>N=!1)),P.$set(oe),(!xe||$e&1)&&je(K,ae[0])},i(ae){xe||($(u.$$.fragment,ae),$(g.$$.fragment,ae),$(w.$$.fragment,ae),$(O.$$.fragment,ae),$(P.$$.fragment,ae),$(z.$$.fragment,ae),$(ee.$$.fragment,ae),$(he.$$.fragment,ae),$(pe.$$.fragment,ae),$(ve.$$.fragment,ae),$(se.$$.fragment,ae),xe=!0)},o(ae){y(u.$$.fragment,ae),y(g.$$.fragment,ae),y(w.$$.fragment,ae),y(O.$$.fragment,ae),y(P.$$.fragment,ae),y(z.$$.fragment,ae),y(ee.$$.fragment,ae),y(he.$$.fragment,ae),y(pe.$$.fragment,ae),y(ve.$$.fragment,ae),y(se.$$.fragment,ae),xe=!1},d(ae){ae&&(o(e),o(n),o(i),o(l),o(r),o(a),o(m),o(f),o(c),o(b),o(h),o(v),o(k),o(_),o(M),o(L),o(T),o(A),o(H),o(I),o(j),o(K),o(U),o(G),o(F),o(V),o(Q),o(le),o(X),o(Z),o(ge),o(W),o(Y),o(J),o(we),o(ue)),C(u,ae),C(g,ae),C(w,ae),C(O,ae),C(P,ae),C(z,ae),C(ee,ae),C(he,ae),C(pe,ae),C(ve,ae),C(se,ae)}}}function by(t,e,n){let i="Beta",l=[{name:"class",type:"string",description:"Additional css class name to be added to the component."},{name:"disabled",description:"Make the select disabled."},{name:"id",type:"string",description:"Assign ID to the underlying select."},{name:"info",type:"string",description:"Show info message above the select."},{name:"error",type:"string",description:"Error message to show above the select."},{name:"label",type:"string",description:"Label for the select."},{name:"labelOnTheLeft",type:["true","false"],default:"false",description:"Put label to the left of the input (instead of at the top). Usually in longer forms, to align labels and inputs, hence input also gets <em>width: 100%</em>, as it will be constraint by the form container."},{name:"items",type:"array",required:!0,description:"An array of strings or objects in the following format: <code>&lbrace; name: string, id?: string | number, group?: string &rbrace;</code>(<i>name</i> should be unique, or - if <i>id</i> is present - <i>id</i> should be unique)."},{name:"name",type:"string",description:"Assign title to the underlying select."},{name:"placeholder",type:"string",description:"Adds an item to the beginning of the options list."},{name:"required",description:"Mark the select as <i>aria-required</i>."},{name:"title",type:"string",description:"Assign title to the underlying select."},{name:"value",type:["string","number"],description:"Initial value of the select.<br>If the list is an array of strings - it would match the item,<br>if the list is an array of objects - it should match the id of the item. "},{name:"bind:element",type:"element",description:"Exposes the HTML element of the component."},{name:"bind:inputElement",type:"element",description:"Exposes the HTML element of the underlying select."},{name:"on:change",type:"function",description:"Triggered when the value changes."}],r=`
<Select items="{items}" on:change="{onChange}" />

<script>
const items = [
	{ id: '1', name: 'Alpha', group: 'Group 1' },
	{ id: '2', name: 'Beta', group: 'Group 1' },
	{ id: '3', name: 'Gamma', group: 'Group 1' },
];
function onChange (e) {
	const { value, oldValue } = e.detail;
	console.log({ value, oldValue });
}
&lt;/script>
`,a=[{id:"Alpha",name:"Alpha",group:"Group 1"},{id:"Beta",name:"Beta",group:"Group 1"},{id:"Gamma",name:"Gamma",group:"Group 1"},{id:"Delta",name:"Delta",group:"Group 1"},{id:"Epsilon",name:"Epsilon"},{id:"Zeta",name:"Zeta"},{id:"Eta",name:"Eta",group:"Group 2"},{id:"Theta",name:"Theta",group:"Group 2"},{id:"Iota",name:"Iota",group:"Group 2"},{id:"Kappa",name:"Kappa",group:"Group 2"},{id:"Lambda",name:"Lambda",group:"Group 2"},{id:"long-one",name:"A very long text",group:"Group 2"},{id:"Eta",name:"Eta",group:"Group 3"},{id:"Theta",name:"Theta",group:"Group 3"},{id:"Iota",name:"Iota",group:"Group 3"},{id:"Kappa",name:"Kappa",group:"Group 3"},{id:"Lambda",name:"Lambda",group:"Group 3"},{id:"long-one",name:"A very long text",group:"Group 3"},{id:"Eta",name:"Eta",group:"Group 4"},{id:"Theta",name:"Theta",group:"Group 4"},{id:"Iota",name:"Iota",group:"Group 4"},{id:"Kappa",name:"Kappa",group:"Group 4"},{id:"Lambda",name:"Lambda",group:"Group 4"},{id:"long-one",name:"A very long text",group:"Group 4"}],u=["Alpha","Beta","Gamma","Delta"];function m(c){i=c,n(0,i)}function f(c){i=c,n(0,i)}return[i,l,r,a,u,m,f]}var ch=class extends fe{constructor(e){super(),de(this,e,by,gy,me,{})}},$0=ch;function _y(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O,D,L,T,A,H,I,P,N,j,K,U,G,F,z,V,Q,le,ee,X;return r=new mi({props:{label:"Write some text"}}),f=new mi({props:{label:"Write some text",disabled:!0}}),h=new mi({props:{label:"Write some text",placeholder:"Add some text"}}),_=new mi({props:{label:"Write some text",autogrow:!0}}),L=new mi({props:{label:"Write some text",info:"This is some extra info for you"}}),I=new mi({props:{label:"Write some text",error:t[0]}}),I.$on("input",t[3]),K=new mi({props:{label:"Write some text",info:"Don't make any mistakes!",error:"You have a typo somewhere in here",autogrow:!0}}),z=new mi({props:{label:"Label is on the left",labelOnTheLeft:"true"}}),Q=new ze({props:{html:t[2]}}),ee=new Fe({props:{props:t[1]}}),{c(){e=p("h2"),e.textContent="Textarea",n=d(),i=p("h3"),i.textContent="Default",l=d(),S(r.$$.fragment),a=d(),u=p("h3"),u.textContent="Disabled",m=d(),S(f.$$.fragment),c=d(),g=p("h3"),g.textContent="Placeholder",b=d(),S(h.$$.fragment),v=d(),w=p("h3"),w.textContent="Autogrow",k=d(),S(_.$$.fragment),M=d(),O=p("h3"),O.textContent="With info text",D=d(),S(L.$$.fragment),T=d(),A=p("h3"),A.textContent="With error and live validation",H=d(),S(I.$$.fragment),P=d(),N=p("h3"),N.textContent="With info, error and autogrow",j=d(),S(K.$$.fragment),U=d(),G=p("h3"),G.textContent="Label on the left",F=d(),S(z.$$.fragment),V=d(),S(Q.$$.fragment),le=d(),S(ee.$$.fragment)},m(Z,ge){s(Z,e,ge),s(Z,n,ge),s(Z,i,ge),s(Z,l,ge),E(r,Z,ge),s(Z,a,ge),s(Z,u,ge),s(Z,m,ge),E(f,Z,ge),s(Z,c,ge),s(Z,g,ge),s(Z,b,ge),E(h,Z,ge),s(Z,v,ge),s(Z,w,ge),s(Z,k,ge),E(_,Z,ge),s(Z,M,ge),s(Z,O,ge),s(Z,D,ge),E(L,Z,ge),s(Z,T,ge),s(Z,A,ge),s(Z,H,ge),E(I,Z,ge),s(Z,P,ge),s(Z,N,ge),s(Z,j,ge),E(K,Z,ge),s(Z,U,ge),s(Z,G,ge),s(Z,F,ge),E(z,Z,ge),s(Z,V,ge),E(Q,Z,ge),s(Z,le,ge),E(ee,Z,ge),X=!0},p(Z,[ge]){let he={};ge&1&&(he.error=Z[0]),I.$set(he)},i(Z){X||($(r.$$.fragment,Z),$(f.$$.fragment,Z),$(h.$$.fragment,Z),$(_.$$.fragment,Z),$(L.$$.fragment,Z),$(I.$$.fragment,Z),$(K.$$.fragment,Z),$(z.$$.fragment,Z),$(Q.$$.fragment,Z),$(ee.$$.fragment,Z),X=!0)},o(Z){y(r.$$.fragment,Z),y(f.$$.fragment,Z),y(h.$$.fragment,Z),y(_.$$.fragment,Z),y(L.$$.fragment,Z),y(I.$$.fragment,Z),y(K.$$.fragment,Z),y(z.$$.fragment,Z),y(Q.$$.fragment,Z),y(ee.$$.fragment,Z),X=!1},d(Z){Z&&(o(e),o(n),o(i),o(l),o(a),o(u),o(m),o(c),o(g),o(b),o(v),o(w),o(k),o(M),o(O),o(D),o(T),o(A),o(H),o(P),o(N),o(j),o(U),o(G),o(F),o(V),o(le)),C(r,Z),C(f,Z),C(h,Z),C(_,Z),C(L,Z),C(I,Z),C(K,Z),C(z,Z),C(Q,Z),C(ee,Z)}}}function vy(t,e,n){let i=[{name:"autogrow",description:"If present - the textarea will grow in height to match the text and avoid scrollbar."},{name:"class",type:"string",description:"Additional css class name to be added to the component."},{name:"disabled",description:"Make the textarea disabled."},{name:"id",type:"string",description:"Assign ID to the underlying textarea."},{name:"info",type:"string",description:"Show info message above the textarea."},{name:"error",type:"string",description:"Error message to show above the textarea."},{name:"name",type:"string",description:"Assign title to the underlying textarea."},{name:"label",type:"string",description:"Label for the textarea."},{name:"labelOnTheLeft",type:["true","false"],default:"false",description:"Put label to the left of the input (instead of at the top). Usually in longer forms, to align labels and inputs, hence input also gets <em>width: 100%</em>, as it will be constraint by the form container."},{name:"placeholder",type:"string",description:"Assign placeholder to the underlying textarea."},{name:"required",description:"Mark the textarea as <i>aria-required</i>."},{name:"title",type:"string",description:"Assign title to the underlying textarea."},{name:"value",type:"string",description:"Initial value of the textarea."},{name:"bind:element",type:"element",description:"Exposes the HTML element of the component."},{name:"bind:inputElement",type:"element",description:"Exposes the HTML element of the underlying input."},{name:"on:change",type:"function",description:"Triggered when the value changes."},{name:"on:input",type:"function",description:"Triggered when textarea value is edited."}],l=`
<Textarea autogrow on:change="{onChange}" error="Invalid text" />

<script>
function onChange (e) {
    console.log('value', e.target.value);
}
&lt;/script>
`,r='Enter "hello" to pass.';function a(u){n(0,r=u.target.value==="hello"?"":'Enter "hello" to pass.')}return[r,i,l,a]}var ph=class extends fe{constructor(e){super(),de(this,e,vy,_y,me,{})}},w0=ph;function $y(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O,D,L,T,A,H,I,P,N,j,K,U,G,F,z,V,Q,le,ee,X,Z,ge,he,W,Y,J,pe,we,ve,ue,se;function xe(ce){t[5](ce)}let ke={};return t[1]!==void 0&&(ke.value=t[1]),f=new pn({props:ke}),_e.push(()=>Ge(f,"value",xe)),w=new pn({}),O=new pn({props:{value:"true"}}),j=new pn({props:{value:!0,disabled:!0}}),F=new pn({props:{label:"Toggle the lights"}}),le=new pn({props:{label:"Toggle the lights",info:"This toggle switches the bathroom lights on/off"}}),ge=new pn({props:{label:"Toggle the lights",error:t[0]}}),ge.$on("change",t[4]),J=new pn({props:{label:"Label is on the left",labelOnTheLeft:"true"}}),we=new ze({props:{html:t[3]}}),ue=new Fe({props:{props:t[2]}}),{c(){e=p("h2"),e.textContent="Toggle",n=ne(`

The perfect toggle component in Svelte:
`),i=p("ul"),i.innerHTML=`<li>allows <em>click</em> as well as <em>drag</em> to toggle
	</li><li>keyboard support: press <em>Enter</em> or <em>Space</em> to toggle
	</li><li>accessible (based on a checkbox input)
	</li><li>no bloat, no dependencies</li>`,l=d(),r=p("hr"),a=d(),u=p("h3"),u.textContent="Normal",m=d(),S(f.$$.fragment),g=d(),b=ne(t[1]),h=d(),v=p("div"),S(w.$$.fragment),k=ne(" hidden initially"),_=p("br"),M=d(),S(O.$$.fragment),D=ne(" hidden initially"),L=d(),T=p("br"),A=p("br"),H=p("br"),I=d(),P=p("h3"),P.textContent="Disabled",N=d(),S(j.$$.fragment),K=ne(` (disabled)


`),U=p("h3"),U.textContent="Label",G=d(),S(F.$$.fragment),z=d(),V=p("h3"),V.textContent="Info",Q=d(),S(le.$$.fragment),ee=d(),X=p("h3"),X.textContent="Error",Z=d(),S(ge.$$.fragment),he=d(),W=p("h3"),W.textContent="Label on the left",Y=d(),S(J.$$.fragment),pe=d(),S(we.$$.fragment),ve=d(),S(ue.$$.fragment),x(v,"class","toggle-box"),ie(v,"visible",t[1])},m(ce,be){s(ce,e,be),s(ce,n,be),s(ce,i,be),s(ce,l,be),s(ce,r,be),s(ce,a,be),s(ce,u,be),s(ce,m,be),E(f,ce,be),s(ce,g,be),s(ce,b,be),s(ce,h,be),s(ce,v,be),E(w,v,null),q(v,k),q(v,_),q(v,M),E(O,v,null),q(v,D),s(ce,L,be),s(ce,T,be),s(ce,A,be),s(ce,H,be),s(ce,I,be),s(ce,P,be),s(ce,N,be),E(j,ce,be),s(ce,K,be),s(ce,U,be),s(ce,G,be),E(F,ce,be),s(ce,z,be),s(ce,V,be),s(ce,Q,be),E(le,ce,be),s(ce,ee,be),s(ce,X,be),s(ce,Z,be),E(ge,ce,be),s(ce,he,be),s(ce,W,be),s(ce,Y,be),E(J,ce,be),s(ce,pe,be),E(we,ce,be),s(ce,ve,be),E(ue,ce,be),se=!0},p(ce,[be]){let Ae={};!c&&be&2&&(c=!0,Ae.value=ce[1],Ue(()=>c=!1)),f.$set(Ae),(!se||be&2)&&je(b,ce[1]),(!se||be&2)&&ie(v,"visible",ce[1]);let ae={};be&1&&(ae.error=ce[0]),ge.$set(ae)},i(ce){se||($(f.$$.fragment,ce),$(w.$$.fragment,ce),$(O.$$.fragment,ce),$(j.$$.fragment,ce),$(F.$$.fragment,ce),$(le.$$.fragment,ce),$(ge.$$.fragment,ce),$(J.$$.fragment,ce),$(we.$$.fragment,ce),$(ue.$$.fragment,ce),se=!0)},o(ce){y(f.$$.fragment,ce),y(w.$$.fragment,ce),y(O.$$.fragment,ce),y(j.$$.fragment,ce),y(F.$$.fragment,ce),y(le.$$.fragment,ce),y(ge.$$.fragment,ce),y(J.$$.fragment,ce),y(we.$$.fragment,ce),y(ue.$$.fragment,ce),se=!1},d(ce){ce&&(o(e),o(n),o(i),o(l),o(r),o(a),o(u),o(m),o(g),o(b),o(h),o(v),o(L),o(T),o(A),o(H),o(I),o(P),o(N),o(K),o(U),o(G),o(z),o(V),o(Q),o(ee),o(X),o(Z),o(he),o(W),o(Y),o(pe),o(ve)),C(f,ce),C(w),C(O),C(j,ce),C(F,ce),C(le,ce),C(ge,ce),C(J,ce),C(we,ce),C(ue,ce)}}}function wy(t,e,n){let i=[{name:"class",type:"string",description:"Additional css class name to be added to the component."},{name:"disabled",description:"Make the input disabled."},{name:"id",type:"string",description:"Assign ID to the underlying input (if not set, a random string will be assigned)."},{name:"info",type:"string",description:"Show info message above the toggle."},{name:"error",type:"string",description:"Error message to show above the toggle."},{name:"name",type:"string",description:"Assign name to the underlying input."},{name:"label",type:"string",description:"Label for the input."},{name:"labelOnTheLeft",type:["true","false"],default:"false",description:"Put label to the left of the input (instead of at the top). Usually in longer forms, to align labels and inputs, hence input also gets <em>width: 100%</em>, as it will be constraint by the form container."},{name:"required",description:"Mark the input as <i>aria-required</i>."},{name:"title",type:"string",description:"Assign title to the underlying input."},{name:"value",type:["true","false"],description:"Initial value of the toggle."},{name:"bind:element",type:"element",description:"Exposes the HTML element of the component."},{name:"bind:inputElement",type:"element",description:"Exposes the HTML element of the underlying input."},{name:"on:change",type:"function",description:"Triggered when the value changes."}],l=`
<Toggle value="true" label="Field label" on:change="{onChange}" />

<script>
function onChange (e) {
    console.log('onchange', e.detail);
}
&lt;/script>
`,r="I can't see anything now!",a=!1;function u(f){let c=f.detail;n(0,r=c?"":"I can't see anything now!"),console.log("onchange",f.detail)}function m(f){a=f,n(1,a)}return[r,a,i,l,u,m]}var hh=class extends fe{constructor(e){super(),de(this,e,wy,$y,me,{})}},y0=hh;function yy(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O,D,L,T,A,H,I,P;return g=new Kn({props:{id:"msg001",msg:"This is a comprehensive explanation of a thing.",type:"info"}}),w=new bt({props:{msg:"Some info text"}}),_=new Yd({props:{msg:"Some warning text"}}),O=new Xo({props:{msg:"Some error text"}}),L=new Vd({props:{msg:"Some success text"}}),A=new ze({props:{html:t[1]}}),I=new Fe({props:{props:t[0]}}),{c(){e=p("h2"),e.textContent="InfoBar",n=d(),i=p("p"),i.textContent="A simple information box with type-styling.",l=d(),r=p("p"),r.innerHTML=`There are also shortcut-components available, for more semantic HTML:
	<em>Info</em>, <em>Warning</em>, <em>Error</em>, and <em>Success</em>.`,a=d(),u=p("br"),m=d(),f=p("h3"),f.textContent="Normal",c=d(),S(g.$$.fragment),b=d(),h=p("h3"),h.textContent="Using shortcuts",v=d(),S(w.$$.fragment),k=d(),S(_.$$.fragment),M=d(),S(O.$$.fragment),D=d(),S(L.$$.fragment),T=d(),S(A.$$.fragment),H=d(),S(I.$$.fragment)},m(N,j){s(N,e,j),s(N,n,j),s(N,i,j),s(N,l,j),s(N,r,j),s(N,a,j),s(N,u,j),s(N,m,j),s(N,f,j),s(N,c,j),E(g,N,j),s(N,b,j),s(N,h,j),s(N,v,j),E(w,N,j),s(N,k,j),E(_,N,j),s(N,M,j),E(O,N,j),s(N,D,j),E(L,N,j),s(N,T,j),E(A,N,j),s(N,H,j),E(I,N,j),P=!0},p:Le,i(N){P||($(g.$$.fragment,N),$(w.$$.fragment,N),$(_.$$.fragment,N),$(O.$$.fragment,N),$(L.$$.fragment,N),$(A.$$.fragment,N),$(I.$$.fragment,N),P=!0)},o(N){y(g.$$.fragment,N),y(w.$$.fragment,N),y(_.$$.fragment,N),y(O.$$.fragment,N),y(L.$$.fragment,N),y(A.$$.fragment,N),y(I.$$.fragment,N),P=!1},d(N){N&&(o(e),o(n),o(i),o(l),o(r),o(a),o(u),o(m),o(f),o(c),o(b),o(h),o(v),o(k),o(M),o(D),o(T),o(H)),C(g,N),C(w,N),C(_,N),C(O,N),C(L,N),C(A,N),C(I,N)}}}function ky(t){return[[{name:"class",type:"string",description:"Additional css class name to be added to the component."},{name:"id",type:"string",description:"Assign ID to the message paragraph."},{name:"msg",type:"string",description:"Message to display. It can use simple html for formatting (message is wrapped in <em>&lt;p&gt;</em> tag)."},{name:"type",type:["info","warning","error","success"],default:"info",description:"Type of the info-bar. This property only exists on the <em>&lt;InfoBar&gt;</em> component, not on the shortcut-components."},{name:"bind:element",type:"element",description:"Exposes the HTML element of the component."}],`
<InfoBar id="msg001" msg="This is a comprehensive explanation of a thing." type="info" />

<!-- Using shortcuts -->
<Info msg="Some info text" />
<Warning msg="Some warning text" />
<Error msg="Some error text" />
<Success msg="Some success text" />
`]}var gh=class extends fe{constructor(e){super(),de(this,e,ky,yy,me,{})}},bh=gh;function Ty(t){let e;return{c(){e=ne("Show info")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function My(t){let e;return{c(){e=ne("Show success")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function Ey(t){let e;return{c(){e=ne("Show warning")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function Cy(t){let e;return{c(){e=ne("Show error for 10s")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function Sy(t){let e;return{c(){e=ne("A very long message")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function Ly(t){let e;return{c(){e=ne("Show success")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function Dy(t){let e;return{c(){e=ne("Show warning")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function Ay(t){let e;return{c(){e=ne("Show error")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function Iy(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O,D,L,T,A,H,I,P,N,j,K,U,G,F,z,V,Q,le,ee,X,Z,ge,he,W,Y,J,pe,we,ve,ue,se,xe,ke,ce,be,Ae,ae;M=new qc({props:{outline:!0,round:!0,hideButton:t[0]}});function $e(oe){t[6](oe)}let re={id:"button-toggle"};return t[0]!==void 0&&(re.value=t[0]),A=new pn({props:re}),_e.push(()=>Ge(A,"value",$e)),K=new De({props:{info:!0,$$slots:{default:[Ty]},$$scope:{ctx:t}}}),K.$on("click",t[7]),G=new De({props:{success:!0,$$slots:{default:[My]},$$scope:{ctx:t}}}),G.$on("click",t[8]),z=new De({props:{warning:!0,$$slots:{default:[Ey]},$$scope:{ctx:t}}}),z.$on("click",t[9]),Q=new De({props:{danger:!0,$$slots:{default:[Cy]},$$scope:{ctx:t}}}),Q.$on("click",t[10]),ge=new De({props:{info:!0,$$slots:{default:[Sy]},$$scope:{ctx:t}}}),ge.$on("click",t[11]),W=new De({props:{success:!0,$$slots:{default:[Ly]},$$scope:{ctx:t}}}),W.$on("click",t[12]),J=new De({props:{warning:!0,$$slots:{default:[Dy]},$$scope:{ctx:t}}}),J.$on("click",t[13]),we=new De({props:{danger:!0,$$slots:{default:[Ay]},$$scope:{ctx:t}}}),we.$on("click",t[14]),ue=new ze({props:{html:t[4]}}),xe=new Fe({props:{props:t[1]}}),ce=new Fe({props:{props:t[2],title:"showNotification function",description:"A component exports a global <em>showNotification</em> function with the following arguments:"}}),Ae=new Fe({props:{props:t[3],title:"hideNotification function",description:"A component exports a global <em>hideNotification</em> function with the following arguments:"}}),{c(){e=p("h2"),e.textContent="Notification Center",n=d(),i=p("p"),i.innerHTML="With the aim of improving accessibility and usability, the <b>Toaster</b> component has been redesigned into a <b>NotificationCenter</b>.",l=d(),r=p("p"),r.innerHTML=`This component renders a bell button that shows a list of &quot;archived&quot; notifications when clicked.<br/>
Button can be hidden using the <em>hideButton=&quot;true&quot;</em> property, in which case the <b>NotificationCenter</b> will work as a regular <b>Toaster</b> component.`,a=d(),u=p("p"),u.innerHTML=`A notification first shows normally on screen, then, when it&#39;s dismissed or auto-closed, it&#39;s moved to the &quot;archive&quot; and available in the <b>NotificationCenter</b>.<br/>
Notifications remain in the archive as long as the user remains on the page. When the user navigates away from the page, or reloads it, the archive is cleared.`,m=d(),f=p("p"),f.innerHTML="The goal of the <b>NotificationCenter</b> is to allow the user to read the notifications that they may have missed.",c=d(),g=p("hr"),b=d(),h=p("h3"),h.textContent="Notification button",v=d(),w=p("div"),k=p("label"),k.textContent="Toggle notification center:",_=d(),S(M.$$.fragment),O=d(),D=p("div"),L=p("label"),L.textContent="Hide button:",T=d(),S(A.$$.fragment),I=d(),P=p("h3"),P.textContent="Notifications",N=d(),j=p("div"),S(K.$$.fragment),U=d(),S(G.$$.fragment),F=d(),S(z.$$.fragment),V=d(),S(Q.$$.fragment),le=d(),ee=p("h3"),ee.textContent="No auto-close",X=d(),Z=p("div"),S(ge.$$.fragment),he=d(),S(W.$$.fragment),Y=d(),S(J.$$.fragment),pe=d(),S(we.$$.fragment),ve=d(),S(ue.$$.fragment),se=d(),S(xe.$$.fragment),ke=d(),S(ce.$$.fragment),be=d(),S(Ae.$$.fragment),x(w,"class","prop-row"),x(L,"for","button-toggle"),x(D,"class","prop-row"),x(j,"class","docs-buttons-row"),x(Z,"class","docs-buttons-row")},m(oe,Oe){s(oe,e,Oe),s(oe,n,Oe),s(oe,i,Oe),s(oe,l,Oe),s(oe,r,Oe),s(oe,a,Oe),s(oe,u,Oe),s(oe,m,Oe),s(oe,f,Oe),s(oe,c,Oe),s(oe,g,Oe),s(oe,b,Oe),s(oe,h,Oe),s(oe,v,Oe),s(oe,w,Oe),q(w,k),q(w,_),E(M,w,null),s(oe,O,Oe),s(oe,D,Oe),q(D,L),q(D,T),E(A,D,null),s(oe,I,Oe),s(oe,P,Oe),s(oe,N,Oe),s(oe,j,Oe),E(K,j,null),q(j,U),E(G,j,null),q(j,F),E(z,j,null),q(j,V),E(Q,j,null),s(oe,le,Oe),s(oe,ee,Oe),s(oe,X,Oe),s(oe,Z,Oe),E(ge,Z,null),q(Z,he),E(W,Z,null),q(Z,Y),E(J,Z,null),q(Z,pe),E(we,Z,null),s(oe,ve,Oe),E(ue,oe,Oe),s(oe,se,Oe),E(xe,oe,Oe),s(oe,ke,Oe),E(ce,oe,Oe),s(oe,be,Oe),E(Ae,oe,Oe),ae=!0},p(oe,[Oe]){let Ke={};Oe&1&&(Ke.hideButton=oe[0]),M.$set(Ke);let nt={};!H&&Oe&1&&(H=!0,nt.value=oe[0],Ue(()=>H=!1)),A.$set(nt);let it={};Oe&32768&&(it.$$scope={dirty:Oe,ctx:oe}),K.$set(it);let lt={};Oe&32768&&(lt.$$scope={dirty:Oe,ctx:oe}),G.$set(lt);let Ce={};Oe&32768&&(Ce.$$scope={dirty:Oe,ctx:oe}),z.$set(Ce);let Ne={};Oe&32768&&(Ne.$$scope={dirty:Oe,ctx:oe}),Q.$set(Ne);let dt={};Oe&32768&&(dt.$$scope={dirty:Oe,ctx:oe}),ge.$set(dt);let ht={};Oe&32768&&(ht.$$scope={dirty:Oe,ctx:oe}),W.$set(ht);let at={};Oe&32768&&(at.$$scope={dirty:Oe,ctx:oe}),J.$set(at);let wt={};Oe&32768&&(wt.$$scope={dirty:Oe,ctx:oe}),we.$set(wt)},i(oe){ae||($(M.$$.fragment,oe),$(A.$$.fragment,oe),$(K.$$.fragment,oe),$(G.$$.fragment,oe),$(z.$$.fragment,oe),$(Q.$$.fragment,oe),$(ge.$$.fragment,oe),$(W.$$.fragment,oe),$(J.$$.fragment,oe),$(we.$$.fragment,oe),$(ue.$$.fragment,oe),$(xe.$$.fragment,oe),$(ce.$$.fragment,oe),$(Ae.$$.fragment,oe),ae=!0)},o(oe){y(M.$$.fragment,oe),y(A.$$.fragment,oe),y(K.$$.fragment,oe),y(G.$$.fragment,oe),y(z.$$.fragment,oe),y(Q.$$.fragment,oe),y(ge.$$.fragment,oe),y(W.$$.fragment,oe),y(J.$$.fragment,oe),y(we.$$.fragment,oe),y(ue.$$.fragment,oe),y(xe.$$.fragment,oe),y(ce.$$.fragment,oe),y(Ae.$$.fragment,oe),ae=!1},d(oe){oe&&(o(e),o(n),o(i),o(l),o(r),o(a),o(u),o(m),o(f),o(c),o(g),o(b),o(h),o(v),o(w),o(O),o(D),o(I),o(P),o(N),o(j),o(le),o(ee),o(X),o(Z),o(ve),o(se),o(ke),o(be)),C(M),C(A),C(K),C(G),C(z),C(Q),C(ge),C(W),C(J),C(we),C(ue,oe),C(xe,oe),C(ce,oe),C(Ae,oe)}}}function Oy(t,e,n){let i=!1,l=[{name:"class",type:"string",description:"Additional css class name to be added to the component."},{name:"hideButton",type:["true","false"],default:"false",description:"If <i>true</i> the button will be hidden."},{name:"outline",description:"Notification center button style: outline"},{name:"round",description:"Makes the notification center button round"}],r=[{name:"1. message",type:"string",required:!0,description:"Message to show."},{name:"2. type",type:["info","success","warning","error"],default:"info",description:"Type of the message."},{name:"3. timeout",type:["number","false"],default:5e3,description:'How long the toast should remain on screen (in milliseconds).<br>If the value is not a number (e.g. "false") - the toast will not auto-close.'},{name:"4. button",type:"string",description:"Label of the optional button on the toast."},{name:"5. callback",type:"function",description:"Callback function triggered when the button is clicked.<br>The function receives 1 parameter, which is the ID of the toast."}],a=[{name:"id",type:"string",description:"ID of the toast message that is returned by <em>showNotification</em> function."}],u=`
<NotificationCenter outline round/>

<Button on:click="{() => showNotification('Hello')}">Show info</Button>
<Button success on:click="{() => showNotification('Hello', 'success')}">Show success</Button>
<Button warning on:click="{() => showNotification('Hello', 'warning')}">Show warning</Button>
<Button danger on:click="{() => showNotification('Hello', 'error', 10000, 'Undo', cb)}">Show error</Button>
<Button danger on:click="{() => showNotification('Hello', 'error', false)}">No auto-close</Button>

<script>
import { NotificationCenter, showNotification, hideNotification, Button } from '@perfectthings/ui';

function cb (id) {
	console.log('do something');
	hideNotification(id);
}
&lt;/script>
`;function m(M){console.log(M),No(M)}function f(M){i=M,n(0,i)}return[i,l,r,a,u,m,f,()=>Ci("Hello"),()=>Ci("Hello","success"),()=>Ci("Hello","warning"),()=>Ci("Hello","error",1e4,"Undo",m),()=>Ci("This is a very long message in a toast, to show how the long text will wrap inside the toast message.","info",!1),()=>Ci("Hello","success",!1),()=>Ci("Hello","warning",!1),()=>Ci("Hello","error",!1)]}var _h=class extends fe{constructor(e){super(),de(this,e,Oy,Iy,me,{})}},vh=_h;function xy(t){let e;return{c(){e=ne("Default message")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function Hy(t){let e;return{c(){e=ne("Show info")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function Py(t){let e;return{c(){e=ne("Show warning")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function Ny(t){let e;return{c(){e=ne("Show error")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function Fy(t){let e;return{c(){e=ne("Show success")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function qy(t){let e;return{c(){e=ne("Show message with title")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function By(t){let e;return{c(){e=ne("Show message with title")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function Ry(t){let e;return{c(){e=ne("Show long message")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function jy(t){let e;return{c(){e=ne("Show long message")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function zy(t){let e;return{c(){e=ne("Show message")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function Wy(t){let e;return{c(){e=ne("Show Info with title and button label and callback")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function Vy(t){let e;return{c(){e=ne("Show complex message")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function Uy(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O,D,L,T,A,H,I,P,N,j,K,U,G,F,z,V,Q,le,ee,X,Z,ge,he,W,Y,J,pe,we,ve,ue,se,xe;return c=new De({props:{$$slots:{default:[xy]},$$scope:{ctx:t}}}),c.$on("click",t[3]),b=new De({props:{info:!0,$$slots:{default:[Hy]},$$scope:{ctx:t}}}),b.$on("click",t[4]),v=new De({props:{warning:!0,$$slots:{default:[Py]},$$scope:{ctx:t}}}),v.$on("click",t[5]),k=new De({props:{danger:!0,$$slots:{default:[Ny]},$$scope:{ctx:t}}}),k.$on("click",t[6]),M=new De({props:{success:!0,$$slots:{default:[Fy]},$$scope:{ctx:t}}}),M.$on("click",t[7]),A=new De({props:{$$slots:{default:[qy]},$$scope:{ctx:t}}}),A.$on("click",t[8]),I=new De({props:{info:!0,$$slots:{default:[By]},$$scope:{ctx:t}}}),I.$on("click",t[9]),N=new De({props:{$$slots:{default:[Ry]},$$scope:{ctx:t}}}),N.$on("click",t[10]),K=new De({props:{info:!0,$$slots:{default:[jy]},$$scope:{ctx:t}}}),K.$on("click",t[11]),V=new De({props:{$$slots:{default:[zy]},$$scope:{ctx:t}}}),V.$on("click",t[12]),Z=new De({props:{$$slots:{default:[Wy]},$$scope:{ctx:t}}}),Z.$on("click",t[13]),Y=new De({props:{info:!0,$$slots:{default:[Vy]},$$scope:{ctx:t}}}),Y.$on("click",t[0]),pe=new Ic({}),ve=new ze({props:{html:t[2]}}),se=new Fe({props:{props:t[1],title:"Function API - arguments",description:`A component exports a <em>showMessage</em> function which accepts either
	a config object or a list of arguments.  If it is a list of arguments - this is the API:`}}),{c(){e=p("h2"),e.textContent="MessageBox",n=d(),i=p("p"),i.textContent=`It uses the Dialog component by adding it to the body once (so it's lightweight)
	and re-using it for every call`,l=d(),r=p("br"),a=d(),u=p("h3"),u.textContent="Types",m=d(),f=p("div"),S(c.$$.fragment),g=d(),S(b.$$.fragment),h=d(),S(v.$$.fragment),w=d(),S(k.$$.fragment),_=d(),S(M.$$.fragment),O=d(),D=p("h3"),D.textContent="Title",L=d(),T=p("div"),S(A.$$.fragment),H=d(),S(I.$$.fragment),P=d(),S(N.$$.fragment),j=d(),S(K.$$.fragment),U=d(),G=p("h3"),G.textContent="Message with HTML",F=d(),z=p("div"),S(V.$$.fragment),Q=d(),le=p("h3"),le.textContent="MessageBox with callback action",ee=d(),X=p("div"),S(Z.$$.fragment),ge=d(),he=p("h3"),he.textContent="Complex Message",W=d(),S(Y.$$.fragment),J=d(),S(pe.$$.fragment),we=d(),S(ve.$$.fragment),ue=d(),S(se.$$.fragment),x(f,"class","docs-buttons-row"),x(T,"class","docs-buttons-row"),x(z,"class","docs-buttons-row"),x(X,"class","docs-buttons-row")},m(ke,ce){s(ke,e,ce),s(ke,n,ce),s(ke,i,ce),s(ke,l,ce),s(ke,r,ce),s(ke,a,ce),s(ke,u,ce),s(ke,m,ce),s(ke,f,ce),E(c,f,null),q(f,g),E(b,f,null),q(f,h),E(v,f,null),q(f,w),E(k,f,null),q(f,_),E(M,f,null),s(ke,O,ce),s(ke,D,ce),s(ke,L,ce),s(ke,T,ce),E(A,T,null),q(T,H),E(I,T,null),q(T,P),E(N,T,null),q(T,j),E(K,T,null),s(ke,U,ce),s(ke,G,ce),s(ke,F,ce),s(ke,z,ce),E(V,z,null),s(ke,Q,ce),s(ke,le,ce),s(ke,ee,ce),s(ke,X,ce),E(Z,X,null),s(ke,ge,ce),s(ke,he,ce),s(ke,W,ce),E(Y,ke,ce),s(ke,J,ce),E(pe,ke,ce),s(ke,we,ce),E(ve,ke,ce),s(ke,ue,ce),E(se,ke,ce),xe=!0},p(ke,[ce]){let be={};ce&16384&&(be.$$scope={dirty:ce,ctx:ke}),c.$set(be);let Ae={};ce&16384&&(Ae.$$scope={dirty:ce,ctx:ke}),b.$set(Ae);let ae={};ce&16384&&(ae.$$scope={dirty:ce,ctx:ke}),v.$set(ae);let $e={};ce&16384&&($e.$$scope={dirty:ce,ctx:ke}),k.$set($e);let re={};ce&16384&&(re.$$scope={dirty:ce,ctx:ke}),M.$set(re);let oe={};ce&16384&&(oe.$$scope={dirty:ce,ctx:ke}),A.$set(oe);let Oe={};ce&16384&&(Oe.$$scope={dirty:ce,ctx:ke}),I.$set(Oe);let Ke={};ce&16384&&(Ke.$$scope={dirty:ce,ctx:ke}),N.$set(Ke);let nt={};ce&16384&&(nt.$$scope={dirty:ce,ctx:ke}),K.$set(nt);let it={};ce&16384&&(it.$$scope={dirty:ce,ctx:ke}),V.$set(it);let lt={};ce&16384&&(lt.$$scope={dirty:ce,ctx:ke}),Z.$set(lt);let Ce={};ce&16384&&(Ce.$$scope={dirty:ce,ctx:ke}),Y.$set(Ce)},i(ke){xe||($(c.$$.fragment,ke),$(b.$$.fragment,ke),$(v.$$.fragment,ke),$(k.$$.fragment,ke),$(M.$$.fragment,ke),$(A.$$.fragment,ke),$(I.$$.fragment,ke),$(N.$$.fragment,ke),$(K.$$.fragment,ke),$(V.$$.fragment,ke),$(Z.$$.fragment,ke),$(Y.$$.fragment,ke),$(pe.$$.fragment,ke),$(ve.$$.fragment,ke),$(se.$$.fragment,ke),xe=!0)},o(ke){y(c.$$.fragment,ke),y(b.$$.fragment,ke),y(v.$$.fragment,ke),y(k.$$.fragment,ke),y(M.$$.fragment,ke),y(A.$$.fragment,ke),y(I.$$.fragment,ke),y(N.$$.fragment,ke),y(K.$$.fragment,ke),y(V.$$.fragment,ke),y(Z.$$.fragment,ke),y(Y.$$.fragment,ke),y(pe.$$.fragment,ke),y(ve.$$.fragment,ke),y(se.$$.fragment,ke),xe=!1},d(ke){ke&&(o(e),o(n),o(i),o(l),o(r),o(a),o(u),o(m),o(f),o(O),o(D),o(L),o(T),o(U),o(G),o(F),o(z),o(Q),o(le),o(ee),o(X),o(ge),o(he),o(W),o(J),o(we),o(ue)),C(c),C(b),C(v),C(k),C(M),C(A),C(I),C(N),C(K),C(V),C(Z),C(Y,ke),C(pe,ke),C(ve,ke),C(se,ke)}}}var k0="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec euismod turpis. Aliquam aliquam varius dignissim. Sed sit amet leo tempor, dignissim ex euismod, volutpat ante. Etiam sed lacus pharetra, commodo lectus ac, bibendum purus. In vel aliquam arcu, nec aliquam tortor. Cras feugiat porta eros. Nulla eget quam mattis, laoreet elit et, volutpat lacus. Phasellus eget risus in lacus facilisis porta vitae vel nibh. Nam condimentum est risus, sed volutpat metus sodales non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus ac euismod arcu. Proin varius, ligula vel ullamcorper rutrum, tortor est imperdiet est, et accumsan nunc mi vitae risus.";function Yy(t){alert(`You clicked ${t}`)}function Gy(t){function e(w){Ln({message:"Are you sure you want to delete this thing?",type:Bi.DANGER,title:"Confirm",buttons:[{label:"Yes",value:"yes",type:"danger"},{label:"No"}],target:w.target,icon:"help",cb:k=>{console.log(`You clicked ${k}`)}})}return[e,[{name:"1. message",type:"string",description:"A message to show."},{name:"2. type",type:"string",default:"info",description:"A message type (for icon and button styling)."},{name:"3. title",type:"string",default:"",description:"A title of the message box."},{name:"4. label",type:"string",default:"OK",description:"A label for the button."},{name:"5. cb",type:"function",description:"A callback function that will be called on close. A value of the clicked button will be passed to the function."}],`
<MessageBox />

<script>
	import { MessageBox, MessageType, showMessage } from '@perfectthings/ui';

    showMessage('Some info with the OK button');

    showMessage('Some warning with the OK button', MessageType.WARNING);
    showMessage('Some error with the OK button and title', MessageType.ERROR, 'Error', 'Close');

    showMessage({
        message: 'Are you sure you want to delete this item?',
        title: 'Confirm',
        type: MessageType.DANGER,
		icon: 'help',
        buttons: [
            { label: 'OK', value: 'ok', type: 'danger' },
            { label: 'Cancel' }
        ],
		target: buttonElement,  // to be focused on close
        cb: (res) => {}
    });

&lt;/script>
`,()=>Ln("This is the message"),()=>Ln("This is the message",Bi.INFO),()=>Ln("This is the message",Bi.WARNING),()=>Ln("This is the message",Bi.DANGER),()=>Ln("This is the message",Bi.SUCCESS),()=>Ln("Default message",null,"Default title"),()=>Ln("Info messagebox",Bi.INFO,"Info title"),()=>Ln(k0,null,"Info title"),()=>Ln(k0,Bi.INFO,"Info title"),()=>Ln('Message with <i>html</i><br><a href="#MessageBox" target="_blank">Link</a>',null,"Info title","Close"),()=>Ln("Info messagebox",null,"Info title","Close",Yy)]}var $h=class extends fe{constructor(e){super(),de(this,e,Gy,Uy,me,{})}},wh=$h;function Ky(t){let e;return{c(){e=ne("Some tooltip text")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function Xy(t){let e,n,i,l,r;return{c(){e=p("h1"),e.textContent="Some Title",n=d(),i=p("p"),i.innerHTML='Some <b>html</b> tooltip content with a <a href="#Tooltip">link</a>',l=d(),r=p("p"),r.textContent="lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit."},m(a,u){s(a,e,u),s(a,n,u),s(a,i,u),s(a,l,u),s(a,r,u)},p:Le,d(a){a&&(o(e),o(n),o(i),o(l),o(r))}}}function Zy(t){let e;return{c(){e=ne("Some tooltip text")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function Jy(t){let e;return{c(){e=ne("Some tooltip text")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function Qy(t){let e;return{c(){e=ne("Some tooltip text")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function ek(t){let e;return{c(){e=ne("Some tooltip text")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function tk(t){let e;return{c(){e=ne("Some tooltip text")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function nk(t){let e;return{c(){e=ne("Smaller offset")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function ik(t){let e;return{c(){e=ne("Bigger offset")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function ok(t){let e;return{c(){e=ne("Showing with a delay")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function sk(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O,D,L,T,A,H,I,P,N,j,K,U,G,F,z,V,Q,le,ee,X,Z,ge,he,W,Y,J,pe,we,ve,ue,se,xe,ke,ce,be,Ae,ae,$e;return u=new Vn({props:{target:"box1",$$slots:{default:[Ky]},$$scope:{ctx:t}}}),g=new Vn({props:{target:"box2",class:"tooltip-html",$$slots:{default:[Xy]},$$scope:{ctx:t}}}),_=new Vn({props:{info:!0,target:"box-info",$$slots:{default:[Zy]},$$scope:{ctx:t}}}),L=new Vn({props:{success:!0,target:"box-success",$$slots:{default:[Jy]},$$scope:{ctx:t}}}),I=new Vn({props:{warning:!0,target:"box-warning",$$slots:{default:[Qy]},$$scope:{ctx:t}}}),K=new Vn({props:{danger:!0,target:"box-error",$$slots:{default:[ek]},$$scope:{ctx:t}}}),Q=new Vn({props:{position:"bottom",target:"box-below",$$slots:{default:[tk]},$$scope:{ctx:t}}}),he=new Vn({props:{target:"box-offset",offset:"-20",$$slots:{default:[nk]},$$scope:{ctx:t}}}),pe=new Vn({props:{target:"box-offset2",offset:"20",$$slots:{default:[ik]},$$scope:{ctx:t}}}),ke=new Vn({props:{target:"box5",delay:"700",$$slots:{default:[ok]},$$scope:{ctx:t}}}),be=new ze({props:{html:t[1]}}),ae=new Fe({props:{props:t[0]}}),{c(){e=p("h2"),e.textContent="Tooltip",n=d(),i=p("h3"),i.textContent="Normal",l=d(),r=p("div"),r.textContent="box with a tooltip",a=d(),S(u.$$.fragment),m=d(),f=p("div"),f.textContent="box with a tooltip",c=d(),S(g.$$.fragment),b=d(),h=p("h3"),h.textContent="Colour variants (tooltip type)",v=d(),w=p("div"),w.textContent="info",k=d(),S(_.$$.fragment),M=d(),O=p("div"),O.textContent="success",D=d(),S(L.$$.fragment),T=d(),A=p("div"),A.textContent="warning",H=d(),S(I.$$.fragment),P=d(),N=p("div"),N.textContent="danger",j=d(),S(K.$$.fragment),U=d(),G=p("h3"),G.textContent="Show below target",F=d(),z=p("div"),z.textContent="box with a tooltip",V=d(),S(Q.$$.fragment),le=d(),ee=p("h3"),ee.textContent="Custom offset",X=d(),Z=p("div"),Z.textContent="box with a tooltip",ge=d(),S(he.$$.fragment),W=d(),Y=p("div"),Y.textContent="box with a tooltip",J=d(),S(pe.$$.fragment),we=d(),ve=p("h3"),ve.textContent="Show delay",ue=d(),se=p("div"),se.textContent="box with a tooltip",xe=d(),S(ke.$$.fragment),ce=d(),S(be.$$.fragment),Ae=d(),S(ae.$$.fragment),x(r,"class","tooltip-box"),x(r,"tabindex","0"),x(r,"id","box1"),x(f,"class","tooltip-box"),x(f,"tabindex","0"),x(f,"id","box2"),x(w,"class","tooltip-box"),x(w,"tabindex","0"),x(w,"id","box-info"),x(O,"class","tooltip-box"),x(O,"tabindex","0"),x(O,"id","box-success"),x(A,"class","tooltip-box"),x(A,"tabindex","0"),x(A,"id","box-warning"),x(N,"class","tooltip-box"),x(N,"tabindex","0"),x(N,"id","box-error"),x(z,"class","tooltip-box"),x(z,"tabindex","0"),x(z,"id","box-below"),x(Z,"class","tooltip-box"),x(Z,"tabindex","0"),x(Z,"id","box-offset"),x(Y,"class","tooltip-box"),x(Y,"tabindex","0"),x(Y,"id","box-offset2"),x(se,"class","tooltip-box"),x(se,"tabindex","0"),x(se,"id","box5")},m(re,oe){s(re,e,oe),s(re,n,oe),s(re,i,oe),s(re,l,oe),s(re,r,oe),s(re,a,oe),E(u,re,oe),s(re,m,oe),s(re,f,oe),s(re,c,oe),E(g,re,oe),s(re,b,oe),s(re,h,oe),s(re,v,oe),s(re,w,oe),s(re,k,oe),E(_,re,oe),s(re,M,oe),s(re,O,oe),s(re,D,oe),E(L,re,oe),s(re,T,oe),s(re,A,oe),s(re,H,oe),E(I,re,oe),s(re,P,oe),s(re,N,oe),s(re,j,oe),E(K,re,oe),s(re,U,oe),s(re,G,oe),s(re,F,oe),s(re,z,oe),s(re,V,oe),E(Q,re,oe),s(re,le,oe),s(re,ee,oe),s(re,X,oe),s(re,Z,oe),s(re,ge,oe),E(he,re,oe),s(re,W,oe),s(re,Y,oe),s(re,J,oe),E(pe,re,oe),s(re,we,oe),s(re,ve,oe),s(re,ue,oe),s(re,se,oe),s(re,xe,oe),E(ke,re,oe),s(re,ce,oe),E(be,re,oe),s(re,Ae,oe),E(ae,re,oe),$e=!0},p(re,[oe]){let Oe={};oe&4&&(Oe.$$scope={dirty:oe,ctx:re}),u.$set(Oe);let Ke={};oe&4&&(Ke.$$scope={dirty:oe,ctx:re}),g.$set(Ke);let nt={};oe&4&&(nt.$$scope={dirty:oe,ctx:re}),_.$set(nt);let it={};oe&4&&(it.$$scope={dirty:oe,ctx:re}),L.$set(it);let lt={};oe&4&&(lt.$$scope={dirty:oe,ctx:re}),I.$set(lt);let Ce={};oe&4&&(Ce.$$scope={dirty:oe,ctx:re}),K.$set(Ce);let Ne={};oe&4&&(Ne.$$scope={dirty:oe,ctx:re}),Q.$set(Ne);let dt={};oe&4&&(dt.$$scope={dirty:oe,ctx:re}),he.$set(dt);let ht={};oe&4&&(ht.$$scope={dirty:oe,ctx:re}),pe.$set(ht);let at={};oe&4&&(at.$$scope={dirty:oe,ctx:re}),ke.$set(at)},i(re){$e||($(u.$$.fragment,re),$(g.$$.fragment,re),$(_.$$.fragment,re),$(L.$$.fragment,re),$(I.$$.fragment,re),$(K.$$.fragment,re),$(Q.$$.fragment,re),$(he.$$.fragment,re),$(pe.$$.fragment,re),$(ke.$$.fragment,re),$(be.$$.fragment,re),$(ae.$$.fragment,re),$e=!0)},o(re){y(u.$$.fragment,re),y(g.$$.fragment,re),y(_.$$.fragment,re),y(L.$$.fragment,re),y(I.$$.fragment,re),y(K.$$.fragment,re),y(Q.$$.fragment,re),y(he.$$.fragment,re),y(pe.$$.fragment,re),y(ke.$$.fragment,re),y(be.$$.fragment,re),y(ae.$$.fragment,re),$e=!1},d(re){re&&(o(e),o(n),o(i),o(l),o(r),o(a),o(m),o(f),o(c),o(b),o(h),o(v),o(w),o(k),o(M),o(O),o(D),o(T),o(A),o(H),o(P),o(N),o(j),o(U),o(G),o(F),o(z),o(V),o(le),o(ee),o(X),o(Z),o(ge),o(W),o(Y),o(J),o(we),o(ve),o(ue),o(se),o(xe),o(ce),o(Ae)),C(u,re),C(g,re),C(_,re),C(L,re),C(I,re),C(K,re),C(Q,re),C(he,re),C(pe,re),C(ke,re),C(be,re),C(ae,re)}}}function lk(t){return[[{name:"class",type:"string",description:"Additional css class name to be added to the component."},{name:"danger",description:"Tooltip type: danger"},{name:"delay",type:"number",default:"0",description:"Delay after which the tooltip should appear (in milliseconds)."},{name:"error",description:"Tooltip type: error"},{name:"info",description:"Tooltip type: info"},{name:"offset",type:"number",default:"2",description:"Customize tooltip offset. Use negative number for smaller offset or positive for bigger"},{name:"position",type:["top","bottom"],default:"top",description:"Prefer the position of the tooltip to be above (top) or below (bottom) the target element."},{name:"success",description:"Tooltip type: success"},{name:"target",required:!0,type:"string",description:"ID of the target element."},{name:"warning",description:"Tooltip type: warning"},{name:"bind:element",type:"element",description:"Exposes the HTML element of the component."}],`
<div id="box1"></div>
<Tooltip position="bottom" target="box1" offset="5">Some tooltip text</Tooltip>
`]}var yh=class extends fe{constructor(e){super(),de(this,e,lk,sk,me,{})}},kh=yh;function rk(t){let e;return{c(){e=ne("Large dialog")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function ak(t){let e;return{c(){e=ne("No buttons")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function uk(t){let e;return{c(){e=ne("Confirmation")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function fk(t){let e;return{c(){e=ne("With title and buttons")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function mk(t){let e;return{c(){e=ne("Modal")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function dk(t){let e,n,i,l,r,a,u,m,f,c,g,b;return{c(){e=ne("dialog contents"),n=p("br"),i=ne(`
	Hello world!

	`),l=p("p"),l.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis porttitor justo, eget ornare massa commodo non. Pellentesque semper dictum mauris, id pretium mi mattis in. Proin sodales neque id euismod interdum. Fusce vel blandit orci. Mauris nec ligula aliquam, vestibulum erat nec, ullamcorper nunc. Cras vel lacinia sem. Aenean non tincidunt nisl, vitae consectetur est. Integer id neque tempor, facilisis felis egestas, aliquam turpis. Mauris id consectetur purus. Praesent vehicula, mauris eu hendrerit vehicula, velit tortor fermentum enim, eget malesuada quam eros at quam. Integer mattis egestas tempus.",r=d(),a=p("p"),a.textContent="Aliquam et purus enim. Suspendisse potenti. Suspendisse tincidunt ullamcorper nulla non gravida. Morbi at tellus dui. Sed orci ligula, facilisis sit amet odio eu, commodo ultricies lorem. Nullam sagittis sapien metus, eu posuere sem iaculis sed. Duis at nibh feugiat, placerat lectus nec, consectetur elit. In sollicitudin est in ultricies gravida. Ut malesuada ex lacinia, posuere augue eget, imperdiet erat. Phasellus ac dui sit amet ligula condimentum venenatis vitae ornare augue. Vivamus pellentesque felis in orci finibus, a accumsan libero consectetur.",u=d(),m=p("p"),m.textContent="Nulla facilisi. Sed in neque hendrerit, convallis neque a, semper sem. Maecenas suscipit ex quis risus mollis, at tincidunt mi faucibus. Pellentesque in faucibus metus. Etiam sollicitudin accumsan arcu interdum sollicitudin. Suspendisse iaculis congue justo id posuere. Ut sed nisi molestie, egestas nulla at, feugiat neque. Nullam vitae libero eu sem ornare tempus vel id tortor. Ut varius ullamcorper nisl et dignissim. Vestibulum sodales massa id odio aliquet ornare. Nunc mollis quis sapien fringilla ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus eget posuere orci.",f=d(),c=p("p"),c.textContent="Suspendisse sollicitudin sed ligula nec tempus. Phasellus quis luctus sapien. Nullam nec sapien fringilla, sollicitudin dui sit amet, molestie arcu. Pellentesque id elit et sem pharetra gravida. Donec sed metus ut dui venenatis euismod varius ut libero. Duis ornare odio finibus eros rhoncus ullamcorper. Maecenas auctor lectus volutpat sem pretium volutpat. Mauris blandit quam diam, nec consequat arcu dignissim ut. Donec ac lacus pretium, sollicitudin nisi in, ullamcorper enim. Ut convallis nec eros nec scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris non odio a ipsum varius pretium non ut ex. Quisque euismod luctus risus, sit amet venenatis justo vehicula non. Aliquam erat volutpat. Phasellus eu leo ut odio cursus cursus. Pellentesque porta odio id arcu mattis, vitae aliquam risus efficitur.",g=d(),b=p("p"),b.textContent="Curabitur nec cursus purus. Nullam scelerisque et odio ut pretium. Donec gravida auctor enim, in venenatis mi viverra sit amet. Integer tincidunt lectus quis sagittis pellentesque. Morbi nec ipsum erat. Donec finibus sit amet lorem et dignissim. Praesent pretium consequat enim, quis rutrum nisl imperdiet ut."},m(h,v){s(h,e,v),s(h,n,v),s(h,i,v),s(h,l,v),s(h,r,v),s(h,a,v),s(h,u,v),s(h,m,v),s(h,f,v),s(h,c,v),s(h,g,v),s(h,b,v)},p:Le,d(h){h&&(o(e),o(n),o(i),o(l),o(r),o(a),o(u),o(m),o(f),o(c),o(g),o(b))}}}function ck(t){let e;return{c(){e=ne("Close")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function pk(t){let e,n,i;return n=new De({props:{$$slots:{default:[ck]},$$scope:{ctx:t}}}),n.$on("click",t[8]),{c(){e=p("div"),S(n.$$.fragment),x(e,"slot","footer")},m(l,r){s(l,e,r),E(n,e,null),i=!0},p(l,r){let a={};r&2097152&&(a.$$scope={dirty:r,ctx:l}),n.$set(a)},i(l){i||($(n.$$.fragment,l),i=!0)},o(l){y(n.$$.fragment,l),i=!1},d(l){l&&o(e),C(n)}}}function hk(t){let e;return{c(){e=ne("Hello!")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function gk(t){let e;return{c(){e=ne("Are you sure?")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function bk(t){let e;return{c(){e=ne("Yes")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function _k(t){let e;return{c(){e=ne("No")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function vk(t){let e,n,i,l,r;return n=new De({props:{$$slots:{default:[bk]},$$scope:{ctx:t}}}),n.$on("click",t[11]),l=new De({props:{$$slots:{default:[_k]},$$scope:{ctx:t}}}),l.$on("click",t[12]),{c(){e=p("div"),S(n.$$.fragment),i=d(),S(l.$$.fragment),x(e,"slot","footer")},m(a,u){s(a,e,u),E(n,e,null),q(e,i),E(l,e,null),r=!0},p(a,u){let m={};u&2097152&&(m.$$scope={dirty:u,ctx:a}),n.$set(m);let f={};u&2097152&&(f.$$scope={dirty:u,ctx:a}),l.$set(f)},i(a){r||($(n.$$.fragment,a),$(l.$$.fragment,a),r=!0)},o(a){y(n.$$.fragment,a),y(l.$$.fragment,a),r=!1},d(a){a&&o(e),C(n),C(l)}}}function $k(t){let e;return{c(){e=ne("Form goes here...")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function wk(t){let e;return{c(){e=ne("Yes")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function yk(t){let e;return{c(){e=ne("No")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function kk(t){let e,n,i,l,r,a,u,m,f;return n=new De({props:{success:!0,$$slots:{default:[wk]},$$scope:{ctx:t}}}),n.$on("click",t[14]),l=new De({props:{$$slots:{default:[yk]},$$scope:{ctx:t}}}),l.$on("click",t[15]),m=new De({props:{danger:!0,icon:"trash"}}),m.$on("click",t[16]),{c(){e=p("div"),S(n.$$.fragment),i=d(),S(l.$$.fragment),r=d(),a=p("div"),u=d(),S(m.$$.fragment),x(a,"class","flex-spacer"),x(e,"slot","footer")},m(c,g){s(c,e,g),E(n,e,null),q(e,i),E(l,e,null),q(e,r),q(e,a),q(e,u),E(m,e,null),f=!0},p(c,g){let b={};g&2097152&&(b.$$scope={dirty:g,ctx:c}),n.$set(b);let h={};g&2097152&&(h.$$scope={dirty:g,ctx:c}),l.$set(h)},i(c){f||($(n.$$.fragment,c),$(l.$$.fragment,c),$(m.$$.fragment,c),f=!0)},o(c){y(n.$$.fragment,c),y(l.$$.fragment,c),y(m.$$.fragment,c),f=!1},d(c){c&&o(e),C(n),C(l),C(m)}}}function Tk(t){let e;return{c(){e=p("p"),e.innerHTML=`This means that it will not close when clicking outside of it.<br/>
		This is useful for when an intentional action is required from the user.`,Pt(e,"line-height","2"),Pt(e,"margin","0")},m(n,i){s(n,e,i)},p:Le,d(n){n&&o(e)}}}function Mk(t){let e;return{c(){e=ne("Confirm")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function Ek(t){let e;return{c(){e=ne("Cancel")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function Ck(t){let e,n,i,l,r;return n=new De({props:{success:!0,$$slots:{default:[Mk]},$$scope:{ctx:t}}}),n.$on("click",t[18]),l=new De({props:{text:!0,$$slots:{default:[Ek]},$$scope:{ctx:t}}}),l.$on("click",t[19]),{c(){e=p("div"),S(n.$$.fragment),i=d(),S(l.$$.fragment),x(e,"slot","footer")},m(a,u){s(a,e,u),E(n,e,null),q(e,i),E(l,e,null),r=!0},p(a,u){let m={};u&2097152&&(m.$$scope={dirty:u,ctx:a}),n.$set(m);let f={};u&2097152&&(f.$$scope={dirty:u,ctx:a}),l.$set(f)},i(a){r||($(n.$$.fragment,a),$(l.$$.fragment,a),r=!0)},o(a){y(n.$$.fragment,a),y(l.$$.fragment,a),r=!1},d(a){a&&o(e),C(n),C(l)}}}function Sk(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O,D,L,T,A,H,I,P,N,j,K,U,G,F,z,V,Q;c=new De({props:{$$slots:{default:[rk]},$$scope:{ctx:t}}}),c.$on("click",function(){_t(t[0].open)&&t[0].open.apply(this,arguments)}),b=new De({props:{$$slots:{default:[ak]},$$scope:{ctx:t}}}),b.$on("click",function(){_t(t[1].open)&&t[1].open.apply(this,arguments)}),v=new De({props:{$$slots:{default:[uk]},$$scope:{ctx:t}}}),v.$on("click",function(){_t(t[2].open)&&t[2].open.apply(this,arguments)}),k=new De({props:{$$slots:{default:[fk]},$$scope:{ctx:t}}}),k.$on("click",function(){_t(t[3].open)&&t[3].open.apply(this,arguments)}),M=new De({props:{$$slots:{default:[mk]},$$scope:{ctx:t}}}),M.$on("click",function(){_t(t[4].open)&&t[4].open.apply(this,arguments)});let le={title:"Hello",$$slots:{footer:[pk],default:[dk]},$$scope:{ctx:t}};D=new vi({props:le}),t[9](D);let ee={title:"Hello",$$slots:{default:[hk]},$$scope:{ctx:t}};T=new vi({props:ee}),t[10](T);let X={$$slots:{footer:[vk],default:[gk]},$$scope:{ctx:t}};H=new vi({props:X}),t[13](H);let Z={title:"Edit something",$$slots:{footer:[kk],default:[$k]},$$scope:{ctx:t}};P=new vi({props:Z}),t[17](P);let ge={title:"Modal dialog",modal:!0,$$slots:{footer:[Ck],default:[Tk]},$$scope:{ctx:t}};return j=new vi({props:ge}),t[20](j),U=new ze({props:{html:t[7]}}),F=new Fe({props:{props:t[5]}}),V=new Fe({props:{props:t[6],title:"Instance API",description:"The component exposes <em>this</em> property, to which a variable can be bound, creating an instance of the component, with the following API"}}),{c(){e=p("h2"),e.textContent="Dialog",n=d(),i=p("ul"),i.innerHTML=`<li>simple, small, no dependencies
	</li><li>accessible (full keyboard support, focus trap)
	</li><li>configurable</li>`,l=d(),r=p("hr"),a=d(),u=p("h3"),u.textContent="Typical use-cases",m=d(),f=p("div"),S(c.$$.fragment),g=d(),S(b.$$.fragment),h=d(),S(v.$$.fragment),w=d(),S(k.$$.fragment),_=d(),S(M.$$.fragment),O=d(),S(D.$$.fragment),L=d(),S(T.$$.fragment),A=d(),S(H.$$.fragment),I=d(),S(P.$$.fragment),N=d(),S(j.$$.fragment),K=d(),S(U.$$.fragment),G=d(),S(F.$$.fragment),z=d(),S(V.$$.fragment),x(f,"class","docs-buttons-row")},m(he,W){s(he,e,W),s(he,n,W),s(he,i,W),s(he,l,W),s(he,r,W),s(he,a,W),s(he,u,W),s(he,m,W),s(he,f,W),E(c,f,null),q(f,g),E(b,f,null),q(f,h),E(v,f,null),q(f,w),E(k,f,null),q(f,_),E(M,f,null),s(he,O,W),E(D,he,W),s(he,L,W),E(T,he,W),s(he,A,W),E(H,he,W),s(he,I,W),E(P,he,W),s(he,N,W),E(j,he,W),s(he,K,W),E(U,he,W),s(he,G,W),E(F,he,W),s(he,z,W),E(V,he,W),Q=!0},p(he,[W]){t=he;let Y={};W&2097152&&(Y.$$scope={dirty:W,ctx:t}),c.$set(Y);let J={};W&2097152&&(J.$$scope={dirty:W,ctx:t}),b.$set(J);let pe={};W&2097152&&(pe.$$scope={dirty:W,ctx:t}),v.$set(pe);let we={};W&2097152&&(we.$$scope={dirty:W,ctx:t}),k.$set(we);let ve={};W&2097152&&(ve.$$scope={dirty:W,ctx:t}),M.$set(ve);let ue={};W&2097153&&(ue.$$scope={dirty:W,ctx:t}),D.$set(ue);let se={};W&2097152&&(se.$$scope={dirty:W,ctx:t}),T.$set(se);let xe={};W&2097156&&(xe.$$scope={dirty:W,ctx:t}),H.$set(xe);let ke={};W&2097160&&(ke.$$scope={dirty:W,ctx:t}),P.$set(ke);let ce={};W&2097168&&(ce.$$scope={dirty:W,ctx:t}),j.$set(ce)},i(he){Q||($(c.$$.fragment,he),$(b.$$.fragment,he),$(v.$$.fragment,he),$(k.$$.fragment,he),$(M.$$.fragment,he),$(D.$$.fragment,he),$(T.$$.fragment,he),$(H.$$.fragment,he),$(P.$$.fragment,he),$(j.$$.fragment,he),$(U.$$.fragment,he),$(F.$$.fragment,he),$(V.$$.fragment,he),Q=!0)},o(he){y(c.$$.fragment,he),y(b.$$.fragment,he),y(v.$$.fragment,he),y(k.$$.fragment,he),y(M.$$.fragment,he),y(D.$$.fragment,he),y(T.$$.fragment,he),y(H.$$.fragment,he),y(P.$$.fragment,he),y(j.$$.fragment,he),y(U.$$.fragment,he),y(F.$$.fragment,he),y(V.$$.fragment,he),Q=!1},d(he){he&&(o(e),o(n),o(i),o(l),o(r),o(a),o(u),o(m),o(f),o(O),o(L),o(A),o(I),o(N),o(K),o(G),o(z)),C(c),C(b),C(v),C(k),C(M),t[9](null),C(D,he),t[10](null),C(T,he),t[13](null),C(H,he),t[17](null),C(P,he),t[20](null),C(j,he),C(U,he),C(F,he),C(V,he)}}}function Lk(t,e,n){let i=[{name:"class",type:"string",description:"Additional css class name to be added to the component container."},{name:"opened",type:["true","false"],default:"false",description:"Set dialog's open state."},{name:"skipFirstFocus",type:["true","false"],default:"false",description:"If <i>true</i> - the dialog will not set focus to the first focusable element in the dialog.<br>This is useful if another element in the dialog should be focused first."},{name:"title",type:"string",description:"Set title for the dialog."},{name:"modal",description:"If present - the dialog will not close when the user clicks outside of it or presses Escape."},{name:"bind:element",type:"element",description:"Exposes the HTML element of the component."},{name:"bind:this",type:"object",description:"Exposes the component instance."},{name:"on:close",type:"function",description:"Triggered after the dialog is closed."},{name:"on:open",type:"function",description:"Triggered after the dialog is opened."}],l=[{name:"close",type:"function",description:"Closes the dialog."},{name:"open",type:"function",description:"Opens the dialog."}],r=`
<Dialog bind:this="{dialog1}">
    Are you sure?
    <div slot="footer">
        <Button on:click="{() => dialog1.close()}">Close</Button>
    </div>
</Dialog>

<Button on:click="{() => dialog1.open()}">Show dialog</Button>

<script>
    let dialog1;
&lt;/script>
`,a,u,m,f,c,g=()=>a.close();function b(H){_e[H?"unshift":"push"](()=>{a=H,n(0,a)})}function h(H){_e[H?"unshift":"push"](()=>{u=H,n(1,u)})}let v=()=>m.close(),w=()=>m.close();function k(H){_e[H?"unshift":"push"](()=>{m=H,n(2,m)})}let _=()=>f.close(),M=()=>f.close(),O=()=>f.close();function D(H){_e[H?"unshift":"push"](()=>{f=H,n(3,f)})}let L=()=>c.close(),T=()=>c.close();function A(H){_e[H?"unshift":"push"](()=>{c=H,n(4,c)})}return[a,u,m,f,c,i,l,r,g,b,h,v,w,k,_,M,O,D,L,T,A]}var Th=class extends fe{constructor(e){super(),de(this,e,Lk,Sk,me,{})}},Mh=Th;function Dk(t){let e;return{c(){e=ne("Toggle drawer")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function Ak(t){let e;return{c(){e=ne("Close Drawer")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function Ik(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O;return m=new De({props:{$$slots:{default:[Ak]},$$scope:{ctx:t}}}),m.$on("click",t[5]),{c(){e=ne("drawer contents"),n=p("br"),i=ne(`
	Hello world!`),l=p("br"),r=d(),a=p("br"),u=d(),S(m.$$.fragment),f=d(),c=p("p"),c.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis porttitor justo, eget ornare massa commodo non. Pellentesque semper dictum mauris, id pretium mi mattis in. Proin sodales neque id euismod interdum. Fusce vel blandit orci. Mauris nec ligula aliquam, vestibulum erat nec, ullamcorper nunc. Cras vel lacinia sem. Aenean non tincidunt nisl, vitae consectetur est. Integer id neque tempor, facilisis felis egestas, aliquam turpis. Mauris id consectetur purus. Praesent vehicula, mauris eu hendrerit vehicula, velit tortor fermentum enim, eget malesuada quam eros at quam. Integer mattis egestas tempus.",g=d(),b=p("p"),b.textContent="Aliquam et purus enim. Suspendisse potenti. Suspendisse tincidunt ullamcorper nulla non gravida. Morbi at tellus dui. Sed orci ligula, facilisis sit amet odio eu, commodo ultricies lorem. Nullam sagittis sapien metus, eu posuere sem iaculis sed. Duis at nibh feugiat, placerat lectus nec, consectetur elit. In sollicitudin est in ultricies gravida. Ut malesuada ex lacinia, posuere augue eget, imperdiet erat. Phasellus ac dui sit amet ligula condimentum venenatis vitae ornare augue. Vivamus pellentesque felis in orci finibus, a accumsan libero consectetur.",h=d(),v=p("p"),v.textContent="Nulla facilisi. Sed in neque hendrerit, convallis neque a, semper sem. Maecenas suscipit ex quis risus mollis, at tincidunt mi faucibus. Pellentesque in faucibus metus. Etiam sollicitudin accumsan arcu interdum sollicitudin. Suspendisse iaculis congue justo id posuere. Ut sed nisi molestie, egestas nulla at, feugiat neque. Nullam vitae libero eu sem ornare tempus vel id tortor. Ut varius ullamcorper nisl et dignissim. Vestibulum sodales massa id odio aliquet ornare. Nunc mollis quis sapien fringilla ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus eget posuere orci.",w=d(),k=p("p"),k.textContent="Suspendisse sollicitudin sed ligula nec tempus. Phasellus quis luctus sapien. Nullam nec sapien fringilla, sollicitudin dui sit amet, molestie arcu. Pellentesque id elit et sem pharetra gravida. Donec sed metus ut dui venenatis euismod varius ut libero. Duis ornare odio finibus eros rhoncus ullamcorper. Maecenas auctor lectus volutpat sem pretium volutpat. Mauris blandit quam diam, nec consequat arcu dignissim ut. Donec ac lacus pretium, sollicitudin nisi in, ullamcorper enim. Ut convallis nec eros nec scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris non odio a ipsum varius pretium non ut ex. Quisque euismod luctus risus, sit amet venenatis justo vehicula non. Aliquam erat volutpat. Phasellus eu leo ut odio cursus cursus. Pellentesque porta odio id arcu mattis, vitae aliquam risus efficitur.",_=d(),M=p("p"),M.textContent="Curabitur nec cursus purus. Nullam scelerisque et odio ut pretium. Donec gravida auctor enim, in venenatis mi viverra sit amet. Integer tincidunt lectus quis sagittis pellentesque. Morbi nec ipsum erat. Donec finibus sit amet lorem et dignissim. Praesent pretium consequat enim, quis rutrum nisl imperdiet ut."},m(D,L){s(D,e,L),s(D,n,L),s(D,i,L),s(D,l,L),s(D,r,L),s(D,a,L),s(D,u,L),E(m,D,L),s(D,f,L),s(D,c,L),s(D,g,L),s(D,b,L),s(D,h,L),s(D,v,L),s(D,w,L),s(D,k,L),s(D,_,L),s(D,M,L),O=!0},p(D,L){let T={};L&128&&(T.$$scope={dirty:L,ctx:D}),m.$set(T)},i(D){O||($(m.$$.fragment,D),O=!0)},o(D){y(m.$$.fragment,D),O=!1},d(D){D&&(o(e),o(n),o(i),o(l),o(r),o(a),o(u),o(f),o(c),o(g),o(b),o(h),o(v),o(w),o(k),o(_),o(M)),C(m,D)}}}function Ok(t){let e,n,i,l,r,a,u,m,f,c,g,b;i=new De({props:{$$slots:{default:[Dk]},$$scope:{ctx:t}}}),i.$on("click",t[4]);let h={title:"Drawer",$$slots:{default:[Ik]},$$scope:{ctx:t}};return r=new Bd({props:h}),t[6](r),u=new ze({props:{html:t[3]}}),f=new Fe({props:{props:t[1]}}),g=new Fe({props:{props:t[2],title:"Instance API",description:"The component exposes <em>this</em> property, to which a variable can be bound, creating an instance of the component, with the following API"}}),{c(){e=p("h2"),e.textContent="Drawer",n=d(),S(i.$$.fragment),l=d(),S(r.$$.fragment),a=d(),S(u.$$.fragment),m=d(),S(f.$$.fragment),c=d(),S(g.$$.fragment)},m(v,w){s(v,e,w),s(v,n,w),E(i,v,w),s(v,l,w),E(r,v,w),s(v,a,w),E(u,v,w),s(v,m,w),E(f,v,w),s(v,c,w),E(g,v,w),b=!0},p(v,[w]){let k={};w&128&&(k.$$scope={dirty:w,ctx:v}),i.$set(k);let _={};w&129&&(_.$$scope={dirty:w,ctx:v}),r.$set(_)},i(v){b||($(i.$$.fragment,v),$(r.$$.fragment,v),$(u.$$.fragment,v),$(f.$$.fragment,v),$(g.$$.fragment,v),b=!0)},o(v){y(i.$$.fragment,v),y(r.$$.fragment,v),y(u.$$.fragment,v),y(f.$$.fragment,v),y(g.$$.fragment,v),b=!1},d(v){v&&(o(e),o(n),o(l),o(a),o(m),o(c)),C(i,v),t[6](null),C(r,v),C(u,v),C(f,v),C(g,v)}}}function xk(t,e,n){let i=[{name:"class",type:"string",description:"Additional css class name to be added to the component container."},{name:"title",type:"string",description:"Set title for the drawer."},{name:"bind:element",type:"element",description:"Exposes the HTML element of the component."},{name:"bind:this",type:"object",description:"Exposes the component instance."},{name:"on:close",type:"function",description:"Triggered after the drawer is closed."},{name:"on:open",type:"function",description:"Triggered after the drawer is opened."}],l=[{name:"close",type:"function",description:"Closes the drawer."},{name:"open",type:"function",description:"Opens the drawer."},{name:"toggle",type:"function",description:"Toggles the open state (opens when closed, closes when open)."}],r=`
<Drawer bind:this="{drawer1}" title="Drawer">
    Hello world!
    <Button on:click="{() => drawer1.close()}">Close</Button>
</Drawer>

<Button on:click="{() => drawer1.toggle()}">Show dialog</Button>

<script>
    let drawer1;
&lt;/script>
`,a,u=()=>a.toggle(),m=()=>a.close();function f(c){_e[c?"unshift":"push"](()=>{a=c,n(0,a)})}return[a,i,l,r,u,m,f]}var Eh=class extends fe{constructor(e){super(),de(this,e,xk,Ok,me,{})}},Ch=Eh;function Hk(t){let e;return{c(){e=p("p"),e.textContent="This is panel contents"},m(n,i){s(n,e,i)},p:Le,d(n){n&&o(e)}}}function Pk(t){let e;return{c(){e=p("p"),e.textContent="This is panel contents"},m(n,i){s(n,e,i)},p:Le,d(n){n&&o(e)}}}function Nk(t){let e;return{c(){e=p("p"),e.textContent="This is panel contents"},m(n,i){s(n,e,i)},p:Le,d(n){n&&o(e)}}}function Fk(t){let e;return{c(){e=p("p"),e.textContent="This is panel contents"},m(n,i){s(n,e,i)},p:Le,d(n){n&&o(e)}}}function qk(t){let e;return{c(){e=p("p"),e.textContent="This is panel contents"},m(n,i){s(n,e,i)},p:Le,d(n){n&&o(e)}}}function Bk(t){let e;return{c(){e=p("p"),e.textContent="This is panel contents"},m(n,i){s(n,e,i)},p:Le,d(n){n&&o(e)}}}function Rk(t){let e;return{c(){e=p("p"),e.textContent="This is panel contents"},m(n,i){s(n,e,i)},p:Le,d(n){n&&o(e)}}}function jk(t){let e;return{c(){e=p("p"),e.textContent="This is panel contents"},m(n,i){s(n,e,i)},p:Le,d(n){n&&o(e)}}}function zk(t){let e;return{c(){e=p("p"),e.textContent="This is panel contents"},m(n,i){s(n,e,i)},p:Le,d(n){n&&o(e)}}}function Wk(t){let e;return{c(){e=p("p"),e.textContent="This is panel contents"},m(n,i){s(n,e,i)},p:Le,d(n){n&&o(e)}}}function Vk(t){let e;return{c(){e=p("p"),e.textContent="This is panel contents"},m(n,i){s(n,e,i)},p:Le,d(n){n&&o(e)}}}function Uk(t){let e;return{c(){e=p("p"),e.textContent="This is panel contents"},m(n,i){s(n,e,i)},p:Le,d(n){n&&o(e)}}}function Yk(t){let e;return{c(){e=ne("Action")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function Gk(t){let e,n,i,l,r,a,u,m;return u=new De({props:{$$slots:{default:[Yk]},$$scope:{ctx:t}}}),{c(){e=p("p"),e.textContent="This is panel contents",n=d(),i=p("p"),i.textContent="Hello world!",l=d(),r=p("p"),r.textContent="This is panel contents",a=d(),S(u.$$.fragment)},m(f,c){s(f,e,c),s(f,n,c),s(f,i,c),s(f,l,c),s(f,r,c),s(f,a,c),E(u,f,c),m=!0},p(f,c){let g={};c&4&&(g.$$scope={dirty:c,ctx:f}),u.$set(g)},i(f){m||($(u.$$.fragment,f),m=!0)},o(f){y(u.$$.fragment,f),m=!1},d(f){f&&(o(e),o(n),o(i),o(l),o(r),o(a)),C(u,f)}}}function Kk(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O,D,L,T,A,H,I,P,N,j,K,U,G,F,z,V,Q,le,ee,X,Z,ge,he,W;return r=new hn({props:{title:"Collapsed",$$slots:{default:[Hk]},$$scope:{ctx:t}}}),u=new hn({props:{title:"Expanded",open:!0,$$slots:{default:[Pk]},$$scope:{ctx:t}}}),f=new hn({props:{title:"Round",round:!0,$$slots:{default:[Nk]},$$scope:{ctx:t}}}),h=new hn({props:{$$slots:{default:[Fk]},$$scope:{ctx:t}}}),w=new hn({props:{round:!0,$$slots:{default:[qk]},$$scope:{ctx:t}}}),O=new hn({props:{title:"info",info:!0,$$slots:{default:[Bk]},$$scope:{ctx:t}}}),L=new hn({props:{title:"success round",success:!0,round:!0,$$slots:{default:[Rk]},$$scope:{ctx:t}}}),A=new hn({props:{title:"warning round collapsible",warning:!0,round:!0,collapsible:!0,$$slots:{default:[jk]},$$scope:{ctx:t}}}),I=new hn({props:{title:"danger round collapsible open",danger:!0,round:!0,collapsible:!0,open:!0,$$slots:{default:[zk]},$$scope:{ctx:t}}}),K=new hn({props:{title:"Collapsed",round:!0,disabled:!0,$$slots:{default:[Wk]},$$scope:{ctx:t}}}),G=new hn({props:{title:"Expanded",open:!0,round:!0,disabled:!0,$$slots:{default:[Vk]},$$scope:{ctx:t}}}),Q=new hn({props:{title:"Collapsed",round:!0,collapsible:!0,$$slots:{default:[Uk]},$$scope:{ctx:t}}}),ee=new hn({props:{title:"Panel 2",open:!0,round:!0,collapsible:!0,$$slots:{default:[Gk]},$$scope:{ctx:t}}}),Z=new ze({props:{html:t[1]}}),he=new Fe({props:{props:t[0]}}),{c(){e=p("h2"),e.textContent="Panel",n=d(),i=p("h3"),i.textContent="Normal",l=d(),S(r.$$.fragment),a=d(),S(u.$$.fragment),m=d(),S(f.$$.fragment),c=d(),g=p("h3"),g.textContent="No title",b=d(),S(h.$$.fragment),v=d(),S(w.$$.fragment),k=d(),_=p("h3"),_.textContent="Types & variations",M=d(),S(O.$$.fragment),D=d(),S(L.$$.fragment),T=d(),S(A.$$.fragment),H=d(),S(I.$$.fragment),P=d(),N=p("h3"),N.textContent="Round & disabled",j=d(),S(K.$$.fragment),U=d(),S(G.$$.fragment),F=d(),z=p("h3"),z.textContent="Collapsible",V=d(),S(Q.$$.fragment),le=d(),S(ee.$$.fragment),X=d(),S(Z.$$.fragment),ge=d(),S(he.$$.fragment)},m(Y,J){s(Y,e,J),s(Y,n,J),s(Y,i,J),s(Y,l,J),E(r,Y,J),s(Y,a,J),E(u,Y,J),s(Y,m,J),E(f,Y,J),s(Y,c,J),s(Y,g,J),s(Y,b,J),E(h,Y,J),s(Y,v,J),E(w,Y,J),s(Y,k,J),s(Y,_,J),s(Y,M,J),E(O,Y,J),s(Y,D,J),E(L,Y,J),s(Y,T,J),E(A,Y,J),s(Y,H,J),E(I,Y,J),s(Y,P,J),s(Y,N,J),s(Y,j,J),E(K,Y,J),s(Y,U,J),E(G,Y,J),s(Y,F,J),s(Y,z,J),s(Y,V,J),E(Q,Y,J),s(Y,le,J),E(ee,Y,J),s(Y,X,J),E(Z,Y,J),s(Y,ge,J),E(he,Y,J),W=!0},p(Y,[J]){let pe={};J&4&&(pe.$$scope={dirty:J,ctx:Y}),r.$set(pe);let we={};J&4&&(we.$$scope={dirty:J,ctx:Y}),u.$set(we);let ve={};J&4&&(ve.$$scope={dirty:J,ctx:Y}),f.$set(ve);let ue={};J&4&&(ue.$$scope={dirty:J,ctx:Y}),h.$set(ue);let se={};J&4&&(se.$$scope={dirty:J,ctx:Y}),w.$set(se);let xe={};J&4&&(xe.$$scope={dirty:J,ctx:Y}),O.$set(xe);let ke={};J&4&&(ke.$$scope={dirty:J,ctx:Y}),L.$set(ke);let ce={};J&4&&(ce.$$scope={dirty:J,ctx:Y}),A.$set(ce);let be={};J&4&&(be.$$scope={dirty:J,ctx:Y}),I.$set(be);let Ae={};J&4&&(Ae.$$scope={dirty:J,ctx:Y}),K.$set(Ae);let ae={};J&4&&(ae.$$scope={dirty:J,ctx:Y}),G.$set(ae);let $e={};J&4&&($e.$$scope={dirty:J,ctx:Y}),Q.$set($e);let re={};J&4&&(re.$$scope={dirty:J,ctx:Y}),ee.$set(re)},i(Y){W||($(r.$$.fragment,Y),$(u.$$.fragment,Y),$(f.$$.fragment,Y),$(h.$$.fragment,Y),$(w.$$.fragment,Y),$(O.$$.fragment,Y),$(L.$$.fragment,Y),$(A.$$.fragment,Y),$(I.$$.fragment,Y),$(K.$$.fragment,Y),$(G.$$.fragment,Y),$(Q.$$.fragment,Y),$(ee.$$.fragment,Y),$(Z.$$.fragment,Y),$(he.$$.fragment,Y),W=!0)},o(Y){y(r.$$.fragment,Y),y(u.$$.fragment,Y),y(f.$$.fragment,Y),y(h.$$.fragment,Y),y(w.$$.fragment,Y),y(O.$$.fragment,Y),y(L.$$.fragment,Y),y(A.$$.fragment,Y),y(I.$$.fragment,Y),y(K.$$.fragment,Y),y(G.$$.fragment,Y),y(Q.$$.fragment,Y),y(ee.$$.fragment,Y),y(Z.$$.fragment,Y),y(he.$$.fragment,Y),W=!1},d(Y){Y&&(o(e),o(n),o(i),o(l),o(a),o(m),o(c),o(g),o(b),o(v),o(k),o(_),o(M),o(D),o(T),o(H),o(P),o(N),o(j),o(U),o(F),o(z),o(V),o(le),o(X),o(ge)),C(r,Y),C(u,Y),C(f,Y),C(h,Y),C(w,Y),C(O,Y),C(L,Y),C(A,Y),C(I,Y),C(K,Y),C(G,Y),C(Q,Y),C(ee,Y),C(Z,Y),C(he,Y)}}}function Xk(t){return[[{name:"class",type:"string",description:"Additional css class name to be added to the component."},{name:"danger",description:"Panel type: danger"},{name:"disabled",description:"Make the panel disabled."},{name:"collapsible",description:"If present, the panel will expand/collapse on title click or Enter key or Space."},{name:"info",description:"Panel type: info"},{name:"open",description:"Panel initial open state."},{name:"round",description:"Adds rounded corners to the panel."},{name:"success",description:"Panel type: success"},{name:"title",type:"string",description:"Panel title."},{name:"warning",description:"Panel type: warning"},{name:"bind:element",type:"element",description:"Exposes the HTML element of the component."},{name:"on:close",type:"function",description:"Triggered after the panel is closed."},{name:"on:open",type:"function",description:"Triggered after the panel is opened."}],`
<Panel title="Hello" round collapsible>
	<p>This is panel contents</p>
	<p>Hello world!</p>
	<p>This is panel contents</p>
	<Button>Action</Button>
</Panel>
`]}var Sh=class extends fe{constructor(e){super(),de(this,e,Xk,Kk,me,{})}},Lh=Sh;function Zk(t){let e;return{c(){e=ne("Open popover")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function Jk(t){let e;return{c(){e=ne("Click me")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function Qk(t){let e,n,i,l,r,a;return r=new De({props:{$$slots:{default:[Jk]},$$scope:{ctx:t}}}),r.$on("click",function(){_t(t[0].close)&&t[0].close.apply(this,arguments)}),{c(){e=p("h2"),e.textContent="Context information",n=d(),i=p("p"),i.textContent="Some text",l=d(),S(r.$$.fragment)},m(u,m){s(u,e,m),s(u,n,m),s(u,i,m),s(u,l,m),E(r,u,m),a=!0},p(u,m){t=u;let f={};m&32768&&(f.$$scope={dirty:m,ctx:t}),r.$set(f)},i(u){a||($(r.$$.fragment,u),a=!0)},o(u){y(r.$$.fragment,u),a=!1},d(u){u&&(o(e),o(n),o(i),o(l)),C(r,u)}}}function eT(t){let e;return{c(){e=ne("Open popover")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function tT(t){let e;return{c(){e=ne("Click me")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function nT(t){let e,n,i,l,r,a;return r=new De({props:{$$slots:{default:[tT]},$$scope:{ctx:t}}}),r.$on("click",function(){_t(t[4].close)&&t[4].close.apply(this,arguments)}),{c(){e=p("h2"),e.textContent="Context information",n=d(),i=p("p"),i.textContent="Some text",l=d(),S(r.$$.fragment)},m(u,m){s(u,e,m),s(u,n,m),s(u,i,m),s(u,l,m),E(r,u,m),a=!0},p(u,m){t=u;let f={};m&32768&&(f.$$scope={dirty:m,ctx:t}),r.$set(f)},i(u){a||($(r.$$.fragment,u),a=!0)},o(u){y(r.$$.fragment,u),a=!1},d(u){u&&(o(e),o(n),o(i),o(l)),C(r,u)}}}function iT(t){let e;return{c(){e=ne("Open popover")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function oT(t){let e;return{c(){e=ne("Smaller offset")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function sT(t){let e;return{c(){e=ne("Open popover")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function lT(t){let e;return{c(){e=ne("Bigger offset")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function rT(t){let e;return{c(){e=ne("Update content")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function aT(t){let e;return{c(){e=ne("Close")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function uT(t){let e,n,i,l,r,a;return i=new De({props:{success:!0,$$slots:{default:[rT]},$$scope:{ctx:t}}}),i.$on("click",t[6]),r=new De({props:{$$slots:{default:[aT]},$$scope:{ctx:t}}}),r.$on("click",function(){_t(t[3].close)&&t[3].close.apply(this,arguments)}),{c(){e=new Li(!1),n=d(),S(i.$$.fragment),l=d(),S(r.$$.fragment),e.a=n},m(u,m){e.m(t[5],u,m),s(u,n,m),E(i,u,m),s(u,l,m),E(r,u,m),a=!0},p(u,m){t=u,(!a||m&32)&&e.p(t[5]);let f={};m&32768&&(f.$$scope={dirty:m,ctx:t}),i.$set(f);let c={};m&32768&&(c.$$scope={dirty:m,ctx:t}),r.$set(c)},i(u){a||($(i.$$.fragment,u),$(r.$$.fragment,u),a=!0)},o(u){y(i.$$.fragment,u),y(r.$$.fragment,u),a=!1},d(u){u&&(e.d(),o(n),o(l)),C(i,u),C(r,u)}}}function fT(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O,D,L,T,A,H,I,P,N,j,K,U,G,F,z,V,Q,le,ee,X,Z,ge,he,W,Y,J,pe,we,ve,ue,se;g=new De({props:{$$slots:{default:[Zk]},$$scope:{ctx:t}}}),g.$on("click",function(){_t(t[0].open)&&t[0].open.apply(this,arguments)});let xe={$$slots:{default:[Qk]},$$scope:{ctx:t}};h=new Ti({props:xe}),t[10](h),M=new De({props:{round:!0,icon:"cog"}}),M.$on("click",function(){_t(t[0].open)&&t[0].open.apply(this,arguments)}),H=new De({props:{$$slots:{default:[eT]},$$scope:{ctx:t}}}),H.$on("click",function(){_t(t[4].open)&&t[4].open.apply(this,arguments)});let ke={hideTip:!0,$$slots:{default:[nT]},$$scope:{ctx:t}};P=new Ti({props:ke}),t[11](P),U=new De({props:{$$slots:{default:[iT]},$$scope:{ctx:t}}}),U.$on("click",function(){_t(t[1].open)&&t[1].open.apply(this,arguments)});let ce={offset:"-20",$$slots:{default:[oT]},$$scope:{ctx:t}};F=new Ti({props:ce}),t[12](F),V=new De({props:{$$slots:{default:[sT]},$$scope:{ctx:t}}}),V.$on("click",function(){_t(t[2].open)&&t[2].open.apply(this,arguments)});let be={offset:"20",$$slots:{default:[lT]},$$scope:{ctx:t}};le=new Ti({props:be}),t[13](le),ge=new De({props:{round:!0,icon:"help"}}),ge.$on("click",function(){_t(t[3].open)&&t[3].open.apply(this,arguments)});let Ae={position:"top",$$slots:{default:[uT]},$$scope:{ctx:t}};return W=new Ti({props:Ae}),t[14](W),J=new ze({props:{html:t[9]}}),we=new Fe({props:{props:t[7]}}),ue=new Fe({props:{props:t[8],title:"Instance API",description:"The component exposes <em>this</em> property, to which a variable can be bound, creating an instance of the component, with the following API"}}),{c(){e=p("h2"),e.textContent="Popover",n=d(),i=p("p"),i.innerHTML="If a <em>Dialog</em> and <em>Tooltip</em> had a child - this would be it.",l=d(),r=p("ul"),r.innerHTML=`<li>It&#39;s a container that can be opened like a dialog, but will be attached to the target element, like a tooltip.
	</li><li>It&#39;s a great way to display additional information or actions for a specific element on the page.
	</li><li>It can contain other components (e.g. buttons) and can serve as a free-form menu.
	</li><li>It has focus-trap (like dialog), so once it&#39;s opened - focus goes in and user can not tab-out of it.
	</li><li>It can be closed using Escape key or by clicking outside of it.</li>`,a=d(),u=p("hr"),m=d(),f=p("h3"),f.textContent="Normal",c=d(),S(g.$$.fragment),b=d(),S(h.$$.fragment),v=d(),w=p("h3"),w.textContent="Target at the edge - tip should remain aligned",k=d(),_=p("div"),S(M.$$.fragment),O=d(),D=p("h3"),D.textContent="No tip",L=d(),T=p("p"),T.textContent=`Styling is different than the normal popover, because the use-case for no-tip popover
	is more similar to a dropdown rather than a tooltip or a popover,
	so it makes sense that it also looks for the role.`,A=d(),S(H.$$.fragment),I=d(),S(P.$$.fragment),N=d(),j=p("h3"),j.textContent="Custom offset",K=d(),S(U.$$.fragment),G=d(),S(F.$$.fragment),z=d(),S(V.$$.fragment),Q=d(),S(le.$$.fragment),ee=d(),X=p("h3"),X.textContent="Update contents",Z=d(),S(ge.$$.fragment),he=d(),S(W.$$.fragment),Y=d(),S(J.$$.fragment),pe=d(),S(we.$$.fragment),ve=d(),S(ue.$$.fragment),Pt(_,"display","flex"),Pt(_,"justify-content","flex-end"),Pt(_,"padding","1rem"),Pt(_,"background-color","#0003")},m(ae,$e){s(ae,e,$e),s(ae,n,$e),s(ae,i,$e),s(ae,l,$e),s(ae,r,$e),s(ae,a,$e),s(ae,u,$e),s(ae,m,$e),s(ae,f,$e),s(ae,c,$e),E(g,ae,$e),s(ae,b,$e),E(h,ae,$e),s(ae,v,$e),s(ae,w,$e),s(ae,k,$e),s(ae,_,$e),E(M,_,null),s(ae,O,$e),s(ae,D,$e),s(ae,L,$e),s(ae,T,$e),s(ae,A,$e),E(H,ae,$e),s(ae,I,$e),E(P,ae,$e),s(ae,N,$e),s(ae,j,$e),s(ae,K,$e),E(U,ae,$e),s(ae,G,$e),E(F,ae,$e),s(ae,z,$e),E(V,ae,$e),s(ae,Q,$e),E(le,ae,$e),s(ae,ee,$e),s(ae,X,$e),s(ae,Z,$e),E(ge,ae,$e),s(ae,he,$e),E(W,ae,$e),s(ae,Y,$e),E(J,ae,$e),s(ae,pe,$e),E(we,ae,$e),s(ae,ve,$e),E(ue,ae,$e),se=!0},p(ae,[$e]){t=ae;let re={};$e&32768&&(re.$$scope={dirty:$e,ctx:t}),g.$set(re);let oe={};$e&32769&&(oe.$$scope={dirty:$e,ctx:t}),h.$set(oe);let Oe={};$e&32768&&(Oe.$$scope={dirty:$e,ctx:t}),H.$set(Oe);let Ke={};$e&32784&&(Ke.$$scope={dirty:$e,ctx:t}),P.$set(Ke);let nt={};$e&32768&&(nt.$$scope={dirty:$e,ctx:t}),U.$set(nt);let it={};$e&32768&&(it.$$scope={dirty:$e,ctx:t}),F.$set(it);let lt={};$e&32768&&(lt.$$scope={dirty:$e,ctx:t}),V.$set(lt);let Ce={};$e&32768&&(Ce.$$scope={dirty:$e,ctx:t}),le.$set(Ce);let Ne={};$e&32808&&(Ne.$$scope={dirty:$e,ctx:t}),W.$set(Ne)},i(ae){se||($(g.$$.fragment,ae),$(h.$$.fragment,ae),$(M.$$.fragment,ae),$(H.$$.fragment,ae),$(P.$$.fragment,ae),$(U.$$.fragment,ae),$(F.$$.fragment,ae),$(V.$$.fragment,ae),$(le.$$.fragment,ae),$(ge.$$.fragment,ae),$(W.$$.fragment,ae),$(J.$$.fragment,ae),$(we.$$.fragment,ae),$(ue.$$.fragment,ae),se=!0)},o(ae){y(g.$$.fragment,ae),y(h.$$.fragment,ae),y(M.$$.fragment,ae),y(H.$$.fragment,ae),y(P.$$.fragment,ae),y(U.$$.fragment,ae),y(F.$$.fragment,ae),y(V.$$.fragment,ae),y(le.$$.fragment,ae),y(ge.$$.fragment,ae),y(W.$$.fragment,ae),y(J.$$.fragment,ae),y(we.$$.fragment,ae),y(ue.$$.fragment,ae),se=!1},d(ae){ae&&(o(e),o(n),o(i),o(l),o(r),o(a),o(u),o(m),o(f),o(c),o(b),o(v),o(w),o(k),o(_),o(O),o(D),o(L),o(T),o(A),o(I),o(N),o(j),o(K),o(G),o(z),o(Q),o(ee),o(X),o(Z),o(he),o(Y),o(pe),o(ve)),C(g,ae),t[10](null),C(h,ae),C(M),C(H,ae),t[11](null),C(P,ae),C(U,ae),t[12](null),C(F,ae),C(V,ae),t[13](null),C(le,ae),C(ge,ae),t[14](null),C(W,ae),C(J,ae),C(we,ae),C(ue,ae)}}}function mT(t,e,n){let i,l,r,a,u,m="<h2>Context information</h2><p>Some text</p>";function f(){n(5,m="<h2>Updated content</h2><p>Some text</p><p>Some more text</p>")}let c=[{name:"class",type:"string",description:"Additional css class name to be added to the component."},{name:"dontHideOnTargetClick",description:"When present, it will keep the popover open when the target is clicked again."},{name:"hideTip",description:"Display just the container, without the tip (small triangle pointing at the target)."},{name:"offset",type:"number",default:"2",description:"Customize popover offset. Use negative number for smaller offset or positive for bigger"},{name:"position",type:["top","bottom"],default:"bottom",description:"Prefer the position of the popover to be above (top) or below (bottom) the target element."},{name:"setMinWidthToTarget",description:"When present, it will make the popover min-width the same as the target."},{name:"bind:element",type:"element",description:"Exposes the HTML element of the component."},{name:"bind:contentElement",type:"element",description:"Exposes the HTML element of the content div."}],g=[{name:"close",type:"function",description:"Closes the popover."},{name:"open",type:"function",description:"Opens the popover."},{name:"isOpened",type:"function",description:"Returns the opened state."},{name:"updatePosition",type:"function",description:"Recalculates the position of the popover."}],b=`
<Button on:click="{popover1.open}">Open popover</Button>
<Popover bind:this="{popover1}">
	<h2>Context information</h2>
	<p>Some text</p>
	<Button on:click="{popover1.close}">Click me</Button>
</Popover>

<script>
	let popover1;
&lt;/script>
`;function h(M){_e[M?"unshift":"push"](()=>{i=M,n(0,i)})}function v(M){_e[M?"unshift":"push"](()=>{u=M,n(4,u)})}function w(M){_e[M?"unshift":"push"](()=>{l=M,n(1,l)})}function k(M){_e[M?"unshift":"push"](()=>{r=M,n(2,r)})}function _(M){_e[M?"unshift":"push"](()=>{a=M,n(3,a)})}return[i,l,r,a,u,m,f,c,g,b,h,v,w,k,_]}var Dh=class extends fe{constructor(e){super(),de(this,e,mT,fT,me,{})}},Ah=Dh;function dT(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O,D,L,T,A,H,I,P,N;return{c(){e=p("thead"),e.innerHTML="<tr><th>Year</th><th>Month</th><th>Price</th></tr>",n=d(),i=p("thead"),i.innerHTML='<tr><th colspan="3">Year: 2021</th></tr>',l=d(),r=p("tbody"),r.innerHTML='<tr class="row-sel"><td>2021</td><td>January</td><td>$100</td></tr> <tr class="row-sel"><td>2021</td><td>February</td><td>$80</td></tr> <tr class="row-sel"><td>2021</td><td>March</td><td>$80</td></tr> <tr class="row-sel"><td>2021</td><td>April</td><td>$80</td></tr> <tr class="row-sel"><td>2021</td><td>May</td><td>$80</td></tr> <tr class="row-sel"><td>2021</td><td>June</td><td>$80</td></tr>',a=d(),u=p("tbody"),u.innerHTML="<tr><td>2021</td><td>April 1</td><td>$80</td></tr> <tr><td>2021</td><td>April 2</td><td>$80</td></tr>",m=d(),f=p("tbody"),f.innerHTML='<tr class="row-sel"><td>2021</td><td>May</td><td>$80</td></tr> <tr class="row-sel"><td>2021</td><td>July</td><td>$80</td></tr> <tr class="row-sel"><td>2021</td><td>August</td><td>$80</td></tr> <tr class="row-sel"><td>2021</td><td>September</td><td>$80</td></tr> <tr class="row-sel"><td>2021</td><td>October</td><td>$80</td></tr> <tr class="row-sel"><td>2021</td><td>November</td><td>$80</td></tr> <tr class="row-sel"><td>2021</td><td>December</td><td>$80</td></tr>',c=d(),g=p("thead"),g.innerHTML='<tr><th colspan="3">Year: 2020</th></tr>',b=d(),h=p("tbody"),h.innerHTML='<tr class="row-sel"><td>2020</td><td>January</td><td>$100</td></tr> <tr class="row-sel"><td>2020</td><td>February</td><td>$80</td></tr> <tr class="row-sel"><td>2020</td><td>March</td><td>$80</td></tr> <tr class="row-sel"><td>2020</td><td>April</td><td>$80</td></tr> <tr class="row-sel"><td>2020</td><td>May</td><td>$80</td></tr> <tr class="row-sel"><td>2020</td><td>June</td><td>$80</td></tr> <tr class="row-sel"><td>2020</td><td>July</td><td>$80</td></tr> <tr class="row-sel"><td>2020</td><td>August</td><td>$80</td></tr> <tr class="row-sel"><td>2020</td><td>September</td><td>$80</td></tr> <tr class="row-sel"><td>2020</td><td>October</td><td>$80</td></tr> <tr class="row-sel"><td>2020</td><td>November</td><td>$80</td></tr> <tr class="row-sel"><td>2020</td><td>December</td><td>$80</td></tr>',v=d(),w=p("thead"),w.innerHTML='<tr><th colspan="3">Year: 2019</th></tr>',k=d(),_=p("tbody"),_.innerHTML='<tr class="row-sel"><td>2019</td><td>January</td><td>$100</td></tr> <tr class="row-sel"><td>2019</td><td>February</td><td>$80</td></tr> <tr class="row-sel"><td>2019</td><td>March</td><td>$80</td></tr> <tr class="row-sel"><td>2019</td><td>April</td><td>$80</td></tr> <tr class="row-sel"><td>2019</td><td>May</td><td>$80</td></tr> <tr class="row-sel"><td>2019</td><td>June</td><td>$80</td></tr> <tr class="row-sel"><td>2019</td><td>July</td><td>$80</td></tr> <tr class="row-sel"><td>2019</td><td>August</td><td>$80</td></tr> <tr class="row-sel"><td>2019</td><td>September</td><td>$80</td></tr> <tr class="row-sel"><td>2019</td><td>October</td><td>$80</td></tr> <tr class="row-sel"><td>2019</td><td>November</td><td>$80</td></tr> <tr class="row-sel"><td>2019</td><td>December</td><td>$80</td></tr>',M=d(),O=p("thead"),O.innerHTML='<tr><th colspan="3">Year: 2018</th></tr>',D=d(),L=p("tbody"),L.innerHTML='<tr class="row-sel"><td>2018</td><td>January</td><td>$100</td></tr> <tr class="row-sel"><td>2018</td><td>February</td><td>$80</td></tr> <tr class="row-sel"><td>2018</td><td>March</td><td>$80</td></tr> <tr class="row-sel"><td>2018</td><td>April</td><td>$80</td></tr> <tr class="row-sel"><td>2018</td><td>May</td><td>$80</td></tr> <tr class="row-sel"><td>2018</td><td>June</td><td>$80</td></tr> <tr class="row-sel"><td>2018</td><td>July</td><td>$80</td></tr> <tr class="row-sel"><td>2018</td><td>August</td><td>$80</td></tr> <tr class="row-sel"><td>2018</td><td>September</td><td>$80</td></tr> <tr class="row-sel"><td>2018</td><td>October</td><td>$80</td></tr> <tr class="row-sel"><td>2018</td><td>November</td><td>$80</td></tr> <tr class="row-sel"><td>2018</td><td>December</td><td>$80</td></tr>',T=d(),A=p("thead"),A.innerHTML='<tr><th colspan="3">Year: 2017</th></tr>',H=d(),I=p("tbody"),I.innerHTML='<tr class="row-sel"><td>2017</td><td>January</td><td>$100</td></tr> <tr class="row-sel"><td>2017</td><td>February</td><td>$80</td></tr> <tr class="row-sel"><td>2017</td><td>March</td><td>$80</td></tr> <tr class="row-sel"><td>2017</td><td>April</td><td>$80</td></tr> <tr class="row-sel"><td>2017</td><td>May</td><td>$80</td></tr> <tr class="row-sel"><td>2017</td><td>June</td><td>$80</td></tr> <tr class="row-sel"><td>2017</td><td>July</td><td>$80</td></tr> <tr class="row-sel"><td>2017</td><td>August</td><td>$80</td></tr> <tr class="row-sel"><td>2017</td><td>September</td><td>$80</td></tr> <tr class="row-sel"><td>2017</td><td>October</td><td>$80</td></tr> <tr class="row-sel"><td>2017</td><td>November</td><td>$80</td></tr> <tr class="row-sel"><td>2017</td><td>December</td><td>$80</td></tr>',P=d(),N=p("tfoot"),N.innerHTML='<tr><td colspan="2">Sum</td><td>$180</td></tr>',x(u,"class","row-sel row-group")},m(j,K){s(j,e,K),s(j,n,K),s(j,i,K),s(j,l,K),s(j,r,K),s(j,a,K),s(j,u,K),s(j,m,K),s(j,f,K),s(j,c,K),s(j,g,K),s(j,b,K),s(j,h,K),s(j,v,K),s(j,w,K),s(j,k,K),s(j,_,K),s(j,M,K),s(j,O,K),s(j,D,K),s(j,L,K),s(j,T,K),s(j,A,K),s(j,H,K),s(j,I,K),s(j,P,K),s(j,N,K)},p:Le,d(j){j&&(o(e),o(n),o(i),o(l),o(r),o(a),o(u),o(m),o(f),o(c),o(g),o(b),o(h),o(v),o(w),o(k),o(_),o(M),o(O),o(D),o(L),o(T),o(A),o(H),o(I),o(P),o(N))}}}function cT(t){let e,n,i,l,r,a,u,m,f;return l=new rs({props:{round:!0,rowSelector:".row-sel",$$slots:{default:[dT]},$$scope:{ctx:t}}}),l.$on("keydown",pT),l.$on("dblclick",T0),l.$on("select",T0),a=new ze({props:{html:t[1]}}),m=new Fe({props:{props:t[0]}}),{c(){e=p("h2"),e.textContent="Table",n=d(),i=p("div"),S(l.$$.fragment),r=d(),S(a.$$.fragment),u=d(),S(m.$$.fragment),x(i,"class","table-viewport")},m(c,g){s(c,e,g),s(c,n,g),s(c,i,g),E(l,i,null),s(c,r,g),E(a,c,g),s(c,u,g),E(m,c,g),f=!0},p(c,[g]){let b={};g&4&&(b.$$scope={dirty:g,ctx:c}),l.$set(b)},i(c){f||($(l.$$.fragment,c),$(a.$$.fragment,c),$(m.$$.fragment,c),f=!0)},o(c){y(l.$$.fragment,c),y(a.$$.fragment,c),y(m.$$.fragment,c),f=!1},d(c){c&&(o(e),o(n),o(i),o(r),o(u)),C(l),C(a,c),C(m,c)}}}function pT(t){let{event:e,selectedItem:n}=t.detail;e.key==="Enter"&&console.log(n)}function T0(t){let{selectedItem:e}=t.detail;console.log(t.type,e)}function hT(t){return[[{name:"class",type:"string",description:"Additional css class name to be added to the component."},{name:"data",type:"object",description:"Props to attach to the element's <em>dataset</em> attribute."},{name:"round",description:"Adds rounded corners to the table."},{name:"rowSelector",type:"string",default:"tbody tr",description:"A selector for a table row.<br>This is useful if a table needs row groups, in which case it would have a mix of TRs and TBODYs for rows. Both can have the same class, e.g. <em>.row</em> and this selector should then be provided here."},{name:"scrollContainer",type:["string","Element"],default:"table wrapper",description:"Selector or HTML Element to the scroll container. If table wrapper's height is not set to 100% of the container, and is taller than the container - the container will have to be scrollable, and in this case it must be provided here."},{name:"scrollCorrectionOffset",type:"number",default:"0",description:"If an external <em>scrollContainer</em> is used - it is possible that it will have non-zero padding set, thus the table wrapper will be offset from the beginning of the container. This offset should be set here, so that the sticky headers work correctly."},{name:"selectable",type:["true","false"],description:"Makes table rows selectable with mouse and adds keyboard navigation."},{name:"bind:element",type:"element",description:"Exposes the HTML element of the component."},{name:"on:click",type:"function",description:"Triggered after a row has been clicked."},{name:"on:dblclick",type:"function",description:"Triggered after a row has been double-clicked."},{name:"on:keydown",type:"function",description:"Triggered after key has been pressed."},{name:"on:select",type:"function",description:"Triggered after a row selection has changed."}],`
<Table rowSelector=".row-sel" round data="{{ id: 'table-id-1' }}">
		<thead>
			<tr><th>Year</th><th>Month</th><th>Price</th></tr>
		</thead>
		<thead>
			<tr><th colspan="3">Year: 2021</th></tr>
		</thead>
		<tbody>
			<tr class="row-sel"><td>2021</td><td>January</td><td>$100</td></tr>
			<tr class="row-sel"><td>2021</td><td>February</td><td>$80</td></tr>
			<tr class="row-sel"><td>2021</td><td>March</td><td>$80</td></tr>
			<tr class="row-sel"><td>2021</td><td>April</td><td>$80</td></tr>
			<tr class="row-sel"><td>2021</td><td>May</td><td>$80</td></tr>
			<tr class="row-sel"><td>2021</td><td>June</td><td>$80</td></tr>
		</tbody>
		<tbody class="row-sel row-group">
			<tr><td>2021</td><td>April 1</td><td>$80</td></tr>
			<tr><td>2021</td><td>April 2</td><td>$80</td></tr>
		</tbody>
		<tbody>
			<tr class="row-sel"><td>2021</td><td>May</td><td>$80</td></tr>
			<tr class="row-sel"><td>2021</td><td>July</td><td>$80</td></tr>
			<tr class="row-sel"><td>2021</td><td>August</td><td>$80</td></tr>
			<tr class="row-sel"><td>2021</td><td>September</td><td>$80</td></tr>
			<tr class="row-sel"><td>2021</td><td>October</td><td>$80</td></tr>
			<tr class="row-sel"><td>2021</td><td>November</td><td>$80</td></tr>
			<tr class="row-sel"><td>2021</td><td>December</td><td>$80</td></tr>
		</tbody>
		<thead>
			<tr><th colspan="3">Year: 2020</th></tr>
		</thead>
		<tbody>
			...
		</tbody>
		<tfoot>
			<tr><td colspan="2">Sum</td><td>$180</td></tr>
		</tfoot>
	</Table>
`]}var Ih=class extends fe{constructor(e){super(),de(this,e,hT,cT,me,{})}},Oh=Ih;function gT(t){let e,n,i,l,r,a,u,m,f;return l=new Uc({props:{items:t[2]}}),l.$on("select",bT),a=new ze({props:{html:t[1]}}),m=new Fe({props:{props:t[0]}}),{c(){e=p("h2"),e.textContent="Tree",n=d(),i=p("div"),S(l.$$.fragment),r=d(),S(a.$$.fragment),u=d(),S(m.$$.fragment),Pt(i,"display","inline-block"),Pt(i,"width","200px")},m(c,g){s(c,e,g),s(c,n,g),s(c,i,g),E(l,i,null),s(c,r,g),E(a,c,g),s(c,u,g),E(m,c,g),f=!0},p:Le,i(c){f||($(l.$$.fragment,c),$(a.$$.fragment,c),$(m.$$.fragment,c),f=!0)},o(c){y(l.$$.fragment,c),y(a.$$.fragment,c),y(m.$$.fragment,c),f=!1},d(c){c&&(o(e),o(n),o(i),o(r),o(u)),C(l),C(a,c),C(m,c)}}}function bT(t){console.log(t.detail)}function _T(t){return[[{name:"class",type:"string",description:"Additional css class name to be added to the component."},{name:"title",type:"string",description:"Title of the component."},{name:"bind:element",type:"element",description:"Exposes the HTML element of the component."},{name:"on:select",type:"function",description:"Triggered after an item was selected."}],`
<Tree {items} on:select="{onSelect}"/>

<script>
const items = [
	{ id: 1, name: 'One' },
	{ id: 2, name: 'Two', items: [
		{ id: 21, name: 'One' },
		{ id: 22, name: 'Two' },
		{ id: 23, name: 'Three', items: [
			{ id: 231, name: 'One' },
			{ id: 232, name: 'Two' },
		] },
		{ id: 24, name: 'Four' },
	] },
	{ id: 3, name: 'Three' },
];

function onSelect (e) {
	console.log(e.detail);
}
&lt;/script>
`,[{id:1,name:"One"},{id:2,name:"Two"},{id:3,name:"Three"},{id:4,name:"Four",items:[{id:41,name:"One"},{id:42,name:"Two"},{id:43,name:"Three"},{id:44,name:"Four",items:[{id:441,name:"One"},{id:442,name:"Two"},{id:443,name:"Three"},{id:444,name:"Four"},{id:445,name:"Five"},{id:446,name:"Six"},{id:447,name:"Seven",items:[{id:4471,name:"One"},{id:4472,name:"Two"},{id:4473,name:"Three"},{id:4474,name:"Four"},{id:4475,name:"Five"},{id:4476,name:"Six"},{id:4477,name:"Seven"},{id:4478,name:"Eight"},{id:4479,name:"Nine"},{id:44710,name:"Ten"}]},{id:448,name:"Eight"},{id:449,name:"Nine"},{id:4410,name:"Ten"}]},{id:45,name:"Five"},{id:46,name:"Six"},{id:47,name:"Seven"},{id:48,name:"Eight"},{id:49,name:"Nine"},{id:410,name:"Ten"}]},{id:5,name:"Five"},{id:6,name:"Six"},{id:7,name:"Seven",items:[{id:71,name:"One"},{id:72,name:"Two"},{id:73,name:"Three"},{id:74,name:"Four"},{id:75,name:"Five"},{id:76,name:"Six"},{id:77,name:"Seven"},{id:78,name:"Eight"},{id:79,name:"Nine"},{id:710,name:"Ten"}]},{id:8,name:"Eight"},{id:9,name:"Nine"},{id:10,name:"Ten"}]]}var xh=class extends fe{constructor(e){super(),de(this,e,_T,gT,me,{})}},Hh=xh;function vT(t){let e;return{c(){e=ne("Show menu")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function $T(t){let e;return{c(){e=ne("Show menu aligned to the center of the button")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function wT(t){let e;return{c(){e=ne("Show menu aligned to the right side of the button")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function yT(t){let e;return{c(){e=ne("Add a thing (success)")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function kT(t){let e;return{c(){e=ne("Add another one")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function TT(t){let e;return{c(){e=ne("Third option")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function MT(t){let e;return{c(){e=ne("Fourth menu item")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function ET(t){let e;return{c(){e=ne("Fifth element")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function CT(t){let e;return{c(){e=ne("Sixth one, to make it longer")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function ST(t){let e;return{c(){e=ne("Seventh. Menu supports type-ahead")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function LT(t){let e;return{c(){e=ne("Eight, so go ahead and try typing")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function DT(t){let e;return{c(){e=ne("Ninth, the beginning of the menu item text")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function AT(t){let e;return{c(){e=ne("Tenth, and it should be focused")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function IT(t){let e;return{c(){e=ne("A disabled option too")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function OT(t){let e,n;return{c(){e=ne(t[6]),n=ne(" (danger)")},m(i,l){s(i,e,l),s(i,n,l)},p(i,l){l&64&&je(e,i[6])},d(i){i&&(o(e),o(n))}}}function xT(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O,D,L,T,A,H,I,P,N,j;return e=new Lt({props:{success:!0,icon:"plus","data-value":"add-something",$$slots:{default:[yT]},$$scope:{ctx:t}}}),e.$on("click",Nh),i=new Lt({props:{$$slots:{default:[kT]},$$scope:{ctx:t}}}),r=new Ei({}),u=new Lt({props:{shortcut:"cmd+shift+c",$$slots:{default:[TT]},$$scope:{ctx:t}}}),f=new Lt({props:{shortcut:"cmd+alt+d",$$slots:{default:[MT]},$$scope:{ctx:t}}}),g=new Lt({props:{shortcut:"cmd+c",$$slots:{default:[ET]},$$scope:{ctx:t}}}),h=new Lt({props:{shortcut:"cmd+enter",$$slots:{default:[CT]},$$scope:{ctx:t}}}),w=new Lt({props:{shortcut:"backspace",$$slots:{default:[ST]},$$scope:{ctx:t}}}),_=new Lt({props:{shortcut:"escape",$$slots:{default:[LT]},$$scope:{ctx:t}}}),O=new Lt({props:{shortcut:"cmd+option+s",$$slots:{default:[DT]},$$scope:{ctx:t}}}),L=new Lt({props:{$$slots:{default:[AT]},$$scope:{ctx:t}}}),A=new Lt({props:{disabled:!0,$$slots:{default:[IT]},$$scope:{ctx:t}}}),I=new Ei({}),N=new Lt({props:{danger:!0,icon:"close",$$slots:{default:[OT]},$$scope:{ctx:t}}}),N.$on("click",t[12]),{c(){S(e.$$.fragment),n=d(),S(i.$$.fragment),l=d(),S(r.$$.fragment),a=d(),S(u.$$.fragment),m=d(),S(f.$$.fragment),c=d(),S(g.$$.fragment),b=d(),S(h.$$.fragment),v=d(),S(w.$$.fragment),k=d(),S(_.$$.fragment),M=d(),S(O.$$.fragment),D=d(),S(L.$$.fragment),T=d(),S(A.$$.fragment),H=d(),S(I.$$.fragment),P=d(),S(N.$$.fragment)},m(K,U){E(e,K,U),s(K,n,U),E(i,K,U),s(K,l,U),E(r,K,U),s(K,a,U),E(u,K,U),s(K,m,U),E(f,K,U),s(K,c,U),E(g,K,U),s(K,b,U),E(h,K,U),s(K,v,U),E(w,K,U),s(K,k,U),E(_,K,U),s(K,M,U),E(O,K,U),s(K,D,U),E(L,K,U),s(K,T,U),E(A,K,U),s(K,H,U),E(I,K,U),s(K,P,U),E(N,K,U),j=!0},p(K,U){let G={};U&268435456&&(G.$$scope={dirty:U,ctx:K}),e.$set(G);let F={};U&268435456&&(F.$$scope={dirty:U,ctx:K}),i.$set(F);let z={};U&268435456&&(z.$$scope={dirty:U,ctx:K}),u.$set(z);let V={};U&268435456&&(V.$$scope={dirty:U,ctx:K}),f.$set(V);let Q={};U&268435456&&(Q.$$scope={dirty:U,ctx:K}),g.$set(Q);let le={};U&268435456&&(le.$$scope={dirty:U,ctx:K}),h.$set(le);let ee={};U&268435456&&(ee.$$scope={dirty:U,ctx:K}),w.$set(ee);let X={};U&268435456&&(X.$$scope={dirty:U,ctx:K}),_.$set(X);let Z={};U&268435456&&(Z.$$scope={dirty:U,ctx:K}),O.$set(Z);let ge={};U&268435456&&(ge.$$scope={dirty:U,ctx:K}),L.$set(ge);let he={};U&268435456&&(he.$$scope={dirty:U,ctx:K}),A.$set(he);let W={};U&268435520&&(W.$$scope={dirty:U,ctx:K}),N.$set(W)},i(K){j||($(e.$$.fragment,K),$(i.$$.fragment,K),$(r.$$.fragment,K),$(u.$$.fragment,K),$(f.$$.fragment,K),$(g.$$.fragment,K),$(h.$$.fragment,K),$(w.$$.fragment,K),$(_.$$.fragment,K),$(O.$$.fragment,K),$(L.$$.fragment,K),$(A.$$.fragment,K),$(I.$$.fragment,K),$(N.$$.fragment,K),j=!0)},o(K){y(e.$$.fragment,K),y(i.$$.fragment,K),y(r.$$.fragment,K),y(u.$$.fragment,K),y(f.$$.fragment,K),y(g.$$.fragment,K),y(h.$$.fragment,K),y(w.$$.fragment,K),y(_.$$.fragment,K),y(O.$$.fragment,K),y(L.$$.fragment,K),y(A.$$.fragment,K),y(I.$$.fragment,K),y(N.$$.fragment,K),j=!1},d(K){K&&(o(n),o(l),o(a),o(m),o(c),o(b),o(v),o(k),o(M),o(D),o(T),o(H),o(P)),C(e,K),C(i,K),C(r,K),C(u,K),C(f,K),C(g,K),C(h,K),C(w,K),C(_,K),C(O,K),C(L,K),C(A,K),C(I,K),C(N,K)}}}function HT(t){let e;return{c(){e=ne("Add a thing (success)")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function PT(t){let e;return{c(){e=ne("Add another one")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function NT(t){let e,n;return{c(){e=ne(t[6]),n=ne(" (danger)")},m(i,l){s(i,e,l),s(i,n,l)},p(i,l){l&64&&je(e,i[6])},d(i){i&&(o(e),o(n))}}}function FT(t){let e,n,i,l,r,a,u,m;return e=new Lt({props:{success:!0,icon:"plus","data-value":"add-something",$$slots:{default:[HT]},$$scope:{ctx:t}}}),e.$on("click",Nh),i=new Lt({props:{$$slots:{default:[PT]},$$scope:{ctx:t}}}),r=new Ei({}),u=new Lt({props:{danger:!0,icon:"close",$$slots:{default:[NT]},$$scope:{ctx:t}}}),u.$on("click",t[12]),{c(){S(e.$$.fragment),n=d(),S(i.$$.fragment),l=d(),S(r.$$.fragment),a=d(),S(u.$$.fragment)},m(f,c){E(e,f,c),s(f,n,c),E(i,f,c),s(f,l,c),E(r,f,c),s(f,a,c),E(u,f,c),m=!0},p(f,c){let g={};c&268435456&&(g.$$scope={dirty:c,ctx:f}),e.$set(g);let b={};c&268435456&&(b.$$scope={dirty:c,ctx:f}),i.$set(b);let h={};c&268435520&&(h.$$scope={dirty:c,ctx:f}),u.$set(h)},i(f){m||($(e.$$.fragment,f),$(i.$$.fragment,f),$(r.$$.fragment,f),$(u.$$.fragment,f),m=!0)},o(f){y(e.$$.fragment,f),y(i.$$.fragment,f),y(r.$$.fragment,f),y(u.$$.fragment,f),m=!1},d(f){f&&(o(n),o(l),o(a)),C(e,f),C(i,f),C(r,f),C(u,f)}}}function qT(t){let e;return{c(){e=ne("Add a thing (success)")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function BT(t){let e;return{c(){e=ne("Add another one")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function RT(t){let e,n;return{c(){e=ne(t[6]),n=ne(" (danger)")},m(i,l){s(i,e,l),s(i,n,l)},p(i,l){l&64&&je(e,i[6])},d(i){i&&(o(e),o(n))}}}function jT(t){let e,n,i,l,r,a,u,m;return e=new Lt({props:{success:!0,icon:"plus","data-value":"add-something",$$slots:{default:[qT]},$$scope:{ctx:t}}}),e.$on("click",Nh),i=new Lt({props:{$$slots:{default:[BT]},$$scope:{ctx:t}}}),r=new Ei({}),u=new Lt({props:{danger:!0,icon:"close",$$slots:{default:[RT]},$$scope:{ctx:t}}}),u.$on("click",t[12]),{c(){S(e.$$.fragment),n=d(),S(i.$$.fragment),l=d(),S(r.$$.fragment),a=d(),S(u.$$.fragment)},m(f,c){E(e,f,c),s(f,n,c),E(i,f,c),s(f,l,c),E(r,f,c),s(f,a,c),E(u,f,c),m=!0},p(f,c){let g={};c&268435456&&(g.$$scope={dirty:c,ctx:f}),e.$set(g);let b={};c&268435456&&(b.$$scope={dirty:c,ctx:f}),i.$set(b);let h={};c&268435520&&(h.$$scope={dirty:c,ctx:f}),u.$set(h)},i(f){m||($(e.$$.fragment,f),$(i.$$.fragment,f),$(r.$$.fragment,f),$(u.$$.fragment,f),m=!0)},o(f){y(e.$$.fragment,f),y(i.$$.fragment,f),y(r.$$.fragment,f),y(u.$$.fragment,f),m=!1},d(f){f&&(o(n),o(l),o(a)),C(e,f),C(i,f),C(r,f),C(u,f)}}}function zT(t){let e;return{c(){e=ne("Right edge")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function WT(t){let e;return{c(){e=ne("A very long text")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function VT(t){let e;return{c(){e=ne("Another very long text")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function UT(t){let e;return{c(){e=ne("Probably the longest text in the world!")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function YT(t){let e,n,i,l,r,a,u,m;return e=new Lt({props:{icon:"plus",$$slots:{default:[WT]},$$scope:{ctx:t}}}),i=new Lt({props:{$$slots:{default:[VT]},$$scope:{ctx:t}}}),r=new Ei({}),u=new Lt({props:{icon:"close",$$slots:{default:[UT]},$$scope:{ctx:t}}}),{c(){S(e.$$.fragment),n=d(),S(i.$$.fragment),l=d(),S(r.$$.fragment),a=d(),S(u.$$.fragment)},m(f,c){E(e,f,c),s(f,n,c),E(i,f,c),s(f,l,c),E(r,f,c),s(f,a,c),E(u,f,c),m=!0},p(f,c){let g={};c&268435456&&(g.$$scope={dirty:c,ctx:f}),e.$set(g);let b={};c&268435456&&(b.$$scope={dirty:c,ctx:f}),i.$set(b);let h={};c&268435456&&(h.$$scope={dirty:c,ctx:f}),u.$set(h)},i(f){m||($(e.$$.fragment,f),$(i.$$.fragment,f),$(r.$$.fragment,f),$(u.$$.fragment,f),m=!0)},o(f){y(e.$$.fragment,f),y(i.$$.fragment,f),y(r.$$.fragment,f),y(u.$$.fragment,f),m=!1},d(f){f&&(o(n),o(l),o(a)),C(e,f),C(i,f),C(r,f),C(u,f)}}}function GT(t){let e;return{c(){e=ne("New Tab")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function KT(t){let e;return{c(){e=ne("New Private Tab")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function XT(t){let e;return{c(){e=ne(t[7])},m(n,i){s(n,e,i)},p(n,i){i&128&&je(e,n[7])},d(n){n&&o(e)}}}function ZT(t){let e,n,i,l,r,a,u,m;return e=new Lt({props:{shortcut:"cmd+t",icon:"plus",$$slots:{default:[GT]},$$scope:{ctx:t}}}),e.$on("click",t[13]),i=new Lt({props:{shortcut:"cmd+shift+t",$$slots:{default:[KT]},$$scope:{ctx:t}}}),i.$on("click",t[14]),r=new Ei({}),u=new Lt({props:{shortcut:"cmd+shift+w",icon:"close",$$slots:{default:[XT]},$$scope:{ctx:t}}}),u.$on("click",t[15]),{c(){S(e.$$.fragment),n=d(),S(i.$$.fragment),l=d(),S(r.$$.fragment),a=d(),S(u.$$.fragment)},m(f,c){E(e,f,c),s(f,n,c),E(i,f,c),s(f,l,c),E(r,f,c),s(f,a,c),E(u,f,c),m=!0},p(f,c){let g={};c&268435456&&(g.$$scope={dirty:c,ctx:f}),e.$set(g);let b={};c&268435456&&(b.$$scope={dirty:c,ctx:f}),i.$set(b);let h={};c&268435584&&(h.$$scope={dirty:c,ctx:f}),u.$set(h)},i(f){m||($(e.$$.fragment,f),$(i.$$.fragment,f),$(r.$$.fragment,f),$(u.$$.fragment,f),m=!0)},o(f){y(e.$$.fragment,f),y(i.$$.fragment,f),y(r.$$.fragment,f),y(u.$$.fragment,f),m=!1},d(f){f&&(o(n),o(l),o(a)),C(e,f),C(i,f),C(r,f),C(u,f)}}}function JT(t){let e;return{c(){e=ne("New window")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function QT(t){let e;return{c(){e=ne("New private window")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function e5(t){let e;return{c(){e=ne("Close All Windows")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function t5(t){let e,n,i,l,r,a,u,m;return e=new Lt({props:{shortcut:"cmd+n",$$slots:{default:[JT]},$$scope:{ctx:t}}}),e.$on("click",t[17]),i=new Lt({props:{shortcut:"cmd+shift+n",$$slots:{default:[QT]},$$scope:{ctx:t}}}),i.$on("click",t[18]),r=new Ei({}),u=new Lt({props:{shortcut:"cmd+shift+q",$$slots:{default:[e5]},$$scope:{ctx:t}}}),u.$on("click",t[19]),{c(){S(e.$$.fragment),n=d(),S(i.$$.fragment),l=d(),S(r.$$.fragment),a=d(),S(u.$$.fragment)},m(f,c){E(e,f,c),s(f,n,c),E(i,f,c),s(f,l,c),E(r,f,c),s(f,a,c),E(u,f,c),m=!0},p(f,c){let g={};c&268435456&&(g.$$scope={dirty:c,ctx:f}),e.$set(g);let b={};c&268435456&&(b.$$scope={dirty:c,ctx:f}),i.$set(b);let h={};c&268435456&&(h.$$scope={dirty:c,ctx:f}),u.$set(h)},i(f){m||($(e.$$.fragment,f),$(i.$$.fragment,f),$(r.$$.fragment,f),$(u.$$.fragment,f),m=!0)},o(f){y(e.$$.fragment,f),y(i.$$.fragment,f),y(r.$$.fragment,f),y(u.$$.fragment,f),m=!1},d(f){f&&(o(n),o(l),o(a)),C(e,f),C(i,f),C(r,f),C(u,f)}}}function n5(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O,D,L,T,A,H,I,P,N,j,K,U,G,F,z,V,Q,le,ee,X,Z,ge,he,W,Y,J,pe,we;a=new De({props:{"data-name":"show-menu-button",$$slots:{default:[vT]},$$scope:{ctx:t}}}),a.$on("click",function(){_t(t[1].open)&&t[1].open.apply(this,arguments)}),m=new De({props:{"data-name":"show-menu-button",$$slots:{default:[$T]},$$scope:{ctx:t}}}),m.$on("click",function(){_t(t[2].open)&&t[2].open.apply(this,arguments)}),c=new De({props:{"data-name":"show-menu-button",$$slots:{default:[wT]},$$scope:{ctx:t}}}),c.$on("click",function(){_t(t[3].open)&&t[3].open.apply(this,arguments)});let ve={$$slots:{default:[xT]},$$scope:{ctx:t}};b=new qi({props:ve}),t[20](b);let ue={align:"center",$$slots:{default:[FT]},$$scope:{ctx:t}};v=new qi({props:ue}),t[21](v);let se={align:"right",$$slots:{default:[jT]},$$scope:{ctx:t}};k=new qi({props:se}),t[22](k),L=new De({props:{$$slots:{default:[zT]},$$scope:{ctx:t}}}),L.$on("click",function(){_t(t[0].open)&&t[0].open.apply(this,arguments)});let xe={$$slots:{default:[YT]},$$scope:{ctx:t}};A=new qi({props:xe}),t[23](A);let ke={type:"context",targetSelector:".div1",$$slots:{default:[ZT]},$$scope:{ctx:t}};Q=new qi({props:ke}),t[24](Q),Q.$on("close",t[16]);let ce={type:"context",targetSelector:".div2",$$slots:{default:[t5]},$$scope:{ctx:t}};return ee=new qi({props:ce}),t[25](ee),Z=new ze({props:{html:t[11]}}),he=new Fe({props:{props:t[8]}}),Y=new Fe({props:{props:t[9],title:"Menu Instance API",description:"The component exposes <em>this</em> property, to which a variable can be bound, creating an instance of the component, with the following API"}}),pe=new Fe({props:{props:t[10],title:"Item API"}}),{c(){e=p("h2"),e.textContent="Menu",n=d(),i=p("h3"),i.textContent="Normal menu",l=d(),r=p("div"),S(a.$$.fragment),u=d(),S(m.$$.fragment),f=d(),S(c.$$.fragment),g=d(),S(b.$$.fragment),h=d(),S(v.$$.fragment),w=d(),S(k.$$.fragment),_=d(),M=p("h3"),M.textContent="Close to the edge of the screen",O=d(),D=p("div"),S(L.$$.fragment),T=d(),S(A.$$.fragment),H=d(),I=p("h3"),I.textContent="Context menu",P=d(),N=p("p"),N.textContent="To open the context menu:",j=d(),K=p("ul"),K.innerHTML=`<li>Desktop: right-click on the boxes below
	</li><li>Mobile: long-press on them</li>`,U=d(),G=p("div"),G.textContent="Tab",F=d(),z=p("div"),z.textContent="Window",V=d(),S(Q.$$.fragment),le=d(),S(ee.$$.fragment),X=d(),S(Z.$$.fragment),ge=d(),S(he.$$.fragment),W=d(),S(Y.$$.fragment),J=d(),S(pe.$$.fragment),x(r,"class","docs-buttons-row"),x(D,"class","docs-menu-align-right"),x(G,"class","div div1"),x(z,"class","div div2")},m(be,Ae){s(be,e,Ae),s(be,n,Ae),s(be,i,Ae),s(be,l,Ae),s(be,r,Ae),E(a,r,null),q(r,u),E(m,r,null),q(r,f),E(c,r,null),s(be,g,Ae),E(b,be,Ae),s(be,h,Ae),E(v,be,Ae),s(be,w,Ae),E(k,be,Ae),s(be,_,Ae),s(be,M,Ae),s(be,O,Ae),s(be,D,Ae),E(L,D,null),s(be,T,Ae),E(A,be,Ae),s(be,H,Ae),s(be,I,Ae),s(be,P,Ae),s(be,N,Ae),s(be,j,Ae),s(be,K,Ae),s(be,U,Ae),s(be,G,Ae),s(be,F,Ae),s(be,z,Ae),s(be,V,Ae),E(Q,be,Ae),s(be,le,Ae),E(ee,be,Ae),s(be,X,Ae),E(Z,be,Ae),s(be,ge,Ae),E(he,be,Ae),s(be,W,Ae),E(Y,be,Ae),s(be,J,Ae),E(pe,be,Ae),we=!0},p(be,[Ae]){t=be;let ae={};Ae&268435456&&(ae.$$scope={dirty:Ae,ctx:t}),a.$set(ae);let $e={};Ae&268435456&&($e.$$scope={dirty:Ae,ctx:t}),m.$set($e);let re={};Ae&268435456&&(re.$$scope={dirty:Ae,ctx:t}),c.$set(re);let oe={};Ae&268435520&&(oe.$$scope={dirty:Ae,ctx:t}),b.$set(oe);let Oe={};Ae&268435520&&(Oe.$$scope={dirty:Ae,ctx:t}),v.$set(Oe);let Ke={};Ae&268435520&&(Ke.$$scope={dirty:Ae,ctx:t}),k.$set(Ke);let nt={};Ae&268435456&&(nt.$$scope={dirty:Ae,ctx:t}),L.$set(nt);let it={};Ae&268435456&&(it.$$scope={dirty:Ae,ctx:t}),A.$set(it);let lt={};Ae&268435584&&(lt.$$scope={dirty:Ae,ctx:t}),Q.$set(lt);let Ce={};Ae&268435456&&(Ce.$$scope={dirty:Ae,ctx:t}),ee.$set(Ce)},i(be){we||($(a.$$.fragment,be),$(m.$$.fragment,be),$(c.$$.fragment,be),$(b.$$.fragment,be),$(v.$$.fragment,be),$(k.$$.fragment,be),$(L.$$.fragment,be),$(A.$$.fragment,be),$(Q.$$.fragment,be),$(ee.$$.fragment,be),$(Z.$$.fragment,be),$(he.$$.fragment,be),$(Y.$$.fragment,be),$(pe.$$.fragment,be),we=!0)},o(be){y(a.$$.fragment,be),y(m.$$.fragment,be),y(c.$$.fragment,be),y(b.$$.fragment,be),y(v.$$.fragment,be),y(k.$$.fragment,be),y(L.$$.fragment,be),y(A.$$.fragment,be),y(Q.$$.fragment,be),y(ee.$$.fragment,be),y(Z.$$.fragment,be),y(he.$$.fragment,be),y(Y.$$.fragment,be),y(pe.$$.fragment,be),we=!1},d(be){be&&(o(e),o(n),o(i),o(l),o(r),o(g),o(h),o(w),o(_),o(M),o(O),o(D),o(T),o(H),o(I),o(P),o(N),o(j),o(K),o(U),o(G),o(F),o(z),o(V),o(le),o(X),o(ge),o(W),o(J)),C(a),C(m),C(c),t[20](null),C(b,be),t[21](null),C(v,be),t[22](null),C(k,be),C(L),t[23](null),C(A,be),t[24](null),C(Q,be),t[25](null),C(ee,be),C(Z,be),C(he,be),C(Y,be),C(pe,be)}}}function Nh(t){let{target:e,button:n}=t.detail;console.log(e.dataset,n.dataset)}function i5(t,e,n){let i=[{name:"align",type:["left","right","center"],default:"left",description:'Align horizontally with the target.<br>Context menus will default to "center" on mobile.'},{name:"valign",type:["top","bottom"],default:"bottom",description:'Show the menu above or below the target.<br>Context menus will default to "top" on mobile.<br>This may be overridden to ensure that the menu remains within the visible screen area.'},{name:"class",type:"string",description:"Additional css class name to be added to the component."},{name:"closeOnClick",type:["true","false"],default:"true",description:"By default - menu will close when an item is clicked. Setting this property false will disable auto-closing."},{name:"targetSelector",type:"string",required:!0,description:"This is only required when menu type is <em>context</em>.<br>It provides a selector to an element, in which the menu will appear (on mouse right-click)."},{name:"type",type:"context",description:"If type is set to <em>context</em> the menu will behave as context-menu."},{name:"bind:element",type:"element",description:"Exposes the HTML element of the component."},{name:"on:close",type:"function",description:"Triggered after the menu is closed."},{name:"on:open",type:"function",description:"Triggered after the menu is opened."}],l=[{name:"close",type:"function",description:"Closes the menu."},{name:"open",type:"function",description:"Opens the menu."}],r=[{name:"class",type:"string",description:"Additional css class name to be added to the menu item."},{name:"danger",description:"Button type: danger"},{name:"data-",description:"Dataset attribute allows to pass some data of a primitive type (string, number, boolean), which will be accessible in the <em>on:click</em> event listener, via button reference."},{name:"disabled",description:"Makes the menu item (button) <i>disabled</i>"},{name:"icon",type:"string",description:'Adds an icon, with this name, to the button (see <a href="#Icon">icons</a> section for icon names)'},{name:"id",type:"string",description:"Assign ID to the underlying button"},{name:"shortcut",type:"string",description:"A string representation of a keyboard shortcut. e.g. <em>cmd+alt+c</em>.<br>Keys should be separated by a <em>+</em> sign (which will be hidden in the rendered item).<br>Special keys (like cmd, alt, ctrl, shift, escape, enter, etc.) will be replaced by a corresponding symbol.<br>Keyboard handling must be done elsewhere."},{name:"success",description:"Button type: success"},{name:"title",type:"string",description:"Assign title to the underlying button"},{name:"warning",description:"Button type: warning"},{name:"bind:element",type:"element",description:"Exposes the HTML element of the component."},{name:"on:click",type:"function",description:"Triggered when the menu item was clicked.<br>The event handler function receives 1 argument - the click event.<br>By calling <em>event.preventDefault();</em> it is possible to prevent menu from auto closing when the item was clicked.<br><em>event.detail</em> will contain a <em>button</em> and <em>target</em> properties, that are references to the corresponding html elements.<br>It is possible to pass the data using <em>data-</em> attributes on the <em>target</em> element and on the <em>MenuItem</em>."}],a=`
<!-- Regular menu -->
<Menu bind:this="{menu1}">
    <MenuItem data-value="add-something"><Icon name="plus"/> Add some</MenuItem>
    <MenuItem>Add some more</MenuItem>
    <MenuSeparator />
    <MenuItem on:click="{closeSomething}"><Icon name="close"/> Close something</MenuItem>
</Menu>

<Button data-name="button-with-menu" on:click="{menu1.open}">Show menu</Button>

<!-- Context menu -->
<div class="div1">Tab</div>
<Menu type="context" targetSelector=".div1" bind:this="{menu2}">
    <MenuItem shortcut="cmd+n" on:click="{action1}">New window</MenuItem>
    <MenuItem shortcut="cmd+shift+n" on:click="{action2}">New private window</MenuItem>
    <MenuSeparator />
    <MenuItem shortcut="cmd+shift+q" on:click="{action3}">Close All Windows</MenuItem>
</Menu>

<script>
    let menu1, menu2;
    function closeSomething (e) {
        e.preventDefault();   // prevents menu auto-closing
        menu1.close();       // manually close the menu
    }
    function onMenuClick (e) {
        const { target, button } = e.detail;
        console.log(target.dataset, button.dataset);
    }
&lt;/script>
`,u,m,f,c,g,b,h="Close all things",v="Close all tabs",w,k;function _(G){G&&G.preventDefault();let F="Close all things";h===F?(n(6,h="Confirm Closing"),w=setTimeout(()=>n(6,h=F),2e3)):Promise.all([m.close(),f.close(),c.close()]).then(()=>{n(6,h=F),w&&clearTimeout(w),alert("Closed all things!")})}function M(){g.close().then(()=>alert("New Tab clicked"))}function O(){g.close().then(()=>alert("New Private Tab clicked"))}function D(G){G&&G.preventDefault();let F="Close all tabs";v===F?(n(7,v="Confirm Closing"),k=setTimeout(()=>n(7,v=F),2e3)):g.close().then(()=>alert("Closed all tabs!"))}function L(){n(7,v="Close all tabs"),k&&clearTimeout(k)}function T(){b.close().then(()=>alert("New Window clicked"))}function A(){b.close().then(()=>alert("New Private Window clicked"))}function H(){b.close().then(()=>alert("Windows closed!"))}function I(G){_e[G?"unshift":"push"](()=>{m=G,n(1,m)})}function P(G){_e[G?"unshift":"push"](()=>{f=G,n(2,f)})}function N(G){_e[G?"unshift":"push"](()=>{c=G,n(3,c)})}function j(G){_e[G?"unshift":"push"](()=>{u=G,n(0,u)})}function K(G){_e[G?"unshift":"push"](()=>{g=G,n(4,g)})}function U(G){_e[G?"unshift":"push"](()=>{b=G,n(5,b)})}return[u,m,f,c,g,b,h,v,i,l,r,a,_,M,O,D,L,T,A,H,I,P,N,j,K,U]}var Ph=class extends fe{constructor(e){super(),de(this,e,i5,n5,me,{})}},Fh=Ph;function M0(t,e,n){let i=t.slice();return i[4]=e[n],i}function E0(t,e,n){let i=t.slice();return i[4]=e[n],i}function C0(t){let e,n,i,l,r,a,u;return i=new zt({props:{name:t[4]}}),{c(){e=p("div"),n=p("div"),S(i.$$.fragment),l=d(),r=p("div"),r.textContent=`${t[4]}`,x(n,"class","icon-block-icon"),x(r,"class","icon-block-name"),x(e,"class","icon-block"),x(e,"title",a=t[4])},m(m,f){s(m,e,f),q(e,n),E(i,n,null),q(e,l),q(e,r),u=!0},p:Le,i(m){u||($(i.$$.fragment,m),u=!0)},o(m){y(i.$$.fragment,m),u=!1},d(m){m&&o(e),C(i)}}}function S0(t){let e,n,i,l,r,a,u,m;return i=new zt({props:{name:t[4]}}),{c(){e=p("div"),n=p("div"),S(i.$$.fragment),l=d(),r=p("div"),r.textContent=`${t[4]}`,a=d(),x(n,"class","icon-block-icon"),x(r,"class","icon-block-name"),x(e,"class","icon-block"),x(e,"title",u=t[4])},m(f,c){s(f,e,c),q(e,n),E(i,n,null),q(e,l),q(e,r),q(e,a),m=!0},p:Le,i(f){m||($(i.$$.fragment,f),m=!0)},o(f){y(i.$$.fragment,f),m=!1},d(f){f&&o(e),C(i)}}}function o5(t){let e;return{c(){e=ne("Custom Icon Button")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function s5(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M=Ye(Object.keys(Vo)),O=[];for(let H=0;H<M.length;H+=1)O[H]=C0(E0(t,M,H));let D=H=>y(O[H],1,1,()=>{O[H]=null}),L=Ye(Object.keys(Gi)),T=[];for(let H=0;H<L.length;H+=1)T[H]=S0(M0(t,L,H));let A=H=>y(T[H],1,1,()=>{T[H]=null});return m=new De({props:{icon:"customIcon",$$slots:{default:[o5]},$$scope:{ctx:t}}}),c=new ze({props:{html:t[3]}}),b=new Fe({props:{props:t[0]}}),v=new Fe({props:{props:t[1],title:"addIcon function",description:"The component exports a global <em>addIcon</em> function with the following arguments:"}}),k=new Fe({props:{props:t[2],title:"getIcon function",description:"The component exports a global <em>getIcon</em> function that can be used to retrieve the icon's svg code (as string). The function accepts the following argument:"}}),{c(){e=p("h2"),e.textContent="Icons",n=d(),i=p("div");for(let H=0;H<O.length;H+=1)O[H].c();l=d();for(let H=0;H<T.length;H+=1)T[H].c();r=d(),a=p("h2"),a.textContent="Custom Icon",u=d(),S(m.$$.fragment),f=d(),S(c.$$.fragment),g=d(),S(b.$$.fragment),h=d(),S(v.$$.fragment),w=d(),S(k.$$.fragment),x(i,"class","icons")},m(H,I){s(H,e,I),s(H,n,I),s(H,i,I);for(let P=0;P<O.length;P+=1)O[P]&&O[P].m(i,null);q(i,l);for(let P=0;P<T.length;P+=1)T[P]&&T[P].m(i,null);s(H,r,I),s(H,a,I),s(H,u,I),E(m,H,I),s(H,f,I),E(c,H,I),s(H,g,I),E(b,H,I),s(H,h,I),E(v,H,I),s(H,w,I),E(k,H,I),_=!0},p(H,[I]){if(I&0){M=Ye(Object.keys(Vo));let N;for(N=0;N<M.length;N+=1){let j=E0(H,M,N);O[N]?(O[N].p(j,I),$(O[N],1)):(O[N]=C0(j),O[N].c(),$(O[N],1),O[N].m(i,l))}for(We(),N=M.length;N<O.length;N+=1)D(N);Ve()}if(I&0){L=Ye(Object.keys(Gi));let N;for(N=0;N<L.length;N+=1){let j=M0(H,L,N);T[N]?(T[N].p(j,I),$(T[N],1)):(T[N]=S0(j),T[N].c(),$(T[N],1),T[N].m(i,null))}for(We(),N=L.length;N<T.length;N+=1)A(N);Ve()}let P={};I&512&&(P.$$scope={dirty:I,ctx:H}),m.$set(P)},i(H){if(!_){for(let I=0;I<M.length;I+=1)$(O[I]);for(let I=0;I<L.length;I+=1)$(T[I]);$(m.$$.fragment,H),$(c.$$.fragment,H),$(b.$$.fragment,H),$(v.$$.fragment,H),$(k.$$.fragment,H),_=!0}},o(H){O=O.filter(Boolean);for(let I=0;I<O.length;I+=1)y(O[I]);T=T.filter(Boolean);for(let I=0;I<T.length;I+=1)y(T[I]);y(m.$$.fragment,H),y(c.$$.fragment,H),y(b.$$.fragment,H),y(v.$$.fragment,H),y(k.$$.fragment,H),_=!1},d(H){H&&(o(e),o(n),o(i),o(r),o(a),o(u),o(f),o(g),o(h),o(w)),St(O,H),St(T,H),C(m,H),C(c,H),C(b,H),C(v,H),C(k,H)}}}function l5(t){return Gg("customIcon","<[CUSTOM ICON]>"),[[{name:"name",type:"string",description:"Name of the icon."}],[{name:"name",type:"string",description:"Name of the custom icon."},{name:"svg",type:"string",description:"SVG code."}],[{name:"name",type:"string",description:"Name of the icon."}],`
<Icon name="alert"/>
<Icon name="customIcon"/>

<script>
	import { addIcon } from '@perfectthings/ui';

	addIcon('customIcon', '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">...</svg>');
&lt;/script>
`]}var qh=class extends fe{constructor(e){super(),de(this,e,l5,s5,me,{})}},Bh=qh;function r5(t){let e;return{c(){e=ne("Tag 123")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function a5(t){let e;return{c(){e=ne("Closable tag")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function u5(t){let e;return{c(){e=ne("Add tag")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function f5(t){let e;return{c(){e=ne("Info")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function m5(t){let e;return{c(){e=ne("Warning")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function d5(t){let e;return{c(){e=ne("Danger")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function c5(t){let e;return{c(){e=ne("Success")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function p5(t){let e;return{c(){e=ne("Custom color")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function h5(t){let e;return{c(){e=ne("Round tag")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function g5(t){let e;return{c(){e=ne("Click me")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function b5(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O,D,L,T,A,H,I,P,N,j,K,U,G,F,z,V,Q,le;return r=new cn({props:{$$slots:{default:[r5]},$$scope:{ctx:t}}}),f=new cn({props:{icon:"close",$$slots:{default:[a5]},$$scope:{ctx:t}}}),g=new cn({props:{icon:"plus",$$slots:{default:[u5]},$$scope:{ctx:t}}}),w=new cn({props:{color:"info",$$slots:{default:[f5]},$$scope:{ctx:t}}}),_=new cn({props:{color:"warning",$$slots:{default:[m5]},$$scope:{ctx:t}}}),O=new cn({props:{color:"danger",$$slots:{default:[d5]},$$scope:{ctx:t}}}),L=new cn({props:{color:"success",$$slots:{default:[c5]},$$scope:{ctx:t}}}),A=new cn({props:{color:"#ac6453",$$slots:{default:[p5]},$$scope:{ctx:t}}}),N=new cn({props:{round:!0,$$slots:{default:[h5]},$$scope:{ctx:t}}}),G=new cn({props:{clickable:!0,$$slots:{default:[g5]},$$scope:{ctx:t}}}),G.$on("click",_5),z=new ze({props:{html:t[1]}}),Q=new Fe({props:{props:t[0]}}),{c(){e=p("h2"),e.textContent="Tag",n=d(),i=p("h3"),i.textContent="Normal",l=d(),S(r.$$.fragment),a=d(),u=p("h3"),u.textContent="With icon",m=d(),S(f.$$.fragment),c=d(),S(g.$$.fragment),b=d(),h=p("h3"),h.textContent="Colourful",v=d(),S(w.$$.fragment),k=d(),S(_.$$.fragment),M=d(),S(O.$$.fragment),D=d(),S(L.$$.fragment),T=d(),S(A.$$.fragment),H=d(),I=p("h3"),I.textContent="Round",P=d(),S(N.$$.fragment),j=d(),K=p("h3"),K.textContent="With click action",U=d(),S(G.$$.fragment),F=d(),S(z.$$.fragment),V=d(),S(Q.$$.fragment)},m(ee,X){s(ee,e,X),s(ee,n,X),s(ee,i,X),s(ee,l,X),E(r,ee,X),s(ee,a,X),s(ee,u,X),s(ee,m,X),E(f,ee,X),s(ee,c,X),E(g,ee,X),s(ee,b,X),s(ee,h,X),s(ee,v,X),E(w,ee,X),s(ee,k,X),E(_,ee,X),s(ee,M,X),E(O,ee,X),s(ee,D,X),E(L,ee,X),s(ee,T,X),E(A,ee,X),s(ee,H,X),s(ee,I,X),s(ee,P,X),E(N,ee,X),s(ee,j,X),s(ee,K,X),s(ee,U,X),E(G,ee,X),s(ee,F,X),E(z,ee,X),s(ee,V,X),E(Q,ee,X),le=!0},p(ee,[X]){let Z={};X&4&&(Z.$$scope={dirty:X,ctx:ee}),r.$set(Z);let ge={};X&4&&(ge.$$scope={dirty:X,ctx:ee}),f.$set(ge);let he={};X&4&&(he.$$scope={dirty:X,ctx:ee}),g.$set(he);let W={};X&4&&(W.$$scope={dirty:X,ctx:ee}),w.$set(W);let Y={};X&4&&(Y.$$scope={dirty:X,ctx:ee}),_.$set(Y);let J={};X&4&&(J.$$scope={dirty:X,ctx:ee}),O.$set(J);let pe={};X&4&&(pe.$$scope={dirty:X,ctx:ee}),L.$set(pe);let we={};X&4&&(we.$$scope={dirty:X,ctx:ee}),A.$set(we);let ve={};X&4&&(ve.$$scope={dirty:X,ctx:ee}),N.$set(ve);let ue={};X&4&&(ue.$$scope={dirty:X,ctx:ee}),G.$set(ue)},i(ee){le||($(r.$$.fragment,ee),$(f.$$.fragment,ee),$(g.$$.fragment,ee),$(w.$$.fragment,ee),$(_.$$.fragment,ee),$(O.$$.fragment,ee),$(L.$$.fragment,ee),$(A.$$.fragment,ee),$(N.$$.fragment,ee),$(G.$$.fragment,ee),$(z.$$.fragment,ee),$(Q.$$.fragment,ee),le=!0)},o(ee){y(r.$$.fragment,ee),y(f.$$.fragment,ee),y(g.$$.fragment,ee),y(w.$$.fragment,ee),y(_.$$.fragment,ee),y(O.$$.fragment,ee),y(L.$$.fragment,ee),y(A.$$.fragment,ee),y(N.$$.fragment,ee),y(G.$$.fragment,ee),y(z.$$.fragment,ee),y(Q.$$.fragment,ee),le=!1},d(ee){ee&&(o(e),o(n),o(i),o(l),o(a),o(u),o(m),o(c),o(b),o(h),o(v),o(k),o(M),o(D),o(T),o(H),o(I),o(P),o(j),o(K),o(U),o(F),o(V)),C(r,ee),C(f,ee),C(g,ee),C(w,ee),C(_,ee),C(O,ee),C(L,ee),C(A,ee),C(N,ee),C(G,ee),C(z,ee),C(Q,ee)}}}function _5(){alert("Clicked!")}function v5(t){return[[{name:"class",type:"string",description:"Additional css class name to be added to the component."},{name:"clickable",description:"When passed, the tag will be interactive."},{name:"color",type:"string",description:"Tag color. Standard variations are included (info, warning, danger, success). A color hash or name can also be provided."},{name:"disabled",description:"Makes the tag <i>disabled</i>"},{name:"icon",type:"string",description:"Icon name to display in the tag."},{name:"bind:element",type:"element",description:"Exposes the HTML element of the component."},{name:"on:click",type:"function",description:"Triggered when the tag is clicked."}],`
<Tag icon="close">Closable tag</Tag>
<Tag color="success">Success</Tag>
<Tag color="#132231">Custom color</Tag>
<Tag on:click="{onclick}">Click me</Tag>

<script>
	function onclick () {
		alert('Clicked!');
	}
&lt;/script>
`]}var Rh=class extends fe{constructor(e){super(),de(this,e,v5,b5,me,{})}},jh=Rh;var fs={};gd(fs,{AlignItem:()=>A0,Animate:()=>I0,Blink:()=>O0,Debounce:()=>x0,DeepCopy:()=>H0,Empty:()=>P0,FormatDate:()=>N0,Fuzzy:()=>F0,GetMouseX:()=>q0,GetMouseXY:()=>B0,GetMouseY:()=>R0,Guid:()=>j0,IsColorDark:()=>V0,IsInScrollable:()=>z0,IsMobile:()=>W0,Pluck:()=>U0,RoundAmount:()=>Y0,Throttle:()=>G0,TimeAgo:()=>K0});function L0(t){let e,n;return e=new Fe({props:{props:t[3],title:"Config object schema"}}),{c(){S(e.$$.fragment)},m(i,l){E(e,i,l),n=!0},p(i,l){let r={};l&8&&(r.props=i[3]),e.$set(r)},i(i){n||($(e.$$.fragment,i),n=!0)},o(i){y(e.$$.fragment,i),n=!1},d(i){C(e,i)}}}function D0(t){let e,n;return e=new ze({props:{nohr:!0,html:t[2]}}),{c(){S(e.$$.fragment)},m(i,l){E(e,i,l),n=!0},p(i,l){let r={};l&4&&(r.html=i[2]),e.$set(r)},i(i){n||($(e.$$.fragment,i),n=!0)},o(i){y(e.$$.fragment,i),n=!1},d(i){C(e,i)}}}function $5(t){let e,n,i,l,r,a,u,m,f,c=t[5].default,g=Dt(c,t,t[4],null),b=t[3]&&L0(t),h=t[2]&&D0(t);return{c(){e=p("div"),n=p("h3"),i=p("a"),l=ne(t[1]),a=d(),g&&g.c(),u=d(),b&&b.c(),m=d(),h&&h.c(),x(i,"href",r="#Utils/"+t[0]),x(n,"id",t[0]),x(e,"class","utility")},m(v,w){s(v,e,w),q(e,n),q(n,i),q(i,l),q(e,a),g&&g.m(e,null),q(e,u),b&&b.m(e,null),q(e,m),h&&h.m(e,null),f=!0},p(v,[w]){(!f||w&2)&&je(l,v[1]),(!f||w&1&&r!==(r="#Utils/"+v[0]))&&x(i,"href",r),(!f||w&1)&&x(n,"id",v[0]),g&&g.p&&(!f||w&16)&&It(g,c,v,v[4],f?At(c,v[4],w,null):Ot(v[4]),null),v[3]?b?(b.p(v,w),w&8&&$(b,1)):(b=L0(v),b.c(),$(b,1),b.m(e,m)):b&&(We(),y(b,1,1,()=>{b=null}),Ve()),v[2]?h?(h.p(v,w),w&4&&$(h,1)):(h=D0(v),h.c(),$(h,1),h.m(e,null)):h&&(We(),y(h,1,1,()=>{h=null}),Ve())},i(v){f||($(g,v),$(b),$(h),f=!0)},o(v){y(g,v),y(b),y(h),f=!1},d(v){v&&o(e),g&&g.d(v),b&&b.d(),h&&h.d()}}}function w5(t,e,n){let{$$slots:i={},$$scope:l}=e,{id:r=""}=e,{name:a=""}=e,{example:u=void 0}=e,{api:m=void 0}=e;return t.$$set=f=>{"id"in f&&n(0,r=f.id),"name"in f&&n(1,a=f.name),"example"in f&&n(2,u=f.example),"api"in f&&n(3,m=f.api),"$$scope"in f&&n(4,l=f.$$scope)},[r,a,u,m,l,i]}var zh=class extends fe{constructor(e){super(),de(this,e,w5,$5,me,{id:0,name:1,example:2,api:3})}},ut=zh;function y5(t){let e,n,i;return{c(){e=p("p"),e.textContent=`Aligns an element to another element,
		ensuring that the aligned element remains within the viewport.`,n=d(),i=p("ul"),i.innerHTML=`<li><em>config</em> - an object with the configuration (see below).
		</li><li>Returns <em>position</em> - whether the aligned item is above (top) or below (bottom) the target.</li>`},m(l,r){s(l,e,r),s(l,n,r),s(l,i,r)},p:Le,d(l){l&&(o(e),o(n),o(i))}}}function k5(t){let e,n;return e=new ut({props:{id:"AlignItem",name:"alignItem(config)",example:t[0],api:t[1],$$slots:{default:[y5]},$$scope:{ctx:t}}}),{c(){S(e.$$.fragment)},m(i,l){E(e,i,l),n=!0},p(i,[l]){let r={};l&4&&(r.$$scope={dirty:l,ctx:i}),e.$set(r)},i(i){n||($(e.$$.fragment,i),n=!0)},o(i){y(e.$$.fragment,i),n=!1},d(i){C(e,i)}}}function T5(t){return[`
<script>
	const button = document.querySelector('.button1');
	const popup = document.querySelector('.popup1');
	const pos = alignItem({
		element: popup,
		target: button,
		alignH: 'left',
		alignV: 'bottom',
	});
	// it may happen that there is not enough space to align the popup as requested
	// in this case, the popup will be aligned to the opposite side
	console.log('position:', pos); // 'top'
&lt;/script>
`,[{name:"element",type:"HTMLElement",description:"main element that will be aligned."},{name:"target",type:"HTMLElement",description:"target element to align to."},{name:"alignH",type:["left","right","center"],default:"left",description:"Horizontal position"},{name:"offsetH",type:"number",default:0,description:"horizontal offset of the aligned position (in pixels)."},{name:"alignV",type:["top","bottom"],default:"bottom",description:"Vertical position"},{name:"offsetV",type:"number",default:2,description:"vertical offset of the aligned position (in pixels)."},{name:"viewportPadding",type:"number",default:10,description:"padding from the viewport (in pixels)."},{name:"setMinWidthToTarget",type:"boolean",default:!1,description:"whether to set the minWidth of the element to the width of the target."}]]}var Wh=class extends fe{constructor(e){super(),de(this,e,T5,k5,me,{})}},A0=Wh;function M5(t){let e,n,i;return{c(){e=p("p"),e.textContent="Animates an element from one state to another. Shortcut & wrapper for the native javascript animation.",n=d(),i=p("p"),i.textContent="Returns a promise which resolves when the animation finishes."},m(l,r){s(l,e,r),s(l,n,r),s(l,i,r)},p:Le,d(l){l&&(o(e),o(n),o(i))}}}function E5(t){let e,n;return e=new ut({props:{id:"Animate",name:"animate(element, from, to, options?)",example:t[0],api:t[1],$$slots:{default:[M5]},$$scope:{ctx:t}}}),{c(){S(e.$$.fragment)},m(i,l){E(e,i,l),n=!0},p(i,[l]){let r={};l&4&&(r.$$scope={dirty:l,ctx:i}),e.$set(r)},i(i){n||($(e.$$.fragment,i),n=!0)},o(i){y(e.$$.fragment,i),n=!1},d(i){C(e,i)}}}function C5(t){return[`
	<script>
		const el = document.querySelector('.some-div');
		animate(el, { opacity: 0 }, { opacity: 1 }, { duration: 1000 })
			.then(() => console.log('animation finished'));
	&lt;/script>
	`,[{name:"element",type:"HTMLElement",description:"An element that will be animated."},{name:"from",type:"object",description:"object of properties to animate from, e.g. <em>&lbrace; opacity: 0 &rbrace;</em>"},{name:"to",type:"object",description:"object of properties to animate to, e.g. <em>&lbrace; opacity: 1 &rbrace;</em>"},{name:"options",type:"object",description:'optional object of animation options: duration, easing, fill (see more at <a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options">MDN</a>).'}]]}var Vh=class extends fe{constructor(e){super(),de(this,e,C5,E5,me,{})}},I0=Vh;function S5(t){let e,n,i;return{c(){e=p("p"),e.textContent="Animates an element by changing its opacity from 0.5 to 1.",n=d(),i=p("ul"),i.innerHTML=`<li><em>element</em> - HTMLElement to animate
		</li><li><em>duration</em> - how long to animate (in ms).
		</li><li>Returns a promise which resolves when the animation finishes.</li>`},m(l,r){s(l,e,r),s(l,n,r),s(l,i,r)},p:Le,d(l){l&&(o(e),o(n),o(i))}}}function L5(t){let e,n;return e=new ut({props:{id:"Blink",name:"blink(element, duration = 160)",example:t[0],$$slots:{default:[S5]},$$scope:{ctx:t}}}),{c(){S(e.$$.fragment)},m(i,l){E(e,i,l),n=!0},p(i,[l]){let r={};l&2&&(r.$$scope={dirty:l,ctx:i}),e.$set(r)},i(i){n||($(e.$$.fragment,i),n=!0)},o(i){y(e.$$.fragment,i),n=!1},d(i){C(e,i)}}}function D5(t){return[`
<script>
	const el = document.querySelector('.some-div');
	blink(el).then(() => console.log('animation finished'));
&lt;/script>
`]}var Uh=class extends fe{constructor(e){super(),de(this,e,D5,L5,me,{})}},O0=Uh;function A5(t){let e,n,i,l,r;return{c(){e=p("p"),e.innerHTML="The &quot;debounced&quot; function will only be called after it has not been called for <em>timeout</em> milliseconds.",n=d(),i=p("ul"),i.innerHTML=`<li><em>fn</em> - function to debounce.
		</li><li><em>timeout</em> - milliseconds to wait before calling <em>fn</em>.</li>`,l=d(),r=p("p"),r.innerHTML=`This is a useful e.g. when attaching an event listener to an event that is fired repeatedly &amp; quickly (like scroll or resize).<br/>
		Attaching a heavy function to such an event can cause performance issues, so debouncing it will ensure
		that the function is only called after it has not been called for <em>timeout</em> milliseconds.`},m(a,u){s(a,e,u),s(a,n,u),s(a,i,u),s(a,l,u),s(a,r,u)},p:Le,d(a){a&&(o(e),o(n),o(i),o(l),o(r))}}}function I5(t){let e,n;return e=new ut({props:{id:"Debounce",name:"debounce(fn, timeout = 300)",example:t[0],$$slots:{default:[A5]},$$scope:{ctx:t}}}),{c(){S(e.$$.fragment)},m(i,l){E(e,i,l),n=!0},p(i,[l]){let r={};l&2&&(r.$$scope={dirty:l,ctx:i}),e.$set(r)},i(i){n||($(e.$$.fragment,i),n=!0)},o(i){y(e.$$.fragment,i),n=!1},d(i){C(e,i)}}}function O5(t){return[`
<script>
	function original() {
		console.log('resizing has stopped for 300ms');
	}
	const debounced = debounce(original);
	window.addEventListener('resize', debounced);
&lt;/script>
`]}var Yh=class extends fe{constructor(e){super(),de(this,e,O5,I5,me,{})}},x0=Yh;function x5(t){let e,n,i;return{c(){e=p("p"),e.innerHTML="This is just an alias for an oddly-named native function: <b>structuredClone</b>.",n=d(),i=p("ul"),i.innerHTML="<li><em>object</em> - any object or array to clone.</li>"},m(l,r){s(l,e,r),s(l,n,r),s(l,i,r)},p:Le,d(l){l&&(o(e),o(n),o(i))}}}function H5(t){let e,n;return e=new ut({props:{id:"DeepCopy",name:"deepCopy(object)",example:t[0],$$slots:{default:[x5]},$$scope:{ctx:t}}}),{c(){S(e.$$.fragment)},m(i,l){E(e,i,l),n=!0},p(i,[l]){let r={};l&2&&(r.$$scope={dirty:l,ctx:i}),e.$set(r)},i(i){n||($(e.$$.fragment,i),n=!0)},o(i){y(e.$$.fragment,i),n=!1},d(i){C(e,i)}}}function P5(t){return[`
<script>
	const original = {a: 1, b: 2, c: 3};
	const clone = deepCopy(original);
&lt;/script>
`]}var Gh=class extends fe{constructor(e){super(),de(this,e,P5,H5,me,{})}},H0=Gh;function N5(t){let e,n,i,l,r,a,u;return{c(){e=p("p"),e.innerHTML="Similar to PHP&#39;s <em>empty</em> - returns true if a value is empty.",n=d(),i=p("ul"),i.innerHTML="<li><em>value</em> - any data type.</li>",l=d(),r=p("p"),r.innerHTML="Empty will return true if the <em>value</em> is one of the following:",a=d(),u=p("ul"),u.innerHTML="<li><em>undefined</em> </li><li><em>null</em> </li><li><em>empty string</em> </li><li><em>empty array</em> </li><li><em>empty object</em></li>"},m(m,f){s(m,e,f),s(m,n,f),s(m,i,f),s(m,l,f),s(m,r,f),s(m,a,f),s(m,u,f)},p:Le,d(m){m&&(o(e),o(n),o(i),o(l),o(r),o(a),o(u))}}}function F5(t){let e,n;return e=new ut({props:{id:"Empty",name:"empty(value)",example:t[0],$$slots:{default:[N5]},$$scope:{ctx:t}}}),{c(){S(e.$$.fragment)},m(i,l){E(e,i,l),n=!0},p(i,[l]){let r={};l&2&&(r.$$scope={dirty:l,ctx:i}),e.$set(r)},i(i){n||($(e.$$.fragment,i),n=!0)},o(i){y(e.$$.fragment,i),n=!1},d(i){C(e,i)}}}function q5(t){return[`
<script>
	empty();        // true
	empty(null);    // true
	empty('');      // true
	empty([]);      // true
	empty({});      // true

	empty(0);       // false
	empty(false);   // false
	empty('0');     // false
	empty([0]);     // false
	empty({a: 0});  // false
&lt;/script>
`]}var Kh=class extends fe{constructor(e){super(),de(this,e,q5,F5,me,{})}},P0=Kh;function B5(t){let e;return{c(){e=p("p"),e.innerHTML="Converts date to a string in the format: <em>YYYY-MM-DD HH:mm</em>."},m(n,i){s(n,e,i)},p:Le,d(n){n&&o(e)}}}function R5(t){let e,n;return e=new ut({props:{id:"FormatDate",name:"formatDate(date)",example:t[0],$$slots:{default:[B5]},$$scope:{ctx:t}}}),{c(){S(e.$$.fragment)},m(i,l){E(e,i,l),n=!0},p(i,[l]){let r={};l&2&&(r.$$scope={dirty:l,ctx:i}),e.$set(r)},i(i){n||($(e.$$.fragment,i),n=!0)},o(i){y(e.$$.fragment,i),n=!1},d(i){C(e,i)}}}function j5(t){return[`
<script>
	formatDate(new Date()); // 2020-01-01 12:00
&lt;/script>
`]}var Xh=class extends fe{constructor(e){super(),de(this,e,j5,R5,me,{})}},N0=Xh;function z5(t){let e,n,i,l,r;return{c(){e=p("p"),e.innerHTML="Fuzzy finds if <em>haystack</em> contains characters from the <em>needle</em> in the same order.",n=d(),i=p("ul"),i.innerHTML=`<li><em>haystack</em> - a string to be searched in.
		</li><li><em>needle</em> - a string to search for.</li>`,l=d(),r=p("p"),r.textContent="It's useful for filtering lists of items by a search string."},m(a,u){s(a,e,u),s(a,n,u),s(a,i,u),s(a,l,u),s(a,r,u)},p:Le,d(a){a&&(o(e),o(n),o(i),o(l),o(r))}}}function W5(t){let e,n;return e=new ut({props:{id:"Fuzzy",name:"fuzzy(haystack = '', needle = '')",example:t[0],$$slots:{default:[z5]},$$scope:{ctx:t}}}),{c(){S(e.$$.fragment)},m(i,l){E(e,i,l),n=!0},p(i,[l]){let r={};l&2&&(r.$$scope={dirty:l,ctx:i}),e.$set(r)},i(i){n||($(e.$$.fragment,i),n=!0)},o(i){y(e.$$.fragment,i),n=!1},d(i){C(e,i)}}}function V5(t){return[`
<script>
	fuzzy('hello world', 'hell');    // true
	fuzzy('hello world', 'helloo');  // true
	fuzzy('hello world', 'helll');   // true
	fuzzy('hello world', 'hellooo'); // false
&lt;/script>
`]}var Zh=class extends fe{constructor(e){super(),de(this,e,V5,W5,me,{})}},F0=Zh;function U5(t){let e;return{c(){e=p("p"),e.textContent="Returns the mouse X position. Event is standardised across platforms (touch & pointer)"},m(n,i){s(n,e,i)},p:Le,d(n){n&&o(e)}}}function Y5(t){let e,n;return e=new ut({props:{id:"GetMouseX",name:"getMouseX(event)",example:t[0],$$slots:{default:[U5]},$$scope:{ctx:t}}}),{c(){S(e.$$.fragment)},m(i,l){E(e,i,l),n=!0},p(i,[l]){let r={};l&2&&(r.$$scope={dirty:l,ctx:i}),e.$set(r)},i(i){n||($(e.$$.fragment,i),n=!0)},o(i){y(e.$$.fragment,i),n=!1},d(i){C(e,i)}}}function G5(t){return[`
<script>
	document.addEventListener('mousedown', e => {
		const x = getMouseX(e);
		console.log(x);
	});
&lt;/script>
`]}var Jh=class extends fe{constructor(e){super(),de(this,e,G5,Y5,me,{})}},q0=Jh;function K5(t){let e;return{c(){e=p("p"),e.textContent="Returns the mouse XY position (as an array: [x, y]). Event is standardised across platforms (touch & pointer)"},m(n,i){s(n,e,i)},p:Le,d(n){n&&o(e)}}}function X5(t){let e,n;return e=new ut({props:{id:"GetMouseXY",name:"getMouseXY(event)",example:t[0],$$slots:{default:[K5]},$$scope:{ctx:t}}}),{c(){S(e.$$.fragment)},m(i,l){E(e,i,l),n=!0},p(i,[l]){let r={};l&2&&(r.$$scope={dirty:l,ctx:i}),e.$set(r)},i(i){n||($(e.$$.fragment,i),n=!0)},o(i){y(e.$$.fragment,i),n=!1},d(i){C(e,i)}}}function Z5(t){return[`
<script>
	document.addEventListener('mousedown', e => {
		const [x, y] = getMouseXY(e);
		console.log(x, y);
	});
&lt;/script>
`]}var Qh=class extends fe{constructor(e){super(),de(this,e,Z5,X5,me,{})}},B0=Qh;function J5(t){let e;return{c(){e=p("p"),e.textContent="Returns the mouse Y position. Event is standardised across platforms (touch & pointer)"},m(n,i){s(n,e,i)},p:Le,d(n){n&&o(e)}}}function Q5(t){let e,n;return e=new ut({props:{id:"GetMouseY",name:"getMouseY(event)",example:t[0],$$slots:{default:[J5]},$$scope:{ctx:t}}}),{c(){S(e.$$.fragment)},m(i,l){E(e,i,l),n=!0},p(i,[l]){let r={};l&2&&(r.$$scope={dirty:l,ctx:i}),e.$set(r)},i(i){n||($(e.$$.fragment,i),n=!0)},o(i){y(e.$$.fragment,i),n=!1},d(i){C(e,i)}}}function e6(t){return[`
<script>
	document.addEventListener('mousedown', e => {
		const y = getMouseY(e);
		console.log(y);
	});
&lt;/script>
`]}var eg=class extends fe{constructor(e){super(),de(this,e,e6,Q5,me,{})}},R0=eg;function t6(t){let e;return{c(){e=p("p"),e.textContent="Generates a globally unique identifier."},m(n,i){s(n,e,i)},p:Le,d(n){n&&o(e)}}}function n6(t){let e,n;return e=new ut({props:{id:"Guid",name:"guid()",example:t[0],$$slots:{default:[t6]},$$scope:{ctx:t}}}),{c(){S(e.$$.fragment)},m(i,l){E(e,i,l),n=!0},p(i,[l]){let r={};l&2&&(r.$$scope={dirty:l,ctx:i}),e.$set(r)},i(i){n||($(e.$$.fragment,i),n=!0)},o(i){y(e.$$.fragment,i),n=!1},d(i){C(e,i)}}}function i6(t){return[`
<script>
	const id = guid();
	console.log(id);	// 9748bb50-0e54-4f4d-b6a2-c0ea0d576cd4
&lt;/script>
`]}var tg=class extends fe{constructor(e){super(),de(this,e,i6,n6,me,{})}},j0=tg;function o6(t){let e,n,i;return{c(){e=p("p"),e.textContent="Checks whether the given node is inside a scrollable element.",n=d(),i=p("p"),i.innerHTML=`This function is useful when determining whether a swipe event should be allowed
		to start on a given element.<br/>
		If an element is inside a scrollable element, the swipe event will not start,
		allowing the browser to trigger the normal scrolling.`},m(l,r){s(l,e,r),s(l,n,r),s(l,i,r)},p:Le,d(l){l&&(o(e),o(n),o(i))}}}function s6(t){let e,n;return e=new ut({props:{id:"IsInScrollable",name:"isInScrollable(node)",example:t[0],$$slots:{default:[o6]},$$scope:{ctx:t}}}),{c(){S(e.$$.fragment)},m(i,l){E(e,i,l),n=!0},p(i,[l]){let r={};l&2&&(r.$$scope={dirty:l,ctx:i}),e.$set(r)},i(i){n||($(e.$$.fragment,i),n=!0)},o(i){y(e.$$.fragment,i),n=!1},d(i){C(e,i)}}}function l6(t){return[`
<script>
	const isInScrl = isInScrollable(document.querySelector('.element'));
&lt;/script>
`]}var ng=class extends fe{constructor(e){super(),de(this,e,l6,s6,me,{})}},z0=ng;function r6(t){let e;return{c(){e=p("p"),e.textContent="Checks if the current platform is mobile."},m(n,i){s(n,e,i)},p:Le,d(n){n&&o(e)}}}function a6(t){let e,n;return e=new ut({props:{id:"IsMobile",name:"isMobile()",example:t[0],$$slots:{default:[r6]},$$scope:{ctx:t}}}),{c(){S(e.$$.fragment)},m(i,l){E(e,i,l),n=!0},p(i,[l]){let r={};l&2&&(r.$$scope={dirty:l,ctx:i}),e.$set(r)},i(i){n||($(e.$$.fragment,i),n=!0)},o(i){y(e.$$.fragment,i),n=!1},d(i){C(e,i)}}}function u6(t){return[`
<script>
	const mob = isMobile();
	console.log(mob);  // false
&lt;/script>
`]}var ig=class extends fe{constructor(e){super(),de(this,e,u6,a6,me,{})}},W0=ig;function f6(t){let e;return{c(){e=p("p"),e.textContent="Checks if a colour is dark or light (so that e.g. a text colour can have a better contrast against the background)."},m(n,i){s(n,e,i)},p:Le,d(n){n&&o(e)}}}function m6(t){let e,n;return e=new ut({props:{id:"IsColorDark",name:"isColorDark(hex)",example:t[0],$$slots:{default:[f6]},$$scope:{ctx:t}}}),{c(){S(e.$$.fragment)},m(i,l){E(e,i,l),n=!0},p(i,[l]){let r={};l&2&&(r.$$scope={dirty:l,ctx:i}),e.$set(r)},i(i){n||($(e.$$.fragment,i),n=!0)},o(i){y(e.$$.fragment,i),n=!1},d(i){C(e,i)}}}function d6(t){return[`
<script>
	isColorDark('#fff'); // false
	isColorDark('#000'); // true
&lt;/script>
`]}var og=class extends fe{constructor(e){super(),de(this,e,d6,m6,me,{})}},V0=og;function c6(t){let e,n,i;return{c(){e=p("p"),e.textContent="Creates a new object with only the plucked properties from the original object..",n=d(),i=p("ul"),i.innerHTML=`<li><em>object</em> - object to pluck from.
		</li><li><em>props</em> - an array of property names.</li>`},m(l,r){s(l,e,r),s(l,n,r),s(l,i,r)},p:Le,d(l){l&&(o(e),o(n),o(i))}}}function p6(t){let e,n;return e=new ut({props:{id:"Pluck",name:"pluck(object, props)",example:t[0],$$slots:{default:[c6]},$$scope:{ctx:t}}}),{c(){S(e.$$.fragment)},m(i,l){E(e,i,l),n=!0},p(i,[l]){let r={};l&2&&(r.$$scope={dirty:l,ctx:i}),e.$set(r)},i(i){n||($(e.$$.fragment,i),n=!0)},o(i){y(e.$$.fragment,i),n=!1},d(i){C(e,i)}}}function h6(t){return[`
<script>
	pluck({ a: 1, b: 2, c: 3 }, ['a', 'b']);	// { a: 1, b: 2 }
&lt;/script>
`]}var sg=class extends fe{constructor(e){super(),de(this,e,h6,p6,me,{})}},U0=sg;function g6(t){let e;return{c(){e=p("p"),e.textContent="Rounds a number to 2 decimal places (by default)."},m(n,i){s(n,e,i)},p:Le,d(n){n&&o(e)}}}function b6(t){let e,n;return e=new ut({props:{id:"RoundAmount",name:"roundAmount(value, precision = 2)",example:t[0],$$slots:{default:[g6]},$$scope:{ctx:t}}}),{c(){S(e.$$.fragment)},m(i,l){E(e,i,l),n=!0},p(i,[l]){let r={};l&2&&(r.$$scope={dirty:l,ctx:i}),e.$set(r)},i(i){n||($(e.$$.fragment,i),n=!0)},o(i){y(e.$$.fragment,i),n=!1},d(i){C(e,i)}}}function _6(t){return[`
<script>
	roundAmount(123.456789); // 123.46
&lt;/script>
`]}var lg=class extends fe{constructor(e){super(),de(this,e,_6,b6,me,{})}},Y0=lg;function v6(t){let e,n,i,l,r,a,u,m,f;return{c(){e=p("p"),e.innerHTML="The &quot;throttled&quot; function will only be called once every <em>timeout</em> milliseconds.",n=d(),i=p("ul"),i.innerHTML=`<li><em>fn</em> - function to debounce.
		</li><li><em>timeout</em> - milliseconds to wait before calling <em>fn</em>.</li>`,l=d(),r=p("p"),r.innerHTML=`This is slightly different to <em>debounce</em> but serves a similar purpose - performance optimization.<br/>
		It&#39;s useful when a heavy event handler function would be to costly to call on every event.`,a=d(),u=p("p"),u.textContent=`One caveat is that the throttled function will be called once every x miliseconds, so if an event would stop firing
		before the function is called the next time - the function will not be called at the end. E.g.:`,m=d(),f=p("ul"),f.innerHTML=`<li>we would like to update a position of a tooltip when the window is resizing.
		</li><li>we don&#39;t want to call the function on every resize event, because it&#39;s heavy and resize events are fired with every pixel of the window size change.
		</li><li>we also don&#39;t want to call the function only once at the end of the resize, because the tooltip would be in the wrong place for the whole duration of the resize.
		</li><li>throttle is a good option here, but the caveat mentioned above may cause the tooltip to be in the wrong place at the end of the resize.
		</li><li>in this case it is a good idea to use both: throttle and debounce: throttle the function to be called every 300ms, but also debounce it to be called at the end of the resize.</li>`},m(c,g){s(c,e,g),s(c,n,g),s(c,i,g),s(c,l,g),s(c,r,g),s(c,a,g),s(c,u,g),s(c,m,g),s(c,f,g)},p:Le,d(c){c&&(o(e),o(n),o(i),o(l),o(r),o(a),o(u),o(m),o(f))}}}function $6(t){let e,n;return e=new ut({props:{id:"Throttle",name:"throttle(fn, timeout = 300)",example:t[0],$$slots:{default:[v6]},$$scope:{ctx:t}}}),{c(){S(e.$$.fragment)},m(i,l){E(e,i,l),n=!0},p(i,[l]){let r={};l&2&&(r.$$scope={dirty:l,ctx:i}),e.$set(r)},i(i){n||($(e.$$.fragment,i),n=!0)},o(i){y(e.$$.fragment,i),n=!1},d(i){C(e,i)}}}function w6(t){return[`
<script>
	function updatePosition () {
		console.log('updating...');
	}
	const throttled = throttle(updatePosition);
	const debounced = debounce(updatePosition);
	window.addEventListener('resize', () => {
		throttled();
		debounced();
	});
&lt;/script>
`]}var rg=class extends fe{constructor(e){super(),de(this,e,w6,$6,me,{})}},G0=rg;function y6(t){let e;return{c(){e=p("p"),e.textContent="Converts date to a string describing how long time ago was the given date."},m(n,i){s(n,e,i)},p:Le,d(n){n&&o(e)}}}function k6(t){let e,n;return e=new ut({props:{id:"TimeAgo",name:"timeAgo(date, now)",example:t[0],$$slots:{default:[y6]},$$scope:{ctx:t}}}),{c(){S(e.$$.fragment)},m(i,l){E(e,i,l),n=!0},p(i,[l]){let r={};l&2&&(r.$$scope={dirty:l,ctx:i}),e.$set(r)},i(i){n||($(e.$$.fragment,i),n=!0)},o(i){y(e.$$.fragment,i),n=!1},d(i){C(e,i)}}}function T6(t){return[`
<script>
	timeAgo(date0); // just now
	timeAgo(date1); // 1 minute ago
	timeAgo(date2); // 1 hour ago
	timeAgo(date3); // 1 day ago
	timeAgo(date4); // 1 week ago
	timeAgo(date5); // 1 month ago
	timeAgo(date6); // 1 year ago
	timeAgo(date7); // 2000-01-01 12:00
&lt;/script>
`]}var ag=class extends fe{constructor(e){super(),de(this,e,T6,k6,me,{})}},K0=ag;var ms={};gd(ms,{AnimationSpeed:()=>X0,FocusableSelector:()=>Z0,PrefersDark:()=>J0});function M6(t){let e;return{c(){e=p("ul"),e.innerHTML=`<li>Svelte store<em>*</em> </li><li>Type: number
		</li><li>Returns a number of milliseconds that the default animation duration should last (default is <b>300</b>).
		</li><li>If the user has set <em>prefers-reduced-motion: reduce</em> in the OS, the value will be 0.</li>`},m(n,i){s(n,e,i)},p:Le,d(n){n&&o(e)}}}function E6(t){let e,n;return e=new ut({props:{id:"AnimationSpeed",name:"ANIMATION_SPEED",example:t[0],$$slots:{default:[M6]},$$scope:{ctx:t}}}),{c(){S(e.$$.fragment)},m(i,l){E(e,i,l),n=!0},p(i,[l]){let r={};l&2&&(r.$$scope={dirty:l,ctx:i}),e.$set(r)},i(i){n||($(e.$$.fragment,i),n=!0)},o(i){y(e.$$.fragment,i),n=!1},d(i){C(e,i)}}}function C6(t){return[`
<script>
	import { ANIMATION_SPEED } from '@perfectthings/ui';
	console.log($ANIMATION_SPEED);
&lt;/script>
`]}var ug=class extends fe{constructor(e){super(),de(this,e,C6,E6,me,{})}},X0=ug;function S6(t){let e;return{c(){e=p("ul"),e.innerHTML=`<li>Type: string
		</li><li>Returns a list of selectors that can be focused.</li>`},m(n,i){s(n,e,i)},p:Le,d(n){n&&o(e)}}}function L6(t){let e,n;return e=new ut({props:{id:"FocusableSelector",name:"FOCUSABLE_SELECTOR",example:t[0],$$slots:{default:[S6]},$$scope:{ctx:t}}}),{c(){S(e.$$.fragment)},m(i,l){E(e,i,l),n=!0},p(i,[l]){let r={};l&2&&(r.$$scope={dirty:l,ctx:i}),e.$set(r)},i(i){n||($(e.$$.fragment,i),n=!0)},o(i){y(e.$$.fragment,i),n=!1},d(i){C(e,i)}}}function D6(t){return[`
<script>
	import { FOCUSABLE_SELECTOR } from '@perfectthings/ui';

	const focusableElements = document.querySelectorAll(FOCUSABLE_SELECTOR);
	console.log(focusableElements);
&lt;/script>
`]}var fg=class extends fe{constructor(e){super(),de(this,e,D6,L6,me,{})}},Z0=fg;function A6(t){let e;return{c(){e=p("ul"),e.innerHTML=`<li>Svelte store<em>*</em> </li><li>Type: boolean
		</li><li>Updates on system theme change.
		</li><li>Returns user preference for dark mode.</li>`},m(n,i){s(n,e,i)},p:Le,d(n){n&&o(e)}}}function I6(t){let e,n;return e=new ut({props:{id:"PrefersDark",name:"PREFERS_DARK",example:t[0],$$slots:{default:[A6]},$$scope:{ctx:t}}}),{c(){S(e.$$.fragment)},m(i,l){E(e,i,l),n=!0},p(i,[l]){let r={};l&2&&(r.$$scope={dirty:l,ctx:i}),e.$set(r)},i(i){n||($(e.$$.fragment,i),n=!0)},o(i){y(e.$$.fragment,i),n=!1},d(i){C(e,i)}}}function O6(t){return[`
<script>
	import { PREFERS_DARK } from '@perfectthings/ui';

	console.log($PREFERS_DARK ? 'dark mode' : 'light mode');
&lt;/script>
`]}var mg=class extends fe{constructor(e){super(),de(this,e,O6,I6,me,{})}},J0=mg;function Q0(t,e,n){let i=t.slice();return i[2]=e[n],i}function e2(t,e,n){let i=t.slice();return i[2]=e[n],i}function t2(t,e,n){let i=t.slice();return i[2]=e[n],i}function n2(t,e,n){let i=t.slice();return i[2]=e[n],i}function i2(t){let e,n,i=t[2]+"",l,r,a;return{c(){e=p("li"),n=p("a"),l=ne(i),a=d(),x(n,"href",r="#Utils/"+t[2])},m(u,m){s(u,e,m),q(e,n),q(n,l),q(e,a)},p:Le,d(u){u&&o(e)}}}function o2(t){let e,n,i=t[2]+"",l,r,a;return{c(){e=p("li"),n=p("a"),l=ne(i),a=d(),x(n,"href",r="#Utils/"+t[2])},m(u,m){s(u,e,m),q(e,n),q(n,l),q(e,a)},p:Le,d(u){u&&o(e)}}}function s2(t){let e,n,i;var l=ms[t[2]];function r(a,u){return{}}return l&&(e=Di(l,r(t))),{c(){e&&S(e.$$.fragment),n=p("br")},m(a,u){e&&E(e,a,u),s(a,n,u),i=!0},p(a,u){if(l!==(l=ms[a[2]])){if(e){We();let m=e;y(m.$$.fragment,1,0,()=>{C(m,1)}),Ve()}l?(e=Di(l,r(a,u)),S(e.$$.fragment),$(e.$$.fragment,1),E(e,n.parentNode,n)):e=null}},i(a){i||(e&&$(e.$$.fragment,a),i=!0)},o(a){e&&y(e.$$.fragment,a),i=!1},d(a){a&&o(n),e&&C(e,a)}}}function l2(t){let e,n,i;var l=fs[t[2]];function r(a,u){return{}}return l&&(e=Di(l,r(t))),{c(){e&&S(e.$$.fragment),n=p("br")},m(a,u){e&&E(e,a,u),s(a,n,u),i=!0},p(a,u){if(l!==(l=fs[a[2]])){if(e){We();let m=e;y(m.$$.fragment,1,0,()=>{C(m,1)}),Ve()}l?(e=Di(l,r(a,u)),S(e.$$.fragment),$(e.$$.fragment,1),E(e,n.parentNode,n)):e=null}},i(a){i||(e&&$(e.$$.fragment,a),i=!0)},o(a){e&&y(e.$$.fragment,a),i=!1},d(a){a&&o(n),e&&C(e,a)}}}function x6(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O,D=Ye(t[0]),L=[];for(let U=0;U<D.length;U+=1)L[U]=i2(n2(t,D,U));let T=Ye(t[1]),A=[];for(let U=0;U<T.length;U+=1)A[U]=o2(t2(t,T,U));let H=Ye(t[0]),I=[];for(let U=0;U<H.length;U+=1)I[U]=s2(e2(t,H,U));let P=U=>y(I[U],1,1,()=>{I[U]=null}),N=Ye(t[1]),j=[];for(let U=0;U<N.length;U+=1)j[U]=l2(Q0(t,N,U));let K=U=>y(j[U],1,1,()=>{j[U]=null});return{c(){e=p("div"),n=p("h3"),n.textContent="Utility properties",i=d(),l=p("ul");for(let U=0;U<L.length;U+=1)L[U].c();r=d(),a=p("h3"),a.textContent="Utility Functions",u=d(),m=p("ul");for(let U=0;U<A.length;U+=1)A[U].c();f=d(),c=p("div"),g=p("h2"),g.textContent="Utility properties",b=d();for(let U=0;U<I.length;U+=1)I[U].c();h=d(),v=p("p"),v.innerHTML=`<em>*</em> <a href="https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values">svelte store variables</a> - when reading the value, add <em>$</em> to the name, e.g.
		<em>$ANIMATION_SPEED</em>.`,w=d(),k=p("div"),_=p("h2"),_.textContent="Utility Functions",M=d();for(let U=0;U<j.length;U+=1)j[U].c();x(e,"class","sticky-block utilities-nav"),x(c,"class","sticky-block"),x(c,"id","top"),x(k,"class","sticky-block")},m(U,G){s(U,e,G),q(e,n),q(e,i),q(e,l);for(let F=0;F<L.length;F+=1)L[F]&&L[F].m(l,null);q(e,r),q(e,a),q(e,u),q(e,m);for(let F=0;F<A.length;F+=1)A[F]&&A[F].m(m,null);s(U,f,G),s(U,c,G),q(c,g),q(c,b);for(let F=0;F<I.length;F+=1)I[F]&&I[F].m(c,null);q(c,h),q(c,v),s(U,w,G),s(U,k,G),q(k,_),q(k,M);for(let F=0;F<j.length;F+=1)j[F]&&j[F].m(k,null);O=!0},p(U,[G]){if(G&1){D=Ye(U[0]);let F;for(F=0;F<D.length;F+=1){let z=n2(U,D,F);L[F]?L[F].p(z,G):(L[F]=i2(z),L[F].c(),L[F].m(l,null))}for(;F<L.length;F+=1)L[F].d(1);L.length=D.length}if(G&2){T=Ye(U[1]);let F;for(F=0;F<T.length;F+=1){let z=t2(U,T,F);A[F]?A[F].p(z,G):(A[F]=o2(z),A[F].c(),A[F].m(m,null))}for(;F<A.length;F+=1)A[F].d(1);A.length=T.length}if(G&1){H=Ye(U[0]);let F;for(F=0;F<H.length;F+=1){let z=e2(U,H,F);I[F]?(I[F].p(z,G),$(I[F],1)):(I[F]=s2(z),I[F].c(),$(I[F],1),I[F].m(c,h))}for(We(),F=H.length;F<I.length;F+=1)P(F);Ve()}if(G&2){N=Ye(U[1]);let F;for(F=0;F<N.length;F+=1){let z=Q0(U,N,F);j[F]?(j[F].p(z,G),$(j[F],1)):(j[F]=l2(z),j[F].c(),$(j[F],1),j[F].m(k,null))}for(We(),F=N.length;F<j.length;F+=1)K(F);Ve()}},i(U){if(!O){for(let G=0;G<H.length;G+=1)$(I[G]);for(let G=0;G<N.length;G+=1)$(j[G]);O=!0}},o(U){I=I.filter(Boolean);for(let G=0;G<I.length;G+=1)y(I[G]);j=j.filter(Boolean);for(let G=0;G<j.length;G+=1)y(j[G]);O=!1},d(U){U&&(o(e),o(f),o(c),o(w),o(k)),St(L,U),St(A,U),St(I,U),St(j,U)}}}function H6(t){let e=Object.keys(ms),n=Object.keys(fs);return[e,n]}var dg=class extends fe{constructor(e){super(),de(this,e,H6,x6,me,{})}},cg=dg;function P6(t){let e;return{c(){e=ne("Toggle")},m(n,i){s(n,e,i)},d(n){n&&o(e)}}}function N6(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O,D,L,T,A,H,I,P,N,j,K,U,G,F;f=new De({props:{$$slots:{default:[P6]},$$scope:{ctx:t}}}),f.$on("click",t[5]);let z={};v=new Va({props:z}),t[6](v),v.$on("changed",r2);let V={};return A=new Va({props:V}),t[7](A),A.$on("changed",r2),N=new ze({props:{html:t[4]}}),K=new Fe({props:{props:t[2]}}),G=new Fe({props:{props:t[3],title:"Instance API",description:"The component exposes <em>this</em> property, to which a variable can be bound, creating an instance of the component, with the following API"}}),{c(){e=p("h2"),e.textContent="Splitter",n=d(),i=p("p"),i.textContent="Resizable splitter component.",l=d(),r=p("ul"),r.innerHTML=`<li>It uses <em>flex flow</em> property to determine the direction of resizing (row=horizontal, column=vertical).
	</li><li>It uses <em>min-width</em> and <em>max-width</em> props to determine how much to resize;</li>`,a=d(),u=p("hr"),m=d(),S(f.$$.fragment),c=d(),g=p("div"),b=p("div"),b.textContent="Left",h=d(),S(v.$$.fragment),w=d(),k=p("div"),k.textContent="Right",_=d(),M=p("br"),O=d(),D=p("div"),L=p("div"),L.textContent="Top",T=d(),S(A.$$.fragment),H=d(),I=p("div"),I.textContent="Bottom",P=d(),S(N.$$.fragment),j=d(),S(K.$$.fragment),U=d(),S(G.$$.fragment),x(b,"class","split-box min-w"),x(k,"class","split-box"),x(g,"class","split-wrap"),x(L,"class","split-box min-h"),x(I,"class","split-box"),x(D,"class","split-wrap split-wrap-v")},m(Q,le){s(Q,e,le),s(Q,n,le),s(Q,i,le),s(Q,l,le),s(Q,r,le),s(Q,a,le),s(Q,u,le),s(Q,m,le),E(f,Q,le),s(Q,c,le),s(Q,g,le),q(g,b),q(g,h),E(v,g,null),q(g,w),q(g,k),s(Q,_,le),s(Q,M,le),s(Q,O,le),s(Q,D,le),q(D,L),q(D,T),E(A,D,null),q(D,H),q(D,I),s(Q,P,le),E(N,Q,le),s(Q,j,le),E(K,Q,le),s(Q,U,le),E(G,Q,le),F=!0},p(Q,[le]){let ee={};le&256&&(ee.$$scope={dirty:le,ctx:Q}),f.$set(ee);let X={};v.$set(X);let Z={};A.$set(Z)},i(Q){F||($(f.$$.fragment,Q),$(v.$$.fragment,Q),$(A.$$.fragment,Q),$(N.$$.fragment,Q),$(K.$$.fragment,Q),$(G.$$.fragment,Q),F=!0)},o(Q){y(f.$$.fragment,Q),y(v.$$.fragment,Q),y(A.$$.fragment,Q),y(N.$$.fragment,Q),y(K.$$.fragment,Q),y(G.$$.fragment,Q),F=!1},d(Q){Q&&(o(e),o(n),o(i),o(l),o(r),o(a),o(u),o(m),o(c),o(g),o(_),o(M),o(O),o(D),o(P),o(j),o(U)),C(f,Q),t[6](null),C(v),t[7](null),C(A),C(N,Q),C(K,Q),C(G,Q)}}}function r2(t){console.log(t.detail)}function F6(t,e,n){let i=[{name:"class",type:"string",description:"Additional css class name to be added to the component."},{name:"bind:element",type:"element",description:"Exposes the HTML element of the component."},{name:"on:change",type:"function",description:"Triggered during the resizing (mousemove)."},{name:"on:changed",type:"function",description:"Triggered when resizing finished (mouseup)."}],l=[{name:"collapse",type:"function",description:"Set the size to the <em>min-width</em> of the previous div."},{name:"expand",type:"function",description:"Set the size to the <em>max-width</em> of the previous div."},{name:"setSize",type:"function",description:'Set the split size.<br>Function accepts 2 arguments:<br><em>to</em> [string|number] - use number for pixel size, or predefined strings like "min", "max" or "default"<br><em>withAnimation</em> [boolean] - set to true to enable animation. Defaults to false.'},{name:"toggle",type:"function",description:"Toggle between collapsed and expanded state."}],r=`
<Button on:click="{toggle}">Toggle</Button>
<div style="flex-flow:row">
	<div>Left</div>
	<Splitter on:changed={onchanged} bind:this="{splitter1}" />
	<div>Right</div>
</div>

<script>
let splitter1;

function toggle () {
	splitter1.toggle();
}

function onchanged (e) {
	// logs current height/width in px and collapsed state
	console.log(e.detail);
}
&lt;/script>
`,a,u;function m(){a.toggle(),u.toggle()}function f(g){_e[g?"unshift":"push"](()=>{a=g,n(0,a)})}function c(g){_e[g?"unshift":"push"](()=>{u=g,n(1,u)})}return[a,u,i,l,r,m,f,c]}var pg=class extends fe{constructor(e){super(),de(this,e,F6,N6,me,{})}},hg=pg;function q6(t){let e,n,i,l,r,a;return{c(){e=p("div"),n=ne("background: --ui-"),i=ne(t[0]),l=p("br"),r=ne(`
	text: --ui-`),a=ne(t[1]),x(e,"class","palette-box"),Pt(e,"background-color","var(--ui-"+t[0]+")"),Pt(e,"color","var(--ui-"+t[1]+")")},m(u,m){s(u,e,m),q(e,n),q(e,i),q(e,l),q(e,r),q(e,a)},p(u,[m]){m&1&&je(i,u[0]),m&2&&je(a,u[1]),m&1&&Pt(e,"background-color","var(--ui-"+u[0]+")"),m&2&&Pt(e,"color","var(--ui-"+u[1]+")")},i:Le,o:Le,d(u){u&&o(e)}}}function B6(t,e,n){let{bg:i="color-background"}=e,{text:l="color-text"}=e;return t.$$set=r=>{"bg"in r&&n(0,i=r.bg),"text"in r&&n(1,l=r.text)},[i,l]}var gg=class extends fe{constructor(e){super(),de(this,e,B6,q6,me,{bg:0,text:1})}},Wt=gg;function R6(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O,D,L,T,A,H,I,P,N,j,K,U,G,F,z,V,Q,le,ee,X,Z,ge,he,W,Y,J,pe,we,ve,ue,se,xe,ke,ce,be,Ae,ae,$e,re,oe,Oe,Ke,nt,it,lt,Ce,Ne,dt,ht,at,wt,Et,yt,gt,Vt,mt,Ut,st,xt,Ee,qe;return m=new Wt({props:{bg:"color-accent"}}),c=new Wt({props:{bg:"color-accent-semi"}}),w=new Wt({props:{bg:"color-secondary"}}),_=new Wt({props:{bg:"color-secondary-semi"}}),T=new Wt({props:{bg:"color-info"}}),H=new Wt({props:{bg:"color-info-semi"}}),K=new Wt({props:{bg:"color-success"}}),G=new Wt({props:{bg:"color-success-semi"}}),le=new Wt({props:{bg:"color-warning"}}),X=new Wt({props:{bg:"color-warning-semi"}}),Y=new Wt({props:{bg:"color-danger"}}),pe=new Wt({props:{bg:"color-danger-semi"}}),xe=new Wt({props:{bg:"color-highlight"}}),ce=new Wt({props:{bg:"color-highlight-semi"}}),Ae=new Wt({props:{bg:"color-highlight-1"}}),Oe=new Wt({props:{bg:"color-background"}}),nt=new Wt({props:{bg:"color-background-semi"}}),lt=new Wt({props:{bg:"color-background-input"}}),Ne=new Wt({props:{bg:"color-background-1"}}),ht=new Wt({props:{bg:"color-background-2"}}),gt=new Wt({props:{text:"color-text"}}),mt=new Wt({props:{text:"color-text-semi"}}),st=new Wt({props:{text:"color-text-1"}}),Ee=new Wt({props:{text:"color-text-2"}}),{c(){e=p("h2"),e.textContent="Color Palette",n=d(),i=p("h3"),i.textContent="Special colors",l=d(),r=p("h4"),r.textContent="Accent",a=d(),u=p("div"),S(m.$$.fragment),f=d(),S(c.$$.fragment),g=d(),b=p("h4"),b.textContent="Secondary",h=d(),v=p("div"),S(w.$$.fragment),k=d(),S(_.$$.fragment),M=d(),O=p("h4"),O.textContent="Info",D=d(),L=p("div"),S(T.$$.fragment),A=d(),S(H.$$.fragment),I=d(),P=p("h4"),P.textContent="Success",N=d(),j=p("div"),S(K.$$.fragment),U=d(),S(G.$$.fragment),F=d(),z=p("h4"),z.textContent="Warning",V=d(),Q=p("div"),S(le.$$.fragment),ee=d(),S(X.$$.fragment),Z=d(),ge=p("h4"),ge.textContent="Danger",he=d(),W=p("div"),S(Y.$$.fragment),J=d(),S(pe.$$.fragment),we=d(),ve=p("h3"),ve.textContent="Highlight colors",ue=d(),se=p("div"),S(xe.$$.fragment),ke=d(),S(ce.$$.fragment),be=d(),S(Ae.$$.fragment),ae=d(),$e=p("h3"),$e.textContent="Background colors",re=d(),oe=p("div"),S(Oe.$$.fragment),Ke=d(),S(nt.$$.fragment),it=d(),S(lt.$$.fragment),Ce=d(),S(Ne.$$.fragment),dt=d(),S(ht.$$.fragment),at=d(),wt=p("h3"),wt.textContent="Text colors",Et=d(),yt=p("div"),S(gt.$$.fragment),Vt=d(),S(mt.$$.fragment),Ut=d(),S(st.$$.fragment),xt=d(),S(Ee.$$.fragment),x(u,"class","group"),x(v,"class","group"),x(L,"class","group"),x(j,"class","group"),x(Q,"class","group"),x(W,"class","group"),x(se,"class","group"),x(oe,"class","group"),x(yt,"class","group")},m(Ie,Be){s(Ie,e,Be),s(Ie,n,Be),s(Ie,i,Be),s(Ie,l,Be),s(Ie,r,Be),s(Ie,a,Be),s(Ie,u,Be),E(m,u,null),q(u,f),E(c,u,null),s(Ie,g,Be),s(Ie,b,Be),s(Ie,h,Be),s(Ie,v,Be),E(w,v,null),q(v,k),E(_,v,null),s(Ie,M,Be),s(Ie,O,Be),s(Ie,D,Be),s(Ie,L,Be),E(T,L,null),q(L,A),E(H,L,null),s(Ie,I,Be),s(Ie,P,Be),s(Ie,N,Be),s(Ie,j,Be),E(K,j,null),q(j,U),E(G,j,null),s(Ie,F,Be),s(Ie,z,Be),s(Ie,V,Be),s(Ie,Q,Be),E(le,Q,null),q(Q,ee),E(X,Q,null),s(Ie,Z,Be),s(Ie,ge,Be),s(Ie,he,Be),s(Ie,W,Be),E(Y,W,null),q(W,J),E(pe,W,null),s(Ie,we,Be),s(Ie,ve,Be),s(Ie,ue,Be),s(Ie,se,Be),E(xe,se,null),q(se,ke),E(ce,se,null),q(se,be),E(Ae,se,null),s(Ie,ae,Be),s(Ie,$e,Be),s(Ie,re,Be),s(Ie,oe,Be),E(Oe,oe,null),q(oe,Ke),E(nt,oe,null),q(oe,it),E(lt,oe,null),q(oe,Ce),E(Ne,oe,null),q(oe,dt),E(ht,oe,null),s(Ie,at,Be),s(Ie,wt,Be),s(Ie,Et,Be),s(Ie,yt,Be),E(gt,yt,null),q(yt,Vt),E(mt,yt,null),q(yt,Ut),E(st,yt,null),q(yt,xt),E(Ee,yt,null),qe=!0},p:Le,i(Ie){qe||($(m.$$.fragment,Ie),$(c.$$.fragment,Ie),$(w.$$.fragment,Ie),$(_.$$.fragment,Ie),$(T.$$.fragment,Ie),$(H.$$.fragment,Ie),$(K.$$.fragment,Ie),$(G.$$.fragment,Ie),$(le.$$.fragment,Ie),$(X.$$.fragment,Ie),$(Y.$$.fragment,Ie),$(pe.$$.fragment,Ie),$(xe.$$.fragment,Ie),$(ce.$$.fragment,Ie),$(Ae.$$.fragment,Ie),$(Oe.$$.fragment,Ie),$(nt.$$.fragment,Ie),$(lt.$$.fragment,Ie),$(Ne.$$.fragment,Ie),$(ht.$$.fragment,Ie),$(gt.$$.fragment,Ie),$(mt.$$.fragment,Ie),$(st.$$.fragment,Ie),$(Ee.$$.fragment,Ie),qe=!0)},o(Ie){y(m.$$.fragment,Ie),y(c.$$.fragment,Ie),y(w.$$.fragment,Ie),y(_.$$.fragment,Ie),y(T.$$.fragment,Ie),y(H.$$.fragment,Ie),y(K.$$.fragment,Ie),y(G.$$.fragment,Ie),y(le.$$.fragment,Ie),y(X.$$.fragment,Ie),y(Y.$$.fragment,Ie),y(pe.$$.fragment,Ie),y(xe.$$.fragment,Ie),y(ce.$$.fragment,Ie),y(Ae.$$.fragment,Ie),y(Oe.$$.fragment,Ie),y(nt.$$.fragment,Ie),y(lt.$$.fragment,Ie),y(Ne.$$.fragment,Ie),y(ht.$$.fragment,Ie),y(gt.$$.fragment,Ie),y(mt.$$.fragment,Ie),y(st.$$.fragment,Ie),y(Ee.$$.fragment,Ie),qe=!1},d(Ie){Ie&&(o(e),o(n),o(i),o(l),o(r),o(a),o(u),o(g),o(b),o(h),o(v),o(M),o(O),o(D),o(L),o(I),o(P),o(N),o(j),o(F),o(z),o(V),o(Q),o(Z),o(ge),o(he),o(W),o(we),o(ve),o(ue),o(se),o(ae),o($e),o(re),o(oe),o(at),o(wt),o(Et),o(yt)),C(m),C(c),C(w),C(_),C(T),C(H),C(K),C(G),C(le),C(X),C(Y),C(pe),C(xe),C(ce),C(Ae),C(Oe),C(nt),C(lt),C(Ne),C(ht),C(gt),C(mt),C(st),C(Ee)}}}var bg=class extends fe{constructor(e){super(),de(this,e,null,R6,me,{})}},_g=bg;var{window:a2}=qo;function j6(t){let e,n,i,l,r,a,u,m,f,c,g,b,h,v,w,k,_,M,O,D,L,T,A,H,I,P,N,j,K,U,G,F,z,V,Q,le,ee,X,Z,ge,he,W,Y,J,pe,we,ve,ue,se,xe,ke,ce,be,Ae,ae,$e,re,oe,Oe,Ke,nt,it,lt,Ce,Ne,dt,ht,at,wt,Et,yt,gt,Vt,mt,Ut,st,xt,Ee,qe,Ie,Be,ot,Ft,Gt,qt,Bt,Xt,Rt,Jt,Me,Pe,Yt,Ht,tn,An;function mn(Se){t[11](Se)}let In={text:!0,round:!0,icon:"sidebarLeft",class:"nav-toggler "+(t[2]?"expanded":"")+" "+(t[3]?"swiping":"")};return t[5]!==void 0&&(In.element=t[5]),e=new De({props:In}),_e.push(()=>Ge(e,"element",mn)),e.$on("click",t[6]),m=new pt({props:{name:"Get Started",active:t[0]}}),c=new pt({props:{name:"Changelog",active:t[0]}}),v=new pt({props:{name:"Button",active:t[0]}}),k=new pt({props:{name:"Push Button",active:t[0]}}),M=new pt({props:{name:"Button Group",active:t[0]}}),T=new pt({props:{name:"Button Toggle",active:t[0]}}),H=new pt({props:{name:"Checkbox",active:t[0]}}),P=new pt({props:{name:"Combobox",active:t[0]}}),j=new pt({props:{name:"Input Date",active:t[0]}}),U=new pt({props:{name:"Input Math",active:t[0]}}),F=new pt({props:{name:"Input Number",active:t[0]}}),V=new pt({props:{name:"Input Password",active:t[0]}}),le=new pt({props:{name:"Input Rating",active:t[0]}}),X=new pt({props:{name:"Input Search",active:t[0]}}),ge=new pt({props:{name:"Input Tag",active:t[0]}}),W=new pt({props:{name:"Input Text",active:t[0]}}),J=new pt({props:{name:"Input Time",active:t[0]}}),we=new pt({props:{name:"Radio",active:t[0]}}),ue=new pt({props:{name:"Range",active:t[0]}}),xe=new pt({props:{name:"Select",active:t[0]}}),ce=new pt({props:{name:"Textarea",active:t[0]}}),Ae=new pt({props:{name:"Toggle",active:t[0]}}),oe=new pt({props:{name:"InfoBar",active:t[0]}}),Ke=new pt({props:{name:"Notification Center",active:t[0]}}),it=new pt({props:{name:"MessageBox",active:t[0]}}),Ce=new pt({props:{name:"Tooltip",active:t[0]}}),at=new pt({props:{name:"Dialog",active:t[0]}}),Et=new pt({props:{name:"Drawer",active:t[0]}}),gt=new pt({props:{name:"Panel",active:t[0]}}),mt=new pt({props:{name:"Popover",active:t[0]}}),st=new pt({props:{name:"Table",active:t[0]}}),Ee=new pt({props:{name:"Tree",active:t[0]}}),ot=new pt({props:{name:"Menu",active:t[0]}}),Gt=new pt({props:{name:"Tag",active:t[0]}}),Bt=new pt({props:{name:"Icon",active:t[0]}}),Rt=new pt({props:{name:"Utils",active:t[0]}}),Me=new pt({props:{name:"Color Palette",active:t[0]}}),Yt=new De({props:{round:!0,info:!0,icon:"arrowNarrowUp",class:"btn-scroll-top "+(t[1]?"":"hidden"),title:"Scroll to the top"}}),Yt.$on("click",z6),{c(){S(e.$$.fragment),i=d(),l=p("aside"),r=p("menu"),a=p("h3"),a.textContent="Intro",u=d(),S(m.$$.fragment),f=d(),S(c.$$.fragment),g=d(),b=p("h3"),b.textContent="Buttons",h=d(),S(v.$$.fragment),w=d(),S(k.$$.fragment),_=d(),S(M.$$.fragment),O=d(),D=p("h3"),D.textContent="Inputs",L=d(),S(T.$$.fragment),A=d(),S(H.$$.fragment),I=d(),S(P.$$.fragment),N=d(),S(j.$$.fragment),K=d(),S(U.$$.fragment),G=d(),S(F.$$.fragment),z=d(),S(V.$$.fragment),Q=d(),S(le.$$.fragment),ee=d(),S(X.$$.fragment),Z=d(),S(ge.$$.fragment),he=d(),S(W.$$.fragment),Y=d(),S(J.$$.fragment),pe=d(),S(we.$$.fragment),ve=d(),S(ue.$$.fragment),se=d(),S(xe.$$.fragment),ke=d(),S(ce.$$.fragment),be=d(),S(Ae.$$.fragment),ae=d(),$e=p("h3"),$e.textContent="Messaging",re=d(),S(oe.$$.fragment),Oe=d(),S(Ke.$$.fragment),nt=d(),S(it.$$.fragment),lt=d(),S(Ce.$$.fragment),Ne=d(),dt=p("h3"),dt.textContent="Containers",ht=d(),S(at.$$.fragment),wt=d(),S(Et.$$.fragment),yt=d(),S(gt.$$.fragment),Vt=d(),S(mt.$$.fragment),Ut=d(),S(st.$$.fragment),xt=d(),S(Ee.$$.fragment),qe=d(),Ie=p("h3"),Ie.textContent="Generic",Be=d(),S(ot.$$.fragment),Ft=d(),S(Gt.$$.fragment),qt=d(),S(Bt.$$.fragment),Xt=d(),S(Rt.$$.fragment),Jt=d(),S(Me.$$.fragment),Pe=d(),S(Yt.$$.fragment),ie(l,"expanded",t[2]),ie(l,"swiping",t[3])},m(Se,Je){E(e,Se,Je),s(Se,i,Je),s(Se,l,Je),q(l,r),q(r,a),q(r,u),E(m,r,null),q(r,f),E(c,r,null),q(r,g),q(r,b),q(r,h),E(v,r,null),q(r,w),E(k,r,null),q(r,_),E(M,r,null),q(r,O),q(r,D),q(r,L),E(T,r,null),q(r,A),E(H,r,null),q(r,I),E(P,r,null),q(r,N),E(j,r,null),q(r,K),E(U,r,null),q(r,G),E(F,r,null),q(r,z),E(V,r,null),q(r,Q),E(le,r,null),q(r,ee),E(X,r,null),q(r,Z),E(ge,r,null),q(r,he),E(W,r,null),q(r,Y),E(J,r,null),q(r,pe),E(we,r,null),q(r,ve),E(ue,r,null),q(r,se),E(xe,r,null),q(r,ke),E(ce,r,null),q(r,be),E(Ae,r,null),q(r,ae),q(r,$e),q(r,re),E(oe,r,null),q(r,Oe),E(Ke,r,null),q(r,nt),E(it,r,null),q(r,lt),E(Ce,r,null),q(r,Ne),q(r,dt),q(r,ht),E(at,r,null),q(r,wt),E(Et,r,null),q(r,yt),E(gt,r,null),q(r,Vt),E(mt,r,null),q(r,Ut),E(st,r,null),q(r,xt),E(Ee,r,null),q(r,qe),q(r,Ie),q(r,Be),E(ot,r,null),q(r,Ft),E(Gt,r,null),q(r,qt),E(Bt,r,null),q(r,Xt),E(Rt,r,null),q(r,Jt),E(Me,r,null),t[12](l),s(Se,Pe,Je),E(Yt,Se,Je),Ht=!0,tn||(An=[ye(a2,"hashchange",t[7]),ye(a2,"popstate",t[8])],tn=!0)},p(Se,[Je]){let nn={};Je&12&&(nn.class="nav-toggler "+(Se[2]?"expanded":"")+" "+(Se[3]?"swiping":"")),!n&&Je&32&&(n=!0,nn.element=Se[5],Ue(()=>n=!1)),e.$set(nn);let On={};Je&1&&(On.active=Se[0]),m.$set(On);let ln={};Je&1&&(ln.active=Se[0]),c.$set(ln);let _n={};Je&1&&(_n.active=Se[0]),v.$set(_n);let rn={};Je&1&&(rn.active=Se[0]),k.$set(rn);let vn={};Je&1&&(vn.active=Se[0]),M.$set(vn);let an={};Je&1&&(an.active=Se[0]),T.$set(an);let gn={};Je&1&&(gn.active=Se[0]),H.$set(gn);let Te={};Je&1&&(Te.active=Se[0]),P.$set(Te);let te={};Je&1&&(te.active=Se[0]),j.$set(te);let He={};Je&1&&(He.active=Se[0]),U.$set(He);let $n={};Je&1&&($n.active=Se[0]),F.$set($n);let xn={};Je&1&&(xn.active=Se[0]),V.$set(xn);let wn={};Je&1&&(wn.active=Se[0]),le.$set(wn);let Hn={};Je&1&&(Hn.active=Se[0]),X.$set(Hn);let yn={};Je&1&&(yn.active=Se[0]),ge.$set(yn);let Pn={};Je&1&&(Pn.active=Se[0]),W.$set(Pn);let kn={};Je&1&&(kn.active=Se[0]),J.$set(kn);let Nn={};Je&1&&(Nn.active=Se[0]),we.$set(Nn);let Fn={};Je&1&&(Fn.active=Se[0]),ue.$set(Fn);let qn={};Je&1&&(qn.active=Se[0]),xe.$set(qn);let Tn={};Je&1&&(Tn.active=Se[0]),ce.$set(Tn);let Bn={};Je&1&&(Bn.active=Se[0]),Ae.$set(Bn);let Mn={};Je&1&&(Mn.active=Se[0]),oe.$set(Mn);let Rn={};Je&1&&(Rn.active=Se[0]),Ke.$set(Rn);let En={};Je&1&&(En.active=Se[0]),it.$set(En);let ci={};Je&1&&(ci.active=Se[0]),Ce.$set(ci);let ti={};Je&1&&(ti.active=Se[0]),at.$set(ti);let pi={};Je&1&&(pi.active=Se[0]),Et.$set(pi);let ni={};Je&1&&(ni.active=Se[0]),gt.$set(ni);let hi={};Je&1&&(hi.active=Se[0]),mt.$set(hi);let ii={};Je&1&&(ii.active=Se[0]),st.$set(ii);let gi={};Je&1&&(gi.active=Se[0]),Ee.$set(gi);let oi={};Je&1&&(oi.active=Se[0]),ot.$set(oi);let bi={};Je&1&&(bi.active=Se[0]),Gt.$set(bi);let ji={};Je&1&&(ji.active=Se[0]),Bt.$set(ji);let co={};Je&1&&(co.active=Se[0]),Rt.$set(co);let zi={};Je&1&&(zi.active=Se[0]),Me.$set(zi),(!Ht||Je&4)&&ie(l,"expanded",Se[2]),(!Ht||Je&8)&&ie(l,"swiping",Se[3]);let po={};Je&2&&(po.class="btn-scroll-top "+(Se[1]?"":"hidden")),Yt.$set(po)},i(Se){Ht||($(e.$$.fragment,Se),$(m.$$.fragment,Se),$(c.$$.fragment,Se),$(v.$$.fragment,Se),$(k.$$.fragment,Se),$(M.$$.fragment,Se),$(T.$$.fragment,Se),$(H.$$.fragment,Se),$(P.$$.fragment,Se),$(j.$$.fragment,Se),$(U.$$.fragment,Se),$(F.$$.fragment,Se),$(V.$$.fragment,Se),$(le.$$.fragment,Se),$(X.$$.fragment,Se),$(ge.$$.fragment,Se),$(W.$$.fragment,Se),$(J.$$.fragment,Se),$(we.$$.fragment,Se),$(ue.$$.fragment,Se),$(xe.$$.fragment,Se),$(ce.$$.fragment,Se),$(Ae.$$.fragment,Se),$(oe.$$.fragment,Se),$(Ke.$$.fragment,Se),$(it.$$.fragment,Se),$(Ce.$$.fragment,Se),$(at.$$.fragment,Se),$(Et.$$.fragment,Se),$(gt.$$.fragment,Se),$(mt.$$.fragment,Se),$(st.$$.fragment,Se),$(Ee.$$.fragment,Se),$(ot.$$.fragment,Se),$(Gt.$$.fragment,Se),$(Bt.$$.fragment,Se),$(Rt.$$.fragment,Se),$(Me.$$.fragment,Se),$(Yt.$$.fragment,Se),Ht=!0)},o(Se){y(e.$$.fragment,Se),y(m.$$.fragment,Se),y(c.$$.fragment,Se),y(v.$$.fragment,Se),y(k.$$.fragment,Se),y(M.$$.fragment,Se),y(T.$$.fragment,Se),y(H.$$.fragment,Se),y(P.$$.fragment,Se),y(j.$$.fragment,Se),y(U.$$.fragment,Se),y(F.$$.fragment,Se),y(V.$$.fragment,Se),y(le.$$.fragment,Se),y(X.$$.fragment,Se),y(ge.$$.fragment,Se),y(W.$$.fragment,Se),y(J.$$.fragment,Se),y(we.$$.fragment,Se),y(ue.$$.fragment,Se),y(xe.$$.fragment,Se),y(ce.$$.fragment,Se),y(Ae.$$.fragment,Se),y(oe.$$.fragment,Se),y(Ke.$$.fragment,Se),y(it.$$.fragment,Se),y(Ce.$$.fragment,Se),y(at.$$.fragment,Se),y(Et.$$.fragment,Se),y(gt.$$.fragment,Se),y(mt.$$.fragment,Se),y(st.$$.fragment,Se),y(Ee.$$.fragment,Se),y(ot.$$.fragment,Se),y(Gt.$$.fragment,Se),y(Bt.$$.fragment,Se),y(Rt.$$.fragment,Se),y(Me.$$.fragment,Se),y(Yt.$$.fragment,Se),Ht=!1},d(Se){Se&&(o(i),o(l),o(Pe)),C(e,Se),C(m),C(c),C(v),C(k),C(M),C(T),C(H),C(P),C(j),C(U),C(F),C(V),C(le),C(X),C(ge),C(W),C(J),C(we),C(ue),C(xe),C(ce),C(Ae),C(oe),C(Ke),C(it),C(Ce),C(at),C(Et),C(gt),C(mt),C(st),C(Ee),C(ot),C(Gt),C(Bt),C(Rt),C(Me),t[12](null),C(Yt,Se),tn=!1,Re(An)}}}var $g=220,u2=2.5;function z6(){document.scrollingElement.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{let t=location.hash.substring(1);t.includes("/")&&(t=t.substr(0,t.indexOf("/"))),location.hash=t},300)}function m2(t,e=10){if(e===0)return;let n=document.getElementById(t);if(!n)return setTimeout(()=>m2(t,e-1),200);n.scrollIntoView({behavior:"smooth"})}function wg(){let[t,e]=location.hash.substr(1).split("/");return t=t||"GetStarted",e=e||"top",document.body.className="section-"+t.toLocaleLowerCase(),[t,e]}function W6(t,e,n){let i={GetStarted:G_,Changelog:K_,...vg},[l,r]=wg(),{component:a=i[l]}=e,u=Mo(L),m=!1,f=!1,c=!1,g=!1,b,h;Nt(()=>{new f2.default({element:document.body,delta:3,mouseTrackingEnabled:!0,preventTrackingOnMouseleave:!0,onSwipeStart:v,onSwiping:w,onSwiped:k,onTap:_}).init(),n(0,[l,r]=wg(),l,n(10,r)),window.addEventListener("scroll",u)}),on(()=>{window.removeEventListener("scroll",u)});function v(H){if(window.innerWidth>700)return;if(i1(H.target))return!1;H.target.closest('input, button, .toggle, .dialog-backdrop, .notification, .popover, [aria-haspopup="true"]')||(c=f,n(3,g=!0))}function w(H,I){if(window.innerWidth>700||!g)return;if(Math.abs(I.deltaY)>Math.abs(I.deltaX)){n(4,b.style.transform="",b),n(5,h.style.transform="",h);return}H.preventDefault();let P=0;c?(P=0,I.deltaX>0?P+=I.deltaX*Math.exp(-u2):P+=I.deltaX):(P=-$g,I.deltaX>0&&(I.deltaX<$g?P+=I.deltaX:P=(P+I.deltaX)*Math.exp(-u2))),n(4,b.style.transform=`translateX(${P}px)`,b);let N=P+180;N=Math.max(10,N),n(5,h.style.transform=`translateX(${N}px)`,h)}function k(H,I){if(window.innerWidth>700||!g)return;if(n(3,g=!1),Math.abs(I.deltaY)>Math.abs(I.deltaX)){n(4,b.style.transform="",b),n(5,h.style.transform="",h),n(2,f=c);return}if(I.directionX==="LEFT"&&!c){n(4,b.style.transform="",b),n(5,h.style.transform="",h),n(2,f=c);return}if(I.directionX==="RIGHT"&&c){n(4,b.style.transform="",b),n(5,h.style.transform="",h),n(2,f=c);return}let P=Math.abs(I.deltaX)+I.velocity*50,N=$g/2;P>N&&n(2,f=!c),c=f,n(4,b.style.transform="",b),n(5,h.style.transform="",h),requestAnimationFrame(()=>document.body.focus())}function _(H){window.innerWidth>700||H.target.closest("aside,.nav-toggler")||(c&&n(2,f=!1),c=f)}function M(){n(2,f=!f),c=f}function O(){n(0,[l,r]=wg(),l,n(10,r)),n(9,a=i[l]),window.Prism&&requestAnimationFrame(()=>window.Prism.highlightAll()),document.scrollingElement.scrollTop=0}function D(){n(2,f=!1),c=f}function L(){n(1,m=document.scrollingElement.scrollTop>200)}function T(H){h=H,n(5,h)}function A(H){_e[H?"unshift":"push"](()=>{b=H,n(4,b)})}return t.$$set=H=>{"component"in H&&n(9,a=H.component)},t.$$.update=()=>{t.$$.dirty&1024&&m2(r)},[l,m,f,g,b,h,M,O,D,a,r,T,A]}var yg=class extends fe{constructor(e){super(),de(this,e,W6,j6,me,{component:9})}},kg=yg;function V6(t){let e,n;return e=new Qt({props:{round:!0,class:"dark-mode-switch",title:"Dark mode toggle",items:t[1],value:t[0]}}),e.$on("change",U6),{c(){S(e.$$.fragment)},m(i,l){E(e,i,l),n=!0},p(i,[l]){let r={};l&1&&(r.value=i[0]),e.$set(r)},i(i){n||($(e.$$.fragment,i),n=!0)},o(i){y(e.$$.fragment,i),n=!1},d(i){C(e,i)}}}function U6(t){document.documentElement.className=t.detail?"theme-dark":"theme-light"}function Y6(t,e,n){let i;return un(t,Pd,r=>n(0,i=r)),[i,[{value:!1,icon:"sun"},{value:!0,icon:"moon"}]]}var Tg=class extends fe{constructor(e){super(),de(this,e,Y6,V6,me,{})}},Mg=Tg;function G6(t){let e,n,i,l,r,a,u,m;function f(h){t[2](h)}let c={};t[0]!==void 0&&(c.component=t[0]),e=new kg({props:c}),_e.push(()=>Ge(e,"component",f)),r=new Mg({});var g=t[0];function b(h,v){return{}}return g&&(u=Di(g,b(t))),{c(){S(e.$$.fragment),i=d(),l=p("main"),S(r.$$.fragment),a=d(),u&&S(u.$$.fragment),x(l,"class",t[1])},m(h,v){E(e,h,v),s(h,i,v),s(h,l,v),E(r,l,null),q(l,a),u&&E(u,l,null),m=!0},p(h,[v]){let w={};if(!n&&v&1&&(n=!0,w.component=h[0],Ue(()=>n=!1)),e.$set(w),v&1&&g!==(g=h[0])){if(u){We();let k=u;y(k.$$.fragment,1,0,()=>{C(k,1)}),Ve()}g?(u=Di(g,b(h,v)),S(u.$$.fragment),$(u.$$.fragment,1),E(u,l,null)):u=null}(!m||v&2)&&x(l,"class",h[1])},i(h){m||($(e.$$.fragment,h),$(r.$$.fragment,h),u&&$(u.$$.fragment,h),m=!0)},o(h){y(e.$$.fragment,h),y(r.$$.fragment,h),u&&y(u.$$.fragment,h),m=!1},d(h){h&&(o(i),o(l)),C(e,h),C(r),u&&C(u)}}}function K6(t,e,n){let i,l;function r(a){l=a,n(0,l)}return t.$$.update=()=>{t.$$.dirty&1&&n(1,i=(l&&l.name||"").toLowerCase())},[l,i,r]}var Eg=class extends fe{constructor(e){super(),de(this,e,K6,G6,me,{})}},Cg=Eg;var uz=bd(d2(),1);var c2="(if|else if|await|then|catch|each|html|debug)";Prism.languages.svelte=Prism.languages.extend("markup",{each:{pattern:new RegExp("{[#/]each(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}"),inside:{"language-javascript":[{pattern:/(as[\s\S]*)\([\s\S]*\)(?=\s*\})/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(as[\s]*)[\s\S]*(?=\s*)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(#each[\s]*)[\s\S]*(?=as)/,lookbehind:!0,inside:Prism.languages.javascript}],keyword:/[#/]each|as/,punctuation:/{|}/}},block:{pattern:new RegExp("{[#:/@]/s"+c2+"(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}"),inside:{punctuation:/^{|}$/,keyword:[new RegExp("[#:/@]"+c2+"( )*"),/as/,/then/],"language-javascript":{pattern:/[\s\S]*/,inside:Prism.languages.javascript}}},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?:"[^"]*"|'[^']*'|{[\s\S]+?}(?=[\s/>])))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"language-javascript":{pattern:/\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,inside:Prism.languages.javascript},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}],"language-javascript":{pattern:/{[\s\S]+}/,inside:Prism.languages.javascript}}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},"language-javascript":{pattern:/\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,lookbehind:!0,inside:Prism.languages.javascript}});Prism.languages.svelte.tag.inside["attr-value"].inside.entity=Prism.languages.svelte.entity;Prism.hooks.add("wrap",t=>{t.type==="entity"&&(t.attributes.title=t.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.svelte.tag,"addInlined",{value:function(e,n){let i={};i["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[n]},i.cdata=/^<!\[CDATA\[|\]\]>$/i;let l={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:i}};l["language-"+n]={pattern:/[\s\S]+/,inside:Prism.languages[n]};let r={};r[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:l},Prism.languages.insertBefore("svelte","cdata",r)}});Prism.languages.svelte.tag.addInlined("style","css");Prism.languages.svelte.tag.addInlined("script","javascript");Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};Prism.languages.webmanifest=Prism.languages.json;(function(t){var e="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},i={bash:n,environment:{pattern:RegExp("\\$"+e),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+e),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};t.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+e),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:i},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:i},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:i.entity}}],environment:{pattern:RegExp("\\$?"+e),alias:"constant"},variable:i.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=t.languages.bash;for(var l=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],r=i.variable[1].inside,a=0;a<l.length;a++)r[l[a]]=t.languages.bash[l[a]];t.languages.sh=t.languages.bash,t.languages.shell=t.languages.bash})(Prism);var cz=bd(p2(),1),pz=new Cg({target:document.querySelector("#app")});export{pz as default};
