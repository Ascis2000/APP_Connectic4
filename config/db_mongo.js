
const mongoose = require("mongoose");

//mongoose.connect('mongodb://localhost/c4-web')
//mongoose.connect('mongodb+srv://Juanjo:MUeEQMxs8zzM6feA@connectic4.88isr.mongodb.net/')
mongoose.connect(process.env.DB_MONGO)

const db = mongoose.connection;

// Eventos
db.on("error", error => console.log(error));
db.once("open", () => console.log("Conexión a MongoDB establecida"));

module.exports = mongoose;