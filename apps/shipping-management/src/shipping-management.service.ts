import { Injectable } from '@nestjs/common';

@Injectable()
export class ShippingManagementService {
  getHello(): string {
    return 'Hello World!';
  }
}
