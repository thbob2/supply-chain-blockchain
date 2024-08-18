import { Controller, Post, Body } from '@nestjs/common';
import { VehicleService } from './vehicle.service';

@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post('register')
  async registerVehicle(@Body('brand') brand: string) {
    return this.vehicleService.registerVehicle(brand);
  }

  @Post('transfer')
  async transferVehicle(
    @Body('id') id: number,
    @Body('newOwner') newOwner: string,
  ) {
    return this.vehicleService.transferVehicle(id, newOwner);
  }

  @Post('receive')
  async receiveVehicle(@Body('id') id: number) {
    return this.vehicleService.receiveVehicle(id);
  }
}
