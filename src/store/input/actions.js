export const RESET_INPUT_VALUE = 'RESET_INPUT_VALUE'
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE'

export const resetInputValue = () => {
  return {
    type: RESET_INPUT_VALUE
  }
}

export const changeInputValue = (value) => {
  return {
    type: CHANGE_INPUT_VALUE,
    payload: value
  }
}