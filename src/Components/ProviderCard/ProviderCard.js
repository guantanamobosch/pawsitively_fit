import React, { useState, useEffect } from 'react'
import './ProviderCard.css'
import * as petServices from '../../utilities/dogs-utilities/dogs-services'

export default function ProviderCard({ vet, imageUrl }) {
  const [imageSrc, setImageSrc] = useState('')
  const [vetPets, setVetPets] = useState([])

  console.log(vet)

  async function findVetPet() {
    if (vet !== 'No vets found') {
      try {
        const promisedPet = vet.pets.map((pet) => petServices.findPet(pet))
        const resolvedPets = await Promise.all(promisedPet)
        const foundPet = resolvedPets.map((pet) => pet.pet)
        console.log(foundPet)
        setVetPets(foundPet)
      } catch (error) {
        console.error('Error fetching pets:', error)
      }
    }
  }

  useEffect(() => {
    findVetPet()
    if (imageUrl) {
      imageUrl.then((url) => setImageSrc(url))
    }
  }, [])

  return (
    <div className="vetCard">
      <div className="vetPhotoContainer">
        {imageUrl && (
          <img className="vetPhoto" src={imageSrc} alt="generic city" />
        )}
      </div>
      <div className="vetDetailsContainer">
        <div className="vetDetails">
          <h3 style={{'marginBlockEnd':'0.25em'}}>{vet.office}</h3>
          <p style={{'marginBlockEnd':'0.25em'}}>
            <b>Vet Name: </b>
            {vet.name}
          </p>
          <p style={{'marginBlockEnd':'0.25em'}}>
            <b>Email: </b>
            {vet.email}
          </p>
          <p>
            <b>Pets cared for: </b>
            <i>{vetPets && vetPets.map((vetPet) => vetPet.name).join(', ')}</i>
          </p>
        </div>
        <div className="moreVetDetails">
          <p>
            <u>See Details {'>'}</u>
          </p>
        </div>
      </div>
      {/* Display other vet information */}
    </div>
  )
}
