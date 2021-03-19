import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import BirdsContainer from './components/birds/BirdsContainer'
import DaysContainer from './components/days/DaysContainer'
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
        <h1><span className="flip-bird">&#128038;</span> Birdfeeder &#128038;</h1>
        <Router>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/birds' component={BirdsContainer} />
            <Route path='/days' component={DaysContainer} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default connect(null, { fetchBirds, fetchDays })(App)
