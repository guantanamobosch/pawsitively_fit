import React, { useState, useEffect } from 'react'
import './PetForm.css'
import * as petServices from '../../utilities/dogs-utilities/dogs-services'

export default function PetForm({ user, setPets, setShowModal }) {
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

  function handleRemoveBreed(index) {
    setPetData((prevData) => {
      const updatedBreeds = [...prevData.breed]
      updatedBreeds.splice(index, 1)

      return {
        ...prevData,
        breed: updatedBreeds,
      }
    })
  }

  function handleRemoveMedication(index) {
    setPetData((prevData) => {
      const updatedMedications = [...prevData.medications]
      updatedMedications.splice(index, 1)

      return {
        ...prevData,
        medications: updatedMedications,
      }
    })
  }

  function handleRemoveMedicalEvent(index) {
    setPetData((prevData) => {
      const updatedMedicalHistory = [...prevData.medicalHistory]
      updatedMedicalHistory.splice(index, 1)

      return {
        ...prevData,
        medicalHistory: updatedMedicalHistory,
      }
    })
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

      setShowModal(false)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className="formContainer">
      <h2>Add New Pet</h2>
      <form onSubmit={handleSubmit} className="form">
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

        {/* Display the added breeds */}
        <div className="infoCardContainer">
          {petData.breed.length > 0 &&
            petData.breed.map((breed, index) => (
              <div
                className="infoCard"
                onClick={() => handleRemoveBreed(index)}
              >
                <p key={index}>{breed}</p>
              </div>
            ))}
        </div>

        <input
          type="text"
          id="breed"
          name="newBreed"
          value={petData.newBreed}
          onChange={handleChange}
        />

        <button type="button" onClick={handleAddBreed} className="addItem">
          Add Breed
        </button>

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
        <h3>Optional Info</h3>
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

        {/* Display the added medications */}
        <div className="infoCardContainer">
          {petData.medications.length > 0 &&
            petData.medications.map((medication, index) => (
              <div
                className="infoCard"
                onClick={() => handleRemoveMedication(index)}
              >
                <p key={index}>{medication}</p>
              </div>
            ))}
        </div>

        <input
          type="text"
          id="medications"
          name="newMedication"
          value={petData.newMedication}
          onChange={handleChange}
        />

        <button type="button" onClick={handleAddMedication} className="addItem">
          Add Medication
        </button>

        <label htmlFor="medicalHistory">Medical History:</label>

        {/* Display the added medical events */}
        <div className="infoCardContainer">
          {petData.medicalHistory.length > 0 &&
            petData.medicalHistory.map((event, index) => (
              <div
                className="infoCard"
                onClick={() => handleRemoveMedicalEvent(index)}
              >
                <p key={index}>{event}</p>
              </div>
            ))}
        </div>

        <input
          type="text"
          id="medicalHistory"
          name="newMedicalEvent"
          value={petData.newMedicalEvent}
          onChange={handleChange}
        />

        <button
          type="button"
          onClick={handleAddmedicalHistory}
          className="addItem"
        >
          Add Medical History
        </button>

        <button type="submit" className="formSubmit">
          Add Pet
        </button>
      </form>
    </div>
  )
}
