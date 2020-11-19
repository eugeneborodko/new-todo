export const ADD_NEW_TODO = 'ADD_NEW_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

export const addNewTodo = (todo) => {
  return {
    type: ADD_NEW_TODO,
    payload: todo
  }
}

export const removeTodo = (index) => {
  return {
    type: REMOVE_TODO,
    payload: index
  }
}