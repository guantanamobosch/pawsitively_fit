import React from 'react'
import './BreedInfoOverlay.css'

export default function BreedInfoOverlay() {
  return (
    <div>
      <ul>
        <div>
          <li>General Care</li>
          <p>{`>`}</p>
        </div>
        <div>
          <li>Health</li>
          <p>{`>`}</p>
        </div>
        <div>
          <li>Feeding Guide</li>
          <p>{`>`}</p>
        </div>
        <div>
          <li>Behavior & Training</li>
          <p>{`>`}</p>
        </div>
        <div>
          <li>Grooming</li>
          <p>{`>`}</p>
        </div>
        <div>
          <li>FAQs</li>
          <p>{`>`}</p>
        </div>
      </ul>
    </div>
  )
}
