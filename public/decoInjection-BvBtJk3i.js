import{C as i}from"./contractHandler-BLWHPhX3.js";import"./_commonjsHelpers-BosuxZz1.js";class n{constructor(){this.boostedBackground=`
    <div class="gradient-bg">
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div class="gradients-container">
        <div class="g1"></div>
        <div class="g2"></div>
        <div class="g3"></div>
        <div class="g4"></div>
        <div class="g5"></div>
        <!-- <div class="interactive"></div> -->
      </div>
    </div>
  `}init(){this.setupURLChangeListener(),this.injectDeco()}setupURLChangeListener(){window.addEventListener("popstate",()=>{this.onURLChanged()});const e=history.pushState;history.pushState=(...s)=>{e.apply(history,s),this.onURLChanged()};const t=history.replaceState;history.replaceState=(...s)=>{t.apply(history,s),this.onURLChanged()},window.addEventListener("hashchange",()=>{console.log("hashchange"),this.onURLChanged()})}onURLChanged(){const e=document.getElementsByClassName("chat-background")[1];if(e){const t=localStorage.getItem("peerId");i.boostedChatList.includes(t)?e.classList.remove("bg-invisible"):e.classList.add("bg-invisible")}}async injectDeco(){const e=document.getElementsByClassName("chat-background")[0];if(e){const t=document.createElement("div");t.className="chat-background",t.classList.add("bg-invisible"),t.innerHTML=this.boostedBackground,e.insertAdjacentElement("afterend",t)}}}const d=new n;export{d as default};
//# sourceMappingURL=decoInjection-BvBtJk3i.js.map
