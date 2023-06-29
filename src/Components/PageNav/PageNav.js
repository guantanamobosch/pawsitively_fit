import React from 'react'
import './PageNav.css'
import { useNavigate } from 'react-router-dom'

export default function PageNav({
  currentPage,
  totalPages,
  onNext,
  onPrevious,
  selectedPetCount,
  onGetAssessment,
  currentSymptomIndex,
  symptoms,
  finishTest,
  setFinishTest,
  symptomDurations,
}) {
  const disableNext = currentPage === 2 && selectedPetCount !== 1 // Disable the Next button if selectedPetCount is not equal to 1
  const navigate = useNavigate()

  function handleAIAssessment() {
    navigate('/assessment/6')
    onGetAssessment()
    setFinishTest(true)
  }

  function handleCancel() {
    navigate('/dashboard')
  }

  return (
    <div className='PageNavigator'>
      {finishTest ? ( ''
      ) : (
        <>
          <h3
            onClick={currentPage === 1 ? handleCancel : onPrevious}
          >
            {currentPage === 1 ? 'Cancel Assessment' : 'Previous Page'}
          </h3>
          <button
            className="formSubmit"
            onClick={currentPage === 5 ? handleAIAssessment : onNext}
            disabled={
              currentPage === totalPages ||
              disableNext ||
              symptomDurations.length !== symptoms.length ||
              (currentPage === 4 &&
                symptomDurations.some((duration) => !duration)) ||
              (currentPage === 3 && symptomDurations.length < 1)
            }
          >
            {currentPage === 5
              ? 'VIEW RESULTS'
              : currentPage === 4 && currentSymptomIndex === symptoms.length - 1
              ? 'Finish Assessing Symptoms'
              : 'NEXT'}
          </button>
        </>
      )}
    </div>
  )
}
