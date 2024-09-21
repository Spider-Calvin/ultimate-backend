const express = require('express');
const auth = express.Router();
const auth_middleware = require('../../middlewares/v1/auth');
const auth_controller = require('../../controller/v1/auth');

auth.post('/create_user', auth_middleware.create_user, auth_controller.create_user);

//not to be exposed anywhere
auth.delete('/delete_user', auth_middleware.delete_user, auth_controller.delete_user);

auth.post('/login_user', auth_middleware.login_user, auth_controller.login_user);

module.exports = auth;
