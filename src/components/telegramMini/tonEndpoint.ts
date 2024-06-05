class TonEndPoint<T> {
  private apiEndpoint: string;
  private method: 'GET' | 'POST';

  constructor(contractAddress: string, apiEndpoint: string, method: 'GET' | 'POST' = 'GET') {
    this.apiEndpoint =  `https://testnet.toncenter.com/api/v3/${apiEndpoint}?address=${contractAddress}`
    this.method = method;
  }

  public fetchData(body?: any): Promise<T> {
    const fetchOptions: RequestInit = {
      method: this.method,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    if(this.method === 'POST' && body) {
      fetchOptions.body = JSON.stringify(body);
    }

    return fetch(this.apiEndpoint, fetchOptions)
    .then((response) => {
      console.log({response});
      return response.ok ? response.json() : Promise.reject(response);
    })
    .catch((error) => {
      throw new Error('Failed to fetch data');
    });
  }
}

export default TonEndPoint;
