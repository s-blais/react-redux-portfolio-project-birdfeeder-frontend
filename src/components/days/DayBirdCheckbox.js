import React from 'react'

const DayBirdCheckbox = (props) => (
  <div>
    <label>
      <input type="checkbox"
        id={props.id} 
        name={props.label} 
        checked={props.isSelected} 
        onChange={props.onCheckboxChange} 
      />
      &nbsp;{props.label}
    </label>
  </div>
)
export default DayBirdCheckbox