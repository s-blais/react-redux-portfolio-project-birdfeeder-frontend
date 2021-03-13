import React from 'react'
import BirdCard from './BirdCard'
import BirdForm from './BirdForm'
import BirdShow from './BirdShow'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom'

class BirdsIndex extends React.Component {
  render() {  
    return (
      <Switch>
        <Route path={`${this.props.match.url}/new`} component={BirdForm} />
        <Route path={`${this.props.match.url}/:birdId`} component={BirdShow}/>
        <Route exact path={this.props.match.url} render={() => (
          <div>
            <h1>Birds Library</h1>
            <Link to='/birds/new'>Add a bird to the library</Link>
            <br /><br />
            { this.props.birds.map(bird => <BirdCard bird={bird} key={bird.id} />)}
          </div>
        )}/>
      </Switch>
    )
  }
}

const mapStateToProps = state => { 
  return { birds: state.birds }
}

export default connect(mapStateToProps)(BirdsIndex)