// src/config/config.js

require('dotenv').config();

const config = {
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD  || 'senha_mysql',
  database: process.env.MYSQL_DATABASE || 'orm',
  host: process.env.MYSQL_HOST || '127.0.0.1',
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};
