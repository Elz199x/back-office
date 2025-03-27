import { Module } from '@nestjs/common';
import { ProductManagementController } from './product-management.controller';
import { ProductManagementService } from './product-management.service';

@Module({
  imports: [],
  controllers: [ProductManagementController],
  providers: [ProductManagementService],
})
export class ProductManagementModule {}
