const favoritesQueries = require('../queries/favoriteQueries');

exports.getAllFavorites = async () => {
  //return favoritesQueries.getAllFavorites();
  try {
    const [rows] = await pool.query('SELECT * FROM users'); // Consulta para obtener todos los usuarios
    return rows;
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    throw error; // Lanza el error para que el controlador lo maneje
  }
};

// exports.getFavoriteById = (id) => {
//   return favoritesQueries.getFavoriteById(id);
// };

exports.createFavorite = async (favoriteData) => {
  //return favoritesQueries.createFavorite(favoriteData);
  try {
    const [rows] = await pool.query('INSERT INTO favorites (user_id) VALUES ($1) RETURNING *'); // Consulta para obtener todos los usuarios
    return rows;
  } catch (error) {
    console.error("Error al crear favorito:", error);
    throw error; // Lanza el error para que el controlador lo maneje
  }
};

exports.updateFavorite = async (id, favoriteData) => {
  //return favoritesQueries.updateFavorite(id, favoriteData);
  try {
    const [rows] = await pool.query('UPDATE favorites SET user_id = $1 WHERE id_favorite = $2 RETURNING *'); // Consulta para obtener todos los usuarios
    return rows;
  } catch (error) {
    console.error("Error al actualizar favorito:", error);
    throw error; // Lanza el error para que el controlador lo maneje
  }
};

exports.deleteFavorite = async (id) => {
  //return favoritesQueries.deleteFavorite(id);
  try {
    const [rows] = await pool.query('DELETE FROM favorites WHERE id_favorite = $1'); // Consulta para obtener todos los usuarios
    return rows;
  } catch (error) {
    console.error("Error al borrar favorito:", error);
    throw error; // Lanza el error para que el controlador lo maneje
  }
};
