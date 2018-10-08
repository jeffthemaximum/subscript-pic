import { all } from 'redux-saga/effects'

import socialPlatforms from './ducks/socialPlatforms'

export default function * root () {
  yield all([
    ...socialPlatforms.sagas.watchers
  ])
}
