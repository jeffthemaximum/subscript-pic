import * as types from './actionTypes'

export const createUser = (name, email, password, passwordConfirmation) => {
  return {
    type: types.CREATE,
    name,
    email,
    password,
    passwordConfirmation
  }
}

export const authenticateFacebookUser = (facebookResponse) => {
  return {
    type: types.AUTHENTICATE_FACEBOOK,
    facebookResponse
  }
}
