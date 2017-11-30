// eslint-disable react/jsx-no-undef
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { thingActions } from 'actions'
import { func } from 'prop-types'

class ReactComponent extends Component {
  static propTypes = {
    fetchThing: func.isRequired
  }
  triggerStuff = () => {
    this.props.fetchThing({ id: 1 })
  }

  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <button onClick={this.triggerStuff}>click me</button>
      </div>
    )
  }
}

export default connect(null, {
  fetchThing: thingActions.fetchStart
})(ReactComponent)
