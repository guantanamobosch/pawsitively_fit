import React from 'react'
import './PetBubble.css'

export default function PetBubble({ pet, onClick, selectedPet }) {
  const bubblePhotoClassDeterminer =
    selectedPet === null
      ? 'petBubblePhoto'
      : selectedPet === pet
      ? 'selectedBubblePhoto'
      : 'unselectedBubblePhoto'

  return (
    <div className="petBubble" onClick={onClick}>
      <img
        className={bubblePhotoClassDeterminer}
        src={pet.photo}
        alt={pet.name}
      />
      <p>{pet.name}</p>
    </div>
  )
}
