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
          <label htmlFor="name">Name: </label>&thinsp;
          <input 
            type="text" 
            name="name" 
            placeholder="Black-capped Chickadee" 
            onChange={this.handleChange} 
            value={this.state.name}
          /> <br />
          <label htmlFor="audubon_url">Audubon Page URL: </label>&thinsp;
          <input 
            type="text" 
            name="audubon_url" 
            placeholder="https://..." 
            onChange={this.handleChange} 
            value={this.state.audubon_url}
            /><br />
          <label htmlFor="image_url">Audubon Image URL: </label>&thinsp;
          <input 
            type="text" 
            name="image_url" 
            placeholder="https://..." 
            value={this.state.image_url}
            onChange={this.handleChange} 
          /><br />
          <input type="submit" value="add bird to library" />
        </form>
        <p>First, find the bird at <a href="https://www.audubon.org/bird-guide" target="_blank" rel="noreferrer">audubon.org</a></p>
        <p>Enter the bird's name</p>
        <p>Copy & paste the bird's page URL</p>
        <p>Copy & paste the bird's illustration URL</p>
      </div>

    )
  }

}

export default connect(null, { createBird })(BirdForm)