import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module.js';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:5173',
  });

  const config = new DocumentBuilder()
    .setTitle('Sayly API')
    .setDescription('this is the backend API for our project')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'enter jwt token',
        in: 'header',

      },
      'JWT-auth',
    )
    .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);

  console.log('server is running on: http://localhost:3000');
  console.log('swagger is available on: http://localhost:3000/api');
}
await bootstrap();
