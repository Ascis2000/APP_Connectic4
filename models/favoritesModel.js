

// // models/favoritesModel.js
// const favoritesQueries = require('../queries/favoriteQueries');
// const pool = require('../config/db'); // Asegúrate de que esta ruta sea correcta

// exports.getAllFavorites = async () => {
//   try {
//     const [rows] = await pool.query('SELECT * FROM favorites');
//     return rows;
//   } catch (error) {
//     console.error("Error al obtener favoritos en el modelo:", error);
//     throw error; // Lanza el error para que el controlador lo maneje
//   }
//   //return await favoritesQueries.getAllFavorites();
// };

// exports.createFavorite = async (userId) => {
//   return await favoritesQueries.createFavorite(userId);
// };

// exports.deleteFavorite = async (id) => {
//   return await favoritesQueries.deleteFavorite(id);
// };

