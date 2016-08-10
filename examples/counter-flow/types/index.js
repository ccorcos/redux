// @flow
import type { Store as ReduxStore } from 'redux'

export type State = number;

export type Action =
    { type: 'INCREMENT' }
  | { type: 'DECREMENT' };

export type Store = ReduxStore<State, Action>;
