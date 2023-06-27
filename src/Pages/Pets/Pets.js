import React, { useState, useEffect } from 'react'
import './Pets.css'
import PetForm from '../../Components/PetForm/PetForm'
import PetCard from '../../Components/PetCard/PetCard'
import * as petServices from '../../Utilities/dogs-utilities/dogs-services'
import { Link } from 'react-router-dom'

export default function Pets({ user }) {
  const [pets, setPets] = useState([])
  const [showPetForm, setShowPetForm] = useState(false)

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

  return (
    <div>
      {/* Some kind of navigating to prescriptions, medical records, or breed info page */}
      {/* My Pets Default View */}
      <h3 className="PageTitle">My Pets</h3>

      {showPetForm ? (
        <>
          <button onClick={() => setShowPetForm(false)}>Close Create Pet Form</button>
          <PetForm user={user} setPets={setPets} />
        </>
      ) : (
        <button onClick={() => setShowPetForm(true)}>Add New Pet</button>
      )}

      <br />
      <br />
      <Link to="/assessment">Symptom Assessment</Link>

      {pets.map((pet, index) => (
        <PetCard pet={pet} key={index} />
      ))}

      {/* <PetBubble />

      <PetSummary /> */}
    </div>
  )
}
