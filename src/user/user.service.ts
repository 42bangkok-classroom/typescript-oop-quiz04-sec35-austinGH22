import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { IUser } from './user.interface';

export interface typeInterface {
  name?: string;
  number?: number;
}
@Injectable()
export class UserService {
  test(): typeInterface[] {
    return [];
  }
  finAll(): IUser[] {
    const fileContent = fs.readFileSync('./data/users.json', 'utf-8');
    const users = JSON.parse(fileContent);
    return users;
  }
}
