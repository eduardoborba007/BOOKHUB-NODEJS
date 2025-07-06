var express = require('express');
var router = express.Router();

/* Redireciona / para /cadastro */
router.get('/', function(req, res) {
  res.redirect('/cadastro');
});

/* Rota GET para exibir o formulário de cadastro */
router.get('/cadastro', function(req, res) {
  res.render('cadastro'); // Vai buscar o arquivo views/cadastro.ejs
});

/* Rota POST para processar o formulário */
router.post('/cadastro', function(req, res) {
  const { nome, email, senha } = req.body;

  // Aqui você pode salvar no banco futuramente
  console.log('Recebido:', nome, email, senha);

  // Por enquanto, só retorna uma confirmação simples
  res.send(`<h2>Cadastro recebido com sucesso!</h2><p>${nome} - ${email}</p>`);
});

module.exports = router;
