// @flow
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions'
import type { Dispatch, State } from '../types'
import type { Connector } from 'react-redux'
import type { Props } from '../components/MainSection'

class App extends React.Component {
  render() {
    const { addTodo } = this.props
    return (
      <div>
        <Header addTodo={addTodo} />
        <MainSection {...this.props} />
      </div>
    )
  }
}

function mapStateToProps(state: State) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  // replace unsafe bindActionCreators
  return {
    addTodo: bindActionCreators(TodoActions.addTodo, dispatch),
    deleteTodo: bindActionCreators(TodoActions.deleteTodo, dispatch),
    editTodo: bindActionCreators(TodoActions.editTodo, dispatch),
    completeTodo: bindActionCreators(TodoActions.completeTodo, dispatch),
    completeAll: bindActionCreators(TodoActions.completeAll, dispatch),
    clearCompleted: bindActionCreators(TodoActions.clearCompleted, dispatch)
  }
}

const connector: Connector<{}, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connector(App)
