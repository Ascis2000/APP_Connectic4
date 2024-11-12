const express = require('express');
const router = express.Router();
const favoritesController = require('../controllers/favorites.controller');

router.get('/', favoritesController.getAllFavorites);
router.get('/:id', favoritesController.getFavoriteById);
router.post('/', favoritesController.createFavorite);
router.put('/:id', favoritesController.updateFavorite);
router.delete('/:id', favoritesController.deleteFavorite);

module.exports = router;
