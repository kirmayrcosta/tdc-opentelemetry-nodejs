import tracer from './tracer';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  await tracer.start();
  const app = await NestFactory.create(AppModule);
  await app.listen(3002);
}
bootstrap();
