const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Usuario = new Schema({
   nome: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
   },
   eadmin: {
      type: Number,
      default: 0
   },
   senha: {
      type: String,
      required: true,
      select: false
   }
});

mongoose.model("usuarios", Usuario);