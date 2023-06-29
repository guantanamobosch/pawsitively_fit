import React, { useState, useEffect } from 'react'
import './SpecificSymptom.css'
import { useNavigate, useLocation } from 'react-router-dom'

export default function SpecificSymptom({
  symptom,
  selectedPet,
  duration,
  onDurationChange,
  setCurrentSymptomIndex,
  currentSymptomIndex,
  symptoms,
}) {
  const [selectedDuration, setSelectedDuration] = useState(duration)

  const navigate = useNavigate()
  const page = useLocation().pathname

  function handleDurationChange(event) {
    const newDuration = event.target.value
    setSelectedDuration(newDuration)
    onDurationChange(newDuration) // Pass the new duration value back to the parent component
    console.log(newDuration)
  }

  useEffect(() => {
    console.log(selectedDuration) // Log the updated value whenever it changes
  }, [selectedDuration])

  // Function to handle navigating to the previous symptom
  function goToPreviousSymptom() {
    if (currentSymptomIndex > 0) {
      setCurrentSymptomIndex((prevIndex) => prevIndex - 1)
      navigate(`/assessment/4`)
    }
  }

  // Function to handle navigating to the next symptom
  function goToNextSymptom() {
    if (currentSymptomIndex < symptoms.length - 1) {
      setCurrentSymptomIndex((prevIndex) => prevIndex + 1)
      navigate(`/assessment/4`)
    }
  }

  return (
    <div className="SpecificSymptoms">
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
      {page === '/assessment/4' && (
        <div className='SymptomNavigator'>
          <h4
            onClick={goToPreviousSymptom}
            disabled={currentSymptomIndex === 0}
          >
            Previous Symptom
          </h4>
          <button
            className='formSubmit'
            onClick={goToNextSymptom}
            disabled={currentSymptomIndex === symptoms.length - 1}
          >
            Next Symptom
          </button>
        </div>
      )}
    </div>
  )
}
