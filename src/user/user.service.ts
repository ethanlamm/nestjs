import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

interface q {
  q1: string
  q2: string
}

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  // param参数
  getUserParam(param:string) {
    return `This action return param is ${param}`
  }

  // query参数（分开）
  getUserQuery(q1: string, q2: string) {
    return `This action return queries，q1 is ${q1} and q2 is ${q2}`
  }

 
  // query参数（整体，拿到一个对象）
  getUserWholeQuery(q: q) {
    return `This action return queries，q1 is ${q.q1} and q2 is ${q.q2}`
  }
}
