
/* const mongoose = require('mongoose');

const anunciosSchema = new mongoose.Schema({
  usuarioIns: { type: String, required: true, maxlength: 50 },
  lugar: { type: String, required: true, unique: true, maxlength: 255 },
  fecha: { type: String, required: true, maxlength: 200 },
  descripcion: { type: String, required: true, maxlength: 200 },
  precio: { type: String, required: true, maxlength: 50 },
  img: { type: String, required: false }  // Cambiado a String para almacenar la URL de la imagen
});

// Cambiamos el nombre del modelo a 'Anuncio' si es un modelo para anuncios
const Anuncio = mongoose.model('Anuncio', anunciosSchema);

module.exports = Anuncio; */