import React from 'react';
import { Link } from 'react-router-dom';
import AppointmentsIcon from '@mui/icons-material/CalendarMonth';
import PetsIcon from '@mui/icons-material/Pets';
import ProvidersIcon from '@mui/icons-material/AccountCircle';
import ResourcesIcon from '@mui/icons-material/AutoStories';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/appointments" className="navbar-link">
        <div className="navbar-icon">
          <AppointmentsIcon style={{ color: 'black' }} />
        </div>
        <span className="navbar-label">Appointments</span>
      </Link>
      <span className="navbar-separator"></span>
      <Link to="/pets" className="navbar-link">
        <div className="navbar-icon">
          <PetsIcon style={{ color: 'black' }} />
        </div>
        <span className="navbar-label">Pets</span>
      </Link>
      <span className="navbar-separator"></span>
      <Link to="/providers" className="navbar-link">
        <div className="navbar-icon">
          <ProvidersIcon style={{ color: 'black' }} />
        </div>
        <span className="navbar-label">My Vets</span>
      </Link>
      <span className="navbar-separator"></span>
      <Link to="/resources" className="navbar-link">
        <div className="navbar-icon">
          <ResourcesIcon style={{ color: 'black' }} />
        </div>
        <span className="navbar-label">Resources</span>
      </Link>
    </nav>
  );
}
