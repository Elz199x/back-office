import { Module } from '@nestjs/common';
import { ShippingManagementController } from './shipping-management.controller';
import { ShippingManagementService } from './shipping-management.service';

@Module({
  imports: [],
  controllers: [ShippingManagementController],
  providers: [ShippingManagementService],
})
export class ShippingManagementModule {}
