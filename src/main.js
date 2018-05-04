import React from 'react'
import { render } from 'react-dom'
import App from 'containers/App'
import configureStore from 'store/configureStore'
import rootSaga from 'sagas'

const store = configureStore()
store.runSaga(rootSaga)

render(
  <App store={store} />,
  document.getElementById('root')
)
