const express = require("express");
const router = express.Router();
const dogsCtrl = require("../../controllers/api/dogs");

// "/api/dogs" route from server.js
router.get("/get-breed-list", dogsCtrl.getBreedList);
router.post("/get-breed-photo", dogsCtrl.getBreedPhoto);

module.exports = router;
