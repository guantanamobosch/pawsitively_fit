const Pet = require('../models/pet')

module.exports = async function (req, res, next) {
  // TODO handle the error where this doesn't find a matching pet
  const basePet = await Pet.findById(req.params.id)
  if (!basePet.owner.equals(req.user._id)) {
    //make a new pet based on req.body.id
    const newPet = await Pet.create({
      owner: req.user._id,
      name: basePet.name,
      photo: basePet.photo,
      breed: basePet.breed,
      weight: basePet.weight,
      age: basePet.age,
      activity: basePet.activity,
      description: basePet.description,
      medications: basePet.medications,
      medicalhistory: basePet.medicalhistory,
      vet: req.vet._id
    })

    //insert the new one in place of the pet in the request.
    req.body = newPet
    req.params.id = newPet.id
  }
  // Okay!
  next()
}