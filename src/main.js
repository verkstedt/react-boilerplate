import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from 'containers/App'
import configureStore from 'store/configureStore'
import rootSaga from 'sagas'

const store = configureStore()
store.runSaga(rootSaga)

const renderComponent = Component => {
  render(
    <AppContainer>
      <Component store={store} />
    </AppContainer>,
    document.getElementById('root'),
  )
}

renderComponent(App)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/App', () => { renderComponent(App) })
}
