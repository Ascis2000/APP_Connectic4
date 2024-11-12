const express = require('express');
const router = express.Router();
const { registerUser, updateUser, removeUser} = require('../controllers/users.controllers');

// Endpoint para registrar un nuevo usuario
router.post('/api/user', registerUser);

// Endpoint para actualizar el perfil del usuario
// Define la ruta PUT para actualizar un usuario
router.put('/api/user/:id', async (req, res) => {
  const { id } = req.params;
  const { username, email, password, role } = req.body;

  try {
    const updatedUser = await updateUser(id, username, email, password, role);
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    res.status(500).json({ error: 'Error al actualizar usuario' });
  }
});

// Ruta para eliminar un usuario
router.delete('/users/:id', removeUser);

module.exports = router;

