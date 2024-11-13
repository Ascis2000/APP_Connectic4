const pool = require('../config/db');
const bcrypt = require('bcryptjs');
// const queries = require('./queries');
const queries = require('../queries/queries');

async function createUser(username, password, email, role = 'user') {
    const hashedPassword = await bcrypt.hash(password, 10);
    const values = [username, hashedPassword, email, role];
    
    const result = await pool.query(queries.createUser, values);
    return result.rows[0];
}

// userModel.js
const updateUser = async (id, username, email, password, role) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const values = [username, email, hashedPassword, role, id];
    const result = await pool.query(queries.updateUser, values);
    return result.rows[0];
};

async function findUserByUsername(username) {
    const values = [username];
    const result = await pool.query(queries.findUserByUsername, values);
    return result.rows[0];
}

// Función para eliminar un usuario
const deleteUser = async (id) => {
    try {
        await pool.query(queries.deleteUser, [id]);
    } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        throw error;
    }
};

// Obtener todos los usuarios
async function getAllUsersFromDB() {
    const result = await pool.query('SELECT * FROM users');
    return result.rows;
}

async function findUserById(id) {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0];
  }

module.exports = { createUser, findUserByUsername, deleteUser, getAllUsersFromDB, updateUser, findUserById };
