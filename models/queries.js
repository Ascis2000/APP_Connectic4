const queries = {
    createUser: `
        INSERT INTO users (username, password, email, role) 
        VALUES ($1, $2, $3, $4) 
        RETURNING *;
    `,
    
    findUserByUsername: `
        SELECT * FROM users 
        WHERE username = $1;
    `
    ,
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

module.exports = queries;
