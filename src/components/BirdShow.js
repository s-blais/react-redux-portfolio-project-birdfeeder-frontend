import React from 'react'
import { connect } from 'react-redux'

const BirdShow = (props) => {

  const url = props.bird.attributes.image_url.replace("bird_illustration", "nas_bird_teaser_illustration")

  return (
    <div>
      <h1>Bird Detail</h1>
      <img src={url} 
        alt={props.bird.attributes.name} />
      <br />
      <b>{props.bird.attributes.name}</b>
    </div>
  )

}

const mapStateToProps = (state, ownProps) => {
  // tried the below to resolve the nested/params refresh issue, but no good (see also BirdsIndex)
  // const bird = state.birds.find(bird => bird.id.toString() === ownProps.birdId.match.params.birdId)
  const bird = state.birds.find(bird => bird.id.toString() === ownProps.match.params.birdId)
  if (bird) {
    return { bird }
  } else {
    return { bird: {} }
  }
}

export default connect(mapStateToProps)(BirdShow)