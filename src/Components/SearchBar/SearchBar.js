import React, { useState } from 'react'
import './SearchBar.css'

export default function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('')

  function handleSearch(event) {
    event.preventDefault()
    onSearch(searchQuery)
  }

  return (
    <div style={{marginBottom: '5vh'}}>
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
