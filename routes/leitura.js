const express = require('express');
const router = express.Router();

// Página pública de leitura online
router.get('/leituraonline', (req, res) => {
  res.render('leituraonline'); // mesmo em /admin/, mas rota é pública
});

module.exports = router;
