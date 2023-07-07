import React from 'react'
import { Link } from 'react-router-dom'

import './Resources.css'

// Material UI imports
import { Breadcrumbs } from '@mui/material'
import { ResourcesSearchBar } from '../../Components/SearchBar/SearchBar'

export default function Resources() {
  return (
    <div className="resources-page">
      <Breadcrumbs>
        <Link underline="hover" color="inherit" to="/dashboard">
          <p>Home</p>
        </Link>
        <p>Resources</p>
      </Breadcrumbs>
      <div>
        <h3 className="PageTitle" style={{marginBottom: '2vh'}}>My Resources</h3>
      </div>

      <ResourcesSearchBar />

      <div className="resources-card-container">
        <Link to="/assessment">
          <div className='resources-card'>
            <h3>Symptom Assessment</h3>
          </div>
        </Link>
        <Link to="/resources/breed-guide">
          <div className='resources-card'>
            <h3>Breed Guide</h3>
          </div>
        </Link>
        <div className='resources-card'>
          <h3>Pet Training</h3>
        </div>
        <div className='resources-card'>
          <h3>Pet Travel</h3>
        </div>
        <div className='resources-card'>
          <h3>Pet Nutrition</h3>
        </div>
        <div className='resources-card'>
          <h3>Pet Shelters</h3>
        </div>
      </div>
    </div>
  )
}
