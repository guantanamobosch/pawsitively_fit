import React, { useState } from 'react'
import './SymptomForm.css'

export default function SymptomForm({
  onSymptomSubmit,
}) {
  const [symptom, setSymptom] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    if (symptom.trim() !== '') {
      onSymptomSubmit(symptom) // Call the onSymptomSubmit prop function with the entered symptom
      setSymptom('') // Clear the input field
    }
  }

  return (
    <form onSubmit={handleSubmit} className="symptomForm">
      <input
        type="text"
        placeholder="e.g. fever"
        value={symptom}
        onChange={(event) => setSymptom(event.target.value)}
        className="symptomInput"
      />
      <button type="submit" className="addItem">
        Add Symptom
      </button>
    </form>
  )
}
