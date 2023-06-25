import React from 'react'
import './Settings.css'
import * as userService from '../../utilities/users-service'

// import Dropdown from '../../Components/Dropdown/Dropdown'
// import SettingsCard from '../../Components/SettingsCard/SettingsCard'

export default function Settings({user, setUser}) {


  function handleLogout() {
    userService.logOut();
    setUser(null)
  }



  return (
    <div>
      <div>
        <h3 className='PageTitle' href= ''>Settings</h3>
        <button href = '' onClick={handleLogout}>Log Out</button>
      </div>
      {/* <Dropdown />
      <SettingsCard /> */}
    </div>
  )
}