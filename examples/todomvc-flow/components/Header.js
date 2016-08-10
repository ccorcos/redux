// @flow
import React from 'react'
import TodoTextInput from './TodoTextInput'
import type { Text } from '../types'

export type Props = {
  addTodo: (text: Text) => any
};

export default class Header extends React.Component {

  props: Props;

  handleSave(text: Text) {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }

  render() {
    return (
      <header className="header">
          <h1>todos</h1>
          <TodoTextInput newTodo
                         onSave={this.handleSave.bind(this)}
                         placeholder="What needs to be done?" />
      </header>
    )
  }
}
