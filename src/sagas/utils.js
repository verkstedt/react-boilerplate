import { call, put, spawn as originalSpawn } from 'redux-saga/effects'
import { trackError } from 'services/track'

function* wrap(saga, ...args) {
  const task = yield originalSpawn(saga, ...args)
  task.done.catch(error => { trackError(error) })
  return task
}

export function* fetchEntity(entityActions, requestFn, id, url) {
  const { response, error } = yield call(requestFn, url || id)

  if (response) {
    yield put(entityActions.fetchSuccess(response))
  } else {
    yield put(entityActions.fetchError(error))
  }
}


export const resilientSpawn = (saga, ...args) => call(wrap, saga, ...args)
