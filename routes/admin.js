const express = require('express');
const router = express.Router();
const { buscarAdmin } = require('../banco'); // Agora usa a função do banco.js

router.use(express.urlencoded({ extended: true }));

router.get('/login', (req, res) => {
  res.render('admin/login', { erro: null });
});

router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const admin = await buscarAdmin({ email, senha });
    if (admin) {
      req.session.admin = admin;
      return res.redirect('/admin/dashboard');
    } else {
      return res.render('admin/login', { erro: 'Email ou senha incorretos.' });
    }
  } catch (err) {
    console.error(err);
    return res.render('admin/login', { erro: 'Erro no servidor.' });
  }
});

router.get('/dashboard', (req, res) => {
  if (!req.session.admin) {
    return res.redirect('/admin/login');
  }
  res.render('admin/dashboard', { admin: req.session.admin });
});

module.exports = router;
