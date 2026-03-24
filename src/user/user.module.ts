import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { IUser } from './user.interface';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
