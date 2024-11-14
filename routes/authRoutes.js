const express = require('express');
const router = express.Router();
const { register, login, mostrarAdmin, mostrarUser, logout } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');
const authorizeRole = require('../middlewares/roleMiddleware');

router.get('/register', (req, res) => res.render('register'));
router.post('/register', register);

router.get('/login', (req, res) => res.render('login'));
router.post('/login', login);

router.get('/logout', logout);

router.get('/user/dashboard', authMiddleware, authorizeRole('user'), mostrarUser);


router.get('/admin/dashboard', authMiddleware, authorizeRole('admin'), mostrarAdmin);

module.exports = router;
