
// todo : 하트 이미지 변경


class AirDropEndpoint<T> {
  private apiEndpoint: string;
  private method: 'GET' | 'POST';

  constructor(apiEndpoint: string, method: 'GET' | 'POST' = 'GET') {
    this.apiEndpoint = apiEndpoint;
    this.method = method;
  }


  public getHMAC(isProd: boolean) {
    return JSON.parse(window.sessionStorage.getItem('__telegram__initParams'))['tgWebAppData'];
  }

  public fetchData(): Promise<T> {
    const isProd = true;
    const hmacToken = this.getHMAC(isProd);

    console.log({hmacToken})

    return fetch(this.apiEndpoint, {
      method:this.method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${hmacToken}`
      }
    })
    .then(response =>
        response.ok ? response.json() : Promise.reject(response)
    )
    .catch(error => {
      throw new Error('Failed to fetch data');
    });
  }
}

type ClaimableApiResponse = {
    claimable: boolean;
}

type ClaimApiResponse = {
    claimable: boolean;
    earned: number;
}

const claimableApi = new AirDropEndpoint<ClaimableApiResponse>('https://6iuhvr5pl9.execute-api.us-west-2.amazonaws.com/default/api/claimable', 'GET');
const claimApi = new AirDropEndpoint<ClaimApiResponse>('https://6iuhvr5pl9.execute-api.us-west-2.amazonaws.com/default/api/claim', 'POST');
const me = new AirDropEndpoint('https://6iuhvr5pl9.execute-api.us-west-2.amazonaws.com/default/api/me');

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
    claimableApi.fetchData().then(res => {
      this.createAirdropElement();
    }).catch(error => {
      console.error('Error claiming airdrop:', error);
    });
  }


  private onAirdropClick() {
    claimApi.fetchData().then(res => {
      console.log('Airdrop successfully claimed!')
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

export class AirdropDashBoard {
  private airdropLayer: HTMLElement;
  private airdropElement: HTMLElement;

  // AirdropManager의 초기화 및 필요 리소스 설정
  public init() {
    this.airdropLayer = document.getElementById('airdrop-layer') as HTMLElement;
  }

  //   public open(){

//   }
}

// 모듈화를 위해 default export 사용
export default new AirdropManager();
