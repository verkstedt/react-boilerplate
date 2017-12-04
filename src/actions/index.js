import reduxCrud from 'redux-crud'

export const locationActions = reduxCrud.actionCreatorsFor('locations', { key: 'name' })
