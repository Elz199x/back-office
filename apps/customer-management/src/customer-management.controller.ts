import { Controller, Get } from '@nestjs/common';
import { CustomerManagementService } from './customer-management.service';

@Controller()
export class CustomerManagementController {
  constructor(private readonly customerManagementService: CustomerManagementService) {}

  @Get()
  getHello(): string {
    return this.customerManagementService.getHello();
  }
  @Get('health')
  healthCheck(): string {
    return this.customerManagementService.healthCheck()
  }
}
