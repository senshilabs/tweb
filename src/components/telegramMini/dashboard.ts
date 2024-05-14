import confetti from './confetti';
import HmacEndPoint from './hmacEndpoint';

type MyInfoApiResponse = {
  Balance: {
    Total: number;
  };
  EarlyBirdClaim: boolean;
  TelegramUserId: string;
  Username: string;
};

type EarlyBirdApiResponse = {
  claimed: boolean;
};

type ServerInfoApiResponse = {
  base_earn_points: number;
  earlybird_points: number;
  interval_seconds: number;
};
const myInfoApi = new HmacEndPoint<MyInfoApiResponse>('/me', 'GET');
const earlyBirdApi = new HmacEndPoint<EarlyBirdApiResponse>('/earlybird', 'POST');
const serverInfoApi = new HmacEndPoint<ServerInfoApiResponse>('/server-info', 'GET');

export class AirdropDashBoard {
  private dashboardLayer: HTMLElement;
  private dashboardElement: HTMLElement;

  // AirdropManager의 초기화 및 필요 리소스 설정
  public init() {
    this.dashboardLayer = document.getElementById('dashboard-layer') as HTMLElement;
    this.updateDashboard();
  }

  public clearDashboard() {
    this.dashboardLayer.innerHTML = '';
  }

  public async updateDashboard() {
    try {
      this.clearDashboard();

      const myInfo = await myInfoApi.fetchData();
      const serverInfo = await serverInfoApi.fetchData();

      this.createBalance(myInfo.Balance.Total);
      this.createEvent(myInfo.EarlyBirdClaim, serverInfo.earlybird_points);
      this.createInvitation();
    } catch(error) {
      console.error('Error updating dashboard:', error);
    }
  }

  public async claimEarlyBird() {
    try {
      await earlyBirdApi.fetchData();
      this.updateBalance();
      this.updateClaimButton(false);
      confetti.addConfetti();
    } catch(error) {
      console.error('Error claiming airdrop:', error);
    }
  }

  public async updateBalance(element: HTMLElement = document.getElementById('tm-balance') as HTMLElement) {
    try {
      const myInfo = await myInfoApi.fetchData();
      element.textContent = myInfo.Balance.Total.toString();
    } catch(error) {
      console.error('Error updating balance:', error);
    }
  }

  public updateClaimButton(claimable: boolean, earlybirdPoints: number = 0, element: HTMLElement = document.getElementById('tm-claim-btn') as HTMLElement) {
    if(!claimable) {
      element.textContent = 'Claimed';
      element.classList.remove('tm-button-active');
      element.classList.add('tm-button-inactive');
    } else {
      element.textContent = `Claim ${earlybirdPoints} mTon`;
      element.classList.remove('tm-button-inactive');
      element.classList.add('tm-button-active');
      element.addEventListener('click', () => {
        this.claimEarlyBird();
      });
    }
  }

  private createBalance(balance: number) {
    this.dashboardElement = document.createElement('div');
    this.setStyle(this.dashboardElement, {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '24px 16px'
    });

    const nameDiv = this.createElementWithStyle('div', {width: '100%'});
    // @ts-ignore
    const nameText = this.createElementWithStyle('p', {fontSize: '20px', fontWeight: 'bold'}, 'Hi! ' + (window.Telegram.WebApp.initDataUnsafe.user.first_name || window.Telegram.WebApp.initDataUnsafe.user.user_name || 'Undefined'));
    nameText.classList.add('tm-title');
    nameDiv.appendChild(nameText);
    this.dashboardElement.appendChild(nameDiv);

    const rewardDiv = this.createElementWithStyle('div', {
      width: '100%',
      background: 'white',
      borderRadius: '8px',
      height: '130px',
      border: '1px solid #F4F4F4',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '16px'
    });

    const rewardFirstChildDiv = this.createElementWithStyle('div', {width: '100%'});
    const rewardText = this.createElementWithStyle('p', {fontSize: '18px', fontWeight: 'bold'}, 'Rewards');
    rewardText.classList.add('tm-title');
    rewardFirstChildDiv.appendChild(rewardText);
    rewardDiv.appendChild(rewardFirstChildDiv);

    const rewardSecondChildDiv = this.createElementWithStyle('div', {
      width: '100%',
      background: '#ECF2F9',
      height: '61px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: '4px',
      padding: '20px 12px',
      color: '#417FC6',
      fontSize: '16px',
      fontWeight: 'bold'
    });

    const wrapperDiv1 = this.createElementWithStyle('div', {
      display: 'flex',
      alignItems: 'center'
    });
    const icon = this.createElementWithStyle('img', {
      width: '24px',
      height: '24px',
      marginRight: '6px'
    }) as HTMLImageElement;
    icon.src = '/assets/img/mTon.png';

    const balanceText = document.createElement('p');
    balanceText.textContent = 'Balance';
    wrapperDiv1.appendChild(icon);
    wrapperDiv1.appendChild(balanceText);
    rewardSecondChildDiv.appendChild(wrapperDiv1);

    const wrapperDiv2 = this.createElementWithStyle('div', {
      display: 'flex',
      alignItems: 'center'
    });
    const amount = this.createElementWithStyle('p', {marginRight: '4px'}, balance.toString());
    amount.id = 'tm-balance';

    const ticker = document.createElement('p');
    ticker.textContent = 'mTon';
    wrapperDiv2.appendChild(amount);
    wrapperDiv2.appendChild(ticker);
    rewardSecondChildDiv.appendChild(wrapperDiv2);

    rewardDiv.appendChild(rewardSecondChildDiv);
    this.dashboardElement.appendChild(rewardDiv);

    this.dashboardLayer.appendChild(this.dashboardElement);
  }

