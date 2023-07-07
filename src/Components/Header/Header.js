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
      <nav className="header-navigation">
        <div className="pet-title-container">
          <Link to="/dashboard" className="pet-title">
            <h1>{<Pets style={{fontSize: '5vh'}} />} petDOC</h1>
          </Link>
        </div>
        <div className="header-icon-container">
          <Link to="/dashboard" className="header-icon">
            {<Home style={{fontSize: '5vh'}} />}
          </Link>
          <Link to="/messages" className="header-icon">
            {<Message style={{fontSize: '5vh'}} />}
          </Link>
          <Link to="/settings" className="header-icon">
            {<Settings style={{fontSize: '5vh'}} />}
          </Link>
        </div>
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
