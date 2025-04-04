import { Controller, Get } from '@nestjs/common';
import { CronjobServiveService } from './cronjob-servive.service';

@Controller()
export class CronjobServiveController {
  constructor(private readonly cronjobServiveService: CronjobServiveService) {}

  @Get()
  getHello(): string {
    return this.cronjobServiveService.getHello();
  }
}
