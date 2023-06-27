import React from 'react'
import './ResultsList.css'
import ResultsListItem from '../ResultsListItem/ResultsListItem'

export default function ResultsList({aiResponse}) {
  return (
    <div>
      <p>{aiResponse}</p>
      <ResultsListItem />
    </div>
  )
}
