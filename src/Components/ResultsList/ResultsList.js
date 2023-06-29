import React from 'react'
import './ResultsList.css'
import { useNavigate } from 'react-router-dom'

export default function ResultsList({ aiResponse }) {
  const navigate = useNavigate()
  return (
    <div>
      <p>
        <i>{aiResponse}</i>
      </p>
      <button className="formSubmit" onClick={() => navigate('/dashboard')}>
        Finish Test
      </button>
    </div>
  )
}
