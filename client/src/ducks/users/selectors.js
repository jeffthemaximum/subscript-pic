import * as userConstants from './constants'

export const userIsSignedIn = state => state.users[userConstants.JWT]
