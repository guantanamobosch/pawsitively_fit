const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/users");

// "/api/users" route in server.js

// create a user with users controller
router.post("/", usersCtrl.create);
