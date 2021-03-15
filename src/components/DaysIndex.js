import React from 'react'
import DayDisplay from './DayDisplay'
import DayForm from './DayForm'
import { connect } from 'react-redux'
import { Link, Route, Switch } from 'react-router-dom'

class DaysIndex extends React.Component {
  render() {  
    return (
      <Switch>
        <Route path={`${this.props.match.url}/new`} component={DayForm} />
        <Route exact path={this.props.match.url} render={() => (
          <div>
            <h1>Sightings by Day</h1>
            <Link to='/days/new'>Record a day's sightings</Link>
            { this.props.days.map(day => <DayDisplay day={day} key={day.id} />)}
          </div>
        )} />
      </Switch> 
    )
  }
}

const mapStateToProps = state => { 
  return { days: state.days }
}

export default connect(mapStateToProps)(DaysIndex)