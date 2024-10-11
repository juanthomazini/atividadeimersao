const mongoose = require('mongoose');

const cursoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: String,
  duracao: { type: Number, required: true },
  preco: { type: Number, required: true },
});

module.exports = mongoose.model('Curso', cursoSchema);
