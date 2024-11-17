const express = require('express');
const router = express.Router();
const connection = require('../db/connection');
const path = require('path');

// Página de inserção
router.get('/inserir', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/views/inserir_projeto.html'));
});

// Inserir funcionário no banco
router.post('/inserir', (req, res) => {
  const { nome, descricao } = req.body;
  const sql = 'INSERT INTO projetos (nome, descricao) VALUES (?, ?)';
  connection.query(sql, [nome, descricao], (err, result) => {
    if (err) throw err;
    res.send('Projeto inserido com sucesso!');
  });
});

module.exports = router;
