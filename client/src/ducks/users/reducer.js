import * as t from './actionTypes'

let defaultState = {
  fetching: false
}

export default function users (state = defaultState, action) {
  switch (action.type) {
    case t.CREATE:
    case t.AUTHENTICATE_FACEBOOK:
      state = {
        ...state,
        fetching: true
      }
      break
    default:
      return state
  }

  return state
}
