import { NestFactory } from '@nestjs/core';
import { ShippingManagementModule } from './shipping-management.module';

async function bootstrap() {
  const app = await NestFactory.create(ShippingManagementModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
