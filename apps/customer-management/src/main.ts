import { NestFactory } from '@nestjs/core';
import { CustomerManagementModule } from './customer-management.module';

async function bootstrap() {
  const app = await NestFactory.create(CustomerManagementModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
