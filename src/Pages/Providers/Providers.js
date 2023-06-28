import React, { useState, useEffect } from 'react'
import './Providers.css'
import SearchBar from '../../Components/SearchBar/SearchBar'
import ProviderCard from '../../Components/ProviderCard/ProviderCard'
import VetForm from '../../Components/VetForm/VetForm'
import * as vetServices from '../../utilities/vets-utilities/vets-services'

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
        return response.blob();
      } else {
        throw new Error('Error occurred');
      }
    })
    .then((blob) => {
      const imageUrl = URL.createObjectURL(blob);
      return imageUrl;
    })
    .catch((error) => {
      console.error('Error occurred:', error);
    });
}

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
      {vets.map((vet, index) => (
        <ProviderCard key={index} vet={vet} imageUrl={grabImageUrl()} />
      ))}
    </div>
  )
}
