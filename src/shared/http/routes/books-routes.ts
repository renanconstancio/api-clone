import { Router } from 'express';

import PatchBookController from '@modules/books/use-cases/patch-book/patch-book-controller';
import GetAllBookController from '@modules/books/use-cases/get-all/get-all-book-controller';

const booksRouter = Router();

booksRouter
  .patch('/', new PatchBookController().handle)
  .get('/', new GetAllBookController().handle);

export default booksRouter;
