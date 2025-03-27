import { NestFactory } from '@nestjs/core';
import { CronjobServiveModule } from './cronjob-servive.module';

async function bootstrap() {
  const app = await NestFactory.create(CronjobServiveModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
