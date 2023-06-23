const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/users");

// create a user
router.post("/", usersCtrl.create);
