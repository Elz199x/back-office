import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeManagementController } from './employee-management.controller';
import { EmployeeManagementService } from './employee-management.service';

describe('EmployeeManagementController', () => {
  let employeeManagementController: EmployeeManagementController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeManagementController],
      providers: [EmployeeManagementService],
    }).compile();

    employeeManagementController = app.get<EmployeeManagementController>(EmployeeManagementController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(employeeManagementController.getHello()).toBe('Hello World!');
    });
  });
});
