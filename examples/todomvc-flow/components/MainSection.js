// @flow
import React from 'react'
import TodoItem from './TodoItem'
import Footer from './Footer'
import type { TodoFilters, Todos, Id, Text } from '../types'

const TODO_FILTERS: {[key: TodoFilters]: Function} = {
  'SHOW_ALL': () => true,
  'SHOW_ACTIVE': todo => !todo.completed,
  'SHOW_COMPLETED': todo => todo.completed
}

export type Props = {
  todos: Todos,
  addTodo: (text: Text) => any,
  deleteTodo: (id: Id) => any,
  editTodo: (id: Id, text: Text) => any,
  completeTodo: (id: Id) => any,
  completeAll: () => any,
  clearCompleted: () => any
};

export default class MainSection extends React.Component {

  props: Props;
  state: { filter: TodoFilters };

  constructor(props: Props) {
    super(props)
    this.state = { filter: 'SHOW_ALL' }
  }

  handleClearCompleted() {
    this.props.clearCompleted()
  }

  handleShow(filter: TodoFilters) {
    this.setState({ filter })
  }

  renderToggleAll(completedCount: number) {
    const { todos, completeAll } = this.props
    if (todos.length > 0) {
      return (
        <input className="toggle-all"
               type="checkbox"
               checked={completedCount === todos.length}
               onChange={completeAll} />
      )
    }
  }

  renderFooter(completedCount: number) {
    const { todos } = this.props
    const { filter } = this.state
    const activeCount = todos.length - completedCount

    if (todos.length) {
      return (
        <Footer completedCount={completedCount}
                activeCount={activeCount}
                filter={filter}
                onClearCompleted={this.handleClearCompleted.bind(this)}
                onShow={this.handleShow.bind(this)} />
      )
    }
  }

  render() {
    const { todos } = this.props
    const { filter } = this.state

    const filteredTodos = todos.filter(TODO_FILTERS[filter])
    const completedCount = todos.reduce((count, todo) =>
      todo.completed ? count + 1 : count,
      0
    )

    return (
      <section className="main">
        {this.renderToggleAll(completedCount)}
        <ul className="todo-list">
          {filteredTodos.map(todo =>
            <TodoItem key={todo.id} todo={todo} {...this.props} />
          )}
        </ul>
        {this.renderFooter(completedCount)}
      </section>
    )
  }
}

