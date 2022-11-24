import { IBookRequest } from '@modules/books/domain/dtos/IBookRequest';
import { IBookResponse } from '@modules/books/domain/dtos/IBookResponse';
import { IBookRepository } from '@modules/books/domain/repositories/book-repository';
import { prisma } from '@shared/prisma';

export default class BookRepository implements IBookRepository {
  async save(data: IBookRequest): Promise<IBookResponse> {
    if (data.id)
      return await prisma.books.update({
        where: {
          id: data.id,
        },
        data,
      });

    return await prisma.books.create({
      data,
    });
  }

  async getAll(): Promise<IBookResponse[]> {
    return await prisma.books.findMany();
  }
}
