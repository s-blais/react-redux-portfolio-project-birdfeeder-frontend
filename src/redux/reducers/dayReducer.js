function dayReducer(state = [], action) {
  switch(action.type) {
    case "FETCH_DAYS_SUCCESS":
      return [].concat(action.payload)
    default: return state
  }
}

export default dayReducer