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
