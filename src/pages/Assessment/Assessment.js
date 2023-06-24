import React, { useState } from 'react'
import './Assessment.css'
import AssessmentBox from '../../components/AssessmentBox/AssessmentBox'
import CompletionBar from '../../components/CompletionBar/CompletionBar'
import PageNav from '../../components/PageNav/PageNav'

export default function Assessment() {
  const [beginTest, setBeginTest] = useState(false)

  return (
    <div>
      <h3 className="pageTitle">Symptom Assessment</h3>
      {/* when test is finished and results are listing, show "Report" */}
        {/* <h3>Report</h3> */}
      {/* if test has not begun, show assessment intro */}
      {/* {beginTest ? (
        <>
          <div>
            <img alt="clock icon"></img>
            <p>2-5 minutes</p>
          </div>
          <p>
            This guided questionnaire will ask you about your pet’s symptoms and
            assess any possible conditions.
          </p>
          <button>Start Assessment</button>
        </>
      ) : (
        <>
          <CompletionBar />
          <AssessmentBox />
          <PageNav />
            {/* This is the pagination footer that navigates the user to the next page of the assessment */}
              {/* navigating back and forth must also trigger movement on the completion bar */}
        {/* </>
      )} */}
    </div>
  )
}
