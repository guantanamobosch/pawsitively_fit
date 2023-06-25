import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {

  function handleLogout() {
    userService.logOut();
    setUser(null)
  }




  return (
<div>
  <button>
    red
  </button>
</div>
  )
}
