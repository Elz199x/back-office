import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentManagementService {
  getHello(): string {
    return 'Hello World!';
  }
}
