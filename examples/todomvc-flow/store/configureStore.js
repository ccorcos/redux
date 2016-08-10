// @flow
import { createStore } from 'redux'
import rootReducer from '../reducers'
import type { Store, State } from '../types'

export default function configureStore(preloadedState?: State) {
  const store: Store = createStore(rootReducer, preloadedState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
