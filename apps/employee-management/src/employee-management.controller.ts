import { Controller, Get } from '@nestjs/common';
import { EmployeeManagementService } from './employee-management.service';

@Controller()
export class EmployeeManagementController {
  constructor(private readonly employeeManagementService: EmployeeManagementService) {}

  @Get()
  getHello(): string {
    return this.employeeManagementService.getHello();
  }
}
