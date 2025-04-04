import { Module } from '@nestjs/common';
import { PaymentManagementController } from './payment-management.controller';
import { PaymentManagementService } from './payment-management.service';

@Module({
  imports: [],
  controllers: [PaymentManagementController],
  providers: [PaymentManagementService],
})
export class PaymentManagementModule {}
