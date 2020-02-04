import React from 'react'

import { useSelector } from 'react-redux'

import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList'

const App = () => {
  const todo = useSelector(state => state.todo)

  return (
    <>
      <section className="section">
        <div className="container">
          <TodoItem todo={todo} />
          {todo.length === 0 ? null : <TodoList todo={todo} />}
        </div>
      </section>
    </>
  )
}

export default App
