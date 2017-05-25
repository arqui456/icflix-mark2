import * as mongoose from 'mongoose';

const filmeSchema = new mongoose.Schema({
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

const Filme = mongoose.model('Filme', filmeSchema);

export default Filme;
