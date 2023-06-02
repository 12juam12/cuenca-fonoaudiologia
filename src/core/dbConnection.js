var mysql = require("mysql2");
const { appConfig } = require("../config/config");

var config = {
  host: appConfig.dbHost,
  user: appConfig.dbUser,
  password: appConfig.dbPassword,
  database: appConfig.dbDatabase,
  port: appConfig.dbPort
};

const pool = mysql.createPool(config);

module.exports = pool;
