(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[567],{2842:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/agreement",function(){return n(2800)}])},2800:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c}});var o=n(5893);n(7294);var a=n(7814),r=n.n(a),i=n(3719),s=n(3845),l=n(142),u=n(5880),c=!0;t.default=e=>{let{localization:t}=e;return(0,o.jsx)(s.Z,{localization:t,children:(0,o.jsxs)("div",{className:r().privacy,children:[(0,o.jsx)(i.Z,{localization:t,withUser:!0,userRequired:!1,withLanding:!1}),(0,o.jsx)("main",{className:r().privacy__main,children:(0,o.jsx)(u.Z,{t:t.AGREEMENT,isPage:!0})}),(0,o.jsx)(l.Z,{localization:t})]})})}},7814:function(e){e.exports={carousel:"privacy_carousel__t9fp9","control-dots":"privacy_control-dots__JA4Zd",privacy:"privacy_privacy__DFp2A",privacy__main:"privacy_privacy__main__QRDUV",runningLine:"privacy_runningLine__YPKyq",runningLineSecondary:"privacy_runningLineSecondary__w068_",fadeInAnimation:"privacy_fadeInAnimation__D5Vcx",fadeOutAnimation:"privacy_fadeOutAnimation__0mLyF",wavy:"privacy_wavy__WKMuU","wavy-reversed":"privacy_wavy-reversed__hGiew",figureIncrease:"privacy_figureIncrease__fZu8A",carPropertyAnimation:"privacy_carPropertyAnimation__Stb02",carPropertyAnimationOut:"privacy_carPropertyAnimationOut___YKFA",largeBookButtonText:"privacy_largeBookButtonText__GciSa",largeBookButtonTextMedium:"privacy_largeBookButtonTextMedium__Zi7uX",largeBookButtonTextOut:"privacy_largeBookButtonTextOut__F_28u",largeBookButtonIcon:"privacy_largeBookButtonIcon__ynB6t",largeBookButtonIconOut:"privacy_largeBookButtonIconOut__JQJNj",detailItemFadeout:"privacy_detailItemFadeout__CfWK0",detailTitle:"privacy_detailTitle__xX8zX",detailTitleOut:"privacy_detailTitleOut__mUbJO",pulse:"privacy_pulse__VFWsV",textShine:"privacy_textShine__vuhfp"}},6627:function(e,t,n){e.exports=n(3462)},3462:function(e,t,n){"use strict";var o,a=(o=n(7294))&&"object"==typeof o&&"default"in o?o.default:o,r=n(3935);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function s(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=function(e,t,n,o,a,r,i,s){if(!e){var l;if(void 0===t)l=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,o,a,r,i,s],c=0;(l=Error(t.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation"}throw l.framesToPop=1,l}};function u(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var o=e.createTextRange();o.collapse(!0),o.moveStart("character",t),o.moveEnd("character",n-t),o.select()}}var c={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"};function p(e,t,n){var o="",a="",r=null,i=[];if(void 0===t&&(t="_"),null==n&&(n=c),!e||"string"!=typeof e)return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var s=!1;return e.split("").forEach(function(e){s=!s&&"\\"===e||(s||!n[e]?(i.push(o.length),o.length===i.length-1&&(a+=e)):r=o.length+1,o+=e,!1)}),{maskChar:t,formatChars:n,prefix:a,mask:o,lastEditablePosition:r,permanents:i}}function f(e,t){return -1!==e.permanents.indexOf(t)}function h(e,t,n){var o=e.mask,a=e.formatChars;if(!n)return!1;if(f(e,t))return o[t]===n;var r=a[o[t]];return new RegExp(r).test(n)}function v(e,t){return t.split("").every(function(t,n){return f(e,n)||!h(e,n,t)})}function d(e,t){var n=e.maskChar,o=e.prefix;if(!n){for(;t.length>o.length&&f(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var a=o.length,r=t.length;r>=o.length;r--){var i=t[r];if(!f(e,r)&&h(e,r,i)){a=r+1;break}}return a}function m(e,t){return d(e,t)===e.mask.length}function g(e,t){var n=e.maskChar,o=e.mask,a=e.prefix;if(!n){for((t=k(e,"",t,0)).length<a.length&&(t=a);t.length<o.length&&f(e,t.length);)t+=o[t.length];return t}if(t)return k(e,g(e,""),t,0);for(var r=0;r<o.length;r++)f(e,r)?t+=o[r]:t+=n;return t}function k(e,t,n,o){var a=e.mask,r=e.maskChar,i=e.prefix,s=n.split(""),l=m(e,t);return!r&&o>t.length&&(t+=a.slice(t.length,o)),s.every(function(n){for(var s,u;f(e,u=o)&&n!==a[u];){if(o>=t.length&&(t+=a[o]),s=o,r&&f(e,s)&&n===r)return!0;if(++o>=a.length)return!1}return!h(e,o,n)&&n!==r||(o<t.length?t=r||l||o<i.length?t.slice(0,o)+n+t.slice(o+1):(t=t.slice(0,o)+n+t.slice(o),g(e,t)):r||(t+=n),++o<a.length)}),t}function _(e,t){for(var n=e.mask,o=t;o<n.length;++o)if(!f(e,o))return o;return null}function w(e){return e||0===e?e+"":""}function y(e){return"function"==typeof e}function S(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function O(e){return(S()?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame:function(){return setTimeout(e,1e3/60)})(e)}function C(e){(S()||clearTimeout)(e)}var I=function(e){function t(t){var n=e.call(this,t)||this;n.focused=!1,n.mounted=!1,n.previousSelection=null,n.selectionDeferId=null,n.saveSelectionLoopDeferId=null,n.saveSelectionLoop=function(){n.previousSelection=n.getSelection(),n.saveSelectionLoopDeferId=O(n.saveSelectionLoop)},n.runSaveSelectionLoop=function(){null===n.saveSelectionLoopDeferId&&n.saveSelectionLoop()},n.stopSaveSelectionLoop=function(){null!==n.saveSelectionLoopDeferId&&(C(n.saveSelectionLoopDeferId),n.saveSelectionLoopDeferId=null,n.previousSelection=null)},n.getInputDOMNode=function(){if(!n.mounted)return null;var e=r.findDOMNode(s(s(n))),t="undefined"!=typeof window&&e instanceof window.Element;if(e&&!t)return null;if("INPUT"!==e.nodeName&&(e=e.querySelector("input")),!e)throw Error("react-input-mask: inputComponent doesn't contain input node");return e},n.getInputValue=function(){var e=n.getInputDOMNode();return e?e.value:null},n.setInputValue=function(e){var t=n.getInputDOMNode();t&&(n.value=e,t.value=e)},n.setCursorToEnd=function(){var e=d(n.maskOptions,n.value),t=_(n.maskOptions,e);null!==t&&n.setCursorPosition(t)},n.setSelection=function(e,t,o){void 0===o&&(o={});var a=n.getInputDOMNode(),r=n.isFocused();a&&r&&(o.deferred||u(a,e,t),null!==n.selectionDeferId&&C(n.selectionDeferId),n.selectionDeferId=O(function(){n.selectionDeferId=null,u(a,e,t)}),n.previousSelection={start:e,end:t,length:Math.abs(t-e)})},n.getSelection=function(){return function(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var o=document.selection.createRange();o.parentElement()===e&&(t=-o.moveStart("character",-e.value.length),n=-o.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}(n.getInputDOMNode())},n.getCursorPosition=function(){return n.getSelection().start},n.setCursorPosition=function(e){n.setSelection(e,e)},n.isFocused=function(){return n.focused},n.getBeforeMaskedValueChangeConfig=function(){var e=n.maskOptions,t=e.mask,o=e.maskChar,a=e.permanents,r=e.formatChars;return{mask:t,maskChar:o,permanents:a,alwaysShowMask:!!n.props.alwaysShowMask,formatChars:r}},n.isInputAutofilled=function(e,t,o,a){var r=n.getInputDOMNode();try{if(r.matches(":-webkit-autofill"))return!0}catch(e){}return!n.focused||a.end<o.length&&t.end===e.length},n.onChange=function(e){var t,o,a,r,i,l,u,c,p,v,d,m,w,S,O,C,I,M,D,b=s(s(n)).beforePasteState,B=s(s(n)).previousSelection,x=n.props.beforeMaskedValueChange,E=n.getInputValue(),V=n.value,P=n.getSelection();n.isInputAutofilled(E,P,V,B)&&(V=g(n.maskOptions,""),B={start:0,end:0,length:0}),b&&(B=b.selection,V=b.value,P={start:B.start+E.length,end:B.start+E.length,length:0},E=V.slice(0,B.start)+E+V.slice(B.end),n.beforePasteState=null);var A=(t=n.maskOptions,o=E,a=P,r=V,i=B,m=t.mask,w=t.prefix,S=t.lastEditablePosition,O=o,C="",I=0,M=0,D=Math.min(i.start,a.start),a.end>i.start?(l=C=O.slice(i.start,a.end),u=D,c=t.mask,p=t.maskChar,v=l.split(""),d=u,v.every(function(e){for(var n;f(t,n=u)&&e!==c[n];)if(++u>=c.length)return!1;return(h(t,u,e)||e===p)&&u++,u<c.length}),M=(I=u-d)?i.length:0):O.length<r.length&&(M=r.length-O.length),O=r,M&&(1!==M||i.length||(D=i.start===a.start?_(t,a.start):function(e,t){for(var n=t;0<=n;--n)if(!f(e,n))return n;return null}(t,a.start)),O=function(e,t,n,o){var a=n+o,r=e.maskChar,i=e.mask,s=e.prefix,l=t.split("");if(r)return l.map(function(t,o){return o<n||a<=o?t:f(e,o)?i[o]:r}).join("");for(var u=a;u<l.length;u++)f(e,u)&&(l[u]="");return n=Math.max(s.length,n),l.splice(n,a-n),g(e,t=l.join(""))}(t,O,D,M)),O=k(t,O,C,D),(D+=I)>=m.length?D=m.length:D<w.length&&!I?D=w.length:D>=w.length&&D<S&&I&&(D=_(t,D)),C||(C=null),{value:O=g(t,O),enteredString:C,selection:{start:D,end:D}}),L=A.enteredString,T=A.selection,F=A.value;if(y(x)){var N=x({value:F,selection:T},{value:V,selection:B},L,n.getBeforeMaskedValueChangeConfig());F=N.value,T=N.selection}n.setInputValue(F),y(n.props.onChange)&&n.props.onChange(e),n.isWindowsPhoneBrowser?n.setSelection(T.start,T.end,{deferred:!0}):n.setSelection(T.start,T.end)},n.onFocus=function(e){var t=n.props.beforeMaskedValueChange,o=n.maskOptions,a=o.mask,r=o.prefix;if(n.focused=!0,n.mounted=!0,a){if(n.value)d(n.maskOptions,n.value)<n.maskOptions.mask.length&&n.setCursorToEnd();else{var i=g(n.maskOptions,r),s=g(n.maskOptions,i),l=d(n.maskOptions,s),u=_(n.maskOptions,l),c={start:u,end:u};if(y(t)){var p=t({value:s,selection:c},{value:n.value,selection:null},null,n.getBeforeMaskedValueChangeConfig());s=p.value,c=p.selection}var f=s!==n.getInputValue();f&&n.setInputValue(s),f&&y(n.props.onChange)&&n.props.onChange(e),n.setSelection(c.start,c.end)}n.runSaveSelectionLoop()}y(n.props.onFocus)&&n.props.onFocus(e)},n.onBlur=function(e){var t=n.props.beforeMaskedValueChange,o=n.maskOptions.mask;if(n.stopSaveSelectionLoop(),n.focused=!1,o&&!n.props.alwaysShowMask&&v(n.maskOptions,n.value)){var a="";y(t)&&(a=t({value:a,selection:null},{value:n.value,selection:n.previousSelection},null,n.getBeforeMaskedValueChangeConfig()).value);var r=a!==n.getInputValue();r&&n.setInputValue(a),r&&y(n.props.onChange)&&n.props.onChange(e)}y(n.props.onBlur)&&n.props.onBlur(e)},n.onMouseDown=function(e){!n.focused&&document.addEventListener&&(n.mouseDownX=e.clientX,n.mouseDownY=e.clientY,n.mouseDownTime=(new Date).getTime(),document.addEventListener("mouseup",function e(t){if(document.removeEventListener("mouseup",e),n.focused){var o=Math.max(Math.abs(t.clientX-n.mouseDownX),Math.abs(t.clientY-n.mouseDownY)),a=(new Date).getTime()-n.mouseDownTime;(o<=10&&a<=200||o<=5&&a<=300)&&n.setCursorToEnd()}})),y(n.props.onMouseDown)&&n.props.onMouseDown(e)},n.onPaste=function(e){y(n.props.onPaste)&&n.props.onPaste(e),e.defaultPrevented||(n.beforePasteState={value:n.getInputValue(),selection:n.getSelection()},n.setInputValue(""))},n.handleRef=function(e){null==n.props.children&&y(n.props.inputRef)&&n.props.inputRef(e)};var o=t.mask,a=t.maskChar,i=t.formatChars,l=t.alwaysShowMask,c=t.beforeMaskedValueChange,m=t.defaultValue,S=t.value;n.maskOptions=p(o,a,i),null==m&&(m=""),null==S&&(S=m);var I=w(S);if(n.maskOptions.mask&&(l||I)&&(I=g(n.maskOptions,I),y(c))){var M=t.value;null==t.value&&(M=m),I=c({value:I,selection:null},{value:M=w(M),selection:null},null,n.getBeforeMaskedValueChangeConfig()).value}return n.value=I,n}t.prototype=Object.create(e.prototype),function(e,t){for(var n=Object.getOwnPropertyNames(t),o=0;o<n.length;o++){var a=n[o],r=Object.getOwnPropertyDescriptor(t,a);r&&r.configurable&&void 0===e[a]&&Object.defineProperty(e,a,r)}}(t.prototype.constructor=t,e);var n=t.prototype;return n.componentDidMount=function(){var e;this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=(e=navigator.userAgent,/windows/i.test(e)&&/phone/i.test(e)),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var e=this.previousSelection,t=this.props,n=t.beforeMaskedValueChange,o=t.alwaysShowMask,a=t.mask,r=t.maskChar,i=t.formatChars,s=this.maskOptions,l=o||this.isFocused(),u=null!=this.props.value,c=u?w(this.props.value):this.value,f=e?e.start:null;if(this.maskOptions=p(a,r,i),this.maskOptions.mask){!s.mask&&this.isFocused()&&this.runSaveSelectionLoop();var h=this.maskOptions.mask&&this.maskOptions.mask!==s.mask;if(s.mask||u||(c=this.getInputValue()),(h||this.maskOptions.mask&&(c||l))&&(c=g(this.maskOptions,c)),h){var k=d(this.maskOptions,c);(null===f||k<f)&&(f=m(this.maskOptions,c)?k:_(this.maskOptions,k))}!this.maskOptions.mask||!v(this.maskOptions,c)||l||u&&this.props.value||(c="");var S={start:f,end:f};if(y(n)){var O=n({value:c,selection:S},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());c=O.value,S=O.selection}this.value=c;var C=this.getInputValue()!==this.value;C?(this.setInputValue(this.value),this.forceUpdate()):h&&this.forceUpdate();var I=!1;null!=S.start&&null!=S.end&&(I=!e||e.start!==S.start||e.end!==S.end),(I||C)&&this.setSelection(S.start,S.end)}else s.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,null!==this.selectionDeferId&&C(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var e,t=this.props,n=(t.mask,t.alwaysShowMask,t.maskChar,t.formatChars,t.inputRef,t.beforeMaskedValueChange,t.children),o=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)0<=t.indexOf(n=r[o])||(a[n]=e[n]);return a}(t,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(n){y(n)||l(!1);var r=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=i({},o);r.forEach(function(e){return delete s[e]}),e=n(s),r.filter(function(t){return null!=e.props[t]&&e.props[t]!==o[t]}).length&&l(!1)}else e=a.createElement("input",i({ref:this.handleRef},o));var u={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(o.disabled||o.readOnly||(u.onChange=this.onChange,u.onPaste=this.onPaste,u.onMouseDown=this.onMouseDown),null!=o.value&&(u.value=this.value)),e=a.cloneElement(e,u)},t}(a.Component);e.exports=I}},function(e){e.O(0,[664,762,135,142,774,888,179],function(){return e(e.s=2842)}),_N_E=e.O()}]);