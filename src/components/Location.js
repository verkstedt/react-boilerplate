import React, { Component } from 'react'
import { string, shape } from 'prop-types'

class Location extends Component {
  static propTypes = {
    location: shape({
      name: string.isRequired
    }).isRequired
  }

  render() {
    const { location: { name } } = this.props
    return (
      <p>{name}</p>
    )
  }
}

export default Location
