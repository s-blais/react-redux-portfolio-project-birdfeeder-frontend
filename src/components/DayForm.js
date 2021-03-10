import React from 'react'
import { createDay } from '../redux/actions/dayActions'
import { connect } from 'react-redux'

class DayForm extends React.Component {

  state = {
    date: ""
    // birds: []
  }

  defaultToday = () => new Date().toISOString().substring(0,10)

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
            placeholder={this.defaultToday()} 
            onChange={this.handleChange} 
            value={this.state.date} 
          />
          <input type="submit" value="record day" />
        </form>
      </div>

    )
  }

}

export default connect(null, { createDay })(DayForm)