import { Test, TestingModule } from '@nestjs/testing';
import { ProductManagementController } from './product-management.controller';
import { ProductManagementService } from './product-management.service';

describe('ProductManagementController', () => {
  let productManagementController: ProductManagementController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProductManagementController],
      providers: [ProductManagementService],
    }).compile();

    productManagementController = app.get<ProductManagementController>(ProductManagementController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(productManagementController.getHello()).toBe('Hello World!');
    });
  });
});
