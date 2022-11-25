import { container } from 'tsyringe';
import { Request, Response } from 'express';
import PatchBookUseCase from './patchBookUseCase';

export default class PatchBookController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, id } = request.body;

    const useCases = await container
      .resolve(PatchBookUseCase)
      .execute({ name, id });

    return response.json(useCases);
  }
}
