import { Router } from 'express';

import PatchBookController from '@modules/books/useCases/patchBook/patchBookController';
import GetAllBookController from '@modules/books/useCases/getAllBook/getAllBookController';

const booksRouter = Router();

booksRouter
  .patch('/', new PatchBookController().handle)
  .get('/', new GetAllBookController().handle);

export default booksRouter;
