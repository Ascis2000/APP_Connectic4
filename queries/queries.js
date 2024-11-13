// queries.js
const queries = {
    // Otra consulta que puedas tener
    createUser: `INSERT INTO users (username, password, email, role) VALUES ($1, $2, $3, $4) RETURNING *`,
    
    // Consulta para actualizar un usuario
    updateUser: `
        UPDATE users
        SET username = $1, email = $2, password = $3, role = $4
        WHERE id = $5
        RETURNING *
    `,

    findUserByUsername: `SELECT * FROM users WHERE username = $1`
    ,

    deleteUser: `
        DELETE FROM users
        WHERE id = $1
    `
};

module.exports = queries;