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

module.exports = { getAllUsers, getEvents };
