var ut=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);import{_ as ct}from"./iframe.d449c1e8.js";import{g as B,c as vt,e as Je,f as Nr,i as fe,a as lt,h as ft,b as ht,d as pt,j as dt,k as mt,o as gt,l as yt,w as Et,m as St,n as Ot,p as he,_ as H,q as Pr,r as wt,s as Rt,t as $t,u as pe,v as It,x as Tt,y as bt,z as Lr,A as Ct,B as Dr,C as jr,D as _t}from"./es.array.concat.21f83d31.js";import{c as or}from"./_commonjsHelpers.712cc82f.js";import"../sb-preview/runtime.js";var Da=ut((ka,I)=>{var Nt=B,Pt=vt,de=Pt(Nt.process)==="process",Lt=TypeError,Dt=function(e,r){if(e<r)throw Lt("Not enough arguments");return e},jt=Je,Ar=/(?:ipad|iphone|ipod).*applewebkit/i.test(jt),O=B,At=dt,Ut=Nr,sr=fe,Gt=mt,Ur=lt,ur=ft,Mt=ht,cr=pt,kt=Dt,Bt=Ar,Ht=de,Ge=O.setImmediate,Me=O.clearImmediate,Vt=O.process,Ie=O.Dispatch,Yt=O.Function,vr=O.MessageChannel,Ft=O.String,Te=0,K={},lr="onreadystatechange",z,_,be,Ce;Ur(function(){z=O.location});var Ke=function(e){if(Gt(K,e)){var r=K[e];delete K[e],r()}},_e=function(e){return function(){Ke(e)}},fr=function(e){Ke(e.data)},hr=function(e){O.postMessage(Ft(e),z.protocol+"//"+z.host)};(!Ge||!Me)&&(Ge=function(r){kt(arguments.length,1);var n=sr(r)?r:Yt(r),o=Mt(arguments,1);return K[++Te]=function(){At(n,void 0,o)},_(Te),Te},Me=function(r){delete K[r]},Ht?_=function(e){Vt.nextTick(_e(e))}:Ie&&Ie.now?_=function(e){Ie.now(_e(e))}:vr&&!Bt?(be=new vr,Ce=be.port2,be.port1.onmessage=fr,_=Ut(Ce.postMessage,Ce)):O.addEventListener&&sr(O.postMessage)&&!O.importScripts&&z&&z.protocol!=="file:"&&!Ur(hr)?(_=hr,O.addEventListener("message",fr,!1)):lr in cr("script")?_=function(e){ur.appendChild(cr("script"))[lr]=function(){ur.removeChild(this),Ke(e)}}:_=function(e){setTimeout(_e(e),0)});var Gr={set:Ge,clear:Me},Mr=function(){this.head=null,this.tail=null};Mr.prototype={add:function(e){var r={item:e,next:null},n=this.tail;n?n.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};var kr=Mr,Wt=Je,Jt=/ipad|iphone|ipod/i.test(Wt)&&typeof Pebble<"u",Kt=Je,qt=/web0s(?!.*chrome)/i.test(Kt),P=B,pr=Nr,Qt=gt.f,Ne=Gr.set,zt=kr,Xt=Ar,Zt=Jt,xt=qt,Pe=de,dr=P.MutationObserver||P.WebKitMutationObserver,mr=P.document,gr=P.process,te=P.Promise,yr=Qt(P,"queueMicrotask"),ke=yr&&yr.value,j,Le,De,ne,Er;if(!ke){var ae=new zt,ie=function(){var e,r;for(Pe&&(e=gr.domain)&&e.exit();r=ae.get();)try{r()}catch(n){throw ae.head&&j(),n}e&&e.enter()};!Xt&&!Pe&&!xt&&dr&&mr?(Le=!0,De=mr.createTextNode(""),new dr(ie).observe(De,{characterData:!0}),j=function(){De.data=Le=!Le}):!Zt&&te&&te.resolve?(ne=te.resolve(void 0),ne.constructor=te,Er=pr(ne.then,ne),j=function(){Er(ie)}):Pe?j=function(){gr.nextTick(ie)}:(Ne=pr(Ne,P),j=function(){Ne(ie)}),ke=function(e){ae.head||j(),ae.add(e)}}var en=ke,rn=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}},qe=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}},tn=B,me=tn.Promise,Br=typeof Deno=="object"&&Deno&&typeof Deno.version=="object",nn=Br,an=de,on=!nn&&!an&&typeof window=="object"&&typeof document=="object",sn=B,q=me,un=fe,cn=yt,vn=St,ln=Et,fn=on,hn=Br,je=Ot;q&&q.prototype;var pn=ln("species"),Be=!1,Hr=un(sn.PromiseRejectionEvent),dn=cn("Promise",function(){var e=vn(q),r=e!==String(q);if(!r&&je===66)return!0;if(!je||je<51||!/native code/.test(e)){var n=new q(function(l){l(1)}),o=function(l){l(function(){},function(){})},s=n.constructor={};if(s[pn]=o,Be=n.then(function(){})instanceof o,!Be)return!0}return!r&&(fn||hn)&&!Hr}),X={CONSTRUCTOR:dn,REJECTION_EVENT:Hr,SUBCLASSING:Be},V={},Sr=he,mn=TypeError,gn=function(e){var r,n;this.promise=new e(function(o,s){if(r!==void 0||n!==void 0)throw mn("Bad Promise constructor");r=o,n=s}),this.resolve=Sr(r),this.reject=Sr(n)};V.f=function(e){return new gn(e)};var yn=H,ve=de,T=B,k=pe,Or=Pr,wr=wt,En=Rt,Sn=$t,On=he,ce=fe,wn=Lr,Rn=It,$n=Tt,Vr=Gr.set,Qe=en,In=rn,Tn=qe,bn=kr,Yr=bt,le=me,ze=X,Fr=V,ge="Promise",Wr=ze.CONSTRUCTOR,Cn=ze.REJECTION_EVENT,_n=ze.SUBCLASSING,Ae=Yr.getterFor(ge),Nn=Yr.set,A=le&&le.prototype,N=le,oe=A,Jr=T.TypeError,He=T.document,Xe=T.process,Ve=Fr.f,Pn=Ve,Ln=!!(He&&He.createEvent&&T.dispatchEvent),Kr="unhandledrejection",Dn="rejectionhandled",Rr=0,qr=1,jn=2,Ze=1,Qr=2,se,$r,An,Ir,zr=function(e){var r;return wn(e)&&ce(r=e.then)?r:!1},Xr=function(e,r){var n=r.value,o=r.state===qr,s=o?e.ok:e.fail,l=e.resolve,c=e.reject,d=e.domain,h,R,S;try{s?(o||(r.rejection===Qr&&Gn(r),r.rejection=Ze),s===!0?h=n:(d&&d.enter(),h=s(n),d&&(d.exit(),S=!0)),h===e.promise?c(Jr("Promise-chain cycle")):(R=zr(h))?k(R,h,l,c):l(h)):c(n)}catch(m){d&&!S&&d.exit(),c(m)}},Zr=function(e,r){e.notified||(e.notified=!0,Qe(function(){for(var n=e.reactions,o;o=n.get();)Xr(o,e);e.notified=!1,r&&!e.rejection&&Un(e)}))},xr=function(e,r,n){var o,s;Ln?(o=He.createEvent("Event"),o.promise=r,o.reason=n,o.initEvent(e,!1,!0),T.dispatchEvent(o)):o={promise:r,reason:n},!Cn&&(s=T["on"+e])?s(o):e===Kr&&In("Unhandled promise rejection",n)},Un=function(e){k(Vr,T,function(){var r=e.facade,n=e.value,o=Tr(e),s;if(o&&(s=Tn(function(){ve?Xe.emit("unhandledRejection",n,r):xr(Kr,r,n)}),e.rejection=ve||Tr(e)?Qr:Ze,s.error))throw s.value})},Tr=function(e){return e.rejection!==Ze&&!e.parent},Gn=function(e){k(Vr,T,function(){var r=e.facade;ve?Xe.emit("rejectionHandled",r):xr(Dn,r,e.value)})},U=function(e,r,n){return function(o){e(r,o,n)}},G=function(e,r,n){e.done||(e.done=!0,n&&(e=n),e.value=r,e.state=jn,Zr(e,!0))},Ye=function(e,r,n){if(!e.done){e.done=!0,n&&(e=n);try{if(e.facade===r)throw Jr("Promise can't be resolved itself");var o=zr(r);o?Qe(function(){var s={done:!1};try{k(o,r,U(Ye,s,e),U(G,s,e))}catch(l){G(s,l,e)}}):(e.value=r,e.state=qr,Zr(e,!1))}catch(s){G({done:!1},s,e)}}};if(Wr&&(N=function(r){Rn(this,oe),On(r),k(se,this);var n=Ae(this);try{r(U(Ye,n),U(G,n))}catch(o){G(n,o)}},oe=N.prototype,se=function(r){Nn(this,{type:ge,done:!1,notified:!1,parent:!1,reactions:new bn,rejection:!1,state:Rr,value:void 0})},se.prototype=Or(oe,"then",function(r,n){var o=Ae(this),s=Ve($n(this,N));return o.parent=!0,s.ok=ce(r)?r:!0,s.fail=ce(n)&&n,s.domain=ve?Xe.domain:void 0,o.state===Rr?o.reactions.add(s):Qe(function(){Xr(s,o)}),s.promise}),$r=function(){var e=new se,r=Ae(e);this.promise=e,this.resolve=U(Ye,r),this.reject=U(G,r)},Fr.f=Ve=function(e){return e===N||e===An?new $r(e):Pn(e)},ce(le)&&A!==Object.prototype)){Ir=A.then,_n||Or(A,"then",function(r,n){var o=this;return new N(function(s,l){k(Ir,o,s,l)}).then(r,n)},{unsafe:!0});try{delete A.constructor}catch{}wr&&wr(A,oe)}yn({global:!0,constructor:!0,wrap:!0,forced:Wr},{Promise:N});En(N,ge,!1);Sn(ge);var Mn=me,kn=Ct,Bn=X.CONSTRUCTOR,et=Bn||!kn(function(e){Mn.all(e).then(void 0,function(){})}),Hn=H,Vn=pe,Yn=he,Fn=V,Wn=qe,Jn=Dr,Kn=et;Hn({target:"Promise",stat:!0,forced:Kn},{all:function(r){var n=this,o=Fn.f(n),s=o.resolve,l=o.reject,c=Wn(function(){var d=Yn(n.resolve),h=[],R=0,S=1;Jn(r,function(m){var F=R++,p=!1;S++,Vn(d,n,m).then(function(L){p||(p=!0,h[F]=L,--S||s(h))},l)}),--S||s(h)});return c.error&&l(c.value),o.promise}});var qn=H,Qn=X.CONSTRUCTOR,Fe=me,zn=jr,Xn=fe,Zn=Pr,br=Fe&&Fe.prototype;qn({target:"Promise",proto:!0,forced:Qn,real:!0},{catch:function(e){return this.then(void 0,e)}});if(Xn(Fe)){var Cr=zn("Promise").prototype.catch;br.catch!==Cr&&Zn(br,"catch",Cr,{unsafe:!0})}var xn=H,ea=pe,ra=he,ta=V,na=qe,aa=Dr,ia=et;xn({target:"Promise",stat:!0,forced:ia},{race:function(r){var n=this,o=ta.f(n),s=o.reject,l=na(function(){var c=ra(n.resolve);aa(r,function(d){ea(c,n,d).then(o.resolve,s)})});return l.error&&s(l.value),o.promise}});var oa=H,sa=pe,ua=V,ca=X.CONSTRUCTOR;oa({target:"Promise",stat:!0,forced:ca},{reject:function(r){var n=ua.f(this);return sa(n.reject,void 0,r),n.promise}});var va=_t,la=Lr,fa=V,ha=function(e,r){if(va(e),la(r)&&r.constructor===e)return r;var n=fa.f(e),o=n.resolve;return o(r),n.promise},pa=H,da=jr,ma=X.CONSTRUCTOR,ga=ha;da("Promise");pa({target:"Promise",stat:!0,forced:ma},{resolve:function(r){return ga(this,r)}});var ya={exports:{}};(function(e){var r=function(n){var o=Object.prototype,s=o.hasOwnProperty,l=Object.defineProperty||function(a,t,i){a[t]=i.value},c,d=typeof Symbol=="function"?Symbol:{},h=d.iterator||"@@iterator",R=d.asyncIterator||"@@asyncIterator",S=d.toStringTag||"@@toStringTag";function m(a,t,i){return Object.defineProperty(a,t,{value:i,enumerable:!0,configurable:!0,writable:!0}),a[t]}try{m({},"")}catch{m=function(t,i,v){return t[i]=v}}function F(a,t,i,v){var u=t&&t.prototype instanceof ye?t:ye,f=Object.create(u.prototype),g=new we(v||[]);return l(f,"_invoke",{value:ot(a,i,g)}),f}n.wrap=F;function p(a,t,i){try{return{type:"normal",arg:a.call(t,i)}}catch(v){return{type:"throw",arg:v}}}var L="suspendedStart",it="suspendedYield",tr="executing",Z="completed",$={};function ye(){}function x(){}function b(){}var Ee={};m(Ee,h,function(){return this});var Se=Object.getPrototypeOf,ee=Se&&Se(Se(Re([])));ee&&ee!==o&&s.call(ee,h)&&(Ee=ee);var D=b.prototype=ye.prototype=Object.create(Ee);x.prototype=b,l(D,"constructor",{value:b,configurable:!0}),l(b,"constructor",{value:x,configurable:!0}),x.displayName=m(b,S,"GeneratorFunction");function nr(a){["next","throw","return"].forEach(function(t){m(a,t,function(i){return this._invoke(t,i)})})}n.isGeneratorFunction=function(a){var t=typeof a=="function"&&a.constructor;return t?t===x||(t.displayName||t.name)==="GeneratorFunction":!1},n.mark=function(a){return Object.setPrototypeOf?Object.setPrototypeOf(a,b):(a.__proto__=b,m(a,S,"GeneratorFunction")),a.prototype=Object.create(D),a},n.awrap=function(a){return{__await:a}};function re(a,t){function i(f,g,y,w){var E=p(a[f],a,g);if(E.type==="throw")w(E.arg);else{var $e=E.arg,W=$e.value;return W&&typeof W=="object"&&s.call(W,"__await")?t.resolve(W.__await).then(function(C){i("next",C,y,w)},function(C){i("throw",C,y,w)}):t.resolve(W).then(function(C){$e.value=C,y($e)},function(C){return i("throw",C,y,w)})}}var v;function u(f,g){function y(){return new t(function(w,E){i(f,g,w,E)})}return v=v?v.then(y,y):y()}l(this,"_invoke",{value:u})}nr(re.prototype),m(re.prototype,R,function(){return this}),n.AsyncIterator=re,n.async=function(a,t,i,v,u){u===void 0&&(u=Promise);var f=new re(F(a,t,i,v),u);return n.isGeneratorFunction(t)?f:f.next().then(function(g){return g.done?g.value:f.next()})};function ot(a,t,i){var v=L;return function(f,g){if(v===tr)throw new Error("Generator is already running");if(v===Z){if(f==="throw")throw g;return ir()}for(i.method=f,i.arg=g;;){var y=i.delegate;if(y){var w=ar(y,i);if(w){if(w===$)continue;return w}}if(i.method==="next")i.sent=i._sent=i.arg;else if(i.method==="throw"){if(v===L)throw v=Z,i.arg;i.dispatchException(i.arg)}else i.method==="return"&&i.abrupt("return",i.arg);v=tr;var E=p(a,t,i);if(E.type==="normal"){if(v=i.done?Z:it,E.arg===$)continue;return{value:E.arg,done:i.done}}else E.type==="throw"&&(v=Z,i.method="throw",i.arg=E.arg)}}}function ar(a,t){var i=t.method,v=a.iterator[i];if(v===c)return t.delegate=null,i==="throw"&&a.iterator.return&&(t.method="return",t.arg=c,ar(a,t),t.method==="throw")||i!=="return"&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+i+"' method")),$;var u=p(v,a.iterator,t.arg);if(u.type==="throw")return t.method="throw",t.arg=u.arg,t.delegate=null,$;var f=u.arg;if(!f)return t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,$;if(f.done)t[a.resultName]=f.value,t.next=a.nextLoc,t.method!=="return"&&(t.method="next",t.arg=c);else return f;return t.delegate=null,$}nr(D),m(D,S,"Generator"),m(D,h,function(){return this}),m(D,"toString",function(){return"[object Generator]"});function st(a){var t={tryLoc:a[0]};1 in a&&(t.catchLoc=a[1]),2 in a&&(t.finallyLoc=a[2],t.afterLoc=a[3]),this.tryEntries.push(t)}function Oe(a){var t=a.completion||{};t.type="normal",delete t.arg,a.completion=t}function we(a){this.tryEntries=[{tryLoc:"root"}],a.forEach(st,this),this.reset(!0)}n.keys=function(a){var t=Object(a),i=[];for(var v in t)i.push(v);return i.reverse(),function u(){for(;i.length;){var f=i.pop();if(f in t)return u.value=f,u.done=!1,u}return u.done=!0,u}};function Re(a){if(a){var t=a[h];if(t)return t.call(a);if(typeof a.next=="function")return a;if(!isNaN(a.length)){var i=-1,v=function u(){for(;++i<a.length;)if(s.call(a,i))return u.value=a[i],u.done=!1,u;return u.value=c,u.done=!0,u};return v.next=v}}return{next:ir}}n.values=Re;function ir(){return{value:c,done:!0}}return we.prototype={constructor:we,reset:function(a){if(this.prev=0,this.next=0,this.sent=this._sent=c,this.done=!1,this.delegate=null,this.method="next",this.arg=c,this.tryEntries.forEach(Oe),!a)for(var t in this)t.charAt(0)==="t"&&s.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=c)},stop:function(){this.done=!0;var a=this.tryEntries[0],t=a.completion;if(t.type==="throw")throw t.arg;return this.rval},dispatchException:function(a){if(this.done)throw a;var t=this;function i(w,E){return f.type="throw",f.arg=a,t.next=w,E&&(t.method="next",t.arg=c),!!E}for(var v=this.tryEntries.length-1;v>=0;--v){var u=this.tryEntries[v],f=u.completion;if(u.tryLoc==="root")return i("end");if(u.tryLoc<=this.prev){var g=s.call(u,"catchLoc"),y=s.call(u,"finallyLoc");if(g&&y){if(this.prev<u.catchLoc)return i(u.catchLoc,!0);if(this.prev<u.finallyLoc)return i(u.finallyLoc)}else if(g){if(this.prev<u.catchLoc)return i(u.catchLoc,!0)}else if(y){if(this.prev<u.finallyLoc)return i(u.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(a,t){for(var i=this.tryEntries.length-1;i>=0;--i){var v=this.tryEntries[i];if(v.tryLoc<=this.prev&&s.call(v,"finallyLoc")&&this.prev<v.finallyLoc){var u=v;break}}u&&(a==="break"||a==="continue")&&u.tryLoc<=t&&t<=u.finallyLoc&&(u=null);var f=u?u.completion:{};return f.type=a,f.arg=t,u?(this.method="next",this.next=u.finallyLoc,$):this.complete(f)},complete:function(a,t){if(a.type==="throw")throw a.arg;return a.type==="break"||a.type==="continue"?this.next=a.arg:a.type==="return"?(this.rval=this.arg=a.arg,this.method="return",this.next="end"):a.type==="normal"&&t&&(this.next=t),$},finish:function(a){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.finallyLoc===a)return this.complete(i.completion,i.afterLoc),Oe(i),$}},catch:function(a){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.tryLoc===a){var v=i.completion;if(v.type==="throw"){var u=v.arg;Oe(i)}return u}}throw new Error("illegal catch attempt")},delegateYield:function(a,t,i){return this.delegate={iterator:Re(a),resultName:t,nextLoc:i},this.method==="next"&&(this.arg=c),$}},n}(e.exports);try{regeneratorRuntime=r}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}})(ya);var J;typeof window<"u"?J=window:typeof or<"u"?J=or:typeof self<"u"?J=self:J={};var xe=J,Y="storybook/a11y",rt="a11yHighlight",Ea="".concat(Y,"/result"),Sa="".concat(Y,"/request"),Oa="".concat(Y,"/running"),wa="".concat(Y,"/error"),Ra="".concat(Y,"/manual"),$a="".concat(Y,"/highlight"),M={RESULT:Ea,REQUEST:Sa,RUNNING:Oa,ERROR:wa,MANUAL:Ra,HIGHLIGHT:$a};function _r(e,r,n,o,s,l,c){try{var d=e[l](c),h=d.value}catch(R){n(R);return}d.done?r(h):Promise.resolve(h).then(o,s)}function er(e){return function(){var r=this,n=arguments;return new Promise(function(o,s){var l=e.apply(r,n);function c(h){_r(l,o,s,c,d,"next",h)}function d(h){_r(l,o,s,c,d,"throw",h)}c(void 0)})}}const{addons:Ia}=__STORYBOOK_MODULE_ADDONS__;var Ta=xe.document,ba=xe.window;I&&I.hot&&I.hot.decline&&I.hot.decline();var Q=Ia.getChannel(),ue=!1,Ue,Ca=function(){var e=er(regeneratorRuntime.mark(function r(n){var o,s;return regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,tt(n);case 2:if(o=c.sent,s=o.manual,s){c.next=7;break}return c.next=7,rr(n);case 7:case"end":return c.stop()}},r)}));return function(n){return e.apply(this,arguments)}}(),rr=function(){var e=er(regeneratorRuntime.mark(function r(n){var o,s,l,c,d,h,R,S,m;return regeneratorRuntime.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return Ue=n,p.prev=1,p.next=4,tt(n);case 4:if(o=p.sent,ue){p.next=19;break}return ue=!0,Q.emit(M.RUNNING),p.next=10,ct(()=>import("./axe.a783f5c5.js").then(L=>L.a),["assets/axe.a783f5c5.js","assets/_commonjsHelpers.712cc82f.js"]);case 10:return s=p.sent.default,l=o.element,c=l===void 0?"#root":l,d=o.config,h=o.options,R=h===void 0?{}:h,S=Ta.querySelector(c),s.reset(),d&&s.configure(d),p.next=17,s.run(S,R);case 17:m=p.sent,Ue===n?Q.emit(M.RESULT,m):(ue=!1,rr(Ue));case 19:p.next=24;break;case 21:p.prev=21,p.t0=p.catch(1),Q.emit(M.ERROR,p.t0);case 24:return p.prev=24,ue=!1,p.finish(24);case 27:case"end":return p.stop()}},r,null,[[1,21,24,27]])}));return function(n){return e.apply(this,arguments)}}(),tt=function(){var e=er(regeneratorRuntime.mark(function r(n){var o,s;return regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,ba.__STORYBOOK_STORY_STORE__.loadStory({storyId:n});case 2:if(c.t0=c.sent,c.t0){c.next=5;break}c.t0={};case 5:return o=c.t0,s=o.parameters,c.abrupt("return",s.a11y||{config:{},options:{restoreScroll:!0}});case 8:case"end":return c.stop()}},r)}));return function(n){return e.apply(this,arguments)}}();Q.on(M.REQUEST,Ca);Q.on(M.MANUAL,rr);var _a=function(r){return`
  outline: 2px dashed `.concat(r,`;
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);
`)};const{addons:Na}=__STORYBOOK_MODULE_ADDONS__,{STORY_CHANGED:Pa}=__STORYBOOK_MODULE_CORE_EVENTS__;var We=xe.document;I&&I.hot&&I.hot.decline&&I.hot.decline();var nt=Na.getChannel(),La=function(r){var n=rt;at();var o=Array.from(new Set(r.elements)),s=We.createElement("style");s.setAttribute("id",n),s.innerHTML=o.map(function(l){return"".concat(l,`{
          `).concat(_a(r.color),`
         }`)}).join(" "),We.head.appendChild(s)},at=function(){var r=rt,n=We.getElementById(r);n&&n.parentNode.removeChild(n)};nt.on(Pa,at);nt.on(M.HIGHLIGHT,La)});export default Da();
//# sourceMappingURL=preview.3725f18d.js.map
