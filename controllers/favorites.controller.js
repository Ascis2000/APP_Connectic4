const favoritesModel = require('../models/favorites.model');

exports.getAllFavorites = async (req, res) => {
  try {
    const favorites = await favoritesModel.getAllFavorites();
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener favoritos' });
  }
};

exports.getFavoriteById = async (req, res) => {
  try {
    const favorite = await favoritesModel.getFavoriteById(req.params.id);
    res.json(favorite);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el favorito' });
  }
};

exports.createFavorite = async (req, res) => {
  try {
    const newFavorite = await favoritesModel.createFavorite(req.body);
    res.status(201).json(newFavorite);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el favorito' });
  }
};

exports.updateFavorite = async (req, res) => {
  try {
    const updatedFavorite = await favoritesModel.updateFavorite(req.params.id, req.body);
    res.json(updatedFavorite);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el favorito' });
  }
};

exports.deleteFavorite = async (req, res) => {
  try {
    await favoritesModel.deleteFavorite(req.params.id);
    res.json({ message: 'Favorito eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el favorito' });
  }
};
