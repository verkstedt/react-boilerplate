import { resilientSpawn } from 'sagas/utils'
import { all } from 'redux-saga/effects'

import {
  watchFetchLocation
} from './locations'

export default function* root() {
  yield all([
    resilientSpawn(watchFetchLocation)
  ])
}

