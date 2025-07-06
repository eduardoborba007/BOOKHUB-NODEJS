const mysql = require('mysql2/promise');

async function conectarBD() {
  try {
    const conexao = await mysql.createConnection({
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: '',
      database: 'bd_bookhub'
    });
    console.log('✅ Conectado ao banco de dados!');
    return conexao;
  } catch (error) {
    console.error('❌ Erro ao conectar ao banco:', error.message);
    throw error;
  }
}

async function buscarAdmin({ email, senha }) {
  const conexao = await conectarBD();
  const sql = 'SELECT * FROM admin WHERE email = ? AND senha = ?';
  const [linhas] = await conexao.execute(sql, [email, senha]);
  return linhas.length > 0 ? linhas[0] : null;
}

async function buscarUsuario({ email, senha }) {
  const conexao = await conectarBD();
  const sql = 'SELECT * FROM usuarios WHERE usuemail = ? AND ususenha = ?';
  const [linhas] = await conexao.execute(sql, [email, senha]);
  return linhas.length > 0 ? linhas[0] : null;
}

async function cadastrarUsuario({ nome, email, senha }) {
  const conexao = await conectarBD();
  const sql = 'INSERT INTO usuarios (usunome, usuemail, ususenha) VALUES (?, ?, ?)';
  await conexao.execute(sql, [nome, email, senha]);
  console.log('✅ Novo usuário cadastrado!');
}

module.exports = {
  buscarAdmin,
  buscarUsuario,
  cadastrarUsuario
};
