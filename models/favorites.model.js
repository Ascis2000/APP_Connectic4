const favoritesQueries = require('../queries/favorites.queries');

exports.getAllFavorites = () => {
  return favoritesQueries.getAllFavorites();
};

exports.getFavoriteById = (id) => {
  return favoritesQueries.getFavoriteById(id);
};

exports.createFavorite = (favoriteData) => {
  return favoritesQueries.createFavorite(favoriteData);
};

exports.updateFavorite = (id, favoriteData) => {
  return favoritesQueries.updateFavorite(id, favoriteData);
};

exports.deleteFavorite = (id) => {
  return favoritesQueries.deleteFavorite(id);
};
