import React, { useState } from 'react'
import './Assessment.css'
import AssessmentBox from '../../Components/AssessmentBox/AssessmentBox'
import ProgressBar from '../../Components/ProgressBar/ProgressBar'
import PageNav from '../../Components/PageNav/PageNav'
import { Link, useNavigate } from 'react-router-dom'
import { generateAssessment } from '../../Utilities/ai-utilities/ai-api'

export default function Assessment() {
  const [currentPage, setCurrentPage] = useState(1)
  const [aiResponse, setAiResponse] = useState(null)
  const [beginTest, setBeginTest] = useState(false)
  const [finishTest, setFinishTest] = useState(false)
  const [selectedPet, setSelectedPet] = useState(null)
  const [currentSymptomIndex, setCurrentSymptomIndex] = useState(0)
  const [selectedPetCount, setSelectedPetCount] = useState(0) // Track the count of selected pets
  const [loading, setLoading] = useState(false)
  const [symptoms, setSymptoms] = useState([]) // State to store entered symptoms
  const navigate = useNavigate()

  // Function to handle navigation to the next page
  function goToNextPage() {
    if (currentPage === 4) {
      setCurrentSymptomIndex(0);
      setCurrentPage((prevPage) => prevPage + 1);
      navigate(`/assessment/${currentPage + 1}`);
    } else {
      setCurrentPage((prevPage) => prevPage + 1);
      navigate(`/assessment/${currentPage + 1}`);
    }
  }

  // Function to handle navigation to the previous page
  function goToPreviousPage() {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      navigate(`/assessment/${currentPage - 1}`);
    }
  }

  // Function to handle the count of selected pets
  function handleSelectedPetCount(count) {
    setSelectedPetCount(count)
  }

  // Function to handle getting the assessment
  async function getAssessment() {
    setLoading(true)
    const assessment = await generateAssessment(selectedPet, symptoms)
    console.log(assessment.data.choices[0].text)
    setAiResponse(assessment.data.choices[0].text)
    setLoading(false)
    // Further process the assessment as needed
  }

  return (
    <div>
      <h3 className="pageTitle">Symptom Assessment</h3>
      {finishTest ? (
        /* when test is finished and results are listing, show "Report" */
        <>
          <h3>Report</h3>
        </>
      ) : /* if test has not begun, show assessment intro */
      beginTest ? (
        <>
          <ProgressBar />
          <AssessmentBox
            selectedPet={selectedPet}
            setSelectedPet={setSelectedPet}
            handleSelectedPetCount={handleSelectedPetCount}
            symptoms={symptoms}
            currentSymptomIndex={currentSymptomIndex}
            setSymptoms={setSymptoms}
            loading={loading}
            aiResponse={aiResponse}
          />
          <PageNav
            currentPage={currentPage}
            totalPages={6}
            onNext={goToNextPage}
            onPrevious={goToPreviousPage}
            selectedPet={selectedPet}
            selectedPetCount={selectedPetCount}
            onGetAssessment={getAssessment}
            setCurrentSymptomIndex={setCurrentSymptomIndex}
            currentSymptomIndex={currentSymptomIndex}
            symptoms={symptoms}
          />
          {/* This is the pagination footer that navigates the user to the next page of the assessment */}
          {/* navigating back and forth must also trigger movement on the completion bar */}
        </>
      ) : (
        <>
          <div>
            <img alt="clock icon"></img>
            <p>2-5 minutes</p>
          </div>
          <p>
            This guided questionnaire will ask you about your pet’s symptoms and
            assess any possible conditions.
          </p>
          <Link to="/assessment/1">
            <button
              onClick={() => {
                setBeginTest(true)
                setCurrentPage(1)
              }}
            >
              Start Assessment
            </button>
          </Link>
        </>
      )}
    </div>
  )
}
