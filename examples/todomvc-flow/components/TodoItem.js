// @flow
import React from 'react'
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'
import type { Todo, Id, Text } from '../types'

export type Props = {
  todo: Todo,
  editTodo: (id: Id, text: Text) => any,
  deleteTodo: (id: Id) => any,
  completeTodo: (id: Id) => any
};

export default class TodoItem extends React.Component {

  props: Props;
  state: { editing: boolean };

  constructor(props: Props) {
    super(props)
    this.state = {
      editing: false
    }
  }

  handleDoubleClick() {
    this.setState({ editing: true })
  }

  handleSave(id: Id, text: Text) {
    if (text.length === 0) {
      this.props.deleteTodo(id)
    } else {
      this.props.editTodo(id, text)
    }
    this.setState({ editing: false })
  }

  render() {
    const { todo, completeTodo, deleteTodo } = this.props

    let element
    if (this.state.editing) {
      element = (
        <TodoTextInput text={todo.text}
                       editing={this.state.editing}
                       onSave={(text) => this.handleSave(todo.id, text)} />
      )
    } else {
      element = (
        <div className="view">
          <input className="toggle"
                 type="checkbox"
                 checked={todo.completed}
                 onChange={() => completeTodo(todo.id)} />
          <label onDoubleClick={this.handleDoubleClick.bind(this)}>
            {todo.text}
          </label>
          <button className="destroy"
                  onClick={() => deleteTodo(todo.id)} />
        </div>
      )
    }

    return (
      <li className={classnames({
        completed: todo.completed,
        editing: this.state.editing
      })}>
        {element}
      </li>
    )
  }
}
