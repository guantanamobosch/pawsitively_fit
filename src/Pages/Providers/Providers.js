import React, { useState, useEffect } from 'react';
import './Providers.css';
import SearchBar from '../../Components/SearchBar/SearchBar';
import ProviderCard from '../../Components/ProviderCard/ProviderCard';
import VetForm from '../../Components/VetForm/VetForm';
import * as vetServices from '../../utilities/vets-utilities/vets-services';

export default function Providers({ user }) {
  const [vets, setVets] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Fetch all vets belonging to the user
  async function fetchVets() {
    try {
      const fetchedVets = await vetServices.indexVets();
      setVets(fetchedVets);
      setSearchResults(fetchedVets); // Set search results to all vets initially
    } catch (error) {
      console.error('Error fetching vets:', error);
    }
  }

  useEffect(() => {
    fetchVets();
  }, []);

  // Fetch a random image URL
  async function grabImageUrl() {
    try {
      const response = await fetch(
        'https://api.api-ninjas.com/v1/randomimage?category=city',
        {
          method: 'GET',
          headers: {
            'X-Api-Key': process.env.REACT_APP_API_NINJAS_KEY,
            Accept: 'image/jpg',
          },
        }
      );
      if (response.ok) {
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        return imageUrl;
      } else {
        throw new Error('Error occurred');
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  }

  // Search for vets
  function searchVets(query) {
    const queryLowerCase = query.toLowerCase().trim();

    const filteredVets = vets.filter((vet) => {
      const vetName = vet.name.toLowerCase();
      return vetName.includes(queryLowerCase);
    });

    setSearchResults(filteredVets);
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
              <VetForm setVets={setVets} user={user} setShowModal={setShowModal} />
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
          <p>No vets found.</p>
        )}
      </div>
    </div>
  );
}