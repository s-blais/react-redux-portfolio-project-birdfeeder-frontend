// import logo from './logo.svg';
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import BirdsIndex from './components/BirdsIndex'
import { connect } from 'react-redux'
import { fetchBirds } from './redux/actions/birdActions'

class App extends React.Component {
  
  componentDidMount() { this.props.fetchBirds() }
  
  render() {
    return (
      <div className="App">
        <Router>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/birds' component={BirdsIndex} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default connect(null, { fetchBirds })(App)
