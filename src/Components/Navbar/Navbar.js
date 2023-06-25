import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (

    <nav className='navigation'>

      <Link to='/appointments'>Appointments</Link>
      &nbsp; | &nbsp;
      <Link to='/pets'>Peggts</Link>
      &nbsp; | &nbsp;
      <Link to='/providers'>Providers</Link>
      &nbsp; | &nbsp;
      <Link to='/resources'>Resources</Link>
      
    </nav>
  )
}