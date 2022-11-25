import { container, delay } from 'tsyringe';

import { IBookRepository } from '@modules/books/domain/repositories/bookRepository';
import BookRepository from '@modules/books/repository/prisma/bookRepository';

container.registerSingleton<IBookRepository>(
  'BookRepository',
  delay(() => BookRepository),
);
