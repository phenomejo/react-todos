import axios from 'axios'

import { ADD_ITEM, DELETE_ITEM } from '../utils/constant'

export const addItem = (payload) => {
  return {
    type: ADD_ITEM,
    payload
  }
}

export const addAsyncItem = (id) => {
  return async dispatch => {
    try {
      const resp = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      dispatch(addItem({ id: resp.data.id, text: resp.data.title }))
    } catch (error) {
      console.log('error'+ error)
    }
  }
}

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    id
  }
}