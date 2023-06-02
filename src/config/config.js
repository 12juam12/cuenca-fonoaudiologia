const dotenv = require("dotenv").config();

const config = {
  appConfig: {
    host: process.env.HOST || "127.0.0.1",
    port: process.env.PORT || 3000,
    dbHost: process.env.DB_HOST,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbDatabase: process.env.DB_NAME,
    dbPort: process.env.DB_PORT
  },
};

module.exports = config;
