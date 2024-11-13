const bcrypt = require('bcryptjs');
const queries = require('../queries/queries');
const pool = require('../config/db');
const { getAllUsersFromDB, deleteUser, updateUser, findUserById } = require('../models/userModel');

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


const updateUserController = async (req, res) => {
    const { id } = req.params;
    let { username, email, password, role } = req.body;

    try {
        // Obtén el usuario antes de la actualización para pasar sus datos a la vista
        const user = await findUserById(id);

        if (!password) {
            password = user.password; // Usar la contraseña actual
        } else {
            password = await bcrypt.hash(password, 10);
        }

        // Actualizar el usuario
        await updateUser(id, username, email, password, role);

        // Renderizar la vista con el mensaje y el objeto user
        res.status(200).render('editUser', {
            message: 'Usuario actualizado con éxito.',
            user: {
                id: user.id,
                username,
                email,
                role
            }
        });
    } catch (error) {
        console.error('Error al actualizar usuario:', error);
        res.status(500).render('editUser', { message: 'Error al actualizar usuario.' });
    }
};




// Controlador para eliminar un usuario
const removeUser = async (req, res, next) => {
    const { id } = req.params;
    try {
        await deleteUser(id);
        next(); // Llama a `next` en lugar de enviar la respuesta
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
        if (!res.headersSent) {
            res.status(500).json({ error: 'Error al eliminar usuario' });
        }
    }
};


// Controlador para obtener todos los usuarios
const getAllUsers = async (req, res) => {
    try {
        const users = await getAllUsersFromDB();
        res.render('users', { users });
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).send('Error al obtener usuarios');
    }
};

module.exports = { registerUser, updateUser, removeUser, getAllUsers, updateUserController };
