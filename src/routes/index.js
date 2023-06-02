const dbConnection = require("../core/dbConnection");
const express = require("express");

const router = express.Router();

const { appConfig } = require("../config/config");

router.get("/", function (req, res, next) {
  res.json(
    { title: "host: " + appConfig.host + " port: " + appConfig.port },
    200
  );
});

router.get("/index", function (req, res, next) {
  dbConnection.query("SELECT * FROM ac_accounts", function (err, rows) {
    if (err) {
      res.status(409).json({ status: "error", message: err });
    } else {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ users: rows }));
    }
  });
});

module.exports = router;
