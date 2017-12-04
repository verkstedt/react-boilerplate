import locationReducers from 'reducers/locations'

describe('location reducer', () => {
  it('should return the initial state', () => {
    expect(locationReducers(undefined, {})).toEqual([])
  })
  it('should handle fetchSuccess', () => {
    expect(
      locationReducers([], {
        type: 'LOCATIONS_FETCH_SUCCESS',
        records: [{ name: 'location1' }, { name: 'location 2' }]
      })
    ).toEqual([{ name: 'location1' }, { name: 'location 2' }])
  })
})
