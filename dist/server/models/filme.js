"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var filmeSchema = new mongoose.Schema({
    title: String,
    categoria: String,
    avaliacao: Number,
    cena1: String,
    cena2: String,
    cena3: String,
    descricao: String,
    trailer: String,
    thumbnail: String
});
var Filme = mongoose.model('Filme', filmeSchema);
exports.default = Filme;
//# sourceMappingURL=filme.js.map