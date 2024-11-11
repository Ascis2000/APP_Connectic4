// CONNECTIC4
const express = require('express');
require('dotenv').config();
/* require('./config/db_pgsql');
require('./config/db_mongo'); */

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views'); // Asegúrate de que el directorio `views` exista y tenga el archivo `results.pug`

app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

// importar middlewares
/* const morgan = require('./middlewares/morgan'); */
const manage404 = require('./middlewares/manage404');

//get all list, aquí iria todos los datos de mongoDB para tener los eventos. 
const arr_datosScraping = [
    { title: "Aprende JavaScript", subtitle: "Guía completa para principiantes", description: "Un curso interactivo que cubre desde los conceptos básicos hasta técnicas avanzadas en JavaScript.", urlWeb: "https://example.com/aprende-javascript", imgSrc: "https://example.com/images/javascript.jpg" },
    { title: "Desarrollo Web Moderno", subtitle: "HTML, CSS y JavaScript", description: "Domina las tecnologías esenciales para crear sitios web modernos y responsivos.", urlWeb: "https://example.com/desarrollo-web-moderno", imgSrc: "https://example.com/images/web-development.jpg" },
    { title: "React para Todos", subtitle: "Desde los fundamentos hasta componentes avanzados", description: "Un curso en profundidad sobre React, ideal para desarrollar aplicaciones interactivas.", urlWeb: "https://example.com/react-para-todos", imgSrc: "https://example.com/images/react.jpg" },
    { title: "Introducción a Node.js", subtitle: "Construcción de aplicaciones backend", description: "Aprende a usar Node.js para construir servidores y trabajar con bases de datos.", urlWeb: "https://example.com/introduccion-nodejs", imgSrc: "https://example.com/images/nodejs.jpg" },
    { title: "Master en Frontend", subtitle: "HTML, CSS, JS y frameworks modernos", description: "Un curso integral que cubre todas las tecnologías necesarias para el desarrollo frontend.", urlWeb: "https://example.com/master-frontend", imgSrc: "https://example.com/images/frontend.jpg" }
];

app.get('/search', async (req, res) => {
    const query = req.query.q; // Obtenemos el término de búsqueda del usuario
    // Aquí puedes hacer el scraping o buscar en una base de datos
    const results = arr_datosScraping
    // const results = await performScrapingOrDbSearch(query); // función de búsqueda
    res.render('layout', { results, query });
});

app.get('/results', async (req, res) => {
    const query = req.query.q; // Obtenemos el término de búsqueda del usuario
    // Aquí puedes hacer el scraping o buscar en una base de datos
    // const results = arr_datosScraping
    const tituloBusqueda = query.toLowerCase();
    const results = arr_datosScraping.filter(item =>
        item.title.toLowerCase().includes(tituloBusqueda)
            );
    // const results = await performScrapingOrDbSearch(query); // función de búsqueda
    res.render('results', { results, query });
});

// Logger
/* app.use(morgan(':method :url :status :param[id] - :response-time ms :body')); */

app.get('/', (req, res) => {
    res.send('Hello CONNECTIC4!');
});

// Rutas WEB
/* const paginaRoutes = require("./routes/pagina.web.routes");
app.use('/', paginaRoutes);  */

// Para todo el resto de rutas no contempladas
app.use('*', manage404);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
