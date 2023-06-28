import React, { useState, useEffect } from 'react'
import './SpecificSymptom.css'

export default function SpecificSymptom({
  symptom,
  selectedPet,
  duration,
  onDurationChange,
}) {
  const [selectedDuration, setSelectedDuration] = useState(duration)

  function handleDurationChange(event) {
    const newDuration = event.target.value
    setSelectedDuration(newDuration)
    onDurationChange(newDuration) // Pass the new duration value back to the parent component
    console.log(newDuration)
  }

  useEffect(() => {
    console.log(selectedDuration) // Log the updated value whenever it changes
  }, [selectedDuration])

  return (
    <div className='SpecificSymptoms'>
      <div className="SpecificSymptomsForm">
        <p style={{ marginBottom: '2vh' }}>
          How long has <i>{selectedPet.name}</i> been experiencing{' '}
          <i>{symptom}</i> for?
        </p>
        <label
          className={
            selectedDuration === 'Less than 1 day' ? 'selectedSymptom' : ''
          }
        >
          <input
            type="radio"
            value="Less than 1 day"
            checked={selectedDuration === 'Less than 1 day'}
            onChange={handleDurationChange}
          />
          Less than 1 day
        </label>
        <label
          className={
            selectedDuration === 'Between 1 - 3 days' ? 'selectedSymptom' : ''
          }
        >
          <input
            type="radio"
            value="Between 1 - 3 days"
            checked={selectedDuration === 'Between 1 - 3 days'}
            onChange={handleDurationChange}
          />
          Between 1 - 3 days
        </label>
        <label
          className={
            selectedDuration === 'Between 3 - 7 days' ? 'selectedSymptom' : ''
          }
        >
          <input
            type="radio"
            value="Between 3 - 7 days"
            checked={selectedDuration === 'Between 3 - 7 days'}
            onChange={handleDurationChange}
          />
          Between 3 - 7 days
        </label>
        <label
          className={
            selectedDuration === 'Over a Week' ? 'selectedSymptom' : ''
          }
        >
          <input
            type="radio"
            value="Over a Week"
            checked={selectedDuration === 'Over a Week'}
            onChange={handleDurationChange}
          />
          Over a Week
        </label>
        <label
          className={
            selectedDuration === "I don't know" ? 'selectedSymptom' : ''
          }
        >
          <input
            type="radio"
            value="I don't know"
            checked={selectedDuration === "I don't know"}
            onChange={handleDurationChange}
          />
          I don't know
        </label>
      </div>
    </div>
  )
}
