import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import birdReducer from './reducers/birdReducer'
import thunk from 'redux-thunk'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  birds: birdReducer
})

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)),
)

export default store