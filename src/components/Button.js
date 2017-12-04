import React, { Component } from 'react'
import { func, oneOfType, arrayOf, node } from 'prop-types'

class Button extends Component {
  static propTypes = {
    onClick: func.isRequired,
    children: oneOfType([
      arrayOf(node),
      node
    ])
  }

  static defaultProps = {
    children: []
  }

  handleClick = () => {
    this.props.onClick()
  }

  render() {
    const { children } = this.props
    return (
      <button onClick={this.handleClick}>
        {children}
      </button>
    )
  }
}

export default Button
