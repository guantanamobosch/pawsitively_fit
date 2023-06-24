const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/users");

// "/api/users" route in server.js

// create a user with users controller
router.get('/check-token', usersCtrl.checkToken);
router.post("/", usersCtrl.create);


module.exports = router;