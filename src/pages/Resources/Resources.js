import React from 'react'
import './Resources.css'
import ResourceCard from '../../components/ResourceCard/ResourceCard'
import SearchBar from '../../components/SearchBar/SearchBar'

export default function Resources() {
  return (
    <div>
      <div>
        <h3 className="PageTitle">My Resources</h3>
        <SearchBar />
      </div>
      <ResourceCard />
    </div>
  )
}