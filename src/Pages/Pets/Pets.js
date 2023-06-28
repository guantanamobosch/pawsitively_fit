import React, { useState, useEffect } from 'react'
import './Pets.css'
import PetForm from '../../Components/PetForm/PetForm'
import PetCard from '../../Components/PetCard/PetCard'
import PetBubble from '../../Components/PetBubble/PetBubble'
import * as petServices from '../../utilities/dogs-utilities/dogs-services'
import { Link } from 'react-router-dom'

export default function Pets({ user }) {
  const [pets, setPets] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [selectedPet, setSelectedPet] = useState(null)
  const [showAllCards, setShowAllCards] = useState(true)

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

  function handlePetBubbleClick(pet) {
    setSelectedPet(pet)
    setShowAllCards(false)
  }

  return (
    <div>
      {/* My Pets Default View */}
      <div className="petBubbleTitleContainer">
        <h3 className="PageTitle">My Pets</h3>

        <div className="petBubbleContainer">
          {pets.map((pet, index) => (
            <PetBubble
              pet={pet}
              key={index}
              onClick={() => handlePetBubbleClick(pet)}
              selectedPet={selectedPet}
            />
          ))}
        </div>
      </div>

      <div className="PageTitleContainer">
        <Link to="/assessment">Symptom Assessment</Link>
        {showModal ? (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => setShowModal(false)}>
                &times;
              </span>
              <PetForm setPets={setPets} user={user} setShowModal={setShowModal} />
            </div>
          </div>
        ) : (
          <p onClick={() => setShowModal(true)} className="clickable">
            <u>Add New Pet</u>
          </p>
        )}
      </div>
      {showAllCards &&
        pets.map((pet, index) => (
          <div className="petCardContainer" key={index}>
            <PetCard pet={pet} />
          </div>
        ))}
      {selectedPet && (
        <div className="petCardContainer">
          <PetCard pet={selectedPet} />
        </div>
      )}
    </div>
  )
}
