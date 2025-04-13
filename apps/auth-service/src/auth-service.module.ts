import { Module } from '@nestjs/common';
import { AuthServiceService } from './auth-service.service';
import { AuthServiceController } from './auth-service.controller';
import { PrismaService } from 'lib/common/prisma/prisma.service';

@Module({
  controllers: [AuthServiceController],
  providers: [AuthServiceService,PrismaService],
})
export class AuthServiceModule {}
