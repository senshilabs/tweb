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
        tgWebAppData:'query_id%3DAAGnipdpAAAAAKeKl2nVK9Jx%26user%3D%257B%2522id%2522%253A1771539111%252C%2522first_name%2522%253A%2522MyungjunChae%2520%257C%2520Senshilabs%2522%252C%2522last_name%2522%253A%2522%2522%252C%2522username%2522%253A%2522MyungjunChae%2522%252C%2522language_code%2522%253A%2522ko%2522%252C%2522allows_write_to_pm%2522%253Atrue%257D%26auth_date%3D1715324000%26hash%3D0de2d6b187893d2b555c5eed18679cc5dafc4093d2c842f8f2a9814c11b20844&tgWebAppPlatform=macos&tgWebAppThemeParams=%7B%22header_bg_color%22%3A%22%23efeff3%22%2C%22section_header_text_color%22%3A%22%236d6d71%22%2C%22section_bg_color%22%3A%22%23ffffff%22%2C%22button_text_color%22%3A%22%23ffffff%22%2C%22link_color%22%3A%22%232481cc%22%2C%22secondary_bg_color%22%3A%22%23efeff3%22%2C%22subtitle_text_color%22%3A%22%23999999%22%2C%22destructive_text_color%22%3A%22%23ff3b30%22%2C%22hint_color%22%3A%22%23999999%22%2C%22bg_color%22%3A%22%23ffffff%22%2C%22text_color%22%3A%22%23000000%22%2C%22accent_text_color%22%3A%22%232481cc%22%2C%22button_color%22%3A%22%232481cc%22%7D&tgWebAppVersion=7.2'
      } ));
    }
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

export default HmacEndPoint;
