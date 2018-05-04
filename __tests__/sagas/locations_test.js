import { call } from 'redux-saga/effects'

import {
  fetchLocationSaga,
  fetchLocation
} from 'sagas/locations'

describe('fetchLocation', () => {
  const data = { lat: '52.486773', lon: '13.355627' }
  test('saga should call the bound function', () => {
    const gen = fetchLocationSaga({ data })

    const next = gen.next()
    expect(next.value).toEqual(call(fetchLocation, data))
  })
})
