import { signUp } from '../../utilities/users-utilities/users-service';
import React, { useState } from 'react';
import './SignUpForm.css';

export default function SignUpForm({ setUser, onCancel }) {
  const [formState, setFormState] = useState({
    email: '',
    username: '',
    password: '',
    confirm: '',
    error: ''
  });

  const handleCancelButtonClick = () => {
    if (onCancel) {
      onCancel();
    }
  }

  function handleChange(evt) {
    setFormState({
      ...formState,
      [evt.target.name]: evt.target.value,
      error: ''
    });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const formData = { ...formState };
      delete formData.confirm;
      delete formData.error;
      const user = await signUp(formData);
      setUser(user);
    } catch (err) {
      setFormState({
        ...formState,
        error: 'Sign up Failed - Please Try Again'
      });
    }
  }

  const disable = formState.password !== formState.confirm;

  return (
    <div className="form-container">
      <div className="signup-form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email*</label>
            <input type="email" name="email" value={formState.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Username*</label>
            <input type="text" name="username" value={formState.username} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Password*</label>
            <input type="password" name="password" value={formState.password} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Confirm Password*</label>
            <input type="password" name="confirm" value={formState.confirm} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <div className="checkbox-group">
              <input type="checkbox" name="terms" id="terms" />
              <label htmlFor="terms" className="checkbox-label">I have read and agree to the Terms &amp; Conditions</label>
            </div>
          </div>
          <div className="form-group">
            <div className="checkbox-group">
              <input type="checkbox" name="receiveUpdates" id="receiveUpdates" />
              <label htmlFor="receiveUpdates" className="checkbox-label">I want to receive communications, including important updates and promotions.</label>
            </div>
          </div>
          <div className="button-group">
            <button className="signup-btn" type="submit" disabled={disable}>Sign Up</button>
            <button className="cancel-btn" onClick={handleCancelButtonClick}>Cancel</button>
          </div>
        </form>
      </div>
      <p className="error-message">&nbsp;{formState.error}</p>
    </div>
  );
}
