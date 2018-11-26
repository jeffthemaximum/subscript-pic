import { call, put, takeLatest } from 'redux-saga/effects'
import _ from 'lodash'
import * as actionTypes from './actionTypes'
import * as api from '../../services/api'
import * as localStorageService from '../../services/localStorageService'
import * as userConstants from './constants'

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
    const authToken = _.get(response, 'headers.authorization')
    if (authToken) {
      yield call(localStorageService.setItem, userConstants.JWT, authToken)
      yield put({ type: actionTypes.CREATE_SUCCESS, user: response.data, authToken })
    } else {
      yield put({ type: actionTypes.CREATE_ERROR, code_status: response.error })
    }
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
    const authToken = _.get(response, 'headers.authorization')
    if (authToken) {
      yield call(localStorageService.setItem, userConstants.JWT, authToken)
      yield put({ type: actionTypes.AUTHENTICATE_FACEBOOK_SUCCESS, user: response.data, authToken })
    } else {
      yield put({ type: actionTypes.AUTHENTICATE_FACEBOOK_ERROR, code_status: response.error })
    }
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
