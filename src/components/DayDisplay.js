import React from 'react'

export default function DayDisplay(props) {

  return (
    <div>
      <b>{props.day.attributes.date}</b>
    </div>
  )

}