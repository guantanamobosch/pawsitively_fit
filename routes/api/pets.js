const express = require('express')
const router = express.Router()

const petsCtrl = require('../../controllers/api/pets')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// POST /api/pets/
router.post('/', ensureLoggedIn, petsCtrl.createPet)
// GET /api/pets/
router.get('/', petsCtrl.indexPets)
// GET /api/pets/:id
router.get('/:id', petsCtrl.findPetById)
// PATCH /api/pets/:id
router.patch('/update/:id', ensureLoggedIn, petsCtrl.updatePet)
// DELETE /api/pets/:id
router.delete('/:id', ensureLoggedIn, petsCtrl.deletePet)

module.exports = router