// Carregando Módulos
const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const admin = require('./routes/admin');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');
require('./models/Postagem');
const Postagem = mongoose.model('postagens');
const usuarios = require('./routes/usuarios');
const passport = require('passport');
require('./config/auth')(passport)

// Configurações

// Sessão
  app.use(session({
  secret: "1234",
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Middleware
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

// Body Parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Handlebars
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');

// Mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/inglesapp").then(() => {
   console.log('Conectado ao MongoDB.')
}).catch((err) => {
   console.log('Erro ao se conectar: ', err)
})

// Estáticos
app.use(express.static(path.join(__dirname, 'public')));
/*app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/images', express.static('img'));*/

// Rotas
app.use('/admin', admin);
app.use('/usuarios', usuarios);

// Outras
const PORT = 8081;
app.listen(PORT, () => {
   console.log("Servidor rodando! ")
});