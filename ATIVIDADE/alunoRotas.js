const express = require('express');
const router = express.Router();
const Aluno = require('../models/aluno');
const Curso = require('../models/curso');

router.post('/novo', (req, res) => {
  const { nome, idade, email, cursosInscritos } = req.body;
  const novoAluno = new Aluno({ nome, idade, email, cursosInscritos });
  novoAluno.save(err => {
    if (err) return res.status(500).send(err);
    res.redirect('/alunos');
  });
});

router.get('/', (req, res) => {
  Aluno.find({}).populate('cursosInscritos').exec((err, alunos) => {
    if (err) return res.status(500).send(err);
    res.render('alunos', { alunos });
  });
});

router.post('/:id/delete', (req, res) => {
  Aluno.findByIdAndRemove(req.params.id, err => {
    if (err) return res.status(500).send(err);
    res.redirect('/alunos');
  });
});

module.exports = router;
