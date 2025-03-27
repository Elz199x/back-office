import { Test, TestingModule } from '@nestjs/testing';
import { CustomerManagementController } from './customer-management.controller';
import { CustomerManagementService } from './customer-management.service';

describe('CustomerManagementController', () => {
  let customerManagementController: CustomerManagementController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CustomerManagementController],
      providers: [CustomerManagementService],
    }).compile();

    customerManagementController = app.get<CustomerManagementController>(CustomerManagementController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(customerManagementController.getHello()).toBe('Hello World!');
    });
  });
});
