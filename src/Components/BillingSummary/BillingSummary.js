import React, { useState } from 'react';
import './BillingSummary.css';

export default function BillingSummary() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    vet_service: '',
    patient: '',
    guarantor: '',
    email: '',
    balance: '',
    last_payment: '',
    date: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Update the form data with the entered values
    const updatedFormData = {
      vet_service: event.target.vet_service.value,
      patient: event.target.patients.value,
      guarantor: event.target.guarantor.value,
      balance: event.target.balance.value,
      last_payment: event.target.last_payment.value,
      date: event.target.date.value
    };

    // Set the updated form data
    setFormData(updatedFormData);
    // Set submitted flag to true
    setSubmitted(true);
  };

  return (
    <>
      {submitted ? (
        <div className="billing-card">
          <h3>Billing Summary</h3>
          <p>Name: {formData.vet_service}</p>
          <p>Patient: {formData.patient}</p>
          <p>Guarantor: {formData.guarantor}</p>
          <p>Amount Due: {formData.balance}</p>
          <p>Last paid: {formData.last_payment} on {formData.date}</p>
        </div>
      ) : (
        <div className="billing-form">
          <h3>Billing Summary</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="vet_service">Veterinary Office:</label>
              <input type="text" id="vet_service" name="vet_service" required />
            </div>
            <div>
              <label htmlFor="patient">Patient:</label>
              <input type="text" id="patients" name="patients" required />
            </div>
            <div>
              <label htmlFor="guarantor">Guarantor:</label>
              <input type="text" id="guarantor" name="guarantor" required />
            </div>
            <div>
              <label htmlFor="balance">Amount Due:</label>
              <input type="number" id="balance" name="balance" required />
            </div>
            <div>
              <label htmlFor="last_payment">Last Paid:</label>
              <input type="number" id="last_payment" name="last_payment" required />
            </div>
            <div>
              <label htmlFor="date">Date of Last Payment:</label>
              <input type="number" id="date" name="date" required />
            </div>
            <button type="submit">Save</button>
          </form>
        </div>
      )}
    </>
  );
}
