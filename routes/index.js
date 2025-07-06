const express = require('express');
const router = express.Router();

// Página de login (index)
router.get('/', (req, res) => {
  res.render('index'); // views/index.ejs
});

// Página de cadastro
router.get('/cadastro', (req, res) => {
  res.render('cadastro'); // views/cadastro.ejs
});

// Processar o cadastro
router.post('/cadastro', (req, res) => {
  const { nome, email, senha } = req.body;

  // Aqui você poderia salvar no banco de dados futuramente
  console.log('Dados recebidos:', nome, email, senha);

  // Exibir confirmação simples por enquanto
  res.send(`<h2>Cadastro recebido com sucesso!</h2><p>${nome} - ${email}</p>`);
});

module.exports = router;
