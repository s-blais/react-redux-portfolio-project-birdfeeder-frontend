export const fetchDays = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_DAYS' })
    fetch('http://localhost:3001/api/v1/days')
      .then(response => response.json())
      .then(daysjson => dispatch({ type: 'FETCH_DAYS_SUCCESS', payload: daysjson.data})
    )
  }
}

export const createDay = dayData => {
  return dispatch => {
    const newDay = {day: dayData}
    fetch('http://localhost:3001/api/v1/days', {
      method: 'POST', 
      headers: {"Content-Type": "application/json"}, 
      body: JSON.stringify(newDay)
    })
      .then(response => response.json())
      .then(newDayJson => dispatch({ type: 'CREATE_DAY_SUCCESS', payload: newDayJson.data})
    )
  }
}