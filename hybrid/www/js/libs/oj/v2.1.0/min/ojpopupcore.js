/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","jqueryui-amd/position"],function(a,g){a.Rd={};a.Rd.nm=function(c,b){for(var d=g.extend({},c),e=0;e<a.Rd.H0.length;e++){var f=a.Rd.H0[e],h=d[f];h&&(d[f]=h.replace("start",b?"right":"left").replace("end",b?"left":"right").replace("\x3c",b?"+":"-").replace("\x3e",b?"-":"+"))}return d};a.Rd.AIa=function(a,b,d){return"event"===a?d:null==a||"launcher"===a?b:a};a.Rd.bza=function(a){g.each(["pageX","pageY"],function(b,d){if(a&&void 0===a[d]&&a.originalEvent){var e=
a.originalEvent,f=e.type;(f="touchstart"===f||"touchmove"===f?"touches":"touchend"===f?"changedTouches":null)&&(e=e[f][0])&&(a[d]=e[d])}})};a.Rd.H0=["my","at"];a.Rd.zY=function(c){return c.target&&0<c.target.height&&0<c.target.width?!a.Rd.bIa(c.target.element):!1};a.Rd.bIa=function(c){function b(b,c){if(-1<["hidden","scroll","auto"].indexOf(c.overflowY)){if(-1>b.bottom-c.top)return!1;var d="auto"===c.overflowX||"scroll"===c.overflowX?a.A.jM():0;if(1>c.bottom-d-b.top)return!1}if(-1<["hidden","scroll",
"auto"].indexOf(c.overflowX)){d="auto"!==c.overflowY&&"scroll"!==c.overflowY||"rtl"!==a.A.yn()?0:a.A.jM();if(-1>b.right-(c.left+d))return!1;d="auto"!==c.overflowX&&"scroll"!==c.overflowX||"ltr"!==a.A.yn()?0:a.A.jM();if(-1<b.left-(c.right-d))return!1}return!0}function d(a){return"visible"!==a.css("overflow-x")||"visible"!==a.css("overflow-y")}function e(a){var b=a[0];return 1===b.nodeType?(b=g.extend({},b.getBoundingClientRect()),b.overflowX=a.css("overflow-x"),b.overflowY=a.css("overflow-y"),b):{height:0,
width:0}}function f(b){return-1<["fixed","absolute","relative"].indexOf(b.css("position"))&&(0<Math.abs(a.A.Nq(b.css("top")))||0<Math.abs(a.A.Nq(b.css("bottom")))||0<Math.abs(a.A.Nq(b.css("left")))||0<Math.abs(a.A.Nq(b.css("right"))))}if(!c)return!1;if(g.isWindow(c[0])||f(c))return!0;var h=e(c),k=!0;for(c=c.parent();k&&c&&0<c.length&&"BODY"!==c[0].nodeName&&1===c[0].nodeType&&!f(c);){if(d(c)){var l=e(c);0<l.height&&0<l.width&&(k=b(h,l))}c=c.parent()}return k};g.ui.position.flipcenter={left:function(c,
b){var d=c.left;g.ui.position.flip.left.call(this,c,b);var e=b.within,f=e.isWindow?e.scrollLeft:e.offset.left,h=c.left-b.collisionPosition.marginLeft,e=h+b.collisionWidth-e.width-f;if(0<f-h||0<e)"right"===b.at[0]?d-=b.targetWidth/2:"left"===b.at[0]&&(d+=b.targetWidth/2),f="rtl"===a.A.yn()?-1:1,d-=b.elemWidth/2*f,c.left=Math.max(0,d)},top:function(a,b){var d=a.top;g.ui.position.flip.top.call(this,a,b);var e=b.within,e=e.isWindow?e.scrollTop:e.offset.top,f=a.top-b.collisionPosition.marginTop,h=f+b.collisionHeight-
b.within.height-e;if(0<e-f||0<h)"top"===b.at[1]?d+=b.targetHeight/2:"bottom"===b.at[1]&&(d-=b.targetHeight/2),d+=b.elemHeight/2,a.top=Math.max(0,d)}};g.ui.position.flip={left:g.ui.position.flip.left.bind(this),top:function(a,b){var d=b.within,e=d.offset.top+d.scrollTop,f=d.height,g=d.isWindow?d.scrollTop:d.offset.top,k=a.top-b.collisionPosition.marginTop,d=k-g,k=k+b.collisionHeight-f-g,l="top"===b.my[1]?-b.elemHeight:"bottom"===b.my[1]?b.elemHeight:0,m="top"===b.at[1]?b.targetHeight:"bottom"===b.at[1]?
-b.targetHeight:0,r=-2*b.offset[1];0>d?(e=a.top+l+m+r+b.collisionHeight-f-e,(0>e||e<Math.abs(d))&&0>k&&d>k&&(a.top+=l+m+r)):0<k&&(e=a.top-b.collisionPosition.marginTop+l+m+r-g,0<e||Math.abs(e)<k)&&(a.top+=l+m+r)}};a.U=function(){this.Init()};a.b.ta(a.U,a.b,"oj.PopupService");a.U.prototype.Init=function(){a.U.u.Init.call(this)};a.U.Ie=function(){a.U.iV||(a.U.iV=new a.Rb);return a.U.iV};a.U.prototype.open=function(){a.o.ld()};a.U.prototype.close=function(){a.o.ld()};a.U.prototype.Kz=function(){a.o.ld()};
a.U.prototype.LN=function(){a.o.ld()};a.U.prototype.destroy=function(){delete a.U.iV};a.U.jk={NONE:"none",yO:"modal",bka:"modeless"};a.U.Fd={qx:"ojPopupRemove",px:"ojPopupClose",Mp:"ojPopupRefresh",ox:"ojPopupAutoDismiss"};a.U.Dr={QO:"topLevel",V_:"nearestAncestor"};a.U.sb={Fh:"popup",gu:"events",jk:"modality",eB:"launcher",iB:"position",Er:"layerSelectors",Dr:"layerLevel"};a.Rb=function(){this.Init()};a.b.ta(a.Rb,a.U,"oj.PopupServiceImpl");a.Rb.prototype.open=function(c){a.o.hi(c);var b=c[a.U.sb.Fh];
a.o.ue(b,jQuery);var d=c[a.U.sb.eB];a.o.ue(d,jQuery);var e=c[a.U.sb.iB];a.o.Ida(e);var f=c[a.U.sb.gu];a.o.hi(f);var g=c[a.U.sb.jk];if(!g||a.U.jk.bka!==g&&a.U.jk.yO!==g)g=a.U.jk.NONE;var k=c[a.U.sb.Er];a.o.Eq(k);c=c[a.U.sb.Dr];if(!c||a.U.Dr.QO!==c&&a.U.Dr.V_!==c)c=a.U.Dr.V_;a.A.tia(b,d);a.T.iEa(b,d,f,g,k,c);b.show();b.removeAttr("aria-hidden");e&&b.position(e);this.zQ();a.Components.wr(b[0])};a.Rb.prototype.close=function(c){a.o.hi(c);c=c[a.U.sb.Fh];a.o.ue(c,jQuery);a.T.$Ia(c);c.hide();c.attr("aria-hidden",
"true");c.css({top:"auto",bottom:"auto",left:"auto",right:"auto"});a.A.tia(c,null);this.zQ();a.Components.Xt(c[0])};a.Rb.prototype.Kz=function(c){a.o.hi(c);var b=c[a.U.sb.Fh];a.o.ue(b,jQuery);b=a.T.XE(b);a.o.ue(b,jQuery);var d=c[a.U.sb.gu];d&&a.T.Eda(b,d);(d=c[a.U.sb.jk])&&a.T.Fda(b,d);c=c[a.U.sb.Er];a.bb.Yl(c)||b.attr("class",c)};a.Rb.prototype.LN=function(c,b,d){var e={};e.event=b;e.argsArray=d;c=a.T.XE(c);a.T.sN(c,this.zDa,e)};a.Rb.prototype.zDa=function(c,b){var d=b.event,e=b.argsArray,f=a.T.$X(c);
f&&g.isFunction(f[d])&&f[d].apply(this,e);return a.T.rj.au};a.Rb.prototype.zQ=function(){var c=a.T.iga(),b=this.i4;if(!c&&b){window.removeEventListener("resize",a.Rb.Rs,!0);window.removeEventListener("scroll",a.Rb.Rs,!0);c=document.documentElement;c.removeEventListener("mousewheel",a.Rb.Rs,!0);c.removeEventListener("DOMMouseScroll",a.Rb.Rs,!0);delete this.i4;for(var d=0;d<a.Rb.jH.length;d++){var e=a.Rb.jH[d];c.removeEventListener(e,b,!0)}if(b=this.vca)b.destroy(),delete this.vca}else if(c&&!b){window.addEventListener("resize",
a.Rb.Rs,!0);window.addEventListener("scroll",a.Rb.Rs,!0);c=document.documentElement;c.addEventListener("mousewheel",a.Rb.Rs,!0);c.addEventListener("DOMMouseScroll",a.Rb.Rs,!0);b=this.i4=g.proxy(this.Yra,this);for(d=0;d<a.Rb.jH.length;d++)e=a.Rb.jH[d],c.addEventListener(e,b,!0);a.A.Ke()&&(this.vca=new a.nk(b))}};a.Rb.prototype.Yra=function(c){var b=g(c.target);if(!a.T.iga())this.zQ();else if(!a.A.yga(c)&&("focus"!==c.type||b.is(":focusable"))){var d=a.T.nt();if("keydown"===c.type&&a.T.EHa()&&!a.A.np(d[0],
b[0]))a.T.GFa(g.Event(c));else{var e=a.T.XE(b);if(d[0]!==e[0]){if(!e.hasClass(a.Rb.NG)){var f=this.KU;f&&f.removeClass(a.Rb.NG);e.addClass(a.Rb.NG);this.KU=e}}else if(f=this.KU)f.removeClass(a.Rb.NG),delete this.KU;if("focus"!==c.type||"-1"!==b.attr("tabindex")){var b={},e={},h;for(h in c)a.Rb.Vka[h]&&!g.isFunction(c[h])&&(e[h]=c[h]);b.event=g.Event(c,e);a.T.sN(d,a.Rb.cAa,b)}}}};a.Rb.cAa=function(c,b){var d=a.T.$X(c),e=b.event;if(d&&g.isFunction(d[a.U.Fd.ox]))d[a.U.Fd.ox](e);return a.T.rj.au};a.Rb.Rs=
function(){isNaN(a.Rb.Faa)&&(a.Rb.Faa=window.setTimeout(function(){delete a.Rb.Faa;var c=a.T.nt();g.isFunction(window.requestAnimationFrame)?a.Rb.moa=window.requestAnimationFrame(function(){delete a.Rb.moa;a.T.sN(c,a.Rb.Haa)}):a.T.sN(c,a.Rb.Haa)},a.Rb.Lma))};a.Rb.Haa=function(c,b){if(0<b.level)return a.T.rj.yG;var d=a.T.$X(c);if(d&&g.isFunction(d[a.U.Fd.Mp]))d[a.U.Fd.Mp]();return a.T.rj.au};a.Rb.prototype.destroy=function(){a.Rb.u.destroy.call(this)};a.Rb.NG="oj-focus-within";a.Rb.jH=["focus","mousedown",
"keydown"];a.Rb.Vka={altKey:!0,bubbles:!0,cancelable:!0,ctrlKey:!0,currentTarget:!0,eventPhase:!0,metaKey:!0,relatedTarget:!0,shiftKey:!0,target:!0,timeStamp:!0,view:!0,which:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pageX:!0,pageY:!0,screenX:!0,screenY:!0,toElement:!0,"char":!0,charCode:!0,key:!0,keyCode:!0};a.Rb.Lma=10;a.T={};a.T.XE=function(c){if(!c)return a.T.nt();for(;c&&0<c.length&&c.attr("oj.ZOrderUtils._SURROGATE_ATTR")!==a.T.jP;){if(a.T.fU(c[0]))return c;c=c.parent()}return a.T.nt()};
a.T.nt=function(){var c=g(document.getElementById(a.T.jP));if(0<c.length)return c;c=g("\x3cdiv\x3e");c.attr("role","presentation");c.attr("id",a.T.jP);c.prependTo(g(document.body));return c};a.T.iEa=function(c,b,d,e,f,h){var k=c[0];if(a.T.fU(k.parentNode))throw Error("JET Popup is already open - id: "+k.getAttribute("id"));b=a.T.XE(h===a.U.Dr.QO?null:b);h=g("\x3cdiv\x3e");var l=c.attr("id");a.bb.Yl(l)?h.uniqueId():h.attr("id",[l,"layer"].join("_"));h.attr("role","presentation");h.addClass(f);c.after(h);
f=a.T.DR(h);a.Components.wi(k);c.appendTo(h);h.appendTo(b);a.Components.Ug(k);a.T.Fda(h,e);a.T.Eda(h,d,f)};a.T.Eda=function(c,b,d){if(!d){var e=c.attr(a.T.KB);e&&(d=g(document.getElementById(e)))}c.data(a.T.MG,b);d&&b&&g.isFunction(b[a.U.Fd.qx])&&(d.surrogate(),d.surrogate("option","beforeDestroy",b[a.U.Fd.qx]))};a.T.$X=function(c){return c.data(a.T.MG)};a.T.DR=function(c){var b=g("\x3cscript\x3e"),d=c.attr("id");a.bb.Yl(d)?b.uniqueId():b.attr("id",[d,"surrogate"].join("_"));b.insertBefore(c);d=b.attr("id");
c.attr(a.T.KB,d);return b};a.T.QAa=function(c){var b=c.attr(a.T.KB);c.removeAttr(a.T.KB);b=g(document.getElementById(b));c.insertAfter(b);b.surrogate("option","beforeDestroy",null);b.remove()};a.T.$Ia=function(c){var b=a.T.XE(c);a.T.rZ(b,a.T.Hpa);a.T.AV(b);b.removeData(a.T.MG);b.removeData(a.T.zP);var d=c[0];a.Components.wi(d);a.T.QAa(b);a.A.unwrap(c,b);a.Components.Ug(d)};a.T.Hpa=function(c,b){if(0<b.level)return a.T.rj.yG;var d=c.data(a.T.MG);if(d&&g.isFunction(d[a.U.Fd.px]))d[a.U.Fd.px]();return a.T.rj.au};
a.T.Fda=function(c,b){var d=c.data(a.T.zP);c.data(a.T.zP,b);a.bb.Yl(d)?a.U.jk.yO===b?a.T.f3(c):a.T.AV(c):d!==b&&(b!==d&&b===a.U.jk.yO?a.T.f3(c):a.T.AV(c))};a.T.EHa=function(){for(var c=a.T.nt().children(),b=c.length-1;-1<b;b--)if(g(c[b]).hasClass(a.T.a2))return!0;return!1};a.T.f3=function(c){var b=g("\x3cdiv\x3e");b.addClass(a.T.a2);b.addClass(c[0].className);b.attr("role","presentation");var d=c.attr("id");a.bb.Yl(d)?b.uniqueId():b.attr("id",[d,"overlay"].join("_"));c.before(b);b=b.attr("id");c.attr(a.T.EP,
b)};a.T.AV=function(c){var b=c.attr(a.T.EP);a.bb.Yl(b)||(c.removeAttr(a.T.EP),g(document.getElementById(b)).remove())};a.T.rj={au:0,yG:1,$N:2};a.T.tH={Z_:0,Y_:1};a.T.sN=function(c,b,d){d||(d={});d.level=0;d.type=a.T.tH.Y_;a.T.ZW(c,b,d)};a.T.rZ=function(c,b,d){d||(d={});d.level=0;d.type=a.T.tH.Z_;a.T.ZW(c,b,d)};a.T.ZW=function(c,b,d){var e=d.level;c=c.children();for(var f=c.length-1;-1<f;f--){var h=g(c[f]);if(a.T.fU(h[0])){var k;if(d.type===a.T.tH.Z_){k=b(h,d);if(k===a.T.rj.$N)return k;if(k===a.T.rj.yG)break}d.level=
e+1;k=a.T.ZW(h,b,d);d.level=e;if(k===a.T.rj.$N)return k;if(d.type===a.T.tH.Y_){k=b(h,d);if(k===a.T.rj.$N)return k;if(k===a.T.rj.yG)break}}}return a.T.rj.au};a.T.fU=function(c){return 1===c.nodeType&&c.hasAttribute(a.T.KB)?!0:!1};a.T.iga=function(){return 0<a.T.nt().children().length};a.T.eY=function(){var c={popupCount:0},b=a.T.nt();a.T.rZ(b,a.T.jza,c);return c.popupCount};a.T.jza=function(c,b){b.popupCount+=1;return a.T.rj.au};a.T.FX=function(){var c={},b=[];c.popups=b;b=a.T.nt();a.T.rZ(b,a.T.lza,
c);b=c.popups;return g(b)};a.T.lza=function(c,b){b.popups.push(c[0]);return a.T.rj.au};a.T.tX=function(c,b){function d(b,c){for(var d=["absolute","relative","fixed"],e=b.parents(),f=[],h=e.length-1;-1<h;h--)f.push(g(e[h]));e=f;e.push(b);for(var f=[],k=0,h=0;h<e.length;h++){var l=e[h],m=l.css("position"),r=a.A.$Fa(l.css("opacity")),z=a.A.Nq(l.css("z-index")),l=g.inArray(l[0],l.parent().children());-1<g.inArray(m,d)?f.push({weight:[k++,z,l],order:[l]}):1>r?f.push({weight:[k++,1,l],order:[l]}):c&&f.push({weight:[0,
0,l],order:[l]})}return f}function e(a,b){for(var c=Math.max(a.length,b.length),d=0;d<c;d++){var e=d<a.length?a[d]:-1,f=d<b.length?b[d]:-1;if(e!==f)return e<f?-1:1}return 0}a.o.ue(c,jQuery);a.o.ue(b,jQuery);for(var f=d(c,!1),h=d(b,!1),k=Math.max(f.length,h.length),l=0;l<k;l++){var m=l<f.length?f[l].weight:[-1],r=l<h.length?h[l].weight:[-1],m=e(m,r);if(0!==m)return m}f=d(c,!0);h=d(b,!0);k=Math.max(f.length,h.length);for(l=0;l<k;l++)if(m=l<f.length?f[l].order:[-1],r=l<h.length?h[l].order:[-1],m=e(m,
r),0!==m)return m;return 0};a.T.GFa=function(a){a.stopPropagation();a.preventDefault()};a.T.MG="oj-popup-events";a.T.zP="oj-popup-modality";a.T.jP="__oj_zorder_container";a.T.KB="data-oj-surrogate-id";a.T.EP="data-oj-overlayid";a.T.a2="oj-component-overlay";g.widget("oj.surrogate",{options:{create:null,beforeDestroy:null},_create:function(){this._super();this.element.uniqueId()},_destroy:function(){this._trigger("beforeDestroy");this.element.removeUniqueId();this._super()}});a.nk=function(a){this.Rca=
a;this.Init()};a.b.ta(a.nk,a.b,"oj.SimpleTapRecognizer");a.nk.prototype.Init=function(){a.nk.u.Init.call(this);for(var c=this.S5=g.proxy(this.xI,this),b=document.documentElement,d=0;d<a.nk.qH.length;d++)b.addEventListener(a.nk.qH[d],c,!0)};a.nk.prototype.xI=function(c){var b=this.Rca,d=c.type;"touchstart"===d?(this.fw=c,this.fw.fDa=(new Date).getTime()):"touchmove"===d||"touchcancel"===d?delete this.fw:"touchend"===d&&(this.fw&&(c=this.fw.fDa,isNaN(c)?b(this.fw):(new Date).getTime()-c<a.nk.Ima&&b(this.fw)),
delete this.fw)};a.nk.prototype.destroy=function(){delete this.Rca;var c=this.S5;delete this.S5;for(var b=document.documentElement,d=0;d<a.nk.qH.length;d++)b.removeEventListener(a.nk.qH[d],c,!0)};a.nk.qH=["touchstart","touchmove","touchcancel","touchend"];a.nk.Ima=700;a.wg=function(){this.Init()};a.b.ta(a.wg,a.b,"oj.PopupLiveRegion");a.wg.prototype.Init=function(){a.wg.u.Init.call(this);isNaN(a.wg.XD)?a.wg.XD=1:++a.wg.XD};a.wg.prototype.destroy=function(){if(!isNaN(a.wg.XD)&&(--a.wg.XD,1>a.wg.XD)){var c=
g(document.getElementById(a.wg.NP));0<c.length&&c.remove()}};a.wg.prototype.mEa=function(c){if(!a.bb.pi(c)){var b=a.wg.Dta();b.children().remove();g("\x3cdiv\x3e").text(c).appendTo(b)}};a.wg.Dta=function(){var c=g(document.getElementById(a.wg.NP));0===c.length&&(c=g("\x3cdiv\x3e"),c.attr({id:a.wg.NP,role:"log","aria-live":"polite","aria-relevant":"additions"}),c.addClass("oj-helper-hidden-accessible"),c.appendTo(document.body));return c};a.wg.NP="__oj_popup_arialiveregion";a.ol=function(c,b,d,e){a.o.ue(c,
jQuery);a.o.Eq(b);a.o.dt(d);a.o.hX(e);this.TK=c;this.cz=b;this.XQ=d;this.Gl=e?e:"";this.Init()};a.b.ta(a.ol,a.b,"oj.PopupSkipLink");a.ol.prototype.Init=function(){a.ol.u.Init.call(this);var c=this.TK,b=this.XQ,d=this.cz;delete this.cz;var e=this.Gl;delete this.Gl;var f=g("\x3ca\x3e").attr({tabindex:"-1",href:"#"});a.bb.pi(e)||f.attr("id",e);f.addClass("oj-helper-hidden-accessible");f.text(d);f.insertAfter(c);f.on("click",b);c.data(a.ol.nH,f)};a.ol.prototype.destroy=function(){var c=this.TK;delete this.TK;
var b=this.XQ;delete this.XQ;if(c){var d=c.data(a.ol.nH);c.removeData(a.ol.nH);d&&(d.off("click",b),d.remove())}};a.ol.prototype.getLink=function(){var c=this.TK,b;c&&(b=c.data(a.ol.nH));return b};a.ol.nH="oj-skiplink"});