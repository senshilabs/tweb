import HmacEndPoint from './hmacEndpoint';
import confetti from './confetti';
import dashboard from './dashboard';
import {ContractHandler} from './contractHandler.js';

type ClaimableApiResponse = {
    claimable: boolean;
}

type ClaimApiResponse = {
    claimable: boolean;
    earned: number;
}

const claimableApi = new HmacEndPoint<ClaimableApiResponse>('/claimable', 'GET');
const claimApi = new HmacEndPoint<ClaimApiResponse>('/claim', 'POST');


export class AirdropManager {
  private airdropLayer: HTMLElement;
  private airdropElement: HTMLElement;
  private isAirdropFallen: boolean = false;

  // AirdropManager의 초기화 및 필요 리소스 설정
  public async init() {
    this.airdropLayer = document.getElementById('airdrop-layer') as HTMLElement;
    this.scheduleAirdropFetch();
    const contract = new ContractHandler('EQBfMfM9a9j-ulMHZdtSkWFaAdyQU6Cjkyom9eGQAgCX8afW')
    const isBoosting = await contract.isChannelBoosting(-1001983857786);
    console.log({isBoosting})
  }

  // 서버에서 Airdrop 데이터를 주기적으로 가져옴
  private scheduleAirdropFetch() {
    setInterval(() => {
      this.fetchClaimable();
    }, 15_000);
  }

  // 서버 API를 호출하여 Airdrop 데이터를 가져옴
  private async fetchClaimable() {
    try {
      const res = await claimableApi.fetchData();
      this.createAirdropElement();
    } catch(error) {
      console.error('Error claiming airdrop:', error);
    }
  }

  private async onAirdropClick() {
    try {
      this.removeAirdropElement();
      const telegram_channel_id = Number(localStorage.getItem('peerId'));
      const body = {
        telegram_channel_id
      };
      const res = await claimApi.fetchData(body);
      console.log('Airdrop successfully claimed!');
      confetti.addConfetti();
      await dashboard.updateBalance();
    } catch(error) {
      this.removeAirdropElement();
      console.error('Error claiming airdrop:', error);
    }
  }

  // Airdrop UI 요소 생성 및 이벤트 핸들링
  private createAirdropElement() {
    if(this.isAirdropFallen) {
      return;
    }
    this.airdropElement = document.createElement('div');
    this.airdropElement.classList.add('chute');

    const coin = document.createElement('div');
    coin.classList.add('coin');

    this.airdropElement.appendChild(coin);

    this.airdropElement.addEventListener('click', this.onAirdropClick.bind(this));

    this.animateAirdropElement(this.airdropElement);
    this.airdropLayer.appendChild(this.airdropElement);
    this.isAirdropFallen = true;
  }

  private removeAirdropElement() {
    this.airdropElement.remove();
    this.airdropElement = null;
    this.isAirdropFallen = false;
  }

  // Airdrop 애니메이션
  private animateAirdropElement(el: HTMLElement) {
    function getRandomPosition() {
      return Math.floor(Math.random() * (document.documentElement.clientWidth * 0.8));
    }
    const startX = getRandomPosition();
    const endX = getRandomPosition();

    el.style.cssText = `
            width: 50px;
            height: 50px;
            position: absolute;
            top: 0;
            left: ${startX}px;
        `;

    const animationDuration = 10000; // 10초

    // 세로 이동 애니메이션 (linear)
    const verticalAnimation = el.animate([
      {top: '-100px'},
      {top: `${document.documentElement.clientHeight}px`}
    ], {
      duration: animationDuration,
      easing: 'linear',
      fill: 'forwards'
    });

    // 좌우 이동 애니메이션 (ease-in-out)
    const horizontalAnimation = el.animate([
      {left: `${startX}px`},
      {left: `${endX}px`}
    ], {
      duration: animationDuration,
      easing: 'ease-in-out',
      fill: 'forwards'
    });

    // 애니메이션 종료 시 요소 제거
    verticalAnimation.onfinish = () => {
      this.removeAirdropElement();
    };
  }
}

// 모듈화를 위해 default export 사용
export default new AirdropManager();
