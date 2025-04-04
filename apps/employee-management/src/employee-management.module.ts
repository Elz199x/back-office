
import { Module } from '@nestjs/common';
import { EmployeeManagementController } from './employee-management.controller';
import { EmployeeManagementService } from './employee-management.service';
import { PrismaService } from 'lib/common/prisma/prisma.service';


@Module({
  // imports: [PrismaService],
  controllers: [EmployeeManagementController],
  providers: [EmployeeManagementService,PrismaService],
})
export class EmployeeManagementModule {}
