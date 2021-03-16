import React from 'react'
import { Link } from 'react-router-dom'

const cardStyle = {
  width: "140px",
  borderRadius: "10px",
  margin: "5px",
  padding: "10px",
  textAlign: "center",
  backgroundColor: "#e0e0e0",
  display: "inline-block"
}

const imageStyle= {
  maxWidth: "130px",
  maxHeight: "150px",
  borderRadius: "5px"
}

export default function BirdCard(props) {

  const url = props.bird.attributes.image_url.replace("bird_illustration", "nas_bird_teaser_illustration")

  return (
    <Link to={`/birds/${props.bird.id}`}>
      <div style={cardStyle}>
        <img src={url} 
          style={imageStyle} 
          alt={props.bird.attributes.name} />
        <br />
        <b>{props.bird.attributes.name}</b>
      </div>
    </Link>
  )

}