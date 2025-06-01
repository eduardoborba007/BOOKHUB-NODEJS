// routes/usuario.js
const express = require('express');
const router = express.Router();

router.get('/home', (req, res) => {
  if (!req.session.usuario) return res.redirect('/admin/login');
  res.render('usuario/home', { usuario: req.session.usuario });
});

module.exports = router;
