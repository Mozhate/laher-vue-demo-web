webpackJsonp([3],{"/n6Q":function(t,n,i){i("zQR9"),i("+tPU"),t.exports=i("Kh4W").f("iterator")},"06OY":function(t,n,i){var e=i("3Eo+")("meta"),o=i("EqjI"),r=i("D2L2"),s=i("evD5").f,a=0,c=Object.isExtensible||function(){return!0},h=!i("S82l")(function(){return c(Object.preventExtensions({}))}),l=function(t){s(t,e,{value:{i:"O"+ ++a,w:{}}})},u=t.exports={KEY:e,NEED:!1,fastKey:function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!r(t,e)){if(!c(t))return"F";if(!n)return"E";l(t)}return t[e].i},getWeak:function(t,n){if(!r(t,e)){if(!c(t))return!0;if(!n)return!1;l(t)}return t[e].w},onFreeze:function(t){return h&&u.NEED&&c(t)&&!r(t,e)&&l(t),t}}},"5QVw":function(t,n,i){t.exports={default:i("BwfY"),__esModule:!0}},"7UMu":function(t,n,i){var e=i("R9M2");t.exports=Array.isArray||function(t){return"Array"==e(t)}},BwfY:function(t,n,i){i("fWfb"),i("M6a0"),i("OYls"),i("QWe/"),t.exports=i("FeBl").Symbol},JXqp:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=i("pFYg"),o=i.n(e),r={data:function(){return{}},name:"RibbonEffect",created:function(){"object"===("undefined"==typeof window?"undefined":o()(window))&&(window.Ribbons=function(){var t=window,n=document.body,i=document.documentElement,e=function t(){if(1===arguments.length){if(Array.isArray(arguments[0])){var n=Math.round(t(0,arguments[0].length-1));return arguments[0][n]}return t(0,arguments[0])}return 2===arguments.length?Math.random()*(arguments[1]-arguments[0])+arguments[0]:0},r=function(e){var o=Math.max(0,t.innerWidth||i.clientWidth||n.clientWidth||0),r=Math.max(0,t.innerHeight||i.clientHeight||n.clientHeight||0),s=Math.max(0,t.pageXOffset||i.scrollLeft||n.scrollLeft||0)-(i.clientLeft||0),a=Math.max(0,t.pageYOffset||i.scrollTop||n.scrollTop||0)-(i.clientTop||0);return{width:o,height:r,ratio:o/r,centerx:o/2,centery:r/2,scrollx:s,scrolly:a}},s=function(t,n){this.x=0,this.y=0,this.set(t,n)};s.prototype={constructor:s,set:function(t,n){this.x=t||0,this.y=n||0},copy:function(t){return this.x=t.x||0,this.y=t.y||0,this},multiply:function(t,n){return this.x*=t||1,this.y*=n||1,this},divide:function(t,n){return this.x/=t||1,this.y/=n||1,this},add:function(t,n){return this.x+=t||0,this.y+=n||0,this},subtract:function(t,n){return this.x-=t||0,this.y-=n||0,this},clampX:function(t,n){return this.x=Math.max(t,Math.min(this.x,n)),this},clampY:function(t,n){return this.y=Math.max(t,Math.min(this.y,n)),this},flipX:function(){return this.x*=-1,this},flipY:function(){return this.y*=-1,this}};var a=function(t){this._canvas=null,this._context=null,this._sto=null,this._width=0,this._height=0,this._scroll=0,this._ribbons=[],this._options={colorSaturation:"80%",colorBrightness:"60%",colorAlpha:.65,colorCycleSpeed:6,verticalPosition:"center",horizontalSpeed:200,ribbonCount:3,strokeSize:0,parallaxAmount:-.5,animateSections:!0},this._onDraw=this._onDraw.bind(this),this._onResize=this._onResize.bind(this),this._onScroll=this._onScroll.bind(this),this.setOptions(t),this.init()};return a.prototype={constructor:a,setOptions:function(t){if("object"===(void 0===t?"undefined":o()(t)))for(var n in t)t.hasOwnProperty(n)&&(this._options[n]=t[n])},init:function(){try{this._canvas=document.createElement("canvas"),this._canvas.style.display="block",this._canvas.style.position="fixed",this._canvas.style.margin="0",this._canvas.style.padding="0",this._canvas.style.border="0",this._canvas.style.outline="0",this._canvas.style.left="0",this._canvas.style.top="0",this._canvas.style.width="100%",this._canvas.style.height="100%",this._canvas.style["z-index"]="-1",this._canvas.style["background-color"]="#fff",this._canvas.id="bgCanvas",this._onResize(),this._context=this._canvas.getContext("2d"),this._context.clearRect(0,0,this._width,this._height),this._context.globalAlpha=this._options.colorAlpha,window.addEventListener("resize",this._onResize),window.addEventListener("scroll",this._onScroll),document.body.appendChild(this._canvas)}catch(t){return void console.warn("Canvas Context Error: "+t.toString())}this._onDraw()},addRibbon:function(){var t=Math.round(e(1,9))>5?"right":"left",n=1e3,i=this._width+200,o=0,r=0,a="right"===t?-200:i,c=Math.round(e(0,this._height));/^(top|min)$/i.test(this._options.verticalPosition)?c=200:/^(middle|center)$/i.test(this._options.verticalPosition)?c=this._height/2:/^(bottom|max)$/i.test(this._options.verticalPosition)&&(c=this._height-200);for(var h=[],l=new s(a,c),u=new s(a,c),f=null,p=Math.round(e(0,360)),d=0;!(n<=0);){if(n--,o=Math.round((1*Math.random()-.2)*this._options.horizontalSpeed),r=Math.round((1*Math.random()-.5)*(.25*this._height)),(f=new s).copy(u),"right"===t){if(f.add(o,r),u.x>=i)break}else if("left"===t&&(f.subtract(o,r),u.x<=-200))break;h.push({point1:new s(l.x,l.y),point2:new s(u.x,u.y),point3:f,color:p,delay:d,dir:t,alpha:0,phase:0}),l.copy(u),u.copy(f),d+=4,p+=this._options.colorCycleSpeed}this._ribbons.push(h)},_drawRibbonSection:function(t){if(t){if(t.phase>=1&&t.alpha<=0)return!0;if(t.delay<=0){if(t.phase+=.02,t.alpha=1*Math.sin(t.phase),t.alpha=t.alpha<=0?0:t.alpha,t.alpha=t.alpha>=1?1:t.alpha,this._options.animateSections){var n=.1*Math.sin(1+t.phase*Math.PI/2);"right"===t.dir?(t.point1.add(n,0),t.point2.add(n,0),t.point3.add(n,0)):(t.point1.subtract(n,0),t.point2.subtract(n,0),t.point3.subtract(n,0)),t.point1.add(0,n),t.point2.add(0,n),t.point3.add(0,n)}}else t.delay-=.5;var i=this._options.colorSaturation,e=this._options.colorBrightness,o="hsla("+t.color+", "+i+", "+e+", "+t.alpha+" )";this._context.save(),0!==this._options.parallaxAmount&&this._context.translate(0,this._scroll*this._options.parallaxAmount),this._context.beginPath(),this._context.moveTo(t.point1.x,t.point1.y),this._context.lineTo(t.point2.x,t.point2.y),this._context.lineTo(t.point3.x,t.point3.y),this._context.fillStyle=o,this._context.fill(),this._options.strokeSize>0&&(this._context.lineWidth=this._options.strokeSize,this._context.strokeStyle=o,this._context.lineCap="round",this._context.stroke()),this._context.restore()}return!1},_onDraw:function(){for(var t=0,n=this._ribbons.length;t<n;++t)this._ribbons[t]||this._ribbons.splice(t,1);this._context.clearRect(0,0,this._width,this._height);for(var i=0;i<this._ribbons.length;++i){for(var e=this._ribbons[i],o=e.length,r=0,s=0;s<o;++s)this._drawRibbonSection(e[s])&&r++;r>=o&&(this._ribbons[i]=null)}this._ribbons.length<this._options.ribbonCount&&this.addRibbon(),requestAnimationFrame(this._onDraw)},_onResize:function(t){var n=r();this._width=n.width,this._height=n.height,this._canvas&&(this._canvas.width=this._width,this._canvas.height=this._height,this._context&&(this._context.globalAlpha=this._options.colorAlpha))},_onScroll:function(t){var n=r();this._scroll=n.scrolly}},a}()),new Ribbons}},s={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",[i("div",{on:{click:function(n){return t.$router.push({path:"/"})}}},[t._v("返回首页")])])},staticRenderFns:[]};var a=i("VU/8")(r,s,!1,function(t){i("do/2")},"data-v-67bceabc",null);n.default=a.exports},Kh4W:function(t,n,i){n.f=i("dSzd")},LKZe:function(t,n,i){var e=i("NpIQ"),o=i("X8DO"),r=i("TcQ7"),s=i("MmMw"),a=i("D2L2"),c=i("SfB7"),h=Object.getOwnPropertyDescriptor;n.f=i("+E39")?h:function(t,n){if(t=r(t),n=s(n,!0),c)try{return h(t,n)}catch(t){}if(a(t,n))return o(!e.f.call(t,n),t[n])}},OYls:function(t,n,i){i("crlp")("asyncIterator")},"QWe/":function(t,n,i){i("crlp")("observable")},Rrel:function(t,n,i){var e=i("TcQ7"),o=i("n0T6").f,r={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return s&&"[object Window]"==r.call(t)?function(t){try{return o(t)}catch(t){return s.slice()}}(t):o(e(t))}},Xc4G:function(t,n,i){var e=i("lktj"),o=i("1kS7"),r=i("NpIQ");t.exports=function(t){var n=e(t),i=o.f;if(i)for(var s,a=i(t),c=r.f,h=0;a.length>h;)c.call(t,s=a[h++])&&n.push(s);return n}},Zzip:function(t,n,i){t.exports={default:i("/n6Q"),__esModule:!0}},crlp:function(t,n,i){var e=i("7KvD"),o=i("FeBl"),r=i("O4g8"),s=i("Kh4W"),a=i("evD5").f;t.exports=function(t){var n=o.Symbol||(o.Symbol=r?{}:e.Symbol||{});"_"==t.charAt(0)||t in n||a(n,t,{value:s.f(t)})}},"do/2":function(t,n){},fWfb:function(t,n,i){"use strict";var e=i("7KvD"),o=i("D2L2"),r=i("+E39"),s=i("kM2E"),a=i("880/"),c=i("06OY").KEY,h=i("S82l"),l=i("e8AB"),u=i("e6n0"),f=i("3Eo+"),p=i("dSzd"),d=i("Kh4W"),y=i("crlp"),_=i("Xc4G"),b=i("7UMu"),v=i("77Pl"),m=i("EqjI"),g=i("sB3e"),x=i("TcQ7"),w=i("MmMw"),S=i("X8DO"),O=i("Yobk"),M=i("Rrel"),E=i("LKZe"),P=i("1kS7"),k=i("evD5"),j=i("lktj"),D=E.f,R=k.f,z=M.f,A=e.Symbol,T=e.JSON,W=T&&T.stringify,F=p("_hidden"),Q=p("toPrimitive"),Y={}.propertyIsEnumerable,N=l("symbol-registry"),C=l("symbols"),I=l("op-symbols"),K=Object.prototype,L="function"==typeof A&&!!P.f,B=e.QObject,X=!B||!B.prototype||!B.prototype.findChild,J=r&&h(function(){return 7!=O(R({},"a",{get:function(){return R(this,"a",{value:7}).a}})).a})?function(t,n,i){var e=D(K,n);e&&delete K[n],R(t,n,i),e&&t!==K&&R(K,n,e)}:R,$=function(t){var n=C[t]=O(A.prototype);return n._k=t,n},q=L&&"symbol"==typeof A.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof A},U=function(t,n,i){return t===K&&U(I,n,i),v(t),n=w(n,!0),v(i),o(C,n)?(i.enumerable?(o(t,F)&&t[F][n]&&(t[F][n]=!1),i=O(i,{enumerable:S(0,!1)})):(o(t,F)||R(t,F,S(1,{})),t[F][n]=!0),J(t,n,i)):R(t,n,i)},Z=function(t,n){v(t);for(var i,e=_(n=x(n)),o=0,r=e.length;r>o;)U(t,i=e[o++],n[i]);return t},G=function(t){var n=Y.call(this,t=w(t,!0));return!(this===K&&o(C,t)&&!o(I,t))&&(!(n||!o(this,t)||!o(C,t)||o(this,F)&&this[F][t])||n)},H=function(t,n){if(t=x(t),n=w(n,!0),t!==K||!o(C,n)||o(I,n)){var i=D(t,n);return!i||!o(C,n)||o(t,F)&&t[F][n]||(i.enumerable=!0),i}},V=function(t){for(var n,i=z(x(t)),e=[],r=0;i.length>r;)o(C,n=i[r++])||n==F||n==c||e.push(n);return e},tt=function(t){for(var n,i=t===K,e=z(i?I:x(t)),r=[],s=0;e.length>s;)!o(C,n=e[s++])||i&&!o(K,n)||r.push(C[n]);return r};L||(a((A=function(){if(this instanceof A)throw TypeError("Symbol is not a constructor!");var t=f(arguments.length>0?arguments[0]:void 0),n=function(i){this===K&&n.call(I,i),o(this,F)&&o(this[F],t)&&(this[F][t]=!1),J(this,t,S(1,i))};return r&&X&&J(K,t,{configurable:!0,set:n}),$(t)}).prototype,"toString",function(){return this._k}),E.f=H,k.f=U,i("n0T6").f=M.f=V,i("NpIQ").f=G,P.f=tt,r&&!i("O4g8")&&a(K,"propertyIsEnumerable",G,!0),d.f=function(t){return $(p(t))}),s(s.G+s.W+s.F*!L,{Symbol:A});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),it=0;nt.length>it;)p(nt[it++]);for(var et=j(p.store),ot=0;et.length>ot;)y(et[ot++]);s(s.S+s.F*!L,"Symbol",{for:function(t){return o(N,t+="")?N[t]:N[t]=A(t)},keyFor:function(t){if(!q(t))throw TypeError(t+" is not a symbol!");for(var n in N)if(N[n]===t)return n},useSetter:function(){X=!0},useSimple:function(){X=!1}}),s(s.S+s.F*!L,"Object",{create:function(t,n){return void 0===n?O(t):Z(O(t),n)},defineProperty:U,defineProperties:Z,getOwnPropertyDescriptor:H,getOwnPropertyNames:V,getOwnPropertySymbols:tt});var rt=h(function(){P.f(1)});s(s.S+s.F*rt,"Object",{getOwnPropertySymbols:function(t){return P.f(g(t))}}),T&&s(s.S+s.F*(!L||h(function(){var t=A();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))})),"JSON",{stringify:function(t){for(var n,i,e=[t],o=1;arguments.length>o;)e.push(arguments[o++]);if(i=n=e[1],(m(n)||void 0!==t)&&!q(t))return b(n)||(n=function(t,n){if("function"==typeof i&&(n=i.call(this,t,n)),!q(n))return n}),e[1]=n,W.apply(T,e)}}),A.prototype[Q]||i("hJx8")(A.prototype,Q,A.prototype.valueOf),u(A,"Symbol"),u(Math,"Math",!0),u(e.JSON,"JSON",!0)},n0T6:function(t,n,i){var e=i("Ibhu"),o=i("xnc9").concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},pFYg:function(t,n,i){"use strict";n.__esModule=!0;var e=s(i("Zzip")),o=s(i("5QVw")),r="function"==typeof o.default&&"symbol"==typeof e.default?function(t){return typeof t}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":typeof t};function s(t){return t&&t.__esModule?t:{default:t}}n.default="function"==typeof o.default&&"symbol"===r(e.default)?function(t){return void 0===t?"undefined":r(t)}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":void 0===t?"undefined":r(t)}}});
//# sourceMappingURL=3.cd43c4aa0dde74078b1e.js.map