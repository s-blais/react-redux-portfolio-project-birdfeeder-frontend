import React from 'react'
import { createBird } from '../redux/actions/birdActions'
import { connect } from 'react-redux'

class BirdForm extends React.Component {

  state = {
    name: "",
    audubon_url: "",
    image_url: ""
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = e => {
    e.preventDefault()
    this.props.createBird(this.state)
    this.setState({
      name: "",
      audubon_url: "",
      image_url: ""
    })
  }

  render() {
    return (
      <div>
        <h1>Add Bird to Library</h1>
        <form onSubmit={this.handleSubmit}>
          Name: <input 
            type="text" 
            name="name" 
            placeholder="Black-capped Chickadee" 
            onChange={this.handleChange} 
            value={this.state.name}
          /><br />
          Audubon Page URL: <input 
            type="text" 
            name="audubon_url" 
            placeholder="https://..." 
            onChange={this.handleChange} 
            value={this.state.audubon_url}
            /><br />
          Audubon Image URL: <input 
          type="text" 
          name="image_url" 
          placeholder="https://..." 
          value={this.state.image_url}
          onChange={this.handleChange} 
          /><br />
          <input type="submit" value="add bird to library" />
        </form>
      </div>

    )
  }

}

export default connect(null, { createBird })(BirdForm)