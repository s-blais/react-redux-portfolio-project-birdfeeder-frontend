import React from 'react'
import { connect } from 'react-redux'

const BirdShow = (props) => {

  return (
    <div>
      <h1>Bird Detail</h1>
      <img src={props.bird.attributes.image_url} 
        alt={props.bird.attributes.name} />
      <br />
      <b>{props.bird.attributes.name}</b>
    </div>
  )

}

const mapStateToProps = (state, ownProps) => {
  const bird = state.birds.find(bird => bird.id == ownProps.match.params.birdId)
  if (bird) {
    return { bird }
  } else {
    return { bird: {} }
  }
}

export default connect(mapStateToProps)(BirdShow)