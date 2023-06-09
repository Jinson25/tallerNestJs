import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getAll(): string[] {
    return ['guitarra', 'instrumento de cuerdas'];
  }
}
