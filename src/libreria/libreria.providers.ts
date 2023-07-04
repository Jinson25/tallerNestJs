import { Provider } from '@nestjs/common';
import { AuthorService } from './services/autor.services';


export const authorProviders: Provider[] = [
  {
    provide: AuthorService,
    useClass: AuthorService,
  },
  {
    provide: AuthorRepository,
    useClass: AuthorRepository,
  },
];
