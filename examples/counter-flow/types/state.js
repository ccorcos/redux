// @flow

import type { Record, List } from 'immutable'

export type LoadingFlags = 'decrement'

export type State = Record<{
  count: number,
  pending: List<LoadingFlags>,
}>

export type Mutator = (s: State) => State
