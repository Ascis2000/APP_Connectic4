const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Ruta para obtener todos los usuarios
router.get('/users', adminController.getAllUsers);

// Ruta para obtener eventos
router.get('/events', adminController.getEvents);

module.exports = router;
