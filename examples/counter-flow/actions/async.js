// @flow

import * as api from '../api'
import * as sync from '../actions/sync'
import type { AsyncAction } from '../types'

export const decrement = (count: number) : AsyncAction<?number> =>
  async dispatch => {
    dispatch(sync.decrementSent())
    const response = await api.decrement(count)
    if (response.status !== 200) {
      dispatch(sync.decrementFailed())
    } else {
      const result = await response.json()
      dispatch(sync.decrementSuccess(result.count))
      return result.count
    }
  }

