import {ContractHandler} from './contractHandler';

class DecoInjection {
  private boostedBackground = `
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
  `;

  public init() {
    this.setupURLChangeListener();
    this.injectDeco();
  }

  private setupURLChangeListener() {
    // Listen to the popstate event (back/forward navigation)
    window.addEventListener('popstate', () => {
      this.onURLChanged();
    });

    // Overwrite pushState and replaceState to listen to changes
    const pushState = history.pushState;
    history.pushState = (...args) => {
      pushState.apply(history, args);
      this.onURLChanged();
    };

    const replaceState = history.replaceState;
    history.replaceState = (...args) => {
      replaceState.apply(history, args);
      this.onURLChanged();
    };

    // Listen to hashchange event
    window.addEventListener('hashchange', () => {
      console.log('hashchange')
      this.onURLChanged();
    });
  }

  private onURLChanged() {
    const chatBackground = document.getElementsByClassName('chat-background')[1];
    if(chatBackground) {
      const currentChatId = localStorage.getItem('peerId');
      const isBoosting = ContractHandler.boostedChatList.includes(currentChatId);

      if(isBoosting) {
        chatBackground.classList.remove('bg-invisible');
      } else {
        chatBackground.classList.add('bg-invisible');
      }
      // const contract = new ContractHandler('EQBfMfM9a9j-ulMHZdtSkWFaAdyQU6Cjkyom9eGQAgCX8afW');
      // const channelId = Number(localStorage.getItem('peerId'));
      // const isBoosting = await contract.isChannelBoosting(channelId);
    }
  }

  private async injectDeco() {
    const chatBackground = document.getElementsByClassName('chat-background')[0];
    if(chatBackground) {
      const newDiv = document.createElement('div');
      newDiv.className = 'chat-background';
      newDiv.classList.add('bg-invisible');
      newDiv.innerHTML = this.boostedBackground;

      chatBackground.insertAdjacentElement('afterend', newDiv);
    }
  }
}

export default new DecoInjection();
