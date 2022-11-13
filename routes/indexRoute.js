const express = require("express");
const IndexController = require("../controllers/indexController");
const Route = express.Router();

Route.get("/", IndexController.index);

module.exports = Route;
