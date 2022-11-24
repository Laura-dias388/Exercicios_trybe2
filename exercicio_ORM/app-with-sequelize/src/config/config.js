require('dotenv').config();

const config = {
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || null,
  database: process.env.MYSQL_DATABASE || 'model_example',
  host: process.env.MYSQL_HOST || 'localhost',
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};
