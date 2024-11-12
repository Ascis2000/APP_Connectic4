const db = require('../db'); // Configuración de la conexión a la base de datos

exports.getAllFavorites = async () => {
  const result = await db.query('SELECT * FROM favorites');
  return result.rows;
};

exports.getFavoriteById = async (id) => {
  const result = await db.query('SELECT * FROM favorites WHERE id_favorite = $1', [id]);
  return result.rows[0];
};

exports.createFavorite = async (favoriteData) => {
  const { user_id } = favoriteData;
  const result = await db.query(
    'INSERT INTO favorites (user_id) VALUES ($1) RETURNING *',
    [user_id]
  );
  return result.rows[0];
};

exports.updateFavorite = async (id, favoriteData) => {
  const { user_id } = favoriteData;
  const result = await db.query(
    'UPDATE favorites SET user_id = $1 WHERE id_favorite = $2 RETURNING *',
    [user_id, id]
  );
  return result.rows[0];
};

exports.deleteFavorite = async (id) => {
  await db.query('DELETE FROM favorites WHERE id_favorite = $1', [id]);
};
