// tonUtil.js
import {TonClient} from '@ton/ton';
import {Address, TupleItem} from '@ton/core';

const endpoint = 'https://testnet.toncenter.com/api/v2/jsonRPC';

class TonUtil {
  static httpClient = new TonClient({endpoint});

  static parseAddress(rawAddress : string) {
    return Address.parse(rawAddress);
  }

  static async callGetMethodWithResponse(address: Address, name: string, stack?: TupleItem[]) {
    return TonUtil.httpClient.callGetMethod(address, name, stack);
  }
}

export {TonUtil};
