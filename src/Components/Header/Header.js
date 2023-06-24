import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <div className="header">


      <nav className='header-navigation'>
      <h1>Fursur</h1>
      <Link to='/dashboard'>Dashboard</Link>
      <Link to='/messages'>Messages</Link>
      <Link to='/settings'>Settings</Link>
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
