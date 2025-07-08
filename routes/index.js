const express = require('express');
const router = express.Router();
const { buscarUsuario, buscarAdmin, cadastrarUsuario } = require('../banco');

// Página de login
router.get('/', (req, res) => {
  res.render('index');
});

// Página de cadastro
router.get('/cadastro', (req, res) => {
  res.render('cadastro');
});

// Cadastro de usuário
router.post('/cadastro', async (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    await cadastrarUsuario({ nome, email, senha });
    res.redirect('/');
  } catch (error) {
    res.send('Erro ao cadastrar: ' + error.message);
  }
});

// LOGIN (admin ou usuário)
router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const admin = await buscarAdmin({ email, senha });
    const usuario = await buscarUsuario({ email, senha });

    if (admin || usuario) {
      req.session.usuario = admin || usuario;
      res.redirect('/home');
    } else {
      res.send('❌ Email ou senha inválidos.');
    }
  } catch (error) {
    res.status(500).send('Erro ao fazer login: ' + error.message);
  }
});

module.exports = router;
