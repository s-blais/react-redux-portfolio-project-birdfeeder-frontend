import React from 'react'

export default function BirdCard(props) {

  return (
    <div>
      <b>{props.bird.attributes.name}</b>
    </div>
  )

}