  private createEvent(EarlyBirdClaim = false, earlybirdPoints = 0) {
    const eventDiv = this.createElementWithStyle('div', {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '24px 16px'
    });

    const eventText = this.createElementWithStyle('p', {
      width: '100%',
      fontSize: '18px',
      fontWeight: 'bold'
    }, 'Early Bird Event🐦');
    eventText.classList.add('tm-title');

    const claimText = this.createElementWithStyle('div', {width: '100%'});
    claimText.id = 'tm-claim-btn';
    if(EarlyBirdClaim) {
      claimText.textContent = 'Claimed';
      claimText.classList.add('tm-button-inactive');
    } else {
      claimText.textContent = `Claim ${earlybirdPoints} mTon`;
      claimText.classList.add('tm-button-active');
      claimText.addEventListener('click', () => {
        this.claimEarlyBird();
      });
    }

    eventDiv.appendChild(eventText);
    eventDiv.appendChild(claimText);
    this.dashboardLayer.appendChild(eventDiv);
  }

  private createInvitation() {
    const invitationDiv = this.createElementWithStyle('div', {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '24px 16px'
    });

    const descriptionText = this.createElementWithStyle('p', {
      width: 'fit-content',
      fontSize: '18px',
      fontWeight: 'bold'
    }, 'Invite Frens🎉');
    descriptionText.classList.add('tm-title');

    const subDescriptionText = this.createElementWithStyle('p', {
      width: 'fit-content',
      fontSize: '12px',
      color: '#888888',
      margin: '0',
      marginLeft: '5px',
      marginBottom: '12px'
    }, 'and get 1000 mTon');

    const wrapperDiv1 = this.createElementWithStyle('div', {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      alignItems: 'baseline'
    });
    wrapperDiv1.appendChild(descriptionText);
    wrapperDiv1.appendChild(subDescriptionText);

    const copyLinkText = this.createElementWithStyle('div', {width: '49.5%'}, 'Copy link');
    copyLinkText.classList.add('tm-button-active');
    copyLinkText.addEventListener('click', () => {
      // @ts-ignore
      const link = `t.me/tele_gram_mini_bot/app?startapp=ref_${window.Telegram.WebApp.initDataUnsafe.user.id}`;
      navigator.clipboard.writeText(link).then(() => {
        console.log('Link copied to clipboard:', link);
      }).catch(error => {
        console.error('Error copying link to clipboard:', error);
      });
    });

    const sendLinkText = this.createElementWithStyle('div', {width: '49.5%'}, 'Send');
    sendLinkText.classList.add('tm-button-active');
    sendLinkText.addEventListener('click', () => {
      // @ts-ignore
      const link = `https://t.me/share/url?url=t.me/tele_gram_mini_bot/app?startapp=ref_${window.Telegram.WebApp.initDataUnsafe.user.id}&text=random%text!`;
      window.open(link);
    });

    const wrapperDiv2 = this.createElementWithStyle('div', {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%'
    });
    wrapperDiv2.appendChild(copyLinkText);
    wrapperDiv2.appendChild(sendLinkText);

    invitationDiv.appendChild(wrapperDiv1);
    invitationDiv.appendChild(wrapperDiv2);
    this.dashboardLayer.appendChild(invitationDiv);
  }

  private setStyle(element: HTMLElement, styles: { [key: string]: string }) {
    for(const property in styles) {
      element.style[property as any] = styles[property];
    }
  }

  private createElementWithStyle(tag: string, styles: { [key: string]: string }, textContent?: string): HTMLElement {
    const element = document.createElement(tag);
    this.setStyle(element, styles);
    if(textContent) {
      element.textContent = textContent;
    }
    return element;
  }
}

export default new AirdropDashBoard();
