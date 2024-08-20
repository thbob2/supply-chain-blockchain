import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { VehicleService } from './vehicle.service';

@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post('register')
  async registerVehicle(
    @Body('brand') brand: string,
    @Body('owner') owner: string,
  ) {
    return this.vehicleService.registerVehicle(brand, owner);
  }

  @Post('transfer/:id')
  async transferVehicle(
    @Param('id') id: string,
    @Body('newOwner') newOwner: string,
  ) {
    return this.vehicleService.transferVehicle(id, newOwner);
  }

  @Get(':id/owner')
  async getVehicleOwner(@Param('id') id: string) {
    return this.vehicleService.getVehicleOwner(id);
  }
}
