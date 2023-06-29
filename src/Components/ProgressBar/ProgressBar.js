import React from 'react'
import './ProgressBar.css'
import { useLocation } from 'react-router-dom'

export default function ProgressBar({ progress }) {
  const page = useLocation().pathname
  return (
    <>
      {page !== '/assessment/6' && (
        <div className="progress">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      )}
    </>
  )
}
