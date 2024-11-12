const bcrypt = require('bcryptjs');
const queries = require('../queries/queries');
const pool = require('../config/db');

// Controlador para registrar un nuevo usuario
const registerUser = async (req, res) => {
    try {
        const { username, password, email, role = 'user' } = req.body;
        
        // Hashear la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);
        const values = [username, hashedPassword, email, role];
        
        // Crear el usuario en la base de datos
        const result = await pool.query(queries.createUser, values);
        res.status(201).json({ message: 'Usuario registrado exitosamente', user: result.rows[0] });
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        res.status(500).json({ message: 'Error al registrar el usuario', error });
    }
};


async function updateUser(id, username, email, password, role) {
    const hashedPassword = await bcrypt.hash(password, 10); // Encripta la nueva contraseña
    const values = [username, email, hashedPassword, role, id];

    // Ejecuta la consulta `updateUser` definida en `queries`
    const result = await pool.query(queries.updateUser, values);
    return result.rows[0];
}


module.exports = { registerUser, updateUser };
