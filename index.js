require('dotenv').config({ path: `${process.cwd ()}/.env` });

const express = require('express');
const app = express();
const knex = require('./database')

// Test DB connection
knex.raw('SELECT 1+1 AS result')
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Database connection failed:', err));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/whatisurname/:name', (req, res) => {
  res.status(200).json({ message: req.params.name });
});

app.use('*', (req, res, next) => {
  res.status(404).json({ status:0, message: 'What the fuck dude! You know we dont have that route right' });
});

const port  = process.env.APP_PORT || 8000
app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});