import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('return1', () => {
    it('should return "1"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.return1()).toBe('1');
    });
  });
});
