const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../models/Postagem');
const Postagem = mongoose.model('postagens');
const {eAdmin} = require('../helpers/eAdmin');

// Menu
router.get('/', (req, res) => {
  res.render('admin/home')
});

router.get('/class', (req, res) => {
  res.render('admin/class')
});

router.get('/contact', (req, res) => {
  res.render('admin/contact')
});

router.get('/events', (req, res) => {
  res.render('admin/events')
});

/* Página de Publicação da Postagem
   Parâmetro postagens são para exibir postagens.handlebars. */
router.get('/postagens', (req, res) => {
	Postagem.find().lean().then((postagens) => {
    res.render('admin/postagens', {postagens: postagens});
	});    
});

// Pagina de Criação de Postagem
router.get('/postagens/add', (req, res) => {
  res.render('admin/addpostagem')
});

// Página de Nova Postagem
router.post('/postagens/nova', (req, res) => {
  const novaPostagem = {
    nomePost: req.body.nomePost,
		conteudoPost: req.body.conteudoPost,
		dataPost: req.body.dataPost,
  }

  new Postagem(novaPostagem).save().then(() => {
    req.flash('success_msg', "Postagem criada com sucesso.")
    res.redirect('/admin/postagens')
  }).catch((err) => {
    req.flash('error_msg', "Houve um erro ao salvar a postagem.")
    res.redirect('/admin/postagens')
  });
});

module.exports = router;