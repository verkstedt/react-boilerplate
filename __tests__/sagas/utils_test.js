import { call, put } from 'redux-saga/effects'

import { locationActions } from 'actions'
import { fetchEntity } from 'sagas/utils'

const apiRequest = () => new Promise()

describe('fetchEntity', () => {
  test('should dispatch a fetchSuccess if there was a response', () => {
    const id = 1
    const gen = fetchEntity(locationActions, apiRequest, id)

    let next = gen.next()
    expect(next.value).toEqual(call(apiRequest, id))

    const response = { payload: true }

    next = gen.next({ response })
    expect(next.value).toEqual(
      put(locationActions.fetchSuccess(response))
    )
  })

  test('should dispatch a fetchError if there was no response', () => {
    const id = 1
    const gen = fetchEntity(locationActions, apiRequest, id)

    let next = gen.next()
    expect(next.value).toEqual(call(apiRequest, id))

    const error = { status: 500 }

    next = gen.next({ error })
    expect(next.value).toEqual(
      put(locationActions.fetchError(error))
    )
  })
})
