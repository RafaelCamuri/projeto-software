const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('../db/connection');

// Rota para exibir o formulário de inserção de equipe
router.get('/inserir', (req, res) => {
  // Corrija o caminho do arquivo HTML
  res.sendFile(path.join(__dirname, '..', 'public', 'views', 'inserir_equipe.html'));
});

// Rota POST para inserir a equipe
router.post('/inserir', async (req, res) => {
  const { nome } = req.body;

  if (!nome) {
    return res.status(400).send('Nome da equipe é obrigatório.');
  }

  try {
    await db.promise().query('INSERT INTO equipes (nome) VALUES (?)', [nome]);
    res.send('Equipe inserida com sucesso!');
  } catch (error) {
    console.error('Erro ao inserir equipe:', error);
    res.status(500).send('Erro ao inserir equipe.');
  }
});

module.exports = router;
