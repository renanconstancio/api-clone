import { inject, injectable } from 'tsyringe';
import { IBookRequest } from '@modules/books/domain/dtos/IBookRequest';
import { IBookResponse } from '@modules/books/domain/dtos/IBookResponse';
import { IBookRepository } from '@modules/books/domain/repositories/book-repository';
// import AppError from '@shared/errors/app-error';

@injectable()
export default class PatchBookUseCase {
  constructor(
    @inject('BookRepository')
    private repository: IBookRepository,
  ) {}

  async execute(data: IBookRequest): Promise<IBookResponse> {
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

    return await this.repository.save({
      ...data,
    });
  }
}
