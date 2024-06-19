const express = require('express');
const app = express();
const mysql = require('mysql');

// database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'chat_db'
});

// route to send message
app.post('/send-message', (req, res) => {
  const message = req.body.message;
  const user = req.body.user;
  db.query(`INSERT INTO conversations (message, user) VALUES (?,?)`, [message, user], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send({ error: '