import React from 'react'
import DayDisplay from './DayDisplay'
import { connect } from 'react-redux'

class DaysIndex extends React.Component {
  render() {  
    return (
      <div>
        <h1>Days Index</h1>
        { this.props.days.map(day => <DayDisplay day={day} key={day.id} />)}
      </div>
    )
  }
}

const mapStateToProps = state => { 
  return { days: state.days }
}

export default connect(mapStateToProps)(DaysIndex)