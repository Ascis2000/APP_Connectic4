// admin.models.js

const { Client } = require('pg');
const queries = require('/queries');
const dotenv = require('dotenv');

dotenv.config(); // Cargar variables de entorno desde el archivo .env

/* // Configuración del cliente de PostgreSQL usando variables individuales
const client = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
});

client.connect(); */

// Función para obtener todos los usuarios
const getAllUsers = async () => {
    try {
      const result = await client.query(queries.getAllUsers);
      console.log('Resultado de la consulta:', result.rows); // Verifica el resultado de la consulta
      return result.rows;
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
      return []; // Retorna un array vacío en caso de error para evitar `undefined`
    }
  };

// Función para actualizar un usuario
const updateUser = async (id, username, password, email, role) => {
  try {
    await client.query(queries.updateUser, [username, password, email, role, id]);
  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
    throw error;
  }
};

// Función para eliminar un usuario
const deleteUser = async (id) => {
  try {
    await client.query(queries.deleteUser, [id]);
  } catch (error) {
    console.error('Error al eliminar el usuario:', error);
    throw error;
  }
};

module.exports = {
  getAllUsers,
  updateUser,
  deleteUser,
};
