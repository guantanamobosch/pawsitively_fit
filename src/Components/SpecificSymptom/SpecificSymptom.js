import React, {useState} from 'react'
import './SpecificSymptom.css'

export default function SpecificSymptom({ symptom, selectedPet }) {
  const [duration, setDuration] = useState('');

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  return (
    <div>
      <p>How long has {selectedPet.name} been experiencing {symptom} for?</p>
      <input
        type="text"
        value={duration}
        onChange={handleDurationChange}
        placeholder="Enter duration"
      />
    </div>
  );
}