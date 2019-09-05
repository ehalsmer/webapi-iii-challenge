const knex = require('knex');
const defaults = require('../config/default');
const environment = defaults.environment || 'development';

const knexConfig = require('../knexfile.js')[environment];

module.exports = knex(knexConfig);
