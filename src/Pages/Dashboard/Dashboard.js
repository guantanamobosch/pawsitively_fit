import React from 'react'
import './Dashboard.css'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import ReceiptIcon from '@mui/icons-material/Receipt'
import { Link } from 'react-router-dom'

export default function Dashboard({ user }) {
  console.log(user.username)

  return (
    <div className='dashboard-page'>
      <div className="page-title">
        {user.username ? (
          <h3>
            WELCOME BACK,{' '}
            <span style={{ textTransform: 'uppercase' }}>{user.username}</span>!
          </h3>
        ) : (
          <h3>Welcome to the Dashboard</h3>
        )}
      </div>
      <div className="dashboard-card-container">
        <p className="dashboard-header">Upcoming Vet Visit</p>
        <p className="dashboard-header">Billing Summary</p>
        <div className="dashboard-card">
          <div className="dashboard-card-header">
            <LocalHospitalIcon style={{ fontSize: '4vh' }} />
            <div className="dashboard-card-subheader">
              <p>
                <b>GA Pet Clinic</b>
              </p>
              <p>Fri., July 14, 2023 </p>
            </div>
          </div>
          <button className="formSubmit">CHANGE</button>
        </div>

        <div className="dashboard-card">
          <div className="dashboard-card-header">
            <ReceiptIcon style={{ fontSize: '4vh' }} />
            <div className="dashboard-card-subheader">
              <p>Due: 06/28/2023</p>
              <p>
                <b>$267.00</b>
              </p>
            </div>
          </div>
          <button className="formSubmit">PAY BILL</button>
        </div>
      </div>

      <p>New Message</p>

      <div className="dashboard-card new-message-box">
        <h3>
          <b>Dr. Vanessa Campbell</b>
        </h3>
        <div>
          <p>"Hey Hannah,</p>
          <p>If you notice Patrick eating less or refusing to ......"</p>
        </div>
        <button className="formSubmit">Reply</button>
      </div>

      <div className='dashboard-card symptom-box'>
        <h3>Symptom Assessment</h3>
        <Link to="/assessment">
          <button className='formSubmit'>START</button>
        </Link>
      </div>
    </div>
  )
}
