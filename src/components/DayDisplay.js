import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class DayDisplay extends React.Component {

  birdThumbnails = (ids) => {
    return (
      ids.map((id, idx) => {
        const bird = this.props.birds.find(b => b.id === id.toString()) // toString cleans up warnings
        return (
          <Link to={`/birds/${id}`} key={idx} >
            <img 
              src={bird.attributes.image_url} 
              style={{maxHeight: "60px", maxWidth: "60px", margin: "5px 5px 10px 10px"}} 
              alt={bird.attributes.name} 
              title={bird.attributes.name} />
          </Link>
          )
      })
    )
  }

  render() {
    return (
      <div>
        <h3>{ this.props.day.attributes.date }</h3>
        <br />
        { this.birdThumbnails(this.props.day.attributes.bird_ids) }
      </div>
    ) 
  }
}

const mapStateToProps = state => { 
  return { birds: state.birds }
}

export default connect(mapStateToProps)(DayDisplay)