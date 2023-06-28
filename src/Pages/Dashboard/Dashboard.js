import React, { useState } from 'react';
import './Dashboard.css';

export default function Dashboard({user}) {
  const [loggedInUser, setLoggedInUser] = useState(user.username);
    console.log(user.username)


  return (
    <div>
      {loggedInUser ? (
        <h1 className="welcome-message">Welcome Back, {loggedInUser}</h1>
      ) : (
        <h1 className="welcome-message">Welcome to the Dashboard</h1>
      )}

      <div className="card-container1">
        <h1>Upcoming Vet Visit</h1>
        <h3>GA Pet Clinic</h3>
        <p>Friday - July 14, 2023 </p>
        <button>Change</button>
      </div>

      <div className="card-container2">
        <h1>Billing Summary</h1>
        <h3>Payment Due : 06/28/2023</h3>
        <p>Amount : $267.00</p>
        <button>Pay Bill</button>
      </div>

      <div className="card-container3">
        <h1>New Message</h1>
        <h2>Dr Vanessa Campbell</h2>
        <p>Hey Hannah,</p>
        <p>If you notice Patrick eating less or refusing to ......</p>
        <button>Reply</button>
      </div>
    </div>
  );
}