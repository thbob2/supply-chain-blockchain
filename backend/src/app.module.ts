import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VehicleModule } from './vehicle/vehicle.module';
import { BlockchainModule } from './blockchain/blockchain.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
    VehicleModule,
    BlockchainModule,
  ],
})
export class AppModule {}
