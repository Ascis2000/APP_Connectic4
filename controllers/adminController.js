
const scraper = require('../utils/scraper');
const adService = require('../services/ads.service');
const { getAllUsersFromDB, getEventsFromDB } = require('../models/adminModel');


async function getAllUsers(req, res) {
    try {
        const users = await getAllUsersFromDB();
        console.log("Usuarios obtenidos:", users); // Depuración para verificar los datos obtenidos
        res.render('users', { users });
    } catch (error) {
        console.error("Error en getAllUsers:", error); // Muestra el error en la consola
        res.status(500).send('Error al obtener usuarios');
    }
}


// Función para obtener los eventos
async function getEvents(req, res) {
    try {
        const events = await getEventsFromDB(); // Llama a la función que consulta la base de datos
        res.render('events', { events }); // Renderiza la vista con los datos de eventos
    } catch (error) {
        res.status(500).send('Error al obtener eventos');
    }
}

// Función para obtener los eventos
async function getEventsScrape(req, res) {
    try {
        // Realiza el scraping obteniendo todos los datos de la web meetup.com
        let dataScrap = await scraper.scrap();

        // filtramos los datos de scraping para eliminar duplicados en la BBDD
        const adUnicos = [];
        for (const event of dataScrap) {
            const urlWebBase = event.urlWeb?.split('?')[0].trim();
            
            // verificamos si la URL ya existe en la BBDD
            const existingEvent = await adService.getAdsByUrl(urlWebBase);
            if (!existingEvent) {
                adUnicos.push(event);
            } else {
                console.log(`Evento duplicado encontrado: ${urlWebBase}`);
            }
        }

        // Mensaje por defecto si no se inserta nada nuevo
        let message = 'Todos los datos de scraping ya existen en la base de datos.';

        // si hay eventos nuevos, se insertan en MongoDB y cambia el mensaje
        if (adUnicos.length > 0) {
            const result = await adService.crearDatosScraping(adUnicos);
            message = 'Datos de scraping insertados exitosamente';
        }

        // obtenemos todos los documentos de la coleccion
        const misAds = await adService.getAllAds();

        res.render('adminDashboard', { 
            message,
            ads: misAds
        });

    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

module.exports = { 
    getAllUsers, 
    getEvents, 
    getEventsScrape 
};
