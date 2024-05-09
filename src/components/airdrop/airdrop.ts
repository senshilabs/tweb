
// todo : 하트 이미지 변경


class AirDropEndpoint {
  private apiEndpoint: string;

  constructor(apiEndpoint: string) {
    this.apiEndpoint = apiEndpoint;
  }

  public getHMAC() {
    return JSON.parse(window.sessionStorage.getItem('__telegram__initParams'))['tgWebAppData'];
  }

  public fetchData(): Promise<any> {
    const isProd = true;
    const hmacToken = this.getHMAC();

    if(isProd) {
      return Promise.resolve({success: true});
    } else {
      return fetch(this.apiEndpoint, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${hmacToken}`
        }
      })
      .then(response => response.json())
      .catch(error => {
        throw new Error('Failed to fetch data');
      });
    }
  }
}

const claimable = new AirDropEndpoint('/claimable');
const claim = new AirDropEndpoint('/claim');

export class AirdropManager {
  private airdropLayer: HTMLElement;
  private airdropElement: HTMLElement;

  // AirdropManager의 초기화 및 필요 리소스 설정
  public init() {
    this.airdropLayer = document.getElementById('airdrop-layer') as HTMLElement;
    this.scheduleAirdropFetch();
    // this.createAirdropElement();
  }

  // 서버에서 Airdrop 데이터를 주기적으로 가져옴
  private scheduleAirdropFetch() {
    setInterval(() => {
      this.fetchClaimable();
    }, 10000); // 5분 간격
  }

  // 서버 API를 호출하여 Airdrop 데이터를 가져옴
  private fetchClaimable() {
    claimable.fetchData().then(data => {
      if(data.success) {
        // alert('Airdrop successfully claimed!');
        this.createAirdropElement();
      } else {
        // alert('Failed to claim airdrop.');
      }
    }).catch(error => {
      console.error('Error claiming airdrop:', error);
      alert('Error occurred while claiming airdrop.');
    });
  }

  private onAirdropClick() {
    claim.fetchData().then(data => {
      if(data.success) {
        // todo : UI 업데이트
      } else {
        // alert('Failed to claim airdrop.');
        // 이 때 어케함?
      }
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
            width: 50px;
            height: 50px;
            position: absolute;
            top: 0;
            left: ${randomX}px;
        `;
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
