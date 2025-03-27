import { NestFactory } from '@nestjs/core';
import { EmployeeManagementModule } from './employee-management.module';

async function bootstrap() {
  const app = await NestFactory.create(EmployeeManagementModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
