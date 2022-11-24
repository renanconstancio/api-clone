import { container, delay } from 'tsyringe';

import { IBookRepository } from '@modules/books/domain/repositories/book-repository';
import BookRepository from '@modules/books/repository/prisma/book-repository';

container.registerSingleton<IBookRepository>(
  'RepositoryBook',
  delay(() => BookRepository),
);
