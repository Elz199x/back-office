import { Test, TestingModule } from '@nestjs/testing';
import { OrdersManagementController } from './orders-management.controller';
import { OrdersManagementService } from './orders-management.service';

describe('OrdersManagementController', () => {
  let ordersManagementController: OrdersManagementController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [OrdersManagementController],
      providers: [OrdersManagementService],
    }).compile();

    ordersManagementController = app.get<OrdersManagementController>(OrdersManagementController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(ordersManagementController.getHello()).toBe('Hello World!');
    });
  });
});
