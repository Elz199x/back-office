import { Injectable } from '@nestjs/common';

@Injectable()
export class PromotionManagementService {
  getHello(): string {
    return 'Hello World!';
  }
}
