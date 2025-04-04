import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EmployeeManagementService } from './employee-management.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('employee')
@ApiTags('Employee Management')

export class EmployeeManagementController {
  constructor(private readonly employeeService: EmployeeManagementService) {}
  
  @Get()
  @ApiOperation({ summary: 'get message Hello' })
  getHello(): string {
    return this.employeeService.getHello();
  }
  @Get('health')
  @ApiOperation({ summary: 'get health check' })
  healthCheck(): string {
    return this.employeeService.healthCheck()
  }

  @Get('replica/:id')
  async getEmployee(@Param('id') id: number)  {
    return this.employeeService.getEmployee(id);
  }

  // @Post()
  // async createEmployee(@Body() employeeData: any) {
  //   return this.employeeService.createEmployee(employeeData);
  // }
}
