export const fetchBirds = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_BIRDS' })
    fetch('http://localhost:3001/api/v1/birds')
      .then(response => response.json())
      .then(birdsjson => dispatch({ type: 'FETCH_BIRDS_SUCCESS', payload: birdsjson.data}))
  }
}

export const createBird = birdData => {
  return dispatch => {
    const newBird = {bird: birdData}
    fetch('http://localhost:3001/api/v1/birds', {
      method: 'POST', 
      headers: {"Content-Type": "application/json"}, 
      body: JSON.stringify(newBird)
    })
    .then(response => response.json())
    .then(newBirdJson => dispatch({ type: 'CREATE_BIRD_SUCCESS', payload: newBirdJson.data}))
  }
}