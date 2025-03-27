import { Controller, Get } from '@nestjs/common';
import { PaymentManagementService } from './payment-management.service';

@Controller()
export class PaymentManagementController {
  constructor(private readonly paymentManagementService: PaymentManagementService) {}

  @Get()
  getHello(): string {
    return this.paymentManagementService.getHello();
  }
}
