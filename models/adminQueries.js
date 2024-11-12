// Archivo: adminQueries.js

const adminQueries = {
    getAllUsers: `
        SELECT * FROM users;
    `,
    
    updateUser: `
        UPDATE users
        SET username = $1, password = $2, email = $3, role = $4
        WHERE id = $5
    `,

    deleteUser: `
        DELETE FROM users
        WHERE id = $1
    `
};

module.exports = adminQueries;
