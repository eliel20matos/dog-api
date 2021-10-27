import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,  // é Baseado no DTO
    forbidNonWhitelisted: true ,  //Não permitir o envio de informaçao não listada na nossa entidade
    transform: true
  }))
  await app.listen(3000);
}
bootstrap();
