
const scraper = require('../utils/scraper');
const adService = require('../services/ads.service');

// READ
const getOneAd = async (req, res) => {
    try {
        const product = await adService.getOneAd(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ mensaje: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// READ
const getAllAds = async (req, res) => {
    try {

        const misAds = await adService.getAllAds();

        res.render('index', { 
            ads: misAds
        });

    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// POST: CREATE
const createOneAd = async (req, res) => {
    try {
        const nuevoAd = await adService.createOneAd(req.body);
        res.status(201).json(nuevoAd);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

const getAdsSearch = async (req, res) => {
    try {

        const query = req.query.q; // Obtenemos el término de búsqueda del usuario
        
        // obtenemos todos los documentos de Mongo
        const ads = await adService.getAllAds();

        const tituloBusqueda = query.toLowerCase();
        const resultados = ads.filter(item =>
            item.title.toLowerCase().includes(tituloBusqueda)
        );

        res.render('index', { ads: resultados, query });

    } catch (error) {
        console.error('Error al insertar datos de scraping:', error);
        res.status(500).json({
            message: 'Error al insertar datos de scraping',
            error: error.message
        });
    }
}

// UPATE
const updateAd = async (req, res) => {
    try {
        if(req.params.id){
            const updateAd = await adService.updateAd(req.params.id, req.body);
            res.status(200).json({mensaje: "Ad editado!", updateAd});
        }
        else{
            return res.status(400).json({ mensaje: "ID del anuncio requerido" });
        }
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

// DELETE
const deleteAd = async (req, res) => {
    try {
        const deleteAd = await adService.deleteAd(req.params.id);

        if (deleteAd) {

            const misAds = await adService.getAllAds();
            const message = `producto eliminado: ${deleteAd.title}`

            res.render('adminDashboard', { 
                message,
                ads: misAds
            });
        }
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
}

module.exports = {
    getOneAd,
    getAllAds,
    createOneAd,
    getAdsSearch,
    updateAd,
    deleteAd
}