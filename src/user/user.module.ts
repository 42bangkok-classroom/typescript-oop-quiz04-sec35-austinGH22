import { Controller, Module } from "@nestjs/common";
import { UserService,typeInterface } from "./user.service";
import { UserController } from "./user.controller";

@Module({
    controllers:[UserController],
    providers:[UserService],
})
export class UserModule {}