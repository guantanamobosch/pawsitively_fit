import React from 'react'
import './PageNav.css'
import { useLocation } from 'react-router-dom'

export default function PageNav({
  currentPage,
  totalPages,
  onNext,
  onPrevious,
  selectedPetCount,
  onGetAssessment
}) {
  const page = useLocation().pathname

  const disableNext = page === '/assessment/2' && selectedPetCount !== 1 // Disable the Next button if selectedPetCount is not equal to 1

  function handleAIAssessment() {
    onGetAssessment()
    onNext()
  }

  return (
    <div>
      <button onClick={onPrevious} disabled={currentPage === 1}>
        Previous
      </button>
      {page === '/assessment/4' ? (
        <button onClick={handleAIAssessment}>Generate Assessment</button>
      ) : (
        <button
          onClick={onNext}
          disabled={currentPage === totalPages || disableNext}
        >
          Next
        </button>
      )}
    </div>
  )
}
