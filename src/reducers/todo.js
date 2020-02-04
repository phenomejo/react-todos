import { ADD_ITEM, DELETE_ITEM } from '../utils/constant'

const todo = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [ ...state, action.payload]
    case DELETE_ITEM:
      const item = state.filter(v => v.id !== action.id)
      return item
    default:
      return state
  }
}

export default todo