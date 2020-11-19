import { RESET_INPUT_VALUE, CHANGE_INPUT_VALUE } from './actions'

const initialState = {
  value: ''
}

export const input = (state = initialState, action) => {
  switch (action.type) {
    case RESET_INPUT_VALUE:
      return {
        ...state,
        value: ''
      }

    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        value: action.payload
      }
  }

  return state
}