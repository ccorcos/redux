// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux'

export type Id = number;

export type Text = string;

export type Todo = {
  id: Id,
  text: Text,
  completed: boolean
};

export type Todos = Array<Todo>;

export type TodoFilters =
    'SHOW_ALL'
  | 'SHOW_COMPLETED'
  | 'SHOW_ACTIVE'
  ;

export type State = {
  todos: Todos
};

export type Action =
    { type: 'ADD_TODO', text: Text }
  | { type: 'DELETE_TODO', id: Id }
  | { type: 'EDIT_TODO', id: Id, text: Text }
  | { type: 'COMPLETE_TODO', id: Id }
  | { type: 'COMPLETE_ALL' }
  | { type: 'CLEAR_COMPLETED' }
  ;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;
