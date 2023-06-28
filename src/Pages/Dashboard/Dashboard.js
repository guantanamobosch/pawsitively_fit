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
    </div>
  );
}
