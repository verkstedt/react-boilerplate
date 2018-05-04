import React from 'react'
import { string, shape } from 'prop-types'

const Location = props => {
  const { location: { name } } = props
  return (
    <p>{name}</p>
  )
}

Location.propTypes = {
  location: shape({
    name: string.isRequired
  }).isRequired
}

export default Location
