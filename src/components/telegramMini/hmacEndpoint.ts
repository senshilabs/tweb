class HmacEndPoint<T> {
  private apiEndpoint: string;
  private method: 'GET' | 'POST';

  constructor(apiEndpoint: string, method: 'GET' | 'POST' = 'GET') {
    this.apiEndpoint = apiEndpoint;
    this.method = method;
  }

  public getHMAC(isProd: boolean) {
    if(!isProd) {
      window.sessionStorage.setItem('__telegram__initParams', JSON.stringify({
        tgWebAppData:'query_id=AAGnipdpAAAAAKeKl2nNX0c9&user=%7B%22id%22%3A1771539111%2C%22first_name%22%3A%220xono%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22dev_ono_ono%22%2C%22language_code%22%3A%22ko%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1715602968&hash=5b4683dd13529af8eb07e47d134f5d64a295c58af78f919635206da0a9174997'
      } ));
    }
    // return JSON.parse(window.sessionStorage.getItem('__telegram__initParams'))['tgWebAppData'];
    // @ts-ignore
    return window.Telegram.WebApp.initData;
  }

  public fetchData(): Promise<T> {
    const isProd = true;
    const hmacToken = this.getHMAC(isProd);

    return fetch(this.apiEndpoint, {
      method:this.method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${hmacToken}`
      }
    })
    .then(response =>{
      console.log({response});
      return response.ok ? response.json() : Promise.reject(response)
    })
    .catch(error => {
      throw new Error('Failed to fetch data');
    });
  }
}

export default HmacEndPoint;
