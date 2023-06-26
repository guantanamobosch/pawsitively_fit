const express = require('express')
const router = express.Router()

const petsCtrl = require('../../controllers/api/pets')

// POST /api/pets/
router.post('/', petsCtrl.createPet)
// GET /api/pets/
router.get('/', petsCtrl.indexPets)
// GET /api/pets/:id
router.get('/:id', petsCtrl.findPetById)
// PATCH /api/pets/:id
router.patch('/update/:id', petsCtrl.updatePet)
// DELETE /api/pets/:id
router.delete('/:id', petsCtrl.deletePet)

module.exports = router