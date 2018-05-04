import locationReducers from 'reducers/locations'

describe('location reducer', () => {
  it('should return the initial state', () => {
    expect(locationReducers(undefined, {})).toEqual([])
  })
  it('should handle fetchSuccess', () => {
    expect(
      locationReducers([], {
        type: 'LOCATIONS_FETCH_SUCCESS',
        records: [{ id: 1, name: 'location1' }, { id: 2, name: 'location 2' }]
      })
    ).toEqual([{ id: 1, name: 'location1' }, { id: 2, name: 'location 2' }])
  })
})
