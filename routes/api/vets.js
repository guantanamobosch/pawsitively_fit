const express = require('express')
const router = express.Router()

const vetsCtrl = require('../../controllers/api/vets')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// POST /api/vets/
router.post('/', ensureLoggedIn, vetsCtrl.createVet)
// GET /api/vets/
router.get('/', vetsCtrl.indexVets)
// GET /api/vets/:id
router.get('/:id', vetsCtrl.findVetById)
// PATCH /api/vets/:id
router.patch('/update/:id', ensureLoggedIn, vetsCtrl.updateVet)
// DELETE /api/vets/:id
router.delete('/:id', ensureLoggedIn, vetsCtrl.deleteVet)

module.exports = router