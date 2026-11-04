import { NestFactory } from '@nestjs/core';
import { AuthServiceModule } from './auth-service.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AuthServiceModule);
  await app.listen(process.env.AUTH_PORT ?? 3001);
}
await bootstrap();
