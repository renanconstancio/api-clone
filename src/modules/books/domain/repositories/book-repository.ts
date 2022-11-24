import { IBookRequest } from '../dtos/IBookRequest';
import { IBookResponse } from '../dtos/IBookResponse';

export interface IBookRepository {
  save(data: IBookRequest): Promise<IBookResponse>;
  getAll(): Promise<IBookResponse[]>;
}
