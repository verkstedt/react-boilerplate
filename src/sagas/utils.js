import { call, put, spawn as originalSpawn } from 'redux-saga/effects'
import { trackError } from 'services/track'

function* wrap(saga, ...args) {
  const task = yield originalSpawn(saga, ...args)
  task.done.catch(error => { trackError(error) })
  return task
}

export function* fetchEntity(entity, apiFn, id, url) {
  const { response, error } = yield call(apiFn, url || id)

  if (response) {
    yield put(entity.fetchSuccess(response))
  } else {
    yield put(entity.fetchError(error))
  }
}


export const resilientSpawn = (saga, ...args) => call(wrap, saga, ...args)
