import React from 'react'
import './MiniPetCard.css'

export default function MiniPetCard({
  pet,
  selectedPet,
  selectPet,
  deselectPet,
}) {
  const isSelected = selectedPet === pet // Check if the pet is selected

  // Handle pet selection/deselection
  function handleClick() {
    if (isSelected) {
      deselectPet() // Deselect the pet
    } else {
      selectPet(pet) // Select the pet
    }
  }

  return (
    <div
      className={isSelected ? 'MiniPetCard selected' : 'MiniPetCard unselected'}
      onClick={handleClick}
    >
      <img src={pet.photo} alt={pet.name} className="petBubblePhoto" />
      <div>
        <p style={{'fontSize': '2vh'}}>
          <b>{pet.name}</b>
        </p>
        <p style={{'fontSize': '1.75vh'}}>
          {pet.breed.length > 1 ? 'Mixed' : pet.breed}, {pet.age} years
        </p>
      </div>
    </div>
  )
}
