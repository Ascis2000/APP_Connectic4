const pool = require('../config/db');

async function getAllUsersFromDB() {
    try {
        const [rows] = await pool.query('SELECT * FROM users'); // Consulta para obtener todos los usuarios
        return rows;
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        throw error; // Lanza el error para que el controlador lo maneje
    }
}

module.exports = { getAllUsersFromDB };


// // Función para obtener todos los eventos de la base de datos
// async function getEventsFromDB() {
//     const [events] = await pool.query('SELECT * FROM events'); // Consulta para obtener todos los eventos
//     return events;
// }

// module.exports = { getAllUsersFromDB, getEventsFromDB };
