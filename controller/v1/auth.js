// userController.js
const create_user = (req, res) => {
	const body = req.body;

	// Simulate creating a user
	const newUser = {
		user_name: body.user_name,
		name: body.name,
		mobile: body.mobile,
		email: body.email.toLowerCase(),
		dob: body.dob,
		address: body.address,
		pincode: body.pincode,
		state: body.state,
		gender: body.gender,
		password: body.password, // Should be hashed in real implementation
	};

	// Simulate saving user and sending a success response
	res.status(200).json({ status: 1, msg: 'User created successfully', data: newUser });
};

module.exports = { create_user };
