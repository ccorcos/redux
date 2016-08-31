// @flow

type Increment = {
  type: 'increment',
}
type DecrementSent = {
  type: 'decrement/sent',
}

type DecrementSuccess = {
  type: 'decrement/success',
  count: number,
}

type DecrementFailed = {
  type: 'decrement/failed',
}

export type SyncAction = Increment
                       | DecrementSent
                       | DecrementSuccess
                       | DecrementFailed

export type SyncDispatch = (a: SyncAction) => void

export type AsyncAction<T> = (d: SyncDispatch) => Promise<T>

export type AsyncDispatch = (a: AsyncAction<any>) => void

export type Action = SyncAction | AsyncAction<any>

export type Dispatch = (a: Action) => any
