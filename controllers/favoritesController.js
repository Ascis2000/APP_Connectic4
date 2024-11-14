// const favoritesModel = require('../models/favoritesModel');

// exports.getAllFavorites = async (req, res) => {
//   try {
//     const favorites = await favoritesModel.getAllFavorites();
//     res.json({ favorites });
//   } catch (error) {
//     res.status(500).json({ error: 'Error al obtener favoritos.' });
//   }
// };

// exports.createFavorite = async (req, res) => {
//   try {
//     const newFavorite = await favoritesModel.createFavorite(req.body.userId);
//     res.status(201).json(newFavorite);
//   } catch (error) {
//     res.status(500).json({ error: 'Error al crear el favorito' });
//   }
// };

// exports.deleteFavorite = async (req, res) => {
//   try {
//     await favoritesModel.deleteFavorite(req.params.id);
//     res.json({ message: 'Favorito eliminado' });
//   } catch (error) {
//     res.status(500).json({ error: 'Error al eliminar el favorito' });
//   }
// };
