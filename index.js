// CONNECTIC4
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');

dotenv.config();
const app = express();

// Middleware para manejar rutas no encontradas (404)
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Configurar Pug como motor de plantillas
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views')); // Define la carpeta de vistas

// Configura los archivos estáticos (CSS y JavaScript del frontend)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para manejar JSON
app.use(express.json());

// Rutas
app.use(authRoutes);
app.get('/', (req, res) => {
    res.render('index'); // Renderiza la plantilla `index.pug`
});


const manage404 = require('./middlewares/manage404');
app.use('*', manage404);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});