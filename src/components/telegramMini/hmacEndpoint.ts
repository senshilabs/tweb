class HmacEndPoint<T> {
  private apiEndpoint: string;
  private method: 'GET' | 'POST';

  constructor(apiEndpoint: string, method: 'GET' | 'POST' = 'GET') {
    this.apiEndpoint = `https://6iuhvr5pl9.execute-api.us-west-2.amazonaws.com/default/api${apiEndpoint}`;
    this.method = method;
  }

  public getHMAC(isProd: boolean) {
    if(!isProd) {
      window.sessionStorage.setItem('__telegram__initParams', JSON.stringify({
        tgWebAppData: 'query_id=AAGnipdpAAAAAKeKl2nDCOdC&user=%7B%22id%22%3A1771539111%2C%22first_name%22%3A%220xono%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22dev_ono%22%2C%22language_code%22%3A%22ko%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1715684033&hash=c20498254c26cc6eae671692bb52370ba88026cf512cb5d6c984688e91133aff'
      }));
    }
    // return JSON.parse(window.sessionStorage.getItem('__telegram__initParams'))['tgWebAppData'];
    // @ts-ignore
    return window.Telegram.WebApp.initData;
  }

  public fetchData(body?: any): Promise<T> {
    const isProd = true;
    const hmacToken = this.getHMAC(isProd);

    const fetchOptions: RequestInit = {
      method: this.method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${hmacToken}`
      }
    };

    if(this.method === 'POST' && body) {
      fetchOptions.body = JSON.stringify(body);
    }

    return fetch(this.apiEndpoint, fetchOptions)
    .then(response => {
      console.log({response});
      return response.ok ? response.json() : Promise.reject(response);
    })
    .catch(error => {
      throw new Error('Failed to fetch data');
    });
  }
}


export default HmacEndPoint;
