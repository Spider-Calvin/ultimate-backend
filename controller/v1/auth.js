const knex = require('../../database');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

const create_user = async (req, res) => {
	try {
		const body = req.body;
		const password = await bcrypt.hash(body.password, 10);

		const newUser = {
			userid: uuidv4(),
			user_name: body.user_name,
			name: body.name,
			mobile: body.mobile,
			email: body.email.toLowerCase(),
			dob: body.dob,
			address: body.address,
			pincode: body.pincode,
			state: body.state,
			gender: body.gender,
			password: password,
		};

		const result = await knex('users').insert(newUser).returning('*');

		res.status(200).json({ status: 1, msg: 'User created successfully', data: result[0] });
	} catch (error) {
		// Handle any errors that occur during the insert
		console.error(error);
		res.status(500).json({ status: 0, msg: 'Create new user failed', error: error.message });
	}
};

const delete_user = async (req, res) => {
	try {
		const body = req.body;

		// Attempt to delete the user with the provided userid
		const result = await knex('users').where({ userid: body.userid }).del(); // Deletes the user and returns the count of rows deleted

		// Check if a user was deleted
		if (result) {
			return res.status(200).json({ status: 1, msg: 'User deleted successfully' });
		} else {
			return res.status(404).json({ status: 0, msg: 'User not found' });
		}
	} catch (error) {
		// Handle any errors that occur during the deletion
		console.error(error);
		return res.status(500).json({ status: 0, msg: 'Error deleting user', error: error.message });
	}
};

module.exports = { create_user, delete_user };
