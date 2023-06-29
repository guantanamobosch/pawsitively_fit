import React from 'react'
import './PetCard.css'

export default function PetCard({ pet }) {
  const formattedBirthDate = new Date(pet.birthDate).toLocaleDateString()
  return (
    <div className="petCard">
      <div className="petPhotoContainer">
        <img className="petPhoto" src={pet.photo} alt={pet.name} />
        <h4>{pet.name}</h4>
      </div>
      <div className="petDetailsContainer">
        <div className="petDetails">
          <p style={{ marginBlockEnd: '0.25em' }}>
            Breed: {pet.breed.length > 1
              ? `Mixed (${pet.breed.join(', ')})`
              : pet.breed.join(', ')}
          </p>
          <p style={{ marginBlockEnd: '0.25em' }}>
            Age: {pet.age}
          </p>
          <p style={{ marginBlockEnd: '0.25em' }}>
            DOB: {formattedBirthDate}
          </p>
          <p>
            Weight: {pet.weight} lbs.
          </p>
        </div>
        <div className="morePetDetails">
          <p>
            <u>Edit Details {'>'}</u>
          </p>
        </div>
      </div>
      {/* Display other pet information */}
    </div>
  )
}
