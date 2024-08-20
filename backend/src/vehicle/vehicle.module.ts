import { Module } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';
import { BlockchainModule } from '../blockchain/blockchain.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Vehicle, VehicleSchema } from './schemas/vehicle.schema';

@Module({
  imports: [
    BlockchainModule,
    MongooseModule.forFeature([{ name: Vehicle.name, schema: VehicleSchema }]),
  ],
  controllers: [VehicleController],
  providers: [VehicleService],
})
export class VehicleModule {}
