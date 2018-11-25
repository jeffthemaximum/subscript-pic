import socialPlatforms from './ducks/socialPlatforms'
import users from './ducks/users'

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const { reducer: socialPlatformsReducer } = socialPlatforms
const { reducer: usersReducer } = users

const reducer = combineReducers({
  routing: routerReducer,
  socialPlatforms: socialPlatformsReducer,
  users: usersReducer
})

export default reducer
