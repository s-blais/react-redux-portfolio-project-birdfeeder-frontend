import React from 'react'
import BirdCard from './BirdCard'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class BirdsIndex extends React.Component {
  render() {  
    return (
      <div>
        <h1>Birds Library</h1>
        <Link to='/birds/new'>Add a bird to the library</Link>
        <br /><br />
        { this.props.birds.map(bird => <BirdCard bird={bird} key={bird.id} />)}
      </div>
    )
  }
}

const mapStateToProps = state => { 
  return { birds: state.birds }
}

export default connect(mapStateToProps)(BirdsIndex)