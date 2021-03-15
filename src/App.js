// import logo from './logo.svg';
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import BirdsContainer from './components/BirdsContainer'
import DaysIndex from './components/DaysIndex'
import { connect } from 'react-redux'
import { fetchBirds } from './redux/actions/birdActions'
import { fetchDays } from './redux/actions/dayActions'

class App extends React.Component {
  
  componentDidMount() { 
    this.props.fetchBirds()
    this.props.fetchDays()
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/birds' component={BirdsContainer} />
            <Route path='/days' component={DaysIndex} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default connect(null, { fetchBirds, fetchDays })(App)
