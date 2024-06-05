// contractHandler.js
import {Address} from '@ton/core';
import {TonUtil} from './tonUtil.js';

class ContractHandler {
  static boostedChatList = ['-1983857786']
  contractAddress: Address;

  constructor(contractRawAddress : string = 'EQBfMfM9a9j-ulMHZdtSkWFaAdyQU6Cjkyom9eGQAgCX8afW') {
    this.contractAddress = TonUtil.parseAddress(contractRawAddress);
  }

  async getChildAddress(channelId : number) {
    const response = await TonUtil.callGetMethodWithResponse(this.contractAddress, 'childAddress', [
      {type: 'int', value: BigInt(channelId)},
      {type: 'int', value: BigInt(1)}
    ]);
    return response.stack.readAddress();
  }

  async isBoosting(childAddress : Address) {
    const response = await TonUtil.callGetMethodWithResponse(childAddress, 'isBoosting');
    return response.stack.readBoolean();
  }

  async isChannelBoosting(channelId : number) {
    const childAddress = await this.getChildAddress(channelId);
    return this.isBoosting(childAddress);
  }
}

export {ContractHandler};
