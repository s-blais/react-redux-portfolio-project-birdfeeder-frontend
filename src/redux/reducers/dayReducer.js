function dayReducer(state = [], action) {
  switch(action.type) {
    case "FETCH_DAYS_SUCCESS":
      return [].concat(action.payload)
    case "CREATE_DAY_SUCCESS":
      return state.concat(action.payload)
      // return [ ...state, action.payload]
    default: return state
  }
}

export default dayReducer