import { Test, TestingModule } from '@nestjs/testing';
import { PromotionManagementController } from './promotion-management.controller';
import { PromotionManagementService } from './promotion-management.service';

describe('PromotionManagementController', () => {
  let promotionManagementController: PromotionManagementController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PromotionManagementController],
      providers: [PromotionManagementService],
    }).compile();

    promotionManagementController = app.get<PromotionManagementController>(PromotionManagementController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(promotionManagementController.getHello()).toBe('Hello World!');
    });
  });
});
