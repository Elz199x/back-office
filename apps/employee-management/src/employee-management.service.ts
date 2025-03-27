import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeManagementService {
  getHello(): string {
    return 'Hello World!';
  }
}
