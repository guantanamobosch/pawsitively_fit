import React from 'react'
import './Settings.css'
import Dropdown from '../../Components/Dropdown/Dropdown'
import SettingsCard from '../../Components/SettingsCard/SettingsCard'

export default function Settings() {
  return (
    <div>
      <div>
        <h3 className='PageTitle'>Settings</h3>
        <a>Log out</a>
      </div>
      <Dropdown />
      <SettingsCard />
    </div>
  )
}