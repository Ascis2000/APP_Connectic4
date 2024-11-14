// const request = require('supertest');
// const app = require('../index.js'); // Importa la aplicación principal desde index.js

// describe('Testing de rutas de usuarios', () => {
//     test('GET /api/users debería devolver un 200 y un array de usuarios', async () => {
//         const response = await request(app).get('/admin/users');
//         expect(response.statusCode).toBe(200);
//         // expect(Array.isArray(response.body)).toBe(true);
//     });
// });


/////////////////////////////////////////////////////////////////////////
// const request = require('supertest');
// const app = require('../index.js'); // Importa la aplicación principal desde index.js

// describe('Testing de rutas de administración', () => {
//     test('POST /register debería devolver un 409 si el email ya está registrado', async () => {
//         const existingUser = {
//             username: 'adminExistente',
//             email: 'existing@example.com',
//             password: 'securePassword'
//         };

//         // Primero, creamos un usuario con el email
//         await request(app).post('/register').send(existingUser);

//         // Intentamos otro usuario con el mismo mail
//         const newUserWithSameEmail = {
//             username: 'otroAdmin',
//             email: 'existing@example.com', // Msmo email para simular duplicado
//             password: 'newPassword'
//         };

//         const response = await request(app).post('/register').send(newUserWithSameEmail);

//         // Verificamos que la respuesta sea un 409 y contenga un mensaje de error
//         expect(response.statusCode).toBe(409);
//         expect(response.body).toHaveProperty('error');
//         expect(response.body.error).toBe('El email ya está registrado');
//     });
// });

