import React from 'react'
import { Link } from 'react-router-dom'

const BirdCard = (props) => {

  const url = props.bird.attributes.image_url.replace("bird_illustration", "nas_bird_teaser_illustration")

  return (
    <Link to={`/birds/${props.bird.id}`}>
      <div className="bird-card">
        <img src={url} 
          alt={props.bird.attributes.name} />
        <br />
        <b>{props.bird.attributes.name}</b>
      </div>
    </Link>
  )
}

export default BirdCard