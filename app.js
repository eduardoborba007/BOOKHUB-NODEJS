const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const createError = require('http-errors');

const indexRouter = require('./routes/index');
const adminRouter = require('./routes/admin');
const leituraRouter = require('./routes/leitura'); // ✅ Rota pública leituraonline

const app = express();

// Configurações da view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares globais
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Sessão
app.use(session({
  secret: 'chave-secreta',
  resave: false,
  saveUninitialized: false
}));

// Rotas
app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/', leituraRouter); // ✅ Leitura pública, sem /admin

// Página protegida (exemplo)
app.get('/home', (req, res) => {
  res.render('home');
});

// Erros
app.use((req, res, next) => next(createError(404)));
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500).render('error');
});

module.exports = app;
