// @flow
import todos from './todos'
import type { State, Action } from '../types'

// replace unsafe combineReducers
export default function rootReducer(state: ?State, action: Action): State {
  const s = state || {}
  return {
    todos: todos(s.todos, action)
  }
}
