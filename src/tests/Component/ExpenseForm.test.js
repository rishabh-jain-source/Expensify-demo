import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'

const expenses = [{
    id: 1,
    description: 'rent',
    note: '',
    amount: 100,
    createdAt: 0
}]

test('expense form ', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot();
})
test('expense form ', () => {
    const wrapper = shallow(<ExpenseForm expenses={ expenses[0]}/>)
    expect(wrapper).toMatchSnapshot();
})

test('dynamic data', () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('form').simulate('submit',  {
        
            preventDefault:()=>{}
        
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot();
})
test('changeInput', () => {
    const value='newdescription'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(0).simulate('change', {
        target:{value}
    })
    expect(wrapper.state('description')).toBe(value)
})
test('textarea change', () => {
    const value = 'myNOte'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('textarea').simulate('change', {
        target:{value}
    })
    expect(wrapper.state('note')).toBe(value)
})

test('on submit props', ()=>{
    const testSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={testSpy} />)
    wrapper.find('form').simulate('submit', {
        preventDefault:()=>{}
    })
    //expect(wrapper.state(error)).toBe('')
    expect(testSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt:`${expenses[0].createdAt}`
    })
})