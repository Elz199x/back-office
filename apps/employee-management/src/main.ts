import { NestFactory } from '@nestjs/core';
import { EmployeeManagementModule } from './employee-management.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  try {
    const app = await NestFactory.create(EmployeeManagementModule);

    app.enableCors();
    app.setGlobalPrefix('/emp');

    const config = new DocumentBuilder()
      .setTitle('EMP')
      .setDescription('Employee Management API')
      .setVersion('1.0')
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('emp/docsapi', app, document, {
      swaggerOptions: {
        persistAuthorization: true,
      },
    });

    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
      }),
    );

    const port = process.env.PORT || 3000;
    await app.listen(port);

    console.log(`🚀 Server is running on: http://localhost:${port}/emp`);
    console.log(`📚 Swagger Docs available at: http://localhost:${port}/emp/docsapi`);
  } catch (error) {
    console.error('❌ Error starting server:', error);
    process.exit(1); // ออกจากโปรเซสถ้าเซิร์ฟเวอร์เริ่มไม่สำเร็จ
  }
}

bootstrap();
