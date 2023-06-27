import React from 'react'
import './ProgressBar.css'

export default function ProgressBar({ progress }) {
  return (
    <div className="progress">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  )
}
