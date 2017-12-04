import { call } from 'redux-saga/effects'

import {
  fetchLocationSaga,
  fetchLocation
} from 'sagas/locations'

describe('fetchLocation', () => {
  test('saga should call the bound function', () => {
    const gen = fetchLocationSaga({ data: { id: 1 } })

    const next = gen.next()
    expect(next.value).toEqual(call(fetchLocation, 1))
  })
})
