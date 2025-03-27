import { Module } from '@nestjs/common';
import { CustomerManagementController } from './customer-management.controller';
import { CustomerManagementService } from './customer-management.service';

@Module({
  imports: [],
  controllers: [CustomerManagementController],
  providers: [CustomerManagementService],
})
export class CustomerManagementModule {}
