import { NestFactory } from '@nestjs/core';
import { OrdersManagementModule } from './orders-management.module';

async function bootstrap() {
  const app = await NestFactory.create(OrdersManagementModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
