// const favoritesQueries = require('../queries/favoriteQueries');

// exports.getAllFavorites = async () => {
//   //return favoritesQueries.getAllFavorites();
//   try {
//     const [rows] = await pool.query('SELECT * FROM users'); // Consulta para obtener todos los usuarios
//     return rows;
//   } catch (error) {
//     console.error("Error al obtener usuarios:", error);
//     throw error; // Lanza el error para que el controlador lo maneje
//   }
// };

// // exports.getFavoriteById = (id) => {
// //   return favoritesQueries.getFavoriteById(id);
// // };

// exports.createFavorite = async (favoriteData) => {
//   //return favoritesQueries.createFavorite(favoriteData);
//   try {
//     const [rows] = await pool.query('INSERT INTO favorites (user_id) VALUES ($1) RETURNING *'); // Consulta para obtener todos los usuarios
//     return rows;
//   } catch (error) {
//     console.error("Error al crear favorito:", error);
//     throw error; // Lanza el error para que el controlador lo maneje
//   }
// };

// exports.deleteFavorite = async (id) => {
//   //return favoritesQueries.deleteFavorite(id);
//   try {
//     const [rows] = await pool.query('DELETE FROM favorites WHERE id_favorite = $1'); // Consulta para obtener todos los usuarios
//     return rows;
//   } catch (error) {
//     console.error("Error al borrar favorito:", error);
//     throw error; // Lanza el error para que el controlador lo maneje
//   }
// };

// models/favoritesModel.js
const favoritesQueries = require('../queries/favoriteQueries');
const pool = require('../config/db'); // Asegúrate de que esta ruta sea correcta

exports.getAllFavorites = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM favorites');
    return rows;
  } catch (error) {
    console.error("Error al obtener favoritos en el modelo:", error);
    throw error; // Lanza el error para que el controlador lo maneje
  }
  //return await favoritesQueries.getAllFavorites();
};

exports.createFavorite = async (userId) => {
  return await favoritesQueries.createFavorite(userId);
};

exports.deleteFavorite = async (id) => {
  return await favoritesQueries.deleteFavorite(id);
};

