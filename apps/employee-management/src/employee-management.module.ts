import { Module } from '@nestjs/common';
import { EmployeeManagementController } from './employee-management.controller';
import { EmployeeManagementService } from './employee-management.service';

@Module({
  imports: [],
  controllers: [EmployeeManagementController],
  providers: [EmployeeManagementService],
})
export class EmployeeManagementModule {}
