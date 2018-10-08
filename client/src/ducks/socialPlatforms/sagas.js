import { call, put, takeLatest } from 'redux-saga/effects'
import * as actionTypes from './actionTypes'
import * as api from '../../services/api'

function * fetchSocialPlatforms (action) {
  yield put({ type: actionTypes.FETCH_REQUEST })

  // const requestOptions = yield select(selectors.getRequestOptions, action.options)

  const response = yield call(api.fetchSocialPlatforms, action.options)

  if (response.error) {
    yield put({ type: actionTypes.FETCH_ERROR, code_status: response.error })
  } else {
    yield put({ type: actionTypes.FETCH_SUCCESS, response })
  }
}

const watchers = [
  takeLatest(actionTypes.FETCH, fetchSocialPlatforms)
]

export {
  watchers,
  fetchSocialPlatforms
}
