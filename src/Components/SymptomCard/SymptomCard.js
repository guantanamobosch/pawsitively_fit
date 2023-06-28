import React from 'react'
import './SymptomCard.css'

export default function SymptomCard({ symptom, onSymptomRemove, index }) {
  return (
    <div className='infoCard' onClick={() => onSymptomRemove(index)}>
      <p>{symptom}</p>
    </div>
  )
}