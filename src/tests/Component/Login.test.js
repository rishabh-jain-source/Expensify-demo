import { shallow } from 'enzyme'
import React from 'react'

import LoginPage from '../../components/LoginPage'

test('Login Page', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot()
})