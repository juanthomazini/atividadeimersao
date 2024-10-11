const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/cadastroDB', { useNewUrlParser: true, useUnifiedTopology: true });

const cursoRoutes = require('./routes/cursos');
const alunoRoutes = require('./routes/alunos');

app.use('/cursos', cursoRoutes);
app.use('/alunos', alunoRoutes);

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log('servidor rodando na porta 3000');
});
