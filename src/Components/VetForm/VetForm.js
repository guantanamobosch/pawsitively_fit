import React, { useState, useEffect } from 'react'
import './VetForm.css'
import * as vetServices from '../../utilities/vets-utilities/vets-services'
import * as petServices from '../../utilities/dogs-utilities/dogs-services'

export default function VetForm({ user, setVets }) {

  const [pets, setPets] = useState([])

  async function fetchPets() {
    try {
      const fetchedPets = await petServices.indexPets()
      setPets(fetchedPets)
    } catch (error) {
      console.error('Error fetching pets:', error)
    }
  }

  useEffect(() => {
    fetchPets()
  }, [])

  console.log(pets)

  const [vetData, setVetData] = useState({
    name: '',
    email: '',
    pets: '',
    office: '',
  })

  async function handleChange(event) {
    const { name, value } = event.target
    setVetData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const createdVet = await vetServices.createNewVet({
        ...vetData,
        user: user._id,
      })

      setVets((prevVets) => [...prevVets, createdVet])

      setVetData({
        name: '',
        email: '',
        pets: '',
        office: '',
      })
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className='formContainer'>
      <h3>Add New Vet</h3>
      <form onSubmit={handleSubmit} className='form'>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={vetData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={vetData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="pets">Pets:</label>
        <select
          id="pets"
          name="pets"
          value={vetData.pets}
          onChange={handleChange}
          required
        >
          <option value="">Select a pet</option>
          {pets.map((pet) => (
            <option key={pet._id} value={pet._id}>
              {pet.name}
            </option>
          ))}
        </select>

        <label htmlFor="office">Office:</label>
        <input
          type="text"
          id="office"
          name="office"
          value={vetData.office}
          onChange={handleChange}
          required
        />

        <button type="submit" className='formSubmit'>ADD VET</button>
      </form>
    </div>
  )
}
