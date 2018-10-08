import * as types from './actionTypes'

export function fetchSocialPlatforms (options) {
  return {
    type: types.FETCH,
    options
  }
}
