const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definindo postagens
const Postagem = new Schema({
   nomePost: {
      type: String,
      required: true
   },
   conteudoPost: {
      type: String,
      required: true
   },
   dataPost: {
      type: Date,
      default: Date.now()
   }
});

mongoose.model('postagens', Postagem);