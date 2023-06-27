import React, { useState } from 'react'
import './SpecificSymptom.css'

export default function SpecificSymptom({ symptom, selectedPet, duration, onDurationChange }) {

  function handleDurationChange(event) {
    onDurationChange(event.target.value)
  }

  return (
    <div>
      <p>
        How long has <b>{selectedPet.name}</b> been experiencing <b>{symptom}</b> for?
      </p>
      <label>
        <input
          type="radio"
          value="Less than 1 day"
          checked={duration === 'Less than 1 day'}
          onChange={handleDurationChange}
        />
        Less than 1 day
      </label>
      <label>
        <input
          type="radio"
          value="Between 1 - 3 days"
          checked={duration === 'Between 1 - 3 days'}
          onChange={handleDurationChange}
        />
        Between 1 - 3 days
      </label>
      <label>
        <input
          type="radio"
          value="Between 3 - 7 days"
          checked={duration === 'Between 3 - 7 days'}
          onChange={handleDurationChange}
        />
        Between 3 - 7 days
      </label>
      <label>
        <input
          type="radio"
          value="Over a Week"
          checked={duration === 'Over a Week'}
          onChange={handleDurationChange}
        />
        Over a Week
      </label>
      <label>
        <input
          type="radio"
          value="I don't know"
          checked={duration === "I don't know"}
          onChange={handleDurationChange}
        />
        I don't know
      </label>
    </div>
  )
}
