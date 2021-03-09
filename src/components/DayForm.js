import React from 'react'

class DayForm extends React.Component {

  state = {
    date: ""
    // birds: []
  }

  defaultToday = () => new Date().toISOString().substring(0,10)

  submit = e => {
    e.preventDefault()

  }

  render() {
    return (
      <div>
        <h1>Record Day's Sightings</h1>
        <form onSubmit={this.submit}>
          Date: <input type="text" placeholder={this.defaultToday()} />
          <input type="submit" value="record day" />
        </form>
      </div>

    )
  }

}

export default DayForm