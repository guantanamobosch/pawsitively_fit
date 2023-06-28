import React, { useState, useEffect } from 'react'
import './Providers.css'
import SearchBar from '../../Components/SearchBar/SearchBar'
import ProviderCard from '../../Components/ProviderCard/ProviderCard'
import VetForm from '../../Components/VetForm/VetForm'
import * as vetServices from '../../utilities/vets-utilities/vets-services'

export default function Providers({ user }) {
  const [vets, setVets] = useState([])
  const [showVetForm, setShowVetForm] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [showModal, setShowModal] = useState(false)

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

  async function grabImageUrl() {
    return fetch('https://api.api-ninjas.com/v1/randomimage?category=city', {
      method: 'GET',
      headers: {
        'X-Api-Key': `${process.env.REACT_APP_API_NINJAS_KEY}`,
        Accept: 'image/jpg',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.blob()
        } else {
          throw new Error('Error occurred')
        }
      })
      .then((blob) => {
        const imageUrl = URL.createObjectURL(blob)
        return imageUrl
      })
      .catch((error) => {
        console.error('Error occurred:', error)
      })
  }

  // searching for vets
  function searchVets(query) {
    const queryLowerCase = query.toLowerCase().trim()

    const filteredVets = vets.filter((vet) => {
      const vetName = vet.name.toLowerCase()
      return vetName.includes(queryLowerCase)
    })

    setSearchResults(filteredVets)
  }

  return (
    <div>
      <div className="PageTitleContainer">
        <h3 className="PageTitle">My Vets</h3>

        {showModal ? (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => setShowModal(false)}>
                &times;
              </span>
              <VetForm setVets={setVets} user={user} />
            </div>
          </div>
        ) : (
          <p onClick={() => setShowModal(true)} className="clickable">
            <u>Add New Vet</u>
          </p>
        )}
      </div>

      <SearchBar onSearch={searchVets} />
      <div className="vetCardContainer">
        {searchResults.length > 0 ? (
          searchResults.map((vet, index) => (
            <ProviderCard key={index} vet={vet} imageUrl={grabImageUrl()} />
          ))
        ) : (
          <>
            {searchResults.length === 0 ? (
              <p>No vets found.</p>
            ) : (
              vets.map((vet, index) => (
                <ProviderCard key={index} vet={vet} imageUrl={grabImageUrl()} />
              ))
            )}
          </>
        )}
      </div>
    </div>
  )
}
