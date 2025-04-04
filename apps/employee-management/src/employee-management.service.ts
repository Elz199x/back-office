import { Injectable } from '@nestjs/common';
import { PrismaService } from 'lib/common/prisma/prisma.service';


@Injectable()
export class EmployeeManagementService {
  constructor(private readonly prisma: PrismaService) {}

  getHello(): string {
    return 'Hello World!';
  }

  healthCheck(): string {
    return 'OK';
  }

  async getEmployee(id: number) {
    // return await this.prisma.readReplica()..findOne({ where: { id } });
  }
  

  async createEmployee(employeeData: any) {
    // const employeeRepo = await this.prisma.master('Employee');
    // return employeeRepo.save(employeeData);
  }

  // รองรับการใช้งานกับตารางอื่นๆ
  async getDepartment(id: number) {
    // const departmentRepo = await this.prisma.readReplica('Employee');
    // return await departmentRepo.findOne({ where: { id:id } });
  }

  async createDepartment(departmentData: any) {
    // const departmentRepo = await this.prisma.master('Employee');
    // return departmentRepo.save(departmentData);
  }
}
