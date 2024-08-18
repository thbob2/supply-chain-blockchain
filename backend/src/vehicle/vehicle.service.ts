import { Injectable } from '@nestjs/common';
import Web3 from 'web3';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class VehicleService {
  private web3: Web3;
  private contract: any;

  constructor(private configService: ConfigService) {
    this.web3 = new Web3(
      new Web3.providers.HttpProvider(this.configService.get('NETWORK')),
    );
    const contractABI = require('../contracts/VehicleSupplyChain.json').abi;
    this.contract = new this.web3.eth.Contract(
      contractABI,
      this.configService.get('CONTRACT_ADDRESS'),
    );
  }

  async registerVehicle(brand: string) {
    const accounts = await this.web3.eth.getAccounts();
    await this.contract.methods
      .manufactureVehicle(brand)
      .send({ from: accounts[0] });
    return { message: 'Vehicle registered successfully.' };
  }

  async transferVehicle(id: number, newOwner: string) {
    const accounts = await this.web3.eth.getAccounts();
    await this.contract.methods
      .shipVehicle(id, newOwner)
      .send({ from: accounts[0] });
    return { message: 'Vehicle transferred successfully.' };
  }

  async receiveVehicle(id: number) {
    const accounts = await this.web3.eth.getAccounts();
    await this.contract.methods.receiveVehicle(id).send({ from: accounts[0] });
    return { message: 'Vehicle received successfully.' };
  }
}
