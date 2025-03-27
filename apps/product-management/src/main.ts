import { NestFactory } from '@nestjs/core';
import { ProductManagementModule } from './product-management.module';

async function bootstrap() {
  const app = await NestFactory.create(ProductManagementModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
