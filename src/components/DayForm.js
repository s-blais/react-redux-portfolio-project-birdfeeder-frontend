import React from 'react'
import { createDay } from '../redux/actions/dayActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import DayBirdCheckbox from './DayBirdCheckbox'

class DayForm extends React.Component {

  availableBirds = () => this.props.birds

  createCheckbox = bird => (
    <DayBirdCheckbox
      label={bird.attributes.name}
      isSelected={this.state.birds[bird]}
      id={bird.id}
      onCheckboxChange={this.handleCheckboxChange}
      key={bird.id}
    />
  )

  createCheckboxes = () => this.availableBirds().map(this.createCheckbox)

  handleCheckboxChange = e => {
    const birdId = e.target.id
    this.setState(previousState => ({
      birds: { ...previousState.birds, [birdId]: !previousState.birds[birdId]}
    }))
  }

  state = {
    date: "",
    // I think the following sometimes fires before there is anything ready?
    birds: this.availableBirds().reduce(
      (birds, bird) => ({ ...birds, [bird.id]: false }), {}
    )
  }

  setToday = e => {
    e.preventDefault()
    const today = new Date().toISOString().substring(0,10)
    this.setState({ date: today })
  }
  
  setYesterday = e => {
    e.preventDefault()
    const yesterday = new Date(new Date().setDate(new Date().getDate()-1)).toISOString().substring(0,10)
    this.setState({ date: yesterday })
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = e => {
    e.preventDefault()
    const birdIds = Object.keys(this.state.birds)
      .filter(birdId => this.state.birds[birdId])
    const dayData = {
      date: this.state.date,
      bird_ids: birdIds 
    }
    // console.log(dayData)
    this.props.createDay(dayData)
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
          <br />
          {this.createCheckboxes()}
        </form>
        <h4>New bird(s) at the birdfeeder not listed above? <Link to='/birds/new'>Start here!</Link></h4>
      </div>
    )
  }

}

const mapStateToProps = state => { 
  return { birds: state.birds }
}

export default connect(mapStateToProps, { createDay })(DayForm)