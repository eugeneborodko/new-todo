import { useDispatch } from 'react-redux'
import ReactMarkdown from 'react-markdown'

import { removeTodo } from './../../store/todos/actions'

const ToDo = ({ task, index }) => {
  const dispatch = useDispatch()

  return (
    <>
      <div className="todo">
        <ReactMarkdown source={task} />
      </div>
      <button
        style={{ marginBottom: 30 + 'px' }}
        onClick={() => dispatch(removeTodo(index))}
      >
        Remove Task
      </button>
    </>
  )
}

export default ToDo