import { Controller, Get } from '@nestjs/common';
import { ProductManagementService } from './product-management.service';

@Controller()
export class ProductManagementController {
  constructor(private readonly productManagementService: ProductManagementService) {}

  @Get()
  getHello(): string {
    return this.productManagementService.getHello();
  }
}
