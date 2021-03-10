import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <ul style={{listStyle: 'none'}}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/birds'>Birds Library</Link></li>
        <li><Link to='/days'>Sightings by Day</Link></li>
      </ul>
    </div>
  )
}