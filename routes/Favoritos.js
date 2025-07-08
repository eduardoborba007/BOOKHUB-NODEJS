const express = require('express');
const router = express.Router();

// Dados dos livros favoritos (você pode futuramente buscar no banco)
const favoritos = [
  { titulo: "Relíquias da Morte", img: "/images/livro1.png" },
  { titulo: "O Alquimista", img: "/images/livro2.png" },
  { titulo: "Crianças Sábias", img: "/images/livro3.png" },
  { titulo: "O Inverso", img: "/images/livro4.png" },
  { titulo: "Sorte no Amor", img: "/images/livro5.png" },
  { titulo: "A Pedra Filosofal", img: "/images/pedra.png" },
  { titulo: "A Câmara Secreta", img: "/images/camara.png" },
  { titulo: "O Prisioneiro de AZKABAN", img: "/images/azkaban.png" },
  { titulo: "Cálice de Fogo", img: "/images/calice.png" },
  { titulo: "A Ordem da Fênix", img: "/images/fenix.png" }
];

// Rota GET /favoritos
router.get('/favoritos', (req, res) => {
  res.render('favoritos', { favoritos });
});

module.exports = router;
