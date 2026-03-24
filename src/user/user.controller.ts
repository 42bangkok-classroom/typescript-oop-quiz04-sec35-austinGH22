import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { UserService, typeInterface } from './user.service';
import { IUser } from './user.interface';

import { Param, Query } from '@nestjs/common';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('test')
  test(): typeInterface[] {
    return this.userService.test();
  }

  @Get()
  findAll(): IUser[] {
    return this.userService.findAll();
  }

  // ใช้ :id เพื่อบอกว่าตรงนี้คือตัวแปรนะ (เช่น /users/1 ตัวเลข 1 คือ id)
  @Get(':id')
  findOne(
    @Param('id') id: string, // แกะ id มาจาก URL
    @Query('fields') fields?: string, // แกะ fields มาจาก ?fields=...
  ) {
    // fields ที่ได้มาจะเป็น String ยาวๆ เช่น "firstName,lastName"
    // เราต้องใช้คำสั่ง .split(',') เพื่อหั่นมันให้เป็น Array ก่อนส่งให้พ่อครัว
    const fieldsArray = fields ? fields.split(',') : undefined;

    return this.userService.findOne(id, fieldsArray);
  }
}
