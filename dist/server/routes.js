"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var filme_1 = require("./controllers/filme");
var user_1 = require("./controllers/user");
var categoria_1 = require("./controllers/categoria");
function setRoutes(app) {
    var filmeCtrl = new filme_1.default();
    var userCtrl = new user_1.default();
    var categoriaCtrl = new categoria_1.default();
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
exports.default = setRoutes;
//# sourceMappingURL=routes.js.map