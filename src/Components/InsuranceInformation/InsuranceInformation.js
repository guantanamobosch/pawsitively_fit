import React, { useState } from 'react';
import './InsuranceInformation.css';

export default function InsuranceInformation() {
  
const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    provider: '',
    address: '',
    phone: '',
    member_id: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Get the entered values from the form
    const provider = event.target.elements.provider.value;
    const address = event.target.elements.address.value;
    const phone = event.target.elements.phone.value;
    const member_id = event.target.elements.member_id.value;
  
    // Update the form data with the entered values
    const updatedFormData = {
      provider,
      address,
      phone,
      member_id
    };
  
    // Set the updated form data
    setFormData(updatedFormData);
  
    // Set submitted flag to true
    setSubmitted(true);
  };
  
  return (
    <>
      {submitted ? (
        <div className="insurance-card">
          <h3>Insurance Information</h3>
          <p>Provider: {formData.provider}</p>
          <p>Address: {formData.address}</p>
          <p>Phone: {formData.phone}</p>
          <p>Member ID: {formData.member_id}</p>
        </div>
      ) : (
        <div className="insurance-form">
          <h3>Insurance Information</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="provider">Provider:</label>
              <input type="text" id="provider" name="provider" required />
            </div>
            <div>
              <label htmlFor="address">Address:</label>
              <input type="text" id="address" name="address" required />
            </div>
            <div>
              <label htmlFor="phone">Phone:</label>
              <input type="number" id="phone" name="phone" required />
            </div>
            <div>
              <label htmlFor="memeber_id">Member ID:</label>
              <input type="text" id="member_id" name="member_id" required />
            </div>

            <button type="submit">Save</button>
          </form>
        </div>
      )}
    </>
  );
}
