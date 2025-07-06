const express = require('express');
const router = express.Router();

// Página de login
router.get('/', (req, res) => {
  res.render('admin/index'); // views/admin/index.ejs
});

// Página de cadastro
router.get('/cadastro', (req, res) => {
  res.render('admin/cadastro'); // views/admin/cadastro.ejs
});

// Processar o cadastro
router.post('/cadastro', (req, res) => {
  const { nome, email, senha } = req.body;

  // Exemplo: salvar no banco de dados (substitua por código real depois)
  console.log('Dados recebidos:', nome, email, senha);

  // Redireciona para login após cadastro
  res.redirect('/');
});

module.exports = router;
