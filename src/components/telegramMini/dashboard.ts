import HmacEndPoint from './hmacEndpoint';

const myInfoApi = new HmacEndPoint('https://6iuhvr5pl9.execute-api.us-west-2.amazonaws.com/default/api/me', 'GET');

export class AirdropDashBoard {
  private dashboardLayer: HTMLElement;
  private dashboardElement: HTMLElement;

  // AirdropManager의 초기화 및 필요 리소스 설정
  public init() {
    this.dashboardLayer = document.getElementById('dashboard-layer') as HTMLElement;
    this.createAirdropElement();
    this.open();
  }

  public open() {
    myInfoApi.fetchData().then(res => {
      console.log({res})
    }).catch(error => {
      console.error('Error claiming airdrop:', error);
    })
  }

  private createAirdropElement() {
    this.dashboardElement = document.createElement('div');
    this.dashboardElement.style.display = 'flex';
    this.dashboardElement.style.justifyContent = 'center';

    const childDiv = document.createElement('div');
    childDiv.style.width = '90%';
    childDiv.style.background = 'white';
    childDiv.style.borderRadius = '18px';
    childDiv.style.height = '100px';
    childDiv.style.borderColor = '#E6E6E6';
    childDiv.style.borderStyle = 'solid';
    childDiv.style.borderWidth = '1px';
    childDiv.style.display = 'flex';
    childDiv.style.flexDirection = 'column';
    childDiv.style.justifyContent = 'center';
    childDiv.style.alignItems = 'center';

    const firstChildDiv = document.createElement('div');
    firstChildDiv.style.width = '100%';
    firstChildDiv.textContent = 'Total $mTon';
    firstChildDiv.style.color = '#868686';

    childDiv.appendChild(firstChildDiv);

    const secondChildDiv = document.createElement('div');
    secondChildDiv.style.width = '100%';
    secondChildDiv.textContent = '10000000';
    secondChildDiv.style.color = 'black';

    childDiv.appendChild(secondChildDiv);

    this.dashboardElement.appendChild(childDiv);

    this.dashboardElement.appendChild(childDiv);
    this.dashboardLayer.appendChild(this.dashboardElement);
  }
}

export default new AirdropDashBoard();
