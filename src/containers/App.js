import React, { Component } from 'react'
import { connect } from 'react-redux'
import { locationActions } from 'actions'
import { func, arrayOf, shape, string } from 'prop-types'
import { locationsSelector } from 'reducers/locations'

import Location from 'components/Location'
import Button from 'components/Button'

export class App extends Component {
  static propTypes = {
    fetchLocation: func.isRequired,
    locations: arrayOf(
      shape({
        name: string.isRequired
      })
    )
  }

  static defaultProps = {
    locations: []
  }

  fetchLocation = () => {
    this.props.fetchLocation({ id: 'Julius-Leber-Brücke' })
  }

  renderLocations() {
    const { locations } = this.props
    return locations.map(location =>
      <Location location={location} key={location.name} />
    )
  }

  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <Button onClick={this.fetchLocation}>
          click to fetch station info
        </Button>
        {this.renderLocations()}
      </div>
    )
  }
}

export default connect(locationsSelector, {
  fetchLocation: locationActions.fetchStart
})(App)
