import { Test, TestingModule } from '@nestjs/testing';
import { ShippingManagementController } from './shipping-management.controller';
import { ShippingManagementService } from './shipping-management.service';

describe('ShippingManagementController', () => {
  let shippingManagementController: ShippingManagementController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ShippingManagementController],
      providers: [ShippingManagementService],
    }).compile();

    shippingManagementController = app.get<ShippingManagementController>(ShippingManagementController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(shippingManagementController.getHello()).toBe('Hello World!');
    });
  });
});
