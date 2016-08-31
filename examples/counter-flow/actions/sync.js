// @flow

import type { SyncAction } from '../types'

export const increment = () : SyncAction => ({
  type: 'increment',
})

export const decrementSent = () : SyncAction => ({
  type: 'decrement/sent',
})

export const decrementSuccess = (count : number) : SyncAction => ({
  type: 'decrement/success',
  count,
})

export const decrementFailed = () : SyncAction => ({
  type: 'decrement/failed',
})
