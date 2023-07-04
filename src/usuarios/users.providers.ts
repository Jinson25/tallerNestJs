import { Provider } from '@nestjs/common';
import { UserService } from './services/index.user.service';


export const usersProviders: Provider[] = [
  {
    provide: UserRepository,
    useClass: UserRepository,
  },
  UserService,
];
