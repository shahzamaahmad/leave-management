import { NestFactory } from '@nestjs/core';
import { NextFunction, Response } from 'express';
import { AppModule } from './app.module';

// export function logger(req: Request, res: Response, next: NextFunction) {
//   const protocol = req.method;

//   console.log(protocol);

//   next();
// }

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(logger);
  await app.listen(3000);
}
bootstrap();
