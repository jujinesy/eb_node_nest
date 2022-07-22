import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World!. USER:[${process.env.USER}], GOOD:[${process.env.GOOD}]`;
  }
}
