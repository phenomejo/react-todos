import React from 'react'
import { useDispatch } from 'react-redux'

import { deleteItem } from '../actions/actionTodo'

const TodoList = ({ todo }) => {
  const dispatch = useDispatch()

  const renderTodo = todo.map((v, index) => {
    return (
      <div className="list-item notification is-default is-medium" key={index}>
        <button className="delete" onClick={e => dispatch(deleteItem(v.id))}></button>
        ({ index + 1 }.) {v.text}
      </div>
    )
  })

  return (
    <>
      { renderTodo }
    </>
  )
}

export default TodoList