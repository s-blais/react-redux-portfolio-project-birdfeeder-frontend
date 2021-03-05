import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import BirdsIndex from './components/BirdsIndex'

function App() {
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
  );
}

export default App;
