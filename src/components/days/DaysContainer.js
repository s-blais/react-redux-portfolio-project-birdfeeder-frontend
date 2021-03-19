import React from 'react'
import DayForm from './DayForm'
import DaysList from './DaysList'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

class DaysContainer extends React.Component {
  render() {  
    return (
      <Switch>
        <Route path={`${this.props.match.url}/new`} component={DayForm} />
        <Route exact path={this.props.match.url} >
          <DaysList days={this.props.days} />
        </Route>
      </Switch> 
    )
  }
}

const mapStateToProps = state => { 
  return { days: state.days }
}

export default connect(mapStateToProps)(DaysContainer)