const express = require('express');
const router = express.Router();
const connection = require('../db/connection');
const path = require('path');

// Página de inserção
router.get('/inserir', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/views/inserir_funcionario.html'));
});

// Inserir funcionário no banco
router.post('/inserir', (req, res) => {
  const { nome, cargo, salario } = req.body;
  const sql = 'INSERT INTO funcionarios (nome, cargo, salario) VALUES (?, ?, ?)';
  connection.query(sql, [nome, cargo, salario], (err, result) => {
    if (err) throw err;
    res.send('Funcionário inserido com sucesso!');
  });
});

module.exports = router;
