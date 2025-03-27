import { Test, TestingModule } from '@nestjs/testing';
import { PaymentManagementController } from './payment-management.controller';
import { PaymentManagementService } from './payment-management.service';

describe('PaymentManagementController', () => {
  let paymentManagementController: PaymentManagementController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PaymentManagementController],
      providers: [PaymentManagementService],
    }).compile();

    paymentManagementController = app.get<PaymentManagementController>(PaymentManagementController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(paymentManagementController.getHello()).toBe('Hello World!');
    });
  });
});
