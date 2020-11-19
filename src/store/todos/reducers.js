import { ADD_NEW_TODO, REMOVE_TODO } from './actions'

const initialState = {
  list: [
    'task 1',
    'task 2',
    '# task 3'
  ]
}

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TODO:
      if (action.payload.length > 0) {
        return {
          ...state,
          list: [action.payload].concat(state.list)
        }
      } else {
        return state
      }

    case REMOVE_TODO:
      return {
        ...state,
        list: state.list.slice(0, action.payload).concat(state.list.slice(action.payload + 1))
      }
  }

  return state
}