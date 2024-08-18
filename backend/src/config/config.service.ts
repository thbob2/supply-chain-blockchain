import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  getMongoURI(): string {
    return `mongodb://${this.configService.get('MONGO_INITDB_ROOT_USERNAME')}:${this.configService.get('MONGO_INITDB_ROOT_PASSWORD')}@mongo:27017/${this.configService.get('MONGO_DB')}`;
  }

  getNetwork(): string {
    return `https://mainnet.infura.io/v3/${this.configService.get('INFURA_PROJECT_ID')}`;
  }

  getPrivateKey(): string {
    return this.configService.get('PRIVATE_KEY');
  }

  getContractAddress(): string {
    return this.configService.get('CONTRACT_ADDRESS');
  }
}
