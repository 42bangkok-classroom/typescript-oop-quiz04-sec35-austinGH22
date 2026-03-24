import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { IUser } from './user.interface';

import { NotFoundException } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';

export interface typeInterface {
  name?: string;
  number?: number;
}
@Injectable()
export class UserService {
  test(): typeInterface[] {
    return [];
  }

  findAll(): IUser[] {
    const fileContent = fs.readFileSync('./data/users.json', 'utf-8');
    const users = JSON.parse(fileContent) as IUser[];
    return users;
  }

  findOne(id: string, fields?: string[]): Partial<IUser> {
    const allUsers = this.findAll();
    // 2. ค้นหา User ที่มี id ตรงกับที่ส่งมา
    const user = allUsers.find((u) => u.id === id);
    //Throw Error
    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (fields) {
      const filteredUser: Partial<IUser> = {};

      fields.forEach((field) => {
        filteredUser[field as keyof IUser] = user[field as keyof IUser];
      });

      return filteredUser;
    }
    return user;
  }

  create(dto: CreateUserDto): IUser {
    const allUsers = this.findAll();
    //net id
    let nextID = '1';
    if (allUsers.length > 0) {
      const maxID = Math.max(...allUsers.map((user) => Number(user.id)));
      nextID = String(maxID + 1);
    }
    //make a new user
    const newUser: IUser = {
      id: nextID,
      firstName: dto.firstName,
      lastName: dto.lastName,
      email: dto.email,
      username: dto.username,
    };
    //push newuser  in array
    allUsers.push(newUser);

    //write in file
    fs.writeFileSync(
      './data/users.json',
      JSON.stringify(allUsers, null, 2),
      'utf-8',
    );
    return newUser;
  }
}
