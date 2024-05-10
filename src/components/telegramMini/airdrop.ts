
// todo : 하트 이미지 변경
import JSConfetti from 'js-confetti'
import HmacEndPoint from './hmacEndpoint';
const jsConfetti = new JSConfetti()

type ClaimableApiResponse = {
    claimable: boolean;
}

type ClaimApiResponse = {
    claimable: boolean;
    earned: number;
}

const claimableApi = new HmacEndPoint<ClaimableApiResponse>('https://6iuhvr5pl9.execute-api.us-west-2.amazonaws.com/default/api/claimable', 'GET');
const claimApi = new HmacEndPoint<ClaimApiResponse>('https://6iuhvr5pl9.execute-api.us-west-2.amazonaws.com/default/api/claim', 'POST');


export class AirdropManager {
  private airdropLayer: HTMLElement;
  private airdropElement: HTMLElement;

  // AirdropManager의 초기화 및 필요 리소스 설정
  public init() {
    this.airdropLayer = document.getElementById('airdrop-layer') as HTMLElement;
    this.scheduleAirdropFetch();
  }

  // 서버에서 Airdrop 데이터를 주기적으로 가져옴
  private scheduleAirdropFetch() {
    setInterval(() => {
      this.fetchClaimable();
    }, 10000); // 5분 간격
  }

  // 서버 API를 호출하여 Airdrop 데이터를 가져옴
  private fetchClaimable() {
    claimableApi.fetchData().then(res => {
      this.createAirdropElement();
    }).catch(error => {
      console.error('Error claiming airdrop:', error);
    });
  }

  private onAirdropClick() {
    claimApi.fetchData().then(res => {
      console.log('Airdrop successfully claimed!')
      jsConfetti . addConfetti ( {
        emojis : ['💵', '🎁', '💎', '🤑']
      } )
    }).catch(error => {
      console.error('Error claiming airdrop:', error);
      alert('Error occurred while claiming airdrop.');
    }).finally(() => {
      this.removeAirdropElement();
    });
  }

  // Airdrop UI 요소 생성 및 이벤트 핸들링
  private createAirdropElement() {
    this.airdropElement = document.createElement('div');
    this.airdropElement.classList.add('chute');

    const load = document.createElement('div');
    load.classList.add('load');

    this.airdropElement.appendChild(load);

    this.airdropElement.addEventListener('click', this.onAirdropClick.bind(this));

    this.styleAirdropElement(this.airdropElement);
    this.animateAirdropElement(this.airdropElement);
    this.airdropLayer.appendChild(this.airdropElement);
  }

  private removeAirdropElement() {
    this.airdropElement.remove();
    this.airdropElement = null;
  }

  // Airdrop 요소 스타일 설정
  private styleAirdropElement(el: HTMLElement) {
    const randomX = Math.floor(Math.random() * (document.documentElement.clientWidth - el.offsetWidth));
    el.style.cssText = `
            width: 30px;
            height: 30px;
            position: absolute;
            top: 0;
            left: ${randomX}px;
        `;
  }

  private createCoinElement() {
    const coin = document.createElement('div');
    coin.id = 'coin';
    coin.style.width = '50px';
    coin.style.height = '50px';
    coin.style.borderRadius = '50%';
    coin.style.backgroundColor = 'gold';
    coin.style.position = 'absolute';


    this.airdropLayer.appendChild(coin);

    return coin;
  }


  // Airdrop 애니메이션
  private animateAirdropElement(el: HTMLElement) {
    const animationDuration = 10000; // 10초
    const verticalDistance = document.documentElement.clientHeight - el.offsetHeight;
    const maxWidth = document.documentElement.clientWidth - el.offsetWidth;
    const movementRestriction = 0.35; // 좌우 이동 범위를 최대의 35%로 제한

    // 세로 이동 애니메이션 (linear)
    const verticalAnimation = el.animate([
      {top: '0px'},
      {top: `${verticalDistance}px`}
    ], {
      duration: animationDuration,
      easing: 'linear',
      fill: 'forwards'
    });

    // 좌우 이동 애니메이션 (ease-in-out)
    const horizontalAnimation = el.animate([
      {left: `${Math.random() * maxWidth * movementRestriction}px`},
      {left: `${Math.random() * maxWidth * movementRestriction}px`}
    ], {
      duration: animationDuration,
      easing: 'ease-in-out',
      fill: 'forwards'
    });

    // 애니메이션 종료 시 요소 제거
    verticalAnimation.onfinish = () => {
      el.remove();
    };
  }
}


// 모듈화를 위해 default export 사용
export default new AirdropManager();
