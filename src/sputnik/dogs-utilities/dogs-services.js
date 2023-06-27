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
export async function indexPets() {
  const response = await dogAPI.indexPets()
  const pets = response.pet
  return pets
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

