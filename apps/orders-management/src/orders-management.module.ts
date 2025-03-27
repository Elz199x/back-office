import { Module } from '@nestjs/common';
import { OrdersManagementController } from './orders-management.controller';
import { OrdersManagementService } from './orders-management.service';

@Module({
  imports: [],
  controllers: [OrdersManagementController],
  providers: [OrdersManagementService],
})
export class OrdersManagementModule {}
