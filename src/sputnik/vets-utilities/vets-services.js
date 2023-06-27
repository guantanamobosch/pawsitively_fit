import * as vetAPI from './vets-api'

// initial vet creation
export async function createNewVet(vetData) {
  const translatedVet = {
    ...vetData,
  }
  delete translatedVet._id

  const response = await vetAPI.createVet(translatedVet)

  return response.vet
}

// indexes vets based on who is logged in
export async function indexVets() {
  const response = await vetAPI.indexVets()
  const vets = response.vet
  return vets
}

// update vet
export async function updateVet(vet) {
  const vetId = vet._id

  const translatedVet = {
    ...vet,
  }

  await vetAPI.updateVet(vetId, translatedVet)
}

// delete vet
export async function deleteVet(vet) {
  const vetId = vet._id
  await vetAPI.deleteVet(vetId)
}

