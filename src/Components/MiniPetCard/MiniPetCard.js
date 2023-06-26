import React, { useState } from 'react'
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
    <div className={isSelected ? 'selected' : 'unselected'} onClick={handleClick}>
      <p>{pet.name}</p>
    </div>
  )
}
