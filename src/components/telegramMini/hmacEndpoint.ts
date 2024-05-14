class HmacEndPoint<T> {
  private apiEndpoint: string;
  private method: 'GET' | 'POST';

  constructor(apiEndpoint: string, method: 'GET' | 'POST' = 'GET') {
    this.apiEndpoint = `https://6iuhvr5pl9.execute-api.us-west-2.amazonaws.com/default/api${apiEndpoint}`;
    this.method = method;
  }

  public getHMAC() {
    if(import.meta.env.DEV) {
      window.sessionStorage.setItem(import.meta.env.VITE_TELEGRAM_SESSION_KEY, JSON.stringify({
        tgWebAppData: import.meta.env.VITE_TELE_GRAM_APP_DATA
      }));
    }

    // @ts-ignore
    return window.Telegram.WebApp.initData;
  }

  public fetchData(body?: any): Promise<T> {
    const hmacToken = this.getHMAC();

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
