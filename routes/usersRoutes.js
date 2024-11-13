const express = require('express');
const router = express.Router();
const { registerUser, removeUser, getAllUsers, updateUserController} = require('../controllers/users.controllers');
const { findUserById } = require('../models/userModel');

// Nueva ruta para obtener todos los usuarios y mostrarlos en la vista `users.pug`
router.get('/admin/users', getAllUsers);

// Endpoint para registrar un nuevo usuario
router.post('/api/user', registerUser);

// Ruta para editar usuario
router.get('/admin/users/edit/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await findUserById(id); // Ahora `findUserById` debería estar definido
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.render('editUser', { user });
  } catch (error) {
    console.error('Error al obtener el usuario:', error);
    res.status(500).json({ error: 'Error al obtener el usuario para edición' });
  }
});


// Ruta para eliminar un usuario
router.delete('/users/:id', removeUser);

router.post('/admin/users/delete/:id', removeUser, (req, res) => {
  res.redirect('/admin/users');
});



router.put('/api/user/:id', updateUserController);

module.exports = router;

