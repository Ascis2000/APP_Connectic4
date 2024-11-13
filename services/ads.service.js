
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

const Ads = require('../models/ads.model');

// obtenemos un solo anuncio
const getOneAd = async (id) => {

	return await Ads.findById(id, '-_id -__v');
};

// obtenemos todos los anuncios
const getAllAds = async () => {

	//devuelve los resultados por titulo
	return await Ads.find({}, '-__v').sort({ title: 1 });
};

// creamos un solo anuncio
async function createOneAd(datosAd) {

	const ad = new Ads(datosAd);
	return await ad.save();
}

// insertamos todos los anuncios 'scraping' en la BBDD
const crearDatosScraping = async (adsArray) => {

	// Verifica si productosArray es un array
	if (!Array.isArray(adsArray)) {
		throw new Error('Los datos de scraping no son un array válido');
	}

	// Inserta los productos en la base de datos
	try {
		const resultados = await Ads.insertMany(adsArray);
		return resultados;

	} catch (error) {
		console.error('Error al insertar productos:', error);
		throw error;
	}
};

/*
{
"title": "titulo prueba 1",
"subtitle": "subtitulo prueba 1",
  "description": "descripcion 1",
  "urlWeb": "http://...", -> una que exista
  "imgSrc": "http://..."
}
*/
const updateAd = async (id, datosAd) => {
	return await Ads.findByIdAndUpdate(id, datosAd, { new: true });
};

const deleteAd = async (id) => {
	return await Ads.findByIdAndDelete(id);
};

// obtenemos un anuncio por su URL
const getAdsByUrl = async (urlWebBase) => {
	const urlBaseFormatted = urlWebBase.trim();
	return await Ads.findOne({
		urlWeb: { $regex: `^${urlBaseFormatted}` }
	})
};

// función de búsqueda por título
const buscarPorTitulo = async (titulo) => {
	try {
		const resultados = await Ads.find({
			title: { $regex: titulo, $options: 'i' }
		});
		return resultados;
	} catch (error) {
		console.error("Error al buscar documentos:", error);
		throw error;
	}
}

module.exports = {
	getOneAd,
	getAllAds,
	createOneAd,
	updateAd,
	deleteAd,

	getAdsByUrl,
	buscarPorTitulo,
	crearDatosScraping,
};