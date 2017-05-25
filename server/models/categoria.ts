import * as mongoose from 'mongoose';

const categoriaSchema = new mongoose.Schema({
  name: String,
  paginaInicial: Boolean
});

const Categoria = mongoose.model('Categoria', categoriaSchema);

export default Categoria;
