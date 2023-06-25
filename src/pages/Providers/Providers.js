import React from 'react'
import './Providers.css'
import SearchBar from '../../Components/SearchBar/SearchBar'
import ProviderCard from '../../Components/ProviderCard/ProviderCard'

export default function Providers() {
  return (
    <div>
      <h3 className="PageTitle">My Providers</h3>
      <SearchBar />
      <ProviderCard />
    </div>
  )
}
