import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  
  app.setGlobalPrefix('api');
  app.enableVersioning({ type: VersioningType.URI, defaultVersion: '1' });
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('API Tienda Computadoras - SIS257')
    .setDescription('API Rest para gestión de usuarios y clientes')
    .setVersion('1.0')
    .addTag('usuarios, clientes')
    .build();
  
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  // Monta la interfaz de Swagger en la ruta '/api' (reemplaza tu prefijo global solo para los docs)
  SwaggerModule.setup('docs', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
  console.log(`App corriendo en ${await app.getUrl()}`);
}
bootstrap();