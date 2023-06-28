import React, { useState, useEffect } from 'react'
import './AssessmentBox.css'
import MiniPetCard from '../MiniPetCard/MiniPetCard'
import SymptomForm from '../SymptomForm/SymptomForm'
import SymptomCard from '../SymptomCard/SymptomCard'
import SpecificSymptom from '../SpecificSymptom/SpecificSymptom'
import ResultsList from '../ResultsList/ResultsList'
import { useLocation } from 'react-router-dom'
import * as petServices from '../../utilities/dogs-utilities/dogs-services'

export default function AssessmentBox({
  setSelectedPet,
  selectedPet,
  handleSelectedPetCount,
  symptoms,
  setSymptoms,
  loading,
  currentSymptomIndex,
  aiResponse,
  symptomDurations,
  setSymptomDurations,
}) {
  const [pets, setPets] = useState([])

  const page = useLocation().pathname

  async function fetchPets() {
    try {
      const fetchedPets = await petServices.indexPets()
      setPets(fetchedPets)
    } catch (error) {
      console.error('Error fetching pets:', error)
    }
  }

  useEffect(() => {
    fetchPets()
  }, [])

  // Function to handle selecting a pet
  function selectPet(pet) {
    setSelectedPet(pet)
    console.log(selectedPet)
    handleSelectedPetCount(1) // Update the selectedPetCount to 1
  }

  // Function to handle deselecting a pet
  function deselectPet() {
    setSelectedPet(null)
    handleSelectedPetCount(0) // Update the selectedPetCount to 0
  }

  // Function to handle submitting the symptom
  function handleSymptomSubmit(symptom) {
    setSymptoms([...symptoms, symptom])
    setSymptomDurations([...symptomDurations, '']) // Initialize the duration state for the new symptom
  }

  // Function to handle removing a symptom from the symptoms array
  function handleSymptomRemove(index) {
    const updatedSymptoms = [...symptoms]
    updatedSymptoms.splice(index, 1)
    setSymptoms(updatedSymptoms)
  }

  // Function to handle updating the duration state for a specific symptom
  function handleDurationChange(index, duration) {
    const updatedDurations = [...symptomDurations]
    updatedDurations[index] = duration
    setSymptomDurations(updatedDurations)
  }

  console.log(selectedPet)

  return (
    <div className="AssessmentBox">
      {/* Assessment Page 1 */}
      {page === '/assessment/1' && (
        <>
          <p>
            <b>Disclaimer: </b>this is not an official medical diagnosis.
            <br />
            <br />
          </p>
          <p>
            Please consult with your pet’s medical provider for any official
            recommendations.
          </p>
        </>
      )}
      {/* Assessment Page 2 */}
      {page === '/assessment/2' && (
        <>
          <p>Which pet are you assessing?</p>

          <div className="MiniPetCardContainer">
            {pets.map((pet, index) => (
              <MiniPetCard
                pet={pet}
                key={index}
                selectedPet={selectedPet}
                selectPet={selectPet}
                deselectPet={deselectPet}
              />
            ))}
            <button>I'm assessing another dog</button>
          </div>
        </>
      )}
      {/* Assessment Page 3 */}
      {page === '/assessment/3' && (
        <>
          <p>
            What symptoms is <i>{selectedPet.name}</i> experiencing?
          </p>
          <SymptomForm onSymptomSubmit={handleSymptomSubmit} />
          <div className="SymptomCardContainer">
            {/* SymptomCard will populate as user enters  */}
            {symptoms.map((symptom, index) => (
              <SymptomCard
                symptom={symptom}
                key={index}
                onSymptomRemove={handleSymptomRemove}
              />
            ))}
          </div>
        </>
      )}
      {/* Assessment Page 4 */}
      {page === '/assessment/4' && (
        <>
          <SpecificSymptom
            selectedPet={selectedPet}
            symptom={symptoms[currentSymptomIndex]}
            duration={symptomDurations[currentSymptomIndex]}
            onDurationChange={(duration) =>
              handleDurationChange(currentSymptomIndex, duration)
            }
          />
        </>
      )}
      {/* Assessment Page 5 */}
      {page === '/assessment/5' && (
        <>
          <p>
            We’re finalizing your results.
            <br />
            <br />
            <b>Remember, this is not an official medical diagnosis.</b> Consult
            your pet’s medical provider for official recommendations.
          </p>
        </>
      )}
      {/* Assessment Page 6 */}
      {page === '/assessment/6' &&
        (loading ? (
          <>
            <p>loading your results...</p>
          </>
        ) : (
          <>
            <p>{selectedPet.name}</p>
            <ResultsList aiResponse={aiResponse} />
          </>
        ))}
    </div>
  )
}
