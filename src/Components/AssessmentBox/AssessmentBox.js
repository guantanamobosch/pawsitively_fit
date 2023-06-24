import React, { useState } from 'react'
import './AssessmentBox.css'
import MiniPetCard from '../MiniPetCard/MiniPetCard'
import SearchBar from '../SearchBar/SearchBar'
import SymptomsCard from '../SymptomCard/SymptomCard'
import ResultsList from '../ResultsList/ResultsList'

export default function AssessmentBox() {
  const [loading, setLoading] = useState(true)

  return (
    <div>
      {/* Assessment Page 1 */}
        {/* <p><b>Disclaimer: </b>this is not an official medical diagnosis.<br /><br />
          <p>Please consult with your pet’s medical provider for any official recommendations.</p> */}
      {/* Assessment Page 2 */}
        {/* Which pet are you assessing? */}
        {/* <MiniPetCard /> */}
        {/* <a>I'm assessing another dog</a> */}
      {/* Assessment Page 3 */}
        {/* <p>What symptoms is your pet experiencing?</p> */}
        {/* <SearchBar /> */}
        {/* <SymptomsCard /> */}
          {/* SymptomCard will populate as user enters  */}
      {/* Assessment Page 4 */}
      {/* {loading ? (
        <p>
          We’re finalizing your results.
          <br />
          <br />
          <b>Remember, this is not an official medical diagnosis.</b> Consult
          your pet’s medical provider for official recommendations.
        </p>
      ) : (
        <>
          <MiniPetCard />
          <ResultsList />
        </>
      )} */}
    </div>
  )
}
