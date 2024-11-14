
const mongoose = require("mongoose");

//mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_MONGO);

const db = mongoose.connection;

// Eventos
db.on("error", error => console.log(error));
db.once("open", () => console.log("Conexión a MongoDB establecida"));

module.exports = mongoose;