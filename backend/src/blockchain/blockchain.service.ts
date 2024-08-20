import { Injectable } from '@nestjs/common';
import Web3 from 'web3';
import * as contractArtifact from './contracts/VehicleSupplyChain.json';

@Injectable()
export class BlockchainService {
  private web3: Web3;
  private contract: any;

  constructor() {
    this.web3 = new Web3(
      new Web3.providers.HttpProvider('http://localhost:7545'),
    );
    const networkId = Object.keys(contractArtifact.networks)[0];
    this.contract = new this.web3.eth.Contract(
      contractArtifact.abi,
      contractArtifact.networks[networkId].address,
    );
  }

  async registerVehicle(brand: string, owner: string) {
    const accounts = await this.web3.eth.getAccounts();
    await this.contract.methods.registerVehicle(brand).send({ from: owner });
  }

  async transferVehicle(id: number, newOwner: string) {
    const accounts = await this.web3.eth.getAccounts();
    await this.contract.methods
      .transferVehicle(id, newOwner)
      .send({ from: accounts[0] });
  }

  async getVehicleOwner(id: number) {
    return await this.contract.methods.getVehicleOwner(id).call();
  }
}
