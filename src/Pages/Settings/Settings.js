import React from 'react'
import './Settings.css'
import * as userService from '../../utilities/users-utilities/users-service'


import Dropdown from '../../Components/Dropdown/Dropdown';
import SettingsCard from '../../Components/SettingsCard/SettingsCard';
import BillingSummary from '../../Components/BillingSummary/BillingSummary';
import InsuranceInformation from '../../Components/InsuranceInformation/InsuranceInformation'

export default function Settings({ user, setUser }) {
  function handleLogout() {
    userService.logOut();
    setUser(null);
  }

  return (
    <div className='setings'>
      <div className="PageTitleContainer">
        <h3 className="PageTitle">Settings</h3>
        <button onClick={handleLogout}>Log Out</button>
      </div>
      <Dropdown />
      <SettingsCard />
      <BillingSummary />
      <InsuranceInformation />
      
    </div>
  );
}
