import React, {useState} from 'react'
import './PetForm.css'
import * as petServices from '../../Utilities/dogs-utilities/dogs-services'

export default function PetForm( {user, setPets }) {

  const [petData, setPetData] = useState({
    name: '',
    breed: '',
    weight: '',
    age: '',
    activity: '',
    description: '',
    medications: '',
    medicalhistory: '',
  });

  async function handleChange(event) {
    const { name, value } = event.target;
    setPetData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function handleSubmit (event) {
    event.preventDefault();
    try {
      const createdPet = await petServices.createNewPet({
        ...petData,
        owner: user._id,
      });

      setPets((prevPets) => [...prevPets, createdPet]);

      setPetData({
        name: '',
        breed: '',
        weight: '',
        age: '',
        activity: '',
        description: '',
        medications: '',
        medicalhistory: '',
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={petData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="breed">Breed:</label>
        <input
          type="text"
          id="breed"
          name="breed"
          value={petData.breed}
          onChange={handleChange}
          required
        />

        <label htmlFor="weight">Weight (in lbs):</label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={petData.weight}
          onChange={handleChange}
          required
        />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={petData.age}
          onChange={handleChange}
          required
        />

        <label htmlFor="activity">Activity:</label>
        <input
          type="text"
          id="activity"
          name="activity"
          value={petData.activity}
          onChange={handleChange}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={petData.description}
          onChange={handleChange}
        ></textarea>

        <label htmlFor="medications">Medications:</label>
        <input
          type="text"
          id="medications"
          name="medications"
          value={petData.medications}
          onChange={handleChange}
        />

        <label htmlFor="medicalhistory">Medical History:</label>
        <input
          type="text"
          id="medicalhistory"
          name="medicalhistory"
          value={petData.medicalhistory}
          onChange={handleChange}
        />

        {/* Rest of the form fields */}

        <button type="submit">Add Pet</button>
      </form>
    </div>
  )
}
