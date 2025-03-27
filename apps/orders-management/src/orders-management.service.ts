import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersManagementService {
  getHello(): string {
    return 'Hello World!';
  }
}
