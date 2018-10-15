import { call, put, takeLatest } from 'redux-saga/effects'
import * as actionTypes from './actionTypes'
import * as api from '../../services/api'

function * createUser (action) {
  yield put({ type: actionTypes.CREATE_REQUEST })

  const { name, email, password, passwordConfirmation } = action

  const response = yield call(
    api.createUser,
    name,
    email,
    password,
    passwordConfirmation
  )

  if (response.error) {
    yield put({ type: actionTypes.CREATE_ERROR, code_status: response.error })
  } else {
    yield put({ type: actionTypes.CREATE_SUCCESS, response })
  }
}

const watchers = [
  takeLatest(actionTypes.CREATE, createUser)
]

export {
  watchers,
  createUser
}
