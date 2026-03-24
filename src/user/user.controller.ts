import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { UserService, typeInterface } from './user.service';
import { IUser } from './user.interface';

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
}
