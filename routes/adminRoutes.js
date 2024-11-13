const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Ruta para obtener todos los usuarios
router.get('/users', adminController.getAllUsers);

// Ruta para obtener eventos
router.get('/events', adminController.getEvents);

// Ruta para obtener eventos
router.get('/scrape', adminController.getEventsScrape);

module.exports = router;
