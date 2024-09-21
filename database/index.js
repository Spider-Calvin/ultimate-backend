const knex = require('knex');
const knexConfig = require('../knexfile');
const { Connection } = require('pg');
const db = knex(knexConfig.production);

module.exports = db;
