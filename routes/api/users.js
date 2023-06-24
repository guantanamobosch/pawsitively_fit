const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/users");

// "/api/users" route from server.js
router.post("/", usersCtrl.create); // create a user
router.post("/login", usersCtrl.login); // login

// create a user with users controller
router.get('/check-token', usersCtrl.checkToken);
router.post("/", usersCtrl.create);
router.post('/login', usersCtrl.login);



module.exports = router;
