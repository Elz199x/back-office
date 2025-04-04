import { Module } from '@nestjs/common';
import { CronjobServiveController } from './cronjob-servive.controller';
import { CronjobServiveService } from './cronjob-servive.service';

@Module({
  imports: [],
  controllers: [CronjobServiveController],
  providers: [CronjobServiveService],
})
export class CronjobServiveModule {}
