import React from 'react'
import './SymptomCard.css'

export default function SymptomCard({ symptom, onSymptomRemove, key }) {
  return (
    <div className='infoCard' onClick={() => onSymptomRemove(key)}>
      <p>{symptom}</p>
    </div>
  )
}