(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[867],{6814:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/order-external",function(){return r(6945)}])},411:function(e,t,r){"use strict";r.d(t,{AM:function(){return u},GU:function(){return d},Wh:function(){return p},b_:function(){return c},bk:function(){return a},c$:function(){return _},dV:function(){return s},g2:function(){return i},mR:function(){return m},nL:function(){return h},q_:function(){return f},yk:function(){return l},zs:function(){return x}});var n=r(1775);let o="auth/",a=e=>n.V.post("".concat(o,"jwt/create/"),e),l=e=>n.V.post("".concat(o,"jwt/logout/"),e),i=e=>n.V.post("".concat(o,"users/reset_password/"),e),s=e=>n.V.post("".concat(o,"users/reset_password_confirm/"),e),u=e=>n.V.post("".concat(o,"users/"),e),_=async e=>await n.V.post("".concat(o,"users/keys/"),e),c=async e=>await n.V.post("".concat(o,"users/iframe/"),e),d=async e=>n.V.post("".concat(o,"users/keys_activation/"),e),p=e=>n.V.post("".concat(o,"users/activation/"),e),f=()=>(0,n.z)().get("".concat(o,"users/me/")),h=e=>(0,n.z)().patch("".concat(o,"users/me/"),e),m=e=>(0,n.z)().post("".concat(o,"users/set_email/"),e),x=e=>(0,n.z)().post("".concat(o,"users/set_password/"),e)},153:function(e,t,r){"use strict";r.d(t,{C:function(){return o}});var n=r(1775);let o=e=>n.V.get("car_categories/",{params:e})},8476:function(e,t,r){"use strict";r.d(t,{$W:function(){return s},DF:function(){return o},nQ:function(){return i}});var n,o,a=r(1775);let l="keys/",i=e=>(0,a.z)().get("".concat(l,"me"),{params:e});(n=o||(o={})).NEW="new",n.DONE="done",n.CANCELED="canceled";let s=async e=>await (0,a.z)().post(l,e)},3273:function(e,t,r){"use strict";r.d(t,{XT:function(){return s},kt:function(){return i},nV:function(){return u}});var n=r(2344),o=r(3577);r(7294);var a=r(9101),l=r(9574);let i=e=>{var t;return null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.detail},s=e=>"+".concat((0,n.yV)(e)),u=e=>{let{error:t,formFields:r,formPrefix:n,dispatch:i,router:s,popupProps:u,errorPageData:_,isPage:c}=e;console.log(t);let d=t.response.data,p=null==d?void 0:d.detail,f=e=>{c?((0,o.OO)(i,{..._,text:e||_.text}),s.push((0,a.T)(l.l.ERROR))):u&&(0,o.Ar)(i,{visibility:!0,props:{...u,message:e||u.message}})};if(p)f(p);else if(d){let e=!1;r.forEach(t=>{if(d){let r=n?d[n]?d[n][t.apiKey]:[]:d[t.apiKey];(null==r?void 0:r.length)&&(e=!0),t.setErrors((null==r?void 0:r.length)?r:[])}else t.setErrors([])});let t=Object.keys(d);!e&&t.length&&f(d[t[0]][0])}}},1229:function(e,t,r){"use strict";var n,o,a,l;r.d(t,{t:function(){return n},x:function(){return o}}),(a=n||(n={})).DECIMAL="decimal",a.INTEGER="integer",(l=o||(o={})).PHONE="+7 (999) 999-99-99",l.DATE="99-99-9999"},9574:function(e,t,r){"use strict";var n,o;r.d(t,{l:function(){return n}}),(o=n||(n={})).ROOT="/",o.LOGIN="login",o.ADD_CERTIFICATE="add-certificate",o.SIGNUP="signup",o.RESTORE="restore",o.ORDER_START="order-start",o.ORDER_NEW="order-new",o.ORDERS="orders",o.MY_ATOM="my-atom",o.SETTINGS="settings",o.SUCCESS="success",o.ERROR="error",o.PRIVACY="privacy",o.AGREEMENT="agreement",o.OFFER="offer"},124:function(e,t,r){"use strict";r.d(t,{U:function(){return o}});var n=r(7294);let o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{apiKey:t="",type:r="",initialValue:o=""}=e,[a,l]=(0,n.useState)(o),[i,s]=(0,n.useState)([]),u=(0,n.useMemo)(()=>i[0]||"",[i]);return{type:r,apiKey:t,value:a,setValue:l,error:u,setErrors:s,reset:()=>{l(o),s([])}}}},6945:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return g},default:function(){return k}});var n=r(5893),o=r(7294),a=r(6244),l=r.n(a);r(8476);var i=r(3577),s=r(153),u=r(411),_=r(3273),c=r(1716),d=r(124),p=r(1229),f=r(2471),h=r.n(f),m=r(6627),x=r.n(m),v=function(e){let[t,r]=(0,o.useState)(!1),a=(0,o.useMemo)(()=>!!(e.value||t),[e.value,t]);return(0,n.jsxs)("div",{className:(0,c.q)((0,c.x)(h(),"order-external-input",{error:!!e.error}),e.className),children:[(0,n.jsxs)("div",{className:h()["order-external-input__wrapper"],children:[(0,n.jsx)("label",{className:(0,c.x)(h(),"order-external-input__label",{minified:a}),children:e.label}),e.mask&&(0,n.jsx)(x(),{mask:e.mask,value:e.value,onFocus:()=>r(!0),onBlur:()=>r(!1),onChange:t=>e.onChange(t.target.value),type:e.type}),!e.mask&&(0,n.jsx)("input",{value:e.value,onFocus:()=>r(!0),onBlur:()=>r(!1),onChange:t=>e.onChange(t.target.value),type:e.type})]}),(0,n.jsx)("div",{className:h()["order-external-input__error"],children:e.error})]})},g=!0,k=e=>{let{localization:t}=e;t.ORDER_NEW;let[r,a]=(0,i.Iq)(),f=(0,d.U)({apiKey:"first_name"}),h=(0,d.U)({apiKey:"last_name"}),m=(0,d.U)({apiKey:"email"}),x=(0,d.U)({apiKey:"phone_number"}),g=[f,m,x,h],[k,w]=(0,o.useState)(0);(0,o.useEffect)(()=>{let e=0;f.value&&(e+=12.5),h.value&&(e+=12.5),m.value&&(e+=12.5),x.value&&(e+=12.5),w(e)},[f.value,h.value,m.value,x]);let O=r.carCategories,[S,y]=(0,o.useState)(!1),C=(0,o.useMemo)(()=>O[0]||{},[O]),b=async()=>{try{let e=(await (0,s.C)()).data;(0,i.jT)(a,e.results)}catch(e){console.log(e)}},E=async()=>{S||(y(!0),(0,u.b_)({user:{first_name:f.value,last_name:h.value,phone_number:(0,_.XT)(x.value),email:m.value.trim()},key:{car_category:C.id}}).then(e=>{let t=e.data.order.payment_url;window.open(t,"_self")}).catch(e=>{(0,_.nV)({error:e,dispatch:a,formPrefix:"user",formFields:g})}).finally(()=>{y(!1)}))};return(0,o.useEffect)(()=>{b()},[]),(0,n.jsx)("div",{className:l()["order-external"],children:(0,n.jsxs)("div",{className:l()["order-external__row"],children:[(0,n.jsxs)("div",{className:l()["order-external__form"],children:[(0,n.jsx)("h2",{className:l()["order-external__title"],children:"Забронируйте ваш АТОМ"}),(0,n.jsxs)("div",{className:l()["order-external__form__row"],children:[(0,n.jsx)(v,{type:"text",label:"Имя*",value:f.value,onChange:e=>f.setValue(e),error:f.error,className:l()["order-external__form__input"]}),(0,n.jsx)(v,{type:"text",label:"Фамилия*",value:h.value,onChange:e=>h.setValue(e),error:h.error,className:l()["order-external__form__input"]})]}),(0,n.jsx)(v,{type:"text",label:"Номер телефона*",value:x.value,onChange:e=>x.setValue(e),error:x.error,mask:p.x.PHONE,className:l()["order-external__form__input"]}),(0,n.jsx)(v,{type:"email",label:"E-mail*",value:m.value,onChange:e=>m.setValue(e),error:m.error,className:l()["order-external__form__input"]}),(0,n.jsxs)("div",{className:l()["order-external__form__actions"],children:[(0,n.jsxs)("div",{className:l()["order-external__form__hint"],children:["Заполняя форму, я принимаю\xa0",(0,n.jsx)("a",{href:"/atom-soglasie.pdf",rel:"noreferrer",target:"_blank",className:l()["order-external__form__hint__link"],children:"условия передачи информации"})]}),(0,n.jsx)("button",{onClick:E,className:l()["order-external__form__submit-btn"],children:"Оплатить"})]})]}),(0,n.jsxs)("div",{className:l()["order-external__right"],children:[(0,n.jsxs)("div",{className:l()["order-external__percent"],children:[(0,n.jsx)("span",{className:l()["order-external__percent__label"],children:"Уже заполнено"}),(0,n.jsxs)("h4",{className:l()["order-external__percent__value"],children:[k,"%"]})]}),(0,n.jsxs)("div",{className:l()["order-external__indicator"],children:[(0,n.jsx)("div",{className:(0,c.x)(l(),"order-external__indicator__line",{static:!0})}),(0,n.jsx)("div",{className:(0,c.x)(l(),"order-external__indicator__line",{progress:!0}),style:{width:"".concat(k,"%")}})]})]})]})})}},1716:function(e,t,r){"use strict";r.d(t,{q:function(){return o},x:function(){return n}});let n=function(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"_",o=[e[t]];return r&&Object.keys(r).forEach(a=>{r[a]&&o.push(e["".concat(t).concat(n).concat(a)])}),o.join(" ")},o=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.join(" ")}},9101:function(e,t,r){"use strict";r.d(t,{T:function(){return n}});let n=e=>"/".concat(e)},2344:function(e,t,r){"use strict";r.d(t,{pI:function(){return a},tj:function(){return n},yV:function(){return o}});let n=(e,t)=>{let r=e;return Object.keys(t).forEach(e=>{r=r.replace("{".concat(e,"}"),String(t[e]))}),r},o=e=>e.replace(/\D/g,"");function a(e){return/^[0-9]+$/.test(e)}},2471:function(e){e.exports={carousel:"order-external-input_carousel__Ry5p6","control-dots":"order-external-input_control-dots__XlqWP","order-external-input":"order-external-input_order-external-input__8r_Go","order-external-input__wrapper":"order-external-input_order-external-input__wrapper__mT42j","order-external-input__label":"order-external-input_order-external-input__label__b9glv","order-external-input__label_minified":"order-external-input_order-external-input__label_minified__X7MPr","order-external-input__error":"order-external-input_order-external-input__error__ADtgv","order-external-input_error":"order-external-input_order-external-input_error___xv_b",runningLine:"order-external-input_runningLine__BeUFl",runningLineSecondary:"order-external-input_runningLineSecondary__fSGiS",fadeInAnimation:"order-external-input_fadeInAnimation__7IVe0",fadeOutAnimation:"order-external-input_fadeOutAnimation__W7RCG",wavy:"order-external-input_wavy__GZVrq","wavy-reversed":"order-external-input_wavy-reversed__TSgsR",figureIncrease:"order-external-input_figureIncrease__H1qcM",carPropertyAnimation:"order-external-input_carPropertyAnimation__iHrVn",carPropertyAnimationOut:"order-external-input_carPropertyAnimationOut__qP3lV",largeBookButtonText:"order-external-input_largeBookButtonText__rsYxQ",largeBookButtonTextMedium:"order-external-input_largeBookButtonTextMedium__Uaf7E",largeBookButtonTextOut:"order-external-input_largeBookButtonTextOut__OGiS3",largeBookButtonIcon:"order-external-input_largeBookButtonIcon__4n89W",largeBookButtonIconOut:"order-external-input_largeBookButtonIconOut__7NzxK",detailItemFadeout:"order-external-input_detailItemFadeout__hAFfR",detailTitle:"order-external-input_detailTitle__Z5FNS",detailTitleMobile:"order-external-input_detailTitleMobile__NOw6B",detailTitleOut:"order-external-input_detailTitleOut__KySR0",detailTitleOutMobile:"order-external-input_detailTitleOutMobile__rNyiY",pulse:"order-external-input_pulse__4ScCi",textShine:"order-external-input_textShine__mG_QB"}},6244:function(e){e.exports={carousel:"order-external_carousel__dfv_N","control-dots":"order-external_control-dots__xKSdk","order-external":"order-external_order-external__Sm9Mx","order-external__row":"order-external_order-external__row__lBAlD","order-external__right":"order-external_order-external__right__5_Hyo","order-external__percent":"order-external_order-external__percent__KZzbD","order-external__percent__label":"order-external_order-external__percent__label__Iw2d1","order-external__percent__value":"order-external_order-external__percent__value__Lx1ga","order-external__indicator":"order-external_order-external__indicator__atxUM","order-external__indicator__line":"order-external_order-external__indicator__line__wy0mI","order-external__indicator__line_static":"order-external_order-external__indicator__line_static__zruqg","order-external__indicator__line_progress":"order-external_order-external__indicator__line_progress__uAkWr","order-external__title":"order-external_order-external__title__CsllB","order-external__form":"order-external_order-external__form__R6UxT","order-external__form__actions":"order-external_order-external__form__actions__80it7","order-external__form__submit-btn":"order-external_order-external__form__submit-btn__sUGyI","order-external__form__hint":"order-external_order-external__form__hint__gH8bP","order-external__form__hint__link":"order-external_order-external__form__hint__link__4npqi","order-external__form__row":"order-external_order-external__form__row__Aywfg","order-external__form__input":"order-external_order-external__form__input__Zykno","order-external__links":"order-external_order-external__links__kbf7Z","order-external__hint":"order-external_order-external__hint__EVGRD","order-external__submit":"order-external_order-external__submit__Ks5W7","order-external__footer":"order-external_order-external__footer__YnZrE","order-external__share":"order-external_order-external__share__S7gbR","order-external__share-vk":"order-external_order-external__share-vk__Pod21","order-external-success":"order-external_order-external-success__aJZYV","order-external-success__title":"order-external_order-external-success__title__aYodt","order-external-success__description":"order-external_order-external-success__description__AA2X1",runningLine:"order-external_runningLine__1jfkk",runningLineSecondary:"order-external_runningLineSecondary__6nbGO",fadeInAnimation:"order-external_fadeInAnimation__l6JEa",fadeOutAnimation:"order-external_fadeOutAnimation__50Eej",wavy:"order-external_wavy__occYR","wavy-reversed":"order-external_wavy-reversed__X4os8",figureIncrease:"order-external_figureIncrease__WjVbS",carPropertyAnimation:"order-external_carPropertyAnimation__iD2EW",carPropertyAnimationOut:"order-external_carPropertyAnimationOut__5RCw8",largeBookButtonText:"order-external_largeBookButtonText__Qj9oA",largeBookButtonTextMedium:"order-external_largeBookButtonTextMedium__Bvq1b",largeBookButtonTextOut:"order-external_largeBookButtonTextOut__nTPG2",largeBookButtonIcon:"order-external_largeBookButtonIcon__YQ_8S",largeBookButtonIconOut:"order-external_largeBookButtonIconOut__VrKq1",detailItemFadeout:"order-external_detailItemFadeout__QqJ5x",detailTitle:"order-external_detailTitle__QC7hi",detailTitleMobile:"order-external_detailTitleMobile__BzRdo",detailTitleOut:"order-external_detailTitleOut__FTORn",detailTitleOutMobile:"order-external_detailTitleOutMobile__W01Wq",pulse:"order-external_pulse__kYSwp",textShine:"order-external_textShine__ibEgI"}},6627:function(e,t,r){e.exports=r(3462)},3462:function(e,t,r){"use strict";var n,o=(n=r(7294))&&"object"==typeof n&&"default"in n?n.default:n,a=r(3935);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var s=function(e,t,r,n,o,a,l,i){if(!e){var s;if(void 0===t)s=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[r,n,o,a,l,i],_=0;(s=Error(t.replace(/%s/g,function(){return u[_++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}};function u(e,t,r){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=r;else{var n=e.createTextRange();n.collapse(!0),n.moveStart("character",t),n.moveEnd("character",r-t),n.select()}}var _={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"};function c(e,t,r){var n="",o="",a=null,l=[];if(void 0===t&&(t="_"),null==r&&(r=_),!e||"string"!=typeof e)return{maskChar:t,formatChars:r,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var i=!1;return e.split("").forEach(function(e){i=!i&&"\\"===e||(i||!r[e]?(l.push(n.length),n.length===l.length-1&&(o+=e)):a=n.length+1,n+=e,!1)}),{maskChar:t,formatChars:r,prefix:o,mask:n,lastEditablePosition:a,permanents:l}}function d(e,t){return -1!==e.permanents.indexOf(t)}function p(e,t,r){var n=e.mask,o=e.formatChars;if(!r)return!1;if(d(e,t))return n[t]===r;var a=o[n[t]];return new RegExp(a).test(r)}function f(e,t){return t.split("").every(function(t,r){return d(e,r)||!p(e,r,t)})}function h(e,t){var r=e.maskChar,n=e.prefix;if(!r){for(;t.length>n.length&&d(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var o=n.length,a=t.length;a>=n.length;a--){var l=t[a];if(!d(e,a)&&p(e,a,l)){o=a+1;break}}return o}function m(e,t){return h(e,t)===e.mask.length}function x(e,t){var r=e.maskChar,n=e.mask,o=e.prefix;if(!r){for((t=v(e,"",t,0)).length<o.length&&(t=o);t.length<n.length&&d(e,t.length);)t+=n[t.length];return t}if(t)return v(e,x(e,""),t,0);for(var a=0;a<n.length;a++)d(e,a)?t+=n[a]:t+=r;return t}function v(e,t,r,n){var o=e.mask,a=e.maskChar,l=e.prefix,i=r.split(""),s=m(e,t);return!a&&n>t.length&&(t+=o.slice(t.length,n)),i.every(function(r){for(var i,u;d(e,u=n)&&r!==o[u];){if(n>=t.length&&(t+=o[n]),i=n,a&&d(e,i)&&r===a)return!0;if(++n>=o.length)return!1}return!p(e,n,r)&&r!==a||(n<t.length?t=a||s||n<l.length?t.slice(0,n)+r+t.slice(n+1):(t=t.slice(0,n)+r+t.slice(n),x(e,t)):a||(t+=r),++n<o.length)}),t}function g(e,t){for(var r=e.mask,n=t;n<r.length;++n)if(!d(e,n))return n;return null}function k(e){return e||0===e?e+"":""}function w(e){return"function"==typeof e}function O(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function S(e){return(O()?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame:function(){return setTimeout(e,1e3/60)})(e)}function y(e){(O()||clearTimeout)(e)}var C=function(e){function t(t){var r=e.call(this,t)||this;r.focused=!1,r.mounted=!1,r.previousSelection=null,r.selectionDeferId=null,r.saveSelectionLoopDeferId=null,r.saveSelectionLoop=function(){r.previousSelection=r.getSelection(),r.saveSelectionLoopDeferId=S(r.saveSelectionLoop)},r.runSaveSelectionLoop=function(){null===r.saveSelectionLoopDeferId&&r.saveSelectionLoop()},r.stopSaveSelectionLoop=function(){null!==r.saveSelectionLoopDeferId&&(y(r.saveSelectionLoopDeferId),r.saveSelectionLoopDeferId=null,r.previousSelection=null)},r.getInputDOMNode=function(){if(!r.mounted)return null;var e=a.findDOMNode(i(i(r))),t="undefined"!=typeof window&&e instanceof window.Element;if(e&&!t)return null;if("INPUT"!==e.nodeName&&(e=e.querySelector("input")),!e)throw Error("react-input-mask: inputComponent doesn't contain input node");return e},r.getInputValue=function(){var e=r.getInputDOMNode();return e?e.value:null},r.setInputValue=function(e){var t=r.getInputDOMNode();t&&(r.value=e,t.value=e)},r.setCursorToEnd=function(){var e=h(r.maskOptions,r.value),t=g(r.maskOptions,e);null!==t&&r.setCursorPosition(t)},r.setSelection=function(e,t,n){void 0===n&&(n={});var o=r.getInputDOMNode(),a=r.isFocused();o&&a&&(n.deferred||u(o,e,t),null!==r.selectionDeferId&&y(r.selectionDeferId),r.selectionDeferId=S(function(){r.selectionDeferId=null,u(o,e,t)}),r.previousSelection={start:e,end:t,length:Math.abs(t-e)})},r.getSelection=function(){return function(e){var t=0,r=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,r=e.selectionEnd;else{var n=document.selection.createRange();n.parentElement()===e&&(t=-n.moveStart("character",-e.value.length),r=-n.moveEnd("character",-e.value.length))}return{start:t,end:r,length:r-t}}(r.getInputDOMNode())},r.getCursorPosition=function(){return r.getSelection().start},r.setCursorPosition=function(e){r.setSelection(e,e)},r.isFocused=function(){return r.focused},r.getBeforeMaskedValueChangeConfig=function(){var e=r.maskOptions,t=e.mask,n=e.maskChar,o=e.permanents,a=e.formatChars;return{mask:t,maskChar:n,permanents:o,alwaysShowMask:!!r.props.alwaysShowMask,formatChars:a}},r.isInputAutofilled=function(e,t,n,o){var a=r.getInputDOMNode();try{if(a.matches(":-webkit-autofill"))return!0}catch(e){}return!r.focused||o.end<n.length&&t.end===e.length},r.onChange=function(e){var t,n,o,a,l,s,u,_,c,f,h,m,k,O,S,y,C,b,E,I=i(i(r)).beforePasteState,M=i(i(r)).previousSelection,T=r.props.beforeMaskedValueChange,B=r.getInputValue(),N=r.value,V=r.getSelection();r.isInputAutofilled(B,V,N,M)&&(N=x(r.maskOptions,""),M={start:0,end:0,length:0}),I&&(M=I.selection,N=I.value,V={start:M.start+B.length,end:M.start+B.length,length:0},B=N.slice(0,M.start)+B+N.slice(M.end),r.beforePasteState=null);var D=(t=r.maskOptions,n=B,o=V,a=N,l=M,m=t.mask,k=t.prefix,O=t.lastEditablePosition,S=n,y="",C=0,b=0,E=Math.min(l.start,o.start),o.end>l.start?(s=y=S.slice(l.start,o.end),u=E,_=t.mask,c=t.maskChar,f=s.split(""),h=u,f.every(function(e){for(var r;d(t,r=u)&&e!==_[r];)if(++u>=_.length)return!1;return(p(t,u,e)||e===c)&&u++,u<_.length}),b=(C=u-h)?l.length:0):S.length<a.length&&(b=a.length-S.length),S=a,b&&(1!==b||l.length||(E=l.start===o.start?g(t,o.start):function(e,t){for(var r=t;0<=r;--r)if(!d(e,r))return r;return null}(t,o.start)),S=function(e,t,r,n){var o=r+n,a=e.maskChar,l=e.mask,i=e.prefix,s=t.split("");if(a)return s.map(function(t,n){return n<r||o<=n?t:d(e,n)?l[n]:a}).join("");for(var u=o;u<s.length;u++)d(e,u)&&(s[u]="");return r=Math.max(i.length,r),s.splice(r,o-r),x(e,t=s.join(""))}(t,S,E,b)),S=v(t,S,y,E),(E+=C)>=m.length?E=m.length:E<k.length&&!C?E=k.length:E>=k.length&&E<O&&C&&(E=g(t,E)),y||(y=null),{value:S=x(t,S),enteredString:y,selection:{start:E,end:E}}),j=D.enteredString,R=D.selection,A=D.value;if(w(T)){var P=T({value:A,selection:R},{value:N,selection:M},j,r.getBeforeMaskedValueChangeConfig());A=P.value,R=P.selection}r.setInputValue(A),w(r.props.onChange)&&r.props.onChange(e),r.isWindowsPhoneBrowser?r.setSelection(R.start,R.end,{deferred:!0}):r.setSelection(R.start,R.end)},r.onFocus=function(e){var t=r.props.beforeMaskedValueChange,n=r.maskOptions,o=n.mask,a=n.prefix;if(r.focused=!0,r.mounted=!0,o){if(r.value)h(r.maskOptions,r.value)<r.maskOptions.mask.length&&r.setCursorToEnd();else{var l=x(r.maskOptions,a),i=x(r.maskOptions,l),s=h(r.maskOptions,i),u=g(r.maskOptions,s),_={start:u,end:u};if(w(t)){var c=t({value:i,selection:_},{value:r.value,selection:null},null,r.getBeforeMaskedValueChangeConfig());i=c.value,_=c.selection}var d=i!==r.getInputValue();d&&r.setInputValue(i),d&&w(r.props.onChange)&&r.props.onChange(e),r.setSelection(_.start,_.end)}r.runSaveSelectionLoop()}w(r.props.onFocus)&&r.props.onFocus(e)},r.onBlur=function(e){var t=r.props.beforeMaskedValueChange,n=r.maskOptions.mask;if(r.stopSaveSelectionLoop(),r.focused=!1,n&&!r.props.alwaysShowMask&&f(r.maskOptions,r.value)){var o="";w(t)&&(o=t({value:o,selection:null},{value:r.value,selection:r.previousSelection},null,r.getBeforeMaskedValueChangeConfig()).value);var a=o!==r.getInputValue();a&&r.setInputValue(o),a&&w(r.props.onChange)&&r.props.onChange(e)}w(r.props.onBlur)&&r.props.onBlur(e)},r.onMouseDown=function(e){!r.focused&&document.addEventListener&&(r.mouseDownX=e.clientX,r.mouseDownY=e.clientY,r.mouseDownTime=(new Date).getTime(),document.addEventListener("mouseup",function e(t){if(document.removeEventListener("mouseup",e),r.focused){var n=Math.max(Math.abs(t.clientX-r.mouseDownX),Math.abs(t.clientY-r.mouseDownY)),o=(new Date).getTime()-r.mouseDownTime;(n<=10&&o<=200||n<=5&&o<=300)&&r.setCursorToEnd()}})),w(r.props.onMouseDown)&&r.props.onMouseDown(e)},r.onPaste=function(e){w(r.props.onPaste)&&r.props.onPaste(e),e.defaultPrevented||(r.beforePasteState={value:r.getInputValue(),selection:r.getSelection()},r.setInputValue(""))},r.handleRef=function(e){null==r.props.children&&w(r.props.inputRef)&&r.props.inputRef(e)};var n=t.mask,o=t.maskChar,l=t.formatChars,s=t.alwaysShowMask,_=t.beforeMaskedValueChange,m=t.defaultValue,O=t.value;r.maskOptions=c(n,o,l),null==m&&(m=""),null==O&&(O=m);var C=k(O);if(r.maskOptions.mask&&(s||C)&&(C=x(r.maskOptions,C),w(_))){var b=t.value;null==t.value&&(b=m),C=_({value:C,selection:null},{value:b=k(b),selection:null},null,r.getBeforeMaskedValueChangeConfig()).value}return r.value=C,r}t.prototype=Object.create(e.prototype),function(e,t){for(var r=Object.getOwnPropertyNames(t),n=0;n<r.length;n++){var o=r[n],a=Object.getOwnPropertyDescriptor(t,o);a&&a.configurable&&void 0===e[o]&&Object.defineProperty(e,o,a)}}(t.prototype.constructor=t,e);var r=t.prototype;return r.componentDidMount=function(){var e;this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=(e=navigator.userAgent,/windows/i.test(e)&&/phone/i.test(e)),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},r.componentDidUpdate=function(){var e=this.previousSelection,t=this.props,r=t.beforeMaskedValueChange,n=t.alwaysShowMask,o=t.mask,a=t.maskChar,l=t.formatChars,i=this.maskOptions,s=n||this.isFocused(),u=null!=this.props.value,_=u?k(this.props.value):this.value,d=e?e.start:null;if(this.maskOptions=c(o,a,l),this.maskOptions.mask){!i.mask&&this.isFocused()&&this.runSaveSelectionLoop();var p=this.maskOptions.mask&&this.maskOptions.mask!==i.mask;if(i.mask||u||(_=this.getInputValue()),(p||this.maskOptions.mask&&(_||s))&&(_=x(this.maskOptions,_)),p){var v=h(this.maskOptions,_);(null===d||v<d)&&(d=m(this.maskOptions,_)?v:g(this.maskOptions,v))}!this.maskOptions.mask||!f(this.maskOptions,_)||s||u&&this.props.value||(_="");var O={start:d,end:d};if(w(r)){var S=r({value:_,selection:O},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());_=S.value,O=S.selection}this.value=_;var y=this.getInputValue()!==this.value;y?(this.setInputValue(this.value),this.forceUpdate()):p&&this.forceUpdate();var C=!1;null!=O.start&&null!=O.end&&(C=!e||e.start!==O.start||e.end!==O.end),(C||y)&&this.setSelection(O.start,O.end)}else i.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},r.componentWillUnmount=function(){this.mounted=!1,null!==this.selectionDeferId&&y(this.selectionDeferId),this.stopSaveSelectionLoop()},r.render=function(){var e,t=this.props,r=(t.mask,t.alwaysShowMask,t.maskChar,t.formatChars,t.inputRef,t.beforeMaskedValueChange,t.children),n=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)0<=t.indexOf(r=a[n])||(o[r]=e[r]);return o}(t,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(r){w(r)||s(!1);var a=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],i=l({},n);a.forEach(function(e){return delete i[e]}),e=r(i),a.filter(function(t){return null!=e.props[t]&&e.props[t]!==n[t]}).length&&s(!1)}else e=o.createElement("input",l({ref:this.handleRef},n));var u={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(n.disabled||n.readOnly||(u.onChange=this.onChange,u.onPaste=this.onPaste,u.onMouseDown=this.onMouseDown),null!=n.value&&(u.value=this.value)),e=o.cloneElement(e,u)},t}(o.Component);e.exports=C}},function(e){e.O(0,[774,888,179],function(){return e(e.s=6814)}),_N_E=e.O()}]);