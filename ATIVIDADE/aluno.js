const mongoose = require('mongoose');

const alunoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  idade: { type: Number, required: true },
  email: { type: String, required: true },
  cursosInscritos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Curso' }]
});

module.exports = mongoose.model('Aluno', alunoSchema);
