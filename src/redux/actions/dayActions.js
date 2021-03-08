export const fetchDays = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_DAYS' })
    fetch('http://localhost:3001/api/v1/days')
      .then(response => response.json())
      .then(daysjson => dispatch({ type: 'FETCH_DAYS_SUCCESS', payload: daysjson.data})
    )
  }
}