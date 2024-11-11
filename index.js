
// CONNECTIC4
const express = require('express');
require('dotenv').config();
/* require('./config/db_pgsql');
require('./config/db_mongo'); */

const app = express();
const port = 3000; 


app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

// importar middlewares
/* const morgan = require('./middlewares/morgan'); */
const manage404 = require('./middlewares/manage404');

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
