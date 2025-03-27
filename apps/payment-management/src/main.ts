import { NestFactory } from '@nestjs/core';
import { PaymentManagementModule } from './payment-management.module';

async function bootstrap() {
  const app = await NestFactory.create(PaymentManagementModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
