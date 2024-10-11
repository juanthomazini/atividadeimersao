const express = require('express');
const router = express.Router();
const Curso = require('../models/curso');

router.post('/novo', (req, res) => {
  const { nome, descricao, duracao, preco } = req.body;
  const novoCurso = new Curso({ nome, descricao, duracao, preco });
  novoCurso.save(err => {
    if (err) return res.status(500).send(err);
    res.redirect('/cursos');
  });
});

router.get('/', (req, res) => {
  Curso.find({}, (err, cursos) => {
    if (err) return res.status(500).send(err);
    res.render('cursos', { cursos });
  });
});

router.post('/:id/delete', (req, res) => {
  Curso.findByIdAndRemove(req.params.id, err => {
    if (err) return res.status(500).send(err);
    res.redirect('/cursos');
  });
});

module.exports = router;
