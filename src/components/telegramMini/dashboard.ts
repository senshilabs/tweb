import HmacEndPoint from './hmacEndpoint';

type MyInfoApiResponse = {
  Balance: {
    Total: number;
  };
  EarlyBirdClaim: boolean;
  TelegramUserId: string;
  Username: string;
};

type ServerInfoApiResponse = {
  base_earn_points: number;
  earlybird_points: number;
  interval_seconds: number;
};
const myInfoApi = new HmacEndPoint<MyInfoApiResponse>('https://6iuhvr5pl9.execute-api.us-west-2.amazonaws.com/default/api/me', 'GET');
const earlyBirdApi = new HmacEndPoint<MyInfoApiResponse>('https://6iuhvr5pl9.execute-api.us-west-2.amazonaws.com/default/api/earlybird', 'POST');
const serverInfoApi = new HmacEndPoint<ServerInfoApiResponse>('https://6iuhvr5pl9.execute-api.us-west-2.amazonaws.com/default/api/server-info', 'GET');

export class AirdropDashBoard {
  private dashboardLayer: HTMLElement;
  private dashboardElement: HTMLElement;
  private balance: number = 0;
  private earlybirdPoints: number = 0;

  // AirdropManager의 초기화 및 필요 리소스 설정
  public init() {
    this.dashboardLayer = document.getElementById('dashboard-layer') as HTMLElement;
    this.open();
  }

  public open() {
    myInfoApi.fetchData().then(res => {
      serverInfoApi.fetchData().then(serverInfo => {
        console.log({serverInfo});
        this.earlybirdPoints = serverInfo.earlybird_points;
        this.createEvent(res.EarlyBirdClaim, serverInfo.earlybird_points);
      }).catch(error => {
        console.error('Error fetching server info:', error);
      });

      this.balance = res.Balance.Total;
      this.createBalance();
      this.createHorizontalLine();
    }).catch(error => {
      console.error('Error claiming airdrop:', error);
    })
  }

  public claimEarlyBird() {
    earlyBirdApi.fetchData().then(res => {
      console.log({res});
    }).catch(error => {
      console.error('Error claiming airdrop:', error);
    })
  }

