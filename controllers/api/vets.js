const Vet = require('../../models/vet')

// Create

async function createVet(req, res, next) {
  try {
    const body = req.body
    const vet = await Vet.create(body)
    res.status(201).json({ vet: vet })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

// indexes vets by owner

async function indexVets(req, res, next) {
  try {
    const user = req.user._id
    const vets = await Vet.find({ user: user }).populate('user')
    if (!vets) return new Error('No vets available')
    const vet = vets.map((vets) => vets)
    return res.status(200).json({ vet: vet })
  } catch (error) {
    next(error)
    console.log(error)
  }
}

// show by vet id

async function findVetById(req, res, next) {
  try {
    const vet = await Vet.findById(req.params.id)
    if (!vet) return next(new Error('No vet available'))
    return res.status(200).json({ vet: vet })
  } catch (error) {
    next(error)
    console.log(error)
  }
}

// Update

async function updateVet(req, res, next) {
  try {
    const vet = await Vet.findById(req.params.id)
    delete req.body._id
    return vet.updateOne(req.body).then(() => res.sendStatus(204))
  } catch (error) {
    next(error)
    console.log(error)
  }
}

// Delete

async function deleteVet(req, res, next) {
  try {
    const vet = await Vet.findById(req.params.id)
    await vet.deleteOne()
    res.sendStatus(204)
  } catch (error) {
    next(error)
    console.log(error)
  }
}

module.exports = {
  createVet,
  deleteVet,
  indexVets,
  findVetById,
  updateVet,
}
