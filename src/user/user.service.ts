import { Injectable } from '@nestjs/common';

export interface typeInterface {
  name?: string;
  number?: number;
}
@Injectable()
export class UserService {
  test(): typeInterface[] {
    return [];
  }
}
