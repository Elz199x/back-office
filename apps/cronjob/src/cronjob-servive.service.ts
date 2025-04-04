import { Injectable } from '@nestjs/common';

@Injectable()
export class CronjobServiveService {
  getHello(): string {
    return 'Hello World!';
  }
}
