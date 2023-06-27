import sendRequest from '../send-request'
const BASE_URL = '/api/vets'

// create vet
export function createVet(vetData) {
  return sendRequest(BASE_URL, 'POST', vetData)
}

// index all vets
export function indexVets() {
  return sendRequest(BASE_URL, 'GET')
}

// find specific vet by id
export function findVetById(vetId) {
  return sendRequest(BASE_URL + `/${vetId}`, 'GET')
}

// update vet info
export function updateVet(vetId, vetData) {
  return sendRequest(BASE_URL + `/update/${vetId}`, 'PATCH', vetData)
}

// delete vet
export function deleteVet(vetId) {
  return sendRequest(BASE_URL + `/${vetId}`, 'DELETE')
}
