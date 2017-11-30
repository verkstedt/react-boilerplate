import { resilientSpawn } from 'sagas/utils'
import { all } from 'redux-saga/effects'

import {
  watchFetchThing
} from './thing'

export default function* root() {
  yield all([
    resilientSpawn(watchFetchThing)
  ])
}

