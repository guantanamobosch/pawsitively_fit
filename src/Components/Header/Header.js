import React from 'react'
import { Link } from 'react-router-dom'
import SettingsIcon from '@mui/icons-material/Settings'
import MessageIcon from '@mui/icons-material/Message';
import DashboardIcon from '@mui/icons-material/Home';
import PetsIcon from '@mui/icons-material/Pets';
import './Header.css'

export default function Header() {
  return (
    <div className="header">


      <nav className='header-navigation'>
      <h1>{<PetsIcon className="pet-icon" />} Fur Sur</h1>
      <Link to='/dashboard'>{<DashboardIcon className="header-icon" style={{ color: 'black' }} />}</Link>
      <Link to='/messages'>{<MessageIcon className="header-icon" style={{ color: 'black' }} />}</Link>
      <Link to='/settings'>{<SettingsIcon className="header-icon" style={{ color: 'black' }} />}</Link>
   
      </nav>
      
      
      
      <div className="authContainer">
        {/* {user ? (
              <>
                <p>
                  Hello,
                    <span>
                      <b>{user.name}</b>
                    </span>
                  &nbsp; | &nbsp;
                </p>
                <p onClick={handleSignOut}>
                  Sign Out
                </p>
              </>
            ) : (
              <p onClick={handleSignIn}>
                Sign In
              </p>
            )} */}
      </div>
    </div>
  )
}
