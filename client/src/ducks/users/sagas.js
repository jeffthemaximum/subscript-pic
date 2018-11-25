import { call, put, takeLatest } from 'redux-saga/effects'
import * as actionTypes from './actionTypes'
import * as api from '../../services/api'

function * createUser (action) {
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

function * authenticateFacebook (action) {
  const { facebookResponse } = action

  const response = yield call(
    api.authenticateFacebookUser,
    facebookResponse
  )

  if (response.error) {
    yield put({ type: actionTypes.AUTHENTICATE_FACEBOOK_ERROR, code_status: response.error })
  } else {
    yield put({ type: actionTypes.AUTHENTICATE_FACEBOOK_SUCCESS, response })
  }
}

const watchers = [
  takeLatest(actionTypes.AUTHENTICATE_FACEBOOK, authenticateFacebook),
  takeLatest(actionTypes.CREATE, createUser)
]

export {
  watchers,
  createUser
}
