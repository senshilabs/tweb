(this.webpackJsonp=this.webpackJsonp||[]).push([[2,26],{106:function(t,e,s){"use strict";s.d(e,"a",(function(){return c}));var i=s(107),n=s(13),a=s(32),r=s(71),o=s(108),h=s(78);function c(t,e,s,c,l=250,d){const u=Object(i.a)(e,t||"tabs"===e.dataset.animation?"tabs":"navigation",l,c);if(t){const i=new Proxy(u,{apply:(e,s,i)=>{const n=+i[0],a=void 0===i[1]||i[1],r=t.querySelector(`[data-tab="${n}"]`)||t.children[n];c(r,n,a)}}),c=(i,o,h=!0)=>{const c=e.children[o];if(s){const t=s(o,c,h);if(void 0!==t&&!t)return}d&&d.scrollIntoViewNew(i.parentElement.children[o],"center",void 0,void 0,h?void 0:r.a.Static,l,"x"),n.default.settings.animationsEnabled||(h=!1);const m=u.prevId();if(i.classList.contains("active")||o===m)return!1;const g=t.querySelector(f.toLowerCase()+".active");Object(a.c)(()=>{g&&g.classList.remove("active")}),p&&-1!==m&&h&&Object(a.c)(()=>{const t=i.querySelector("i"),e=i.parentElement.children[m].querySelector("i");e.classList.remove("animate"),t.classList.remove("animate");const s=e.parentElement.parentElement.offsetLeft-t.parentElement.parentElement.offsetLeft,n=e.clientWidth/t.clientWidth;t.style.transform=`translate3d(${s}px, 0, 0) scale3d(${n}, 1, 1)`,requestAnimationFrame(()=>{t.classList.add("animate"),t.style.transform="none"})}),Object(a.c)(()=>{i.classList.add("active")}),u(o,h)},p=!t.classList.contains("no-stripe"),f=t.firstElementChild.tagName;return t.addEventListener("click",(function(e){let s,i=e.target;if(i=Object(o.a)(i,t),!i)return!1;if(i.dataset.tab){if(s=+i.dataset.tab,-1===s)return!1}else s=Object(h.a)(i);c(i,s)})),i}return u}},107:function(t,e,s){"use strict";s.d(e,"a",(function(){return d}));var i=s(13),n=s(43),a=s(72),r=s(78),o=s(3),h=s(0);function c(t,e,s){const i=e.getBoundingClientRect().width,n=[t,e];return s&&n.reverse(),n[0].style.filter="brightness(80%)",n[0].style.transform=`translate3d(${.25*-i}px, 0, 0)`,n[1].style.transform=`translate3d(${i}px, 0, 0)`,t.classList.add("active"),t.offsetWidth,t.style.transform="",t.style.filter="",()=>{e.style.transform=e.style.filter=""}}function l(t,e,s){const i=Object(o.a)(t,"scrollable-y");i&&"hidden"!==i.style.overflowY&&(i.style.overflowY="hidden");const n=e.getBoundingClientRect().width,a=[t,e];return s&&a.reverse(),a[0].style.transform=`translate3d(${-n}px, 0, 0)`,a[1].style.transform=`translate3d(${n}px, 0, 0)`,t.classList.add("active"),t.offsetWidth,t.style.transform="",()=>{e.style.transform="",i&&(h.isSafari&&(i.style.display="none"),i.style.overflowY="",h.isSafari&&(i.offsetLeft,i.style.display=""))}}const d=(t,e,s,i,n=!0)=>{let a=null;switch(e){case"tabs":a=l;break;case"navigation":a=c}return t.dataset.animation=e,u(t,a,s,i,n)},u=(t,e,s,o,h=!0)=>{const c=new Map;let l,d=0,u=null;function p(f,m=!0){const g=p;f instanceof HTMLElement&&(f=Object(r.a)(f));const y=g.prevId();if(f===y)return!1;const v=u,b=t.children[f];if(i.default.settings.animationsEnabled&&-1!==y||(m=!1),!m)return v&&v.classList.remove("active","to","from"),b&&(b.classList.remove("to","from"),b.classList.add("active")),t.classList.remove("animating","backwards","disable-hover"),u=b,void(o&&o(f));u&&(u.classList.remove("to"),u.classList.add("from")),t.classList.add("animating","disable-hover");const w=y<f;let k;if(t.classList.toggle("backwards",!w),b&&(e?k=e(b,u,w):b.classList.add("active"),b.classList.remove("from"),b.classList.add("to")),b&&c.set(b,()=>{b.classList.remove("to"),c.delete(b)}),v){const t=()=>{v.classList.remove("active","from"),k&&k(),c.delete(v)};if(b)c.set(v,t);else{const e=window.setTimeout(t,s);c.set(v,()=>{clearTimeout(e)})}h&&(l||(l=Object(n.a)(),d=performance.now()),Object(a.b)(l,2*s))}u=b}return t.addEventListener(e?"transitionend":"animationend",e=>{if(e.target.parentElement!==t)return;const s=c.get(e.target);s&&s(),e.target===u&&(!l&&h||(l&&(l.resolve(),l=void 0),o&&o(p.prevId()),t.classList.remove("animating","backwards","disable-hover")))}),p.prevId=()=>u?Object(r.a)(u):-1,p}},108:function(t,e,s){"use strict";function i(t,e){if(t.parentElement===e)return t;for(;t.parentElement;)if((t=t.parentElement).parentElement===e)return t;return null}s.d(e,"a",(function(){return i}))},116:function(t,e,s){"use strict";s.d(e,"b",(function(){return r})),s.d(e,"a",(function(){return o}));var i=s(32),n=s(43);const a=new Map;function r(t){const e=function(t){return a.get(t)}(t);e&&(e.isCancelled=!0,e.deferred.resolve())}function o(t,e,s){return s||(s=function(t){r(t);const e={isCancelled:!1,deferred:Object(n.a)()};return a.set(t,e),e.deferred.then(()=>{a.delete(t)}),e}(e)),Object(i.c)(()=>{s.isCancelled||(t()?o(t,e,s):s.deferred.resolve())}),s.deferred}},14:function(t,e,s){"use strict";s.r(e),s.d(e,"STATE_INIT",(function(){return y})),s.d(e,"AppStateManager",(function(){return w}));var i=s(60),n=s(13),a=s(88),r=s(41),o=s(30),h=s(4),c=s(26),l=s(87),d=s(0),u=s(101),p=s(58),f=s(68),m=function(t,e,s,i){return new(s||(s=Promise))((function(n,a){function r(t){try{h(i.next(t))}catch(t){a(t)}}function o(t){try{h(i.throw(t))}catch(t){a(t)}}function h(t){var e;t.done?n(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(r,o)}h((i=i.apply(t,e||[])).next())}))};const g=h.a.version,y={allDialogsLoaded:{},pinnedOrders:{},contactsList:[],updates:{},filters:{},maxSeenMsgId:0,stateCreatedTime:Date.now(),recentEmoji:[],topPeersCache:{},recentSearch:[],version:g,authState:{_:d.isMobile?"authStateSignIn":"authStateSignQr"},hiddenPinnedMessages:{},settings:{messagesTextSize:16,sendShortcut:"enter",animationsEnabled:!0,autoDownload:{contacts:!0,private:!0,groups:!0,channels:!0},autoPlay:{gifs:!0,videos:!0},stickers:{suggest:!0,loop:!0},emoji:{suggest:!0,big:!0},themes:[{name:"day",background:{type:"image",blur:!1,slug:"ByxGo2lrMFAIAAAAmkJxZabh8eM",highlightningColor:"hsla(85.5319, 36.9171%, 40.402%, 0.4)"}},{name:"night",background:{type:"color",blur:!1,color:"#0f0f0f",highlightningColor:"hsla(0, 0%, 3.82353%, 0.4)"}}],theme:"system",notifications:{sound:!1}},keepSigned:!0,chatContextMenuHintWasShown:!1,stateId:Object(f.a)(32)},v=Object.keys(y),b=["contactsList","stateCreatedTime","maxSeenMsgId","filters","topPeers"];class w extends i.a{constructor(){super(),this.log=Object(r.b)("STATE"),this.neededPeers=new Map,this.singlePeerMap=new Map,this.storages={users:new l.a(u.a,"users"),chats:new l.a(u.a,"chats"),dialogs:new l.a(u.a,"dialogs")},this.storagesResults={},this.storage=a.a,this.loadSavedState()}loadSavedState(){return this.loaded||(console.time("load state"),this.loaded=new Promise(t=>{const e=Object.keys(this.storages),s=e.map(t=>this.storages[t].getAll()),i=v.map(t=>a.a.get(t)).concat(p.a.get("user_auth"),p.a.get("state_id")).concat(a.a.get("user_auth")).concat(s);Promise.all(i).then(s=>m(this,void 0,void 0,(function*(){let i=this.state={};for(let t=0,e=v.length;t<e;++t){const e=v[t],n=s[t];void 0!==n?i[e]=n:this.pushToState(e,Object(o.a)(y[e]))}s.splice(0,v.length);let r=s.shift();const l=s.shift(),d=s.shift();if(!r&&d){r=d;const t=["dc","server_time_offset","xt_instance"];for(let e=1;e<=5;++e)t.push(`dc${e}_server_salt`),t.push(`dc${e}_auth_key`);const e=yield Promise.all(t.map(t=>a.a.get(t)));t.push("user_auth"),e.push("number"==typeof r?{dcID:e[0]||h.a.baseDcId,date:Date.now()/1e3|0,id:r}:r);let s={};t.forEach((t,i)=>{s[t]=e[i]}),yield p.a.set(s)}r&&(i.authState={_:"authStateSignedIn"},n.default.dispatchEvent("user_auth","number"==typeof r?{dcID:0,date:Date.now()/1e3|0,id:r}:r));for(let t=0,i=e.length;t<i;++t)this.storagesResults[e[t]]=s[t];if(s.splice(0,e.length),i.stateId!==l){if(void 0!==l){const t=new Map([["authState",void 0],["stateId",void 0]]);t.forEach((e,s)=>{t.set(s,Object(o.a)(i[s]))}),i=this.state=Object(o.a)(y),t.forEach((t,e)=>{i[e]=t});for(const t in this.storagesResults)this.storagesResults[t].length=0;this.storage.set(i)}yield p.a.set({state_id:i.stateId})}const u=Date.now();if(i.stateCreatedTime+864e5<u){c.b&&this.log("will refresh state",i.stateCreatedTime,u);(t=>{t.forEach(t=>{this.pushToState(t,Object(o.a)(y[t]));const e=this.storagesResults[t];e&&e.length&&(e.length=0)})})(b)}if(!i.settings.hasOwnProperty("theme")&&i.settings.hasOwnProperty("nightTheme")&&(i.settings.theme=i.settings.nightTheme?"night":"day",this.pushToState("settings",i.settings)),!i.settings.hasOwnProperty("themes")&&i.settings.background){i.settings.themes=Object(o.a)(y.settings.themes);const t=i.settings.themes.find(t=>t.name===i.settings.theme);t&&(t.background=i.settings.background,this.pushToState("settings",i.settings))}Object(o.k)(y,i,t=>{this.pushToState(t,i[t])}),i.version!==g&&this.pushToState("version",g),n.default.settings=i.settings,c.b&&this.log("state res",i,Object(o.a)(i)),console.timeEnd("load state"),t(i)}))).catch(t)})),this.loaded}getState(){return void 0===this.state?this.loadSavedState():Promise.resolve(this.state)}setByKey(t,e){Object(o.j)(this.state,t,e),n.default.dispatchEvent("settings_updated",{key:t,value:e});const s=t.split(".")[0];this.pushToState(s,this.state[s])}pushToState(t,e,s=!0){s&&(this.state[t]=e),this.storage.set({[t]:e})}requestPeer(t,e,s){let i=this.neededPeers.get(t);i&&i.has(e)||(i||(i=new Set,this.neededPeers.set(t,i)),i.add(e),this.dispatchEvent("peerNeeded",t),void 0!==s&&this.keepPeerSingle(t,e))}isPeerNeeded(t){return this.neededPeers.has(t)}keepPeerSingle(t,e){const s=this.singlePeerMap.get(e);if(s&&s!==t&&this.neededPeers.has(s)){const t=this.neededPeers.get(s);t.delete(e),t.size||(this.neededPeers.delete(s),this.dispatchEvent("peerUnneeded",s))}t?this.singlePeerMap.set(e,t):this.singlePeerMap.delete(e)}}w.STATE_INIT=y;const k=new w;c.a.appStateManager=k,e.default=k},46:function(t,e,s){"use strict";function i(){return new Worker(s.p+"rlottie.worker.86bed2789739b353d39d.bundle.worker.js")}s.d(e,"a",(function(){return m}));var n=s(61),a=s(26),r=s(60),o=s(40),h=s(73),c=s(32),l=s(0),d=s(41),u=s(28),p=function(t,e,s,i){return new(s||(s=Promise))((function(n,a){function r(t){try{h(i.next(t))}catch(t){a(t)}}function o(t){try{h(i.throw(t))}catch(t){a(t)}}function h(t){var e;t.done?n(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(r,o)}h((i=i.apply(t,e||[])).next())}))};let f=t=>Math.round(255*Math.min(Math.max(t,0),1));class m extends r.a{constructor({el:t,worker:e,options:s}){super(!0),this.reqId=0,this.width=0,this.height=0,this.paused=!0,this.direction=1,this.speed=1,this.autoplay=!0,this.loop=!0,this.group="",this.frames={},this.cachingDelta=0,this.reqId=++m.reqId,this.el=t,this.worker=e;for(let t in s)this.hasOwnProperty(t)&&(this[t]=s[t]);let i;this._loop=this.loop,this._autoplay=this.autoplay,void 0!==s.skipRatio?i=s.skipRatio:(l.isAndroid||l.isAppleMobile||l.isApple&&!l.isSafari)&&this.width<100&&this.height<100&&(i=.5),this.skipDelta=void 0!==i?1/i|0:1;const n=Object(h.a)(window.devicePixelRatio,1,2);n>1&&(s.needUpscale?(this.width=Math.round(this.width*n),this.height=Math.round(this.height*n)):n>1&&(this.width>100&&this.height>100?l.isApple||!o.b.isMobile?(this.width=Math.round(this.width*n),this.height=Math.round(this.height*n)):n>2.5&&(this.width=Math.round(this.width*(n-1.5)),this.height=Math.round(this.height*(n-1.5))):(this.width=Math.round(this.width*Math.max(1.5,n-1.5)),this.height=Math.round(this.height*Math.max(1.5,n-1.5))))),s.noCache||(l.isApple&&this.width>100&&this.height>100?this.cachingDelta=2:this.width<100&&this.height<100?this.cachingDelta=1/0:this.cachingDelta=4),this.canvas=document.createElement("canvas"),this.canvas.classList.add("rlottie"),this.canvas.width=this.width,this.canvas.height=this.height,this.context=this.canvas.getContext("2d"),this.clamped=new Uint8ClampedArray(this.width*this.height*4),this.imageData=new ImageData(this.width,this.height)}clearCache(){this.frames={}}sendQuery(t,...e){this.worker.sendQuery(t,this.reqId,...e)}loadFromData(t){this.sendQuery("loadFromData",t,this.width,this.height)}play(){this.paused&&(this.paused=!1,this.setMainLoop())}pause(t=!0){this.paused||(this.paused=!0,t&&clearTimeout(this.rafId))}stop(t=!0){this.pause(),this.curFrame=1===this.direction?0:this.frameCount,t&&this.requestFrame(this.curFrame)}restart(){this.stop(!1),this.play()}setSpeed(t){this.speed=t,this.paused||this.setMainLoop()}setDirection(t){this.direction=t,this.paused||this.setMainLoop()}remove(){v.onDestroy(this.reqId),this.pause(),this.sendQuery("destroy")}renderFrame2(t,e){try{this.imageData.data.set(t),this.context.putImageData(this.imageData,0,0)}catch(t){return console.error("RLottiePlayer renderFrame error:",t,this.width,this.height),this.autoplay=!1,void this.pause()}this.dispatchEvent("enterFrame",e)}renderFrame(t,e){if(this.cachingDelta&&(e%this.cachingDelta||!e)&&!this.frames[e]&&(this.frames[e]=new Uint8ClampedArray(t)),this.frInterval){const s=Date.now()-this.frThen;if(s<0)return this.rafId&&clearTimeout(this.rafId),this.rafId=window.setTimeout(()=>{this.renderFrame2(t,e)},this.frInterval>-s?-s%this.frInterval:this.frInterval)}this.renderFrame2(t,e)}requestFrame(t){this.frames[t]?this.renderFrame(this.frames[t],t):l.isSafari?this.sendQuery("renderFrame",t):(this.clamped.length||(this.clamped=new Uint8ClampedArray(this.width*this.height*4)),this.sendQuery("renderFrame",t,this.clamped))}mainLoopForwards(){const t=this.curFrame+this.skipDelta>=this.frameCount?this.curFrame=0:this.curFrame+=this.skipDelta;return this.requestFrame(t),!(t+this.skipDelta>=this.frameCount&&!this.loop)||(this.pause(!1),!1)}mainLoopBackwards(){const t=this.curFrame-this.skipDelta<0?this.curFrame=this.frameCount-1:this.curFrame-=this.skipDelta;return this.requestFrame(t),!(t-this.skipDelta<0&&!this.loop)||(this.pause(!1),!1)}setMainLoop(){clearTimeout(this.rafId),this.frInterval=1e3/this.fps/this.speed*this.skipDelta,this.frThen=Date.now()-this.frInterval;const t=(1===this.direction?this.mainLoopForwards:this.mainLoopBackwards).bind(this);this.currentMethod=t,this.frameListener&&this.listenerResults.hasOwnProperty("enterFrame")&&this.frameListener()}onLoad(t,e){return p(this,void 0,void 0,(function*(){if(this.curFrame=1===this.direction?0:t-1,this.frameCount=t,this.fps=e,this.fps<60&&1!==this.skipDelta){const t=60/e;this.skipDelta=this.skipDelta/t|0}this.frInterval=1e3/this.fps/this.speed*this.skipDelta,this.frThen=Date.now()-this.frInterval,this.requestFrame(0),this.dispatchEvent("ready"),this.addEventListener("enterFrame",()=>{this.dispatchEvent("firstFrame"),this.el.appendChild(this.canvas),this.frameListener=()=>{if(this.paused)return;const t=Date.now();this.frThen=t+this.frInterval;this.currentMethod()||this.loop||!this.autoplay||(this.autoplay=!1)},this.addEventListener("enterFrame",this.frameListener)},{once:!0})}))}}m.reqId=0;class g extends r.a{constructor(t,e=(()=>{}),s){super(),this.worker=t,this.defaultListener=e,s&&(this.worker.onerror=s),this.worker.onmessage=t=>{t.data instanceof Object&&t.data.hasOwnProperty("queryMethodListener")&&t.data.hasOwnProperty("queryMethodArguments")?this.dispatchEvent(t.data.queryMethodListener,...t.data.queryMethodArguments):this.defaultListener.call(this,t.data)}}postMessage(t){this.worker.postMessage(t)}terminate(){this.worker.terminate()}sendQuery(t,...e){if(l.isSafari)this.worker.postMessage({queryMethod:t,queryMethodArguments:e});else{const s=[];e.forEach(t=>{t instanceof ArrayBuffer&&s.push(t),t.buffer&&t.buffer instanceof ArrayBuffer&&s.push(t.buffer)}),this.worker.postMessage({queryMethod:t,queryMethodArguments:e},s)}}}class y{constructor(){this.isWebAssemblySupported="undefined"!=typeof WebAssembly,this.loadPromise=this.isWebAssemblySupported?void 0:Promise.reject(),this.loaded=!1,this.workersLimit=4,this.players={},this.workers=[],this.curWorkerNum=0,this.log=Object(d.b)("LOTTIE",d.a.Error),this.onPlayerLoaded=(t,e,s)=>{const i=this.players[t];i?(this.log.debug("onPlayerLoaded"),i.onLoad(e,s)):this.log.warn("onPlayerLoaded on destroyed player:",t,e)},this.onFrame=(t,e,s)=>{const i=this.players[t];i?(i.clamped=s,i.renderFrame(s,e)):this.log.warn("onFrame on destroyed player:",t,e)},this.onPlayerError=(t,e)=>{const s=this.players[t];if(s){n.a.getAnimations(s.el).forEach(t=>{n.a.checkAnimation(t,!0,!0)})}}}getAnimation(t){for(const e in this.players)if(this.players[e].el===t)return this.players[e];return null}setLoop(t){for(const e in this.players){const s=this.players[e];s.loop=t,s.autoplay=s._autoplay}}loadLottieWorkers(){return this.loadPromise?this.loadPromise:this.loadPromise=new Promise((t,e)=>{let s=this.workersLimit;for(let e=0;e<this.workersLimit;++e){const n=this.workers[e]=new g(new i);n.addEventListener("ready",()=>{this.log("worker #"+e+" ready"),n.addEventListener("frame",this.onFrame),n.addEventListener("loaded",this.onPlayerLoaded),n.addEventListener("error",this.onPlayerError),--s,s||(this.log("workers ready"),t(),this.loaded=!0)},{once:!0})}})}applyReplacements(t,e){const s=y.COLORREPLACEMENTS[Math.max(e-1,0)],i=t=>{switch(t.ty){case"st":case"fl":(t=>{const e=t.c.k,i=f(e[2])|f(e[1])<<8|f(e[0])<<16,n=s.find(t=>t[0]===i);n&&(e[0]=(n[1]>>16&255)/255,e[1]=(n[1]>>8&255)/255,e[2]=(255&n[1])/255)})(t)}t.hasOwnProperty("it")&&n(t.it)},n=t=>{for(const e of t)i(e)};try{for(const e of t.layers)if(e.shapes)for(const t of e.shapes)t.it?n(t.it):i(t)}catch(s){this.log.warn("cant apply replacements",s,t,e)}}loadAnimationFromURL(t,e){return this.isWebAssemblySupported?(this.loaded||this.loadLottieWorkers(),fetch(e).then(t=>t.arrayBuffer()).then(t=>u.a.invokeCrypto("gzipUncompress",t,!0)).then(e=>this.loadAnimationWorker(Object.assign(t,{animationData:e,needUpscale:!0})))):this.loadPromise}waitForFirstFrame(t){return Promise.race([new Promise(e=>{t.addEventListener("firstFrame",e,{once:!0})}),Object(c.e)(2500)])}loadAnimationWorker(t,e="",s=-1){return p(this,void 0,void 0,(function*(){if(!this.isWebAssemblySupported)return this.loadPromise;if(s>=1&&s<=5){const e=JSON.parse(t.animationData);this.applyReplacements(e,s),t.animationData=JSON.stringify(e)}if(this.loaded||(yield this.loadLottieWorkers()),t.width&&t.height||(t.width=parseInt(t.container.style.width),t.height=parseInt(t.container.style.height)),!t.width||!t.height)throw new Error("No size for sticker!");t.group=e;const i=this.initPlayer(t.container,t);return n.a.addAnimation(i,e),i}))}onDestroy(t){delete this.players[t]}destroyWorkers(){this.workers.forEach((t,e)=>{t.terminate(),this.log("worker #"+e+" terminated")}),this.log("workers destroyed"),this.workers.length=0}initPlayer(t,e){const s=new m({el:t,worker:this.workers[this.curWorkerNum++],options:e});return this.players[s.reqId]=s,this.curWorkerNum>=this.workers.length&&(this.curWorkerNum=0),s.loadFromData(e.animationData),s}}y.COLORREPLACEMENTS=[[[16219713,13335381],[16757049,16168585],[16765248,16764327],[16768889,16768965]],[[16219713,10771e3],[16757049,14653547],[16765248,15577475],[16768889,16040864]],[[16219713,7354903],[16757049,11233085],[16765248,12812110],[16768889,14194279]],[[16219713,4858889],[16757049,8207886],[16765248,9852201],[16768889,11100983]],[[16219713,2101002],[16757049,4270372],[16765248,5848375],[16768889,6505791]]];const v=new y;a.a.lottieLoader=v;e.b=v},59:function(t,e,s){"use strict";s.d(e,"a",(function(){return d}));var i=s(46),n=s(106),a=s(26),r=s(71),o=s(78);const h=new class{constructor(){this.pageId=-1,this.pagesDiv=document.getElementById("auth-pages"),this.scrollableDiv=this.pagesDiv.querySelector(".scrollable"),this.selectTab=Object(n.a)(null,this.scrollableDiv.querySelector(".tabs-container"),null,()=>{var t;(null===(t=this.page)||void 0===t?void 0:t.onShown)&&this.page.onShown()})}setPage(t){if(t.isAuthPage){this.pagesDiv.style.display="";let e=Object(o.a)(t.pageEl);if(this.pageId===e)return;this.selectTab(e),-1!==this.pageId&&e>1&&i.b.loadLottieWorkers(),this.pageId=e,this.scrollableDiv&&Object(r.b)(this.scrollableDiv,this.scrollableDiv.firstElementChild,"start")}else this.pagesDiv.style.display="none",t.pageEl.style.display="",this.pageId=-1;this.page=t}};a.a.pagesManager=h;var c=h,l=function(t,e,s,i){return new(s||(s=Promise))((function(n,a){function r(t){try{h(i.next(t))}catch(t){a(t)}}function o(t){try{h(i.throw(t))}catch(t){a(t)}}function h(t){var e;t.done?n(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(r,o)}h((i=i.apply(t,e||[])).next())}))};class d{constructor(t,e,s,i,n){this.isAuthPage=e,this.onFirstMount=s,this.onMount=i,this.onShown=n,this.installed=!1,this.pageEl=document.body.querySelector("."+t)}mount(...t){return l(this,void 0,void 0,(function*(){if(this.onMount&&this.onMount(...t),!this.installed){if(this.onFirstMount)try{const e=this.onFirstMount(...t);e instanceof Promise&&(yield e)}catch(t){console.error("PAGE MOUNT ERROR:",t)}this.installed=!0}c.setPage(this)}))}}},61:function(t,e,s){"use strict";var i=s(46),n=s(13),a=s(0),r=s(26),o=s(81);const h=new class{constructor(){this.visible=new Set,this.byGroups={},this.lockedGroups={},this.onlyOnePlayableGroup="",this.intersectionLockedGroups={},this.videosLocked=!1,this.observer=new IntersectionObserver(t=>{if(!n.default.idle.isIDLE)for(const e of t){const t=e.target;for(const s in this.byGroups){if(this.intersectionLockedGroups[s])continue;const n=this.byGroups[s].find(e=>e.el===t);if(n){e.isIntersecting?(this.visible.add(n),this.checkAnimation(n,!1)):(this.visible.delete(n),this.checkAnimation(n,!0),n.animation instanceof i.a&&n.animation.clearCache());break}}}}),n.default.addEventListener("audio_play",({doc:t})=>{"round"===t.type&&(this.videosLocked=!0,this.checkAnimations())}),n.default.addEventListener("audio_pause",()=>{this.videosLocked&&(this.videosLocked=!1,this.checkAnimations())})}getAnimations(t){const e=[];for(const s in this.byGroups)for(const i of this.byGroups[s])i.el===t&&e.push(i);return e}removeAnimation(t){const{el:e,animation:s}=t;s.remove(),s instanceof HTMLVideoElement&&a.isSafari&&setTimeout(()=>{s.src="",s.load()},1e3);for(const e in this.byGroups)this.byGroups[e].findAndSplice(e=>e===t);this.observer.unobserve(e),this.visible.delete(t)}addAnimation(t,e=""){var s;const a={el:t instanceof i.a?t.el:t,animation:t,group:e};t instanceof i.a&&!n.default.settings.stickers.loop&&t.loop&&(t.loop=n.default.settings.stickers.loop),(null!==(s=this.byGroups[e])&&void 0!==s?s:this.byGroups[e]=[]).push(a),this.observer.observe(a.el)}checkAnimations(t,e,s=!1){if(n.default.idle.isIDLE)return;const i=e?[e]:Object.keys(this.byGroups);if(!e||this.byGroups[e])for(const e of i){this.byGroups[e].forEach(e=>{this.checkAnimation(e,t,s)})}else this.byGroups[e]=[]}checkAnimation(t,e=!1,s=!1){const{el:i,animation:n,group:a}=t;s||!Object(o.a)(i)&&!this.lockedGroups[a]?this.removeAnimation(t):e||this.onlyOnePlayableGroup&&this.onlyOnePlayableGroup!==a||n instanceof HTMLVideoElement&&this.videosLocked?n.paused||n.pause():n.paused&&this.visible.has(t)&&n.autoplay&&(!this.onlyOnePlayableGroup||this.onlyOnePlayableGroup===a)&&n.play()}setOnlyOnePlayableGroup(t){this.onlyOnePlayableGroup=t}lockGroup(t){this.lockedGroups[t]=!0}unlockGroup(t){delete this.lockedGroups[t],this.checkAnimations(void 0,t)}refreshGroup(t){const e=this.byGroups[t];e&&e.length&&(e.forEach(t=>{this.observer.unobserve(t.el)}),window.requestAnimationFrame(()=>{e.forEach(t=>{this.observer.observe(t.el)})}))}lockIntersectionGroup(t){this.intersectionLockedGroups[t]=!0}unlockIntersectionGroup(t){delete this.intersectionLockedGroups[t],this.refreshGroup(t)}};r.a&&(r.a.animationIntersector=h),e.a=h},71:function(t,e,s){"use strict";s.d(e,"a",(function(){return h})),s.d(e,"b",(function(){return c}));var i=s(72),n=s(32),a=s(116),r=s(13),o=s(81);var h;function c(t,e,s,a=0,c=1500,d,u,p="y"){if(r.default.settings.animationsEnabled||(d=h.Static),d===h.Static)return l(t,e,s,a,u=0,p);if("y"===p&&e!==t&&Object(o.a)(e)&&t.getBoundingClientRect){const s=e.getBoundingClientRect(),i=t.getBoundingClientRect(),n=s.top-i.top;void 0===d?n<-c?t.scrollTop+=n+c:n>c&&(t.scrollTop+=n-c):d===h.Up?t.scrollTop=n+t.scrollTop+c:d===h.Down&&(t.scrollTop=Math.max(0,n+t.scrollTop-c))}const f=new Promise(i=>{Object(n.c)(()=>{l(t,e,s,a,u,p).then(i)})});return"y"===p?Object(i.b)(f):f}function l(t,e,s,i=0,n,r="y"){if(!Object(o.a)(e))return Object(a.b)(t),Promise.resolve();const h="y"===r?"top":"left",c="y"===r?"bottom":"right",l="y"===r?"height":"width",d="y"===r?"scrollHeight":"scrollWidth",u="y"===r?"scrollTop":"scrollLeft",p=e.getBoundingClientRect(),f=t.getBoundingClientRect?t.getBoundingClientRect():document.body.getBoundingClientRect(),m=p[h]-f[h],g=e[d],y=f[l],v=t[u],b=t[d];let w;switch(s){case"start":w=m-i;break;case"end":w=p[c]+(g-p[l])-f[c];break;case"nearest":case"center":w=g<y?m+g/2-y/2:m-i}if(w<0){const t=-v;w=Math.max(w,t)}else if(w>0){const t=b-(v+y);w=Math.min(w,t)}const k=t[u]+w,L=null!=n?n:250+Math.abs(w)/1500*350,M=Date.now(),E=()=>{const e=L?Math.min((Date.now()-M)/L,1):1,s=w*(1-function(t){return 1-Math.pow(1-t,3.5)}(e));return t[u]=Math.round(k-s),e<1};return L&&w?Object(a.a)(E,t):(Object(a.b)(t),E(),Promise.resolve())}!function(t){t[t.Up=0]="Up",t[t.Down=1]="Down",t[t.Static=2]="Static"}(h||(h={}))},72:function(t,e,s){"use strict";s.d(e,"b",(function(){return d})),s.d(e,"d",(function(){return p})),s.d(e,"c",(function(){return f}));var i=s(43),n=s(32),a=s(13),r=s(26);let o=!1,h=Object(i.a)(),c=0;h.resolve();const l=console.log.bind(console.log,"[HEAVY-ANIMATION]:");function d(t,e){o||(h=Object(i.a)(),a.default.dispatchEvent("event-heavy-animation-start"),o=!0,r.b&&l("start")),++c,r.b&&l("attach promise, length:",c,e);const s=[void 0!==e?Object(n.e)(e):void 0,t.finally(()=>{})].filter(Boolean),d=performance.now(),p=h;return Promise.race(s).then(()=>{h!==p||h.isFulfilled||(--c,r.b&&l("promise end, length:",c,performance.now()-d),c<=0&&u())}),h}function u(){h.isFulfilled||(o=!1,c=0,a.default.dispatchEvent("event-heavy-animation-end"),h.resolve(),r.b&&l("end"))}function p(){u()}function f(){return h}e.a=function(t,e,s){o&&t();const i=s?s.add(a.default):a.default.addEventListener.bind(a.default),n=s?s.removeManual.bind(s,a.default):a.default.removeEventListener.bind(a.default);return i("event-heavy-animation-start",t),i("event-heavy-animation-end",e),()=>{n("event-heavy-animation-end",e),n("event-heavy-animation-start",t)}}},73:function(t,e,s){"use strict";function i(t,e=" "){const s=t.toString().split(".");return s[0]=s[0].replace(/\B(?=(\d{3})+(?!\d))/g,e),s.join(".")}function n(t,e=2){if(0===t)return"0 Bytes";const s=e<0?0:e,i=Math.floor(Math.log(t)/Math.log(1024));return parseFloat((t/Math.pow(1024,i)).toFixed(s))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][i]}function a(t,e=2){if(0===t)return"0";const s=e<0?0:e,i=Math.floor(Math.log(t)/Math.log(1e3));return parseFloat((t/Math.pow(1e3,i)).toFixed(s))+["","K","M","B","T"][i]}function r(t,e,s){return t<e?e:t>s?s:t}s.d(e,"d",(function(){return i})),s.d(e,"b",(function(){return n})),s.d(e,"c",(function(){return a})),s.d(e,"a",(function(){return r}))},78:function(t,e,s){"use strict";function i(t){if(!t.parentNode)return-1;let e=0;for(;null!==(t=t.previousElementSibling);)++e;return e}s.d(e,"a",(function(){return i}))},81:function(t,e,s){"use strict";function i(t){return null==t?void 0:t.isConnected}s.d(e,"a",(function(){return i}))}}]);
//# sourceMappingURL=2.3d16074593618242171c.chunk.js.map