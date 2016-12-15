/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

var l=void 0,p=!0,s=null,t=!1;function aa(){return function(a){return a}}function B(){return function(){}}function C(a){return function(b){this[a]=b}}function Q(a){return function(){return this[a]}}function R(a){return function(){return a}}var S;function ba(a,b){0==a.indexOf("dvt.")&&(a=a.substring(4));var c=a.split("."),d=eval("dvt");!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&b!==l?d[e]=b:d=d[e]?d[e]:d[e]={}}Math.floor(2147483648*Math.random()).toString(36);
(function(a){function b(a){this.Init(a.g(),a.Gf,a);this.Td=a}function c(a){this.Init(a)}a.fi={};a.fi.Go=function(){return a.o.Ta()};a.j.u(a.fi,a.j);a.fi.Yf=function(a,b,c,h){c=(c-a)*h;a=b-a;return 0==c||0==a?0:c/a};a.fi.Hi=function(a,b,c,h){b=c*(b-a);return 0==b||0==h?a:b/h+a};a.wb=function(a,b,c){this.Init(a,b,c)};a.j.u(a.wb,a.ca);a.wb.pUa=10;a.wb.cSa=40;a.wb.YRa=20;a.wb.t3=20;a.wb.Nza=5;a.wb.Pza=1;a.wb.prototype.Init=function(c,e,f){a.wb.q.Init.call(this,c);this.vc=e;this.hb=f;this.fJ=this.eP()?
7:6;if(this.vc!=s||this.hb!=s)this.K=new b(this),this.K.Gg(this),a.fi.Go()?(this.Va(a.Ub.yi,this.J3,t,this),this.Va(a.Ub.Yn,this.qwa,t,this),this.Va(a.Ub.lm,this.I3,t,this),this.Va(a.ra.Fe,this.vL,t,this)):(this.Va(a.ra.pj,this.E3,t,this),this.Va(a.ra.ei,this.D3,t,this),this.Va(a.ra.Fe,this.vL,t,this),this.Va(a.G.Hs,this.BW,t,this),this.Va(a.G.Qv,this.nea,t,this));this.Qka=0};a.wb.prototype.sp=function(a,b,c){c==s&&(c=this.Ab);a=this.Yf(a);var h=this.Yf(b);a<this.ty||h>this.paa()||(b=Math.max(h-a,
this.raa()),0<b&&(0<=a&&h<=c)&&(h=this.gs(),this.fq()?this.WK(h,c-(a+b)):this.WK(h,a),this.oca(h,b),this.u4()))};a.wb.prototype.dP=function(){return this.d7==s?t:-1!=a.fa.nb(this.d7,"zoom")};a.wb.prototype.lfb=function(){return"off"!==this.q0a};a.wb.prototype.va=function(b,c,f){if(b==s){var h=this.xc,k=this.zd,m=this.gs(),n=this.sv(m);m!=s&&0!=n&&(this.XIa=a.fi.Hi(h,k,n,this.Ab));this.Em()}c!=s&&f!=s&&(this.Ab=c,this.Lb=f);b&&(b=this.GL(b),this.Yz(b));b=this.vc!=s||this.hb!=s;this.cLa(c,f);b&&this.Hab(c,
f);this.yjb(c,f);this.Tgb(c,f);this.sjb(c,f);this.$ra(c,f);b&&(this.hab(c,f),this.eP()&&(this.dT=this.Eab()),this.xjb());this.tFa!=s&&(this.Qka=Math.max(0,a.fi.Yf(this.xc,this.zd,this.tFa,this.vb)));0<this.Qka&&this.igb(this.Qka)};a.wb.prototype.rNa=function(){return new c(this)};a.wb.prototype.GL=function(a){return this.rNa(a).parse(a)};a.wb.prototype.Yz=function(a){this.xc=a.start;this.zd=a.end;this.vb=a.width;this.XIa=a.Bsa;this.gja=a.currentTime;this.tFa=a.gfb;this.q0a=a.JKa;this.ty=Math.max(0,
a.$fb);this.fT=Math.max(0,a.Thb);isNaN(this.ty)&&(this.ty=0);isNaN(this.fT)&&(this.fT=0);this.HN=a.orientation;this.V6a=a.YOa;this.I5a=a.Bra;a.HLa!=s&&(this.d7=a.HLa.split(" "));a.Ora!=s&&0<a.Ora&&(this.NGa=a.Ora);this.b1a=a.H$a;this.K_=a.eQa;a.eQa!=s&&(this.J_=this.K_.kjb);this.Pja=a.sbb;this.c1a=a.borderTopStyle;this.nia=a.borderTopColor;this.b$=a.kta;this.T9a=a.lQa;this.a$a=a.sta;this.Z9a=a.qta;this.V9a=a.mta;this.X9a=a.ota;this.$9a=a.rta;this.Y9a=a.pta;this.U9a=a.lta;this.W9a=a.nta;this.T4a=a.fra;
this.QY=a.dra;this.yka=a.ONa;this.cFa=a.RNa;this.YEa=a.PNa;this.U6a=a.Xra;this.o2a=a.kpa;this.C9a=a.cta;this.A9a=a.cQa;this.B9a=a.dQa;this.jGa=a.BOa;this.Y5a=a.AOa;this.cJa=a.zPa;this.J8a=a.yPa};a.wb.prototype.Yf=function(b){return Math.max(0,a.fi.Yf(this.xc,this.zd,b,this.lK()))+this.ty};a.wb.prototype.Hi=function(b){return a.fi.Hi(this.xc,this.zd,Math.max(0,b-this.ty),this.lK())};a.wb.prototype.gq=function(){return"true"==this.I5a};a.wb.prototype.fq=function(){return this.gq()&&!this.Tb()};a.wb.prototype.Tb=
function(){return"vertical"==this.HN};a.wb.prototype.lba=function(){return"above"==this.V6a};a.wb.prototype.lK=function(){return this.Tb()?this.Lb-this.ty-this.fT:this.Ab-this.ty-this.fT};a.wb.prototype.paa=function(){return this.Tb()?this.Lb-this.fT:this.Ab-this.fT};a.wb.prototype.raa=function(){return this.Yla!=s?this.Yla:this.NGa!=s?this.Yla=a.fi.Yf(this.xc,this.zd,this.xc+this.NGa,this.lK()):a.wb.pUa};a.wb.prototype.caa=function(){return a.fi.Go()?this.oU()/2:0};a.wb.prototype.oU=function(){return a.fi.Go()?
30:10};a.wb.prototype.fP=function(a){var b=a.getId();return"lh"==b||"rh"==b||"lhb"==b||"rhb"==b||"grpy"==b||"lbgrh"==b||"rbgrh"==b||a.getParent()!=s&&"grpy"==a.getParent().getId()};a.wb.prototype.WO=function(){if(this.K_==s)return 0;if(this.L_==s){var b=parseInt(this.K_.width,10);this.L_=!isNaN(b)&&b<this.Ab?b:a.wb.cSa}return this.L_};a.wb.prototype.sK=function(){if(this.K_==s)return 0;if(this.UJa==s){var b=parseInt(this.K_.height,10);this.UJa=!isNaN(b)&&b<this.Lb?b:a.wb.YRa}return this.UJa};a.wb.prototype.xaa=
function(b){return a.fi.Go()&&b.targetTouches!=s?0<b.targetTouches.length?b.targetTouches[0].pageX:s:b.pageX};a.wb.prototype.yaa=function(b){return a.fi.Go()&&b.targetTouches!=s?0<b.targetTouches.length?b.targetTouches[0].pageY:s:b.pageY};a.wb.prototype.tB=R(t);a.wb.prototype.gs=function(){return this.Za(1)};a.wb.prototype.jaa=function(){return this.tB()?this.Za(3):s};a.wb.prototype.e1=function(){return this.tB()?this.Za(4):s};a.wb.prototype.SMa=function(){return this.tB()&&!this.dP()?this.Za(5):
s};a.wb.prototype.Fqa=function(){return this.tB()&&!this.dP()?this.Za(6):s};a.wb.prototype.kqa=function(){return this.Za(this.Gb()-this.fJ)};a.wb.prototype.Gqa=function(){return this.Za(this.Gb()-(this.fJ-1))};a.wb.prototype.TMa=function(){return this.Za(this.Gb()-(this.fJ-2))};a.wb.prototype.ANa=function(){return this.Za(this.Gb()-(this.fJ-3))};a.wb.prototype.XLa=function(){return this.Za(this.Gb()-(this.fJ-4))};a.wb.prototype.JNa=function(){return this.Za(this.Gb()-(this.fJ-5))};a.wb.prototype.vV=
function(a,b,c){this.Tb()?(-1!=b&&a.Eo(b),-1!=c&&a.up(c)):(-1!=b&&a.Do(b),-1!=c&&a.tp(c))};a.wb.prototype.P0=function(a){return this.Tb()?a.Nt():a.ks()};a.wb.prototype.cS=function(a){a=a.target;if(a!=s){var b=a.getId();if(b==s)return s;if("_border"==b.substr(b.length-7))return this.Opa(a);if("tick"!=b.substr(0,4)&&"ltb"!=b&&"rtb"!=b&&"bb"!=b&&"tab"!=b)return a}return s};a.wb.prototype.pOa=function(a){return"window"==a.getId()||"ftr"==a.getId()||"sta"==a.getId()||this.fP(a)?p:t};a.wb.prototype.eP=
function(){return window&&window.eP};a.wb.prototype.cLa=function(b,c){var f=new a.ka(this.g(),0,0,b,c,"bg");f.fb(this.U6a);f.Cd();this.k(f);return f};a.wb.prototype.Hab=function(b,c){var f=this.Tb(),h=f?new a.ka(this.g(),0,0,b,0,"window"):new a.ka(this.g(),0,0,0,c,"window");h.fb(this.b$,this.T9a);h.Cd();if(!this.dP()){var k=this.oU(),m=this.caa();if(f){var n=(b-36)/2,q=a.M.moveTo(n,0)+a.M.De(n+3,6,n+8,8)+a.M.lineTo(n+28,8)+a.M.De(n+33,6,n+36,0);a.M.closePath();var r=a.M.moveTo(n,0)+a.M.De(n+3,-6,
n+8,-8)+a.M.lineTo(n+28,-8)+a.M.De(n+33,-6,n+36,0);a.M.closePath();var u=new a.ka(this.g(),0,0,b,k,"lhb"),k=new a.ka(this.g(),0,0,b,k,"rhb"),v="row-resize";if(this.yka)var y=this.A$(b,10),n=this.A$(b,10);else y=this.z$(n),n=this.z$(n)}else n=(c-36)/2,q=a.M.moveTo(0,n)+a.M.De(6,n+3,8,n+8)+a.M.lineTo(8,n+28)+a.M.De(6,n+33,0,n+36),a.M.closePath(),r=a.M.moveTo(0,n)+a.M.De(-6,n+3,-8,n+8)+a.M.lineTo(-8,n+28)+a.M.De(-6,n+33,0,n+36),a.M.closePath(),u=new a.ka(this.g(),0-m,0,k,c,"lhb"),k=new a.ka(this.g(),
m,0,k,c,"rhb"),v="col-resize",this.yka?(y=this.A$(10,c),n=this.A$(10,c)):(y=this.z$(n),n=this.z$(n));u.fb(this.b$,0);k.fb(this.b$,0);u.Cd();k.Cd();q=new a.pb(this.g(),q,"lh");r=new a.pb(this.g(),r,"rh");q.fb(this.QY);q.Jb(this.QY);r.fb(this.QY);r.Jb(this.QY);this.b$==this.QY&&(q.Cd(),r.Cd());u.setCursor(v);k.setCursor(v);q.setCursor(v);r.setCursor(v);y.setCursor(v);n.setCursor(v);h.k(u);h.k(q);h.k(y);h.k(k);h.k(r);h.k(n)}h.setCursor("move");this.k(h);h=f?this.gq()?new a.Vc(this.g(),this.WO(),0,this.WO(),
c,"tab"):new a.Vc(this.g(),b-this.WO(),0,b-this.WO(),c,"tab"):this.lba()?new a.Vc(this.g(),0,this.sK(),b,this.sK(),"tab"):new a.Vc(this.g(),0,c-this.sK(),b,c-this.sK(),"tab");h.Jb(this.A9a,this.B9a);h.Cd();this.VJa=h;this.k(h);this.tB()&&(f?(h=new a.ka(this.g(),0,0,b,0,"lbg"),u=new a.ka(this.g(),0,0,b,0,"rbg")):(h=new a.ka(this.g(),0,0,0,c,"lbg"),u=new a.ka(this.g(),0,0,0,c,"rbg")),h.fb(this.jGa,this.Y5a),this.k(h),u.fb(this.cJa,this.J8a),this.k(u),a.fi.Go()&&m!=l&&(this.caa(),f?(f=new a.ka(this.g(),
0,0,b,m,"lbgrh"),m=new a.ka(this.g(),0,0,b,m,"rbgrh")):(f=new a.ka(this.g(),0,0,m,c,"lbgrh"),m=new a.ka(this.g(),0,0,m,c,"rbgrh")),f.fb(this.jGa,0),this.k(f),m.fb(this.cJa,0),this.k(m)))};a.wb.prototype.A$=function(b,c){var f=new a.yb(this.g(),this.yka,(b-this.cFa)/2,(c-this.YEa)/2,this.cFa,this.YEa,"grpy");f.bb(t);return f};a.wb.prototype.z$=function(b){var c=new a.ca(this.g(),"grpy"),f=this.T4a;if(this.Tb()){var h=8+b;b=3;for(var k=0;9>k;k++){var m=new a.Vc(this.g(),h+2*k,b,h+2*k+1,b,"dot1"+k);
m.Jb(f);c.k(m);b+=2;m=new a.Vc(this.g(),h+1+2*k,b,h+1+2*k+1,b,"dot2"+k);m.Jb(f);c.k(m);b+=2;m=new a.Vc(this.g(),h+2*k,b,h+2*k+1,b,"dot3"+k);m.Jb(f);c.k(m);b=3}m=new a.Vc(this.g(),h+18,b,h+18+1,b,"dot4");m.Jb(f);c.k(m);b+=4;m=new a.Vc(this.g(),h+18,b,h+18+1,b,"dot5")}else{h=3;b=8+b;for(k=0;9>k;k++)m=new a.Vc(this.g(),h,b+2*k,h,b+2*k+1,"dot1"+k),m.Jb(f),c.k(m),h+=2,m=new a.Vc(this.g(),h,b+1+2*k,h,b+1+2*k+1,"dot2"+k),m.Jb(f),c.k(m),h+=2,m=new a.Vc(this.g(),h,b+2*k,h,b+2*k+1,"dot3"+k),m.Jb(f),c.k(m),
h=3;m=new a.Vc(this.g(),h,b+18,h,b+18+1,"dot4");m.Jb(f);c.k(m);h+=4;m=new a.Vc(this.g(),h,b+18,h,b+18+1,"dot5")}m.Jb(f);c.k(m);c.Cd();return c};a.wb.prototype.xjb=function(){var b=this.Tb(),c=this.gs(),f=this.lK(),h=b?this.Lb:this.Ab,k=this.vb,m=this.xc,n=this.zd,b=this.XIa,q=a.fi.Hi(m,n,0,k),k=a.fi.Hi(m,n,h,k),q=this.Yf(q),h=Math.min(h,this.Yf(k)),b=this.Yf(b),h=h-q;this.fq()?this.WK(c,f-b-h):this.WK(c,b);this.oca(c,h);this.u4();this.oS=this.N$a(f)};a.wb.prototype.hab=function(b,c){var f=this.gs(),
h=a.wb.Pza/2;if(this.Tb())var k=f.$a(),m=k+h,n=k+f.getHeight(),q=n-h,r=0,u=h,v=b-h,h=new a.Vc(this.g(),r,m,b,m,"lh"),y=new a.Vc(this.g(),r,q,b,q,"rh"),x=new a.Vc(this.g(),u,0,u,k,"ltb"),z=new a.Vc(this.g(),u,n,u,c,"rtb"),q=new a.Vc(this.g(),v,k,v,n,"bb"),k=new a.Vc(this.g(),u,k,u,n,"tb");else k=0,m=k+h,n=c,q=n-h,r=f.Sa(),u=r+h,f=r+f.getWidth(),v=f-h,h=new a.Vc(this.g(),u,k,u,n,"lh"),y=new a.Vc(this.g(),v,k,v,n,"rh"),x=new a.Vc(this.g(),0,m,r+1,m,"ltb"),z=new a.Vc(this.g(),f-1,m,b,m,"rtb"),q=new a.Vc(this.g(),
r,q,f,q,"bb"),k=new a.Vc(this.g(),r,m,f,m,"tb");h.Cd();y.Cd();x.Cd();z.Cd();q.Cd();k.Cd();"none"!=this.X9a&&h.Jb(this.W9a);this.k(h);"none"!=this.Z9a&&y.Jb(this.Y9a);this.k(y);"none"!=this.c1a&&this.nia&&(x.Jb(this.nia),z.Jb(this.nia));this.k(x);this.k(z);"none"!=this.V9a&&q.Jb(this.U9a);this.k(q);"none"!=this.a$a&&k.Jb(this.$9a);this.k(k)};a.wb.prototype.Eab=function(){var b=this.Tb()?a.M.moveTo(6,0)+a.M.lineTo(0,5)+a.M.lineTo(5,5)+a.M.lineTo(5,17)+a.M.lineTo(0,17)+a.M.lineTo(6,22)+a.M.lineTo(12,
17)+a.M.lineTo(7,17)+a.M.lineTo(7,5)+a.M.lineTo(12,5)+a.M.closePath():a.M.moveTo(5,0)+a.M.lineTo(0,6)+a.M.lineTo(5,12)+a.M.lineTo(5,7)+a.M.lineTo(17,7)+a.M.lineTo(17,12)+a.M.lineTo(22,6)+a.M.lineTo(17,0)+a.M.lineTo(17,4)+a.M.lineTo(5,4)+a.M.lineTo(5,0)+a.M.closePath(),b=new a.pb(this.g(),b,"arr");b.fb("#ffffff");b.Jb("#000000");b.uc(t);this.k(b);return b};a.wb.prototype.Ww=function(a){return this.Tb()?a.getHeight():a.getWidth()};a.wb.prototype.Nib=function(a,b){this.Tb()?a.sb(b):a.Xa(b)};a.wb.prototype.sv=
function(a){return this.Tb()?a.ia():a.la()};a.wb.prototype.WK=function(b,c){c=Math.max(0,c);this.Tb()?b.ma(c):b.Z(c);if(this.tB()){this.jaa().Xa(c);var f=c+this.f1(b),h=this.e1();h.Ia(f);h.Xa(Math.max(0,this.Ab-f));a.fi.Go()&&!this.dP()&&(h=this.caa(),this.SMa().Ia(c-h),this.Fqa().Ia(f))}};a.wb.prototype.f1=function(a){return this.Ww(a)};a.wb.prototype.oca=function(b,c){c=Math.max(this.raa(),c);c=Math.min(this.Tb()?this.Lb:this.Ab,c);this.Nib(b,c);if(this.tB()){var f=this.sv(b)+c,h=this.e1();h.Ia(f);
h.Xa(Math.max(0,this.Ab-f));a.fi.Go()&&!this.dP()&&this.Fqa().Ia(f)}if(!this.dP()){var f=b.Za(3),h=b.Za(4),k=b.Za(5);this.Tb()?(h.ma(c),f.ma(c-this.oU()),k.ma(c-10)):(h.Z(c),f.Z(c-this.oU()),k.Z(c-10))}};a.wb.prototype.N$a=function(b){var c=this.vb,f=this.xc,h=this.zd,k=a.fi.Hi(f,h,1,b);b=a.fi.Hi(f,h,2,b);k=a.fi.Yf(f,h,k,c);return a.fi.Yf(f,h,b,c)-k};a.wb.prototype.yjb=function(b,c){if(this.J_!=s)for(var f=this.Tb(),h=this.lK(),k=0;k<this.J_.length;k++){var m=this.J_[k],n=parseInt(m.L("time"),10),
n=this.Yf(n),m=m.L("label"),q=0;k+1<this.J_.length?(q=parseInt(this.J_[k+1].L("time"),10),q=this.Yf(q)-n):q=h-n;this.fq()&&(n=h-n);f&&(q=this.Ab);q-=2*a.wb.Nza;this.WT(n,b,c,"tick"+k);this.QJ(n,m,b,c,q,"label"+k)}};a.wb.prototype.WT=function(b,c,f,h){b=this.Tb()?new a.Vc(this.g(),0,b,c,b,h):new a.Vc(this.g(),b,0,b,f,h);c=new a.ua(this.C9a);c.oa(a.Rc.qH,3);b.xa(c);b.Cd();this.k(b)};a.wb.prototype.QJ=function(b,c,f,h,k,m,n){n=n||new a.e("font-weight:bold");this.Tb()?(c=new a.ba(this.g(),c,4,b,m),c.Cb(n),
this.gq()&&(this.k(c),n=c.V(),this.removeChild(c),c.Ia(Math.max(4,this.Ab-n.a-4)))):(h=this.lba()?2:h-this.sK()+2,f=a.wb.Nza,c=new a.ba(this.g(),c,b+f,h,m),c.Cb(n),this.fq()&&(this.k(c),n=c.V(),this.removeChild(c),c.Ia(b-Math.min(n.a,k)-f)));a.Aa.sd(c,k,Infinity,this);c.E7a=c.js()};a.wb.prototype.sjb=function(b,c){if(!(this.gja==s||isNaN(this.gja))){var f=this.Yf(this.gja);this.Tb()?f=new a.Vc(this.g(),0,f,b,f,"ocd"):(this.gq()&&(f=b-f),f=new a.Vc(this.g(),f,0,f,c,"ocd"));f.Jb(this.o2a);f.Cd();this.k(f)}};
a.wb.prototype.Tgb=function(a,b){if(this.Pja!=s)for(var c=0;c<this.Pja.length;c++)this.k$a(this.Pja[c],a,b)};a.wb.prototype.k$a=function(b,c,f){var h=parseInt(b.L("rs"),10),k=parseInt(b.L("re"),10);b=b.L("c");if(h!=s&&k!=s){var m=this.lK(),h=this.Yf(h),k=this.Yf(k)-h;this.fq()&&(h=m-h-k);c=this.Tb()?new a.ka(this.g(),0,h,c-this.WO(),k,"ftr"):new a.ka(this.g(),h,this.lba()?this.sK():0,k,f-this.sK(),"ftr");b!=s&&c.fb(b,0.4);c.setCursor("move");c.Cd();this.k(c)}};a.wb.prototype.$ra=B();a.wb.prototype.Qoa=
function(b){var c=this.gs();c.Za(3);c.Za(4);c.Za(5);if(b!=this.sv(c)){var f=this.kqa(),h=this.Gqa(),k=this.TMa(),m=this.ANa(),n=this.XLa(),q=this.JNa();if(this.Tb())var r=c.ia,u=c.ma,v=f.Nt,y=f.Eo,x=f.ax,z=f.up,A=h.Nt,D=h.Eo,G=h.ax,K=h.up,I=k.ax,L=k.up,M=m.Nt,E=m.Eo,P=n.Nt,N=n.Eo,$=n.ax,ia=n.up,la=q.Nt,oa=q.Eo,va=q.ax,wa=q.up;else r=c.la,u=c.Z,v=f.ks,y=f.Do,x=f.vv,z=f.tp,A=h.ks,D=h.Do,G=h.vv,K=h.tp,I=k.vv,L=k.tp,M=m.ks,E=m.Do,P=n.ks,N=n.Do,$=n.vv,ia=n.tp,la=q.ks,oa=q.Do,va=q.vv,wa=q.tp;var ua=this.ty,
Ia=this.paa(),ma=this.f1(c);b=Math.max(ua,Math.min(Ia-ma,b));ua=this.lfb()?new a.B(this.g(),0.5,0,a.mf.tba):s;this.Vr(ua,c,r,u,b);this.Vr(ua,f,v,y,b);this.Vr(ua,f,x,z,b);this.Vr(ua,h,A,D,b+ma);this.Vr(ua,h,G,K,b+ma);this.Vr(ua,k,I,L,b+1);this.Vr(ua,m,M,E,b+ma-1);this.Vr(ua,n,P,N,b);this.Vr(ua,q,la,oa,b);this.Vr(ua,n,$,ia,b+ma);this.Vr(ua,q,va,wa,b+ma);this.tB()&&(c=this.jaa(),this.Vr(ua,c,c.getWidth,c.Xa,b),ma=b+ma,c=this.e1(),f=c.getWidth,h=c.Xa,k=c.Sa,m=c.Ia,n=this.Tb()?this.Lb:this.Ab,this.Vr(ua,
c,f,h,n-ma),this.Vr(ua,c,k,m,ma),a.fi.Go()&&!this.dP()&&(c=this.caa(),f=this.SMa(),h=f.Sa,k=f.Ia,m=this.Fqa(),n=m.Sa,q=m.Ia,this.Vr(ua,f,h,k,b-c),this.Vr(ua,m,n,q,ma)));ua!=s&&ua.play()}};a.wb.prototype.Vr=function(b,c,f,h,k){b!=s?b.J(a.B.Q,c,f,h,k):h.call(c,k)};a.wb.prototype.E3=function(b){var c=this.cS(b);if(c&&!("bg"==c.getId()||"ocd"==c.getId()))if("label"==c.getId().substr(0,5)&&(c instanceof a.ba||c instanceof a.qe))c.yo()&&this.g().Rf().KV(b.pageX,b.pageY,c.E7a,"#000000");else if(this.dT!=
s&&this.fP(c)&&(b=this.g().eh(b.pageX,b.pageY),b=this.Ld(b),this.Tb()?this.dT.Ga(b.x+6,b.y-10):this.dT.Ga(b.x-6,b.y-20),this.dT.uc(p)),"window"==c.getId()||"ftr"==c.getId()||"arr"==c.getId()||this.fP(c))this.eP()&&this.setCursor("move");else return c};a.wb.prototype.D3=function(a){this.ft==s&&this.setCursor("default");a=this.cS(a);if(a!=s)return this.fP(a)&&this.dT!=s&&this.dT.uc(t),a};a.wb.prototype.vL=function(b,c,f){b.stopPropagation();var h=this.cS(b);if(h&&!("window"==h.getId()||this.fP(h)))if("bg"==
h.getId()||"label"==h.getId().substr(0,5)||"ocd"==h.getId()||"lbg"==h.getId()||"rbg"==h.getId()){c==l&&(c=b.pageX);f==l&&(f=b.pageY);b=this.g().eh(c,f);b=this.Ld(b);this.Tb()?(f=b.y,h=this.Lb):(f=b.x,h=this.Ab);b=this.gs();c=f-this.Ww(b)/2;this.Qoa(c);this.fq()&&(f=this.Ab-f);var k=this.Hi(f);f=new a.Wc(a.Wc.Wfa);f.setTime(k);c=Math.max(0,Math.min(c,h-this.Ww(b)));this.fq()?(h=this.Hi(this.Ab-(c+this.Ww(b))),b=this.Hi(this.Ab-c)):(h=this.Hi(c),b=this.Hi(c+this.Ww(b)));f.mca(h);f.lca(b);this.dispatchEvent(f)}else return h};
a.wb.prototype.a0=function(b,c,f){b=this.cS(b);if(b!=s&&this.pOa(b)){if("ftr"==b.getId()||"sta"==b.getId())b=this.gs();this.F7=c;this.qFa=f;if(this.fP(b)){c=this.gs();this.fq()?(this.jma=this.Ab-c.Sa(),this.sma=this.jma-c.getWidth()):(this.sma=c.Sa(),this.jma=this.sma+c.getWidth());"grpy"==b.getParent().getId()&&(b=b.getParent());f=b.getId();"grpy"==f&&(b=c.u0(b),f=b.getId());if("lh"==f||"rh"==f)b=c.u0(b),f=b.getId();"lbgrh"==f&&(b=c.Za(0));"rbgrh"==f&&(b=c.Za(c.Gb()-3));a.fi.Go()||(this.Tb()?(b.kb(0-
a.wb.t3),b.sb(2*(b.getHeight()+a.wb.t3))):(b.Ia(0-a.wb.t3),b.Xa(2*(b.getWidth()+a.wb.t3))));this.Jgb(b.getCursor())}this.ft=b;b=new a.Wc(a.Wc.sya);this.dispatchEvent(b);return p}return t};a.wb.prototype.Jgb=function(a){var b=this.gs();b!=s&&b.setCursor(a);if(this.tB()){var b=this.jaa(),c=this.e1();b!=s&&c!=s&&(b.setCursor(a),c.setCursor(a))}};a.wb.prototype.Ohb=function(){var a=this.gs();a!=s&&a.setCursor("move");if(this.tB()){var a=this.jaa(),b=this.e1();a!=s&&b!=s&&(a.setCursor("default"),b.setCursor("default"))}};
a.wb.prototype.fU=function(){this.ft!=s&&("window"==this.ft.getId()?this.KLa(0,0):this.fP(this.ft)&&(this.upa(),a.fi.Go()||(this.Tb()?(this.ft.kb(0),this.ft.sb(this.oU())):(this.ft.Ia(0),this.ft.Xa(this.oU()))),this.Ohb()),this.ft=s,this.F7=-1)};a.wb.prototype.c0=function(a,b,c){if(this.ft!=s&&-1!=this.F7){var h=b-this.F7,k=c-this.qFa;this.F7=b;this.qFa=c;"window"==this.ft.getId()?this.SNa(0,h,k):"lh"==this.ft.getId()||"lhb"==this.ft.getId()?this.Ueb(a,h,k):("rh"==this.ft.getId()||"rhb"==this.ft.getId())&&
this.era(a,h,k)}};a.wb.prototype.J3=function(a){var b=a.touches;this.JT=b[0].pageX;this.jO=b[0].pageY;2==b.length&&(a.preventDefault(),this.KT=b[1].pageX,this.Q_=b[1].pageY,20>Math.abs(this.jO-this.Q_)?this.mA=0:this.Q_=this.KT=this.jO=this.JT=s)};a.wb.prototype.qwa=function(a){a.preventDefault();a=a.touches;if(this.KT!=s&&this.Q_!=s)50>this.mA?this.mA++:(this.era(s,a[1].pageX-this.KT,0),this.KT=a[1].pageX,this.mA=0);else{var b=Math.abs(this.jO-a[0].pageY);if(3<Math.abs(this.JT-a[0].pageX)||3<b)this.jO=
this.JT=s}};a.wb.prototype.I3=function(a){this.KT!=s&&this.Q_!=s?this.upa():this.JT!=s&&this.jO!=s&&this.vL(a,this.JT,this.jO);this.Q_=this.KT=this.jO=this.JT=s};a.wb.prototype.BW=function(b){var c=b.keyCode;if(c===a.G.lg||c===a.G.ng)c=c===a.G.lg?-1:1,(b.shiftKey?this.era:this.SNa).call(this,b,c,c)};a.wb.prototype.nea=function(b){var c=b.keyCode;if(c===a.G.lg||c===a.G.ng)c=c===a.G.lg?-1:1,(b.shiftKey?this.upa:this.KLa).call(this,c,c)};a.wb.prototype.igb=function(a){a/=this.oS;this.fq()&&(a=0-a);this.Qoa(a)};
a.wb.prototype.SNa=function(b,c,f){this.LLa(a.Wc.VVa,c,f)};a.wb.prototype.KLa=function(b,c){this.LLa(a.Wc.uya,b,c)};a.wb.prototype.LLa=function(b,c,f){var h=this.gs(),k=this.sv(h),m=this.Ww(h),n=this.ty,q=this.paa();c=this.Tb()?f:c;k+c<=n?(this.WK(h,n),m=this.fq()?a.Wc.Nua:a.Wc.nya):k+m+c>=q?(this.WK(h,q-m),m=this.fq()?a.Wc.nya:a.Wc.Nua):(this.WK(h,k+c),m=this.fq()?(q-m-k-this.ty)*this.oS:(k-this.ty)*this.oS);this.u4();b=new a.Wc(b);b.Gm(m);this.fq()?(m=this.Hi(this.Ab-(k+this.Ww(h))),h=this.Hi(this.Ab-
k)):(m=this.Hi(k),h=this.Hi(k+this.Ww(h)));b.mca(m);b.lca(h);this.dispatchEvent(b)};a.wb.prototype.Ueb=function(a,b,c){this.QNa(a,b,c,p)};a.wb.prototype.era=function(a,b,c){this.QNa(a,b,c,t)};a.wb.prototype.QNa=function(b,c,f,h){var k=this.lK();f=this.Tb()?f:c;if(0!=f){c=this.gs();var m=this.sv(c),n=this.f1(c);if(h){if(n-f<=this.raa()||m+f<=this.ty)return;b=this.Tb()?this.g().eh(this.xaa(b),this.yaa(b)).y:this.g().eh(this.xaa(b),this.yaa(b)).x;b=this.Ld(b);if(0<f&&b<=m||0>f&&b>=m)return;this.WK(c,
m+f);this.oca(c,n-f)}else{if(n+f<=this.raa()||m+n+f>=this.paa())return;b=this.Tb()?this.g().eh(this.xaa(b),this.yaa(b)).y:this.g().eh(this.xaa(b),this.yaa(b)).x;b=this.Ld(b);if(0<f&&b<=m+n||0>f&&b>=m+n)return;this.oca(c,n+f)}this.u4();b=this.Hi(this.f1(c));b=k*(this.zd-this.xc)/(b-this.xc);k=new a.Wc(a.Wc.UVa);k.MPa(b);k.jib(this.fq()?h:!h);h?k.IPa(0>f):k.IPa(0<f);this.fq()?(h=this.Hi(this.Ab-(this.sv(c)+this.Ww(c))),c=this.Hi(this.Ab-this.sv(c))):(h=this.Hi(this.sv(c)),c=this.Hi(this.sv(c)+this.Ww(c)));
k.mca(h);k.lca(c);this.dispatchEvent(k)}};a.wb.prototype.upa=function(){var b=this.xc,c=this.zd,f=this.vb,h=this.lK(),k=this.gs(),m=this.Hi(this.Ww(k)),b=h*(c-b)/(m-b),c=this.Hi(this.sma),h=this.Hi(this.jma);this.fq()?(m=this.Hi(this.Ab-(this.sv(k)+this.Ww(k))),k=this.Hi(this.Ab-this.sv(k))):(m=this.Hi(this.sv(k)),k=this.Hi(this.sv(k)+this.Ww(k)));var n=new a.Wc(a.Wc.tya);n.Bib(f);n.MPa(b);n.Cib(c);n.Aib(h);n.mca(m);n.lca(k);this.dispatchEvent(n)};a.wb.prototype.u4=function(){var b=this.gs(),c=a.wb.Pza/
2,f=this.sv(b),h=f+c,b=f+this.f1(b)-c,c=this.kqa(),k=this.Gqa(),m=this.TMa(),n=this.ANa(),q=this.XLa(),r=this.JNa();this.vV(c,h,h);this.vV(k,b,b);this.vV(m,-1,f);this.vV(n,this.P0(k),-1);this.vV(q,this.P0(c),this.P0(k));this.vV(r,this.P0(c),this.P0(k))};a.wb.prototype.dispatchEvent=function(b){a.Ez.dispatchEvent(this.vc,this.hb,this,b)};a.wb.prototype.qa=function(){this.K&&(this.K.bl(this),this.K.qa(),this.K=s);a.fi.Go()?(this.cc(a.Ub.yi,this.J3,t,this),this.cc(a.Ub.Yn,this.qwa,t,this),this.cc(a.Ub.lm,
this.I3,t,this),this.cc(a.ra.Fe,this.vL,t,this)):(this.cc(a.ra.pj,this.E3,t,this),this.cc(a.ra.ei,this.D3,t,this),this.cc(a.ra.Fe,this.vL,t,this),this.cc(a.G.Hs,this.BW,t,this),this.cc(a.G.Qv,this.nea,t,this));a.wb.q.qa.call(this)};a.j.u(c,a.j);c.prototype.Init=C("W");c.prototype.parse=function(a){return this.JL(a)};c.prototype.JL=function(b){var c={};c.JKa=b.animationOnClick;b.startTime!=s&&(c.start=b.startTime);b.endTime!=s&&(c.end=b.endTime);c.start==s&&(c.start=(new Date).getTime());if(c.end==
s||c.end<=c.start)c.end=c.start+864E5;b.currentTime!=s&&(c.currentTime=b.currentTime);b.initialFocusTime!=s&&(c.gfb=b.initialFocusTime);c.orientation="horizontal";b.orientation!=s&&(c.orientation=b.orientation);c.HLa=b.featuresOff;c.Ora=b.minimumWindowSize;c.$fb=b.leftMargin;c.Thb=b.rightMargin;if(b.viewportEndTime!=s){var f=b.viewportEndTime,h=c.start;b.viewportStartTime!=s&&b.viewportStartTime<f&&(h=b.viewportStartTime);c.width=b.viewportEndPos!=s?this.TKa(c.start,c.end,h,f,b.viewportEndPos):this.TKa(c.start,
c.end,h,f,this.W.Ab);c.Bsa=h}else c.Bsa=c.start;0==c.width&&(c.width=1E3);c.YOa="below";c.Q1="none";c.Bra=a.o.$(this.W.g()).toString();b.rtl!=s&&(c.Bra=b.rtl.toString());c.dra="#FFFFFF";c.fra="#B3C6DB";c.kta="#FFFFFF";c.lQa=1;c.sta="solid";c.qta="solid";c.mta="solid";c.ota="solid";c.rta="#4F4F4F";c.pta="#4F4F4F";c.lta="#4F4F4F";c.nta="#4F4F4F";c.Xra="#E6ECF3";c.kpa="#C000D1";c.cta="#BCC7D2";c.cQa="#e5e5e5";c.dQa=1;c.BOa="#FFFFFF";c.AOa=0.7;c.zPa="#FFFFFF";c.yPa=0.7;b.style!=s&&(b.style.handleFillColor!=
s&&(c.dra=b.style.handleFillColor),b.style.handleTextureColor!=s&&(c.fra=b.style.handleTextureColor),b.style.handleBackgroundImage!=s&&(c.ONa=b.style.handleBackgroundImage),b.style.handleWidth!=s&&(c.RNa=b.style.handleWidth),b.style.handleHeight!=s&&(c.PNa=b.style.handleHeight),b.style.windowBackgroundColor!=s&&(c.kta=b.style.windowBackgroundColor),b.style.windowBackgroundAlpha!=s&&(c.lQa=b.style.windowBackgroundAlpha),b.style.windowBorderTopStyle!=s&&(c.sta=b.style.windowBorderTopStyle),b.style.windowBorderRightStyle!=
s&&(c.qta=b.style.windowBorderRightStyle),b.style.windowBorderBottomStyle!=s&&(c.mta=b.style.windowBorderBottomStyle),b.style.windowBorderLeftStyle!=s&&(c.ota=b.style.windowBorderLeftStyle),b.style.windowBorderTopColor!=s&&(c.rta=b.style.windowBorderTopColor),b.style.windowBorderRightColor!=s&&(c.pta=b.style.windowBorderRightColor),b.style.windowBorderBottomColor!=s&&(c.lta=b.style.windowBorderBottomColor),b.style.windowBorderLeftColor!=s&&(c.nta=b.style.windowBorderLeftColor),b.style.overviewBackgroundColor!=
s&&(c.Xra=b.style.overviewBackgroundColor),b.style.currentTimeIndicatorColor!=s&&(c.kpa=b.style.currentTimeIndicatorColor),b.style.timeIndicatorColor!=s&&(c.cta=b.style.timeIndicatorColor),b.style.leftFilterPanelColor!=s&&(c.BOa=b.style.leftFilterPanelColor),b.style.leftFilterPanelAlpha!=s&&(c.AOa=b.style.leftFilterPanelAlpha),b.style.rightFilterPanelColor!=s&&(c.zPa=b.style.rightFilterPanelColor),b.style.rightFilterPanelAlpha!=s&&(c.yPa=b.style.rightFilterPanelAlpha));return c};c.prototype.TKa=function(a,
b,c,h,k){a=k*(b-a);c=h-c;return 0==a||0==c?0:a/c};a.Wc=function(b){this.Init(a.Wc.ue);this.Rr=b};a.j.u(a.Wc,a.Ag);a.Wc.ue="overview";a.Wc.sya="dropCallback";a.Wc.Wfa="scrollTime";a.Wc.VVa="scrollPos";a.Wc.uya="scrollEnd";a.Wc.tya="rangeChange";a.Wc.UVa="rangeChanging";a.Wc.Qya="time";a.Wc.zxa="pos";a.Wc.BUa="oldSize";a.Wc.sUa="newSize";a.Wc.CUa="oldStartTime";a.Wc.gxa="newStartTime";a.Wc.AUa="oldEndTime";a.Wc.fxa="newEndTime";a.Wc.DSa="expand";a.Wc.CSa="endHandle";a.Wc.nya=-1;a.Wc.Nua=-2;a.Wc.prototype.dn=
Q("Rr");a.Wc.prototype.setTime=function(b){this.Ej(a.Wc.Qya,b)};a.Wc.prototype.getTime=function(){return this.mp(a.Wc.Qya)};a.Wc.prototype.Bib=function(b){this.Ej(a.Wc.BUa,b)};a.Wc.prototype.MPa=function(b){this.Ej(a.Wc.sUa,b)};a.Wc.prototype.Cib=function(b){this.Ej(a.Wc.CUa,b)};a.Wc.prototype.mca=function(b){this.Ej(a.Wc.gxa,b)};a.Wc.prototype.tqa=function(){return this.mp(a.Wc.gxa)};a.Wc.prototype.Aib=function(b){this.Ej(a.Wc.AUa,b)};a.Wc.prototype.lca=function(b){this.Ej(a.Wc.fxa,b)};a.Wc.prototype.sqa=
function(){return this.mp(a.Wc.fxa)};a.Wc.prototype.IPa=function(b){this.Ej(a.Wc.DSa,b)};a.Wc.prototype.jib=function(b){this.Ej(a.Wc.CSa,b)};a.Wc.prototype.Gm=function(b){this.Ej(a.Wc.zxa,b)};a.Wc.prototype.pi=function(){return this.mp(a.Wc.zxa)};a.j.u(b,a.K);b.prototype.Gg=function(c){b.q.Gg.call(this,c);a.Gl.Y_(this.Td,this.GN,this.FN,this.EN,this)};b.prototype.GN=function(b){return a.o.Ta()?this.RZ(b):this.OZ(b)};b.prototype.FN=function(b){return a.o.Ta()?this.QZ(b):this.NZ(b)};b.prototype.EN=
function(b){return a.o.Ta()?this.PZ(b):this.MZ(b)};b.prototype.gj=function(b,c){this.Zl||(this.Zl=this.za.mB());return new a.N(b-this.Zl.x,c-this.Zl.y)};b.prototype.OZ=function(b){if(b.button!=a.ra.rfa){var c=this.gj(b.pageX,b.pageY);a.K.sc(b);this.g().xe.SE.parentNode.focus();return this.Td.a0(b,c.x,c.y)}return t};b.prototype.NZ=function(a){var b=this.gj(a.pageX,a.pageY);a.stopPropagation();this.Td.c0(a,b.x,b.y);return p};b.prototype.MZ=function(a){a.stopPropagation();this.Td.fU();this.Zl=s};b.prototype.RZ=
function(a){var b=a.touches;a.stopPropagation();return 1==b.length?(b=this.gj(b[0].pageX,b[0].pageY),a.preventDefault(),this.Td.a0(a,b.x,b.y)):t};b.prototype.QZ=function(a){var b=a.touches;1==b.length&&(b=this.gj(b[0].pageX,b[0].pageY),this.Td.c0(a,b.x,b.y),a.preventDefault());a.stopPropagation()};b.prototype.PZ=function(b){this.Td.fU();a.K.sc(b);this.Zl=s};a.Bb(a,"Overview",a.wb);a.Bb(a.wb.prototype,"render",a.wb.prototype.va)})(dvt);
  return dvt;
});
