
const mongoose = require('mongoose');
require("../config/db_mongo"); // Conexión a BBDD MongoDB

const objectSchema = {
    title: String,
    subtitle: String,
	description: String,
    urlWeb: String,
	imgSrc: String
}

// Crear el esquema, definir la estructura que va a tener el documento
const publisherSchema = mongoose.Schema(objectSchema);

// Crear el modelo
const Ads = mongoose.model('Ads', publisherSchema);

module.exports = Ads;
