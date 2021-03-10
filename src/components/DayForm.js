import React from 'react'
import { createDay } from '../redux/actions/dayActions'
import { connect } from 'react-redux'

class DayForm extends React.Component {

  state = {
    date: ""
    // birds: []
  }

  setToday = e => {
    e.preventDefault()
    const today = new Date().toISOString().substring(0,10)
    document.querySelector("input[name='date']").value = today
  }
  
  setYesterday = e => {
    e.preventDefault()
    const yesterday = new Date(new Date().setDate(new Date().getDate()-1)).toISOString().substring(0,10)
    document.querySelector("input[name='date']").value = yesterday
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = e => {
    e.preventDefault()
    this.props.createDay(this.state)
    this.setState({
      date: ""
      // birds: []
    })
  }

  render() {
    return (
      <div>
        <h1>Record Day's Sightings</h1>
        <form onSubmit={this.handleSubmit}>
          Date: <input 
            type="text" 
            name="date" 
            placeholder="YYYY-MM-DD" 
            onChange={this.handleChange} 
            value={this.state.date} 
          />&thinsp;
          <button onClick={this.setToday}>today</button>&thinsp;<button onClick={this.setYesterday}>yesterday</button>
          <br />
          <input type="submit" value="record day" />
        </form>
      </div>

    )
  }

}

export default connect(null, { createDay })(DayForm)