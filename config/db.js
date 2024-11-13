const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    ssl: true,
});

module.exports = pool;

//  DB_USER=postgres
//  DB_HOST=localhost
//  DB_NAME=postgres
//  DB_PASS=123456
//  DB_PORT=5432
//  JWT_SECRET=tu_secreto_para_jwt
//  PORT=3000
