import { Controller, Get } from '@nestjs/common';
import { PromotionManagementService } from './promotion-management.service';

@Controller()
export class PromotionManagementController {
  constructor(private readonly promotionManagementService: PromotionManagementService) {}

  @Get()
  getHello(): string {
    return this.promotionManagementService.getHello();
  }
}
