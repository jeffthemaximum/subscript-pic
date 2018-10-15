import { all } from 'redux-saga/effects'

import socialPlatforms from './ducks/socialPlatforms'
import users from './ducks/users'

export default function * root () {
  yield all([
    ...socialPlatforms.sagas.watchers,
    ...users.sagas.watchers
  ])
}
