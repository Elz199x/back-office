import { Controller, Get } from '@nestjs/common';
import { ShippingManagementService } from './shipping-management.service';

@Controller()
export class ShippingManagementController {
  constructor(private readonly shippingManagementService: ShippingManagementService) {}

  @Get()
  getHello(): string {
    return this.shippingManagementService.getHello();
  }
}