  private createBalance() {
    this.dashboardElement = document.createElement('div');
    this.dashboardElement.style.display = 'flex';
    this.dashboardElement.style.flexDirection = 'column';
    this.dashboardElement.style.alignItems = 'center';
    this.dashboardElement.style.paddingLeft = '16px';
    this.dashboardElement.style.paddingRight = '16px';
    this.dashboardElement.style.paddingTop = '24px';
    this.dashboardElement.style.paddingBottom = '24px';

    const nameDiv = document.createElement('div');
    nameDiv.style.width = '100%';

    const nameText = document.createElement('p');
    // @ts-ignore
    nameText.textContent = 'Hi! ' + (window.Telegram.WebApp.initDataUnsafe.user.first_name || window.Telegram.WebApp.initDataUnsafe.user.user_name || 'Undefined');
    nameText.style.fontSize = '20px'; // Set font size to 20
    nameText.style.fontWeight = 'bold'; // Set font weight to bold
    nameDiv.appendChild(nameText);
    this.dashboardElement.appendChild(nameDiv);

    const rewardDiv = document.createElement('div');
    rewardDiv.style.width = '100%';
    rewardDiv.style.background = 'white';
    rewardDiv.style.borderRadius = '8px';
    rewardDiv.style.height = '130px';
    rewardDiv.style.borderColor = '#F4F4F4';
    rewardDiv.style.borderStyle = 'solid';
    rewardDiv.style.borderWidth = '1px';
    rewardDiv.style.display = 'flex';
    rewardDiv.style.flexDirection = 'column';
    rewardDiv.style.justifyContent = 'center';
    rewardDiv.style.alignItems = 'center';
    rewardDiv.style.padding = '16px';

    const rewardFirstChildDiv = document.createElement('div');
    rewardFirstChildDiv.style.width = '100%';

    const rewardText = document.createElement('p');
    rewardText.textContent = 'Rewards';
    rewardText.style.margin = '0';
    rewardText.style.marginBottom = '12px';
    rewardText.style.fontSize = '18px';
    rewardText.style.fontWeight = 'bold'; // Set font weight to bold
    rewardFirstChildDiv.appendChild(rewardText);

    rewardFirstChildDiv.appendChild(rewardText);
    rewardDiv.appendChild(rewardFirstChildDiv);

    const rewardSecondChildDiv = document.createElement('div');
    rewardSecondChildDiv.style.width = '100%';
    rewardSecondChildDiv.style.background = '#ECF2F9';
    rewardSecondChildDiv.style.height = '61px';
    rewardSecondChildDiv.style.display = 'flex';
    rewardSecondChildDiv.style.alignItems = 'center';
    rewardSecondChildDiv.style.justifyContent= 'space-between';
    rewardSecondChildDiv.style.borderRadius = '4px';
    rewardSecondChildDiv.style.paddingTop = '20px';
    rewardSecondChildDiv.style.paddingBottom = '20px';
    rewardSecondChildDiv.style.paddingLeft = '12px';
    rewardSecondChildDiv.style.paddingRight = '12px';
    rewardSecondChildDiv.style.color = '#417FC6';
    rewardSecondChildDiv.style.fontSize = '16px'; // Set font size to 16
    rewardSecondChildDiv.style.fontWeight = 'bold'; // Set font weight to bold

    // Wrapper with div
    const wrapperDiv1 = document.createElement('div');
    wrapperDiv1.style.display = 'flex';
    wrapperDiv1.style.alignItems = 'center';
    rewardSecondChildDiv.appendChild(wrapperDiv1);

    // Icon
    const icon = document.createElement('img');
    icon.src = '/public/assets/img/mTon.png';
    icon.style.width = '24px';
    icon.style.height = '24px';
    icon.style.marginRight = '6px';
    wrapperDiv1.appendChild(icon);

    // Balance Text
    const balanceText = document.createElement('p');
    balanceText.textContent = 'Balance';
    wrapperDiv1.appendChild(balanceText);

    // Amount
    // Wrapper with div
    const wrapperDiv2 = document.createElement('div');
    wrapperDiv2.style.display = 'flex';
    wrapperDiv2.style.alignItems = 'center';
    rewardSecondChildDiv.appendChild(wrapperDiv2);
    // Amount
    const amount = document.createElement('p');
    amount.textContent = this.balance.toString();
    amount.style.marginRight = '4px';
    wrapperDiv2.appendChild(amount);
    // Ticker
    const ticker = document.createElement('p');
    ticker.textContent = 'mTon';
    wrapperDiv2.appendChild(ticker);

    rewardDiv.appendChild(rewardSecondChildDiv);
    this.dashboardElement.appendChild(rewardDiv);

    this.dashboardLayer.appendChild(this.dashboardElement);
  }

  private createHorizontalLine() {
    // Horizontal Line
    const horizontalLine = document.createElement('div');
    horizontalLine.style.width = '100%';
    horizontalLine.style.height = '2px';
    horizontalLine.style.border = 'none';
    horizontalLine.style.borderTop = '1px solid #F4F4F4';
    this.dashboardLayer.appendChild(horizontalLine);
  }

  private createEvent(EarlyBirdClaim = false, earlybirdPoints = 0) {
    const eventDiv = document.createElement('div');
    eventDiv.style.width = '100%';
    eventDiv.style.display = 'flex';
    eventDiv.style.flexDirection = 'column';
    eventDiv.style.alignItems = 'center';
    eventDiv.style.paddingTop = '24px';
    eventDiv.style.paddingBottom = '24px';
    eventDiv.style.paddingLeft = '16px';
    eventDiv.style.paddingRight = '16px';

    const eventText = document.createElement('p');
    eventText.textContent = 'Early Bird Event';
    eventText.style.width = '100%';
    eventText.style.margin = '0';
    eventText.style.marginBottom = '12px';
    eventText.style.fontSize = '18px';
    eventText.style.fontWeight = 'bold';

    const claimText = document.createElement('div');
    claimText.textContent = `Claim ${earlybirdPoints} mTon`;
    claimText.style.width = '100%';
    claimText.style.background = '#548DE6';
    claimText.style.borderRadius = '4px';
    claimText.style.padding = '8px 16px';
    claimText.style.color = '#fff';
    claimText.style.fontSize = '16px';
    claimText.style.fontWeight = 'bold';
    claimText.style.textAlign = 'center';

    if(EarlyBirdClaim) {
      claimText.style.background = '#D9D9D9';
      claimText.style.color = '#B3B3B3';
      claimText.textContent = 'Claimed';
    } else {
      claimText.addEventListener('click', () => {
        this.claimEarlyBird();
      });
    }

    eventDiv.appendChild(eventText);
    eventDiv.appendChild(claimText);

    this.dashboardLayer.appendChild(eventDiv);
  }
}

export default new AirdropDashBoard();
