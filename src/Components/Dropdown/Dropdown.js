import React from 'react'
import './Dropdown.css'

export default function Dropdown() {
  return (
<div className="dropdown">
  <select>
    <option value="option1">My Account</option>
    <option value="option2">Notifications</option>
    <option value="option3">Help Center</option>
  </select>
</div>

  )
}
