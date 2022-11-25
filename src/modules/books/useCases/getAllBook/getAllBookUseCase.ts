import { inject, injectable } from 'tsyringe';
// import { IBookRequest } from '@modules/books/domain/dtos/IBookRequest';
import { IBookResponse } from '@modules/books/domain/dtos/IBookResponse';
import { IBookRepository } from '@modules/books/domain/repositories/bookRepository';
// import AppError from '@shared/errors/app-error';

@injectable()
export default class GetAllBookUseCase {
  constructor(
    @inject('BookRepository')
    private repository: IBookRepository,
  ) {}

  async execute(): Promise<IBookResponse[]> {
    // const isExistsId = await this.repository.findByIdCategory(`${data.id}`);

    // if (!isExistsId && data.id) {
    //   throw new AppError(`Not found!`);
    // }

    // const isExistsCategory = await this.repository.findByCategory(
    //   data.category,
    // );

    // if (
    //   (isExistsCategory && !data.id) ||
    //   (isExistsCategory && `${isExistsCategory.id}` !== `${data.id}`)
    // ) {
    //   throw new AppError(
    //     `This is ${isExistsCategory?.category} record is already being used`,
    //     422,
    //   );
    // }

    return await this.repository.getAll();
  }
}
