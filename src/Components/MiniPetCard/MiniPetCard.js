import React, { useState } from 'react'
import './MiniPetCard.css'

export default function MiniPetCard({
  pet,
  selectedPet,
  selectPet,
  deselectPet,
}) {
  const [selected, setSelected] = useState(false)
  const isSelected = selectedPet === pet // Check if the pet is selected

  // Handle pet selection/deselection
  function handleClick() {
    setSelected(!selected)
    if (isSelected) {
      deselectPet() // Deselect the pet
    } else {
      selectPet(pet) // Select the pet
    }
  }

  return (
    <div className={selected ? 'selected' : 'unselected'} onClick={handleClick}>
      <p>{pet.name}</p>
    </div>
  )
}
