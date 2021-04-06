import { shallow } from 'enzyme'
import React from 'react'
import {ExpensifySummary} from '../../components/ExpensifySummary'

test('SHould render expensifySummary', () => {
    const wrapper = shallow(<ExpensifySummary expenseTotal={100} expenseCount={1} />)
    expect(wrapper).toMatchSnapshot();
})
test('SHould render multiple expensifySummary', () => {
    const wrapper = shallow(<ExpensifySummary expenseTotal={100787} expenseCount={10} />)
    expect(wrapper).toMatchSnapshot();
})