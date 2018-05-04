import { takeEvery, call } from 'redux-saga/effects'
import { locationConsts } from 'consts'
import { locationActions } from 'actions'

import * as api from 'services/api'
import { fetchEntity } from 'sagas/utils'

export const fetchLocation = fetchEntity.bind(null, locationActions, api.fetchLocation)

export function* fetchLocationSaga({ data }) {
  yield call(fetchLocation, data)
}

export function* watchFetchLocation() {
  yield takeEvery(locationConsts.fetchStart, fetchLocationSaga)
}
