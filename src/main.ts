import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// 全局拦截
// 引入拦截器
import { LoggingInterceptor } from './interceptors/loging'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app使用全局拦截
  app.useGlobalInterceptors(new LoggingInterceptor())

  // 设置全局路由前缀
  app.setGlobalPrefix('api')
  
  await app.listen(3000);
}
bootstrap();
