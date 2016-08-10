// @flow
import type { Todo, Action } from '../types'

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]

function deleteTodo(state, id) {
  return state.filter(todo =>
    todo.id !== id
  )
}

function editTodo(state, id, text) {
  return state.map(todo =>
    todo.id === id ?
      Object.assign({}, todo, { text }) :
      todo
  )
}

function completeTodo(state, id) {
  return state.map(todo =>
    todo.id === id ?
      Object.assign({}, todo, { completed: !todo.completed }) :
      todo
  )
}

export default function todos(state: Array<Todo> = initialState, action: Action): Array<Todo> {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        },
        ...state
      ]

    case 'DELETE_TODO':
      return deleteTodo(state, action.id)

    case 'EDIT_TODO':
      return editTodo(state, action.id, action.text)

    case 'COMPLETE_TODO':
      return completeTodo(state, action.id)

    case 'COMPLETE_ALL':
      const areAllMarked = state.every(todo => todo.completed)
      return state.map(todo => Object.assign({}, todo, {
        completed: !areAllMarked
      }))

    case 'CLEAR_COMPLETED':
      return state.filter(todo => todo.completed === false)

    default:
      return state
  }
}
