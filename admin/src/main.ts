import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: 'http://localhost:3000',
  });
  await app.listen(8000);

  // const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  //   AppModule,
  //   {
  //     transport: Transport.RMQ,
  //     options: {
  //       urls: [
  //         'amqps://mmzfrqjn:h1W5ux9zS03Nes5rtJU6hckSHASvmYQG@hawk.rmq.cloudamqp.com/mmzfrqjn',
  //       ],
  //       queue: 'main_queue',
  //       queueOptions: {
  //         durable: false,
  //       },
  //     },
  //   },
  // );

  // await app.listen();
}
bootstrap();
