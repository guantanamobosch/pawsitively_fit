import React from 'react'
import './PageNav.css'
import { useNavigate } from 'react-router-dom'

export default function PageNav({
  currentPage,
  setCurrentPage,
  totalPages,
  onNext,
  onPrevious,
  selectedPetCount,
  onGetAssessment,
  setCurrentSymptomIndex,
  currentSymptomIndex,
  symptoms,
  setFinishTest,
}) {
  const disableNext = currentPage === 2 && selectedPetCount !== 1 // Disable the Next button if selectedPetCount is not equal to 1
  const navigate = useNavigate()

  function handleAIAssessment() {
    navigate('/assessment/6')
    onGetAssessment()
    onNext()
    setFinishTest(true)
  }

  function handleNextSymptom() {
    setCurrentSymptomIndex(currentSymptomIndex + 1)
  }

  function handlePreviousSymptom() {
    setCurrentSymptomIndex(currentSymptomIndex - 1)
  }

  return (
    <div>
      {currentPage === 6 ? (
        <>
          <button
            onClick={() => navigate('/pets')}
          >
            Finish Test
          </button>
        </>
      ) : (
        <>
          <button onClick={onPrevious} disabled={currentPage === 1}>
            Previous Page
          </button>
          {currentPage === 4 ? (
            <>
              <button
                onClick={handlePreviousSymptom}
                disabled={currentSymptomIndex === 0}
              >
                Previous Symptom
              </button>
              {currentSymptomIndex === symptoms.length - 1 ? (
                <button onClick={onNext} disabled={disableNext}>
                  Finish Assessing Symptoms
                </button>
              ) : (
                <button onClick={handleNextSymptom}>Next Symptom</button>
              )}
            </>
          ) : (
            <button
              onClick={currentPage === 5 ? handleAIAssessment : onNext}
              disabled={currentPage === totalPages || disableNext}
            >
              {currentPage === 5 ? 'Get Assessment' : 'Next Page'}
            </button>
          )}
        </>
      )}
    </div>
  )
}
