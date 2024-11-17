const express = require('express');
const router = express.Router();
const connection = require('../db/connection');
const path = require('path');

// Página de inserção de departamento
router.get('/inserir', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/views/inserir_departamento.html'));
});

// Inserir departamento no banco de dados
router.post('/inserir', (req, res) => {
  const { nome } = req.body;
  const sql = 'INSERT INTO departamentos (nome) VALUES (?)';
  connection.query(sql, [nome], (err, result) => {
    if (err) throw err;
    res.send('Departamento inserido com sucesso!');
  });
});

module.exports = router;
