import React from 'react'
import { Link } from 'react-router-dom'

 const Nav = () => {
  return (
    <div>
      <ul style={{listStyle: 'none'}}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/birds'>Birds Library</Link></li>
        <li><Link to='/days'>Days Recorded</Link></li>
      </ul>
    </div>
  )
}

export default Nav