function birdReducer(state = [], action) {
  switch(action.type) {
    case "FETCH_BIRDS_SUCCESS":
      return [].concat(action.payload)
    default: return state
  }
}

export default birdReducer