import React, { useState, useEffect } from 'react';
import './Dashboard.css';

export default function Dashboard() {
  const [loggedInUser, setLoggedInUser] = useState('');

  useEffect(() => {
    const fetchLoggedInUser = async () => {
      try {
        const response = await fetch('');
        if (response.ok) {
          const user = await response.json();
          setLoggedInUser(user.username);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchLoggedInUser();
  }, []);

  return (
    <div>
      {loggedInUser ? (
        <h1 className="welcome-message">Welcome Back, {loggedInUser}</h1>
      ) : (
        <h1 className="welcome-message">Welcome to the Dashboard</h1>
      )}

      <div className="card-container1">
        <h1>Card 1</h1>
        <p>This is the description for Card 1.</p>
        <button>Button 1</button>
      </div>

      <div className="card-container2">
        <h1>Card 2</h1>
        <p>This is the description for Card 2.</p>
        <button>Button 2</button>
      </div>

      <div className="card-container3">
        <h1>Card 3</h1>
        <p>This is the description for Card 3.</p>
        <button>Button 3</button>
      </div>
    </div>
  );
}
