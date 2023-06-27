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
          <p>
            <b>Breed: </b>
            {pet.breed.length > 1
              ? `Mixed (${pet.breed.join(', ')})`
              : pet.breed.join(', ')}
          </p>
          <p>
            <b>Age: </b>
            {pet.age}
          </p>
          <p>
            <b>DOB: </b>
            {formattedBirthDate}
          </p>
          <p>
            <b>Weight: </b>
            {pet.weight} lbs.
          </p>
        </div>
        <div>
          <button>EDIT</button>
        </div>
      </div>
      {/* Display other pet information */}
    </div>
  )
}
