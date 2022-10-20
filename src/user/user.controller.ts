import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Req, UseInterceptors,UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// Req
import { Request } from 'express';

// 需要依赖注入test模块的service
import { TestService } from '../test/test.service'

// 引入拦截器
import { LoggingInterceptor } from '../interceptors/loging'

// 引入守卫
import { AuthGuard } from '../guards/auth'

interface q {
  q1: string
  q2: string
}

// UserMoudle 的全局拦截
// @UseInterceptors(LoggingInterceptor)

// UserMoudle 的全局守卫
@UseGuards(AuthGuard)
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly testService: TestService
  ) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  // 使用test模块的service
  @UseInterceptors(LoggingInterceptor)  // 单独拦截某个子路由
  @Get('co')
  getCommon() {
    return this.testService.getCommon()
  }

  // 获取请求的param参数
  @Get('u/:param')
  getUserParam(@Param('param') param: string) {
    return this.userService.getUserParam(param)
  }

  // 获取请求的query参数
  // 这里的 q1、q2 是请求时必需带的 query 参数（名字要一致）
  // 即 u?q1=xxx&q2=yyy
  @Get('u')
  getUserQuery(@Query('q1') q1: string,@Query('q2') q2: string) {
    return this.userService.getUserQuery(q1,q2)
  }

  @Get('ut')
  getUserWholeQuery(@Query() q: q) {
    console.log(q);
    return this.userService.getUserWholeQuery(q)
  }

  // Req的使用
  @Get('ureq')
  getUserReq(@Req() request: Request) {
    console.log(request.query);
    return `return req is ${request.query}`
  }
}
