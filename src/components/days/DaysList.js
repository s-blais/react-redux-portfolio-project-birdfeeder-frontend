import React from 'react'
import DayDisplay from './DayDisplay'
import { Link } from 'react-router-dom'

const DaysList = props => {
  return (
    <div>
      <h2>Days Recorded</h2>
      <Link to='/days/new'>Record a day's sightings</Link>
      { props.days.map(day => <DayDisplay day={day} key={day.id} />)}
    </div>
  )
}

export default DaysList