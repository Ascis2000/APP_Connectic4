const express = require('express');
const router = express.Router();
const favoritesController = require('../controllers/favoritesController');

router.get('/api/favorites/', favoritesController.getAllFavorites);
router.post('/api/favorites/', favoritesController.createFavorite);
router.delete('/api/favorites/:id', favoritesController.deleteFavorite);

module.exports = router;

// router.put('/api/user/:id', async (req, res) => {
//     const { id } = req.params;
//     const { username, email, password, role } = req.body;
//     try {
//       const updatedUser = await updateUser(id, username, email, password, role);
//       res.status(200).json(updatedUser);
//     } catch (error) {
//       console.error('Error al actualizar usuario:', error);
//       res.status(500).json({ error: 'Error al actualizar usuario' });
//     }
//   });