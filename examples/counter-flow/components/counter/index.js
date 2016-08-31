// @flow

import { connect } from 'react-redux'
import React from 'react'
import classnames from 'classnames'
import * as actions from '../../actions'
import type { State, Dispatch, Action } from '../../types'

type Props = {
  color: 'red' | 'blue',
  pending: boolean,
  count: number,
  decrement: Function,
  increment: Function,
}

const Counter = (props : Props) =>
  <div className="counter" style={{color: props.color}}>
    <div>
      <button className="decrement" onClick={props.decrement} disabled={props.pending}>{'-'}</button>
      <span className="count">{props.count}</span>
      <button className="increment" onClick={props.increment} disabled={props.pending}>{'+'}</button>
    </div>
  </div>

Counter.propTypes = {
  color: React.PropTypes.oneOf(['red', 'blue']).isRequired,
}

const mapStateToProps = (state: State) => ({
  count: state.get('count'),
  pending: state.get('pending').includes('decrement'),
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: () => dispatch(actions.increment()),
  decrement: (count) => () => dispatch(actions.decrement(count)),
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  decrement: dispatchProps.decrement(stateProps.count),
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Counter)
