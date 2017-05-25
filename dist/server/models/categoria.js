"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var categoriaSchema = new mongoose.Schema({
    name: String,
    paginaInicial: Boolean
});
var Categoria = mongoose.model('Categoria', categoriaSchema);
exports.default = Categoria;
//# sourceMappingURL=categoria.js.map