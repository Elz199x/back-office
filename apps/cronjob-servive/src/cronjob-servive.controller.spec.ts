import { Test, TestingModule } from '@nestjs/testing';
import { CronjobServiveController } from './cronjob-servive.controller';
import { CronjobServiveService } from './cronjob-servive.service';

describe('CronjobServiveController', () => {
  let cronjobServiveController: CronjobServiveController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CronjobServiveController],
      providers: [CronjobServiveService],
    }).compile();

    cronjobServiveController = app.get<CronjobServiveController>(CronjobServiveController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(cronjobServiveController.getHello()).toBe('Hello World!');
    });
  });
});
