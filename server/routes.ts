import * as express from 'express';

import FilmeCtrl from './controllers/filme';
import UserCtrl from './controllers/user';
import CategoriaCtrl from './controllers/categoria';
import Filme from './models/filme';
import User from './models/user';
import Categoria from './models/categoria';

export default function setRoutes(app) {

  const filmeCtrl = new FilmeCtrl();
  const userCtrl = new UserCtrl();
  const categoriaCtrl = new CategoriaCtrl();

  // Filmes
  app.route('/api/filmes').get(filmeCtrl.getAll);
  app.route('/api/filmes/count').get(filmeCtrl.count);
  app.route('/api/filme').post(filmeCtrl.insert);
  app.route('/api/filme/:id').get(filmeCtrl.get);
  app.route('/api/filme/:id').put(filmeCtrl.update);
  app.route('/api/filme/:id').delete(filmeCtrl.delete);

  // Users
  app.route('/api/login').post(userCtrl.login);
  app.route('/api/users').get(userCtrl.getAll);
  app.route('/api/users/count').get(userCtrl.count);
  app.route('/api/user').post(userCtrl.insert);
  app.route('/api/user/:id').get(userCtrl.get);
  app.route('/api/user/:id').put(userCtrl.update);
  app.route('/api/user/:id').delete(userCtrl.delete);

  // Categorias
  app.route('/api/categorias').get(categoriaCtrl.getAll);
  app.route('/api/categorias/count').get(categoriaCtrl.count);
  app.route('/api/categoria').post(categoriaCtrl.insert);
  app.route('/api/categoria/:id').get(categoriaCtrl.get);
  app.route('/api/categoria/:id').put(categoriaCtrl.update);
  app.route('/api/categoria/:id').delete(categoriaCtrl.delete);

}



