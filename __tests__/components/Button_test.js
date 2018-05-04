import React from 'react'
import { shallow } from 'enzyme'

import Button from 'components/Button'

describe('<Button />', () => {
  it('should click', () => {
    const spy = jest.fn()
    const wrapper = shallow(<Button onClick={spy} />)
    wrapper.find('button').simulate('click')
    expect(spy.mock.calls.length).toEqual(1)
  })

  it('renders children when passed in', () => {
    const spy = jest.fn()
    const wrapper = shallow((
      <Button onClick={spy}>
        <div className="unique" />
      </Button>
    ))
    expect(wrapper.contains(<div className="unique" />)).toBeTruthy()
  })

  it('renders correctly', () => {
    const spy = jest.fn()
    const button = shallow(<Button onClick={spy}><div className="unique" /></Button>)
    expect(button).toMatchSnapshot()
  })
})
