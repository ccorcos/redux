// @flow
import React from 'react'
import classnames from 'classnames'
import type { TodoFilters } from '../types'

const FILTER_TITLES: {[key: TodoFilters]: string} = {
  'SHOW_ALL': 'All',
  'SHOW_ACTIVE': 'Active',
  'SHOW_COMPLETED': 'Completed'
}

export type Props = {
  completedCount: number,
  activeCount: number,
  filter: string,
  onClearCompleted: Function,
  onShow: (filter: TodoFilters) => void
};

export default class Footer extends React.Component {

  props: Props;

  renderTodoCount() {
    const { activeCount } = this.props
    const itemWord = activeCount === 1 ? 'item' : 'items'

    return (
      <span className="todo-count">
        <strong>{activeCount || 'No'}</strong> {itemWord} left
      </span>
    )
  }

  renderFilterLink(filter: TodoFilters) {
    const title = FILTER_TITLES[filter]
    const { filter: selectedFilter, onShow } = this.props

    return (
      <a className={classnames({ selected: filter === selectedFilter })}
         style={{ cursor: 'pointer' }}
         onClick={() => onShow(filter)}>
        {title}
      </a>
    )
  }

  renderClearButton() {
    const { completedCount, onClearCompleted } = this.props
    if (completedCount > 0) {
      return (
        <button className="clear-completed"
                onClick={onClearCompleted} >
          Clear completed
        </button>
      )
    }
  }

  render() {
    return (
      <footer className="footer">
        {this.renderTodoCount()}
        <ul className="filters">
          {[ 'SHOW_ALL', 'SHOW_ACTIVE', 'SHOW_COMPLETED' ].map(filter =>
            <li key={filter}>
              {this.renderFilterLink(filter)}
            </li>
          )}
        </ul>
        {this.renderClearButton()}
      </footer>
    )
  }
}
