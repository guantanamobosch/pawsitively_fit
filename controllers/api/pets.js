const Pet = require('../../models/pet')

// Create

async function createPet(req, res, next) {
  try {
    const body = req.body
    const pet = await Pet.create(body)
    res.status(201).json({ pet: pet })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

// indexes pets by owner

async function indexPets(req, res, next) {
  try {
    const user = req.user._id
    const pets = await Pet.find({ owner: user })
    if (!pets) return new Error('No pets available')
    const pet = pets.map((pets) => pets)
    return res.status(200).json({ pet: pet })
  } catch (error) {
    next(error)
    console.log(error)
  }
}


// show by pet id

async function findPetById(req, res, next) {
  try {
    const pet = await Pet.findById(req.params.id)
    if (!pet) return next(new Error('No pet available'))
    return res.status(200).json({ pet: pet })
  } catch (error) {
    next(error)
    console.log(error)
  }
}

// Update

async function updatePet(req, res, next) {
  try {
    const pet = await Pet.findById(req.params.id)
    delete req.body._id
    return pet.updateOne(req.body).then(() => res.sendStatus(204))
  } catch (error) {
    next(error)
    console.log(error)
  }
}

// Delete

async function deletePet(req, res, next) {
  try {
    const pet = await Pet.findById(req.params.id)
    await pet.deleteOne()
    res.sendStatus(204)
  } catch (error) {
    next(error)
    console.log(error)
  }
}

module.exports = {
  createPet,
  deletePet,
  indexPets,
  findPetById,
  updatePet,
}
