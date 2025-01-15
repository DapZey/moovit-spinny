(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var tf={exports:{}},Qo={},nf={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Em;function y0(){if(Em)return mt;Em=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),m=Symbol.iterator;function v(U){return U===null||typeof U!="object"?null:(U=m&&U[m]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function S(U,ne,be){this.props=U,this.context=ne,this.refs=E,this.updater=be||y}S.prototype.isReactComponent={},S.prototype.setState=function(U,ne){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ne,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function x(){}x.prototype=S.prototype;function I(U,ne,be){this.props=U,this.context=ne,this.refs=E,this.updater=be||y}var C=I.prototype=new x;C.constructor=I,M(C,S.prototype),C.isPureReactComponent=!0;var R=Array.isArray,k=Object.prototype.hasOwnProperty,F={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function G(U,ne,be){var Z,ue={},ye=null,ge=null;if(ne!=null)for(Z in ne.ref!==void 0&&(ge=ne.ref),ne.key!==void 0&&(ye=""+ne.key),ne)k.call(ne,Z)&&!N.hasOwnProperty(Z)&&(ue[Z]=ne[Z]);var Te=arguments.length-2;if(Te===1)ue.children=be;else if(1<Te){for(var Le=Array(Te),$e=0;$e<Te;$e++)Le[$e]=arguments[$e+2];ue.children=Le}if(U&&U.defaultProps)for(Z in Te=U.defaultProps,Te)ue[Z]===void 0&&(ue[Z]=Te[Z]);return{$$typeof:o,type:U,key:ye,ref:ge,props:ue,_owner:F.current}}function P(U,ne){return{$$typeof:o,type:U.type,key:ne,ref:U.ref,props:U.props,_owner:U._owner}}function b(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function O(U){var ne={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(be){return ne[be]})}var ae=/\/+/g;function J(U,ne){return typeof U=="object"&&U!==null&&U.key!=null?O(""+U.key):ne.toString(36)}function ce(U,ne,be,Z,ue){var ye=typeof U;(ye==="undefined"||ye==="boolean")&&(U=null);var ge=!1;if(U===null)ge=!0;else switch(ye){case"string":case"number":ge=!0;break;case"object":switch(U.$$typeof){case o:case e:ge=!0}}if(ge)return ge=U,ue=ue(ge),U=Z===""?"."+J(ge,0):Z,R(ue)?(be="",U!=null&&(be=U.replace(ae,"$&/")+"/"),ce(ue,ne,be,"",function($e){return $e})):ue!=null&&(b(ue)&&(ue=P(ue,be+(!ue.key||ge&&ge.key===ue.key?"":(""+ue.key).replace(ae,"$&/")+"/")+U)),ne.push(ue)),1;if(ge=0,Z=Z===""?".":Z+":",R(U))for(var Te=0;Te<U.length;Te++){ye=U[Te];var Le=Z+J(ye,Te);ge+=ce(ye,ne,be,Le,ue)}else if(Le=v(U),typeof Le=="function")for(U=Le.call(U),Te=0;!(ye=U.next()).done;)ye=ye.value,Le=Z+J(ye,Te++),ge+=ce(ye,ne,be,Le,ue);else if(ye==="object")throw ne=String(U),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return ge}function de(U,ne,be){if(U==null)return U;var Z=[],ue=0;return ce(U,Z,"","",function(ye){return ne.call(be,ye,ue++)}),Z}function se(U){if(U._status===-1){var ne=U._result;ne=ne(),ne.then(function(be){(U._status===0||U._status===-1)&&(U._status=1,U._result=be)},function(be){(U._status===0||U._status===-1)&&(U._status=2,U._result=be)}),U._status===-1&&(U._status=0,U._result=ne)}if(U._status===1)return U._result.default;throw U._result}var le={current:null},V={transition:null},oe={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:V,ReactCurrentOwner:F};function re(){throw Error("act(...) is not supported in production builds of React.")}return mt.Children={map:de,forEach:function(U,ne,be){de(U,function(){ne.apply(this,arguments)},be)},count:function(U){var ne=0;return de(U,function(){ne++}),ne},toArray:function(U){return de(U,function(ne){return ne})||[]},only:function(U){if(!b(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},mt.Component=S,mt.Fragment=t,mt.Profiler=s,mt.PureComponent=I,mt.StrictMode=i,mt.Suspense=d,mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,mt.act=re,mt.cloneElement=function(U,ne,be){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Z=M({},U.props),ue=U.key,ye=U.ref,ge=U._owner;if(ne!=null){if(ne.ref!==void 0&&(ye=ne.ref,ge=F.current),ne.key!==void 0&&(ue=""+ne.key),U.type&&U.type.defaultProps)var Te=U.type.defaultProps;for(Le in ne)k.call(ne,Le)&&!N.hasOwnProperty(Le)&&(Z[Le]=ne[Le]===void 0&&Te!==void 0?Te[Le]:ne[Le])}var Le=arguments.length-2;if(Le===1)Z.children=be;else if(1<Le){Te=Array(Le);for(var $e=0;$e<Le;$e++)Te[$e]=arguments[$e+2];Z.children=Te}return{$$typeof:o,type:U.type,key:ue,ref:ye,props:Z,_owner:ge}},mt.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:a,_context:U},U.Consumer=U},mt.createElement=G,mt.createFactory=function(U){var ne=G.bind(null,U);return ne.type=U,ne},mt.createRef=function(){return{current:null}},mt.forwardRef=function(U){return{$$typeof:c,render:U}},mt.isValidElement=b,mt.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:se}},mt.memo=function(U,ne){return{$$typeof:h,type:U,compare:ne===void 0?null:ne}},mt.startTransition=function(U){var ne=V.transition;V.transition={};try{U()}finally{V.transition=ne}},mt.unstable_act=re,mt.useCallback=function(U,ne){return le.current.useCallback(U,ne)},mt.useContext=function(U){return le.current.useContext(U)},mt.useDebugValue=function(){},mt.useDeferredValue=function(U){return le.current.useDeferredValue(U)},mt.useEffect=function(U,ne){return le.current.useEffect(U,ne)},mt.useId=function(){return le.current.useId()},mt.useImperativeHandle=function(U,ne,be){return le.current.useImperativeHandle(U,ne,be)},mt.useInsertionEffect=function(U,ne){return le.current.useInsertionEffect(U,ne)},mt.useLayoutEffect=function(U,ne){return le.current.useLayoutEffect(U,ne)},mt.useMemo=function(U,ne){return le.current.useMemo(U,ne)},mt.useReducer=function(U,ne,be){return le.current.useReducer(U,ne,be)},mt.useRef=function(U){return le.current.useRef(U)},mt.useState=function(U){return le.current.useState(U)},mt.useSyncExternalStore=function(U,ne,be){return le.current.useSyncExternalStore(U,ne,be)},mt.useTransition=function(){return le.current.useTransition()},mt.version="18.3.1",mt}var Tm;function Od(){return Tm||(Tm=1,nf.exports=y0()),nf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wm;function x0(){if(wm)return Qo;wm=1;var o=Od(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(c,d,h){var g,m={},v=null,y=null;h!==void 0&&(v=""+h),d.key!==void 0&&(v=""+d.key),d.ref!==void 0&&(y=d.ref);for(g in d)i.call(d,g)&&!a.hasOwnProperty(g)&&(m[g]=d[g]);if(c&&c.defaultProps)for(g in d=c.defaultProps,d)m[g]===void 0&&(m[g]=d[g]);return{$$typeof:e,type:c,key:v,ref:y,props:m,_owner:s.current}}return Qo.Fragment=t,Qo.jsx=u,Qo.jsxs=u,Qo}var Am;function S0(){return Am||(Am=1,tf.exports=x0()),tf.exports}var ua=S0(),jf=Od(),bl={},rf={exports:{}},zn={},sf={exports:{}},of={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rm;function M0(){return Rm||(Rm=1,function(o){function e(V,oe){var re=V.length;V.push(oe);e:for(;0<re;){var U=re-1>>>1,ne=V[U];if(0<s(ne,oe))V[U]=oe,V[re]=ne,re=U;else break e}}function t(V){return V.length===0?null:V[0]}function i(V){if(V.length===0)return null;var oe=V[0],re=V.pop();if(re!==oe){V[0]=re;e:for(var U=0,ne=V.length,be=ne>>>1;U<be;){var Z=2*(U+1)-1,ue=V[Z],ye=Z+1,ge=V[ye];if(0>s(ue,re))ye<ne&&0>s(ge,ue)?(V[U]=ge,V[ye]=re,U=ye):(V[U]=ue,V[Z]=re,U=Z);else if(ye<ne&&0>s(ge,re))V[U]=ge,V[ye]=re,U=ye;else break e}}return oe}function s(V,oe){var re=V.sortIndex-oe.sortIndex;return re!==0?re:V.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;o.unstable_now=function(){return a.now()}}else{var u=Date,c=u.now();o.unstable_now=function(){return u.now()-c}}var d=[],h=[],g=1,m=null,v=3,y=!1,M=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(V){for(var oe=t(h);oe!==null;){if(oe.callback===null)i(h);else if(oe.startTime<=V)i(h),oe.sortIndex=oe.expirationTime,e(d,oe);else break;oe=t(h)}}function R(V){if(E=!1,C(V),!M)if(t(d)!==null)M=!0,se(k);else{var oe=t(h);oe!==null&&le(R,oe.startTime-V)}}function k(V,oe){M=!1,E&&(E=!1,x(G),G=-1),y=!0;var re=v;try{for(C(oe),m=t(d);m!==null&&(!(m.expirationTime>oe)||V&&!O());){var U=m.callback;if(typeof U=="function"){m.callback=null,v=m.priorityLevel;var ne=U(m.expirationTime<=oe);oe=o.unstable_now(),typeof ne=="function"?m.callback=ne:m===t(d)&&i(d),C(oe)}else i(d);m=t(d)}if(m!==null)var be=!0;else{var Z=t(h);Z!==null&&le(R,Z.startTime-oe),be=!1}return be}finally{m=null,v=re,y=!1}}var F=!1,N=null,G=-1,P=5,b=-1;function O(){return!(o.unstable_now()-b<P)}function ae(){if(N!==null){var V=o.unstable_now();b=V;var oe=!0;try{oe=N(!0,V)}finally{oe?J():(F=!1,N=null)}}else F=!1}var J;if(typeof I=="function")J=function(){I(ae)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,de=ce.port2;ce.port1.onmessage=ae,J=function(){de.postMessage(null)}}else J=function(){S(ae,0)};function se(V){N=V,F||(F=!0,J())}function le(V,oe){G=S(function(){V(o.unstable_now())},oe)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(V){V.callback=null},o.unstable_continueExecution=function(){M||y||(M=!0,se(k))},o.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<V?Math.floor(1e3/V):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_getFirstCallbackNode=function(){return t(d)},o.unstable_next=function(V){switch(v){case 1:case 2:case 3:var oe=3;break;default:oe=v}var re=v;v=oe;try{return V()}finally{v=re}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(V,oe){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var re=v;v=V;try{return oe()}finally{v=re}},o.unstable_scheduleCallback=function(V,oe,re){var U=o.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?U+re:U):re=U,V){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=re+ne,V={id:g++,callback:oe,priorityLevel:V,startTime:re,expirationTime:ne,sortIndex:-1},re>U?(V.sortIndex=re,e(h,V),t(d)===null&&V===t(h)&&(E?(x(G),G=-1):E=!0,le(R,re-U))):(V.sortIndex=ne,e(d,V),M||y||(M=!0,se(k))),V},o.unstable_shouldYield=O,o.unstable_wrapCallback=function(V){var oe=v;return function(){var re=v;v=oe;try{return V.apply(this,arguments)}finally{v=re}}}}(of)),of}var Cm;function E0(){return Cm||(Cm=1,sf.exports=M0()),sf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm;function T0(){if(bm)return zn;bm=1;var o=Od(),e=E0();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function a(n,r){u(n,r),u(n+"Capture",r)}function u(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},m={};function v(n){return d.call(m,n)?!0:d.call(g,n)?!1:h.test(n)?m[n]=!0:(g[n]=!0,!1)}function y(n,r,l,f){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,l,f){if(r===null||typeof r>"u"||y(n,r,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function E(n,r,l,f,p,_,T){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=f,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=_,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];S[r]=new E(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function I(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(x,I);S[r]=new E(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(x,I);S[r]=new E(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(x,I);S[r]=new E(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function C(n,r,l,f){var p=S.hasOwnProperty(r)?S[r]:null;(p!==null?p.type!==0:f||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,l,p,f)&&(l=null),f||p===null?v(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):p.mustUseProperty?n[p.propertyName]=l===null?p.type===3?!1:"":l:(r=p.attributeName,f=p.attributeNamespace,l===null?n.removeAttribute(r):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,f?n.setAttributeNS(f,r,l):n.setAttribute(r,l))))}var R=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),F=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),O=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),V=Symbol.iterator;function oe(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,U;function ne(n){if(U===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);U=r&&r[1]||""}return`
`+U+n}var be=!1;function Z(n,r){if(!n||be)return"";be=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(te){var f=te}Reflect.construct(n,[],r)}else{try{r.call()}catch(te){f=te}n.call(r.prototype)}else{try{throw Error()}catch(te){f=te}n()}}catch(te){if(te&&f&&typeof te.stack=="string"){for(var p=te.stack.split(`
`),_=f.stack.split(`
`),T=p.length-1,D=_.length-1;1<=T&&0<=D&&p[T]!==_[D];)D--;for(;1<=T&&0<=D;T--,D--)if(p[T]!==_[D]){if(T!==1||D!==1)do if(T--,D--,0>D||p[T]!==_[D]){var B=`
`+p[T].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=T&&0<=D);break}}}finally{be=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?ne(n):""}function ue(n){switch(n.tag){case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return n=Z(n.type,!1),n;case 11:return n=Z(n.type.render,!1),n;case 1:return n=Z(n.type,!0),n;default:return""}}function ye(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case F:return"Portal";case P:return"Profiler";case G:return"StrictMode";case J:return"Suspense";case ce:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case O:return(n.displayName||"Context")+".Consumer";case b:return(n._context.displayName||"Context")+".Provider";case ae:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case de:return r=n.displayName||null,r!==null?r:ye(n.type)||"Memo";case se:r=n._payload,n=n._init;try{return ye(n(r))}catch{}}return null}function ge(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(r);case 8:return r===G?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Te(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Le(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function $e(n){var r=Le(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),f=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(T){f=""+T,_.call(this,T)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(T){f=""+T},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Ct(n){n._valueTracker||(n._valueTracker=$e(n))}function ct(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),f="";return n&&(f=Le(n)?n.checked?"true":"false":n.value),n=f,n!==l?(r.setValue(n),!0):!1}function Pt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function z(n,r){var l=r.checked;return re({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function Tn(n,r){var l=r.defaultValue==null?"":r.defaultValue,f=r.checked!=null?r.checked:r.defaultChecked;l=Te(r.value!=null?r.value:l),n._wrapperState={initialChecked:f,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function vt(n,r){r=r.checked,r!=null&&C(n,"checked",r,!1)}function ht(n,r){vt(n,r);var l=Te(r.value),f=r.type;if(l!=null)f==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(f==="submit"||f==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Lt(n,r.type,l):r.hasOwnProperty("defaultValue")&&Lt(n,r.type,Te(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function je(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var f=r.type;if(!(f!=="submit"&&f!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function Lt(n,r,l){(r!=="number"||Pt(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var Ge=Array.isArray;function L(n,r,l,f){if(n=n.options,r){r={};for(var p=0;p<l.length;p++)r["$"+l[p]]=!0;for(l=0;l<n.length;l++)p=r.hasOwnProperty("$"+n[l].value),n[l].selected!==p&&(n[l].selected=p),p&&f&&(n[l].defaultSelected=!0)}else{for(l=""+Te(l),r=null,p=0;p<n.length;p++){if(n[p].value===l){n[p].selected=!0,f&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function w(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Q(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(Ge(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:Te(l)}}function pe(n,r){var l=Te(r.value),f=Te(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),f!=null&&(n.defaultValue=""+f)}function ve(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function fe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?fe(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var we,Ne=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,f,p){MSApp.execUnsafeLocalFunction(function(){return n(r,l,f,p)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(we=we||document.createElement("div"),we.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=we.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function ft(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){Oe.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Me[r]=Me[n]})});function Ke(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Me.hasOwnProperty(n)&&Me[n]?(""+r).trim():r+"px"}function et(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var f=l.indexOf("--")===0,p=Ke(l,r[l],f);l==="float"&&(l="cssFloat"),f?n.setProperty(l,p):n[l]=p}}var ke=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pt(n,r){if(r){if(ke[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function rt(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bt=null;function W(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ae=null,ie=null,he=null;function De(n){if(n=Oo(n)){if(typeof Ae!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Wa(r),Ae(n.stateNode,n.type,r))}}function Pe(n){ie?he?he.push(n):he=[n]:ie=n}function st(){if(ie){var n=ie,r=he;if(he=ie=null,De(n),r)for(n=0;n<r.length;n++)De(r[n])}}function Nt(n,r){return n(r)}function Jt(){}var Et=!1;function Un(n,r,l){if(Et)return n(r,l);Et=!0;try{return Nt(n,r,l)}finally{Et=!1,(ie!==null||he!==null)&&(Jt(),st())}}function wn(n,r){var l=n.stateNode;if(l===null)return null;var f=Wa(l);if(f===null)return null;l=f[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(n=n.type,f=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!f;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var fs=!1;if(c)try{var er={};Object.defineProperty(er,"passive",{get:function(){fs=!0}}),window.addEventListener("test",er,er),window.removeEventListener("test",er,er)}catch{fs=!1}function Li(n,r,l,f,p,_,T,D,B){var te=Array.prototype.slice.call(arguments,3);try{r.apply(l,te)}catch(_e){this.onError(_e)}}var Di=!1,Nr=null,Fr=!1,tr=null,Ma={onError:function(n){Di=!0,Nr=n}};function ds(n,r,l,f,p,_,T,D,B){Di=!1,Nr=null,Li.apply(Ma,arguments)}function Ea(n,r,l,f,p,_,T,D,B){if(ds.apply(this,arguments),Di){if(Di){var te=Nr;Di=!1,Nr=null}else throw Error(t(198));Fr||(Fr=!0,tr=te)}}function xi(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,r.flags&4098&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function Ta(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function wa(n){if(xi(n)!==n)throw Error(t(188))}function Tu(n){var r=n.alternate;if(!r){if(r=xi(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,f=r;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(f=p.return,f!==null){l=f;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return wa(p),n;if(_===f)return wa(p),r;_=_.sibling}throw Error(t(188))}if(l.return!==f.return)l=p,f=_;else{for(var T=!1,D=p.child;D;){if(D===l){T=!0,l=p,f=_;break}if(D===f){T=!0,f=p,l=_;break}D=D.sibling}if(!T){for(D=_.child;D;){if(D===l){T=!0,l=_,f=p;break}if(D===f){T=!0,f=_,l=p;break}D=D.sibling}if(!T)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function Aa(n){return n=Tu(n),n!==null?Ra(n):null}function Ra(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Ra(n);if(r!==null)return r;n=n.sibling}return null}var Ca=e.unstable_scheduleCallback,A=e.unstable_cancelCallback,X=e.unstable_shouldYield,ee=e.unstable_requestPaint,$=e.unstable_now,Y=e.unstable_getCurrentPriorityLevel,Se=e.unstable_ImmediatePriority,Re=e.unstable_UserBlockingPriority,Ie=e.unstable_NormalPriority,Be=e.unstable_LowPriority,tt=e.unstable_IdlePriority,Je=null,Ve=null;function xt(n){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(Je,n,void 0,(n.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:St,jt=Math.log,zt=Math.LN2;function St(n){return n>>>=0,n===0?32:31-(jt(n)/zt|0)|0}var Ye=64,Yt=4194304;function _t(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function gn(n,r){var l=n.pendingLanes;if(l===0)return 0;var f=0,p=n.suspendedLanes,_=n.pingedLanes,T=l&268435455;if(T!==0){var D=T&~p;D!==0?f=_t(D):(_&=T,_!==0&&(f=_t(_)))}else T=l&~p,T!==0?f=_t(T):_!==0&&(f=_t(_));if(f===0)return 0;if(r!==0&&r!==f&&!(r&p)&&(p=f&-f,_=r&-r,p>=_||p===16&&(_&4194240)!==0))return r;if(f&4&&(f|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=f;0<r;)l=31-ot(r),p=1<<l,f|=n[l],r&=~p;return f}function nr(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function An(n,r){for(var l=n.suspendedLanes,f=n.pingedLanes,p=n.expirationTimes,_=n.pendingLanes;0<_;){var T=31-ot(_),D=1<<T,B=p[T];B===-1?(!(D&l)||D&f)&&(p[T]=nr(D,r)):B<=r&&(n.expiredLanes|=D),_&=~D}}function Ii(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function It(){var n=Ye;return Ye<<=1,!(Ye&4194240)&&(Ye=64),n}function vn(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function sn(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-ot(r),n[r]=l}function dn(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var f=n.eventTimes;for(n=n.expirationTimes;0<l;){var p=31-ot(l),_=1<<p;r[p]=0,f[p]=-1,n[p]=-1,l&=~_}}function on(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var f=31-ot(l),p=1<<f;p&r|n[f]&r&&(n[f]|=r),l&=~p}}var Tt=0;function Si(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var nh,wu,ih,rh,sh,Au=!1,ba=[],ir=null,rr=null,sr=null,So=new Map,Mo=new Map,or=[],Hv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function oh(n,r){switch(n){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":So.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(r.pointerId)}}function Eo(n,r,l,f,p,_){return n===null||n.nativeEvent!==_?(n={blockedOn:r,domEventName:l,eventSystemFlags:f,nativeEvent:_,targetContainers:[p]},r!==null&&(r=Oo(r),r!==null&&wu(r)),n):(n.eventSystemFlags|=f,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function Gv(n,r,l,f,p){switch(r){case"focusin":return ir=Eo(ir,n,r,l,f,p),!0;case"dragenter":return rr=Eo(rr,n,r,l,f,p),!0;case"mouseover":return sr=Eo(sr,n,r,l,f,p),!0;case"pointerover":var _=p.pointerId;return So.set(_,Eo(So.get(_)||null,n,r,l,f,p)),!0;case"gotpointercapture":return _=p.pointerId,Mo.set(_,Eo(Mo.get(_)||null,n,r,l,f,p)),!0}return!1}function ah(n){var r=Or(n.target);if(r!==null){var l=xi(r);if(l!==null){if(r=l.tag,r===13){if(r=Ta(l),r!==null){n.blockedOn=r,sh(n.priority,function(){ih(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Pa(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Cu(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var f=new l.constructor(l.type,l);bt=f,l.target.dispatchEvent(f),bt=null}else return r=Oo(l),r!==null&&wu(r),n.blockedOn=l,!1;r.shift()}return!0}function lh(n,r,l){Pa(n)&&l.delete(r)}function Wv(){Au=!1,ir!==null&&Pa(ir)&&(ir=null),rr!==null&&Pa(rr)&&(rr=null),sr!==null&&Pa(sr)&&(sr=null),So.forEach(lh),Mo.forEach(lh)}function To(n,r){n.blockedOn===r&&(n.blockedOn=null,Au||(Au=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Wv)))}function wo(n){function r(p){return To(p,n)}if(0<ba.length){To(ba[0],n);for(var l=1;l<ba.length;l++){var f=ba[l];f.blockedOn===n&&(f.blockedOn=null)}}for(ir!==null&&To(ir,n),rr!==null&&To(rr,n),sr!==null&&To(sr,n),So.forEach(r),Mo.forEach(r),l=0;l<or.length;l++)f=or[l],f.blockedOn===n&&(f.blockedOn=null);for(;0<or.length&&(l=or[0],l.blockedOn===null);)ah(l),l.blockedOn===null&&or.shift()}var hs=R.ReactCurrentBatchConfig,La=!0;function Xv(n,r,l,f){var p=Tt,_=hs.transition;hs.transition=null;try{Tt=1,Ru(n,r,l,f)}finally{Tt=p,hs.transition=_}}function jv(n,r,l,f){var p=Tt,_=hs.transition;hs.transition=null;try{Tt=4,Ru(n,r,l,f)}finally{Tt=p,hs.transition=_}}function Ru(n,r,l,f){if(La){var p=Cu(n,r,l,f);if(p===null)Xu(n,r,f,Da,l),oh(n,f);else if(Gv(p,n,r,l,f))f.stopPropagation();else if(oh(n,f),r&4&&-1<Hv.indexOf(n)){for(;p!==null;){var _=Oo(p);if(_!==null&&nh(_),_=Cu(n,r,l,f),_===null&&Xu(n,r,f,Da,l),_===p)break;p=_}p!==null&&f.stopPropagation()}else Xu(n,r,f,null,l)}}var Da=null;function Cu(n,r,l,f){if(Da=null,n=W(f),n=Or(n),n!==null)if(r=xi(n),r===null)n=null;else if(l=r.tag,l===13){if(n=Ta(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Da=n,null}function uh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y()){case Se:return 1;case Re:return 4;case Ie:case Be:return 16;case tt:return 536870912;default:return 16}default:return 16}}var ar=null,bu=null,Ia=null;function ch(){if(Ia)return Ia;var n,r=bu,l=r.length,f,p="value"in ar?ar.value:ar.textContent,_=p.length;for(n=0;n<l&&r[n]===p[n];n++);var T=l-n;for(f=1;f<=T&&r[l-f]===p[_-f];f++);return Ia=p.slice(n,1<f?1-f:void 0)}function Ua(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Na(){return!0}function fh(){return!1}function Wn(n){function r(l,f,p,_,T){this._reactName=l,this._targetInst=p,this.type=f,this.nativeEvent=_,this.target=T,this.currentTarget=null;for(var D in n)n.hasOwnProperty(D)&&(l=n[D],this[D]=l?l(_):_[D]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Na:fh,this.isPropagationStopped=fh,this}return re(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Na)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Na)},persist:function(){},isPersistent:Na}),r}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pu=Wn(ps),Ao=re({},ps,{view:0,detail:0}),Yv=Wn(Ao),Lu,Du,Ro,Fa=re({},Ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ro&&(Ro&&n.type==="mousemove"?(Lu=n.screenX-Ro.screenX,Du=n.screenY-Ro.screenY):Du=Lu=0,Ro=n),Lu)},movementY:function(n){return"movementY"in n?n.movementY:Du}}),dh=Wn(Fa),qv=re({},Fa,{dataTransfer:0}),$v=Wn(qv),Kv=re({},Ao,{relatedTarget:0}),Iu=Wn(Kv),Zv=re({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),Qv=Wn(Zv),Jv=re({},ps,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),e_=Wn(Jv),t_=re({},ps,{data:0}),hh=Wn(t_),n_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},i_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},r_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function s_(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=r_[n])?!!r[n]:!1}function Uu(){return s_}var o_=re({},Ao,{key:function(n){if(n.key){var r=n_[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Ua(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?i_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uu,charCode:function(n){return n.type==="keypress"?Ua(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ua(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),a_=Wn(o_),l_=re({},Fa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ph=Wn(l_),u_=re({},Ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uu}),c_=Wn(u_),f_=re({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),d_=Wn(f_),h_=re({},Fa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),p_=Wn(h_),m_=[9,13,27,32],Nu=c&&"CompositionEvent"in window,Co=null;c&&"documentMode"in document&&(Co=document.documentMode);var g_=c&&"TextEvent"in window&&!Co,mh=c&&(!Nu||Co&&8<Co&&11>=Co),gh=" ",vh=!1;function _h(n,r){switch(n){case"keyup":return m_.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ms=!1;function v_(n,r){switch(n){case"compositionend":return yh(r);case"keypress":return r.which!==32?null:(vh=!0,gh);case"textInput":return n=r.data,n===gh&&vh?null:n;default:return null}}function __(n,r){if(ms)return n==="compositionend"||!Nu&&_h(n,r)?(n=ch(),Ia=bu=ar=null,ms=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return mh&&r.locale!=="ko"?null:r.data;default:return null}}var y_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xh(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!y_[n.type]:r==="textarea"}function Sh(n,r,l,f){Pe(f),r=Va(r,"onChange"),0<r.length&&(l=new Pu("onChange","change",null,l,f),n.push({event:l,listeners:r}))}var bo=null,Po=null;function x_(n){Bh(n,0)}function Oa(n){var r=xs(n);if(ct(r))return n}function S_(n,r){if(n==="change")return r}var Mh=!1;if(c){var Fu;if(c){var Ou="oninput"in document;if(!Ou){var Eh=document.createElement("div");Eh.setAttribute("oninput","return;"),Ou=typeof Eh.oninput=="function"}Fu=Ou}else Fu=!1;Mh=Fu&&(!document.documentMode||9<document.documentMode)}function Th(){bo&&(bo.detachEvent("onpropertychange",wh),Po=bo=null)}function wh(n){if(n.propertyName==="value"&&Oa(Po)){var r=[];Sh(r,Po,n,W(n)),Un(x_,r)}}function M_(n,r,l){n==="focusin"?(Th(),bo=r,Po=l,bo.attachEvent("onpropertychange",wh)):n==="focusout"&&Th()}function E_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Oa(Po)}function T_(n,r){if(n==="click")return Oa(r)}function w_(n,r){if(n==="input"||n==="change")return Oa(r)}function A_(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var oi=typeof Object.is=="function"?Object.is:A_;function Lo(n,r){if(oi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),f=Object.keys(r);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var p=l[f];if(!d.call(r,p)||!oi(n[p],r[p]))return!1}return!0}function Ah(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Rh(n,r){var l=Ah(n);n=0;for(var f;l;){if(l.nodeType===3){if(f=n+l.textContent.length,n<=r&&f>=r)return{node:l,offset:r-n};n=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Ah(l)}}function Ch(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Ch(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function bh(){for(var n=window,r=Pt();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=Pt(n.document)}return r}function ku(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function R_(n){var r=bh(),l=n.focusedElem,f=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&Ch(l.ownerDocument.documentElement,l)){if(f!==null&&ku(l)){if(r=f.start,n=f.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=l.textContent.length,_=Math.min(f.start,p);f=f.end===void 0?_:Math.min(f.end,p),!n.extend&&_>f&&(p=f,f=_,_=p),p=Rh(l,_);var T=Rh(l,f);p&&T&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),_>f?(n.addRange(r),n.extend(T.node,T.offset)):(r.setEnd(T.node,T.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var C_=c&&"documentMode"in document&&11>=document.documentMode,gs=null,Bu=null,Do=null,zu=!1;function Ph(n,r,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;zu||gs==null||gs!==Pt(f)||(f=gs,"selectionStart"in f&&ku(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Do&&Lo(Do,f)||(Do=f,f=Va(Bu,"onSelect"),0<f.length&&(r=new Pu("onSelect","select",null,r,l),n.push({event:r,listeners:f}),r.target=gs)))}function ka(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var vs={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionend:ka("Transition","TransitionEnd")},Vu={},Lh={};c&&(Lh=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function Ba(n){if(Vu[n])return Vu[n];if(!vs[n])return n;var r=vs[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in Lh)return Vu[n]=r[l];return n}var Dh=Ba("animationend"),Ih=Ba("animationiteration"),Uh=Ba("animationstart"),Nh=Ba("transitionend"),Fh=new Map,Oh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function lr(n,r){Fh.set(n,r),a(r,[n])}for(var Hu=0;Hu<Oh.length;Hu++){var Gu=Oh[Hu],b_=Gu.toLowerCase(),P_=Gu[0].toUpperCase()+Gu.slice(1);lr(b_,"on"+P_)}lr(Dh,"onAnimationEnd"),lr(Ih,"onAnimationIteration"),lr(Uh,"onAnimationStart"),lr("dblclick","onDoubleClick"),lr("focusin","onFocus"),lr("focusout","onBlur"),lr(Nh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),L_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Io));function kh(n,r,l){var f=n.type||"unknown-event";n.currentTarget=l,Ea(f,r,void 0,n),n.currentTarget=null}function Bh(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var f=n[l],p=f.event;f=f.listeners;e:{var _=void 0;if(r)for(var T=f.length-1;0<=T;T--){var D=f[T],B=D.instance,te=D.currentTarget;if(D=D.listener,B!==_&&p.isPropagationStopped())break e;kh(p,D,te),_=B}else for(T=0;T<f.length;T++){if(D=f[T],B=D.instance,te=D.currentTarget,D=D.listener,B!==_&&p.isPropagationStopped())break e;kh(p,D,te),_=B}}}if(Fr)throw n=tr,Fr=!1,tr=null,n}function Ft(n,r){var l=r[Zu];l===void 0&&(l=r[Zu]=new Set);var f=n+"__bubble";l.has(f)||(zh(r,n,2,!1),l.add(f))}function Wu(n,r,l){var f=0;r&&(f|=4),zh(l,n,f,r)}var za="_reactListening"+Math.random().toString(36).slice(2);function Uo(n){if(!n[za]){n[za]=!0,i.forEach(function(l){l!=="selectionchange"&&(L_.has(l)||Wu(l,!1,n),Wu(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[za]||(r[za]=!0,Wu("selectionchange",!1,r))}}function zh(n,r,l,f){switch(uh(r)){case 1:var p=Xv;break;case 4:p=jv;break;default:p=Ru}l=p.bind(null,r,l,n),p=void 0,!fs||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),f?p!==void 0?n.addEventListener(r,l,{capture:!0,passive:p}):n.addEventListener(r,l,!0):p!==void 0?n.addEventListener(r,l,{passive:p}):n.addEventListener(r,l,!1)}function Xu(n,r,l,f,p){var _=f;if(!(r&1)&&!(r&2)&&f!==null)e:for(;;){if(f===null)return;var T=f.tag;if(T===3||T===4){var D=f.stateNode.containerInfo;if(D===p||D.nodeType===8&&D.parentNode===p)break;if(T===4)for(T=f.return;T!==null;){var B=T.tag;if((B===3||B===4)&&(B=T.stateNode.containerInfo,B===p||B.nodeType===8&&B.parentNode===p))return;T=T.return}for(;D!==null;){if(T=Or(D),T===null)return;if(B=T.tag,B===5||B===6){f=_=T;continue e}D=D.parentNode}}f=f.return}Un(function(){var te=_,_e=W(l),xe=[];e:{var me=Fh.get(n);if(me!==void 0){var Ue=Pu,ze=n;switch(n){case"keypress":if(Ua(l)===0)break e;case"keydown":case"keyup":Ue=a_;break;case"focusin":ze="focus",Ue=Iu;break;case"focusout":ze="blur",Ue=Iu;break;case"beforeblur":case"afterblur":Ue=Iu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=dh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=$v;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=c_;break;case Dh:case Ih:case Uh:Ue=Qv;break;case Nh:Ue=d_;break;case"scroll":Ue=Yv;break;case"wheel":Ue=p_;break;case"copy":case"cut":case"paste":Ue=e_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=ph}var He=(r&4)!==0,$t=!He&&n==="scroll",q=He?me!==null?me+"Capture":null:me;He=[];for(var H=te,K;H!==null;){K=H;var Ee=K.stateNode;if(K.tag===5&&Ee!==null&&(K=Ee,q!==null&&(Ee=wn(H,q),Ee!=null&&He.push(No(H,Ee,K)))),$t)break;H=H.return}0<He.length&&(me=new Ue(me,ze,null,l,_e),xe.push({event:me,listeners:He}))}}if(!(r&7)){e:{if(me=n==="mouseover"||n==="pointerover",Ue=n==="mouseout"||n==="pointerout",me&&l!==bt&&(ze=l.relatedTarget||l.fromElement)&&(Or(ze)||ze[Ui]))break e;if((Ue||me)&&(me=_e.window===_e?_e:(me=_e.ownerDocument)?me.defaultView||me.parentWindow:window,Ue?(ze=l.relatedTarget||l.toElement,Ue=te,ze=ze?Or(ze):null,ze!==null&&($t=xi(ze),ze!==$t||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Ue=null,ze=te),Ue!==ze)){if(He=dh,Ee="onMouseLeave",q="onMouseEnter",H="mouse",(n==="pointerout"||n==="pointerover")&&(He=ph,Ee="onPointerLeave",q="onPointerEnter",H="pointer"),$t=Ue==null?me:xs(Ue),K=ze==null?me:xs(ze),me=new He(Ee,H+"leave",Ue,l,_e),me.target=$t,me.relatedTarget=K,Ee=null,Or(_e)===te&&(He=new He(q,H+"enter",ze,l,_e),He.target=K,He.relatedTarget=$t,Ee=He),$t=Ee,Ue&&ze)t:{for(He=Ue,q=ze,H=0,K=He;K;K=_s(K))H++;for(K=0,Ee=q;Ee;Ee=_s(Ee))K++;for(;0<H-K;)He=_s(He),H--;for(;0<K-H;)q=_s(q),K--;for(;H--;){if(He===q||q!==null&&He===q.alternate)break t;He=_s(He),q=_s(q)}He=null}else He=null;Ue!==null&&Vh(xe,me,Ue,He,!1),ze!==null&&$t!==null&&Vh(xe,$t,ze,He,!0)}}e:{if(me=te?xs(te):window,Ue=me.nodeName&&me.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&me.type==="file")var Xe=S_;else if(xh(me))if(Mh)Xe=w_;else{Xe=E_;var Ze=M_}else(Ue=me.nodeName)&&Ue.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Xe=T_);if(Xe&&(Xe=Xe(n,te))){Sh(xe,Xe,l,_e);break e}Ze&&Ze(n,me,te),n==="focusout"&&(Ze=me._wrapperState)&&Ze.controlled&&me.type==="number"&&Lt(me,"number",me.value)}switch(Ze=te?xs(te):window,n){case"focusin":(xh(Ze)||Ze.contentEditable==="true")&&(gs=Ze,Bu=te,Do=null);break;case"focusout":Do=Bu=gs=null;break;case"mousedown":zu=!0;break;case"contextmenu":case"mouseup":case"dragend":zu=!1,Ph(xe,l,_e);break;case"selectionchange":if(C_)break;case"keydown":case"keyup":Ph(xe,l,_e)}var Qe;if(Nu)e:{switch(n){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else ms?_h(n,l)&&(nt="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(nt="onCompositionStart");nt&&(mh&&l.locale!=="ko"&&(ms||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&ms&&(Qe=ch()):(ar=_e,bu="value"in ar?ar.value:ar.textContent,ms=!0)),Ze=Va(te,nt),0<Ze.length&&(nt=new hh(nt,n,null,l,_e),xe.push({event:nt,listeners:Ze}),Qe?nt.data=Qe:(Qe=yh(l),Qe!==null&&(nt.data=Qe)))),(Qe=g_?v_(n,l):__(n,l))&&(te=Va(te,"onBeforeInput"),0<te.length&&(_e=new hh("onBeforeInput","beforeinput",null,l,_e),xe.push({event:_e,listeners:te}),_e.data=Qe))}Bh(xe,r)})}function No(n,r,l){return{instance:n,listener:r,currentTarget:l}}function Va(n,r){for(var l=r+"Capture",f=[];n!==null;){var p=n,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=wn(n,l),_!=null&&f.unshift(No(n,_,p)),_=wn(n,r),_!=null&&f.push(No(n,_,p))),n=n.return}return f}function _s(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Vh(n,r,l,f,p){for(var _=r._reactName,T=[];l!==null&&l!==f;){var D=l,B=D.alternate,te=D.stateNode;if(B!==null&&B===f)break;D.tag===5&&te!==null&&(D=te,p?(B=wn(l,_),B!=null&&T.unshift(No(l,B,D))):p||(B=wn(l,_),B!=null&&T.push(No(l,B,D)))),l=l.return}T.length!==0&&n.push({event:r,listeners:T})}var D_=/\r\n?/g,I_=/\u0000|\uFFFD/g;function Hh(n){return(typeof n=="string"?n:""+n).replace(D_,`
`).replace(I_,"")}function Ha(n,r,l){if(r=Hh(r),Hh(n)!==r&&l)throw Error(t(425))}function Ga(){}var ju=null,Yu=null;function qu(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var $u=typeof setTimeout=="function"?setTimeout:void 0,U_=typeof clearTimeout=="function"?clearTimeout:void 0,Gh=typeof Promise=="function"?Promise:void 0,N_=typeof queueMicrotask=="function"?queueMicrotask:typeof Gh<"u"?function(n){return Gh.resolve(null).then(n).catch(F_)}:$u;function F_(n){setTimeout(function(){throw n})}function Ku(n,r){var l=r,f=0;do{var p=l.nextSibling;if(n.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(f===0){n.removeChild(p),wo(r);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=p}while(l);wo(r)}function ur(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Wh(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var ys=Math.random().toString(36).slice(2),Mi="__reactFiber$"+ys,Fo="__reactProps$"+ys,Ui="__reactContainer$"+ys,Zu="__reactEvents$"+ys,O_="__reactListeners$"+ys,k_="__reactHandles$"+ys;function Or(n){var r=n[Mi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[Ui]||l[Mi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=Wh(n);n!==null;){if(l=n[Mi])return l;n=Wh(n)}return r}n=l,l=n.parentNode}return null}function Oo(n){return n=n[Mi]||n[Ui],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function xs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Wa(n){return n[Fo]||null}var Qu=[],Ss=-1;function cr(n){return{current:n}}function Ot(n){0>Ss||(n.current=Qu[Ss],Qu[Ss]=null,Ss--)}function Ut(n,r){Ss++,Qu[Ss]=n.current,n.current=r}var fr={},_n=cr(fr),Nn=cr(!1),kr=fr;function Ms(n,r){var l=n.type.contextTypes;if(!l)return fr;var f=n.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===r)return f.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=r[_];return f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function Fn(n){return n=n.childContextTypes,n!=null}function Xa(){Ot(Nn),Ot(_n)}function Xh(n,r,l){if(_n.current!==fr)throw Error(t(168));Ut(_n,r),Ut(Nn,l)}function jh(n,r,l){var f=n.stateNode;if(r=r.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var p in f)if(!(p in r))throw Error(t(108,ge(n)||"Unknown",p));return re({},l,f)}function ja(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||fr,kr=_n.current,Ut(_n,n),Ut(Nn,Nn.current),!0}function Yh(n,r,l){var f=n.stateNode;if(!f)throw Error(t(169));l?(n=jh(n,r,kr),f.__reactInternalMemoizedMergedChildContext=n,Ot(Nn),Ot(_n),Ut(_n,n)):Ot(Nn),Ut(Nn,l)}var Ni=null,Ya=!1,Ju=!1;function qh(n){Ni===null?Ni=[n]:Ni.push(n)}function B_(n){Ya=!0,qh(n)}function dr(){if(!Ju&&Ni!==null){Ju=!0;var n=0,r=Tt;try{var l=Ni;for(Tt=1;n<l.length;n++){var f=l[n];do f=f(!0);while(f!==null)}Ni=null,Ya=!1}catch(p){throw Ni!==null&&(Ni=Ni.slice(n+1)),Ca(Se,dr),p}finally{Tt=r,Ju=!1}}return null}var Es=[],Ts=0,qa=null,$a=0,Zn=[],Qn=0,Br=null,Fi=1,Oi="";function zr(n,r){Es[Ts++]=$a,Es[Ts++]=qa,qa=n,$a=r}function $h(n,r,l){Zn[Qn++]=Fi,Zn[Qn++]=Oi,Zn[Qn++]=Br,Br=n;var f=Fi;n=Oi;var p=32-ot(f)-1;f&=~(1<<p),l+=1;var _=32-ot(r)+p;if(30<_){var T=p-p%5;_=(f&(1<<T)-1).toString(32),f>>=T,p-=T,Fi=1<<32-ot(r)+p|l<<p|f,Oi=_+n}else Fi=1<<_|l<<p|f,Oi=n}function ec(n){n.return!==null&&(zr(n,1),$h(n,1,0))}function tc(n){for(;n===qa;)qa=Es[--Ts],Es[Ts]=null,$a=Es[--Ts],Es[Ts]=null;for(;n===Br;)Br=Zn[--Qn],Zn[Qn]=null,Oi=Zn[--Qn],Zn[Qn]=null,Fi=Zn[--Qn],Zn[Qn]=null}var Xn=null,jn=null,Vt=!1,ai=null;function Kh(n,r){var l=ni(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function Zh(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Xn=n,jn=ur(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Xn=n,jn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=Br!==null?{id:Fi,overflow:Oi}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=ni(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,Xn=n,jn=null,!0):!1;default:return!1}}function nc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ic(n){if(Vt){var r=jn;if(r){var l=r;if(!Zh(n,r)){if(nc(n))throw Error(t(418));r=ur(l.nextSibling);var f=Xn;r&&Zh(n,r)?Kh(f,l):(n.flags=n.flags&-4097|2,Vt=!1,Xn=n)}}else{if(nc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Vt=!1,Xn=n}}}function Qh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Xn=n}function Ka(n){if(n!==Xn)return!1;if(!Vt)return Qh(n),Vt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!qu(n.type,n.memoizedProps)),r&&(r=jn)){if(nc(n))throw Jh(),Error(t(418));for(;r;)Kh(n,r),r=ur(r.nextSibling)}if(Qh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){jn=ur(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}jn=null}}else jn=Xn?ur(n.stateNode.nextSibling):null;return!0}function Jh(){for(var n=jn;n;)n=ur(n.nextSibling)}function ws(){jn=Xn=null,Vt=!1}function rc(n){ai===null?ai=[n]:ai.push(n)}var z_=R.ReactCurrentBatchConfig;function ko(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,n));var p=f,_=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===_?r.ref:(r=function(T){var D=p.refs;T===null?delete D[_]:D[_]=T},r._stringRef=_,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function Za(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function ep(n){var r=n._init;return r(n._payload)}function tp(n){function r(q,H){if(n){var K=q.deletions;K===null?(q.deletions=[H],q.flags|=16):K.push(H)}}function l(q,H){if(!n)return null;for(;H!==null;)r(q,H),H=H.sibling;return null}function f(q,H){for(q=new Map;H!==null;)H.key!==null?q.set(H.key,H):q.set(H.index,H),H=H.sibling;return q}function p(q,H){return q=xr(q,H),q.index=0,q.sibling=null,q}function _(q,H,K){return q.index=K,n?(K=q.alternate,K!==null?(K=K.index,K<H?(q.flags|=2,H):K):(q.flags|=2,H)):(q.flags|=1048576,H)}function T(q){return n&&q.alternate===null&&(q.flags|=2),q}function D(q,H,K,Ee){return H===null||H.tag!==6?(H=$c(K,q.mode,Ee),H.return=q,H):(H=p(H,K),H.return=q,H)}function B(q,H,K,Ee){var Xe=K.type;return Xe===N?_e(q,H,K.props.children,Ee,K.key):H!==null&&(H.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===se&&ep(Xe)===H.type)?(Ee=p(H,K.props),Ee.ref=ko(q,H,K),Ee.return=q,Ee):(Ee=Sl(K.type,K.key,K.props,null,q.mode,Ee),Ee.ref=ko(q,H,K),Ee.return=q,Ee)}function te(q,H,K,Ee){return H===null||H.tag!==4||H.stateNode.containerInfo!==K.containerInfo||H.stateNode.implementation!==K.implementation?(H=Kc(K,q.mode,Ee),H.return=q,H):(H=p(H,K.children||[]),H.return=q,H)}function _e(q,H,K,Ee,Xe){return H===null||H.tag!==7?(H=qr(K,q.mode,Ee,Xe),H.return=q,H):(H=p(H,K),H.return=q,H)}function xe(q,H,K){if(typeof H=="string"&&H!==""||typeof H=="number")return H=$c(""+H,q.mode,K),H.return=q,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case k:return K=Sl(H.type,H.key,H.props,null,q.mode,K),K.ref=ko(q,null,H),K.return=q,K;case F:return H=Kc(H,q.mode,K),H.return=q,H;case se:var Ee=H._init;return xe(q,Ee(H._payload),K)}if(Ge(H)||oe(H))return H=qr(H,q.mode,K,null),H.return=q,H;Za(q,H)}return null}function me(q,H,K,Ee){var Xe=H!==null?H.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Xe!==null?null:D(q,H,""+K,Ee);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case k:return K.key===Xe?B(q,H,K,Ee):null;case F:return K.key===Xe?te(q,H,K,Ee):null;case se:return Xe=K._init,me(q,H,Xe(K._payload),Ee)}if(Ge(K)||oe(K))return Xe!==null?null:_e(q,H,K,Ee,null);Za(q,K)}return null}function Ue(q,H,K,Ee,Xe){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return q=q.get(K)||null,D(H,q,""+Ee,Xe);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case k:return q=q.get(Ee.key===null?K:Ee.key)||null,B(H,q,Ee,Xe);case F:return q=q.get(Ee.key===null?K:Ee.key)||null,te(H,q,Ee,Xe);case se:var Ze=Ee._init;return Ue(q,H,K,Ze(Ee._payload),Xe)}if(Ge(Ee)||oe(Ee))return q=q.get(K)||null,_e(H,q,Ee,Xe,null);Za(H,Ee)}return null}function ze(q,H,K,Ee){for(var Xe=null,Ze=null,Qe=H,nt=H=0,un=null;Qe!==null&&nt<K.length;nt++){Qe.index>nt?(un=Qe,Qe=null):un=Qe.sibling;var At=me(q,Qe,K[nt],Ee);if(At===null){Qe===null&&(Qe=un);break}n&&Qe&&At.alternate===null&&r(q,Qe),H=_(At,H,nt),Ze===null?Xe=At:Ze.sibling=At,Ze=At,Qe=un}if(nt===K.length)return l(q,Qe),Vt&&zr(q,nt),Xe;if(Qe===null){for(;nt<K.length;nt++)Qe=xe(q,K[nt],Ee),Qe!==null&&(H=_(Qe,H,nt),Ze===null?Xe=Qe:Ze.sibling=Qe,Ze=Qe);return Vt&&zr(q,nt),Xe}for(Qe=f(q,Qe);nt<K.length;nt++)un=Ue(Qe,q,nt,K[nt],Ee),un!==null&&(n&&un.alternate!==null&&Qe.delete(un.key===null?nt:un.key),H=_(un,H,nt),Ze===null?Xe=un:Ze.sibling=un,Ze=un);return n&&Qe.forEach(function(Sr){return r(q,Sr)}),Vt&&zr(q,nt),Xe}function He(q,H,K,Ee){var Xe=oe(K);if(typeof Xe!="function")throw Error(t(150));if(K=Xe.call(K),K==null)throw Error(t(151));for(var Ze=Xe=null,Qe=H,nt=H=0,un=null,At=K.next();Qe!==null&&!At.done;nt++,At=K.next()){Qe.index>nt?(un=Qe,Qe=null):un=Qe.sibling;var Sr=me(q,Qe,At.value,Ee);if(Sr===null){Qe===null&&(Qe=un);break}n&&Qe&&Sr.alternate===null&&r(q,Qe),H=_(Sr,H,nt),Ze===null?Xe=Sr:Ze.sibling=Sr,Ze=Sr,Qe=un}if(At.done)return l(q,Qe),Vt&&zr(q,nt),Xe;if(Qe===null){for(;!At.done;nt++,At=K.next())At=xe(q,At.value,Ee),At!==null&&(H=_(At,H,nt),Ze===null?Xe=At:Ze.sibling=At,Ze=At);return Vt&&zr(q,nt),Xe}for(Qe=f(q,Qe);!At.done;nt++,At=K.next())At=Ue(Qe,q,nt,At.value,Ee),At!==null&&(n&&At.alternate!==null&&Qe.delete(At.key===null?nt:At.key),H=_(At,H,nt),Ze===null?Xe=At:Ze.sibling=At,Ze=At);return n&&Qe.forEach(function(_0){return r(q,_0)}),Vt&&zr(q,nt),Xe}function $t(q,H,K,Ee){if(typeof K=="object"&&K!==null&&K.type===N&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case k:e:{for(var Xe=K.key,Ze=H;Ze!==null;){if(Ze.key===Xe){if(Xe=K.type,Xe===N){if(Ze.tag===7){l(q,Ze.sibling),H=p(Ze,K.props.children),H.return=q,q=H;break e}}else if(Ze.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===se&&ep(Xe)===Ze.type){l(q,Ze.sibling),H=p(Ze,K.props),H.ref=ko(q,Ze,K),H.return=q,q=H;break e}l(q,Ze);break}else r(q,Ze);Ze=Ze.sibling}K.type===N?(H=qr(K.props.children,q.mode,Ee,K.key),H.return=q,q=H):(Ee=Sl(K.type,K.key,K.props,null,q.mode,Ee),Ee.ref=ko(q,H,K),Ee.return=q,q=Ee)}return T(q);case F:e:{for(Ze=K.key;H!==null;){if(H.key===Ze)if(H.tag===4&&H.stateNode.containerInfo===K.containerInfo&&H.stateNode.implementation===K.implementation){l(q,H.sibling),H=p(H,K.children||[]),H.return=q,q=H;break e}else{l(q,H);break}else r(q,H);H=H.sibling}H=Kc(K,q.mode,Ee),H.return=q,q=H}return T(q);case se:return Ze=K._init,$t(q,H,Ze(K._payload),Ee)}if(Ge(K))return ze(q,H,K,Ee);if(oe(K))return He(q,H,K,Ee);Za(q,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,H!==null&&H.tag===6?(l(q,H.sibling),H=p(H,K),H.return=q,q=H):(l(q,H),H=$c(K,q.mode,Ee),H.return=q,q=H),T(q)):l(q,H)}return $t}var As=tp(!0),np=tp(!1),Qa=cr(null),Ja=null,Rs=null,sc=null;function oc(){sc=Rs=Ja=null}function ac(n){var r=Qa.current;Ot(Qa),n._currentValue=r}function lc(n,r,l){for(;n!==null;){var f=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,f!==null&&(f.childLanes|=r)):f!==null&&(f.childLanes&r)!==r&&(f.childLanes|=r),n===l)break;n=n.return}}function Cs(n,r){Ja=n,sc=Rs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&r&&(On=!0),n.firstContext=null)}function Jn(n){var r=n._currentValue;if(sc!==n)if(n={context:n,memoizedValue:r,next:null},Rs===null){if(Ja===null)throw Error(t(308));Rs=n,Ja.dependencies={lanes:0,firstContext:n}}else Rs=Rs.next=n;return r}var Vr=null;function uc(n){Vr===null?Vr=[n]:Vr.push(n)}function ip(n,r,l,f){var p=r.interleaved;return p===null?(l.next=l,uc(r)):(l.next=p.next,p.next=l),r.interleaved=l,ki(n,f)}function ki(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var hr=!1;function cc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Bi(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function pr(n,r,l){var f=n.updateQueue;if(f===null)return null;if(f=f.shared,wt&2){var p=f.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),f.pending=r,ki(n,l)}return p=f.interleaved,p===null?(r.next=r,uc(f)):(r.next=p.next,p.next=r),f.interleaved=r,ki(n,l)}function el(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,on(n,l)}}function sp(n,r){var l=n.updateQueue,f=n.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=T:_=_.next=T,l=l.next}while(l!==null);_===null?p=_=r:_=_.next=r}else p=_=r;l={baseState:f.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:f.shared,effects:f.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function tl(n,r,l,f){var p=n.updateQueue;hr=!1;var _=p.firstBaseUpdate,T=p.lastBaseUpdate,D=p.shared.pending;if(D!==null){p.shared.pending=null;var B=D,te=B.next;B.next=null,T===null?_=te:T.next=te,T=B;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,D=_e.lastBaseUpdate,D!==T&&(D===null?_e.firstBaseUpdate=te:D.next=te,_e.lastBaseUpdate=B))}if(_!==null){var xe=p.baseState;T=0,_e=te=B=null,D=_;do{var me=D.lane,Ue=D.eventTime;if((f&me)===me){_e!==null&&(_e=_e.next={eventTime:Ue,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var ze=n,He=D;switch(me=r,Ue=l,He.tag){case 1:if(ze=He.payload,typeof ze=="function"){xe=ze.call(Ue,xe,me);break e}xe=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=He.payload,me=typeof ze=="function"?ze.call(Ue,xe,me):ze,me==null)break e;xe=re({},xe,me);break e;case 2:hr=!0}}D.callback!==null&&D.lane!==0&&(n.flags|=64,me=p.effects,me===null?p.effects=[D]:me.push(D))}else Ue={eventTime:Ue,lane:me,tag:D.tag,payload:D.payload,callback:D.callback,next:null},_e===null?(te=_e=Ue,B=xe):_e=_e.next=Ue,T|=me;if(D=D.next,D===null){if(D=p.shared.pending,D===null)break;me=D,D=me.next,me.next=null,p.lastBaseUpdate=me,p.shared.pending=null}}while(!0);if(_e===null&&(B=xe),p.baseState=B,p.firstBaseUpdate=te,p.lastBaseUpdate=_e,r=p.shared.interleaved,r!==null){p=r;do T|=p.lane,p=p.next;while(p!==r)}else _===null&&(p.shared.lanes=0);Wr|=T,n.lanes=T,n.memoizedState=xe}}function op(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var f=n[r],p=f.callback;if(p!==null){if(f.callback=null,f=l,typeof p!="function")throw Error(t(191,p));p.call(f)}}}var Bo={},Ei=cr(Bo),zo=cr(Bo),Vo=cr(Bo);function Hr(n){if(n===Bo)throw Error(t(174));return n}function fc(n,r){switch(Ut(Vo,r),Ut(zo,n),Ut(Ei,Bo),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:We(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=We(r,n)}Ot(Ei),Ut(Ei,r)}function bs(){Ot(Ei),Ot(zo),Ot(Vo)}function ap(n){Hr(Vo.current);var r=Hr(Ei.current),l=We(r,n.type);r!==l&&(Ut(zo,n),Ut(Ei,l))}function dc(n){zo.current===n&&(Ot(Ei),Ot(zo))}var Gt=cr(0);function nl(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var hc=[];function pc(){for(var n=0;n<hc.length;n++)hc[n]._workInProgressVersionPrimary=null;hc.length=0}var il=R.ReactCurrentDispatcher,mc=R.ReactCurrentBatchConfig,Gr=0,Wt=null,en=null,an=null,rl=!1,Ho=!1,Go=0,V_=0;function yn(){throw Error(t(321))}function gc(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!oi(n[l],r[l]))return!1;return!0}function vc(n,r,l,f,p,_){if(Gr=_,Wt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,il.current=n===null||n.memoizedState===null?X_:j_,n=l(f,p),Ho){_=0;do{if(Ho=!1,Go=0,25<=_)throw Error(t(301));_+=1,an=en=null,r.updateQueue=null,il.current=Y_,n=l(f,p)}while(Ho)}if(il.current=al,r=en!==null&&en.next!==null,Gr=0,an=en=Wt=null,rl=!1,r)throw Error(t(300));return n}function _c(){var n=Go!==0;return Go=0,n}function Ti(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?Wt.memoizedState=an=n:an=an.next=n,an}function ei(){if(en===null){var n=Wt.alternate;n=n!==null?n.memoizedState:null}else n=en.next;var r=an===null?Wt.memoizedState:an.next;if(r!==null)an=r,en=n;else{if(n===null)throw Error(t(310));en=n,n={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},an===null?Wt.memoizedState=an=n:an=an.next=n}return an}function Wo(n,r){return typeof r=="function"?r(n):r}function yc(n){var r=ei(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=en,p=f.baseQueue,_=l.pending;if(_!==null){if(p!==null){var T=p.next;p.next=_.next,_.next=T}f.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,f=f.baseState;var D=T=null,B=null,te=_;do{var _e=te.lane;if((Gr&_e)===_e)B!==null&&(B=B.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),f=te.hasEagerState?te.eagerState:n(f,te.action);else{var xe={lane:_e,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};B===null?(D=B=xe,T=f):B=B.next=xe,Wt.lanes|=_e,Wr|=_e}te=te.next}while(te!==null&&te!==_);B===null?T=f:B.next=D,oi(f,r.memoizedState)||(On=!0),r.memoizedState=f,r.baseState=T,r.baseQueue=B,l.lastRenderedState=f}if(n=l.interleaved,n!==null){p=n;do _=p.lane,Wt.lanes|=_,Wr|=_,p=p.next;while(p!==n)}else p===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function xc(n){var r=ei(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=l.dispatch,p=l.pending,_=r.memoizedState;if(p!==null){l.pending=null;var T=p=p.next;do _=n(_,T.action),T=T.next;while(T!==p);oi(_,r.memoizedState)||(On=!0),r.memoizedState=_,r.baseQueue===null&&(r.baseState=_),l.lastRenderedState=_}return[_,f]}function lp(){}function up(n,r){var l=Wt,f=ei(),p=r(),_=!oi(f.memoizedState,p);if(_&&(f.memoizedState=p,On=!0),f=f.queue,Sc(dp.bind(null,l,f,n),[n]),f.getSnapshot!==r||_||an!==null&&an.memoizedState.tag&1){if(l.flags|=2048,Xo(9,fp.bind(null,l,f,p,r),void 0,null),ln===null)throw Error(t(349));Gr&30||cp(l,r,p)}return p}function cp(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=Wt.updateQueue,r===null?(r={lastEffect:null,stores:null},Wt.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function fp(n,r,l,f){r.value=l,r.getSnapshot=f,hp(r)&&pp(n)}function dp(n,r,l){return l(function(){hp(r)&&pp(n)})}function hp(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!oi(n,l)}catch{return!0}}function pp(n){var r=ki(n,1);r!==null&&fi(r,n,1,-1)}function mp(n){var r=Ti();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:n},r.queue=n,n=n.dispatch=W_.bind(null,Wt,n),[r.memoizedState,n]}function Xo(n,r,l,f){return n={tag:n,create:r,destroy:l,deps:f,next:null},r=Wt.updateQueue,r===null?(r={lastEffect:null,stores:null},Wt.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(f=l.next,l.next=n,n.next=f,r.lastEffect=n)),n}function gp(){return ei().memoizedState}function sl(n,r,l,f){var p=Ti();Wt.flags|=n,p.memoizedState=Xo(1|r,l,void 0,f===void 0?null:f)}function ol(n,r,l,f){var p=ei();f=f===void 0?null:f;var _=void 0;if(en!==null){var T=en.memoizedState;if(_=T.destroy,f!==null&&gc(f,T.deps)){p.memoizedState=Xo(r,l,_,f);return}}Wt.flags|=n,p.memoizedState=Xo(1|r,l,_,f)}function vp(n,r){return sl(8390656,8,n,r)}function Sc(n,r){return ol(2048,8,n,r)}function _p(n,r){return ol(4,2,n,r)}function yp(n,r){return ol(4,4,n,r)}function xp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Sp(n,r,l){return l=l!=null?l.concat([n]):null,ol(4,4,xp.bind(null,r,n),l)}function Mc(){}function Mp(n,r){var l=ei();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&gc(r,f[1])?f[0]:(l.memoizedState=[n,r],n)}function Ep(n,r){var l=ei();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&gc(r,f[1])?f[0]:(n=n(),l.memoizedState=[n,r],n)}function Tp(n,r,l){return Gr&21?(oi(l,r)||(l=It(),Wt.lanes|=l,Wr|=l,n.baseState=!0),r):(n.baseState&&(n.baseState=!1,On=!0),n.memoizedState=l)}function H_(n,r){var l=Tt;Tt=l!==0&&4>l?l:4,n(!0);var f=mc.transition;mc.transition={};try{n(!1),r()}finally{Tt=l,mc.transition=f}}function wp(){return ei().memoizedState}function G_(n,r,l){var f=_r(n);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},Ap(n))Rp(r,l);else if(l=ip(n,r,l,f),l!==null){var p=Cn();fi(l,n,f,p),Cp(l,r,f)}}function W_(n,r,l){var f=_r(n),p={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(Ap(n))Rp(r,p);else{var _=n.alternate;if(n.lanes===0&&(_===null||_.lanes===0)&&(_=r.lastRenderedReducer,_!==null))try{var T=r.lastRenderedState,D=_(T,l);if(p.hasEagerState=!0,p.eagerState=D,oi(D,T)){var B=r.interleaved;B===null?(p.next=p,uc(r)):(p.next=B.next,B.next=p),r.interleaved=p;return}}catch{}finally{}l=ip(n,r,p,f),l!==null&&(p=Cn(),fi(l,n,f,p),Cp(l,r,f))}}function Ap(n){var r=n.alternate;return n===Wt||r!==null&&r===Wt}function Rp(n,r){Ho=rl=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function Cp(n,r,l){if(l&4194240){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,on(n,l)}}var al={readContext:Jn,useCallback:yn,useContext:yn,useEffect:yn,useImperativeHandle:yn,useInsertionEffect:yn,useLayoutEffect:yn,useMemo:yn,useReducer:yn,useRef:yn,useState:yn,useDebugValue:yn,useDeferredValue:yn,useTransition:yn,useMutableSource:yn,useSyncExternalStore:yn,useId:yn,unstable_isNewReconciler:!1},X_={readContext:Jn,useCallback:function(n,r){return Ti().memoizedState=[n,r===void 0?null:r],n},useContext:Jn,useEffect:vp,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,sl(4194308,4,xp.bind(null,r,n),l)},useLayoutEffect:function(n,r){return sl(4194308,4,n,r)},useInsertionEffect:function(n,r){return sl(4,2,n,r)},useMemo:function(n,r){var l=Ti();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var f=Ti();return r=l!==void 0?l(r):r,f.memoizedState=f.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},f.queue=n,n=n.dispatch=G_.bind(null,Wt,n),[f.memoizedState,n]},useRef:function(n){var r=Ti();return n={current:n},r.memoizedState=n},useState:mp,useDebugValue:Mc,useDeferredValue:function(n){return Ti().memoizedState=n},useTransition:function(){var n=mp(!1),r=n[0];return n=H_.bind(null,n[1]),Ti().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var f=Wt,p=Ti();if(Vt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),ln===null)throw Error(t(349));Gr&30||cp(f,r,l)}p.memoizedState=l;var _={value:l,getSnapshot:r};return p.queue=_,vp(dp.bind(null,f,_,n),[n]),f.flags|=2048,Xo(9,fp.bind(null,f,_,l,r),void 0,null),l},useId:function(){var n=Ti(),r=ln.identifierPrefix;if(Vt){var l=Oi,f=Fi;l=(f&~(1<<32-ot(f)-1)).toString(32)+l,r=":"+r+"R"+l,l=Go++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=V_++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},j_={readContext:Jn,useCallback:Mp,useContext:Jn,useEffect:Sc,useImperativeHandle:Sp,useInsertionEffect:_p,useLayoutEffect:yp,useMemo:Ep,useReducer:yc,useRef:gp,useState:function(){return yc(Wo)},useDebugValue:Mc,useDeferredValue:function(n){var r=ei();return Tp(r,en.memoizedState,n)},useTransition:function(){var n=yc(Wo)[0],r=ei().memoizedState;return[n,r]},useMutableSource:lp,useSyncExternalStore:up,useId:wp,unstable_isNewReconciler:!1},Y_={readContext:Jn,useCallback:Mp,useContext:Jn,useEffect:Sc,useImperativeHandle:Sp,useInsertionEffect:_p,useLayoutEffect:yp,useMemo:Ep,useReducer:xc,useRef:gp,useState:function(){return xc(Wo)},useDebugValue:Mc,useDeferredValue:function(n){var r=ei();return en===null?r.memoizedState=n:Tp(r,en.memoizedState,n)},useTransition:function(){var n=xc(Wo)[0],r=ei().memoizedState;return[n,r]},useMutableSource:lp,useSyncExternalStore:up,useId:wp,unstable_isNewReconciler:!1};function li(n,r){if(n&&n.defaultProps){r=re({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function Ec(n,r,l,f){r=n.memoizedState,l=l(f,r),l=l==null?r:re({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var ll={isMounted:function(n){return(n=n._reactInternals)?xi(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var f=Cn(),p=_r(n),_=Bi(f,p);_.payload=r,l!=null&&(_.callback=l),r=pr(n,_,p),r!==null&&(fi(r,n,p,f),el(r,n,p))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var f=Cn(),p=_r(n),_=Bi(f,p);_.tag=1,_.payload=r,l!=null&&(_.callback=l),r=pr(n,_,p),r!==null&&(fi(r,n,p,f),el(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=Cn(),f=_r(n),p=Bi(l,f);p.tag=2,r!=null&&(p.callback=r),r=pr(n,p,f),r!==null&&(fi(r,n,f,l),el(r,n,f))}};function bp(n,r,l,f,p,_,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(f,_,T):r.prototype&&r.prototype.isPureReactComponent?!Lo(l,f)||!Lo(p,_):!0}function Pp(n,r,l){var f=!1,p=fr,_=r.contextType;return typeof _=="object"&&_!==null?_=Jn(_):(p=Fn(r)?kr:_n.current,f=r.contextTypes,_=(f=f!=null)?Ms(n,p):fr),r=new r(l,_),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ll,n.stateNode=r,r._reactInternals=n,f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=_),r}function Lp(n,r,l,f){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,f),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,f),r.state!==n&&ll.enqueueReplaceState(r,r.state,null)}function Tc(n,r,l,f){var p=n.stateNode;p.props=l,p.state=n.memoizedState,p.refs={},cc(n);var _=r.contextType;typeof _=="object"&&_!==null?p.context=Jn(_):(_=Fn(r)?kr:_n.current,p.context=Ms(n,_)),p.state=n.memoizedState,_=r.getDerivedStateFromProps,typeof _=="function"&&(Ec(n,r,_,l),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&ll.enqueueReplaceState(p,p.state,null),tl(n,l,p,f),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Ps(n,r){try{var l="",f=r;do l+=ue(f),f=f.return;while(f);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:n,source:r,stack:p,digest:null}}function wc(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function Ac(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var q_=typeof WeakMap=="function"?WeakMap:Map;function Dp(n,r,l){l=Bi(-1,l),l.tag=3,l.payload={element:null};var f=r.value;return l.callback=function(){ml||(ml=!0,Vc=f),Ac(n,r)},l}function Ip(n,r,l){l=Bi(-1,l),l.tag=3;var f=n.type.getDerivedStateFromError;if(typeof f=="function"){var p=r.value;l.payload=function(){return f(p)},l.callback=function(){Ac(n,r)}}var _=n.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){Ac(n,r),typeof f!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})}),l}function Up(n,r,l){var f=n.pingCache;if(f===null){f=n.pingCache=new q_;var p=new Set;f.set(r,p)}else p=f.get(r),p===void 0&&(p=new Set,f.set(r,p));p.has(l)||(p.add(l),n=l0.bind(null,n,r,l),r.then(n,n))}function Np(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Fp(n,r,l,f,p){return n.mode&1?(n.flags|=65536,n.lanes=p,n):(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=Bi(-1,1),r.tag=2,pr(l,r,1))),l.lanes|=1),n)}var $_=R.ReactCurrentOwner,On=!1;function Rn(n,r,l,f){r.child=n===null?np(r,null,l,f):As(r,n.child,l,f)}function Op(n,r,l,f,p){l=l.render;var _=r.ref;return Cs(r,p),f=vc(n,r,l,f,_,p),l=_c(),n!==null&&!On?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,zi(n,r,p)):(Vt&&l&&ec(r),r.flags|=1,Rn(n,r,f,p),r.child)}function kp(n,r,l,f,p){if(n===null){var _=l.type;return typeof _=="function"&&!qc(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=_,Bp(n,r,_,f,p)):(n=Sl(l.type,null,f,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(_=n.child,!(n.lanes&p)){var T=_.memoizedProps;if(l=l.compare,l=l!==null?l:Lo,l(T,f)&&n.ref===r.ref)return zi(n,r,p)}return r.flags|=1,n=xr(_,f),n.ref=r.ref,n.return=r,r.child=n}function Bp(n,r,l,f,p){if(n!==null){var _=n.memoizedProps;if(Lo(_,f)&&n.ref===r.ref)if(On=!1,r.pendingProps=f=_,(n.lanes&p)!==0)n.flags&131072&&(On=!0);else return r.lanes=n.lanes,zi(n,r,p)}return Rc(n,r,l,f,p)}function zp(n,r,l){var f=r.pendingProps,p=f.children,_=n!==null?n.memoizedState:null;if(f.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ut(Ds,Yn),Yn|=l;else{if(!(l&1073741824))return n=_!==null?_.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Ut(Ds,Yn),Yn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=_!==null?_.baseLanes:l,Ut(Ds,Yn),Yn|=f}else _!==null?(f=_.baseLanes|l,r.memoizedState=null):f=l,Ut(Ds,Yn),Yn|=f;return Rn(n,r,p,l),r.child}function Vp(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Rc(n,r,l,f,p){var _=Fn(l)?kr:_n.current;return _=Ms(r,_),Cs(r,p),l=vc(n,r,l,f,_,p),f=_c(),n!==null&&!On?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,zi(n,r,p)):(Vt&&f&&ec(r),r.flags|=1,Rn(n,r,l,p),r.child)}function Hp(n,r,l,f,p){if(Fn(l)){var _=!0;ja(r)}else _=!1;if(Cs(r,p),r.stateNode===null)cl(n,r),Pp(r,l,f),Tc(r,l,f,p),f=!0;else if(n===null){var T=r.stateNode,D=r.memoizedProps;T.props=D;var B=T.context,te=l.contextType;typeof te=="object"&&te!==null?te=Jn(te):(te=Fn(l)?kr:_n.current,te=Ms(r,te));var _e=l.getDerivedStateFromProps,xe=typeof _e=="function"||typeof T.getSnapshotBeforeUpdate=="function";xe||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(D!==f||B!==te)&&Lp(r,T,f,te),hr=!1;var me=r.memoizedState;T.state=me,tl(r,f,T,p),B=r.memoizedState,D!==f||me!==B||Nn.current||hr?(typeof _e=="function"&&(Ec(r,l,_e,f),B=r.memoizedState),(D=hr||bp(r,l,D,f,me,B,te))?(xe||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(r.flags|=4194308)):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=f,r.memoizedState=B),T.props=f,T.state=B,T.context=te,f=D):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),f=!1)}else{T=r.stateNode,rp(n,r),D=r.memoizedProps,te=r.type===r.elementType?D:li(r.type,D),T.props=te,xe=r.pendingProps,me=T.context,B=l.contextType,typeof B=="object"&&B!==null?B=Jn(B):(B=Fn(l)?kr:_n.current,B=Ms(r,B));var Ue=l.getDerivedStateFromProps;(_e=typeof Ue=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(D!==xe||me!==B)&&Lp(r,T,f,B),hr=!1,me=r.memoizedState,T.state=me,tl(r,f,T,p);var ze=r.memoizedState;D!==xe||me!==ze||Nn.current||hr?(typeof Ue=="function"&&(Ec(r,l,Ue,f),ze=r.memoizedState),(te=hr||bp(r,l,te,f,me,ze,B)||!1)?(_e||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(f,ze,B),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(f,ze,B)),typeof T.componentDidUpdate=="function"&&(r.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof T.componentDidUpdate!="function"||D===n.memoizedProps&&me===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&me===n.memoizedState||(r.flags|=1024),r.memoizedProps=f,r.memoizedState=ze),T.props=f,T.state=ze,T.context=B,f=te):(typeof T.componentDidUpdate!="function"||D===n.memoizedProps&&me===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&me===n.memoizedState||(r.flags|=1024),f=!1)}return Cc(n,r,l,f,_,p)}function Cc(n,r,l,f,p,_){Vp(n,r);var T=(r.flags&128)!==0;if(!f&&!T)return p&&Yh(r,l,!1),zi(n,r,_);f=r.stateNode,$_.current=r;var D=T&&typeof l.getDerivedStateFromError!="function"?null:f.render();return r.flags|=1,n!==null&&T?(r.child=As(r,n.child,null,_),r.child=As(r,null,D,_)):Rn(n,r,D,_),r.memoizedState=f.state,p&&Yh(r,l,!0),r.child}function Gp(n){var r=n.stateNode;r.pendingContext?Xh(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Xh(n,r.context,!1),fc(n,r.containerInfo)}function Wp(n,r,l,f,p){return ws(),rc(p),r.flags|=256,Rn(n,r,l,f),r.child}var bc={dehydrated:null,treeContext:null,retryLane:0};function Pc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Xp(n,r,l){var f=r.pendingProps,p=Gt.current,_=!1,T=(r.flags&128)!==0,D;if((D=T)||(D=n!==null&&n.memoizedState===null?!1:(p&2)!==0),D?(_=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Ut(Gt,p&1),n===null)return ic(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(r.mode&1?n.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(T=f.children,n=f.fallback,_?(f=r.mode,_=r.child,T={mode:"hidden",children:T},!(f&1)&&_!==null?(_.childLanes=0,_.pendingProps=T):_=Ml(T,f,0,null),n=qr(n,f,l,null),_.return=r,n.return=r,_.sibling=n,r.child=_,r.child.memoizedState=Pc(l),r.memoizedState=bc,n):Lc(r,T));if(p=n.memoizedState,p!==null&&(D=p.dehydrated,D!==null))return K_(n,r,T,f,D,p,l);if(_){_=f.fallback,T=r.mode,p=n.child,D=p.sibling;var B={mode:"hidden",children:f.children};return!(T&1)&&r.child!==p?(f=r.child,f.childLanes=0,f.pendingProps=B,r.deletions=null):(f=xr(p,B),f.subtreeFlags=p.subtreeFlags&14680064),D!==null?_=xr(D,_):(_=qr(_,T,l,null),_.flags|=2),_.return=r,f.return=r,f.sibling=_,r.child=f,f=_,_=r.child,T=n.child.memoizedState,T=T===null?Pc(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},_.memoizedState=T,_.childLanes=n.childLanes&~l,r.memoizedState=bc,f}return _=n.child,n=_.sibling,f=xr(_,{mode:"visible",children:f.children}),!(r.mode&1)&&(f.lanes=l),f.return=r,f.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=f,r.memoizedState=null,f}function Lc(n,r){return r=Ml({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function ul(n,r,l,f){return f!==null&&rc(f),As(r,n.child,null,l),n=Lc(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function K_(n,r,l,f,p,_,T){if(l)return r.flags&256?(r.flags&=-257,f=wc(Error(t(422))),ul(n,r,T,f)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(_=f.fallback,p=r.mode,f=Ml({mode:"visible",children:f.children},p,0,null),_=qr(_,p,T,null),_.flags|=2,f.return=r,_.return=r,f.sibling=_,r.child=f,r.mode&1&&As(r,n.child,null,T),r.child.memoizedState=Pc(T),r.memoizedState=bc,_);if(!(r.mode&1))return ul(n,r,T,null);if(p.data==="$!"){if(f=p.nextSibling&&p.nextSibling.dataset,f)var D=f.dgst;return f=D,_=Error(t(419)),f=wc(_,f,void 0),ul(n,r,T,f)}if(D=(T&n.childLanes)!==0,On||D){if(f=ln,f!==null){switch(T&-T){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=p&(f.suspendedLanes|T)?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,ki(n,p),fi(f,n,p,-1))}return Yc(),f=wc(Error(t(421))),ul(n,r,T,f)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=u0.bind(null,n),p._reactRetry=r,null):(n=_.treeContext,jn=ur(p.nextSibling),Xn=r,Vt=!0,ai=null,n!==null&&(Zn[Qn++]=Fi,Zn[Qn++]=Oi,Zn[Qn++]=Br,Fi=n.id,Oi=n.overflow,Br=r),r=Lc(r,f.children),r.flags|=4096,r)}function jp(n,r,l){n.lanes|=r;var f=n.alternate;f!==null&&(f.lanes|=r),lc(n.return,r,l)}function Dc(n,r,l,f,p){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:p}:(_.isBackwards=r,_.rendering=null,_.renderingStartTime=0,_.last=f,_.tail=l,_.tailMode=p)}function Yp(n,r,l){var f=r.pendingProps,p=f.revealOrder,_=f.tail;if(Rn(n,r,f.children,l),f=Gt.current,f&2)f=f&1|2,r.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&jp(n,l,r);else if(n.tag===19)jp(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}f&=1}if(Ut(Gt,f),!(r.mode&1))r.memoizedState=null;else switch(p){case"forwards":for(l=r.child,p=null;l!==null;)n=l.alternate,n!==null&&nl(n)===null&&(p=l),l=l.sibling;l=p,l===null?(p=r.child,r.child=null):(p=l.sibling,l.sibling=null),Dc(r,!1,p,l,_);break;case"backwards":for(l=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&nl(n)===null){r.child=p;break}n=p.sibling,p.sibling=l,l=p,p=n}Dc(r,!0,l,null,_);break;case"together":Dc(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function cl(n,r){!(r.mode&1)&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function zi(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),Wr|=r.lanes,!(l&r.childLanes))return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=xr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=xr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function Z_(n,r,l){switch(r.tag){case 3:Gp(r),ws();break;case 5:ap(r);break;case 1:Fn(r.type)&&ja(r);break;case 4:fc(r,r.stateNode.containerInfo);break;case 10:var f=r.type._context,p=r.memoizedProps.value;Ut(Qa,f._currentValue),f._currentValue=p;break;case 13:if(f=r.memoizedState,f!==null)return f.dehydrated!==null?(Ut(Gt,Gt.current&1),r.flags|=128,null):l&r.child.childLanes?Xp(n,r,l):(Ut(Gt,Gt.current&1),n=zi(n,r,l),n!==null?n.sibling:null);Ut(Gt,Gt.current&1);break;case 19:if(f=(l&r.childLanes)!==0,n.flags&128){if(f)return Yp(n,r,l);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Ut(Gt,Gt.current),f)break;return null;case 22:case 23:return r.lanes=0,zp(n,r,l)}return zi(n,r,l)}var qp,Ic,$p,Kp;qp=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Ic=function(){},$p=function(n,r,l,f){var p=n.memoizedProps;if(p!==f){n=r.stateNode,Hr(Ei.current);var _=null;switch(l){case"input":p=z(n,p),f=z(n,f),_=[];break;case"select":p=re({},p,{value:void 0}),f=re({},f,{value:void 0}),_=[];break;case"textarea":p=w(n,p),f=w(n,f),_=[];break;default:typeof p.onClick!="function"&&typeof f.onClick=="function"&&(n.onclick=Ga)}pt(l,f);var T;l=null;for(te in p)if(!f.hasOwnProperty(te)&&p.hasOwnProperty(te)&&p[te]!=null)if(te==="style"){var D=p[te];for(T in D)D.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(s.hasOwnProperty(te)?_||(_=[]):(_=_||[]).push(te,null));for(te in f){var B=f[te];if(D=p!=null?p[te]:void 0,f.hasOwnProperty(te)&&B!==D&&(B!=null||D!=null))if(te==="style")if(D){for(T in D)!D.hasOwnProperty(T)||B&&B.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in B)B.hasOwnProperty(T)&&D[T]!==B[T]&&(l||(l={}),l[T]=B[T])}else l||(_||(_=[]),_.push(te,l)),l=B;else te==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,D=D?D.__html:void 0,B!=null&&D!==B&&(_=_||[]).push(te,B)):te==="children"?typeof B!="string"&&typeof B!="number"||(_=_||[]).push(te,""+B):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(s.hasOwnProperty(te)?(B!=null&&te==="onScroll"&&Ft("scroll",n),_||D===B||(_=[])):(_=_||[]).push(te,B))}l&&(_=_||[]).push("style",l);var te=_;(r.updateQueue=te)&&(r.flags|=4)}},Kp=function(n,r,l,f){l!==f&&(r.flags|=4)};function jo(n,r){if(!Vt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:f.sibling=null}}function xn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,f=0;if(r)for(var p=n.child;p!==null;)l|=p.lanes|p.childLanes,f|=p.subtreeFlags&14680064,f|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)l|=p.lanes|p.childLanes,f|=p.subtreeFlags,f|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=f,n.childLanes=l,r}function Q_(n,r,l){var f=r.pendingProps;switch(tc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xn(r),null;case 1:return Fn(r.type)&&Xa(),xn(r),null;case 3:return f=r.stateNode,bs(),Ot(Nn),Ot(_n),pc(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(n===null||n.child===null)&&(Ka(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,ai!==null&&(Wc(ai),ai=null))),Ic(n,r),xn(r),null;case 5:dc(r);var p=Hr(Vo.current);if(l=r.type,n!==null&&r.stateNode!=null)$p(n,r,l,f,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!f){if(r.stateNode===null)throw Error(t(166));return xn(r),null}if(n=Hr(Ei.current),Ka(r)){f=r.stateNode,l=r.type;var _=r.memoizedProps;switch(f[Mi]=r,f[Fo]=_,n=(r.mode&1)!==0,l){case"dialog":Ft("cancel",f),Ft("close",f);break;case"iframe":case"object":case"embed":Ft("load",f);break;case"video":case"audio":for(p=0;p<Io.length;p++)Ft(Io[p],f);break;case"source":Ft("error",f);break;case"img":case"image":case"link":Ft("error",f),Ft("load",f);break;case"details":Ft("toggle",f);break;case"input":Tn(f,_),Ft("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!_.multiple},Ft("invalid",f);break;case"textarea":Q(f,_),Ft("invalid",f)}pt(l,_),p=null;for(var T in _)if(_.hasOwnProperty(T)){var D=_[T];T==="children"?typeof D=="string"?f.textContent!==D&&(_.suppressHydrationWarning!==!0&&Ha(f.textContent,D,n),p=["children",D]):typeof D=="number"&&f.textContent!==""+D&&(_.suppressHydrationWarning!==!0&&Ha(f.textContent,D,n),p=["children",""+D]):s.hasOwnProperty(T)&&D!=null&&T==="onScroll"&&Ft("scroll",f)}switch(l){case"input":Ct(f),je(f,_,!0);break;case"textarea":Ct(f),ve(f);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(f.onclick=Ga)}f=p,r.updateQueue=f,f!==null&&(r.flags|=4)}else{T=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=fe(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof f.is=="string"?n=T.createElement(l,{is:f.is}):(n=T.createElement(l),l==="select"&&(T=n,f.multiple?T.multiple=!0:f.size&&(T.size=f.size))):n=T.createElementNS(n,l),n[Mi]=r,n[Fo]=f,qp(n,r,!1,!1),r.stateNode=n;e:{switch(T=rt(l,f),l){case"dialog":Ft("cancel",n),Ft("close",n),p=f;break;case"iframe":case"object":case"embed":Ft("load",n),p=f;break;case"video":case"audio":for(p=0;p<Io.length;p++)Ft(Io[p],n);p=f;break;case"source":Ft("error",n),p=f;break;case"img":case"image":case"link":Ft("error",n),Ft("load",n),p=f;break;case"details":Ft("toggle",n),p=f;break;case"input":Tn(n,f),p=z(n,f),Ft("invalid",n);break;case"option":p=f;break;case"select":n._wrapperState={wasMultiple:!!f.multiple},p=re({},f,{value:void 0}),Ft("invalid",n);break;case"textarea":Q(n,f),p=w(n,f),Ft("invalid",n);break;default:p=f}pt(l,p),D=p;for(_ in D)if(D.hasOwnProperty(_)){var B=D[_];_==="style"?et(n,B):_==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Ne(n,B)):_==="children"?typeof B=="string"?(l!=="textarea"||B!=="")&&ft(n,B):typeof B=="number"&&ft(n,""+B):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(s.hasOwnProperty(_)?B!=null&&_==="onScroll"&&Ft("scroll",n):B!=null&&C(n,_,B,T))}switch(l){case"input":Ct(n),je(n,f,!1);break;case"textarea":Ct(n),ve(n);break;case"option":f.value!=null&&n.setAttribute("value",""+Te(f.value));break;case"select":n.multiple=!!f.multiple,_=f.value,_!=null?L(n,!!f.multiple,_,!1):f.defaultValue!=null&&L(n,!!f.multiple,f.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=Ga)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return xn(r),null;case 6:if(n&&r.stateNode!=null)Kp(n,r,n.memoizedProps,f);else{if(typeof f!="string"&&r.stateNode===null)throw Error(t(166));if(l=Hr(Vo.current),Hr(Ei.current),Ka(r)){if(f=r.stateNode,l=r.memoizedProps,f[Mi]=r,(_=f.nodeValue!==l)&&(n=Xn,n!==null))switch(n.tag){case 3:Ha(f.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ha(f.nodeValue,l,(n.mode&1)!==0)}_&&(r.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[Mi]=r,r.stateNode=f}return xn(r),null;case 13:if(Ot(Gt),f=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Vt&&jn!==null&&r.mode&1&&!(r.flags&128))Jh(),ws(),r.flags|=98560,_=!1;else if(_=Ka(r),f!==null&&f.dehydrated!==null){if(n===null){if(!_)throw Error(t(318));if(_=r.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Mi]=r}else ws(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;xn(r),_=!1}else ai!==null&&(Wc(ai),ai=null),_=!0;if(!_)return r.flags&65536?r:null}return r.flags&128?(r.lanes=l,r):(f=f!==null,f!==(n!==null&&n.memoizedState!==null)&&f&&(r.child.flags|=8192,r.mode&1&&(n===null||Gt.current&1?tn===0&&(tn=3):Yc())),r.updateQueue!==null&&(r.flags|=4),xn(r),null);case 4:return bs(),Ic(n,r),n===null&&Uo(r.stateNode.containerInfo),xn(r),null;case 10:return ac(r.type._context),xn(r),null;case 17:return Fn(r.type)&&Xa(),xn(r),null;case 19:if(Ot(Gt),_=r.memoizedState,_===null)return xn(r),null;if(f=(r.flags&128)!==0,T=_.rendering,T===null)if(f)jo(_,!1);else{if(tn!==0||n!==null&&n.flags&128)for(n=r.child;n!==null;){if(T=nl(n),T!==null){for(r.flags|=128,jo(_,!1),f=T.updateQueue,f!==null&&(r.updateQueue=f,r.flags|=4),r.subtreeFlags=0,f=l,l=r.child;l!==null;)_=l,n=f,_.flags&=14680066,T=_.alternate,T===null?(_.childLanes=0,_.lanes=n,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=T.childLanes,_.lanes=T.lanes,_.child=T.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=T.memoizedProps,_.memoizedState=T.memoizedState,_.updateQueue=T.updateQueue,_.type=T.type,n=T.dependencies,_.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Ut(Gt,Gt.current&1|2),r.child}n=n.sibling}_.tail!==null&&$()>Is&&(r.flags|=128,f=!0,jo(_,!1),r.lanes=4194304)}else{if(!f)if(n=nl(T),n!==null){if(r.flags|=128,f=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),jo(_,!0),_.tail===null&&_.tailMode==="hidden"&&!T.alternate&&!Vt)return xn(r),null}else 2*$()-_.renderingStartTime>Is&&l!==1073741824&&(r.flags|=128,f=!0,jo(_,!1),r.lanes=4194304);_.isBackwards?(T.sibling=r.child,r.child=T):(l=_.last,l!==null?l.sibling=T:r.child=T,_.last=T)}return _.tail!==null?(r=_.tail,_.rendering=r,_.tail=r.sibling,_.renderingStartTime=$(),r.sibling=null,l=Gt.current,Ut(Gt,f?l&1|2:l&1),r):(xn(r),null);case 22:case 23:return jc(),f=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==f&&(r.flags|=8192),f&&r.mode&1?Yn&1073741824&&(xn(r),r.subtreeFlags&6&&(r.flags|=8192)):xn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function J_(n,r){switch(tc(r),r.tag){case 1:return Fn(r.type)&&Xa(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return bs(),Ot(Nn),Ot(_n),pc(),n=r.flags,n&65536&&!(n&128)?(r.flags=n&-65537|128,r):null;case 5:return dc(r),null;case 13:if(Ot(Gt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));ws()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Ot(Gt),null;case 4:return bs(),null;case 10:return ac(r.type._context),null;case 22:case 23:return jc(),null;case 24:return null;default:return null}}var fl=!1,Sn=!1,e0=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function Ls(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){qt(n,r,f)}else l.current=null}function Uc(n,r,l){try{l()}catch(f){qt(n,r,f)}}var Zp=!1;function t0(n,r){if(ju=La,n=bh(),ku(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var p=f.anchorOffset,_=f.focusNode;f=f.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var T=0,D=-1,B=-1,te=0,_e=0,xe=n,me=null;t:for(;;){for(var Ue;xe!==l||p!==0&&xe.nodeType!==3||(D=T+p),xe!==_||f!==0&&xe.nodeType!==3||(B=T+f),xe.nodeType===3&&(T+=xe.nodeValue.length),(Ue=xe.firstChild)!==null;)me=xe,xe=Ue;for(;;){if(xe===n)break t;if(me===l&&++te===p&&(D=T),me===_&&++_e===f&&(B=T),(Ue=xe.nextSibling)!==null)break;xe=me,me=xe.parentNode}xe=Ue}l=D===-1||B===-1?null:{start:D,end:B}}else l=null}l=l||{start:0,end:0}}else l=null;for(Yu={focusedElem:n,selectionRange:l},La=!1,Fe=r;Fe!==null;)if(r=Fe,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Fe=n;else for(;Fe!==null;){r=Fe;try{var ze=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var He=ze.memoizedProps,$t=ze.memoizedState,q=r.stateNode,H=q.getSnapshotBeforeUpdate(r.elementType===r.type?He:li(r.type,He),$t);q.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var K=r.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){qt(r,r.return,Ee)}if(n=r.sibling,n!==null){n.return=r.return,Fe=n;break}Fe=r.return}return ze=Zp,Zp=!1,ze}function Yo(n,r,l){var f=r.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var p=f=f.next;do{if((p.tag&n)===n){var _=p.destroy;p.destroy=void 0,_!==void 0&&Uc(r,l,_)}p=p.next}while(p!==f)}}function dl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var f=l.create;l.destroy=f()}l=l.next}while(l!==r)}}function Nc(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function Qp(n){var r=n.alternate;r!==null&&(n.alternate=null,Qp(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Mi],delete r[Fo],delete r[Zu],delete r[O_],delete r[k_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Jp(n){return n.tag===5||n.tag===3||n.tag===4}function em(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Jp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Fc(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=Ga));else if(f!==4&&(n=n.child,n!==null))for(Fc(n,r,l),n=n.sibling;n!==null;)Fc(n,r,l),n=n.sibling}function Oc(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(f!==4&&(n=n.child,n!==null))for(Oc(n,r,l),n=n.sibling;n!==null;)Oc(n,r,l),n=n.sibling}var hn=null,ui=!1;function mr(n,r,l){for(l=l.child;l!==null;)tm(n,r,l),l=l.sibling}function tm(n,r,l){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(Je,l)}catch{}switch(l.tag){case 5:Sn||Ls(l,r);case 6:var f=hn,p=ui;hn=null,mr(n,r,l),hn=f,ui=p,hn!==null&&(ui?(n=hn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):hn.removeChild(l.stateNode));break;case 18:hn!==null&&(ui?(n=hn,l=l.stateNode,n.nodeType===8?Ku(n.parentNode,l):n.nodeType===1&&Ku(n,l),wo(n)):Ku(hn,l.stateNode));break;case 4:f=hn,p=ui,hn=l.stateNode.containerInfo,ui=!0,mr(n,r,l),hn=f,ui=p;break;case 0:case 11:case 14:case 15:if(!Sn&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){p=f=f.next;do{var _=p,T=_.destroy;_=_.tag,T!==void 0&&(_&2||_&4)&&Uc(l,r,T),p=p.next}while(p!==f)}mr(n,r,l);break;case 1:if(!Sn&&(Ls(l,r),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(D){qt(l,r,D)}mr(n,r,l);break;case 21:mr(n,r,l);break;case 22:l.mode&1?(Sn=(f=Sn)||l.memoizedState!==null,mr(n,r,l),Sn=f):mr(n,r,l);break;default:mr(n,r,l)}}function nm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new e0),r.forEach(function(f){var p=c0.bind(null,n,f);l.has(f)||(l.add(f),f.then(p,p))})}}function ci(n,r){var l=r.deletions;if(l!==null)for(var f=0;f<l.length;f++){var p=l[f];try{var _=n,T=r,D=T;e:for(;D!==null;){switch(D.tag){case 5:hn=D.stateNode,ui=!1;break e;case 3:hn=D.stateNode.containerInfo,ui=!0;break e;case 4:hn=D.stateNode.containerInfo,ui=!0;break e}D=D.return}if(hn===null)throw Error(t(160));tm(_,T,p),hn=null,ui=!1;var B=p.alternate;B!==null&&(B.return=null),p.return=null}catch(te){qt(p,r,te)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)im(r,n),r=r.sibling}function im(n,r){var l=n.alternate,f=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ci(r,n),wi(n),f&4){try{Yo(3,n,n.return),dl(3,n)}catch(He){qt(n,n.return,He)}try{Yo(5,n,n.return)}catch(He){qt(n,n.return,He)}}break;case 1:ci(r,n),wi(n),f&512&&l!==null&&Ls(l,l.return);break;case 5:if(ci(r,n),wi(n),f&512&&l!==null&&Ls(l,l.return),n.flags&32){var p=n.stateNode;try{ft(p,"")}catch(He){qt(n,n.return,He)}}if(f&4&&(p=n.stateNode,p!=null)){var _=n.memoizedProps,T=l!==null?l.memoizedProps:_,D=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{D==="input"&&_.type==="radio"&&_.name!=null&&vt(p,_),rt(D,T);var te=rt(D,_);for(T=0;T<B.length;T+=2){var _e=B[T],xe=B[T+1];_e==="style"?et(p,xe):_e==="dangerouslySetInnerHTML"?Ne(p,xe):_e==="children"?ft(p,xe):C(p,_e,xe,te)}switch(D){case"input":ht(p,_);break;case"textarea":pe(p,_);break;case"select":var me=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var Ue=_.value;Ue!=null?L(p,!!_.multiple,Ue,!1):me!==!!_.multiple&&(_.defaultValue!=null?L(p,!!_.multiple,_.defaultValue,!0):L(p,!!_.multiple,_.multiple?[]:"",!1))}p[Fo]=_}catch(He){qt(n,n.return,He)}}break;case 6:if(ci(r,n),wi(n),f&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,_=n.memoizedProps;try{p.nodeValue=_}catch(He){qt(n,n.return,He)}}break;case 3:if(ci(r,n),wi(n),f&4&&l!==null&&l.memoizedState.isDehydrated)try{wo(r.containerInfo)}catch(He){qt(n,n.return,He)}break;case 4:ci(r,n),wi(n);break;case 13:ci(r,n),wi(n),p=n.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(zc=$())),f&4&&nm(n);break;case 22:if(_e=l!==null&&l.memoizedState!==null,n.mode&1?(Sn=(te=Sn)||_e,ci(r,n),Sn=te):ci(r,n),wi(n),f&8192){if(te=n.memoizedState!==null,(n.stateNode.isHidden=te)&&!_e&&n.mode&1)for(Fe=n,_e=n.child;_e!==null;){for(xe=Fe=_e;Fe!==null;){switch(me=Fe,Ue=me.child,me.tag){case 0:case 11:case 14:case 15:Yo(4,me,me.return);break;case 1:Ls(me,me.return);var ze=me.stateNode;if(typeof ze.componentWillUnmount=="function"){f=me,l=me.return;try{r=f,ze.props=r.memoizedProps,ze.state=r.memoizedState,ze.componentWillUnmount()}catch(He){qt(f,l,He)}}break;case 5:Ls(me,me.return);break;case 22:if(me.memoizedState!==null){om(xe);continue}}Ue!==null?(Ue.return=me,Fe=Ue):om(xe)}_e=_e.sibling}e:for(_e=null,xe=n;;){if(xe.tag===5){if(_e===null){_e=xe;try{p=xe.stateNode,te?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(D=xe.stateNode,B=xe.memoizedProps.style,T=B!=null&&B.hasOwnProperty("display")?B.display:null,D.style.display=Ke("display",T))}catch(He){qt(n,n.return,He)}}}else if(xe.tag===6){if(_e===null)try{xe.stateNode.nodeValue=te?"":xe.memoizedProps}catch(He){qt(n,n.return,He)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===n)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===n)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===n)break e;_e===xe&&(_e=null),xe=xe.return}_e===xe&&(_e=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:ci(r,n),wi(n),f&4&&nm(n);break;case 21:break;default:ci(r,n),wi(n)}}function wi(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(Jp(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var p=f.stateNode;f.flags&32&&(ft(p,""),f.flags&=-33);var _=em(n);Oc(n,_,p);break;case 3:case 4:var T=f.stateNode.containerInfo,D=em(n);Fc(n,D,T);break;default:throw Error(t(161))}}catch(B){qt(n,n.return,B)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function n0(n,r,l){Fe=n,rm(n)}function rm(n,r,l){for(var f=(n.mode&1)!==0;Fe!==null;){var p=Fe,_=p.child;if(p.tag===22&&f){var T=p.memoizedState!==null||fl;if(!T){var D=p.alternate,B=D!==null&&D.memoizedState!==null||Sn;D=fl;var te=Sn;if(fl=T,(Sn=B)&&!te)for(Fe=p;Fe!==null;)T=Fe,B=T.child,T.tag===22&&T.memoizedState!==null?am(p):B!==null?(B.return=T,Fe=B):am(p);for(;_!==null;)Fe=_,rm(_),_=_.sibling;Fe=p,fl=D,Sn=te}sm(n)}else p.subtreeFlags&8772&&_!==null?(_.return=p,Fe=_):sm(n)}}function sm(n){for(;Fe!==null;){var r=Fe;if(r.flags&8772){var l=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Sn||dl(5,r);break;case 1:var f=r.stateNode;if(r.flags&4&&!Sn)if(l===null)f.componentDidMount();else{var p=r.elementType===r.type?l.memoizedProps:li(r.type,l.memoizedProps);f.componentDidUpdate(p,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var _=r.updateQueue;_!==null&&op(r,_,f);break;case 3:var T=r.updateQueue;if(T!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}op(r,T,l)}break;case 5:var D=r.stateNode;if(l===null&&r.flags&4){l=D;var B=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&l.focus();break;case"img":B.src&&(l.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var te=r.alternate;if(te!==null){var _e=te.memoizedState;if(_e!==null){var xe=_e.dehydrated;xe!==null&&wo(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Sn||r.flags&512&&Nc(r)}catch(me){qt(r,r.return,me)}}if(r===n){Fe=null;break}if(l=r.sibling,l!==null){l.return=r.return,Fe=l;break}Fe=r.return}}function om(n){for(;Fe!==null;){var r=Fe;if(r===n){Fe=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Fe=l;break}Fe=r.return}}function am(n){for(;Fe!==null;){var r=Fe;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{dl(4,r)}catch(B){qt(r,l,B)}break;case 1:var f=r.stateNode;if(typeof f.componentDidMount=="function"){var p=r.return;try{f.componentDidMount()}catch(B){qt(r,p,B)}}var _=r.return;try{Nc(r)}catch(B){qt(r,_,B)}break;case 5:var T=r.return;try{Nc(r)}catch(B){qt(r,T,B)}}}catch(B){qt(r,r.return,B)}if(r===n){Fe=null;break}var D=r.sibling;if(D!==null){D.return=r.return,Fe=D;break}Fe=r.return}}var i0=Math.ceil,hl=R.ReactCurrentDispatcher,kc=R.ReactCurrentOwner,ti=R.ReactCurrentBatchConfig,wt=0,ln=null,Zt=null,pn=0,Yn=0,Ds=cr(0),tn=0,qo=null,Wr=0,pl=0,Bc=0,$o=null,kn=null,zc=0,Is=1/0,Vi=null,ml=!1,Vc=null,gr=null,gl=!1,vr=null,vl=0,Ko=0,Hc=null,_l=-1,yl=0;function Cn(){return wt&6?$():_l!==-1?_l:_l=$()}function _r(n){return n.mode&1?wt&2&&pn!==0?pn&-pn:z_.transition!==null?(yl===0&&(yl=It()),yl):(n=Tt,n!==0||(n=window.event,n=n===void 0?16:uh(n.type)),n):1}function fi(n,r,l,f){if(50<Ko)throw Ko=0,Hc=null,Error(t(185));sn(n,l,f),(!(wt&2)||n!==ln)&&(n===ln&&(!(wt&2)&&(pl|=l),tn===4&&yr(n,pn)),Bn(n,f),l===1&&wt===0&&!(r.mode&1)&&(Is=$()+500,Ya&&dr()))}function Bn(n,r){var l=n.callbackNode;An(n,r);var f=gn(n,n===ln?pn:0);if(f===0)l!==null&&A(l),n.callbackNode=null,n.callbackPriority=0;else if(r=f&-f,n.callbackPriority!==r){if(l!=null&&A(l),r===1)n.tag===0?B_(um.bind(null,n)):qh(um.bind(null,n)),N_(function(){!(wt&6)&&dr()}),l=null;else{switch(Si(f)){case 1:l=Se;break;case 4:l=Re;break;case 16:l=Ie;break;case 536870912:l=tt;break;default:l=Ie}l=vm(l,lm.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function lm(n,r){if(_l=-1,yl=0,wt&6)throw Error(t(327));var l=n.callbackNode;if(Us()&&n.callbackNode!==l)return null;var f=gn(n,n===ln?pn:0);if(f===0)return null;if(f&30||f&n.expiredLanes||r)r=xl(n,f);else{r=f;var p=wt;wt|=2;var _=fm();(ln!==n||pn!==r)&&(Vi=null,Is=$()+500,jr(n,r));do try{o0();break}catch(D){cm(n,D)}while(!0);oc(),hl.current=_,wt=p,Zt!==null?r=0:(ln=null,pn=0,r=tn)}if(r!==0){if(r===2&&(p=Ii(n),p!==0&&(f=p,r=Gc(n,p))),r===1)throw l=qo,jr(n,0),yr(n,f),Bn(n,$()),l;if(r===6)yr(n,f);else{if(p=n.current.alternate,!(f&30)&&!r0(p)&&(r=xl(n,f),r===2&&(_=Ii(n),_!==0&&(f=_,r=Gc(n,_))),r===1))throw l=qo,jr(n,0),yr(n,f),Bn(n,$()),l;switch(n.finishedWork=p,n.finishedLanes=f,r){case 0:case 1:throw Error(t(345));case 2:Yr(n,kn,Vi);break;case 3:if(yr(n,f),(f&130023424)===f&&(r=zc+500-$(),10<r)){if(gn(n,0)!==0)break;if(p=n.suspendedLanes,(p&f)!==f){Cn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=$u(Yr.bind(null,n,kn,Vi),r);break}Yr(n,kn,Vi);break;case 4:if(yr(n,f),(f&4194240)===f)break;for(r=n.eventTimes,p=-1;0<f;){var T=31-ot(f);_=1<<T,T=r[T],T>p&&(p=T),f&=~_}if(f=p,f=$()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*i0(f/1960))-f,10<f){n.timeoutHandle=$u(Yr.bind(null,n,kn,Vi),f);break}Yr(n,kn,Vi);break;case 5:Yr(n,kn,Vi);break;default:throw Error(t(329))}}}return Bn(n,$()),n.callbackNode===l?lm.bind(null,n):null}function Gc(n,r){var l=$o;return n.current.memoizedState.isDehydrated&&(jr(n,r).flags|=256),n=xl(n,r),n!==2&&(r=kn,kn=l,r!==null&&Wc(r)),n}function Wc(n){kn===null?kn=n:kn.push.apply(kn,n)}function r0(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var p=l[f],_=p.getSnapshot;p=p.value;try{if(!oi(_(),p))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function yr(n,r){for(r&=~Bc,r&=~pl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-ot(r),f=1<<l;n[l]=-1,r&=~f}}function um(n){if(wt&6)throw Error(t(327));Us();var r=gn(n,0);if(!(r&1))return Bn(n,$()),null;var l=xl(n,r);if(n.tag!==0&&l===2){var f=Ii(n);f!==0&&(r=f,l=Gc(n,f))}if(l===1)throw l=qo,jr(n,0),yr(n,r),Bn(n,$()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Yr(n,kn,Vi),Bn(n,$()),null}function Xc(n,r){var l=wt;wt|=1;try{return n(r)}finally{wt=l,wt===0&&(Is=$()+500,Ya&&dr())}}function Xr(n){vr!==null&&vr.tag===0&&!(wt&6)&&Us();var r=wt;wt|=1;var l=ti.transition,f=Tt;try{if(ti.transition=null,Tt=1,n)return n()}finally{Tt=f,ti.transition=l,wt=r,!(wt&6)&&dr()}}function jc(){Yn=Ds.current,Ot(Ds)}function jr(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,U_(l)),Zt!==null)for(l=Zt.return;l!==null;){var f=l;switch(tc(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Xa();break;case 3:bs(),Ot(Nn),Ot(_n),pc();break;case 5:dc(f);break;case 4:bs();break;case 13:Ot(Gt);break;case 19:Ot(Gt);break;case 10:ac(f.type._context);break;case 22:case 23:jc()}l=l.return}if(ln=n,Zt=n=xr(n.current,null),pn=Yn=r,tn=0,qo=null,Bc=pl=Wr=0,kn=$o=null,Vr!==null){for(r=0;r<Vr.length;r++)if(l=Vr[r],f=l.interleaved,f!==null){l.interleaved=null;var p=f.next,_=l.pending;if(_!==null){var T=_.next;_.next=p,f.next=T}l.pending=f}Vr=null}return n}function cm(n,r){do{var l=Zt;try{if(oc(),il.current=al,rl){for(var f=Wt.memoizedState;f!==null;){var p=f.queue;p!==null&&(p.pending=null),f=f.next}rl=!1}if(Gr=0,an=en=Wt=null,Ho=!1,Go=0,kc.current=null,l===null||l.return===null){tn=1,qo=r,Zt=null;break}e:{var _=n,T=l.return,D=l,B=r;if(r=pn,D.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var te=B,_e=D,xe=_e.tag;if(!(_e.mode&1)&&(xe===0||xe===11||xe===15)){var me=_e.alternate;me?(_e.updateQueue=me.updateQueue,_e.memoizedState=me.memoizedState,_e.lanes=me.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Ue=Np(T);if(Ue!==null){Ue.flags&=-257,Fp(Ue,T,D,_,r),Ue.mode&1&&Up(_,te,r),r=Ue,B=te;var ze=r.updateQueue;if(ze===null){var He=new Set;He.add(B),r.updateQueue=He}else ze.add(B);break e}else{if(!(r&1)){Up(_,te,r),Yc();break e}B=Error(t(426))}}else if(Vt&&D.mode&1){var $t=Np(T);if($t!==null){!($t.flags&65536)&&($t.flags|=256),Fp($t,T,D,_,r),rc(Ps(B,D));break e}}_=B=Ps(B,D),tn!==4&&(tn=2),$o===null?$o=[_]:$o.push(_),_=T;do{switch(_.tag){case 3:_.flags|=65536,r&=-r,_.lanes|=r;var q=Dp(_,B,r);sp(_,q);break e;case 1:D=B;var H=_.type,K=_.stateNode;if(!(_.flags&128)&&(typeof H.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(gr===null||!gr.has(K)))){_.flags|=65536,r&=-r,_.lanes|=r;var Ee=Ip(_,D,r);sp(_,Ee);break e}}_=_.return}while(_!==null)}hm(l)}catch(Xe){r=Xe,Zt===l&&l!==null&&(Zt=l=l.return);continue}break}while(!0)}function fm(){var n=hl.current;return hl.current=al,n===null?al:n}function Yc(){(tn===0||tn===3||tn===2)&&(tn=4),ln===null||!(Wr&268435455)&&!(pl&268435455)||yr(ln,pn)}function xl(n,r){var l=wt;wt|=2;var f=fm();(ln!==n||pn!==r)&&(Vi=null,jr(n,r));do try{s0();break}catch(p){cm(n,p)}while(!0);if(oc(),wt=l,hl.current=f,Zt!==null)throw Error(t(261));return ln=null,pn=0,tn}function s0(){for(;Zt!==null;)dm(Zt)}function o0(){for(;Zt!==null&&!X();)dm(Zt)}function dm(n){var r=gm(n.alternate,n,Yn);n.memoizedProps=n.pendingProps,r===null?hm(n):Zt=r,kc.current=null}function hm(n){var r=n;do{var l=r.alternate;if(n=r.return,r.flags&32768){if(l=J_(l,r),l!==null){l.flags&=32767,Zt=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{tn=6,Zt=null;return}}else if(l=Q_(l,r,Yn),l!==null){Zt=l;return}if(r=r.sibling,r!==null){Zt=r;return}Zt=r=n}while(r!==null);tn===0&&(tn=5)}function Yr(n,r,l){var f=Tt,p=ti.transition;try{ti.transition=null,Tt=1,a0(n,r,l,f)}finally{ti.transition=p,Tt=f}return null}function a0(n,r,l,f){do Us();while(vr!==null);if(wt&6)throw Error(t(327));l=n.finishedWork;var p=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var _=l.lanes|l.childLanes;if(dn(n,_),n===ln&&(Zt=ln=null,pn=0),!(l.subtreeFlags&2064)&&!(l.flags&2064)||gl||(gl=!0,vm(Ie,function(){return Us(),null})),_=(l.flags&15990)!==0,l.subtreeFlags&15990||_){_=ti.transition,ti.transition=null;var T=Tt;Tt=1;var D=wt;wt|=4,kc.current=null,t0(n,l),im(l,n),R_(Yu),La=!!ju,Yu=ju=null,n.current=l,n0(l),ee(),wt=D,Tt=T,ti.transition=_}else n.current=l;if(gl&&(gl=!1,vr=n,vl=p),_=n.pendingLanes,_===0&&(gr=null),xt(l.stateNode),Bn(n,$()),r!==null)for(f=n.onRecoverableError,l=0;l<r.length;l++)p=r[l],f(p.value,{componentStack:p.stack,digest:p.digest});if(ml)throw ml=!1,n=Vc,Vc=null,n;return vl&1&&n.tag!==0&&Us(),_=n.pendingLanes,_&1?n===Hc?Ko++:(Ko=0,Hc=n):Ko=0,dr(),null}function Us(){if(vr!==null){var n=Si(vl),r=ti.transition,l=Tt;try{if(ti.transition=null,Tt=16>n?16:n,vr===null)var f=!1;else{if(n=vr,vr=null,vl=0,wt&6)throw Error(t(331));var p=wt;for(wt|=4,Fe=n.current;Fe!==null;){var _=Fe,T=_.child;if(Fe.flags&16){var D=_.deletions;if(D!==null){for(var B=0;B<D.length;B++){var te=D[B];for(Fe=te;Fe!==null;){var _e=Fe;switch(_e.tag){case 0:case 11:case 15:Yo(8,_e,_)}var xe=_e.child;if(xe!==null)xe.return=_e,Fe=xe;else for(;Fe!==null;){_e=Fe;var me=_e.sibling,Ue=_e.return;if(Qp(_e),_e===te){Fe=null;break}if(me!==null){me.return=Ue,Fe=me;break}Fe=Ue}}}var ze=_.alternate;if(ze!==null){var He=ze.child;if(He!==null){ze.child=null;do{var $t=He.sibling;He.sibling=null,He=$t}while(He!==null)}}Fe=_}}if(_.subtreeFlags&2064&&T!==null)T.return=_,Fe=T;else e:for(;Fe!==null;){if(_=Fe,_.flags&2048)switch(_.tag){case 0:case 11:case 15:Yo(9,_,_.return)}var q=_.sibling;if(q!==null){q.return=_.return,Fe=q;break e}Fe=_.return}}var H=n.current;for(Fe=H;Fe!==null;){T=Fe;var K=T.child;if(T.subtreeFlags&2064&&K!==null)K.return=T,Fe=K;else e:for(T=H;Fe!==null;){if(D=Fe,D.flags&2048)try{switch(D.tag){case 0:case 11:case 15:dl(9,D)}}catch(Xe){qt(D,D.return,Xe)}if(D===T){Fe=null;break e}var Ee=D.sibling;if(Ee!==null){Ee.return=D.return,Fe=Ee;break e}Fe=D.return}}if(wt=p,dr(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(Je,n)}catch{}f=!0}return f}finally{Tt=l,ti.transition=r}}return!1}function pm(n,r,l){r=Ps(l,r),r=Dp(n,r,1),n=pr(n,r,1),r=Cn(),n!==null&&(sn(n,1,r),Bn(n,r))}function qt(n,r,l){if(n.tag===3)pm(n,n,l);else for(;r!==null;){if(r.tag===3){pm(r,n,l);break}else if(r.tag===1){var f=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(gr===null||!gr.has(f))){n=Ps(l,n),n=Ip(r,n,1),r=pr(r,n,1),n=Cn(),r!==null&&(sn(r,1,n),Bn(r,n));break}}r=r.return}}function l0(n,r,l){var f=n.pingCache;f!==null&&f.delete(r),r=Cn(),n.pingedLanes|=n.suspendedLanes&l,ln===n&&(pn&l)===l&&(tn===4||tn===3&&(pn&130023424)===pn&&500>$()-zc?jr(n,0):Bc|=l),Bn(n,r)}function mm(n,r){r===0&&(n.mode&1?(r=Yt,Yt<<=1,!(Yt&130023424)&&(Yt=4194304)):r=1);var l=Cn();n=ki(n,r),n!==null&&(sn(n,r,l),Bn(n,l))}function u0(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),mm(n,l)}function c0(n,r){var l=0;switch(n.tag){case 13:var f=n.stateNode,p=n.memoizedState;p!==null&&(l=p.retryLane);break;case 19:f=n.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(r),mm(n,l)}var gm;gm=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||Nn.current)On=!0;else{if(!(n.lanes&l)&&!(r.flags&128))return On=!1,Z_(n,r,l);On=!!(n.flags&131072)}else On=!1,Vt&&r.flags&1048576&&$h(r,$a,r.index);switch(r.lanes=0,r.tag){case 2:var f=r.type;cl(n,r),n=r.pendingProps;var p=Ms(r,_n.current);Cs(r,l),p=vc(null,r,f,n,p,l);var _=_c();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Fn(f)?(_=!0,ja(r)):_=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,cc(r),p.updater=ll,r.stateNode=p,p._reactInternals=r,Tc(r,f,n,l),r=Cc(null,r,f,!0,_,l)):(r.tag=0,Vt&&_&&ec(r),Rn(null,r,p,l),r=r.child),r;case 16:f=r.elementType;e:{switch(cl(n,r),n=r.pendingProps,p=f._init,f=p(f._payload),r.type=f,p=r.tag=d0(f),n=li(f,n),p){case 0:r=Rc(null,r,f,n,l);break e;case 1:r=Hp(null,r,f,n,l);break e;case 11:r=Op(null,r,f,n,l);break e;case 14:r=kp(null,r,f,li(f.type,n),l);break e}throw Error(t(306,f,""))}return r;case 0:return f=r.type,p=r.pendingProps,p=r.elementType===f?p:li(f,p),Rc(n,r,f,p,l);case 1:return f=r.type,p=r.pendingProps,p=r.elementType===f?p:li(f,p),Hp(n,r,f,p,l);case 3:e:{if(Gp(r),n===null)throw Error(t(387));f=r.pendingProps,_=r.memoizedState,p=_.element,rp(n,r),tl(r,f,null,l);var T=r.memoizedState;if(f=T.element,_.isDehydrated)if(_={element:f,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},r.updateQueue.baseState=_,r.memoizedState=_,r.flags&256){p=Ps(Error(t(423)),r),r=Wp(n,r,f,l,p);break e}else if(f!==p){p=Ps(Error(t(424)),r),r=Wp(n,r,f,l,p);break e}else for(jn=ur(r.stateNode.containerInfo.firstChild),Xn=r,Vt=!0,ai=null,l=np(r,null,f,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ws(),f===p){r=zi(n,r,l);break e}Rn(n,r,f,l)}r=r.child}return r;case 5:return ap(r),n===null&&ic(r),f=r.type,p=r.pendingProps,_=n!==null?n.memoizedProps:null,T=p.children,qu(f,p)?T=null:_!==null&&qu(f,_)&&(r.flags|=32),Vp(n,r),Rn(n,r,T,l),r.child;case 6:return n===null&&ic(r),null;case 13:return Xp(n,r,l);case 4:return fc(r,r.stateNode.containerInfo),f=r.pendingProps,n===null?r.child=As(r,null,f,l):Rn(n,r,f,l),r.child;case 11:return f=r.type,p=r.pendingProps,p=r.elementType===f?p:li(f,p),Op(n,r,f,p,l);case 7:return Rn(n,r,r.pendingProps,l),r.child;case 8:return Rn(n,r,r.pendingProps.children,l),r.child;case 12:return Rn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(f=r.type._context,p=r.pendingProps,_=r.memoizedProps,T=p.value,Ut(Qa,f._currentValue),f._currentValue=T,_!==null)if(oi(_.value,T)){if(_.children===p.children&&!Nn.current){r=zi(n,r,l);break e}}else for(_=r.child,_!==null&&(_.return=r);_!==null;){var D=_.dependencies;if(D!==null){T=_.child;for(var B=D.firstContext;B!==null;){if(B.context===f){if(_.tag===1){B=Bi(-1,l&-l),B.tag=2;var te=_.updateQueue;if(te!==null){te=te.shared;var _e=te.pending;_e===null?B.next=B:(B.next=_e.next,_e.next=B),te.pending=B}}_.lanes|=l,B=_.alternate,B!==null&&(B.lanes|=l),lc(_.return,l,r),D.lanes|=l;break}B=B.next}}else if(_.tag===10)T=_.type===r.type?null:_.child;else if(_.tag===18){if(T=_.return,T===null)throw Error(t(341));T.lanes|=l,D=T.alternate,D!==null&&(D.lanes|=l),lc(T,l,r),T=_.sibling}else T=_.child;if(T!==null)T.return=_;else for(T=_;T!==null;){if(T===r){T=null;break}if(_=T.sibling,_!==null){_.return=T.return,T=_;break}T=T.return}_=T}Rn(n,r,p.children,l),r=r.child}return r;case 9:return p=r.type,f=r.pendingProps.children,Cs(r,l),p=Jn(p),f=f(p),r.flags|=1,Rn(n,r,f,l),r.child;case 14:return f=r.type,p=li(f,r.pendingProps),p=li(f.type,p),kp(n,r,f,p,l);case 15:return Bp(n,r,r.type,r.pendingProps,l);case 17:return f=r.type,p=r.pendingProps,p=r.elementType===f?p:li(f,p),cl(n,r),r.tag=1,Fn(f)?(n=!0,ja(r)):n=!1,Cs(r,l),Pp(r,f,p),Tc(r,f,p,l),Cc(null,r,f,!0,n,l);case 19:return Yp(n,r,l);case 22:return zp(n,r,l)}throw Error(t(156,r.tag))};function vm(n,r){return Ca(n,r)}function f0(n,r,l,f){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(n,r,l,f){return new f0(n,r,l,f)}function qc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function d0(n){if(typeof n=="function")return qc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ae)return 11;if(n===de)return 14}return 2}function xr(n,r){var l=n.alternate;return l===null?(l=ni(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Sl(n,r,l,f,p,_){var T=2;if(f=n,typeof n=="function")qc(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case N:return qr(l.children,p,_,r);case G:T=8,p|=8;break;case P:return n=ni(12,l,r,p|2),n.elementType=P,n.lanes=_,n;case J:return n=ni(13,l,r,p),n.elementType=J,n.lanes=_,n;case ce:return n=ni(19,l,r,p),n.elementType=ce,n.lanes=_,n;case le:return Ml(l,p,_,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case b:T=10;break e;case O:T=9;break e;case ae:T=11;break e;case de:T=14;break e;case se:T=16,f=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=ni(T,l,r,p),r.elementType=n,r.type=f,r.lanes=_,r}function qr(n,r,l,f){return n=ni(7,n,f,r),n.lanes=l,n}function Ml(n,r,l,f){return n=ni(22,n,f,r),n.elementType=le,n.lanes=l,n.stateNode={isHidden:!1},n}function $c(n,r,l){return n=ni(6,n,null,r),n.lanes=l,n}function Kc(n,r,l){return r=ni(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function h0(n,r,l,f,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vn(0),this.expirationTimes=vn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vn(0),this.identifierPrefix=f,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Zc(n,r,l,f,p,_,T,D,B){return n=new h0(n,r,l,D,B),r===1?(r=1,_===!0&&(r|=8)):r=0,_=ni(3,null,null,r),n.current=_,_.stateNode=n,_.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},cc(_),n}function p0(n,r,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:f==null?null:""+f,children:n,containerInfo:r,implementation:l}}function _m(n){if(!n)return fr;n=n._reactInternals;e:{if(xi(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Fn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(Fn(l))return jh(n,l,r)}return r}function ym(n,r,l,f,p,_,T,D,B){return n=Zc(l,f,!0,n,p,_,T,D,B),n.context=_m(null),l=n.current,f=Cn(),p=_r(l),_=Bi(f,p),_.callback=r??null,pr(l,_,p),n.current.lanes=p,sn(n,p,f),Bn(n,f),n}function El(n,r,l,f){var p=r.current,_=Cn(),T=_r(p);return l=_m(l),r.context===null?r.context=l:r.pendingContext=l,r=Bi(_,T),r.payload={element:n},f=f===void 0?null:f,f!==null&&(r.callback=f),n=pr(p,r,T),n!==null&&(fi(n,p,T,_),el(n,p,T)),T}function Tl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function xm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function Qc(n,r){xm(n,r),(n=n.alternate)&&xm(n,r)}var Sm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Jc(n){this._internalRoot=n}wl.prototype.render=Jc.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));El(n,r,null,null)},wl.prototype.unmount=Jc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Xr(function(){El(null,n,null,null)}),r[Ui]=null}};function wl(n){this._internalRoot=n}wl.prototype.unstable_scheduleHydration=function(n){if(n){var r=rh();n={blockedOn:null,target:n,priority:r};for(var l=0;l<or.length&&r!==0&&r<or[l].priority;l++);or.splice(l,0,n),l===0&&ah(n)}};function ef(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Al(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Mm(){}function m0(n,r,l,f,p){if(p){if(typeof f=="function"){var _=f;f=function(){var te=Tl(T);_.call(te)}}var T=ym(r,f,n,0,null,!1,!1,"",Mm);return n._reactRootContainer=T,n[Ui]=T.current,Uo(n.nodeType===8?n.parentNode:n),Xr(),T}for(;p=n.lastChild;)n.removeChild(p);if(typeof f=="function"){var D=f;f=function(){var te=Tl(B);D.call(te)}}var B=Zc(n,0,!1,null,null,!1,!1,"",Mm);return n._reactRootContainer=B,n[Ui]=B.current,Uo(n.nodeType===8?n.parentNode:n),Xr(function(){El(r,B,l,f)}),B}function Rl(n,r,l,f,p){var _=l._reactRootContainer;if(_){var T=_;if(typeof p=="function"){var D=p;p=function(){var B=Tl(T);D.call(B)}}El(r,T,n,p)}else T=m0(l,r,n,p,f);return Tl(T)}nh=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=_t(r.pendingLanes);l!==0&&(on(r,l|1),Bn(r,$()),!(wt&6)&&(Is=$()+500,dr()))}break;case 13:Xr(function(){var f=ki(n,1);if(f!==null){var p=Cn();fi(f,n,1,p)}}),Qc(n,1)}},wu=function(n){if(n.tag===13){var r=ki(n,134217728);if(r!==null){var l=Cn();fi(r,n,134217728,l)}Qc(n,134217728)}},ih=function(n){if(n.tag===13){var r=_r(n),l=ki(n,r);if(l!==null){var f=Cn();fi(l,n,r,f)}Qc(n,r)}},rh=function(){return Tt},sh=function(n,r){var l=Tt;try{return Tt=n,r()}finally{Tt=l}},Ae=function(n,r,l){switch(r){case"input":if(ht(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var f=l[r];if(f!==n&&f.form===n.form){var p=Wa(f);if(!p)throw Error(t(90));ct(f),ht(f,p)}}}break;case"textarea":pe(n,l);break;case"select":r=l.value,r!=null&&L(n,!!l.multiple,r,!1)}},Nt=Xc,Jt=Xr;var g0={usingClientEntryPoint:!1,Events:[Oo,xs,Wa,Pe,st,Xc]},Zo={findFiberByHostInstance:Or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},v0={bundleType:Zo.bundleType,version:Zo.version,rendererPackageName:Zo.rendererPackageName,rendererConfig:Zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Aa(n),n===null?null:n.stateNode},findFiberByHostInstance:Zo.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cl.isDisabled&&Cl.supportsFiber)try{Je=Cl.inject(v0),Ve=Cl}catch{}}return zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=g0,zn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ef(r))throw Error(t(200));return p0(n,r,null,l)},zn.createRoot=function(n,r){if(!ef(n))throw Error(t(299));var l=!1,f="",p=Sm;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=Zc(n,1,!1,null,null,l,!1,f,p),n[Ui]=r.current,Uo(n.nodeType===8?n.parentNode:n),new Jc(r)},zn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Aa(r),n=n===null?null:n.stateNode,n},zn.flushSync=function(n){return Xr(n)},zn.hydrate=function(n,r,l){if(!Al(r))throw Error(t(200));return Rl(null,n,r,!0,l)},zn.hydrateRoot=function(n,r,l){if(!ef(n))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,p=!1,_="",T=Sm;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),r=ym(r,null,n,1,l??null,p,!1,_,T),n[Ui]=r.current,Uo(n),f)for(n=0;n<f.length;n++)l=f[n],p=l._getVersion,p=p(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,p]:r.mutableSourceEagerHydrationData.push(l,p);return new wl(r)},zn.render=function(n,r,l){if(!Al(r))throw Error(t(200));return Rl(null,n,r,!1,l)},zn.unmountComponentAtNode=function(n){if(!Al(n))throw Error(t(40));return n._reactRootContainer?(Xr(function(){Rl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ui]=null})}),!0):!1},zn.unstable_batchedUpdates=Xc,zn.unstable_renderSubtreeIntoContainer=function(n,r,l,f){if(!Al(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Rl(n,r,l,!1,f)},zn.version="18.3.1-next-f1338f8080-20240426",zn}var Pm;function w0(){if(Pm)return rf.exports;Pm=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),rf.exports=T0(),rf.exports}var Lm;function A0(){if(Lm)return bl;Lm=1;var o=w0();return bl.createRoot=o.createRoot,bl.hydrateRoot=o.hydrateRoot,bl}var R0=A0();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kd="172",C0=0,Dm=1,b0=2,$g=1,P0=2,qi=3,Dr=0,Gn=1,$i=2,Pr=0,no=1,Im=2,Um=3,Nm=4,L0=5,is=100,D0=101,I0=102,U0=103,N0=104,F0=200,O0=201,k0=202,B0=203,Yf=204,qf=205,z0=206,V0=207,H0=208,G0=209,W0=210,X0=211,j0=212,Y0=213,q0=214,$f=0,Kf=1,Zf=2,so=3,Qf=4,Jf=5,ed=6,td=7,vu=0,$0=1,K0=2,Lr=0,Z0=1,Q0=2,J0=3,ey=4,ty=5,ny=6,iy=7,Fm="attached",ry="detached",Kg=300,oo=301,ao=302,cu=303,nd=304,_u=306,ca=1e3,Ki=1001,id=1002,Kn=1003,sy=1004,Pl=1005,Ri=1006,af=1007,ss=1008,Ji=1009,Zg=1010,Qg=1011,fa=1012,Bd=1013,os=1014,Ci=1015,ya=1016,zd=1017,Vd=1018,lo=1020,Jg=35902,ev=1021,tv=1022,si=1023,nv=1024,iv=1025,io=1026,uo=1027,rv=1028,Hd=1029,sv=1030,Gd=1031,Wd=1033,ru=33776,su=33777,ou=33778,au=33779,rd=35840,sd=35841,od=35842,ad=35843,ld=36196,ud=37492,cd=37496,fd=37808,dd=37809,hd=37810,pd=37811,md=37812,gd=37813,vd=37814,_d=37815,yd=37816,xd=37817,Sd=37818,Md=37819,Ed=37820,Td=37821,lu=36492,wd=36494,Ad=36495,ov=36283,Rd=36284,Cd=36285,bd=36286,fu=2300,Pd=2301,lf=2302,Om=2400,km=2401,Bm=2402,oy=2500,ay=3200,ly=3201,Xd=0,uy=1,br="",kt="srgb",co="srgb-linear",du="linear",Dt="srgb",Ns=7680,zm=519,cy=512,fy=513,dy=514,av=515,hy=516,py=517,my=518,gy=519,Vm=35044,Hm="300 es",Zi=2e3,hu=2001;class mo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let a=0,u=s.length;a<u;a++)s[a].call(this,e);e.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gm=1234567;const oa=Math.PI/180,fo=180/Math.PI;function Ur(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mn[o&255]+Mn[o>>8&255]+Mn[o>>16&255]+Mn[o>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]).toLowerCase()}function gt(o,e,t){return Math.max(e,Math.min(t,o))}function jd(o,e){return(o%e+e)%e}function vy(o,e,t,i,s){return i+(o-e)*(s-i)/(t-e)}function _y(o,e,t){return o!==e?(t-o)/(e-o):0}function aa(o,e,t){return(1-t)*o+t*e}function yy(o,e,t,i){return aa(o,e,1-Math.exp(-t*i))}function xy(o,e=1){return e-Math.abs(jd(o,e*2)-e)}function Sy(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function My(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function Ey(o,e){return o+Math.floor(Math.random()*(e-o+1))}function Ty(o,e){return o+Math.random()*(e-o)}function wy(o){return o*(.5-Math.random())}function Ay(o){o!==void 0&&(Gm=o);let e=Gm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ry(o){return o*oa}function Cy(o){return o*fo}function by(o){return(o&o-1)===0&&o!==0}function Py(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Ly(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Dy(o,e,t,i,s){const a=Math.cos,u=Math.sin,c=a(t/2),d=u(t/2),h=a((e+i)/2),g=u((e+i)/2),m=a((e-i)/2),v=u((e-i)/2),y=a((i-e)/2),M=u((i-e)/2);switch(s){case"XYX":o.set(c*g,d*m,d*v,c*h);break;case"YZY":o.set(d*v,c*g,d*m,c*h);break;case"ZXZ":o.set(d*m,d*v,c*g,c*h);break;case"XZX":o.set(c*g,d*M,d*y,c*h);break;case"YXY":o.set(d*y,c*g,d*M,c*h);break;case"ZYZ":o.set(d*M,d*y,c*g,c*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ks(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function bn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Dn={DEG2RAD:oa,RAD2DEG:fo,generateUUID:Ur,clamp:gt,euclideanModulo:jd,mapLinear:vy,inverseLerp:_y,lerp:aa,damp:yy,pingpong:xy,smoothstep:Sy,smootherstep:My,randInt:Ey,randFloat:Ty,randFloatSpread:wy,seededRandom:Ay,degToRad:Ry,radToDeg:Cy,isPowerOfTwo:by,ceilPowerOfTwo:Py,floorPowerOfTwo:Ly,setQuaternionFromProperEuler:Dy,normalize:bn,denormalize:Ks};class Mt{constructor(e=0,t=0){Mt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*i-u*s+e.x,this.y=a*s+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,t,i,s,a,u,c,d,h){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,u,c,d,h)}set(e,t,i,s,a,u,c,d,h){const g=this.elements;return g[0]=e,g[1]=s,g[2]=c,g[3]=t,g[4]=a,g[5]=d,g[6]=i,g[7]=u,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,u=i[0],c=i[3],d=i[6],h=i[1],g=i[4],m=i[7],v=i[2],y=i[5],M=i[8],E=s[0],S=s[3],x=s[6],I=s[1],C=s[4],R=s[7],k=s[2],F=s[5],N=s[8];return a[0]=u*E+c*I+d*k,a[3]=u*S+c*C+d*F,a[6]=u*x+c*R+d*N,a[1]=h*E+g*I+m*k,a[4]=h*S+g*C+m*F,a[7]=h*x+g*R+m*N,a[2]=v*E+y*I+M*k,a[5]=v*S+y*C+M*F,a[8]=v*x+y*R+M*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],g=e[8];return t*u*g-t*c*h-i*a*g+i*c*d+s*a*h-s*u*d}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],g=e[8],m=g*u-c*h,v=c*d-g*a,y=h*a-u*d,M=t*m+i*v+s*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=m*E,e[1]=(s*h-g*i)*E,e[2]=(c*i-s*u)*E,e[3]=v*E,e[4]=(g*t-s*d)*E,e[5]=(s*a-c*t)*E,e[6]=y*E,e[7]=(i*d-h*t)*E,e[8]=(u*t-i*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,u,c){const d=Math.cos(a),h=Math.sin(a);return this.set(i*d,i*h,-i*(d*u+h*c)+u+e,-s*h,s*d,-s*(-h*u+d*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(uf.makeScale(e,t)),this}rotate(e){return this.premultiply(uf.makeRotation(-e)),this}translate(e,t){return this.premultiply(uf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const uf=new at;function lv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function da(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Iy(){const o=da("canvas");return o.style.display="block",o}const Wm={};function Zs(o){o in Wm||(Wm[o]=!0,console.warn(o))}function Uy(o,e,t){return new Promise(function(i,s){function a(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}function Ny(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Fy(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Xm=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jm=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Oy(){const o={enabled:!0,workingColorSpace:co,spaces:{},convert:function(s,a,u){return this.enabled===!1||a===u||!a||!u||(this.spaces[a].transfer===Dt&&(s.r=Qi(s.r),s.g=Qi(s.g),s.b=Qi(s.b)),this.spaces[a].primaries!==this.spaces[u].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Dt&&(s.r=ro(s.r),s.g=ro(s.g),s.b=ro(s.b))),s},fromWorkingColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},toWorkingColorSpace:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===br?du:this.spaces[s].transfer},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,u){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return o.define({[co]:{primaries:e,whitePoint:i,transfer:du,toXYZ:Xm,fromXYZ:jm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:e,whitePoint:i,transfer:Dt,toXYZ:Xm,fromXYZ:jm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}}),o}const ut=Oy();function Qi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ro(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Fs;class ky{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fs===void 0&&(Fs=da("canvas")),Fs.width=e.width,Fs.height=e.height;const i=Fs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Fs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=da("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let u=0;u<a.length;u++)a[u]=Qi(a[u]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Qi(t[i]/255)*255):t[i]=Qi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let By=0;class uv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=Ur(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let u=0,c=s.length;u<c;u++)s[u].isDataTexture?a.push(cf(s[u].image)):a.push(cf(s[u]))}else a=cf(s);i.url=a}return t||(e.images[this.uuid]=i),i}}function cf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ky.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zy=0;class mn extends mo{constructor(e=mn.DEFAULT_IMAGE,t=mn.DEFAULT_MAPPING,i=Ki,s=Ki,a=Ri,u=ss,c=si,d=Ji,h=mn.DEFAULT_ANISOTROPY,g=br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=Ur(),this.name="",this.source=new uv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=u,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=d,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ca:e.x=e.x-Math.floor(e.x);break;case Ki:e.x=e.x<0?0:1;break;case id:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ca:e.y=e.y-Math.floor(e.y);break;case Ki:e.y=e.y<0?0:1;break;case id:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=Kg;mn.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,i=0,s=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*i+u[8]*s+u[12]*a,this.y=u[1]*t+u[5]*i+u[9]*s+u[13]*a,this.z=u[2]*t+u[6]*i+u[10]*s+u[14]*a,this.w=u[3]*t+u[7]*i+u[11]*s+u[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a;const d=e.elements,h=d[0],g=d[4],m=d[8],v=d[1],y=d[5],M=d[9],E=d[2],S=d[6],x=d[10];if(Math.abs(g-v)<.01&&Math.abs(m-E)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(m+E)<.1&&Math.abs(M+S)<.1&&Math.abs(h+y+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(h+1)/2,R=(y+1)/2,k=(x+1)/2,F=(g+v)/4,N=(m+E)/4,G=(M+S)/4;return C>R&&C>k?C<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(C),s=F/i,a=N/i):R>k?R<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(R),i=F/s,a=G/s):k<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(k),i=N/a,s=G/a),this.set(i,s,a,t),this}let I=Math.sqrt((S-M)*(S-M)+(m-E)*(m-E)+(v-g)*(v-g));return Math.abs(I)<.001&&(I=1),this.x=(S-M)/I,this.y=(m-E)/I,this.z=(v-g)/I,this.w=Math.acos((h+y+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vy extends mo{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new mn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const u=i.count;for(let c=0;c<u;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new uv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class as extends Vy{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class cv extends mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hy extends mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,u,c){let d=i[s+0],h=i[s+1],g=i[s+2],m=i[s+3];const v=a[u+0],y=a[u+1],M=a[u+2],E=a[u+3];if(c===0){e[t+0]=d,e[t+1]=h,e[t+2]=g,e[t+3]=m;return}if(c===1){e[t+0]=v,e[t+1]=y,e[t+2]=M,e[t+3]=E;return}if(m!==E||d!==v||h!==y||g!==M){let S=1-c;const x=d*v+h*y+g*M+m*E,I=x>=0?1:-1,C=1-x*x;if(C>Number.EPSILON){const k=Math.sqrt(C),F=Math.atan2(k,x*I);S=Math.sin(S*F)/k,c=Math.sin(c*F)/k}const R=c*I;if(d=d*S+v*R,h=h*S+y*R,g=g*S+M*R,m=m*S+E*R,S===1-c){const k=1/Math.sqrt(d*d+h*h+g*g+m*m);d*=k,h*=k,g*=k,m*=k}}e[t]=d,e[t+1]=h,e[t+2]=g,e[t+3]=m}static multiplyQuaternionsFlat(e,t,i,s,a,u){const c=i[s],d=i[s+1],h=i[s+2],g=i[s+3],m=a[u],v=a[u+1],y=a[u+2],M=a[u+3];return e[t]=c*M+g*m+d*y-h*v,e[t+1]=d*M+g*v+h*m-c*y,e[t+2]=h*M+g*y+c*v-d*m,e[t+3]=g*M-c*m-d*v-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,a=e._z,u=e._order,c=Math.cos,d=Math.sin,h=c(i/2),g=c(s/2),m=c(a/2),v=d(i/2),y=d(s/2),M=d(a/2);switch(u){case"XYZ":this._x=v*g*m+h*y*M,this._y=h*y*m-v*g*M,this._z=h*g*M+v*y*m,this._w=h*g*m-v*y*M;break;case"YXZ":this._x=v*g*m+h*y*M,this._y=h*y*m-v*g*M,this._z=h*g*M-v*y*m,this._w=h*g*m+v*y*M;break;case"ZXY":this._x=v*g*m-h*y*M,this._y=h*y*m+v*g*M,this._z=h*g*M+v*y*m,this._w=h*g*m-v*y*M;break;case"ZYX":this._x=v*g*m-h*y*M,this._y=h*y*m+v*g*M,this._z=h*g*M-v*y*m,this._w=h*g*m+v*y*M;break;case"YZX":this._x=v*g*m+h*y*M,this._y=h*y*m+v*g*M,this._z=h*g*M-v*y*m,this._w=h*g*m-v*y*M;break;case"XZY":this._x=v*g*m-h*y*M,this._y=h*y*m-v*g*M,this._z=h*g*M+v*y*m,this._w=h*g*m+v*y*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],a=t[8],u=t[1],c=t[5],d=t[9],h=t[2],g=t[6],m=t[10],v=i+c+m;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-d)*y,this._y=(a-h)*y,this._z=(u-s)*y}else if(i>c&&i>m){const y=2*Math.sqrt(1+i-c-m);this._w=(g-d)/y,this._x=.25*y,this._y=(s+u)/y,this._z=(a+h)/y}else if(c>m){const y=2*Math.sqrt(1+c-i-m);this._w=(a-h)/y,this._x=(s+u)/y,this._y=.25*y,this._z=(d+g)/y}else{const y=2*Math.sqrt(1+m-i-c);this._w=(u-s)/y,this._x=(a+h)/y,this._y=(d+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,a=e._z,u=e._w,c=t._x,d=t._y,h=t._z,g=t._w;return this._x=i*g+u*c+s*h-a*d,this._y=s*g+u*d+a*c-i*h,this._z=a*g+u*h+i*d-s*c,this._w=u*g-i*c-s*d-a*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,a=this._z,u=this._w;let c=u*e._w+i*e._x+s*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=i,this._y=s,this._z=a,this;const d=1-c*c;if(d<=Number.EPSILON){const y=1-t;return this._w=y*u+t*this._w,this._x=y*i+t*this._x,this._y=y*s+t*this._y,this._z=y*a+t*this._z,this.normalize(),this}const h=Math.sqrt(d),g=Math.atan2(h,c),m=Math.sin((1-t)*g)/h,v=Math.sin(t*g)/h;return this._w=u*m+this._w*v,this._x=i*m+this._x*v,this._y=s*m+this._y*v,this._z=a*m+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ym.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ym.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=e.elements,u=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*u,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*u,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*u,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,a=e.x,u=e.y,c=e.z,d=e.w,h=2*(u*s-c*i),g=2*(c*t-a*s),m=2*(a*i-u*t);return this.x=t+d*h+u*m-c*g,this.y=i+d*g+c*h-a*m,this.z=s+d*m+a*g-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,a=e.z,u=t.x,c=t.y,d=t.z;return this.x=s*d-a*c,this.y=a*u-i*d,this.z=i*c-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ff.copy(this).projectOnVector(e),this.sub(ff)}reflect(e){return this.sub(ff.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ff=new j,Ym=new Vn;class go{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=a.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,di):di.fromBufferAttribute(a,u),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ll.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ll.copy(i.boundingBox)),Ll.applyMatrix4(e.matrixWorld),this.union(Ll)}const s=e.children;for(let a=0,u=s.length;a<u;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jo),Dl.subVectors(this.max,Jo),Os.subVectors(e.a,Jo),ks.subVectors(e.b,Jo),Bs.subVectors(e.c,Jo),Mr.subVectors(ks,Os),Er.subVectors(Bs,ks),$r.subVectors(Os,Bs);let t=[0,-Mr.z,Mr.y,0,-Er.z,Er.y,0,-$r.z,$r.y,Mr.z,0,-Mr.x,Er.z,0,-Er.x,$r.z,0,-$r.x,-Mr.y,Mr.x,0,-Er.y,Er.x,0,-$r.y,$r.x,0];return!df(t,Os,ks,Bs,Dl)||(t=[1,0,0,0,1,0,0,0,1],!df(t,Os,ks,Bs,Dl))?!1:(Il.crossVectors(Mr,Er),t=[Il.x,Il.y,Il.z],df(t,Os,ks,Bs,Dl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hi=[new j,new j,new j,new j,new j,new j,new j,new j],di=new j,Ll=new go,Os=new j,ks=new j,Bs=new j,Mr=new j,Er=new j,$r=new j,Jo=new j,Dl=new j,Il=new j,Kr=new j;function df(o,e,t,i,s){for(let a=0,u=o.length-3;a<=u;a+=3){Kr.fromArray(o,a);const c=s.x*Math.abs(Kr.x)+s.y*Math.abs(Kr.y)+s.z*Math.abs(Kr.z),d=e.dot(Kr),h=t.dot(Kr),g=i.dot(Kr);if(Math.max(-Math.max(d,h,g),Math.min(d,h,g))>c)return!1}return!0}const Gy=new go,ea=new j,hf=new j;class vo{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Gy.setFromPoints(e).getCenter(i);let s=0;for(let a=0,u=e.length;a<u;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ea.subVectors(e,this.center);const t=ea.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ea,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ea.copy(e.center).add(hf)),this.expandByPoint(ea.copy(e.center).sub(hf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gi=new j,pf=new j,Ul=new j,Tr=new j,mf=new j,Nl=new j,gf=new j;class Yd{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,t),Gi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){pf.copy(e).add(t).multiplyScalar(.5),Ul.copy(t).sub(e).normalize(),Tr.copy(this.origin).sub(pf);const a=e.distanceTo(t)*.5,u=-this.direction.dot(Ul),c=Tr.dot(this.direction),d=-Tr.dot(Ul),h=Tr.lengthSq(),g=Math.abs(1-u*u);let m,v,y,M;if(g>0)if(m=u*d-c,v=u*c-d,M=a*g,m>=0)if(v>=-M)if(v<=M){const E=1/g;m*=E,v*=E,y=m*(m+u*v+2*c)+v*(u*m+v+2*d)+h}else v=a,m=Math.max(0,-(u*v+c)),y=-m*m+v*(v+2*d)+h;else v=-a,m=Math.max(0,-(u*v+c)),y=-m*m+v*(v+2*d)+h;else v<=-M?(m=Math.max(0,-(-u*a+c)),v=m>0?-a:Math.min(Math.max(-a,-d),a),y=-m*m+v*(v+2*d)+h):v<=M?(m=0,v=Math.min(Math.max(-a,-d),a),y=v*(v+2*d)+h):(m=Math.max(0,-(u*a+c)),v=m>0?a:Math.min(Math.max(-a,-d),a),y=-m*m+v*(v+2*d)+h);else v=u>0?-a:a,m=Math.max(0,-(u*v+c)),y=-m*m+v*(v+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(pf).addScaledVector(Ul,v),y}intersectSphere(e,t){Gi.subVectors(e.center,this.origin);const i=Gi.dot(this.direction),s=Gi.dot(Gi)-i*i,a=e.radius*e.radius;if(s>a)return null;const u=Math.sqrt(a-s),c=i-u,d=i+u;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,u,c,d;const h=1/this.direction.x,g=1/this.direction.y,m=1/this.direction.z,v=this.origin;return h>=0?(i=(e.min.x-v.x)*h,s=(e.max.x-v.x)*h):(i=(e.max.x-v.x)*h,s=(e.min.x-v.x)*h),g>=0?(a=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(a=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),i>u||a>s||((a>i||isNaN(i))&&(i=a),(u<s||isNaN(s))&&(s=u),m>=0?(c=(e.min.z-v.z)*m,d=(e.max.z-v.z)*m):(c=(e.max.z-v.z)*m,d=(e.min.z-v.z)*m),i>d||c>s)||((c>i||i!==i)&&(i=c),(d<s||s!==s)&&(s=d),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,t,i,s,a){mf.subVectors(t,e),Nl.subVectors(i,e),gf.crossVectors(mf,Nl);let u=this.direction.dot(gf),c;if(u>0){if(s)return null;c=1}else if(u<0)c=-1,u=-u;else return null;Tr.subVectors(this.origin,e);const d=c*this.direction.dot(Nl.crossVectors(Tr,Nl));if(d<0)return null;const h=c*this.direction.dot(mf.cross(Tr));if(h<0||d+h>u)return null;const g=-c*Tr.dot(gf);return g<0?null:this.at(g/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(e,t,i,s,a,u,c,d,h,g,m,v,y,M,E,S){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,u,c,d,h,g,m,v,y,M,E,S)}set(e,t,i,s,a,u,c,d,h,g,m,v,y,M,E,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=s,x[1]=a,x[5]=u,x[9]=c,x[13]=d,x[2]=h,x[6]=g,x[10]=m,x[14]=v,x[3]=y,x[7]=M,x[11]=E,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/zs.setFromMatrixColumn(e,0).length(),a=1/zs.setFromMatrixColumn(e,1).length(),u=1/zs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*u,t[9]=i[9]*u,t[10]=i[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,a=e.z,u=Math.cos(i),c=Math.sin(i),d=Math.cos(s),h=Math.sin(s),g=Math.cos(a),m=Math.sin(a);if(e.order==="XYZ"){const v=u*g,y=u*m,M=c*g,E=c*m;t[0]=d*g,t[4]=-d*m,t[8]=h,t[1]=y+M*h,t[5]=v-E*h,t[9]=-c*d,t[2]=E-v*h,t[6]=M+y*h,t[10]=u*d}else if(e.order==="YXZ"){const v=d*g,y=d*m,M=h*g,E=h*m;t[0]=v+E*c,t[4]=M*c-y,t[8]=u*h,t[1]=u*m,t[5]=u*g,t[9]=-c,t[2]=y*c-M,t[6]=E+v*c,t[10]=u*d}else if(e.order==="ZXY"){const v=d*g,y=d*m,M=h*g,E=h*m;t[0]=v-E*c,t[4]=-u*m,t[8]=M+y*c,t[1]=y+M*c,t[5]=u*g,t[9]=E-v*c,t[2]=-u*h,t[6]=c,t[10]=u*d}else if(e.order==="ZYX"){const v=u*g,y=u*m,M=c*g,E=c*m;t[0]=d*g,t[4]=M*h-y,t[8]=v*h+E,t[1]=d*m,t[5]=E*h+v,t[9]=y*h-M,t[2]=-h,t[6]=c*d,t[10]=u*d}else if(e.order==="YZX"){const v=u*d,y=u*h,M=c*d,E=c*h;t[0]=d*g,t[4]=E-v*m,t[8]=M*m+y,t[1]=m,t[5]=u*g,t[9]=-c*g,t[2]=-h*g,t[6]=y*m+M,t[10]=v-E*m}else if(e.order==="XZY"){const v=u*d,y=u*h,M=c*d,E=c*h;t[0]=d*g,t[4]=-m,t[8]=h*g,t[1]=v*m+E,t[5]=u*g,t[9]=y*m-M,t[2]=M*m-y,t[6]=c*g,t[10]=E*m+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wy,e,Xy)}lookAt(e,t,i){const s=this.elements;return qn.subVectors(e,t),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),wr.crossVectors(i,qn),wr.lengthSq()===0&&(Math.abs(i.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),wr.crossVectors(i,qn)),wr.normalize(),Fl.crossVectors(qn,wr),s[0]=wr.x,s[4]=Fl.x,s[8]=qn.x,s[1]=wr.y,s[5]=Fl.y,s[9]=qn.y,s[2]=wr.z,s[6]=Fl.z,s[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,u=i[0],c=i[4],d=i[8],h=i[12],g=i[1],m=i[5],v=i[9],y=i[13],M=i[2],E=i[6],S=i[10],x=i[14],I=i[3],C=i[7],R=i[11],k=i[15],F=s[0],N=s[4],G=s[8],P=s[12],b=s[1],O=s[5],ae=s[9],J=s[13],ce=s[2],de=s[6],se=s[10],le=s[14],V=s[3],oe=s[7],re=s[11],U=s[15];return a[0]=u*F+c*b+d*ce+h*V,a[4]=u*N+c*O+d*de+h*oe,a[8]=u*G+c*ae+d*se+h*re,a[12]=u*P+c*J+d*le+h*U,a[1]=g*F+m*b+v*ce+y*V,a[5]=g*N+m*O+v*de+y*oe,a[9]=g*G+m*ae+v*se+y*re,a[13]=g*P+m*J+v*le+y*U,a[2]=M*F+E*b+S*ce+x*V,a[6]=M*N+E*O+S*de+x*oe,a[10]=M*G+E*ae+S*se+x*re,a[14]=M*P+E*J+S*le+x*U,a[3]=I*F+C*b+R*ce+k*V,a[7]=I*N+C*O+R*de+k*oe,a[11]=I*G+C*ae+R*se+k*re,a[15]=I*P+C*J+R*le+k*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],u=e[1],c=e[5],d=e[9],h=e[13],g=e[2],m=e[6],v=e[10],y=e[14],M=e[3],E=e[7],S=e[11],x=e[15];return M*(+a*d*m-s*h*m-a*c*v+i*h*v+s*c*y-i*d*y)+E*(+t*d*y-t*h*v+a*u*v-s*u*y+s*h*g-a*d*g)+S*(+t*h*m-t*c*y-a*u*m+i*u*y+a*c*g-i*h*g)+x*(-s*c*g-t*d*m+t*c*v+s*u*m-i*u*v+i*d*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],g=e[8],m=e[9],v=e[10],y=e[11],M=e[12],E=e[13],S=e[14],x=e[15],I=m*S*h-E*v*h+E*d*y-c*S*y-m*d*x+c*v*x,C=M*v*h-g*S*h-M*d*y+u*S*y+g*d*x-u*v*x,R=g*E*h-M*m*h+M*c*y-u*E*y-g*c*x+u*m*x,k=M*m*d-g*E*d-M*c*v+u*E*v+g*c*S-u*m*S,F=t*I+i*C+s*R+a*k;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/F;return e[0]=I*N,e[1]=(E*v*a-m*S*a-E*s*y+i*S*y+m*s*x-i*v*x)*N,e[2]=(c*S*a-E*d*a+E*s*h-i*S*h-c*s*x+i*d*x)*N,e[3]=(m*d*a-c*v*a-m*s*h+i*v*h+c*s*y-i*d*y)*N,e[4]=C*N,e[5]=(g*S*a-M*v*a+M*s*y-t*S*y-g*s*x+t*v*x)*N,e[6]=(M*d*a-u*S*a-M*s*h+t*S*h+u*s*x-t*d*x)*N,e[7]=(u*v*a-g*d*a+g*s*h-t*v*h-u*s*y+t*d*y)*N,e[8]=R*N,e[9]=(M*m*a-g*E*a-M*i*y+t*E*y+g*i*x-t*m*x)*N,e[10]=(u*E*a-M*c*a+M*i*h-t*E*h-u*i*x+t*c*x)*N,e[11]=(g*c*a-u*m*a-g*i*h+t*m*h+u*i*y-t*c*y)*N,e[12]=k*N,e[13]=(g*E*s-M*m*s+M*i*v-t*E*v-g*i*S+t*m*S)*N,e[14]=(M*c*s-u*E*s-M*i*d+t*E*d+u*i*S-t*c*S)*N,e[15]=(u*m*s-g*c*s+g*i*d-t*m*d-u*i*v+t*c*v)*N,this}scale(e){const t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),a=1-i,u=e.x,c=e.y,d=e.z,h=a*u,g=a*c;return this.set(h*u+i,h*c-s*d,h*d+s*c,0,h*c+s*d,g*c+i,g*d-s*u,0,h*d-s*c,g*d+s*u,a*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,u){return this.set(1,i,a,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,a=t._x,u=t._y,c=t._z,d=t._w,h=a+a,g=u+u,m=c+c,v=a*h,y=a*g,M=a*m,E=u*g,S=u*m,x=c*m,I=d*h,C=d*g,R=d*m,k=i.x,F=i.y,N=i.z;return s[0]=(1-(E+x))*k,s[1]=(y+R)*k,s[2]=(M-C)*k,s[3]=0,s[4]=(y-R)*F,s[5]=(1-(v+x))*F,s[6]=(S+I)*F,s[7]=0,s[8]=(M+C)*N,s[9]=(S-I)*N,s[10]=(1-(v+E))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let a=zs.set(s[0],s[1],s[2]).length();const u=zs.set(s[4],s[5],s[6]).length(),c=zs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],hi.copy(this);const h=1/a,g=1/u,m=1/c;return hi.elements[0]*=h,hi.elements[1]*=h,hi.elements[2]*=h,hi.elements[4]*=g,hi.elements[5]*=g,hi.elements[6]*=g,hi.elements[8]*=m,hi.elements[9]*=m,hi.elements[10]*=m,t.setFromRotationMatrix(hi),i.x=a,i.y=u,i.z=c,this}makePerspective(e,t,i,s,a,u,c=Zi){const d=this.elements,h=2*a/(t-e),g=2*a/(i-s),m=(t+e)/(t-e),v=(i+s)/(i-s);let y,M;if(c===Zi)y=-(u+a)/(u-a),M=-2*u*a/(u-a);else if(c===hu)y=-u/(u-a),M=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=h,d[4]=0,d[8]=m,d[12]=0,d[1]=0,d[5]=g,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=y,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,s,a,u,c=Zi){const d=this.elements,h=1/(t-e),g=1/(i-s),m=1/(u-a),v=(t+e)*h,y=(i+s)*g;let M,E;if(c===Zi)M=(u+a)*m,E=-2*m;else if(c===hu)M=a*m,E=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=2*h,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*g,d[9]=0,d[13]=-y,d[2]=0,d[6]=0,d[10]=E,d[14]=-M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const zs=new j,hi=new qe,Wy=new j(0,0,0),Xy=new j(1,1,1),wr=new j,Fl=new j,qn=new j,qm=new qe,$m=new Vn;class fn{constructor(e=0,t=0,i=0,s=fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,a=s[0],u=s[4],c=s[8],d=s[1],h=s[5],g=s[9],m=s[2],v=s[6],y=s[10];switch(t){case"XYZ":this._y=Math.asin(gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(c,y),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(gt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-m,y),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-gt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(c,y));break;case"XZY":this._z=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return qm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $m.setFromEuler(this),this.setFromQuaternion($m,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fn.DEFAULT_ORDER="XYZ";class fv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jy=0;const Km=new j,Vs=new Vn,Wi=new qe,Ol=new j,ta=new j,Yy=new j,qy=new Vn,Zm=new j(1,0,0),Qm=new j(0,1,0),Jm=new j(0,0,1),eg={type:"added"},$y={type:"removed"},Hs={type:"childadded",child:null},vf={type:"childremoved",child:null};class Ht extends mo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=Ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new j,t=new fn,i=new Vn,s=new j(1,1,1);function a(){i.setFromEuler(t,!1)}function u(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qe},normalMatrix:{value:new at}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(Zm,e)}rotateY(e){return this.rotateOnAxis(Qm,e)}rotateZ(e){return this.rotateOnAxis(Jm,e)}translateOnAxis(e,t){return Km.copy(e).applyQuaternion(this.quaternion),this.position.add(Km.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zm,e)}translateY(e){return this.translateOnAxis(Qm,e)}translateZ(e){return this.translateOnAxis(Jm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ol.copy(e):Ol.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(ta,Ol,this.up):Wi.lookAt(Ol,ta,this.up),this.quaternion.setFromRotationMatrix(Wi),s&&(Wi.extractRotation(s.matrixWorld),Vs.setFromRotationMatrix(Wi),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(eg),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($y),vf.child=e,this.dispatchEvent(vf),vf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(eg),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const u=this.children[i].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let a=0,u=s.length;a<u;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,e,Yy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,qy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,u=s.length;a<u;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let h=0,g=d.length;h<g;h++){const m=d[h];a(e.shapes,m)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,h=this.material.length;d<h;d++)c.push(a(e.materials,this.material[d]));s.material=c}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];s.animations.push(a(e.animations,d))}}if(t){const c=u(e.geometries),d=u(e.materials),h=u(e.textures),g=u(e.images),m=u(e.shapes),v=u(e.skeletons),y=u(e.animations),M=u(e.nodes);c.length>0&&(i.geometries=c),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),g.length>0&&(i.images=g),m.length>0&&(i.shapes=m),v.length>0&&(i.skeletons=v),y.length>0&&(i.animations=y),M.length>0&&(i.nodes=M)}return i.object=s,i;function u(c){const d=[];for(const h in c){const g=c[h];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ht.DEFAULT_UP=new j(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new j,Xi=new j,_f=new j,ji=new j,Gs=new j,Ws=new j,tg=new j,yf=new j,xf=new j,Sf=new j,Mf=new yt,Ef=new yt,Tf=new yt;class vi{constructor(e=new j,t=new j,i=new j){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),pi.subVectors(e,t),s.cross(pi);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){pi.subVectors(s,t),Xi.subVectors(i,t),_f.subVectors(e,t);const u=pi.dot(pi),c=pi.dot(Xi),d=pi.dot(_f),h=Xi.dot(Xi),g=Xi.dot(_f),m=u*h-c*c;if(m===0)return a.set(0,0,0),null;const v=1/m,y=(h*d-c*g)*v,M=(u*g-c*d)*v;return a.set(1-y-M,M,y)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(e,t,i,s,a,u,c,d){return this.getBarycoord(e,t,i,s,ji)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,ji.x),d.addScaledVector(u,ji.y),d.addScaledVector(c,ji.z),d)}static getInterpolatedAttribute(e,t,i,s,a,u){return Mf.setScalar(0),Ef.setScalar(0),Tf.setScalar(0),Mf.fromBufferAttribute(e,t),Ef.fromBufferAttribute(e,i),Tf.fromBufferAttribute(e,s),u.setScalar(0),u.addScaledVector(Mf,a.x),u.addScaledVector(Ef,a.y),u.addScaledVector(Tf,a.z),u}static isFrontFacing(e,t,i,s){return pi.subVectors(i,t),Xi.subVectors(e,t),pi.cross(Xi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),pi.cross(Xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,a){return vi.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,a=this.c;let u,c;Gs.subVectors(s,i),Ws.subVectors(a,i),yf.subVectors(e,i);const d=Gs.dot(yf),h=Ws.dot(yf);if(d<=0&&h<=0)return t.copy(i);xf.subVectors(e,s);const g=Gs.dot(xf),m=Ws.dot(xf);if(g>=0&&m<=g)return t.copy(s);const v=d*m-g*h;if(v<=0&&d>=0&&g<=0)return u=d/(d-g),t.copy(i).addScaledVector(Gs,u);Sf.subVectors(e,a);const y=Gs.dot(Sf),M=Ws.dot(Sf);if(M>=0&&y<=M)return t.copy(a);const E=y*h-d*M;if(E<=0&&h>=0&&M<=0)return c=h/(h-M),t.copy(i).addScaledVector(Ws,c);const S=g*M-y*m;if(S<=0&&m-g>=0&&y-M>=0)return tg.subVectors(a,s),c=(m-g)/(m-g+(y-M)),t.copy(s).addScaledVector(tg,c);const x=1/(S+E+v);return u=E*x,c=v*x,t.copy(i).addScaledVector(Gs,u).addScaledVector(Ws,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ar={h:0,s:0,l:0},kl={h:0,s:0,l:0};function wf(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class it{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ut.workingColorSpace){if(e=jd(e,1),t=gt(t,0,1),i=gt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,u=2*i-a;this.r=wf(u,a,e+1/3),this.g=wf(u,a,e),this.b=wf(u,a,e-1/3)}return ut.toWorkingColorSpace(this,s),this}setStyle(e,t=kt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=s[1],c=s[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const i=dv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return ut.fromWorkingColorSpace(En.copy(this),e),Math.round(gt(En.r*255,0,255))*65536+Math.round(gt(En.g*255,0,255))*256+Math.round(gt(En.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(En.copy(this),t);const i=En.r,s=En.g,a=En.b,u=Math.max(i,s,a),c=Math.min(i,s,a);let d,h;const g=(c+u)/2;if(c===u)d=0,h=0;else{const m=u-c;switch(h=g<=.5?m/(u+c):m/(2-u-c),u){case i:d=(s-a)/m+(s<a?6:0);break;case s:d=(a-i)/m+2;break;case a:d=(i-s)/m+4;break}d/=6}return e.h=d,e.s=h,e.l=g,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=kt){ut.fromWorkingColorSpace(En.copy(this),e);const t=En.r,i=En.g,s=En.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ar),this.setHSL(Ar.h+e,Ar.s+t,Ar.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ar),e.getHSL(kl);const i=aa(Ar.h,kl.h,t),s=aa(Ar.s,kl.s,t),a=aa(Ar.l,kl.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new it;it.NAMES=dv;let Ky=0;class cs extends mo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ky++}),this.uuid=Ur(),this.name="",this.type="Material",this.blending=no,this.side=Dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yf,this.blendDst=qf,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=so,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==no&&(i.blending=this.blending),this.side!==Dr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Yf&&(i.blendSrc=this.blendSrc),this.blendDst!==qf&&(i.blendDst=this.blendDst),this.blendEquation!==is&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==so&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const u=[];for(const c in a){const d=a[c];delete d.metadata,u.push(d)}return u}if(t){const a=s(e.textures),u=s(e.images);a.length>0&&(i.textures=a),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class hv extends cs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=vu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new j,Bl=new Mt;class bi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Vm,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Bl.fromBufferAttribute(this,t),Bl.applyMatrix3(e),this.setXY(t,Bl.x,Bl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ks(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=bn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ks(t,this.array)),t}setX(e,t){return this.normalized&&(t=bn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ks(t,this.array)),t}setY(e,t){return this.normalized&&(t=bn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ks(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ks(t,this.array)),t}setW(e,t){return this.normalized&&(t=bn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=bn(t,this.array),i=bn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=bn(t,this.array),i=bn(i,this.array),s=bn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=bn(t,this.array),i=bn(i,this.array),s=bn(s,this.array),a=bn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vm&&(e.usage=this.usage),e}}class qd extends bi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class pv extends bi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Hn extends bi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Zy=0;const ii=new qe,Af=new Ht,Xs=new j,$n=new go,na=new go,cn=new j;class yi extends mo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zy++}),this.uuid=Ur(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lv(e)?pv:qd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new at().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,i){return ii.makeTranslation(e,t,i),this.applyMatrix4(ii),this}scale(e,t,i){return ii.makeScale(e,t,i),this.applyMatrix4(ii),this}lookAt(e){return Af.lookAt(e),Af.updateMatrix(),this.applyMatrix4(Af.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,a=e.length;s<a;s++){const u=e[s];i.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Hn(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new go);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];$n.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const c=t[a];na.setFromBufferAttribute(c),this.morphTargetsRelative?(cn.addVectors($n.min,na.min),$n.expandByPoint(cn),cn.addVectors($n.max,na.max),$n.expandByPoint(cn)):($n.expandByPoint(na.min),$n.expandByPoint(na.max))}$n.getCenter(i);let s=0;for(let a=0,u=e.count;a<u;a++)cn.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(cn));if(t)for(let a=0,u=t.length;a<u;a++){const c=t[a],d=this.morphTargetsRelative;for(let h=0,g=c.count;h<g;h++)cn.fromBufferAttribute(c,h),d&&(Xs.fromBufferAttribute(e,h),cn.add(Xs)),s=Math.max(s,i.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bi(new Float32Array(4*i.count),4));const u=this.getAttribute("tangent"),c=[],d=[];for(let G=0;G<i.count;G++)c[G]=new j,d[G]=new j;const h=new j,g=new j,m=new j,v=new Mt,y=new Mt,M=new Mt,E=new j,S=new j;function x(G,P,b){h.fromBufferAttribute(i,G),g.fromBufferAttribute(i,P),m.fromBufferAttribute(i,b),v.fromBufferAttribute(a,G),y.fromBufferAttribute(a,P),M.fromBufferAttribute(a,b),g.sub(h),m.sub(h),y.sub(v),M.sub(v);const O=1/(y.x*M.y-M.x*y.y);isFinite(O)&&(E.copy(g).multiplyScalar(M.y).addScaledVector(m,-y.y).multiplyScalar(O),S.copy(m).multiplyScalar(y.x).addScaledVector(g,-M.x).multiplyScalar(O),c[G].add(E),c[P].add(E),c[b].add(E),d[G].add(S),d[P].add(S),d[b].add(S))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let G=0,P=I.length;G<P;++G){const b=I[G],O=b.start,ae=b.count;for(let J=O,ce=O+ae;J<ce;J+=3)x(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const C=new j,R=new j,k=new j,F=new j;function N(G){k.fromBufferAttribute(s,G),F.copy(k);const P=c[G];C.copy(P),C.sub(k.multiplyScalar(k.dot(P))).normalize(),R.crossVectors(F,P);const O=R.dot(d[G])<0?-1:1;u.setXYZW(G,C.x,C.y,C.z,O)}for(let G=0,P=I.length;G<P;++G){const b=I[G],O=b.start,ae=b.count;for(let J=O,ce=O+ae;J<ce;J+=3)N(e.getX(J+0)),N(e.getX(J+1)),N(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new bi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let v=0,y=i.count;v<y;v++)i.setXYZ(v,0,0,0);const s=new j,a=new j,u=new j,c=new j,d=new j,h=new j,g=new j,m=new j;if(e)for(let v=0,y=e.count;v<y;v+=3){const M=e.getX(v+0),E=e.getX(v+1),S=e.getX(v+2);s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,E),u.fromBufferAttribute(t,S),g.subVectors(u,a),m.subVectors(s,a),g.cross(m),c.fromBufferAttribute(i,M),d.fromBufferAttribute(i,E),h.fromBufferAttribute(i,S),c.add(g),d.add(g),h.add(g),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(E,d.x,d.y,d.z),i.setXYZ(S,h.x,h.y,h.z)}else for(let v=0,y=t.count;v<y;v+=3)s.fromBufferAttribute(t,v+0),a.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),g.subVectors(u,a),m.subVectors(s,a),g.cross(m),i.setXYZ(v+0,g.x,g.y,g.z),i.setXYZ(v+1,g.x,g.y,g.z),i.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(c,d){const h=c.array,g=c.itemSize,m=c.normalized,v=new h.constructor(d.length*g);let y=0,M=0;for(let E=0,S=d.length;E<S;E++){c.isInterleavedBufferAttribute?y=d[E]*c.data.stride+c.offset:y=d[E]*g;for(let x=0;x<g;x++)v[M++]=h[y++]}return new bi(v,g,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yi,i=this.index.array,s=this.attributes;for(const c in s){const d=s[c],h=e(d,i);t.setAttribute(c,h)}const a=this.morphAttributes;for(const c in a){const d=[],h=a[c];for(let g=0,m=h.length;g<m;g++){const v=h[g],y=e(v,i);d.push(y)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,d=u.length;c<d;c++){const h=u[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const s={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],g=[];for(let m=0,v=h.length;m<v;m++){const y=h[m];g.push(y.toJSON(e.data))}g.length>0&&(s[d]=g,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const h in s){const g=s[h];this.setAttribute(h,g.clone(t))}const a=e.morphAttributes;for(const h in a){const g=[],m=a[h];for(let v=0,y=m.length;v<y;v++)g.push(m[v].clone(t));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,g=u.length;h<g;h++){const m=u[h];this.addGroup(m.start,m.count,m.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ng=new qe,Zr=new Yd,zl=new vo,ig=new j,Vl=new j,Hl=new j,Gl=new j,Rf=new j,Wl=new j,rg=new j,Xl=new j;class _i extends Ht{constructor(e=new yi,t=new hv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=s.length;a<u;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,u=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const c=this.morphTargetInfluences;if(a&&c){Wl.set(0,0,0);for(let d=0,h=a.length;d<h;d++){const g=c[d],m=a[d];g!==0&&(Rf.fromBufferAttribute(m,e),u?Wl.addScaledVector(Rf,g):Wl.addScaledVector(Rf.sub(t),g))}t.add(Wl)}return t}raycast(e,t){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zl.copy(i.boundingSphere),zl.applyMatrix4(a),Zr.copy(e.ray).recast(e.near),!(zl.containsPoint(Zr.origin)===!1&&(Zr.intersectSphere(zl,ig)===null||Zr.origin.distanceToSquared(ig)>(e.far-e.near)**2))&&(ng.copy(a).invert(),Zr.copy(e.ray).applyMatrix4(ng),!(i.boundingBox!==null&&Zr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Zr)))}_computeIntersections(e,t,i){let s;const a=this.geometry,u=this.material,c=a.index,d=a.attributes.position,h=a.attributes.uv,g=a.attributes.uv1,m=a.attributes.normal,v=a.groups,y=a.drawRange;if(c!==null)if(Array.isArray(u))for(let M=0,E=v.length;M<E;M++){const S=v[M],x=u[S.materialIndex],I=Math.max(S.start,y.start),C=Math.min(c.count,Math.min(S.start+S.count,y.start+y.count));for(let R=I,k=C;R<k;R+=3){const F=c.getX(R),N=c.getX(R+1),G=c.getX(R+2);s=jl(this,x,e,i,h,g,m,F,N,G),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,y.start),E=Math.min(c.count,y.start+y.count);for(let S=M,x=E;S<x;S+=3){const I=c.getX(S),C=c.getX(S+1),R=c.getX(S+2);s=jl(this,u,e,i,h,g,m,I,C,R),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,E=v.length;M<E;M++){const S=v[M],x=u[S.materialIndex],I=Math.max(S.start,y.start),C=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let R=I,k=C;R<k;R+=3){const F=R,N=R+1,G=R+2;s=jl(this,x,e,i,h,g,m,F,N,G),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,y.start),E=Math.min(d.count,y.start+y.count);for(let S=M,x=E;S<x;S+=3){const I=S,C=S+1,R=S+2;s=jl(this,u,e,i,h,g,m,I,C,R),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}}function Qy(o,e,t,i,s,a,u,c){let d;if(e.side===Gn?d=i.intersectTriangle(u,a,s,!0,c):d=i.intersectTriangle(s,a,u,e.side===Dr,c),d===null)return null;Xl.copy(c),Xl.applyMatrix4(o.matrixWorld);const h=t.ray.origin.distanceTo(Xl);return h<t.near||h>t.far?null:{distance:h,point:Xl.clone(),object:o}}function jl(o,e,t,i,s,a,u,c,d,h){o.getVertexPosition(c,Vl),o.getVertexPosition(d,Hl),o.getVertexPosition(h,Gl);const g=Qy(o,e,t,i,Vl,Hl,Gl,rg);if(g){const m=new j;vi.getBarycoord(rg,Vl,Hl,Gl,m),s&&(g.uv=vi.getInterpolatedAttribute(s,c,d,h,m,new Mt)),a&&(g.uv1=vi.getInterpolatedAttribute(a,c,d,h,m,new Mt)),u&&(g.normal=vi.getInterpolatedAttribute(u,c,d,h,m,new j),g.normal.dot(i.direction)>0&&g.normal.multiplyScalar(-1));const v={a:c,b:d,c:h,normal:new j,materialIndex:0};vi.getNormal(Vl,Hl,Gl,v.normal),g.face=v,g.barycoord=m}return g}class xa extends yi{constructor(e=1,t=1,i=1,s=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:u};const c=this;s=Math.floor(s),a=Math.floor(a),u=Math.floor(u);const d=[],h=[],g=[],m=[];let v=0,y=0;M("z","y","x",-1,-1,i,t,e,u,a,0),M("z","y","x",1,-1,i,t,-e,u,a,1),M("x","z","y",1,1,e,i,t,s,u,2),M("x","z","y",1,-1,e,i,-t,s,u,3),M("x","y","z",1,-1,e,t,i,s,a,4),M("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(d),this.setAttribute("position",new Hn(h,3)),this.setAttribute("normal",new Hn(g,3)),this.setAttribute("uv",new Hn(m,2));function M(E,S,x,I,C,R,k,F,N,G,P){const b=R/N,O=k/G,ae=R/2,J=k/2,ce=F/2,de=N+1,se=G+1;let le=0,V=0;const oe=new j;for(let re=0;re<se;re++){const U=re*O-J;for(let ne=0;ne<de;ne++){const be=ne*b-ae;oe[E]=be*I,oe[S]=U*C,oe[x]=ce,h.push(oe.x,oe.y,oe.z),oe[E]=0,oe[S]=0,oe[x]=F>0?1:-1,g.push(oe.x,oe.y,oe.z),m.push(ne/N),m.push(1-re/G),le+=1}}for(let re=0;re<G;re++)for(let U=0;U<N;U++){const ne=v+U+de*re,be=v+U+de*(re+1),Z=v+(U+1)+de*(re+1),ue=v+(U+1)+de*re;d.push(ne,be,ue),d.push(be,Z,ue),V+=6}c.addGroup(y,V,P),y+=V,v+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ho(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const s=o[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Pn(o){const e={};for(let t=0;t<o.length;t++){const i=ho(o[t]);for(const s in i)e[s]=i[s]}return e}function Jy(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function mv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const ex={clone:ho,merge:Pn};var tx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ir extends cs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tx,this.fragmentShader=nx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ho(e.uniforms),this.uniformsGroups=Jy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class gv extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=Zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rr=new j,sg=new Mt,og=new Mt;class In extends gv{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fo*2*Math.atan(Math.tan(oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z),Rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z)}getViewSize(e,t){return this.getViewBounds(e,sg,og),t.subVectors(og,sg)}setViewOffset(e,t,i,s,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(oa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;a+=u.offsetX*s/d,t-=u.offsetY*i/h,s*=u.width/d,i*=u.height/h}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const js=-90,Ys=1;class ix extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new In(js,Ys,e,t);s.layers=this.layers,this.add(s);const a=new In(js,Ys,e,t);a.layers=this.layers,this.add(a);const u=new In(js,Ys,e,t);u.layers=this.layers,this.add(u);const c=new In(js,Ys,e,t);c.layers=this.layers,this.add(c);const d=new In(js,Ys,e,t);d.layers=this.layers,this.add(d);const h=new In(js,Ys,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,a,u,c,d]=t;for(const h of t)this.remove(h);if(e===Zi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===hu)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,c,d,h,g]=this.children,m=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,a),e.setRenderTarget(i,1,s),e.render(t,u),e.setRenderTarget(i,2,s),e.render(t,c),e.setRenderTarget(i,3,s),e.render(t,d),e.setRenderTarget(i,4,s),e.render(t,h),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,s),e.render(t,g),e.setRenderTarget(m,v,y),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class vv extends mn{constructor(e,t,i,s,a,u,c,d,h,g){e=e!==void 0?e:[],t=t!==void 0?t:oo,super(e,t,i,s,a,u,c,d,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rx extends as{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new vv(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ri}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xa(5,5,5),a=new Ir({name:"CubemapFromEquirect",uniforms:ho(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gn,blending:Pr});a.uniforms.tEquirect.value=t;const u=new _i(s,a),c=t.minFilter;return t.minFilter===ss&&(t.minFilter=Ri),new ix(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,i,s){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,i,s);e.setRenderTarget(a)}}class sx extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ag=new j,lg=new yt,ug=new yt,ox=new j,cg=new qe,Yl=new j,Cf=new vo,fg=new qe,bf=new Yd;class ax extends _i{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Fm,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new go),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Yl),this.boundingBox.expandByPoint(Yl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new vo),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Yl),this.boundingSphere.expandByPoint(Yl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cf.copy(this.boundingSphere),Cf.applyMatrix4(s),e.ray.intersectsSphere(Cf)!==!1&&(fg.copy(s).invert(),bf.copy(e.ray).applyMatrix4(fg),!(this.boundingBox!==null&&bf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,bf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new yt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Fm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ry?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;lg.fromBufferAttribute(s.attributes.skinIndex,e),ug.fromBufferAttribute(s.attributes.skinWeight,e),ag.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const u=ug.getComponent(a);if(u!==0){const c=lg.getComponent(a);cg.multiplyMatrices(i.bones[c].matrixWorld,i.boneInverses[c]),t.addScaledVector(ox.copy(ag).applyMatrix4(cg),u)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Ld extends Ht{constructor(){super(),this.isBone=!0,this.type="Bone"}}class lx extends mn{constructor(e=null,t=1,i=1,s,a,u,c,d,h=Kn,g=Kn,m,v){super(null,u,c,d,h,g,s,a,m,v),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const dg=new qe,ux=new qe;class $d{constructor(e=[],t=[]){this.uuid=Ur(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new qe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let a=0,u=e.length;a<u;a++){const c=e[a]?e[a].matrixWorld:ux;dg.multiplyMatrices(c,t[a]),dg.toArray(i,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new $d(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new lx(t,e,e,si,Ci);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const a=e.bones[i];let u=t[a];u===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),u=new Ld),this.bones.push(u),this.boneInverses.push(new qe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,a=t.length;s<a;s++){const u=t[s];e.bones.push(u.uuid);const c=i[s];e.boneInverses.push(c.toArray())}return e}}const Pf=new j,cx=new j,fx=new at;class ts{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Pf.subVectors(i,t).cross(cx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Pf),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||fx.getNormalMatrix(e),s=this.coplanarPoint(Pf).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qr=new vo,ql=new j;class Kd{constructor(e=new ts,t=new ts,i=new ts,s=new ts,a=new ts,u=new ts){this.planes=[e,t,i,s,a,u]}set(e,t,i,s,a,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(s),c[4].copy(a),c[5].copy(u),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Zi){const i=this.planes,s=e.elements,a=s[0],u=s[1],c=s[2],d=s[3],h=s[4],g=s[5],m=s[6],v=s[7],y=s[8],M=s[9],E=s[10],S=s[11],x=s[12],I=s[13],C=s[14],R=s[15];if(i[0].setComponents(d-a,v-h,S-y,R-x).normalize(),i[1].setComponents(d+a,v+h,S+y,R+x).normalize(),i[2].setComponents(d+u,v+g,S+M,R+I).normalize(),i[3].setComponents(d-u,v-g,S-M,R-I).normalize(),i[4].setComponents(d-c,v-m,S-E,R-C).normalize(),t===Zi)i[5].setComponents(d+c,v+m,S+E,R+C).normalize();else if(t===hu)i[5].setComponents(c,m,E,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qr)}intersectsSprite(e){return Qr.center.set(0,0,0),Qr.radius=.7071067811865476,Qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qr)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ql.x=s.normal.x>0?e.max.x:e.min.x,ql.y=s.normal.y>0?e.max.y:e.min.y,ql.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ql)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _v extends cs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const pu=new j,mu=new j,hg=new qe,ia=new Yd,$l=new vo,Lf=new j,pg=new j;class dx extends Ht{constructor(e=new yi,t=new _v){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,a=t.count;s<a;s++)pu.fromBufferAttribute(t,s-1),mu.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=pu.distanceTo(mu);e.setAttribute("lineDistance",new Hn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$l.copy(i.boundingSphere),$l.applyMatrix4(s),$l.radius+=a,e.ray.intersectsSphere($l)===!1)return;hg.copy(s).invert(),ia.copy(e.ray).applyMatrix4(hg);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,h=this.isLineSegments?2:1,g=i.index,v=i.attributes.position;if(g!==null){const y=Math.max(0,u.start),M=Math.min(g.count,u.start+u.count);for(let E=y,S=M-1;E<S;E+=h){const x=g.getX(E),I=g.getX(E+1),C=Kl(this,e,ia,d,x,I);C&&t.push(C)}if(this.isLineLoop){const E=g.getX(M-1),S=g.getX(y),x=Kl(this,e,ia,d,E,S);x&&t.push(x)}}else{const y=Math.max(0,u.start),M=Math.min(v.count,u.start+u.count);for(let E=y,S=M-1;E<S;E+=h){const x=Kl(this,e,ia,d,E,E+1);x&&t.push(x)}if(this.isLineLoop){const E=Kl(this,e,ia,d,M-1,y);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=s.length;a<u;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function Kl(o,e,t,i,s,a){const u=o.geometry.attributes.position;if(pu.fromBufferAttribute(u,s),mu.fromBufferAttribute(u,a),t.distanceSqToSegment(pu,mu,Lf,pg)>i)return;Lf.applyMatrix4(o.matrixWorld);const d=e.ray.origin.distanceTo(Lf);if(!(d<e.near||d>e.far))return{distance:d,point:pg.clone().applyMatrix4(o.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:o}}class Qs extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}class yv extends mn{constructor(e,t,i,s,a,u,c,d,h,g=io){if(g!==io&&g!==uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&g===io&&(i=os),i===void 0&&g===uo&&(i=lo),super(null,s,a,u,c,d,g,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Kn,this.minFilter=d!==void 0?d:Kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class hx{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),a=0;t.push(0);for(let u=1;u<=e;u++)i=this.getPoint(u/e),a+=i.distanceTo(s),t.push(a),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const a=i.length;let u;t?u=t:u=e*i[a-1];let c=0,d=a-1,h;for(;c<=d;)if(s=Math.floor(c+(d-c)/2),h=i[s]-u,h<0)c=s+1;else if(h>0)d=s-1;else{d=s;break}if(s=d,i[s]===u)return s/(a-1);const g=i[s],v=i[s+1]-g,y=(u-g)/v;return(s+y)/(a-1)}getTangent(e,t){let s=e-1e-4,a=e+1e-4;s<0&&(s=0),a>1&&(a=1);const u=this.getPoint(s),c=this.getPoint(a),d=t||(u.isVector2?new Mt:new j);return d.copy(c).sub(u).normalize(),d}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new j,s=[],a=[],u=[],c=new j,d=new qe;for(let y=0;y<=e;y++){const M=y/e;s[y]=this.getTangentAt(M,new j)}a[0]=new j,u[0]=new j;let h=Number.MAX_VALUE;const g=Math.abs(s[0].x),m=Math.abs(s[0].y),v=Math.abs(s[0].z);g<=h&&(h=g,i.set(1,0,0)),m<=h&&(h=m,i.set(0,1,0)),v<=h&&i.set(0,0,1),c.crossVectors(s[0],i).normalize(),a[0].crossVectors(s[0],c),u[0].crossVectors(s[0],a[0]);for(let y=1;y<=e;y++){if(a[y]=a[y-1].clone(),u[y]=u[y-1].clone(),c.crossVectors(s[y-1],s[y]),c.length()>Number.EPSILON){c.normalize();const M=Math.acos(gt(s[y-1].dot(s[y]),-1,1));a[y].applyMatrix4(d.makeRotationAxis(c,M))}u[y].crossVectors(s[y],a[y])}if(t===!0){let y=Math.acos(gt(a[0].dot(a[e]),-1,1));y/=e,s[0].dot(c.crossVectors(a[0],a[e]))>0&&(y=-y);for(let M=1;M<=e;M++)a[M].applyMatrix4(d.makeRotationAxis(s[M],y*M)),u[M].crossVectors(s[M],a[M])}return{tangents:s,normals:a,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}const px={triangulate:function(o,e,t=2){const i=e&&e.length,s=i?e[0]*t:o.length;let a=xv(o,0,s,t,!0);const u=[];if(!a||a.next===a.prev)return u;let c,d,h,g,m,v,y;if(i&&(a=yx(o,e,a,t)),o.length>80*t){c=h=o[0],d=g=o[1];for(let M=t;M<s;M+=t)m=o[M],v=o[M+1],m<c&&(c=m),v<d&&(d=v),m>h&&(h=m),v>g&&(g=v);y=Math.max(h-c,g-d),y=y!==0?32767/y:0}return ha(a,u,t,c,d,y,0),u}};function xv(o,e,t,i,s){let a,u;if(s===Px(o,e,t,i)>0)for(a=e;a<t;a+=i)u=mg(a,o[a],o[a+1],u);else for(a=t-i;a>=e;a-=i)u=mg(a,o[a],o[a+1],u);return u&&yu(u,u.next)&&(ma(u),u=u.next),u}function ls(o,e){if(!o)return o;e||(e=o);let t=o,i;do if(i=!1,!t.steiner&&(yu(t,t.next)||Xt(t.prev,t,t.next)===0)){if(ma(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ha(o,e,t,i,s,a,u){if(!o)return;!u&&a&&Tx(o,i,s,a);let c=o,d,h;for(;o.prev!==o.next;){if(d=o.prev,h=o.next,a?gx(o,i,s,a):mx(o)){e.push(d.i/t|0),e.push(o.i/t|0),e.push(h.i/t|0),ma(o),o=h.next,c=h.next;continue}if(o=h,o===c){u?u===1?(o=vx(ls(o),e,t),ha(o,e,t,i,s,a,2)):u===2&&_x(o,e,t,i,s,a):ha(ls(o),e,t,i,s,a,1);break}}}function mx(o){const e=o.prev,t=o,i=o.next;if(Xt(e,t,i)>=0)return!1;const s=e.x,a=t.x,u=i.x,c=e.y,d=t.y,h=i.y,g=s<a?s<u?s:u:a<u?a:u,m=c<d?c<h?c:h:d<h?d:h,v=s>a?s>u?s:u:a>u?a:u,y=c>d?c>h?c:h:d>h?d:h;let M=i.next;for(;M!==e;){if(M.x>=g&&M.x<=v&&M.y>=m&&M.y<=y&&Js(s,c,a,d,u,h,M.x,M.y)&&Xt(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function gx(o,e,t,i){const s=o.prev,a=o,u=o.next;if(Xt(s,a,u)>=0)return!1;const c=s.x,d=a.x,h=u.x,g=s.y,m=a.y,v=u.y,y=c<d?c<h?c:h:d<h?d:h,M=g<m?g<v?g:v:m<v?m:v,E=c>d?c>h?c:h:d>h?d:h,S=g>m?g>v?g:v:m>v?m:v,x=Dd(y,M,e,t,i),I=Dd(E,S,e,t,i);let C=o.prevZ,R=o.nextZ;for(;C&&C.z>=x&&R&&R.z<=I;){if(C.x>=y&&C.x<=E&&C.y>=M&&C.y<=S&&C!==s&&C!==u&&Js(c,g,d,m,h,v,C.x,C.y)&&Xt(C.prev,C,C.next)>=0||(C=C.prevZ,R.x>=y&&R.x<=E&&R.y>=M&&R.y<=S&&R!==s&&R!==u&&Js(c,g,d,m,h,v,R.x,R.y)&&Xt(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;C&&C.z>=x;){if(C.x>=y&&C.x<=E&&C.y>=M&&C.y<=S&&C!==s&&C!==u&&Js(c,g,d,m,h,v,C.x,C.y)&&Xt(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;R&&R.z<=I;){if(R.x>=y&&R.x<=E&&R.y>=M&&R.y<=S&&R!==s&&R!==u&&Js(c,g,d,m,h,v,R.x,R.y)&&Xt(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function vx(o,e,t){let i=o;do{const s=i.prev,a=i.next.next;!yu(s,a)&&Sv(s,i,i.next,a)&&pa(s,a)&&pa(a,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(a.i/t|0),ma(i),ma(i.next),i=o=a),i=i.next}while(i!==o);return ls(i)}function _x(o,e,t,i,s,a){let u=o;do{let c=u.next.next;for(;c!==u.prev;){if(u.i!==c.i&&Rx(u,c)){let d=Mv(u,c);u=ls(u,u.next),d=ls(d,d.next),ha(u,e,t,i,s,a,0),ha(d,e,t,i,s,a,0);return}c=c.next}u=u.next}while(u!==o)}function yx(o,e,t,i){const s=[];let a,u,c,d,h;for(a=0,u=e.length;a<u;a++)c=e[a]*i,d=a<u-1?e[a+1]*i:o.length,h=xv(o,c,d,i,!1),h===h.next&&(h.steiner=!0),s.push(Ax(h));for(s.sort(xx),a=0;a<s.length;a++)t=Sx(s[a],t);return t}function xx(o,e){return o.x-e.x}function Sx(o,e){const t=Mx(o,e);if(!t)return e;const i=Mv(t,o);return ls(i,i.next),ls(t,t.next)}function Mx(o,e){let t=e,i=-1/0,s;const a=o.x,u=o.y;do{if(u<=t.y&&u>=t.next.y&&t.next.y!==t.y){const v=t.x+(u-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(v<=a&&v>i&&(i=v,s=t.x<t.next.x?t:t.next,v===a))return s}t=t.next}while(t!==e);if(!s)return null;const c=s,d=s.x,h=s.y;let g=1/0,m;t=s;do a>=t.x&&t.x>=d&&a!==t.x&&Js(u<h?a:i,u,d,h,u<h?i:a,u,t.x,t.y)&&(m=Math.abs(u-t.y)/(a-t.x),pa(t,o)&&(m<g||m===g&&(t.x>s.x||t.x===s.x&&Ex(s,t)))&&(s=t,g=m)),t=t.next;while(t!==c);return s}function Ex(o,e){return Xt(o.prev,o,e.prev)<0&&Xt(e.next,o,o.next)<0}function Tx(o,e,t,i){let s=o;do s.z===0&&(s.z=Dd(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==o);s.prevZ.nextZ=null,s.prevZ=null,wx(s)}function wx(o){let e,t,i,s,a,u,c,d,h=1;do{for(t=o,o=null,a=null,u=0;t;){for(u++,i=t,c=0,e=0;e<h&&(c++,i=i.nextZ,!!i);e++);for(d=h;c>0||d>0&&i;)c!==0&&(d===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,c--):(s=i,i=i.nextZ,d--),a?a.nextZ=s:o=s,s.prevZ=a,a=s;t=i}a.nextZ=null,h*=2}while(u>1);return o}function Dd(o,e,t,i,s){return o=(o-t)*s|0,e=(e-i)*s|0,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,o|e<<1}function Ax(o){let e=o,t=o;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==o);return t}function Js(o,e,t,i,s,a,u,c){return(s-u)*(e-c)>=(o-u)*(a-c)&&(o-u)*(i-c)>=(t-u)*(e-c)&&(t-u)*(a-c)>=(s-u)*(i-c)}function Rx(o,e){return o.next.i!==e.i&&o.prev.i!==e.i&&!Cx(o,e)&&(pa(o,e)&&pa(e,o)&&bx(o,e)&&(Xt(o.prev,o,e.prev)||Xt(o,e.prev,e))||yu(o,e)&&Xt(o.prev,o,o.next)>0&&Xt(e.prev,e,e.next)>0)}function Xt(o,e,t){return(e.y-o.y)*(t.x-e.x)-(e.x-o.x)*(t.y-e.y)}function yu(o,e){return o.x===e.x&&o.y===e.y}function Sv(o,e,t,i){const s=Ql(Xt(o,e,t)),a=Ql(Xt(o,e,i)),u=Ql(Xt(t,i,o)),c=Ql(Xt(t,i,e));return!!(s!==a&&u!==c||s===0&&Zl(o,t,e)||a===0&&Zl(o,i,e)||u===0&&Zl(t,o,i)||c===0&&Zl(t,e,i))}function Zl(o,e,t){return e.x<=Math.max(o.x,t.x)&&e.x>=Math.min(o.x,t.x)&&e.y<=Math.max(o.y,t.y)&&e.y>=Math.min(o.y,t.y)}function Ql(o){return o>0?1:o<0?-1:0}function Cx(o,e){let t=o;do{if(t.i!==o.i&&t.next.i!==o.i&&t.i!==e.i&&t.next.i!==e.i&&Sv(t,t.next,o,e))return!0;t=t.next}while(t!==o);return!1}function pa(o,e){return Xt(o.prev,o,o.next)<0?Xt(o,e,o.next)>=0&&Xt(o,o.prev,e)>=0:Xt(o,e,o.prev)<0||Xt(o,o.next,e)<0}function bx(o,e){let t=o,i=!1;const s=(o.x+e.x)/2,a=(o.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&s<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==o);return i}function Mv(o,e){const t=new Id(o.i,o.x,o.y),i=new Id(e.i,e.x,e.y),s=o.next,a=e.prev;return o.next=e,e.prev=o,t.next=s,s.prev=t,i.next=t,t.prev=i,a.next=i,i.prev=a,i}function mg(o,e,t,i){const s=new Id(o,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ma(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function Id(o,e,t){this.i=o,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Px(o,e,t,i){let s=0;for(let a=e,u=t-i;a<t;a+=i)s+=(o[u]-o[a])*(o[a+1]+o[u+1]),u=a;return s}class Zd{static area(e){const t=e.length;let i=0;for(let s=t-1,a=0;a<t;s=a++)i+=e[s].x*e[a].y-e[a].x*e[s].y;return i*.5}static isClockWise(e){return Zd.area(e)<0}static triangulateShape(e,t){const i=[],s=[],a=[];gg(e),vg(i,e);let u=e.length;t.forEach(gg);for(let d=0;d<t.length;d++)s.push(u),u+=t[d].length,vg(i,t[d]);const c=px.triangulate(i,s);for(let d=0;d<c.length;d+=3)a.push(c.slice(d,d+3));return a}}function gg(o){const e=o.length;e>2&&o[e-1].equals(o[0])&&o.pop()}function vg(o,e){for(let t=0;t<e.length;t++)o.push(e[t].x),o.push(e[t].y)}class xu extends yi{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const a=e/2,u=t/2,c=Math.floor(i),d=Math.floor(s),h=c+1,g=d+1,m=e/c,v=t/d,y=[],M=[],E=[],S=[];for(let x=0;x<g;x++){const I=x*v-u;for(let C=0;C<h;C++){const R=C*m-a;M.push(R,-I,0),E.push(0,0,1),S.push(C/c),S.push(1-x/d)}}for(let x=0;x<d;x++)for(let I=0;I<c;I++){const C=I+h*x,R=I+h*(x+1),k=I+1+h*(x+1),F=I+1+h*x;y.push(C,R,F),y.push(R,k,F)}this.setIndex(y),this.setAttribute("position",new Hn(M,3)),this.setAttribute("normal",new Hn(E,3)),this.setAttribute("uv",new Hn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Df extends cs{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new it(16777215),this.specular=new it(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xd,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=vu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Lx extends cs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xd,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=vu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dx extends cs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ay,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ix extends cs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Jl(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function Ux(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function Nx(o){function e(s,a){return o[s]-o[a]}const t=o.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function _g(o,e,t){const i=o.length,s=new o.constructor(i);for(let a=0,u=0;u!==i;++a){const c=t[a]*e;for(let d=0;d!==e;++d)s[u++]=o[c+d]}return s}function Ev(o,e,t,i){let s=1,a=o[0];for(;a!==void 0&&a[i]===void 0;)a=o[s++];if(a===void 0)return;let u=a[i];if(u!==void 0)if(Array.isArray(u))do u=a[i],u!==void 0&&(e.push(a.time),t.push.apply(t,u)),a=o[s++];while(a!==void 0);else if(u.toArray!==void 0)do u=a[i],u!==void 0&&(e.push(a.time),u.toArray(t,t.length)),a=o[s++];while(a!==void 0);else do u=a[i],u!==void 0&&(e.push(a.time),t.push(u)),a=o[s++];while(a!==void 0)}class Su{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],a=t[i-1];e:{t:{let u;n:{i:if(!(e<s)){for(let c=i+2;;){if(s===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===c)break;if(a=s,s=t[++i],e<s)break t}u=t.length;break n}if(!(e>=a)){const c=t[1];e<c&&(i=2,a=c);for(let d=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===d)break;if(s=a,a=t[--i-1],e>=a)break t}u=i,i=0;break n}break e}for(;i<u;){const c=i+u>>>1;e<t[c]?u=c:i=c+1}if(s=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s;for(let u=0;u!==s;++u)t[u]=i[a+u];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Fx extends Su{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Om,endingEnd:Om}}intervalChanged_(e,t,i){const s=this.parameterPositions;let a=e-2,u=e+1,c=s[a],d=s[u];if(c===void 0)switch(this.getSettings_().endingStart){case km:a=e,c=2*t-i;break;case Bm:a=s.length-2,c=t+s[a]-s[a+1];break;default:a=e,c=i}if(d===void 0)switch(this.getSettings_().endingEnd){case km:u=e,d=2*i-t;break;case Bm:u=1,d=i+s[1]-s[0];break;default:u=e-1,d=t}const h=(i-t)*.5,g=this.valueSize;this._weightPrev=h/(t-c),this._weightNext=h/(d-i),this._offsetPrev=a*g,this._offsetNext=u*g}interpolate_(e,t,i,s){const a=this.resultBuffer,u=this.sampleValues,c=this.valueSize,d=e*c,h=d-c,g=this._offsetPrev,m=this._offsetNext,v=this._weightPrev,y=this._weightNext,M=(i-t)/(s-t),E=M*M,S=E*M,x=-v*S+2*v*E-v*M,I=(1+v)*S+(-1.5-2*v)*E+(-.5+v)*M+1,C=(-1-y)*S+(1.5+y)*E+.5*M,R=y*S-y*E;for(let k=0;k!==c;++k)a[k]=x*u[g+k]+I*u[h+k]+C*u[d+k]+R*u[m+k];return a}}class Ox extends Su{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,u=this.sampleValues,c=this.valueSize,d=e*c,h=d-c,g=(i-t)/(s-t),m=1-g;for(let v=0;v!==c;++v)a[v]=u[h+v]*m+u[d+v]*g;return a}}class kx extends Su{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Pi{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Jl(t,this.TimeBufferType),this.values=Jl(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Jl(e.times,Array),values:Jl(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new kx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ox(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case fu:t=this.InterpolantFactoryMethodDiscrete;break;case Pd:t=this.InterpolantFactoryMethodLinear;break;case lf:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fu;case this.InterpolantFactoryMethodLinear:return Pd;case this.InterpolantFactoryMethodSmooth:return lf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let a=0,u=s-1;for(;a!==s&&i[a]<e;)++a;for(;u!==-1&&i[u]>t;)--u;if(++u,a!==0||u!==s){a>=u&&(u=Math.max(u,1),a=u-1);const c=this.getValueSize();this.times=i.slice(a,u),this.values=this.values.slice(a*c,u*c)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let u=null;for(let c=0;c!==a;c++){const d=i[c];if(typeof d=="number"&&isNaN(d)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,d),e=!1;break}if(u!==null&&u>d){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,d,u),e=!1;break}u=d}if(s!==void 0&&Ux(s))for(let c=0,d=s.length;c!==d;++c){const h=s[c];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===lf,a=e.length-1;let u=1;for(let c=1;c<a;++c){let d=!1;const h=e[c],g=e[c+1];if(h!==g&&(c!==1||h!==e[0]))if(s)d=!0;else{const m=c*i,v=m-i,y=m+i;for(let M=0;M!==i;++M){const E=t[m+M];if(E!==t[v+M]||E!==t[y+M]){d=!0;break}}}if(d){if(c!==u){e[u]=e[c];const m=c*i,v=u*i;for(let y=0;y!==i;++y)t[v+y]=t[m+y]}++u}}if(a>0){e[u]=e[a];for(let c=a*i,d=u*i,h=0;h!==i;++h)t[d+h]=t[c+h];++u}return u!==e.length?(this.times=e.slice(0,u),this.values=t.slice(0,u*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Pi.prototype.TimeBufferType=Float32Array;Pi.prototype.ValueBufferType=Float32Array;Pi.prototype.DefaultInterpolation=Pd;class _o extends Pi{constructor(e,t,i){super(e,t,i)}}_o.prototype.ValueTypeName="bool";_o.prototype.ValueBufferType=Array;_o.prototype.DefaultInterpolation=fu;_o.prototype.InterpolantFactoryMethodLinear=void 0;_o.prototype.InterpolantFactoryMethodSmooth=void 0;class Tv extends Pi{}Tv.prototype.ValueTypeName="color";class ga extends Pi{}ga.prototype.ValueTypeName="number";class Bx extends Su{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,u=this.sampleValues,c=this.valueSize,d=(i-t)/(s-t);let h=e*c;for(let g=h+c;h!==g;h+=4)Vn.slerpFlat(a,0,u,h-c,u,h,d);return a}}class po extends Pi{InterpolantFactoryMethodLinear(e){return new Bx(this.times,this.values,this.getValueSize(),e)}}po.prototype.ValueTypeName="quaternion";po.prototype.InterpolantFactoryMethodSmooth=void 0;class yo extends Pi{constructor(e,t,i){super(e,t,i)}}yo.prototype.ValueTypeName="string";yo.prototype.ValueBufferType=Array;yo.prototype.DefaultInterpolation=fu;yo.prototype.InterpolantFactoryMethodLinear=void 0;yo.prototype.InterpolantFactoryMethodSmooth=void 0;class va extends Pi{}va.prototype.ValueTypeName="vector";class zx{constructor(e="",t=-1,i=[],s=oy){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Ur(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let u=0,c=i.length;u!==c;++u)t.push(Hx(i[u]).scale(s));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,u=i.length;a!==u;++a)t.push(Pi.toJSON(i[a]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const a=t.length,u=[];for(let c=0;c<a;c++){let d=[],h=[];d.push((c+a-1)%a,c,(c+1)%a),h.push(0,1,0);const g=Nx(d);d=_g(d,1,g),h=_g(h,1,g),!s&&d[0]===0&&(d.push(a),h.push(h[0])),u.push(new ga(".morphTargetInfluences["+t[c].name+"]",d,h).scale(1/i))}return new this(e,-1,u)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},a=/^([\w-]*?)([\d]+)$/;for(let c=0,d=e.length;c<d;c++){const h=e[c],g=h.name.match(a);if(g&&g.length>1){const m=g[1];let v=s[m];v||(s[m]=v=[]),v.push(h)}}const u=[];for(const c in s)u.push(this.CreateFromMorphTargetSequence(c,s[c],t,i));return u}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(m,v,y,M,E){if(y.length!==0){const S=[],x=[];Ev(y,S,x,M),S.length!==0&&E.push(new m(v,S,x))}},s=[],a=e.name||"default",u=e.fps||30,c=e.blendMode;let d=e.length||-1;const h=e.hierarchy||[];for(let m=0;m<h.length;m++){const v=h[m].keys;if(!(!v||v.length===0))if(v[0].morphTargets){const y={};let M;for(M=0;M<v.length;M++)if(v[M].morphTargets)for(let E=0;E<v[M].morphTargets.length;E++)y[v[M].morphTargets[E]]=-1;for(const E in y){const S=[],x=[];for(let I=0;I!==v[M].morphTargets.length;++I){const C=v[M];S.push(C.time),x.push(C.morphTarget===E?1:0)}s.push(new ga(".morphTargetInfluence["+E+"]",S,x))}d=y.length*u}else{const y=".bones["+t[m].name+"]";i(va,y+".position",v,"pos",s),i(po,y+".quaternion",v,"rot",s),i(va,y+".scale",v,"scl",s)}}return s.length===0?null:new this(a,d,s,c)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Vx(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ga;case"vector":case"vector2":case"vector3":case"vector4":return va;case"color":return Tv;case"quaternion":return po;case"bool":case"boolean":return _o;case"string":return yo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function Hx(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Vx(o.type);if(o.times===void 0){const t=[],i=[];Ev(o.keys,t,i,"value"),o.times=t,o.values=i}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const gu={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Gx{constructor(e,t,i){const s=this;let a=!1,u=0,c=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(g){c++,a===!1&&s.onStart!==void 0&&s.onStart(g,u,c),a=!0},this.itemEnd=function(g){u++,s.onProgress!==void 0&&s.onProgress(g,u,c),u===c&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(g){s.onError!==void 0&&s.onError(g)},this.resolveURL=function(g){return d?d(g):g},this.setURLModifier=function(g){return d=g,this},this.addHandler=function(g,m){return h.push(g,m),this},this.removeHandler=function(g){const m=h.indexOf(g);return m!==-1&&h.splice(m,2),this},this.getHandler=function(g){for(let m=0,v=h.length;m<v;m+=2){const y=h[m],M=h[m+1];if(y.global&&(y.lastIndex=0),y.test(g))return M}return null}}}const Wx=new Gx;class us{constructor(e){this.manager=e!==void 0?e:Wx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,a){i.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}us.DEFAULT_MATERIAL_NAME="__DEFAULT";const Yi={};class Xx extends Error{constructor(e,t){super(e),this.response=t}}class jx extends us{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=gu.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Yi[e]!==void 0){Yi[e].push({onLoad:t,onProgress:i,onError:s});return}Yi[e]=[],Yi[e].push({onLoad:t,onProgress:i,onError:s});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),c=this.mimeType,d=this.responseType;fetch(u).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const g=Yi[e],m=h.body.getReader(),v=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),y=v?parseInt(v):0,M=y!==0;let E=0;const S=new ReadableStream({start(x){I();function I(){m.read().then(({done:C,value:R})=>{if(C)x.close();else{E+=R.byteLength;const k=new ProgressEvent("progress",{lengthComputable:M,loaded:E,total:y});for(let F=0,N=g.length;F<N;F++){const G=g[F];G.onProgress&&G.onProgress(k)}x.enqueue(R),I()}},C=>{x.error(C)})}}});return new Response(S)}else throw new Xx(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(d){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(g=>new DOMParser().parseFromString(g,c));case"json":return h.json();default:if(c===void 0)return h.text();{const m=/charset="?([^;"\s]*)"?/i.exec(c),v=m&&m[1]?m[1].toLowerCase():void 0,y=new TextDecoder(v);return h.arrayBuffer().then(M=>y.decode(M))}}}).then(h=>{gu.add(e,h);const g=Yi[e];delete Yi[e];for(let m=0,v=g.length;m<v;m++){const y=g[m];y.onLoad&&y.onLoad(h)}}).catch(h=>{const g=Yi[e];if(g===void 0)throw this.manager.itemError(e),h;delete Yi[e];for(let m=0,v=g.length;m<v;m++){const y=g[m];y.onError&&y.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Yx extends us{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,u=gu.get(e);if(u!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(u),a.manager.itemEnd(e)},0),u;const c=da("img");function d(){g(),gu.add(e,this),t&&t(this),a.manager.itemEnd(e)}function h(m){g(),s&&s(m),a.manager.itemError(e),a.manager.itemEnd(e)}function g(){c.removeEventListener("load",d,!1),c.removeEventListener("error",h,!1)}return c.addEventListener("load",d,!1),c.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),a.manager.itemStart(e),c.src=e,c}}class qx extends us{constructor(e){super(e)}load(e,t,i,s){const a=new mn,u=new Yx(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(c){a.image=c,a.needsUpdate=!0,t!==void 0&&t(a)},i,s),a}}class Mu extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const If=new qe,yg=new j,xg=new j;class Qd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kd,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;yg.setFromMatrixPosition(e.matrixWorld),t.position.copy(yg),xg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xg),t.updateMatrixWorld(),If.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(If),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(If)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class $x extends Qd{constructor(){super(new In(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=fo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(i!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Kx extends Mu{constructor(e,t,i=0,s=Math.PI/3,a=0,u=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.distance=i,this.angle=s,this.penumbra=a,this.decay=u,this.map=null,this.shadow=new $x}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Sg=new qe,ra=new j,Uf=new j;class Zx extends Qd{constructor(){super(new In(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Mt(4,2),this._viewportCount=6,this._viewports=[new yt(2,1,1,1),new yt(0,1,1,1),new yt(3,1,1,1),new yt(1,1,1,1),new yt(3,0,1,1),new yt(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),ra.setFromMatrixPosition(e.matrixWorld),i.position.copy(ra),Uf.copy(i.position),Uf.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Uf),i.updateMatrixWorld(),s.makeTranslation(-ra.x,-ra.y,-ra.z),Sg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sg)}}class Ud extends Mu{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Zx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class wv extends gv{constructor(e=-1,t=1,i=1,s=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-e,u=i+e,c=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,u=a+h*this.view.width,c-=g*this.view.offsetY,d=c-g*this.view.height}this.projectionMatrix.makeOrthographic(a,u,c,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Qx extends Qd{constructor(){super(new wv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jx extends Mu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new Qx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Av extends Mu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class eS{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class tS extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const Jd="\\[\\]\\.:\\/",nS=new RegExp("["+Jd+"]","g"),eh="[^"+Jd+"]",iS="[^"+Jd.replace("\\.","")+"]",rS=/((?:WC+[\/:])*)/.source.replace("WC",eh),sS=/(WCOD+)?/.source.replace("WCOD",iS),oS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eh),aS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eh),lS=new RegExp("^"+rS+sS+oS+aS+"$"),uS=["material","materials","bones","map"];class cS{constructor(e,t,i){const s=i||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Rt{constructor(e,t,i){this.path=t,this.parsedPath=i||Rt.parseTrackName(t),this.node=Rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Rt.Composite(e,t,i):new Rt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(nS,"")}static parseTrackName(e){const t=lS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const a=i.nodeName.substring(s+1);uS.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(a){for(let u=0;u<a.length;u++){const c=a[u];if(c.name===t||c.uuid===t)return c;const d=i(c.children);if(d)return d}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let a=t.propertyIndex;if(e||(e=Rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let g=0;g<e.length;g++)if(e[g].name===h){h=g;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const u=e[s];if(u===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?c=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}d=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=a}else u.fromArray!==void 0&&u.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(d=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=s;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Rt.Composite=cS;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function Mg(o,e,t,i){const s=fS(i);switch(t){case ev:return o*e;case nv:return o*e;case iv:return o*e*2;case rv:return o*e/s.components*s.byteLength;case Hd:return o*e/s.components*s.byteLength;case sv:return o*e*2/s.components*s.byteLength;case Gd:return o*e*2/s.components*s.byteLength;case tv:return o*e*3/s.components*s.byteLength;case si:return o*e*4/s.components*s.byteLength;case Wd:return o*e*4/s.components*s.byteLength;case ru:case su:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case ou:case au:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case sd:case ad:return Math.max(o,16)*Math.max(e,8)/4;case rd:case od:return Math.max(o,8)*Math.max(e,8)/2;case ld:case ud:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case cd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case fd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case dd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case hd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case pd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case md:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case gd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case vd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case _d:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case yd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case xd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Sd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Md:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Ed:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Td:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case lu:case wd:case Ad:return Math.ceil(o/4)*Math.ceil(e/4)*16;case ov:case Rd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Cd:case bd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fS(o){switch(o){case Ji:case Zg:return{byteLength:1,components:1};case fa:case Qg:case ya:return{byteLength:2,components:1};case zd:case Vd:return{byteLength:2,components:4};case os:case Bd:case Ci:return{byteLength:4,components:1};case Jg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kd);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Rv(){let o=null,e=!1,t=null,i=null;function s(a,u){t(a,u),i=o.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(s),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function dS(o){const e=new WeakMap;function t(c,d){const h=c.array,g=c.usage,m=h.byteLength,v=o.createBuffer();o.bindBuffer(d,v),o.bufferData(d,h,g),c.onUploadCallback();let y;if(h instanceof Float32Array)y=o.FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=o.SHORT;else if(h instanceof Uint32Array)y=o.UNSIGNED_INT;else if(h instanceof Int32Array)y=o.INT;else if(h instanceof Int8Array)y=o.BYTE;else if(h instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function i(c,d,h){const g=d.array,m=d.updateRanges;if(o.bindBuffer(h,c),m.length===0)o.bufferSubData(h,0,g);else{m.sort((y,M)=>y.start-M.start);let v=0;for(let y=1;y<m.length;y++){const M=m[v],E=m[y];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++v,m[v]=E)}m.length=v+1;for(let y=0,M=m.length;y<M;y++){const E=m[y];o.bufferSubData(h,E.start*g.BYTES_PER_ELEMENT,g,E.start,E.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);d&&(o.deleteBuffer(d.buffer),e.delete(c))}function u(c,d){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const g=e.get(c);(!g||g.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,c,d),h.version=c.version}}return{get:s,remove:a,update:u}}var hS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pS=`#ifdef USE_ALPHAHASH
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
#endif`,mS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_S=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yS=`#ifdef USE_AOMAP
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
#endif`,xS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SS=`#ifdef USE_BATCHING
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
#endif`,MS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ES=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,AS=`#ifdef USE_IRIDESCENCE
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
#endif`,RS=`#ifdef USE_BUMPMAP
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
#endif`,CS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,LS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,DS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,IS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,US=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,NS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,FS=`#define PI 3.141592653589793
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
} // validated`,OS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kS=`vec3 transformedNormal = objectNormal;
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
#endif`,BS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,VS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,GS="gl_FragColor = linearToOutputTexel( gl_FragColor );",WS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,XS=`#ifdef USE_ENVMAP
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
#endif`,jS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,YS=`#ifdef USE_ENVMAP
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
#endif`,qS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$S=`#ifdef USE_ENVMAP
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
#endif`,KS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,JS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eM=`#ifdef USE_GRADIENTMAP
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
}`,tM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rM=`uniform bool receiveShadow;
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
#endif`,sM=`#ifdef USE_ENVMAP
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
#endif`,oM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cM=`PhysicalMaterial material;
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
#endif`,fM=`struct PhysicalMaterial {
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
}`,dM=`
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
#endif`,hM=`#if defined( RE_IndirectDiffuse )
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
#endif`,pM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_M=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,SM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,MM=`#if defined( USE_POINTS_UV )
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
#endif`,EM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CM=`#ifdef USE_MORPHTARGETS
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
#endif`,bM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,LM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,DM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NM=`#ifdef USE_NORMALMAP
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
#endif`,FM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,BM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,VM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,HM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,$M=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ZM=`float getShadowMask() {
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
}`,QM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,JM=`#ifdef USE_SKINNING
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
#endif`,eE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tE=`#ifdef USE_SKINNING
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
#endif`,nE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,oE=`#ifdef USE_TRANSMISSION
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
#endif`,aE=`#ifdef USE_TRANSMISSION
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
#endif`,lE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hE=`uniform sampler2D t2D;
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
}`,pE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_E=`#include <common>
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
}`,yE=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xE=`#define DISTANCE
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
}`,SE=`#define DISTANCE
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
}`,ME=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,EE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TE=`uniform float scale;
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
}`,wE=`uniform vec3 diffuse;
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
}`,AE=`#include <common>
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
}`,RE=`uniform vec3 diffuse;
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
}`,CE=`#define LAMBERT
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
}`,bE=`#define LAMBERT
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
}`,PE=`#define MATCAP
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
}`,LE=`#define MATCAP
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
}`,DE=`#define NORMAL
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
}`,IE=`#define NORMAL
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
}`,UE=`#define PHONG
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
}`,NE=`#define PHONG
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
}`,FE=`#define STANDARD
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
}`,OE=`#define STANDARD
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
}`,kE=`#define TOON
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
}`,BE=`#define TOON
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
}`,zE=`uniform float size;
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
}`,VE=`uniform vec3 diffuse;
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
}`,HE=`#include <common>
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
}`,GE=`uniform vec3 color;
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
}`,WE=`uniform float rotation;
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
}`,XE=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:hS,alphahash_pars_fragment:pS,alphamap_fragment:mS,alphamap_pars_fragment:gS,alphatest_fragment:vS,alphatest_pars_fragment:_S,aomap_fragment:yS,aomap_pars_fragment:xS,batching_pars_vertex:SS,batching_vertex:MS,begin_vertex:ES,beginnormal_vertex:TS,bsdfs:wS,iridescence_fragment:AS,bumpmap_pars_fragment:RS,clipping_planes_fragment:CS,clipping_planes_pars_fragment:bS,clipping_planes_pars_vertex:PS,clipping_planes_vertex:LS,color_fragment:DS,color_pars_fragment:IS,color_pars_vertex:US,color_vertex:NS,common:FS,cube_uv_reflection_fragment:OS,defaultnormal_vertex:kS,displacementmap_pars_vertex:BS,displacementmap_vertex:zS,emissivemap_fragment:VS,emissivemap_pars_fragment:HS,colorspace_fragment:GS,colorspace_pars_fragment:WS,envmap_fragment:XS,envmap_common_pars_fragment:jS,envmap_pars_fragment:YS,envmap_pars_vertex:qS,envmap_physical_pars_fragment:sM,envmap_vertex:$S,fog_vertex:KS,fog_pars_vertex:ZS,fog_fragment:QS,fog_pars_fragment:JS,gradientmap_pars_fragment:eM,lightmap_pars_fragment:tM,lights_lambert_fragment:nM,lights_lambert_pars_fragment:iM,lights_pars_begin:rM,lights_toon_fragment:oM,lights_toon_pars_fragment:aM,lights_phong_fragment:lM,lights_phong_pars_fragment:uM,lights_physical_fragment:cM,lights_physical_pars_fragment:fM,lights_fragment_begin:dM,lights_fragment_maps:hM,lights_fragment_end:pM,logdepthbuf_fragment:mM,logdepthbuf_pars_fragment:gM,logdepthbuf_pars_vertex:vM,logdepthbuf_vertex:_M,map_fragment:yM,map_pars_fragment:xM,map_particle_fragment:SM,map_particle_pars_fragment:MM,metalnessmap_fragment:EM,metalnessmap_pars_fragment:TM,morphinstance_vertex:wM,morphcolor_vertex:AM,morphnormal_vertex:RM,morphtarget_pars_vertex:CM,morphtarget_vertex:bM,normal_fragment_begin:PM,normal_fragment_maps:LM,normal_pars_fragment:DM,normal_pars_vertex:IM,normal_vertex:UM,normalmap_pars_fragment:NM,clearcoat_normal_fragment_begin:FM,clearcoat_normal_fragment_maps:OM,clearcoat_pars_fragment:kM,iridescence_pars_fragment:BM,opaque_fragment:zM,packing:VM,premultiplied_alpha_fragment:HM,project_vertex:GM,dithering_fragment:WM,dithering_pars_fragment:XM,roughnessmap_fragment:jM,roughnessmap_pars_fragment:YM,shadowmap_pars_fragment:qM,shadowmap_pars_vertex:$M,shadowmap_vertex:KM,shadowmask_pars_fragment:ZM,skinbase_vertex:QM,skinning_pars_vertex:JM,skinning_vertex:eE,skinnormal_vertex:tE,specularmap_fragment:nE,specularmap_pars_fragment:iE,tonemapping_fragment:rE,tonemapping_pars_fragment:sE,transmission_fragment:oE,transmission_pars_fragment:aE,uv_pars_fragment:lE,uv_pars_vertex:uE,uv_vertex:cE,worldpos_vertex:fE,background_vert:dE,background_frag:hE,backgroundCube_vert:pE,backgroundCube_frag:mE,cube_vert:gE,cube_frag:vE,depth_vert:_E,depth_frag:yE,distanceRGBA_vert:xE,distanceRGBA_frag:SE,equirect_vert:ME,equirect_frag:EE,linedashed_vert:TE,linedashed_frag:wE,meshbasic_vert:AE,meshbasic_frag:RE,meshlambert_vert:CE,meshlambert_frag:bE,meshmatcap_vert:PE,meshmatcap_frag:LE,meshnormal_vert:DE,meshnormal_frag:IE,meshphong_vert:UE,meshphong_frag:NE,meshphysical_vert:FE,meshphysical_frag:OE,meshtoon_vert:kE,meshtoon_frag:BE,points_vert:zE,points_frag:VE,shadow_vert:HE,shadow_frag:GE,sprite_vert:WE,sprite_frag:XE},Ce={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Ai={basic:{uniforms:Pn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Pn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new it(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Pn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Pn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Pn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new it(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Pn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Pn([Ce.points,Ce.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Pn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Pn([Ce.common,Ce.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Pn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Pn([Ce.sprite,Ce.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:Pn([Ce.common,Ce.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:Pn([Ce.lights,Ce.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Ai.physical={uniforms:Pn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const eu={r:0,b:0,g:0},Jr=new fn,jE=new qe;function YE(o,e,t,i,s,a,u){const c=new it(0);let d=a===!0?0:1,h,g,m=null,v=0,y=null;function M(C){let R=C.isScene===!0?C.background:null;return R&&R.isTexture&&(R=(C.backgroundBlurriness>0?t:e).get(R)),R}function E(C){let R=!1;const k=M(C);k===null?x(c,d):k&&k.isColor&&(x(k,1),R=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,u):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||R)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(C,R){const k=M(R);k&&(k.isCubeTexture||k.mapping===_u)?(g===void 0&&(g=new _i(new xa(1,1,1),new Ir({name:"BackgroundCubeMaterial",uniforms:ho(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,N,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(g)),Jr.copy(R.backgroundRotation),Jr.x*=-1,Jr.y*=-1,Jr.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(Jr.y*=-1,Jr.z*=-1),g.material.uniforms.envMap.value=k,g.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(jE.makeRotationFromEuler(Jr)),g.material.toneMapped=ut.getTransfer(k.colorSpace)!==Dt,(m!==k||v!==k.version||y!==o.toneMapping)&&(g.material.needsUpdate=!0,m=k,v=k.version,y=o.toneMapping),g.layers.enableAll(),C.unshift(g,g.geometry,g.material,0,0,null)):k&&k.isTexture&&(h===void 0&&(h=new _i(new xu(2,2),new Ir({name:"BackgroundMaterial",uniforms:ho(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Dr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=k,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.toneMapped=ut.getTransfer(k.colorSpace)!==Dt,k.matrixAutoUpdate===!0&&k.updateMatrix(),h.material.uniforms.uvTransform.value.copy(k.matrix),(m!==k||v!==k.version||y!==o.toneMapping)&&(h.material.needsUpdate=!0,m=k,v=k.version,y=o.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null))}function x(C,R){C.getRGB(eu,mv(o)),i.buffers.color.setClear(eu.r,eu.g,eu.b,R,u)}function I(){g!==void 0&&(g.geometry.dispose(),g.material.dispose()),h!==void 0&&(h.geometry.dispose(),h.material.dispose())}return{getClearColor:function(){return c},setClearColor:function(C,R=1){c.set(C),d=R,x(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(C){d=C,x(c,d)},render:E,addToRenderList:S,dispose:I}}function qE(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},s=v(null);let a=s,u=!1;function c(b,O,ae,J,ce){let de=!1;const se=m(J,ae,O);a!==se&&(a=se,h(a.object)),de=y(b,J,ae,ce),de&&M(b,J,ae,ce),ce!==null&&e.update(ce,o.ELEMENT_ARRAY_BUFFER),(de||u)&&(u=!1,R(b,O,ae,J),ce!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function d(){return o.createVertexArray()}function h(b){return o.bindVertexArray(b)}function g(b){return o.deleteVertexArray(b)}function m(b,O,ae){const J=ae.wireframe===!0;let ce=i[b.id];ce===void 0&&(ce={},i[b.id]=ce);let de=ce[O.id];de===void 0&&(de={},ce[O.id]=de);let se=de[J];return se===void 0&&(se=v(d()),de[J]=se),se}function v(b){const O=[],ae=[],J=[];for(let ce=0;ce<t;ce++)O[ce]=0,ae[ce]=0,J[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:ae,attributeDivisors:J,object:b,attributes:{},index:null}}function y(b,O,ae,J){const ce=a.attributes,de=O.attributes;let se=0;const le=ae.getAttributes();for(const V in le)if(le[V].location>=0){const re=ce[V];let U=de[V];if(U===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(U=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(U=b.instanceColor)),re===void 0||re.attribute!==U||U&&re.data!==U.data)return!0;se++}return a.attributesNum!==se||a.index!==J}function M(b,O,ae,J){const ce={},de=O.attributes;let se=0;const le=ae.getAttributes();for(const V in le)if(le[V].location>=0){let re=de[V];re===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(re=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(re=b.instanceColor));const U={};U.attribute=re,re&&re.data&&(U.data=re.data),ce[V]=U,se++}a.attributes=ce,a.attributesNum=se,a.index=J}function E(){const b=a.newAttributes;for(let O=0,ae=b.length;O<ae;O++)b[O]=0}function S(b){x(b,0)}function x(b,O){const ae=a.newAttributes,J=a.enabledAttributes,ce=a.attributeDivisors;ae[b]=1,J[b]===0&&(o.enableVertexAttribArray(b),J[b]=1),ce[b]!==O&&(o.vertexAttribDivisor(b,O),ce[b]=O)}function I(){const b=a.newAttributes,O=a.enabledAttributes;for(let ae=0,J=O.length;ae<J;ae++)O[ae]!==b[ae]&&(o.disableVertexAttribArray(ae),O[ae]=0)}function C(b,O,ae,J,ce,de,se){se===!0?o.vertexAttribIPointer(b,O,ae,ce,de):o.vertexAttribPointer(b,O,ae,J,ce,de)}function R(b,O,ae,J){E();const ce=J.attributes,de=ae.getAttributes(),se=O.defaultAttributeValues;for(const le in de){const V=de[le];if(V.location>=0){let oe=ce[le];if(oe===void 0&&(le==="instanceMatrix"&&b.instanceMatrix&&(oe=b.instanceMatrix),le==="instanceColor"&&b.instanceColor&&(oe=b.instanceColor)),oe!==void 0){const re=oe.normalized,U=oe.itemSize,ne=e.get(oe);if(ne===void 0)continue;const be=ne.buffer,Z=ne.type,ue=ne.bytesPerElement,ye=Z===o.INT||Z===o.UNSIGNED_INT||oe.gpuType===Bd;if(oe.isInterleavedBufferAttribute){const ge=oe.data,Te=ge.stride,Le=oe.offset;if(ge.isInstancedInterleavedBuffer){for(let $e=0;$e<V.locationSize;$e++)x(V.location+$e,ge.meshPerAttribute);b.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let $e=0;$e<V.locationSize;$e++)S(V.location+$e);o.bindBuffer(o.ARRAY_BUFFER,be);for(let $e=0;$e<V.locationSize;$e++)C(V.location+$e,U/V.locationSize,Z,re,Te*ue,(Le+U/V.locationSize*$e)*ue,ye)}else{if(oe.isInstancedBufferAttribute){for(let ge=0;ge<V.locationSize;ge++)x(V.location+ge,oe.meshPerAttribute);b.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ge=0;ge<V.locationSize;ge++)S(V.location+ge);o.bindBuffer(o.ARRAY_BUFFER,be);for(let ge=0;ge<V.locationSize;ge++)C(V.location+ge,U/V.locationSize,Z,re,U*ue,U/V.locationSize*ge*ue,ye)}}else if(se!==void 0){const re=se[le];if(re!==void 0)switch(re.length){case 2:o.vertexAttrib2fv(V.location,re);break;case 3:o.vertexAttrib3fv(V.location,re);break;case 4:o.vertexAttrib4fv(V.location,re);break;default:o.vertexAttrib1fv(V.location,re)}}}}I()}function k(){G();for(const b in i){const O=i[b];for(const ae in O){const J=O[ae];for(const ce in J)g(J[ce].object),delete J[ce];delete O[ae]}delete i[b]}}function F(b){if(i[b.id]===void 0)return;const O=i[b.id];for(const ae in O){const J=O[ae];for(const ce in J)g(J[ce].object),delete J[ce];delete O[ae]}delete i[b.id]}function N(b){for(const O in i){const ae=i[O];if(ae[b.id]===void 0)continue;const J=ae[b.id];for(const ce in J)g(J[ce].object),delete J[ce];delete ae[b.id]}}function G(){P(),u=!0,a!==s&&(a=s,h(a.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:G,resetDefaultState:P,dispose:k,releaseStatesOfGeometry:F,releaseStatesOfProgram:N,initAttributes:E,enableAttribute:S,disableUnusedAttributes:I}}function $E(o,e,t){let i;function s(h){i=h}function a(h,g){o.drawArrays(i,h,g),t.update(g,i,1)}function u(h,g,m){m!==0&&(o.drawArraysInstanced(i,h,g,m),t.update(g,i,m))}function c(h,g,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,g,0,m);let y=0;for(let M=0;M<m;M++)y+=g[M];t.update(y,i,1)}function d(h,g,m,v){if(m===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<h.length;M++)u(h[M],g[M],v[M]);else{y.multiDrawArraysInstancedWEBGL(i,h,0,g,0,v,0,m);let M=0;for(let E=0;E<m;E++)M+=g[E]*v[E];t.update(M,i,1)}}this.setMode=s,this.render=a,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function KE(o,e,t,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");s=o.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(N){return!(N!==si&&i.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(N){const G=N===ya&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Ji&&i.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Ci&&!G)}function d(N){if(N==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const g=d(h);g!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const m=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),I=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),C=o.getParameter(o.MAX_VARYING_VECTORS),R=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),k=M>0,F=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:m,reverseDepthBuffer:v,maxTextures:y,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:I,maxVaryings:C,maxFragmentUniforms:R,vertexTextures:k,maxSamples:F}}function ZE(o){const e=this;let t=null,i=0,s=!1,a=!1;const u=new ts,c=new at,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(m,v){const y=m.length!==0||v||i!==0||s;return s=v,i=m.length,y},this.beginShadows=function(){a=!0,g(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(m,v){t=g(m,v,0)},this.setState=function(m,v,y){const M=m.clippingPlanes,E=m.clipIntersection,S=m.clipShadows,x=o.get(m);if(!s||M===null||M.length===0||a&&!S)a?g(null):h();else{const I=a?0:i,C=I*4;let R=x.clippingState||null;d.value=R,R=g(M,v,C,y);for(let k=0;k!==C;++k)R[k]=t[k];x.clippingState=R,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=I}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function g(m,v,y,M){const E=m!==null?m.length:0;let S=null;if(E!==0){if(S=d.value,M!==!0||S===null){const x=y+E*4,I=v.matrixWorldInverse;c.getNormalMatrix(I),(S===null||S.length<x)&&(S=new Float32Array(x));for(let C=0,R=y;C!==E;++C,R+=4)u.copy(m[C]).applyMatrix4(I,c),u.normal.toArray(S,R),S[R+3]=u.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}function QE(o){let e=new WeakMap;function t(u,c){return c===cu?u.mapping=oo:c===nd&&(u.mapping=ao),u}function i(u){if(u&&u.isTexture){const c=u.mapping;if(c===cu||c===nd)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const h=new rx(d.height);return h.fromEquirectangularTexture(o,u),e.set(u,h),u.addEventListener("dispose",s),t(h.texture,u.mapping)}else return null}}return u}function s(u){const c=u.target;c.removeEventListener("dispose",s);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const eo=4,Eg=[.125,.215,.35,.446,.526,.582],rs=20,Nf=new wv,Tg=new it;let Ff=null,Of=0,kf=0,Bf=!1;const ns=(1+Math.sqrt(5))/2,qs=1/ns,wg=[new j(-ns,qs,0),new j(ns,qs,0),new j(-qs,0,ns),new j(qs,0,ns),new j(0,ns,-qs),new j(0,ns,qs),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)];class Ag{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Ff=this._renderer.getRenderTarget(),Of=this._renderer.getActiveCubeFace(),kf=this._renderer.getActiveMipmapLevel(),Bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ff,Of,kf),this._renderer.xr.enabled=Bf,e.scissorTest=!1,tu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===oo||e.mapping===ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ff=this._renderer.getRenderTarget(),Of=this._renderer.getActiveCubeFace(),kf=this._renderer.getActiveMipmapLevel(),Bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ri,minFilter:Ri,generateMipmaps:!1,type:ya,format:si,colorSpace:co,depthBuffer:!1},s=Rg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rg(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=JE(a)),this._blurMaterial=eT(a,e,t)}return s}_compileMaterial(e){const t=new _i(this._lodPlanes[0],e);this._renderer.compile(t,Nf)}_sceneToCubeUV(e,t,i,s){const c=new In(90,1,t,i),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],g=this._renderer,m=g.autoClear,v=g.toneMapping;g.getClearColor(Tg),g.toneMapping=Lr,g.autoClear=!1;const y=new hv({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),M=new _i(new xa,y);let E=!1;const S=e.background;S?S.isColor&&(y.color.copy(S),e.background=null,E=!0):(y.color.copy(Tg),E=!0);for(let x=0;x<6;x++){const I=x%3;I===0?(c.up.set(0,d[x],0),c.lookAt(h[x],0,0)):I===1?(c.up.set(0,0,d[x]),c.lookAt(0,h[x],0)):(c.up.set(0,d[x],0),c.lookAt(0,0,h[x]));const C=this._cubeSize;tu(s,I*C,x>2?C:0,C,C),g.setRenderTarget(s),E&&g.render(M,c),g.render(e,c)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=v,g.autoClear=m,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===oo||e.mapping===ao;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cg());const a=s?this._cubemapMaterial:this._equirectMaterial,u=new _i(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const d=this._cubeSize;tu(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(u,Nf)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const u=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=wg[(s-a-1)%wg.length];this._blur(e,a-1,a,u,c)}t.autoClear=i}_blur(e,t,i,s,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,i,s,"latitudinal",a),this._halfBlur(u,e,i,i,s,"longitudinal",a)}_halfBlur(e,t,i,s,a,u,c){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,m=new _i(this._lodPlanes[s],h),v=h.uniforms,y=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*rs-1),E=a/M,S=isFinite(a)?1+Math.floor(g*E):rs;S>rs&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${rs}`);const x=[];let I=0;for(let N=0;N<rs;++N){const G=N/E,P=Math.exp(-G*G/2);x.push(P),N===0?I+=P:N<S&&(I+=2*P)}for(let N=0;N<x.length;N++)x[N]=x[N]/I;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=u==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:C}=this;v.dTheta.value=M,v.mipInt.value=C-i;const R=this._sizeLods[s],k=3*R*(s>C-eo?s-C+eo:0),F=4*(this._cubeSize-R);tu(t,k,F,3*R,2*R),d.setRenderTarget(t),d.render(m,Nf)}}function JE(o){const e=[],t=[],i=[];let s=o;const a=o-eo+1+Eg.length;for(let u=0;u<a;u++){const c=Math.pow(2,s);t.push(c);let d=1/c;u>o-eo?d=Eg[u-o+eo-1]:u===0&&(d=0),i.push(d);const h=1/(c-2),g=-h,m=1+h,v=[g,g,m,g,m,m,g,g,m,m,g,m],y=6,M=6,E=3,S=2,x=1,I=new Float32Array(E*M*y),C=new Float32Array(S*M*y),R=new Float32Array(x*M*y);for(let F=0;F<y;F++){const N=F%3*2/3-1,G=F>2?0:-1,P=[N,G,0,N+2/3,G,0,N+2/3,G+1,0,N,G,0,N+2/3,G+1,0,N,G+1,0];I.set(P,E*M*F),C.set(v,S*M*F);const b=[F,F,F,F,F,F];R.set(b,x*M*F)}const k=new yi;k.setAttribute("position",new bi(I,E)),k.setAttribute("uv",new bi(C,S)),k.setAttribute("faceIndex",new bi(R,x)),e.push(k),s>eo&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Rg(o,e,t){const i=new as(o,e,t);return i.texture.mapping=_u,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function tu(o,e,t,i,s){o.viewport.set(e,t,i,s),o.scissor.set(e,t,i,s)}function eT(o,e,t){const i=new Float32Array(rs),s=new j(0,1,0);return new Ir({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:th(),fragmentShader:`

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
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function Cg(){return new Ir({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:th(),fragmentShader:`

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
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function bg(){return new Ir({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function th(){return`

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
	`}function tT(o){let e=new WeakMap,t=null;function i(c){if(c&&c.isTexture){const d=c.mapping,h=d===cu||d===nd,g=d===oo||d===ao;if(h||g){let m=e.get(c);const v=m!==void 0?m.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==v)return t===null&&(t=new Ag(o)),m=h?t.fromEquirectangular(c,m):t.fromCubemap(c,m),m.texture.pmremVersion=c.pmremVersion,e.set(c,m),m.texture;if(m!==void 0)return m.texture;{const y=c.image;return h&&y&&y.height>0||g&&y&&s(y)?(t===null&&(t=new Ag(o)),m=h?t.fromEquirectangular(c):t.fromCubemap(c),m.texture.pmremVersion=c.pmremVersion,e.set(c,m),c.addEventListener("dispose",a),m.texture):null}}}return c}function s(c){let d=0;const h=6;for(let g=0;g<h;g++)c[g]!==void 0&&d++;return d===h}function a(c){const d=c.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:u}}function nT(o){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=o.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Zs("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function iT(o,e,t,i){const s={},a=new WeakMap;function u(m){const v=m.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);v.removeEventListener("dispose",u),delete s[v.id];const y=a.get(v);y&&(e.remove(y),a.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(m,v){return s[v.id]===!0||(v.addEventListener("dispose",u),s[v.id]=!0,t.memory.geometries++),v}function d(m){const v=m.attributes;for(const y in v)e.update(v[y],o.ARRAY_BUFFER)}function h(m){const v=[],y=m.index,M=m.attributes.position;let E=0;if(y!==null){const I=y.array;E=y.version;for(let C=0,R=I.length;C<R;C+=3){const k=I[C+0],F=I[C+1],N=I[C+2];v.push(k,F,F,N,N,k)}}else if(M!==void 0){const I=M.array;E=M.version;for(let C=0,R=I.length/3-1;C<R;C+=3){const k=C+0,F=C+1,N=C+2;v.push(k,F,F,N,N,k)}}else return;const S=new(lv(v)?pv:qd)(v,1);S.version=E;const x=a.get(m);x&&e.remove(x),a.set(m,S)}function g(m){const v=a.get(m);if(v){const y=m.index;y!==null&&v.version<y.version&&h(m)}else h(m);return a.get(m)}return{get:c,update:d,getWireframeAttribute:g}}function rT(o,e,t){let i;function s(v){i=v}let a,u;function c(v){a=v.type,u=v.bytesPerElement}function d(v,y){o.drawElements(i,y,a,v*u),t.update(y,i,1)}function h(v,y,M){M!==0&&(o.drawElementsInstanced(i,y,a,v*u,M),t.update(y,i,M))}function g(v,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,y,0,a,v,0,M);let S=0;for(let x=0;x<M;x++)S+=y[x];t.update(S,i,1)}function m(v,y,M,E){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)h(v[x]/u,y[x],E[x]);else{S.multiDrawElementsInstancedWEBGL(i,y,0,a,v,0,E,0,M);let x=0;for(let I=0;I<M;I++)x+=y[I]*E[I];t.update(x,i,1)}}this.setMode=s,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=g,this.renderMultiDrawInstances=m}function sT(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,u,c){switch(t.calls++,u){case o.TRIANGLES:t.triangles+=c*(a/3);break;case o.LINES:t.lines+=c*(a/2);break;case o.LINE_STRIP:t.lines+=c*(a-1);break;case o.LINE_LOOP:t.lines+=c*a;break;case o.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function oT(o,e,t){const i=new WeakMap,s=new yt;function a(u,c,d){const h=u.morphTargetInfluences,g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=g!==void 0?g.length:0;let v=i.get(c);if(v===void 0||v.count!==m){let b=function(){G.dispose(),i.delete(c),c.removeEventListener("dispose",b)};var y=b;v!==void 0&&v.texture.dispose();const M=c.morphAttributes.position!==void 0,E=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],I=c.morphAttributes.normal||[],C=c.morphAttributes.color||[];let R=0;M===!0&&(R=1),E===!0&&(R=2),S===!0&&(R=3);let k=c.attributes.position.count*R,F=1;k>e.maxTextureSize&&(F=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const N=new Float32Array(k*F*4*m),G=new cv(N,k,F,m);G.type=Ci,G.needsUpdate=!0;const P=R*4;for(let O=0;O<m;O++){const ae=x[O],J=I[O],ce=C[O],de=k*F*4*O;for(let se=0;se<ae.count;se++){const le=se*P;M===!0&&(s.fromBufferAttribute(ae,se),N[de+le+0]=s.x,N[de+le+1]=s.y,N[de+le+2]=s.z,N[de+le+3]=0),E===!0&&(s.fromBufferAttribute(J,se),N[de+le+4]=s.x,N[de+le+5]=s.y,N[de+le+6]=s.z,N[de+le+7]=0),S===!0&&(s.fromBufferAttribute(ce,se),N[de+le+8]=s.x,N[de+le+9]=s.y,N[de+le+10]=s.z,N[de+le+11]=ce.itemSize===4?s.w:1)}}v={count:m,texture:G,size:new Mt(k,F)},i.set(c,v),c.addEventListener("dispose",b)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(o,"morphTexture",u.morphTexture,t);else{let M=0;for(let S=0;S<h.length;S++)M+=h[S];const E=c.morphTargetsRelative?1:1-M;d.getUniforms().setValue(o,"morphTargetBaseInfluence",E),d.getUniforms().setValue(o,"morphTargetInfluences",h)}d.getUniforms().setValue(o,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:a}}function aT(o,e,t,i){let s=new WeakMap;function a(d){const h=i.render.frame,g=d.geometry,m=e.get(d,g);if(s.get(m)!==h&&(e.update(m),s.set(m,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),s.get(d)!==h&&(t.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,o.ARRAY_BUFFER),s.set(d,h))),d.isSkinnedMesh){const v=d.skeleton;s.get(v)!==h&&(v.update(),s.set(v,h))}return m}function u(){s=new WeakMap}function c(d){const h=d.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:u}}const Cv=new mn,Pg=new yv(1,1),bv=new cv,Pv=new Hy,Lv=new vv,Lg=[],Dg=[],Ig=new Float32Array(16),Ug=new Float32Array(9),Ng=new Float32Array(4);function xo(o,e,t){const i=o[0];if(i<=0||i>0)return o;const s=e*t;let a=Lg[s];if(a===void 0&&(a=new Float32Array(s),Lg[s]=a),e!==0){i.toArray(a,0);for(let u=1,c=0;u!==e;++u)c+=t,o[u].toArray(a,c)}return a}function nn(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function rn(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function Eu(o,e){let t=Dg[e];t===void 0&&(t=new Int32Array(e),Dg[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function lT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function uT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;o.uniform2fv(this.addr,e),rn(t,e)}}function cT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;o.uniform3fv(this.addr,e),rn(t,e)}}function fT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;o.uniform4fv(this.addr,e),rn(t,e)}}function dT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;Ng.set(i),o.uniformMatrix2fv(this.addr,!1,Ng),rn(t,i)}}function hT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;Ug.set(i),o.uniformMatrix3fv(this.addr,!1,Ug),rn(t,i)}}function pT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;Ig.set(i),o.uniformMatrix4fv(this.addr,!1,Ig),rn(t,i)}}function mT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function gT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;o.uniform2iv(this.addr,e),rn(t,e)}}function vT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;o.uniform3iv(this.addr,e),rn(t,e)}}function _T(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;o.uniform4iv(this.addr,e),rn(t,e)}}function yT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function xT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;o.uniform2uiv(this.addr,e),rn(t,e)}}function ST(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;o.uniform3uiv(this.addr,e),rn(t,e)}}function MT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;o.uniform4uiv(this.addr,e),rn(t,e)}}function ET(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s);let a;this.type===o.SAMPLER_2D_SHADOW?(Pg.compareFunction=av,a=Pg):a=Cv,t.setTexture2D(e||a,s)}function TT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Pv,s)}function wT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Lv,s)}function AT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||bv,s)}function RT(o){switch(o){case 5126:return lT;case 35664:return uT;case 35665:return cT;case 35666:return fT;case 35674:return dT;case 35675:return hT;case 35676:return pT;case 5124:case 35670:return mT;case 35667:case 35671:return gT;case 35668:case 35672:return vT;case 35669:case 35673:return _T;case 5125:return yT;case 36294:return xT;case 36295:return ST;case 36296:return MT;case 35678:case 36198:case 36298:case 36306:case 35682:return ET;case 35679:case 36299:case 36307:return TT;case 35680:case 36300:case 36308:case 36293:return wT;case 36289:case 36303:case 36311:case 36292:return AT}}function CT(o,e){o.uniform1fv(this.addr,e)}function bT(o,e){const t=xo(e,this.size,2);o.uniform2fv(this.addr,t)}function PT(o,e){const t=xo(e,this.size,3);o.uniform3fv(this.addr,t)}function LT(o,e){const t=xo(e,this.size,4);o.uniform4fv(this.addr,t)}function DT(o,e){const t=xo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function IT(o,e){const t=xo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function UT(o,e){const t=xo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function NT(o,e){o.uniform1iv(this.addr,e)}function FT(o,e){o.uniform2iv(this.addr,e)}function OT(o,e){o.uniform3iv(this.addr,e)}function kT(o,e){o.uniform4iv(this.addr,e)}function BT(o,e){o.uniform1uiv(this.addr,e)}function zT(o,e){o.uniform2uiv(this.addr,e)}function VT(o,e){o.uniform3uiv(this.addr,e)}function HT(o,e){o.uniform4uiv(this.addr,e)}function GT(o,e,t){const i=this.cache,s=e.length,a=Eu(t,s);nn(i,a)||(o.uniform1iv(this.addr,a),rn(i,a));for(let u=0;u!==s;++u)t.setTexture2D(e[u]||Cv,a[u])}function WT(o,e,t){const i=this.cache,s=e.length,a=Eu(t,s);nn(i,a)||(o.uniform1iv(this.addr,a),rn(i,a));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||Pv,a[u])}function XT(o,e,t){const i=this.cache,s=e.length,a=Eu(t,s);nn(i,a)||(o.uniform1iv(this.addr,a),rn(i,a));for(let u=0;u!==s;++u)t.setTextureCube(e[u]||Lv,a[u])}function jT(o,e,t){const i=this.cache,s=e.length,a=Eu(t,s);nn(i,a)||(o.uniform1iv(this.addr,a),rn(i,a));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||bv,a[u])}function YT(o){switch(o){case 5126:return CT;case 35664:return bT;case 35665:return PT;case 35666:return LT;case 35674:return DT;case 35675:return IT;case 35676:return UT;case 5124:case 35670:return NT;case 35667:case 35671:return FT;case 35668:case 35672:return OT;case 35669:case 35673:return kT;case 5125:return BT;case 36294:return zT;case 36295:return VT;case 36296:return HT;case 35678:case 36198:case 36298:case 36306:case 35682:return GT;case 35679:case 36299:case 36307:return WT;case 35680:case 36300:case 36308:case 36293:return XT;case 36289:case 36303:case 36311:case 36292:return jT}}class qT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=RT(t.type)}}class $T{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=YT(t.type)}}class KT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let a=0,u=s.length;a!==u;++a){const c=s[a];c.setValue(e,t[c.id],i)}}}const zf=/(\w+)(\])?(\[|\.)?/g;function Fg(o,e){o.seq.push(e),o.map[e.id]=e}function ZT(o,e,t){const i=o.name,s=i.length;for(zf.lastIndex=0;;){const a=zf.exec(i),u=zf.lastIndex;let c=a[1];const d=a[2]==="]",h=a[3];if(d&&(c=c|0),h===void 0||h==="["&&u+2===s){Fg(t,h===void 0?new qT(c,o,e):new $T(c,o,e));break}else{let m=t.map[c];m===void 0&&(m=new KT(c),Fg(t,m)),t=m}}}class uu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(t,s),u=e.getUniformLocation(t,a.name);ZT(a,u,this)}}setValue(e,t,i,s){const a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,u=t.length;a!==u;++a){const c=t[a],d=i[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,a=e.length;s!==a;++s){const u=e[s];u.id in t&&i.push(u)}return i}}function Og(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}const QT=37297;let JT=0;function ew(o,e){const t=o.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=s;u<a;u++){const c=u+1;i.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return i.join(`
`)}const kg=new at;function tw(o){ut._getMatrix(kg,ut.workingColorSpace,o);const e=`mat3( ${kg.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(o)){case du:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Bg(o,e,t){const i=o.getShaderParameter(e,o.COMPILE_STATUS),s=o.getShaderInfoLog(e).trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const u=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+ew(o.getShaderSource(e),u)}else return s}function nw(o,e){const t=tw(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function iw(o,e){let t;switch(e){case Z0:t="Linear";break;case Q0:t="Reinhard";break;case J0:t="Cineon";break;case ey:t="ACESFilmic";break;case ny:t="AgX";break;case iy:t="Neutral";break;case ty:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const nu=new j;function rw(){ut.getLuminanceCoefficients(nu);const o=nu.x.toFixed(4),e=nu.y.toFixed(4),t=nu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sw(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function ow(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function aw(o,e){const t={},i=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=o.getActiveAttrib(e,s),u=a.name;let c=1;a.type===o.FLOAT_MAT2&&(c=2),a.type===o.FLOAT_MAT3&&(c=3),a.type===o.FLOAT_MAT4&&(c=4),t[u]={type:a.type,location:o.getAttribLocation(e,u),locationSize:c}}return t}function sa(o){return o!==""}function zg(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vg(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nd(o){return o.replace(lw,cw)}const uw=new Map;function cw(o,e){let t=lt[e];if(t===void 0){const i=uw.get(e);if(i!==void 0)t=lt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Nd(t)}const fw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hg(o){return o.replace(fw,dw)}function dw(o,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Gg(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hw(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===$g?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===P0?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===qi&&(e="SHADOWMAP_TYPE_VSM"),e}function pw(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case oo:case ao:e="ENVMAP_TYPE_CUBE";break;case _u:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mw(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ao:e="ENVMAP_MODE_REFRACTION";break}return e}function gw(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case vu:e="ENVMAP_BLENDING_MULTIPLY";break;case $0:e="ENVMAP_BLENDING_MIX";break;case K0:e="ENVMAP_BLENDING_ADD";break}return e}function vw(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function _w(o,e,t,i){const s=o.getContext(),a=t.defines;let u=t.vertexShader,c=t.fragmentShader;const d=hw(t),h=pw(t),g=mw(t),m=gw(t),v=vw(t),y=sw(t),M=ow(a),E=s.createProgram();let S,x,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(sa).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(sa).join(`
`),x.length>0&&(x+=`
`)):(S=[Gg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),x=[Gg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+g:"",t.envMap?"#define "+m:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Lr?"#define TONE_MAPPING":"",t.toneMapping!==Lr?lt.tonemapping_pars_fragment:"",t.toneMapping!==Lr?iw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,nw("linearToOutputTexel",t.outputColorSpace),rw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sa).join(`
`)),u=Nd(u),u=zg(u,t),u=Vg(u,t),c=Nd(c),c=zg(c,t),c=Vg(c,t),u=Hg(u),c=Hg(c),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===Hm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const C=I+S+u,R=I+x+c,k=Og(s,s.VERTEX_SHADER,C),F=Og(s,s.FRAGMENT_SHADER,R);s.attachShader(E,k),s.attachShader(E,F),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function N(O){if(o.debug.checkShaderErrors){const ae=s.getProgramInfoLog(E).trim(),J=s.getShaderInfoLog(k).trim(),ce=s.getShaderInfoLog(F).trim();let de=!0,se=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(de=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,E,k,F);else{const le=Bg(s,k,"vertex"),V=Bg(s,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+ae+`
`+le+`
`+V)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(J===""||ce==="")&&(se=!1);se&&(O.diagnostics={runnable:de,programLog:ae,vertexShader:{log:J,prefix:S},fragmentShader:{log:ce,prefix:x}})}s.deleteShader(k),s.deleteShader(F),G=new uu(s,E),P=aw(s,E)}let G;this.getUniforms=function(){return G===void 0&&N(this),G};let P;this.getAttributes=function(){return P===void 0&&N(this),P};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(E,QT)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=JT++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=k,this.fragmentShader=F,this}let yw=0;class xw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(i),u=this._getShaderCacheForMaterial(e);return u.has(s)===!1&&(u.add(s),s.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Sw(e),t.set(e,i)),i}}class Sw{constructor(e){this.id=yw++,this.code=e,this.usedTimes=0}}function Mw(o,e,t,i,s,a,u){const c=new fv,d=new xw,h=new Set,g=[],m=s.logarithmicDepthBuffer,v=s.vertexTextures;let y=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(P){return h.add(P),P===0?"uv":`uv${P}`}function S(P,b,O,ae,J){const ce=ae.fog,de=J.geometry,se=P.isMeshStandardMaterial?ae.environment:null,le=(P.isMeshStandardMaterial?t:e).get(P.envMap||se),V=le&&le.mapping===_u?le.image.height:null,oe=M[P.type];P.precision!==null&&(y=s.getMaxPrecision(P.precision),y!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",y,"instead."));const re=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,U=re!==void 0?re.length:0;let ne=0;de.morphAttributes.position!==void 0&&(ne=1),de.morphAttributes.normal!==void 0&&(ne=2),de.morphAttributes.color!==void 0&&(ne=3);let be,Z,ue,ye;if(oe){const Et=Ai[oe];be=Et.vertexShader,Z=Et.fragmentShader}else be=P.vertexShader,Z=P.fragmentShader,d.update(P),ue=d.getVertexShaderID(P),ye=d.getFragmentShaderID(P);const ge=o.getRenderTarget(),Te=o.state.buffers.depth.getReversed(),Le=J.isInstancedMesh===!0,$e=J.isBatchedMesh===!0,Ct=!!P.map,ct=!!P.matcap,Pt=!!le,z=!!P.aoMap,Tn=!!P.lightMap,vt=!!P.bumpMap,ht=!!P.normalMap,je=!!P.displacementMap,Lt=!!P.emissiveMap,Ge=!!P.metalnessMap,L=!!P.roughnessMap,w=P.anisotropy>0,Q=P.clearcoat>0,pe=P.dispersion>0,ve=P.iridescence>0,fe=P.sheen>0,We=P.transmission>0,we=w&&!!P.anisotropyMap,Ne=Q&&!!P.clearcoatMap,ft=Q&&!!P.clearcoatNormalMap,Me=Q&&!!P.clearcoatRoughnessMap,Oe=ve&&!!P.iridescenceMap,Ke=ve&&!!P.iridescenceThicknessMap,et=fe&&!!P.sheenColorMap,ke=fe&&!!P.sheenRoughnessMap,pt=!!P.specularMap,rt=!!P.specularColorMap,bt=!!P.specularIntensityMap,W=We&&!!P.transmissionMap,Ae=We&&!!P.thicknessMap,ie=!!P.gradientMap,he=!!P.alphaMap,De=P.alphaTest>0,Pe=!!P.alphaHash,st=!!P.extensions;let Nt=Lr;P.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Nt=o.toneMapping);const Jt={shaderID:oe,shaderType:P.type,shaderName:P.name,vertexShader:be,fragmentShader:Z,defines:P.defines,customVertexShaderID:ue,customFragmentShaderID:ye,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:y,batching:$e,batchingColor:$e&&J._colorsTexture!==null,instancing:Le,instancingColor:Le&&J.instanceColor!==null,instancingMorph:Le&&J.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ge===null?o.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:co,alphaToCoverage:!!P.alphaToCoverage,map:Ct,matcap:ct,envMap:Pt,envMapMode:Pt&&le.mapping,envMapCubeUVHeight:V,aoMap:z,lightMap:Tn,bumpMap:vt,normalMap:ht,displacementMap:v&&je,emissiveMap:Lt,normalMapObjectSpace:ht&&P.normalMapType===uy,normalMapTangentSpace:ht&&P.normalMapType===Xd,metalnessMap:Ge,roughnessMap:L,anisotropy:w,anisotropyMap:we,clearcoat:Q,clearcoatMap:Ne,clearcoatNormalMap:ft,clearcoatRoughnessMap:Me,dispersion:pe,iridescence:ve,iridescenceMap:Oe,iridescenceThicknessMap:Ke,sheen:fe,sheenColorMap:et,sheenRoughnessMap:ke,specularMap:pt,specularColorMap:rt,specularIntensityMap:bt,transmission:We,transmissionMap:W,thicknessMap:Ae,gradientMap:ie,opaque:P.transparent===!1&&P.blending===no&&P.alphaToCoverage===!1,alphaMap:he,alphaTest:De,alphaHash:Pe,combine:P.combine,mapUv:Ct&&E(P.map.channel),aoMapUv:z&&E(P.aoMap.channel),lightMapUv:Tn&&E(P.lightMap.channel),bumpMapUv:vt&&E(P.bumpMap.channel),normalMapUv:ht&&E(P.normalMap.channel),displacementMapUv:je&&E(P.displacementMap.channel),emissiveMapUv:Lt&&E(P.emissiveMap.channel),metalnessMapUv:Ge&&E(P.metalnessMap.channel),roughnessMapUv:L&&E(P.roughnessMap.channel),anisotropyMapUv:we&&E(P.anisotropyMap.channel),clearcoatMapUv:Ne&&E(P.clearcoatMap.channel),clearcoatNormalMapUv:ft&&E(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&E(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&E(P.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&E(P.iridescenceThicknessMap.channel),sheenColorMapUv:et&&E(P.sheenColorMap.channel),sheenRoughnessMapUv:ke&&E(P.sheenRoughnessMap.channel),specularMapUv:pt&&E(P.specularMap.channel),specularColorMapUv:rt&&E(P.specularColorMap.channel),specularIntensityMapUv:bt&&E(P.specularIntensityMap.channel),transmissionMapUv:W&&E(P.transmissionMap.channel),thicknessMapUv:Ae&&E(P.thicknessMap.channel),alphaMapUv:he&&E(P.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(ht||w),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!de.attributes.uv&&(Ct||he),fog:!!ce,useFog:P.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:Te,skinning:J.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ne,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:o.shadowMap.enabled&&O.length>0,shadowMapType:o.shadowMap.type,toneMapping:Nt,decodeVideoTexture:Ct&&P.map.isVideoTexture===!0&&ut.getTransfer(P.map.colorSpace)===Dt,decodeVideoTextureEmissive:Lt&&P.emissiveMap.isVideoTexture===!0&&ut.getTransfer(P.emissiveMap.colorSpace)===Dt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===$i,flipSided:P.side===Gn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:st&&P.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&P.extensions.multiDraw===!0||$e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Jt.vertexUv1s=h.has(1),Jt.vertexUv2s=h.has(2),Jt.vertexUv3s=h.has(3),h.clear(),Jt}function x(P){const b=[];if(P.shaderID?b.push(P.shaderID):(b.push(P.customVertexShaderID),b.push(P.customFragmentShaderID)),P.defines!==void 0)for(const O in P.defines)b.push(O),b.push(P.defines[O]);return P.isRawShaderMaterial===!1&&(I(b,P),C(b,P),b.push(o.outputColorSpace)),b.push(P.customProgramCacheKey),b.join()}function I(P,b){P.push(b.precision),P.push(b.outputColorSpace),P.push(b.envMapMode),P.push(b.envMapCubeUVHeight),P.push(b.mapUv),P.push(b.alphaMapUv),P.push(b.lightMapUv),P.push(b.aoMapUv),P.push(b.bumpMapUv),P.push(b.normalMapUv),P.push(b.displacementMapUv),P.push(b.emissiveMapUv),P.push(b.metalnessMapUv),P.push(b.roughnessMapUv),P.push(b.anisotropyMapUv),P.push(b.clearcoatMapUv),P.push(b.clearcoatNormalMapUv),P.push(b.clearcoatRoughnessMapUv),P.push(b.iridescenceMapUv),P.push(b.iridescenceThicknessMapUv),P.push(b.sheenColorMapUv),P.push(b.sheenRoughnessMapUv),P.push(b.specularMapUv),P.push(b.specularColorMapUv),P.push(b.specularIntensityMapUv),P.push(b.transmissionMapUv),P.push(b.thicknessMapUv),P.push(b.combine),P.push(b.fogExp2),P.push(b.sizeAttenuation),P.push(b.morphTargetsCount),P.push(b.morphAttributeCount),P.push(b.numDirLights),P.push(b.numPointLights),P.push(b.numSpotLights),P.push(b.numSpotLightMaps),P.push(b.numHemiLights),P.push(b.numRectAreaLights),P.push(b.numDirLightShadows),P.push(b.numPointLightShadows),P.push(b.numSpotLightShadows),P.push(b.numSpotLightShadowsWithMaps),P.push(b.numLightProbes),P.push(b.shadowMapType),P.push(b.toneMapping),P.push(b.numClippingPlanes),P.push(b.numClipIntersection),P.push(b.depthPacking)}function C(P,b){c.disableAll(),b.supportsVertexTextures&&c.enable(0),b.instancing&&c.enable(1),b.instancingColor&&c.enable(2),b.instancingMorph&&c.enable(3),b.matcap&&c.enable(4),b.envMap&&c.enable(5),b.normalMapObjectSpace&&c.enable(6),b.normalMapTangentSpace&&c.enable(7),b.clearcoat&&c.enable(8),b.iridescence&&c.enable(9),b.alphaTest&&c.enable(10),b.vertexColors&&c.enable(11),b.vertexAlphas&&c.enable(12),b.vertexUv1s&&c.enable(13),b.vertexUv2s&&c.enable(14),b.vertexUv3s&&c.enable(15),b.vertexTangents&&c.enable(16),b.anisotropy&&c.enable(17),b.alphaHash&&c.enable(18),b.batching&&c.enable(19),b.dispersion&&c.enable(20),b.batchingColor&&c.enable(21),P.push(c.mask),c.disableAll(),b.fog&&c.enable(0),b.useFog&&c.enable(1),b.flatShading&&c.enable(2),b.logarithmicDepthBuffer&&c.enable(3),b.reverseDepthBuffer&&c.enable(4),b.skinning&&c.enable(5),b.morphTargets&&c.enable(6),b.morphNormals&&c.enable(7),b.morphColors&&c.enable(8),b.premultipliedAlpha&&c.enable(9),b.shadowMapEnabled&&c.enable(10),b.doubleSided&&c.enable(11),b.flipSided&&c.enable(12),b.useDepthPacking&&c.enable(13),b.dithering&&c.enable(14),b.transmission&&c.enable(15),b.sheen&&c.enable(16),b.opaque&&c.enable(17),b.pointsUvs&&c.enable(18),b.decodeVideoTexture&&c.enable(19),b.decodeVideoTextureEmissive&&c.enable(20),b.alphaToCoverage&&c.enable(21),P.push(c.mask)}function R(P){const b=M[P.type];let O;if(b){const ae=Ai[b];O=ex.clone(ae.uniforms)}else O=P.uniforms;return O}function k(P,b){let O;for(let ae=0,J=g.length;ae<J;ae++){const ce=g[ae];if(ce.cacheKey===b){O=ce,++O.usedTimes;break}}return O===void 0&&(O=new _w(o,b,P,a),g.push(O)),O}function F(P){if(--P.usedTimes===0){const b=g.indexOf(P);g[b]=g[g.length-1],g.pop(),P.destroy()}}function N(P){d.remove(P)}function G(){d.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:R,acquireProgram:k,releaseProgram:F,releaseShaderCache:N,programs:g,dispose:G}}function Ew(){let o=new WeakMap;function e(u){return o.has(u)}function t(u){let c=o.get(u);return c===void 0&&(c={},o.set(u,c)),c}function i(u){o.delete(u)}function s(u,c,d){o.get(u)[c]=d}function a(){o=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:a}}function Tw(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Wg(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Xg(){const o=[];let e=0;const t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function u(m,v,y,M,E,S){let x=o[e];return x===void 0?(x={id:m.id,object:m,geometry:v,material:y,groupOrder:M,renderOrder:m.renderOrder,z:E,group:S},o[e]=x):(x.id=m.id,x.object=m,x.geometry=v,x.material=y,x.groupOrder=M,x.renderOrder=m.renderOrder,x.z=E,x.group=S),e++,x}function c(m,v,y,M,E,S){const x=u(m,v,y,M,E,S);y.transmission>0?i.push(x):y.transparent===!0?s.push(x):t.push(x)}function d(m,v,y,M,E,S){const x=u(m,v,y,M,E,S);y.transmission>0?i.unshift(x):y.transparent===!0?s.unshift(x):t.unshift(x)}function h(m,v){t.length>1&&t.sort(m||Tw),i.length>1&&i.sort(v||Wg),s.length>1&&s.sort(v||Wg)}function g(){for(let m=e,v=o.length;m<v;m++){const y=o[m];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:c,unshift:d,finish:g,sort:h}}function ww(){let o=new WeakMap;function e(i,s){const a=o.get(i);let u;return a===void 0?(u=new Xg,o.set(i,[u])):s>=a.length?(u=new Xg,a.push(u)):u=a[s],u}function t(){o=new WeakMap}return{get:e,dispose:t}}function Aw(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new it};break;case"SpotLight":t={position:new j,direction:new j,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new j,halfWidth:new j,halfHeight:new j};break}return o[e.id]=t,t}}}function Rw(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let Cw=0;function bw(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Pw(o){const e=new Aw,t=Rw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new j);const s=new j,a=new qe,u=new qe;function c(h){let g=0,m=0,v=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let y=0,M=0,E=0,S=0,x=0,I=0,C=0,R=0,k=0,F=0,N=0;h.sort(bw);for(let P=0,b=h.length;P<b;P++){const O=h[P],ae=O.color,J=O.intensity,ce=O.distance,de=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)g+=ae.r*J,m+=ae.g*J,v+=ae.b*J;else if(O.isLightProbe){for(let se=0;se<9;se++)i.probe[se].addScaledVector(O.sh.coefficients[se],J);N++}else if(O.isDirectionalLight){const se=e.get(O);if(se.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const le=O.shadow,V=t.get(O);V.shadowIntensity=le.intensity,V.shadowBias=le.bias,V.shadowNormalBias=le.normalBias,V.shadowRadius=le.radius,V.shadowMapSize=le.mapSize,i.directionalShadow[y]=V,i.directionalShadowMap[y]=de,i.directionalShadowMatrix[y]=O.shadow.matrix,I++}i.directional[y]=se,y++}else if(O.isSpotLight){const se=e.get(O);se.position.setFromMatrixPosition(O.matrixWorld),se.color.copy(ae).multiplyScalar(J),se.distance=ce,se.coneCos=Math.cos(O.angle),se.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),se.decay=O.decay,i.spot[E]=se;const le=O.shadow;if(O.map&&(i.spotLightMap[k]=O.map,k++,le.updateMatrices(O),O.castShadow&&F++),i.spotLightMatrix[E]=le.matrix,O.castShadow){const V=t.get(O);V.shadowIntensity=le.intensity,V.shadowBias=le.bias,V.shadowNormalBias=le.normalBias,V.shadowRadius=le.radius,V.shadowMapSize=le.mapSize,i.spotShadow[E]=V,i.spotShadowMap[E]=de,R++}E++}else if(O.isRectAreaLight){const se=e.get(O);se.color.copy(ae).multiplyScalar(J),se.halfWidth.set(O.width*.5,0,0),se.halfHeight.set(0,O.height*.5,0),i.rectArea[S]=se,S++}else if(O.isPointLight){const se=e.get(O);if(se.color.copy(O.color).multiplyScalar(O.intensity),se.distance=O.distance,se.decay=O.decay,O.castShadow){const le=O.shadow,V=t.get(O);V.shadowIntensity=le.intensity,V.shadowBias=le.bias,V.shadowNormalBias=le.normalBias,V.shadowRadius=le.radius,V.shadowMapSize=le.mapSize,V.shadowCameraNear=le.camera.near,V.shadowCameraFar=le.camera.far,i.pointShadow[M]=V,i.pointShadowMap[M]=de,i.pointShadowMatrix[M]=O.shadow.matrix,C++}i.point[M]=se,M++}else if(O.isHemisphereLight){const se=e.get(O);se.skyColor.copy(O.color).multiplyScalar(J),se.groundColor.copy(O.groundColor).multiplyScalar(J),i.hemi[x]=se,x++}}S>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=g,i.ambient[1]=m,i.ambient[2]=v;const G=i.hash;(G.directionalLength!==y||G.pointLength!==M||G.spotLength!==E||G.rectAreaLength!==S||G.hemiLength!==x||G.numDirectionalShadows!==I||G.numPointShadows!==C||G.numSpotShadows!==R||G.numSpotMaps!==k||G.numLightProbes!==N)&&(i.directional.length=y,i.spot.length=E,i.rectArea.length=S,i.point.length=M,i.hemi.length=x,i.directionalShadow.length=I,i.directionalShadowMap.length=I,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=I,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=R+k-F,i.spotLightMap.length=k,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=N,G.directionalLength=y,G.pointLength=M,G.spotLength=E,G.rectAreaLength=S,G.hemiLength=x,G.numDirectionalShadows=I,G.numPointShadows=C,G.numSpotShadows=R,G.numSpotMaps=k,G.numLightProbes=N,i.version=Cw++)}function d(h,g){let m=0,v=0,y=0,M=0,E=0;const S=g.matrixWorldInverse;for(let x=0,I=h.length;x<I;x++){const C=h[x];if(C.isDirectionalLight){const R=i.directional[m];R.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(S),m++}else if(C.isSpotLight){const R=i.spot[y];R.position.setFromMatrixPosition(C.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(S),y++}else if(C.isRectAreaLight){const R=i.rectArea[M];R.position.setFromMatrixPosition(C.matrixWorld),R.position.applyMatrix4(S),u.identity(),a.copy(C.matrixWorld),a.premultiply(S),u.extractRotation(a),R.halfWidth.set(C.width*.5,0,0),R.halfHeight.set(0,C.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),M++}else if(C.isPointLight){const R=i.point[v];R.position.setFromMatrixPosition(C.matrixWorld),R.position.applyMatrix4(S),v++}else if(C.isHemisphereLight){const R=i.hemi[E];R.direction.setFromMatrixPosition(C.matrixWorld),R.direction.transformDirection(S),E++}}}return{setup:c,setupView:d,state:i}}function jg(o){const e=new Pw(o),t=[],i=[];function s(g){h.camera=g,t.length=0,i.length=0}function a(g){t.push(g)}function u(g){i.push(g)}function c(){e.setup(t)}function d(g){e.setupView(t,g)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:u}}function Lw(o){let e=new WeakMap;function t(s,a=0){const u=e.get(s);let c;return u===void 0?(c=new jg(o),e.set(s,[c])):a>=u.length?(c=new jg(o),u.push(c)):c=u[a],c}function i(){e=new WeakMap}return{get:t,dispose:i}}const Dw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Iw=`uniform sampler2D shadow_pass;
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
}`;function Uw(o,e,t){let i=new Kd;const s=new Mt,a=new Mt,u=new yt,c=new Dx({depthPacking:ly}),d=new Ix,h={},g=t.maxTextureSize,m={[Dr]:Gn,[Gn]:Dr,[$i]:$i},v=new Ir({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:Dw,fragmentShader:Iw}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const M=new yi;M.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new _i(M,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$g;let x=this.type;this.render=function(F,N,G){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;const P=o.getRenderTarget(),b=o.getActiveCubeFace(),O=o.getActiveMipmapLevel(),ae=o.state;ae.setBlending(Pr),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const J=x!==qi&&this.type===qi,ce=x===qi&&this.type!==qi;for(let de=0,se=F.length;de<se;de++){const le=F[de],V=le.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const oe=V.getFrameExtents();if(s.multiply(oe),a.copy(V.mapSize),(s.x>g||s.y>g)&&(s.x>g&&(a.x=Math.floor(g/oe.x),s.x=a.x*oe.x,V.mapSize.x=a.x),s.y>g&&(a.y=Math.floor(g/oe.y),s.y=a.y*oe.y,V.mapSize.y=a.y)),V.map===null||J===!0||ce===!0){const U=this.type!==qi?{minFilter:Kn,magFilter:Kn}:{};V.map!==null&&V.map.dispose(),V.map=new as(s.x,s.y,U),V.map.texture.name=le.name+".shadowMap",V.camera.updateProjectionMatrix()}o.setRenderTarget(V.map),o.clear();const re=V.getViewportCount();for(let U=0;U<re;U++){const ne=V.getViewport(U);u.set(a.x*ne.x,a.y*ne.y,a.x*ne.z,a.y*ne.w),ae.viewport(u),V.updateMatrices(le,U),i=V.getFrustum(),R(N,G,V.camera,le,this.type)}V.isPointLightShadow!==!0&&this.type===qi&&I(V,G),V.needsUpdate=!1}x=this.type,S.needsUpdate=!1,o.setRenderTarget(P,b,O)};function I(F,N){const G=e.update(E);v.defines.VSM_SAMPLES!==F.blurSamples&&(v.defines.VSM_SAMPLES=F.blurSamples,y.defines.VSM_SAMPLES=F.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new as(s.x,s.y)),v.uniforms.shadow_pass.value=F.map.texture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(N,null,G,v,E,null),y.uniforms.shadow_pass.value=F.mapPass.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(N,null,G,y,E,null)}function C(F,N,G,P){let b=null;const O=G.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(O!==void 0)b=O;else if(b=G.isPointLight===!0?d:c,o.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const ae=b.uuid,J=N.uuid;let ce=h[ae];ce===void 0&&(ce={},h[ae]=ce);let de=ce[J];de===void 0&&(de=b.clone(),ce[J]=de,N.addEventListener("dispose",k)),b=de}if(b.visible=N.visible,b.wireframe=N.wireframe,P===qi?b.side=N.shadowSide!==null?N.shadowSide:N.side:b.side=N.shadowSide!==null?N.shadowSide:m[N.side],b.alphaMap=N.alphaMap,b.alphaTest=N.alphaTest,b.map=N.map,b.clipShadows=N.clipShadows,b.clippingPlanes=N.clippingPlanes,b.clipIntersection=N.clipIntersection,b.displacementMap=N.displacementMap,b.displacementScale=N.displacementScale,b.displacementBias=N.displacementBias,b.wireframeLinewidth=N.wireframeLinewidth,b.linewidth=N.linewidth,G.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const ae=o.properties.get(b);ae.light=G}return b}function R(F,N,G,P,b){if(F.visible===!1)return;if(F.layers.test(N.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&b===qi)&&(!F.frustumCulled||i.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,F.matrixWorld);const J=e.update(F),ce=F.material;if(Array.isArray(ce)){const de=J.groups;for(let se=0,le=de.length;se<le;se++){const V=de[se],oe=ce[V.materialIndex];if(oe&&oe.visible){const re=C(F,oe,P,b);F.onBeforeShadow(o,F,N,G,J,re,V),o.renderBufferDirect(G,null,J,re,F,V),F.onAfterShadow(o,F,N,G,J,re,V)}}}else if(ce.visible){const de=C(F,ce,P,b);F.onBeforeShadow(o,F,N,G,J,de,null),o.renderBufferDirect(G,null,J,de,F,null),F.onAfterShadow(o,F,N,G,J,de,null)}}const ae=F.children;for(let J=0,ce=ae.length;J<ce;J++)R(ae[J],N,G,P,b)}function k(F){F.target.removeEventListener("dispose",k);for(const G in h){const P=h[G],b=F.target.uuid;b in P&&(P[b].dispose(),delete P[b])}}}const Nw={[$f]:Kf,[Zf]:ed,[Qf]:td,[so]:Jf,[Kf]:$f,[ed]:Zf,[td]:Qf,[Jf]:so};function Fw(o,e){function t(){let W=!1;const Ae=new yt;let ie=null;const he=new yt(0,0,0,0);return{setMask:function(De){ie!==De&&!W&&(o.colorMask(De,De,De,De),ie=De)},setLocked:function(De){W=De},setClear:function(De,Pe,st,Nt,Jt){Jt===!0&&(De*=Nt,Pe*=Nt,st*=Nt),Ae.set(De,Pe,st,Nt),he.equals(Ae)===!1&&(o.clearColor(De,Pe,st,Nt),he.copy(Ae))},reset:function(){W=!1,ie=null,he.set(-1,0,0,0)}}}function i(){let W=!1,Ae=!1,ie=null,he=null,De=null;return{setReversed:function(Pe){if(Ae!==Pe){const st=e.get("EXT_clip_control");Ae?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT);const Nt=De;De=null,this.setClear(Nt)}Ae=Pe},getReversed:function(){return Ae},setTest:function(Pe){Pe?ge(o.DEPTH_TEST):Te(o.DEPTH_TEST)},setMask:function(Pe){ie!==Pe&&!W&&(o.depthMask(Pe),ie=Pe)},setFunc:function(Pe){if(Ae&&(Pe=Nw[Pe]),he!==Pe){switch(Pe){case $f:o.depthFunc(o.NEVER);break;case Kf:o.depthFunc(o.ALWAYS);break;case Zf:o.depthFunc(o.LESS);break;case so:o.depthFunc(o.LEQUAL);break;case Qf:o.depthFunc(o.EQUAL);break;case Jf:o.depthFunc(o.GEQUAL);break;case ed:o.depthFunc(o.GREATER);break;case td:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}he=Pe}},setLocked:function(Pe){W=Pe},setClear:function(Pe){De!==Pe&&(Ae&&(Pe=1-Pe),o.clearDepth(Pe),De=Pe)},reset:function(){W=!1,ie=null,he=null,De=null,Ae=!1}}}function s(){let W=!1,Ae=null,ie=null,he=null,De=null,Pe=null,st=null,Nt=null,Jt=null;return{setTest:function(Et){W||(Et?ge(o.STENCIL_TEST):Te(o.STENCIL_TEST))},setMask:function(Et){Ae!==Et&&!W&&(o.stencilMask(Et),Ae=Et)},setFunc:function(Et,Un,wn){(ie!==Et||he!==Un||De!==wn)&&(o.stencilFunc(Et,Un,wn),ie=Et,he=Un,De=wn)},setOp:function(Et,Un,wn){(Pe!==Et||st!==Un||Nt!==wn)&&(o.stencilOp(Et,Un,wn),Pe=Et,st=Un,Nt=wn)},setLocked:function(Et){W=Et},setClear:function(Et){Jt!==Et&&(o.clearStencil(Et),Jt=Et)},reset:function(){W=!1,Ae=null,ie=null,he=null,De=null,Pe=null,st=null,Nt=null,Jt=null}}}const a=new t,u=new i,c=new s,d=new WeakMap,h=new WeakMap;let g={},m={},v=new WeakMap,y=[],M=null,E=!1,S=null,x=null,I=null,C=null,R=null,k=null,F=null,N=new it(0,0,0),G=0,P=!1,b=null,O=null,ae=null,J=null,ce=null;const de=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,le=0;const V=o.getParameter(o.VERSION);V.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(V)[1]),se=le>=1):V.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),se=le>=2);let oe=null,re={};const U=o.getParameter(o.SCISSOR_BOX),ne=o.getParameter(o.VIEWPORT),be=new yt().fromArray(U),Z=new yt().fromArray(ne);function ue(W,Ae,ie,he){const De=new Uint8Array(4),Pe=o.createTexture();o.bindTexture(W,Pe),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let st=0;st<ie;st++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Ae,0,o.RGBA,1,1,he,0,o.RGBA,o.UNSIGNED_BYTE,De):o.texImage2D(Ae+st,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,De);return Pe}const ye={};ye[o.TEXTURE_2D]=ue(o.TEXTURE_2D,o.TEXTURE_2D,1),ye[o.TEXTURE_CUBE_MAP]=ue(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[o.TEXTURE_2D_ARRAY]=ue(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ye[o.TEXTURE_3D]=ue(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),c.setClear(0),ge(o.DEPTH_TEST),u.setFunc(so),vt(!1),ht(Dm),ge(o.CULL_FACE),z(Pr);function ge(W){g[W]!==!0&&(o.enable(W),g[W]=!0)}function Te(W){g[W]!==!1&&(o.disable(W),g[W]=!1)}function Le(W,Ae){return m[W]!==Ae?(o.bindFramebuffer(W,Ae),m[W]=Ae,W===o.DRAW_FRAMEBUFFER&&(m[o.FRAMEBUFFER]=Ae),W===o.FRAMEBUFFER&&(m[o.DRAW_FRAMEBUFFER]=Ae),!0):!1}function $e(W,Ae){let ie=y,he=!1;if(W){ie=v.get(Ae),ie===void 0&&(ie=[],v.set(Ae,ie));const De=W.textures;if(ie.length!==De.length||ie[0]!==o.COLOR_ATTACHMENT0){for(let Pe=0,st=De.length;Pe<st;Pe++)ie[Pe]=o.COLOR_ATTACHMENT0+Pe;ie.length=De.length,he=!0}}else ie[0]!==o.BACK&&(ie[0]=o.BACK,he=!0);he&&o.drawBuffers(ie)}function Ct(W){return M!==W?(o.useProgram(W),M=W,!0):!1}const ct={[is]:o.FUNC_ADD,[D0]:o.FUNC_SUBTRACT,[I0]:o.FUNC_REVERSE_SUBTRACT};ct[U0]=o.MIN,ct[N0]=o.MAX;const Pt={[F0]:o.ZERO,[O0]:o.ONE,[k0]:o.SRC_COLOR,[Yf]:o.SRC_ALPHA,[W0]:o.SRC_ALPHA_SATURATE,[H0]:o.DST_COLOR,[z0]:o.DST_ALPHA,[B0]:o.ONE_MINUS_SRC_COLOR,[qf]:o.ONE_MINUS_SRC_ALPHA,[G0]:o.ONE_MINUS_DST_COLOR,[V0]:o.ONE_MINUS_DST_ALPHA,[X0]:o.CONSTANT_COLOR,[j0]:o.ONE_MINUS_CONSTANT_COLOR,[Y0]:o.CONSTANT_ALPHA,[q0]:o.ONE_MINUS_CONSTANT_ALPHA};function z(W,Ae,ie,he,De,Pe,st,Nt,Jt,Et){if(W===Pr){E===!0&&(Te(o.BLEND),E=!1);return}if(E===!1&&(ge(o.BLEND),E=!0),W!==L0){if(W!==S||Et!==P){if((x!==is||R!==is)&&(o.blendEquation(o.FUNC_ADD),x=is,R=is),Et)switch(W){case no:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Im:o.blendFunc(o.ONE,o.ONE);break;case Um:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Nm:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case no:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Im:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Um:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Nm:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}I=null,C=null,k=null,F=null,N.set(0,0,0),G=0,S=W,P=Et}return}De=De||Ae,Pe=Pe||ie,st=st||he,(Ae!==x||De!==R)&&(o.blendEquationSeparate(ct[Ae],ct[De]),x=Ae,R=De),(ie!==I||he!==C||Pe!==k||st!==F)&&(o.blendFuncSeparate(Pt[ie],Pt[he],Pt[Pe],Pt[st]),I=ie,C=he,k=Pe,F=st),(Nt.equals(N)===!1||Jt!==G)&&(o.blendColor(Nt.r,Nt.g,Nt.b,Jt),N.copy(Nt),G=Jt),S=W,P=!1}function Tn(W,Ae){W.side===$i?Te(o.CULL_FACE):ge(o.CULL_FACE);let ie=W.side===Gn;Ae&&(ie=!ie),vt(ie),W.blending===no&&W.transparent===!1?z(Pr):z(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),a.setMask(W.colorWrite);const he=W.stencilWrite;c.setTest(he),he&&(c.setMask(W.stencilWriteMask),c.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),c.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Lt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ge(o.SAMPLE_ALPHA_TO_COVERAGE):Te(o.SAMPLE_ALPHA_TO_COVERAGE)}function vt(W){b!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),b=W)}function ht(W){W!==C0?(ge(o.CULL_FACE),W!==O&&(W===Dm?o.cullFace(o.BACK):W===b0?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Te(o.CULL_FACE),O=W}function je(W){W!==ae&&(se&&o.lineWidth(W),ae=W)}function Lt(W,Ae,ie){W?(ge(o.POLYGON_OFFSET_FILL),(J!==Ae||ce!==ie)&&(o.polygonOffset(Ae,ie),J=Ae,ce=ie)):Te(o.POLYGON_OFFSET_FILL)}function Ge(W){W?ge(o.SCISSOR_TEST):Te(o.SCISSOR_TEST)}function L(W){W===void 0&&(W=o.TEXTURE0+de-1),oe!==W&&(o.activeTexture(W),oe=W)}function w(W,Ae,ie){ie===void 0&&(oe===null?ie=o.TEXTURE0+de-1:ie=oe);let he=re[ie];he===void 0&&(he={type:void 0,texture:void 0},re[ie]=he),(he.type!==W||he.texture!==Ae)&&(oe!==ie&&(o.activeTexture(ie),oe=ie),o.bindTexture(W,Ae||ye[W]),he.type=W,he.texture=Ae)}function Q(){const W=re[oe];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function pe(){try{o.compressedTexImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ve(){try{o.compressedTexImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{o.texSubImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function We(){try{o.texSubImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function we(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ne(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ft(){try{o.texStorage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Me(){try{o.texStorage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Oe(){try{o.texImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ke(){try{o.texImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function et(W){be.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),be.copy(W))}function ke(W){Z.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),Z.copy(W))}function pt(W,Ae){let ie=h.get(Ae);ie===void 0&&(ie=new WeakMap,h.set(Ae,ie));let he=ie.get(W);he===void 0&&(he=o.getUniformBlockIndex(Ae,W.name),ie.set(W,he))}function rt(W,Ae){const he=h.get(Ae).get(W);d.get(Ae)!==he&&(o.uniformBlockBinding(Ae,he,W.__bindingPointIndex),d.set(Ae,he))}function bt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},oe=null,re={},m={},v=new WeakMap,y=[],M=null,E=!1,S=null,x=null,I=null,C=null,R=null,k=null,F=null,N=new it(0,0,0),G=0,P=!1,b=null,O=null,ae=null,J=null,ce=null,be.set(0,0,o.canvas.width,o.canvas.height),Z.set(0,0,o.canvas.width,o.canvas.height),a.reset(),u.reset(),c.reset()}return{buffers:{color:a,depth:u,stencil:c},enable:ge,disable:Te,bindFramebuffer:Le,drawBuffers:$e,useProgram:Ct,setBlending:z,setMaterial:Tn,setFlipSided:vt,setCullFace:ht,setLineWidth:je,setPolygonOffset:Lt,setScissorTest:Ge,activeTexture:L,bindTexture:w,unbindTexture:Q,compressedTexImage2D:pe,compressedTexImage3D:ve,texImage2D:Oe,texImage3D:Ke,updateUBOMapping:pt,uniformBlockBinding:rt,texStorage2D:ft,texStorage3D:Me,texSubImage2D:fe,texSubImage3D:We,compressedTexSubImage2D:we,compressedTexSubImage3D:Ne,scissor:et,viewport:ke,reset:bt}}function Ow(o,e,t,i,s,a,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Mt,g=new WeakMap;let m;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,w){return y?new OffscreenCanvas(L,w):da("canvas")}function E(L,w,Q){let pe=1;const ve=Ge(L);if((ve.width>Q||ve.height>Q)&&(pe=Q/Math.max(ve.width,ve.height)),pe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const fe=Math.floor(pe*ve.width),We=Math.floor(pe*ve.height);m===void 0&&(m=M(fe,We));const we=w?M(fe,We):m;return we.width=fe,we.height=We,we.getContext("2d").drawImage(L,0,0,fe,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+fe+"x"+We+")."),we}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),L;return L}function S(L){return L.generateMipmaps}function x(L){o.generateMipmap(L)}function I(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(L,w,Q,pe,ve=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let fe=w;if(w===o.RED&&(Q===o.FLOAT&&(fe=o.R32F),Q===o.HALF_FLOAT&&(fe=o.R16F),Q===o.UNSIGNED_BYTE&&(fe=o.R8)),w===o.RED_INTEGER&&(Q===o.UNSIGNED_BYTE&&(fe=o.R8UI),Q===o.UNSIGNED_SHORT&&(fe=o.R16UI),Q===o.UNSIGNED_INT&&(fe=o.R32UI),Q===o.BYTE&&(fe=o.R8I),Q===o.SHORT&&(fe=o.R16I),Q===o.INT&&(fe=o.R32I)),w===o.RG&&(Q===o.FLOAT&&(fe=o.RG32F),Q===o.HALF_FLOAT&&(fe=o.RG16F),Q===o.UNSIGNED_BYTE&&(fe=o.RG8)),w===o.RG_INTEGER&&(Q===o.UNSIGNED_BYTE&&(fe=o.RG8UI),Q===o.UNSIGNED_SHORT&&(fe=o.RG16UI),Q===o.UNSIGNED_INT&&(fe=o.RG32UI),Q===o.BYTE&&(fe=o.RG8I),Q===o.SHORT&&(fe=o.RG16I),Q===o.INT&&(fe=o.RG32I)),w===o.RGB_INTEGER&&(Q===o.UNSIGNED_BYTE&&(fe=o.RGB8UI),Q===o.UNSIGNED_SHORT&&(fe=o.RGB16UI),Q===o.UNSIGNED_INT&&(fe=o.RGB32UI),Q===o.BYTE&&(fe=o.RGB8I),Q===o.SHORT&&(fe=o.RGB16I),Q===o.INT&&(fe=o.RGB32I)),w===o.RGBA_INTEGER&&(Q===o.UNSIGNED_BYTE&&(fe=o.RGBA8UI),Q===o.UNSIGNED_SHORT&&(fe=o.RGBA16UI),Q===o.UNSIGNED_INT&&(fe=o.RGBA32UI),Q===o.BYTE&&(fe=o.RGBA8I),Q===o.SHORT&&(fe=o.RGBA16I),Q===o.INT&&(fe=o.RGBA32I)),w===o.RGB&&Q===o.UNSIGNED_INT_5_9_9_9_REV&&(fe=o.RGB9_E5),w===o.RGBA){const We=ve?du:ut.getTransfer(pe);Q===o.FLOAT&&(fe=o.RGBA32F),Q===o.HALF_FLOAT&&(fe=o.RGBA16F),Q===o.UNSIGNED_BYTE&&(fe=We===Dt?o.SRGB8_ALPHA8:o.RGBA8),Q===o.UNSIGNED_SHORT_4_4_4_4&&(fe=o.RGBA4),Q===o.UNSIGNED_SHORT_5_5_5_1&&(fe=o.RGB5_A1)}return(fe===o.R16F||fe===o.R32F||fe===o.RG16F||fe===o.RG32F||fe===o.RGBA16F||fe===o.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function R(L,w){let Q;return L?w===null||w===os||w===lo?Q=o.DEPTH24_STENCIL8:w===Ci?Q=o.DEPTH32F_STENCIL8:w===fa&&(Q=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===os||w===lo?Q=o.DEPTH_COMPONENT24:w===Ci?Q=o.DEPTH_COMPONENT32F:w===fa&&(Q=o.DEPTH_COMPONENT16),Q}function k(L,w){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Kn&&L.minFilter!==Ri?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function F(L){const w=L.target;w.removeEventListener("dispose",F),G(w),w.isVideoTexture&&g.delete(w)}function N(L){const w=L.target;w.removeEventListener("dispose",N),b(w)}function G(L){const w=i.get(L);if(w.__webglInit===void 0)return;const Q=L.source,pe=v.get(Q);if(pe){const ve=pe[w.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&P(L),Object.keys(pe).length===0&&v.delete(Q)}i.remove(L)}function P(L){const w=i.get(L);o.deleteTexture(w.__webglTexture);const Q=L.source,pe=v.get(Q);delete pe[w.__cacheKey],u.memory.textures--}function b(L){const w=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(w.__webglFramebuffer[pe]))for(let ve=0;ve<w.__webglFramebuffer[pe].length;ve++)o.deleteFramebuffer(w.__webglFramebuffer[pe][ve]);else o.deleteFramebuffer(w.__webglFramebuffer[pe]);w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer[pe])}else{if(Array.isArray(w.__webglFramebuffer))for(let pe=0;pe<w.__webglFramebuffer.length;pe++)o.deleteFramebuffer(w.__webglFramebuffer[pe]);else o.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&o.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let pe=0;pe<w.__webglColorRenderbuffer.length;pe++)w.__webglColorRenderbuffer[pe]&&o.deleteRenderbuffer(w.__webglColorRenderbuffer[pe]);w.__webglDepthRenderbuffer&&o.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Q=L.textures;for(let pe=0,ve=Q.length;pe<ve;pe++){const fe=i.get(Q[pe]);fe.__webglTexture&&(o.deleteTexture(fe.__webglTexture),u.memory.textures--),i.remove(Q[pe])}i.remove(L)}let O=0;function ae(){O=0}function J(){const L=O;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),O+=1,L}function ce(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function de(L,w){const Q=i.get(L);if(L.isVideoTexture&&je(L),L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){const pe=L.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(Q,L,w);return}}t.bindTexture(o.TEXTURE_2D,Q.__webglTexture,o.TEXTURE0+w)}function se(L,w){const Q=i.get(L);if(L.version>0&&Q.__version!==L.version){Z(Q,L,w);return}t.bindTexture(o.TEXTURE_2D_ARRAY,Q.__webglTexture,o.TEXTURE0+w)}function le(L,w){const Q=i.get(L);if(L.version>0&&Q.__version!==L.version){Z(Q,L,w);return}t.bindTexture(o.TEXTURE_3D,Q.__webglTexture,o.TEXTURE0+w)}function V(L,w){const Q=i.get(L);if(L.version>0&&Q.__version!==L.version){ue(Q,L,w);return}t.bindTexture(o.TEXTURE_CUBE_MAP,Q.__webglTexture,o.TEXTURE0+w)}const oe={[ca]:o.REPEAT,[Ki]:o.CLAMP_TO_EDGE,[id]:o.MIRRORED_REPEAT},re={[Kn]:o.NEAREST,[sy]:o.NEAREST_MIPMAP_NEAREST,[Pl]:o.NEAREST_MIPMAP_LINEAR,[Ri]:o.LINEAR,[af]:o.LINEAR_MIPMAP_NEAREST,[ss]:o.LINEAR_MIPMAP_LINEAR},U={[cy]:o.NEVER,[gy]:o.ALWAYS,[fy]:o.LESS,[av]:o.LEQUAL,[dy]:o.EQUAL,[my]:o.GEQUAL,[hy]:o.GREATER,[py]:o.NOTEQUAL};function ne(L,w){if(w.type===Ci&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Ri||w.magFilter===af||w.magFilter===Pl||w.magFilter===ss||w.minFilter===Ri||w.minFilter===af||w.minFilter===Pl||w.minFilter===ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,oe[w.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,oe[w.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,oe[w.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,re[w.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,re[w.minFilter]),w.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,U[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Kn||w.minFilter!==Pl&&w.minFilter!==ss||w.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function be(L,w){let Q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",F));const pe=w.source;let ve=v.get(pe);ve===void 0&&(ve={},v.set(pe,ve));const fe=ce(w);if(fe!==L.__cacheKey){ve[fe]===void 0&&(ve[fe]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),ve[fe].usedTimes++;const We=ve[L.__cacheKey];We!==void 0&&(ve[L.__cacheKey].usedTimes--,We.usedTimes===0&&P(w)),L.__cacheKey=fe,L.__webglTexture=ve[fe].texture}return Q}function Z(L,w,Q){let pe=o.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(pe=o.TEXTURE_2D_ARRAY),w.isData3DTexture&&(pe=o.TEXTURE_3D);const ve=be(L,w),fe=w.source;t.bindTexture(pe,L.__webglTexture,o.TEXTURE0+Q);const We=i.get(fe);if(fe.version!==We.__version||ve===!0){t.activeTexture(o.TEXTURE0+Q);const we=ut.getPrimaries(ut.workingColorSpace),Ne=w.colorSpace===br?null:ut.getPrimaries(w.colorSpace),ft=w.colorSpace===br||we===Ne?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Me=E(w.image,!1,s.maxTextureSize);Me=Lt(w,Me);const Oe=a.convert(w.format,w.colorSpace),Ke=a.convert(w.type);let et=C(w.internalFormat,Oe,Ke,w.colorSpace,w.isVideoTexture);ne(pe,w);let ke;const pt=w.mipmaps,rt=w.isVideoTexture!==!0,bt=We.__version===void 0||ve===!0,W=fe.dataReady,Ae=k(w,Me);if(w.isDepthTexture)et=R(w.format===uo,w.type),bt&&(rt?t.texStorage2D(o.TEXTURE_2D,1,et,Me.width,Me.height):t.texImage2D(o.TEXTURE_2D,0,et,Me.width,Me.height,0,Oe,Ke,null));else if(w.isDataTexture)if(pt.length>0){rt&&bt&&t.texStorage2D(o.TEXTURE_2D,Ae,et,pt[0].width,pt[0].height);for(let ie=0,he=pt.length;ie<he;ie++)ke=pt[ie],rt?W&&t.texSubImage2D(o.TEXTURE_2D,ie,0,0,ke.width,ke.height,Oe,Ke,ke.data):t.texImage2D(o.TEXTURE_2D,ie,et,ke.width,ke.height,0,Oe,Ke,ke.data);w.generateMipmaps=!1}else rt?(bt&&t.texStorage2D(o.TEXTURE_2D,Ae,et,Me.width,Me.height),W&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Me.width,Me.height,Oe,Ke,Me.data)):t.texImage2D(o.TEXTURE_2D,0,et,Me.width,Me.height,0,Oe,Ke,Me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){rt&&bt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Ae,et,pt[0].width,pt[0].height,Me.depth);for(let ie=0,he=pt.length;ie<he;ie++)if(ke=pt[ie],w.format!==si)if(Oe!==null)if(rt){if(W)if(w.layerUpdates.size>0){const De=Mg(ke.width,ke.height,w.format,w.type);for(const Pe of w.layerUpdates){const st=ke.data.subarray(Pe*De/ke.data.BYTES_PER_ELEMENT,(Pe+1)*De/ke.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,Pe,ke.width,ke.height,1,Oe,st)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,0,ke.width,ke.height,Me.depth,Oe,ke.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ie,et,ke.width,ke.height,Me.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?W&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,0,ke.width,ke.height,Me.depth,Oe,Ke,ke.data):t.texImage3D(o.TEXTURE_2D_ARRAY,ie,et,ke.width,ke.height,Me.depth,0,Oe,Ke,ke.data)}else{rt&&bt&&t.texStorage2D(o.TEXTURE_2D,Ae,et,pt[0].width,pt[0].height);for(let ie=0,he=pt.length;ie<he;ie++)ke=pt[ie],w.format!==si?Oe!==null?rt?W&&t.compressedTexSubImage2D(o.TEXTURE_2D,ie,0,0,ke.width,ke.height,Oe,ke.data):t.compressedTexImage2D(o.TEXTURE_2D,ie,et,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?W&&t.texSubImage2D(o.TEXTURE_2D,ie,0,0,ke.width,ke.height,Oe,Ke,ke.data):t.texImage2D(o.TEXTURE_2D,ie,et,ke.width,ke.height,0,Oe,Ke,ke.data)}else if(w.isDataArrayTexture)if(rt){if(bt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Ae,et,Me.width,Me.height,Me.depth),W)if(w.layerUpdates.size>0){const ie=Mg(Me.width,Me.height,w.format,w.type);for(const he of w.layerUpdates){const De=Me.data.subarray(he*ie/Me.data.BYTES_PER_ELEMENT,(he+1)*ie/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,he,Me.width,Me.height,1,Oe,Ke,De)}w.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Oe,Ke,Me.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,et,Me.width,Me.height,Me.depth,0,Oe,Ke,Me.data);else if(w.isData3DTexture)rt?(bt&&t.texStorage3D(o.TEXTURE_3D,Ae,et,Me.width,Me.height,Me.depth),W&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Oe,Ke,Me.data)):t.texImage3D(o.TEXTURE_3D,0,et,Me.width,Me.height,Me.depth,0,Oe,Ke,Me.data);else if(w.isFramebufferTexture){if(bt)if(rt)t.texStorage2D(o.TEXTURE_2D,Ae,et,Me.width,Me.height);else{let ie=Me.width,he=Me.height;for(let De=0;De<Ae;De++)t.texImage2D(o.TEXTURE_2D,De,et,ie,he,0,Oe,Ke,null),ie>>=1,he>>=1}}else if(pt.length>0){if(rt&&bt){const ie=Ge(pt[0]);t.texStorage2D(o.TEXTURE_2D,Ae,et,ie.width,ie.height)}for(let ie=0,he=pt.length;ie<he;ie++)ke=pt[ie],rt?W&&t.texSubImage2D(o.TEXTURE_2D,ie,0,0,Oe,Ke,ke):t.texImage2D(o.TEXTURE_2D,ie,et,Oe,Ke,ke);w.generateMipmaps=!1}else if(rt){if(bt){const ie=Ge(Me);t.texStorage2D(o.TEXTURE_2D,Ae,et,ie.width,ie.height)}W&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Oe,Ke,Me)}else t.texImage2D(o.TEXTURE_2D,0,et,Oe,Ke,Me);S(w)&&x(pe),We.__version=fe.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function ue(L,w,Q){if(w.image.length!==6)return;const pe=be(L,w),ve=w.source;t.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+Q);const fe=i.get(ve);if(ve.version!==fe.__version||pe===!0){t.activeTexture(o.TEXTURE0+Q);const We=ut.getPrimaries(ut.workingColorSpace),we=w.colorSpace===br?null:ut.getPrimaries(w.colorSpace),Ne=w.colorSpace===br||We===we?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const ft=w.isCompressedTexture||w.image[0].isCompressedTexture,Me=w.image[0]&&w.image[0].isDataTexture,Oe=[];for(let he=0;he<6;he++)!ft&&!Me?Oe[he]=E(w.image[he],!0,s.maxCubemapSize):Oe[he]=Me?w.image[he].image:w.image[he],Oe[he]=Lt(w,Oe[he]);const Ke=Oe[0],et=a.convert(w.format,w.colorSpace),ke=a.convert(w.type),pt=C(w.internalFormat,et,ke,w.colorSpace),rt=w.isVideoTexture!==!0,bt=fe.__version===void 0||pe===!0,W=ve.dataReady;let Ae=k(w,Ke);ne(o.TEXTURE_CUBE_MAP,w);let ie;if(ft){rt&&bt&&t.texStorage2D(o.TEXTURE_CUBE_MAP,Ae,pt,Ke.width,Ke.height);for(let he=0;he<6;he++){ie=Oe[he].mipmaps;for(let De=0;De<ie.length;De++){const Pe=ie[De];w.format!==si?et!==null?rt?W&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,De,0,0,Pe.width,Pe.height,et,Pe.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,De,pt,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?W&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,De,0,0,Pe.width,Pe.height,et,ke,Pe.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,De,pt,Pe.width,Pe.height,0,et,ke,Pe.data)}}}else{if(ie=w.mipmaps,rt&&bt){ie.length>0&&Ae++;const he=Ge(Oe[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,Ae,pt,he.width,he.height)}for(let he=0;he<6;he++)if(Me){rt?W&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Oe[he].width,Oe[he].height,et,ke,Oe[he].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,pt,Oe[he].width,Oe[he].height,0,et,ke,Oe[he].data);for(let De=0;De<ie.length;De++){const st=ie[De].image[he].image;rt?W&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,De+1,0,0,st.width,st.height,et,ke,st.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,De+1,pt,st.width,st.height,0,et,ke,st.data)}}else{rt?W&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,et,ke,Oe[he]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,pt,et,ke,Oe[he]);for(let De=0;De<ie.length;De++){const Pe=ie[De];rt?W&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,De+1,0,0,et,ke,Pe.image[he]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,De+1,pt,et,ke,Pe.image[he])}}}S(w)&&x(o.TEXTURE_CUBE_MAP),fe.__version=ve.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function ye(L,w,Q,pe,ve,fe){const We=a.convert(Q.format,Q.colorSpace),we=a.convert(Q.type),Ne=C(Q.internalFormat,We,we,Q.colorSpace),ft=i.get(w),Me=i.get(Q);if(Me.__renderTarget=w,!ft.__hasExternalTextures){const Oe=Math.max(1,w.width>>fe),Ke=Math.max(1,w.height>>fe);ve===o.TEXTURE_3D||ve===o.TEXTURE_2D_ARRAY?t.texImage3D(ve,fe,Ne,Oe,Ke,w.depth,0,We,we,null):t.texImage2D(ve,fe,Ne,Oe,Ke,0,We,we,null)}t.bindFramebuffer(o.FRAMEBUFFER,L),ht(w)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,ve,Me.__webglTexture,0,vt(w)):(ve===o.TEXTURE_2D||ve>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pe,ve,Me.__webglTexture,fe),t.bindFramebuffer(o.FRAMEBUFFER,null)}function ge(L,w,Q){if(o.bindRenderbuffer(o.RENDERBUFFER,L),w.depthBuffer){const pe=w.depthTexture,ve=pe&&pe.isDepthTexture?pe.type:null,fe=R(w.stencilBuffer,ve),We=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,we=vt(w);ht(w)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,we,fe,w.width,w.height):Q?o.renderbufferStorageMultisample(o.RENDERBUFFER,we,fe,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,fe,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,We,o.RENDERBUFFER,L)}else{const pe=w.textures;for(let ve=0;ve<pe.length;ve++){const fe=pe[ve],We=a.convert(fe.format,fe.colorSpace),we=a.convert(fe.type),Ne=C(fe.internalFormat,We,we,fe.colorSpace),ft=vt(w);Q&&ht(w)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ft,Ne,w.width,w.height):ht(w)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ft,Ne,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,Ne,w.width,w.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Te(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=i.get(w.depthTexture);pe.__renderTarget=w,(!pe.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),de(w.depthTexture,0);const ve=pe.__webglTexture,fe=vt(w);if(w.depthTexture.format===io)ht(w)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ve,0,fe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ve,0);else if(w.depthTexture.format===uo)ht(w)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ve,0,fe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Le(L){const w=i.get(L),Q=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const pe=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),pe){const ve=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,pe.removeEventListener("dispose",ve)};pe.addEventListener("dispose",ve),w.__depthDisposeCallback=ve}w.__boundDepthTexture=pe}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");Te(w.__webglFramebuffer,L)}else if(Q){w.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[pe]),w.__webglDepthbuffer[pe]===void 0)w.__webglDepthbuffer[pe]=o.createRenderbuffer(),ge(w.__webglDepthbuffer[pe],L,!1);else{const ve=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,fe=w.__webglDepthbuffer[pe];o.bindRenderbuffer(o.RENDERBUFFER,fe),o.framebufferRenderbuffer(o.FRAMEBUFFER,ve,o.RENDERBUFFER,fe)}}else if(t.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=o.createRenderbuffer(),ge(w.__webglDepthbuffer,L,!1);else{const pe=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ve=w.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ve),o.framebufferRenderbuffer(o.FRAMEBUFFER,pe,o.RENDERBUFFER,ve)}t.bindFramebuffer(o.FRAMEBUFFER,null)}function $e(L,w,Q){const pe=i.get(L);w!==void 0&&ye(pe.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Q!==void 0&&Le(L)}function Ct(L){const w=L.texture,Q=i.get(L),pe=i.get(w);L.addEventListener("dispose",N);const ve=L.textures,fe=L.isWebGLCubeRenderTarget===!0,We=ve.length>1;if(We||(pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture()),pe.__version=w.version,u.memory.textures++),fe){Q.__webglFramebuffer=[];for(let we=0;we<6;we++)if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer[we]=[];for(let Ne=0;Ne<w.mipmaps.length;Ne++)Q.__webglFramebuffer[we][Ne]=o.createFramebuffer()}else Q.__webglFramebuffer[we]=o.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer=[];for(let we=0;we<w.mipmaps.length;we++)Q.__webglFramebuffer[we]=o.createFramebuffer()}else Q.__webglFramebuffer=o.createFramebuffer();if(We)for(let we=0,Ne=ve.length;we<Ne;we++){const ft=i.get(ve[we]);ft.__webglTexture===void 0&&(ft.__webglTexture=o.createTexture(),u.memory.textures++)}if(L.samples>0&&ht(L)===!1){Q.__webglMultisampledFramebuffer=o.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let we=0;we<ve.length;we++){const Ne=ve[we];Q.__webglColorRenderbuffer[we]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Q.__webglColorRenderbuffer[we]);const ft=a.convert(Ne.format,Ne.colorSpace),Me=a.convert(Ne.type),Oe=C(Ne.internalFormat,ft,Me,Ne.colorSpace,L.isXRRenderTarget===!0),Ke=vt(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ke,Oe,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.RENDERBUFFER,Q.__webglColorRenderbuffer[we])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(Q.__webglDepthRenderbuffer=o.createRenderbuffer(),ge(Q.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(fe){t.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),ne(o.TEXTURE_CUBE_MAP,w);for(let we=0;we<6;we++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ne=0;Ne<w.mipmaps.length;Ne++)ye(Q.__webglFramebuffer[we][Ne],L,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ne);else ye(Q.__webglFramebuffer[we],L,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);S(w)&&x(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let we=0,Ne=ve.length;we<Ne;we++){const ft=ve[we],Me=i.get(ft);t.bindTexture(o.TEXTURE_2D,Me.__webglTexture),ne(o.TEXTURE_2D,ft),ye(Q.__webglFramebuffer,L,ft,o.COLOR_ATTACHMENT0+we,o.TEXTURE_2D,0),S(ft)&&x(o.TEXTURE_2D)}t.unbindTexture()}else{let we=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(we=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(we,pe.__webglTexture),ne(we,w),w.mipmaps&&w.mipmaps.length>0)for(let Ne=0;Ne<w.mipmaps.length;Ne++)ye(Q.__webglFramebuffer[Ne],L,w,o.COLOR_ATTACHMENT0,we,Ne);else ye(Q.__webglFramebuffer,L,w,o.COLOR_ATTACHMENT0,we,0);S(w)&&x(we),t.unbindTexture()}L.depthBuffer&&Le(L)}function ct(L){const w=L.textures;for(let Q=0,pe=w.length;Q<pe;Q++){const ve=w[Q];if(S(ve)){const fe=I(L),We=i.get(ve).__webglTexture;t.bindTexture(fe,We),x(fe),t.unbindTexture()}}}const Pt=[],z=[];function Tn(L){if(L.samples>0){if(ht(L)===!1){const w=L.textures,Q=L.width,pe=L.height;let ve=o.COLOR_BUFFER_BIT;const fe=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,We=i.get(L),we=w.length>1;if(we)for(let Ne=0;Ne<w.length;Ne++)t.bindFramebuffer(o.FRAMEBUFFER,We.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,We.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Ne=0;Ne<w.length;Ne++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ve|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ve|=o.STENCIL_BUFFER_BIT)),we){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,We.__webglColorRenderbuffer[Ne]);const ft=i.get(w[Ne]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ft,0)}o.blitFramebuffer(0,0,Q,pe,0,0,Q,pe,ve,o.NEAREST),d===!0&&(Pt.length=0,z.length=0,Pt.push(o.COLOR_ATTACHMENT0+Ne),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Pt.push(fe),z.push(fe),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,z)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Pt))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),we)for(let Ne=0;Ne<w.length;Ne++){t.bindFramebuffer(o.FRAMEBUFFER,We.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,We.__webglColorRenderbuffer[Ne]);const ft=i.get(w[Ne]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,We.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,ft,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&d){const w=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[w])}}}function vt(L){return Math.min(s.maxSamples,L.samples)}function ht(L){const w=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function je(L){const w=u.render.frame;g.get(L)!==w&&(g.set(L,w),L.update())}function Lt(L,w){const Q=L.colorSpace,pe=L.format,ve=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Q!==co&&Q!==br&&(ut.getTransfer(Q)===Dt?(pe!==si||ve!==Ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),w}function Ge(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=J,this.resetTextureUnits=ae,this.setTexture2D=de,this.setTexture2DArray=se,this.setTexture3D=le,this.setTextureCube=V,this.rebindTextures=$e,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Tn,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=ht}function kw(o,e){function t(i,s=br){let a;const u=ut.getTransfer(s);if(i===Ji)return o.UNSIGNED_BYTE;if(i===zd)return o.UNSIGNED_SHORT_4_4_4_4;if(i===Vd)return o.UNSIGNED_SHORT_5_5_5_1;if(i===Jg)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===Zg)return o.BYTE;if(i===Qg)return o.SHORT;if(i===fa)return o.UNSIGNED_SHORT;if(i===Bd)return o.INT;if(i===os)return o.UNSIGNED_INT;if(i===Ci)return o.FLOAT;if(i===ya)return o.HALF_FLOAT;if(i===ev)return o.ALPHA;if(i===tv)return o.RGB;if(i===si)return o.RGBA;if(i===nv)return o.LUMINANCE;if(i===iv)return o.LUMINANCE_ALPHA;if(i===io)return o.DEPTH_COMPONENT;if(i===uo)return o.DEPTH_STENCIL;if(i===rv)return o.RED;if(i===Hd)return o.RED_INTEGER;if(i===sv)return o.RG;if(i===Gd)return o.RG_INTEGER;if(i===Wd)return o.RGBA_INTEGER;if(i===ru||i===su||i===ou||i===au)if(u===Dt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===ru)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===su)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ou)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===au)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===ru)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===su)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ou)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===au)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rd||i===sd||i===od||i===ad)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===rd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===od)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ad)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ld||i===ud||i===cd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===ld||i===ud)return u===Dt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===cd)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===fd||i===dd||i===hd||i===pd||i===md||i===gd||i===vd||i===_d||i===yd||i===xd||i===Sd||i===Md||i===Ed||i===Td)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===fd)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===dd)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hd)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pd)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===md)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gd)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vd)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_d)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yd)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xd)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sd)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Md)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ed)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Td)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lu||i===wd||i===Ad)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===lu)return u===Dt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ad)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ov||i===Rd||i===Cd||i===bd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===lu)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Rd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Cd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===lo?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:t}}const Bw={type:"move"};class Vf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,u=null;const c=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const E of e.hand.values()){const S=t.getJointPose(E,i),x=this._getHandJoint(h,E);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const g=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],v=g.position.distanceTo(m.position),y=.02,M=.005;h.inputState.pinching&&v>y+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=y-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Bw)))}return c!==null&&(c.visible=s!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Qs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const zw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vw=`
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

}`;class Hw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new mn,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ir({vertexShader:zw,fragmentShader:Vw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _i(new xu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gw extends mo{constructor(e,t){super();const i=this;let s=null,a=1,u=null,c="local-floor",d=1,h=null,g=null,m=null,v=null,y=null,M=null;const E=new Hw,S=t.getContextAttributes();let x=null,I=null;const C=[],R=[],k=new Mt;let F=null;const N=new In;N.viewport=new yt;const G=new In;G.viewport=new yt;const P=[N,G],b=new tS;let O=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ue=C[Z];return ue===void 0&&(ue=new Vf,C[Z]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Z){let ue=C[Z];return ue===void 0&&(ue=new Vf,C[Z]=ue),ue.getGripSpace()},this.getHand=function(Z){let ue=C[Z];return ue===void 0&&(ue=new Vf,C[Z]=ue),ue.getHandSpace()};function J(Z){const ue=R.indexOf(Z.inputSource);if(ue===-1)return;const ye=C[ue];ye!==void 0&&(ye.update(Z.inputSource,Z.frame,h||u),ye.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ce(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",ce),s.removeEventListener("inputsourceschange",de);for(let Z=0;Z<C.length;Z++){const ue=R[Z];ue!==null&&(R[Z]=null,C[Z].disconnect(ue))}O=null,ae=null,E.reset(),e.setRenderTarget(x),y=null,v=null,m=null,s=null,I=null,be.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(k.width,k.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){c=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(Z){h=Z},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return m},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",ce),s.addEventListener("inputsourceschange",de),S.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(k),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let ye=null,ge=null,Te=null;S.depth&&(Te=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=S.stencil?uo:io,ge=S.stencil?lo:os);const Le={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:a};m=new XRWebGLBinding(s,t),v=m.createProjectionLayer(Le),s.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),I=new as(v.textureWidth,v.textureHeight,{format:si,type:Ji,depthTexture:new yv(v.textureWidth,v.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}else{const ye={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),I=new as(y.framebufferWidth,y.framebufferHeight,{format:si,type:Ji,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}I.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await s.requestReferenceSpace(c),be.setContext(s),be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function de(Z){for(let ue=0;ue<Z.removed.length;ue++){const ye=Z.removed[ue],ge=R.indexOf(ye);ge>=0&&(R[ge]=null,C[ge].disconnect(ye))}for(let ue=0;ue<Z.added.length;ue++){const ye=Z.added[ue];let ge=R.indexOf(ye);if(ge===-1){for(let Le=0;Le<C.length;Le++)if(Le>=R.length){R.push(ye),ge=Le;break}else if(R[Le]===null){R[Le]=ye,ge=Le;break}if(ge===-1)break}const Te=C[ge];Te&&Te.connect(ye)}}const se=new j,le=new j;function V(Z,ue,ye){se.setFromMatrixPosition(ue.matrixWorld),le.setFromMatrixPosition(ye.matrixWorld);const ge=se.distanceTo(le),Te=ue.projectionMatrix.elements,Le=ye.projectionMatrix.elements,$e=Te[14]/(Te[10]-1),Ct=Te[14]/(Te[10]+1),ct=(Te[9]+1)/Te[5],Pt=(Te[9]-1)/Te[5],z=(Te[8]-1)/Te[0],Tn=(Le[8]+1)/Le[0],vt=$e*z,ht=$e*Tn,je=ge/(-z+Tn),Lt=je*-z;if(ue.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Lt),Z.translateZ(je),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Te[10]===-1)Z.projectionMatrix.copy(ue.projectionMatrix),Z.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Ge=$e+je,L=Ct+je,w=vt-Lt,Q=ht+(ge-Lt),pe=ct*Ct/L*Ge,ve=Pt*Ct/L*Ge;Z.projectionMatrix.makePerspective(w,Q,pe,ve,Ge,L),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function oe(Z,ue){ue===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ue.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ue=Z.near,ye=Z.far;E.texture!==null&&(E.depthNear>0&&(ue=E.depthNear),E.depthFar>0&&(ye=E.depthFar)),b.near=G.near=N.near=ue,b.far=G.far=N.far=ye,(O!==b.near||ae!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),O=b.near,ae=b.far),N.layers.mask=Z.layers.mask|2,G.layers.mask=Z.layers.mask|4,b.layers.mask=N.layers.mask|G.layers.mask;const ge=Z.parent,Te=b.cameras;oe(b,ge);for(let Le=0;Le<Te.length;Le++)oe(Te[Le],ge);Te.length===2?V(b,N,G):b.projectionMatrix.copy(N.projectionMatrix),re(Z,b,ge)};function re(Z,ue,ye){ye===null?Z.matrix.copy(ue.matrixWorld):(Z.matrix.copy(ye.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ue.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ue.projectionMatrix),Z.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=fo*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(v===null&&y===null))return d},this.setFoveation=function(Z){d=Z,v!==null&&(v.fixedFoveation=Z),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Z)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(b)};let U=null;function ne(Z,ue){if(g=ue.getViewerPose(h||u),M=ue,g!==null){const ye=g.views;y!==null&&(e.setRenderTargetFramebuffer(I,y.framebuffer),e.setRenderTarget(I));let ge=!1;ye.length!==b.cameras.length&&(b.cameras.length=0,ge=!0);for(let Le=0;Le<ye.length;Le++){const $e=ye[Le];let Ct=null;if(y!==null)Ct=y.getViewport($e);else{const Pt=m.getViewSubImage(v,$e);Ct=Pt.viewport,Le===0&&(e.setRenderTargetTextures(I,Pt.colorTexture,v.ignoreDepthValues?void 0:Pt.depthStencilTexture),e.setRenderTarget(I))}let ct=P[Le];ct===void 0&&(ct=new In,ct.layers.enable(Le),ct.viewport=new yt,P[Le]=ct),ct.matrix.fromArray($e.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray($e.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),Le===0&&(b.matrix.copy(ct.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ge===!0&&b.cameras.push(ct)}const Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Le=m.getDepthInformation(ye[0]);Le&&Le.isValid&&Le.texture&&E.init(e,Le,s.renderState)}}for(let ye=0;ye<C.length;ye++){const ge=R[ye],Te=C[ye];ge!==null&&Te!==void 0&&Te.update(ge,ue,h||u)}U&&U(Z,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),M=null}const be=new Rv;be.setAnimationLoop(ne),this.setAnimationLoop=function(Z){U=Z},this.dispose=function(){}}}const es=new fn,Ww=new qe;function Xw(o,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function i(S,x){x.color.getRGB(S.fogColor.value,mv(o)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function s(S,x,I,C,R){x.isMeshBasicMaterial||x.isMeshLambertMaterial?a(S,x):x.isMeshToonMaterial?(a(S,x),m(S,x)):x.isMeshPhongMaterial?(a(S,x),g(S,x)):x.isMeshStandardMaterial?(a(S,x),v(S,x),x.isMeshPhysicalMaterial&&y(S,x,R)):x.isMeshMatcapMaterial?(a(S,x),M(S,x)):x.isMeshDepthMaterial?a(S,x):x.isMeshDistanceMaterial?(a(S,x),E(S,x)):x.isMeshNormalMaterial?a(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&c(S,x)):x.isPointsMaterial?d(S,x,I,C):x.isSpriteMaterial?h(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function a(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Gn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Gn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const I=e.get(x),C=I.envMap,R=I.envMapRotation;C&&(S.envMap.value=C,es.copy(R),es.x*=-1,es.y*=-1,es.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),S.envMapRotation.value.setFromMatrix4(Ww.makeRotationFromEuler(es)),S.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function c(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function d(S,x,I,C){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*I,S.scale.value=C*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function m(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,I){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Gn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=I.texture,S.transmissionSamplerSize.value.set(I.width,I.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,x){x.matcap&&(S.matcap.value=x.matcap)}function E(S,x){const I=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(I.matrixWorld),S.nearDistance.value=I.shadow.camera.near,S.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function jw(o,e,t,i){let s={},a={},u=[];const c=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function d(I,C){const R=C.program;i.uniformBlockBinding(I,R)}function h(I,C){let R=s[I.id];R===void 0&&(M(I),R=g(I),s[I.id]=R,I.addEventListener("dispose",S));const k=C.program;i.updateUBOMapping(I,k);const F=e.render.frame;a[I.id]!==F&&(v(I),a[I.id]=F)}function g(I){const C=m();I.__bindingPointIndex=C;const R=o.createBuffer(),k=I.__size,F=I.usage;return o.bindBuffer(o.UNIFORM_BUFFER,R),o.bufferData(o.UNIFORM_BUFFER,k,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,C,R),R}function m(){for(let I=0;I<c;I++)if(u.indexOf(I)===-1)return u.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(I){const C=s[I.id],R=I.uniforms,k=I.__cache;o.bindBuffer(o.UNIFORM_BUFFER,C);for(let F=0,N=R.length;F<N;F++){const G=Array.isArray(R[F])?R[F]:[R[F]];for(let P=0,b=G.length;P<b;P++){const O=G[P];if(y(O,F,P,k)===!0){const ae=O.__offset,J=Array.isArray(O.value)?O.value:[O.value];let ce=0;for(let de=0;de<J.length;de++){const se=J[de],le=E(se);typeof se=="number"||typeof se=="boolean"?(O.__data[0]=se,o.bufferSubData(o.UNIFORM_BUFFER,ae+ce,O.__data)):se.isMatrix3?(O.__data[0]=se.elements[0],O.__data[1]=se.elements[1],O.__data[2]=se.elements[2],O.__data[3]=0,O.__data[4]=se.elements[3],O.__data[5]=se.elements[4],O.__data[6]=se.elements[5],O.__data[7]=0,O.__data[8]=se.elements[6],O.__data[9]=se.elements[7],O.__data[10]=se.elements[8],O.__data[11]=0):(se.toArray(O.__data,ce),ce+=le.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ae,O.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(I,C,R,k){const F=I.value,N=C+"_"+R;if(k[N]===void 0)return typeof F=="number"||typeof F=="boolean"?k[N]=F:k[N]=F.clone(),!0;{const G=k[N];if(typeof F=="number"||typeof F=="boolean"){if(G!==F)return k[N]=F,!0}else if(G.equals(F)===!1)return G.copy(F),!0}return!1}function M(I){const C=I.uniforms;let R=0;const k=16;for(let N=0,G=C.length;N<G;N++){const P=Array.isArray(C[N])?C[N]:[C[N]];for(let b=0,O=P.length;b<O;b++){const ae=P[b],J=Array.isArray(ae.value)?ae.value:[ae.value];for(let ce=0,de=J.length;ce<de;ce++){const se=J[ce],le=E(se),V=R%k,oe=V%le.boundary,re=V+oe;R+=oe,re!==0&&k-re<le.storage&&(R+=k-re),ae.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=R,R+=le.storage}}}const F=R%k;return F>0&&(R+=k-F),I.__size=R,I.__cache={},this}function E(I){const C={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(C.boundary=4,C.storage=4):I.isVector2?(C.boundary=8,C.storage=8):I.isVector3||I.isColor?(C.boundary=16,C.storage=12):I.isVector4?(C.boundary=16,C.storage=16):I.isMatrix3?(C.boundary=48,C.storage=48):I.isMatrix4?(C.boundary=64,C.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),C}function S(I){const C=I.target;C.removeEventListener("dispose",S);const R=u.indexOf(C.__bindingPointIndex);u.splice(R,1),o.deleteBuffer(s[C.id]),delete s[C.id],delete a[C.id]}function x(){for(const I in s)o.deleteBuffer(s[I]);u=[],s={},a={}}return{bind:d,update:h,dispose:x}}class Yw{constructor(e={}){const{canvas:t=Iy(),context:i=null,depth:s=!0,stencil:a=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=u;const M=new Uint32Array(4),E=new Int32Array(4);let S=null,x=null;const I=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this.toneMapping=Lr,this.toneMappingExposure=1;const R=this;let k=!1,F=0,N=0,G=null,P=-1,b=null;const O=new yt,ae=new yt;let J=null;const ce=new it(0);let de=0,se=t.width,le=t.height,V=1,oe=null,re=null;const U=new yt(0,0,se,le),ne=new yt(0,0,se,le);let be=!1;const Z=new Kd;let ue=!1,ye=!1;this.transmissionResolutionScale=1;const ge=new qe,Te=new qe,Le=new j,$e=new yt,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function Pt(){return G===null?V:1}let z=i;function Tn(A,X){return t.getContext(A,X)}try{const A={alpha:!0,depth:s,stencil:a,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kd}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),z===null){const X="webgl2";if(z=Tn(X,A),z===null)throw Tn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let vt,ht,je,Lt,Ge,L,w,Q,pe,ve,fe,We,we,Ne,ft,Me,Oe,Ke,et,ke,pt,rt,bt,W;function Ae(){vt=new nT(z),vt.init(),rt=new kw(z,vt),ht=new KE(z,vt,e,rt),je=new Fw(z,vt),ht.reverseDepthBuffer&&v&&je.buffers.depth.setReversed(!0),Lt=new sT(z),Ge=new Ew,L=new Ow(z,vt,je,Ge,ht,rt,Lt),w=new QE(R),Q=new tT(R),pe=new dS(z),bt=new qE(z,pe),ve=new iT(z,pe,Lt,bt),fe=new aT(z,ve,pe,Lt),et=new oT(z,ht,L),Me=new ZE(Ge),We=new Mw(R,w,Q,vt,ht,bt,Me),we=new Xw(R,Ge),Ne=new ww,ft=new Lw(vt),Ke=new YE(R,w,Q,je,fe,y,d),Oe=new Uw(R,fe,ht),W=new jw(z,Lt,ht,je),ke=new $E(z,vt,Lt),pt=new rT(z,vt,Lt),Lt.programs=We.programs,R.capabilities=ht,R.extensions=vt,R.properties=Ge,R.renderLists=Ne,R.shadowMap=Oe,R.state=je,R.info=Lt}Ae();const ie=new Gw(R,z);this.xr=ie,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=vt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=vt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(se,le,!1))},this.getSize=function(A){return A.set(se,le)},this.setSize=function(A,X,ee=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=A,le=X,t.width=Math.floor(A*V),t.height=Math.floor(X*V),ee===!0&&(t.style.width=A+"px",t.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(se*V,le*V).floor()},this.setDrawingBufferSize=function(A,X,ee){se=A,le=X,V=ee,t.width=Math.floor(A*ee),t.height=Math.floor(X*ee),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(O)},this.getViewport=function(A){return A.copy(U)},this.setViewport=function(A,X,ee,$){A.isVector4?U.set(A.x,A.y,A.z,A.w):U.set(A,X,ee,$),je.viewport(O.copy(U).multiplyScalar(V).round())},this.getScissor=function(A){return A.copy(ne)},this.setScissor=function(A,X,ee,$){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,X,ee,$),je.scissor(ae.copy(ne).multiplyScalar(V).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(A){je.setScissorTest(be=A)},this.setOpaqueSort=function(A){oe=A},this.setTransparentSort=function(A){re=A},this.getClearColor=function(A){return A.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(A=!0,X=!0,ee=!0){let $=0;if(A){let Y=!1;if(G!==null){const Se=G.texture.format;Y=Se===Wd||Se===Gd||Se===Hd}if(Y){const Se=G.texture.type,Re=Se===Ji||Se===os||Se===fa||Se===lo||Se===zd||Se===Vd,Ie=Ke.getClearColor(),Be=Ke.getClearAlpha(),tt=Ie.r,Je=Ie.g,Ve=Ie.b;Re?(M[0]=tt,M[1]=Je,M[2]=Ve,M[3]=Be,z.clearBufferuiv(z.COLOR,0,M)):(E[0]=tt,E[1]=Je,E[2]=Ve,E[3]=Be,z.clearBufferiv(z.COLOR,0,E))}else $|=z.COLOR_BUFFER_BIT}X&&($|=z.DEPTH_BUFFER_BIT),ee&&($|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),Ke.dispose(),Ne.dispose(),ft.dispose(),Ge.dispose(),w.dispose(),Q.dispose(),fe.dispose(),bt.dispose(),W.dispose(),We.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",fs),ie.removeEventListener("sessionend",er),Li.stop()};function he(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const A=Lt.autoReset,X=Oe.enabled,ee=Oe.autoUpdate,$=Oe.needsUpdate,Y=Oe.type;Ae(),Lt.autoReset=A,Oe.enabled=X,Oe.autoUpdate=ee,Oe.needsUpdate=$,Oe.type=Y}function Pe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function st(A){const X=A.target;X.removeEventListener("dispose",st),Nt(X)}function Nt(A){Jt(A),Ge.remove(A)}function Jt(A){const X=Ge.get(A).programs;X!==void 0&&(X.forEach(function(ee){We.releaseProgram(ee)}),A.isShaderMaterial&&We.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,ee,$,Y,Se){X===null&&(X=Ct);const Re=Y.isMesh&&Y.matrixWorld.determinant()<0,Ie=Ta(A,X,ee,$,Y);je.setMaterial($,Re);let Be=ee.index,tt=1;if($.wireframe===!0){if(Be=ve.getWireframeAttribute(ee),Be===void 0)return;tt=2}const Je=ee.drawRange,Ve=ee.attributes.position;let xt=Je.start*tt,ot=(Je.start+Je.count)*tt;Se!==null&&(xt=Math.max(xt,Se.start*tt),ot=Math.min(ot,(Se.start+Se.count)*tt)),Be!==null?(xt=Math.max(xt,0),ot=Math.min(ot,Be.count)):Ve!=null&&(xt=Math.max(xt,0),ot=Math.min(ot,Ve.count));const jt=ot-xt;if(jt<0||jt===1/0)return;bt.setup(Y,$,Ie,ee,Be);let zt,St=ke;if(Be!==null&&(zt=pe.get(Be),St=pt,St.setIndex(zt)),Y.isMesh)$.wireframe===!0?(je.setLineWidth($.wireframeLinewidth*Pt()),St.setMode(z.LINES)):St.setMode(z.TRIANGLES);else if(Y.isLine){let Ye=$.linewidth;Ye===void 0&&(Ye=1),je.setLineWidth(Ye*Pt()),Y.isLineSegments?St.setMode(z.LINES):Y.isLineLoop?St.setMode(z.LINE_LOOP):St.setMode(z.LINE_STRIP)}else Y.isPoints?St.setMode(z.POINTS):Y.isSprite&&St.setMode(z.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)St.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))St.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Ye=Y._multiDrawStarts,Yt=Y._multiDrawCounts,_t=Y._multiDrawCount,gn=Be?pe.get(Be).bytesPerElement:1,nr=Ge.get($).currentProgram.getUniforms();for(let An=0;An<_t;An++)nr.setValue(z,"_gl_DrawID",An),St.render(Ye[An]/gn,Yt[An])}else if(Y.isInstancedMesh)St.renderInstances(xt,jt,Y.count);else if(ee.isInstancedBufferGeometry){const Ye=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Yt=Math.min(ee.instanceCount,Ye);St.renderInstances(xt,jt,Yt)}else St.render(xt,jt)};function Et(A,X,ee){A.transparent===!0&&A.side===$i&&A.forceSinglePass===!1?(A.side=Gn,A.needsUpdate=!0,ds(A,X,ee),A.side=Dr,A.needsUpdate=!0,ds(A,X,ee),A.side=$i):ds(A,X,ee)}this.compile=function(A,X,ee=null){ee===null&&(ee=A),x=ft.get(ee),x.init(X),C.push(x),ee.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(x.pushLight(Y),Y.castShadow&&x.pushShadow(Y))}),A!==ee&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(x.pushLight(Y),Y.castShadow&&x.pushShadow(Y))}),x.setupLights();const $=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Se=Y.material;if(Se)if(Array.isArray(Se))for(let Re=0;Re<Se.length;Re++){const Ie=Se[Re];Et(Ie,ee,Y),$.add(Ie)}else Et(Se,ee,Y),$.add(Se)}),C.pop(),x=null,$},this.compileAsync=function(A,X,ee=null){const $=this.compile(A,X,ee);return new Promise(Y=>{function Se(){if($.forEach(function(Re){Ge.get(Re).currentProgram.isReady()&&$.delete(Re)}),$.size===0){Y(A);return}setTimeout(Se,10)}vt.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Un=null;function wn(A){Un&&Un(A)}function fs(){Li.stop()}function er(){Li.start()}const Li=new Rv;Li.setAnimationLoop(wn),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(A){Un=A,ie.setAnimationLoop(A),A===null?Li.stop():Li.start()},ie.addEventListener("sessionstart",fs),ie.addEventListener("sessionend",er),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(X),X=ie.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,X,G),x=ft.get(A,C.length),x.init(X),C.push(x),Te.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Z.setFromProjectionMatrix(Te),ye=this.localClippingEnabled,ue=Me.init(this.clippingPlanes,ye),S=Ne.get(A,I.length),S.init(),I.push(S),ie.enabled===!0&&ie.isPresenting===!0){const Se=R.xr.getDepthSensingMesh();Se!==null&&Di(Se,X,-1/0,R.sortObjects)}Di(A,X,0,R.sortObjects),S.finish(),R.sortObjects===!0&&S.sort(oe,re),ct=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,ct&&Ke.addToRenderList(S,A),this.info.render.frame++,ue===!0&&Me.beginShadows();const ee=x.state.shadowsArray;Oe.render(ee,A,X),ue===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=S.opaque,Y=S.transmissive;if(x.setupLights(),X.isArrayCamera){const Se=X.cameras;if(Y.length>0)for(let Re=0,Ie=Se.length;Re<Ie;Re++){const Be=Se[Re];Fr($,Y,A,Be)}ct&&Ke.render(A);for(let Re=0,Ie=Se.length;Re<Ie;Re++){const Be=Se[Re];Nr(S,A,Be,Be.viewport)}}else Y.length>0&&Fr($,Y,A,X),ct&&Ke.render(A),Nr(S,A,X);G!==null&&N===0&&(L.updateMultisampleRenderTarget(G),L.updateRenderTargetMipmap(G)),A.isScene===!0&&A.onAfterRender(R,A,X),bt.resetDefaultState(),P=-1,b=null,C.pop(),C.length>0?(x=C[C.length-1],ue===!0&&Me.setGlobalState(R.clippingPlanes,x.state.camera)):x=null,I.pop(),I.length>0?S=I[I.length-1]:S=null};function Di(A,X,ee,$){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)ee=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)x.pushLight(A),A.castShadow&&x.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Z.intersectsSprite(A)){$&&$e.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Te);const Re=fe.update(A),Ie=A.material;Ie.visible&&S.push(A,Re,Ie,ee,$e.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Z.intersectsObject(A))){const Re=fe.update(A),Ie=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),$e.copy(A.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),$e.copy(Re.boundingSphere.center)),$e.applyMatrix4(A.matrixWorld).applyMatrix4(Te)),Array.isArray(Ie)){const Be=Re.groups;for(let tt=0,Je=Be.length;tt<Je;tt++){const Ve=Be[tt],xt=Ie[Ve.materialIndex];xt&&xt.visible&&S.push(A,Re,xt,ee,$e.z,Ve)}}else Ie.visible&&S.push(A,Re,Ie,ee,$e.z,null)}}const Se=A.children;for(let Re=0,Ie=Se.length;Re<Ie;Re++)Di(Se[Re],X,ee,$)}function Nr(A,X,ee,$){const Y=A.opaque,Se=A.transmissive,Re=A.transparent;x.setupLightsView(ee),ue===!0&&Me.setGlobalState(R.clippingPlanes,ee),$&&je.viewport(O.copy($)),Y.length>0&&tr(Y,X,ee),Se.length>0&&tr(Se,X,ee),Re.length>0&&tr(Re,X,ee),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Fr(A,X,ee,$){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[$.id]===void 0&&(x.state.transmissionRenderTarget[$.id]=new as(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float")?ya:Ji,minFilter:ss,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));const Se=x.state.transmissionRenderTarget[$.id],Re=$.viewport||O;Se.setSize(Re.z*R.transmissionResolutionScale,Re.w*R.transmissionResolutionScale);const Ie=R.getRenderTarget();R.setRenderTarget(Se),R.getClearColor(ce),de=R.getClearAlpha(),de<1&&R.setClearColor(16777215,.5),R.clear(),ct&&Ke.render(ee);const Be=R.toneMapping;R.toneMapping=Lr;const tt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),x.setupLightsView($),ue===!0&&Me.setGlobalState(R.clippingPlanes,$),tr(A,ee,$),L.updateMultisampleRenderTarget(Se),L.updateRenderTargetMipmap(Se),vt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Ve=0,xt=X.length;Ve<xt;Ve++){const ot=X[Ve],jt=ot.object,zt=ot.geometry,St=ot.material,Ye=ot.group;if(St.side===$i&&jt.layers.test($.layers)){const Yt=St.side;St.side=Gn,St.needsUpdate=!0,Ma(jt,ee,$,zt,St,Ye),St.side=Yt,St.needsUpdate=!0,Je=!0}}Je===!0&&(L.updateMultisampleRenderTarget(Se),L.updateRenderTargetMipmap(Se))}R.setRenderTarget(Ie),R.setClearColor(ce,de),tt!==void 0&&($.viewport=tt),R.toneMapping=Be}function tr(A,X,ee){const $=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,Se=A.length;Y<Se;Y++){const Re=A[Y],Ie=Re.object,Be=Re.geometry,tt=$===null?Re.material:$,Je=Re.group;Ie.layers.test(ee.layers)&&Ma(Ie,X,ee,Be,tt,Je)}}function Ma(A,X,ee,$,Y,Se){A.onBeforeRender(R,X,ee,$,Y,Se),A.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(R,X,ee,$,A,Se),Y.transparent===!0&&Y.side===$i&&Y.forceSinglePass===!1?(Y.side=Gn,Y.needsUpdate=!0,R.renderBufferDirect(ee,X,$,Y,A,Se),Y.side=Dr,Y.needsUpdate=!0,R.renderBufferDirect(ee,X,$,Y,A,Se),Y.side=$i):R.renderBufferDirect(ee,X,$,Y,A,Se),A.onAfterRender(R,X,ee,$,Y,Se)}function ds(A,X,ee){X.isScene!==!0&&(X=Ct);const $=Ge.get(A),Y=x.state.lights,Se=x.state.shadowsArray,Re=Y.state.version,Ie=We.getParameters(A,Y.state,Se,X,ee),Be=We.getProgramCacheKey(Ie);let tt=$.programs;$.environment=A.isMeshStandardMaterial?X.environment:null,$.fog=X.fog,$.envMap=(A.isMeshStandardMaterial?Q:w).get(A.envMap||$.environment),$.envMapRotation=$.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,tt===void 0&&(A.addEventListener("dispose",st),tt=new Map,$.programs=tt);let Je=tt.get(Be);if(Je!==void 0){if($.currentProgram===Je&&$.lightsStateVersion===Re)return xi(A,Ie),Je}else Ie.uniforms=We.getUniforms(A),A.onBeforeCompile(Ie,R),Je=We.acquireProgram(Ie,Be),tt.set(Be,Je),$.uniforms=Ie.uniforms;const Ve=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ve.clippingPlanes=Me.uniform),xi(A,Ie),$.needsLights=Tu(A),$.lightsStateVersion=Re,$.needsLights&&(Ve.ambientLightColor.value=Y.state.ambient,Ve.lightProbe.value=Y.state.probe,Ve.directionalLights.value=Y.state.directional,Ve.directionalLightShadows.value=Y.state.directionalShadow,Ve.spotLights.value=Y.state.spot,Ve.spotLightShadows.value=Y.state.spotShadow,Ve.rectAreaLights.value=Y.state.rectArea,Ve.ltc_1.value=Y.state.rectAreaLTC1,Ve.ltc_2.value=Y.state.rectAreaLTC2,Ve.pointLights.value=Y.state.point,Ve.pointLightShadows.value=Y.state.pointShadow,Ve.hemisphereLights.value=Y.state.hemi,Ve.directionalShadowMap.value=Y.state.directionalShadowMap,Ve.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ve.spotShadowMap.value=Y.state.spotShadowMap,Ve.spotLightMatrix.value=Y.state.spotLightMatrix,Ve.spotLightMap.value=Y.state.spotLightMap,Ve.pointShadowMap.value=Y.state.pointShadowMap,Ve.pointShadowMatrix.value=Y.state.pointShadowMatrix),$.currentProgram=Je,$.uniformsList=null,Je}function Ea(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=uu.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function xi(A,X){const ee=Ge.get(A);ee.outputColorSpace=X.outputColorSpace,ee.batching=X.batching,ee.batchingColor=X.batchingColor,ee.instancing=X.instancing,ee.instancingColor=X.instancingColor,ee.instancingMorph=X.instancingMorph,ee.skinning=X.skinning,ee.morphTargets=X.morphTargets,ee.morphNormals=X.morphNormals,ee.morphColors=X.morphColors,ee.morphTargetsCount=X.morphTargetsCount,ee.numClippingPlanes=X.numClippingPlanes,ee.numIntersection=X.numClipIntersection,ee.vertexAlphas=X.vertexAlphas,ee.vertexTangents=X.vertexTangents,ee.toneMapping=X.toneMapping}function Ta(A,X,ee,$,Y){X.isScene!==!0&&(X=Ct),L.resetTextureUnits();const Se=X.fog,Re=$.isMeshStandardMaterial?X.environment:null,Ie=G===null?R.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:co,Be=($.isMeshStandardMaterial?Q:w).get($.envMap||Re),tt=$.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Je=!!ee.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ve=!!ee.morphAttributes.position,xt=!!ee.morphAttributes.normal,ot=!!ee.morphAttributes.color;let jt=Lr;$.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(jt=R.toneMapping);const zt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,St=zt!==void 0?zt.length:0,Ye=Ge.get($),Yt=x.state.lights;if(ue===!0&&(ye===!0||A!==b)){const dn=A===b&&$.id===P;Me.setState($,A,dn)}let _t=!1;$.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Yt.state.version||Ye.outputColorSpace!==Ie||Y.isBatchedMesh&&Ye.batching===!1||!Y.isBatchedMesh&&Ye.batching===!0||Y.isBatchedMesh&&Ye.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ye.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ye.instancing===!1||!Y.isInstancedMesh&&Ye.instancing===!0||Y.isSkinnedMesh&&Ye.skinning===!1||!Y.isSkinnedMesh&&Ye.skinning===!0||Y.isInstancedMesh&&Ye.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ye.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ye.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ye.instancingMorph===!1&&Y.morphTexture!==null||Ye.envMap!==Be||$.fog===!0&&Ye.fog!==Se||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Me.numPlanes||Ye.numIntersection!==Me.numIntersection)||Ye.vertexAlphas!==tt||Ye.vertexTangents!==Je||Ye.morphTargets!==Ve||Ye.morphNormals!==xt||Ye.morphColors!==ot||Ye.toneMapping!==jt||Ye.morphTargetsCount!==St)&&(_t=!0):(_t=!0,Ye.__version=$.version);let gn=Ye.currentProgram;_t===!0&&(gn=ds($,X,Y));let nr=!1,An=!1,Ii=!1;const It=gn.getUniforms(),vn=Ye.uniforms;if(je.useProgram(gn.program)&&(nr=!0,An=!0,Ii=!0),$.id!==P&&(P=$.id,An=!0),nr||b!==A){je.buffers.depth.getReversed()?(ge.copy(A.projectionMatrix),Ny(ge),Fy(ge),It.setValue(z,"projectionMatrix",ge)):It.setValue(z,"projectionMatrix",A.projectionMatrix),It.setValue(z,"viewMatrix",A.matrixWorldInverse);const on=It.map.cameraPosition;on!==void 0&&on.setValue(z,Le.setFromMatrixPosition(A.matrixWorld)),ht.logarithmicDepthBuffer&&It.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&It.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,An=!0,Ii=!0)}if(Y.isSkinnedMesh){It.setOptional(z,Y,"bindMatrix"),It.setOptional(z,Y,"bindMatrixInverse");const dn=Y.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),It.setValue(z,"boneTexture",dn.boneTexture,L))}Y.isBatchedMesh&&(It.setOptional(z,Y,"batchingTexture"),It.setValue(z,"batchingTexture",Y._matricesTexture,L),It.setOptional(z,Y,"batchingIdTexture"),It.setValue(z,"batchingIdTexture",Y._indirectTexture,L),It.setOptional(z,Y,"batchingColorTexture"),Y._colorsTexture!==null&&It.setValue(z,"batchingColorTexture",Y._colorsTexture,L));const sn=ee.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&et.update(Y,ee,gn),(An||Ye.receiveShadow!==Y.receiveShadow)&&(Ye.receiveShadow=Y.receiveShadow,It.setValue(z,"receiveShadow",Y.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(vn.envMap.value=Be,vn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&X.environment!==null&&(vn.envMapIntensity.value=X.environmentIntensity),An&&(It.setValue(z,"toneMappingExposure",R.toneMappingExposure),Ye.needsLights&&wa(vn,Ii),Se&&$.fog===!0&&we.refreshFogUniforms(vn,Se),we.refreshMaterialUniforms(vn,$,V,le,x.state.transmissionRenderTarget[A.id]),uu.upload(z,Ea(Ye),vn,L)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(uu.upload(z,Ea(Ye),vn,L),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&It.setValue(z,"center",Y.center),It.setValue(z,"modelViewMatrix",Y.modelViewMatrix),It.setValue(z,"normalMatrix",Y.normalMatrix),It.setValue(z,"modelMatrix",Y.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const dn=$.uniformsGroups;for(let on=0,Tt=dn.length;on<Tt;on++){const Si=dn[on];W.update(Si,gn),W.bind(Si,gn)}}return gn}function wa(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function Tu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(A,X,ee){Ge.get(A.texture).__webglTexture=X,Ge.get(A.depthTexture).__webglTexture=ee;const $=Ge.get(A);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=ee===void 0,$.__autoAllocateDepthBuffer||vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,X){const ee=Ge.get(A);ee.__webglFramebuffer=X,ee.__useDefaultFramebuffer=X===void 0};const Aa=z.createFramebuffer();this.setRenderTarget=function(A,X=0,ee=0){G=A,F=X,N=ee;let $=!0,Y=null,Se=!1,Re=!1;if(A){const Be=Ge.get(A);if(Be.__useDefaultFramebuffer!==void 0)je.bindFramebuffer(z.FRAMEBUFFER,null),$=!1;else if(Be.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(Be.__hasExternalTextures)L.rebindTextures(A,Ge.get(A.texture).__webglTexture,Ge.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ve=A.depthTexture;if(Be.__boundDepthTexture!==Ve){if(Ve!==null&&Ge.has(Ve)&&(A.width!==Ve.image.width||A.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const tt=A.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Re=!0);const Je=Ge.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Je[X])?Y=Je[X][ee]:Y=Je[X],Se=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?Y=Ge.get(A).__webglMultisampledFramebuffer:Array.isArray(Je)?Y=Je[ee]:Y=Je,O.copy(A.viewport),ae.copy(A.scissor),J=A.scissorTest}else O.copy(U).multiplyScalar(V).floor(),ae.copy(ne).multiplyScalar(V).floor(),J=be;if(ee!==0&&(Y=Aa),je.bindFramebuffer(z.FRAMEBUFFER,Y)&&$&&je.drawBuffers(A,Y),je.viewport(O),je.scissor(ae),je.setScissorTest(J),Se){const Be=Ge.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+X,Be.__webglTexture,ee)}else if(Re){const Be=Ge.get(A.texture),tt=X;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Be.__webglTexture,ee,tt)}else if(A!==null&&ee!==0){const Be=Ge.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Be.__webglTexture,ee)}P=-1},this.readRenderTargetPixels=function(A,X,ee,$,Y,Se,Re){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie){je.bindFramebuffer(z.FRAMEBUFFER,Ie);try{const Be=A.texture,tt=Be.format,Je=Be.type;if(!ht.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-$&&ee>=0&&ee<=A.height-Y&&z.readPixels(X,ee,$,Y,rt.convert(tt),rt.convert(Je),Se)}finally{const Be=G!==null?Ge.get(G).__webglFramebuffer:null;je.bindFramebuffer(z.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(A,X,ee,$,Y,Se,Re){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie){const Be=A.texture,tt=Be.format,Je=Be.type;if(!ht.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=A.width-$&&ee>=0&&ee<=A.height-Y){je.bindFramebuffer(z.FRAMEBUFFER,Ie);const Ve=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ve),z.bufferData(z.PIXEL_PACK_BUFFER,Se.byteLength,z.STREAM_READ),z.readPixels(X,ee,$,Y,rt.convert(tt),rt.convert(Je),0);const xt=G!==null?Ge.get(G).__webglFramebuffer:null;je.bindFramebuffer(z.FRAMEBUFFER,xt);const ot=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Uy(z,ot,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ve),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Se),z.deleteBuffer(Ve),z.deleteSync(ot),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,X=null,ee=0){A.isTexture!==!0&&(Zs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1]);const $=Math.pow(2,-ee),Y=Math.floor(A.image.width*$),Se=Math.floor(A.image.height*$),Re=X!==null?X.x:0,Ie=X!==null?X.y:0;L.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,ee,0,0,Re,Ie,Y,Se),je.unbindTexture()};const Ra=z.createFramebuffer(),Ca=z.createFramebuffer();this.copyTextureToTexture=function(A,X,ee=null,$=null,Y=0,Se=null){A.isTexture!==!0&&(Zs("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,A=arguments[1],X=arguments[2],Se=arguments[3]||0,ee=null),Se===null&&(Y!==0?(Zs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=Y,Y=0):Se=0);let Re,Ie,Be,tt,Je,Ve,xt,ot,jt;const zt=A.isCompressedTexture?A.mipmaps[Se]:A.image;if(ee!==null)Re=ee.max.x-ee.min.x,Ie=ee.max.y-ee.min.y,Be=ee.isBox3?ee.max.z-ee.min.z:1,tt=ee.min.x,Je=ee.min.y,Ve=ee.isBox3?ee.min.z:0;else{const sn=Math.pow(2,-Y);Re=Math.floor(zt.width*sn),Ie=Math.floor(zt.height*sn),A.isDataArrayTexture?Be=zt.depth:A.isData3DTexture?Be=Math.floor(zt.depth*sn):Be=1,tt=0,Je=0,Ve=0}$!==null?(xt=$.x,ot=$.y,jt=$.z):(xt=0,ot=0,jt=0);const St=rt.convert(X.format),Ye=rt.convert(X.type);let Yt;X.isData3DTexture?(L.setTexture3D(X,0),Yt=z.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(L.setTexture2DArray(X,0),Yt=z.TEXTURE_2D_ARRAY):(L.setTexture2D(X,0),Yt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,X.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,X.unpackAlignment);const _t=z.getParameter(z.UNPACK_ROW_LENGTH),gn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),nr=z.getParameter(z.UNPACK_SKIP_PIXELS),An=z.getParameter(z.UNPACK_SKIP_ROWS),Ii=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,zt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,zt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,tt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Je),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ve);const It=A.isDataArrayTexture||A.isData3DTexture,vn=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const sn=Ge.get(A),dn=Ge.get(X),on=Ge.get(sn.__renderTarget),Tt=Ge.get(dn.__renderTarget);je.bindFramebuffer(z.READ_FRAMEBUFFER,on.__webglFramebuffer),je.bindFramebuffer(z.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Si=0;Si<Be;Si++)It&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ge.get(A).__webglTexture,Y,Ve+Si),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ge.get(X).__webglTexture,Se,jt+Si)),z.blitFramebuffer(tt,Je,Re,Ie,xt,ot,Re,Ie,z.DEPTH_BUFFER_BIT,z.NEAREST);je.bindFramebuffer(z.READ_FRAMEBUFFER,null),je.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||Ge.has(A)){const sn=Ge.get(A),dn=Ge.get(X);je.bindFramebuffer(z.READ_FRAMEBUFFER,Ra),je.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ca);for(let on=0;on<Be;on++)It?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,sn.__webglTexture,Y,Ve+on):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,sn.__webglTexture,Y),vn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,dn.__webglTexture,Se,jt+on):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,dn.__webglTexture,Se),Y!==0?z.blitFramebuffer(tt,Je,Re,Ie,xt,ot,Re,Ie,z.COLOR_BUFFER_BIT,z.NEAREST):vn?z.copyTexSubImage3D(Yt,Se,xt,ot,jt+on,tt,Je,Re,Ie):z.copyTexSubImage2D(Yt,Se,xt,ot,tt,Je,Re,Ie);je.bindFramebuffer(z.READ_FRAMEBUFFER,null),je.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else vn?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(Yt,Se,xt,ot,jt,Re,Ie,Be,St,Ye,zt.data):X.isCompressedArrayTexture?z.compressedTexSubImage3D(Yt,Se,xt,ot,jt,Re,Ie,Be,St,zt.data):z.texSubImage3D(Yt,Se,xt,ot,jt,Re,Ie,Be,St,Ye,zt):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Se,xt,ot,Re,Ie,St,Ye,zt.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Se,xt,ot,zt.width,zt.height,St,zt.data):z.texSubImage2D(z.TEXTURE_2D,Se,xt,ot,Re,Ie,St,Ye,zt);z.pixelStorei(z.UNPACK_ROW_LENGTH,_t),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,gn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,nr),z.pixelStorei(z.UNPACK_SKIP_ROWS,An),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ii),Se===0&&X.generateMipmaps&&z.generateMipmap(Yt),je.unbindTexture()},this.copyTextureToTexture3D=function(A,X,ee=null,$=null,Y=0){return A.isTexture!==!0&&(Zs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,$=arguments[1]||null,A=arguments[2],X=arguments[3],Y=arguments[4]||0),Zs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,X,ee,$,Y)},this.initRenderTarget=function(A){Ge.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),je.unbindTexture()},this.resetState=function(){F=0,N=0,G=null,je.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var ri=Uint8Array,to=Uint16Array,qw=Int32Array,Dv=new ri([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Iv=new ri([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),$w=new ri([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Uv=function(o,e){for(var t=new to(31),i=0;i<31;++i)t[i]=e+=1<<o[i-1];for(var s=new qw(t[30]),i=1;i<30;++i)for(var a=t[i];a<t[i+1];++a)s[a]=a-t[i]<<5|i;return{b:t,r:s}},Nv=Uv(Dv,2),Fv=Nv.b,Kw=Nv.r;Fv[28]=258,Kw[258]=28;var Zw=Uv(Iv,0),Qw=Zw.b,Fd=new to(32768);for(var Bt=0;Bt<32768;++Bt){var Cr=(Bt&43690)>>1|(Bt&21845)<<1;Cr=(Cr&52428)>>2|(Cr&13107)<<2,Cr=(Cr&61680)>>4|(Cr&3855)<<4,Fd[Bt]=((Cr&65280)>>8|(Cr&255)<<8)>>1}var la=function(o,e,t){for(var i=o.length,s=0,a=new to(e);s<i;++s)o[s]&&++a[o[s]-1];var u=new to(e);for(s=1;s<e;++s)u[s]=u[s-1]+a[s-1]<<1;var c;if(t){c=new to(1<<e);var d=15-e;for(s=0;s<i;++s)if(o[s])for(var h=s<<4|o[s],g=e-o[s],m=u[o[s]-1]++<<g,v=m|(1<<g)-1;m<=v;++m)c[Fd[m]>>d]=h}else for(c=new to(i),s=0;s<i;++s)o[s]&&(c[s]=Fd[u[o[s]-1]++]>>15-o[s]);return c},Sa=new ri(288);for(var Bt=0;Bt<144;++Bt)Sa[Bt]=8;for(var Bt=144;Bt<256;++Bt)Sa[Bt]=9;for(var Bt=256;Bt<280;++Bt)Sa[Bt]=7;for(var Bt=280;Bt<288;++Bt)Sa[Bt]=8;var Ov=new ri(32);for(var Bt=0;Bt<32;++Bt)Ov[Bt]=5;var Jw=la(Sa,9,1),e1=la(Ov,5,1),Hf=function(o){for(var e=o[0],t=1;t<o.length;++t)o[t]>e&&(e=o[t]);return e},mi=function(o,e,t){var i=e/8|0;return(o[i]|o[i+1]<<8)>>(e&7)&t},Gf=function(o,e){var t=e/8|0;return(o[t]|o[t+1]<<8|o[t+2]<<16)>>(e&7)},t1=function(o){return(o+7)/8|0},n1=function(o,e,t){return(t==null||t>o.length)&&(t=o.length),new ri(o.subarray(e,t))},i1=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],gi=function(o,e,t){var i=new Error(e||i1[o]);if(i.code=o,Error.captureStackTrace&&Error.captureStackTrace(i,gi),!t)throw i;return i},r1=function(o,e,t,i){var s=o.length,a=0;if(!s||e.f&&!e.l)return t||new ri(0);var u=!t,c=u||e.i!=2,d=e.i;u&&(t=new ri(s*3));var h=function(Ct){var ct=t.length;if(Ct>ct){var Pt=new ri(Math.max(ct*2,Ct));Pt.set(t),t=Pt}},g=e.f||0,m=e.p||0,v=e.b||0,y=e.l,M=e.d,E=e.m,S=e.n,x=s*8;do{if(!y){g=mi(o,m,1);var I=mi(o,m+1,3);if(m+=3,I)if(I==1)y=Jw,M=e1,E=9,S=5;else if(I==2){var F=mi(o,m,31)+257,N=mi(o,m+10,15)+4,G=F+mi(o,m+5,31)+1;m+=14;for(var P=new ri(G),b=new ri(19),O=0;O<N;++O)b[$w[O]]=mi(o,m+O*3,7);m+=N*3;for(var ae=Hf(b),J=(1<<ae)-1,ce=la(b,ae,1),O=0;O<G;){var de=ce[mi(o,m,J)];m+=de&15;var C=de>>4;if(C<16)P[O++]=C;else{var se=0,le=0;for(C==16?(le=3+mi(o,m,3),m+=2,se=P[O-1]):C==17?(le=3+mi(o,m,7),m+=3):C==18&&(le=11+mi(o,m,127),m+=7);le--;)P[O++]=se}}var V=P.subarray(0,F),oe=P.subarray(F);E=Hf(V),S=Hf(oe),y=la(V,E,1),M=la(oe,S,1)}else gi(1);else{var C=t1(m)+4,R=o[C-4]|o[C-3]<<8,k=C+R;if(k>s){d&&gi(0);break}c&&h(v+R),t.set(o.subarray(C,k),v),e.b=v+=R,e.p=m=k*8,e.f=g;continue}if(m>x){d&&gi(0);break}}c&&h(v+131072);for(var re=(1<<E)-1,U=(1<<S)-1,ne=m;;ne=m){var se=y[Gf(o,m)&re],be=se>>4;if(m+=se&15,m>x){d&&gi(0);break}if(se||gi(2),be<256)t[v++]=be;else if(be==256){ne=m,y=null;break}else{var Z=be-254;if(be>264){var O=be-257,ue=Dv[O];Z=mi(o,m,(1<<ue)-1)+Fv[O],m+=ue}var ye=M[Gf(o,m)&U],ge=ye>>4;ye||gi(3),m+=ye&15;var oe=Qw[ge];if(ge>3){var ue=Iv[ge];oe+=Gf(o,m)&(1<<ue)-1,m+=ue}if(m>x){d&&gi(0);break}c&&h(v+131072);var Te=v+Z;if(v<oe){var Le=a-oe,$e=Math.min(oe,Te);for(Le+v<0&&gi(3);v<$e;++v)t[v]=i[Le+v]}for(;v<Te;++v)t[v]=t[v-oe]}}e.l=y,e.p=ne,e.b=v,e.f=g,y&&(g=1,e.m=E,e.d=M,e.n=S)}while(!g);return v!=t.length&&u?n1(t,0,v):t.subarray(0,v)},s1=new ri(0),o1=function(o,e){return((o[0]&15)!=8||o[0]>>4>7||(o[0]<<8|o[1])%31)&&gi(6,"invalid zlib data"),(o[1]>>5&1)==1&&gi(6,"invalid zlib data: "+(o[1]&32?"need":"unexpected")+" dictionary"),(o[1]>>3&4)+2};function a1(o,e){return r1(o.subarray(o1(o),-4),{i:2},e,e)}var l1=typeof TextDecoder<"u"&&new TextDecoder,u1=0;try{l1.decode(s1,{stream:!0}),u1=1}catch{}function kv(o,e,t){const i=t.length-o-1;if(e>=t[i])return i-1;if(e<=t[o])return o;let s=o,a=i,u=Math.floor((s+a)/2);for(;e<t[u]||e>=t[u+1];)e<t[u]?a=u:s=u,u=Math.floor((s+a)/2);return u}function c1(o,e,t,i){const s=[],a=[],u=[];s[0]=1;for(let c=1;c<=t;++c){a[c]=e-i[o+1-c],u[c]=i[o+c]-e;let d=0;for(let h=0;h<c;++h){const g=u[h+1],m=a[c-h],v=s[h]/(g+m);s[h]=d+g*v,d=m*v}s[c]=d}return s}function f1(o,e,t,i){const s=kv(o,i,e),a=c1(s,i,o,e),u=new yt(0,0,0,0);for(let c=0;c<=o;++c){const d=t[s-o+c],h=a[c],g=d.w*h;u.x+=d.x*g,u.y+=d.y*g,u.z+=d.z*g,u.w+=d.w*h}return u}function d1(o,e,t,i,s){const a=[];for(let m=0;m<=t;++m)a[m]=0;const u=[];for(let m=0;m<=i;++m)u[m]=a.slice(0);const c=[];for(let m=0;m<=t;++m)c[m]=a.slice(0);c[0][0]=1;const d=a.slice(0),h=a.slice(0);for(let m=1;m<=t;++m){d[m]=e-s[o+1-m],h[m]=s[o+m]-e;let v=0;for(let y=0;y<m;++y){const M=h[y+1],E=d[m-y];c[m][y]=M+E;const S=c[y][m-1]/c[m][y];c[y][m]=v+M*S,v=E*S}c[m][m]=v}for(let m=0;m<=t;++m)u[0][m]=c[m][t];for(let m=0;m<=t;++m){let v=0,y=1;const M=[];for(let E=0;E<=t;++E)M[E]=a.slice(0);M[0][0]=1;for(let E=1;E<=i;++E){let S=0;const x=m-E,I=t-E;m>=E&&(M[y][0]=M[v][0]/c[I+1][x],S=M[y][0]*c[x][I]);const C=x>=-1?1:-x,R=m-1<=I?E-1:t-m;for(let F=C;F<=R;++F)M[y][F]=(M[v][F]-M[v][F-1])/c[I+1][x+F],S+=M[y][F]*c[x+F][I];m<=I&&(M[y][E]=-M[v][E-1]/c[I+1][m],S+=M[y][E]*c[m][I]),u[E][m]=S;const k=v;v=y,y=k}}let g=t;for(let m=1;m<=i;++m){for(let v=0;v<=t;++v)u[m][v]*=g;g*=t-m}return u}function h1(o,e,t,i,s){const a=s<o?s:o,u=[],c=kv(o,i,e),d=d1(c,i,o,a,e),h=[];for(let g=0;g<t.length;++g){const m=t[g].clone(),v=m.w;m.x*=v,m.y*=v,m.z*=v,h[g]=m}for(let g=0;g<=a;++g){const m=h[c-o].clone().multiplyScalar(d[g][0]);for(let v=1;v<=o;++v)m.add(h[c-o+v].clone().multiplyScalar(d[g][v]));u[g]=m}for(let g=a+1;g<=s+1;++g)u[g]=new yt(0,0,0);return u}function p1(o,e){let t=1;for(let s=2;s<=o;++s)t*=s;let i=1;for(let s=2;s<=e;++s)i*=s;for(let s=2;s<=o-e;++s)i*=s;return t/i}function m1(o){const e=o.length,t=[],i=[];for(let a=0;a<e;++a){const u=o[a];t[a]=new j(u.x,u.y,u.z),i[a]=u.w}const s=[];for(let a=0;a<e;++a){const u=t[a].clone();for(let c=1;c<=a;++c)u.sub(s[a-c].clone().multiplyScalar(p1(a,c)*i[c]));s[a]=u.divideScalar(i[0])}return s}function g1(o,e,t,i,s){const a=h1(o,e,t,i,s);return m1(a)}class v1 extends hx{constructor(e,t,i,s,a){super();const u=t?t.length-1:0,c=i?i.length:0;this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=s||0,this.endKnot=a||u;for(let d=0;d<c;++d){const h=i[d];this.controlPoints[d]=new yt(h.x,h.y,h.z,h.w)}}getPoint(e,t=new j){const i=t,s=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),a=f1(this.degree,this.knots,this.controlPoints,s);return a.w!==1&&a.divideScalar(a.w),i.set(a.x,a.y,a.z)}getTangent(e,t=new j){const i=t,s=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),a=g1(this.degree,this.knots,this.controlPoints,s,1);return i.copy(a[1]).normalize(),i}toJSON(){const e=super.toJSON();return e.degree=this.degree,e.knots=[...this.knots],e.controlPoints=this.controlPoints.map(t=>t.toArray()),e.startKnot=this.startKnot,e.endKnot=this.endKnot,e}fromJSON(e){return super.fromJSON(e),this.degree=e.degree,this.knots=[...e.knots],this.controlPoints=e.controlPoints.map(t=>new yt(t[0],t[1],t[2],t[3])),this.startKnot=e.startKnot,this.endKnot=e.endKnot,this}}let dt,Kt,Ln;class _1 extends us{constructor(e){super(e)}load(e,t,i,s){const a=this,u=a.path===""?eS.extractUrlBase(e):a.path,c=new jx(this.manager);c.setPath(a.path),c.setResponseType("arraybuffer"),c.setRequestHeader(a.requestHeader),c.setWithCredentials(a.withCredentials),c.load(e,function(d){try{t(a.parse(d,u))}catch(h){s?s(h):console.error(h),a.manager.itemError(e)}},i,s)}parse(e,t){if(T1(e))dt=new E1().parse(e);else{const s=Vv(e);if(!w1(s))throw new Error("THREE.FBXLoader: Unknown format.");if(qg(s)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+qg(s));dt=new M1().parse(s)}const i=new qx(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new y1(i,this.manager).parse(dt)}}class y1{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){Kt=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),i=this.parseMaterials(t),s=this.parseDeformers(),a=new x1().parse(s);return this.parseScene(s,a,i),Ln}parseConnections(){const e=new Map;return"Connections"in dt&&dt.Connections.connections.forEach(function(i){const s=i[0],a=i[1],u=i[2];e.has(s)||e.set(s,{parents:[],children:[]});const c={ID:a,relationship:u};e.get(s).parents.push(c),e.has(a)||e.set(a,{parents:[],children:[]});const d={ID:s,relationship:u};e.get(a).children.push(d)}),e}parseImages(){const e={},t={};if("Video"in dt.Objects){const i=dt.Objects.Video;for(const s in i){const a=i[s],u=parseInt(s);if(e[u]=a.RelativeFilename||a.Filename,"Content"in a){const c=a.Content instanceof ArrayBuffer&&a.Content.byteLength>0,d=typeof a.Content=="string"&&a.Content!=="";if(c||d){const h=this.parseImage(i[s]);t[a.RelativeFilename||a.Filename]=h}}}}for(const i in e){const s=e[i];t[s]!==void 0?e[i]=t[s]:e[i]=e[i].split("\\").pop()}return e}parseImage(e){const t=e.Content,i=e.RelativeFilename||e.Filename,s=i.slice(i.lastIndexOf(".")+1).toLowerCase();let a;switch(s){case"bmp":a="image/bmp";break;case"jpg":case"jpeg":a="image/jpeg";break;case"png":a="image/png";break;case"tif":a="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",i),a="image/tga";break;default:console.warn('FBXLoader: Image type "'+s+'" is not supported.');return}if(typeof t=="string")return"data:"+a+";base64,"+t;{const u=new Uint8Array(t);return window.URL.createObjectURL(new Blob([u],{type:a}))}}parseTextures(e){const t=new Map;if("Texture"in dt.Objects){const i=dt.Objects.Texture;for(const s in i){const a=this.parseTexture(i[s],e);t.set(parseInt(s),a)}}return t}parseTexture(e,t){const i=this.loadTexture(e,t);i.ID=e.id,i.name=e.attrName;const s=e.WrapModeU,a=e.WrapModeV,u=s!==void 0?s.value:0,c=a!==void 0?a.value:0;if(i.wrapS=u===0?ca:Ki,i.wrapT=c===0?ca:Ki,"Scaling"in e){const d=e.Scaling.value;i.repeat.x=d[0],i.repeat.y=d[1]}if("Translation"in e){const d=e.Translation.value;i.offset.x=d[0],i.offset.y=d[1]}return i}loadTexture(e,t){const i=new Set(["tga","tif","tiff","exr","dds","hdr","ktx2"]),s=e.FileName.split(".").pop().toLowerCase(),a=i.has(s)?this.manager.getHandler(`.${s}`):this.textureLoader;if(!a)return console.warn(`FBXLoader: ${s.toUpperCase()} loader not found, creating placeholder texture for`,e.RelativeFilename),new mn;const u=a.path;u||a.setPath(this.textureLoader.path);const c=Kt.get(e.id).children;let d;c!==void 0&&c.length>0&&t[c[0].ID]!==void 0&&(d=t[c[0].ID],(d.indexOf("blob:")===0||d.indexOf("data:")===0)&&a.setPath(void 0));const h=a.load(d);return a.setPath(u),h}parseMaterials(e){const t=new Map;if("Material"in dt.Objects){const i=dt.Objects.Material;for(const s in i){const a=this.parseMaterial(i[s],e);a!==null&&t.set(parseInt(s),a)}}return t}parseMaterial(e,t){const i=e.id,s=e.attrName;let a=e.ShadingModel;if(typeof a=="object"&&(a=a.value),!Kt.has(i))return null;const u=this.parseParameters(e,t,i);let c;switch(a.toLowerCase()){case"phong":c=new Df;break;case"lambert":c=new Lx;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',a),c=new Df;break}return c.setValues(u),c.name=s,c}parseParameters(e,t,i){const s={};e.BumpFactor&&(s.bumpScale=e.BumpFactor.value),e.Diffuse?s.color=ut.toWorkingColorSpace(new it().fromArray(e.Diffuse.value),kt):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(s.color=ut.toWorkingColorSpace(new it().fromArray(e.DiffuseColor.value),kt)),e.DisplacementFactor&&(s.displacementScale=e.DisplacementFactor.value),e.Emissive?s.emissive=ut.toWorkingColorSpace(new it().fromArray(e.Emissive.value),kt):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(s.emissive=ut.toWorkingColorSpace(new it().fromArray(e.EmissiveColor.value),kt)),e.EmissiveFactor&&(s.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),s.opacity=1-(e.TransparencyFactor?parseFloat(e.TransparencyFactor.value):0),(s.opacity===1||s.opacity===0)&&(s.opacity=e.Opacity?parseFloat(e.Opacity.value):null,s.opacity===null&&(s.opacity=1-(e.TransparentColor?parseFloat(e.TransparentColor.value[0]):0))),s.opacity<1&&(s.transparent=!0),e.ReflectionFactor&&(s.reflectivity=e.ReflectionFactor.value),e.Shininess&&(s.shininess=e.Shininess.value),e.Specular?s.specular=ut.toWorkingColorSpace(new it().fromArray(e.Specular.value),kt):e.SpecularColor&&e.SpecularColor.type==="Color"&&(s.specular=ut.toWorkingColorSpace(new it().fromArray(e.SpecularColor.value),kt));const a=this;return Kt.get(i).children.forEach(function(u){const c=u.relationship;switch(c){case"Bump":s.bumpMap=a.getTexture(t,u.ID);break;case"Maya|TEX_ao_map":s.aoMap=a.getTexture(t,u.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":s.map=a.getTexture(t,u.ID),s.map!==void 0&&(s.map.colorSpace=kt);break;case"DisplacementColor":s.displacementMap=a.getTexture(t,u.ID);break;case"EmissiveColor":s.emissiveMap=a.getTexture(t,u.ID),s.emissiveMap!==void 0&&(s.emissiveMap.colorSpace=kt);break;case"NormalMap":case"Maya|TEX_normal_map":s.normalMap=a.getTexture(t,u.ID);break;case"ReflectionColor":s.envMap=a.getTexture(t,u.ID),s.envMap!==void 0&&(s.envMap.mapping=cu,s.envMap.colorSpace=kt);break;case"SpecularColor":s.specularMap=a.getTexture(t,u.ID),s.specularMap!==void 0&&(s.specularMap.colorSpace=kt);break;case"TransparentColor":case"TransparencyFactor":s.alphaMap=a.getTexture(t,u.ID),s.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",c);break}}),s}getTexture(e,t){return"LayeredTexture"in dt.Objects&&t in dt.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=Kt.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in dt.Objects){const i=dt.Objects.Deformer;for(const s in i){const a=i[s],u=Kt.get(parseInt(s));if(a.attrType==="Skin"){const c=this.parseSkeleton(u,i);c.ID=s,u.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),c.geometryID=u.parents[0].ID,e[s]=c}else if(a.attrType==="BlendShape"){const c={id:s};c.rawTargets=this.parseMorphTargets(u,i),c.id=s,u.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[s]=c}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const i=[];return e.children.forEach(function(s){const a=t[s.ID];if(a.attrType!=="Cluster")return;const u={ID:s.ID,indices:[],weights:[],transformLink:new qe().fromArray(a.TransformLink.a)};"Indexes"in a&&(u.indices=a.Indexes.a,u.weights=a.Weights.a),i.push(u)}),{rawBones:i,bones:[]}}parseMorphTargets(e,t){const i=[];for(let s=0;s<e.children.length;s++){const a=e.children[s],u=t[a.ID],c={name:u.attrName,initialWeight:u.DeformPercent,id:u.id,fullWeights:u.FullWeights.a};if(u.attrType!=="BlendShapeChannel")return;c.geoID=Kt.get(parseInt(a.ID)).children.filter(function(d){return d.relationship===void 0})[0].ID,i.push(c)}return i}parseScene(e,t,i){Ln=new Qs;const s=this.parseModels(e.skeletons,t,i),a=dt.Objects.Model,u=this;s.forEach(function(d){const h=a[d.ID];u.setLookAtProperties(d,h),Kt.get(d.ID).parents.forEach(function(m){const v=s.get(m.ID);v!==void 0&&v.add(d)}),d.parent===null&&Ln.add(d)}),this.bindSkeleton(e.skeletons,t,s),this.addGlobalSceneSettings(),Ln.traverse(function(d){if(d.userData.transformData){d.parent&&(d.userData.transformData.parentMatrix=d.parent.matrix,d.userData.transformData.parentMatrixWorld=d.parent.matrixWorld);const h=zv(d.userData.transformData);d.applyMatrix4(h),d.updateWorldMatrix()}});const c=new S1().parse();Ln.children.length===1&&Ln.children[0].isGroup&&(Ln.children[0].animations=c,Ln=Ln.children[0]),Ln.animations=c}parseModels(e,t,i){const s=new Map,a=dt.Objects.Model;for(const u in a){const c=parseInt(u),d=a[u],h=Kt.get(c);let g=this.buildSkeleton(h,e,c,d.attrName);if(!g){switch(d.attrType){case"Camera":g=this.createCamera(h);break;case"Light":g=this.createLight(h);break;case"Mesh":g=this.createMesh(h,t,i);break;case"NurbsCurve":g=this.createCurve(h,t);break;case"LimbNode":case"Root":g=new Ld;break;case"Null":default:g=new Qs;break}g.name=d.attrName?Rt.sanitizeNodeName(d.attrName):"",g.userData.originalName=d.attrName,g.ID=c}this.getTransformData(g,d),s.set(c,g)}return s}buildSkeleton(e,t,i,s){let a=null;return e.parents.forEach(function(u){for(const c in t){const d=t[c];d.rawBones.forEach(function(h,g){if(h.ID===u.ID){const m=a;a=new Ld,a.matrixWorld.copy(h.transformLink),a.name=s?Rt.sanitizeNodeName(s):"",a.userData.originalName=s,a.ID=i,d.bones[g]=a,m!==null&&a.add(m)}})}}),a}createCamera(e){let t,i;if(e.children.forEach(function(s){const a=dt.Objects.NodeAttribute[s.ID];a!==void 0&&(i=a)}),i===void 0)t=new Ht;else{let s=0;i.CameraProjectionType!==void 0&&i.CameraProjectionType.value===1&&(s=1);let a=1;i.NearPlane!==void 0&&(a=i.NearPlane.value/1e3);let u=1e3;i.FarPlane!==void 0&&(u=i.FarPlane.value/1e3);let c=window.innerWidth,d=window.innerHeight;i.AspectWidth!==void 0&&i.AspectHeight!==void 0&&(c=i.AspectWidth.value,d=i.AspectHeight.value);const h=c/d;let g=45;i.FieldOfView!==void 0&&(g=i.FieldOfView.value);const m=i.FocalLength?i.FocalLength.value:null;switch(s){case 0:t=new In(g,h,a,u),m!==null&&t.setFocalLength(m);break;case 1:console.warn("THREE.FBXLoader: Orthographic cameras not supported yet."),t=new Ht;break;default:console.warn("THREE.FBXLoader: Unknown camera type "+s+"."),t=new Ht;break}}return t}createLight(e){let t,i;if(e.children.forEach(function(s){const a=dt.Objects.NodeAttribute[s.ID];a!==void 0&&(i=a)}),i===void 0)t=new Ht;else{let s;i.LightType===void 0?s=0:s=i.LightType.value;let a=16777215;i.Color!==void 0&&(a=ut.toWorkingColorSpace(new it().fromArray(i.Color.value),kt));let u=i.Intensity===void 0?1:i.Intensity.value/100;i.CastLightOnObject!==void 0&&i.CastLightOnObject.value===0&&(u=0);let c=0;i.FarAttenuationEnd!==void 0&&(i.EnableFarAttenuation!==void 0&&i.EnableFarAttenuation.value===0?c=0:c=i.FarAttenuationEnd.value);const d=1;switch(s){case 0:t=new Ud(a,u,c,d);break;case 1:t=new Jx(a,u);break;case 2:let h=Math.PI/3;i.InnerAngle!==void 0&&(h=Dn.degToRad(i.InnerAngle.value));let g=0;i.OuterAngle!==void 0&&(g=Dn.degToRad(i.OuterAngle.value),g=Math.max(g,1)),t=new Kx(a,u,c,h,g,d);break;default:console.warn("THREE.FBXLoader: Unknown light type "+i.LightType.value+", defaulting to a PointLight."),t=new Ud(a,u);break}i.CastShadows!==void 0&&i.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,i){let s,a=null,u=null;const c=[];return e.children.forEach(function(d){t.has(d.ID)&&(a=t.get(d.ID)),i.has(d.ID)&&c.push(i.get(d.ID))}),c.length>1?u=c:c.length>0?u=c[0]:(u=new Df({name:us.DEFAULT_MATERIAL_NAME,color:13421772}),c.push(u)),"color"in a.attributes&&c.forEach(function(d){d.vertexColors=!0}),a.FBX_Deformer?(s=new ax(a,u),s.normalizeSkinWeights()):s=new _i(a,u),s}createCurve(e,t){const i=e.children.reduce(function(a,u){return t.has(u.ID)&&(a=t.get(u.ID)),a},null),s=new _v({name:us.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new dx(i,s)}getTransformData(e,t){const i={};"InheritType"in t&&(i.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?i.eulerOrder=_a(t.RotationOrder.value):i.eulerOrder=_a(0),"Lcl_Translation"in t&&(i.translation=t.Lcl_Translation.value),"PreRotation"in t&&(i.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(i.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(i.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(i.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(i.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(i.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(i.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(i.rotationPivot=t.RotationPivot.value),e.userData.transformData=i}setLookAtProperties(e,t){"LookAtProperty"in t&&Kt.get(e.ID).children.forEach(function(s){if(s.relationship==="LookAtProperty"){const a=dt.Objects.Model[s.ID];if("Lcl_Translation"in a){const u=a.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(u),Ln.add(e.target)):e.lookAt(new j().fromArray(u))}}})}bindSkeleton(e,t,i){const s=this.parsePoseNodes();for(const a in e){const u=e[a];Kt.get(parseInt(u.ID)).parents.forEach(function(d){if(t.has(d.ID)){const h=d.ID;Kt.get(h).parents.forEach(function(m){i.has(m.ID)&&i.get(m.ID).bind(new $d(u.bones),s[m.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in dt.Objects){const t=dt.Objects.Pose;for(const i in t)if(t[i].attrType==="BindPose"&&t[i].NbPoseNodes>0){const s=t[i].PoseNode;Array.isArray(s)?s.forEach(function(a){e[a.Node]=new qe().fromArray(a.Matrix.a)}):e[s.Node]=new qe().fromArray(s.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in dt){if("AmbientColor"in dt.GlobalSettings){const e=dt.GlobalSettings.AmbientColor.value,t=e[0],i=e[1],s=e[2];if(t!==0||i!==0||s!==0){const a=new it().setRGB(t,i,s,kt);Ln.add(new Av(a,1))}}"UnitScaleFactor"in dt.GlobalSettings&&(Ln.userData.unitScaleFactor=dt.GlobalSettings.UnitScaleFactor.value)}}}class x1{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in dt.Objects){const i=dt.Objects.Geometry;for(const s in i){const a=Kt.get(parseInt(s)),u=this.parseGeometry(a,i[s],e);t.set(parseInt(s),u)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,i){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,i);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,i){const s=i.skeletons,a=[],u=e.parents.map(function(m){return dt.Objects.Model[m.ID]});if(u.length===0)return;const c=e.children.reduce(function(m,v){return s[v.ID]!==void 0&&(m=s[v.ID]),m},null);e.children.forEach(function(m){i.morphTargets[m.ID]!==void 0&&a.push(i.morphTargets[m.ID])});const d=u[0],h={};"RotationOrder"in d&&(h.eulerOrder=_a(d.RotationOrder.value)),"InheritType"in d&&(h.inheritType=parseInt(d.InheritType.value)),"GeometricTranslation"in d&&(h.translation=d.GeometricTranslation.value),"GeometricRotation"in d&&(h.rotation=d.GeometricRotation.value),"GeometricScaling"in d&&(h.scale=d.GeometricScaling.value);const g=zv(h);return this.genGeometry(t,c,a,g)}genGeometry(e,t,i,s){const a=new yi;e.attrName&&(a.name=e.attrName);const u=this.parseGeoNode(e,t),c=this.genBuffers(u),d=new Hn(c.vertex,3);if(d.applyMatrix4(s),a.setAttribute("position",d),c.colors.length>0&&a.setAttribute("color",new Hn(c.colors,3)),t&&(a.setAttribute("skinIndex",new qd(c.weightsIndices,4)),a.setAttribute("skinWeight",new Hn(c.vertexWeights,4)),a.FBX_Deformer=t),c.normal.length>0){const h=new at().getNormalMatrix(s),g=new Hn(c.normal,3);g.applyNormalMatrix(h),a.setAttribute("normal",g)}if(c.uvs.forEach(function(h,g){const m=g===0?"uv":`uv${g}`;a.setAttribute(m,new Hn(c.uvs[g],2))}),u.material&&u.material.mappingType!=="AllSame"){let h=c.materialIndex[0],g=0;if(c.materialIndex.forEach(function(m,v){m!==h&&(a.addGroup(g,v-g,h),h=m,g=v)}),a.groups.length>0){const m=a.groups[a.groups.length-1],v=m.start+m.count;v!==c.materialIndex.length&&a.addGroup(v,c.materialIndex.length-v,h)}a.groups.length===0&&a.addGroup(0,c.materialIndex.length,c.materialIndex[0])}return this.addMorphTargets(a,e,i,s),a}parseGeoNode(e,t){const i={};if(i.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],i.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(i.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(i.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(i.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){i.uv=[];let s=0;for(;e.LayerElementUV[s];)e.LayerElementUV[s].UV&&i.uv.push(this.parseUVs(e.LayerElementUV[s])),s++}return i.weightTable={},t!==null&&(i.skeleton=t,t.rawBones.forEach(function(s,a){s.indices.forEach(function(u,c){i.weightTable[u]===void 0&&(i.weightTable[u]=[]),i.weightTable[u].push({id:a,weight:s.weights[c]})})})),i}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let i=0,s=0,a=!1,u=[],c=[],d=[],h=[],g=[],m=[];const v=this;return e.vertexIndices.forEach(function(y,M){let E,S=!1;y<0&&(y=y^-1,S=!0);let x=[],I=[];if(u.push(y*3,y*3+1,y*3+2),e.color){const C=iu(M,i,y,e.color);d.push(C[0],C[1],C[2])}if(e.skeleton){if(e.weightTable[y]!==void 0&&e.weightTable[y].forEach(function(C){I.push(C.weight),x.push(C.id)}),I.length>4){a||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),a=!0);const C=[0,0,0,0],R=[0,0,0,0];I.forEach(function(k,F){let N=k,G=x[F];R.forEach(function(P,b,O){if(N>P){O[b]=N,N=P;const ae=C[b];C[b]=G,G=ae}})}),x=C,I=R}for(;I.length<4;)I.push(0),x.push(0);for(let C=0;C<4;++C)g.push(I[C]),m.push(x[C])}if(e.normal){const C=iu(M,i,y,e.normal);c.push(C[0],C[1],C[2])}e.material&&e.material.mappingType!=="AllSame"&&(E=iu(M,i,y,e.material)[0],E<0&&(v.negativeMaterialIndices=!0,E=0)),e.uv&&e.uv.forEach(function(C,R){const k=iu(M,i,y,C);h[R]===void 0&&(h[R]=[]),h[R].push(k[0]),h[R].push(k[1])}),s++,S&&(v.genFace(t,e,u,E,c,d,h,g,m,s),i++,s=0,u=[],c=[],d=[],h=[],g=[],m=[])}),t}getNormalNewell(e){const t=new j(0,0,0);for(let i=0;i<e.length;i++){const s=e[i],a=e[(i+1)%e.length];t.x+=(s.y-a.y)*(s.z+a.z),t.y+=(s.z-a.z)*(s.x+a.x),t.z+=(s.x-a.x)*(s.y+a.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){const t=this.getNormalNewell(e),s=(Math.abs(t.z)>.5?new j(0,1,0):new j(0,0,1)).cross(t).normalize(),a=t.clone().cross(s).normalize();return{normal:t,tangent:s,bitangent:a}}flattenVertex(e,t,i){return new Mt(e.dot(t),e.dot(i))}genFace(e,t,i,s,a,u,c,d,h,g){let m;if(g>3){const v=[],y=t.baseVertexPositions||t.vertexPositions;for(let x=0;x<i.length;x+=3)v.push(new j(y[i[x]],y[i[x+1]],y[i[x+2]]));const{tangent:M,bitangent:E}=this.getNormalTangentAndBitangent(v),S=[];for(const x of v)S.push(this.flattenVertex(x,M,E));m=Zd.triangulateShape(S,[])}else m=[[0,1,2]];for(const[v,y,M]of m)e.vertex.push(t.vertexPositions[i[v*3]]),e.vertex.push(t.vertexPositions[i[v*3+1]]),e.vertex.push(t.vertexPositions[i[v*3+2]]),e.vertex.push(t.vertexPositions[i[y*3]]),e.vertex.push(t.vertexPositions[i[y*3+1]]),e.vertex.push(t.vertexPositions[i[y*3+2]]),e.vertex.push(t.vertexPositions[i[M*3]]),e.vertex.push(t.vertexPositions[i[M*3+1]]),e.vertex.push(t.vertexPositions[i[M*3+2]]),t.skeleton&&(e.vertexWeights.push(d[v*4]),e.vertexWeights.push(d[v*4+1]),e.vertexWeights.push(d[v*4+2]),e.vertexWeights.push(d[v*4+3]),e.vertexWeights.push(d[y*4]),e.vertexWeights.push(d[y*4+1]),e.vertexWeights.push(d[y*4+2]),e.vertexWeights.push(d[y*4+3]),e.vertexWeights.push(d[M*4]),e.vertexWeights.push(d[M*4+1]),e.vertexWeights.push(d[M*4+2]),e.vertexWeights.push(d[M*4+3]),e.weightsIndices.push(h[v*4]),e.weightsIndices.push(h[v*4+1]),e.weightsIndices.push(h[v*4+2]),e.weightsIndices.push(h[v*4+3]),e.weightsIndices.push(h[y*4]),e.weightsIndices.push(h[y*4+1]),e.weightsIndices.push(h[y*4+2]),e.weightsIndices.push(h[y*4+3]),e.weightsIndices.push(h[M*4]),e.weightsIndices.push(h[M*4+1]),e.weightsIndices.push(h[M*4+2]),e.weightsIndices.push(h[M*4+3])),t.color&&(e.colors.push(u[v*3]),e.colors.push(u[v*3+1]),e.colors.push(u[v*3+2]),e.colors.push(u[y*3]),e.colors.push(u[y*3+1]),e.colors.push(u[y*3+2]),e.colors.push(u[M*3]),e.colors.push(u[M*3+1]),e.colors.push(u[M*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(s),e.materialIndex.push(s),e.materialIndex.push(s)),t.normal&&(e.normal.push(a[v*3]),e.normal.push(a[v*3+1]),e.normal.push(a[v*3+2]),e.normal.push(a[y*3]),e.normal.push(a[y*3+1]),e.normal.push(a[y*3+2]),e.normal.push(a[M*3]),e.normal.push(a[M*3+1]),e.normal.push(a[M*3+2])),t.uv&&t.uv.forEach(function(E,S){e.uvs[S]===void 0&&(e.uvs[S]=[]),e.uvs[S].push(c[S][v*2]),e.uvs[S].push(c[S][v*2+1]),e.uvs[S].push(c[S][y*2]),e.uvs[S].push(c[S][y*2+1]),e.uvs[S].push(c[S][M*2]),e.uvs[S].push(c[S][M*2+1])})}addMorphTargets(e,t,i,s){if(i.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const a=this;i.forEach(function(u){u.rawTargets.forEach(function(c){const d=dt.Objects.Geometry[c.geoID];d!==void 0&&a.genMorphGeometry(e,t,d,s,c.name)})})}genMorphGeometry(e,t,i,s,a){const u=t.Vertices!==void 0?t.Vertices.a:[],c=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],d=i.Vertices!==void 0?i.Vertices.a:[],h=i.Indexes!==void 0?i.Indexes.a:[],g=e.attributes.position.count*3,m=new Float32Array(g);for(let E=0;E<h.length;E++){const S=h[E]*3;m[S]=d[E*3],m[S+1]=d[E*3+1],m[S+2]=d[E*3+2]}const v={vertexIndices:c,vertexPositions:m,baseVertexPositions:u},y=this.genBuffers(v),M=new Hn(y.vertex,3);M.name=a||i.attrName,M.applyMatrix4(s),e.morphAttributes.position.push(M)}parseNormals(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,s=e.Normals.a;let a=[];return i==="IndexToDirect"&&("NormalIndex"in e?a=e.NormalIndex.a:"NormalsIndex"in e&&(a=e.NormalsIndex.a)),{dataSize:3,buffer:s,indices:a,mappingType:t,referenceType:i}}parseUVs(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,s=e.UV.a;let a=[];return i==="IndexToDirect"&&(a=e.UVIndex.a),{dataSize:2,buffer:s,indices:a,mappingType:t,referenceType:i}}parseVertexColors(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,s=e.Colors.a;let a=[];i==="IndexToDirect"&&(a=e.ColorIndex.a);for(let u=0,c=new it;u<s.length;u+=4)c.fromArray(s,u),ut.toWorkingColorSpace(c,kt),c.toArray(s,u);return{dataSize:4,buffer:s,indices:a,mappingType:t,referenceType:i}}parseMaterialIndices(e){const t=e.MappingInformationType,i=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:i};const s=e.Materials.a,a=[];for(let u=0;u<s.length;++u)a.push(u);return{dataSize:1,buffer:s,indices:a,mappingType:t,referenceType:i}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new yi;const i=t-1,s=e.KnotVector.a,a=[],u=e.Points.a;for(let m=0,v=u.length;m<v;m+=4)a.push(new yt().fromArray(u,m));let c,d;if(e.Form==="Closed")a.push(a[0]);else if(e.Form==="Periodic"){c=i,d=s.length-1-c;for(let m=0;m<i;++m)a.push(a[m])}const g=new v1(i,s,a,c,d).getPoints(a.length*12);return new yi().setFromPoints(g)}}class S1{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const i in t){const s=t[i],a=this.addClip(s);e.push(a)}return e}parseClips(){if(dt.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=dt.Objects.AnimationCurveNode,t=new Map;for(const i in e){const s=e[i];if(s.attrName.match(/S|R|T|DeformPercent/)!==null){const a={id:s.id,attr:s.attrName,curves:{}};t.set(a.id,a)}}return t}parseAnimationCurves(e){const t=dt.Objects.AnimationCurve;for(const i in t){const s={id:t[i].id,times:t[i].KeyTime.a.map(A1),values:t[i].KeyValueFloat.a},a=Kt.get(s.id);if(a!==void 0){const u=a.parents[0].ID,c=a.parents[0].relationship;c.match(/X/)?e.get(u).curves.x=s:c.match(/Y/)?e.get(u).curves.y=s:c.match(/Z/)?e.get(u).curves.z=s:c.match(/DeformPercent/)&&e.has(u)&&(e.get(u).curves.morph=s)}}}parseAnimationLayers(e){const t=dt.Objects.AnimationLayer,i=new Map;for(const s in t){const a=[],u=Kt.get(parseInt(s));u!==void 0&&(u.children.forEach(function(d,h){if(e.has(d.ID)){const g=e.get(d.ID);if(g.curves.x!==void 0||g.curves.y!==void 0||g.curves.z!==void 0){if(a[h]===void 0){const m=Kt.get(d.ID).parents.filter(function(v){return v.relationship!==void 0})[0].ID;if(m!==void 0){const v=dt.Objects.Model[m.toString()];if(v===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",d);return}const y={modelName:v.attrName?Rt.sanitizeNodeName(v.attrName):"",ID:v.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Ln.traverse(function(M){M.ID===v.id&&(y.transform=M.matrix,M.userData.transformData&&(y.eulerOrder=M.userData.transformData.eulerOrder))}),y.transform||(y.transform=new qe),"PreRotation"in v&&(y.preRotation=v.PreRotation.value),"PostRotation"in v&&(y.postRotation=v.PostRotation.value),a[h]=y}}a[h]&&(a[h][g.attr]=g)}else if(g.curves.morph!==void 0){if(a[h]===void 0){const m=Kt.get(d.ID).parents.filter(function(x){return x.relationship!==void 0})[0].ID,v=Kt.get(m).parents[0].ID,y=Kt.get(v).parents[0].ID,M=Kt.get(y).parents[0].ID,E=dt.Objects.Model[M],S={modelName:E.attrName?Rt.sanitizeNodeName(E.attrName):"",morphName:dt.Objects.Deformer[m].attrName};a[h]=S}a[h][g.attr]=g}}}),i.set(parseInt(s),a))}return i}parseAnimStacks(e){const t=dt.Objects.AnimationStack,i={};for(const s in t){const a=Kt.get(parseInt(s)).children;a.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const u=e.get(a[0].ID);i[s]={name:t[s].attrName,layer:u}}return i}addClip(e){let t=[];const i=this;return e.layer.forEach(function(s){t=t.concat(i.generateTracks(s))}),new zx(e.name,-1,t)}generateTracks(e){const t=[];let i=new j,s=new j;if(e.transform&&e.transform.decompose(i,new Vn,s),i=i.toArray(),s=s.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const a=this.generateVectorTrack(e.modelName,e.T.curves,i,"position");a!==void 0&&t.push(a)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const a=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder);a!==void 0&&t.push(a)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const a=this.generateVectorTrack(e.modelName,e.S.curves,s,"scale");a!==void 0&&t.push(a)}if(e.DeformPercent!==void 0){const a=this.generateMorphTrack(e);a!==void 0&&t.push(a)}return t}generateVectorTrack(e,t,i,s){const a=this.getTimesForAllAxes(t),u=this.getKeyframeTrackValues(a,t,i);return new va(e+"."+s,a,u)}generateRotationTrack(e,t,i,s,a){let u,c;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){const v=this.interpolateRotations(t.x,t.y,t.z,a);u=v[0],c=v[1]}const d=_a(0);i!==void 0&&(i=i.map(Dn.degToRad),i.push(d),i=new fn().fromArray(i),i=new Vn().setFromEuler(i)),s!==void 0&&(s=s.map(Dn.degToRad),s.push(d),s=new fn().fromArray(s),s=new Vn().setFromEuler(s).invert());const h=new Vn,g=new fn,m=[];if(!c||!u)return new po(e+".quaternion",[0],[0]);for(let v=0;v<c.length;v+=3)g.set(c[v],c[v+1],c[v+2],a),h.setFromEuler(g),i!==void 0&&h.premultiply(i),s!==void 0&&h.multiply(s),v>2&&new Vn().fromArray(m,(v-3)/3*4).dot(h)<0&&h.set(-h.x,-h.y,-h.z,-h.w),h.toArray(m,v/3*4);return new po(e+".quaternion",u,m)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,i=t.values.map(function(a){return a/100}),s=Ln.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new ga(e.modelName+".morphTargetInfluences["+s+"]",t.times,i)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(i,s){return i-s}),t.length>1){let i=1,s=t[0];for(let a=1;a<t.length;a++){const u=t[a];u!==s&&(t[i]=u,s=u,i++)}t=t.slice(0,i)}return t}getKeyframeTrackValues(e,t,i){const s=i,a=[];let u=-1,c=-1,d=-1;return e.forEach(function(h){if(t.x&&(u=t.x.times.indexOf(h)),t.y&&(c=t.y.times.indexOf(h)),t.z&&(d=t.z.times.indexOf(h)),u!==-1){const g=t.x.values[u];a.push(g),s[0]=g}else a.push(s[0]);if(c!==-1){const g=t.y.values[c];a.push(g),s[1]=g}else a.push(s[1]);if(d!==-1){const g=t.z.values[d];a.push(g),s[2]=g}else a.push(s[2])}),a}interpolateRotations(e,t,i,s){const a=[],u=[];a.push(e.times[0]),u.push(Dn.degToRad(e.values[0])),u.push(Dn.degToRad(t.values[0])),u.push(Dn.degToRad(i.values[0]));for(let c=1;c<e.values.length;c++){const d=[e.values[c-1],t.values[c-1],i.values[c-1]];if(isNaN(d[0])||isNaN(d[1])||isNaN(d[2]))continue;const h=d.map(Dn.degToRad),g=[e.values[c],t.values[c],i.values[c]];if(isNaN(g[0])||isNaN(g[1])||isNaN(g[2]))continue;const m=g.map(Dn.degToRad),v=[g[0]-d[0],g[1]-d[1],g[2]-d[2]],y=[Math.abs(v[0]),Math.abs(v[1]),Math.abs(v[2])];if(y[0]>=180||y[1]>=180||y[2]>=180){const E=Math.max(...y)/180,S=new fn(...h,s),x=new fn(...m,s),I=new Vn().setFromEuler(S),C=new Vn().setFromEuler(x);I.dot(C)&&C.set(-C.x,-C.y,-C.z,-C.w);const R=e.times[c-1],k=e.times[c]-R,F=new Vn,N=new fn;for(let G=0;G<1;G+=1/E)F.copy(I.clone().slerp(C.clone(),G)),a.push(R+G*k),N.setFromQuaternion(F,s),u.push(N.x),u.push(N.y),u.push(N.z)}else a.push(e.times[c]),u.push(Dn.degToRad(e.values[c])),u.push(Dn.degToRad(t.values[c])),u.push(Dn.degToRad(i.values[c]))}return[a,u]}}class M1{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new Bv,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,i=e.split(/[\r\n]+/);return i.forEach(function(s,a){const u=s.match(/^[\s\t]*;/),c=s.match(/^[\s\t]*$/);if(u||c)return;const d=s.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),h=s.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),g=s.match("^\\t{"+(t.currentIndent-1)+"}}");d?t.parseNodeBegin(s,d):h?t.parseNodeProperty(s,h,i[++a]):g?t.popStack():s.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(s)}),this.allNodes}parseNodeBegin(e,t){const i=t[1].trim().replace(/^"/,"").replace(/"$/,""),s=t[2].split(",").map(function(d){return d.trim().replace(/^"/,"").replace(/"$/,"")}),a={name:i},u=this.parseNodeAttr(s),c=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(i,a):i in c?(i==="PoseNode"?c.PoseNode.push(a):c[i].id!==void 0&&(c[i]={},c[i][c[i].id]=c[i]),u.id!==""&&(c[i][u.id]=a)):typeof u.id=="number"?(c[i]={},c[i][u.id]=a):i!=="Properties70"&&(i==="PoseNode"?c[i]=[a]:c[i]=a),typeof u.id=="number"&&(a.id=u.id),u.name!==""&&(a.attrName=u.name),u.type!==""&&(a.attrType=u.type),this.pushStack(a)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let i="",s="";return e.length>1&&(i=e[1].replace(/^(\w+)::/,""),s=e[2]),{id:t,name:i,type:s}}parseNodeProperty(e,t,i){let s=t[1].replace(/^"/,"").replace(/"$/,"").trim(),a=t[2].replace(/^"/,"").replace(/"$/,"").trim();s==="Content"&&a===","&&(a=i.replace(/"/g,"").replace(/,$/,"").trim());const u=this.getCurrentNode();if(u.name==="Properties70"){this.parseNodeSpecialProperty(e,s,a);return}if(s==="C"){const d=a.split(",").slice(1),h=parseInt(d[0]),g=parseInt(d[1]);let m=a.split(",").slice(3);m=m.map(function(v){return v.trim().replace(/^"/,"")}),s="connections",a=[h,g],C1(a,m),u[s]===void 0&&(u[s]=[])}s==="Node"&&(u.id=a),s in u&&Array.isArray(u[s])?u[s].push(a):s!=="a"?u[s]=a:u.a=a,this.setCurrentProp(u,s),s==="a"&&a.slice(-1)!==","&&(u.a=Xf(a))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=Xf(t.a))}parseNodeSpecialProperty(e,t,i){const s=i.split('",').map(function(g){return g.trim().replace(/^\"/,"").replace(/\s/,"_")}),a=s[0],u=s[1],c=s[2],d=s[3];let h=s[4];switch(u){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":h=parseFloat(h);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":h=Xf(h);break}this.getPrevNode()[a]={type:u,type2:c,flag:d,value:h},this.setCurrentProp(this.getPrevNode(),a)}}class E1{parse(e){const t=new Yg(e);t.skip(23);const i=t.getUint32();if(i<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+i);const s=new Bv;for(;!this.endOfContent(t);){const a=this.parseNode(t,i);a!==null&&s.add(a.name,a)}return s}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const i={},s=t>=7500?e.getUint64():e.getUint32(),a=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const u=e.getUint8(),c=e.getString(u);if(s===0)return null;const d=[];for(let v=0;v<a;v++)d.push(this.parseProperty(e));const h=d.length>0?d[0]:"",g=d.length>1?d[1]:"",m=d.length>2?d[2]:"";for(i.singleProperty=a===1&&e.getOffset()===s;s>e.getOffset();){const v=this.parseNode(e,t);v!==null&&this.parseSubNode(c,i,v)}return i.propertyList=d,typeof h=="number"&&(i.id=h),g!==""&&(i.attrName=g),m!==""&&(i.attrType=m),c!==""&&(i.name=c),i}parseSubNode(e,t,i){if(i.singleProperty===!0){const s=i.propertyList[0];Array.isArray(s)?(t[i.name]=i,i.a=s):t[i.name]=s}else if(e==="Connections"&&i.name==="C"){const s=[];i.propertyList.forEach(function(a,u){u!==0&&s.push(a)}),t.connections===void 0&&(t.connections=[]),t.connections.push(s)}else if(i.name==="Properties70")Object.keys(i).forEach(function(a){t[a]=i[a]});else if(e==="Properties70"&&i.name==="P"){let s=i.propertyList[0],a=i.propertyList[1];const u=i.propertyList[2],c=i.propertyList[3];let d;s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),a.indexOf("Lcl ")===0&&(a=a.replace("Lcl ","Lcl_")),a==="Color"||a==="ColorRGB"||a==="Vector"||a==="Vector3D"||a.indexOf("Lcl_")===0?d=[i.propertyList[4],i.propertyList[5],i.propertyList[6]]:d=i.propertyList[4],t[s]={type:a,type2:u,flag:c,value:d}}else t[i.name]===void 0?typeof i.id=="number"?(t[i.name]={},t[i.name][i.id]=i):t[i.name]=i:i.name==="PoseNode"?(Array.isArray(t[i.name])||(t[i.name]=[t[i.name]]),t[i.name].push(i)):t[i.name][i.id]===void 0&&(t[i.name][i.id]=i)}parseProperty(e){const t=e.getString(1);let i;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return i=e.getUint32(),e.getArrayBuffer(i);case"S":return i=e.getUint32(),e.getString(i);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const s=e.getUint32(),a=e.getUint32(),u=e.getUint32();if(a===0)switch(t){case"b":case"c":return e.getBooleanArray(s);case"d":return e.getFloat64Array(s);case"f":return e.getFloat32Array(s);case"i":return e.getInt32Array(s);case"l":return e.getInt64Array(s)}const c=a1(new Uint8Array(e.getArrayBuffer(u))),d=new Yg(c.buffer);switch(t){case"b":case"c":return d.getBooleanArray(s);case"d":return d.getFloat64Array(s);case"f":return d.getFloat32Array(s);case"i":return d.getInt32Array(s);case"l":return d.getInt64Array(s)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class Yg{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let i=0;i<e;i++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let i=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const s=i.indexOf(0);return s>=0&&(i=new Uint8Array(this.dv.buffer,t,s)),this._textDecoder.decode(i)}}class Bv{add(e,t){this[e]=t}}function T1(o){const e="Kaydara FBX Binary  \0";return o.byteLength>=e.length&&e===Vv(o,0,e.length)}function w1(o){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function i(s){const a=o[s-1];return o=o.slice(t+s),t++,a}for(let s=0;s<e.length;++s)if(i(1)===e[s])return!1;return!0}function qg(o){const e=/FBXVersion: (\d+)/,t=o.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function A1(o){return o/46186158e3}const R1=[];function iu(o,e,t,i){let s;switch(i.mappingType){case"ByPolygonVertex":s=o;break;case"ByPolygon":s=e;break;case"ByVertice":s=t;break;case"AllSame":s=i.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+i.mappingType)}i.referenceType==="IndexToDirect"&&(s=i.indices[s]);const a=s*i.dataSize,u=a+i.dataSize;return b1(R1,i.buffer,a,u)}const Wf=new fn,$s=new j;function zv(o){const e=new qe,t=new qe,i=new qe,s=new qe,a=new qe,u=new qe,c=new qe,d=new qe,h=new qe,g=new qe,m=new qe,v=new qe,y=o.inheritType?o.inheritType:0;o.translation&&e.setPosition($s.fromArray(o.translation));const M=_a(0);if(o.preRotation){const O=o.preRotation.map(Dn.degToRad);O.push(M),t.makeRotationFromEuler(Wf.fromArray(O))}if(o.rotation){const O=o.rotation.map(Dn.degToRad);O.push(o.eulerOrder||M),i.makeRotationFromEuler(Wf.fromArray(O))}if(o.postRotation){const O=o.postRotation.map(Dn.degToRad);O.push(M),s.makeRotationFromEuler(Wf.fromArray(O)),s.invert()}o.scale&&a.scale($s.fromArray(o.scale)),o.scalingOffset&&c.setPosition($s.fromArray(o.scalingOffset)),o.scalingPivot&&u.setPosition($s.fromArray(o.scalingPivot)),o.rotationOffset&&d.setPosition($s.fromArray(o.rotationOffset)),o.rotationPivot&&h.setPosition($s.fromArray(o.rotationPivot)),o.parentMatrixWorld&&(m.copy(o.parentMatrix),g.copy(o.parentMatrixWorld));const E=t.clone().multiply(i).multiply(s),S=new qe;S.extractRotation(g);const x=new qe;x.copyPosition(g);const I=x.clone().invert().multiply(g),C=S.clone().invert().multiply(I),R=a,k=new qe;if(y===0)k.copy(S).multiply(E).multiply(C).multiply(R);else if(y===1)k.copy(S).multiply(C).multiply(E).multiply(R);else{const ae=new qe().scale(new j().setFromMatrixScale(m)).clone().invert(),J=C.clone().multiply(ae);k.copy(S).multiply(E).multiply(J).multiply(R)}const F=h.clone().invert(),N=u.clone().invert();let G=e.clone().multiply(d).multiply(h).multiply(t).multiply(i).multiply(s).multiply(F).multiply(c).multiply(u).multiply(a).multiply(N);const P=new qe().copyPosition(G),b=g.clone().multiply(P);return v.copyPosition(b),G=v.clone().multiply(k),G.premultiply(g.invert()),G}function _a(o){o=o||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return o===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[o]}function Xf(o){return o.split(",").map(function(t){return parseFloat(t)})}function Vv(o,e,t){return e===void 0&&(e=0),t===void 0&&(t=o.byteLength),new TextDecoder().decode(new Uint8Array(o,e,t))}function C1(o,e){for(let t=0,i=o.length,s=e.length;t<s;t++,i++)o[i]=e[t]}function b1(o,e,t,i){for(let s=t,a=0;s<i;s++,a++)o[a]=e[s];return o}const P1=()=>{const o=jf.useRef(null);return jf.useEffect(()=>{const e=new sx,t=new In(75,window.innerWidth/window.innerHeight,.1,1e3),i=new Yw({canvas:o.current});i.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(i.domElement),e.background=new it(16777215),i.shadowMap.enabled=!1;const s=new Av(16777215,2);e.add(s);const a=new Ud(16777215,2,100);a.position.set(0,5,5),e.add(a);const u=new _1;let c;u.load("/moovit.fbx",k=>{c=k,e.add(c),c.position.set(0,.5,0),c.scale.set(.0015,.0015,.0015),c.traverse(F=>{F.isMesh&&(F.castShadow=!1,F.receiveShadow=!1)})}),t.position.z=5;let d=!1,h=0,g=0,m=0,v=0,y=0,M=0;const E=.005,S=.99,x=k=>{d=!0,h=k.clientX,g=k.clientY},I=()=>{d=!1},C=k=>{if(d){const F=k.clientX-h;y=(k.clientY-g)*E,M=F*E,h=k.clientX,g=k.clientY}};window.addEventListener("mousedown",x),window.addEventListener("mouseup",I),window.addEventListener("mousemove",C);const R=k=>{requestAnimationFrame(R),m+=y,v+=M,y*=S,M*=S,c&&(c.rotation.x=m,c.rotation.y=v),!d&&M<.001&&(M=0),!d&&y<.001&&(y=0),i.render(e,t)};return R(),()=>{window.removeEventListener("mousedown",x),window.removeEventListener("mouseup",I),window.removeEventListener("mousemove",C),c&&(e.remove(c),c.traverse(k=>{k.geometry&&k.geometry.dispose(),k.material&&k.material.dispose()})),i.dispose()}},[]),ua.jsx("canvas",{ref:o,style:{position:"absolute",top:0,left:0}})};function L1(){return ua.jsx("div",{children:ua.jsx(P1,{})})}R0.createRoot(document.getElementById("root")).render(ua.jsx(jf.StrictMode,{children:ua.jsx(L1,{})}));
