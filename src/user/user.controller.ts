import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { UserService, typeInterface } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('test')
  test(): typeInterface[] {
    return this.userService.test();
  }
}
