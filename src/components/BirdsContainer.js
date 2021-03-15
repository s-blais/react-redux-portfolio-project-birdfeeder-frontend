import React from 'react'
import BirdForm from './BirdForm'
import BirdShow from './BirdShow'
import BirdsLibrary from './BirdsLibrary'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom';

class BirdsContainer extends React.Component {
  render() {  
    return (
      <Switch>
        <Route path={`${this.props.match.url}/new`} component={BirdForm} />
        {/* tried the below to resolve the nested/params refresh issue, but no good (see also BirdShow) */}
        {/* <Route path={`${this.props.match.url}/:birdId`} render={(props) => <BirdShow birdId={props} />} /> */}
        <Route path={`${this.props.match.url}/:birdId`} component={BirdShow}/>
        <Route exact path={this.props.match.url} >
          <BirdsLibrary birds={this.props.birds} />
        </Route>
      </Switch>
    )
  }
}

const mapStateToProps = state => { 
  return { birds: state.birds }
}

export default connect(mapStateToProps)(BirdsContainer)