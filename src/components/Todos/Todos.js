import { useSelector, useDispatch } from 'react-redux'

import ToDo from './../Todo/Todo'

const ToDos = () => {
  const todos = useSelector(state => state.todos.list)
  // console.log(JSON.parse(localStorage.getItem('todos'))

  // localStorage.setItem('todos', JSON.stringify(todos))

  // let a = JSON.parse(localStorage.getItem('todos'))
  // console.log(a)

  return (
    <div className="todos">
      <h1>To Do List</h1>
      {

        todos.map((task, i) => <ToDo task={task} key={i} index={i} />)
      }
    </div>
  )
}

export default ToDos