import { container } from 'tsyringe';
import { Request, Response } from 'express';
import GetAllBookUseCase from './getAllBookUseCase';

export default class GetAllBookController {
  async handle(request: Request, response: Response): Promise<Response> {
    // const { name, id } = request.body;

    const useCases = await container.resolve(GetAllBookUseCase).execute();

    return response.json(useCases);
  }
}
