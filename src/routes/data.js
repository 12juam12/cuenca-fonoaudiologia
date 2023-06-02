let DataController = require("../controllers/dataController");
const express = require("express");

const dataRouter = express.Router();

dataRouter.route("/")
    .get(DataController.getData)
    .post(DataController.postData)

module.exports = dataRouter;