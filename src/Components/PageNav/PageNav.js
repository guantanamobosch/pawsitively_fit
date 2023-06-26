import React from 'react'
import './PageNav.css'
import { Link } from 'react-router-dom';

export default function PageNav({
  currentPage,
  totalPages,
  onNext,
  onPrevious,
  selectedPetCount,
  onGetAssessment,
  setCurrentSymptomIndex,
  currentSymptomIndex,
  symptoms
}) {

  const disableNext = currentPage === 2 && selectedPetCount !== 1 // Disable the Next button if selectedPetCount is not equal to 1

  function handleAIAssessment() {
    onGetAssessment()
    onNext()
  }

  function handleNextSymptom() {
    setCurrentSymptomIndex(currentSymptomIndex + 1);
  }

  function handlePreviousSymptom() {
    setCurrentSymptomIndex(currentSymptomIndex - 1);
  }

  return (
    <div>
      <button onClick={onPrevious} disabled={currentPage === 1}>
        Previous
      </button>
      {currentPage === 4 ? (
        <>
          <button onClick={handlePreviousSymptom} disabled={currentSymptomIndex === 0}>
            Previous Symptom
          </button>
          {currentSymptomIndex === symptoms.length - 1 ? (
            <button onClick={onNext} disabled={disableNext}>
              Finish
            </button>
          ) : (
            <button onClick={handleNextSymptom}>Next Symptom</button>
          )}
        </>
      ) : (
        <button onClick={onNext} disabled={currentPage === totalPages || disableNext}>
          Next
        </button>
      )}
      {currentPage === 5 && (
        <Link to="/assessment/6">
          <button onClick={handleAIAssessment}>Get Assessment</button>
        </Link>
      )}
    </div>
  )
}
