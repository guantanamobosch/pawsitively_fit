import React from 'react'
import { Link } from 'react-router-dom'
import Settings from '@mui/icons-material/Settings'
import Message from '@mui/icons-material/Message'
import Home from '@mui/icons-material/Home'
import Pets from '@mui/icons-material/Pets'
import './Header.css'

export default function Header() {
  return (
    <div className="header">


      <nav className='header-navigation'>
      <h1>{<Pets className="pet-icon" />} petDOC</h1>
      <Link to='/dashboard'>{<Home className="header-icon" style={{ color: 'black' }} />}</Link>
      <Link to='/messages'>{<Message className="header-icon" style={{ color: 'black' }} />}</Link>
      <Link to='/settings'>{<Settings className="header-icon" style={{ color: 'black' }} />}</Link>
   
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