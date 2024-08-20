import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vehicle } from './schemas/vehicle.schema';
import { BlockchainService } from '../blockchain/blockchain.service';

@Injectable()
export class VehicleService {
  constructor(
    @InjectModel(Vehicle.name) private vehicleModel: Model<Vehicle>,
    private blockchainService: BlockchainService,
  ) {}

  // Register a new vehicle
  async registerVehicle(brand: string, owner: string) {
    const vehicle = new this.vehicleModel({ brand, owner });
    await this.blockchainService.registerVehicle(brand, owner);
    return vehicle.save();
  }

  // Transfer a vehicle to a new owner
  async transferVehicle(id: string, newOwner: string) {
    await this.blockchainService.transferVehicle(parseInt(id), newOwner);
    return this.vehicleModel.findByIdAndUpdate(
      id,
      { owner: newOwner },
      { new: true },
    );
  }

  // Get the owner of a vehicle
  async getVehicleOwner(id: string) {
    const vehicleOwner = await this.blockchainService.getVehicleOwner(
      parseInt(id),
    );
    return vehicleOwner;
  }
}
