import { takeEvery } from 'redux-saga/effects'
import { thingActions } from 'actions'

export function* fetchThing({ data }) {
  console.log(data)
  yield
}

export function* watchFetchThing() {
  yield takeEvery(thingActions.fetchStart, fetchThing)
}
