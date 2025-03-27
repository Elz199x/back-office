import { NestFactory } from '@nestjs/core';
import { PromotionManagementModule } from './promotion-management.module';

async function bootstrap() {
  const app = await NestFactory.create(PromotionManagementModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
