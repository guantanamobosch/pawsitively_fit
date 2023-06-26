import React, { useState } from 'react';
import './SettingsCard.css';

export default function SettingsCard() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Get form values
    const name = event.target.name.value;
    const address = event.target.address.value;
    const phone = event.target.phone.value;
    const email = event.target.email.value;

    // Display submitted information
    document.getElementById('nameDisplay').textContent = `Name: ${name}`;
    document.getElementById('addressDisplay').textContent = `Address: ${address}`;
    document.getElementById('phoneDisplay').textContent = `Phone: ${phone}`;
    document.getElementById('emailDisplay').textContent = `Email: ${email}`;

    // Set submitted flag to true
    setSubmitted(true);
  };

  return (
    <>
      {submitted ? (
        <div className="card">
          <h3>Submitted Information</h3>
          <p id="nameDisplay"></p>
          <p id="addressDisplay"></p>
          <p id="phoneDisplay"></p>
          <p id="emailDisplay"></p>
        </div>
      ) : (
        <div className="card">
          <h3>Contact Information</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="address">Address:</label>
              <input type="text" id="address" name="address" required />
            </div>
            <div>
              <label htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <button type="submit">Save</button>
          </form>
        </div>
      )}
    </>
  );
}
