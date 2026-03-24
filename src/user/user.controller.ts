import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { UserService, typeInterface } from './user.service';
import { IUser } from './user.interface';

import { Param, Query } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';

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
  

  @Get(':id')
  findOne(
    @Param('id') id: string,         
    @Query('fields') fields?: string  
  ) {
    const fieldsArray = fields ? fields.split(',') : undefined;
    return this.userService.findOne(id, fieldsArray);
  }

  @Post()
  create(
    @Body(new ValidationPipe()) createUserDto: CreateUserDto){
   return this.userService.create(createUserDto)
 }
 

}

