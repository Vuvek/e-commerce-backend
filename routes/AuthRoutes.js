const express = require("express");
const Route = express.Router();
const AuthController = require("../controllers/AuthController");
const Auth = require("../middlewares/Auth");

Route.use(Auth.validate);
Route.post("/register", AuthController.register);
Route.post("/login", AuthController.login);

module.exports = Route;
