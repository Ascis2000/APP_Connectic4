// const db = require('../db'); // Configuración de la conexión a la base de datos

// exports.getAllFavorites = async () => {
//   const result = await db.query('SELECT * FROM favorites');
//   return result.rows;
// };

// // exports.getFavoriteById = async (id) => {
// //   const result = await db.query('SELECT * FROM favorites WHERE id_favorite = $1', [id]);
// //   return result.rows[0];
// // };

// exports.createFavorite = async (favoriteData) => {
//   const { user_id } = favoriteData;
//   const result = await db.query(
//     'INSERT INTO favorites (user_id) VALUES ($1) RETURNING *',
//     [user_id]
//   );
//   return result.rows[0];
// };

// exports.updateFavorite = async (id, favoriteData) => {
//   const { user_id } = favoriteData;
//   const result = await db.query(
//     'UPDATE favorites SET user_id = $1 WHERE id_favorite = $2 RETURNING *',
//     [user_id, id]
//   );
//   return result.rows[0];
// };

// exports.deleteFavorite = async (id) => {
//   await db.query('DELETE FROM favorites WHERE id_favorite = $1', [id]);
// };

// queries/favoriteQueries.js
const { mysqlPool } = require("../config/db"); // Asegúrate de que la ruta sea correcta

// Función para obtener todos los favoritos
const getAllFavorites = async () => {
  const [rows] = await mysqlPool.query('SELECT * FROM favorites');
  return rows;
};

// Función para crear un favorito
const createFavorite = async (userId) => {
  const [result] = await mysqlPool.query('INSERT INTO favorites (user_id) VALUES (?)', [userId]);
  return result;
};

// Función para eliminar un favorito
const deleteFavorite = async (id) => {
  await mysqlPool.query('DELETE FROM favorites WHERE id_favorite = ?', [id]);
};

module.exports = { getAllFavorites, createFavorite, deleteFavorite };
