export const fetchBirds = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_BIRDS' })
    fetch('http://localhost:3001/api/v1/birds')
      .then(response => response.json())
      .then(birdsjson => dispatch({ type: 'FETCH_BIRDS_SUCCESS', payload: birdsjson.data})
    )
  }
}