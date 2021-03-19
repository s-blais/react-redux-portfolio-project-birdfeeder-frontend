import React from 'react'
import BirdCard from './BirdCard'
import { Link } from 'react-router-dom'

function BirdsLibrary(props) {
  return (
    <div>
      <h1>Birds Library</h1>
      <Link to='/birds/new'>Add a bird to the library</Link>
      <br /><br />
      { props.birds.map(bird => <BirdCard bird={bird} key={bird.id} />)}
    </div>
  )
}

export default BirdsLibrary