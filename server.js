const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Configuração
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Rotas
const funcionarios = require('./routes/funcionarios');
const departamentos = require('./routes/departamentos');
const projetos = require('./routes/projetos');
const equipes = require('./routes/equipes');

app.use('/funcionarios', funcionarios);
app.use('/departamentos', departamentos);
app.use('/projetos', projetos);
app.use('/equipes', equipes);

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000.');
});
