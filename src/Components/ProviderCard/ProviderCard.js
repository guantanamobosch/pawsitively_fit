import React, { useState, useEffect } from 'react'
import './ProviderCard.css'

export default function ProviderCard({ vet, imageUrl }) {
  const [imageSrc, setImageSrc] = useState('')

  useEffect(() => {
    if (imageUrl) {
      imageUrl.then((url) => setImageSrc(url))
    }
  })

  return (
    <div className="vetCard">
      <div className="vetPhotoContainer">
        {imageUrl && <img src={imageSrc} alt="generic city" />}
        <h4>{vet.office}</h4>
      </div>
      <div className="vetDetailsContainer">
        <div className="vetDetails">
          <p>
            <b>Name: </b>
          </p>
          <p>
            <b>Email: </b>
          </p>
          <p>
            <b>Pets: </b>
          </p>
        </div>
        <div>
          <button>EDIT</button>
        </div>
      </div>
      {/* Display other vet information */}
    </div>
  )
}
