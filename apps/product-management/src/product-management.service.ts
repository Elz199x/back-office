import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductManagementService {
  getHello(): string {
    return 'Hello World!';
  }
}
