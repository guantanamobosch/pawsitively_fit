import React, { useState, useEffect } from 'react'
import './Providers.css'
import SearchBar from '../../Components/SearchBar/SearchBar'
import ProviderCard from '../../Components/ProviderCard/ProviderCard'
import VetForm from '../../Components/VetForm/VetForm'
import * as vetServices from '../../Utilities/vets-utilities/vets-services'

export default function Providers({ user }) {
  const [vets, setVets] = useState([])
  const [showVetForm, setShowVetForm] = useState(false)

  async function fetchVets() {
    try {
      const fetchedVets = await vetServices.indexVets()
      setVets(fetchedVets)
    } catch (error) {
      console.error('Error fetching vets:', error)
    }
  }

  useEffect(() => {
    fetchVets()
  }, [])

  return (
    <div>
      <h3 className="PageTitle">My Providers</h3>
      <SearchBar />

      {showVetForm ? (
        <>
          <button onClick={() => setShowVetForm(false)}>Close Form</button>
          <VetForm setVets={setVets} user={user} />
        </>
      ) : (
        <button onClick={() => setShowVetForm(true)}>Show Form</button>
      )}
      {vets.map((vet) => (
        <ProviderCard key={vet._id} vet={vet} />
      ))}
    </div>
  )
}
