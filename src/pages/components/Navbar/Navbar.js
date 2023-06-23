import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (

    <nav>
      <div>Navbar</div>
      <Link to='/appointments'>Appointments</Link>
      <Link to='/pets'>Pets</Link>
      <Link to='/providers'>Providers</Link>
      <Link to='/resources'>Resources</Link>
    </nav>
  )
}