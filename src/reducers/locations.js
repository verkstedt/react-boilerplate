import reduxCrud from 'redux-crud'

const locationReducers = reduxCrud.List.reducersFor('locations')

export default locationReducers

export const locationsSelector = state => ({
  locations: state.locations
})
