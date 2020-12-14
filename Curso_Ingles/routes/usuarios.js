const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require("../models/Usuario");
const Usuario = mongoose.model('usuarios');
const bcrypt = require('bcryptjs');
const passport = require('passport');

// Pagina de Registro de Usuários
router.get('/registro', (req, res) => {
  res.render("usuarios/registro")
});

router.post('/registro', (req, res) => {
  Usuario.findOne({email: req.body.email}).then((usuario) => {
    if (usuario) {
      req.flash('error_msg', "Já existe uma conta com este e-mail no nosso sistema.")
      res.redirect("/usuarios/registro")
    } else {
      const novoUsuario = new Usuario ({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(novoUsuario.senha, salt, (erro, hash) => {
          if (erro) {
            req.flash('error_msg', "Houve um erro ao salvar o usuário!")
            res.redirect('/admin/')
          }
          novoUsuario.senha = hash
          novoUsuario.save().then(() => {
            req.flash('success_msg', "Usuário criado com sucesso!")
            res.redirect('/usuarios/login')
          }).catch((err) => {
            req.flash('error_msg', "Houve um erro ao criar o usuário, tente novamente!")
            res.redirect('/usuarios/registro')
          });
        });
      });
    }
  }).catch((err) => {
    req.flash('error_msg', "Houve um erro interno!")
    res.redirect('/admin/')
  });
});

// Autenticação de Usuário
router.get('/login', (req, res) => {
  res.render("usuarios/login")
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/admin/',
    failureRedirect: '/usuarios/login',
    failureFlash: true
  }) (req, res, next)
});

router.get('/logout', (req, res) => {
  req.logout()
  req.flash('success_msg', "Deslogado com sucesso, Esperamos sua próxima visita!")
  res.redirect('/admin/')
});

module.exports = router