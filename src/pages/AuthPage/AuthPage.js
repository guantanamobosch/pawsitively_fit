import React from 'react'
import './AuthPage.css'
import SignUpForm from '../../Components/AuthForm/SignUpForm'
// import LogInForm from '../../Components/AuthForm/LogInForm'


export default function AuthPage() {
  return (
    <div>

    <h1>
      AuthPage
    </h1>
    

    <div>
    <SignUpForm />
  </div>

  {/*<div>
    <LogInForm />
  </div> */}

  </div>
)
}

