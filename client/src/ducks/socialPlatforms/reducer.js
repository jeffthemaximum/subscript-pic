import * as t from './actionTypes'

let defaultState = {
  fetching: false
}

export default function categories (state = defaultState, action) {
  switch (action.type) {
    case t.FETCH_REQUEST:
      state = Object.assign({}, state, { fetching: true })
      break
    case t.FETCH_SUCCESS:
      state = Object.assign({}, state, {
        fetching: false
      })
      break
    default:
      return state
  }

  return state
}
