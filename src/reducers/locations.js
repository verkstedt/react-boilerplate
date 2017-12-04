import reduxCrud from 'redux-crud'

const locationReducers = reduxCrud.List.reducersFor('locations', { key: 'name' })

export default locationReducers

export const locationsSelector = state => ({
  locations: state.locations
})
