function birdReducer(state = [], action) {
  switch(action.type) {
    case "FETCH_BIRDS_SUCCESS":
      return [].concat(action.payload)
    case "CREATE_BIRD_SUCCESS":
      return state.concat(action.payload)
      // return [ ...state, action.payload]
    default: return state
  }
}

export default birdReducer