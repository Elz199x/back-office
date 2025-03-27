import { Module } from '@nestjs/common';
import { PromotionManagementController } from './promotion-management.controller';
import { PromotionManagementService } from './promotion-management.service';

@Module({
  imports: [],
  controllers: [PromotionManagementController],
  providers: [PromotionManagementService],
})
export class PromotionManagementModule {}
