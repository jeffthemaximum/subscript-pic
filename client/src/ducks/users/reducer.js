import * as t from './actionTypes'
import * as userConstants from './constants'

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
    case t.CREATE_SUCCESS:
    case t.AUTHENTICATE_FACEBOOK_SUCCESS:
      const { user, authToken } = action
      state = {
        ...state,
        [userConstants.JWT]: authToken,
        userInfo: user,
        fetching: false
      }
      break
    default:
      return state
  }

  return state
}
