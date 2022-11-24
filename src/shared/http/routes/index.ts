import { Router } from 'express';
// import booksRouter from './books-routes';

const routes = Router();
// routes.use('/books', booksRouter);

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello Dev!' });
});

export default routes;
