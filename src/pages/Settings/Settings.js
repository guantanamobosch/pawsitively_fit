import React from 'react'
import './Settings.css'
import Dropdown from '../../components/Dropdown/Dropdown'
import SettingsCard from '../../components/SettingsCard/SettingsCard'

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