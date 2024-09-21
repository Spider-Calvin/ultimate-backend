const express = require('express');
const auth = express.Router();

auth.get('/', (req, res) => {
	res.status(200).json({ status: 0, msg: 'hello' });
});

module.exports = auth;
