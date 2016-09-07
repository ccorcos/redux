// @flow

import React from 'react'
import ReactDOM from 'react-dom'

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import Counter from './components/counter'
import reducer from './reducers'

const store = createStore(reducer, applyMiddleware(thunk))

const root = document.getElementById('root')

ReactDOM.render((
  <Provider store={store}>
    <Counter color="red"/>
  </Provider>
), root)
