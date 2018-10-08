import socialPlatforms from './ducks/socialPlatforms'

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const { reducer: socialPlatformsReducer } = socialPlatforms

const reducer = combineReducers({
  routing: routerReducer,
  socialPlatforms: socialPlatformsReducer
})

export default reducer
