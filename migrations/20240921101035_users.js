/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable('users', table => {
		table.increments();
		table.uuid('userid').primary();
		table.string('name').comment('name of the user');
		table.string('user_name').comment('user_name of the user');
		table.string('mobile').comment('mobile number of the user');
		table.string('email').comment('email of the user');
		table.date('dob').comment('date of birth of user');
		table.string('address').comment('address  of user');
		table.string('pincode').comment('pincode  of user');
		table.string('state').comment('state of user');
		table.enu('gender', ['male', 'female', 'other']).comment('gender of user');
		table.string('profilepic').comment('profilepic of the user').nullable();
		table.string('deviceid').comment('deviceid of the user').nullable();
		table.string('device').comment('device of the user android ios windows mac').nullable();
		table.string('password').comment('hash value of password');
		table.jsonb('info').comment('json column to store additional info of user');
		table.boolean('active').defaultTo(true);
		table.text('token').comment('access token of the user');
		table.text('refresh_token').comment('refresh token of the user');
		table.string('otp', 6).comment('shared otp to user');
		table.index('user_name');
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTableIfExists('users');
};
