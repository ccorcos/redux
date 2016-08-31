// @flow

import type { State, Mutator } from '../types'

// Waiting on PR to add `withMutations` to declaration
// https://github.com/facebook/immutable-js/pull/962
export const pipe = (fns : Array<Mutator>, state: State) : State =>
  // state.withMutations(s => fns.reduce((st, fn) => fn(st), s))
  fns.reduce((st, fn) => fn(st), state)

