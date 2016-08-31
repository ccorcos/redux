// @flow

import { Record, List } from 'immutable'
import { pipe } from './utils'
import * as mutate from './mutators'
import type { State, SyncAction } from '../types'

const initialState : State = new (Record({
  count: 0,
  pending: List(),
}))({})

const reducer = (state : State = initialState, action : SyncAction) : State => {
  switch(action.type) {
    case 'increment':
      return pipe([
        mutate.increment,
      ], state)
    case 'decrement/sent':
      return pipe([
        mutate.sent('decrement'),
      ], state)
    case 'decrement/success':
      return pipe([
        mutate.recv('decrement'),
        mutate.setCount(action.count),
      ], state)
    case 'decrement/failure':
      return pipe([
        mutate.recv('decrement'),
      ], state)
    default:
      return state
  }
}

export default reducer
