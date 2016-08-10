// @flow
import type { Action, Id, Text } from '../types'

export function addTodo(text: Text): Action {
  return { type: 'ADD_TODO', text }
}

export function deleteTodo(id: Id): Action {
  return { type: 'DELETE_TODO', id }
}

export function editTodo(id: Id, text: Text): Action {
  return { type: 'EDIT_TODO', id, text }
}

export function completeTodo(id: Id): Action {
  return { type: 'COMPLETE_TODO', id }
}

export function completeAll(): Action {
  return { type: 'COMPLETE_ALL' }
}

export function clearCompleted() {
  return { type: 'CLEAR_COMPLETED' }
}
