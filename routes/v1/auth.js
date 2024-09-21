const express = require('express');
const auth = express.Router();
const daysjs = require('dayjs');
const auth_middleware = require('../../middlewares/v1/auth');
const auth_controller = require('../../controller/v1/auth');

auth.post('/create_user', auth_middleware.create_user, auth_controller.create_user);

auth.delete('/delete_user', (req, res) => {
	try {
		res.status(200).json({ status: 0, msg: 'hello' + asds });
	} catch (error) {
		res.status(500).json({ status: 0, msg: error.message });
	}
});

auth.get('/login_user', (req, res) => {
	try {
		res.status(200).json({ status: 0, msg: 'hello' + asds });
	} catch (error) {
		res.status(500).json({ status: 0, msg: error.message });
	}
});

module.exports = auth;
