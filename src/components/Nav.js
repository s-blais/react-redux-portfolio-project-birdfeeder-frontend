import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <Link to='/'>Home</Link><br />
        <Link to='/birds'>Birds Library</Link><br />
        <Link to='/days'>Days Recorded</Link><br />
    </div>
  )
}

export default Nav