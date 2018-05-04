import React from 'react'
import { shallow, mount } from 'enzyme'

import { App } from 'containers/App'

describe('<App />', () => {
  it('should dispatch fetchLocation on click', () => {
    const spy = jest.fn()
    const wrapper = mount(<App fetchLocation={spy} />)
    wrapper.find('button').simulate('click')
    expect(spy.mock.calls.length).toEqual(1)
  })

  it('renders locations when passed in', () => {
    const spy = jest.fn()
    const wrapper = mount(
      <App locations={[{ name: 'location 1' }]} fetchLocation={spy} />
    )
    expect(wrapper.contains(<p>location 1</p>)).toBeTruthy()
  })

  it('renders correctly', () => {
    const spy = jest.fn()
    const button = shallow(<App fetchLocation={spy} />)
    expect(button).toMatchSnapshot()
  })
})
