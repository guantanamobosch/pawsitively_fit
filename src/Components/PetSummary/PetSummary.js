import React from 'react'
import './PetSummary.css'
import BreedInfo from '../BreedInfo/BreedInfo'

export default function PetSummary() {
  return (
    <div>
      <ul>
        <div>
          <img>{/* Medical Records */}</img>
          <li>Medical Records</li>
          <p>{`>`}</p>
        </div>
        <div>
        <img>{/* Prescriptions */}</img>
          <li>Prescriptions</li>
          <p>{`>`}</p>
        </div>
        <div>
        <img>{/* Breed Info */}</img>
          <li>Breed Info</li>
          <p>{`>`}</p>
        </div>
      </ul>
    </div>
  )
}
