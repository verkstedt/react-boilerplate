import { call, spawn as originalSpawn } from 'redux-saga/effects'
import { trackError } from 'services/track'

function* wrap(saga, ...args) {
  const task = yield originalSpawn(saga, ...args)
  task.done.catch(error => { trackError(error) })
  return task
}

export const resilientSpawn = (saga, ...args) => call(wrap, saga, ...args)
