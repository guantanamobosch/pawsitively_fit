import * as dogAPI from './dogs-api'

// initial pet creation
export async function createNewPet(petData) {
  const translatedPet = {
    ...petData,
  }
  delete translatedPet._id

  const response = await dogAPI.createPet(translatedPet)

  return response.pet
}

// indexes pets based on who is logged in
export async function indexPets(ownerId) {
  const response = await dogAPI.indexPets(ownerId)
  const pets = response.pet
  const userPets = pets.filter(pet => pet.owner === ownerId)
  return userPets
}

// update pet
export async function updatePet(pet) {
  const petId = pet._id

  const translatedPet = {
    ...pet,
  }

  await dogAPI.updatePet(petId, translatedPet)
}

// delete pet
export async function deletePet(pet) {
  const petId = pet._id
  await dogAPI.deletePet(petId)
}

