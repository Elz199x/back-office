import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerManagementService {
  getHello(): string {
    return 'Hello World!';
  }
}
