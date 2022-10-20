import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

// user模块要引用test模块的service的步骤
// 1.在test模块中，将test的service暴露出去（exports）
// 2.在user模块中，需要将test模块引入（imports），同时将test的service列入providers中
// 3.在user的controller中，需要将test的service引入，并依赖注入（constructor）
// 4.此时，在在user的controller即可以使用test的service提供的方法和数据（注意路由的匹配顺序是从上到下）

// import { TestModule } from '../test/test.module'
import { TestService } from '../test/test.service'

@Module({
  // imports: [TestModule],
  controllers: [UserController],
  providers: [UserService,TestService]
})
export class UserModule {}
