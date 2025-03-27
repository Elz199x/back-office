import { Controller, Get } from '@nestjs/common';
import { OrdersManagementService } from './orders-management.service';

@Controller()
export class OrdersManagementController {
  constructor(private readonly ordersManagementService: OrdersManagementService) {}

  @Get()
  getHello(): string {
    return this.ordersManagementService.getHello();
  }
}
