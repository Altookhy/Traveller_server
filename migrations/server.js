// const express = require('express');
// const mysql = require('mysql');

// const app = express();

// // Database connection setup
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'your_mysql_user',
//   password: 'your_mysql_password',
//   database: 'myapp',
// });

// db.connect((err) => {
//   if (err) throw err;
//   console.log('Connected to the database');
// });

// // Set up API endpoints
// app.use(express.json());

// // User registration
// app.post('/api/register', (req, res) => {
//   const { username, password, role } = req.body;

//   const newUser = {
//     username,
//     password,
//     role,
//   };

//   db.query('INSERT INTO users SET ?', newUser, (err, result) => {
//     if (err) {
//       res.status(500).json({ error: 'Failed to register user' });
//     } else {
//       res.status(200).json({ message: 'User registered successfully' });
//     }
//   });
// });

// // User authentication
// app.post('/api/login', (req, res) => {
//   const { username, password } = req.body;

//   db.query('SELECT * FROM users WHERE username = ?', username, (err, results) => {
//     if (err) {
//       res.status(500).json({ error: 'Failed to authenticate user' });
//     } else {
//       if (results.length > 0 && results[0].password === password) {
//         // Generate and return a JWT token for successful login
//         // ...
//       } else {
//         res.status(401).json({ error: 'Invalid username or password' });
//       }
//     }
//   });
// });

// // User type management (update isCertified field)
// app.patch('/api/users/:id/certify', (req, res) => {
//   const { id } = req.params;
//   const { isCertified } = req.body;

//   db.query('UPDATE users SET isCertified = ? WHERE id = ?', [isCertified, id], (err, result) => {
//     if (err) {
//       res.status(500).json({ error: 'Failed to update user certification' });
//     } else {
//       res.status(200).json({ message: 'User certification updated successfully' });
//     }
//   });
// });

// // Start the server
// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });
