const Joi = require('joi');
const dayjs = require('dayjs');
const { validate: uuidValidate } = require('uuid');
const customParseFormat = require('dayjs/plugin/customParseFormat');
// Add customParseFormat plugin to Day.js
dayjs.extend(customParseFormat);

const userSchema = Joi.object({
	user_name: Joi.string().min(3).required(),
	name: Joi.string().min(3).required(),
	mobile: Joi.string().length(10).required(),
	email: Joi.string().email().required(),
	dob: Joi.date().required(),
	address: Joi.string().required(),
	pincode: Joi.string().required(),
	state: Joi.string().required(),
	gender: Joi.string().valid('male', 'female', 'other').required(),
	password: Joi.string().min(6).required(),
});

const create_user = (req, res, next) => {
	const body = req.body;
	const { error } = userSchema.validate(body);

	if (error) {
		return res.status(400).json({ status: 0, msg: 'Validation error', details: error.details });
	}

	if (!dayjs(body.dob, 'YYYY-MM-DD', true).isValid()) {
		return res.status(400).json({ status: 0, msg: 'Invalid date format' });
	}

	next();
};

const delete_user = (req, res, next) => {
	const body = req.body;

	// Validate that the userid is a valid UUID
	if (!uuidValidate(body.userid)) {
		return res.status(400).json({ status: 0, msg: 'Invalid user/UUID delete request' });
	}

	next();
};

module.exports = { create_user, delete_user };
