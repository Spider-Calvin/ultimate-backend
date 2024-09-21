const Joi = require('joi');

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
	const { error } = userSchema.validate(req.body);

	if (error) {
		return res.status(400).json({ status: 0, msg: 'Validation error', details: error.details });
	}

	next();
};

module.exports = { create_user };
