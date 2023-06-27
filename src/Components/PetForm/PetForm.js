import React, { useState, useEffect } from 'react'
import './PetForm.css'
import * as petServices from '../../Utilities/dogs-utilities/dogs-services'

export default function PetForm({ user, setPets }) {
  const [petData, setPetData] = useState({
    name: '',
    breed: [],
    age: '',
    birthDate: '',
    weight: '',
    photo: '',
    activity: '',
    description: '',
    medications: [],
    medicalHistory: [],
    newBreed: '',
    newMedication: '',
    newMedicalEvent: '',
  })

  async function fetchRandomDogImage() {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random')
      const data = await response.json()

      if (data.status === 'success') {
        const randomDogImageUrl = data.message
        console.log(randomDogImageUrl)
        setPetData((prevData) => ({
          ...prevData,
          photo: randomDogImageUrl,
        }))
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  useEffect(() => {
    fetchRandomDogImage()
  }, [])

  async function handleChange(event) {
    const { name, value } = event.target
    setPetData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  function handleAddBreed() {
    if (petData.newBreed.trim() !== '') {
      setPetData((prevData) => ({
        ...prevData,
        breed: [...prevData.breed, petData.newBreed],
        newBreed: '',
      }))
    }
  }

  function handleAddMedication() {
    if (petData.newMedication.trim() !== '') {
      setPetData((prevData) => ({
        ...prevData,
        medications: [...prevData.medications, petData.newMedication],
        newMedication: '',
      }))
    }
  }

  function handleAddmedicalHistory() {
    if (petData.newMedicalEvent.trim() !== '') {
      setPetData((prevData) => ({
        ...prevData,
        medicalHistory: [...prevData.medicalHistory, petData.newMedicalEvent],
        newMedicalEvent: '',
      }))
    }
  }

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const { newBreed, newMedication, newMedicalEvent, ...translatedPetData } =
        petData

      const createdPet = await petServices.createNewPet({
        ...translatedPetData,
        owner: user._id,
      })

      setPets((prevPets) => [...prevPets, createdPet])

      setPetData({
        name: '',
        breed: [],
        age: '',
        birthDate: '',
        weight: '',
        photo: '',
        activity: '',
        description: '',
        medications: [],
        medicalHistory: [],
        newBreed: '',
        newMedication: '',
        newMedicalEvent: '',
      })
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={petData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="breed">Breed{`(s)`}:</label>
        <input
          type="text"
          id="breed"
          name="newBreed"
          value={petData.newBreed}
          onChange={handleChange}
        />

        <button type="button" onClick={handleAddBreed}>
          Add Breed
        </button>

        {/* Display the added breeds */}
        {petData.breed.length > 0 &&
          petData.breed.map((breed, index) => <p key={index}>{breed}</p>)}

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={petData.age}
          onChange={handleChange}
          required
        />

        <label htmlFor="birthDate">Birthdate:</label>
        <input
          type="date"
          id="birthDate"
          name="birthDate"
          value={petData.birthDate}
          onChange={handleChange}
          required
        />

        <label htmlFor="weight">Weight (in lbs):</label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={petData.weight}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          id="photo"
          name="photo"
          value={petData.photo}
          onChange={handleChange}
          required
          style={{ display: 'none' }}
        />

        <label htmlFor="activity">Activity:</label>
        <input
          type="text"
          id="activity"
          name="activity"
          value={petData.activity}
          onChange={handleChange}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={petData.description}
          onChange={handleChange}
        ></textarea>

        <label htmlFor="medications">Medications:</label>
        <input
          type="text"
          id="medications"
          name="newMedication"
          value={petData.newMedication}
          onChange={handleChange}
        />

        <button type="button" onClick={handleAddMedication}>
          Add Medication
        </button>

        {/* Display the added medications */}
        {petData.medications.length > 0 &&
          petData.medications.map((medication, index) => (
            <p key={index}>{medication}</p>
          ))}

        <label htmlFor="medicalHistory">Medical History:</label>
        <input
          type="text"
          id="medicalHistory"
          name="newMedicalEvent"
          value={petData.newMedicalEvent}
          onChange={handleChange}
        />

        <button type="button" onClick={handleAddmedicalHistory}>
          Add Medical History
        </button>
        {/* Display the added medical events */}
        {petData.medicalHistory.length > 0 &&
          petData.medicalHistory.map((event, index) => (
            <p key={index}>{event}</p>
          ))}

        <button type="submit">Add Pet</button>
      </form>
    </div>
  )
}
