// @flow
import React from 'react'
import classnames from 'classnames'
import type { Text } from '../types'

export type Props = {
  onSave: (text: Text) => void,
  text?: string,
  placeholder?: string,
  editing?: boolean,
  newTodo?: boolean
};

export default class TodoTextInput extends React.Component {

  props: Props;
  state: { text: Text }

  constructor(props: Props) {
    super(props)
    this.state = {
      text: this.props.text || ''
    }
  }

  /*

    A more idiomatic way to type check these handlers is commented out
    since I don't want to break the tests

  */
  handleSubmit(e: { target: { value: string }, which: number }) {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.onSave(text)
      if (this.props.newTodo) {
        this.setState({ text: '' })
      }
    }
  }

  handleChange(e: { target: { value: string } }) {
    this.setState({ text: e.target.value })
  }

  handleBlur(e: { target: { value: string } }) {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value)
    }
  }

  // handleSubmit(e: KeyboardEvent) {
  //   if (e.target instanceof HTMLInputElement) {
  //     const text = e.target.value.trim()
  //     if (e.which === 13) {
  //       this.props.onSave(text)
  //       if (this.props.newTodo) {
  //         this.setState({ text: '' })
  //       }
  //     }
  //   }
  // }

  // handleChange(e: Event) {
  //   if (e.target instanceof HTMLInputElement) {
  //     this.setState({ text: e.target.value })
  //   }
  // }

  // handleBlur(e: Event) {
  //   if (e.target instanceof HTMLInputElement && !this.props.newTodo) {
  //     this.props.onSave(e.target.value)
  //   }
  // }

  render() {
    return (
      <input className={
        classnames({
          edit: this.props.editing,
          'new-todo': this.props.newTodo
        })}
        type="text"
        placeholder={this.props.placeholder}
        autoFocus="true"
        value={this.state.text}
        onBlur={this.handleBlur.bind(this)}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)} />
    )
  }
}
