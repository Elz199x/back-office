import { AuthServiceModule } from './auth-service.module';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ValidationPipe } from '@nestjs/common'



async function bootstrap() {
  const app = await NestFactory.create(AuthServiceModule);
  app.enableCors()
  app.setGlobalPrefix('/emp')
  const config = new DocumentBuilder().setTitle('EMP').setDescription('EMP API').setVersion('1.0').addBearerAuth().build()
  const document = SwaggerModule.createDocument(app, config)
  // SwaggerModule.setup('ag/docsapi', app, document)
  SwaggerModule.setup('emp/docsapi', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  })
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  await app.listen(4000);
  console.log(`Application ( auth-service ) is running on: http://localhost:4000`)
  console.log(`Swagger ( auth-service ) is running on: http://localhost:4000/emp/docsapi`)
}
bootstrap();
