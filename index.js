// CONNECTIC4
const express = require('express');

const cookieParser = require('cookie-parser');
const path = require('path');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/users.routes');
const adminRoutes = require('./routes/adminRoutes');
const app = express();
const port = 3000;

// Configura los archivos estáticos (CSS y JavaScript del frontend)
app.use(express.static(path.join(__dirname, 'public')));


// Middleware para manejar rutas no encontradas (404)
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Configurar Pug como motor de plantillas

app.set('view engine', 'pug');
app.set('views', './views'); // Asegúrate de que el directorio `views` exista y tenga el archivo `results.pug`

app.use(express.json());




// Logger
/* app.use(morgan(':method :url :status :param[id] - :response-time ms :body')); */


// Rutas
app.use(userRoutes);
app.use(authRoutes);

app.use('/admin', adminRoutes);


// Rutas API para ads
const adsRoutes = require("./routes/ads.routes");

// Usa adRoutes para la ruta raíz
app.use('/', adsRoutes);




const manage404 = require('./middlewares/manage404');

// Para todo el resto de rutas no contempladas

app.use('*', manage404);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
