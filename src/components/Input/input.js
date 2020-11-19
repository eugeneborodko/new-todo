import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { resetInputValue, changeInputValue } from './../../store/input/actions'
import { addNewTodo } from './../../store/todos/actions'

const Input = () => {
  const value = useSelector(state => state.input.value)
  const dispatch = useDispatch()

  const ref = React.createRef()

  const handleReset = () => {
    dispatch(resetInputValue())
    ref.current.focus()
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      dispatch(addNewTodo(value))
      handleReset()
    }
  }

  return (
    <>
      <textarea
        style={{ display: 'block', marginBottom: 50 + 'px' }}
        placeholder="Enter assignment..."
        value={value}
        onChange={(e) => dispatch(changeInputValue(e.target.value))}
        ref={ref}
        onKeyDown={handleEnter}
        autoFocus
      >
      </textarea>

      <button
        style={{ marginRight: 30 + 'px' }}
        onClick={() => {
          dispatch(addNewTodo(value))
          dispatch(resetInputValue())
          ref.current.focus()
        }}
      >
        Add task
      </button>

      <button onClick={handleReset}
      >
        Reset
      </button>
    </>
  )
}

export default Input