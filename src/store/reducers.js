import { input } from './input/reducers'
import { todos } from './todos/reducers'

import { combineReducers } from 'redux'

export default combineReducers({
  input,
  todos
})