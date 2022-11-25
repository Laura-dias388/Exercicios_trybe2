// src/config/config.js

require('dotenv').config();

const config = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || null,
  database: process.env.DB_NAME || 'database_development',
  host: process.env.DB_HOST || '127.0.0.1',
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};
