const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/users");

// "/api/users" route from server.js
router.post("/", usersCtrl.create); // create a user
router.post("/login", usersCtrl.login); // login
