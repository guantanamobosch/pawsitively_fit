import React from 'react'
import './ResultsList.css'
import { useNavigate } from 'react-router-dom'

export default function ResultsList({ aiResponse }) {
  const navigate = useNavigate()

  const responseItems = aiResponse
    .trim()
    .split('\n')
    .map((item, index) => <li className='results-list-item' key={index}>{item}</li>)

  return (
    <div>
      <ul style={{paddingInlineStart: '0px'}}><i>{responseItems}</i></ul>
      <button className="formSubmit" onClick={() => navigate('/dashboard')}>
        Finish Test
      </button>
    </div>
  )
}
