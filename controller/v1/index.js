const express = require('express');
const router_v1 = express.Router();

const auth = require('./auth');

router_v1.use('/auth', auth);

module.exports = router_v1;
