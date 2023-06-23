import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className="Header">
      <div className="TitleContainer">
        <h1>FURSUR</h1>
      </div>
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
