const express = require("express");
const router = express.Router();
const settingsCtrl = ("../../controllers/settings")


// "/api/users" route from server.js

router.post("/", settingsCtrl.createContact);






module.exports = router;
