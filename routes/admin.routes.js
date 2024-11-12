// admin.routes.js
const express = require('express');
const router = express.Router();
const { renderAdminDashboard, editUser, removeUser } = require('../controllers/admin.controllers.js');

// Ruta para renderizar el dashboard de administración
router.get('/dashboard', renderAdminDashboard);

// Ruta para actualizar un usuario
router.put('/users/:id', editUser);

// Ruta para eliminar un usuario
router.delete('/users/:id', removeUser);

module.exports = router;
