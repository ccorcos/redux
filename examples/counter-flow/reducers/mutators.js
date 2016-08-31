// @flow

import type { Mutator, LoadingFlags } from '../types'

// Waiting on PR to add `update` to declaration
// https://github.com/facebook/immutable-js/pull/962
export const increment : Mutator = (state) =>
  // state.update('count', c => c + 1)
  state.set('count', state.get('count') + 1)

export const setCount = (value : number) : Mutator => state =>
  state.set('count', value)

export const sent = (value : LoadingFlags) : Mutator  => state =>
  // state.update('pending', pending => pending.push(value))
  state.set('pending', state.get('pending').push(value))

export const recv = (value : LoadingFlags) : Mutator => state =>
  // state.update('pending', pending => pending.filter(v => v !== value))
  state.set('pending', state.get('pending').filter(v => v !== value))
