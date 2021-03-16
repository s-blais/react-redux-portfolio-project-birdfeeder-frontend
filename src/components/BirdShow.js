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
      <h3>{props.bird.attributes.name}</h3>
      <h5><a href={`${props.bird.attributes.audubon_url}`}  rel="noreferrer">More info from Audubon.org</a></h5>

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