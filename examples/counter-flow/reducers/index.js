// @flow
import type { State, Action } from '../types'

export default function counter(state: State = 0, action: Action): State {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
