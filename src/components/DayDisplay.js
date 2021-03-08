import React from 'react'
import { connect } from 'react-redux'

class DayDisplay extends React.Component {

  birdThumbnails = (ids) => {
    return (
      ids.map(id => {
        const bird = this.props.birds.find(b => b.id == id)
        const url = bird.attributes.image_url.replace("nas_bird_teaser_illustration", "bird_illustration")
        return <img src={url} style={{maxHeight: "60px", maxWidth: "60px", margin: "5px 5px 10px 10px"}} />
      })
    )
  }

  render() {
    return (
      <div>
        <b>{ this.props.day.attributes.date }</b>
        <br />
        { this.birdThumbnails(this.props.day.attributes.birds_ids) }
      </div>
    ) 
  }
}

const mapStateToProps = state => { 
  return { birds: state.birds }
}

export default connect(mapStateToProps)(DayDisplay)