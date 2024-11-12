// admin.controllers.js
const { getAllUsers, updateUser, deleteUser } = require('../admin/admin.models.js');

// Controlador para renderizar la vista de adminDashboard con los datos de usuarios
const renderAdminDashboard = async (req, res) => {
    try {
        const users = await getAllUsers();
        console.log('Usuarios obtenidos en renderAdminDashboard:', users); // Log para verificar `users`
        res.render('adminDashboard', { users });
    } catch (error) {
        console.error('Error al cargar el dashboard de administración:', error);
        res.status(500).send('Error al cargar el dashboard de administración');
    }
};

// Controlador para actualizar un usuario
const editUser = async (req, res) => {
    const { id } = req.params;
    const { username, password, email, role } = req.body;
    try {
        await updateUser(id, username, password, email, role);
        res.json({ message: 'Usuario actualizado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar usuario' });
    }
};

// Controlador para eliminar un usuario
const removeUser = async (req, res) => {
    const { id } = req.params;
    try {
        await deleteUser(id);
        res.json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar usuario' });
    }
};

module.exports = {
    renderAdminDashboard,
    editUser,
    removeUser
};
