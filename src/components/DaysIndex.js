import React from 'react'
import DayDisplay from './DayDisplay'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class DaysIndex extends React.Component {
  render() {  
    return (
      <div>
        <h1>Days Index</h1>
        <Link to='/days/new'>Record a day's sightings</Link>
        { this.props.days.map(day => <DayDisplay day={day} key={day.id} />)}
      </div>
    )
  }
}

const mapStateToProps = state => { 
  return { days: state.days }
}

export default connect(mapStateToProps)(DaysIndex)