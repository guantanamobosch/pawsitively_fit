import React, { useState } from 'react'
import './SearchBar.css'

export default function VetSearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('')

  function handleSearch(event) {
    event.preventDefault()
    onSearch(searchQuery)
  }

  return (
    <div style={{ marginBottom: '5vh' }}>
      {' '}
      <form className="searchBarContainer" onSubmit={handleSearch}>
        <input
          className="searchBar"
          type="text"
          placeholder="Search providers..."
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <button className="searchSubmit" type="submit">
          Search
        </button>
      </form>
    </div>
  )
}

export function ResourcesSearchBar() {

  function handleSearch() {
    console.log('the test is complete')
  }

  return (
    <div style={{ marginBottom: '5vh' }}>
      {' '}
      <form className="searchBarContainer" onSubmit={handleSearch}>
        <input
          className="searchBar"
          type="text"
          placeholder="Search resources..."
        />
        <button className="searchSubmit" type="submit">
          Search
        </button>
      </form>
    </div>
  )
}
