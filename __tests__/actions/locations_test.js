import { locationActions } from 'actions'
import { locationConsts } from 'consts'

describe('locationActions', () => {
  it('should create actions for fetching locations', () => {
    const data = { random: 'stuff' }
    const expectedAction = {
      type: locationConsts.fetchStart,
      data
    }
    expect(locationActions.fetchStart(data)).toEqual(expectedAction)
  })
})
