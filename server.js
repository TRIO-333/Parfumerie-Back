// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const bcrypt = require('bcrypt');
// const jwt = require('json-web-token');
// const db = require('./database'); // Importer la configuration de la base de données
// const firebaseAdmin = require('./firebase'); // Importer la configuration Firebase

const app = express();
const port = 8000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// // Routes

// // Route pour créer un utilisateur
// app.post('/users', async (req, res) => {
//   const { nom, adresse_email, mot_de_passe, adresse, date_inscription, telephone } = req.body;
//   const hashedPassword = await bcrypt.hash(mot_de_passe, 10);
//   const sql = 'INSERT INTO user (nom, adresse_email, mot_de_passe, adresse, date_inscription, telephone) VALUES (?, ?, ?, ?, ?, ?)';
//   db.query(sql, [nom, adresse_email, hashedPassword, adresse, date_inscription, telephone], (err, result) => {
//     if (err) {
//       return res.status(500).send(err.message);
//     }
//     res.json({ id: result.insertId });
//   });
// });

// // Route pour authentifier un utilisateur (exemple)
// app.post('/login', (req, res) => {
//   const { adresse_email, mot_de_passe } = req.body;
//   const sql = 'SELECT * FROM user WHERE adresse_email = ?';
//   db.query(sql, [adresse_email], async (err, results) => {
//     if (err) {
//       return res.status(500).send(err.message);
//     }
//     if (results.length === 0) {
//       return res.status(400).send('User not found');
//     }
//     const user = results[0];
//     const match = await bcrypt.compare(mot_de_passe, user.mot_de_passe);
//     if (!match) {
//       return res.status(400).send('Invalid password');
//     }
//     const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
//     res.json({ token });
//   });
// });

// // Route pour obtenir les détails de l'utilisateur Firebase (exemple)
// app.get('/firebase-user/:uid', async (req, res) => {
//   try {
//     const userRecord = await firebaseAdmin.auth().getUser(req.params.uid);
//     res.json(userRecord);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
