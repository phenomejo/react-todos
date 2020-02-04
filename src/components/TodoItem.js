import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addItem, addAsyncItem } from '../actions/actionTodo'

import UseHoc from './UseHoc'
import hocEx from '../hoc/hocEx'

const TodoItem = ({ todo }) => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  const newComp = hocEx(UseHoc, new Date().getTime())()

  const addTodo = () => {
    if (text.length > 0) {
      const payload = { id: todo.length + 1, text }
      dispatch(addItem(payload))
      setText('')
    }
  }

  const addAsyncTodo = () => {
    if (todo.length < 200) {
      dispatch(addAsyncItem(todo.length + 1))
    }
  }

  return (
    <>
      <div className="columns is-mobile is-centered">
        <div className="column is-half">
          <input type="text" className="input is-medium" value={text} onChange={e => setText(e.target.value)} />
        </div>
        <div className="column is-1">
          <button className="button is-info is-medium" onClick={addTodo}>ADD</button>
        </div>
        <div className="column is-2">
          <button className="button is-primary is-medium" onClick={addAsyncTodo}>ADD ASYNC</button>
        </div>
        <div className="column is-1">
          { newComp }
        </div>
      </div>
    </>
  )
}

export default TodoItem
